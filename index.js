var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
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
var DetailsAge = /** @class */ (function () {
    function DetailsAge() {
    }
    DetailsAge.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetailsAge;
        result.threshold = jsonObject["threshold"];
        result.overThreshold = jsonObject["overThreshold"];
        result.over18 = jsonObject["over18"];
        result.over21 = jsonObject["over21"];
        result.over25 = jsonObject["over25"];
        result.over65 = jsonObject["over65"];
        return result;
    };
    return DetailsAge;
}());
export { DetailsAge };
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
        result.mDL = jsonObject["mDL"];
        result.age = jsonObject["age"];
        result.captureProcessIntegrity = jsonObject["captureProcessIntegrity"];
        result.detailsAge = DetailsAge.fromJson(jsonObject["detailsAge"]);
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
var DocFeature = /** @class */ (function () {
    function DocFeature() {
    }
    DocFeature.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocFeature;
        result.type = jsonObject["type"];
        result.data = BytesData.fromJson(jsonObject["data"]);
        return result;
    };
    return DocFeature;
}());
export { DocFeature };
var VDSData = /** @class */ (function () {
    function VDSData() {
    }
    VDSData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new VDSData;
        result.type = jsonObject["type"];
        result.docType = jsonObject["docType"];
        result.featureRef = jsonObject["featureRef"];
        result.version = jsonObject["version"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.docIssueDate = jsonObject["docIssueDate"];
        result.signature = BytesData.fromJson(jsonObject["signature"]);
        result.signatureDate = jsonObject["signatureDate"];
        result.signer = jsonObject["signer"];
        result.certificate = jsonObject["certificate"];
        result.certificateChain = [];
        if (jsonObject["certificateChain"] != null) {
            for (var i in jsonObject["certificateChain"]) {
                var item = CertificateChain.fromJson(jsonObject["certificateChain"][i]);
                if (item != undefined)
                    result.certificateChain.push(item);
            }
        }
        result.docFeatures = [];
        if (jsonObject["docFeatures"] != null) {
            for (var i in jsonObject["docFeatures"]) {
                var item = DocFeature.fromJson(jsonObject["docFeatures"][i]);
                if (item != undefined)
                    result.docFeatures.push(item);
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
    return VDSData;
}());
export { VDSData };
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
        result.dataList = [];
        if (jsonObject["dataList"] != null) {
            for (var i in jsonObject["dataList"]) {
                result.dataList.push(jsonObject["dataList"][i]);
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
        result.bsiTr03135Results = jsonObject["bsiTr03135Results"];
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
        result.vdsData = VDSData.fromJson(jsonObject["vdsData"]);
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
        result.homeIndicatorAutoHide = jsonObject["homeIndicatorAutoHide"];
        result.hideStatusBar = jsonObject["hideStatusBar"];
        result.showCaptureButtonDelayFromDetect = jsonObject["showCaptureButtonDelayFromDetect"];
        result.showCaptureButtonDelayFromStart = jsonObject["showCaptureButtonDelayFromStart"];
        result.rfidTimeout = jsonObject["rfidTimeout"];
        result.forcePagesCount = jsonObject["forcePagesCount"];
        result.orientation = jsonObject["orientation"];
        result.captureMode = jsonObject["captureMode"];
        result.cameraMode = jsonObject["cameraMode"];
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result.mdlTimeout = jsonObject["mdlTimeout"];
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
var OcclusionCheckParams = /** @class */ (function () {
    function OcclusionCheckParams() {
    }
    OcclusionCheckParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new OcclusionCheckParams;
        result.maxOcclusionPart = jsonObject["maxOcclusionPart"];
        return result;
    };
    return OcclusionCheckParams;
}());
export { OcclusionCheckParams };
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
        result.occlusionCheckParams = OcclusionCheckParams.fromJson(jsonObject["occlusionCheckParams"]);
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
        result.livenessTransactionId = jsonObject["livenessTransactionId"];
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
        result.mdlVerification = jsonObject["mdlVerification"];
        result.timeoutConnection = jsonObject["timeoutConnection"];
        return result;
    };
    return BackendProcessingConfig;
}());
export { BackendProcessingConfig };
var Bsi = /** @class */ (function () {
    function Bsi() {
    }
    Bsi.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Bsi;
        result.generateResult = jsonObject["generateResult"];
        return result;
    };
    return Bsi;
}());
export { Bsi };
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
        result.checkBarcodeBackground = jsonObject["checkBarcodeBackground"];
        return result;
    };
    return LivenessParams;
}());
export { LivenessParams };
var AuthenticityPropertiesParams = /** @class */ (function () {
    function AuthenticityPropertiesParams() {
    }
    AuthenticityPropertiesParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new AuthenticityPropertiesParams;
        result.checkHoldersSignature = jsonObject["checkHoldersSignature"];
        return result;
    };
    return AuthenticityPropertiesParams;
}());
export { AuthenticityPropertiesParams };
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
        result.checkProperties = jsonObject["checkProperties"];
        result.propertiesParams = AuthenticityPropertiesParams.fromJson(jsonObject["propertiesParams"]);
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
        result.checkCaptureProcessIntegrity = jsonObject["checkCaptureProcessIntegrity"];
        result.strictExpiryDate = jsonObject["strictExpiryDate"];
        result.debugSaveBinarySession = jsonObject["debugSaveBinarySession"];
        result.checkVDS = jsonObject["checkVDS"];
        result.strictAgeCheck = jsonObject["strictAgeCheck"];
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
        result.fieldTypesIgnoreFilter = [];
        if (jsonObject["fieldTypesIgnoreFilter"] != null) {
            for (var i in jsonObject["fieldTypesIgnoreFilter"]) {
                result.fieldTypesIgnoreFilter.push(jsonObject["fieldTypesIgnoreFilter"][i]);
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
        result.bsiTr03135 = Bsi.fromJson(jsonObject["bsiTr03135"]);
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
        result.nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result.nextPageIdCardBack = jsonObject["nextPageIdCardBack"];
        result.nextPagePassportShift = jsonObject["nextPagePassportShift"];
        result.nextPagePassportFlip = jsonObject["nextPagePassportFlip"];
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
        result.helpAnimation = jsonObject["helpAnimation"];
        result.livenessAnimation = jsonObject["livenessAnimation"];
        result.borderBackground = jsonObject["borderBackground"];
        result.torchButtonOn = jsonObject["torchButtonOn"];
        result.torchButtonOff = jsonObject["torchButtonOff"];
        result.captureButton = jsonObject["captureButton"];
        result.switchButton = jsonObject["switchButton"];
        result.closeButton = jsonObject["closeButton"];
        result.multipageButton = jsonObject["multipageButton"];
        result.rfidProcessingScreenFailureImage = jsonObject["rfidProcessingScreenFailureImage"];
        result.rfidEnableNfcImage = jsonObject["rfidEnableNfcImage"];
        result.rfidDisableNfcImage = jsonObject["rfidDisableNfcImage"];
        result.mdlProcessingScreenFailureImage = jsonObject["mdlProcessingScreenFailureImage"];
        result.mdlEnableNfcImage = jsonObject["mdlEnableNfcImage"];
        result.mdlDisableNfcImage = jsonObject["mdlDisableNfcImage"];
        result.nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result.nextPageIdCardBack = jsonObject["nextPageIdCardBack"];
        result.nextPagePassportShift = jsonObject["nextPagePassportShift"];
        result.nextPagePassportFlipStart = jsonObject["nextPagePassportFlipStart"];
        result.nextPagePassportFlipClean = jsonObject["nextPagePassportFlipClean"];
        result.nextPagePassportFlipTop = jsonObject["nextPagePassportFlipTop"];
        result.nextPagePassportFlipBottom = jsonObject["nextPagePassportFlipBottom"];
        return result;
    };
    return CustomizationImages;
}());
export { CustomizationImages };
var CustomizationTimings = /** @class */ (function () {
    function CustomizationTimings() {
    }
    CustomizationTimings.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationTimings;
        result.nextPageIdCardStartDelay = jsonObject["nextPageIdCardStartDelay"];
        result.nextPageIdCardEndDelay = jsonObject["nextPageIdCardEndDelay"];
        result.nextPagePassportShiftStartDelay = jsonObject["nextPagePassportShiftStartDelay"];
        result.nextPagePassportShiftEndDelay = jsonObject["nextPagePassportShiftEndDelay"];
        result.nextPagePassportFlipStartDelay = jsonObject["nextPagePassportFlipStartDelay"];
        result.nextPagePassportFlipEndDelay = jsonObject["nextPagePassportFlipEndDelay"];
        return result;
    };
    return CustomizationTimings;
}());
export { CustomizationTimings };
var CustomizationContentModes = /** @class */ (function () {
    function CustomizationContentModes() {
    }
    CustomizationContentModes.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationContentModes;
        result.nextPageIdCardFront = jsonObject["nextPageIdCardFront"];
        result.nextPageIdCardBack = jsonObject["nextPageIdCardBack"];
        return result;
    };
    return CustomizationContentModes;
}());
export { CustomizationContentModes };
var CustomizationMatrices = /** @class */ (function () {
    function CustomizationMatrices() {
    }
    CustomizationMatrices.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CustomizationMatrices;
        result.nextPageIdCardFront = [];
        if (jsonObject["nextPageIdCardFront"] != null) {
            for (var i in jsonObject["nextPageIdCardFront"]) {
                result.nextPageIdCardFront.push(jsonObject["nextPageIdCardFront"][i]);
            }
        }
        result.nextPageIdCardBack = [];
        if (jsonObject["nextPageIdCardBack"] != null) {
            for (var i in jsonObject["nextPageIdCardBack"]) {
                result.nextPageIdCardBack.push(jsonObject["nextPageIdCardBack"][i]);
            }
        }
        return result;
    };
    return CustomizationMatrices;
}());
export { CustomizationMatrices };
var Customization = /** @class */ (function () {
    function Customization() {
    }
    Customization.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Customization;
        result.theme = jsonObject["theme"];
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
        result.multipageButtonPositionMultiplier = jsonObject["multipageButtonPositionMultiplier"];
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
        result.timings = CustomizationTimings.fromJson(jsonObject["timings"]);
        result.contentModes = CustomizationContentModes.fromJson(jsonObject["contentModes"]);
        result.matrices = CustomizationMatrices.fromJson(jsonObject["matrices"]);
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
        result.readUser = jsonObject["readUser"];
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
        result.defaultUserPIN = jsonObject["defaultUserPIN"];
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
var DeviceEngagement = /** @class */ (function () {
    function DeviceEngagement() {
    }
    DeviceEngagement.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DeviceEngagement;
        result.deviceRetrievalMethods = [];
        if (jsonObject["deviceRetrievalMethods"] != null) {
            for (var i in jsonObject["deviceRetrievalMethods"]) {
                var item = DeviceRetrievalMethod.fromJson(jsonObject["deviceRetrievalMethods"][i]);
                if (item != undefined)
                    result.deviceRetrievalMethods.push(item);
            }
        }
        return result;
    };
    return DeviceEngagement;
}());
export { DeviceEngagement };
var DeviceEngagementCompletion = /** @class */ (function () {
    function DeviceEngagementCompletion() {
    }
    DeviceEngagementCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DeviceEngagementCompletion;
        result.deviceEngagement = DeviceEngagement.fromJson(jsonObject["deviceEngagement"]);
        result.error = RegulaException.fromJson(jsonObject["error"]);
        return result;
    };
    return DeviceEngagementCompletion;
}());
export { DeviceEngagementCompletion };
var DeviceRetrievalMethod = /** @class */ (function () {
    function DeviceRetrievalMethod() {
    }
    DeviceRetrievalMethod.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DeviceRetrievalMethod;
        result.type = jsonObject["type"];
        result.version = jsonObject["version"];
        result.cmdMaxLength = jsonObject["cmdMaxLength"];
        result.respMaxLength = jsonObject["respMaxLength"];
        result.clientModeSupport = jsonObject["clientModeSupport"];
        result.clientModeUUID = jsonObject["clientModeUUID"];
        result.serverModeSupport = jsonObject["serverModeSupport"];
        result.serverModeUUID = jsonObject["serverModeUUID"];
        return result;
    };
    return DeviceRetrievalMethod;
}());
export { DeviceRetrievalMethod };
var DataRetrieval = /** @class */ (function () {
    function DataRetrieval() {
    }
    DataRetrieval.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DataRetrieval;
        result.deviceRetrieval = jsonObject["deviceRetrieval"];
        result.docRequestPreset = jsonObject["docRequestPreset"];
        result.intentToRetain = jsonObject["intentToRetain"];
        result.requests = [];
        if (jsonObject["requests"] != null) {
            for (var i in jsonObject["requests"]) {
                result.requests.push(jsonObject["requests"][i]);
            }
        }
        return result;
    };
    return DataRetrieval;
}());
export { DataRetrieval };
var DocumentRequestMDL = /** @class */ (function () {
    function DocumentRequestMDL() {
    }
    DocumentRequestMDL.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentRequestMDL;
        result.docType = jsonObject["docType"];
        result.namespaces = [];
        if (jsonObject["namespaces"] != null) {
            for (var i in jsonObject["namespaces"]) {
                var item = NameSpaceMDL.fromJson(jsonObject["namespaces"][i]);
                if (item != undefined)
                    result.namespaces.push(item);
            }
        }
        return result;
    };
    return DocumentRequestMDL;
}());
export { DocumentRequestMDL };
var NameSpaceMDL = /** @class */ (function () {
    function NameSpaceMDL() {
    }
    NameSpaceMDL.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new NameSpaceMDL;
        result.name = jsonObject["name"];
        result.map = jsonObject["map"];
        return result;
    };
    return NameSpaceMDL;
}());
export { NameSpaceMDL };
var DocumentRequest18013MDL = /** @class */ (function () {
    function DocumentRequest18013MDL() {
    }
    DocumentRequest18013MDL.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentRequest18013MDL;
        result.docType = jsonObject["docType"];
        result.namespaces = [];
        if (jsonObject["namespaces"] != null) {
            for (var i in jsonObject["namespaces"]) {
                var item = NameSpaceMDL.fromJson(jsonObject["namespaces"][i]);
                if (item != undefined)
                    result.namespaces.push(item);
            }
        }
        result.familyName = jsonObject["familyName"];
        result.givenName = jsonObject["givenName"];
        result.birthDate = jsonObject["birthDate"];
        result.issueDate = jsonObject["issueDate"];
        result.expiryDate = jsonObject["expiryDate"];
        result.issuingCountry = jsonObject["issuingCountry"];
        result.issuingAuthority = jsonObject["issuingAuthority"];
        result.documentNumber = jsonObject["documentNumber"];
        result.portrait = jsonObject["portrait"];
        result.drivingPrivileges = jsonObject["drivingPrivileges"];
        result.unDistinguishingSign = jsonObject["unDistinguishingSign"];
        result.administrativeNumber = jsonObject["administrativeNumber"];
        result.sex = jsonObject["sex"];
        result.height = jsonObject["height"];
        result.weight = jsonObject["weight"];
        result.eyeColour = jsonObject["eyeColour"];
        result.hairColour = jsonObject["hairColour"];
        result.birthPlace = jsonObject["birthPlace"];
        result.residentAddress = jsonObject["residentAddress"];
        result.portraitCaptureDate = jsonObject["portraitCaptureDate"];
        result.ageInYears = jsonObject["ageInYears"];
        result.ageBirthYear = jsonObject["ageBirthYear"];
        result.ageOver18 = jsonObject["ageOver18"];
        result.issuingJurisdiction = jsonObject["issuingJurisdiction"];
        result.nationality = jsonObject["nationality"];
        result.residentCity = jsonObject["residentCity"];
        result.residentState = jsonObject["residentState"];
        result.residentPostalCode = jsonObject["residentPostalCode"];
        result.residentCountry = jsonObject["residentCountry"];
        result.biometricTemplateFace = jsonObject["biometricTemplateFace"];
        result.biometricTemplateIris = jsonObject["biometricTemplateIris"];
        result.biometricTemplateFinger = jsonObject["biometricTemplateFinger"];
        result.biometricTemplateSignatureSign = jsonObject["biometricTemplateSignatureSign"];
        result.familyNameNationalCharacter = jsonObject["familyNameNationalCharacter"];
        result.givenNameNationalCharacter = jsonObject["givenNameNationalCharacter"];
        result.signatureUsualMark = jsonObject["signatureUsualMark"];
        return result;
    };
    return DocumentRequest18013MDL;
}());
export { DocumentRequest18013MDL };
var FinalizeConfig = /** @class */ (function () {
    function FinalizeConfig() {
    }
    FinalizeConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FinalizeConfig;
        result.rawImages = jsonObject["rawImages"];
        result.video = jsonObject["video"];
        result.rfidSession = jsonObject["rfidSession"];
        result.mdlSession = jsonObject["mdlSession"];
        return result;
    };
    return FinalizeConfig;
}());
export { FinalizeConfig };
var FinalizeCompletion = /** @class */ (function () {
    function FinalizeCompletion() {
    }
    FinalizeCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FinalizeCompletion;
        result.action = jsonObject["action"];
        result.info = TransactionInfo.fromJson(jsonObject["info"]);
        result.error = RegulaException.fromJson(jsonObject["error"]);
        return result;
    };
    return FinalizeCompletion;
}());
export { FinalizeCompletion };
var PACEProtocol = /** @class */ (function () {
    function PACEProtocol() {
    }
    PACEProtocol.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PACEProtocol;
        result.version = jsonObject["version"];
        result.stdDomainParams = jsonObject["stdDomainParams"];
        result.keyAlgorithm = jsonObject["keyAlgorithm"];
        return result;
    };
    return PACEProtocol;
}());
export { PACEProtocol };
var CAProtocol = /** @class */ (function () {
    function CAProtocol() {
    }
    CAProtocol.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CAProtocol;
        result.version = jsonObject["version"];
        result.scheme = jsonObject["scheme"];
        result.keyAlgorithm = jsonObject["keyAlgorithm"];
        result.chipIndividual = jsonObject["chipIndividual"];
        return result;
    };
    return CAProtocol;
}());
export { CAProtocol };
var RFIDConfig = /** @class */ (function () {
    function RFIDConfig() {
    }
    RFIDConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new RFIDConfig;
        result.onRequestPACertificates = jsonObject["onRequestPACertificates"];
        result.onRequestTACertificates = jsonObject["onRequestTACertificates"];
        result.onRequestTASignature = jsonObject["onRequestTASignature"];
        result.onRequestPACEProtocol = jsonObject["onRequestPACEProtocol"];
        result.onRequestCAProtocol = jsonObject["onRequestCAProtocol"];
        return result;
    };
    return RFIDConfig;
}());
export { RFIDConfig };
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
    ENCRYPTED_IPI: 16777216,
    AUTHENTICITY_PROPERTY: 0x02000000,
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
    MDL_PROCESSING_SCREEN_BACKGROUND: "mdlProcessingScreenBackground",
    MDL_PROCESSING_SCREEN_HINT_LABEL_TEXT: "mdlProcessingScreenHintLabelText",
    MDL_PROCESSING_SCREEN_HINT_LABEL_BACKGROUND: "mdlProcessingScreenHintLabelBackground",
    MDL_PROCESSING_SCREEN_PROGRESS_LABEL_TEXT: "mdlProcessingScreenProgressLabelText",
    MDL_PROCESSING_SCREEN_RESULT_LABEL_TEXT: "mdlProcessingScreenResultLabelText",
    MDL_PROCESSING_SCREEN_LOADING_BAR: "mdlProcessingScreenLoadingBar",
    MDL_ENABLE_NFC_TITLE_TEXT: "mdlEnableNfcTitleText",
    MDL_ENABLE_NFC_DESCRIPTION_TEXT: "mdlEnableNfcDescriptionText",
    MDL_ENABLE_NFC_BUTTON_TEXT: "mdlEnableNfcButtonText",
    MDL_ENABLE_NFC_BUTTON_BACKGROUND: "mdlEnableNfcButtonBackground",
    NEXT_PAGE_ID_CARD_FRONT: "nextPageIdCardFront",
    NEXT_PAGE_ID_CARD_BACK: "nextPageIdCardBack",
    NEXT_PAGE_PASSPORT_SHIFT: "nextPagePassportShift",
    NEXT_PAGE_PASSPORT_FLIP: "nextPagePassportFlip",
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
    RFID_LAYER6_WRONG_PARAMS: 0x80006B00,
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
    ERR_LDS_PACE_CAM_DATA_USAGE_INCORRECT: 0x8100012B,
    ERR_LDS_PACE_IM_MAPPING_DATA_INCORRECT: 0x8100012F,
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
    CT_MDLS: 13,
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
    RFID_RESULT_TYPE_RFID_DTC_VC: 109,
    RPRM_RESULT_TYPE_MDL_PARSED_RESPONSE: 121,
    RPRM_RESULT_TYPE_VDS_NC: 124,
    RPRM_RESULT_TYPE_VDS: 125,
    RPRM_RESULT_TYPE_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_MRZ_POSITION: 61,
    RPRM_RESULT_TYPE_LIVE_PORTRAIT: 32,
    RPRM_RESULT_TYPE_STATUS: 33,
    RPRM_RESULT_TYPE_PORTRAIT_COMPARISON: 34,
    RPRM_RESULT_TYPE_EXT_PORTRAIT: 35,
    RPRM_RESULT_TYPE_BSI_XML_V2: 73,
};
export var CameraTypes = {
    FRONT: "front",
    BACK: "back",
};
export var FrameShapeType = {
    LINE: 0,
    CORNER: 1,
};
export var eMDLDeviceRetrieval = {
    NFC: 1,
    BLE: 2,
};
export var CustomizationTheme = {
    CLEAR: 0,
    LIQUID_GLASS: 1,
};
export var eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
    rfbr_1695: 0x10,
    rfbr_3390: 0x20,
    rfbr_6780: 0x40,
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
    EXTENDED_LENGTH: -1,
    STANDARD_LENGTH: 0,
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
    LDIF_TA: 8,
    ML_TA: 9,
    CBOR: 10,
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
export var eRFID_AccessControl = {
    acDefault: 0,
    acChipAccess_BAC: 1,
    acChipAccess_PACE: 2,
    acLocal_PIN: 3,
};
export var DocumentReaderErrorCodes = {
    INITIALIZATION_CORE_ABSENT: 0,
    INITIALIZATION_FAILED: 1,
    INCORRECT_SCENARIO: 2,
    NO_RESULT: 3,
    REMOVE_DATABASE: 4,
    FETCHING_DATABASE: 5,
    DB_DESCRIPTION_NOT_FOUND: 7,
    SAVE_DB: 8,
    DOWNLOAD_DB_INCORRECT_CHECKSUM: 9,
    DOWNLOAD_DB: 10,
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
    ALREADY_IN_PROGRESS: 25,
    START_BACKEND_PROCESSING: 26,
    ADD_DATA_TO_PACKAGE: 27,
    FINALIZE_FAILED: 28,
    CAMERA_NO_PERMISSION: 29,
    CAMERA_NOT_AVAILABLE: 30,
    CANNOT_USE_CAMERA_IN_SCENARIO: 40,
    BLUETOOTH_NO_PERMISSION: 41,
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
    MDL_EXCEPTION: 900,
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
    RFID_NOTIFICATION_SESSION_FILE_DATA_UPDATED: 0x00100000,
    RFID_NOTIFICATION_TCC_TA_RESOURCES: 0x00110000,
    RFID_NOTIFICATION_TCC_TA_SIGNATURE: 0x00110001,
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
    PPT_PIN_LOCAL: 8,
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
    AT_UNSPECIFIED: 0,
    AT_ROOT_FILES: 0,
    ePASSPORT: 1,
    eID: 2,
    eSIGN: 3,
    eDL: 4,
    LDS2_TRAVEL_RECORDS: 5,
    LDS2_VISA_RECORDS: 6,
    LDS2_ADD_BIOMETRICS: 7,
    eDTC_PC: 8,
    AT_APPLET_ROOT: 50,
    AT_USER_DEFINED: 100,
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
export var CustomizationMatrix = {
    NEXT_PAGE_ID_CARD_FRONT: "nextPageIdCardFront",
    NEXT_PAGE_ID_CARD_BACK: "nextPageIdCardBack",
};
export var eMDLDeviceEngagement = {
    QR: 0,
    NFC: 1,
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
    DOC_LIVENESS_VIRTUAL_CAMERA_DETECTED: 242,
    CHD_PROPERTY_NO_SIGNATURE: 260,
    CHD_PROPERTY_TEXT_AS_SIGNATURE: 261,
    CHD_PROPERTY_FINGERPRINT_AS_SIGNATURE: 262,
};
export var eMDLIntentToRetain = {
    FALSE: 0,
    TRUE: 1,
};
export var CustomizationContentMode = {
    NEXT_PAGE_ID_CARD_FRONT: "nextPageIdCardFront",
    NEXT_PAGE_ID_CARD_BACK: "nextPageIdCardBack",
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
    NTFLDS_SI_STORAGE_CS_NONCONSISTANT: 0x91000111,
    NTFLDS_SI_STORAGE_CS_PACE_CAM_KEY_MISSING: 0x91000112,
    NTFLDS_ASN_CERTIFICATE_NONMATCHINGDSROLE: 0x90000011,
    NTFLDS_MDL_CERTIFICATE_CHAIN_SOP_NONMATCHING: 0x90000400,
    NTFLDS_MDL_CERTIFICATE_UNSUPPORTEDPUBLICKEYALGORITHM: 0x90000401,
    NTFLDS_MDL_CERTIFICATE_UNSUPPORTEDSIGNATUREALGORITHM: 0x90000402,
    NTFLDS_MDL_CERTIFICATE_UNSUPPORTEDPUBLICKEYPARAMS: 0x90000403,
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
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFIDVSGHOST: 58,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_BARCODEVSGHOST: 59,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_GHOSTVSLIVE: 60,
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVSGHOST: 61,
    SECURITY_FEATURE_TYPE_SIGNATURE_PRESENCE: 62,
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
    MDL_PROCESSING_SCREEN_HINT_LABEL: "mdlProcessingScreenHintLabel",
    MDL_PROCESSING_SCREEN_PROGRESS_LABEL: "mdlProcessingScreenProgressLabel",
    MDL_PROCESSING_SCREEN_RESULT_LABEL: "mdlProcessingScreenResultLabel",
    MDL_ENABLE_NFC_TITLE_TEXT: "mdlEnableNfcTitleText",
    MDL_ENABLE_NFC_DESCRIPTION_TEXT: "mdlEnableNfcDescriptionText",
    MDL_ENABLE_NFC_BUTTON_TEXT: "mdlEnableNfcButtonText",
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
    DFT_POST_CA_RESPONSE: 710,
    DFT_POST_CA_PUBLIC_KEY: 711,
    DFT_POST_CA_INFO: 712,
    DFT_POST_CA_DPARAMS: 713,
    DFT_POST_CA_CHECK_PK: 714,
    DFT_POST_CA_CHECK_SK: 715,
    DFT_ID_DG22: 122,
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
    FT_EXPIRY_TIMESTAMP: 700,
    FT_COMMERCIAL_INDICATOR: 701,
    FT_NON_DOMICILED_INDICATOR: 702,
    FT_JURISDICTION_SPECIFIC_DATA: 703,
    FT_DATA_DATE_OF_EXPIRY: 704,
    FT_CONSUL: 705,
    FT_DLCLASSCODE_B3_FROM: 706,
    FT_DLCLASSCODE_B3_TO: 707,
    FT_DLCLASSCODE_B3_NOTES: 708,
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
export var CustomizationTiming = {
    NEXT_PAGE_ID_CARD_START_DELAY: "nextPageIdCardStartDelay",
    NEXT_PAGE_ID_CARD_END_DELAY: "nextPageIdCardEndDelay",
    NEXT_PAGE_PASSPORT_SHIFT_START_DELAY: "nextPagePassportShiftStartDelay",
    NEXT_PAGE_PASSPORT_SHIFT_END_DELAY: "nextPagePassportShiftEndDelay",
    NEXT_PAGE_PASSPORT_FLIP_START_DELAY: "nextPagePassportFlipStartDelay",
    NEXT_PAGE_PASSPORT_FLIP_END_DELAY: "nextPagePassportFlipEndDelay",
};
export var CustomizationImage = {
    HELP_ANIMATION: "helpAnimation",
    LIVENESS_ANIMATION: "livenessAnimation",
    BORDER_BACKGROUND: "borderBackground",
    TORCH_BUTTON_ON: "torchButtonOn",
    TORCH_BUTTON_OFF: "torchButtonOff",
    CAPTURE_BUTTON: "captureButton",
    SWITCH_BUTTON: "switchButton",
    CLOSE_BUTTON: "closeButton",
    MULTIPAGE_BUTTON: "multipageButton",
    RFID_PROCESSING_SCREEN_FAILURE_IMAGE: "rfidProcessingScreenFailureImage",
    RFID_ENABLE_NFC_IMAGE: "rfidEnableNfcImage",
    RFID_DISABLE_NFC_IMAGE: "rfidDisableNfcImage",
    MDL_PROCESSING_SCREEN_FAILURE_IMAGE: "mdlProcessingScreenFailureImage",
    MDL_ENABLE_NFC_IMAGE: "mdlEnableNfcImage",
    MDL_DISABLE_NFC_IMAGE: "mdlDisableNfcImage",
    NEXT_PAGE_ID_CARD_FRONT: "nextPageIdCardFront",
    NEXT_PAGE_ID_CARD_BACK: "nextPageIdCardBack",
    NEXT_PAGE_PASSPORT_SHIFT: "nextPagePassportShift",
    NEXT_PAGE_PASSPORT_FLIP_START: "nextPagePassportFlipStart",
    NEXT_PAGE_PASSPORT_FLIP_CLEAN: "nextPagePassportFlipClean",
    NEXT_PAGE_PASSPORT_FLIP_TOP: "nextPagePassportFlipTop",
    NEXT_PAGE_PASSPORT_FLIP_BOTTOM: "nextPagePassportFlipBottom",
};
export var DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
};
export var eMDLDocRequestPreset = {
    ALL: 0,
    AGE: 1,
    STANDARD_ID: 2,
    TRAVEL: 3,
    DRIVERS_LICENSE: 4,
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
    CameraTypes: CameraTypes,
    FrameShapeType: FrameShapeType,
    eMDLDeviceRetrieval: eMDLDeviceRetrieval,
    CustomizationTheme: CustomizationTheme,
    eRFID_BaudRate: eRFID_BaudRate,
    LineCap: LineCap,
    eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
    DocReaderAction: DocReaderAction,
    eProcessGLCommands: eProcessGLCommands,
    eRFIDReadingBufferSize: eRFIDReadingBufferSize,
    PKDResourceType: PKDResourceType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    eRFID_AccessControl: eRFID_AccessControl,
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
    CustomizationMatrix: CustomizationMatrix,
    eMDLDeviceEngagement: eMDLDeviceEngagement,
    eCheckDiagnose: eCheckDiagnose,
    eMDLIntentToRetain: eMDLIntentToRetain,
    CustomizationContentMode: CustomizationContentMode,
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
    CustomizationTiming: CustomizationTiming,
    CustomizationImage: CustomizationImage,
    DocReaderFrame: DocReaderFrame,
    eMDLDocRequestPreset: eMDLDocRequestPreset,
    eRPRM_Lights: eRPRM_Lights,
    eMrzDetectionModes: eMrzDetectionModes,
};
var DocumentReaderOriginal = /** @class */ (function (_super) {
    __extends(DocumentReaderOriginal, _super);
    function DocumentReaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReaderOriginal.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.getTag = function () { return cordova(this, "getTag", {}, arguments); };
    DocumentReaderOriginal.prototype.setTag = function (tag) { return cordova(this, "setTag", {}, arguments); };
    DocumentReaderOriginal.prototype.getTenant = function () { return cordova(this, "getTenant", {}, arguments); };
    DocumentReaderOriginal.prototype.setTenant = function (tenant) { return cordova(this, "setTenant", {}, arguments); };
    DocumentReaderOriginal.prototype.getEnv = function () { return cordova(this, "getEnv", {}, arguments); };
    DocumentReaderOriginal.prototype.setEnv = function (env) { return cordova(this, "setEnv", {}, arguments); };
    DocumentReaderOriginal.prototype.getLocale = function () { return cordova(this, "getLocale", {}, arguments); };
    DocumentReaderOriginal.prototype.setLocale = function (locale) { return cordova(this, "setLocale", {}, arguments); };
    DocumentReaderOriginal.prototype.getFunctionality = function () { return cordova(this, "getFunctionality", {}, arguments); };
    DocumentReaderOriginal.prototype.setFunctionality = function (functionality) { return cordova(this, "setFunctionality", {}, arguments); };
    DocumentReaderOriginal.prototype.getProcessParams = function () { return cordova(this, "getProcessParams", {}, arguments); };
    DocumentReaderOriginal.prototype.setProcessParams = function (processParams) { return cordova(this, "setProcessParams", {}, arguments); };
    DocumentReaderOriginal.prototype.getCustomization = function () { return cordova(this, "getCustomization", {}, arguments); };
    DocumentReaderOriginal.prototype.setCustomization = function (customization) { return cordova(this, "setCustomization", {}, arguments); };
    DocumentReaderOriginal.prototype.getRfidScenario = function () { return cordova(this, "getRfidScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidScenario = function (rfidScenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.resetConfiguration = function () { return cordova(this, "resetConfiguration", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReader = function (config) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReaderWithBleDeviceConfig = function (config) { return cordova(this, "initializeReaderWithBleDeviceConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.deinitializeReader = function () { return cordova(this, "deinitializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.removeDatabase = function () { return cordova(this, "removeDatabase", {}, arguments); };
    DocumentReaderOriginal.prototype.runAutoUpdate = function (databaseId) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.cancelDBUpdate = function () { return cordova(this, "cancelDBUpdate", {}, arguments); };
    DocumentReaderOriginal.prototype.checkDatabaseUpdate = function (databaseId) { return cordova(this, "checkDatabaseUpdate", {}, arguments); };
    DocumentReaderOriginal.prototype.scan = function (config) { return cordova(this, "scan", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.startScanner = function (config) { return cordova(this, "startScanner", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognize = function (config) { return cordova(this, "recognize", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReaderOriginal.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReaderOriginal.prototype.startRFIDReader = function (config) { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.readRFID = function (config) { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReaderOriginal.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTASignature = function (signature) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReaderOriginal.prototype.selectPACEProtocol = function (protocol) { return cordova(this, "selectPACEProtocol", {}, arguments); };
    DocumentReaderOriginal.prototype.selectCAProtocol = function (protocol) { return cordova(this, "selectCAProtocol", {}, arguments); };
    DocumentReaderOriginal.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReaderOriginal.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReaderOriginal.prototype.connectBluetoothDevice = function (btDeviceName) { return cordova(this, "connectBluetoothDevice", {}, arguments); };
    DocumentReaderOriginal.prototype.btDeviceRequestFlashing = function () { return cordova(this, "btDeviceRequestFlashing", {}, arguments); };
    DocumentReaderOriginal.prototype.btDeviceRequestFlashingFullIR = function () { return cordova(this, "btDeviceRequestFlashingFullIR", {}, arguments); };
    DocumentReaderOriginal.prototype.btDeviceRequestTurnOffAll = function () { return cordova(this, "btDeviceRequestTurnOffAll", {}, arguments); };
    DocumentReaderOriginal.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    DocumentReaderOriginal.prototype.getLicense = function () { return cordova(this, "getLicense", {}, arguments); };
    DocumentReaderOriginal.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReaderOriginal.prototype.getIsRFIDAvailableForUse = function () { return cordova(this, "getIsRFIDAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.isAuthenticatorRFIDAvailableForUse = function () { return cordova(this, "isAuthenticatorRFIDAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocReaderVersion = function () { return cordova(this, "getDocReaderVersion", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocReaderDocumentsDatabase = function () { return cordova(this, "getDocReaderDocumentsDatabase", {}, arguments); };
    DocumentReaderOriginal.prototype.finalizePackage = function () { return cordova(this, "finalizePackage", {}, arguments); };
    DocumentReaderOriginal.prototype.finalizePackageWithFinalizeConfig = function (config) { return cordova(this, "finalizePackageWithFinalizeConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.endBackendTransaction = function () { return cordova(this, "endBackendTransaction", {}, arguments); };
    DocumentReaderOriginal.prototype.getTranslation = function (className, value) { return cordova(this, "getTranslation", {}, arguments); };
    DocumentReaderOriginal.prototype.startReadMDl = function (type, dataRetrieval) { return cordova(this, "startReadMDl", {}, arguments); };
    DocumentReaderOriginal.prototype.startEngageDevice = function (type) { return cordova(this, "startEngageDevice", {}, arguments); };
    DocumentReaderOriginal.prototype.engageDeviceNFC = function () { return cordova(this, "engageDeviceNFC", {}, arguments); };
    DocumentReaderOriginal.prototype.engageDeviceData = function (data) { return cordova(this, "engageDeviceData", {}, arguments); };
    DocumentReaderOriginal.prototype.startRetrieveData = function (deviceEngagement, dataRetrieval) { return cordova(this, "startRetrieveData", {}, arguments); };
    DocumentReaderOriginal.prototype.retrieveDataNFC = function (dataRetrieval) { return cordova(this, "retrieveDataNFC", {}, arguments); };
    DocumentReaderOriginal.prototype.retrieveDataBLE = function (deviceEngagement, dataRetrieval) { return cordova(this, "retrieveDataBLE", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByType = function (results, fieldType) { return cordova(this, "textFieldValueByType", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByTypeLcid = function (results, fieldType, lcid) { return cordova(this, "textFieldValueByTypeLcid", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByTypeSource = function (results, fieldType, source) { return cordova(this, "textFieldValueByTypeSource", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByTypeLcidSource = function (results, fieldType, lcid, source) { return cordova(this, "textFieldValueByTypeLcidSource", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByTypeSourceOriginal = function (results, fieldType, source, original) { return cordova(this, "textFieldValueByTypeSourceOriginal", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldValueByTypeLcidSourceOriginal = function (results, fieldType, lcid, source, original) { return cordova(this, "textFieldValueByTypeLcidSourceOriginal", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldByType = function (results, fieldType) { return cordova(this, "textFieldByType", {}, arguments); };
    DocumentReaderOriginal.prototype.textFieldByTypeLcid = function (results, fieldType, lcid) { return cordova(this, "textFieldByTypeLcid", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldByTypeSource = function (results, fieldType, source) { return cordova(this, "graphicFieldByTypeSource", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldByTypeSourcePageIndex = function (results, fieldType, source, pageIndex) { return cordova(this, "graphicFieldByTypeSourcePageIndex", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldByTypeSourcePageIndexLight = function (results, fieldType, source, pageIndex, light) { return cordova(this, "graphicFieldByTypeSourcePageIndexLight", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldImageByType = function (results, fieldType) { return cordova(this, "graphicFieldImageByType", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldImageByTypeSource = function (results, fieldType, source) { return cordova(this, "graphicFieldImageByTypeSource", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldImageByTypeSourcePageIndex = function (results, fieldType, source, pageIndex) { return cordova(this, "graphicFieldImageByTypeSourcePageIndex", {}, arguments); };
    DocumentReaderOriginal.prototype.graphicFieldImageByTypeSourcePageIndexLight = function (results, fieldType, source, pageIndex, light) { return cordova(this, "graphicFieldImageByTypeSourcePageIndexLight", {}, arguments); };
    DocumentReaderOriginal.prototype.containers = function (results, resultType) { return cordova(this, "containers", {}, arguments); };
    DocumentReaderOriginal.prototype.encryptedContainers = function (results) { return cordova(this, "encryptedContainers", {}, arguments); };
    DocumentReaderOriginal.pluginName = "DocumentReader";
    DocumentReaderOriginal.plugin = "cordova-plugin-document-reader-api";
    DocumentReaderOriginal.pluginRef = "DocumentReaderPlugin.DocumentReader";
    DocumentReaderOriginal.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReaderOriginal.platforms = ["Android", "iOS"];
    return DocumentReaderOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentReader = new DocumentReaderOriginal();
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQWlCdkIsK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzlDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1FBQ3hGLE1BQU0sQ0FBQyxpQ0FBaUMsR0FBRyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUMxRixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMs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QUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksbUJBQW1CLENBQUE7UUFFdEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFaEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs4QkFuMUZMOzs7Ozs7SUE2MkZXLHNCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUE7UUFFaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxV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LEVBQUUsSUFBWTtJQUduRixpREFBd0IsYUFBQyxPQUE4QixFQUFFLFNBQWlCLEVBQUUsTUFBYztJQUcxRiwwREFBaUMsYUFBQyxPQUE4QixFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLFNBQWlCO0lBR3RILCtEQUFzQyxhQUFDLE9BQThCLEVBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQUUsU0FBaUIsRUFBRSxLQUFhO0lBRzFJLGdEQUF1QixhQUFDLE9BQThCLEVBQUUsU0FBaUI7SUFHekUsc0RBQTZCLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLE1BQWM7SUFHL0YsK0RBQXNDLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxTQUFpQjtJQUczSCxvRUFBMkMsYUFBQyxPQUE4QixFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLFNBQWlCLEVBQUUsS0FBYTtJQUcvSSxtQ0FBVSxhQUFDLE9BQThCLEVBQUUsVUFBb0I7SUFHL0QsNENBQW1CLGFBQUMsT0FBOEI7Ozs7Ozt5QkFuc050RDtFQWdrTW9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBtdWx0aVBhZ2VPZmY/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZU9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgdXZUb3JjaD86IGJvb2xlYW5cbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lT3JpZW50YXRpb24gPSBqc29uT2JqZWN0W1wiZnJhbWVPcmllbnRhdGlvblwiXVxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsaWdodD86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIG9yaWdpbmFsUGFnZUluZGV4PzogbnVtYmVyXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgbGlnaHROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBmaWVsZFJlY3Q/OiBSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5saWdodCA9IGpzb25PYmplY3RbXCJsaWdodFwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxQYWdlSW5kZXggPSBqc29uT2JqZWN0W1wib3JpZ2luYWxQYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZFJlY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsdWUge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFN5bWJvbHM/OiBEb2N1bWVudFJlYWRlclN5bWJvbFtdXG4gICAgcmZpZE9yaWdpbj86IERvY3VtZW50UmVhZGVyUmZpZE9yaWdpblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWx1ZVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclN5bWJvbC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxTeW1ib2xzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9yaWdpbmFsU3ltYm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJmaWRPcmlnaW4gPSBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4uZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRPcmlnaW5cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIGdldFZhbHVlPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVxuICAgIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuICAgIGNvbXBhcmlzb25MaXN0PzogRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uW11cbiAgICB2YWxpZGl0eUxpc3Q/OiBEb2N1bWVudFJlYWRlclZhbGlkaXR5W11cbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmxjaWROYW1lID0ganNvbk9iamVjdFtcImxjaWROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZ2V0VmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJnZXRWYWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25MaXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudmFsaWRpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25TdGF0dXMgPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHlTdGF0dXMgPSBqc29uT2JqZWN0W1widmFsaWRpdHlTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcbiAgICBhdmFpbGFibGVTb3VyY2VMaXN0PzogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlW11cbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hdmFpbGFibGVTb3VyY2VMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlIHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb29yZGluYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50UG9zaXRpb24ge1xuICAgIGRvY0Zvcm1hdD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgZHBpPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgaW52ZXJzZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgICBvYmpBcmVhPzogbnVtYmVyXG4gICAgb2JqSW50QW5nbGVEZXY/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgICBhbmdsZT86IG51bWJlclxuICAgIGNlbnRlcj86IENvb3JkaW5hdGVcbiAgICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gICAgcmlnaHRUb3A/OiBDb29yZGluYXRlXG4gICAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgYm91bmRSZWN0cz86IFJlY3RbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuYm91bmRSZWN0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ib3VuZFJlY3RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBpc0RlcHJlY2F0ZWQ/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIElDQU9Db2RlPzogc3RyaW5nXG4gICAgZERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgZFllYXI/OiBzdHJpbmdcbiAgICBkQ291bnRyeU5hbWU/OiBzdHJpbmdcbiAgICBGRFNJRD86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0LmlzRGVwcmVjYXRlZCA9IGpzb25PYmplY3RbXCJpc0RlcHJlY2F0ZWRcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgbm90aWZpY2F0aW9uQ29kZT86IG51bWJlclxuICAgIGRhdGFGaWxlVHlwZT86IG51bWJlclxuICAgIHByb2dyZXNzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9uQ29kZSA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhRmlsZVR5cGUgPSBqc29uT2JqZWN0W1wiZGF0YUZpbGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9ncmVzcyA9IGpzb25PYmplY3RbXCJwcm9ncmVzc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB7XG4gICAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICAgICAgcmVzdWx0LmFjdGl2ZU9wdGlvbklkeCA9IGpzb25PYmplY3RbXCJhY3RpdmVPcHRpb25JZHhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHtcbiAgICBzZWN1cml0eU9iamVjdD86IENlcnRpZmljYXRlRGF0YVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0ID0gQ2VydGlmaWNhdGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVcblxuICAgICAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXBwbGljYXRpb25cblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbklEID0ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uSURcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC51bmljb2RlVmVyc2lvbiA9IGpzb25PYmplY3RbXCJ1bmljb2RlVmVyc2lvblwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmlsZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWxlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JtYXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aG9yaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEF0dHJpYnV0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICB0eXBlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RCZWZvcmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QmVmb3JlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBvcmlnaW4/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBWYWx1ZVxuICAgIHZhbGlkaXR5PzogVmFsaWRpdHlcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBzdWJqZWN0PzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlQ2hhaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICAgICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0ganNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdCA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25lckluZm8ge1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIGRhdGFUb0hhc2g/OiBzdHJpbmdcbiAgICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzZXJpYWxOdW1iZXI/OiBWYWx1ZVxuICAgIHNpZ25hdHVyZT86IFZhbHVlXG4gICAgc3ViamVjdEtleUlkZW50aWZpZXI/OiBWYWx1ZVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lZEF0dHJpYnV0ZXM/OiBFeHRlbnNpb25bXVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpZ25lckluZm9cblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YVRvSGFzaCA9IGpzb25PYmplY3RbXCJkYXRhVG9IYXNoXCJdXG4gICAgICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdKVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdFxuXG4gICAgICAgIHJlc3VsdC5maWxlUmVmZXJlbmNlID0ganNvbk9iamVjdFtcImZpbGVSZWZlcmVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQub2JqZWN0VHlwZSA9IGpzb25PYmplY3RbXCJvYmplY3RUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENhcmRQcm9wZXJ0aWVzXG5cbiAgICAgICAgcmVzdWx0LmFUUUEgPSBqc29uT2JqZWN0W1wiYVRRQVwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVTID0ganNvbk9iamVjdFtcImJpdFJhdGVTXCJdXG4gICAgICAgIHJlc3VsdC5jaGlwVHlwZUEgPSBqc29uT2JqZWN0W1wiY2hpcFR5cGVBXCJdXG4gICAgICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkVHlwZSA9IGpzb25PYmplY3RbXCJyZmlkVHlwZVwiXVxuICAgICAgICByZXN1bHQuc0FLID0ganNvbk9iamVjdFtcInNBS1wiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnRNaWZhcmUgPSBqc29uT2JqZWN0W1wic3VwcG9ydE1pZmFyZVwiXVxuICAgICAgICByZXN1bHQuYVRRQiA9IGpzb25PYmplY3RbXCJhVFFCXCJdXG4gICAgICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTEgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUxXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTIgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUyXCJdXG4gICAgICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gICAgdG90YWxCeXRlc1JlY2VpdmVkPzogbnVtYmVyXG4gICAgdG90YWxCeXRlc1NlbnQ/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBleHRMZVN1cHBvcnQ/OiBudW1iZXJcbiAgICBwcm9jZXNzVGltZT86IG51bWJlclxuICAgIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuICAgIGRhdGFHcm91cHM/OiBudW1iZXJbXVxuICAgIGRhdGFGaWVsZHM/OiBEYXRhRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1JlY2VpdmVkID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNSZWNlaXZlZFwiXVxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1NlbnQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1NlbnRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmV4dExlU3VwcG9ydCA9IGpzb25PYmplY3RbXCJleHRMZVN1cHBvcnRcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NUaW1lID0ganNvbk9iamVjdFtcInByb2Nlc3NUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICAgICAgcmVzdWx0LmFjY2Vzc0NvbnRyb2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwbGljYXRpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VjdXJpdHlPYmplY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhR3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzLnB1c2goanNvbk9iamVjdFtcImRhdGFHcm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRhdGFGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFGaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhRmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERhdGFGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGF0YUZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhRmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGQge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGF0YUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0YUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUERGNDE3SW5mb1xuXG4gICAgICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICAgICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgICAgICByZXN1bHQucm93cyA9IGpzb25PYmplY3RbXCJyb3dzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBSZWd1bGFFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IFJlZ3VsYUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICBub3RpZmljYXRpb24/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ3VsYUV4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVndWxhRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVndWxhRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBLRENlcnRpZmljYXRlIHtcbiAgICBiaW5hcnlEYXRhPzogc3RyaW5nXG4gICAgcmVzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgcHJpdmF0ZUtleT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQS0RDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRjY1BhcmFtcyB7XG4gICAgc2VydmljZVVybFRBPzogc3RyaW5nXG4gICAgc2VydmljZVVybFBBPzogc3RyaW5nXG4gICAgcGZ4Q2VydFVybD86IHN0cmluZ1xuICAgIHBmeFBhc3NQaHJhc2U/OiBzdHJpbmdcbiAgICBwZnhDZXJ0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRjY1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRjY1BhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsVEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFRBXCJdXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsUEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFBBXCJdXG4gICAgICAgIHJlc3VsdC5wZnhDZXJ0VXJsID0ganNvbk9iamVjdFtcInBmeENlcnRVcmxcIl1cbiAgICAgICAgcmVzdWx0LnBmeFBhc3NQaHJhc2UgPSBqc29uT2JqZWN0W1wicGZ4UGFzc1BocmFzZVwiXVxuICAgICAgICByZXN1bHQucGZ4Q2VydCA9IGpzb25PYmplY3RbXCJwZnhDZXJ0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgZGlzYWJsZUZyYW1lU2hpZnRJUj86IGJvb2xlYW5cbiAgICBkb0ZsaXBZQXhpcz86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dFBhcmFtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VJbnB1dFBhcmFtXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVGcmFtZVNoaWZ0SVIgPSBqc29uT2JqZWN0W1wiZGlzYWJsZUZyYW1lU2hpZnRJUlwiXVxuICAgICAgICByZXN1bHQuZG9GbGlwWUF4aXMgPSBqc29uT2JqZWN0W1wiZG9GbGlwWUF4aXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBzdHJpbmdcbiAgICBhdHRyaWJ1dGVzPzogUEFBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQVJlc291cmNlc0lzc3VlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBUmVzb3VyY2VzSXNzdWVyXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0ganNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXVxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQUF0dHJpYnV0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVEFDaGFsbGVuZ2Uge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBhdXhQQ0Q/OiBzdHJpbmdcbiAgICBjaGFsbGVuZ2VQSUNDPzogc3RyaW5nXG4gICAgaGFzaFBLPzogc3RyaW5nXG4gICAgaWRQSUNDPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRBQ2hhbGxlbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEFDaGFsbGVuZ2VcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5hdXhQQ0QgPSBqc29uT2JqZWN0W1wiYXV4UENEXCJdXG4gICAgICAgIHJlc3VsdC5jaGFsbGVuZ2VQSUNDID0ganNvbk9iamVjdFtcImNoYWxsZW5nZVBJQ0NcIl1cbiAgICAgICAgcmVzdWx0Lmhhc2hQSyA9IGpzb25PYmplY3RbXCJoYXNoUEtcIl1cbiAgICAgICAgcmVzdWx0LmlkUElDQyA9IGpzb25PYmplY3RbXCJpZFBJQ0NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc0FnZSB7XG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgb3ZlclRocmVzaG9sZD86IG51bWJlclxuICAgIG92ZXIxOD86IG51bWJlclxuICAgIG92ZXIyMT86IG51bWJlclxuICAgIG92ZXIyNT86IG51bWJlclxuICAgIG92ZXI2NT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRhaWxzQWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc0FnZVxuXG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyVGhyZXNob2xkID0ganNvbk9iamVjdFtcIm92ZXJUaHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXIxOCA9IGpzb25PYmplY3RbXCJvdmVyMThcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXIyMSA9IGpzb25PYmplY3RbXCJvdmVyMjFcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXIyNSA9IGpzb25PYmplY3RbXCJvdmVyMjVcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXI2NSA9IGpzb25PYmplY3RbXCJvdmVyNjVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgb3B0aWNhbD86IG51bWJlclxuICAgIGRldGFpbHNPcHRpY2FsPzogRGV0YWlsc09wdGljYWxcbiAgICByZmlkPzogbnVtYmVyXG4gICAgZGV0YWlsc1JGSUQ/OiBEZXRhaWxzUkZJRFxuICAgIHBvcnRyYWl0PzogbnVtYmVyXG4gICAgc3RvcExpc3Q/OiBudW1iZXJcbiAgICBtREw/OiBudW1iZXJcbiAgICBhZ2U/OiBudW1iZXJcbiAgICBjYXB0dXJlUHJvY2Vzc0ludGVncml0eT86IG51bWJlclxuICAgIGRldGFpbHNBZ2U/OiBEZXRhaWxzQWdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1c1xuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm9wdGljYWwgPSBqc29uT2JqZWN0W1wib3B0aWNhbFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc09wdGljYWwgPSBEZXRhaWxzT3B0aWNhbC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc09wdGljYWxcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkID0ganNvbk9iamVjdFtcInJmaWRcIl1cbiAgICAgICAgcmVzdWx0LmRldGFpbHNSRklEID0gRGV0YWlsc1JGSUQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGFpbHNSRklEXCJdKVxuICAgICAgICByZXN1bHQucG9ydHJhaXQgPSBqc29uT2JqZWN0W1wicG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LnN0b3BMaXN0ID0ganNvbk9iamVjdFtcInN0b3BMaXN0XCJdXG4gICAgICAgIHJlc3VsdC5tREwgPSBqc29uT2JqZWN0W1wibURMXCJdXG4gICAgICAgIHJlc3VsdC5hZ2UgPSBqc29uT2JqZWN0W1wiYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlUHJvY2Vzc0ludGVncml0eSA9IGpzb25PYmplY3RbXCJjYXB0dXJlUHJvY2Vzc0ludGVncml0eVwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc0FnZSA9IERldGFpbHNBZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGFpbHNBZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNPcHRpY2FsIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgbXJ6PzogbnVtYmVyXG4gICAgdGV4dD86IG51bWJlclxuICAgIGRvY1R5cGU/OiBudW1iZXJcbiAgICBzZWN1cml0eT86IG51bWJlclxuICAgIGltYWdlUUE/OiBudW1iZXJcbiAgICBleHBpcnk/OiBudW1iZXJcbiAgICB2ZHM/OiBudW1iZXJcbiAgICBwYWdlc0NvdW50PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNPcHRpY2FsIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc09wdGljYWxcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC50ZXh0ID0ganNvbk9iamVjdFtcInRleHRcIl1cbiAgICAgICAgcmVzdWx0LmRvY1R5cGUgPSBqc29uT2JqZWN0W1wiZG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuc2VjdXJpdHkgPSBqc29uT2JqZWN0W1wic2VjdXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBqc29uT2JqZWN0W1wiaW1hZ2VRQVwiXVxuICAgICAgICByZXN1bHQuZXhwaXJ5ID0ganNvbk9iamVjdFtcImV4cGlyeVwiXVxuICAgICAgICByZXN1bHQudmRzID0ganNvbk9iamVjdFtcInZkc1wiXVxuICAgICAgICByZXN1bHQucGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJwYWdlc0NvdW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNSRklEIHtcbiAgICBwYT86IG51bWJlclxuICAgIGNhPzogbnVtYmVyXG4gICAgYWE/OiBudW1iZXJcbiAgICB0YT86IG51bWJlclxuICAgIGJhYz86IG51bWJlclxuICAgIHBhY2U/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNSRklEIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc1JGSURcblxuICAgICAgICByZXN1bHQucGEgPSBqc29uT2JqZWN0W1wicGFcIl1cbiAgICAgICAgcmVzdWx0LmNhID0ganNvbk9iamVjdFtcImNhXCJdXG4gICAgICAgIHJlc3VsdC5hYSA9IGpzb25PYmplY3RbXCJhYVwiXVxuICAgICAgICByZXN1bHQudGEgPSBqc29uT2JqZWN0W1widGFcIl1cbiAgICAgICAgcmVzdWx0LmJhYyA9IGpzb25PYmplY3RbXCJiYWNcIl1cbiAgICAgICAgcmVzdWx0LnBhY2UgPSBqc29uT2JqZWN0W1wicGFjZVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZEU05DRGF0YSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBpc3N1aW5nQ291bnRyeT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZEU05DRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZEU05DRGF0YVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuaXNzdWluZ0NvdW50cnkgPSBqc29uT2JqZWN0W1wiaXNzdWluZ0NvdW50cnlcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jRmVhdHVyZSB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIGRhdGE/OiBCeXRlc0RhdGFcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jRmVhdHVyZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY0ZlYXR1cmVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJkYXRhXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWRFNEYXRhIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIGZlYXR1cmVSZWY/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgaXNzdWluZ0NvdW50cnk/OiBzdHJpbmdcbiAgICBkb2NJc3N1ZURhdGU/OiBzdHJpbmdcbiAgICBzaWduYXR1cmU/OiBCeXRlc0RhdGFcbiAgICBzaWduYXR1cmVEYXRlPzogc3RyaW5nXG4gICAgc2lnbmVyPzogc3RyaW5nXG4gICAgY2VydGlmaWNhdGU/OiBzdHJpbmdcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgZG9jRmVhdHVyZXM/OiBEb2NGZWF0dXJlW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVkRTRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZEU0RhdGFcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5kb2NUeXBlID0ganNvbk9iamVjdFtcImRvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0LmZlYXR1cmVSZWYgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVJlZlwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nQ291bnRyeSA9IGpzb25PYmplY3RbXCJpc3N1aW5nQ291bnRyeVwiXVxuICAgICAgICByZXN1bHQuZG9jSXNzdWVEYXRlID0ganNvbk9iamVjdFtcImRvY0lzc3VlRGF0ZVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVEYXRlID0ganNvbk9iamVjdFtcInNpZ25hdHVyZURhdGVcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25lciA9IGpzb25PYmplY3RbXCJzaWduZXJcIl1cbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlID0ganNvbk9iamVjdFtcImNlcnRpZmljYXRlXCJdXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2NGZWF0dXJlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmVhdHVyZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGZWF0dXJlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2NGZWF0dXJlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2NGZWF0dXJlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGZWF0dXJlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlc0RhdGEge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJ5dGVzRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJ5dGVzRGF0YVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUlucHV0RGF0YSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgbGlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBpbWdCeXRlcz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXREYXRhXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5pbWdCeXRlcyA9IGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSB7XG4gICAgZGF0YWJhc2VJRD86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBkYXRlPzogc3RyaW5nXG4gICAgZGF0YWJhc2VEZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGNvdW50cmllc051bWJlcj86IG51bWJlclxuICAgIGRvY3VtZW50c051bWJlcj86IG51bWJlclxuICAgIHNpemU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZUlEID0ganNvbk9iamVjdFtcImRhdGFiYXNlSURcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZGF0ZSA9IGpzb25PYmplY3RbXCJkYXRlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZURlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRhdGFiYXNlRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmNvdW50cmllc051bWJlciA9IGpzb25PYmplY3RbXCJjb3VudHJpZXNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50c051bWJlciA9IGpzb25PYmplY3RbXCJkb2N1bWVudHNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBqc29uT2JqZWN0W1wic2l6ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24ge1xuICAgIHNvdXJjZVR5cGVMZWZ0PzogbnVtYmVyXG4gICAgc291cmNlVHlwZVJpZ2h0PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvblxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlTGVmdCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlTGVmdFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZVJpZ2h0ID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVSaWdodFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4ge1xuICAgIGRnPzogbnVtYmVyXG4gICAgZGdUYWc/OiBudW1iZXJcbiAgICBlbnRyeVZpZXc/OiBudW1iZXJcbiAgICB0YWdFbnRyeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgICAgICByZXN1bHQuZGcgPSBqc29uT2JqZWN0W1wiZGdcIl1cbiAgICAgICAgcmVzdWx0LmRnVGFnID0ganNvbk9iamVjdFtcImRnVGFnXCJdXG4gICAgICAgIHJlc3VsdC5lbnRyeVZpZXcgPSBqc29uT2JqZWN0W1wiZW50cnlWaWV3XCJdXG4gICAgICAgIHJlc3VsdC50YWdFbnRyeSA9IGpzb25PYmplY3RbXCJ0YWdFbnRyeVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2Uge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzb3VyY2U/OiBzdHJpbmdcbiAgICB2YWxpZGl0eVN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2VcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2UgPSBqc29uT2JqZWN0W1wic291cmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclN5bWJvbCB7XG4gICAgY29kZT86IG51bWJlclxuICAgIHJlY3Q/OiBSZWN0XG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJTeW1ib2wgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclN5bWJvbFxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LnJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWN0XCJdKVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT25saW5lUHJvY2Vzc2luZ0NvbmZpZyB7XG4gICAgbW9kZT86IG51bWJlclxuICAgIHVybD86IHN0cmluZ1xuICAgIHByb2Nlc3NQYXJhbXM/OiBQcm9jZXNzUGFyYW1zXG4gICAgaW1hZ2VGb3JtYXQ/OiBudW1iZXJcbiAgICBpbWFnZUNvbXByZXNzaW9uUXVhbGl0eT86IG51bWJlclxuICAgIHJlcXVlc3RIZWFkZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5tb2RlID0ganNvbk9iamVjdFtcIm1vZGVcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NQYXJhbXMgPSBQcm9jZXNzUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJwcm9jZXNzUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VGb3JtYXQgPSBqc29uT2JqZWN0W1wiaW1hZ2VGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlQ29tcHJlc3Npb25RdWFsaXR5ID0ganNvbk9iamVjdFtcImltYWdlQ29tcHJlc3Npb25RdWFsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5yZXF1ZXN0SGVhZGVycyA9IGpzb25PYmplY3RbXCJyZXF1ZXN0SGVhZGVyc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJDb25maWcge1xuICAgIGxpY2Vuc2U/OiBzdHJpbmdcbiAgICBjdXN0b21EYj86IHN0cmluZ1xuICAgIGRhdGFiYXNlUGF0aD86IHN0cmluZ1xuICAgIGxpY2Vuc2VVcGRhdGU/OiBib29sZWFuXG4gICAgbGljZW5zZVVwZGF0ZVRpbWVvdXQ/OiBudW1iZXJcbiAgICBkZWxheWVkTk5Mb2FkPzogYm9vbGVhblxuICAgIGJsYWNrTGlzdD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2UgPSBqc29uT2JqZWN0W1wibGljZW5zZVwiXVxuICAgICAgICByZXN1bHQuY3VzdG9tRGIgPSBqc29uT2JqZWN0W1wiY3VzdG9tRGJcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlUGF0aCA9IGpzb25PYmplY3RbXCJkYXRhYmFzZVBhdGhcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuICAgICAgICByZXN1bHQubGljZW5zZVVwZGF0ZVRpbWVvdXQgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LmRlbGF5ZWROTkxvYWQgPSBqc29uT2JqZWN0W1wiZGVsYXllZE5OTG9hZFwiXVxuICAgICAgICByZXN1bHQuYmxhY2tMaXN0ID0ganNvbk9iamVjdFtcImJsYWNrTGlzdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY2FubmVyQ29uZmlnIHtcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGxpdmVQb3J0cmFpdD86IHN0cmluZ1xuICAgIGV4dFBvcnRyYWl0Pzogc3RyaW5nXG4gICAgb25saW5lUHJvY2Vzc2luZ0NvbmZpZz86IE9ubGluZVByb2Nlc3NpbmdDb25maWdcbiAgICBjYW1lcmFJZD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTY2FubmVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2Nhbm5lckNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQubGl2ZVBvcnRyYWl0ID0ganNvbk9iamVjdFtcImxpdmVQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZXh0UG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZXh0UG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0Lm9ubGluZVByb2Nlc3NpbmdDb25maWcgPSBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJvbmxpbmVQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuY2FtZXJhSWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhSWRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjb2duaXplQ29uZmlnIHtcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIG9ubGluZVByb2Nlc3NpbmdDb25maWc/OiBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnXG4gICAgb25lU2hvdElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGR0Yz86IHN0cmluZ1xuICAgIGxpdmVQb3J0cmFpdD86IHN0cmluZ1xuICAgIGV4dFBvcnRyYWl0Pzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgaW1hZ2VzPzogc3RyaW5nW11cbiAgICBkYXRhTGlzdD86IHN0cmluZ1tdXG4gICAgaW1hZ2VJbnB1dERhdGE/OiBJbWFnZUlucHV0RGF0YVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY29nbml6ZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY29nbml6ZUNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQub25saW5lUHJvY2Vzc2luZ0NvbmZpZyA9IE9ubGluZVByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcIm9ubGluZVByb2Nlc3NpbmdDb25maWdcIl0pXG4gICAgICAgIHJlc3VsdC5vbmVTaG90SWRlbnRpZmljYXRpb24gPSBqc29uT2JqZWN0W1wib25lU2hvdElkZW50aWZpY2F0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kdGMgPSBqc29uT2JqZWN0W1wiZHRjXCJdXG4gICAgICAgIHJlc3VsdC5saXZlUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wibGl2ZVBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5leHRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJleHRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZGF0YUxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YUxpc3QucHVzaChqc29uT2JqZWN0W1wiZGF0YUxpc3RcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlSW5wdXREYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlSW5wdXREYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlSW5wdXREYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZUlucHV0RGF0YS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGljZW5zZSB7XG4gICAgZXhwaXJ5RGF0ZT86IHN0cmluZ1xuICAgIGNvdW50cnlGaWx0ZXI/OiBzdHJpbmdbXVxuICAgIGlzUmZpZEF2YWlsYWJsZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGljZW5zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpY2Vuc2VcblxuICAgICAgICByZXN1bHQuZXhwaXJ5RGF0ZSA9IGpzb25PYmplY3RbXCJleHBpcnlEYXRlXCJdXG4gICAgICAgIHJlc3VsdC5jb3VudHJ5RmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjb3VudHJ5RmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY291bnRyeUZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb3VudHJ5RmlsdGVyLnB1c2goanNvbk9iamVjdFtcImNvdW50cnlGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlzUmZpZEF2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJpc1JmaWRBdmFpbGFibGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyVmVyc2lvbiB7XG4gICAgYXBpPzogc3RyaW5nXG4gICAgY29yZT86IHN0cmluZ1xuICAgIGNvcmVNb2RlPzogc3RyaW5nXG4gICAgZGF0YWJhc2U/OiBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2NSZWFkZXJWZXJzaW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyVmVyc2lvblxuXG4gICAgICAgIHJlc3VsdC5hcGkgPSBqc29uT2JqZWN0W1wiYXBpXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlID0ganNvbk9iamVjdFtcImNvcmVcIl1cbiAgICAgICAgcmVzdWx0LmNvcmVNb2RlID0ganNvbk9iamVjdFtcImNvcmVNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZSA9IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkYXRhYmFzZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25JbmZvIHtcbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG4gICAgdGFnPzogc3RyaW5nXG4gICAgc2Vzc2lvbkxvZ0ZvbGRlcj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUcmFuc2FjdGlvbkluZm8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUcmFuc2FjdGlvbkluZm9cblxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5zZXNzaW9uTG9nRm9sZGVyID0ganNvbk9iamVjdFtcInNlc3Npb25Mb2dGb2xkZXJcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICBjaGlwUGFnZT86IG51bWJlclxuICAgIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gICAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gICAgZ3JhcGhpY1Jlc3VsdD86IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuICAgIHRleHRSZXN1bHQ/OiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcbiAgICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBiYXJjb2RlUG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIG1yelBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFtdXG4gICAgcmF3UmVzdWx0Pzogc3RyaW5nXG4gICAgYnNpVHIwMzEzNVJlc3VsdHM/OiBzdHJpbmdcbiAgICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICAgIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG4gICAgdmRzRGF0YT86IFZEU0RhdGFcbiAgICBkdGNEYXRhPzogc3RyaW5nXG4gICAgdHJhbnNhY3Rpb25JbmZvPzogVHJhbnNhY3Rpb25JbmZvXG5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICAgICAgcmVzdWx0LmNoaXBQYWdlID0ganNvbk9iamVjdFtcImNoaXBQYWdlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSBqc29uT2JqZWN0W1wicHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZSA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVwiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgICAgICByZXN1bHQubW9yZVBhZ2VzQXZhaWxhYmxlID0ganNvbk9iamVjdFtcIm1vcmVQYWdlc0F2YWlsYWJsZVwiXVxuICAgICAgICByZXN1bHQuZ3JhcGhpY1Jlc3VsdCA9IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ3JhcGhpY1Jlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LnRleHRSZXN1bHQgPSBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInRleHRSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubXJ6UG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1Jlc3VsdCA9IGpzb25PYmplY3RbXCJyYXdSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmJzaVRyMDMxMzVSZXN1bHRzID0ganNvbk9iamVjdFtcImJzaVRyMDMxMzVSZXN1bHRzXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YXR1c1wiXSlcbiAgICAgICAgcmVzdWx0LnZkc25jRGF0YSA9IFZEU05DRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1widmRzbmNEYXRhXCJdKVxuICAgICAgICByZXN1bHQudmRzRGF0YSA9IFZEU0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInZkc0RhdGFcIl0pXG4gICAgICAgIHJlc3VsdC5kdGNEYXRhID0ganNvbk9iamVjdFtcImR0Y0RhdGFcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSW5mbyA9IFRyYW5zYWN0aW9uSW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JbmZvXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFTaXplIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYW1lcmFTaXplIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FtZXJhU2l6ZVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbmFsaXR5IHtcbiAgICBwaWN0dXJlT25Cb3VuZHNSZWFkeT86IGJvb2xlYW5cbiAgICBzaG93VG9yY2hCdXR0b24/OiBib29sZWFuXG4gICAgc2hvd0Nsb3NlQnV0dG9uPzogYm9vbGVhblxuICAgIHZpZGVvQ2FwdHVyZU1vdGlvbkNvbnRyb2w/OiBib29sZWFuXG4gICAgc2hvd0NhcHR1cmVCdXR0b24/OiBib29sZWFuXG4gICAgc2hvd0NoYW5nZUZyYW1lQnV0dG9uPzogYm9vbGVhblxuICAgIHNob3dTa2lwTmV4dFBhZ2VCdXR0b24/OiBib29sZWFuXG4gICAgdXNlQXV0aGVudGljYXRvcj86IGJvb2xlYW5cbiAgICBza2lwRm9jdXNpbmdGcmFtZXM/OiBib29sZWFuXG4gICAgc2hvd0NhbWVyYVN3aXRjaEJ1dHRvbj86IGJvb2xlYW5cbiAgICBkaXNwbGF5TWV0YWRhdGE/OiBib29sZWFuXG4gICAgaXNab29tRW5hYmxlZD86IGJvb2xlYW5cbiAgICBpc0NhbWVyYVRvcmNoQ2hlY2tEaXNhYmxlZD86IGJvb2xlYW5cbiAgICByZWNvcmRTY2FubmluZ1Byb2Nlc3M/OiBib29sZWFuXG4gICAgbWFudWFsTXVsdGlwYWdlTW9kZT86IGJvb2xlYW5cbiAgICBzaW5nbGVSZXN1bHQ/OiBib29sZWFuXG4gICAgdG9yY2hUdXJuZWRPbj86IGJvb2xlYW5cbiAgICBwcmV2ZW50U2NyZWVuUmVjb3JkaW5nPzogYm9vbGVhblxuICAgIGhvbWVJbmRpY2F0b3JBdXRvSGlkZT86IGJvb2xlYW5cbiAgICBoaWRlU3RhdHVzQmFyPzogYm9vbGVhblxuICAgIHNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tRGV0ZWN0PzogbnVtYmVyXG4gICAgc2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21TdGFydD86IG51bWJlclxuICAgIHJmaWRUaW1lb3V0PzogbnVtYmVyXG4gICAgZm9yY2VQYWdlc0NvdW50PzogbnVtYmVyXG4gICAgb3JpZW50YXRpb24/OiBudW1iZXJcbiAgICBjYXB0dXJlTW9kZT86IG51bWJlclxuICAgIGNhbWVyYU1vZGU/OiBudW1iZXJcbiAgICBjYW1lcmFQb3NpdGlvbklPUz86IG51bWJlclxuICAgIG1kbFRpbWVvdXQ/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZT86IHN0cmluZ1xuICAgIGJ0RGV2aWNlTmFtZT86IHN0cmluZ1xuICAgIHpvb21GYWN0b3I/OiBudW1iZXJcbiAgICBleHBvc3VyZT86IG51bWJlclxuICAgIHZpZGVvUmVjb3JkaW5nU2l6ZURvd25zY2FsZUZhY3Rvcj86IG51bWJlclxuICAgIGV4Y2x1ZGVkQ2FtZXJhMk1vZGVscz86IHN0cmluZ1tdXG4gICAgY2FtZXJhU2l6ZT86IENhbWVyYVNpemVcbiAgICB2aWRlb1Nlc3Npb25QcmVzZXQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRnVuY3Rpb25hbGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uYWxpdHlcblxuICAgICAgICByZXN1bHQucGljdHVyZU9uQm91bmRzUmVhZHkgPSBqc29uT2JqZWN0W1wicGljdHVyZU9uQm91bmRzUmVhZHlcIl1cbiAgICAgICAgcmVzdWx0LnNob3dUb3JjaEJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93VG9yY2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDbG9zZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2xvc2VCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnZpZGVvQ2FwdHVyZU1vdGlvbkNvbnRyb2wgPSBqc29uT2JqZWN0W1widmlkZW9DYXB0dXJlTW90aW9uQ29udHJvbFwiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDaGFuZ2VGcmFtZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2hhbmdlRnJhbWVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dTa2lwTmV4dFBhZ2VCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd1NraXBOZXh0UGFnZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQudXNlQXV0aGVudGljYXRvciA9IGpzb25PYmplY3RbXCJ1c2VBdXRoZW50aWNhdG9yXCJdXG4gICAgICAgIHJlc3VsdC5za2lwRm9jdXNpbmdGcmFtZXMgPSBqc29uT2JqZWN0W1wic2tpcEZvY3VzaW5nRnJhbWVzXCJdXG4gICAgICAgIHJlc3VsdC5zaG93Q2FtZXJhU3dpdGNoQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dDYW1lcmFTd2l0Y2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LmRpc3BsYXlNZXRhZGF0YSA9IGpzb25PYmplY3RbXCJkaXNwbGF5TWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmlzWm9vbUVuYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNab29tRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnJlY29yZFNjYW5uaW5nUHJvY2VzcyA9IGpzb25PYmplY3RbXCJyZWNvcmRTY2FubmluZ1Byb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbE11bHRpcGFnZU1vZGUgPSBqc29uT2JqZWN0W1wibWFudWFsTXVsdGlwYWdlTW9kZVwiXVxuICAgICAgICByZXN1bHQuc2luZ2xlUmVzdWx0ID0ganNvbk9iamVjdFtcInNpbmdsZVJlc3VsdFwiXVxuICAgICAgICByZXN1bHQudG9yY2hUdXJuZWRPbiA9IGpzb25PYmplY3RbXCJ0b3JjaFR1cm5lZE9uXCJdXG4gICAgICAgIHJlc3VsdC5wcmV2ZW50U2NyZWVuUmVjb3JkaW5nID0ganNvbk9iamVjdFtcInByZXZlbnRTY3JlZW5SZWNvcmRpbmdcIl1cbiAgICAgICAgcmVzdWx0LmhvbWVJbmRpY2F0b3JBdXRvSGlkZSA9IGpzb25PYmplY3RbXCJob21lSW5kaWNhdG9yQXV0b0hpZGVcIl1cbiAgICAgICAgcmVzdWx0LmhpZGVTdGF0dXNCYXIgPSBqc29uT2JqZWN0W1wiaGlkZVN0YXR1c0JhclwiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3QgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3RcIl1cbiAgICAgICAgcmVzdWx0LnNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnQgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21TdGFydFwiXVxuICAgICAgICByZXN1bHQucmZpZFRpbWVvdXQgPSBqc29uT2JqZWN0W1wicmZpZFRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LmZvcmNlUGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJmb3JjZVBhZ2VzQ291bnRcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcIm9yaWVudGF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlTW9kZSA9IGpzb25PYmplY3RbXCJjYXB0dXJlTW9kZVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhTW9kZSA9IGpzb25PYmplY3RbXCJjYW1lcmFNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQubWRsVGltZW91dCA9IGpzb25PYmplY3RbXCJtZGxUaW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZSA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZVwiXVxuICAgICAgICByZXN1bHQuYnREZXZpY2VOYW1lID0ganNvbk9iamVjdFtcImJ0RGV2aWNlTmFtZVwiXVxuICAgICAgICByZXN1bHQuem9vbUZhY3RvciA9IGpzb25PYmplY3RbXCJ6b29tRmFjdG9yXCJdXG4gICAgICAgIHJlc3VsdC5leHBvc3VyZSA9IGpzb25PYmplY3RbXCJleHBvc3VyZVwiXVxuICAgICAgICByZXN1bHQudmlkZW9SZWNvcmRpbmdTaXplRG93bnNjYWxlRmFjdG9yID0ganNvbk9iamVjdFtcInZpZGVvUmVjb3JkaW5nU2l6ZURvd25zY2FsZUZhY3RvclwiXVxuICAgICAgICByZXN1bHQuZXhjbHVkZWRDYW1lcmEyTW9kZWxzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJleGNsdWRlZENhbWVyYTJNb2RlbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJleGNsdWRlZENhbWVyYTJNb2RlbHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZXhjbHVkZWRDYW1lcmEyTW9kZWxzLnB1c2goanNvbk9iamVjdFtcImV4Y2x1ZGVkQ2FtZXJhMk1vZGVsc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY2FtZXJhU2l6ZSA9IENhbWVyYVNpemUuZnJvbUpzb24oanNvbk9iamVjdFtcImNhbWVyYVNpemVcIl0pXG4gICAgICAgIHJlc3VsdC52aWRlb1Nlc3Npb25QcmVzZXQgPSBqc29uT2JqZWN0W1widmlkZW9TZXNzaW9uUHJlc2V0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsYXJlc0NoZWNrUGFyYW1zIHtcbiAgICBpbWdNYXJnaW5QYXJ0PzogbnVtYmVyXG4gICAgbWF4R2xhcmluZ1BhcnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogR2xhcmVzQ2hlY2tQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBHbGFyZXNDaGVja1BhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5pbWdNYXJnaW5QYXJ0ID0ganNvbk9iamVjdFtcImltZ01hcmdpblBhcnRcIl1cbiAgICAgICAgcmVzdWx0Lm1heEdsYXJpbmdQYXJ0ID0ganNvbk9iamVjdFtcIm1heEdsYXJpbmdQYXJ0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9jY2x1c2lvbkNoZWNrUGFyYW1zIHtcbiAgICBtYXhPY2NsdXNpb25QYXJ0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE9jY2x1c2lvbkNoZWNrUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT2NjbHVzaW9uQ2hlY2tQYXJhbXNcblxuICAgICAgICByZXN1bHQubWF4T2NjbHVzaW9uUGFydCA9IGpzb25PYmplY3RbXCJtYXhPY2NsdXNpb25QYXJ0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUUEge1xuICAgIGRwaVRocmVzaG9sZD86IG51bWJlclxuICAgIGFuZ2xlVGhyZXNob2xkPzogbnVtYmVyXG4gICAgZm9jdXNDaGVjaz86IGJvb2xlYW5cbiAgICBnbGFyZXNDaGVjaz86IGJvb2xlYW5cbiAgICBnbGFyZXNDaGVja1BhcmFtcz86IEdsYXJlc0NoZWNrUGFyYW1zXG4gICAgb2NjbHVzaW9uQ2hlY2tQYXJhbXM/OiBPY2NsdXNpb25DaGVja1BhcmFtc1xuICAgIGNvbG9ybmVzc0NoZWNrPzogYm9vbGVhblxuICAgIHNjcmVlbkNhcHR1cmU/OiBib29sZWFuXG4gICAgZXhwZWN0ZWRQYXNzPzogbnVtYmVyW11cbiAgICBkb2N1bWVudFBvc2l0aW9uSW5kZW50PzogbnVtYmVyXG4gICAgYnJpZ2h0bmVzc1RocmVzaG9sZD86IG51bWJlclxuICAgIG9jY2x1c2lvbkNoZWNrPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVFBIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRQVxuXG4gICAgICAgIHJlc3VsdC5kcGlUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiZHBpVGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZVRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJhbmdsZVRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuZm9jdXNDaGVjayA9IGpzb25PYmplY3RbXCJmb2N1c0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5nbGFyZXNDaGVjayA9IGpzb25PYmplY3RbXCJnbGFyZXNDaGVja1wiXVxuICAgICAgICByZXN1bHQuZ2xhcmVzQ2hlY2tQYXJhbXMgPSBHbGFyZXNDaGVja1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ2xhcmVzQ2hlY2tQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5vY2NsdXNpb25DaGVja1BhcmFtcyA9IE9jY2x1c2lvbkNoZWNrUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvY2NsdXNpb25DaGVja1BhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmNvbG9ybmVzc0NoZWNrID0ganNvbk9iamVjdFtcImNvbG9ybmVzc0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5zY3JlZW5DYXB0dXJlID0ganNvbk9iamVjdFtcInNjcmVlbkNhcHR1cmVcIl1cbiAgICAgICAgcmVzdWx0LmV4cGVjdGVkUGFzcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXhwZWN0ZWRQYXNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXhwZWN0ZWRQYXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmV4cGVjdGVkUGFzcy5wdXNoKGpzb25PYmplY3RbXCJleHBlY3RlZFBhc3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb25JbmRlbnQgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvbkluZGVudFwiXVxuICAgICAgICByZXN1bHQuYnJpZ2h0bmVzc1RocmVzaG9sZCA9IGpzb25PYmplY3RbXCJicmlnaHRuZXNzVGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5vY2NsdXNpb25DaGVjayA9IGpzb25PYmplY3RbXCJvY2NsdXNpb25DaGVja1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEUGFyYW1zIHtcbiAgICBwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURQYXJhbXNcblxuICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2RlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlcy5wdXNoKGpzb25PYmplY3RbXCJwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VBcGlTZWFyY2hQYXJhbXMge1xuICAgIGxpbWl0PzogbnVtYmVyXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgZ3JvdXBJZHM/OiBzdHJpbmdbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQXBpU2VhcmNoUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUFwaVNlYXJjaFBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5saW1pdCA9IGpzb25PYmplY3RbXCJsaW1pdFwiXVxuICAgICAgICByZXN1bHQudGhyZXNob2xkID0ganNvbk9iamVjdFtcInRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBJZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHMucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUFwaVBhcmFtcyB7XG4gICAgdXJsPzogc3RyaW5nXG4gICAgbW9kZT86IHN0cmluZ1xuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIHNlYXJjaFBhcmFtcz86IEZhY2VBcGlTZWFyY2hQYXJhbXNcbiAgICBzZXJ2aWNlVGltZW91dD86IG51bWJlclxuICAgIHByb3h5Pzogc3RyaW5nXG4gICAgcHJveHlQYXNzd29yZD86IHN0cmluZ1xuICAgIHByb3h5VHlwZT86IG51bWJlclxuICAgIGxpdmVuZXNzVHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQXBpUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUFwaVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5tb2RlID0ganNvbk9iamVjdFtcIm1vZGVcIl1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LnNlYXJjaFBhcmFtcyA9IEZhY2VBcGlTZWFyY2hQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlYXJjaFBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LnNlcnZpY2VUaW1lb3V0ID0ganNvbk9iamVjdFtcInNlcnZpY2VUaW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5wcm94eSA9IGpzb25PYmplY3RbXCJwcm94eVwiXVxuICAgICAgICByZXN1bHQucHJveHlQYXNzd29yZCA9IGpzb25PYmplY3RbXCJwcm94eVBhc3N3b3JkXCJdXG4gICAgICAgIHJlc3VsdC5wcm94eVR5cGUgPSBqc29uT2JqZWN0W1wicHJveHlUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc1RyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NUcmFuc2FjdGlvbklkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnIHtcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBodHRwSGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICByZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb24/OiBib29sZWFuXG4gICAgbWRsVmVyaWZpY2F0aW9uPzogYm9vbGVhblxuICAgIHRpbWVvdXRDb25uZWN0aW9uPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQmFja2VuZFByb2Nlc3NpbmdDb25maWdcblxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuaHR0cEhlYWRlcnMgPSBqc29uT2JqZWN0W1wiaHR0cEhlYWRlcnNcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRTZXJ2ZXJTaWRlQ2hpcFZlcmlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJyZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0Lm1kbFZlcmlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJtZGxWZXJpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXRDb25uZWN0aW9uID0ganNvbk9iamVjdFtcInRpbWVvdXRDb25uZWN0aW9uXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJzaSB7XG4gICAgZ2VuZXJhdGVSZXN1bHQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJzaSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJzaVxuXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZVJlc3VsdCA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZVJlc3VsdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1BhcmFtcyB7XG4gICAgY2hlY2tPVkk/OiBib29sZWFuXG4gICAgY2hlY2tNTEk/OiBib29sZWFuXG4gICAgY2hlY2tIb2xvPzogYm9vbGVhblxuICAgIGNoZWNrRUQ/OiBib29sZWFuXG4gICAgY2hlY2tCbGFja0FuZFdoaXRlQ29weT86IGJvb2xlYW5cbiAgICBjaGVja0R5bmFwcmludD86IGJvb2xlYW5cbiAgICBjaGVja0dlb21ldHJ5PzogYm9vbGVhblxuICAgIGNoZWNrQmFyY29kZUJhY2tncm91bmQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NQYXJhbXNcblxuICAgICAgICByZXN1bHQuY2hlY2tPVkkgPSBqc29uT2JqZWN0W1wiY2hlY2tPVklcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrTUxJID0ganNvbk9iamVjdFtcImNoZWNrTUxJXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0hvbG8gPSBqc29uT2JqZWN0W1wiY2hlY2tIb2xvXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0VEID0ganNvbk9iamVjdFtcImNoZWNrRURcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrQmxhY2tBbmRXaGl0ZUNvcHkgPSBqc29uT2JqZWN0W1wiY2hlY2tCbGFja0FuZFdoaXRlQ29weVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tEeW5hcHJpbnQgPSBqc29uT2JqZWN0W1wiY2hlY2tEeW5hcHJpbnRcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrR2VvbWV0cnkgPSBqc29uT2JqZWN0W1wiY2hlY2tHZW9tZXRyeVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tCYXJjb2RlQmFja2dyb3VuZCA9IGpzb25PYmplY3RbXCJjaGVja0JhcmNvZGVCYWNrZ3JvdW5kXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2l0eVByb3BlcnRpZXNQYXJhbXMge1xuICAgIGNoZWNrSG9sZGVyc1NpZ25hdHVyZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aGVudGljaXR5UHJvcGVydGllc1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhlbnRpY2l0eVByb3BlcnRpZXNQYXJhbXNcblxuICAgICAgICByZXN1bHQuY2hlY2tIb2xkZXJzU2lnbmF0dXJlID0ganNvbk9iamVjdFtcImNoZWNrSG9sZGVyc1NpZ25hdHVyZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNpdHlQYXJhbXMge1xuICAgIHVzZUxpdmVuZXNzQ2hlY2s/OiBib29sZWFuXG4gICAgbGl2ZW5lc3NQYXJhbXM/OiBMaXZlbmVzc1BhcmFtc1xuICAgIGNoZWNrVVZMdW1pbmlzY2VuY2U/OiBib29sZWFuXG4gICAgY2hlY2tJUkI5MDA/OiBib29sZWFuXG4gICAgY2hlY2tJbWFnZVBhdHRlcm5zPzogYm9vbGVhblxuICAgIGNoZWNrRmliZXJzPzogYm9vbGVhblxuICAgIGNoZWNrRXh0TVJaPzogYm9vbGVhblxuICAgIGNoZWNrRXh0T0NSPzogYm9vbGVhblxuICAgIGNoZWNrQXhpYWw/OiBib29sZWFuXG4gICAgY2hlY2tCYXJjb2RlRm9ybWF0PzogYm9vbGVhblxuICAgIGNoZWNrSVJWaXNpYmlsaXR5PzogYm9vbGVhblxuICAgIGNoZWNrSVBJPzogYm9vbGVhblxuICAgIGNoZWNrUGhvdG9FbWJlZGRpbmc/OiBib29sZWFuXG4gICAgY2hlY2tQaG90b0NvbXBhcmlzb24/OiBib29sZWFuXG4gICAgY2hlY2tMZXR0ZXJTY3JlZW4/OiBib29sZWFuXG4gICAgY2hlY2tTZWN1cml0eVRleHQ/OiBib29sZWFuXG4gICAgY2hlY2tQcm9wZXJ0aWVzPzogYm9vbGVhblxuICAgIHByb3BlcnRpZXNQYXJhbXM/OiBBdXRoZW50aWNpdHlQcm9wZXJ0aWVzUGFyYW1zXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF1dGhlbnRpY2l0eVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhlbnRpY2l0eVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC51c2VMaXZlbmVzc0NoZWNrID0ganNvbk9iamVjdFtcInVzZUxpdmVuZXNzQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzUGFyYW1zID0gTGl2ZW5lc3NQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcImxpdmVuZXNzUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuY2hlY2tVVkx1bWluaXNjZW5jZSA9IGpzb25PYmplY3RbXCJjaGVja1VWTHVtaW5pc2NlbmNlXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0lSQjkwMCA9IGpzb25PYmplY3RbXCJjaGVja0lSQjkwMFwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJbWFnZVBhdHRlcm5zID0ganNvbk9iamVjdFtcImNoZWNrSW1hZ2VQYXR0ZXJuc1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tGaWJlcnMgPSBqc29uT2JqZWN0W1wiY2hlY2tGaWJlcnNcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrRXh0TVJaID0ganNvbk9iamVjdFtcImNoZWNrRXh0TVJaXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0V4dE9DUiA9IGpzb25PYmplY3RbXCJjaGVja0V4dE9DUlwiXVxuICAgICAgICByZXN1bHQuY2hlY2tBeGlhbCA9IGpzb25PYmplY3RbXCJjaGVja0F4aWFsXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0JhcmNvZGVGb3JtYXQgPSBqc29uT2JqZWN0W1wiY2hlY2tCYXJjb2RlRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0lSVmlzaWJpbGl0eSA9IGpzb25PYmplY3RbXCJjaGVja0lSVmlzaWJpbGl0eVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJUEkgPSBqc29uT2JqZWN0W1wiY2hlY2tJUElcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrUGhvdG9FbWJlZGRpbmcgPSBqc29uT2JqZWN0W1wiY2hlY2tQaG90b0VtYmVkZGluZ1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tQaG90b0NvbXBhcmlzb24gPSBqc29uT2JqZWN0W1wiY2hlY2tQaG90b0NvbXBhcmlzb25cIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrTGV0dGVyU2NyZWVuID0ganNvbk9iamVjdFtcImNoZWNrTGV0dGVyU2NyZWVuXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1NlY3VyaXR5VGV4dCA9IGpzb25PYmplY3RbXCJjaGVja1NlY3VyaXR5VGV4dFwiXVxuICAgICAgICByZXN1bHQuY2hlY2tQcm9wZXJ0aWVzID0ganNvbk9iamVjdFtcImNoZWNrUHJvcGVydGllc1wiXVxuICAgICAgICByZXN1bHQucHJvcGVydGllc1BhcmFtcyA9IEF1dGhlbnRpY2l0eVByb3BlcnRpZXNQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInByb3BlcnRpZXNQYXJhbXNcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2Nlc3NQYXJhbXMge1xuICAgIG11bHRpcGFnZVByb2Nlc3Npbmc/OiBib29sZWFuXG4gICAgbG9ncz86IGJvb2xlYW5cbiAgICBkZWJ1Z1NhdmVJbWFnZXM/OiBib29sZWFuXG4gICAgZGVidWdTYXZlTG9ncz86IGJvb2xlYW5cbiAgICByZXR1cm5VbmNyb3BwZWRJbWFnZT86IGJvb2xlYW5cbiAgICB1dlRvcmNoRW5hYmxlZD86IGJvb2xlYW5cbiAgICBkZWJ1Z1NhdmVDcm9wcGVkSW1hZ2VzPzogYm9vbGVhblxuICAgIGRpc2FibGVGb2N1c2luZ0NoZWNrPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZVJGSURTZXNzaW9uPzogYm9vbGVhblxuICAgIGRvdWJsZVBhZ2VTcHJlYWQ/OiBib29sZWFuXG4gICAgbWFudWFsQ3JvcD86IGJvb2xlYW5cbiAgICBpbnRlZ3JhbEltYWdlPzogYm9vbGVhblxuICAgIHJldHVybkNyb3BwZWRCYXJjb2RlPzogYm9vbGVhblxuICAgIGNoZWNrUmVxdWlyZWRUZXh0RmllbGRzPzogYm9vbGVhblxuICAgIGRlcGVyc29uYWxpemVMb2c/OiBib29sZWFuXG4gICAgZ2VuZXJhdGVEb3VibGVQYWdlU3ByZWFkSW1hZ2U/OiBib29sZWFuXG4gICAgYWxyZWFkeUNyb3BwZWQ/OiBib29sZWFuXG4gICAgbWF0Y2hUZXh0RmllbGRNYXNrPzogYm9vbGVhblxuICAgIHVwZGF0ZU9DUlZhbGlkaXR5QnlHbGFyZT86IGJvb2xlYW5cbiAgICBub0dyYXBoaWNzPzogYm9vbGVhblxuICAgIG11bHRpRG9jT25JbWFnZT86IGJvb2xlYW5cbiAgICBwYXJzZUJhcmNvZGVzPzogYm9vbGVhblxuICAgIHNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3M/OiBib29sZWFuXG4gICAgZGlzYWJsZVBlcmZvcmF0aW9uT0NSPzogYm9vbGVhblxuICAgIHJlc3BlY3RJbWFnZVF1YWxpdHk/OiBib29sZWFuXG4gICAgc3RyaWN0SW1hZ2VRdWFsaXR5PzogYm9vbGVhblxuICAgIHNwbGl0TmFtZXM/OiBib29sZWFuXG4gICAgdXNlRmFjZUFwaT86IGJvb2xlYW5cbiAgICB1c2VBdXRoZW50aWNpdHlDaGVjaz86IGJvb2xlYW5cbiAgICBjaGVja0hvbG9ncmFtPzogYm9vbGVhblxuICAgIGdlbmVyYXRlTnVtZXJpY0NvZGVzPzogYm9vbGVhblxuICAgIHN0cmljdEJhcmNvZGVEaWdpdGFsU2lnbmF0dXJlQ2hlY2s/OiBib29sZWFuXG4gICAgc2VsZWN0TG9uZ2VzdE5hbWVzPzogYm9vbGVhblxuICAgIGdlbmVyYXRlRFRDVkM/OiBib29sZWFuXG4gICAgc3RyaWN0RExDYXRlZ29yeUV4cGlyeT86IGJvb2xlYW5cbiAgICBnZW5lcmF0ZUFscGhhMkNvZGVzPzogYm9vbGVhblxuICAgIGRpc2FibGVBdXRoUmVzb2x1dGlvbkZpbHRlcj86IGJvb2xlYW5cbiAgICBzdHJpY3RTZWN1cml0eUNoZWNrcz86IGJvb2xlYW5cbiAgICByZXR1cm5UcmFuc2xpdGVyYXRlZEZpZWxkcz86IGJvb2xlYW5cbiAgICBjaGVja0NhcHR1cmVQcm9jZXNzSW50ZWdyaXR5PzogYm9vbGVhblxuICAgIHN0cmljdEV4cGlyeURhdGU/OiBib29sZWFuXG4gICAgZGVidWdTYXZlQmluYXJ5U2Vzc2lvbj86IGJvb2xlYW5cbiAgICBjaGVja1ZEUz86IGJvb2xlYW5cbiAgICBzdHJpY3RBZ2VDaGVjaz86IGJvb2xlYW5cbiAgICBiYXJjb2RlUGFyc2VyVHlwZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlQW5nbGU/OiBudW1iZXJcbiAgICBtaW5EUEk/OiBudW1iZXJcbiAgICBpbWFnZURwaU91dE1heD86IG51bWJlclxuICAgIGZvcmNlRG9jRm9ybWF0PzogbnVtYmVyXG4gICAgc2hpZnRFeHBpcnlEYXRlPzogbnVtYmVyXG4gICAgbWluaW1hbEhvbGRlckFnZT86IG51bWJlclxuICAgIGltYWdlT3V0cHV0TWF4SGVpZ2h0PzogbnVtYmVyXG4gICAgaW1hZ2VPdXRwdXRNYXhXaWR0aD86IG51bWJlclxuICAgIHByb2Nlc3NBdXRoPzogbnVtYmVyXG4gICAgY29udmVydENhc2U/OiBudW1iZXJcbiAgICBsb2dMZXZlbD86IHN0cmluZ1xuICAgIG1yekRldGVjdE1vZGU/OiBudW1iZXJcbiAgICBtZWFzdXJlU3lzdGVtPzogbnVtYmVyXG4gICAgZm9yY2VEb2NJRD86IG51bWJlclxuICAgIHBkZlBhZ2VzTGltaXQ/OiBudW1iZXJcbiAgICBkYXRlRm9ybWF0Pzogc3RyaW5nXG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBjYXB0dXJlQnV0dG9uU2NlbmFyaW8/OiBzdHJpbmdcbiAgICB0aW1lb3V0PzogbnVtYmVyXG4gICAgdGltZW91dEZyb21GaXJzdERldGVjdD86IG51bWJlclxuICAgIHRpbWVvdXRGcm9tRmlyc3REb2NUeXBlPzogbnVtYmVyXG4gICAgZG9jdW1lbnRBcmVhTWluPzogbnVtYmVyXG4gICAgdGltZW91dExpdmVuZXNzPzogbnVtYmVyXG4gICAgZG9jdW1lbnRJRExpc3Q/OiBudW1iZXJbXVxuICAgIGJhcmNvZGVUeXBlcz86IG51bWJlcltdXG4gICAgZmllbGRUeXBlc0ZpbHRlcj86IG51bWJlcltdXG4gICAgcmVzdWx0VHlwZU91dHB1dD86IG51bWJlcltdXG4gICAgZG9jdW1lbnRHcm91cEZpbHRlcj86IG51bWJlcltdXG4gICAgbGNpZElnbm9yZUZpbHRlcj86IG51bWJlcltdXG4gICAgbGNpZEZpbHRlcj86IG51bWJlcltdXG4gICAgZmllbGRUeXBlc0lnbm9yZUZpbHRlcj86IG51bWJlcltdXG4gICAgbXJ6Rm9ybWF0c0ZpbHRlcj86IHN0cmluZ1tdXG4gICAgaW1hZ2VRQT86IEltYWdlUUFcbiAgICByZmlkUGFyYW1zPzogUkZJRFBhcmFtc1xuICAgIGZhY2VBcGlQYXJhbXM/OiBGYWNlQXBpUGFyYW1zXG4gICAgYmFja2VuZFByb2Nlc3NpbmdDb25maWc/OiBCYWNrZW5kUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIGJzaVRyMDMxMzU/OiBCc2lcbiAgICBhdXRoZW50aWNpdHlQYXJhbXM/OiBBdXRoZW50aWNpdHlQYXJhbXNcbiAgICBjdXN0b21QYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFByb2Nlc3NQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm9jZXNzUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZVByb2Nlc3NpbmcgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlUHJvY2Vzc2luZ1wiXVxuICAgICAgICByZXN1bHQubG9ncyA9IGpzb25PYmplY3RbXCJsb2dzXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVJbWFnZXMgPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlSW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVMb2dzID0ganNvbk9iamVjdFtcImRlYnVnU2F2ZUxvZ3NcIl1cbiAgICAgICAgcmVzdWx0LnJldHVyblVuY3JvcHBlZEltYWdlID0ganNvbk9iamVjdFtcInJldHVyblVuY3JvcHBlZEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC51dlRvcmNoRW5hYmxlZCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlQ3JvcHBlZEltYWdlcyA9IGpzb25PYmplY3RbXCJkZWJ1Z1NhdmVDcm9wcGVkSW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5kaXNhYmxlRm9jdXNpbmdDaGVjayA9IGpzb25PYmplY3RbXCJkaXNhYmxlRm9jdXNpbmdDaGVja1wiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlUkZJRFNlc3Npb24gPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlUkZJRFNlc3Npb25cIl1cbiAgICAgICAgcmVzdWx0LmRvdWJsZVBhZ2VTcHJlYWQgPSBqc29uT2JqZWN0W1wiZG91YmxlUGFnZVNwcmVhZFwiXVxuICAgICAgICByZXN1bHQubWFudWFsQ3JvcCA9IGpzb25PYmplY3RbXCJtYW51YWxDcm9wXCJdXG4gICAgICAgIHJlc3VsdC5pbnRlZ3JhbEltYWdlID0ganNvbk9iamVjdFtcImludGVncmFsSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnJldHVybkNyb3BwZWRCYXJjb2RlID0ganNvbk9iamVjdFtcInJldHVybkNyb3BwZWRCYXJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1JlcXVpcmVkVGV4dEZpZWxkcyA9IGpzb25PYmplY3RbXCJjaGVja1JlcXVpcmVkVGV4dEZpZWxkc1wiXVxuICAgICAgICByZXN1bHQuZGVwZXJzb25hbGl6ZUxvZyA9IGpzb25PYmplY3RbXCJkZXBlcnNvbmFsaXplTG9nXCJdXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZSA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZVwiXVxuICAgICAgICByZXN1bHQuYWxyZWFkeUNyb3BwZWQgPSBqc29uT2JqZWN0W1wiYWxyZWFkeUNyb3BwZWRcIl1cbiAgICAgICAgcmVzdWx0Lm1hdGNoVGV4dEZpZWxkTWFzayA9IGpzb25PYmplY3RbXCJtYXRjaFRleHRGaWVsZE1hc2tcIl1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZU9DUlZhbGlkaXR5QnlHbGFyZSA9IGpzb25PYmplY3RbXCJ1cGRhdGVPQ1JWYWxpZGl0eUJ5R2xhcmVcIl1cbiAgICAgICAgcmVzdWx0Lm5vR3JhcGhpY3MgPSBqc29uT2JqZWN0W1wibm9HcmFwaGljc1wiXVxuICAgICAgICByZXN1bHQubXVsdGlEb2NPbkltYWdlID0ganNvbk9iamVjdFtcIm11bHRpRG9jT25JbWFnZVwiXVxuICAgICAgICByZXN1bHQucGFyc2VCYXJjb2RlcyA9IGpzb25PYmplY3RbXCJwYXJzZUJhcmNvZGVzXCJdXG4gICAgICAgIHJlc3VsdC5zaG91bGRSZXR1cm5QYWNrYWdlRm9yUmVwcm9jZXNzID0ganNvbk9iamVjdFtcInNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVQZXJmb3JhdGlvbk9DUiA9IGpzb25PYmplY3RbXCJkaXNhYmxlUGVyZm9yYXRpb25PQ1JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3BlY3RJbWFnZVF1YWxpdHkgPSBqc29uT2JqZWN0W1wicmVzcGVjdEltYWdlUXVhbGl0eVwiXVxuICAgICAgICByZXN1bHQuc3RyaWN0SW1hZ2VRdWFsaXR5ID0ganNvbk9iamVjdFtcInN0cmljdEltYWdlUXVhbGl0eVwiXVxuICAgICAgICByZXN1bHQuc3BsaXROYW1lcyA9IGpzb25PYmplY3RbXCJzcGxpdE5hbWVzXCJdXG4gICAgICAgIHJlc3VsdC51c2VGYWNlQXBpID0ganNvbk9iamVjdFtcInVzZUZhY2VBcGlcIl1cbiAgICAgICAgcmVzdWx0LnVzZUF1dGhlbnRpY2l0eUNoZWNrID0ganNvbk9iamVjdFtcInVzZUF1dGhlbnRpY2l0eUNoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0hvbG9ncmFtID0ganNvbk9iamVjdFtcImNoZWNrSG9sb2dyYW1cIl1cbiAgICAgICAgcmVzdWx0LmdlbmVyYXRlTnVtZXJpY0NvZGVzID0ganNvbk9iamVjdFtcImdlbmVyYXRlTnVtZXJpY0NvZGVzXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RCYXJjb2RlRGlnaXRhbFNpZ25hdHVyZUNoZWNrID0ganNvbk9iamVjdFtcInN0cmljdEJhcmNvZGVEaWdpdGFsU2lnbmF0dXJlQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LnNlbGVjdExvbmdlc3ROYW1lcyA9IGpzb25PYmplY3RbXCJzZWxlY3RMb25nZXN0TmFtZXNcIl1cbiAgICAgICAgcmVzdWx0LmdlbmVyYXRlRFRDVkMgPSBqc29uT2JqZWN0W1wiZ2VuZXJhdGVEVENWQ1wiXVxuICAgICAgICByZXN1bHQuc3RyaWN0RExDYXRlZ29yeUV4cGlyeSA9IGpzb25PYmplY3RbXCJzdHJpY3RETENhdGVnb3J5RXhwaXJ5XCJdXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZUFscGhhMkNvZGVzID0ganNvbk9iamVjdFtcImdlbmVyYXRlQWxwaGEyQ29kZXNcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVBdXRoUmVzb2x1dGlvbkZpbHRlciA9IGpzb25PYmplY3RbXCJkaXNhYmxlQXV0aFJlc29sdXRpb25GaWx0ZXJcIl1cbiAgICAgICAgcmVzdWx0LnN0cmljdFNlY3VyaXR5Q2hlY2tzID0ganNvbk9iamVjdFtcInN0cmljdFNlY3VyaXR5Q2hlY2tzXCJdXG4gICAgICAgIHJlc3VsdC5yZXR1cm5UcmFuc2xpdGVyYXRlZEZpZWxkcyA9IGpzb25PYmplY3RbXCJyZXR1cm5UcmFuc2xpdGVyYXRlZEZpZWxkc1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tDYXB0dXJlUHJvY2Vzc0ludGVncml0eSA9IGpzb25PYmplY3RbXCJjaGVja0NhcHR1cmVQcm9jZXNzSW50ZWdyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RFeHBpcnlEYXRlID0ganNvbk9iamVjdFtcInN0cmljdEV4cGlyeURhdGVcIl1cbiAgICAgICAgcmVzdWx0LmRlYnVnU2F2ZUJpbmFyeVNlc3Npb24gPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlQmluYXJ5U2Vzc2lvblwiXVxuICAgICAgICByZXN1bHQuY2hlY2tWRFMgPSBqc29uT2JqZWN0W1wiY2hlY2tWRFNcIl1cbiAgICAgICAgcmVzdWx0LnN0cmljdEFnZUNoZWNrID0ganNvbk9iamVjdFtcInN0cmljdEFnZUNoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUGFyc2VyVHlwZSA9IGpzb25PYmplY3RbXCJiYXJjb2RlUGFyc2VyVHlwZVwiXVxuICAgICAgICByZXN1bHQucGVyc3BlY3RpdmVBbmdsZSA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZUFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5taW5EUEkgPSBqc29uT2JqZWN0W1wibWluRFBJXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZURwaU91dE1heCA9IGpzb25PYmplY3RbXCJpbWFnZURwaU91dE1heFwiXVxuICAgICAgICByZXN1bHQuZm9yY2VEb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9yY2VEb2NGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LnNoaWZ0RXhwaXJ5RGF0ZSA9IGpzb25PYmplY3RbXCJzaGlmdEV4cGlyeURhdGVcIl1cbiAgICAgICAgcmVzdWx0Lm1pbmltYWxIb2xkZXJBZ2UgPSBqc29uT2JqZWN0W1wibWluaW1hbEhvbGRlckFnZVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VPdXRwdXRNYXhIZWlnaHQgPSBqc29uT2JqZWN0W1wiaW1hZ2VPdXRwdXRNYXhIZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlT3V0cHV0TWF4V2lkdGggPSBqc29uT2JqZWN0W1wiaW1hZ2VPdXRwdXRNYXhXaWR0aFwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc0F1dGggPSBqc29uT2JqZWN0W1wicHJvY2Vzc0F1dGhcIl1cbiAgICAgICAgcmVzdWx0LmNvbnZlcnRDYXNlID0ganNvbk9iamVjdFtcImNvbnZlcnRDYXNlXCJdXG4gICAgICAgIHJlc3VsdC5sb2dMZXZlbCA9IGpzb25PYmplY3RbXCJsb2dMZXZlbFwiXVxuICAgICAgICByZXN1bHQubXJ6RGV0ZWN0TW9kZSA9IGpzb25PYmplY3RbXCJtcnpEZXRlY3RNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZWFzdXJlU3lzdGVtID0ganNvbk9iamVjdFtcIm1lYXN1cmVTeXN0ZW1cIl1cbiAgICAgICAgcmVzdWx0LmZvcmNlRG9jSUQgPSBqc29uT2JqZWN0W1wiZm9yY2VEb2NJRFwiXVxuICAgICAgICByZXN1bHQucGRmUGFnZXNMaW1pdCA9IGpzb25PYmplY3RbXCJwZGZQYWdlc0xpbWl0XCJdXG4gICAgICAgIHJlc3VsdC5kYXRlRm9ybWF0ID0ganNvbk9iamVjdFtcImRhdGVGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlQnV0dG9uU2NlbmFyaW8gPSBqc29uT2JqZWN0W1wiY2FwdHVyZUJ1dHRvblNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC50aW1lb3V0ID0ganNvbk9iamVjdFtcInRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXRGcm9tRmlyc3REZXRlY3QgPSBqc29uT2JqZWN0W1widGltZW91dEZyb21GaXJzdERldGVjdFwiXVxuICAgICAgICByZXN1bHQudGltZW91dEZyb21GaXJzdERvY1R5cGUgPSBqc29uT2JqZWN0W1widGltZW91dEZyb21GaXJzdERvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50QXJlYU1pbiA9IGpzb25PYmplY3RbXCJkb2N1bWVudEFyZWFNaW5cIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXRMaXZlbmVzcyA9IGpzb25PYmplY3RbXCJ0aW1lb3V0TGl2ZW5lc3NcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50SURMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudElETGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50SURMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50SURMaXN0LnB1c2goanNvbk9iamVjdFtcImRvY3VtZW50SURMaXN0XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5iYXJjb2RlVHlwZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJhcmNvZGVUeXBlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5iYXJjb2RlVHlwZXMucHVzaChqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGVzRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZFR5cGVzRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRUeXBlc0ZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZFR5cGVzRmlsdGVyLnB1c2goanNvbk9iamVjdFtcImZpZWxkVHlwZXNGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFR5cGVPdXRwdXQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInJlc3VsdFR5cGVPdXRwdXRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJyZXN1bHRUeXBlT3V0cHV0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlc3VsdFR5cGVPdXRwdXQucHVzaChqc29uT2JqZWN0W1wicmVzdWx0VHlwZU91dHB1dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRHcm91cEZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRHcm91cEZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50R3JvdXBGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRHcm91cEZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJkb2N1bWVudEdyb3VwRmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sY2lkSWdub3JlRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsY2lkSWdub3JlRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGNpZElnbm9yZUZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5sY2lkSWdub3JlRmlsdGVyLnB1c2goanNvbk9iamVjdFtcImxjaWRJZ25vcmVGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxjaWRGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxjaWRGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsY2lkRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxjaWRGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wibGNpZEZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlc0lnbm9yZUZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRUeXBlc0lnbm9yZUZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkVHlwZXNJZ25vcmVGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRUeXBlc0lnbm9yZUZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJmaWVsZFR5cGVzSWdub3JlRmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpGb3JtYXRzRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6Rm9ybWF0c0ZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyLnB1c2goanNvbk9iamVjdFtcIm1yekZvcm1hdHNGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBJbWFnZVFBLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVFBXCJdKVxuICAgICAgICByZXN1bHQucmZpZFBhcmFtcyA9IFJGSURQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlQXBpUGFyYW1zID0gRmFjZUFwaVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZUFwaVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnID0gQmFja2VuZFByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcImJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuYnNpVHIwMzEzNSA9IEJzaS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYnNpVHIwMzEzNVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVBhcmFtcyA9IEF1dGhlbnRpY2l0eVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXV0aGVudGljaXR5UGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tUGFyYW1zID0ganNvbk9iamVjdFtcImN1c3RvbVBhcmFtc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb250IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgc2l6ZT86IG51bWJlclxuICAgIHN0eWxlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZvbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGb250XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IGpzb25PYmplY3RbXCJzaXplXCJdXG4gICAgICAgIHJlc3VsdC5zdHlsZSA9IGpzb25PYmplY3RbXCJzdHlsZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uQ29sb3JzIHtcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0PzogbnVtYmVyXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0Jhcj86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJCYWNrZ3JvdW5kPzogbnVtYmVyXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5SZXN1bHRMYWJlbFRleHQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlbkxvYWRpbmdCYXI/OiBudW1iZXJcbiAgICByZmlkRW5hYmxlTmZjVGl0bGVUZXh0PzogbnVtYmVyXG4gICAgcmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dD86IG51bWJlclxuICAgIHJmaWRFbmFibGVOZmNCdXR0b25UZXh0PzogbnVtYmVyXG4gICAgcmZpZEVuYWJsZU5mY0J1dHRvbkJhY2tncm91bmQ/OiBudW1iZXJcbiAgICBuZXh0UGFnZUlkQ2FyZEZyb250PzogbnVtYmVyXG4gICAgbmV4dFBhZ2VJZENhcmRCYWNrPzogbnVtYmVyXG4gICAgbmV4dFBhZ2VQYXNzcG9ydFNoaWZ0PzogbnVtYmVyXG4gICAgbmV4dFBhZ2VQYXNzcG9ydEZsaXA/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvbkNvbG9ycyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25Db2xvcnNcblxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuQmFja2dyb3VuZFwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dFwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxCYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsQmFja2dyb3VuZFwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsVGV4dCA9IGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJCYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJCYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dCA9IGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dFwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Mb2FkaW5nQmFyID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuTG9hZGluZ0JhclwiXVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY1RpdGxlVGV4dCA9IGpzb25PYmplY3RbXCJyZmlkRW5hYmxlTmZjVGl0bGVUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0ID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNCdXR0b25UZXh0ID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNCdXR0b25UZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZCA9IGpzb25PYmplY3RbXCJyZmlkRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZFwiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VJZENhcmRGcm9udCA9IGpzb25PYmplY3RbXCJuZXh0UGFnZUlkQ2FyZEZyb250XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUlkQ2FyZEJhY2sgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRCYWNrXCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZVBhc3Nwb3J0U2hpZnQgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VQYXNzcG9ydFNoaWZ0XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZVBhc3Nwb3J0RmxpcCA9IGpzb25PYmplY3RbXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uRm9udHMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsPzogRm9udFxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbD86IEZvbnRcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsPzogRm9udFxuICAgIHJmaWRFbmFibGVOZmNUaXRsZVRleHQ/OiBGb250XG4gICAgcmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dD86IEZvbnRcbiAgICByZmlkRW5hYmxlTmZjQnV0dG9uVGV4dD86IEZvbnRcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvbkZvbnRzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ3VzdG9taXphdGlvbkZvbnRzXG5cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWwgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5SZXN1bHRMYWJlbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNUaXRsZVRleHQgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkRW5hYmxlTmZjVGl0bGVUZXh0XCJdKVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHRcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjQnV0dG9uVGV4dCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNCdXR0b25UZXh0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uSW1hZ2VzIHtcbiAgICBoZWxwQW5pbWF0aW9uPzogc3RyaW5nXG4gICAgbGl2ZW5lc3NBbmltYXRpb24/OiBzdHJpbmdcbiAgICBib3JkZXJCYWNrZ3JvdW5kPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25Pbj86IHN0cmluZ1xuICAgIHRvcmNoQnV0dG9uT2ZmPzogc3RyaW5nXG4gICAgY2FwdHVyZUJ1dHRvbj86IHN0cmluZ1xuICAgIHN3aXRjaEJ1dHRvbj86IHN0cmluZ1xuICAgIGNsb3NlQnV0dG9uPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQnV0dG9uPzogc3RyaW5nXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5GYWlsdXJlSW1hZ2U/OiBzdHJpbmdcbiAgICByZmlkRW5hYmxlTmZjSW1hZ2U/OiBzdHJpbmdcbiAgICByZmlkRGlzYWJsZU5mY0ltYWdlPzogc3RyaW5nXG4gICAgbWRsUHJvY2Vzc2luZ1NjcmVlbkZhaWx1cmVJbWFnZT86IHN0cmluZ1xuICAgIG1kbEVuYWJsZU5mY0ltYWdlPzogc3RyaW5nXG4gICAgbWRsRGlzYWJsZU5mY0ltYWdlPzogc3RyaW5nXG4gICAgbmV4dFBhZ2VJZENhcmRGcm9udD86IHN0cmluZ1xuICAgIG5leHRQYWdlSWRDYXJkQmFjaz86IHN0cmluZ1xuICAgIG5leHRQYWdlUGFzc3BvcnRTaGlmdD86IHN0cmluZ1xuICAgIG5leHRQYWdlUGFzc3BvcnRGbGlwU3RhcnQ/OiBzdHJpbmdcbiAgICBuZXh0UGFnZVBhc3Nwb3J0RmxpcENsZWFuPzogc3RyaW5nXG4gICAgbmV4dFBhZ2VQYXNzcG9ydEZsaXBUb3A/OiBzdHJpbmdcbiAgICBuZXh0UGFnZVBhc3Nwb3J0RmxpcEJvdHRvbT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uSW1hZ2VzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ3VzdG9taXphdGlvbkltYWdlc1xuXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uID0ganNvbk9iamVjdFtcImhlbHBBbmltYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uID0ganNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5ib3JkZXJCYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uT24gPSBqc29uT2JqZWN0W1widG9yY2hCdXR0b25PblwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25PZmYgPSBqc29uT2JqZWN0W1widG9yY2hCdXR0b25PZmZcIl1cbiAgICAgICAgcmVzdWx0LmNhcHR1cmVCdXR0b24gPSBqc29uT2JqZWN0W1wiY2FwdHVyZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuc3dpdGNoQnV0dG9uID0ganNvbk9iamVjdFtcInN3aXRjaEJ1dHRvblwiXVxuICAgICAgICByZXN1bHQuY2xvc2VCdXR0b24gPSBqc29uT2JqZWN0W1wiY2xvc2VCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjSW1hZ2UgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0ltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRGlzYWJsZU5mY0ltYWdlID0ganNvbk9iamVjdFtcInJmaWREaXNhYmxlTmZjSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0Lm1kbFByb2Nlc3NpbmdTY3JlZW5GYWlsdXJlSW1hZ2UgPSBqc29uT2JqZWN0W1wibWRsUHJvY2Vzc2luZ1NjcmVlbkZhaWx1cmVJbWFnZVwiXVxuICAgICAgICByZXN1bHQubWRsRW5hYmxlTmZjSW1hZ2UgPSBqc29uT2JqZWN0W1wibWRsRW5hYmxlTmZjSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0Lm1kbERpc2FibGVOZmNJbWFnZSA9IGpzb25PYmplY3RbXCJtZGxEaXNhYmxlTmZjSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlSWRDYXJkRnJvbnQgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRGcm9udFwiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VJZENhcmRCYWNrID0ganNvbk9iamVjdFtcIm5leHRQYWdlSWRDYXJkQmFja1wiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VQYXNzcG9ydFNoaWZ0ID0ganNvbk9iamVjdFtcIm5leHRQYWdlUGFzc3BvcnRTaGlmdFwiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VQYXNzcG9ydEZsaXBTdGFydCA9IGpzb25PYmplY3RbXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFN0YXJ0XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZVBhc3Nwb3J0RmxpcENsZWFuID0ganNvbk9iamVjdFtcIm5leHRQYWdlUGFzc3BvcnRGbGlwQ2xlYW5cIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlUGFzc3BvcnRGbGlwVG9wID0ganNvbk9iamVjdFtcIm5leHRQYWdlUGFzc3BvcnRGbGlwVG9wXCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZVBhc3Nwb3J0RmxpcEJvdHRvbSA9IGpzb25PYmplY3RbXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcEJvdHRvbVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uVGltaW5ncyB7XG4gICAgbmV4dFBhZ2VJZENhcmRTdGFydERlbGF5PzogbnVtYmVyXG4gICAgbmV4dFBhZ2VJZENhcmRFbmREZWxheT86IG51bWJlclxuICAgIG5leHRQYWdlUGFzc3BvcnRTaGlmdFN0YXJ0RGVsYXk/OiBudW1iZXJcbiAgICBuZXh0UGFnZVBhc3Nwb3J0U2hpZnRFbmREZWxheT86IG51bWJlclxuICAgIG5leHRQYWdlUGFzc3BvcnRGbGlwU3RhcnREZWxheT86IG51bWJlclxuICAgIG5leHRQYWdlUGFzc3BvcnRGbGlwRW5kRGVsYXk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvblRpbWluZ3MgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uVGltaW5nc1xuXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUlkQ2FyZFN0YXJ0RGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRTdGFydERlbGF5XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUlkQ2FyZEVuZERlbGF5ID0ganNvbk9iamVjdFtcIm5leHRQYWdlSWRDYXJkRW5kRGVsYXlcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlUGFzc3BvcnRTaGlmdFN0YXJ0RGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VQYXNzcG9ydFNoaWZ0U3RhcnREZWxheVwiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VQYXNzcG9ydFNoaWZ0RW5kRGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VQYXNzcG9ydFNoaWZ0RW5kRGVsYXlcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlUGFzc3BvcnRGbGlwU3RhcnREZWxheSA9IGpzb25PYmplY3RbXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFN0YXJ0RGVsYXlcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlUGFzc3BvcnRGbGlwRW5kRGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VQYXNzcG9ydEZsaXBFbmREZWxheVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uQ29udGVudE1vZGVzIHtcbiAgICBuZXh0UGFnZUlkQ2FyZEZyb250PzogbnVtYmVyXG4gICAgbmV4dFBhZ2VJZENhcmRCYWNrPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25Db250ZW50TW9kZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uQ29udGVudE1vZGVzXG5cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlSWRDYXJkRnJvbnQgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRGcm9udFwiXVxuICAgICAgICByZXN1bHQubmV4dFBhZ2VJZENhcmRCYWNrID0ganNvbk9iamVjdFtcIm5leHRQYWdlSWRDYXJkQmFja1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uTWF0cmljZXMge1xuICAgIG5leHRQYWdlSWRDYXJkRnJvbnQ/OiBudW1iZXJbXVxuICAgIG5leHRQYWdlSWRDYXJkQmFjaz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25NYXRyaWNlcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25NYXRyaWNlc1xuXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUlkQ2FyZEZyb250ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJuZXh0UGFnZUlkQ2FyZEZyb250XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRGcm9udFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5uZXh0UGFnZUlkQ2FyZEZyb250LnB1c2goanNvbk9iamVjdFtcIm5leHRQYWdlSWRDYXJkRnJvbnRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlSWRDYXJkQmFjayA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRCYWNrXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibmV4dFBhZ2VJZENhcmRCYWNrXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5leHRQYWdlSWRDYXJkQmFjay5wdXNoKGpzb25PYmplY3RbXCJuZXh0UGFnZUlkQ2FyZEJhY2tcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9taXphdGlvbiB7XG4gICAgdGhlbWU/OiBudW1iZXJcbiAgICBzaG93U3RhdHVzTWVzc2FnZXM/OiBib29sZWFuXG4gICAgc2hvd1Jlc3VsdFN0YXR1c01lc3NhZ2VzPzogYm9vbGVhblxuICAgIHNob3dIZWxwQW5pbWF0aW9uPzogYm9vbGVhblxuICAgIHNob3dOZXh0UGFnZUFuaW1hdGlvbj86IGJvb2xlYW5cbiAgICBzaG93QmFja2dyb3VuZE1hc2s/OiBib29sZWFuXG4gICAgY2FtZXJhRnJhbWVCb3JkZXJXaWR0aD86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lTGluZUxlbmd0aD86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lT2Zmc2V0V2lkdGg/OiBudW1iZXJcbiAgICBuZXh0UGFnZUFuaW1hdGlvblN0YXJ0RGVsYXk/OiBudW1iZXJcbiAgICBuZXh0UGFnZUFuaW1hdGlvbkVuZERlbGF5PzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVTaGFwZVR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBzdHJpbmdcbiAgICByZXN1bHRTdGF0dXM/OiBzdHJpbmdcbiAgICBtdWx0aXBhZ2VCdXR0b25UZXh0Pzogc3RyaW5nXG4gICAgY2FtZXJhRnJhbWVEZWZhdWx0Q29sb3I/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZUFjdGl2ZUNvbG9yPzogbnVtYmVyXG4gICAgc3RhdHVzVGV4dENvbG9yPzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzVGV4dENvbG9yPzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQnV0dG9uQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgdGludENvbG9yPzogbnVtYmVyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3JDb2xvcj86IG51bWJlclxuICAgIHN0YXR1c0JhY2tncm91bmRDb2xvcj86IG51bWJlclxuICAgIGNhbWVyYVByZXZpZXdCYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICBiYWNrZ3JvdW5kTWFza0NvbG9yPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQnV0dG9uVGV4dENvbG9yPzogbnVtYmVyXG4gICAgc3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgdG9vbGJhclNpemU/OiBudW1iZXJcbiAgICBiYWNrZ3JvdW5kTWFza0FscGhhPzogbnVtYmVyXG4gICAgY3VzdG9tU3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgbGl2ZW5lc3NBbmltYXRpb25Qb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZVZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVMYW5kc2NhcGVBc3BlY3RSYXRpbz86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lUG9ydHJhaXRBc3BlY3RSYXRpbz86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lQ29ybmVyUmFkaXVzPzogbnVtYmVyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3JQb3J0cmFpdFBvc2l0aW9uTXVsdGlwbGllcj86IG51bWJlclxuICAgIGFjdGl2aXR5SW5kaWNhdG9yTGFuZHNjYXBlUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgY2FtZXJhUHJldmlld1ZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQnV0dG9uUG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZT86IHN0cmluZ1xuICAgIG11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZT86IHN0cmluZ1xuICAgIGJvcmRlckJhY2tncm91bmRJbWFnZT86IHN0cmluZ1xuICAgIGhlbHBBbmltYXRpb25JbWFnZT86IHN0cmluZ1xuICAgIGNsb3NlQnV0dG9uSW1hZ2U/OiBzdHJpbmdcbiAgICBjYXB0dXJlQnV0dG9uSW1hZ2U/OiBzdHJpbmdcbiAgICBjYW1lcmFTd2l0Y2hCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIHRvcmNoQnV0dG9uT25JbWFnZT86IHN0cmluZ1xuICAgIHRvcmNoQnV0dG9uT2ZmSW1hZ2U/OiBzdHJpbmdcbiAgICBjaGFuZ2VGcmFtZUJ1dHRvbkV4cGFuZEltYWdlPzogc3RyaW5nXG4gICAgY2hhbmdlRnJhbWVCdXR0b25Db2xsYXBzZUltYWdlPzogc3RyaW5nXG4gICAgbGl2ZW5lc3NBbmltYXRpb25JbWFnZT86IHN0cmluZ1xuICAgIG11bHRpcGFnZUJ1dHRvbkltYWdlPzogc3RyaW5nXG4gICAgc3RhdHVzVGV4dEZvbnQ/OiBGb250XG4gICAgcmVzdWx0U3RhdHVzVGV4dEZvbnQ/OiBGb250XG4gICAgbXVsdGlwYWdlQnV0dG9uVGV4dEZvbnQ/OiBGb250XG4gICAgY3VzdG9tTGFiZWxTdGF0dXM/OiBzdHJpbmdcbiAgICBjYW1lcmFGcmFtZUxpbmVDYXA/OiBudW1iZXJcbiAgICB1aUN1c3RvbWl6YXRpb25MYXllcj86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICBoZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbGl2ZW5lc3NBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBjb2xvcnM/OiBDdXN0b21pemF0aW9uQ29sb3JzXG4gICAgZm9udHM/OiBDdXN0b21pemF0aW9uRm9udHNcbiAgICBpbWFnZXM/OiBDdXN0b21pemF0aW9uSW1hZ2VzXG4gICAgdGltaW5ncz86IEN1c3RvbWl6YXRpb25UaW1pbmdzXG4gICAgY29udGVudE1vZGVzPzogQ3VzdG9taXphdGlvbkNvbnRlbnRNb2Rlc1xuICAgIG1hdHJpY2VzPzogQ3VzdG9taXphdGlvbk1hdHJpY2VzXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uXG5cbiAgICAgICAgcmVzdWx0LnRoZW1lID0ganNvbk9iamVjdFtcInRoZW1lXCJdXG4gICAgICAgIHJlc3VsdC5zaG93U3RhdHVzTWVzc2FnZXMgPSBqc29uT2JqZWN0W1wic2hvd1N0YXR1c01lc3NhZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5zaG93UmVzdWx0U3RhdHVzTWVzc2FnZXMgPSBqc29uT2JqZWN0W1wic2hvd1Jlc3VsdFN0YXR1c01lc3NhZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5zaG93SGVscEFuaW1hdGlvbiA9IGpzb25PYmplY3RbXCJzaG93SGVscEFuaW1hdGlvblwiXVxuICAgICAgICByZXN1bHQuc2hvd05leHRQYWdlQW5pbWF0aW9uID0ganNvbk9iamVjdFtcInNob3dOZXh0UGFnZUFuaW1hdGlvblwiXVxuICAgICAgICByZXN1bHQuc2hvd0JhY2tncm91bmRNYXNrID0ganNvbk9iamVjdFtcInNob3dCYWNrZ3JvdW5kTWFza1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVCb3JkZXJXaWR0aCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUJvcmRlcldpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUxpbmVMZW5ndGggPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVMaW5lTGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZU9mZnNldFdpZHRoID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lT2Zmc2V0V2lkdGhcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlQW5pbWF0aW9uU3RhcnREZWxheSA9IGpzb25PYmplY3RbXCJuZXh0UGFnZUFuaW1hdGlvblN0YXJ0RGVsYXlcIl1cbiAgICAgICAgcmVzdWx0Lm5leHRQYWdlQW5pbWF0aW9uRW5kRGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VBbmltYXRpb25FbmREZWxheVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVTaGFwZVR5cGUgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVTaGFwZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvblRleHQgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQnV0dG9uVGV4dFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVEZWZhdWx0Q29sb3IgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVEZWZhdWx0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lQWN0aXZlQ29sb3IgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVBY3RpdmVDb2xvclwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzVGV4dENvbG9yID0ganNvbk9iamVjdFtcInN0YXR1c1RleHRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmVzdWx0U3RhdHVzVGV4dENvbG9yID0ganNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1RleHRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmVzdWx0U3RhdHVzQmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcInJlc3VsdFN0YXR1c0JhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uQmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvbkJhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQudGludENvbG9yID0ganNvbk9iamVjdFtcInRpbnRDb2xvclwiXVxuICAgICAgICByZXN1bHQuYWN0aXZpdHlJbmRpY2F0b3JDb2xvciA9IGpzb25PYmplY3RbXCJhY3Rpdml0eUluZGljYXRvckNvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXNCYWNrZ3JvdW5kQ29sb3IgPSBqc29uT2JqZWN0W1wic3RhdHVzQmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQcmV2aWV3QmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYVByZXZpZXdCYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmJhY2tncm91bmRNYXNrQ29sb3IgPSBqc29uT2JqZWN0W1wiYmFja2dyb3VuZE1hc2tDb2xvclwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uVGV4dENvbG9yID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvblRleHRDb2xvclwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcInN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQucmVzdWx0U3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQudG9vbGJhclNpemUgPSBqc29uT2JqZWN0W1widG9vbGJhclNpemVcIl1cbiAgICAgICAgcmVzdWx0LmJhY2tncm91bmRNYXNrQWxwaGEgPSBqc29uT2JqZWN0W1wiYmFja2dyb3VuZE1hc2tBbHBoYVwiXVxuICAgICAgICByZXN1bHQuY3VzdG9tU3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImN1c3RvbVN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3NBbmltYXRpb25Qb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25Qb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVWZXJ0aWNhbFBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVMYW5kc2NhcGVBc3BlY3RSYXRpbyA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUxhbmRzY2FwZUFzcGVjdFJhdGlvXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZVBvcnRyYWl0QXNwZWN0UmF0aW8gPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUNvcm5lclJhZGl1cyA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUNvcm5lclJhZGl1c1wiXVxuICAgICAgICByZXN1bHQuYWN0aXZpdHlJbmRpY2F0b3JQb3J0cmFpdFBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJhY3Rpdml0eUluZGljYXRvclBvcnRyYWl0UG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5hY3Rpdml0eUluZGljYXRvckxhbmRzY2FwZVBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJhY3Rpdml0eUluZGljYXRvckxhbmRzY2FwZVBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUHJldmlld1ZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImNhbWVyYVByZXZpZXdWZXJ0aWNhbFBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvblBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZSA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5ib3JkZXJCYWNrZ3JvdW5kSW1hZ2UgPSBqc29uT2JqZWN0W1wiYm9yZGVyQmFja2dyb3VuZEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2UgPSBqc29uT2JqZWN0W1wiaGVscEFuaW1hdGlvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jbG9zZUJ1dHRvbkltYWdlID0ganNvbk9iamVjdFtcImNsb3NlQnV0dG9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNhcHR1cmVCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJjYXB0dXJlQnV0dG9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVN3aXRjaEJ1dHRvbkltYWdlID0ganNvbk9iamVjdFtcImNhbWVyYVN3aXRjaEJ1dHRvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC50b3JjaEJ1dHRvbk9uSW1hZ2UgPSBqc29uT2JqZWN0W1widG9yY2hCdXR0b25PbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC50b3JjaEJ1dHRvbk9mZkltYWdlID0ganNvbk9iamVjdFtcInRvcmNoQnV0dG9uT2ZmSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2hhbmdlRnJhbWVCdXR0b25FeHBhbmRJbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2hhbmdlRnJhbWVCdXR0b25Db2xsYXBzZUltYWdlID0ganNvbk9iamVjdFtcImNoYW5nZUZyYW1lQnV0dG9uQ29sbGFwc2VJbWFnZVwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3NBbmltYXRpb25JbWFnZSA9IGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzVGV4dEZvbnQgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdGF0dXNUZXh0Rm9udFwiXSlcbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1RleHRGb250ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzVGV4dEZvbnRcIl0pXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VCdXR0b25UZXh0Rm9udCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvblRleHRGb250XCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tTGFiZWxTdGF0dXMgPSBqc29uT2JqZWN0W1wiY3VzdG9tTGFiZWxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lTGluZUNhcCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUxpbmVDYXBcIl1cbiAgICAgICAgcmVzdWx0LnVpQ3VzdG9taXphdGlvbkxheWVyID0ganNvbk9iamVjdFtcInVpQ3VzdG9taXphdGlvbkxheWVyXCJdXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wiaGVscEFuaW1hdGlvbkltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29sb3JzID0gQ3VzdG9taXphdGlvbkNvbG9ycy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY29sb3JzXCJdKVxuICAgICAgICByZXN1bHQuZm9udHMgPSBDdXN0b21pemF0aW9uRm9udHMuZnJvbUpzb24oanNvbk9iamVjdFtcImZvbnRzXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gQ3VzdG9taXphdGlvbkltYWdlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKVxuICAgICAgICByZXN1bHQudGltaW5ncyA9IEN1c3RvbWl6YXRpb25UaW1pbmdzLmZyb21Kc29uKGpzb25PYmplY3RbXCJ0aW1pbmdzXCJdKVxuICAgICAgICByZXN1bHQuY29udGVudE1vZGVzID0gQ3VzdG9taXphdGlvbkNvbnRlbnRNb2Rlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY29udGVudE1vZGVzXCJdKVxuICAgICAgICByZXN1bHQubWF0cmljZXMgPSBDdXN0b21pemF0aW9uTWF0cmljZXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdHJpY2VzXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFRExEYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVETERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFRExEYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVQYXNzcG9ydERhdGFHcm91cHMge1xuICAgIERHMT86IGJvb2xlYW5cbiAgICBERzI/OiBib29sZWFuXG4gICAgREczPzogYm9vbGVhblxuICAgIERHND86IGJvb2xlYW5cbiAgICBERzU/OiBib29sZWFuXG4gICAgREc2PzogYm9vbGVhblxuICAgIERHNz86IGJvb2xlYW5cbiAgICBERzg/OiBib29sZWFuXG4gICAgREc5PzogYm9vbGVhblxuICAgIERHMTA/OiBib29sZWFuXG4gICAgREcxMT86IGJvb2xlYW5cbiAgICBERzEyPzogYm9vbGVhblxuICAgIERHMTM/OiBib29sZWFuXG4gICAgREcxND86IGJvb2xlYW5cbiAgICBERzE1PzogYm9vbGVhblxuICAgIERHMTY/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVQYXNzcG9ydERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFUGFzc3BvcnREYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG4gICAgICAgIHJlc3VsdC5ERzE1ID0ganNvbk9iamVjdFtcIkRHMTVcIl1cbiAgICAgICAgcmVzdWx0LkRHMTYgPSBqc29uT2JqZWN0W1wiREcxNlwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFSUREYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG4gICAgREcxNT86IGJvb2xlYW5cbiAgICBERzE2PzogYm9vbGVhblxuICAgIERHMTc/OiBib29sZWFuXG4gICAgREcxOD86IGJvb2xlYW5cbiAgICBERzE5PzogYm9vbGVhblxuICAgIERHMjA/OiBib29sZWFuXG4gICAgREcyMT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRUlERGF0YUdyb3VwcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVJRERhdGFHcm91cHNcblxuICAgICAgICByZXN1bHQuREcxID0ganNvbk9iamVjdFtcIkRHMVwiXVxuICAgICAgICByZXN1bHQuREcyID0ganNvbk9iamVjdFtcIkRHMlwiXVxuICAgICAgICByZXN1bHQuREczID0ganNvbk9iamVjdFtcIkRHM1wiXVxuICAgICAgICByZXN1bHQuREc0ID0ganNvbk9iamVjdFtcIkRHNFwiXVxuICAgICAgICByZXN1bHQuREc1ID0ganNvbk9iamVjdFtcIkRHNVwiXVxuICAgICAgICByZXN1bHQuREc2ID0ganNvbk9iamVjdFtcIkRHNlwiXVxuICAgICAgICByZXN1bHQuREc3ID0ganNvbk9iamVjdFtcIkRHN1wiXVxuICAgICAgICByZXN1bHQuREc4ID0ganNvbk9iamVjdFtcIkRHOFwiXVxuICAgICAgICByZXN1bHQuREc5ID0ganNvbk9iamVjdFtcIkRHOVwiXVxuICAgICAgICByZXN1bHQuREcxMCA9IGpzb25PYmplY3RbXCJERzEwXCJdXG4gICAgICAgIHJlc3VsdC5ERzExID0ganNvbk9iamVjdFtcIkRHMTFcIl1cbiAgICAgICAgcmVzdWx0LkRHMTIgPSBqc29uT2JqZWN0W1wiREcxMlwiXVxuICAgICAgICByZXN1bHQuREcxMyA9IGpzb25PYmplY3RbXCJERzEzXCJdXG4gICAgICAgIHJlc3VsdC5ERzE0ID0ganNvbk9iamVjdFtcIkRHMTRcIl1cbiAgICAgICAgcmVzdWx0LkRHMTUgPSBqc29uT2JqZWN0W1wiREcxNVwiXVxuICAgICAgICByZXN1bHQuREcxNiA9IGpzb25PYmplY3RbXCJERzE2XCJdXG4gICAgICAgIHJlc3VsdC5ERzE3ID0ganNvbk9iamVjdFtcIkRHMTdcIl1cbiAgICAgICAgcmVzdWx0LkRHMTggPSBqc29uT2JqZWN0W1wiREcxOFwiXVxuICAgICAgICByZXN1bHQuREcxOSA9IGpzb25PYmplY3RbXCJERzE5XCJdXG4gICAgICAgIHJlc3VsdC5ERzIwID0ganNvbk9iamVjdFtcIkRHMjBcIl1cbiAgICAgICAgcmVzdWx0LkRHMjEgPSBqc29uT2JqZWN0W1wiREcyMVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEVENEYXRhR3JvdXAge1xuICAgIERHMTc/OiBib29sZWFuXG4gICAgREcxOD86IGJvb2xlYW5cbiAgICBERzIyPzogYm9vbGVhblxuICAgIERHMjM/OiBib29sZWFuXG4gICAgREcyND86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRFRDRGF0YUdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRFRDRGF0YUdyb3VwXG5cbiAgICAgICAgcmVzdWx0LkRHMTcgPSBqc29uT2JqZWN0W1wiREcxN1wiXVxuICAgICAgICByZXN1bHQuREcxOCA9IGpzb25PYmplY3RbXCJERzE4XCJdXG4gICAgICAgIHJlc3VsdC5ERzIyID0ganNvbk9iamVjdFtcIkRHMjJcIl1cbiAgICAgICAgcmVzdWx0LkRHMjMgPSBqc29uT2JqZWN0W1wiREcyM1wiXVxuICAgICAgICByZXN1bHQuREcyNCA9IGpzb25PYmplY3RbXCJERzI0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTY2VuYXJpbyB7XG4gICAgcGFjZVN0YXRpY0JpbmRpbmc/OiBib29sZWFuXG4gICAgb25saW5lVEE/OiBib29sZWFuXG4gICAgd3JpdGVFaWQ/OiBib29sZWFuXG4gICAgdW5pdmVyc2FsQWNjZXNzUmlnaHRzPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRSZXN0cmljdGVkSWRlbnRpZmljYXRpb24/OiBib29sZWFuXG4gICAgYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SUQ/OiBib29sZWFuXG4gICAgYXV4VmVyaWZpY2F0aW9uRGF0ZU9mQmlydGg/OiBib29sZWFuXG4gICAgc2tpcEFBPzogYm9vbGVhblxuICAgIHN0cmljdFByb2Nlc3Npbmc/OiBib29sZWFuXG4gICAgcGtkRFNDZXJ0UHJpb3JpdHk/OiBib29sZWFuXG4gICAgcGtkVXNlRXh0ZXJuYWxDU0NBPzogYm9vbGVhblxuICAgIHRydXN0ZWRQS0Q/OiBib29sZWFuXG4gICAgcGFzc2l2ZUF1dGg/OiBib29sZWFuXG4gICAgdXNlU0ZJPzogYm9vbGVhblxuICAgIHJlYWRFUGFzc3BvcnQ/OiBib29sZWFuXG4gICAgcmVhZEVJRD86IGJvb2xlYW5cbiAgICByZWFkRURMPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRTVFNpZ25hdHVyZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkU1RRU2lnbmF0dXJlPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMTc/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFdyaXRlREcxOD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzE5PzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMjA/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFdyaXRlREcyMT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkVmVyaWZ5QWdlPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRWZXJpZnlDb21tdW5pdHlJRD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUHJpdmlsZWdlZFRlcm1pbmFsPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRDQU5BbGxvd2VkPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50PzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRJbnN0YWxsQ2VydD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkSW5zdGFsbFFDZXJ0PzogYm9vbGVhblxuICAgIGFwcGx5QW1lbmRtZW50cz86IGJvb2xlYW5cbiAgICBhdXRvU2V0dGluZ3M/OiBib29sZWFuXG4gICAgcHJvY2VlZFJlYWRpbmdBbHdheXM/OiBib29sZWFuXG4gICAgcmVhZERUQz86IGJvb2xlYW5cbiAgICBtcnpTdHJpY3RDaGVjaz86IGJvb2xlYW5cbiAgICBsb2FkQ1JMRnJvbVJlbW90ZT86IGJvb2xlYW5cbiAgICBpbmRlcGVuZGVudFNPRFN0YXR1cz86IGJvb2xlYW5cbiAgICByZWFkVXNlcj86IGJvb2xlYW5cbiAgICByZWFkaW5nQnVmZmVyPzogbnVtYmVyXG4gICAgb25saW5lVEFUb1NpZ25EYXRhVHlwZT86IG51bWJlclxuICAgIGRlZmF1bHRSZWFkaW5nQnVmZmVyU2l6ZT86IG51bWJlclxuICAgIHNpZ25NYW5hZ2VtZW50QWN0aW9uPzogbnVtYmVyXG4gICAgcHJvZmlsZXJUeXBlPzogbnVtYmVyXG4gICAgYXV0aFByb2NUeXBlPzogbnVtYmVyXG4gICAgYmFzZVNNUHJvY2VkdXJlPzogbnVtYmVyXG4gICAgcGFjZVBhc3N3b3JkVHlwZT86IG51bWJlclxuICAgIHRlcm1pbmFsVHlwZT86IG51bWJlclxuICAgIHBhc3N3b3JkPzogc3RyaW5nXG4gICAgcGtkUEE/OiBzdHJpbmdcbiAgICBwa2RFQUM/OiBzdHJpbmdcbiAgICBtcno/OiBzdHJpbmdcbiAgICBlU2lnblBJTkRlZmF1bHQ/OiBzdHJpbmdcbiAgICBlU2lnblBJTk5ld1ZhbHVlPzogc3RyaW5nXG4gICAgY2FyZEFjY2Vzcz86IHN0cmluZ1xuICAgIG1yekhhc2g/OiBzdHJpbmdcbiAgICBkb2N1bWVudE51bWJlcj86IHN0cmluZ1xuICAgIGRhdGVPZkJpcnRoPzogc3RyaW5nXG4gICAgZGF0ZU9mRXhwaXJ5Pzogc3RyaW5nXG4gICAgZGVmYXVsdFVzZXJQSU4/OiBzdHJpbmdcbiAgICBlRExEYXRhR3JvdXBzPzogRURMRGF0YUdyb3Vwc1xuICAgIGVQYXNzcG9ydERhdGFHcm91cHM/OiBFUGFzc3BvcnREYXRhR3JvdXBzXG4gICAgZUlERGF0YUdyb3Vwcz86IEVJRERhdGFHcm91cHNcbiAgICBkdGNEYXRhR3JvdXBzPzogRFRDRGF0YUdyb3VwXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJGSURTY2VuYXJpbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTY2VuYXJpb1xuXG4gICAgICAgIHJlc3VsdC5wYWNlU3RhdGljQmluZGluZyA9IGpzb25PYmplY3RbXCJwYWNlU3RhdGljQmluZGluZ1wiXVxuICAgICAgICByZXN1bHQub25saW5lVEEgPSBqc29uT2JqZWN0W1wib25saW5lVEFcIl1cbiAgICAgICAgcmVzdWx0LndyaXRlRWlkID0ganNvbk9iamVjdFtcIndyaXRlRWlkXCJdXG4gICAgICAgIHJlc3VsdC51bml2ZXJzYWxBY2Nlc3NSaWdodHMgPSBqc29uT2JqZWN0W1widW5pdmVyc2FsQWNjZXNzUmlnaHRzXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkUmVzdHJpY3RlZElkZW50aWZpY2F0aW9uID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRSZXN0cmljdGVkSWRlbnRpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmF1eFZlcmlmaWNhdGlvbkNvbW11bml0eUlEID0ganNvbk9iamVjdFtcImF1eFZlcmlmaWNhdGlvbkNvbW11bml0eUlEXCJdXG4gICAgICAgIHJlc3VsdC5hdXhWZXJpZmljYXRpb25EYXRlT2ZCaXJ0aCA9IGpzb25PYmplY3RbXCJhdXhWZXJpZmljYXRpb25EYXRlT2ZCaXJ0aFwiXVxuICAgICAgICByZXN1bHQuc2tpcEFBID0ganNvbk9iamVjdFtcInNraXBBQVwiXVxuICAgICAgICByZXN1bHQuc3RyaWN0UHJvY2Vzc2luZyA9IGpzb25PYmplY3RbXCJzdHJpY3RQcm9jZXNzaW5nXCJdXG4gICAgICAgIHJlc3VsdC5wa2REU0NlcnRQcmlvcml0eSA9IGpzb25PYmplY3RbXCJwa2REU0NlcnRQcmlvcml0eVwiXVxuICAgICAgICByZXN1bHQucGtkVXNlRXh0ZXJuYWxDU0NBID0ganNvbk9iamVjdFtcInBrZFVzZUV4dGVybmFsQ1NDQVwiXVxuICAgICAgICByZXN1bHQudHJ1c3RlZFBLRCA9IGpzb25PYmplY3RbXCJ0cnVzdGVkUEtEXCJdXG4gICAgICAgIHJlc3VsdC5wYXNzaXZlQXV0aCA9IGpzb25PYmplY3RbXCJwYXNzaXZlQXV0aFwiXVxuICAgICAgICByZXN1bHQudXNlU0ZJID0ganNvbk9iamVjdFtcInVzZVNGSVwiXVxuICAgICAgICByZXN1bHQucmVhZEVQYXNzcG9ydCA9IGpzb25PYmplY3RbXCJyZWFkRVBhc3Nwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRUlEID0ganNvbk9iamVjdFtcInJlYWRFSURcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRFREwgPSBqc29uT2JqZWN0W1wicmVhZEVETFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFNUU2lnbmF0dXJlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRTVFNpZ25hdHVyZVwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFNUUVNpZ25hdHVyZSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkU1RRU2lnbmF0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkV3JpdGVERzE3ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRXcml0ZURHMTdcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMTggPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcxOFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcxOSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzE5XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkV3JpdGVERzIwID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRXcml0ZURHMjBcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMjEgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcyMVwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFZlcmlmeUFnZSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkVmVyaWZ5QWdlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SUQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFZlcmlmeUNvbW11bml0eUlEXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkUHJpdmlsZWdlZFRlcm1pbmFsID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRQcml2aWxlZ2VkVGVybWluYWxcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRDQU5BbGxvd2VkID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRDQU5BbGxvd2VkXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkUElOTWFuYWdlbWVudCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkUElOTWFuYWdlbWVudFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZEluc3RhbGxDZXJ0ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRJbnN0YWxsQ2VydFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZEluc3RhbGxRQ2VydCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkSW5zdGFsbFFDZXJ0XCJdXG4gICAgICAgIHJlc3VsdC5hcHBseUFtZW5kbWVudHMgPSBqc29uT2JqZWN0W1wiYXBwbHlBbWVuZG1lbnRzXCJdXG4gICAgICAgIHJlc3VsdC5hdXRvU2V0dGluZ3MgPSBqc29uT2JqZWN0W1wiYXV0b1NldHRpbmdzXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZWVkUmVhZGluZ0Fsd2F5cyA9IGpzb25PYmplY3RbXCJwcm9jZWVkUmVhZGluZ0Fsd2F5c1wiXVxuICAgICAgICByZXN1bHQucmVhZERUQyA9IGpzb25PYmplY3RbXCJyZWFkRFRDXCJdXG4gICAgICAgIHJlc3VsdC5tcnpTdHJpY3RDaGVjayA9IGpzb25PYmplY3RbXCJtcnpTdHJpY3RDaGVja1wiXVxuICAgICAgICByZXN1bHQubG9hZENSTEZyb21SZW1vdGUgPSBqc29uT2JqZWN0W1wibG9hZENSTEZyb21SZW1vdGVcIl1cbiAgICAgICAgcmVzdWx0LmluZGVwZW5kZW50U09EU3RhdHVzID0ganNvbk9iamVjdFtcImluZGVwZW5kZW50U09EU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkVXNlciA9IGpzb25PYmplY3RbXCJyZWFkVXNlclwiXVxuICAgICAgICByZXN1bHQucmVhZGluZ0J1ZmZlciA9IGpzb25PYmplY3RbXCJyZWFkaW5nQnVmZmVyXCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVUQVRvU2lnbkRhdGFUeXBlID0ganNvbk9iamVjdFtcIm9ubGluZVRBVG9TaWduRGF0YVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRlZmF1bHRSZWFkaW5nQnVmZmVyU2l6ZSA9IGpzb25PYmplY3RbXCJkZWZhdWx0UmVhZGluZ0J1ZmZlclNpemVcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25NYW5hZ2VtZW50QWN0aW9uID0ganNvbk9iamVjdFtcInNpZ25NYW5hZ2VtZW50QWN0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5wcm9maWxlclR5cGUgPSBqc29uT2JqZWN0W1wicHJvZmlsZXJUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRoUHJvY1R5cGUgPSBqc29uT2JqZWN0W1wiYXV0aFByb2NUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5iYXNlU01Qcm9jZWR1cmUgPSBqc29uT2JqZWN0W1wiYmFzZVNNUHJvY2VkdXJlXCJdXG4gICAgICAgIHJlc3VsdC5wYWNlUGFzc3dvcmRUeXBlID0ganNvbk9iamVjdFtcInBhY2VQYXNzd29yZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnRlcm1pbmFsVHlwZSA9IGpzb25PYmplY3RbXCJ0ZXJtaW5hbFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBhc3N3b3JkID0ganNvbk9iamVjdFtcInBhc3N3b3JkXCJdXG4gICAgICAgIHJlc3VsdC5wa2RQQSA9IGpzb25PYmplY3RbXCJwa2RQQVwiXVxuICAgICAgICByZXN1bHQucGtkRUFDID0ganNvbk9iamVjdFtcInBrZEVBQ1wiXVxuICAgICAgICByZXN1bHQubXJ6ID0ganNvbk9iamVjdFtcIm1yelwiXVxuICAgICAgICByZXN1bHQuZVNpZ25QSU5EZWZhdWx0ID0ganNvbk9iamVjdFtcImVTaWduUElORGVmYXVsdFwiXVxuICAgICAgICByZXN1bHQuZVNpZ25QSU5OZXdWYWx1ZSA9IGpzb25PYmplY3RbXCJlU2lnblBJTk5ld1ZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5jYXJkQWNjZXNzID0ganNvbk9iamVjdFtcImNhcmRBY2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0Lm1yekhhc2ggPSBqc29uT2JqZWN0W1wibXJ6SGFzaFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnROdW1iZXIgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnROdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LmRhdGVPZkJpcnRoID0ganNvbk9iamVjdFtcImRhdGVPZkJpcnRoXCJdXG4gICAgICAgIHJlc3VsdC5kYXRlT2ZFeHBpcnkgPSBqc29uT2JqZWN0W1wiZGF0ZU9mRXhwaXJ5XCJdXG4gICAgICAgIHJlc3VsdC5kZWZhdWx0VXNlclBJTiA9IGpzb25PYmplY3RbXCJkZWZhdWx0VXNlclBJTlwiXVxuICAgICAgICByZXN1bHQuZURMRGF0YUdyb3VwcyA9IEVETERhdGFHcm91cHMuZnJvbUpzb24oanNvbk9iamVjdFtcImVETERhdGFHcm91cHNcIl0pXG4gICAgICAgIHJlc3VsdC5lUGFzc3BvcnREYXRhR3JvdXBzID0gRVBhc3Nwb3J0RGF0YUdyb3Vwcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZVBhc3Nwb3J0RGF0YUdyb3Vwc1wiXSlcbiAgICAgICAgcmVzdWx0LmVJRERhdGFHcm91cHMgPSBFSUREYXRhR3JvdXBzLmZyb21Kc29uKGpzb25PYmplY3RbXCJlSUREYXRhR3JvdXBzXCJdKVxuICAgICAgICByZXN1bHQuZHRjRGF0YUdyb3VwcyA9IERUQ0RhdGFHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZHRjRGF0YUdyb3Vwc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlcGFyZVByb2dyZXNzIHtcbiAgICBkb3dubG9hZGVkQnl0ZXM/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzPzogbnVtYmVyXG4gICAgcHJvZ3Jlc3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUHJlcGFyZVByb2dyZXNzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUHJlcGFyZVByb2dyZXNzXG5cbiAgICAgICAgcmVzdWx0LmRvd25sb2FkZWRCeXRlcyA9IGpzb25PYmplY3RbXCJkb3dubG9hZGVkQnl0ZXNcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXMgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1wiXVxuICAgICAgICByZXN1bHQucHJvZ3Jlc3MgPSBqc29uT2JqZWN0W1wicHJvZ3Jlc3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2aWNlRW5nYWdlbWVudCB7XG4gICAgZGV2aWNlUmV0cmlldmFsTWV0aG9kcz86IERldmljZVJldHJpZXZhbE1ldGhvZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldmljZUVuZ2FnZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXZpY2VFbmdhZ2VtZW50XG5cbiAgICAgICAgcmVzdWx0LmRldmljZVJldHJpZXZhbE1ldGhvZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRldmljZVJldHJpZXZhbE1ldGhvZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkZXZpY2VSZXRyaWV2YWxNZXRob2RzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldmljZVJldHJpZXZhbE1ldGhvZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV2aWNlUmV0cmlldmFsTWV0aG9kc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kZXZpY2VSZXRyaWV2YWxNZXRob2RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VFbmdhZ2VtZW50Q29tcGxldGlvbiB7XG4gICAgZGV2aWNlRW5nYWdlbWVudD86IERldmljZUVuZ2FnZW1lbnRcbiAgICBlcnJvcj86IFJlZ3VsYUV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXZpY2VFbmdhZ2VtZW50Q29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldmljZUVuZ2FnZW1lbnRDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmRldmljZUVuZ2FnZW1lbnQgPSBEZXZpY2VFbmdhZ2VtZW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXZpY2VFbmdhZ2VtZW50XCJdKVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBSZWd1bGFFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VSZXRyaWV2YWxNZXRob2Qge1xuICAgIHR5cGU/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgY21kTWF4TGVuZ3RoPzogbnVtYmVyXG4gICAgcmVzcE1heExlbmd0aD86IG51bWJlclxuICAgIGNsaWVudE1vZGVTdXBwb3J0PzogYm9vbGVhblxuICAgIGNsaWVudE1vZGVVVUlEPzogc3RyaW5nXG4gICAgc2VydmVyTW9kZVN1cHBvcnQ/OiBib29sZWFuXG4gICAgc2VydmVyTW9kZVVVSUQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV2aWNlUmV0cmlldmFsTWV0aG9kIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV2aWNlUmV0cmlldmFsTWV0aG9kXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5jbWRNYXhMZW5ndGggPSBqc29uT2JqZWN0W1wiY21kTWF4TGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5yZXNwTWF4TGVuZ3RoID0ganNvbk9iamVjdFtcInJlc3BNYXhMZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmNsaWVudE1vZGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImNsaWVudE1vZGVTdXBwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5jbGllbnRNb2RlVVVJRCA9IGpzb25PYmplY3RbXCJjbGllbnRNb2RlVVVJRFwiXVxuICAgICAgICByZXN1bHQuc2VydmVyTW9kZVN1cHBvcnQgPSBqc29uT2JqZWN0W1wic2VydmVyTW9kZVN1cHBvcnRcIl1cbiAgICAgICAgcmVzdWx0LnNlcnZlck1vZGVVVUlEID0ganNvbk9iamVjdFtcInNlcnZlck1vZGVVVUlEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFSZXRyaWV2YWwge1xuICAgIGRldmljZVJldHJpZXZhbD86IG51bWJlclxuICAgIGRvY1JlcXVlc3RQcmVzZXQ/OiBudW1iZXJcbiAgICBpbnRlbnRUb1JldGFpbj86IG51bWJlclxuICAgIHJlcXVlc3RzPzogYW55W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGF0YVJldHJpZXZhbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGFSZXRyaWV2YWxcblxuICAgICAgICByZXN1bHQuZGV2aWNlUmV0cmlldmFsID0ganNvbk9iamVjdFtcImRldmljZVJldHJpZXZhbFwiXVxuICAgICAgICByZXN1bHQuZG9jUmVxdWVzdFByZXNldCA9IGpzb25PYmplY3RbXCJkb2NSZXF1ZXN0UHJlc2V0XCJdXG4gICAgICAgIHJlc3VsdC5pbnRlbnRUb1JldGFpbiA9IGpzb25PYmplY3RbXCJpbnRlbnRUb1JldGFpblwiXVxuICAgICAgICByZXN1bHQucmVxdWVzdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInJlcXVlc3RzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVxdWVzdHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVxdWVzdHMucHVzaChqc29uT2JqZWN0W1wicmVxdWVzdHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZXF1ZXN0TURMIHtcbiAgICBkb2NUeXBlPzogc3RyaW5nXG4gICAgbmFtZXNwYWNlcz86IE5hbWVTcGFjZU1ETFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVxdWVzdE1ETCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVxdWVzdE1ETFxuXG4gICAgICAgIHJlc3VsdC5kb2NUeXBlID0ganNvbk9iamVjdFtcImRvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWVzcGFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5hbWVzcGFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJuYW1lc3BhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE5hbWVTcGFjZU1ETC5mcm9tSnNvbihqc29uT2JqZWN0W1wibmFtZXNwYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lc3BhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYW1lU3BhY2VNREwge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBtYXA/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE5hbWVTcGFjZU1ETCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE5hbWVTcGFjZU1ETFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lm1hcCA9IGpzb25PYmplY3RbXCJtYXBcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZXF1ZXN0MTgwMTNNREwge1xuICAgIGRvY1R5cGU/OiBzdHJpbmdcbiAgICBuYW1lc3BhY2VzPzogTmFtZVNwYWNlTURMW11cbiAgICBmYW1pbHlOYW1lPzogbnVtYmVyXG4gICAgZ2l2ZW5OYW1lPzogbnVtYmVyXG4gICAgYmlydGhEYXRlPzogbnVtYmVyXG4gICAgaXNzdWVEYXRlPzogbnVtYmVyXG4gICAgZXhwaXJ5RGF0ZT86IG51bWJlclxuICAgIGlzc3VpbmdDb3VudHJ5PzogbnVtYmVyXG4gICAgaXNzdWluZ0F1dGhvcml0eT86IG51bWJlclxuICAgIGRvY3VtZW50TnVtYmVyPzogbnVtYmVyXG4gICAgcG9ydHJhaXQ/OiBudW1iZXJcbiAgICBkcml2aW5nUHJpdmlsZWdlcz86IG51bWJlclxuICAgIHVuRGlzdGluZ3Vpc2hpbmdTaWduPzogbnVtYmVyXG4gICAgYWRtaW5pc3RyYXRpdmVOdW1iZXI/OiBudW1iZXJcbiAgICBzZXg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB3ZWlnaHQ/OiBudW1iZXJcbiAgICBleWVDb2xvdXI/OiBudW1iZXJcbiAgICBoYWlyQ29sb3VyPzogbnVtYmVyXG4gICAgYmlydGhQbGFjZT86IG51bWJlclxuICAgIHJlc2lkZW50QWRkcmVzcz86IG51bWJlclxuICAgIHBvcnRyYWl0Q2FwdHVyZURhdGU/OiBudW1iZXJcbiAgICBhZ2VJblllYXJzPzogbnVtYmVyXG4gICAgYWdlQmlydGhZZWFyPzogbnVtYmVyXG4gICAgYWdlT3ZlcjE4PzogbnVtYmVyXG4gICAgaXNzdWluZ0p1cmlzZGljdGlvbj86IG51bWJlclxuICAgIG5hdGlvbmFsaXR5PzogbnVtYmVyXG4gICAgcmVzaWRlbnRDaXR5PzogbnVtYmVyXG4gICAgcmVzaWRlbnRTdGF0ZT86IG51bWJlclxuICAgIHJlc2lkZW50UG9zdGFsQ29kZT86IG51bWJlclxuICAgIHJlc2lkZW50Q291bnRyeT86IG51bWJlclxuICAgIGJpb21ldHJpY1RlbXBsYXRlRmFjZT86IG51bWJlclxuICAgIGJpb21ldHJpY1RlbXBsYXRlSXJpcz86IG51bWJlclxuICAgIGJpb21ldHJpY1RlbXBsYXRlRmluZ2VyPzogbnVtYmVyXG4gICAgYmlvbWV0cmljVGVtcGxhdGVTaWduYXR1cmVTaWduPzogbnVtYmVyXG4gICAgZmFtaWx5TmFtZU5hdGlvbmFsQ2hhcmFjdGVyPzogbnVtYmVyXG4gICAgZ2l2ZW5OYW1lTmF0aW9uYWxDaGFyYWN0ZXI/OiBudW1iZXJcbiAgICBzaWduYXR1cmVVc3VhbE1hcms/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZXF1ZXN0MTgwMTNNREwgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlcXVlc3QxODAxM01ETFxuXG4gICAgICAgIHJlc3VsdC5kb2NUeXBlID0ganNvbk9iamVjdFtcImRvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWVzcGFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5hbWVzcGFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJuYW1lc3BhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE5hbWVTcGFjZU1ETC5mcm9tSnNvbihqc29uT2JqZWN0W1wibmFtZXNwYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lc3BhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZmFtaWx5TmFtZSA9IGpzb25PYmplY3RbXCJmYW1pbHlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5naXZlbk5hbWUgPSBqc29uT2JqZWN0W1wiZ2l2ZW5OYW1lXCJdXG4gICAgICAgIHJlc3VsdC5iaXJ0aERhdGUgPSBqc29uT2JqZWN0W1wiYmlydGhEYXRlXCJdXG4gICAgICAgIHJlc3VsdC5pc3N1ZURhdGUgPSBqc29uT2JqZWN0W1wiaXNzdWVEYXRlXCJdXG4gICAgICAgIHJlc3VsdC5leHBpcnlEYXRlID0ganNvbk9iamVjdFtcImV4cGlyeURhdGVcIl1cbiAgICAgICAgcmVzdWx0Lmlzc3VpbmdDb3VudHJ5ID0ganNvbk9iamVjdFtcImlzc3VpbmdDb3VudHJ5XCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nQXV0aG9yaXR5ID0ganNvbk9iamVjdFtcImlzc3VpbmdBdXRob3JpdHlcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50TnVtYmVyID0ganNvbk9iamVjdFtcImRvY3VtZW50TnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZHJpdmluZ1ByaXZpbGVnZXMgPSBqc29uT2JqZWN0W1wiZHJpdmluZ1ByaXZpbGVnZXNcIl1cbiAgICAgICAgcmVzdWx0LnVuRGlzdGluZ3Vpc2hpbmdTaWduID0ganNvbk9iamVjdFtcInVuRGlzdGluZ3Vpc2hpbmdTaWduXCJdXG4gICAgICAgIHJlc3VsdC5hZG1pbmlzdHJhdGl2ZU51bWJlciA9IGpzb25PYmplY3RbXCJhZG1pbmlzdHJhdGl2ZU51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2V4ID0ganNvbk9iamVjdFtcInNleFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQud2VpZ2h0ID0ganNvbk9iamVjdFtcIndlaWdodFwiXVxuICAgICAgICByZXN1bHQuZXllQ29sb3VyID0ganNvbk9iamVjdFtcImV5ZUNvbG91clwiXVxuICAgICAgICByZXN1bHQuaGFpckNvbG91ciA9IGpzb25PYmplY3RbXCJoYWlyQ29sb3VyXCJdXG4gICAgICAgIHJlc3VsdC5iaXJ0aFBsYWNlID0ganNvbk9iamVjdFtcImJpcnRoUGxhY2VcIl1cbiAgICAgICAgcmVzdWx0LnJlc2lkZW50QWRkcmVzcyA9IGpzb25PYmplY3RbXCJyZXNpZGVudEFkZHJlc3NcIl1cbiAgICAgICAgcmVzdWx0LnBvcnRyYWl0Q2FwdHVyZURhdGUgPSBqc29uT2JqZWN0W1wicG9ydHJhaXRDYXB0dXJlRGF0ZVwiXVxuICAgICAgICByZXN1bHQuYWdlSW5ZZWFycyA9IGpzb25PYmplY3RbXCJhZ2VJblllYXJzXCJdXG4gICAgICAgIHJlc3VsdC5hZ2VCaXJ0aFllYXIgPSBqc29uT2JqZWN0W1wiYWdlQmlydGhZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5hZ2VPdmVyMTggPSBqc29uT2JqZWN0W1wiYWdlT3ZlcjE4XCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nSnVyaXNkaWN0aW9uID0ganNvbk9iamVjdFtcImlzc3VpbmdKdXJpc2RpY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0Lm5hdGlvbmFsaXR5ID0ganNvbk9iamVjdFtcIm5hdGlvbmFsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5yZXNpZGVudENpdHkgPSBqc29uT2JqZWN0W1wicmVzaWRlbnRDaXR5XCJdXG4gICAgICAgIHJlc3VsdC5yZXNpZGVudFN0YXRlID0ganNvbk9iamVjdFtcInJlc2lkZW50U3RhdGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc2lkZW50UG9zdGFsQ29kZSA9IGpzb25PYmplY3RbXCJyZXNpZGVudFBvc3RhbENvZGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc2lkZW50Q291bnRyeSA9IGpzb25PYmplY3RbXCJyZXNpZGVudENvdW50cnlcIl1cbiAgICAgICAgcmVzdWx0LmJpb21ldHJpY1RlbXBsYXRlRmFjZSA9IGpzb25PYmplY3RbXCJiaW9tZXRyaWNUZW1wbGF0ZUZhY2VcIl1cbiAgICAgICAgcmVzdWx0LmJpb21ldHJpY1RlbXBsYXRlSXJpcyA9IGpzb25PYmplY3RbXCJiaW9tZXRyaWNUZW1wbGF0ZUlyaXNcIl1cbiAgICAgICAgcmVzdWx0LmJpb21ldHJpY1RlbXBsYXRlRmluZ2VyID0ganNvbk9iamVjdFtcImJpb21ldHJpY1RlbXBsYXRlRmluZ2VyXCJdXG4gICAgICAgIHJlc3VsdC5iaW9tZXRyaWNUZW1wbGF0ZVNpZ25hdHVyZVNpZ24gPSBqc29uT2JqZWN0W1wiYmlvbWV0cmljVGVtcGxhdGVTaWduYXR1cmVTaWduXCJdXG4gICAgICAgIHJlc3VsdC5mYW1pbHlOYW1lTmF0aW9uYWxDaGFyYWN0ZXIgPSBqc29uT2JqZWN0W1wiZmFtaWx5TmFtZU5hdGlvbmFsQ2hhcmFjdGVyXCJdXG4gICAgICAgIHJlc3VsdC5naXZlbk5hbWVOYXRpb25hbENoYXJhY3RlciA9IGpzb25PYmplY3RbXCJnaXZlbk5hbWVOYXRpb25hbENoYXJhY3RlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlVXN1YWxNYXJrID0ganNvbk9iamVjdFtcInNpZ25hdHVyZVVzdWFsTWFya1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5hbGl6ZUNvbmZpZyB7XG4gICAgcmF3SW1hZ2VzPzogYm9vbGVhblxuICAgIHZpZGVvPzogYm9vbGVhblxuICAgIHJmaWRTZXNzaW9uPzogYm9vbGVhblxuICAgIG1kbFNlc3Npb24/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbmFsaXplQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmluYWxpemVDb25maWdcblxuICAgICAgICByZXN1bHQucmF3SW1hZ2VzID0ganNvbk9iamVjdFtcInJhd0ltYWdlc1wiXVxuICAgICAgICByZXN1bHQudmlkZW8gPSBqc29uT2JqZWN0W1widmlkZW9cIl1cbiAgICAgICAgcmVzdWx0LnJmaWRTZXNzaW9uID0ganNvbk9iamVjdFtcInJmaWRTZXNzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5tZGxTZXNzaW9uID0ganNvbk9iamVjdFtcIm1kbFNlc3Npb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluYWxpemVDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICBpbmZvPzogVHJhbnNhY3Rpb25JbmZvXG4gICAgZXJyb3I/OiBSZWd1bGFFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmluYWxpemVDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmluYWxpemVDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LmluZm8gPSBUcmFuc2FjdGlvbkluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcImluZm9cIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IFJlZ3VsYUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBQ0VQcm90b2NvbCB7XG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIHN0ZERvbWFpblBhcmFtcz86IHN0cmluZ1xuICAgIGtleUFsZ29yaXRobT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQUNFUHJvdG9jb2wgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQQUNFUHJvdG9jb2xcblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5zdGREb21haW5QYXJhbXMgPSBqc29uT2JqZWN0W1wic3RkRG9tYWluUGFyYW1zXCJdXG4gICAgICAgIHJlc3VsdC5rZXlBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wia2V5QWxnb3JpdGhtXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENBUHJvdG9jb2wge1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBzY2hlbWU/OiBzdHJpbmdcbiAgICBrZXlBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBjaGlwSW5kaXZpZHVhbD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ0FQcm90b2NvbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENBUHJvdG9jb2xcblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5zY2hlbWUgPSBqc29uT2JqZWN0W1wic2NoZW1lXCJdXG4gICAgICAgIHJlc3VsdC5rZXlBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wia2V5QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5jaGlwSW5kaXZpZHVhbCA9IGpzb25PYmplY3RbXCJjaGlwSW5kaXZpZHVhbFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEQ29uZmlnIHtcbiAgICBvblJlcXVlc3RQQUNlcnRpZmljYXRlcz86IGJvb2xlYW5cbiAgICBvblJlcXVlc3RUQUNlcnRpZmljYXRlcz86IGJvb2xlYW5cbiAgICBvblJlcXVlc3RUQVNpZ25hdHVyZT86IGJvb2xlYW5cbiAgICBvblJlcXVlc3RQQUNFUHJvdG9jb2w/OiBib29sZWFuXG4gICAgb25SZXF1ZXN0Q0FQcm90b2NvbD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURDb25maWdcblxuICAgICAgICByZXN1bHQub25SZXF1ZXN0UEFDZXJ0aWZpY2F0ZXMgPSBqc29uT2JqZWN0W1wib25SZXF1ZXN0UEFDZXJ0aWZpY2F0ZXNcIl1cbiAgICAgICAgcmVzdWx0Lm9uUmVxdWVzdFRBQ2VydGlmaWNhdGVzID0ganNvbk9iamVjdFtcIm9uUmVxdWVzdFRBQ2VydGlmaWNhdGVzXCJdXG4gICAgICAgIHJlc3VsdC5vblJlcXVlc3RUQVNpZ25hdHVyZSA9IGpzb25PYmplY3RbXCJvblJlcXVlc3RUQVNpZ25hdHVyZVwiXVxuICAgICAgICByZXN1bHQub25SZXF1ZXN0UEFDRVByb3RvY29sID0ganNvbk9iamVjdFtcIm9uUmVxdWVzdFBBQ0VQcm90b2NvbFwiXVxuICAgICAgICByZXN1bHQub25SZXF1ZXN0Q0FQcm90b2NvbCA9IGpzb25PYmplY3RbXCJvblJlcXVlc3RDQVByb3RvY29sXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9BdXRoZW50aWNpdHkgPSB7XG4gICAgTk9ORTogMCxcbiAgICBVVl9MVU1JTkVTQ0VOQ0U6IDEsXG4gICAgSVJfQjkwMDogMixcbiAgICBJTUFHRV9QQVRURVJOOiA0LFxuICAgIEFYSUFMX1BST1RFQ1RJT046IDgsXG4gICAgVVZfRklCRVJTOiAxNixcbiAgICBJUl9WSVNJQklMSVRZOiAzMixcbiAgICBPQ1JfU0VDVVJJVFlfVEVYVDogNjQsXG4gICAgSVBJOiAxMjgsXG4gICAgUEhPVE9fRU1CRURfVFlQRTogNTEyLFxuICAgIEhPTE9HUkFNUzogNDA5NixcbiAgICBQSE9UT19BUkVBOiA4MTkyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT046IDMyNzY4LFxuICAgIEJBUkNPREVfRk9STUFUX0NIRUNLOiA2NTUzNixcbiAgICBLSU5FR1JBTTogMTMxMDcyLFxuICAgIEhPTE9HUkFNU19ERVRFQ1RJT046IDUyNDI4OCxcbiAgICBNUlo6IDgzODg2MDgsXG4gICAgU1RBVFVTX09OTFk6IDB4ODAwMDAwMDAsXG4gICAgT1ZJOiAxMDI0LFxuICAgIExJVkVORVNTOiAyMDk3MTUyLFxuICAgIE9DUjogNDE5NDMwNCxcbiAgICBFTkNSWVBURURfSVBJOiAxNjc3NzIxNixcbiAgICBBVVRIRU5USUNJVFlfUFJPUEVSVFk6IDB4MDIwMDAwMDAsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uQ29sb3IgPSB7XG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuQmFja2dyb3VuZFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fSElOVF9MQUJFTF9URVhUOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fSElOVF9MQUJFTF9CQUNLR1JPVU5EOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsQmFja2dyb3VuZFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfTEFCRUxfVEVYVDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0XCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTU19CQVI6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhclwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfQkFSX0JBQ0tHUk9VTkQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1JFU1VMVF9MQUJFTF9URVhUOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0XCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9MT0FESU5HX0JBUjogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkxvYWRpbmdCYXJcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfVElUTEVfVEVYVDogXCJyZmlkRW5hYmxlTmZjVGl0bGVUZXh0XCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX0RFU0NSSVBUSU9OX1RFWFQ6IFwicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19CVVRUT05fVEVYVDogXCJyZmlkRW5hYmxlTmZjQnV0dG9uVGV4dFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19CVVRUT05fQkFDS0dST1VORDogXCJyZmlkRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZFwiLFxuICAgIE1ETF9QUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcIm1kbFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kXCIsXG4gICAgTURMX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUxfVEVYVDogXCJtZGxQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dFwiLFxuICAgIE1ETF9QUk9DRVNTSU5HX1NDUkVFTl9ISU5UX0xBQkVMX0JBQ0tHUk9VTkQ6IFwibWRsUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmRcIixcbiAgICBNRExfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfTEFCRUxfVEVYVDogXCJtZGxQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHRcIixcbiAgICBNRExfUFJPQ0VTU0lOR19TQ1JFRU5fUkVTVUxUX0xBQkVMX1RFWFQ6IFwibWRsUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dFwiLFxuICAgIE1ETF9QUk9DRVNTSU5HX1NDUkVFTl9MT0FESU5HX0JBUjogXCJtZGxQcm9jZXNzaW5nU2NyZWVuTG9hZGluZ0JhclwiLFxuICAgIE1ETF9FTkFCTEVfTkZDX1RJVExFX1RFWFQ6IFwibWRsRW5hYmxlTmZjVGl0bGVUZXh0XCIsXG4gICAgTURMX0VOQUJMRV9ORkNfREVTQ1JJUFRJT05fVEVYVDogXCJtZGxFbmFibGVOZmNEZXNjcmlwdGlvblRleHRcIixcbiAgICBNRExfRU5BQkxFX05GQ19CVVRUT05fVEVYVDogXCJtZGxFbmFibGVOZmNCdXR0b25UZXh0XCIsXG4gICAgTURMX0VOQUJMRV9ORkNfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwibWRsRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZFwiLFxuICAgIE5FWFRfUEFHRV9JRF9DQVJEX0ZST05UOiBcIm5leHRQYWdlSWRDYXJkRnJvbnRcIixcbiAgICBORVhUX1BBR0VfSURfQ0FSRF9CQUNLOiBcIm5leHRQYWdlSWRDYXJkQmFja1wiLFxuICAgIE5FWFRfUEFHRV9QQVNTUE9SVF9TSElGVDogXCJuZXh0UGFnZVBhc3Nwb3J0U2hpZnRcIixcbiAgICBORVhUX1BBR0VfUEFTU1BPUlRfRkxJUDogXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRXJyb3JDb2RlcyA9IHtcbiAgICBSRklEX0VSUk9SX05PX0VSUk9SOiAweDAwMDAwMDAxLFxuICAgIFJGSURfRVJST1JfQUxSRUFEWV9ET05FOiAweDAwMDAwMDAyLFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAweGZmZmZmZmZmLFxuICAgIFJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDogMHg4MDAxMDAwMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IDB4ODAwMTAwMDIsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjogMHg4MDAxMDAwNCxcbiAgICBSRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDogMHg4MDAxMDAwNSxcbiAgICBSRklEX0VSUk9SX05PVF9FTk9VR0hfTUVNT1JZOiAweDgwMDEwMDA2LFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6IDB4ODAwMTAwMDgsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IDB4ODAwMTAwMDksXG4gICAgUkZJRF9FUlJPUl9GSUxFX0lPX0VSUk9SOiAweDgwMDEwMDBBLFxuICAgIFJGSURfRVJST1JfQlVTWTogMHg4MDAxMDAwQixcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogMHg4MDAxMDAwQyxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEOiAweDgwMDIwMDAwLFxuICAgIFJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTogMHg4MDAyMDAwMSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IDB4ODAwMjAwMDIsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfTk9UX0NPTk5FQ1RFRDogMHg4MDAyMDAwMyxcbiAgICBSRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDogMHg4MDAyMDAwNCxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAweDgwMDIwMDA1LFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRURfU0NBUkQ6IDB4ODAwMjAwMDYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IDB4ODAwMjAwMTAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU0VDVVJJVFlfTUFOQUdFUjogMHg4NjAwMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9BUFBfU0VMRUNUSU9OX0ZBSUxVUkU6IDB4ODYwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IDB4ODYwMDAxMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRU5DX0ZBSUw6IDB4ODYwMDAxMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDEwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFX0RBVEE6IDB4ODYwMDAxMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOEVfTUlTU0lORzogMHg4NjAwMDIwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19NSVNTSU5HOiAweDg2MDAwMjAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzk5X01JU1NJTkc6IDB4ODYwMDAyMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fTUFDX0lOQ09SUkVDVDogMHg4NjAwMDIwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19JTkNPUlJFQ1Q6IDB4ODYwMDAyMDQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAweDg2MDAwMzAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1dST05HX1JORF9JQ0NfTEVOR1RIOiAweDg2MDAwMzAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOVF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogMHg4NjAwMDMwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0RTVF9GQUlMVVJFOiAweDg2MDAwMzA0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BTT19DRVJUSUZJQ0FURV9GQUlMVVJFOiAweDg2MDAwMzA1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfQVRfRkFJTFVSRTogMHg4NjAwMDMwNixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRVRfQ0hBTExFTkdFX0ZBSUxVUkU6IDB4ODYwMDAzMDcsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRU5FUkFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX05PVF9GT1VORDogMHg4MDAwNkE4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjE6IDB4ODAwMDYyODIsXG4gICAgUkZJRF9MQVlFUjZfV1JPTkdfUEFSQU1TOiAweDgwMDA2QjAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IDB4ODAwMDZBODAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9fUkVGRVJFTkNFX0RBVEE6IDB4ODAwMDZBODgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQ6IDB4ODAwMDYzQzEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQ6IDB4ODAwMDYzQzAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEOiAweDgwMDA2MjgzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEMjogMHg4MDAwNjk4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQyOiAweDgwMDA2OTg0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EMjogMHg4MDAwNjk4NSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfRkFJTEVEOiAweDgwMTA2M0MwLFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogMHg4MzAwMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSVNfQ0xPU0VEOiAweDgzMDAwMDAxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046IDB4ODMwMDAwMDIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9CQURfQ0VSVElGSUNBVEU6IDB4ODMwMDAwMTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDogMHg4MzAwMDAxMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMyxcbiAgICBSRklEX0VSUk9SX1Nlc3Npb25fUHJvY2VkdXJlX1R5cGVfVW5zdXBwb3J0ZWQ6IDB4ODMwMDAwMTQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6IDB4ODMwMDAwMTUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDE2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOU1VQUE9SVEVEX1NNX1RZUEU6IDB4ODMwMDAwMTcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6IDB4ODMwMDAwMTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogMHg4MzAwMDAxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MzAwMDAxQSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9OT1RfU0VUOiAweDgzMDAwMDFCLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogMHg4MzAwMDAxQyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDIwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTogMHg4MzAwMDAyMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogMHg4MzAwMDAyMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0FfS0VZUzogMHg4MzAwMDAyMyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6IDB4ODMwMDAwMjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAweDgzMDAwMDI1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9JTkNPUlJFQ1RfT1BUSU9OX0NBOiAweDgzMDAwMDI2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9DQV9GQUlMRUQ6IDB4ODMwMDAwMjcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogMHg4MzAwMDAyOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQUFfRkFJTEVEOiAweDgzMDAwMDI5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SSV9GQUlMRUQ6IDB4ODMwMDAwMkEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IDB4ODMwMDAwMzAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX0hBU0hfQ0hFQ0tfRkFJTEVEOiAweDgzMDAwMDMxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfRVhQSVJZOiAweDgzMDAwMDQwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IDB4ODMwMDAwNDEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfQ09NTVVOSVRZX0lEOiAweDgzMDAwMDQyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUkVRVUlSRVNfQVBQX1NFTEVDVElPTjogMHg4MzAwMDA1MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAweDgzMDAwMDUxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9WRVJJRklFRDogMHg4MzAwMDA1MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODMwMDAwNjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAweDgzMDEwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0lOQ09SUkVDVF9EQVRBOiAweDgzMDIwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTogMHg4MzAzMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODMwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfV1JPTkdfVEFHOiAweDgzMDUwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6IDB4ODMwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IDB4ODMwNzAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQUNDRVNTX0RFTklFRDogMHg4MzA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTk9fRVJST1I6IDB4ODQwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1RJTUVfT1VUOiAweDg0MDEwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT046IDB4ODQwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NSQzogMHg4NDAzMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9JTlRFR1JJVFk6IDB4ODQwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfTEVOR1RIOiAweDg0MDUwMDAwLFxuICAgIFJGSURfRVJST1JfTGF5ZXIzNF9SRlU6IDB4ODQwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTl9UT09fTUFOWTogMHg4NDA3MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0xfQjogMHg4NDA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9DT05URU5UUzogMHg4NDA5MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0w6IDB4ODQwQTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0dMT0JBTF9USU1FX09VVDogMHg4NDBCMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTUlGQVJFX0FVVEg6IDB4ODQwQzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9FUlJPUjogMHg4NDBEMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0NPTExJU0lPTjogMHg4NDBFMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0FDS05PV0xFREdFOiAweDg0MEYwMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyA9IHtcbiAgICBFUlJfTERTX09LOiAweDAwMDAwMDAxLFxuICAgIEVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDAxLFxuICAgIFJSX0xEU19BU05fTk9UX0VOT1VHSF9EQVRBOiAweDgwMDAwMDAyLFxuICAgIEVSUl9MRFNfQVNOX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDAwMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOCxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9FTkNBUF9DT05URU5UU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDBBLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDExLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTMsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE0LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RHX0hBU0hFU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNixcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMixcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE4LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE5LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JU1NVRVJfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUMsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX1BLX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFFLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUYsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjIsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjQsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjUsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI2LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1VOU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI3LFxuICAgIEVSUl9MRFNfSUNBT19MRFNfT0JKRUNUX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzAsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTogMHg4MDAwMDAzMSxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDAzMixcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg4MDAwMDAzMyxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfRVJST1I6IDB4ODAwMDAwMzQsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19NSVNTRUQ6IDB4ODAwMDAwMzYsXG4gICAgRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTogMHg4MDAwMDAzNSxcbiAgICBFUlJfTERTX0FVVEhfRVJST1I6IDB4ODAwMDAwNTAsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwNTEsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDgwMDAwMDUyLFxuICAgIEVSUl9MRFNfQVVUSF9NRVNTRURfQUxHT1JJVEhNUzogMHg4MDAwMDA1MyxcbiAgICBFUlJfTERTX0FVVEhfUFVCTElDX0tFWV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTQsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NixcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDA1NyxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOiAweDgwMDAwMDU4LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19OT1RfREVGSU5FRDogMHg4MDAwMDA1OSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MDAwMDA1QSxcbiAgICBFUlJfTERTX0RHX1dST05HX1RBSDogMHg4MDAwMDA3MCxcbiAgICBFUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDA3MSxcbiAgICBFUlJfTERTX0JBUF9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAxMSxcbiAgICBFUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDgxMDAwMDIwLFxuICAgIEVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAyMSxcbiAgICBFUlJfTERTX1BBQ0VfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjIsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDIzLFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOiAweDgxMDAwMDI0LFxuICAgIEVSUl9MRFNfUEFDRV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDI1LFxuICAgIEVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDogMHg4MTAwMDAyNixcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAweDgxMDAwMDI3LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyOCxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06IDB4ODEwMDAwMjksXG4gICAgRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAyQSxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfSU5DT1JSRUNUOiAweDgxMDAwMDJCLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9DQU5UX1ZFUklGWTogMHg4MTAwMDAyQyxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOiAweDgxMDAwMDJELFxuICAgIEVSUl9MRFNfUEFDRV9JTV9TQ0hFTUVfSU5DT1JSRUNUOiAweDgxMDAwMDJFLFxuICAgIEVSUl9MRFNfUEFDRV9JTV9SQU5ET01fTUFQUElOR19GQUlMRUQ6IDB4ODEwMDAwMkYsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTogMHg4MTAwMDAzMCxcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9JTkZPOiAweDgxMDAwMDMxLFxuICAgIEVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwMzIsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6IDB4ODEwMDAwMzMsXG4gICAgRVJSX0xEU19DQV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAzNCxcbiAgICBFUlJfTERTX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDM1LFxuICAgIEVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMzYsXG4gICAgRVJSX0xEU19DQV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM3LFxuICAgIEVSUl9MRFNfQ0FfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAweDgxMDAwMDM4LFxuICAgIEVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwNDAsXG4gICAgRVJSX0xEU19UQV9DQU5UX0JVSUxEX0NFUlRJRklDQVRFX0NIQUlOOiAweDgxMDAwMDQxLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOiAweDgxMDAwMDQyLFxuICAgIEVSUl9MRFNfVEFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwNDMsXG4gICAgRVJSX0xEU19UQV9TSUdOQVRVUkVfQlVJTERJTkdfRVJST1I6IDB4ODEwMDAwNDQsXG4gICAgRVJSX0xEU19UQV9JTlZBTElEX0tFWV9BTEdPUklUSE1fUEFSQU1FVEVSUzogMHg4MTAwMDA0NSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDUwLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1MSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6IDB4ODEwMDAwNTIsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOiAweDgxMDAwMDUzLFxuICAgIEVSUl9MRFNfQUFfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDU0LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOiAweDgxMDAwMDU1LFxuICAgIEVSUl9MRFNfQUFfSU5DT1JSRUNUX1RSQUlMRVI6IDB4ODEwMDAwNTYsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgxMDAwMDU3LFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6IDB4ODEwMDAwNzAsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDcxLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPTVBMRVRFX0RBVEE6IDB4ODEwMDAwNzIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOiAweDgxMDAwMDYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfVU5TVVBQT1JURURfVEVSTUlOQUxfVFlQRTogMHg4MTAwMDA2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOiAweDgxMDAwMDYsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTlZBTElEX1BBUkFNUzogMHg4MTAwMDA2NSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ1BJX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYxLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfVE9fSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjcsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY4LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjksXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9NSVNTSU5HOiAweDgxMDAwMTZBLFxuICAgIEVSUl9MRFNfVkRTX1VOU1VQUE9SVEVEX1ZFUlNJT046IDB4ODEwMDAyMDAsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6IDB4ODEwMDAyMDEsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMjAyLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOiAweDgxMDAwMjAzLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOiAweDgxMDAwMjA0LFxuICAgIEVSUl9MRFNfVkRTX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMzAxLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0hFQURFUjogMHg4MTAwMDMwMixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9UWVBFOiAweDgxMDAwMzAzLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAzMDQsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSVNTVUlOR19DT1VOVFJZOiAweDgxMDAwMzA1LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6IDB4ODEwMDAzMDYsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHTkFUVVJFOiAweDgxMDAwMzA3LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19BTEdPUklUSE06IDB4ODEwMDAzMDgsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6IDB4ODEwMDAzMDksXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOiAweDgxMDAwMzBBLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9VU0FHRV9JTkNPUlJFQ1Q6IDB4ODEwMDAxMkIsXG4gICAgRVJSX0xEU19QQUNFX0lNX01BUFBJTkdfREFUQV9JTkNPUlJFQ1Q6IDB4ODEwMDAxMkYsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUgPSB7XG4gICAgQ1RfVU5ERUZJTkVEOiAwLFxuICAgIENUX0NTQ0E6IDEsXG4gICAgQ1RfQ1NDQV9MSU5LOiAyLFxuICAgIENUX0RTOiAzLFxuICAgIENUX01MUzogNCxcbiAgICBDVF9ERVZfTFM6IDUsXG4gICAgQ1RfREVGX0xTOiA2LFxuICAgIENUX0JMUzogNyxcbiAgICBDVF9MRFMyOiA4LFxuICAgIENUX0JDUzogOSxcbiAgICBDVF9CQ1NOQzogMTAsXG4gICAgQ1RfTURMUzogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBSR0xNZWFzdXJlU3lzdGVtID0ge1xuICAgIE1FVFJJQzogMCxcbiAgICBJTVBFUklBTDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1Jlc3VsdFR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FTVBUWTogMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19JTUFHRTogMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTEVfSU1BR0U6IDIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfT0NSX0VYVEVOREVEOiAzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERVM6IDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9HUkFQSElDUzogNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9URVNUX1FVQUxJVFk6IDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9UWVBFU19DQU5ESURBVEVTOiA4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ0hPU0VOX0RPQ1VNRU5UX1RZUEVfQ0FORElEQVRFOiA5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRTX0lORk9fTElTVDogMTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9PQ1JfTEVYSUNBTF9BTkFMWVpFOiAxNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19VTkNST1BQRURfSU1BR0U6IDE2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVklTVUFMX09DUl9FWFRFTkRFRDogMTcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfVEVYVF9EQVRBOiAxOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19JTUFHRV9EQVRBOiAxOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0FVVEhFTlRJQ0lUWTogMjAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FT1NfSU1BR0U6IDIzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFZRVJfSU1BR0U6IDI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFOiAyNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRV9URVhUX0RBVEE6IDI2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklFTERfRklMRV9JTUFHRTogMjcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9EQVRBQkFTRV9DSEVDSzogMjgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSU5HRVJQUklOVF9URU1QTEFURV9JU086IDI5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5QVVRfSU1BR0VfUVVBTElUWTogMzAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9SRklEX1NFU1NJT046IDQ4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfRU5DUllQVEVEX1JDTDogNDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9MSUNFTlNFOiA1MCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1RFWFQ6IDM2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU1BR0VTOiAzNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0hPTE9fUEFSQU1TOiA0NyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1BPU0lUSU9OOiA4NSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NVU1RPTTogMTAwLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9SQVdfREFUQTogMTAxLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9URVhUX0RBVEE6IDEwMixcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfSU1BR0VfREFUQTogMTAzLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9CSU5BUllfREFUQTogMTA0LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9PUklHSU5BTF9HUkFQSElDUzogMTA1LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9EVENfVkM6IDEwOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01ETF9QQVJTRURfUkVTUE9OU0U6IDEyMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1ZEU19OQzogMTI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVkRTOiAxMjUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFX1BPU0lUSU9OOiA2MixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9QT1NJVElPTjogNjEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9MSVZFX1BPUlRSQUlUOiAzMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1NUQVRVUzogMzMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OOiAzNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VYVF9QT1JUUkFJVDogMzUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CU0lfWE1MX1YyOiA3Myxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVNRExEZXZpY2VSZXRyaWV2YWwgPSB7XG4gICAgTkZDOiAxLFxuICAgIEJMRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25UaGVtZSA9IHtcbiAgICBDTEVBUjogMCxcbiAgICBMSVFVSURfR0xBU1M6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbiAgICByZmJyXzE2OTU6IDB4MTAsXG4gICAgcmZicl8zMzkwOiAweDIwLFxuICAgIHJmYnJfNjc4MDogMHg0MCxcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQlVUVDogMCxcbiAgICBST1VORDogMSxcbiAgICBTUVVBUkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCA9IHtcbiAgICBSQ0ZfRElTQUJMRUQ6IDAsXG4gICAgUkNGX1ZFUklGSUVEOiAxLFxuICAgIFJDRl9OT1RfVkVSSUZJRUQ6IDIsXG4gICAgUkNGX0NPTVBBUkVfVFJVRTogMyxcbiAgICBSQ0ZfQ09NUEFSRV9GQUxTRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckFjdGlvbiA9IHtcbiAgICBDT01QTEVURTogMCxcbiAgICBQUk9DRVNTOiAxLFxuICAgIE1PUkVfUEFHRVNfQVZBSUxBQkxFOiAyLFxuICAgIENBTkNFTDogMyxcbiAgICBFUlJPUjogNCxcbiAgICBQUk9DRVNTX1dISVRFX0ZMQVNITElHSFQ6IDUsXG4gICAgVElNRU9VVDogNixcbiAgICBQUk9DRVNTSU5HX09OX1NFUlZJQ0U6IDcsXG4gICAgUFJPQ0VTU19XSElURV9VVl9JTUFHRVM6IDEwMixcbiAgICBQUk9DRVNTX0lSX0ZSQU1FOiAxMDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfQWRkRGF0YVRvUGFja2FnZTogMTIxMjEsXG4gICAgZVBDX1Byb2NNZ3JfRmluYWxpemVQYWNrYWdlOiAxMjEyMixcbiAgICBlUENfUHJvY01ncl9DcmVhdGVCYWNrZW5kVHJhbnNhY3Rpb246IDEyMTI1LFxuICAgIGVQQ19Qcm9jTWdyX1VubG9hZDogMTIxMDcsXG4gICAgZVBDX1Byb2NNZ3JfQ2hlY2tEYXRhYmFzZTogMTIxMDksXG4gICAgZVBDX1Byb2NNZ3JfQ29tcGFyZVBvcnRyYWl0czogMTIxMTEsXG4gICAgZVBDX1JGSURfU2V0VENDUGFyYW1zOiAxMjUyMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEUmVhZGluZ0J1ZmZlclNpemUgPSB7XG4gICAgRVhURU5ERURfTEVOR1RIOiAtMSxcbiAgICBTVEFOREFSRF9MRU5HVEg6IDAsXG59XG5cbmV4cG9ydCBjb25zdCBQS0RSZXNvdXJjZVR5cGUgPSB7XG4gICAgQ0VSVElGSUNBVEVfUEE6IDAsXG4gICAgQ0VSVElGSUNBVEVfVEE6IDEsXG4gICAgTERJRjogMixcbiAgICBDUkw6IDMsXG4gICAgTUw6IDQsXG4gICAgREVGTDogNSxcbiAgICBERVZMOiA2LFxuICAgIEJMOiA3LFxuICAgIExESUZfVEE6IDgsXG4gICAgTUxfVEE6IDksXG4gICAgQ0JPUjogMTAsXG5cbiAgICBnZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcInBhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcbiAgICAgICAgICAgIGNhc2UgXCJ0YVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1RBXG4gICAgICAgICAgICBjYXNlIFwibGRpZlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxESUZcbiAgICAgICAgICAgIGNhc2UgXCJjcmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DUkxcbiAgICAgICAgICAgIGNhc2UgXCJtbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1MXG4gICAgICAgICAgICBjYXNlIFwiZGVmbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFRkxcbiAgICAgICAgICAgIGNhc2UgXCJkZXZsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVWTFxuICAgICAgICAgICAgY2FzZSBcImJsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQkxcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2wgPSB7XG4gICAgYWNEZWZhdWx0IDogMCxcbiAgICBhY0NoaXBBY2Nlc3NfQkFDIDogMSxcbiAgICBhY0NoaXBBY2Nlc3NfUEFDRSA6IDIsXG4gICAgYWNMb2NhbF9QSU4gOiAzLFxufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzID0ge1xuICAgIElOSVRJQUxJWkFUSU9OX0NPUkVfQUJTRU5UOiAwLFxuICAgIElOSVRJQUxJWkFUSU9OX0ZBSUxFRDogMSxcbiAgICBJTkNPUlJFQ1RfU0NFTkFSSU86IDIsXG4gICAgTk9fUkVTVUxUOiAzLFxuICAgIFJFTU9WRV9EQVRBQkFTRTogNCxcbiAgICBGRVRDSElOR19EQVRBQkFTRTogNSxcbiAgICBEQl9ERVNDUklQVElPTl9OT1RfRk9VTkQ6IDcsXG4gICAgU0FWRV9EQjogOCxcbiAgICBET1dOTE9BRF9EQl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDksXG4gICAgRE9XTkxPQURfREI6IDEwLFxuICAgIFJGSURfRVJST1I6IDEyLFxuICAgIExJQ0VOU0VfQUJTRU5UX09SX0NPUlJVUFRFRDogMTMsXG4gICAgTElDRU5TRV9JTlZBTElEX0RBVEU6IDE0LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9WRVJTSU9OOiAxNSxcbiAgICBMSUNFTlNFX0lOVkFMSURfREVWSUNFX0lEOiAxNixcbiAgICBMSUNFTlNFX0lOVkFMSURfU1lTVEVNX09SX0FQUF9JRDogMTcsXG4gICAgTElDRU5TRV9OT19DQVBBQklMSVRJRVM6IDE4LFxuICAgIExJQ0VOU0VfTk9fQVVUSEVOVElDSVRZOiAxOSxcbiAgICBSRUNPUkRfUFJPQ0VTU19JTlZBTElEX09VVFBVVF9VUkw6IDIwLFxuICAgIExJQ0VOU0VfT05MSU5FX0VSUk9SOiAyMSxcbiAgICBMSUNFTlNFX05PX0RBVEFCQVNFOiAyMixcbiAgICBMSUNFTlNFX0RBVEFCQVNFX0lOQ09SUkVDVDogMjMsXG4gICAgSU5WQUxJRF9UQ0NfUEFSQU1TOiAyNCxcbiAgICBBTFJFQURZX0lOX1BST0dSRVNTOiAyNSxcbiAgICBTVEFSVF9CQUNLRU5EX1BST0NFU1NJTkc6IDI2LFxuICAgIEFERF9EQVRBX1RPX1BBQ0tBR0U6IDI3LFxuICAgIEZJTkFMSVpFX0ZBSUxFRDogMjgsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IDI5LFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiAzMCxcbiAgICBDQU5OT1RfVVNFX0NBTUVSQV9JTl9TQ0VOQVJJTzogNDAsXG4gICAgQkxVRVRPT1RIX05PX1BFUk1JU1NJT046IDQxLFxuICAgIE5BVElWRV9KQVZBX0VYQ0VQVElPTjogMTAwMCxcbiAgICBCQUNLRU5EX09OTElORV9QUk9DRVNTSU5HOiAzMDMsXG4gICAgV1JPTkdfSU5QVVQ6IDQwMCxcbiAgICBSRVNVTFRfVU5BVkFJTEFCTEU6IDQxMCxcbiAgICBSRVNVTFRfV1JPTkdfT1VUUFVUOiA0MTEsXG4gICAgU1RBVEVfRVhDRVBUSU9OOiA1MDAsXG4gICAgQkxFX0VYQ0VQVElPTjogNjAwLFxuICAgIEZFQVRVUkVfQkxVRVRPT1RIX0xFX05PVF9TVVBQT1JURUQ6IDYwMSxcbiAgICBBUFBfQkFDS0dST1VORDogNzAwLFxuICAgIE9OTElORV9QUk9DRVNTSU5HX1dST05HX0lOUFVUOiA4MDAsXG4gICAgTURMX0VYQ0VQVElPTjogOTAwLFxufVxuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9JZGVudGlmaWVyID0ge1xuICAgIFNDRU5BUklPX01SWjogXCJNcnpcIixcbiAgICBTQ0VOQVJJT19CQVJDT0RFOiBcIkJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19MT0NBVEU6IFwiTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fT0NSOiBcIk9jclwiLFxuICAgIFNDRU5BUklPX0RPQ1RZUEU6IFwiRG9jVHlwZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFOiBcIk1yek9yQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9MT0NBVEU6IFwiTXJ6T3JMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfQU5EX0xPQ0FURTogXCJNcnpBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19CQVJDT0RFX0FORF9MT0NBVEU6IFwiQmFyY29kZUFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9PQ1I6IFwiTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERV9PUl9PQ1I6IFwiTXJ6T3JCYXJjb2RlT3JPY3JcIixcbiAgICBTQ0VOQVJJT19MT0NBVEVfVklTVUFMX0FORF9NUlpfT1JfT0NSOiBcIkxvY2F0ZVZpc3VhbF9BbmRfTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19GVUxMX1BST0NFU1M6IFwiRnVsbFByb2Nlc3NcIixcbiAgICBTQ0VOQVJJT19GVUxMX0FVVEg6IFwiRnVsbEF1dGhcIixcbiAgICBTQ0VOQVJJT19JRDNSVVM6IFwiSWQzUnVzXCIsXG4gICAgU0NFTkFSSU9fUlVTX1NUQU1QOiBcIlJ1c1N0YW1wXCIsXG4gICAgU0NFTkFSSU9fT0NSX0ZSRUU6IFwiT2NyRnJlZVwiLFxuICAgIFNDRU5BUklPX0NSRURJVF9DQVJEOiBcIkNyZWRpdENhcmRcIixcbiAgICBTQ0VOQVJJT19DQVBUVVJFOiBcIkNhcHR1cmVcIixcbiAgICBTQ0VOQVJJT19EVEM6IFwiRFRDXCIsXG4gICAgU0NFTkFSSU9fUkZJRDogXCJSRklEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUgPSB7XG4gICAgQUNQVF9VTkRFRklORUQ6IDAsXG4gICAgQUNQVF9CQUM6IDEsXG4gICAgQUNQVF9QQUNFOiAyLFxuICAgIEFDUFRfQ0E6IDMsXG4gICAgQUNQVF9UQTogNCxcbiAgICBBQ1BUX0FBOiA1LFxuICAgIEFDUFRfUkk6IDYsXG4gICAgQUNQVF9DQVJEX0lORk86IDEwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDB4MDAwMTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fRE9DVU1FTlRfUkVBRFk6IDB4MDAwMTAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDQ6IDB4MDAwMTAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDB4MDAwMTAwMEEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUFJPR1JFU1M6IDB4MDAwMTAwMEIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVEFfU1RFUDogMHgwMDAxMDAwRSxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogMHgwMDAxMDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9JU09fRVJST1I6IDB4MDAwMTEwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfUkVRVUVTVDogMHgwMDAxMzAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogMHgwMDAxNDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9ESVNDT05ORUNURUQ6IDB4MDAwMjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAweDAwMDIwMDAxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfUkVDRUlWRUQ6IDB4MDAwMjAwMDIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1RJTUU6IDB4MDAwMjAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAweDAwMDIwMDA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfU0VOVDogMHgwMDAyMDAwNSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfU1BFRUQ6IDB4MDAwMjAwMDYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDB4MDAwMjAwMDcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0lORzogMHgwMDAyMDAwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VYVF9MRU5HVEhfU1VQUE9SVDogMHgwMDAyMDAxMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMHgwMDAyMDAxMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTl9JVEVNOiAweDAwMDIwMDEyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NDRU5BUklPOiAweDAwMDIwMDIwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDB4MDAwMzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX05PVF9GT1VORDogMHgwMDA0MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VORF9PRl9GSUxFOiAweDAwMDUwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAweDAwMDYwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQVBQTElDQVRJT05fU0VMRUNURUQ6IDB4MDAwNzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX1NUQVJUOiAweDAwMDgwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDB4MDAwOTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfU0VDVVJJVFlfT0JKRUNUX0NIRUNLOiAweDAwMEEwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0ZJTEVfQ0hFQ0s6IDB4MDAwQjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDB4MDAwQzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQVVYSUxJQVJZX0RBVEFfVkFMSURBVElPTjogMHgwMDBEMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9SSV9TRUNUT1JfSUQ6IDB4MDAwRTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogMHgwMDBGMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TRVNTSU9OX0ZJTEVfREFUQV9VUERBVEVEOiAweDAwMTAwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1RDQ19UQV9SRVNPVVJDRVM6IDB4MDAxMTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVENDX1RBX1NJR05BVFVSRTogMHgwMDExMDAwMSxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVBvc2l0aW9uID0ge1xuICAgIFVOU1BFQ0lGSUVEOiAwLFxuICAgIEJBQ0s6IDEsXG4gICAgRlJPTlQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9QYXNzd29yZF9UeXBlID0ge1xuICAgIFBQVF9VTktOT1dOOiAwLFxuICAgIFBQVF9NUlo6IDEsXG4gICAgUFBUX0NBTjogMixcbiAgICBQUFRfUElOOiAzLFxuICAgIFBQVF9QVUs6IDQsXG4gICAgUFBUX1BJTl9FU0lHTjogNSxcbiAgICBQUFRfU0FJOiA2LFxuICAgIFBQVF9NUlpfSEFTSDogNyxcbiAgICBQUFRfUElOX0xPQ0FMOiA4LFxufVxuXG5leHBvcnQgY29uc3QgVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFVOS05PV046IC0xLFxuICAgIFNDQUxFX1RPX0ZJTEw6IDAsXG4gICAgU0NBTEVfQVNQRUNUX0ZJVDogMSxcbiAgICBTQ0FMRV9BU1BFQ1RfRklMTDogMixcbiAgICBSRURSQVc6IDMsXG4gICAgQ0VOVEVSOiA0LFxuICAgIFRPUDogNSxcbiAgICBCT1RUT006IDYsXG4gICAgTEVGVDogNyxcbiAgICBSSUdIVDogOCxcbiAgICBUT1BfTEVGVDogOSxcbiAgICBUT1BfUklHSFQ6IDEwLFxuICAgIEJPVFRPTV9MRUZUOiAxMSxcbiAgICBCT1RUT01fUklHSFQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVJlc3VsdCA9IHtcbiAgICBOT19FUlI6IDAsXG4gICAgSU5WQUxJRF9SRVNVTFQ6IDE0MCxcbiAgICBOVUxMX1BUUl9FUlI6IC02MDAxLFxuICAgIEJBRF9BUkdfRVJSOiAtNjAwMixcbiAgICBTSVpFX0VSUjogLTYwMDMsXG4gICAgUkFOR0VfRVJSOiAtNjAwNCxcbiAgICBJTlRFUk5BTF9FUlI6IC02MDA1LFxuICAgIFRSWV9FWENFUFRfRVJSOiAtNjAwNixcbiAgICBCQVJfQ09ERV9OT1RfRk9VTkQ6IC02MDA4LFxuICAgIEJBUl9DT0RFX0RFQ09ERV9FUlI6IC02MDEwLFxuICAgIE5PX1VTRVJfRExMX0ZPVU5EOiAtNjAxOSxcbiAgICBOT19JUFBfRExMX0ZPVU5EOiAtNjAyMCxcbiAgICBJUFBfRVhFQ19FUlI6IC02MDI0LFxuICAgIElQUF9UUllfRVhDRVBUX0VSUjogLTYwMjUsXG4gICAgQkFSQ09ERV9FUlJPUl9JTlBVVF9QQVJBTTogLTExMDAxLFxuICAgIEJBUkNPREVfRVJST1JfRklOSVQ6IC0xMTAwNixcbiAgICBCQVJDT0RFX0VSUk9SX05PVF9MT0FEX0lQX0RFQ09ERURfTEw6IC0xMTAxMixcbiAgICBCQVJDT0RFX0VSUk9SX0lOTkVSX1BST0JMRU06IC0xMTEwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RFQ09ERV8xRF9CQURfREVDT0RFOiAtMTEyMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EX1JPV19PUl9DT0xVTU46IC0xMTIwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1g6IC0xMTIwMixcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1k6IC0xMTIwMyxcbiAgICBCQVJDT0RFX0VSUk9SXzJEX1VHT0xfTUFYOiAtMTEyMDQsXG4gICAgQkFSQ09ERV9FUlJPUl9JTkRFRklOSVRFTFlfREVDT0RFRDogLTExMjEwLFxuICAgIEJBUkNPREVfRVJST1JfRExMX05PVF9JTklUOiAtMTEzMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9JUF9ERUNPREVfRExMX1RyeV9FeGNlcHQ6IC0xMTQwMCxcbiAgICBJUERFQ09ERV9FUlJPUl9MQVJHRUVSUk9SUzogLTQ1MDMsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRDT0xVTU5TOiAtNDUwNCxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVFJPV1M6IC00NTA1LFxuICAgIElQREVDT0RFX0VSUk9SX0lOQ09SUkVDVF9FUlJPUl9MRVZFTDogLTQ1MTEsXG4gICAgSVBERUNPREVfRVJST1JfTE9BRElOR19ERVZfVEFCTEU6IC00NTEyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQXBwbGljYXRpb25fVHlwZSA9IHtcbiAgICBBVF9VTlNQRUNJRklFRDogMCxcbiAgICBBVF9ST09UX0ZJTEVTOiAwLFxuICAgIGVQQVNTUE9SVDogMSxcbiAgICBlSUQ6IDIsXG4gICAgZVNJR046IDMsXG4gICAgZURMOiA0LFxuICAgIExEUzJfVFJBVkVMX1JFQ09SRFM6IDUsXG4gICAgTERTMl9WSVNBX1JFQ09SRFM6IDYsXG4gICAgTERTMl9BRERfQklPTUVUUklDUzogNyxcbiAgICBlRFRDX1BDOiA4LFxuICAgIEFUX0FQUExFVF9ST09UOiA1MCxcbiAgICBBVF9VU0VSX0RFRklORUQ6IDEwMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25NYXRyaXggPSB7XG4gICAgTkVYVF9QQUdFX0lEX0NBUkRfRlJPTlQ6IFwibmV4dFBhZ2VJZENhcmRGcm9udFwiLFxuICAgIE5FWFRfUEFHRV9JRF9DQVJEX0JBQ0s6IFwibmV4dFBhZ2VJZENhcmRCYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlTURMRGV2aWNlRW5nYWdlbWVudCA9IHtcbiAgICBRUjogMCxcbiAgICBORkM6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tEaWFnbm9zZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1M6IDEsXG4gICAgSU5WQUxJRF9JTlBVVF9EQVRBOiAyLFxuICAgIElOVEVSTkFMX0VSUk9SOiAzLFxuICAgIEVYQ0VQVElPTl9JTl9NT0RVTEU6IDQsXG4gICAgVU5DRVJUQUlOX1ZFUklGSUNBVElPTjogNSxcbiAgICBORUNFU1NBUllfSU1BR0VfTk9UX0ZPVU5EOiA3LFxuICAgIFBIT1RPX1NJREVTX05PVF9GT1VORDogOCxcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAxMCxcbiAgICBTWU5UQVhfRVJST1I6IDExLFxuICAgIExPR0lDX0VSUk9SOiAxMixcbiAgICBTT1VSQ0VTX0NPTVBBUklTT05fRVJST1I6IDEzLFxuICAgIEZJRUxEU19DT01QQVJJU09OX0xPR0lDX0VSUk9SOiAxNCxcbiAgICBJTlZBTElEX0ZJRUxEX0ZPUk1BVDogMTUsXG4gICAgVFJVRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjEsXG4gICAgRklYRURfUEFUVEVSTl9FUlJPUjogMjIsXG4gICAgTE9XX0NPTlRSQVNUX0lOX0lSX0xJR0hUOiAyMyxcbiAgICBJTkNPUlJFQ1RfQkFDS0dST1VORF9MSUdIVDogMjQsXG4gICAgQkFDS0dST1VORF9DT01QQVJJU09OX0VSUk9SOiAyNSxcbiAgICBJTkNPUlJFQ1RfVEVYVF9DT0xPUjogMjYsXG4gICAgUEhPVE9fRkFMU0VfTFVNSU5JU0NFTkNFOiAyNyxcbiAgICBUT09fTVVDSF9TSElGVDogMjgsXG4gICAgQ09OVEFDVF9DSElQX1RZUEVfTUlTTUFUQ0g6IDI5LFxuICAgIEZJQkVSU19OT1RfRk9VTkQ6IDMwLFxuICAgIFRPT19NQU5ZX09CSkVDVFM6IDMxLFxuICAgIFNQRUNLU19JTl9VVjogMzMsXG4gICAgVE9PX0xPV19SRVNPTFVUSU9OOiAzNCxcbiAgICBJTlZJU0lCTEVfRUxFTUVOVF9QUkVTRU5UOiA0MCxcbiAgICBWSVNJQkxFX0VMRU1FTlRfQUJTRU5UOiA0MSxcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9DT0xPUkVEOiA0MixcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9HUkFZU0NBTEU6IDQzLFxuICAgIFBIT1RPX1dISVRFX0lSX0RPTlRfTUFUQ0g6IDQ0LFxuICAgIFVWX0RVTExfUEFQRVJfTVJaOiA1MCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fTVJaOiA1MSxcbiAgICBVVl9EVUxMX1BBUEVSX1BIT1RPOiA1MixcbiAgICBVVl9EVUxMX1BBUEVSX0JMQU5LOiA1MyxcbiAgICBVVl9EVUxMX1BBUEVSX0VSUk9SOiA1NCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fQkxBTks6IDU1LFxuICAgIEJBRF9BUkVBX0lOX0FYSUFMOiA2MCxcbiAgICBGQUxTRV9JUElfUEFSQU1FVEVSUzogNjUsXG4gICAgRU5DUllQVEVEX0lQSV9OT1RfRk9VTkQ6IDY2LFxuICAgIEVOQ1JZUFRFRF9JUElfREFUQV9ET05UX01BVENIOiA2NyxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9HTEFSRVNfSU5fUEhPVE9fQVJFQTogODEsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9QSE9UT19SRVBMQUNFRDogODIsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9MQU5ETUFSS1NfQ0hFQ0tfRVJST1I6IDgzLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfRkFDRV9QUkVTRU5DRV9DSEVDS19FUlJPUjogODQsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9GQUNFX0FCU0VOQ0VfQ0hFQ0tfRVJST1I6IDg1LFxuICAgIENIRF9GSUVMRF9QT1NfQ09SUkVDVE9SX0lOQ09SUkVDVF9IRUFEX1BPU0lUSU9OOiA4NixcbiAgICBDSERfRklFTERfUE9TX0NPUlJFQ1RPUl9BR0VfQ0hFQ0tfRVJST1I6IDg3LFxuICAgIENIRF9GSUVMRF9QT1NfQ09SUkVDVE9SX1NFWF9DSEVDS19FUlJPUjogODgsXG4gICAgT1ZJX0lSX0lOVklTSUJMRTogOTAsXG4gICAgT1ZJX0lOU1VGRklDSUVOVF9BUkVBOiA5MSxcbiAgICBPVklfQ09MT1JfSU5WQVJJQUJMRTogOTIsXG4gICAgT1ZJX0JBRF9DT0xPUl9GUk9OVDogOTMsXG4gICAgT1ZJX0JBRF9DT0xPUl9TSURFOiA5NCxcbiAgICBPVklfV0lERV9DT0xPUl9TUFJFQUQ6IDk1LFxuICAgIE9WSV9CQURfQ09MT1JfUEVSQ0VOVDogOTYsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9BQlNFTlQ6IDEwMCxcbiAgICBIT0xPR1JBTV9TSURFX1RPUF9JTUFHRVNfQUJTRU5UOiAxMDEsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9QUkVTRU5UOiAxMDIsXG4gICAgSE9MT0dSQU1fRlJBTUVTX0lTX0FCU0VOVDogMTAzLFxuICAgIEhPTE9HUkFNX0hPTE9fRklFTERfSVNfQUJTRU5UOiAxMDQsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlRFUlJVUFRFRDogMTEwLFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRDogMTExLFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0NPTE9SUzogMTEyLFxuICAgIFBIT1RPX1BBVFRFUk5fSVJfVklTSUJMRTogMTEzLFxuICAgIFBIT1RPX1BBVFRFUk5fTk9UX0lOVEVSU0VDVDogMTE0LFxuICAgIFBIT1RPX1NJWkVfSVNfV1JPTkc6IDExNSxcbiAgICBQSE9UT19QQVRURVJOX0lOVkFMSURfQ09MT1I6IDExNixcbiAgICBQSE9UT19QQVRURVJOX1NISUZURURfVkVSVDogMTE3LFxuICAgIFBIT1RPX1BBVFRFUk5fUEFUVEVSTl9OT1RfRk9VTkQ6IDExOCxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDExOSxcbiAgICBQSE9UT19JU19OT1RfUkVDVEFOR0xFOiAxMjAsXG4gICAgUEhPVE9fQ09STkVSU19JU19XUk9ORzogMTIxLFxuICAgIERPQ1VNRU5UX0lTX0NBTkNFTExJTkc6IDEyMixcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9CTFVFOiAxMzAsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfR1JFRU46IDEzMSxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9SRUQ6IDEzMixcbiAgICBURVhUX1NIT1VMRF9CRV9CTEFDSzogMTMzLFxuICAgIFNFQ1VSSVRZX1RFWFRfSVNfQUJTRU5UOiAxMzQsXG4gICAgQkFSQ09ERV9XQVNfUkVBRF9XSVRIX0VSUk9SUzogMTQwLFxuICAgIEJBUkNPREVfREFUQV9GT1JNQVRfRVJST1I6IDE0MSxcbiAgICBCQVJDT0RFX1NJWkVfUEFSQU1TX0VSUk9SOiAxNDIsXG4gICAgTk9UX0FMTF9CQVJDT0RFU19SRUFEOiAxNDMsXG4gICAgR0xBUkVTX0lOX0JBUkNPREVfQVJFQTogMTQ0LFxuICAgIENIRF9OT19DRVJUSUZJQ0FURV9GT1JfRElHSVRBTF9TSUdOQVRVUkVfQ0hFQ0s6IDE0NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1BPUlRSQUlUU19ESUZGRVI6IDE1MCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfUkVQTFk6IDE1MSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1NFUlZJQ0VfRVJST1I6IDE1MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PVF9FTk9VR0hfSU1BR0VTOiAxNTMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19MSVZFX1BIT1RPOiAxNTQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX0xJQ0VOU0U6IDE1NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1BPUlRSQUlUX0RFVEVDVEVEOiAxNTYsXG4gICAgTU9CSUxFX0lNQUdFU19VTlNVSVRBQkxFX0xJR0hUX0NPTkRJVElPTlM6IDE2MCxcbiAgICBNT0JJTEVfSU1BR0VTX1dISVRFX1VWX05PX0RJRkZFUkVOQ0U6IDE2MSxcbiAgICBGSU5HRVJQUklOVFNfQ09NUEFSSVNPTl9NSVNNQVRDSDogMTcwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9OT1RfREVURUNURUQ6IDE4MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfQ09NUEFSSVNPTl9GQUlMRUQ6IDE4MSxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfR0xBUkVfSU5fQ0VOVEVSX0FCU0VOVDogMTgyLFxuICAgIEhPTE9fRUxFTUVOVF9TSEFQRV9FUlJPUjogMTgzLFxuICAgIEFMR09SSVRITV9TVEVQU19FUlJPUjogMTg0LFxuICAgIEhPTE9fQVJFQVNfTk9UX0xPQURFRDogMTg1LFxuICAgIEZJTklTSEVEX0JZX1RJTUVPVVQ6IDE4NixcbiAgICBIT0xPX1BIT1RPX0RPQ1VNRU5UX09VVFNJREVfRlJBTUU6IDE4NyxcbiAgICBMSVZFTkVTU19ERVBUSF9DSEVDS19GQUlMRUQ6IDE5MCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19TWU1CT0xfUE9TSVRJT046IDIwMCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19CQUNLR1JPVU5EOiAyMDEsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfTVJaX1dJRFRIOiAyMDIsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfTVJaX0hFSUdIVDogMjAzLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX0xJTkVfUE9TSVRJT046IDIwNCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19GT05UX1RZUEU6IDIwNSxcbiAgICBPQ1JfUVVBTElUWV9URVhUX1BPU0lUSU9OOiAyMjAsXG4gICAgT0NSX1FVQUxJVFlfSU5WQUxJRF9GT05UOiAyMjEsXG4gICAgT0NSX1FVQUxJVFlfSU5WQUxJRF9CQUNLR1JPVU5EOiAyMjIsXG4gICAgTEFTX0lOS19JTlZBTElEX0xJTkVTX0ZSRVFVRU5DWTogMjMwLFxuICAgIERPQ19MSVZFTkVTU19ET0NVTUVOVF9OT1RfTElWRTogMjM4LFxuICAgIENIRF9ET0NfTElWRU5FU1NfQkxBQ0tfQU5EX1dISVRFX0NPUFlfREVURUNURUQ6IDIzOSxcbiAgICBET0NfTElWRU5FU1NfRUxFQ1RST05JQ19ERVZJQ0VfREVURUNURUQ6IDI0MCxcbiAgICBET0NfTElWRU5FU1NfSU5WQUxJRF9CQVJDT0RFX0JBQ0tHUk9VTkQ6IDI0MSxcbiAgICBJQ0FPX0lEQl9CQVNFXzMyX0VSUk9SOiAyNDMsXG4gICAgSUNBT19JREJfWklQUEVEX0VSUk9SOiAyNDQsXG4gICAgSUNBT19JREJfTUVTU0FHRV9aT05FX0VNUFRZOiAyNDUsXG4gICAgSUNBT19JREJfU0lHTkFUVVJFX01VU1RfQkVfUFJFU0VOVDogMjQ2LFxuICAgIElDQU9fSURCX1NJR05BVFVSRV9NVVNUX05PVF9CRV9QUkVTRU5UOiAyNDcsXG4gICAgSUNBT19JREJfQ0VSVElGSUNBVEVfTVVTVF9OT1RfQkVfUFJFU0VOVDogMjQ4LFxuICAgIElOQ09SUkVDVF9PQkpFQ1RfQ09MT1I6IDI1MCxcbiAgICBET0NfTElWRU5FU1NfVklSVFVBTF9DQU1FUkFfREVURUNURUQ6IDI0MixcbiAgICBDSERfUFJPUEVSVFlfTk9fU0lHTkFUVVJFOiAyNjAsXG4gICAgQ0hEX1BST1BFUlRZX1RFWFRfQVNfU0lHTkFUVVJFOiAyNjEsXG4gICAgQ0hEX1BST1BFUlRZX0ZJTkdFUlBSSU5UX0FTX1NJR05BVFVSRTogMjYyLFxufVxuXG5leHBvcnQgY29uc3QgZU1ETEludGVudFRvUmV0YWluID0ge1xuICAgIEZBTFNFOiAwLFxuICAgIFRSVUU6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uQ29udGVudE1vZGUgPSB7XG4gICAgTkVYVF9QQUdFX0lEX0NBUkRfRlJPTlQ6IFwibmV4dFBhZ2VJZENhcmRGcm9udFwiLFxuICAgIE5FWFRfUEFHRV9JRF9DQVJEX0JBQ0s6IFwibmV4dFBhZ2VJZENhcmRCYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBSRklERGVsZWdhdGUgPSB7XG4gICAgTlVMTDogMCxcbiAgICBOT19QQTogMSxcbiAgICBGVUxMOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVGV4dFByb2Nlc3NpbmcgPSB7XG4gICAgb2NOb0NoYW5nZTogMCxcbiAgICBvY1VwcGVyY2FzZTogMSxcbiAgICBvY0xvd2VyY2FzZTogMixcbiAgICBvY0NhcGl0YWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBMb2dMZXZlbCA9IHtcbiAgICBGYXRhbEVycm9yOiBcIkZhdGFsRXJyb3JcIixcbiAgICBFcnJvcjogXCJFcnJvclwiLFxuICAgIFdhcm5pbmc6IFwiV2FybmluZ1wiLFxuICAgIEluZm86IFwiSW5mb1wiLFxuICAgIERlYnVnOiBcIkRlYnVnXCIsXG59XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25JbWFnZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1NQT1JUX1NJTkdMRV9QQUdFOiAxLFxuICAgIFBBU1NQT1JUX1RXT19QQUdFUzogMixcbiAgICBJRF9GUk9OVDogMyxcbiAgICBJRF9GUk9OVF9NUlo6IDQsXG4gICAgSURfQkFDSzogNSxcbiAgICBJRF9CQUNLX01SWjogNixcbiAgICBJRF9CQUNLX0JBUkNPREU6IDcsXG4gICAgSURfQkFDS19CQVJDT0RFX01SWjogOCxcbiAgICBCQU5LX0NBUkRfRlJPTlQ6IDksXG4gICAgQkFOS19DQVJEX0JBQ0s6IDEwLFxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ge1xuICAgIE5PVF9SRUFEWTogMCxcbiAgICBSRUFEWTogMSxcbiAgICBUSU1FT1VUOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jRm9ybWF0ID0ge1xuICAgIElEMTogMCxcbiAgICBJRDI6IDEsXG4gICAgSUQzOiAyLFxuICAgIE5PTjogMyxcbiAgICBBNDogNCxcbiAgICBJRDNfeDI6IDUsXG4gICAgSUQyX1RVUktFWTogNixcbiAgICBJRDFfOTA6IDEwLFxuICAgIElEMV8xODA6IDExLFxuICAgIElEMV8yNzA6IDEyLFxuICAgIElEMl8xODA6IDEzLFxuICAgIElEM18xODA6IDE0LFxuICAgIENVU1RPTTogMTAwMCxcbiAgICBQSE9UTzogMTAwMSxcbiAgICBGTEVYSUJMRTogMTAwMixcbiAgICBVTktOT1dOOiAtMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzID0ge1xuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkwMDAwMDAxLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX05PTl9NQVRDSElOR19TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMDAyLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9USU1FX0NPRElORzogMHg5MDAwMDAwMyxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVVNFX09GX0dFTkVSQUxJWkVEX1RJTUU6IDB4OTAwMDAwMDQsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfSVNTVUVSOiAweDkwMDAwMDA1LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX1NVQkpFQ1Q6IDB4OTAwMDAwMDYsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfQ1JJVElDQUxfRVhURU5TSU9OOiAweDkwMDAwMDA4LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0NTQ0FfUk9MRTogMHg5MDAwMDAwRSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9EU19ST0xFOiAweDkwMDAwMDBGLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9JU1NVRVJfU1VCSkVDVF9EUzogMHg5MDAwMDAxMCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9EVVBMSUNBVElOR19FWFRFTlNJT05TOiAweDkwMDAwMDE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX01JU1NFRDogMHg5MDAwMDIwMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPTU1PTl9OQU1FX01JU1NFRDogMHg5MDAwMDIwMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjA3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMDgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4OTAwMDAyMDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDkwMDAwMjBBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NSVNTRURfRVhURU5TSU9OUzogMHg5MDAwMDIwQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTAwMDAyMEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMEQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTUlTU0VEOiAweDkwMDAwMjBFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIwRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTUlTU0VEOiAweDkwMDAwMjExLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UxOiAweDkwMDAwMjEyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UyOiAweDkwMDAwMjEzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjE1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX01JU1NFRDogMHg5MDAwMDIxNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19JTkNPUlJFQ1Q6IDB4OTAwMDAyMTcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIxOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX1VTQUdFOiAweDkwMDAwMjE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfTUlTU0VEOiAweDkwMDAwMjIwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9FTVBUWTogMHg5MDAwMDIyMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTUlTU0VEOiAweDkwMDAwMjIzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMjYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjI4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIyOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAweDkwMDAwMjJBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9FTVBUWTogMHg5MDAwMDIyRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjMxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0VNUFRZOiAweDkwMDAwMjMyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIzMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjM0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9NSVNTRUQ6IDB4OTAwMDAyMzUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjM2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9WRVJTSU9OOiAweDkwMDAwMjM3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVM6IDB4OTAwMDAyMzgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFU19FTVBUWTogMHg5MDAwMDIzOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0EsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0VNUFRZOiAweDkwMDAwMjNCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19QT0xJQ1lfSURfTUlTU0VEOiAweDkwMDAwMjNDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfTUlTU0VEOiAweDkwMDAwMjNELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0UsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9FTVBUWTogMHg5MDAwMDIzRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX1BPSU5UX01JU1NFRDogMHg5MDAwMDI0MCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU1VCSkVDVF9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI0NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NTQ0FfQUxUX05BTUVTX05PTl9NQVRDSElORzogMHg5MDAwMDI0NyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjQ4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0NSSVRJQ0FMOiAweDkwMDAwMjRBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9DUklUSUNBTDogMHg5MDAwMDI0QyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX09QVElPTkFMX0NSSVRJQ0FMOiAweDkwMDAwMjRELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0RixcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMDIyLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjMsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX0lOQ09SUkVDVDogMHg5MDAwMDAyNCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fTUlTU0lORzogMHg5MDAwMDAyNSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fVU5FWFBFQ1RFRDogMHg5MDAwMDAyNixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzAsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9VTlNVUFBPUlRFRDogMHg5MDAwMDAzMSxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMyLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMzLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX09JRF9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfQ09OVEVOVF9PSURfSU5DT1JSRUNUOiAweDkwMDAwMUExLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfRU1QVFk6IDB4OTAwMDAxMDIsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX1VOU1VQUE9SVEVEOiAweDkwMDAwMTAzLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfTVVMVElQTEVfRU5UUklFUzogMHg5MDAwMDEwOSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX01JU1NFRDogMHg5MDAwMDFCMCxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX0VNUFRZOiAweDkwMDAwMUIxLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DUkxTX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDFCMixcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9JTkNPUlJFQ1RfQ09OVEVOVF9PSUQ6IDB4OTAwMDAxMDQsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfTlVNQkVSX0lOQ09SUkVDVDogMHg5MDAwMDEwNSxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX01JU1NJTkc6IDB4OTAwMDAxMDYsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9FWFRSQTogMHg5MDAwMDEwNyxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwOCxcbiAgICBOVEZfTERTX0lDQU9fTUFTVEVSX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQzAsXG4gICAgTlRGX0xEU19JQ0FPX0RFVklBVElPTl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUM4LFxuICAgIE5URl9MRFNfQlNJX0RFRkVDVF9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQwLFxuICAgIE5URl9MRFNfQlNJX0JMQUNLX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxRDgsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMEEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0lOQ09SUkVDVF9DSE9JQ0U6IDB4OTAwMDAxMEIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0RJR0VTVF9BTEdPUklUSE1fTk9UX0xJU1RFRDogMHg5MDAwMDEwQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMEQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9EQVRBOiAweDkwMDAwMTBFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfVmFsdWU6IDB4OTAwMDAxMEYsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfTUlTU0lORzogMHg5MDAwMDExMCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9EQVRBOiAweDkwMDAwMTExLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX1ZBTFVFOiAweDkwMDAwMTEyLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMUIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfREFUQTogMHg5MDAwMDExQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9WQUxVRTogMHg5MDAwMDExRCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0xJU1RfQ09OVEVOVF9ERVNDUklQVElPTl9BVFRSX0RBVEE6IDB4OTAwMDAxMUYsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkwMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MDAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MDAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTAwMDAxMTksXG4gICAgTlRGX0xEU19VTlNVUFBPUlRFRF9JTUFHRV9GT1JNQVQ6IDB4OTAwMDAxMUEsXG4gICAgTlRGX0xEU19NUlpfRE9DVU1FTlRfVFlQRV9VTktOT1dOOiAweDAwMDIyMDA4LFxuICAgIE5URl9MRFNfTVJaX0lTU1VJTkdfU1RBVEVfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDA5LFxuICAgIE5URl9MRFNfTVJaX05BTUVfSVNfVk9JRDogMHgwMDAyMjAwQSxcbiAgICBOVEZfTERTX01SWl9OVU1CRVJfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDBELFxuICAgIE5URl9MRFNfTVJaX05BVElPTkFMSVRZX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRSxcbiAgICBOVEZfTERTX01SWl9ET0JfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDBGLFxuICAgIE5URl9MRFNfTVJaX0RPQl9FUlJPUjogMHgwMDAyMjAxMCxcbiAgICBOVEZfTERTX01SWl9ET0JfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDExLFxuICAgIE5URl9MRFNfTVJaX1NFWF9JTkNPUlJFQ1Q6IDB4MDAwMjIwMTIsXG4gICAgTlRGX0xEU19NUlpfRE9FX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAxMyxcbiAgICBOVEZfTERTX01SWl9ET0VfRVJST1I6IDB4MDAwMjIwMTQsXG4gICAgTlRGX0xEU19NUlpfRE9FX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNSxcbiAgICBOVEZfTERTX01SWl9PUFRJT05BTF9EQVRBX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNixcbiAgICBOVEZfTERTX01SWl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTcsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUOiAweDAwMDIyMDE4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfTUlTU0lORzogMHg5MDAxMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX0lOQ09SUkVDVDogMHg5MDAyMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfTUlTU0lORzogMHg5MDAzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfSU5DT1JSRUNUOiAweDkwMDQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19UWVBFX0lOQ09SUkVDVDogMHg5MDA1MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfTUlTU0lORzogMHg5MDA2MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfSU5DT1JSRUNUOiAweDkwMDcwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfSU1BR0VfTUlTU0lORzogMHg5MDA4MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0ZPUk1BVF9JRF9JTkNPUlJFQ1Q6IDB4OTAwOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDBBMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfTEVOR1RIX0lOQ09SUkVDVDogMHg5MDBCMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfR0VOREVSOiAweDkwMTAwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9FWUVfQ09MT1I6IDB4OTAxMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0hBSVJfQ09MT1I6IDB4OTAxMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfWUFXOiAweDkwMTMwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1BJVENIOiAweDkwMTQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1JPTEw6IDB4OTAxNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ZQVc6IDB4OTAxNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9QSVRDSDogMHg5MDE3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1JPTEw6IDB4OTAxODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0ZBQ0VfSU1BR0VfVFlQRTogMHg5MDE5MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSU1BR0VfREFUQV9UWVBFOiAweDkwMUEwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX1VOU1VQUE9SVEVEX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX0RFUFJFQ0FURURfVkVSU0lPTjogMHg5MTAwMDAwMSxcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VU0lOR19TVERfUkVGOiAweDkxMDAwMDAyLFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwMyxcbiAgICBOVEZfTERTX1NJX0NBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDQsXG4gICAgTlRGX0xEU19TSV9DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNSxcbiAgICBOVEZfTERTX1NJX0NBX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDA2LFxuICAgIE5URl9MRFNfU0lfVEFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwNyxcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fRklMRV9JRF9GT1JfVkVSU0lPTjI6IDB4OTEwMDAwMDgsXG4gICAgTlRGX0xEU19TSV9FSURfU0VDVVJJVFlfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg5MTAwMDAwOSxcbiAgICBOVEZfTERTX1NJX1JJX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEEsXG4gICAgTlRGX0xEU19TSV9SSV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwQixcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEMsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwRCxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT05TSVNURU5UX0FMR09SSVRITV9SRUZFUkVOQ0U6IDB4OTEwMDAwMEUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAwLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fU1REX1BBUkFNRVRFUlM6IDB4OTEwMDAxMDEsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTAyLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDMsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0RPTUFJTl9QQVJBTVNfTk9fUkVRVUlSRURfT1BUSU9OOiAweDkxMDAwMTA0LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0FOT05ZTU9VU19JTkZPUzogMHg5MTAwMDEwNixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTA3LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX1BVQkxJQ19LRVk6IDB4OTEwMDAxMDgsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lOQ09SUkVDVF9JTkZPU19RVUFOVElUWTogMHg5MTAwMDEwOSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfVEFfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTBBLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQVJEX0lORk9fTE9DQVRPUl9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBCLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9FSURfU0VDVVJJVFlfSU5GT19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBDLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEQsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfSU5DT1JSRUNUX1VTQUdFOiAweDkxMDAwMTBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9SSV9ET01BSU5fUEFSQU1TX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT1NfTk9OX0NPTlNJU1RBTlQ6IDB4OTEwMDAxMTAsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUk9GSUxFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMjAxLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTEwMDAyMDIsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9OT05fQ1ZfQ0FfRE9NQUlOX1BBUkFNRVRFUlM6IDB4OTEwMDAyMDMsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwNCxcbiAgICBOVEZfTERTX1RBX1BBQ0VfU1RBVElDX0JJTkRJTkdfVVNFRDogMHg5MTAwMDMwMCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTIwMDAxMTUsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6IDB4OTIwMDAxMTYsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAweDkyMDAwMTE3LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOiAweDkyMDAwMTE4LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDogMHg5MjAwMDExOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfQ0hBSU5fQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZJU1VBTF9NUlpfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNTEsXG4gICAgTlRGX0xEU19NUlpfQ09VTlRSWUNPREVfVklTVUFMTVJaX05PTl9NQVRDSElORzogMHgwMDAyMjAxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTVJaX0NPVU5UUllfTk9OX01BVENISU5HOiAweDkwMDAwMjUyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9OT05fVVBQRVJfQ0FTRTogMHg5MDAwMDI1MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX05PTl9VUFBFUl9DQVNFOiAweDkwMDAwMjU0LFxuICAgIE5URkxEU19TSV9TVE9SQUdFX0NTX05PTkNPTlNJU1RBTlQ6IDB4OTEwMDAxMTEsXG4gICAgTlRGTERTX1NJX1NUT1JBR0VfQ1NfUEFDRV9DQU1fS0VZX01JU1NJTkc6IDB4OTEwMDAxMTIsXG4gICAgTlRGTERTX0FTTl9DRVJUSUZJQ0FURV9OT05NQVRDSElOR0RTUk9MRTogMHg5MDAwMDAxMSxcbiAgICBOVEZMRFNfTURMX0NFUlRJRklDQVRFX0NIQUlOX1NPUF9OT05NQVRDSElORzogMHg5MDAwMDQwMCxcbiAgICBOVEZMRFNfTURMX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEUFVCTElDS0VZQUxHT1JJVEhNOiAweDkwMDAwNDAxLFxuICAgIE5URkxEU19NRExfQ0VSVElGSUNBVEVfVU5TVVBQT1JURURTSUdOQVRVUkVBTEdPUklUSE06IDB4OTAwMDA0MDIsXG4gICAgTlRGTERTX01ETF9DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRFBVQkxJQ0tFWVBBUkFNUzogMHg5MDAwMDQwMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVJbWFnZVF1YWxpdHlDaGVja1R5cGUgPSB7XG4gICAgSVFDX0lNQUdFX0dMQVJFUzogMCxcbiAgICBJUUNfSU1BR0VfRk9DVVM6IDEsXG4gICAgSVFDX0lNQUdFX1JFU09MVVRJT046IDIsXG4gICAgSVFDX0lNQUdFX0NPTE9STkVTUzogMyxcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDQsXG4gICAgSVFDX0JPVU5EUzogNSxcbiAgICBJUUNfU0NSRUVOX0NBUFRVUkU6IDYsXG4gICAgSVFDX1BPUlRSQUlUOiA3LFxuICAgIElRQ19IQU5EV1JJVFRFTjogOCxcbiAgICBJUUNfQlJJR0hUTkVTUzogOSxcbiAgICBJUUNfT0NDTFVTSU9OOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IE1SWkZvcm1hdCA9IHtcbiAgICBGT1JNQVRfMVgzMDogXCIxeDMwXCIsXG4gICAgRk9STUFUXzNYMzA6IFwiM3gzMFwiLFxuICAgIEZPUk1BVF8yWDM2OiBcIjJ4MzZcIixcbiAgICBGT1JNQVRfMlg0NDogXCIyeDQ0XCIsXG4gICAgRk9STUFUXzFYNjogXCIxeDZcIixcbiAgICBGT1JNQVRfMlgzMDogXCIyeDMwXCIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxuICAgIEpBQkNPREU6IDE5LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkxBTks6IDAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZJTEw6IDEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPOiAyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9NUlo6IDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBTFNFX0xVTUlORVNDRU5DRTogNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19TSU1QTEU6IDUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX1NUQVRJQzogNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfTVVMVElfU1RBVElDOiA3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9ESU5BTUlDOiA4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9JTlRFUlJVUFRFRDogOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfU0hJRlRFRDogMTAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fU0FNRV9DT0xPUlM6IDExLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0lSX0lOVklTSUJMRTogMTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NJWkVfQ0hFQ0s6IDEzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0dIT1NUOiAxNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19SRklEOiAxNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19WSVNVQUw6IDE2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFOiAxNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19DQU1FUkE6IDE5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURfVlNfQ0FNRVJBOiAyMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfR0hPU1RfUEhPVE86IDIxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DTEVBUl9HSE9TVF9QSE9UTzogMjIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0lOVklTSUJMRV9PQkpFQ1Q6IDIzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MT1dfQ09OVFJBU1RfT0JKRUNUOiAyNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09MT1I6IDI1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSEFQRTogMjYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPUk5FUlM6IDI3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9PQ1I6IDI4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX1ZJU1VBTDogMjksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUVlNfUkZJRDogMzAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUVlNfTElWRTogMzEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0RFUFRIOiAzMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTUlDUk9URVhUOiAzMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkxVT1JFU0NFTlRfT0JKRUNUOiAzNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTEFORE1BUktTX0NIRUNLOiAzNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFDRV9QUkVTRU5DRTogMzYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBQ0VfQUJTRU5DRTogMzgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX1NDUkVFTl9DQVBUVVJFOiAzOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfRUxFQ1RST05JQ19ERVZJQ0U6IDQwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19PVkk6IDQxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFX1NJWkVfQ0hFQ0s6IDQyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MQVNfSU5LOiA0MyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfTUxJOiA0NCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfQkFSQ09ERV9CQUNLR1JPVU5EOiA0NSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19CQVJDT0RFOiA0NixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0JBUkNPREU6IDQ3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVF9WU19CQVJDT0RFOiA0OCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9CQVJDT0RFX1ZTX0NBTUVSQTogNDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NIRUNLX0RJR0lUQUxfU0lHTkFUVVJFOiA1MCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ09OVEFDVF9DSElQX0NMQVNTSUZJQ0FUSU9OOiA1MSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSEVBRF9QT1NJVElPTl9DSEVDSzogNTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0JMQUNLX0FORF9XSElURV9DT1BZX0NIRUNLOiA1MyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfRFlOQVBSSU5UX0NIRUNLOiA1NCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfR0VPTUVUUllfQ0hFQ0s6IDU1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9BR0VfQ0hFQ0s6IDU2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9TRVhfQ0hFQ0s6IDU3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURWU0dIT1NUOiA1OCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9CQVJDT0RFVlNHSE9TVDogNTksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fR0hPU1RWU0xJVkU6IDYwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTR0hPU1Q6IDYxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9TSUdOQVRVUkVfUFJFU0VOQ0U6IDYyLFxufVxuXG5leHBvcnQgY29uc3QgT25saW5lTW9kZSA9IHtcbiAgICBNQU5VQUw6IDAsXG4gICAgQVVUTzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1NES19Qcm9maWxlclR5cGUgPSB7XG4gICAgU1BUX0RPQ185MzAzX0VESVRJT05fMjAwNjogMHgwMDAwMDAwMSxcbiAgICBTUFRfRE9DXzkzMDNfTERTX1BLSV9NQUlOVEVOQU5DRTogMHgwMDAwMDAwMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5JZGVudGl0eURvY3VtZW50OiAxNSxcbiAgICBkdElkZW50aXR5Q2FyZEZvclJlc2lkZW5jZTogMTYsXG4gICAgZHRUcmF2ZWxEb2N1bWVudDogMTcsXG4gICAgZHRPdGhlcjogOTksXG4gICAgZHRWaXNhSUQyOiAyOSxcbiAgICBkdFZpc2FJRDM6IDMwLFxuICAgIGR0UmVnaXN0cmF0aW9uQ2VydGlmaWNhdGU6IDIwNixcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdDogMzksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA0MCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDQxLFxuICAgIGR0Q29tbWVyY2lhbEluc3RydWN0aW9uUGVybWl0OiA0MixcbiAgICBkdENvbW1lcmNpYWxOZXdQZXJtaXQ6IDQzLFxuICAgIGR0Q29uY2VhbGVkQ2FycnlMaWNlbnNlOiA0NCxcbiAgICBkdENvbmNlYWxlZEZpcmVhcm1QZXJtaXQ6IDQ1LFxuICAgIGR0Q29uZGl0aW9uYWxEcml2aW5nTGljZW5zZTogNDYsXG4gICAgZHREZXBhcnRtZW50T2ZWZXRlcmFuc0FmZmFpcnNJZGVudGl0eUNhcmQ6IDQ3LFxuICAgIGR0RGlwbG9tYXRpY0RyaXZpbmdMaWNlbnNlOiA0OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlOiA0OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluc3RydWN0aW9uYWxQZXJtaXRVbmRlcjE4OiA1MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMjE6IDUyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdDogNTMsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIxODogNTQsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIyMTogNTUsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZTogNTYsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMTg6IDU3LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiA1OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVnaXN0ZXJlZE9mZmVuZGVyOiA1OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVzdHJpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIyMTogNjEsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3I6IDYyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogNjMsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA2NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIxODogNjUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMjE6IDY2LFxuICAgIGR0RW1wbG95bWVudERyaXZpbmdQZXJtaXQ6IDY3LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlOiA2OCxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZVVuZGVyMTg6IDY5LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogNzAsXG4gICAgZHRFbmhhbmNlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogNzEsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlOiA3MixcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA3MyxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA3NCxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkOiA3NSxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIxODogNzYsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZFVuZGVyMjE6IDc3LFxuICAgIGR0RW5oYW5jZWRPcGVyYXRvcnNMaWNlbnNlOiA3OCxcbiAgICBkdEZpcmVhcm1zUGVybWl0OiA3OSxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2U6IDgwLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMTg6IDgxLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMjE6IDgyLFxuICAgIGR0R2VuZXZhQ29udmVudGlvbnNJZGVudGl0eUNhcmQ6IDgzLFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA4NCxcbiAgICBkdEdyYWR1YXRlZERyaXZpbmdMaWNlbnNlVW5kZXIyMTogODUsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMTg6IDg2LFxuICAgIGR0R3JhZHVhdGVkSW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluc3RydWN0aW9uUGVybWl0OiAxMDIsXG4gICAgZHRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMTg6IDEwMyxcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5zdHJ1Y3Rpb25hbFBlcm1pdDogMTExLFxuICAgIGR0TGVhcm5lckxpY2Vuc2U6IDExMixcbiAgICBkdExlYXJuZXJMaWNlbnNlVW5kZXIxODogMTEzLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjIxOiAxMTQsXG4gICAgZHRMZWFybmVyUGVybWl0OiAxMTUsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIxODogMTE2LFxuICAgIGR0TGVhcm5lclBlcm1pdFVuZGVyMjE6IDExNyxcbiAgICBkdExpbWl0ZWRMaWNlbnNlOiAxMTgsXG4gICAgZHRMaW1pdGVkUGVybWl0OiAxMTksXG4gICAgZHRMaW1pdGVkVGVybURyaXZpbmdMaWNlbnNlOiAxMjAsXG4gICAgZHRMaW1pdGVkVGVybUlkZW50aXR5Q2FyZDogMTIxLFxuICAgIGR0TGlxdW9ySWRlbnRpdHlDYXJkOiAxMjIsXG4gICAgZHROZXdQZXJtaXQ6IDEyMyxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMTg6IDEyNCxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMjE6IDEyNSxcbiAgICBkdE5vblVzQ2l0aXplbkRyaXZpbmdMaWNlbnNlOiAxMjYsXG4gICAgZHRPY2N1cGF0aW9uYWxEcml2aW5nTGljZW5zZTogMTI3LFxuICAgIGR0T25laWRhVHJpYmVPZkluZGlhbnNJZGVudGl0eUNhcmQ6IDEyOCxcbiAgICBkdE9wZXJhdG9yTGljZW5zZTogMTI5LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIxODogMTMwLFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIyMTogMTMxLFxuICAgIGR0UGVybWFuZW50RHJpdmluZ0xpY2Vuc2U6IDEzMixcbiAgICBkdFBlcm1pdFRvUmVFbnRlcjogMTMzLFxuICAgIGR0UHJvYmF0aW9uYXJ5QXV0b0xpY2Vuc2U6IDEzNCxcbiAgICBkdFByb2JhdGlvbmFyeURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM1LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxMzYsXG4gICAgZHRQcm9iYXRpb25hcnlWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxMzcsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlOiAxMzgsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM5LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE0MCxcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZTogMTQxLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogMTQyLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogMTQzLFxuICAgIGR0UHVibGljUGFzc2VuZ2VyQ2hhdWZmZXVyTGljZW5zZTogMTQ0LFxuICAgIGR0UmFjaW5nQW5kR2FtaW5nQ29taXNzaW9uQ2FyZDogMTQ1LFxuICAgIGR0UmVmdWdlZVRyYXZlbERvY3VtZW50OiAxNDYsXG4gICAgZHRSZW5ld2FsUGVybWl0OiAxNDcsXG4gICAgZHRSZXN0cmljdGVkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAxNDgsXG4gICAgZHRSZXN0cmljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlc3RyaWN0ZWRQZXJtaXQ6IDE1MCxcbiAgICBkdFNlYXNvbmFsUGVybWl0OiAxNTEsXG4gICAgZHRTZWFzb25hbFJlc2lkZW50SWRlbnRpdHlDYXJkOiAxNTIsXG4gICAgZHRTZW5pb3JDaXRpemVuSWRlbnRpdHlDYXJkOiAxNTMsXG4gICAgZHRTZXhPZmZlbmRlcjogMTU0LFxuICAgIGR0U29jaWFsU2VjdXJpdHlDYXJkOiAxNTUsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZTogMTU2LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxNTcsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE1OCxcbiAgICBkdFRlbXBvcmFyeUlkZW50aXR5Q2FyZDogMTU5LFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmQ6IDE2MCxcbiAgICBkdFRlbXBvcmFyeUluc3RydWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjIxOiAxNjIsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2U6IDE2MyxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE2NCxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE2NSxcbiAgICBkdFVuaWZvcm1lZFNlcnZpY2VzSWRlbnRpdHlDYXJkOiAxNjYsXG4gICAgZHRWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxNjcsXG4gICAgZHRXb3JrZXJJZGVudGlmaWNhdGlvbkNyZWRlbnRpYWw6IDE2OCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZTogMTY5LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogMTcwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogMTcxLFxuICAgIGR0UGFzc3BvcnRDYXJkOiAxNzIsXG4gICAgZHRQZXJtYW5lbnRSZXNpZGVudENhcmQ6IDE3MyxcbiAgICBkdFBlcnNvbmFsSWRlbnRpZmljYXRpb25WZXJpZmljYXRpb246IDE3NCxcbiAgICBkdFRlbXBvcmFyeU9wZXJhdG9yTGljZW5zZTogMTc1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE5OiAxNzYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE5OiAxNzcsXG4gICAgZHRWaXNhOiAxNzgsXG4gICAgZHRUZW1wb3JhcnlQYXNzcG9ydDogMTc5LFxuICAgIGR0Vm90aW5nQ2FyZDogMTgwLFxuICAgIGR0SGVhbHRoQ2FyZDogMTgxLFxuICAgIGR0Q2VydGlmaWNhdGVPZkNpdGl6ZW5zaGlwOiAxODIsXG4gICAgZHRBZGRyZXNzQ2FyZDogMTgzLFxuICAgIGR0QWlycG9ydEltbWlncmF0aW9uQ2FyZDogMTg0LFxuICAgIGR0QWxpZW5SZWdpc3RyYXRpb25DYXJkOiAxODUsXG4gICAgZHRBUEVIQ2FyZDogMTg2LFxuICAgIGR0Q291cG9uVG9Ecml2aW5nTGljZW5zZTogMTg3LFxuICAgIGR0Q3Jld01lbWJlckNlcnRpZmljYXRlOiAxODgsXG4gICAgZHREb2N1bWVudEZvclJldHVybjogMTg5LFxuICAgIGR0RUNhcmQ6IDE5MCxcbiAgICBkdEVtcGxveW1lbnRDYXJkOiAxOTEsXG4gICAgZHRIS1NBUkltbWlncmF0aW9uRm9ybTogMTkyLFxuICAgIGR0SW1taWdyYW50Q2FyZDogMTkzLFxuICAgIGR0TGFib3VyQ2FyZDogMTk0LFxuICAgIGR0TGFpc3NlelBhc3NlcjogMTk1LFxuICAgIGR0TGF3eWVySWRlbnRpdHlDZXJ0aWZpY2F0ZTogMTk2LFxuICAgIGR0TGljZW5zZUNhcmQ6IDE5NyxcbiAgICBkdFBhc3Nwb3J0U3RhdGVsZXNzOiAxOTgsXG4gICAgZHRQYXNzcG9ydENoaWxkOiAxOTksXG4gICAgZHRQYXNzcG9ydENvbnN1bGFyOiAyMDAsXG4gICAgZHRQYXNzcG9ydERpcGxvbWF0aWNTZXJ2aWNlOiAyMDEsXG4gICAgZHRQYXNzcG9ydE9mZmljaWFsOiAyMDIsXG4gICAgZHRQYXNzcG9ydFByb3Zpc2lvbmFsOiAyMDMsXG4gICAgZHRQYXNzcG9ydFNwZWNpYWw6IDIwNCxcbiAgICBkdFBlcm1pc3Npb25Ub1RoZUxvY2FsQm9yZGVyVHJhZmZpYzogMjA1LFxuICAgIGR0U0VERVNPTENhcmQ6IDIwNyxcbiAgICBkdFNvY2lhbENhcmQ6IDIwOCxcbiAgICBkdFRCQ2FyZDogMjA5LFxuICAgIGR0VmVoaWNsZVBhc3Nwb3J0OiAyMTAsXG4gICAgZHRXRG9jdW1lbnQ6IDIxMSxcbiAgICBkdERpcGxvbWF0aWNJZGVudGl0eUNhcmQ6IDIxMixcbiAgICBkdENvbnN1bGFySWRlbnRpdHlDYXJkOiAyMTMsXG4gICAgZHRJbmNvbWVUYXhDYXJkOiAyMTQsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXQ6IDIxNSxcbiAgICBkdERvY3VtZW50T2ZJZGVudGl0eTogMjE2LFxuICAgIGR0Qm9yZGVyQ3Jvc3NpbmdQZXJtaXQ6IDIxNyxcbiAgICBkdFBhc3Nwb3J0TGltaXRlZFZhbGlkaXR5OiAyMTgsXG4gICAgZHRTSU1DYXJkOiAyMTksXG4gICAgZHRUYXhDYXJkOiAyMjAsXG4gICAgZHRDb21wYW55Q2FyZDogMjIxLFxuICAgIGR0RG9tZXN0aWNQYXNzcG9ydDogMjIyLFxuICAgIGR0SWRlbnRpdHlDZXJ0aWZpY2F0ZTogMjIzLFxuICAgIGR0UmVzaWRlbnRJZENhcmQ6IDIyNCxcbiAgICBkdEFybWVkRm9yY2VzSWRlbnRpdHlDYXJkOiAyMjUsXG4gICAgZHRQcm9mZXNzaW9uYWxDYXJkOiAyMjYsXG4gICAgZHRSZWdpc3RyYXRpb25TdGFtcDogMjI3LFxuICAgIGR0RHJpdmVyQ2FyZDogMjI4LFxuICAgIGR0RHJpdmVyVHJhaW5pbmdDZXJ0aWZpY2F0ZTogMjI5LFxuICAgIGR0UXVhbGlmaWNhdGlvbkRyaXZpbmdMaWNlbnNlOiAyMzAsXG4gICAgZHRNZW1iZXJzaGlwQ2FyZDogMjMxLFxuICAgIGR0UHVibGljVmVoaWNsZURyaXZlckF1dGhvcml0eUNhcmQ6IDIzMixcbiAgICBkdE1hcmluZUxpY2Vuc2U6IDIzMyxcbiAgICBkdFRlbXBvcmFyeUxlYXJuZXJEcml2aW5nTGljZW5zZTogMjM0LFxuICAgIGR0VGVtcG9yYXJ5Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAyMzUsXG4gICAgZHRJbnRlcmltSW5zdHJ1Y3Rpb25hbFBlcm1pdDogMjM2LFxuICAgIGR0Q2VydGlmaWNhdGVPZkNvbXBldGVuY3k6IDIzNyxcbiAgICBkdENlcnRpZmljYXRlT2ZQcm9maWNpZW5jeTogMjM4LFxuICAgIGR0VHJhZGVMaWNlbnNlOiAyMzksXG4gICAgZHRQYXNzcG9ydFBhZ2U6IDI0MCxcbiAgICBkdEludm9pY2U6IDI0MSxcbiAgICBkdFBhc3NlbmdlckxvY2F0b3JGb3JtOiAyNDIsXG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25UYWcgPSB7XG4gICAgQ0xPU0U6IDEwMDEsXG4gICAgVE9SQ0g6IDEwMDIsXG4gICAgQ0FQVFVSRTogMTAwMyxcbiAgICBDSEFOR0VfRlJBTUU6IDEwMDQsXG4gICAgU0tJUDogMTAwNSxcbiAgICBDQU1FUkFfU1dJVENIOiAxMDA2LFxufVxuXG5leHBvcnQgY29uc3QgSG9sb0FuaW1hdGlvblR5cGUgPSB7XG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVW5rbm93bjogMCxcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlSG9yaXpvbnRhbDogMSxcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlVmVydGljYWw6IDIsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZUxlZnRCb3R0b21SaWdodFRvcDogNCxcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlUmlnaHRCb3R0b21MZWZ0VG9wOiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJlcXVlc3RDb21tYW5kID0ge1xuICAgIGVSZXFDbWRfUkZpZF9TZW5kRGF0YTogMTAwLFxuICAgIGVSZXFDbWRfUkZpZF9Ob3RpZnk6IDEwMSxcbiAgICBlUmVxQ21kX1JGaWRfR2V0RGF0YUZvclNjZW5hcmlvOiAxMDIsXG4gICAgZVJlcUNtZF9Ub3JjaF9HZXRVVkZvdG86IDIwMCxcbiAgICBlUmVxQ21kX0ludGVybmV0U2VuZDogMzAwLFxuICAgIGVSZXFDbWRfR2V0R3VpZDogNDAwLFxuICAgIGVSZXFDbWRfV2x0VG9JbWFnZTogNDAxLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkZvbnQgPSB7XG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9ISU5UX0xBQkVMOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTU19MQUJFTDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1JFU1VMVF9MQUJFTDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsXCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX1RJVExFX1RFWFQ6IFwicmZpZEVuYWJsZU5mY1RpdGxlVGV4dFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19ERVNDUklQVElPTl9URVhUOiBcInJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHRcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfQlVUVE9OX1RFWFQ6IFwicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIixcbiAgICBNRExfUFJPQ0VTU0lOR19TQ1JFRU5fSElOVF9MQUJFTDogXCJtZGxQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsXCIsXG4gICAgTURMX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0xBQkVMOiBcIm1kbFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsXCIsXG4gICAgTURMX1BST0NFU1NJTkdfU0NSRUVOX1JFU1VMVF9MQUJFTDogXCJtZGxQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxcIixcbiAgICBNRExfRU5BQkxFX05GQ19USVRMRV9URVhUOiBcIm1kbEVuYWJsZU5mY1RpdGxlVGV4dFwiLFxuICAgIE1ETF9FTkFCTEVfTkZDX0RFU0NSSVBUSU9OX1RFWFQ6IFwibWRsRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0XCIsXG4gICAgTURMX0VOQUJMRV9ORkNfQlVUVE9OX1RFWFQ6IFwibWRsRW5hYmxlTmZjQnV0dG9uVGV4dFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VGb3JtYXQgPSB7XG4gICAgUE5HOiAwLFxuICAgIEpQRzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVHcmFwaGljRmllbGRUeXBlID0ge1xuICAgIEdGX1BPUlRSQUlUOiAyMDEsXG4gICAgR0ZfRklOR0VSUFI6IDIwMixcbiAgICBHRl9FWUU6IDIwMyxcbiAgICBHRl9TSUdOQVRVUkU6IDIwNCxcbiAgICBHRl9CQVJfQ09ERTogMjA1LFxuICAgIEdGX1BST09GX09GX0NJVElaRU5TSElQOiAyMDYsXG4gICAgR0ZfRE9DVU1FTlRfSU1BR0U6IDIwNyxcbiAgICBHRl9DT0xPUl9EWU5BTUlDOiAyMDksXG4gICAgR0ZfR0hPU1RfUE9SVFJBSVQ6IDIxMCxcbiAgICBHRl9TVEFNUDogMjExLFxuICAgIEdGX1BPUlRSQUlUX09GX0NISUxEOiAyMTIsXG4gICAgR0ZfQ09OVEFDVF9DSElQOiAyMTMsXG4gICAgR0ZfT1RIRVI6IDI1MCxcbiAgICBHRl9GSU5HRVJfTEVGVF9USFVNQjogMzAwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0lOREVYOiAzMDEsXG4gICAgR0ZfRklOR0VSX0xFRlRfTUlERExFOiAzMDIsXG4gICAgR0ZfRklOR0VSX0xFRlRfUklORzogMzAzLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0xJVFRMRTogMzA0LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9USFVNQjogMzA1LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9JTkRFWDogMzA2LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9NSURETEU6IDMwNyxcbiAgICBHRl9GSU5HRVJfUklHSFRfUklORzogMzA4LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6IDMwOSxcbn1cblxuZXhwb3J0IGNvbnN0IFJlZ0RldmljZUNvbmZpZ1R5cGUgPSB7XG4gICAgREVWSUNFXzczMTA6IFwiREVWSUNFXzczMTBcIixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIFVOS05PV046IC0xLFxuICAgIExPVzogMCxcbiAgICBNRURJVU06IDEsXG4gICAgSElHSDogMixcbiAgICBQSE9UTzogMyxcbiAgICBJTlBVVF9QUklPUklUWTogNCxcbiAgICBQUkVTRVRfMTI4MHg3MjA6IDYsXG4gICAgUFJFU0VUXzE5MjB4MTA4MDogNyxcbiAgICBQUkVTRVRfMzg0MHgyMTYwOiA4LFxuICAgIEZSQU1FXzk2MHg1NDA6IDksXG4gICAgRlJBTUVfMTI4MHg3MjA6IDEwLFxuICAgIFBSRVNFVF82NDB4NDgwOiAxMixcbiAgICBQUkVTRVRfMzUyeDI4ODogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FNRVJBMTogMSxcbiAgICBDQU1FUkEyOiAyLFxufVxuXG5leHBvcnQgY29uc3QgQ2FwdHVyZU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQVBUVVJFX1ZJREVPOiAxLFxuICAgIENBUFRVUkVfRlJBTUU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tSZXN1bHQgPSB7XG4gICAgQ0hfQ0hFQ0tfRVJST1I6IDAsXG4gICAgQ0hfQ0hFQ0tfT0s6IDEsXG4gICAgQ0hfQ0hFQ0tfV0FTX05PVF9ET05FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfVGVybWluYWxUeXBlID0ge1xuICAgIFRFVF9VTkRFRklORUQ6IDAsXG4gICAgVEVUX0lOU1BFQ1RJT05fU1lTVEVNOiAxLFxuICAgIFRFVF9BVVRIRU5USUNBVElPTl9URVJNSU5BTDogMixcbiAgICBURVRfU0lHTkFUVVJFX1RFUk1JTkFMOiAzLFxuICAgIFRFVF9VTkFVVEhFTlRJQ0FURURfVEVSTUlOQUw6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9EYXRhRmlsZV9UeXBlID0ge1xuICAgIERGVF9VTlNQRUNJRklFRDogMCxcbiAgICBERlRfUEFTU1BPUlRfREcxOiAxLFxuICAgIERGVF9QQVNTUE9SVF9ERzI6IDIsXG4gICAgREZUX1BBU1NQT1JUX0RHMzogMyxcbiAgICBERlRfUEFTU1BPUlRfREc0OiA0LFxuICAgIERGVF9QQVNTUE9SVF9ERzU6IDUsXG4gICAgREZUX1BBU1NQT1JUX0RHNjogNixcbiAgICBERlRfUEFTU1BPUlRfREc3OiA3LFxuICAgIERGVF9QQVNTUE9SVF9ERzg6IDgsXG4gICAgREZUX1BBU1NQT1JUX0RHOTogOSxcbiAgICBERlRfUEFTU1BPUlRfREcxMDogMTAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTE6IDExLFxuICAgIERGVF9QQVNTUE9SVF9ERzEyOiAxMixcbiAgICBERlRfUEFTU1BPUlRfREcxMzogMTMsXG4gICAgREZUX1BBU1NQT1JUX0RHMTQ6IDE0LFxuICAgIERGVF9QQVNTUE9SVF9ERzE1OiAxNSxcbiAgICBERlRfUEFTU1BPUlRfREcxNjogMTYsXG4gICAgREZUX1BBU1NQT1JUX0RHMTc6IDE3LFxuICAgIERGVF9QQVNTUE9SVF9ERzE4OiAxOCxcbiAgICBERlRfUEFTU1BPUlRfREcxOTogMTksXG4gICAgREZUX1BBU1NQT1JUX0RHMjA6IDIwLFxuICAgIERGVF9QQVNTUE9SVF9TT0Q6IDIxLFxuICAgIERGVF9QQVNTUE9SVF9DVkNBOiAyMixcbiAgICBERlRfUEFTU1BPUlRfQ09NOiAyMyxcbiAgICBERlRfRFRDX0RHMTc6IDU3LFxuICAgIERGVF9EVENfREcxODogNTgsXG4gICAgREZUX0RUQ19ERzIyOiA2MixcbiAgICBERlRfRFRDX0RHMjM6IDYzLFxuICAgIERGVF9EVENfREcyNDogNjQsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MDAgKyAzMixcbiAgICBERlRfVkRTOiA5MDAsXG4gICAgREZUX1ZEU05DOiA5MDEsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxuICAgIERGVF9QT1NUX0NBX1JFU1BPTlNFOiA3MTAsXG4gICAgREZUX1BPU1RfQ0FfUFVCTElDX0tFWTogNzExLFxuICAgIERGVF9QT1NUX0NBX0lORk86IDcxMixcbiAgICBERlRfUE9TVF9DQV9EUEFSQU1TOiA3MTMsXG4gICAgREZUX1BPU1RfQ0FfQ0hFQ0tfUEs6IDcxNCxcbiAgICBERlRfUE9TVF9DQV9DSEVDS19TSzogNzE1LFxuICAgIERGVF9JRF9ERzIyOiAxMjIsXG59XG5cbmV4cG9ydCBjb25zdCBlVmlzdWFsRmllbGRUeXBlID0ge1xuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6IDAsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFOiAxLFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUjogMixcbiAgICBGVF9EQVRFX09GX0VYUElSWTogMyxcbiAgICBGVF9EQVRFX09GX0lTU1VFOiA0LFxuICAgIEZUX0RBVEVfT0ZfQklSVEg6IDUsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEg6IDYsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSOiA3LFxuICAgIEZUX1NVUk5BTUU6IDgsXG4gICAgRlRfR0lWRU5fTkFNRVM6IDksXG4gICAgRlRfTU9USEVSU19OQU1FOiAxMCxcbiAgICBGVF9OQVRJT05BTElUWTogMTEsXG4gICAgRlRfU0VYOiAxMixcbiAgICBGVF9IRUlHSFQ6IDEzLFxuICAgIEZUX1dFSUdIVDogMTQsXG4gICAgRlRfRVlFU19DT0xPUjogMTUsXG4gICAgRlRfSEFJUl9DT0xPUjogMTYsXG4gICAgRlRfQUREUkVTUzogMTcsXG4gICAgRlRfRE9OT1I6IDE4LFxuICAgIEZUX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDE5LFxuICAgIEZUX0RMX0NMQVNTOiAyMCxcbiAgICBGVF9ETF9FTkRPUlNFRDogMjEsXG4gICAgRlRfRExfUkVTVFJJQ1RJT05fQ09ERTogMjIsXG4gICAgRlRfRExfVU5ERVJfMjFfREFURTogMjMsXG4gICAgRlRfQVVUSE9SSVRZOiAyNCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMjUsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERTogMjYsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSOiAyNyxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUjogMjgsXG4gICAgRlRfVklTQV9JRDogMjksXG4gICAgRlRfVklTQV9DTEFTUzogMzAsXG4gICAgRlRfVklTQV9TVUJfQ0xBU1M6IDMxLFxuICAgIEZUX01SWl9TVFJJTkdfMTogMzIsXG4gICAgRlRfTVJaX1NUUklOR18yOiAzMyxcbiAgICBGVF9NUlpfU1RSSU5HXzM6IDM0LFxuICAgIEZUX01SWl9UWVBFOiAzNSxcbiAgICBGVF9PUFRJT05BTF9EQVRBOiAzNixcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19OQU1FOiAzNyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX05BTUU6IDM4LFxuICAgIEZUX1BMQUNFX09GX0lTU1VFOiAzOSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tTVU06IDQwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tTVU06IDQxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLU1VNOiA0MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tTVU06IDQzLFxuICAgIEZUX0ZJTkFMX0NIRUNLU1VNOiA0NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tTVU06IDQ1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOiA0NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLU1VNOiA0NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS1NVTTogNDgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS1NVTTogNDksXG4gICAgRlRfT1RIRVI6IDUwLFxuICAgIEZUX01SWl9TVFJJTkdTOiA1MSxcbiAgICBGVF9OQU1FX1NVRkZJWDogNTIsXG4gICAgRlRfTkFNRV9QUkVGSVg6IDUzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06IDU0LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6IDU1LFxuICAgIEZUX0RPQ1VNRU5UX1NFUklFUzogNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUjogNTcsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01PREVMOiA1OCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfQ09MT1I6IDU5LFxuICAgIEZUX1JFR19DRVJUX0JPRFlfTlVNQkVSOiA2MCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfVFlQRTogNjEsXG4gICAgRlRfUkVHX0NFUlRfTUFYX1dFSUdIVDogNjIsXG4gICAgRlRfUkVHX0NFUlRfV0VJR0hUOiA2MyxcbiAgICBGVF9BRERSRVNTX0FSRUE6IDY0LFxuICAgIEZUX0FERFJFU1NfU1RBVEU6IDY1LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkc6IDY2LFxuICAgIEZUX0FERFJFU1NfSE9VU0U6IDY3LFxuICAgIEZUX0FERFJFU1NfRkxBVDogNjgsXG4gICAgRlRfUExBQ0VfT0ZfUkVHSVNUUkFUSU9OOiA2OSxcbiAgICBGVF9EQVRFX09GX1JFR0lTVFJBVElPTjogNzAsXG4gICAgRlRfUkVTSURFTlRfRlJPTTogNzEsXG4gICAgRlRfUkVTSURFTlRfVU5USUw6IDcyLFxuICAgIEZUX0FVVEhPUklUWV9DT0RFOiA3MyxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9BUkVBOiA3NCxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9TVEFURV9DT0RFOiA3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVDogNzYsXG4gICAgRlRfQUREUkVTU19DSVRZOiA3NyxcbiAgICBGVF9BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiA3OCxcbiAgICBGVF9BRERSRVNTX1BPU1RBTF9DT0RFOiA3OSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tfRElHSVQ6IDgxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLX0RJR0lUOiA4MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgzLFxuICAgIEZUX0ZJTkFMX0NIRUNLX0RJR0lUOiA4NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOiA4NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLX0RJR0lUOiA4NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS19ESUdJVDogODgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS19ESUdJVDogODksXG4gICAgRlRfUEVSTUlUX0RMX0NMQVNTOiA5MCxcbiAgICBGVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6IDkxLFxuICAgIEZUX1BFUk1JVF9JREVOVElGSUVSOiA5MixcbiAgICBGVF9QRVJNSVRfREFURV9PRl9JU1NVRTogOTMsXG4gICAgRlRfUEVSTUlUX1JFU1RSSUNUSU9OX0NPREU6IDk0LFxuICAgIEZUX1BFUk1JVF9FTkRPUlNFRDogOTUsXG4gICAgRlRfSVNTVUVfVElNRVNUQU1QOiA5NixcbiAgICBGVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzogOTcsXG4gICAgRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6IDk4LFxuICAgIEZUX05PTl9SRVNJREVOVF9JTkRJQ0FUT1I6IDk5LFxuICAgIEZUX1ZJU0FfVFlQRTogMTAwLFxuICAgIEZUX1ZJU0FfVkFMSURfRlJPTTogMTAxLFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUw6IDEwMixcbiAgICBGVF9EVVJBVElPTl9PRl9TVEFZOiAxMDMsXG4gICAgRlRfTlVNQkVSX09GX0VOVFJJRVM6IDEwNCxcbiAgICBGVF9EQVk6IDEwNSxcbiAgICBGVF9NT05USDogMTA2LFxuICAgIEZUX1lFQVI6IDEwNyxcbiAgICBGVF9VTklRVUVfQ1VTVE9NRVJfSURFTlRJRklFUjogMTA4LFxuICAgIEZUX0NPTU1FUkNJQUxfVkVISUNMRV9DT0RFUzogMTA5LFxuICAgIEZUX0FLQV9EQVRFX09GX0JJUlRIOiAxMTAsXG4gICAgRlRfQUtBX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDExMSxcbiAgICBGVF9BS0FfU1VSTkFNRTogMTEyLFxuICAgIEZUX0FLQV9HSVZFTl9OQU1FUzogMTEzLFxuICAgIEZUX0FLQV9OQU1FX1NVRkZJWDogMTE0LFxuICAgIEZUX0FLQV9OQU1FX1BSRUZJWDogMTE1LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6IDExNixcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTogMTE3LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogMTE4LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTogMTE5LFxuICAgIEZUX0FVRElUX0lORk9STUFUSU9OOiAxMjAsXG4gICAgRlRfSU5WRU5UT1JZX05VTUJFUjogMTIxLFxuICAgIEZUX1JBQ0VfRVRITklDSVRZOiAxMjIsXG4gICAgRlRfSlVSSVNESUNUSU9OX1ZFSElDTEVfQ0xBU1M6IDEyMyxcbiAgICBGVF9KVVJJU0RJQ1RJT05fRU5ET1JTRU1FTlRfQ09ERTogMTI0LFxuICAgIEZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOiAxMjUsXG4gICAgRlRfRkFNSUxZX05BTUU6IDEyNixcbiAgICBGVF9HSVZFTl9OQU1FU19SVVM6IDEyNyxcbiAgICBGVF9WSVNBX0lEX1JVUzogMTI4LFxuICAgIEZUX0ZBVEhFUlNfTkFNRTogMTI5LFxuICAgIEZUX0ZBVEhFUlNfTkFNRV9SVVM6IDEzMCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19SVVM6IDEzMSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9SVVM6IDEzMixcbiAgICBGVF9BVVRIT1JJVFlfUlVTOiAxMzMsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFX05VTUVSSUM6IDEzNCxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6IDEzNSxcbiAgICBGVF9FTkdJTkVfUE9XRVI6IDEzNixcbiAgICBGVF9FTkdJTkVfVk9MVU1FOiAxMzcsXG4gICAgRlRfQ0hBU1NJU19OVU1CRVI6IDEzOCxcbiAgICBGVF9FTkdJTkVfTlVNQkVSOiAxMzksXG4gICAgRlRfRU5HSU5FX01PREVMOiAxNDAsXG4gICAgRlRfVkVISUNMRV9DQVRFR09SWTogMTQxLFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSOiAxNDIsXG4gICAgRlRfQ09OVFJPTF9OTzogMTQzLFxuICAgIEZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOiAxNDQsXG4gICAgRlRfU0VDT05EX1NVUk5BTUU6IDE0NSxcbiAgICBGVF9NSURETEVfTkFNRTogMTQ2LFxuICAgIEZUX1JFR19DRVJUX1ZJTjogMTQ3LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS19ESUdJVDogMTQ4LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS1NVTTogMTQ5LFxuICAgIEZUX0xJTkVfMV9DSEVDS19ESUdJVDogMTUwLFxuICAgIEZUX0xJTkVfMl9DSEVDS19ESUdJVDogMTUxLFxuICAgIEZUX0xJTkVfM19DSEVDS19ESUdJVDogMTUyLFxuICAgIEZUX0xJTkVfMV9DSEVDS1NVTTogMTUzLFxuICAgIEZUX0xJTkVfMl9DSEVDS1NVTTogMTU0LFxuICAgIEZUX0xJTkVfM19DSEVDS1NVTTogMTU1LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLU1VNOiAxNTcsXG4gICAgRlRfUkVHX0NFUlRfVkVISUNMRV9JVFNfQ09ERTogMTU4LFxuICAgIEZUX0NBUkRfQUNDRVNTX05VTUJFUjogMTU5LFxuICAgIEZUX01BUklUQUxfU1RBVFVTOiAxNjAsXG4gICAgRlRfQ09NUEFOWV9OQU1FOiAxNjEsXG4gICAgRlRfU1BFQ0lBTF9OT1RFUzogMTYyLFxuICAgIEZUX1NVUk5BTUVfT0ZfU1BPU0U6IDE2MyxcbiAgICBGVF9UUkFDS0lOR19OVU1CRVI6IDE2NCxcbiAgICBGVF9CT09LTEVUX05VTUJFUjogMTY1LFxuICAgIEZUX0NISUxEUkVOOiAxNjYsXG4gICAgRlRfQ09QWTogMTY3LFxuICAgIEZUX1NFUklBTF9OVU1CRVI6IDE2OCxcbiAgICBGVF9ET1NTSUVSX05VTUJFUjogMTY5LFxuICAgIEZUX0FLQV9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMTcwLFxuICAgIEZUX1RFUlJJVE9SSUFMX1ZBTElESVRZOiAxNzEsXG4gICAgRlRfTVJaX1NUUklOR1NfV0lUSF9DT1JSRUNUX0NIRUNLX1NVTVM6IDE3MixcbiAgICBGVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTogMTczLFxuICAgIEZUX0RMX1VOREVSXzE4X0RBVEU6IDE3NCxcbiAgICBGVF9ETF9SRUNPUkRfQ1JFQVRFRDogMTc1LFxuICAgIEZUX0RMX0RVUExJQ0FURV9EQVRFOiAxNzYsXG4gICAgRlRfRExfSVNTX1RZUEU6IDE3NyxcbiAgICBGVF9NSUxJVEFSWV9CT09LX05VTUJFUjogMTc4LFxuICAgIEZUX0RFU1RJTkFUSU9OOiAxNzksXG4gICAgRlRfQkxPT0RfR1JPVVA6IDE4MCxcbiAgICBGVF9TRVFVRU5DRV9OVU1CRVI6IDE4MSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX1RZUEU6IDE4MixcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTUFSSzogMTgzLFxuICAgIEZUX1RSQU5TQUNUSU9OX05VTUJFUjogMTg0LFxuICAgIEZUX0FHRTogMTg1LFxuICAgIEZUX0ZPTElPX05VTUJFUjogMTg2LFxuICAgIEZUX1ZPVEVSX0tFWTogMTg3LFxuICAgIEZUX0FERFJFU1NfTVVOSUNJUEFMSVRZOiAxODgsXG4gICAgRlRfQUREUkVTU19MT0NBVElPTjogMTg5LFxuICAgIEZUX1NFQ1RJT046IDE5MCxcbiAgICBGVF9PQ1JfTlVNQkVSOiAxOTEsXG4gICAgRlRfRkVERVJBTF9FTEVDVElPTlM6IDE5MixcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSOiAxOTMsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS1NVTTogMTk0LFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tfRElHSVQ6IDE5NSxcbiAgICBGVF9WSVNBX05VTUJFUjogMTk2LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLU1VNOiAxOTcsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE5OCxcbiAgICBGVF9WT1RFUjogMTk5LFxuICAgIEZUX1BSRVZJT1VTX1RZUEU6IDIwMCxcbiAgICBGVF9GSUVMRF9GUk9NX01SWjogMjIwLFxuICAgIEZUX0NVUlJFTlRfREFURTogMjIxLFxuICAgIEZUX1NUQVRVU19EQVRFX09GX0VYUElSWTogMjUxLFxuICAgIEZUX0JBTktOT1RFX05VTUJFUjogMjUyLFxuICAgIEZUX0NTQ19DT0RFOiAyNTMsXG4gICAgRlRfQVJUSVNUSUNfTkFNRTogMjU0LFxuICAgIEZUX0FDQURFTUlDX1RJVExFOiAyNTUsXG4gICAgRlRfQUREUkVTU19DT1VOVFJZOiAyNTYsXG4gICAgRlRfQUREUkVTU19aSVBDT0RFOiAyNTcsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzE6IDI1OCxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMjogMjU5LFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RSRUVUOiAyNjAsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DSVRZOiAyNjEsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVEFURTogMjYyLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ09VTlRSWTogMjYzLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTogMjY0LFxuICAgIEZUX0NETF9DTEFTUzogMjY1LFxuICAgIEZUX0RMX1VOREVSXzE5X0RBVEU6IDI2NixcbiAgICBGVF9XRUlHSFRfUE9VTkRTOiAyNjcsXG4gICAgRlRfTElNSVRFRF9EVVJBVElPTl9ET0NVTUVOVF9JTkRJQ0FUT1I6IDI2OCxcbiAgICBGVF9FTkRPUlNFTUVOVF9FWFBJUkFUSU9OX0RBVEU6IDI2OSxcbiAgICBGVF9SRVZJU0lPTl9EQVRFOiAyNzAsXG4gICAgRlRfQ09NUExJQU5DRV9UWVBFOiAyNzEsXG4gICAgRlRfRkFNSUxZX05BTUVfVFJVTkNBVElPTjogMjcyLFxuICAgIEZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjogMjczLFxuICAgIEZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046IDI3NCxcbiAgICBGVF9FWEFNX0RBVEU6IDI3NSxcbiAgICBGVF9PUkdBTklaQVRJT046IDI3NixcbiAgICBGVF9ERVBBUlRNRU5UOiAyNzcsXG4gICAgRlRfUEFZX0dSQURFOiAyNzgsXG4gICAgRlRfUkFOSzogMjc5LFxuICAgIEZUX0JFTkVGSVRTX05VTUJFUjogMjgwLFxuICAgIEZUX1NQT05TT1JfU0VSVklDRTogMjgxLFxuICAgIEZUX1NQT05TT1JfU1RBVFVTOiAyODIsXG4gICAgRlRfU1BPTlNPUjogMjgzLFxuICAgIEZUX1JFTEFUSU9OU0hJUDogMjg0LFxuICAgIEZUX1VTQ0lTOiAyODUsXG4gICAgRlRfQ0FURUdPUlk6IDI4NixcbiAgICBGVF9DT05ESVRJT05TOiAyODcsXG4gICAgRlRfSURFTlRJRklFUjogMjg4LFxuICAgIEZUX0NPTkZJR1VSQVRJT046IDI4OSxcbiAgICBGVF9ESVNDUkVUSU9OQVJZX0RBVEE6IDI5MCxcbiAgICBGVF9MSU5FXzFfT1BUSU9OQUxfREFUQTogMjkxLFxuICAgIEZUX0xJTkVfMl9PUFRJT05BTF9EQVRBOiAyOTIsXG4gICAgRlRfTElORV8zX09QVElPTkFMX0RBVEE6IDI5MyxcbiAgICBGVF9FUVZfQ09ERTogMjk0LFxuICAgIEZUX0FMVF9DT0RFOiAyOTUsXG4gICAgRlRfQklOQVJZX0NPREU6IDI5NixcbiAgICBGVF9QU0VVRE9fQ09ERTogMjk3LFxuICAgIEZUX0ZFRTogMjk4LFxuICAgIEZUX1NUQU1QX05VTUJFUjogMjk5LFxuICAgIEZUX1NCSF9TRUNVUklUWU9QVElPTlM6IDMwMCxcbiAgICBGVF9TQkhfSU5URUdSSVRZT1BUSU9OUzogMzAxLFxuICAgIEZUX0RBVEVfT0ZfQ1JFQVRJT046IDMwMixcbiAgICBGVF9WQUxJRElUWV9QRVJJT0Q6IDMwMyxcbiAgICBGVF9QQVRST05fSEVBREVSX1ZFUlNJT046IDMwNCxcbiAgICBGVF9CREJfVFlQRTogMzA1LFxuICAgIEZUX0JJT01FVFJJQ19UWVBFOiAzMDYsXG4gICAgRlRfQklPTUVUUklDX1NVQlRZUEU6IDMwNyxcbiAgICBGVF9CSU9NRVRSSUNfUFJPRFVDVElEOiAzMDgsXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9PV05FUjogMzA5LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTogMzEwLFxuICAgIEZUX1BIT05FOiAzMTEsXG4gICAgRlRfUFJPRkVTU0lPTjogMzEyLFxuICAgIEZUX1RJVExFOiAzMTMsXG4gICAgRlRfUEVSU09OQUxfU1VNTUFSWTogMzE0LFxuICAgIEZUX09USEVSX1ZBTElEX0lEOiAzMTUsXG4gICAgRlRfQ1VTVE9EWV9JTkZPOiAzMTYsXG4gICAgRlRfT1RIRVJfTkFNRTogMzE3LFxuICAgIEZUX09CU0VSVkFUSU9OUzogMzE4LFxuICAgIEZUX1RBWDogMzE5LFxuICAgIEZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOiAzMjAsXG4gICAgRlRfUEVSU09OQUxJWkFUSU9OX1NOOiAzMjEsXG4gICAgRlRfT1RIRVJQRVJTT05fTkFNRTogMzIyLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0RBVEVfT0ZfUkVDT1JEOiAzMjMsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfTkFNRTogMzI0LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX1BIT05FOiAzMjUsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzogMzI2LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX0lTU1VFUjogMzI3LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1NVQkpFQ1Q6IDMyOCxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJREZST006IDMyOSxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOiAzMzAsXG4gICAgRlRfVlJDX0RBVEFPQkpFQ1RfRU5UUlk6IDMzMSxcbiAgICBGVF9UWVBFX0FQUFJPVkFMX05VTUJFUjogMzMyLFxuICAgIEZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjogMzMzLFxuICAgIEZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6IDMzNCxcbiAgICBGVF9EQVRBX0RJU0NSSU1JTkFUT1I6IDMzNSxcbiAgICBGVF9JU09fSVNTVUVSX0lEX05VTUJFUjogMzM2LFxuICAgIEZUX0RUQ19WRVJTSU9OOiAzMzcsXG4gICAgRlRfRFRDX0lEOiAzMzgsXG4gICAgRlRfRFRDX0RBVEVfT0ZfRVhQSVJZOiAzMzksXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcbiAgICBGVF9DSVRJWkVOU0hJUF9TVEFUVVM6IDYyNSxcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX0ZST006IDYyNixcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX1RPOiA2MjcsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfRlJPTTogNjI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX1RPOiA2MjksXG4gICAgRlRfRExDTEFTU0NPREVfTlRfTk9URVM6IDYzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9GUk9NOiA2MzEsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fVE86IDYzMixcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9OT1RFUzogNjMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX0ZST006IDYzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19UTzogNjM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX05PVEVTOiA2MzYsXG4gICAgRlRfQUxUX0RBVEVfT0ZfRVhQSVJZOiA2MzcsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfRlJPTTogNjM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX1RPOiA2MzksXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfTk9URVM6IDY0MCxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9UTzogNjQzLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX0ZST006IDY0MixcbiAgICBGVF9JU1NVRVJfSURFTlRJRklDQVRJT05fTlVNQkVSOiA2NDEsXG4gICAgRlRfVkFDQ0lOQVRJT05fQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjQ0LFxuICAgIEZUX0ZJUlNUX05BTUU6IDY0NSxcbiAgICBGVF9EQVRFX09GX0FSUklWQUw6IDY0NixcbiAgICBGVF9TRUNPTkRfTkFNRTogNjQ3LFxuICAgIEZUX1RISVJEX05BTUU6IDY0OCxcbiAgICBGVF9GT1VSVEhfTkFNRTogNjQ5LFxuICAgIEZUX0xBU1RfTkFNRTogNjUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX0ZST006IDY1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9STV9OT1RFUzogNjUyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX1RPOiA2NTMsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfRlJPTTogNjU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1BXX05PVEVTOiA2NTUsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfVE86IDY1NixcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9GUk9NOiA2NTcsXG4gICAgRlRfRExDTEFTU0NPREVfRUJfTk9URVM6IDY1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9UTzogNjU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX0ZST006IDY2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQ19OT1RFUzogNjYxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX1RPOiA2NjIsXG4gICAgRlRfRExDTEFTU0NPREVfRUMxX0ZST006IDY2MyxcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfTk9URVM6IDY2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfVE86IDY2NSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9DSVRZOiA2NjYsXG4gICAgRlRfWUVBUl9PRl9CSVJUSDogNjY3LFxuICAgIEZUX1lFQVJfT0ZfRVhQSVJZOiA2NjgsXG4gICAgRlRfR1JBTkRGQVRIRVJfTkFNRV9NQVRFUk5BTDogNjY5LFxuICAgIEZUX0ZJUlNUX1NVUk5BTUU6IDY3MCxcbiAgICBGVF9NT05USF9PRl9CSVJUSDogNjcxLFxuICAgIEZUX0FERFJFU1NfRkxPT1JfTlVNQkVSOiA2NzIsXG4gICAgRlRfQUREUkVTU19FTlRSQU5DRTogNjczLFxuICAgIEZUX0FERFJFU1NfQkxPQ0tfTlVNQkVSOiA2NzQsXG4gICAgRlRfQUREUkVTU19TVFJFRVRfTlVNQkVSOiA2NzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVRfVFlQRTogNjc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWV9TRUNUT1I6IDY3NyxcbiAgICBGVF9BRERSRVNTX0NPVU5UWV9UWVBFOiA2NzgsXG4gICAgRlRfQUREUkVTU19DSVRZX1RZUEU6IDY3OSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HX1RZUEU6IDY4MCxcbiAgICBGVF9EQVRFX09GX1JFVElSRU1FTlQ6IDY4MSxcbiAgICBGVF9ET0NVTUVOVF9TVEFUVVM6IDY4MixcbiAgICBGVF9TSUdOQVRVUkU6IDY4MyxcbiAgICBGVF9VTklRVUVfQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjg0LFxuICAgIEZUX0VNQUlMOiA2ODUsXG4gICAgRlRfREFURV9PRl9TUEVDSU1FTl9DT0xMRUNUSU9OOiA2ODYsXG4gICAgRlRfVFlQRV9PRl9URVNUSU5HOiA2ODcsXG4gICAgRlRfUkVTVUxUX09GX1RFU1RJTkc6IDY4OCxcbiAgICBGVF9NRVRIT0RfT0ZfVEVTVElORzogNjg5LFxuICAgIEZUX0RJR0lUQUxfVFJBVkVMX0FVVEhPUklaQVRJT05fTlVNQkVSOiA2OTAsXG4gICAgRlRfREFURV9PRl9GSVJTVF9QT1NJVElWRV9URVNUX1JFU1VMVDogNjkxLFxuICAgIEZUX0VGX0NBUkRfQUNDRVNTOiA2OTIsXG4gICAgRlRfU0hPUlRfRkxJR0hUX05VTUJFUjogNjkzLFxuICAgIEZUX0FJUkxJTkVfQ09ERTogNjk0LFxuICAgIEZUX01WQ19BR0VOQ1k6IDY5NSxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfQUxQSEEyOiA2OTYsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9BTFBIQTI6IDY5NyxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFX0NIRUNLRElHSVQ6IDY5OCxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFX0NIRUNLU1VNOiA2OTksXG4gICAgRlRfRVhQSVJZX1RJTUVTVEFNUDogNzAwLFxuICAgIEZUX0NPTU1FUkNJQUxfSU5ESUNBVE9SOiA3MDEsXG4gICAgRlRfTk9OX0RPTUlDSUxFRF9JTkRJQ0FUT1I6IDcwMixcbiAgICBGVF9KVVJJU0RJQ1RJT05fU1BFQ0lGSUNfREFUQTogNzAzLFxuICAgIEZUX0RBVEFfREFURV9PRl9FWFBJUlk6IDcwNCxcbiAgICBGVF9DT05TVUw6IDcwNSxcbiAgICBGVF9ETENMQVNTQ09ERV9CM19GUk9NOiA3MDYsXG4gICAgRlRfRExDTEFTU0NPREVfQjNfVE86IDcwNyxcbiAgICBGVF9ETENMQVNTQ09ERV9CM19OT1RFUzogNzA4LFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyT3JpZW50YXRpb24gPSB7XG4gICAgQUxMOiAwLFxuICAgIFBPUlRSQUlUOiAxLFxuICAgIExBTkRTQ0FQRTogMixcbiAgICBMQU5EU0NBUEVfTEVGVDogMyxcbiAgICBMQU5EU0NBUEVfUklHSFQ6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMQ0lEID0ge1xuICAgIExBVElOOiAwLFxuICAgIEFCS0hBWklBTl9DWVJJTExJQzogMTAwMTEsXG4gICAgQUZSSUtBQU5TOiAxMDc4LFxuICAgIEFMQkFOSUFOOiAxMDUyLFxuICAgIEFNSEFSSUM6IDExMTgsXG4gICAgQVJBQklDX0FMR0VSSUE6IDUxMjEsXG4gICAgQVJBQklDX0JBSFJBSU46IDE1MzYxLFxuICAgIEFSQUJJQ19FR1lQVDogMzA3MyxcbiAgICBBUkFCSUNfSVJBUTogMjA0OSxcbiAgICBBUkFCSUNfSk9SREFOOiAxMTI2NSxcbiAgICBBUkFCSUNfS1VXQUlUOiAxMzMxMyxcbiAgICBBUkFCSUNfTEVCQU5PTjogMTIyODksXG4gICAgQVJBQklDX0xJQllBOiA0MDk3LFxuICAgIEFSQUJJQ19NT1JPQ0NPOiA2MTQ1LFxuICAgIEFSQUJJQ19PTUFOOiA4MTkzLFxuICAgIEFSQUJJQ19RQVRBUjogMTYzODUsXG4gICAgQVJBQklDX1NBVURJX0FSQUJJQTogMTAyNSxcbiAgICBBUkFCSUNfU1lSSUE6IDEwMjQxLFxuICAgIEFSQUJJQ19UVU5JU0lBOiA3MTY5LFxuICAgIEFSQUJJQ19VQUU6IDE0MzM3LFxuICAgIEFSQUJJQ19ZRU1FTjogOTIxNyxcbiAgICBBUkFCSUNfQVJNRU5JQU46IDEwNjcsXG4gICAgQVJBQklDX1dPUkxEOiA0MDk2LFxuICAgIEFaRVJJX0NZUklMSUM6IDIwOTIsXG4gICAgQVpFUklfTEFUSU46IDEwNjgsXG4gICAgQkFTUVVFOiAxMDY5LFxuICAgIEJBTktfQ0FSRDogMTAwMDMsXG4gICAgQkFOS19DQVJEX0NWVjI6IDEwMDA0LFxuICAgIEJBTktfQ0FSRF9OQU1FOiAxMDAwMixcbiAgICBCQU5LX0NBUkRfTlVNQkVSOiAxMDAwMCxcbiAgICBCQU5LX0NBUkRfVkFMSURfVEhSVTogMTAwMDEsXG4gICAgQkVMQVJVU0lBTjogMTA1OSxcbiAgICBCRU5HQUxJX0JBTkdMQURFU0g6IDIxMTcsXG4gICAgQlVMR0FSSUFOOiAxMDI2LFxuICAgIENBVEFMQU46IDEwMjcsXG4gICAgQ0hJTkVTRV9IT05HS09OR19TQVI6IDMwNzYsXG4gICAgQ0hJTkVTRV9NQUNBT19TQVI6IDUxMjQsXG4gICAgQ0hJTkVTRTogMjA1MixcbiAgICBDSElORVNFX1NJTkdBUE9SRTogNDEwMCxcbiAgICBDSElORVNFX1RBSVdBTjogMTAyOCxcbiAgICBDUk9BVElBTjogMTA1MCxcbiAgICBDWkVDSDogMTAyOSxcbiAgICBEQU5JU0g6IDEwMzAsXG4gICAgRElWRUhJOiAxMTI1LFxuICAgIERVVENIX0JFTEdJVU06IDIwNjcsXG4gICAgRFVUQ0hfTkVUSEVSTEFORFM6IDEwNDMsXG4gICAgRU5HTElTSF9BVVNUUkFMSUE6IDMwODEsXG4gICAgRU5HTElTSF9CRUxJWkU6IDEwMjQ5LFxuICAgIEVOR0xJU0hfQ0FOQURBOiA0MTA1LFxuICAgIEVOR0xJU0hfQ0FSUklCRUFOOiA5MjI1LFxuICAgIEVOR0xJU0hfSVJFTEFORDogNjE1MyxcbiAgICBFTkdMSVNIX0pBTUFJQ0E6IDgyMDEsXG4gICAgRU5HTElTSF9ORVdfWkVBTEFORDogNTEyOSxcbiAgICBFTkdMSVNIX1BISUxJUFBJTkVTOiAxMzMyMSxcbiAgICBFTkdMSVNIX1NPVVRIX0FGUklDQTogNzE3NyxcbiAgICBFTkdMSVNIX1RSSU5JREFEOiAxMTI3MyxcbiAgICBFTkdMSVNIX1VLOiAyMDU3LFxuICAgIEVOR0xJU0hfVVM6IDEwMzMsXG4gICAgRU5HTElTSF9aSU1CQUJXRTogMTIyOTcsXG4gICAgRVNUT05JQU46IDEwNjEsXG4gICAgRkFFUk9FU0U6IDEwODAsXG4gICAgRkFSU0k6IDEwNjUsXG4gICAgRklOTklTSDogMTAzNSxcbiAgICBGUkVOQ0hfQkVMR0lVTTogMjA2MCxcbiAgICBGUkVOQ0hfQ0FOQURBOiAzMDg0LFxuICAgIEZSRU5DSF9GUkFOQ0U6IDEwMzYsXG4gICAgRlJFTkNIX0xVWEVNQk9VUkc6IDUxMzIsXG4gICAgRlJFTkNIX01PTkFDTzogNjE1NixcbiAgICBGUkVOQ0hfU1dJVFpFUkxBTkQ6IDQxMDgsXG4gICAgRllST19NQUNFRE9OSUFOOiAxMDcxLFxuICAgIEdBTElDSUFOOiAxMTEwLFxuICAgIEdFT1JHSUFOOiAxMDc5LFxuICAgIEdFUk1BTl9BVVNUUklBOiAzMDc5LFxuICAgIEdFUk1BTl9HRVJNQU5ZOiAxMDMxLFxuICAgIEdFUk1BTl9MSUVDSFRFTlNURUlOOiA1MTI3LFxuICAgIEdFUk1BTl9MVVhFTUJPVVJHOiA0MTAzLFxuICAgIEdFUk1BTl9TV0lUWkVSTEFORDogMjA1NSxcbiAgICBHUkVFSzogMTAzMixcbiAgICBHVUpBUkFUSTogMTA5NSxcbiAgICBIRUJSRVc6IDEwMzcsXG4gICAgSElORElfSU5ESUE6IDEwODEsXG4gICAgSFVOR0FSSUFOOiAxMDM4LFxuICAgIElDRUxBTkRJQzogMTAzOSxcbiAgICBJTkRPTkVTSUFOOiAxMDU3LFxuICAgIElUQUxJQU5fSVRBTFk6IDEwNDAsXG4gICAgSVRBTElBTl9TV0lUWkVSTEFORDogMjA2NCxcbiAgICBKQVBBTkVTRTogMTA0MSxcbiAgICBLQU5OQURBOiAxMDk5LFxuICAgIEtBU0hNSVJJOiAxMTIwLFxuICAgIEtBWkFLSDogMTA4NyxcbiAgICBLT05LQU5JOiAxMTExLFxuICAgIEtPUkVBTjogMTA0MixcbiAgICBLWVJHWVpfQ1lSSUxJQ0s6IDEwODgsXG4gICAgTEFPOiAxMTA4LFxuICAgIExBVFZJQU46IDEwNjIsXG4gICAgTElUSFVBTklBTjogMTA2MyxcbiAgICBNQUxBWV9NQUxBWVNJQTogMTA4NixcbiAgICBNQUxBWV9CUlVORUlfREFSVVNTQUxBTTogMjExMCxcbiAgICBBU1NBTUVTRTogMTEwMSxcbiAgICBNQVJBVEhJOiAxMTAyLFxuICAgIE1PTkdPTElBTl9DWVJJTElDOiAxMTA0LFxuICAgIE5PUldFR0lBTl9CT0tNQUw6IDEwNDQsXG4gICAgTk9SV0VHSUFOX05ZT1JTSzogMjA2OCxcbiAgICBQQVNIVE86IDExMjMsXG4gICAgUE9MSVNIOiAxMDQ1LFxuICAgIFBPUlRVR1VFU0VfQlJBWklMOiAxMDQ2LFxuICAgIFBPUlRVR1VFU0VfUE9SVFVHQUw6IDIwNzAsXG4gICAgUFVOSkFCSTogMTA5NCxcbiAgICBSSEFFVE9fUk9NQU5JQzogMTA0NyxcbiAgICBST01BTklBTjogMTA0OCxcbiAgICBSVVNTSUFOOiAxMDQ5LFxuICAgIFNBTlNLUklUOiAxMTAzLFxuICAgIFNFUkJJQU5fQ1lSSUxJQzogMzA5OCxcbiAgICBTRVJCSUFOX0xBVElOOiAyMDc0LFxuICAgIFNJTkRISTogMjEzNyxcbiAgICBTSU5ESElfSU5ESUE6IDExMTMsXG4gICAgU0lOSEFMQTogMTExNSxcbiAgICBTTE9WQUs6IDEwNTEsXG4gICAgU0xPVkVOSUFOOiAxMDYwLFxuICAgIFNQQU5JU0hfQVJHRU5USU5BOiAxMTI3NCxcbiAgICBTUEFOSVNIX0JPTElWSUE6IDE2Mzk0LFxuICAgIFNQQU5JU0hfQ0hJTEU6IDEzMzIyLFxuICAgIFNQQU5JQ0hfQ09MT01CSUE6IDkyMjYsXG4gICAgU1BBTklTSF9DT1NUQV9SSUNBOiA1MTMwLFxuICAgIFNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOiA3MTc4LFxuICAgIFNQQU5JU0hfRUNVQURPUjogMTIyOTgsXG4gICAgU1BBTklTSF9FTF9TQUxWQURPUjogMTc0MTgsXG4gICAgU1BBTklTSF9HVUFURU1BTEE6IDQxMDYsXG4gICAgU1BBTklTSF9IT05EVVJBUzogMTg0NDIsXG4gICAgU1BBTklTSF9NRVhJQ086IDIwNTgsXG4gICAgU1BBTklTSF9OSUNBUkFHVUE6IDE5NDY2LFxuICAgIFNQQU5JU0hfUEFOQU1BOiA2MTU0LFxuICAgIFNQQU5JU0hfUEFSQUdVQVk6IDE1MzcwLFxuICAgIFNQQU5JU0hfUEVSVTogMTAyNTAsXG4gICAgU1BBTklTSF9QVUVSVE9fUklDTzogMjA0OTAsXG4gICAgU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOiAxMDM0LFxuICAgIFNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOiAzMDgyLFxuICAgIFNQQU5JU0hfVVJVR1VBWTogMTQzNDYsXG4gICAgU1BBTklTSF9WRU5FWlVFTEE6IDgyMDIsXG4gICAgU1dBSElMSTogMTA4OSxcbiAgICBTV0VESVNIOiAxMDUzLFxuICAgIFNXRURJU0hfRklOTEFORDogMjA3NyxcbiAgICBTWVJJQUM6IDExMTQsXG4gICAgVEFNSUw6IDEwOTcsXG4gICAgVEFUQVI6IDEwOTIsXG4gICAgQkVOR0FMSV9JTkRJQTogMTA5MyxcbiAgICBURUxVR1U6IDEwOTgsXG4gICAgVEhBSV9USEFJTEFORDogMTA1NCxcbiAgICBUVVJLSVNIOiAxMDU1LFxuICAgIFRBSklLX0NZUklMTElDOiAxMDY0LFxuICAgIFRVUktNRU46IDEwOTAsXG4gICAgVUtSQUlOSUFOOiAxMDU4LFxuICAgIFVSRFU6IDEwNTYsXG4gICAgVVpCRUtfQ1lSSUxJQzogMjExNSxcbiAgICBVWkJFS19MQVRJTjogMTA5MSxcbiAgICBWSUVUTkFNRVNFOiAxMDY2LFxuICAgIENUQ19TSU1QTElGSUVEOiA1MDAwMSxcbiAgICBDVENfVFJBRElUSU9OQUw6IDUwMDAyLFxuICAgIE1BTFRFU0U6IDEwODIsXG4gICAgQlVSTUVTRTogMTEwOSxcbiAgICBLSE1FUjogMTEwNyxcbiAgICBLQVJBS0FMUEFLX0xBVElOOiAxMDAxMixcbiAgICBNQUxBWUFMQU06IDExMDAsXG4gICAgTkVQQUxJOiAxMTIxLFxuICAgIE9SSVlBOiAxMDk2LFxuICAgIFVSRFVfREVURUNUSU9OOiAxMDU2MCxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25UaW1pbmcgPSB7XG4gICAgTkVYVF9QQUdFX0lEX0NBUkRfU1RBUlRfREVMQVk6IFwibmV4dFBhZ2VJZENhcmRTdGFydERlbGF5XCIsXG4gICAgTkVYVF9QQUdFX0lEX0NBUkRfRU5EX0RFTEFZOiBcIm5leHRQYWdlSWRDYXJkRW5kRGVsYXlcIixcbiAgICBORVhUX1BBR0VfUEFTU1BPUlRfU0hJRlRfU1RBUlRfREVMQVk6IFwibmV4dFBhZ2VQYXNzcG9ydFNoaWZ0U3RhcnREZWxheVwiLFxuICAgIE5FWFRfUEFHRV9QQVNTUE9SVF9TSElGVF9FTkRfREVMQVk6IFwibmV4dFBhZ2VQYXNzcG9ydFNoaWZ0RW5kRGVsYXlcIixcbiAgICBORVhUX1BBR0VfUEFTU1BPUlRfRkxJUF9TVEFSVF9ERUxBWTogXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFN0YXJ0RGVsYXlcIixcbiAgICBORVhUX1BBR0VfUEFTU1BPUlRfRkxJUF9FTkRfREVMQVk6IFwibmV4dFBhZ2VQYXNzcG9ydEZsaXBFbmREZWxheVwiLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIEhFTFBfQU5JTUFUSU9OOiBcImhlbHBBbmltYXRpb25cIixcbiAgICBMSVZFTkVTU19BTklNQVRJT046IFwibGl2ZW5lc3NBbmltYXRpb25cIixcbiAgICBCT1JERVJfQkFDS0dST1VORDogXCJib3JkZXJCYWNrZ3JvdW5kXCIsXG4gICAgVE9SQ0hfQlVUVE9OX09OOiBcInRvcmNoQnV0dG9uT25cIixcbiAgICBUT1JDSF9CVVRUT05fT0ZGOiBcInRvcmNoQnV0dG9uT2ZmXCIsXG4gICAgQ0FQVFVSRV9CVVRUT046IFwiY2FwdHVyZUJ1dHRvblwiLFxuICAgIFNXSVRDSF9CVVRUT046IFwic3dpdGNoQnV0dG9uXCIsXG4gICAgQ0xPU0VfQlVUVE9OOiBcImNsb3NlQnV0dG9uXCIsXG4gICAgTVVMVElQQUdFX0JVVFRPTjogXCJtdWx0aXBhZ2VCdXR0b25cIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0ZBSUxVUkVfSU1BR0U6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5GYWlsdXJlSW1hZ2VcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfSU1BR0U6IFwicmZpZEVuYWJsZU5mY0ltYWdlXCIsXG4gICAgUkZJRF9ESVNBQkxFX05GQ19JTUFHRTogXCJyZmlkRGlzYWJsZU5mY0ltYWdlXCIsXG4gICAgTURMX1BST0NFU1NJTkdfU0NSRUVOX0ZBSUxVUkVfSU1BR0U6IFwibWRsUHJvY2Vzc2luZ1NjcmVlbkZhaWx1cmVJbWFnZVwiLFxuICAgIE1ETF9FTkFCTEVfTkZDX0lNQUdFOiBcIm1kbEVuYWJsZU5mY0ltYWdlXCIsXG4gICAgTURMX0RJU0FCTEVfTkZDX0lNQUdFOiBcIm1kbERpc2FibGVOZmNJbWFnZVwiLFxuICAgIE5FWFRfUEFHRV9JRF9DQVJEX0ZST05UOiBcIm5leHRQYWdlSWRDYXJkRnJvbnRcIixcbiAgICBORVhUX1BBR0VfSURfQ0FSRF9CQUNLOiBcIm5leHRQYWdlSWRDYXJkQmFja1wiLFxuICAgIE5FWFRfUEFHRV9QQVNTUE9SVF9TSElGVDogXCJuZXh0UGFnZVBhc3Nwb3J0U2hpZnRcIixcbiAgICBORVhUX1BBR0VfUEFTU1BPUlRfRkxJUF9TVEFSVDogXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFN0YXJ0XCIsXG4gICAgTkVYVF9QQUdFX1BBU1NQT1JUX0ZMSVBfQ0xFQU46IFwibmV4dFBhZ2VQYXNzcG9ydEZsaXBDbGVhblwiLFxuICAgIE5FWFRfUEFHRV9QQVNTUE9SVF9GTElQX1RPUDogXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcFRvcFwiLFxuICAgIE5FWFRfUEFHRV9QQVNTUE9SVF9GTElQX0JPVFRPTTogXCJuZXh0UGFnZVBhc3Nwb3J0RmxpcEJvdHRvbVwiLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyRnJhbWUgPSB7XG4gICAgTUFYOiBcIm1heFwiLFxuICAgIFNDRU5BUklPX0RFRkFVTFQ6IFwiaWQxXCIsXG4gICAgTk9ORTogXCJub25lXCIsXG4gICAgRE9DVU1FTlQ6IFwiZG9jdW1lbnRcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVNRExEb2NSZXF1ZXN0UHJlc2V0ID0ge1xuICAgIEFMTDogMCxcbiAgICBBR0U6IDEsXG4gICAgU1RBTkRBUkRfSUQ6IDIsXG4gICAgVFJBVkVMOiAzLFxuICAgIERSSVZFUlNfTElDRU5TRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0xpZ2h0cyA9IHtcbiAgICBOT05FOiAwLFxuICAgIFJQUk1fTElHSFRfVVY6IDEyOCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTEw6IDYsXG4gICAgUlBSTV9MSUdIVF9JUjogMTY3NzcyMTYsXG4gICAgUlBSTV9MaWdodF9JUl9UT1A6IDgsXG4gICAgUlBSTV9MaWdodF9JUl9TSURFOiAxNixcbiAgICBSUFJNX0xpZ2h0X0lSX0Z1bGw6ICg4IHwgMTYpLFxuICAgIFJQUk1fTElHSFRfT1ZEOiA2NzEwODg2NCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTExfT1ZEOiAoNiB8IDY3MTA4ODY0KSxcbn1cblxuZXhwb3J0IGNvbnN0IGVNcnpEZXRlY3Rpb25Nb2RlcyA9IHtcbiAgICBERUZBVUxUOiAwLFxuICAgIFJFU0laRV9CSU5BUklaRV9XSU5ET1c6IDEsXG4gICAgQkxVUl9CRUZPUkVfQklOQVJJWkFUSU9OOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIGVSUFJNX0F1dGhlbnRpY2l0eSxcbiAgIEN1c3RvbWl6YXRpb25Db2xvcixcbiAgIGVSRklEX0Vycm9yQ29kZXMsXG4gICBlTERTX1BhcnNpbmdFcnJvckNvZGVzLFxuICAgZVJGSURfQ2VydGlmaWNhdGVUeXBlLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBDYW1lcmFUeXBlcyxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgZU1ETERldmljZVJldHJpZXZhbCxcbiAgIEN1c3RvbWl6YXRpb25UaGVtZSxcbiAgIGVSRklEX0JhdWRSYXRlLFxuICAgTGluZUNhcCxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgZVJGSURSZWFkaW5nQnVmZmVyU2l6ZSxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSxcbiAgIGVSRklEX0FjY2Vzc0NvbnRyb2wsXG4gICBEb2N1bWVudFJlYWRlckVycm9yQ29kZXMsXG4gICBTY2VuYXJpb0lkZW50aWZpZXIsXG4gICBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9Ob3RpZmljYXRpb25Db2RlcyxcbiAgIENhbWVyYVBvc2l0aW9uLFxuICAgZVJGSURfUGFzc3dvcmRfVHlwZSxcbiAgIFZpZXdDb250ZW50TW9kZSxcbiAgIEJhcmNvZGVSZXN1bHQsXG4gICBlUkZJRF9BcHBsaWNhdGlvbl9UeXBlLFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgQ3VzdG9taXphdGlvbk1hdHJpeCxcbiAgIGVNRExEZXZpY2VFbmdhZ2VtZW50LFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBlTURMSW50ZW50VG9SZXRhaW4sXG4gICBDdXN0b21pemF0aW9uQ29udGVudE1vZGUsXG4gICBSRklERGVsZWdhdGUsXG4gICBUZXh0UHJvY2Vzc2luZyxcbiAgIExvZ0xldmVsLFxuICAgQW5pbWF0aW9uSW1hZ2UsXG4gICBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMsXG4gICBEb2NGb3JtYXQsXG4gICBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBNUlpGb3JtYXQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBPbmxpbmVNb2RlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGRpRG9jVHlwZSxcbiAgIEJ1dHRvblRhZyxcbiAgIEhvbG9BbmltYXRpb25UeXBlLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgQ3VzdG9taXphdGlvbkZvbnQsXG4gICBJbWFnZUZvcm1hdCxcbiAgIGVHcmFwaGljRmllbGRUeXBlLFxuICAgUmVnRGV2aWNlQ29uZmlnVHlwZSxcbiAgIENhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQ2FtZXJhTW9kZSxcbiAgIENhcHR1cmVNb2RlLFxuICAgZUNoZWNrUmVzdWx0LFxuICAgZVJGSURfVGVybWluYWxUeXBlLFxuICAgZVJGSURfRGF0YUZpbGVfVHlwZSxcbiAgIGVWaXN1YWxGaWVsZFR5cGUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIExDSUQsXG4gICBDdXN0b21pemF0aW9uVGltaW5nLFxuICAgQ3VzdG9taXphdGlvbkltYWdlLFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBlTURMRG9jUmVxdWVzdFByZXNldCxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIGVNcnpEZXRlY3Rpb25Nb2Rlcyxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1yZWFkZXItYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlclBsdWdpbi5Eb2N1bWVudFJlYWRlcicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRG9jdW1lbnRSZWFkZXItQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIHRoZSBTREsgaXMgcmVhZHkgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlcklzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlclN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2Vzc2lvblN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmZpZFNlc3Npb25TdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHJldHVybnMgdGFnIHByb3BlcnR5IG9mIERvY3VtZW50UmVhZGVyIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgRG9jdW1lbnRSZWFkZXIudGFnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRUYWcodGFnOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRUZW5hbnQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlbmFudFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VGVuYW50KHRlbmFudDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RW52KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbnZcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldEVudihlbnY6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldExvY2FsZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGdW5jdGlvbmFsaXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25hbGl0eX0gZnVuY3Rpb25hbGl0eVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RnVuY3Rpb25hbGl0eShmdW5jdGlvbmFsaXR5OiBGdW5jdGlvbmFsaXR5KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQcm9jZXNzUGFyYW1zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvY2Vzc1BhcmFtc30gcHJvY2Vzc1BhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UHJvY2Vzc1BhcmFtcyhwcm9jZXNzUGFyYW1zOiBQcm9jZXNzUGFyYW1zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDdXN0b21pemF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q3VzdG9taXphdGlvbn0gY3VzdG9taXphdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0Q3VzdG9taXphdGlvbihjdXN0b21pemF0aW9uOiBDdXN0b21pemF0aW9uKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSRklEU2NlbmFyaW99IHJmaWRTY2VuYXJpb1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmZpZFNjZW5hcmlvKHJmaWRTY2VuYXJpbzogUkZJRFNjZW5hcmlvKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVzZXQgY29uZmlndXJhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZXNldENvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RG9jUmVhZGVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIoY29uZmlnOiBEb2NSZWFkZXJDb25maWcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemVzIGRvY3VtZW50IHJlYWRlciB3aXRoIGxpY2Vuc2UgZnJvbSBjb25uZWN0ZWQgRGV2aWNlNzMxMChBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEb2NSZWFkZXJDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcldpdGhCbGVEZXZpY2VDb25maWcoY29uZmlnOiBEb2NSZWFkZXJDb25maWcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkb3dubG9hZCBhIGRhdGFiYXNlIGZyb20gdGhlIFJlZ3VsYSdzIHNlcnZlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBwcmVwYXJlRGF0YWJhc2UoZGF0YWJhc2VUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCBmb3IgZ2V0dGluZyBhbHdheXMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcnVuQXV0b1VwZGF0ZShkYXRhYmFzZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGNoZWNrcyBmb3IgZGF0YWJhc2UgdXBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2hlY2tEYXRhYmFzZVVwZGF0ZShkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTY2FubmVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2Nhbihjb25maWc6IFNjYW5uZXJDb25maWcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTY2FubmVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc3RhcnRTY2FubmVyKGNvbmZpZzogU2Nhbm5lckNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVjb2duaXplQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplKGNvbmZpZzogUmVjb2duaXplQ29uZmlnKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5kaWNhdGUgdGhhbiB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgbmV4dCBwYWdlIGlzIHN0YXJ0ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnROZXdQYWdlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsb3NlIGNhbWVyYSBwcmV2aWV3IGFuZCBzdG9wIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFNjYW5uZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBvcGVuIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBzdGFydCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtSRklEQ29uZmlnIHwgbnVsbH0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0UkZJRFJlYWRlcihjb25maWc6IFJGSURDb25maWcgfCBudWxsKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgUkZJRCBjaGlwIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UkZJRENvbmZpZyB8IG51bGx9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWFkUkZJRChjb25maWc6IFJGSURDb25maWcgfCBudWxsKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBjbG9zZSB0aGUgUkZJRCBjaGlwIHJlYWRpbmcgY29udHJvbGxlciBhbmQgZW5kIGl0cyBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BSRklEUmVhZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgUEFDZXJ0aWZpY2F0ZXMgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlUEFDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBQS0RDZXJ0aWZpY2F0ZVtdIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFDZXJ0aWZpY2F0ZXMgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlVEFDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBQS0RDZXJ0aWZpY2F0ZVtdIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFTaWduYXR1cmUgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaWduYXR1cmVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVUQVNpZ25hdHVyZShzaWduYXR1cmU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEFDRVByb3RvY29sfSBwcm90b2NvbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VsZWN0UEFDRVByb3RvY29sKHByb3RvY29sOiBQQUNFUHJvdG9jb2wpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NBUHJvdG9jb2x9IHByb3RvY29sXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZWxlY3RDQVByb3RvY29sKHByb3RvY29sOiBDQVByb3RvY29sKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBUaGUgbWV0aG9kIGNhbGwgc2V0cyB0aGUgZ2l2ZW4gVENDUGFyYW1zIHRvIHRoZSBSRklEIHNlc3Npb24uIFRoZSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCB0byBiZSBzZXQgYmVmb3JlIHN0YXJ0aW5nIFJGSUQgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGNjUGFyYW1zfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRDQ1BhcmFtcyhwYXJhbXM6IFRjY1BhcmFtcyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHRvIGFkZCBhIGxpc3Qgb2YgUEtEIGNlcnRpZmljYXRlcyBkdXJpbmcgaW5pdGlhbGl6YXRpb24gcHJvY2VzcyB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBDb3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUEtEQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIFBLRCBjZXJ0aWZpY2F0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2xlYXJQS0RDZXJ0aWZpY2F0ZXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBDb25uZWN0cyB0byBibGUgZGV2aWNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnREZXZpY2VOYW1lXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjb25uZWN0Qmx1ZXRvb3RoRGV2aWNlKGJ0RGV2aWNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBidERldmljZVJlcXVlc3RGbGFzaGluZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGJ0RGV2aWNlUmVxdWVzdEZsYXNoaW5nRnVsbElSKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYnREZXZpY2VSZXF1ZXN0VHVybk9mZkFsbCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGRpY3Rpb25hcnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvY2FsaXphdGlvbkRpY3Rpb25hcnkoZGljdGlvbmFyeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEF2YWlsYWJsZVNjZW5hcmlvcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRJc1JGSURBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIGEgbW9iaWxlIGF1dGhlbnRpY2F0b3IgaXMgYXZhaWxhYmxlIGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNBdXRoZW50aWNhdG9yUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2NSZWFkZXJWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBmaW5hbGl6ZVBhY2thZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaW5hbGl6ZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBmaW5hbGl6ZVBhY2thZ2VXaXRoRmluYWxpemVDb25maWcoY29uZmlnOiBGaW5hbGl6ZUNvbmZpZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZW5kQmFja2VuZFRyYW5zYWN0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFRyYW5zbGF0aW9uKGNsYXNzTmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0RhdGFSZXRyaWV2YWx9IGRhdGFSZXRyaWV2YWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0UmVhZE1EbCh0eXBlOiBudW1iZXIsIGRhdGFSZXRyaWV2YWw6IERhdGFSZXRyaWV2YWwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRFbmdhZ2VEZXZpY2UodHlwZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBlbmdhZ2VEZXZpY2VORkMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGVuZ2FnZURldmljZURhdGEoZGF0YTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZXZpY2VFbmdhZ2VtZW50fSBkZXZpY2VFbmdhZ2VtZW50XG4gICAgICogQHBhcmFtIHtEYXRhUmV0cmlldmFsfSBkYXRhUmV0cmlldmFsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydFJldHJpZXZlRGF0YShkZXZpY2VFbmdhZ2VtZW50OiBEZXZpY2VFbmdhZ2VtZW50LCBkYXRhUmV0cmlldmFsOiBEYXRhUmV0cmlldmFsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtEYXRhUmV0cmlldmFsfSBkYXRhUmV0cmlldmFsXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZXRyaWV2ZURhdGFORkMoZGF0YVJldHJpZXZhbDogRGF0YVJldHJpZXZhbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGV2aWNlRW5nYWdlbWVudH0gZGV2aWNlRW5nYWdlbWVudFxuICAgICAqIEBwYXJhbSB7RGF0YVJldHJpZXZhbH0gZGF0YVJldHJpZXZhbFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcmV0cmlldmVEYXRhQkxFKGRldmljZUVuZ2FnZW1lbnQ6IERldmljZUVuZ2FnZW1lbnQsIGRhdGFSZXRyaWV2YWw6IERhdGFSZXRyaWV2YWwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGUocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlTGNpZFNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZVNvdXJjZU9yaWdpbmFsKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBvcmlnaW5hbDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkU291cmNlT3JpZ2luYWwocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgb3JpZ2luYWw6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZEJ5VHlwZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRCeVR5cGVMY2lkKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkQnlUeXBlU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2VQYWdlSW5kZXgocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2VQYWdlSW5kZXhMaWdodChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIsIGxpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRJbWFnZUJ5VHlwZVNvdXJjZVBhZ2VJbmRleChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlUGFnZUluZGV4TGlnaHQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyLCBsaWdodDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBjb250YWluZXJzKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgcmVzdWx0VHlwZTogbnVtYmVyW10pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGVuY3J5cHRlZENvbnRhaW5lcnMocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH19Il19