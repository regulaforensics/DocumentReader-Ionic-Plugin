import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var DocumentReaderScenario = /** @class */ (function () {
    function DocumentReaderScenario() {
    }
    DocumentReaderScenario.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderScenario;
        result.name = jsonObject["name"];
        result.caption = jsonObject["caption"];
        result.description = jsonObject["description"];
        result.multiPageOff = jsonObject["multiPageOff"];
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"];
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"];
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"];
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"];
        result.frameOrientation = jsonObject["frameOrientation"];
        result.uvTorch = jsonObject["uvTorch"];
        result.faceExt = jsonObject["faceExt"];
        result.seriesProcessMode = jsonObject["seriesProcessMode"];
        result.manualCrop = jsonObject["manualCrop"];
        return result;
    };
    return DocumentReaderScenario;
}());
export { DocumentReaderScenario };
var Rect = /** @class */ (function () {
    function Rect() {
    }
    Rect.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Rect;
        result.bottom = jsonObject["bottom"];
        result.top = jsonObject["top"];
        result.left = jsonObject["left"];
        result.right = jsonObject["right"];
        return result;
    };
    return Rect;
}());
export { Rect };
var DocumentReaderGraphicField = /** @class */ (function () {
    function DocumentReaderGraphicField() {
    }
    DocumentReaderGraphicField.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderGraphicField;
        result.sourceType = jsonObject["sourceType"];
        result.fieldType = jsonObject["fieldType"];
        result.light = jsonObject["light"];
        result.pageIndex = jsonObject["pageIndex"];
        result.originalPageIndex = jsonObject["originalPageIndex"];
        result.fieldName = jsonObject["fieldName"];
        result.lightName = jsonObject["lightName"];
        result.value = jsonObject["value"];
        result.fieldRect = Rect.fromJson(jsonObject["fieldRect"]);
        return result;
    };
    return DocumentReaderGraphicField;
}());
export { DocumentReaderGraphicField };
var DocumentReaderGraphicResult = /** @class */ (function () {
    function DocumentReaderGraphicResult() {
    }
    DocumentReaderGraphicResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderGraphicResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                var item = DocumentReaderGraphicField.fromJson(jsonObject["fields"][i]);
                if (item != undefined)
                    result.fields.push(item);
            }
        }
        return result;
    };
    return DocumentReaderGraphicResult;
}());
export { DocumentReaderGraphicResult };
var DocumentReaderValue = /** @class */ (function () {
    function DocumentReaderValue() {
    }
    DocumentReaderValue.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderValue;
        result.pageIndex = jsonObject["pageIndex"];
        result.sourceType = jsonObject["sourceType"];
        result.probability = jsonObject["probability"];
        result.value = jsonObject["value"];
        result.originalValue = jsonObject["originalValue"];
        result.boundRect = Rect.fromJson(jsonObject["boundRect"]);
        result.originalSymbols = [];
        if (jsonObject["originalSymbols"] != null) {
            for (var i in jsonObject["originalSymbols"]) {
                var item = DocumentReaderSymbol.fromJson(jsonObject["originalSymbols"][i]);
                if (item != undefined)
                    result.originalSymbols.push(item);
            }
        }
        result.rfidOrigin = DocumentReaderRfidOrigin.fromJson(jsonObject["rfidOrigin"]);
        return result;
    };
    return DocumentReaderValue;
}());
export { DocumentReaderValue };
var DocumentReaderTextField = /** @class */ (function () {
    function DocumentReaderTextField() {
    }
    DocumentReaderTextField.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderTextField;
        result.fieldType = jsonObject["fieldType"];
        result.lcid = jsonObject["lcid"];
        result.status = jsonObject["status"];
        result.lcidName = jsonObject["lcidName"];
        result.fieldName = jsonObject["fieldName"];
        result.value = jsonObject["value"];
        result.getValue = DocumentReaderValue.fromJson(jsonObject["getValue"]);
        result.values = [];
        if (jsonObject["values"] != null) {
            for (var i in jsonObject["values"]) {
                var item = DocumentReaderValue.fromJson(jsonObject["values"][i]);
                if (item != undefined)
                    result.values.push(item);
            }
        }
        result.comparisonList = [];
        if (jsonObject["comparisonList"] != null) {
            for (var i in jsonObject["comparisonList"]) {
                var item = DocumentReaderComparison.fromJson(jsonObject["comparisonList"][i]);
                if (item != undefined)
                    result.comparisonList.push(item);
            }
        }
        result.validityList = [];
        if (jsonObject["validityList"] != null) {
            for (var i in jsonObject["validityList"]) {
                var item = DocumentReaderValidity.fromJson(jsonObject["validityList"][i]);
                if (item != undefined)
                    result.validityList.push(item);
            }
        }
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        return result;
    };
    return DocumentReaderTextField;
}());
export { DocumentReaderTextField };
var DocumentReaderTextResult = /** @class */ (function () {
    function DocumentReaderTextResult() {
    }
    DocumentReaderTextResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderTextResult;
        result.status = jsonObject["status"];
        result.comparisonStatus = jsonObject["comparisonStatus"];
        result.validityStatus = jsonObject["validityStatus"];
        result.availableSourceList = [];
        if (jsonObject["availableSourceList"] != null) {
            for (var i in jsonObject["availableSourceList"]) {
                var item = DocumentReaderTextSource.fromJson(jsonObject["availableSourceList"][i]);
                if (item != undefined)
                    result.availableSourceList.push(item);
            }
        }
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                var item = DocumentReaderTextField.fromJson(jsonObject["fields"][i]);
                if (item != undefined)
                    result.fields.push(item);
            }
        }
        return result;
    };
    return DocumentReaderTextResult;
}());
export { DocumentReaderTextResult };
var Coordinate = /** @class */ (function () {
    function Coordinate() {
    }
    Coordinate.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Coordinate;
        result.x = jsonObject["x"];
        result.y = jsonObject["y"];
        return result;
    };
    return Coordinate;
}());
export { Coordinate };
var ElementPosition = /** @class */ (function () {
    function ElementPosition() {
    }
    ElementPosition.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ElementPosition;
        result.docFormat = jsonObject["docFormat"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.dpi = jsonObject["dpi"];
        result.pageIndex = jsonObject["pageIndex"];
        result.inverse = jsonObject["inverse"];
        result.perspectiveTr = jsonObject["perspectiveTr"];
        result.objArea = jsonObject["objArea"];
        result.objIntAngleDev = jsonObject["objIntAngleDev"];
        result.resultStatus = jsonObject["resultStatus"];
        result.angle = jsonObject["angle"];
        result.center = Coordinate.fromJson(jsonObject["center"]);
        result.leftTop = Coordinate.fromJson(jsonObject["leftTop"]);
        result.leftBottom = Coordinate.fromJson(jsonObject["leftBottom"]);
        result.rightTop = Coordinate.fromJson(jsonObject["rightTop"]);
        result.rightBottom = Coordinate.fromJson(jsonObject["rightBottom"]);
        return result;
    };
    return ElementPosition;
}());
export { ElementPosition };
var ImageQuality = /** @class */ (function () {
    function ImageQuality() {
    }
    ImageQuality.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQuality;
        result.featureType = jsonObject["featureType"];
        result.result = jsonObject["result"];
        result.type = jsonObject["type"];
        result.boundRects = [];
        if (jsonObject["boundRects"] != null) {
            for (var i in jsonObject["boundRects"]) {
                var item = Rect.fromJson(jsonObject["boundRects"][i]);
                if (item != undefined)
                    result.boundRects.push(item);
            }
        }
        return result;
    };
    return ImageQuality;
}());
export { ImageQuality };
var ImageQualityGroup = /** @class */ (function () {
    function ImageQualityGroup() {
    }
    ImageQualityGroup.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQualityGroup;
        result.count = jsonObject["count"];
        result.result = jsonObject["result"];
        result.imageQualityList = [];
        if (jsonObject["imageQualityList"] != null) {
            for (var i in jsonObject["imageQualityList"]) {
                var item = ImageQuality.fromJson(jsonObject["imageQualityList"][i]);
                if (item != undefined)
                    result.imageQualityList.push(item);
            }
        }
        result.pageIndex = jsonObject["pageIndex"];
        return result;
    };
    return ImageQualityGroup;
}());
export { ImageQualityGroup };
var DocumentReaderDocumentType = /** @class */ (function () {
    function DocumentReaderDocumentType() {
    }
    DocumentReaderDocumentType.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderDocumentType;
        result.pageIndex = jsonObject["pageIndex"];
        result.documentID = jsonObject["documentID"];
        result.dType = jsonObject["dType"];
        result.dFormat = jsonObject["dFormat"];
        result.dMRZ = jsonObject["dMRZ"];
        result.isDeprecated = jsonObject["isDeprecated"];
        result.name = jsonObject["name"];
        result.ICAOCode = jsonObject["ICAOCode"];
        result.dDescription = jsonObject["dDescription"];
        result.dYear = jsonObject["dYear"];
        result.dCountryName = jsonObject["dCountryName"];
        result.FDSID = [];
        if (jsonObject["FDSID"] != null) {
            for (var i in jsonObject["FDSID"]) {
                result.FDSID.push(jsonObject["FDSID"][i]);
            }
        }
        return result;
    };
    return DocumentReaderDocumentType;
}());
export { DocumentReaderDocumentType };
var DocumentReaderNotification = /** @class */ (function () {
    function DocumentReaderNotification() {
    }
    DocumentReaderNotification.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderNotification;
        result.notificationCode = jsonObject["notificationCode"];
        result.dataFileType = jsonObject["dataFileType"];
        result.progress = jsonObject["progress"];
        return result;
    };
    return DocumentReaderNotification;
}());
export { DocumentReaderNotification };
var AccessControlProcedureType = /** @class */ (function () {
    function AccessControlProcedureType() {
    }
    AccessControlProcedureType.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new AccessControlProcedureType;
        result.activeOptionIdx = jsonObject["activeOptionIdx"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        return result;
    };
    return AccessControlProcedureType;
}());
export { AccessControlProcedureType };
var FileData = /** @class */ (function () {
    function FileData() {
    }
    FileData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FileData;
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        return result;
    };
    return FileData;
}());
export { FileData };
var CertificateData = /** @class */ (function () {
    function CertificateData() {
    }
    CertificateData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CertificateData;
        result.length = jsonObject["length"];
        result.data = jsonObject["data"];
        return result;
    };
    return CertificateData;
}());
export { CertificateData };
var SecurityObjectCertificates = /** @class */ (function () {
    function SecurityObjectCertificates() {
    }
    SecurityObjectCertificates.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SecurityObjectCertificates;
        result.securityObject = CertificateData.fromJson(jsonObject["securityObject"]);
        return result;
    };
    return SecurityObjectCertificates;
}());
export { SecurityObjectCertificates };
var File = /** @class */ (function () {
    function File() {
    }
    File.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new File;
        result.readingTime = jsonObject["readingTime"];
        result.type = jsonObject["type"];
        result.typeName = jsonObject["typeName"];
        result.pAStatus = jsonObject["pAStatus"];
        result.readingStatus = jsonObject["readingStatus"];
        result.fileID = jsonObject["fileID"];
        result.fileData = FileData.fromJson(jsonObject["fileData"]);
        result.certificates = SecurityObjectCertificates.fromJson(jsonObject["certificates"]);
        result.docFieldsText = [];
        if (jsonObject["docFieldsText"] != null) {
            for (var i in jsonObject["docFieldsText"]) {
                result.docFieldsText.push(jsonObject["docFieldsText"][i]);
            }
        }
        result.docFieldsGraphics = [];
        if (jsonObject["docFieldsGraphics"] != null) {
            for (var i in jsonObject["docFieldsGraphics"]) {
                result.docFieldsGraphics.push(jsonObject["docFieldsGraphics"][i]);
            }
        }
        result.docFieldsOriginals = [];
        if (jsonObject["docFieldsOriginals"] != null) {
            for (var i in jsonObject["docFieldsOriginals"]) {
                result.docFieldsOriginals.push(jsonObject["docFieldsOriginals"][i]);
            }
        }
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        return result;
    };
    return File;
}());
export { File };
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Application;
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.applicationID = jsonObject["applicationID"];
        result.dataHashAlgorithm = jsonObject["dataHashAlgorithm"];
        result.unicodeVersion = jsonObject["unicodeVersion"];
        result.version = jsonObject["version"];
        result.files = [];
        if (jsonObject["files"] != null) {
            for (var i in jsonObject["files"]) {
                var item = File.fromJson(jsonObject["files"][i]);
                if (item != undefined)
                    result.files.push(item);
            }
        }
        return result;
    };
    return Application;
}());
export { Application };
var Value = /** @class */ (function () {
    function Value() {
    }
    Value.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Value;
        result.length = jsonObject["length"];
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.data = jsonObject["data"];
        result.format = jsonObject["format"];
        return result;
    };
    return Value;
}());
export { Value };
var Attribute = /** @class */ (function () {
    function Attribute() {
    }
    Attribute.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Attribute;
        result.type = jsonObject["type"];
        result.value = Value.fromJson(jsonObject["value"]);
        return result;
    };
    return Attribute;
}());
export { Attribute };
var Authority = /** @class */ (function () {
    function Authority() {
    }
    Authority.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Authority;
        result.data = jsonObject["data"];
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"]);
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                var item = Attribute.fromJson(jsonObject["attributes"][i]);
                if (item != undefined)
                    result.attributes.push(item);
            }
        }
        return result;
    };
    return Authority;
}());
export { Authority };
var Extension = /** @class */ (function () {
    function Extension() {
    }
    Extension.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Extension;
        result.data = jsonObject["data"];
        result.type = jsonObject["type"];
        return result;
    };
    return Extension;
}());
export { Extension };
var Validity = /** @class */ (function () {
    function Validity() {
    }
    Validity.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Validity;
        result.notAfter = Value.fromJson(jsonObject["notAfter"]);
        result.notBefore = Value.fromJson(jsonObject["notBefore"]);
        return result;
    };
    return Validity;
}());
export { Validity };
var CertificateChain = /** @class */ (function () {
    function CertificateChain() {
    }
    CertificateChain.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CertificateChain;
        result.origin = jsonObject["origin"];
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.paStatus = jsonObject["paStatus"];
        result.serialNumber = jsonObject["serialNumber"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.subjectPKAlgorithm = jsonObject["subjectPKAlgorithm"];
        result.fileName = Value.fromJson(jsonObject["fileName"]);
        result.validity = Validity.fromJson(jsonObject["validity"]);
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.subject = Authority.fromJson(jsonObject["subject"]);
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.extensions = [];
        if (jsonObject["extensions"] != null) {
            for (var i in jsonObject["extensions"]) {
                var item = Extension.fromJson(jsonObject["extensions"][i]);
                if (item != undefined)
                    result.extensions.push(item);
            }
        }
        return result;
    };
    return CertificateChain;
}());
export { CertificateChain };
var SignerInfo = /** @class */ (function () {
    function SignerInfo() {
    }
    SignerInfo.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SignerInfo;
        result.version = jsonObject["version"];
        result.paStatus = jsonObject["paStatus"];
        result.dataToHash = jsonObject["dataToHash"];
        result.digestAlgorithm = jsonObject["digestAlgorithm"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.serialNumber = Value.fromJson(jsonObject["serialNumber"]);
        result.signature = Value.fromJson(jsonObject["signature"]);
        result.subjectKeyIdentifier = Value.fromJson(jsonObject["subjectKeyIdentifier"]);
        result.issuer = Authority.fromJson(jsonObject["issuer"]);
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.signedAttributes = [];
        if (jsonObject["signedAttributes"] != null) {
            for (var i in jsonObject["signedAttributes"]) {
                var item = Extension.fromJson(jsonObject["signedAttributes"][i]);
                if (item != undefined)
                    result.signedAttributes.push(item);
            }
        }
        result.certificateChain = [];
        if (jsonObject["certificateChain"] != null) {
            for (var i in jsonObject["certificateChain"]) {
                var item = CertificateChain.fromJson(jsonObject["certificateChain"][i]);
                if (item != undefined)
                    result.certificateChain.push(item);
            }
        }
        return result;
    };
    return SignerInfo;
}());
export { SignerInfo };
var SecurityObject = /** @class */ (function () {
    function SecurityObject() {
    }
    SecurityObject.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SecurityObject;
        result.fileReference = jsonObject["fileReference"];
        result.version = jsonObject["version"];
        result.objectType = jsonObject["objectType"];
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        result.signerInfos = [];
        if (jsonObject["signerInfos"] != null) {
            for (var i in jsonObject["signerInfos"]) {
                var item = SignerInfo.fromJson(jsonObject["signerInfos"][i]);
                if (item != undefined)
                    result.signerInfos.push(item);
            }
        }
        return result;
    };
    return SecurityObject;
}());
export { SecurityObject };
var CardProperties = /** @class */ (function () {
    function CardProperties() {
    }
    CardProperties.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CardProperties;
        result.aTQA = jsonObject["aTQA"];
        result.bitRateR = jsonObject["bitRateR"];
        result.bitRateS = jsonObject["bitRateS"];
        result.chipTypeA = jsonObject["chipTypeA"];
        result.mifareMemory = jsonObject["mifareMemory"];
        result.rfidType = jsonObject["rfidType"];
        result.sAK = jsonObject["sAK"];
        result.support4 = jsonObject["support4"];
        result.supportMifare = jsonObject["supportMifare"];
        result.aTQB = jsonObject["aTQB"];
        result.aTR = jsonObject["aTR"];
        result.baudrate1 = jsonObject["baudrate1"];
        result.baudrate2 = jsonObject["baudrate2"];
        result.uID = jsonObject["uID"];
        return result;
    };
    return CardProperties;
}());
export { CardProperties };
var RFIDSessionData = /** @class */ (function () {
    function RFIDSessionData() {
    }
    RFIDSessionData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RFIDSessionData;
        result.totalBytesReceived = jsonObject["totalBytesReceived"];
        result.totalBytesSent = jsonObject["totalBytesSent"];
        result.status = jsonObject["status"];
        result.extLeSupport = jsonObject["extLeSupport"];
        result.processTime = jsonObject["processTime"];
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"]);
        result.accessControls = [];
        if (jsonObject["accessControls"] != null) {
            for (var i in jsonObject["accessControls"]) {
                var item = AccessControlProcedureType.fromJson(jsonObject["accessControls"][i]);
                if (item != undefined)
                    result.accessControls.push(item);
            }
        }
        result.applications = [];
        if (jsonObject["applications"] != null) {
            for (var i in jsonObject["applications"]) {
                var item = Application.fromJson(jsonObject["applications"][i]);
                if (item != undefined)
                    result.applications.push(item);
            }
        }
        result.securityObjects = [];
        if (jsonObject["securityObjects"] != null) {
            for (var i in jsonObject["securityObjects"]) {
                var item = SecurityObject.fromJson(jsonObject["securityObjects"][i]);
                if (item != undefined)
                    result.securityObjects.push(item);
            }
        }
        result.dataGroups = [];
        if (jsonObject["dataGroups"] != null) {
            for (var i in jsonObject["dataGroups"]) {
                result.dataGroups.push(jsonObject["dataGroups"][i]);
            }
        }
        result.dataFields = [];
        if (jsonObject["dataFields"] != null) {
            for (var i in jsonObject["dataFields"]) {
                var item = DataField.fromJson(jsonObject["dataFields"][i]);
                if (item != undefined)
                    result.dataFields.push(item);
            }
        }
        return result;
    };
    return RFIDSessionData;
}());
export { RFIDSessionData };
var DataField = /** @class */ (function () {
    function DataField() {
    }
    DataField.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DataField;
        result.data = jsonObject["data"];
        result.fieldType = jsonObject["fieldType"];
        return result;
    };
    return DataField;
}());
export { DataField };
var DocumentReaderAuthenticityCheck = /** @class */ (function () {
    function DocumentReaderAuthenticityCheck() {
    }
    DocumentReaderAuthenticityCheck.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderAuthenticityCheck;
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.typeName = jsonObject["typeName"];
        result.pageIndex = jsonObject["pageIndex"];
        result.elements = [];
        if (jsonObject["elements"] != null) {
            for (var i in jsonObject["elements"]) {
                var item = DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i]);
                if (item != undefined)
                    result.elements.push(item);
            }
        }
        return result;
    };
    return DocumentReaderAuthenticityCheck;
}());
export { DocumentReaderAuthenticityCheck };
var PDF417Info = /** @class */ (function () {
    function PDF417Info() {
    }
    PDF417Info.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PDF417Info;
        result.errorLevel = jsonObject["errorLevel"];
        result.columns = jsonObject["columns"];
        result.rows = jsonObject["rows"];
        return result;
    };
    return PDF417Info;
}());
export { PDF417Info };
var DocumentReaderBarcodeResult = /** @class */ (function () {
    function DocumentReaderBarcodeResult() {
    }
    DocumentReaderBarcodeResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderBarcodeResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                var item = DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i]);
                if (item != undefined)
                    result.fields.push(item);
            }
        }
        return result;
    };
    return DocumentReaderBarcodeResult;
}());
export { DocumentReaderBarcodeResult };
var DocumentReaderBarcodeField = /** @class */ (function () {
    function DocumentReaderBarcodeField() {
    }
    DocumentReaderBarcodeField.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderBarcodeField;
        result.barcodeType = jsonObject["barcodeType"];
        result.status = jsonObject["status"];
        result.pageIndex = jsonObject["pageIndex"];
        result.pdf417Info = PDF417Info.fromJson(jsonObject["pdf417Info"]);
        result.data = jsonObject["data"];
        return result;
    };
    return DocumentReaderBarcodeField;
}());
export { DocumentReaderBarcodeField };
var DocumentReaderAuthenticityResult = /** @class */ (function () {
    function DocumentReaderAuthenticityResult() {
    }
    DocumentReaderAuthenticityResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderAuthenticityResult;
        result.status = jsonObject["status"];
        result.checks = [];
        if (jsonObject["checks"] != null) {
            for (var i in jsonObject["checks"]) {
                var item = DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i]);
                if (item != undefined)
                    result.checks.push(item);
            }
        }
        return result;
    };
    return DocumentReaderAuthenticityResult;
}());
export { DocumentReaderAuthenticityResult };
var DocumentReaderAuthenticityElement = /** @class */ (function () {
    function DocumentReaderAuthenticityElement() {
    }
    DocumentReaderAuthenticityElement.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderAuthenticityElement;
        result.status = jsonObject["status"];
        result.elementType = jsonObject["elementType"];
        result.elementDiagnose = jsonObject["elementDiagnose"];
        result.elementTypeName = jsonObject["elementTypeName"];
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"];
        return result;
    };
    return DocumentReaderAuthenticityElement;
}());
export { DocumentReaderAuthenticityElement };
var DocumentReaderCompletion = /** @class */ (function () {
    function DocumentReaderCompletion() {
    }
    DocumentReaderCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderCompletion;
        result.action = jsonObject["action"];
        result.results = DocumentReaderResults.fromJson(jsonObject["results"]);
        result.error = RegulaException.fromJson(jsonObject["error"]);
        return result;
    };
    return DocumentReaderCompletion;
}());
export { DocumentReaderCompletion };
var RfidNotificationCompletion = /** @class */ (function () {
    function RfidNotificationCompletion() {
    }
    RfidNotificationCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RfidNotificationCompletion;
        result.notification = jsonObject["notification"];
        result.value = jsonObject["value"];
        return result;
    };
    return RfidNotificationCompletion;
}());
export { RfidNotificationCompletion };
var RegulaException = /** @class */ (function () {
    function RegulaException() {
    }
    RegulaException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RegulaException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        return result;
    };
    return RegulaException;
}());
export { RegulaException };
var PKDCertificate = /** @class */ (function () {
    function PKDCertificate() {
    }
    PKDCertificate.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PKDCertificate;
        result.binaryData = jsonObject["binaryData"];
        result.resourceType = jsonObject["resourceType"];
        result.privateKey = jsonObject["privateKey"];
        return result;
    };
    return PKDCertificate;
}());
export { PKDCertificate };
var TccParams = /** @class */ (function () {
    function TccParams() {
    }
    TccParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new TccParams;
        result.serviceUrlTA = jsonObject["serviceUrlTA"];
        result.serviceUrlPA = jsonObject["serviceUrlPA"];
        result.pfxCertUrl = jsonObject["pfxCertUrl"];
        result.pfxPassPhrase = jsonObject["pfxPassPhrase"];
        result.pfxCert = jsonObject["pfxCert"];
        return result;
    };
    return TccParams;
}());
export { TccParams };
var ImageInputParam = /** @class */ (function () {
    function ImageInputParam() {
    }
    ImageInputParam.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageInputParam;
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.type = jsonObject["type"];
        result.disableFrameShiftIR = jsonObject["disableFrameShiftIR"];
        result.doFlipYAxis = jsonObject["doFlipYAxis"];
        return result;
    };
    return ImageInputParam;
}());
export { ImageInputParam };
var PAResourcesIssuer = /** @class */ (function () {
    function PAResourcesIssuer() {
    }
    PAResourcesIssuer.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PAResourcesIssuer;
        result.data = jsonObject["data"];
        result.friendlyName = jsonObject["friendlyName"];
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                var item = PAAttribute.fromJson(jsonObject["attributes"][i]);
                if (item != undefined)
                    result.attributes.push(item);
            }
        }
        return result;
    };
    return PAResourcesIssuer;
}());
export { PAResourcesIssuer };
var PAAttribute = /** @class */ (function () {
    function PAAttribute() {
    }
    PAAttribute.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PAAttribute;
        result.type = jsonObject["type"];
        result.value = jsonObject["value"];
        return result;
    };
    return PAAttribute;
}());
export { PAAttribute };
var TAChallenge = /** @class */ (function () {
    function TAChallenge() {
    }
    TAChallenge.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new TAChallenge;
        result.data = jsonObject["data"];
        result.auxPCD = jsonObject["auxPCD"];
        result.challengePICC = jsonObject["challengePICC"];
        result.hashPK = jsonObject["hashPK"];
        result.idPICC = jsonObject["idPICC"];
        return result;
    };
    return TAChallenge;
}());
export { TAChallenge };
var DocumentReaderResultsStatus = /** @class */ (function () {
    function DocumentReaderResultsStatus() {
    }
    DocumentReaderResultsStatus.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderResultsStatus;
        result.overallStatus = jsonObject["overallStatus"];
        result.optical = jsonObject["optical"];
        result.detailsOptical = DetailsOptical.fromJson(jsonObject["detailsOptical"]);
        result.rfid = jsonObject["rfid"];
        result.detailsRFID = DetailsRFID.fromJson(jsonObject["detailsRFID"]);
        result.portrait = jsonObject["portrait"];
        result.stopList = jsonObject["stopList"];
        return result;
    };
    return DocumentReaderResultsStatus;
}());
export { DocumentReaderResultsStatus };
var DetailsOptical = /** @class */ (function () {
    function DetailsOptical() {
    }
    DetailsOptical.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetailsOptical;
        result.overallStatus = jsonObject["overallStatus"];
        result.mrz = jsonObject["mrz"];
        result.text = jsonObject["text"];
        result.docType = jsonObject["docType"];
        result.security = jsonObject["security"];
        result.imageQA = jsonObject["imageQA"];
        result.expiry = jsonObject["expiry"];
        result.vds = jsonObject["vds"];
        result.pagesCount = jsonObject["pagesCount"];
        return result;
    };
    return DetailsOptical;
}());
export { DetailsOptical };
var DetailsRFID = /** @class */ (function () {
    function DetailsRFID() {
    }
    DetailsRFID.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetailsRFID;
        result.pa = jsonObject["pa"];
        result.ca = jsonObject["ca"];
        result.aa = jsonObject["aa"];
        result.ta = jsonObject["ta"];
        result.bac = jsonObject["bac"];
        result.pace = jsonObject["pace"];
        result.overallStatus = jsonObject["overallStatus"];
        return result;
    };
    return DetailsRFID;
}());
export { DetailsRFID };
var VDSNCData = /** @class */ (function () {
    function VDSNCData() {
    }
    VDSNCData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new VDSNCData;
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.message = jsonObject["message"];
        result.signatureAlgorithm = jsonObject["signatureAlgorithm"];
        result.signature = BytesData.fromJson(jsonObject["signature"]);
        result.certificate = BytesData.fromJson(jsonObject["certificate"]);
        result.certificateChain = [];
        if (jsonObject["certificateChain"] != null) {
            for (var i in jsonObject["certificateChain"]) {
                var item = CertificateChain.fromJson(jsonObject["certificateChain"][i]);
                if (item != undefined)
                    result.certificateChain.push(item);
            }
        }
        result.notifications = [];
        if (jsonObject["notifications"] != null) {
            for (var i in jsonObject["notifications"]) {
                result.notifications.push(jsonObject["notifications"][i]);
            }
        }
        return result;
    };
    return VDSNCData;
}());
export { VDSNCData };
var BytesData = /** @class */ (function () {
    function BytesData() {
    }
    BytesData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new BytesData;
        result.data = jsonObject["data"];
        result.length = jsonObject["length"];
        result.status = jsonObject["status"];
        result.type = jsonObject["type"];
        return result;
    };
    return BytesData;
}());
export { BytesData };
var ImageInputData = /** @class */ (function () {
    function ImageInputData() {
    }
    ImageInputData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageInputData;
        result.pageIndex = jsonObject["pageIndex"];
        result.light = jsonObject["light"];
        result.type = jsonObject["type"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        result.bitmap = jsonObject["bitmap"];
        result.imgBytes = jsonObject["imgBytes"];
        return result;
    };
    return ImageInputData;
}());
export { ImageInputData };
var DocReaderDocumentsDatabase = /** @class */ (function () {
    function DocReaderDocumentsDatabase() {
    }
    DocReaderDocumentsDatabase.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocReaderDocumentsDatabase;
        result.databaseID = jsonObject["databaseID"];
        result.version = jsonObject["version"];
        result.date = jsonObject["date"];
        result.databaseDescription = jsonObject["databaseDescription"];
        result.countriesNumber = jsonObject["countriesNumber"];
        result.documentsNumber = jsonObject["documentsNumber"];
        result.size = jsonObject["size"];
        return result;
    };
    return DocReaderDocumentsDatabase;
}());
export { DocReaderDocumentsDatabase };
var DocumentReaderComparison = /** @class */ (function () {
    function DocumentReaderComparison() {
    }
    DocumentReaderComparison.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderComparison;
        result.sourceTypeLeft = jsonObject["sourceTypeLeft"];
        result.sourceTypeRight = jsonObject["sourceTypeRight"];
        result.status = jsonObject["status"];
        return result;
    };
    return DocumentReaderComparison;
}());
export { DocumentReaderComparison };
var DocumentReaderRfidOrigin = /** @class */ (function () {
    function DocumentReaderRfidOrigin() {
    }
    DocumentReaderRfidOrigin.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderRfidOrigin;
        result.dg = jsonObject["dg"];
        result.dgTag = jsonObject["dgTag"];
        result.entryView = jsonObject["entryView"];
        result.tagEntry = jsonObject["tagEntry"];
        return result;
    };
    return DocumentReaderRfidOrigin;
}());
export { DocumentReaderRfidOrigin };
var DocumentReaderTextSource = /** @class */ (function () {
    function DocumentReaderTextSource() {
    }
    DocumentReaderTextSource.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderTextSource;
        result.sourceType = jsonObject["sourceType"];
        result.source = jsonObject["source"];
        result.validityStatus = jsonObject["validityStatus"];
        return result;
    };
    return DocumentReaderTextSource;
}());
export { DocumentReaderTextSource };
var DocumentReaderSymbol = /** @class */ (function () {
    function DocumentReaderSymbol() {
    }
    DocumentReaderSymbol.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderSymbol;
        result.code = jsonObject["code"];
        result.rect = Rect.fromJson(jsonObject["rect"]);
        result.probability = jsonObject["probability"];
        return result;
    };
    return DocumentReaderSymbol;
}());
export { DocumentReaderSymbol };
var DocumentReaderValidity = /** @class */ (function () {
    function DocumentReaderValidity() {
    }
    DocumentReaderValidity.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderValidity;
        result.sourceType = jsonObject["sourceType"];
        result.status = jsonObject["status"];
        return result;
    };
    return DocumentReaderValidity;
}());
export { DocumentReaderValidity };
var OnlineProcessingConfig = /** @class */ (function () {
    function OnlineProcessingConfig() {
    }
    OnlineProcessingConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new OnlineProcessingConfig;
        result.mode = jsonObject["mode"];
        result.url = jsonObject["url"];
        result.processParams = ProcessParams.fromJson(jsonObject["processParams"]);
        result.imageFormat = jsonObject["imageFormat"];
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"];
        result.requestHeaders = jsonObject["requestHeaders"];
        return result;
    };
    return OnlineProcessingConfig;
}());
export { OnlineProcessingConfig };
var DocReaderConfig = /** @class */ (function () {
    function DocReaderConfig() {
    }
    DocReaderConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocReaderConfig;
        result.license = jsonObject["license"];
        result.customDb = jsonObject["customDb"];
        result.databasePath = jsonObject["databasePath"];
        result.licenseUpdate = jsonObject["licenseUpdate"];
        result.licenseUpdateTimeout = jsonObject["licenseUpdateTimeout"];
        result.delayedNNLoad = jsonObject["delayedNNLoad"];
        result.blackList = jsonObject["blackList"];
        return result;
    };
    return DocReaderConfig;
}());
export { DocReaderConfig };
var ScannerConfig = /** @class */ (function () {
    function ScannerConfig() {
    }
    ScannerConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ScannerConfig;
        result.scenario = jsonObject["scenario"];
        result.livePortrait = jsonObject["livePortrait"];
        result.extPortrait = jsonObject["extPortrait"];
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"]);
        result.cameraId = jsonObject["cameraId"];
        return result;
    };
    return ScannerConfig;
}());
export { ScannerConfig };
var RecognizeConfig = /** @class */ (function () {
    function RecognizeConfig() {
    }
    RecognizeConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RecognizeConfig;
        result.scenario = jsonObject["scenario"];
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"]);
        result.oneShotIdentification = jsonObject["oneShotIdentification"];
        result.dtc = jsonObject["dtc"];
        result.livePortrait = jsonObject["livePortrait"];
        result.extPortrait = jsonObject["extPortrait"];
        result.image = jsonObject["image"];
        result.data = jsonObject["data"];
        result.images = [];
        if (jsonObject["images"] != null) {
            for (var i in jsonObject["images"]) {
                result.images.push(jsonObject["images"][i]);
            }
        }
        result.imageInputData = [];
        if (jsonObject["imageInputData"] != null) {
            for (var i in jsonObject["imageInputData"]) {
                var item = ImageInputData.fromJson(jsonObject["imageInputData"][i]);
                if (item != undefined)
                    result.imageInputData.push(item);
            }
        }
        return result;
    };
    return RecognizeConfig;
}());
export { RecognizeConfig };
var License = /** @class */ (function () {
    function License() {
    }
    License.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new License;
        result.expiryDate = jsonObject["expiryDate"];
        result.countryFilter = [];
        if (jsonObject["countryFilter"] != null) {
            for (var i in jsonObject["countryFilter"]) {
                result.countryFilter.push(jsonObject["countryFilter"][i]);
            }
        }
        result.isRfidAvailable = jsonObject["isRfidAvailable"];
        return result;
    };
    return License;
}());
export { License };
var DocReaderVersion = /** @class */ (function () {
    function DocReaderVersion() {
    }
    DocReaderVersion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocReaderVersion;
        result.api = jsonObject["api"];
        result.core = jsonObject["core"];
        result.coreMode = jsonObject["coreMode"];
        result.database = DocReaderDocumentsDatabase.fromJson(jsonObject["database"]);
        return result;
    };
    return DocReaderVersion;
}());
export { DocReaderVersion };
var TransactionInfo = /** @class */ (function () {
    function TransactionInfo() {
    }
    TransactionInfo.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new TransactionInfo;
        result.transactionId = jsonObject["transactionId"];
        result.tag = jsonObject["tag"];
        result.sessionLogFolder = jsonObject["sessionLogFolder"];
        return result;
    };
    return TransactionInfo;
}());
export { TransactionInfo };
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderResults;
        result.chipPage = jsonObject["chipPage"];
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"];
        result.elapsedTime = jsonObject["elapsedTime"];
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"];
        result.morePagesAvailable = jsonObject["morePagesAvailable"];
        result.graphicResult = DocumentReaderGraphicResult.fromJson(jsonObject["graphicResult"]);
        result.textResult = DocumentReaderTextResult.fromJson(jsonObject["textResult"]);
        result.documentPosition = [];
        if (jsonObject["documentPosition"] != null) {
            for (var i in jsonObject["documentPosition"]) {
                var item = ElementPosition.fromJson(jsonObject["documentPosition"][i]);
                if (item != undefined)
                    result.documentPosition.push(item);
            }
        }
        result.barcodePosition = [];
        if (jsonObject["barcodePosition"] != null) {
            for (var i in jsonObject["barcodePosition"]) {
                var item = ElementPosition.fromJson(jsonObject["barcodePosition"][i]);
                if (item != undefined)
                    result.barcodePosition.push(item);
            }
        }
        result.mrzPosition = [];
        if (jsonObject["mrzPosition"] != null) {
            for (var i in jsonObject["mrzPosition"]) {
                var item = ElementPosition.fromJson(jsonObject["mrzPosition"][i]);
                if (item != undefined)
                    result.mrzPosition.push(item);
            }
        }
        result.imageQuality = [];
        if (jsonObject["imageQuality"] != null) {
            for (var i in jsonObject["imageQuality"]) {
                var item = ImageQualityGroup.fromJson(jsonObject["imageQuality"][i]);
                if (item != undefined)
                    result.imageQuality.push(item);
            }
        }
        result.rawResult = jsonObject["rawResult"];
        result.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"]);
        result.authenticityResult = DocumentReaderAuthenticityResult.fromJson(jsonObject["authenticityResult"]);
        result.barcodeResult = DocumentReaderBarcodeResult.fromJson(jsonObject["barcodeResult"]);
        result.documentType = [];
        if (jsonObject["documentType"] != null) {
            for (var i in jsonObject["documentType"]) {
                var item = DocumentReaderDocumentType.fromJson(jsonObject["documentType"][i]);
                if (item != undefined)
                    result.documentType.push(item);
            }
        }
        result.status = DocumentReaderResultsStatus.fromJson(jsonObject["status"]);
        result.vdsncData = VDSNCData.fromJson(jsonObject["vdsncData"]);
        result.dtcData = jsonObject["dtcData"];
        result.transactionInfo = TransactionInfo.fromJson(jsonObject["transactionInfo"]);
        return result;
    };
    return DocumentReaderResults;
}());
export { DocumentReaderResults };
var CameraSize = /** @class */ (function () {
    function CameraSize() {
    }
    CameraSize.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CameraSize;
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        return result;
    };
    return CameraSize;
}());
export { CameraSize };
var Functionality = /** @class */ (function () {
    function Functionality() {
    }
    Functionality.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Functionality;
        result.pictureOnBoundsReady = jsonObject["pictureOnBoundsReady"];
        result.showTorchButton = jsonObject["showTorchButton"];
        result.showCloseButton = jsonObject["showCloseButton"];
        result.videoCaptureMotionControl = jsonObject["videoCaptureMotionControl"];
        result.showCaptureButton = jsonObject["showCaptureButton"];
        result.showChangeFrameButton = jsonObject["showChangeFrameButton"];
        result.showSkipNextPageButton = jsonObject["showSkipNextPageButton"];
        result.useAuthenticator = jsonObject["useAuthenticator"];
        result.skipFocusingFrames = jsonObject["skipFocusingFrames"];
        result.showCameraSwitchButton = jsonObject["showCameraSwitchButton"];
        result.displayMetadata = jsonObject["displayMetadata"];
        result.isZoomEnabled = jsonObject["isZoomEnabled"];
        result.isCameraTorchCheckDisabled = jsonObject["isCameraTorchCheckDisabled"];
        result.recordScanningProcess = jsonObject["recordScanningProcess"];
        result.manualMultipageMode = jsonObject["manualMultipageMode"];
        result.singleResult = jsonObject["singleResult"];
        result.torchTurnedOn = jsonObject["torchTurnedOn"];
        result.preventScreenRecording = jsonObject["preventScreenRecording"];
        result.showCaptureButtonDelayFromDetect = jsonObject["showCaptureButtonDelayFromDetect"];
        result.showCaptureButtonDelayFromStart = jsonObject["showCaptureButtonDelayFromStart"];
        result.rfidTimeout = jsonObject["rfidTimeout"];
        result.forcePagesCount = jsonObject["forcePagesCount"];
        result.orientation = jsonObject["orientation"];
        result.captureMode = jsonObject["captureMode"];
        result.cameraMode = jsonObject["cameraMode"];
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result.cameraFrame = jsonObject["cameraFrame"];
        result.btDeviceName = jsonObject["btDeviceName"];
        result.zoomFactor = jsonObject["zoomFactor"];
        result.exposure = jsonObject["exposure"];
        result.videoRecordingSizeDownscaleFactor = jsonObject["videoRecordingSizeDownscaleFactor"];
        result.excludedCamera2Models = [];
        if (jsonObject["excludedCamera2Models"] != null) {
            for (var i in jsonObject["excludedCamera2Models"]) {
                result.excludedCamera2Models.push(jsonObject["excludedCamera2Models"][i]);
            }
        }
        result.cameraSize = CameraSize.fromJson(jsonObject["cameraSize"]);
        result.videoSessionPreset = jsonObject["videoSessionPreset"];
        return result;
    };
    return Functionality;
}());
export { Functionality };
var GlaresCheckParams = /** @class */ (function () {
    function GlaresCheckParams() {
    }
    GlaresCheckParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new GlaresCheckParams;
        result.imgMarginPart = jsonObject["imgMarginPart"];
        result.maxGlaringPart = jsonObject["maxGlaringPart"];
        return result;
    };
    return GlaresCheckParams;
}());
export { GlaresCheckParams };
var ImageQA = /** @class */ (function () {
    function ImageQA() {
    }
    ImageQA.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQA;
        result.dpiThreshold = jsonObject["dpiThreshold"];
        result.angleThreshold = jsonObject["angleThreshold"];
        result.focusCheck = jsonObject["focusCheck"];
        result.glaresCheck = jsonObject["glaresCheck"];
        result.glaresCheckParams = GlaresCheckParams.fromJson(jsonObject["glaresCheckParams"]);
        result.colornessCheck = jsonObject["colornessCheck"];
        result.screenCapture = jsonObject["screenCapture"];
        result.expectedPass = [];
        if (jsonObject["expectedPass"] != null) {
            for (var i in jsonObject["expectedPass"]) {
                result.expectedPass.push(jsonObject["expectedPass"][i]);
            }
        }
        result.documentPositionIndent = jsonObject["documentPositionIndent"];
        result.brightnessThreshold = jsonObject["brightnessThreshold"];
        result.occlusionCheck = jsonObject["occlusionCheck"];
        return result;
    };
    return ImageQA;
}());
export { ImageQA };
var RFIDParams = /** @class */ (function () {
    function RFIDParams() {
    }
    RFIDParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RFIDParams;
        result.paIgnoreNotificationCodes = [];
        if (jsonObject["paIgnoreNotificationCodes"] != null) {
            for (var i in jsonObject["paIgnoreNotificationCodes"]) {
                result.paIgnoreNotificationCodes.push(jsonObject["paIgnoreNotificationCodes"][i]);
            }
        }
        return result;
    };
    return RFIDParams;
}());
export { RFIDParams };
var FaceApiSearchParams = /** @class */ (function () {
    function FaceApiSearchParams() {
    }
    FaceApiSearchParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceApiSearchParams;
        result.limit = jsonObject["limit"];
        result.threshold = jsonObject["threshold"];
        result.groupIds = [];
        if (jsonObject["groupIds"] != null) {
            for (var i in jsonObject["groupIds"]) {
                result.groupIds.push(jsonObject["groupIds"][i]);
            }
        }
        return result;
    };
    return FaceApiSearchParams;
}());
export { FaceApiSearchParams };
var FaceApiParams = /** @class */ (function () {
    function FaceApiParams() {
    }
    FaceApiParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceApiParams;
        result.url = jsonObject["url"];
        result.mode = jsonObject["mode"];
        result.threshold = jsonObject["threshold"];
        result.searchParams = FaceApiSearchParams.fromJson(jsonObject["searchParams"]);
        result.serviceTimeout = jsonObject["serviceTimeout"];
        result.proxy = jsonObject["proxy"];
        result.proxyPassword = jsonObject["proxyPassword"];
        result.proxyType = jsonObject["proxyType"];
        return result;
    };
    return FaceApiParams;
}());
export { FaceApiParams };
var BackendProcessingConfig = /** @class */ (function () {
    function BackendProcessingConfig() {
    }
    BackendProcessingConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new BackendProcessingConfig;
        result.url = jsonObject["url"];
        result.httpHeaders = jsonObject["httpHeaders"];
        result.rfidServerSideChipVerification = jsonObject["rfidServerSideChipVerification"];
        result.timeoutConnection = jsonObject["timeoutConnection"];
        return result;
    };
    return BackendProcessingConfig;
}());
export { BackendProcessingConfig };
var LivenessParams = /** @class */ (function () {
    function LivenessParams() {
    }
    LivenessParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessParams;
        result.checkOVI = jsonObject["checkOVI"];
        result.checkMLI = jsonObject["checkMLI"];
        result.checkHolo = jsonObject["checkHolo"];
        result.checkED = jsonObject["checkED"];
        result.checkBlackAndWhiteCopy = jsonObject["checkBlackAndWhiteCopy"];
        result.checkDynaprint = jsonObject["checkDynaprint"];
        result.checkGeometry = jsonObject["checkGeometry"];
        return result;
    };
    return LivenessParams;
}());
export { LivenessParams };
var AuthenticityParams = /** @class */ (function () {
    function AuthenticityParams() {
    }
    AuthenticityParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new AuthenticityParams;
        result.useLivenessCheck = jsonObject["useLivenessCheck"];
        result.livenessParams = LivenessParams.fromJson(jsonObject["livenessParams"]);
        result.checkUVLuminiscence = jsonObject["checkUVLuminiscence"];
        result.checkIRB900 = jsonObject["checkIRB900"];
        result.checkImagePatterns = jsonObject["checkImagePatterns"];
        result.checkFibers = jsonObject["checkFibers"];
        result.checkExtMRZ = jsonObject["checkExtMRZ"];
        result.checkExtOCR = jsonObject["checkExtOCR"];
        result.checkAxial = jsonObject["checkAxial"];
        result.checkBarcodeFormat = jsonObject["checkBarcodeFormat"];
        result.checkIRVisibility = jsonObject["checkIRVisibility"];
        result.checkIPI = jsonObject["checkIPI"];
        result.checkPhotoEmbedding = jsonObject["checkPhotoEmbedding"];
        result.checkPhotoComparison = jsonObject["checkPhotoComparison"];
        result.checkLetterScreen = jsonObject["checkLetterScreen"];
        result.checkSecurityText = jsonObject["checkSecurityText"];
        return result;
    };
    return AuthenticityParams;
}());
export { AuthenticityParams };
var ProcessParams = /** @class */ (function () {
    function ProcessParams() {
    }
    ProcessParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ProcessParams;
        result.multipageProcessing = jsonObject["multipageProcessing"];
        result.logs = jsonObject["logs"];
        result.debugSaveImages = jsonObject["debugSaveImages"];
        result.debugSaveLogs = jsonObject["debugSaveLogs"];
        result.returnUncroppedImage = jsonObject["returnUncroppedImage"];
        result.uvTorchEnabled = jsonObject["uvTorchEnabled"];
        result.debugSaveCroppedImages = jsonObject["debugSaveCroppedImages"];
        result.disableFocusingCheck = jsonObject["disableFocusingCheck"];
        result.debugSaveRFIDSession = jsonObject["debugSaveRFIDSession"];
        result.doublePageSpread = jsonObject["doublePageSpread"];
        result.manualCrop = jsonObject["manualCrop"];
        result.integralImage = jsonObject["integralImage"];
        result.returnCroppedBarcode = jsonObject["returnCroppedBarcode"];
        result.checkRequiredTextFields = jsonObject["checkRequiredTextFields"];
        result.depersonalizeLog = jsonObject["depersonalizeLog"];
        result.generateDoublePageSpreadImage = jsonObject["generateDoublePageSpreadImage"];
        result.alreadyCropped = jsonObject["alreadyCropped"];
        result.matchTextFieldMask = jsonObject["matchTextFieldMask"];
        result.updateOCRValidityByGlare = jsonObject["updateOCRValidityByGlare"];
        result.noGraphics = jsonObject["noGraphics"];
        result.multiDocOnImage = jsonObject["multiDocOnImage"];
        result.forceReadMrzBeforeLocate = jsonObject["forceReadMrzBeforeLocate"];
        result.parseBarcodes = jsonObject["parseBarcodes"];
        result.shouldReturnPackageForReprocess = jsonObject["shouldReturnPackageForReprocess"];
        result.disablePerforationOCR = jsonObject["disablePerforationOCR"];
        result.respectImageQuality = jsonObject["respectImageQuality"];
        result.strictImageQuality = jsonObject["strictImageQuality"];
        result.splitNames = jsonObject["splitNames"];
        result.useFaceApi = jsonObject["useFaceApi"];
        result.useAuthenticityCheck = jsonObject["useAuthenticityCheck"];
        result.checkHologram = jsonObject["checkHologram"];
        result.generateNumericCodes = jsonObject["generateNumericCodes"];
        result.strictBarcodeDigitalSignatureCheck = jsonObject["strictBarcodeDigitalSignatureCheck"];
        result.selectLongestNames = jsonObject["selectLongestNames"];
        result.generateDTCVC = jsonObject["generateDTCVC"];
        result.strictDLCategoryExpiry = jsonObject["strictDLCategoryExpiry"];
        result.generateAlpha2Codes = jsonObject["generateAlpha2Codes"];
        result.disableAuthResolutionFilter = jsonObject["disableAuthResolutionFilter"];
        result.strictSecurityChecks = jsonObject["strictSecurityChecks"];
        result.returnTransliteratedFields = jsonObject["returnTransliteratedFields"];
        result.barcodeParserType = jsonObject["barcodeParserType"];
        result.perspectiveAngle = jsonObject["perspectiveAngle"];
        result.minDPI = jsonObject["minDPI"];
        result.imageDpiOutMax = jsonObject["imageDpiOutMax"];
        result.forceDocFormat = jsonObject["forceDocFormat"];
        result.shiftExpiryDate = jsonObject["shiftExpiryDate"];
        result.minimalHolderAge = jsonObject["minimalHolderAge"];
        result.imageOutputMaxHeight = jsonObject["imageOutputMaxHeight"];
        result.imageOutputMaxWidth = jsonObject["imageOutputMaxWidth"];
        result.processAuth = jsonObject["processAuth"];
        result.convertCase = jsonObject["convertCase"];
        result.logLevel = jsonObject["logLevel"];
        result.mrzDetectMode = jsonObject["mrzDetectMode"];
        result.measureSystem = jsonObject["measureSystem"];
        result.forceDocID = jsonObject["forceDocID"];
        result.pdfPagesLimit = jsonObject["pdfPagesLimit"];
        result.dateFormat = jsonObject["dateFormat"];
        result.scenario = jsonObject["scenario"];
        result.captureButtonScenario = jsonObject["captureButtonScenario"];
        result.timeout = jsonObject["timeout"];
        result.timeoutFromFirstDetect = jsonObject["timeoutFromFirstDetect"];
        result.timeoutFromFirstDocType = jsonObject["timeoutFromFirstDocType"];
        result.documentAreaMin = jsonObject["documentAreaMin"];
        result.timeoutLiveness = jsonObject["timeoutLiveness"];
        result.documentIDList = [];
        if (jsonObject["documentIDList"] != null) {
            for (var i in jsonObject["documentIDList"]) {
                result.documentIDList.push(jsonObject["documentIDList"][i]);
            }
        }
        result.barcodeTypes = [];
        if (jsonObject["barcodeTypes"] != null) {
            for (var i in jsonObject["barcodeTypes"]) {
                result.barcodeTypes.push(jsonObject["barcodeTypes"][i]);
            }
        }
        result.fieldTypesFilter = [];
        if (jsonObject["fieldTypesFilter"] != null) {
            for (var i in jsonObject["fieldTypesFilter"]) {
                result.fieldTypesFilter.push(jsonObject["fieldTypesFilter"][i]);
            }
        }
        result.resultTypeOutput = [];
        if (jsonObject["resultTypeOutput"] != null) {
            for (var i in jsonObject["resultTypeOutput"]) {
                result.resultTypeOutput.push(jsonObject["resultTypeOutput"][i]);
            }
        }
        result.documentGroupFilter = [];
        if (jsonObject["documentGroupFilter"] != null) {
            for (var i in jsonObject["documentGroupFilter"]) {
                result.documentGroupFilter.push(jsonObject["documentGroupFilter"][i]);
            }
        }
        result.lcidIgnoreFilter = [];
        if (jsonObject["lcidIgnoreFilter"] != null) {
            for (var i in jsonObject["lcidIgnoreFilter"]) {
                result.lcidIgnoreFilter.push(jsonObject["lcidIgnoreFilter"][i]);
            }
        }
        result.lcidFilter = [];
        if (jsonObject["lcidFilter"] != null) {
            for (var i in jsonObject["lcidFilter"]) {
                result.lcidFilter.push(jsonObject["lcidFilter"][i]);
            }
        }
        result.mrzFormatsFilter = [];
        if (jsonObject["mrzFormatsFilter"] != null) {
            for (var i in jsonObject["mrzFormatsFilter"]) {
                result.mrzFormatsFilter.push(jsonObject["mrzFormatsFilter"][i]);
            }
        }
        result.imageQA = ImageQA.fromJson(jsonObject["imageQA"]);
        result.rfidParams = RFIDParams.fromJson(jsonObject["rfidParams"]);
        result.faceApiParams = FaceApiParams.fromJson(jsonObject["faceApiParams"]);
        result.backendProcessingConfig = BackendProcessingConfig.fromJson(jsonObject["backendProcessingConfig"]);
        result.authenticityParams = AuthenticityParams.fromJson(jsonObject["authenticityParams"]);
        result.customParams = jsonObject["customParams"];
        return result;
    };
    return ProcessParams;
}());
export { ProcessParams };
var Font = /** @class */ (function () {
    function Font() {
    }
    Font.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Font;
        result.name = jsonObject["name"];
        result.size = jsonObject["size"];
        result.style = jsonObject["style"];
        return result;
    };
    return Font;
}());
export { Font };
var CustomizationColors = /** @class */ (function () {
    function CustomizationColors() {
    }
    CustomizationColors.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationColors;
        result.rfidProcessingScreenBackground = jsonObject["rfidProcessingScreenBackground"];
        result.rfidProcessingScreenHintLabelText = jsonObject["rfidProcessingScreenHintLabelText"];
        result.rfidProcessingScreenHintLabelBackground = jsonObject["rfidProcessingScreenHintLabelBackground"];
        result.rfidProcessingScreenProgressLabelText = jsonObject["rfidProcessingScreenProgressLabelText"];
        result.rfidProcessingScreenProgressBar = jsonObject["rfidProcessingScreenProgressBar"];
        result.rfidProcessingScreenProgressBarBackground = jsonObject["rfidProcessingScreenProgressBarBackground"];
        result.rfidProcessingScreenResultLabelText = jsonObject["rfidProcessingScreenResultLabelText"];
        result.rfidProcessingScreenLoadingBar = jsonObject["rfidProcessingScreenLoadingBar"];
        result.rfidEnableNfcTitleText = jsonObject["rfidEnableNfcTitleText"];
        result.rfidEnableNfcDescriptionText = jsonObject["rfidEnableNfcDescriptionText"];
        result.rfidEnableNfcButtonText = jsonObject["rfidEnableNfcButtonText"];
        result.rfidEnableNfcButtonBackground = jsonObject["rfidEnableNfcButtonBackground"];
        return result;
    };
    return CustomizationColors;
}());
export { CustomizationColors };
var CustomizationFonts = /** @class */ (function () {
    function CustomizationFonts() {
    }
    CustomizationFonts.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationFonts;
        result.rfidProcessingScreenHintLabel = Font.fromJson(jsonObject["rfidProcessingScreenHintLabel"]);
        result.rfidProcessingScreenProgressLabel = Font.fromJson(jsonObject["rfidProcessingScreenProgressLabel"]);
        result.rfidProcessingScreenResultLabel = Font.fromJson(jsonObject["rfidProcessingScreenResultLabel"]);
        result.rfidEnableNfcTitleText = Font.fromJson(jsonObject["rfidEnableNfcTitleText"]);
        result.rfidEnableNfcDescriptionText = Font.fromJson(jsonObject["rfidEnableNfcDescriptionText"]);
        result.rfidEnableNfcButtonText = Font.fromJson(jsonObject["rfidEnableNfcButtonText"]);
        return result;
    };
    return CustomizationFonts;
}());
export { CustomizationFonts };
var CustomizationImages = /** @class */ (function () {
    function CustomizationImages() {
    }
    CustomizationImages.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationImages;
        result.rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        result.rfidEnableNfcImage = jsonObject["rfidEnableNfcImage"];
        return result;
    };
    return CustomizationImages;
}());
export { CustomizationImages };
var Customization = /** @class */ (function () {
    function Customization() {
    }
    Customization.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Customization;
        result.showStatusMessages = jsonObject["showStatusMessages"];
        result.showResultStatusMessages = jsonObject["showResultStatusMessages"];
        result.showHelpAnimation = jsonObject["showHelpAnimation"];
        result.showNextPageAnimation = jsonObject["showNextPageAnimation"];
        result.showBackgroundMask = jsonObject["showBackgroundMask"];
        result.cameraFrameBorderWidth = jsonObject["cameraFrameBorderWidth"];
        result.cameraFrameLineLength = jsonObject["cameraFrameLineLength"];
        result.cameraFrameOffsetWidth = jsonObject["cameraFrameOffsetWidth"];
        result.nextPageAnimationStartDelay = jsonObject["nextPageAnimationStartDelay"];
        result.nextPageAnimationEndDelay = jsonObject["nextPageAnimationEndDelay"];
        result.cameraFrameShapeType = jsonObject["cameraFrameShapeType"];
        result.status = jsonObject["status"];
        result.resultStatus = jsonObject["resultStatus"];
        result.multipageButtonText = jsonObject["multipageButtonText"];
        result.cameraFrameDefaultColor = jsonObject["cameraFrameDefaultColor"];
        result.cameraFrameActiveColor = jsonObject["cameraFrameActiveColor"];
        result.statusTextColor = jsonObject["statusTextColor"];
        result.resultStatusTextColor = jsonObject["resultStatusTextColor"];
        result.resultStatusBackgroundColor = jsonObject["resultStatusBackgroundColor"];
        result.multipageButtonBackgroundColor = jsonObject["multipageButtonBackgroundColor"];
        result.tintColor = jsonObject["tintColor"];
        result.activityIndicatorColor = jsonObject["activityIndicatorColor"];
        result.statusBackgroundColor = jsonObject["statusBackgroundColor"];
        result.cameraPreviewBackgroundColor = jsonObject["cameraPreviewBackgroundColor"];
        result.backgroundMaskColor = jsonObject["backgroundMaskColor"];
        result.multipageButtonTextColor = jsonObject["multipageButtonTextColor"];
        result.statusPositionMultiplier = jsonObject["statusPositionMultiplier"];
        result.resultStatusPositionMultiplier = jsonObject["resultStatusPositionMultiplier"];
        result.toolbarSize = jsonObject["toolbarSize"];
        result.backgroundMaskAlpha = jsonObject["backgroundMaskAlpha"];
        result.customStatusPositionMultiplier = jsonObject["customStatusPositionMultiplier"];
        result.livenessAnimationPositionMultiplier = jsonObject["livenessAnimationPositionMultiplier"];
        result.cameraFrameVerticalPositionMultiplier = jsonObject["cameraFrameVerticalPositionMultiplier"];
        result.cameraFrameLandscapeAspectRatio = jsonObject["cameraFrameLandscapeAspectRatio"];
        result.cameraFramePortraitAspectRatio = jsonObject["cameraFramePortraitAspectRatio"];
        result.cameraFrameCornerRadius = jsonObject["cameraFrameCornerRadius"];
        result.activityIndicatorPortraitPositionMultiplier = jsonObject["activityIndicatorPortraitPositionMultiplier"];
        result.activityIndicatorLandscapePositionMultiplier = jsonObject["activityIndicatorLandscapePositionMultiplier"];
        result.cameraPreviewVerticalPositionMultiplier = jsonObject["cameraPreviewVerticalPositionMultiplier"];
        result.multipageAnimationFrontImage = jsonObject["multipageAnimationFrontImage"];
        result.multipageAnimationBackImage = jsonObject["multipageAnimationBackImage"];
        result.borderBackgroundImage = jsonObject["borderBackgroundImage"];
        result.helpAnimationImage = jsonObject["helpAnimationImage"];
        result.closeButtonImage = jsonObject["closeButtonImage"];
        result.captureButtonImage = jsonObject["captureButtonImage"];
        result.cameraSwitchButtonImage = jsonObject["cameraSwitchButtonImage"];
        result.torchButtonOnImage = jsonObject["torchButtonOnImage"];
        result.torchButtonOffImage = jsonObject["torchButtonOffImage"];
        result.changeFrameButtonExpandImage = jsonObject["changeFrameButtonExpandImage"];
        result.changeFrameButtonCollapseImage = jsonObject["changeFrameButtonCollapseImage"];
        result.livenessAnimationImage = jsonObject["livenessAnimationImage"];
        result.multipageButtonImage = jsonObject["multipageButtonImage"];
        result.statusTextFont = Font.fromJson(jsonObject["statusTextFont"]);
        result.resultStatusTextFont = Font.fromJson(jsonObject["resultStatusTextFont"]);
        result.multipageButtonTextFont = Font.fromJson(jsonObject["multipageButtonTextFont"]);
        result.customLabelStatus = jsonObject["customLabelStatus"];
        result.cameraFrameLineCap = jsonObject["cameraFrameLineCap"];
        result.uiCustomizationLayer = jsonObject["uiCustomizationLayer"];
        result.helpAnimationImageContentMode = jsonObject["helpAnimationImageContentMode"];
        result.multipageAnimationFrontImageContentMode = jsonObject["multipageAnimationFrontImageContentMode"];
        result.multipageAnimationBackImageContentMode = jsonObject["multipageAnimationBackImageContentMode"];
        result.livenessAnimationImageContentMode = jsonObject["livenessAnimationImageContentMode"];
        result.borderBackgroundImageContentMode = jsonObject["borderBackgroundImageContentMode"];
        result.helpAnimationImageMatrix = [];
        if (jsonObject["helpAnimationImageMatrix"] != null) {
            for (var i in jsonObject["helpAnimationImageMatrix"]) {
                result.helpAnimationImageMatrix.push(jsonObject["helpAnimationImageMatrix"][i]);
            }
        }
        result.multipageAnimationFrontImageMatrix = [];
        if (jsonObject["multipageAnimationFrontImageMatrix"] != null) {
            for (var i in jsonObject["multipageAnimationFrontImageMatrix"]) {
                result.multipageAnimationFrontImageMatrix.push(jsonObject["multipageAnimationFrontImageMatrix"][i]);
            }
        }
        result.multipageAnimationBackImageMatrix = [];
        if (jsonObject["multipageAnimationBackImageMatrix"] != null) {
            for (var i in jsonObject["multipageAnimationBackImageMatrix"]) {
                result.multipageAnimationBackImageMatrix.push(jsonObject["multipageAnimationBackImageMatrix"][i]);
            }
        }
        result.livenessAnimationImageMatrix = [];
        if (jsonObject["livenessAnimationImageMatrix"] != null) {
            for (var i in jsonObject["livenessAnimationImageMatrix"]) {
                result.livenessAnimationImageMatrix.push(jsonObject["livenessAnimationImageMatrix"][i]);
            }
        }
        result.borderBackgroundImageMatrix = [];
        if (jsonObject["borderBackgroundImageMatrix"] != null) {
            for (var i in jsonObject["borderBackgroundImageMatrix"]) {
                result.borderBackgroundImageMatrix.push(jsonObject["borderBackgroundImageMatrix"][i]);
            }
        }
        result.colors = CustomizationColors.fromJson(jsonObject["colors"]);
        result.fonts = CustomizationFonts.fromJson(jsonObject["fonts"]);
        result.images = CustomizationImages.fromJson(jsonObject["images"]);
        return result;
    };
    return Customization;
}());
export { Customization };
var EDLDataGroups = /** @class */ (function () {
    function EDLDataGroups() {
    }
    EDLDataGroups.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new EDLDataGroups;
        result.DG1 = jsonObject["DG1"];
        result.DG2 = jsonObject["DG2"];
        result.DG3 = jsonObject["DG3"];
        result.DG4 = jsonObject["DG4"];
        result.DG5 = jsonObject["DG5"];
        result.DG6 = jsonObject["DG6"];
        result.DG7 = jsonObject["DG7"];
        result.DG8 = jsonObject["DG8"];
        result.DG9 = jsonObject["DG9"];
        result.DG10 = jsonObject["DG10"];
        result.DG11 = jsonObject["DG11"];
        result.DG12 = jsonObject["DG12"];
        result.DG13 = jsonObject["DG13"];
        result.DG14 = jsonObject["DG14"];
        return result;
    };
    return EDLDataGroups;
}());
export { EDLDataGroups };
var EPassportDataGroups = /** @class */ (function () {
    function EPassportDataGroups() {
    }
    EPassportDataGroups.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new EPassportDataGroups;
        result.DG1 = jsonObject["DG1"];
        result.DG2 = jsonObject["DG2"];
        result.DG3 = jsonObject["DG3"];
        result.DG4 = jsonObject["DG4"];
        result.DG5 = jsonObject["DG5"];
        result.DG6 = jsonObject["DG6"];
        result.DG7 = jsonObject["DG7"];
        result.DG8 = jsonObject["DG8"];
        result.DG9 = jsonObject["DG9"];
        result.DG10 = jsonObject["DG10"];
        result.DG11 = jsonObject["DG11"];
        result.DG12 = jsonObject["DG12"];
        result.DG13 = jsonObject["DG13"];
        result.DG14 = jsonObject["DG14"];
        result.DG15 = jsonObject["DG15"];
        result.DG16 = jsonObject["DG16"];
        return result;
    };
    return EPassportDataGroups;
}());
export { EPassportDataGroups };
var EIDDataGroups = /** @class */ (function () {
    function EIDDataGroups() {
    }
    EIDDataGroups.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new EIDDataGroups;
        result.DG1 = jsonObject["DG1"];
        result.DG2 = jsonObject["DG2"];
        result.DG3 = jsonObject["DG3"];
        result.DG4 = jsonObject["DG4"];
        result.DG5 = jsonObject["DG5"];
        result.DG6 = jsonObject["DG6"];
        result.DG7 = jsonObject["DG7"];
        result.DG8 = jsonObject["DG8"];
        result.DG9 = jsonObject["DG9"];
        result.DG10 = jsonObject["DG10"];
        result.DG11 = jsonObject["DG11"];
        result.DG12 = jsonObject["DG12"];
        result.DG13 = jsonObject["DG13"];
        result.DG14 = jsonObject["DG14"];
        result.DG15 = jsonObject["DG15"];
        result.DG16 = jsonObject["DG16"];
        result.DG17 = jsonObject["DG17"];
        result.DG18 = jsonObject["DG18"];
        result.DG19 = jsonObject["DG19"];
        result.DG20 = jsonObject["DG20"];
        result.DG21 = jsonObject["DG21"];
        return result;
    };
    return EIDDataGroups;
}());
export { EIDDataGroups };
var DTCDataGroup = /** @class */ (function () {
    function DTCDataGroup() {
    }
    DTCDataGroup.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DTCDataGroup;
        result.DG17 = jsonObject["DG17"];
        result.DG18 = jsonObject["DG18"];
        result.DG22 = jsonObject["DG22"];
        result.DG23 = jsonObject["DG23"];
        result.DG24 = jsonObject["DG24"];
        return result;
    };
    return DTCDataGroup;
}());
export { DTCDataGroup };
var RFIDScenario = /** @class */ (function () {
    function RFIDScenario() {
    }
    RFIDScenario.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RFIDScenario;
        result.paceStaticBinding = jsonObject["paceStaticBinding"];
        result.onlineTA = jsonObject["onlineTA"];
        result.writeEid = jsonObject["writeEid"];
        result.universalAccessRights = jsonObject["universalAccessRights"];
        result.authorizedRestrictedIdentification = jsonObject["authorizedRestrictedIdentification"];
        result.auxVerificationCommunityID = jsonObject["auxVerificationCommunityID"];
        result.auxVerificationDateOfBirth = jsonObject["auxVerificationDateOfBirth"];
        result.skipAA = jsonObject["skipAA"];
        result.strictProcessing = jsonObject["strictProcessing"];
        result.pkdDSCertPriority = jsonObject["pkdDSCertPriority"];
        result.pkdUseExternalCSCA = jsonObject["pkdUseExternalCSCA"];
        result.trustedPKD = jsonObject["trustedPKD"];
        result.passiveAuth = jsonObject["passiveAuth"];
        result.useSFI = jsonObject["useSFI"];
        result.readEPassport = jsonObject["readEPassport"];
        result.readEID = jsonObject["readEID"];
        result.readEDL = jsonObject["readEDL"];
        result.authorizedSTSignature = jsonObject["authorizedSTSignature"];
        result.authorizedSTQSignature = jsonObject["authorizedSTQSignature"];
        result.authorizedWriteDG17 = jsonObject["authorizedWriteDG17"];
        result.authorizedWriteDG18 = jsonObject["authorizedWriteDG18"];
        result.authorizedWriteDG19 = jsonObject["authorizedWriteDG19"];
        result.authorizedWriteDG20 = jsonObject["authorizedWriteDG20"];
        result.authorizedWriteDG21 = jsonObject["authorizedWriteDG21"];
        result.authorizedVerifyAge = jsonObject["authorizedVerifyAge"];
        result.authorizedVerifyCommunityID = jsonObject["authorizedVerifyCommunityID"];
        result.authorizedPrivilegedTerminal = jsonObject["authorizedPrivilegedTerminal"];
        result.authorizedCANAllowed = jsonObject["authorizedCANAllowed"];
        result.authorizedPINManagement = jsonObject["authorizedPINManagement"];
        result.authorizedInstallCert = jsonObject["authorizedInstallCert"];
        result.authorizedInstallQCert = jsonObject["authorizedInstallQCert"];
        result.applyAmendments = jsonObject["applyAmendments"];
        result.autoSettings = jsonObject["autoSettings"];
        result.proceedReadingAlways = jsonObject["proceedReadingAlways"];
        result.readDTC = jsonObject["readDTC"];
        result.mrzStrictCheck = jsonObject["mrzStrictCheck"];
        result.loadCRLFromRemote = jsonObject["loadCRLFromRemote"];
        result.independentSODStatus = jsonObject["independentSODStatus"];
        result.readingBuffer = jsonObject["readingBuffer"];
        result.onlineTAToSignDataType = jsonObject["onlineTAToSignDataType"];
        result.defaultReadingBufferSize = jsonObject["defaultReadingBufferSize"];
        result.signManagementAction = jsonObject["signManagementAction"];
        result.profilerType = jsonObject["profilerType"];
        result.authProcType = jsonObject["authProcType"];
        result.baseSMProcedure = jsonObject["baseSMProcedure"];
        result.pacePasswordType = jsonObject["pacePasswordType"];
        result.terminalType = jsonObject["terminalType"];
        result.password = jsonObject["password"];
        result.pkdPA = jsonObject["pkdPA"];
        result.pkdEAC = jsonObject["pkdEAC"];
        result.mrz = jsonObject["mrz"];
        result.eSignPINDefault = jsonObject["eSignPINDefault"];
        result.eSignPINNewValue = jsonObject["eSignPINNewValue"];
        result.cardAccess = jsonObject["cardAccess"];
        result.mrzHash = jsonObject["mrzHash"];
        result.documentNumber = jsonObject["documentNumber"];
        result.dateOfBirth = jsonObject["dateOfBirth"];
        result.dateOfExpiry = jsonObject["dateOfExpiry"];
        result.eDLDataGroups = EDLDataGroups.fromJson(jsonObject["eDLDataGroups"]);
        result.ePassportDataGroups = EPassportDataGroups.fromJson(jsonObject["ePassportDataGroups"]);
        result.eIDDataGroups = EIDDataGroups.fromJson(jsonObject["eIDDataGroups"]);
        result.dtcDataGroups = DTCDataGroup.fromJson(jsonObject["dtcDataGroups"]);
        return result;
    };
    return RFIDScenario;
}());
export { RFIDScenario };
var PrepareProgress = /** @class */ (function () {
    function PrepareProgress() {
    }
    PrepareProgress.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PrepareProgress;
        result.downloadedBytes = jsonObject["downloadedBytes"];
        result.totalBytes = jsonObject["totalBytes"];
        result.progress = jsonObject["progress"];
        return result;
    };
    return PrepareProgress;
}());
export { PrepareProgress };
export var FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
};
export var eRPRM_Authenticity = {
    NONE: 0,
    UV_LUMINESCENCE: 1,
    IR_B900: 2,
    IMAGE_PATTERN: 4,
    AXIAL_PROTECTION: 8,
    UV_FIBERS: 16,
    IR_VISIBILITY: 32,
    OCR_SECURITY_TEXT: 64,
    IPI: 128,
    PHOTO_EMBED_TYPE: 512,
    HOLOGRAMS: 4096,
    PHOTO_AREA: 8192,
    PORTRAIT_COMPARISON: 32768,
    BARCODE_FORMAT_CHECK: 65536,
    KINEGRAM: 131072,
    HOLOGRAMS_DETECTION: 524288,
    MRZ: 8388608,
    STATUS_ONLY: 0x80000000,
    OVI: 1024,
    LIVENESS: 2097152,
    OCR: 4194304,
};
export var CustomizationColor = {
    RFID_PROCESSING_SCREEN_BACKGROUND: "rfidProcessingScreenBackground",
    RFID_PROCESSING_SCREEN_HINT_LABEL_TEXT: "rfidProcessingScreenHintLabelText",
    RFID_PROCESSING_SCREEN_HINT_LABEL_BACKGROUND: "rfidProcessingScreenHintLabelBackground",
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL_TEXT: "rfidProcessingScreenProgressLabelText",
    RFID_PROCESSING_SCREEN_PROGRESS_BAR: "rfidProcessingScreenProgressBar",
    RFID_PROCESSING_SCREEN_PROGRESS_BAR_BACKGROUND: "rfidProcessingScreenProgressBarBackground",
    RFID_PROCESSING_SCREEN_RESULT_LABEL_TEXT: "rfidProcessingScreenResultLabelText",
    RFID_PROCESSING_SCREEN_LOADING_BAR: "rfidProcessingScreenLoadingBar",
    RFID_ENABLE_NFC_TITLE_TEXT: "rfidEnableNfcTitleText",
    RFID_ENABLE_NFC_DESCRIPTION_TEXT: "rfidEnableNfcDescriptionText",
    RFID_ENABLE_NFC_BUTTON_TEXT: "rfidEnableNfcButtonText",
    RFID_ENABLE_NFC_BUTTON_BACKGROUND: "rfidEnableNfcButtonBackground",
};
export var eRFID_ErrorCodes = {
    RFID_ERROR_NO_ERROR: 0x00000001,
    RFID_ERROR_ALREADY_DONE: 0x00000002,
    RFID_ERROR_FAILED: 0xffffffff,
    RFID_ERROR_NO_CHIP_DETECTED: 0x80010001,
    RFID_ERROR_NOT_AVAILABLE: 0x80010002,
    RFID_ERROR_INVALID_PARAMETER: 0x80010004,
    RFID_ERROR_NOT_INITIALIZED: 0x80010005,
    RFID_ERROR_NOT_ENOUGH_MEMORY: 0x80010006,
    RFID_ERROR_INVALID_DIRECTORY: 0x80010008,
    RFID_ERROR_UNKNOWN_COMMAND: 0x80010009,
    RFID_ERROR_FILE_IO_ERROR: 0x8001000A,
    RFID_ERROR_BUSY: 0x8001000B,
    RFID_ERROR_OLD_FIRMWARE: 0x8001000C,
    RFID_ERROR_PCSC_FAILED: 0x80020000,
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: 0x80020001,
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: 0x80020002,
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: 0x80020003,
    RFID_ERROR_PCSC_OPERATION_CANCELLED: 0x80020004,
    RFID_ERROR_PCSC_CARD_IS_BUSY: 0x80020005,
    RFID_ERROR_PCSC_FAILED_SCARD: 0x80020006,
    RFID_ERROR_PCSC_EXT_LE_FAILED: 0x80020010,
    RFID_ERROR_LAYER6_SECURITY_MANAGER: 0x86000000,
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: 0x86000001,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: 0x86000100,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: 0x86000101,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: 0x86000102,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: 0x86000103,
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING: 0x86000200,
    RFID_ERROR_LAYER6_SM_DO_87_MISSING: 0x86000201,
    RFID_ERROR_LAYER6_SM_DO_99_MISSING: 0x86000202,
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT: 0x86000203,
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: 0x86000204,
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: 0x86000300,
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: 0x86000301,
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE: 0x86000302,
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: 0x86000303,
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: 0x86000304,
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: 0x86000305,
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: 0x86000306,
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: 0x86000307,
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: 0x86000308,
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: 0x86000309,
    RFID_ERROR_LAYER6_FILE_NOT_FOUND: 0x80006A82,
    RFID_ERROR_LAYER6_FILE_EOF1: 0x80006282,
    RFID_ERROR_LAYER6_FILE_EOF2: 0x80006B00,
    RFID_ERROR_LAYER6_INCORRECT_PARAMS: 0x80006A80,
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA: 0x80006A88,
    RFID_ERROR_LAYER6_PWD_SUSPEND: 0x800063C1,
    RFID_ERROR_LAYER6_PWD_BLOCKED: 0x800063C0,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED: 0x80006283,
    RFID_ERROR_LAYER6_PWD_BLOCKED2: 0x80006983,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2: 0x80006984,
    RFID_ERROR_LAYER6_PWD_SUSPEND2: 0x80006985,
    RFID_ERROR_LAYER6_PWD_FAILED: 0x801063C0,
    RFID_ERROR_NOT_PERFORMED: 0x83000000,
    RFID_ERROR_SESSION_IS_CLOSED: 0x83000001,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: 0x83000002,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: 0x83000010,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: 0x83000011,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: 0x83000012,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: 0x83000013,
    RFID_ERROR_Session_Procedure_Type_Unsupported: 0x83000014,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: 0x83000015,
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: 0x83000016,
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: 0x83000017,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: 0x83000018,
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: 0x83000019,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: 0x8300001A,
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: 0x8300001B,
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: 0x8300001C,
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: 0x83000020,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: 0x83000021,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: 0x83000022,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: 0x83000023,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: 0x83000024,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: 0x83000025,
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: 0x83000026,
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: 0x83000027,
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: 0x83000028,
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: 0x83000029,
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: 0x8300002A,
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: 0x83000030,
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: 0x83000031,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: 0x83000040,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: 0x83000041,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: 0x83000042,
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: 0x83000050,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: 0x83000051,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: 0x83000052,
    RFID_ERROR_SESSION_INCORRECT_DATA: 0x83000060,
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: 0x83010000,
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: 0x83020000,
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: 0x83030000,
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: 0x83040000,
    RFID_ERROR_SESSION_FILE_WRONG_TAG: 0x83050000,
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: 0x83060000,
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: 0x83070000,
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: 0x83080000,
    RFID_ERROR_LAYER34_NO_ERROR: 0x84000000,
    RFID_ERROR_LAYER34_TIME_OUT: 0x84010000,
    RFID_ERROR_LAYER34_COLLISION: 0x84020000,
    RFID_ERROR_LAYER34_CRC: 0x84030000,
    RFID_ERROR_LAYER34_DATA_INTEGRITY: 0x84040000,
    RFID_ERROR_LAYER34_DATA_LENGTH: 0x84050000,
    RFID_ERROR_Layer34_RFU: 0x84060000,
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY: 0x84070000,
    RFID_ERROR_LAYER34_PROTOCOL_B: 0x84080000,
    RFID_ERROR_LAYER34_DATA_CONTENTS: 0x84090000,
    RFID_ERROR_LAYER34_PROTOCOL: 0x840A0000,
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: 0x840B0000,
    RFID_ERROR_LAYER34_MIFARE_AUTH: 0x840C0000,
    RFID_ERROR_LAYER34_SAM_ERROR: 0x840D0000,
    RFID_ERROR_LAYER34_SAM_COLLISION: 0x840E0000,
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: 0x840F0000,
};
export var eLDS_ParsingErrorCodes = {
    ERR_LDS_OK: 0x00000001,
    ERR_LDS_ASN_INCORRECT_DATA: 0x80000001,
    RR_LDS_ASN_NOT_ENOUGH_DATA: 0x80000002,
    ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: 0x80000003,
    ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: 0x80000008,
    ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: 0x80000009,
    ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: 0x8000000A,
    ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: 0x80000011,
    ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: 0x80000013,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: 0x80000014,
    ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: 0x80000015,
    ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: 0x80000016,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: 0x80000012,
    ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: 0x80000017,
    ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: 0x80000018,
    ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: 0x80000019,
    ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: 0x8000001A,
    ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: 0x8000001B,
    ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: 0x8000001C,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: 0x8000001D,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: 0x8000001E,
    ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x8000001F,
    ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: 0x80000020,
    ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: 0x80000021,
    ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: 0x80000022,
    ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: 0x80000023,
    ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: 0x80000024,
    ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: 0x80000025,
    ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: 0x80000026,
    ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: 0x80000027,
    ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000030,
    ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: 0x80000031,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000032,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000033,
    ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: 0x80000034,
    ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: 0x80000036,
    ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: 0x80000035,
    ERR_LDS_AUTH_ERROR: 0x80000050,
    ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x80000051,
    ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x80000052,
    ERR_LDS_AUTH_MESSED_ALGORITHMS: 0x80000053,
    ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: 0x80000054,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: 0x80000055,
    ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: 0x80000056,
    ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: 0x80000057,
    ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: 0x80000058,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: 0x80000059,
    ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: 0x8000005A,
    ERR_LDS_DG_WRONG_TAH: 0x80000070,
    ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: 0x80000071,
    ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000011,
    ERR_LDS_PACE_INFO_NOT_AVAILABLE: 0x81000020,
    ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: 0x81000021,
    ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000022,
    ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: 0x81000023,
    ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: 0x81000024,
    ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: 0x81000025,
    ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: 0x81000026,
    ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: 0x81000027,
    ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: 0x81000028,
    ERR_LDS_PACE_MAPPING_CANT_PERFORM: 0x81000029,
    ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: 0x8100002A,
    ERR_LDS_PACE_CAM_DATA_INCORRECT: 0x8100002B,
    ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: 0x8100002C,
    ERR_LDS_PACE_CAM_DATA_NON_MATCHING: 0x8100002D,
    ERR_LDS_PACE_IM_SCHEME_INCORRECT: 0x8100002E,
    ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: 0x8100002F,
    ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: 0x81000030,
    ERR_LDS_CA_CANT_FIND_INFO: 0x81000031,
    ERR_LDS_CA_INCORRECT_VERSION: 0x81000032,
    ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: 0x81000033,
    ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: 0x81000034,
    ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000035,
    ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: 0x81000036,
    ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: 0x81000037,
    ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: 0x81000038,
    ERR_LDS_TA_INCORRECT_VERSION: 0x81000040,
    ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: 0x81000041,
    ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: 0x81000042,
    ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000043,
    ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: 0x81000044,
    ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: 0x81000045,
    ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x81000050,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: 0x81000051,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: 0x81000052,
    ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: 0x81000053,
    ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: 0x81000054,
    ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: 0x81000055,
    ERR_LDS_AA_INCORRECT_TRAILER: 0x81000056,
    ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: 0x81000057,
    ERR_LDS_RI_SECTOR_KEY_CANT_FIND: 0x81000070,
    ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: 0x81000071,
    ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: 0x81000072,
    ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: 0x81000060,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: 0x81000062,
    ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: 0x81000063,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: 0x8100006,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: 0x81000065,
    ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: 0x81000160,
    ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: 0x81000161,
    ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: 0x81000162,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: 0x81000163,
    ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: 0x81000164,
    ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: 0x81000165,
    ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: 0x81000166,
    ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: 0x81000167,
    ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: 0x81000168,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: 0x81000169,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: 0x8100016A,
    ERR_LDS_VDS_UNSUPPORTED_VERSION: 0x81000200,
    ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: 0x81000201,
    ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: 0x81000202,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: 0x81000203,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: 0x81000204,
    ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: 0x81000205,
    ERR_LDS_VDS_NC_INCORRECT_DATA: 0x81000300,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: 0x81000301,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: 0x81000302,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: 0x81000303,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: 0x81000304,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: 0x81000305,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: 0x81000306,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: 0x81000307,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: 0x81000308,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: 0x81000309,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: 0x8100030A,
};
export var eRFID_CertificateType = {
    CT_UNDEFINED: 0,
    CT_CSCA: 1,
    CT_CSCA_LINK: 2,
    CT_DS: 3,
    CT_MLS: 4,
    CT_DEV_LS: 5,
    CT_DEF_LS: 6,
    CT_BLS: 7,
    CT_LDS2: 8,
    CT_BCS: 9,
    CT_BCSNC: 10,
};
export var RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
};
export var eRPRM_ResultType = {
    NONE: -1,
    RPRM_RESULT_TYPE_EMPTY: 0,
    RPRM_RESULT_TYPE_RAW_IMAGE: 1,
    RPRM_RESULT_TYPE_FILE_IMAGE: 2,
    RPRM_RESULT_TYPE_MRZ_OCR_EXTENDED: 3,
    RPRM_RESULT_TYPE_BARCODES: 5,
    RPRM_RESULT_TYPE_GRAPHICS: 6,
    RPRM_RESULT_TYPE_MRZ_TEST_QUALITY: 7,
    RPRM_RESULT_TYPE_DOCUMENT_TYPES_CANDIDATES: 8,
    RPRM_RESULT_TYPE_CHOSEN_DOCUMENT_TYPE_CANDIDATE: 9,
    RPRM_RESULT_TYPE_DOCUMENTS_INFO_LIST: 10,
    RPRM_RESULT_TYPE_OCR_LEXICAL_ANALYZE: 15,
    RPRM_RESULT_TYPE_RAW_UNCROPPED_IMAGE: 16,
    RPRM_RESULT_TYPE_VISUAL_OCR_EXTENDED: 17,
    RPRM_RESULT_TYPE_BAR_CODES_TEXT_DATA: 18,
    RPRM_RESULT_TYPE_BAR_CODES_IMAGE_DATA: 19,
    RPRM_RESULT_TYPE_AUTHENTICITY: 20,
    RPRM_RESULT_TYPE_EOS_IMAGE: 23,
    RPRM_RESULT_TYPE_BAYER_IMAGE: 24,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE: 25,
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE_TEXT_DATA: 26,
    RPRM_RESULT_TYPE_FIELD_FILE_IMAGE: 27,
    RPRM_RESULT_TYPE_DATABASE_CHECK: 28,
    RPRM_RESULT_TYPE_FINGERPRINT_TEMPLATE_ISO: 29,
    RPRM_RESULT_TYPE_INPUT_IMAGE_QUALITY: 30,
    RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION: 48,
    RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL: 49,
    RPRM_RESULT_TYPE_INTERNAL_LICENSE: 50,
    RPRM_RESULT_TYPE_TEXT: 36,
    RPRM_RESULT_TYPE_IMAGES: 37,
    RPRM_RESULT_TYPE_HOLO_PARAMS: 47,
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: 85,
    RPRM_RESULT_TYPE_CUSTOM: 100,
    RFID_RESULT_TYPE_RFID_RAW_DATA: 101,
    RFID_RESULT_TYPE_RFID_TEXT_DATA: 102,
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: 103,
    RFID_RESULT_TYPE_RFID_BINARY_DATA: 104,
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: 105,
    RPRM_RESULT_TYPE_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_MRZ_POSITION: 61,
    RPRM_RESULT_TYPE_LIVE_PORTRAIT: 32,
    RPRM_RESULT_TYPE_STATUS: 33,
    RPRM_RESULT_TYPE_PORTRAIT_COMPARISON: 34,
    RPRM_RESULT_TYPE_EXT_PORTRAIT: 35,
    RFID_RESULT_TYPE_RFID_DTC_VC: 109,
};
export var FrameShapeType = {
    LINE: 0,
    CORNER: 1,
};
export var eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
};
export var LineCap = {
    BUTT: 0,
    ROUND: 1,
    SQUARE: 2,
};
export var eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
};
export var DocReaderAction = {
    COMPLETE: 0,
    PROCESS: 1,
    MORE_PAGES_AVAILABLE: 2,
    CANCEL: 3,
    ERROR: 4,
    PROCESS_WHITE_FLASHLIGHT: 5,
    TIMEOUT: 6,
    PROCESSING_ON_SERVICE: 7,
    NOTIFICATION: 101,
    PROCESS_WHITE_UV_IMAGES: 102,
    PROCESS_IR_FRAME: 103,
};
export var eProcessGLCommands = {
    ePC_ProcMgr_SetLicense: 12100,
    ePC_ProcMgr_Process: 12101,
    ePC_ProcMgr_ProcessAsync: 12102,
    ePC_ProcMgr_Init: 12103,
    ePC_ProcMgr_ProcessImage: 12104,
    ePC_ProcMgr_StartNewDocument: 12105,
    ePC_ProcMgr_StartNewPage: 12106,
    ePC_ProcMgr_AddDataToPackage: 12121,
    ePC_ProcMgr_FinalizePackage: 12122,
    ePC_ProcMgr_CreateBackendTransaction: 12125,
    ePC_ProcMgr_Unload: 12107,
    ePC_ProcMgr_CheckDatabase: 12109,
    ePC_ProcMgr_ComparePortraits: 12111,
    ePC_RFID_SetTCCParams: 12522,
};
export var eRFIDReadingBufferSize = {
    STANDARD_LENGTH: 0,
    EXTENDED_LENGTH: -1,
};
export var PKDResourceType = {
    CERTIFICATE_PA: 0,
    CERTIFICATE_TA: 1,
    LDIF: 2,
    CRL: 3,
    ML: 4,
    DEFL: 5,
    DEVL: 6,
    BL: 7,
    getType: function (value) {
        switch (value) {
            case "pa":
                return this.CERTIFICATE_PA;
            case "ta":
                return this.CERTIFICATE_TA;
            case "ldif":
                return this.LDIF;
            case "crl":
                return this.CRL;
            case "ml":
                return this.ML;
            case "defl":
                return this.DEFL;
            case "devl":
                return this.DEVL;
            case "bl":
                return this.BL;
            default:
                return this.CERTIFICATE_PA;
        }
    }
};
export var eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
};
export var DocumentReaderErrorCodes = {
    INITIALIZATION_CORE_ABSENT: 0,
    INITIALIZATION_FAILED: 1,
    INCORRECT_SCENARIO: 2,
    NO_RESULT: 3,
    REMOVE_DATABASE: 4,
    FETCHING_DATABASE: 5,
    DB_ID_NOT_FOUND: 6,
    DB_DESCRIPTION_NOT_FOUND: 7,
    SAVE_DB: 8,
    DOWNLOAD_DB_INCORRECT_CHECKSUM: 9,
    DB_DOWNLOAD: 10,
    RFID_ERROR: 12,
    LICENSE_ABSENT_OR_CORRUPTED: 13,
    LICENSE_INVALID_DATE: 14,
    LICENSE_INVALID_VERSION: 15,
    LICENSE_INVALID_DEVICE_ID: 16,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 17,
    LICENSE_NO_CAPABILITIES: 18,
    LICENSE_NO_AUTHENTICITY: 19,
    RECORD_PROCESS_INVALID_OUTPUT_URL: 20,
    LICENSE_ONLINE_ERROR: 21,
    LICENSE_NO_DATABASE: 22,
    LICENSE_DATABASE_INCORRECT: 23,
    INVALID_TCC_PARAMS: 24,
    RFID_IN_PROGRESS: 25,
    START_BACKEND_PROCESSING: 26,
    ADD_DATA_TO_PACKAGE: 27,
    FINALIZE_FAILED: 28,
    CAMERA_NO_PERMISSION: 29,
    CAMERA_NOT_AVAILABLE: 30,
    CANNOT_USE_CAMERA_IN_SCENARIO: 40,
    NATIVE_JAVA_EXCEPTION: 1000,
    BACKEND_ONLINE_PROCESSING: 303,
    WRONG_INPUT: 400,
    RESULT_UNAVAILABLE: 410,
    RESULT_WRONG_OUTPUT: 411,
    STATE_EXCEPTION: 500,
    BLE_EXCEPTION: 600,
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: 601,
    APP_BACKGROUND: 700,
    ONLINE_PROCESSING_WRONG_INPUT: 800,
};
export var ScenarioIdentifier = {
    SCENARIO_MRZ: "Mrz",
    SCENARIO_BARCODE: "Barcode",
    SCENARIO_LOCATE: "Locate",
    SCENARIO_OCR: "Ocr",
    SCENARIO_DOCTYPE: "DocType",
    SCENARIO_MRZ_OR_BARCODE: "MrzOrBarcode",
    SCENARIO_MRZ_OR_LOCATE: "MrzOrLocate",
    SCENARIO_MRZ_AND_LOCATE: "MrzAndLocate",
    SCENARIO_BARCODE_AND_LOCATE: "BarcodeAndLocate",
    SCENARIO_MRZ_OR_OCR: "MrzOrOcr",
    SCENARIO_MRZ_OR_BARCODE_OR_OCR: "MrzOrBarcodeOrOcr",
    SCENARIO_LOCATE_VISUAL_AND_MRZ_OR_OCR: "LocateVisual_And_MrzOrOcr",
    SCENARIO_FULL_PROCESS: "FullProcess",
    SCENARIO_FULL_AUTH: "FullAuth",
    SCENARIO_ID3RUS: "Id3Rus",
    SCENARIO_RUS_STAMP: "RusStamp",
    SCENARIO_OCR_FREE: "OcrFree",
    SCENARIO_CREDIT_CARD: "CreditCard",
    SCENARIO_CAPTURE: "Capture",
    SCENARIO_DTC: "DTC",
    SCENARIO_RFID: "RFID",
};
export var eRFID_AccessControl_ProcedureType = {
    ACPT_UNDEFINED: 0,
    ACPT_BAC: 1,
    ACPT_PACE: 2,
    ACPT_CA: 3,
    ACPT_TA: 4,
    ACPT_AA: 5,
    ACPT_RI: 6,
    ACPT_CARD_INFO: 10,
};
export var eRFID_NotificationCodes = {
    RFID_NOTIFICATION_ERROR: 0x00010000,
    RFID_NOTIFICATION_DOCUMENT_READY: 0x00010001,
    RFID_NOTIFICATION_READ_PROTOCOL4: 0x00010003,
    RFID_NOTIFICATION_READ_PROTOCOL3: 0x0001000A,
    RFID_NOTIFICATION_PROGRESS: 0x0001000B,
    RFID_NOTIFICATION_TA_STEP: 0x0001000E,
    RFID_NOTIFICATION_SM_REQUIRED: 0x0001000F,
    RFID_NOTIFICATION_ISO_ERROR: 0x00011000,
    RFID_NOTIFICATION_PA_REQUEST: 0x00013000,
    RFID_NOTIFICATION_SM_ESTABLISHED: 0x0001400F,
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: 0x00020000,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: 0x00020001,
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: 0x00020002,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: 0x00020003,
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: 0x00020004,
    RFID_NOTIFICATION_PCSC_BYTES_SENT: 0x00020005,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: 0x00020006,
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: 0x00020007,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: 0x00020008,
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: 0x00020010,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: 0x00020011,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: 0x00020012,
    RFID_NOTIFICATION_SCENARIO: 0x00020020,
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: 0x00030000,
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: 0x00040000,
    RFID_NOTIFICATION_PCSC_END_OF_FILE: 0x00050000,
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: 0x00060000,
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: 0x00070000,
    RFID_NOTIFICATION_AC_PROCEDURE_START: 0x00080000,
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: 0x00090000,
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: 0x000A0000,
    RFID_NOTIFICATION_PA_FILE_CHECK: 0x000B0000,
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: 0x000C0000,
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: 0x000D0000,
    RFID_NOTIFICATION_RI_SECTOR_ID: 0x000E0000,
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: 0x000F0000,
};
export var CameraPosition = {
    UNSPECIFIED: 0,
    BACK: 1,
    FRONT: 2,
};
export var eRFID_Password_Type = {
    PPT_UNKNOWN: 0,
    PPT_MRZ: 1,
    PPT_CAN: 2,
    PPT_PIN: 3,
    PPT_PUK: 4,
    PPT_PIN_ESIGN: 5,
    PPT_SAI: 6,
    PPT_MRZ_HASH: 7,
};
export var ViewContentMode = {
    UNKNOWN: -1,
    SCALE_TO_FILL: 0,
    SCALE_ASPECT_FIT: 1,
    SCALE_ASPECT_FILL: 2,
    REDRAW: 3,
    CENTER: 4,
    TOP: 5,
    BOTTOM: 6,
    LEFT: 7,
    RIGHT: 8,
    TOP_LEFT: 9,
    TOP_RIGHT: 10,
    BOTTOM_LEFT: 11,
    BOTTOM_RIGHT: 12,
};
export var BarcodeResult = {
    NO_ERR: 0,
    INVALID_RESULT: 140,
    NULL_PTR_ERR: -6001,
    BAD_ARG_ERR: -6002,
    SIZE_ERR: -6003,
    RANGE_ERR: -6004,
    INTERNAL_ERR: -6005,
    TRY_EXCEPT_ERR: -6006,
    BAR_CODE_NOT_FOUND: -6008,
    BAR_CODE_DECODE_ERR: -6010,
    NO_USER_DLL_FOUND: -6019,
    NO_IPP_DLL_FOUND: -6020,
    IPP_EXEC_ERR: -6024,
    IPP_TRY_EXCEPT_ERR: -6025,
    BARCODE_ERROR_INPUT_PARAM: -11001,
    BARCODE_ERROR_FINIT: -11006,
    BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: -11012,
    BARCODE_ERROR_INNER_PROBLEM: -11100,
    BARCODE_ERROR_DECODE_1D_BAD_DECODE: -11200,
    BARCODE_ERROR_FIND_ROW_OR_COLUMN: -11201,
    BARCODE_ERROR_FIND_3X8_2D_X: -11202,
    BARCODE_ERROR_FIND_3X8_2D_Y: -11203,
    BARCODE_ERROR_2D_UGOL_MAX: -11204,
    BARCODE_ERROR_INDEFINITELY_DECODED: -11210,
    BARCODE_ERROR_DLL_NOT_INIT: -11300,
    BARCODE_ERROR_IP_DECODE_DLL_Try_Except: -11400,
    IPDECODE_ERROR_LARGEERRORS: -4503,
    IPDECODE_ERROR_FAULTCOLUMNS: -4504,
    IPDECODE_ERROR_FAULTROWS: -4505,
    IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: -4511,
    IPDECODE_ERROR_LOADING_DEV_TABLE: -4512,
};
export var eRFID_Application_Type = {
    ePASSPORT: 1,
    eID: 2,
    eSIGN: 3,
    eDL: 4,
    LDS2_TRAVEL_RECORDS: 5,
    LDS2_VISA_RECORDS: 6,
    LDS2_ADD_BIOMETRICS: 7,
    eDTC_PC: 8,
};
export var eSignManagementAction = {
    smaUndefined: 0,
    smaCreatePIN: 1,
    smaChangePIN: 2,
    smaUnblockPIN: 3,
    smaTerminatePIN: 4,
    smaGenerateKeys: 5,
    smaTerminateKeys: 6,
    smaSignData: 7,
};
export var eCheckDiagnose = {
    UNKNOWN: 0,
    PASS: 1,
    INVALID_INPUT_DATA: 2,
    INTERNAL_ERROR: 3,
    EXCEPTION_IN_MODULE: 4,
    UNCERTAIN_VERIFICATION: 5,
    NECESSARY_IMAGE_NOT_FOUND: 7,
    PHOTO_SIDES_NOT_FOUND: 8,
    INVALID_CHECKSUM: 10,
    SYNTAX_ERROR: 11,
    LOGIC_ERROR: 12,
    SOURCES_COMPARISON_ERROR: 13,
    FIELDS_COMPARISON_LOGIC_ERROR: 14,
    INVALID_FIELD_FORMAT: 15,
    TRUE_LUMINISCENCE_ERROR: 20,
    FALSE_LUMINISCENCE_ERROR: 21,
    FIXED_PATTERN_ERROR: 22,
    LOW_CONTRAST_IN_IR_LIGHT: 23,
    INCORRECT_BACKGROUND_LIGHT: 24,
    BACKGROUND_COMPARISON_ERROR: 25,
    INCORRECT_TEXT_COLOR: 26,
    PHOTO_FALSE_LUMINISCENCE: 27,
    TOO_MUCH_SHIFT: 28,
    CONTACT_CHIP_TYPE_MISMATCH: 29,
    FIBERS_NOT_FOUND: 30,
    TOO_MANY_OBJECTS: 31,
    SPECKS_IN_UV: 33,
    TOO_LOW_RESOLUTION: 34,
    INVISIBLE_ELEMENT_PRESENT: 40,
    VISIBLE_ELEMENT_ABSENT: 41,
    ELEMENT_SHOULD_BE_COLORED: 42,
    ELEMENT_SHOULD_BE_GRAYSCALE: 43,
    PHOTO_WHITE_IR_DONT_MATCH: 44,
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    ENCRYPTED_IPI_NOT_FOUND: 66,
    ENCRYPTED_IPI_DATA_DONT_MATCH: 67,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: 81,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: 82,
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: 83,
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: 84,
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: 85,
    CHD_FIELD_POS_CORRECTOR_INCORRECT_HEAD_POSITION: 86,
    CHD_FIELD_POS_CORRECTOR_AGE_CHECK_ERROR: 87,
    CHD_FIELD_POS_CORRECTOR_SEX_CHECK_ERROR: 88,
    OVI_IR_INVISIBLE: 90,
    OVI_INSUFFICIENT_AREA: 91,
    OVI_COLOR_INVARIABLE: 92,
    OVI_BAD_COLOR_FRONT: 93,
    OVI_BAD_COLOR_SIDE: 94,
    OVI_WIDE_COLOR_SPREAD: 95,
    OVI_BAD_COLOR_PERCENT: 96,
    HOLOGRAM_ELEMENT_ABSENT: 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: 101,
    HOLOGRAM_ELEMENT_PRESENT: 102,
    HOLOGRAM_FRAMES_IS_ABSENT: 103,
    HOLOGRAM_HOLO_FIELD_IS_ABSENT: 104,
    PHOTO_PATTERN_INTERRUPTED: 110,
    PHOTO_PATTERN_SHIFTED: 111,
    PHOTO_PATTERN_DIFFERENT_COLORS: 112,
    PHOTO_PATTERN_IR_VISIBLE: 113,
    PHOTO_PATTERN_NOT_INTERSECT: 114,
    PHOTO_SIZE_IS_WRONG: 115,
    PHOTO_PATTERN_INVALID_COLOR: 116,
    PHOTO_PATTERN_SHIFTED_VERT: 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND: 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: 119,
    PHOTO_IS_NOT_RECTANGLE: 120,
    PHOTO_CORNERS_IS_WRONG: 121,
    DOCUMENT_IS_CANCELLING: 122,
    TEXT_COLOR_SHOULD_BE_BLUE: 130,
    TEXT_COLOR_SHOULD_BE_GREEN: 131,
    TEXT_COLOR_SHOULD_BE_RED: 132,
    TEXT_SHOULD_BE_BLACK: 133,
    SECURITY_TEXT_IS_ABSENT: 134,
    BARCODE_WAS_READ_WITH_ERRORS: 140,
    BARCODE_DATA_FORMAT_ERROR: 141,
    BARCODE_SIZE_PARAMS_ERROR: 142,
    NOT_ALL_BARCODES_READ: 143,
    GLARES_IN_BARCODE_AREA: 144,
    CHD_NO_CERTIFICATE_FOR_DIGITAL_SIGNATURE_CHECK: 145,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR: 152,
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: 161,
    FINGERPRINTS_COMPARISON_MISMATCH: 170,
    HOLO_PHOTO_FACE_NOT_DETECTED: 180,
    HOLO_PHOTO_FACE_COMPARISON_FAILED: 181,
    HOLO_PHOTO_FACE_GLARE_IN_CENTER_ABSENT: 182,
    HOLO_ELEMENT_SHAPE_ERROR: 183,
    ALGORITHM_STEPS_ERROR: 184,
    HOLO_AREAS_NOT_LOADED: 185,
    FINISHED_BY_TIMEOUT: 186,
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME: 187,
    LIVENESS_DEPTH_CHECK_FAILED: 190,
    MRZ_QUALITY_WRONG_SYMBOL_POSITION: 200,
    MRZ_QUALITY_WRONG_BACKGROUND: 201,
    MRZ_QUALITY_WRONG_MRZ_WIDTH: 202,
    MRZ_QUALITY_WRONG_MRZ_HEIGHT: 203,
    MRZ_QUALITY_WRONG_LINE_POSITION: 204,
    MRZ_QUALITY_WRONG_FONT_TYPE: 205,
    OCR_QUALITY_TEXT_POSITION: 220,
    OCR_QUALITY_INVALID_FONT: 221,
    OCR_QUALITY_INVALID_BACKGROUND: 222,
    LAS_INK_INVALID_LINES_FREQUENCY: 230,
    DOC_LIVENESS_DOCUMENT_NOT_LIVE: 238,
    CHD_DOC_LIVENESS_BLACK_AND_WHITE_COPY_DETECTED: 239,
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: 240,
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: 241,
    ICAO_IDB_BASE_32_ERROR: 243,
    ICAO_IDB_ZIPPED_ERROR: 244,
    ICAO_IDB_MESSAGE_ZONE_EMPTY: 245,
    ICAO_IDB_SIGNATURE_MUST_BE_PRESENT: 246,
    ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT: 247,
    ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT: 248,
    INCORRECT_OBJECT_COLOR: 250,
};
export var RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
};
export var TextProcessing = {
    ocNoChange: 0,
    ocUppercase: 1,
    ocLowercase: 2,
    ocCapital: 3,
};
export var LogLevel = {
    FatalError: "FatalError",
    Error: "Error",
    Warning: "Warning",
    Info: "Info",
    Debug: "Debug",
};
export var AnimationImage = {
    UNKNOWN: 0,
    PASSPORT_SINGLE_PAGE: 1,
    PASSPORT_TWO_PAGES: 2,
    ID_FRONT: 3,
    ID_FRONT_MRZ: 4,
    ID_BACK: 5,
    ID_BACK_MRZ: 6,
    ID_BACK_BARCODE: 7,
    ID_BACK_BARCODE_MRZ: 8,
    BANK_CARD_FRONT: 9,
    BANK_CARD_BACK: 10,
};
export var ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2,
};
export var DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    NON: 3,
    A4: 4,
    ID3_x2: 5,
    ID2_TURKEY: 6,
    ID1_90: 10,
    ID1_180: 11,
    ID1_270: 12,
    ID2_180: 13,
    ID3_180: 14,
    CUSTOM: 1000,
    PHOTO: 1001,
    FLEXIBLE: 1002,
    UNKNOWN: -1,
};
export var eLDS_ParsingNotificationCodes = {
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: 0x90000001,
    NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: 0x90000002,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: 0x90000003,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: 0x90000004,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: 0x90000005,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: 0x90000006,
    NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: 0x90000008,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: 0x9000000E,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: 0x9000000F,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: 0x90000010,
    NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: 0x90000017,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: 0x90000200,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: 0x90000201,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: 0x90000202,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: 0x90000203,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: 0x90000204,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: 0x90000205,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: 0x90000206,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: 0x90000207,
    NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: 0x90000208,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: 0x90000209,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: 0x9000020A,
    NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: 0x9000020B,
    NTF_LDS_ICAO_CERTIFICATE_VALIDITY: 0x9000020C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: 0x9000020D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: 0x9000020E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: 0x9000020F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: 0x90000210,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: 0x90000211,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: 0x90000212,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: 0x90000213,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: 0x90000214,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: 0x90000215,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: 0x90000216,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: 0x90000217,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: 0x90000218,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: 0x90000219,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: 0x9000021A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: 0x9000021B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: 0x9000021C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: 0x9000021D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: 0x9000021E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: 0x9000021F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: 0x90000220,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: 0x90000221,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: 0x90000222,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: 0x90000223,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: 0x90000224,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: 0x90000225,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: 0x90000226,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: 0x90000228,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: 0x90000229,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: 0x9000022A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: 0x9000022B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: 0x9000022C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: 0x9000022D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: 0x9000022E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: 0x9000022F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: 0x90000231,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: 0x90000232,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: 0x90000233,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: 0x90000234,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: 0x90000235,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: 0x90000236,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: 0x90000237,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: 0x90000238,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: 0x90000239,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: 0x9000023A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: 0x9000023B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: 0x9000023C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: 0x9000023D,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: 0x9000023E,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: 0x9000023F,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: 0x90000240,
    NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: 0x90000241,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: 0x90000242,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: 0x90000243,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: 0x90000244,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: 0x90000245,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: 0x90000246,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: 0x90000247,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: 0x90000248,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: 0x90000249,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: 0x9000024A,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: 0x9000024B,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: 0x9000024C,
    NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: 0x9000024D,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: 0x9000024E,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: 0x9000024F,
    NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: 0x90000020,
    NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: 0x90000021,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: 0x90000022,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: 0x90000023,
    NTF_LDS_ICAO_COM_DGPM_INCORRECT: 0x90000024,
    NTF_LDS_ICAO_COM_DGPM_MISSING: 0x90000025,
    NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: 0x90000026,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: 0x90000030,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: 0x90000031,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: 0x90000032,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: 0x90000033,
    NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: 0x90000100,
    NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: 0x900001A0,
    NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: 0x900001A1,
    NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: 0x90000101,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: 0x90000102,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: 0x90000103,
    NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: 0x90000109,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: 0x900001B0,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: 0x900001B1,
    NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: 0x900001B2,
    NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: 0x90000104,
    NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: 0x90000105,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: 0x90000106,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: 0x90000107,
    NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: 0x90000108,
    NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: 0x900001C0,
    NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: 0x900001C8,
    NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: 0x900001D0,
    NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: 0x900001D8,
    NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: 0x9000010A,
    NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: 0x9000010B,
    NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: 0x9000010C,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: 0x9000010D,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: 0x9000010E,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: 0x9000010F,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: 0x90000110,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: 0x90000111,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: 0x90000112,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: 0x9000011B,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: 0x9000011C,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: 0x9000011D,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: 0x9000011E,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: 0x9000011F,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x90000115,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x90000116,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x90000117,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: 0x90000118,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x90000119,
    NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: 0x9000011A,
    NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: 0x00022008,
    NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: 0x00022009,
    NTF_LDS_MRZ_NAME_IS_VOID: 0x0002200A,
    NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: 0x0002200D,
    NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: 0x0002200E,
    NTF_LDS_MRZ_DOB_SYNTAX_ERROR: 0x0002200F,
    NTF_LDS_MRZ_DOB_ERROR: 0x00022010,
    NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: 0x00022011,
    NTF_LDS_MRZ_SEX_INCORRECT: 0x00022012,
    NTF_LDS_MRZ_DOE_SYNTAX_ERROR: 0x00022013,
    NTF_LDS_MRZ_DOE_ERROR: 0x00022014,
    NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: 0x00022015,
    NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: 0x00022016,
    NTF_LDS_MRZ_INCORRECT_CHECKSUM: 0x00022017,
    NTF_LDS_MRZ_INCORRECT: 0x00022018,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: 0x90010000,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: 0x90020000,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: 0x90030000,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: 0x90040000,
    NTF_LDS_BIOMETRICS_TYPE_INCORRECT: 0x90050000,
    NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: 0x90060000,
    NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: 0x90070000,
    NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: 0x90080000,
    NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: 0x90090000,
    NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: 0x900A0000,
    NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: 0x900B0000,
    NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: 0x90100000,
    NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: 0x90110000,
    NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: 0x90120000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: 0x90130000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: 0x90140000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: 0x90150000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: 0x90160000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: 0x90170000,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: 0x90180000,
    NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: 0x90190000,
    NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: 0x901A0000,
    NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: 0x91000000,
    NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: 0x91000001,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: 0x91000002,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000003,
    NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: 0x91000004,
    NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: 0x91000005,
    NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x91000006,
    NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: 0x91000007,
    NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: 0x91000008,
    NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: 0x91000009,
    NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: 0x9100000A,
    NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: 0x9100000B,
    NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: 0x9100000C,
    NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: 0x9100000D,
    NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: 0x9100000E,
    NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: 0x91000100,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: 0x91000101,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000102,
    NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: 0x91000103,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: 0x91000104,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: 0x91000105,
    NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: 0x91000106,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: 0x91000107,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: 0x91000108,
    NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: 0x91000109,
    NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: 0x9100010A,
    NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: 0x9100010B,
    NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: 0x9100010C,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: 0x9100010D,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: 0x9100010E,
    NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: 0x9100010F,
    NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: 0x91000110,
    NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: 0x91000201,
    NTF_LDS_CV_CERTIFICATE_VALIDITY: 0x91000202,
    NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: 0x91000203,
    NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: 0x91000204,
    NTF_LDS_TA_PACE_STATIC_BINDING_USED: 0x91000300,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: 0x92000115,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: 0x92000116,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: 0x92000117,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: 0x92000118,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: 0x92000119,
    NTF_LDS_ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING: 0x90000250,
    NTF_LDS_ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING: 0x90000251,
    NTF_LDS_MRZ_COUNTRYCODE_VISUALMRZ_NON_MATCHING: 0x00022019,
    NTF_LDS_ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING: 0x90000252,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_UPPER_CASE: 0x90000253,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_UPPER_CASE: 0x90000254,
};
export var eImageQualityCheckType = {
    IQC_IMAGE_GLARES: 0,
    IQC_IMAGE_FOCUS: 1,
    IQC_IMAGE_RESOLUTION: 2,
    IQC_IMAGE_COLORNESS: 3,
    IQC_PERSPECTIVE: 4,
    IQC_BOUNDS: 5,
    IQC_SCREEN_CAPTURE: 6,
    IQC_PORTRAIT: 7,
    IQC_HANDWRITTEN: 8,
    IQC_BRIGHTNESS: 9,
    IQC_OCCLUSION: 10,
};
export var MRZFormat = {
    FORMAT_1X30: "1x30",
    FORMAT_3X30: "3x30",
    FORMAT_2X36: "2x36",
    FORMAT_2X44: "2x44",
    FORMAT_1X6: "1x6",
    FORMAT_2X30: "2x30",
};
export var BarcodeType = {
    UNKNOWN: 0,
    BCT_CODE128: 1,
    CODE39: 2,
    EAN8: 3,
    ITF: 4,
    PDF417: 5,
    STF: 6,
    MTF: 7,
    IATA: 8,
    CODABAR: 9,
    UPCA: 10,
    CODE93: 11,
    UPCE: 12,
    EAN13: 13,
    QRCODE: 14,
    AZTEC: 15,
    DATAMATRIX: 16,
    ALL_1D: 17,
    CODE11: 18,
    JABCODE: 19,
};
export var eRPRM_SecurityFeatureType = {
    NONE: -1,
    SECURITY_FEATURE_TYPE_BLANK: 0,
    SECURITY_FEATURE_TYPE_FILL: 1,
    SECURITY_FEATURE_TYPE_PHOTO: 2,
    SECURITY_FEATURE_TYPE_MRZ: 3,
    SECURITY_FEATURE_TYPE_FALSE_LUMINESCENCE: 4,
    SECURITY_FEATURE_TYPE_HOLO_SIMPLE: 5,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_STATIC: 6,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_MULTI_STATIC: 7,
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_DINAMIC: 8,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_INTERRUPTED: 9,
    SECURITY_FEATURE_TYPE_PATTERN_NOT_SHIFTED: 10,
    SECURITY_FEATURE_TYPE_PATTERN_SAME_COLORS: 11,
    SECURITY_FEATURE_TYPE_PATTERN_IR_INVISIBLE: 12,
    SECURITY_FEATURE_TYPE_PHOTO_SIZE_CHECK: 13,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_GHOST: 14,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_RFID: 15,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_VISUAL: 16,
    SECURITY_FEATURE_TYPE_BARCODE: 17,
    SECURITY_FEATURE_TYPE_PATTERN_DIFFERENT_LINES_THICKNESS: 18,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_CAMERA: 19,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_CAMERA: 20,
    SECURITY_FEATURE_TYPE_GHOST_PHOTO: 21,
    SECURITY_FEATURE_TYPE_CLEAR_GHOST_PHOTO: 22,
    SECURITY_FEATURE_TYPE_INVISIBLE_OBJECT: 23,
    SECURITY_FEATURE_TYPE_LOW_CONTRAST_OBJECT: 24,
    SECURITY_FEATURE_TYPE_PHOTO_COLOR: 25,
    SECURITY_FEATURE_TYPE_PHOTO_SHAPE: 26,
    SECURITY_FEATURE_TYPE_PHOTO_CORNERS: 27,
    SECURITY_FEATURE_TYPE_OCR: 28,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_VISUAL: 29,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_RFID: 30,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_LIVE: 31,
    SECURITY_FEATURE_TYPE_LIVENESS_DEPTH: 32,
    SECURITY_FEATURE_TYPE_MICROTEXT: 33,
    SECURITY_FEATURE_TYPE_FLUORESCENT_OBJECT: 34,
    SECURITY_FEATURE_TYPE_LANDMARKS_CHECK: 35,
    SECURITY_FEATURE_TYPE_FACE_PRESENCE: 36,
    SECURITY_FEATURE_TYPE_FACE_ABSENCE: 38,
    SECURITY_FEATURE_TYPE_LIVENESS_SCREEN_CAPTURE: 39,
    SECURITY_FEATURE_TYPE_LIVENESS_ELECTRONIC_DEVICE: 40,
    SECURITY_FEATURE_TYPE_LIVENESS_OVI: 41,
    SECURITY_FEATURE_TYPE_BARCODE_SIZE_CHECK: 42,
    SECURITY_FEATURE_TYPE_LAS_INK: 43,
    SECURITY_FEATURE_TYPE_LIVENESS_MLI: 44,
    SECURITY_FEATURE_TYPE_LIVENESS_BARCODE_BACKGROUND: 45,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_BARCODE: 46,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_BARCODE: 47,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXT_VS_BARCODE: 48,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_BARCODE_VS_CAMERA: 49,
    SECURITY_FEATURE_TYPE_CHECK_DIGITAL_SIGNATURE: 50,
    SECURITY_FEATURE_TYPE_CONTACT_CHIP_CLASSIFICATION: 51,
    SECURITY_FEATURE_TYPE_HEAD_POSITION_CHECK: 52,
    SECURITY_FEATURE_TYPE_LIVENESS_BLACK_AND_WHITE_COPY_CHECK: 53,
    SECURITY_FEATURE_TYPE_LIVENESS_DYNAPRINT_CHECK: 54,
    SECURITY_FEATURE_TYPE_LIVENESS_GEOMETRY_CHECK: 55,
    SECURITY_FEATURE_TYPE_AGE_CHECK: 56,
    SECURITY_FEATURE_TYPE_SEX_CHECK: 57,
};
export var OnlineMode = {
    MANUAL: 0,
    AUTO: 1,
};
export var eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
};
export var diDocType = {
    dtNotDefined: 0,
    dtPassport: 11,
    dtIdentityCard: 12,
    dtDiplomaticPassport: 13,
    dtServicePassport: 14,
    dtSeamanIdentityDocument: 15,
    dtIdentityCardForResidence: 16,
    dtTravelDocument: 17,
    dtOther: 99,
    dtVisaID2: 29,
    dtVisaID3: 30,
    dtRegistrationCertificate: 206,
    dtNationalIdentityCard: 20,
    dtSocialIdentityCard: 21,
    dtAliensIdentityCard: 22,
    dtPrivilegedIdentityCard: 23,
    dtResidencePermitIdentityCard: 24,
    dtOriginCard: 25,
    dtEmergencyPassport: 26,
    dtAliensPassport: 27,
    dtAlternativeIdentityCard: 28,
    dtAuthorizationCard: 32,
    dtBeginnerPermit: 33,
    dtBorderCrossingCard: 34,
    dtChauffeurLicense: 35,
    dtChauffeurLicenseUnder18: 36,
    dtChauffeurLicenseUnder21: 37,
    dtCommercialDrivingLicense: 38,
    dtCommercialDrivingLicenseInstructionalPermit: 39,
    dtCommercialDrivingLicenseUnder18: 40,
    dtCommercialDrivingLicenseUnder21: 41,
    dtCommercialInstructionPermit: 42,
    dtCommercialNewPermit: 43,
    dtConcealedCarryLicense: 44,
    dtConcealedFirearmPermit: 45,
    dtConditionalDrivingLicense: 46,
    dtDepartmentOfVeteransAffairsIdentityCard: 47,
    dtDiplomaticDrivingLicense: 48,
    dtDrivingLicense: 49,
    dtDrivingLicenseInstructionalPermit: 50,
    dtDrivingLicenseInstructionalPermitUnder18: 51,
    dtDrivingLicenseInstructionalPermitUnder21: 52,
    dtDrivingLicenseLearnersPermit: 53,
    dtDrivingLicenseLearnersPermitUnder18: 54,
    dtDrivingLicenseLearnersPermitUnder21: 55,
    dtDrivingLicenseNovice: 56,
    dtDrivingLicenseNoviceUnder18: 57,
    dtDrivingLicenseNoviceUnder21: 58,
    dtDrivingLicenseRegisteredOffender: 59,
    dtDrivingLicenseRestrictedUnder18: 60,
    dtDrivingLicenseRestrictedUnder21: 61,
    dtDrivingLicenseTemporaryVisitor: 62,
    dtDrivingLicenseTemporaryVisitorUnder18: 63,
    dtDrivingLicenseTemporaryVisitorUnder21: 64,
    dtDrivingLicenseUnder18: 65,
    dtDrivingLicenseUnder21: 66,
    dtEmploymentDrivingPermit: 67,
    dtEnhancedChauffeurLicense: 68,
    dtEnhancedChauffeurLicenseUnder18: 69,
    dtEnhancedChauffeurLicenseUnder21: 70,
    dtEnhancedCommercialDrivingLicense: 71,
    dtEnhancedDrivingLicense: 72,
    dtEnhancedDrivingLicenseUnder18: 73,
    dtEnhancedDrivingLicenseUnder21: 74,
    dtEnhancedIdentityCard: 75,
    dtEnhancedIdentityCardUnder18: 76,
    dtEnhancedIdentityCardUnder21: 77,
    dtEnhancedOperatorsLicense: 78,
    dtFirearmsPermit: 79,
    dtFullProvisionalLicense: 80,
    dtFullProvisionalLicenseUnder18: 81,
    dtFullProvisionalLicenseUnder21: 82,
    dtGenevaConventionsIdentityCard: 83,
    dtGraduatedDrivingLicenseUnder18: 84,
    dtGraduatedDrivingLicenseUnder21: 85,
    dtGraduatedInstructionPermitUnder18: 86,
    dtGraduatedInstructionPermitUnder21: 87,
    dtGraduatedLicenseUnder18: 88,
    dtGraduatedLicenseUnder21: 89,
    dtHandgunCarryPermit: 90,
    dtIdentityAndPrivilegeCard: 91,
    dtIdentityCardMobilityImpaired: 92,
    dtIdentityCardRegisteredOffender: 93,
    dtIdentityCardTemporaryVisitor: 94,
    dtIdentityCardTemporaryVisitorUnder18: 95,
    dtIdentityCardTemporaryVisitorUnder21: 96,
    dtIdentityCardUnder18: 97,
    dtIdentityCardUnder21: 98,
    dtIgnitionInterlockPermit: 100,
    dtImmigrantVisa: 101,
    dtInstructionPermit: 102,
    dtInstructionPermitUnder18: 103,
    dtInstructionPermitUnder21: 104,
    dtInterimDrivingLicense: 105,
    dtInterimIdentityCard: 106,
    dtIntermediateDrivingLicense: 107,
    dtIntermediateDrivingLicenseUnder18: 108,
    dtIntermediateDrivingLicenseUnder21: 109,
    dtJuniorDrivingLicense: 110,
    dtLearnerInstructionalPermit: 111,
    dtLearnerLicense: 112,
    dtLearnerLicenseUnder18: 113,
    dtLearnerLicenseUnder21: 114,
    dtLearnerPermit: 115,
    dtLearnerPermitUnder18: 116,
    dtLearnerPermitUnder21: 117,
    dtLimitedLicense: 118,
    dtLimitedPermit: 119,
    dtLimitedTermDrivingLicense: 120,
    dtLimitedTermIdentityCard: 121,
    dtLiquorIdentityCard: 122,
    dtNewPermit: 123,
    dtNewPermitUnder18: 124,
    dtNewPermitUnder21: 125,
    dtNonUsCitizenDrivingLicense: 126,
    dtOccupationalDrivingLicense: 127,
    dtOneidaTribeOfIndiansIdentityCard: 128,
    dtOperatorLicense: 129,
    dtOperatorLicenseUnder18: 130,
    dtOperatorLicenseUnder21: 131,
    dtPermanentDrivingLicense: 132,
    dtPermitToReEnter: 133,
    dtProbationaryAutoLicense: 134,
    dtProbationaryDrivingLicenseUnder18: 135,
    dtProbationaryDrivingLicenseUnder21: 136,
    dtProbationaryVehicleSalespersonLicense: 137,
    dtProvisionalDrivingLicense: 138,
    dtProvisionalDrivingLicenseUnder18: 139,
    dtProvisionalDrivingLicenseUnder21: 140,
    dtProvisionalLicense: 141,
    dtProvisionalLicenseUnder18: 142,
    dtProvisionalLicenseUnder21: 143,
    dtPublicPassengerChauffeurLicense: 144,
    dtRacingAndGamingComissionCard: 145,
    dtRefugeeTravelDocument: 146,
    dtRenewalPermit: 147,
    dtRestrictedCommercialDrivingLicense: 148,
    dtRestrictedDrivingLicense: 149,
    dtRestrictedPermit: 150,
    dtSeasonalPermit: 151,
    dtSeasonalResidentIdentityCard: 152,
    dtSeniorCitizenIdentityCard: 153,
    dtSexOffender: 154,
    dtSocialSecurityCard: 155,
    dtTemporaryDrivingLicense: 156,
    dtTemporaryDrivingLicenseUnder18: 157,
    dtTemporaryDrivingLicenseUnder21: 158,
    dtTemporaryIdentityCard: 159,
    dtTemporaryInstructionPermitIdentityCard: 160,
    dtTemporaryInstructionPermitIdentityCardUnder18: 161,
    dtTemporaryInstructionPermitIdentityCardUnder21: 162,
    dtTemporaryVisitorDrivingLicense: 163,
    dtTemporaryVisitorDrivingLicenseUnder18: 164,
    dtTemporaryVisitorDrivingLicenseUnder21: 165,
    dtUniformedServicesIdentityCard: 166,
    dtVehicleSalespersonLicense: 167,
    dtWorkerIdentificationCredential: 168,
    dtCommercialDrivingLicenseNovice: 169,
    dtCommercialDrivingLicenseNoviceUnder18: 170,
    dtCommercialDrivingLicenseNoviceUnder21: 171,
    dtPassportCard: 172,
    dtPermanentResidentCard: 173,
    dtPersonalIdentificationVerification: 174,
    dtTemporaryOperatorLicense: 175,
    dtDrivingLicenseUnder19: 176,
    dtIdentityCardUnder19: 177,
    dtVisa: 178,
    dtTemporaryPassport: 179,
    dtVotingCard: 180,
    dtHealthCard: 181,
    dtCertificateOfCitizenship: 182,
    dtAddressCard: 183,
    dtAirportImmigrationCard: 184,
    dtAlienRegistrationCard: 185,
    dtAPEHCard: 186,
    dtCouponToDrivingLicense: 187,
    dtCrewMemberCertificate: 188,
    dtDocumentForReturn: 189,
    dtECard: 190,
    dtEmploymentCard: 191,
    dtHKSARImmigrationForm: 192,
    dtImmigrantCard: 193,
    dtLabourCard: 194,
    dtLaissezPasser: 195,
    dtLawyerIdentityCertificate: 196,
    dtLicenseCard: 197,
    dtPassportStateless: 198,
    dtPassportChild: 199,
    dtPassportConsular: 200,
    dtPassportDiplomaticService: 201,
    dtPassportOfficial: 202,
    dtPassportProvisional: 203,
    dtPassportSpecial: 204,
    dtPermissionToTheLocalBorderTraffic: 205,
    dtSEDESOLCard: 207,
    dtSocialCard: 208,
    dtTBCard: 209,
    dtVehiclePassport: 210,
    dtWDocument: 211,
    dtDiplomaticIdentityCard: 212,
    dtConsularIdentityCard: 213,
    dtIncomeTaxCard: 214,
    dtResidencePermit: 215,
    dtDocumentOfIdentity: 216,
    dtBorderCrossingPermit: 217,
    dtPassportLimitedValidity: 218,
    dtSIMCard: 219,
    dtTaxCard: 220,
    dtCompanyCard: 221,
    dtDomesticPassport: 222,
    dtIdentityCertificate: 223,
    dtResidentIdCard: 224,
    dtArmedForcesIdentityCard: 225,
    dtProfessionalCard: 226,
    dtRegistrationStamp: 227,
    dtDriverCard: 228,
    dtDriverTrainingCertificate: 229,
    dtQualificationDrivingLicense: 230,
    dtMembershipCard: 231,
    dtPublicVehicleDriverAuthorityCard: 232,
    dtMarineLicense: 233,
    dtTemporaryLearnerDrivingLicense: 234,
    dtTemporaryCommercialDrivingLicense: 235,
    dtInterimInstructionalPermit: 236,
    dtCertificateOfCompetency: 237,
    dtCertificateOfProficiency: 238,
    dtTradeLicense: 239,
    dtPassportPage: 240,
    dtInvoice: 241,
    dtPassengerLocatorForm: 242,
};
export var ButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAPTURE: 1003,
    CHANGE_FRAME: 1004,
    SKIP: 1005,
    CAMERA_SWITCH: 1006,
};
export var HoloAnimationType = {
    DocumentHoloAnimationUnknown: 0,
    DocumentHoloAnimationTypeHorizontal: 1,
    DocumentHoloAnimationTypeVertical: 2,
    DocumentHoloAnimationTypeLeftBottomRightTop: 4,
    DocumentHoloAnimationTypeRightBottomLeftTop: 8,
};
export var eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
    eReqCmd_GetGuid: 400,
    eReqCmd_WltToImage: 401,
};
export var CustomizationFont = {
    RFID_PROCESSING_SCREEN_HINT_LABEL: "rfidProcessingScreenHintLabel",
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL: "rfidProcessingScreenProgressLabel",
    RFID_PROCESSING_SCREEN_RESULT_LABEL: "rfidProcessingScreenResultLabel",
    RFID_ENABLE_NFC_TITLE_TEXT: "rfidEnableNfcTitleText",
    RFID_ENABLE_NFC_DESCRIPTION_TEXT: "rfidEnableNfcDescriptionText",
    RFID_ENABLE_NFC_BUTTON_TEXT: "rfidEnableNfcButtonText",
};
export var ImageFormat = {
    PNG: 0,
    JPG: 1,
};
export var eGraphicFieldType = {
    GF_PORTRAIT: 201,
    GF_FINGERPR: 202,
    GF_EYE: 203,
    GF_SIGNATURE: 204,
    GF_BAR_CODE: 205,
    GF_PROOF_OF_CITIZENSHIP: 206,
    GF_DOCUMENT_IMAGE: 207,
    GF_COLOR_DYNAMIC: 209,
    GF_GHOST_PORTRAIT: 210,
    GF_STAMP: 211,
    GF_PORTRAIT_OF_CHILD: 212,
    GF_CONTACT_CHIP: 213,
    GF_OTHER: 250,
    GF_FINGER_LEFT_THUMB: 300,
    GF_FINGER_LEFT_INDEX: 301,
    GF_FINGER_LEFT_MIDDLE: 302,
    GF_FINGER_LEFT_RING: 303,
    GF_FINGER_LEFT_LITTLE: 304,
    GF_FINGER_RIGHT_THUMB: 305,
    GF_FINGER_RIGHT_INDEX: 306,
    GF_FINGER_RIGHT_MIDDLE: 307,
    GF_FINGER_RIGHT_RING: 308,
    GF_FINGER_RIGHT_LITTLE: 309,
};
export var RegDeviceConfigType = {
    DEVICE_7310: "DEVICE_7310",
};
export var CaptureSessionPreset = {
    UNKNOWN: -1,
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    PHOTO: 3,
    INPUT_PRIORITY: 4,
    PRESET_1280x720: 6,
    PRESET_1920x1080: 7,
    PRESET_3840x2160: 8,
    FRAME_960x540: 9,
    FRAME_1280x720: 10,
    PRESET_640x480: 12,
    PRESET_352x288: 13,
};
export var CameraMode = {
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
};
export var CaptureMode = {
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
};
export var eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
};
export var eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
};
export var eRFID_DataFile_Type = {
    DFT_UNSPECIFIED: 0,
    DFT_PASSPORT_DG1: 1,
    DFT_PASSPORT_DG2: 2,
    DFT_PASSPORT_DG3: 3,
    DFT_PASSPORT_DG4: 4,
    DFT_PASSPORT_DG5: 5,
    DFT_PASSPORT_DG6: 6,
    DFT_PASSPORT_DG7: 7,
    DFT_PASSPORT_DG8: 8,
    DFT_PASSPORT_DG9: 9,
    DFT_PASSPORT_DG10: 10,
    DFT_PASSPORT_DG11: 11,
    DFT_PASSPORT_DG12: 12,
    DFT_PASSPORT_DG13: 13,
    DFT_PASSPORT_DG14: 14,
    DFT_PASSPORT_DG15: 15,
    DFT_PASSPORT_DG16: 16,
    DFT_PASSPORT_DG17: 17,
    DFT_PASSPORT_DG18: 18,
    DFT_PASSPORT_DG19: 19,
    DFT_PASSPORT_DG20: 20,
    DFT_PASSPORT_SOD: 21,
    DFT_PASSPORT_CVCA: 22,
    DFT_PASSPORT_COM: 23,
    DFT_DTC_DG17: 57,
    DFT_DTC_DG18: 58,
    DFT_DTC_DG22: 62,
    DFT_DTC_DG23: 63,
    DFT_DTC_DG24: 64,
    DFT_ID_DG1: 101,
    DFT_ID_DG2: 102,
    DFT_ID_DG3: 103,
    DFT_ID_DG4: 104,
    DFT_ID_DG5: 105,
    DFT_ID_DG6: 106,
    DFT_ID_DG7: 107,
    DFT_ID_DG8: 108,
    DFT_ID_DG9: 109,
    DFT_ID_DG10: 110,
    DFT_ID_DG11: 111,
    DFT_ID_DG12: 112,
    DFT_ID_DG13: 113,
    DFT_ID_DG14: 114,
    DFT_ID_DG15: 115,
    DFT_ID_DG16: 116,
    DFT_ID_DG17: 117,
    DFT_ID_DG18: 118,
    DFT_ID_DG19: 119,
    DFT_ID_DG20: 120,
    DFT_ID_DG21: 121,
    DFT_DL_COM: 150,
    DFT_DL_DG1: 151,
    DFT_DL_DG2: 152,
    DFT_DL_DG3: 153,
    DFT_DL_DG4: 154,
    DFT_DL_DG5: 155,
    DFT_DL_DG6: 156,
    DFT_DL_DG7: 157,
    DFT_DL_DG8: 158,
    DFT_DL_DG9: 159,
    DFT_DL_DG10: 160,
    DFT_DL_DG11: 161,
    DFT_DL_DG12: 162,
    DFT_DL_DG13: 163,
    DFT_DL_DG14: 164,
    DFT_DL_SOD: 165,
    DFT_DL_CE: 166,
    DFT_DL_CVCA: 167,
    DFT_PACE_CARDACCESS: 200,
    DFT_PACE_CARDSECURITY: 201,
    DFT_PACE_CHIPSECURITY: 202,
    DFT_MIFARE_DATA: 300,
    DFT_MIFARE_VALIDITY: 301,
    DFT_AUTHENTICITYV2: 302,
    DFT_ATR: 400,
    DFT_ESIGN_PK: 500,
    DFT_ESIGN_SIGNEDDATA: 501,
    DFT_CERTIFICATE: 600,
    DFT_MASTERLIST: 601,
    DFT_DEFECTLIST: 602,
    DFT_DEVIATIONLIST: 603,
    DFT_APP_DIRECTORY: 700,
    DFT_SESSION: 701,
    DFT_LOGDATA: 702,
    DFT_CHIP_PROPERTIES: 703,
    DFT_SAM_DATA: 800,
    DFT_SAM_DATA_MAX: 800 + 32,
    DFT_VDS: 900,
    DFT_VDSNC: 901,
    DFT_USERDEFINED: 1000,
};
export var eVisualFieldType = {
    FT_DOCUMENT_CLASS_CODE: 0,
    FT_ISSUING_STATE_CODE: 1,
    FT_DOCUMENT_NUMBER: 2,
    FT_DATE_OF_EXPIRY: 3,
    FT_DATE_OF_ISSUE: 4,
    FT_DATE_OF_BIRTH: 5,
    FT_PLACE_OF_BIRTH: 6,
    FT_PERSONAL_NUMBER: 7,
    FT_SURNAME: 8,
    FT_GIVEN_NAMES: 9,
    FT_MOTHERS_NAME: 10,
    FT_NATIONALITY: 11,
    FT_SEX: 12,
    FT_HEIGHT: 13,
    FT_WEIGHT: 14,
    FT_EYES_COLOR: 15,
    FT_HAIR_COLOR: 16,
    FT_ADDRESS: 17,
    FT_DONOR: 18,
    FT_SOCIAL_SECURITY_NUMBER: 19,
    FT_DL_CLASS: 20,
    FT_DL_ENDORSED: 21,
    FT_DL_RESTRICTION_CODE: 22,
    FT_DL_UNDER_21_DATE: 23,
    FT_AUTHORITY: 24,
    FT_SURNAME_AND_GIVEN_NAMES: 25,
    FT_NATIONALITY_CODE: 26,
    FT_PASSPORT_NUMBER: 27,
    FT_INVITATION_NUMBER: 28,
    FT_VISA_ID: 29,
    FT_VISA_CLASS: 30,
    FT_VISA_SUB_CLASS: 31,
    FT_MRZ_STRING_1: 32,
    FT_MRZ_STRING_2: 33,
    FT_MRZ_STRING_3: 34,
    FT_MRZ_TYPE: 35,
    FT_OPTIONAL_DATA: 36,
    FT_DOCUMENT_CLASS_NAME: 37,
    FT_ISSUING_STATE_NAME: 38,
    FT_PLACE_OF_ISSUE: 39,
    FT_DOCUMENT_NUMBER_CHECKSUM: 40,
    FT_DATE_OF_BIRTH_CHECKSUM: 41,
    FT_DATE_OF_EXPIRY_CHECKSUM: 42,
    FT_PERSONAL_NUMBER_CHECKSUM: 43,
    FT_FINAL_CHECKSUM: 44,
    FT_PASSPORT_NUMBER_CHECKSUM: 45,
    FT_INVITATION_NUMBER_CHECKSUM: 46,
    FT_VISA_ID_CHECKSUM: 47,
    FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM: 48,
    FT_VISA_VALID_UNTIL_CHECKSUM: 49,
    FT_OTHER: 50,
    FT_MRZ_STRINGS: 51,
    FT_NAME_SUFFIX: 52,
    FT_NAME_PREFIX: 53,
    FT_DATE_OF_ISSUE_CHECKSUM: 54,
    FT_DATE_OF_ISSUE_CHECK_DIGIT: 55,
    FT_DOCUMENT_SERIES: 56,
    FT_REG_CERT_REG_NUMBER: 57,
    FT_REG_CERT_CAR_MODEL: 58,
    FT_REG_CERT_CAR_COLOR: 59,
    FT_REG_CERT_BODY_NUMBER: 60,
    FT_REG_CERT_CAR_TYPE: 61,
    FT_REG_CERT_MAX_WEIGHT: 62,
    FT_REG_CERT_WEIGHT: 63,
    FT_ADDRESS_AREA: 64,
    FT_ADDRESS_STATE: 65,
    FT_ADDRESS_BUILDING: 66,
    FT_ADDRESS_HOUSE: 67,
    FT_ADDRESS_FLAT: 68,
    FT_PLACE_OF_REGISTRATION: 69,
    FT_DATE_OF_REGISTRATION: 70,
    FT_RESIDENT_FROM: 71,
    FT_RESIDENT_UNTIL: 72,
    FT_AUTHORITY_CODE: 73,
    FT_PLACE_OF_BIRTH_AREA: 74,
    FT_PLACE_OF_BIRTH_STATE_CODE: 75,
    FT_ADDRESS_STREET: 76,
    FT_ADDRESS_CITY: 77,
    FT_ADDRESS_JURISDICTION_CODE: 78,
    FT_ADDRESS_POSTAL_CODE: 79,
    FT_DOCUMENT_NUMBER_CHECK_DIGIT: 80,
    FT_DATE_OF_BIRTH_CHECK_DIGIT: 81,
    FT_DATE_OF_EXPIRY_CHECK_DIGIT: 82,
    FT_PERSONAL_NUMBER_CHECK_DIGIT: 83,
    FT_FINAL_CHECK_DIGIT: 84,
    FT_PASSPORT_NUMBER_CHECK_DIGIT: 85,
    FT_INVITATION_NUMBER_CHECK_DIGIT: 86,
    FT_VISA_ID_CHECK_DIGIT: 87,
    FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: 88,
    FT_VISA_VALID_UNTIL_CHECK_DIGIT: 89,
    FT_PERMIT_DL_CLASS: 90,
    FT_PERMIT_DATE_OF_EXPIRY: 91,
    FT_PERMIT_IDENTIFIER: 92,
    FT_PERMIT_DATE_OF_ISSUE: 93,
    FT_PERMIT_RESTRICTION_CODE: 94,
    FT_PERMIT_ENDORSED: 95,
    FT_ISSUE_TIMESTAMP: 96,
    FT_NUMBER_OF_DUPLICATES: 97,
    FT_MEDICAL_INDICATOR_CODES: 98,
    FT_NON_RESIDENT_INDICATOR: 99,
    FT_VISA_TYPE: 100,
    FT_VISA_VALID_FROM: 101,
    FT_VISA_VALID_UNTIL: 102,
    FT_DURATION_OF_STAY: 103,
    FT_NUMBER_OF_ENTRIES: 104,
    FT_DAY: 105,
    FT_MONTH: 106,
    FT_YEAR: 107,
    FT_UNIQUE_CUSTOMER_IDENTIFIER: 108,
    FT_COMMERCIAL_VEHICLE_CODES: 109,
    FT_AKA_DATE_OF_BIRTH: 110,
    FT_AKA_SOCIAL_SECURITY_NUMBER: 111,
    FT_AKA_SURNAME: 112,
    FT_AKA_GIVEN_NAMES: 113,
    FT_AKA_NAME_SUFFIX: 114,
    FT_AKA_NAME_PREFIX: 115,
    FT_MAILING_ADDRESS_STREET: 116,
    FT_MAILING_ADDRESS_CITY: 117,
    FT_MAILING_ADDRESS_JURISDICTION_CODE: 118,
    FT_MAILING_ADDRESS_POSTAL_CODE: 119,
    FT_AUDIT_INFORMATION: 120,
    FT_INVENTORY_NUMBER: 121,
    FT_RACE_ETHNICITY: 122,
    FT_JURISDICTION_VEHICLE_CLASS: 123,
    FT_JURISDICTION_ENDORSEMENT_CODE: 124,
    FT_JURISDICTION_RESTRICTION_CODE: 125,
    FT_FAMILY_NAME: 126,
    FT_GIVEN_NAMES_RUS: 127,
    FT_VISA_ID_RUS: 128,
    FT_FATHERS_NAME: 129,
    FT_FATHERS_NAME_RUS: 130,
    FT_SURNAME_AND_GIVEN_NAMES_RUS: 131,
    FT_PLACE_OF_BIRTH_RUS: 132,
    FT_AUTHORITY_RUS: 133,
    FT_ISSUING_STATE_CODE_NUMERIC: 134,
    FT_NATIONALITY_CODE_NUMERIC: 135,
    FT_ENGINE_POWER: 136,
    FT_ENGINE_VOLUME: 137,
    FT_CHASSIS_NUMBER: 138,
    FT_ENGINE_NUMBER: 139,
    FT_ENGINE_MODEL: 140,
    FT_VEHICLE_CATEGORY: 141,
    FT_IDENTITY_CARD_NUMBER: 142,
    FT_CONTROL_NO: 143,
    FT_PARRENTS_GIVEN_NAMES: 144,
    FT_SECOND_SURNAME: 145,
    FT_MIDDLE_NAME: 146,
    FT_REG_CERT_VIN: 147,
    FT_REG_CERT_VIN_CHECK_DIGIT: 148,
    FT_REG_CERT_VIN_CHECKSUM: 149,
    FT_LINE_1_CHECK_DIGIT: 150,
    FT_LINE_2_CHECK_DIGIT: 151,
    FT_LINE_3_CHECK_DIGIT: 152,
    FT_LINE_1_CHECKSUM: 153,
    FT_LINE_2_CHECKSUM: 154,
    FT_LINE_3_CHECKSUM: 155,
    FT_REG_CERT_REG_NUMBER_CHECK_DIGIT: 156,
    FT_REG_CERT_REG_NUMBER_CHECKSUM: 157,
    FT_REG_CERT_VEHICLE_ITS_CODE: 158,
    FT_CARD_ACCESS_NUMBER: 159,
    FT_MARITAL_STATUS: 160,
    FT_COMPANY_NAME: 161,
    FT_SPECIAL_NOTES: 162,
    FT_SURNAME_OF_SPOSE: 163,
    FT_TRACKING_NUMBER: 164,
    FT_BOOKLET_NUMBER: 165,
    FT_CHILDREN: 166,
    FT_COPY: 167,
    FT_SERIAL_NUMBER: 168,
    FT_DOSSIER_NUMBER: 169,
    FT_AKA_SURNAME_AND_GIVEN_NAMES: 170,
    FT_TERRITORIAL_VALIDITY: 171,
    FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: 172,
    FT_DL_CDL_RESTRICTION_CODE: 173,
    FT_DL_UNDER_18_DATE: 174,
    FT_DL_RECORD_CREATED: 175,
    FT_DL_DUPLICATE_DATE: 176,
    FT_DL_ISS_TYPE: 177,
    FT_MILITARY_BOOK_NUMBER: 178,
    FT_DESTINATION: 179,
    FT_BLOOD_GROUP: 180,
    FT_SEQUENCE_NUMBER: 181,
    FT_REG_CERT_BODY_TYPE: 182,
    FT_REG_CERT_CAR_MARK: 183,
    FT_TRANSACTION_NUMBER: 184,
    FT_AGE: 185,
    FT_FOLIO_NUMBER: 186,
    FT_VOTER_KEY: 187,
    FT_ADDRESS_MUNICIPALITY: 188,
    FT_ADDRESS_LOCATION: 189,
    FT_SECTION: 190,
    FT_OCR_NUMBER: 191,
    FT_FEDERAL_ELECTIONS: 192,
    FT_REFERENCE_NUMBER: 193,
    FT_OPTIONAL_DATA_CHECKSUM: 194,
    FT_OPTIONAL_DATA_CHECK_DIGIT: 195,
    FT_VISA_NUMBER: 196,
    FT_VISA_NUMBER_CHECKSUM: 197,
    FT_VISA_NUMBER_CHECK_DIGIT: 198,
    FT_VOTER: 199,
    FT_PREVIOUS_TYPE: 200,
    FT_FIELD_FROM_MRZ: 220,
    FT_CURRENT_DATE: 221,
    FT_STATUS_DATE_OF_EXPIRY: 251,
    FT_BANKNOTE_NUMBER: 252,
    FT_CSC_CODE: 253,
    FT_ARTISTIC_NAME: 254,
    FT_ACADEMIC_TITLE: 255,
    FT_ADDRESS_COUNTRY: 256,
    FT_ADDRESS_ZIPCODE: 257,
    FT_E_ID_RESIDENCE_PERMIT_1: 258,
    FT_E_ID_RESIDENCE_PERMIT_2: 259,
    FT_E_ID_PLACE_OF_BIRTH_STREET: 260,
    FT_E_ID_PLACE_OF_BIRTH_CITY: 261,
    FT_E_ID_PLACE_OF_BIRTH_STATE: 262,
    FT_E_ID_PLACE_OF_BIRTH_COUNTRY: 263,
    FT_E_ID_PLACE_OF_BIRTH_ZIPCODE: 264,
    FT_CDL_CLASS: 265,
    FT_DL_UNDER_19_DATE: 266,
    FT_WEIGHT_POUNDS: 267,
    FT_LIMITED_DURATION_DOCUMENT_INDICATOR: 268,
    FT_ENDORSEMENT_EXPIRATION_DATE: 269,
    FT_REVISION_DATE: 270,
    FT_COMPLIANCE_TYPE: 271,
    FT_FAMILY_NAME_TRUNCATION: 272,
    FT_FIRST_NAME_TRUNCATION: 273,
    FT_MIDDLE_NAME_TRUNCATION: 274,
    FT_EXAM_DATE: 275,
    FT_ORGANIZATION: 276,
    FT_DEPARTMENT: 277,
    FT_PAY_GRADE: 278,
    FT_RANK: 279,
    FT_BENEFITS_NUMBER: 280,
    FT_SPONSOR_SERVICE: 281,
    FT_SPONSOR_STATUS: 282,
    FT_SPONSOR: 283,
    FT_RELATIONSHIP: 284,
    FT_USCIS: 285,
    FT_CATEGORY: 286,
    FT_CONDITIONS: 287,
    FT_IDENTIFIER: 288,
    FT_CONFIGURATION: 289,
    FT_DISCRETIONARY_DATA: 290,
    FT_LINE_1_OPTIONAL_DATA: 291,
    FT_LINE_2_OPTIONAL_DATA: 292,
    FT_LINE_3_OPTIONAL_DATA: 293,
    FT_EQV_CODE: 294,
    FT_ALT_CODE: 295,
    FT_BINARY_CODE: 296,
    FT_PSEUDO_CODE: 297,
    FT_FEE: 298,
    FT_STAMP_NUMBER: 299,
    FT_SBH_SECURITYOPTIONS: 300,
    FT_SBH_INTEGRITYOPTIONS: 301,
    FT_DATE_OF_CREATION: 302,
    FT_VALIDITY_PERIOD: 303,
    FT_PATRON_HEADER_VERSION: 304,
    FT_BDB_TYPE: 305,
    FT_BIOMETRIC_TYPE: 306,
    FT_BIOMETRIC_SUBTYPE: 307,
    FT_BIOMETRIC_PRODUCTID: 308,
    FT_BIOMETRIC_FORMAT_OWNER: 309,
    FT_BIOMETRIC_FORMAT_TYPE: 310,
    FT_PHONE: 311,
    FT_PROFESSION: 312,
    FT_TITLE: 313,
    FT_PERSONAL_SUMMARY: 314,
    FT_OTHER_VALID_ID: 315,
    FT_CUSTODY_INFO: 316,
    FT_OTHER_NAME: 317,
    FT_OBSERVATIONS: 318,
    FT_TAX: 319,
    FT_DATE_OF_PERSONALIZATION: 320,
    FT_PERSONALIZATION_SN: 321,
    FT_OTHERPERSON_NAME: 322,
    FT_PERSONTONOTIFY_DATE_OF_RECORD: 323,
    FT_PERSONTONOTIFY_NAME: 324,
    FT_PERSONTONOTIFY_PHONE: 325,
    FT_PERSONTONOTIFY_ADDRESS: 326,
    FT_DS_CERTIFICATE_ISSUER: 327,
    FT_DS_CERTIFICATE_SUBJECT: 328,
    FT_DS_CERTIFICATE_VALIDFROM: 329,
    FT_DS_CERTIFICATE_VALIDTO: 330,
    FT_VRC_DATAOBJECT_ENTRY: 331,
    FT_TYPE_APPROVAL_NUMBER: 332,
    FT_ADMINISTRATIVE_NUMBER: 333,
    FT_DOCUMENT_DISCRIMINATOR: 334,
    FT_DATA_DISCRIMINATOR: 335,
    FT_ISO_ISSUER_ID_NUMBER: 336,
    FT_DTC_VERSION: 337,
    FT_DTC_ID: 338,
    FT_DTC_DATE_OF_EXPIRY: 339,
    FT_GNIB_NUMBER: 340,
    FT_DEPT_NUMBER: 341,
    FT_TELEX_CODE: 342,
    FT_ALLERGIES: 343,
    FT_SP_CODE: 344,
    FT_COURT_CODE: 345,
    FT_CTY: 346,
    FT_SPONSOR_SSN: 347,
    FT_DO_D_NUMBER: 348,
    FT_MC_NOVICE_DATE: 349,
    FT_DUF_NUMBER: 350,
    FT_AGY: 351,
    FT_PNR_CODE: 352,
    FT_FROM_AIRPORT_CODE: 353,
    FT_TO_AIRPORT_CODE: 354,
    FT_FLIGHT_NUMBER: 355,
    FT_DATE_OF_FLIGHT: 356,
    FT_SEAT_NUMBER: 357,
    FT_DATE_OF_ISSUE_BOARDING_PASS: 358,
    FT_CCW_UNTIL: 359,
    FT_REFERENCE_NUMBER_CHECKSUM: 360,
    FT_REFERENCE_NUMBER_CHECK_DIGIT: 361,
    FT_ROOM_NUMBER: 362,
    FT_RELIGION: 363,
    FT_REMAINDER_TERM: 364,
    FT_ELECTRONIC_TICKET_INDICATOR: 365,
    FT_COMPARTMENT_CODE: 366,
    FT_CHECK_IN_SEQUENCE_NUMBER: 367,
    FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: 368,
    FT_AIRLINE_NUMERIC_CODE: 369,
    FT_TICKET_NUMBER: 370,
    FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR: 371,
    FT_FREQUENT_FLYER_NUMBER: 372,
    FT_FREE_BAGGAGE_ALLOWANCE: 373,
    FT_PDF_417_CODEC: 374,
    FT_IDENTITY_CARD_NUMBER_CHECKSUM: 375,
    FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT: 376,
    FT_VETERAN: 377,
    FT_DL_CLASS_CODE_A_1_FROM: 378,
    FT_DL_CLASS_CODE_A_1_TO: 379,
    FT_DL_CLASS_CODE_A_1_NOTES: 380,
    FT_DL_CLASS_CODE_A_FROM: 381,
    FT_DL_CLASS_CODE_A_TO: 382,
    FT_DL_CLASS_CODE_A_NOTES: 383,
    FT_DL_CLASS_CODE_B_FROM: 384,
    FT_DL_CLASS_CODE_B_TO: 385,
    FT_DL_CLASS_CODE_B_NOTES: 386,
    FT_DL_CLASS_CODE_C_1_FROM: 387,
    FT_DL_CLASS_CODE_C_1_TO: 388,
    FT_DL_CLASS_CODE_C_1_NOTES: 389,
    FT_DL_CLASS_CODE_C_FROM: 390,
    FT_DL_CLASS_CODE_C_TO: 391,
    FT_DL_CLASS_CODE_C_NOTES: 392,
    FT_DL_CLASS_CODE_D_1_FROM: 393,
    FT_DL_CLASS_CODE_D_1_TO: 394,
    FT_DL_CLASS_CODE_D_1_NOTES: 395,
    FT_DL_CLASS_CODE_D_FROM: 396,
    FT_DL_CLASS_CODE_D_TO: 397,
    FT_DL_CLASS_CODE_D_NOTES: 398,
    FT_DL_CLASS_CODE_BE_FROM: 399,
    FT_DL_CLASS_CODE_BE_TO: 400,
    FT_DL_CLASS_CODE_BE_NOTES: 401,
    FT_DL_CLASS_CODE_C_1_E_FROM: 402,
    FT_DL_CLASS_CODE_C_1_E_TO: 403,
    FT_DL_CLASS_CODE_C_1_E_NOTES: 404,
    FT_DL_CLASS_CODE_CE_FROM: 405,
    FT_DL_CLASS_CODE_CE_TO: 406,
    FT_DL_CLASS_CODE_CE_NOTES: 407,
    FT_DL_CLASS_CODE_D_1_E_FROM: 408,
    FT_DL_CLASS_CODE_D_1_E_TO: 409,
    FT_DL_CLASS_CODE_D_1_E_NOTES: 410,
    FT_DL_CLASS_CODE_DE_FROM: 411,
    FT_DL_CLASS_CODE_DE_TO: 412,
    FT_DL_CLASS_CODE_DE_NOTES: 413,
    FT_DL_CLASS_CODE_M_FROM: 414,
    FT_DL_CLASS_CODE_M_TO: 415,
    FT_DL_CLASS_CODE_M_NOTES: 416,
    FT_DL_CLASS_CODE_L_FROM: 417,
    FT_DL_CLASS_CODE_L_TO: 418,
    FT_DL_CLASS_CODE_L_NOTES: 419,
    FT_DL_CLASS_CODE_T_FROM: 420,
    FT_DL_CLASS_CODE_T_TO: 421,
    FT_DL_CLASS_CODE_T_NOTES: 422,
    FT_DL_CLASS_CODE_AM_FROM: 423,
    FT_DL_CLASS_CODE_AM_TO: 424,
    FT_DL_CLASS_CODE_AM_NOTES: 425,
    FT_DL_CLASS_CODE_A_2_FROM: 426,
    FT_DL_CLASS_CODE_A_2_TO: 427,
    FT_DL_CLASS_CODE_A_2_NOTES: 428,
    FT_DL_CLASS_CODE_B_1_FROM: 429,
    FT_DL_CLASS_CODE_B_1_TO: 430,
    FT_DL_CLASS_CODE_B_1_NOTES: 431,
    FT_SURNAME_AT_BIRTH: 432,
    FT_CIVIL_STATUS: 433,
    FT_NUMBER_OF_SEATS: 434,
    FT_NUMBER_OF_STANDING_PLACES: 435,
    FT_MAX_SPEED: 436,
    FT_FUEL_TYPE: 437,
    FT_EC_ENVIRONMENTAL_TYPE: 438,
    FT_POWER_WEIGHT_RATIO: 439,
    FT_MAX_MASS_OF_TRAILER_BRAKED: 440,
    FT_MAX_MASS_OF_TRAILER_UNBRAKED: 441,
    FT_TRANSMISSION_TYPE: 442,
    FT_TRAILER_HITCH: 443,
    FT_ACCOMPANIED_BY: 444,
    FT_POLICE_DISTRICT: 445,
    FT_FIRST_ISSUE_DATE: 446,
    FT_PAYLOAD_CAPACITY: 447,
    FT_NUMBER_OF_AXELS: 448,
    FT_PERMISSIBLE_AXLE_LOAD: 449,
    FT_PRECINCT: 450,
    FT_INVITED_BY: 451,
    FT_PURPOSE_OF_ENTRY: 452,
    FT_SKIN_COLOR: 453,
    FT_COMPLEXION: 454,
    FT_AIRPORT_FROM: 455,
    FT_AIRPORT_TO: 456,
    FT_AIRLINE_NAME: 457,
    FT_AIRLINE_NAME_FREQUENT_FLYER: 458,
    FT_LICENSE_NUMBER: 459,
    FT_IN_TANKS: 460,
    FT_EXEPT_IN_TANKS: 461,
    FT_FAST_TRACK: 462,
    FT_OWNER: 463,
    FT_MRZ_STRINGS_ICAO_RFID: 464,
    FT_NUMBER_OF_CARD_ISSUANCE: 465,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM: 466,
    FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: 467,
    FT_CENTURY_DATE_OF_BIRTH: 468,
    FT_DL_CLASSCODE_A3_FROM: 469,
    FT_DL_CLASSCODE_A3_TO: 470,
    FT_DL_CLASSCODE_A3_NOTES: 471,
    FT_DL_CLASSCODE_C2_FROM: 472,
    FT_DL_CLASSCODE_C2_TO: 473,
    FT_DL_CLASSCODE_C2_NOTES: 474,
    FT_DL_CLASSCODE_B2_FROM: 475,
    FT_DL_CLASSCODE_B2_TO: 476,
    FT_DL_CLASSCODE_B2_NOTES: 477,
    FT_DL_CLASSCODE_D2_FROM: 478,
    FT_DL_CLASSCODE_D2_TO: 479,
    FT_DL_CLASSCODE_D2_NOTES: 480,
    FT_DL_CLASSCODE_B2E_FROM: 481,
    FT_DL_CLASSCODE_B2E_TO: 482,
    FT_DL_CLASSCODE_B2E_NOTES: 483,
    FT_DL_CLASSCODE_G_FROM: 484,
    FT_DL_CLASSCODE_G_TO: 485,
    FT_DL_CLASSCODE_G_NOTES: 486,
    FT_DL_CLASSCODE_J_FROM: 487,
    FT_DL_CLASSCODE_J_TO: 488,
    FT_DL_CLASSCODE_J_NOTES: 489,
    FT_DL_CLASSCODE_LC_FROM: 490,
    FT_DL_CLASSCODE_LC_TO: 491,
    FT_DLC_LASSCODE_LC_NOTES: 492,
    FT_BANKCARDNUMBER: 493,
    FT_BANKCARDVALIDTHRU: 494,
    FT_TAX_NUMBER: 495,
    FT_HEALTH_NUMBER: 496,
    FT_GRANDFATHERNAME: 497,
    FT_SELECTEE_INDICATOR: 498,
    FT_MOTHER_SURNAME: 499,
    FT_MOTHER_GIVENNAME: 500,
    FT_FATHER_SURNAME: 501,
    FT_FATHER_GIVENNAME: 502,
    FT_MOTHER_DATEOFBIRTH: 503,
    FT_FATHER_DATEOFBIRTH: 504,
    FT_MOTHER_PERSONALNUMBER: 505,
    FT_FATHER_PERSONALNUMBER: 506,
    FT_MOTHER_PLACEOFBIRTH: 507,
    FT_FATHER_PLACEOFBIRTH: 508,
    FT_MOTHER_COUNTRYOFBIRTH: 509,
    FT_FATHER_COUNTRYOFBIRTH: 510,
    FT_DATE_FIRST_RENEWAL: 511,
    FT_DATE_SECOND_RENEWAL: 512,
    FT_PLACE_OF_EXAMINATION: 513,
    FT_APPLICATION_NUMBER: 514,
    FT_VOUCHER_NUMBER: 515,
    FT_AUTHORIZATION_NUMBER: 516,
    FT_FACULTY: 517,
    FT_FORM_OF_EDUCATION: 518,
    FT_DNI_NUMBER: 519,
    FT_RETIREMENT_NUMBER: 520,
    FT_PROFESSIONAL_ID_NUMBER: 521,
    FT_AGE_AT_ISSUE: 522,
    FT_YEARS_SINCE_ISSUE: 523,
    FT_DLCLASSCODE_BTP_FROM: 524,
    FT_DLCLASSCODE_BTP_NOTES: 525,
    FT_DLCLASSCODE_BTP_TO: 526,
    FT_DLCLASSCODE_C3_FROM: 527,
    FT_DLCLASSCODE_C3_NOTES: 528,
    FT_DLCLASSCODE_C3_TO: 529,
    FT_DLCLASSCODE_E_FROM: 530,
    FT_DLCLASSCODE_E_NOTES: 531,
    FT_DLCLASSCODE_E_TO: 532,
    FT_DLCLASSCODE_F_FROM: 533,
    FT_DLCLASSCODE_F_NOTES: 534,
    FT_DLCLASSCODE_F_TO: 535,
    FT_DLCLASSCODE_FA_FROM: 536,
    FT_DLCLASSCODE_FA_NOTES: 537,
    FT_DLCLASSCODE_FA_TO: 538,
    FT_DLCLASSCODE_FA1_FROM: 539,
    FT_DLCLASSCODE_FA1_NOTES: 540,
    FT_DLCLASSCODE_FA1_TO: 541,
    FT_DLCLASSCODE_FB_FROM: 542,
    FT_DLCLASSCODE_FB_NOTES: 543,
    FT_DLCLASSCODE_FB_TO: 544,
    FT_DLCLASSCODE_G1_FROM: 545,
    FT_DLCLASSCODE_G1_NOTES: 546,
    FT_DLCLASSCODE_G1_TO: 547,
    FT_DLCLASSCODE_H_FROM: 548,
    FT_DLCLASSCODE_H_NOTES: 549,
    FT_DLCLASSCODE_H_TO: 550,
    FT_DLCLASSCODE_I_FROM: 551,
    FT_DLCLASSCODE_I_NOTES: 552,
    FT_DLCLASSCODE_I_TO: 553,
    FT_DLCLASSCODE_K_FROM: 554,
    FT_DLCLASSCODE_K_NOTES: 555,
    FT_DLCLASSCODE_K_TO: 556,
    FT_DLCLASSCODE_LK_FROM: 557,
    FT_DLCLASSCODE_LK_NOTES: 558,
    FT_DLCLASSCODE_LK_TO: 559,
    FT_DLCLASSCODE_N_FROM: 560,
    FT_DLCLASSCODE_N_NOTES: 561,
    FT_DLCLASSCODE_N_TO: 562,
    FT_DLCLASSCODE_S_FROM: 563,
    FT_DLCLASSCODE_S_NOTES: 564,
    FT_DLCLASSCODE_S_TO: 565,
    FT_DLCLASSCODE_TB_FROM: 566,
    FT_DLCLASSCODE_TB_NOTES: 567,
    FT_DLCLASSCODE_TB_TO: 568,
    FT_DLCLASSCODE_TM_FROM: 569,
    FT_DLCLASSCODE_TM_NOTES: 570,
    FT_DLCLASSCODE_TM_TO: 571,
    FT_DLCLASSCODE_TR_FROM: 572,
    FT_DLCLASSCODE_TR_NOTES: 573,
    FT_DLCLASSCODE_TR_TO: 574,
    FT_DLCLASSCODE_TV_FROM: 575,
    FT_DLCLASSCODE_TV_NOTES: 576,
    FT_DLCLASSCODE_TV_TO: 577,
    FT_DLCLASSCODE_V_FROM: 578,
    FT_DLCLASSCODE_V_NOTES: 579,
    FT_DLCLASSCODE_V_TO: 580,
    FT_DLCLASSCODE_W_FROM: 581,
    FT_DLCLASSCODE_W_NOTES: 582,
    FT_DLCLASSCODE_W_TO: 583,
    FT_URL: 584,
    FT_CALIBER: 585,
    FT_MODEL: 586,
    FT_MAKE: 587,
    FT_NUMBER_OF_CYLINDERS: 588,
    FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION: 589,
    FT_SURNAME_OF_WIFE_AFTER_REGISTRATION: 590,
    FT_DATE_OF_BIRTH_OF_WIFE: 591,
    FT_DATE_OF_BIRTH_OF_HUSBAND: 592,
    FT_CITIZENSHIP_OF_FIRST_PERSON: 593,
    FT_CITIZENSHIP_OF_SECOND_PERSON: 594,
    FT_CVV: 595,
    FT_DATE_OF_INSURANCE_EXPIRY: 596,
    FT_MORTGAGE_BY: 597,
    FT_OLD_DOCUMENT_NUMBER: 598,
    FT_OLD_DATE_OF_ISSUE: 599,
    FT_OLD_PLACE_OF_ISSUE: 600,
    FT_DLCLASSCODE_LR_FROM: 601,
    FT_DLCLASSCODE_LR_TO: 602,
    FT_DLCLASSCODE_LR_NOTES: 603,
    FT_DLCLASSCODE_MR_FROM: 604,
    FT_DLCLASSCODE_MR_TO: 605,
    FT_DLCLASSCODE_MR_NOTES: 606,
    FT_DLCLASSCODE_HR_FROM: 607,
    FT_DLCLASSCODE_HR_TO: 608,
    FT_DLCLASSCODE_HR_NOTES: 609,
    FT_DLCLASSCODE_HC_FROM: 610,
    FT_DLCLASSCODE_HC_TO: 611,
    FT_DLCLASSCODE_HC_NOTES: 612,
    FT_DLCLASSCODE_MC_FROM: 613,
    FT_DLCLASSCODE_MC_TO: 614,
    FT_DLCLASSCODE_MC_NOTES: 615,
    FT_DLCLASSCODE_RE_FROM: 616,
    FT_DLCLASSCODE_RE_TO: 617,
    FT_DLCLASSCODE_RE_NOTES: 618,
    FT_DLCLASSCODE_R_FROM: 619,
    FT_DLCLASSCODE_R_TO: 620,
    FT_DLCLASSCODE_R_NOTES: 621,
    FT_DLCLASSCODE_CA_FROM: 622,
    FT_DLCLASSCODE_CA_TO: 623,
    FT_DLCLASSCODE_CA_NOTES: 624,
    FT_CITIZENSHIP_STATUS: 625,
    FT_MILITARY_SERVICE_FROM: 626,
    FT_MILITARY_SERVICE_TO: 627,
    FT_DLCLASSCODE_NT_FROM: 628,
    FT_DLCLASSCODE_NT_TO: 629,
    FT_DLCLASSCODE_NT_NOTES: 630,
    FT_DLCLASSCODE_TN_FROM: 631,
    FT_DLCLASSCODE_TN_TO: 632,
    FT_DLCLASSCODE_TN_NOTES: 633,
    FT_DLCLASSCODE_D3_FROM: 634,
    FT_DLCLASSCODE_D3_TO: 635,
    FT_DLCLASSCODE_D3_NOTES: 636,
    FT_ALT_DATE_OF_EXPIRY: 637,
    FT_DLCLASSCODE_CD_FROM: 638,
    FT_DLCLASSCODE_CD_TO: 639,
    FT_DLCLASSCODE_CD_NOTES: 640,
    FT_PAYMENT_PERIOD_TO: 643,
    FT_PAYMENT_PERIOD_FROM: 642,
    FT_ISSUER_IDENTIFICATION_NUMBER: 641,
    FT_VACCINATION_CERTIFICATE_IDENTIFIER: 644,
    FT_FIRST_NAME: 645,
    FT_DATE_OF_ARRIVAL: 646,
    FT_SECOND_NAME: 647,
    FT_THIRD_NAME: 648,
    FT_FOURTH_NAME: 649,
    FT_LAST_NAME: 650,
    FT_DLCLASSCODE_RM_FROM: 651,
    FT_DLCLASSCODE_RM_NOTES: 652,
    FT_DLCLASSCODE_RM_TO: 653,
    FT_DLCLASSCODE_PW_FROM: 654,
    FT_DLCLASSCODE_PW_NOTES: 655,
    FT_DLCLASSCODE_PW_TO: 656,
    FT_DLCLASSCODE_EB_FROM: 657,
    FT_DLCLASSCODE_EB_NOTES: 658,
    FT_DLCLASSCODE_EB_TO: 659,
    FT_DLCLASSCODE_EC_FROM: 660,
    FT_DLCLASSCODE_EC_NOTES: 661,
    FT_DLCLASSCODE_EC_TO: 662,
    FT_DLCLASSCODE_EC1_FROM: 663,
    FT_DLCLASSCODE_EC1_NOTES: 664,
    FT_DLCLASSCODE_EC1_TO: 665,
    FT_PLACE_OF_BIRTH_CITY: 666,
    FT_YEAR_OF_BIRTH: 667,
    FT_YEAR_OF_EXPIRY: 668,
    FT_GRANDFATHER_NAME_MATERNAL: 669,
    FT_FIRST_SURNAME: 670,
    FT_MONTH_OF_BIRTH: 671,
    FT_ADDRESS_FLOOR_NUMBER: 672,
    FT_ADDRESS_ENTRANCE: 673,
    FT_ADDRESS_BLOCK_NUMBER: 674,
    FT_ADDRESS_STREET_NUMBER: 675,
    FT_ADDRESS_STREET_TYPE: 676,
    FT_ADDRESS_CITY_SECTOR: 677,
    FT_ADDRESS_COUNTY_TYPE: 678,
    FT_ADDRESS_CITY_TYPE: 679,
    FT_ADDRESS_BUILDING_TYPE: 680,
    FT_DATE_OF_RETIREMENT: 681,
    FT_DOCUMENT_STATUS: 682,
    FT_SIGNATURE: 683,
    FT_UNIQUE_CERTIFICATE_IDENTIFIER: 684,
    FT_EMAIL: 685,
    FT_DATE_OF_SPECIMEN_COLLECTION: 686,
    FT_TYPE_OF_TESTING: 687,
    FT_RESULT_OF_TESTING: 688,
    FT_METHOD_OF_TESTING: 689,
    FT_DIGITAL_TRAVEL_AUTHORIZATION_NUMBER: 690,
    FT_DATE_OF_FIRST_POSITIVE_TEST_RESULT: 691,
    FT_EF_CARD_ACCESS: 692,
    FT_SHORT_FLIGHT_NUMBER: 693,
    FT_AIRLINE_CODE: 694,
    FT_MVC_AGENCY: 695,
    FT_ISSUING_STATE_CODE_ALPHA2: 696,
    FT_NATIONALITY_CODE_ALPHA2: 697,
    FT_FIRST_ISSUE_DATE_CHECKDIGIT: 698,
    FT_FIRST_ISSUE_DATE_CHECKSUM: 699,
};
export var DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4,
};
export var LCID = {
    LATIN: 0,
    ABKHAZIAN_CYRILLIC: 10011,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
    AMHARIC: 1118,
    ARABIC_ALGERIA: 5121,
    ARABIC_BAHRAIN: 15361,
    ARABIC_EGYPT: 3073,
    ARABIC_IRAQ: 2049,
    ARABIC_JORDAN: 11265,
    ARABIC_KUWAIT: 13313,
    ARABIC_LEBANON: 12289,
    ARABIC_LIBYA: 4097,
    ARABIC_MOROCCO: 6145,
    ARABIC_OMAN: 8193,
    ARABIC_QATAR: 16385,
    ARABIC_SAUDI_ARABIA: 1025,
    ARABIC_SYRIA: 10241,
    ARABIC_TUNISIA: 7169,
    ARABIC_UAE: 14337,
    ARABIC_YEMEN: 9217,
    ARABIC_ARMENIAN: 1067,
    ARABIC_WORLD: 4096,
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    BASQUE: 1069,
    BANK_CARD: 10003,
    BANK_CARD_CVV2: 10004,
    BANK_CARD_NAME: 10002,
    BANK_CARD_NUMBER: 10000,
    BANK_CARD_VALID_THRU: 10001,
    BELARUSIAN: 1059,
    BENGALI_BANGLADESH: 2117,
    BULGARIAN: 1026,
    CATALAN: 1027,
    CHINESE_HONGKONG_SAR: 3076,
    CHINESE_MACAO_SAR: 5124,
    CHINESE: 2052,
    CHINESE_SINGAPORE: 4100,
    CHINESE_TAIWAN: 1028,
    CROATIAN: 1050,
    CZECH: 1029,
    DANISH: 1030,
    DIVEHI: 1125,
    DUTCH_BELGIUM: 2067,
    DUTCH_NETHERLANDS: 1043,
    ENGLISH_AUSTRALIA: 3081,
    ENGLISH_BELIZE: 10249,
    ENGLISH_CANADA: 4105,
    ENGLISH_CARRIBEAN: 9225,
    ENGLISH_IRELAND: 6153,
    ENGLISH_JAMAICA: 8201,
    ENGLISH_NEW_ZEALAND: 5129,
    ENGLISH_PHILIPPINES: 13321,
    ENGLISH_SOUTH_AFRICA: 7177,
    ENGLISH_TRINIDAD: 11273,
    ENGLISH_UK: 2057,
    ENGLISH_US: 1033,
    ENGLISH_ZIMBABWE: 12297,
    ESTONIAN: 1061,
    FAEROESE: 1080,
    FARSI: 1065,
    FINNISH: 1035,
    FRENCH_BELGIUM: 2060,
    FRENCH_CANADA: 3084,
    FRENCH_FRANCE: 1036,
    FRENCH_LUXEMBOURG: 5132,
    FRENCH_MONACO: 6156,
    FRENCH_SWITZERLAND: 4108,
    FYRO_MACEDONIAN: 1071,
    GALICIAN: 1110,
    GEORGIAN: 1079,
    GERMAN_AUSTRIA: 3079,
    GERMAN_GERMANY: 1031,
    GERMAN_LIECHTENSTEIN: 5127,
    GERMAN_LUXEMBOURG: 4103,
    GERMAN_SWITZERLAND: 2055,
    GREEK: 1032,
    GUJARATI: 1095,
    HEBREW: 1037,
    HINDI_INDIA: 1081,
    HUNGARIAN: 1038,
    ICELANDIC: 1039,
    INDONESIAN: 1057,
    ITALIAN_ITALY: 1040,
    ITALIAN_SWITZERLAND: 2064,
    JAPANESE: 1041,
    KANNADA: 1099,
    KASHMIRI: 1120,
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LAO: 1108,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    ASSAMESE: 1101,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
    PASHTO: 1123,
    POLISH: 1045,
    PORTUGUESE_BRAZIL: 1046,
    PORTUGUESE_PORTUGAL: 2070,
    PUNJABI: 1094,
    RHAETO_ROMANIC: 1047,
    ROMANIAN: 1048,
    RUSSIAN: 1049,
    SANSKRIT: 1103,
    SERBIAN_CYRILIC: 3098,
    SERBIAN_LATIN: 2074,
    SINDHI: 2137,
    SINDHI_INDIA: 1113,
    SINHALA: 1115,
    SLOVAK: 1051,
    SLOVENIAN: 1060,
    SPANISH_ARGENTINA: 11274,
    SPANISH_BOLIVIA: 16394,
    SPANISH_CHILE: 13322,
    SPANICH_COLOMBIA: 9226,
    SPANISH_COSTA_RICA: 5130,
    SPANISH_DOMINICAN_REPUBLIC: 7178,
    SPANISH_ECUADOR: 12298,
    SPANISH_EL_SALVADOR: 17418,
    SPANISH_GUATEMALA: 4106,
    SPANISH_HONDURAS: 18442,
    SPANISH_MEXICO: 2058,
    SPANISH_NICARAGUA: 19466,
    SPANISH_PANAMA: 6154,
    SPANISH_PARAGUAY: 15370,
    SPANISH_PERU: 10250,
    SPANISH_PUERTO_RICO: 20490,
    SPANISH_TRADITIONAL_SORT: 1034,
    SPANISH_INTERNATIONAL_SORT: 3082,
    SPANISH_URUGUAY: 14346,
    SPANISH_VENEZUELA: 8202,
    SWAHILI: 1089,
    SWEDISH: 1053,
    SWEDISH_FINLAND: 2077,
    SYRIAC: 1114,
    TAMIL: 1097,
    TATAR: 1092,
    BENGALI_INDIA: 1093,
    TELUGU: 1098,
    THAI_THAILAND: 1054,
    TURKISH: 1055,
    TAJIK_CYRILLIC: 1064,
    TURKMEN: 1090,
    UKRAINIAN: 1058,
    URDU: 1056,
    UZBEK_CYRILIC: 2115,
    UZBEK_LATIN: 1091,
    VIETNAMESE: 1066,
    CTC_SIMPLIFIED: 50001,
    CTC_TRADITIONAL: 50002,
    MALTESE: 1082,
    BURMESE: 1109,
    KHMER: 1107,
    KARAKALPAK_LATIN: 10012,
    MALAYALAM: 1100,
    NEPALI: 1121,
    ORIYA: 1096,
    URDU_DETECTION: 10560,
};
export var CustomizationImage = {
    RFID_PROCESSING_SCREEN_FAILURE_IMAGE: "rfidProcessingScreenFailureImage",
    RFID_ENABLE_NFC_IMAGE: "rfidEnableNfcImage",
};
export var DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
};
export var eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,
    RPRM_LIGHT_IR: 16777216,
    RPRM_Light_IR_TOP: 8,
    RPRM_Light_IR_SIDE: 16,
    RPRM_Light_IR_Full: (8 | 16),
    RPRM_LIGHT_OVD: 67108864,
    RPRM_LIGHT_WHITE_FULL_OVD: (6 | 67108864),
};
export var eMrzDetectionModes = {
    DEFAULT: 0,
    RESIZE_BINARIZE_WINDOW: 1,
    BLUR_BEFORE_BINARIZATION: 2,
};
export var Enum = {
    FontStyle: FontStyle,
    eRPRM_Authenticity: eRPRM_Authenticity,
    CustomizationColor: CustomizationColor,
    eRFID_ErrorCodes: eRFID_ErrorCodes,
    eLDS_ParsingErrorCodes: eLDS_ParsingErrorCodes,
    eRFID_CertificateType: eRFID_CertificateType,
    RGLMeasureSystem: RGLMeasureSystem,
    eRPRM_ResultType: eRPRM_ResultType,
    FrameShapeType: FrameShapeType,
    eRFID_BaudRate: eRFID_BaudRate,
    LineCap: LineCap,
    eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
    DocReaderAction: DocReaderAction,
    eProcessGLCommands: eProcessGLCommands,
    eRFIDReadingBufferSize: eRFIDReadingBufferSize,
    PKDResourceType: PKDResourceType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    DocumentReaderErrorCodes: DocumentReaderErrorCodes,
    ScenarioIdentifier: ScenarioIdentifier,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_NotificationCodes: eRFID_NotificationCodes,
    CameraPosition: CameraPosition,
    eRFID_Password_Type: eRFID_Password_Type,
    ViewContentMode: ViewContentMode,
    BarcodeResult: BarcodeResult,
    eRFID_Application_Type: eRFID_Application_Type,
    eSignManagementAction: eSignManagementAction,
    eCheckDiagnose: eCheckDiagnose,
    RFIDDelegate: RFIDDelegate,
    TextProcessing: TextProcessing,
    LogLevel: LogLevel,
    AnimationImage: AnimationImage,
    ProcessingFinishedStatus: ProcessingFinishedStatus,
    DocFormat: DocFormat,
    eLDS_ParsingNotificationCodes: eLDS_ParsingNotificationCodes,
    eImageQualityCheckType: eImageQualityCheckType,
    MRZFormat: MRZFormat,
    BarcodeType: BarcodeType,
    eRPRM_SecurityFeatureType: eRPRM_SecurityFeatureType,
    OnlineMode: OnlineMode,
    eRFID_SDK_ProfilerType: eRFID_SDK_ProfilerType,
    diDocType: diDocType,
    ButtonTag: ButtonTag,
    HoloAnimationType: HoloAnimationType,
    eRequestCommand: eRequestCommand,
    CustomizationFont: CustomizationFont,
    ImageFormat: ImageFormat,
    eGraphicFieldType: eGraphicFieldType,
    RegDeviceConfigType: RegDeviceConfigType,
    CaptureSessionPreset: CaptureSessionPreset,
    CameraMode: CameraMode,
    CaptureMode: CaptureMode,
    eCheckResult: eCheckResult,
    eRFID_TerminalType: eRFID_TerminalType,
    eRFID_DataFile_Type: eRFID_DataFile_Type,
    eVisualFieldType: eVisualFieldType,
    DocReaderOrientation: DocReaderOrientation,
    LCID: LCID,
    CustomizationImage: CustomizationImage,
    DocReaderFrame: DocReaderFrame,
    eRPRM_Lights: eRPRM_Lights,
    eMrzDetectionModes: eMrzDetectionModes,
};
var DocumentReader = /** @class */ (function (_super) {
    __extends(DocumentReader, _super);
    function DocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReader.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReader.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReader.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.getTag = function () { return cordova(this, "getTag", {}, arguments); };
    DocumentReader.prototype.setTag = function (tag) { return cordova(this, "setTag", {}, arguments); };
    DocumentReader.prototype.getTenant = function () { return cordova(this, "getTenant", {}, arguments); };
    DocumentReader.prototype.setTenant = function (tenant) { return cordova(this, "setTenant", {}, arguments); };
    DocumentReader.prototype.getEnv = function () { return cordova(this, "getEnv", {}, arguments); };
    DocumentReader.prototype.setEnv = function (env) { return cordova(this, "setEnv", {}, arguments); };
    DocumentReader.prototype.getLocale = function () { return cordova(this, "getLocale", {}, arguments); };
    DocumentReader.prototype.setLocale = function (locale) { return cordova(this, "setLocale", {}, arguments); };
    DocumentReader.prototype.getFunctionality = function () { return cordova(this, "getFunctionality", {}, arguments); };
    DocumentReader.prototype.setFunctionality = function (functionality) { return cordova(this, "setFunctionality", {}, arguments); };
    DocumentReader.prototype.getProcessParams = function () { return cordova(this, "getProcessParams", {}, arguments); };
    DocumentReader.prototype.setProcessParams = function (processParams) { return cordova(this, "setProcessParams", {}, arguments); };
    DocumentReader.prototype.getCustomization = function () { return cordova(this, "getCustomization", {}, arguments); };
    DocumentReader.prototype.setCustomization = function (customization) { return cordova(this, "setCustomization", {}, arguments); };
    DocumentReader.prototype.getRfidScenario = function () { return cordova(this, "getRfidScenario", {}, arguments); };
    DocumentReader.prototype.setRfidScenario = function (rfidScenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReader.prototype.resetConfiguration = function () { return cordova(this, "resetConfiguration", {}, arguments); };
    DocumentReader.prototype.initializeReader = function (config) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReader.prototype.initializeReaderWithBleDeviceConfig = function (config) { return cordova(this, "initializeReaderWithBleDeviceConfig", {}, arguments); };
    DocumentReader.prototype.deinitializeReader = function () { return cordova(this, "deinitializeReader", {}, arguments); };
    DocumentReader.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReader.prototype.removeDatabase = function () { return cordova(this, "removeDatabase", {}, arguments); };
    DocumentReader.prototype.runAutoUpdate = function (databaseId) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReader.prototype.cancelDBUpdate = function () { return cordova(this, "cancelDBUpdate", {}, arguments); };
    DocumentReader.prototype.checkDatabaseUpdate = function (databaseId) { return cordova(this, "checkDatabaseUpdate", {}, arguments); };
    DocumentReader.prototype.scan = function (config) { return cordova(this, "scan", { "observable": true }, arguments); };
    DocumentReader.prototype.startScanner = function (config) { return cordova(this, "startScanner", { "observable": true }, arguments); };
    DocumentReader.prototype.recognize = function (config) { return cordova(this, "recognize", { "observable": true }, arguments); };
    DocumentReader.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReader.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReader.prototype.startRFIDReader = function (requestPACertificates, requestTACertificates, requestTASignature) { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReader.prototype.readRFID = function (requestPACertificates, requestTACertificates, requestTASignature) { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReader.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReader.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReader.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReader.prototype.provideTASignature = function (signature) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReader.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReader.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReader.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReader.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReader.prototype.connectBluetoothDevice = function (btDeviceName) { return cordova(this, "connectBluetoothDevice", {}, arguments); };
    DocumentReader.prototype.btDeviceRequestFlashing = function () { return cordova(this, "btDeviceRequestFlashing", {}, arguments); };
    DocumentReader.prototype.btDeviceRequestFlashingFullIR = function () { return cordova(this, "btDeviceRequestFlashingFullIR", {}, arguments); };
    DocumentReader.prototype.btDeviceRequestTurnOffAll = function () { return cordova(this, "btDeviceRequestTurnOffAll", {}, arguments); };
    DocumentReader.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    DocumentReader.prototype.getLicense = function () { return cordova(this, "getLicense", {}, arguments); };
    DocumentReader.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReader.prototype.getIsRFIDAvailableForUse = function () { return cordova(this, "getIsRFIDAvailableForUse", {}, arguments); };
    DocumentReader.prototype.isAuthenticatorRFIDAvailableForUse = function () { return cordova(this, "isAuthenticatorRFIDAvailableForUse", {}, arguments); };
    DocumentReader.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReader.prototype.getDocReaderVersion = function () { return cordova(this, "getDocReaderVersion", {}, arguments); };
    DocumentReader.prototype.getDocReaderDocumentsDatabase = function () { return cordova(this, "getDocReaderDocumentsDatabase", {}, arguments); };
    DocumentReader.prototype.finalizePackage = function () { return cordova(this, "finalizePackage", {}, arguments); };
    DocumentReader.prototype.endBackendTransaction = function () { return cordova(this, "endBackendTransaction", {}, arguments); };
    DocumentReader.prototype.getTranslation = function (className, value) { return cordova(this, "getTranslation", {}, arguments); };
    DocumentReader.prototype.textFieldValueByType = function (results, fieldType) { return cordova(this, "textFieldValueByType", {}, arguments); };
    DocumentReader.prototype.textFieldValueByTypeLcid = function (results, fieldType, lcid) { return cordova(this, "textFieldValueByTypeLcid", {}, arguments); };
    DocumentReader.prototype.textFieldValueByTypeSource = function (results, fieldType, source) { return cordova(this, "textFieldValueByTypeSource", {}, arguments); };
    DocumentReader.prototype.textFieldValueByTypeLcidSource = function (results, fieldType, lcid, source) { return cordova(this, "textFieldValueByTypeLcidSource", {}, arguments); };
    DocumentReader.prototype.textFieldValueByTypeSourceOriginal = function (results, fieldType, source, original) { return cordova(this, "textFieldValueByTypeSourceOriginal", {}, arguments); };
    DocumentReader.prototype.textFieldValueByTypeLcidSourceOriginal = function (results, fieldType, lcid, source, original) { return cordova(this, "textFieldValueByTypeLcidSourceOriginal", {}, arguments); };
    DocumentReader.prototype.textFieldByType = function (results, fieldType) { return cordova(this, "textFieldByType", {}, arguments); };
    DocumentReader.prototype.textFieldByTypeLcid = function (results, fieldType, lcid) { return cordova(this, "textFieldByTypeLcid", {}, arguments); };
    DocumentReader.prototype.graphicFieldByTypeSource = function (results, fieldType, source) { return cordova(this, "graphicFieldByTypeSource", {}, arguments); };
    DocumentReader.prototype.graphicFieldByTypeSourcePageIndex = function (results, fieldType, source, pageIndex) { return cordova(this, "graphicFieldByTypeSourcePageIndex", {}, arguments); };
    DocumentReader.prototype.graphicFieldByTypeSourcePageIndexLight = function (results, fieldType, source, pageIndex, light) { return cordova(this, "graphicFieldByTypeSourcePageIndexLight", {}, arguments); };
    DocumentReader.prototype.graphicFieldImageByType = function (results, fieldType) { return cordova(this, "graphicFieldImageByType", {}, arguments); };
    DocumentReader.prototype.graphicFieldImageByTypeSource = function (results, fieldType, source) { return cordova(this, "graphicFieldImageByTypeSource", {}, arguments); };
    DocumentReader.prototype.graphicFieldImageByTypeSourcePageIndex = function (results, fieldType, source, pageIndex) { return cordova(this, "graphicFieldImageByTypeSourcePageIndex", {}, arguments); };
    DocumentReader.prototype.graphicFieldImageByTypeSourcePageIndexLight = function (results, fieldType, source, pageIndex, light) { return cordova(this, "graphicFieldImageByTypeSourcePageIndexLight", {}, arguments); };
    DocumentReader.prototype.containers = function (results, resultType) { return cordova(this, "containers", {}, arguments); };
    DocumentReader.prototype.encryptedContainers = function (results) { return cordova(this, "encryptedContainers", {}, arguments); };
    DocumentReader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentReader, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DocumentReader.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentReader });
    DocumentReader.pluginName = "DocumentReader";
    DocumentReader.plugin = "cordova-plugin-document-reader-api";
    DocumentReader.pluginRef = "DocumentReaderPlugin.DocumentReader";
    DocumentReader.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReader.platforms = ["Android", "iOS"];
    DocumentReader = __decorate([], DocumentReader);
    return DocumentReader;
}(AwesomeCordovaNativePlugin));
export { DocumentReader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DocumentReader, decorators: [{
            type: Injectable
        }], propDecorators: { getDocumentReaderIsReady: [], getDocumentReaderStatus: [], getRfidSessionStatus: [], setRfidSessionStatus: [], getTag: [], setTag: [], getTenant: [], setTenant: [], getEnv: [], setEnv: [], getLocale: [], setLocale: [], getFunctionality: [], setFunctionality: [], getProcessParams: [], setProcessParams: [], getCustomization: [], setCustomization: [], getRfidScenario: [], setRfidScenario: [], resetConfiguration: [], initializeReader: [], initializeReaderWithBleDeviceConfig: [], deinitializeReader: [], prepareDatabase: [], removeDatabase: [], runAutoUpdate: [], cancelDBUpdate: [], checkDatabaseUpdate: [], scan: [], startScanner: [], recognize: [], startNewPage: [], stopScanner: [], startRFIDReader: [], readRFID: [], stopRFIDReader: [], providePACertificates: [], provideTACertificates: [], provideTASignature: [], setTCCParams: [], addPKDCertificates: [], clearPKDCertificates: [], startNewSession: [], connectBluetoothDevice: [], btDeviceRequestFlashing: [], btDeviceRequestFlashingFullIR: [], btDeviceRequestTurnOffAll: [], setLocalizationDictionary: [], getLicense: [], getAvailableScenarios: [], getIsRFIDAvailableForUse: [], isAuthenticatorRFIDAvailableForUse: [], isAuthenticatorAvailableForUse: [], getDocReaderVersion: [], getDocReaderDocumentsDatabase: [], finalizePackage: [], endBackendTransaction: [], getTranslation: [], textFieldValueByType: [], textFieldValueByTypeLcid: [], textFieldValueByTypeSource: [], textFieldValueByTypeLcidSource: [], textFieldValueByTypeSourceOriginal: [], textFieldValueByTypeLcidSourceOriginal: [], textFieldByType: [], textFieldByTypeLcid: [], graphicFieldByTypeSource: [], graphicFieldByTypeSourcePageIndex: [], graphicFieldByTypeSourcePageIndexLight: [], graphicFieldImageByType: [], graphicFieldImageByTypeSource: [], graphicFieldImageByTypeSourcePageIndex: [], graphicFieldImageByTypeSourcePageIndexLight: [], containers: [], encryptedContainers: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0lBaUJ2QiwrQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsZ0NBQWdDLEdBQUcsVUFBVSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7UUFDeEYsTUFBTSxDQUFDLGlDQUFpQyxHQUFHLFVBQVUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1FBQzFGLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtR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LEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWhDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7d0JBcGxGTDs7Ozs7O0lBOGxGVyxxQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFBO1FBRS9CLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FB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QUFFLEdBQUc7SUFDekIseUJBQXlCLEVBQUUsR0FBRztJQUM5QixlQUFlLEVBQUUsR0FBRztJQUNwQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsd0JBQXdCLEVBQUUsR0FBRztJQUM3QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsd0JBQXdCLEVBQUUsR0FBRztJQUM3QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsVUFBVSxFQUFFLEdBQUc7SUFDZixRQUFRLEVBQUUsR0FBRztJQUNiLE9BQU8sRUFBRSxHQUFHO0lBQ1osc0JBQXNCLEVBQUUsR0FBRztJQUMzQix3Q0FBd0MsRUFBRSxHQUFHO0lBQzdDLHFDQUFxQyxFQUFFLEdBQUc7SUFDMUMsd0JBQXdCLEVBQUUsR0FBRztJQUM3QiwyQkFBMkIsRUFBRSxHQUFHO0lBQ2hDLDhCQUE4QixFQUFFLEdBQUc7SUFDbkMsK0JBQStCLEVBQUUsR0FBRztJQUNwQyxNQUFNLEVBQUUsR0FBRztJQUNYLDJCQUEyQixFQUFFLEdBQUc7SUFDaEMsY0FBYyxFQUFFLEdBQUc7SUFDbkIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0Isc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIscUJBQXFCLEVBQUUsR0FBRztJQUMxQix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0Isc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxH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QixnQkFBZ0IsTUFTaEIsZ0JBQWdCLE1BUWhCLGdCQUFnQixNQVNoQixnQkFBZ0IsTUFRaEIsZUFBZSxNQVNmLGVBQWUsTUFRZixrQkFBa0IsTUFTbEIsZ0JBQWdCLE1BU2hCLG1DQUFtQyxNQVFuQyxrQkFBa0IsTUFTbEIsZUFBZSxNQVFmLGNBQWMsTUFTZCxhQUFhLE1BUWIsY0FBYyxNQVNkLG1CQUFtQixNQVNuQixJQUFJLE1BU0osWUFBWSxNQVNaLFNBQVMsTUFRVCxZQUFZLE1BUVosV0FBVyxNQVdYLGVBQWUsTUFXZixRQUFRLE1BUVIsY0FBYyxNQVNkLHFCQUFxQixNQVNyQixxQkFBcUIsTUFTckIsa0JBQWtCLE1BU2xCLFlBQVksTUFTWixrQkFBa0IsTUFRbEIsb0JBQW9CLE1BUXBCLGVBQWUsTUFTZixzQkFBc0IsTUFRdEIsdUJBQXVCLE1BUXZCLDZCQUE2QixNQVE3Qix5QkFBeUIsTUFTekIseUJBQXlCLE1BUXpCLFVBQVUsTUFRVixxQkFBcUIsTUFRckIsd0JBQXdCLE1BUXhCLGtDQUFrQyxNQVFsQyw4QkFBOEIsTUFROUIsbUJBQW1CLE1BUW5CLDZCQUE2QixNQVE3QixlQUFlLE1BUWYscUJBQXFCLE1BVXJCLGNBQWMsTUFJZCxvQkFBb0IsTUFHcEIsd0JBQXdCLE1BR3hCLDBCQUEwQixNQUcxQiw4QkFBOEIsTUFHOUIsa0NBQWtDLE1BR2xDLHNDQUFzQyxNQUd0QyxlQUFlLE1BR2YsbUJBQW1CLE1BR25CLHdCQUF3QixNQUd4QixpQ0FBaUMsTUFHakMsc0NBQXNDLE1BR3RDLHVCQUF1QixNQUd2Qiw2QkFBNkIsTUFHN0Isc0NBQXNDLE1BR3RDLDJDQUEyQyxNQUczQyxVQUFVLE1BR1YsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBtdWx0aVBhZ2VPZmY/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZU9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgdXZUb3JjaD86IGJvb2xlYW5cbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lT3JpZW50YXRpb24gPSBqc29uT2JqZWN0W1wiZnJhbWVPcmllbnRhdGlvblwiXVxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsaWdodD86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIG9yaWdpbmFsUGFnZUluZGV4PzogbnVtYmVyXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgbGlnaHROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBmaWVsZFJlY3Q/OiBSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5saWdodCA9IGpzb25PYmplY3RbXCJsaWdodFwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxQYWdlSW5kZXggPSBqc29uT2JqZWN0W1wib3JpZ2luYWxQYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZFJlY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsdWUge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFN5bWJvbHM/OiBEb2N1bWVudFJlYWRlclN5bWJvbFtdXG4gICAgcmZpZE9yaWdpbj86IERvY3VtZW50UmVhZGVyUmZpZE9yaWdpblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWx1ZVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclN5bWJvbC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxTeW1ib2xzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9yaWdpbmFsU3ltYm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJmaWRPcmlnaW4gPSBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4uZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRPcmlnaW5cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIGdldFZhbHVlPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVxuICAgIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuICAgIGNvbXBhcmlzb25MaXN0PzogRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uW11cbiAgICB2YWxpZGl0eUxpc3Q/OiBEb2N1bWVudFJlYWRlclZhbGlkaXR5W11cbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmxjaWROYW1lID0ganNvbk9iamVjdFtcImxjaWROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZ2V0VmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJnZXRWYWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25MaXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudmFsaWRpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25TdGF0dXMgPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHlTdGF0dXMgPSBqc29uT2JqZWN0W1widmFsaWRpdHlTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcbiAgICBhdmFpbGFibGVTb3VyY2VMaXN0PzogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlW11cbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hdmFpbGFibGVTb3VyY2VMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlIHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb29yZGluYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50UG9zaXRpb24ge1xuICAgIGRvY0Zvcm1hdD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgZHBpPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgaW52ZXJzZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgICBvYmpBcmVhPzogbnVtYmVyXG4gICAgb2JqSW50QW5nbGVEZXY/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgICBhbmdsZT86IG51bWJlclxuICAgIGNlbnRlcj86IENvb3JkaW5hdGVcbiAgICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gICAgcmlnaHRUb3A/OiBDb29yZGluYXRlXG4gICAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgYm91bmRSZWN0cz86IFJlY3RbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuYm91bmRSZWN0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ib3VuZFJlY3RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBpc0RlcHJlY2F0ZWQ/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIElDQU9Db2RlPzogc3RyaW5nXG4gICAgZERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgZFllYXI/OiBzdHJpbmdcbiAgICBkQ291bnRyeU5hbWU/OiBzdHJpbmdcbiAgICBGRFNJRD86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0LmlzRGVwcmVjYXRlZCA9IGpzb25PYmplY3RbXCJpc0RlcHJlY2F0ZWRcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgbm90aWZpY2F0aW9uQ29kZT86IG51bWJlclxuICAgIGRhdGFGaWxlVHlwZT86IG51bWJlclxuICAgIHByb2dyZXNzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9uQ29kZSA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhRmlsZVR5cGUgPSBqc29uT2JqZWN0W1wiZGF0YUZpbGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9ncmVzcyA9IGpzb25PYmplY3RbXCJwcm9ncmVzc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB7XG4gICAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICAgICAgcmVzdWx0LmFjdGl2ZU9wdGlvbklkeCA9IGpzb25PYmplY3RbXCJhY3RpdmVPcHRpb25JZHhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHtcbiAgICBzZWN1cml0eU9iamVjdD86IENlcnRpZmljYXRlRGF0YVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0ID0gQ2VydGlmaWNhdGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVcblxuICAgICAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXBwbGljYXRpb25cblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbklEID0ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uSURcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC51bmljb2RlVmVyc2lvbiA9IGpzb25PYmplY3RbXCJ1bmljb2RlVmVyc2lvblwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmlsZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWxlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JtYXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aG9yaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEF0dHJpYnV0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICB0eXBlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RCZWZvcmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QmVmb3JlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBvcmlnaW4/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBWYWx1ZVxuICAgIHZhbGlkaXR5PzogVmFsaWRpdHlcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBzdWJqZWN0PzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlQ2hhaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICAgICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0ganNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdCA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25lckluZm8ge1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIGRhdGFUb0hhc2g/OiBzdHJpbmdcbiAgICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzZXJpYWxOdW1iZXI/OiBWYWx1ZVxuICAgIHNpZ25hdHVyZT86IFZhbHVlXG4gICAgc3ViamVjdEtleUlkZW50aWZpZXI/OiBWYWx1ZVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lZEF0dHJpYnV0ZXM/OiBFeHRlbnNpb25bXVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpZ25lckluZm9cblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YVRvSGFzaCA9IGpzb25PYmplY3RbXCJkYXRhVG9IYXNoXCJdXG4gICAgICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdKVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdFxuXG4gICAgICAgIHJlc3VsdC5maWxlUmVmZXJlbmNlID0ganNvbk9iamVjdFtcImZpbGVSZWZlcmVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQub2JqZWN0VHlwZSA9IGpzb25PYmplY3RbXCJvYmplY3RUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENhcmRQcm9wZXJ0aWVzXG5cbiAgICAgICAgcmVzdWx0LmFUUUEgPSBqc29uT2JqZWN0W1wiYVRRQVwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVTID0ganNvbk9iamVjdFtcImJpdFJhdGVTXCJdXG4gICAgICAgIHJlc3VsdC5jaGlwVHlwZUEgPSBqc29uT2JqZWN0W1wiY2hpcFR5cGVBXCJdXG4gICAgICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkVHlwZSA9IGpzb25PYmplY3RbXCJyZmlkVHlwZVwiXVxuICAgICAgICByZXN1bHQuc0FLID0ganNvbk9iamVjdFtcInNBS1wiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnRNaWZhcmUgPSBqc29uT2JqZWN0W1wic3VwcG9ydE1pZmFyZVwiXVxuICAgICAgICByZXN1bHQuYVRRQiA9IGpzb25PYmplY3RbXCJhVFFCXCJdXG4gICAgICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTEgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUxXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTIgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUyXCJdXG4gICAgICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gICAgdG90YWxCeXRlc1JlY2VpdmVkPzogbnVtYmVyXG4gICAgdG90YWxCeXRlc1NlbnQ/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBleHRMZVN1cHBvcnQ/OiBudW1iZXJcbiAgICBwcm9jZXNzVGltZT86IG51bWJlclxuICAgIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuICAgIGRhdGFHcm91cHM/OiBudW1iZXJbXVxuICAgIGRhdGFGaWVsZHM/OiBEYXRhRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1JlY2VpdmVkID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNSZWNlaXZlZFwiXVxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1NlbnQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1NlbnRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmV4dExlU3VwcG9ydCA9IGpzb25PYmplY3RbXCJleHRMZVN1cHBvcnRcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NUaW1lID0ganNvbk9iamVjdFtcInByb2Nlc3NUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICAgICAgcmVzdWx0LmFjY2Vzc0NvbnRyb2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwbGljYXRpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VjdXJpdHlPYmplY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhR3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzLnB1c2goanNvbk9iamVjdFtcImRhdGFHcm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRhdGFGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFGaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhRmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERhdGFGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGF0YUZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhRmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGQge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGF0YUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0YUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUERGNDE3SW5mb1xuXG4gICAgICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICAgICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgICAgICByZXN1bHQucm93cyA9IGpzb25PYmplY3RbXCJyb3dzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBSZWd1bGFFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IFJlZ3VsYUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICBub3RpZmljYXRpb24/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ3VsYUV4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVndWxhRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVndWxhRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBLRENlcnRpZmljYXRlIHtcbiAgICBiaW5hcnlEYXRhPzogc3RyaW5nXG4gICAgcmVzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgcHJpdmF0ZUtleT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQS0RDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRjY1BhcmFtcyB7XG4gICAgc2VydmljZVVybFRBPzogc3RyaW5nXG4gICAgc2VydmljZVVybFBBPzogc3RyaW5nXG4gICAgcGZ4Q2VydFVybD86IHN0cmluZ1xuICAgIHBmeFBhc3NQaHJhc2U/OiBzdHJpbmdcbiAgICBwZnhDZXJ0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRjY1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRjY1BhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsVEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFRBXCJdXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsUEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFBBXCJdXG4gICAgICAgIHJlc3VsdC5wZnhDZXJ0VXJsID0ganNvbk9iamVjdFtcInBmeENlcnRVcmxcIl1cbiAgICAgICAgcmVzdWx0LnBmeFBhc3NQaHJhc2UgPSBqc29uT2JqZWN0W1wicGZ4UGFzc1BocmFzZVwiXVxuICAgICAgICByZXN1bHQucGZ4Q2VydCA9IGpzb25PYmplY3RbXCJwZnhDZXJ0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgZGlzYWJsZUZyYW1lU2hpZnRJUj86IGJvb2xlYW5cbiAgICBkb0ZsaXBZQXhpcz86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dFBhcmFtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VJbnB1dFBhcmFtXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVGcmFtZVNoaWZ0SVIgPSBqc29uT2JqZWN0W1wiZGlzYWJsZUZyYW1lU2hpZnRJUlwiXVxuICAgICAgICByZXN1bHQuZG9GbGlwWUF4aXMgPSBqc29uT2JqZWN0W1wiZG9GbGlwWUF4aXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBzdHJpbmdcbiAgICBhdHRyaWJ1dGVzPzogUEFBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQVJlc291cmNlc0lzc3VlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBUmVzb3VyY2VzSXNzdWVyXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0ganNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXVxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQUF0dHJpYnV0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVEFDaGFsbGVuZ2Uge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBhdXhQQ0Q/OiBzdHJpbmdcbiAgICBjaGFsbGVuZ2VQSUNDPzogc3RyaW5nXG4gICAgaGFzaFBLPzogc3RyaW5nXG4gICAgaWRQSUNDPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRBQ2hhbGxlbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEFDaGFsbGVuZ2VcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5hdXhQQ0QgPSBqc29uT2JqZWN0W1wiYXV4UENEXCJdXG4gICAgICAgIHJlc3VsdC5jaGFsbGVuZ2VQSUNDID0ganNvbk9iamVjdFtcImNoYWxsZW5nZVBJQ0NcIl1cbiAgICAgICAgcmVzdWx0Lmhhc2hQSyA9IGpzb25PYmplY3RbXCJoYXNoUEtcIl1cbiAgICAgICAgcmVzdWx0LmlkUElDQyA9IGpzb25PYmplY3RbXCJpZFBJQ0NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgb3B0aWNhbD86IG51bWJlclxuICAgIGRldGFpbHNPcHRpY2FsPzogRGV0YWlsc09wdGljYWxcbiAgICByZmlkPzogbnVtYmVyXG4gICAgZGV0YWlsc1JGSUQ/OiBEZXRhaWxzUkZJRFxuICAgIHBvcnRyYWl0PzogbnVtYmVyXG4gICAgc3RvcExpc3Q/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQub3B0aWNhbCA9IGpzb25PYmplY3RbXCJvcHRpY2FsXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzT3B0aWNhbCA9IERldGFpbHNPcHRpY2FsLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzT3B0aWNhbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWQgPSBqc29uT2JqZWN0W1wicmZpZFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc1JGSUQgPSBEZXRhaWxzUkZJRC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc1JGSURcIl0pXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuc3RvcExpc3QgPSBqc29uT2JqZWN0W1wic3RvcExpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc09wdGljYWwge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBtcno/OiBudW1iZXJcbiAgICB0ZXh0PzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIHNlY3VyaXR5PzogbnVtYmVyXG4gICAgaW1hZ2VRQT86IG51bWJlclxuICAgIGV4cGlyeT86IG51bWJlclxuICAgIHZkcz86IG51bWJlclxuICAgIHBhZ2VzQ291bnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc09wdGljYWwgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzT3B0aWNhbFxuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm1yeiA9IGpzb25PYmplY3RbXCJtcnpcIl1cbiAgICAgICAgcmVzdWx0LnRleHQgPSBqc29uT2JqZWN0W1widGV4dFwiXVxuICAgICAgICByZXN1bHQuZG9jVHlwZSA9IGpzb25PYmplY3RbXCJkb2NUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zZWN1cml0eSA9IGpzb25PYmplY3RbXCJzZWN1cml0eVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRQSA9IGpzb25PYmplY3RbXCJpbWFnZVFBXCJdXG4gICAgICAgIHJlc3VsdC5leHBpcnkgPSBqc29uT2JqZWN0W1wiZXhwaXJ5XCJdXG4gICAgICAgIHJlc3VsdC52ZHMgPSBqc29uT2JqZWN0W1widmRzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlc0NvdW50ID0ganNvbk9iamVjdFtcInBhZ2VzQ291bnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc1JGSUQge1xuICAgIHBhPzogbnVtYmVyXG4gICAgY2E/OiBudW1iZXJcbiAgICBhYT86IG51bWJlclxuICAgIHRhPzogbnVtYmVyXG4gICAgYmFjPzogbnVtYmVyXG4gICAgcGFjZT86IG51bWJlclxuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc1JGSUQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzUkZJRFxuXG4gICAgICAgIHJlc3VsdC5wYSA9IGpzb25PYmplY3RbXCJwYVwiXVxuICAgICAgICByZXN1bHQuY2EgPSBqc29uT2JqZWN0W1wiY2FcIl1cbiAgICAgICAgcmVzdWx0LmFhID0ganNvbk9iamVjdFtcImFhXCJdXG4gICAgICAgIHJlc3VsdC50YSA9IGpzb25PYmplY3RbXCJ0YVwiXVxuICAgICAgICByZXN1bHQuYmFjID0ganNvbk9iamVjdFtcImJhY1wiXVxuICAgICAgICByZXN1bHQucGFjZSA9IGpzb25PYmplY3RbXCJwYWNlXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVkRTTkNEYXRhIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIGlzc3VpbmdDb3VudHJ5Pzogc3RyaW5nXG4gICAgbWVzc2FnZT86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZT86IEJ5dGVzRGF0YVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVkRTTkNEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVkRTTkNEYXRhXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nQ291bnRyeSA9IGpzb25PYmplY3RbXCJpc3N1aW5nQ291bnRyeVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlc0RhdGEge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJ5dGVzRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJ5dGVzRGF0YVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUlucHV0RGF0YSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgbGlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBpbWdCeXRlcz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXREYXRhXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5pbWdCeXRlcyA9IGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSB7XG4gICAgZGF0YWJhc2VJRD86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBkYXRlPzogc3RyaW5nXG4gICAgZGF0YWJhc2VEZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGNvdW50cmllc051bWJlcj86IG51bWJlclxuICAgIGRvY3VtZW50c051bWJlcj86IG51bWJlclxuICAgIHNpemU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZUlEID0ganNvbk9iamVjdFtcImRhdGFiYXNlSURcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZGF0ZSA9IGpzb25PYmplY3RbXCJkYXRlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZURlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRhdGFiYXNlRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmNvdW50cmllc051bWJlciA9IGpzb25PYmplY3RbXCJjb3VudHJpZXNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50c051bWJlciA9IGpzb25PYmplY3RbXCJkb2N1bWVudHNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBqc29uT2JqZWN0W1wic2l6ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24ge1xuICAgIHNvdXJjZVR5cGVMZWZ0PzogbnVtYmVyXG4gICAgc291cmNlVHlwZVJpZ2h0PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvblxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlTGVmdCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlTGVmdFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZVJpZ2h0ID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVSaWdodFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4ge1xuICAgIGRnPzogbnVtYmVyXG4gICAgZGdUYWc/OiBudW1iZXJcbiAgICBlbnRyeVZpZXc/OiBudW1iZXJcbiAgICB0YWdFbnRyeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgICAgICByZXN1bHQuZGcgPSBqc29uT2JqZWN0W1wiZGdcIl1cbiAgICAgICAgcmVzdWx0LmRnVGFnID0ganNvbk9iamVjdFtcImRnVGFnXCJdXG4gICAgICAgIHJlc3VsdC5lbnRyeVZpZXcgPSBqc29uT2JqZWN0W1wiZW50cnlWaWV3XCJdXG4gICAgICAgIHJlc3VsdC50YWdFbnRyeSA9IGpzb25PYmplY3RbXCJ0YWdFbnRyeVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2Uge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzb3VyY2U/OiBzdHJpbmdcbiAgICB2YWxpZGl0eVN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2VcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2UgPSBqc29uT2JqZWN0W1wic291cmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclN5bWJvbCB7XG4gICAgY29kZT86IG51bWJlclxuICAgIHJlY3Q/OiBSZWN0XG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJTeW1ib2wgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclN5bWJvbFxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LnJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWN0XCJdKVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT25saW5lUHJvY2Vzc2luZ0NvbmZpZyB7XG4gICAgbW9kZT86IG51bWJlclxuICAgIHVybD86IHN0cmluZ1xuICAgIHByb2Nlc3NQYXJhbXM/OiBQcm9jZXNzUGFyYW1zXG4gICAgaW1hZ2VGb3JtYXQ/OiBudW1iZXJcbiAgICBpbWFnZUNvbXByZXNzaW9uUXVhbGl0eT86IG51bWJlclxuICAgIHJlcXVlc3RIZWFkZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5tb2RlID0ganNvbk9iamVjdFtcIm1vZGVcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NQYXJhbXMgPSBQcm9jZXNzUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJwcm9jZXNzUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VGb3JtYXQgPSBqc29uT2JqZWN0W1wiaW1hZ2VGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlQ29tcHJlc3Npb25RdWFsaXR5ID0ganNvbk9iamVjdFtcImltYWdlQ29tcHJlc3Npb25RdWFsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5yZXF1ZXN0SGVhZGVycyA9IGpzb25PYmplY3RbXCJyZXF1ZXN0SGVhZGVyc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJDb25maWcge1xuICAgIGxpY2Vuc2U/OiBzdHJpbmdcbiAgICBjdXN0b21EYj86IHN0cmluZ1xuICAgIGRhdGFiYXNlUGF0aD86IHN0cmluZ1xuICAgIGxpY2Vuc2VVcGRhdGU/OiBib29sZWFuXG4gICAgbGljZW5zZVVwZGF0ZVRpbWVvdXQ/OiBudW1iZXJcbiAgICBkZWxheWVkTk5Mb2FkPzogYm9vbGVhblxuICAgIGJsYWNrTGlzdD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2UgPSBqc29uT2JqZWN0W1wibGljZW5zZVwiXVxuICAgICAgICByZXN1bHQuY3VzdG9tRGIgPSBqc29uT2JqZWN0W1wiY3VzdG9tRGJcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlUGF0aCA9IGpzb25PYmplY3RbXCJkYXRhYmFzZVBhdGhcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuICAgICAgICByZXN1bHQubGljZW5zZVVwZGF0ZVRpbWVvdXQgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LmRlbGF5ZWROTkxvYWQgPSBqc29uT2JqZWN0W1wiZGVsYXllZE5OTG9hZFwiXVxuICAgICAgICByZXN1bHQuYmxhY2tMaXN0ID0ganNvbk9iamVjdFtcImJsYWNrTGlzdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY2FubmVyQ29uZmlnIHtcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGxpdmVQb3J0cmFpdD86IHN0cmluZ1xuICAgIGV4dFBvcnRyYWl0Pzogc3RyaW5nXG4gICAgb25saW5lUHJvY2Vzc2luZ0NvbmZpZz86IE9ubGluZVByb2Nlc3NpbmdDb25maWdcbiAgICBjYW1lcmFJZD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTY2FubmVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2Nhbm5lckNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQubGl2ZVBvcnRyYWl0ID0ganNvbk9iamVjdFtcImxpdmVQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZXh0UG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZXh0UG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0Lm9ubGluZVByb2Nlc3NpbmdDb25maWcgPSBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJvbmxpbmVQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuY2FtZXJhSWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhSWRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb2duaXplQ29uZmlnIHtcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIG9ubGluZVByb2Nlc3NpbmdDb25maWc/OiBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnXG4gICAgb25lU2hvdElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGR0Yz86IHN0cmluZ1xuICAgIGxpdmVQb3J0cmFpdD86IHN0cmluZ1xuICAgIGV4dFBvcnRyYWl0Pzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgaW1hZ2VzPzogc3RyaW5nW11cbiAgICBpbWFnZUlucHV0RGF0YT86IEltYWdlSW5wdXREYXRhW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVjb2duaXplQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjb2duaXplQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVQcm9jZXNzaW5nQ29uZmlnID0gT25saW5lUHJvY2Vzc2luZ0NvbmZpZy5mcm9tSnNvbihqc29uT2JqZWN0W1wib25saW5lUHJvY2Vzc2luZ0NvbmZpZ1wiXSlcbiAgICAgICAgcmVzdWx0Lm9uZVNob3RJZGVudGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJvbmVTaG90SWRlbnRpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmR0YyA9IGpzb25PYmplY3RbXCJkdGNcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJsaXZlUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmV4dFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImV4dFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pbWFnZUlucHV0RGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VJbnB1dERhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZUlucHV0RGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VJbnB1dERhdGFcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VJbnB1dERhdGEucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpY2Vuc2Uge1xuICAgIGV4cGlyeURhdGU/OiBzdHJpbmdcbiAgICBjb3VudHJ5RmlsdGVyPzogc3RyaW5nW11cbiAgICBpc1JmaWRBdmFpbGFibGU/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpY2Vuc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaWNlbnNlXG5cbiAgICAgICAgcmVzdWx0LmV4cGlyeURhdGUgPSBqc29uT2JqZWN0W1wiZXhwaXJ5RGF0ZVwiXVxuICAgICAgICByZXN1bHQuY291bnRyeUZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY291bnRyeUZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNvdW50cnlGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY291bnRyeUZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJjb3VudHJ5RmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pc1JmaWRBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wiaXNSZmlkQXZhaWxhYmxlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY1JlYWRlclZlcnNpb24ge1xuICAgIGFwaT86IHN0cmluZ1xuICAgIGNvcmU/OiBzdHJpbmdcbiAgICBjb3JlTW9kZT86IHN0cmluZ1xuICAgIGRhdGFiYXNlPzogRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyVmVyc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY1JlYWRlclZlcnNpb25cblxuICAgICAgICByZXN1bHQuYXBpID0ganNvbk9iamVjdFtcImFwaVwiXVxuICAgICAgICByZXN1bHQuY29yZSA9IGpzb25PYmplY3RbXCJjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlTW9kZSA9IGpzb25PYmplY3RbXCJjb3JlTW9kZVwiXVxuICAgICAgICByZXN1bHQuZGF0YWJhc2UgPSBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGF0YWJhc2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uSW5mbyB7XG4gICAgdHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHNlc3Npb25Mb2dGb2xkZXI/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVHJhbnNhY3Rpb25JbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVHJhbnNhY3Rpb25JbmZvXG5cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuc2Vzc2lvbkxvZ0ZvbGRlciA9IGpzb25PYmplY3RbXCJzZXNzaW9uTG9nRm9sZGVyXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyUmVzdWx0cyB7XG4gICAgY2hpcFBhZ2U/OiBudW1iZXJcbiAgICBwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXM/OiBudW1iZXJcbiAgICBlbGFwc2VkVGltZT86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lUkZJRD86IG51bWJlclxuICAgIG1vcmVQYWdlc0F2YWlsYWJsZT86IG51bWJlclxuICAgIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgICB0ZXh0UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG4gICAgZG9jdW1lbnRQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgYmFyY29kZVBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBtcnpQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgaW1hZ2VRdWFsaXR5PzogSW1hZ2VRdWFsaXR5R3JvdXBbXVxuICAgIHJhd1Jlc3VsdD86IHN0cmluZ1xuICAgIHJmaWRTZXNzaW9uRGF0YT86IFJGSURTZXNzaW9uRGF0YVxuICAgIGF1dGhlbnRpY2l0eVJlc3VsdD86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG4gICAgYmFyY29kZVJlc3VsdD86IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdFxuICAgIGRvY3VtZW50VHlwZT86IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlW11cbiAgICBzdGF0dXM/OiBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXNcbiAgICB2ZHNuY0RhdGE/OiBWRFNOQ0RhdGFcbiAgICBkdGNEYXRhPzogc3RyaW5nXG4gICAgdHJhbnNhY3Rpb25JbmZvPzogVHJhbnNhY3Rpb25JbmZvXG5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICAgICAgcmVzdWx0LmNoaXBQYWdlID0ganNvbk9iamVjdFtcImNoaXBQYWdlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSBqc29uT2JqZWN0W1wicHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZSA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVwiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgICAgICByZXN1bHQubW9yZVBhZ2VzQXZhaWxhYmxlID0ganNvbk9iamVjdFtcIm1vcmVQYWdlc0F2YWlsYWJsZVwiXVxuICAgICAgICByZXN1bHQuZ3JhcGhpY1Jlc3VsdCA9IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ3JhcGhpY1Jlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LnRleHRSZXN1bHQgPSBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInRleHRSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubXJ6UG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1Jlc3VsdCA9IGpzb25PYmplY3RbXCJyYXdSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRTZXNzaW9uRGF0YSA9IFJGSURTZXNzaW9uRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFNlc3Npb25EYXRhXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImF1dGhlbnRpY2l0eVJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVSZXN1bHQgPSBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50VHlwZS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzXCJdKVxuICAgICAgICByZXN1bHQudmRzbmNEYXRhID0gVkRTTkNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2ZHNuY0RhdGFcIl0pXG4gICAgICAgIHJlc3VsdC5kdGNEYXRhID0ganNvbk9iamVjdFtcImR0Y0RhdGFcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSW5mbyA9IFRyYW5zYWN0aW9uSW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JbmZvXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFTaXplIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYW1lcmFTaXplIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FtZXJhU2l6ZVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbmFsaXR5IHtcbiAgICBwaWN0dXJlT25Cb3VuZHNSZWFkeT86IGJvb2xlYW5cbiAgICBzaG93VG9yY2hCdXR0b24/OiBib29sZWFuXG4gICAgc2hvd0Nsb3NlQnV0dG9uPzogYm9vbGVhblxuICAgIHZpZGVvQ2FwdHVyZU1vdGlvbkNvbnRyb2w/OiBib29sZWFuXG4gICAgc2hvd0NhcHR1cmVCdXR0b24/OiBib29sZWFuXG4gICAgc2hvd0NoYW5nZUZyYW1lQnV0dG9uPzogYm9vbGVhblxuICAgIHNob3dTa2lwTmV4dFBhZ2VCdXR0b24/OiBib29sZWFuXG4gICAgdXNlQXV0aGVudGljYXRvcj86IGJvb2xlYW5cbiAgICBza2lwRm9jdXNpbmdGcmFtZXM/OiBib29sZWFuXG4gICAgc2hvd0NhbWVyYVN3aXRjaEJ1dHRvbj86IGJvb2xlYW5cbiAgICBkaXNwbGF5TWV0YWRhdGE/OiBib29sZWFuXG4gICAgaXNab29tRW5hYmxlZD86IGJvb2xlYW5cbiAgICBpc0NhbWVyYVRvcmNoQ2hlY2tEaXNhYmxlZD86IGJvb2xlYW5cbiAgICByZWNvcmRTY2FubmluZ1Byb2Nlc3M/OiBib29sZWFuXG4gICAgbWFudWFsTXVsdGlwYWdlTW9kZT86IGJvb2xlYW5cbiAgICBzaW5nbGVSZXN1bHQ/OiBib29sZWFuXG4gICAgdG9yY2hUdXJuZWRPbj86IGJvb2xlYW5cbiAgICBwcmV2ZW50U2NyZWVuUmVjb3JkaW5nPzogYm9vbGVhblxuICAgIHNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tRGV0ZWN0PzogbnVtYmVyXG4gICAgc2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21TdGFydD86IG51bWJlclxuICAgIHJmaWRUaW1lb3V0PzogbnVtYmVyXG4gICAgZm9yY2VQYWdlc0NvdW50PzogbnVtYmVyXG4gICAgb3JpZW50YXRpb24/OiBudW1iZXJcbiAgICBjYXB0dXJlTW9kZT86IG51bWJlclxuICAgIGNhbWVyYU1vZGU/OiBudW1iZXJcbiAgICBjYW1lcmFQb3NpdGlvbklPUz86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lPzogc3RyaW5nXG4gICAgYnREZXZpY2VOYW1lPzogc3RyaW5nXG4gICAgem9vbUZhY3Rvcj86IG51bWJlclxuICAgIGV4cG9zdXJlPzogbnVtYmVyXG4gICAgdmlkZW9SZWNvcmRpbmdTaXplRG93bnNjYWxlRmFjdG9yPzogbnVtYmVyXG4gICAgZXhjbHVkZWRDYW1lcmEyTW9kZWxzPzogc3RyaW5nW11cbiAgICBjYW1lcmFTaXplPzogQ2FtZXJhU2l6ZVxuICAgIHZpZGVvU2Vzc2lvblByZXNldD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGdW5jdGlvbmFsaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRnVuY3Rpb25hbGl0eVxuXG4gICAgICAgIHJlc3VsdC5waWN0dXJlT25Cb3VuZHNSZWFkeSA9IGpzb25PYmplY3RbXCJwaWN0dXJlT25Cb3VuZHNSZWFkeVwiXVxuICAgICAgICByZXN1bHQuc2hvd1RvcmNoQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dUb3JjaEJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuc2hvd0Nsb3NlQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dDbG9zZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQudmlkZW9DYXB0dXJlTW90aW9uQ29udHJvbCA9IGpzb25PYmplY3RbXCJ2aWRlb0NhcHR1cmVNb3Rpb25Db250cm9sXCJdXG4gICAgICAgIHJlc3VsdC5zaG93Q2FwdHVyZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2FwdHVyZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuc2hvd0NoYW5nZUZyYW1lQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dDaGFuZ2VGcmFtZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuc2hvd1NraXBOZXh0UGFnZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93U2tpcE5leHRQYWdlQnV0dG9uXCJdXG4gICAgICAgIHJlc3VsdC51c2VBdXRoZW50aWNhdG9yID0ganNvbk9iamVjdFtcInVzZUF1dGhlbnRpY2F0b3JcIl1cbiAgICAgICAgcmVzdWx0LnNraXBGb2N1c2luZ0ZyYW1lcyA9IGpzb25PYmplY3RbXCJza2lwRm9jdXNpbmdGcmFtZXNcIl1cbiAgICAgICAgcmVzdWx0LnNob3dDYW1lcmFTd2l0Y2hCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd0NhbWVyYVN3aXRjaEJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuZGlzcGxheU1ldGFkYXRhID0ganNvbk9iamVjdFtcImRpc3BsYXlNZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuaXNab29tRW5hYmxlZCA9IGpzb25PYmplY3RbXCJpc1pvb21FbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC5pc0NhbWVyYVRvcmNoQ2hlY2tEaXNhYmxlZCA9IGpzb25PYmplY3RbXCJpc0NhbWVyYVRvcmNoQ2hlY2tEaXNhYmxlZFwiXVxuICAgICAgICByZXN1bHQucmVjb3JkU2Nhbm5pbmdQcm9jZXNzID0ganNvbk9iamVjdFtcInJlY29yZFNjYW5uaW5nUHJvY2Vzc1wiXVxuICAgICAgICByZXN1bHQubWFudWFsTXVsdGlwYWdlTW9kZSA9IGpzb25PYmplY3RbXCJtYW51YWxNdWx0aXBhZ2VNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5zaW5nbGVSZXN1bHQgPSBqc29uT2JqZWN0W1wic2luZ2xlUmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC50b3JjaFR1cm5lZE9uID0ganNvbk9iamVjdFtcInRvcmNoVHVybmVkT25cIl1cbiAgICAgICAgcmVzdWx0LnByZXZlbnRTY3JlZW5SZWNvcmRpbmcgPSBqc29uT2JqZWN0W1wicHJldmVudFNjcmVlblJlY29yZGluZ1wiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3QgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3RcIl1cbiAgICAgICAgcmVzdWx0LnNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnQgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21TdGFydFwiXVxuICAgICAgICByZXN1bHQucmZpZFRpbWVvdXQgPSBqc29uT2JqZWN0W1wicmZpZFRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LmZvcmNlUGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJmb3JjZVBhZ2VzQ291bnRcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcIm9yaWVudGF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlTW9kZSA9IGpzb25PYmplY3RbXCJjYXB0dXJlTW9kZVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhTW9kZSA9IGpzb25PYmplY3RbXCJjYW1lcmFNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWUgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVcIl1cbiAgICAgICAgcmVzdWx0LmJ0RGV2aWNlTmFtZSA9IGpzb25PYmplY3RbXCJidERldmljZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lnpvb21GYWN0b3IgPSBqc29uT2JqZWN0W1wiem9vbUZhY3RvclwiXVxuICAgICAgICByZXN1bHQuZXhwb3N1cmUgPSBqc29uT2JqZWN0W1wiZXhwb3N1cmVcIl1cbiAgICAgICAgcmVzdWx0LnZpZGVvUmVjb3JkaW5nU2l6ZURvd25zY2FsZUZhY3RvciA9IGpzb25PYmplY3RbXCJ2aWRlb1JlY29yZGluZ1NpemVEb3duc2NhbGVGYWN0b3JcIl1cbiAgICAgICAgcmVzdWx0LmV4Y2x1ZGVkQ2FtZXJhMk1vZGVscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXhjbHVkZWRDYW1lcmEyTW9kZWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXhjbHVkZWRDYW1lcmEyTW9kZWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmV4Y2x1ZGVkQ2FtZXJhMk1vZGVscy5wdXNoKGpzb25PYmplY3RbXCJleGNsdWRlZENhbWVyYTJNb2RlbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVNpemUgPSBDYW1lcmFTaXplLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYW1lcmFTaXplXCJdKVxuICAgICAgICByZXN1bHQudmlkZW9TZXNzaW9uUHJlc2V0ID0ganNvbk9iamVjdFtcInZpZGVvU2Vzc2lvblByZXNldFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbGFyZXNDaGVja1BhcmFtcyB7XG4gICAgaW1nTWFyZ2luUGFydD86IG51bWJlclxuICAgIG1heEdsYXJpbmdQYXJ0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEdsYXJlc0NoZWNrUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgR2xhcmVzQ2hlY2tQYXJhbXNcblxuICAgICAgICByZXN1bHQuaW1nTWFyZ2luUGFydCA9IGpzb25PYmplY3RbXCJpbWdNYXJnaW5QYXJ0XCJdXG4gICAgICAgIHJlc3VsdC5tYXhHbGFyaW5nUGFydCA9IGpzb25PYmplY3RbXCJtYXhHbGFyaW5nUGFydFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVFBIHtcbiAgICBkcGlUaHJlc2hvbGQ/OiBudW1iZXJcbiAgICBhbmdsZVRocmVzaG9sZD86IG51bWJlclxuICAgIGZvY3VzQ2hlY2s/OiBib29sZWFuXG4gICAgZ2xhcmVzQ2hlY2s/OiBib29sZWFuXG4gICAgZ2xhcmVzQ2hlY2tQYXJhbXM/OiBHbGFyZXNDaGVja1BhcmFtc1xuICAgIGNvbG9ybmVzc0NoZWNrPzogYm9vbGVhblxuICAgIHNjcmVlbkNhcHR1cmU/OiBib29sZWFuXG4gICAgZXhwZWN0ZWRQYXNzPzogbnVtYmVyW11cbiAgICBkb2N1bWVudFBvc2l0aW9uSW5kZW50PzogbnVtYmVyXG4gICAgYnJpZ2h0bmVzc1RocmVzaG9sZD86IG51bWJlclxuICAgIG9jY2x1c2lvbkNoZWNrPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVFBIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRQVxuXG4gICAgICAgIHJlc3VsdC5kcGlUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiZHBpVGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZVRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJhbmdsZVRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuZm9jdXNDaGVjayA9IGpzb25PYmplY3RbXCJmb2N1c0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5nbGFyZXNDaGVjayA9IGpzb25PYmplY3RbXCJnbGFyZXNDaGVja1wiXVxuICAgICAgICByZXN1bHQuZ2xhcmVzQ2hlY2tQYXJhbXMgPSBHbGFyZXNDaGVja1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ2xhcmVzQ2hlY2tQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jb2xvcm5lc3NDaGVjayA9IGpzb25PYmplY3RbXCJjb2xvcm5lc3NDaGVja1wiXVxuICAgICAgICByZXN1bHQuc2NyZWVuQ2FwdHVyZSA9IGpzb25PYmplY3RbXCJzY3JlZW5DYXB0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MucHVzaChqc29uT2JqZWN0W1wiZXhwZWN0ZWRQYXNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uSW5kZW50ID0ganNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25JbmRlbnRcIl1cbiAgICAgICAgcmVzdWx0LmJyaWdodG5lc3NUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiYnJpZ2h0bmVzc1RocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQub2NjbHVzaW9uQ2hlY2sgPSBqc29uT2JqZWN0W1wib2NjbHVzaW9uQ2hlY2tcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFBhcmFtcyB7XG4gICAgcGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlcz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJGSURQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LnBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXMucHVzaChqc29uT2JqZWN0W1wicGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQXBpU2VhcmNoUGFyYW1zIHtcbiAgICBsaW1pdD86IG51bWJlclxuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIGdyb3VwSWRzPzogc3RyaW5nW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUFwaVNlYXJjaFBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VBcGlTZWFyY2hQYXJhbXNcblxuICAgICAgICByZXN1bHQubGltaXQgPSBqc29uT2JqZWN0W1wibGltaXRcIl1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwSWRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cElkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3VwSWRzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3VwSWRzLnB1c2goanNvbk9iamVjdFtcImdyb3VwSWRzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VBcGlQYXJhbXMge1xuICAgIHVybD86IHN0cmluZ1xuICAgIG1vZGU/OiBzdHJpbmdcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBzZWFyY2hQYXJhbXM/OiBGYWNlQXBpU2VhcmNoUGFyYW1zXG4gICAgc2VydmljZVRpbWVvdXQ/OiBudW1iZXJcbiAgICBwcm94eT86IHN0cmluZ1xuICAgIHByb3h5UGFzc3dvcmQ/OiBzdHJpbmdcbiAgICBwcm94eVR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUFwaVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VBcGlQYXJhbXNcblxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQubW9kZSA9IGpzb25PYmplY3RbXCJtb2RlXCJdXG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5zZWFyY2hQYXJhbXMgPSBGYWNlQXBpU2VhcmNoUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWFyY2hQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVGltZW91dCA9IGpzb25PYmplY3RbXCJzZXJ2aWNlVGltZW91dFwiXVxuICAgICAgICByZXN1bHQucHJveHkgPSBqc29uT2JqZWN0W1wicHJveHlcIl1cbiAgICAgICAgcmVzdWx0LnByb3h5UGFzc3dvcmQgPSBqc29uT2JqZWN0W1wicHJveHlQYXNzd29yZFwiXVxuICAgICAgICByZXN1bHQucHJveHlUeXBlID0ganNvbk9iamVjdFtcInByb3h5VHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kUHJvY2Vzc2luZ0NvbmZpZyB7XG4gICAgdXJsPzogc3RyaW5nXG4gICAgaHR0cEhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgcmZpZFNlcnZlclNpZGVDaGlwVmVyaWZpY2F0aW9uPzogYm9vbGVhblxuICAgIHRpbWVvdXRDb25uZWN0aW9uPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQmFja2VuZFByb2Nlc3NpbmdDb25maWdcblxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuaHR0cEhlYWRlcnMgPSBqc29uT2JqZWN0W1wiaHR0cEhlYWRlcnNcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRTZXJ2ZXJTaWRlQ2hpcFZlcmlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJyZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXRDb25uZWN0aW9uID0ganNvbk9iamVjdFtcInRpbWVvdXRDb25uZWN0aW9uXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUGFyYW1zIHtcbiAgICBjaGVja09WST86IGJvb2xlYW5cbiAgICBjaGVja01MST86IGJvb2xlYW5cbiAgICBjaGVja0hvbG8/OiBib29sZWFuXG4gICAgY2hlY2tFRD86IGJvb2xlYW5cbiAgICBjaGVja0JsYWNrQW5kV2hpdGVDb3B5PzogYm9vbGVhblxuICAgIGNoZWNrRHluYXByaW50PzogYm9vbGVhblxuICAgIGNoZWNrR2VvbWV0cnk/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NQYXJhbXNcblxuICAgICAgICByZXN1bHQuY2hlY2tPVkkgPSBqc29uT2JqZWN0W1wiY2hlY2tPVklcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrTUxJID0ganNvbk9iamVjdFtcImNoZWNrTUxJXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0hvbG8gPSBqc29uT2JqZWN0W1wiY2hlY2tIb2xvXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0VEID0ganNvbk9iamVjdFtcImNoZWNrRURcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrQmxhY2tBbmRXaGl0ZUNvcHkgPSBqc29uT2JqZWN0W1wiY2hlY2tCbGFja0FuZFdoaXRlQ29weVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tEeW5hcHJpbnQgPSBqc29uT2JqZWN0W1wiY2hlY2tEeW5hcHJpbnRcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrR2VvbWV0cnkgPSBqc29uT2JqZWN0W1wiY2hlY2tHZW9tZXRyeVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNpdHlQYXJhbXMge1xuICAgIHVzZUxpdmVuZXNzQ2hlY2s/OiBib29sZWFuXG4gICAgbGl2ZW5lc3NQYXJhbXM/OiBMaXZlbmVzc1BhcmFtc1xuICAgIGNoZWNrVVZMdW1pbmlzY2VuY2U/OiBib29sZWFuXG4gICAgY2hlY2tJUkI5MDA/OiBib29sZWFuXG4gICAgY2hlY2tJbWFnZVBhdHRlcm5zPzogYm9vbGVhblxuICAgIGNoZWNrRmliZXJzPzogYm9vbGVhblxuICAgIGNoZWNrRXh0TVJaPzogYm9vbGVhblxuICAgIGNoZWNrRXh0T0NSPzogYm9vbGVhblxuICAgIGNoZWNrQXhpYWw/OiBib29sZWFuXG4gICAgY2hlY2tCYXJjb2RlRm9ybWF0PzogYm9vbGVhblxuICAgIGNoZWNrSVJWaXNpYmlsaXR5PzogYm9vbGVhblxuICAgIGNoZWNrSVBJPzogYm9vbGVhblxuICAgIGNoZWNrUGhvdG9FbWJlZGRpbmc/OiBib29sZWFuXG4gICAgY2hlY2tQaG90b0NvbXBhcmlzb24/OiBib29sZWFuXG4gICAgY2hlY2tMZXR0ZXJTY3JlZW4/OiBib29sZWFuXG4gICAgY2hlY2tTZWN1cml0eVRleHQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF1dGhlbnRpY2l0eVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhlbnRpY2l0eVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC51c2VMaXZlbmVzc0NoZWNrID0ganNvbk9iamVjdFtcInVzZUxpdmVuZXNzQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzUGFyYW1zID0gTGl2ZW5lc3NQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcImxpdmVuZXNzUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuY2hlY2tVVkx1bWluaXNjZW5jZSA9IGpzb25PYmplY3RbXCJjaGVja1VWTHVtaW5pc2NlbmNlXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0lSQjkwMCA9IGpzb25PYmplY3RbXCJjaGVja0lSQjkwMFwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJbWFnZVBhdHRlcm5zID0ganNvbk9iamVjdFtcImNoZWNrSW1hZ2VQYXR0ZXJuc1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tGaWJlcnMgPSBqc29uT2JqZWN0W1wiY2hlY2tGaWJlcnNcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrRXh0TVJaID0ganNvbk9iamVjdFtcImNoZWNrRXh0TVJaXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0V4dE9DUiA9IGpzb25PYmplY3RbXCJjaGVja0V4dE9DUlwiXVxuICAgICAgICByZXN1bHQuY2hlY2tBeGlhbCA9IGpzb25PYmplY3RbXCJjaGVja0F4aWFsXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0JhcmNvZGVGb3JtYXQgPSBqc29uT2JqZWN0W1wiY2hlY2tCYXJjb2RlRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0lSVmlzaWJpbGl0eSA9IGpzb25PYmplY3RbXCJjaGVja0lSVmlzaWJpbGl0eVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJUEkgPSBqc29uT2JqZWN0W1wiY2hlY2tJUElcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrUGhvdG9FbWJlZGRpbmcgPSBqc29uT2JqZWN0W1wiY2hlY2tQaG90b0VtYmVkZGluZ1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tQaG90b0NvbXBhcmlzb24gPSBqc29uT2JqZWN0W1wiY2hlY2tQaG90b0NvbXBhcmlzb25cIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrTGV0dGVyU2NyZWVuID0ganNvbk9iamVjdFtcImNoZWNrTGV0dGVyU2NyZWVuXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1NlY3VyaXR5VGV4dCA9IGpzb25PYmplY3RbXCJjaGVja1NlY3VyaXR5VGV4dFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9jZXNzUGFyYW1zIHtcbiAgICBtdWx0aXBhZ2VQcm9jZXNzaW5nPzogYm9vbGVhblxuICAgIGxvZ3M/OiBib29sZWFuXG4gICAgZGVidWdTYXZlSW1hZ2VzPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZUxvZ3M/OiBib29sZWFuXG4gICAgcmV0dXJuVW5jcm9wcGVkSW1hZ2U/OiBib29sZWFuXG4gICAgdXZUb3JjaEVuYWJsZWQ/OiBib29sZWFuXG4gICAgZGVidWdTYXZlQ3JvcHBlZEltYWdlcz86IGJvb2xlYW5cbiAgICBkaXNhYmxlRm9jdXNpbmdDaGVjaz86IGJvb2xlYW5cbiAgICBkZWJ1Z1NhdmVSRklEU2Vzc2lvbj86IGJvb2xlYW5cbiAgICBkb3VibGVQYWdlU3ByZWFkPzogYm9vbGVhblxuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG4gICAgaW50ZWdyYWxJbWFnZT86IGJvb2xlYW5cbiAgICByZXR1cm5Dcm9wcGVkQmFyY29kZT86IGJvb2xlYW5cbiAgICBjaGVja1JlcXVpcmVkVGV4dEZpZWxkcz86IGJvb2xlYW5cbiAgICBkZXBlcnNvbmFsaXplTG9nPzogYm9vbGVhblxuICAgIGdlbmVyYXRlRG91YmxlUGFnZVNwcmVhZEltYWdlPzogYm9vbGVhblxuICAgIGFscmVhZHlDcm9wcGVkPzogYm9vbGVhblxuICAgIG1hdGNoVGV4dEZpZWxkTWFzaz86IGJvb2xlYW5cbiAgICB1cGRhdGVPQ1JWYWxpZGl0eUJ5R2xhcmU/OiBib29sZWFuXG4gICAgbm9HcmFwaGljcz86IGJvb2xlYW5cbiAgICBtdWx0aURvY09uSW1hZ2U/OiBib29sZWFuXG4gICAgZm9yY2VSZWFkTXJ6QmVmb3JlTG9jYXRlPzogYm9vbGVhblxuICAgIHBhcnNlQmFyY29kZXM/OiBib29sZWFuXG4gICAgc2hvdWxkUmV0dXJuUGFja2FnZUZvclJlcHJvY2Vzcz86IGJvb2xlYW5cbiAgICBkaXNhYmxlUGVyZm9yYXRpb25PQ1I/OiBib29sZWFuXG4gICAgcmVzcGVjdEltYWdlUXVhbGl0eT86IGJvb2xlYW5cbiAgICBzdHJpY3RJbWFnZVF1YWxpdHk/OiBib29sZWFuXG4gICAgc3BsaXROYW1lcz86IGJvb2xlYW5cbiAgICB1c2VGYWNlQXBpPzogYm9vbGVhblxuICAgIHVzZUF1dGhlbnRpY2l0eUNoZWNrPzogYm9vbGVhblxuICAgIGNoZWNrSG9sb2dyYW0/OiBib29sZWFuXG4gICAgZ2VuZXJhdGVOdW1lcmljQ29kZXM/OiBib29sZWFuXG4gICAgc3RyaWN0QmFyY29kZURpZ2l0YWxTaWduYXR1cmVDaGVjaz86IGJvb2xlYW5cbiAgICBzZWxlY3RMb25nZXN0TmFtZXM/OiBib29sZWFuXG4gICAgZ2VuZXJhdGVEVENWQz86IGJvb2xlYW5cbiAgICBzdHJpY3RETENhdGVnb3J5RXhwaXJ5PzogYm9vbGVhblxuICAgIGdlbmVyYXRlQWxwaGEyQ29kZXM/OiBib29sZWFuXG4gICAgZGlzYWJsZUF1dGhSZXNvbHV0aW9uRmlsdGVyPzogYm9vbGVhblxuICAgIHN0cmljdFNlY3VyaXR5Q2hlY2tzPzogYm9vbGVhblxuICAgIHJldHVyblRyYW5zbGl0ZXJhdGVkRmllbGRzPzogYm9vbGVhblxuICAgIGJhcmNvZGVQYXJzZXJUeXBlPzogbnVtYmVyXG4gICAgcGVyc3BlY3RpdmVBbmdsZT86IG51bWJlclxuICAgIG1pbkRQST86IG51bWJlclxuICAgIGltYWdlRHBpT3V0TWF4PzogbnVtYmVyXG4gICAgZm9yY2VEb2NGb3JtYXQ/OiBudW1iZXJcbiAgICBzaGlmdEV4cGlyeURhdGU/OiBudW1iZXJcbiAgICBtaW5pbWFsSG9sZGVyQWdlPzogbnVtYmVyXG4gICAgaW1hZ2VPdXRwdXRNYXhIZWlnaHQ/OiBudW1iZXJcbiAgICBpbWFnZU91dHB1dE1heFdpZHRoPzogbnVtYmVyXG4gICAgcHJvY2Vzc0F1dGg/OiBudW1iZXJcbiAgICBjb252ZXJ0Q2FzZT86IG51bWJlclxuICAgIGxvZ0xldmVsPzogc3RyaW5nXG4gICAgbXJ6RGV0ZWN0TW9kZT86IG51bWJlclxuICAgIG1lYXN1cmVTeXN0ZW0/OiBudW1iZXJcbiAgICBmb3JjZURvY0lEPzogbnVtYmVyXG4gICAgcGRmUGFnZXNMaW1pdD86IG51bWJlclxuICAgIGRhdGVGb3JtYXQ/OiBzdHJpbmdcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGNhcHR1cmVCdXR0b25TY2VuYXJpbz86IHN0cmluZ1xuICAgIHRpbWVvdXQ/OiBudW1iZXJcbiAgICB0aW1lb3V0RnJvbUZpcnN0RGV0ZWN0PzogbnVtYmVyXG4gICAgdGltZW91dEZyb21GaXJzdERvY1R5cGU/OiBudW1iZXJcbiAgICBkb2N1bWVudEFyZWFNaW4/OiBudW1iZXJcbiAgICB0aW1lb3V0TGl2ZW5lc3M/OiBudW1iZXJcbiAgICBkb2N1bWVudElETGlzdD86IG51bWJlcltdXG4gICAgYmFyY29kZVR5cGVzPzogbnVtYmVyW11cbiAgICBmaWVsZFR5cGVzRmlsdGVyPzogbnVtYmVyW11cbiAgICByZXN1bHRUeXBlT3V0cHV0PzogbnVtYmVyW11cbiAgICBkb2N1bWVudEdyb3VwRmlsdGVyPzogbnVtYmVyW11cbiAgICBsY2lkSWdub3JlRmlsdGVyPzogbnVtYmVyW11cbiAgICBsY2lkRmlsdGVyPzogbnVtYmVyW11cbiAgICBtcnpGb3JtYXRzRmlsdGVyPzogc3RyaW5nW11cbiAgICBpbWFnZVFBPzogSW1hZ2VRQVxuICAgIHJmaWRQYXJhbXM/OiBSRklEUGFyYW1zXG4gICAgZmFjZUFwaVBhcmFtcz86IEZhY2VBcGlQYXJhbXNcbiAgICBiYWNrZW5kUHJvY2Vzc2luZ0NvbmZpZz86IEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXG4gICAgYXV0aGVudGljaXR5UGFyYW1zPzogQXV0aGVudGljaXR5UGFyYW1zXG4gICAgY3VzdG9tUGFyYW1zPzogUmVjb3JkPHN0cmluZywgYW55PlxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQcm9jZXNzUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUHJvY2Vzc1BhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VQcm9jZXNzaW5nID0ganNvbk9iamVjdFtcIm11bHRpcGFnZVByb2Nlc3NpbmdcIl1cbiAgICAgICAgcmVzdWx0LmxvZ3MgPSBqc29uT2JqZWN0W1wibG9nc1wiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlSW1hZ2VzID0ganNvbk9iamVjdFtcImRlYnVnU2F2ZUltYWdlc1wiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlTG9ncyA9IGpzb25PYmplY3RbXCJkZWJ1Z1NhdmVMb2dzXCJdXG4gICAgICAgIHJlc3VsdC5yZXR1cm5VbmNyb3BwZWRJbWFnZSA9IGpzb25PYmplY3RbXCJyZXR1cm5VbmNyb3BwZWRJbWFnZVwiXVxuICAgICAgICByZXN1bHQudXZUb3JjaEVuYWJsZWQgPSBqc29uT2JqZWN0W1widXZUb3JjaEVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LmRlYnVnU2F2ZUNyb3BwZWRJbWFnZXMgPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlQ3JvcHBlZEltYWdlc1wiXVxuICAgICAgICByZXN1bHQuZGlzYWJsZUZvY3VzaW5nQ2hlY2sgPSBqc29uT2JqZWN0W1wiZGlzYWJsZUZvY3VzaW5nQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmRlYnVnU2F2ZVJGSURTZXNzaW9uID0ganNvbk9iamVjdFtcImRlYnVnU2F2ZVJGSURTZXNzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5kb3VibGVQYWdlU3ByZWFkID0ganNvbk9iamVjdFtcImRvdWJsZVBhZ2VTcHJlYWRcIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbENyb3AgPSBqc29uT2JqZWN0W1wibWFudWFsQ3JvcFwiXVxuICAgICAgICByZXN1bHQuaW50ZWdyYWxJbWFnZSA9IGpzb25PYmplY3RbXCJpbnRlZ3JhbEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yZXR1cm5Dcm9wcGVkQmFyY29kZSA9IGpzb25PYmplY3RbXCJyZXR1cm5Dcm9wcGVkQmFyY29kZVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tSZXF1aXJlZFRleHRGaWVsZHMgPSBqc29uT2JqZWN0W1wiY2hlY2tSZXF1aXJlZFRleHRGaWVsZHNcIl1cbiAgICAgICAgcmVzdWx0LmRlcGVyc29uYWxpemVMb2cgPSBqc29uT2JqZWN0W1wiZGVwZXJzb25hbGl6ZUxvZ1wiXVxuICAgICAgICByZXN1bHQuZ2VuZXJhdGVEb3VibGVQYWdlU3ByZWFkSW1hZ2UgPSBqc29uT2JqZWN0W1wiZ2VuZXJhdGVEb3VibGVQYWdlU3ByZWFkSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmFscmVhZHlDcm9wcGVkID0ganNvbk9iamVjdFtcImFscmVhZHlDcm9wcGVkXCJdXG4gICAgICAgIHJlc3VsdC5tYXRjaFRleHRGaWVsZE1hc2sgPSBqc29uT2JqZWN0W1wibWF0Y2hUZXh0RmllbGRNYXNrXCJdXG4gICAgICAgIHJlc3VsdC51cGRhdGVPQ1JWYWxpZGl0eUJ5R2xhcmUgPSBqc29uT2JqZWN0W1widXBkYXRlT0NSVmFsaWRpdHlCeUdsYXJlXCJdXG4gICAgICAgIHJlc3VsdC5ub0dyYXBoaWNzID0ganNvbk9iamVjdFtcIm5vR3JhcGhpY3NcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpRG9jT25JbWFnZSA9IGpzb25PYmplY3RbXCJtdWx0aURvY09uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmZvcmNlUmVhZE1yekJlZm9yZUxvY2F0ZSA9IGpzb25PYmplY3RbXCJmb3JjZVJlYWRNcnpCZWZvcmVMb2NhdGVcIl1cbiAgICAgICAgcmVzdWx0LnBhcnNlQmFyY29kZXMgPSBqc29uT2JqZWN0W1wicGFyc2VCYXJjb2Rlc1wiXVxuICAgICAgICByZXN1bHQuc2hvdWxkUmV0dXJuUGFja2FnZUZvclJlcHJvY2VzcyA9IGpzb25PYmplY3RbXCJzaG91bGRSZXR1cm5QYWNrYWdlRm9yUmVwcm9jZXNzXCJdXG4gICAgICAgIHJlc3VsdC5kaXNhYmxlUGVyZm9yYXRpb25PQ1IgPSBqc29uT2JqZWN0W1wiZGlzYWJsZVBlcmZvcmF0aW9uT0NSXCJdXG4gICAgICAgIHJlc3VsdC5yZXNwZWN0SW1hZ2VRdWFsaXR5ID0ganNvbk9iamVjdFtcInJlc3BlY3RJbWFnZVF1YWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnN0cmljdEltYWdlUXVhbGl0eSA9IGpzb25PYmplY3RbXCJzdHJpY3RJbWFnZVF1YWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnNwbGl0TmFtZXMgPSBqc29uT2JqZWN0W1wic3BsaXROYW1lc1wiXVxuICAgICAgICByZXN1bHQudXNlRmFjZUFwaSA9IGpzb25PYmplY3RbXCJ1c2VGYWNlQXBpXCJdXG4gICAgICAgIHJlc3VsdC51c2VBdXRoZW50aWNpdHlDaGVjayA9IGpzb25PYmplY3RbXCJ1c2VBdXRoZW50aWNpdHlDaGVja1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tIb2xvZ3JhbSA9IGpzb25PYmplY3RbXCJjaGVja0hvbG9ncmFtXCJdXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZU51bWVyaWNDb2RlcyA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZU51bWVyaWNDb2Rlc1wiXVxuICAgICAgICByZXN1bHQuc3RyaWN0QmFyY29kZURpZ2l0YWxTaWduYXR1cmVDaGVjayA9IGpzb25PYmplY3RbXCJzdHJpY3RCYXJjb2RlRGlnaXRhbFNpZ25hdHVyZUNoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5zZWxlY3RMb25nZXN0TmFtZXMgPSBqc29uT2JqZWN0W1wic2VsZWN0TG9uZ2VzdE5hbWVzXCJdXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZURUQ1ZDID0ganNvbk9iamVjdFtcImdlbmVyYXRlRFRDVkNcIl1cbiAgICAgICAgcmVzdWx0LnN0cmljdERMQ2F0ZWdvcnlFeHBpcnkgPSBqc29uT2JqZWN0W1wic3RyaWN0RExDYXRlZ29yeUV4cGlyeVwiXVxuICAgICAgICByZXN1bHQuZ2VuZXJhdGVBbHBoYTJDb2RlcyA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZUFscGhhMkNvZGVzXCJdXG4gICAgICAgIHJlc3VsdC5kaXNhYmxlQXV0aFJlc29sdXRpb25GaWx0ZXIgPSBqc29uT2JqZWN0W1wiZGlzYWJsZUF1dGhSZXNvbHV0aW9uRmlsdGVyXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RTZWN1cml0eUNoZWNrcyA9IGpzb25PYmplY3RbXCJzdHJpY3RTZWN1cml0eUNoZWNrc1wiXVxuICAgICAgICByZXN1bHQucmV0dXJuVHJhbnNsaXRlcmF0ZWRGaWVsZHMgPSBqc29uT2JqZWN0W1wicmV0dXJuVHJhbnNsaXRlcmF0ZWRGaWVsZHNcIl1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQYXJzZXJUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVQYXJzZXJUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZUFuZ2xlID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0Lm1pbkRQSSA9IGpzb25PYmplY3RbXCJtaW5EUElcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlRHBpT3V0TWF4ID0ganNvbk9iamVjdFtcImltYWdlRHBpT3V0TWF4XCJdXG4gICAgICAgIHJlc3VsdC5mb3JjZURvY0Zvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQuc2hpZnRFeHBpcnlEYXRlID0ganNvbk9iamVjdFtcInNoaWZ0RXhwaXJ5RGF0ZVwiXVxuICAgICAgICByZXN1bHQubWluaW1hbEhvbGRlckFnZSA9IGpzb25PYmplY3RbXCJtaW5pbWFsSG9sZGVyQWdlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZU91dHB1dE1heEhlaWdodCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heEhlaWdodFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VPdXRwdXRNYXhXaWR0aCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heFdpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzQXV0aCA9IGpzb25PYmplY3RbXCJwcm9jZXNzQXV0aFwiXVxuICAgICAgICByZXN1bHQuY29udmVydENhc2UgPSBqc29uT2JqZWN0W1wiY29udmVydENhc2VcIl1cbiAgICAgICAgcmVzdWx0LmxvZ0xldmVsID0ganNvbk9iamVjdFtcImxvZ0xldmVsXCJdXG4gICAgICAgIHJlc3VsdC5tcnpEZXRlY3RNb2RlID0ganNvbk9iamVjdFtcIm1yekRldGVjdE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lYXN1cmVTeXN0ZW0gPSBqc29uT2JqZWN0W1wibWVhc3VyZVN5c3RlbVwiXVxuICAgICAgICByZXN1bHQuZm9yY2VEb2NJRCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0lEXCJdXG4gICAgICAgIHJlc3VsdC5wZGZQYWdlc0xpbWl0ID0ganNvbk9iamVjdFtcInBkZlBhZ2VzTGltaXRcIl1cbiAgICAgICAgcmVzdWx0LmRhdGVGb3JtYXQgPSBqc29uT2JqZWN0W1wiZGF0ZUZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmNhcHR1cmVCdXR0b25TY2VuYXJpbyA9IGpzb25PYmplY3RbXCJjYXB0dXJlQnV0dG9uU2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXQgPSBqc29uT2JqZWN0W1widGltZW91dFwiXVxuICAgICAgICByZXN1bHQudGltZW91dEZyb21GaXJzdERldGVjdCA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RGV0ZWN0XCJdXG4gICAgICAgIHJlc3VsdC50aW1lb3V0RnJvbUZpcnN0RG9jVHlwZSA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRBcmVhTWluID0ganNvbk9iamVjdFtcImRvY3VtZW50QXJlYU1pblwiXVxuICAgICAgICByZXN1bHQudGltZW91dExpdmVuZXNzID0ganNvbk9iamVjdFtcInRpbWVvdXRMaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50SURMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QucHVzaChqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcy5wdXNoKGpzb25PYmplY3RbXCJiYXJjb2RlVHlwZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkVHlwZXNGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZFR5cGVzRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wiZmllbGRUeXBlc0ZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0VHlwZU91dHB1dFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdFR5cGVPdXRwdXRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dC5wdXNoKGpzb25PYmplY3RbXCJyZXN1bHRUeXBlT3V0cHV0XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudEdyb3VwRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRHcm91cEZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyLnB1c2goanNvbk9iamVjdFtcImRvY3VtZW50R3JvdXBGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxjaWRJZ25vcmVGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsY2lkSWdub3JlRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wibGNpZElnbm9yZUZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGNpZEZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGNpZEZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxjaWRGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGNpZEZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJsY2lkRmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpGb3JtYXRzRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6Rm9ybWF0c0ZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyLnB1c2goanNvbk9iamVjdFtcIm1yekZvcm1hdHNGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBJbWFnZVFBLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVFBXCJdKVxuICAgICAgICByZXN1bHQucmZpZFBhcmFtcyA9IFJGSURQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlQXBpUGFyYW1zID0gRmFjZUFwaVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZUFwaVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnID0gQmFja2VuZFByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcImJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UGFyYW1zID0gQXV0aGVudGljaXR5UGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jdXN0b21QYXJhbXMgPSBqc29uT2JqZWN0W1wiY3VzdG9tUGFyYW1zXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvbnQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBzaXplPzogbnVtYmVyXG4gICAgc3R5bGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRm9udCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvbnRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cbiAgICAgICAgcmVzdWx0LnN0eWxlID0ganNvbk9iamVjdFtcInN0eWxlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Db2xvcnMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyPzogbnVtYmVyXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuTG9hZGluZ0Jhcj86IG51bWJlclxuICAgIHJmaWRFbmFibGVOZmNUaXRsZVRleHQ/OiBudW1iZXJcbiAgICByZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0PzogbnVtYmVyXG4gICAgcmZpZEVuYWJsZU5mY0J1dHRvblRleHQ/OiBudW1iZXJcbiAgICByZmlkRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uQ29sb3JzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ3VzdG9taXphdGlvbkNvbG9yc1xuXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxCYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXIgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhclwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkxvYWRpbmdCYXIgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Mb2FkaW5nQmFyXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjVGl0bGVUZXh0ID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHQgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiXVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY0J1dHRvblRleHQgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNCdXR0b25CYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNCdXR0b25CYWNrZ3JvdW5kXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Gb250cyB7XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWw/OiBGb250XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsPzogRm9udFxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWw/OiBGb250XG4gICAgcmZpZEVuYWJsZU5mY1RpdGxlVGV4dD86IEZvbnRcbiAgICByZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0PzogRm9udFxuICAgIHJmaWRFbmFibGVOZmNCdXR0b25UZXh0PzogRm9udFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uRm9udHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uRm9udHNcblxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWwgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWwgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsXCJdKVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY1RpdGxlVGV4dCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNCdXR0b25UZXh0ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25JbWFnZXMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlPzogc3RyaW5nXG4gICAgcmZpZEVuYWJsZU5mY0ltYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25JbWFnZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uSW1hZ2VzXG5cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjSW1hZ2UgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0ltYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb24ge1xuICAgIHNob3dTdGF0dXNNZXNzYWdlcz86IGJvb2xlYW5cbiAgICBzaG93UmVzdWx0U3RhdHVzTWVzc2FnZXM/OiBib29sZWFuXG4gICAgc2hvd0hlbHBBbmltYXRpb24/OiBib29sZWFuXG4gICAgc2hvd05leHRQYWdlQW5pbWF0aW9uPzogYm9vbGVhblxuICAgIHNob3dCYWNrZ3JvdW5kTWFzaz86IGJvb2xlYW5cbiAgICBjYW1lcmFGcmFtZUJvcmRlcldpZHRoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVMaW5lTGVuZ3RoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVPZmZzZXRXaWR0aD86IG51bWJlclxuICAgIG5leHRQYWdlQW5pbWF0aW9uU3RhcnREZWxheT86IG51bWJlclxuICAgIG5leHRQYWdlQW5pbWF0aW9uRW5kRGVsYXk/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZVNoYXBlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IHN0cmluZ1xuICAgIHJlc3VsdFN0YXR1cz86IHN0cmluZ1xuICAgIG11bHRpcGFnZUJ1dHRvblRleHQ/OiBzdHJpbmdcbiAgICBjYW1lcmFGcmFtZURlZmF1bHRDb2xvcj86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lQWN0aXZlQ29sb3I/OiBudW1iZXJcbiAgICBzdGF0dXNUZXh0Q29sb3I/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNUZXh0Q29sb3I/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNCYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VCdXR0b25CYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICB0aW50Q29sb3I/OiBudW1iZXJcbiAgICBhY3Rpdml0eUluZGljYXRvckNvbG9yPzogbnVtYmVyXG4gICAgc3RhdHVzQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgY2FtZXJhUHJldmlld0JhY2tncm91bmRDb2xvcj86IG51bWJlclxuICAgIGJhY2tncm91bmRNYXNrQ29sb3I/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VCdXR0b25UZXh0Q29sb3I/OiBudW1iZXJcbiAgICBzdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICB0b29sYmFyU2l6ZT86IG51bWJlclxuICAgIGJhY2tncm91bmRNYXNrQWxwaGE/OiBudW1iZXJcbiAgICBjdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBsaXZlbmVzc0FuaW1hdGlvblBvc2l0aW9uTXVsdGlwbGllcj86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZUxhbmRzY2FwZUFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXM/OiBudW1iZXJcbiAgICBhY3Rpdml0eUluZGljYXRvclBvcnRyYWl0UG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFQcmV2aWV3VmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlPzogc3RyaW5nXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlPzogc3RyaW5nXG4gICAgaGVscEFuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgY2xvc2VCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhcHR1cmVCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhbWVyYVN3aXRjaEJ1dHRvbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PZmZJbWFnZT86IHN0cmluZ1xuICAgIGNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2U/OiBzdHJpbmdcbiAgICBjaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2U/OiBzdHJpbmdcbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQnV0dG9uSW1hZ2U/OiBzdHJpbmdcbiAgICBzdGF0dXNUZXh0Rm9udD86IEZvbnRcbiAgICByZXN1bHRTdGF0dXNUZXh0Rm9udD86IEZvbnRcbiAgICBtdWx0aXBhZ2VCdXR0b25UZXh0Rm9udD86IEZvbnRcbiAgICBjdXN0b21MYWJlbFN0YXR1cz86IHN0cmluZ1xuICAgIGNhbWVyYUZyYW1lTGluZUNhcD86IG51bWJlclxuICAgIHVpQ3VzdG9taXphdGlvbkxheWVyPzogUmVjb3JkPHN0cmluZywgYW55PlxuICAgIGhlbHBBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIGhlbHBBbmltYXRpb25JbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIGNvbG9ycz86IEN1c3RvbWl6YXRpb25Db2xvcnNcbiAgICBmb250cz86IEN1c3RvbWl6YXRpb25Gb250c1xuICAgIGltYWdlcz86IEN1c3RvbWl6YXRpb25JbWFnZXNcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25cblxuICAgICAgICByZXN1bHQuc2hvd1N0YXR1c01lc3NhZ2VzID0ganNvbk9iamVjdFtcInNob3dTdGF0dXNNZXNzYWdlc1wiXVxuICAgICAgICByZXN1bHQuc2hvd1Jlc3VsdFN0YXR1c01lc3NhZ2VzID0ganNvbk9iamVjdFtcInNob3dSZXN1bHRTdGF0dXNNZXNzYWdlc1wiXVxuICAgICAgICByZXN1bHQuc2hvd0hlbHBBbmltYXRpb24gPSBqc29uT2JqZWN0W1wic2hvd0hlbHBBbmltYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dOZXh0UGFnZUFuaW1hdGlvbiA9IGpzb25PYmplY3RbXCJzaG93TmV4dFBhZ2VBbmltYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dCYWNrZ3JvdW5kTWFzayA9IGpzb25PYmplY3RbXCJzaG93QmFja2dyb3VuZE1hc2tcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lQm9yZGVyV2lkdGggPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVCb3JkZXJXaWR0aFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVMaW5lTGVuZ3RoID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lTGluZUxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVPZmZzZXRXaWR0aCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZU9mZnNldFdpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUFuaW1hdGlvblN0YXJ0RGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VBbmltYXRpb25TdGFydERlbGF5XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUFuaW1hdGlvbkVuZERlbGF5ID0ganNvbk9iamVjdFtcIm5leHRQYWdlQW5pbWF0aW9uRW5kRGVsYXlcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lU2hhcGVUeXBlID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lU2hhcGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VCdXR0b25UZXh0ID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvblRleHRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lRGVmYXVsdENvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lRGVmYXVsdENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUFjdGl2ZUNvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lQWN0aXZlQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJzdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNCYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25CYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnRpbnRDb2xvciA9IGpzb25PYmplY3RbXCJ0aW50Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmFjdGl2aXR5SW5kaWNhdG9yQ29sb3IgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JDb2xvclwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzQmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcInN0YXR1c0JhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUHJldmlld0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJjYW1lcmFQcmV2aWV3QmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kTWFza0NvbG9yID0ganNvbk9iamVjdFtcImJhY2tncm91bmRNYXNrQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvblRleHRDb2xvciA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25UZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJzdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LnRvb2xiYXJTaXplID0ganNvbk9iamVjdFtcInRvb2xiYXJTaXplXCJdXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kTWFza0FscGhhID0ganNvbk9iamVjdFtcImJhY2tncm91bmRNYXNrQWxwaGFcIl1cbiAgICAgICAgcmVzdWx0LmN1c3RvbVN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJjdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZVZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lTGFuZHNjYXBlQXNwZWN0UmF0aW8gPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVMYW5kc2NhcGVBc3BlY3RSYXRpb1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lUG9ydHJhaXRBc3BlY3RSYXRpb1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXMgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXNcIl1cbiAgICAgICAgcmVzdWx0LmFjdGl2aXR5SW5kaWNhdG9yUG9ydHJhaXRQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JQb3J0cmFpdFBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQuYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVByZXZpZXdWZXJ0aWNhbFBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJjYW1lcmFQcmV2aWV3VmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZVwiXVxuICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlID0ganNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZVwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlID0ganNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2xvc2VCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJjbG9zZUJ1dHRvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2FwdHVyZUJ1dHRvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFTd2l0Y2hCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJjYW1lcmFTd2l0Y2hCdXR0b25JbWFnZVwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25PbkltYWdlID0ganNvbk9iamVjdFtcInRvcmNoQnV0dG9uT25JbWFnZVwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25PZmZJbWFnZSA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbk9mZkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jaGFuZ2VGcmFtZUJ1dHRvbkV4cGFuZEltYWdlID0ganNvbk9iamVjdFtcImNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNoYW5nZUZyYW1lQnV0dG9uQ29sbGFwc2VJbWFnZSA9IGpzb25PYmplY3RbXCJjaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2UgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQnV0dG9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRGb250ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzVGV4dEZvbnRcIl0pXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXNUZXh0Rm9udCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1RleHRGb250XCJdKVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uVGV4dEZvbnQgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25UZXh0Rm9udFwiXSlcbiAgICAgICAgcmVzdWx0LmN1c3RvbUxhYmVsU3RhdHVzID0ganNvbk9iamVjdFtcImN1c3RvbUxhYmVsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUxpbmVDYXAgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVMaW5lQ2FwXCJdXG4gICAgICAgIHJlc3VsdC51aUN1c3RvbWl6YXRpb25MYXllciA9IGpzb25PYmplY3RbXCJ1aUN1c3RvbWl6YXRpb25MYXllclwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wiaGVscEFuaW1hdGlvbkltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5ib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNvbG9ycyA9IEN1c3RvbWl6YXRpb25Db2xvcnMuZnJvbUpzb24oanNvbk9iamVjdFtcImNvbG9yc1wiXSlcbiAgICAgICAgcmVzdWx0LmZvbnRzID0gQ3VzdG9taXphdGlvbkZvbnRzLmZyb21Kc29uKGpzb25PYmplY3RbXCJmb250c1wiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IEN1c3RvbWl6YXRpb25JbWFnZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRURMRGF0YUdyb3VwcyB7XG4gICAgREcxPzogYm9vbGVhblxuICAgIERHMj86IGJvb2xlYW5cbiAgICBERzM/OiBib29sZWFuXG4gICAgREc0PzogYm9vbGVhblxuICAgIERHNT86IGJvb2xlYW5cbiAgICBERzY/OiBib29sZWFuXG4gICAgREc3PzogYm9vbGVhblxuICAgIERHOD86IGJvb2xlYW5cbiAgICBERzk/OiBib29sZWFuXG4gICAgREcxMD86IGJvb2xlYW5cbiAgICBERzExPzogYm9vbGVhblxuICAgIERHMTI/OiBib29sZWFuXG4gICAgREcxMz86IGJvb2xlYW5cbiAgICBERzE0PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFRExEYXRhR3JvdXBzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRURMRGF0YUdyb3Vwc1xuXG4gICAgICAgIHJlc3VsdC5ERzEgPSBqc29uT2JqZWN0W1wiREcxXCJdXG4gICAgICAgIHJlc3VsdC5ERzIgPSBqc29uT2JqZWN0W1wiREcyXCJdXG4gICAgICAgIHJlc3VsdC5ERzMgPSBqc29uT2JqZWN0W1wiREczXCJdXG4gICAgICAgIHJlc3VsdC5ERzQgPSBqc29uT2JqZWN0W1wiREc0XCJdXG4gICAgICAgIHJlc3VsdC5ERzUgPSBqc29uT2JqZWN0W1wiREc1XCJdXG4gICAgICAgIHJlc3VsdC5ERzYgPSBqc29uT2JqZWN0W1wiREc2XCJdXG4gICAgICAgIHJlc3VsdC5ERzcgPSBqc29uT2JqZWN0W1wiREc3XCJdXG4gICAgICAgIHJlc3VsdC5ERzggPSBqc29uT2JqZWN0W1wiREc4XCJdXG4gICAgICAgIHJlc3VsdC5ERzkgPSBqc29uT2JqZWN0W1wiREc5XCJdXG4gICAgICAgIHJlc3VsdC5ERzEwID0ganNvbk9iamVjdFtcIkRHMTBcIl1cbiAgICAgICAgcmVzdWx0LkRHMTEgPSBqc29uT2JqZWN0W1wiREcxMVwiXVxuICAgICAgICByZXN1bHQuREcxMiA9IGpzb25PYmplY3RbXCJERzEyXCJdXG4gICAgICAgIHJlc3VsdC5ERzEzID0ganNvbk9iamVjdFtcIkRHMTNcIl1cbiAgICAgICAgcmVzdWx0LkRHMTQgPSBqc29uT2JqZWN0W1wiREcxNFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFUGFzc3BvcnREYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG4gICAgREcxNT86IGJvb2xlYW5cbiAgICBERzE2PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFUGFzc3BvcnREYXRhR3JvdXBzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRVBhc3Nwb3J0RGF0YUdyb3Vwc1xuXG4gICAgICAgIHJlc3VsdC5ERzEgPSBqc29uT2JqZWN0W1wiREcxXCJdXG4gICAgICAgIHJlc3VsdC5ERzIgPSBqc29uT2JqZWN0W1wiREcyXCJdXG4gICAgICAgIHJlc3VsdC5ERzMgPSBqc29uT2JqZWN0W1wiREczXCJdXG4gICAgICAgIHJlc3VsdC5ERzQgPSBqc29uT2JqZWN0W1wiREc0XCJdXG4gICAgICAgIHJlc3VsdC5ERzUgPSBqc29uT2JqZWN0W1wiREc1XCJdXG4gICAgICAgIHJlc3VsdC5ERzYgPSBqc29uT2JqZWN0W1wiREc2XCJdXG4gICAgICAgIHJlc3VsdC5ERzcgPSBqc29uT2JqZWN0W1wiREc3XCJdXG4gICAgICAgIHJlc3VsdC5ERzggPSBqc29uT2JqZWN0W1wiREc4XCJdXG4gICAgICAgIHJlc3VsdC5ERzkgPSBqc29uT2JqZWN0W1wiREc5XCJdXG4gICAgICAgIHJlc3VsdC5ERzEwID0ganNvbk9iamVjdFtcIkRHMTBcIl1cbiAgICAgICAgcmVzdWx0LkRHMTEgPSBqc29uT2JqZWN0W1wiREcxMVwiXVxuICAgICAgICByZXN1bHQuREcxMiA9IGpzb25PYmplY3RbXCJERzEyXCJdXG4gICAgICAgIHJlc3VsdC5ERzEzID0ganNvbk9iamVjdFtcIkRHMTNcIl1cbiAgICAgICAgcmVzdWx0LkRHMTQgPSBqc29uT2JqZWN0W1wiREcxNFwiXVxuICAgICAgICByZXN1bHQuREcxNSA9IGpzb25PYmplY3RbXCJERzE1XCJdXG4gICAgICAgIHJlc3VsdC5ERzE2ID0ganNvbk9iamVjdFtcIkRHMTZcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRUlERGF0YUdyb3VwcyB7XG4gICAgREcxPzogYm9vbGVhblxuICAgIERHMj86IGJvb2xlYW5cbiAgICBERzM/OiBib29sZWFuXG4gICAgREc0PzogYm9vbGVhblxuICAgIERHNT86IGJvb2xlYW5cbiAgICBERzY/OiBib29sZWFuXG4gICAgREc3PzogYm9vbGVhblxuICAgIERHOD86IGJvb2xlYW5cbiAgICBERzk/OiBib29sZWFuXG4gICAgREcxMD86IGJvb2xlYW5cbiAgICBERzExPzogYm9vbGVhblxuICAgIERHMTI/OiBib29sZWFuXG4gICAgREcxMz86IGJvb2xlYW5cbiAgICBERzE0PzogYm9vbGVhblxuICAgIERHMTU/OiBib29sZWFuXG4gICAgREcxNj86IGJvb2xlYW5cbiAgICBERzE3PzogYm9vbGVhblxuICAgIERHMTg/OiBib29sZWFuXG4gICAgREcxOT86IGJvb2xlYW5cbiAgICBERzIwPzogYm9vbGVhblxuICAgIERHMjE/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVJRERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFSUREYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG4gICAgICAgIHJlc3VsdC5ERzE1ID0ganNvbk9iamVjdFtcIkRHMTVcIl1cbiAgICAgICAgcmVzdWx0LkRHMTYgPSBqc29uT2JqZWN0W1wiREcxNlwiXVxuICAgICAgICByZXN1bHQuREcxNyA9IGpzb25PYmplY3RbXCJERzE3XCJdXG4gICAgICAgIHJlc3VsdC5ERzE4ID0ganNvbk9iamVjdFtcIkRHMThcIl1cbiAgICAgICAgcmVzdWx0LkRHMTkgPSBqc29uT2JqZWN0W1wiREcxOVwiXVxuICAgICAgICByZXN1bHQuREcyMCA9IGpzb25PYmplY3RbXCJERzIwXCJdXG4gICAgICAgIHJlc3VsdC5ERzIxID0ganNvbk9iamVjdFtcIkRHMjFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRFRDRGF0YUdyb3VwIHtcbiAgICBERzE3PzogYm9vbGVhblxuICAgIERHMTg/OiBib29sZWFuXG4gICAgREcyMj86IGJvb2xlYW5cbiAgICBERzIzPzogYm9vbGVhblxuICAgIERHMjQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERUQ0RhdGFHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERUQ0RhdGFHcm91cFxuXG4gICAgICAgIHJlc3VsdC5ERzE3ID0ganNvbk9iamVjdFtcIkRHMTdcIl1cbiAgICAgICAgcmVzdWx0LkRHMTggPSBqc29uT2JqZWN0W1wiREcxOFwiXVxuICAgICAgICByZXN1bHQuREcyMiA9IGpzb25PYmplY3RbXCJERzIyXCJdXG4gICAgICAgIHJlc3VsdC5ERzIzID0ganNvbk9iamVjdFtcIkRHMjNcIl1cbiAgICAgICAgcmVzdWx0LkRHMjQgPSBqc29uT2JqZWN0W1wiREcyNFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2NlbmFyaW8ge1xuICAgIHBhY2VTdGF0aWNCaW5kaW5nPzogYm9vbGVhblxuICAgIG9ubGluZVRBPzogYm9vbGVhblxuICAgIHdyaXRlRWlkPzogYm9vbGVhblxuICAgIHVuaXZlcnNhbEFjY2Vzc1JpZ2h0cz86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUmVzdHJpY3RlZElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkNvbW11bml0eUlEPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoPzogYm9vbGVhblxuICAgIHNraXBBQT86IGJvb2xlYW5cbiAgICBzdHJpY3RQcm9jZXNzaW5nPzogYm9vbGVhblxuICAgIHBrZERTQ2VydFByaW9yaXR5PzogYm9vbGVhblxuICAgIHBrZFVzZUV4dGVybmFsQ1NDQT86IGJvb2xlYW5cbiAgICB0cnVzdGVkUEtEPzogYm9vbGVhblxuICAgIHBhc3NpdmVBdXRoPzogYm9vbGVhblxuICAgIHVzZVNGST86IGJvb2xlYW5cbiAgICByZWFkRVBhc3Nwb3J0PzogYm9vbGVhblxuICAgIHJlYWRFSUQ/OiBib29sZWFuXG4gICAgcmVhZEVETD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkU1RTaWduYXR1cmU/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFNUUVNpZ25hdHVyZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzE3PzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMTg/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFdyaXRlREcxOT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzIwPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMjE/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFZlcmlmeUFnZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SUQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkQ0FOQWxsb3dlZD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUElOTWFuYWdlbWVudD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkSW5zdGFsbENlcnQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZEluc3RhbGxRQ2VydD86IGJvb2xlYW5cbiAgICBhcHBseUFtZW5kbWVudHM/OiBib29sZWFuXG4gICAgYXV0b1NldHRpbmdzPzogYm9vbGVhblxuICAgIHByb2NlZWRSZWFkaW5nQWx3YXlzPzogYm9vbGVhblxuICAgIHJlYWREVEM/OiBib29sZWFuXG4gICAgbXJ6U3RyaWN0Q2hlY2s/OiBib29sZWFuXG4gICAgbG9hZENSTEZyb21SZW1vdGU/OiBib29sZWFuXG4gICAgaW5kZXBlbmRlbnRTT0RTdGF0dXM/OiBib29sZWFuXG4gICAgcmVhZGluZ0J1ZmZlcj86IG51bWJlclxuICAgIG9ubGluZVRBVG9TaWduRGF0YVR5cGU/OiBudW1iZXJcbiAgICBkZWZhdWx0UmVhZGluZ0J1ZmZlclNpemU/OiBudW1iZXJcbiAgICBzaWduTWFuYWdlbWVudEFjdGlvbj86IG51bWJlclxuICAgIHByb2ZpbGVyVHlwZT86IG51bWJlclxuICAgIGF1dGhQcm9jVHlwZT86IG51bWJlclxuICAgIGJhc2VTTVByb2NlZHVyZT86IG51bWJlclxuICAgIHBhY2VQYXNzd29yZFR5cGU/OiBudW1iZXJcbiAgICB0ZXJtaW5hbFR5cGU/OiBudW1iZXJcbiAgICBwYXNzd29yZD86IHN0cmluZ1xuICAgIHBrZFBBPzogc3RyaW5nXG4gICAgcGtkRUFDPzogc3RyaW5nXG4gICAgbXJ6Pzogc3RyaW5nXG4gICAgZVNpZ25QSU5EZWZhdWx0Pzogc3RyaW5nXG4gICAgZVNpZ25QSU5OZXdWYWx1ZT86IHN0cmluZ1xuICAgIGNhcmRBY2Nlc3M/OiBzdHJpbmdcbiAgICBtcnpIYXNoPzogc3RyaW5nXG4gICAgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmdcbiAgICBkYXRlT2ZCaXJ0aD86IHN0cmluZ1xuICAgIGRhdGVPZkV4cGlyeT86IHN0cmluZ1xuICAgIGVETERhdGFHcm91cHM/OiBFRExEYXRhR3JvdXBzXG4gICAgZVBhc3Nwb3J0RGF0YUdyb3Vwcz86IEVQYXNzcG9ydERhdGFHcm91cHNcbiAgICBlSUREYXRhR3JvdXBzPzogRUlERGF0YUdyb3Vwc1xuICAgIGR0Y0RhdGFHcm91cHM/OiBEVENEYXRhR3JvdXBcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNjZW5hcmlvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0LnBhY2VTdGF0aWNCaW5kaW5nID0ganNvbk9iamVjdFtcInBhY2VTdGF0aWNCaW5kaW5nXCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVUQSA9IGpzb25PYmplY3RbXCJvbmxpbmVUQVwiXVxuICAgICAgICByZXN1bHQud3JpdGVFaWQgPSBqc29uT2JqZWN0W1wid3JpdGVFaWRcIl1cbiAgICAgICAgcmVzdWx0LnVuaXZlcnNhbEFjY2Vzc1JpZ2h0cyA9IGpzb25PYmplY3RbXCJ1bml2ZXJzYWxBY2Nlc3NSaWdodHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRSZXN0cmljdGVkSWRlbnRpZmljYXRpb24gPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFJlc3RyaWN0ZWRJZGVudGlmaWNhdGlvblwiXVxuICAgICAgICByZXN1bHQuYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SUQgPSBqc29uT2JqZWN0W1wiYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoID0ganNvbk9iamVjdFtcImF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoXCJdXG4gICAgICAgIHJlc3VsdC5za2lwQUEgPSBqc29uT2JqZWN0W1wic2tpcEFBXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RQcm9jZXNzaW5nID0ganNvbk9iamVjdFtcInN0cmljdFByb2Nlc3NpbmdcIl1cbiAgICAgICAgcmVzdWx0LnBrZERTQ2VydFByaW9yaXR5ID0ganNvbk9iamVjdFtcInBrZERTQ2VydFByaW9yaXR5XCJdXG4gICAgICAgIHJlc3VsdC5wa2RVc2VFeHRlcm5hbENTQ0EgPSBqc29uT2JqZWN0W1wicGtkVXNlRXh0ZXJuYWxDU0NBXCJdXG4gICAgICAgIHJlc3VsdC50cnVzdGVkUEtEID0ganNvbk9iamVjdFtcInRydXN0ZWRQS0RcIl1cbiAgICAgICAgcmVzdWx0LnBhc3NpdmVBdXRoID0ganNvbk9iamVjdFtcInBhc3NpdmVBdXRoXCJdXG4gICAgICAgIHJlc3VsdC51c2VTRkkgPSBqc29uT2JqZWN0W1widXNlU0ZJXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRVBhc3Nwb3J0ID0ganNvbk9iamVjdFtcInJlYWRFUGFzc3BvcnRcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRFSUQgPSBqc29uT2JqZWN0W1wicmVhZEVJRFwiXVxuICAgICAgICByZXN1bHQucmVhZEVETCA9IGpzb25PYmplY3RbXCJyZWFkRURMXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RTaWduYXR1cmUgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFNUU2lnbmF0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RRU2lnbmF0dXJlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRTVFFTaWduYXR1cmVcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMTcgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcxN1wiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcxOCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzE4XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkV3JpdGVERzE5ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRXcml0ZURHMTlcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMjAgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcyMFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcyMSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzIxXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkVmVyaWZ5QWdlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRWZXJpZnlBZ2VcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRWZXJpZnlDb21tdW5pdHlJRCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQcml2aWxlZ2VkVGVybWluYWwgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZENBTkFsbG93ZWQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZENBTkFsbG93ZWRcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbENlcnQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZEluc3RhbGxDZXJ0XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbFFDZXJ0ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRJbnN0YWxsUUNlcnRcIl1cbiAgICAgICAgcmVzdWx0LmFwcGx5QW1lbmRtZW50cyA9IGpzb25PYmplY3RbXCJhcHBseUFtZW5kbWVudHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dG9TZXR0aW5ncyA9IGpzb25PYmplY3RbXCJhdXRvU2V0dGluZ3NcIl1cbiAgICAgICAgcmVzdWx0LnByb2NlZWRSZWFkaW5nQWx3YXlzID0ganNvbk9iamVjdFtcInByb2NlZWRSZWFkaW5nQWx3YXlzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRFRDID0ganNvbk9iamVjdFtcInJlYWREVENcIl1cbiAgICAgICAgcmVzdWx0Lm1yelN0cmljdENoZWNrID0ganNvbk9iamVjdFtcIm1yelN0cmljdENoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5sb2FkQ1JMRnJvbVJlbW90ZSA9IGpzb25PYmplY3RbXCJsb2FkQ1JMRnJvbVJlbW90ZVwiXVxuICAgICAgICByZXN1bHQuaW5kZXBlbmRlbnRTT0RTdGF0dXMgPSBqc29uT2JqZWN0W1wiaW5kZXBlbmRlbnRTT0RTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdCdWZmZXIgPSBqc29uT2JqZWN0W1wicmVhZGluZ0J1ZmZlclwiXVxuICAgICAgICByZXN1bHQub25saW5lVEFUb1NpZ25EYXRhVHlwZSA9IGpzb25PYmplY3RbXCJvbmxpbmVUQVRvU2lnbkRhdGFUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5kZWZhdWx0UmVhZGluZ0J1ZmZlclNpemUgPSBqc29uT2JqZWN0W1wiZGVmYXVsdFJlYWRpbmdCdWZmZXJTaXplXCJdXG4gICAgICAgIHJlc3VsdC5zaWduTWFuYWdlbWVudEFjdGlvbiA9IGpzb25PYmplY3RbXCJzaWduTWFuYWdlbWVudEFjdGlvblwiXVxuICAgICAgICByZXN1bHQucHJvZmlsZXJUeXBlID0ganNvbk9iamVjdFtcInByb2ZpbGVyVHlwZVwiXVxuICAgICAgICByZXN1bHQuYXV0aFByb2NUeXBlID0ganNvbk9iamVjdFtcImF1dGhQcm9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuYmFzZVNNUHJvY2VkdXJlID0ganNvbk9iamVjdFtcImJhc2VTTVByb2NlZHVyZVwiXVxuICAgICAgICByZXN1bHQucGFjZVBhc3N3b3JkVHlwZSA9IGpzb25PYmplY3RbXCJwYWNlUGFzc3dvcmRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC50ZXJtaW5hbFR5cGUgPSBqc29uT2JqZWN0W1widGVybWluYWxUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wYXNzd29yZCA9IGpzb25PYmplY3RbXCJwYXNzd29yZFwiXVxuICAgICAgICByZXN1bHQucGtkUEEgPSBqc29uT2JqZWN0W1wicGtkUEFcIl1cbiAgICAgICAgcmVzdWx0LnBrZEVBQyA9IGpzb25PYmplY3RbXCJwa2RFQUNcIl1cbiAgICAgICAgcmVzdWx0Lm1yeiA9IGpzb25PYmplY3RbXCJtcnpcIl1cbiAgICAgICAgcmVzdWx0LmVTaWduUElORGVmYXVsdCA9IGpzb25PYmplY3RbXCJlU2lnblBJTkRlZmF1bHRcIl1cbiAgICAgICAgcmVzdWx0LmVTaWduUElOTmV3VmFsdWUgPSBqc29uT2JqZWN0W1wiZVNpZ25QSU5OZXdWYWx1ZVwiXVxuICAgICAgICByZXN1bHQuY2FyZEFjY2VzcyA9IGpzb25PYmplY3RbXCJjYXJkQWNjZXNzXCJdXG4gICAgICAgIHJlc3VsdC5tcnpIYXNoID0ganNvbk9iamVjdFtcIm1yekhhc2hcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50TnVtYmVyID0ganNvbk9iamVjdFtcImRvY3VtZW50TnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5kYXRlT2ZCaXJ0aCA9IGpzb25PYmplY3RbXCJkYXRlT2ZCaXJ0aFwiXVxuICAgICAgICByZXN1bHQuZGF0ZU9mRXhwaXJ5ID0ganNvbk9iamVjdFtcImRhdGVPZkV4cGlyeVwiXVxuICAgICAgICByZXN1bHQuZURMRGF0YUdyb3VwcyA9IEVETERhdGFHcm91cHMuZnJvbUpzb24oanNvbk9iamVjdFtcImVETERhdGFHcm91cHNcIl0pXG4gICAgICAgIHJlc3VsdC5lUGFzc3BvcnREYXRhR3JvdXBzID0gRVBhc3Nwb3J0RGF0YUdyb3Vwcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZVBhc3Nwb3J0RGF0YUdyb3Vwc1wiXSlcbiAgICAgICAgcmVzdWx0LmVJRERhdGFHcm91cHMgPSBFSUREYXRhR3JvdXBzLmZyb21Kc29uKGpzb25PYmplY3RbXCJlSUREYXRhR3JvdXBzXCJdKVxuICAgICAgICByZXN1bHQuZHRjRGF0YUdyb3VwcyA9IERUQ0RhdGFHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZHRjRGF0YUdyb3Vwc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlcGFyZVByb2dyZXNzIHtcbiAgICBkb3dubG9hZGVkQnl0ZXM/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzPzogbnVtYmVyXG4gICAgcHJvZ3Jlc3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUHJlcGFyZVByb2dyZXNzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUHJlcGFyZVByb2dyZXNzXG5cbiAgICAgICAgcmVzdWx0LmRvd25sb2FkZWRCeXRlcyA9IGpzb25PYmplY3RbXCJkb3dubG9hZGVkQnl0ZXNcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXMgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1wiXVxuICAgICAgICByZXN1bHQucHJvZ3Jlc3MgPSBqc29uT2JqZWN0W1wicHJvZ3Jlc3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0F1dGhlbnRpY2l0eSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFVWX0xVTUlORVNDRU5DRTogMSxcbiAgICBJUl9COTAwOiAyLFxuICAgIElNQUdFX1BBVFRFUk46IDQsXG4gICAgQVhJQUxfUFJPVEVDVElPTjogOCxcbiAgICBVVl9GSUJFUlM6IDE2LFxuICAgIElSX1ZJU0lCSUxJVFk6IDMyLFxuICAgIE9DUl9TRUNVUklUWV9URVhUOiA2NCxcbiAgICBJUEk6IDEyOCxcbiAgICBQSE9UT19FTUJFRF9UWVBFOiA1MTIsXG4gICAgSE9MT0dSQU1TOiA0MDk2LFxuICAgIFBIT1RPX0FSRUE6IDgxOTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTjogMzI3NjgsXG4gICAgQkFSQ09ERV9GT1JNQVRfQ0hFQ0s6IDY1NTM2LFxuICAgIEtJTkVHUkFNOiAxMzEwNzIsXG4gICAgSE9MT0dSQU1TX0RFVEVDVElPTjogNTI0Mjg4LFxuICAgIE1SWjogODM4ODYwOCxcbiAgICBTVEFUVVNfT05MWTogMHg4MDAwMDAwMCxcbiAgICBPVkk6IDEwMjQsXG4gICAgTElWRU5FU1M6IDIwOTcxNTIsXG4gICAgT0NSOiA0MTk0MzA0LFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkNvbG9yID0ge1xuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fQkFDS0dST1VORDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUxfVEVYVDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUxfQkFDS0dST1VORDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0xBQkVMX1RFWFQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsVGV4dFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfQkFSOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0JBUl9CQUNLR1JPVU5EOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJCYWNrZ3JvdW5kXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9SRVNVTFRfTEFCRUxfVEVYVDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fTE9BRElOR19CQVI6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Mb2FkaW5nQmFyXCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX1RJVExFX1RFWFQ6IFwicmZpZEVuYWJsZU5mY1RpdGxlVGV4dFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19ERVNDUklQVElPTl9URVhUOiBcInJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHRcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfQlVUVE9OX1RFWFQ6IFwicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwicmZpZEVuYWJsZU5mY0J1dHRvbkJhY2tncm91bmRcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0Vycm9yQ29kZXMgPSB7XG4gICAgUkZJRF9FUlJPUl9OT19FUlJPUjogMHgwMDAwMDAwMSxcbiAgICBSRklEX0VSUk9SX0FMUkVBRFlfRE9ORTogMHgwMDAwMDAwMixcbiAgICBSRklEX0VSUk9SX0ZBSUxFRDogMHhmZmZmZmZmZixcbiAgICBSRklEX0VSUk9SX05PX0NISVBfREVURUNURUQ6IDB4ODAwMTAwMDEsXG4gICAgUkZJRF9FUlJPUl9OT1RfQVZBSUxBQkxFOiAweDgwMDEwMDAyLFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6IDB4ODAwMTAwMDQsXG4gICAgUkZJRF9FUlJPUl9OT1RfSU5JVElBTElaRUQ6IDB4ODAwMTAwMDUsXG4gICAgUkZJRF9FUlJPUl9OT1RfRU5PVUdIX01FTU9SWTogMHg4MDAxMDAwNixcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfRElSRUNUT1JZOiAweDgwMDEwMDA4LFxuICAgIFJGSURfRVJST1JfVU5LTk9XTl9DT01NQU5EOiAweDgwMDEwMDA5LFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogMHg4MDAxMDAwQSxcbiAgICBSRklEX0VSUk9SX0JVU1k6IDB4ODAwMTAwMEIsXG4gICAgUkZJRF9FUlJPUl9PTERfRklSTVdBUkU6IDB4ODAwMTAwMEMsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogMHg4MDAyMDAwMCxcbiAgICBSRklEX0VSUk9SX1BDU0NfUkVBREVSX05PVF9BVkFJTEFCTEU6IDB4ODAwMjAwMDEsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBTlRfQ09OTkVDVF9DQVJEOiAweDgwMDIwMDAyLFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IDB4ODAwMjAwMDMsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX09QRVJBVElPTl9DQU5DRUxMRUQ6IDB4ODAwMjAwMDQsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfQlVTWTogMHg4MDAyMDAwNSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NDQVJEOiAweDgwMDIwMDA2LFxuICAgIFJGSURfRVJST1JfUENTQ19FWFRfTEVfRkFJTEVEOiAweDgwMDIwMDEwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IDB4ODYwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfQVBQX1NFTEVDVElPTl9GQUlMVVJFOiAweDg2MDAwMDAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX01BQ19GQUlMOiAweDg2MDAwMTAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAweDg2MDAwMTAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAxMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRV9EQVRBOiAweDg2MDAwMTAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzhFX01JU1NJTkc6IDB4ODYwMDAyMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfTUlTU0lORzogMHg4NjAwMDIwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET185OV9NSVNTSU5HOiAweDg2MDAwMjAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX01BQ19JTkNPUlJFQ1Q6IDB4ODYwMDAyMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfSU5DT1JSRUNUOiAweDg2MDAwMjA0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X05PTl9UTFZfUkVTUE9OU0VfREFUQTogMHg4NjAwMDMwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogMHg4NjAwMDMwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTlRfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfS0FUX0ZBSUxVUkU6IDB4ODYwMDAzMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogMHg4NjAwMDMwNCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QU09fQ0VSVElGSUNBVEVfRkFJTFVSRTogMHg4NjAwMDMwNSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6IDB4ODYwMDAzMDYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfR0VUX0NIQUxMRU5HRV9GQUlMVVJFOiAweDg2MDAwMzA3LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0VYVF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDksXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9OT1RfRk9VTkQ6IDB4ODAwMDZBODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YxOiAweDgwMDA2MjgyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMjogMHg4MDAwNkIwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTkNPUlJFQ1RfUEFSQU1TOiAweDgwMDA2QTgwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X05PX1JFRkVSRU5DRV9EQVRBOiAweDgwMDA2QTg4LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EOiAweDgwMDA2M0MxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEOiAweDgwMDA2M0MwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDogMHg4MDAwNjI4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDI6IDB4ODAwMDY5ODMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEMjogMHg4MDAwNjk4NCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDI6IDB4ODAwMDY5ODUsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0ZBSUxFRDogMHg4MDEwNjNDMCxcbiAgICBSRklEX0VSUk9SX05PVF9QRVJGT1JNRUQ6IDB4ODMwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogMHg4MzAwMDAwMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVU5TVVBQT1JURURfT1BFUkFUSU9OOiAweDgzMDAwMDAyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX1VOS05PV046IDB4ODMwMDAwMTAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAweDgzMDAwMDExLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX05PVF9TRVQ6IDB4ODMwMDAwMTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOS05PV046IDB4ODMwMDAwMTMsXG4gICAgUkZJRF9FUlJPUl9TZXNzaW9uX1Byb2NlZHVyZV9UeXBlX1Vuc3VwcG9ydGVkOiAweDgzMDAwMDE0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9OT1RfU0VUOiAweDgzMDAwMDE1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOS05PV05fVFlQRTogMHg4MzAwMDAxNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAweDgzMDAwMDE3LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9TTV9UWVBFOiAweDgzMDAwMDE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1JFU1RSSUNURUQ6IDB4ODMwMDAwMTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODMwMDAwMUEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfTk9UX1NFVDogMHg4MzAwMDAxQixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFdEX01BTkFHRU1FTlRfTk9UX0FVVEhPUklaRUQ6IDB4ODMwMDAwMUMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogMHg4MzAwMDAyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfU006IDB4ODMwMDAwMjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1BBQ0U6IDB4ODMwMDAwMjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IDB4ODMwMDAwMjMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1RBOiAweDgzMDAwMDI0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQTogMHg4MzAwMDAyNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogMHg4MzAwMDAyNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQ0FfRkFJTEVEOiAweDgzMDAwMDI3LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9UQV9GQUlMRUQ6IDB4ODMwMDAwMjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogMHg4MzAwMDAyOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUklfRkFJTEVEOiAweDgzMDAwMDJBLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAweDgzMDAwMDMwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogMHg4MzAwMDAzMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0VYUElSWTogMHg4MzAwMDA0MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0JJUlRIOiAweDgzMDAwMDQxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogMHg4MzAwMDA0MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1JFUVVJUkVTX0FQUF9TRUxFQ1RJT046IDB4ODMwMDAwNTAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1NFVDogMHg4MzAwMDA1MSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IDB4ODMwMDAwNTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgzMDAwMDYwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX05PVF9FTk9VR0hfREFUQTogMHg4MzAxMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogMHg4MzAyMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9VTkVYUEVDVEVEX0RBVEE6IDB4ODMwMzAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAweDgzMDQwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogMHg4MzA1MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1VTRV9EQVRBOiAweDgzMDYwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfUkVBRF9EQVRBOiAweDgzMDcwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IDB4ODMwODAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X05PX0VSUk9SOiAweDg0MDAwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9USU1FX09VVDogMHg4NDAxMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OOiAweDg0MDIwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DUkM6IDB4ODQwMzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfSU5URUdSSVRZOiAweDg0MDQwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0xFTkdUSDogMHg4NDA1MDAwMCxcbiAgICBSRklEX0VSUk9SX0xheWVyMzRfUkZVOiAweDg0MDYwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT05fVE9PX01BTlk6IDB4ODQwNzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MX0I6IDB4ODQwODAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfQ09OVEVOVFM6IDB4ODQwOTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MOiAweDg0MEEwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9HTE9CQUxfVElNRV9PVVQ6IDB4ODQwQjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X01JRkFSRV9BVVRIOiAweDg0MEMwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fRVJST1I6IDB4ODQwRDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9DT0xMSVNJT046IDB4ODQwRTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9BQ0tOT1dMRURHRTogMHg4NDBGMDAwMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ0Vycm9yQ29kZXMgPSB7XG4gICAgRVJSX0xEU19PSzogMHgwMDAwMDAwMSxcbiAgICBFUlJfTERTX0FTTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwMSxcbiAgICBSUl9MRFNfQVNOX05PVF9FTk9VR0hfREFUQTogMHg4MDAwMDAwMixcbiAgICBFUlJfTERTX0FTTl9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODAwMDAwMDMsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMDgsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfRU5DQVBfQ09OVEVOVFNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMDksXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwQSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDEzLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNCxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RJR0VTVF9BTEdPUklUSE1fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTUsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9ER19IQVNIRVNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTYsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTcsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxOCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxOSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUEsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSVNTVUVSX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFCLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1ZBTElESVRZX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFDLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NVQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUQsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9QS19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFGLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIwLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjEsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIyLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0RJR0VTVF9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjMsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI0LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05fQUxHX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI1LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19VTlNJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNyxcbiAgICBFUlJfTERTX0lDQU9fTERTX09CSkVDVF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgwMDAwMDMwLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfRU1QVFk6IDB4ODAwMDAwMzEsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzIsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwMzMsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0VSUk9SOiAweDgwMDAwMDM0LFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19TSUdORURfQVRUUlNfTUlTU0VEOiAweDgwMDAwMDM2LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdORVJfSU5GT19DQU5UX0ZJTkRfQ0VSVElGSUNBVEU6IDB4ODAwMDAwMzUsXG4gICAgRVJSX0xEU19BVVRIX0VSUk9SOiAweDgwMDAwMDUwLFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDgwMDAwMDUxLFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogMHg4MDAwMDA1MixcbiAgICBFUlJfTERTX0FVVEhfTUVTU0VEX0FMR09SSVRITVM6IDB4ODAwMDAwNTMsXG4gICAgRVJSX0xEU19BVVRIX1BVQkxJQ19LRVlfREFUQV9JTlZBTElEOiAweDgwMDAwMDU0LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTUsXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTYsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwNTcsXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOQ09SUkVDVDogMHg4MDAwMDA1OCxcbiAgICBFUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfTk9UX0RFRklORUQ6IDB4ODAwMDAwNTksXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IDB4ODAwMDAwNUEsXG4gICAgRVJSX0xEU19ER19XUk9OR19UQUg6IDB4ODAwMDAwNzAsXG4gICAgRVJSX0xEU19ER19DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODAwMDAwNzEsXG4gICAgRVJSX0xEU19CQVBfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMTEsXG4gICAgRVJSX0xEU19QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogMHg4MTAwMDAyMCxcbiAgICBFUlJfTERTX1BBQ0VfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjEsXG4gICAgRVJSX0xEU19QQUNFX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOiAweDgxMDAwMDIyLFxuICAgIEVSUl9MRFNfUEFDRV9FUEhFTUVSQUxfS0VZU19DQU5UX0NSRUFURTogMHg4MTAwMDAyMyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX0RFQ09ERV9OT05DRTogMHg4MTAwMDAyNCxcbiAgICBFUlJfTERTX1BBQ0VfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogMHg4MTAwMDAyNSxcbiAgICBFUlJfTERTX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9GT1JNQVQ6IDB4ODEwMDAwMjYsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyNyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6IDB4ODEwMDAwMjgsXG4gICAgRVJSX0xEU19QQUNFX01BUFBJTkdfQ0FOVF9QRVJGT1JNOiAweDgxMDAwMDI5LFxuICAgIEVSUl9MRFNfUEFDRV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6IDB4ODEwMDAwMkEsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX0lOQ09SUkVDVDogMHg4MTAwMDAyQixcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfQ0FOVF9WRVJJRlk6IDB4ODEwMDAwMkMsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX05PTl9NQVRDSElORzogMHg4MTAwMDAyRCxcbiAgICBFUlJfTERTX1BBQ0VfSU1fU0NIRU1FX0lOQ09SUkVDVDogMHg4MTAwMDAyRSxcbiAgICBFUlJfTERTX1BBQ0VfSU1fUkFORE9NX01BUFBJTkdfRkFJTEVEOiAweDgxMDAwMDJGLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX1BVQkxJQ19LRVk6IDB4ODEwMDAwMzAsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfSU5GTzogMHg4MTAwMDAzMSxcbiAgICBFUlJfTERTX0NBX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMDMyLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0RPTUFJTl9QQVJBTUVURVJTOiAweDgxMDAwMDMzLFxuICAgIEVSUl9MRFNfQ0FfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMzQsXG4gICAgRVJSX0xEU19DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg4MTAwMDAzNSxcbiAgICBFUlJfTERTX0NBX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM2LFxuICAgIEVSUl9MRFNfQ0FfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogMHg4MTAwMDAzNyxcbiAgICBFUlJfTERTX0NBX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAzOCxcbiAgICBFUlJfTERTX1RBX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMDQwLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9CVUlMRF9DRVJUSUZJQ0FURV9DSEFJTjogMHg4MTAwMDA0MSxcbiAgICBFUlJfTERTX1RBX0NBTlRfRklORF9JU19QUklWQVRFX0tFWTogMHg4MTAwMDA0MixcbiAgICBFUlJfTERTX1RBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDQzLFxuICAgIEVSUl9MRFNfVEFfU0lHTkFUVVJFX0JVSUxESU5HX0VSUk9SOiAweDgxMDAwMDQ0LFxuICAgIEVSUl9MRFNfVEFfSU5WQUxJRF9LRVlfQUxHT1JJVEhNX1BBUkFNRVRFUlM6IDB4ODEwMDAwNDUsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg4MTAwMDA1MCxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAwNTEsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9QQVJBTUVURVJTOiAweDgxMDAwMDUyLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTkRFRklORURfUEFSQU1FVEVSUzogMHg4MTAwMDA1MyxcbiAgICBFUlJfTERTX0FBX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1NCxcbiAgICBFUlJfTERTX0FBX1VOU1VQUE9SVEVEX1JFQ09WRVJZX1NDSEVNRTogMHg4MTAwMDA1NSxcbiAgICBFUlJfTERTX0FBX0lOQ09SUkVDVF9UUkFJTEVSOiAweDgxMDAwMDU2LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MTAwMDA1NyxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfQ0FOVF9GSU5EOiAweDgxMDAwMDcwLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA3MSxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfSU5DT01QTEVURV9EQVRBOiAweDgxMDAwMDcyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTUlTU0lOR19NQU5EQVRPUllfREFUQV9QSzogMHg4MTAwMDA2MCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfVU5TVVBQT1JURUQ6IDB4ODEwMDAwNjIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX1VOU1VQUE9SVEVEX1RFUk1JTkFMX1RZUEU6IDB4ODEwMDAwNjMsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5WQUxJRF9QQVJBTVM6IDB4ODEwMDAwNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NQSV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NBUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjMsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSFJfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjQsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY1LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfRlJPTV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElEX1RPX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY3LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2OCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY5LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfTUlTU0lORzogMHg4MTAwMDE2QSxcbiAgICBFUlJfTERTX1ZEU19VTlNVUFBPUlRFRF9WRVJTSU9OOiAweDgxMDAwMjAwLFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9TSVpFOiAweDgxMDAwMjAxLFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwMixcbiAgICBFUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfU0laRTogMHg4MTAwMDIwMyxcbiAgICBFUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfREFUQTogMHg4MTAwMDIwNCxcbiAgICBFUlJfTERTX1ZEU19TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAyMDUsXG4gICAgRVJSX0xEU19WRFNfTkNfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAzMDAsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9IRUFERVI6IDB4ODEwMDAzMDIsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfVFlQRTogMHg4MTAwMDMwMyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMzA0LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0lTU1VJTkdfQ09VTlRSWTogMHg4MTAwMDMwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9NRVNTQUdFOiAweDgxMDAwMzA2LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR05BVFVSRTogMHg4MTAwMDMwNyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfQUxHT1JJVEhNOiAweDgxMDAwMzA4LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0NFUlRJRklDQVRFOiAweDgxMDAwMzA5LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19WQUxVRTogMHg4MTAwMDMwQSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0NlcnRpZmljYXRlVHlwZSA9IHtcbiAgICBDVF9VTkRFRklORUQ6IDAsXG4gICAgQ1RfQ1NDQTogMSxcbiAgICBDVF9DU0NBX0xJTks6IDIsXG4gICAgQ1RfRFM6IDMsXG4gICAgQ1RfTUxTOiA0LFxuICAgIENUX0RFVl9MUzogNSxcbiAgICBDVF9ERUZfTFM6IDYsXG4gICAgQ1RfQkxTOiA3LFxuICAgIENUX0xEUzI6IDgsXG4gICAgQ1RfQkNTOiA5LFxuICAgIENUX0JDU05DOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IFJHTE1lYXN1cmVTeXN0ZW0gPSB7XG4gICAgTUVUUklDOiAwLFxuICAgIElNUEVSSUFMOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fUmVzdWx0VHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VNUFRZOiAwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX0lNQUdFOiAxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklMRV9JTUFHRTogMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9PQ1JfRVhURU5ERUQ6IDMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFUzogNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0dSQVBISUNTOiA2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1RFU1RfUVVBTElUWTogNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1RZUEVTX0NBTkRJREFURVM6IDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DSE9TRU5fRE9DVU1FTlRfVFlQRV9DQU5ESURBVEU6IDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVFNfSU5GT19MSVNUOiAxMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX09DUl9MRVhJQ0FMX0FOQUxZWkU6IDE1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX1VOQ1JPUFBFRF9JTUFHRTogMTYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9WSVNVQUxfT0NSX0VYVEVOREVEOiAxNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19URVhUX0RBVEE6IDE4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX0lNQUdFX0RBVEE6IDE5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQVVUSEVOVElDSVRZOiAyMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VPU19JTUFHRTogMjMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVlFUl9JTUFHRTogMjQsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEU6IDI1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFX1RFWFRfREFUQTogMjYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUVMRF9GSUxFX0lNQUdFOiAyNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RBVEFCQVNFX0NIRUNLOiAyOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTkdFUlBSSU5UX1RFTVBMQVRFX0lTTzogMjksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlBVVF9JTUFHRV9RVUFMSVRZOiAzMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX1JGSURfU0VTU0lPTjogNDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9FTkNSWVBURURfUkNMOiA0OSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX0xJQ0VOU0U6IDUwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVEVYVDogMzYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTUFHRVM6IDM3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSE9MT19QQVJBTVM6IDQ3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfUE9TSVRJT046IDg1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ1VTVE9NOiAxMDAsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX1JBV19EQVRBOiAxMDEsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX1RFWFRfREFUQTogMTAyLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9JTUFHRV9EQVRBOiAxMDMsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0JJTkFSWV9EQVRBOiAxMDQsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX09SSUdJTkFMX0dSQVBISUNTOiAxMDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFX1BPU0lUSU9OOiA2MixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9QT1NJVElPTjogNjEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9MSVZFX1BPUlRSQUlUOiAzMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1NUQVRVUzogMzMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OOiAzNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VYVF9QT1JUUkFJVDogMzUsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0RUQ19WQzogMTA5LFxufVxuXG5leHBvcnQgY29uc3QgRnJhbWVTaGFwZVR5cGUgPSB7XG4gICAgTElORTogMCxcbiAgICBDT1JORVI6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQlVUVDogMCxcbiAgICBST1VORDogMSxcbiAgICBTUVVBUkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCA9IHtcbiAgICBSQ0ZfRElTQUJMRUQ6IDAsXG4gICAgUkNGX1ZFUklGSUVEOiAxLFxuICAgIFJDRl9OT1RfVkVSSUZJRUQ6IDIsXG4gICAgUkNGX0NPTVBBUkVfVFJVRTogMyxcbiAgICBSQ0ZfQ09NUEFSRV9GQUxTRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckFjdGlvbiA9IHtcbiAgICBDT01QTEVURTogMCxcbiAgICBQUk9DRVNTOiAxLFxuICAgIE1PUkVfUEFHRVNfQVZBSUxBQkxFOiAyLFxuICAgIENBTkNFTDogMyxcbiAgICBFUlJPUjogNCxcbiAgICBQUk9DRVNTX1dISVRFX0ZMQVNITElHSFQ6IDUsXG4gICAgVElNRU9VVDogNixcbiAgICBQUk9DRVNTSU5HX09OX1NFUlZJQ0U6IDcsXG4gICAgTk9USUZJQ0FUSU9OOiAxMDEsXG4gICAgUFJPQ0VTU19XSElURV9VVl9JTUFHRVM6IDEwMixcbiAgICBQUk9DRVNTX0lSX0ZSQU1FOiAxMDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfQWRkRGF0YVRvUGFja2FnZTogMTIxMjEsXG4gICAgZVBDX1Byb2NNZ3JfRmluYWxpemVQYWNrYWdlOiAxMjEyMixcbiAgICBlUENfUHJvY01ncl9DcmVhdGVCYWNrZW5kVHJhbnNhY3Rpb246IDEyMTI1LFxuICAgIGVQQ19Qcm9jTWdyX1VubG9hZDogMTIxMDcsXG4gICAgZVBDX1Byb2NNZ3JfQ2hlY2tEYXRhYmFzZTogMTIxMDksXG4gICAgZVBDX1Byb2NNZ3JfQ29tcGFyZVBvcnRyYWl0czogMTIxMTEsXG4gICAgZVBDX1JGSURfU2V0VENDUGFyYW1zOiAxMjUyMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEUmVhZGluZ0J1ZmZlclNpemUgPSB7XG4gICAgU1RBTkRBUkRfTEVOR1RIOiAwLFxuICAgIEVYVEVOREVEX0xFTkdUSDogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBQS0RSZXNvdXJjZVR5cGUgPSB7XG4gICAgQ0VSVElGSUNBVEVfUEE6IDAsXG4gICAgQ0VSVElGSUNBVEVfVEE6IDEsXG4gICAgTERJRjogMixcbiAgICBDUkw6IDMsXG4gICAgTUw6IDQsXG4gICAgREVGTDogNSxcbiAgICBERVZMOiA2LFxuICAgIEJMOiA3LFxuXG4gICAgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwYVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXG4gICAgICAgICAgICBjYXNlIFwidGFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9UQVxuICAgICAgICAgICAgY2FzZSBcImxkaWZcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5MRElGXG4gICAgICAgICAgICBjYXNlIFwiY3JsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1JMXG4gICAgICAgICAgICBjYXNlIFwibWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NTFxuICAgICAgICAgICAgY2FzZSBcImRlZmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERUZMXG4gICAgICAgICAgICBjYXNlIFwiZGV2bFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFVkxcbiAgICAgICAgICAgIGNhc2UgXCJibFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJMXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUgPSB7XG4gICAgYXB0VW5kZWZpbmVkOiAwLFxuICAgIGFwdFN0YW5kYXJkOiAxLFxuICAgIGFwdEFkdmFuY2VkOiAyLFxuICAgIGFwdEdlbmVyYWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudFJlYWRlckVycm9yQ29kZXMgPSB7XG4gICAgSU5JVElBTElaQVRJT05fQ09SRV9BQlNFTlQ6IDAsXG4gICAgSU5JVElBTElaQVRJT05fRkFJTEVEOiAxLFxuICAgIElOQ09SUkVDVF9TQ0VOQVJJTzogMixcbiAgICBOT19SRVNVTFQ6IDMsXG4gICAgUkVNT1ZFX0RBVEFCQVNFOiA0LFxuICAgIEZFVENISU5HX0RBVEFCQVNFOiA1LFxuICAgIERCX0lEX05PVF9GT1VORDogNixcbiAgICBEQl9ERVNDUklQVElPTl9OT1RfRk9VTkQ6IDcsXG4gICAgU0FWRV9EQjogOCxcbiAgICBET1dOTE9BRF9EQl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDksXG4gICAgREJfRE9XTkxPQUQ6IDEwLFxuICAgIFJGSURfRVJST1I6IDEyLFxuICAgIExJQ0VOU0VfQUJTRU5UX09SX0NPUlJVUFRFRDogMTMsXG4gICAgTElDRU5TRV9JTlZBTElEX0RBVEU6IDE0LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9WRVJTSU9OOiAxNSxcbiAgICBMSUNFTlNFX0lOVkFMSURfREVWSUNFX0lEOiAxNixcbiAgICBMSUNFTlNFX0lOVkFMSURfU1lTVEVNX09SX0FQUF9JRDogMTcsXG4gICAgTElDRU5TRV9OT19DQVBBQklMSVRJRVM6IDE4LFxuICAgIExJQ0VOU0VfTk9fQVVUSEVOVElDSVRZOiAxOSxcbiAgICBSRUNPUkRfUFJPQ0VTU19JTlZBTElEX09VVFBVVF9VUkw6IDIwLFxuICAgIExJQ0VOU0VfT05MSU5FX0VSUk9SOiAyMSxcbiAgICBMSUNFTlNFX05PX0RBVEFCQVNFOiAyMixcbiAgICBMSUNFTlNFX0RBVEFCQVNFX0lOQ09SUkVDVDogMjMsXG4gICAgSU5WQUxJRF9UQ0NfUEFSQU1TOiAyNCxcbiAgICBSRklEX0lOX1BST0dSRVNTOiAyNSxcbiAgICBTVEFSVF9CQUNLRU5EX1BST0NFU1NJTkc6IDI2LFxuICAgIEFERF9EQVRBX1RPX1BBQ0tBR0U6IDI3LFxuICAgIEZJTkFMSVpFX0ZBSUxFRDogMjgsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IDI5LFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiAzMCxcbiAgICBDQU5OT1RfVVNFX0NBTUVSQV9JTl9TQ0VOQVJJTzogNDAsXG4gICAgTkFUSVZFX0pBVkFfRVhDRVBUSU9OOiAxMDAwLFxuICAgIEJBQ0tFTkRfT05MSU5FX1BST0NFU1NJTkc6IDMwMyxcbiAgICBXUk9OR19JTlBVVDogNDAwLFxuICAgIFJFU1VMVF9VTkFWQUlMQUJMRTogNDEwLFxuICAgIFJFU1VMVF9XUk9OR19PVVRQVVQ6IDQxMSxcbiAgICBTVEFURV9FWENFUFRJT046IDUwMCxcbiAgICBCTEVfRVhDRVBUSU9OOiA2MDAsXG4gICAgRkVBVFVSRV9CTFVFVE9PVEhfTEVfTk9UX1NVUFBPUlRFRDogNjAxLFxuICAgIEFQUF9CQUNLR1JPVU5EOiA3MDAsXG4gICAgT05MSU5FX1BST0NFU1NJTkdfV1JPTkdfSU5QVVQ6IDgwMCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvSWRlbnRpZmllciA9IHtcbiAgICBTQ0VOQVJJT19NUlo6IFwiTXJ6XCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERTogXCJCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFOiBcIkxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX09DUjogXCJPY3JcIixcbiAgICBTQ0VOQVJJT19ET0NUWVBFOiBcIkRvY1R5cGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERTogXCJNcnpPckJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfTE9DQVRFOiBcIk1yek9yTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX0FORF9MT0NBVEU6IFwiTXJ6QW5kTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERV9BTkRfTE9DQVRFOiBcIkJhcmNvZGVBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfT0NSOiBcIk1yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREVfT1JfT0NSOiBcIk1yek9yQmFyY29kZU9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFX1ZJU1VBTF9BTkRfTVJaX09SX09DUjogXCJMb2NhdGVWaXN1YWxfQW5kX01yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9QUk9DRVNTOiBcIkZ1bGxQcm9jZXNzXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9BVVRIOiBcIkZ1bGxBdXRoXCIsXG4gICAgU0NFTkFSSU9fSUQzUlVTOiBcIklkM1J1c1wiLFxuICAgIFNDRU5BUklPX1JVU19TVEFNUDogXCJSdXNTdGFtcFwiLFxuICAgIFNDRU5BUklPX09DUl9GUkVFOiBcIk9jckZyZWVcIixcbiAgICBTQ0VOQVJJT19DUkVESVRfQ0FSRDogXCJDcmVkaXRDYXJkXCIsXG4gICAgU0NFTkFSSU9fQ0FQVFVSRTogXCJDYXB0dXJlXCIsXG4gICAgU0NFTkFSSU9fRFRDOiBcIkRUQ1wiLFxuICAgIFNDRU5BUklPX1JGSUQ6IFwiUkZJRFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlID0ge1xuICAgIEFDUFRfVU5ERUZJTkVEOiAwLFxuICAgIEFDUFRfQkFDOiAxLFxuICAgIEFDUFRfUEFDRTogMixcbiAgICBBQ1BUX0NBOiAzLFxuICAgIEFDUFRfVEE6IDQsXG4gICAgQUNQVF9BQTogNSxcbiAgICBBQ1BUX1JJOiA2LFxuICAgIEFDUFRfQ0FSRF9JTkZPOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX05vdGlmaWNhdGlvbkNvZGVzID0ge1xuICAgIFJGSURfTk9USUZJQ0FUSU9OX0VSUk9SOiAweDAwMDEwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0RPQ1VNRU5UX1JFQURZOiAweDAwMDEwMDAxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JFQURfUFJPVE9DT0w0OiAweDAwMDEwMDAzLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JFQURfUFJPVE9DT0wzOiAweDAwMDEwMDBBLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BST0dSRVNTOiAweDAwMDEwMDBCLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1RBX1NURVA6IDB4MDAwMTAwMEUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fUkVRVUlSRUQ6IDB4MDAwMTAwMEYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fSVNPX0VSUk9SOiAweDAwMDExMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX1JFUVVFU1Q6IDB4MDAwMTMwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fRVNUQUJMSVNIRUQ6IDB4MDAwMTQwMEYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfRElTQ09OTkVDVEVEOiAweDAwMDIwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0xJU1RfQ0hBTkdFRDogMHgwMDAyMDAwMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0JZVEVTX1JFQ0VJVkVEOiAweDAwMDIwMDAyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19USU1FOiAweDAwMDIwMDAzLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfREFUQV9SRUNFSVZFRDogMHgwMDAyMDAwNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0JZVEVTX1NFTlQ6IDB4MDAwMjAwMDUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1NQRUVEOiAweDAwMDIwMDA2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUFJPQ0VTU19USU1FOiAweDAwMDIwMDA3LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0xJU1RfQ0hBTkdJTkc6IDB4MDAwMjAwMDgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FWFRfTEVOR1RIX1NVUFBPUlQ6IDB4MDAwMjAwMTAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfQ0VSVElGSUNBVEVfQ0hBSU46IDB4MDAwMjAwMTEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfQ0VSVElGSUNBVEVfQ0hBSU5fSVRFTTogMHgwMDAyMDAxMixcbiAgICBSRklEX05PVElGSUNBVElPTl9TQ0VOQVJJTzogMHgwMDAyMDAyMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURJTkdfREFUQUdST1VQOiAweDAwMDMwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9OT1RfRk9VTkQ6IDB4MDAwNDAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FTkRfT0ZfRklMRTogMHgwMDA1MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfQUNDRVNTX0RFTklFRDogMHgwMDA2MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0FQUExJQ0FUSU9OX1NFTEVDVEVEOiAweDAwMDcwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9TVEFSVDogMHgwMDA4MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfRklOSVNIOiAweDAwMDkwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX1NFQ1VSSVRZX09CSkVDVF9DSEVDSzogMHgwMDBBMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9GSUxFX0NIRUNLOiAweDAwMEIwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVVBEQVRJTkdfREFUQUdST1VQOiAweDAwMEMwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FVWElMSUFSWV9EQVRBX1ZBTElEQVRJT046IDB4MDAwRDAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUklfU0VDVE9SX0lEOiAweDAwMEUwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0JJT01FVFJJQ1NfRU1QVFlfUExBQ0VIT0xERVI6IDB4MDAwRjAwMDAsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFQb3NpdGlvbiA9IHtcbiAgICBVTlNQRUNJRklFRDogMCxcbiAgICBCQUNLOiAxLFxuICAgIEZST05UOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfUGFzc3dvcmRfVHlwZSA9IHtcbiAgICBQUFRfVU5LTk9XTjogMCxcbiAgICBQUFRfTVJaOiAxLFxuICAgIFBQVF9DQU46IDIsXG4gICAgUFBUX1BJTjogMyxcbiAgICBQUFRfUFVLOiA0LFxuICAgIFBQVF9QSU5fRVNJR046IDUsXG4gICAgUFBUX1NBSTogNixcbiAgICBQUFRfTVJaX0hBU0g6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBWaWV3Q29udGVudE1vZGUgPSB7XG4gICAgVU5LTk9XTjogLTEsXG4gICAgU0NBTEVfVE9fRklMTDogMCxcbiAgICBTQ0FMRV9BU1BFQ1RfRklUOiAxLFxuICAgIFNDQUxFX0FTUEVDVF9GSUxMOiAyLFxuICAgIFJFRFJBVzogMyxcbiAgICBDRU5URVI6IDQsXG4gICAgVE9QOiA1LFxuICAgIEJPVFRPTTogNixcbiAgICBMRUZUOiA3LFxuICAgIFJJR0hUOiA4LFxuICAgIFRPUF9MRUZUOiA5LFxuICAgIFRPUF9SSUdIVDogMTAsXG4gICAgQk9UVE9NX0xFRlQ6IDExLFxuICAgIEJPVFRPTV9SSUdIVDogMTIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUmVzdWx0ID0ge1xuICAgIE5PX0VSUjogMCxcbiAgICBJTlZBTElEX1JFU1VMVDogMTQwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BcHBsaWNhdGlvbl9UeXBlID0ge1xuICAgIGVQQVNTUE9SVDogMSxcbiAgICBlSUQ6IDIsXG4gICAgZVNJR046IDMsXG4gICAgZURMOiA0LFxuICAgIExEUzJfVFJBVkVMX1JFQ09SRFM6IDUsXG4gICAgTERTMl9WSVNBX1JFQ09SRFM6IDYsXG4gICAgTERTMl9BRERfQklPTUVUUklDUzogNyxcbiAgICBlRFRDX1BDOiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVNpZ25NYW5hZ2VtZW50QWN0aW9uID0ge1xuICAgIHNtYVVuZGVmaW5lZDogMCxcbiAgICBzbWFDcmVhdGVQSU46IDEsXG4gICAgc21hQ2hhbmdlUElOOiAyLFxuICAgIHNtYVVuYmxvY2tQSU46IDMsXG4gICAgc21hVGVybWluYXRlUElOOiA0LFxuICAgIHNtYUdlbmVyYXRlS2V5czogNSxcbiAgICBzbWFUZXJtaW5hdGVLZXlzOiA2LFxuICAgIHNtYVNpZ25EYXRhOiA3LFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrRGlhZ25vc2UgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBQQVNTOiAxLFxuICAgIElOVkFMSURfSU5QVVRfREFUQTogMixcbiAgICBJTlRFUk5BTF9FUlJPUjogMyxcbiAgICBFWENFUFRJT05fSU5fTU9EVUxFOiA0LFxuICAgIFVOQ0VSVEFJTl9WRVJJRklDQVRJT046IDUsXG4gICAgTkVDRVNTQVJZX0lNQUdFX05PVF9GT1VORDogNyxcbiAgICBQSE9UT19TSURFU19OT1RfRk9VTkQ6IDgsXG4gICAgSU5WQUxJRF9DSEVDS1NVTTogMTAsXG4gICAgU1lOVEFYX0VSUk9SOiAxMSxcbiAgICBMT0dJQ19FUlJPUjogMTIsXG4gICAgU09VUkNFU19DT01QQVJJU09OX0VSUk9SOiAxMyxcbiAgICBGSUVMRFNfQ09NUEFSSVNPTl9MT0dJQ19FUlJPUjogMTQsXG4gICAgSU5WQUxJRF9GSUVMRF9GT1JNQVQ6IDE1LFxuICAgIFRSVUVfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIxLFxuICAgIEZJWEVEX1BBVFRFUk5fRVJST1I6IDIyLFxuICAgIExPV19DT05UUkFTVF9JTl9JUl9MSUdIVDogMjMsXG4gICAgSU5DT1JSRUNUX0JBQ0tHUk9VTkRfTElHSFQ6IDI0LFxuICAgIEJBQ0tHUk9VTkRfQ09NUEFSSVNPTl9FUlJPUjogMjUsXG4gICAgSU5DT1JSRUNUX1RFWFRfQ09MT1I6IDI2LFxuICAgIFBIT1RPX0ZBTFNFX0xVTUlOSVNDRU5DRTogMjcsXG4gICAgVE9PX01VQ0hfU0hJRlQ6IDI4LFxuICAgIENPTlRBQ1RfQ0hJUF9UWVBFX01JU01BVENIOiAyOSxcbiAgICBGSUJFUlNfTk9UX0ZPVU5EOiAzMCxcbiAgICBUT09fTUFOWV9PQkpFQ1RTOiAzMSxcbiAgICBTUEVDS1NfSU5fVVY6IDMzLFxuICAgIFRPT19MT1dfUkVTT0xVVElPTjogMzQsXG4gICAgSU5WSVNJQkxFX0VMRU1FTlRfUFJFU0VOVDogNDAsXG4gICAgVklTSUJMRV9FTEVNRU5UX0FCU0VOVDogNDEsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfQ09MT1JFRDogNDIsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfR1JBWVNDQUxFOiA0MyxcbiAgICBQSE9UT19XSElURV9JUl9ET05UX01BVENIOiA0NCxcbiAgICBVVl9EVUxMX1BBUEVSX01SWjogNTAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX01SWjogNTEsXG4gICAgVVZfRFVMTF9QQVBFUl9QSE9UTzogNTIsXG4gICAgVVZfRFVMTF9QQVBFUl9CTEFOSzogNTMsXG4gICAgVVZfRFVMTF9QQVBFUl9FUlJPUjogNTQsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX0JMQU5LOiA1NSxcbiAgICBCQURfQVJFQV9JTl9BWElBTDogNjAsXG4gICAgRkFMU0VfSVBJX1BBUkFNRVRFUlM6IDY1LFxuICAgIEVOQ1JZUFRFRF9JUElfTk9UX0ZPVU5EOiA2NixcbiAgICBFTkNSWVBURURfSVBJX0RBVEFfRE9OVF9NQVRDSDogNjcsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9ISUdITElHSFRfSVI6IDgwLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfR0xBUkVTX0lOX1BIT1RPX0FSRUE6IDgxLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfUEhPVE9fUkVQTEFDRUQ6IDgyLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfTEFORE1BUktTX0NIRUNLX0VSUk9SOiA4MyxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0ZBQ0VfUFJFU0VOQ0VfQ0hFQ0tfRVJST1I6IDg0LFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfRkFDRV9BQlNFTkNFX0NIRUNLX0VSUk9SOiA4NSxcbiAgICBDSERfRklFTERfUE9TX0NPUlJFQ1RPUl9JTkNPUlJFQ1RfSEVBRF9QT1NJVElPTjogODYsXG4gICAgQ0hEX0ZJRUxEX1BPU19DT1JSRUNUT1JfQUdFX0NIRUNLX0VSUk9SOiA4NyxcbiAgICBDSERfRklFTERfUE9TX0NPUlJFQ1RPUl9TRVhfQ0hFQ0tfRVJST1I6IDg4LFxuICAgIE9WSV9JUl9JTlZJU0lCTEU6IDkwLFxuICAgIE9WSV9JTlNVRkZJQ0lFTlRfQVJFQTogOTEsXG4gICAgT1ZJX0NPTE9SX0lOVkFSSUFCTEU6IDkyLFxuICAgIE9WSV9CQURfQ09MT1JfRlJPTlQ6IDkzLFxuICAgIE9WSV9CQURfQ09MT1JfU0lERTogOTQsXG4gICAgT1ZJX1dJREVfQ09MT1JfU1BSRUFEOiA5NSxcbiAgICBPVklfQkFEX0NPTE9SX1BFUkNFTlQ6IDk2LFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfQUJTRU5UOiAxMDAsXG4gICAgSE9MT0dSQU1fU0lERV9UT1BfSU1BR0VTX0FCU0VOVDogMTAxLFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfUFJFU0VOVDogMTAyLFxuICAgIEhPTE9HUkFNX0ZSQU1FU19JU19BQlNFTlQ6IDEwMyxcbiAgICBIT0xPR1JBTV9IT0xPX0ZJRUxEX0lTX0FCU0VOVDogMTA0LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5URVJSVVBURUQ6IDExMCxcbiAgICBQSE9UT19QQVRURVJOX1NISUZURUQ6IDExMSxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9DT0xPUlM6IDExMixcbiAgICBQSE9UT19QQVRURVJOX0lSX1ZJU0lCTEU6IDExMyxcbiAgICBQSE9UT19QQVRURVJOX05PVF9JTlRFUlNFQ1Q6IDExNCxcbiAgICBQSE9UT19TSVpFX0lTX1dST05HOiAxMTUsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlZBTElEX0NPTE9SOiAxMTYsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEX1ZFUlQ6IDExNyxcbiAgICBQSE9UT19QQVRURVJOX1BBVFRFUk5fTk9UX0ZPVU5EOiAxMTgsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxMTksXG4gICAgUEhPVE9fSVNfTk9UX1JFQ1RBTkdMRTogMTIwLFxuICAgIFBIT1RPX0NPUk5FUlNfSVNfV1JPTkc6IDEyMSxcbiAgICBET0NVTUVOVF9JU19DQU5DRUxMSU5HOiAxMjIsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfQkxVRTogMTMwLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0dSRUVOOiAxMzEsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfUkVEOiAxMzIsXG4gICAgVEVYVF9TSE9VTERfQkVfQkxBQ0s6IDEzMyxcbiAgICBTRUNVUklUWV9URVhUX0lTX0FCU0VOVDogMTM0LFxuICAgIEJBUkNPREVfV0FTX1JFQURfV0lUSF9FUlJPUlM6IDE0MCxcbiAgICBCQVJDT0RFX0RBVEFfRk9STUFUX0VSUk9SOiAxNDEsXG4gICAgQkFSQ09ERV9TSVpFX1BBUkFNU19FUlJPUjogMTQyLFxuICAgIE5PVF9BTExfQkFSQ09ERVNfUkVBRDogMTQzLFxuICAgIEdMQVJFU19JTl9CQVJDT0RFX0FSRUE6IDE0NCxcbiAgICBDSERfTk9fQ0VSVElGSUNBVEVfRk9SX0RJR0lUQUxfU0lHTkFUVVJFX0NIRUNLOiAxNDUsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9QT1JUUkFJVFNfRElGRkVSOiAxNTAsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX1JFUExZOiAxNTEsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9TRVJWSUNFX0VSUk9SOiAxNTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT1RfRU5PVUdIX0lNQUdFUzogMTUzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fTElWRV9QSE9UTzogMTU0LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9MSUNFTlNFOiAxNTUsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19QT1JUUkFJVF9ERVRFQ1RFRDogMTU2LFxuICAgIE1PQklMRV9JTUFHRVNfVU5TVUlUQUJMRV9MSUdIVF9DT05ESVRJT05TOiAxNjAsXG4gICAgTU9CSUxFX0lNQUdFU19XSElURV9VVl9OT19ESUZGRVJFTkNFOiAxNjEsXG4gICAgRklOR0VSUFJJTlRTX0NPTVBBUklTT05fTUlTTUFUQ0g6IDE3MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfTk9UX0RFVEVDVEVEOiAxODAsXG4gICAgSE9MT19QSE9UT19GQUNFX0NPTVBBUklTT05fRkFJTEVEOiAxODEsXG4gICAgSE9MT19QSE9UT19GQUNFX0dMQVJFX0lOX0NFTlRFUl9BQlNFTlQ6IDE4MixcbiAgICBIT0xPX0VMRU1FTlRfU0hBUEVfRVJST1I6IDE4MyxcbiAgICBBTEdPUklUSE1fU1RFUFNfRVJST1I6IDE4NCxcbiAgICBIT0xPX0FSRUFTX05PVF9MT0FERUQ6IDE4NSxcbiAgICBGSU5JU0hFRF9CWV9USU1FT1VUOiAxODYsXG4gICAgSE9MT19QSE9UT19ET0NVTUVOVF9PVVRTSURFX0ZSQU1FOiAxODcsXG4gICAgTElWRU5FU1NfREVQVEhfQ0hFQ0tfRkFJTEVEOiAxOTAsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfU1lNQk9MX1BPU0lUSU9OOiAyMDAsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfQkFDS0dST1VORDogMjAxLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX01SWl9XSURUSDogMjAyLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX01SWl9IRUlHSFQ6IDIwMyxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19MSU5FX1BPU0lUSU9OOiAyMDQsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfRk9OVF9UWVBFOiAyMDUsXG4gICAgT0NSX1FVQUxJVFlfVEVYVF9QT1NJVElPTjogMjIwLFxuICAgIE9DUl9RVUFMSVRZX0lOVkFMSURfRk9OVDogMjIxLFxuICAgIE9DUl9RVUFMSVRZX0lOVkFMSURfQkFDS0dST1VORDogMjIyLFxuICAgIExBU19JTktfSU5WQUxJRF9MSU5FU19GUkVRVUVOQ1k6IDIzMCxcbiAgICBET0NfTElWRU5FU1NfRE9DVU1FTlRfTk9UX0xJVkU6IDIzOCxcbiAgICBDSERfRE9DX0xJVkVORVNTX0JMQUNLX0FORF9XSElURV9DT1BZX0RFVEVDVEVEOiAyMzksXG4gICAgRE9DX0xJVkVORVNTX0VMRUNUUk9OSUNfREVWSUNFX0RFVEVDVEVEOiAyNDAsXG4gICAgRE9DX0xJVkVORVNTX0lOVkFMSURfQkFSQ09ERV9CQUNLR1JPVU5EOiAyNDEsXG4gICAgSUNBT19JREJfQkFTRV8zMl9FUlJPUjogMjQzLFxuICAgIElDQU9fSURCX1pJUFBFRF9FUlJPUjogMjQ0LFxuICAgIElDQU9fSURCX01FU1NBR0VfWk9ORV9FTVBUWTogMjQ1LFxuICAgIElDQU9fSURCX1NJR05BVFVSRV9NVVNUX0JFX1BSRVNFTlQ6IDI0NixcbiAgICBJQ0FPX0lEQl9TSUdOQVRVUkVfTVVTVF9OT1RfQkVfUFJFU0VOVDogMjQ3LFxuICAgIElDQU9fSURCX0NFUlRJRklDQVRFX01VU1RfTk9UX0JFX1BSRVNFTlQ6IDI0OCxcbiAgICBJTkNPUlJFQ1RfT0JKRUNUX0NPTE9SOiAyNTAsXG59XG5cbmV4cG9ydCBjb25zdCBSRklERGVsZWdhdGUgPSB7XG4gICAgTlVMTDogMCxcbiAgICBOT19QQTogMSxcbiAgICBGVUxMOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVGV4dFByb2Nlc3NpbmcgPSB7XG4gICAgb2NOb0NoYW5nZTogMCxcbiAgICBvY1VwcGVyY2FzZTogMSxcbiAgICBvY0xvd2VyY2FzZTogMixcbiAgICBvY0NhcGl0YWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBMb2dMZXZlbCA9IHtcbiAgICBGYXRhbEVycm9yOiBcIkZhdGFsRXJyb3JcIixcbiAgICBFcnJvcjogXCJFcnJvclwiLFxuICAgIFdhcm5pbmc6IFwiV2FybmluZ1wiLFxuICAgIEluZm86IFwiSW5mb1wiLFxuICAgIERlYnVnOiBcIkRlYnVnXCIsXG59XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25JbWFnZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1NQT1JUX1NJTkdMRV9QQUdFOiAxLFxuICAgIFBBU1NQT1JUX1RXT19QQUdFUzogMixcbiAgICBJRF9GUk9OVDogMyxcbiAgICBJRF9GUk9OVF9NUlo6IDQsXG4gICAgSURfQkFDSzogNSxcbiAgICBJRF9CQUNLX01SWjogNixcbiAgICBJRF9CQUNLX0JBUkNPREU6IDcsXG4gICAgSURfQkFDS19CQVJDT0RFX01SWjogOCxcbiAgICBCQU5LX0NBUkRfRlJPTlQ6IDksXG4gICAgQkFOS19DQVJEX0JBQ0s6IDEwLFxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ge1xuICAgIE5PVF9SRUFEWTogMCxcbiAgICBSRUFEWTogMSxcbiAgICBUSU1FT1VUOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jRm9ybWF0ID0ge1xuICAgIElEMTogMCxcbiAgICBJRDI6IDEsXG4gICAgSUQzOiAyLFxuICAgIE5PTjogMyxcbiAgICBBNDogNCxcbiAgICBJRDNfeDI6IDUsXG4gICAgSUQyX1RVUktFWTogNixcbiAgICBJRDFfOTA6IDEwLFxuICAgIElEMV8xODA6IDExLFxuICAgIElEMV8yNzA6IDEyLFxuICAgIElEMl8xODA6IDEzLFxuICAgIElEM18xODA6IDE0LFxuICAgIENVU1RPTTogMTAwMCxcbiAgICBQSE9UTzogMTAwMSxcbiAgICBGTEVYSUJMRTogMTAwMixcbiAgICBVTktOT1dOOiAtMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzID0ge1xuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkwMDAwMDAxLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX05PTl9NQVRDSElOR19TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMDAyLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9USU1FX0NPRElORzogMHg5MDAwMDAwMyxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVVNFX09GX0dFTkVSQUxJWkVEX1RJTUU6IDB4OTAwMDAwMDQsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfSVNTVUVSOiAweDkwMDAwMDA1LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX1NVQkpFQ1Q6IDB4OTAwMDAwMDYsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfQ1JJVElDQUxfRVhURU5TSU9OOiAweDkwMDAwMDA4LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0NTQ0FfUk9MRTogMHg5MDAwMDAwRSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9EU19ST0xFOiAweDkwMDAwMDBGLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9JU1NVRVJfU1VCSkVDVF9EUzogMHg5MDAwMDAxMCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9EVVBMSUNBVElOR19FWFRFTlNJT05TOiAweDkwMDAwMDE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX01JU1NFRDogMHg5MDAwMDIwMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPTU1PTl9OQU1FX01JU1NFRDogMHg5MDAwMDIwMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjA3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMDgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4OTAwMDAyMDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDkwMDAwMjBBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NSVNTRURfRVhURU5TSU9OUzogMHg5MDAwMDIwQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTAwMDAyMEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMEQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTUlTU0VEOiAweDkwMDAwMjBFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIwRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTUlTU0VEOiAweDkwMDAwMjExLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UxOiAweDkwMDAwMjEyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UyOiAweDkwMDAwMjEzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjE1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX01JU1NFRDogMHg5MDAwMDIxNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19JTkNPUlJFQ1Q6IDB4OTAwMDAyMTcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIxOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX1VTQUdFOiAweDkwMDAwMjE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfTUlTU0VEOiAweDkwMDAwMjIwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9FTVBUWTogMHg5MDAwMDIyMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTUlTU0VEOiAweDkwMDAwMjIzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMjYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjI4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIyOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAweDkwMDAwMjJBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9FTVBUWTogMHg5MDAwMDIyRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjMxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0VNUFRZOiAweDkwMDAwMjMyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIzMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjM0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9NSVNTRUQ6IDB4OTAwMDAyMzUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjM2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9WRVJTSU9OOiAweDkwMDAwMjM3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVM6IDB4OTAwMDAyMzgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFU19FTVBUWTogMHg5MDAwMDIzOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0EsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0VNUFRZOiAweDkwMDAwMjNCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19QT0xJQ1lfSURfTUlTU0VEOiAweDkwMDAwMjNDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfTUlTU0VEOiAweDkwMDAwMjNELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0UsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9FTVBUWTogMHg5MDAwMDIzRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX1BPSU5UX01JU1NFRDogMHg5MDAwMDI0MCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU1VCSkVDVF9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI0NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NTQ0FfQUxUX05BTUVTX05PTl9NQVRDSElORzogMHg5MDAwMDI0NyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjQ4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0NSSVRJQ0FMOiAweDkwMDAwMjRBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9DUklUSUNBTDogMHg5MDAwMDI0QyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX09QVElPTkFMX0NSSVRJQ0FMOiAweDkwMDAwMjRELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0RixcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMDIyLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjMsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX0lOQ09SUkVDVDogMHg5MDAwMDAyNCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fTUlTU0lORzogMHg5MDAwMDAyNSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fVU5FWFBFQ1RFRDogMHg5MDAwMDAyNixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzAsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9VTlNVUFBPUlRFRDogMHg5MDAwMDAzMSxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMyLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMzLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX09JRF9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfQ09OVEVOVF9PSURfSU5DT1JSRUNUOiAweDkwMDAwMUExLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfRU1QVFk6IDB4OTAwMDAxMDIsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX1VOU1VQUE9SVEVEOiAweDkwMDAwMTAzLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfTVVMVElQTEVfRU5UUklFUzogMHg5MDAwMDEwOSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX01JU1NFRDogMHg5MDAwMDFCMCxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX0VNUFRZOiAweDkwMDAwMUIxLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DUkxTX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDFCMixcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9JTkNPUlJFQ1RfQ09OVEVOVF9PSUQ6IDB4OTAwMDAxMDQsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfTlVNQkVSX0lOQ09SUkVDVDogMHg5MDAwMDEwNSxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX01JU1NJTkc6IDB4OTAwMDAxMDYsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9FWFRSQTogMHg5MDAwMDEwNyxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwOCxcbiAgICBOVEZfTERTX0lDQU9fTUFTVEVSX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQzAsXG4gICAgTlRGX0xEU19JQ0FPX0RFVklBVElPTl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUM4LFxuICAgIE5URl9MRFNfQlNJX0RFRkVDVF9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQwLFxuICAgIE5URl9MRFNfQlNJX0JMQUNLX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxRDgsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMEEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0lOQ09SUkVDVF9DSE9JQ0U6IDB4OTAwMDAxMEIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0RJR0VTVF9BTEdPUklUSE1fTk9UX0xJU1RFRDogMHg5MDAwMDEwQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMEQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9EQVRBOiAweDkwMDAwMTBFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfVmFsdWU6IDB4OTAwMDAxMEYsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfTUlTU0lORzogMHg5MDAwMDExMCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9EQVRBOiAweDkwMDAwMTExLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX1ZBTFVFOiAweDkwMDAwMTEyLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMUIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfREFUQTogMHg5MDAwMDExQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9WQUxVRTogMHg5MDAwMDExRCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0xJU1RfQ09OVEVOVF9ERVNDUklQVElPTl9BVFRSX0RBVEE6IDB4OTAwMDAxMUYsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkwMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MDAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MDAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTAwMDAxMTksXG4gICAgTlRGX0xEU19VTlNVUFBPUlRFRF9JTUFHRV9GT1JNQVQ6IDB4OTAwMDAxMUEsXG4gICAgTlRGX0xEU19NUlpfRE9DVU1FTlRfVFlQRV9VTktOT1dOOiAweDAwMDIyMDA4LFxuICAgIE5URl9MRFNfTVJaX0lTU1VJTkdfU1RBVEVfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDA5LFxuICAgIE5URl9MRFNfTVJaX05BTUVfSVNfVk9JRDogMHgwMDAyMjAwQSxcbiAgICBOVEZfTERTX01SWl9OVU1CRVJfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDBELFxuICAgIE5URl9MRFNfTVJaX05BVElPTkFMSVRZX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRSxcbiAgICBOVEZfTERTX01SWl9ET0JfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDBGLFxuICAgIE5URl9MRFNfTVJaX0RPQl9FUlJPUjogMHgwMDAyMjAxMCxcbiAgICBOVEZfTERTX01SWl9ET0JfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDExLFxuICAgIE5URl9MRFNfTVJaX1NFWF9JTkNPUlJFQ1Q6IDB4MDAwMjIwMTIsXG4gICAgTlRGX0xEU19NUlpfRE9FX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAxMyxcbiAgICBOVEZfTERTX01SWl9ET0VfRVJST1I6IDB4MDAwMjIwMTQsXG4gICAgTlRGX0xEU19NUlpfRE9FX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNSxcbiAgICBOVEZfTERTX01SWl9PUFRJT05BTF9EQVRBX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNixcbiAgICBOVEZfTERTX01SWl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTcsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUOiAweDAwMDIyMDE4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfTUlTU0lORzogMHg5MDAxMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX0lOQ09SUkVDVDogMHg5MDAyMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfTUlTU0lORzogMHg5MDAzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfSU5DT1JSRUNUOiAweDkwMDQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19UWVBFX0lOQ09SUkVDVDogMHg5MDA1MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfTUlTU0lORzogMHg5MDA2MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfSU5DT1JSRUNUOiAweDkwMDcwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfSU1BR0VfTUlTU0lORzogMHg5MDA4MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0ZPUk1BVF9JRF9JTkNPUlJFQ1Q6IDB4OTAwOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDBBMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfTEVOR1RIX0lOQ09SUkVDVDogMHg5MDBCMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfR0VOREVSOiAweDkwMTAwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9FWUVfQ09MT1I6IDB4OTAxMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0hBSVJfQ09MT1I6IDB4OTAxMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfWUFXOiAweDkwMTMwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1BJVENIOiAweDkwMTQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1JPTEw6IDB4OTAxNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ZQVc6IDB4OTAxNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9QSVRDSDogMHg5MDE3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1JPTEw6IDB4OTAxODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0ZBQ0VfSU1BR0VfVFlQRTogMHg5MDE5MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSU1BR0VfREFUQV9UWVBFOiAweDkwMUEwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX1VOU1VQUE9SVEVEX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX0RFUFJFQ0FURURfVkVSU0lPTjogMHg5MTAwMDAwMSxcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VU0lOR19TVERfUkVGOiAweDkxMDAwMDAyLFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwMyxcbiAgICBOVEZfTERTX1NJX0NBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDQsXG4gICAgTlRGX0xEU19TSV9DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNSxcbiAgICBOVEZfTERTX1NJX0NBX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDA2LFxuICAgIE5URl9MRFNfU0lfVEFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwNyxcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fRklMRV9JRF9GT1JfVkVSU0lPTjI6IDB4OTEwMDAwMDgsXG4gICAgTlRGX0xEU19TSV9FSURfU0VDVVJJVFlfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg5MTAwMDAwOSxcbiAgICBOVEZfTERTX1NJX1JJX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEEsXG4gICAgTlRGX0xEU19TSV9SSV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwQixcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEMsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwRCxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT05TSVNURU5UX0FMR09SSVRITV9SRUZFUkVOQ0U6IDB4OTEwMDAwMEUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAwLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fU1REX1BBUkFNRVRFUlM6IDB4OTEwMDAxMDEsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTAyLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDMsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0RPTUFJTl9QQVJBTVNfTk9fUkVRVUlSRURfT1BUSU9OOiAweDkxMDAwMTA0LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0FOT05ZTU9VU19JTkZPUzogMHg5MTAwMDEwNixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTA3LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX1BVQkxJQ19LRVk6IDB4OTEwMDAxMDgsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lOQ09SUkVDVF9JTkZPU19RVUFOVElUWTogMHg5MTAwMDEwOSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfVEFfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTBBLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQVJEX0lORk9fTE9DQVRPUl9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBCLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9FSURfU0VDVVJJVFlfSU5GT19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBDLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEQsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfSU5DT1JSRUNUX1VTQUdFOiAweDkxMDAwMTBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9SSV9ET01BSU5fUEFSQU1TX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT1NfTk9OX0NPTlNJU1RBTlQ6IDB4OTEwMDAxMTAsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUk9GSUxFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMjAxLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTEwMDAyMDIsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9OT05fQ1ZfQ0FfRE9NQUlOX1BBUkFNRVRFUlM6IDB4OTEwMDAyMDMsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwNCxcbiAgICBOVEZfTERTX1RBX1BBQ0VfU1RBVElDX0JJTkRJTkdfVVNFRDogMHg5MTAwMDMwMCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTIwMDAxMTUsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6IDB4OTIwMDAxMTYsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAweDkyMDAwMTE3LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOiAweDkyMDAwMTE4LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDogMHg5MjAwMDExOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfQ0hBSU5fQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZJU1VBTF9NUlpfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNTEsXG4gICAgTlRGX0xEU19NUlpfQ09VTlRSWUNPREVfVklTVUFMTVJaX05PTl9NQVRDSElORzogMHgwMDAyMjAxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTVJaX0NPVU5UUllfTk9OX01BVENISU5HOiAweDkwMDAwMjUyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9OT05fVVBQRVJfQ0FTRTogMHg5MDAwMDI1MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX05PTl9VUFBFUl9DQVNFOiAweDkwMDAwMjU0LFxufVxuXG5leHBvcnQgY29uc3QgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSA9IHtcbiAgICBJUUNfSU1BR0VfR0xBUkVTOiAwLFxuICAgIElRQ19JTUFHRV9GT0NVUzogMSxcbiAgICBJUUNfSU1BR0VfUkVTT0xVVElPTjogMixcbiAgICBJUUNfSU1BR0VfQ09MT1JORVNTOiAzLFxuICAgIElRQ19QRVJTUEVDVElWRTogNCxcbiAgICBJUUNfQk9VTkRTOiA1LFxuICAgIElRQ19TQ1JFRU5fQ0FQVFVSRTogNixcbiAgICBJUUNfUE9SVFJBSVQ6IDcsXG4gICAgSVFDX0hBTkRXUklUVEVOOiA4LFxuICAgIElRQ19CUklHSFRORVNTOiA5LFxuICAgIElRQ19PQ0NMVVNJT046IDEwLFxufVxuXG5leHBvcnQgY29uc3QgTVJaRm9ybWF0ID0ge1xuICAgIEZPUk1BVF8xWDMwOiBcIjF4MzBcIixcbiAgICBGT1JNQVRfM1gzMDogXCIzeDMwXCIsXG4gICAgRk9STUFUXzJYMzY6IFwiMngzNlwiLFxuICAgIEZPUk1BVF8yWDQ0OiBcIjJ4NDRcIixcbiAgICBGT1JNQVRfMVg2OiBcIjF4NlwiLFxuICAgIEZPUk1BVF8yWDMwOiBcIjJ4MzBcIixcbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVUeXBlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgQkNUX0NPREUxMjg6IDEsXG4gICAgQ09ERTM5OiAyLFxuICAgIEVBTjg6IDMsXG4gICAgSVRGOiA0LFxuICAgIFBERjQxNzogNSxcbiAgICBTVEY6IDYsXG4gICAgTVRGOiA3LFxuICAgIElBVEE6IDgsXG4gICAgQ09EQUJBUjogOSxcbiAgICBVUENBOiAxMCxcbiAgICBDT0RFOTM6IDExLFxuICAgIFVQQ0U6IDEyLFxuICAgIEVBTjEzOiAxMyxcbiAgICBRUkNPREU6IDE0LFxuICAgIEFaVEVDOiAxNSxcbiAgICBEQVRBTUFUUklYOiAxNixcbiAgICBBTExfMUQ6IDE3LFxuICAgIENPREUxMTogMTgsXG4gICAgSkFCQ09ERTogMTksXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CTEFOSzogMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRklMTDogMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE86IDIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01SWjogMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFMU0VfTFVNSU5FU0NFTkNFOiA0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1NJTVBMRTogNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfU1RBVElDOiA2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9NVUxUSV9TVEFUSUM6IDcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX0RJTkFNSUM6IDgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX0lOVEVSUlVQVEVEOiA5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9TSElGVEVEOiAxMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9TQU1FX0NPTE9SUzogMTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fSVJfSU5WSVNJQkxFOiAxMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0laRV9DSEVDSzogMTMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfR0hPU1Q6IDE0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1JGSUQ6IDE1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1ZJU1VBTDogMTYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JBUkNPREU6IDE3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDE4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0NBTUVSQTogMTksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fUkZJRF9WU19DQU1FUkE6IDIwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9HSE9TVF9QSE9UTzogMjEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NMRUFSX0dIT1NUX1BIT1RPOiAyMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSU5WSVNJQkxFX09CSkVDVDogMjMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xPV19DT05UUkFTVF9PQkpFQ1Q6IDI0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT0xPUjogMjUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NIQVBFOiAyNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09STkVSUzogMjcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX09DUjogMjgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUVlNfVklTVUFMOiAyOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9FWFRWU19SRklEOiAzMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9FWFRWU19MSVZFOiAzMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfREVQVEg6IDMyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9NSUNST1RFWFQ6IDMzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GTFVPUkVTQ0VOVF9PQkpFQ1Q6IDM0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MQU5ETUFSS1NfQ0hFQ0s6IDM1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUNFX1BSRVNFTkNFOiAzNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFDRV9BQlNFTkNFOiAzOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfU0NSRUVOX0NBUFRVUkU6IDM5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19FTEVDVFJPTklDX0RFVklDRTogNDAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX09WSTogNDEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JBUkNPREVfU0laRV9DSEVDSzogNDIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xBU19JTks6IDQzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19NTEk6IDQ0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19CQVJDT0RFX0JBQ0tHUk9VTkQ6IDQ1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0JBUkNPREU6IDQ2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURfVlNfQkFSQ09ERTogNDcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUX1ZTX0JBUkNPREU6IDQ4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0JBUkNPREVfVlNfQ0FNRVJBOiA0OSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0hFQ0tfRElHSVRBTF9TSUdOQVRVUkU6IDUwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DT05UQUNUX0NISVBfQ0xBU1NJRklDQVRJT046IDUxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IRUFEX1BPU0lUSU9OX0NIRUNLOiA1MixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfQkxBQ0tfQU5EX1dISVRFX0NPUFlfQ0hFQ0s6IDUzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19EWU5BUFJJTlRfQ0hFQ0s6IDU0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19HRU9NRVRSWV9DSEVDSzogNTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0FHRV9DSEVDSzogNTYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1NFWF9DSEVDSzogNTcsXG59XG5cbmV4cG9ydCBjb25zdCBPbmxpbmVNb2RlID0ge1xuICAgIE1BTlVBTDogMCxcbiAgICBBVVRPOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZGlEb2NUeXBlID0ge1xuICAgIGR0Tm90RGVmaW5lZDogMCxcbiAgICBkdFBhc3Nwb3J0OiAxMSxcbiAgICBkdElkZW50aXR5Q2FyZDogMTIsXG4gICAgZHREaXBsb21hdGljUGFzc3BvcnQ6IDEzLFxuICAgIGR0U2VydmljZVBhc3Nwb3J0OiAxNCxcbiAgICBkdFNlYW1hbklkZW50aXR5RG9jdW1lbnQ6IDE1LFxuICAgIGR0SWRlbnRpdHlDYXJkRm9yUmVzaWRlbmNlOiAxNixcbiAgICBkdFRyYXZlbERvY3VtZW50OiAxNyxcbiAgICBkdE90aGVyOiA5OSxcbiAgICBkdFZpc2FJRDI6IDI5LFxuICAgIGR0VmlzYUlEMzogMzAsXG4gICAgZHRSZWdpc3RyYXRpb25DZXJ0aWZpY2F0ZTogMjA2LFxuICAgIGR0TmF0aW9uYWxJZGVudGl0eUNhcmQ6IDIwLFxuICAgIGR0U29jaWFsSWRlbnRpdHlDYXJkOiAyMSxcbiAgICBkdEFsaWVuc0lkZW50aXR5Q2FyZDogMjIsXG4gICAgZHRQcml2aWxlZ2VkSWRlbnRpdHlDYXJkOiAyMyxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdElkZW50aXR5Q2FyZDogMjQsXG4gICAgZHRPcmlnaW5DYXJkOiAyNSxcbiAgICBkdEVtZXJnZW5jeVBhc3Nwb3J0OiAyNixcbiAgICBkdEFsaWVuc1Bhc3Nwb3J0OiAyNyxcbiAgICBkdEFsdGVybmF0aXZlSWRlbnRpdHlDYXJkOiAyOCxcbiAgICBkdEF1dGhvcml6YXRpb25DYXJkOiAzMixcbiAgICBkdEJlZ2lubmVyUGVybWl0OiAzMyxcbiAgICBkdEJvcmRlckNyb3NzaW5nQ2FyZDogMzQsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlOiAzNSxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiAzNixcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiAzNyxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMzgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5zdHJ1Y3Rpb25QZXJtaXQ6IDQyLFxuICAgIGR0Q29tbWVyY2lhbE5ld1Blcm1pdDogNDMsXG4gICAgZHRDb25jZWFsZWRDYXJyeUxpY2Vuc2U6IDQ0LFxuICAgIGR0Q29uY2VhbGVkRmlyZWFybVBlcm1pdDogNDUsXG4gICAgZHRDb25kaXRpb25hbERyaXZpbmdMaWNlbnNlOiA0NixcbiAgICBkdERlcGFydG1lbnRPZlZldGVyYW5zQWZmYWlyc0lkZW50aXR5Q2FyZDogNDcsXG4gICAgZHREaXBsb21hdGljRHJpdmluZ0xpY2Vuc2U6IDQ4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2U6IDQ5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiA1MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0VW5kZXIyMTogNTIsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0OiA1MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjE4OiA1NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjIxOiA1NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlOiA1NixcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogNTcsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDU4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWdpc3RlcmVkT2ZmZW5kZXI6IDU5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIxODogNjAsXG4gICAgZHREcml2aW5nTGljZW5zZVJlc3RyaWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogODYsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMjE6IDg3LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMTg6IDg4LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMjE6IDg5LFxuICAgIGR0SGFuZGd1bkNhcnJ5UGVybWl0OiA5MCxcbiAgICBkdElkZW50aXR5QW5kUHJpdmlsZWdlQ2FyZDogOTEsXG4gICAgZHRJZGVudGl0eUNhcmRNb2JpbGl0eUltcGFpcmVkOiA5MixcbiAgICBkdElkZW50aXR5Q2FyZFJlZ2lzdGVyZWRPZmZlbmRlcjogOTMsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yOiA5NCxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA5NSxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA5NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTg6IDk3LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIyMTogOTgsXG4gICAgZHRJZ25pdGlvbkludGVybG9ja1Blcm1pdDogMTAwLFxuICAgIGR0SW1taWdyYW50VmlzYTogMTAxLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogMTAzLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiAxMDQsXG4gICAgZHRJbnRlcmltRHJpdmluZ0xpY2Vuc2U6IDEwNSxcbiAgICBkdEludGVyaW1JZGVudGl0eUNhcmQ6IDEwNixcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlOiAxMDcsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEwOCxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTA5LFxuICAgIGR0SnVuaW9yRHJpdmluZ0xpY2Vuc2U6IDExMCxcbiAgICBkdExlYXJuZXJJbnN0cnVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlc3RyaWN0ZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDE0OCxcbiAgICBkdFJlc3RyaWN0ZWREcml2aW5nTGljZW5zZTogMTQ5LFxuICAgIGR0UmVzdHJpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZDogMTYwLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjE4OiAxNjEsXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lzdHJhdGlvbkNhcmQ6IDE4NSxcbiAgICBkdEFQRUhDYXJkOiAxODYsXG4gICAgZHRDb3Vwb25Ub0RyaXZpbmdMaWNlbnNlOiAxODcsXG4gICAgZHRDcmV3TWVtYmVyQ2VydGlmaWNhdGU6IDE4OCxcbiAgICBkdERvY3VtZW50Rm9yUmV0dXJuOiAxODksXG4gICAgZHRFQ2FyZDogMTkwLFxuICAgIGR0RW1wbG95bWVudENhcmQ6IDE5MSxcbiAgICBkdEhLU0FSSW1taWdyYXRpb25Gb3JtOiAxOTIsXG4gICAgZHRJbW1pZ3JhbnRDYXJkOiAxOTMsXG4gICAgZHRMYWJvdXJDYXJkOiAxOTQsXG4gICAgZHRMYWlzc2V6UGFzc2VyOiAxOTUsXG4gICAgZHRMYXd5ZXJJZGVudGl0eUNlcnRpZmljYXRlOiAxOTYsXG4gICAgZHRMaWNlbnNlQ2FyZDogMTk3LFxuICAgIGR0UGFzc3BvcnRTdGF0ZWxlc3M6IDE5OCxcbiAgICBkdFBhc3Nwb3J0Q2hpbGQ6IDE5OSxcbiAgICBkdFBhc3Nwb3J0Q29uc3VsYXI6IDIwMCxcbiAgICBkdFBhc3Nwb3J0RGlwbG9tYXRpY1NlcnZpY2U6IDIwMSxcbiAgICBkdFBhc3Nwb3J0T2ZmaWNpYWw6IDIwMixcbiAgICBkdFBhc3Nwb3J0UHJvdmlzaW9uYWw6IDIwMyxcbiAgICBkdFBhc3Nwb3J0U3BlY2lhbDogMjA0LFxuICAgIGR0UGVybWlzc2lvblRvVGhlTG9jYWxCb3JkZXJUcmFmZmljOiAyMDUsXG4gICAgZHRTRURFU09MQ2FyZDogMjA3LFxuICAgIGR0U29jaWFsQ2FyZDogMjA4LFxuICAgIGR0VEJDYXJkOiAyMDksXG4gICAgZHRWZWhpY2xlUGFzc3BvcnQ6IDIxMCxcbiAgICBkdFdEb2N1bWVudDogMjExLFxuICAgIGR0RGlwbG9tYXRpY0lkZW50aXR5Q2FyZDogMjEyLFxuICAgIGR0Q29uc3VsYXJJZGVudGl0eUNhcmQ6IDIxMyxcbiAgICBkdEluY29tZVRheENhcmQ6IDIxNCxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdDogMjE1LFxuICAgIGR0RG9jdW1lbnRPZklkZW50aXR5OiAyMTYsXG4gICAgZHRCb3JkZXJDcm9zc2luZ1Blcm1pdDogMjE3LFxuICAgIGR0UGFzc3BvcnRMaW1pdGVkVmFsaWRpdHk6IDIxOCxcbiAgICBkdFNJTUNhcmQ6IDIxOSxcbiAgICBkdFRheENhcmQ6IDIyMCxcbiAgICBkdENvbXBhbnlDYXJkOiAyMjEsXG4gICAgZHREb21lc3RpY1Bhc3Nwb3J0OiAyMjIsXG4gICAgZHRJZGVudGl0eUNlcnRpZmljYXRlOiAyMjMsXG4gICAgZHRSZXNpZGVudElkQ2FyZDogMjI0LFxuICAgIGR0QXJtZWRGb3JjZXNJZGVudGl0eUNhcmQ6IDIyNSxcbiAgICBkdFByb2Zlc3Npb25hbENhcmQ6IDIyNixcbiAgICBkdFJlZ2lzdHJhdGlvblN0YW1wOiAyMjcsXG4gICAgZHREcml2ZXJDYXJkOiAyMjgsXG4gICAgZHREcml2ZXJUcmFpbmluZ0NlcnRpZmljYXRlOiAyMjksXG4gICAgZHRRdWFsaWZpY2F0aW9uRHJpdmluZ0xpY2Vuc2U6IDIzMCxcbiAgICBkdE1lbWJlcnNoaXBDYXJkOiAyMzEsXG4gICAgZHRQdWJsaWNWZWhpY2xlRHJpdmVyQXV0aG9yaXR5Q2FyZDogMjMyLFxuICAgIGR0TWFyaW5lTGljZW5zZTogMjMzLFxuICAgIGR0VGVtcG9yYXJ5TGVhcm5lckRyaXZpbmdMaWNlbnNlOiAyMzQsXG4gICAgZHRUZW1wb3JhcnlDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDIzNSxcbiAgICBkdEludGVyaW1JbnN0cnVjdGlvbmFsUGVybWl0OiAyMzYsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ29tcGV0ZW5jeTogMjM3LFxuICAgIGR0Q2VydGlmaWNhdGVPZlByb2ZpY2llbmN5OiAyMzgsXG4gICAgZHRUcmFkZUxpY2Vuc2U6IDIzOSxcbiAgICBkdFBhc3Nwb3J0UGFnZTogMjQwLFxuICAgIGR0SW52b2ljZTogMjQxLFxuICAgIGR0UGFzc2VuZ2VyTG9jYXRvckZvcm06IDI0Mixcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRhZyA9IHtcbiAgICBDTE9TRTogMTAwMSxcbiAgICBUT1JDSDogMTAwMixcbiAgICBDQVBUVVJFOiAxMDAzLFxuICAgIENIQU5HRV9GUkFNRTogMTAwNCxcbiAgICBTS0lQOiAxMDA1LFxuICAgIENBTUVSQV9TV0lUQ0g6IDEwMDYsXG59XG5cbmV4cG9ydCBjb25zdCBIb2xvQW5pbWF0aW9uVHlwZSA9IHtcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25Vbmtub3duOiAwLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVIb3Jpem9udGFsOiAxLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVWZXJ0aWNhbDogMixcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlTGVmdEJvdHRvbVJpZ2h0VG9wOiA0LFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVSaWdodEJvdHRvbUxlZnRUb3A6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBlUmVxdWVzdENvbW1hbmQgPSB7XG4gICAgZVJlcUNtZF9SRmlkX1NlbmREYXRhOiAxMDAsXG4gICAgZVJlcUNtZF9SRmlkX05vdGlmeTogMTAxLFxuICAgIGVSZXFDbWRfUkZpZF9HZXREYXRhRm9yU2NlbmFyaW86IDEwMixcbiAgICBlUmVxQ21kX1RvcmNoX0dldFVWRm90bzogMjAwLFxuICAgIGVSZXFDbWRfSW50ZXJuZXRTZW5kOiAzMDAsXG4gICAgZVJlcUNtZF9HZXRHdWlkOiA0MDAsXG4gICAgZVJlcUNtZF9XbHRUb0ltYWdlOiA0MDEsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uRm9udCA9IHtcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUw6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0xBQkVMOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUkVTVUxUX0xBQkVMOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfVElUTEVfVEVYVDogXCJyZmlkRW5hYmxlTmZjVGl0bGVUZXh0XCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX0RFU0NSSVBUSU9OX1RFWFQ6IFwicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19CVVRUT05fVEVYVDogXCJyZmlkRW5hYmxlTmZjQnV0dG9uVGV4dFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VGb3JtYXQgPSB7XG4gICAgUE5HOiAwLFxuICAgIEpQRzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVHcmFwaGljRmllbGRUeXBlID0ge1xuICAgIEdGX1BPUlRSQUlUOiAyMDEsXG4gICAgR0ZfRklOR0VSUFI6IDIwMixcbiAgICBHRl9FWUU6IDIwMyxcbiAgICBHRl9TSUdOQVRVUkU6IDIwNCxcbiAgICBHRl9CQVJfQ09ERTogMjA1LFxuICAgIEdGX1BST09GX09GX0NJVElaRU5TSElQOiAyMDYsXG4gICAgR0ZfRE9DVU1FTlRfSU1BR0U6IDIwNyxcbiAgICBHRl9DT0xPUl9EWU5BTUlDOiAyMDksXG4gICAgR0ZfR0hPU1RfUE9SVFJBSVQ6IDIxMCxcbiAgICBHRl9TVEFNUDogMjExLFxuICAgIEdGX1BPUlRSQUlUX09GX0NISUxEOiAyMTIsXG4gICAgR0ZfQ09OVEFDVF9DSElQOiAyMTMsXG4gICAgR0ZfT1RIRVI6IDI1MCxcbiAgICBHRl9GSU5HRVJfTEVGVF9USFVNQjogMzAwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0lOREVYOiAzMDEsXG4gICAgR0ZfRklOR0VSX0xFRlRfTUlERExFOiAzMDIsXG4gICAgR0ZfRklOR0VSX0xFRlRfUklORzogMzAzLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0xJVFRMRTogMzA0LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9USFVNQjogMzA1LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9JTkRFWDogMzA2LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9NSURETEU6IDMwNyxcbiAgICBHRl9GSU5HRVJfUklHSFRfUklORzogMzA4LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6IDMwOSxcbn1cblxuZXhwb3J0IGNvbnN0IFJlZ0RldmljZUNvbmZpZ1R5cGUgPSB7XG4gICAgREVWSUNFXzczMTA6IFwiREVWSUNFXzczMTBcIixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIFVOS05PV046IC0xLFxuICAgIExPVzogMCxcbiAgICBNRURJVU06IDEsXG4gICAgSElHSDogMixcbiAgICBQSE9UTzogMyxcbiAgICBJTlBVVF9QUklPUklUWTogNCxcbiAgICBQUkVTRVRfMTI4MHg3MjA6IDYsXG4gICAgUFJFU0VUXzE5MjB4MTA4MDogNyxcbiAgICBQUkVTRVRfMzg0MHgyMTYwOiA4LFxuICAgIEZSQU1FXzk2MHg1NDA6IDksXG4gICAgRlJBTUVfMTI4MHg3MjA6IDEwLFxuICAgIFBSRVNFVF82NDB4NDgwOiAxMixcbiAgICBQUkVTRVRfMzUyeDI4ODogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FNRVJBMTogMSxcbiAgICBDQU1FUkEyOiAyLFxufVxuXG5leHBvcnQgY29uc3QgQ2FwdHVyZU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQVBUVVJFX1ZJREVPOiAxLFxuICAgIENBUFRVUkVfRlJBTUU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tSZXN1bHQgPSB7XG4gICAgQ0hfQ0hFQ0tfRVJST1I6IDAsXG4gICAgQ0hfQ0hFQ0tfT0s6IDEsXG4gICAgQ0hfQ0hFQ0tfV0FTX05PVF9ET05FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfVGVybWluYWxUeXBlID0ge1xuICAgIFRFVF9VTkRFRklORUQ6IDAsXG4gICAgVEVUX0lOU1BFQ1RJT05fU1lTVEVNOiAxLFxuICAgIFRFVF9BVVRIRU5USUNBVElPTl9URVJNSU5BTDogMixcbiAgICBURVRfU0lHTkFUVVJFX1RFUk1JTkFMOiAzLFxuICAgIFRFVF9VTkFVVEhFTlRJQ0FURURfVEVSTUlOQUw6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9EYXRhRmlsZV9UeXBlID0ge1xuICAgIERGVF9VTlNQRUNJRklFRDogMCxcbiAgICBERlRfUEFTU1BPUlRfREcxOiAxLFxuICAgIERGVF9QQVNTUE9SVF9ERzI6IDIsXG4gICAgREZUX1BBU1NQT1JUX0RHMzogMyxcbiAgICBERlRfUEFTU1BPUlRfREc0OiA0LFxuICAgIERGVF9QQVNTUE9SVF9ERzU6IDUsXG4gICAgREZUX1BBU1NQT1JUX0RHNjogNixcbiAgICBERlRfUEFTU1BPUlRfREc3OiA3LFxuICAgIERGVF9QQVNTUE9SVF9ERzg6IDgsXG4gICAgREZUX1BBU1NQT1JUX0RHOTogOSxcbiAgICBERlRfUEFTU1BPUlRfREcxMDogMTAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTE6IDExLFxuICAgIERGVF9QQVNTUE9SVF9ERzEyOiAxMixcbiAgICBERlRfUEFTU1BPUlRfREcxMzogMTMsXG4gICAgREZUX1BBU1NQT1JUX0RHMTQ6IDE0LFxuICAgIERGVF9QQVNTUE9SVF9ERzE1OiAxNSxcbiAgICBERlRfUEFTU1BPUlRfREcxNjogMTYsXG4gICAgREZUX1BBU1NQT1JUX0RHMTc6IDE3LFxuICAgIERGVF9QQVNTUE9SVF9ERzE4OiAxOCxcbiAgICBERlRfUEFTU1BPUlRfREcxOTogMTksXG4gICAgREZUX1BBU1NQT1JUX0RHMjA6IDIwLFxuICAgIERGVF9QQVNTUE9SVF9TT0Q6IDIxLFxuICAgIERGVF9QQVNTUE9SVF9DVkNBOiAyMixcbiAgICBERlRfUEFTU1BPUlRfQ09NOiAyMyxcbiAgICBERlRfRFRDX0RHMTc6IDU3LFxuICAgIERGVF9EVENfREcxODogNTgsXG4gICAgREZUX0RUQ19ERzIyOiA2MixcbiAgICBERlRfRFRDX0RHMjM6IDYzLFxuICAgIERGVF9EVENfREcyNDogNjQsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MDAgKyAzMixcbiAgICBERlRfVkRTOiA5MDAsXG4gICAgREZUX1ZEU05DOiA5MDEsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVZpc3VhbEZpZWxkVHlwZSA9IHtcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19DT0RFOiAwLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERTogMSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVI6IDIsXG4gICAgRlRfREFURV9PRl9FWFBJUlk6IDMsXG4gICAgRlRfREFURV9PRl9JU1NVRTogNCxcbiAgICBGVF9EQVRFX09GX0JJUlRIOiA1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIOiA2LFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUjogNyxcbiAgICBGVF9TVVJOQU1FOiA4LFxuICAgIEZUX0dJVkVOX05BTUVTOiA5LFxuICAgIEZUX01PVEhFUlNfTkFNRTogMTAsXG4gICAgRlRfTkFUSU9OQUxJVFk6IDExLFxuICAgIEZUX1NFWDogMTIsXG4gICAgRlRfSEVJR0hUOiAxMyxcbiAgICBGVF9XRUlHSFQ6IDE0LFxuICAgIEZUX0VZRVNfQ09MT1I6IDE1LFxuICAgIEZUX0hBSVJfQ09MT1I6IDE2LFxuICAgIEZUX0FERFJFU1M6IDE3LFxuICAgIEZUX0RPTk9SOiAxOCxcbiAgICBGVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxOSxcbiAgICBGVF9ETF9DTEFTUzogMjAsXG4gICAgRlRfRExfRU5ET1JTRUQ6IDIxLFxuICAgIEZUX0RMX1JFU1RSSUNUSU9OX0NPREU6IDIyLFxuICAgIEZUX0RMX1VOREVSXzIxX0RBVEU6IDIzLFxuICAgIEZUX0FVVEhPUklUWTogMjQsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDI1LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREU6IDI2LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUjogMjcsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVI6IDI4LFxuICAgIEZUX1ZJU0FfSUQ6IDI5LFxuICAgIEZUX1ZJU0FfQ0xBU1M6IDMwLFxuICAgIEZUX1ZJU0FfU1VCX0NMQVNTOiAzMSxcbiAgICBGVF9NUlpfU1RSSU5HXzE6IDMyLFxuICAgIEZUX01SWl9TVFJJTkdfMjogMzMsXG4gICAgRlRfTVJaX1NUUklOR18zOiAzNCxcbiAgICBGVF9NUlpfVFlQRTogMzUsXG4gICAgRlRfT1BUSU9OQUxfREFUQTogMzYsXG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTogMzcsXG4gICAgRlRfSVNTVUlOR19TVEFURV9OQU1FOiAzOCxcbiAgICBGVF9QTEFDRV9PRl9JU1NVRTogMzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOiA0MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOiA0MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTogNDIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOiA0MyxcbiAgICBGVF9GSU5BTF9DSEVDS1NVTTogNDQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOiA0NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTogNDYsXG4gICAgRlRfVklTQV9JRF9DSEVDS1NVTTogNDcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06IDQ4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06IDQ5LFxuICAgIEZUX09USEVSOiA1MCxcbiAgICBGVF9NUlpfU1RSSU5HUzogNTEsXG4gICAgRlRfTkFNRV9TVUZGSVg6IDUyLFxuICAgIEZUX05BTUVfUFJFRklYOiA1MyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOiA1NCxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOiA1NSxcbiAgICBGVF9ET0NVTUVOVF9TRVJJRVM6IDU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVI6IDU3LFxuICAgIEZUX1JFR19DRVJUX0NBUl9NT0RFTDogNTgsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOiA1OSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjogNjAsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX1RZUEU6IDYxLFxuICAgIEZUX1JFR19DRVJUX01BWF9XRUlHSFQ6IDYyLFxuICAgIEZUX1JFR19DRVJUX1dFSUdIVDogNjMsXG4gICAgRlRfQUREUkVTU19BUkVBOiA2NCxcbiAgICBGVF9BRERSRVNTX1NUQVRFOiA2NSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HOiA2NixcbiAgICBGVF9BRERSRVNTX0hPVVNFOiA2NyxcbiAgICBGVF9BRERSRVNTX0ZMQVQ6IDY4LFxuICAgIEZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjogNjksXG4gICAgRlRfREFURV9PRl9SRUdJU1RSQVRJT046IDcwLFxuICAgIEZUX1JFU0lERU5UX0ZST006IDcxLFxuICAgIEZUX1JFU0lERU5UX1VOVElMOiA3MixcbiAgICBGVF9BVVRIT1JJVFlfQ09ERTogNzMsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTogNzQsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTogNzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVQ6IDc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWTogNzcsXG4gICAgRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogNzgsXG4gICAgRlRfQUREUkVTU19QT1NUQUxfQ09ERTogNzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOiA4MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDogODIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MyxcbiAgICBGVF9GSU5BTF9DSEVDS19ESUdJVDogODQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDogODYsXG4gICAgRlRfVklTQV9JRF9DSEVDS19ESUdJVDogODcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6IDg4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6IDg5LFxuICAgIEZUX1BFUk1JVF9ETF9DTEFTUzogOTAsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOiA5MSxcbiAgICBGVF9QRVJNSVRfSURFTlRJRklFUjogOTIsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6IDkzLFxuICAgIEZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOiA5NCxcbiAgICBGVF9QRVJNSVRfRU5ET1JTRUQ6IDk1LFxuICAgIEZUX0lTU1VFX1RJTUVTVEFNUDogOTYsXG4gICAgRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6IDk3LFxuICAgIEZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOiA5OCxcbiAgICBGVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOiA5OSxcbiAgICBGVF9WSVNBX1RZUEU6IDEwMCxcbiAgICBGVF9WSVNBX1ZBTElEX0ZST006IDEwMSxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMOiAxMDIsXG4gICAgRlRfRFVSQVRJT05fT0ZfU1RBWTogMTAzLFxuICAgIEZUX05VTUJFUl9PRl9FTlRSSUVTOiAxMDQsXG4gICAgRlRfREFZOiAxMDUsXG4gICAgRlRfTU9OVEg6IDEwNixcbiAgICBGVF9ZRUFSOiAxMDcsXG4gICAgRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6IDEwOCxcbiAgICBGVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6IDEwOSxcbiAgICBGVF9BS0FfREFURV9PRl9CSVJUSDogMTEwLFxuICAgIEZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxMTEsXG4gICAgRlRfQUtBX1NVUk5BTUU6IDExMixcbiAgICBGVF9BS0FfR0lWRU5fTkFNRVM6IDExMyxcbiAgICBGVF9BS0FfTkFNRV9TVUZGSVg6IDExNCxcbiAgICBGVF9BS0FfTkFNRV9QUkVGSVg6IDExNSxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOiAxMTYsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0NJVFk6IDExNyxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDExOCxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6IDExOSxcbiAgICBGVF9BVURJVF9JTkZPUk1BVElPTjogMTIwLFxuICAgIEZUX0lOVkVOVE9SWV9OVU1CRVI6IDEyMSxcbiAgICBGVF9SQUNFX0VUSE5JQ0lUWTogMTIyLFxuICAgIEZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOiAxMjMsXG4gICAgRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6IDEyNCxcbiAgICBGVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTogMTI1LFxuICAgIEZUX0ZBTUlMWV9OQU1FOiAxMjYsXG4gICAgRlRfR0lWRU5fTkFNRVNfUlVTOiAxMjcsXG4gICAgRlRfVklTQV9JRF9SVVM6IDEyOCxcbiAgICBGVF9GQVRIRVJTX05BTUU6IDEyOSxcbiAgICBGVF9GQVRIRVJTX05BTUVfUlVTOiAxMzAsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOiAxMzEsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfUlVTOiAxMzIsXG4gICAgRlRfQVVUSE9SSVRZX1JVUzogMTMzLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOiAxMzQsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOiAxMzUsXG4gICAgRlRfRU5HSU5FX1BPV0VSOiAxMzYsXG4gICAgRlRfRU5HSU5FX1ZPTFVNRTogMTM3LFxuICAgIEZUX0NIQVNTSVNfTlVNQkVSOiAxMzgsXG4gICAgRlRfRU5HSU5FX05VTUJFUjogMTM5LFxuICAgIEZUX0VOR0lORV9NT0RFTDogMTQwLFxuICAgIEZUX1ZFSElDTEVfQ0FURUdPUlk6IDE0MSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUjogMTQyLFxuICAgIEZUX0NPTlRST0xfTk86IDE0MyxcbiAgICBGVF9QQVJSRU5UU19HSVZFTl9OQU1FUzogMTQ0LFxuICAgIEZUX1NFQ09ORF9TVVJOQU1FOiAxNDUsXG4gICAgRlRfTUlERExFX05BTUU6IDE0NixcbiAgICBGVF9SRUdfQ0VSVF9WSU46IDE0NyxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6IDE0OCxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06IDE0OSxcbiAgICBGVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6IDE1MCxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6IDE1MSxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6IDE1MixcbiAgICBGVF9MSU5FXzFfQ0hFQ0tTVU06IDE1MyxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tTVU06IDE1NCxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tTVU06IDE1NSxcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOiAxNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTogMTU3LFxuICAgIEZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6IDE1OCxcbiAgICBGVF9DQVJEX0FDQ0VTU19OVU1CRVI6IDE1OSxcbiAgICBGVF9NQVJJVEFMX1NUQVRVUzogMTYwLFxuICAgIEZUX0NPTVBBTllfTkFNRTogMTYxLFxuICAgIEZUX1NQRUNJQUxfTk9URVM6IDE2MixcbiAgICBGVF9TVVJOQU1FX09GX1NQT1NFOiAxNjMsXG4gICAgRlRfVFJBQ0tJTkdfTlVNQkVSOiAxNjQsXG4gICAgRlRfQk9PS0xFVF9OVU1CRVI6IDE2NSxcbiAgICBGVF9DSElMRFJFTjogMTY2LFxuICAgIEZUX0NPUFk6IDE2NyxcbiAgICBGVF9TRVJJQUxfTlVNQkVSOiAxNjgsXG4gICAgRlRfRE9TU0lFUl9OVU1CRVI6IDE2OSxcbiAgICBGVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDE3MCxcbiAgICBGVF9URVJSSVRPUklBTF9WQUxJRElUWTogMTcxLFxuICAgIEZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOiAxNzIsXG4gICAgRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6IDE3MyxcbiAgICBGVF9ETF9VTkRFUl8xOF9EQVRFOiAxNzQsXG4gICAgRlRfRExfUkVDT1JEX0NSRUFURUQ6IDE3NSxcbiAgICBGVF9ETF9EVVBMSUNBVEVfREFURTogMTc2LFxuICAgIEZUX0RMX0lTU19UWVBFOiAxNzcsXG4gICAgRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6IDE3OCxcbiAgICBGVF9ERVNUSU5BVElPTjogMTc5LFxuICAgIEZUX0JMT09EX0dST1VQOiAxODAsXG4gICAgRlRfU0VRVUVOQ0VfTlVNQkVSOiAxODEsXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9UWVBFOiAxODIsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01BUks6IDE4MyxcbiAgICBGVF9UUkFOU0FDVElPTl9OVU1CRVI6IDE4NCxcbiAgICBGVF9BR0U6IDE4NSxcbiAgICBGVF9GT0xJT19OVU1CRVI6IDE4NixcbiAgICBGVF9WT1RFUl9LRVk6IDE4NyxcbiAgICBGVF9BRERSRVNTX01VTklDSVBBTElUWTogMTg4LFxuICAgIEZUX0FERFJFU1NfTE9DQVRJT046IDE4OSxcbiAgICBGVF9TRUNUSU9OOiAxOTAsXG4gICAgRlRfT0NSX05VTUJFUjogMTkxLFxuICAgIEZUX0ZFREVSQUxfRUxFQ1RJT05TOiAxOTIsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUjogMTkzLFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06IDE5NCxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOiAxOTUsXG4gICAgRlRfVklTQV9OVU1CRVI6IDE5NixcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS1NVTTogMTk3LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOiAxOTgsXG4gICAgRlRfVk9URVI6IDE5OSxcbiAgICBGVF9QUkVWSU9VU19UWVBFOiAyMDAsXG4gICAgRlRfRklFTERfRlJPTV9NUlo6IDIyMCxcbiAgICBGVF9DVVJSRU5UX0RBVEU6IDIyMSxcbiAgICBGVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6IDI1MSxcbiAgICBGVF9CQU5LTk9URV9OVU1CRVI6IDI1MixcbiAgICBGVF9DU0NfQ09ERTogMjUzLFxuICAgIEZUX0FSVElTVElDX05BTUU6IDI1NCxcbiAgICBGVF9BQ0FERU1JQ19USVRMRTogMjU1LFxuICAgIEZUX0FERFJFU1NfQ09VTlRSWTogMjU2LFxuICAgIEZUX0FERFJFU1NfWklQQ09ERTogMjU3LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOiAyNTgsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6IDI1OSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDogMjYwLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTogMjYxLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6IDI2MixcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6IDI2MyxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6IDI2NCxcbiAgICBGVF9DRExfQ0xBU1M6IDI2NSxcbiAgICBGVF9ETF9VTkRFUl8xOV9EQVRFOiAyNjYsXG4gICAgRlRfV0VJR0hUX1BPVU5EUzogMjY3LFxuICAgIEZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOiAyNjgsXG4gICAgRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOiAyNjksXG4gICAgRlRfUkVWSVNJT05fREFURTogMjcwLFxuICAgIEZUX0NPTVBMSUFOQ0VfVFlQRTogMjcxLFxuICAgIEZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046IDI3MixcbiAgICBGVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046IDI3MyxcbiAgICBGVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOiAyNzQsXG4gICAgRlRfRVhBTV9EQVRFOiAyNzUsXG4gICAgRlRfT1JHQU5JWkFUSU9OOiAyNzYsXG4gICAgRlRfREVQQVJUTUVOVDogMjc3LFxuICAgIEZUX1BBWV9HUkFERTogMjc4LFxuICAgIEZUX1JBTks6IDI3OSxcbiAgICBGVF9CRU5FRklUU19OVU1CRVI6IDI4MCxcbiAgICBGVF9TUE9OU09SX1NFUlZJQ0U6IDI4MSxcbiAgICBGVF9TUE9OU09SX1NUQVRVUzogMjgyLFxuICAgIEZUX1NQT05TT1I6IDI4MyxcbiAgICBGVF9SRUxBVElPTlNISVA6IDI4NCxcbiAgICBGVF9VU0NJUzogMjg1LFxuICAgIEZUX0NBVEVHT1JZOiAyODYsXG4gICAgRlRfQ09ORElUSU9OUzogMjg3LFxuICAgIEZUX0lERU5USUZJRVI6IDI4OCxcbiAgICBGVF9DT05GSUdVUkFUSU9OOiAyODksXG4gICAgRlRfRElTQ1JFVElPTkFSWV9EQVRBOiAyOTAsXG4gICAgRlRfTElORV8xX09QVElPTkFMX0RBVEE6IDI5MSxcbiAgICBGVF9MSU5FXzJfT1BUSU9OQUxfREFUQTogMjkyLFxuICAgIEZUX0xJTkVfM19PUFRJT05BTF9EQVRBOiAyOTMsXG4gICAgRlRfRVFWX0NPREU6IDI5NCxcbiAgICBGVF9BTFRfQ09ERTogMjk1LFxuICAgIEZUX0JJTkFSWV9DT0RFOiAyOTYsXG4gICAgRlRfUFNFVURPX0NPREU6IDI5NyxcbiAgICBGVF9GRUU6IDI5OCxcbiAgICBGVF9TVEFNUF9OVU1CRVI6IDI5OSxcbiAgICBGVF9TQkhfU0VDVVJJVFlPUFRJT05TOiAzMDAsXG4gICAgRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6IDMwMSxcbiAgICBGVF9EQVRFX09GX0NSRUFUSU9OOiAzMDIsXG4gICAgRlRfVkFMSURJVFlfUEVSSU9EOiAzMDMsXG4gICAgRlRfUEFUUk9OX0hFQURFUl9WRVJTSU9OOiAzMDQsXG4gICAgRlRfQkRCX1RZUEU6IDMwNSxcbiAgICBGVF9CSU9NRVRSSUNfVFlQRTogMzA2LFxuICAgIEZUX0JJT01FVFJJQ19TVUJUWVBFOiAzMDcsXG4gICAgRlRfQklPTUVUUklDX1BST0RVQ1RJRDogMzA4LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6IDMwOSxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX1RZUEU6IDMxMCxcbiAgICBGVF9QSE9ORTogMzExLFxuICAgIEZUX1BST0ZFU1NJT046IDMxMixcbiAgICBGVF9USVRMRTogMzEzLFxuICAgIEZUX1BFUlNPTkFMX1NVTU1BUlk6IDMxNCxcbiAgICBGVF9PVEhFUl9WQUxJRF9JRDogMzE1LFxuICAgIEZUX0NVU1RPRFlfSU5GTzogMzE2LFxuICAgIEZUX09USEVSX05BTUU6IDMxNyxcbiAgICBGVF9PQlNFUlZBVElPTlM6IDMxOCxcbiAgICBGVF9UQVg6IDMxOSxcbiAgICBGVF9EQVRFX09GX1BFUlNPTkFMSVpBVElPTjogMzIwLFxuICAgIEZUX1BFUlNPTkFMSVpBVElPTl9TTjogMzIxLFxuICAgIEZUX09USEVSUEVSU09OX05BTUU6IDMyMixcbiAgICBGVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDogMzIzLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX05BTUU6IDMyNCxcbiAgICBGVF9QRVJTT05UT05PVElGWV9QSE9ORTogMzI1LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0FERFJFU1M6IDMyNixcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6IDMyNyxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOiAzMjgsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOiAzMjksXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURUTzogMzMwLFxuICAgIEZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOiAzMzEsXG4gICAgRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6IDMzMixcbiAgICBGVF9BRE1JTklTVFJBVElWRV9OVU1CRVI6IDMzMyxcbiAgICBGVF9ET0NVTUVOVF9ESVNDUklNSU5BVE9SOiAzMzQsXG4gICAgRlRfREFUQV9ESVNDUklNSU5BVE9SOiAzMzUsXG4gICAgRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6IDMzNixcbiAgICBGVF9EVENfVkVSU0lPTjogMzM3LFxuICAgIEZUX0RUQ19JRDogMzM4LFxuICAgIEZUX0RUQ19EQVRFX09GX0VYUElSWTogMzM5LFxuICAgIEZUX0dOSUJfTlVNQkVSOiAzNDAsXG4gICAgRlRfREVQVF9OVU1CRVI6IDM0MSxcbiAgICBGVF9URUxFWF9DT0RFOiAzNDIsXG4gICAgRlRfQUxMRVJHSUVTOiAzNDMsXG4gICAgRlRfU1BfQ09ERTogMzQ0LFxuICAgIEZUX0NPVVJUX0NPREU6IDM0NSxcbiAgICBGVF9DVFk6IDM0NixcbiAgICBGVF9TUE9OU09SX1NTTjogMzQ3LFxuICAgIEZUX0RPX0RfTlVNQkVSOiAzNDgsXG4gICAgRlRfTUNfTk9WSUNFX0RBVEU6IDM0OSxcbiAgICBGVF9EVUZfTlVNQkVSOiAzNTAsXG4gICAgRlRfQUdZOiAzNTEsXG4gICAgRlRfUE5SX0NPREU6IDM1MixcbiAgICBGVF9GUk9NX0FJUlBPUlRfQ09ERTogMzUzLFxuICAgIEZUX1RPX0FJUlBPUlRfQ09ERTogMzU0LFxuICAgIEZUX0ZMSUdIVF9OVU1CRVI6IDM1NSxcbiAgICBGVF9EQVRFX09GX0ZMSUdIVDogMzU2LFxuICAgIEZUX1NFQVRfTlVNQkVSOiAzNTcsXG4gICAgRlRfREFURV9PRl9JU1NVRV9CT0FSRElOR19QQVNTOiAzNTgsXG4gICAgRlRfQ0NXX1VOVElMOiAzNTksXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS1NVTTogMzYwLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM2MSxcbiAgICBGVF9ST09NX05VTUJFUjogMzYyLFxuICAgIEZUX1JFTElHSU9OOiAzNjMsXG4gICAgRlRfUkVNQUlOREVSX1RFUk06IDM2NCxcbiAgICBGVF9FTEVDVFJPTklDX1RJQ0tFVF9JTkRJQ0FUT1I6IDM2NSxcbiAgICBGVF9DT01QQVJUTUVOVF9DT0RFOiAzNjYsXG4gICAgRlRfQ0hFQ0tfSU5fU0VRVUVOQ0VfTlVNQkVSOiAzNjcsXG4gICAgRlRfQUlSTElORV9ERVNJR05BVE9SX09GX0JPQVJESU5HX1BBU1NfSVNTVUVSOiAzNjgsXG4gICAgRlRfQUlSTElORV9OVU1FUklDX0NPREU6IDM2OSxcbiAgICBGVF9USUNLRVRfTlVNQkVSOiAzNzAsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfQUlSTElORV9ERVNJR05BVE9SOiAzNzEsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfTlVNQkVSOiAzNzIsXG4gICAgRlRfRlJFRV9CQUdHQUdFX0FMTE9XQU5DRTogMzczLFxuICAgIEZUX1BERl80MTdfQ09ERUM6IDM3NCxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS1NVTTogMzc1LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNzYsXG4gICAgRlRfVkVURVJBTjogMzc3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX0ZST006IDM3OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9UTzogMzc5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX05PVEVTOiAzODAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX0ZST006IDM4MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfVE86IDM4MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfTk9URVM6IDM4MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfRlJPTTogMzg0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9UTzogMzg1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9OT1RFUzogMzg2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0ZST006IDM4NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9UTzogMzg4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX05PVEVTOiAzODksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX0ZST006IDM5MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfVE86IDM5MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfTk9URVM6IDM5MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9GUk9NOiAzOTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfVE86IDM5NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9OT1RFUzogMzk1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9GUk9NOiAzOTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX1RPOiAzOTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX05PVEVTOiAzOTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9GUk9NOiAzOTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9UTzogNDAwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfTk9URVM6IDQwMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX0ZST006IDQwMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX1RPOiA0MDMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9OT1RFUzogNDA0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfRlJPTTogNDA1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfVE86IDQwNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX05PVEVTOiA0MDcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9GUk9NOiA0MDgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9UTzogNDA5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfTk9URVM6IDQxMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX0ZST006IDQxMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX1RPOiA0MTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9OT1RFUzogNDEzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9GUk9NOiA0MTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX1RPOiA0MTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX05PVEVTOiA0MTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX0ZST006IDQxNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfVE86IDQxOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfTk9URVM6IDQxOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfRlJPTTogNDIwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9UTzogNDIxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9OT1RFUzogNDIyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fRlJPTTogNDIzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fVE86IDQyNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX05PVEVTOiA0MjUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfRlJPTTogNDI2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX1RPOiA0MjcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfTk9URVM6IDQyOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9GUk9NOiA0MjksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfVE86IDQzMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9OT1RFUzogNDMxLFxuICAgIEZUX1NVUk5BTUVfQVRfQklSVEg6IDQzMixcbiAgICBGVF9DSVZJTF9TVEFUVVM6IDQzMyxcbiAgICBGVF9OVU1CRVJfT0ZfU0VBVFM6IDQzNCxcbiAgICBGVF9OVU1CRVJfT0ZfU1RBTkRJTkdfUExBQ0VTOiA0MzUsXG4gICAgRlRfTUFYX1NQRUVEOiA0MzYsXG4gICAgRlRfRlVFTF9UWVBFOiA0MzcsXG4gICAgRlRfRUNfRU5WSVJPTk1FTlRBTF9UWVBFOiA0MzgsXG4gICAgRlRfUE9XRVJfV0VJR0hUX1JBVElPOiA0MzksXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9CUkFLRUQ6IDQ0MCxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX1VOQlJBS0VEOiA0NDEsXG4gICAgRlRfVFJBTlNNSVNTSU9OX1RZUEU6IDQ0MixcbiAgICBGVF9UUkFJTEVSX0hJVENIOiA0NDMsXG4gICAgRlRfQUNDT01QQU5JRURfQlk6IDQ0NCxcbiAgICBGVF9QT0xJQ0VfRElTVFJJQ1Q6IDQ0NSxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFOiA0NDYsXG4gICAgRlRfUEFZTE9BRF9DQVBBQ0lUWTogNDQ3LFxuICAgIEZUX05VTUJFUl9PRl9BWEVMUzogNDQ4LFxuICAgIEZUX1BFUk1JU1NJQkxFX0FYTEVfTE9BRDogNDQ5LFxuICAgIEZUX1BSRUNJTkNUOiA0NTAsXG4gICAgRlRfSU5WSVRFRF9CWTogNDUxLFxuICAgIEZUX1BVUlBPU0VfT0ZfRU5UUlk6IDQ1MixcbiAgICBGVF9TS0lOX0NPTE9SOiA0NTMsXG4gICAgRlRfQ09NUExFWElPTjogNDU0LFxuICAgIEZUX0FJUlBPUlRfRlJPTTogNDU1LFxuICAgIEZUX0FJUlBPUlRfVE86IDQ1NixcbiAgICBGVF9BSVJMSU5FX05BTUU6IDQ1NyxcbiAgICBGVF9BSVJMSU5FX05BTUVfRlJFUVVFTlRfRkxZRVI6IDQ1OCxcbiAgICBGVF9MSUNFTlNFX05VTUJFUjogNDU5LFxuICAgIEZUX0lOX1RBTktTOiA0NjAsXG4gICAgRlRfRVhFUFRfSU5fVEFOS1M6IDQ2MSxcbiAgICBGVF9GQVNUX1RSQUNLOiA0NjIsXG4gICAgRlRfT1dORVI6IDQ2MyxcbiAgICBGVF9NUlpfU1RSSU5HU19JQ0FPX1JGSUQ6IDQ2NCxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRTogNDY1LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLU1VNOiA0NjYsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6IDQ2NyxcbiAgICBGVF9DRU5UVVJZX0RBVEVfT0ZfQklSVEg6IDQ2OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfRlJPTTogNDY5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19UTzogNDcwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19OT1RFUzogNDcxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9GUk9NOiA0NzIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX1RPOiA0NzMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX05PVEVTOiA0NzQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006IDQ3NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfVE86IDQ3NixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6IDQ3NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfRlJPTTogNDc4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9UTzogNDc5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9OT1RFUzogNDgwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfRlJPTTogNDgxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfVE86IDQ4MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOiA0ODMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTogNDg0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX1RPOiA0ODUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfTk9URVM6IDQ4NixcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9GUk9NOiA0ODcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfVE86IDQ4OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9OT1RFUzogNDg5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19GUk9NOiA0OTAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX1RPOiA0OTEsXG4gICAgRlRfRExDX0xBU1NDT0RFX0xDX05PVEVTOiA0OTIsXG4gICAgRlRfQkFOS0NBUkROVU1CRVI6IDQ5MyxcbiAgICBGVF9CQU5LQ0FSRFZBTElEVEhSVTogNDk0LFxuICAgIEZUX1RBWF9OVU1CRVI6IDQ5NSxcbiAgICBGVF9IRUFMVEhfTlVNQkVSOiA0OTYsXG4gICAgRlRfR1JBTkRGQVRIRVJOQU1FOiA0OTcsXG4gICAgRlRfU0VMRUNURUVfSU5ESUNBVE9SOiA0OTgsXG4gICAgRlRfTU9USEVSX1NVUk5BTUU6IDQ5OSxcbiAgICBGVF9NT1RIRVJfR0lWRU5OQU1FOiA1MDAsXG4gICAgRlRfRkFUSEVSX1NVUk5BTUU6IDUwMSxcbiAgICBGVF9GQVRIRVJfR0lWRU5OQU1FOiA1MDIsXG4gICAgRlRfTU9USEVSX0RBVEVPRkJJUlRIOiA1MDMsXG4gICAgRlRfRkFUSEVSX0RBVEVPRkJJUlRIOiA1MDQsXG4gICAgRlRfTU9USEVSX1BFUlNPTkFMTlVNQkVSOiA1MDUsXG4gICAgRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOiA1MDYsXG4gICAgRlRfTU9USEVSX1BMQUNFT0ZCSVJUSDogNTA3LFxuICAgIEZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6IDUwOCxcbiAgICBGVF9NT1RIRVJfQ09VTlRSWU9GQklSVEg6IDUwOSxcbiAgICBGVF9GQVRIRVJfQ09VTlRSWU9GQklSVEg6IDUxMCxcbiAgICBGVF9EQVRFX0ZJUlNUX1JFTkVXQUw6IDUxMSxcbiAgICBGVF9EQVRFX1NFQ09ORF9SRU5FV0FMOiA1MTIsXG4gICAgRlRfUExBQ0VfT0ZfRVhBTUlOQVRJT046IDUxMyxcbiAgICBGVF9BUFBMSUNBVElPTl9OVU1CRVI6IDUxNCxcbiAgICBGVF9WT1VDSEVSX05VTUJFUjogNTE1LFxuICAgIEZUX0FVVEhPUklaQVRJT05fTlVNQkVSOiA1MTYsXG4gICAgRlRfRkFDVUxUWTogNTE3LFxuICAgIEZUX0ZPUk1fT0ZfRURVQ0FUSU9OOiA1MTgsXG4gICAgRlRfRE5JX05VTUJFUjogNTE5LFxuICAgIEZUX1JFVElSRU1FTlRfTlVNQkVSOiA1MjAsXG4gICAgRlRfUFJPRkVTU0lPTkFMX0lEX05VTUJFUjogNTIxLFxuICAgIEZUX0FHRV9BVF9JU1NVRTogNTIyLFxuICAgIEZUX1lFQVJTX1NJTkNFX0lTU1VFOiA1MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX0ZST006IDUyNCxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfTk9URVM6IDUyNSxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfVE86IDUyNixcbiAgICBGVF9ETENMQVNTQ09ERV9DM19GUk9NOiA1MjcsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfTk9URVM6IDUyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19UTzogNTI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfRlJPTTogNTMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6IDUzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX1RPOiA1MzIsXG4gICAgRlRfRExDTEFTU0NPREVfRl9GUk9NOiA1MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRl9OT1RFUzogNTM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfVE86IDUzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9GUk9NOiA1MzYsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfTk9URVM6IDUzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9UTzogNTM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOiA1MzksXG4gICAgRlRfRExDTEFTU0NPREVfRkExX05PVEVTOiA1NDAsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX1RPOiA1NDEsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfRlJPTTogNTQyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOiA1NDMsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfVE86IDU0NCxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9GUk9NOiA1NDUsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfTk9URVM6IDU0NixcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9UTzogNTQ3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfRlJPTTogNTQ4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6IDU0OSxcbiAgICBGVF9ETENMQVNTQ09ERV9IX1RPOiA1NTAsXG4gICAgRlRfRExDTEFTU0NPREVfSV9GUk9NOiA1NTEsXG4gICAgRlRfRExDTEFTU0NPREVfSV9OT1RFUzogNTUyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfVE86IDU1MyxcbiAgICBGVF9ETENMQVNTQ09ERV9LX0ZST006IDU1NCxcbiAgICBGVF9ETENMQVNTQ09ERV9LX05PVEVTOiA1NTUsXG4gICAgRlRfRExDTEFTU0NPREVfS19UTzogNTU2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX0ZST006IDU1NyxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19OT1RFUzogNTU4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX1RPOiA1NTksXG4gICAgRlRfRExDTEFTU0NPREVfTl9GUk9NOiA1NjAsXG4gICAgRlRfRExDTEFTU0NPREVfTl9OT1RFUzogNTYxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fVE86IDU2MixcbiAgICBGVF9ETENMQVNTQ09ERV9TX0ZST006IDU2MyxcbiAgICBGVF9ETENMQVNTQ09ERV9TX05PVEVTOiA1NjQsXG4gICAgRlRfRExDTEFTU0NPREVfU19UTzogNTY1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX0ZST006IDU2NixcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9OT1RFUzogNTY3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX1RPOiA1NjgsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fRlJPTTogNTY5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOiA1NzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fVE86IDU3MSxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9GUk9NOiA1NzIsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfTk9URVM6IDU3MyxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9UTzogNTc0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX0ZST006IDU3NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9OT1RFUzogNTc2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX1RPOiA1NzcsXG4gICAgRlRfRExDTEFTU0NPREVfVl9GUk9NOiA1NzgsXG4gICAgRlRfRExDTEFTU0NPREVfVl9OT1RFUzogNTc5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfVE86IDU4MCxcbiAgICBGVF9ETENMQVNTQ09ERV9XX0ZST006IDU4MSxcbiAgICBGVF9ETENMQVNTQ09ERV9XX05PVEVTOiA1ODIsXG4gICAgRlRfRExDTEFTU0NPREVfV19UTzogNTgzLFxuICAgIEZUX1VSTDogNTg0LFxuICAgIEZUX0NBTElCRVI6IDU4NSxcbiAgICBGVF9NT0RFTDogNTg2LFxuICAgIEZUX01BS0U6IDU4NyxcbiAgICBGVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOiA1ODgsXG4gICAgRlRfU1VSTkFNRV9PRl9IVVNCQU5EX0FGVEVSX1JFR0lTVFJBVElPTjogNTg5LFxuICAgIEZUX1NVUk5BTUVfT0ZfV0lGRV9BRlRFUl9SRUdJU1RSQVRJT046IDU5MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6IDU5MSxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6IDU5MixcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9GSVJTVF9QRVJTT046IDU5MyxcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9TRUNPTkRfUEVSU09OOiA1OTQsXG4gICAgRlRfQ1ZWOiA1OTUsXG4gICAgRlRfREFURV9PRl9JTlNVUkFOQ0VfRVhQSVJZOiA1OTYsXG4gICAgRlRfTU9SVEdBR0VfQlk6IDU5NyxcbiAgICBGVF9PTERfRE9DVU1FTlRfTlVNQkVSOiA1OTgsXG4gICAgRlRfT0xEX0RBVEVfT0ZfSVNTVUU6IDU5OSxcbiAgICBGVF9PTERfUExBQ0VfT0ZfSVNTVUU6IDYwMCxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9GUk9NOiA2MDEsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfVE86IDYwMixcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9OT1RFUzogNjAzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX0ZST006IDYwNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9UTzogNjA1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOiA2MDYsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfRlJPTTogNjA3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX1RPOiA2MDgsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfTk9URVM6IDYwOSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19GUk9NOiA2MTAsXG4gICAgRlRfRExDTEFTU0NPREVfSENfVE86IDYxMSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19OT1RFUzogNjEyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX0ZST006IDYxMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19UTzogNjE0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOiA2MTUsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfRlJPTTogNjE2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX1RPOiA2MTcsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfTk9URVM6IDYxOCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX0ZST006IDYxOSxcbiAgICBGVF9ETENMQVNTQ09ERV9SX1RPOiA2MjAsXG4gICAgRlRfRExDTEFTU0NPREVfUl9OT1RFUzogNjIxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX0ZST006IDYyMixcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9UTzogNjIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOiA2MjQsXG4gICAgRlRfQ0lUSVpFTlNISVBfU1RBVFVTOiA2MjUsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9GUk9NOiA2MjYsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9UTzogNjI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX0ZST006IDYyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9UTzogNjI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX05PVEVTOiA2MzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fRlJPTTogNjMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX1RPOiA2MzIsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fTk9URVM6IDYzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19GUk9NOiA2MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfVE86IDYzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19OT1RFUzogNjM2LFxuICAgIEZUX0FMVF9EQVRFX09GX0VYUElSWTogNjM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX0ZST006IDYzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9UTzogNjM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX05PVEVTOiA2NDAsXG4gICAgRlRfUEFZTUVOVF9QRVJJT0RfVE86IDY0MyxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9GUk9NOiA2NDIsXG4gICAgRlRfSVNTVUVSX0lERU5USUZJQ0FUSU9OX05VTUJFUjogNjQxLFxuICAgIEZUX1ZBQ0NJTkFUSU9OX0NFUlRJRklDQVRFX0lERU5USUZJRVI6IDY0NCxcbiAgICBGVF9GSVJTVF9OQU1FOiA2NDUsXG4gICAgRlRfREFURV9PRl9BUlJJVkFMOiA2NDYsXG4gICAgRlRfU0VDT05EX05BTUU6IDY0NyxcbiAgICBGVF9USElSRF9OQU1FOiA2NDgsXG4gICAgRlRfRk9VUlRIX05BTUU6IDY0OSxcbiAgICBGVF9MQVNUX05BTUU6IDY1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9STV9GUk9NOiA2NTEsXG4gICAgRlRfRExDTEFTU0NPREVfUk1fTk9URVM6IDY1MixcbiAgICBGVF9ETENMQVNTQ09ERV9STV9UTzogNjUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1BXX0ZST006IDY1NCxcbiAgICBGVF9ETENMQVNTQ09ERV9QV19OT1RFUzogNjU1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1BXX1RPOiA2NTYsXG4gICAgRlRfRExDTEFTU0NPREVfRUJfRlJPTTogNjU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VCX05PVEVTOiA2NTgsXG4gICAgRlRfRExDTEFTU0NPREVfRUJfVE86IDY1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9FQ19GUk9NOiA2NjAsXG4gICAgRlRfRExDTEFTU0NPREVfRUNfTk9URVM6IDY2MSxcbiAgICBGVF9ETENMQVNTQ09ERV9FQ19UTzogNjYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDMV9GUk9NOiA2NjMsXG4gICAgRlRfRExDTEFTU0NPREVfRUMxX05PVEVTOiA2NjQsXG4gICAgRlRfRExDTEFTU0NPREVfRUMxX1RPOiA2NjUsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQ0lUWTogNjY2LFxuICAgIEZUX1lFQVJfT0ZfQklSVEg6IDY2NyxcbiAgICBGVF9ZRUFSX09GX0VYUElSWTogNjY4LFxuICAgIEZUX0dSQU5ERkFUSEVSX05BTUVfTUFURVJOQUw6IDY2OSxcbiAgICBGVF9GSVJTVF9TVVJOQU1FOiA2NzAsXG4gICAgRlRfTU9OVEhfT0ZfQklSVEg6IDY3MSxcbiAgICBGVF9BRERSRVNTX0ZMT09SX05VTUJFUjogNjcyLFxuICAgIEZUX0FERFJFU1NfRU5UUkFOQ0U6IDY3MyxcbiAgICBGVF9BRERSRVNTX0JMT0NLX05VTUJFUjogNjc0LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUX05VTUJFUjogNjc1LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUX1RZUEU6IDY3NixcbiAgICBGVF9BRERSRVNTX0NJVFlfU0VDVE9SOiA2NzcsXG4gICAgRlRfQUREUkVTU19DT1VOVFlfVFlQRTogNjc4LFxuICAgIEZUX0FERFJFU1NfQ0lUWV9UWVBFOiA2NzksXG4gICAgRlRfQUREUkVTU19CVUlMRElOR19UWVBFOiA2ODAsXG4gICAgRlRfREFURV9PRl9SRVRJUkVNRU5UOiA2ODEsXG4gICAgRlRfRE9DVU1FTlRfU1RBVFVTOiA2ODIsXG4gICAgRlRfU0lHTkFUVVJFOiA2ODMsXG4gICAgRlRfVU5JUVVFX0NFUlRJRklDQVRFX0lERU5USUZJRVI6IDY4NCxcbiAgICBGVF9FTUFJTDogNjg1LFxuICAgIEZUX0RBVEVfT0ZfU1BFQ0lNRU5fQ09MTEVDVElPTjogNjg2LFxuICAgIEZUX1RZUEVfT0ZfVEVTVElORzogNjg3LFxuICAgIEZUX1JFU1VMVF9PRl9URVNUSU5HOiA2ODgsXG4gICAgRlRfTUVUSE9EX09GX1RFU1RJTkc6IDY4OSxcbiAgICBGVF9ESUdJVEFMX1RSQVZFTF9BVVRIT1JJWkFUSU9OX05VTUJFUjogNjkwLFxuICAgIEZUX0RBVEVfT0ZfRklSU1RfUE9TSVRJVkVfVEVTVF9SRVNVTFQ6IDY5MSxcbiAgICBGVF9FRl9DQVJEX0FDQ0VTUzogNjkyLFxuICAgIEZUX1NIT1JUX0ZMSUdIVF9OVU1CRVI6IDY5MyxcbiAgICBGVF9BSVJMSU5FX0NPREU6IDY5NCxcbiAgICBGVF9NVkNfQUdFTkNZOiA2OTUsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFX0FMUEhBMjogNjk2LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREVfQUxQSEEyOiA2OTcsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURV9DSEVDS0RJR0lUOiA2OTgsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURV9DSEVDS1NVTTogNjk5LFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyT3JpZW50YXRpb24gPSB7XG4gICAgQUxMOiAwLFxuICAgIFBPUlRSQUlUOiAxLFxuICAgIExBTkRTQ0FQRTogMixcbiAgICBMQU5EU0NBUEVfTEVGVDogMyxcbiAgICBMQU5EU0NBUEVfUklHSFQ6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMQ0lEID0ge1xuICAgIExBVElOOiAwLFxuICAgIEFCS0hBWklBTl9DWVJJTExJQzogMTAwMTEsXG4gICAgQUZSSUtBQU5TOiAxMDc4LFxuICAgIEFMQkFOSUFOOiAxMDUyLFxuICAgIEFNSEFSSUM6IDExMTgsXG4gICAgQVJBQklDX0FMR0VSSUE6IDUxMjEsXG4gICAgQVJBQklDX0JBSFJBSU46IDE1MzYxLFxuICAgIEFSQUJJQ19FR1lQVDogMzA3MyxcbiAgICBBUkFCSUNfSVJBUTogMjA0OSxcbiAgICBBUkFCSUNfSk9SREFOOiAxMTI2NSxcbiAgICBBUkFCSUNfS1VXQUlUOiAxMzMxMyxcbiAgICBBUkFCSUNfTEVCQU5PTjogMTIyODksXG4gICAgQVJBQklDX0xJQllBOiA0MDk3LFxuICAgIEFSQUJJQ19NT1JPQ0NPOiA2MTQ1LFxuICAgIEFSQUJJQ19PTUFOOiA4MTkzLFxuICAgIEFSQUJJQ19RQVRBUjogMTYzODUsXG4gICAgQVJBQklDX1NBVURJX0FSQUJJQTogMTAyNSxcbiAgICBBUkFCSUNfU1lSSUE6IDEwMjQxLFxuICAgIEFSQUJJQ19UVU5JU0lBOiA3MTY5LFxuICAgIEFSQUJJQ19VQUU6IDE0MzM3LFxuICAgIEFSQUJJQ19ZRU1FTjogOTIxNyxcbiAgICBBUkFCSUNfQVJNRU5JQU46IDEwNjcsXG4gICAgQVJBQklDX1dPUkxEOiA0MDk2LFxuICAgIEFaRVJJX0NZUklMSUM6IDIwOTIsXG4gICAgQVpFUklfTEFUSU46IDEwNjgsXG4gICAgQkFTUVVFOiAxMDY5LFxuICAgIEJBTktfQ0FSRDogMTAwMDMsXG4gICAgQkFOS19DQVJEX0NWVjI6IDEwMDA0LFxuICAgIEJBTktfQ0FSRF9OQU1FOiAxMDAwMixcbiAgICBCQU5LX0NBUkRfTlVNQkVSOiAxMDAwMCxcbiAgICBCQU5LX0NBUkRfVkFMSURfVEhSVTogMTAwMDEsXG4gICAgQkVMQVJVU0lBTjogMTA1OSxcbiAgICBCRU5HQUxJX0JBTkdMQURFU0g6IDIxMTcsXG4gICAgQlVMR0FSSUFOOiAxMDI2LFxuICAgIENBVEFMQU46IDEwMjcsXG4gICAgQ0hJTkVTRV9IT05HS09OR19TQVI6IDMwNzYsXG4gICAgQ0hJTkVTRV9NQUNBT19TQVI6IDUxMjQsXG4gICAgQ0hJTkVTRTogMjA1MixcbiAgICBDSElORVNFX1NJTkdBUE9SRTogNDEwMCxcbiAgICBDSElORVNFX1RBSVdBTjogMTAyOCxcbiAgICBDUk9BVElBTjogMTA1MCxcbiAgICBDWkVDSDogMTAyOSxcbiAgICBEQU5JU0g6IDEwMzAsXG4gICAgRElWRUhJOiAxMTI1LFxuICAgIERVVENIX0JFTEdJVU06IDIwNjcsXG4gICAgRFVUQ0hfTkVUSEVSTEFORFM6IDEwNDMsXG4gICAgRU5HTElTSF9BVVNUUkFMSUE6IDMwODEsXG4gICAgRU5HTElTSF9CRUxJWkU6IDEwMjQ5LFxuICAgIEVOR0xJU0hfQ0FOQURBOiA0MTA1LFxuICAgIEVOR0xJU0hfQ0FSUklCRUFOOiA5MjI1LFxuICAgIEVOR0xJU0hfSVJFTEFORDogNjE1MyxcbiAgICBFTkdMSVNIX0pBTUFJQ0E6IDgyMDEsXG4gICAgRU5HTElTSF9ORVdfWkVBTEFORDogNTEyOSxcbiAgICBFTkdMSVNIX1BISUxJUFBJTkVTOiAxMzMyMSxcbiAgICBFTkdMSVNIX1NPVVRIX0FGUklDQTogNzE3NyxcbiAgICBFTkdMSVNIX1RSSU5JREFEOiAxMTI3MyxcbiAgICBFTkdMSVNIX1VLOiAyMDU3LFxuICAgIEVOR0xJU0hfVVM6IDEwMzMsXG4gICAgRU5HTElTSF9aSU1CQUJXRTogMTIyOTcsXG4gICAgRVNUT05JQU46IDEwNjEsXG4gICAgRkFFUk9FU0U6IDEwODAsXG4gICAgRkFSU0k6IDEwNjUsXG4gICAgRklOTklTSDogMTAzNSxcbiAgICBGUkVOQ0hfQkVMR0lVTTogMjA2MCxcbiAgICBGUkVOQ0hfQ0FOQURBOiAzMDg0LFxuICAgIEZSRU5DSF9GUkFOQ0U6IDEwMzYsXG4gICAgRlJFTkNIX0xVWEVNQk9VUkc6IDUxMzIsXG4gICAgRlJFTkNIX01PTkFDTzogNjE1NixcbiAgICBGUkVOQ0hfU1dJVFpFUkxBTkQ6IDQxMDgsXG4gICAgRllST19NQUNFRE9OSUFOOiAxMDcxLFxuICAgIEdBTElDSUFOOiAxMTEwLFxuICAgIEdFT1JHSUFOOiAxMDc5LFxuICAgIEdFUk1BTl9BVVNUUklBOiAzMDc5LFxuICAgIEdFUk1BTl9HRVJNQU5ZOiAxMDMxLFxuICAgIEdFUk1BTl9MSUVDSFRFTlNURUlOOiA1MTI3LFxuICAgIEdFUk1BTl9MVVhFTUJPVVJHOiA0MTAzLFxuICAgIEdFUk1BTl9TV0lUWkVSTEFORDogMjA1NSxcbiAgICBHUkVFSzogMTAzMixcbiAgICBHVUpBUkFUSTogMTA5NSxcbiAgICBIRUJSRVc6IDEwMzcsXG4gICAgSElORElfSU5ESUE6IDEwODEsXG4gICAgSFVOR0FSSUFOOiAxMDM4LFxuICAgIElDRUxBTkRJQzogMTAzOSxcbiAgICBJTkRPTkVTSUFOOiAxMDU3LFxuICAgIElUQUxJQU5fSVRBTFk6IDEwNDAsXG4gICAgSVRBTElBTl9TV0lUWkVSTEFORDogMjA2NCxcbiAgICBKQVBBTkVTRTogMTA0MSxcbiAgICBLQU5OQURBOiAxMDk5LFxuICAgIEtBU0hNSVJJOiAxMTIwLFxuICAgIEtBWkFLSDogMTA4NyxcbiAgICBLT05LQU5JOiAxMTExLFxuICAgIEtPUkVBTjogMTA0MixcbiAgICBLWVJHWVpfQ1lSSUxJQ0s6IDEwODgsXG4gICAgTEFPOiAxMTA4LFxuICAgIExBVFZJQU46IDEwNjIsXG4gICAgTElUSFVBTklBTjogMTA2MyxcbiAgICBNQUxBWV9NQUxBWVNJQTogMTA4NixcbiAgICBNQUxBWV9CUlVORUlfREFSVVNTQUxBTTogMjExMCxcbiAgICBBU1NBTUVTRTogMTEwMSxcbiAgICBNQVJBVEhJOiAxMTAyLFxuICAgIE1PTkdPTElBTl9DWVJJTElDOiAxMTA0LFxuICAgIE5PUldFR0lBTl9CT0tNQUw6IDEwNDQsXG4gICAgTk9SV0VHSUFOX05ZT1JTSzogMjA2OCxcbiAgICBQQVNIVE86IDExMjMsXG4gICAgUE9MSVNIOiAxMDQ1LFxuICAgIFBPUlRVR1VFU0VfQlJBWklMOiAxMDQ2LFxuICAgIFBPUlRVR1VFU0VfUE9SVFVHQUw6IDIwNzAsXG4gICAgUFVOSkFCSTogMTA5NCxcbiAgICBSSEFFVE9fUk9NQU5JQzogMTA0NyxcbiAgICBST01BTklBTjogMTA0OCxcbiAgICBSVVNTSUFOOiAxMDQ5LFxuICAgIFNBTlNLUklUOiAxMTAzLFxuICAgIFNFUkJJQU5fQ1lSSUxJQzogMzA5OCxcbiAgICBTRVJCSUFOX0xBVElOOiAyMDc0LFxuICAgIFNJTkRISTogMjEzNyxcbiAgICBTSU5ESElfSU5ESUE6IDExMTMsXG4gICAgU0lOSEFMQTogMTExNSxcbiAgICBTTE9WQUs6IDEwNTEsXG4gICAgU0xPVkVOSUFOOiAxMDYwLFxuICAgIFNQQU5JU0hfQVJHRU5USU5BOiAxMTI3NCxcbiAgICBTUEFOSVNIX0JPTElWSUE6IDE2Mzk0LFxuICAgIFNQQU5JU0hfQ0hJTEU6IDEzMzIyLFxuICAgIFNQQU5JQ0hfQ09MT01CSUE6IDkyMjYsXG4gICAgU1BBTklTSF9DT1NUQV9SSUNBOiA1MTMwLFxuICAgIFNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOiA3MTc4LFxuICAgIFNQQU5JU0hfRUNVQURPUjogMTIyOTgsXG4gICAgU1BBTklTSF9FTF9TQUxWQURPUjogMTc0MTgsXG4gICAgU1BBTklTSF9HVUFURU1BTEE6IDQxMDYsXG4gICAgU1BBTklTSF9IT05EVVJBUzogMTg0NDIsXG4gICAgU1BBTklTSF9NRVhJQ086IDIwNTgsXG4gICAgU1BBTklTSF9OSUNBUkFHVUE6IDE5NDY2LFxuICAgIFNQQU5JU0hfUEFOQU1BOiA2MTU0LFxuICAgIFNQQU5JU0hfUEFSQUdVQVk6IDE1MzcwLFxuICAgIFNQQU5JU0hfUEVSVTogMTAyNTAsXG4gICAgU1BBTklTSF9QVUVSVE9fUklDTzogMjA0OTAsXG4gICAgU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOiAxMDM0LFxuICAgIFNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOiAzMDgyLFxuICAgIFNQQU5JU0hfVVJVR1VBWTogMTQzNDYsXG4gICAgU1BBTklTSF9WRU5FWlVFTEE6IDgyMDIsXG4gICAgU1dBSElMSTogMTA4OSxcbiAgICBTV0VESVNIOiAxMDUzLFxuICAgIFNXRURJU0hfRklOTEFORDogMjA3NyxcbiAgICBTWVJJQUM6IDExMTQsXG4gICAgVEFNSUw6IDEwOTcsXG4gICAgVEFUQVI6IDEwOTIsXG4gICAgQkVOR0FMSV9JTkRJQTogMTA5MyxcbiAgICBURUxVR1U6IDEwOTgsXG4gICAgVEhBSV9USEFJTEFORDogMTA1NCxcbiAgICBUVVJLSVNIOiAxMDU1LFxuICAgIFRBSklLX0NZUklMTElDOiAxMDY0LFxuICAgIFRVUktNRU46IDEwOTAsXG4gICAgVUtSQUlOSUFOOiAxMDU4LFxuICAgIFVSRFU6IDEwNTYsXG4gICAgVVpCRUtfQ1lSSUxJQzogMjExNSxcbiAgICBVWkJFS19MQVRJTjogMTA5MSxcbiAgICBWSUVUTkFNRVNFOiAxMDY2LFxuICAgIENUQ19TSU1QTElGSUVEOiA1MDAwMSxcbiAgICBDVENfVFJBRElUSU9OQUw6IDUwMDAyLFxuICAgIE1BTFRFU0U6IDEwODIsXG4gICAgQlVSTUVTRTogMTEwOSxcbiAgICBLSE1FUjogMTEwNyxcbiAgICBLQVJBS0FMUEFLX0xBVElOOiAxMDAxMixcbiAgICBNQUxBWUFMQU06IDExMDAsXG4gICAgTkVQQUxJOiAxMTIxLFxuICAgIE9SSVlBOiAxMDk2LFxuICAgIFVSRFVfREVURUNUSU9OOiAxMDU2MCxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25JbWFnZSA9IHtcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0ZBSUxVUkVfSU1BR0U6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5GYWlsdXJlSW1hZ2VcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfSU1BR0U6IFwicmZpZEVuYWJsZU5mY0ltYWdlXCIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJGcmFtZSA9IHtcbiAgICBNQVg6IFwibWF4XCIsXG4gICAgU0NFTkFSSU9fREVGQVVMVDogXCJpZDFcIixcbiAgICBOT05FOiBcIm5vbmVcIixcbiAgICBET0NVTUVOVDogXCJkb2N1bWVudFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fTGlnaHRzID0ge1xuICAgIE5PTkU6IDAsXG4gICAgUlBSTV9MSUdIVF9VVjogMTI4LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTDogNixcbiAgICBSUFJNX0xJR0hUX0lSOiAxNjc3NzIxNixcbiAgICBSUFJNX0xpZ2h0X0lSX1RPUDogOCxcbiAgICBSUFJNX0xpZ2h0X0lSX1NJREU6IDE2LFxuICAgIFJQUk1fTGlnaHRfSVJfRnVsbDogKDggfCAxNiksXG4gICAgUlBSTV9MSUdIVF9PVkQ6IDY3MTA4ODY0LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTF9PVkQ6ICg2IHwgNjcxMDg4NjQpLFxufVxuXG5leHBvcnQgY29uc3QgZU1yekRldGVjdGlvbk1vZGVzID0ge1xuICAgIERFRkFVTFQ6IDAsXG4gICAgUkVTSVpFX0JJTkFSSVpFX1dJTkRPVzogMSxcbiAgICBCTFVSX0JFRk9SRV9CSU5BUklaQVRJT046IDIsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgRm9udFN0eWxlLFxuICAgZVJQUk1fQXV0aGVudGljaXR5LFxuICAgQ3VzdG9taXphdGlvbkNvbG9yLFxuICAgZVJGSURfRXJyb3JDb2RlcyxcbiAgIGVMRFNfUGFyc2luZ0Vycm9yQ29kZXMsXG4gICBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUsXG4gICBSR0xNZWFzdXJlU3lzdGVtLFxuICAgZVJQUk1fUmVzdWx0VHlwZSxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgZVJGSURfQmF1ZFJhdGUsXG4gICBMaW5lQ2FwLFxuICAgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQsXG4gICBEb2NSZWFkZXJBY3Rpb24sXG4gICBlUHJvY2Vzc0dMQ29tbWFuZHMsXG4gICBlUkZJRFJlYWRpbmdCdWZmZXJTaXplLFxuICAgUEtEUmVzb3VyY2VUeXBlLFxuICAgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlLFxuICAgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzLFxuICAgU2NlbmFyaW9JZGVudGlmaWVyLFxuICAgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMsXG4gICBDYW1lcmFQb3NpdGlvbixcbiAgIGVSRklEX1Bhc3N3b3JkX1R5cGUsXG4gICBWaWV3Q29udGVudE1vZGUsXG4gICBCYXJjb2RlUmVzdWx0LFxuICAgZVJGSURfQXBwbGljYXRpb25fVHlwZSxcbiAgIGVTaWduTWFuYWdlbWVudEFjdGlvbixcbiAgIGVDaGVja0RpYWdub3NlLFxuICAgUkZJRERlbGVnYXRlLFxuICAgVGV4dFByb2Nlc3NpbmcsXG4gICBMb2dMZXZlbCxcbiAgIEFuaW1hdGlvbkltYWdlLFxuICAgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzLFxuICAgRG9jRm9ybWF0LFxuICAgZUxEU19QYXJzaW5nTm90aWZpY2F0aW9uQ29kZXMsXG4gICBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlLFxuICAgTVJaRm9ybWF0LFxuICAgQmFyY29kZVR5cGUsXG4gICBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlLFxuICAgT25saW5lTW9kZSxcbiAgIGVSRklEX1NES19Qcm9maWxlclR5cGUsXG4gICBkaURvY1R5cGUsXG4gICBCdXR0b25UYWcsXG4gICBIb2xvQW5pbWF0aW9uVHlwZSxcbiAgIGVSZXF1ZXN0Q29tbWFuZCxcbiAgIEN1c3RvbWl6YXRpb25Gb250LFxuICAgSW1hZ2VGb3JtYXQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIFJlZ0RldmljZUNvbmZpZ1R5cGUsXG4gICBDYXB0dXJlU2Vzc2lvblByZXNldCxcbiAgIENhbWVyYU1vZGUsXG4gICBDYXB0dXJlTW9kZSxcbiAgIGVDaGVja1Jlc3VsdCxcbiAgIGVSRklEX1Rlcm1pbmFsVHlwZSxcbiAgIGVSRklEX0RhdGFGaWxlX1R5cGUsXG4gICBlVmlzdWFsRmllbGRUeXBlLFxuICAgRG9jUmVhZGVyT3JpZW50YXRpb24sXG4gICBMQ0lELFxuICAgQ3VzdG9taXphdGlvbkltYWdlLFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBlUlBSTV9MaWdodHMsXG4gICBlTXJ6RGV0ZWN0aW9uTW9kZXMsXG59XG5cbi8qKlxuICogQG5hbWUgRG9jdW1lbnRSZWFkZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHdyYXBwZXIgY29yZG92YSBwbHVnaW4gZm9yIFJlZ3VsYWBzIERvY3VtZW50IFJlYWRlci5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERvY3VtZW50UmVhZGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kb2N1bWVudC1yZWFkZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIERvY3VtZW50UmVhZGVyOiBEb2N1bWVudFJlYWRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuRG9jdW1lbnRSZWFkZXIucHJlcGFyZURhdGFiYXNlKFwiRnVsbFwiKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gKiAgICAgICAgaWYgKG1lc3NhZ2UgPT0gXCJkYXRhYmFzZSBwcmVwYXJlZFwiKSB7XG4gKiAgICAgICAgICB0aGlzLkRvY3VtZW50UmVhZGVyLmluaXRpYWxpemVSZWFkZXIobGljZW5zZSkudGhlbihtID0+IG9uSW5pdGlhbGl6ZWQoKSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAqICAgICAgICB9XG4gKiAgICAgIH0pXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdEb2N1bWVudFJlYWRlcicsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtcmVhZGVyLWFwaScsXG4gICAgcGx1Z2luUmVmOiAnRG9jdW1lbnRSZWFkZXJQbHVnaW4uRG9jdW1lbnRSZWFkZXInLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0RvY3VtZW50UmVhZGVyLUNvcmRvdmEtUGx1Z2luJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiB0aGUgU0RLIGlzIHJlYWR5IGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIERvY3VtZW50IFJlYWRlciBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTZXNzaW9uU3RhdHVzKHN0YXR1czogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICByZXR1cm5zIHRhZyBwcm9wZXJ0eSBvZiBEb2N1bWVudFJlYWRlciBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBzZXRzIERvY3VtZW50UmVhZGVyLnRhZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VGFnKHRhZzogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0VGVuYW50KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW5hbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRlbmFudCh0ZW5hbnQ6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEVudigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW52XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRFbnYoZW52OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMb2NhbGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RnVuY3Rpb25hbGl0eSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uYWxpdHl9IGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldEZ1bmN0aW9uYWxpdHkoZnVuY3Rpb25hbGl0eTogRnVuY3Rpb25hbGl0eSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UHJvY2Vzc1BhcmFtcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb2Nlc3NQYXJhbXN9IHByb2Nlc3NQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFByb2Nlc3NQYXJhbXMocHJvY2Vzc1BhcmFtczogUHJvY2Vzc1BhcmFtcyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q3VzdG9taXphdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0N1c3RvbWl6YXRpb259IGN1c3RvbWl6YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldEN1c3RvbWl6YXRpb24oY3VzdG9taXphdGlvbjogQ3VzdG9taXphdGlvbik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNjZW5hcmlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UkZJRFNjZW5hcmlvfSByZmlkU2NlbmFyaW9cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTY2VuYXJpbyhyZmlkU2NlbmFyaW86IFJGSURTY2VuYXJpbyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlc2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RvY1JlYWRlckNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyKGNvbmZpZzogRG9jUmVhZGVyQ29uZmlnKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBJbml0aWFsaXplcyBkb2N1bWVudCByZWFkZXIgd2l0aCBsaWNlbnNlIGZyb20gY29ubmVjdGVkIERldmljZTczMTAoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RG9jUmVhZGVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXJXaXRoQmxlRGV2aWNlQ29uZmlnKGNvbmZpZzogRG9jUmVhZGVyQ29uZmlnKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZGVpbml0aWFsaXplIERvY3VtZW50IFJlYWRlclxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWluaXRpYWxpemVSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZG93bmxvYWQgYSBkYXRhYmFzZSBmcm9tIHRoZSBSZWd1bGEncyBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZVR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcHJlcGFyZURhdGFiYXNlKGRhdGFiYXNlVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIHJlbW92ZSB0aGUgYWRkZWQgZGF0YWJhc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcmVtb3ZlRGF0YWJhc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgZm9yIGdldHRpbmcgYWx3YXlzIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZUlkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNhbmNlbCBkYXRhYmFzZSB1cGRhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2FuY2VsREJVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBjaGVja3MgZm9yIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNoZWNrRGF0YWJhc2VVcGRhdGUoZGF0YWJhc2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2Nhbm5lckNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNjYW4oY29uZmlnOiBTY2FubmVyQ29uZmlnKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2Nhbm5lckNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0U2Nhbm5lcihjb25maWc6IFNjYW5uZXJDb25maWcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29nbml6ZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZShjb25maWc6IFJlY29nbml6ZUNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluZGljYXRlIHRoYW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhlIG5leHQgcGFnZSBpcyBzdGFydGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbG9zZSBjYW1lcmEgcHJldmlldyBhbmQgc3RvcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BTY2FubmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gb3BlbiB0aGUgUkZJRCBjaGlwIHJlYWRpbmcgY29udHJvbGxlciBhbmQgc3RhcnQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFBBQ2VydGlmaWNhdGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RUQVNpZ25hdHVyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzdGFydFJGSURSZWFkZXIocmVxdWVzdFBBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXM6IGJvb2xlYW4sIHJlcXVlc3RUQVNpZ25hdHVyZTogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RQQUNlcnRpZmljYXRlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFRBQ2VydGlmaWNhdGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0VEFTaWduYXR1cmVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQocmVxdWVzdFBBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXM6IGJvb2xlYW4sIHJlcXVlc3RUQVNpZ25hdHVyZTogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gY2xvc2UgdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIGVuZCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFBBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVBBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBU2lnbmF0dXJlIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmF0dXJlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlVEFTaWduYXR1cmUoc2lnbmF0dXJlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFRoZSBtZXRob2QgY2FsbCBzZXRzIHRoZSBnaXZlbiBUQ0NQYXJhbXMgdG8gdGhlIFJGSUQgc2Vzc2lvbi4gVGhlIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIHRvIGJlIHNldCBiZWZvcmUgc3RhcnRpbmcgUkZJRCBzZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUY2NQYXJhbXN9IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VENDUGFyYW1zKHBhcmFtczogVGNjUGFyYW1zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBQS0RDZXJ0aWZpY2F0ZVtdKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xlYXIgUEtEIGNlcnRpZmljYXRlc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjbGVhclBLRENlcnRpZmljYXRlcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3U2Vzc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIENvbm5lY3RzIHRvIGJsZSBkZXZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidERldmljZU5hbWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNvbm5lY3RCbHVldG9vdGhEZXZpY2UoYnREZXZpY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGJ0RGV2aWNlUmVxdWVzdEZsYXNoaW5nKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYnREZXZpY2VSZXF1ZXN0Rmxhc2hpbmdGdWxsSVIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBidERldmljZVJlcXVlc3RUdXJuT2ZmQWxsKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gZGljdGlvbmFyeVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0TG9jYWxpemF0aW9uRGljdGlvbmFyeShkaWN0aW9uYXJ5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMaWNlbnNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0QXZhaWxhYmxlU2NlbmFyaW9zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBORkMgY2hpcCByZWFkaW5nIGNhcGFiaWxpdHkgaXMgYXZhaWxhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldElzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JSRklEQXZhaWxhYmxlRm9yVXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBhIG1vYmlsZSBhdXRoZW50aWNhdG9yIGlzIGF2YWlsYWJsZSBmb3IgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzQXV0aGVudGljYXRvckF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY1JlYWRlclZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGZpbmFsaXplUGFja2FnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGVuZEJhY2tlbmRUcmFuc2FjdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRUcmFuc2xhdGlvbihjbGFzc05hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZUxjaWQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZVNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlU291cmNlT3JpZ2luYWwocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIG9yaWdpbmFsOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZUxjaWRTb3VyY2VPcmlnaW5hbChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBvcmlnaW5hbDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkQnlUeXBlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZEJ5VHlwZUxjaWQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEJ5VHlwZVNvdXJjZVBhZ2VJbmRleChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEJ5VHlwZVNvdXJjZVBhZ2VJbmRleExpZ2h0KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlciwgbGlnaHQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGUocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlUGFnZUluZGV4KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGVTb3VyY2VQYWdlSW5kZXhMaWdodChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIsIGxpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGNvbnRhaW5lcnMocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCByZXN1bHRUeXBlOiBudW1iZXJbXSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZW5jcnlwdGVkQ29udGFpbmVycyhyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfX0iXX0=