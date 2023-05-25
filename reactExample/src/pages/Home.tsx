import { IonPage, isPlatform } from '@ionic/react';
import { DocumentReader, DocumentReaderScenario, Enum, DocumentReaderCompletion, DocumentReaderResults, DocumentReaderNotification } from '@regulaforensics/ionic-native-document-reader';
import React from "react";
import { DirectoryEntry, Entry, File, FileEntry, IFile } from '@awesome-cordova-plugins/file'
import { AndroidPermissions } from "@awesome-cordova-plugins/android-permissions"
import { ImagePicker } from "@awesome-cordova-plugins/image-picker"

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

var error1 = (e: any) => {
  console.log(e)
  status.innerHTML = e
  status.style.backgroundColor = "red"
}
var error2 = (e: any) => {
  e = JSON.stringify(e, undefined, 2)
  console.log(e)
  alert(e)
}

cancelButtonRef.addEventListener("click", stopRfid)
updateUI()
status.innerHTML = "loading......"
status.style.backgroundColor = "grey"
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  readFile("public/assets", "regula.license", (license: any) => {
    DocumentReader.prepareDatabase("Full").subscribe((response: string) => {
      if (response != "database prepared")
        status.innerHTML = "Downloading database: " + response + "%"
      else {
        status.innerHTML = "Loading......"
        DocumentReader.initializeReader({
          license: license,
          delayedNNLoad: true
        }).then((_r: string) => onInitialized()).catch(error1)
      }
    })
  })
}

function addCertificates() {
  File.resolveDirectoryUrl(File.applicationDirectory + "certificates").then((dir: DirectoryEntry) => {
    dir.createReader().readEntries((entries: Entry[]) => {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].isFile) {
          var findExt = entries[i].name.split('.')
          var pkdResourceType = 0
          if (findExt.length > 0)
            pkdResourceType = Enum.PKDResourceType.getType(findExt[findExt.length - 1].toLowerCase())
          readFile("certificates", entries[i].name, (file: any, resType: any) => {
            resType = resType[0]
            var certificates = []
            certificates.push({
              'binaryData': file,
              'resourceType': resType
            })
            DocumentReader.addPKDCertificates(certificates).then((_r: string) => console.log("certificate added")).catch(error1)
          }, pkdResourceType)
        }
      }
    })
  })
}

