import { IonPage } from '@ionic/react'
import { DocumentReader, DocumentReaderScenario, Enum, DocumentReaderCompletion, DocumentReaderResults, DocumentReaderNotification, ScannerConfig, RecognizeConfig, DocReaderConfig, Functionality } from '@regulaforensics/ionic-native-document-reader'
import React from "react"
import { DirectoryEntry, File, FileEntry, IFile } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera'

var selectedScenario = "Mrz"
var doRfid: boolean = false
var isReadingRfidCustomUi: boolean = false
var isReadingRfid: boolean = false
var rfidUIHeader: string = "Reading RFID"
var rfidUIHeaderColor: string = "black"
var rfidDescription: string = "Place your phone on top of the NFC tag"
var rfidProgress: number = -1

const status = document.querySelector('.status') as HTMLElement
const portraitImage = document.querySelector('.portraitImage') as any
const documentImage = document.querySelector('.documentImage') as any
const showScannerButton = document.querySelector('.showScannerButton') as HTMLElement
const showImagePicker = document.querySelector('.showImagePicker') as HTMLElement
const scenariosRadioGroup = document.querySelector('.scenariosRadioGroup') as HTMLElement
const rfidCheckbox = document.querySelector('.rfidCheckbox') as HTMLIonCheckboxElement
const rfidCheckboxText = document.querySelector('.rfidCheckboxText') as HTMLElement
const rfidUI = document.querySelector('.rfidUI') as HTMLElement
const mainUI = document.querySelector('.mainUI') as HTMLElement
const rfidUIHeaderRef = document.querySelector('.rfidUIHeader') as HTMLElement
const rfidDescriptionRef = document.querySelector('.rfidDescription') as HTMLElement
const rfidProgressRef = document.querySelector('.rfidProgress') as HTMLIonProgressBarElement
const cancelButtonRef = document.querySelector('.cancelButton') as HTMLElement

function onInitialized() {
  status.innerHTML = "Ready"
  status.style.backgroundColor = "green"

  var functionality = new Functionality()
  functionality.showCaptureButton = true
  DocumentReader.setFunctionality(functionality)
}

cancelButtonRef.addEventListener("click", hideRfidUI)
updateUI()
status.innerHTML = "loading......"
status.style.backgroundColor = "grey"
document.addEventListener("deviceready", onDeviceReady, false)

function onDeviceReady() {
  readFile("public/assets", "regula.license", (license: string) => {
    var config = new DocReaderConfig()
    config.license = license
    config.delayedNNLoad = true
    DocumentReader.initializeReader(config).then((message: string) => {
      var callback = JSON.parse(message)
      if (!callback.success) {
        var error = "Init error: " + callback.error.message
        console.log(error)
        status.innerHTML = error
        status.style.backgroundColor = "red"
        return
      }
      console.log("Init complete")
      showScannerButton.addEventListener("click", scan)
      showImagePicker.addEventListener("click", recognize)
      DocumentReader.getAvailableScenarios().then((sc: string) =>
        DocumentReader.getIsRFIDAvailableForUse().then((canRfid: boolean) =>
          postInitialize(JSON.parse(sc), canRfid)))
      onInitialized()
    })
  })
}

function readFile(dirPath: string, fileName: string, callback: any, ...items: any) {
  File.resolveDirectoryUrl(File.applicationDirectory + dirPath).then((dir: DirectoryEntry) => File.getFile(dir, fileName, {})).then((fileEntry: FileEntry) => fileEntry.file((file: IFile) => {
    var reader = new FileReader()
    reader.onloadend = (_) => {
      var data = reader.result as String
      data = data.substring(data.indexOf(',') + 1)
      callback(data, items)
    }
    reader.readAsDataURL(file)
  }))
}

function updateUI() {
  mainUI.style.display = isReadingRfidCustomUi ? "none" : ""
  rfidUI.style.display = isReadingRfidCustomUi ? "" : "none"
  rfidUIHeaderRef.innerHTML = rfidUIHeader
  rfidUIHeaderRef.style.color = rfidUIHeaderColor
  rfidDescriptionRef.innerHTML = rfidDescription
  rfidProgressRef.value = rfidProgress
}

function handleCompletion(completion: DocumentReaderCompletion) {
  if (isReadingRfidCustomUi) {
    if (completion.action == Enum.DocReaderAction.ERROR) restartRfidUI()
    if (actionSuccess(completion.action!) || actionError(completion.action!)) {
      hideRfidUI()
      displayResults(completion.results!)
    }
  } else if (actionSuccess(completion.action!) || actionError(completion.action!))
    handleResults(completion.results!)
}

function actionSuccess(action: number) {
  if (action == Enum.DocReaderAction.COMPLETE || action == Enum.DocReaderAction.TIMEOUT) return true
  return false
}

function actionError(action: number) {
  if (action == Enum.DocReaderAction.CANCEL || action == Enum.DocReaderAction.ERROR) return true
  return false
}

function showRfidUI() {
  // show animation
  isReadingRfidCustomUi = true
  updateUI()
}

function hideRfidUI() {
  // show animation
  DocumentReader.stopRFIDReader()
  restartRfidUI()
  isReadingRfidCustomUi = false
  rfidUIHeader = "Reading RFID"
  rfidUIHeaderColor = "black"
  updateUI()
}

