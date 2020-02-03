import { Component, ViewChild, ElementRef } from '@angular/core';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker/ngx'
import { Platform } from '@ionic/angular';

var DocumentReader;
var DocumentReaderResults;
var Scenario;
var Enum;
var doRfid = false;
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('status', { static: false }) status: ElementRef;
  @ViewChild('portraitImage', { static: true }) portraitImage: ElementRef;
  @ViewChild('documentImage', { static: true }) documentImage: ElementRef;
  @ViewChild('showScannerButton', { static: true }) showScannerButton: ElementRef;
  @ViewChild('showImagePicker', { static: true }) showImagePicker: ElementRef;
  @ViewChild('scenariosRadioGroup', { static: true }) scenariosRadioGroup: ElementRef;
  @ViewChild('rfidCheckbox', { static: true }) rfidCheckbox: ElementRef;
  @ViewChild('rfidCheckboxText', { static: true }) rfidCheckboxText: ElementRef;

  constructor(public platform: Platform, private imagePicker: ImagePicker) {
  }

  ionViewDidEnter() {
    var app = this;
    var error1 = e => {
      console.log(e);
      this.status.nativeElement.innerHTML = e;
      this.status.nativeElement.style.backgroundColor = "red";
    }
    var error2 = e => {
      e = JSON.stringify(e, undefined, 2);
      console.log(e);
      alert(e);
    }
    app.status.nativeElement.style.background = "red";
    app.status.nativeElement.innerHTML = "loading......";
    app.status.nativeElement.style.backgroundColor = "grey";
    app.platform.ready().then(() => {
      DocumentReader = cordova.require("cordova-plugin-document-reader-api.DocumentReader");
      DocumentReaderResults = DocumentReader.DocumentReaderResults;
      Scenario = DocumentReader.Scenario;
      Enum = DocumentReader.Enum;
      File.resolveDirectoryUrl(File.applicationDirectory).then(dir => {
        File.getFile(dir, "regula.license", null).then(fileEntry => {
          fileEntry.file(file => {
            var reader = new FileReader();
            reader.onloadend = (r) => {
              var license = reader.result;
              DocumentReader.prepareDatabase("Full", r => {
                console.log(r);
                if (r.substring(0, 11) == "Downloading")
                  app.status.nativeElement.innerHTML = r;
                else {
                  app.status.nativeElement.innerHTML = "Loading......";
                  DocumentReader.initializeReader(license, m => onInitialized(m), error1);
                }
              }, error1);
            }
            reader.readAsArrayBuffer(file);
          }, error2);
        }).catch(error2);
      }).catch(error2);
    });

    function onInitialized(message) {
      console.log(message);
      app.status.nativeElement.innerHTML = "Ready";
      app.status.nativeElement.style.backgroundColor = "green";
      app.showScannerButton.nativeElement.addEventListener("click", scan);
      if (app.platform.is("android"))
        app.showImagePicker.nativeElement.addEventListener("click", recognizeAndroid);
      if (app.platform.is("ios"))
        app.showImagePicker.nativeElement.addEventListener("click", recognizeIOS);
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
      }, null, error1);
      DocumentReader.getConfig(r => console.log(r), error1);
      DocumentReader.getAvailableScenarios(scenariosJSONString => {
        var scenarios = JSON.parse(scenariosJSONString);
        DocumentReader.getCanRFID(canRfid => postInitialize(scenarios, canRfid), error1);
      }, error1);
    }

    function postInitialize(scenarios, canRfid) {
      var inputs = [];
      for (let index of scenarios) {
        var input = document.createElement("input");
        inputs.push(input);
        input.type = "radio";
        input.name = "scenario";
        input.value = Scenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name;
        if (index == 0)
          input.checked = true;
        input.onclick = () => DocumentReader.setConfig({ processParams: { scenario: Scenario.fromJson(typeof index === "string" ? JSON.parse(index) : index).name } }, null, error1);
        input.style.display = "inline-block";
      }
      for (let input of inputs) {
        app.scenariosRadioGroup.nativeElement.appendChild(input);
        var label = document.createElement("span");
        label.innerHTML = input.value;
        label.style.display = "inline-block";
        label.style.width = "200px";
        label.onclick = () => input.click();
        app.scenariosRadioGroup.nativeElement.appendChild(label);
        app.scenariosRadioGroup.nativeElement.appendChild(document.createElement("br"));
      }
      if (canRfid) {
        app.rfidCheckbox.nativeElement.disabled = false;
        app.rfidCheckboxText.nativeElement.style.color = "black";
        app.rfidCheckboxText.nativeElement.innerHTML = "Process rfid reading";
        app.rfidCheckboxText.nativeElement.onclick = () => app.rfidCheckbox.nativeElement.click();
        app.rfidCheckbox.nativeElement.onchange = () => doRfid = app.rfidCheckbox.nativeElement.checked;
      }
    }

    function scan() {
      DocumentReader.showScanner(r => handleResults(r), error1);
    }

    function handleResults(jstring) {
      clearResults();
      var results = DocumentReaderResults.fromJson(JSON.parse(jstring));
      if (doRfid && results != null && results.chipPage != 0) {
        var accessKey = null;
        accessKey = results.getTextFieldValueByType(51);
        if (accessKey != null && accessKey != "") {
          accessKey = accessKey.replace(/^/g, '').replace(/\n/g, '');
          DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 1, }, null, error1);
        } else {
          accessKey = null;
          accessKey = results.getTextFieldValueByType(159);
          if (accessKey != null && accessKey != "")
            DocumentReader.setRfidScenario({ mMrz: accessKey, mPacePasswordType: 2, }, null, error1);
        }
        DocumentReader.startRFIDReader(r => displayResults(DocumentReaderResults.fromJson(JSON.parse(r))), error1);
      } else
        displayResults(results);
    }

    function displayResults(results) {
      app.status.nativeElement.innerHTML = results.getTextFieldValueByType(25);
      app.status.nativeElement.style.backgroundColor = "green";
      if (results.getGraphicFieldImageByType(207) != null) {
        var base64DocFront = "data:image/png;base64," + results.getGraphicFieldImageByType(207);
        app.documentImage.nativeElement.src = base64DocFront;
      }
      if (results.getGraphicFieldImageByType(201) != null) {
        var base64Portrait = "data:image/png;base64," + results.getGraphicFieldImageByType(201);
        app.portraitImage.nativeElement.src = base64Portrait;
      }
    }

    function clearResults() {
      app.status.nativeElement.innerHTML = "Ready";
      app.documentImage.nativeElement.src = "assets/img/id.png";
      app.portraitImage.nativeElement.src = "assets/img/portrait.png";
    }

    function recognizeIOS() {
      app.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
        if (results.length > 0) {
          clearResults();
          app.status.nativeElement.innerHTML = "copying image......";
          app.status.nativeElement.style.backgroundColor = "grey";
        }
        File.readAsDataURL("file://" + results[0].substring(0, (results[0] as string).lastIndexOf("/")), results[0].substring((results[0] as string).lastIndexOf("/") + 1)).then((file => {
          var base64 = (file as string).substring(23);
          app.status.nativeElement.innerHTML = "processing image......";
          app.status.nativeElement.style.backgroundColor = "grey";
          DocumentReader.recognizeImage(base64, r => handleResults(r), error1);
        })).catch(error2);
      }, error2);
    }

    function recognizeAndroid() {
      DocumentReader.permissionRead(r => recognizeIOS(), e => e == "no permission" ? recognizeAndroid() : null);
    }
  }

}
