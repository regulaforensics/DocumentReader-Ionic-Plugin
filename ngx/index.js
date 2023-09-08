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
var DocReaderFieldRect = /** @class */ (function () {
    function DocReaderFieldRect() {
    }
    DocReaderFieldRect.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocReaderFieldRect;
        result.bottom = jsonObject["bottom"];
        result.top = jsonObject["top"];
        result.left = jsonObject["left"];
        result.right = jsonObject["right"];
        return result;
    };
    return DocReaderFieldRect;
}());
export { DocReaderFieldRect };
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
        result.fieldRect = DocReaderFieldRect.fromJson(jsonObject["fieldRect"]);
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
        result.validity = jsonObject["validity"];
        result.probability = jsonObject["probability"];
        result.value = jsonObject["value"];
        result.originalValue = jsonObject["originalValue"];
        result.boundRect = Rect.fromJson(jsonObject["boundRect"]);
        result.comparison = {};
        if (jsonObject["comparison"] != null) {
            for (var i in jsonObject["comparison"]) {
                result.comparison[i] = jsonObject["comparison"][i];
            }
        }
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
        result.data = [];
        if (jsonObject["data"] != null) {
            for (var i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i]);
            }
        }
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
        result.errorCode = jsonObject["errorCode"];
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
        result.data = [];
        if (jsonObject["data"] != null) {
            for (var i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i]);
            }
        }
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
        result.data = [];
        if (jsonObject["data"] != null) {
            for (var i in jsonObject["data"]) {
                result.data.push(jsonObject["data"][i]);
            }
        }
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
        result.imgBytes = [];
        if (jsonObject["imgBytes"] != null) {
            for (var i in jsonObject["imgBytes"]) {
                result.imgBytes.push(jsonObject["imgBytes"][i]);
            }
        }
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
var FaceApiParams = /** @class */ (function () {
    function FaceApiParams() {
    }
    FaceApiParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceApiParams;
        result.url = jsonObject["url"];
        result.mode = jsonObject["mode"];
        result.searchParams = Search.fromJson(jsonObject["searchParams"]);
        result.threshold = jsonObject["threshold"];
        result.serviceTimeout = jsonObject["serviceTimeout"];
        result.proxy = jsonObject["proxy"];
        result.proxyPassword = jsonObject["proxyPassword"];
        result.proxyType = jsonObject["proxyType"];
        return result;
    };
    return FaceApiParams;
}());
export { FaceApiParams };
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Search;
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
    return Search;
}());
export { Search };
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
        result.colornessCheck = jsonObject["colornessCheck"];
        result.moireCheck = jsonObject["moireCheck"];
        result.expectedPass = [];
        if (jsonObject["expectedPass"] != null) {
            for (var i in jsonObject["expectedPass"]) {
                result.expectedPass.push(jsonObject["expectedPass"][i]);
            }
        }
        result.glaresCheckParams = GlaresCheckParams.fromJson(jsonObject["glaresCheckParams"]);
        result.documentPositionIndent = jsonObject["documentPositionIndent"];
        return result;
    };
    return ImageQA;
}());
export { ImageQA };
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
var OnlineProcessingConfig = /** @class */ (function () {
    function OnlineProcessingConfig() {
    }
    OnlineProcessingConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new OnlineProcessingConfig;
        result.mode = jsonObject["mode"];
        result.url = jsonObject["url"];
        result.processParam = jsonObject["processParam"];
        result.imageFormat = jsonObject["imageFormat"];
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"];
        return result;
    };
    return OnlineProcessingConfig;
}());
export { OnlineProcessingConfig };
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
        result.livePortrait = jsonObject["livePortrait"];
        result.extPortrait = jsonObject["extPortrait"];
        result.onlineProcessingConfig = OnlineProcessingConfig.fromJson(jsonObject["onlineProcessingConfig"]);
        result.image = jsonObject["image"];
        result.oneShotIdentification = jsonObject["oneShotIdentification"];
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
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderResults;
        result.videoCaptureSessionId = jsonObject["videoCaptureSessionId"];
        result.chipPage = jsonObject["chipPage"];
        result.irElapsedTime = jsonObject["irElapsedTime"];
        result.processingFinishedStatus = jsonObject["processingFinishedStatus"];
        result.elapsedTime = jsonObject["elapsedTime"];
        result.elapsedTimeRFID = jsonObject["elapsedTimeRFID"];
        result.morePagesAvailable = jsonObject["morePagesAvailable"];
        result.rfidResult = jsonObject["rfidResult"];
        result.highResolution = jsonObject["highResolution"];
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
        result.documentReaderNotification = DocumentReaderNotification.fromJson(jsonObject["documentReaderNotification"]);
        result.rfidSessionData = RFIDSessionData.fromJson(jsonObject["rfidSessionData"]);
        result.authenticityResult = DocumentReaderAuthenticityResult.fromJson(jsonObject["authenticityResult"]);
        result.barcodeResult = DocumentReaderBarcodeResult.fromJson(jsonObject["barcodeResult"]);
        result.ppmIn = jsonObject["ppmIn"];
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
        return result;
    };
    return DocumentReaderResults;
}());
export { DocumentReaderResults };
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
};
export var CameraTypes = {
    FRONT: "front",
    BACK: "back",
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
    ePC_ProcMgr_Unload: 12107,
    ePC_ProcMgr_CheckDatabase: 12109,
    ePC_ProcMgr_ComparePortraits: 12111,
    ePC_RFID_SetTCCParams: 12522,
    ePC_RFID_SetReprocessingParams: 12523,
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
    NATIVE_JAVA_EXCEPTION: 1000,
    BACKEND_ONLINE_PROCESSING: 303,
    WRONG_INPUT: 400,
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
    SCENARIO_BARCODE_AND_LOCATE: "BarcodeAndLocate",
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
export var eRFID_Password_Type = {
    PPT_UNKNOWN: 0,
    PPT_MRZ: 1,
    PPT_CAN: 2,
    PPT_PIN: 3,
    PPT_PUK: 4,
    PPT_PIN_ESIGN: 5,
    PPT_SAI: 6,
};
export var BarcodeResult = {
    NO_ERR: 0,
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
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: 81,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: 82,
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
    BARCODE_WAS_READ_WITH_ERRORS: 140,
    BARCODE_DATA_FORMAT_ERROR: 141,
    BARCODE_SIZE_PARAMS_ERROR: 142,
    NOT_ALL_BARCODES_READ: 143,
    GLARES_IN_BARCODE_AREA: 144,
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
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: 240,
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: 241,
    LAST_DIAGNOSE_VALUE: 250,
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
    DEVICE_7310: 1,
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
    BENGALI: 2117,
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
export var LineCap = {
    Butt: 0,
    Round: 1,
    Square: 2,
};
export var UIInterfaceOrientationMask = {
    Portrait: 0,
    LandscapeLeft: 1,
    LandscapeRight: 2,
    PortraitUpsideDown: 3,
    Landscape: 4,
    All: 5,
    AllButUpsideDown: 6,
};
export var AVCaptureSessionPreset = {
    Low: 0,
    Medium: 1,
    High: 2,
    Photo: 3,
    InputPriority: 4,
    QHD960x540: 5,
    Hd1280x720: 6,
    Hd1920x1080: 7,
    Hd4K3840x2160: 8,
    IFrame960x540: 9,
    IFrame1280x720: 10,
    Qvga320x240: 11,
    Vga640x480: 12,
    Cif352x288: 13,
};
export var AVCaptureDevicePosition = {
    Front: 0,
    Back: 1,
    Unspecified: 2,
};
export var UIViewContentMode = {
    ScaleToFill: 0,
    ScaleAspectFit: 1,
    ScaleAspectFill: 2,
    Redraw: 3,
    Center: 4,
    Top: 5,
    Bottom: 6,
    Left: 7,
    Right: 8,
    TopLeft: 9,
    TopRight: 10,
    BottomLeft: 11,
    BottomRight: 12,
};
export var Enum = {
    FontStyle: FontStyle,
    eRPRM_Authenticity: eRPRM_Authenticity,
    eRFID_ErrorCodes: eRFID_ErrorCodes,
    eLDS_ParsingErrorCodes: eLDS_ParsingErrorCodes,
    eRFID_CertificateType: eRFID_CertificateType,
    RGLMeasureSystem: RGLMeasureSystem,
    eRPRM_ResultType: eRPRM_ResultType,
    CameraTypes: CameraTypes,
    FrameShapeType: FrameShapeType,
    eRFID_BaudRate: eRFID_BaudRate,
    eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
    DocReaderAction: DocReaderAction,
    eProcessGLCommands: eProcessGLCommands,
    PKDResourceType: PKDResourceType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    DocumentReaderErrorCodes: DocumentReaderErrorCodes,
    ScenarioIdentifier: ScenarioIdentifier,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_NotificationCodes: eRFID_NotificationCodes,
    eRFID_Password_Type: eRFID_Password_Type,
    BarcodeResult: BarcodeResult,
    eSignManagementAction: eSignManagementAction,
    eCheckDiagnose: eCheckDiagnose,
    RFIDDelegate: RFIDDelegate,
    TextProcessing: TextProcessing,
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
    HoloAnimationType: HoloAnimationType,
    eRequestCommand: eRequestCommand,
    ImageFormat: ImageFormat,
    eGraphicFieldType: eGraphicFieldType,
    RegDeviceConfigType: RegDeviceConfigType,
    CameraMode: CameraMode,
    CaptureMode: CaptureMode,
    eCheckResult: eCheckResult,
    eRFID_TerminalType: eRFID_TerminalType,
    eRFID_DataFile_Type: eRFID_DataFile_Type,
    eVisualFieldType: eVisualFieldType,
    DocReaderOrientation: DocReaderOrientation,
    LCID: LCID,
    DocReaderFrame: DocReaderFrame,
    eRPRM_Lights: eRPRM_Lights,
    LineCap: LineCap,
    UIInterfaceOrientationMask: UIInterfaceOrientationMask,
    AVCaptureSessionPreset: AVCaptureSessionPreset,
    AVCaptureDevicePosition: AVCaptureDevicePosition,
    UIViewContentMode: UIViewContentMode,
};
var DocumentReader = /** @class */ (function (_super) {
    __extends(DocumentReader, _super);
    function DocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReader.prototype.initializeReaderAutomatically = function () { return cordova(this, "initializeReaderAutomatically", {}, arguments); };
    DocumentReader.prototype.isBlePermissionsGranted = function () { return cordova(this, "isBlePermissionsGranted", {}, arguments); };
    DocumentReader.prototype.startBluetoothService = function () { return cordova(this, "startBluetoothService", {}, arguments); };
    DocumentReader.prototype.initializeReaderBleDeviceConfig = function () { return cordova(this, "initializeReaderBleDeviceConfig", {}, arguments); };
    DocumentReader.prototype.getTag = function () { return cordova(this, "getTag", {}, arguments); };
    DocumentReader.prototype.getAPIVersion = function () { return cordova(this, "getAPIVersion", {}, arguments); };
    DocumentReader.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReader.prototype.isRFIDAvailableForUse = function () { return cordova(this, "isRFIDAvailableForUse", {}, arguments); };
    DocumentReader.prototype.getCoreMode = function () { return cordova(this, "getCoreMode", {}, arguments); };
    DocumentReader.prototype.getCoreVersion = function () { return cordova(this, "getCoreVersion", {}, arguments); };
    DocumentReader.prototype.getDatabaseDate = function () { return cordova(this, "getDatabaseDate", {}, arguments); };
    DocumentReader.prototype.getDatabaseID = function () { return cordova(this, "getDatabaseID", {}, arguments); };
    DocumentReader.prototype.getDatabaseVersion = function () { return cordova(this, "getDatabaseVersion", {}, arguments); };
    DocumentReader.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReader.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReader.prototype.getDatabaseCountriesNumber = function () { return cordova(this, "getDatabaseCountriesNumber", {}, arguments); };
    DocumentReader.prototype.getDatabaseDocumentsNumber = function () { return cordova(this, "getDatabaseDocumentsNumber", {}, arguments); };
    DocumentReader.prototype.selectedScenario = function () { return cordova(this, "selectedScenario", {}, arguments); };
    DocumentReader.prototype.getSessionLogFolder = function () { return cordova(this, "getSessionLogFolder", {}, arguments); };
    DocumentReader.prototype.getDatabaseDescription = function () { return cordova(this, "getDatabaseDescription", {}, arguments); };
    DocumentReader.prototype.showScanner = function () { return cordova(this, "showScanner", { "observable": true }, arguments); };
    DocumentReader.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReader.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReader.prototype.startRFIDReader = function () { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReader.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReader.prototype.stopRFIDReaderWithErrorMessage = function (message) { return cordova(this, "stopRFIDReaderWithErrorMessage", {}, arguments); };
    DocumentReader.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReader.prototype.deinitializeReader = function () { return cordova(this, "deinitializeReader", {}, arguments); };
    DocumentReader.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReader.prototype.getConfig = function () { return cordova(this, "getConfig", {}, arguments); };
    DocumentReader.prototype.getRfidScenario = function () { return cordova(this, "getRfidScenario", {}, arguments); };
    DocumentReader.prototype.getLicenseExpiryDate = function () { return cordova(this, "getLicenseExpiryDate", {}, arguments); };
    DocumentReader.prototype.getLicenseCountryFilter = function () { return cordova(this, "getLicenseCountryFilter", {}, arguments); };
    DocumentReader.prototype.licenseIsRfidAvailable = function () { return cordova(this, "licenseIsRfidAvailable", {}, arguments); };
    DocumentReader.prototype.getCameraSessionIsPaused = function () { return cordova(this, "getCameraSessionIsPaused", {}, arguments); };
    DocumentReader.prototype.removeDatabase = function () { return cordova(this, "removeDatabase", {}, arguments); };
    DocumentReader.prototype.cancelDBUpdate = function () { return cordova(this, "cancelDBUpdate", {}, arguments); };
    DocumentReader.prototype.resetConfiguration = function () { return cordova(this, "resetConfiguration", {}, arguments); };
    DocumentReader.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReader.prototype.readRFID = function () { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReader.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.setRfidDelegate = function (delegate) { return cordova(this, "setRfidDelegate", {}, arguments); };
    DocumentReader.prototype.setEnableCoreLogs = function (logs) { return cordova(this, "setEnableCoreLogs", {}, arguments); };
    DocumentReader.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReader.prototype.setCameraSessionIsPaused = function (paused) { return cordova(this, "setCameraSessionIsPaused", {}, arguments); };
    DocumentReader.prototype.setTag = function (tag) { return cordova(this, "setTag", {}, arguments); };
    DocumentReader.prototype.checkDatabaseUpdate = function (databaseId) { return cordova(this, "checkDatabaseUpdate", {}, arguments); };
    DocumentReader.prototype.scan = function (config) { return cordova(this, "scan", { "observable": true }, arguments); };
    DocumentReader.prototype.recognize = function (config) { return cordova(this, "recognize", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImages = function (images) { return cordova(this, "recognizeImages", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraID = function (cameraID) { return cordova(this, "showScannerWithCameraID", { "observable": true }, arguments); };
    DocumentReader.prototype.runAutoUpdate = function (databaseType) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReader.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    DocumentReader.prototype.setRfidScenario = function (scenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReader.prototype.initializeReader = function (config) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReader.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImage = function (image) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeData = function (data) { return cordova(this, "recognizeData", { "observable": true }, arguments); };
    DocumentReader.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReader.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReader.prototype.provideTASignature = function (signature) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReader.prototype.parseCoreResults = function (json) { return cordova(this, "parseCoreResults", {}, arguments); };
    DocumentReader.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReader.prototype.recognizeImageWithOpts = function (image, options) { return cordova(this, "recognizeImageWithOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeVideoFrame = function (byteString, params) { return cordova(this, "recognizeVideoFrame", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraIDAndOpts = function (cameraID, options) { return cordova(this, "showScannerWithCameraIDAndOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithCameraMode = function (image, mode) { return cordova(this, "recognizeImageWithCameraMode", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImagesWithImageInputs = function (images) { return cordova(this, "recognizeImagesWithImageInputs", {}, arguments); };
    DocumentReader.prototype.setLanguage = function (language) { return cordova(this, "setLanguage", {}, arguments); };
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
    DocumentReader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DocumentReader, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    DocumentReader.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DocumentReader });
    DocumentReader.pluginName = "DocumentReader";
    DocumentReader.plugin = "cordova-plugin-document-reader-api";
    DocumentReader.pluginRef = "DocumentReaderPlugin.DocumentReader";
    DocumentReader.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReader.platforms = ["Android", "iOS"];
    DocumentReader = __decorate([], DocumentReader);
    return DocumentReader;
}(AwesomeCordovaNativePlugin));
export { DocumentReader };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DocumentReader, decorators: [{
            type: Injectable
        }], propDecorators: { initializeReaderAutomatically: [], isBlePermissionsGranted: [], startBluetoothService: [], initializeReaderBleDeviceConfig: [], getTag: [], getAPIVersion: [], getAvailableScenarios: [], isRFIDAvailableForUse: [], getCoreMode: [], getCoreVersion: [], getDatabaseDate: [], getDatabaseID: [], getDatabaseVersion: [], getDocumentReaderIsReady: [], getDocumentReaderStatus: [], getDatabaseCountriesNumber: [], getDatabaseDocumentsNumber: [], selectedScenario: [], getSessionLogFolder: [], getDatabaseDescription: [], showScanner: [], startNewPage: [], startNewSession: [], startRFIDReader: [], stopRFIDReader: [], stopRFIDReaderWithErrorMessage: [], stopScanner: [], deinitializeReader: [], isAuthenticatorAvailableForUse: [], getConfig: [], getRfidScenario: [], getLicenseExpiryDate: [], getLicenseCountryFilter: [], licenseIsRfidAvailable: [], getCameraSessionIsPaused: [], removeDatabase: [], cancelDBUpdate: [], resetConfiguration: [], clearPKDCertificates: [], readRFID: [], getRfidSessionStatus: [], setRfidDelegate: [], setEnableCoreLogs: [], addPKDCertificates: [], setCameraSessionIsPaused: [], setTag: [], checkDatabaseUpdate: [], scan: [], recognize: [], recognizeImages: [], showScannerWithCameraID: [], runAutoUpdate: [], setConfig: [], setRfidScenario: [], initializeReader: [], prepareDatabase: [], recognizeImage: [], recognizeData: [], setRfidSessionStatus: [], providePACertificates: [], provideTACertificates: [], provideTASignature: [], parseCoreResults: [], setTCCParams: [], recognizeImageWithOpts: [], recognizeVideoFrame: [], showScannerWithCameraIDAndOpts: [], recognizeImageWithCameraMode: [], recognizeImagesWithImageInputs: [], setLanguage: [], textFieldValueByType: [], textFieldValueByTypeLcid: [], textFieldValueByTypeSource: [], textFieldValueByTypeLcidSource: [], textFieldValueByTypeSourceOriginal: [], textFieldValueByTypeLcidSourceOriginal: [], textFieldByType: [], textFieldByTypeLcid: [], graphicFieldByTypeSource: [], graphicFieldByTypeSourcePageIndex: [], graphicFieldByTypeSourcePageIndexLight: [], graphicFieldImageByType: [], graphicFieldImageByTypeSource: [], graphicFieldImageByTypeSourcePageIndex: [], graphicFieldImageByTypeSourcePageIndexLight: [], containers: [], encryptedContainers: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0lBaUJ2QiwrQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsZ0NBQWdDLEdBQUcsVUFBVSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7UUFDeEYsTUFBTSxDQUFDLGlDQUFpQyxHQUFHLFVBQVUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1FBQzFGLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtR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eEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsdUJBQXVCLEVBQUUsR0FBRztJQUM1Qix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIs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QVcsTUFRWCxZQUFZLE1BUVosZUFBZSxNQVFmLGVBQWUsTUFRZixjQUFjLE1BU2QsOEJBQThCLE1BUTlCLFdBQVcsTUFRWCxrQkFBa0IsTUFRbEIsOEJBQThCLE1BUTlCLFNBQVMsTUFRVCxlQUFlLE1BUWYsb0JBQW9CLE1BUXBCLHVCQUF1QixNQVF2QixzQkFBc0IsTUFRdEIsd0JBQXdCLE1BUXhCLGNBQWMsTUFRZCxjQUFjLE1BUWQsa0JBQWtCLE1BUWxCLG9CQUFvQixNQVFwQixRQUFRLE1BUVIsb0JBQW9CLE1BYXBCLGVBQWUsTUFTZixpQkFBaUIsTUFZakIsa0JBQWtCLE1BU2xCLHdCQUF3QixNQVN4QixNQUFNLE1BU04sbUJBQW1CLE1BU25CLElBQUksTUFTSixTQUFTLE1BWVQsZUFBZSxNQVlmLHVCQUF1QixNQVN2QixhQUFhLE1BY2IsU0FBUyxNQVdULGVBQWUsTUFlZixnQkFBZ0IsTUFTaEIsZUFBZSxNQVlmLGNBQWMsTUFZZCxhQUFhLE1BU2Isb0JBQW9CLE1BWXBCLHFCQUFxQixNQVlyQixxQkFBcUIsTUFTckIsa0JBQWtCLE1BU2xCLGdCQUFnQixNQWNoQixZQUFZLE1Ba0JaLHNCQUFzQixNQVV0QixtQkFBbUIsTUFrQm5CLDhCQUE4QixNQVU5Qiw0QkFBNEIsTUFZNUIsOEJBQThCLE1BUzlCLFdBQVcsTUFJWCxvQkFBb0IsTUFHcEIsd0JBQXdCLE1BR3hCLDBCQUEwQixNQUcxQiw4QkFBOEIsTUFHOUIsa0NBQWtDLE1BR2xDLHNDQUFzQyxNQUd0QyxlQUFlLE1BR2YsbUJBQW1CLE1BR25CLHdCQUF3QixNQUd4QixpQ0FBaUMsTUFHakMsc0NBQXNDLE1BR3RDLHVCQUF1QixNQUd2Qiw2QkFBNkIsTUFHN0Isc0NBQXNDLE1BR3RDLDJDQUEyQyxNQUczQyxVQUFVLE1BR1YsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBtdWx0aVBhZ2VPZmY/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZU9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgdXZUb3JjaD86IGJvb2xlYW5cbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lT3JpZW50YXRpb24gPSBqc29uT2JqZWN0W1wiZnJhbWVPcmllbnRhdGlvblwiXVxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyRmllbGRSZWN0IHtcbiAgICBib3R0b20/OiBudW1iZXJcbiAgICB0b3A/OiBudW1iZXJcbiAgICBsZWZ0PzogbnVtYmVyXG4gICAgcmlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyRmllbGRSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsaWdodD86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIG9yaWdpbmFsUGFnZUluZGV4PzogbnVtYmVyXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgbGlnaHROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBmaWVsZFJlY3Q/OiBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQubGlnaHROYW1lID0ganNvbk9iamVjdFtcImxpZ2h0TmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkUmVjdCA9IERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgdmFsaWRpdHk/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBjb21wYXJpc29uPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuICAgIG9yaWdpbmFsU3ltYm9scz86IERvY3VtZW50UmVhZGVyU3ltYm9sW11cbiAgICByZmlkT3JpZ2luPzogRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVmFsdWUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclZhbHVlXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHkgPSBqc29uT2JqZWN0W1widmFsaWRpdHlcIl1cbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uID0ge31cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb21wYXJpc29uW2kgYXMgdW5rbm93biBhcyBudW1iZXJdID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25cIl1baV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3JpZ2luYWxTeW1ib2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJvcmlnaW5hbFN5bWJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJvcmlnaW5hbFN5bWJvbHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJTeW1ib2wuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZmlkT3JpZ2luID0gRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkT3JpZ2luXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG4gICAgbGNpZD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGxjaWROYW1lPzogc3RyaW5nXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBnZXRWYWx1ZT86IERvY3VtZW50UmVhZGVyVmFsdWVcbiAgICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cbiAgICBjb21wYXJpc29uTGlzdD86IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbltdXG4gICAgdmFsaWRpdHlMaXN0PzogRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVtdXG4gICAgY29tcGFyaXNvblN0YXR1cz86IG51bWJlclxuICAgIHZhbGlkaXR5U3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRcblxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGNpZCA9IGpzb25PYmplY3RbXCJsY2lkXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmdldFZhbHVlID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ2V0VmFsdWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWx1ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInZhbHVlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInZhbHVlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29tcGFyaXNvbkxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uLmZyb21Kc29uKGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsaWRpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbGlkaXR5TGlzdFwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWxpZGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY29tcGFyaXNvblN0YXR1cz86IG51bWJlclxuICAgIHZhbGlkaXR5U3RhdHVzPzogbnVtYmVyXG4gICAgYXZhaWxhYmxlU291cmNlTGlzdD86IERvY3VtZW50UmVhZGVyVGV4dFNvdXJjZVtdXG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY29tcGFyaXNvblN0YXR1cyA9IGpzb25PYmplY3RbXCJjb21wYXJpc29uU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF2YWlsYWJsZVNvdXJjZUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvb3JkaW5hdGVcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudFBvc2l0aW9uIHtcbiAgICBkb2NGb3JtYXQ/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIGRwaT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGludmVyc2U/OiBudW1iZXJcbiAgICBwZXJzcGVjdGl2ZVRyPzogbnVtYmVyXG4gICAgb2JqQXJlYT86IG51bWJlclxuICAgIG9iakludEFuZ2xlRGV2PzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzPzogbnVtYmVyXG4gICAgYW5nbGU/OiBudW1iZXJcbiAgICBjZW50ZXI/OiBDb29yZGluYXRlXG4gICAgbGVmdFRvcD86IENvb3JkaW5hdGVcbiAgICBsZWZ0Qm90dG9tPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0VG9wPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0Qm90dG9tPzogQ29vcmRpbmF0ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFbGVtZW50UG9zaXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFbGVtZW50UG9zaXRpb25cblxuICAgICAgICByZXN1bHQuZG9jRm9ybWF0ID0ganNvbk9iamVjdFtcImRvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmRwaSA9IGpzb25PYmplY3RbXCJkcGlcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmludmVyc2UgPSBqc29uT2JqZWN0W1wiaW52ZXJzZVwiXVxuICAgICAgICByZXN1bHQucGVyc3BlY3RpdmVUciA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZVRyXCJdXG4gICAgICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICAgICAgcmVzdWx0Lm9iakludEFuZ2xlRGV2ID0ganNvbk9iamVjdFtcIm9iakludEFuZ2xlRGV2XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgICAgICByZXN1bHQuY2VudGVyID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VudGVyXCJdKVxuICAgICAgICByZXN1bHQubGVmdFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImxlZnRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5yaWdodEJvdHRvbSA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0Qm90dG9tXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHkge1xuICAgIGZlYXR1cmVUeXBlPzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBpc0RlcHJlY2F0ZWQ/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIElDQU9Db2RlPzogc3RyaW5nXG4gICAgZERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgZFllYXI/OiBzdHJpbmdcbiAgICBkQ291bnRyeU5hbWU/OiBzdHJpbmdcbiAgICBGRFNJRD86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0LmlzRGVwcmVjYXRlZCA9IGpzb25PYmplY3RbXCJpc0RlcHJlY2F0ZWRcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgbm90aWZpY2F0aW9uQ29kZT86IG51bWJlclxuICAgIGRhdGFGaWxlVHlwZT86IG51bWJlclxuICAgIHByb2dyZXNzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9uQ29kZSA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhRmlsZVR5cGUgPSBqc29uT2JqZWN0W1wiZGF0YUZpbGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9ncmVzcyA9IGpzb25PYmplY3RbXCJwcm9ncmVzc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB7XG4gICAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICAgICAgcmVzdWx0LmFjdGl2ZU9wdGlvbklkeCA9IGpzb25PYmplY3RbXCJhY3RpdmVPcHRpb25JZHhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHtcbiAgICBzZWN1cml0eU9iamVjdD86IENlcnRpZmljYXRlRGF0YVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0ID0gQ2VydGlmaWNhdGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgcEFTdGF0dXM/OiBudW1iZXJcbiAgICByZWFkaW5nU3RhdHVzPzogbnVtYmVyXG4gICAgZmlsZUlEPzogc3RyaW5nXG4gICAgZmlsZURhdGE/OiBGaWxlRGF0YVxuICAgIGNlcnRpZmljYXRlcz86IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG4gICAgZG9jRmllbGRzVGV4dD86IG51bWJlcltdXG4gICAgZG9jRmllbGRzR3JhcGhpY3M/OiBudW1iZXJbXVxuICAgIGRvY0ZpZWxkc09yaWdpbmFscz86IG51bWJlcltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdUaW1lID0ganNvbk9iamVjdFtcInJlYWRpbmdUaW1lXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXBwbGljYXRpb25cblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbklEID0ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uSURcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC51bmljb2RlVmVyc2lvbiA9IGpzb25PYmplY3RbXCJ1bmljb2RlVmVyc2lvblwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmlsZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWxlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JtYXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aG9yaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEF0dHJpYnV0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICB0eXBlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RCZWZvcmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QmVmb3JlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBvcmlnaW4/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBWYWx1ZVxuICAgIHZhbGlkaXR5PzogVmFsaWRpdHlcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBzdWJqZWN0PzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlQ2hhaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICAgICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0ganNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdCA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25lckluZm8ge1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIGRhdGFUb0hhc2g/OiBzdHJpbmdcbiAgICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzZXJpYWxOdW1iZXI/OiBWYWx1ZVxuICAgIHNpZ25hdHVyZT86IFZhbHVlXG4gICAgc3ViamVjdEtleUlkZW50aWZpZXI/OiBWYWx1ZVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lZEF0dHJpYnV0ZXM/OiBFeHRlbnNpb25bXVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpZ25lckluZm9cblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YVRvSGFzaCA9IGpzb25PYmplY3RbXCJkYXRhVG9IYXNoXCJdXG4gICAgICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdKVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdFxuXG4gICAgICAgIHJlc3VsdC5maWxlUmVmZXJlbmNlID0ganNvbk9iamVjdFtcImZpbGVSZWZlcmVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQub2JqZWN0VHlwZSA9IGpzb25PYmplY3RbXCJvYmplY3RUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENhcmRQcm9wZXJ0aWVzXG5cbiAgICAgICAgcmVzdWx0LmFUUUEgPSBqc29uT2JqZWN0W1wiYVRRQVwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVTID0ganNvbk9iamVjdFtcImJpdFJhdGVTXCJdXG4gICAgICAgIHJlc3VsdC5jaGlwVHlwZUEgPSBqc29uT2JqZWN0W1wiY2hpcFR5cGVBXCJdXG4gICAgICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkVHlwZSA9IGpzb25PYmplY3RbXCJyZmlkVHlwZVwiXVxuICAgICAgICByZXN1bHQuc0FLID0ganNvbk9iamVjdFtcInNBS1wiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnRNaWZhcmUgPSBqc29uT2JqZWN0W1wic3VwcG9ydE1pZmFyZVwiXVxuICAgICAgICByZXN1bHQuYVRRQiA9IGpzb25PYmplY3RbXCJhVFFCXCJdXG4gICAgICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTEgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUxXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTIgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUyXCJdXG4gICAgICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gICAgdG90YWxCeXRlc1JlY2VpdmVkPzogbnVtYmVyXG4gICAgdG90YWxCeXRlc1NlbnQ/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBleHRMZVN1cHBvcnQ/OiBudW1iZXJcbiAgICBwcm9jZXNzVGltZT86IG51bWJlclxuICAgIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuICAgIGRhdGFHcm91cHM/OiBudW1iZXJbXVxuICAgIGRhdGFGaWVsZHM/OiBEYXRhRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1JlY2VpdmVkID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNSZWNlaXZlZFwiXVxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1NlbnQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1NlbnRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmV4dExlU3VwcG9ydCA9IGpzb25PYmplY3RbXCJleHRMZVN1cHBvcnRcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NUaW1lID0ganNvbk9iamVjdFtcInByb2Nlc3NUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICAgICAgcmVzdWx0LmFjY2Vzc0NvbnRyb2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwbGljYXRpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VjdXJpdHlPYmplY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhR3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzLnB1c2goanNvbk9iamVjdFtcImRhdGFHcm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRhdGFGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFGaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhRmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERhdGFGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGF0YUZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhRmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGQge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGF0YUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0YUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUERGNDE3SW5mb1xuXG4gICAgICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICAgICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgICAgICByZXN1bHQucm93cyA9IGpzb25PYmplY3RbXCJyb3dzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IGFueVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRcblxuICAgICAgICByZXN1bHQuYmFyY29kZVR5cGUgPSBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnBkZjQxN0luZm8gPSBQREY0MTdJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJwZGY0MTdJbmZvXCJdKVxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjaGVja3M/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNoZWNrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNoZWNrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrLmZyb21Kc29uKGpzb25PYmplY3RbXCJjaGVja3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2hlY2tzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlPzogbnVtYmVyXG4gICAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGVOYW1lPzogc3RyaW5nXG4gICAgZWxlbWVudERpYWdub3NlTmFtZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICAgIGFjdGlvbj86IG51bWJlclxuICAgIHJlc3VsdHM/OiBEb2N1bWVudFJlYWRlclJlc3VsdHNcbiAgICBlcnJvcj86IFJlZ3VsYUV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb25cblxuICAgICAgICByZXN1bHQuYWN0aW9uID0ganNvbk9iamVjdFtcImFjdGlvblwiXVxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0cy5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXSlcbiAgICAgICAgcmVzdWx0LmVycm9yID0gUmVndWxhRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbj86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb25cblxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9uID0ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvblwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVndWxhRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlZ3VsYUV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlZ3VsYUV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEtEQ2VydGlmaWNhdGUge1xuICAgIGJpbmFyeURhdGE/OiBzdHJpbmdcbiAgICByZXNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcml2YXRlS2V5Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBLRENlcnRpZmljYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEtEQ2VydGlmaWNhdGVcblxuICAgICAgICByZXN1bHQuYmluYXJ5RGF0YSA9IGpzb25PYmplY3RbXCJiaW5hcnlEYXRhXCJdXG4gICAgICAgIHJlc3VsdC5yZXNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wicmVzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcml2YXRlS2V5ID0ganNvbk9iamVjdFtcInByaXZhdGVLZXlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dFBhcmFtIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBkaXNhYmxlRnJhbWVTaGlmdElSPzogYm9vbGVhblxuICAgIGRvRmxpcFlBeGlzPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0UGFyYW0gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZUlucHV0UGFyYW1cblxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuZGlzYWJsZUZyYW1lU2hpZnRJUiA9IGpzb25PYmplY3RbXCJkaXNhYmxlRnJhbWVTaGlmdElSXCJdXG4gICAgICAgIHJlc3VsdC5kb0ZsaXBZQXhpcyA9IGpzb25PYmplY3RbXCJkb0ZsaXBZQXhpc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQQVJlc291cmNlc0lzc3VlciB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgZnJpZW5kbHlOYW1lPzogc3RyaW5nXG4gICAgYXR0cmlidXRlcz86IFBBQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFSZXNvdXJjZXNJc3N1ZXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQQVJlc291cmNlc0lzc3VlclxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnB1c2goanNvbk9iamVjdFtcImRhdGFcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBBQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQQUF0dHJpYnV0ZVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRBQ2hhbGxlbmdlIHtcbiAgICBkYXRhPzogYW55W11cbiAgICBhdXhQQ0Q/OiBzdHJpbmdcbiAgICBjaGFsbGVuZ2VQSUNDPzogc3RyaW5nXG4gICAgaGFzaFBLPzogc3RyaW5nXG4gICAgaWRQSUNDPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRBQ2hhbGxlbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEFDaGFsbGVuZ2VcblxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hdXhQQ0QgPSBqc29uT2JqZWN0W1wiYXV4UENEXCJdXG4gICAgICAgIHJlc3VsdC5jaGFsbGVuZ2VQSUNDID0ganNvbk9iamVjdFtcImNoYWxsZW5nZVBJQ0NcIl1cbiAgICAgICAgcmVzdWx0Lmhhc2hQSyA9IGpzb25PYmplY3RbXCJoYXNoUEtcIl1cbiAgICAgICAgcmVzdWx0LmlkUElDQyA9IGpzb25PYmplY3RbXCJpZFBJQ0NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgb3B0aWNhbD86IG51bWJlclxuICAgIGRldGFpbHNPcHRpY2FsPzogRGV0YWlsc09wdGljYWxcbiAgICByZmlkPzogbnVtYmVyXG4gICAgZGV0YWlsc1JGSUQ/OiBEZXRhaWxzUkZJRFxuICAgIHBvcnRyYWl0PzogbnVtYmVyXG4gICAgc3RvcExpc3Q/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQub3B0aWNhbCA9IGpzb25PYmplY3RbXCJvcHRpY2FsXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzT3B0aWNhbCA9IERldGFpbHNPcHRpY2FsLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzT3B0aWNhbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWQgPSBqc29uT2JqZWN0W1wicmZpZFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc1JGSUQgPSBEZXRhaWxzUkZJRC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc1JGSURcIl0pXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuc3RvcExpc3QgPSBqc29uT2JqZWN0W1wic3RvcExpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc09wdGljYWwge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBtcno/OiBudW1iZXJcbiAgICB0ZXh0PzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIHNlY3VyaXR5PzogbnVtYmVyXG4gICAgaW1hZ2VRQT86IG51bWJlclxuICAgIGV4cGlyeT86IG51bWJlclxuICAgIHZkcz86IG51bWJlclxuICAgIHBhZ2VzQ291bnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc09wdGljYWwgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzT3B0aWNhbFxuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm1yeiA9IGpzb25PYmplY3RbXCJtcnpcIl1cbiAgICAgICAgcmVzdWx0LnRleHQgPSBqc29uT2JqZWN0W1widGV4dFwiXVxuICAgICAgICByZXN1bHQuZG9jVHlwZSA9IGpzb25PYmplY3RbXCJkb2NUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zZWN1cml0eSA9IGpzb25PYmplY3RbXCJzZWN1cml0eVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRQSA9IGpzb25PYmplY3RbXCJpbWFnZVFBXCJdXG4gICAgICAgIHJlc3VsdC5leHBpcnkgPSBqc29uT2JqZWN0W1wiZXhwaXJ5XCJdXG4gICAgICAgIHJlc3VsdC52ZHMgPSBqc29uT2JqZWN0W1widmRzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlc0NvdW50ID0ganNvbk9iamVjdFtcInBhZ2VzQ291bnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc1JGSUQge1xuICAgIHBhPzogbnVtYmVyXG4gICAgY2E/OiBudW1iZXJcbiAgICBhYT86IG51bWJlclxuICAgIHRhPzogbnVtYmVyXG4gICAgYmFjPzogbnVtYmVyXG4gICAgcGFjZT86IG51bWJlclxuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc1JGSUQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzUkZJRFxuXG4gICAgICAgIHJlc3VsdC5wYSA9IGpzb25PYmplY3RbXCJwYVwiXVxuICAgICAgICByZXN1bHQuY2EgPSBqc29uT2JqZWN0W1wiY2FcIl1cbiAgICAgICAgcmVzdWx0LmFhID0ganNvbk9iamVjdFtcImFhXCJdXG4gICAgICAgIHJlc3VsdC50YSA9IGpzb25PYmplY3RbXCJ0YVwiXVxuICAgICAgICByZXN1bHQuYmFjID0ganNvbk9iamVjdFtcImJhY1wiXVxuICAgICAgICByZXN1bHQucGFjZSA9IGpzb25PYmplY3RbXCJwYWNlXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVkRTTkNEYXRhIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIGlzc3VpbmdDb3VudHJ5Pzogc3RyaW5nXG4gICAgbWVzc2FnZT86IGFueVxuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHNpZ25hdHVyZT86IEJ5dGVzRGF0YVxuICAgIGNlcnRpZmljYXRlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGVDaGFpbj86IENlcnRpZmljYXRlQ2hhaW5bXVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWRFNOQ0RhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWRFNOQ0RhdGFcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lmlzc3VpbmdDb3VudHJ5ID0ganNvbk9iamVjdFtcImlzc3VpbmdDb3VudHJ5XCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ5dGVzRGF0YSB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQnl0ZXNEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQnl0ZXNEYXRhXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXREYXRhIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBsaWdodD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIGltZ0J5dGVzPzogYW55W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dERhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZUlucHV0RGF0YVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5saWdodCA9IGpzb25PYmplY3RbXCJsaWdodFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQuaW1nQnl0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltZ0J5dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1nQnl0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaW1nQnl0ZXMucHVzaChqc29uT2JqZWN0W1wiaW1nQnl0ZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2Uge1xuICAgIGRhdGFiYXNlSUQ/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogc3RyaW5nXG4gICAgZGF0ZT86IHN0cmluZ1xuICAgIGRhdGFiYXNlRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBjb3VudHJpZXNOdW1iZXI/OiBudW1iZXJcbiAgICBkb2N1bWVudHNOdW1iZXI/OiBudW1iZXJcbiAgICBzaXplPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2VcblxuICAgICAgICByZXN1bHQuZGF0YWJhc2VJRCA9IGpzb25PYmplY3RbXCJkYXRhYmFzZUlEXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LmRhdGUgPSBqc29uT2JqZWN0W1wiZGF0ZVwiXVxuICAgICAgICByZXN1bHQuZGF0YWJhc2VEZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkYXRhYmFzZURlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5jb3VudHJpZXNOdW1iZXIgPSBqc29uT2JqZWN0W1wiY291bnRyaWVzTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudHNOdW1iZXIgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRzTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uIHtcbiAgICBzb3VyY2VUeXBlTGVmdD86IG51bWJlclxuICAgIHNvdXJjZVR5cGVSaWdodD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb25cblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZUxlZnQgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZUxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGVSaWdodCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlUmlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luIHtcbiAgICBkZz86IG51bWJlclxuICAgIGRnVGFnPzogbnVtYmVyXG4gICAgZW50cnlWaWV3PzogbnVtYmVyXG4gICAgdGFnRW50cnk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luXG5cbiAgICAgICAgcmVzdWx0LmRnID0ganNvbk9iamVjdFtcImRnXCJdXG4gICAgICAgIHJlc3VsdC5kZ1RhZyA9IGpzb25PYmplY3RbXCJkZ1RhZ1wiXVxuICAgICAgICByZXN1bHQuZW50cnlWaWV3ID0ganNvbk9iamVjdFtcImVudHJ5Vmlld1wiXVxuICAgICAgICByZXN1bHQudGFnRW50cnkgPSBqc29uT2JqZWN0W1widGFnRW50cnlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlIHtcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgc291cmNlPzogc3RyaW5nXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlXG5cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQuc291cmNlID0ganNvbk9iamVjdFtcInNvdXJjZVwiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHlTdGF0dXMgPSBqc29uT2JqZWN0W1widmFsaWRpdHlTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJTeW1ib2wge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICByZWN0PzogUmVjdFxuICAgIHByb2JhYmlsaXR5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU3ltYm9sIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJTeW1ib2xcblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5yZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsaWRpdHkge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VBcGlQYXJhbXMge1xuICAgIHVybD86IHN0cmluZ1xuICAgIG1vZGU/OiBzdHJpbmdcbiAgICBzZWFyY2hQYXJhbXM/OiBTZWFyY2hcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBzZXJ2aWNlVGltZW91dD86IG51bWJlclxuICAgIHByb3h5Pzogc3RyaW5nXG4gICAgcHJveHlQYXNzd29yZD86IHN0cmluZ1xuICAgIHByb3h5VHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQXBpUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUFwaVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5tb2RlID0ganNvbk9iamVjdFtcIm1vZGVcIl1cbiAgICAgICAgcmVzdWx0LnNlYXJjaFBhcmFtcyA9IFNlYXJjaC5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VhcmNoUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQudGhyZXNob2xkID0ganNvbk9iamVjdFtcInRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuc2VydmljZVRpbWVvdXQgPSBqc29uT2JqZWN0W1wic2VydmljZVRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LnByb3h5ID0ganNvbk9iamVjdFtcInByb3h5XCJdXG4gICAgICAgIHJlc3VsdC5wcm94eVBhc3N3b3JkID0ganNvbk9iamVjdFtcInByb3h5UGFzc3dvcmRcIl1cbiAgICAgICAgcmVzdWx0LnByb3h5VHlwZSA9IGpzb25PYmplY3RbXCJwcm94eVR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoIHtcbiAgICBsaW1pdD86IG51bWJlclxuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIGdyb3VwSWRzPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoXG5cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5ncm91cElkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cElkc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cElkcy5wdXNoKGpzb25PYmplY3RbXCJncm91cElkc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVFBIHtcbiAgICBkcGlUaHJlc2hvbGQ/OiBudW1iZXJcbiAgICBhbmdsZVRocmVzaG9sZD86IG51bWJlclxuICAgIGZvY3VzQ2hlY2s/OiBib29sZWFuXG4gICAgZ2xhcmVzQ2hlY2s/OiBib29sZWFuXG4gICAgY29sb3JuZXNzQ2hlY2s/OiBib29sZWFuXG4gICAgbW9pcmVDaGVjaz86IGJvb2xlYW5cbiAgICBleHBlY3RlZFBhc3M/OiBudW1iZXJbXVxuICAgIGdsYXJlc0NoZWNrUGFyYW1zPzogR2xhcmVzQ2hlY2tQYXJhbXNcbiAgICBkb2N1bWVudFBvc2l0aW9uSW5kZW50PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUUEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVFBXG5cbiAgICAgICAgcmVzdWx0LmRwaVRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJkcGlUaHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlVGhyZXNob2xkID0ganNvbk9iamVjdFtcImFuZ2xlVGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5mb2N1c0NoZWNrID0ganNvbk9iamVjdFtcImZvY3VzQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmdsYXJlc0NoZWNrID0ganNvbk9iamVjdFtcImdsYXJlc0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5jb2xvcm5lc3NDaGVjayA9IGpzb25PYmplY3RbXCJjb2xvcm5lc3NDaGVja1wiXVxuICAgICAgICByZXN1bHQubW9pcmVDaGVjayA9IGpzb25PYmplY3RbXCJtb2lyZUNoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MucHVzaChqc29uT2JqZWN0W1wiZXhwZWN0ZWRQYXNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5nbGFyZXNDaGVja1BhcmFtcyA9IEdsYXJlc0NoZWNrUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJnbGFyZXNDaGVja1BhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb25JbmRlbnQgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvbkluZGVudFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbGFyZXNDaGVja1BhcmFtcyB7XG4gICAgaW1nTWFyZ2luUGFydD86IG51bWJlclxuICAgIG1heEdsYXJpbmdQYXJ0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEdsYXJlc0NoZWNrUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgR2xhcmVzQ2hlY2tQYXJhbXNcblxuICAgICAgICByZXN1bHQuaW1nTWFyZ2luUGFydCA9IGpzb25PYmplY3RbXCJpbWdNYXJnaW5QYXJ0XCJdXG4gICAgICAgIHJlc3VsdC5tYXhHbGFyaW5nUGFydCA9IGpzb25PYmplY3RbXCJtYXhHbGFyaW5nUGFydFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEUGFyYW1zIHtcbiAgICBwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURQYXJhbXNcblxuICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2RlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlcy5wdXNoKGpzb25PYmplY3RbXCJwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ubGluZVByb2Nlc3NpbmdDb25maWcge1xuICAgIG1vZGU/OiBudW1iZXJcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBwcm9jZXNzUGFyYW0/OiBhbnlcbiAgICBpbWFnZUZvcm1hdD86IG51bWJlclxuICAgIGltYWdlQ29tcHJlc3Npb25RdWFsaXR5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE9ubGluZVByb2Nlc3NpbmdDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0Lm1vZGUgPSBqc29uT2JqZWN0W1wibW9kZVwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc1BhcmFtID0ganNvbk9iamVjdFtcInByb2Nlc3NQYXJhbVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VGb3JtYXQgPSBqc29uT2JqZWN0W1wiaW1hZ2VGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlQ29tcHJlc3Npb25RdWFsaXR5ID0ganNvbk9iamVjdFtcImltYWdlQ29tcHJlc3Npb25RdWFsaXR5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjYW5uZXJDb25maWcge1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgbGl2ZVBvcnRyYWl0Pzogc3RyaW5nXG4gICAgZXh0UG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBvbmxpbmVQcm9jZXNzaW5nQ29uZmlnPzogT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIGNhbWVyYUlkPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNjYW5uZXJDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTY2FubmVyQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5saXZlUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wibGl2ZVBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5leHRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJleHRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQub25saW5lUHJvY2Vzc2luZ0NvbmZpZyA9IE9ubGluZVByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcIm9ubGluZVByb2Nlc3NpbmdDb25maWdcIl0pXG4gICAgICAgIHJlc3VsdC5jYW1lcmFJZCA9IGpzb25PYmplY3RbXCJjYW1lcmFJZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvZ25pemVDb25maWcge1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgbGl2ZVBvcnRyYWl0Pzogc3RyaW5nXG4gICAgZXh0UG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBvbmxpbmVQcm9jZXNzaW5nQ29uZmlnPzogT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIGltYWdlPzogc3RyaW5nXG4gICAgb25lU2hvdElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGltYWdlcz86IHN0cmluZ1tdXG4gICAgaW1hZ2VJbnB1dERhdGE/OiBJbWFnZUlucHV0RGF0YVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY29nbml6ZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY29nbml6ZUNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQubGl2ZVBvcnRyYWl0ID0ganNvbk9iamVjdFtcImxpdmVQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZXh0UG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZXh0UG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0Lm9ubGluZVByb2Nlc3NpbmdDb25maWcgPSBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJvbmxpbmVQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0Lm9uZVNob3RJZGVudGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJvbmVTaG90SWRlbnRpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlSW5wdXREYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlSW5wdXREYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlSW5wdXREYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZUlucHV0RGF0YS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICB2aWRlb0NhcHR1cmVTZXNzaW9uSWQ/OiBzdHJpbmdcbiAgICBjaGlwUGFnZT86IG51bWJlclxuICAgIGlyRWxhcHNlZFRpbWU/OiBudW1iZXJcbiAgICBwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXM/OiBudW1iZXJcbiAgICBlbGFwc2VkVGltZT86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lUkZJRD86IG51bWJlclxuICAgIG1vcmVQYWdlc0F2YWlsYWJsZT86IG51bWJlclxuICAgIHJmaWRSZXN1bHQ/OiBudW1iZXJcbiAgICBoaWdoUmVzb2x1dGlvbj86IGJvb2xlYW5cbiAgICBncmFwaGljUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG4gICAgdGV4dFJlc3VsdD86IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuICAgIGRvY3VtZW50UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIGJhcmNvZGVQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgbXJ6UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIGltYWdlUXVhbGl0eT86IEltYWdlUXVhbGl0eUdyb3VwW11cbiAgICByYXdSZXN1bHQ/OiBzdHJpbmdcbiAgICBkb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbj86IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uXG4gICAgcmZpZFNlc3Npb25EYXRhPzogUkZJRFNlc3Npb25EYXRhXG4gICAgYXV0aGVudGljaXR5UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcbiAgICBiYXJjb2RlUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG4gICAgcHBtSW4/OiBudW1iZXJcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICAgICAgcmVzdWx0LnZpZGVvQ2FwdHVyZVNlc3Npb25JZCA9IGpzb25PYmplY3RbXCJ2aWRlb0NhcHR1cmVTZXNzaW9uSWRcIl1cbiAgICAgICAgcmVzdWx0LmNoaXBQYWdlID0ganNvbk9iamVjdFtcImNoaXBQYWdlXCJdXG4gICAgICAgIHJlc3VsdC5pckVsYXBzZWRUaW1lID0ganNvbk9iamVjdFtcImlyRWxhcHNlZFRpbWVcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZVJGSUQgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVSRklEXCJdXG4gICAgICAgIHJlc3VsdC5tb3JlUGFnZXNBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wibW9yZVBhZ2VzQXZhaWxhYmxlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUmVzdWx0ID0ganNvbk9iamVjdFtcInJmaWRSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmhpZ2hSZXNvbHV0aW9uID0ganNvbk9iamVjdFtcImhpZ2hSZXNvbHV0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5ncmFwaGljUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJncmFwaGljUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQudGV4dFJlc3VsdCA9IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1widGV4dFJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubXJ6UG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlUXVhbGl0eUdyb3VwLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3UmVzdWx0ID0ganNvbk9iamVjdFtcInJhd1Jlc3VsdFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQucHBtSW4gPSBqc29uT2JqZWN0W1wicHBtSW5cIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50VHlwZSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc3RhdHVzID0gRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJzdGF0dXNcIl0pXG4gICAgICAgIHJlc3VsdC52ZHNuY0RhdGEgPSBWRFNOQ0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInZkc25jRGF0YVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0F1dGhlbnRpY2l0eSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFVWX0xVTUlORVNDRU5DRTogMSxcbiAgICBJUl9COTAwOiAyLFxuICAgIElNQUdFX1BBVFRFUk46IDQsXG4gICAgQVhJQUxfUFJPVEVDVElPTjogOCxcbiAgICBVVl9GSUJFUlM6IDE2LFxuICAgIElSX1ZJU0lCSUxJVFk6IDMyLFxuICAgIE9DUl9TRUNVUklUWV9URVhUOiA2NCxcbiAgICBJUEk6IDEyOCxcbiAgICBQSE9UT19FTUJFRF9UWVBFOiA1MTIsXG4gICAgSE9MT0dSQU1TOiA0MDk2LFxuICAgIFBIT1RPX0FSRUE6IDgxOTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTjogMzI3NjgsXG4gICAgQkFSQ09ERV9GT1JNQVRfQ0hFQ0s6IDY1NTM2LFxuICAgIEtJTkVHUkFNOiAxMzEwNzIsXG4gICAgSE9MT0dSQU1TX0RFVEVDVElPTjogNTI0Mjg4LFxuICAgIE1SWjogODM4ODYwOCxcbiAgICBTVEFUVVNfT05MWTogMHg4MDAwMDAwMCxcbiAgICBPVkk6IDEwMjQsXG4gICAgTElWRU5FU1M6IDIwOTcxNTIsXG4gICAgT0NSOiA0MTk0MzA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRXJyb3JDb2RlcyA9IHtcbiAgICBSRklEX0VSUk9SX05PX0VSUk9SOiAweDAwMDAwMDAxLFxuICAgIFJGSURfRVJST1JfQUxSRUFEWV9ET05FOiAweDAwMDAwMDAyLFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAweGZmZmZmZmZmLFxuICAgIFJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDogMHg4MDAxMDAwMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IDB4ODAwMTAwMDIsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjogMHg4MDAxMDAwNCxcbiAgICBSRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDogMHg4MDAxMDAwNSxcbiAgICBSRklEX0VSUk9SX05PVF9FTk9VR0hfTUVNT1JZOiAweDgwMDEwMDA2LFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6IDB4ODAwMTAwMDgsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IDB4ODAwMTAwMDksXG4gICAgUkZJRF9FUlJPUl9GSUxFX0lPX0VSUk9SOiAweDgwMDEwMDBBLFxuICAgIFJGSURfRVJST1JfQlVTWTogMHg4MDAxMDAwQixcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogMHg4MDAxMDAwQyxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEOiAweDgwMDIwMDAwLFxuICAgIFJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTogMHg4MDAyMDAwMSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IDB4ODAwMjAwMDIsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfTk9UX0NPTk5FQ1RFRDogMHg4MDAyMDAwMyxcbiAgICBSRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDogMHg4MDAyMDAwNCxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAweDgwMDIwMDA1LFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRURfU0NBUkQ6IDB4ODAwMjAwMDYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IDB4ODAwMjAwMTAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU0VDVVJJVFlfTUFOQUdFUjogMHg4NjAwMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9BUFBfU0VMRUNUSU9OX0ZBSUxVUkU6IDB4ODYwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IDB4ODYwMDAxMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRU5DX0ZBSUw6IDB4ODYwMDAxMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDEwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFX0RBVEE6IDB4ODYwMDAxMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOEVfTUlTU0lORzogMHg4NjAwMDIwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19NSVNTSU5HOiAweDg2MDAwMjAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzk5X01JU1NJTkc6IDB4ODYwMDAyMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fTUFDX0lOQ09SUkVDVDogMHg4NjAwMDIwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19JTkNPUlJFQ1Q6IDB4ODYwMDAyMDQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAweDg2MDAwMzAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1dST05HX1JORF9JQ0NfTEVOR1RIOiAweDg2MDAwMzAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOVF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogMHg4NjAwMDMwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0RTVF9GQUlMVVJFOiAweDg2MDAwMzA0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BTT19DRVJUSUZJQ0FURV9GQUlMVVJFOiAweDg2MDAwMzA1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfQVRfRkFJTFVSRTogMHg4NjAwMDMwNixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRVRfQ0hBTExFTkdFX0ZBSUxVUkU6IDB4ODYwMDAzMDcsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRU5FUkFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX05PVF9GT1VORDogMHg4MDAwNkE4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjE6IDB4ODAwMDYyODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YyOiAweDgwMDA2QjAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IDB4ODAwMDZBODAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9fUkVGRVJFTkNFX0RBVEE6IDB4ODAwMDZBODgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQ6IDB4ODAwMDYzQzEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQ6IDB4ODAwMDYzQzAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEOiAweDgwMDA2MjgzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEMjogMHg4MDAwNjk4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQyOiAweDgwMDA2OTg0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EMjogMHg4MDAwNjk4NSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfRkFJTEVEOiAweDgwMTA2M0MwLFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogMHg4MzAwMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSVNfQ0xPU0VEOiAweDgzMDAwMDAxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046IDB4ODMwMDAwMDIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9CQURfQ0VSVElGSUNBVEU6IDB4ODMwMDAwMTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDogMHg4MzAwMDAxMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMyxcbiAgICBSRklEX0VSUk9SX1Nlc3Npb25fUHJvY2VkdXJlX1R5cGVfVW5zdXBwb3J0ZWQ6IDB4ODMwMDAwMTQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6IDB4ODMwMDAwMTUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDE2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOU1VQUE9SVEVEX1NNX1RZUEU6IDB4ODMwMDAwMTcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6IDB4ODMwMDAwMTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogMHg4MzAwMDAxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MzAwMDAxQSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9OT1RfU0VUOiAweDgzMDAwMDFCLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogMHg4MzAwMDAxQyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDIwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTogMHg4MzAwMDAyMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogMHg4MzAwMDAyMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0FfS0VZUzogMHg4MzAwMDAyMyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6IDB4ODMwMDAwMjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAweDgzMDAwMDI1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9JTkNPUlJFQ1RfT1BUSU9OX0NBOiAweDgzMDAwMDI2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9DQV9GQUlMRUQ6IDB4ODMwMDAwMjcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogMHg4MzAwMDAyOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQUFfRkFJTEVEOiAweDgzMDAwMDI5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SSV9GQUlMRUQ6IDB4ODMwMDAwMkEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IDB4ODMwMDAwMzAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX0hBU0hfQ0hFQ0tfRkFJTEVEOiAweDgzMDAwMDMxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfRVhQSVJZOiAweDgzMDAwMDQwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IDB4ODMwMDAwNDEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfQ09NTVVOSVRZX0lEOiAweDgzMDAwMDQyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUkVRVUlSRVNfQVBQX1NFTEVDVElPTjogMHg4MzAwMDA1MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAweDgzMDAwMDUxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9WRVJJRklFRDogMHg4MzAwMDA1MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODMwMDAwNjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAweDgzMDEwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0lOQ09SUkVDVF9EQVRBOiAweDgzMDIwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTogMHg4MzAzMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODMwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfV1JPTkdfVEFHOiAweDgzMDUwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6IDB4ODMwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IDB4ODMwNzAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQUNDRVNTX0RFTklFRDogMHg4MzA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTk9fRVJST1I6IDB4ODQwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1RJTUVfT1VUOiAweDg0MDEwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT046IDB4ODQwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NSQzogMHg4NDAzMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9JTlRFR1JJVFk6IDB4ODQwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfTEVOR1RIOiAweDg0MDUwMDAwLFxuICAgIFJGSURfRVJST1JfTGF5ZXIzNF9SRlU6IDB4ODQwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTl9UT09fTUFOWTogMHg4NDA3MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0xfQjogMHg4NDA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9DT05URU5UUzogMHg4NDA5MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0w6IDB4ODQwQTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0dMT0JBTF9USU1FX09VVDogMHg4NDBCMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTUlGQVJFX0FVVEg6IDB4ODQwQzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9FUlJPUjogMHg4NDBEMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0NPTExJU0lPTjogMHg4NDBFMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0FDS05PV0xFREdFOiAweDg0MEYwMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyA9IHtcbiAgICBFUlJfTERTX09LOiAweDAwMDAwMDAxLFxuICAgIEVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDAxLFxuICAgIFJSX0xEU19BU05fTk9UX0VOT1VHSF9EQVRBOiAweDgwMDAwMDAyLFxuICAgIEVSUl9MRFNfQVNOX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDAwMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOCxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9FTkNBUF9DT05URU5UU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDBBLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDExLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTMsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE0LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RHX0hBU0hFU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNixcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMixcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE4LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE5LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JU1NVRVJfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUMsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX1BLX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFFLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUYsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjIsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjQsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjUsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI2LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1VOU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI3LFxuICAgIEVSUl9MRFNfSUNBT19MRFNfT0JKRUNUX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzAsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTogMHg4MDAwMDAzMSxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDAzMixcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg4MDAwMDAzMyxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfRVJST1I6IDB4ODAwMDAwMzQsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19NSVNTRUQ6IDB4ODAwMDAwMzYsXG4gICAgRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTogMHg4MDAwMDAzNSxcbiAgICBFUlJfTERTX0FVVEhfRVJST1I6IDB4ODAwMDAwNTAsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwNTEsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDgwMDAwMDUyLFxuICAgIEVSUl9MRFNfQVVUSF9NRVNTRURfQUxHT1JJVEhNUzogMHg4MDAwMDA1MyxcbiAgICBFUlJfTERTX0FVVEhfUFVCTElDX0tFWV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTQsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NixcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDA1NyxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOiAweDgwMDAwMDU4LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19OT1RfREVGSU5FRDogMHg4MDAwMDA1OSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MDAwMDA1QSxcbiAgICBFUlJfTERTX0RHX1dST05HX1RBSDogMHg4MDAwMDA3MCxcbiAgICBFUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDA3MSxcbiAgICBFUlJfTERTX0JBUF9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAxMSxcbiAgICBFUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDgxMDAwMDIwLFxuICAgIEVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAyMSxcbiAgICBFUlJfTERTX1BBQ0VfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjIsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDIzLFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOiAweDgxMDAwMDI0LFxuICAgIEVSUl9MRFNfUEFDRV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDI1LFxuICAgIEVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDogMHg4MTAwMDAyNixcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAweDgxMDAwMDI3LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyOCxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06IDB4ODEwMDAwMjksXG4gICAgRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAyQSxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfSU5DT1JSRUNUOiAweDgxMDAwMDJCLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9DQU5UX1ZFUklGWTogMHg4MTAwMDAyQyxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOiAweDgxMDAwMDJELFxuICAgIEVSUl9MRFNfUEFDRV9JTV9TQ0hFTUVfSU5DT1JSRUNUOiAweDgxMDAwMDJFLFxuICAgIEVSUl9MRFNfUEFDRV9JTV9SQU5ET01fTUFQUElOR19GQUlMRUQ6IDB4ODEwMDAwMkYsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTogMHg4MTAwMDAzMCxcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9JTkZPOiAweDgxMDAwMDMxLFxuICAgIEVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwMzIsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6IDB4ODEwMDAwMzMsXG4gICAgRVJSX0xEU19DQV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAzNCxcbiAgICBFUlJfTERTX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDM1LFxuICAgIEVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMzYsXG4gICAgRVJSX0xEU19DQV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM3LFxuICAgIEVSUl9MRFNfQ0FfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAweDgxMDAwMDM4LFxuICAgIEVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwNDAsXG4gICAgRVJSX0xEU19UQV9DQU5UX0JVSUxEX0NFUlRJRklDQVRFX0NIQUlOOiAweDgxMDAwMDQxLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOiAweDgxMDAwMDQyLFxuICAgIEVSUl9MRFNfVEFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwNDMsXG4gICAgRVJSX0xEU19UQV9TSUdOQVRVUkVfQlVJTERJTkdfRVJST1I6IDB4ODEwMDAwNDQsXG4gICAgRVJSX0xEU19UQV9JTlZBTElEX0tFWV9BTEdPUklUSE1fUEFSQU1FVEVSUzogMHg4MTAwMDA0NSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDUwLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1MSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6IDB4ODEwMDAwNTIsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOiAweDgxMDAwMDUzLFxuICAgIEVSUl9MRFNfQUFfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDU0LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOiAweDgxMDAwMDU1LFxuICAgIEVSUl9MRFNfQUFfSU5DT1JSRUNUX1RSQUlMRVI6IDB4ODEwMDAwNTYsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgxMDAwMDU3LFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6IDB4ODEwMDAwNzAsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDcxLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPTVBMRVRFX0RBVEE6IDB4ODEwMDAwNzIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOiAweDgxMDAwMDYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfVU5TVVBQT1JURURfVEVSTUlOQUxfVFlQRTogMHg4MTAwMDA2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOiAweDgxMDAwMDYsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTlZBTElEX1BBUkFNUzogMHg4MTAwMDA2NSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ1BJX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYxLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfVE9fSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjcsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY4LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjksXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9NSVNTSU5HOiAweDgxMDAwMTZBLFxuICAgIEVSUl9MRFNfVkRTX1VOU1VQUE9SVEVEX1ZFUlNJT046IDB4ODEwMDAyMDAsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6IDB4ODEwMDAyMDEsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMjAyLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOiAweDgxMDAwMjAzLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOiAweDgxMDAwMjA0LFxuICAgIEVSUl9MRFNfVkRTX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMzAxLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0hFQURFUjogMHg4MTAwMDMwMixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9UWVBFOiAweDgxMDAwMzAzLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAzMDQsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSVNTVUlOR19DT1VOVFJZOiAweDgxMDAwMzA1LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6IDB4ODEwMDAzMDYsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHTkFUVVJFOiAweDgxMDAwMzA3LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19BTEdPUklUSE06IDB4ODEwMDAzMDgsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6IDB4ODEwMDAzMDksXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOiAweDgxMDAwMzBBLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbiAgICBDVF9CTFM6IDcsXG4gICAgQ1RfTERTMjogOCxcbiAgICBDVF9CQ1M6IDksXG4gICAgQ1RfQkNTTkM6IDEwLFxufVxuXG5leHBvcnQgY29uc3QgUkdMTWVhc3VyZVN5c3RlbSA9IHtcbiAgICBNRVRSSUM6IDAsXG4gICAgSU1QRVJJQUw6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9SZXN1bHRUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU1QVFk6IDAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfSU1BR0U6IDEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUxFX0lNQUdFOiAyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX09DUl9FWFRFTkRFRDogMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVTOiA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfR1JBUEhJQ1M6IDYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfVEVTVF9RVUFMSVRZOiA3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfVFlQRVNfQ0FORElEQVRFUzogOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NIT1NFTl9ET0NVTUVOVF9UWVBFX0NBTkRJREFURTogOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UU19JTkZPX0xJU1Q6IDEwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfT0NSX0xFWElDQUxfQU5BTFlaRTogMTUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfVU5DUk9QUEVEX0lNQUdFOiAxNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1ZJU1VBTF9PQ1JfRVhURU5ERUQ6IDE3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX1RFWFRfREFUQTogMTgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfSU1BR0VfREFUQTogMTksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9BVVRIRU5USUNJVFk6IDIwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU9TX0lNQUdFOiAyMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBWUVSX0lNQUdFOiAyNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRTogMjUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEVfVEVYVF9EQVRBOiAyNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJRUxEX0ZJTEVfSU1BR0U6IDI3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfREFUQUJBU0VfQ0hFQ0s6IDI4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklOR0VSUFJJTlRfVEVNUExBVEVfSVNPOiAyOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOUFVUX0lNQUdFX1FVQUxJVFk6IDMwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfUkZJRF9TRVNTSU9OOiA0OCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX0VOQ1JZUFRFRF9SQ0w6IDQ5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfTElDRU5TRTogNTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9URVhUOiAzNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lNQUdFUzogMzcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9IT0xPX1BBUkFNUzogNDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0xJVkVfUE9SVFJBSVQ6IDMyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfU1RBVFVTOiAzMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT046IDM0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRVhUX1BPUlRSQUlUOiAzNSxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQgPSB7XG4gICAgUkNGX0RJU0FCTEVEOiAwLFxuICAgIFJDRl9WRVJJRklFRDogMSxcbiAgICBSQ0ZfTk9UX1ZFUklGSUVEOiAyLFxuICAgIFJDRl9DT01QQVJFX1RSVUU6IDMsXG4gICAgUkNGX0NPTVBBUkVfRkFMU0U6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJBY3Rpb24gPSB7XG4gICAgQ09NUExFVEU6IDAsXG4gICAgUFJPQ0VTUzogMSxcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogMixcbiAgICBDQU5DRUw6IDMsXG4gICAgRVJST1I6IDQsXG4gICAgUFJPQ0VTU19XSElURV9GTEFTSExJR0hUOiA1LFxuICAgIFRJTUVPVVQ6IDYsXG4gICAgUFJPQ0VTU0lOR19PTl9TRVJWSUNFOiA3LFxuICAgIE5PVElGSUNBVElPTjogMTAxLFxuICAgIFBST0NFU1NfV0hJVEVfVVZfSU1BR0VTOiAxMDIsXG4gICAgUFJPQ0VTU19JUl9GUkFNRTogMTAzLFxufVxuXG5leHBvcnQgY29uc3QgZVByb2Nlc3NHTENvbW1hbmRzID0ge1xuICAgIGVQQ19Qcm9jTWdyX1NldExpY2Vuc2U6IDEyMTAwLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3M6IDEyMTAxLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NBc3luYzogMTIxMDIsXG4gICAgZVBDX1Byb2NNZ3JfSW5pdDogMTIxMDMsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0ltYWdlOiAxMjEwNCxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld0RvY3VtZW50OiAxMjEwNSxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld1BhZ2U6IDEyMTA2LFxuICAgIGVQQ19Qcm9jTWdyX1VubG9hZDogMTIxMDcsXG4gICAgZVBDX1Byb2NNZ3JfQ2hlY2tEYXRhYmFzZTogMTIxMDksXG4gICAgZVBDX1Byb2NNZ3JfQ29tcGFyZVBvcnRyYWl0czogMTIxMTEsXG4gICAgZVBDX1JGSURfU2V0VENDUGFyYW1zOiAxMjUyMixcbiAgICBlUENfUkZJRF9TZXRSZXByb2Nlc3NpbmdQYXJhbXM6IDEyNTIzLFxufVxuXG5leHBvcnQgY29uc3QgUEtEUmVzb3VyY2VUeXBlID0ge1xuICAgIENFUlRJRklDQVRFX1BBOiAwLFxuICAgIENFUlRJRklDQVRFX1RBOiAxLFxuICAgIExESUY6IDIsXG4gICAgQ1JMOiAzLFxuICAgIE1MOiA0LFxuICAgIERFRkw6IDUsXG4gICAgREVWTDogNixcbiAgICBCTDogNyxcblxuICAgIGdldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwicGFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICAgICAgY2FzZSBcInRhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfVEFcbiAgICAgICAgICAgIGNhc2UgXCJsZGlmXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTERJRlxuICAgICAgICAgICAgY2FzZSBcImNybFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNSTFxuICAgICAgICAgICAgY2FzZSBcIm1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTUxcbiAgICAgICAgICAgIGNhc2UgXCJkZWZsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVGTFxuICAgICAgICAgICAgY2FzZSBcImRldmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERVZMXG4gICAgICAgICAgICBjYXNlIFwiYmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CTFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlID0ge1xuICAgIGFwdFVuZGVmaW5lZDogMCxcbiAgICBhcHRTdGFuZGFyZDogMSxcbiAgICBhcHRBZHZhbmNlZDogMixcbiAgICBhcHRHZW5lcmFsOiAzLFxufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzID0ge1xuICAgIElOSVRJQUxJWkFUSU9OX0NPUkVfQUJTRU5UOiAwLFxuICAgIElOSVRJQUxJWkFUSU9OX0ZBSUxFRDogMSxcbiAgICBJTkNPUlJFQ1RfU0NFTkFSSU86IDIsXG4gICAgTk9fUkVTVUxUOiAzLFxuICAgIFJFTU9WRV9EQVRBQkFTRTogNCxcbiAgICBGRVRDSElOR19EQVRBQkFTRTogNSxcbiAgICBEQl9JRF9OT1RfRk9VTkQ6IDYsXG4gICAgREJfREVTQ1JJUFRJT05fTk9UX0ZPVU5EOiA3LFxuICAgIFNBVkVfREI6IDgsXG4gICAgRE9XTkxPQURfREJfSU5DT1JSRUNUX0NIRUNLU1VNOiA5LFxuICAgIERCX0RPV05MT0FEOiAxMCxcbiAgICBMSUNFTlNFX0FCU0VOVF9PUl9DT1JSVVBURUQ6IDEzLFxuICAgIExJQ0VOU0VfSU5WQUxJRF9EQVRFOiAxNCxcbiAgICBMSUNFTlNFX0lOVkFMSURfVkVSU0lPTjogMTUsXG4gICAgTElDRU5TRV9JTlZBTElEX0RFVklDRV9JRDogMTYsXG4gICAgTElDRU5TRV9JTlZBTElEX1NZU1RFTV9PUl9BUFBfSUQ6IDE3LFxuICAgIExJQ0VOU0VfTk9fQ0FQQUJJTElUSUVTOiAxOCxcbiAgICBMSUNFTlNFX05PX0FVVEhFTlRJQ0lUWTogMTksXG4gICAgUkVDT1JEX1BST0NFU1NfSU5WQUxJRF9PVVRQVVRfVVJMOiAyMCxcbiAgICBMSUNFTlNFX09OTElORV9FUlJPUjogMjEsXG4gICAgTElDRU5TRV9OT19EQVRBQkFTRTogMjIsXG4gICAgTElDRU5TRV9EQVRBQkFTRV9JTkNPUlJFQ1Q6IDIzLFxuICAgIElOVkFMSURfVENDX1BBUkFNUzogMjQsXG4gICAgUkZJRF9JTl9QUk9HUkVTUzogMjUsXG4gICAgTkFUSVZFX0pBVkFfRVhDRVBUSU9OOiAxMDAwLFxuICAgIEJBQ0tFTkRfT05MSU5FX1BST0NFU1NJTkc6IDMwMyxcbiAgICBXUk9OR19JTlBVVDogNDAwLFxuICAgIFNUQVRFX0VYQ0VQVElPTjogNTAwLFxuICAgIEJMRV9FWENFUFRJT046IDYwMCxcbiAgICBGRUFUVVJFX0JMVUVUT09USF9MRV9OT1RfU1VQUE9SVEVEOiA2MDEsXG4gICAgQVBQX0JBQ0tHUk9VTkQ6IDcwMCxcbiAgICBPTkxJTkVfUFJPQ0VTU0lOR19XUk9OR19JTlBVVDogODAwLFxufVxuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9JZGVudGlmaWVyID0ge1xuICAgIFNDRU5BUklPX01SWjogXCJNcnpcIixcbiAgICBTQ0VOQVJJT19CQVJDT0RFOiBcIkJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19MT0NBVEU6IFwiTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fT0NSOiBcIk9jclwiLFxuICAgIFNDRU5BUklPX0RPQ1RZUEU6IFwiRG9jVHlwZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFOiBcIk1yek9yQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9MT0NBVEU6IFwiTXJ6T3JMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfQU5EX0xPQ0FURTogXCJNcnpBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfT0NSOiBcIk1yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREVfT1JfT0NSOiBcIk1yek9yQmFyY29kZU9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFX1ZJU1VBTF9BTkRfTVJaX09SX09DUjogXCJMb2NhdGVWaXN1YWxfQW5kX01yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9QUk9DRVNTOiBcIkZ1bGxQcm9jZXNzXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9BVVRIOiBcIkZ1bGxBdXRoXCIsXG4gICAgU0NFTkFSSU9fSUQzUlVTOiBcIklkM1J1c1wiLFxuICAgIFNDRU5BUklPX1JVU19TVEFNUDogXCJSdXNTdGFtcFwiLFxuICAgIFNDRU5BUklPX09DUl9GUkVFOiBcIk9jckZyZWVcIixcbiAgICBTQ0VOQVJJT19DUkVESVRfQ0FSRDogXCJDcmVkaXRDYXJkXCIsXG4gICAgU0NFTkFSSU9fQ0FQVFVSRTogXCJDYXB0dXJlXCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERV9BTkRfTE9DQVRFOiBcIkJhcmNvZGVBbmRMb2NhdGVcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBBQ1BUX1VOREVGSU5FRDogMCxcbiAgICBBQ1BUX0JBQzogMSxcbiAgICBBQ1BUX1BBQ0U6IDIsXG4gICAgQUNQVF9DQTogMyxcbiAgICBBQ1BUX1RBOiA0LFxuICAgIEFDUFRfQUE6IDUsXG4gICAgQUNQVF9SSTogNixcbiAgICBBQ1BUX0NBUkRfSU5GTzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9Ob3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBSRklEX05PVElGSUNBVElPTl9FUlJPUjogMHgwMDAxMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9ET0NVTUVOVF9SRUFEWTogMHgwMDAxMDAwMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogMHgwMDAxMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MMzogMHgwMDAxMDAwQSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QUk9HUkVTUzogMHgwMDAxMDAwQixcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiAweDAwMDEwMDBFLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX1JFUVVJUkVEOiAweDAwMDEwMDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0lTT19FUlJPUjogMHgwMDAxMTAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiAweDAwMDEzMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX0VTVEFCTElTSEVEOiAweDAwMDE0MDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0RJU0NPTk5FQ1RFRDogMHgwMDAyMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HRUQ6IDB4MDAwMjAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMHgwMDAyMDAwMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfVElNRTogMHgwMDAyMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0RBVEFfUkVDRUlWRUQ6IDB4MDAwMjAwMDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAweDAwMDIwMDA1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19TUEVFRDogMHgwMDAyMDAwNixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1BST0NFU1NfVElNRTogMHgwMDAyMDAwNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAweDAwMDIwMDA4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRVhUX0xFTkdUSF9TVVBQT1JUOiAweDAwMDIwMDEwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOOiAweDAwMDIwMDExLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDB4MDAwMjAwMTIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU0NFTkFSSU86IDB4MDAwMjAwMjAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFESU5HX0RBVEFHUk9VUDogMHgwMDAzMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAweDAwMDQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRU5EX09GX0ZJTEU6IDB4MDAwNTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX0FDQ0VTU19ERU5JRUQ6IDB4MDAwNjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogMHgwMDA3MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfU1RBUlQ6IDB4MDAwODAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX0ZJTklTSDogMHgwMDA5MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDB4MDAwQTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfRklMRV9DSEVDSzogMHgwMDBCMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1VQREFUSU5HX0RBVEFHUk9VUDogMHgwMDBDMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiAweDAwMEQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JJX1NFQ1RPUl9JRDogMHgwMDBFMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9CSU9NRVRSSUNTX0VNUFRZX1BMQUNFSE9MREVSOiAweDAwMEYwMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfUGFzc3dvcmRfVHlwZSA9IHtcbiAgICBQUFRfVU5LTk9XTjogMCxcbiAgICBQUFRfTVJaOiAxLFxuICAgIFBQVF9DQU46IDIsXG4gICAgUFBUX1BJTjogMyxcbiAgICBQUFRfUFVLOiA0LFxuICAgIFBQVF9QSU5fRVNJR046IDUsXG4gICAgUFBUX1NBSTogNixcbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBlU2lnbk1hbmFnZW1lbnRBY3Rpb24gPSB7XG4gICAgc21hVW5kZWZpbmVkOiAwLFxuICAgIHNtYUNyZWF0ZVBJTjogMSxcbiAgICBzbWFDaGFuZ2VQSU46IDIsXG4gICAgc21hVW5ibG9ja1BJTjogMyxcbiAgICBzbWFUZXJtaW5hdGVQSU46IDQsXG4gICAgc21hR2VuZXJhdGVLZXlzOiA1LFxuICAgIHNtYVRlcm1pbmF0ZUtleXM6IDYsXG4gICAgc21hU2lnbkRhdGE6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tEaWFnbm9zZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1M6IDEsXG4gICAgSU5WQUxJRF9JTlBVVF9EQVRBOiAyLFxuICAgIElOVEVSTkFMX0VSUk9SOiAzLFxuICAgIEVYQ0VQVElPTl9JTl9NT0RVTEU6IDQsXG4gICAgVU5DRVJUQUlOX1ZFUklGSUNBVElPTjogNSxcbiAgICBORUNFU1NBUllfSU1BR0VfTk9UX0ZPVU5EOiA3LFxuICAgIFBIT1RPX1NJREVTX05PVF9GT1VORDogOCxcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAxMCxcbiAgICBTWU5UQVhfRVJST1I6IDExLFxuICAgIExPR0lDX0VSUk9SOiAxMixcbiAgICBTT1VSQ0VTX0NPTVBBUklTT05fRVJST1I6IDEzLFxuICAgIEZJRUxEU19DT01QQVJJU09OX0xPR0lDX0VSUk9SOiAxNCxcbiAgICBJTlZBTElEX0ZJRUxEX0ZPUk1BVDogMTUsXG4gICAgVFJVRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjEsXG4gICAgRklYRURfUEFUVEVSTl9FUlJPUjogMjIsXG4gICAgTE9XX0NPTlRSQVNUX0lOX0lSX0xJR0hUOiAyMyxcbiAgICBJTkNPUlJFQ1RfQkFDS0dST1VORF9MSUdIVDogMjQsXG4gICAgQkFDS0dST1VORF9DT01QQVJJU09OX0VSUk9SOiAyNSxcbiAgICBJTkNPUlJFQ1RfVEVYVF9DT0xPUjogMjYsXG4gICAgUEhPVE9fRkFMU0VfTFVNSU5JU0NFTkNFOiAyNyxcbiAgICBUT09fTVVDSF9TSElGVDogMjgsXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgUEhPVE9fV0hJVEVfSVJfRE9OVF9NQVRDSDogNDQsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9HTEFSRVNfSU5fUEhPVE9fQVJFQTogODEsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9QSE9UT19SRVBMQUNFRDogODIsXG4gICAgT1ZJX0lSX0lOVklTSUJMRTogOTAsXG4gICAgT1ZJX0lOU1VGRklDSUVOVF9BUkVBOiA5MSxcbiAgICBPVklfQ09MT1JfSU5WQVJJQUJMRTogOTIsXG4gICAgT1ZJX0JBRF9DT0xPUl9GUk9OVDogOTMsXG4gICAgT1ZJX0JBRF9DT0xPUl9TSURFOiA5NCxcbiAgICBPVklfV0lERV9DT0xPUl9TUFJFQUQ6IDk1LFxuICAgIE9WSV9CQURfQ09MT1JfUEVSQ0VOVDogOTYsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9BQlNFTlQ6IDEwMCxcbiAgICBIT0xPR1JBTV9TSURFX1RPUF9JTUFHRVNfQUJTRU5UOiAxMDEsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9QUkVTRU5UOiAxMDIsXG4gICAgSE9MT0dSQU1fRlJBTUVTX0lTX0FCU0VOVDogMTAzLFxuICAgIEhPTE9HUkFNX0hPTE9fRklFTERfSVNfQUJTRU5UOiAxMDQsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlRFUlJVUFRFRDogMTEwLFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRDogMTExLFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0NPTE9SUzogMTEyLFxuICAgIFBIT1RPX1BBVFRFUk5fSVJfVklTSUJMRTogMTEzLFxuICAgIFBIT1RPX1BBVFRFUk5fTk9UX0lOVEVSU0VDVDogMTE0LFxuICAgIFBIT1RPX1NJWkVfSVNfV1JPTkc6IDExNSxcbiAgICBQSE9UT19QQVRURVJOX0lOVkFMSURfQ09MT1I6IDExNixcbiAgICBQSE9UT19QQVRURVJOX1NISUZURURfVkVSVDogMTE3LFxuICAgIFBIT1RPX1BBVFRFUk5fUEFUVEVSTl9OT1RfRk9VTkQ6IDExOCxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDExOSxcbiAgICBQSE9UT19JU19OT1RfUkVDVEFOR0xFOiAxMjAsXG4gICAgUEhPVE9fQ09STkVSU19JU19XUk9ORzogMTIxLFxuICAgIERPQ1VNRU5UX0lTX0NBTkNFTExJTkc6IDEyMixcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9CTFVFOiAxMzAsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfR1JFRU46IDEzMSxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9SRUQ6IDEzMixcbiAgICBURVhUX1NIT1VMRF9CRV9CTEFDSzogMTMzLFxuICAgIEJBUkNPREVfV0FTX1JFQURfV0lUSF9FUlJPUlM6IDE0MCxcbiAgICBCQVJDT0RFX0RBVEFfRk9STUFUX0VSUk9SOiAxNDEsXG4gICAgQkFSQ09ERV9TSVpFX1BBUkFNU19FUlJPUjogMTQyLFxuICAgIE5PVF9BTExfQkFSQ09ERVNfUkVBRDogMTQzLFxuICAgIEdMQVJFU19JTl9CQVJDT0RFX0FSRUE6IDE0NCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1BPUlRSQUlUU19ESUZGRVI6IDE1MCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfUkVQTFk6IDE1MSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1NFUlZJQ0VfRVJST1I6IDE1MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PVF9FTk9VR0hfSU1BR0VTOiAxNTMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19MSVZFX1BIT1RPOiAxNTQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX0xJQ0VOU0U6IDE1NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1BPUlRSQUlUX0RFVEVDVEVEOiAxNTYsXG4gICAgTU9CSUxFX0lNQUdFU19VTlNVSVRBQkxFX0xJR0hUX0NPTkRJVElPTlM6IDE2MCxcbiAgICBNT0JJTEVfSU1BR0VTX1dISVRFX1VWX05PX0RJRkZFUkVOQ0U6IDE2MSxcbiAgICBGSU5HRVJQUklOVFNfQ09NUEFSSVNPTl9NSVNNQVRDSDogMTcwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9OT1RfREVURUNURUQ6IDE4MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfQ09NUEFSSVNPTl9GQUlMRUQ6IDE4MSxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfR0xBUkVfSU5fQ0VOVEVSX0FCU0VOVDogMTgyLFxuICAgIEhPTE9fRUxFTUVOVF9TSEFQRV9FUlJPUjogMTgzLFxuICAgIEFMR09SSVRITV9TVEVQU19FUlJPUjogMTg0LFxuICAgIEhPTE9fQVJFQVNfTk9UX0xPQURFRDogMTg1LFxuICAgIEZJTklTSEVEX0JZX1RJTUVPVVQ6IDE4NixcbiAgICBIT0xPX1BIT1RPX0RPQ1VNRU5UX09VVFNJREVfRlJBTUU6IDE4NyxcbiAgICBMSVZFTkVTU19ERVBUSF9DSEVDS19GQUlMRUQ6IDE5MCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19TWU1CT0xfUE9TSVRJT046IDIwMCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19CQUNLR1JPVU5EOiAyMDEsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfTVJaX1dJRFRIOiAyMDIsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfTVJaX0hFSUdIVDogMjAzLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX0xJTkVfUE9TSVRJT046IDIwNCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19GT05UX1RZUEU6IDIwNSxcbiAgICBPQ1JfUVVBTElUWV9URVhUX1BPU0lUSU9OOiAyMjAsXG4gICAgT0NSX1FVQUxJVFlfSU5WQUxJRF9GT05UOiAyMjEsXG4gICAgT0NSX1FVQUxJVFlfSU5WQUxJRF9CQUNLR1JPVU5EOiAyMjIsXG4gICAgTEFTX0lOS19JTlZBTElEX0xJTkVTX0ZSRVFVRU5DWTogMjMwLFxuICAgIERPQ19MSVZFTkVTU19FTEVDVFJPTklDX0RFVklDRV9ERVRFQ1RFRDogMjQwLFxuICAgIERPQ19MSVZFTkVTU19JTlZBTElEX0JBUkNPREVfQkFDS0dST1VORDogMjQxLFxuICAgIExBU1RfRElBR05PU0VfVkFMVUU6IDI1MCxcbn1cblxuZXhwb3J0IGNvbnN0IFJGSUREZWxlZ2F0ZSA9IHtcbiAgICBOVUxMOiAwLFxuICAgIE5PX1BBOiAxLFxuICAgIEZVTEw6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBUZXh0UHJvY2Vzc2luZyA9IHtcbiAgICBvY05vQ2hhbmdlOiAwLFxuICAgIG9jVXBwZXJjYXNlOiAxLFxuICAgIG9jTG93ZXJjYXNlOiAyLFxuICAgIG9jQ2FwaXRhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IHtcbiAgICBOT1RfUkVBRFk6IDAsXG4gICAgUkVBRFk6IDEsXG4gICAgVElNRU9VVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBOT046IDMsXG4gICAgQTQ6IDQsXG4gICAgSUQzX3gyOiA1LFxuICAgIElEMl9UVVJLRVk6IDYsXG4gICAgSUQxXzkwOiAxMCxcbiAgICBJRDFfMTgwOiAxMSxcbiAgICBJRDFfMjcwOiAxMixcbiAgICBJRDJfMTgwOiAxMyxcbiAgICBJRDNfMTgwOiAxNCxcbiAgICBDVVNUT006IDEwMDAsXG4gICAgUEhPVE86IDEwMDEsXG4gICAgRkxFWElCTEU6IDEwMDIsXG4gICAgVU5LTk9XTjogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MDAwMDAwMSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9OT05fTUFUQ0hJTkdfU0lHTkFUVVJFX0FMR09SSVRITTogMHg5MDAwMDAwMixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVElNRV9DT0RJTkc6IDB4OTAwMDAwMDMsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1VTRV9PRl9HRU5FUkFMSVpFRF9USU1FOiAweDkwMDAwMDA0LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX0lTU1VFUjogMHg5MDAwMDAwNSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9TVUJKRUNUOiAweDkwMDAwMDA2LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX0NSSVRJQ0FMX0VYVEVOU0lPTjogMHg5MDAwMDAwOCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9DU0NBX1JPTEU6IDB4OTAwMDAwMEUsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfRFNfUk9MRTogMHg5MDAwMDAwRixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfSVNTVUVSX1NVQkpFQ1RfRFM6IDB4OTAwMDAwMTAsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRFVQTElDQVRJTkdfRVhURU5TSU9OUzogMHg5MDAwMDAxNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9NSVNTRUQ6IDB4OTAwMDAyMDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMjAxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTUlTU0VEOiAweDkwMDAwMjA2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjA4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMjA5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogMHg5MDAwMDIwQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTUlTU0VEX0VYVEVOU0lPTlM6IDB4OTAwMDAyMEIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMjBDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjBELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX01JU1NFRDogMHg5MDAwMDIwRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMEYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX01JU1NFRDogMHg5MDAwMDIxMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMTogMHg5MDAwMDIxMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMjogMHg5MDAwMDIxMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTk9UX0NSSVRJQ0FMOiAweDkwMDAwMjE0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19NSVNTRUQ6IDB4OTAwMDAyMTYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfSU5DT1JSRUNUOiAweDkwMDAwMjE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDIxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMUEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX01JU1NFRDogMHg5MDAwMDIyMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjIxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfRU1QVFk6IDB4OTAwMDAyMjIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0VNUFRZOiAweDkwMDAwMjI1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjI2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIyOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fRU1QVFk6IDB4OTAwMDAyMjksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIyQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMkMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMkQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMkUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIzMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIzMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMzMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIzNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTUlTU0VEOiAweDkwMDAwMjM1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIzNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfVkVSU0lPTjogMHg5MDAwMDIzNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTOiAweDkwMDAwMjM4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVNfRU1QVFk6IDB4OTAwMDAyMzksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19FTVBUWTogMHg5MDAwMDIzQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfUE9MSUNZX0lEX01JU1NFRDogMHg5MDAwMDIzQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX01JU1NFRDogMHg5MDAwMDIzRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfRU1QVFk6IDB4OTAwMDAyM0YsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9QT0lOVF9NSVNTRUQ6IDB4OTAwMDAyNDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TTl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NVQkpFQ1RfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DU0NBX0FMVF9OQU1FU19OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDI0OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9DUklUSUNBTDogMHg5MDAwMDI0QSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0QixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfQ1JJVElDQUw6IDB4OTAwMDAyNEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9PUFRJT05BTF9DUklUSUNBTDogMHg5MDAwMDI0RCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPTU1PTl9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEYsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjAsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIxLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMixcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIzLFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX01JU1NJTkc6IDB4OTAwMDAwMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX1VORVhQRUNURUQ6IDB4OTAwMDAwMjYsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX1VOU1VQUE9SVEVEOiAweDkwMDAwMDMwLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzEsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMyxcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9PSURfSU5DT1JSRUNUOiAweDkwMDAwMTAwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUEwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX0NPTlRFTlRfT0lEX0lOQ09SUkVDVDogMHg5MDAwMDFBMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDEsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0VNUFRZOiAweDkwMDAwMTAyLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19VTlNVUFBPUlRFRDogMHg5MDAwMDEwMyxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfU0lHTkVSX0lORk9TX01VTFRJUExFX0VOVFJJRVM6IDB4OTAwMDAxMDksXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19NSVNTRUQ6IDB4OTAwMDAxQjAsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19FTVBUWTogMHg5MDAwMDFCMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ1JMU19JTkNPUlJFQ1RfVVNBR0U6IDB4OTAwMDAxQjIsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0NPTlRFTlRfT0lEOiAweDkwMDAwMTA0LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX05VTUJFUl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDUsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9NSVNTSU5HOiAweDkwMDAwMTA2LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfRVhUUkE6IDB4OTAwMDAxMDcsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDgsXG4gICAgTlRGX0xEU19JQ0FPX01BU1RFUl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUMwLFxuICAgIE5URl9MRFNfSUNBT19ERVZJQVRJT05fTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFDOCxcbiAgICBOVEZfTERTX0JTSV9ERUZFQ1RfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFEMCxcbiAgICBOVEZfTERTX0JTSV9CTEFDS19MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQ4LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMTBBLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfQ0hPSUNFOiAweDkwMDAwMTBCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9ESUdFU1RfQUxHT1JJVEhNX05PVF9MSVNURUQ6IDB4OTAwMDAxMEMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTBELFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfREFUQTogMHg5MDAwMDEwRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX1ZhbHVlOiAweDkwMDAwMTBGLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfREFUQTogMHg5MDAwMDExMSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9WQUxVRTogMHg5MDAwMDExMixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX0RBVEE6IDB4OTAwMDAxMUMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfVkFMVUU6IDB4OTAwMDAxMUQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfTUlTU0lORzogMHg5MDAwMDExRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9EQVRBOiAweDkwMDAwMTFGLFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MDAwMDExNSxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogMHg5MDAwMDExNixcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6IDB4OTAwMDAxMTcsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6IDB4OTAwMDAxMTgsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAweDkwMDAwMTE5LFxuICAgIE5URl9MRFNfVU5TVVBQT1JURURfSU1BR0VfRk9STUFUOiAweDkwMDAwMTFBLFxuICAgIE5URl9MRFNfTVJaX0RPQ1VNRU5UX1RZUEVfVU5LTk9XTjogMHgwMDAyMjAwOCxcbiAgICBOVEZfTERTX01SWl9JU1NVSU5HX1NUQVRFX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwOSxcbiAgICBOVEZfTERTX01SWl9OQU1FX0lTX1ZPSUQ6IDB4MDAwMjIwMEEsXG4gICAgTlRGX0xEU19NUlpfTlVNQkVSX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAwRCxcbiAgICBOVEZfTERTX01SWl9OQVRJT05BTElUWV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMEUsXG4gICAgTlRGX0xEU19NUlpfRE9CX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRixcbiAgICBOVEZfTERTX01SWl9ET0JfRVJST1I6IDB4MDAwMjIwMTAsXG4gICAgTlRGX0xEU19NUlpfRE9CX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxMSxcbiAgICBOVEZfTERTX01SWl9TRVhfSU5DT1JSRUNUOiAweDAwMDIyMDEyLFxuICAgIE5URl9MRFNfTVJaX0RPRV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMTMsXG4gICAgTlRGX0xEU19NUlpfRE9FX0VSUk9SOiAweDAwMDIyMDE0LFxuICAgIE5URl9MRFNfTVJaX0RPRV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTUsXG4gICAgTlRGX0xEU19NUlpfT1BUSU9OQUxfREFUQV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTYsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDE3LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVDogMHgwMDAyMjAxOCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX01JU1NJTkc6IDB4OTAwMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9JTkNPUlJFQ1Q6IDB4OTAwMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX01JU1NJTkc6IDB4OTAwMzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX0lOQ09SUkVDVDogMHg5MDA0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfVFlQRV9JTkNPUlJFQ1Q6IDB4OTAwNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX01JU1NJTkc6IDB4OTAwNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX0lOQ09SUkVDVDogMHg5MDA3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0lNQUdFX01JU1NJTkc6IDB4OTAwODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9GT1JNQVRfSURfSU5DT1JSRUNUOiAweDkwMDkwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwQTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0xFTkdUSF9JTkNPUlJFQ1Q6IDB4OTAwQjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0dFTkRFUjogMHg5MDEwMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRVlFX0NPTE9SOiAweDkwMTEwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9IQUlSX0NPTE9SOiAweDkwMTIwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1lBVzogMHg5MDEzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9QSVRDSDogMHg5MDE0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ST0xMOiAweDkwMTUwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfWUFXOiAweDkwMTYwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUElUQ0g6IDB4OTAxNzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ST0xMOiAweDkwMTgwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9GQUNFX0lNQUdFX1RZUEU6IDB4OTAxOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0lNQUdFX0RBVEFfVFlQRTogMHg5MDFBMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19VTlNVUFBPUlRFRF9TVERfUEFSQU1FVEVSUzogMHg5MTAwMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19ERVBSRUNBVEVEX1ZFUlNJT046IDB4OTEwMDAwMDEsXG4gICAgTlRGX0xEU19TSV9QQUNFX0RPTUFJTl9QQVJBTVNfVVNJTkdfU1REX1JFRjogMHg5MTAwMDAwMixcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDMsXG4gICAgTlRGX0xEU19TSV9DQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDA0LFxuICAgIE5URl9MRFNfU0lfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDUsXG4gICAgTlRGX0xEU19TSV9DQV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNixcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDcsXG4gICAgTlRGX0xEU19TSV9UQV9JTkZPX0ZJTEVfSURfRk9SX1ZFUlNJT04yOiAweDkxMDAwMDA4LFxuICAgIE5URl9MRFNfU0lfRUlEX1NFQ1VSSVRZX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4OTEwMDAwMDksXG4gICAgTlRGX0xEU19TSV9SSV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBBLFxuICAgIE5URl9MRFNfU0lfUklfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEIsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBDLFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEQsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09OU0lTVEVOVF9BTEdPUklUSE1fUkVGRVJFTkNFOiAweDkxMDAwMDBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwMCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMTAxLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwMixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAzLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PX1JFUVVJUkVEX09QVElPTjogMHg5MTAwMDEwNCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTA1LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9BTk9OWU1PVVNfSU5GT1M6IDB4OTEwMDAxMDYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwNyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19QVUJMSUNfS0VZOiAweDkxMDAwMTA4LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkNPUlJFQ1RfSU5GT1NfUVVBTlRJVFk6IDB4OTEwMDAxMDksXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1RBX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwQSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FSRF9JTkZPX0xPQ0FUT1JfTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfRUlEX1NFQ1VSSVRZX0lORk9fTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBELFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX0lOQ09SUkVDVF9VU0FHRTogMHg5MTAwMDEwRSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUklfRE9NQUlOX1BBUkFNU19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBGLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9TX05PTl9DT05TSVNUQU5UOiAweDkxMDAwMTEwLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJPRklMRV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwMSxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkxMDAwMjAyLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTk9OX0NWX0NBX0RPTUFJTl9QQVJBTUVURVJTOiAweDkxMDAwMjAzLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAyMDQsXG4gICAgTlRGX0xEU19UQV9QQUNFX1NUQVRJQ19CSU5ESU5HX1VTRUQ6IDB4OTEwMDAzMDAsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkyMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkyMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MjAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MjAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTIwMDAxMTksXG59XG5cbmV4cG9ydCBjb25zdCBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlID0ge1xuICAgIElRQ19JTUFHRV9HTEFSRVM6IDAsXG4gICAgSVFDX0lNQUdFX0ZPQ1VTOiAxLFxuICAgIElRQ19JTUFHRV9SRVNPTFVUSU9OOiAyLFxuICAgIElRQ19JTUFHRV9DT0xPUk5FU1M6IDMsXG4gICAgSVFDX1BFUlNQRUNUSVZFOiA0LFxuICAgIElRQ19CT1VORFM6IDUsXG4gICAgSVFDX1NDUkVFTl9DQVBUVVJFOiA2LFxuICAgIElRQ19QT1JUUkFJVDogNyxcbiAgICBJUUNfSEFORFdSSVRURU46IDgsXG59XG5cbmV4cG9ydCBjb25zdCBNUlpGb3JtYXQgPSB7XG4gICAgRk9STUFUXzFYMzA6IFwiMXgzMFwiLFxuICAgIEZPUk1BVF8zWDMwOiBcIjN4MzBcIixcbiAgICBGT1JNQVRfMlgzNjogXCIyeDM2XCIsXG4gICAgRk9STUFUXzJYNDQ6IFwiMng0NFwiLFxuICAgIEZPUk1BVF8xWDY6IFwiMXg2XCIsXG4gICAgRk9STUFUXzJYMzA6IFwiMngzMFwiLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVR5cGUgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBCQ1RfQ09ERTEyODogMSxcbiAgICBDT0RFMzk6IDIsXG4gICAgRUFOODogMyxcbiAgICBJVEY6IDQsXG4gICAgUERGNDE3OiA1LFxuICAgIFNURjogNixcbiAgICBNVEY6IDcsXG4gICAgSUFUQTogOCxcbiAgICBDT0RBQkFSOiA5LFxuICAgIFVQQ0E6IDEwLFxuICAgIENPREU5MzogMTEsXG4gICAgVVBDRTogMTIsXG4gICAgRUFOMTM6IDEzLFxuICAgIFFSQ09ERTogMTQsXG4gICAgQVpURUM6IDE1LFxuICAgIERBVEFNQVRSSVg6IDE2LFxuICAgIEFMTF8xRDogMTcsXG4gICAgQ09ERTExOiAxOCxcbiAgICBKQUJDT0RFOiAxOSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JMQU5LOiAwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GSUxMOiAxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UTzogMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTVJaOiAzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUxTRV9MVU1JTkVTQ0VOQ0U6IDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fU0lNUExFOiA1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9TVEFUSUM6IDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX01VTFRJX1NUQVRJQzogNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfRElOQU1JQzogOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfSU5URVJSVVBURUQ6IDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX1NISUZURUQ6IDEwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX1NBTUVfQ09MT1JTOiAxMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9JUl9JTlZJU0lCTEU6IDEyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSVpFX0NIRUNLOiAxMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19HSE9TVDogMTQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfUkZJRDogMTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfVklTVUFMOiAxNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERTogMTcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQ0FNRVJBOiAxOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0NBTUVSQTogMjAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0dIT1NUX1BIT1RPOiAyMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0xFQVJfR0hPU1RfUEhPVE86IDIyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9JTlZJU0lCTEVfT0JKRUNUOiAyMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTE9XX0NPTlRSQVNUX09CSkVDVDogMjQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPTE9SOiAyNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0hBUEU6IDI2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT1JORVJTOiAyNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfT0NSOiAyOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9FWFRWU19WSVNVQUw6IDI5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX1JGSUQ6IDMwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX0xJVkU6IDMxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19ERVBUSDogMzIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01JQ1JPVEVYVDogMzMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZMVU9SRVNDRU5UX09CSkVDVDogMzQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xBTkRNQVJLU19DSEVDSzogMzUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBQ0VfUFJFU0VOQ0U6IDM2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUNFX0FCU0VOQ0U6IDM4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19TQ1JFRU5fQ0FQVFVSRTogMzksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0VMRUNUUk9OSUNfREVWSUNFOiA0MCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfT1ZJOiA0MSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERV9TSVpFX0NIRUNLOiA0MixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTEFTX0lOSzogNDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX01MSTogNDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0JBUkNPREVfQkFDS0dST1VORDogNDUsXG59XG5cbmV4cG9ydCBjb25zdCBPbmxpbmVNb2RlID0ge1xuICAgIE1BTlVBTDogMCxcbiAgICBBVVRPOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZGlEb2NUeXBlID0ge1xuICAgIGR0Tm90RGVmaW5lZDogMCxcbiAgICBkdFBhc3Nwb3J0OiAxMSxcbiAgICBkdElkZW50aXR5Q2FyZDogMTIsXG4gICAgZHREaXBsb21hdGljUGFzc3BvcnQ6IDEzLFxuICAgIGR0U2VydmljZVBhc3Nwb3J0OiAxNCxcbiAgICBkdFNlYW1hbklkZW50aXR5RG9jdW1lbnQ6IDE1LFxuICAgIGR0SWRlbnRpdHlDYXJkRm9yUmVzaWRlbmNlOiAxNixcbiAgICBkdFRyYXZlbERvY3VtZW50OiAxNyxcbiAgICBkdE90aGVyOiA5OSxcbiAgICBkdFZpc2FJRDI6IDI5LFxuICAgIGR0VmlzYUlEMzogMzAsXG4gICAgZHRSZWdpc3RyYXRpb25DZXJ0aWZpY2F0ZTogMjA2LFxuICAgIGR0TmF0aW9uYWxJZGVudGl0eUNhcmQ6IDIwLFxuICAgIGR0U29jaWFsSWRlbnRpdHlDYXJkOiAyMSxcbiAgICBkdEFsaWVuc0lkZW50aXR5Q2FyZDogMjIsXG4gICAgZHRQcml2aWxlZ2VkSWRlbnRpdHlDYXJkOiAyMyxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdElkZW50aXR5Q2FyZDogMjQsXG4gICAgZHRPcmlnaW5DYXJkOiAyNSxcbiAgICBkdEVtZXJnZW5jeVBhc3Nwb3J0OiAyNixcbiAgICBkdEFsaWVuc1Bhc3Nwb3J0OiAyNyxcbiAgICBkdEFsdGVybmF0aXZlSWRlbnRpdHlDYXJkOiAyOCxcbiAgICBkdEF1dGhvcml6YXRpb25DYXJkOiAzMixcbiAgICBkdEJlZ2lubmVyUGVybWl0OiAzMyxcbiAgICBkdEJvcmRlckNyb3NzaW5nQ2FyZDogMzQsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlOiAzNSxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiAzNixcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiAzNyxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMzgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5zdHJ1Y3Rpb25QZXJtaXQ6IDQyLFxuICAgIGR0Q29tbWVyY2lhbE5ld1Blcm1pdDogNDMsXG4gICAgZHRDb25jZWFsZWRDYXJyeUxpY2Vuc2U6IDQ0LFxuICAgIGR0Q29uY2VhbGVkRmlyZWFybVBlcm1pdDogNDUsXG4gICAgZHRDb25kaXRpb25hbERyaXZpbmdMaWNlbnNlOiA0NixcbiAgICBkdERlcGFydG1lbnRPZlZldGVyYW5zQWZmYWlyc0lkZW50aXR5Q2FyZDogNDcsXG4gICAgZHREaXBsb21hdGljRHJpdmluZ0xpY2Vuc2U6IDQ4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2U6IDQ5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiA1MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0VW5kZXIyMTogNTIsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0OiA1MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjE4OiA1NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjIxOiA1NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlOiA1NixcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogNTcsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDU4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWdpc3RlcmVkT2ZmZW5kZXI6IDU5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIxODogNjAsXG4gICAgZHREcml2aW5nTGljZW5zZVJlc3RyaWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogODYsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMjE6IDg3LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMTg6IDg4LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMjE6IDg5LFxuICAgIGR0SGFuZGd1bkNhcnJ5UGVybWl0OiA5MCxcbiAgICBkdElkZW50aXR5QW5kUHJpdmlsZWdlQ2FyZDogOTEsXG4gICAgZHRJZGVudGl0eUNhcmRNb2JpbGl0eUltcGFpcmVkOiA5MixcbiAgICBkdElkZW50aXR5Q2FyZFJlZ2lzdGVyZWRPZmZlbmRlcjogOTMsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yOiA5NCxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA5NSxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA5NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTg6IDk3LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIyMTogOTgsXG4gICAgZHRJZ25pdGlvbkludGVybG9ja1Blcm1pdDogMTAwLFxuICAgIGR0SW1taWdyYW50VmlzYTogMTAxLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogMTAzLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiAxMDQsXG4gICAgZHRJbnRlcmltRHJpdmluZ0xpY2Vuc2U6IDEwNSxcbiAgICBkdEludGVyaW1JZGVudGl0eUNhcmQ6IDEwNixcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlOiAxMDcsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEwOCxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTA5LFxuICAgIGR0SnVuaW9yRHJpdmluZ0xpY2Vuc2U6IDExMCxcbiAgICBkdExlYXJuZXJJbnN0cnVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlc3RyaWN0ZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDE0OCxcbiAgICBkdFJlc3RyaWN0ZWREcml2aW5nTGljZW5zZTogMTQ5LFxuICAgIGR0UmVzdHJpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZDogMTYwLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjE4OiAxNjEsXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lzdHJhdGlvbkNhcmQ6IDE4NSxcbiAgICBkdEFQRUhDYXJkOiAxODYsXG4gICAgZHRDb3Vwb25Ub0RyaXZpbmdMaWNlbnNlOiAxODcsXG4gICAgZHRDcmV3TWVtYmVyQ2VydGlmaWNhdGU6IDE4OCxcbiAgICBkdERvY3VtZW50Rm9yUmV0dXJuOiAxODksXG4gICAgZHRFQ2FyZDogMTkwLFxuICAgIGR0RW1wbG95bWVudENhcmQ6IDE5MSxcbiAgICBkdEhLU0FSSW1taWdyYXRpb25Gb3JtOiAxOTIsXG4gICAgZHRJbW1pZ3JhbnRDYXJkOiAxOTMsXG4gICAgZHRMYWJvdXJDYXJkOiAxOTQsXG4gICAgZHRMYWlzc2V6UGFzc2VyOiAxOTUsXG4gICAgZHRMYXd5ZXJJZGVudGl0eUNlcnRpZmljYXRlOiAxOTYsXG4gICAgZHRMaWNlbnNlQ2FyZDogMTk3LFxuICAgIGR0UGFzc3BvcnRTdGF0ZWxlc3M6IDE5OCxcbiAgICBkdFBhc3Nwb3J0Q2hpbGQ6IDE5OSxcbiAgICBkdFBhc3Nwb3J0Q29uc3VsYXI6IDIwMCxcbiAgICBkdFBhc3Nwb3J0RGlwbG9tYXRpY1NlcnZpY2U6IDIwMSxcbiAgICBkdFBhc3Nwb3J0T2ZmaWNpYWw6IDIwMixcbiAgICBkdFBhc3Nwb3J0UHJvdmlzaW9uYWw6IDIwMyxcbiAgICBkdFBhc3Nwb3J0U3BlY2lhbDogMjA0LFxuICAgIGR0UGVybWlzc2lvblRvVGhlTG9jYWxCb3JkZXJUcmFmZmljOiAyMDUsXG4gICAgZHRTRURFU09MQ2FyZDogMjA3LFxuICAgIGR0U29jaWFsQ2FyZDogMjA4LFxuICAgIGR0VEJDYXJkOiAyMDksXG4gICAgZHRWZWhpY2xlUGFzc3BvcnQ6IDIxMCxcbiAgICBkdFdEb2N1bWVudDogMjExLFxuICAgIGR0RGlwbG9tYXRpY0lkZW50aXR5Q2FyZDogMjEyLFxuICAgIGR0Q29uc3VsYXJJZGVudGl0eUNhcmQ6IDIxMyxcbiAgICBkdEluY29tZVRheENhcmQ6IDIxNCxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdDogMjE1LFxuICAgIGR0RG9jdW1lbnRPZklkZW50aXR5OiAyMTYsXG4gICAgZHRCb3JkZXJDcm9zc2luZ1Blcm1pdDogMjE3LFxuICAgIGR0UGFzc3BvcnRMaW1pdGVkVmFsaWRpdHk6IDIxOCxcbiAgICBkdFNJTUNhcmQ6IDIxOSxcbiAgICBkdFRheENhcmQ6IDIyMCxcbiAgICBkdENvbXBhbnlDYXJkOiAyMjEsXG4gICAgZHREb21lc3RpY1Bhc3Nwb3J0OiAyMjIsXG4gICAgZHRJZGVudGl0eUNlcnRpZmljYXRlOiAyMjMsXG4gICAgZHRSZXNpZGVudElkQ2FyZDogMjI0LFxuICAgIGR0QXJtZWRGb3JjZXNJZGVudGl0eUNhcmQ6IDIyNSxcbiAgICBkdFByb2Zlc3Npb25hbENhcmQ6IDIyNixcbiAgICBkdFJlZ2lzdHJhdGlvblN0YW1wOiAyMjcsXG4gICAgZHREcml2ZXJDYXJkOiAyMjgsXG4gICAgZHREcml2ZXJUcmFpbmluZ0NlcnRpZmljYXRlOiAyMjksXG4gICAgZHRRdWFsaWZpY2F0aW9uRHJpdmluZ0xpY2Vuc2U6IDIzMCxcbiAgICBkdE1lbWJlcnNoaXBDYXJkOiAyMzEsXG4gICAgZHRQdWJsaWNWZWhpY2xlRHJpdmVyQXV0aG9yaXR5Q2FyZDogMjMyLFxuICAgIGR0TWFyaW5lTGljZW5zZTogMjMzLFxuICAgIGR0VGVtcG9yYXJ5TGVhcm5lckRyaXZpbmdMaWNlbnNlOiAyMzQsXG4gICAgZHRUZW1wb3JhcnlDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDIzNSxcbiAgICBkdEludGVyaW1JbnN0cnVjdGlvbmFsUGVybWl0OiAyMzYsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ29tcGV0ZW5jeTogMjM3LFxuICAgIGR0Q2VydGlmaWNhdGVPZlByb2ZpY2llbmN5OiAyMzgsXG4gICAgZHRUcmFkZUxpY2Vuc2U6IDIzOSxcbiAgICBkdFBhc3Nwb3J0UGFnZTogMjQwLFxuICAgIGR0SW52b2ljZTogMjQxLFxuICAgIGR0UGFzc2VuZ2VyTG9jYXRvckZvcm06IDI0Mixcbn1cblxuZXhwb3J0IGNvbnN0IEhvbG9BbmltYXRpb25UeXBlID0ge1xuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblVua25vd246IDAsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZUhvcml6b250YWw6IDEsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVZlcnRpY2FsOiAyLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVMZWZ0Qm90dG9tUmlnaHRUb3A6IDQsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVJpZ2h0Qm90dG9tTGVmdFRvcDogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSZXF1ZXN0Q29tbWFuZCA9IHtcbiAgICBlUmVxQ21kX1JGaWRfU2VuZERhdGE6IDEwMCxcbiAgICBlUmVxQ21kX1JGaWRfTm90aWZ5OiAxMDEsXG4gICAgZVJlcUNtZF9SRmlkX0dldERhdGFGb3JTY2VuYXJpbzogMTAyLFxuICAgIGVSZXFDbWRfVG9yY2hfR2V0VVZGb3RvOiAyMDAsXG4gICAgZVJlcUNtZF9JbnRlcm5ldFNlbmQ6IDMwMCxcbiAgICBlUmVxQ21kX0dldEd1aWQ6IDQwMCxcbiAgICBlUmVxQ21kX1dsdFRvSW1hZ2U6IDQwMSxcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlRm9ybWF0ID0ge1xuICAgIFBORzogMCxcbiAgICBKUEc6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlR3JhcGhpY0ZpZWxkVHlwZSA9IHtcbiAgICBHRl9QT1JUUkFJVDogMjAxLFxuICAgIEdGX0ZJTkdFUlBSOiAyMDIsXG4gICAgR0ZfRVlFOiAyMDMsXG4gICAgR0ZfU0lHTkFUVVJFOiAyMDQsXG4gICAgR0ZfQkFSX0NPREU6IDIwNSxcbiAgICBHRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDogMjA2LFxuICAgIEdGX0RPQ1VNRU5UX0lNQUdFOiAyMDcsXG4gICAgR0ZfQ09MT1JfRFlOQU1JQzogMjA5LFxuICAgIEdGX0dIT1NUX1BPUlRSQUlUOiAyMTAsXG4gICAgR0ZfU1RBTVA6IDIxMSxcbiAgICBHRl9QT1JUUkFJVF9PRl9DSElMRDogMjEyLFxuICAgIEdGX09USEVSOiAyNTAsXG4gICAgR0ZfRklOR0VSX0xFRlRfVEhVTUI6IDMwMCxcbiAgICBHRl9GSU5HRVJfTEVGVF9JTkRFWDogMzAxLFxuICAgIEdGX0ZJTkdFUl9MRUZUX01JRERMRTogMzAyLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1JJTkc6IDMwMyxcbiAgICBHRl9GSU5HRVJfTEVGVF9MSVRUTEU6IDMwNCxcbiAgICBHRl9GSU5HRVJfUklHSFRfVEhVTUI6IDMwNSxcbiAgICBHRl9GSU5HRVJfUklHSFRfSU5ERVg6IDMwNixcbiAgICBHRl9GSU5HRVJfUklHSFRfTUlERExFOiAzMDcsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1JJTkc6IDMwOCxcbiAgICBHRl9GSU5HRVJfUklHSFRfTElUVExFOiAzMDksXG59XG5cbmV4cG9ydCBjb25zdCBSZWdEZXZpY2VDb25maWdUeXBlID0ge1xuICAgIERFVklDRV83MzEwOiAxLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FQVFVSRV9WSURFTzogMSxcbiAgICBDQVBUVVJFX0ZSQU1FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrUmVzdWx0ID0ge1xuICAgIENIX0NIRUNLX0VSUk9SOiAwLFxuICAgIENIX0NIRUNLX09LOiAxLFxuICAgIENIX0NIRUNLX1dBU19OT1RfRE9ORTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Rlcm1pbmFsVHlwZSA9IHtcbiAgICBURVRfVU5ERUZJTkVEOiAwLFxuICAgIFRFVF9JTlNQRUNUSU9OX1NZU1RFTTogMSxcbiAgICBURVRfQVVUSEVOVElDQVRJT05fVEVSTUlOQUw6IDIsXG4gICAgVEVUX1NJR05BVFVSRV9URVJNSU5BTDogMyxcbiAgICBURVRfVU5BVVRIRU5USUNBVEVEX1RFUk1JTkFMOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRGF0YUZpbGVfVHlwZSA9IHtcbiAgICBERlRfVU5TUEVDSUZJRUQ6IDAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTogMSxcbiAgICBERlRfUEFTU1BPUlRfREcyOiAyLFxuICAgIERGVF9QQVNTUE9SVF9ERzM6IDMsXG4gICAgREZUX1BBU1NQT1JUX0RHNDogNCxcbiAgICBERlRfUEFTU1BPUlRfREc1OiA1LFxuICAgIERGVF9QQVNTUE9SVF9ERzY6IDYsXG4gICAgREZUX1BBU1NQT1JUX0RHNzogNyxcbiAgICBERlRfUEFTU1BPUlRfREc4OiA4LFxuICAgIERGVF9QQVNTUE9SVF9ERzk6IDksXG4gICAgREZUX1BBU1NQT1JUX0RHMTA6IDEwLFxuICAgIERGVF9QQVNTUE9SVF9ERzExOiAxMSxcbiAgICBERlRfUEFTU1BPUlRfREcxMjogMTIsXG4gICAgREZUX1BBU1NQT1JUX0RHMTM6IDEzLFxuICAgIERGVF9QQVNTUE9SVF9ERzE0OiAxNCxcbiAgICBERlRfUEFTU1BPUlRfREcxNTogMTUsXG4gICAgREZUX1BBU1NQT1JUX0RHMTY6IDE2LFxuICAgIERGVF9QQVNTUE9SVF9ERzE3OiAxNyxcbiAgICBERlRfUEFTU1BPUlRfREcxODogMTgsXG4gICAgREZUX1BBU1NQT1JUX0RHMTk6IDE5LFxuICAgIERGVF9QQVNTUE9SVF9ERzIwOiAyMCxcbiAgICBERlRfUEFTU1BPUlRfU09EOiAyMSxcbiAgICBERlRfUEFTU1BPUlRfQ1ZDQTogMjIsXG4gICAgREZUX1BBU1NQT1JUX0NPTTogMjMsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MDAgKyAzMixcbiAgICBERlRfVkRTOiA5MDAsXG4gICAgREZUX1ZEU05DOiA5MDEsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVZpc3VhbEZpZWxkVHlwZSA9IHtcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19DT0RFOiAwLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERTogMSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVI6IDIsXG4gICAgRlRfREFURV9PRl9FWFBJUlk6IDMsXG4gICAgRlRfREFURV9PRl9JU1NVRTogNCxcbiAgICBGVF9EQVRFX09GX0JJUlRIOiA1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIOiA2LFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUjogNyxcbiAgICBGVF9TVVJOQU1FOiA4LFxuICAgIEZUX0dJVkVOX05BTUVTOiA5LFxuICAgIEZUX01PVEhFUlNfTkFNRTogMTAsXG4gICAgRlRfTkFUSU9OQUxJVFk6IDExLFxuICAgIEZUX1NFWDogMTIsXG4gICAgRlRfSEVJR0hUOiAxMyxcbiAgICBGVF9XRUlHSFQ6IDE0LFxuICAgIEZUX0VZRVNfQ09MT1I6IDE1LFxuICAgIEZUX0hBSVJfQ09MT1I6IDE2LFxuICAgIEZUX0FERFJFU1M6IDE3LFxuICAgIEZUX0RPTk9SOiAxOCxcbiAgICBGVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxOSxcbiAgICBGVF9ETF9DTEFTUzogMjAsXG4gICAgRlRfRExfRU5ET1JTRUQ6IDIxLFxuICAgIEZUX0RMX1JFU1RSSUNUSU9OX0NPREU6IDIyLFxuICAgIEZUX0RMX1VOREVSXzIxX0RBVEU6IDIzLFxuICAgIEZUX0FVVEhPUklUWTogMjQsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDI1LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREU6IDI2LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUjogMjcsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVI6IDI4LFxuICAgIEZUX1ZJU0FfSUQ6IDI5LFxuICAgIEZUX1ZJU0FfQ0xBU1M6IDMwLFxuICAgIEZUX1ZJU0FfU1VCX0NMQVNTOiAzMSxcbiAgICBGVF9NUlpfU1RSSU5HXzE6IDMyLFxuICAgIEZUX01SWl9TVFJJTkdfMjogMzMsXG4gICAgRlRfTVJaX1NUUklOR18zOiAzNCxcbiAgICBGVF9NUlpfVFlQRTogMzUsXG4gICAgRlRfT1BUSU9OQUxfREFUQTogMzYsXG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTogMzcsXG4gICAgRlRfSVNTVUlOR19TVEFURV9OQU1FOiAzOCxcbiAgICBGVF9QTEFDRV9PRl9JU1NVRTogMzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOiA0MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOiA0MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTogNDIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOiA0MyxcbiAgICBGVF9GSU5BTF9DSEVDS1NVTTogNDQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOiA0NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTogNDYsXG4gICAgRlRfVklTQV9JRF9DSEVDS1NVTTogNDcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06IDQ4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06IDQ5LFxuICAgIEZUX09USEVSOiA1MCxcbiAgICBGVF9NUlpfU1RSSU5HUzogNTEsXG4gICAgRlRfTkFNRV9TVUZGSVg6IDUyLFxuICAgIEZUX05BTUVfUFJFRklYOiA1MyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOiA1NCxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOiA1NSxcbiAgICBGVF9ET0NVTUVOVF9TRVJJRVM6IDU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVI6IDU3LFxuICAgIEZUX1JFR19DRVJUX0NBUl9NT0RFTDogNTgsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOiA1OSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjogNjAsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX1RZUEU6IDYxLFxuICAgIEZUX1JFR19DRVJUX01BWF9XRUlHSFQ6IDYyLFxuICAgIEZUX1JFR19DRVJUX1dFSUdIVDogNjMsXG4gICAgRlRfQUREUkVTU19BUkVBOiA2NCxcbiAgICBGVF9BRERSRVNTX1NUQVRFOiA2NSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HOiA2NixcbiAgICBGVF9BRERSRVNTX0hPVVNFOiA2NyxcbiAgICBGVF9BRERSRVNTX0ZMQVQ6IDY4LFxuICAgIEZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjogNjksXG4gICAgRlRfREFURV9PRl9SRUdJU1RSQVRJT046IDcwLFxuICAgIEZUX1JFU0lERU5UX0ZST006IDcxLFxuICAgIEZUX1JFU0lERU5UX1VOVElMOiA3MixcbiAgICBGVF9BVVRIT1JJVFlfQ09ERTogNzMsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTogNzQsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTogNzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVQ6IDc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWTogNzcsXG4gICAgRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogNzgsXG4gICAgRlRfQUREUkVTU19QT1NUQUxfQ09ERTogNzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOiA4MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDogODIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MyxcbiAgICBGVF9GSU5BTF9DSEVDS19ESUdJVDogODQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDogODYsXG4gICAgRlRfVklTQV9JRF9DSEVDS19ESUdJVDogODcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6IDg4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6IDg5LFxuICAgIEZUX1BFUk1JVF9ETF9DTEFTUzogOTAsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOiA5MSxcbiAgICBGVF9QRVJNSVRfSURFTlRJRklFUjogOTIsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6IDkzLFxuICAgIEZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOiA5NCxcbiAgICBGVF9QRVJNSVRfRU5ET1JTRUQ6IDk1LFxuICAgIEZUX0lTU1VFX1RJTUVTVEFNUDogOTYsXG4gICAgRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6IDk3LFxuICAgIEZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOiA5OCxcbiAgICBGVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOiA5OSxcbiAgICBGVF9WSVNBX1RZUEU6IDEwMCxcbiAgICBGVF9WSVNBX1ZBTElEX0ZST006IDEwMSxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMOiAxMDIsXG4gICAgRlRfRFVSQVRJT05fT0ZfU1RBWTogMTAzLFxuICAgIEZUX05VTUJFUl9PRl9FTlRSSUVTOiAxMDQsXG4gICAgRlRfREFZOiAxMDUsXG4gICAgRlRfTU9OVEg6IDEwNixcbiAgICBGVF9ZRUFSOiAxMDcsXG4gICAgRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6IDEwOCxcbiAgICBGVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6IDEwOSxcbiAgICBGVF9BS0FfREFURV9PRl9CSVJUSDogMTEwLFxuICAgIEZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxMTEsXG4gICAgRlRfQUtBX1NVUk5BTUU6IDExMixcbiAgICBGVF9BS0FfR0lWRU5fTkFNRVM6IDExMyxcbiAgICBGVF9BS0FfTkFNRV9TVUZGSVg6IDExNCxcbiAgICBGVF9BS0FfTkFNRV9QUkVGSVg6IDExNSxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOiAxMTYsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0NJVFk6IDExNyxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDExOCxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6IDExOSxcbiAgICBGVF9BVURJVF9JTkZPUk1BVElPTjogMTIwLFxuICAgIEZUX0lOVkVOVE9SWV9OVU1CRVI6IDEyMSxcbiAgICBGVF9SQUNFX0VUSE5JQ0lUWTogMTIyLFxuICAgIEZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOiAxMjMsXG4gICAgRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6IDEyNCxcbiAgICBGVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTogMTI1LFxuICAgIEZUX0ZBTUlMWV9OQU1FOiAxMjYsXG4gICAgRlRfR0lWRU5fTkFNRVNfUlVTOiAxMjcsXG4gICAgRlRfVklTQV9JRF9SVVM6IDEyOCxcbiAgICBGVF9GQVRIRVJTX05BTUU6IDEyOSxcbiAgICBGVF9GQVRIRVJTX05BTUVfUlVTOiAxMzAsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOiAxMzEsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfUlVTOiAxMzIsXG4gICAgRlRfQVVUSE9SSVRZX1JVUzogMTMzLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOiAxMzQsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOiAxMzUsXG4gICAgRlRfRU5HSU5FX1BPV0VSOiAxMzYsXG4gICAgRlRfRU5HSU5FX1ZPTFVNRTogMTM3LFxuICAgIEZUX0NIQVNTSVNfTlVNQkVSOiAxMzgsXG4gICAgRlRfRU5HSU5FX05VTUJFUjogMTM5LFxuICAgIEZUX0VOR0lORV9NT0RFTDogMTQwLFxuICAgIEZUX1ZFSElDTEVfQ0FURUdPUlk6IDE0MSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUjogMTQyLFxuICAgIEZUX0NPTlRST0xfTk86IDE0MyxcbiAgICBGVF9QQVJSRU5UU19HSVZFTl9OQU1FUzogMTQ0LFxuICAgIEZUX1NFQ09ORF9TVVJOQU1FOiAxNDUsXG4gICAgRlRfTUlERExFX05BTUU6IDE0NixcbiAgICBGVF9SRUdfQ0VSVF9WSU46IDE0NyxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6IDE0OCxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06IDE0OSxcbiAgICBGVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6IDE1MCxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6IDE1MSxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6IDE1MixcbiAgICBGVF9MSU5FXzFfQ0hFQ0tTVU06IDE1MyxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tTVU06IDE1NCxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tTVU06IDE1NSxcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOiAxNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTogMTU3LFxuICAgIEZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6IDE1OCxcbiAgICBGVF9DQVJEX0FDQ0VTU19OVU1CRVI6IDE1OSxcbiAgICBGVF9NQVJJVEFMX1NUQVRVUzogMTYwLFxuICAgIEZUX0NPTVBBTllfTkFNRTogMTYxLFxuICAgIEZUX1NQRUNJQUxfTk9URVM6IDE2MixcbiAgICBGVF9TVVJOQU1FX09GX1NQT1NFOiAxNjMsXG4gICAgRlRfVFJBQ0tJTkdfTlVNQkVSOiAxNjQsXG4gICAgRlRfQk9PS0xFVF9OVU1CRVI6IDE2NSxcbiAgICBGVF9DSElMRFJFTjogMTY2LFxuICAgIEZUX0NPUFk6IDE2NyxcbiAgICBGVF9TRVJJQUxfTlVNQkVSOiAxNjgsXG4gICAgRlRfRE9TU0lFUl9OVU1CRVI6IDE2OSxcbiAgICBGVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDE3MCxcbiAgICBGVF9URVJSSVRPUklBTF9WQUxJRElUWTogMTcxLFxuICAgIEZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOiAxNzIsXG4gICAgRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6IDE3MyxcbiAgICBGVF9ETF9VTkRFUl8xOF9EQVRFOiAxNzQsXG4gICAgRlRfRExfUkVDT1JEX0NSRUFURUQ6IDE3NSxcbiAgICBGVF9ETF9EVVBMSUNBVEVfREFURTogMTc2LFxuICAgIEZUX0RMX0lTU19UWVBFOiAxNzcsXG4gICAgRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6IDE3OCxcbiAgICBGVF9ERVNUSU5BVElPTjogMTc5LFxuICAgIEZUX0JMT09EX0dST1VQOiAxODAsXG4gICAgRlRfU0VRVUVOQ0VfTlVNQkVSOiAxODEsXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9UWVBFOiAxODIsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01BUks6IDE4MyxcbiAgICBGVF9UUkFOU0FDVElPTl9OVU1CRVI6IDE4NCxcbiAgICBGVF9BR0U6IDE4NSxcbiAgICBGVF9GT0xJT19OVU1CRVI6IDE4NixcbiAgICBGVF9WT1RFUl9LRVk6IDE4NyxcbiAgICBGVF9BRERSRVNTX01VTklDSVBBTElUWTogMTg4LFxuICAgIEZUX0FERFJFU1NfTE9DQVRJT046IDE4OSxcbiAgICBGVF9TRUNUSU9OOiAxOTAsXG4gICAgRlRfT0NSX05VTUJFUjogMTkxLFxuICAgIEZUX0ZFREVSQUxfRUxFQ1RJT05TOiAxOTIsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUjogMTkzLFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06IDE5NCxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOiAxOTUsXG4gICAgRlRfVklTQV9OVU1CRVI6IDE5NixcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS1NVTTogMTk3LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOiAxOTgsXG4gICAgRlRfVk9URVI6IDE5OSxcbiAgICBGVF9QUkVWSU9VU19UWVBFOiAyMDAsXG4gICAgRlRfRklFTERfRlJPTV9NUlo6IDIyMCxcbiAgICBGVF9DVVJSRU5UX0RBVEU6IDIyMSxcbiAgICBGVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6IDI1MSxcbiAgICBGVF9CQU5LTk9URV9OVU1CRVI6IDI1MixcbiAgICBGVF9DU0NfQ09ERTogMjUzLFxuICAgIEZUX0FSVElTVElDX05BTUU6IDI1NCxcbiAgICBGVF9BQ0FERU1JQ19USVRMRTogMjU1LFxuICAgIEZUX0FERFJFU1NfQ09VTlRSWTogMjU2LFxuICAgIEZUX0FERFJFU1NfWklQQ09ERTogMjU3LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOiAyNTgsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6IDI1OSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDogMjYwLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTogMjYxLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6IDI2MixcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6IDI2MyxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6IDI2NCxcbiAgICBGVF9DRExfQ0xBU1M6IDI2NSxcbiAgICBGVF9ETF9VTkRFUl8xOV9EQVRFOiAyNjYsXG4gICAgRlRfV0VJR0hUX1BPVU5EUzogMjY3LFxuICAgIEZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOiAyNjgsXG4gICAgRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOiAyNjksXG4gICAgRlRfUkVWSVNJT05fREFURTogMjcwLFxuICAgIEZUX0NPTVBMSUFOQ0VfVFlQRTogMjcxLFxuICAgIEZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046IDI3MixcbiAgICBGVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046IDI3MyxcbiAgICBGVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOiAyNzQsXG4gICAgRlRfRVhBTV9EQVRFOiAyNzUsXG4gICAgRlRfT1JHQU5JWkFUSU9OOiAyNzYsXG4gICAgRlRfREVQQVJUTUVOVDogMjc3LFxuICAgIEZUX1BBWV9HUkFERTogMjc4LFxuICAgIEZUX1JBTks6IDI3OSxcbiAgICBGVF9CRU5FRklUU19OVU1CRVI6IDI4MCxcbiAgICBGVF9TUE9OU09SX1NFUlZJQ0U6IDI4MSxcbiAgICBGVF9TUE9OU09SX1NUQVRVUzogMjgyLFxuICAgIEZUX1NQT05TT1I6IDI4MyxcbiAgICBGVF9SRUxBVElPTlNISVA6IDI4NCxcbiAgICBGVF9VU0NJUzogMjg1LFxuICAgIEZUX0NBVEVHT1JZOiAyODYsXG4gICAgRlRfQ09ORElUSU9OUzogMjg3LFxuICAgIEZUX0lERU5USUZJRVI6IDI4OCxcbiAgICBGVF9DT05GSUdVUkFUSU9OOiAyODksXG4gICAgRlRfRElTQ1JFVElPTkFSWV9EQVRBOiAyOTAsXG4gICAgRlRfTElORV8xX09QVElPTkFMX0RBVEE6IDI5MSxcbiAgICBGVF9MSU5FXzJfT1BUSU9OQUxfREFUQTogMjkyLFxuICAgIEZUX0xJTkVfM19PUFRJT05BTF9EQVRBOiAyOTMsXG4gICAgRlRfRVFWX0NPREU6IDI5NCxcbiAgICBGVF9BTFRfQ09ERTogMjk1LFxuICAgIEZUX0JJTkFSWV9DT0RFOiAyOTYsXG4gICAgRlRfUFNFVURPX0NPREU6IDI5NyxcbiAgICBGVF9GRUU6IDI5OCxcbiAgICBGVF9TVEFNUF9OVU1CRVI6IDI5OSxcbiAgICBGVF9TQkhfU0VDVVJJVFlPUFRJT05TOiAzMDAsXG4gICAgRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6IDMwMSxcbiAgICBGVF9EQVRFX09GX0NSRUFUSU9OOiAzMDIsXG4gICAgRlRfVkFMSURJVFlfUEVSSU9EOiAzMDMsXG4gICAgRlRfUEFUUk9OX0hFQURFUl9WRVJTSU9OOiAzMDQsXG4gICAgRlRfQkRCX1RZUEU6IDMwNSxcbiAgICBGVF9CSU9NRVRSSUNfVFlQRTogMzA2LFxuICAgIEZUX0JJT01FVFJJQ19TVUJUWVBFOiAzMDcsXG4gICAgRlRfQklPTUVUUklDX1BST0RVQ1RJRDogMzA4LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6IDMwOSxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX1RZUEU6IDMxMCxcbiAgICBGVF9QSE9ORTogMzExLFxuICAgIEZUX1BST0ZFU1NJT046IDMxMixcbiAgICBGVF9USVRMRTogMzEzLFxuICAgIEZUX1BFUlNPTkFMX1NVTU1BUlk6IDMxNCxcbiAgICBGVF9PVEhFUl9WQUxJRF9JRDogMzE1LFxuICAgIEZUX0NVU1RPRFlfSU5GTzogMzE2LFxuICAgIEZUX09USEVSX05BTUU6IDMxNyxcbiAgICBGVF9PQlNFUlZBVElPTlM6IDMxOCxcbiAgICBGVF9UQVg6IDMxOSxcbiAgICBGVF9EQVRFX09GX1BFUlNPTkFMSVpBVElPTjogMzIwLFxuICAgIEZUX1BFUlNPTkFMSVpBVElPTl9TTjogMzIxLFxuICAgIEZUX09USEVSUEVSU09OX05BTUU6IDMyMixcbiAgICBGVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDogMzIzLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX05BTUU6IDMyNCxcbiAgICBGVF9QRVJTT05UT05PVElGWV9QSE9ORTogMzI1LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0FERFJFU1M6IDMyNixcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6IDMyNyxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOiAzMjgsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOiAzMjksXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURUTzogMzMwLFxuICAgIEZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOiAzMzEsXG4gICAgRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6IDMzMixcbiAgICBGVF9BRE1JTklTVFJBVElWRV9OVU1CRVI6IDMzMyxcbiAgICBGVF9ET0NVTUVOVF9ESVNDUklNSU5BVE9SOiAzMzQsXG4gICAgRlRfREFUQV9ESVNDUklNSU5BVE9SOiAzMzUsXG4gICAgRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6IDMzNixcbiAgICBGVF9HTklCX05VTUJFUjogMzQwLFxuICAgIEZUX0RFUFRfTlVNQkVSOiAzNDEsXG4gICAgRlRfVEVMRVhfQ09ERTogMzQyLFxuICAgIEZUX0FMTEVSR0lFUzogMzQzLFxuICAgIEZUX1NQX0NPREU6IDM0NCxcbiAgICBGVF9DT1VSVF9DT0RFOiAzNDUsXG4gICAgRlRfQ1RZOiAzNDYsXG4gICAgRlRfU1BPTlNPUl9TU046IDM0NyxcbiAgICBGVF9ET19EX05VTUJFUjogMzQ4LFxuICAgIEZUX01DX05PVklDRV9EQVRFOiAzNDksXG4gICAgRlRfRFVGX05VTUJFUjogMzUwLFxuICAgIEZUX0FHWTogMzUxLFxuICAgIEZUX1BOUl9DT0RFOiAzNTIsXG4gICAgRlRfRlJPTV9BSVJQT1JUX0NPREU6IDM1MyxcbiAgICBGVF9UT19BSVJQT1JUX0NPREU6IDM1NCxcbiAgICBGVF9GTElHSFRfTlVNQkVSOiAzNTUsXG4gICAgRlRfREFURV9PRl9GTElHSFQ6IDM1NixcbiAgICBGVF9TRUFUX05VTUJFUjogMzU3LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzogMzU4LFxuICAgIEZUX0NDV19VTlRJTDogMzU5LFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06IDM2MCxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNjEsXG4gICAgRlRfUk9PTV9OVU1CRVI6IDM2MixcbiAgICBGVF9SRUxJR0lPTjogMzYzLFxuICAgIEZUX1JFTUFJTkRFUl9URVJNOiAzNjQsXG4gICAgRlRfRUxFQ1RST05JQ19USUNLRVRfSU5ESUNBVE9SOiAzNjUsXG4gICAgRlRfQ09NUEFSVE1FTlRfQ09ERTogMzY2LFxuICAgIEZUX0NIRUNLX0lOX1NFUVVFTkNFX05VTUJFUjogMzY3LFxuICAgIEZUX0FJUkxJTkVfREVTSUdOQVRPUl9PRl9CT0FSRElOR19QQVNTX0lTU1VFUjogMzY4LFxuICAgIEZUX0FJUkxJTkVfTlVNRVJJQ19DT0RFOiAzNjksXG4gICAgRlRfVElDS0VUX05VTUJFUjogMzcwLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX0FJUkxJTkVfREVTSUdOQVRPUjogMzcxLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX05VTUJFUjogMzcyLFxuICAgIEZUX0ZSRUVfQkFHR0FHRV9BTExPV0FOQ0U6IDM3MyxcbiAgICBGVF9QREZfNDE3X0NPREVDOiAzNzQsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06IDM3NSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDogMzc2LFxuICAgIEZUX1ZFVEVSQU46IDM3NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9GUk9NOiAzNzgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfVE86IDM3OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9OT1RFUzogMzgwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOiAzODEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX1RPOiAzODIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX05PVEVTOiAzODMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX0ZST006IDM4NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfVE86IDM4NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6IDM4NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9GUk9NOiAzODcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfVE86IDM4OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9OT1RFUzogMzg5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOiAzOTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX1RPOiAzOTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX05PVEVTOiAzOTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRlJPTTogMzkzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOiAzOTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfTk9URVM6IDM5NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfRlJPTTogMzk2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9UTzogMzk3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9OT1RFUzogMzk4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTogMzk5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfVE86IDQwMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOiA0MDEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9GUk9NOiA0MDIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9UTzogNDAzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfTk9URVM6IDQwNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX0ZST006IDQwNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX1RPOiA0MDYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9OT1RFUzogNDA3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTogNDA4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfVE86IDQwOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX05PVEVTOiA0MTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9GUk9NOiA0MTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzogNDEyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfTk9URVM6IDQxMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fRlJPTTogNDE0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9UTzogNDE1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9OT1RFUzogNDE2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOiA0MTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX1RPOiA0MTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX05PVEVTOiA0MTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX0ZST006IDQyMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfVE86IDQyMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6IDQyMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX0ZST006IDQyMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX1RPOiA0MjQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9OT1RFUzogNDI1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006IDQyNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9UTzogNDI3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOiA0MjgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfRlJPTTogNDI5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOiA0MzAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfTk9URVM6IDQzMSxcbiAgICBGVF9TVVJOQU1FX0FUX0JJUlRIOiA0MzIsXG4gICAgRlRfQ0lWSUxfU1RBVFVTOiA0MzMsXG4gICAgRlRfTlVNQkVSX09GX1NFQVRTOiA0MzQsXG4gICAgRlRfTlVNQkVSX09GX1NUQU5ESU5HX1BMQUNFUzogNDM1LFxuICAgIEZUX01BWF9TUEVFRDogNDM2LFxuICAgIEZUX0ZVRUxfVFlQRTogNDM3LFxuICAgIEZUX0VDX0VOVklST05NRU5UQUxfVFlQRTogNDM4LFxuICAgIEZUX1BPV0VSX1dFSUdIVF9SQVRJTzogNDM5LFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfQlJBS0VEOiA0NDAsXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDogNDQxLFxuICAgIEZUX1RSQU5TTUlTU0lPTl9UWVBFOiA0NDIsXG4gICAgRlRfVFJBSUxFUl9ISVRDSDogNDQzLFxuICAgIEZUX0FDQ09NUEFOSUVEX0JZOiA0NDQsXG4gICAgRlRfUE9MSUNFX0RJU1RSSUNUOiA0NDUsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURTogNDQ2LFxuICAgIEZUX1BBWUxPQURfQ0FQQUNJVFk6IDQ0NyxcbiAgICBGVF9OVU1CRVJfT0ZfQVhFTFM6IDQ0OCxcbiAgICBGVF9QRVJNSVNTSUJMRV9BWExFX0xPQUQ6IDQ0OSxcbiAgICBGVF9QUkVDSU5DVDogNDUwLFxuICAgIEZUX0lOVklURURfQlk6IDQ1MSxcbiAgICBGVF9QVVJQT1NFX09GX0VOVFJZOiA0NTIsXG4gICAgRlRfU0tJTl9DT0xPUjogNDUzLFxuICAgIEZUX0NPTVBMRVhJT046IDQ1NCxcbiAgICBGVF9BSVJQT1JUX0ZST006IDQ1NSxcbiAgICBGVF9BSVJQT1JUX1RPOiA0NTYsXG4gICAgRlRfQUlSTElORV9OQU1FOiA0NTcsXG4gICAgRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOiA0NTgsXG4gICAgRlRfTElDRU5TRV9OVU1CRVI6IDQ1OSxcbiAgICBGVF9JTl9UQU5LUzogNDYwLFxuICAgIEZUX0VYRVBUX0lOX1RBTktTOiA0NjEsXG4gICAgRlRfRkFTVF9UUkFDSzogNDYyLFxuICAgIEZUX09XTkVSOiA0NjMsXG4gICAgRlRfTVJaX1NUUklOR1NfSUNBT19SRklEOiA0NjQsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0U6IDQ2NSxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS1NVTTogNDY2LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLX0RJR0lUOiA0NjcsXG4gICAgRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOiA0NjgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX0ZST006IDQ2OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfVE86IDQ3MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfTk9URVM6IDQ3MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfRlJPTTogNDcyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9UTzogNDczLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzogNDc0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9GUk9NOiA0NzUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX1RPOiA0NzYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX05PVEVTOiA0NzcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX0ZST006IDQ3OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfVE86IDQ3OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfTk9URVM6IDQ4MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX0ZST006IDQ4MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX1RPOiA0ODIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9OT1RFUzogNDgzLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX0ZST006IDQ4NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19UTzogNDg1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOiA0ODYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfRlJPTTogNDg3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX1RPOiA0ODgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfTk9URVM6IDQ4OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfRlJPTTogNDkwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19UTzogNDkxLFxuICAgIEZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzogNDkyLFxuICAgIEZUX0JBTktDQVJETlVNQkVSOiA0OTMsXG4gICAgRlRfQkFOS0NBUkRWQUxJRFRIUlU6IDQ5NCxcbiAgICBGVF9UQVhfTlVNQkVSOiA0OTUsXG4gICAgRlRfSEVBTFRIX05VTUJFUjogNDk2LFxuICAgIEZUX0dSQU5ERkFUSEVSTkFNRTogNDk3LFxuICAgIEZUX1NFTEVDVEVFX0lORElDQVRPUjogNDk4LFxuICAgIEZUX01PVEhFUl9TVVJOQU1FOiA0OTksXG4gICAgRlRfTU9USEVSX0dJVkVOTkFNRTogNTAwLFxuICAgIEZUX0ZBVEhFUl9TVVJOQU1FOiA1MDEsXG4gICAgRlRfRkFUSEVSX0dJVkVOTkFNRTogNTAyLFxuICAgIEZUX01PVEhFUl9EQVRFT0ZCSVJUSDogNTAzLFxuICAgIEZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDogNTA0LFxuICAgIEZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjogNTA1LFxuICAgIEZUX0ZBVEhFUl9QRVJTT05BTE5VTUJFUjogNTA2LFxuICAgIEZUX01PVEhFUl9QTEFDRU9GQklSVEg6IDUwNyxcbiAgICBGVF9GQVRIRVJfUExBQ0VPRkJJUlRIOiA1MDgsXG4gICAgRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOiA1MDksXG4gICAgRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOiA1MTAsXG4gICAgRlRfREFURV9GSVJTVF9SRU5FV0FMOiA1MTEsXG4gICAgRlRfREFURV9TRUNPTkRfUkVORVdBTDogNTEyLFxuICAgIEZUX1BMQUNFX09GX0VYQU1JTkFUSU9OOiA1MTMsXG4gICAgRlRfQVBQTElDQVRJT05fTlVNQkVSOiA1MTQsXG4gICAgRlRfVk9VQ0hFUl9OVU1CRVI6IDUxNSxcbiAgICBGVF9BVVRIT1JJWkFUSU9OX05VTUJFUjogNTE2LFxuICAgIEZUX0ZBQ1VMVFk6IDUxNyxcbiAgICBGVF9GT1JNX09GX0VEVUNBVElPTjogNTE4LFxuICAgIEZUX0ROSV9OVU1CRVI6IDUxOSxcbiAgICBGVF9SRVRJUkVNRU5UX05VTUJFUjogNTIwLFxuICAgIEZUX1BST0ZFU1NJT05BTF9JRF9OVU1CRVI6IDUyMSxcbiAgICBGVF9BR0VfQVRfSVNTVUU6IDUyMixcbiAgICBGVF9ZRUFSU19TSU5DRV9JU1NVRTogNTIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9GUk9NOiA1MjQsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOiA1MjUsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX1RPOiA1MjYsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfRlJPTTogNTI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX05PVEVTOiA1MjgsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfVE86IDUyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX0ZST006IDUzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9FX05PVEVTOiA1MzEsXG4gICAgRlRfRExDTEFTU0NPREVfRV9UTzogNTMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfRlJPTTogNTMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfTk9URVM6IDUzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9GX1RPOiA1MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfRlJPTTogNTM2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX05PVEVTOiA1MzcsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfVE86IDUzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfRlJPTTogNTM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9OT1RFUzogNTQwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9UTzogNTQxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX0ZST006IDU0MixcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9OT1RFUzogNTQzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX1RPOiA1NDQsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfRlJPTTogNTQ1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX05PVEVTOiA1NDYsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfVE86IDU0NyxcbiAgICBGVF9ETENMQVNTQ09ERV9IX0ZST006IDU0OCxcbiAgICBGVF9ETENMQVNTQ09ERV9IX05PVEVTOiA1NDksXG4gICAgRlRfRExDTEFTU0NPREVfSF9UTzogNTUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfRlJPTTogNTUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfTk9URVM6IDU1MixcbiAgICBGVF9ETENMQVNTQ09ERV9JX1RPOiA1NTMsXG4gICAgRlRfRExDTEFTU0NPREVfS19GUk9NOiA1NTQsXG4gICAgRlRfRExDTEFTU0NPREVfS19OT1RFUzogNTU1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfVE86IDU1NixcbiAgICBGVF9ETENMQVNTQ09ERV9MS19GUk9NOiA1NTcsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfTk9URVM6IDU1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19UTzogNTU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fRlJPTTogNTYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fTk9URVM6IDU2MSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX1RPOiA1NjIsXG4gICAgRlRfRExDTEFTU0NPREVfU19GUk9NOiA1NjMsXG4gICAgRlRfRExDTEFTU0NPREVfU19OT1RFUzogNTY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfVE86IDU2NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9GUk9NOiA1NjYsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfTk9URVM6IDU2NyxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9UTzogNTY4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX0ZST006IDU2OSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9OT1RFUzogNTcwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX1RPOiA1NzEsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfRlJPTTogNTcyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX05PVEVTOiA1NzMsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfVE86IDU3NCxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9GUk9NOiA1NzUsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfTk9URVM6IDU3NixcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9UTzogNTc3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfRlJPTTogNTc4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfTk9URVM6IDU3OSxcbiAgICBGVF9ETENMQVNTQ09ERV9WX1RPOiA1ODAsXG4gICAgRlRfRExDTEFTU0NPREVfV19GUk9NOiA1ODEsXG4gICAgRlRfRExDTEFTU0NPREVfV19OT1RFUzogNTgyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfVE86IDU4MyxcbiAgICBGVF9VUkw6IDU4NCxcbiAgICBGVF9DQUxJQkVSOiA1ODUsXG4gICAgRlRfTU9ERUw6IDU4NixcbiAgICBGVF9NQUtFOiA1ODcsXG4gICAgRlRfTlVNQkVSX09GX0NZTElOREVSUzogNTg4LFxuICAgIEZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046IDU4OSxcbiAgICBGVF9TVVJOQU1FX09GX1dJRkVfQUZURVJfUkVHSVNUUkFUSU9OOiA1OTAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9XSUZFOiA1OTEsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9IVVNCQU5EOiA1OTIsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOiA1OTMsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfU0VDT05EX1BFUlNPTjogNTk0LFxuICAgIEZUX0NWVjogNTk1LFxuICAgIEZUX0RBVEVfT0ZfSU5TVVJBTkNFX0VYUElSWTogNTk2LFxuICAgIEZUX01PUlRHQUdFX0JZOiA1OTcsXG4gICAgRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjogNTk4LFxuICAgIEZUX09MRF9EQVRFX09GX0lTU1VFOiA1OTksXG4gICAgRlRfT0xEX1BMQUNFX09GX0lTU1VFOiA2MDAsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfRlJPTTogNjAxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX1RPOiA2MDIsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfTk9URVM6IDYwMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9GUk9NOiA2MDQsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfVE86IDYwNSxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9OT1RFUzogNjA2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX0ZST006IDYwNyxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9UTzogNjA4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX05PVEVTOiA2MDksXG4gICAgRlRfRExDTEFTU0NPREVfSENfRlJPTTogNjEwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX1RPOiA2MTEsXG4gICAgRlRfRExDTEFTU0NPREVfSENfTk9URVM6IDYxMixcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19GUk9NOiA2MTMsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfVE86IDYxNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19OT1RFUzogNjE1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX0ZST006IDYxNixcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9UTzogNjE3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX05PVEVTOiA2MTgsXG4gICAgRlRfRExDTEFTU0NPREVfUl9GUk9NOiA2MTksXG4gICAgRlRfRExDTEFTU0NPREVfUl9UTzogNjIwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfTk9URVM6IDYyMSxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9GUk9NOiA2MjIsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfVE86IDYyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9OT1RFUzogNjI0LFxuICAgIEZUX0NJVElaRU5TSElQX1NUQVRVUzogNjI1LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfRlJPTTogNjI2LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfVE86IDYyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9GUk9NOiA2MjgsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfVE86IDYyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9OT1RFUzogNjMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX0ZST006IDYzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9UTzogNjMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX05PVEVTOiA2MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfRlJPTTogNjM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX1RPOiA2MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfTk9URVM6IDYzNixcbiAgICBGVF9BTFRfREFURV9PRl9FWFBJUlk6IDYzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9GUk9NOiA2MzgsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfVE86IDYzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9OT1RFUzogNjQwLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX1RPOiA2NDMsXG4gICAgRlRfUEFZTUVOVF9QRVJJT0RfRlJPTTogNjQyLFxuICAgIEZUX0lTU1VFUl9JREVOVElGSUNBVElPTl9OVU1CRVI6IDY0MSxcbiAgICBGVF9WQUNDSU5BVElPTl9DRVJUSUZJQ0FURV9JREVOVElGSUVSOiA2NDQsXG4gICAgRlRfRklSU1RfTkFNRTogNjQ1LFxuICAgIEZUX0RBVEVfT0ZfQVJSSVZBTDogNjQ2LFxuICAgIEZUX1NFQ09ORF9OQU1FOiA2NDcsXG4gICAgRlRfVEhJUkRfTkFNRTogNjQ4LFxuICAgIEZUX0ZPVVJUSF9OQU1FOiA2NDksXG4gICAgRlRfTEFTVF9OQU1FOiA2NTAsXG4gICAgRlRfRExDTEFTU0NPREVfUk1fRlJPTTogNjUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX05PVEVTOiA2NTIsXG4gICAgRlRfRExDTEFTU0NPREVfUk1fVE86IDY1MyxcbiAgICBGVF9ETENMQVNTQ09ERV9QV19GUk9NOiA2NTQsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfTk9URVM6IDY1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9QV19UTzogNjU2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VCX0ZST006IDY1NyxcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9OT1RFUzogNjU4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VCX1RPOiA2NTksXG4gICAgRlRfRExDTEFTU0NPREVfRUNfRlJPTTogNjYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX05PVEVTOiA2NjEsXG4gICAgRlRfRExDTEFTU0NPREVfRUNfVE86IDY2MixcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfRlJPTTogNjYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDMV9OT1RFUzogNjY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDMV9UTzogNjY1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0NJVFk6IDY2NixcbiAgICBGVF9ZRUFSX09GX0JJUlRIOiA2NjcsXG4gICAgRlRfWUVBUl9PRl9FWFBJUlk6IDY2OCxcbiAgICBGVF9HUkFOREZBVEhFUl9OQU1FX01BVEVSTkFMOiA2NjksXG4gICAgRlRfRklSU1RfU1VSTkFNRTogNjcwLFxuICAgIEZUX01PTlRIX09GX0JJUlRIOiA2NzEsXG4gICAgRlRfQUREUkVTU19GTE9PUl9OVU1CRVI6IDY3MixcbiAgICBGVF9BRERSRVNTX0VOVFJBTkNFOiA2NzMsXG4gICAgRlRfQUREUkVTU19CTE9DS19OVU1CRVI6IDY3NCxcbiAgICBGVF9BRERSRVNTX1NUUkVFVF9OVU1CRVI6IDY3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVF9UWVBFOiA2NzYsXG4gICAgRlRfQUREUkVTU19DSVRZX1NFQ1RPUjogNjc3LFxuICAgIEZUX0FERFJFU1NfQ09VTlRZX1RZUEU6IDY3OCxcbiAgICBGVF9BRERSRVNTX0NJVFlfVFlQRTogNjc5LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkdfVFlQRTogNjgwLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyT3JpZW50YXRpb24gPSB7XG4gICAgQUxMOiAwLFxuICAgIFBPUlRSQUlUOiAxLFxuICAgIExBTkRTQ0FQRTogMixcbiAgICBMQU5EU0NBUEVfTEVGVDogMyxcbiAgICBMQU5EU0NBUEVfUklHSFQ6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMQ0lEID0ge1xuICAgIExBVElOOiAwLFxuICAgIEFCS0hBWklBTl9DWVJJTExJQzogMTAwMTEsXG4gICAgQUZSSUtBQU5TOiAxMDc4LFxuICAgIEFMQkFOSUFOOiAxMDUyLFxuICAgIEFNSEFSSUM6IDExMTgsXG4gICAgQVJBQklDX0FMR0VSSUE6IDUxMjEsXG4gICAgQVJBQklDX0JBSFJBSU46IDE1MzYxLFxuICAgIEFSQUJJQ19FR1lQVDogMzA3MyxcbiAgICBBUkFCSUNfSVJBUTogMjA0OSxcbiAgICBBUkFCSUNfSk9SREFOOiAxMTI2NSxcbiAgICBBUkFCSUNfS1VXQUlUOiAxMzMxMyxcbiAgICBBUkFCSUNfTEVCQU5PTjogMTIyODksXG4gICAgQVJBQklDX0xJQllBOiA0MDk3LFxuICAgIEFSQUJJQ19NT1JPQ0NPOiA2MTQ1LFxuICAgIEFSQUJJQ19PTUFOOiA4MTkzLFxuICAgIEFSQUJJQ19RQVRBUjogMTYzODUsXG4gICAgQVJBQklDX1NBVURJX0FSQUJJQTogMTAyNSxcbiAgICBBUkFCSUNfU1lSSUE6IDEwMjQxLFxuICAgIEFSQUJJQ19UVU5JU0lBOiA3MTY5LFxuICAgIEFSQUJJQ19VQUU6IDE0MzM3LFxuICAgIEFSQUJJQ19ZRU1FTjogOTIxNyxcbiAgICBBUkFCSUNfQVJNRU5JQU46IDEwNjcsXG4gICAgQVJBQklDX1dPUkxEOiA0MDk2LFxuICAgIEFaRVJJX0NZUklMSUM6IDIwOTIsXG4gICAgQVpFUklfTEFUSU46IDEwNjgsXG4gICAgQkFTUVVFOiAxMDY5LFxuICAgIEJBTktfQ0FSRDogMTAwMDMsXG4gICAgQkFOS19DQVJEX0NWVjI6IDEwMDA0LFxuICAgIEJBTktfQ0FSRF9OQU1FOiAxMDAwMixcbiAgICBCQU5LX0NBUkRfTlVNQkVSOiAxMDAwMCxcbiAgICBCQU5LX0NBUkRfVkFMSURfVEhSVTogMTAwMDEsXG4gICAgQkVMQVJVU0lBTjogMTA1OSxcbiAgICBCRU5HQUxJOiAyMTE3LFxuICAgIEJVTEdBUklBTjogMTAyNixcbiAgICBDQVRBTEFOOiAxMDI3LFxuICAgIENISU5FU0VfSE9OR0tPTkdfU0FSOiAzMDc2LFxuICAgIENISU5FU0VfTUFDQU9fU0FSOiA1MTI0LFxuICAgIENISU5FU0U6IDIwNTIsXG4gICAgQ0hJTkVTRV9TSU5HQVBPUkU6IDQxMDAsXG4gICAgQ0hJTkVTRV9UQUlXQU46IDEwMjgsXG4gICAgQ1JPQVRJQU46IDEwNTAsXG4gICAgQ1pFQ0g6IDEwMjksXG4gICAgREFOSVNIOiAxMDMwLFxuICAgIERJVkVISTogMTEyNSxcbiAgICBEVVRDSF9CRUxHSVVNOiAyMDY3LFxuICAgIERVVENIX05FVEhFUkxBTkRTOiAxMDQzLFxuICAgIEVOR0xJU0hfQVVTVFJBTElBOiAzMDgxLFxuICAgIEVOR0xJU0hfQkVMSVpFOiAxMDI0OSxcbiAgICBFTkdMSVNIX0NBTkFEQTogNDEwNSxcbiAgICBFTkdMSVNIX0NBUlJJQkVBTjogOTIyNSxcbiAgICBFTkdMSVNIX0lSRUxBTkQ6IDYxNTMsXG4gICAgRU5HTElTSF9KQU1BSUNBOiA4MjAxLFxuICAgIEVOR0xJU0hfTkVXX1pFQUxBTkQ6IDUxMjksXG4gICAgRU5HTElTSF9QSElMSVBQSU5FUzogMTMzMjEsXG4gICAgRU5HTElTSF9TT1VUSF9BRlJJQ0E6IDcxNzcsXG4gICAgRU5HTElTSF9UUklOSURBRDogMTEyNzMsXG4gICAgRU5HTElTSF9VSzogMjA1NyxcbiAgICBFTkdMSVNIX1VTOiAxMDMzLFxuICAgIEVOR0xJU0hfWklNQkFCV0U6IDEyMjk3LFxuICAgIEVTVE9OSUFOOiAxMDYxLFxuICAgIEZBRVJPRVNFOiAxMDgwLFxuICAgIEZBUlNJOiAxMDY1LFxuICAgIEZJTk5JU0g6IDEwMzUsXG4gICAgRlJFTkNIX0JFTEdJVU06IDIwNjAsXG4gICAgRlJFTkNIX0NBTkFEQTogMzA4NCxcbiAgICBGUkVOQ0hfRlJBTkNFOiAxMDM2LFxuICAgIEZSRU5DSF9MVVhFTUJPVVJHOiA1MTMyLFxuICAgIEZSRU5DSF9NT05BQ086IDYxNTYsXG4gICAgRlJFTkNIX1NXSVRaRVJMQU5EOiA0MTA4LFxuICAgIEZZUk9fTUFDRURPTklBTjogMTA3MSxcbiAgICBHQUxJQ0lBTjogMTExMCxcbiAgICBHRU9SR0lBTjogMTA3OSxcbiAgICBHRVJNQU5fQVVTVFJJQTogMzA3OSxcbiAgICBHRVJNQU5fR0VSTUFOWTogMTAzMSxcbiAgICBHRVJNQU5fTElFQ0hURU5TVEVJTjogNTEyNyxcbiAgICBHRVJNQU5fTFVYRU1CT1VSRzogNDEwMyxcbiAgICBHRVJNQU5fU1dJVFpFUkxBTkQ6IDIwNTUsXG4gICAgR1JFRUs6IDEwMzIsXG4gICAgR1VKQVJBVEk6IDEwOTUsXG4gICAgSEVCUkVXOiAxMDM3LFxuICAgIEhJTkRJX0lORElBOiAxMDgxLFxuICAgIEhVTkdBUklBTjogMTAzOCxcbiAgICBJQ0VMQU5ESUM6IDEwMzksXG4gICAgSU5ET05FU0lBTjogMTA1NyxcbiAgICBJVEFMSUFOX0lUQUxZOiAxMDQwLFxuICAgIElUQUxJQU5fU1dJVFpFUkxBTkQ6IDIwNjQsXG4gICAgSkFQQU5FU0U6IDEwNDEsXG4gICAgS0FOTkFEQTogMTA5OSxcbiAgICBLQVNITUlSSTogMTEyMCxcbiAgICBLQVpBS0g6IDEwODcsXG4gICAgS09OS0FOSTogMTExMSxcbiAgICBLT1JFQU46IDEwNDIsXG4gICAgS1lSR1laX0NZUklMSUNLOiAxMDg4LFxuICAgIExBTzogMTEwOCxcbiAgICBMQVRWSUFOOiAxMDYyLFxuICAgIExJVEhVQU5JQU46IDEwNjMsXG4gICAgTUFMQVlfTUFMQVlTSUE6IDEwODYsXG4gICAgTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06IDIxMTAsXG4gICAgTUFSQVRISTogMTEwMixcbiAgICBNT05HT0xJQU5fQ1lSSUxJQzogMTEwNCxcbiAgICBOT1JXRUdJQU5fQk9LTUFMOiAxMDQ0LFxuICAgIE5PUldFR0lBTl9OWU9SU0s6IDIwNjgsXG4gICAgUEFTSFRPOiAxMTIzLFxuICAgIFBPTElTSDogMTA0NSxcbiAgICBQT1JUVUdVRVNFX0JSQVpJTDogMTA0NixcbiAgICBQT1JUVUdVRVNFX1BPUlRVR0FMOiAyMDcwLFxuICAgIFBVTkpBQkk6IDEwOTQsXG4gICAgUkhBRVRPX1JPTUFOSUM6IDEwNDcsXG4gICAgUk9NQU5JQU46IDEwNDgsXG4gICAgUlVTU0lBTjogMTA0OSxcbiAgICBTQU5TS1JJVDogMTEwMyxcbiAgICBTRVJCSUFOX0NZUklMSUM6IDMwOTgsXG4gICAgU0VSQklBTl9MQVRJTjogMjA3NCxcbiAgICBTSU5ESEk6IDIxMzcsXG4gICAgU0lOREhJX0lORElBOiAxMTEzLFxuICAgIFNJTkhBTEE6IDExMTUsXG4gICAgU0xPVkFLOiAxMDUxLFxuICAgIFNMT1ZFTklBTjogMTA2MCxcbiAgICBTUEFOSVNIX0FSR0VOVElOQTogMTEyNzQsXG4gICAgU1BBTklTSF9CT0xJVklBOiAxNjM5NCxcbiAgICBTUEFOSVNIX0NISUxFOiAxMzMyMixcbiAgICBTUEFOSUNIX0NPTE9NQklBOiA5MjI2LFxuICAgIFNQQU5JU0hfQ09TVEFfUklDQTogNTEzMCxcbiAgICBTUEFOSVNIX0RPTUlOSUNBTl9SRVBVQkxJQzogNzE3OCxcbiAgICBTUEFOSVNIX0VDVUFET1I6IDEyMjk4LFxuICAgIFNQQU5JU0hfRUxfU0FMVkFET1I6IDE3NDE4LFxuICAgIFNQQU5JU0hfR1VBVEVNQUxBOiA0MTA2LFxuICAgIFNQQU5JU0hfSE9ORFVSQVM6IDE4NDQyLFxuICAgIFNQQU5JU0hfTUVYSUNPOiAyMDU4LFxuICAgIFNQQU5JU0hfTklDQVJBR1VBOiAxOTQ2NixcbiAgICBTUEFOSVNIX1BBTkFNQTogNjE1NCxcbiAgICBTUEFOSVNIX1BBUkFHVUFZOiAxNTM3MCxcbiAgICBTUEFOSVNIX1BFUlU6IDEwMjUwLFxuICAgIFNQQU5JU0hfUFVFUlRPX1JJQ086IDIwNDkwLFxuICAgIFNQQU5JU0hfVFJBRElUSU9OQUxfU09SVDogMTAzNCxcbiAgICBTUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDogMzA4MixcbiAgICBTUEFOSVNIX1VSVUdVQVk6IDE0MzQ2LFxuICAgIFNQQU5JU0hfVkVORVpVRUxBOiA4MjAyLFxuICAgIFNXQUhJTEk6IDEwODksXG4gICAgU1dFRElTSDogMTA1MyxcbiAgICBTV0VESVNIX0ZJTkxBTkQ6IDIwNzcsXG4gICAgU1lSSUFDOiAxMTE0LFxuICAgIFRBTUlMOiAxMDk3LFxuICAgIFRBVEFSOiAxMDkyLFxuICAgIFRFTFVHVTogMTA5OCxcbiAgICBUSEFJX1RIQUlMQU5EOiAxMDU0LFxuICAgIFRVUktJU0g6IDEwNTUsXG4gICAgVEFKSUtfQ1lSSUxMSUM6IDEwNjQsXG4gICAgVFVSS01FTjogMTA5MCxcbiAgICBVS1JBSU5JQU46IDEwNTgsXG4gICAgVVJEVTogMTA1NixcbiAgICBVWkJFS19DWVJJTElDOiAyMTE1LFxuICAgIFVaQkVLX0xBVElOOiAxMDkxLFxuICAgIFZJRVROQU1FU0U6IDEwNjYsXG4gICAgQ1RDX1NJTVBMSUZJRUQ6IDUwMDAxLFxuICAgIENUQ19UUkFESVRJT05BTDogNTAwMDIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJGcmFtZSA9IHtcbiAgICBNQVg6IFwibWF4XCIsXG4gICAgU0NFTkFSSU9fREVGQVVMVDogXCJpZDFcIixcbiAgICBOT05FOiBcIm5vbmVcIixcbiAgICBET0NVTUVOVDogXCJkb2N1bWVudFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fTGlnaHRzID0ge1xuICAgIE5PTkU6IDAsXG4gICAgUlBSTV9MSUdIVF9VVjogMTI4LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTDogNixcbiAgICBSUFJNX0xJR0hUX0lSOiAxNjc3NzIxNixcbiAgICBSUFJNX0xpZ2h0X0lSX1RPUDogOCxcbiAgICBSUFJNX0xpZ2h0X0lSX1NJREU6IDE2LFxuICAgIFJQUk1fTGlnaHRfSVJfRnVsbDogKDggfCAxNiksXG4gICAgUlBSTV9MSUdIVF9PVkQ6IDY3MTA4ODY0LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTF9PVkQ6ICg2IHwgNjcxMDg4NjQpLFxufVxuXG5leHBvcnQgY29uc3QgTGluZUNhcCA9IHtcbiAgICBCdXR0OiAwLFxuICAgIFJvdW5kOiAxLFxuICAgIFNxdWFyZTogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrID0ge1xuICAgIFBvcnRyYWl0OiAwLFxuICAgIExhbmRzY2FwZUxlZnQ6IDEsXG4gICAgTGFuZHNjYXBlUmlnaHQ6IDIsXG4gICAgUG9ydHJhaXRVcHNpZGVEb3duOiAzLFxuICAgIExhbmRzY2FwZTogNCxcbiAgICBBbGw6IDUsXG4gICAgQWxsQnV0VXBzaWRlRG93bjogNixcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQgPSB7XG4gICAgTG93OiAwLFxuICAgIE1lZGl1bTogMSxcbiAgICBIaWdoOiAyLFxuICAgIFBob3RvOiAzLFxuICAgIElucHV0UHJpb3JpdHk6IDQsXG4gICAgUUhEOTYweDU0MDogNSxcbiAgICBIZDEyODB4NzIwOiA2LFxuICAgIEhkMTkyMHgxMDgwOiA3LFxuICAgIEhkNEszODQweDIxNjA6IDgsXG4gICAgSUZyYW1lOTYweDU0MDogOSxcbiAgICBJRnJhbWUxMjgweDcyMDogMTAsXG4gICAgUXZnYTMyMHgyNDA6IDExLFxuICAgIFZnYTY0MHg0ODA6IDEyLFxuICAgIENpZjM1MngyODg6IDEzLFxufVxuXG5leHBvcnQgY29uc3QgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24gPSB7XG4gICAgRnJvbnQ6IDAsXG4gICAgQmFjazogMSxcbiAgICBVbnNwZWNpZmllZDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFNjYWxlVG9GaWxsOiAwLFxuICAgIFNjYWxlQXNwZWN0Rml0OiAxLFxuICAgIFNjYWxlQXNwZWN0RmlsbDogMixcbiAgICBSZWRyYXc6IDMsXG4gICAgQ2VudGVyOiA0LFxuICAgIFRvcDogNSxcbiAgICBCb3R0b206IDYsXG4gICAgTGVmdDogNyxcbiAgICBSaWdodDogOCxcbiAgICBUb3BMZWZ0OiA5LFxuICAgIFRvcFJpZ2h0OiAxMCxcbiAgICBCb3R0b21MZWZ0OiAxMSxcbiAgICBCb3R0b21SaWdodDogMTIsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgRm9udFN0eWxlLFxuICAgZVJQUk1fQXV0aGVudGljaXR5LFxuICAgZVJGSURfRXJyb3JDb2RlcyxcbiAgIGVMRFNfUGFyc2luZ0Vycm9yQ29kZXMsXG4gICBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUsXG4gICBSR0xNZWFzdXJlU3lzdGVtLFxuICAgZVJQUk1fUmVzdWx0VHlwZSxcbiAgIENhbWVyYVR5cGVzLFxuICAgRnJhbWVTaGFwZVR5cGUsXG4gICBlUkZJRF9CYXVkUmF0ZSxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgUEtEUmVzb3VyY2VUeXBlLFxuICAgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlLFxuICAgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzLFxuICAgU2NlbmFyaW9JZGVudGlmaWVyLFxuICAgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMsXG4gICBlUkZJRF9QYXNzd29yZF9UeXBlLFxuICAgQmFyY29kZVJlc3VsdCxcbiAgIGVTaWduTWFuYWdlbWVudEFjdGlvbixcbiAgIGVDaGVja0RpYWdub3NlLFxuICAgUkZJRERlbGVnYXRlLFxuICAgVGV4dFByb2Nlc3NpbmcsXG4gICBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMsXG4gICBEb2NGb3JtYXQsXG4gICBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBNUlpGb3JtYXQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBPbmxpbmVNb2RlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGRpRG9jVHlwZSxcbiAgIEhvbG9BbmltYXRpb25UeXBlLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgSW1hZ2VGb3JtYXQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIFJlZ0RldmljZUNvbmZpZ1R5cGUsXG4gICBDYW1lcmFNb2RlLFxuICAgQ2FwdHVyZU1vZGUsXG4gICBlQ2hlY2tSZXN1bHQsXG4gICBlUkZJRF9UZXJtaW5hbFR5cGUsXG4gICBlUkZJRF9EYXRhRmlsZV9UeXBlLFxuICAgZVZpc3VhbEZpZWxkVHlwZSxcbiAgIERvY1JlYWRlck9yaWVudGF0aW9uLFxuICAgTENJRCxcbiAgIERvY1JlYWRlckZyYW1lLFxuICAgZVJQUk1fTGlnaHRzLFxuICAgTGluZUNhcCxcbiAgIFVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrLFxuICAgQVZDYXB0dXJlU2Vzc2lvblByZXNldCxcbiAgIEFWQ2FwdHVyZURldmljZVBvc2l0aW9uLFxuICAgVUlWaWV3Q29udGVudE1vZGUsXG59XG5cbi8qKlxuICogQG5hbWUgRG9jdW1lbnRSZWFkZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHdyYXBwZXIgY29yZG92YSBwbHVnaW4gZm9yIFJlZ3VsYWBzIERvY3VtZW50IFJlYWRlci5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERvY3VtZW50UmVhZGVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kb2N1bWVudC1yZWFkZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIERvY3VtZW50UmVhZGVyOiBEb2N1bWVudFJlYWRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuRG9jdW1lbnRSZWFkZXIucHJlcGFyZURhdGFiYXNlKFwiRnVsbFwiKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gKiAgICAgICAgaWYgKG1lc3NhZ2UgPT0gXCJkYXRhYmFzZSBwcmVwYXJlZFwiKSB7XG4gKiAgICAgICAgICB0aGlzLkRvY3VtZW50UmVhZGVyLmluaXRpYWxpemVSZWFkZXIobGljZW5zZSkudGhlbihtID0+IG9uSW5pdGlhbGl6ZWQoKSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAqICAgICAgICB9XG4gKiAgICAgIH0pXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdEb2N1bWVudFJlYWRlcicsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG9jdW1lbnQtcmVhZGVyLWFwaScsXG4gICAgcGx1Z2luUmVmOiAnRG9jdW1lbnRSZWFkZXJQbHVnaW4uRG9jdW1lbnRSZWFkZXInLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0RvY3VtZW50UmVhZGVyLUNvcmRvdmEtUGx1Z2luJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGx5IG1hZGUgZm9yIGNhcGFjaXRvciBhcyBpdCBoYXMgbm8gY29udmVuaWVudCB3YXkgdG8gcmVhZCBhc3NldHNcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBpbml0aWFsaXplIGRvY3VtZW50IHJlYWRlciB3aXRob3V0IHJlYWRpbmcgbGljZW5zZSB5b3Vyc2VsZi5cbiAgICAgKiAgTGljZW5zZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVhZCBmcm9tXG4gICAgICogIEFuZHJvaWQ6IFwiYW5kcm9pZC9hcHAvc3JjL21haW4vYXNzZXRzL3JlZ3VsYS5saWNlbnNlXCJcbiAgICAgKiAgaU9TOiBcImlvcy9BcHAvQXBwL3JlZ3VsYS5saWNlbnNlXCJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlckF1dG9tYXRpY2FsbHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBDaGVja3MgaWYgYWxsIHJlcXVpcmVkIGJsdWV0b290aCBwZXJtaXNzaW9ucyBhcmUgZ3JhbnRlZCBhbmQgcmVxdWVzdHMgdGhlbSBpZiBuZWVkZWQoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNCbGVQZXJtaXNzaW9uc0dyYW50ZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBTZWFyY2hlcyBmb3IgYmxlIGRldmljZXMoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRCbHVldG9vdGhTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZXMgZG9jdW1lbnQgcmVhZGVyIHdpdGggbGljZW5zZSBmcm9tIGNvbm5lY3RlZCBEZXZpY2U3MzEwKEFuZHJvaWQgb25seSwgaWdub3JlZCBvbiBpT1MpXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXJCbGVEZXZpY2VDb25maWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICByZXR1cm5zIHRhZyBwcm9wZXJ0eSBvZiBEb2N1bWVudFJlYWRlciBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQVBJIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0QVBJVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEF2YWlsYWJsZVNjZW5hcmlvcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc1JGSURBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSBtb2RlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENvcmVNb2RlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIENvcmUgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDb3JlVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBleHBvcnQgZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YWJhc2UgSURcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VJRCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgdGhlIFNESyBpcyByZWFkeSBmb3IgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY3VtZW50UmVhZGVySXNSZWFkeSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBEb2N1bWVudCBSZWFkZXIgc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY3VtZW50UmVhZGVyU3RhdHVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIG51bWJlciBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgY291bnRyaWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlQ291bnRyaWVzTnVtYmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIG51bWJlciBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRG9jdW1lbnRzTnVtYmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIHNlbGVjdGVkIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNlbGVjdGVkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgcGF0aCB0byB0aGUgZm9sZGVyIG9mIHRoZSBjdXJyZW50IHNlc3Npb24uIEJlZm9yZSB1c2luZyB0aGlzLCBlbmFibGUgbG9nIHNhdmluZy4gRWFjaCBuZXcgc2Vzc2lvbiBwcm92aWRlcyBhIGRpZmZlcmVudCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFNlc3Npb25Mb2dGb2xkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZURlc2NyaXB0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1BhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBvcGVuIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBzdGFydCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0UkZJRFJlYWRlcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFJGSURSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgYWZ0ZXIgc3RvcCByZWFkaW5nIFJGSUQgb24gaU9TXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcldpdGhFcnJvck1lc3NhZ2UobWVzc2FnZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xvc2UgY2FtZXJhIHByZXZpZXcgYW5kIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUV4cGlyeURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhIGxpc3Qgb2YgY291bnRyeSBpZGVudGlmaWVycyB0aGF0IGFyZSBkZWZpbmVkIGZvciBwcm9jZXNzaW5nIGluIHRoZSBsaWNlbnNlLiBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGFyZSBubyByZXN0cmljdGlvbnMgZm9yIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbGljZW5zZUlzUmZpZEF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENhbWVyYVNlc3Npb25Jc1BhdXNlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlc2V0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbGVhciBQS0QgY2VydGlmaWNhdGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFJGSUQgZGVsZWdhdGUgb24gaU9TIHRvIGVpdGhlciBudWxsLFxuICAgICAqICBkZWxlZ2F0ZSB3aXRoIG9uUmVxdWVzdFBBQ2VydGlmaWNhdGVzIGNhbGxiYWNrIG9yIHdpdGhvdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBkZWxlZ2F0ZSB1c2UgZW51bSBSRklERGVsZWdhdGVcbiAgICAgKiAgTlVMTCA9IDBcbiAgICAgKiAgTk9fUEEgPSAxXG4gICAgICogIEZVTEwgPSAyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkRGVsZWdhdGUoZGVsZWdhdGU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBDb3JlIGxvZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9nc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RW5hYmxlQ29yZUxvZ3MobG9nczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUEtEQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBJZiBzZXQsIHRoZSBjYW1lcmEgc2Vzc2lvbiB3aWxsIGJlIHBhdXNlZCBhcyBzb29uIGFzIHRoZSByZXN1bHQgaXMgcmVjZWl2ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDYW1lcmFTZXNzaW9uSXNQYXVzZWQocGF1c2VkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgRG9jdW1lbnRSZWFkZXIudGFnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIHRhZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBjaGVja3MgZm9yIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlSWQgaWQgb2YgdGhlIGRhdGFiYXNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjaGVja0RhdGFiYXNlVXBkYXRlKGRhdGFiYXNlSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFNjYW5uZXJDb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2Nhbihjb25maWc6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgUmVjb2duaXplQ29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZShjb25maWc6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VzKGltYWdlczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2l0aCB0aGUgZGVzaXJlZCBjYW1lcmEgSUQgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJRFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyV2l0aENhbWVyYUlEKGNhbWVyYUlEOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCBmb3IgZ2V0dGluZyBhbHdheXMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBydW5BdXRvVXBkYXRlKGRhdGFiYXNlVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNjZW5hcmlvIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmUge25hbWU/OiB2YWx1ZTEsbmFtZT86IHZhbHVlMiwgLi4ufVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIE9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgICAgXCJsaWNlbnNlXCI6IFwibGljZW5zZSBiYXNlNjQgc3RyaW5nKG5lY2Vzc2FyeSlcIlxuICAgICAqICAgICAgXCJjdXN0b21EYlwiOiBcImN1c3RvbSBkYXRhYmFzZSBiYXNlNjQgc3RyaW5nKEFuZHJvaWQgb25seSwgaWdub3JlZCBvbiBpT1MpXCJcbiAgICAgKiAgICAgIFwiZGF0YWJhc2VQYXRoXCI6IFwiZGF0YWJhc2UgcGF0aChpT1Mgb25seSwgaWdub3JlZCBvbiBhbmRyb2lkKVwiXG4gICAgICogICAgICBcImxpY2Vuc2VVcGRhdGVcIjogdHJ1ZVxuICAgICAqICAgICAgXCJkZWxheWVkTk5Mb2FkXCI6IGZhbHNlXG4gICAgICogICAgICBcImJsYWNrTGlzdFwiOiB7fSAvLyBBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZG93bmxvYWQgYSBkYXRhYmFzZSBmcm9tIHRoZSBSZWd1bGEncyBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZVR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcHJlcGFyZURhdGFiYXNlKGRhdGFiYXNlVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZShpbWFnZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIHVzaW5nIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ynl0ZVtdfSBkYXRhIEltYWdlYHMgYnl0ZVtdIHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplRGF0YShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmZpZFNlc3Npb25TdGF0dXMoc3RhdHVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFBBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAgICogIGJpbmFyeURhdGEgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogIHJlc291cmNlVHlwZSAtIG51bWJlclxuICAgICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVQQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFDZXJ0aWZpY2F0ZXMgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBUQVNpZ25hdHVyZSB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtieXRlW119IHNpZ25hdHVyZSBieXRlIGFycmF5XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlVEFTaWduYXR1cmUoc2lnbmF0dXJlOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBwYXJzZSByZXN1bHRzIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIgd2hlbiB1c2luZyBhbiBlbmNyeXB0ZWQgbGljZW5zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGpzb24gcmVzdWx0cyB0byBwYXJzZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcGFyc2VDb3JlUmVzdWx0cyhqc29uOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFRoZSBtZXRob2QgY2FsbCBzZXRzIHRoZSBnaXZlbiBUQ0NQYXJhbXMgdG8gdGhlIFJGSUQgc2Vzc2lvbi4gVGhlIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIHRvIGJlIHNldCBiZWZvcmUgc3RhcnRpbmcgUkZJRCBzZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBPYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICAgIFwic2VydmljZVVybFRBXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqICAgICAgXCJzZXJ2aWNlVXJsUEFcIjogXCJzb21lIHN0cmluZ1wiXG4gICAgICogICAgICBcInBmeENlcnRVcmxcIjogXCJzb21lIHN0cmluZ1wiXG4gICAgICogICAgICBcInBmeENlcnRcIjogXCJiYXNlNjQgZW5jb2RlZCBiaW5hcnlcIlxuICAgICAqICAgICAgXCJwZnhQYXNzUGhyYXNlXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VENDUGFyYW1zKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIHdpdGggb3B0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgICAqICAgIHByb2Nlc3NQYXJhbXM/OiB7bmFtZT86IHZhbHVlNSwgbmFtZT86IHZhbHVlNiwgLi4ufX1cbiAgICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgICAqICB2YWx1ZSAtIGFueVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoaW1hZ2U6IGFueSwgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGEgc3RyZWFtIG9mIGZyYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ5dGVTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXRQYXJhbX0gcGFyYW1zIEltYWdlIGlucHV0IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVWaWRlb0ZyYW1lKGJ5dGVTdHJpbmc6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCBhbmQgb3B0aW9ucyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlEXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgICAqICAgIHByb2Nlc3NQYXJhbXM/OiB7bmFtZT86IHZhbHVlNSwgbmFtZT86IHZhbHVlNiwgLi4ufX1cbiAgICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgICAqICB2YWx1ZSAtIGFueVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyV2l0aENhbWVyYUlEQW5kT3B0cyhjYW1lcmFJRDogYW55LCBvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogYW55LCBtb2RlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzIHVzaW5nIEltYWdlSW5wdXREYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXREYXRhW119IGltYWdlcyBhcnJheSBvZiBJbWFnZUlucHV0RGF0YSBvYmplY3RzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlY29nbml6ZUltYWdlc1dpdGhJbWFnZUlucHV0cyhpbWFnZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZUxjaWQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZVNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlU291cmNlT3JpZ2luYWwocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIG9yaWdpbmFsOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZUxjaWRTb3VyY2VPcmlnaW5hbChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBvcmlnaW5hbDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkQnlUeXBlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZEJ5VHlwZUxjaWQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEJ5VHlwZVNvdXJjZVBhZ2VJbmRleChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEJ5VHlwZVNvdXJjZVBhZ2VJbmRleExpZ2h0KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlciwgbGlnaHQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGUocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlUGFnZUluZGV4KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGVTb3VyY2VQYWdlSW5kZXhMaWdodChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIsIGxpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGNvbnRhaW5lcnMocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCByZXN1bHRUeXBlOiBudW1iZXJbXSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZW5jcnlwdGVkQ29udGFpbmVycyhyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfX0iXX0=