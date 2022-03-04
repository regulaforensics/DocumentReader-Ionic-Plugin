import { IonPage, isPlatform } from '@ionic/react';
import { DocumentReader, DocumentReaderScenario, Enum, DocumentReaderCompletion, DocumentReaderResults, DocumentReaderNotification } from '@regulaforensics/ionic-native-document-reader';
import React from "react";
import { File } from '@ionic-native/file'
import { AndroidPermissions } from "@ionic-native/android-permissions"
import { ImagePicker } from "@ionic-native/image-picker"

var doRfid: boolean = false
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

function onDeviceReady(){
  readFile("public/assets", "regula.license", (license: any) => {
    DocumentReader.prepareDatabase("Full").subscribe(r => {
      if (r != "database prepared")
        status.innerHTML = "Downloading database: " + r + "%"
      else {
        status.innerHTML = "Loading......"
        DocumentReader.initializeReader(license).then(m => onInitialized()).catch(error1)
      }
    })
  })
}

function addCertificates() {
  File.resolveDirectoryUrl(File.applicationDirectory + "certificates").then(dir => {
    dir.createReader().readEntries(entries => {
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
            DocumentReader.addPKDCertificates(certificates).then(s => console.log("certificate added")).catch(e => console.log(e))
          }, pkdResourceType)
        }
      }
    })
  })
}

function readFile(dirPath: string, fileName: string, callback: any, ...items: any) {
  File.resolveDirectoryUrl(File.applicationDirectory + dirPath).then(dir => File.getFile(dir, fileName, {})).then(fileEntry => fileEntry.file(file => {
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
  mainUI.style.display = isReadingRfid ? "none" : ""
  rfidUI.style.display = isReadingRfid ? "" : "none"
  rfidUIHeaderRef.innerHTML = rfidUIHeader
  rfidUIHeaderRef.style.color = rfidUIHeaderColor
  rfidDescriptionRef.innerHTML = rfidDescription
  rfidProgressRef.value = rfidProgress
}

function stopRfid() {
  hideRfidUI()
  DocumentReader.stopRFIDReader()
}

function handleCompletion(completion: DocumentReaderCompletion) {
  if (isReadingRfid && (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR))
    hideRfidUI()
  if (isReadingRfid && completion.action === Enum.DocReaderAction.NOTIFICATION)
    updateRfidUI(completion.results!!.documentReaderNotification!!)
  if (completion.action === Enum.DocReaderAction.COMPLETE)
    if (isReadingRfid) {
      if (completion.results!!.rfidResult !== 1)
        restartRfidUI()
      else {
        hideRfidUI()
        displayResults(completion.results!!)
      }
    }
    else
      handleResults(completion.results!!)
}

function showRfidUI() {
  // show animation
  isReadingRfid = true
  updateUI()
}

function hideRfidUI() {
  // show animation
  restartRfidUI()
  isReadingRfid = false
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
    rfidDescription = Enum.eRFID_DataFile_Type.getTranslation(notification.attachment!!)
  rfidUIHeader = "Reading RFID"
  rfidUIHeaderColor = "black"
  rfidProgress = notification.value!!
  updateUI()
  if (isPlatform("ios"))
    DocumentReader.setRfidSessionStatus(rfidDescription + "\n" + notification.value + "%")
}

function customRFID() {
  showRfidUI()
  DocumentReader.readRFID().subscribe(m =>
    handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
}

function usualRFID() {
  doRfid = false
  rfidCheckbox.checked = false
  var notification = "rfidNotificationCompletionEvent"
  var paCert = "paCertificateCompletionEvent"
  var taCert = "taCertificateCompletionEvent"
  var taSig = "taSignatureCompletionEvent"
  DocumentReader.startRFIDReader().subscribe(m => {
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
  DocumentReader.getAvailableScenarios().then(sc =>
    DocumentReader.isRFIDAvailableForUse().then(canRfid =>
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
    input.value = (DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name)!!
    if (index == 0)
      input.checked = true
    input.onclick = () => DocumentReader.setConfig({ processParams: { scenario: DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name } })
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
  if (doRfid && results != null && results.chipPage != 0) {
    var accessKey = results.getTextFieldValueByType!!({ fieldType: 51 })
    if (accessKey != null && accessKey != "") {
      accessKey = accessKey.replace(/^/g, '').replace(/\n/g, '')
      DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 1, })
    } else {
      accessKey = results.getTextFieldValueByType!!({ fieldType: 159 })
      if (accessKey != null && accessKey != "")
        DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 2, })
    }
    // customRFID()
    usualRFID()
  } else
    displayResults(results)
}

function displayResults(results: DocumentReaderResults) {
  status.innerHTML = results.getTextFieldValueByType!!({ fieldType: Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES })
  status.style.backgroundColor = "green"
  if (results.getGraphicFieldImageByType!!({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE }) != null)
    documentImage.src = "data:image/png;base64," + results.getGraphicFieldImageByType!!({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE })
  if (results.getGraphicFieldImageByType!!({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT }) != null)
    portraitImage.src = "data:image/png;base64," + results.getGraphicFieldImageByType!!({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT })
}

function clearResults() {
  status.innerHTML = "Ready"
  documentImage.src = "assets/img/id.png"
  portraitImage.src = "assets/img/portrait.png"
}

function scan() {
  DocumentReader.showScanner().subscribe(m =>
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
      DocumentReader.recognizeImage((file as string).substring(23)).subscribe(m =>
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
