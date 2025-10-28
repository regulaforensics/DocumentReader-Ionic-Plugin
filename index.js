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
var FilterObjectType = /** @class */ (function () {
    function FilterObjectType() {
    }
    FilterObjectType.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FilterObjectType;
        result.list = [];
        if (jsonObject["list"] != null) {
            for (var i in jsonObject["list"]) {
                result.list.push(jsonObject["list"][i]);
            }
        }
        result.isInclude = jsonObject["isInclude"];
        return result;
    };
    return FilterObjectType;
}());
export { FilterObjectType };
var FilterObject = /** @class */ (function () {
    function FilterObject() {
    }
    FilterObject.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FilterObject;
        result.docIDsFilter = FilterObjectType.fromJson(jsonObject["docIDsFilter"]);
        result.docFormatsFilter = FilterObjectType.fromJson(jsonObject["docFormatsFilter"]);
        result.docCategoriesFilter = FilterObjectType.fromJson(jsonObject["docCategoriesFilter"]);
        result.docCountriesFilter = FilterObjectType.fromJson(jsonObject["docCountriesFilter"]);
        return result;
    };
    return FilterObject;
}());
export { FilterObject };
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
export var LivenessCheckType = {
    OVI: "checkOVI",
    MLI: "checkMLI",
    HOLO: "checkHolo",
    ED: "checkED",
    BLACK_AND_WHITE_COPY: "checkBlackAndWhiteCopy",
    DYNAPRINT: "checkDynaprint",
    GEOMETRY: "checkGeometry",
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
export var FilterCheckType = {
    CHECK_AUTH: "checkAuth",
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
export var AuthenticityCheckType = {
    USE_LIVENESS: "checkLiveness",
    UV_LUMINISCENCE: "checkUVLuminiscence",
    IR_B900: "checkIRB900",
    IMAGE_PATTERNS: "checkImagePatterns",
    FIBERS: "checkFibers",
    EXT_MRZ: "checkExtMRZ",
    EXT_OCR: "checkExtOCR",
    AXIAL: "checkAxial",
    BARCODE_FORMAT: "checkBarcodeFormat",
    IR_VISIBILITY: "checkIRVisibility",
    IPI: "checkIPI",
    PHOTO_EMBEDDING: "checkPhotoEmbedding",
    PHOTO_COMPARISON: "checkPhotoComparison",
    LETTER_SCREEN: "checkLetterScreen++",
    SECURITY_TEXT: "checkSecurityText",
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
    LivenessCheckType: LivenessCheckType,
    eLDS_ParsingErrorCodes: eLDS_ParsingErrorCodes,
    eRFID_CertificateType: eRFID_CertificateType,
    RGLMeasureSystem: RGLMeasureSystem,
    eRPRM_ResultType: eRPRM_ResultType,
    FrameShapeType: FrameShapeType,
    eRFID_BaudRate: eRFID_BaudRate,
    LineCap: LineCap,
    FilterCheckType: FilterCheckType,
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
    AuthenticityCheckType: AuthenticityCheckType,
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
    DocumentReaderOriginal.prototype.endBackendTransaction = function () { return cordova(this, "endBackendTransaction", {}, arguments); };
    DocumentReaderOriginal.prototype.getTranslation = function (className, value) { return cordova(this, "getTranslation", {}, arguments); };
    DocumentReaderOriginal.prototype.processParamsSetCheckFilter = function (checkType, filter) { return cordova(this, "processParamsSetCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.processParamsRemoveCheckFilter = function (checkType) { return cordova(this, "processParamsRemoveCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.processParamsClearCheckFilter = function () { return cordova(this, "processParamsClearCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.authenticityParamsSetCheckFilter = function (checkType, filter) { return cordova(this, "authenticityParamsSetCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.authenticityParamsRemoveCheckFilter = function (checkType) { return cordova(this, "authenticityParamsRemoveCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.authenticityParamsClearCheckFilter = function () { return cordova(this, "authenticityParamsClearCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.livenessParamsSetCheckFilter = function (checkType, filter) { return cordova(this, "livenessParamsSetCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.livenessParamsRemoveCheckFilter = function (checkType) { return cordova(this, "livenessParamsRemoveCheckFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.livenessParamsClearCheckFilter = function () { return cordova(this, "livenessParamsClearCheckFilter", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQWlCdkIsK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzlDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1FBQ3hGLE1BQU0sQ0FBQyxpQ0FBaUMsR0FBRyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUMxRixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMs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RztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsdUJBQXVCLEVBQUUsR0FBRztJQUM1Qix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJ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QixFQUFFLE1BQWMsRUFBRSxRQUFpQjtJQUd2SCwrREFBc0MsYUFBQyxPQUE4QixFQUFFLFNBQWlCLEVBQUUsSUFBWSxFQUFFLE1BQWMsRUFBRSxRQUFpQjtJQUd6SSx3Q0FBZSxhQUFDLE9BQThCLEVBQUUsU0FBaUI7SUFHakUsNENBQW1CLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLElBQVk7SUFHbkYsaURBQXdCLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLE1BQWM7SUFHMUYsMERBQWlDLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxTQUFpQjtJQUd0SCwrREFBc0MsYUFBQyxPQUE4QixFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLFNBQWlCLEVBQUUsS0FBYTtJQUcxSSxnREFBdUIsYUFBQyxPQUE4QixFQUFFLFNBQWlCO0lBR3pFLHNEQUE2QixhQUFDLE9BQThCLEVBQUUsU0FBaUIsRUFBRSxNQUFjO0lBRy9GLCtEQUFzQyxhQUFDLE9BQThCLEVBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQUUsU0FBaUI7SUFHM0gsb0VBQTJDLGFBQUMsT0FBOEIsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxTQUFpQixFQUFFLEtBQWE7SUFHL0ksbUNBQVUsYUFBQyxPQUE4QixFQUFFLFVBQW9CO0lBRy9ELDRDQUFtQixhQUFDLE9BQThCOzs7Ozs7eUJBbC9MdEQ7RUFzM0tvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbXVsdGlQYWdlT2ZmPzogYm9vbGVhblxuICAgIGZyYW1lS1dITGFuZHNjYXBlPzogbnVtYmVyXG4gICAgZnJhbWVLV0hQb3J0cmFpdD86IG51bWJlclxuICAgIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlPzogbnVtYmVyXG4gICAgZnJhbWVPcmllbnRhdGlvbj86IG51bWJlclxuICAgIHV2VG9yY2g/OiBib29sZWFuXG4gICAgZmFjZUV4dD86IGJvb2xlYW5cbiAgICBzZXJpZXNQcm9jZXNzTW9kZT86IGJvb2xlYW5cbiAgICBtYW51YWxDcm9wPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJTY2VuYXJpb1xuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpUGFnZU9mZiA9IGpzb25PYmplY3RbXCJtdWx0aVBhZ2VPZmZcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dITGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dITGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnV2VG9yY2ggPSBqc29uT2JqZWN0W1widXZUb3JjaFwiXVxuICAgICAgICByZXN1bHQuZmFjZUV4dCA9IGpzb25PYmplY3RbXCJmYWNlRXh0XCJdXG4gICAgICAgIHJlc3VsdC5zZXJpZXNQcm9jZXNzTW9kZSA9IGpzb25PYmplY3RbXCJzZXJpZXNQcm9jZXNzTW9kZVwiXVxuICAgICAgICByZXN1bHQubWFudWFsQ3JvcCA9IGpzb25PYmplY3RbXCJtYW51YWxDcm9wXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG4gICAgbGlnaHQ/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBvcmlnaW5hbFBhZ2VJbmRleD86IG51bWJlclxuICAgIGZpZWxkTmFtZT86IHN0cmluZ1xuICAgIGxpZ2h0TmFtZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgZmllbGRSZWN0PzogUmVjdFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkXG5cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGlnaHQgPSBqc29uT2JqZWN0W1wibGlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsUGFnZUluZGV4ID0ganNvbk9iamVjdFtcIm9yaWdpbmFsUGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5saWdodE5hbWUgPSBqc29uT2JqZWN0W1wibGlnaHROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZmllbGRSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIG9yaWdpbmFsVmFsdWU/OiBzdHJpbmdcbiAgICBib3VuZFJlY3Q/OiBSZWN0XG4gICAgb3JpZ2luYWxTeW1ib2xzPzogRG9jdW1lbnRSZWFkZXJTeW1ib2xbXVxuICAgIHJmaWRPcmlnaW4/OiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsdWVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcm9iYWJpbGl0eSA9IGpzb25PYmplY3RbXCJwcm9iYWJpbGl0eVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsVmFsdWUgPSBqc29uT2JqZWN0W1wib3JpZ2luYWxWYWx1ZVwiXVxuICAgICAgICByZXN1bHQuYm91bmRSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRSZWN0XCJdKVxuICAgICAgICByZXN1bHQub3JpZ2luYWxTeW1ib2xzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJvcmlnaW5hbFN5bWJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJvcmlnaW5hbFN5bWJvbHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJTeW1ib2wuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZmlkT3JpZ2luID0gRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkT3JpZ2luXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG4gICAgbGNpZD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGxjaWROYW1lPzogc3RyaW5nXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBnZXRWYWx1ZT86IERvY3VtZW50UmVhZGVyVmFsdWVcbiAgICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cbiAgICBjb21wYXJpc29uTGlzdD86IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbltdXG4gICAgdmFsaWRpdHlMaXN0PzogRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVtdXG4gICAgY29tcGFyaXNvblN0YXR1cz86IG51bWJlclxuICAgIHZhbGlkaXR5U3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRcblxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGNpZCA9IGpzb25PYmplY3RbXCJsY2lkXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmdldFZhbHVlID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ2V0VmFsdWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWx1ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInZhbHVlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInZhbHVlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29tcGFyaXNvbkxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uLmZyb21Kc29uKGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsaWRpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbGlkaXR5TGlzdFwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWxpZGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY29tcGFyaXNvblN0YXR1cz86IG51bWJlclxuICAgIHZhbGlkaXR5U3RhdHVzPzogbnVtYmVyXG4gICAgYXZhaWxhYmxlU291cmNlTGlzdD86IERvY3VtZW50UmVhZGVyVGV4dFNvdXJjZVtdXG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY29tcGFyaXNvblN0YXR1cyA9IGpzb25PYmplY3RbXCJjb21wYXJpc29uU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF2YWlsYWJsZVNvdXJjZUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvb3JkaW5hdGVcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudFBvc2l0aW9uIHtcbiAgICBkb2NGb3JtYXQ/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIGRwaT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGludmVyc2U/OiBudW1iZXJcbiAgICBwZXJzcGVjdGl2ZVRyPzogbnVtYmVyXG4gICAgb2JqQXJlYT86IG51bWJlclxuICAgIG9iakludEFuZ2xlRGV2PzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzPzogbnVtYmVyXG4gICAgYW5nbGU/OiBudW1iZXJcbiAgICBjZW50ZXI/OiBDb29yZGluYXRlXG4gICAgbGVmdFRvcD86IENvb3JkaW5hdGVcbiAgICBsZWZ0Qm90dG9tPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0VG9wPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0Qm90dG9tPzogQ29vcmRpbmF0ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFbGVtZW50UG9zaXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFbGVtZW50UG9zaXRpb25cblxuICAgICAgICByZXN1bHQuZG9jRm9ybWF0ID0ganNvbk9iamVjdFtcImRvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmRwaSA9IGpzb25PYmplY3RbXCJkcGlcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmludmVyc2UgPSBqc29uT2JqZWN0W1wiaW52ZXJzZVwiXVxuICAgICAgICByZXN1bHQucGVyc3BlY3RpdmVUciA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZVRyXCJdXG4gICAgICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICAgICAgcmVzdWx0Lm9iakludEFuZ2xlRGV2ID0ganNvbk9iamVjdFtcIm9iakludEFuZ2xlRGV2XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgICAgICByZXN1bHQuY2VudGVyID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VudGVyXCJdKVxuICAgICAgICByZXN1bHQubGVmdFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImxlZnRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5yaWdodEJvdHRvbSA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0Qm90dG9tXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHkge1xuICAgIGZlYXR1cmVUeXBlPzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIGJvdW5kUmVjdHM/OiBSZWN0W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5XG5cbiAgICAgICAgcmVzdWx0LmZlYXR1cmVUeXBlID0ganNvbk9iamVjdFtcImZlYXR1cmVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kUmVjdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJib3VuZFJlY3RzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYm91bmRSZWN0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5R3JvdXAge1xuICAgIGNvdW50PzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgaW1hZ2VRdWFsaXR5TGlzdD86IEltYWdlUXVhbGl0eVtdXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5R3JvdXBcblxuICAgICAgICByZXN1bHQuY291bnQgPSBqc29uT2JqZWN0W1wiY291bnRcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlUXVhbGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHlMaXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZG9jdW1lbnRJRD86IG51bWJlclxuICAgIGRUeXBlPzogbnVtYmVyXG4gICAgZEZvcm1hdD86IG51bWJlclxuICAgIGRNUlo/OiBib29sZWFuXG4gICAgaXNEZXByZWNhdGVkPzogYm9vbGVhblxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBJQ0FPQ29kZT86IHN0cmluZ1xuICAgIGREZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGRZZWFyPzogc3RyaW5nXG4gICAgZENvdW50cnlOYW1lPzogc3RyaW5nXG4gICAgRkRTSUQ/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50SUQgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRFwiXVxuICAgICAgICByZXN1bHQuZFR5cGUgPSBqc29uT2JqZWN0W1wiZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuZE1SWiA9IGpzb25PYmplY3RbXCJkTVJaXCJdXG4gICAgICAgIHJlc3VsdC5pc0RlcHJlY2F0ZWQgPSBqc29uT2JqZWN0W1wiaXNEZXByZWNhdGVkXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kRGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZERlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kWWVhciA9IGpzb25PYmplY3RbXCJkWWVhclwiXVxuICAgICAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgICAgICByZXN1bHQuRkRTSUQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIkZEU0lEXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiRkRTSURcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuRkRTSUQucHVzaChqc29uT2JqZWN0W1wiRkRTSURcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbkNvZGU/OiBudW1iZXJcbiAgICBkYXRhRmlsZVR5cGU/OiBudW1iZXJcbiAgICBwcm9ncmVzcz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbkNvZGUgPSBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uQ29kZVwiXVxuICAgICAgICByZXN1bHQuZGF0YUZpbGVUeXBlID0ganNvbk9iamVjdFtcImRhdGFGaWxlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJvZ3Jlc3MgPSBqc29uT2JqZWN0W1wicHJvZ3Jlc3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGFjdGl2ZU9wdGlvbklkeD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVxuXG4gICAgICAgIHJlc3VsdC5hY3RpdmVPcHRpb25JZHggPSBqc29uT2JqZWN0W1wiYWN0aXZlT3B0aW9uSWR4XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlRGF0YVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgc2VjdXJpdHlPYmplY3Q/OiBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlc1xuXG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdCA9IENlcnRpZmljYXRlRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGUge1xuICAgIHJlYWRpbmdUaW1lPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHR5cGVOYW1lPzogc3RyaW5nXG4gICAgcEFTdGF0dXM/OiBudW1iZXJcbiAgICByZWFkaW5nU3RhdHVzPzogbnVtYmVyXG4gICAgZmlsZUlEPzogc3RyaW5nXG4gICAgZmlsZURhdGE/OiBGaWxlRGF0YVxuICAgIGNlcnRpZmljYXRlcz86IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG4gICAgZG9jRmllbGRzVGV4dD86IG51bWJlcltdXG4gICAgZG9jRmllbGRzR3JhcGhpY3M/OiBudW1iZXJbXVxuICAgIGRvY0ZpZWxkc09yaWdpbmFscz86IG51bWJlcltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdUaW1lID0ganNvbk9iamVjdFtcInJlYWRpbmdUaW1lXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnR5cGVOYW1lID0ganNvbk9iamVjdFtcInR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5wQVN0YXR1cyA9IGpzb25PYmplY3RbXCJwQVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVhZGluZ1N0YXR1cyA9IGpzb25PYmplY3RbXCJyZWFkaW5nU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5maWxlSUQgPSBqc29uT2JqZWN0W1wiZmlsZUlEXCJdXG4gICAgICAgIHJlc3VsdC5maWxlRGF0YSA9IEZpbGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlcyA9IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZXNcIl0pXG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0LnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzLnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBhcHBsaWNhdGlvbklEPzogc3RyaW5nXG4gICAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgICB1bmljb2RlVmVyc2lvbj86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBmaWxlcz86IEZpbGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBcHBsaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhSGFzaEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkYXRhSGFzaEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQudW5pY29kZVZlcnNpb24gPSBqc29uT2JqZWN0W1widW5pY29kZVZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZmlsZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpbGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmlsZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRmlsZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmlsZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGZvcm1hdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbHVlXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZhbHVlPzogVmFsdWVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eSB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGZyaWVuZGx5TmFtZT86IFZhbHVlXG4gICAgYXR0cmlidXRlcz86IEF0dHJpYnV0ZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF1dGhvcml0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhvcml0eVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgdHlwZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFeHRlbnNpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFeHRlbnNpb25cblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsaWRpdHkge1xuICAgIG5vdEFmdGVyPzogVmFsdWVcbiAgICBub3RCZWZvcmU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWxpZGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICAgICAgcmVzdWx0Lm5vdEFmdGVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEFmdGVyXCJdKVxuICAgICAgICByZXN1bHQubm90QmVmb3JlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEJlZm9yZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgb3JpZ2luPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHN1YmplY3RQS0FsZ29yaXRobT86IHN0cmluZ1xuICAgIGZpbGVOYW1lPzogVmFsdWVcbiAgICB2YWxpZGl0eT86IFZhbGlkaXR5XG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgc3ViamVjdD86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVDaGFpblxuXG4gICAgICAgIHJlc3VsdC5vcmlnaW4gPSBqc29uT2JqZWN0W1wib3JpZ2luXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQucGFTdGF0dXMgPSBqc29uT2JqZWN0W1wicGFTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnN1YmplY3RQS0FsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzdWJqZWN0UEtBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LmZpbGVOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVOYW1lXCJdKVxuICAgICAgICByZXN1bHQudmFsaWRpdHkgPSBWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlcIl0pXG4gICAgICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3QgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5leHRlbnNpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduZXJJbmZvIHtcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhVG9IYXNoPzogc3RyaW5nXG4gICAgZGlnZXN0QWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2VyaWFsTnVtYmVyPzogVmFsdWVcbiAgICBzaWduYXR1cmU/OiBWYWx1ZVxuICAgIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpZ25lckluZm8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaWduZXJJbmZvXG5cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQucGFTdGF0dXMgPSBqc29uT2JqZWN0W1wicGFTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFUb0hhc2ggPSBqc29uT2JqZWN0W1wiZGF0YVRvSGFzaFwiXVxuICAgICAgICByZXN1bHQuZGlnZXN0QWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRpZ2VzdEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXSlcbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0S2V5SWRlbnRpZmllciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0S2V5SWRlbnRpZmllclwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3Qge1xuICAgIGZpbGVSZWZlcmVuY2U/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgb2JqZWN0VHlwZT86IHN0cmluZ1xuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lckluZm9zPzogU2lnbmVySW5mb1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlY3VyaXR5T2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RcblxuICAgICAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lm9iamVjdFR5cGUgPSBqc29uT2JqZWN0W1wib2JqZWN0VHlwZVwiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTaWduZXJJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFByb3BlcnRpZXMge1xuICAgIGFUUUE/OiBudW1iZXJcbiAgICBiaXRSYXRlUj86IG51bWJlclxuICAgIGJpdFJhdGVTPzogbnVtYmVyXG4gICAgY2hpcFR5cGVBPzogbnVtYmVyXG4gICAgbWlmYXJlTWVtb3J5PzogbnVtYmVyXG4gICAgcmZpZFR5cGU/OiBudW1iZXJcbiAgICBzQUs/OiBudW1iZXJcbiAgICBzdXBwb3J0ND86IGJvb2xlYW5cbiAgICBzdXBwb3J0TWlmYXJlPzogYm9vbGVhblxuICAgIGFUUUI/OiBzdHJpbmdcbiAgICBhVFI/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTE/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgICB1SUQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2FyZFByb3BlcnRpZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDYXJkUHJvcGVydGllc1xuXG4gICAgICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVSID0ganNvbk9iamVjdFtcImJpdFJhdGVSXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUyA9IGpzb25PYmplY3RbXCJiaXRSYXRlU1wiXVxuICAgICAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgICAgICByZXN1bHQubWlmYXJlTWVtb3J5ID0ganNvbk9iamVjdFtcIm1pZmFyZU1lbW9yeVwiXVxuICAgICAgICByZXN1bHQucmZpZFR5cGUgPSBqc29uT2JqZWN0W1wicmZpZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnQ0ID0ganNvbk9iamVjdFtcInN1cHBvcnQ0XCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0TWlmYXJlID0ganNvbk9iamVjdFtcInN1cHBvcnRNaWZhcmVcIl1cbiAgICAgICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgICAgICByZXN1bHQuYVRSID0ganNvbk9iamVjdFtcImFUUlwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUxID0ganNvbk9iamVjdFtcImJhdWRyYXRlMVwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgICAgICByZXN1bHQudUlEID0ganNvbk9iamVjdFtcInVJRFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGEge1xuICAgIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICAgIHRvdGFsQnl0ZXNTZW50PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gICAgcHJvY2Vzc1RpbWU/OiBudW1iZXJcbiAgICBjYXJkUHJvcGVydGllcz86IENhcmRQcm9wZXJ0aWVzXG4gICAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gICAgYXBwbGljYXRpb25zPzogQXBwbGljYXRpb25bXVxuICAgIHNlY3VyaXR5T2JqZWN0cz86IFNlY3VyaXR5T2JqZWN0W11cbiAgICBkYXRhR3JvdXBzPzogbnVtYmVyW11cbiAgICBkYXRhRmllbGRzPzogRGF0YUZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNlc3Npb25EYXRhXG5cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNSZWNlaXZlZCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzUmVjZWl2ZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5leHRMZVN1cHBvcnQgPSBqc29uT2JqZWN0W1wiZXh0TGVTdXBwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgICAgICByZXN1bHQuY2FyZFByb3BlcnRpZXMgPSBDYXJkUHJvcGVydGllcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2FyZFByb3BlcnRpZXNcIl0pXG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWNjZXNzQ29udHJvbHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBcHBsaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNlY3VyaXR5T2JqZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZGF0YUdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YUdyb3Vwc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFHcm91cHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YUdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJkYXRhR3JvdXBzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kYXRhRmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhRmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YUZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEYXRhRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImRhdGFGaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YUZpZWxkcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUZpZWxkIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERhdGFGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGFGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHR5cGVOYW1lPzogc3RyaW5nXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZWxlbWVudHM/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1xuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGVOYW1lID0ganNvbk9iamVjdFtcInR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZWxlbWVudHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImVsZW1lbnRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVsZW1lbnRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQREY0MTdJbmZvIHtcbiAgICBlcnJvckxldmVsPzogbnVtYmVyXG4gICAgY29sdW1ucz86IG51bWJlclxuICAgIHJvd3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUERGNDE3SW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBERjQxN0luZm9cblxuICAgICAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgICAgIHJlc3VsdC5jb2x1bW5zID0ganNvbk9iamVjdFtcImNvbHVtbnNcIl1cbiAgICAgICAgcmVzdWx0LnJvd3MgPSBqc29uT2JqZWN0W1wicm93c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB7XG4gICAgYmFyY29kZVR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBwZGY0MTdJbmZvPzogUERGNDE3SW5mb1xuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlVHlwZSA9IGpzb25PYmplY3RbXCJiYXJjb2RlVHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQucGRmNDE3SW5mbyA9IFBERjQxN0luZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInBkZjQxN0luZm9cIl0pXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGNoZWNrcz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2tbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2hlY2tzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2hlY2tzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2suZnJvbUpzb24oanNvbk9iamVjdFtcImNoZWNrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jaGVja3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGU/OiBudW1iZXJcbiAgICBlbGVtZW50RGlhZ25vc2U/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZU5hbWU/OiBzdHJpbmdcbiAgICBlbGVtZW50RGlhZ25vc2VOYW1lPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudERpYWdub3NlID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGVOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlTmFtZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudERpYWdub3NlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VOYW1lXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB7XG4gICAgYWN0aW9uPzogbnVtYmVyXG4gICAgcmVzdWx0cz86IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuICAgIGVycm9yPzogUmVndWxhRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5hY3Rpb24gPSBqc29uT2JqZWN0W1wiYWN0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gRG9jdW1lbnRSZWFkZXJSZXN1bHRzLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdKVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBSZWd1bGFFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB7XG4gICAgbm90aWZpY2F0aW9uPzogbnVtYmVyXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb24gPSBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWd1bGFFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlZ3VsYUV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlZ3VsYUV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQS0RDZXJ0aWZpY2F0ZSB7XG4gICAgYmluYXJ5RGF0YT86IHN0cmluZ1xuICAgIHJlc291cmNlVHlwZT86IG51bWJlclxuICAgIHByaXZhdGVLZXk/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEtEQ2VydGlmaWNhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQS0RDZXJ0aWZpY2F0ZVxuXG4gICAgICAgIHJlc3VsdC5iaW5hcnlEYXRhID0ganNvbk9iamVjdFtcImJpbmFyeURhdGFcIl1cbiAgICAgICAgcmVzdWx0LnJlc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJyZXNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnByaXZhdGVLZXkgPSBqc29uT2JqZWN0W1wicHJpdmF0ZUtleVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUY2NQYXJhbXMge1xuICAgIHNlcnZpY2VVcmxUQT86IHN0cmluZ1xuICAgIHNlcnZpY2VVcmxQQT86IHN0cmluZ1xuICAgIHBmeENlcnRVcmw/OiBzdHJpbmdcbiAgICBwZnhQYXNzUGhyYXNlPzogc3RyaW5nXG4gICAgcGZ4Q2VydD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUY2NQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUY2NQYXJhbXNcblxuICAgICAgICByZXN1bHQuc2VydmljZVVybFRBID0ganNvbk9iamVjdFtcInNlcnZpY2VVcmxUQVwiXVxuICAgICAgICByZXN1bHQuc2VydmljZVVybFBBID0ganNvbk9iamVjdFtcInNlcnZpY2VVcmxQQVwiXVxuICAgICAgICByZXN1bHQucGZ4Q2VydFVybCA9IGpzb25PYmplY3RbXCJwZnhDZXJ0VXJsXCJdXG4gICAgICAgIHJlc3VsdC5wZnhQYXNzUGhyYXNlID0ganNvbk9iamVjdFtcInBmeFBhc3NQaHJhc2VcIl1cbiAgICAgICAgcmVzdWx0LnBmeENlcnQgPSBqc29uT2JqZWN0W1wicGZ4Q2VydFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUlucHV0UGFyYW0ge1xuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIGRpc2FibGVGcmFtZVNoaWZ0SVI/OiBib29sZWFuXG4gICAgZG9GbGlwWUF4aXM/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlSW5wdXRQYXJhbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXRQYXJhbVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5kaXNhYmxlRnJhbWVTaGlmdElSID0ganNvbk9iamVjdFtcImRpc2FibGVGcmFtZVNoaWZ0SVJcIl1cbiAgICAgICAgcmVzdWx0LmRvRmxpcFlBeGlzID0ganNvbk9iamVjdFtcImRvRmxpcFlBeGlzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBUmVzb3VyY2VzSXNzdWVyIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogc3RyaW5nXG4gICAgYXR0cmlidXRlcz86IFBBQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFSZXNvdXJjZXNJc3N1ZXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQQVJlc291cmNlc0lzc3VlclxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBBQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFBdHRyaWJ1dGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQQUF0dHJpYnV0ZVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRBQ2hhbGxlbmdlIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgYXV4UENEPzogc3RyaW5nXG4gICAgY2hhbGxlbmdlUElDQz86IHN0cmluZ1xuICAgIGhhc2hQSz86IHN0cmluZ1xuICAgIGlkUElDQz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUQUNoYWxsZW5nZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRBQ2hhbGxlbmdlXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuYXV4UENEID0ganNvbk9iamVjdFtcImF1eFBDRFwiXVxuICAgICAgICByZXN1bHQuY2hhbGxlbmdlUElDQyA9IGpzb25PYmplY3RbXCJjaGFsbGVuZ2VQSUNDXCJdXG4gICAgICAgIHJlc3VsdC5oYXNoUEsgPSBqc29uT2JqZWN0W1wiaGFzaFBLXCJdXG4gICAgICAgIHJlc3VsdC5pZFBJQ0MgPSBqc29uT2JqZWN0W1wiaWRQSUNDXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cyB7XG4gICAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuICAgIG9wdGljYWw/OiBudW1iZXJcbiAgICBkZXRhaWxzT3B0aWNhbD86IERldGFpbHNPcHRpY2FsXG4gICAgcmZpZD86IG51bWJlclxuICAgIGRldGFpbHNSRklEPzogRGV0YWlsc1JGSURcbiAgICBwb3J0cmFpdD86IG51bWJlclxuICAgIHN0b3BMaXN0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1c1xuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm9wdGljYWwgPSBqc29uT2JqZWN0W1wib3B0aWNhbFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc09wdGljYWwgPSBEZXRhaWxzT3B0aWNhbC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc09wdGljYWxcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkID0ganNvbk9iamVjdFtcInJmaWRcIl1cbiAgICAgICAgcmVzdWx0LmRldGFpbHNSRklEID0gRGV0YWlsc1JGSUQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGFpbHNSRklEXCJdKVxuICAgICAgICByZXN1bHQucG9ydHJhaXQgPSBqc29uT2JqZWN0W1wicG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LnN0b3BMaXN0ID0ganNvbk9iamVjdFtcInN0b3BMaXN0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNPcHRpY2FsIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgbXJ6PzogbnVtYmVyXG4gICAgdGV4dD86IG51bWJlclxuICAgIGRvY1R5cGU/OiBudW1iZXJcbiAgICBzZWN1cml0eT86IG51bWJlclxuICAgIGltYWdlUUE/OiBudW1iZXJcbiAgICBleHBpcnk/OiBudW1iZXJcbiAgICB2ZHM/OiBudW1iZXJcbiAgICBwYWdlc0NvdW50PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNPcHRpY2FsIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc09wdGljYWxcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC50ZXh0ID0ganNvbk9iamVjdFtcInRleHRcIl1cbiAgICAgICAgcmVzdWx0LmRvY1R5cGUgPSBqc29uT2JqZWN0W1wiZG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuc2VjdXJpdHkgPSBqc29uT2JqZWN0W1wic2VjdXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBqc29uT2JqZWN0W1wiaW1hZ2VRQVwiXVxuICAgICAgICByZXN1bHQuZXhwaXJ5ID0ganNvbk9iamVjdFtcImV4cGlyeVwiXVxuICAgICAgICByZXN1bHQudmRzID0ganNvbk9iamVjdFtcInZkc1wiXVxuICAgICAgICByZXN1bHQucGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJwYWdlc0NvdW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNSRklEIHtcbiAgICBwYT86IG51bWJlclxuICAgIGNhPzogbnVtYmVyXG4gICAgYWE/OiBudW1iZXJcbiAgICB0YT86IG51bWJlclxuICAgIGJhYz86IG51bWJlclxuICAgIHBhY2U/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNSRklEIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc1JGSURcblxuICAgICAgICByZXN1bHQucGEgPSBqc29uT2JqZWN0W1wicGFcIl1cbiAgICAgICAgcmVzdWx0LmNhID0ganNvbk9iamVjdFtcImNhXCJdXG4gICAgICAgIHJlc3VsdC5hYSA9IGpzb25PYmplY3RbXCJhYVwiXVxuICAgICAgICByZXN1bHQudGEgPSBqc29uT2JqZWN0W1widGFcIl1cbiAgICAgICAgcmVzdWx0LmJhYyA9IGpzb25PYmplY3RbXCJiYWNcIl1cbiAgICAgICAgcmVzdWx0LnBhY2UgPSBqc29uT2JqZWN0W1wicGFjZVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZEU05DRGF0YSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBpc3N1aW5nQ291bnRyeT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZEU05DRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZEU05DRGF0YVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuaXNzdWluZ0NvdW50cnkgPSBqc29uT2JqZWN0W1wiaXNzdWluZ0NvdW50cnlcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZXNEYXRhIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCeXRlc0RhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCeXRlc0RhdGFcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dERhdGEge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGxpZ2h0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgaW1nQnl0ZXM/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dERhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZUlucHV0RGF0YVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5saWdodCA9IGpzb25PYmplY3RbXCJsaWdodFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQuaW1nQnl0ZXMgPSBqc29uT2JqZWN0W1wiaW1nQnl0ZXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2Uge1xuICAgIGRhdGFiYXNlSUQ/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogc3RyaW5nXG4gICAgZGF0ZT86IHN0cmluZ1xuICAgIGRhdGFiYXNlRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBjb3VudHJpZXNOdW1iZXI/OiBudW1iZXJcbiAgICBkb2N1bWVudHNOdW1iZXI/OiBudW1iZXJcbiAgICBzaXplPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2VcblxuICAgICAgICByZXN1bHQuZGF0YWJhc2VJRCA9IGpzb25PYmplY3RbXCJkYXRhYmFzZUlEXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LmRhdGUgPSBqc29uT2JqZWN0W1wiZGF0ZVwiXVxuICAgICAgICByZXN1bHQuZGF0YWJhc2VEZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkYXRhYmFzZURlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5jb3VudHJpZXNOdW1iZXIgPSBqc29uT2JqZWN0W1wiY291bnRyaWVzTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudHNOdW1iZXIgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRzTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uIHtcbiAgICBzb3VyY2VUeXBlTGVmdD86IG51bWJlclxuICAgIHNvdXJjZVR5cGVSaWdodD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb25cblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZUxlZnQgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZUxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGVSaWdodCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlUmlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luIHtcbiAgICBkZz86IG51bWJlclxuICAgIGRnVGFnPzogbnVtYmVyXG4gICAgZW50cnlWaWV3PzogbnVtYmVyXG4gICAgdGFnRW50cnk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZmlkT3JpZ2luXG5cbiAgICAgICAgcmVzdWx0LmRnID0ganNvbk9iamVjdFtcImRnXCJdXG4gICAgICAgIHJlc3VsdC5kZ1RhZyA9IGpzb25PYmplY3RbXCJkZ1RhZ1wiXVxuICAgICAgICByZXN1bHQuZW50cnlWaWV3ID0ganNvbk9iamVjdFtcImVudHJ5Vmlld1wiXVxuICAgICAgICByZXN1bHQudGFnRW50cnkgPSBqc29uT2JqZWN0W1widGFnRW50cnlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlIHtcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgc291cmNlPzogc3RyaW5nXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlXG5cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQuc291cmNlID0ganNvbk9iamVjdFtcInNvdXJjZVwiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHlTdGF0dXMgPSBqc29uT2JqZWN0W1widmFsaWRpdHlTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJTeW1ib2wge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICByZWN0PzogUmVjdFxuICAgIHByb2JhYmlsaXR5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU3ltYm9sIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJTeW1ib2xcblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5yZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsaWRpdHkge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsaWRpdHlcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ubGluZVByb2Nlc3NpbmdDb25maWcge1xuICAgIG1vZGU/OiBudW1iZXJcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBwcm9jZXNzUGFyYW1zPzogUHJvY2Vzc1BhcmFtc1xuICAgIGltYWdlRm9ybWF0PzogbnVtYmVyXG4gICAgaW1hZ2VDb21wcmVzc2lvblF1YWxpdHk/OiBudW1iZXJcbiAgICByZXF1ZXN0SGVhZGVycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT25saW5lUHJvY2Vzc2luZ0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE9ubGluZVByb2Nlc3NpbmdDb25maWdcblxuICAgICAgICByZXN1bHQubW9kZSA9IGpzb25PYmplY3RbXCJtb2RlXCJdXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzUGFyYW1zID0gUHJvY2Vzc1BhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wicHJvY2Vzc1BhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlRm9ybWF0ID0ganNvbk9iamVjdFtcImltYWdlRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZUNvbXByZXNzaW9uUXVhbGl0eSA9IGpzb25PYmplY3RbXCJpbWFnZUNvbXByZXNzaW9uUXVhbGl0eVwiXVxuICAgICAgICByZXN1bHQucmVxdWVzdEhlYWRlcnMgPSBqc29uT2JqZWN0W1wicmVxdWVzdEhlYWRlcnNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jUmVhZGVyQ29uZmlnIHtcbiAgICBsaWNlbnNlPzogc3RyaW5nXG4gICAgY3VzdG9tRGI/OiBzdHJpbmdcbiAgICBkYXRhYmFzZVBhdGg/OiBzdHJpbmdcbiAgICBsaWNlbnNlVXBkYXRlPzogYm9vbGVhblxuICAgIGxpY2Vuc2VVcGRhdGVUaW1lb3V0PzogbnVtYmVyXG4gICAgZGVsYXllZE5OTG9hZD86IGJvb2xlYW5cbiAgICBibGFja0xpc3Q/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY1JlYWRlckNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5saWNlbnNlID0ganNvbk9iamVjdFtcImxpY2Vuc2VcIl1cbiAgICAgICAgcmVzdWx0LmN1c3RvbURiID0ganNvbk9iamVjdFtcImN1c3RvbURiXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhYmFzZVBhdGggPSBqc29uT2JqZWN0W1wiZGF0YWJhc2VQYXRoXCJdXG4gICAgICAgIHJlc3VsdC5saWNlbnNlVXBkYXRlID0ganNvbk9iamVjdFtcImxpY2Vuc2VVcGRhdGVcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGVUaW1lb3V0ID0ganNvbk9iamVjdFtcImxpY2Vuc2VVcGRhdGVUaW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5kZWxheWVkTk5Mb2FkID0ganNvbk9iamVjdFtcImRlbGF5ZWROTkxvYWRcIl1cbiAgICAgICAgcmVzdWx0LmJsYWNrTGlzdCA9IGpzb25PYmplY3RbXCJibGFja0xpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2Nhbm5lckNvbmZpZyB7XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBsaXZlUG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBleHRQb3J0cmFpdD86IHN0cmluZ1xuICAgIG9ubGluZVByb2Nlc3NpbmdDb25maWc/OiBPbmxpbmVQcm9jZXNzaW5nQ29uZmlnXG4gICAgY2FtZXJhSWQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2Nhbm5lckNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNjYW5uZXJDb25maWdcblxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmxpdmVQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJsaXZlUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmV4dFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImV4dFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVQcm9jZXNzaW5nQ29uZmlnID0gT25saW5lUHJvY2Vzc2luZ0NvbmZpZy5mcm9tSnNvbihqc29uT2JqZWN0W1wib25saW5lUHJvY2Vzc2luZ0NvbmZpZ1wiXSlcbiAgICAgICAgcmVzdWx0LmNhbWVyYUlkID0ganNvbk9iamVjdFtcImNhbWVyYUlkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY29nbml6ZUNvbmZpZyB7XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBvbmxpbmVQcm9jZXNzaW5nQ29uZmlnPzogT25saW5lUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIG9uZVNob3RJZGVudGlmaWNhdGlvbj86IGJvb2xlYW5cbiAgICBkdGM/OiBzdHJpbmdcbiAgICBsaXZlUG9ydHJhaXQ/OiBzdHJpbmdcbiAgICBleHRQb3J0cmFpdD86IHN0cmluZ1xuICAgIGltYWdlPzogc3RyaW5nXG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGltYWdlcz86IHN0cmluZ1tdXG4gICAgaW1hZ2VJbnB1dERhdGE/OiBJbWFnZUlucHV0RGF0YVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY29nbml6ZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY29nbml6ZUNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQub25saW5lUHJvY2Vzc2luZ0NvbmZpZyA9IE9ubGluZVByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcIm9ubGluZVByb2Nlc3NpbmdDb25maWdcIl0pXG4gICAgICAgIHJlc3VsdC5vbmVTaG90SWRlbnRpZmljYXRpb24gPSBqc29uT2JqZWN0W1wib25lU2hvdElkZW50aWZpY2F0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kdGMgPSBqc29uT2JqZWN0W1wiZHRjXCJdXG4gICAgICAgIHJlc3VsdC5saXZlUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wibGl2ZVBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5leHRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJleHRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaW1hZ2VJbnB1dERhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlSW5wdXREYXRhXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VJbnB1dERhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VJbnB1dERhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlSW5wdXREYXRhXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlSW5wdXREYXRhLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaWNlbnNlIHtcbiAgICBleHBpcnlEYXRlPzogc3RyaW5nXG4gICAgY291bnRyeUZpbHRlcj86IHN0cmluZ1tdXG4gICAgaXNSZmlkQXZhaWxhYmxlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaWNlbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGljZW5zZVxuXG4gICAgICAgIHJlc3VsdC5leHBpcnlEYXRlID0ganNvbk9iamVjdFtcImV4cGlyeURhdGVcIl1cbiAgICAgICAgcmVzdWx0LmNvdW50cnlGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvdW50cnlGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb3VudHJ5RmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvdW50cnlGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wiY291bnRyeUZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaXNSZmlkQXZhaWxhYmxlID0ganNvbk9iamVjdFtcImlzUmZpZEF2YWlsYWJsZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJWZXJzaW9uIHtcbiAgICBhcGk/OiBzdHJpbmdcbiAgICBjb3JlPzogc3RyaW5nXG4gICAgY29yZU1vZGU/OiBzdHJpbmdcbiAgICBkYXRhYmFzZT86IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlclZlcnNpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJWZXJzaW9uXG5cbiAgICAgICAgcmVzdWx0LmFwaSA9IGpzb25PYmplY3RbXCJhcGlcIl1cbiAgICAgICAgcmVzdWx0LmNvcmUgPSBqc29uT2JqZWN0W1wiY29yZVwiXVxuICAgICAgICByZXN1bHQuY29yZU1vZGUgPSBqc29uT2JqZWN0W1wiY29yZU1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlID0gRG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UuZnJvbUpzb24oanNvbk9iamVjdFtcImRhdGFiYXNlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbkluZm8ge1xuICAgIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBzZXNzaW9uTG9nRm9sZGVyPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRyYW5zYWN0aW9uSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRyYW5zYWN0aW9uSW5mb1xuXG4gICAgICAgIHJlc3VsdC50cmFuc2FjdGlvbklkID0ganNvbk9iamVjdFtcInRyYW5zYWN0aW9uSWRcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnNlc3Npb25Mb2dGb2xkZXIgPSBqc29uT2JqZWN0W1wic2Vzc2lvbkxvZ0ZvbGRlclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICAgIGNoaXBQYWdlPzogbnVtYmVyXG4gICAgcHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWU/OiBudW1iZXJcbiAgICBlbGFwc2VkVGltZVJGSUQ/OiBudW1iZXJcbiAgICBtb3JlUGFnZXNBdmFpbGFibGU/OiBudW1iZXJcbiAgICBncmFwaGljUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG4gICAgdGV4dFJlc3VsdD86IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuICAgIGRvY3VtZW50UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIGJhcmNvZGVQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgbXJ6UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIGltYWdlUXVhbGl0eT86IEltYWdlUXVhbGl0eUdyb3VwW11cbiAgICByYXdSZXN1bHQ/OiBzdHJpbmdcbiAgICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICAgIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG4gICAgZHRjRGF0YT86IHN0cmluZ1xuICAgIHRyYW5zYWN0aW9uSW5mbz86IFRyYW5zYWN0aW9uSW5mb1xuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuXG4gICAgICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWUgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lUkZJRCA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVJGSURcIl1cbiAgICAgICAgcmVzdWx0Lm1vcmVQYWdlc0F2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJtb3JlUGFnZXNBdmFpbGFibGVcIl1cbiAgICAgICAgcmVzdWx0LmdyYXBoaWNSZXN1bHQgPSBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImdyYXBoaWNSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC50ZXh0UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJ0ZXh0UmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5R3JvdXAuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdSZXN1bHQgPSBqc29uT2JqZWN0W1wicmF3UmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YXR1c1wiXSlcbiAgICAgICAgcmVzdWx0LnZkc25jRGF0YSA9IFZEU05DRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1widmRzbmNEYXRhXCJdKVxuICAgICAgICByZXN1bHQuZHRjRGF0YSA9IGpzb25PYmplY3RbXCJkdGNEYXRhXCJdXG4gICAgICAgIHJlc3VsdC50cmFuc2FjdGlvbkluZm8gPSBUcmFuc2FjdGlvbkluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInRyYW5zYWN0aW9uSW5mb1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FtZXJhU2l6ZSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2FtZXJhU2l6ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENhbWVyYVNpemVcblxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25hbGl0eSB7XG4gICAgcGljdHVyZU9uQm91bmRzUmVhZHk/OiBib29sZWFuXG4gICAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhblxuICAgIHNob3dDbG9zZUJ1dHRvbj86IGJvb2xlYW5cbiAgICB2aWRlb0NhcHR1cmVNb3Rpb25Db250cm9sPzogYm9vbGVhblxuICAgIHNob3dDYXB0dXJlQnV0dG9uPzogYm9vbGVhblxuICAgIHNob3dDaGFuZ2VGcmFtZUJ1dHRvbj86IGJvb2xlYW5cbiAgICBzaG93U2tpcE5leHRQYWdlQnV0dG9uPzogYm9vbGVhblxuICAgIHVzZUF1dGhlbnRpY2F0b3I/OiBib29sZWFuXG4gICAgc2tpcEZvY3VzaW5nRnJhbWVzPzogYm9vbGVhblxuICAgIHNob3dDYW1lcmFTd2l0Y2hCdXR0b24/OiBib29sZWFuXG4gICAgZGlzcGxheU1ldGFkYXRhPzogYm9vbGVhblxuICAgIGlzWm9vbUVuYWJsZWQ/OiBib29sZWFuXG4gICAgaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWQ/OiBib29sZWFuXG4gICAgcmVjb3JkU2Nhbm5pbmdQcm9jZXNzPzogYm9vbGVhblxuICAgIG1hbnVhbE11bHRpcGFnZU1vZGU/OiBib29sZWFuXG4gICAgc2luZ2xlUmVzdWx0PzogYm9vbGVhblxuICAgIHRvcmNoVHVybmVkT24/OiBib29sZWFuXG4gICAgcHJldmVudFNjcmVlblJlY29yZGluZz86IGJvb2xlYW5cbiAgICBzaG93Q2FwdHVyZUJ1dHRvbkRlbGF5RnJvbURldGVjdD86IG51bWJlclxuICAgIHNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnQ/OiBudW1iZXJcbiAgICByZmlkVGltZW91dD86IG51bWJlclxuICAgIGZvcmNlUGFnZXNDb3VudD86IG51bWJlclxuICAgIG9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgY2FwdHVyZU1vZGU/OiBudW1iZXJcbiAgICBjYW1lcmFNb2RlPzogbnVtYmVyXG4gICAgY2FtZXJhUG9zaXRpb25JT1M/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZT86IHN0cmluZ1xuICAgIGJ0RGV2aWNlTmFtZT86IHN0cmluZ1xuICAgIHpvb21GYWN0b3I/OiBudW1iZXJcbiAgICBleHBvc3VyZT86IG51bWJlclxuICAgIHZpZGVvUmVjb3JkaW5nU2l6ZURvd25zY2FsZUZhY3Rvcj86IG51bWJlclxuICAgIGV4Y2x1ZGVkQ2FtZXJhMk1vZGVscz86IHN0cmluZ1tdXG4gICAgY2FtZXJhU2l6ZT86IENhbWVyYVNpemVcbiAgICB2aWRlb1Nlc3Npb25QcmVzZXQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRnVuY3Rpb25hbGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uYWxpdHlcblxuICAgICAgICByZXN1bHQucGljdHVyZU9uQm91bmRzUmVhZHkgPSBqc29uT2JqZWN0W1wicGljdHVyZU9uQm91bmRzUmVhZHlcIl1cbiAgICAgICAgcmVzdWx0LnNob3dUb3JjaEJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93VG9yY2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDbG9zZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2xvc2VCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnZpZGVvQ2FwdHVyZU1vdGlvbkNvbnRyb2wgPSBqc29uT2JqZWN0W1widmlkZW9DYXB0dXJlTW90aW9uQ29udHJvbFwiXVxuICAgICAgICByZXN1bHQuc2hvd0NhcHR1cmVCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd0NhcHR1cmVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dDaGFuZ2VGcmFtZUJ1dHRvbiA9IGpzb25PYmplY3RbXCJzaG93Q2hhbmdlRnJhbWVCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dTa2lwTmV4dFBhZ2VCdXR0b24gPSBqc29uT2JqZWN0W1wic2hvd1NraXBOZXh0UGFnZUJ1dHRvblwiXVxuICAgICAgICByZXN1bHQudXNlQXV0aGVudGljYXRvciA9IGpzb25PYmplY3RbXCJ1c2VBdXRoZW50aWNhdG9yXCJdXG4gICAgICAgIHJlc3VsdC5za2lwRm9jdXNpbmdGcmFtZXMgPSBqc29uT2JqZWN0W1wic2tpcEZvY3VzaW5nRnJhbWVzXCJdXG4gICAgICAgIHJlc3VsdC5zaG93Q2FtZXJhU3dpdGNoQnV0dG9uID0ganNvbk9iamVjdFtcInNob3dDYW1lcmFTd2l0Y2hCdXR0b25cIl1cbiAgICAgICAgcmVzdWx0LmRpc3BsYXlNZXRhZGF0YSA9IGpzb25PYmplY3RbXCJkaXNwbGF5TWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmlzWm9vbUVuYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNab29tRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWQgPSBqc29uT2JqZWN0W1wiaXNDYW1lcmFUb3JjaENoZWNrRGlzYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnJlY29yZFNjYW5uaW5nUHJvY2VzcyA9IGpzb25PYmplY3RbXCJyZWNvcmRTY2FubmluZ1Byb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbE11bHRpcGFnZU1vZGUgPSBqc29uT2JqZWN0W1wibWFudWFsTXVsdGlwYWdlTW9kZVwiXVxuICAgICAgICByZXN1bHQuc2luZ2xlUmVzdWx0ID0ganNvbk9iamVjdFtcInNpbmdsZVJlc3VsdFwiXVxuICAgICAgICByZXN1bHQudG9yY2hUdXJuZWRPbiA9IGpzb25PYmplY3RbXCJ0b3JjaFR1cm5lZE9uXCJdXG4gICAgICAgIHJlc3VsdC5wcmV2ZW50U2NyZWVuUmVjb3JkaW5nID0ganNvbk9iamVjdFtcInByZXZlbnRTY3JlZW5SZWNvcmRpbmdcIl1cbiAgICAgICAgcmVzdWx0LnNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tRGV0ZWN0ID0ganNvbk9iamVjdFtcInNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tRGV0ZWN0XCJdXG4gICAgICAgIHJlc3VsdC5zaG93Q2FwdHVyZUJ1dHRvbkRlbGF5RnJvbVN0YXJ0ID0ganNvbk9iamVjdFtcInNob3dDYXB0dXJlQnV0dG9uRGVsYXlGcm9tU3RhcnRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRUaW1lb3V0ID0ganNvbk9iamVjdFtcInJmaWRUaW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5mb3JjZVBhZ2VzQ291bnQgPSBqc29uT2JqZWN0W1wiZm9yY2VQYWdlc0NvdW50XCJdXG4gICAgICAgIHJlc3VsdC5vcmllbnRhdGlvbiA9IGpzb25PYmplY3RbXCJvcmllbnRhdGlvblwiXVxuICAgICAgICByZXN1bHQuY2FwdHVyZU1vZGUgPSBqc29uT2JqZWN0W1wiY2FwdHVyZU1vZGVcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYU1vZGUgPSBqc29uT2JqZWN0W1wiY2FtZXJhTW9kZVwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUG9zaXRpb25JT1MgPSBqc29uT2JqZWN0W1wiY2FtZXJhUG9zaXRpb25JT1NcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lXCJdXG4gICAgICAgIHJlc3VsdC5idERldmljZU5hbWUgPSBqc29uT2JqZWN0W1wiYnREZXZpY2VOYW1lXCJdXG4gICAgICAgIHJlc3VsdC56b29tRmFjdG9yID0ganNvbk9iamVjdFtcInpvb21GYWN0b3JcIl1cbiAgICAgICAgcmVzdWx0LmV4cG9zdXJlID0ganNvbk9iamVjdFtcImV4cG9zdXJlXCJdXG4gICAgICAgIHJlc3VsdC52aWRlb1JlY29yZGluZ1NpemVEb3duc2NhbGVGYWN0b3IgPSBqc29uT2JqZWN0W1widmlkZW9SZWNvcmRpbmdTaXplRG93bnNjYWxlRmFjdG9yXCJdXG4gICAgICAgIHJlc3VsdC5leGNsdWRlZENhbWVyYTJNb2RlbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4Y2x1ZGVkQ2FtZXJhMk1vZGVsc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4Y2x1ZGVkQ2FtZXJhMk1vZGVsc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leGNsdWRlZENhbWVyYTJNb2RlbHMucHVzaChqc29uT2JqZWN0W1wiZXhjbHVkZWRDYW1lcmEyTW9kZWxzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jYW1lcmFTaXplID0gQ2FtZXJhU2l6ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2FtZXJhU2l6ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZpZGVvU2Vzc2lvblByZXNldCA9IGpzb25PYmplY3RbXCJ2aWRlb1Nlc3Npb25QcmVzZXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2xhcmVzQ2hlY2tQYXJhbXMge1xuICAgIGltZ01hcmdpblBhcnQ/OiBudW1iZXJcbiAgICBtYXhHbGFyaW5nUGFydD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBHbGFyZXNDaGVja1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEdsYXJlc0NoZWNrUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmltZ01hcmdpblBhcnQgPSBqc29uT2JqZWN0W1wiaW1nTWFyZ2luUGFydFwiXVxuICAgICAgICByZXN1bHQubWF4R2xhcmluZ1BhcnQgPSBqc29uT2JqZWN0W1wibWF4R2xhcmluZ1BhcnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRQSB7XG4gICAgZHBpVGhyZXNob2xkPzogbnVtYmVyXG4gICAgYW5nbGVUaHJlc2hvbGQ/OiBudW1iZXJcbiAgICBmb2N1c0NoZWNrPzogYm9vbGVhblxuICAgIGdsYXJlc0NoZWNrPzogYm9vbGVhblxuICAgIGdsYXJlc0NoZWNrUGFyYW1zPzogR2xhcmVzQ2hlY2tQYXJhbXNcbiAgICBjb2xvcm5lc3NDaGVjaz86IGJvb2xlYW5cbiAgICBzY3JlZW5DYXB0dXJlPzogYm9vbGVhblxuICAgIGV4cGVjdGVkUGFzcz86IG51bWJlcltdXG4gICAgZG9jdW1lbnRQb3NpdGlvbkluZGVudD86IG51bWJlclxuICAgIGJyaWdodG5lc3NUaHJlc2hvbGQ/OiBudW1iZXJcbiAgICBvY2NsdXNpb25DaGVjaz86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRQSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUUFcblxuICAgICAgICByZXN1bHQuZHBpVGhyZXNob2xkID0ganNvbk9iamVjdFtcImRwaVRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuYW5nbGVUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wiYW5nbGVUaHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmZvY3VzQ2hlY2sgPSBqc29uT2JqZWN0W1wiZm9jdXNDaGVja1wiXVxuICAgICAgICByZXN1bHQuZ2xhcmVzQ2hlY2sgPSBqc29uT2JqZWN0W1wiZ2xhcmVzQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmdsYXJlc0NoZWNrUGFyYW1zID0gR2xhcmVzQ2hlY2tQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcImdsYXJlc0NoZWNrUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuY29sb3JuZXNzQ2hlY2sgPSBqc29uT2JqZWN0W1wiY29sb3JuZXNzQ2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LnNjcmVlbkNhcHR1cmUgPSBqc29uT2JqZWN0W1wic2NyZWVuQ2FwdHVyZVwiXVxuICAgICAgICByZXN1bHQuZXhwZWN0ZWRQYXNzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJleHBlY3RlZFBhc3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJleHBlY3RlZFBhc3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZXhwZWN0ZWRQYXNzLnB1c2goanNvbk9iamVjdFtcImV4cGVjdGVkUGFzc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbkluZGVudCA9IGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uSW5kZW50XCJdXG4gICAgICAgIHJlc3VsdC5icmlnaHRuZXNzVGhyZXNob2xkID0ganNvbk9iamVjdFtcImJyaWdodG5lc3NUaHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0Lm9jY2x1c2lvbkNoZWNrID0ganNvbk9iamVjdFtcIm9jY2x1c2lvbkNoZWNrXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURQYXJhbXMge1xuICAgIHBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5wYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJwYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGFJZ25vcmVOb3RpZmljYXRpb25Db2Rlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wYUlnbm9yZU5vdGlmaWNhdGlvbkNvZGVzLnB1c2goanNvbk9iamVjdFtcInBhSWdub3JlTm90aWZpY2F0aW9uQ29kZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUFwaVNlYXJjaFBhcmFtcyB7XG4gICAgbGltaXQ/OiBudW1iZXJcbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBncm91cElkcz86IHN0cmluZ1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VBcGlTZWFyY2hQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQXBpU2VhcmNoUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5ncm91cElkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBJZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cElkc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cElkcy5wdXNoKGpzb25PYmplY3RbXCJncm91cElkc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQXBpUGFyYW1zIHtcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBtb2RlPzogc3RyaW5nXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgc2VhcmNoUGFyYW1zPzogRmFjZUFwaVNlYXJjaFBhcmFtc1xuICAgIHNlcnZpY2VUaW1lb3V0PzogbnVtYmVyXG4gICAgcHJveHk/OiBzdHJpbmdcbiAgICBwcm94eVBhc3N3b3JkPzogc3RyaW5nXG4gICAgcHJveHlUeXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VBcGlQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQXBpUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0Lm1vZGUgPSBqc29uT2JqZWN0W1wibW9kZVwiXVxuICAgICAgICByZXN1bHQudGhyZXNob2xkID0ganNvbk9iamVjdFtcInRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuc2VhcmNoUGFyYW1zID0gRmFjZUFwaVNlYXJjaFBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VhcmNoUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuc2VydmljZVRpbWVvdXQgPSBqc29uT2JqZWN0W1wic2VydmljZVRpbWVvdXRcIl1cbiAgICAgICAgcmVzdWx0LnByb3h5ID0ganNvbk9iamVjdFtcInByb3h5XCJdXG4gICAgICAgIHJlc3VsdC5wcm94eVBhc3N3b3JkID0ganNvbk9iamVjdFtcInByb3h5UGFzc3dvcmRcIl1cbiAgICAgICAgcmVzdWx0LnByb3h5VHlwZSA9IGpzb25PYmplY3RbXCJwcm94eVR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFja2VuZFByb2Nlc3NpbmdDb25maWcge1xuICAgIHVybD86IHN0cmluZ1xuICAgIGh0dHBIZWFkZXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIHJmaWRTZXJ2ZXJTaWRlQ2hpcFZlcmlmaWNhdGlvbj86IGJvb2xlYW5cbiAgICB0aW1lb3V0Q29ubmVjdGlvbj86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCYWNrZW5kUHJvY2Vzc2luZ0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0Lmh0dHBIZWFkZXJzID0ganNvbk9iamVjdFtcImh0dHBIZWFkZXJzXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkU2VydmVyU2lkZUNoaXBWZXJpZmljYXRpb24gPSBqc29uT2JqZWN0W1wicmZpZFNlcnZlclNpZGVDaGlwVmVyaWZpY2F0aW9uXCJdXG4gICAgICAgIHJlc3VsdC50aW1lb3V0Q29ubmVjdGlvbiA9IGpzb25PYmplY3RbXCJ0aW1lb3V0Q29ubmVjdGlvblwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1BhcmFtcyB7XG4gICAgY2hlY2tPVkk/OiBib29sZWFuXG4gICAgY2hlY2tNTEk/OiBib29sZWFuXG4gICAgY2hlY2tIb2xvPzogYm9vbGVhblxuICAgIGNoZWNrRUQ/OiBib29sZWFuXG4gICAgY2hlY2tCbGFja0FuZFdoaXRlQ29weT86IGJvb2xlYW5cbiAgICBjaGVja0R5bmFwcmludD86IGJvb2xlYW5cbiAgICBjaGVja0dlb21ldHJ5PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmNoZWNrT1ZJID0ganNvbk9iamVjdFtcImNoZWNrT1ZJXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja01MSSA9IGpzb25PYmplY3RbXCJjaGVja01MSVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tIb2xvID0ganNvbk9iamVjdFtcImNoZWNrSG9sb1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tFRCA9IGpzb25PYmplY3RbXCJjaGVja0VEXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0JsYWNrQW5kV2hpdGVDb3B5ID0ganNvbk9iamVjdFtcImNoZWNrQmxhY2tBbmRXaGl0ZUNvcHlcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrRHluYXByaW50ID0ganNvbk9iamVjdFtcImNoZWNrRHluYXByaW50XCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0dlb21ldHJ5ID0ganNvbk9iamVjdFtcImNoZWNrR2VvbWV0cnlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVudGljaXR5UGFyYW1zIHtcbiAgICB1c2VMaXZlbmVzc0NoZWNrPzogYm9vbGVhblxuICAgIGxpdmVuZXNzUGFyYW1zPzogTGl2ZW5lc3NQYXJhbXNcbiAgICBjaGVja1VWTHVtaW5pc2NlbmNlPzogYm9vbGVhblxuICAgIGNoZWNrSVJCOTAwPzogYm9vbGVhblxuICAgIGNoZWNrSW1hZ2VQYXR0ZXJucz86IGJvb2xlYW5cbiAgICBjaGVja0ZpYmVycz86IGJvb2xlYW5cbiAgICBjaGVja0V4dE1SWj86IGJvb2xlYW5cbiAgICBjaGVja0V4dE9DUj86IGJvb2xlYW5cbiAgICBjaGVja0F4aWFsPzogYm9vbGVhblxuICAgIGNoZWNrQmFyY29kZUZvcm1hdD86IGJvb2xlYW5cbiAgICBjaGVja0lSVmlzaWJpbGl0eT86IGJvb2xlYW5cbiAgICBjaGVja0lQST86IGJvb2xlYW5cbiAgICBjaGVja1Bob3RvRW1iZWRkaW5nPzogYm9vbGVhblxuICAgIGNoZWNrUGhvdG9Db21wYXJpc29uPzogYm9vbGVhblxuICAgIGNoZWNrTGV0dGVyU2NyZWVuPzogYm9vbGVhblxuICAgIGNoZWNrU2VjdXJpdHlUZXh0PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRoZW50aWNpdHlQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdXRoZW50aWNpdHlQYXJhbXNcblxuICAgICAgICByZXN1bHQudXNlTGl2ZW5lc3NDaGVjayA9IGpzb25PYmplY3RbXCJ1c2VMaXZlbmVzc0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc1BhcmFtcyA9IExpdmVuZXNzUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJsaXZlbmVzc1BhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmNoZWNrVVZMdW1pbmlzY2VuY2UgPSBqc29uT2JqZWN0W1wiY2hlY2tVVkx1bWluaXNjZW5jZVwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJUkI5MDAgPSBqc29uT2JqZWN0W1wiY2hlY2tJUkI5MDBcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrSW1hZ2VQYXR0ZXJucyA9IGpzb25PYmplY3RbXCJjaGVja0ltYWdlUGF0dGVybnNcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrRmliZXJzID0ganNvbk9iamVjdFtcImNoZWNrRmliZXJzXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0V4dE1SWiA9IGpzb25PYmplY3RbXCJjaGVja0V4dE1SWlwiXVxuICAgICAgICByZXN1bHQuY2hlY2tFeHRPQ1IgPSBqc29uT2JqZWN0W1wiY2hlY2tFeHRPQ1JcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrQXhpYWwgPSBqc29uT2JqZWN0W1wiY2hlY2tBeGlhbFwiXVxuICAgICAgICByZXN1bHQuY2hlY2tCYXJjb2RlRm9ybWF0ID0ganNvbk9iamVjdFtcImNoZWNrQmFyY29kZUZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuY2hlY2tJUlZpc2liaWxpdHkgPSBqc29uT2JqZWN0W1wiY2hlY2tJUlZpc2liaWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrSVBJID0ganNvbk9iamVjdFtcImNoZWNrSVBJXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja1Bob3RvRW1iZWRkaW5nID0ganNvbk9iamVjdFtcImNoZWNrUGhvdG9FbWJlZGRpbmdcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrUGhvdG9Db21wYXJpc29uID0ganNvbk9iamVjdFtcImNoZWNrUGhvdG9Db21wYXJpc29uXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja0xldHRlclNjcmVlbiA9IGpzb25PYmplY3RbXCJjaGVja0xldHRlclNjcmVlblwiXVxuICAgICAgICByZXN1bHQuY2hlY2tTZWN1cml0eVRleHQgPSBqc29uT2JqZWN0W1wiY2hlY2tTZWN1cml0eVRleHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvY2Vzc1BhcmFtcyB7XG4gICAgbXVsdGlwYWdlUHJvY2Vzc2luZz86IGJvb2xlYW5cbiAgICBsb2dzPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZUltYWdlcz86IGJvb2xlYW5cbiAgICBkZWJ1Z1NhdmVMb2dzPzogYm9vbGVhblxuICAgIHJldHVyblVuY3JvcHBlZEltYWdlPzogYm9vbGVhblxuICAgIHV2VG9yY2hFbmFibGVkPzogYm9vbGVhblxuICAgIGRlYnVnU2F2ZUNyb3BwZWRJbWFnZXM/OiBib29sZWFuXG4gICAgZGlzYWJsZUZvY3VzaW5nQ2hlY2s/OiBib29sZWFuXG4gICAgZGVidWdTYXZlUkZJRFNlc3Npb24/OiBib29sZWFuXG4gICAgZG91YmxlUGFnZVNwcmVhZD86IGJvb2xlYW5cbiAgICBtYW51YWxDcm9wPzogYm9vbGVhblxuICAgIGludGVncmFsSW1hZ2U/OiBib29sZWFuXG4gICAgcmV0dXJuQ3JvcHBlZEJhcmNvZGU/OiBib29sZWFuXG4gICAgY2hlY2tSZXF1aXJlZFRleHRGaWVsZHM/OiBib29sZWFuXG4gICAgZGVwZXJzb25hbGl6ZUxvZz86IGJvb2xlYW5cbiAgICBnZW5lcmF0ZURvdWJsZVBhZ2VTcHJlYWRJbWFnZT86IGJvb2xlYW5cbiAgICBhbHJlYWR5Q3JvcHBlZD86IGJvb2xlYW5cbiAgICBtYXRjaFRleHRGaWVsZE1hc2s/OiBib29sZWFuXG4gICAgdXBkYXRlT0NSVmFsaWRpdHlCeUdsYXJlPzogYm9vbGVhblxuICAgIG5vR3JhcGhpY3M/OiBib29sZWFuXG4gICAgbXVsdGlEb2NPbkltYWdlPzogYm9vbGVhblxuICAgIGZvcmNlUmVhZE1yekJlZm9yZUxvY2F0ZT86IGJvb2xlYW5cbiAgICBwYXJzZUJhcmNvZGVzPzogYm9vbGVhblxuICAgIHNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3M/OiBib29sZWFuXG4gICAgZGlzYWJsZVBlcmZvcmF0aW9uT0NSPzogYm9vbGVhblxuICAgIHJlc3BlY3RJbWFnZVF1YWxpdHk/OiBib29sZWFuXG4gICAgc3RyaWN0SW1hZ2VRdWFsaXR5PzogYm9vbGVhblxuICAgIHNwbGl0TmFtZXM/OiBib29sZWFuXG4gICAgdXNlRmFjZUFwaT86IGJvb2xlYW5cbiAgICB1c2VBdXRoZW50aWNpdHlDaGVjaz86IGJvb2xlYW5cbiAgICBjaGVja0hvbG9ncmFtPzogYm9vbGVhblxuICAgIGdlbmVyYXRlTnVtZXJpY0NvZGVzPzogYm9vbGVhblxuICAgIHN0cmljdEJhcmNvZGVEaWdpdGFsU2lnbmF0dXJlQ2hlY2s/OiBib29sZWFuXG4gICAgc2VsZWN0TG9uZ2VzdE5hbWVzPzogYm9vbGVhblxuICAgIGdlbmVyYXRlRFRDVkM/OiBib29sZWFuXG4gICAgc3RyaWN0RExDYXRlZ29yeUV4cGlyeT86IGJvb2xlYW5cbiAgICBnZW5lcmF0ZUFscGhhMkNvZGVzPzogYm9vbGVhblxuICAgIGRpc2FibGVBdXRoUmVzb2x1dGlvbkZpbHRlcj86IGJvb2xlYW5cbiAgICBzdHJpY3RTZWN1cml0eUNoZWNrcz86IGJvb2xlYW5cbiAgICBiYXJjb2RlUGFyc2VyVHlwZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlQW5nbGU/OiBudW1iZXJcbiAgICBtaW5EUEk/OiBudW1iZXJcbiAgICBpbWFnZURwaU91dE1heD86IG51bWJlclxuICAgIGZvcmNlRG9jRm9ybWF0PzogbnVtYmVyXG4gICAgc2hpZnRFeHBpcnlEYXRlPzogbnVtYmVyXG4gICAgbWluaW1hbEhvbGRlckFnZT86IG51bWJlclxuICAgIGltYWdlT3V0cHV0TWF4SGVpZ2h0PzogbnVtYmVyXG4gICAgaW1hZ2VPdXRwdXRNYXhXaWR0aD86IG51bWJlclxuICAgIHByb2Nlc3NBdXRoPzogbnVtYmVyXG4gICAgY29udmVydENhc2U/OiBudW1iZXJcbiAgICBsb2dMZXZlbD86IHN0cmluZ1xuICAgIG1yekRldGVjdE1vZGU/OiBudW1iZXJcbiAgICBtZWFzdXJlU3lzdGVtPzogbnVtYmVyXG4gICAgZm9yY2VEb2NJRD86IG51bWJlclxuICAgIHBkZlBhZ2VzTGltaXQ/OiBudW1iZXJcbiAgICBkYXRlRm9ybWF0Pzogc3RyaW5nXG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBjYXB0dXJlQnV0dG9uU2NlbmFyaW8/OiBzdHJpbmdcbiAgICB0aW1lb3V0PzogbnVtYmVyXG4gICAgdGltZW91dEZyb21GaXJzdERldGVjdD86IG51bWJlclxuICAgIHRpbWVvdXRGcm9tRmlyc3REb2NUeXBlPzogbnVtYmVyXG4gICAgZG9jdW1lbnRBcmVhTWluPzogbnVtYmVyXG4gICAgdGltZW91dExpdmVuZXNzPzogbnVtYmVyXG4gICAgZG9jdW1lbnRJRExpc3Q/OiBudW1iZXJbXVxuICAgIGJhcmNvZGVUeXBlcz86IG51bWJlcltdXG4gICAgZmllbGRUeXBlc0ZpbHRlcj86IG51bWJlcltdXG4gICAgcmVzdWx0VHlwZU91dHB1dD86IG51bWJlcltdXG4gICAgZG9jdW1lbnRHcm91cEZpbHRlcj86IG51bWJlcltdXG4gICAgbGNpZElnbm9yZUZpbHRlcj86IG51bWJlcltdXG4gICAgbGNpZEZpbHRlcj86IG51bWJlcltdXG4gICAgbXJ6Rm9ybWF0c0ZpbHRlcj86IHN0cmluZ1tdXG4gICAgaW1hZ2VRQT86IEltYWdlUUFcbiAgICByZmlkUGFyYW1zPzogUkZJRFBhcmFtc1xuICAgIGZhY2VBcGlQYXJhbXM/OiBGYWNlQXBpUGFyYW1zXG4gICAgYmFja2VuZFByb2Nlc3NpbmdDb25maWc/OiBCYWNrZW5kUHJvY2Vzc2luZ0NvbmZpZ1xuICAgIGF1dGhlbnRpY2l0eVBhcmFtcz86IEF1dGhlbnRpY2l0eVBhcmFtc1xuICAgIGN1c3RvbVBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUHJvY2Vzc1BhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFByb2Nlc3NQYXJhbXNcblxuICAgICAgICByZXN1bHQubXVsdGlwYWdlUHJvY2Vzc2luZyA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VQcm9jZXNzaW5nXCJdXG4gICAgICAgIHJlc3VsdC5sb2dzID0ganNvbk9iamVjdFtcImxvZ3NcIl1cbiAgICAgICAgcmVzdWx0LmRlYnVnU2F2ZUltYWdlcyA9IGpzb25PYmplY3RbXCJkZWJ1Z1NhdmVJbWFnZXNcIl1cbiAgICAgICAgcmVzdWx0LmRlYnVnU2F2ZUxvZ3MgPSBqc29uT2JqZWN0W1wiZGVidWdTYXZlTG9nc1wiXVxuICAgICAgICByZXN1bHQucmV0dXJuVW5jcm9wcGVkSW1hZ2UgPSBqc29uT2JqZWN0W1wicmV0dXJuVW5jcm9wcGVkSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnV2VG9yY2hFbmFibGVkID0ganNvbk9iamVjdFtcInV2VG9yY2hFbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVDcm9wcGVkSW1hZ2VzID0ganNvbk9iamVjdFtcImRlYnVnU2F2ZUNyb3BwZWRJbWFnZXNcIl1cbiAgICAgICAgcmVzdWx0LmRpc2FibGVGb2N1c2luZ0NoZWNrID0ganNvbk9iamVjdFtcImRpc2FibGVGb2N1c2luZ0NoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5kZWJ1Z1NhdmVSRklEU2Vzc2lvbiA9IGpzb25PYmplY3RbXCJkZWJ1Z1NhdmVSRklEU2Vzc2lvblwiXVxuICAgICAgICByZXN1bHQuZG91YmxlUGFnZVNwcmVhZCA9IGpzb25PYmplY3RbXCJkb3VibGVQYWdlU3ByZWFkXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cbiAgICAgICAgcmVzdWx0LmludGVncmFsSW1hZ2UgPSBqc29uT2JqZWN0W1wiaW50ZWdyYWxJbWFnZVwiXVxuICAgICAgICByZXN1bHQucmV0dXJuQ3JvcHBlZEJhcmNvZGUgPSBqc29uT2JqZWN0W1wicmV0dXJuQ3JvcHBlZEJhcmNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrUmVxdWlyZWRUZXh0RmllbGRzID0ganNvbk9iamVjdFtcImNoZWNrUmVxdWlyZWRUZXh0RmllbGRzXCJdXG4gICAgICAgIHJlc3VsdC5kZXBlcnNvbmFsaXplTG9nID0ganNvbk9iamVjdFtcImRlcGVyc29uYWxpemVMb2dcIl1cbiAgICAgICAgcmVzdWx0LmdlbmVyYXRlRG91YmxlUGFnZVNwcmVhZEltYWdlID0ganNvbk9iamVjdFtcImdlbmVyYXRlRG91YmxlUGFnZVNwcmVhZEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5hbHJlYWR5Q3JvcHBlZCA9IGpzb25PYmplY3RbXCJhbHJlYWR5Q3JvcHBlZFwiXVxuICAgICAgICByZXN1bHQubWF0Y2hUZXh0RmllbGRNYXNrID0ganNvbk9iamVjdFtcIm1hdGNoVGV4dEZpZWxkTWFza1wiXVxuICAgICAgICByZXN1bHQudXBkYXRlT0NSVmFsaWRpdHlCeUdsYXJlID0ganNvbk9iamVjdFtcInVwZGF0ZU9DUlZhbGlkaXR5QnlHbGFyZVwiXVxuICAgICAgICByZXN1bHQubm9HcmFwaGljcyA9IGpzb25PYmplY3RbXCJub0dyYXBoaWNzXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aURvY09uSW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlEb2NPbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5mb3JjZVJlYWRNcnpCZWZvcmVMb2NhdGUgPSBqc29uT2JqZWN0W1wiZm9yY2VSZWFkTXJ6QmVmb3JlTG9jYXRlXCJdXG4gICAgICAgIHJlc3VsdC5wYXJzZUJhcmNvZGVzID0ganNvbk9iamVjdFtcInBhcnNlQmFyY29kZXNcIl1cbiAgICAgICAgcmVzdWx0LnNob3VsZFJldHVyblBhY2thZ2VGb3JSZXByb2Nlc3MgPSBqc29uT2JqZWN0W1wic2hvdWxkUmV0dXJuUGFja2FnZUZvclJlcHJvY2Vzc1wiXVxuICAgICAgICByZXN1bHQuZGlzYWJsZVBlcmZvcmF0aW9uT0NSID0ganNvbk9iamVjdFtcImRpc2FibGVQZXJmb3JhdGlvbk9DUlwiXVxuICAgICAgICByZXN1bHQucmVzcGVjdEltYWdlUXVhbGl0eSA9IGpzb25PYmplY3RbXCJyZXNwZWN0SW1hZ2VRdWFsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RJbWFnZVF1YWxpdHkgPSBqc29uT2JqZWN0W1wic3RyaWN0SW1hZ2VRdWFsaXR5XCJdXG4gICAgICAgIHJlc3VsdC5zcGxpdE5hbWVzID0ganNvbk9iamVjdFtcInNwbGl0TmFtZXNcIl1cbiAgICAgICAgcmVzdWx0LnVzZUZhY2VBcGkgPSBqc29uT2JqZWN0W1widXNlRmFjZUFwaVwiXVxuICAgICAgICByZXN1bHQudXNlQXV0aGVudGljaXR5Q2hlY2sgPSBqc29uT2JqZWN0W1widXNlQXV0aGVudGljaXR5Q2hlY2tcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrSG9sb2dyYW0gPSBqc29uT2JqZWN0W1wiY2hlY2tIb2xvZ3JhbVwiXVxuICAgICAgICByZXN1bHQuZ2VuZXJhdGVOdW1lcmljQ29kZXMgPSBqc29uT2JqZWN0W1wiZ2VuZXJhdGVOdW1lcmljQ29kZXNcIl1cbiAgICAgICAgcmVzdWx0LnN0cmljdEJhcmNvZGVEaWdpdGFsU2lnbmF0dXJlQ2hlY2sgPSBqc29uT2JqZWN0W1wic3RyaWN0QmFyY29kZURpZ2l0YWxTaWduYXR1cmVDaGVja1wiXVxuICAgICAgICByZXN1bHQuc2VsZWN0TG9uZ2VzdE5hbWVzID0ganNvbk9iamVjdFtcInNlbGVjdExvbmdlc3ROYW1lc1wiXVxuICAgICAgICByZXN1bHQuZ2VuZXJhdGVEVENWQyA9IGpzb25PYmplY3RbXCJnZW5lcmF0ZURUQ1ZDXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RETENhdGVnb3J5RXhwaXJ5ID0ganNvbk9iamVjdFtcInN0cmljdERMQ2F0ZWdvcnlFeHBpcnlcIl1cbiAgICAgICAgcmVzdWx0LmdlbmVyYXRlQWxwaGEyQ29kZXMgPSBqc29uT2JqZWN0W1wiZ2VuZXJhdGVBbHBoYTJDb2Rlc1wiXVxuICAgICAgICByZXN1bHQuZGlzYWJsZUF1dGhSZXNvbHV0aW9uRmlsdGVyID0ganNvbk9iamVjdFtcImRpc2FibGVBdXRoUmVzb2x1dGlvbkZpbHRlclwiXVxuICAgICAgICByZXN1bHQuc3RyaWN0U2VjdXJpdHlDaGVja3MgPSBqc29uT2JqZWN0W1wic3RyaWN0U2VjdXJpdHlDaGVja3NcIl1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQYXJzZXJUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVQYXJzZXJUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZUFuZ2xlID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0Lm1pbkRQSSA9IGpzb25PYmplY3RbXCJtaW5EUElcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlRHBpT3V0TWF4ID0ganNvbk9iamVjdFtcImltYWdlRHBpT3V0TWF4XCJdXG4gICAgICAgIHJlc3VsdC5mb3JjZURvY0Zvcm1hdCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQuc2hpZnRFeHBpcnlEYXRlID0ganNvbk9iamVjdFtcInNoaWZ0RXhwaXJ5RGF0ZVwiXVxuICAgICAgICByZXN1bHQubWluaW1hbEhvbGRlckFnZSA9IGpzb25PYmplY3RbXCJtaW5pbWFsSG9sZGVyQWdlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZU91dHB1dE1heEhlaWdodCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heEhlaWdodFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VPdXRwdXRNYXhXaWR0aCA9IGpzb25PYmplY3RbXCJpbWFnZU91dHB1dE1heFdpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzQXV0aCA9IGpzb25PYmplY3RbXCJwcm9jZXNzQXV0aFwiXVxuICAgICAgICByZXN1bHQuY29udmVydENhc2UgPSBqc29uT2JqZWN0W1wiY29udmVydENhc2VcIl1cbiAgICAgICAgcmVzdWx0LmxvZ0xldmVsID0ganNvbk9iamVjdFtcImxvZ0xldmVsXCJdXG4gICAgICAgIHJlc3VsdC5tcnpEZXRlY3RNb2RlID0ganNvbk9iamVjdFtcIm1yekRldGVjdE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lYXN1cmVTeXN0ZW0gPSBqc29uT2JqZWN0W1wibWVhc3VyZVN5c3RlbVwiXVxuICAgICAgICByZXN1bHQuZm9yY2VEb2NJRCA9IGpzb25PYmplY3RbXCJmb3JjZURvY0lEXCJdXG4gICAgICAgIHJlc3VsdC5wZGZQYWdlc0xpbWl0ID0ganNvbk9iamVjdFtcInBkZlBhZ2VzTGltaXRcIl1cbiAgICAgICAgcmVzdWx0LmRhdGVGb3JtYXQgPSBqc29uT2JqZWN0W1wiZGF0ZUZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmNhcHR1cmVCdXR0b25TY2VuYXJpbyA9IGpzb25PYmplY3RbXCJjYXB0dXJlQnV0dG9uU2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXQgPSBqc29uT2JqZWN0W1widGltZW91dFwiXVxuICAgICAgICByZXN1bHQudGltZW91dEZyb21GaXJzdERldGVjdCA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RGV0ZWN0XCJdXG4gICAgICAgIHJlc3VsdC50aW1lb3V0RnJvbUZpcnN0RG9jVHlwZSA9IGpzb25PYmplY3RbXCJ0aW1lb3V0RnJvbUZpcnN0RG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRBcmVhTWluID0ganNvbk9iamVjdFtcImRvY3VtZW50QXJlYU1pblwiXVxuICAgICAgICByZXN1bHQudGltZW91dExpdmVuZXNzID0ganNvbk9iamVjdFtcInRpbWVvdXRMaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50SURMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRJRExpc3QucHVzaChqc29uT2JqZWN0W1wiZG9jdW1lbnRJRExpc3RcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlcy5wdXNoKGpzb25PYmplY3RbXCJiYXJjb2RlVHlwZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkVHlwZXNGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZFR5cGVzRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkVHlwZXNGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wiZmllbGRUeXBlc0ZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0VHlwZU91dHB1dFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdFR5cGVPdXRwdXRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0VHlwZU91dHB1dC5wdXNoKGpzb25PYmplY3RbXCJyZXN1bHRUeXBlT3V0cHV0XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudEdyb3VwRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRHcm91cEZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudEdyb3VwRmlsdGVyLnB1c2goanNvbk9iamVjdFtcImRvY3VtZW50R3JvdXBGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxjaWRJZ25vcmVGaWx0ZXJcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsY2lkSWdub3JlRmlsdGVyXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmxjaWRJZ25vcmVGaWx0ZXIucHVzaChqc29uT2JqZWN0W1wibGNpZElnbm9yZUZpbHRlclwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGNpZEZpbHRlciA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGNpZEZpbHRlclwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxjaWRGaWx0ZXJcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGNpZEZpbHRlci5wdXNoKGpzb25PYmplY3RbXCJsY2lkRmlsdGVyXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpGb3JtYXRzRmlsdGVyXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6Rm9ybWF0c0ZpbHRlclwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpGb3JtYXRzRmlsdGVyLnB1c2goanNvbk9iamVjdFtcIm1yekZvcm1hdHNGaWx0ZXJcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBJbWFnZVFBLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVFBXCJdKVxuICAgICAgICByZXN1bHQucmZpZFBhcmFtcyA9IFJGSURQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlQXBpUGFyYW1zID0gRmFjZUFwaVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZUFwaVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LmJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnID0gQmFja2VuZFByb2Nlc3NpbmdDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcImJhY2tlbmRQcm9jZXNzaW5nQ29uZmlnXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UGFyYW1zID0gQXV0aGVudGljaXR5UGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5jdXN0b21QYXJhbXMgPSBqc29uT2JqZWN0W1wiY3VzdG9tUGFyYW1zXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvbnQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBzaXplPzogbnVtYmVyXG4gICAgc3R5bGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRm9udCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvbnRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cbiAgICAgICAgcmVzdWx0LnN0eWxlID0ganNvbk9iamVjdFtcInN0eWxlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Db2xvcnMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsVGV4dD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuSGludExhYmVsQmFja2dyb3VuZD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyPzogbnVtYmVyXG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQ/OiBudW1iZXJcbiAgICByZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsVGV4dD86IG51bWJlclxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuTG9hZGluZ0Jhcj86IG51bWJlclxuICAgIHJmaWRFbmFibGVOZmNUaXRsZVRleHQ/OiBudW1iZXJcbiAgICByZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0PzogbnVtYmVyXG4gICAgcmZpZEVuYWJsZU5mY0J1dHRvblRleHQ/OiBudW1iZXJcbiAgICByZmlkRW5hYmxlTmZjQnV0dG9uQmFja2dyb3VuZD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uQ29sb3JzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ3VzdG9taXphdGlvbkNvbG9yc1xuXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFRleHQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbEJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxCYWNrZ3JvdW5kXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzTGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NCYXIgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhclwiXVxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmQgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0JhckJhY2tncm91bmRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0ID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWxUZXh0XCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUHJvY2Vzc2luZ1NjcmVlbkxvYWRpbmdCYXIgPSBqc29uT2JqZWN0W1wicmZpZFByb2Nlc3NpbmdTY3JlZW5Mb2FkaW5nQmFyXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjVGl0bGVUZXh0ID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNEZXNjcmlwdGlvblRleHQgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiXVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY0J1dHRvblRleHQgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNCdXR0b25CYWNrZ3JvdW5kID0ganNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNCdXR0b25CYWNrZ3JvdW5kXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25Gb250cyB7XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWw/OiBGb250XG4gICAgcmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsPzogRm9udFxuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWw/OiBGb250XG4gICAgcmZpZEVuYWJsZU5mY1RpdGxlVGV4dD86IEZvbnRcbiAgICByZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0PzogRm9udFxuICAgIHJmaWRFbmFibGVOZmNCdXR0b25UZXh0PzogRm9udFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDdXN0b21pemF0aW9uRm9udHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uRm9udHNcblxuICAgICAgICByZXN1bHQucmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWwgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuUmVzdWx0TGFiZWwgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblJlc3VsdExhYmVsXCJdKVxuICAgICAgICByZXN1bHQucmZpZEVuYWJsZU5mY1RpdGxlVGV4dCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0Rlc2NyaXB0aW9uVGV4dFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRFbmFibGVOZmNCdXR0b25UZXh0ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0J1dHRvblRleHRcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb25JbWFnZXMge1xuICAgIHJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlPzogc3RyaW5nXG4gICAgcmZpZEVuYWJsZU5mY0ltYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb25JbWFnZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uSW1hZ2VzXG5cbiAgICAgICAgcmVzdWx0LnJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlID0ganNvbk9iamVjdFtcInJmaWRQcm9jZXNzaW5nU2NyZWVuRmFpbHVyZUltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkRW5hYmxlTmZjSW1hZ2UgPSBqc29uT2JqZWN0W1wicmZpZEVuYWJsZU5mY0ltYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEN1c3RvbWl6YXRpb24ge1xuICAgIHNob3dTdGF0dXNNZXNzYWdlcz86IGJvb2xlYW5cbiAgICBzaG93UmVzdWx0U3RhdHVzTWVzc2FnZXM/OiBib29sZWFuXG4gICAgc2hvd0hlbHBBbmltYXRpb24/OiBib29sZWFuXG4gICAgc2hvd05leHRQYWdlQW5pbWF0aW9uPzogYm9vbGVhblxuICAgIHNob3dCYWNrZ3JvdW5kTWFzaz86IGJvb2xlYW5cbiAgICBjYW1lcmFGcmFtZUJvcmRlcldpZHRoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVMaW5lTGVuZ3RoPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVPZmZzZXRXaWR0aD86IG51bWJlclxuICAgIG5leHRQYWdlQW5pbWF0aW9uU3RhcnREZWxheT86IG51bWJlclxuICAgIG5leHRQYWdlQW5pbWF0aW9uRW5kRGVsYXk/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZVNoYXBlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IHN0cmluZ1xuICAgIHJlc3VsdFN0YXR1cz86IHN0cmluZ1xuICAgIG11bHRpcGFnZUJ1dHRvblRleHQ/OiBzdHJpbmdcbiAgICBjYW1lcmFGcmFtZURlZmF1bHRDb2xvcj86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lQWN0aXZlQ29sb3I/OiBudW1iZXJcbiAgICBzdGF0dXNUZXh0Q29sb3I/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNUZXh0Q29sb3I/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNCYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VCdXR0b25CYWNrZ3JvdW5kQ29sb3I/OiBudW1iZXJcbiAgICB0aW50Q29sb3I/OiBudW1iZXJcbiAgICBhY3Rpdml0eUluZGljYXRvckNvbG9yPzogbnVtYmVyXG4gICAgc3RhdHVzQmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgY2FtZXJhUHJldmlld0JhY2tncm91bmRDb2xvcj86IG51bWJlclxuICAgIGJhY2tncm91bmRNYXNrQ29sb3I/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VCdXR0b25UZXh0Q29sb3I/OiBudW1iZXJcbiAgICBzdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICB0b29sYmFyU2l6ZT86IG51bWJlclxuICAgIGJhY2tncm91bmRNYXNrQWxwaGE/OiBudW1iZXJcbiAgICBjdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBsaXZlbmVzc0FuaW1hdGlvblBvc2l0aW9uTXVsdGlwbGllcj86IG51bWJlclxuICAgIGNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFGcmFtZUxhbmRzY2FwZUFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvPzogbnVtYmVyXG4gICAgY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXM/OiBudW1iZXJcbiAgICBhY3Rpdml0eUluZGljYXRvclBvcnRyYWl0UG9zaXRpb25NdWx0aXBsaWVyPzogbnVtYmVyXG4gICAgYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBjYW1lcmFQcmV2aWV3VmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXI/OiBudW1iZXJcbiAgICBtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlPzogc3RyaW5nXG4gICAgYm9yZGVyQmFja2dyb3VuZEltYWdlPzogc3RyaW5nXG4gICAgaGVscEFuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgY2xvc2VCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhcHR1cmVCdXR0b25JbWFnZT86IHN0cmluZ1xuICAgIGNhbWVyYVN3aXRjaEJ1dHRvbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PbkltYWdlPzogc3RyaW5nXG4gICAgdG9yY2hCdXR0b25PZmZJbWFnZT86IHN0cmluZ1xuICAgIGNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2U/OiBzdHJpbmdcbiAgICBjaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2U/OiBzdHJpbmdcbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlPzogc3RyaW5nXG4gICAgbXVsdGlwYWdlQnV0dG9uSW1hZ2U/OiBzdHJpbmdcbiAgICBzdGF0dXNUZXh0Rm9udD86IEZvbnRcbiAgICByZXN1bHRTdGF0dXNUZXh0Rm9udD86IEZvbnRcbiAgICBtdWx0aXBhZ2VCdXR0b25UZXh0Rm9udD86IEZvbnRcbiAgICBjdXN0b21MYWJlbFN0YXR1cz86IHN0cmluZ1xuICAgIGNhbWVyYUZyYW1lTGluZUNhcD86IG51bWJlclxuICAgIHVpQ3VzdG9taXphdGlvbkxheWVyPzogUmVjb3JkPHN0cmluZywgYW55PlxuICAgIGhlbHBBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZUNvbnRlbnRNb2RlPzogbnVtYmVyXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGU/OiBudW1iZXJcbiAgICBib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZT86IG51bWJlclxuICAgIGhlbHBBbmltYXRpb25JbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeD86IG51bWJlcltdXG4gICAgbXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4PzogbnVtYmVyW11cbiAgICBib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXg/OiBudW1iZXJbXVxuICAgIGNvbG9ycz86IEN1c3RvbWl6YXRpb25Db2xvcnNcbiAgICBmb250cz86IEN1c3RvbWl6YXRpb25Gb250c1xuICAgIGltYWdlcz86IEN1c3RvbWl6YXRpb25JbWFnZXNcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25cblxuICAgICAgICByZXN1bHQuc2hvd1N0YXR1c01lc3NhZ2VzID0ganNvbk9iamVjdFtcInNob3dTdGF0dXNNZXNzYWdlc1wiXVxuICAgICAgICByZXN1bHQuc2hvd1Jlc3VsdFN0YXR1c01lc3NhZ2VzID0ganNvbk9iamVjdFtcInNob3dSZXN1bHRTdGF0dXNNZXNzYWdlc1wiXVxuICAgICAgICByZXN1bHQuc2hvd0hlbHBBbmltYXRpb24gPSBqc29uT2JqZWN0W1wic2hvd0hlbHBBbmltYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dOZXh0UGFnZUFuaW1hdGlvbiA9IGpzb25PYmplY3RbXCJzaG93TmV4dFBhZ2VBbmltYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnNob3dCYWNrZ3JvdW5kTWFzayA9IGpzb25PYmplY3RbXCJzaG93QmFja2dyb3VuZE1hc2tcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lQm9yZGVyV2lkdGggPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVCb3JkZXJXaWR0aFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVMaW5lTGVuZ3RoID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lTGluZUxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVPZmZzZXRXaWR0aCA9IGpzb25PYmplY3RbXCJjYW1lcmFGcmFtZU9mZnNldFdpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUFuaW1hdGlvblN0YXJ0RGVsYXkgPSBqc29uT2JqZWN0W1wibmV4dFBhZ2VBbmltYXRpb25TdGFydERlbGF5XCJdXG4gICAgICAgIHJlc3VsdC5uZXh0UGFnZUFuaW1hdGlvbkVuZERlbGF5ID0ganNvbk9iamVjdFtcIm5leHRQYWdlQW5pbWF0aW9uRW5kRGVsYXlcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lU2hhcGVUeXBlID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lU2hhcGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VCdXR0b25UZXh0ID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUJ1dHRvblRleHRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lRGVmYXVsdENvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lRGVmYXVsdENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUFjdGl2ZUNvbG9yID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lQWN0aXZlQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJzdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1RleHRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNUZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNCYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25CYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnRpbnRDb2xvciA9IGpzb25PYmplY3RbXCJ0aW50Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmFjdGl2aXR5SW5kaWNhdG9yQ29sb3IgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JDb2xvclwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzQmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcInN0YXR1c0JhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUHJldmlld0JhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJjYW1lcmFQcmV2aWV3QmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kTWFza0NvbG9yID0ganNvbk9iamVjdFtcImJhY2tncm91bmRNYXNrQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUJ1dHRvblRleHRDb2xvciA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25UZXh0Q29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJzdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LnRvb2xiYXJTaXplID0ganNvbk9iamVjdFtcInRvb2xiYXJTaXplXCJdXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kTWFza0FscGhhID0ganNvbk9iamVjdFtcImJhY2tncm91bmRNYXNrQWxwaGFcIl1cbiAgICAgICAgcmVzdWx0LmN1c3RvbVN0YXR1c1Bvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJjdXN0b21TdGF0dXNQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uUG9zaXRpb25NdWx0aXBsaWVyXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZVZlcnRpY2FsUG9zaXRpb25NdWx0aXBsaWVyID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lVmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYUZyYW1lTGFuZHNjYXBlQXNwZWN0UmF0aW8gPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVMYW5kc2NhcGVBc3BlY3RSYXRpb1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVQb3J0cmFpdEFzcGVjdFJhdGlvID0ganNvbk9iamVjdFtcImNhbWVyYUZyYW1lUG9ydHJhaXRBc3BlY3RSYXRpb1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXMgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVDb3JuZXJSYWRpdXNcIl1cbiAgICAgICAgcmVzdWx0LmFjdGl2aXR5SW5kaWNhdG9yUG9ydHJhaXRQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JQb3J0cmFpdFBvc2l0aW9uTXVsdGlwbGllclwiXVxuICAgICAgICByZXN1bHQuYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXIgPSBqc29uT2JqZWN0W1wiYWN0aXZpdHlJbmRpY2F0b3JMYW5kc2NhcGVQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVByZXZpZXdWZXJ0aWNhbFBvc2l0aW9uTXVsdGlwbGllciA9IGpzb25PYmplY3RbXCJjYW1lcmFQcmV2aWV3VmVydGljYWxQb3NpdGlvbk11bHRpcGxpZXJcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZVwiXVxuICAgICAgICByZXN1bHQuYm9yZGVyQmFja2dyb3VuZEltYWdlID0ganNvbk9iamVjdFtcImJvcmRlckJhY2tncm91bmRJbWFnZVwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlID0ganNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZVwiXVxuICAgICAgICByZXN1bHQuY2xvc2VCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJjbG9zZUJ1dHRvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0dXJlQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wiY2FwdHVyZUJ1dHRvbkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFTd2l0Y2hCdXR0b25JbWFnZSA9IGpzb25PYmplY3RbXCJjYW1lcmFTd2l0Y2hCdXR0b25JbWFnZVwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25PbkltYWdlID0ganNvbk9iamVjdFtcInRvcmNoQnV0dG9uT25JbWFnZVwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25PZmZJbWFnZSA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbk9mZkltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jaGFuZ2VGcmFtZUJ1dHRvbkV4cGFuZEltYWdlID0ganNvbk9iamVjdFtcImNoYW5nZUZyYW1lQnV0dG9uRXhwYW5kSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNoYW5nZUZyYW1lQnV0dG9uQ29sbGFwc2VJbWFnZSA9IGpzb25PYmplY3RbXCJjaGFuZ2VGcmFtZUJ1dHRvbkNvbGxhcHNlSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzQW5pbWF0aW9uSW1hZ2UgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZVwiXVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uSW1hZ2UgPSBqc29uT2JqZWN0W1wibXVsdGlwYWdlQnV0dG9uSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1c1RleHRGb250ID0gRm9udC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzVGV4dEZvbnRcIl0pXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXNUZXh0Rm9udCA9IEZvbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1RleHRGb250XCJdKVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQnV0dG9uVGV4dEZvbnQgPSBGb250LmZyb21Kc29uKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VCdXR0b25UZXh0Rm9udFwiXSlcbiAgICAgICAgcmVzdWx0LmN1c3RvbUxhYmVsU3RhdHVzID0ganNvbk9iamVjdFtcImN1c3RvbUxhYmVsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFGcmFtZUxpbmVDYXAgPSBqc29uT2JqZWN0W1wiY2FtZXJhRnJhbWVMaW5lQ2FwXCJdXG4gICAgICAgIHJlc3VsdC51aUN1c3RvbWl6YXRpb25MYXllciA9IGpzb25PYmplY3RbXCJ1aUN1c3RvbWl6YXRpb25MYXllclwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wiaGVscEFuaW1hdGlvbkltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlQ29udGVudE1vZGVcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlID0ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlQ29udGVudE1vZGUgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZUNvbnRlbnRNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5ib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZSA9IGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VDb250ZW50TW9kZVwiXVxuICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJoZWxwQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaGVscEFuaW1hdGlvbkltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImhlbHBBbmltYXRpb25JbWFnZU1hdHJpeFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkZyb250SW1hZ2VNYXRyaXhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubXVsdGlwYWdlQW5pbWF0aW9uRnJvbnRJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJtdWx0aXBhZ2VBbmltYXRpb25Gcm9udEltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm11bHRpcGFnZUFuaW1hdGlvbkJhY2tJbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tdWx0aXBhZ2VBbmltYXRpb25CYWNrSW1hZ2VNYXRyaXgucHVzaChqc29uT2JqZWN0W1wibXVsdGlwYWdlQW5pbWF0aW9uQmFja0ltYWdlTWF0cml4XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsaXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGl2ZW5lc3NBbmltYXRpb25JbWFnZU1hdHJpeFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5saXZlbmVzc0FuaW1hdGlvbkltYWdlTWF0cml4LnB1c2goanNvbk9iamVjdFtcImxpdmVuZXNzQW5pbWF0aW9uSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYm9yZGVyQmFja2dyb3VuZEltYWdlTWF0cml4XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJvcmRlckJhY2tncm91bmRJbWFnZU1hdHJpeC5wdXNoKGpzb25PYmplY3RbXCJib3JkZXJCYWNrZ3JvdW5kSW1hZ2VNYXRyaXhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNvbG9ycyA9IEN1c3RvbWl6YXRpb25Db2xvcnMuZnJvbUpzb24oanNvbk9iamVjdFtcImNvbG9yc1wiXSlcbiAgICAgICAgcmVzdWx0LmZvbnRzID0gQ3VzdG9taXphdGlvbkZvbnRzLmZyb21Kc29uKGpzb25PYmplY3RbXCJmb250c1wiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IEN1c3RvbWl6YXRpb25JbWFnZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRURMRGF0YUdyb3VwcyB7XG4gICAgREcxPzogYm9vbGVhblxuICAgIERHMj86IGJvb2xlYW5cbiAgICBERzM/OiBib29sZWFuXG4gICAgREc0PzogYm9vbGVhblxuICAgIERHNT86IGJvb2xlYW5cbiAgICBERzY/OiBib29sZWFuXG4gICAgREc3PzogYm9vbGVhblxuICAgIERHOD86IGJvb2xlYW5cbiAgICBERzk/OiBib29sZWFuXG4gICAgREcxMD86IGJvb2xlYW5cbiAgICBERzExPzogYm9vbGVhblxuICAgIERHMTI/OiBib29sZWFuXG4gICAgREcxMz86IGJvb2xlYW5cbiAgICBERzE0PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFRExEYXRhR3JvdXBzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRURMRGF0YUdyb3Vwc1xuXG4gICAgICAgIHJlc3VsdC5ERzEgPSBqc29uT2JqZWN0W1wiREcxXCJdXG4gICAgICAgIHJlc3VsdC5ERzIgPSBqc29uT2JqZWN0W1wiREcyXCJdXG4gICAgICAgIHJlc3VsdC5ERzMgPSBqc29uT2JqZWN0W1wiREczXCJdXG4gICAgICAgIHJlc3VsdC5ERzQgPSBqc29uT2JqZWN0W1wiREc0XCJdXG4gICAgICAgIHJlc3VsdC5ERzUgPSBqc29uT2JqZWN0W1wiREc1XCJdXG4gICAgICAgIHJlc3VsdC5ERzYgPSBqc29uT2JqZWN0W1wiREc2XCJdXG4gICAgICAgIHJlc3VsdC5ERzcgPSBqc29uT2JqZWN0W1wiREc3XCJdXG4gICAgICAgIHJlc3VsdC5ERzggPSBqc29uT2JqZWN0W1wiREc4XCJdXG4gICAgICAgIHJlc3VsdC5ERzkgPSBqc29uT2JqZWN0W1wiREc5XCJdXG4gICAgICAgIHJlc3VsdC5ERzEwID0ganNvbk9iamVjdFtcIkRHMTBcIl1cbiAgICAgICAgcmVzdWx0LkRHMTEgPSBqc29uT2JqZWN0W1wiREcxMVwiXVxuICAgICAgICByZXN1bHQuREcxMiA9IGpzb25PYmplY3RbXCJERzEyXCJdXG4gICAgICAgIHJlc3VsdC5ERzEzID0ganNvbk9iamVjdFtcIkRHMTNcIl1cbiAgICAgICAgcmVzdWx0LkRHMTQgPSBqc29uT2JqZWN0W1wiREcxNFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFUGFzc3BvcnREYXRhR3JvdXBzIHtcbiAgICBERzE/OiBib29sZWFuXG4gICAgREcyPzogYm9vbGVhblxuICAgIERHMz86IGJvb2xlYW5cbiAgICBERzQ/OiBib29sZWFuXG4gICAgREc1PzogYm9vbGVhblxuICAgIERHNj86IGJvb2xlYW5cbiAgICBERzc/OiBib29sZWFuXG4gICAgREc4PzogYm9vbGVhblxuICAgIERHOT86IGJvb2xlYW5cbiAgICBERzEwPzogYm9vbGVhblxuICAgIERHMTE/OiBib29sZWFuXG4gICAgREcxMj86IGJvb2xlYW5cbiAgICBERzEzPzogYm9vbGVhblxuICAgIERHMTQ/OiBib29sZWFuXG4gICAgREcxNT86IGJvb2xlYW5cbiAgICBERzE2PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFUGFzc3BvcnREYXRhR3JvdXBzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRVBhc3Nwb3J0RGF0YUdyb3Vwc1xuXG4gICAgICAgIHJlc3VsdC5ERzEgPSBqc29uT2JqZWN0W1wiREcxXCJdXG4gICAgICAgIHJlc3VsdC5ERzIgPSBqc29uT2JqZWN0W1wiREcyXCJdXG4gICAgICAgIHJlc3VsdC5ERzMgPSBqc29uT2JqZWN0W1wiREczXCJdXG4gICAgICAgIHJlc3VsdC5ERzQgPSBqc29uT2JqZWN0W1wiREc0XCJdXG4gICAgICAgIHJlc3VsdC5ERzUgPSBqc29uT2JqZWN0W1wiREc1XCJdXG4gICAgICAgIHJlc3VsdC5ERzYgPSBqc29uT2JqZWN0W1wiREc2XCJdXG4gICAgICAgIHJlc3VsdC5ERzcgPSBqc29uT2JqZWN0W1wiREc3XCJdXG4gICAgICAgIHJlc3VsdC5ERzggPSBqc29uT2JqZWN0W1wiREc4XCJdXG4gICAgICAgIHJlc3VsdC5ERzkgPSBqc29uT2JqZWN0W1wiREc5XCJdXG4gICAgICAgIHJlc3VsdC5ERzEwID0ganNvbk9iamVjdFtcIkRHMTBcIl1cbiAgICAgICAgcmVzdWx0LkRHMTEgPSBqc29uT2JqZWN0W1wiREcxMVwiXVxuICAgICAgICByZXN1bHQuREcxMiA9IGpzb25PYmplY3RbXCJERzEyXCJdXG4gICAgICAgIHJlc3VsdC5ERzEzID0ganNvbk9iamVjdFtcIkRHMTNcIl1cbiAgICAgICAgcmVzdWx0LkRHMTQgPSBqc29uT2JqZWN0W1wiREcxNFwiXVxuICAgICAgICByZXN1bHQuREcxNSA9IGpzb25PYmplY3RbXCJERzE1XCJdXG4gICAgICAgIHJlc3VsdC5ERzE2ID0ganNvbk9iamVjdFtcIkRHMTZcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRUlERGF0YUdyb3VwcyB7XG4gICAgREcxPzogYm9vbGVhblxuICAgIERHMj86IGJvb2xlYW5cbiAgICBERzM/OiBib29sZWFuXG4gICAgREc0PzogYm9vbGVhblxuICAgIERHNT86IGJvb2xlYW5cbiAgICBERzY/OiBib29sZWFuXG4gICAgREc3PzogYm9vbGVhblxuICAgIERHOD86IGJvb2xlYW5cbiAgICBERzk/OiBib29sZWFuXG4gICAgREcxMD86IGJvb2xlYW5cbiAgICBERzExPzogYm9vbGVhblxuICAgIERHMTI/OiBib29sZWFuXG4gICAgREcxMz86IGJvb2xlYW5cbiAgICBERzE0PzogYm9vbGVhblxuICAgIERHMTU/OiBib29sZWFuXG4gICAgREcxNj86IGJvb2xlYW5cbiAgICBERzE3PzogYm9vbGVhblxuICAgIERHMTg/OiBib29sZWFuXG4gICAgREcxOT86IGJvb2xlYW5cbiAgICBERzIwPzogYm9vbGVhblxuICAgIERHMjE/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVJRERhdGFHcm91cHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFSUREYXRhR3JvdXBzXG5cbiAgICAgICAgcmVzdWx0LkRHMSA9IGpzb25PYmplY3RbXCJERzFcIl1cbiAgICAgICAgcmVzdWx0LkRHMiA9IGpzb25PYmplY3RbXCJERzJcIl1cbiAgICAgICAgcmVzdWx0LkRHMyA9IGpzb25PYmplY3RbXCJERzNcIl1cbiAgICAgICAgcmVzdWx0LkRHNCA9IGpzb25PYmplY3RbXCJERzRcIl1cbiAgICAgICAgcmVzdWx0LkRHNSA9IGpzb25PYmplY3RbXCJERzVcIl1cbiAgICAgICAgcmVzdWx0LkRHNiA9IGpzb25PYmplY3RbXCJERzZcIl1cbiAgICAgICAgcmVzdWx0LkRHNyA9IGpzb25PYmplY3RbXCJERzdcIl1cbiAgICAgICAgcmVzdWx0LkRHOCA9IGpzb25PYmplY3RbXCJERzhcIl1cbiAgICAgICAgcmVzdWx0LkRHOSA9IGpzb25PYmplY3RbXCJERzlcIl1cbiAgICAgICAgcmVzdWx0LkRHMTAgPSBqc29uT2JqZWN0W1wiREcxMFwiXVxuICAgICAgICByZXN1bHQuREcxMSA9IGpzb25PYmplY3RbXCJERzExXCJdXG4gICAgICAgIHJlc3VsdC5ERzEyID0ganNvbk9iamVjdFtcIkRHMTJcIl1cbiAgICAgICAgcmVzdWx0LkRHMTMgPSBqc29uT2JqZWN0W1wiREcxM1wiXVxuICAgICAgICByZXN1bHQuREcxNCA9IGpzb25PYmplY3RbXCJERzE0XCJdXG4gICAgICAgIHJlc3VsdC5ERzE1ID0ganNvbk9iamVjdFtcIkRHMTVcIl1cbiAgICAgICAgcmVzdWx0LkRHMTYgPSBqc29uT2JqZWN0W1wiREcxNlwiXVxuICAgICAgICByZXN1bHQuREcxNyA9IGpzb25PYmplY3RbXCJERzE3XCJdXG4gICAgICAgIHJlc3VsdC5ERzE4ID0ganNvbk9iamVjdFtcIkRHMThcIl1cbiAgICAgICAgcmVzdWx0LkRHMTkgPSBqc29uT2JqZWN0W1wiREcxOVwiXVxuICAgICAgICByZXN1bHQuREcyMCA9IGpzb25PYmplY3RbXCJERzIwXCJdXG4gICAgICAgIHJlc3VsdC5ERzIxID0ganNvbk9iamVjdFtcIkRHMjFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRFRDRGF0YUdyb3VwIHtcbiAgICBERzE3PzogYm9vbGVhblxuICAgIERHMTg/OiBib29sZWFuXG4gICAgREcyMj86IGJvb2xlYW5cbiAgICBERzIzPzogYm9vbGVhblxuICAgIERHMjQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERUQ0RhdGFHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERUQ0RhdGFHcm91cFxuXG4gICAgICAgIHJlc3VsdC5ERzE3ID0ganNvbk9iamVjdFtcIkRHMTdcIl1cbiAgICAgICAgcmVzdWx0LkRHMTggPSBqc29uT2JqZWN0W1wiREcxOFwiXVxuICAgICAgICByZXN1bHQuREcyMiA9IGpzb25PYmplY3RbXCJERzIyXCJdXG4gICAgICAgIHJlc3VsdC5ERzIzID0ganNvbk9iamVjdFtcIkRHMjNcIl1cbiAgICAgICAgcmVzdWx0LkRHMjQgPSBqc29uT2JqZWN0W1wiREcyNFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2NlbmFyaW8ge1xuICAgIHBhY2VTdGF0aWNCaW5kaW5nPzogYm9vbGVhblxuICAgIG9ubGluZVRBPzogYm9vbGVhblxuICAgIHdyaXRlRWlkPzogYm9vbGVhblxuICAgIHVuaXZlcnNhbEFjY2Vzc1JpZ2h0cz86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUmVzdHJpY3RlZElkZW50aWZpY2F0aW9uPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkNvbW11bml0eUlEPzogYm9vbGVhblxuICAgIGF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoPzogYm9vbGVhblxuICAgIHNraXBBQT86IGJvb2xlYW5cbiAgICBzdHJpY3RQcm9jZXNzaW5nPzogYm9vbGVhblxuICAgIHBrZERTQ2VydFByaW9yaXR5PzogYm9vbGVhblxuICAgIHBrZFVzZUV4dGVybmFsQ1NDQT86IGJvb2xlYW5cbiAgICB0cnVzdGVkUEtEPzogYm9vbGVhblxuICAgIHBhc3NpdmVBdXRoPzogYm9vbGVhblxuICAgIHVzZVNGST86IGJvb2xlYW5cbiAgICByZWFkRVBhc3Nwb3J0PzogYm9vbGVhblxuICAgIHJlYWRFSUQ/OiBib29sZWFuXG4gICAgcmVhZEVETD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkU1RTaWduYXR1cmU/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFNUUVNpZ25hdHVyZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzE3PzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMTg/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFdyaXRlREcxOT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkV3JpdGVERzIwPzogYm9vbGVhblxuICAgIGF1dGhvcml6ZWRXcml0ZURHMjE/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFZlcmlmeUFnZT86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SUQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkQ0FOQWxsb3dlZD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkUElOTWFuYWdlbWVudD86IGJvb2xlYW5cbiAgICBhdXRob3JpemVkSW5zdGFsbENlcnQ/OiBib29sZWFuXG4gICAgYXV0aG9yaXplZEluc3RhbGxRQ2VydD86IGJvb2xlYW5cbiAgICBhcHBseUFtZW5kbWVudHM/OiBib29sZWFuXG4gICAgYXV0b1NldHRpbmdzPzogYm9vbGVhblxuICAgIHByb2NlZWRSZWFkaW5nQWx3YXlzPzogYm9vbGVhblxuICAgIHJlYWREVEM/OiBib29sZWFuXG4gICAgbXJ6U3RyaWN0Q2hlY2s/OiBib29sZWFuXG4gICAgbG9hZENSTEZyb21SZW1vdGU/OiBib29sZWFuXG4gICAgaW5kZXBlbmRlbnRTT0RTdGF0dXM/OiBib29sZWFuXG4gICAgcmVhZGluZ0J1ZmZlcj86IG51bWJlclxuICAgIG9ubGluZVRBVG9TaWduRGF0YVR5cGU/OiBudW1iZXJcbiAgICBkZWZhdWx0UmVhZGluZ0J1ZmZlclNpemU/OiBudW1iZXJcbiAgICBzaWduTWFuYWdlbWVudEFjdGlvbj86IG51bWJlclxuICAgIHByb2ZpbGVyVHlwZT86IG51bWJlclxuICAgIGF1dGhQcm9jVHlwZT86IG51bWJlclxuICAgIGJhc2VTTVByb2NlZHVyZT86IG51bWJlclxuICAgIHBhY2VQYXNzd29yZFR5cGU/OiBudW1iZXJcbiAgICB0ZXJtaW5hbFR5cGU/OiBudW1iZXJcbiAgICBwYXNzd29yZD86IHN0cmluZ1xuICAgIHBrZFBBPzogc3RyaW5nXG4gICAgcGtkRUFDPzogc3RyaW5nXG4gICAgbXJ6Pzogc3RyaW5nXG4gICAgZVNpZ25QSU5EZWZhdWx0Pzogc3RyaW5nXG4gICAgZVNpZ25QSU5OZXdWYWx1ZT86IHN0cmluZ1xuICAgIGNhcmRBY2Nlc3M/OiBzdHJpbmdcbiAgICBtcnpIYXNoPzogc3RyaW5nXG4gICAgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmdcbiAgICBkYXRlT2ZCaXJ0aD86IHN0cmluZ1xuICAgIGRhdGVPZkV4cGlyeT86IHN0cmluZ1xuICAgIGVETERhdGFHcm91cHM/OiBFRExEYXRhR3JvdXBzXG4gICAgZVBhc3Nwb3J0RGF0YUdyb3Vwcz86IEVQYXNzcG9ydERhdGFHcm91cHNcbiAgICBlSUREYXRhR3JvdXBzPzogRUlERGF0YUdyb3Vwc1xuICAgIGR0Y0RhdGFHcm91cHM/OiBEVENEYXRhR3JvdXBcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNjZW5hcmlvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0LnBhY2VTdGF0aWNCaW5kaW5nID0ganNvbk9iamVjdFtcInBhY2VTdGF0aWNCaW5kaW5nXCJdXG4gICAgICAgIHJlc3VsdC5vbmxpbmVUQSA9IGpzb25PYmplY3RbXCJvbmxpbmVUQVwiXVxuICAgICAgICByZXN1bHQud3JpdGVFaWQgPSBqc29uT2JqZWN0W1wid3JpdGVFaWRcIl1cbiAgICAgICAgcmVzdWx0LnVuaXZlcnNhbEFjY2Vzc1JpZ2h0cyA9IGpzb25PYmplY3RbXCJ1bml2ZXJzYWxBY2Nlc3NSaWdodHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRSZXN0cmljdGVkSWRlbnRpZmljYXRpb24gPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFJlc3RyaWN0ZWRJZGVudGlmaWNhdGlvblwiXVxuICAgICAgICByZXN1bHQuYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SUQgPSBqc29uT2JqZWN0W1wiYXV4VmVyaWZpY2F0aW9uQ29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoID0ganNvbk9iamVjdFtcImF1eFZlcmlmaWNhdGlvbkRhdGVPZkJpcnRoXCJdXG4gICAgICAgIHJlc3VsdC5za2lwQUEgPSBqc29uT2JqZWN0W1wic2tpcEFBXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpY3RQcm9jZXNzaW5nID0ganNvbk9iamVjdFtcInN0cmljdFByb2Nlc3NpbmdcIl1cbiAgICAgICAgcmVzdWx0LnBrZERTQ2VydFByaW9yaXR5ID0ganNvbk9iamVjdFtcInBrZERTQ2VydFByaW9yaXR5XCJdXG4gICAgICAgIHJlc3VsdC5wa2RVc2VFeHRlcm5hbENTQ0EgPSBqc29uT2JqZWN0W1wicGtkVXNlRXh0ZXJuYWxDU0NBXCJdXG4gICAgICAgIHJlc3VsdC50cnVzdGVkUEtEID0ganNvbk9iamVjdFtcInRydXN0ZWRQS0RcIl1cbiAgICAgICAgcmVzdWx0LnBhc3NpdmVBdXRoID0ganNvbk9iamVjdFtcInBhc3NpdmVBdXRoXCJdXG4gICAgICAgIHJlc3VsdC51c2VTRkkgPSBqc29uT2JqZWN0W1widXNlU0ZJXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRVBhc3Nwb3J0ID0ganNvbk9iamVjdFtcInJlYWRFUGFzc3BvcnRcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRFSUQgPSBqc29uT2JqZWN0W1wicmVhZEVJRFwiXVxuICAgICAgICByZXN1bHQucmVhZEVETCA9IGpzb25PYmplY3RbXCJyZWFkRURMXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RTaWduYXR1cmUgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFNUU2lnbmF0dXJlXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkU1RRU2lnbmF0dXJlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRTVFFTaWduYXR1cmVcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMTcgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcxN1wiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcxOCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzE4XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkV3JpdGVERzE5ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRXcml0ZURHMTlcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRXcml0ZURHMjAgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFdyaXRlREcyMFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZFdyaXRlREcyMSA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkV3JpdGVERzIxXCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkVmVyaWZ5QWdlID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRWZXJpZnlBZ2VcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRWZXJpZnlDb21tdW5pdHlJRCA9IGpzb25PYmplY3RbXCJhdXRob3JpemVkVmVyaWZ5Q29tbXVuaXR5SURcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQcml2aWxlZ2VkVGVybWluYWwgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZFByaXZpbGVnZWRUZXJtaW5hbFwiXVxuICAgICAgICByZXN1bHQuYXV0aG9yaXplZENBTkFsbG93ZWQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZENBTkFsbG93ZWRcIl1cbiAgICAgICAgcmVzdWx0LmF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRQSU5NYW5hZ2VtZW50XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbENlcnQgPSBqc29uT2JqZWN0W1wiYXV0aG9yaXplZEluc3RhbGxDZXJ0XCJdXG4gICAgICAgIHJlc3VsdC5hdXRob3JpemVkSW5zdGFsbFFDZXJ0ID0ganNvbk9iamVjdFtcImF1dGhvcml6ZWRJbnN0YWxsUUNlcnRcIl1cbiAgICAgICAgcmVzdWx0LmFwcGx5QW1lbmRtZW50cyA9IGpzb25PYmplY3RbXCJhcHBseUFtZW5kbWVudHNcIl1cbiAgICAgICAgcmVzdWx0LmF1dG9TZXR0aW5ncyA9IGpzb25PYmplY3RbXCJhdXRvU2V0dGluZ3NcIl1cbiAgICAgICAgcmVzdWx0LnByb2NlZWRSZWFkaW5nQWx3YXlzID0ganNvbk9iamVjdFtcInByb2NlZWRSZWFkaW5nQWx3YXlzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkRFRDID0ganNvbk9iamVjdFtcInJlYWREVENcIl1cbiAgICAgICAgcmVzdWx0Lm1yelN0cmljdENoZWNrID0ganNvbk9iamVjdFtcIm1yelN0cmljdENoZWNrXCJdXG4gICAgICAgIHJlc3VsdC5sb2FkQ1JMRnJvbVJlbW90ZSA9IGpzb25PYmplY3RbXCJsb2FkQ1JMRnJvbVJlbW90ZVwiXVxuICAgICAgICByZXN1bHQuaW5kZXBlbmRlbnRTT0RTdGF0dXMgPSBqc29uT2JqZWN0W1wiaW5kZXBlbmRlbnRTT0RTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdCdWZmZXIgPSBqc29uT2JqZWN0W1wicmVhZGluZ0J1ZmZlclwiXVxuICAgICAgICByZXN1bHQub25saW5lVEFUb1NpZ25EYXRhVHlwZSA9IGpzb25PYmplY3RbXCJvbmxpbmVUQVRvU2lnbkRhdGFUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5kZWZhdWx0UmVhZGluZ0J1ZmZlclNpemUgPSBqc29uT2JqZWN0W1wiZGVmYXVsdFJlYWRpbmdCdWZmZXJTaXplXCJdXG4gICAgICAgIHJlc3VsdC5zaWduTWFuYWdlbWVudEFjdGlvbiA9IGpzb25PYmplY3RbXCJzaWduTWFuYWdlbWVudEFjdGlvblwiXVxuICAgICAgICByZXN1bHQucHJvZmlsZXJUeXBlID0ganNvbk9iamVjdFtcInByb2ZpbGVyVHlwZVwiXVxuICAgICAgICByZXN1bHQuYXV0aFByb2NUeXBlID0ganNvbk9iamVjdFtcImF1dGhQcm9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuYmFzZVNNUHJvY2VkdXJlID0ganNvbk9iamVjdFtcImJhc2VTTVByb2NlZHVyZVwiXVxuICAgICAgICByZXN1bHQucGFjZVBhc3N3b3JkVHlwZSA9IGpzb25PYmplY3RbXCJwYWNlUGFzc3dvcmRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC50ZXJtaW5hbFR5cGUgPSBqc29uT2JqZWN0W1widGVybWluYWxUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wYXNzd29yZCA9IGpzb25PYmplY3RbXCJwYXNzd29yZFwiXVxuICAgICAgICByZXN1bHQucGtkUEEgPSBqc29uT2JqZWN0W1wicGtkUEFcIl1cbiAgICAgICAgcmVzdWx0LnBrZEVBQyA9IGpzb25PYmplY3RbXCJwa2RFQUNcIl1cbiAgICAgICAgcmVzdWx0Lm1yeiA9IGpzb25PYmplY3RbXCJtcnpcIl1cbiAgICAgICAgcmVzdWx0LmVTaWduUElORGVmYXVsdCA9IGpzb25PYmplY3RbXCJlU2lnblBJTkRlZmF1bHRcIl1cbiAgICAgICAgcmVzdWx0LmVTaWduUElOTmV3VmFsdWUgPSBqc29uT2JqZWN0W1wiZVNpZ25QSU5OZXdWYWx1ZVwiXVxuICAgICAgICByZXN1bHQuY2FyZEFjY2VzcyA9IGpzb25PYmplY3RbXCJjYXJkQWNjZXNzXCJdXG4gICAgICAgIHJlc3VsdC5tcnpIYXNoID0ganNvbk9iamVjdFtcIm1yekhhc2hcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50TnVtYmVyID0ganNvbk9iamVjdFtcImRvY3VtZW50TnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5kYXRlT2ZCaXJ0aCA9IGpzb25PYmplY3RbXCJkYXRlT2ZCaXJ0aFwiXVxuICAgICAgICByZXN1bHQuZGF0ZU9mRXhwaXJ5ID0ganNvbk9iamVjdFtcImRhdGVPZkV4cGlyeVwiXVxuICAgICAgICByZXN1bHQuZURMRGF0YUdyb3VwcyA9IEVETERhdGFHcm91cHMuZnJvbUpzb24oanNvbk9iamVjdFtcImVETERhdGFHcm91cHNcIl0pXG4gICAgICAgIHJlc3VsdC5lUGFzc3BvcnREYXRhR3JvdXBzID0gRVBhc3Nwb3J0RGF0YUdyb3Vwcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiZVBhc3Nwb3J0RGF0YUdyb3Vwc1wiXSlcbiAgICAgICAgcmVzdWx0LmVJRERhdGFHcm91cHMgPSBFSUREYXRhR3JvdXBzLmZyb21Kc29uKGpzb25PYmplY3RbXCJlSUREYXRhR3JvdXBzXCJdKVxuICAgICAgICByZXN1bHQuZHRjRGF0YUdyb3VwcyA9IERUQ0RhdGFHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZHRjRGF0YUdyb3Vwc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJlcGFyZVByb2dyZXNzIHtcbiAgICBkb3dubG9hZGVkQnl0ZXM/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzPzogbnVtYmVyXG4gICAgcHJvZ3Jlc3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUHJlcGFyZVByb2dyZXNzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUHJlcGFyZVByb2dyZXNzXG5cbiAgICAgICAgcmVzdWx0LmRvd25sb2FkZWRCeXRlcyA9IGpzb25PYmplY3RbXCJkb3dubG9hZGVkQnl0ZXNcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXMgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1wiXVxuICAgICAgICByZXN1bHQucHJvZ3Jlc3MgPSBqc29uT2JqZWN0W1wicHJvZ3Jlc3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyT2JqZWN0VHlwZSB7XG4gICAgbGlzdD86IGFueVtdXG4gICAgaXNJbmNsdWRlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWx0ZXJPYmplY3RUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsdGVyT2JqZWN0VHlwZVxuXG4gICAgICAgIHJlc3VsdC5saXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5saXN0LnB1c2goanNvbk9iamVjdFtcImxpc3RcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlzSW5jbHVkZSA9IGpzb25PYmplY3RbXCJpc0luY2x1ZGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyT2JqZWN0IHtcbiAgICBkb2NJRHNGaWx0ZXI/OiBGaWx0ZXJPYmplY3RUeXBlXG4gICAgZG9jRm9ybWF0c0ZpbHRlcj86IEZpbHRlck9iamVjdFR5cGVcbiAgICBkb2NDYXRlZ29yaWVzRmlsdGVyPzogRmlsdGVyT2JqZWN0VHlwZVxuICAgIGRvY0NvdW50cmllc0ZpbHRlcj86IEZpbHRlck9iamVjdFR5cGVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsdGVyT2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsdGVyT2JqZWN0XG5cbiAgICAgICAgcmVzdWx0LmRvY0lEc0ZpbHRlciA9IEZpbHRlck9iamVjdFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY0lEc0ZpbHRlclwiXSlcbiAgICAgICAgcmVzdWx0LmRvY0Zvcm1hdHNGaWx0ZXIgPSBGaWx0ZXJPYmplY3RUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2NGb3JtYXRzRmlsdGVyXCJdKVxuICAgICAgICByZXN1bHQuZG9jQ2F0ZWdvcmllc0ZpbHRlciA9IEZpbHRlck9iamVjdFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY0NhdGVnb3JpZXNGaWx0ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5kb2NDb3VudHJpZXNGaWx0ZXIgPSBGaWx0ZXJPYmplY3RUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2NDb3VudHJpZXNGaWx0ZXJcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9BdXRoZW50aWNpdHkgPSB7XG4gICAgTk9ORTogMCxcbiAgICBVVl9MVU1JTkVTQ0VOQ0U6IDEsXG4gICAgSVJfQjkwMDogMixcbiAgICBJTUFHRV9QQVRURVJOOiA0LFxuICAgIEFYSUFMX1BST1RFQ1RJT046IDgsXG4gICAgVVZfRklCRVJTOiAxNixcbiAgICBJUl9WSVNJQklMSVRZOiAzMixcbiAgICBPQ1JfU0VDVVJJVFlfVEVYVDogNjQsXG4gICAgSVBJOiAxMjgsXG4gICAgUEhPVE9fRU1CRURfVFlQRTogNTEyLFxuICAgIEhPTE9HUkFNUzogNDA5NixcbiAgICBQSE9UT19BUkVBOiA4MTkyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT046IDMyNzY4LFxuICAgIEJBUkNPREVfRk9STUFUX0NIRUNLOiA2NTUzNixcbiAgICBLSU5FR1JBTTogMTMxMDcyLFxuICAgIEhPTE9HUkFNU19ERVRFQ1RJT046IDUyNDI4OCxcbiAgICBNUlo6IDgzODg2MDgsXG4gICAgU1RBVFVTX09OTFk6IDB4ODAwMDAwMDAsXG4gICAgT1ZJOiAxMDI0LFxuICAgIExJVkVORVNTOiAyMDk3MTUyLFxuICAgIE9DUjogNDE5NDMwNCxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25Db2xvciA9IHtcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0JBQ0tHUk9VTkQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5CYWNrZ3JvdW5kXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9ISU5UX0xBQkVMX1RFWFQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxUZXh0XCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9ISU5UX0xBQkVMX0JBQ0tHUk9VTkQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5IaW50TGFiZWxCYWNrZ3JvdW5kXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTU19MQUJFTF9URVhUOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuUHJvZ3Jlc3NMYWJlbFRleHRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTX0JBUjogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTU19CQVJfQkFDS0dST1VORDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlblByb2dyZXNzQmFyQmFja2dyb3VuZFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUkVTVUxUX0xBQkVMX1RFWFQ6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5SZXN1bHRMYWJlbFRleHRcIixcbiAgICBSRklEX1BST0NFU1NJTkdfU0NSRUVOX0xPQURJTkdfQkFSOiBcInJmaWRQcm9jZXNzaW5nU2NyZWVuTG9hZGluZ0JhclwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19USVRMRV9URVhUOiBcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfREVTQ1JJUFRJT05fVEVYVDogXCJyZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0XCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX0JVVFRPTl9URVhUOiBcInJmaWRFbmFibGVOZmNCdXR0b25UZXh0XCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX0JVVFRPTl9CQUNLR1JPVU5EOiBcInJmaWRFbmFibGVOZmNCdXR0b25CYWNrZ3JvdW5kXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9FcnJvckNvZGVzID0ge1xuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDB4MDAwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDB4MDAwMDAwMDIsXG4gICAgUkZJRF9FUlJPUl9GQUlMRUQ6IDB4ZmZmZmZmZmYsXG4gICAgUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOiAweDgwMDEwMDAxLFxuICAgIFJGSURfRVJST1JfTk9UX0FWQUlMQUJMRTogMHg4MDAxMDAwMixcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfUEFSQU1FVEVSOiAweDgwMDEwMDA0LFxuICAgIFJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOiAweDgwMDEwMDA1LFxuICAgIFJGSURfRVJST1JfTk9UX0VOT1VHSF9NRU1PUlk6IDB4ODAwMTAwMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogMHg4MDAxMDAwOCxcbiAgICBSRklEX0VSUk9SX1VOS05PV05fQ09NTUFORDogMHg4MDAxMDAwOSxcbiAgICBSRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6IDB4ODAwMTAwMEEsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAweDgwMDEwMDBCLFxuICAgIFJGSURfRVJST1JfT0xEX0ZJUk1XQVJFOiAweDgwMDEwMDBDLFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRUQ6IDB4ODAwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAweDgwMDIwMDAxLFxuICAgIFJGSURfRVJST1JfUENTQ19DQU5UX0NPTk5FQ1RfQ0FSRDogMHg4MDAyMDAwMixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19OT1RfQ09OTkVDVEVEOiAweDgwMDIwMDAzLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAweDgwMDIwMDA0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX0JVU1k6IDB4ODAwMjAwMDUsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRF9TQ0FSRDogMHg4MDAyMDAwNixcbiAgICBSRklEX0VSUk9SX1BDU0NfRVhUX0xFX0ZBSUxFRDogMHg4MDAyMDAxMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TRUNVUklUWV9NQU5BR0VSOiAweDg2MDAwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogMHg4NjAwMDAwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9NQUNfRkFJTDogMHg4NjAwMDEwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9FTkNfRkFJTDogMHg4NjAwMDEwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAweDg2MDAwMTAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkVfREFUQTogMHg4NjAwMDEwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184RV9NSVNTSU5HOiAweDg2MDAwMjAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X01JU1NJTkc6IDB4ODYwMDAyMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOTlfTUlTU0lORzogMHg4NjAwMDIwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOiAweDg2MDAwMjAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X0lOQ09SUkVDVDogMHg4NjAwMDIwNCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT05fVExWX1JFU1BPTlNFX0RBVEE6IDB4ODYwMDAzMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfV1JPTkdfUk5EX0lDQ19MRU5HVEg6IDB4ODYwMDAzMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0tBVF9GQUlMVVJFOiAweDg2MDAwMzAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfRFNUX0ZBSUxVUkU6IDB4ODYwMDAzMDQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IDB4ODYwMDAzMDUsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9BVF9GQUlMVVJFOiAweDg2MDAwMzA2LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTogMHg4NjAwMDMwNyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9FWFRfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzA4LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0dFTkVSQUxfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzA5LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfTk9UX0ZPVU5EOiAweDgwMDA2QTgyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMTogMHg4MDAwNjI4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjI6IDB4ODAwMDZCMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfSU5DT1JSRUNUX1BBUkFNUzogMHg4MDAwNkE4MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogMHg4MDAwNkE4OCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDogMHg4MDAwNjNDMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDogMHg4MDAwNjNDMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IDB4ODAwMDYyODMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQyOiAweDgwMDA2OTgzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDI6IDB4ODAwMDY5ODQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQyOiAweDgwMDA2OTg1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9GQUlMRUQ6IDB4ODAxMDYzQzAsXG4gICAgUkZJRF9FUlJPUl9OT1RfUEVSRk9STUVEOiAweDgzMDAwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JU19DTE9TRUQ6IDB4ODMwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogMHg4MzAwMDAwMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9VTktOT1dOOiAweDgzMDAwMDEwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX0JBRF9DRVJUSUZJQ0FURTogMHg4MzAwMDAxMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAweDgzMDAwMDEyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9VTktOT1dOOiAweDgzMDAwMDEzLFxuICAgIFJGSURfRVJST1JfU2Vzc2lvbl9Qcm9jZWR1cmVfVHlwZV9VbnN1cHBvcnRlZDogMHg4MzAwMDAxNCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogMHg4MzAwMDAxNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTktOT1dOX1RZUEU6IDB4ODMwMDAwMTYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5TVVBQT1JURURfU01fVFlQRTogMHg4MzAwMDAxNyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogMHg4MzAwMDAxOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9SRVNUUklDVEVEOiAweDgzMDAwMDE5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgzMDAwMDFBLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IDB4ODMwMDAwMUIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BXRF9NQU5BR0VNRU5UX05PVF9BVVRIT1JJWkVEOiAweDgzMDAwMDFDLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9VTktOT1dOX1RZUEU6IDB4ODMwMDAwMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAweDgzMDAwMDIxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19QQUNFOiAweDgzMDAwMDIyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQV9LRVlTOiAweDgzMDAwMDIzLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogMHg4MzAwMDAyNCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0E6IDB4ODMwMDAwMjUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0lOQ09SUkVDVF9PUFRJT05fQ0E6IDB4ODMwMDAwMjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogMHg4MzAwMDAyNyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfVEFfRkFJTEVEOiAweDgzMDAwMDI4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9BQV9GQUlMRUQ6IDB4ODMwMDAwMjksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogMHg4MzAwMDAyQSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MzAwMDAzMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfSEFTSF9DSEVDS19GQUlMRUQ6IDB4ODMwMDAwMzEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IDB4ODMwMDAwNDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9CSVJUSDogMHg4MzAwMDA0MSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9DT01NVU5JVFlfSUQ6IDB4ODMwMDAwNDIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAweDgzMDAwMDUwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9TRVQ6IDB4ODMwMDAwNTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1ZFUklGSUVEOiAweDgzMDAwMDUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MzAwMDA2MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9OT1RfRU5PVUdIX0RBVEE6IDB4ODMwMTAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfSU5DT1JSRUNUX0RBVEE6IDB4ODMwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAweDgzMDMwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MzA0MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9XUk9OR19UQUc6IDB4ODMwNTAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogMHg4MzA2MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1JFQURfREFUQTogMHg4MzA3MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOiAweDgzMDgwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9OT19FUlJPUjogMHg4NDAwMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfVElNRV9PVVQ6IDB4ODQwMTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTjogMHg4NDAyMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ1JDOiAweDg0MDMwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0lOVEVHUklUWTogMHg4NDA0MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9MRU5HVEg6IDB4ODQwNTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MYXllcjM0X1JGVTogMHg4NDA2MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OX1RPT19NQU5ZOiAweDg0MDcwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTF9COiAweDg0MDgwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0NPTlRFTlRTOiAweDg0MDkwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTDogMHg4NDBBMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfR0xPQkFMX1RJTUVfT1VUOiAweDg0MEIwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9NSUZBUkVfQVVUSDogMHg4NDBDMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0VSUk9SOiAweDg0MEQwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQ09MTElTSU9OOiAweDg0MEUwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQUNLTk9XTEVER0U6IDB4ODQwRjAwMDAsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0NoZWNrVHlwZSA9IHtcbiAgICBPVkk6IFwiY2hlY2tPVklcIixcbiAgICBNTEk6IFwiY2hlY2tNTElcIixcbiAgICBIT0xPOiBcImNoZWNrSG9sb1wiLFxuICAgIEVEOiBcImNoZWNrRURcIixcbiAgICBCTEFDS19BTkRfV0hJVEVfQ09QWTogXCJjaGVja0JsYWNrQW5kV2hpdGVDb3B5XCIsXG4gICAgRFlOQVBSSU5UOiBcImNoZWNrRHluYXByaW50XCIsXG4gICAgR0VPTUVUUlk6IFwiY2hlY2tHZW9tZXRyeVwiLFxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyA9IHtcbiAgICBFUlJfTERTX09LOiAweDAwMDAwMDAxLFxuICAgIEVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDAxLFxuICAgIFJSX0xEU19BU05fTk9UX0VOT1VHSF9EQVRBOiAweDgwMDAwMDAyLFxuICAgIEVSUl9MRFNfQVNOX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDAwMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOCxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9FTkNBUF9DT05URU5UU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDBBLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDExLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTMsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE0LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RHX0hBU0hFU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNixcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMixcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE4LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE5LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JU1NVRVJfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUMsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX1BLX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFFLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUYsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjIsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjQsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjUsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI2LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1VOU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI3LFxuICAgIEVSUl9MRFNfSUNBT19MRFNfT0JKRUNUX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzAsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTogMHg4MDAwMDAzMSxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDAzMixcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg4MDAwMDAzMyxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfRVJST1I6IDB4ODAwMDAwMzQsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19NSVNTRUQ6IDB4ODAwMDAwMzYsXG4gICAgRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTogMHg4MDAwMDAzNSxcbiAgICBFUlJfTERTX0FVVEhfRVJST1I6IDB4ODAwMDAwNTAsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwNTEsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDgwMDAwMDUyLFxuICAgIEVSUl9MRFNfQVVUSF9NRVNTRURfQUxHT1JJVEhNUzogMHg4MDAwMDA1MyxcbiAgICBFUlJfTERTX0FVVEhfUFVCTElDX0tFWV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTQsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NixcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDA1NyxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOiAweDgwMDAwMDU4LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19OT1RfREVGSU5FRDogMHg4MDAwMDA1OSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MDAwMDA1QSxcbiAgICBFUlJfTERTX0RHX1dST05HX1RBSDogMHg4MDAwMDA3MCxcbiAgICBFUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDA3MSxcbiAgICBFUlJfTERTX0JBUF9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAxMSxcbiAgICBFUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDgxMDAwMDIwLFxuICAgIEVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAyMSxcbiAgICBFUlJfTERTX1BBQ0VfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjIsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDIzLFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOiAweDgxMDAwMDI0LFxuICAgIEVSUl9MRFNfUEFDRV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDI1LFxuICAgIEVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDogMHg4MTAwMDAyNixcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAweDgxMDAwMDI3LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyOCxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06IDB4ODEwMDAwMjksXG4gICAgRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAyQSxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfSU5DT1JSRUNUOiAweDgxMDAwMDJCLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9DQU5UX1ZFUklGWTogMHg4MTAwMDAyQyxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOiAweDgxMDAwMDJELFxuICAgIEVSUl9MRFNfUEFDRV9JTV9TQ0hFTUVfSU5DT1JSRUNUOiAweDgxMDAwMDJFLFxuICAgIEVSUl9MRFNfUEFDRV9JTV9SQU5ET01fTUFQUElOR19GQUlMRUQ6IDB4ODEwMDAwMkYsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTogMHg4MTAwMDAzMCxcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9JTkZPOiAweDgxMDAwMDMxLFxuICAgIEVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwMzIsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6IDB4ODEwMDAwMzMsXG4gICAgRVJSX0xEU19DQV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAzNCxcbiAgICBFUlJfTERTX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDM1LFxuICAgIEVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMzYsXG4gICAgRVJSX0xEU19DQV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM3LFxuICAgIEVSUl9MRFNfQ0FfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAweDgxMDAwMDM4LFxuICAgIEVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwNDAsXG4gICAgRVJSX0xEU19UQV9DQU5UX0JVSUxEX0NFUlRJRklDQVRFX0NIQUlOOiAweDgxMDAwMDQxLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOiAweDgxMDAwMDQyLFxuICAgIEVSUl9MRFNfVEFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwNDMsXG4gICAgRVJSX0xEU19UQV9TSUdOQVRVUkVfQlVJTERJTkdfRVJST1I6IDB4ODEwMDAwNDQsXG4gICAgRVJSX0xEU19UQV9JTlZBTElEX0tFWV9BTEdPUklUSE1fUEFSQU1FVEVSUzogMHg4MTAwMDA0NSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDUwLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1MSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6IDB4ODEwMDAwNTIsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOiAweDgxMDAwMDUzLFxuICAgIEVSUl9MRFNfQUFfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDU0LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOiAweDgxMDAwMDU1LFxuICAgIEVSUl9MRFNfQUFfSU5DT1JSRUNUX1RSQUlMRVI6IDB4ODEwMDAwNTYsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgxMDAwMDU3LFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6IDB4ODEwMDAwNzAsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDcxLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPTVBMRVRFX0RBVEE6IDB4ODEwMDAwNzIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOiAweDgxMDAwMDYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfVU5TVVBQT1JURURfVEVSTUlOQUxfVFlQRTogMHg4MTAwMDA2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOiAweDgxMDAwMDYsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTlZBTElEX1BBUkFNUzogMHg4MTAwMDA2NSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ1BJX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYxLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfVE9fSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjcsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY4LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjksXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9NSVNTSU5HOiAweDgxMDAwMTZBLFxuICAgIEVSUl9MRFNfVkRTX1VOU1VQUE9SVEVEX1ZFUlNJT046IDB4ODEwMDAyMDAsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6IDB4ODEwMDAyMDEsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMjAyLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOiAweDgxMDAwMjAzLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOiAweDgxMDAwMjA0LFxuICAgIEVSUl9MRFNfVkRTX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMzAxLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0hFQURFUjogMHg4MTAwMDMwMixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9UWVBFOiAweDgxMDAwMzAzLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAzMDQsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSVNTVUlOR19DT1VOVFJZOiAweDgxMDAwMzA1LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6IDB4ODEwMDAzMDYsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHTkFUVVJFOiAweDgxMDAwMzA3LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19BTEdPUklUSE06IDB4ODEwMDAzMDgsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6IDB4ODEwMDAzMDksXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOiAweDgxMDAwMzBBLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbiAgICBDVF9CTFM6IDcsXG4gICAgQ1RfTERTMjogOCxcbiAgICBDVF9CQ1M6IDksXG4gICAgQ1RfQkNTTkM6IDEwLFxufVxuXG5leHBvcnQgY29uc3QgUkdMTWVhc3VyZVN5c3RlbSA9IHtcbiAgICBNRVRSSUM6IDAsXG4gICAgSU1QRVJJQUw6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9SZXN1bHRUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU1QVFk6IDAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfSU1BR0U6IDEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUxFX0lNQUdFOiAyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX09DUl9FWFRFTkRFRDogMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVTOiA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfR1JBUEhJQ1M6IDYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfVEVTVF9RVUFMSVRZOiA3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfVFlQRVNfQ0FORElEQVRFUzogOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NIT1NFTl9ET0NVTUVOVF9UWVBFX0NBTkRJREFURTogOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UU19JTkZPX0xJU1Q6IDEwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfT0NSX0xFWElDQUxfQU5BTFlaRTogMTUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfVU5DUk9QUEVEX0lNQUdFOiAxNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1ZJU1VBTF9PQ1JfRVhURU5ERUQ6IDE3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX1RFWFRfREFUQTogMTgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfSU1BR0VfREFUQTogMTksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9BVVRIRU5USUNJVFk6IDIwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU9TX0lNQUdFOiAyMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBWUVSX0lNQUdFOiAyNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRTogMjUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEVfVEVYVF9EQVRBOiAyNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJRUxEX0ZJTEVfSU1BR0U6IDI3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfREFUQUJBU0VfQ0hFQ0s6IDI4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklOR0VSUFJJTlRfVEVNUExBVEVfSVNPOiAyOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOUFVUX0lNQUdFX1FVQUxJVFk6IDMwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfUkZJRF9TRVNTSU9OOiA0OCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX0VOQ1JZUFRFRF9SQ0w6IDQ5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfTElDRU5TRTogNTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9URVhUOiAzNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lNQUdFUzogMzcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9IT0xPX1BBUkFNUzogNDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0xJVkVfUE9SVFJBSVQ6IDMyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfU1RBVFVTOiAzMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT046IDM0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRVhUX1BPUlRSQUlUOiAzNSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfRFRDX1ZDOiAxMDksXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgTGluZUNhcCA9IHtcbiAgICBCVVRUOiAwLFxuICAgIFJPVU5EOiAxLFxuICAgIFNRVUFSRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IEZpbHRlckNoZWNrVHlwZSA9IHtcbiAgICBDSEVDS19BVVRIOiBcImNoZWNrQXV0aFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQgPSB7XG4gICAgUkNGX0RJU0FCTEVEOiAwLFxuICAgIFJDRl9WRVJJRklFRDogMSxcbiAgICBSQ0ZfTk9UX1ZFUklGSUVEOiAyLFxuICAgIFJDRl9DT01QQVJFX1RSVUU6IDMsXG4gICAgUkNGX0NPTVBBUkVfRkFMU0U6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJBY3Rpb24gPSB7XG4gICAgQ09NUExFVEU6IDAsXG4gICAgUFJPQ0VTUzogMSxcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogMixcbiAgICBDQU5DRUw6IDMsXG4gICAgRVJST1I6IDQsXG4gICAgUFJPQ0VTU19XSElURV9GTEFTSExJR0hUOiA1LFxuICAgIFRJTUVPVVQ6IDYsXG4gICAgUFJPQ0VTU0lOR19PTl9TRVJWSUNFOiA3LFxuICAgIE5PVElGSUNBVElPTjogMTAxLFxuICAgIFBST0NFU1NfV0hJVEVfVVZfSU1BR0VTOiAxMDIsXG4gICAgUFJPQ0VTU19JUl9GUkFNRTogMTAzLFxufVxuXG5leHBvcnQgY29uc3QgZVByb2Nlc3NHTENvbW1hbmRzID0ge1xuICAgIGVQQ19Qcm9jTWdyX1NldExpY2Vuc2U6IDEyMTAwLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3M6IDEyMTAxLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NBc3luYzogMTIxMDIsXG4gICAgZVBDX1Byb2NNZ3JfSW5pdDogMTIxMDMsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0ltYWdlOiAxMjEwNCxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld0RvY3VtZW50OiAxMjEwNSxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld1BhZ2U6IDEyMTA2LFxuICAgIGVQQ19Qcm9jTWdyX0FkZERhdGFUb1BhY2thZ2U6IDEyMTIxLFxuICAgIGVQQ19Qcm9jTWdyX0ZpbmFsaXplUGFja2FnZTogMTIxMjIsXG4gICAgZVBDX1Byb2NNZ3JfQ3JlYXRlQmFja2VuZFRyYW5zYWN0aW9uOiAxMjEyNSxcbiAgICBlUENfUHJvY01ncl9VbmxvYWQ6IDEyMTA3LFxuICAgIGVQQ19Qcm9jTWdyX0NoZWNrRGF0YWJhc2U6IDEyMTA5LFxuICAgIGVQQ19Qcm9jTWdyX0NvbXBhcmVQb3J0cmFpdHM6IDEyMTExLFxuICAgIGVQQ19SRklEX1NldFRDQ1BhcmFtczogMTI1MjIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRFJlYWRpbmdCdWZmZXJTaXplID0ge1xuICAgIFNUQU5EQVJEX0xFTkdUSDogMCxcbiAgICBFWFRFTkRFRF9MRU5HVEg6IC0xLFxufVxuXG5leHBvcnQgY29uc3QgUEtEUmVzb3VyY2VUeXBlID0ge1xuICAgIENFUlRJRklDQVRFX1BBOiAwLFxuICAgIENFUlRJRklDQVRFX1RBOiAxLFxuICAgIExESUY6IDIsXG4gICAgQ1JMOiAzLFxuICAgIE1MOiA0LFxuICAgIERFRkw6IDUsXG4gICAgREVWTDogNixcbiAgICBCTDogNyxcblxuICAgIGdldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwicGFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICAgICAgY2FzZSBcInRhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfVEFcbiAgICAgICAgICAgIGNhc2UgXCJsZGlmXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTERJRlxuICAgICAgICAgICAgY2FzZSBcImNybFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNSTFxuICAgICAgICAgICAgY2FzZSBcIm1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTUxcbiAgICAgICAgICAgIGNhc2UgXCJkZWZsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVGTFxuICAgICAgICAgICAgY2FzZSBcImRldmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERVZMXG4gICAgICAgICAgICBjYXNlIFwiYmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CTFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlID0ge1xuICAgIGFwdFVuZGVmaW5lZDogMCxcbiAgICBhcHRTdGFuZGFyZDogMSxcbiAgICBhcHRBZHZhbmNlZDogMixcbiAgICBhcHRHZW5lcmFsOiAzLFxufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRSZWFkZXJFcnJvckNvZGVzID0ge1xuICAgIElOSVRJQUxJWkFUSU9OX0NPUkVfQUJTRU5UOiAwLFxuICAgIElOSVRJQUxJWkFUSU9OX0ZBSUxFRDogMSxcbiAgICBJTkNPUlJFQ1RfU0NFTkFSSU86IDIsXG4gICAgTk9fUkVTVUxUOiAzLFxuICAgIFJFTU9WRV9EQVRBQkFTRTogNCxcbiAgICBGRVRDSElOR19EQVRBQkFTRTogNSxcbiAgICBEQl9JRF9OT1RfRk9VTkQ6IDYsXG4gICAgREJfREVTQ1JJUFRJT05fTk9UX0ZPVU5EOiA3LFxuICAgIFNBVkVfREI6IDgsXG4gICAgRE9XTkxPQURfREJfSU5DT1JSRUNUX0NIRUNLU1VNOiA5LFxuICAgIERCX0RPV05MT0FEOiAxMCxcbiAgICBSRklEX0VSUk9SOiAxMixcbiAgICBMSUNFTlNFX0FCU0VOVF9PUl9DT1JSVVBURUQ6IDEzLFxuICAgIExJQ0VOU0VfSU5WQUxJRF9EQVRFOiAxNCxcbiAgICBMSUNFTlNFX0lOVkFMSURfVkVSU0lPTjogMTUsXG4gICAgTElDRU5TRV9JTlZBTElEX0RFVklDRV9JRDogMTYsXG4gICAgTElDRU5TRV9JTlZBTElEX1NZU1RFTV9PUl9BUFBfSUQ6IDE3LFxuICAgIExJQ0VOU0VfTk9fQ0FQQUJJTElUSUVTOiAxOCxcbiAgICBMSUNFTlNFX05PX0FVVEhFTlRJQ0lUWTogMTksXG4gICAgUkVDT1JEX1BST0NFU1NfSU5WQUxJRF9PVVRQVVRfVVJMOiAyMCxcbiAgICBMSUNFTlNFX09OTElORV9FUlJPUjogMjEsXG4gICAgTElDRU5TRV9OT19EQVRBQkFTRTogMjIsXG4gICAgTElDRU5TRV9EQVRBQkFTRV9JTkNPUlJFQ1Q6IDIzLFxuICAgIElOVkFMSURfVENDX1BBUkFNUzogMjQsXG4gICAgUkZJRF9JTl9QUk9HUkVTUzogMjUsXG4gICAgU1RBUlRfQkFDS0VORF9QUk9DRVNTSU5HOiAyNixcbiAgICBBRERfREFUQV9UT19QQUNLQUdFOiAyNyxcbiAgICBGSU5BTElaRV9GQUlMRUQ6IDI4LFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiAyOSxcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogMzAsXG4gICAgQ0FOTk9UX1VTRV9DQU1FUkFfSU5fU0NFTkFSSU86IDQwLFxuICAgIE5BVElWRV9KQVZBX0VYQ0VQVElPTjogMTAwMCxcbiAgICBCQUNLRU5EX09OTElORV9QUk9DRVNTSU5HOiAzMDMsXG4gICAgV1JPTkdfSU5QVVQ6IDQwMCxcbiAgICBSRVNVTFRfVU5BVkFJTEFCTEU6IDQxMCxcbiAgICBSRVNVTFRfV1JPTkdfT1VUUFVUOiA0MTEsXG4gICAgU1RBVEVfRVhDRVBUSU9OOiA1MDAsXG4gICAgQkxFX0VYQ0VQVElPTjogNjAwLFxuICAgIEZFQVRVUkVfQkxVRVRPT1RIX0xFX05PVF9TVVBQT1JURUQ6IDYwMSxcbiAgICBBUFBfQkFDS0dST1VORDogNzAwLFxuICAgIE9OTElORV9QUk9DRVNTSU5HX1dST05HX0lOUFVUOiA4MDAsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0lkZW50aWZpZXIgPSB7XG4gICAgU0NFTkFSSU9fTVJaOiBcIk1yelwiLFxuICAgIFNDRU5BUklPX0JBUkNPREU6IFwiQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX0xPQ0FURTogXCJMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19PQ1I6IFwiT2NyXCIsXG4gICAgU0NFTkFSSU9fRE9DVFlQRTogXCJEb2NUeXBlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREU6IFwiTXJ6T3JCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0xPQ0FURTogXCJNcnpPckxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9BTkRfTE9DQVRFOiBcIk1yekFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX0JBUkNPREVfQU5EX0xPQ0FURTogXCJCYXJjb2RlQW5kTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX09DUjogXCJNcnpPck9jclwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFX09SX09DUjogXCJNcnpPckJhcmNvZGVPck9jclwiLFxuICAgIFNDRU5BUklPX0xPQ0FURV9WSVNVQUxfQU5EX01SWl9PUl9PQ1I6IFwiTG9jYXRlVmlzdWFsX0FuZF9NcnpPck9jclwiLFxuICAgIFNDRU5BUklPX0ZVTExfUFJPQ0VTUzogXCJGdWxsUHJvY2Vzc1wiLFxuICAgIFNDRU5BUklPX0ZVTExfQVVUSDogXCJGdWxsQXV0aFwiLFxuICAgIFNDRU5BUklPX0lEM1JVUzogXCJJZDNSdXNcIixcbiAgICBTQ0VOQVJJT19SVVNfU1RBTVA6IFwiUnVzU3RhbXBcIixcbiAgICBTQ0VOQVJJT19PQ1JfRlJFRTogXCJPY3JGcmVlXCIsXG4gICAgU0NFTkFSSU9fQ1JFRElUX0NBUkQ6IFwiQ3JlZGl0Q2FyZFwiLFxuICAgIFNDRU5BUklPX0NBUFRVUkU6IFwiQ2FwdHVyZVwiLFxuICAgIFNDRU5BUklPX0RUQzogXCJEVENcIixcbiAgICBTQ0VOQVJJT19SRklEOiBcIlJGSURcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBBQ1BUX1VOREVGSU5FRDogMCxcbiAgICBBQ1BUX0JBQzogMSxcbiAgICBBQ1BUX1BBQ0U6IDIsXG4gICAgQUNQVF9DQTogMyxcbiAgICBBQ1BUX1RBOiA0LFxuICAgIEFDUFRfQUE6IDUsXG4gICAgQUNQVF9SSTogNixcbiAgICBBQ1BUX0NBUkRfSU5GTzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9Ob3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBSRklEX05PVElGSUNBVElPTl9FUlJPUjogMHgwMDAxMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9ET0NVTUVOVF9SRUFEWTogMHgwMDAxMDAwMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogMHgwMDAxMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MMzogMHgwMDAxMDAwQSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QUk9HUkVTUzogMHgwMDAxMDAwQixcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiAweDAwMDEwMDBFLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX1JFUVVJUkVEOiAweDAwMDEwMDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0lTT19FUlJPUjogMHgwMDAxMTAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiAweDAwMDEzMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX0VTVEFCTElTSEVEOiAweDAwMDE0MDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0RJU0NPTk5FQ1RFRDogMHgwMDAyMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HRUQ6IDB4MDAwMjAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMHgwMDAyMDAwMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfVElNRTogMHgwMDAyMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0RBVEFfUkVDRUlWRUQ6IDB4MDAwMjAwMDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAweDAwMDIwMDA1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19TUEVFRDogMHgwMDAyMDAwNixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1BST0NFU1NfVElNRTogMHgwMDAyMDAwNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAweDAwMDIwMDA4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRVhUX0xFTkdUSF9TVVBQT1JUOiAweDAwMDIwMDEwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOOiAweDAwMDIwMDExLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDB4MDAwMjAwMTIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU0NFTkFSSU86IDB4MDAwMjAwMjAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFESU5HX0RBVEFHUk9VUDogMHgwMDAzMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAweDAwMDQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRU5EX09GX0ZJTEU6IDB4MDAwNTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX0FDQ0VTU19ERU5JRUQ6IDB4MDAwNjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogMHgwMDA3MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfU1RBUlQ6IDB4MDAwODAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX0ZJTklTSDogMHgwMDA5MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDB4MDAwQTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfRklMRV9DSEVDSzogMHgwMDBCMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1VQREFUSU5HX0RBVEFHUk9VUDogMHgwMDBDMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiAweDAwMEQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JJX1NFQ1RPUl9JRDogMHgwMDBFMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9CSU9NRVRSSUNTX0VNUFRZX1BMQUNFSE9MREVSOiAweDAwMEYwMDAwLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhUG9zaXRpb24gPSB7XG4gICAgVU5TUEVDSUZJRUQ6IDAsXG4gICAgQkFDSzogMSxcbiAgICBGUk9OVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Bhc3N3b3JkX1R5cGUgPSB7XG4gICAgUFBUX1VOS05PV046IDAsXG4gICAgUFBUX01SWjogMSxcbiAgICBQUFRfQ0FOOiAyLFxuICAgIFBQVF9QSU46IDMsXG4gICAgUFBUX1BVSzogNCxcbiAgICBQUFRfUElOX0VTSUdOOiA1LFxuICAgIFBQVF9TQUk6IDYsXG4gICAgUFBUX01SWl9IQVNIOiA3LFxufVxuXG5leHBvcnQgY29uc3QgVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFVOS05PV046IC0xLFxuICAgIFNDQUxFX1RPX0ZJTEw6IDAsXG4gICAgU0NBTEVfQVNQRUNUX0ZJVDogMSxcbiAgICBTQ0FMRV9BU1BFQ1RfRklMTDogMixcbiAgICBSRURSQVc6IDMsXG4gICAgQ0VOVEVSOiA0LFxuICAgIFRPUDogNSxcbiAgICBCT1RUT006IDYsXG4gICAgTEVGVDogNyxcbiAgICBSSUdIVDogOCxcbiAgICBUT1BfTEVGVDogOSxcbiAgICBUT1BfUklHSFQ6IDEwLFxuICAgIEJPVFRPTV9MRUZUOiAxMSxcbiAgICBCT1RUT01fUklHSFQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVJlc3VsdCA9IHtcbiAgICBOT19FUlI6IDAsXG4gICAgSU5WQUxJRF9SRVNVTFQ6IDE0MCxcbiAgICBOVUxMX1BUUl9FUlI6IC02MDAxLFxuICAgIEJBRF9BUkdfRVJSOiAtNjAwMixcbiAgICBTSVpFX0VSUjogLTYwMDMsXG4gICAgUkFOR0VfRVJSOiAtNjAwNCxcbiAgICBJTlRFUk5BTF9FUlI6IC02MDA1LFxuICAgIFRSWV9FWENFUFRfRVJSOiAtNjAwNixcbiAgICBCQVJfQ09ERV9OT1RfRk9VTkQ6IC02MDA4LFxuICAgIEJBUl9DT0RFX0RFQ09ERV9FUlI6IC02MDEwLFxuICAgIE5PX1VTRVJfRExMX0ZPVU5EOiAtNjAxOSxcbiAgICBOT19JUFBfRExMX0ZPVU5EOiAtNjAyMCxcbiAgICBJUFBfRVhFQ19FUlI6IC02MDI0LFxuICAgIElQUF9UUllfRVhDRVBUX0VSUjogLTYwMjUsXG4gICAgQkFSQ09ERV9FUlJPUl9JTlBVVF9QQVJBTTogLTExMDAxLFxuICAgIEJBUkNPREVfRVJST1JfRklOSVQ6IC0xMTAwNixcbiAgICBCQVJDT0RFX0VSUk9SX05PVF9MT0FEX0lQX0RFQ09ERURfTEw6IC0xMTAxMixcbiAgICBCQVJDT0RFX0VSUk9SX0lOTkVSX1BST0JMRU06IC0xMTEwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RFQ09ERV8xRF9CQURfREVDT0RFOiAtMTEyMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EX1JPV19PUl9DT0xVTU46IC0xMTIwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1g6IC0xMTIwMixcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1k6IC0xMTIwMyxcbiAgICBCQVJDT0RFX0VSUk9SXzJEX1VHT0xfTUFYOiAtMTEyMDQsXG4gICAgQkFSQ09ERV9FUlJPUl9JTkRFRklOSVRFTFlfREVDT0RFRDogLTExMjEwLFxuICAgIEJBUkNPREVfRVJST1JfRExMX05PVF9JTklUOiAtMTEzMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9JUF9ERUNPREVfRExMX1RyeV9FeGNlcHQ6IC0xMTQwMCxcbiAgICBJUERFQ09ERV9FUlJPUl9MQVJHRUVSUk9SUzogLTQ1MDMsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRDT0xVTU5TOiAtNDUwNCxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVFJPV1M6IC00NTA1LFxuICAgIElQREVDT0RFX0VSUk9SX0lOQ09SUkVDVF9FUlJPUl9MRVZFTDogLTQ1MTEsXG4gICAgSVBERUNPREVfRVJST1JfTE9BRElOR19ERVZfVEFCTEU6IC00NTEyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQXBwbGljYXRpb25fVHlwZSA9IHtcbiAgICBlUEFTU1BPUlQ6IDEsXG4gICAgZUlEOiAyLFxuICAgIGVTSUdOOiAzLFxuICAgIGVETDogNCxcbiAgICBMRFMyX1RSQVZFTF9SRUNPUkRTOiA1LFxuICAgIExEUzJfVklTQV9SRUNPUkRTOiA2LFxuICAgIExEUzJfQUREX0JJT01FVFJJQ1M6IDcsXG4gICAgZURUQ19QQzogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja0RpYWdub3NlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTUzogMSxcbiAgICBJTlZBTElEX0lOUFVUX0RBVEE6IDIsXG4gICAgSU5URVJOQUxfRVJST1I6IDMsXG4gICAgRVhDRVBUSU9OX0lOX01PRFVMRTogNCxcbiAgICBVTkNFUlRBSU5fVkVSSUZJQ0FUSU9OOiA1LFxuICAgIE5FQ0VTU0FSWV9JTUFHRV9OT1RfRk9VTkQ6IDcsXG4gICAgUEhPVE9fU0lERVNfTk9UX0ZPVU5EOiA4LFxuICAgIElOVkFMSURfQ0hFQ0tTVU06IDEwLFxuICAgIFNZTlRBWF9FUlJPUjogMTEsXG4gICAgTE9HSUNfRVJST1I6IDEyLFxuICAgIFNPVVJDRVNfQ09NUEFSSVNPTl9FUlJPUjogMTMsXG4gICAgRklFTERTX0NPTVBBUklTT05fTE9HSUNfRVJST1I6IDE0LFxuICAgIElOVkFMSURfRklFTERfRk9STUFUOiAxNSxcbiAgICBUUlVFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMSxcbiAgICBGSVhFRF9QQVRURVJOX0VSUk9SOiAyMixcbiAgICBMT1dfQ09OVFJBU1RfSU5fSVJfTElHSFQ6IDIzLFxuICAgIElOQ09SUkVDVF9CQUNLR1JPVU5EX0xJR0hUOiAyNCxcbiAgICBCQUNLR1JPVU5EX0NPTVBBUklTT05fRVJST1I6IDI1LFxuICAgIElOQ09SUkVDVF9URVhUX0NPTE9SOiAyNixcbiAgICBQSE9UT19GQUxTRV9MVU1JTklTQ0VOQ0U6IDI3LFxuICAgIFRPT19NVUNIX1NISUZUOiAyOCxcbiAgICBDT05UQUNUX0NISVBfVFlQRV9NSVNNQVRDSDogMjksXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgUEhPVE9fV0hJVEVfSVJfRE9OVF9NQVRDSDogNDQsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBFTkNSWVBURURfSVBJX05PVF9GT1VORDogNjYsXG4gICAgRU5DUllQVEVEX0lQSV9EQVRBX0RPTlRfTUFUQ0g6IDY3LFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfSElHSExJR0hUX0lSOiA4MCxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0dMQVJFU19JTl9QSE9UT19BUkVBOiA4MSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX1BIT1RPX1JFUExBQ0VEOiA4MixcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0xBTkRNQVJLU19DSEVDS19FUlJPUjogODMsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9GQUNFX1BSRVNFTkNFX0NIRUNLX0VSUk9SOiA4NCxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0ZBQ0VfQUJTRU5DRV9DSEVDS19FUlJPUjogODUsXG4gICAgQ0hEX0ZJRUxEX1BPU19DT1JSRUNUT1JfSU5DT1JSRUNUX0hFQURfUE9TSVRJT046IDg2LFxuICAgIENIRF9GSUVMRF9QT1NfQ09SUkVDVE9SX0FHRV9DSEVDS19FUlJPUjogODcsXG4gICAgQ0hEX0ZJRUxEX1BPU19DT1JSRUNUT1JfU0VYX0NIRUNLX0VSUk9SOiA4OCxcbiAgICBPVklfSVJfSU5WSVNJQkxFOiA5MCxcbiAgICBPVklfSU5TVUZGSUNJRU5UX0FSRUE6IDkxLFxuICAgIE9WSV9DT0xPUl9JTlZBUklBQkxFOiA5MixcbiAgICBPVklfQkFEX0NPTE9SX0ZST05UOiA5MyxcbiAgICBPVklfQkFEX0NPTE9SX1NJREU6IDk0LFxuICAgIE9WSV9XSURFX0NPTE9SX1NQUkVBRDogOTUsXG4gICAgT1ZJX0JBRF9DT0xPUl9QRVJDRU5UOiA5NixcbiAgICBIT0xPR1JBTV9FTEVNRU5UX0FCU0VOVDogMTAwLFxuICAgIEhPTE9HUkFNX1NJREVfVE9QX0lNQUdFU19BQlNFTlQ6IDEwMSxcbiAgICBIT0xPR1JBTV9FTEVNRU5UX1BSRVNFTlQ6IDEwMixcbiAgICBIT0xPR1JBTV9GUkFNRVNfSVNfQUJTRU5UOiAxMDMsXG4gICAgSE9MT0dSQU1fSE9MT19GSUVMRF9JU19BQlNFTlQ6IDEwNCxcbiAgICBQSE9UT19QQVRURVJOX0lOVEVSUlVQVEVEOiAxMTAsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEOiAxMTEsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfQ09MT1JTOiAxMTIsXG4gICAgUEhPVE9fUEFUVEVSTl9JUl9WSVNJQkxFOiAxMTMsXG4gICAgUEhPVE9fUEFUVEVSTl9OT1RfSU5URVJTRUNUOiAxMTQsXG4gICAgUEhPVE9fU0laRV9JU19XUk9ORzogMTE1LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5WQUxJRF9DT0xPUjogMTE2LFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRF9WRVJUOiAxMTcsXG4gICAgUEhPVE9fUEFUVEVSTl9QQVRURVJOX05PVF9GT1VORDogMTE4LFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTE5LFxuICAgIFBIT1RPX0lTX05PVF9SRUNUQU5HTEU6IDEyMCxcbiAgICBQSE9UT19DT1JORVJTX0lTX1dST05HOiAxMjEsXG4gICAgRE9DVU1FTlRfSVNfQ0FOQ0VMTElORzogMTIyLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0JMVUU6IDEzMCxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9HUkVFTjogMTMxLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX1JFRDogMTMyLFxuICAgIFRFWFRfU0hPVUxEX0JFX0JMQUNLOiAxMzMsXG4gICAgU0VDVVJJVFlfVEVYVF9JU19BQlNFTlQ6IDEzNCxcbiAgICBCQVJDT0RFX1dBU19SRUFEX1dJVEhfRVJST1JTOiAxNDAsXG4gICAgQkFSQ09ERV9EQVRBX0ZPUk1BVF9FUlJPUjogMTQxLFxuICAgIEJBUkNPREVfU0laRV9QQVJBTVNfRVJST1I6IDE0MixcbiAgICBOT1RfQUxMX0JBUkNPREVTX1JFQUQ6IDE0MyxcbiAgICBHTEFSRVNfSU5fQkFSQ09ERV9BUkVBOiAxNDQsXG4gICAgQ0hEX05PX0NFUlRJRklDQVRFX0ZPUl9ESUdJVEFMX1NJR05BVFVSRV9DSEVDSzogMTQ1LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fUE9SVFJBSVRTX0RJRkZFUjogMTUwLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9SRVBMWTogMTUxLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fU0VSVklDRV9FUlJPUjogMTUyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9UX0VOT1VHSF9JTUFHRVM6IDE1MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX0xJVkVfUEhPVE86IDE1NCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfTElDRU5TRTogMTU1LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fUE9SVFJBSVRfREVURUNURUQ6IDE1NixcbiAgICBNT0JJTEVfSU1BR0VTX1VOU1VJVEFCTEVfTElHSFRfQ09ORElUSU9OUzogMTYwLFxuICAgIE1PQklMRV9JTUFHRVNfV0hJVEVfVVZfTk9fRElGRkVSRU5DRTogMTYxLFxuICAgIEZJTkdFUlBSSU5UU19DT01QQVJJU09OX01JU01BVENIOiAxNzAsXG4gICAgSE9MT19QSE9UT19GQUNFX05PVF9ERVRFQ1RFRDogMTgwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9DT01QQVJJU09OX0ZBSUxFRDogMTgxLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9HTEFSRV9JTl9DRU5URVJfQUJTRU5UOiAxODIsXG4gICAgSE9MT19FTEVNRU5UX1NIQVBFX0VSUk9SOiAxODMsXG4gICAgQUxHT1JJVEhNX1NURVBTX0VSUk9SOiAxODQsXG4gICAgSE9MT19BUkVBU19OT1RfTE9BREVEOiAxODUsXG4gICAgRklOSVNIRURfQllfVElNRU9VVDogMTg2LFxuICAgIEhPTE9fUEhPVE9fRE9DVU1FTlRfT1VUU0lERV9GUkFNRTogMTg3LFxuICAgIExJVkVORVNTX0RFUFRIX0NIRUNLX0ZBSUxFRDogMTkwLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX1NZTUJPTF9QT1NJVElPTjogMjAwLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX0JBQ0tHUk9VTkQ6IDIwMSxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19NUlpfV0lEVEg6IDIwMixcbiAgICBNUlpfUVVBTElUWV9XUk9OR19NUlpfSEVJR0hUOiAyMDMsXG4gICAgTVJaX1FVQUxJVFlfV1JPTkdfTElORV9QT1NJVElPTjogMjA0LFxuICAgIE1SWl9RVUFMSVRZX1dST05HX0ZPTlRfVFlQRTogMjA1LFxuICAgIE9DUl9RVUFMSVRZX1RFWFRfUE9TSVRJT046IDIyMCxcbiAgICBPQ1JfUVVBTElUWV9JTlZBTElEX0ZPTlQ6IDIyMSxcbiAgICBPQ1JfUVVBTElUWV9JTlZBTElEX0JBQ0tHUk9VTkQ6IDIyMixcbiAgICBMQVNfSU5LX0lOVkFMSURfTElORVNfRlJFUVVFTkNZOiAyMzAsXG4gICAgRE9DX0xJVkVORVNTX0RPQ1VNRU5UX05PVF9MSVZFOiAyMzgsXG4gICAgQ0hEX0RPQ19MSVZFTkVTU19CTEFDS19BTkRfV0hJVEVfQ09QWV9ERVRFQ1RFRDogMjM5LFxuICAgIERPQ19MSVZFTkVTU19FTEVDVFJPTklDX0RFVklDRV9ERVRFQ1RFRDogMjQwLFxuICAgIERPQ19MSVZFTkVTU19JTlZBTElEX0JBUkNPREVfQkFDS0dST1VORDogMjQxLFxuICAgIElDQU9fSURCX0JBU0VfMzJfRVJST1I6IDI0MyxcbiAgICBJQ0FPX0lEQl9aSVBQRURfRVJST1I6IDI0NCxcbiAgICBJQ0FPX0lEQl9NRVNTQUdFX1pPTkVfRU1QVFk6IDI0NSxcbiAgICBJQ0FPX0lEQl9TSUdOQVRVUkVfTVVTVF9CRV9QUkVTRU5UOiAyNDYsXG4gICAgSUNBT19JREJfU0lHTkFUVVJFX01VU1RfTk9UX0JFX1BSRVNFTlQ6IDI0NyxcbiAgICBJQ0FPX0lEQl9DRVJUSUZJQ0FURV9NVVNUX05PVF9CRV9QUkVTRU5UOiAyNDgsXG4gICAgSU5DT1JSRUNUX09CSkVDVF9DT0xPUjogMjUwLFxufVxuXG5leHBvcnQgY29uc3QgUkZJRERlbGVnYXRlID0ge1xuICAgIE5VTEw6IDAsXG4gICAgTk9fUEE6IDEsXG4gICAgRlVMTDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFRleHRQcm9jZXNzaW5nID0ge1xuICAgIG9jTm9DaGFuZ2U6IDAsXG4gICAgb2NVcHBlcmNhc2U6IDEsXG4gICAgb2NMb3dlcmNhc2U6IDIsXG4gICAgb2NDYXBpdGFsOiAzLFxufVxuXG5leHBvcnQgY29uc3QgTG9nTGV2ZWwgPSB7XG4gICAgRmF0YWxFcnJvcjogXCJGYXRhbEVycm9yXCIsXG4gICAgRXJyb3I6IFwiRXJyb3JcIixcbiAgICBXYXJuaW5nOiBcIldhcm5pbmdcIixcbiAgICBJbmZvOiBcIkluZm9cIixcbiAgICBEZWJ1ZzogXCJEZWJ1Z1wiLFxufVxuXG5leHBvcnQgY29uc3QgQW5pbWF0aW9uSW1hZ2UgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBQQVNTUE9SVF9TSU5HTEVfUEFHRTogMSxcbiAgICBQQVNTUE9SVF9UV09fUEFHRVM6IDIsXG4gICAgSURfRlJPTlQ6IDMsXG4gICAgSURfRlJPTlRfTVJaOiA0LFxuICAgIElEX0JBQ0s6IDUsXG4gICAgSURfQkFDS19NUlo6IDYsXG4gICAgSURfQkFDS19CQVJDT0RFOiA3LFxuICAgIElEX0JBQ0tfQkFSQ09ERV9NUlo6IDgsXG4gICAgQkFOS19DQVJEX0ZST05UOiA5LFxuICAgIEJBTktfQ0FSRF9CQUNLOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IHtcbiAgICBOT1RfUkVBRFk6IDAsXG4gICAgUkVBRFk6IDEsXG4gICAgVElNRU9VVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBOT046IDMsXG4gICAgQTQ6IDQsXG4gICAgSUQzX3gyOiA1LFxuICAgIElEMl9UVVJLRVk6IDYsXG4gICAgSUQxXzkwOiAxMCxcbiAgICBJRDFfMTgwOiAxMSxcbiAgICBJRDFfMjcwOiAxMixcbiAgICBJRDJfMTgwOiAxMyxcbiAgICBJRDNfMTgwOiAxNCxcbiAgICBDVVNUT006IDEwMDAsXG4gICAgUEhPVE86IDEwMDEsXG4gICAgRkxFWElCTEU6IDEwMDIsXG4gICAgVU5LTk9XTjogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MDAwMDAwMSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9OT05fTUFUQ0hJTkdfU0lHTkFUVVJFX0FMR09SSVRITTogMHg5MDAwMDAwMixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVElNRV9DT0RJTkc6IDB4OTAwMDAwMDMsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1VTRV9PRl9HRU5FUkFMSVpFRF9USU1FOiAweDkwMDAwMDA0LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX0lTU1VFUjogMHg5MDAwMDAwNSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9TVUJKRUNUOiAweDkwMDAwMDA2LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX0NSSVRJQ0FMX0VYVEVOU0lPTjogMHg5MDAwMDAwOCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9DU0NBX1JPTEU6IDB4OTAwMDAwMEUsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfRFNfUk9MRTogMHg5MDAwMDAwRixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfSVNTVUVSX1NVQkpFQ1RfRFM6IDB4OTAwMDAwMTAsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRFVQTElDQVRJTkdfRVhURU5TSU9OUzogMHg5MDAwMDAxNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9NSVNTRUQ6IDB4OTAwMDAyMDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMjAxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTUlTU0VEOiAweDkwMDAwMjA2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjA4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMjA5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogMHg5MDAwMDIwQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTUlTU0VEX0VYVEVOU0lPTlM6IDB4OTAwMDAyMEIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMjBDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjBELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX01JU1NFRDogMHg5MDAwMDIwRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMEYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX01JU1NFRDogMHg5MDAwMDIxMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMTogMHg5MDAwMDIxMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMjogMHg5MDAwMDIxMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTk9UX0NSSVRJQ0FMOiAweDkwMDAwMjE0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19NSVNTRUQ6IDB4OTAwMDAyMTYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfSU5DT1JSRUNUOiAweDkwMDAwMjE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDIxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMUEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX01JU1NFRDogMHg5MDAwMDIyMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjIxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfRU1QVFk6IDB4OTAwMDAyMjIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0VNUFRZOiAweDkwMDAwMjI1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjI2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIyOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fRU1QVFk6IDB4OTAwMDAyMjksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIyQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMkMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMkQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMkUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIzMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIzMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMzMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIzNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTUlTU0VEOiAweDkwMDAwMjM1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIzNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfVkVSU0lPTjogMHg5MDAwMDIzNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTOiAweDkwMDAwMjM4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVNfRU1QVFk6IDB4OTAwMDAyMzksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19FTVBUWTogMHg5MDAwMDIzQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfUE9MSUNZX0lEX01JU1NFRDogMHg5MDAwMDIzQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX01JU1NFRDogMHg5MDAwMDIzRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfRU1QVFk6IDB4OTAwMDAyM0YsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9QT0lOVF9NSVNTRUQ6IDB4OTAwMDAyNDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TTl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NVQkpFQ1RfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DU0NBX0FMVF9OQU1FU19OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDI0OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9DUklUSUNBTDogMHg5MDAwMDI0QSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0QixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfQ1JJVElDQUw6IDB4OTAwMDAyNEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9PUFRJT05BTF9DUklUSUNBTDogMHg5MDAwMDI0RCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPTU1PTl9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEYsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjAsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIxLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMixcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIzLFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX01JU1NJTkc6IDB4OTAwMDAwMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX1VORVhQRUNURUQ6IDB4OTAwMDAwMjYsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX1VOU1VQUE9SVEVEOiAweDkwMDAwMDMwLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzEsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMyxcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9PSURfSU5DT1JSRUNUOiAweDkwMDAwMTAwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUEwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX0NPTlRFTlRfT0lEX0lOQ09SUkVDVDogMHg5MDAwMDFBMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDEsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0VNUFRZOiAweDkwMDAwMTAyLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19VTlNVUFBPUlRFRDogMHg5MDAwMDEwMyxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfU0lHTkVSX0lORk9TX01VTFRJUExFX0VOVFJJRVM6IDB4OTAwMDAxMDksXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19NSVNTRUQ6IDB4OTAwMDAxQjAsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19FTVBUWTogMHg5MDAwMDFCMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ1JMU19JTkNPUlJFQ1RfVVNBR0U6IDB4OTAwMDAxQjIsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0NPTlRFTlRfT0lEOiAweDkwMDAwMTA0LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX05VTUJFUl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDUsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9NSVNTSU5HOiAweDkwMDAwMTA2LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfRVhUUkE6IDB4OTAwMDAxMDcsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDgsXG4gICAgTlRGX0xEU19JQ0FPX01BU1RFUl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUMwLFxuICAgIE5URl9MRFNfSUNBT19ERVZJQVRJT05fTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFDOCxcbiAgICBOVEZfTERTX0JTSV9ERUZFQ1RfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFEMCxcbiAgICBOVEZfTERTX0JTSV9CTEFDS19MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQ4LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMTBBLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfQ0hPSUNFOiAweDkwMDAwMTBCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9ESUdFU1RfQUxHT1JJVEhNX05PVF9MSVNURUQ6IDB4OTAwMDAxMEMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTBELFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfREFUQTogMHg5MDAwMDEwRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX1ZhbHVlOiAweDkwMDAwMTBGLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfREFUQTogMHg5MDAwMDExMSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9WQUxVRTogMHg5MDAwMDExMixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX0RBVEE6IDB4OTAwMDAxMUMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfVkFMVUU6IDB4OTAwMDAxMUQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfTUlTU0lORzogMHg5MDAwMDExRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9EQVRBOiAweDkwMDAwMTFGLFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MDAwMDExNSxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogMHg5MDAwMDExNixcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6IDB4OTAwMDAxMTcsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6IDB4OTAwMDAxMTgsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAweDkwMDAwMTE5LFxuICAgIE5URl9MRFNfVU5TVVBQT1JURURfSU1BR0VfRk9STUFUOiAweDkwMDAwMTFBLFxuICAgIE5URl9MRFNfTVJaX0RPQ1VNRU5UX1RZUEVfVU5LTk9XTjogMHgwMDAyMjAwOCxcbiAgICBOVEZfTERTX01SWl9JU1NVSU5HX1NUQVRFX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwOSxcbiAgICBOVEZfTERTX01SWl9OQU1FX0lTX1ZPSUQ6IDB4MDAwMjIwMEEsXG4gICAgTlRGX0xEU19NUlpfTlVNQkVSX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAwRCxcbiAgICBOVEZfTERTX01SWl9OQVRJT05BTElUWV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMEUsXG4gICAgTlRGX0xEU19NUlpfRE9CX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRixcbiAgICBOVEZfTERTX01SWl9ET0JfRVJST1I6IDB4MDAwMjIwMTAsXG4gICAgTlRGX0xEU19NUlpfRE9CX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxMSxcbiAgICBOVEZfTERTX01SWl9TRVhfSU5DT1JSRUNUOiAweDAwMDIyMDEyLFxuICAgIE5URl9MRFNfTVJaX0RPRV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMTMsXG4gICAgTlRGX0xEU19NUlpfRE9FX0VSUk9SOiAweDAwMDIyMDE0LFxuICAgIE5URl9MRFNfTVJaX0RPRV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTUsXG4gICAgTlRGX0xEU19NUlpfT1BUSU9OQUxfREFUQV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTYsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDE3LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVDogMHgwMDAyMjAxOCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX01JU1NJTkc6IDB4OTAwMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9JTkNPUlJFQ1Q6IDB4OTAwMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX01JU1NJTkc6IDB4OTAwMzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX0lOQ09SUkVDVDogMHg5MDA0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfVFlQRV9JTkNPUlJFQ1Q6IDB4OTAwNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX01JU1NJTkc6IDB4OTAwNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX0lOQ09SUkVDVDogMHg5MDA3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0lNQUdFX01JU1NJTkc6IDB4OTAwODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9GT1JNQVRfSURfSU5DT1JSRUNUOiAweDkwMDkwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwQTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0xFTkdUSF9JTkNPUlJFQ1Q6IDB4OTAwQjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0dFTkRFUjogMHg5MDEwMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRVlFX0NPTE9SOiAweDkwMTEwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9IQUlSX0NPTE9SOiAweDkwMTIwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1lBVzogMHg5MDEzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9QSVRDSDogMHg5MDE0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ST0xMOiAweDkwMTUwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfWUFXOiAweDkwMTYwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUElUQ0g6IDB4OTAxNzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ST0xMOiAweDkwMTgwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9GQUNFX0lNQUdFX1RZUEU6IDB4OTAxOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0lNQUdFX0RBVEFfVFlQRTogMHg5MDFBMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19VTlNVUFBPUlRFRF9TVERfUEFSQU1FVEVSUzogMHg5MTAwMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19ERVBSRUNBVEVEX1ZFUlNJT046IDB4OTEwMDAwMDEsXG4gICAgTlRGX0xEU19TSV9QQUNFX0RPTUFJTl9QQVJBTVNfVVNJTkdfU1REX1JFRjogMHg5MTAwMDAwMixcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDMsXG4gICAgTlRGX0xEU19TSV9DQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDA0LFxuICAgIE5URl9MRFNfU0lfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDUsXG4gICAgTlRGX0xEU19TSV9DQV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNixcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDcsXG4gICAgTlRGX0xEU19TSV9UQV9JTkZPX0ZJTEVfSURfRk9SX1ZFUlNJT04yOiAweDkxMDAwMDA4LFxuICAgIE5URl9MRFNfU0lfRUlEX1NFQ1VSSVRZX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4OTEwMDAwMDksXG4gICAgTlRGX0xEU19TSV9SSV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBBLFxuICAgIE5URl9MRFNfU0lfUklfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEIsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBDLFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEQsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09OU0lTVEVOVF9BTEdPUklUSE1fUkVGRVJFTkNFOiAweDkxMDAwMDBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwMCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMTAxLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwMixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAzLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PX1JFUVVJUkVEX09QVElPTjogMHg5MTAwMDEwNCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTA1LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9BTk9OWU1PVVNfSU5GT1M6IDB4OTEwMDAxMDYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwNyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19QVUJMSUNfS0VZOiAweDkxMDAwMTA4LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkNPUlJFQ1RfSU5GT1NfUVVBTlRJVFk6IDB4OTEwMDAxMDksXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1RBX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwQSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FSRF9JTkZPX0xPQ0FUT1JfTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfRUlEX1NFQ1VSSVRZX0lORk9fTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBELFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX0lOQ09SUkVDVF9VU0FHRTogMHg5MTAwMDEwRSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUklfRE9NQUlOX1BBUkFNU19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBGLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9TX05PTl9DT05TSVNUQU5UOiAweDkxMDAwMTEwLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJPRklMRV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwMSxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkxMDAwMjAyLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTk9OX0NWX0NBX0RPTUFJTl9QQVJBTUVURVJTOiAweDkxMDAwMjAzLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAyMDQsXG4gICAgTlRGX0xEU19UQV9QQUNFX1NUQVRJQ19CSU5ESU5HX1VTRUQ6IDB4OTEwMDAzMDAsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkyMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkyMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MjAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MjAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTIwMDAxMTksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0NIQUlOX0NPVU5UUllfTk9OX01BVENISU5HOiAweDkwMDAwMjUwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WSVNVQUxfTVJaX0NPVU5UUllfTk9OX01BVENISU5HOiAweDkwMDAwMjUxLFxuICAgIE5URl9MRFNfTVJaX0NPVU5UUllDT0RFX1ZJU1VBTE1SWl9OT05fTUFUQ0hJTkc6IDB4MDAwMjIwMTksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX01SWl9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI1MixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTk9OX1VQUEVSX0NBU0U6IDB4OTAwMDAyNTMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9OT05fVVBQRVJfQ0FTRTogMHg5MDAwMDI1NCxcbn1cblxuZXhwb3J0IGNvbnN0IGVJbWFnZVF1YWxpdHlDaGVja1R5cGUgPSB7XG4gICAgSVFDX0lNQUdFX0dMQVJFUzogMCxcbiAgICBJUUNfSU1BR0VfRk9DVVM6IDEsXG4gICAgSVFDX0lNQUdFX1JFU09MVVRJT046IDIsXG4gICAgSVFDX0lNQUdFX0NPTE9STkVTUzogMyxcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDQsXG4gICAgSVFDX0JPVU5EUzogNSxcbiAgICBJUUNfU0NSRUVOX0NBUFRVUkU6IDYsXG4gICAgSVFDX1BPUlRSQUlUOiA3LFxuICAgIElRQ19IQU5EV1JJVFRFTjogOCxcbiAgICBJUUNfQlJJR0hUTkVTUzogOSxcbiAgICBJUUNfT0NDTFVTSU9OOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IE1SWkZvcm1hdCA9IHtcbiAgICBGT1JNQVRfMVgzMDogXCIxeDMwXCIsXG4gICAgRk9STUFUXzNYMzA6IFwiM3gzMFwiLFxuICAgIEZPUk1BVF8yWDM2OiBcIjJ4MzZcIixcbiAgICBGT1JNQVRfMlg0NDogXCIyeDQ0XCIsXG4gICAgRk9STUFUXzFYNjogXCIxeDZcIixcbiAgICBGT1JNQVRfMlgzMDogXCIyeDMwXCIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxuICAgIEpBQkNPREU6IDE5LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkxBTks6IDAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZJTEw6IDEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPOiAyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9NUlo6IDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBTFNFX0xVTUlORVNDRU5DRTogNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19TSU1QTEU6IDUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX1NUQVRJQzogNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfTVVMVElfU1RBVElDOiA3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9ESU5BTUlDOiA4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9JTlRFUlJVUFRFRDogOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfU0hJRlRFRDogMTAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fU0FNRV9DT0xPUlM6IDExLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0lSX0lOVklTSUJMRTogMTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NJWkVfQ0hFQ0s6IDEzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0dIT1NUOiAxNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19SRklEOiAxNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19WSVNVQUw6IDE2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFOiAxNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19DQU1FUkE6IDE5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURfVlNfQ0FNRVJBOiAyMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfR0hPU1RfUEhPVE86IDIxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DTEVBUl9HSE9TVF9QSE9UTzogMjIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0lOVklTSUJMRV9PQkpFQ1Q6IDIzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MT1dfQ09OVFJBU1RfT0JKRUNUOiAyNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09MT1I6IDI1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSEFQRTogMjYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPUk5FUlM6IDI3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9PQ1I6IDI4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVFZTX1ZJU1VBTDogMjksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUVlNfUkZJRDogMzAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fRVhUVlNfTElWRTogMzEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0RFUFRIOiAzMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTUlDUk9URVhUOiAzMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkxVT1JFU0NFTlRfT0JKRUNUOiAzNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTEFORE1BUktTX0NIRUNLOiAzNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFDRV9QUkVTRU5DRTogMzYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBQ0VfQUJTRU5DRTogMzgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX1NDUkVFTl9DQVBUVVJFOiAzOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfRUxFQ1RST05JQ19ERVZJQ0U6IDQwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MSVZFTkVTU19PVkk6IDQxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFX1NJWkVfQ0hFQ0s6IDQyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MQVNfSU5LOiA0MyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfTUxJOiA0NCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfQkFSQ09ERV9CQUNLR1JPVU5EOiA0NSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19CQVJDT0RFOiA0NixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0JBUkNPREU6IDQ3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX0VYVF9WU19CQVJDT0RFOiA0OCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9CQVJDT0RFX1ZTX0NBTUVSQTogNDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NIRUNLX0RJR0lUQUxfU0lHTkFUVVJFOiA1MCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ09OVEFDVF9DSElQX0NMQVNTSUZJQ0FUSU9OOiA1MSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSEVBRF9QT1NJVElPTl9DSEVDSzogNTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xJVkVORVNTX0JMQUNLX0FORF9XSElURV9DT1BZX0NIRUNLOiA1MyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfRFlOQVBSSU5UX0NIRUNLOiA1NCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTElWRU5FU1NfR0VPTUVUUllfQ0hFQ0s6IDU1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9BR0VfQ0hFQ0s6IDU2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9TRVhfQ0hFQ0s6IDU3LFxufVxuXG5leHBvcnQgY29uc3QgT25saW5lTW9kZSA9IHtcbiAgICBNQU5VQUw6IDAsXG4gICAgQVVUTzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1NES19Qcm9maWxlclR5cGUgPSB7XG4gICAgU1BUX0RPQ185MzAzX0VESVRJT05fMjAwNjogMHgwMDAwMDAwMSxcbiAgICBTUFRfRE9DXzkzMDNfTERTX1BLSV9NQUlOVEVOQU5DRTogMHgwMDAwMDAwMixcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2l0eUNoZWNrVHlwZSA9IHtcbiAgICBVU0VfTElWRU5FU1M6IFwiY2hlY2tMaXZlbmVzc1wiLFxuICAgIFVWX0xVTUlOSVNDRU5DRTogXCJjaGVja1VWTHVtaW5pc2NlbmNlXCIsXG4gICAgSVJfQjkwMDogXCJjaGVja0lSQjkwMFwiLFxuICAgIElNQUdFX1BBVFRFUk5TOiBcImNoZWNrSW1hZ2VQYXR0ZXJuc1wiLFxuICAgIEZJQkVSUzogXCJjaGVja0ZpYmVyc1wiLFxuICAgIEVYVF9NUlo6IFwiY2hlY2tFeHRNUlpcIixcbiAgICBFWFRfT0NSOiBcImNoZWNrRXh0T0NSXCIsXG4gICAgQVhJQUw6IFwiY2hlY2tBeGlhbFwiLFxuICAgIEJBUkNPREVfRk9STUFUOiBcImNoZWNrQmFyY29kZUZvcm1hdFwiLFxuICAgIElSX1ZJU0lCSUxJVFk6IFwiY2hlY2tJUlZpc2liaWxpdHlcIixcbiAgICBJUEk6IFwiY2hlY2tJUElcIixcbiAgICBQSE9UT19FTUJFRERJTkc6IFwiY2hlY2tQaG90b0VtYmVkZGluZ1wiLFxuICAgIFBIT1RPX0NPTVBBUklTT046IFwiY2hlY2tQaG90b0NvbXBhcmlzb25cIixcbiAgICBMRVRURVJfU0NSRUVOOiBcImNoZWNrTGV0dGVyU2NyZWVuKytcIixcbiAgICBTRUNVUklUWV9URVhUOiBcImNoZWNrU2VjdXJpdHlUZXh0XCIsXG59XG5cbmV4cG9ydCBjb25zdCBkaURvY1R5cGUgPSB7XG4gICAgZHROb3REZWZpbmVkOiAwLFxuICAgIGR0UGFzc3BvcnQ6IDExLFxuICAgIGR0SWRlbnRpdHlDYXJkOiAxMixcbiAgICBkdERpcGxvbWF0aWNQYXNzcG9ydDogMTMsXG4gICAgZHRTZXJ2aWNlUGFzc3BvcnQ6IDE0LFxuICAgIGR0U2VhbWFuSWRlbnRpdHlEb2N1bWVudDogMTUsXG4gICAgZHRJZGVudGl0eUNhcmRGb3JSZXNpZGVuY2U6IDE2LFxuICAgIGR0VHJhdmVsRG9jdW1lbnQ6IDE3LFxuICAgIGR0T3RoZXI6IDk5LFxuICAgIGR0VmlzYUlEMjogMjksXG4gICAgZHRWaXNhSUQzOiAzMCxcbiAgICBkdFJlZ2lzdHJhdGlvbkNlcnRpZmljYXRlOiAyMDYsXG4gICAgZHROYXRpb25hbElkZW50aXR5Q2FyZDogMjAsXG4gICAgZHRTb2NpYWxJZGVudGl0eUNhcmQ6IDIxLFxuICAgIGR0QWxpZW5zSWRlbnRpdHlDYXJkOiAyMixcbiAgICBkdFByaXZpbGVnZWRJZGVudGl0eUNhcmQ6IDIzLFxuICAgIGR0UmVzaWRlbmNlUGVybWl0SWRlbnRpdHlDYXJkOiAyNCxcbiAgICBkdE9yaWdpbkNhcmQ6IDI1LFxuICAgIGR0RW1lcmdlbmN5UGFzc3BvcnQ6IDI2LFxuICAgIGR0QWxpZW5zUGFzc3BvcnQ6IDI3LFxuICAgIGR0QWx0ZXJuYXRpdmVJZGVudGl0eUNhcmQ6IDI4LFxuICAgIGR0QXV0aG9yaXphdGlvbkNhcmQ6IDMyLFxuICAgIGR0QmVnaW5uZXJQZXJtaXQ6IDMzLFxuICAgIGR0Qm9yZGVyQ3Jvc3NpbmdDYXJkOiAzNCxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2U6IDM1LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZVVuZGVyMTg6IDM2LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZVVuZGVyMjE6IDM3LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAzOCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZUluc3RydWN0aW9uYWxQZXJtaXQ6IDM5LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIxODogNDAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA0MSxcbiAgICBkdENvbW1lcmNpYWxJbnN0cnVjdGlvblBlcm1pdDogNDIsXG4gICAgZHRDb21tZXJjaWFsTmV3UGVybWl0OiA0MyxcbiAgICBkdENvbmNlYWxlZENhcnJ5TGljZW5zZTogNDQsXG4gICAgZHRDb25jZWFsZWRGaXJlYXJtUGVybWl0OiA0NSxcbiAgICBkdENvbmRpdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDQ2LFxuICAgIGR0RGVwYXJ0bWVudE9mVmV0ZXJhbnNBZmZhaXJzSWRlbnRpdHlDYXJkOiA0NyxcbiAgICBkdERpcGxvbWF0aWNEcml2aW5nTGljZW5zZTogNDgsXG4gICAgZHREcml2aW5nTGljZW5zZTogNDksXG4gICAgZHREcml2aW5nTGljZW5zZUluc3RydWN0aW9uYWxQZXJtaXQ6IDUwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0VW5kZXIxODogNTEsXG4gICAgZHREcml2aW5nTGljZW5zZUluc3RydWN0aW9uYWxQZXJtaXRVbmRlcjIxOiA1MixcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXQ6IDUzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMTg6IDU0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMjE6IDU1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDU2LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiA1NyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogNTgsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZ2lzdGVyZWRPZmZlbmRlcjogNTksXG4gICAgZHREcml2aW5nTGljZW5zZVJlc3RyaWN0ZWRVbmRlcjE4OiA2MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVzdHJpY3RlZFVuZGVyMjE6IDYxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yOiA2MixcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMTg6IDYzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogNjQsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTg6IDY1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA2NixcbiAgICBkdEVtcGxveW1lbnREcml2aW5nUGVybWl0OiA2NyxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZTogNjgsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiA2OSxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZVVuZGVyMjE6IDcwLFxuICAgIGR0RW5oYW5jZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDcxLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZTogNzIsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlVW5kZXIxODogNzMsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNzQsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZDogNzUsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZFVuZGVyMTg6IDc2LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjIxOiA3NyxcbiAgICBkdEVuaGFuY2VkT3BlcmF0b3JzTGljZW5zZTogNzgsXG4gICAgZHRGaXJlYXJtc1Blcm1pdDogNzksXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlOiA4MCxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiA4MSxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiA4MixcbiAgICBkdEdlbmV2YUNvbnZlbnRpb25zSWRlbnRpdHlDYXJkOiA4MyxcbiAgICBkdEdyYWR1YXRlZERyaXZpbmdMaWNlbnNlVW5kZXIxODogODQsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDg1LFxuICAgIGR0R3JhZHVhdGVkSW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjE4OiA4NixcbiAgICBkdEdyYWR1YXRlZEluc3RydWN0aW9uUGVybWl0VW5kZXIyMTogODcsXG4gICAgZHRHcmFkdWF0ZWRMaWNlbnNlVW5kZXIxODogODgsXG4gICAgZHRHcmFkdWF0ZWRMaWNlbnNlVW5kZXIyMTogODksXG4gICAgZHRIYW5kZ3VuQ2FycnlQZXJtaXQ6IDkwLFxuICAgIGR0SWRlbnRpdHlBbmRQcml2aWxlZ2VDYXJkOiA5MSxcbiAgICBkdElkZW50aXR5Q2FyZE1vYmlsaXR5SW1wYWlyZWQ6IDkyLFxuICAgIGR0SWRlbnRpdHlDYXJkUmVnaXN0ZXJlZE9mZmVuZGVyOiA5MyxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3I6IDk0LFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvclVuZGVyMTg6IDk1LFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDk2LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIxODogOTcsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjIxOiA5OCxcbiAgICBkdElnbml0aW9uSW50ZXJsb2NrUGVybWl0OiAxMDAsXG4gICAgZHRJbW1pZ3JhbnRWaXNhOiAxMDEsXG4gICAgZHRJbnN0cnVjdGlvblBlcm1pdDogMTAyLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjE4OiAxMDMsXG4gICAgZHRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMjE6IDEwNCxcbiAgICBkdEludGVyaW1Ecml2aW5nTGljZW5zZTogMTA1LFxuICAgIGR0SW50ZXJpbUlkZW50aXR5Q2FyZDogMTA2LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2U6IDEwNyxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTA4LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxMDksXG4gICAgZHRKdW5pb3JEcml2aW5nTGljZW5zZTogMTEwLFxuICAgIGR0TGVhcm5lckluc3RydWN0aW9uYWxQZXJtaXQ6IDExMSxcbiAgICBkdExlYXJuZXJMaWNlbnNlOiAxMTIsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMTg6IDExMyxcbiAgICBkdExlYXJuZXJMaWNlbnNlVW5kZXIyMTogMTE0LFxuICAgIGR0TGVhcm5lclBlcm1pdDogMTE1LFxuICAgIGR0TGVhcm5lclBlcm1pdFVuZGVyMTg6IDExNixcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjIxOiAxMTcsXG4gICAgZHRMaW1pdGVkTGljZW5zZTogMTE4LFxuICAgIGR0TGltaXRlZFBlcm1pdDogMTE5LFxuICAgIGR0TGltaXRlZFRlcm1Ecml2aW5nTGljZW5zZTogMTIwLFxuICAgIGR0TGltaXRlZFRlcm1JZGVudGl0eUNhcmQ6IDEyMSxcbiAgICBkdExpcXVvcklkZW50aXR5Q2FyZDogMTIyLFxuICAgIGR0TmV3UGVybWl0OiAxMjMsXG4gICAgZHROZXdQZXJtaXRVbmRlcjE4OiAxMjQsXG4gICAgZHROZXdQZXJtaXRVbmRlcjIxOiAxMjUsXG4gICAgZHROb25Vc0NpdGl6ZW5Ecml2aW5nTGljZW5zZTogMTI2LFxuICAgIGR0T2NjdXBhdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDEyNyxcbiAgICBkdE9uZWlkYVRyaWJlT2ZJbmRpYW5zSWRlbnRpdHlDYXJkOiAxMjgsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2U6IDEyOSxcbiAgICBkdE9wZXJhdG9yTGljZW5zZVVuZGVyMTg6IDEzMCxcbiAgICBkdE9wZXJhdG9yTGljZW5zZVVuZGVyMjE6IDEzMSxcbiAgICBkdFBlcm1hbmVudERyaXZpbmdMaWNlbnNlOiAxMzIsXG4gICAgZHRQZXJtaXRUb1JlRW50ZXI6IDEzMyxcbiAgICBkdFByb2JhdGlvbmFyeUF1dG9MaWNlbnNlOiAxMzQsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEzNSxcbiAgICBkdFByb2JhdGlvbmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTM2LFxuICAgIGR0UHJvYmF0aW9uYXJ5VmVoaWNsZVNhbGVzcGVyc29uTGljZW5zZTogMTM3LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZTogMTM4LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEzOSxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNDAsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2U6IDE0MSxcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMTg6IDE0MixcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMjE6IDE0MyxcbiAgICBkdFB1YmxpY1Bhc3NlbmdlckNoYXVmZmV1ckxpY2Vuc2U6IDE0NCxcbiAgICBkdFJhY2luZ0FuZEdhbWluZ0NvbWlzc2lvbkNhcmQ6IDE0NSxcbiAgICBkdFJlZnVnZWVUcmF2ZWxEb2N1bWVudDogMTQ2LFxuICAgIGR0UmVuZXdhbFBlcm1pdDogMTQ3LFxuICAgIGR0UmVzdHJpY3RlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMTQ4LFxuICAgIGR0UmVzdHJpY3RlZERyaXZpbmdMaWNlbnNlOiAxNDksXG4gICAgZHRSZXN0cmljdGVkUGVybWl0OiAxNTAsXG4gICAgZHRTZWFzb25hbFBlcm1pdDogMTUxLFxuICAgIGR0U2Vhc29uYWxSZXNpZGVudElkZW50aXR5Q2FyZDogMTUyLFxuICAgIGR0U2VuaW9yQ2l0aXplbklkZW50aXR5Q2FyZDogMTUzLFxuICAgIGR0U2V4T2ZmZW5kZXI6IDE1NCxcbiAgICBkdFNvY2lhbFNlY3VyaXR5Q2FyZDogMTU1LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2U6IDE1NixcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTU3LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNTgsXG4gICAgZHRUZW1wb3JhcnlJZGVudGl0eUNhcmQ6IDE1OSxcbiAgICBkdFRlbXBvcmFyeUluc3RydWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkOiAxNjAsXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMTg6IDE2MSxcbiAgICBkdFRlbXBvcmFyeUluc3RydWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIyMTogMTYyLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlOiAxNjMsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxNjQsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxNjUsXG4gICAgZHRVbmlmb3JtZWRTZXJ2aWNlc0lkZW50aXR5Q2FyZDogMTY2LFxuICAgIGR0VmVoaWNsZVNhbGVzcGVyc29uTGljZW5zZTogMTY3LFxuICAgIGR0V29ya2VySWRlbnRpZmljYXRpb25DcmVkZW50aWFsOiAxNjgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDE2OSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMTg6IDE3MCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDE3MSxcbiAgICBkdFBhc3Nwb3J0Q2FyZDogMTcyLFxuICAgIGR0UGVybWFuZW50UmVzaWRlbnRDYXJkOiAxNzMsXG4gICAgZHRQZXJzb25hbElkZW50aWZpY2F0aW9uVmVyaWZpY2F0aW9uOiAxNzQsXG4gICAgZHRUZW1wb3JhcnlPcGVyYXRvckxpY2Vuc2U6IDE3NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIxOTogMTc2LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIxOTogMTc3LFxuICAgIGR0VmlzYTogMTc4LFxuICAgIGR0VGVtcG9yYXJ5UGFzc3BvcnQ6IDE3OSxcbiAgICBkdFZvdGluZ0NhcmQ6IDE4MCxcbiAgICBkdEhlYWx0aENhcmQ6IDE4MSxcbiAgICBkdENlcnRpZmljYXRlT2ZDaXRpemVuc2hpcDogMTgyLFxuICAgIGR0QWRkcmVzc0NhcmQ6IDE4MyxcbiAgICBkdEFpcnBvcnRJbW1pZ3JhdGlvbkNhcmQ6IDE4NCxcbiAgICBkdEFsaWVuUmVnaXN0cmF0aW9uQ2FyZDogMTg1LFxuICAgIGR0QVBFSENhcmQ6IDE4NixcbiAgICBkdENvdXBvblRvRHJpdmluZ0xpY2Vuc2U6IDE4NyxcbiAgICBkdENyZXdNZW1iZXJDZXJ0aWZpY2F0ZTogMTg4LFxuICAgIGR0RG9jdW1lbnRGb3JSZXR1cm46IDE4OSxcbiAgICBkdEVDYXJkOiAxOTAsXG4gICAgZHRFbXBsb3ltZW50Q2FyZDogMTkxLFxuICAgIGR0SEtTQVJJbW1pZ3JhdGlvbkZvcm06IDE5MixcbiAgICBkdEltbWlncmFudENhcmQ6IDE5MyxcbiAgICBkdExhYm91ckNhcmQ6IDE5NCxcbiAgICBkdExhaXNzZXpQYXNzZXI6IDE5NSxcbiAgICBkdExhd3llcklkZW50aXR5Q2VydGlmaWNhdGU6IDE5NixcbiAgICBkdExpY2Vuc2VDYXJkOiAxOTcsXG4gICAgZHRQYXNzcG9ydFN0YXRlbGVzczogMTk4LFxuICAgIGR0UGFzc3BvcnRDaGlsZDogMTk5LFxuICAgIGR0UGFzc3BvcnRDb25zdWxhcjogMjAwLFxuICAgIGR0UGFzc3BvcnREaXBsb21hdGljU2VydmljZTogMjAxLFxuICAgIGR0UGFzc3BvcnRPZmZpY2lhbDogMjAyLFxuICAgIGR0UGFzc3BvcnRQcm92aXNpb25hbDogMjAzLFxuICAgIGR0UGFzc3BvcnRTcGVjaWFsOiAyMDQsXG4gICAgZHRQZXJtaXNzaW9uVG9UaGVMb2NhbEJvcmRlclRyYWZmaWM6IDIwNSxcbiAgICBkdFNFREVTT0xDYXJkOiAyMDcsXG4gICAgZHRTb2NpYWxDYXJkOiAyMDgsXG4gICAgZHRUQkNhcmQ6IDIwOSxcbiAgICBkdFZlaGljbGVQYXNzcG9ydDogMjEwLFxuICAgIGR0V0RvY3VtZW50OiAyMTEsXG4gICAgZHREaXBsb21hdGljSWRlbnRpdHlDYXJkOiAyMTIsXG4gICAgZHRDb25zdWxhcklkZW50aXR5Q2FyZDogMjEzLFxuICAgIGR0SW5jb21lVGF4Q2FyZDogMjE0LFxuICAgIGR0UmVzaWRlbmNlUGVybWl0OiAyMTUsXG4gICAgZHREb2N1bWVudE9mSWRlbnRpdHk6IDIxNixcbiAgICBkdEJvcmRlckNyb3NzaW5nUGVybWl0OiAyMTcsXG4gICAgZHRQYXNzcG9ydExpbWl0ZWRWYWxpZGl0eTogMjE4LFxuICAgIGR0U0lNQ2FyZDogMjE5LFxuICAgIGR0VGF4Q2FyZDogMjIwLFxuICAgIGR0Q29tcGFueUNhcmQ6IDIyMSxcbiAgICBkdERvbWVzdGljUGFzc3BvcnQ6IDIyMixcbiAgICBkdElkZW50aXR5Q2VydGlmaWNhdGU6IDIyMyxcbiAgICBkdFJlc2lkZW50SWRDYXJkOiAyMjQsXG4gICAgZHRBcm1lZEZvcmNlc0lkZW50aXR5Q2FyZDogMjI1LFxuICAgIGR0UHJvZmVzc2lvbmFsQ2FyZDogMjI2LFxuICAgIGR0UmVnaXN0cmF0aW9uU3RhbXA6IDIyNyxcbiAgICBkdERyaXZlckNhcmQ6IDIyOCxcbiAgICBkdERyaXZlclRyYWluaW5nQ2VydGlmaWNhdGU6IDIyOSxcbiAgICBkdFF1YWxpZmljYXRpb25Ecml2aW5nTGljZW5zZTogMjMwLFxuICAgIGR0TWVtYmVyc2hpcENhcmQ6IDIzMSxcbiAgICBkdFB1YmxpY1ZlaGljbGVEcml2ZXJBdXRob3JpdHlDYXJkOiAyMzIsXG4gICAgZHRNYXJpbmVMaWNlbnNlOiAyMzMsXG4gICAgZHRUZW1wb3JhcnlMZWFybmVyRHJpdmluZ0xpY2Vuc2U6IDIzNCxcbiAgICBkdFRlbXBvcmFyeUNvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMjM1LFxuICAgIGR0SW50ZXJpbUluc3RydWN0aW9uYWxQZXJtaXQ6IDIzNixcbiAgICBkdENlcnRpZmljYXRlT2ZDb21wZXRlbmN5OiAyMzcsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mUHJvZmljaWVuY3k6IDIzOCxcbiAgICBkdFRyYWRlTGljZW5zZTogMjM5LFxuICAgIGR0UGFzc3BvcnRQYWdlOiAyNDAsXG4gICAgZHRJbnZvaWNlOiAyNDEsXG4gICAgZHRQYXNzZW5nZXJMb2NhdG9yRm9ybTogMjQyLFxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uVGFnID0ge1xuICAgIENMT1NFOiAxMDAxLFxuICAgIFRPUkNIOiAxMDAyLFxuICAgIENBUFRVUkU6IDEwMDMsXG4gICAgQ0hBTkdFX0ZSQU1FOiAxMDA0LFxuICAgIFNLSVA6IDEwMDUsXG4gICAgQ0FNRVJBX1NXSVRDSDogMTAwNixcbn1cblxuZXhwb3J0IGNvbnN0IEhvbG9BbmltYXRpb25UeXBlID0ge1xuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblVua25vd246IDAsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZUhvcml6b250YWw6IDEsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVZlcnRpY2FsOiAyLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVMZWZ0Qm90dG9tUmlnaHRUb3A6IDQsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVJpZ2h0Qm90dG9tTGVmdFRvcDogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSZXF1ZXN0Q29tbWFuZCA9IHtcbiAgICBlUmVxQ21kX1JGaWRfU2VuZERhdGE6IDEwMCxcbiAgICBlUmVxQ21kX1JGaWRfTm90aWZ5OiAxMDEsXG4gICAgZVJlcUNtZF9SRmlkX0dldERhdGFGb3JTY2VuYXJpbzogMTAyLFxuICAgIGVSZXFDbWRfVG9yY2hfR2V0VVZGb3RvOiAyMDAsXG4gICAgZVJlcUNtZF9JbnRlcm5ldFNlbmQ6IDMwMCxcbiAgICBlUmVxQ21kX0dldEd1aWQ6IDQwMCxcbiAgICBlUmVxQ21kX1dsdFRvSW1hZ2U6IDQwMSxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25Gb250ID0ge1xuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fSElOVF9MQUJFTDogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkhpbnRMYWJlbFwiLFxuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1NfTEFCRUw6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5Qcm9ncmVzc0xhYmVsXCIsXG4gICAgUkZJRF9QUk9DRVNTSU5HX1NDUkVFTl9SRVNVTFRfTEFCRUw6IFwicmZpZFByb2Nlc3NpbmdTY3JlZW5SZXN1bHRMYWJlbFwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19USVRMRV9URVhUOiBcInJmaWRFbmFibGVOZmNUaXRsZVRleHRcIixcbiAgICBSRklEX0VOQUJMRV9ORkNfREVTQ1JJUFRJT05fVEVYVDogXCJyZmlkRW5hYmxlTmZjRGVzY3JpcHRpb25UZXh0XCIsXG4gICAgUkZJRF9FTkFCTEVfTkZDX0JVVFRPTl9URVhUOiBcInJmaWRFbmFibGVOZmNCdXR0b25UZXh0XCIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZUZvcm1hdCA9IHtcbiAgICBQTkc6IDAsXG4gICAgSlBHOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZUdyYXBoaWNGaWVsZFR5cGUgPSB7XG4gICAgR0ZfUE9SVFJBSVQ6IDIwMSxcbiAgICBHRl9GSU5HRVJQUjogMjAyLFxuICAgIEdGX0VZRTogMjAzLFxuICAgIEdGX1NJR05BVFVSRTogMjA0LFxuICAgIEdGX0JBUl9DT0RFOiAyMDUsXG4gICAgR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6IDIwNixcbiAgICBHRl9ET0NVTUVOVF9JTUFHRTogMjA3LFxuICAgIEdGX0NPTE9SX0RZTkFNSUM6IDIwOSxcbiAgICBHRl9HSE9TVF9QT1JUUkFJVDogMjEwLFxuICAgIEdGX1NUQU1QOiAyMTEsXG4gICAgR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6IDIxMixcbiAgICBHRl9DT05UQUNUX0NISVA6IDIxMyxcbiAgICBHRl9PVEhFUjogMjUwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1RIVU1COiAzMDAsXG4gICAgR0ZfRklOR0VSX0xFRlRfSU5ERVg6IDMwMSxcbiAgICBHRl9GSU5HRVJfTEVGVF9NSURETEU6IDMwMixcbiAgICBHRl9GSU5HRVJfTEVGVF9SSU5HOiAzMDMsXG4gICAgR0ZfRklOR0VSX0xFRlRfTElUVExFOiAzMDQsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1RIVU1COiAzMDUsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0lOREVYOiAzMDYsXG4gICAgR0ZfRklOR0VSX1JJR0hUX01JRERMRTogMzA3LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9SSU5HOiAzMDgsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTogMzA5LFxufVxuXG5leHBvcnQgY29uc3QgUmVnRGV2aWNlQ29uZmlnVHlwZSA9IHtcbiAgICBERVZJQ0VfNzMxMDogXCJERVZJQ0VfNzMxMFwiLFxufVxuXG5leHBvcnQgY29uc3QgQ2FwdHVyZVNlc3Npb25QcmVzZXQgPSB7XG4gICAgVU5LTk9XTjogLTEsXG4gICAgTE9XOiAwLFxuICAgIE1FRElVTTogMSxcbiAgICBISUdIOiAyLFxuICAgIFBIT1RPOiAzLFxuICAgIElOUFVUX1BSSU9SSVRZOiA0LFxuICAgIFBSRVNFVF8xMjgweDcyMDogNixcbiAgICBQUkVTRVRfMTkyMHgxMDgwOiA3LFxuICAgIFBSRVNFVF8zODQweDIxNjA6IDgsXG4gICAgRlJBTUVfOTYweDU0MDogOSxcbiAgICBGUkFNRV8xMjgweDcyMDogMTAsXG4gICAgUFJFU0VUXzY0MHg0ODA6IDEyLFxuICAgIFBSRVNFVF8zNTJ4Mjg4OiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQU1FUkExOiAxLFxuICAgIENBTUVSQTI6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBUFRVUkVfVklERU86IDEsXG4gICAgQ0FQVFVSRV9GUkFNRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja1Jlc3VsdCA9IHtcbiAgICBDSF9DSEVDS19FUlJPUjogMCxcbiAgICBDSF9DSEVDS19PSzogMSxcbiAgICBDSF9DSEVDS19XQVNfTk9UX0RPTkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9UZXJtaW5hbFR5cGUgPSB7XG4gICAgVEVUX1VOREVGSU5FRDogMCxcbiAgICBURVRfSU5TUEVDVElPTl9TWVNURU06IDEsXG4gICAgVEVUX0FVVEhFTlRJQ0FUSU9OX1RFUk1JTkFMOiAyLFxuICAgIFRFVF9TSUdOQVRVUkVfVEVSTUlOQUw6IDMsXG4gICAgVEVUX1VOQVVUSEVOVElDQVRFRF9URVJNSU5BTDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0RhdGFGaWxlX1R5cGUgPSB7XG4gICAgREZUX1VOU1BFQ0lGSUVEOiAwLFxuICAgIERGVF9QQVNTUE9SVF9ERzE6IDEsXG4gICAgREZUX1BBU1NQT1JUX0RHMjogMixcbiAgICBERlRfUEFTU1BPUlRfREczOiAzLFxuICAgIERGVF9QQVNTUE9SVF9ERzQ6IDQsXG4gICAgREZUX1BBU1NQT1JUX0RHNTogNSxcbiAgICBERlRfUEFTU1BPUlRfREc2OiA2LFxuICAgIERGVF9QQVNTUE9SVF9ERzc6IDcsXG4gICAgREZUX1BBU1NQT1JUX0RHODogOCxcbiAgICBERlRfUEFTU1BPUlRfREc5OiA5LFxuICAgIERGVF9QQVNTUE9SVF9ERzEwOiAxMCxcbiAgICBERlRfUEFTU1BPUlRfREcxMTogMTEsXG4gICAgREZUX1BBU1NQT1JUX0RHMTI6IDEyLFxuICAgIERGVF9QQVNTUE9SVF9ERzEzOiAxMyxcbiAgICBERlRfUEFTU1BPUlRfREcxNDogMTQsXG4gICAgREZUX1BBU1NQT1JUX0RHMTU6IDE1LFxuICAgIERGVF9QQVNTUE9SVF9ERzE2OiAxNixcbiAgICBERlRfUEFTU1BPUlRfREcxNzogMTcsXG4gICAgREZUX1BBU1NQT1JUX0RHMTg6IDE4LFxuICAgIERGVF9QQVNTUE9SVF9ERzE5OiAxOSxcbiAgICBERlRfUEFTU1BPUlRfREcyMDogMjAsXG4gICAgREZUX1BBU1NQT1JUX1NPRDogMjEsXG4gICAgREZUX1BBU1NQT1JUX0NWQ0E6IDIyLFxuICAgIERGVF9QQVNTUE9SVF9DT006IDIzLFxuICAgIERGVF9EVENfREcxNzogNTcsXG4gICAgREZUX0RUQ19ERzE4OiA1OCxcbiAgICBERlRfRFRDX0RHMjI6IDYyLFxuICAgIERGVF9EVENfREcyMzogNjMsXG4gICAgREZUX0RUQ19ERzI0OiA2NCxcbiAgICBERlRfSURfREcxOiAxMDEsXG4gICAgREZUX0lEX0RHMjogMTAyLFxuICAgIERGVF9JRF9ERzM6IDEwMyxcbiAgICBERlRfSURfREc0OiAxMDQsXG4gICAgREZUX0lEX0RHNTogMTA1LFxuICAgIERGVF9JRF9ERzY6IDEwNixcbiAgICBERlRfSURfREc3OiAxMDcsXG4gICAgREZUX0lEX0RHODogMTA4LFxuICAgIERGVF9JRF9ERzk6IDEwOSxcbiAgICBERlRfSURfREcxMDogMTEwLFxuICAgIERGVF9JRF9ERzExOiAxMTEsXG4gICAgREZUX0lEX0RHMTI6IDExMixcbiAgICBERlRfSURfREcxMzogMTEzLFxuICAgIERGVF9JRF9ERzE0OiAxMTQsXG4gICAgREZUX0lEX0RHMTU6IDExNSxcbiAgICBERlRfSURfREcxNjogMTE2LFxuICAgIERGVF9JRF9ERzE3OiAxMTcsXG4gICAgREZUX0lEX0RHMTg6IDExOCxcbiAgICBERlRfSURfREcxOTogMTE5LFxuICAgIERGVF9JRF9ERzIwOiAxMjAsXG4gICAgREZUX0lEX0RHMjE6IDEyMSxcbiAgICBERlRfRExfQ09NOiAxNTAsXG4gICAgREZUX0RMX0RHMTogMTUxLFxuICAgIERGVF9ETF9ERzI6IDE1MixcbiAgICBERlRfRExfREczOiAxNTMsXG4gICAgREZUX0RMX0RHNDogMTU0LFxuICAgIERGVF9ETF9ERzU6IDE1NSxcbiAgICBERlRfRExfREc2OiAxNTYsXG4gICAgREZUX0RMX0RHNzogMTU3LFxuICAgIERGVF9ETF9ERzg6IDE1OCxcbiAgICBERlRfRExfREc5OiAxNTksXG4gICAgREZUX0RMX0RHMTA6IDE2MCxcbiAgICBERlRfRExfREcxMTogMTYxLFxuICAgIERGVF9ETF9ERzEyOiAxNjIsXG4gICAgREZUX0RMX0RHMTM6IDE2MyxcbiAgICBERlRfRExfREcxNDogMTY0LFxuICAgIERGVF9ETF9TT0Q6IDE2NSxcbiAgICBERlRfRExfQ0U6IDE2NixcbiAgICBERlRfRExfQ1ZDQTogMTY3LFxuICAgIERGVF9QQUNFX0NBUkRBQ0NFU1M6IDIwMCxcbiAgICBERlRfUEFDRV9DQVJEU0VDVVJJVFk6IDIwMSxcbiAgICBERlRfUEFDRV9DSElQU0VDVVJJVFk6IDIwMixcbiAgICBERlRfTUlGQVJFX0RBVEE6IDMwMCxcbiAgICBERlRfTUlGQVJFX1ZBTElESVRZOiAzMDEsXG4gICAgREZUX0FVVEhFTlRJQ0lUWVYyOiAzMDIsXG4gICAgREZUX0FUUjogNDAwLFxuICAgIERGVF9FU0lHTl9QSzogNTAwLFxuICAgIERGVF9FU0lHTl9TSUdORUREQVRBOiA1MDEsXG4gICAgREZUX0NFUlRJRklDQVRFOiA2MDAsXG4gICAgREZUX01BU1RFUkxJU1Q6IDYwMSxcbiAgICBERlRfREVGRUNUTElTVDogNjAyLFxuICAgIERGVF9ERVZJQVRJT05MSVNUOiA2MDMsXG4gICAgREZUX0FQUF9ESVJFQ1RPUlk6IDcwMCxcbiAgICBERlRfU0VTU0lPTjogNzAxLFxuICAgIERGVF9MT0dEQVRBOiA3MDIsXG4gICAgREZUX0NISVBfUFJPUEVSVElFUzogNzAzLFxuICAgIERGVF9TQU1fREFUQTogODAwLFxuICAgIERGVF9TQU1fREFUQV9NQVg6IDgwMCArIDMyLFxuICAgIERGVF9WRFM6IDkwMCxcbiAgICBERlRfVkRTTkM6IDkwMSxcbiAgICBERlRfVVNFUkRFRklORUQ6IDEwMDAsXG59XG5cbmV4cG9ydCBjb25zdCBlVmlzdWFsRmllbGRUeXBlID0ge1xuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6IDAsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFOiAxLFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUjogMixcbiAgICBGVF9EQVRFX09GX0VYUElSWTogMyxcbiAgICBGVF9EQVRFX09GX0lTU1VFOiA0LFxuICAgIEZUX0RBVEVfT0ZfQklSVEg6IDUsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEg6IDYsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSOiA3LFxuICAgIEZUX1NVUk5BTUU6IDgsXG4gICAgRlRfR0lWRU5fTkFNRVM6IDksXG4gICAgRlRfTU9USEVSU19OQU1FOiAxMCxcbiAgICBGVF9OQVRJT05BTElUWTogMTEsXG4gICAgRlRfU0VYOiAxMixcbiAgICBGVF9IRUlHSFQ6IDEzLFxuICAgIEZUX1dFSUdIVDogMTQsXG4gICAgRlRfRVlFU19DT0xPUjogMTUsXG4gICAgRlRfSEFJUl9DT0xPUjogMTYsXG4gICAgRlRfQUREUkVTUzogMTcsXG4gICAgRlRfRE9OT1I6IDE4LFxuICAgIEZUX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDE5LFxuICAgIEZUX0RMX0NMQVNTOiAyMCxcbiAgICBGVF9ETF9FTkRPUlNFRDogMjEsXG4gICAgRlRfRExfUkVTVFJJQ1RJT05fQ09ERTogMjIsXG4gICAgRlRfRExfVU5ERVJfMjFfREFURTogMjMsXG4gICAgRlRfQVVUSE9SSVRZOiAyNCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMjUsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERTogMjYsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSOiAyNyxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUjogMjgsXG4gICAgRlRfVklTQV9JRDogMjksXG4gICAgRlRfVklTQV9DTEFTUzogMzAsXG4gICAgRlRfVklTQV9TVUJfQ0xBU1M6IDMxLFxuICAgIEZUX01SWl9TVFJJTkdfMTogMzIsXG4gICAgRlRfTVJaX1NUUklOR18yOiAzMyxcbiAgICBGVF9NUlpfU1RSSU5HXzM6IDM0LFxuICAgIEZUX01SWl9UWVBFOiAzNSxcbiAgICBGVF9PUFRJT05BTF9EQVRBOiAzNixcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19OQU1FOiAzNyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX05BTUU6IDM4LFxuICAgIEZUX1BMQUNFX09GX0lTU1VFOiAzOSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tTVU06IDQwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tTVU06IDQxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLU1VNOiA0MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tTVU06IDQzLFxuICAgIEZUX0ZJTkFMX0NIRUNLU1VNOiA0NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tTVU06IDQ1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOiA0NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLU1VNOiA0NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS1NVTTogNDgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS1NVTTogNDksXG4gICAgRlRfT1RIRVI6IDUwLFxuICAgIEZUX01SWl9TVFJJTkdTOiA1MSxcbiAgICBGVF9OQU1FX1NVRkZJWDogNTIsXG4gICAgRlRfTkFNRV9QUkVGSVg6IDUzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06IDU0LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6IDU1LFxuICAgIEZUX0RPQ1VNRU5UX1NFUklFUzogNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUjogNTcsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01PREVMOiA1OCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfQ09MT1I6IDU5LFxuICAgIEZUX1JFR19DRVJUX0JPRFlfTlVNQkVSOiA2MCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfVFlQRTogNjEsXG4gICAgRlRfUkVHX0NFUlRfTUFYX1dFSUdIVDogNjIsXG4gICAgRlRfUkVHX0NFUlRfV0VJR0hUOiA2MyxcbiAgICBGVF9BRERSRVNTX0FSRUE6IDY0LFxuICAgIEZUX0FERFJFU1NfU1RBVEU6IDY1LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkc6IDY2LFxuICAgIEZUX0FERFJFU1NfSE9VU0U6IDY3LFxuICAgIEZUX0FERFJFU1NfRkxBVDogNjgsXG4gICAgRlRfUExBQ0VfT0ZfUkVHSVNUUkFUSU9OOiA2OSxcbiAgICBGVF9EQVRFX09GX1JFR0lTVFJBVElPTjogNzAsXG4gICAgRlRfUkVTSURFTlRfRlJPTTogNzEsXG4gICAgRlRfUkVTSURFTlRfVU5USUw6IDcyLFxuICAgIEZUX0FVVEhPUklUWV9DT0RFOiA3MyxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9BUkVBOiA3NCxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9TVEFURV9DT0RFOiA3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVDogNzYsXG4gICAgRlRfQUREUkVTU19DSVRZOiA3NyxcbiAgICBGVF9BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiA3OCxcbiAgICBGVF9BRERSRVNTX1BPU1RBTF9DT0RFOiA3OSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tfRElHSVQ6IDgxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLX0RJR0lUOiA4MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgzLFxuICAgIEZUX0ZJTkFMX0NIRUNLX0RJR0lUOiA4NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOiA4NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLX0RJR0lUOiA4NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS19ESUdJVDogODgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS19ESUdJVDogODksXG4gICAgRlRfUEVSTUlUX0RMX0NMQVNTOiA5MCxcbiAgICBGVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6IDkxLFxuICAgIEZUX1BFUk1JVF9JREVOVElGSUVSOiA5MixcbiAgICBGVF9QRVJNSVRfREFURV9PRl9JU1NVRTogOTMsXG4gICAgRlRfUEVSTUlUX1JFU1RSSUNUSU9OX0NPREU6IDk0LFxuICAgIEZUX1BFUk1JVF9FTkRPUlNFRDogOTUsXG4gICAgRlRfSVNTVUVfVElNRVNUQU1QOiA5NixcbiAgICBGVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzogOTcsXG4gICAgRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6IDk4LFxuICAgIEZUX05PTl9SRVNJREVOVF9JTkRJQ0FUT1I6IDk5LFxuICAgIEZUX1ZJU0FfVFlQRTogMTAwLFxuICAgIEZUX1ZJU0FfVkFMSURfRlJPTTogMTAxLFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUw6IDEwMixcbiAgICBGVF9EVVJBVElPTl9PRl9TVEFZOiAxMDMsXG4gICAgRlRfTlVNQkVSX09GX0VOVFJJRVM6IDEwNCxcbiAgICBGVF9EQVk6IDEwNSxcbiAgICBGVF9NT05USDogMTA2LFxuICAgIEZUX1lFQVI6IDEwNyxcbiAgICBGVF9VTklRVUVfQ1VTVE9NRVJfSURFTlRJRklFUjogMTA4LFxuICAgIEZUX0NPTU1FUkNJQUxfVkVISUNMRV9DT0RFUzogMTA5LFxuICAgIEZUX0FLQV9EQVRFX09GX0JJUlRIOiAxMTAsXG4gICAgRlRfQUtBX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDExMSxcbiAgICBGVF9BS0FfU1VSTkFNRTogMTEyLFxuICAgIEZUX0FLQV9HSVZFTl9OQU1FUzogMTEzLFxuICAgIEZUX0FLQV9OQU1FX1NVRkZJWDogMTE0LFxuICAgIEZUX0FLQV9OQU1FX1BSRUZJWDogMTE1LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6IDExNixcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTogMTE3LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogMTE4LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTogMTE5LFxuICAgIEZUX0FVRElUX0lORk9STUFUSU9OOiAxMjAsXG4gICAgRlRfSU5WRU5UT1JZX05VTUJFUjogMTIxLFxuICAgIEZUX1JBQ0VfRVRITklDSVRZOiAxMjIsXG4gICAgRlRfSlVSSVNESUNUSU9OX1ZFSElDTEVfQ0xBU1M6IDEyMyxcbiAgICBGVF9KVVJJU0RJQ1RJT05fRU5ET1JTRU1FTlRfQ09ERTogMTI0LFxuICAgIEZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOiAxMjUsXG4gICAgRlRfRkFNSUxZX05BTUU6IDEyNixcbiAgICBGVF9HSVZFTl9OQU1FU19SVVM6IDEyNyxcbiAgICBGVF9WSVNBX0lEX1JVUzogMTI4LFxuICAgIEZUX0ZBVEhFUlNfTkFNRTogMTI5LFxuICAgIEZUX0ZBVEhFUlNfTkFNRV9SVVM6IDEzMCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19SVVM6IDEzMSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9SVVM6IDEzMixcbiAgICBGVF9BVVRIT1JJVFlfUlVTOiAxMzMsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFX05VTUVSSUM6IDEzNCxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6IDEzNSxcbiAgICBGVF9FTkdJTkVfUE9XRVI6IDEzNixcbiAgICBGVF9FTkdJTkVfVk9MVU1FOiAxMzcsXG4gICAgRlRfQ0hBU1NJU19OVU1CRVI6IDEzOCxcbiAgICBGVF9FTkdJTkVfTlVNQkVSOiAxMzksXG4gICAgRlRfRU5HSU5FX01PREVMOiAxNDAsXG4gICAgRlRfVkVISUNMRV9DQVRFR09SWTogMTQxLFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSOiAxNDIsXG4gICAgRlRfQ09OVFJPTF9OTzogMTQzLFxuICAgIEZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOiAxNDQsXG4gICAgRlRfU0VDT05EX1NVUk5BTUU6IDE0NSxcbiAgICBGVF9NSURETEVfTkFNRTogMTQ2LFxuICAgIEZUX1JFR19DRVJUX1ZJTjogMTQ3LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS19ESUdJVDogMTQ4LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS1NVTTogMTQ5LFxuICAgIEZUX0xJTkVfMV9DSEVDS19ESUdJVDogMTUwLFxuICAgIEZUX0xJTkVfMl9DSEVDS19ESUdJVDogMTUxLFxuICAgIEZUX0xJTkVfM19DSEVDS19ESUdJVDogMTUyLFxuICAgIEZUX0xJTkVfMV9DSEVDS1NVTTogMTUzLFxuICAgIEZUX0xJTkVfMl9DSEVDS1NVTTogMTU0LFxuICAgIEZUX0xJTkVfM19DSEVDS1NVTTogMTU1LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLU1VNOiAxNTcsXG4gICAgRlRfUkVHX0NFUlRfVkVISUNMRV9JVFNfQ09ERTogMTU4LFxuICAgIEZUX0NBUkRfQUNDRVNTX05VTUJFUjogMTU5LFxuICAgIEZUX01BUklUQUxfU1RBVFVTOiAxNjAsXG4gICAgRlRfQ09NUEFOWV9OQU1FOiAxNjEsXG4gICAgRlRfU1BFQ0lBTF9OT1RFUzogMTYyLFxuICAgIEZUX1NVUk5BTUVfT0ZfU1BPU0U6IDE2MyxcbiAgICBGVF9UUkFDS0lOR19OVU1CRVI6IDE2NCxcbiAgICBGVF9CT09LTEVUX05VTUJFUjogMTY1LFxuICAgIEZUX0NISUxEUkVOOiAxNjYsXG4gICAgRlRfQ09QWTogMTY3LFxuICAgIEZUX1NFUklBTF9OVU1CRVI6IDE2OCxcbiAgICBGVF9ET1NTSUVSX05VTUJFUjogMTY5LFxuICAgIEZUX0FLQV9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMTcwLFxuICAgIEZUX1RFUlJJVE9SSUFMX1ZBTElESVRZOiAxNzEsXG4gICAgRlRfTVJaX1NUUklOR1NfV0lUSF9DT1JSRUNUX0NIRUNLX1NVTVM6IDE3MixcbiAgICBGVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTogMTczLFxuICAgIEZUX0RMX1VOREVSXzE4X0RBVEU6IDE3NCxcbiAgICBGVF9ETF9SRUNPUkRfQ1JFQVRFRDogMTc1LFxuICAgIEZUX0RMX0RVUExJQ0FURV9EQVRFOiAxNzYsXG4gICAgRlRfRExfSVNTX1RZUEU6IDE3NyxcbiAgICBGVF9NSUxJVEFSWV9CT09LX05VTUJFUjogMTc4LFxuICAgIEZUX0RFU1RJTkFUSU9OOiAxNzksXG4gICAgRlRfQkxPT0RfR1JPVVA6IDE4MCxcbiAgICBGVF9TRVFVRU5DRV9OVU1CRVI6IDE4MSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX1RZUEU6IDE4MixcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTUFSSzogMTgzLFxuICAgIEZUX1RSQU5TQUNUSU9OX05VTUJFUjogMTg0LFxuICAgIEZUX0FHRTogMTg1LFxuICAgIEZUX0ZPTElPX05VTUJFUjogMTg2LFxuICAgIEZUX1ZPVEVSX0tFWTogMTg3LFxuICAgIEZUX0FERFJFU1NfTVVOSUNJUEFMSVRZOiAxODgsXG4gICAgRlRfQUREUkVTU19MT0NBVElPTjogMTg5LFxuICAgIEZUX1NFQ1RJT046IDE5MCxcbiAgICBGVF9PQ1JfTlVNQkVSOiAxOTEsXG4gICAgRlRfRkVERVJBTF9FTEVDVElPTlM6IDE5MixcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSOiAxOTMsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS1NVTTogMTk0LFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tfRElHSVQ6IDE5NSxcbiAgICBGVF9WSVNBX05VTUJFUjogMTk2LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLU1VNOiAxOTcsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE5OCxcbiAgICBGVF9WT1RFUjogMTk5LFxuICAgIEZUX1BSRVZJT1VTX1RZUEU6IDIwMCxcbiAgICBGVF9GSUVMRF9GUk9NX01SWjogMjIwLFxuICAgIEZUX0NVUlJFTlRfREFURTogMjIxLFxuICAgIEZUX1NUQVRVU19EQVRFX09GX0VYUElSWTogMjUxLFxuICAgIEZUX0JBTktOT1RFX05VTUJFUjogMjUyLFxuICAgIEZUX0NTQ19DT0RFOiAyNTMsXG4gICAgRlRfQVJUSVNUSUNfTkFNRTogMjU0LFxuICAgIEZUX0FDQURFTUlDX1RJVExFOiAyNTUsXG4gICAgRlRfQUREUkVTU19DT1VOVFJZOiAyNTYsXG4gICAgRlRfQUREUkVTU19aSVBDT0RFOiAyNTcsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzE6IDI1OCxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMjogMjU5LFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RSRUVUOiAyNjAsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DSVRZOiAyNjEsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVEFURTogMjYyLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ09VTlRSWTogMjYzLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTogMjY0LFxuICAgIEZUX0NETF9DTEFTUzogMjY1LFxuICAgIEZUX0RMX1VOREVSXzE5X0RBVEU6IDI2NixcbiAgICBGVF9XRUlHSFRfUE9VTkRTOiAyNjcsXG4gICAgRlRfTElNSVRFRF9EVVJBVElPTl9ET0NVTUVOVF9JTkRJQ0FUT1I6IDI2OCxcbiAgICBGVF9FTkRPUlNFTUVOVF9FWFBJUkFUSU9OX0RBVEU6IDI2OSxcbiAgICBGVF9SRVZJU0lPTl9EQVRFOiAyNzAsXG4gICAgRlRfQ09NUExJQU5DRV9UWVBFOiAyNzEsXG4gICAgRlRfRkFNSUxZX05BTUVfVFJVTkNBVElPTjogMjcyLFxuICAgIEZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjogMjczLFxuICAgIEZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046IDI3NCxcbiAgICBGVF9FWEFNX0RBVEU6IDI3NSxcbiAgICBGVF9PUkdBTklaQVRJT046IDI3NixcbiAgICBGVF9ERVBBUlRNRU5UOiAyNzcsXG4gICAgRlRfUEFZX0dSQURFOiAyNzgsXG4gICAgRlRfUkFOSzogMjc5LFxuICAgIEZUX0JFTkVGSVRTX05VTUJFUjogMjgwLFxuICAgIEZUX1NQT05TT1JfU0VSVklDRTogMjgxLFxuICAgIEZUX1NQT05TT1JfU1RBVFVTOiAyODIsXG4gICAgRlRfU1BPTlNPUjogMjgzLFxuICAgIEZUX1JFTEFUSU9OU0hJUDogMjg0LFxuICAgIEZUX1VTQ0lTOiAyODUsXG4gICAgRlRfQ0FURUdPUlk6IDI4NixcbiAgICBGVF9DT05ESVRJT05TOiAyODcsXG4gICAgRlRfSURFTlRJRklFUjogMjg4LFxuICAgIEZUX0NPTkZJR1VSQVRJT046IDI4OSxcbiAgICBGVF9ESVNDUkVUSU9OQVJZX0RBVEE6IDI5MCxcbiAgICBGVF9MSU5FXzFfT1BUSU9OQUxfREFUQTogMjkxLFxuICAgIEZUX0xJTkVfMl9PUFRJT05BTF9EQVRBOiAyOTIsXG4gICAgRlRfTElORV8zX09QVElPTkFMX0RBVEE6IDI5MyxcbiAgICBGVF9FUVZfQ09ERTogMjk0LFxuICAgIEZUX0FMVF9DT0RFOiAyOTUsXG4gICAgRlRfQklOQVJZX0NPREU6IDI5NixcbiAgICBGVF9QU0VVRE9fQ09ERTogMjk3LFxuICAgIEZUX0ZFRTogMjk4LFxuICAgIEZUX1NUQU1QX05VTUJFUjogMjk5LFxuICAgIEZUX1NCSF9TRUNVUklUWU9QVElPTlM6IDMwMCxcbiAgICBGVF9TQkhfSU5URUdSSVRZT1BUSU9OUzogMzAxLFxuICAgIEZUX0RBVEVfT0ZfQ1JFQVRJT046IDMwMixcbiAgICBGVF9WQUxJRElUWV9QRVJJT0Q6IDMwMyxcbiAgICBGVF9QQVRST05fSEVBREVSX1ZFUlNJT046IDMwNCxcbiAgICBGVF9CREJfVFlQRTogMzA1LFxuICAgIEZUX0JJT01FVFJJQ19UWVBFOiAzMDYsXG4gICAgRlRfQklPTUVUUklDX1NVQlRZUEU6IDMwNyxcbiAgICBGVF9CSU9NRVRSSUNfUFJPRFVDVElEOiAzMDgsXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9PV05FUjogMzA5LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTogMzEwLFxuICAgIEZUX1BIT05FOiAzMTEsXG4gICAgRlRfUFJPRkVTU0lPTjogMzEyLFxuICAgIEZUX1RJVExFOiAzMTMsXG4gICAgRlRfUEVSU09OQUxfU1VNTUFSWTogMzE0LFxuICAgIEZUX09USEVSX1ZBTElEX0lEOiAzMTUsXG4gICAgRlRfQ1VTVE9EWV9JTkZPOiAzMTYsXG4gICAgRlRfT1RIRVJfTkFNRTogMzE3LFxuICAgIEZUX09CU0VSVkFUSU9OUzogMzE4LFxuICAgIEZUX1RBWDogMzE5LFxuICAgIEZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOiAzMjAsXG4gICAgRlRfUEVSU09OQUxJWkFUSU9OX1NOOiAzMjEsXG4gICAgRlRfT1RIRVJQRVJTT05fTkFNRTogMzIyLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0RBVEVfT0ZfUkVDT1JEOiAzMjMsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfTkFNRTogMzI0LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX1BIT05FOiAzMjUsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzogMzI2LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX0lTU1VFUjogMzI3LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1NVQkpFQ1Q6IDMyOCxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJREZST006IDMyOSxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOiAzMzAsXG4gICAgRlRfVlJDX0RBVEFPQkpFQ1RfRU5UUlk6IDMzMSxcbiAgICBGVF9UWVBFX0FQUFJPVkFMX05VTUJFUjogMzMyLFxuICAgIEZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjogMzMzLFxuICAgIEZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6IDMzNCxcbiAgICBGVF9EQVRBX0RJU0NSSU1JTkFUT1I6IDMzNSxcbiAgICBGVF9JU09fSVNTVUVSX0lEX05VTUJFUjogMzM2LFxuICAgIEZUX0RUQ19WRVJTSU9OOiAzMzcsXG4gICAgRlRfRFRDX0lEOiAzMzgsXG4gICAgRlRfRFRDX0RBVEVfT0ZfRVhQSVJZOiAzMzksXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcbiAgICBGVF9DSVRJWkVOU0hJUF9TVEFUVVM6IDYyNSxcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX0ZST006IDYyNixcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX1RPOiA2MjcsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfRlJPTTogNjI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX1RPOiA2MjksXG4gICAgRlRfRExDTEFTU0NPREVfTlRfTk9URVM6IDYzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9GUk9NOiA2MzEsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fVE86IDYzMixcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9OT1RFUzogNjMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX0ZST006IDYzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19UTzogNjM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX05PVEVTOiA2MzYsXG4gICAgRlRfQUxUX0RBVEVfT0ZfRVhQSVJZOiA2MzcsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfRlJPTTogNjM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX1RPOiA2MzksXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfTk9URVM6IDY0MCxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9UTzogNjQzLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX0ZST006IDY0MixcbiAgICBGVF9JU1NVRVJfSURFTlRJRklDQVRJT05fTlVNQkVSOiA2NDEsXG4gICAgRlRfVkFDQ0lOQVRJT05fQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjQ0LFxuICAgIEZUX0ZJUlNUX05BTUU6IDY0NSxcbiAgICBGVF9EQVRFX09GX0FSUklWQUw6IDY0NixcbiAgICBGVF9TRUNPTkRfTkFNRTogNjQ3LFxuICAgIEZUX1RISVJEX05BTUU6IDY0OCxcbiAgICBGVF9GT1VSVEhfTkFNRTogNjQ5LFxuICAgIEZUX0xBU1RfTkFNRTogNjUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX0ZST006IDY1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9STV9OT1RFUzogNjUyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JNX1RPOiA2NTMsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfRlJPTTogNjU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1BXX05PVEVTOiA2NTUsXG4gICAgRlRfRExDTEFTU0NPREVfUFdfVE86IDY1NixcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9GUk9NOiA2NTcsXG4gICAgRlRfRExDTEFTU0NPREVfRUJfTk9URVM6IDY1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQl9UTzogNjU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX0ZST006IDY2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQ19OT1RFUzogNjYxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VDX1RPOiA2NjIsXG4gICAgRlRfRExDTEFTU0NPREVfRUMxX0ZST006IDY2MyxcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfTk9URVM6IDY2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9FQzFfVE86IDY2NSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9DSVRZOiA2NjYsXG4gICAgRlRfWUVBUl9PRl9CSVJUSDogNjY3LFxuICAgIEZUX1lFQVJfT0ZfRVhQSVJZOiA2NjgsXG4gICAgRlRfR1JBTkRGQVRIRVJfTkFNRV9NQVRFUk5BTDogNjY5LFxuICAgIEZUX0ZJUlNUX1NVUk5BTUU6IDY3MCxcbiAgICBGVF9NT05USF9PRl9CSVJUSDogNjcxLFxuICAgIEZUX0FERFJFU1NfRkxPT1JfTlVNQkVSOiA2NzIsXG4gICAgRlRfQUREUkVTU19FTlRSQU5DRTogNjczLFxuICAgIEZUX0FERFJFU1NfQkxPQ0tfTlVNQkVSOiA2NzQsXG4gICAgRlRfQUREUkVTU19TVFJFRVRfTlVNQkVSOiA2NzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVRfVFlQRTogNjc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWV9TRUNUT1I6IDY3NyxcbiAgICBGVF9BRERSRVNTX0NPVU5UWV9UWVBFOiA2NzgsXG4gICAgRlRfQUREUkVTU19DSVRZX1RZUEU6IDY3OSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HX1RZUEU6IDY4MCxcbiAgICBGVF9EQVRFX09GX1JFVElSRU1FTlQ6IDY4MSxcbiAgICBGVF9ET0NVTUVOVF9TVEFUVVM6IDY4MixcbiAgICBGVF9TSUdOQVRVUkU6IDY4MyxcbiAgICBGVF9VTklRVUVfQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjg0LFxuICAgIEZUX0VNQUlMOiA2ODUsXG4gICAgRlRfREFURV9PRl9TUEVDSU1FTl9DT0xMRUNUSU9OOiA2ODYsXG4gICAgRlRfVFlQRV9PRl9URVNUSU5HOiA2ODcsXG4gICAgRlRfUkVTVUxUX09GX1RFU1RJTkc6IDY4OCxcbiAgICBGVF9NRVRIT0RfT0ZfVEVTVElORzogNjg5LFxuICAgIEZUX0RJR0lUQUxfVFJBVkVMX0FVVEhPUklaQVRJT05fTlVNQkVSOiA2OTAsXG4gICAgRlRfREFURV9PRl9GSVJTVF9QT1NJVElWRV9URVNUX1JFU1VMVDogNjkxLFxuICAgIEZUX0VGX0NBUkRfQUNDRVNTOiA2OTIsXG4gICAgRlRfU0hPUlRfRkxJR0hUX05VTUJFUjogNjkzLFxuICAgIEZUX0FJUkxJTkVfQ09ERTogNjk0LFxuICAgIEZUX01WQ19BR0VOQ1k6IDY5NSxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfQUxQSEEyOiA2OTYsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9BTFBIQTI6IDY5NyxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFX0NIRUNLRElHSVQ6IDY5OCxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFX0NIRUNLU1VNOiA2OTksXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IExDSUQgPSB7XG4gICAgTEFUSU46IDAsXG4gICAgQUJLSEFaSUFOX0NZUklMTElDOiAxMDAxMSxcbiAgICBBRlJJS0FBTlM6IDEwNzgsXG4gICAgQUxCQU5JQU46IDEwNTIsXG4gICAgQU1IQVJJQzogMTExOCxcbiAgICBBUkFCSUNfQUxHRVJJQTogNTEyMSxcbiAgICBBUkFCSUNfQkFIUkFJTjogMTUzNjEsXG4gICAgQVJBQklDX0VHWVBUOiAzMDczLFxuICAgIEFSQUJJQ19JUkFROiAyMDQ5LFxuICAgIEFSQUJJQ19KT1JEQU46IDExMjY1LFxuICAgIEFSQUJJQ19LVVdBSVQ6IDEzMzEzLFxuICAgIEFSQUJJQ19MRUJBTk9OOiAxMjI4OSxcbiAgICBBUkFCSUNfTElCWUE6IDQwOTcsXG4gICAgQVJBQklDX01PUk9DQ086IDYxNDUsXG4gICAgQVJBQklDX09NQU46IDgxOTMsXG4gICAgQVJBQklDX1FBVEFSOiAxNjM4NSxcbiAgICBBUkFCSUNfU0FVRElfQVJBQklBOiAxMDI1LFxuICAgIEFSQUJJQ19TWVJJQTogMTAyNDEsXG4gICAgQVJBQklDX1RVTklTSUE6IDcxNjksXG4gICAgQVJBQklDX1VBRTogMTQzMzcsXG4gICAgQVJBQklDX1lFTUVOOiA5MjE3LFxuICAgIEFSQUJJQ19BUk1FTklBTjogMTA2NyxcbiAgICBBUkFCSUNfV09STEQ6IDQwOTYsXG4gICAgQVpFUklfQ1lSSUxJQzogMjA5MixcbiAgICBBWkVSSV9MQVRJTjogMTA2OCxcbiAgICBCQVNRVUU6IDEwNjksXG4gICAgQkFOS19DQVJEOiAxMDAwMyxcbiAgICBCQU5LX0NBUkRfQ1ZWMjogMTAwMDQsXG4gICAgQkFOS19DQVJEX05BTUU6IDEwMDAyLFxuICAgIEJBTktfQ0FSRF9OVU1CRVI6IDEwMDAwLFxuICAgIEJBTktfQ0FSRF9WQUxJRF9USFJVOiAxMDAwMSxcbiAgICBCRUxBUlVTSUFOOiAxMDU5LFxuICAgIEJFTkdBTElfQkFOR0xBREVTSDogMjExNyxcbiAgICBCVUxHQVJJQU46IDEwMjYsXG4gICAgQ0FUQUxBTjogMTAyNyxcbiAgICBDSElORVNFX0hPTkdLT05HX1NBUjogMzA3NixcbiAgICBDSElORVNFX01BQ0FPX1NBUjogNTEyNCxcbiAgICBDSElORVNFOiAyMDUyLFxuICAgIENISU5FU0VfU0lOR0FQT1JFOiA0MTAwLFxuICAgIENISU5FU0VfVEFJV0FOOiAxMDI4LFxuICAgIENST0FUSUFOOiAxMDUwLFxuICAgIENaRUNIOiAxMDI5LFxuICAgIERBTklTSDogMTAzMCxcbiAgICBESVZFSEk6IDExMjUsXG4gICAgRFVUQ0hfQkVMR0lVTTogMjA2NyxcbiAgICBEVVRDSF9ORVRIRVJMQU5EUzogMTA0MyxcbiAgICBFTkdMSVNIX0FVU1RSQUxJQTogMzA4MSxcbiAgICBFTkdMSVNIX0JFTElaRTogMTAyNDksXG4gICAgRU5HTElTSF9DQU5BREE6IDQxMDUsXG4gICAgRU5HTElTSF9DQVJSSUJFQU46IDkyMjUsXG4gICAgRU5HTElTSF9JUkVMQU5EOiA2MTUzLFxuICAgIEVOR0xJU0hfSkFNQUlDQTogODIwMSxcbiAgICBFTkdMSVNIX05FV19aRUFMQU5EOiA1MTI5LFxuICAgIEVOR0xJU0hfUEhJTElQUElORVM6IDEzMzIxLFxuICAgIEVOR0xJU0hfU09VVEhfQUZSSUNBOiA3MTc3LFxuICAgIEVOR0xJU0hfVFJJTklEQUQ6IDExMjczLFxuICAgIEVOR0xJU0hfVUs6IDIwNTcsXG4gICAgRU5HTElTSF9VUzogMTAzMyxcbiAgICBFTkdMSVNIX1pJTUJBQldFOiAxMjI5NyxcbiAgICBFU1RPTklBTjogMTA2MSxcbiAgICBGQUVST0VTRTogMTA4MCxcbiAgICBGQVJTSTogMTA2NSxcbiAgICBGSU5OSVNIOiAxMDM1LFxuICAgIEZSRU5DSF9CRUxHSVVNOiAyMDYwLFxuICAgIEZSRU5DSF9DQU5BREE6IDMwODQsXG4gICAgRlJFTkNIX0ZSQU5DRTogMTAzNixcbiAgICBGUkVOQ0hfTFVYRU1CT1VSRzogNTEzMixcbiAgICBGUkVOQ0hfTU9OQUNPOiA2MTU2LFxuICAgIEZSRU5DSF9TV0lUWkVSTEFORDogNDEwOCxcbiAgICBGWVJPX01BQ0VET05JQU46IDEwNzEsXG4gICAgR0FMSUNJQU46IDExMTAsXG4gICAgR0VPUkdJQU46IDEwNzksXG4gICAgR0VSTUFOX0FVU1RSSUE6IDMwNzksXG4gICAgR0VSTUFOX0dFUk1BTlk6IDEwMzEsXG4gICAgR0VSTUFOX0xJRUNIVEVOU1RFSU46IDUxMjcsXG4gICAgR0VSTUFOX0xVWEVNQk9VUkc6IDQxMDMsXG4gICAgR0VSTUFOX1NXSVRaRVJMQU5EOiAyMDU1LFxuICAgIEdSRUVLOiAxMDMyLFxuICAgIEdVSkFSQVRJOiAxMDk1LFxuICAgIEhFQlJFVzogMTAzNyxcbiAgICBISU5ESV9JTkRJQTogMTA4MSxcbiAgICBIVU5HQVJJQU46IDEwMzgsXG4gICAgSUNFTEFORElDOiAxMDM5LFxuICAgIElORE9ORVNJQU46IDEwNTcsXG4gICAgSVRBTElBTl9JVEFMWTogMTA0MCxcbiAgICBJVEFMSUFOX1NXSVRaRVJMQU5EOiAyMDY0LFxuICAgIEpBUEFORVNFOiAxMDQxLFxuICAgIEtBTk5BREE6IDEwOTksXG4gICAgS0FTSE1JUkk6IDExMjAsXG4gICAgS0FaQUtIOiAxMDg3LFxuICAgIEtPTktBTkk6IDExMTEsXG4gICAgS09SRUFOOiAxMDQyLFxuICAgIEtZUkdZWl9DWVJJTElDSzogMTA4OCxcbiAgICBMQU86IDExMDgsXG4gICAgTEFUVklBTjogMTA2MixcbiAgICBMSVRIVUFOSUFOOiAxMDYzLFxuICAgIE1BTEFZX01BTEFZU0lBOiAxMDg2LFxuICAgIE1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOiAyMTEwLFxuICAgIEFTU0FNRVNFOiAxMTAxLFxuICAgIE1BUkFUSEk6IDExMDIsXG4gICAgTU9OR09MSUFOX0NZUklMSUM6IDExMDQsXG4gICAgTk9SV0VHSUFOX0JPS01BTDogMTA0NCxcbiAgICBOT1JXRUdJQU5fTllPUlNLOiAyMDY4LFxuICAgIFBBU0hUTzogMTEyMyxcbiAgICBQT0xJU0g6IDEwNDUsXG4gICAgUE9SVFVHVUVTRV9CUkFaSUw6IDEwNDYsXG4gICAgUE9SVFVHVUVTRV9QT1JUVUdBTDogMjA3MCxcbiAgICBQVU5KQUJJOiAxMDk0LFxuICAgIFJIQUVUT19ST01BTklDOiAxMDQ3LFxuICAgIFJPTUFOSUFOOiAxMDQ4LFxuICAgIFJVU1NJQU46IDEwNDksXG4gICAgU0FOU0tSSVQ6IDExMDMsXG4gICAgU0VSQklBTl9DWVJJTElDOiAzMDk4LFxuICAgIFNFUkJJQU5fTEFUSU46IDIwNzQsXG4gICAgU0lOREhJOiAyMTM3LFxuICAgIFNJTkRISV9JTkRJQTogMTExMyxcbiAgICBTSU5IQUxBOiAxMTE1LFxuICAgIFNMT1ZBSzogMTA1MSxcbiAgICBTTE9WRU5JQU46IDEwNjAsXG4gICAgU1BBTklTSF9BUkdFTlRJTkE6IDExMjc0LFxuICAgIFNQQU5JU0hfQk9MSVZJQTogMTYzOTQsXG4gICAgU1BBTklTSF9DSElMRTogMTMzMjIsXG4gICAgU1BBTklDSF9DT0xPTUJJQTogOTIyNixcbiAgICBTUEFOSVNIX0NPU1RBX1JJQ0E6IDUxMzAsXG4gICAgU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6IDcxNzgsXG4gICAgU1BBTklTSF9FQ1VBRE9SOiAxMjI5OCxcbiAgICBTUEFOSVNIX0VMX1NBTFZBRE9SOiAxNzQxOCxcbiAgICBTUEFOSVNIX0dVQVRFTUFMQTogNDEwNixcbiAgICBTUEFOSVNIX0hPTkRVUkFTOiAxODQ0MixcbiAgICBTUEFOSVNIX01FWElDTzogMjA1OCxcbiAgICBTUEFOSVNIX05JQ0FSQUdVQTogMTk0NjYsXG4gICAgU1BBTklTSF9QQU5BTUE6IDYxNTQsXG4gICAgU1BBTklTSF9QQVJBR1VBWTogMTUzNzAsXG4gICAgU1BBTklTSF9QRVJVOiAxMDI1MCxcbiAgICBTUEFOSVNIX1BVRVJUT19SSUNPOiAyMDQ5MCxcbiAgICBTUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6IDEwMzQsXG4gICAgU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6IDMwODIsXG4gICAgU1BBTklTSF9VUlVHVUFZOiAxNDM0NixcbiAgICBTUEFOSVNIX1ZFTkVaVUVMQTogODIwMixcbiAgICBTV0FISUxJOiAxMDg5LFxuICAgIFNXRURJU0g6IDEwNTMsXG4gICAgU1dFRElTSF9GSU5MQU5EOiAyMDc3LFxuICAgIFNZUklBQzogMTExNCxcbiAgICBUQU1JTDogMTA5NyxcbiAgICBUQVRBUjogMTA5MixcbiAgICBCRU5HQUxJX0lORElBOiAxMDkzLFxuICAgIFRFTFVHVTogMTA5OCxcbiAgICBUSEFJX1RIQUlMQU5EOiAxMDU0LFxuICAgIFRVUktJU0g6IDEwNTUsXG4gICAgVEFKSUtfQ1lSSUxMSUM6IDEwNjQsXG4gICAgVFVSS01FTjogMTA5MCxcbiAgICBVS1JBSU5JQU46IDEwNTgsXG4gICAgVVJEVTogMTA1NixcbiAgICBVWkJFS19DWVJJTElDOiAyMTE1LFxuICAgIFVaQkVLX0xBVElOOiAxMDkxLFxuICAgIFZJRVROQU1FU0U6IDEwNjYsXG4gICAgQ1RDX1NJTVBMSUZJRUQ6IDUwMDAxLFxuICAgIENUQ19UUkFESVRJT05BTDogNTAwMDIsXG4gICAgTUFMVEVTRTogMTA4MixcbiAgICBCVVJNRVNFOiAxMTA5LFxuICAgIEtITUVSOiAxMTA3LFxuICAgIEtBUkFLQUxQQUtfTEFUSU46IDEwMDEyLFxuICAgIE1BTEFZQUxBTTogMTEwMCxcbiAgICBORVBBTEk6IDExMjEsXG4gICAgT1JJWUE6IDEwOTYsXG4gICAgVVJEVV9ERVRFQ1RJT046IDEwNTYwLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIFJGSURfUFJPQ0VTU0lOR19TQ1JFRU5fRkFJTFVSRV9JTUFHRTogXCJyZmlkUHJvY2Vzc2luZ1NjcmVlbkZhaWx1cmVJbWFnZVwiLFxuICAgIFJGSURfRU5BQkxFX05GQ19JTUFHRTogXCJyZmlkRW5hYmxlTmZjSW1hZ2VcIixcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9MaWdodHMgPSB7XG4gICAgTk9ORTogMCxcbiAgICBSUFJNX0xJR0hUX1VWOiAxMjgsXG4gICAgUlBSTV9MSUdIVF9XSElURV9GVUxMOiA2LFxuICAgIFJQUk1fTElHSFRfSVI6IDE2Nzc3MjE2LFxuICAgIFJQUk1fTGlnaHRfSVJfVE9QOiA4LFxuICAgIFJQUk1fTGlnaHRfSVJfU0lERTogMTYsXG4gICAgUlBSTV9MaWdodF9JUl9GdWxsOiAoOCB8IDE2KSxcbiAgICBSUFJNX0xJR0hUX09WRDogNjcxMDg4NjQsXG4gICAgUlBSTV9MSUdIVF9XSElURV9GVUxMX09WRDogKDYgfCA2NzEwODg2NCksXG59XG5cbmV4cG9ydCBjb25zdCBlTXJ6RGV0ZWN0aW9uTW9kZXMgPSB7XG4gICAgREVGQVVMVDogMCxcbiAgICBSRVNJWkVfQklOQVJJWkVfV0lORE9XOiAxLFxuICAgIEJMVVJfQkVGT1JFX0JJTkFSSVpBVElPTjogMixcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBGb250U3R5bGUsXG4gICBlUlBSTV9BdXRoZW50aWNpdHksXG4gICBDdXN0b21pemF0aW9uQ29sb3IsXG4gICBlUkZJRF9FcnJvckNvZGVzLFxuICAgTGl2ZW5lc3NDaGVja1R5cGUsXG4gICBlTERTX1BhcnNpbmdFcnJvckNvZGVzLFxuICAgZVJGSURfQ2VydGlmaWNhdGVUeXBlLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBGcmFtZVNoYXBlVHlwZSxcbiAgIGVSRklEX0JhdWRSYXRlLFxuICAgTGluZUNhcCxcbiAgIEZpbHRlckNoZWNrVHlwZSxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgZVJGSURSZWFkaW5nQnVmZmVyU2l6ZSxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSxcbiAgIERvY3VtZW50UmVhZGVyRXJyb3JDb2RlcyxcbiAgIFNjZW5hcmlvSWRlbnRpZmllcixcbiAgIGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSxcbiAgIGVSRklEX05vdGlmaWNhdGlvbkNvZGVzLFxuICAgQ2FtZXJhUG9zaXRpb24sXG4gICBlUkZJRF9QYXNzd29yZF9UeXBlLFxuICAgVmlld0NvbnRlbnRNb2RlLFxuICAgQmFyY29kZVJlc3VsdCxcbiAgIGVSRklEX0FwcGxpY2F0aW9uX1R5cGUsXG4gICBlU2lnbk1hbmFnZW1lbnRBY3Rpb24sXG4gICBlQ2hlY2tEaWFnbm9zZSxcbiAgIFJGSUREZWxlZ2F0ZSxcbiAgIFRleHRQcm9jZXNzaW5nLFxuICAgTG9nTGV2ZWwsXG4gICBBbmltYXRpb25JbWFnZSxcbiAgIFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyxcbiAgIERvY0Zvcm1hdCxcbiAgIGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzLFxuICAgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSxcbiAgIE1SWkZvcm1hdCxcbiAgIEJhcmNvZGVUeXBlLFxuICAgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSxcbiAgIE9ubGluZU1vZGUsXG4gICBlUkZJRF9TREtfUHJvZmlsZXJUeXBlLFxuICAgQXV0aGVudGljaXR5Q2hlY2tUeXBlLFxuICAgZGlEb2NUeXBlLFxuICAgQnV0dG9uVGFnLFxuICAgSG9sb0FuaW1hdGlvblR5cGUsXG4gICBlUmVxdWVzdENvbW1hbmQsXG4gICBDdXN0b21pemF0aW9uRm9udCxcbiAgIEltYWdlRm9ybWF0LFxuICAgZUdyYXBoaWNGaWVsZFR5cGUsXG4gICBSZWdEZXZpY2VDb25maWdUeXBlLFxuICAgQ2FwdHVyZVNlc3Npb25QcmVzZXQsXG4gICBDYW1lcmFNb2RlLFxuICAgQ2FwdHVyZU1vZGUsXG4gICBlQ2hlY2tSZXN1bHQsXG4gICBlUkZJRF9UZXJtaW5hbFR5cGUsXG4gICBlUkZJRF9EYXRhRmlsZV9UeXBlLFxuICAgZVZpc3VhbEZpZWxkVHlwZSxcbiAgIERvY1JlYWRlck9yaWVudGF0aW9uLFxuICAgTENJRCxcbiAgIEN1c3RvbWl6YXRpb25JbWFnZSxcbiAgIERvY1JlYWRlckZyYW1lLFxuICAgZVJQUk1fTGlnaHRzLFxuICAgZU1yekRldGVjdGlvbk1vZGVzLFxufVxuXG4vKipcbiAqIEBuYW1lIERvY3VtZW50UmVhZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBEb2N1bWVudCBSZWFkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFJlYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtcmVhZGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBEb2N1bWVudFJlYWRlcjogRG9jdW1lbnRSZWFkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLkRvY3VtZW50UmVhZGVyLnByZXBhcmVEYXRhYmFzZShcIkZ1bGxcIikuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICogICAgICAgIGlmIChtZXNzYWdlID09IFwiZGF0YWJhc2UgcHJlcGFyZWRcIikge1xuICogICAgICAgICAgdGhpcy5Eb2N1bWVudFJlYWRlci5pbml0aWFsaXplUmVhZGVyKGxpY2Vuc2UpLnRoZW4obSA9PiBvbkluaXRpYWxpemVkKCkpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gKiAgICAgICAgfVxuICogICAgICB9KVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRSZWFkZXInLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICAgIHBsdWdpblJlZjogJ0RvY3VtZW50UmVhZGVyUGx1Z2luLkRvY3VtZW50UmVhZGVyJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9Eb2N1bWVudFJlYWRlci1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgdGhlIFNESyBpcyByZWFkeSBmb3IgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY3VtZW50UmVhZGVySXNSZWFkeSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBEb2N1bWVudCBSZWFkZXIgc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERvY3VtZW50UmVhZGVyU3RhdHVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhbiBSRklEIHNlc3Npb24gc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFJmaWRTZXNzaW9uU3RhdHVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNlc3Npb24gc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2Vzc2lvblN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgcmV0dXJucyB0YWcgcHJvcGVydHkgb2YgRG9jdW1lbnRSZWFkZXIgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0VGFnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgc2V0cyBEb2N1bWVudFJlYWRlci50YWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRhZyh0YWc6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFRlbmFudCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVuYW50XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRUZW5hbnQodGVuYW50OiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRFbnYoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVudlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RW52KGVudjogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TG9jYWxlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEZ1bmN0aW9uYWxpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbmFsaXR5fSBmdW5jdGlvbmFsaXR5XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRGdW5jdGlvbmFsaXR5KGZ1bmN0aW9uYWxpdHk6IEZ1bmN0aW9uYWxpdHkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFByb2Nlc3NQYXJhbXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9jZXNzUGFyYW1zfSBwcm9jZXNzUGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRQcm9jZXNzUGFyYW1zKHByb2Nlc3NQYXJhbXM6IFByb2Nlc3NQYXJhbXMpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEN1c3RvbWl6YXRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtDdXN0b21pemF0aW9ufSBjdXN0b21pemF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDdXN0b21pemF0aW9uKGN1c3RvbWl6YXRpb246IEN1c3RvbWl6YXRpb24pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFJmaWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JGSURTY2VuYXJpb30gcmZpZFNjZW5hcmlvXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2NlbmFyaW8ocmZpZFNjZW5hcmlvOiBSRklEU2NlbmFyaW8pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlc2V0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIERvY3VtZW50IFJlYWRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtEb2NSZWFkZXJDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcihjb25maWc6IERvY1JlYWRlckNvbmZpZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZXMgZG9jdW1lbnQgcmVhZGVyIHdpdGggbGljZW5zZSBmcm9tIGNvbm5lY3RlZCBEZXZpY2U3MzEwKEFuZHJvaWQgb25seSwgaWdub3JlZCBvbiBpT1MpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RvY1JlYWRlckNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyV2l0aEJsZURldmljZUNvbmZpZyhjb25maWc6IERvY1JlYWRlckNvbmZpZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRlaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0aWFsaXplUmVhZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRvd25sb2FkIGEgZGF0YWJhc2UgZnJvbSB0aGUgUmVndWxhJ3Mgc2VydmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHByZXBhcmVEYXRhYmFzZShkYXRhYmFzZVR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byByZW1vdmUgdGhlIGFkZGVkIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlbW92ZURhdGFiYXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBydW5BdXRvVXBkYXRlKGRhdGFiYXNlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjYW5jZWwgZGF0YWJhc2UgdXBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNhbmNlbERCVXBkYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgY2hlY2tzIGZvciBkYXRhYmFzZSB1cGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZUlkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjaGVja0RhdGFiYXNlVXBkYXRlKGRhdGFiYXNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NjYW5uZXJDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzY2FuKGNvbmZpZzogU2Nhbm5lckNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NjYW5uZXJDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzdGFydFNjYW5uZXIoY29uZmlnOiBTY2FubmVyQ29uZmlnKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGltYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWNvZ25pemVDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemUoY29uZmlnOiBSZWNvZ25pemVDb25maWcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1BhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xvc2UgY2FtZXJhIHByZXZpZXcgYW5kIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIG9wZW4gdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIHN0YXJ0IGl0cyBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RQQUNlcnRpZmljYXRlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFRBQ2VydGlmaWNhdGVzXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0VEFTaWduYXR1cmVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc3RhcnRSRklEUmVhZGVyKHJlcXVlc3RQQUNlcnRpZmljYXRlczogYm9vbGVhbiwgcmVxdWVzdFRBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFTaWduYXR1cmU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzdGFydCBSRklEIGNoaXAgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXF1ZXN0UEFDZXJ0aWZpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcXVlc3RUQUNlcnRpZmljYXRlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWVzdFRBU2lnbmF0dXJlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlYWRSRklEKHJlcXVlc3RQQUNlcnRpZmljYXRlczogYm9vbGVhbiwgcmVxdWVzdFRBQ2VydGlmaWNhdGVzOiBib29sZWFuLCByZXF1ZXN0VEFTaWduYXR1cmU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFJGSURSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBQQUNlcnRpZmljYXRlcyB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVQQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IFBLRENlcnRpZmljYXRlW10gfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBUQUNlcnRpZmljYXRlcyB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVUQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IFBLRENlcnRpZmljYXRlW10gfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBUQVNpZ25hdHVyZSB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hdHVyZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBU2lnbmF0dXJlKHNpZ25hdHVyZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBUaGUgbWV0aG9kIGNhbGwgc2V0cyB0aGUgZ2l2ZW4gVENDUGFyYW1zIHRvIHRoZSBSRklEIHNlc3Npb24uIFRoZSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCB0byBiZSBzZXQgYmVmb3JlIHN0YXJ0aW5nIFJGSUQgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VGNjUGFyYW1zfSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRDQ1BhcmFtcyhwYXJhbXM6IFRjY1BhcmFtcyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHRvIGFkZCBhIGxpc3Qgb2YgUEtEIGNlcnRpZmljYXRlcyBkdXJpbmcgaW5pdGlhbGl6YXRpb24gcHJvY2VzcyB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBDb3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUEtEQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogUEtEQ2VydGlmaWNhdGVbXSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIFBLRCBjZXJ0aWZpY2F0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2xlYXJQS0RDZXJ0aWZpY2F0ZXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBDb25uZWN0cyB0byBibGUgZGV2aWNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnREZXZpY2VOYW1lXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjb25uZWN0Qmx1ZXRvb3RoRGV2aWNlKGJ0RGV2aWNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBidERldmljZVJlcXVlc3RGbGFzaGluZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGJ0RGV2aWNlUmVxdWVzdEZsYXNoaW5nRnVsbElSKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYnREZXZpY2VSZXF1ZXN0VHVybk9mZkFsbCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGRpY3Rpb25hcnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvY2FsaXphdGlvbkRpY3Rpb25hcnkoZGljdGlvbmFyeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEF2YWlsYWJsZVNjZW5hcmlvcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRJc1JGSURBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIGEgbW9iaWxlIGF1dGhlbnRpY2F0b3IgaXMgYXZhaWxhYmxlIGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNBdXRoZW50aWNhdG9yUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2NSZWFkZXJWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jUmVhZGVyRG9jdW1lbnRzRGF0YWJhc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBmaW5hbGl6ZVBhY2thZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBlbmRCYWNrZW5kVHJhbnNhY3Rpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0VHJhbnNsYXRpb24oY2xhc3NOYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hlY2tUeXBlXG4gICAgICogQHBhcmFtIHtGaWx0ZXJPYmplY3R9IGZpbHRlclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvY2Vzc1BhcmFtc1NldENoZWNrRmlsdGVyKGNoZWNrVHlwZTogc3RyaW5nLCBmaWx0ZXI6IEZpbHRlck9iamVjdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1R5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb2Nlc3NQYXJhbXNSZW1vdmVDaGVja0ZpbHRlcihjaGVja1R5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvY2Vzc1BhcmFtc0NsZWFyQ2hlY2tGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrVHlwZVxuICAgICAqIEBwYXJhbSB7RmlsdGVyT2JqZWN0fSBmaWx0ZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGF1dGhlbnRpY2l0eVBhcmFtc1NldENoZWNrRmlsdGVyKGNoZWNrVHlwZTogc3RyaW5nLCBmaWx0ZXI6IEZpbHRlck9iamVjdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1R5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGF1dGhlbnRpY2l0eVBhcmFtc1JlbW92ZUNoZWNrRmlsdGVyKGNoZWNrVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhdXRoZW50aWNpdHlQYXJhbXNDbGVhckNoZWNrRmlsdGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1R5cGVcbiAgICAgKiBAcGFyYW0ge0ZpbHRlck9iamVjdH0gZmlsdGVyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBsaXZlbmVzc1BhcmFtc1NldENoZWNrRmlsdGVyKGNoZWNrVHlwZTogc3RyaW5nLCBmaWx0ZXI6IEZpbHRlck9iamVjdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja1R5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGxpdmVuZXNzUGFyYW1zUmVtb3ZlQ2hlY2tGaWx0ZXIoY2hlY2tUeXBlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGxpdmVuZXNzUGFyYW1zQ2xlYXJDaGVja0ZpbHRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGUocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVTb3VyY2UocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZFZhbHVlQnlUeXBlTGNpZFNvdXJjZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRWYWx1ZUJ5VHlwZVNvdXJjZU9yaWdpbmFsKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyLCBvcmlnaW5hbDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgdGV4dEZpZWxkVmFsdWVCeVR5cGVMY2lkU291cmNlT3JpZ2luYWwocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgb3JpZ2luYWw6IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIHRleHRGaWVsZEJ5VHlwZShyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICB0ZXh0RmllbGRCeVR5cGVMY2lkKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7IHJldHVybiB9XG5cbiAgICBAQ29yZG92YSgpXG4gICAgZ3JhcGhpY0ZpZWxkQnlUeXBlU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2VQYWdlSW5kZXgocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRCeVR5cGVTb3VyY2VQYWdlSW5kZXhMaWdodChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIsIGxpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBncmFwaGljRmllbGRJbWFnZUJ5VHlwZVNvdXJjZVBhZ2VJbmRleChyZXN1bHRzOiBEb2N1bWVudFJlYWRlclJlc3VsdHMsIGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGdyYXBoaWNGaWVsZEltYWdlQnlUeXBlU291cmNlUGFnZUluZGV4TGlnaHQocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzLCBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyLCBsaWdodDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH1cblxuICAgIEBDb3Jkb3ZhKClcbiAgICBjb250YWluZXJzKHJlc3VsdHM6IERvY3VtZW50UmVhZGVyUmVzdWx0cywgcmVzdWx0VHlwZTogbnVtYmVyW10pOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4geyByZXR1cm4gfVxuXG4gICAgQENvcmRvdmEoKVxuICAgIGVuY3J5cHRlZENvbnRhaW5lcnMocmVzdWx0czogRG9jdW1lbnRSZWFkZXJSZXN1bHRzKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHsgcmV0dXJuIH19Il19