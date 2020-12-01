import { Component, ViewChild, ElementRef } from '@angular/core'
import { File } from '@ionic-native/file'
import { ImagePicker } from '@ionic-native/image-picker/ngx'
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx'
import { Platform } from '@ionic/angular'
import { DocumentReader, Scenario, Enum, DocumentReaderCompletion, DocumentReaderResults, DocumentReaderNotification } from '@regulaforensics/ionic-native-document-reader/ngx';

var doRfid: boolean = false
var isReadingRfid: boolean = false
var rfidUIHeader: string = "Reading RFID"
var rfidUIHeaderColor: string = "black"
var rfidDescription: string = "Place your phone on top of the NFC tag"
var rfidProgress: number = -1

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('status', { static: false }) status: ElementRef
  @ViewChild('portraitImage', { static: true }) portraitImage: ElementRef
  @ViewChild('documentImage', { static: true }) documentImage: ElementRef
  @ViewChild('showScannerButton', { static: true }) showScannerButton: ElementRef
  @ViewChild('showImagePicker', { static: true }) showImagePicker: ElementRef
  @ViewChild('scenariosRadioGroup', { static: true }) scenariosRadioGroup: ElementRef
  @ViewChild('rfidCheckbox', { static: false }) rfidCheckbox: ElementRef
  @ViewChild('rfidCheckboxText', { static: true }) rfidCheckboxText: ElementRef

  @ViewChild('rfidUI', { static: false }) rfidUI: ElementRef
  @ViewChild('mainUI', { static: false }) mainUI: ElementRef
  @ViewChild('rfidUIHeader', { static: false }) rfidUIHeader: ElementRef
  @ViewChild('rfidDescription', { static: false }) rfidDescription: ElementRef
  @ViewChild('rfidProgress', { static: false }) rfidProgress: ElementRef
  @ViewChild('cancelButton', { static: false }) cancelButton: ElementRef

  constructor(public DocumentReader: DocumentReader, public platform: Platform, private imagePicker: ImagePicker, private androidPermissions: AndroidPermissions) {
  }

  ionViewDidEnter() {
    var app = this
    var DocumentReader = this.DocumentReader
    var error1 = e => {
      console.log(e)
      this.status.nativeElement.innerHTML = e
      this.status.nativeElement.style.backgroundColor = "red"
    }
    var error2 = e => {
      e = JSON.stringify(e, undefined, 2)
      console.log(e)
      alert(e)
    }

    app.cancelButton.nativeElement.addEventListener("click", stopRfid)
    updateUI()
    app.status.nativeElement.innerHTML = "loading......"
    app.status.nativeElement.style.backgroundColor = "grey"
    app.platform.ready().then(() => {
      readFile("", "regula.license", (license) => {
        DocumentReader.prepareDatabase("Full").subscribe(r => {
          if (r != "database prepared")
            app.status.nativeElement.innerHTML = "Downloading database: " + r + "%"
          else {
            app.status.nativeElement.innerHTML = "Loading......"
            DocumentReader.initializeReader(license).then(m => onInitialized()).catch(error1)
          }
        })
      })
    })

    function addCertificates() {
      File.resolveDirectoryUrl(File.applicationDirectory + "certificates").then(dir => {
        dir.createReader().readEntries(entries => {
          for (let i = 0; i < entries.length; i++) {
            if (entries[i].isFile) {
              var findExt = entries[i].name.split('.')
              var pkdResourceType = 0
              if (findExt.length > 0)
                pkdResourceType = Enum.PKDResourceType.getType(findExt[findExt.length - 1].toLowerCase())
              readFile("certificates", entries[i].name, (file, resType) => {
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

    function readFile(dirPath: string, fileName: string, callback, ...items) {
      File.resolveDirectoryUrl(File.applicationDirectory + dirPath).then(dir => File.getFile(dir, fileName, null).then(fileEntry => fileEntry.file(file => {
        var reader = new FileReader()
        reader.onloadend = (evt) => {
          var data = reader.result as String
          data = data.substring(data.indexOf(',') + 1)
          callback(data, items)
        }
        reader.readAsDataURL(file)
      })))
    }

    function updateUI() {
      app.mainUI.nativeElement.style.display = isReadingRfid ? "none" : ""
      app.rfidUI.nativeElement.style.display = isReadingRfid ? "" : "none"
      app.rfidUIHeader.nativeElement.innerHTML = rfidUIHeader
      app.rfidUIHeader.nativeElement.style.color = rfidUIHeaderColor
      app.rfidDescription.nativeElement.innerHTML = rfidDescription
      app.rfidProgress.nativeElement.value = rfidProgress
    }

    function stopRfid() {
      hideRfidUI()
      DocumentReader.stopRFIDReader()
    }

    function handleCompletion(completion: DocumentReaderCompletion) {
      if (isReadingRfid && (completion.action === Enum.DocReaderAction.CANCEL || completion.action === Enum.DocReaderAction.ERROR))
        hideRfidUI()
      if (isReadingRfid && completion.action === Enum.DocReaderAction.NOTIFICATION)
        updateRfidUI(completion.results.documentReaderNotification)
      if (completion.action === Enum.DocReaderAction.COMPLETE)
        if (isReadingRfid){
          if (completion.results.rfidResult !== 1)
            restartRfidUI()
          else {
            hideRfidUI()
            displayResults(completion.results)
          }
        }
        else
          handleResults(completion.results)
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
      if (notification.code === Enum.eRFID_NotificationAndErrorCodes.RFID_NOTIFICATION_PCSC_READING_DATAGROUP)
        rfidDescription = Enum.eRFID_DataFile_Type.getTranslation(notification.number)
      rfidUIHeader = "Reading RFID"
      rfidUIHeaderColor = "black"
      rfidProgress = notification.value
      updateUI()
      if (app.platform.is("ios"))
        DocumentReader.setRfidSessionStatus(rfidDescription + "\n" + notification.value + "%")
    }

    function customRFID() {
      showRfidUI()
      DocumentReader.readRFID().subscribe(m =>
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
    }

    function usualRFID() {
      doRfid = false
      app.rfidCheckbox["el"].checked = false
      DocumentReader.startRFIDReader().subscribe(m =>
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
    }

    function onInitialized() {
      app.status.nativeElement.innerHTML = "Ready"
      app.status.nativeElement.style.backgroundColor = "green"
      app.showScannerButton.nativeElement.addEventListener("click", scan)
      if (app.platform.is("android"))
        app.showImagePicker.nativeElement.addEventListener("click", recognizeAndroid)
      if (app.platform.is("ios"))
        app.showImagePicker.nativeElement.addEventListener("click", recognize)
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
      // addCertificates()
    }

    function postInitialize(scenarios: Array<any>, canRfid: boolean) {
      var inputs = []
      for (let index of scenarios) {
        var input = document.createElement("input")
        inputs.push(input)
        input.type = "radio"
        input.name = "scenario"
        input.value = Scenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name
        if (index == 0)
          input.checked = true
        input.onclick = () => DocumentReader.setConfig({ processParams: { scenario: Scenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name } })
        input.style.display = "inline-block"
      }
      for (let input of inputs) {
        app.scenariosRadioGroup.nativeElement.appendChild(input)
        var label = document.createElement("span")
        label.innerHTML = input.value
        label.style.display = "inline-block"
        label.style.width = "200px"
        label.onclick = () => input.click()
        app.scenariosRadioGroup.nativeElement.appendChild(label)
        app.scenariosRadioGroup.nativeElement.appendChild(document.createElement("br"))
      }
      if (canRfid) {
        app.rfidCheckbox["el"].disabled = false
        app.rfidCheckboxText.nativeElement.style.color = "black"
        app.rfidCheckboxText.nativeElement.innerHTML = "Process rfid reading"
        app.rfidCheckbox["el"].onclick = () => doRfid = !doRfid
        app.rfidCheckboxText.nativeElement.onclick = () => app.rfidCheckbox["el"].click()
      }
    }

    function handleResults(results: DocumentReaderResults) {
      clearResults()
      if (doRfid && results != null && results.chipPage != 0) {
        var accessKey = results.getTextFieldValueByType({ fieldType: 51 })
        if (accessKey != null && accessKey != "") {
          accessKey = accessKey.replace(/^/g, '').replace(/\n/g, '')
          DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 1, })
        } else {
          accessKey = results.getTextFieldValueByType({ fieldType: 159 })
          if (accessKey != null && accessKey != "")
            DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 2, })
        }
        // customRFID()
        usualRFID()
      } else
        displayResults(results)
    }

    function displayResults(results: DocumentReaderResults) {
      app.status.nativeElement.innerHTML = results.getTextFieldValueByType({ fieldType: Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES })
      app.status.nativeElement.style.backgroundColor = "green"
      if (results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE }) != null)
        app.documentImage.nativeElement.src = "data:image/png;base64," + results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE })
      if (results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT }) != null)
        app.portraitImage.nativeElement.src = "data:image/png;base64," + results.getGraphicFieldImageByType({ fieldType: Enum.eGraphicFieldType.GF_PORTRAIT })
    }

    function clearResults() {
      app.status.nativeElement.innerHTML = "Ready"
      app.documentImage.nativeElement.src = "assets/img/id.png"
      app.portraitImage.nativeElement.src = "assets/img/portrait.png"
    }

    function scan() {
      DocumentReader.showScanner().subscribe(m =>
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
    }

    function recognize() {
      app.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
        if (results.length > 0) {
          clearResults()
          app.status.nativeElement.innerHTML = "copying image......"
          app.status.nativeElement.style.backgroundColor = "grey"
        }
        File.readAsDataURL((app.platform.is("ios") ? "file://" : "") + results[0].substring(0, (results[0] as string).lastIndexOf("/")), results[0].substring((results[0] as string).lastIndexOf("/") + 1)).then((file => {
          app.status.nativeElement.innerHTML = "processing image......"
          app.status.nativeElement.style.backgroundColor = "grey"
          DocumentReader.recognizeImage((file as string).substring(23)).subscribe(m =>
            handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
        })).catch(error2)
      }, error2)
    }

    function recognizeAndroid() {
      app.androidPermissions.checkPermission(app.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
        if (result.hasPermission)
          recognize()
        else
          app.androidPermissions.requestPermission(app.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
            if (result.hasPermission)
              recognize()
            else
              console.log("storage permission denied")
          }, err => console.log(JSON.stringify(err)))
      }, err => console.log(JSON.stringify(err)))
    }
  }
}
