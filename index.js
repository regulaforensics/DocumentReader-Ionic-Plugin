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
        result.processParam = ProcessParams.fromJson(jsonObject["processParam"]);
        result.imageFormat = jsonObject["imageFormat"];
        result.imageCompressionQuality = jsonObject["imageCompressionQuality"];
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
        result.splitNames = jsonObject["splitNames"];
        result.useFaceApi = jsonObject["useFaceApi"];
        result.useAuthenticityCheck = jsonObject["useAuthenticityCheck"];
        result.checkHologram = jsonObject["checkHologram"];
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
        result.dateFormat = jsonObject["dateFormat"];
        result.scenario = jsonObject["scenario"];
        result.captureButtonScenario = jsonObject["captureButtonScenario"];
        result.sessionLogFolder = jsonObject["sessionLogFolder"];
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
        result.cameraFrameShapeType = jsonObject["cameraFrameShapeType"];
        result.status = jsonObject["status"];
        result.resultStatus = jsonObject["resultStatus"];
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
        result.statusTextFont = Font.fromJson(jsonObject["statusTextFont"]);
        result.resultStatusTextFont = Font.fromJson(jsonObject["resultStatusTextFont"]);
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
        result.eDLDataGroups = EDLDataGroups.fromJson(jsonObject["eDLDataGroups"]);
        result.ePassportDataGroups = EPassportDataGroups.fromJson(jsonObject["ePassportDataGroups"]);
        result.eIDDataGroups = EIDDataGroups.fromJson(jsonObject["eIDDataGroups"]);
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
    START_BACKEND_PROCESSING: 26,
    ADD_DATA_TO_PACKAGE: 27,
    FINALIZE_FAILED: 28,
    CAMERA_NO_PERMISSION: 29,
    CAMERA_NOT_AVAILABLE: 30,
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
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: 81,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: 82,
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: 83,
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: 84,
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: 85,
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
var DocumentReaderOriginal = /** @class */ (function (_super) {
    __extends(DocumentReaderOriginal, _super);
    function DocumentReaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReaderOriginal.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.isBlePermissionsGranted = function () { return cordova(this, "isBlePermissionsGranted", {}, arguments); };
    DocumentReaderOriginal.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.getTag = function () { return cordova(this, "getTag", {}, arguments); };
    DocumentReaderOriginal.prototype.setTag = function (tag) { return cordova(this, "setTag", {}, arguments); };
    DocumentReaderOriginal.prototype.getTenant = function () { return cordova(this, "getTenant", {}, arguments); };
    DocumentReaderOriginal.prototype.setTenant = function (tenant) { return cordova(this, "setTenant", {}, arguments); };
    DocumentReaderOriginal.prototype.getEnv = function () { return cordova(this, "getEnv", {}, arguments); };
    DocumentReaderOriginal.prototype.setEnv = function (env) { return cordova(this, "setEnv", {}, arguments); };
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
    DocumentReaderOriginal.prototype.recognize = function (config) { return cordova(this, "recognize", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReaderOriginal.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReaderOriginal.prototype.startRFIDReader = function (requestPACertificates, requestTACertificates, requestTASignature) { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.readRFID = function (requestPACertificates, requestTACertificates, requestTASignature) { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReaderOriginal.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTASignature = function (signature) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReaderOriginal.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReaderOriginal.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReaderOriginal.prototype.startBluetoothService = function () { return cordova(this, "startBluetoothService", {}, arguments); };
    DocumentReaderOriginal.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    DocumentReaderOriginal.prototype.getLicense = function () { return cordova(this, "getLicense", {}, arguments); };
    DocumentReaderOriginal.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReaderOriginal.prototype.getIsRFIDAvailableForUse = function () { return cordova(this, "getIsRFIDAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocReaderVersion = function () { return cordova(this, "getDocReaderVersion", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocReaderDocumentsDatabase = function () { return cordova(this, "getDocReaderDocumentsDatabase", {}, arguments); };
    DocumentReaderOriginal.prototype.finalizePackage = function () { return cordova(this, "finalizePackage", {}, arguments); };
    DocumentReaderOriginal.prototype.getTranslation = function (className, value) { return cordova(this, "getTranslation", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQWlCdkIsK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzlDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1FBQ3hGLE1BQU0sQ0FBQyxpQ0FBaUMsR0FBRyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUMxRixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMs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TSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxD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LEVBQUUsR0FBRztJQUN6QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6Qix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLHdCQUF3QixFQUFFLEdBQUc7SUFDN0IscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVB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S0FBYTtJQUcvSSxtQ0FBVSxhQUFDLE9BQThCLEVBQUUsVUFBb0I7SUFHL0QsNENBQW1CLGFBQUMsT0FBOEI7Ozs7Ozt5QkExbEx0RDtFQTBtS29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBtdWx0aVBhZ2VPZmY/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZU9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgdXZUb3JjaD86IGJvb2xlYW5cbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lT3JpZW50YXRpb24gPSBqc29uT2JqZWN0W1wiZnJhbWVPcmllbnRhdGlvblwiXVxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsaWdodD86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIG9yaWdpbmFsUGFnZUluZGV4PzogbnVtYmVyXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgbGlnaHROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBmaWVsZFJlY3Q/OiBSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5saWdodCA9IGpzb25PYmplY3RbXCJsaWdodFwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxQYWdlSW5kZXggPSBqc29uT2JqZWN0W1wib3JpZ2luYWxQYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZFJlY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsdWUge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFN5bWJvbHM/OiBEb2N1bWVudFJlYWRlclN5bWJvbFtdXG4gICAgcmZpZE9yaWdpbj86IERvY3VtZW50UmVhZGVyUmZpZE9yaWdpblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWx1ZVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclN5bWJvbC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxTeW1ib2xzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9yaWdpbmFsU3ltYm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJmaWRPcmlnaW4gPSBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4uZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRPcmlnaW5cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIGdldFZhbHVlPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVxuICAgIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuICAgIGNvbXBhcmlzb25MaXN0PzogRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uW11cbiAgICB2YWxpZGl0eUxpc3Q/OiBEb2N1bWVudFJlYWRlclZhbGlkaXR5W11cbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmxjaWROYW1lID0ganNvbk9iamVjdFtcImxjaWROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZ2V0VmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJnZXRWYWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25MaXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudmFsaWRpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25TdGF0dXMgPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHlTdGF0dXMgPSBqc29uT2JqZWN0W1widmFsaWRpdHlTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcbiAgICBhdmFpbGFibGVTb3VyY2VMaXN0PzogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlW11cbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hdmFpbGFibGVTb3VyY2VMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlIHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb29yZGluYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50UG9zaXRpb24ge1xuICAgIGRvY0Zvcm1hdD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgZHBpPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgaW52ZXJzZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgICBvYmpBcmVhPzogbnVtYmVyXG4gICAgb2JqSW50QW5nbGVEZXY/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgICBhbmdsZT86IG51bWJlclxuICAgIGNlbnRlcj86IENvb3JkaW5hdGVcbiAgICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gICAgcmlnaHRUb3A/OiBDb29yZGluYXRlXG4gICAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgYm91bmRSZWN0cz86IFJlY3RbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuYm91bmRSZWN0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ib3VuZFJlY3RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBpc0RlcHJlY2F0ZWQ/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIElDQU9Db2RlPzogc3RyaW5nXG4gICAgZERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgZFllYXI/OiBzdHJpbmdcbiAgICBkQ291bnRyeU5hbWU/OiBzdHJpbmdcbiAgICBGRFNJRD86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0LmlzRGVwcmVjYXRlZCA9IGpzb25PYmplY3RbXCJpc0RlcHJlY2F0ZWRcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgbm90aWZpY2F0aW9uQ29kZT86IG51bWJlclxuICAgIGRhdGFGaWxlVHlwZT86IG51bWJlclxuICAgIHByb2dyZXNzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9uQ29kZSA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhRmlsZVR5cGUgPSBqc29uT2JqZWN0W1wiZGF0YUZpbGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9ncmVzcyA9IGpzb25PYmplY3RbXCJwcm9ncmVzc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB7XG4gICAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICAgICAgcmVzdWx0LmFjdGl2ZU9wdGlvbklkeCA9IGpzb25PYmplY3RbXCJhY3RpdmVPcHRpb25JZHhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHtcbiAgICBzZWN1cml0eU9iamVjdD86IENlcnRpZmljYXRlRGF0YVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0ID0gQ2VydGlmaWNhdGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVcblxuICAgICAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXBwbGljYXRpb25cblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbklEID0ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uSURcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC51bmljb2RlVmVyc2lvbiA9IGpzb25PYmplY3RbXCJ1bmljb2RlVmVyc2lvblwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmlsZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWxlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JtYXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aG9yaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEF0dHJpYnV0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICB0eXBlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RCZWZvcmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QmVmb3JlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBvcmlnaW4/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgc2VyaWFsTnVtYmVyPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBWYWx1ZVxuICAgIHZhbGlkaXR5PzogVmFsaWRpdHlcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBzdWJqZWN0PzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlQ2hhaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICAgICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0ganNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdCA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25lckluZm8ge1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIGRhdGFUb0hhc2g/OiBzdHJpbmdcbiAgICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzZXJpYWxOdW1iZXI/OiBWYWx1ZVxuICAgIHNpZ25hdHVyZT86IFZhbHVlXG4gICAgc3ViamVjdEtleUlkZW50aWZpZXI/OiBWYWx1ZVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lZEF0dHJpYnV0ZXM/OiBFeHRlbnNpb25bXVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpZ25lckluZm9cblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YVRvSGFzaCA9IGpzb25PYmplY3RbXCJkYXRhVG9IYXNoXCJdXG4gICAgICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdKVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdFxuXG4gICAgICAgIHJlc3VsdC5maWxlUmVmZXJlbmNlID0ganNvbk9iamVjdFtcImZpbGVSZWZlcmVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQub2JqZWN0VHlwZSA9IGpzb25PYmplY3RbXCJvYmplY3RUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lckluZm9zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENhcmRQcm9wZXJ0aWVzXG5cbiAgICAgICAgcmVzdWx0LmFUUUEgPSBqc29uT2JqZWN0W1wiYVRRQVwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVTID0ganNvbk9iamVjdFtcImJpdFJhdGVTXCJdXG4gICAgICAgIHJlc3VsdC5jaGlwVHlwZUEgPSBqc29uT2JqZWN0W1wiY2hpcFR5cGVBXCJdXG4gICAgICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkVHlwZSA9IGpzb25PYmplY3RbXCJyZmlkVHlwZVwiXVxuICAgICAgICByZXN1bHQuc0FLID0ganNvbk9iamVjdFtcInNBS1wiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnRNaWZhcmUgPSBqc29uT2JqZWN0W1wic3VwcG9ydE1pZmFyZVwiXVxuICAgICAgICByZXN1bHQuYVRRQiA9IGpzb25PYmplY3RbXCJhVFFCXCJdXG4gICAgICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTEgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUxXCJdXG4gICAgICAgIHJlc3VsdC5iYXVkcmF0ZTIgPSBqc29uT2JqZWN0W1wiYmF1ZHJhdGUyXCJdXG4gICAgICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gICAgdG90YWxCeXRlc1JlY2VpdmVkPzogbnVtYmVyXG4gICAgdG90YWxCeXRlc1NlbnQ/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBleHRMZVN1cHBvcnQ/OiBudW1iZXJcbiAgICBwcm9jZXNzVGltZT86IG51bWJlclxuICAgIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuICAgIGRhdGFHcm91cHM/OiBudW1iZXJbXVxuICAgIGRhdGFGaWVsZHM/OiBEYXRhRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1JlY2VpdmVkID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNSZWNlaXZlZFwiXVxuICAgICAgICByZXN1bHQudG90YWxCeXRlc1NlbnQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1NlbnRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmV4dExlU3VwcG9ydCA9IGpzb25PYmplY3RbXCJleHRMZVN1cHBvcnRcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NUaW1lID0ganNvbk9iamVjdFtcInByb2Nlc3NUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICAgICAgcmVzdWx0LmFjY2Vzc0NvbnRyb2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXBwbGljYXRpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VjdXJpdHlPYmplY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhR3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhR3JvdXBzLnB1c2goanNvbk9iamVjdFtcImRhdGFHcm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRhdGFGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFGaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhRmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERhdGFGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGF0YUZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhRmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGQge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGF0YUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0YUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUERGNDE3SW5mb1xuXG4gICAgICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICAgICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgICAgICByZXN1bHQucm93cyA9IGpzb25PYmplY3RbXCJyb3dzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBSZWd1bGFFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IFJlZ3VsYUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICBub3RpZmljYXRpb24/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ3VsYUV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWd1bGFFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWd1bGFFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBLRENlcnRpZmljYXRlIHtcbiAgICBiaW5hcnlEYXRhPzogc3RyaW5nXG4gICAgcmVzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgcHJpdmF0ZUtleT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQS0RDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRjY1BhcmFtcyB7XG4gICAgc2VydmljZVVybFRBPzogc3RyaW5nXG4gICAgc2VydmljZVVybFBBPzogc3RyaW5nXG4gICAgcGZ4Q2VydFVybD86IHN0cmluZ1xuICAgIHBmeFBhc3NQaHJhc2U/OiBzdHJpbmdcbiAgICBwZnhDZXJ0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRjY1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRjY1BhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsVEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFRBXCJdXG4gICAgICAgIHJlc3VsdC5zZXJ2aWNlVXJsUEEgPSBqc29uT2JqZWN0W1wic2VydmljZVVybFBBXCJdXG4gICAgICAgIHJlc3VsdC5wZnhDZXJ0VXJsID0ganNvbk9iamVjdFtcInBmeENlcnRVcmxcIl1cbiAgICAgICAgcmVzdWx0LnBmeFBhc3NQaHJhc2UgPSBqc29uT2JqZWN0W1wicGZ4UGFzc1BocmFzZVwiXVxuICAgICAgICByZXN1bHQucGZ4Q2VydCA9IGpzb25PYmplY3RbXCJwZnhDZXJ0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgZGlzYWJsZUZyYW1lU2hpZnRJUj86IGJvb2xlYW5cbiAgICBkb0ZsaXBZQXhpcz86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dFBhcmFtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VJbnB1dFBhcmFtXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVGcmFtZVNoaWZ0SVIgPSBqc29uT2JqZWN0W1wiZGlzYWJsZUZyYW1lU2hpZnRJUlwiXVxuICAgICAgICByZXN1bHQuZG9GbGlwWUF4aXMgPSBqc29uT2JqZWN0W1wiZG9GbGlwWUF4aXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBzdHJpbmdcbiAgICBhdHRyaWJ1dGVzPzogUEFBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQVJlc291cmNlc0lzc3VlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBUmVzb3VyY2VzSXNzdWVyXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0ganNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXVxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQUF0dHJpYnV0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVEFDaGFsbGVuZ2Uge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBhdXhQQ0Q/OiBzdHJpbmdcbiAgICBjaGFsbGVuZ2VQSUNDPzogc3RyaW5nXG4gICAgaGFzaFBLPzogc3RyaW5nXG4gICAgaWRQSUNDPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRBQ2hhbGxlbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEFDaGFsbGVuZ2VcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5hdXhQQ0QgPSBqc29uT2JqZWN0W1wiYXV4UENEXCJdXG4gICAgICAgIHJlc3VsdC5jaGFsbGVuZ2VQSUNDID0ganNvbk9iamVjdFtcImNoYWxsZW5nZVBJQ0NcIl1cbiAgICAgICAgcmVzdWx0Lmhhc2hQSyA9IGpzb25PYmplY3RbXCJoYXNoUEtcIl1cbiAgICAgICAgcmVzdWx0LmlkUElDQyA9IGpzb25PYmplY3RbXCJpZFBJQ0NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgb3B0aWNhbD86IG51bWJlclxuICAgIGRldGFpbHNPcHRpY2FsPzogRGV0YWlsc09wdGljYWxcbiAgICByZmlkPzogbnVtYmVyXG4gICAgZGV0YWlsc1JGSUQ/OiBEZXRhaWxzUkZJRFxuICAgIHBvcnRyYWl0PzogbnVtYmVyXG4gICAgc3RvcExpc3Q/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQub3B0aWNhbCA9IGpzb25PYmplY3RbXCJvcHRpY2FsXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzT3B0aWNhbCA9IERldGFpbHNPcHRpY2FsLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzT3B0aWNhbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWQgPSBqc29uT2JqZWN0W1wicmZpZFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc1JGSUQgPSBEZXRhaWxzUkZJRC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc1JGSURcIl0pXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuc3RvcExpc3QgPSBqc29uT2JqZWN0W1wic3RvcExpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc09wdGljYWwge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBtcno/OiBudW1iZXJcbiAgICB0ZXh0PzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIHNlY3VyaXR5PzogbnVtYmVyXG4gICAgaW1hZ2VRQT86IG51bWJlclxuICAgIGV4cGlyeT86IG51bWJlclxuICAgIHZkcz86IG51bWJlclxuICAgIHBhZ2VzQ291bnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc09wdGljYWwgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzT3B0aWNhbFxuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm1yeiA9IGpzb25PYmplY3RbXCJtcnpcIl1cbiAgICAgICAgcmVzdWx0LnRleHQgPSBqc29uT2JqZWN0W1widGV4dFwiXVxuICAgICAgICByZXN1bHQuZG9jVHlwZSA9IGpzb25PYmplY3RbXCJkb2NUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zZWN1cml0eSA9IGpzb25PYmplY3RbXCJzZWN1cml0eVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRQSA9IGpzb25PYmplY3RbXCJpbWFnZVFBXCJdXG4gICAgICAgIHJlc3VsdC5leHBpcnkgPSBqc29uT2JqZWN0W1wiZXhwaXJ5XCJdXG4gICAgICAgIHJlc3VsdC52ZHMgPSBqc29uT2JqZWN0W1widmRzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlc0NvdW50ID0ganNvbk9iamVjdFtcInBhZ2VzQ291bnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc1JGSUQge1xuICAgIHBhPzogbnVtYmVyXG4gICAgY2E/OiBudW1iZXJcbiAgICBhYT86IG51bWJlclxuICAgIHRhPzogbnVtYmVyXG4gICAgYmFjPzogbnVtYmVyXG4gICAgcGFjZT86IG51bWJlclxuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc1JGSUQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRhaWxzUkZJRFxuXG4gICAgICAgIHJlc3VsdC5wYSA9IGpzb25PYmplY3RbXCJwYVwiXVxuICAgICAgICByZXN1bHQuY2EgPSBqc29uT2JqZWN0W1wiY2FcIl1cbiAgICAgICAgcmVzdWx0LmFhID0ganNvbk9iamVjdFtcImFhXCJdXG4gICAgICAgIHJlc3VsdC50YSA9IGpzb25PYmplY3RbXCJ0YVwiXVxuICAgICAgICByZXN1bHQuYmFjID0ganNvbk9iamVjdFtcImJhY1wiXVxuICAgICAgICByZXN1bHQucGFjZSA9IGpzb25PYmplY3RbXCJwYWNlXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVkRTTkNEYXRhIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIGlzc3VpbmdDb3VudHJ5Pzogc3RyaW5nXG4gICAgbWVzc2FnZT86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZT86IEJ5dGVzRGF0YVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVkRTTkNEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVkRTTkNEYXRhXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nQ291bnRyeSA9IGpzb25PYmplY3RbXCJpc3N1aW5nQ291bnRyeVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlc0RhdGEge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJ5dGVzRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJ5dGVzRGF0YVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUlucHV0RGF0YSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgbGlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBpbWdCeXRlcz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXREYXRhXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5pbWdCeXRlcyA9IGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSB7XG4gICAgZGF0YWJhc2VJRD86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBkYXRlPzogc3RyaW5nXG4gICAgZGF0YWJhc2VEZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGNvdW50cmllc051bWJlcj86IG51bWJlclxuICAgIGRvY3VtZW50c051bWJlcj86IG51bWJlclxuICAgIHNpemU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZUlEID0ganNvbk9iamVjdFtcImRhdGFiYXNlSURcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZGF0ZSA9IGpzb25PYmplY3RbXCJkYXRlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZURlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRhdGFiYXNlRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmNvdW50cmllc051bWJlciA9IGpzb25PYmplY3RbXCJjb3VudHJpZXNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50c051bWJlciA9IGpzb25PYmplY3RbXCJkb2N1bWVudHNOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBqc29uT2JqZWN0W1wic2l6ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24ge1xuICAgIHNvdXJjZVR5cGVMZWZ0PzogbnVtYmVyXG4gICAgc291cmNlVHlwZVJpZ2h0PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvblxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlTGVmdCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlTGVmdFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZVJpZ2h0ID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVSaWdodFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4ge1xuICAgIGRnPzogbnVtYmVyXG4gICAgZGdUYWc/OiBudW1iZXJcbiAgICBlbnRyeVZpZXc/OiBudW1iZXJcbiAgICB0YWdFbnRyeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgICAgICByZXN1bHQuZGcgPSBqc29uT2JqZWN0W1wiZGdcIl1cbiAgICAgICAgcmVzdWx0LmRnVGFnID0ganNvbk9iamVjdFtcImRnVGFnXCJdXG4gICAgICAgIHJlc3VsdC5lbnRyeVZpZXcgPSBqc29uT2JqZWN0W1wiZW50cnlWaWV3XCJdXG4gICAgICAgIHJlc3VsdC50YWdFbnRyeSA9IGpzb25PYmplY3RbXCJ0YWdFbnRyeVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2Uge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzb3VyY2U/OiBzdHJpbmdcbiAgICB2YWxpZGl0eVN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2VcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2UgPSBqc29uT2JqZWN0W1wic291cmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclN5bWJvbCB7XG4gICAgY29kZT86IG51bWJlclxuICAgIHJlY3Q/OiBSZWN0XG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJTeW1ib2wgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclN5bWJvbFxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LnJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWN0XCJdKVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT25saW5lUHJvY2Vzc2luZ0NvbmZpZyB7XG4gICAgbW9kZT86IG51bWJlclxuICAgIHVybD86IHN0cmluZ1xuICAgIHByb2Nlc3NQYXJhbT86IFByb2Nlc3NQYXJhbXNcbiAgICBpbWFnZUZvcm1hdD86IG51bWJlclxuICAgIGltYWdlQ29tcHJlc3Npb25RdWFsaXR5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE9ubGluZVByb2Nlc3NpbmdDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0Lm1vZGUgPSBqc29uT2JqZWN0W1wibW9kZVwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc1BhcmFtID0gUHJvY2Vzc1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wicHJvY2Vzc1BhcmFtXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VGb3JtYXQgPSBqc29uT2JqZWN0W1wiaW1hZ2VGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlQ29tcHJlc3Npb25RdWFsaXR5ID0ganNvbk9iamVjdFtcImltYWdlQ29tcHJlc3Npb25RdWFsaXR5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY1JlYWRlckNvbmZpZyB7XG4gICAgbGljZW5zZT86IHN0cmluZ1xuICAgIGN1c3RvbURiPzogc3RyaW5nXG4gICAgZGF0YWJhc2VQYXRoPzogc3RyaW5nXG4gICAgbGljZW5zZVVwZGF0ZT86IGJvb2xlYW5cbiAgICBkZWxheWVkTk5Mb2FkPzogYm9vbGVhblxuICAgIGJsYWNrTGlzdD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jUmVhZGVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2UgPSBqc29uT2JqZWN0W1wibGljZW5zZVwiXVxuICAgICAgICByZXN1bHQuY3VzdG9tRGIgPSBqc29uT2JqZWN0W1wiY3VzdG9tRGJcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlUGF0aCA9IGpzb25PYmplY3RbXCJkYXRhYmFzZVBhdGhcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuICAgICAgICByZXN1bHQuZGVsYXllZE5OTG9hZCA9IGpzb25PYmplY3RbXCJkZWxheWVkTk5Mb2FkXCJdXG4gICAgICAgIHJlc3VsdC5ibGFja0xpc3QgPSBqc29uT2JqZWN0W1wiYmxhY2tMaXN0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjYW5uZXJDb25maWcge1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgbGl2ZVBvcnRyYWl0Pzogc3RyaW5nXG4gICAgZXh0UG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBvbmxpbmVQcm9jZXNzaW5nQ29uZmlnPzogT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIGNhbWVyYUlkPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNjYW5uZXJDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTY2FubmVyQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5saXZlUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wibGl2ZVBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5leHRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJleHRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQub25saW5lUHJvY2Vzc2luZ0NvbmZpZyA9IE9ubGluZVByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcIm9ubGluZVByb2Nlc3NpbmdDb25maWdcIl0pXG4gICAgICAgIHJlc3VsdC5jYW1lcmFJZCA9IGpzb25PYmplY3RbXCJjYW1lcmFJZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWNvZ25pemVDb25maWcge1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgb25saW5lUHJvY2Vzc2luZ0NvbmZpZz86IE9ubGluZVByb2Nlc3NpbmdDb25maWdcbiAgICBvbmVTaG90SWRlbnRpZmljYXRpb24/OiBib29sZWFuXG4gICAgbGl2ZVBvcnRyYWl0Pzogc3RyaW5nXG4gICAgZXh0UG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBpbWFnZXM/OiBzdHJpbmdbXVxuICAgIGltYWdlSW5wdXREYXRhPzogSW1hZ2VJbnB1dERhdGFbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWNvZ25pemVDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWNvZ25pemVDb25maWdcblxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0Lm9ubGluZVByb2Nlc3NpbmdDb25maWcgPSBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJvbmxpbmVQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQub25lU2hvdElkZW50aWZpY2F0aW9uID0ganNvbk9iamVjdFtcIm9uZVNob3RJZGVudGlmaWNhdGlvblwiXVxuICAgICAgICByZXN1bHQubGl2ZVBvcnRyYWl0ID0ganNvbk9iamVjdFtcImxpdmVQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZXh0UG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZXh0UG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlSW5wdXREYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlSW5wdXREYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlSW5wdXREYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZUlucHV0RGF0YVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZUlucHV0RGF0YS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGljZW5zZSB7XG4gICAgZXhwaXJ5RGF0ZT86IHN0cmluZ1xuICAgIGNvdW50cnlGaWx0ZXI/OiBzdHJpbmdbXVxuICAgIGlzUmZpZEF2YWlsYWJsZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGljZW5zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpY2Vuc2VcblxuICAgICAgICByZXN1bHQuZXhwaXJ5RGF0ZSA9IGpzb25PYmplY3RbXCJleHBpcnlEYXRlXCJdXG4gICAgICAgIHJlc3VsdC5jb3VudHJ5RmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjb3VudHJ5RmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY291bnRyeUZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb3VudHJ5RmlsdGVyLnB1c2goanNvbk9iamVjdFtcImNvdW50cnlGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlzUmZpZEF2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJpc1JmaWRBdmFpbGFibGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyVmVyc2lvbiB7XG4gICAgYXBpPzogc3RyaW5nXG4gICAgY29yZT86IHN0cmluZ1xuICAgIGNvcmVNb2RlPzogc3RyaW5nXG4gICAgZGF0YWJhc2U/OiBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2NSZWFkZXJWZXJzaW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyVmVyc2lvblxuXG4gICAgICAgIHJlc3VsdC5hcGkgPSBqc29uT2JqZWN0W1wiYXBpXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlID0ganNvbk9iamVjdFtcImNvcmVcIl1cbiAgICAgICAgcmVzdWx0LmNvcmVNb2RlID0ganNvbk9iamVjdFtcImNvcmVNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZSA9IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkYXRhYmFzZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25JbmZvIHtcbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG4gICAgdGFnPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRyYW5zYWN0aW9uSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRyYW5zYWN0aW9uSW5mb1xuXG4gICAgICAgIHJlc3VsdC50cmFuc2FjdGlvbklkID0ganNvbk9iamVjdFtcInRyYW5zYWN0aW9uSWRcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICBjaGlwUGFnZT86IG51bWJlclxuICAgIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gICAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gICAgZ3JhcGhpY1Jlc3VsdD86IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuICAgIHRleHRSZXN1bHQ/OiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcbiAgICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBiYXJjb2RlUG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIG1yelBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFtdXG4gICAgcmF3UmVzdWx0Pzogc3RyaW5nXG4gICAgcmZpZFNlc3Npb25EYXRhPzogUkZJRFNlc3Npb25EYXRhXG4gICAgYXV0aGVudGljaXR5UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcbiAgICBiYXJjb2RlUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG4gICAgZG9jdW1lbnRUeXBlPzogRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVbXVxuICAgIHN0YXR1cz86IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1c1xuICAgIHZkc25jRGF0YT86IFZEU05DRGF0YVxuICAgIHRyYW5zYWN0aW9uSW5mbz86IFRyYW5zYWN0aW9uSW5mb1xuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuXG4gICAgICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWUgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lUkZJRCA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVJGSURcIl1cbiAgICAgICAgcmVzdWx0Lm1vcmVQYWdlc0F2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJtb3JlUGFnZXNBdmFpbGFibGVcIl1cbiAgICAgICAgcmVzdWx0LmdyYXBoaWNSZXN1bHQgPSBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImdyYXBoaWNSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC50ZXh0UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJ0ZXh0UmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5R3JvdXAuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdSZXN1bHQgPSBqc29uT2JqZWN0W1wicmF3UmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YXR1c1wiXSlcbiAgICAgICAgcmVzdWx0LnZkc25jRGF0YSA9IFZEU05DRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1widmRzbmNEYXRhXCJdKVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JbmZvID0gVHJhbnNhY3Rpb25JbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbkluZm9cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbWVyYVNpemUge1xuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENhbWVyYVNpemUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDYW1lcmFTaXplXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uYWxpdHkge1xuICAgIHBpY3R1cmVPbkJvdW5kc1JlYWR5PzogYm9vbGVhblxuICAgIHNob3dUb3JjaEJ1dHRvbj86IGJvb2xlYW5cbiAgICBzaG93Q2xvc2VCdXR0b24/OiBib29sZWFuXG4gICAgdmlkZW9DYXB0dXJlTW90aW9uQ29udHJvbD86IGJvb2xlYW5cbiAgICBzaG93Q2FwdHVyZUJ1dHRvbj86IGJvb2xlYW5cbiAgICBzaG93Q2hhbmdlRnJhbWVCdXR0b24/OiBib29sZWFuXG4gICAgc2hvd1NraXBOZXh0UGFnZUJ1dHRvbj86IGJvb2xlYW5cbiAgICB1c2VBdXRoZW50aWNhdG9yPzogYm9vbGVhblxuICAgIHNraXBGb2N1c2luZ0ZyYW1lcz86IGJvb2xlYW5cbiAgICBzaG93Q2FtZXJhU3dpdGNoQnV0dG9uPzogYm9vbGVhblxuICAgIGRpc3BsYXlNZXRhZGF0YT86IGJvb2xlYW5cbiAgICBpc1pvb21FbmFibGVkPzogYm9vbGVhblxuICAgIGlzQ2FtZXJhVG9yY2hDaGVja0Rpc2FibGVkPzogYm9vbGVhblxuICAgIHJlY29yZFNjYW5uaW5nUHJvY2Vzcz86IGJvb2xlYW5cbiAgICBtYW51YWxNdWx0aXBhZ2VNb2RlPzogYm9vbGVhblxuICAgIHNpbmdsZVJlc3VsdD86IGJvb2xlYW5cbiAgICBzaG93Q2FwdHVyZUJ1dHRvbkRlbGF5RnJvbURldGVjdD86IG51bWJlclxuICAgIHNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnQ/OiBudW1iZXJcbiAgICByZmlkVGltZW91dD86IG51bWJlclxuICAgIGZvcmNlUGFnZXNDb3VudD86IG51bWJlclxuICAgIG9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgY2FwdHVyZU1vZGU/OiBudW1iZXJcbiAgICBjYW1lcmFNb2RlPzogbnVtYmVyXG4gICAgY2FtZXJhUG9zaXRpb25JT1M/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZT86IHN0cmluZ1xuICAgIGJ0RGV2aWNlTmFtZT86IHN0cmluZ1xuICAgIHpvb21GYWN0b3I/OiBudW1iZXJcbiAgICBleHBvc3VyZT86IG51bWJlclxuICAgIGV4Y2x1ZGVkQ2FtZXJhMk1vZGVscz86IHN0cmluZ1tdXG4gICAgY2FtZXJhU2l6ZT86IENhbWVyYVNpemVcbiAgICB2aWRlb1Nlc3Npb25QcmVzZXQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRnVuY3Rpb25hbGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uYWxpdHlcblxuICAgICAgICByZXN1bHQucGljdHVyZU9uQm91bmRzUmVhZHkgPSBqc29uT2JqZWN0W1wicGljdHVyZU9uQm91bmRzUmVhZHlcIl1cbiAgICAgICAgcmVzdWx0LnNob3dUb3JjaEJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93VG9yY2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDbG9zZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2xvc2VCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnZpZGVvQ2FwdHVyZU1vdGlvbkNvbnRyb2wgPSBqc29uT2JqZWN0W1widmlkZW9DYXB0dXJlTW90aW9uQ29udHJvbFwiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDaGFuZ2VGcmFtZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2hhbmdlRnJhbWVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dTa2lwTmV4dFBhZ2VCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd1NraXBOZXh0UGFnZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQudXNlQXV0aGVudGljYXRvciA9IGpzb25PYmplY3RbXCJ1c2VBdXRoZW50aWNhdG9yXCJdXG4gICAgICAgIHJlc3VsdC5za2lwRm9jdXNpbmdGcmFtZXMgPSBqc29uT2JqZWN0W1wic2tpcEZvY3VzaW5nRnJhbWVzXCJdXG4gICAgICAgIHJlc3VsdC5zaG93Q2FtZXJhU3dpdGNoQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dDYW1lcmFTd2l0Y2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LmRpc3BsYXlNZXRhZGF0YSA9IGpzb25PYmplY3RbXCJkaXNwbGF5TWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmlzWm9vbUVuYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNab29tRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnJlY29yZFNjYW5uaW5nUHJvY2VzcyA9IGpzb25PYmplY3RbXCJyZWNvcmRTY2FubmluZ1Byb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbE11bHRpcGFnZU1vZGUgPSBqc29uT2JqZWN0W1wibWFudWFsTXVsdGlwYWdlTW9kZVwiXVxuICAgICAgICByZXN1bHQuc2luZ2xlUmVzdWx0ID0ganNvbk9iamVjdFtcInNpbmdsZVJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3QgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21EZXRlY3RcIl1cbiAgICAgICAgcmVzdWx0LnNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnQgPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25EZWxheUZyb21TdGFydFwiXVxuICAgICAgICByZXN1bHQucmZpZFRpbWVvdXQgPSBqc29uT2JqZWN0W1wicmZpZFRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LmZvcmNlUGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJmb3JjZVBhZ2VzQ291bnRcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcIm9yaWVudGF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlTW9kZSA9IGpzb25PYmplY3RbXCJjYXB0dXJlTW9kZVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhTW9kZSA9IGpzb25PYmplY3RbXCJjYW1lcmFNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWUgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVcIl1cbiAgICAgICAgcmVzdWx0LmJ0RGV2aWNlTmFtZSA9IGpzb25PYmplY3RbXCJidERldmljZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lnpvb21GYWN0b3IgPSBqc29uT2JqZWN0W1wiem9vbUZhY3RvclwiXVxuICAgICAgICByZXN1bHQuZXhwb3N1cmUgPSBqc29uT2JqZWN0W1wiZXhwb3N1cmVcIl1cbiAgICAgICAgcmVzdWx0LmV4Y2x1ZGVkQ2FtZXJhMk1vZGVscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXhjbHVkZWRDYW1lcmEyTW9kZWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXhjbHVkZWRDYW1lcmEyTW9kZWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmV4Y2x1ZGVkQ2FtZXJhMk1vZGVscy5wdXNoKGpzb25PYmplY3RbXCJleGNsdWRlZENhbWVyYTJNb2RlbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVNpemUgPSBDYW1lcmFTaXplLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYW1lcmFTaXplXCJdKVxuICAgICAgICByZXN1bHQudmlkZW9TZXNzaW9uUHJlc2V0ID0ganNvbk9iamVjdFtcInZpZGVvU2Vzc2lvblByZXNldFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbGFyZXNDaGVja1BhcmFtcyB7XG4gICAgaW1nTWFyZ2luUGFydD86IG51bWJlclxuICAgIG1heEdsYXJpbmdQYXJ0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEdsYXJlc0NoZWNrUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgR2xhcmVzQ2hlY2tQYXJhbXNcblxuICAgICAgICByZXN1bHQuaW1nTWFyZ2luUGFydCA9IGpzb25PYmplY3RbXCJpbWdNYXJnaW5QYXJ0XCJdXG4gICAgICAgIHJlc3VsdC5tYXhHbGFyaW5nUGFydCA9IGpzb25PYmplY3RbXCJtYXhHbGFyaW5nUGFydFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVFBIHtcbiAgICBkcGlUaHJlc2hvbGQ/OiBudW1iZXJcbiAgICBhbmdsZVRocmVzaG9sZD86IG51bWJlclxuICAgIGZvY3VzQ2hlY2s/OiBib29sZWFuXG4gICAgZ2xhcmVzQ2hlY2s/OiBib29sZWFuXG4gICAgZ2xhcmVzQ2hlY2tQYXJhbXM/OiBHbGFyZXNDaGVja1BhcmFtc1xuICAgIGNvbG9ybmVzc0NoZWNrPzogYm9vbGVhblxuICAgIHNjcmVlbkNhcHR1cmU/OiBib29sZWFuXG4gICAgZXhwZWN0ZWRQYXNzPzogbnVtYmVyW11cbiAgICBkb2N1bWVudFBvc2l0aW9uSW5kZW50PzogbnVtYmVyXG4gICAgYnJpZ2h0bmVzc1RocmVzaG9sZD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVFBIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRQVxuXG4gICAgICAgIHJlc3VsdC5kcGlUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiZHBpVGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZVRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJhbmdsZVRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuZm9jdXNDaGVjayA9IGpzb25PYmplY3RbXCJmb2N1c0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5nbGFyZXNDaGVjayA9IGpzb25PYmplY3RbXCJnbGFyZXNDaGVja1wiXVxuICAgICAgICByZXN1bHQuZ2xhcmVzQ2hlY2tQYXJhbXMgPSBHbGFyZXNDaGVja1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ2xhcmVzQ2hlY2tQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jb2xvcm5lc3NDaGVjayA9IGpzb25PYmplY3RbXCJjb2xvcm5lc3NDaGVja1wiXVxuICAgICAgICByZXN1bHQuc2NyZWVuQ2FwdHVyZSA9IGpzb25PYmplY3RbXCJzY3JlZW5DYXB0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHBlY3RlZFBhc3MucHVzaChqc29uT2JqZWN0W1wiZXhwZWN0ZWRQYXNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uSW5kZW50ID0ganNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25JbmRlbnRcIl1cbiAgICAgICAgcmVzdWx0LmJyaWdodG5lc3NUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiYnJpZ2h0bmVzc1RocmVzaG9sZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEUGFyYW1zIHtcbiAgICBwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURQYXJhbXNcblxuICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2RlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlcy5wdXNoKGpzb25PYmplY3RbXCJwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VBcGlTZWFyY2hQYXJhbXMge1xuICAgIGxpbWl0PzogbnVtYmVyXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgZ3JvdXBJZHM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQXBpU2VhcmNoUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUFwaVNlYXJjaFBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5saW1pdCA9IGpzb25PYmplY3RbXCJsaW1pdFwiXVxuICAgICAgICByZXN1bHQudGhyZXNob2xkID0ganNvbk9iamVjdFtcInRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBJZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHMucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUFwaVBhcmFtcyB7XG4gICAgdXJsPzogc3RyaW5nXG4gICAgbW9kZT86IHN0cmluZ1xuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIHNlYXJjaFBhcmFtcz86IEZhY2VBcGlTZWFyY2hQYXJhbXNcbiAgICBzZXJ2aWNlVGltZW91dD86IG51bWJlclxuICAgIHByb3h5Pzogc3RyaW5nXG4gICAgcHJveHlQYXNzd29yZD86IHN0cmluZ1xuICAgIHByb3h5VHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQXBpUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUFwaVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5tb2RlID0ganNvbk9iamVjdFtcIm1vZGVcIl1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LnNlYXJjaFBhcmFtcyA9IEZhY2VBcGlTZWFyY2hQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlYXJjaFBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LnNlcnZpY2VUaW1lb3V0ID0ganNvbk9iamVjdFtcInNlcnZpY2VUaW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5wcm94eSA9IGpzb25PYmplY3RbXCJwcm94eVwiXVxuICAgICAgICByZXN1bHQucHJveHlQYXNzd29yZCA9IGpzb25PYmplY3RbXCJwcm94eVBhc3N3b3JkXCJdXG4gICAgICAgIHJlc3VsdC5wcm94eVR5cGUgPSBqc29uT2JqZWN0W1wicHJveHlUeXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnIHtcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBodHRwSGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICByZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb24/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQmFja2VuZFByb2Nlc3NpbmdDb25maWdcblxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuaHR0cEhlYWRlcnMgPSBqc29uT2JqZWN0W1wiaHR0cEhlYWRlcnNcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRTZXJ2ZXJTaWRlQ2hpcFZlcmlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJyZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NQYXJhbXMge1xuICAgIGNoZWNrT1ZJPzogYm9vbGVhblxuICAgIGNoZWNrTUxJPzogYm9vbGVhblxuICAgIGNoZWNrSG9sbz86IGJvb2xlYW5cbiAgICBjaGVja0VEPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmNoZWNrT1ZJID0ganNvbk9iamVjdFtcImNoZWNrT1ZJXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja01MSSA9IGpzb25PYmplY3RbXCJjaGVja01MSVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tIb2xvID0ganNvbk9iamVjdFtcImNoZWNrSG9sb1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tFRCA9IGpzb25PYmplY3RbXCJjaGVja0VEXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2l0eVBhcmFtcyB7XG4gICAgdXNlTGl2ZW5lc3NDaGVjaz86IGJvb2xlYW5cbiAgICBsaXZlbmVzc1BhcmFtcz86IExpdmVuZXNzUGFyYW1zXG4gICAgY2hlY2tVVkx1bWluaXNjZW5jZT86IGJvb2xlYW5cbiAgICBjaGVja0lSQjkwMD86IGJvb2xlYW5cbiAgICBjaGVja0ltYWdlUGF0dGVybnM/OiBib29sZWFuXG4gICAgY2hlY2tGaWJlcnM/OiBib29sZWFuXG4gICAgY2hlY2tFeHRNUlo/OiBib29sZWFuXG4gICAgY2hlY2tFeHRPQ1I/OiBib29sZWFuXG4gICAgY2hlY2tBeGlhbD86IGJvb2xlYW5cbiAgICBjaGVja0JhcmNvZGVGb3JtYXQ/OiBib29sZWFuXG4gICAgY2hlY2tJUlZpc2liaWxpdHk/OiBib29sZWFuXG4gICAgY2hlY2tJUEk/OiBib29sZWFuXG4gICAgY2hlY2tQaG90b0VtYmVkZGluZz86IGJvb2xlYW5cbiAgICBjaGVja1Bob3RvQ29tcGFyaXNvbj86IGJvb2xlYW5cbiAgICBjaGVja0xldHRlclNjcmVlbj86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aGVudGljaXR5UGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aGVudGljaXR5UGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LnVzZUxpdmVuZXNzQ2hlY2sgPSBqc29uT2JqZWN0W1widXNlTGl2ZW5lc3NDaGVja1wiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3NQYXJhbXMgPSBMaXZlbmVzc1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wibGl2ZW5lc3NQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jaGVja1VWTHVtaW5pc2NlbmNlID0ganNvbk9iamVjdFtcImNoZWNrVVZMdW1pbmlzY2VuY2VcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrSVJCOTAwID0ganNvbk9iamVjdFtcImNoZWNrSVJCOTAwXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0ltYWdlUGF0dGVybnMgPSBqc29uT2JqZWN0W1wiY2hlY2tJbWFnZVBhdHRlcm5zXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0ZpYmVycyA9IGpzb25PYmplY3RbXCJjaGVja0ZpYmVyc1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tFeHRNUlogPSBqc29uT2JqZWN0W1wiY2hlY2tFeHRNUlpcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrRXh0T0NSID0ganNvbk9iamVjdFtcImNoZWNrRXh0T0NSXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0F4aWFsID0ganNvbk9iamVjdFtcImNoZWNrQXhpYWxcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrQmFyY29kZUZvcm1hdCA9IGpzb25PYmplY3RbXCJjaGVja0JhcmNvZGVGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrSVJWaXNpYmlsaXR5ID0ganNvbk9iamVjdFtcImNoZWNrSVJWaXNpYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0lQSSA9IGpzb25PYmplY3RbXCJjaGVja0lQSVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tQaG90b0VtYmVkZGluZyA9IGpzb25PYmplY3RbXCJjaGVja1Bob3RvRW1iZWRkaW5nXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1Bob3RvQ29tcGFyaXNvbiA9IGpzb25PYmplY3RbXCJjaGVja1Bob3RvQ29tcGFyaXNvblwiXVxuICAgICAgICByZXN1bHQuY2hlY2tMZXR0ZXJTY3JlZW4gPSBqc29uT2JqZWN0W1wiY2hlY2tMZXR0ZXJTY3JlZW5cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BhcmFtcyB7XG4gICAgbXVsdGlwYWdlUHJvY2Vzc2luZz86IGJvb2xlYW5cbiAgICBsb2dzPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZUltYWdlcz86IGJvb2xlYW5cbiAgICBkZWJ1Z1NhdmVMb2dzPzogYm9vbGVhblxuICAgIHJldHVyblVuY3JvcHBlZEltYWdlPzogYm9vbGVhblxuICAgIHV2VG9yY2hFbmFibGVkPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZUNyb3BwZWRJbWFnZXM/OiBib29sZWFuXG4gICAgZGlzYWJsZUZvY3VzaW5nQ2hlY2s/OiBib29sZWFuXG4gICAgZGVidWdTYXZlUkZJRFNlc3Npb24/OiBib29sZWFuXG4gICAgZG91YmxlUGFnZVNwcmVhZD86IGJvb2xlYW5cbiAgICBtYW51YWxDcm9wPzogYm9vbGVhblxuICAgIGludGVncmFsSW1hZ2U/OiBib29sZWFuXG4gICAgcmV0dXJuQ3JvcHBlZEJhcmNvZGU/OiBib29sZWFuXG4gICAgY2hlY2tSZXF1aXJlZFRleHRGaWVsZHM/OiBib29sZWFuXG4gICAgZGVwZXJzb25hbGl6ZUxvZz86IGJvb2xlYW5cbiAgICBnZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZT86IGJvb2xlYW5cbiAgICBhbHJlYWR5Q3JvcHBlZD86IGJvb2xlYW5cbiAgICBtYXRjaFRleHRGaWVsZE1hc2s/OiBib29sZWFuXG4gICAgdXBkYXRlT0NSVmFsaWRpdHlCeUdsYXJlPzogYm9vbGVhblxuICAgIG5vR3JhcGhpY3M/OiBib29sZWFuXG4gICAgbXVsdGlEb2NPbkltYWdlPzogYm9vbGVhblxuICAgIGZvcmNlUmVhZE1yekJlZm9yZUxvY2F0ZT86IGJvb2xlYW5cbiAgICBwYXJzZUJhcmNvZGVzPzogYm9vbGVhblxuICAgIHNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3M/OiBib29sZWFuXG4gICAgZGlzYWJsZVBlcmZvcmF0aW9uT0NSPzogYm9vbGVhblxuICAgIHJlc3BlY3RJbWFnZVF1YWxpdHk/OiBib29sZWFuXG4gICAgc3BsaXROYW1lcz86IGJvb2xlYW5cbiAgICB1c2VGYWNlQXBpPzogYm9vbGVhblxuICAgIHVzZUF1dGhlbnRpY2l0eUNoZWNrPzogYm9vbGVhblxuICAgIGNoZWNrSG9sb2dyYW0/OiBib29sZWFuXG4gICAgYmFyY29kZVBhcnNlclR5cGU/OiBudW1iZXJcbiAgICBwZXJzcGVjdGl2ZUFuZ2xlPzogbnVtYmVyXG4gICAgbWluRFBJPzogbnVtYmVyXG4gICAgaW1hZ2VEcGlPdXRNYXg/OiBudW1iZXJcbiAgICBmb3JjZURvY0Zvcm1hdD86IG51bWJlclxuICAgIHNoaWZ0RXhwaXJ5RGF0ZT86IG51bWJlclxuICAgIG1pbmltYWxIb2xkZXJBZ2U/OiBudW1iZXJcbiAgICBpbWFnZU91dHB1dE1heEhlaWdodD86IG51bWJlclxuICAgIGltYWdlT3V0cHV0TWF4V2lkdGg/OiBudW1iZXJcbiAgICBwcm9jZXNzQXV0aD86IG51bWJlclxuICAgIGNvbnZlcnRDYXNlPzogbnVtYmVyXG4gICAgbG9nTGV2ZWw/OiBzdHJpbmdcbiAgICBtcnpEZXRlY3RNb2RlPzogbnVtYmVyXG4gICAgbWVhc3VyZVN5c3RlbT86IG51bWJlclxuICAgIGZvcmNlRG9jSUQ/OiBudW1iZXJcbiAgICBkYXRlRm9ybWF0Pzogc3RyaW5nXG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBjYXB0dXJlQnV0dG9uU2NlbmFyaW8/OiBzdHJpbmdcbiAgICBzZXNzaW9uTG9nRm9sZGVyPzogc3RyaW5nXG4gICAgdGltZW91dD86IG51bWJlclxuICAgIHRpbWVvdXRGcm9tRmlyc3REZXRlY3Q/OiBudW1iZXJcbiAgICB0aW1lb3V0RnJvbUZpcnN0RG9jVHlwZT86IG51bWJlclxuICAgIGRvY3VtZW50QXJlYU1pbj86IG51bWJlclxuICAgIHRpbWVvdXRMaXZlbmVzcz86IG51bWJlclxuICAgIGRvY3VtZW50SURMaXN0PzogbnVtYmVyW11cbiAgICBiYXJjb2RlVHlwZXM/OiBudW1iZXJbXVxuICAgIGZpZWxkVHlwZXNGaWx0ZXI/OiBudW1iZXJbXVxuICAgIHJlc3VsdFR5cGVPdXRwdXQ/OiBudW1iZXJbXVxuICAgIGRvY3VtZW50R3JvdXBGaWx0ZXI/OiBudW1iZXJbXVxuICAgIGxjaWRJZ25vcmVGaWx0ZXI/OiBudW1iZXJbXVxuICAgIGxjaWRGaWx0ZXI/OiBudW1iZXJbXVxuICAgIG1yekZvcm1hdHNGaWx0ZXI/OiBzdHJpbmdbXVxuICAgIGltYWdlUUE/OiBJbWFnZVFBXG4gICAgcmZpZFBhcmFtcz86IFJGSURQYXJhbXNcbiAgICBmYWNlQXBpUGFyYW1zPzogRmFjZUFwaVBhcmFtc1xuICAgIGJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnPzogQmFja2VuZFByb2Nlc3NpbmdDb25maWdcbiAgICBhdXRoZW50aWNpdHlQYXJhbXM/OiBBdXRoZW50aWNpdHlQYXJhbXNcbiAgICBjdXN0b21QYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFByb2Nlc3NQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm9jZXNzUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZVByb2Nlc3NpbmcgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlUHJvY2Vzc2luZ1wiXVxuICAgICAgICByZXN1bHQubG9ncyA9IGpzb25PYmplY3RbXCJsb2dzXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVJbWFnZXMgPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlSW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVMb2dzID0ganNvbk9iamVjdFtcImRlYnVnU2F2ZUxvZ3NcIl1cbiAgICAgICAgcmVzdWx0LnJldHVyblVuY3JvcHBlZEltYWdlID0ganNvbk9iamVjdFtcInJldHVyblVuY3JvcHBlZEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC51dlRvcmNoRW5hYmxlZCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlQ3JvcHBlZEltYWdlcyA9IGpzb25PYmplY3RbXCJkZWJ1Z1NhdmVDcm9wcGVkSW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC5kaXNhYmxlRm9jdXNpbmdDaGVjayA9IGpzb25PYmplY3RbXCJkaXNhYmxlRm9jdXNpbmdDaGVja1wiXVxuICAgICAgICByZXN1bHQuZGVidWdTYXZlUkZJRFNlc3Npb24gPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlUkZJRFNlc3Npb25cIl1cbiAgICAgICAgcmVzdWx0LmRvdWJsZVBhZ2VTcHJlYWQgPSBqc29uT2JqZWN0W1wiZG91YmxlUGFnZVNwcmVhZFwiXVxuICAgICAgICByZXN1bHQubWFudWFsQ3JvcCA9IGpzb25PYmplY3RbXCJtYW51YWxDcm9wXCJdXG4gICAgICAgIHJlc3VsdC5pbnRlZ3JhbEltYWdlID0ganNvbk9iamVjdFtcImludGVncmFsSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnJldHVybkNyb3BwZWRCYXJjb2RlID0ganNvbk9iamVjdFtcInJldHVybkNyb3BwZWRCYXJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1JlcXVpcmVkVGV4dEZpZWxkcyA9IGpzb25PYmplY3RbXCJjaGVja1JlcXVpcmVkVGV4dEZpZWxkc1wiXVxuICAgICAgICByZXN1bHQuZGVwZXJzb25hbGl6ZUxvZyA9IGpzb25PYmplY3RbXCJkZXBlcnNvbmFsaXplTG9nXCJdXG4gICAgICAgIHJlc3VsdC5nZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZSA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZVwiXVxuICAgICAgICByZXN1bHQuYWxyZWFkeUNyb3BwZWQgPSBqc29uT2JqZWN0W1wiYWxyZWFkeUNyb3BwZWRcIl1cbiAgICAgICAgcmVzdWx0Lm1hdGNoVGV4dEZpZWxkTWFzayA9IGpzb25PYmplY3RbXCJtYXRjaFRleHRGaWVsZE1hc2tcIl1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZU9DUlZhbGlkaXR5QnlHbGFyZSA9IGpzb25PYmplY3RbXCJ1cGRhdGVPQ1JWYWxpZGl0eUJ5R2xhcmVcIl1cbiAgICAgICAgcmVzdWx0Lm5vR3JhcGhpY3MgPSBqc29uT2JqZWN0W1wibm9HcmFwaGljc1wiXVxuICAgICAgICByZXN1bHQubXVsdGlEb2NPbkltYWdlID0ganNvbk9iamVjdFtcIm11bHRpRG9jT25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuZm9yY2VSZWFkTXJ6QmVmb3JlTG9jYXRlID0ganNvbk9iamVjdFtcImZvcmNlUmVhZE1yekJlZm9yZUxvY2F0ZVwiXVxuICAgICAgICByZXN1bHQucGFyc2VCYXJjb2RlcyA9IGpzb25PYmplY3RbXCJwYXJzZUJhcmNvZGVzXCJdXG4gICAgICAgIHJlc3VsdC5zaG91bGRSZXR1cm5QYWNrYWdlRm9yUmVwcm9jZXNzID0ganNvbk9iamVjdFtcInNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVQZXJmb3JhdGlvbk9DUiA9IGpzb25PYmplY3RbXCJkaXNhYmxlUGVyZm9yYXRpb25PQ1JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3BlY3RJbWFnZVF1YWxpdHkgPSBqc29uT2JqZWN0W1wicmVzcGVjdEltYWdlUXVhbGl0eVwiXVxuICAgICAgICByZXN1bHQuc3BsaXROYW1lcyA9IGpzb25PYmplY3RbXCJzcGxpdE5hbWVzXCJdXG4gICAgICAgIHJlc3VsdC51c2VGYWNlQXBpID0ganNvbk9iamVjdFtcInVzZUZhY2VBcGlcIl1cbiAgICAgICAgcmVzdWx0LnVzZUF1dGhlbnRpY2l0eUNoZWNrID0ganNvbk9iamVjdFtcInVzZUF1dGhlbnRpY2l0eUNoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0hvbG9ncmFtID0ganNvbk9iamVjdFtcImNoZWNrSG9sb2dyYW1cIl1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQYXJzZXJUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVQYXJzZXJUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZUFuZ2xlID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0Lm1pbkRQSSA9IGpzb25PYmplY3RbXCJtaW5EUElcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlRHBpT3V0TWF4ID0ganNvbk9iamVjdFtcImltYWdlRHBpT3V0TWF4XCJdXG4gICAgICAgIHJlc3VsdC5mb3JjZURvY0Zvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQuc2hpZnRFeHBpcnlEYXRlID0ganNvbk9iamVjdFtcInNoaWZ0RXhwaXJ5RGF0ZVwiXVxuICAgICAgICByZXN1bHQubWluaW1hbEhvbGRlckFnZSA9IGpzb25PYmplY3RbXCJtaW5pbWFsSG9sZGVyQWdlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZU91dHB1dE1heEhlaWdodCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heEhlaWdodFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VPdXRwdXRNYXhXaWR0aCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heFdpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzQXV0aCA9IGpzb25PYmplY3RbXCJwcm9jZXNzQXV0aFwiXVxuICAgICAgICByZXN1bHQuY29udmVydENhc2UgPSBqc29uT2JqZWN0W1wiY29udmVydENhc2VcIl1cbiAgICAgICAgcmVzdWx0LmxvZ0xldmVsID0ganNvbk9iamVjdFtcImxvZ0xldmVsXCJdXG4gICAgICAgIHJlc3VsdC5tcnpEZXRlY3RNb2RlID0ganNvbk9iamVjdFtcIm1yekRldGVjdE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lYXN1cmVTeXN0ZW0gPSBqc29uT2JqZWN0W1wibWVhc3VyZVN5c3RlbVwiXVxuICAgICAgICByZXN1bHQuZm9yY2VEb2NJRCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0lEXCJdXG4gICAgICAgIHJlc3VsdC5kYXRlRm9ybWF0ID0ganNvbk9iamVjdFtcImRhdGVGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlQnV0dG9uU2NlbmFyaW8gPSBqc29uT2JqZWN0W1wiY2FwdHVyZUJ1dHRvblNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5zZXNzaW9uTG9nRm9sZGVyID0ganNvbk9iamVjdFtcInNlc3Npb25Mb2dGb2xkZXJcIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXQgPSBqc29uT2JqZWN0W1widGltZW91dFwiXVxuICAgICAgICByZXN1bHQudGltZW91dEZyb21GaXJzdERldGVjdCA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RGV0ZWN0XCJdXG4gICAgICAgIHJlc3VsdC50aW1lb3V0RnJvbUZpcnN0RG9jVHlwZSA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRBcmVhTWluID0ganNvbk9iamVjdFtcImRvY3VtZW50QXJlYU1pblwiXVxuICAgICAgICByZXN1bHQudGltZW91dExpdmVuZXNzID0ganNvbk9iamVjdFtcInRpbWVvdXRMaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50SURMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QucHVzaChqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcy5wdXNoKGpzb25PYmplY3RbXCJiYXJjb2RlVHlwZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkVHlwZXNGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZFR5cGVzRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wiZmllbGRUeXBlc0ZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0VHlwZU91dHB1dFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdFR5cGVPdXRwdXRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dC5wdXNoKGpzb25PYmplY3RbXCJyZXN1bHRUeXBlT3V0cHV0XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudEdyb3VwRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRHcm91cEZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyLnB1c2goanNvbk9iamVjdFtcImRvY3VtZW50R3JvdXBGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxjaWRJZ25vcmVGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsY2lkSWdub3JlRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wibGNpZElnbm9yZUZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGNpZEZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGNpZEZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxjaWRGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGNpZEZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJsY2lkRmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpGb3JtYXRzRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6Rm9ybWF0c0ZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyLnB1c2goanNvbk9iamVjdFtcIm1yekZvcm1hdHNGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBJbWFnZVFBLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVFBXCJdKVxuICAgICAgICByZXN1bHQucmZpZFBhcmFtcyA9IFJGSURQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlQXBpUGFyYW1zID0gRmFjZUFwaVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZUFwaVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnID0gQmFja2VuZFByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcImJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UGFyYW1zID0gQXV0aGVudGljaXR5UGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jdXN0b21QYXJhbXMgPSBqc29uT2JqZWN0W1wiY3VzdG9tUGFyYW1zXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvbnQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBzaXplPzogbnVtYmVyXG4gICAgc3R5bGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRm9udCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvbnRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cbiAgICAgICAgcmVzdWx0LnN0eWxlID0ganNvbk9iamVjdFtcInN0eWxlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Db2xvcnMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyPzogbnVtYmVyXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uQ29sb3JzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ3VzdG9taXphdGlvbkNvbG9yc1xuXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxCYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXIgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhclwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Gb250cyB7XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWw/OiBGb250XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsPzogRm9udFxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWw/OiBGb250XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25Gb250cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25Gb250c1xuXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsXCJdKVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsXCJdKVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5SZXN1bHRMYWJlbCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25JbWFnZXMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25JbWFnZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uSW1hZ2VzXG5cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb24ge1xuICAgIHNob3dTdGF0dXNNZXNzYWdlcz86IGJvb2xlYW5cbiAgICBzaG93UmVzdWx0U3RhdHVzTWVzc2FnZXM/OiBib29sZWFuXG4gICAgc2hvd0hlbHBBbmltYXRpb24/OiBib29sZWFuXG4gICAgc2hvd05leHRQYWdlQW5pbWF0aW9uPzogYm9vbGVhblxuICAgIHNob3dCYWNrZ3JvdW5kTWFzaz86IGJvb2xlYW5cbiAgICBjYW1lcmFGcmFtZUJvcmRlcldpZHRoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVMaW5lTGVuZ3RoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVPZmZzZXRXaWR0aD86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lU2hhcGVUeXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogc3RyaW5nXG4gICAgcmVzdWx0U3RhdHVzPzogc3RyaW5nXG4gICAgY2FtZXJhRnJhbWVEZWZhdWx0Q29sb3I/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZUFjdGl2ZUNvbG9yPzogbnVtYmVyXG4gICAgc3RhdHVzVGV4dENvbG9yPzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzVGV4dENvbG9yPzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQnV0dG9uQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgdGludENvbG9yPzogbnVtYmVyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3JDb2xvcj86IG51bWJlclxuICAgIHN0YXR1c0JhY2tncm91bmRDb2xvcj86IG51bWJlclxuICAgIGNhbWVyYVByZXZpZXdCYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICBzdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICB0b29sYmFyU2l6ZT86IG51bWJlclxuICAgIGJhY2tncm91bmRNYXNrQWxwaGE/OiBudW1iZXJcbiAgICBjdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBsaXZlbmVzc0FuaW1hdGlvblBvc2l0aW9uTXVsdGlwbGllcj86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZUxhbmRzY2FwZUFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXM/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlPzogc3RyaW5nXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlPzogc3RyaW5nXG4gICAgaGVscEFuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgY2xvc2VCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhcHR1cmVCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhbWVyYVN3aXRjaEJ1dHRvbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PZmZJbWFnZT86IHN0cmluZ1xuICAgIGNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2U/OiBzdHJpbmdcbiAgICBjaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2U/OiBzdHJpbmdcbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgc3RhdHVzVGV4dEZvbnQ/OiBGb250XG4gICAgcmVzdWx0U3RhdHVzVGV4dEZvbnQ/OiBGb250XG4gICAgY3VzdG9tTGFiZWxTdGF0dXM/OiBzdHJpbmdcbiAgICBjYW1lcmFGcmFtZUxpbmVDYXA/OiBudW1iZXJcbiAgICB1aUN1c3RvbWl6YXRpb25MYXllcj86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgICBoZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbGl2ZW5lc3NBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIG11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBjb2xvcnM/OiBDdXN0b21pemF0aW9uQ29sb3JzXG4gICAgZm9udHM/OiBDdXN0b21pemF0aW9uRm9udHNcbiAgICBpbWFnZXM/OiBDdXN0b21pemF0aW9uSW1hZ2VzXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uXG5cbiAgICAgICAgcmVzdWx0LnNob3dTdGF0dXNNZXNzYWdlcyA9IGpzb25PYmplY3RbXCJzaG93U3RhdHVzTWVzc2FnZXNcIl1cbiAgICAgICAgcmVzdWx0LnNob3dSZXN1bHRTdGF0dXNNZXNzYWdlcyA9IGpzb25PYmplY3RbXCJzaG93UmVzdWx0U3RhdHVzTWVzc2FnZXNcIl1cbiAgICAgICAgcmVzdWx0LnNob3dIZWxwQW5pbWF0aW9uID0ganNvbk9iamVjdFtcInNob3dIZWxwQW5pbWF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5zaG93TmV4dFBhZ2VBbmltYXRpb24gPSBqc29uT2JqZWN0W1wic2hvd05leHRQYWdlQW5pbWF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5zaG93QmFja2dyb3VuZE1hc2sgPSBqc29uT2JqZWN0W1wic2hvd0JhY2tncm91bmRNYXNrXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUJvcmRlcldpZHRoID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lQm9yZGVyV2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lTGluZUxlbmd0aCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUxpbmVMZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lT2Zmc2V0V2lkdGggPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVPZmZzZXRXaWR0aFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVTaGFwZVR5cGUgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVTaGFwZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lRGVmYXVsdENvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lRGVmYXVsdENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUFjdGl2ZUNvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lQWN0aXZlQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJzdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNCYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25CYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnRpbnRDb2xvciA9IGpzb25PYmplY3RbXCJ0aW50Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmFjdGl2aXR5SW5kaWNhdG9yQ29sb3IgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JDb2xvclwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzQmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcInN0YXR1c0JhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUHJldmlld0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJjYW1lcmFQcmV2aWV3QmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXNQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wic3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC50b29sYmFyU2l6ZSA9IGpzb25PYmplY3RbXCJ0b29sYmFyU2l6ZVwiXVxuICAgICAgICByZXN1bHQuYmFja2dyb3VuZE1hc2tBbHBoYSA9IGpzb25PYmplY3RbXCJiYWNrZ3JvdW5kTWFza0FscGhhXCJdXG4gICAgICAgIHJlc3VsdC5jdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiY3VzdG9tU3RhdHVzUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvblBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvblBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVWZXJ0aWNhbFBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZVZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUxhbmRzY2FwZUFzcGVjdFJhdGlvID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lTGFuZHNjYXBlQXNwZWN0UmF0aW9cIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lUG9ydHJhaXRBc3BlY3RSYXRpbyA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZVBvcnRyYWl0QXNwZWN0UmF0aW9cIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lQ29ybmVyUmFkaXVzID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lQ29ybmVyUmFkaXVzXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZSA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZSA9IGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmhlbHBBbmltYXRpb25JbWFnZSA9IGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNsb3NlQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2xvc2VCdXR0b25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2FwdHVyZUJ1dHRvbkltYWdlID0ganNvbk9iamVjdFtcImNhcHR1cmVCdXR0b25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhU3dpdGNoQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2FtZXJhU3dpdGNoQnV0dG9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uT25JbWFnZSA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbk9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uT2ZmSW1hZ2UgPSBqc29uT2JqZWN0W1widG9yY2hCdXR0b25PZmZJbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2hhbmdlRnJhbWVCdXR0b25FeHBhbmRJbWFnZSA9IGpzb25PYmplY3RbXCJjaGFuZ2VGcmFtZUJ1dHRvbkV4cGFuZEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2hhbmdlRnJhbWVCdXR0b25Db2xsYXBzZUltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlID0ganNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRGb250ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzVGV4dEZvbnRcIl0pXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXNUZXh0Rm9udCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1RleHRGb250XCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tTGFiZWxTdGF0dXMgPSBqc29uT2JqZWN0W1wiY3VzdG9tTGFiZWxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lTGluZUNhcCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZUxpbmVDYXBcIl1cbiAgICAgICAgcmVzdWx0LnVpQ3VzdG9taXphdGlvbkxheWVyID0ganNvbk9iamVjdFtcInVpQ3VzdG9taXphdGlvbkxheWVyXCJdXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5oZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wiaGVscEFuaW1hdGlvbkltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29sb3JzID0gQ3VzdG9taXphdGlvbkNvbG9ycy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY29sb3JzXCJdKVxuICAgICAgICByZXN1bHQuZm9udHMgPSBDdXN0b21pemF0aW9uRm9udHMuZnJvbUpzb24oanNvbk9iamVjdFtcImZvbnRzXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gQ3VzdG9taXphdGlvbkltYWdlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFRExEYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVETERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFRExEYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVQYXNzcG9ydERhdGFHcm91cHMge1xuICAgIERHMT86IGJvb2xlYW5cbiAgICBERzI/OiBib29sZWFuXG4gICAgREczPzogYm9vbGVhblxuICAgIERHND86IGJvb2xlYW5cbiAgICBERzU/OiBib29sZWFuXG4gICAgREc2PzogYm9vbGVhblxuICAgIERHNz86IGJvb2xlYW5cbiAgICBERzg/OiBib29sZWFuXG4gICAgREc5PzogYm9vbGVhblxuICAgIERHMTA/OiBib29sZWFuXG4gICAgREcxMT86IGJvb2xlYW5cbiAgICBERzEyPzogYm9vbGVhblxuICAgIERHMTM/OiBib29sZWFuXG4gICAgREcxND86IGJvb2xlYW5cbiAgICBERzE1PzogYm9vbGVhblxuICAgIERHMTY/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVQYXNzcG9ydERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFUGFzc3BvcnREYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG4gICAgICAgIHJlc3VsdC5ERzE1ID0ganNvbk9iamVjdFtcIkRHMTVcIl1cbiAgICAgICAgcmVzdWx0LkRHMTYgPSBqc29uT2JqZWN0W1wiREcxNlwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFSUREYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG4gICAgREcxNT86IGJvb2xlYW5cbiAgICBERzE2PzogYm9vbGVhblxuICAgIERHMTc/OiBib29sZWFuXG4gICAgREcxOD86IGJvb2xlYW5cbiAgICBERzE5PzogYm9vbGVhblxuICAgIERHMjA/OiBib29sZWFuXG4gICAgREcyMT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRUlERGF0YUdyb3VwcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVJRERhdGFHcm91cHNcblxuICAgICAgICByZXN1bHQuREcxID0ganNvbk9iamVjdFtcIkRHMVwiXVxuICAgICAgICByZXN1bHQuREcyID0ganNvbk9iamVjdFtcIkRHMlwiXVxuICAgICAgICByZXN1bHQuREczID0ganNvbk9iamVjdFtcIkRHM1wiXVxuICAgICAgICByZXN1bHQuREc0ID0ganNvbk9iamVjdFtcIkRHNFwiXVxuICAgICAgICByZXN1bHQuREc1ID0ganNvbk9iamVjdFtcIkRHNVwiXVxuICAgICAgICByZXN1bHQuREc2ID0ganNvbk9iamVjdFtcIkRHNlwiXVxuICAgICAgICByZXN1bHQuREc3ID0ganNvbk9iamVjdFtcIkRHN1wiXVxuICAgICAgICByZXN1bHQuREc4ID0ganNvbk9iamVjdFtcIkRHOFwiXVxuICAgICAgICByZXN1bHQuREc5ID0ganNvbk9iamVjdFtcIkRHOVwiXVxuICAgICAgICByZXN1bHQuREcxMCA9IGpzb25PYmplY3RbXCJERzEwXCJdXG4gICAgICAgIHJlc3VsdC5ERzExID0ganNvbk9iamVjdFtcIkRHMTFcIl1cbiAgICAgICAgcmVzdWx0LkRHMTIgPSBqc29uT2JqZWN0W1wiREcxMlwiXVxuICAgICAgICByZXN1bHQuREcxMyA9IGpzb25PYmplY3RbXCJERzEzXCJdXG4gICAgICAgIHJlc3VsdC5ERzE0ID0ganNvbk9iamVjdFtcIkRHMTRcIl1cbiAgICAgICAgcmVzdWx0LkRHMTUgPSBqc29uT2JqZWN0W1wiREcxNVwiXVxuICAgICAgICByZXN1bHQuREcxNiA9IGpzb25PYmplY3RbXCJERzE2XCJdXG4gICAgICAgIHJlc3VsdC5ERzE3ID0ganNvbk9iamVjdFtcIkRHMTdcIl1cbiAgICAgICAgcmVzdWx0LkRHMTggPSBqc29uT2JqZWN0W1wiREcxOFwiXVxuICAgICAgICByZXN1bHQuREcxOSA9IGpzb25PYmplY3RbXCJERzE5XCJdXG4gICAgICAgIHJlc3VsdC5ERzIwID0ganNvbk9iamVjdFtcIkRHMjBcIl1cbiAgICAgICAgcmVzdWx0LkRHMjEgPSBqc29uT2JqZWN0W1wiREcyMVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2NlbmFyaW8ge1xuICAgIHBhY2VTdGF0aWNCaW5kaW5nPzogYm9vbGVhblxuICAgIG9ubGluZVRBPzogYm9vbGVhblxuICAgIHdyaXRlRWlkPzogYm9vbGVhblxuICAgIHVuaXZlcnNhbEFjY2Vzc1JpZ2h0cz86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUmVzdHJpY3RlZElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkNvbW11bml0eUlEPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoPzogYm9vbGVhblxuICAgIHNraXBBQT86IGJvb2xlYW5cbiAgICBzdHJpY3RQcm9jZXNzaW5nPzogYm9vbGVhblxuICAgIHBrZERTQ2VydFByaW9yaXR5PzogYm9vbGVhblxuICAgIHBrZFVzZUV4dGVybmFsQ1NDQT86IGJvb2xlYW5cbiAgICB0cnVzdGVkUEtEPzogYm9vbGVhblxuICAgIHBhc3NpdmVBdXRoPzogYm9vbGVhblxuICAgIHVzZVNGST86IGJvb2xlYW5cbiAgICByZWFkRVBhc3Nwb3J0PzogYm9vbGVhblxuICAgIHJlYWRFSUQ/OiBib29sZWFuXG4gICAgcmVhZEVETD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkU1RTaWduYXR1cmU/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFNUUVNpZ25hdHVyZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzE3PzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMTg/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFdyaXRlREcxOT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzIwPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMjE/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFZlcmlmeUFnZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SUQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkQ0FOQWxsb3dlZD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUElOTWFuYWdlbWVudD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkSW5zdGFsbENlcnQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZEluc3RhbGxRQ2VydD86IGJvb2xlYW5cbiAgICBhcHBseUFtZW5kbWVudHM/OiBib29sZWFuXG4gICAgYXV0b1NldHRpbmdzPzogYm9vbGVhblxuICAgIHByb2NlZWRSZWFkaW5nQWx3YXlzPzogYm9vbGVhblxuICAgIHJlYWRpbmdCdWZmZXI/OiBudW1iZXJcbiAgICBvbmxpbmVUQVRvU2lnbkRhdGFUeXBlPzogbnVtYmVyXG4gICAgZGVmYXVsdFJlYWRpbmdCdWZmZXJTaXplPzogbnVtYmVyXG4gICAgc2lnbk1hbmFnZW1lbnRBY3Rpb24/OiBudW1iZXJcbiAgICBwcm9maWxlclR5cGU/OiBudW1iZXJcbiAgICBhdXRoUHJvY1R5cGU/OiBudW1iZXJcbiAgICBiYXNlU01Qcm9jZWR1cmU/OiBudW1iZXJcbiAgICBwYWNlUGFzc3dvcmRUeXBlPzogbnVtYmVyXG4gICAgdGVybWluYWxUeXBlPzogbnVtYmVyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmdcbiAgICBwa2RQQT86IHN0cmluZ1xuICAgIHBrZEVBQz86IHN0cmluZ1xuICAgIG1yej86IHN0cmluZ1xuICAgIGVTaWduUElORGVmYXVsdD86IHN0cmluZ1xuICAgIGVTaWduUElOTmV3VmFsdWU/OiBzdHJpbmdcbiAgICBlRExEYXRhR3JvdXBzPzogRURMRGF0YUdyb3Vwc1xuICAgIGVQYXNzcG9ydERhdGFHcm91cHM/OiBFUGFzc3BvcnREYXRhR3JvdXBzXG4gICAgZUlERGF0YUdyb3Vwcz86IEVJRERhdGFHcm91cHNcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNjZW5hcmlvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0LnBhY2VTdGF0aWNCaW5kaW5nID0ganNvbk9iamVjdFtcInBhY2VTdGF0aWNCaW5kaW5nXCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVUQSA9IGpzb25PYmplY3RbXCJvbmxpbmVUQVwiXVxuICAgICAgICByZXN1bHQud3JpdGVFaWQgPSBqc29uT2JqZWN0W1wid3JpdGVFaWRcIl1cbiAgICAgICAgcmVzdWx0LnVuaXZlcnNhbEFjY2Vzc1JpZ2h0cyA9IGpzb25PYmplY3RbXCJ1bml2ZXJzYWxBY2Nlc3NSaWdodHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRSZXN0cmljdGVkSWRlbnRpZmljYXRpb24gPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFJlc3RyaWN0ZWRJZGVudGlmaWNhdGlvblwiXVxuICAgICAgICByZXN1bHQuYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SUQgPSBqc29uT2JqZWN0W1wiYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoID0ganNvbk9iamVjdFtcImF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoXCJdXG4gICAgICAgIHJlc3VsdC5za2lwQUEgPSBqc29uT2JqZWN0W1wic2tpcEFBXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RQcm9jZXNzaW5nID0ganNvbk9iamVjdFtcInN0cmljdFByb2Nlc3NpbmdcIl1cbiAgICAgICAgcmVzdWx0LnBrZERTQ2VydFByaW9yaXR5ID0ganNvbk9iamVjdFtcInBrZERTQ2VydFByaW9yaXR5XCJdXG4gICAgICAgIHJlc3VsdC5wa2RVc2VFeHRlcm5hbENTQ0EgPSBqc29uT2JqZWN0W1wicGtkVXNlRXh0ZXJuYWxDU0NBXCJdXG4gICAgICAgIHJlc3VsdC50cnVzdGVkUEtEID0ganNvbk9iamVjdFtcInRydXN0ZWRQS0RcIl1cbiAgICAgICAgcmVzdWx0LnBhc3NpdmVBdXRoID0ganNvbk9iamVjdFtcInBhc3NpdmVBdXRoXCJdXG4gICAgICAgIHJlc3VsdC51c2VTRkkgPSBqc29uT2JqZWN0W1widXNlU0ZJXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRVBhc3Nwb3J0ID0ganNvbk9iamVjdFtcInJlYWRFUGFzc3BvcnRcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRFSUQgPSBqc29uT2JqZWN0W1wicmVhZEVJRFwiXVxuICAgICAgICByZXN1bHQucmVhZEVETCA9IGpzb25PYmplY3RbXCJyZWFkRURMXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RTaWduYXR1cmUgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFNUU2lnbmF0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RRU2lnbmF0dXJlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRTVFFTaWduYXR1cmVcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMTcgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcxN1wiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcxOCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzE4XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkV3JpdGVERzE5ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRXcml0ZURHMTlcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMjAgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcyMFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcyMSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzIxXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkVmVyaWZ5QWdlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRWZXJpZnlBZ2VcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRWZXJpZnlDb21tdW5pdHlJRCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQcml2aWxlZ2VkVGVybWluYWwgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZENBTkFsbG93ZWQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZENBTkFsbG93ZWRcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbENlcnQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZEluc3RhbGxDZXJ0XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbFFDZXJ0ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRJbnN0YWxsUUNlcnRcIl1cbiAgICAgICAgcmVzdWx0LmFwcGx5QW1lbmRtZW50cyA9IGpzb25PYmplY3RbXCJhcHBseUFtZW5kbWVudHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dG9TZXR0aW5ncyA9IGpzb25PYmplY3RbXCJhdXRvU2V0dGluZ3NcIl1cbiAgICAgICAgcmVzdWx0LnByb2NlZWRSZWFkaW5nQWx3YXlzID0ganNvbk9iamVjdFtcInByb2NlZWRSZWFkaW5nQWx3YXlzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nQnVmZmVyID0ganNvbk9iamVjdFtcInJlYWRpbmdCdWZmZXJcIl1cbiAgICAgICAgcmVzdWx0Lm9ubGluZVRBVG9TaWduRGF0YVR5cGUgPSBqc29uT2JqZWN0W1wib25saW5lVEFUb1NpZ25EYXRhVHlwZVwiXVxuICAgICAgICByZXN1bHQuZGVmYXVsdFJlYWRpbmdCdWZmZXJTaXplID0ganNvbk9iamVjdFtcImRlZmF1bHRSZWFkaW5nQnVmZmVyU2l6ZVwiXVxuICAgICAgICByZXN1bHQuc2lnbk1hbmFnZW1lbnRBY3Rpb24gPSBqc29uT2JqZWN0W1wic2lnbk1hbmFnZW1lbnRBY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnByb2ZpbGVyVHlwZSA9IGpzb25PYmplY3RbXCJwcm9maWxlclR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhQcm9jVHlwZSA9IGpzb25PYmplY3RbXCJhdXRoUHJvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0LmJhc2VTTVByb2NlZHVyZSA9IGpzb25PYmplY3RbXCJiYXNlU01Qcm9jZWR1cmVcIl1cbiAgICAgICAgcmVzdWx0LnBhY2VQYXNzd29yZFR5cGUgPSBqc29uT2JqZWN0W1wicGFjZVBhc3N3b3JkVHlwZVwiXVxuICAgICAgICByZXN1bHQudGVybWluYWxUeXBlID0ganNvbk9iamVjdFtcInRlcm1pbmFsVHlwZVwiXVxuICAgICAgICByZXN1bHQucGFzc3dvcmQgPSBqc29uT2JqZWN0W1wicGFzc3dvcmRcIl1cbiAgICAgICAgcmVzdWx0LnBrZFBBID0ganNvbk9iamVjdFtcInBrZFBBXCJdXG4gICAgICAgIHJlc3VsdC5wa2RFQUMgPSBqc29uT2JqZWN0W1wicGtkRUFDXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC5lU2lnblBJTkRlZmF1bHQgPSBqc29uT2JqZWN0W1wiZVNpZ25QSU5EZWZhdWx0XCJdXG4gICAgICAgIHJlc3VsdC5lU2lnblBJTk5ld1ZhbHVlID0ganNvbk9iamVjdFtcImVTaWduUElOTmV3VmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmVETERhdGFHcm91cHMgPSBFRExEYXRhR3JvdXBzLmZyb21Kc29uKGpzb25PYmplY3RbXCJlRExEYXRhR3JvdXBzXCJdKVxuICAgICAgICByZXN1bHQuZVBhc3Nwb3J0RGF0YUdyb3VwcyA9IEVQYXNzcG9ydERhdGFHcm91cHMuZnJvbUpzb24oanNvbk9iamVjdFtcImVQYXNzcG9ydERhdGFHcm91cHNcIl0pXG4gICAgICAgIHJlc3VsdC5lSUREYXRhR3JvdXBzID0gRUlERGF0YUdyb3Vwcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZUlERGF0YUdyb3Vwc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlcGFyZVByb2dyZXNzIHtcbiAgICBkb3dubG9hZGVkQnl0ZXM/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzPzogbnVtYmVyXG4gICAgcHJvZ3Jlc3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUHJlcGFyZVByb2dyZXNzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUHJlcGFyZVByb2dyZXNzXG5cbiAgICAgICAgcmVzdWx0LmRvd25sb2FkZWRCeXRlcyA9IGpzb25PYmplY3RbXCJkb3dubG9hZGVkQnl0ZXNcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXMgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1wiXVxuICAgICAgICByZXN1bHQucHJvZ3Jlc3MgPSBqc29uT2JqZWN0W1wicHJvZ3Jlc3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0F1dGhlbnRpY2l0eSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFVWX0xVTUlORVNDRU5DRTogMSxcbiAgICBJUl9COTAwOiAyLFxuICAgIElNQUdFX1BBVFRFUk46IDQsXG4gICAgQVhJQUxfUFJPVEVDVElPTjogOCxcbiAgICBVVl9GSUJFUlM6IDE2LFxuICAgIElSX1ZJU0lCSUxJVFk6IDMyLFxuICAgIE9DUl9TRUNVUklUWV9URVhUOiA2NCxcbiAgICBJUEk6IDEyOCxcbiAgICBQSE9UT19FTUJFRF9UWVBFOiA1MTIsXG4gICAgSE9MT0dSQU1TOiA0MDk2LFxuICAgIFBIT1RPX0FSRUE6IDgxOTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTjogMzI3NjgsXG4gICAgQkFSQ09ERV9GT1JNQVRfQ0hFQ0s6IDY1NTM2LFxuICAgIEtJTkVHUkFNOiAxMzEwNzIsXG4gICAgSE9MT0dSQU1TX0RFVEVDVElPTjogNTI0Mjg4LFxuICAgIE1SWjogODM4ODYwOCxcbiAgICBTVEFUVVNfT05MWTogMHg4MDAwMDAwMCxcbiAgICBPVkk6IDEwMjQsXG4gICAgTElWRU5FU1M6IDIwOTcxNTIsXG4gICAgT0NSOiA0MTk0MzA0LFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkNvbG9yID0ge1xuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fQkFDS0dST1VORDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUxfVEVYVDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUxfQkFDS0dST1VORDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0xBQkVMX1RFWFQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsVGV4dFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfQkFSOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0JBUl9CQUNLR1JPVU5EOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXJCYWNrZ3JvdW5kXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9SRVNVTFRfTEFCRUxfVEVYVDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fTE9BRElOR19CQVI6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Mb2FkaW5nQmFyXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9FcnJvckNvZGVzID0ge1xuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDB4MDAwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDB4MDAwMDAwMDIsXG4gICAgUkZJRF9FUlJPUl9GQUlMRUQ6IDB4ZmZmZmZmZmYsXG4gICAgUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOiAweDgwMDEwMDAxLFxuICAgIFJGSURfRVJST1JfTk9UX0FWQUlMQUJMRTogMHg4MDAxMDAwMixcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfUEFSQU1FVEVSOiAweDgwMDEwMDA0LFxuICAgIFJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOiAweDgwMDEwMDA1LFxuICAgIFJGSURfRVJST1JfTk9UX0VOT1VHSF9NRU1PUlk6IDB4ODAwMTAwMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogMHg4MDAxMDAwOCxcbiAgICBSRklEX0VSUk9SX1VOS05PV05fQ09NTUFORDogMHg4MDAxMDAwOSxcbiAgICBSRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6IDB4ODAwMTAwMEEsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAweDgwMDEwMDBCLFxuICAgIFJGSURfRVJST1JfT0xEX0ZJUk1XQVJFOiAweDgwMDEwMDBDLFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRUQ6IDB4ODAwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAweDgwMDIwMDAxLFxuICAgIFJGSURfRVJST1JfUENTQ19DQU5UX0NPTk5FQ1RfQ0FSRDogMHg4MDAyMDAwMixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19OT1RfQ09OTkVDVEVEOiAweDgwMDIwMDAzLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAweDgwMDIwMDA0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX0JVU1k6IDB4ODAwMjAwMDUsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRF9TQ0FSRDogMHg4MDAyMDAwNixcbiAgICBSRklEX0VSUk9SX1BDU0NfRVhUX0xFX0ZBSUxFRDogMHg4MDAyMDAxMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TRUNVUklUWV9NQU5BR0VSOiAweDg2MDAwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogMHg4NjAwMDAwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9NQUNfRkFJTDogMHg4NjAwMDEwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9FTkNfRkFJTDogMHg4NjAwMDEwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAweDg2MDAwMTAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkVfREFUQTogMHg4NjAwMDEwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184RV9NSVNTSU5HOiAweDg2MDAwMjAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X01JU1NJTkc6IDB4ODYwMDAyMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOTlfTUlTU0lORzogMHg4NjAwMDIwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOiAweDg2MDAwMjAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X0lOQ09SUkVDVDogMHg4NjAwMDIwNCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT05fVExWX1JFU1BPTlNFX0RBVEE6IDB4ODYwMDAzMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfV1JPTkdfUk5EX0lDQ19MRU5HVEg6IDB4ODYwMDAzMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0tBVF9GQUlMVVJFOiAweDg2MDAwMzAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfRFNUX0ZBSUxVUkU6IDB4ODYwMDAzMDQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IDB4ODYwMDAzMDUsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9BVF9GQUlMVVJFOiAweDg2MDAwMzA2LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTogMHg4NjAwMDMwNyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9FWFRfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzA4LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0dFTkVSQUxfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzA5LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfTk9UX0ZPVU5EOiAweDgwMDA2QTgyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMTogMHg4MDAwNjI4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjI6IDB4ODAwMDZCMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfSU5DT1JSRUNUX1BBUkFNUzogMHg4MDAwNkE4MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogMHg4MDAwNkE4OCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDogMHg4MDAwNjNDMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDogMHg4MDAwNjNDMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IDB4ODAwMDYyODMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQyOiAweDgwMDA2OTgzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDI6IDB4ODAwMDY5ODQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQyOiAweDgwMDA2OTg1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9GQUlMRUQ6IDB4ODAxMDYzQzAsXG4gICAgUkZJRF9FUlJPUl9OT1RfUEVSRk9STUVEOiAweDgzMDAwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JU19DTE9TRUQ6IDB4ODMwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogMHg4MzAwMDAwMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9VTktOT1dOOiAweDgzMDAwMDEwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX0JBRF9DRVJUSUZJQ0FURTogMHg4MzAwMDAxMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAweDgzMDAwMDEyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9VTktOT1dOOiAweDgzMDAwMDEzLFxuICAgIFJGSURfRVJST1JfU2Vzc2lvbl9Qcm9jZWR1cmVfVHlwZV9VbnN1cHBvcnRlZDogMHg4MzAwMDAxNCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogMHg4MzAwMDAxNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTktOT1dOX1RZUEU6IDB4ODMwMDAwMTYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5TVVBQT1JURURfU01fVFlQRTogMHg4MzAwMDAxNyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogMHg4MzAwMDAxOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9SRVNUUklDVEVEOiAweDgzMDAwMDE5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgzMDAwMDFBLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IDB4ODMwMDAwMUIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BXRF9NQU5BR0VNRU5UX05PVF9BVVRIT1JJWkVEOiAweDgzMDAwMDFDLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9VTktOT1dOX1RZUEU6IDB4ODMwMDAwMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAweDgzMDAwMDIxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19QQUNFOiAweDgzMDAwMDIyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQV9LRVlTOiAweDgzMDAwMDIzLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogMHg4MzAwMDAyNCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0E6IDB4ODMwMDAwMjUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0lOQ09SUkVDVF9PUFRJT05fQ0E6IDB4ODMwMDAwMjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogMHg4MzAwMDAyNyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfVEFfRkFJTEVEOiAweDgzMDAwMDI4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9BQV9GQUlMRUQ6IDB4ODMwMDAwMjksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogMHg4MzAwMDAyQSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MzAwMDAzMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfSEFTSF9DSEVDS19GQUlMRUQ6IDB4ODMwMDAwMzEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IDB4ODMwMDAwNDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9CSVJUSDogMHg4MzAwMDA0MSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9DT01NVU5JVFlfSUQ6IDB4ODMwMDAwNDIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAweDgzMDAwMDUwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9TRVQ6IDB4ODMwMDAwNTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1ZFUklGSUVEOiAweDgzMDAwMDUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MzAwMDA2MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9OT1RfRU5PVUdIX0RBVEE6IDB4ODMwMTAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfSU5DT1JSRUNUX0RBVEE6IDB4ODMwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAweDgzMDMwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MzA0MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9XUk9OR19UQUc6IDB4ODMwNTAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogMHg4MzA2MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1JFQURfREFUQTogMHg4MzA3MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOiAweDgzMDgwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9OT19FUlJPUjogMHg4NDAwMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfVElNRV9PVVQ6IDB4ODQwMTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTjogMHg4NDAyMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ1JDOiAweDg0MDMwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0lOVEVHUklUWTogMHg4NDA0MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9MRU5HVEg6IDB4ODQwNTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MYXllcjM0X1JGVTogMHg4NDA2MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OX1RPT19NQU5ZOiAweDg0MDcwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTF9COiAweDg0MDgwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0NPTlRFTlRTOiAweDg0MDkwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTDogMHg4NDBBMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfR0xPQkFMX1RJTUVfT1VUOiAweDg0MEIwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9NSUZBUkVfQVVUSDogMHg4NDBDMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0VSUk9SOiAweDg0MEQwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQ09MTElTSU9OOiAweDg0MEUwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQUNLTk9XTEVER0U6IDB4ODQwRjAwMDAsXG59XG5cbmV4cG9ydCBjb25zdCBlTERTX1BhcnNpbmdFcnJvckNvZGVzID0ge1xuICAgIEVSUl9MRFNfT0s6IDB4MDAwMDAwMDEsXG4gICAgRVJSX0xEU19BU05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMDEsXG4gICAgUlJfTERTX0FTTl9OT1RfRU5PVUdIX0RBVEE6IDB4ODAwMDAwMDIsXG4gICAgRVJSX0xEU19BU05fQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAweDgwMDAwMDAzLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDA4LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0VOQ0FQX0NPTlRFTlRTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDA5LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMEEsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTEsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMyxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTQsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9ESUdFU1RfQUxHT1JJVEhNX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE1LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfREdfSEFTSEVTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE2LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkZPX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDEyLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE3LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTgsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTksXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFBLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0lTU1VFUl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQixcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WQUxJRElUWV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFELFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NVQkpFQ1RfUEtfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUUsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMCxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIxLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19ESUdFU1RfQUxHX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIzLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNCxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOX0FMR19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjYsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVU5TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjcsXG4gICAgRVJSX0xEU19JQ0FPX0xEU19PQkpFQ1RfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDAzMCxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVEX0RBVEFfU0lHTkVSX0lORk9TX0VNUFRZOiAweDgwMDAwMDMxLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgwMDAwMDMyLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDgwMDAwMDMzLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9FUlJPUjogMHg4MDAwMDAzNCxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX01JU1NFRDogMHg4MDAwMDAzNixcbiAgICBFUlJfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0FOVF9GSU5EX0NFUlRJRklDQVRFOiAweDgwMDAwMDM1LFxuICAgIEVSUl9MRFNfQVVUSF9FUlJPUjogMHg4MDAwMDA1MCxcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg4MDAwMDA1MSxcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06IDB4ODAwMDAwNTIsXG4gICAgRVJSX0xEU19BVVRIX01FU1NFRF9BTEdPUklUSE1TOiAweDgwMDAwMDUzLFxuICAgIEVSUl9MRFNfQVVUSF9QVUJMSUNfS0VZX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NCxcbiAgICBFUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfREFUQV9JTlZBTElEOiAweDgwMDAwMDU1LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfREFUQV9JTlZBTElEOiAweDgwMDAwMDU2LFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgwMDAwMDU3LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfREFUQV9JTkNPUlJFQ1Q6IDB4ODAwMDAwNTgsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX05PVF9ERUZJTkVEOiAweDgwMDAwMDU5LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAweDgwMDAwMDVBLFxuICAgIEVSUl9MRFNfREdfV1JPTkdfVEFIOiAweDgwMDAwMDcwLFxuICAgIEVSUl9MRFNfREdfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAweDgwMDAwMDcxLFxuICAgIEVSUl9MRFNfQkFQX1NZTU1FVFJJQ19DWVBIRVJfQ0FOVF9JTklUSUFMSVpFOiAweDgxMDAwMDExLFxuICAgIEVSUl9MRFNfUEFDRV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4ODEwMDAwMjAsXG4gICAgRVJSX0xEU19QQUNFX1NZTU1FVFJJQ19DWVBIRVJfQ0FOVF9JTklUSUFMSVpFOiAweDgxMDAwMDIxLFxuICAgIEVSUl9MRFNfUEFDRV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAyMixcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMjMsXG4gICAgRVJSX0xEU19QQUNFX01BUFBJTkdfQ0FOVF9ERUNPREVfTk9OQ0U6IDB4ODEwMDAwMjQsXG4gICAgRVJSX0xEU19QQUNFX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMjUsXG4gICAgRVJSX0xEU19QQUNFX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfRk9STUFUOiAweDgxMDAwMDI2LFxuICAgIEVSUl9MRFNfUEFDRV9FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6IDB4ODEwMDAwMjcsXG4gICAgRVJSX0xEU19QQUNFX01BUFBJTkdfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAweDgxMDAwMDI4LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfUEVSRk9STTogMHg4MTAwMDAyOSxcbiAgICBFUlJfTERTX1BBQ0VfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAweDgxMDAwMDJBLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9JTkNPUlJFQ1Q6IDB4ODEwMDAwMkIsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX0NBTlRfVkVSSUZZOiAweDgxMDAwMDJDLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9OT05fTUFUQ0hJTkc6IDB4ODEwMDAwMkQsXG4gICAgRVJSX0xEU19QQUNFX0lNX1NDSEVNRV9JTkNPUlJFQ1Q6IDB4ODEwMDAwMkUsXG4gICAgRVJSX0xEU19QQUNFX0lNX1JBTkRPTV9NQVBQSU5HX0ZBSUxFRDogMHg4MTAwMDAyRixcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9QVUJMSUNfS0VZOiAweDgxMDAwMDMwLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0lORk86IDB4ODEwMDAwMzEsXG4gICAgRVJSX0xEU19DQV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg4MTAwMDAzMixcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9ET01BSU5fUEFSQU1FVEVSUzogMHg4MTAwMDAzMyxcbiAgICBFUlJfTERTX0NBX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOiAweDgxMDAwMDM0LFxuICAgIEVSUl9MRFNfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwMzUsXG4gICAgRVJSX0xEU19DQV9FUEhFTUVSQUxfS0VZU19DQU5UX0NSRUFURTogMHg4MTAwMDAzNixcbiAgICBFUlJfTERTX0NBX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMzcsXG4gICAgRVJSX0xEU19DQV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6IDB4ODEwMDAwMzgsXG4gICAgRVJSX0xEU19UQV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg4MTAwMDA0MCxcbiAgICBFUlJfTERTX1RBX0NBTlRfQlVJTERfQ0VSVElGSUNBVEVfQ0hBSU46IDB4ODEwMDAwNDEsXG4gICAgRVJSX0xEU19UQV9DQU5UX0ZJTkRfSVNfUFJJVkFURV9LRVk6IDB4ODEwMDAwNDIsXG4gICAgRVJSX0xEU19UQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg4MTAwMDA0MyxcbiAgICBFUlJfTERTX1RBX1NJR05BVFVSRV9CVUlMRElOR19FUlJPUjogMHg4MTAwMDA0NCxcbiAgICBFUlJfTERTX1RBX0lOVkFMSURfS0VZX0FMR09SSVRITV9QQVJBTUVURVJTOiAweDgxMDAwMDQ1LFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwNTAsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDUxLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfUEFSQU1FVEVSUzogMHg4MTAwMDA1MixcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5ERUZJTkVEX1BBUkFNRVRFUlM6IDB4ODEwMDAwNTMsXG4gICAgRVJSX0xEU19BQV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAwNTQsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9SRUNPVkVSWV9TQ0hFTUU6IDB4ODEwMDAwNTUsXG4gICAgRVJSX0xEU19BQV9JTkNPUlJFQ1RfVFJBSUxFUjogMHg4MTAwMDA1NixcbiAgICBFUlJfTERTX0FBX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODEwMDAwNTcsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0NBTlRfRklORDogMHg4MTAwMDA3MCxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAwNzEsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09NUExFVEVfREFUQTogMHg4MTAwMDA3MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX01JU1NJTkdfTUFOREFUT1JZX0RBVEFfUEs6IDB4ODEwMDAwNjAsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEOiAweDgxMDAwMDYyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hBVF9VTlNVUFBPUlRFRF9URVJNSU5BTF9UWVBFOiAweDgxMDAwMDYzLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfVU5TVVBQT1JURUQ6IDB4ODEwMDAwNixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOVkFMSURfUEFSQU1TOiAweDgxMDAwMDY1LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjAsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DUElfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjEsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DQVJfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYzLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hSX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY0LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hBVF9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElEX0ZST01fSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjYsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9UT19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjgsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2OSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX01JU1NJTkc6IDB4ODEwMDAxNkEsXG4gICAgRVJSX0xEU19WRFNfVU5TVVBQT1JURURfVkVSU0lPTjogMHg4MTAwMDIwMCxcbiAgICBFUlJfTERTX1ZEU19JU1NVSU5HX0NPVU5UUllfU0laRTogMHg4MTAwMDIwMSxcbiAgICBFUlJfTERTX1ZEU19JU1NVSU5HX0NPVU5UUllfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAyMDIsXG4gICAgRVJSX0xEU19WRFNfU0lHTkVSX0NFUlRJRklDQVRFX1NJWkU6IDB4ODEwMDAyMDMsXG4gICAgRVJSX0xEU19WRFNfU0lHTkVSX0NFUlRJRklDQVRFX0RBVEE6IDB4ODEwMDAyMDQsXG4gICAgRVJSX0xEU19WRFNfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMjA1LFxuICAgIEVSUl9MRFNfVkRTX05DX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMzAwLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAzMDEsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSEVBREVSOiAweDgxMDAwMzAyLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1RZUEU6IDB4ODEwMDAzMDMsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfVkVSU0lPTjogMHg4MTAwMDMwNCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9JU1NVSU5HX0NPVU5UUlk6IDB4ODEwMDAzMDUsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfTUVTU0FHRTogMHg4MTAwMDMwNixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdOQVRVUkU6IDB4ODEwMDAzMDcsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX0FMR09SSVRITTogMHg4MTAwMDMwOCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9DRVJUSUZJQ0FURTogMHg4MTAwMDMwOSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfVkFMVUU6IDB4ODEwMDAzMEEsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUgPSB7XG4gICAgQ1RfVU5ERUZJTkVEOiAwLFxuICAgIENUX0NTQ0E6IDEsXG4gICAgQ1RfQ1NDQV9MSU5LOiAyLFxuICAgIENUX0RTOiAzLFxuICAgIENUX01MUzogNCxcbiAgICBDVF9ERVZfTFM6IDUsXG4gICAgQ1RfREVGX0xTOiA2LFxuICAgIENUX0JMUzogNyxcbiAgICBDVF9MRFMyOiA4LFxuICAgIENUX0JDUzogOSxcbiAgICBDVF9CQ1NOQzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBSR0xNZWFzdXJlU3lzdGVtID0ge1xuICAgIE1FVFJJQzogMCxcbiAgICBJTVBFUklBTDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1Jlc3VsdFR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FTVBUWTogMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19JTUFHRTogMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTEVfSU1BR0U6IDIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfT0NSX0VYVEVOREVEOiAzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERVM6IDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9HUkFQSElDUzogNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9URVNUX1FVQUxJVFk6IDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9UWVBFU19DQU5ESURBVEVTOiA4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ0hPU0VOX0RPQ1VNRU5UX1RZUEVfQ0FORElEQVRFOiA5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRTX0lORk9fTElTVDogMTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9PQ1JfTEVYSUNBTF9BTkFMWVpFOiAxNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19VTkNST1BQRURfSU1BR0U6IDE2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVklTVUFMX09DUl9FWFRFTkRFRDogMTcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfVEVYVF9EQVRBOiAxOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19JTUFHRV9EQVRBOiAxOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0FVVEhFTlRJQ0lUWTogMjAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FT1NfSU1BR0U6IDIzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFZRVJfSU1BR0U6IDI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFOiAyNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRV9URVhUX0RBVEE6IDI2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklFTERfRklMRV9JTUFHRTogMjcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9EQVRBQkFTRV9DSEVDSzogMjgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSU5HRVJQUklOVF9URU1QTEFURV9JU086IDI5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5QVVRfSU1BR0VfUVVBTElUWTogMzAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9SRklEX1NFU1NJT046IDQ4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfRU5DUllQVEVEX1JDTDogNDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9MSUNFTlNFOiA1MCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1RFWFQ6IDM2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU1BR0VTOiAzNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0hPTE9fUEFSQU1TOiA0NyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1BPU0lUSU9OOiA4NSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NVU1RPTTogMTAwLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9SQVdfREFUQTogMTAxLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9URVhUX0RBVEE6IDEwMixcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfSU1BR0VfREFUQTogMTAzLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9CSU5BUllfREFUQTogMTA0LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9PUklHSU5BTF9HUkFQSElDUzogMTA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERV9QT1NJVElPTjogNjIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfUE9TSVRJT046IDYxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTElWRV9QT1JUUkFJVDogMzIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9TVEFUVVM6IDMzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTjogMzQsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FWFRfUE9SVFJBSVQ6IDM1LFxufVxuXG5leHBvcnQgY29uc3QgRnJhbWVTaGFwZVR5cGUgPSB7XG4gICAgTElORTogMCxcbiAgICBDT1JORVI6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQlVUVDogMCxcbiAgICBST1VORDogMSxcbiAgICBTUVVBUkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCA9IHtcbiAgICBSQ0ZfRElTQUJMRUQ6IDAsXG4gICAgUkNGX1ZFUklGSUVEOiAxLFxuICAgIFJDRl9OT1RfVkVSSUZJRUQ6IDIsXG4gICAgUkNGX0NPTVBBUkVfVFJVRTogMyxcbiAgICBSQ0ZfQ09NUEFSRV9GQUxTRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckFjdGlvbiA9IHtcbiAgICBDT01QTEVURTogMCxcbiAgICBQUk9DRVNTOiAxLFxuICAgIE1PUkVfUEFHRVNfQVZBSUxBQkxFOiAyLFxuICAgIENBTkNFTDogMyxcbiAgICBFUlJPUjogNCxcbiAgICBQUk9DRVNTX1dISVRFX0ZMQVNITElHSFQ6IDUsXG4gICAgVElNRU9VVDogNixcbiAgICBQUk9DRVNTSU5HX09OX1NFUlZJQ0U6IDcsXG4gICAgTk9USUZJQ0FUSU9OOiAxMDEsXG4gICAgUFJPQ0VTU19XSElURV9VVl9JTUFHRVM6IDEwMixcbiAgICBQUk9DRVNTX0lSX0ZSQU1FOiAxMDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfQWRkRGF0YVRvUGFja2FnZTogMTIxMjEsXG4gICAgZVBDX1Byb2NNZ3JfRmluYWxpemVQYWNrYWdlOiAxMjEyMixcbiAgICBlUENfUHJvY01ncl9DcmVhdGVCYWNrZW5kVHJhbnNhY3Rpb246IDEyMTI1LFxuICAgIGVQQ19Qcm9jTWdyX1VubG9hZDogMTIxMDcsXG4gICAgZVBDX1Byb2NNZ3JfQ2hlY2tEYXRhYmFzZTogMTIxMDksXG4gICAgZVBDX1Byb2NNZ3JfQ29tcGFyZVBvcnRyYWl0czogMTIxMTEsXG4gICAgZVBDX1JGSURfU2V0VENDUGFyYW1zOiAxMjUyMixcbn1cblxuZXhwb3J0IGNvbnN0IFBLRFJlc291cmNlVHlwZSA9IHtcbiAgICBDRVJUSUZJQ0FURV9QQTogMCxcbiAgICBDRVJUSUZJQ0FURV9UQTogMSxcbiAgICBMRElGOiAyLFxuICAgIENSTDogMyxcbiAgICBNTDogNCxcbiAgICBERUZMOiA1LFxuICAgIERFVkw6IDYsXG4gICAgQkw6IDcsXG5cbiAgICBnZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcInBhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcbiAgICAgICAgICAgIGNhc2UgXCJ0YVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1RBXG4gICAgICAgICAgICBjYXNlIFwibGRpZlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxESUZcbiAgICAgICAgICAgIGNhc2UgXCJjcmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DUkxcbiAgICAgICAgICAgIGNhc2UgXCJtbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1MXG4gICAgICAgICAgICBjYXNlIFwiZGVmbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFRkxcbiAgICAgICAgICAgIGNhc2UgXCJkZXZsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVWTFxuICAgICAgICAgICAgY2FzZSBcImJsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQkxcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IERvY3VtZW50UmVhZGVyRXJyb3JDb2RlcyA9IHtcbiAgICBJTklUSUFMSVpBVElPTl9DT1JFX0FCU0VOVDogMCxcbiAgICBJTklUSUFMSVpBVElPTl9GQUlMRUQ6IDEsXG4gICAgSU5DT1JSRUNUX1NDRU5BUklPOiAyLFxuICAgIE5PX1JFU1VMVDogMyxcbiAgICBSRU1PVkVfREFUQUJBU0U6IDQsXG4gICAgRkVUQ0hJTkdfREFUQUJBU0U6IDUsXG4gICAgREJfSURfTk9UX0ZPVU5EOiA2LFxuICAgIERCX0RFU0NSSVBUSU9OX05PVF9GT1VORDogNyxcbiAgICBTQVZFX0RCOiA4LFxuICAgIERPV05MT0FEX0RCX0lOQ09SUkVDVF9DSEVDS1NVTTogOSxcbiAgICBEQl9ET1dOTE9BRDogMTAsXG4gICAgTElDRU5TRV9BQlNFTlRfT1JfQ09SUlVQVEVEOiAxMyxcbiAgICBMSUNFTlNFX0lOVkFMSURfREFURTogMTQsXG4gICAgTElDRU5TRV9JTlZBTElEX1ZFUlNJT046IDE1LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9ERVZJQ0VfSUQ6IDE2LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiAxNyxcbiAgICBMSUNFTlNFX05PX0NBUEFCSUxJVElFUzogMTgsXG4gICAgTElDRU5TRV9OT19BVVRIRU5USUNJVFk6IDE5LFxuICAgIFJFQ09SRF9QUk9DRVNTX0lOVkFMSURfT1VUUFVUX1VSTDogMjAsXG4gICAgTElDRU5TRV9PTkxJTkVfRVJST1I6IDIxLFxuICAgIExJQ0VOU0VfTk9fREFUQUJBU0U6IDIyLFxuICAgIExJQ0VOU0VfREFUQUJBU0VfSU5DT1JSRUNUOiAyMyxcbiAgICBJTlZBTElEX1RDQ19QQVJBTVM6IDI0LFxuICAgIFJGSURfSU5fUFJPR1JFU1M6IDI1LFxuICAgIFNUQVJUX0JBQ0tFTkRfUFJPQ0VTU0lORzogMjYsXG4gICAgQUREX0RBVEFfVE9fUEFDS0FHRTogMjcsXG4gICAgRklOQUxJWkVfRkFJTEVEOiAyOCxcbiAgICBDQU1FUkFfTk9fUEVSTUlTU0lPTjogMjksXG4gICAgQ0FNRVJBX05PVF9BVkFJTEFCTEU6IDMwLFxuICAgIE5BVElWRV9KQVZBX0VYQ0VQVElPTjogMTAwMCxcbiAgICBCQUNLRU5EX09OTElORV9QUk9DRVNTSU5HOiAzMDMsXG4gICAgV1JPTkdfSU5QVVQ6IDQwMCxcbiAgICBTVEFURV9FWENFUFRJT046IDUwMCxcbiAgICBCTEVfRVhDRVBUSU9OOiA2MDAsXG4gICAgRkVBVFVSRV9CTFVFVE9PVEhfTEVfTk9UX1NVUFBPUlRFRDogNjAxLFxuICAgIEFQUF9CQUNLR1JPVU5EOiA3MDAsXG4gICAgT05MSU5FX1BST0NFU1NJTkdfV1JPTkdfSU5QVVQ6IDgwMCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvSWRlbnRpZmllciA9IHtcbiAgICBTQ0VOQVJJT19NUlo6IFwiTXJ6XCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERTogXCJCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFOiBcIkxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX09DUjogXCJPY3JcIixcbiAgICBTQ0VOQVJJT19ET0NUWVBFOiBcIkRvY1R5cGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERTogXCJNcnpPckJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfTE9DQVRFOiBcIk1yek9yTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX0FORF9MT0NBVEU6IFwiTXJ6QW5kTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERV9BTkRfTE9DQVRFOiBcIkJhcmNvZGVBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfT0NSOiBcIk1yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREVfT1JfT0NSOiBcIk1yek9yQmFyY29kZU9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFX1ZJU1VBTF9BTkRfTVJaX09SX09DUjogXCJMb2NhdGVWaXN1YWxfQW5kX01yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9QUk9DRVNTOiBcIkZ1bGxQcm9jZXNzXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9BVVRIOiBcIkZ1bGxBdXRoXCIsXG4gICAgU0NFTkFSSU9fSUQzUlVTOiBcIklkM1J1c1wiLFxuICAgIFNDRU5BUklPX1JVU19TVEFNUDogXCJSdXNTdGFtcFwiLFxuICAgIFNDRU5BUklPX09DUl9GUkVFOiBcIk9jckZyZWVcIixcbiAgICBTQ0VOQVJJT19DUkVESVRfQ0FSRDogXCJDcmVkaXRDYXJkXCIsXG4gICAgU0NFTkFSSU9fQ0FQVFVSRTogXCJDYXB0dXJlXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUgPSB7XG4gICAgQUNQVF9VTkRFRklORUQ6IDAsXG4gICAgQUNQVF9CQUM6IDEsXG4gICAgQUNQVF9QQUNFOiAyLFxuICAgIEFDUFRfQ0E6IDMsXG4gICAgQUNQVF9UQTogNCxcbiAgICBBQ1BUX0FBOiA1LFxuICAgIEFDUFRfUkk6IDYsXG4gICAgQUNQVF9DQVJEX0lORk86IDEwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDB4MDAwMTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fRE9DVU1FTlRfUkVBRFk6IDB4MDAwMTAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDQ6IDB4MDAwMTAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDB4MDAwMTAwMEEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUFJPR1JFU1M6IDB4MDAwMTAwMEIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVEFfU1RFUDogMHgwMDAxMDAwRSxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogMHgwMDAxMDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9JU09fRVJST1I6IDB4MDAwMTEwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfUkVRVUVTVDogMHgwMDAxMzAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogMHgwMDAxNDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9ESVNDT05ORUNURUQ6IDB4MDAwMjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAweDAwMDIwMDAxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfUkVDRUlWRUQ6IDB4MDAwMjAwMDIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1RJTUU6IDB4MDAwMjAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAweDAwMDIwMDA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfU0VOVDogMHgwMDAyMDAwNSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfU1BFRUQ6IDB4MDAwMjAwMDYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDB4MDAwMjAwMDcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0lORzogMHgwMDAyMDAwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VYVF9MRU5HVEhfU1VQUE9SVDogMHgwMDAyMDAxMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMHgwMDAyMDAxMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTl9JVEVNOiAweDAwMDIwMDEyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NDRU5BUklPOiAweDAwMDIwMDIwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDB4MDAwMzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX05PVF9GT1VORDogMHgwMDA0MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VORF9PRl9GSUxFOiAweDAwMDUwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAweDAwMDYwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQVBQTElDQVRJT05fU0VMRUNURUQ6IDB4MDAwNzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX1NUQVJUOiAweDAwMDgwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDB4MDAwOTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfU0VDVVJJVFlfT0JKRUNUX0NIRUNLOiAweDAwMEEwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0ZJTEVfQ0hFQ0s6IDB4MDAwQjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDB4MDAwQzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQVVYSUxJQVJZX0RBVEFfVkFMSURBVElPTjogMHgwMDBEMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9SSV9TRUNUT1JfSUQ6IDB4MDAwRTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogMHgwMDBGMDAwMCxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVBvc2l0aW9uID0ge1xuICAgIFVOU1BFQ0lGSUVEOiAwLFxuICAgIEJBQ0s6IDEsXG4gICAgRlJPTlQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9QYXNzd29yZF9UeXBlID0ge1xuICAgIFBQVF9VTktOT1dOOiAwLFxuICAgIFBQVF9NUlo6IDEsXG4gICAgUFBUX0NBTjogMixcbiAgICBQUFRfUElOOiAzLFxuICAgIFBQVF9QVUs6IDQsXG4gICAgUFBUX1BJTl9FU0lHTjogNSxcbiAgICBQUFRfU0FJOiA2LFxufVxuXG5leHBvcnQgY29uc3QgVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFVOS05PV046IC0xLFxuICAgIFNDQUxFX1RPX0ZJTEw6IDAsXG4gICAgU0NBTEVfQVNQRUNUX0ZJVDogMSxcbiAgICBTQ0FMRV9BU1BFQ1RfRklMTDogMixcbiAgICBSRURSQVc6IDMsXG4gICAgQ0VOVEVSOiA0LFxuICAgIFRPUDogNSxcbiAgICBCT1RUT006IDYsXG4gICAgTEVGVDogNyxcbiAgICBSSUdIVDogOCxcbiAgICBUT1BfTEVGVDogOSxcbiAgICBUT1BfUklHSFQ6IDEwLFxuICAgIEJPVFRPTV9MRUZUOiAxMSxcbiAgICBCT1RUT01fUklHSFQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVJlc3VsdCA9IHtcbiAgICBOT19FUlI6IDAsXG4gICAgTlVMTF9QVFJfRVJSOiAtNjAwMSxcbiAgICBCQURfQVJHX0VSUjogLTYwMDIsXG4gICAgU0laRV9FUlI6IC02MDAzLFxuICAgIFJBTkdFX0VSUjogLTYwMDQsXG4gICAgSU5URVJOQUxfRVJSOiAtNjAwNSxcbiAgICBUUllfRVhDRVBUX0VSUjogLTYwMDYsXG4gICAgQkFSX0NPREVfTk9UX0ZPVU5EOiAtNjAwOCxcbiAgICBCQVJfQ09ERV9ERUNPREVfRVJSOiAtNjAxMCxcbiAgICBOT19VU0VSX0RMTF9GT1VORDogLTYwMTksXG4gICAgTk9fSVBQX0RMTF9GT1VORDogLTYwMjAsXG4gICAgSVBQX0VYRUNfRVJSOiAtNjAyNCxcbiAgICBJUFBfVFJZX0VYQ0VQVF9FUlI6IC02MDI1LFxuICAgIEJBUkNPREVfRVJST1JfSU5QVVRfUEFSQU06IC0xMTAwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTklUOiAtMTEwMDYsXG4gICAgQkFSQ09ERV9FUlJPUl9OT1RfTE9BRF9JUF9ERUNPREVEX0xMOiAtMTEwMTIsXG4gICAgQkFSQ09ERV9FUlJPUl9JTk5FUl9QUk9CTEVNOiAtMTExMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9ERUNPREVfMURfQkFEX0RFQ09ERTogLTExMjAwLFxuICAgIEJBUkNPREVfRVJST1JfRklORF9ST1dfT1JfQ09MVU1OOiAtMTEyMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EXzNYOF8yRF9YOiAtMTEyMDIsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EXzNYOF8yRF9ZOiAtMTEyMDMsXG4gICAgQkFSQ09ERV9FUlJPUl8yRF9VR09MX01BWDogLTExMjA0LFxuICAgIEJBUkNPREVfRVJST1JfSU5ERUZJTklURUxZX0RFQ09ERUQ6IC0xMTIxMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RMTF9OT1RfSU5JVDogLTExMzAwLFxuICAgIEJBUkNPREVfRVJST1JfSVBfREVDT0RFX0RMTF9UcnlfRXhjZXB0OiAtMTE0MDAsXG4gICAgSVBERUNPREVfRVJST1JfTEFSR0VFUlJPUlM6IC00NTAzLFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUQ09MVU1OUzogLTQ1MDQsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRST1dTOiAtNDUwNSxcbiAgICBJUERFQ09ERV9FUlJPUl9JTkNPUlJFQ1RfRVJST1JfTEVWRUw6IC00NTExLFxuICAgIElQREVDT0RFX0VSUk9SX0xPQURJTkdfREVWX1RBQkxFOiAtNDUxMixcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja0RpYWdub3NlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTUzogMSxcbiAgICBJTlZBTElEX0lOUFVUX0RBVEE6IDIsXG4gICAgSU5URVJOQUxfRVJST1I6IDMsXG4gICAgRVhDRVBUSU9OX0lOX01PRFVMRTogNCxcbiAgICBVTkNFUlRBSU5fVkVSSUZJQ0FUSU9OOiA1LFxuICAgIE5FQ0VTU0FSWV9JTUFHRV9OT1RfRk9VTkQ6IDcsXG4gICAgUEhPVE9fU0lERVNfTk9UX0ZPVU5EOiA4LFxuICAgIElOVkFMSURfQ0hFQ0tTVU06IDEwLFxuICAgIFNZTlRBWF9FUlJPUjogMTEsXG4gICAgTE9HSUNfRVJST1I6IDEyLFxuICAgIFNPVVJDRVNfQ09NUEFSSVNPTl9FUlJPUjogMTMsXG4gICAgRklFTERTX0NPTVBBUklTT05fTE9HSUNfRVJST1I6IDE0LFxuICAgIElOVkFMSURfRklFTERfRk9STUFUOiAxNSxcbiAgICBUUlVFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMSxcbiAgICBGSVhFRF9QQVRURVJOX0VSUk9SOiAyMixcbiAgICBMT1dfQ09OVFJBU1RfSU5fSVJfTElHSFQ6IDIzLFxuICAgIElOQ09SUkVDVF9CQUNLR1JPVU5EX0xJR0hUOiAyNCxcbiAgICBCQUNLR1JPVU5EX0NPTVBBUklTT05fRVJST1I6IDI1LFxuICAgIElOQ09SUkVDVF9URVhUX0NPTE9SOiAyNixcbiAgICBQSE9UT19GQUxTRV9MVU1JTklTQ0VOQ0U6IDI3LFxuICAgIFRPT19NVUNIX1NISUZUOiAyOCxcbiAgICBDT05UQUNUX0NISVBfVFlQRV9NSVNNQVRDSDogMjksXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgUEhPVE9fV0hJVEVfSVJfRE9OVF9NQVRDSDogNDQsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9HTEFSRVNfSU5fUEhPVE9fQVJFQTogODEsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9QSE9UT19SRVBMQUNFRDogODIsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9MQU5ETUFSS1NfQ0hFQ0tfRVJST1I6IDgzLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfRkFDRV9QUkVTRU5DRV9DSEVDS19FUlJPUjogODQsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9GQUNFX0FCU0VOQ0VfQ0hFQ0tfRVJST1I6IDg1LFxuICAgIE9WSV9JUl9JTlZJU0lCTEU6IDkwLFxuICAgIE9WSV9JTlNVRkZJQ0lFTlRfQVJFQTogOTEsXG4gICAgT1ZJX0NPTE9SX0lOVkFSSUFCTEU6IDkyLFxuICAgIE9WSV9CQURfQ09MT1JfRlJPTlQ6IDkzLFxuICAgIE9WSV9CQURfQ09MT1JfU0lERTogOTQsXG4gICAgT1ZJX1dJREVfQ09MT1JfU1BSRUFEOiA5NSxcbiAgICBPVklfQkFEX0NPTE9SX1BFUkNFTlQ6IDk2LFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfQUJTRU5UOiAxMDAsXG4gICAgSE9MT0dSQU1fU0lERV9UT1BfSU1BR0VTX0FCU0VOVDogMTAxLFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfUFJFU0VOVDogMTAyLFxuICAgIEhPTE9HUkFNX0ZSQU1FU19JU19BQlNFTlQ6IDEwMyxcbiAgICBIT0xPR1JBTV9IT0xPX0ZJRUxEX0lTX0FCU0VOVDogMTA0LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5URVJSVVBURUQ6IDExMCxcbiAgICBQSE9UT19QQVRURVJOX1NISUZURUQ6IDExMSxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9DT0xPUlM6IDExMixcbiAgICBQSE9UT19QQVRURVJOX0lSX1ZJU0lCTEU6IDExMyxcbiAgICBQSE9UT19QQVRURVJOX05PVF9JTlRFUlNFQ1Q6IDExNCxcbiAgICBQSE9UT19TSVpFX0lTX1dST05HOiAxMTUsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlZBTElEX0NPTE9SOiAxMTYsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEX1ZFUlQ6IDExNyxcbiAgICBQSE9UT19QQVRURVJOX1BBVFRFUk5fTk9UX0ZPVU5EOiAxMTgsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxMTksXG4gICAgUEhPVE9fSVNfTk9UX1JFQ1RBTkdMRTogMTIwLFxuICAgIFBIT1RPX0NPUk5FUlNfSVNfV1JPTkc6IDEyMSxcbiAgICBET0NVTUVOVF9JU19DQU5DRUxMSU5HOiAxMjIsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfQkxVRTogMTMwLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0dSRUVOOiAxMzEsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfUkVEOiAxMzIsXG4gICAgVEVYVF9TSE9VTERfQkVfQkxBQ0s6IDEzMyxcbiAgICBCQVJDT0RFX1dBU19SRUFEX1dJVEhfRVJST1JTOiAxNDAsXG4gICAgQkFSQ09ERV9EQVRBX0ZPUk1BVF9FUlJPUjogMTQxLFxuICAgIEJBUkNPREVfU0laRV9QQVJBTVNfRVJST1I6IDE0MixcbiAgICBOT1RfQUxMX0JBUkNPREVTX1JFQUQ6IDE0MyxcbiAgICBHTEFSRVNfSU5fQkFSQ09ERV9BUkVBOiAxNDQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9QT1JUUkFJVFNfRElGRkVSOiAxNTAsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX1JFUExZOiAxNTEsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9TRVJWSUNFX0VSUk9SOiAxNTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT1RfRU5PVUdIX0lNQUdFUzogMTUzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fTElWRV9QSE9UTzogMTU0LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9MSUNFTlNFOiAxNTUsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19QT1JUUkFJVF9ERVRFQ1RFRDogMTU2LFxuICAgIE1PQklMRV9JTUFHRVNfVU5TVUlUQUJMRV9MSUdIVF9DT05ESVRJT05TOiAxNjAsXG4gICAgTU9CSUxFX0lNQUdFU19XSElURV9VVl9OT19ESUZGRVJFTkNFOiAxNjEsXG4gICAgRklOR0VSUFJJTlRTX0NPTVBBUklTT05fTUlTTUFUQ0g6IDE3MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfTk9UX0RFVEVDVEVEOiAxODAsXG4gICAgSE9MT19QSE9UT19GQUNFX0NPTVBBUklTT05fRkFJTEVEOiAxODEsXG4gICAgSE9MT19QSE9UT19GQUNFX0dMQVJFX0lOX0NFTlRFUl9BQlNFTlQ6IDE4MixcbiAgICBIT0xPX0VMRU1FTlRfU0hBUEVfRVJST1I6IDE4MyxcbiAgICBBTEdPUklUSE1fU1RFUFNfRVJST1I6IDE4NCxcbiAgICBIT0xPX0FSRUFTX05PVF9MT0FERUQ6IDE4NSxcbiAgICBGSU5JU0hFRF9CWV9USU1FT1VUOiAxODYsXG4gICAgSE9MT19QSE9UT19ET0NVTUVOVF9PVVRTSURFX0ZSQU1FOiAxODcsXG4gICAgTElWRU5FU1NfREVQVEhfQ0hFQ0tfRkFJTEVEOiAxOTAsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfU1lNQk9MX1BPU0lUSU9OOiAyMDAsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfQkFDS0dST1VORDogMjAxLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX01SWl9XSURUSDogMjAyLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX01SWl9IRUlHSFQ6IDIwMyxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19MSU5FX1BPU0lUSU9OOiAyMDQsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfRk9OVF9UWVBFOiAyMDUsXG4gICAgT0NSX1FVQUxJVFlfVEVYVF9QT1NJVElPTjogMjIwLFxuICAgIE9DUl9RVUFMSVRZX0lOVkFMSURfRk9OVDogMjIxLFxuICAgIE9DUl9RVUFMSVRZX0lOVkFMSURfQkFDS0dST1VORDogMjIyLFxuICAgIExBU19JTktfSU5WQUxJRF9MSU5FU19GUkVRVUVOQ1k6IDIzMCxcbiAgICBET0NfTElWRU5FU1NfRUxFQ1RST05JQ19ERVZJQ0VfREVURUNURUQ6IDI0MCxcbiAgICBET0NfTElWRU5FU1NfSU5WQUxJRF9CQVJDT0RFX0JBQ0tHUk9VTkQ6IDI0MSxcbiAgICBJQ0FPX0lEQl9CQVNFXzMyX0VSUk9SOiAyNDMsXG4gICAgSUNBT19JREJfWklQUEVEX0VSUk9SOiAyNDQsXG4gICAgSUNBT19JREJfTUVTU0FHRV9aT05FX0VNUFRZOiAyNDUsXG4gICAgSUNBT19JREJfU0lHTkFUVVJFX01VU1RfQkVfUFJFU0VOVDogMjQ2LFxuICAgIElDQU9fSURCX1NJR05BVFVSRV9NVVNUX05PVF9CRV9QUkVTRU5UOiAyNDcsXG4gICAgSUNBT19JREJfQ0VSVElGSUNBVEVfTVVTVF9OT1RfQkVfUFJFU0VOVDogMjQ4LFxuICAgIElOQ09SUkVDVF9PQkpFQ1RfQ09MT1I6IDI1MCxcbn1cblxuZXhwb3J0IGNvbnN0IFJGSUREZWxlZ2F0ZSA9IHtcbiAgICBOVUxMOiAwLFxuICAgIE5PX1BBOiAxLFxuICAgIEZVTEw6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBUZXh0UHJvY2Vzc2luZyA9IHtcbiAgICBvY05vQ2hhbmdlOiAwLFxuICAgIG9jVXBwZXJjYXNlOiAxLFxuICAgIG9jTG93ZXJjYXNlOiAyLFxuICAgIG9jQ2FwaXRhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IExvZ0xldmVsID0ge1xuICAgIEZhdGFsRXJyb3I6IFwiRmF0YWxFcnJvclwiLFxuICAgIEVycm9yOiBcIkVycm9yXCIsXG4gICAgV2FybmluZzogXCJXYXJuaW5nXCIsXG4gICAgSW5mbzogXCJJbmZvXCIsXG4gICAgRGVidWc6IFwiRGVidWdcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbkltYWdlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTU1BPUlRfU0lOR0xFX1BBR0U6IDEsXG4gICAgUEFTU1BPUlRfVFdPX1BBR0VTOiAyLFxuICAgIElEX0ZST05UOiAzLFxuICAgIElEX0ZST05UX01SWjogNCxcbiAgICBJRF9CQUNLOiA1LFxuICAgIElEX0JBQ0tfTVJaOiA2LFxuICAgIElEX0JBQ0tfQkFSQ09ERTogNyxcbiAgICBJRF9CQUNLX0JBUkNPREVfTVJaOiA4LFxuICAgIEJBTktfQ0FSRF9GUk9OVDogOSxcbiAgICBCQU5LX0NBUkRfQkFDSzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSB7XG4gICAgTk9UX1JFQURZOiAwLFxuICAgIFJFQURZOiAxLFxuICAgIFRJTUVPVVQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NGb3JtYXQgPSB7XG4gICAgSUQxOiAwLFxuICAgIElEMjogMSxcbiAgICBJRDM6IDIsXG4gICAgTk9OOiAzLFxuICAgIEE0OiA0LFxuICAgIElEM194MjogNSxcbiAgICBJRDJfVFVSS0VZOiA2LFxuICAgIElEMV85MDogMTAsXG4gICAgSUQxXzE4MDogMTEsXG4gICAgSUQxXzI3MDogMTIsXG4gICAgSUQyXzE4MDogMTMsXG4gICAgSUQzXzE4MDogMTQsXG4gICAgQ1VTVE9NOiAxMDAwLFxuICAgIFBIT1RPOiAxMDAxLFxuICAgIEZMRVhJQkxFOiAxMDAyLFxuICAgIFVOS05PV046IC0xLFxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1ZFUlNJT046IDB4OTAwMDAwMDEsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfTk9OX01BVENISU5HX1NJR05BVFVSRV9BTEdPUklUSE06IDB4OTAwMDAwMDIsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1RJTUVfQ09ESU5HOiAweDkwMDAwMDAzLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9VU0VfT0ZfR0VORVJBTElaRURfVElNRTogMHg5MDAwMDAwNCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9JU1NVRVI6IDB4OTAwMDAwMDUsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfU1VCSkVDVDogMHg5MDAwMDAwNixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9DUklUSUNBTF9FWFRFTlNJT046IDB4OTAwMDAwMDgsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfQ1NDQV9ST0xFOiAweDkwMDAwMDBFLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0RTX1JPTEU6IDB4OTAwMDAwMEYsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0lTU1VFUl9TVUJKRUNUX0RTOiAweDkwMDAwMDEwLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0RVUExJQ0FUSU5HX0VYVEVOU0lPTlM6IDB4OTAwMDAwMTcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fTUlTU0VEOiAweDkwMDAwMjAwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDIwMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTUlTU0VEOiAweDkwMDAwMjAyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09NTU9OX05BTUVfTUlTU0VEOiAweDkwMDAwMjAzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjA0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTUlTU0VEOiAweDkwMDAwMjA1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPTU1PTl9OQU1FX01JU1NFRDogMHg5MDAwMDIwNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMDcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VTSU5HX05PTl9DT01QTElBTlRfREFUQTogMHg5MDAwMDIwOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg5MDAwMDIwOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06IDB4OTAwMDAyMEEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX01JU1NFRF9FWFRFTlNJT05TOiAweDkwMDAwMjBCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MDAwMDIwQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1VTSU5HX05PTl9DT01QTElBTlRfREFUQTogMHg5MDAwMDIwRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9NSVNTRUQ6IDB4OTAwMDAyMEUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTk9UX0NSSVRJQ0FMOiAweDkwMDAwMjBGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjEwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19NSVNTRUQ6IDB4OTAwMDAyMTEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9VU0FHRTE6IDB4OTAwMDAyMTIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9VU0FHRTI6IDB4OTAwMDAyMTMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX05PVF9DUklUSUNBTDogMHg5MDAwMDIxNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMTUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfTUlTU0VEOiAweDkwMDAwMjE2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX0lOQ09SUkVDVDogMHg5MDAwMDIxNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfTk9UX0NSSVRJQ0FMOiAweDkwMDAwMjE4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfVVNBR0U6IDB4OTAwMDAyMTksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfTUlTU0VEOiAweDkwMDAwMjFCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMUMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9LRVlfSURfTUlTU0VEOiAweDkwMDAwMjFELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9LRVlfSURfTUlTU0VEOiAweDkwMDAwMjFFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMUYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9NSVNTRUQ6IDB4OTAwMDAyMjAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0VNUFRZOiAweDkwMDAwMjIyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMjMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjI0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9FTVBUWTogMHg5MDAwMDIyNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfQ1JJVElDQUw6IDB4OTAwMDAyMjgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0VNUFRZOiAweDkwMDAwMjI5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMkEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMkIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTUlTU0VEOiAweDkwMDAwMjJDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjJELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0VNUFRZOiAweDkwMDAwMjJFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMkYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfQ1JJVElDQUw6IDB4OTAwMDAyMzEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fRU1QVFk6IDB4OTAwMDAyMzIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAweDkwMDAwMjMzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMzQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX01JU1NFRDogMHg5MDAwMDIzNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMzYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX1ZFUlNJT046IDB4OTAwMDAyMzcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFUzogMHg5MDAwMDIzOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTX0VNUFRZOiAweDkwMDAwMjM5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIzQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfRU1QVFk6IDB4OTAwMDAyM0IsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX1BPTElDWV9JRF9NSVNTRUQ6IDB4OTAwMDAyM0MsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9NSVNTRUQ6IDB4OTAwMDAyM0QsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIzRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0VNUFRZOiAweDkwMDAwMjNGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfUE9JTlRfTUlTU0VEOiAweDkwMDAwMjQwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TTl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9TTl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQVRUUklCVVRFX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQVRUUklCVVRFX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TVUJKRUNUX0NPVU5UUllfTk9OX01BVENISU5HOiAweDkwMDAwMjQ2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1NDQV9BTFRfTkFNRVNfTk9OX01BVENISU5HOiAweDkwMDAwMjQ3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyNDgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfQ1JJVElDQUw6IDB4OTAwMDAyNEEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0NSSVRJQ0FMOiAweDkwMDAwMjRDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfT1BUSU9OQUxfQ1JJVElDQUw6IDB4OTAwMDAyNEQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0RSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRGLFxuICAgIE5URl9MRFNfSUNBT19DT01fTERTX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMDIwLFxuICAgIE5URl9MRFNfSUNBT19DT01fTERTX1ZFUlNJT05fTUlTU0lORzogMHg5MDAwMDAyMSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjIsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fTUlTU0lORzogMHg5MDAwMDAyMyxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fSU5DT1JSRUNUOiAweDkwMDAwMDI0LFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9NSVNTSU5HOiAweDkwMDAwMDI1LFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9VTkVYUEVDVEVEOiAweDkwMDAwMDI2LFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9MRFNfVkVSU0lPTl9VTlNVUFBPUlRFRDogMHg5MDAwMDAzMCxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX1VOU1VQUE9SVEVEOiAweDkwMDAwMDMxLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9MRFNfVkVSU0lPTl9JTkNPTlNJU1RFTlQ6IDB4OTAwMDAwMzIsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9JTkNPTlNJU1RFTlQ6IDB4OTAwMDAwMzMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfT0lEX0lOQ09SUkVDVDogMHg5MDAwMDEwMCxcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFBMCxcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9DT05URU5UX09JRF9JTkNPUlJFQ1Q6IDB4OTAwMDAxQTEsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMTAxLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19FTVBUWTogMHg5MDAwMDEwMixcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfVU5TVVBQT1JURUQ6IDB4OTAwMDAxMDMsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19NVUxUSVBMRV9FTlRSSUVTOiAweDkwMDAwMTA5LFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DRVJUSUZJQ0FURVNfTUlTU0VEOiAweDkwMDAwMUIwLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DRVJUSUZJQ0FURVNfRU1QVFk6IDB4OTAwMDAxQjEsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NSTFNfSU5DT1JSRUNUX1VTQUdFOiAweDkwMDAwMUIyLFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0lOQ09SUkVDVF9DT05URU5UX09JRDogMHg5MDAwMDEwNCxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19OVU1CRVJfSU5DT1JSRUNUOiAweDkwMDAwMTA1LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfTUlTU0lORzogMHg5MDAwMDEwNixcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX0VYVFJBOiAweDkwMDAwMTA3LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMTA4LFxuICAgIE5URl9MRFNfSUNBT19NQVNURVJfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFDMCxcbiAgICBOVEZfTERTX0lDQU9fREVWSUFUSU9OX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQzgsXG4gICAgTlRGX0xEU19CU0lfREVGRUNUX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxRDAsXG4gICAgTlRGX0xEU19CU0lfQkxBQ0tfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFEOCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwQSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0NIT0lDRTogMHg5MDAwMDEwQixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfRElHRVNUX0FMR09SSVRITV9OT1RfTElTVEVEOiAweDkwMDAwMTBDLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfTUlTU0lORzogMHg5MDAwMDEwRCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX0RBVEE6IDB4OTAwMDAxMEUsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9WYWx1ZTogMHg5MDAwMDEwRixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTEwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX0RBVEE6IDB4OTAwMDAxMTEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfVkFMVUU6IDB4OTAwMDAxMTIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfTUlTU0lORzogMHg5MDAwMDExQixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9EQVRBOiAweDkwMDAwMTFDLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX1ZBTFVFOiAweDkwMDAwMTFELFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0xJU1RfQ09OVEVOVF9ERVNDUklQVElPTl9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMUUsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfREFUQTogMHg5MDAwMDExRixcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTAwMDAxMTUsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6IDB4OTAwMDAxMTYsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAweDkwMDAwMTE3LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOiAweDkwMDAwMTE4LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDogMHg5MDAwMDExOSxcbiAgICBOVEZfTERTX1VOU1VQUE9SVEVEX0lNQUdFX0ZPUk1BVDogMHg5MDAwMDExQSxcbiAgICBOVEZfTERTX01SWl9ET0NVTUVOVF9UWVBFX1VOS05PV046IDB4MDAwMjIwMDgsXG4gICAgTlRGX0xEU19NUlpfSVNTVUlOR19TVEFURV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMDksXG4gICAgTlRGX0xEU19NUlpfTkFNRV9JU19WT0lEOiAweDAwMDIyMDBBLFxuICAgIE5URl9MRFNfTVJaX05VTUJFUl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMEQsXG4gICAgTlRGX0xEU19NUlpfTkFUSU9OQUxJVFlfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDBFLFxuICAgIE5URl9MRFNfTVJaX0RPQl9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMEYsXG4gICAgTlRGX0xEU19NUlpfRE9CX0VSUk9SOiAweDAwMDIyMDEwLFxuICAgIE5URl9MRFNfTVJaX0RPQl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTEsXG4gICAgTlRGX0xEU19NUlpfU0VYX0lOQ09SUkVDVDogMHgwMDAyMjAxMixcbiAgICBOVEZfTERTX01SWl9ET0VfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDEzLFxuICAgIE5URl9MRFNfTVJaX0RPRV9FUlJPUjogMHgwMDAyMjAxNCxcbiAgICBOVEZfTERTX01SWl9ET0VfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDE1LFxuICAgIE5URl9MRFNfTVJaX09QVElPTkFMX0RBVEFfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDE2LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNyxcbiAgICBOVEZfTERTX01SWl9JTkNPUlJFQ1Q6IDB4MDAwMjIwMTgsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9NSVNTSU5HOiAweDkwMDEwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfSU5DT1JSRUNUOiAweDkwMDIwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9NSVNTSU5HOiAweDkwMDMwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9JTkNPUlJFQ1Q6IDB4OTAwNDAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1RZUEVfSU5DT1JSRUNUOiAweDkwMDUwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19TVUJfVFlQRV9NSVNTSU5HOiAweDkwMDYwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19TVUJfVFlQRV9JTkNPUlJFQ1Q6IDB4OTAwNzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9JTUFHRV9NSVNTSU5HOiAweDkwMDgwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfRk9STUFUX0lEX0lOQ09SUkVDVDogMHg5MDA5MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMEEwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9MRU5HVEhfSU5DT1JSRUNUOiAweDkwMEIwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9HRU5ERVI6IDB4OTAxMDAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0VZRV9DT0xPUjogMHg5MDExMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSEFJUl9DT0xPUjogMHg5MDEyMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ZQVc6IDB4OTAxMzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfUElUQ0g6IDB4OTAxNDAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfUk9MTDogMHg5MDE1MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1lBVzogMHg5MDE2MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1BJVENIOiAweDkwMTcwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUk9MTDogMHg5MDE4MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRkFDRV9JTUFHRV9UWVBFOiAweDkwMTkwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9JTUFHRV9EQVRBX1RZUEU6IDB4OTAxQTAwMDAsXG4gICAgTlRGX0xEU19TSV9QQUNFX0lORk9fVU5TVVBQT1JURURfU1REX1BBUkFNRVRFUlM6IDB4OTEwMDAwMDAsXG4gICAgTlRGX0xEU19TSV9QQUNFX0lORk9fREVQUkVDQVRFRF9WRVJTSU9OOiAweDkxMDAwMDAxLFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VTSU5HX1NURF9SRUY6IDB4OTEwMDAwMDIsXG4gICAgTlRGX0xEU19TSV9QQUNFX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDAzLFxuICAgIE5URl9MRFNfU0lfQ0FfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwNCxcbiAgICBOVEZfTERTX1NJX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDA1LFxuICAgIE5URl9MRFNfU0lfQ0FfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDYsXG4gICAgTlRGX0xEU19TSV9UQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDA3LFxuICAgIE5URl9MRFNfU0lfVEFfSU5GT19GSUxFX0lEX0ZPUl9WRVJTSU9OMjogMHg5MTAwMDAwOCxcbiAgICBOVEZfTERTX1NJX0VJRF9TRUNVUklUWV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDkxMDAwMDA5LFxuICAgIE5URl9MRFNfU0lfUklfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwQSxcbiAgICBOVEZfTERTX1NJX1JJX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDBCLFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwQyxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDBELFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19JTkNPTlNJU1RFTlRfQUxHT1JJVEhNX1JFRkVSRU5DRTogMHg5MTAwMDAwRSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDAsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19TVERfUEFSQU1FVEVSUzogMHg5MTAwMDEwMSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX01BVENISU5HX0RPTUFJTl9QQVJBTVM6IDB4OTEwMDAxMDIsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwMyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT19SRVFVSVJFRF9PUFRJT046IDB4OTEwMDAxMDQsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0RPTUFJTl9QQVJBTVNfTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwNSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfQU5PTllNT1VTX0lORk9TOiAweDkxMDAwMTA2LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX0RPTUFJTl9QQVJBTVM6IDB4OTEwMDAxMDcsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfUFVCTElDX0tFWTogMHg5MTAwMDEwOCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5DT1JSRUNUX0lORk9TX1FVQU5USVRZOiAweDkxMDAwMTA5LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9UQV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMEEsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBUkRfSU5GT19MT0NBVE9SX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEIsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0VJRF9TRUNVUklUWV9JTkZPX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEMsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwRCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9JTkNPUlJFQ1RfVVNBR0U6IDB4OTEwMDAxMEUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1JJX0RPTUFJTl9QQVJBTVNfTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwRixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPU19OT05fQ09OU0lTVEFOVDogMHg5MTAwMDExMCxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1BST0ZJTEVfSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAyMDEsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MTAwMDIwMixcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX05PTl9DVl9DQV9ET01BSU5fUEFSQU1FVEVSUzogMHg5MTAwMDIwMyxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMjA0LFxuICAgIE5URl9MRFNfVEFfUEFDRV9TVEFUSUNfQklORElOR19VU0VEOiAweDkxMDAwMzAwLFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MjAwMDExNSxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogMHg5MjAwMDExNixcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6IDB4OTIwMDAxMTcsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6IDB4OTIwMDAxMTgsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAweDkyMDAwMTE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9DSEFJTl9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI1MCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVklTVUFMX01SWl9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI1MSxcbiAgICBOVEZfTERTX01SWl9DT1VOVFJZQ09ERV9WSVNVQUxNUlpfTk9OX01BVENISU5HOiAweDAwMDIyMDE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NUlpfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNTIsXG59XG5cbmV4cG9ydCBjb25zdCBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlID0ge1xuICAgIElRQ19JTUFHRV9HTEFSRVM6IDAsXG4gICAgSVFDX0lNQUdFX0ZPQ1VTOiAxLFxuICAgIElRQ19JTUFHRV9SRVNPTFVUSU9OOiAyLFxuICAgIElRQ19JTUFHRV9DT0xPUk5FU1M6IDMsXG4gICAgSVFDX1BFUlNQRUNUSVZFOiA0LFxuICAgIElRQ19CT1VORFM6IDUsXG4gICAgSVFDX1NDUkVFTl9DQVBUVVJFOiA2LFxuICAgIElRQ19QT1JUUkFJVDogNyxcbiAgICBJUUNfSEFORFdSSVRURU46IDgsXG4gICAgSVFDX0JSSUdIVE5FU1M6IDksXG59XG5cbmV4cG9ydCBjb25zdCBNUlpGb3JtYXQgPSB7XG4gICAgRk9STUFUXzFYMzA6IFwiMXgzMFwiLFxuICAgIEZPUk1BVF8zWDMwOiBcIjN4MzBcIixcbiAgICBGT1JNQVRfMlgzNjogXCIyeDM2XCIsXG4gICAgRk9STUFUXzJYNDQ6IFwiMng0NFwiLFxuICAgIEZPUk1BVF8xWDY6IFwiMXg2XCIsXG4gICAgRk9STUFUXzJYMzA6IFwiMngzMFwiLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVR5cGUgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBCQ1RfQ09ERTEyODogMSxcbiAgICBDT0RFMzk6IDIsXG4gICAgRUFOODogMyxcbiAgICBJVEY6IDQsXG4gICAgUERGNDE3OiA1LFxuICAgIFNURjogNixcbiAgICBNVEY6IDcsXG4gICAgSUFUQTogOCxcbiAgICBDT0RBQkFSOiA5LFxuICAgIFVQQ0E6IDEwLFxuICAgIENPREU5MzogMTEsXG4gICAgVVBDRTogMTIsXG4gICAgRUFOMTM6IDEzLFxuICAgIFFSQ09ERTogMTQsXG4gICAgQVpURUM6IDE1LFxuICAgIERBVEFNQVRSSVg6IDE2LFxuICAgIEFMTF8xRDogMTcsXG4gICAgQ09ERTExOiAxOCxcbiAgICBKQUJDT0RFOiAxOSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JMQU5LOiAwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GSUxMOiAxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UTzogMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTVJaOiAzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUxTRV9MVU1JTkVTQ0VOQ0U6IDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fU0lNUExFOiA1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9TVEFUSUM6IDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX01VTFRJX1NUQVRJQzogNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfRElOQU1JQzogOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfSU5URVJSVVBURUQ6IDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX1NISUZURUQ6IDEwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX1NBTUVfQ09MT1JTOiAxMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9JUl9JTlZJU0lCTEU6IDEyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSVpFX0NIRUNLOiAxMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19HSE9TVDogMTQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfUkZJRDogMTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfVklTVUFMOiAxNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERTogMTcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQ0FNRVJBOiAxOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0NBTUVSQTogMjAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0dIT1NUX1BIT1RPOiAyMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0xFQVJfR0hPU1RfUEhPVE86IDIyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9JTlZJU0lCTEVfT0JKRUNUOiAyMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTE9XX0NPTlRSQVNUX09CSkVDVDogMjQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPTE9SOiAyNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0hBUEU6IDI2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT1JORVJTOiAyNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfT0NSOiAyOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9FWFRWU19WSVNVQUw6IDI5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX1JGSUQ6IDMwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX0xJVkU6IDMxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19ERVBUSDogMzIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01JQ1JPVEVYVDogMzMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZMVU9SRVNDRU5UX09CSkVDVDogMzQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xBTkRNQVJLU19DSEVDSzogMzUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBQ0VfUFJFU0VOQ0U6IDM2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUNFX0FCU0VOQ0U6IDM4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19TQ1JFRU5fQ0FQVFVSRTogMzksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0VMRUNUUk9OSUNfREVWSUNFOiA0MCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfT1ZJOiA0MSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERV9TSVpFX0NIRUNLOiA0MixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTEFTX0lOSzogNDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX01MSTogNDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0JBUkNPREVfQkFDS0dST1VORDogNDUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQkFSQ09ERTogNDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fUkZJRF9WU19CQVJDT0RFOiA0NyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9FWFRfVlNfQkFSQ09ERTogNDgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fQkFSQ09ERV9WU19DQU1FUkE6IDQ5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DSEVDS19ESUdJVEFMX1NJR05BVFVSRTogNTAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NPTlRBQ1RfQ0hJUF9DTEFTU0lGSUNBVElPTjogNTEsXG59XG5cbmV4cG9ydCBjb25zdCBPbmxpbmVNb2RlID0ge1xuICAgIE1BTlVBTDogMCxcbiAgICBBVVRPOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZGlEb2NUeXBlID0ge1xuICAgIGR0Tm90RGVmaW5lZDogMCxcbiAgICBkdFBhc3Nwb3J0OiAxMSxcbiAgICBkdElkZW50aXR5Q2FyZDogMTIsXG4gICAgZHREaXBsb21hdGljUGFzc3BvcnQ6IDEzLFxuICAgIGR0U2VydmljZVBhc3Nwb3J0OiAxNCxcbiAgICBkdFNlYW1hbklkZW50aXR5RG9jdW1lbnQ6IDE1LFxuICAgIGR0SWRlbnRpdHlDYXJkRm9yUmVzaWRlbmNlOiAxNixcbiAgICBkdFRyYXZlbERvY3VtZW50OiAxNyxcbiAgICBkdE90aGVyOiA5OSxcbiAgICBkdFZpc2FJRDI6IDI5LFxuICAgIGR0VmlzYUlEMzogMzAsXG4gICAgZHRSZWdpc3RyYXRpb25DZXJ0aWZpY2F0ZTogMjA2LFxuICAgIGR0TmF0aW9uYWxJZGVudGl0eUNhcmQ6IDIwLFxuICAgIGR0U29jaWFsSWRlbnRpdHlDYXJkOiAyMSxcbiAgICBkdEFsaWVuc0lkZW50aXR5Q2FyZDogMjIsXG4gICAgZHRQcml2aWxlZ2VkSWRlbnRpdHlDYXJkOiAyMyxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdElkZW50aXR5Q2FyZDogMjQsXG4gICAgZHRPcmlnaW5DYXJkOiAyNSxcbiAgICBkdEVtZXJnZW5jeVBhc3Nwb3J0OiAyNixcbiAgICBkdEFsaWVuc1Bhc3Nwb3J0OiAyNyxcbiAgICBkdEFsdGVybmF0aXZlSWRlbnRpdHlDYXJkOiAyOCxcbiAgICBkdEF1dGhvcml6YXRpb25DYXJkOiAzMixcbiAgICBkdEJlZ2lubmVyUGVybWl0OiAzMyxcbiAgICBkdEJvcmRlckNyb3NzaW5nQ2FyZDogMzQsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlOiAzNSxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiAzNixcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiAzNyxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMzgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5zdHJ1Y3Rpb25QZXJtaXQ6IDQyLFxuICAgIGR0Q29tbWVyY2lhbE5ld1Blcm1pdDogNDMsXG4gICAgZHRDb25jZWFsZWRDYXJyeUxpY2Vuc2U6IDQ0LFxuICAgIGR0Q29uY2VhbGVkRmlyZWFybVBlcm1pdDogNDUsXG4gICAgZHRDb25kaXRpb25hbERyaXZpbmdMaWNlbnNlOiA0NixcbiAgICBkdERlcGFydG1lbnRPZlZldGVyYW5zQWZmYWlyc0lkZW50aXR5Q2FyZDogNDcsXG4gICAgZHREaXBsb21hdGljRHJpdmluZ0xpY2Vuc2U6IDQ4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2U6IDQ5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiA1MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0VW5kZXIyMTogNTIsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0OiA1MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjE4OiA1NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjIxOiA1NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlOiA1NixcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogNTcsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDU4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWdpc3RlcmVkT2ZmZW5kZXI6IDU5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIxODogNjAsXG4gICAgZHREcml2aW5nTGljZW5zZVJlc3RyaWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogODYsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMjE6IDg3LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMTg6IDg4LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMjE6IDg5LFxuICAgIGR0SGFuZGd1bkNhcnJ5UGVybWl0OiA5MCxcbiAgICBkdElkZW50aXR5QW5kUHJpdmlsZWdlQ2FyZDogOTEsXG4gICAgZHRJZGVudGl0eUNhcmRNb2JpbGl0eUltcGFpcmVkOiA5MixcbiAgICBkdElkZW50aXR5Q2FyZFJlZ2lzdGVyZWRPZmZlbmRlcjogOTMsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yOiA5NCxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA5NSxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA5NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTg6IDk3LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIyMTogOTgsXG4gICAgZHRJZ25pdGlvbkludGVybG9ja1Blcm1pdDogMTAwLFxuICAgIGR0SW1taWdyYW50VmlzYTogMTAxLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogMTAzLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiAxMDQsXG4gICAgZHRJbnRlcmltRHJpdmluZ0xpY2Vuc2U6IDEwNSxcbiAgICBkdEludGVyaW1JZGVudGl0eUNhcmQ6IDEwNixcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlOiAxMDcsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEwOCxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTA5LFxuICAgIGR0SnVuaW9yRHJpdmluZ0xpY2Vuc2U6IDExMCxcbiAgICBkdExlYXJuZXJJbnN0cnVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlc3RyaWN0ZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDE0OCxcbiAgICBkdFJlc3RyaWN0ZWREcml2aW5nTGljZW5zZTogMTQ5LFxuICAgIGR0UmVzdHJpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZDogMTYwLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjE4OiAxNjEsXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lzdHJhdGlvbkNhcmQ6IDE4NSxcbiAgICBkdEFQRUhDYXJkOiAxODYsXG4gICAgZHRDb3Vwb25Ub0RyaXZpbmdMaWNlbnNlOiAxODcsXG4gICAgZHRDcmV3TWVtYmVyQ2VydGlmaWNhdGU6IDE4OCxcbiAgICBkdERvY3VtZW50Rm9yUmV0dXJuOiAxODksXG4gICAgZHRFQ2FyZDogMTkwLFxuICAgIGR0RW1wbG95bWVudENhcmQ6IDE5MSxcbiAgICBkdEhLU0FSSW1taWdyYXRpb25Gb3JtOiAxOTIsXG4gICAgZHRJbW1pZ3JhbnRDYXJkOiAxOTMsXG4gICAgZHRMYWJvdXJDYXJkOiAxOTQsXG4gICAgZHRMYWlzc2V6UGFzc2VyOiAxOTUsXG4gICAgZHRMYXd5ZXJJZGVudGl0eUNlcnRpZmljYXRlOiAxOTYsXG4gICAgZHRMaWNlbnNlQ2FyZDogMTk3LFxuICAgIGR0UGFzc3BvcnRTdGF0ZWxlc3M6IDE5OCxcbiAgICBkdFBhc3Nwb3J0Q2hpbGQ6IDE5OSxcbiAgICBkdFBhc3Nwb3J0Q29uc3VsYXI6IDIwMCxcbiAgICBkdFBhc3Nwb3J0RGlwbG9tYXRpY1NlcnZpY2U6IDIwMSxcbiAgICBkdFBhc3Nwb3J0T2ZmaWNpYWw6IDIwMixcbiAgICBkdFBhc3Nwb3J0UHJvdmlzaW9uYWw6IDIwMyxcbiAgICBkdFBhc3Nwb3J0U3BlY2lhbDogMjA0LFxuICAgIGR0UGVybWlzc2lvblRvVGhlTG9jYWxCb3JkZXJUcmFmZmljOiAyMDUsXG4gICAgZHRTRURFU09MQ2FyZDogMjA3LFxuICAgIGR0U29jaWFsQ2FyZDogMjA4LFxuICAgIGR0VEJDYXJkOiAyMDksXG4gICAgZHRWZWhpY2xlUGFzc3BvcnQ6IDIxMCxcbiAgICBkdFdEb2N1bWVudDogMjExLFxuICAgIGR0RGlwbG9tYXRpY0lkZW50aXR5Q2FyZDogMjEyLFxuICAgIGR0Q29uc3VsYXJJZGVudGl0eUNhcmQ6IDIxMyxcbiAgICBkdEluY29tZVRheENhcmQ6IDIxNCxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdDogMjE1LFxuICAgIGR0RG9jdW1lbnRPZklkZW50aXR5OiAyMTYsXG4gICAgZHRCb3JkZXJDcm9zc2luZ1Blcm1pdDogMjE3LFxuICAgIGR0UGFzc3BvcnRMaW1pdGVkVmFsaWRpdHk6IDIxOCxcbiAgICBkdFNJTUNhcmQ6IDIxOSxcbiAgICBkdFRheENhcmQ6IDIyMCxcbiAgICBkdENvbXBhbnlDYXJkOiAyMjEsXG4gICAgZHREb21lc3RpY1Bhc3Nwb3J0OiAyMjIsXG4gICAgZHRJZGVudGl0eUNlcnRpZmljYXRlOiAyMjMsXG4gICAgZHRSZXNpZGVudElkQ2FyZDogMjI0LFxuICAgIGR0QXJtZWRGb3JjZXNJZGVudGl0eUNhcmQ6IDIyNSxcbiAgICBkdFByb2Zlc3Npb25hbENhcmQ6IDIyNixcbiAgICBkdFJlZ2lzdHJhdGlvblN0YW1wOiAyMjcsXG4gICAgZHREcml2ZXJDYXJkOiAyMjgsXG4gICAgZHREcml2ZXJUcmFpbmluZ0NlcnRpZmljYXRlOiAyMjksXG4gICAgZHRRdWFsaWZpY2F0aW9uRHJpdmluZ0xpY2Vuc2U6IDIzMCxcbiAgICBkdE1lbWJlcnNoaXBDYXJkOiAyMzEsXG4gICAgZHRQdWJsaWNWZWhpY2xlRHJpdmVyQXV0aG9yaXR5Q2FyZDogMjMyLFxuICAgIGR0TWFyaW5lTGljZW5zZTogMjMzLFxuICAgIGR0VGVtcG9yYXJ5TGVhcm5lckRyaXZpbmdMaWNlbnNlOiAyMzQsXG4gICAgZHRUZW1wb3JhcnlDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDIzNSxcbiAgICBkdEludGVyaW1JbnN0cnVjdGlvbmFsUGVybWl0OiAyMzYsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ29tcGV0ZW5jeTogMjM3LFxuICAgIGR0Q2VydGlmaWNhdGVPZlByb2ZpY2llbmN5OiAyMzgsXG4gICAgZHRUcmFkZUxpY2Vuc2U6IDIzOSxcbiAgICBkdFBhc3Nwb3J0UGFnZTogMjQwLFxuICAgIGR0SW52b2ljZTogMjQxLFxuICAgIGR0UGFzc2VuZ2VyTG9jYXRvckZvcm06IDI0Mixcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRhZyA9IHtcbiAgICBDTE9TRTogMTAwMSxcbiAgICBUT1JDSDogMTAwMixcbiAgICBDQVBUVVJFOiAxMDAzLFxuICAgIENIQU5HRV9GUkFNRTogMTAwNCxcbiAgICBTS0lQOiAxMDA1LFxuICAgIENBTUVSQV9TV0lUQ0g6IDEwMDYsXG59XG5cbmV4cG9ydCBjb25zdCBIb2xvQW5pbWF0aW9uVHlwZSA9IHtcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25Vbmtub3duOiAwLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVIb3Jpem9udGFsOiAxLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVWZXJ0aWNhbDogMixcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlTGVmdEJvdHRvbVJpZ2h0VG9wOiA0LFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVSaWdodEJvdHRvbUxlZnRUb3A6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBlUmVxdWVzdENvbW1hbmQgPSB7XG4gICAgZVJlcUNtZF9SRmlkX1NlbmREYXRhOiAxMDAsXG4gICAgZVJlcUNtZF9SRmlkX05vdGlmeTogMTAxLFxuICAgIGVSZXFDbWRfUkZpZF9HZXREYXRhRm9yU2NlbmFyaW86IDEwMixcbiAgICBlUmVxQ21kX1RvcmNoX0dldFVWRm90bzogMjAwLFxuICAgIGVSZXFDbWRfSW50ZXJuZXRTZW5kOiAzMDAsXG4gICAgZVJlcUNtZF9HZXRHdWlkOiA0MDAsXG4gICAgZVJlcUNtZF9XbHRUb0ltYWdlOiA0MDEsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uRm9udCA9IHtcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0hJTlRfTEFCRUw6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0xBQkVMOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUkVTVUxUX0xBQkVMOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlRm9ybWF0ID0ge1xuICAgIFBORzogMCxcbiAgICBKUEc6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlR3JhcGhpY0ZpZWxkVHlwZSA9IHtcbiAgICBHRl9QT1JUUkFJVDogMjAxLFxuICAgIEdGX0ZJTkdFUlBSOiAyMDIsXG4gICAgR0ZfRVlFOiAyMDMsXG4gICAgR0ZfU0lHTkFUVVJFOiAyMDQsXG4gICAgR0ZfQkFSX0NPREU6IDIwNSxcbiAgICBHRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDogMjA2LFxuICAgIEdGX0RPQ1VNRU5UX0lNQUdFOiAyMDcsXG4gICAgR0ZfQ09MT1JfRFlOQU1JQzogMjA5LFxuICAgIEdGX0dIT1NUX1BPUlRSQUlUOiAyMTAsXG4gICAgR0ZfU1RBTVA6IDIxMSxcbiAgICBHRl9QT1JUUkFJVF9PRl9DSElMRDogMjEyLFxuICAgIEdGX0NPTlRBQ1RfQ0hJUDogMjEzLFxuICAgIEdGX09USEVSOiAyNTAsXG4gICAgR0ZfRklOR0VSX0xFRlRfVEhVTUI6IDMwMCxcbiAgICBHRl9GSU5HRVJfTEVGVF9JTkRFWDogMzAxLFxuICAgIEdGX0ZJTkdFUl9MRUZUX01JRERMRTogMzAyLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1JJTkc6IDMwMyxcbiAgICBHRl9GSU5HRVJfTEVGVF9MSVRUTEU6IDMwNCxcbiAgICBHRl9GSU5HRVJfUklHSFRfVEhVTUI6IDMwNSxcbiAgICBHRl9GSU5HRVJfUklHSFRfSU5ERVg6IDMwNixcbiAgICBHRl9GSU5HRVJfUklHSFRfTUlERExFOiAzMDcsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1JJTkc6IDMwOCxcbiAgICBHRl9GSU5HRVJfUklHSFRfTElUVExFOiAzMDksXG59XG5cbmV4cG9ydCBjb25zdCBSZWdEZXZpY2VDb25maWdUeXBlID0ge1xuICAgIERFVklDRV83MzEwOiBcIkRFVklDRV83MzEwXCIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlU2Vzc2lvblByZXNldCA9IHtcbiAgICBVTktOT1dOOiAtMSxcbiAgICBMT1c6IDAsXG4gICAgTUVESVVNOiAxLFxuICAgIEhJR0g6IDIsXG4gICAgUEhPVE86IDMsXG4gICAgSU5QVVRfUFJJT1JJVFk6IDQsXG4gICAgUFJFU0VUXzEyODB4NzIwOiA2LFxuICAgIFBSRVNFVF8xOTIweDEwODA6IDcsXG4gICAgUFJFU0VUXzM4NDB4MjE2MDogOCxcbiAgICBGUkFNRV85NjB4NTQwOiA5LFxuICAgIEZSQU1FXzEyODB4NzIwOiAxMCxcbiAgICBQUkVTRVRfNjQweDQ4MDogMTIsXG4gICAgUFJFU0VUXzM1MngyODg6IDEzLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FQVFVSRV9WSURFTzogMSxcbiAgICBDQVBUVVJFX0ZSQU1FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrUmVzdWx0ID0ge1xuICAgIENIX0NIRUNLX0VSUk9SOiAwLFxuICAgIENIX0NIRUNLX09LOiAxLFxuICAgIENIX0NIRUNLX1dBU19OT1RfRE9ORTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Rlcm1pbmFsVHlwZSA9IHtcbiAgICBURVRfVU5ERUZJTkVEOiAwLFxuICAgIFRFVF9JTlNQRUNUSU9OX1NZU1RFTTogMSxcbiAgICBURVRfQVVUSEVOVElDQVRJT05fVEVSTUlOQUw6IDIsXG4gICAgVEVUX1NJR05BVFVSRV9URVJNSU5BTDogMyxcbiAgICBURVRfVU5BVVRIRU5USUNBVEVEX1RFUk1JTkFMOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRGF0YUZpbGVfVHlwZSA9IHtcbiAgICBERlRfVU5TUEVDSUZJRUQ6IDAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTogMSxcbiAgICBERlRfUEFTU1BPUlRfREcyOiAyLFxuICAgIERGVF9QQVNTUE9SVF9ERzM6IDMsXG4gICAgREZUX1BBU1NQT1JUX0RHNDogNCxcbiAgICBERlRfUEFTU1BPUlRfREc1OiA1LFxuICAgIERGVF9QQVNTUE9SVF9ERzY6IDYsXG4gICAgREZUX1BBU1NQT1JUX0RHNzogNyxcbiAgICBERlRfUEFTU1BPUlRfREc4OiA4LFxuICAgIERGVF9QQVNTUE9SVF9ERzk6IDksXG4gICAgREZUX1BBU1NQT1JUX0RHMTA6IDEwLFxuICAgIERGVF9QQVNTUE9SVF9ERzExOiAxMSxcbiAgICBERlRfUEFTU1BPUlRfREcxMjogMTIsXG4gICAgREZUX1BBU1NQT1JUX0RHMTM6IDEzLFxuICAgIERGVF9QQVNTUE9SVF9ERzE0OiAxNCxcbiAgICBERlRfUEFTU1BPUlRfREcxNTogMTUsXG4gICAgREZUX1BBU1NQT1JUX0RHMTY6IDE2LFxuICAgIERGVF9QQVNTUE9SVF9ERzE3OiAxNyxcbiAgICBERlRfUEFTU1BPUlRfREcxODogMTgsXG4gICAgREZUX1BBU1NQT1JUX0RHMTk6IDE5LFxuICAgIERGVF9QQVNTUE9SVF9ERzIwOiAyMCxcbiAgICBERlRfUEFTU1BPUlRfU09EOiAyMSxcbiAgICBERlRfUEFTU1BPUlRfQ1ZDQTogMjIsXG4gICAgREZUX1BBU1NQT1JUX0NPTTogMjMsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MDAgKyAzMixcbiAgICBERlRfVkRTOiA5MDAsXG4gICAgREZUX1ZEU05DOiA5MDEsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVZpc3VhbEZpZWxkVHlwZSA9IHtcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19DT0RFOiAwLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERTogMSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVI6IDIsXG4gICAgRlRfREFURV9PRl9FWFBJUlk6IDMsXG4gICAgRlRfREFURV9PRl9JU1NVRTogNCxcbiAgICBGVF9EQVRFX09GX0JJUlRIOiA1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIOiA2LFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUjogNyxcbiAgICBGVF9TVVJOQU1FOiA4LFxuICAgIEZUX0dJVkVOX05BTUVTOiA5LFxuICAgIEZUX01PVEhFUlNfTkFNRTogMTAsXG4gICAgRlRfTkFUSU9OQUxJVFk6IDExLFxuICAgIEZUX1NFWDogMTIsXG4gICAgRlRfSEVJR0hUOiAxMyxcbiAgICBGVF9XRUlHSFQ6IDE0LFxuICAgIEZUX0VZRVNfQ09MT1I6IDE1LFxuICAgIEZUX0hBSVJfQ09MT1I6IDE2LFxuICAgIEZUX0FERFJFU1M6IDE3LFxuICAgIEZUX0RPTk9SOiAxOCxcbiAgICBGVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxOSxcbiAgICBGVF9ETF9DTEFTUzogMjAsXG4gICAgRlRfRExfRU5ET1JTRUQ6IDIxLFxuICAgIEZUX0RMX1JFU1RSSUNUSU9OX0NPREU6IDIyLFxuICAgIEZUX0RMX1VOREVSXzIxX0RBVEU6IDIzLFxuICAgIEZUX0FVVEhPUklUWTogMjQsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDI1LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREU6IDI2LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUjogMjcsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVI6IDI4LFxuICAgIEZUX1ZJU0FfSUQ6IDI5LFxuICAgIEZUX1ZJU0FfQ0xBU1M6IDMwLFxuICAgIEZUX1ZJU0FfU1VCX0NMQVNTOiAzMSxcbiAgICBGVF9NUlpfU1RSSU5HXzE6IDMyLFxuICAgIEZUX01SWl9TVFJJTkdfMjogMzMsXG4gICAgRlRfTVJaX1NUUklOR18zOiAzNCxcbiAgICBGVF9NUlpfVFlQRTogMzUsXG4gICAgRlRfT1BUSU9OQUxfREFUQTogMzYsXG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTogMzcsXG4gICAgRlRfSVNTVUlOR19TVEFURV9OQU1FOiAzOCxcbiAgICBGVF9QTEFDRV9PRl9JU1NVRTogMzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOiA0MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOiA0MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTogNDIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOiA0MyxcbiAgICBGVF9GSU5BTF9DSEVDS1NVTTogNDQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOiA0NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTogNDYsXG4gICAgRlRfVklTQV9JRF9DSEVDS1NVTTogNDcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06IDQ4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06IDQ5LFxuICAgIEZUX09USEVSOiA1MCxcbiAgICBGVF9NUlpfU1RSSU5HUzogNTEsXG4gICAgRlRfTkFNRV9TVUZGSVg6IDUyLFxuICAgIEZUX05BTUVfUFJFRklYOiA1MyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOiA1NCxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOiA1NSxcbiAgICBGVF9ET0NVTUVOVF9TRVJJRVM6IDU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVI6IDU3LFxuICAgIEZUX1JFR19DRVJUX0NBUl9NT0RFTDogNTgsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOiA1OSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjogNjAsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX1RZUEU6IDYxLFxuICAgIEZUX1JFR19DRVJUX01BWF9XRUlHSFQ6IDYyLFxuICAgIEZUX1JFR19DRVJUX1dFSUdIVDogNjMsXG4gICAgRlRfQUREUkVTU19BUkVBOiA2NCxcbiAgICBGVF9BRERSRVNTX1NUQVRFOiA2NSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HOiA2NixcbiAgICBGVF9BRERSRVNTX0hPVVNFOiA2NyxcbiAgICBGVF9BRERSRVNTX0ZMQVQ6IDY4LFxuICAgIEZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjogNjksXG4gICAgRlRfREFURV9PRl9SRUdJU1RSQVRJT046IDcwLFxuICAgIEZUX1JFU0lERU5UX0ZST006IDcxLFxuICAgIEZUX1JFU0lERU5UX1VOVElMOiA3MixcbiAgICBGVF9BVVRIT1JJVFlfQ09ERTogNzMsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTogNzQsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTogNzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVQ6IDc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWTogNzcsXG4gICAgRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogNzgsXG4gICAgRlRfQUREUkVTU19QT1NUQUxfQ09ERTogNzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOiA4MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDogODIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MyxcbiAgICBGVF9GSU5BTF9DSEVDS19ESUdJVDogODQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDogODYsXG4gICAgRlRfVklTQV9JRF9DSEVDS19ESUdJVDogODcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6IDg4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6IDg5LFxuICAgIEZUX1BFUk1JVF9ETF9DTEFTUzogOTAsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOiA5MSxcbiAgICBGVF9QRVJNSVRfSURFTlRJRklFUjogOTIsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6IDkzLFxuICAgIEZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOiA5NCxcbiAgICBGVF9QRVJNSVRfRU5ET1JTRUQ6IDk1LFxuICAgIEZUX0lTU1VFX1RJTUVTVEFNUDogOTYsXG4gICAgRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6IDk3LFxuICAgIEZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOiA5OCxcbiAgICBGVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOiA5OSxcbiAgICBGVF9WSVNBX1RZUEU6IDEwMCxcbiAgICBGVF9WSVNBX1ZBTElEX0ZST006IDEwMSxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMOiAxMDIsXG4gICAgRlRfRFVSQVRJT05fT0ZfU1RBWTogMTAzLFxuICAgIEZUX05VTUJFUl9PRl9FTlRSSUVTOiAxMDQsXG4gICAgRlRfREFZOiAxMDUsXG4gICAgRlRfTU9OVEg6IDEwNixcbiAgICBGVF9ZRUFSOiAxMDcsXG4gICAgRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6IDEwOCxcbiAgICBGVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6IDEwOSxcbiAgICBGVF9BS0FfREFURV9PRl9CSVJUSDogMTEwLFxuICAgIEZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxMTEsXG4gICAgRlRfQUtBX1NVUk5BTUU6IDExMixcbiAgICBGVF9BS0FfR0lWRU5fTkFNRVM6IDExMyxcbiAgICBGVF9BS0FfTkFNRV9TVUZGSVg6IDExNCxcbiAgICBGVF9BS0FfTkFNRV9QUkVGSVg6IDExNSxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOiAxMTYsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0NJVFk6IDExNyxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDExOCxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6IDExOSxcbiAgICBGVF9BVURJVF9JTkZPUk1BVElPTjogMTIwLFxuICAgIEZUX0lOVkVOVE9SWV9OVU1CRVI6IDEyMSxcbiAgICBGVF9SQUNFX0VUSE5JQ0lUWTogMTIyLFxuICAgIEZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOiAxMjMsXG4gICAgRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6IDEyNCxcbiAgICBGVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTogMTI1LFxuICAgIEZUX0ZBTUlMWV9OQU1FOiAxMjYsXG4gICAgRlRfR0lWRU5fTkFNRVNfUlVTOiAxMjcsXG4gICAgRlRfVklTQV9JRF9SVVM6IDEyOCxcbiAgICBGVF9GQVRIRVJTX05BTUU6IDEyOSxcbiAgICBGVF9GQVRIRVJTX05BTUVfUlVTOiAxMzAsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOiAxMzEsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfUlVTOiAxMzIsXG4gICAgRlRfQVVUSE9SSVRZX1JVUzogMTMzLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOiAxMzQsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOiAxMzUsXG4gICAgRlRfRU5HSU5FX1BPV0VSOiAxMzYsXG4gICAgRlRfRU5HSU5FX1ZPTFVNRTogMTM3LFxuICAgIEZUX0NIQVNTSVNfTlVNQkVSOiAxMzgsXG4gICAgRlRfRU5HSU5FX05VTUJFUjogMTM5LFxuICAgIEZUX0VOR0lORV9NT0RFTDogMTQwLFxuICAgIEZUX1ZFSElDTEVfQ0FURUdPUlk6IDE0MSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUjogMTQyLFxuICAgIEZUX0NPTlRST0xfTk86IDE0MyxcbiAgICBGVF9QQVJSRU5UU19HSVZFTl9OQU1FUzogMTQ0LFxuICAgIEZUX1NFQ09ORF9TVVJOQU1FOiAxNDUsXG4gICAgRlRfTUlERExFX05BTUU6IDE0NixcbiAgICBGVF9SRUdfQ0VSVF9WSU46IDE0NyxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6IDE0OCxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06IDE0OSxcbiAgICBGVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6IDE1MCxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6IDE1MSxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6IDE1MixcbiAgICBGVF9MSU5FXzFfQ0hFQ0tTVU06IDE1MyxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tTVU06IDE1NCxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tTVU06IDE1NSxcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOiAxNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTogMTU3LFxuICAgIEZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6IDE1OCxcbiAgICBGVF9DQVJEX0FDQ0VTU19OVU1CRVI6IDE1OSxcbiAgICBGVF9NQVJJVEFMX1NUQVRVUzogMTYwLFxuICAgIEZUX0NPTVBBTllfTkFNRTogMTYxLFxuICAgIEZUX1NQRUNJQUxfTk9URVM6IDE2MixcbiAgICBGVF9TVVJOQU1FX09GX1NQT1NFOiAxNjMsXG4gICAgRlRfVFJBQ0tJTkdfTlVNQkVSOiAxNjQsXG4gICAgRlRfQk9PS0xFVF9OVU1CRVI6IDE2NSxcbiAgICBGVF9DSElMRFJFTjogMTY2LFxuICAgIEZUX0NPUFk6IDE2NyxcbiAgICBGVF9TRVJJQUxfTlVNQkVSOiAxNjgsXG4gICAgRlRfRE9TU0lFUl9OVU1CRVI6IDE2OSxcbiAgICBGVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDE3MCxcbiAgICBGVF9URVJSSVRPUklBTF9WQUxJRElUWTogMTcxLFxuICAgIEZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOiAxNzIsXG4gICAgRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6IDE3MyxcbiAgICBGVF9ETF9VTkRFUl8xOF9EQVRFOiAxNzQsXG4gICAgRlRfRExfUkVDT1JEX0NSRUFURUQ6IDE3NSxcbiAgICBGVF9ETF9EVVBMSUNBVEVfREFURTogMTc2LFxuICAgIEZUX0RMX0lTU19UWVBFOiAxNzcsXG4gICAgRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6IDE3OCxcbiAgICBGVF9ERVNUSU5BVElPTjogMTc5LFxuICAgIEZUX0JMT09EX0dST1VQOiAxODAsXG4gICAgRlRfU0VRVUVOQ0VfTlVNQkVSOiAxODEsXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9UWVBFOiAxODIsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01BUks6IDE4MyxcbiAgICBGVF9UUkFOU0FDVElPTl9OVU1CRVI6IDE4NCxcbiAgICBGVF9BR0U6IDE4NSxcbiAgICBGVF9GT0xJT19OVU1CRVI6IDE4NixcbiAgICBGVF9WT1RFUl9LRVk6IDE4NyxcbiAgICBGVF9BRERSRVNTX01VTklDSVBBTElUWTogMTg4LFxuICAgIEZUX0FERFJFU1NfTE9DQVRJT046IDE4OSxcbiAgICBGVF9TRUNUSU9OOiAxOTAsXG4gICAgRlRfT0NSX05VTUJFUjogMTkxLFxuICAgIEZUX0ZFREVSQUxfRUxFQ1RJT05TOiAxOTIsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUjogMTkzLFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06IDE5NCxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOiAxOTUsXG4gICAgRlRfVklTQV9OVU1CRVI6IDE5NixcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS1NVTTogMTk3LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOiAxOTgsXG4gICAgRlRfVk9URVI6IDE5OSxcbiAgICBGVF9QUkVWSU9VU19UWVBFOiAyMDAsXG4gICAgRlRfRklFTERfRlJPTV9NUlo6IDIyMCxcbiAgICBGVF9DVVJSRU5UX0RBVEU6IDIyMSxcbiAgICBGVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6IDI1MSxcbiAgICBGVF9CQU5LTk9URV9OVU1CRVI6IDI1MixcbiAgICBGVF9DU0NfQ09ERTogMjUzLFxuICAgIEZUX0FSVElTVElDX05BTUU6IDI1NCxcbiAgICBGVF9BQ0FERU1JQ19USVRMRTogMjU1LFxuICAgIEZUX0FERFJFU1NfQ09VTlRSWTogMjU2LFxuICAgIEZUX0FERFJFU1NfWklQQ09ERTogMjU3LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOiAyNTgsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6IDI1OSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDogMjYwLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTogMjYxLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6IDI2MixcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6IDI2MyxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6IDI2NCxcbiAgICBGVF9DRExfQ0xBU1M6IDI2NSxcbiAgICBGVF9ETF9VTkRFUl8xOV9EQVRFOiAyNjYsXG4gICAgRlRfV0VJR0hUX1BPVU5EUzogMjY3LFxuICAgIEZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOiAyNjgsXG4gICAgRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOiAyNjksXG4gICAgRlRfUkVWSVNJT05fREFURTogMjcwLFxuICAgIEZUX0NPTVBMSUFOQ0VfVFlQRTogMjcxLFxuICAgIEZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046IDI3MixcbiAgICBGVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046IDI3MyxcbiAgICBGVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOiAyNzQsXG4gICAgRlRfRVhBTV9EQVRFOiAyNzUsXG4gICAgRlRfT1JHQU5JWkFUSU9OOiAyNzYsXG4gICAgRlRfREVQQVJUTUVOVDogMjc3LFxuICAgIEZUX1BBWV9HUkFERTogMjc4LFxuICAgIEZUX1JBTks6IDI3OSxcbiAgICBGVF9CRU5FRklUU19OVU1CRVI6IDI4MCxcbiAgICBGVF9TUE9OU09SX1NFUlZJQ0U6IDI4MSxcbiAgICBGVF9TUE9OU09SX1NUQVRVUzogMjgyLFxuICAgIEZUX1NQT05TT1I6IDI4MyxcbiAgICBGVF9SRUxBVElPTlNISVA6IDI4NCxcbiAgICBGVF9VU0NJUzogMjg1LFxuICAgIEZUX0NBVEVHT1JZOiAyODYsXG4gICAgRlRfQ09ORElUSU9OUzogMjg3LFxuICAgIEZUX0lERU5USUZJRVI6IDI4OCxcbiAgICBGVF9DT05GSUdVUkFUSU9OOiAyODksXG4gICAgRlRfRElTQ1JFVElPTkFSWV9EQVRBOiAyOTAsXG4gICAgRlRfTElORV8xX09QVElPTkFMX0RBVEE6IDI5MSxcbiAgICBGVF9MSU5FXzJfT1BUSU9OQUxfREFUQTogMjkyLFxuICAgIEZUX0xJTkVfM19PUFRJT05BTF9EQVRBOiAyOTMsXG4gICAgRlRfRVFWX0NPREU6IDI5NCxcbiAgICBGVF9BTFRfQ09ERTogMjk1LFxuICAgIEZUX0JJTkFSWV9DT0RFOiAyOTYsXG4gICAgRlRfUFNFVURPX0NPREU6IDI5NyxcbiAgICBGVF9GRUU6IDI5OCxcbiAgICBGVF9TVEFNUF9OVU1CRVI6IDI5OSxcbiAgICBGVF9TQkhfU0VDVVJJVFlPUFRJT05TOiAzMDAsXG4gICAgRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6IDMwMSxcbiAgICBGVF9EQVRFX09GX0NSRUFUSU9OOiAzMDIsXG4gICAgRlRfVkFMSURJVFlfUEVSSU9EOiAzMDMsXG4gICAgRlRfUEFUUk9OX0hFQURFUl9WRVJTSU9OOiAzMDQsXG4gICAgRlRfQkRCX1RZUEU6IDMwNSxcbiAgICBGVF9CSU9NRVRSSUNfVFlQRTogMzA2LFxuICAgIEZUX0JJT01FVFJJQ19TVUJUWVBFOiAzMDcsXG4gICAgRlRfQklPTUVUUklDX1BST0RVQ1RJRDogMzA4LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6IDMwOSxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX1RZUEU6IDMxMCxcbiAgICBGVF9QSE9ORTogMzExLFxuICAgIEZUX1BST0ZFU1NJT046IDMxMixcbiAgICBGVF9USVRMRTogMzEzLFxuICAgIEZUX1BFUlNPTkFMX1NVTU1BUlk6IDMxNCxcbiAgICBGVF9PVEhFUl9WQUxJRF9JRDogMzE1LFxuICAgIEZUX0NVU1RPRFlfSU5GTzogMzE2LFxuICAgIEZUX09USEVSX05BTUU6IDMxNyxcbiAgICBGVF9PQlNFUlZBVElPTlM6IDMxOCxcbiAgICBGVF9UQVg6IDMxOSxcbiAgICBGVF9EQVRFX09GX1BFUlNPTkFMSVpBVElPTjogMzIwLFxuICAgIEZUX1BFUlNPTkFMSVpBVElPTl9TTjogMzIxLFxuICAgIEZUX09USEVSUEVSU09OX05BTUU6IDMyMixcbiAgICBGVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDogMzIzLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX05BTUU6IDMyNCxcbiAgICBGVF9QRVJTT05UT05PVElGWV9QSE9ORTogMzI1LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0FERFJFU1M6IDMyNixcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6IDMyNyxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOiAzMjgsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOiAzMjksXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURUTzogMzMwLFxuICAgIEZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOiAzMzEsXG4gICAgRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6IDMzMixcbiAgICBGVF9BRE1JTklTVFJBVElWRV9OVU1CRVI6IDMzMyxcbiAgICBGVF9ET0NVTUVOVF9ESVNDUklNSU5BVE9SOiAzMzQsXG4gICAgRlRfREFUQV9ESVNDUklNSU5BVE9SOiAzMzUsXG4gICAgRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6IDMzNixcbiAgICBGVF9HTklCX05VTUJFUjogMzQwLFxuICAgIEZUX0RFUFRfTlVNQkVSOiAzNDEsXG4gICAgRlRfVEVMRVhfQ09ERTogMzQyLFxuICAgIEZUX0FMTEVSR0lFUzogMzQzLFxuICAgIEZUX1NQX0NPREU6IDM0NCxcbiAgICBGVF9DT1VSVF9DT0RFOiAzNDUsXG4gICAgRlRfQ1RZOiAzNDYsXG4gICAgRlRfU1BPTlNPUl9TU046IDM0NyxcbiAgICBGVF9ET19EX05VTUJFUjogMzQ4LFxuICAgIEZUX01DX05PVklDRV9EQVRFOiAzNDksXG4gICAgRlRfRFVGX05VTUJFUjogMzUwLFxuICAgIEZUX0FHWTogMzUxLFxuICAgIEZUX1BOUl9DT0RFOiAzNTIsXG4gICAgRlRfRlJPTV9BSVJQT1JUX0NPREU6IDM1MyxcbiAgICBGVF9UT19BSVJQT1JUX0NPREU6IDM1NCxcbiAgICBGVF9GTElHSFRfTlVNQkVSOiAzNTUsXG4gICAgRlRfREFURV9PRl9GTElHSFQ6IDM1NixcbiAgICBGVF9TRUFUX05VTUJFUjogMzU3LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzogMzU4LFxuICAgIEZUX0NDV19VTlRJTDogMzU5LFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06IDM2MCxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNjEsXG4gICAgRlRfUk9PTV9OVU1CRVI6IDM2MixcbiAgICBGVF9SRUxJR0lPTjogMzYzLFxuICAgIEZUX1JFTUFJTkRFUl9URVJNOiAzNjQsXG4gICAgRlRfRUxFQ1RST05JQ19USUNLRVRfSU5ESUNBVE9SOiAzNjUsXG4gICAgRlRfQ09NUEFSVE1FTlRfQ09ERTogMzY2LFxuICAgIEZUX0NIRUNLX0lOX1NFUVVFTkNFX05VTUJFUjogMzY3LFxuICAgIEZUX0FJUkxJTkVfREVTSUdOQVRPUl9PRl9CT0FSRElOR19QQVNTX0lTU1VFUjogMzY4LFxuICAgIEZUX0FJUkxJTkVfTlVNRVJJQ19DT0RFOiAzNjksXG4gICAgRlRfVElDS0VUX05VTUJFUjogMzcwLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX0FJUkxJTkVfREVTSUdOQVRPUjogMzcxLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX05VTUJFUjogMzcyLFxuICAgIEZUX0ZSRUVfQkFHR0FHRV9BTExPV0FOQ0U6IDM3MyxcbiAgICBGVF9QREZfNDE3X0NPREVDOiAzNzQsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06IDM3NSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDogMzc2LFxuICAgIEZUX1ZFVEVSQU46IDM3NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9GUk9NOiAzNzgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfVE86IDM3OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9OT1RFUzogMzgwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOiAzODEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX1RPOiAzODIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX05PVEVTOiAzODMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX0ZST006IDM4NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfVE86IDM4NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6IDM4NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9GUk9NOiAzODcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfVE86IDM4OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9OT1RFUzogMzg5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOiAzOTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX1RPOiAzOTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX05PVEVTOiAzOTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRlJPTTogMzkzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOiAzOTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfTk9URVM6IDM5NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfRlJPTTogMzk2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9UTzogMzk3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9OT1RFUzogMzk4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTogMzk5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfVE86IDQwMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOiA0MDEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9GUk9NOiA0MDIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9UTzogNDAzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfTk9URVM6IDQwNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX0ZST006IDQwNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX1RPOiA0MDYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9OT1RFUzogNDA3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTogNDA4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfVE86IDQwOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX05PVEVTOiA0MTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9GUk9NOiA0MTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzogNDEyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfTk9URVM6IDQxMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fRlJPTTogNDE0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9UTzogNDE1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9OT1RFUzogNDE2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOiA0MTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX1RPOiA0MTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX05PVEVTOiA0MTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX0ZST006IDQyMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfVE86IDQyMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6IDQyMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX0ZST006IDQyMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX1RPOiA0MjQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9OT1RFUzogNDI1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006IDQyNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9UTzogNDI3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOiA0MjgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfRlJPTTogNDI5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOiA0MzAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfTk9URVM6IDQzMSxcbiAgICBGVF9TVVJOQU1FX0FUX0JJUlRIOiA0MzIsXG4gICAgRlRfQ0lWSUxfU1RBVFVTOiA0MzMsXG4gICAgRlRfTlVNQkVSX09GX1NFQVRTOiA0MzQsXG4gICAgRlRfTlVNQkVSX09GX1NUQU5ESU5HX1BMQUNFUzogNDM1LFxuICAgIEZUX01BWF9TUEVFRDogNDM2LFxuICAgIEZUX0ZVRUxfVFlQRTogNDM3LFxuICAgIEZUX0VDX0VOVklST05NRU5UQUxfVFlQRTogNDM4LFxuICAgIEZUX1BPV0VSX1dFSUdIVF9SQVRJTzogNDM5LFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfQlJBS0VEOiA0NDAsXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDogNDQxLFxuICAgIEZUX1RSQU5TTUlTU0lPTl9UWVBFOiA0NDIsXG4gICAgRlRfVFJBSUxFUl9ISVRDSDogNDQzLFxuICAgIEZUX0FDQ09NUEFOSUVEX0JZOiA0NDQsXG4gICAgRlRfUE9MSUNFX0RJU1RSSUNUOiA0NDUsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURTogNDQ2LFxuICAgIEZUX1BBWUxPQURfQ0FQQUNJVFk6IDQ0NyxcbiAgICBGVF9OVU1CRVJfT0ZfQVhFTFM6IDQ0OCxcbiAgICBGVF9QRVJNSVNTSUJMRV9BWExFX0xPQUQ6IDQ0OSxcbiAgICBGVF9QUkVDSU5DVDogNDUwLFxuICAgIEZUX0lOVklURURfQlk6IDQ1MSxcbiAgICBGVF9QVVJQT1NFX09GX0VOVFJZOiA0NTIsXG4gICAgRlRfU0tJTl9DT0xPUjogNDUzLFxuICAgIEZUX0NPTVBMRVhJT046IDQ1NCxcbiAgICBGVF9BSVJQT1JUX0ZST006IDQ1NSxcbiAgICBGVF9BSVJQT1JUX1RPOiA0NTYsXG4gICAgRlRfQUlSTElORV9OQU1FOiA0NTcsXG4gICAgRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOiA0NTgsXG4gICAgRlRfTElDRU5TRV9OVU1CRVI6IDQ1OSxcbiAgICBGVF9JTl9UQU5LUzogNDYwLFxuICAgIEZUX0VYRVBUX0lOX1RBTktTOiA0NjEsXG4gICAgRlRfRkFTVF9UUkFDSzogNDYyLFxuICAgIEZUX09XTkVSOiA0NjMsXG4gICAgRlRfTVJaX1NUUklOR1NfSUNBT19SRklEOiA0NjQsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0U6IDQ2NSxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS1NVTTogNDY2LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLX0RJR0lUOiA0NjcsXG4gICAgRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOiA0NjgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX0ZST006IDQ2OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfVE86IDQ3MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfTk9URVM6IDQ3MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfRlJPTTogNDcyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9UTzogNDczLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzogNDc0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9GUk9NOiA0NzUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX1RPOiA0NzYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX05PVEVTOiA0NzcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX0ZST006IDQ3OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfVE86IDQ3OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfTk9URVM6IDQ4MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX0ZST006IDQ4MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX1RPOiA0ODIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9OT1RFUzogNDgzLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX0ZST006IDQ4NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19UTzogNDg1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOiA0ODYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfRlJPTTogNDg3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX1RPOiA0ODgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfTk9URVM6IDQ4OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfRlJPTTogNDkwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19UTzogNDkxLFxuICAgIEZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzogNDkyLFxuICAgIEZUX0JBTktDQVJETlVNQkVSOiA0OTMsXG4gICAgRlRfQkFOS0NBUkRWQUxJRFRIUlU6IDQ5NCxcbiAgICBGVF9UQVhfTlVNQkVSOiA0OTUsXG4gICAgRlRfSEVBTFRIX05VTUJFUjogNDk2LFxuICAgIEZUX0dSQU5ERkFUSEVSTkFNRTogNDk3LFxuICAgIEZUX1NFTEVDVEVFX0lORElDQVRPUjogNDk4LFxuICAgIEZUX01PVEhFUl9TVVJOQU1FOiA0OTksXG4gICAgRlRfTU9USEVSX0dJVkVOTkFNRTogNTAwLFxuICAgIEZUX0ZBVEhFUl9TVVJOQU1FOiA1MDEsXG4gICAgRlRfRkFUSEVSX0dJVkVOTkFNRTogNTAyLFxuICAgIEZUX01PVEhFUl9EQVRFT0ZCSVJUSDogNTAzLFxuICAgIEZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDogNTA0LFxuICAgIEZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjogNTA1LFxuICAgIEZUX0ZBVEhFUl9QRVJTT05BTE5VTUJFUjogNTA2LFxuICAgIEZUX01PVEhFUl9QTEFDRU9GQklSVEg6IDUwNyxcbiAgICBGVF9GQVRIRVJfUExBQ0VPRkJJUlRIOiA1MDgsXG4gICAgRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOiA1MDksXG4gICAgRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOiA1MTAsXG4gICAgRlRfREFURV9GSVJTVF9SRU5FV0FMOiA1MTEsXG4gICAgRlRfREFURV9TRUNPTkRfUkVORVdBTDogNTEyLFxuICAgIEZUX1BMQUNFX09GX0VYQU1JTkFUSU9OOiA1MTMsXG4gICAgRlRfQVBQTElDQVRJT05fTlVNQkVSOiA1MTQsXG4gICAgRlRfVk9VQ0hFUl9OVU1CRVI6IDUxNSxcbiAgICBGVF9BVVRIT1JJWkFUSU9OX05VTUJFUjogNTE2LFxuICAgIEZUX0ZBQ1VMVFk6IDUxNyxcbiAgICBGVF9GT1JNX09GX0VEVUNBVElPTjogNTE4LFxuICAgIEZUX0ROSV9OVU1CRVI6IDUxOSxcbiAgICBGVF9SRVRJUkVNRU5UX05VTUJFUjogNTIwLFxuICAgIEZUX1BST0ZFU1NJT05BTF9JRF9OVU1CRVI6IDUyMSxcbiAgICBGVF9BR0VfQVRfSVNTVUU6IDUyMixcbiAgICBGVF9ZRUFSU19TSU5DRV9JU1NVRTogNTIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9GUk9NOiA1MjQsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOiA1MjUsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX1RPOiA1MjYsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfRlJPTTogNTI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX05PVEVTOiA1MjgsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfVE86IDUyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX0ZST006IDUzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9FX05PVEVTOiA1MzEsXG4gICAgRlRfRExDTEFTU0NPREVfRV9UTzogNTMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfRlJPTTogNTMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfTk9URVM6IDUzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9GX1RPOiA1MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfRlJPTTogNTM2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX05PVEVTOiA1MzcsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfVE86IDUzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfRlJPTTogNTM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9OT1RFUzogNTQwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9UTzogNTQxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX0ZST006IDU0MixcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9OT1RFUzogNTQzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX1RPOiA1NDQsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfRlJPTTogNTQ1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX05PVEVTOiA1NDYsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfVE86IDU0NyxcbiAgICBGVF9ETENMQVNTQ09ERV9IX0ZST006IDU0OCxcbiAgICBGVF9ETENMQVNTQ09ERV9IX05PVEVTOiA1NDksXG4gICAgRlRfRExDTEFTU0NPREVfSF9UTzogNTUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfRlJPTTogNTUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfTk9URVM6IDU1MixcbiAgICBGVF9ETENMQVNTQ09ERV9JX1RPOiA1NTMsXG4gICAgRlRfRExDTEFTU0NPREVfS19GUk9NOiA1NTQsXG4gICAgRlRfRExDTEFTU0NPREVfS19OT1RFUzogNTU1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfVE86IDU1NixcbiAgICBGVF9ETENMQVNTQ09ERV9MS19GUk9NOiA1NTcsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfTk9URVM6IDU1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19UTzogNTU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fRlJPTTogNTYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fTk9URVM6IDU2MSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX1RPOiA1NjIsXG4gICAgRlRfRExDTEFTU0NPREVfU19GUk9NOiA1NjMsXG4gICAgRlRfRExDTEFTU0NPREVfU19OT1RFUzogNTY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfVE86IDU2NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9GUk9NOiA1NjYsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfTk9URVM6IDU2NyxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9UTzogNTY4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX0ZST006IDU2OSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9OT1RFUzogNTcwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX1RPOiA1NzEsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfRlJPTTogNTcyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX05PVEVTOiA1NzMsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfVE86IDU3NCxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9GUk9NOiA1NzUsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfTk9URVM6IDU3NixcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9UTzogNTc3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfRlJPTTogNTc4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfTk9URVM6IDU3OSxcbiAgICBGVF9ETENMQVNTQ09ERV9WX1RPOiA1ODAsXG4gICAgRlRfRExDTEFTU0NPREVfV19GUk9NOiA1ODEsXG4gICAgRlRfRExDTEFTU0NPREVfV19OT1RFUzogNTgyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfVE86IDU4MyxcbiAgICBGVF9VUkw6IDU4NCxcbiAgICBGVF9DQUxJQkVSOiA1ODUsXG4gICAgRlRfTU9ERUw6IDU4NixcbiAgICBGVF9NQUtFOiA1ODcsXG4gICAgRlRfTlVNQkVSX09GX0NZTElOREVSUzogNTg4LFxuICAgIEZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046IDU4OSxcbiAgICBGVF9TVVJOQU1FX09GX1dJRkVfQUZURVJfUkVHSVNUUkFUSU9OOiA1OTAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9XSUZFOiA1OTEsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9IVVNCQU5EOiA1OTIsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOiA1OTMsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfU0VDT05EX1BFUlNPTjogNTk0LFxuICAgIEZUX0NWVjogNTk1LFxuICAgIEZUX0RBVEVfT0ZfSU5TVVJBTkNFX0VYUElSWTogNTk2LFxuICAgIEZUX01PUlRHQUdFX0JZOiA1OTcsXG4gICAgRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjogNTk4LFxuICAgIEZUX09MRF9EQVRFX09GX0lTU1VFOiA1OTksXG4gICAgRlRfT0xEX1BMQUNFX09GX0lTU1VFOiA2MDAsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfRlJPTTogNjAxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX1RPOiA2MDIsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfTk9URVM6IDYwMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9GUk9NOiA2MDQsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfVE86IDYwNSxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9OT1RFUzogNjA2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX0ZST006IDYwNyxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9UTzogNjA4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX05PVEVTOiA2MDksXG4gICAgRlRfRExDTEFTU0NPREVfSENfRlJPTTogNjEwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX1RPOiA2MTEsXG4gICAgRlRfRExDTEFTU0NPREVfSENfTk9URVM6IDYxMixcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19GUk9NOiA2MTMsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfVE86IDYxNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19OT1RFUzogNjE1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX0ZST006IDYxNixcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9UTzogNjE3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX05PVEVTOiA2MTgsXG4gICAgRlRfRExDTEFTU0NPREVfUl9GUk9NOiA2MTksXG4gICAgRlRfRExDTEFTU0NPREVfUl9UTzogNjIwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfTk9URVM6IDYyMSxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9GUk9NOiA2MjIsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfVE86IDYyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9OT1RFUzogNjI0LFxuICAgIEZUX0NJVElaRU5TSElQX1NUQVRVUzogNjI1LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfRlJPTTogNjI2LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfVE86IDYyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9GUk9NOiA2MjgsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfVE86IDYyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9OT1RFUzogNjMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX0ZST006IDYzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9UTzogNjMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX05PVEVTOiA2MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfRlJPTTogNjM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX1RPOiA2MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfTk9URVM6IDYzNixcbiAgICBGVF9BTFRfREFURV9PRl9FWFBJUlk6IDYzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9GUk9NOiA2MzgsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfVE86IDYzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9OT1RFUzogNjQwLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX1RPOiA2NDMsXG4gICAgRlRfUEFZTUVOVF9QRVJJT0RfRlJPTTogNjQyLFxuICAgIEZUX0lTU1VFUl9JREVOVElGSUNBVElPTl9OVU1CRVI6IDY0MSxcbiAgICBGVF9WQUNDSU5BVElPTl9DRVJUSUZJQ0FURV9JREVOVElGSUVSOiA2NDQsXG4gICAgRlRfRklSU1RfTkFNRTogNjQ1LFxuICAgIEZUX0RBVEVfT0ZfQVJSSVZBTDogNjQ2LFxuICAgIEZUX1NFQ09ORF9OQU1FOiA2NDcsXG4gICAgRlRfVEhJUkRfTkFNRTogNjQ4LFxuICAgIEZUX0ZPVVJUSF9OQU1FOiA2NDksXG4gICAgRlRfTEFTVF9OQU1FOiA2NTAsXG4gICAgRlRfRExDTEFTU0NPREVfUk1fRlJPTTogNjUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX05PVEVTOiA2NTIsXG4gICAgRlRfRExDTEFTU0NPREVfUk1fVE86IDY1MyxcbiAgICBGVF9ETENMQVNTQ09ERV9QV19GUk9NOiA2NTQsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfTk9URVM6IDY1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9QV19UTzogNjU2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VCX0ZST006IDY1NyxcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9OT1RFUzogNjU4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VCX1RPOiA2NTksXG4gICAgRlRfRExDTEFTU0NPREVfRUNfRlJPTTogNjYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX05PVEVTOiA2NjEsXG4gICAgRlRfRExDTEFTU0NPREVfRUNfVE86IDY2MixcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfRlJPTTogNjYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDMV9OT1RFUzogNjY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDMV9UTzogNjY1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0NJVFk6IDY2NixcbiAgICBGVF9ZRUFSX09GX0JJUlRIOiA2NjcsXG4gICAgRlRfWUVBUl9PRl9FWFBJUlk6IDY2OCxcbiAgICBGVF9HUkFOREZBVEhFUl9OQU1FX01BVEVSTkFMOiA2NjksXG4gICAgRlRfRklSU1RfU1VSTkFNRTogNjcwLFxuICAgIEZUX01PTlRIX09GX0JJUlRIOiA2NzEsXG4gICAgRlRfQUREUkVTU19GTE9PUl9OVU1CRVI6IDY3MixcbiAgICBGVF9BRERSRVNTX0VOVFJBTkNFOiA2NzMsXG4gICAgRlRfQUREUkVTU19CTE9DS19OVU1CRVI6IDY3NCxcbiAgICBGVF9BRERSRVNTX1NUUkVFVF9OVU1CRVI6IDY3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVF9UWVBFOiA2NzYsXG4gICAgRlRfQUREUkVTU19DSVRZX1NFQ1RPUjogNjc3LFxuICAgIEZUX0FERFJFU1NfQ09VTlRZX1RZUEU6IDY3OCxcbiAgICBGVF9BRERSRVNTX0NJVFlfVFlQRTogNjc5LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkdfVFlQRTogNjgwLFxuICAgIEZUX0RBVEVfT0ZfUkVUSVJFTUVOVDogNjgxLFxuICAgIEZUX0RPQ1VNRU5UX1NUQVRVUzogNjgyLFxuICAgIEZUX1NJR05BVFVSRTogNjgzLFxuICAgIEZUX1VOSVFVRV9DRVJUSUZJQ0FURV9JREVOVElGSUVSOiA2ODQsXG4gICAgRlRfRU1BSUw6IDY4NSxcbiAgICBGVF9EQVRFX09GX1NQRUNJTUVOX0NPTExFQ1RJT046IDY4NixcbiAgICBGVF9UWVBFX09GX1RFU1RJTkc6IDY4NyxcbiAgICBGVF9SRVNVTFRfT0ZfVEVTVElORzogNjg4LFxuICAgIEZUX01FVEhPRF9PRl9URVNUSU5HOiA2ODksXG4gICAgRlRfRElHSVRBTF9UUkFWRUxfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDY5MCxcbiAgICBGVF9EQVRFX09GX0ZJUlNUX1BPU0lUSVZFX1RFU1RfUkVTVUxUOiA2OTEsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IExDSUQgPSB7XG4gICAgTEFUSU46IDAsXG4gICAgQUJLSEFaSUFOX0NZUklMTElDOiAxMDAxMSxcbiAgICBBRlJJS0FBTlM6IDEwNzgsXG4gICAgQUxCQU5JQU46IDEwNTIsXG4gICAgQU1IQVJJQzogMTExOCxcbiAgICBBUkFCSUNfQUxHRVJJQTogNTEyMSxcbiAgICBBUkFCSUNfQkFIUkFJTjogMTUzNjEsXG4gICAgQVJBQklDX0VHWVBUOiAzMDczLFxuICAgIEFSQUJJQ19JUkFROiAyMDQ5LFxuICAgIEFSQUJJQ19KT1JEQU46IDExMjY1LFxuICAgIEFSQUJJQ19LVVdBSVQ6IDEzMzEzLFxuICAgIEFSQUJJQ19MRUJBTk9OOiAxMjI4OSxcbiAgICBBUkFCSUNfTElCWUE6IDQwOTcsXG4gICAgQVJBQklDX01PUk9DQ086IDYxNDUsXG4gICAgQVJBQklDX09NQU46IDgxOTMsXG4gICAgQVJBQklDX1FBVEFSOiAxNjM4NSxcbiAgICBBUkFCSUNfU0FVRElfQVJBQklBOiAxMDI1LFxuICAgIEFSQUJJQ19TWVJJQTogMTAyNDEsXG4gICAgQVJBQklDX1RVTklTSUE6IDcxNjksXG4gICAgQVJBQklDX1VBRTogMTQzMzcsXG4gICAgQVJBQklDX1lFTUVOOiA5MjE3LFxuICAgIEFSQUJJQ19BUk1FTklBTjogMTA2NyxcbiAgICBBUkFCSUNfV09STEQ6IDQwOTYsXG4gICAgQVpFUklfQ1lSSUxJQzogMjA5MixcbiAgICBBWkVSSV9MQVRJTjogMTA2OCxcbiAgICBCQVNRVUU6IDEwNjksXG4gICAgQkFOS19DQVJEOiAxMDAwMyxcbiAgICBCQU5LX0NBUkRfQ1ZWMjogMTAwMDQsXG4gICAgQkFOS19DQVJEX05BTUU6IDEwMDAyLFxuICAgIEJBTktfQ0FSRF9OVU1CRVI6IDEwMDAwLFxuICAgIEJBTktfQ0FSRF9WQUxJRF9USFJVOiAxMDAwMSxcbiAgICBCRUxBUlVTSUFOOiAxMDU5LFxuICAgIEJFTkdBTElfQkFOR0xBREVTSDogMjExNyxcbiAgICBCVUxHQVJJQU46IDEwMjYsXG4gICAgQ0FUQUxBTjogMTAyNyxcbiAgICBDSElORVNFX0hPTkdLT05HX1NBUjogMzA3NixcbiAgICBDSElORVNFX01BQ0FPX1NBUjogNTEyNCxcbiAgICBDSElORVNFOiAyMDUyLFxuICAgIENISU5FU0VfU0lOR0FQT1JFOiA0MTAwLFxuICAgIENISU5FU0VfVEFJV0FOOiAxMDI4LFxuICAgIENST0FUSUFOOiAxMDUwLFxuICAgIENaRUNIOiAxMDI5LFxuICAgIERBTklTSDogMTAzMCxcbiAgICBESVZFSEk6IDExMjUsXG4gICAgRFVUQ0hfQkVMR0lVTTogMjA2NyxcbiAgICBEVVRDSF9ORVRIRVJMQU5EUzogMTA0MyxcbiAgICBFTkdMSVNIX0FVU1RSQUxJQTogMzA4MSxcbiAgICBFTkdMSVNIX0JFTElaRTogMTAyNDksXG4gICAgRU5HTElTSF9DQU5BREE6IDQxMDUsXG4gICAgRU5HTElTSF9DQVJSSUJFQU46IDkyMjUsXG4gICAgRU5HTElTSF9JUkVMQU5EOiA2MTUzLFxuICAgIEVOR0xJU0hfSkFNQUlDQTogODIwMSxcbiAgICBFTkdMSVNIX05FV19aRUFMQU5EOiA1MTI5LFxuICAgIEVOR0xJU0hfUEhJTElQUElORVM6IDEzMzIxLFxuICAgIEVOR0xJU0hfU09VVEhfQUZSSUNBOiA3MTc3LFxuICAgIEVOR0xJU0hfVFJJTklEQUQ6IDExMjczLFxuICAgIEVOR0xJU0hfVUs6IDIwNTcsXG4gICAgRU5HTElTSF9VUzogMTAzMyxcbiAgICBFTkdMSVNIX1pJTUJBQldFOiAxMjI5NyxcbiAgICBFU1RPTklBTjogMTA2MSxcbiAgICBGQUVST0VTRTogMTA4MCxcbiAgICBGQVJTSTogMTA2NSxcbiAgICBGSU5OSVNIOiAxMDM1LFxuICAgIEZSRU5DSF9CRUxHSVVNOiAyMDYwLFxuICAgIEZSRU5DSF9DQU5BREE6IDMwODQsXG4gICAgRlJFTkNIX0ZSQU5DRTogMTAzNixcbiAgICBGUkVOQ0hfTFVYRU1CT1VSRzogNTEzMixcbiAgICBGUkVOQ0hfTU9OQUNPOiA2MTU2LFxuICAgIEZSRU5DSF9TV0lUWkVSTEFORDogNDEwOCxcbiAgICBGWVJPX01BQ0VET05JQU46IDEwNzEsXG4gICAgR0FMSUNJQU46IDExMTAsXG4gICAgR0VPUkdJQU46IDEwNzksXG4gICAgR0VSTUFOX0FVU1RSSUE6IDMwNzksXG4gICAgR0VSTUFOX0dFUk1BTlk6IDEwMzEsXG4gICAgR0VSTUFOX0xJRUNIVEVOU1RFSU46IDUxMjcsXG4gICAgR0VSTUFOX0xVWEVNQk9VUkc6IDQxMDMsXG4gICAgR0VSTUFOX1NXSVRaRVJMQU5EOiAyMDU1LFxuICAgIEdSRUVLOiAxMDMyLFxuICAgIEdVSkFSQVRJOiAxMDk1LFxuICAgIEhFQlJFVzogMTAzNyxcbiAgICBISU5ESV9JTkRJQTogMTA4MSxcbiAgICBIVU5HQVJJQU46IDEwMzgsXG4gICAgSUNFTEFORElDOiAxMDM5LFxuICAgIElORE9ORVNJQU46IDEwNTcsXG4gICAgSVRBTElBTl9JVEFMWTogMTA0MCxcbiAgICBJVEFMSUFOX1NXSVRaRVJMQU5EOiAyMDY0LFxuICAgIEpBUEFORVNFOiAxMDQxLFxuICAgIEtBTk5BREE6IDEwOTksXG4gICAgS0FTSE1JUkk6IDExMjAsXG4gICAgS0FaQUtIOiAxMDg3LFxuICAgIEtPTktBTkk6IDExMTEsXG4gICAgS09SRUFOOiAxMDQyLFxuICAgIEtZUkdZWl9DWVJJTElDSzogMTA4OCxcbiAgICBMQU86IDExMDgsXG4gICAgTEFUVklBTjogMTA2MixcbiAgICBMSVRIVUFOSUFOOiAxMDYzLFxuICAgIE1BTEFZX01BTEFZU0lBOiAxMDg2LFxuICAgIE1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOiAyMTEwLFxuICAgIEFTU0FNRVNFOiAxMTAxLFxuICAgIE1BUkFUSEk6IDExMDIsXG4gICAgTU9OR09MSUFOX0NZUklMSUM6IDExMDQsXG4gICAgTk9SV0VHSUFOX0JPS01BTDogMTA0NCxcbiAgICBOT1JXRUdJQU5fTllPUlNLOiAyMDY4LFxuICAgIFBBU0hUTzogMTEyMyxcbiAgICBQT0xJU0g6IDEwNDUsXG4gICAgUE9SVFVHVUVTRV9CUkFaSUw6IDEwNDYsXG4gICAgUE9SVFVHVUVTRV9QT1JUVUdBTDogMjA3MCxcbiAgICBQVU5KQUJJOiAxMDk0LFxuICAgIFJIQUVUT19ST01BTklDOiAxMDQ3LFxuICAgIFJPTUFOSUFOOiAxMDQ4LFxuICAgIFJVU1NJQU46IDEwNDksXG4gICAgU0FOU0tSSVQ6IDExMDMsXG4gICAgU0VSQklBTl9DWVJJTElDOiAzMDk4LFxuICAgIFNFUkJJQU5fTEFUSU46IDIwNzQsXG4gICAgU0lOREhJOiAyMTM3LFxuICAgIFNJTkRISV9JTkRJQTogMTExMyxcbiAgICBTSU5IQUxBOiAxMTE1LFxuICAgIFNMT1ZBSzogMTA1MSxcbiAgICBTTE9WRU5JQU46IDEwNjAsXG4gICAgU1BBTklTSF9BUkdFTlRJTkE6IDExMjc0LFxuICAgIFNQQU5JU0hfQk9MSVZJQTogMTYzOTQsXG4gICAgU1BBTklTSF9DSElMRTogMTMzMjIsXG4gICAgU1BBTklDSF9DT0xPTUJJQTogOTIyNixcbiAgICBTUEFOSVNIX0NPU1RBX1JJQ0E6IDUxMzAsXG4gICAgU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6IDcxNzgsXG4gICAgU1BBTklTSF9FQ1VBRE9SOiAxMjI5OCxcbiAgICBTUEFOSVNIX0VMX1NBTFZBRE9SOiAxNzQxOCxcbiAgICBTUEFOSVNIX0dVQVRFTUFMQTogNDEwNixcbiAgICBTUEFOSVNIX0hPTkRVUkFTOiAxODQ0MixcbiAgICBTUEFOSVNIX01FWElDTzogMjA1OCxcbiAgICBTUEFOSVNIX05JQ0FSQUdVQTogMTk0NjYsXG4gICAgU1BBTklTSF9QQU5BTUE6IDYxNTQsXG4gICAgU1BBTklTSF9QQVJBR1VBWTogMTUzNzAsXG4gICAgU1BBTklTSF9QRVJVOiAxMDI1MCxcbiAgICBTUEFOSVNIX1BVRVJUT19SSUNPOiAyMDQ5MCxcbiAgICBTUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6IDEwMzQsXG4gICAgU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6IDMwODIsXG4gICAgU1BBTklTSF9VUlVHVUFZOiAxNDM0NixcbiAgICBTUEFOSVNIX1ZFTkVaVUVMQTogODIwMixcbiAgICBTV0FISUxJOiAxMDg5LFxuICAgIFNXRURJU0g6IDEwNTMsXG4gICAgU1dFRElTSF9GSU5MQU5EOiAyMDc3LFxuICAgIFNZUklBQzogMTExNCxcbiAgICBUQU1JTDogMTA5NyxcbiAgICBUQVRBUjogMTA5MixcbiAgICBCRU5HQUxJX0lORElBOiAxMDkzLFxuICAgIFRFTFVHVTogMTA5OCxcbiAgICBUSEFJX1RIQUlMQU5EOiAxMDU0LFxuICAgIFRVUktJU0g6IDEwNTUsXG4gICAgVEFKSUtfQ1lSSUxMSUM6IDEwNjQsXG4gICAgVFVSS01FTjogMTA5MCxcbiAgICBVS1JBSU5JQU46IDEwNTgsXG4gICAgVVJEVTogMTA1NixcbiAgICBVWkJFS19DWVJJTElDOiAyMTE1LFxuICAgIFVaQkVLX0xBVElOOiAxMDkxLFxuICAgIFZJRVROQU1FU0U6IDEwNjYsXG4gICAgQ1RDX1NJTVBMSUZJRUQ6IDUwMDAxLFxuICAgIENUQ19UUkFESVRJT05BTDogNTAwMDIsXG4gICAgTUFMVEVTRTogMTA4MixcbiAgICBCVVJNRVNFOiAxMTA5LFxuICAgIEtITUVSOiAxMTA3LFxuICAgIEtBUkFLQUxQQUtfTEFUSU46IDEwMDEyLFxuICAgIE1BTEFZQUxBTTogMTEwMCxcbiAgICBORVBBTEk6IDExMjEsXG4gICAgT1JJWUE6IDEwOTYsXG4gICAgVVJEVV9ERVRFQ1RJT046IDEwNTYwLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fRkFJTFVSRV9JTUFHRTogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkZhaWx1cmVJbWFnZVwiLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyRnJhbWUgPSB7XG4gICAgTUFYOiBcIm1heFwiLFxuICAgIFNDRU5BUklPX0RFRkFVTFQ6IFwiaWQxXCIsXG4gICAgTk9ORTogXCJub25lXCIsXG4gICAgRE9DVU1FTlQ6IFwiZG9jdW1lbnRcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0xpZ2h0cyA9IHtcbiAgICBOT05FOiAwLFxuICAgIFJQUk1fTElHSFRfVVY6IDEyOCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTEw6IDYsXG4gICAgUlBSTV9MSUdIVF9JUjogMTY3NzcyMTYsXG4gICAgUlBSTV9MaWdodF9JUl9UT1A6IDgsXG4gICAgUlBSTV9MaWdodF9JUl9TSURFOiAxNixcbiAgICBSUFJNX0xpZ2h0X0lSX0Z1bGw6ICg4IHwgMTYpLFxuICAgIFJQUk1fTElHSFRfT1ZEOiA2NzEwODg2NCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTExfT1ZEOiAoNiB8IDY3MTA4ODY0KSxcbn1cblxuZXhwb3J0IGNvbnN0IGVNcnpEZXRlY3Rpb25Nb2RlcyA9IHtcbiAgICBERUZBVUxUOiAwLFxuICAgIFJFU0laRV9CSU5BUklaRV9XSU5ET1c6IDEsXG4gICAgQkxVUl9CRUZPUkVfQklOQVJJWkFUSU9OOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIGVSUFJNX0F1dGhlbnRpY2l0eSxcbiAgIEN1c3RvbWl6YXRpb25Db2xvcixcbiAgIGVSRklEX0Vycm9yQ29kZXMsXG4gICBlTERTX1BhcnNpbmdFcnJvckNvZGVzLFxuICAgZVJGSURfQ2VydGlmaWNhdGVUeXBlLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBGcmFtZVNoYXBlVHlwZSxcbiAgIGVSRklEX0JhdWRSYXRlLFxuICAgTGluZUNhcCxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgUEtEUmVzb3VyY2VUeXBlLFxuICAgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlLFxuICAgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzLFxuICAgU2NlbmFyaW9JZGVudGlmaWVyLFxuICAgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMsXG4gICBDYW1lcmFQb3NpdGlvbixcbiAgIGVSRklEX1Bhc3N3b3JkX1R5cGUsXG4gICBWaWV3Q29udGVudE1vZGUsXG4gICBCYXJjb2RlUmVzdWx0LFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBSRklERGVsZWdhdGUsXG4gICBUZXh0UHJvY2Vzc2luZyxcbiAgIExvZ0xldmVsLFxuICAgQW5pbWF0aW9uSW1hZ2UsXG4gICBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMsXG4gICBEb2NGb3JtYXQsXG4gICBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBNUlpGb3JtYXQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBPbmxpbmVNb2RlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGRpRG9jVHlwZSxcbiAgIEJ1dHRvblRhZyxcbiAgIEhvbG9BbmltYXRpb25UeXBlLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgQ3VzdG9taXphdGlvbkZvbnQsXG4gICBJbWFnZUZvcm1hdCxcbiAgIGVHcmFwaGljRmllbGRUeXBlLFxuICAgUmVnRGV2aWNlQ29uZmlnVHlwZSxcbiAgIENhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQ2FtZXJhTW9kZSxcbiAgIENhcHR1cmVNb2RlLFxuICAgZUNoZWNrUmVzdWx0LFxuICAgZVJGSURfVGVybWluYWxUeXBlLFxuICAgZVJGSURfRGF0YUZpbGVfVHlwZSxcbiAgIGVWaXN1YWxGaWVsZFR5cGUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIExDSUQsXG4gICBDdXN0b21pemF0aW9uSW1hZ2UsXG4gICBEb2NSZWFkZXJGcmFtZSxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIGVNcnpEZXRlY3Rpb25Nb2Rlcyxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1yZWFkZXItYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlclBsdWdpbi5Eb2N1bWVudFJlYWRlcicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRG9jdW1lbnRSZWFkZXItQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIHRoZSBTREsgaXMgcmVhZHkgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlcklzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlclN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBDaGVja3MgaWYgYWxsIHJlcXVpcmVkIGJsdWV0b290aCBwZXJtaXNzaW9ucyBhcmUgZ3JhbnRlZCBhbmQgcmVxdWVzdHMgdGhlbSBpZiBuZWVkZWQoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNCbGVQZXJtaXNzaW9uc0dyYW50ZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTZXNzaW9uU3RhdHVzKHN0YXR1czogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICByZXR1cm5zIHRhZyBwcm9wZXJ0eSBvZiBEb2N1bWVudFJlYWRlciBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRUYWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBzZXRzIERvY3VtZW50UmVhZGVyLnRhZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VGFnKHRhZzogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0VGVuYW50KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW5hbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRlbmFudCh0ZW5hbnQ6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEVudigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW52XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRFbnYoZW52OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGdW5jdGlvbmFsaXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25hbGl0eX0gZnVuY3Rpb25hbGl0eVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RnVuY3Rpb25hbGl0eShmdW5jdGlvbmFsaXR5OiBGdW5jdGlvbmFsaXR5KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQcm9jZXNzUGFyYW1zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvY2Vzc1BhcmFtc30gcHJvY2Vzc1BhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UHJvY2Vzc1BhcmFtcyhwcm9jZXNzUGFyYW1zOiBQcm9jZXNzUGFyYW1zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDdXN0b21pemF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q3VzdG9taXphdGlvbn0gY3VzdG9taXphdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0Q3VzdG9taXphdGlvbihjdXN0b21pemF0aW9uOiBDdXN0b21pemF0aW9uKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSRklEU2NlbmFyaW99IHJmaWRTY2VuYXJpb1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmZpZFNjZW5hcmlvKHJmaWRTY2VuYXJpbzogUkZJRFNjZW5hcmlvKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVzZXQgY29uZmlndXJhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZXNldENvbmZpZ3VyYXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RG9jUmVhZGVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIoY29uZmlnOiBEb2NSZWFkZXJDb25maWcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemVzIGRvY3VtZW50IHJlYWRlciB3aXRoIGxpY2Vuc2UgZnJvbSBjb25uZWN0ZWQgRGV2aWNlNzMxMChBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEb2NSZWFkZXJDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcldpdGhCbGVEZXZpY2VDb25maWcoY29uZmlnOiBEb2NSZWFkZXJDb25maWcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkb3dubG9hZCBhIGRhdGFiYXNlIGZyb20gdGhlIFJlZ3VsYSdzIHNlcnZlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBwcmVwYXJlRGF0YWJhc2UoZGF0YWJhc2VUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCBmb3IgZ2V0dGluZyBhbHdheXMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcnVuQXV0b1VwZGF0ZShkYXRhYmFzZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGNoZWNrcyBmb3IgZGF0YWJhc2UgdXBkYXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2hlY2tEYXRhYmFzZVVwZGF0ZShkYXRhYmFzZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTY2FubmVyQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2Nhbihjb25maWc6IFNjYW5uZXJDb25maWcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29nbml6ZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZShjb25maWc6IFJlY29nbml6ZUNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluZGljYXRlIHRoYW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhlIG5leHQgcGFnZSBpcyBzdGFydGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbG9zZSBjYW1lcmEgcHJldmlldyBhbmQgc3RvcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BTY2FubmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gb3BlbiB0aGUgUkZJRCBjaGlwIHJlYWRpbmcgY29udHJvbGxlciBhbmQgc3RhcnQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFBBQ2VydGlmaWNhdGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RUQVNpZ25hdHVyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzdGFydFJGSURSZWFkZXIocmVxdWVzdFBBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXM6IGJvb2xlYW4sIHJlcXVlc3RUQVNpZ25hdHVyZTogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RQQUNlcnRpZmljYXRlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFRBQ2VydGlmaWNhdGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0VEFTaWduYXR1cmVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQocmVxdWVzdFBBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFDZXJ0aWZpY2F0ZXM6IGJvb2xlYW4sIHJlcXVlc3RUQVNpZ25hdHVyZTogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gY2xvc2UgdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIGVuZCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFBBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVBBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBU2lnbmF0dXJlIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmF0dXJlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlVEFTaWduYXR1cmUoc2lnbmF0dXJlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFRoZSBtZXRob2QgY2FsbCBzZXRzIHRoZSBnaXZlbiBUQ0NQYXJhbXMgdG8gdGhlIFJGSUQgc2Vzc2lvbi4gVGhlIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIHRvIGJlIHNldCBiZWZvcmUgc3RhcnRpbmcgUkZJRCBzZXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUY2NQYXJhbXN9IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VENDUGFyYW1zKHBhcmFtczogVGNjUGFyYW1zKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBQS0RDZXJ0aWZpY2F0ZVtdKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xlYXIgUEtEIGNlcnRpZmljYXRlc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjbGVhclBLRENlcnRpZmljYXRlcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3U2Vzc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFNlYXJjaGVzIGZvciBibGUgZGV2aWNlcyhBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TKVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydEJsdWV0b290aFNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBkaWN0aW9uYXJ5XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMb2NhbGl6YXRpb25EaWN0aW9uYXJ5KGRpY3Rpb25hcnk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldExpY2Vuc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBdmFpbGFibGVTY2VuYXJpb3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0SXNSRklEQXZhaWxhYmxlRm9yVXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jUmVhZGVyVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZmluYWxpemVQYWNrYWdlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFRyYW5zbGF0aW9uKGNsYXNzTmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlTGNpZChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZUxjaWRTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyLCBzb3VyY2U6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVTb3VyY2VPcmlnaW5hbChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgb3JpZ2luYWw6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlTGNpZFNvdXJjZU9yaWdpbmFsKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlciwgc291cmNlOiBudW1iZXIsIG9yaWdpbmFsOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRCeVR5cGUocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkQnlUeXBlTGNpZChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEJ5VHlwZVNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkQnlUeXBlU291cmNlUGFnZUluZGV4KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkQnlUeXBlU291cmNlUGFnZUluZGV4TGlnaHQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyLCBsaWdodDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRJbWFnZUJ5VHlwZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRJbWFnZUJ5VHlwZVNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGVTb3VyY2VQYWdlSW5kZXgocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRJbWFnZUJ5VHlwZVNvdXJjZVBhZ2VJbmRleExpZ2h0KHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlciwgbGlnaHQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgY29udGFpbmVycyhyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIHJlc3VsdFR5cGU6IG51bWJlcltdKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBlbmNyeXB0ZWRDb250YWluZXJzKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cyk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9fSJdfQ==