import { Component, ViewChild, ElementRef } from '@angular/core'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx'
import { Platform } from '@ionic/angular'
import { DocumentReader, DocumentReaderScenario, Enum, DocumentReaderCompletion, DocumentReaderResults, DocumentReaderNotification, ScannerConfig, RecognizeConfig, DocReaderConfig, Functionality } from '@regulaforensics/ionic-native-document-reader/ngx'

var selectedScenario = "Mrz"
var doRfid: boolean = false
var isReadingRfidCustomUi: boolean = false
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

  constructor(public DocumentReader: DocumentReader, public platform: Platform, private camera: Camera) {
  }

  ionViewDidEnter() {
    function onInitialized() {
      app.status.nativeElement.innerHTML = "Ready"
      app.status.nativeElement.style.backgroundColor = "green"

      var functionality = new Functionality()
      functionality.showCaptureButton = true
      DocumentReader.setFunctionality(functionality)
    }

    var app = this
    var DocumentReader = this.DocumentReader
    app.cancelButton.nativeElement.addEventListener("click", hideRfidUI)
    updateUI()
    app.status.nativeElement.innerHTML = "loading......"
    app.status.nativeElement.style.backgroundColor = "grey"
    app.platform.ready().then(() => {
      readFile("www/assets", "regula.license", (license: string) => {
        var config = new DocReaderConfig()
        config.license = license
        config.delayedNNLoad = true
        DocumentReader.initializeReader(config).then((message: string) => {
          var callback = JSON.parse(message)
          if (!callback.success) {
            var error = "Init error: " + callback.error.message
            console.log(error)
            this.status.nativeElement.innerHTML = error
            this.status.nativeElement.style.backgroundColor = "red"
            return
          }
          console.log("Init complete")
          app.showScannerButton.nativeElement.addEventListener("click", scan)
          app.showImagePicker.nativeElement.addEventListener("click", recognize)
          DocumentReader.getAvailableScenarios().then(sc =>
            DocumentReader.getIsRFIDAvailableForUse().then((canRfid: boolean) =>
              postInitialize(JSON.parse(sc), canRfid)))
          onInitialized()
        })
      })
    })

    function readFile(dirPath: string, fileName: string, callback: any, ...items: any) {
      File.resolveDirectoryUrl(File.applicationDirectory + dirPath).then(dir => File.getFile(dir, fileName, null).then(fileEntry => fileEntry.file(file => {
        var reader = new FileReader()
        reader.onloadend = (_) => {
          var data = reader.result as String
          data = data.substring(data.indexOf(',') + 1)
          callback(data, items)
        }
        reader.readAsDataURL(file)
      })))
    }

    function updateUI() {
      app.mainUI.nativeElement.style.display = isReadingRfidCustomUi ? "none" : ""
      app.rfidUI.nativeElement.style.display = isReadingRfidCustomUi ? "" : "none"
      app.rfidUIHeader.nativeElement.innerHTML = rfidUIHeader
      app.rfidUIHeader.nativeElement.style.color = rfidUIHeaderColor
      app.rfidDescription.nativeElement.innerHTML = rfidDescription
      app.rfidProgress.nativeElement.value = rfidProgress
    }

    function handleCompletion(completion: DocumentReaderCompletion) {
      if (isReadingRfidCustomUi) {
        if (completion.action == Enum.DocReaderAction.ERROR) restartRfidUI()
        if (actionSuccess(completion.action) || actionError(completion.action)) {
          hideRfidUI()
          displayResults(completion.results)
        }
      } else if (actionSuccess(completion.action) || actionError(completion.action))
        handleResults(completion.results)
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
        updateRfidUI(DocumentReaderNotification.fromJson(JSON.parse(raw.substring(idProgress.length, raw.length))))
      else
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(raw)))
    }

    function postInitialize(scenarios: Array<any>, canRfid: boolean) {
      var inputs = []
      for (let index of scenarios) {
        var input = document.createElement("input")
        inputs.push(input)
        input.type = "radio"
        input.name = "scenario"
        input.value = DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name
        if (index == 0)
          input.checked = true
        input.onclick = () => selectedScenario = DocumentReaderScenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name
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
      if (doRfid && !isReadingRfid && results != null && results.chipPage != 0) {
        // customRFID()
        usualRFID()
      } else {
        isReadingRfid = false
        displayResults(results)
      }
    }

    function displayResults(results: DocumentReaderResults) {
      if (results == undefined) return

      DocumentReader.textFieldValueByType(results, Enum.eVisualFieldType.FT_SURNAME_AND_GIVEN_NAMES).then(value => {
        app.status.nativeElement.style.backgroundColor = "green"
        app.status.nativeElement.innerHTML = value
      })

      DocumentReader.graphicFieldImageByType(results, Enum.eGraphicFieldType.GF_DOCUMENT_IMAGE).then(value => {
        if (value != undefined)
          app.documentImage.nativeElement.src = "data:image/png;base64," + value
      })

      DocumentReader.graphicFieldImageByType(results, Enum.eGraphicFieldType.GF_PORTRAIT).then(value => {
        if (value != undefined)
          app.portraitImage.nativeElement.src = "data:image/png;base64," + value
      })
    }

    function clearResults() {
      app.status.nativeElement.innerHTML = "Ready"
      app.documentImage.nativeElement.src = "assets/img/id.png"
      app.portraitImage.nativeElement.src = "assets/img/portrait.png"
    }

    function scan() {
      var config = new ScannerConfig()
      config.scenario = selectedScenario
      DocumentReader.scan(config).subscribe((m: string) =>
        handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
    }

    function recognize() {
      app.camera.getPicture({
        destinationType: DestinationType.DATA_URL,
        mediaType: MediaType.PICTURE,
        sourceType: PictureSourceType.PHOTOLIBRARY
      }).then((result: string) => {
        clearResults()
        app.status.nativeElement.innerHTML = "processing image......"
        app.status.nativeElement.style.backgroundColor = "grey"
        var config = new RecognizeConfig()
        config.scenario = selectedScenario
        config.image = result
        DocumentReader.recognize(config).subscribe((m: string) =>
          handleCompletion(DocumentReaderCompletion.fromJson(JSON.parse(m))))
      })
    }
  }
}