function readFile(dirPath: string, fileName: string, callback: any, ...items: any) {
  File.resolveDirectoryUrl(File.applicationDirectory + dirPath).then((dir: DirectoryEntry) => File.getFile(dir, fileName, {})).then((fileEntry: FileEntry) => fileEntry.file((file: IFile) => {
    var reader = new FileReader()
    reader.onloadend = (evt) => {
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

function stopRfid() {
  hideRfidUI()
  DocumentReader.stopRFIDReader()
}

function handleCompletion(completion?: DocumentReaderCompletion) {
  if (completion == undefined) return;
  if (isReadingRfidCustomUi && (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR))
    hideRfidUI()
  if (isReadingRfidCustomUi && completion.action === Enum.DocReaderAction.NOTIFICATION)
    updateRfidUI(completion.results!.documentReaderNotification!)
  if (completion.action === Enum.DocReaderAction.COMPLETE)
    if (isReadingRfidCustomUi) {
      if (completion.results!.rfidResult !== 1)
        restartRfidUI()
      else {
        hideRfidUI()
        displayResults(completion.results!)
      }
    }
    else
      handleResults(completion.results!)
  if (completion.action === Enum.DocReaderAction.TIMEOUT)
    handleResults(completion.results!)
}

function showRfidUI() {
  // show animation
  isReadingRfidCustomUi = true
  updateUI()
}

function hideRfidUI() {
  // show animation
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
  if (notification.code === Enum.eRFID_NotificationCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
    rfidDescription = notification.dataFileType!.toString()
  rfidUIHeader = "Reading RFID"
  rfidUIHeaderColor = "black"
  rfidProgress = notification.value!
  updateUI()
  if (isPlatform("ios"))
    DocumentReader.setRfidSessionStatus(rfidDescription + "\n" + notification.value + "%")
}

function customRFID() {
  showRfidUI()
  DocumentReader.readRFID().subscribe((m: string) =>
    handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
}

function usualRFID() {
  isReadingRfid = true
  var notification = "rfidNotificationCompletionEvent"
  var paCert = "paCertificateCompletionEvent"
  var taCert = "taCertificateCompletionEvent"
  var taSig = "taSignatureCompletionEvent"
  DocumentReader.startRFIDReader().subscribe((m: string) => {
    if (m.substring(0, notification.length) === notification) {
      m = m.substring(notification.length, m.length)
      console.log(notification + ": " + m)
    } else if (m.substring(0, paCert.length) === paCert) {
      m = m.substring(paCert.length, m.length)
      console.log(paCert + ": " + m)
    } else if (m.substring(0, taCert.length) === taCert) {
      m = m.substring(taCert.length, m.length)
      console.log(taCert + ": " + m)
    } else if (m.substring(0, taSig.length) === taSig) {
      m = m.substring(taSig.length, m.length)
      console.log(taSig + ": " + m)
    } else
      handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m)))
  })
}

function onInitialized() {
  status.innerHTML = "Ready"
  status.style.backgroundColor = "green"
  showScannerButton.addEventListener("click", scan)
  if (isPlatform("android"))
    showImagePicker.addEventListener("click", recognizeAndroid)
  if (isPlatform("ios"))
    showImagePicker.addEventListener("click", recognize)
  DocumentReader.setConfig({
    functionality: {
      videoCaptureMotionControl: true,
      showCaptureButton: true
    },
    customization: {
      showResultStatusMessages: true,
      showStatusMessages: true
    },
    processParams: {
      scenario: "Mrz",
      doRfid: false
    },
  })
  DocumentReader.getAvailableScenarios().then((sc: string) =>
    DocumentReader.isRFIDAvailableForUse().then((canRfid: boolean) =>
      postInitialize(JSON.parse(sc), canRfid)))
  DocumentReader.setRfidDelegate(Enum.RFIDDelegate.NO_PA)
  // addCertificates()
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
    input.onclick = () => DocumentReader.setConfig({ processParams: { scenario: DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index)!.name } })
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
  clearResults()
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
}

function clearResults() {
  status.innerHTML = "Ready"
  documentImage.src = "assets/img/id.png"
  portraitImage.src = "assets/img/portrait.png"
}

function scan() {
  DocumentReader.showScanner().subscribe((m: string) =>
    handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
}

function recognize() {
  ImagePicker.getPictures({ maximumImagesCount: 1 }).then((results: any) => {
    if (results.length > 0) {
      clearResults()
      status.innerHTML = "copying image......"
      status.style.backgroundColor = "grey"
    }
    File.readAsDataURL((isPlatform("ios") ? "file://" : "") + results[0].substring(0, (results[0] as string).lastIndexOf("/")), results[0].substring((results[0] as string).lastIndexOf("/") + 1)).then((file => {
      status.innerHTML = "processing image......"
      status.style.backgroundColor = "grey"
      let fileString = (file as string)
      DocumentReader.recognizeImage(fileString.substring(fileString.indexOf(",") + 1)).subscribe((m: string) =>
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
    })).catch(error2)
  }, error2)
}

function recognizeAndroid() {
  AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then((result: any) => {
    if (result.hasPermission)
      recognize()
    else
      AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then((result: any) => {
        if (result.hasPermission)
          recognize()
        else
          console.log("storage permission denied")
      }, (err: any) => console.log(JSON.stringify(err)))
  }, (err: any) => console.log(JSON.stringify(err)))
}

const Home: React.FC = () => {
  return (
    <IonPage>
    </IonPage>
  );
};

export default Home;