function restartRfidUI() {
  rfidUIHeaderColor = "red"
  rfidUIHeader = "Failed!"
  rfidDescription = "Place your phone on top of the NFC tag"
  rfidProgress = -1
  updateUI()
}

function updateRfidUI(notification: DocumentReaderNotification) {
  if (notification.notificationCode === Enum.eRFID_NotificationCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
    rfidDescription = "ERFIDDataFileType: " + notification.dataFileType
  rfidUIHeader = "Reading RFID"
  rfidUIHeaderColor = "black"
  if (notification.progress != undefined)
    rfidProgress = notification.progress
  updateUI()
}

function customRFID() {
  showRfidUI()
  DocumentReader.readRFID(false, false, false).subscribe((m: string) => handleRfidCompletion(m))
}

function usualRFID() {
  isReadingRfid = true
  DocumentReader.startRFIDReader(false, false, false).subscribe((m: string) => handleRfidCompletion(m))
}

function handleRfidCompletion(raw: string) {
  var idDetected = "rfidOnChipDetectedEvent"
  var idProgress = "rfidOnProgressCompletion"
  var idRetry = "rfidOnRetryReadChipEvent"
  if (raw.substring(0, idDetected.length) === idDetected)
    console.log("chip detected")
  else if (raw.substring(0, idRetry.length) === idRetry)
    console.log("error reading chip, retrying...")
  else if (raw.substring(0, idProgress.length) === idProgress)
    updateRfidUI(DocumentReaderNotification.fromJson(JSON.parse(raw.substring(idProgress.length, raw.length)))!)
  else
    handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(raw))!)
}

function postInitialize(scenarios: Array<any>, canRfid: boolean) {
  var inputs = []
  for (let index of scenarios) {
    var input = document.createElement("input")
    inputs.push(input)
    input.type = "radio"
    input.name = "scenario"
    input.value = (DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index)!.name)!
    if (index == 0)
      input.checked = true
    input.onclick = () => selectedScenario = DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index)!.name!
    input.style.display = "inline-block"
  }
  for (let input of inputs) {
    scenariosRadioGroup.appendChild(input)
    var label = document.createElement("span")
    label.innerHTML = input.value
    label.style.display = "inline-block"
    label.style.width = "200px"
    label.onclick = () => input.click()
    scenariosRadioGroup.appendChild(label)
    scenariosRadioGroup.appendChild(document.createElement("br"))
  }
  if (canRfid) {
    rfidCheckbox.disabled = false
    rfidCheckboxText.style.color = "black"
    rfidCheckboxText.innerHTML = "Process rfid reading"
    rfidCheckbox.onclick = () => doRfid = !doRfid
  }
}

function handleResults(results: DocumentReaderResults) {
  if (doRfid && !isReadingRfid && results != null && results.chipPage != 0) {
    // customRFID()
    usualRFID()
  } else {
    isReadingRfid = false
    displayResults(results)
  }
}

function displayResults(results: DocumentReaderResults) {
  if (results == null) return

  DocumentReader.textFieldValueByType(results, Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES).then((value: string | undefined) => {
    if (value != null) {
      status.innerHTML = value
      status.style.backgroundColor = "green"
    }
  })

  DocumentReader.graphicFieldImageByType(results, Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE).then((value: string | undefined) => {
    if (value != null)
      documentImage.src = "data:image/png;base64," + value
  })

  DocumentReader.graphicFieldImageByType(results, Enum.eGraphicFieldType.GF_PORTRAIT).then((value: string | undefined) => {
    if (value != null)
      portraitImage.src = "data:image/png;base64," + value
  })

  DocumentReader.graphicFieldImageByTypeSource(results, Enum.eGraphicFieldType.GF_PORTRAIT, Enum.eRPRM_ResultType.RFID_RESULT_TYPE_RFID_IMAGE_DATA).then((value: string | undefined) => {
    if (value != null)
      portraitImage.src = "data:image/png;base64," + value
  })
}

function clearResults() {
  status.innerHTML = "Ready"
  status.style.backgroundColor = "green"
  readFile("public/assets/img", "id.png", (img: string) => {
    documentImage.src = "data:image/png;base64," + img
  })
  readFile("public/assets/img", "portrait.png", (img: string) => {
    portraitImage.src = "data:image/png;base64," + img
  })
}

function scan() {
  clearResults()
  var config = new ScannerConfig()
  config.scenario = selectedScenario
  DocumentReader.scan(config).subscribe((m: string) =>
    handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))!))
}

function recognize() {
  Camera.getPicture({
    destinationType: DestinationType.DATA_URL,
    mediaType: MediaType.PICTURE,
    sourceType: PictureSourceType.PHOTOLIBRARY
  }).then((result: string) => {
    clearResults()
    status.innerHTML = "processing image......"
    status.style.backgroundColor = "grey"
    var config = new RecognizeConfig()
    config.scenario = selectedScenario
    config.image = result
    DocumentReader.recognize(config).subscribe((m: string) =>
      handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))!))
  })
}

const Home: React.FC = () => {
  return (
    <IonPage>
    </IonPage>
  )
}

export default Home
