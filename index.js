var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        return result;
    };
    return DocumentReaderScenario;
}());
export { DocumentReaderScenario };
var CoreDetailedScenario = /** @class */ (function () {
    function CoreDetailedScenario() {
    }
    CoreDetailedScenario.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new CoreDetailedScenario;
        result.uvTorch = jsonObject["uvTorch"];
        result.frameOrientation = jsonObject["frameOrientation"];
        result.faceExt = jsonObject["faceExt"];
        result.multiPageOff = jsonObject["multiPageOff"];
        result.seriesProcessMode = jsonObject["seriesProcessMode"];
        result.frameKWHLandscape = jsonObject["frameKWHLandscape"];
        result.frameKWHPortrait = jsonObject["frameKWHPortrait"];
        result.frameKWHDoublePageSpreadPortrait = jsonObject["frameKWHDoublePageSpreadPortrait"];
        result.frameKWHDoublePageSpreadLandscape = jsonObject["frameKWHDoublePageSpreadLandscape"];
        result.name = jsonObject["name"];
        result.caption = jsonObject["caption"];
        result.description = jsonObject["description"];
        result.manualCrop = jsonObject["manualCrop"];
        return result;
    };
    return CoreDetailedScenario;
}());
export { CoreDetailedScenario };
var FaceMetaData = /** @class */ (function () {
    function FaceMetaData() {
    }
    FaceMetaData.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceMetaData;
        result.ID = jsonObject["ID"];
        result.rollAngle = jsonObject["rollAngle"];
        result.bounds = Bounds.fromJson(jsonObject["bounds"]);
        return result;
    };
    return FaceMetaData;
}());
export { FaceMetaData };
var Bounds = /** @class */ (function () {
    function Bounds() {
    }
    Bounds.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Bounds;
        result.x = jsonObject["x"];
        result.y = jsonObject["y"];
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        return result;
    };
    return Bounds;
}());
export { Bounds };
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
        result.lightType = jsonObject["lightType"];
        result.pageIndex = jsonObject["pageIndex"];
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
        result.value = DocumentReaderValue.fromJson(jsonObject["value"]);
        result.values = [];
        if (jsonObject["values"] != null) {
            for (var i in jsonObject["values"]) {
                var item = DocumentReaderValue.fromJson(jsonObject["values"][i]);
                if (item != undefined)
                    result.values.push(item);
            }
        }
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
        result.code = jsonObject["code"];
        result.attachment = jsonObject["attachment"];
        result.value = jsonObject["value"];
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
        return result;
    };
    return RFIDSessionData;
}());
export { RFIDSessionData };
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
        result.error = DocumentReaderException.fromJson(jsonObject["error"]);
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
var DocumentReaderException = /** @class */ (function () {
    function DocumentReaderException() {
    }
    DocumentReaderException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderException;
        result.errorCode = jsonObject["errorCode"];
        result.localizedMessage = jsonObject["localizedMessage"];
        result.message = jsonObject["message"];
        result.string = jsonObject["string"];
        result.stackTrace = [];
        if (jsonObject["stackTrace"] != null) {
            for (var i in jsonObject["stackTrace"]) {
                var item = StackTraceElement.fromJson(jsonObject["stackTrace"][i]);
                if (item != undefined)
                    result.stackTrace.push(item);
            }
        }
        return result;
    };
    return DocumentReaderException;
}());
export { DocumentReaderException };
var Throwable = /** @class */ (function () {
    function Throwable() {
    }
    Throwable.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Throwable;
        result.localizedMessage = jsonObject["localizedMessage"];
        result.message = jsonObject["message"];
        result.string = jsonObject["string"];
        result.stackTrace = [];
        if (jsonObject["stackTrace"] != null) {
            for (var i in jsonObject["stackTrace"]) {
                var item = StackTraceElement.fromJson(jsonObject["stackTrace"][i]);
                if (item != undefined)
                    result.stackTrace.push(item);
            }
        }
        return result;
    };
    return Throwable;
}());
export { Throwable };
var StackTraceElement = /** @class */ (function () {
    function StackTraceElement() {
    }
    StackTraceElement.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new StackTraceElement;
        result.lineNumber = jsonObject["lineNumber"];
        result.isNativeMethod = jsonObject["isNativeMethod"];
        result.className = jsonObject["className"];
        result.fileName = jsonObject["fileName"];
        result.methodName = jsonObject["methodName"];
        result.string = jsonObject["string"];
        return result;
    };
    return StackTraceElement;
}());
export { StackTraceElement };
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
var DocumentReaderUvFiberElement = /** @class */ (function () {
    function DocumentReaderUvFiberElement() {
    }
    DocumentReaderUvFiberElement.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderUvFiberElement;
        result.rectArray = [];
        if (jsonObject["rectArray"] != null) {
            for (var i in jsonObject["rectArray"]) {
                var item = DocReaderFieldRect.fromJson(jsonObject["rectArray"][i]);
                if (item != undefined)
                    result.rectArray.push(item);
            }
        }
        result.rectCount = jsonObject["rectCount"];
        result.expectedCount = jsonObject["expectedCount"];
        result.width = [];
        if (jsonObject["width"] != null) {
            for (var i in jsonObject["width"]) {
                result.width.push(jsonObject["width"][i]);
            }
        }
        result.length = [];
        if (jsonObject["length"] != null) {
            for (var i in jsonObject["length"]) {
                result.length.push(jsonObject["length"][i]);
            }
        }
        result.area = [];
        if (jsonObject["area"] != null) {
            for (var i in jsonObject["area"]) {
                result.area.push(jsonObject["area"][i]);
            }
        }
        result.colorValues = [];
        if (jsonObject["colorValues"] != null) {
            for (var i in jsonObject["colorValues"]) {
                result.colorValues.push(jsonObject["colorValues"][i]);
            }
        }
        result.status = jsonObject["status"];
        result.elementType = jsonObject["elementType"];
        result.elementDiagnose = jsonObject["elementDiagnose"];
        result.elementTypeName = jsonObject["elementTypeName"];
        result.elementDiagnoseName = jsonObject["elementDiagnoseName"];
        return result;
    };
    return DocumentReaderUvFiberElement;
}());
export { DocumentReaderUvFiberElement };
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
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.prototype.getTextFieldValueByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.lcid, lcid = _b === void 0 ? 0 : _b, _c = _a.source, source = _c === void 0 ? -1 : _c, _d = _a.original, original = _d === void 0 ? false : _d;
        if (this.textResult == undefined)
            return undefined;
        var field = this.findByTypeAndLcid(fieldType, lcid);
        if (field == undefined)
            return undefined;
        var value = this.findBySource(field, source);
        if (value == undefined)
            return undefined;
        return original ? value.originalValue : value.value;
    };
    DocumentReaderResults.prototype.getTextFieldStatusByType = function (fieldType, lcid) {
        if (this.textResult == undefined)
            return 0;
        var field = this.findByTypeAndLcid(fieldType, lcid);
        if (field != undefined && field.status != null && field.status != undefined)
            return field.status;
        return 0;
    };
    DocumentReaderResults.prototype.getGraphicFieldImageByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.source, source = _b === void 0 ? -1 : _b, _c = _a.light, light = _c === void 0 ? -1 : _c, _d = _a.pageIndex, pageIndex = _d === void 0 ? -1 : _d;
        if (this.graphicResult == undefined || this.graphicResult.fields == undefined)
            return undefined;
        var foundFields = [];
        for (var _i = 0, _e = this.graphicResult.fields; _i < _e.length; _i++) {
            var field = _e[_i];
            if (field.fieldType === fieldType)
                foundFields.push(field);
        }
        if (source !== -1)
            for (var i = 0; i < foundFields.length; i++)
                if (foundFields[i].sourceType !== source)
                    foundFields.splice(i, 1);
        if (light !== -1)
            for (var i = 0; i < foundFields.length; i++)
                if (foundFields[i].lightType !== light)
                    foundFields.splice(i, 1);
        if (pageIndex !== -1)
            for (var i = 0; i < foundFields.length; i++)
                if (foundFields[i].pageIndex !== pageIndex)
                    foundFields.splice(i, 1);
        return foundFields.length > 0 ? foundFields[0].value : undefined;
    };
    DocumentReaderResults.prototype.getQualityResult = function (_a) {
        var imageQualityCheckType = _a.imageQualityCheckType, _b = _a.securityFeature, securityFeature = _b === void 0 ? -1 : _b, _c = _a.pageIndex, pageIndex = _c === void 0 ? 0 : _c;
        var resultSum = 2;
        if (this.imageQuality == undefined)
            return resultSum;
        var imageQualityGroup;
        for (var _i = 0, _d = this.imageQuality; _i < _d.length; _i++) {
            var iq = _d[_i];
            if (iq != null && iq != undefined && iq.pageIndex == pageIndex)
                imageQualityGroup = iq;
        }
        if (imageQualityGroup == null || imageQualityGroup == undefined)
            return resultSum;
        for (var _e = 0, _f = imageQualityGroup.imageQualityList; _e < _f.length; _e++) {
            var field = _f[_e];
            if (field.type === imageQualityCheckType)
                if (securityFeature === -1) {
                    if (field.result === 0) {
                        resultSum = 0;
                        break;
                    }
                    if (field.result === 1)
                        resultSum = field.result;
                }
                else if (field.featureType === securityFeature) {
                    resultSum = field.result;
                    break;
                }
        }
        return resultSum;
    };
    DocumentReaderResults.prototype.findByTypeAndLcid = function (type, lcid) {
        if (this.textResult == undefined || this.textResult.fields == undefined)
            return undefined;
        var field;
        var foundFields = [];
        for (var _i = 0, _a = this.textResult.fields; _i < _a.length; _i++) {
            field = _a[_i];
            if (field.fieldType === type)
                foundFields.push(field);
        }
        if (foundFields.length <= 0)
            return undefined;
        var foundField = undefined;
        for (var _b = 0, foundFields_1 = foundFields; _b < foundFields_1.length; _b++) {
            field = foundFields_1[_b];
            if (lcid === 0) {
                foundField = field;
                if (field.lcid === lcid)
                    break;
            }
            else if (field.lcid === lcid)
                return field;
        }
        return foundField;
    };
    DocumentReaderResults.prototype.findBySource = function (field, sourceType) {
        var value;
        if (sourceType === -1) {
            var mrzVal = this.findBySource(field, 3);
            if (mrzVal != null && mrzVal != undefined)
                return mrzVal;
            value = this.findBySource(field, 18);
            if (value != null && value != undefined)
                return value;
            var visualVal = this.findBySource(field, 17);
            return visualVal;
        }
        if (field.values == undefined)
            return undefined;
        for (var _i = 0, _a = field.values; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.sourceType === sourceType)
                return item;
        }
        return undefined;
    };
    DocumentReaderResults.prototype.getContainers = function (resultTypes) {
        try {
            if (this.rawResult == undefined)
                return undefined;
            var json = JSON.parse(this.rawResult);
            var containerList = json.List;
            var resultArray = [];
            for (var _i = 0, containerList_1 = containerList; _i < containerList_1.length; _i++) {
                var container = containerList_1[_i];
                if (container == null || container.length == 0)
                    continue;
                for (var _a = 0, resultTypes_1 = resultTypes; _a < resultTypes_1.length; _a++) {
                    var resultType = resultTypes_1[_a];
                    if (resultType == container.result_type) {
                        resultArray.push(container);
                        break;
                    }
                }
            }
            if (resultArray.length == 0)
                return undefined;
            var newContainerList = {};
            newContainerList["List"] = resultArray;
            var newJson = {};
            newJson["ContainerList"] = newContainerList;
            newJson["TransactionInfo"] = json.TransactionInfo;
        }
        catch (error) {
            return undefined;
        }
    };
    DocumentReaderResults.prototype.getEncryptedContainers = function () {
        return this.getContainers([
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION,
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL,
            eRPRM_ResultType.RPRM_RESULT_TYPE_INTERNAL_LICENSE
        ]);
    };
    DocumentReaderResults.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DocumentReaderResults;
        result.chipPage = jsonObject["chipPage"];
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
    getTranslation: function (value) {
        switch (value) {
            case this.RFID_ERROR_NO_ERROR:
                return "RFID: No error";
            case this.RFID_ERROR_ALREADY_DONE:
                return "RFID: The requested operation is already performed";
            case this.RFID_ERROR_FAILED:
                return "RFID: Failed";
            case this.RFID_ERROR_NO_CHIP_DETECTED:
                return "RFID: No chip is detected";
            case this.RFID_ERROR_NOT_AVAILABLE:
                return "RFID: Unavailable";
            case this.RFID_ERROR_INVALID_PARAMETER:
                return "RFID: Invalid parameter in ExecuteCommand() call found";
            case this.RFID_ERROR_NOT_INITIALIZED:
                return "RFID: Device is uninitialized";
            case this.RFID_ERROR_NOT_ENOUGH_MEMORY:
                return "RFID: Out of memory";
            case this.RFID_ERROR_INVALID_DIRECTORY:
                return "RFID: Invalid directory";
            case this.RFID_ERROR_UNKNOWN_COMMAND:
                return "RFID: Unknown command";
            case this.RFID_ERROR_FILE_IO_ERROR:
                return "RFID File: IO Error";
            case this.RFID_ERROR_BUSY:
                return "RFID: RFID is busy";
            case this.RFID_ERROR_OLD_FIRMWARE:
                return "RFID: The firmware needs to be updated to a newer version";
            case this.RFID_ERROR_PCSC_FAILED:
                return "PCSC: Failed";
            case this.RFID_ERROR_PCSC_READER_NOT_AVAILABLE:
                return "PCSC: The reader is unavailable";
            case this.RFID_ERROR_PCSC_CANT_CONNECT_CARD:
                return "PCSC: The card cannot be connected";
            case this.RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED:
                return "PCSC: The card is not connected";
            case this.RFID_ERROR_PCSC_OPERATION_CANCELLED:
                return "PCSC: Operation is cancelled";
            case this.RFID_ERROR_PCSC_CARD_IS_BUSY:
                return "PCSC: The card is busy";
            case this.RFID_ERROR_PCSC_FAILED_SCARD:
                return "PCSC: Failed Smart Card";
            case this.RFID_ERROR_PCSC_EXT_LE_FAILED:
                return "PCSC: ExtLe Failed";
            case this.RFID_ERROR_LAYER6_SECURITY_MANAGER:
                return "LAYER6: Secure Messaging was not activated";
            case this.RFID_ERROR_LAYER6_APP_SELECTION_FAILURE:
                return "LAYER6: ISO7816_A_03 \"Application selection failure\"";
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL:
                return "LAYER6: ISO7816_B_01 \"Mutual authentication MAC failure\"";
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL:
                return "LAYER6: ISO7816_B_02 \"Mutual authentication encryption failure\"";
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure\"";
            case this.RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure data\"";
            case this.RFID_ERROR_LAYER6_SM_DO_8E_MISSING:
                return "LAYER6: SM failure – MAC missing";
            case this.RFID_ERROR_LAYER6_SM_DO_87_MISSING:
                return "LAYER6: SM failure – cryptogram missing";
            case this.RFID_ERROR_LAYER6_SM_DO_99_MISSING:
                return "LAYER6: SM failure – secured status bytes missing";
            case this.RFID_ERROR_LAYER6_SM_MAC_INCORRECT:
                return "LAYER6: SM failure – incorrect MAC";
            case this.RFID_ERROR_LAYER6_SM_DO_87_INCORRECT:
                return "LAYER6: SM failure – incorrect cryptogram";
            case this.RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA:
                return "LAYER6: Not TLV response data";
            case this.RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH:
                return "LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)";
            case this.RFID_ERROR_LAYER6_INT_AUTH_FAILURE:
                return "LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure";
            case this.RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE:
                return "LAYER6: MSE:Set KAT failure";
            case this.RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE:
                return "LAYER6: MSE:Set DST failure";
            case this.RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE:
                return "LAYER6: PSO CERTIFICATE failure";
            case this.RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE:
                return "LAYER6: MSE:Set AT failure";
            case this.RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE:
                return "LAYER6: GET CHALLENGE failure";
            case this.RFID_ERROR_LAYER6_EXT_AUTH_FAILURE:
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (external authentication) failure";
            case this.RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE:
                return "LAYER6: General Authenticity Failure";
            case this.RFID_ERROR_LAYER6_FILE_NOT_FOUND:
                return "LAYER6: File selection failure / file not found";
            case this.RFID_ERROR_LAYER6_FILE_EOF1:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case this.RFID_ERROR_LAYER6_FILE_EOF2:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case this.RFID_ERROR_LAYER6_INCORRECT_PARAMS:
                return "LAYER6: Incorrect params";
            case this.RFID_ERROR_LAYER6_NO_REFERENCE_DATA:
                return "LAYER6: No reference data";
            case this.RFID_ERROR_LAYER6_PWD_SUSPEND:
                return "LAYER6: PWD suspended";
            case this.RFID_ERROR_LAYER6_PWD_BLOCKED:
                return "LAYER6: PWD blocked";
            case this.RFID_ERROR_LAYER6_PWD_DEACTIVATED:
                return "LAYER6: PWD deactivated";
            case this.RFID_ERROR_LAYER6_PWD_BLOCKED2:
                return "LAYER6: PWD blocked 2";
            case this.RFID_ERROR_LAYER6_PWD_DEACTIVATED2:
                return "LAYER6: PWD deactivated 2";
            case this.RFID_ERROR_LAYER6_PWD_SUSPEND2:
                return "LAYER6: PWD suspended 2";
            case this.RFID_ERROR_LAYER6_PWD_FAILED:
                return "LAYER6: PWD failed";
            case this.RFID_ERROR_NOT_PERFORMED:
                return "RFID: Not performed";
            case this.RFID_ERROR_SESSION_IS_CLOSED:
                return "RFID: Session is closed";
            case this.RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION:
                return "RFID: Unsupported terminal operation";
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN:
                return "RFID: Terminal type unknown";
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE:
                return "RFID: Terminal type bad certificate";
            case this.RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET:
                return "RFID: Terminal type not set";
            case this.RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN:
                return "RFID: Unknown procedure type";
            case this.RFID_ERROR_Session_Procedure_Type_Unsupported:
                return "RFID: Unsupported procedure type";
            case this.RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET:
                return "RFID: Procedure type not set";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE:
                return "RFID: Access key unknown type";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE:
                return "RFID: Access key unsupported SM type";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE:
                return "RFID: Access key incorrect SM type";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED:
                return "RFID: Access key restricted";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA:
                return "RFID: Access key incorrect data";
            case this.RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET:
                return "RFID: Access key not set";
            case this.RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED:
                return "RFID: PWD management not authorized";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE:
                return "RFID: Access control unknown type";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM:
                return "RFID: Access control unknown type";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE:
                return "RFID: PACE required";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS:
                return "RFID: CA keys required";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA:
                return "RFID: TA required";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA:
                return "RFID: CA required";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA:
                return "RFID: Incorrect option CA";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED:
                return "RFID: CA failed";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED:
                return "RFID: TA failed";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED:
                return "RFID: AA failed";
            case this.RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED:
                return "RFID: RI failed";
            case this.RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED:
                return "RFID: SO signature check failed";
            case this.RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED:
                return "RFID: Hash check failed";
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY:
                return "RFID: Invalid aux data - date of expiry";
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH:
                return "RFID: Invalid aux data - date of birth";
            case this.RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID:
                return "RFID: Invalid aux data - community ID";
            case this.RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION:
                return "RFID: eSign requires app selection";
            case this.RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET:
                return "RFID: eSign PIN not set";
            case this.RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED:
                return "RFID: eSign PIN not verified";
            case this.RFID_ERROR_SESSION_INCORRECT_DATA:
                return "RFID: Incorrect data";
            case this.RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA:
                return "RFID file: Insufficient data";
            case this.RFID_ERROR_SESSION_FILE_INCORRECT_DATA:
                return "RFID file: Incorrect data";
            case this.RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA:
                return "RFID file: Unexpected data";
            case this.RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA:
                return "RFID file: Contains unexpected data";
            case this.RFID_ERROR_SESSION_FILE_WRONG_TAG:
                return "RFID file: Wrong tag";
            case this.RFID_ERROR_SESSION_FILE_CANT_USE_DATA:
                return "RFID file: Cannot use data";
            case this.RFID_ERROR_SESSION_FILE_CANT_READ_DATA:
                return "RFID file: Cannot read data";
            case this.RFID_ERROR_SESSION_FILE_ACCESS_DENIED:
                return "RFID file: Access denied";
            case this.RFID_ERROR_LAYER34_NO_ERROR:
                return "RFID: Layer 34 - No error";
            case this.RFID_ERROR_LAYER34_TIME_OUT:
                return "RFID: Layer 34 - Timeout";
            case this.RFID_ERROR_LAYER34_COLLISION:
                return "RFID: Layer 34 - Collision";
            case this.RFID_ERROR_LAYER34_CRC:
                return "RFID: Layer 34 - CRC";
            case this.RFID_ERROR_LAYER34_DATA_INTEGRITY:
                return "RFID: Layer 34 - Data integrity";
            case this.RFID_ERROR_LAYER34_DATA_LENGTH:
                return "RFID: Layer 34 - Data length";
            case this.RFID_ERROR_Layer34_RFU:
                return "RFID: Layer 34 - RFU";
            case this.RFID_ERROR_LAYER34_COLLISION_TOO_MANY:
                return "RFID: Layer 34 - Too many collision";
            case this.RFID_ERROR_LAYER34_PROTOCOL_B:
                return "RFID: Layer 34 - Protocol B";
            case this.RFID_ERROR_LAYER34_DATA_CONTENTS:
                return "RFID: Layer 34 - Data contents";
            case this.RFID_ERROR_LAYER34_PROTOCOL:
                return "RFID: Layer 34 - Protocol";
            case this.RFID_ERROR_LAYER34_GLOBAL_TIME_OUT:
                return "RFID: Layer 34 - Globa timeout";
            case this.RFID_ERROR_LAYER34_MIFARE_AUTH:
                return "RFID: Layer 34 - MIFARE auth";
            case this.RFID_ERROR_LAYER34_SAM_ERROR:
                return "RFID: Layer 34 - SAM error";
            case this.RFID_ERROR_LAYER34_SAM_COLLISION:
                return "RFID: Layer 34 - SAM collision";
            case this.RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE:
                return "RFID: Layer 34 - SAM acknowledge";
            default:
                return value.toString();
        }
    }
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
    getTranslation: function (value) {
        switch (value) {
            case this.ERR_LDS_OK:
                return "OK";
            case this.ERR_LDS_ASN_INCORRECT_DATA:
                return "Error - ASN: Incorrect data";
            case this.RR_LDS_ASN_NOT_ENOUGH_DATA:
                return "Error - ASN: Not enough data";
            case this.ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA:
                return "Error - ASN: Contents unexpected data";
            case this.ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA:
                return "Error - ASN Signed data: Incorrect data";
            case this.ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA:
                return "Error - ASN Signed data: Encap contents incorrect data";
            case this.ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA:
                return "Error - ASN Signed data: Version incorrect data";
            case this.ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA:
                return "Error - ASN Signed data: Digest algorithms incorrect data";
            case this.ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA:
                return "Error - ASN LDS object: Incorrect data";
            case this.ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA:
                return "Error - ASN LDS object: Version incorrect data";
            case this.ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA:
                return "Error - ASN LDS object: Digest algorithm incorrect data";
            case this.ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA:
                return "Error - ASN LDS object: DG hashes incorrect data";
            case this.ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA:
                return "Error - ASN LDS object: Version info incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA:
                return "Error - ASN Certificate: Incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA:
                return "Error - ASN Certificate: Version incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA:
                return "Error - ASN Certificate: SN incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA:
                return "Error - ASN Certificate: Signature incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA:
                return "Error - ASN Certificate: Issuer incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA:
                return "Error - ASN Certificate: Validity incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA:
                return "Error - ASN Certificate: Subject incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA:
                return "Error - ASN Certificate: Subject PK incorrect data";
            case this.ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA:
                return "Error - ASN Certificate: Extensions incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA:
                return "Error - ASN Signer info: Incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA:
                return "Error - ASN Signer info: Version incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA:
                return "Error - ASN Signer info: SID incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA:
                return "Error - ASN Signer info: Digest algorithms incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA:
                return "Error - ASN Signer info: Signed attributes incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA:
                return "Error - ASN Signer info: Sign algorithms incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA:
                return "Error - ASN Signer info: Signature incorrect data";
            case this.ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA:
                return "Error - ASN Signer info: Unsigned attributes incorrect data";
            case this.ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - ICAO LDS object: Unsupported digest algorithm";
            case -this.ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY:
                return "Error - ICAO Signed data: Signer info empty";
            case this.ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - ICAO Signer info: Unsupported digest algorithm";
            case this.ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Error - ICAO Signer info: Unsupported signature algorithm";
            case this.ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR:
                return "Error - ICAO Signer info: Message digest error";
            case this.ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED:
                return "Error - ICAO Signer info: Signed attributes missed";
            case this.ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE:
                return "Error - Auth: Signer info cannot find certificate";
            case this.ERR_LDS_AUTH_ERROR:
                return "Error - Auth: Error";
            case this.ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Error - Auth: Unsupported signature algorithm";
            case this.ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM:
                return "Error - Auth: Unsupported public key algorithm";
            case this.ERR_LDS_AUTH_MESSED_ALGORITHMS:
                return "Error - Auth: Messed algorithms";
            case this.ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID:
                return "Error - Auth: Public key data invalid";
            case this.ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID:
                return "Error - Auth: Algorithm parameters data invalid";
            case this.ERR_LDS_AUTH_SIGNATURE_DATA_INVALID:
                return "Error - Auth: Signature data invalid";
            case this.ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - Auth: Unsupported digest algorithm";
            case this.ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT:
                return "Error - Auth: Signature data incorrect";
            case this.ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED:
                return "Error - Auth: Algorithm parameters not defined";
            case this.ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED:
                return "Error - Auth: Signature check failed";
            case this.ERR_LDS_DG_WRONG_TAH:
                return "Error - DG: Wrong Tag";
            case this.ERR_LDS_PACE_INFO_NOT_AVAILABLE:
                return "Error - PACE: Info Not Available";
            case this.ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE:
                return "Error - PACE: Symmetric Cypher Cannot Initialize";
            case this.ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE:
                return "Error - PACE: Key Agreement Cannot Initialize";
            case this.ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE:
                return "Error - PACE: Ephemeral Keys Cannot Create";
            case this.ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE:
                return "Error - PACE: Mapping Cannot Decode Nonce";
            case this.ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE:
                return "Error - PACE: Shared Secret Cannot Create";
            case this.ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT:
                return "Error - PACE: Domain Params Unsupported Format";
            case this.ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT:
                return "Error - PACE: Ephemeral Keys Incorrect";
            case this.ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT:
                return "Error - PACE: Mapping Ephemeral Keys Incorrect";
            case this.ERR_LDS_PACE_MAPPING_CANT_PERFORM:
                return "Error - PACE: Mapping Cannot Perform";
            case this.ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS:
                return "Error - PACE: Non-Matching Auth Tokens";
            case this.ERR_LDS_CA_CANT_FIND_PUBLIC_KEY:
                return "Error - CA: Cannot Find Public Key";
            case this.ERR_LDS_CA_CANT_FIND_INFO:
                return "Error - CA: Cannot Find Info";
            case this.ERR_LDS_CA_INCORRECT_VERSION:
                return "Error - CA: Incorrect Version";
            case this.ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS:
                return "Error - CA: Cannot Find Domain Parameters";
            case this.ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE:
                return "Error - CA: Key Agreement Cannot Initialize";
            case this.ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - CA: Public Key Unsupported Algorithm";
            case this.ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE:
                return "Error - CA: Ephemeral Keys Cannot Create";
            case this.ERR_LDS_CA_SHARED_SECRET_CANT_CREATE:
                return "Error - CA: Shared Secret Cannot Create";
            case this.ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS:
                return "Error - CA: Non-Matching Auth Tokens";
            case this.ERR_LDS_TA_INCORRECT_VERSION:
                return "Error - TA: Incorrect Version";
            case this.ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN:
                return "Error - TA: Cannot Build Certificate Chain";
            case this.ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY:
                return "Error - TA: Cannot Find IS Private Key";
            case this.ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - TA: Public Key Unsupported Algorithm";
            case this.ERR_LDS_TA_SIGNATURE_BUILDING_ERROR:
                return "Error - TA: Signature Building Error";
            case this.ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS:
                return "Error - TA: Invalid Key Algorithm Parameters";
            case this.ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Error - AA: Public Key Unsupported Algorithm";
            case this.ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA:
                return "Error - AA: Public Key Incorrect Data";
            case this.ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS:
                return "Error - AA: Public Key Incorrect Parameters";
            case this.ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS:
                return "Error - AA: Public Key Undefined Parameters";
            case this.ERR_LDS_AA_SIGNATURE_INCORRECT_DATA:
                return "Error - AA: Signature Incorrect Data";
            case this.ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME:
                return "Error - AA: Unsupported recovery scheme";
            case this.ERR_LDS_AA_INCORRECT_TRAILER:
                return "Error - AA: Incorrect Trailer";
            case this.ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Error - AA: Unsupported Digest Algorithm";
            case this.ERR_LDS_RI_SECTOR_KEY_CANT_FIND:
                return "Error - RI: Sector Key Cannot Find";
            case this.ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA:
                return "Error - RI: Sector Key Incorrect Data";
            case this.ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA:
                return "Error - RI: Sector Key Incomplete Data";
            case this.ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK:
                return "Error - CV Certificate: Missing mandatory data PK";
            case this.ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED:
                return "Error - CV Certificate: Public key unsupported";
            case this.ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE:
                return "Error - CV Certificate: CHAT unsupported terminal type";
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED:
                return "Error - CV Certificate: Private key unsupported";
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS:
                return "Error - CV Certificate: Private key invalid params";
            case this.ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA:
                return "Error - CV Certificate: Incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA:
                return "Error - CV Certificate: CPI incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA:
                return "Error - CV Certificate: CAR incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA:
                return "Error - CV Certificate: Public key incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA:
                return "Error - CV Certificate: CHR incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA:
                return "Error - CV Certificate: CHAT incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA:
                return "Error - CV Certificate: Valid from incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA:
                return "Error - CV Certificate: Valid to incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA:
                return "Error - CV Certificate: Extensions incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA:
                return "Error - CV Certificate: Private key incorrect data";
            case this.ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING:
                return "Error - CV Certificate: Private key missing";
            case this.ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE:
                return "Error - BAP: Symmetric Cypher Cannot Initialize";
            case this.ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA:
                return "Error - DG: Contents unexpected data";
            case this.ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY:
                return "Error - ICAO Signed data: Signer info empty";
            case this.ERR_LDS_PACE_CAM_DATA_CANT_VERIFY:
                return "Error - PACE: CAM data cannot verify";
            case this.ERR_LDS_PACE_CAM_DATA_INCORRECT:
                return "Error - PACE: CAM data incorrect";
            case this.ERR_LDS_PACE_CAM_DATA_NON_MATCHING:
                return "Error - PACE: CAM data non-matching";
            case this.ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED:
                return "Error - PACE: Random mapping failed";
            case this.ERR_LDS_PACE_IM_SCHEME_INCORRECT:
                return "Error - PACE: IM scheme incorrect";
            case this.ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA:
                return "Error - VDS: Issuing country incorrect data";
            case this.ERR_LDS_VDS_ISSUING_COUNTRY_SIZE:
                return "Error - VDS: Issuing country size";
            case this.ERR_LDS_VDS_NC_INCORRECT_DATA:
                return "Error - VDS: Incorrect data";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE:
                return "Error - VDS: Missing or incorrect certificate";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA:
                return "Error - VDS: Missing or incorrect data";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER:
                return "Error - VDS: Missing or incorrect header";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY:
                return "Error - VDS: Missing or incorrect issuing country";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE:
                return "Error - VDS: Missing or incorrect message";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE:
                return "Error - VDS: Missing or incorrect signature";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM:
                return "Error - VDS: Missing or incorrect signature algorithm";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE:
                return "Error - VDS: Missing or incorrect signature value";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE:
                return "Error - VDS: Missing or incorrect type";
            case this.ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION:
                return "Error - VDS: Missing or incorrect version";
            case this.ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA:
                return "Error - VDS: Signature incorrect data";
            case this.ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA:
                return "Error - VDS: Signature certificate data";
            case this.ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE:
                return "Error - VDS: Signature certificate size";
            case this.ERR_LDS_VDS_UNSUPPORTED_VERSION:
                return "Error - VDS: Unsupported version";
            default:
                return value.toString();
        }
    }
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
    RPRM_RESULT_TYPE_STATUS: 33,
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
    COMPLETE: 1,
    PROCESS: 0,
    CANCEL: 2,
    ERROR: 3,
    NOTIFICATION: 5,
    PROCESS_WHITE_UV_IMAGES: 6,
    PROCESS_WHITE_FLASHLIGHT: 7,
    MORE_PAGES_AVAILABLE: 8,
    PROCESS_IR_FRAME: 9,
    TIMEOUT: 10,
    PROCESSING_ON_SERVICE: 11,
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
    LAST_DIAGNOSE_VALUE: 200,
};
export var RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
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
    getTranslation: function (value) {
        switch (value) {
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION:
                return "Notification - ASN certificate: Incorrect version";
            case this.NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM:
                return "Notification - ASN certificate: Non-matching signature algorithm";
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING:
                return "Notification - ASN certificate: Incorrect time coding";
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME:
                return "Notification - ASN certificate: Incorrect use of generalized time";
            case this.NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER:
                return "Notification - ASN certificate: Empty issuer";
            case this.NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT:
                return "Notification - ASN certificate: Empty subject";
            case this.NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION:
                return "Notification - ASN certificate: Unsupported critical extension";
            case this.NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE:
                return "Notification - ASN certificate: Forced default CSCA role";
            case this.NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE:
                return "Notification - ASN certificate: Forced Default DS role";
            case this.NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS:
                return "Notification - ASN certificate: Incorrect issuer subject DS";
            case this.NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS:
                return "Notification - ASN certificate: Duplicating extensions";
            case this.NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED:
                return "Notification - ICAO certificate: Version missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT:
                return "Notification - ICAO certificate: Version incorrect";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED:
                return "Notification - ICAO certificate: Issuer country missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED:
                return "Notification - ICAO certificate: Issuer common name missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer country non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED:
                return "Notification - ICAO certificate: Subject country missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED:
                return "Notification - ICAO certificate: Subject common name missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject country non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA:
                return "Notification - ICAO certificate: Using non-compliant data";
            case this.NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM:
                return "Notification - ICAO certificate: Unsupported signature algorithm";
            case this.NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM:
                return "Notification - ICAO certificate: Unsupported public key algorithm";
            case this.NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS:
                return "Notification - ICAO certificate: Missed extensions";
            case this.NTF_LDS_ICAO_CERTIFICATE_VALIDITY:
                return "Notification - ICAO certificate: Validity";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA:
                return "Notification - ICAO certificate extension: Using non-compliant data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED:
                return "Notification - ICAO certificate extension: Key usage missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Key usage not critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Key usage incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED:
                return "Notification - ICAO certificate extension: Basic constraints missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 1";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 2";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Basic constraints not critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Basic constraints incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED:
                return "Notification - ICAO certificate extension: Basic constraints path LenC missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT:
                return "Notification - ICAO certificate extension: Basic constraints path LenC incorrect";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL:
                return "Notification - ICAO certificate extension: Ext key usage not critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE:
                return "Notification - ICAO certificate extension: Ext key usage incorrect usage";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension Auth key: ID missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA:
                return "Notification - ICAO certificate extension Auth key: Incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension Auth key: Key ID missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED:
                return "Notification - ICAO certificate extension: Subject key ID missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Subject key ID incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED:
                return "Notification - ICAO certificate extension: Private key UP missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Private key UP incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY:
                return "Notification - ICAO certificate extension: Private key UP empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED:
                return "Notification - ICAO certificate extension: Subject alt name missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Subject alt name incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY:
                return "Notification - ICAO certificate extension: Subject alt name empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Subject alt name non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL:
                return "Notification - ICAO certificate extension: Subject alt name critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY:
                return "Notification - ICAO certificate extension: Subject alt name DN empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Subject alt name DN non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED:
                return "Notification - ICAO certificate extension: Issuer alt name missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY:
                return "Notification - ICAO certificate extension: Issuer alt name empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Issuer alt name non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Issuer alt name DN non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED:
                return "Notification - ICAO certificate extension Doc type list: Missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA:
                return "Notification - ICAO certificate extension Doc type list: Incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION:
                return "Notification - ICAO certificate extension Doc type list: Version";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES:
                return "Notification - ICAO certificate extension Doc type list: Doc types";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY:
                return "Notification - ICAO certificate extension Doc type list: Doc types empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Dert policies incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY:
                return "Notification - ICAO certificate extension: Cert policies empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED:
                return "Notification - ICAO certificate extension: Cert policies policy ID missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED:
                return "Notification - ICAO certificate extension: CRL dist point missed";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: CRL dist point incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY:
                return "Notification - ICAO certificate extension: CRL dist point empty";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED:
                return "Notification - ICAO certificate extension: CRL dist point point missed";
            case this.NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT:
                return "Notification - ICAO COM: LDS version incorrect";
            case this.NTF_LDS_ICAO_COM_LDS_VERSION_MISSING:
                return "Notification - ICAO COM: LDS version missing";
            case this.NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT:
                return "Notification - ICAO COM: Unicode version incorrect";
            case this.NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING:
                return "Notification - ICAO COM: Unicode version missing";
            case this.NTF_LDS_ICAO_COM_DGPM_INCORRECT:
                return "Notification - ICAO COM: DGPM incorrect";
            case this.NTF_LDS_ICAO_COM_DGPM_MISSING:
                return "Notification - ICAO COM: DGPM missing";
            case this.NTF_LDS_ICAO_COM_DGPM_UNEXPECTED:
                return "Notification - ICAO COM: DGPM unexpected";
            case this.NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED:
                return "Notification - ICAO application: LDS version unsupported";
            case this.NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED:
                return "Notification - ICAO application: Unicode version unsupported";
            case this.NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT:
                return "Notification - ICAO application: LDS version inconsistent";
            case this.NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT:
                return "Notification - ICAO application: Unicode version inconsistent";
            case this.NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT:
                return "Notification - ASN signed data: OID incorrect";
            case this.NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT:
                return "Notification - ASN signed data: Version incorrect";
            case this.NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT:
                return "Notification - ICAO signed data: Version incorrect";
            case this.NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY:
                return "Notification - ICAO signed data: Digest algorithms empty";
            case this.NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED:
                return "Notification - ICAO signed data: Digest algorithms unsupported";
            case this.NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES:
                return "Notification - ICAO signed data: Signer infos multiple entries";
            case this.NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED:
                return "Notification - ICAO signed data: Certificates missed";
            case this.NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY:
                return "Notification - ICAO signed data: Certificates empty";
            case this.NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE:
                return "Notification - ICAO signed data: CRLs incorrect usage";
            case this.NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID:
                return "Notification - ICAO LDS object: Incorrect content OID";
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT:
                return "Notification - ICAO LDS object: DG number incorrect";
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING:
                return "Notification - ICAO LDS object: DG hash missing";
            case this.NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA:
                return "Notification - ICAO LDS object: DG hash extra";
            case this.NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT:
                return "Notification - ICAO LDS object: Version incorrect";
            case this.NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT:
                return "Notification - ICAO master list: Version incorrect";
            case this.NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT:
                return "Notification - ASN signer info: Version incorrect";
            case this.NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE:
                return "Notification - ASN signer info: SID incorrect choice";
            case this.NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED:
                return "Notification - ASN signer info: SID digest algorithm not listed";
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING:
                return "Notification - ASN signer info: Message digest attr missing";
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA:
                return "Notification - ASN signer info: Message digest attr data";
            case this.NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value:
                return "Notification - ASN signer info: Message digest attr value";
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING:
                return "Notification - ASN signer info: Content type attr missing";
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA:
                return "Notification - ASN signer info: Content type attr data";
            case this.NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE:
                return "Notification - ASN signer info: Content type attr value";
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING:
                return "Notification - ASN signer info: Signing time attr missing";
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA:
                return "Notification - ASN signer info: Signing time attr data";
            case this.NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE:
                return "Notification - ASN signer info: Signing time attr value";
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY:
                return "Notification - Auth signer info: Certificate validity";
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED:
                return "Notification - Auth signer info: Certificate root is not trusted";
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA:
                return "Notification - Auth signer info: Certificate cannot find CSCA";
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED:
                return "Notification - Auth signer info: Certificate revoked";
            case this.NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID:
                return "Notification - Auth signer info: Certificate signature invalid";
            case this.NTF_LDS_UNSUPPORTED_IMAGE_FORMAT:
                return "Notification: Unsupported image format";
            case this.NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN:
                return "Notification - MRZ: Document type unknown";
            case this.NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR:
                return "Notification - MRZ: Issuing state syntax error";
            case this.NTF_LDS_MRZ_NAME_IS_VOID:
                return "Notification - MRZ: Name is void";
            case this.NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Number incorrect checksum";
            case this.NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR:
                return "Notification - MRZ: Nationality syntax error";
            case this.NTF_LDS_MRZ_DOB_SYNTAX_ERROR:
                return "Notification - MRZ: DOB syntax error";
            case this.NTF_LDS_MRZ_DOB_ERROR:
                return "Notification - MRZ: DOB error";
            case this.NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM:
                return "Notification - MRZ: DOB incorrect checksum";
            case this.NTF_LDS_MRZ_SEX_INCORRECT:
                return "Notification - MRZ: Sex incorrect";
            case this.NTF_LDS_MRZ_DOE_SYNTAX_ERROR:
                return "Notification - MRZ: DOE syntax error";
            case this.NTF_LDS_MRZ_DOE_ERROR:
                return "Notification - MRZ: DOE error";
            case this.NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM:
                return "Notification - MRZ: DOE incorrect checksum";
            case this.NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Optional data incorrect checksum";
            case this.NTF_LDS_MRZ_INCORRECT_CHECKSUM:
                return "Notification - MRZ: Incorrect checksum";
            case this.NTF_LDS_MRZ_INCORRECT:
                return "Notification - MRZ: Incorrect";
            case this.NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING:
                return "Notification - Biometrics: Format owner missing";
            case this.NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT:
                return "Notification - Biometrics: Format owner incorrect";
            case this.NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING:
                return "Notification - Biometrics: Format type missing";
            case this.NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT:
                return "Notification - Biometrics: Format type incorrect";
            case this.NTF_LDS_BIOMETRICS_TYPE_INCORRECT:
                return "Notification - Biometrics: Type incorrect";
            case this.NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING:
                return "Notification - Biometrics: Subtype missing";
            case this.NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT:
                return "Notification - Biometrics: Subtype incorrect";
            case this.NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING:
                return "Notification - Biometrics: BDB image missing";
            case this.NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT:
                return "Notification - Biometrics: BDB format ID incorrect";
            case this.NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT:
                return "Notification - Biometrics: BDB version incorrect";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT:
                return "Notification - Biometrics: BDB data length incorrect";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_GENDER:
                return "Notification - Biometrics: BDB Data Gender";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR:
                return "Notification - Biometrics: BDB Data Eye Color";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR:
                return "Notification - Biometrics: BDB Data Hair Color";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW:
                return "Notification - Biometrics: BDB Data Pose Angle Yaw";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH:
                return "Notification - Biometrics: BDB Data Pose Angle Pitch";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL:
                return "Notification - Biometrics: BDB Data Pose Angle Roll";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW:
                return "Notification - Biometrics: BDB Data Pose Angle U Yaw";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH:
                return "Notification - Biometrics: BDB Data Pose Angle U Pitch";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL:
                return "Notification - Biometrics: BDB Data Pose Angle U Roll";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE:
                return "Notification - Biometrics: BDB Data Face Image Type";
            case this.NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE:
                return "Notification - Biometrics: BDB Data Image Data Type";
            case this.NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS:
                return "Notification - SI: PACE Info Unsupported Std Parameters";
            case this.NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION:
                return "Notification - SI: PACE Info Deprecated Version";
            case this.NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF:
                return "Notification - SI: PACE Domain Params Using Std Ref";
            case this.NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: PACE Domain Params Unsupported Algorithm";
            case this.NTF_LDS_SI_CA_INFO_INCORRECT_VERSION:
                return "Notification - SI: CA Info Incorrect Version";
            case this.NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: CA PublicKey Unsupported Algorithm";
            case this.NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: CA Domain Params Unsupported Algorithm";
            case this.NTF_LDS_SI_TA_INFO_INCORRECT_VERSION:
                return "Notification - SI: TA Info Incorrect Version";
            case this.NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2:
                return "Notification - SI: TA Info File ID For Version 2";
            case this.NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM:
                return "Notification - SI: eID Security Unsupported Digest Algorithm";
            case this.NTF_LDS_SI_RI_INFO_INCORRECT_VERSION:
                return "Notification - SI: RI info incorrect version";
            case this.NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: RI domain params unsupported algorithm";
            case this.NTF_LDS_SI_AA_INFO_INCORRECT_VERSION:
                return "Notification - SI: AA info incorrect version";
            case this.NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM:
                return "Notification - SI: AA info unsupported algorithm";
            case this.NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE:
                return "Notification - SI: AA info inconsistent algorithm reference";
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE:
                return "Notification - SI: PACE Info Not Available";
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS:
                return "Notification - SI: PACE Info No Std Parameters";
            case this.NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS:
                return "Notification - SI: PACE Info No Matching Domain Params";
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE:
                return "Notification - SI: CA Info Not Available";
            case this.NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION:
                return "Notification - SI: CA Domain Params No Required Option";
            case this.NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE:
                return "Notification - SI: CA Domain Params Not Available";
            case this.NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS:
                return "Notification - SI: CA Anonymous Infos";
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS:
                return "Notification - SI: CA Info No Matching Domain Params";
            case this.NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY:
                return "Notification - SI: CA Info No Matching Public Key";
            case this.NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY:
                return "Notification - SI: CA Incorrect Infos Quantity";
            case this.NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE:
                return "Notification - SI: TA Info Not Available";
            case this.NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES:
                return "Notification - SI: Card Info Locator Multiple Entries";
            case this.NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES:
                return "Notification - SI: eID Security Info Multiple Entries";
            case this.NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES:
                return "Notification - SI: Privileged TI Multiple Entries";
            case this.NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE:
                return "Notification - SI: Privileged TI Incorrect Usage";
            case this.NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES:
                return "Notification - SI: RI domain params multiple entries";
            case this.NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT:
                return "Notification - SI: Storage PACE Info Non Consistant";
            case this.NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION:
                return "Notification - CV Certificate: Profile incorrect version";
            case this.NTF_LDS_CV_CERTIFICATE_VALIDITY:
                return "Notification - CV Certificate: Validity";
            case this.NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS:
                return "Notification - CV Certificate: Non CVCA domain parameters";
            case this.NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION:
                return "Notification - CV Certificate: Private key incorrect version";
            case this.NTF_LDS_TA_PACE_STATIC_BINDING_USED:
                return "Notification - TA: PACE static binding used";
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY:
                return "Notification - Auth ML signer info: Certificate validity";
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED:
                return "Notification - Auth ML signer info: Certificate root is not trusted";
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA:
                return "Notification - Auth ML signer info: Certificate cannot find CSCA";
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED:
                return "Notification - Auth ML signer info: Certificate revoked";
            case this.NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID:
                return "Notification - Auth ML signer info: Certificate signature invalid";
            case this.NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT:
                return "Notification - ASN signed data: Content OID incorrect";
            case this.NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA:
                return "Notification - ASN signer info: List content description attr data";
            case this.NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING:
                return "Notification - ASN signer info: List content description attr missing";
            case this.NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT:
                return "Notification - BSI: Black list version incorrect";
            case this.NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT:
                return "Notification - BSI: Defect  list version incorrect";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING:
                return "Notification - ICAO certificate extension: CSCA alt names non-matching";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL:
                return "Notification - ICAO certificate extension Doc type list: Critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT:
                return "Notification - ICAO certificate extension Doc type list: non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL:
                return "Notification - ICAO certificate extension: Issuer alt name critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL:
                return "Notification - ICAO certificate extension: Name change critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA:
                return "Notification - ICAO certificate extension: Name change incorrect data";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT:
                return "Notification - ICAO certificate extension: Name change non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL:
                return "Notification - ICAO certificate extension: Optional critical";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer attribute non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: Issuer SN non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING:
                return "Notification - ICAO certificate: Issuer subject country non-matching";
            case this.NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: SN non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject attribute non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject common name non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject non-compliant";
            case this.NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT:
                return "Notification - ICAO certificate: Subject SN non-compliant";
            case this.NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT:
                return "Notification - ICAO Deviation list: Version incorrect";
            default:
                return value.toString();
        }
    }
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
    DOCUMENT_CANCELLING_DETECTOR: 28,
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
    getTranslation: function (value) {
        switch (value) {
            case this.GF_PORTRAIT:
                return "Portrait";
            case this.GF_FINGERPR:
                return "Fingerprint";
            case this.GF_EYE:
                return "Iris";
            case this.GF_SIGNATURE:
                return "Signature";
            case this.GF_BAR_CODE:
                return "Barcode";
            case this.GF_PROOF_OF_CITIZENSHIP:
                return "Proof of citizenship";
            case this.GF_DOCUMENT_IMAGE:
                return "Document image";
            case this.GF_COLOR_DYNAMIC:
                return "Color dynamics";
            case this.GF_GHOST_PORTRAIT:
                return "Ghost portrait";
            case this.GF_STAMP:
                return "Stamp";
            case this.GF_PORTRAIT_OF_CHILD:
                return "Portrait of child";
            case this.GF_OTHER:
                return "Other";
            case this.GF_FINGER_LEFT_THUMB:
                return "Left thumb";
            case this.GF_FINGER_LEFT_INDEX:
                return "Left index finger";
            case this.GF_FINGER_LEFT_MIDDLE:
                return "Left middle finger";
            case this.GF_FINGER_LEFT_RING:
                return "Left ring finger";
            case this.GF_FINGER_LEFT_LITTLE:
                return "Left little finger";
            case this.GF_FINGER_RIGHT_THUMB:
                return "Right thumb";
            case this.GF_FINGER_RIGHT_INDEX:
                return "Right index finger";
            case this.GF_FINGER_RIGHT_MIDDLE:
                return "Right middle finger";
            case this.GF_FINGER_RIGHT_RING:
                return "Right ring finger";
            case this.GF_FINGER_RIGHT_LITTLE:
                return "Right little finger";
            default:
                return value.toString();
        }
    }
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
    getTranslation: function (value) {
        switch (value) {
            case this.DFT_MIFARE_DATA:
                return "MIFARE data";
            case this.DFT_DL_COM:
                return "EF.COM";
            case this.DFT_PASSPORT_DG1:
                return "Machine Readable Zone (DG1)";
            case this.DFT_ID_DG1:
                return "Document type" + " (DG1)";
            case this.DFT_DL_DG1:
                return "Text data elements (DG1)";
            case this.DFT_PASSPORT_DG2:
                return "Biometry - Facial data (DG2)";
            case this.DFT_ID_DG2:
                return "Issuing state" + " (DG2)";
            case this.DFT_DL_DG2:
                return "License holder information (DG2)";
            case this.DFT_PASSPORT_DG3:
                return "Biometry - Fingerprint(s) (DG3)";
            case this.DFT_ID_DG3:
                return "Date of expiry" + " (DG3)";
            case this.DFT_DL_DG3:
                return "Issuing authority details (DG3)";
            case this.DFT_PASSPORT_DG4:
                return "Biometry - Iris Data (DG4)";
            case this.DFT_ID_DG4:
                return "Given name" + " (DG4)";
            case this.DFT_DL_DG4:
                return "Portrait image (DG4)";
            case this.DFT_PASSPORT_DG5:
                return "Portrait(s) (DG5)";
            case this.DFT_ID_DG5:
                return "Surname/given name at birth" + " (DG5)";
            case this.DFT_DL_DG5:
                return "Signature / usual mark image (DG5)";
            case this.DFT_PASSPORT_DG6:
                return "not defined (DG6)";
            case this.DFT_ID_DG6:
                return "Pseudonym" + " (DG6)";
            case this.DFT_DL_DG6:
                return "Biometry - Facial data (DG6)";
            case this.DFT_PASSPORT_DG7:
                return "Signature / usual mark image (DG7)";
            case this.DFT_ID_DG7:
                return "Academic title" + " (DG7)";
            case this.DFT_DL_DG7:
                return "Biometry - Fingerprint(s) (DG7)";
            case this.DFT_PASSPORT_DG8:
                return "not defined (DG8)";
            case this.DFT_ID_DG8:
                return "Date of birth" + " (DG8)";
            case this.DFT_DL_DG8:
                return "Biometry - Iris Data (DG8)";
            case this.DFT_PASSPORT_DG9:
                return "not defined (DG9)";
            case this.DFT_ID_DG9:
                return "Place of birth" + " (DG9)";
            case this.DFT_DL_DG9:
                return "Biometry - Other (DG9)";
            case this.DFT_PASSPORT_DG10:
                return "not defined (DG10)";
            case this.DFT_ID_DG10:
                return "Nationality" + " (DG10)";
            case this.DFT_DL_DG10:
                return "not defined (DG10)";
            case this.DFT_PASSPORT_DG11:
                return "Additional personal detail(s) (DG11)";
            case this.DFT_ID_DG11:
                return "Sex" + " (DG11)";
            case this.DFT_DL_DG11:
                return "Optional domestic data (DG11)";
            case this.DFT_PASSPORT_DG12:
                return "Additional document details (DG12)";
            case this.DFT_ID_DG12:
                return "Optional details" + " (DG12)";
            case this.DFT_DL_DG12:
                return "Non-match alert (DG12)";
            case this.DFT_PASSPORT_DG13:
                return "Optional detail(s) (DG13)";
            case this.DFT_ID_DG13:
                return "Undefined" + " (DG13)";
            case this.DFT_DL_DG13:
                return "Active Authentication info (DG13)";
            case this.DFT_PASSPORT_DG14:
                return "EAC info (DG14)";
            case this.DFT_ID_DG14:
                return "Undefined" + " (DG14)";
            case this.DFT_DL_DG14:
                return "EAC info (DG14)";
            case this.DFT_PASSPORT_DG15:
                return "Active Authentication info (DG15)";
            case this.DFT_ID_DG15:
                return "Undefined" + " (DG15)";
            case this.DFT_PASSPORT_DG16:
                return "Person(s) to notify (DG16)";
            case this.DFT_ID_DG16:
                return "Undefined" + " (DG16)";
            case this.DFT_PASSPORT_DG17:
                return "DG17";
            case this.DFT_ID_DG17:
                return "Place of registration" + " (DG17)";
            case this.DFT_PASSPORT_DG18:
                return "DG18";
            case this.DFT_ID_DG18:
                return "Place of registration" + " (DG18)";
            case this.DFT_PASSPORT_DG19:
                return "DG19";
            case this.DFT_ID_DG19:
                return "Residence permit 1" + " (DG19)";
            case this.DFT_PASSPORT_DG20:
                return "DG20";
            case this.DFT_ID_DG20:
                return "Residence permit 2" + " (DG20)";
            case this.DFT_ID_DG21:
                return "Optional details" + " (DG21)";
            case this.DFT_DL_SOD:
                return "EF.SOD";
            case this.DFT_PASSPORT_CVCA:
                return "EF.CVCA";
            case this.DFT_MIFARE_VALIDITY:
                return "MIFARE validity";
            case this.DFT_PACE_CARDACCESS:
                return "EF.CardAccess";
            case this.DFT_PACE_CARDSECURITY:
                return "EF.CardSecurity";
            case this.DFT_PACE_CHIPSECURITY:
                return "EF.ChipSecurity";
            case this.DFT_CERTIFICATE:
                return "Certificate";
            case this.DFT_APP_DIRECTORY:
                return "App directory";
            case this.DFT_ATR:
                return "DFT_ATR";
            case this.DFT_CHIP_PROPERTIES:
                return "DFT_CHIP_PROPERTIES";
            case this.DFT_DEFECTLIST:
                return "DFT_DEFECTLIST";
            case this.DFT_DEVIATIONLIST:
                return "DFT_DEVIATIONLIST";
            case this.DFT_DL_CE:
                return "DFT_DL_CE";
            case this.DFT_DL_CVCA:
                return "DFT_DL_CVCA";
            case this.DFT_ESIGN_PK:
                return "DFT_ESIGN_PK";
            case this.DFT_ESIGN_SIGNEDDATA:
                return "DFT_ESIGN_SIGNEDDATA";
            case this.DFT_LOGDATA:
                return "DFT_LOGDATA";
            case this.DFT_MASTERLIST:
                return "DFT_MASTERLIST";
            case this.DFT_SESSION:
                return "DFT_SESSION";
            case this.DFT_UNSPECIFIED:
                return "DFT_UNSPECIFIED";
            case this.DFT_USERDEFINED:
                return "DFT_USERDEFINED";
            default:
                return value.toString();
        }
    }
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
    getTranslation: function (value) {
        switch (value) {
            case this.FT_DOCUMENT_CLASS_CODE:
                return "Document class code";
            case this.FT_ISSUING_STATE_CODE:
                return "Issuing state code";
            case this.FT_DOCUMENT_NUMBER:
                return "Document number";
            case this.FT_DATE_OF_EXPIRY:
                return "Date of expiry";
            case this.FT_DATE_OF_ISSUE:
                return "Date of issue";
            case this.FT_DATE_OF_BIRTH:
                return "Date of birth";
            case this.FT_PLACE_OF_BIRTH:
                return "Place of birth";
            case this.FT_PERSONAL_NUMBER:
                return "Personal number";
            case this.FT_SURNAME:
                return "Surname";
            case this.FT_GIVEN_NAMES:
                return "Given name";
            case this.FT_MOTHERS_NAME:
                return "Mother\'s name";
            case this.FT_NATIONALITY:
                return "Nationality";
            case this.FT_SEX:
                return "Sex";
            case this.FT_HEIGHT:
                return "Height";
            case this.FT_WEIGHT:
                return "Weight";
            case this.FT_EYES_COLOR:
                return "Eye color";
            case this.FT_HAIR_COLOR:
                return "Hair color";
            case this.FT_ADDRESS:
                return "Address";
            case this.FT_DONOR:
                return "Donor";
            case this.FT_SOCIAL_SECURITY_NUMBER:
                return "Social insurance number";
            case this.FT_DL_CLASS:
                return "DL category";
            case this.FT_DL_ENDORSED:
                return "DL endorsement code";
            case this.FT_DL_RESTRICTION_CODE:
                return "DL Restriction Code";
            case this.FT_DL_UNDER_21_DATE:
                return "Date of 21st birthday";
            case this.FT_AUTHORITY:
                return "Issuing authority";
            case this.FT_SURNAME_AND_GIVEN_NAMES:
                return "Surname and given names";
            case this.FT_NATIONALITY_CODE:
                return "Nationality code";
            case this.FT_PASSPORT_NUMBER:
                return "Passport number";
            case this.FT_INVITATION_NUMBER:
                return "Invitation number";
            case this.FT_VISA_ID:
                return "Visa ID";
            case this.FT_VISA_CLASS:
                return "Visa Class";
            case this.FT_VISA_SUB_CLASS:
                return "Visa subclass";
            case this.FT_MRZ_STRING_1:
                return "MRZ line 1";
            case this.FT_MRZ_STRING_2:
                return "MRZ line 2";
            case this.FT_MRZ_STRING_3:
                return "MRZ line 3";
            case this.FT_MRZ_TYPE:
                return "MRZ Type";
            case this.FT_OPTIONAL_DATA:
                return "Optional data";
            case this.FT_DOCUMENT_CLASS_NAME:
                return "Document class";
            case this.FT_ISSUING_STATE_NAME:
                return "Issuing state";
            case this.FT_PLACE_OF_ISSUE:
                return "Place of issue";
            case this.FT_DOCUMENT_NUMBER_CHECKSUM:
                return "Checksum for document number";
            case this.FT_DATE_OF_BIRTH_CHECKSUM:
                return "Checksum for date of birth";
            case this.FT_DATE_OF_EXPIRY_CHECKSUM:
                return "Checksum for date of expiry";
            case this.FT_PERSONAL_NUMBER_CHECKSUM:
                return "Checksum for personal number";
            case this.FT_FINAL_CHECKSUM:
                return "Final checksum";
            case this.FT_PASSPORT_NUMBER_CHECKSUM:
                return "Checksum for passport number";
            case this.FT_INVITATION_NUMBER_CHECKSUM:
                return "Checksum for invitation number";
            case this.FT_VISA_ID_CHECKSUM:
                return "Checksum for visa ID";
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM:
                return "Checksum for surname and given names";
            case this.FT_VISA_VALID_UNTIL_CHECKSUM:
                return "Checksum for visa expiry date";
            case this.FT_OTHER:
                return "Other";
            case this.FT_MRZ_STRINGS:
                return "MRZ lines";
            case this.FT_NAME_SUFFIX:
                return "Name suffix";
            case this.FT_NAME_PREFIX:
                return "Name prefix";
            case this.FT_DATE_OF_ISSUE_CHECKSUM:
                return "Checksum for date of issue";
            case this.FT_DATE_OF_ISSUE_CHECK_DIGIT:
                return "Check digit for date of issue";
            case this.FT_DOCUMENT_SERIES:
                return "Document series";
            case this.FT_REG_CERT_REG_NUMBER:
                return "Registration number";
            case this.FT_REG_CERT_CAR_MODEL:
                return "Vehicle model";
            case this.FT_REG_CERT_CAR_COLOR:
                return "Vehicle color";
            case this.FT_REG_CERT_BODY_NUMBER:
                return "Body number";
            case this.FT_REG_CERT_CAR_TYPE:
                return "Vehicle type";
            case this.FT_REG_CERT_MAX_WEIGHT:
                return "Max permissible weight";
            case this.FT_REG_CERT_WEIGHT:
                return "Unladen mass";
            case this.FT_ADDRESS_AREA:
                return "Area";
            case this.FT_ADDRESS_STATE:
                return "State";
            case this.FT_ADDRESS_BUILDING:
                return "Unit";
            case this.FT_ADDRESS_HOUSE:
                return "Building";
            case this.FT_ADDRESS_FLAT:
                return "Apartment";
            case this.FT_PLACE_OF_REGISTRATION:
                return "Place of registration";
            case this.FT_DATE_OF_REGISTRATION:
                return "Date of registration";
            case this.FT_RESIDENT_FROM:
                return "Resident from";
            case this.FT_RESIDENT_UNTIL:
                return "Resident until";
            case this.FT_AUTHORITY_CODE:
                return "Issuing authority code";
            case this.FT_PLACE_OF_BIRTH_AREA:
                return "Country/region of birth";
            case this.FT_PLACE_OF_BIRTH_STATE_CODE:
                return "Birth state code";
            case this.FT_ADDRESS_STREET:
                return "Street";
            case this.FT_ADDRESS_CITY:
                return "City";
            case this.FT_ADDRESS_JURISDICTION_CODE:
                return "Jurisdiction code";
            case this.FT_ADDRESS_POSTAL_CODE:
                return "Postal code";
            case this.FT_DOCUMENT_NUMBER_CHECK_DIGIT:
                return "Check digit for document number";
            case this.FT_DATE_OF_BIRTH_CHECK_DIGIT:
                return "Check digit for date of birth";
            case this.FT_DATE_OF_EXPIRY_CHECK_DIGIT:
                return "Check digit for date of expiry";
            case this.FT_PERSONAL_NUMBER_CHECK_DIGIT:
                return "Check digit for personal number";
            case this.FT_FINAL_CHECK_DIGIT:
                return "Final check digit";
            case this.FT_PASSPORT_NUMBER_CHECK_DIGIT:
                return "Check digit for passport number";
            case this.FT_INVITATION_NUMBER_CHECK_DIGIT:
                return "Check digit for invitation number";
            case this.FT_VISA_ID_CHECK_DIGIT:
                return "Check digit for visa ID";
            case this.FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT:
                return "Check digit for surname and given names";
            case this.FT_VISA_VALID_UNTIL_CHECK_DIGIT:
                return "Check digit for visa expiry date";
            case this.FT_PERMIT_DL_CLASS:
                return "Permit class";
            case this.FT_PERMIT_DATE_OF_EXPIRY:
                return "Permit expiry date";
            case this.FT_PERMIT_IDENTIFIER:
                return "Permit identifier";
            case this.FT_PERMIT_DATE_OF_ISSUE:
                return "Permit issue date";
            case this.FT_PERMIT_RESTRICTION_CODE:
                return "Permit restriction code";
            case this.FT_PERMIT_ENDORSED:
                return "Permit endorsement code";
            case this.FT_ISSUE_TIMESTAMP:
                return "Issue time";
            case this.FT_NUMBER_OF_DUPLICATES:
                return "Number of duplicates";
            case this.FT_MEDICAL_INDICATOR_CODES:
                return "Medical notes/codes";
            case this.FT_NON_RESIDENT_INDICATOR:
                return "Non-resident indicator";
            case this.FT_VISA_TYPE:
                return "Visa type";
            case this.FT_VISA_VALID_FROM:
                return "Visa valid from";
            case this.FT_VISA_VALID_UNTIL:
                return "Visa valid until";
            case this.FT_DURATION_OF_STAY:
                return "Duration of stay";
            case this.FT_NUMBER_OF_ENTRIES:
                return "Number of entries";
            case this.FT_DAY:
                return "Day";
            case this.FT_MONTH:
                return "Month";
            case this.FT_YEAR:
                return "Year";
            case this.FT_UNIQUE_CUSTOMER_IDENTIFIER:
                return "Unique customer identifier";
            case this.FT_COMMERCIAL_VEHICLE_CODES:
                return "Commercial vehicle code";
            case this.FT_AKA_DATE_OF_BIRTH:
                return "AKA: Date of birth";
            case this.FT_AKA_SOCIAL_SECURITY_NUMBER:
                return "AKA: Social Insurance Number";
            case this.FT_AKA_SURNAME:
                return "AKA: Surname";
            case this.FT_AKA_GIVEN_NAMES:
                return "AKA: Given name";
            case this.FT_AKA_NAME_SUFFIX:
                return "AKA: Name suffix";
            case this.FT_AKA_NAME_PREFIX:
                return "AKA: Name prefix";
            case this.FT_MAILING_ADDRESS_STREET:
                return "Mailing address - street";
            case this.FT_MAILING_ADDRESS_CITY:
                return "Mailing address - city";
            case this.FT_MAILING_ADDRESS_JURISDICTION_CODE:
                return "Mailing address - jurisdiction code";
            case this.FT_MAILING_ADDRESS_POSTAL_CODE:
                return "Mailing address - postal code";
            case this.FT_AUDIT_INFORMATION:
                return "Number for validation";
            case this.FT_INVENTORY_NUMBER:
                return "Inventory number";
            case this.FT_RACE_ETHNICITY:
                return "Race/ethnicity";
            case this.FT_JURISDICTION_VEHICLE_CLASS:
                return "Jurisdiction vehicle class";
            case this.FT_JURISDICTION_ENDORSEMENT_CODE:
                return "Jurisdiction endorsement code";
            case this.FT_JURISDICTION_RESTRICTION_CODE:
                return "Jurisdiction restriction code";
            case this.FT_FAMILY_NAME:
                return "Surname/given name at birth";
            case this.FT_GIVEN_NAMES_RUS:
                return "Given name (National)";
            case this.FT_VISA_ID_RUS:
                return "Visa ID (National)";
            case this.FT_FATHERS_NAME:
                return "Father\'s name";
            case this.FT_FATHERS_NAME_RUS:
                return "Father\'s name (National)";
            case this.FT_SURNAME_AND_GIVEN_NAMES_RUS:
                return "Surname and given names (National)";
            case this.FT_PLACE_OF_BIRTH_RUS:
                return "Place of birth (National)";
            case this.FT_AUTHORITY_RUS:
                return "Issuing authority (National)";
            case this.FT_ISSUING_STATE_CODE_NUMERIC:
                return "Numeric issuing state code";
            case this.FT_NATIONALITY_CODE_NUMERIC:
                return "Numeric nationality code";
            case this.FT_ENGINE_POWER:
                return "Engine power";
            case this.FT_ENGINE_VOLUME:
                return "Engine volume";
            case this.FT_CHASSIS_NUMBER:
                return "Chassis number";
            case this.FT_ENGINE_NUMBER:
                return "Engine number";
            case this.FT_ENGINE_MODEL:
                return "Engine model";
            case this.FT_VEHICLE_CATEGORY:
                return "Vehicle category";
            case this.FT_IDENTITY_CARD_NUMBER:
                return "Identity card number";
            case this.FT_CONTROL_NO:
                return "Control number";
            case this.FT_PARRENTS_GIVEN_NAMES:
                return "Parents\' given names";
            case this.FT_SECOND_SURNAME:
                return "Second surname";
            case this.FT_MIDDLE_NAME:
                return "Middle name";
            case this.FT_REG_CERT_VIN:
                return "Vehicle identification number";
            case this.FT_REG_CERT_VIN_CHECK_DIGIT:
                return "Check digit for VIN";
            case this.FT_REG_CERT_VIN_CHECKSUM:
                return "Checksum for VIN";
            case this.FT_LINE_1_CHECK_DIGIT:
                return "Check digit for line 1";
            case this.FT_LINE_2_CHECK_DIGIT:
                return "Check digit for line 2";
            case this.FT_LINE_3_CHECK_DIGIT:
                return "Check digit for line 3";
            case this.FT_LINE_1_CHECKSUM:
                return "Checksum for line 1";
            case this.FT_LINE_2_CHECKSUM:
                return "Checksum for line 2";
            case this.FT_LINE_3_CHECKSUM:
                return "Checksum for line 3";
            case this.FT_REG_CERT_REG_NUMBER_CHECK_DIGIT:
                return "Check digit for registration number";
            case this.FT_REG_CERT_REG_NUMBER_CHECKSUM:
                return "Checksum for registration number";
            case this.FT_REG_CERT_VEHICLE_ITS_CODE:
                return "Vehicle ITS code";
            case this.FT_CARD_ACCESS_NUMBER:
                return "Card access number";
            case this.FT_MARITAL_STATUS:
                return "Marital status";
            case this.FT_COMPANY_NAME:
                return "Company name";
            case this.FT_SPECIAL_NOTES:
                return "Special notes";
            case this.FT_SURNAME_OF_SPOSE:
                return "Spouse\'s surname";
            case this.FT_TRACKING_NUMBER:
                return "Tracking number";
            case this.FT_BOOKLET_NUMBER:
                return "Booklet number";
            case this.FT_CHILDREN:
                return "Children";
            case this.FT_COPY:
                return "Copy";
            case this.FT_SERIAL_NUMBER:
                return "Serial number";
            case this.FT_DOSSIER_NUMBER:
                return "Dossier number";
            case this.FT_AKA_SURNAME_AND_GIVEN_NAMES:
                return "AKA: Surname and given names";
            case this.FT_TERRITORIAL_VALIDITY:
                return "Territorial validity";
            case this.FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS:
                return "MRZ lines with correct checksums";
            case this.FT_DL_CDL_RESTRICTION_CODE:
                return "CDL Restriction Code";
            case this.FT_DL_UNDER_18_DATE:
                return "Date of 18th birthday";
            case this.FT_DL_RECORD_CREATED:
                return "Record created";
            case this.FT_DL_DUPLICATE_DATE:
                return "Date of duplicate issue";
            case this.FT_DL_ISS_TYPE:
                return "Card type";
            case this.FT_MILITARY_BOOK_NUMBER:
                return "Military ID number";
            case this.FT_DESTINATION:
                return "Destination";
            case this.FT_BLOOD_GROUP:
                return "Blood group";
            case this.FT_SEQUENCE_NUMBER:
                return "Sequence number";
            case this.FT_REG_CERT_BODY_TYPE:
                return "Body type";
            case this.FT_REG_CERT_CAR_MARK:
                return "Vehicle make";
            case this.FT_TRANSACTION_NUMBER:
                return "Transaction number";
            case this.FT_AGE:
                return "Age";
            case this.FT_FOLIO_NUMBER:
                return "Folio number";
            case this.FT_VOTER_KEY:
                return "Voter Key";
            case this.FT_ADDRESS_MUNICIPALITY:
                return "Municipality";
            case this.FT_ADDRESS_LOCATION:
                return "Location";
            case this.FT_SECTION:
                return "Section";
            case this.FT_OCR_NUMBER:
                return "OCR number";
            case this.FT_FEDERAL_ELECTIONS:
                return "Federal elections";
            case this.FT_REFERENCE_NUMBER:
                return "Unique number";
            case this.FT_OPTIONAL_DATA_CHECKSUM:
                return "Checksum for optional data";
            case this.FT_OPTIONAL_DATA_CHECK_DIGIT:
                return "Check digit for optional data";
            case this.FT_VISA_NUMBER:
                return "Visa Number";
            case this.FT_VISA_NUMBER_CHECKSUM:
                return "Checksum for visa number";
            case this.FT_VISA_NUMBER_CHECK_DIGIT:
                return "Check digit for visa number";
            case this.FT_VOTER:
                return "Voter";
            case this.FT_PREVIOUS_TYPE:
                return "Type/number of the previous document";
            case this.FT_FIELD_FROM_MRZ:
                return "Field from MRZ";
            case this.FT_CURRENT_DATE:
                return "Current date";
            case this.FT_STATUS_DATE_OF_EXPIRY:
                return "Status Expiry Date";
            case this.FT_BANKNOTE_NUMBER:
                return "Banknote number";
            case this.FT_CSC_CODE:
                return "CSC Code";
            case this.FT_ARTISTIC_NAME:
                return "Pseudonym";
            case this.FT_ACADEMIC_TITLE:
                return "Academic title";
            case this.FT_ADDRESS_COUNTRY:
                return "Country";
            case this.FT_ADDRESS_ZIPCODE:
                return "ZIP code";
            case this.FT_E_ID_RESIDENCE_PERMIT_1:
                return "Residence permit 1";
            case this.FT_E_ID_RESIDENCE_PERMIT_2:
                return "Residence permit 2";
            case this.FT_E_ID_PLACE_OF_BIRTH_STREET:
                return "Place of birth: Street";
            case this.FT_E_ID_PLACE_OF_BIRTH_CITY:
                return "Place of birth: City";
            case this.FT_E_ID_PLACE_OF_BIRTH_STATE:
                return "Place of birth: State";
            case this.FT_E_ID_PLACE_OF_BIRTH_COUNTRY:
                return "Place of birth: Country";
            case this.FT_E_ID_PLACE_OF_BIRTH_ZIPCODE:
                return "Place of birth: Postal code";
            case this.FT_CDL_CLASS:
                return "CDL Class";
            case this.FT_DL_UNDER_19_DATE:
                return "Date of 19th birthday";
            case this.FT_WEIGHT_POUNDS:
                return "Weight (pound)";
            case this.FT_LIMITED_DURATION_DOCUMENT_INDICATOR:
                return "Indicator of document limited duration";
            case this.FT_ENDORSEMENT_EXPIRATION_DATE:
                return "Endorsement expiration date";
            case this.FT_REVISION_DATE:
                return "Revision date";
            case this.FT_COMPLIANCE_TYPE:
                return "Compliance type";
            case this.FT_FAMILY_NAME_TRUNCATION:
                return "Truncated surname/given name at birth";
            case this.FT_FIRST_NAME_TRUNCATION:
                return "First name truncation";
            case this.FT_MIDDLE_NAME_TRUNCATION:
                return "Middle name truncation";
            case this.FT_EXAM_DATE:
                return "Exam date";
            case this.FT_ORGANIZATION:
                return "Organization";
            case this.FT_DEPARTMENT:
                return "Department";
            case this.FT_PAY_GRADE:
                return "Pay grade";
            case this.FT_RANK:
                return "Rank";
            case this.FT_BENEFITS_NUMBER:
                return "Benefits number";
            case this.FT_SPONSOR_SERVICE:
                return "Sponsor service";
            case this.FT_SPONSOR_STATUS:
                return "Sponsor status";
            case this.FT_SPONSOR:
                return "Sponsor";
            case this.FT_RELATIONSHIP:
                return "Relationship";
            case this.FT_USCIS:
                return "USCIS";
            case this.FT_CATEGORY:
                return "Category";
            case this.FT_CONDITIONS:
                return "Conditions";
            case this.FT_IDENTIFIER:
                return "Identifier";
            case this.FT_CONFIGURATION:
                return "Configuration";
            case this.FT_DISCRETIONARY_DATA:
                return "Discretionary data";
            case this.FT_LINE_1_OPTIONAL_DATA:
                return "Optional data from line 1";
            case this.FT_LINE_2_OPTIONAL_DATA:
                return "Optional data from line 2";
            case this.FT_LINE_3_OPTIONAL_DATA:
                return "Optional data from line 3";
            case this.FT_EQV_CODE:
                return "EQV code";
            case this.FT_ALT_CODE:
                return "ALT code";
            case this.FT_BINARY_CODE:
                return "Binary code";
            case this.FT_PSEUDO_CODE:
                return "Pseudocode";
            case this.FT_FEE:
                return "Fee";
            case this.FT_STAMP_NUMBER:
                return "Stamp number";
            case this.FT_GNIB_NUMBER:
                return "GNIB number";
            case this.FT_DEPT_NUMBER:
                return "Department number";
            case this.FT_TELEX_CODE:
                return "Telegraph code";
            case this.FT_ALLERGIES:
                return "Allergies";
            case this.FT_SP_CODE:
                return "Special code";
            case this.FT_COURT_CODE:
                return "Court code";
            case this.FT_CTY:
                return "County";
            case this.FT_SPONSOR_SSN:
                return "Sponsor SSN";
            case this.FT_DO_D_NUMBER:
                return "DoD number";
            case this.FT_MC_NOVICE_DATE:
                return "Expiry date of Motorcycle Novice status";
            case this.FT_DUF_NUMBER:
                return "DUF number";
            case this.FT_AGY:
                return "AGY";
            case this.FT_PNR_CODE:
                return "PNR code";
            case this.FT_FROM_AIRPORT_CODE:
                return "Code of the airport of departure";
            case this.FT_TO_AIRPORT_CODE:
                return "Code of the airport of arrival";
            case this.FT_FLIGHT_NUMBER:
                return "Flight number";
            case this.FT_DATE_OF_FLIGHT:
                return "Date of flight";
            case this.FT_SEAT_NUMBER:
                return "Seat number";
            case this.FT_DATE_OF_ISSUE_BOARDING_PASS:
                return "Date of boarding pass issue";
            case this.FT_CCW_UNTIL:
                return "CCW until";
            case this.FT_REFERENCE_NUMBER_CHECKSUM:
                return "Unique number checksum";
            case this.FT_REFERENCE_NUMBER_CHECK_DIGIT:
                return "Unique number check digit";
            case this.FT_ROOM_NUMBER:
                return "Room number";
            case this.FT_RELIGION:
                return "Religion";
            case this.FT_REMAINDER_TERM:
                return "Months to expire";
            case this.FT_ELECTRONIC_TICKET_INDICATOR:
                return "Electronic ticket indicator";
            case this.FT_COMPARTMENT_CODE:
                return "Compartment code";
            case this.FT_CHECK_IN_SEQUENCE_NUMBER:
                return "Check-in sequence number";
            case this.FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER:
                return "Airline designator of boarding pass issuer";
            case this.FT_AIRLINE_NUMERIC_CODE:
                return "Airline numeric code";
            case this.FT_TICKET_NUMBER:
                return "Ticket number";
            case this.FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR:
                return "Frequent flyer airline designator";
            case this.FT_FREQUENT_FLYER_NUMBER:
                return "Frequent flyer number";
            case this.FT_FREE_BAGGAGE_ALLOWANCE:
                return "Free baggage allowance";
            case this.FT_PDF_417_CODEC:
                return "PDF417 codec";
            case this.FT_IDENTITY_CARD_NUMBER_CHECKSUM:
                return "Checksum for identity card number";
            case this.FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT:
                return "Check digit for identity card number";
            case this.FT_VETERAN:
                return "Veteran";
            case this.FT_DL_CLASS_CODE_A_1_FROM:
                return "DL category A1 valid from";
            case this.FT_DL_CLASS_CODE_A_1_TO:
                return "DL category A1 valid to";
            case this.FT_DL_CLASS_CODE_A_1_NOTES:
                return "DL category A1 codes";
            case this.FT_DL_CLASS_CODE_A_FROM:
                return "DL category A valid from";
            case this.FT_DL_CLASS_CODE_A_TO:
                return "DL category A valid to";
            case this.FT_DL_CLASS_CODE_A_NOTES:
                return "DL category A codes";
            case this.FT_DL_CLASS_CODE_B_FROM:
                return "DL category B valid from";
            case this.FT_DL_CLASS_CODE_B_TO:
                return "DL category B valid to";
            case this.FT_DL_CLASS_CODE_B_NOTES:
                return "DL category B codes";
            case this.FT_DL_CLASS_CODE_C_1_FROM:
                return "DL category C1 valid from";
            case this.FT_DL_CLASS_CODE_C_1_TO:
                return "DL category C1 valid to";
            case this.FT_DL_CLASS_CODE_C_1_NOTES:
                return "DL category C1 codes";
            case this.FT_DL_CLASS_CODE_C_FROM:
                return "DL category C valid from";
            case this.FT_DL_CLASS_CODE_C_TO:
                return "DL category C valid to";
            case this.FT_DL_CLASS_CODE_C_NOTES:
                return "DL category C codes";
            case this.FT_DL_CLASS_CODE_D_1_FROM:
                return "DL category D1 valid from";
            case this.FT_DL_CLASS_CODE_D_1_TO:
                return "DL category D1 valid to";
            case this.FT_DL_CLASS_CODE_D_1_NOTES:
                return "DL category D1 codes";
            case this.FT_DL_CLASS_CODE_D_FROM:
                return "DL category D valid from";
            case this.FT_DL_CLASS_CODE_D_TO:
                return "DL category D valid to";
            case this.FT_DL_CLASS_CODE_D_NOTES:
                return "DL category D codes";
            case this.FT_DL_CLASS_CODE_BE_FROM:
                return "DL category BE valid from";
            case this.FT_DL_CLASS_CODE_BE_TO:
                return "DL category BE valid to";
            case this.FT_DL_CLASS_CODE_BE_NOTES:
                return "DL category BE codes";
            case this.FT_DL_CLASS_CODE_C_1_E_FROM:
                return "DL category C1E valid from";
            case this.FT_DL_CLASS_CODE_C_1_E_TO:
                return "DL category C1E valid to";
            case this.FT_DL_CLASS_CODE_C_1_E_NOTES:
                return "DL category C1E codes";
            case this.FT_DL_CLASS_CODE_CE_FROM:
                return "DL category CE valid from";
            case this.FT_DL_CLASS_CODE_CE_TO:
                return "DL category CE valid to";
            case this.FT_DL_CLASS_CODE_CE_NOTES:
                return "DL category CE codes";
            case this.FT_DL_CLASS_CODE_D_1_E_FROM:
                return "DL category D1E valid from";
            case this.FT_DL_CLASS_CODE_D_1_E_TO:
                return "DL category D1E valid to";
            case this.FT_DL_CLASS_CODE_D_1_E_NOTES:
                return "DL category D1E codes";
            case this.FT_DL_CLASS_CODE_DE_FROM:
                return "DL category DE valid from";
            case this.FT_DL_CLASS_CODE_DE_TO:
                return "DL category DE valid to";
            case this.FT_DL_CLASS_CODE_DE_NOTES:
                return "DL category DE codes";
            case this.FT_DL_CLASS_CODE_M_FROM:
                return "DL category M valid from";
            case this.FT_DL_CLASS_CODE_M_TO:
                return "DL category M valid to";
            case this.FT_DL_CLASS_CODE_M_NOTES:
                return "DL category M codes";
            case this.FT_DL_CLASS_CODE_L_FROM:
                return "DL category L valid from";
            case this.FT_DL_CLASS_CODE_L_TO:
                return "DL category L valid to";
            case this.FT_DL_CLASS_CODE_L_NOTES:
                return "DL category L codes";
            case this.FT_DL_CLASS_CODE_T_FROM:
                return "DL category T valid from";
            case this.FT_DL_CLASS_CODE_T_TO:
                return "DL category T valid to";
            case this.FT_DL_CLASS_CODE_T_NOTES:
                return "DL category T codes";
            case this.FT_DL_CLASS_CODE_AM_FROM:
                return "DL category AM valid from";
            case this.FT_DL_CLASS_CODE_AM_TO:
                return "DL category AM valid to";
            case this.FT_DL_CLASS_CODE_AM_NOTES:
                return "DL category AM codes";
            case this.FT_DL_CLASS_CODE_A_2_FROM:
                return "DL category A2 valid from";
            case this.FT_DL_CLASS_CODE_A_2_TO:
                return "DL category A2 valid to";
            case this.FT_DL_CLASS_CODE_A_2_NOTES:
                return "DL category A2 codes";
            case this.FT_DL_CLASS_CODE_B_1_FROM:
                return "DL category B1 valid from";
            case this.FT_DL_CLASS_CODE_B_1_TO:
                return "DL category B1 valid to";
            case this.FT_DL_CLASS_CODE_B_1_NOTES:
                return "DL category B1 codes";
            case this.FT_SURNAME_AT_BIRTH:
                return "Surname at birth";
            case this.FT_CIVIL_STATUS:
                return "Civil status";
            case this.FT_NUMBER_OF_SEATS:
                return "Number of seats";
            case this.FT_NUMBER_OF_STANDING_PLACES:
                return "Number of standing places";
            case this.FT_MAX_SPEED:
                return "Max speed";
            case this.FT_FUEL_TYPE:
                return "Fuel type";
            case this.FT_EC_ENVIRONMENTAL_TYPE:
                return "Vehicle environmental type";
            case this.FT_POWER_WEIGHT_RATIO:
                return "Power-to-weight ratio";
            case this.FT_MAX_MASS_OF_TRAILER_BRAKED:
                return "Max mass of trailer (braked)";
            case this.FT_MAX_MASS_OF_TRAILER_UNBRAKED:
                return "Max mass of trailer (unbraked)";
            case this.FT_TRANSMISSION_TYPE:
                return "Transmission type";
            case this.FT_TRAILER_HITCH:
                return "Trailer hitch";
            case this.FT_ACCOMPANIED_BY:
                return "Accompanied by";
            case this.FT_POLICE_DISTRICT:
                return "Police district";
            case this.FT_FIRST_ISSUE_DATE:
                return "First issue date";
            case this.FT_PAYLOAD_CAPACITY:
                return "Payload capacity";
            case this.FT_NUMBER_OF_AXELS:
                return "Number of axles";
            case this.FT_PERMISSIBLE_AXLE_LOAD:
                return "Permissible axle load";
            case this.FT_PRECINCT:
                return "Precinct";
            case this.FT_INVITED_BY:
                return "Invited by";
            case this.FT_PURPOSE_OF_ENTRY:
                return "Purpose of entry";
            case this.FT_SKIN_COLOR:
                return "Skin color";
            case this.FT_COMPLEXION:
                return "Complexion";
            case this.FT_AIRPORT_FROM:
                return "Airport of departure";
            case this.FT_AIRPORT_TO:
                return "Airport of arrival";
            case this.FT_AIRLINE_NAME:
                return "Airline name";
            case this.FT_AIRLINE_NAME_FREQUENT_FLYER:
                return "Airline loyalty program for frequent flyers";
            case this.FT_LICENSE_NUMBER:
                return "License number";
            case this.FT_IN_TANKS:
                return "In tanks";
            case this.FT_EXEPT_IN_TANKS:
                return "Other than tanks";
            case this.FT_FAST_TRACK:
                return "Fast Track service";
            case this.FT_OWNER:
                return "Owner";
            case this.FT_MRZ_STRINGS_ICAO_RFID:
                return "MRZ lines from ICAO RFID";
            case this.FT_NUMBER_OF_CARD_ISSUANCE:
                return "Number of card issuances";
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM:
                return "Checksum for number of card issuances";
            case this.FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT:
                return "Check digit for number of card issuances";
            case this.FT_CENTURY_DATE_OF_BIRTH:
                return "Century of birth";
            case this.FT_DL_CLASSCODE_A3_FROM:
                return "DL category A3 valid from";
            case this.FT_DL_CLASSCODE_A3_TO:
                return "DL category A3 valid to";
            case this.FT_DL_CLASSCODE_A3_NOTES:
                return "DL category A3 codes";
            case this.FT_DL_CLASSCODE_C2_FROM:
                return "DL category C2 valid from";
            case this.FT_DL_CLASSCODE_C2_TO:
                return "DL category C2 valid to";
            case this.FT_DL_CLASSCODE_C2_NOTES:
                return "DL category C2 codes";
            case this.FT_DL_CLASSCODE_B2_FROM:
                return "DL category B2 valid from";
            case this.FT_DL_CLASSCODE_B2_TO:
                return "DL category B2 valid to";
            case this.FT_DL_CLASSCODE_B2_NOTES:
                return "DL category B2 codes";
            case this.FT_DL_CLASSCODE_D2_FROM:
                return "DL category D2 valid from";
            case this.FT_DL_CLASSCODE_D2_TO:
                return "DL category D2 valid to";
            case this.FT_DL_CLASSCODE_D2_NOTES:
                return "DL category D2 codes";
            case this.FT_DL_CLASSCODE_B2E_FROM:
                return "DL category B2E valid from";
            case this.FT_DL_CLASSCODE_B2E_TO:
                return "DL category B2E valid to";
            case this.FT_DL_CLASSCODE_B2E_NOTES:
                return "DL category B2E codes";
            case this.FT_DL_CLASSCODE_G_FROM:
                return "DL category G valid from";
            case this.FT_DL_CLASSCODE_G_TO:
                return "DL category G valid to";
            case this.FT_DL_CLASSCODE_G_NOTES:
                return "DL category G codes";
            case this.FT_DL_CLASSCODE_J_FROM:
                return "DL category J valid from";
            case this.FT_DL_CLASSCODE_J_TO:
                return "DL category J valid to";
            case this.FT_DL_CLASSCODE_J_NOTES:
                return "DL category J codes";
            case this.FT_DL_CLASSCODE_LC_FROM:
                return "DL category LC valid from";
            case this.FT_DL_CLASSCODE_LC_TO:
                return "DL category LC valid to";
            case this.FT_DLC_LASSCODE_LC_NOTES:
                return "DL category LC codes";
            case this.FT_BANKCARDNUMBER:
                return "Bank card number";
            case this.FT_BANKCARDVALIDTHRU:
                return "Bank card validity";
            case this.FT_TAX_NUMBER:
                return "Tax number";
            case this.FT_SBH_SECURITYOPTIONS:
                return "SBH security options";
            case this.FT_SBH_INTEGRITYOPTIONS:
                return "SBH integrity options";
            case this.FT_DATE_OF_CREATION:
                return "Creation date";
            case this.FT_VALIDITY_PERIOD:
                return "Validity period";
            case this.FT_PATRON_HEADER_VERSION:
                return "Patron header version";
            case this.FT_BDB_TYPE:
                return "BDB type";
            case this.FT_BIOMETRIC_TYPE:
                return "Biometric type";
            case this.FT_BIOMETRIC_SUBTYPE:
                return "Biometric subtype";
            case this.FT_BIOMETRIC_PRODUCTID:
                return "Biometric product ID";
            case this.FT_BIOMETRIC_FORMAT_OWNER:
                return "Biometric format owner";
            case this.FT_BIOMETRIC_FORMAT_TYPE:
                return "Biometric format type";
            case this.FT_PHONE:
                return "Phone";
            case this.FT_PROFESSION:
                return "Profession";
            case this.FT_TITLE:
                return "Position";
            case this.FT_PERSONAL_SUMMARY:
                return "Personal data summary";
            case this.FT_OTHER_VALID_ID:
                return "Other valid IDs";
            case this.FT_CUSTODY_INFO:
                return "Custody info";
            case this.FT_OTHER_NAME:
                return "Other name";
            case this.FT_OBSERVATIONS:
                return "Observations";
            case this.FT_TAX:
                return "Tax";
            case this.FT_DATE_OF_PERSONALIZATION:
                return "Personalization date";
            case this.FT_PERSONALIZATION_SN:
                return "Serial number of personalization";
            case this.FT_OTHERPERSON_NAME:
                return "Other person, name";
            case this.FT_PERSONTONOTIFY_DATE_OF_RECORD:
                return "Notify person: Date of record";
            case this.FT_PERSONTONOTIFY_NAME:
                return "Notify person: Name";
            case this.FT_PERSONTONOTIFY_PHONE:
                return "Notify person: Phone";
            case this.FT_PERSONTONOTIFY_ADDRESS:
                return "Notify person: Address";
            case this.FT_DS_CERTIFICATE_ISSUER:
                return "DS certificate issuer";
            case this.FT_DS_CERTIFICATE_SUBJECT:
                return "DS certificate subject";
            case this.FT_DS_CERTIFICATE_VALIDFROM:
                return "DS certificate valid from";
            case this.FT_DS_CERTIFICATE_VALIDTO:
                return "DS certificate valid to";
            case this.FT_VRC_DATAOBJECT_ENTRY:
                return "Vehicle data from the DG1 data group";
            case this.FT_GRANDFATHERNAME:
                return "Grandfather\'s name";
            case this.FT_HEALTH_NUMBER:
                return "Health insurance number";
            case this.FT_TYPE_APPROVAL_NUMBER:
                return "Type of approval number";
            case this.FT_ADMINISTRATIVE_NUMBER:
                return "Administrative number";
            case this.FT_DOCUMENT_DISCRIMINATOR:
                return "Document discriminator";
            case this.FT_DATA_DISCRIMINATOR:
                return "Data discriminator";
            case this.FT_ISO_ISSUER_ID_NUMBER:
                return "ID number of ISO issuer";
            case this.FT_SELECTEE_INDICATOR:
                return "Selectee indicator";
            case this.FT_MOTHER_SURNAME:
                return "Mother\'s surname";
            case this.FT_MOTHER_GIVENNAME:
                return "Mother\'s given name";
            case this.FT_FATHER_SURNAME:
                return "Father\'s surname";
            case this.FT_FATHER_GIVENNAME:
                return "Father\'s given name";
            case this.FT_MOTHER_DATEOFBIRTH:
                return "Mother\'s date of birth";
            case this.FT_FATHER_DATEOFBIRTH:
                return "Father\'s date of birth";
            case this.FT_MOTHER_PERSONALNUMBER:
                return "Mother\'s personal number";
            case this.FT_FATHER_PERSONALNUMBER:
                return "Father\'s personal number";
            case this.FT_MOTHER_PLACEOFBIRTH:
                return "Mother\'s place of birth";
            case this.FT_FATHER_PLACEOFBIRTH:
                return "Father\'s place of birth";
            case this.FT_MOTHER_COUNTRYOFBIRTH:
                return "Mother\'s country of birth";
            case this.FT_FATHER_COUNTRYOFBIRTH:
                return "Father\'s country of birth";
            case this.FT_DATE_FIRST_RENEWAL:
                return "Date of first renewal";
            case this.FT_DATE_SECOND_RENEWAL:
                return "Date of second renewal";
            case this.FT_PLACE_OF_EXAMINATION:
                return "Place of examination";
            case this.FT_APPLICATION_NUMBER:
                return "Application number";
            case this.FT_VOUCHER_NUMBER:
                return "Voucher number";
            case this.FT_AUTHORIZATION_NUMBER:
                return "Authorization number";
            case this.FT_FACULTY:
                return "Faculty";
            case this.FT_FORM_OF_EDUCATION:
                return "Form of education";
            case this.FT_DNI_NUMBER:
                return "DNI number";
            case this.FT_RETIREMENT_NUMBER:
                return "Retirement number";
            case this.FT_PROFESSIONAL_ID_NUMBER:
                return "Professional ID number";
            case this.FT_AGE_AT_ISSUE:
                return "Age at issue";
            case this.FT_YEARS_SINCE_ISSUE:
                return "Years since issue";
            case this.FT_DLCLASSCODE_BTP_FROM:
                return "DL category BTP valid from";
            case this.FT_DLCLASSCODE_BTP_NOTES:
                return "DL category BTP codes";
            case this.FT_DLCLASSCODE_BTP_TO:
                return "DL category BTP valid to";
            case this.FT_DLCLASSCODE_C3_FROM:
                return "DL category C3 valid from";
            case this.FT_DLCLASSCODE_C3_NOTES:
                return "DL category C3 codes";
            case this.FT_DLCLASSCODE_C3_TO:
                return "DL category C3 valid to";
            case this.FT_DLCLASSCODE_E_FROM:
                return "DL category E valid from";
            case this.FT_DLCLASSCODE_E_NOTES:
                return "DL category E codes";
            case this.FT_DLCLASSCODE_E_TO:
                return "DL category E valid to";
            case this.FT_DLCLASSCODE_F_FROM:
                return "DL category F valid from";
            case this.FT_DLCLASSCODE_F_NOTES:
                return "DL category F codes";
            case this.FT_DLCLASSCODE_F_TO:
                return "DL category F valid to";
            case this.FT_DLCLASSCODE_FA_FROM:
                return "DL category FA valid from";
            case this.FT_DLCLASSCODE_FA_NOTES:
                return "DL category FA codes";
            case this.FT_DLCLASSCODE_FA_TO:
                return "DL category FA valid to";
            case this.FT_DLCLASSCODE_FA1_FROM:
                return "DL category FA1 valid from";
            case this.FT_DLCLASSCODE_FA1_NOTES:
                return "DL category FA1 codes";
            case this.FT_DLCLASSCODE_FA1_TO:
                return "DL category FA1 valid to";
            case this.FT_DLCLASSCODE_FB_FROM:
                return "DL category FB valid from";
            case this.FT_DLCLASSCODE_FB_NOTES:
                return "DL category FB codes";
            case this.FT_DLCLASSCODE_FB_TO:
                return "DL category FB valid to";
            case this.FT_DLCLASSCODE_G1_FROM:
                return "DL category G1 valid from";
            case this.FT_DLCLASSCODE_G1_NOTES:
                return "DL category G1 codes";
            case this.FT_DLCLASSCODE_G1_TO:
                return "DL category G1 valid to";
            case this.FT_DLCLASSCODE_H_FROM:
                return "DL category H valid from";
            case this.FT_DLCLASSCODE_H_NOTES:
                return "DL category H codes";
            case this.FT_DLCLASSCODE_H_TO:
                return "DL category H valid to";
            case this.FT_DLCLASSCODE_I_FROM:
                return "DL category I valid from";
            case this.FT_DLCLASSCODE_I_NOTES:
                return "DL category I codes";
            case this.FT_DLCLASSCODE_I_TO:
                return "DL category I valid to";
            case this.FT_DLCLASSCODE_K_FROM:
                return "DL category K valid from";
            case this.FT_DLCLASSCODE_K_NOTES:
                return "DL category K codes";
            case this.FT_DLCLASSCODE_K_TO:
                return "DL category K valid to";
            case this.FT_DLCLASSCODE_LK_FROM:
                return "DL category LK valid from";
            case this.FT_DLCLASSCODE_LK_NOTES:
                return "DL category LK codes";
            case this.FT_DLCLASSCODE_LK_TO:
                return "DL category LK valid to";
            case this.FT_DLCLASSCODE_N_FROM:
                return "DL category N valid from";
            case this.FT_DLCLASSCODE_N_NOTES:
                return "DL category N codes";
            case this.FT_DLCLASSCODE_N_TO:
                return "DL category N valid to";
            case this.FT_DLCLASSCODE_S_FROM:
                return "DL category S valid from";
            case this.FT_DLCLASSCODE_S_NOTES:
                return "DL category S codes";
            case this.FT_DLCLASSCODE_S_TO:
                return "DL category S valid to";
            case this.FT_DLCLASSCODE_TB_FROM:
                return "DL category TB valid from";
            case this.FT_DLCLASSCODE_TB_NOTES:
                return "DL category TB codes";
            case this.FT_DLCLASSCODE_TB_TO:
                return "DL category TB valid to";
            case this.FT_DLCLASSCODE_TM_FROM:
                return "DL category TM valid from";
            case this.FT_DLCLASSCODE_TM_NOTES:
                return "DL category TM codes";
            case this.FT_DLCLASSCODE_TM_TO:
                return "DL category TM valid to";
            case this.FT_DLCLASSCODE_TR_FROM:
                return "DL category TR valid from";
            case this.FT_DLCLASSCODE_TR_NOTES:
                return "DL category TR codes";
            case this.FT_DLCLASSCODE_TR_TO:
                return "DL category TR valid to";
            case this.FT_DLCLASSCODE_TV_FROM:
                return "DL category TV valid from";
            case this.FT_DLCLASSCODE_TV_NOTES:
                return "DL category TV codes";
            case this.FT_DLCLASSCODE_TV_TO:
                return "DL category TV valid to";
            case this.FT_DLCLASSCODE_V_FROM:
                return "DL category V valid from";
            case this.FT_DLCLASSCODE_V_NOTES:
                return "DL category V codes";
            case this.FT_DLCLASSCODE_V_TO:
                return "DL category V valid to";
            case this.FT_DLCLASSCODE_W_FROM:
                return "DL category W valid from";
            case this.FT_DLCLASSCODE_W_NOTES:
                return "DL category W codes";
            case this.FT_DLCLASSCODE_W_TO:
                return "DL category W valid to";
            case this.FT_CALIBER:
                return "Caliber";
            case this.FT_CITIZENSHIP_OF_FIRST_PERSON:
                return "Citizenship of the first person";
            case this.FT_CITIZENSHIP_OF_SECOND_PERSON:
                return "Citizenship of the second person";
            case this.FT_CVV:
                return "CVV/CVC";
            case this.FT_DATE_OF_BIRTH_OF_HUSBAND:
                return "Date of birth of husband";
            case this.FT_DATE_OF_BIRTH_OF_WIFE:
                return "Date of birth of wife";
            case this.FT_MAKE:
                return "Make";
            case this.FT_MODEL:
                return "Model";
            case this.FT_NUMBER_OF_CYLINDERS:
                return "Number of cylinders";
            case this.FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION:
                return "Surname of husband after registration";
            case this.FT_SURNAME_OF_WIFE_AFTER_REGISTRATION:
                return "Surname of wife after registration";
            case this.FT_URL:
                return "URL";
            case this.FT_DATE_OF_INSURANCE_EXPIRY:
                return "Expiry date of insurance";
            case this.FT_MORTGAGE_BY:
                return "Mortgage by";
            case this.FT_OLD_DOCUMENT_NUMBER:
                return "Old document number";
            case this.FT_OLD_DATE_OF_ISSUE:
                return "Old date of issue";
            case this.FT_OLD_PLACE_OF_ISSUE:
                return "Old place of issue";
            case this.FT_DLCLASSCODE_LR_FROM:
                return "DL category LR valid from";
            case this.FT_DLCLASSCODE_LR_TO:
                return "DL category LR valid to";
            case this.FT_DLCLASSCODE_LR_NOTES:
                return "DL category LR codes";
            case this.FT_DLCLASSCODE_MR_FROM:
                return "DL category MR valid from";
            case this.FT_DLCLASSCODE_MR_TO:
                return "DL category MR valid to";
            case this.FT_DLCLASSCODE_MR_NOTES:
                return "DL category MR codes";
            case this.FT_DLCLASSCODE_HR_FROM:
                return "DL category HR valid from";
            case this.FT_DLCLASSCODE_HR_TO:
                return "DL category HR valid to";
            case this.FT_DLCLASSCODE_HR_NOTES:
                return "DL category HR codes";
            case this.FT_DLCLASSCODE_HC_FROM:
                return "DL category HC valid from";
            case this.FT_DLCLASSCODE_HC_TO:
                return "DL category HC valid to";
            case this.FT_DLCLASSCODE_HC_NOTES:
                return "DL category HC codes";
            case this.FT_DLCLASSCODE_MC_FROM:
                return "DL category MC valid from";
            case this.FT_DLCLASSCODE_MC_TO:
                return "DL category MC valid to";
            case this.FT_DLCLASSCODE_MC_NOTES:
                return "DL category MC codes";
            case this.FT_DLCLASSCODE_RE_FROM:
                return "DL category RE valid from";
            case this.FT_DLCLASSCODE_RE_TO:
                return "DL category RE valid to";
            case this.FT_DLCLASSCODE_RE_NOTES:
                return "DL category RE codes";
            case this.FT_DLCLASSCODE_R_FROM:
                return "DL category R valid from";
            case this.FT_DLCLASSCODE_R_TO:
                return "DL category R valid to";
            case this.FT_DLCLASSCODE_R_NOTES:
                return "DL category R codes";
            case this.FT_DLCLASSCODE_CA_FROM:
                return "DL category CA valid from";
            case this.FT_DLCLASSCODE_CA_TO:
                return "DL category CA valid to";
            case this.FT_DLCLASSCODE_CA_NOTES:
                return "DL category CA codes";
            case this.FT_CITIZENSHIP_STATUS:
                return "Citizenship status";
            case this.FT_MILITARY_SERVICE_FROM:
                return "Military service from";
            case this.FT_MILITARY_SERVICE_TO:
                return "Military service to";
            case this.FT_DLCLASSCODE_D3_FROM:
                return "DL category D3 valid from";
            case this.FT_DLCLASSCODE_D3_NOTES:
                return "DL category D3 codes";
            case this.FT_DLCLASSCODE_D3_TO:
                return "DL category D3 valid to";
            case this.FT_DLCLASSCODE_NT_FROM:
                return "DL category NT valid from";
            case this.FT_DLCLASSCODE_NT_NOTES:
                return "DL category NT codes";
            case this.FT_DLCLASSCODE_NT_TO:
                return "DL category NT valid to";
            case this.FT_DLCLASSCODE_TN_FROM:
                return "DL category TN valid from";
            case this.FT_DLCLASSCODE_TN_NOTES:
                return "DL category TN codes";
            case this.FT_DLCLASSCODE_TN_TO:
                return "DL category TN valid to";
            case this.FT_ALT_DATE_OF_EXPIRY:
                return "Alternative date of expiry";
            case this.FT_DLCLASSCODE_CD_FROM:
                return "DL category CD valid from";
            case this.FT_DLCLASSCODE_CD_TO:
                return "DL category CD valid to";
            case this.FT_DLCLASSCODE_CD_NOTES:
                return "DL category CD codes";
            case this.FT_FIRST_NAME:
                return "First name";
            case this.FT_DATE_OF_ARRIVAL:
                return "Date of arrival";
            case this.FT_ISSUER_IDENTIFICATION_NUMBER:
                return "Issuer identification number";
            case this.FT_PAYMENT_PERIOD_FROM:
                return "Payment period from";
            case this.FT_PAYMENT_PERIOD_TO:
                return "Payment period to";
            case this.FT_VACCINATION_CERTIFICATE_IDENTIFIER:
                return "Unique vaccination certificate identifier";
            case this.FT_SECOND_NAME:
                return "Second name";
            case this.FT_THIRD_NAME:
                return "Third name";
            case this.FT_FOURTH_NAME:
                return "Fourth name";
            case this.FT_LAST_NAME:
                return "Last name";
            default:
                return value.toString();
        }
    }
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
    getTranslation: function (value) {
        switch (value) {
            case this.LATIN:
                return "Latin";
            case this.AFRIKAANS:
                return "Afrikaans";
            case this.ABKHAZIAN_CYRILLIC:
                return "Abkhazian (Cyrillic)";
            case this.ALBANIAN:
                return "Albanian";
            case this.AMHARIC:
                return "Amharic";
            case this.ARABIC_ALGERIA:
                return "Arabic (Algeria)";
            case this.ARABIC_BAHRAIN:
                return "Arabic (Bahrain)";
            case this.ARABIC_EGYPT:
                return "Arabic (Egypt)";
            case this.ARABIC_IRAQ:
                return "Arabic (Iraq)";
            case this.ARABIC_JORDAN:
                return "Arabic (Jordan)";
            case this.ARABIC_KUWAIT:
                return "Arabic (Kuwait)";
            case this.ARABIC_LEBANON:
                return "Arabic (Lebanon)";
            case this.ARABIC_LIBYA:
                return "Arabic (Libya)";
            case this.ARABIC_MOROCCO:
                return "Arabic (Morocco)";
            case this.ARABIC_OMAN:
                return "Arabic (Oman)";
            case this.ARABIC_QATAR:
                return "Arabic (Qatar)";
            case this.ARABIC_SAUDI_ARABIA:
                return "Arabic (Saudi Arabia)";
            case this.ARABIC_SYRIA:
                return "Arabic (Syria)";
            case this.ARABIC_TUNISIA:
                return "Arabic (Tunisia)";
            case this.ARABIC_UAE:
                return "Arabic (U.A.E.)";
            case this.ARABIC_YEMEN:
                return "Arabic (Yemen)";
            case this.ARABIC_ARMENIAN:
                return "Armenian";
            case this.ARABIC_WORLD:
                return "Arabic (World)";
            case this.AZERI_CYRILIC:
                return "Azeri (Cyrillic)";
            case this.AZERI_LATIN:
                return "Azeri (Latin)";
            case this.BASQUE:
                return "Basque";
            case this.BANK_CARD:
                return "Bank Card";
            case this.BANK_CARD_CVV2:
                return "Bank Card CVV2";
            case this.BANK_CARD_NAME:
                return "Bank Card Name";
            case this.BANK_CARD_NUMBER:
                return "Bank Card Number";
            case this.BANK_CARD_VALID_THRU:
                return "Bank Card Valid Thru";
            case this.BELARUSIAN:
                return "Belarusian";
            case this.BENGALI:
                return "Bengali";
            case this.BULGARIAN:
                return "Bulgarian";
            case this.CATALAN:
                return "Catalan";
            case this.CHINESE_HONGKONG_SAR:
                return "Chinese (HongKong S.A.R.)";
            case this.CHINESE_MACAO_SAR:
                return "Chinese (Macao S.A.R.)";
            case this.CHINESE:
                return "Chinese";
            case this.CHINESE_SINGAPORE:
                return "Chinese (Singapore)";
            case this.CHINESE_TAIWAN:
                return "Chinese (Taiwan)";
            case this.CROATIAN:
                return "Croatian";
            case this.CZECH:
                return "Czech";
            case this.DANISH:
                return "Danish";
            case this.DIVEHI:
                return "Divehi";
            case this.DUTCH_BELGIUM:
                return "Dutch (Belgium)";
            case this.DUTCH_NETHERLANDS:
                return "Dutch (Netherlands)";
            case this.ENGLISH_AUSTRALIA:
                return "English (Australia)";
            case this.ENGLISH_BELIZE:
                return "English (Belize)";
            case this.ENGLISH_CANADA:
                return "English (Canada)";
            case this.ENGLISH_CARRIBEAN:
                return "English (Caribbean)";
            case this.ENGLISH_IRELAND:
                return "English (Ireland)";
            case this.ENGLISH_JAMAICA:
                return "English (Jamaica)";
            case this.ENGLISH_NEW_ZEALAND:
                return "English (New Zealand)";
            case this.ENGLISH_PHILIPPINES:
                return "English (Philippines)";
            case this.ENGLISH_SOUTH_AFRICA:
                return "English (South Africa)";
            case this.ENGLISH_TRINIDAD:
                return "English (Trinidad)";
            case this.ENGLISH_UK:
                return "English (United Kingdom)";
            case this.ENGLISH_US:
                return "English (United States)";
            case this.ENGLISH_ZIMBABWE:
                return "English (Zimbabwe)";
            case this.ESTONIAN:
                return "Estonian";
            case this.FAEROESE:
                return "Faeroese";
            case this.FARSI:
                return "Farsi";
            case this.FINNISH:
                return "Finnish";
            case this.FRENCH_BELGIUM:
                return "French (Belgium)";
            case this.FRENCH_CANADA:
                return "French (Canada)";
            case this.FRENCH_FRANCE:
                return "French (France)";
            case this.FRENCH_LUXEMBOURG:
                return "French (Luxembourg)";
            case this.FRENCH_MONACO:
                return "French (Monaco)";
            case this.FRENCH_SWITZERLAND:
                return "French (Switzerland)";
            case this.GALICIAN:
                return "Galician";
            case this.GEORGIAN:
                return "Georgian";
            case this.GERMAN_AUSTRIA:
                return "German (Austria)";
            case this.GERMAN_GERMANY:
                return "German (Germany)";
            case this.GERMAN_LIECHTENSTEIN:
                return "German (Liechtenstein)";
            case this.GERMAN_LUXEMBOURG:
                return "German (Luxembourg)";
            case this.GERMAN_SWITZERLAND:
                return "German (Switzerland)";
            case this.GREEK:
                return "Greek";
            case this.GUJARATI:
                return "Gujarati";
            case this.HEBREW:
                return "Hebrew";
            case this.HINDI_INDIA:
                return "Hindi (India)";
            case this.HUNGARIAN:
                return "Hungarian";
            case this.ICELANDIC:
                return "Icelandic";
            case this.INDONESIAN:
                return "Indonesian";
            case this.ITALIAN_ITALY:
                return "Italian (Italy)";
            case this.ITALIAN_SWITZERLAND:
                return "Italian (Switzerland)";
            case this.JAPANESE:
                return "Japanese";
            case this.KANNADA:
                return "Kannada";
            case this.KASHMIRI:
                return "Kashmiri";
            case this.KAZAKH:
                return "Kazakh";
            case this.KONKANI:
                return "Konkani";
            case this.KOREAN:
                return "Korean";
            case this.KYRGYZ_CYRILICK:
                return "Kyrgyz (Cyrillic)";
            case this.LAO:
                return "Lao";
            case this.LATVIAN:
                return "Latvian";
            case this.LITHUANIAN:
                return "Lithuanian";
            case this.FYRO_MACEDONIAN:
                return "FYRO Macedonian";
            case this.MALAY_MALAYSIA:
                return "Malay (Malaysia)";
            case this.MALAY_BRUNEI_DARUSSALAM:
                return "Malay (Brunei Darussalam)";
            case this.MARATHI:
                return "Marathi";
            case this.MONGOLIAN_CYRILIC:
                return "Mongolian (Cyrillic)";
            case this.NORWEGIAN_BOKMAL:
                return "Norwegian (Bokmal)";
            case this.NORWEGIAN_NYORSK:
                return "Norwegian (Nynorsk)";
            case this.PASHTO:
                return "Pashto";
            case this.POLISH:
                return "Polish";
            case this.PORTUGUESE_BRAZIL:
                return "Portuguese (Brazil)";
            case this.PORTUGUESE_PORTUGAL:
                return "Portuguese (Portugal)";
            case this.PUNJABI:
                return "Punjabi";
            case this.RHAETO_ROMANIC:
                return "Rhaeto-Romanic";
            case this.ROMANIAN:
                return "Romanian";
            case this.RUSSIAN:
                return "Russian";
            case this.SANSKRIT:
                return "Sanskrit";
            case this.SINDHI:
                return "Sindhi";
            case this.SINDHI_INDIA:
                return "Sindhi (India)";
            case this.SINHALA:
                return "Sinhala";
            case this.SERBIAN_CYRILIC:
                return "Serbian (Cyrillic)";
            case this.SERBIAN_LATIN:
                return "Serbian (Latin)";
            case this.SLOVAK:
                return "Slovak";
            case this.SLOVENIAN:
                return "Slovenian";
            case this.SPANISH_ARGENTINA:
                return "Spanish (Argentina)";
            case this.SPANISH_BOLIVIA:
                return "Spanish (Bolivia)";
            case this.SPANISH_CHILE:
                return "Spanish (Chile)";
            case this.SPANICH_COLOMBIA:
                return "Spanish (Colombia)";
            case this.SPANISH_COSTA_RICA:
                return "Spanish (Costa Rica)";
            case this.SPANISH_DOMINICAN_REPUBLIC:
                return "Spanish (Dominican Republic)";
            case this.SPANISH_ECUADOR:
                return "Spanish (Ecuador)";
            case this.SPANISH_EL_SALVADOR:
                return "Spanish (El Salvador)";
            case this.SPANISH_GUATEMALA:
                return "Spanish (Guatemala)";
            case this.SPANISH_HONDURAS:
                return "Spanish (Honduras)";
            case this.SPANISH_MEXICO:
                return "Spanish (Mexico)";
            case this.SPANISH_NICARAGUA:
                return "Spanish (Nicaragua)";
            case this.SPANISH_PANAMA:
                return "Spanish (Panama)";
            case this.SPANISH_PARAGUAY:
                return "Spanish (Paraguay)";
            case this.SPANISH_PERU:
                return "Spanish (Peru)";
            case this.SPANISH_PUERTO_RICO:
                return "Spanish (Puerto Rico)";
            case this.SPANISH_TRADITIONAL_SORT:
                return "Spanish (Traditional Sort)";
            case this.SPANISH_INTERNATIONAL_SORT:
                return "Spanish (International Sort)";
            case this.SPANISH_URUGUAY:
                return "Spanish (Uruguay)";
            case this.SPANISH_VENEZUELA:
                return "Spanish (Venezuela)";
            case this.SWAHILI:
                return "Swahili";
            case this.SWEDISH:
                return "Swedish";
            case this.SWEDISH_FINLAND:
                return "Swedish (Finland)";
            case this.SYRIAC:
                return "Syriac";
            case this.TAMIL:
                return "Tamil";
            case this.TATAR:
                return "Tatar";
            case this.TELUGU:
                return "Telugu";
            case this.THAI_THAILAND:
                return "Thai (Thailand)";
            case this.TURKISH:
                return "Turkish";
            case this.TAJIK_CYRILLIC:
                return "Tajik (Cyrillic)";
            case this.TURKMEN:
                return "Turkmen";
            case this.UKRAINIAN:
                return "Ukrainian";
            case this.URDU:
                return "Urdu";
            case this.UZBEK_CYRILIC:
                return "Uzbek (Cyrillic)";
            case this.UZBEK_LATIN:
                return "Uzbek (Latin)";
            case this.VIETNAMESE:
                return "Vietnamese";
            case this.CTC_SIMPLIFIED:
                return "CTC Simplified";
            case this.CTC_TRADITIONAL:
                return "CTC Traditional";
            default:
                return value.toString();
        }
    }
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
    getTranslation: function (value) {
        switch (value) {
            case this.RPRM_LIGHT_UV:
                return "UV";
            case this.RPRM_Light_IR_Full:
                return "IR";
            case this.RPRM_LIGHT_WHITE_FULL:
                return "Visible light";
            default:
                return value.toString();
        }
    }
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
    ScenarioIdentifier: ScenarioIdentifier,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_NotificationCodes: eRFID_NotificationCodes,
    eRFID_Password_Type: eRFID_Password_Type,
    BarcodeResult: BarcodeResult,
    eSignManagementAction: eSignManagementAction,
    eCheckDiagnose: eCheckDiagnose,
    RFIDDelegate: RFIDDelegate,
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
var DocumentReaderOriginal = /** @class */ (function (_super) {
    __extends(DocumentReaderOriginal, _super);
    function DocumentReaderOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentReaderOriginal.prototype.initializeReaderAutomatically = function () { return cordova(this, "initializeReaderAutomatically", {}, arguments); };
    DocumentReaderOriginal.prototype.getAPIVersion = function () { return cordova(this, "getAPIVersion", {}, arguments); };
    DocumentReaderOriginal.prototype.getAvailableScenarios = function () { return cordova(this, "getAvailableScenarios", {}, arguments); };
    DocumentReaderOriginal.prototype.isRFIDAvailableForUse = function () { return cordova(this, "isRFIDAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.getCoreMode = function () { return cordova(this, "getCoreMode", {}, arguments); };
    DocumentReaderOriginal.prototype.getCoreVersion = function () { return cordova(this, "getCoreVersion", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseDate = function () { return cordova(this, "getDatabaseDate", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseID = function () { return cordova(this, "getDatabaseID", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseVersion = function () { return cordova(this, "getDatabaseVersion", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocumentReaderIsReady = function () { return cordova(this, "getDocumentReaderIsReady", {}, arguments); };
    DocumentReaderOriginal.prototype.getDocumentReaderStatus = function () { return cordova(this, "getDocumentReaderStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseCountriesNumber = function () { return cordova(this, "getDatabaseCountriesNumber", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseDocumentsNumber = function () { return cordova(this, "getDatabaseDocumentsNumber", {}, arguments); };
    DocumentReaderOriginal.prototype.selectedScenario = function () { return cordova(this, "selectedScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.getSessionLogFolder = function () { return cordova(this, "getSessionLogFolder", {}, arguments); };
    DocumentReaderOriginal.prototype.getDatabaseDescription = function () { return cordova(this, "getDatabaseDescription", {}, arguments); };
    DocumentReaderOriginal.prototype.showScanner = function () { return cordova(this, "showScanner", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.startNewPage = function () { return cordova(this, "startNewPage", {}, arguments); };
    DocumentReaderOriginal.prototype.startNewSession = function () { return cordova(this, "startNewSession", {}, arguments); };
    DocumentReaderOriginal.prototype.startRFIDReader = function () { return cordova(this, "startRFIDReader", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.stopRFIDReader = function () { return cordova(this, "stopRFIDReader", {}, arguments); };
    DocumentReaderOriginal.prototype.stopRFIDReaderWithErrorMessage = function (message) { return cordova(this, "stopRFIDReaderWithErrorMessage", {}, arguments); };
    DocumentReaderOriginal.prototype.stopScanner = function () { return cordova(this, "stopScanner", {}, arguments); };
    DocumentReaderOriginal.prototype.deinitializeReader = function () { return cordova(this, "deinitializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.isAuthenticatorAvailableForUse = function () { return cordova(this, "isAuthenticatorAvailableForUse", {}, arguments); };
    DocumentReaderOriginal.prototype.getConfig = function () { return cordova(this, "getConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.getRfidScenario = function () { return cordova(this, "getRfidScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.getLicenseExpiryDate = function () { return cordova(this, "getLicenseExpiryDate", {}, arguments); };
    DocumentReaderOriginal.prototype.getLicenseCountryFilter = function () { return cordova(this, "getLicenseCountryFilter", {}, arguments); };
    DocumentReaderOriginal.prototype.licenseIsRfidAvailable = function () { return cordova(this, "licenseIsRfidAvailable", {}, arguments); };
    DocumentReaderOriginal.prototype.getCameraSessionIsPaused = function () { return cordova(this, "getCameraSessionIsPaused", {}, arguments); };
    DocumentReaderOriginal.prototype.removeDatabase = function () { return cordova(this, "removeDatabase", {}, arguments); };
    DocumentReaderOriginal.prototype.cancelDBUpdate = function () { return cordova(this, "cancelDBUpdate", {}, arguments); };
    DocumentReaderOriginal.prototype.resetConfiguration = function () { return cordova(this, "resetConfiguration", {}, arguments); };
    DocumentReaderOriginal.prototype.clearPKDCertificates = function () { return cordova(this, "clearPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.readRFID = function () { return cordova(this, "readRFID", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.getRfidSessionStatus = function () { return cordova(this, "getRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidDelegate = function (delegate) { return cordova(this, "setRfidDelegate", {}, arguments); };
    DocumentReaderOriginal.prototype.setEnableCoreLogs = function (logs) { return cordova(this, "setEnableCoreLogs", {}, arguments); };
    DocumentReaderOriginal.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.setCameraSessionIsPaused = function (paused) { return cordova(this, "setCameraSessionIsPaused", {}, arguments); };
    DocumentReaderOriginal.prototype.getScenario = function (scenario) { return cordova(this, "getScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.recognizeImages = function (images) { return cordova(this, "recognizeImages", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.showScannerWithCameraID = function (cameraID) { return cordova(this, "showScannerWithCameraID", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.runAutoUpdate = function (databaseType) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidScenario = function (scenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReader = function (config) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImage = function (image) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeData = function (data) { return cordova(this, "recognizeData", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTASignature = function (signature) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReaderOriginal.prototype.parseCoreResults = function (json) { return cordova(this, "parseCoreResults", {}, arguments); };
    DocumentReaderOriginal.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageWithOpts = function (image, options) { return cordova(this, "recognizeImageWithOpts", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeVideoFrame = function (byteString, params) { return cordova(this, "recognizeVideoFrame", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.showScannerWithCameraIDAndOpts = function (cameraID, options) { return cordova(this, "showScannerWithCameraIDAndOpts", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageWithCameraMode = function (image, mode) { return cordova(this, "recognizeImageWithCameraMode", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImagesWithImageInputs = function (images) { return cordova(this, "recognizeImagesWithImageInputs", {}, arguments); };
    DocumentReaderOriginal.pluginName = "DocumentReader";
    DocumentReaderOriginal.plugin = "cordova-plugin-document-reader-api";
    DocumentReaderOriginal.pluginRef = "DocumentReader";
    DocumentReaderOriginal.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReaderOriginal.platforms = ["Android", "iOS"];
    return DocumentReaderOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentReader = new DocumentReaderOriginal();
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7SUFPdkIsK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRTlDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7aUNBbEJMOzs7Ozs7SUFvQ1csNkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQVUs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QUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsd0JBQXdCLEVBQUUsR0FBRztJQUM3QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFF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YztJQVFkLHVDQUFjO0lBUWQsMkNBQWtCO0lBUWxCLDZDQUFvQjtJQVFwQixpQ0FBUTtJQVFSLDZDQUFvQjtJQWFwQix3Q0FBZSxhQUFDLFFBQWE7SUFTN0IsMENBQWlCLGFBQUMsSUFBUztJQVkzQiwyQ0FBa0IsYUFBQyxZQUFpQjtJQVNwQyxpREFBd0IsYUFBQyxNQUFXO0lBU3BDLG9DQUFXLGFBQUMsUUFBYTtJQVN6Qix3Q0FBZSxhQUFDLE1BQVc7SUFTM0IsZ0RBQXVCLGFBQUMsUUFBYTtJQVNyQyxzQ0FBYSxhQUFDLFlBQWlCO0lBYy9CLGtDQUFTLGFBQUMsTUFBVztJQVdyQix3Q0FBZSxhQUFDLFFBQWE7SUFlN0IseUNBQWdCLGFBQUMsTUFBVztJQVM1Qix3Q0FBZSxhQUFDLFlBQWlCO0lBU2pDLHVDQUFjLGFBQUMsS0FBVTtJQVN6QixzQ0FBYSxhQUFDLElBQVM7SUFTdkIsNkNBQW9CLGFBQUMsTUFBVztJQVloQyw4Q0FBcUIsYUFBQyxZQUFpQjtJQVl2Qyw4Q0FBcUIsYUFBQyxZQUFpQjtJQVN2QywyQ0FBa0IsYUFBQyxTQUFjO0lBU2pDLHlDQUFnQixhQUFDLElBQVM7SUFjMUIscUNBQVksYUFBQyxNQUFXO0lBZXhCLCtDQUFzQixhQUFDLEtBQVUsRUFBRSxPQUFZO0lBVS9DLDRDQUFtQixhQUFDLFVBQWUsRUFBRSxNQUFXO0lBZWhELHVEQUE4QixhQUFDLFFBQWEsRUFBRSxPQUFZO0lBVTFELHFEQUE0QixhQUFDLEtBQVUsRUFBRSxJQUFTO0lBU2xELHVEQUE4QixhQUFDLE1BQVc7Ozs7Ozt5QkFsbk85QztFQXdqTm9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJTY2VuYXJpbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyU2NlbmFyaW9cblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0aW9uID0ganNvbk9iamVjdFtcImNhcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVEZXRhaWxlZFNjZW5hcmlvIHtcbiAgICB1dlRvcmNoPzogYm9vbGVhblxuICAgIGZyYW1lT3JpZW50YXRpb24/OiBudW1iZXJcbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIG11bHRpUGFnZU9mZj86IG51bWJlclxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIGZyYW1lS1dITGFuZHNjYXBlPzogbnVtYmVyXG4gICAgZnJhbWVLV0hQb3J0cmFpdD86IG51bWJlclxuICAgIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlPzogbnVtYmVyXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGNhcHRpb24/OiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvcmVEZXRhaWxlZFNjZW5hcmlvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29yZURldGFpbGVkU2NlbmFyaW9cblxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmZhY2VFeHQgPSBqc29uT2JqZWN0W1wiZmFjZUV4dFwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuc2VyaWVzUHJvY2Vzc01vZGUgPSBqc29uT2JqZWN0W1wic2VyaWVzUHJvY2Vzc01vZGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dITGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dITGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbENyb3AgPSBqc29uT2JqZWN0W1wibWFudWFsQ3JvcFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlTWV0YURhdGEge1xuICAgIElEPzogbnVtYmVyXG4gICAgcm9sbEFuZ2xlPzogbnVtYmVyXG4gICAgYm91bmRzPzogQm91bmRzXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VNZXRhRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VNZXRhRGF0YVxuXG4gICAgICAgIHJlc3VsdC5JRCA9IGpzb25PYmplY3RbXCJJRFwiXVxuICAgICAgICByZXN1bHQucm9sbEFuZ2xlID0ganNvbk9iamVjdFtcInJvbGxBbmdsZVwiXVxuICAgICAgICByZXN1bHQuYm91bmRzID0gQm91bmRzLmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZHNcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kcyB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCb3VuZHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCb3VuZHNcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckZpZWxkUmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY1JlYWRlckZpZWxkUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG4gICAgbGlnaHRUeXBlPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgbGlnaHROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBmaWVsZFJlY3Q/OiBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0VHlwZSA9IGpzb25PYmplY3RbXCJsaWdodFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFJlY3QgPSBEb2NSZWFkZXJGaWVsZFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkUmVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHtcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHZhbGlkaXR5PzogbnVtYmVyXG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIG9yaWdpbmFsVmFsdWU/OiBzdHJpbmdcbiAgICBib3VuZFJlY3Q/OiBSZWN0XG4gICAgY29tcGFyaXNvbj86IFJlY29yZDxudW1iZXIsIG51bWJlcj5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsdWVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFZhbHVlID0ganNvbk9iamVjdFtcIm9yaWdpbmFsVmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb24gPSB7fVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baSBhcyB1bmtub3duIGFzIG51bWJlcl0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IERvY3VtZW50UmVhZGVyVmFsdWVcbiAgICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmxjaWROYW1lID0ganNvbk9iamVjdFtcImxjaWROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlXCJdKVxuICAgICAgICByZXN1bHQudmFsdWVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvb3JkaW5hdGVcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudFBvc2l0aW9uIHtcbiAgICBkb2NGb3JtYXQ/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIGRwaT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGludmVyc2U/OiBudW1iZXJcbiAgICBwZXJzcGVjdGl2ZVRyPzogbnVtYmVyXG4gICAgb2JqQXJlYT86IG51bWJlclxuICAgIG9iakludEFuZ2xlRGV2PzogbnVtYmVyXG4gICAgcmVzdWx0U3RhdHVzPzogbnVtYmVyXG4gICAgYW5nbGU/OiBudW1iZXJcbiAgICBjZW50ZXI/OiBDb29yZGluYXRlXG4gICAgbGVmdFRvcD86IENvb3JkaW5hdGVcbiAgICBsZWZ0Qm90dG9tPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0VG9wPzogQ29vcmRpbmF0ZVxuICAgIHJpZ2h0Qm90dG9tPzogQ29vcmRpbmF0ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFbGVtZW50UG9zaXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFbGVtZW50UG9zaXRpb25cblxuICAgICAgICByZXN1bHQuZG9jRm9ybWF0ID0ganNvbk9iamVjdFtcImRvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmRwaSA9IGpzb25PYmplY3RbXCJkcGlcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmludmVyc2UgPSBqc29uT2JqZWN0W1wiaW52ZXJzZVwiXVxuICAgICAgICByZXN1bHQucGVyc3BlY3RpdmVUciA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZVRyXCJdXG4gICAgICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICAgICAgcmVzdWx0Lm9iakludEFuZ2xlRGV2ID0ganNvbk9iamVjdFtcIm9iakludEFuZ2xlRGV2XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgICAgICByZXN1bHQuY2VudGVyID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VudGVyXCJdKVxuICAgICAgICByZXN1bHQubGVmdFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImxlZnRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5yaWdodEJvdHRvbSA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0Qm90dG9tXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHkge1xuICAgIGZlYXR1cmVUeXBlPzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IGpzb25PYmplY3RbXCJjb3VudFwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBuYW1lPzogc3RyaW5nXG4gICAgSUNBT0NvZGU/OiBzdHJpbmdcbiAgICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBkWWVhcj86IHN0cmluZ1xuICAgIGRDb3VudHJ5TmFtZT86IHN0cmluZ1xuICAgIEZEU0lEPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVxuXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudElEID0ganNvbk9iamVjdFtcImRvY3VtZW50SURcIl1cbiAgICAgICAgcmVzdWx0LmRUeXBlID0ganNvbk9iamVjdFtcImRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5kRm9ybWF0ID0ganNvbk9iamVjdFtcImRGb3JtYXRcIl1cbiAgICAgICAgcmVzdWx0LmRNUlogPSBqc29uT2JqZWN0W1wiZE1SWlwiXVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5JQ0FPQ29kZSA9IGpzb25PYmplY3RbXCJJQ0FPQ29kZVwiXVxuICAgICAgICByZXN1bHQuZERlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImREZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQuZFllYXIgPSBqc29uT2JqZWN0W1wiZFllYXJcIl1cbiAgICAgICAgcmVzdWx0LmRDb3VudHJ5TmFtZSA9IGpzb25PYmplY3RbXCJkQ291bnRyeU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LkZEU0lEID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJGRFNJRFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIkZEU0lEXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LkZEU0lELnB1c2goanNvbk9iamVjdFtcIkZEU0lEXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgYXR0YWNobWVudD86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5hdHRhY2htZW50ID0ganNvbk9iamVjdFtcImF0dGFjaG1lbnRcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHtcbiAgICBhY3RpdmVPcHRpb25JZHg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGVcblxuICAgICAgICByZXN1bHQuYWN0aXZlT3B0aW9uSWR4ID0ganNvbk9iamVjdFtcImFjdGl2ZU9wdGlvbklkeFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGVEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZURhdGFcblxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENlcnRpZmljYXRlRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENlcnRpZmljYXRlRGF0YVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICAgIHNlY3VyaXR5T2JqZWN0PzogQ2VydGlmaWNhdGVEYXRhXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcblxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3QgPSBDZXJ0aWZpY2F0ZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgICByZWFkaW5nVGltZT86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVcblxuICAgICAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQucEFTdGF0dXMgPSBqc29uT2JqZWN0W1wicEFTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVhZGluZ1N0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZmlsZUlEID0ganNvbk9iamVjdFtcImZpbGVJRFwiXVxuICAgICAgICByZXN1bHQuZmlsZURhdGEgPSBGaWxlRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZURhdGFcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZXMgPSBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVzXCJdKVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzVGV4dCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzVGV4dC5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzT3JpZ2luYWxzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzT3JpZ2luYWxzLnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgYXBwbGljYXRpb25JRD86IHN0cmluZ1xuICAgIGRhdGFIYXNoQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgdW5pY29kZVZlcnNpb24/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogc3RyaW5nXG4gICAgZmlsZXM/OiBGaWxlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXBwbGljYXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcHBsaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9uSUQgPSBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25JRFwiXVxuICAgICAgICByZXN1bHQuZGF0YUhhc2hBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGF0YUhhc2hBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnVuaWNvZGVWZXJzaW9uID0ganNvbk9iamVjdFtcInVuaWNvZGVWZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LmZpbGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWxlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpbGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEZpbGUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmb3JtYXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVmFsdWUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWx1ZVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZm9ybWF0ID0ganNvbk9iamVjdFtcImZvcm1hdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF0dHJpYnV0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF0dHJpYnV0ZVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBWYWx1ZVxuICAgIGF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRob3JpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdXRob3JpdHlcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdKVxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbiB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIHR5cGU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXh0ZW5zaW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRXh0ZW5zaW9uXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbGlkaXR5IHtcbiAgICBub3RBZnRlcj86IFZhbHVlXG4gICAgbm90QmVmb3JlPzogVmFsdWVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVmFsaWRpdHkgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5ub3RBZnRlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RBZnRlclwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdEJlZm9yZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RCZWZvcmVcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlQ2hhaW4ge1xuICAgIG9yaWdpbj86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBzZXJpYWxOdW1iZXI/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzdWJqZWN0UEtBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBmaWxlTmFtZT86IFZhbHVlXG4gICAgdmFsaWRpdHk/OiBWYWxpZGl0eVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIHN1YmplY3Q/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBleHRlbnNpb25zPzogRXh0ZW5zaW9uW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVDaGFpbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENlcnRpZmljYXRlQ2hhaW5cblxuICAgICAgICByZXN1bHQub3JpZ2luID0ganNvbk9iamVjdFtcIm9yaWdpblwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0UEtBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic3ViamVjdFBLQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5maWxlTmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5ID0gVmFsaWRpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbGlkaXR5XCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0ID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0XCJdKVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmVySW5mbyB7XG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YVRvSGFzaD86IHN0cmluZ1xuICAgIGRpZ2VzdEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHNlcmlhbE51bWJlcj86IFZhbHVlXG4gICAgc2lnbmF0dXJlPzogVmFsdWVcbiAgICBzdWJqZWN0S2V5SWRlbnRpZmllcj86IFZhbHVlXG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVkQXR0cmlidXRlcz86IEV4dGVuc2lvbltdXG4gICAgY2VydGlmaWNhdGVDaGFpbj86IENlcnRpZmljYXRlQ2hhaW5bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaWduZXJJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2lnbmVySW5mb1xuXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhVG9IYXNoID0ganNvbk9iamVjdFtcImRhdGFUb0hhc2hcIl1cbiAgICAgICAgcmVzdWx0LmRpZ2VzdEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkaWdlc3RBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdEtleUlkZW50aWZpZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdEtleUlkZW50aWZpZXJcIl0pXG4gICAgICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5T2JqZWN0IHtcbiAgICBmaWxlUmVmZXJlbmNlPzogbnVtYmVyXG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIG9iamVjdFR5cGU/OiBzdHJpbmdcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBzaWduZXJJbmZvcz86IFNpZ25lckluZm9bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0XG5cbiAgICAgICAgcmVzdWx0LmZpbGVSZWZlcmVuY2UgPSBqc29uT2JqZWN0W1wiZmlsZVJlZmVyZW5jZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5vYmplY3RUeXBlID0ganNvbk9iamVjdFtcIm9iamVjdFR5cGVcIl1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2lnbmVySW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRQcm9wZXJ0aWVzIHtcbiAgICBhVFFBPzogbnVtYmVyXG4gICAgYml0UmF0ZVI/OiBudW1iZXJcbiAgICBiaXRSYXRlUz86IG51bWJlclxuICAgIGNoaXBUeXBlQT86IG51bWJlclxuICAgIG1pZmFyZU1lbW9yeT86IG51bWJlclxuICAgIHJmaWRUeXBlPzogbnVtYmVyXG4gICAgc0FLPzogbnVtYmVyXG4gICAgc3VwcG9ydDQ/OiBib29sZWFuXG4gICAgc3VwcG9ydE1pZmFyZT86IGJvb2xlYW5cbiAgICBhVFFCPzogc3RyaW5nXG4gICAgYVRSPzogc3RyaW5nXG4gICAgYmF1ZHJhdGUxPzogc3RyaW5nXG4gICAgYmF1ZHJhdGUyPzogc3RyaW5nXG4gICAgdUlEPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENhcmRQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FyZFByb3BlcnRpZXNcblxuICAgICAgICByZXN1bHQuYVRRQSA9IGpzb25PYmplY3RbXCJhVFFBXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUiA9IGpzb25PYmplY3RbXCJiaXRSYXRlUlwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVMgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVNcIl1cbiAgICAgICAgcmVzdWx0LmNoaXBUeXBlQSA9IGpzb25PYmplY3RbXCJjaGlwVHlwZUFcIl1cbiAgICAgICAgcmVzdWx0Lm1pZmFyZU1lbW9yeSA9IGpzb25PYmplY3RbXCJtaWZhcmVNZW1vcnlcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRUeXBlID0ganNvbk9iamVjdFtcInJmaWRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zQUsgPSBqc29uT2JqZWN0W1wic0FLXCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0NCA9IGpzb25PYmplY3RbXCJzdXBwb3J0NFwiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydE1pZmFyZSA9IGpzb25PYmplY3RbXCJzdXBwb3J0TWlmYXJlXCJdXG4gICAgICAgIHJlc3VsdC5hVFFCID0ganNvbk9iamVjdFtcImFUUUJcIl1cbiAgICAgICAgcmVzdWx0LmFUUiA9IGpzb25PYmplY3RbXCJhVFJcIl1cbiAgICAgICAgcmVzdWx0LmJhdWRyYXRlMSA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTFcIl1cbiAgICAgICAgcmVzdWx0LmJhdWRyYXRlMiA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTJcIl1cbiAgICAgICAgcmVzdWx0LnVJRCA9IGpzb25PYmplY3RbXCJ1SURcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFNlc3Npb25EYXRhIHtcbiAgICB0b3RhbEJ5dGVzUmVjZWl2ZWQ/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzU2VudD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGV4dExlU3VwcG9ydD86IG51bWJlclxuICAgIHByb2Nlc3NUaW1lPzogbnVtYmVyXG4gICAgY2FyZFByb3BlcnRpZXM/OiBDYXJkUHJvcGVydGllc1xuICAgIGFjY2Vzc0NvbnRyb2xzPzogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGVbXVxuICAgIGFwcGxpY2F0aW9ucz86IEFwcGxpY2F0aW9uW11cbiAgICBzZWN1cml0eU9iamVjdHM/OiBTZWN1cml0eU9iamVjdFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJGSURTZXNzaW9uRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTZXNzaW9uRGF0YVxuXG4gICAgICAgIHJlc3VsdC50b3RhbEJ5dGVzUmVjZWl2ZWQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1JlY2VpdmVkXCJdXG4gICAgICAgIHJlc3VsdC50b3RhbEJ5dGVzU2VudCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzU2VudFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZXh0TGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImV4dExlU3VwcG9ydFwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc1RpbWUgPSBqc29uT2JqZWN0W1wicHJvY2Vzc1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcmRQcm9wZXJ0aWVzID0gQ2FyZFByb3BlcnRpZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNhcmRQcm9wZXJ0aWVzXCJdKVxuICAgICAgICByZXN1bHQuYWNjZXNzQ29udHJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFjY2Vzc0NvbnRyb2xzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXBwbGljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQXBwbGljYXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTZWN1cml0eU9iamVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHR5cGVOYW1lPzogc3RyaW5nXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZWxlbWVudHM/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1xuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGVOYW1lID0ganNvbk9iamVjdFtcInR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZWxlbWVudHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImVsZW1lbnRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVsZW1lbnRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQREY0MTdJbmZvIHtcbiAgICBlcnJvckxldmVsPzogbnVtYmVyXG4gICAgY29sdW1ucz86IG51bWJlclxuICAgIHJvd3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUERGNDE3SW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBERjQxN0luZm9cblxuICAgICAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgICAgIHJlc3VsdC5jb2x1bW5zID0ganNvbk9iamVjdFtcImNvbHVtbnNcIl1cbiAgICAgICAgcmVzdWx0LnJvd3MgPSBqc29uT2JqZWN0W1wicm93c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB7XG4gICAgYmFyY29kZVR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBwZGY0MTdJbmZvPzogUERGNDE3SW5mb1xuICAgIGRhdGE/OiBhbnlbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChqc29uT2JqZWN0W1wiZGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBEb2N1bWVudFJlYWRlckV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb25cblxuICAgICAgICByZXN1bHQuYWN0aW9uID0ganNvbk9iamVjdFtcImFjdGlvblwiXVxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0cy5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXSlcbiAgICAgICAgcmVzdWx0LmVycm9yID0gRG9jdW1lbnRSZWFkZXJFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB7XG4gICAgbm90aWZpY2F0aW9uPzogbnVtYmVyXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb24gPSBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbG9jYWxpemVkTWVzc2FnZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICBzdHJpbmc/OiBzdHJpbmdcbiAgICBzdGFja1RyYWNlPzogU3RhY2tUcmFjZUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTdGFja1RyYWNlRWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUaHJvd2FibGUge1xuICAgIGxvY2FsaXplZE1lc3NhZ2U/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogc3RyaW5nXG4gICAgc3RyaW5nPzogc3RyaW5nXG4gICAgc3RhY2tUcmFjZT86IFN0YWNrVHJhY2VFbGVtZW50W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVGhyb3dhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVGhyb3dhYmxlXG5cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTdGFja1RyYWNlRWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFja1RyYWNlRWxlbWVudCB7XG4gICAgbGluZU51bWJlcj86IG51bWJlclxuICAgIGlzTmF0aXZlTWV0aG9kPzogYm9vbGVhblxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIGZpbGVOYW1lPzogc3RyaW5nXG4gICAgbWV0aG9kTmFtZT86IHN0cmluZ1xuICAgIHN0cmluZz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTdGFja1RyYWNlRWxlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFN0YWNrVHJhY2VFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LmxpbmVOdW1iZXIgPSBqc29uT2JqZWN0W1wibGluZU51bWJlclwiXVxuICAgICAgICByZXN1bHQuaXNOYXRpdmVNZXRob2QgPSBqc29uT2JqZWN0W1wiaXNOYXRpdmVNZXRob2RcIl1cbiAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9IGpzb25PYmplY3RbXCJjbGFzc05hbWVcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVOYW1lID0ganNvbk9iamVjdFtcImZpbGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5tZXRob2ROYW1lID0ganNvbk9iamVjdFtcIm1ldGhvZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEtEQ2VydGlmaWNhdGUge1xuICAgIGJpbmFyeURhdGE/OiBzdHJpbmdcbiAgICByZXNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcml2YXRlS2V5Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBLRENlcnRpZmljYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEtEQ2VydGlmaWNhdGVcblxuICAgICAgICByZXN1bHQuYmluYXJ5RGF0YSA9IGpzb25PYmplY3RbXCJiaW5hcnlEYXRhXCJdXG4gICAgICAgIHJlc3VsdC5yZXNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wicmVzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcml2YXRlS2V5ID0ganNvbk9iamVjdFtcInByaXZhdGVLZXlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dFBhcmFtIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dFBhcmFtIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VJbnB1dFBhcmFtXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgIGRhdGE/OiBhbnlbXVxuICAgIGZyaWVuZGx5TmFtZT86IHN0cmluZ1xuICAgIGF0dHJpYnV0ZXM/OiBQQUF0dHJpYnV0ZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBBUmVzb3VyY2VzSXNzdWVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFSZXNvdXJjZXNJc3N1ZXJcblxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQQUF0dHJpYnV0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQQUF0dHJpYnV0ZSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBBQXR0cmlidXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUQUNoYWxsZW5nZSB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgYXV4UENEPzogc3RyaW5nXG4gICAgY2hhbGxlbmdlUElDQz86IHN0cmluZ1xuICAgIGhhc2hQSz86IHN0cmluZ1xuICAgIGlkUElDQz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUQUNoYWxsZW5nZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRBQ2hhbGxlbmdlXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChqc29uT2JqZWN0W1wiZGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXV4UENEID0ganNvbk9iamVjdFtcImF1eFBDRFwiXVxuICAgICAgICByZXN1bHQuY2hhbGxlbmdlUElDQyA9IGpzb25PYmplY3RbXCJjaGFsbGVuZ2VQSUNDXCJdXG4gICAgICAgIHJlc3VsdC5oYXNoUEsgPSBqc29uT2JqZWN0W1wiaGFzaFBLXCJdXG4gICAgICAgIHJlc3VsdC5pZFBJQ0MgPSBqc29uT2JqZWN0W1wiaWRQSUNDXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cyB7XG4gICAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuICAgIG9wdGljYWw/OiBudW1iZXJcbiAgICBkZXRhaWxzT3B0aWNhbD86IERldGFpbHNPcHRpY2FsXG4gICAgcmZpZD86IG51bWJlclxuICAgIGRldGFpbHNSRklEPzogRGV0YWlsc1JGSURcbiAgICBwb3J0cmFpdD86IG51bWJlclxuICAgIHN0b3BMaXN0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1c1xuXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm9wdGljYWwgPSBqc29uT2JqZWN0W1wib3B0aWNhbFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc09wdGljYWwgPSBEZXRhaWxzT3B0aWNhbC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc09wdGljYWxcIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkID0ganNvbk9iamVjdFtcInJmaWRcIl1cbiAgICAgICAgcmVzdWx0LmRldGFpbHNSRklEID0gRGV0YWlsc1JGSUQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGFpbHNSRklEXCJdKVxuICAgICAgICByZXN1bHQucG9ydHJhaXQgPSBqc29uT2JqZWN0W1wicG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LnN0b3BMaXN0ID0ganNvbk9iamVjdFtcInN0b3BMaXN0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNPcHRpY2FsIHtcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG4gICAgbXJ6PzogbnVtYmVyXG4gICAgdGV4dD86IG51bWJlclxuICAgIGRvY1R5cGU/OiBudW1iZXJcbiAgICBzZWN1cml0eT86IG51bWJlclxuICAgIGltYWdlUUE/OiBudW1iZXJcbiAgICBleHBpcnk/OiBudW1iZXJcbiAgICB2ZHM/OiBudW1iZXJcbiAgICBwYWdlc0NvdW50PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNPcHRpY2FsIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc09wdGljYWxcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC50ZXh0ID0ganNvbk9iamVjdFtcInRleHRcIl1cbiAgICAgICAgcmVzdWx0LmRvY1R5cGUgPSBqc29uT2JqZWN0W1wiZG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuc2VjdXJpdHkgPSBqc29uT2JqZWN0W1wic2VjdXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBqc29uT2JqZWN0W1wiaW1hZ2VRQVwiXVxuICAgICAgICByZXN1bHQuZXhwaXJ5ID0ganNvbk9iamVjdFtcImV4cGlyeVwiXVxuICAgICAgICByZXN1bHQudmRzID0ganNvbk9iamVjdFtcInZkc1wiXVxuICAgICAgICByZXN1bHQucGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJwYWdlc0NvdW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNSRklEIHtcbiAgICBwYT86IG51bWJlclxuICAgIGNhPzogbnVtYmVyXG4gICAgYWE/OiBudW1iZXJcbiAgICB0YT86IG51bWJlclxuICAgIGJhYz86IG51bWJlclxuICAgIHBhY2U/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNSRklEIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc1JGSURcblxuICAgICAgICByZXN1bHQucGEgPSBqc29uT2JqZWN0W1wicGFcIl1cbiAgICAgICAgcmVzdWx0LmNhID0ganNvbk9iamVjdFtcImNhXCJdXG4gICAgICAgIHJlc3VsdC5hYSA9IGpzb25PYmplY3RbXCJhYVwiXVxuICAgICAgICByZXN1bHQudGEgPSBqc29uT2JqZWN0W1widGFcIl1cbiAgICAgICAgcmVzdWx0LmJhYyA9IGpzb25PYmplY3RbXCJiYWNcIl1cbiAgICAgICAgcmVzdWx0LnBhY2UgPSBqc29uT2JqZWN0W1wicGFjZVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZEU05DRGF0YSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBpc3N1aW5nQ291bnRyeT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBhbnlcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzaWduYXR1cmU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZT86IEJ5dGVzRGF0YVxuICAgIGNlcnRpZmljYXRlQ2hhaW4/OiBDZXJ0aWZpY2F0ZUNoYWluW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVkRTTkNEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVkRTTkNEYXRhXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5pc3N1aW5nQ291bnRyeSA9IGpzb25PYmplY3RbXCJpc3N1aW5nQ291bnRyeVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCeXRlc0RhdGEge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJ5dGVzRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJ5dGVzRGF0YVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclV2RmliZXJFbGVtZW50IHtcbiAgICByZWN0QXJyYXk/OiBEb2NSZWFkZXJGaWVsZFJlY3RbXVxuICAgIHJlY3RDb3VudD86IG51bWJlclxuICAgIGV4cGVjdGVkQ291bnQ/OiBudW1iZXJcbiAgICB3aWR0aD86IG51bWJlcltdXG4gICAgbGVuZ3RoPzogbnVtYmVyW11cbiAgICBhcmVhPzogbnVtYmVyW11cbiAgICBjb2xvclZhbHVlcz86IG51bWJlcltdXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGU/OiBudW1iZXJcbiAgICBlbGVtZW50RGlhZ25vc2U/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZU5hbWU/OiBzdHJpbmdcbiAgICBlbGVtZW50RGlhZ25vc2VOYW1lPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVXZGaWJlckVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclV2RmliZXJFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnJlY3RBcnJheSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlY3RBcnJheS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJlY3RDb3VudCA9IGpzb25PYmplY3RbXCJyZWN0Q291bnRcIl1cbiAgICAgICAgcmVzdWx0LmV4cGVjdGVkQ291bnQgPSBqc29uT2JqZWN0W1wiZXhwZWN0ZWRDb3VudFwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIndpZHRoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wid2lkdGhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQud2lkdGgucHVzaChqc29uT2JqZWN0W1wid2lkdGhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGVuZ3RoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGVuZ3RoXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmxlbmd0aC5wdXNoKGpzb25PYmplY3RbXCJsZW5ndGhcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFyZWEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFyZWFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhcmVhXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmFyZWEucHVzaChqc29uT2JqZWN0W1wiYXJlYVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29sb3JWYWx1ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbG9yVmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29sb3JWYWx1ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sb3JWYWx1ZXMucHVzaChqc29uT2JqZWN0W1wiY29sb3JWYWx1ZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dERhdGEge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGxpZ2h0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgaW1nQnl0ZXM/OiBhbnlbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXREYXRhXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5pbWdCeXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1nQnl0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWdCeXRlcy5wdXNoKGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICAgIGNoaXBQYWdlPzogbnVtYmVyXG4gICAgcHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWU/OiBudW1iZXJcbiAgICBlbGFwc2VkVGltZVJGSUQ/OiBudW1iZXJcbiAgICBtb3JlUGFnZXNBdmFpbGFibGU/OiBudW1iZXJcbiAgICByZmlkUmVzdWx0PzogbnVtYmVyXG4gICAgaGlnaFJlc29sdXRpb24/OiBib29sZWFuXG4gICAgZ3JhcGhpY1Jlc3VsdD86IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuICAgIHRleHRSZXN1bHQ/OiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcbiAgICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBiYXJjb2RlUG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIG1yelBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFtdXG4gICAgcmF3UmVzdWx0Pzogc3RyaW5nXG4gICAgZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24/OiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuICAgIHJmaWRTZXNzaW9uRGF0YT86IFJGSURTZXNzaW9uRGF0YVxuICAgIGF1dGhlbnRpY2l0eVJlc3VsdD86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG4gICAgYmFyY29kZVJlc3VsdD86IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdFxuICAgIGRvY3VtZW50VHlwZT86IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlW11cbiAgICBzdGF0dXM/OiBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXNcbiAgICB2ZHNuY0RhdGE/OiBWRFNOQ0RhdGFcblxuICAgIGdldFRleHRGaWVsZFZhbHVlQnlUeXBlKHsgZmllbGRUeXBlLCBsY2lkID0gMCwgc291cmNlID0gLTEsIG9yaWdpbmFsID0gZmFsc2UgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBvcmlnaW5hbD86IGJvb2xlYW4gfSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnRleHRSZXN1bHQgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXG4gICAgICAgIGlmIChmaWVsZCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgc291cmNlKVxuICAgICAgICBpZiAodmFsdWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBvcmlnaW5hbCA/IHZhbHVlLm9yaWdpbmFsVmFsdWUgOiB2YWx1ZS52YWx1ZVxuICAgIH1cblxuICAgIGdldFRleHRGaWVsZFN0YXR1c0J5VHlwZShmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnRleHRSZXN1bHQgPT0gdW5kZWZpbmVkKSByZXR1cm4gMFxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmluZEJ5VHlwZUFuZExjaWQoZmllbGRUeXBlLCBsY2lkKVxuICAgICAgICBpZihmaWVsZCAhPSB1bmRlZmluZWQgJiYgZmllbGQuc3RhdHVzICE9IG51bGwgJiYgZmllbGQuc3RhdHVzICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5zdGF0dXNcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBnZXRHcmFwaGljRmllbGRJbWFnZUJ5VHlwZSh7IGZpZWxkVHlwZSwgc291cmNlID0gLTEsIGxpZ2h0ID0gLTEsIHBhZ2VJbmRleCA9IC0xIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgbGlnaHQ/OiBudW1iZXIsIHBhZ2VJbmRleD86IG51bWJlciB9KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY1Jlc3VsdCA9PSB1bmRlZmluZWQgfHwgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcyA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgZm91bmRGaWVsZHM6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW10gPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcylcbiAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZFR5cGUgPT09IGZpZWxkVHlwZSlcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxuICAgICAgICBpZiAoc291cmNlICE9PSAtMSlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnNvdXJjZVR5cGUgIT09IHNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXG4gICAgICAgIGlmIChsaWdodCAhPT0gLTEpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5saWdodFR5cGUgIT09IGxpZ2h0KVxuICAgICAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gLTEpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5wYWdlSW5kZXggIT09IHBhZ2VJbmRleClcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgcmV0dXJuIGZvdW5kRmllbGRzLmxlbmd0aCA+IDAgPyBmb3VuZEZpZWxkc1swXS52YWx1ZSA6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGdldFF1YWxpdHlSZXN1bHQoeyBpbWFnZVF1YWxpdHlDaGVja1R5cGUsIHNlY3VyaXR5RmVhdHVyZSA9IC0xLCBwYWdlSW5kZXggPSAwIH06IHsgaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlOiBudW1iZXIsIHNlY3VyaXR5RmVhdHVyZT86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVzdWx0U3VtID0gMlxuICAgICAgICBpZiAodGhpcy5pbWFnZVF1YWxpdHkgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFN1bVxuXG4gICAgICAgIGxldCBpbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgICAgIGZvciAoY29uc3QgaXEgb2YgdGhpcy5pbWFnZVF1YWxpdHkpXG4gICAgICAgICAgICBpZiAoaXEgIT0gbnVsbCAmJiBpcSAhPSB1bmRlZmluZWQgJiYgaXEucGFnZUluZGV4ID09IHBhZ2VJbmRleClcbiAgICAgICAgICAgICAgICBpbWFnZVF1YWxpdHlHcm91cCA9IGlxXG4gICAgICAgIGlmIChpbWFnZVF1YWxpdHlHcm91cCA9PSBudWxsIHx8IGltYWdlUXVhbGl0eUdyb3VwID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cblxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGltYWdlUXVhbGl0eUdyb3VwLmltYWdlUXVhbGl0eUxpc3QpXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlKVxuICAgICAgICAgICAgICAgIGlmIChzZWN1cml0eUZlYXR1cmUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN1bSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3VsdCA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN1bSA9IGZpZWxkLnJlc3VsdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuZmVhdHVyZVR5cGUgPT09IHNlY3VyaXR5RmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN1bVxuICAgIH1cblxuICAgIGZpbmRCeVR5cGVBbmRMY2lkKHR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSB1bmRlZmluZWQgfHwgdGhpcy50ZXh0UmVzdWx0LmZpZWxkcyA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgbGV0IGZpZWxkXG4gICAgICAgIGNvbnN0IGZvdW5kRmllbGRzOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdID0gW11cblxuICAgICAgICBmb3IgKGZpZWxkIG9mIHRoaXMudGV4dFJlc3VsdC5maWVsZHMpXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSB0eXBlKVxuICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnB1c2goZmllbGQpXG4gICAgICAgIGlmIChmb3VuZEZpZWxkcy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgICBsZXQgZm91bmRGaWVsZCA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGZvciAoZmllbGQgb2YgZm91bmRGaWVsZHMpXG4gICAgICAgICAgICBpZiAobGNpZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvdW5kRmllbGQgPSBmaWVsZFxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5sY2lkID09PSBsY2lkKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5sY2lkID09PSBsY2lkKVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZFxuXG4gICAgICAgIHJldHVybiBmb3VuZEZpZWxkXG4gICAgfVxuXG4gICAgZmluZEJ5U291cmNlKGZpZWxkOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCwgc291cmNlVHlwZTogbnVtYmVyKTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGxldCB2YWx1ZVxuICAgICAgICBpZiAoc291cmNlVHlwZSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1yelZhbCA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAzKVxuICAgICAgICAgICAgaWYgKG1yelZhbCAhPSBudWxsICYmIG1yelZhbCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1yelZhbFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTgpXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICBjb25zdCB2aXN1YWxWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTcpXG4gICAgICAgICAgICByZXR1cm4gdmlzdWFsVmFsXG4gICAgICAgIH1cbiAgICAgICAgaWYoZmllbGQudmFsdWVzID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZmllbGQudmFsdWVzKVxuICAgICAgICAgICAgaWYgKGl0ZW0uc291cmNlVHlwZSA9PT0gc291cmNlVHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJzKHJlc3VsdFR5cGVzOiBudW1iZXJbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZih0aGlzLnJhd1Jlc3VsdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHRoaXMucmF3UmVzdWx0KVxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyTGlzdCA9IGpzb24uTGlzdFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0QXJyYXk6IGFueVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIGNvbnRhaW5lckxpc3Qpe1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgPT0gbnVsbCB8fCBjb250YWluZXIubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXN1bHRUeXBlIG9mIHJlc3VsdFR5cGVzKVxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRUeXBlID09IGNvbnRhaW5lci5yZXN1bHRfdHlwZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKGNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHRBcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyTGlzdCA9IHt9XG4gICAgICAgICAgICBuZXdDb250YWluZXJMaXN0W1wiTGlzdFwiXSA9IHJlc3VsdEFycmF5XG4gICAgICAgICAgICBjb25zdCBuZXdKc29uID0ge31cbiAgICAgICAgICAgIG5ld0pzb25bXCJDb250YWluZXJMaXN0XCJdID0gbmV3Q29udGFpbmVyTGlzdFxuICAgICAgICAgICAgbmV3SnNvbltcIlRyYW5zYWN0aW9uSW5mb1wiXSA9IGpzb24uVHJhbnNhY3Rpb25JbmZvXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFbmNyeXB0ZWRDb250YWluZXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRhaW5lcnMoW1xuICAgICAgICAgICAgZVJQUk1fUmVzdWx0VHlwZS5SUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX1JGSURfU0VTU0lPTixcbiAgICAgICAgICAgIGVSUFJNX1Jlc3VsdFR5cGUuUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9FTkNSWVBURURfUkNMLFxuICAgICAgICAgICAgZVJQUk1fUmVzdWx0VHlwZS5SUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX0xJQ0VOU0VcbiAgICAgICAgXSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0cyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuXG4gICAgICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWUgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lUkZJRCA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVJGSURcIl1cbiAgICAgICAgcmVzdWx0Lm1vcmVQYWdlc0F2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJtb3JlUGFnZXNBdmFpbGFibGVcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRSZXN1bHQgPSBqc29uT2JqZWN0W1wicmZpZFJlc3VsdFwiXVxuICAgICAgICByZXN1bHQuaGlnaFJlc29sdXRpb24gPSBqc29uT2JqZWN0W1wiaGlnaFJlc29sdXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmdyYXBoaWNSZXN1bHQgPSBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImdyYXBoaWNSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC50ZXh0UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJ0ZXh0UmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5R3JvdXAuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdSZXN1bHQgPSBqc29uT2JqZWN0W1wicmF3UmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiA9IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRTZXNzaW9uRGF0YSA9IFJGSURTZXNzaW9uRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFNlc3Npb25EYXRhXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImF1dGhlbnRpY2l0eVJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVSZXN1bHQgPSBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50VHlwZS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzXCJdKVxuICAgICAgICByZXN1bHQudmRzbmNEYXRhID0gVkRTTkNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2ZHNuY0RhdGFcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9BdXRoZW50aWNpdHkgPSB7XG4gICAgTk9ORTogMCxcbiAgICBVVl9MVU1JTkVTQ0VOQ0U6IDEsXG4gICAgSVJfQjkwMDogMixcbiAgICBJTUFHRV9QQVRURVJOOiA0LFxuICAgIEFYSUFMX1BST1RFQ1RJT046IDgsXG4gICAgVVZfRklCRVJTOiAxNixcbiAgICBJUl9WSVNJQklMSVRZOiAzMixcbiAgICBPQ1JfU0VDVVJJVFlfVEVYVDogNjQsXG4gICAgSVBJOiAxMjgsXG4gICAgUEhPVE9fRU1CRURfVFlQRTogNTEyLFxuICAgIEhPTE9HUkFNUzogNDA5NixcbiAgICBQSE9UT19BUkVBOiA4MTkyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT046IDMyNzY4LFxuICAgIEJBUkNPREVfRk9STUFUX0NIRUNLOiA2NTUzNixcbiAgICBLSU5FR1JBTTogMTMxMDcyLFxuICAgIEhPTE9HUkFNU19ERVRFQ1RJT046IDUyNDI4OCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0Vycm9yQ29kZXMgPSB7XG4gICAgUkZJRF9FUlJPUl9OT19FUlJPUjogMHgwMDAwMDAwMSxcbiAgICBSRklEX0VSUk9SX0FMUkVBRFlfRE9ORTogMHgwMDAwMDAwMixcbiAgICBSRklEX0VSUk9SX0ZBSUxFRDogMHhmZmZmZmZmZixcbiAgICBSRklEX0VSUk9SX05PX0NISVBfREVURUNURUQ6IDB4ODAwMTAwMDEsXG4gICAgUkZJRF9FUlJPUl9OT1RfQVZBSUxBQkxFOiAweDgwMDEwMDAyLFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6IDB4ODAwMTAwMDQsXG4gICAgUkZJRF9FUlJPUl9OT1RfSU5JVElBTElaRUQ6IDB4ODAwMTAwMDUsXG4gICAgUkZJRF9FUlJPUl9OT1RfRU5PVUdIX01FTU9SWTogMHg4MDAxMDAwNixcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfRElSRUNUT1JZOiAweDgwMDEwMDA4LFxuICAgIFJGSURfRVJST1JfVU5LTk9XTl9DT01NQU5EOiAweDgwMDEwMDA5LFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogMHg4MDAxMDAwQSxcbiAgICBSRklEX0VSUk9SX0JVU1k6IDB4ODAwMTAwMEIsXG4gICAgUkZJRF9FUlJPUl9PTERfRklSTVdBUkU6IDB4ODAwMTAwMEMsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogMHg4MDAyMDAwMCxcbiAgICBSRklEX0VSUk9SX1BDU0NfUkVBREVSX05PVF9BVkFJTEFCTEU6IDB4ODAwMjAwMDEsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBTlRfQ09OTkVDVF9DQVJEOiAweDgwMDIwMDAyLFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IDB4ODAwMjAwMDMsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX09QRVJBVElPTl9DQU5DRUxMRUQ6IDB4ODAwMjAwMDQsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfQlVTWTogMHg4MDAyMDAwNSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NDQVJEOiAweDgwMDIwMDA2LFxuICAgIFJGSURfRVJST1JfUENTQ19FWFRfTEVfRkFJTEVEOiAweDgwMDIwMDEwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IDB4ODYwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfQVBQX1NFTEVDVElPTl9GQUlMVVJFOiAweDg2MDAwMDAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX01BQ19GQUlMOiAweDg2MDAwMTAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAweDg2MDAwMTAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAxMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRV9EQVRBOiAweDg2MDAwMTAzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzhFX01JU1NJTkc6IDB4ODYwMDAyMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfTUlTU0lORzogMHg4NjAwMDIwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET185OV9NSVNTSU5HOiAweDg2MDAwMjAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX01BQ19JTkNPUlJFQ1Q6IDB4ODYwMDAyMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfSU5DT1JSRUNUOiAweDg2MDAwMjA0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X05PTl9UTFZfUkVTUE9OU0VfREFUQTogMHg4NjAwMDMwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogMHg4NjAwMDMwMSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTlRfQVVUSF9GQUlMVVJFOiAweDg2MDAwMzAyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfS0FUX0ZBSUxVUkU6IDB4ODYwMDAzMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogMHg4NjAwMDMwNCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QU09fQ0VSVElGSUNBVEVfRkFJTFVSRTogMHg4NjAwMDMwNSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6IDB4ODYwMDAzMDYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfR0VUX0NIQUxMRU5HRV9GQUlMVVJFOiAweDg2MDAwMzA3LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0VYVF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDksXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9OT1RfRk9VTkQ6IDB4ODAwMDZBODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YxOiAweDgwMDA2MjgyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMjogMHg4MDAwNkIwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTkNPUlJFQ1RfUEFSQU1TOiAweDgwMDA2QTgwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X05PX1JFRkVSRU5DRV9EQVRBOiAweDgwMDA2QTg4LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EOiAweDgwMDA2M0MxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEOiAweDgwMDA2M0MwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDogMHg4MDAwNjI4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDI6IDB4ODAwMDY5ODMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEMjogMHg4MDAwNjk4NCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDI6IDB4ODAwMDY5ODUsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0ZBSUxFRDogMHg4MDEwNjNDMCxcbiAgICBSRklEX0VSUk9SX05PVF9QRVJGT1JNRUQ6IDB4ODMwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogMHg4MzAwMDAwMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVU5TVVBQT1JURURfT1BFUkFUSU9OOiAweDgzMDAwMDAyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX1VOS05PV046IDB4ODMwMDAwMTAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAweDgzMDAwMDExLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX05PVF9TRVQ6IDB4ODMwMDAwMTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOS05PV046IDB4ODMwMDAwMTMsXG4gICAgUkZJRF9FUlJPUl9TZXNzaW9uX1Byb2NlZHVyZV9UeXBlX1Vuc3VwcG9ydGVkOiAweDgzMDAwMDE0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9OT1RfU0VUOiAweDgzMDAwMDE1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOS05PV05fVFlQRTogMHg4MzAwMDAxNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAweDgzMDAwMDE3LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9TTV9UWVBFOiAweDgzMDAwMDE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1JFU1RSSUNURUQ6IDB4ODMwMDAwMTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODMwMDAwMUEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfTk9UX1NFVDogMHg4MzAwMDAxQixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFdEX01BTkFHRU1FTlRfTk9UX0FVVEhPUklaRUQ6IDB4ODMwMDAwMUMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogMHg4MzAwMDAyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfU006IDB4ODMwMDAwMjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1BBQ0U6IDB4ODMwMDAwMjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IDB4ODMwMDAwMjMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1RBOiAweDgzMDAwMDI0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQTogMHg4MzAwMDAyNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogMHg4MzAwMDAyNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQ0FfRkFJTEVEOiAweDgzMDAwMDI3LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9UQV9GQUlMRUQ6IDB4ODMwMDAwMjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogMHg4MzAwMDAyOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUklfRkFJTEVEOiAweDgzMDAwMDJBLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAweDgzMDAwMDMwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogMHg4MzAwMDAzMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0VYUElSWTogMHg4MzAwMDA0MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0JJUlRIOiAweDgzMDAwMDQxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogMHg4MzAwMDA0MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1JFUVVJUkVTX0FQUF9TRUxFQ1RJT046IDB4ODMwMDAwNTAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1NFVDogMHg4MzAwMDA1MSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IDB4ODMwMDAwNTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgzMDAwMDYwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX05PVF9FTk9VR0hfREFUQTogMHg4MzAxMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogMHg4MzAyMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9VTkVYUEVDVEVEX0RBVEE6IDB4ODMwMzAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAweDgzMDQwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogMHg4MzA1MDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1VTRV9EQVRBOiAweDgzMDYwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfUkVBRF9EQVRBOiAweDgzMDcwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IDB4ODMwODAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X05PX0VSUk9SOiAweDg0MDAwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9USU1FX09VVDogMHg4NDAxMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OOiAweDg0MDIwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DUkM6IDB4ODQwMzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfSU5URUdSSVRZOiAweDg0MDQwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0xFTkdUSDogMHg4NDA1MDAwMCxcbiAgICBSRklEX0VSUk9SX0xheWVyMzRfUkZVOiAweDg0MDYwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT05fVE9PX01BTlk6IDB4ODQwNzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MX0I6IDB4ODQwODAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfQ09OVEVOVFM6IDB4ODQwOTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MOiAweDg0MEEwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9HTE9CQUxfVElNRV9PVVQ6IDB4ODQwQjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X01JRkFSRV9BVVRIOiAweDg0MEMwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fRVJST1I6IDB4ODQwRDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9DT0xMSVNJT046IDB4ODQwRTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9BQ0tOT1dMRURHRTogMHg4NDBGMDAwMCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTm8gZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfQUxSRUFEWV9ET05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRoZSByZXF1ZXN0ZWQgb3BlcmF0aW9uIGlzIGFscmVhZHkgcGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBjaGlwIGlzIGRldGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBwYXJhbWV0ZXIgaW4gRXhlY3V0ZUNvbW1hbmQoKSBjYWxsIGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBEZXZpY2UgaXMgdW5pbml0aWFsaXplZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9OT1RfRU5PVUdIX01FTU9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBPdXQgb2YgbWVtb3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0lOVkFMSURfRElSRUNUT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1VOS05PV05fQ09NTUFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmtub3duIGNvbW1hbmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfRklMRV9JT19FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IElPIEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0JVU1k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUkZJRCBpcyBidXN5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX09MRF9GSVJNV0FSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUaGUgZmlybXdhcmUgbmVlZHMgdG8gYmUgdXBkYXRlZCB0byBhIG5ld2VyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfUENTQ19GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfUkVBREVSX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogVGhlIHJlYWRlciBpcyB1bmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9QQ1NDX0NBTlRfQ09OTkVDVF9DQVJEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFRoZSBjYXJkIGNhbm5vdCBiZSBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogVGhlIGNhcmQgaXMgbm90IGNvbm5lY3RlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9QQ1NDX09QRVJBVElPTl9DQU5DRUxMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogT3BlcmF0aW9uIGlzIGNhbmNlbGxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfQlVTWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgY2FyZCBpcyBidXN5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NDQVJEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEZhaWxlZCBTbWFydCBDYXJkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfRVhUX0xFX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBFeHRMZSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTZWN1cmUgTWVzc2FnaW5nIHdhcyBub3QgYWN0aXZhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9BUFBfU0VMRUNUSU9OX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0FfMDMgXFxcIkFwcGxpY2F0aW9uIHNlbGVjdGlvbiBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDEgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBNQUMgZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9CXzAyIFxcXCJNdXR1YWwgYXV0aGVudGljYXRpb24gZW5jcnlwdGlvbiBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDMgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBmYWlsdXJlIGRhdGFcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9TTV9ET184RV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgTUFDIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBjcnlwdG9ncmFtIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzk5X01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBzZWN1cmVkIHN0YXR1cyBieXRlcyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgaW5jb3JyZWN0IE1BQ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgaW5jb3JyZWN0IGNyeXB0b2dyYW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X05PTl9UTFZfUkVTUE9OU0VfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE5vdCBUTFYgcmVzcG9uc2UgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfV1JPTkdfUk5EX0lDQ19MRU5HVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBXcm9uZyBkYXRhIGxlbmd0aCAoQVBEVV9JTlNfR0VUX0NIQUxMRU5HRSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0lOVF9BVVRIX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBBUERVX0lOU19JTlRFUk5BTF9BVVRIRU5USUNBVEUgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgS0FUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfRFNUX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IERTVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QU09fQ0VSVElGSUNBVEVfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBTTyBDRVJUSUZJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEFUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdFVCBDSEFMTEVOR0UgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0VYVEVSTkFMX0FVVEhFTlRJQ0FURSAoZXh0ZXJuYWwgYXV0aGVudGljYXRpb24pIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0dFTkVSQUxfQVVUSF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogR2VuZXJhbCBBdXRoZW50aWNpdHkgRmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9OT1RfRk9VTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBGaWxlIHNlbGVjdGlvbiBmYWlsdXJlIC8gZmlsZSBub3QgZm91bmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBSZWFkaW5nIGJleW9uZCBFT0YgLyBVbmV4cGVjdGVkIEVPRlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfSU5DT1JSRUNUX1BBUkFNUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEluY29ycmVjdCBwYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X05PX1JFRkVSRU5DRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm8gcmVmZXJlbmNlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIHN1c3BlbmRlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgYmxvY2tlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIGRlYWN0aXZhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgYmxvY2tlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIGRlYWN0aXZhdGVkIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBzdXNwZW5kZWQgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBOb3QgcGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fSVNfQ0xPU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFNlc3Npb24gaXMgY2xvc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVU5TVVBQT1JURURfT1BFUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVuc3VwcG9ydGVkIHRlcm1pbmFsIG9wZXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCB0eXBlIHVua25vd25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX0JBRF9DRVJUSUZJQ0FURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCB0eXBlIGJhZCBjZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCB0eXBlIG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9VTktOT1dOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVua25vd24gcHJvY2VkdXJlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU2Vzc2lvbl9Qcm9jZWR1cmVfVHlwZV9VbnN1cHBvcnRlZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbnN1cHBvcnRlZCBwcm9jZWR1cmUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHJvY2VkdXJlIHR5cGUgbm90IHNldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgdW5rbm93biB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgdW5zdXBwb3J0ZWQgU00gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSBpbmNvcnJlY3QgU00gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IHJlc3RyaWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSBub3Qgc2V0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fUFdEX01BTkFHRU1FTlRfTk9UX0FVVEhPUklaRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUFdEIG1hbmFnZW1lbnQgbm90IGF1dGhvcml6ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9VTktOT1dOX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGNvbnRyb2wgdW5rbm93biB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfU006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGNvbnRyb2wgdW5rbm93biB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQQUNFIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0FfS0VZUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSBrZXlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVEEgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSByZXF1aXJlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0lOQ09SUkVDVF9PUFRJT05fQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IG9wdGlvbiBDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9UQV9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVEEgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQUFfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFBIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSSSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9QQV9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFNPIHNpZ25hdHVyZSBjaGVjayBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBIYXNoIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBhdXggZGF0YSAtIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgYXV4IGRhdGEgLSBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9DT01NVU5JVFlfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBhdXggZGF0YSAtIGNvbW11bml0eSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIHJlcXVpcmVzIGFwcCBzZWxlY3Rpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9TRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUElOIG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9WRVJJRklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gbm90IHZlcmlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX05PVF9FTk9VR0hfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IEluc3VmZmljaWVudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9VTkVYUEVDVEVEX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBVbmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IENvbnRhaW5zIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfV1JPTkdfVEFHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogV3JvbmcgdGFnXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1VTRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ2Fubm90IHVzZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9DQU5UX1JFQURfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IENhbm5vdCByZWFkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBBY2Nlc3MgZGVuaWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfTk9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBObyBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X1RJTUVfT1VUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gVGltZW91dFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIENvbGxpc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0NSQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIENSQ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfSU5URUdSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gRGF0YSBpbnRlZ3JpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0xFTkdUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIERhdGEgbGVuZ3RoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xheWVyMzRfUkZVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gUkZVXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OX1RPT19NQU5ZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gVG9vIG1hbnkgY29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0xfQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFByb3RvY29sIEJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0NPTlRFTlRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gRGF0YSBjb250ZW50c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gUHJvdG9jb2xcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9HTE9CQUxfVElNRV9PVVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBHbG9iYSB0aW1lb3V0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfTUlGQVJFX0FVVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBNSUZBUkUgYXV0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFNBTSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9DT0xMSVNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBTQU0gY29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfU0FNX0FDS05PV0xFREdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gU0FNIGFja25vd2xlZGdlXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ0Vycm9yQ29kZXMgPSB7XG4gICAgRVJSX0xEU19PSzogMHgwMDAwMDAwMSxcbiAgICBFUlJfTERTX0FTTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwMSxcbiAgICBSUl9MRFNfQVNOX05PVF9FTk9VR0hfREFUQTogMHg4MDAwMDAwMixcbiAgICBFUlJfTERTX0FTTl9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODAwMDAwMDMsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMDgsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfRU5DQVBfQ09OVEVOVFNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMDksXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwQSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDEzLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNCxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RJR0VTVF9BTEdPUklUSE1fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTUsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9ER19IQVNIRVNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTYsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTcsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxOCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxOSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUEsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSVNTVUVSX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFCLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1ZBTElESVRZX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFDLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NVQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUQsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9QS19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFGLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIwLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjEsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDIyLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0RJR0VTVF9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjMsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI0LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05fQUxHX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI1LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19VTlNJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyNyxcbiAgICBFUlJfTERTX0lDQU9fTERTX09CSkVDVF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgwMDAwMDMwLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfRU1QVFk6IDB4ODAwMDAwMzEsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzIsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwMzMsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0VSUk9SOiAweDgwMDAwMDM0LFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19TSUdORURfQVRUUlNfTUlTU0VEOiAweDgwMDAwMDM2LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdORVJfSU5GT19DQU5UX0ZJTkRfQ0VSVElGSUNBVEU6IDB4ODAwMDAwMzUsXG4gICAgRVJSX0xEU19BVVRIX0VSUk9SOiAweDgwMDAwMDUwLFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDgwMDAwMDUxLFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogMHg4MDAwMDA1MixcbiAgICBFUlJfTERTX0FVVEhfTUVTU0VEX0FMR09SSVRITVM6IDB4ODAwMDAwNTMsXG4gICAgRVJSX0xEU19BVVRIX1BVQkxJQ19LRVlfREFUQV9JTlZBTElEOiAweDgwMDAwMDU0LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTUsXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTYsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwNTcsXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOQ09SUkVDVDogMHg4MDAwMDA1OCxcbiAgICBFUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfTk9UX0RFRklORUQ6IDB4ODAwMDAwNTksXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IDB4ODAwMDAwNUEsXG4gICAgRVJSX0xEU19ER19XUk9OR19UQUg6IDB4ODAwMDAwNzAsXG4gICAgRVJSX0xEU19ER19DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODAwMDAwNzEsXG4gICAgRVJSX0xEU19CQVBfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMTEsXG4gICAgRVJSX0xEU19QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogMHg4MTAwMDAyMCxcbiAgICBFUlJfTERTX1BBQ0VfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjEsXG4gICAgRVJSX0xEU19QQUNFX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOiAweDgxMDAwMDIyLFxuICAgIEVSUl9MRFNfUEFDRV9FUEhFTUVSQUxfS0VZU19DQU5UX0NSRUFURTogMHg4MTAwMDAyMyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX0RFQ09ERV9OT05DRTogMHg4MTAwMDAyNCxcbiAgICBFUlJfTERTX1BBQ0VfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogMHg4MTAwMDAyNSxcbiAgICBFUlJfTERTX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9GT1JNQVQ6IDB4ODEwMDAwMjYsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyNyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6IDB4ODEwMDAwMjgsXG4gICAgRVJSX0xEU19QQUNFX01BUFBJTkdfQ0FOVF9QRVJGT1JNOiAweDgxMDAwMDI5LFxuICAgIEVSUl9MRFNfUEFDRV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6IDB4ODEwMDAwMkEsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX0lOQ09SUkVDVDogMHg4MTAwMDAyQixcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfQ0FOVF9WRVJJRlk6IDB4ODEwMDAwMkMsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX05PTl9NQVRDSElORzogMHg4MTAwMDAyRCxcbiAgICBFUlJfTERTX1BBQ0VfSU1fU0NIRU1FX0lOQ09SUkVDVDogMHg4MTAwMDAyRSxcbiAgICBFUlJfTERTX1BBQ0VfSU1fUkFORE9NX01BUFBJTkdfRkFJTEVEOiAweDgxMDAwMDJGLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX1BVQkxJQ19LRVk6IDB4ODEwMDAwMzAsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfSU5GTzogMHg4MTAwMDAzMSxcbiAgICBFUlJfTERTX0NBX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMDMyLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0RPTUFJTl9QQVJBTUVURVJTOiAweDgxMDAwMDMzLFxuICAgIEVSUl9MRFNfQ0FfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMzQsXG4gICAgRVJSX0xEU19DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg4MTAwMDAzNSxcbiAgICBFUlJfTERTX0NBX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM2LFxuICAgIEVSUl9MRFNfQ0FfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogMHg4MTAwMDAzNyxcbiAgICBFUlJfTERTX0NBX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAzOCxcbiAgICBFUlJfTERTX1RBX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMDQwLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9CVUlMRF9DRVJUSUZJQ0FURV9DSEFJTjogMHg4MTAwMDA0MSxcbiAgICBFUlJfTERTX1RBX0NBTlRfRklORF9JU19QUklWQVRFX0tFWTogMHg4MTAwMDA0MixcbiAgICBFUlJfTERTX1RBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDQzLFxuICAgIEVSUl9MRFNfVEFfU0lHTkFUVVJFX0JVSUxESU5HX0VSUk9SOiAweDgxMDAwMDQ0LFxuICAgIEVSUl9MRFNfVEFfSU5WQUxJRF9LRVlfQUxHT1JJVEhNX1BBUkFNRVRFUlM6IDB4ODEwMDAwNDUsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg4MTAwMDA1MCxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAwNTEsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9QQVJBTUVURVJTOiAweDgxMDAwMDUyLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTkRFRklORURfUEFSQU1FVEVSUzogMHg4MTAwMDA1MyxcbiAgICBFUlJfTERTX0FBX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1NCxcbiAgICBFUlJfTERTX0FBX1VOU1VQUE9SVEVEX1JFQ09WRVJZX1NDSEVNRTogMHg4MTAwMDA1NSxcbiAgICBFUlJfTERTX0FBX0lOQ09SUkVDVF9UUkFJTEVSOiAweDgxMDAwMDU2LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MTAwMDA1NyxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfQ0FOVF9GSU5EOiAweDgxMDAwMDcwLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA3MSxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfSU5DT01QTEVURV9EQVRBOiAweDgxMDAwMDcyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTUlTU0lOR19NQU5EQVRPUllfREFUQV9QSzogMHg4MTAwMDA2MCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfVU5TVVBQT1JURUQ6IDB4ODEwMDAwNjIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX1VOU1VQUE9SVEVEX1RFUk1JTkFMX1RZUEU6IDB4ODEwMDAwNjMsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5WQUxJRF9QQVJBTVM6IDB4ODEwMDAwNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NQSV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NBUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjMsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSFJfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjQsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY1LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfRlJPTV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElEX1RPX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY3LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2OCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY5LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfTUlTU0lORzogMHg4MTAwMDE2QSxcbiAgICBFUlJfTERTX1ZEU19VTlNVUFBPUlRFRF9WRVJTSU9OOiAweDgxMDAwMjAwLFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9TSVpFOiAweDgxMDAwMjAxLFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwMixcbiAgICBFUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfU0laRTogMHg4MTAwMDIwMyxcbiAgICBFUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfREFUQTogMHg4MTAwMDIwNCxcbiAgICBFUlJfTERTX1ZEU19TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAyMDUsXG4gICAgRVJSX0xEU19WRFNfTkNfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAzMDAsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9IRUFERVI6IDB4ODEwMDAzMDIsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfVFlQRTogMHg4MTAwMDMwMyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9WRVJTSU9OOiAweDgxMDAwMzA0LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0lTU1VJTkdfQ09VTlRSWTogMHg4MTAwMDMwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9NRVNTQUdFOiAweDgxMDAwMzA2LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR05BVFVSRTogMHg4MTAwMDMwNyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfQUxHT1JJVEhNOiAweDgxMDAwMzA4LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0NFUlRJRklDQVRFOiAweDgxMDAwMzA5LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19WQUxVRTogMHg4MTAwMDMwQSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfT0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0tcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlJfTERTX0FTTl9OT1RfRU5PVUdIX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IE5vdCBlbm91Z2ggZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOOiBDb250ZW50cyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfRU5DQVBfQ09OVEVOVFNfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IEVuY2FwIGNvbnRlbnRzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RJR0VTVF9BTEdPUklUSE1fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogRGlnZXN0IGFsZ29yaXRobSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fTERTX09CSkVDVF9ER19IQVNIRVNfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogREcgaGFzaGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluZm8gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU05fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNOIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSVNTVUVSX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJc3N1ZXIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1ZBTElESVRZX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWYWxpZGl0eSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9QS19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBQSyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogRXh0ZW5zaW9ucyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORVJfSU5GT19WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNJRCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05fQUxHX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTaWduIGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmF0dXJlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORVJfSU5GT19VTlNJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVW5zaWduZWQgYXR0cmlidXRlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19JQ0FPX0xEU19PQkpFQ1RfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gTERTIG9iamVjdDogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC10aGlzLkVSUl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lZCBkYXRhOiBTaWduZXIgaW5mbyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25lciBpbmZvIGNhbm5vdCBmaW5kIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBwdWJsaWMga2V5IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX01FU1NFRF9BTEdPUklUSE1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogTWVzc2VkIGFsZ29yaXRobXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9QVUJMSUNfS0VZX0RBVEFfSU5WQUxJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFB1YmxpYyBrZXkgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfREFUQV9JTlZBTElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX05PVF9ERUZJTkVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgbm90IGRlZmluZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19ER19XUk9OR19UQUg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBERzogV3JvbmcgVGFnXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBTeW1tZXRyaWMgQ3lwaGVyIENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBLZXkgQWdyZWVtZW50IENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBFcGhlbWVyYWwgS2V5cyBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX0RFQ09ERV9OT05DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IERlY29kZSBOb25jZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBTaGFyZWQgU2VjcmV0IENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgRm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfTUFQUElOR19FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX01BUFBJTkdfQ0FOVF9QRVJGT1JNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgUGVyZm9ybVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE5vbi1NYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NBX0NBTlRfRklORF9JTkZPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIEluZm9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0RPTUFJTl9QQVJBTUVURVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIERvbWFpbiBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NBX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogRXBoZW1lcmFsIEtleXMgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogTm9uLU1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX0lOQ09SUkVDVF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX0NBTlRfQlVJTERfQ0VSVElGSUNBVEVfQ0hBSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEJ1aWxkIENlcnRpZmljYXRlIENoYWluXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX0NBTlRfRklORF9JU19QUklWQVRFX0tFWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBDYW5ub3QgRmluZCBJUyBQcml2YXRlIEtleVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19UQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19UQV9TSUdOQVRVUkVfQlVJTERJTkdfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogU2lnbmF0dXJlIEJ1aWxkaW5nIEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX0lOVkFMSURfS0VZX0FMR09SSVRITV9QQVJBTUVURVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEludmFsaWQgS2V5IEFsZ29yaXRobSBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BQV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9QQVJBTUVURVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgSW5jb3JyZWN0IFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTkRFRklORURfUEFSQU1FVEVSUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IFVuZGVmaW5lZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBTaWduYXR1cmUgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIHJlY292ZXJ5IHNjaGVtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BQV9JTkNPUlJFQ1RfVFJBSUxFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBJbmNvcnJlY3QgVHJhaWxlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBDYW5ub3QgRmluZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPTVBMRVRFX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvbXBsZXRlIERhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTUlTU0lOR19NQU5EQVRPUllfREFUQV9QSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBNaXNzaW5nIG1hbmRhdG9yeSBkYXRhIFBLXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfVU5TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX1VOU1VQUE9SVEVEX1RFUk1JTkFMX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hBVCB1bnN1cHBvcnRlZCB0ZXJtaW5hbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOVkFMSURfUEFSQU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGludmFsaWQgcGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX0NQSV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDUEkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENBUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hSX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIQVQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfRlJPTV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBWYWxpZCBmcm9tIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElEX1RPX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIHRvIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogRXh0ZW5zaW9ucyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQkFQX1NZTU1FVFJJQ19DWVBIRVJfQ0FOVF9JTklUSUFMSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQkFQOiBTeW1tZXRyaWMgQ3lwaGVyIENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIERHOiBDb250ZW50cyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lZCBkYXRhOiBTaWduZXIgaW5mbyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0NBTV9EQVRBX0NBTlRfVkVSSUZZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogQ0FNIGRhdGEgY2Fubm90IHZlcmlmeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0NBTV9EQVRBX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IENBTSBkYXRhIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0NBTV9EQVRBX05PTl9NQVRDSElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IENBTSBkYXRhIG5vbi1tYXRjaGluZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0lNX1JBTkRPTV9NQVBQSU5HX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFJhbmRvbSBtYXBwaW5nIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0lNX1NDSEVNRV9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBJTSBzY2hlbWUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19JU1NVSU5HX0NPVU5UUllfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IElzc3VpbmcgY291bnRyeSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IElzc3VpbmcgY291bnRyeSBzaXplXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBjZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSEVBREVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBoZWFkZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0lTU1VJTkdfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgaXNzdWluZyBjb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9NRVNTQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBtZXNzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdOQVRVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHNpZ25hdHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3Qgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBzaWduYXR1cmUgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogU2lnbmF0dXJlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogU2lnbmF0dXJlIGNlcnRpZmljYXRlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgY2VydGlmaWNhdGUgc2l6ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfVU5TVVBQT1JURURfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogVW5zdXBwb3J0ZWQgdmVyc2lvblwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUgPSB7XG4gICAgQ1RfVU5ERUZJTkVEOiAwLFxuICAgIENUX0NTQ0E6IDEsXG4gICAgQ1RfQ1NDQV9MSU5LOiAyLFxuICAgIENUX0RTOiAzLFxuICAgIENUX01MUzogNCxcbiAgICBDVF9ERVZfTFM6IDUsXG4gICAgQ1RfREVGX0xTOiA2LFxuICAgIENUX0JMUzogNyxcbiAgICBDVF9MRFMyOiA4LFxuICAgIENUX0JDUzogOSxcbiAgICBDVF9CQ1NOQzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBSR0xNZWFzdXJlU3lzdGVtID0ge1xuICAgIE1FVFJJQzogMCxcbiAgICBJTVBFUklBTDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1Jlc3VsdFR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FTVBUWTogMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19JTUFHRTogMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTEVfSU1BR0U6IDIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfT0NSX0VYVEVOREVEOiAzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERVM6IDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9HUkFQSElDUzogNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9URVNUX1FVQUxJVFk6IDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9UWVBFU19DQU5ESURBVEVTOiA4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ0hPU0VOX0RPQ1VNRU5UX1RZUEVfQ0FORElEQVRFOiA5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRTX0lORk9fTElTVDogMTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9PQ1JfTEVYSUNBTF9BTkFMWVpFOiAxNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19VTkNST1BQRURfSU1BR0U6IDE2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVklTVUFMX09DUl9FWFRFTkRFRDogMTcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfVEVYVF9EQVRBOiAxOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19JTUFHRV9EQVRBOiAxOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0FVVEhFTlRJQ0lUWTogMjAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FT1NfSU1BR0U6IDIzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFZRVJfSU1BR0U6IDI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFOiAyNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRV9URVhUX0RBVEE6IDI2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklFTERfRklMRV9JTUFHRTogMjcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9EQVRBQkFTRV9DSEVDSzogMjgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSU5HRVJQUklOVF9URU1QTEFURV9JU086IDI5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5QVVRfSU1BR0VfUVVBTElUWTogMzAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9SRklEX1NFU1NJT046IDQ4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfRU5DUllQVEVEX1JDTDogNDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9MSUNFTlNFOiA1MCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lNQUdFUzogMzcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9IT0xPX1BBUkFNUzogNDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1NUQVRVUzogMzMsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFUeXBlcyA9IHtcbiAgICBGUk9OVDogXCJmcm9udFwiLFxuICAgIEJBQ0s6IFwiYmFja1wiLFxufVxuXG5leHBvcnQgY29uc3QgRnJhbWVTaGFwZVR5cGUgPSB7XG4gICAgTElORTogMCxcbiAgICBDT1JORVI6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0ID0ge1xuICAgIFJDRl9ESVNBQkxFRDogMCxcbiAgICBSQ0ZfVkVSSUZJRUQ6IDEsXG4gICAgUkNGX05PVF9WRVJJRklFRDogMixcbiAgICBSQ0ZfQ09NUEFSRV9UUlVFOiAzLFxuICAgIFJDRl9DT01QQVJFX0ZBTFNFOiA0LFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyQWN0aW9uID0ge1xuICAgIENPTVBMRVRFOiAxLFxuICAgIFBST0NFU1M6IDAsXG4gICAgQ0FOQ0VMOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIE5PVElGSUNBVElPTjogNSxcbiAgICBQUk9DRVNTX1dISVRFX1VWX0lNQUdFUzogNixcbiAgICBQUk9DRVNTX1dISVRFX0ZMQVNITElHSFQ6IDcsXG4gICAgTU9SRV9QQUdFU19BVkFJTEFCTEU6IDgsXG4gICAgUFJPQ0VTU19JUl9GUkFNRTogOSxcbiAgICBUSU1FT1VUOiAxMCxcbiAgICBQUk9DRVNTSU5HX09OX1NFUlZJQ0U6IDExLFxufVxuXG5leHBvcnQgY29uc3QgZVByb2Nlc3NHTENvbW1hbmRzID0ge1xuICAgIGVQQ19Qcm9jTWdyX1NldExpY2Vuc2U6IDEyMTAwLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3M6IDEyMTAxLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NBc3luYzogMTIxMDIsXG4gICAgZVBDX1Byb2NNZ3JfSW5pdDogMTIxMDMsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0ltYWdlOiAxMjEwNCxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld0RvY3VtZW50OiAxMjEwNSxcbiAgICBlUENfUHJvY01ncl9TdGFydE5ld1BhZ2U6IDEyMTA2LFxuICAgIGVQQ19Qcm9jTWdyX1VubG9hZDogMTIxMDcsXG4gICAgZVBDX1Byb2NNZ3JfQ2hlY2tEYXRhYmFzZTogMTIxMDksXG4gICAgZVBDX1Byb2NNZ3JfQ29tcGFyZVBvcnRyYWl0czogMTIxMTEsXG4gICAgZVBDX1JGSURfU2V0VENDUGFyYW1zOiAxMjUyMixcbiAgICBlUENfUkZJRF9TZXRSZXByb2Nlc3NpbmdQYXJhbXM6IDEyNTIzLFxufVxuXG5leHBvcnQgY29uc3QgUEtEUmVzb3VyY2VUeXBlID0ge1xuICAgIENFUlRJRklDQVRFX1BBOiAwLFxuICAgIENFUlRJRklDQVRFX1RBOiAxLFxuICAgIExESUY6IDIsXG4gICAgQ1JMOiAzLFxuICAgIE1MOiA0LFxuICAgIERFRkw6IDUsXG4gICAgREVWTDogNixcbiAgICBCTDogNyxcblxuICAgIGdldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwicGFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICAgICAgY2FzZSBcInRhXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfVEFcbiAgICAgICAgICAgIGNhc2UgXCJsZGlmXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTERJRlxuICAgICAgICAgICAgY2FzZSBcImNybFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNSTFxuICAgICAgICAgICAgY2FzZSBcIm1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTUxcbiAgICAgICAgICAgIGNhc2UgXCJkZWZsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVGTFxuICAgICAgICAgICAgY2FzZSBcImRldmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERVZMXG4gICAgICAgICAgICBjYXNlIFwiYmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CTFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlID0ge1xuICAgIGFwdFVuZGVmaW5lZDogMCxcbiAgICBhcHRTdGFuZGFyZDogMSxcbiAgICBhcHRBZHZhbmNlZDogMixcbiAgICBhcHRHZW5lcmFsOiAzLFxufVxuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9JZGVudGlmaWVyID0ge1xuICAgIFNDRU5BUklPX01SWjogXCJNcnpcIixcbiAgICBTQ0VOQVJJT19CQVJDT0RFOiBcIkJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19MT0NBVEU6IFwiTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fT0NSOiBcIk9jclwiLFxuICAgIFNDRU5BUklPX0RPQ1RZUEU6IFwiRG9jVHlwZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFOiBcIk1yek9yQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9MT0NBVEU6IFwiTXJ6T3JMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfQU5EX0xPQ0FURTogXCJNcnpBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfT0NSOiBcIk1yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREVfT1JfT0NSOiBcIk1yek9yQmFyY29kZU9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFX1ZJU1VBTF9BTkRfTVJaX09SX09DUjogXCJMb2NhdGVWaXN1YWxfQW5kX01yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9QUk9DRVNTOiBcIkZ1bGxQcm9jZXNzXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9BVVRIOiBcIkZ1bGxBdXRoXCIsXG4gICAgU0NFTkFSSU9fSUQzUlVTOiBcIklkM1J1c1wiLFxuICAgIFNDRU5BUklPX1JVU19TVEFNUDogXCJSdXNTdGFtcFwiLFxuICAgIFNDRU5BUklPX09DUl9GUkVFOiBcIk9jckZyZWVcIixcbiAgICBTQ0VOQVJJT19DUkVESVRfQ0FSRDogXCJDcmVkaXRDYXJkXCIsXG4gICAgU0NFTkFSSU9fQ0FQVFVSRTogXCJDYXB0dXJlXCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUgPSB7XG4gICAgQUNQVF9VTkRFRklORUQ6IDAsXG4gICAgQUNQVF9CQUM6IDEsXG4gICAgQUNQVF9QQUNFOiAyLFxuICAgIEFDUFRfQ0E6IDMsXG4gICAgQUNQVF9UQTogNCxcbiAgICBBQ1BUX0FBOiA1LFxuICAgIEFDUFRfUkk6IDYsXG4gICAgQUNQVF9DQVJEX0lORk86IDEwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDB4MDAwMTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fRE9DVU1FTlRfUkVBRFk6IDB4MDAwMTAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDQ6IDB4MDAwMTAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDB4MDAwMTAwMEEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUFJPR1JFU1M6IDB4MDAwMTAwMEIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVEFfU1RFUDogMHgwMDAxMDAwRSxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogMHgwMDAxMDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9JU09fRVJST1I6IDB4MDAwMTEwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfUkVRVUVTVDogMHgwMDAxMzAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogMHgwMDAxNDAwRixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9ESVNDT05ORUNURUQ6IDB4MDAwMjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAweDAwMDIwMDAxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfUkVDRUlWRUQ6IDB4MDAwMjAwMDIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1RJTUU6IDB4MDAwMjAwMDMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAweDAwMDIwMDA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfU0VOVDogMHgwMDAyMDAwNSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfU1BFRUQ6IDB4MDAwMjAwMDYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDB4MDAwMjAwMDcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0lORzogMHgwMDAyMDAwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VYVF9MRU5HVEhfU1VQUE9SVDogMHgwMDAyMDAxMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMHgwMDAyMDAxMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTl9JVEVNOiAweDAwMDIwMDEyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NDRU5BUklPOiAweDAwMDIwMDIwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDB4MDAwMzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX05PVF9GT1VORDogMHgwMDA0MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0VORF9PRl9GSUxFOiAweDAwMDUwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAweDAwMDYwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQVBQTElDQVRJT05fU0VMRUNURUQ6IDB4MDAwNzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX1NUQVJUOiAweDAwMDgwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDB4MDAwOTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfU0VDVVJJVFlfT0JKRUNUX0NIRUNLOiAweDAwMEEwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0ZJTEVfQ0hFQ0s6IDB4MDAwQjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDB4MDAwQzAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQVVYSUxJQVJZX0RBVEFfVkFMSURBVElPTjogMHgwMDBEMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9SSV9TRUNUT1JfSUQ6IDB4MDAwRTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogMHgwMDBGMDAwMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Bhc3N3b3JkX1R5cGUgPSB7XG4gICAgUFBUX1VOS05PV046IDAsXG4gICAgUFBUX01SWjogMSxcbiAgICBQUFRfQ0FOOiAyLFxuICAgIFBQVF9QSU46IDMsXG4gICAgUFBUX1BVSzogNCxcbiAgICBQUFRfUElOX0VTSUdOOiA1LFxuICAgIFBQVF9TQUk6IDYsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUmVzdWx0ID0ge1xuICAgIE5PX0VSUjogMCxcbiAgICBOVUxMX1BUUl9FUlI6IC02MDAxLFxuICAgIEJBRF9BUkdfRVJSOiAtNjAwMixcbiAgICBTSVpFX0VSUjogLTYwMDMsXG4gICAgUkFOR0VfRVJSOiAtNjAwNCxcbiAgICBJTlRFUk5BTF9FUlI6IC02MDA1LFxuICAgIFRSWV9FWENFUFRfRVJSOiAtNjAwNixcbiAgICBCQVJfQ09ERV9OT1RfRk9VTkQ6IC02MDA4LFxuICAgIEJBUl9DT0RFX0RFQ09ERV9FUlI6IC02MDEwLFxuICAgIE5PX1VTRVJfRExMX0ZPVU5EOiAtNjAxOSxcbiAgICBOT19JUFBfRExMX0ZPVU5EOiAtNjAyMCxcbiAgICBJUFBfRVhFQ19FUlI6IC02MDI0LFxuICAgIElQUF9UUllfRVhDRVBUX0VSUjogLTYwMjUsXG4gICAgQkFSQ09ERV9FUlJPUl9JTlBVVF9QQVJBTTogLTExMDAxLFxuICAgIEJBUkNPREVfRVJST1JfRklOSVQ6IC0xMTAwNixcbiAgICBCQVJDT0RFX0VSUk9SX05PVF9MT0FEX0lQX0RFQ09ERURfTEw6IC0xMTAxMixcbiAgICBCQVJDT0RFX0VSUk9SX0lOTkVSX1BST0JMRU06IC0xMTEwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RFQ09ERV8xRF9CQURfREVDT0RFOiAtMTEyMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EX1JPV19PUl9DT0xVTU46IC0xMTIwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1g6IC0xMTIwMixcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1k6IC0xMTIwMyxcbiAgICBCQVJDT0RFX0VSUk9SXzJEX1VHT0xfTUFYOiAtMTEyMDQsXG4gICAgQkFSQ09ERV9FUlJPUl9JTkRFRklOSVRFTFlfREVDT0RFRDogLTExMjEwLFxuICAgIEJBUkNPREVfRVJST1JfRExMX05PVF9JTklUOiAtMTEzMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9JUF9ERUNPREVfRExMX1RyeV9FeGNlcHQ6IC0xMTQwMCxcbiAgICBJUERFQ09ERV9FUlJPUl9MQVJHRUVSUk9SUzogLTQ1MDMsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRDT0xVTU5TOiAtNDUwNCxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVFJPV1M6IC00NTA1LFxuICAgIElQREVDT0RFX0VSUk9SX0lOQ09SUkVDVF9FUlJPUl9MRVZFTDogLTQ1MTEsXG4gICAgSVBERUNPREVfRVJST1JfTE9BRElOR19ERVZfVEFCTEU6IC00NTEyLFxufVxuXG5leHBvcnQgY29uc3QgZVNpZ25NYW5hZ2VtZW50QWN0aW9uID0ge1xuICAgIHNtYVVuZGVmaW5lZDogMCxcbiAgICBzbWFDcmVhdGVQSU46IDEsXG4gICAgc21hQ2hhbmdlUElOOiAyLFxuICAgIHNtYVVuYmxvY2tQSU46IDMsXG4gICAgc21hVGVybWluYXRlUElOOiA0LFxuICAgIHNtYUdlbmVyYXRlS2V5czogNSxcbiAgICBzbWFUZXJtaW5hdGVLZXlzOiA2LFxuICAgIHNtYVNpZ25EYXRhOiA3LFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrRGlhZ25vc2UgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBQQVNTOiAxLFxuICAgIElOVkFMSURfSU5QVVRfREFUQTogMixcbiAgICBJTlRFUk5BTF9FUlJPUjogMyxcbiAgICBFWENFUFRJT05fSU5fTU9EVUxFOiA0LFxuICAgIFVOQ0VSVEFJTl9WRVJJRklDQVRJT046IDUsXG4gICAgTkVDRVNTQVJZX0lNQUdFX05PVF9GT1VORDogNyxcbiAgICBQSE9UT19TSURFU19OT1RfRk9VTkQ6IDgsXG4gICAgSU5WQUxJRF9DSEVDS1NVTTogMTAsXG4gICAgU1lOVEFYX0VSUk9SOiAxMSxcbiAgICBMT0dJQ19FUlJPUjogMTIsXG4gICAgU09VUkNFU19DT01QQVJJU09OX0VSUk9SOiAxMyxcbiAgICBGSUVMRFNfQ09NUEFSSVNPTl9MT0dJQ19FUlJPUjogMTQsXG4gICAgSU5WQUxJRF9GSUVMRF9GT1JNQVQ6IDE1LFxuICAgIFRSVUVfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIxLFxuICAgIEZJWEVEX1BBVFRFUk5fRVJST1I6IDIyLFxuICAgIExPV19DT05UUkFTVF9JTl9JUl9MSUdIVDogMjMsXG4gICAgSU5DT1JSRUNUX0JBQ0tHUk9VTkRfTElHSFQ6IDI0LFxuICAgIEJBQ0tHUk9VTkRfQ09NUEFSSVNPTl9FUlJPUjogMjUsXG4gICAgSU5DT1JSRUNUX1RFWFRfQ09MT1I6IDI2LFxuICAgIFBIT1RPX0ZBTFNFX0xVTUlOSVNDRU5DRTogMjcsXG4gICAgVE9PX01VQ0hfU0hJRlQ6IDI4LFxuICAgIEZJQkVSU19OT1RfRk9VTkQ6IDMwLFxuICAgIFRPT19NQU5ZX09CSkVDVFM6IDMxLFxuICAgIFNQRUNLU19JTl9VVjogMzMsXG4gICAgVE9PX0xPV19SRVNPTFVUSU9OOiAzNCxcbiAgICBJTlZJU0lCTEVfRUxFTUVOVF9QUkVTRU5UOiA0MCxcbiAgICBWSVNJQkxFX0VMRU1FTlRfQUJTRU5UOiA0MSxcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9DT0xPUkVEOiA0MixcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9HUkFZU0NBTEU6IDQzLFxuICAgIFBIT1RPX1dISVRFX0lSX0RPTlRfTUFUQ0g6IDQ0LFxuICAgIFVWX0RVTExfUEFQRVJfTVJaOiA1MCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fTVJaOiA1MSxcbiAgICBVVl9EVUxMX1BBUEVSX1BIT1RPOiA1MixcbiAgICBVVl9EVUxMX1BBUEVSX0JMQU5LOiA1MyxcbiAgICBVVl9EVUxMX1BBUEVSX0VSUk9SOiA1NCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fQkxBTks6IDU1LFxuICAgIEJBRF9BUkVBX0lOX0FYSUFMOiA2MCxcbiAgICBGQUxTRV9JUElfUEFSQU1FVEVSUzogNjUsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9ISUdITElHSFRfSVI6IDgwLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfR0xBUkVTX0lOX1BIT1RPX0FSRUE6IDgxLFxuICAgIE9WSV9JUl9JTlZJU0lCTEU6IDkwLFxuICAgIE9WSV9JTlNVRkZJQ0lFTlRfQVJFQTogOTEsXG4gICAgT1ZJX0NPTE9SX0lOVkFSSUFCTEU6IDkyLFxuICAgIE9WSV9CQURfQ09MT1JfRlJPTlQ6IDkzLFxuICAgIE9WSV9CQURfQ09MT1JfU0lERTogOTQsXG4gICAgT1ZJX1dJREVfQ09MT1JfU1BSRUFEOiA5NSxcbiAgICBPVklfQkFEX0NPTE9SX1BFUkNFTlQ6IDk2LFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfQUJTRU5UOiAxMDAsXG4gICAgSE9MT0dSQU1fU0lERV9UT1BfSU1BR0VTX0FCU0VOVDogMTAxLFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfUFJFU0VOVDogMTAyLFxuICAgIEhPTE9HUkFNX0ZSQU1FU19JU19BQlNFTlQ6IDEwMyxcbiAgICBIT0xPR1JBTV9IT0xPX0ZJRUxEX0lTX0FCU0VOVDogMTA0LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5URVJSVVBURUQ6IDExMCxcbiAgICBQSE9UT19QQVRURVJOX1NISUZURUQ6IDExMSxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9DT0xPUlM6IDExMixcbiAgICBQSE9UT19QQVRURVJOX0lSX1ZJU0lCTEU6IDExMyxcbiAgICBQSE9UT19QQVRURVJOX05PVF9JTlRFUlNFQ1Q6IDExNCxcbiAgICBQSE9UT19TSVpFX0lTX1dST05HOiAxMTUsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlZBTElEX0NPTE9SOiAxMTYsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEX1ZFUlQ6IDExNyxcbiAgICBQSE9UT19QQVRURVJOX1BBVFRFUk5fTk9UX0ZPVU5EOiAxMTgsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxMTksXG4gICAgUEhPVE9fSVNfTk9UX1JFQ1RBTkdMRTogMTIwLFxuICAgIFBIT1RPX0NPUk5FUlNfSVNfV1JPTkc6IDEyMSxcbiAgICBET0NVTUVOVF9JU19DQU5DRUxMSU5HOiAxMjIsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfQkxVRTogMTMwLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0dSRUVOOiAxMzEsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfUkVEOiAxMzIsXG4gICAgVEVYVF9TSE9VTERfQkVfQkxBQ0s6IDEzMyxcbiAgICBCQVJDT0RFX1dBU19SRUFEX1dJVEhfRVJST1JTOiAxNDAsXG4gICAgQkFSQ09ERV9EQVRBX0ZPUk1BVF9FUlJPUjogMTQxLFxuICAgIEJBUkNPREVfU0laRV9QQVJBTVNfRVJST1I6IDE0MixcbiAgICBOT1RfQUxMX0JBUkNPREVTX1JFQUQ6IDE0MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1BPUlRSQUlUU19ESUZGRVI6IDE1MCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfUkVQTFk6IDE1MSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1NFUlZJQ0VfRVJST1I6IDE1MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PVF9FTk9VR0hfSU1BR0VTOiAxNTMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19MSVZFX1BIT1RPOiAxNTQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX0xJQ0VOU0U6IDE1NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1BPUlRSQUlUX0RFVEVDVEVEOiAxNTYsXG4gICAgTU9CSUxFX0lNQUdFU19VTlNVSVRBQkxFX0xJR0hUX0NPTkRJVElPTlM6IDE2MCxcbiAgICBNT0JJTEVfSU1BR0VTX1dISVRFX1VWX05PX0RJRkZFUkVOQ0U6IDE2MSxcbiAgICBGSU5HRVJQUklOVFNfQ09NUEFSSVNPTl9NSVNNQVRDSDogMTcwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9OT1RfREVURUNURUQ6IDE4MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfQ09NUEFSSVNPTl9GQUlMRUQ6IDE4MSxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfR0xBUkVfSU5fQ0VOVEVSX0FCU0VOVDogMTgyLFxuICAgIEhPTE9fRUxFTUVOVF9TSEFQRV9FUlJPUjogMTgzLFxuICAgIEFMR09SSVRITV9TVEVQU19FUlJPUjogMTg0LFxuICAgIEhPTE9fQVJFQVNfTk9UX0xPQURFRDogMTg1LFxuICAgIEZJTklTSEVEX0JZX1RJTUVPVVQ6IDE4NixcbiAgICBIT0xPX1BIT1RPX0RPQ1VNRU5UX09VVFNJREVfRlJBTUU6IDE4NyxcbiAgICBMSVZFTkVTU19ERVBUSF9DSEVDS19GQUlMRUQ6IDE5MCxcbiAgICBMQVNUX0RJQUdOT1NFX1ZBTFVFOiAyMDAsXG59XG5cbmV4cG9ydCBjb25zdCBSRklERGVsZWdhdGUgPSB7XG4gICAgTlVMTDogMCxcbiAgICBOT19QQTogMSxcbiAgICBGVUxMOiAyLFxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ge1xuICAgIE5PVF9SRUFEWTogMCxcbiAgICBSRUFEWTogMSxcbiAgICBUSU1FT1VUOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jRm9ybWF0ID0ge1xuICAgIElEMTogMCxcbiAgICBJRDI6IDEsXG4gICAgSUQzOiAyLFxuICAgIE5PTjogMyxcbiAgICBBNDogNCxcbiAgICBJRDNfeDI6IDUsXG4gICAgSUQyX1RVUktFWTogNixcbiAgICBJRDFfOTA6IDEwLFxuICAgIElEMV8xODA6IDExLFxuICAgIElEMV8yNzA6IDEyLFxuICAgIElEMl8xODA6IDEzLFxuICAgIElEM18xODA6IDE0LFxuICAgIENVU1RPTTogMTAwMCxcbiAgICBQSE9UTzogMTAwMSxcbiAgICBGTEVYSUJMRTogMTAwMixcbiAgICBVTktOT1dOOiAtMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzID0ge1xuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkwMDAwMDAxLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX05PTl9NQVRDSElOR19TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMDAyLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9USU1FX0NPRElORzogMHg5MDAwMDAwMyxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVVNFX09GX0dFTkVSQUxJWkVEX1RJTUU6IDB4OTAwMDAwMDQsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfSVNTVUVSOiAweDkwMDAwMDA1LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX1NVQkpFQ1Q6IDB4OTAwMDAwMDYsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfQ1JJVElDQUxfRVhURU5TSU9OOiAweDkwMDAwMDA4LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0NTQ0FfUk9MRTogMHg5MDAwMDAwRSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9EU19ST0xFOiAweDkwMDAwMDBGLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9JU1NVRVJfU1VCSkVDVF9EUzogMHg5MDAwMDAxMCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9EVVBMSUNBVElOR19FWFRFTlNJT05TOiAweDkwMDAwMDE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX01JU1NFRDogMHg5MDAwMDIwMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPTU1PTl9OQU1FX01JU1NFRDogMHg5MDAwMDIwMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX01JU1NFRDogMHg5MDAwMDIwNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjA3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMDgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4OTAwMDAyMDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDkwMDAwMjBBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NSVNTRURfRVhURU5TSU9OUzogMHg5MDAwMDIwQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTAwMDAyMEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IDB4OTAwMDAyMEQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTUlTU0VEOiAweDkwMDAwMjBFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIwRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTUlTU0VEOiAweDkwMDAwMjExLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UxOiAweDkwMDAwMjEyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UyOiAweDkwMDAwMjEzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjE1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX01JU1NFRDogMHg5MDAwMDIxNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19JTkNPUlJFQ1Q6IDB4OTAwMDAyMTcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogMHg5MDAwMDIxOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX1VTQUdFOiAweDkwMDAwMjE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX01JU1NFRDogMHg5MDAwMDIxRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjFGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfTUlTU0VEOiAweDkwMDAwMjIwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9FTVBUWTogMHg5MDAwMDIyMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTUlTU0VEOiAweDkwMDAwMjIzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMjYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjI4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIyOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAweDkwMDAwMjJBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIyRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9FTVBUWTogMHg5MDAwMDIyRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjJGLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0NSSVRJQ0FMOiAweDkwMDAwMjMxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0VNUFRZOiAweDkwMDAwMjMyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIzMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjM0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9NSVNTRUQ6IDB4OTAwMDAyMzUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjM2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9WRVJTSU9OOiAweDkwMDAwMjM3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVM6IDB4OTAwMDAyMzgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFU19FTVBUWTogMHg5MDAwMDIzOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0EsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0VNUFRZOiAweDkwMDAwMjNCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19QT0xJQ1lfSURfTUlTU0VEOiAweDkwMDAwMjNDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfTUlTU0VEOiAweDkwMDAwMjNELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyM0UsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9FTVBUWTogMHg5MDAwMDIzRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX1BPSU5UX01JU1NFRDogMHg5MDAwMDI0MCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfU05fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQ1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU1VCSkVDVF9DT1VOVFJZX05PTl9NQVRDSElORzogMHg5MDAwMDI0NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NTQ0FfQUxUX05BTUVTX05PTl9NQVRDSElORzogMHg5MDAwMDI0NyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjQ4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0NSSVRJQ0FMOiAweDkwMDAwMjRBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRCLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9DUklUSUNBTDogMHg5MDAwMDI0QyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX09QVElPTkFMX0NSSVRJQ0FMOiAweDkwMDAwMjRELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0RixcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjEsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMDIyLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX01JU1NJTkc6IDB4OTAwMDAwMjMsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX0lOQ09SUkVDVDogMHg5MDAwMDAyNCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fTUlTU0lORzogMHg5MDAwMDAyNSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fVU5FWFBFQ1RFRDogMHg5MDAwMDAyNixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzAsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9VTlNVUFBPUlRFRDogMHg5MDAwMDAzMSxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMyLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fSU5DT05TSVNURU5UOiAweDkwMDAwMDMzLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX09JRF9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfQ09OVEVOVF9PSURfSU5DT1JSRUNUOiAweDkwMDAwMUExLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfRU1QVFk6IDB4OTAwMDAxMDIsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX1VOU1VQUE9SVEVEOiAweDkwMDAwMTAzLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfTVVMVElQTEVfRU5UUklFUzogMHg5MDAwMDEwOSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX01JU1NFRDogMHg5MDAwMDFCMCxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX0VNUFRZOiAweDkwMDAwMUIxLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DUkxTX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDFCMixcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9JTkNPUlJFQ1RfQ09OVEVOVF9PSUQ6IDB4OTAwMDAxMDQsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfTlVNQkVSX0lOQ09SUkVDVDogMHg5MDAwMDEwNSxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX01JU1NJTkc6IDB4OTAwMDAxMDYsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9FWFRSQTogMHg5MDAwMDEwNyxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDEwOCxcbiAgICBOVEZfTERTX0lDQU9fTUFTVEVSX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxQzAsXG4gICAgTlRGX0xEU19JQ0FPX0RFVklBVElPTl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUM4LFxuICAgIE5URl9MRFNfQlNJX0RFRkVDVF9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQwLFxuICAgIE5URl9MRFNfQlNJX0JMQUNLX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxRDgsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMEEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0lOQ09SUkVDVF9DSE9JQ0U6IDB4OTAwMDAxMEIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0RJR0VTVF9BTEdPUklUSE1fTk9UX0xJU1RFRDogMHg5MDAwMDEwQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMEQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9EQVRBOiAweDkwMDAwMTBFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfVmFsdWU6IDB4OTAwMDAxMEYsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfTUlTU0lORzogMHg5MDAwMDExMCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9EQVRBOiAweDkwMDAwMTExLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX1ZBTFVFOiAweDkwMDAwMTEyLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMUIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfREFUQTogMHg5MDAwMDExQyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9WQUxVRTogMHg5MDAwMDExRCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFFLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0xJU1RfQ09OVEVOVF9ERVNDUklQVElPTl9BVFRSX0RBVEE6IDB4OTAwMDAxMUYsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkwMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MDAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MDAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTAwMDAxMTksXG4gICAgTlRGX0xEU19VTlNVUFBPUlRFRF9JTUFHRV9GT1JNQVQ6IDB4OTAwMDAxMUEsXG4gICAgTlRGX0xEU19NUlpfRE9DVU1FTlRfVFlQRV9VTktOT1dOOiAweDAwMDIyMDA4LFxuICAgIE5URl9MRFNfTVJaX0lTU1VJTkdfU1RBVEVfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDA5LFxuICAgIE5URl9MRFNfTVJaX05BTUVfSVNfVk9JRDogMHgwMDAyMjAwQSxcbiAgICBOVEZfTERTX01SWl9OVU1CRVJfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDBELFxuICAgIE5URl9MRFNfTVJaX05BVElPTkFMSVRZX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRSxcbiAgICBOVEZfTERTX01SWl9ET0JfU1lOVEFYX0VSUk9SOiAweDAwMDIyMDBGLFxuICAgIE5URl9MRFNfTVJaX0RPQl9FUlJPUjogMHgwMDAyMjAxMCxcbiAgICBOVEZfTERTX01SWl9ET0JfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDExLFxuICAgIE5URl9MRFNfTVJaX1NFWF9JTkNPUlJFQ1Q6IDB4MDAwMjIwMTIsXG4gICAgTlRGX0xEU19NUlpfRE9FX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAxMyxcbiAgICBOVEZfTERTX01SWl9ET0VfRVJST1I6IDB4MDAwMjIwMTQsXG4gICAgTlRGX0xEU19NUlpfRE9FX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNSxcbiAgICBOVEZfTERTX01SWl9PUFRJT05BTF9EQVRBX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxNixcbiAgICBOVEZfTERTX01SWl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTcsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUOiAweDAwMDIyMDE4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfTUlTU0lORzogMHg5MDAxMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX0lOQ09SUkVDVDogMHg5MDAyMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfTUlTU0lORzogMHg5MDAzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfSU5DT1JSRUNUOiAweDkwMDQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19UWVBFX0lOQ09SUkVDVDogMHg5MDA1MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfTUlTU0lORzogMHg5MDA2MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfSU5DT1JSRUNUOiAweDkwMDcwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfSU1BR0VfTUlTU0lORzogMHg5MDA4MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0ZPUk1BVF9JRF9JTkNPUlJFQ1Q6IDB4OTAwOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDBBMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfTEVOR1RIX0lOQ09SUkVDVDogMHg5MDBCMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfR0VOREVSOiAweDkwMTAwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9FWUVfQ09MT1I6IDB4OTAxMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0hBSVJfQ09MT1I6IDB4OTAxMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfWUFXOiAweDkwMTMwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1BJVENIOiAweDkwMTQwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1JPTEw6IDB4OTAxNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ZQVc6IDB4OTAxNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9QSVRDSDogMHg5MDE3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1JPTEw6IDB4OTAxODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0ZBQ0VfSU1BR0VfVFlQRTogMHg5MDE5MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSU1BR0VfREFUQV9UWVBFOiAweDkwMUEwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX1VOU1VQUE9SVEVEX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMDAwLFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX0RFUFJFQ0FURURfVkVSU0lPTjogMHg5MTAwMDAwMSxcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VU0lOR19TVERfUkVGOiAweDkxMDAwMDAyLFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwMyxcbiAgICBOVEZfTERTX1NJX0NBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDQsXG4gICAgTlRGX0xEU19TSV9DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNSxcbiAgICBOVEZfTERTX1NJX0NBX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDkxMDAwMDA2LFxuICAgIE5URl9MRFNfU0lfVEFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDAwNyxcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fRklMRV9JRF9GT1JfVkVSU0lPTjI6IDB4OTEwMDAwMDgsXG4gICAgTlRGX0xEU19TSV9FSURfU0VDVVJJVFlfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg5MTAwMDAwOSxcbiAgICBOVEZfTERTX1NJX1JJX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEEsXG4gICAgTlRGX0xEU19TSV9SSV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwQixcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMEMsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwRCxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT05TSVNURU5UX0FMR09SSVRITV9SRUZFUkVOQ0U6IDB4OTEwMDAwMEUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAwLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fU1REX1BBUkFNRVRFUlM6IDB4OTEwMDAxMDEsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTAyLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDMsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0RPTUFJTl9QQVJBTVNfTk9fUkVRVUlSRURfT1BUSU9OOiAweDkxMDAwMTA0LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PVF9BVkFJTEFCTEU6IDB4OTEwMDAxMDUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0FOT05ZTU9VU19JTkZPUzogMHg5MTAwMDEwNixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAweDkxMDAwMTA3LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX1BVQkxJQ19LRVk6IDB4OTEwMDAxMDgsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lOQ09SUkVDVF9JTkZPU19RVUFOVElUWTogMHg5MTAwMDEwOSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfVEFfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTBBLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQVJEX0lORk9fTE9DQVRPUl9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBCLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9FSURfU0VDVVJJVFlfSU5GT19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBDLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEQsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfSU5DT1JSRUNUX1VTQUdFOiAweDkxMDAwMTBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9SSV9ET01BSU5fUEFSQU1TX01VTFRJUExFX0VOVFJJRVM6IDB4OTEwMDAxMEYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT1NfTk9OX0NPTlNJU1RBTlQ6IDB4OTEwMDAxMTAsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUk9GSUxFX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMjAxLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTEwMDAyMDIsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9OT05fQ1ZfQ0FfRE9NQUlOX1BBUkFNRVRFUlM6IDB4OTEwMDAyMDMsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwNCxcbiAgICBOVEZfTERTX1RBX1BBQ0VfU1RBVElDX0JJTkRJTkdfVVNFRDogMHg5MTAwMDMwMCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IDB4OTIwMDAxMTUsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6IDB4OTIwMDAxMTYsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAweDkyMDAwMTE3LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOiAweDkyMDAwMTE4LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDogMHg5MjAwMDExOSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX05PTl9NQVRDSElOR19TSUdOQVRVUkVfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogTm9uLW1hdGNoaW5nIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9USU1FX0NPRElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB0aW1lIGNvZGluZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1VTRV9PRl9HRU5FUkFMSVpFRF9USU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHVzZSBvZiBnZW5lcmFsaXplZCB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9JU1NVRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBFbXB0eSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX1NVQkpFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBFbXB0eSBzdWJqZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9DUklUSUNBTF9FWFRFTlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBjcml0aWNhbCBleHRlbnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0NTQ0FfUk9MRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBkZWZhdWx0IENTQ0Egcm9sZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfRFNfUk9MRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBEZWZhdWx0IERTIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9JU1NVRVJfU1VCSkVDVF9EUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCBpc3N1ZXIgc3ViamVjdCBEU1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRFVQTElDQVRJTkdfRVhURU5TSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IER1cGxpY2F0aW5nIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT01NT05fTkFNRV9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvdW50cnkgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY29tbW9uIG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVXNpbmcgbm9uLWNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgcHVibGljIGtleSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NSVNTRURfRVhURU5TSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBNaXNzZWQgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1VTSU5HX05PTl9DT01QTElBTlRfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogVXNpbmcgbm9uLWNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IHVzYWdlIDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgdXNhZ2UgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX05PVF9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgcGF0aCBMZW5DIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfVVNBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0tFWV9JRF9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9LRVlfSURfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3Qga2V5IElEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0NSSVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0VNUFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIEROIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IE1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IERvYyB0eXBlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFU19FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBEb2MgdHlwZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRGVydCBwb2xpY2llcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0VNUFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDZXJ0IHBvbGljaWVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfUE9MSUNZX0lEX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBwb2xpY3kgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfUE9JTlRfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBwb2ludCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fTERTX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBMRFMgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fTERTX1ZFUlNJT05fTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NPTV9ER1BNX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fREdQTV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fREdQTV9VTkVYUEVDVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIHVuZXhwZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9MRFNfVkVSU0lPTl9VTlNVUFBPUlRFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9VTlNVUFBPUlRFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9MRFNfVkVSU0lPTl9JTkNPTlNJU1RFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogTERTIHZlcnNpb24gaW5jb25zaXN0ZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX0lOQ09OU0lTVEVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gaW5jb25zaXN0ZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORURfREFUQV9PSURfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogT0lEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19VTlNVUFBPUlRFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19NVUxUSVBMRV9FTlRSSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvcyBtdWx0aXBsZSBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX0VNUFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENlcnRpZmljYXRlcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NSTFNfSU5DT1JSRUNUX1VTQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENSTHMgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTERTX09CSkVDVF9JTkNPUlJFQ1RfQ09OVEVOVF9PSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBJbmNvcnJlY3QgY29udGVudCBPSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX05VTUJFUl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBudW1iZXIgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfRVhUUkE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIGV4dHJhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTUFTVEVSX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBtYXN0ZXIgbGlzdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfQ0hPSUNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBjaG9pY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9ESUdFU1RfQUxHT1JJVEhNX05PVF9MSVNURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTSUQgZGlnZXN0IGFsZ29yaXRobSBub3QgbGlzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9WYWx1ZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfVkFMVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9WQUxVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW5ub3QgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByZXZva2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgc2lnbmF0dXJlIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfVU5TVVBQT1JURURfSU1BR0VfRk9STUFUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbjogVW5zdXBwb3J0ZWQgaW1hZ2UgZm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9ET0NVTUVOVF9UWVBFX1VOS05PV046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBEb2N1bWVudCB0eXBlIHVua25vd25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0lTU1VJTkdfU1RBVEVfU1lOVEFYX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSXNzdWluZyBzdGF0ZSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX05BTUVfSVNfVk9JRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE5hbWUgaXMgdm9pZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfTlVNQkVSX0lOQ09SUkVDVF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE51bWJlciBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX05BVElPTkFMSVRZX1NZTlRBWF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE5hdGlvbmFsaXR5IHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9CX1NZTlRBWF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0RPQl9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9CX0lOQ09SUkVDVF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX1NFWF9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBTZXggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9ET0VfU1lOVEFYX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9FX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9ET0VfSU5DT1JSRUNUX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfT1BUSU9OQUxfREFUQV9JTkNPUlJFQ1RfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBPcHRpb25hbCBkYXRhIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfSU5DT1JSRUNUX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgb3duZXIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IHR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19UWVBFX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBUeXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogU3VidHlwZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0lNQUdFX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGltYWdlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfRk9STUFUX0lEX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZm9ybWF0IElEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9MRU5HVEhfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBkYXRhIGxlbmd0aCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9HRU5ERVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgR2VuZGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRVlFX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEV5ZSBDb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0hBSVJfQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSGFpciBDb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfWUFXOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgWWF3XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9QSVRDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ST0xMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ZQVc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFlhd1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9QSVRDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUk9MTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0ZBQ0VfSU1BR0VfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBGYWNlIEltYWdlIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9JTUFHRV9EQVRBX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSW1hZ2UgRGF0YSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1BBQ0VfSU5GT19VTlNVUFBPUlRFRF9TVERfUEFSQU1FVEVSUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIFVuc3VwcG9ydGVkIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1BBQ0VfSU5GT19ERVBSRUNBVEVEX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBEZXByZWNhdGVkIFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VTSU5HX1NURF9SRUY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVc2luZyBTdGQgUmVmXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQ0FfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgUHVibGljS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9DQV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfVEFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9UQV9JTkZPX0ZJTEVfSURfRk9SX1ZFUlNJT04yOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIEZpbGUgSUQgRm9yIFZlcnNpb24gMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9FSURfU0VDVVJJVFlfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfUklfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9SSV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgZG9tYWluIHBhcmFtcyB1bnN1cHBvcnRlZCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQUFfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQUEgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9BQV9JTkZPX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQUEgaW5mbyB1bnN1cHBvcnRlZCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQUFfSU5GT19JTkNPTlNJU1RFTlRfQUxHT1JJVEhNX1JFRkVSRU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQUEgaW5mbyBpbmNvbnNpc3RlbnQgYWxnb3JpdGhtIHJlZmVyZW5jZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19TVERfUEFSQU1FVEVSUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX01BVENISU5HX0RPTUFJTl9QQVJBTVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT1RfQVZBSUxBQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PX1JFUVVJUkVEX09QVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBObyBSZXF1aXJlZCBPcHRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX0NBX0FOT05ZTU9VU19JTkZPUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgQW5vbnltb3VzIEluZm9zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIERvbWFpbiBQYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX1BVQkxJQ19LRVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm8gTWF0Y2hpbmcgUHVibGljIEtleVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lOQ09SUkVDVF9JTkZPU19RVUFOVElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5jb3JyZWN0IEluZm9zIFF1YW50aXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfVEFfSU5GT19OT1RfQVZBSUxBQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQVJEX0lORk9fTE9DQVRPUl9NVUxUSVBMRV9FTlRSSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDYXJkIEluZm8gTG9jYXRvciBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfRUlEX1NFQ1VSSVRZX0lORk9fTVVMVElQTEVfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IEluZm8gTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfTVVMVElQTEVfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUHJpdmlsZWdlZCBUSSBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9JTkNPUlJFQ1RfVVNBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgSW5jb3JyZWN0IFVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfUklfRE9NQUlOX1BBUkFNU19NVUxUSVBMRV9FTlRSSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIG11bHRpcGxlIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9TX05PTl9DT05TSVNUQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBTdG9yYWdlIFBBQ0UgSW5mbyBOb24gQ29uc2lzdGFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUk9GSUxFX0lOQ09SUkVDVF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcm9maWxlIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9OT05fQ1ZfQ0FfRE9NQUlOX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IE5vbiBDVkNBIGRvbWFpbiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19UQV9QQUNFX1NUQVRJQ19CSU5ESU5HX1VTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gVEE6IFBBQ0Ugc3RhdGljIGJpbmRpbmcgdXNlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByb290IGlzIG5vdCB0cnVzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgY2Fubm90IGZpbmQgQ1NDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORURfREFUQV9DT05URU5UX09JRF9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBDb250ZW50IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0xJU1RfQ09OVEVOVF9ERVNDUklQVElPTl9BVFRSX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBMaXN0IGNvbnRlbnQgZGVzY3JpcHRpb24gYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTGlzdCBjb250ZW50IGRlc2NyaXB0aW9uIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CU0lfQkxBQ0tfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCU0k6IEJsYWNrIGxpc3QgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQlNJX0RFRkVDVF9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJTSTogRGVmZWN0ICBsaXN0IHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NTQ0FfQUxUX05BTUVTX05PTl9NQVRDSElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1NDQSBhbHQgbmFtZXMgbm9uLW1hdGNoaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfQ1JJVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogQ3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0NSSVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfQ1JJVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IE5hbWUgY2hhbmdlIGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBOYW1lIGNoYW5nZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBOYW1lIGNoYW5nZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX09QVElPTkFMX0NSSVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBPcHRpb25hbCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgYXR0cmlidXRlIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU05fTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgU04gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TVUJKRUNUX0NPVU5UUllfTk9OX01BVENISU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBzdWJqZWN0IGNvdW50cnkgbm9uLW1hdGNoaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU05fTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTTiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGF0dHJpYnV0ZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY29tbW9uIG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX1NOX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBTTiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fREVWSUFUSU9OX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBEZXZpYXRpb24gbGlzdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSA9IHtcbiAgICBJUUNfSU1BR0VfR0xBUkVTOiAwLFxuICAgIElRQ19JTUFHRV9GT0NVUzogMSxcbiAgICBJUUNfSU1BR0VfUkVTT0xVVElPTjogMixcbiAgICBJUUNfSU1BR0VfQ09MT1JORVNTOiAzLFxuICAgIElRQ19QRVJTUEVDVElWRTogNCxcbiAgICBJUUNfQk9VTkRTOiA1LFxuICAgIElRQ19TQ1JFRU5fQ0FQVFVSRTogNixcbiAgICBJUUNfUE9SVFJBSVQ6IDcsXG4gICAgSVFDX0hBTkRXUklUVEVOOiA4LFxufVxuXG5leHBvcnQgY29uc3QgTVJaRm9ybWF0ID0ge1xuICAgIEZPUk1BVF8xWDMwOiBcIjF4MzBcIixcbiAgICBGT1JNQVRfM1gzMDogXCIzeDMwXCIsXG4gICAgRk9STUFUXzJYMzY6IFwiMngzNlwiLFxuICAgIEZPUk1BVF8yWDQ0OiBcIjJ4NDRcIixcbiAgICBGT1JNQVRfMVg2OiBcIjF4NlwiLFxuICAgIEZPUk1BVF8yWDMwOiBcIjJ4MzBcIixcbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVUeXBlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgQkNUX0NPREUxMjg6IDEsXG4gICAgQ09ERTM5OiAyLFxuICAgIEVBTjg6IDMsXG4gICAgSVRGOiA0LFxuICAgIFBERjQxNzogNSxcbiAgICBTVEY6IDYsXG4gICAgTVRGOiA3LFxuICAgIElBVEE6IDgsXG4gICAgQ09EQUJBUjogOSxcbiAgICBVUENBOiAxMCxcbiAgICBDT0RFOTM6IDExLFxuICAgIFVQQ0U6IDEyLFxuICAgIEVBTjEzOiAxMyxcbiAgICBRUkNPREU6IDE0LFxuICAgIEFaVEVDOiAxNSxcbiAgICBEQVRBTUFUUklYOiAxNixcbiAgICBBTExfMUQ6IDE3LFxuICAgIENPREUxMTogMTgsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CTEFOSzogMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRklMTDogMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE86IDIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01SWjogMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFMU0VfTFVNSU5FU0NFTkNFOiA0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1NJTVBMRTogNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfU1RBVElDOiA2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9NVUxUSV9TVEFUSUM6IDcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX0RJTkFNSUM6IDgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX0lOVEVSUlVQVEVEOiA5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9TSElGVEVEOiAxMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9TQU1FX0NPTE9SUzogMTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fSVJfSU5WSVNJQkxFOiAxMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0laRV9DSEVDSzogMTMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfR0hPU1Q6IDE0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1JGSUQ6IDE1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1ZJU1VBTDogMTYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JBUkNPREU6IDE3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDE4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0NBTUVSQTogMTksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fUkZJRF9WU19DQU1FUkE6IDIwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9HSE9TVF9QSE9UTzogMjEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NMRUFSX0dIT1NUX1BIT1RPOiAyMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSU5WSVNJQkxFX09CSkVDVDogMjMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xPV19DT05UUkFTVF9PQkpFQ1Q6IDI0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT0xPUjogMjUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NIQVBFOiAyNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09STkVSUzogMjcsXG4gICAgRE9DVU1FTlRfQ0FOQ0VMTElOR19ERVRFQ1RPUjogMjgsXG59XG5cbmV4cG9ydCBjb25zdCBPbmxpbmVNb2RlID0ge1xuICAgIE1BTlVBTDogMCxcbiAgICBBVVRPOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZGlEb2NUeXBlID0ge1xuICAgIGR0Tm90RGVmaW5lZDogMCxcbiAgICBkdFBhc3Nwb3J0OiAxMSxcbiAgICBkdElkZW50aXR5Q2FyZDogMTIsXG4gICAgZHREaXBsb21hdGljUGFzc3BvcnQ6IDEzLFxuICAgIGR0U2VydmljZVBhc3Nwb3J0OiAxNCxcbiAgICBkdFNlYW1hbklkZW50aXR5RG9jdW1lbnQ6IDE1LFxuICAgIGR0SWRlbnRpdHlDYXJkRm9yUmVzaWRlbmNlOiAxNixcbiAgICBkdFRyYXZlbERvY3VtZW50OiAxNyxcbiAgICBkdE90aGVyOiA5OSxcbiAgICBkdFZpc2FJRDI6IDI5LFxuICAgIGR0VmlzYUlEMzogMzAsXG4gICAgZHRSZWdpc3RyYXRpb25DZXJ0aWZpY2F0ZTogMjA2LFxuICAgIGR0TmF0aW9uYWxJZGVudGl0eUNhcmQ6IDIwLFxuICAgIGR0U29jaWFsSWRlbnRpdHlDYXJkOiAyMSxcbiAgICBkdEFsaWVuc0lkZW50aXR5Q2FyZDogMjIsXG4gICAgZHRQcml2aWxlZ2VkSWRlbnRpdHlDYXJkOiAyMyxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdElkZW50aXR5Q2FyZDogMjQsXG4gICAgZHRPcmlnaW5DYXJkOiAyNSxcbiAgICBkdEVtZXJnZW5jeVBhc3Nwb3J0OiAyNixcbiAgICBkdEFsaWVuc1Bhc3Nwb3J0OiAyNyxcbiAgICBkdEFsdGVybmF0aXZlSWRlbnRpdHlDYXJkOiAyOCxcbiAgICBkdEF1dGhvcml6YXRpb25DYXJkOiAzMixcbiAgICBkdEJlZ2lubmVyUGVybWl0OiAzMyxcbiAgICBkdEJvcmRlckNyb3NzaW5nQ2FyZDogMzQsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlOiAzNSxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjE4OiAzNixcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiAzNyxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMzgsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5zdHJ1Y3Rpb25QZXJtaXQ6IDQyLFxuICAgIGR0Q29tbWVyY2lhbE5ld1Blcm1pdDogNDMsXG4gICAgZHRDb25jZWFsZWRDYXJyeUxpY2Vuc2U6IDQ0LFxuICAgIGR0Q29uY2VhbGVkRmlyZWFybVBlcm1pdDogNDUsXG4gICAgZHRDb25kaXRpb25hbERyaXZpbmdMaWNlbnNlOiA0NixcbiAgICBkdERlcGFydG1lbnRPZlZldGVyYW5zQWZmYWlyc0lkZW50aXR5Q2FyZDogNDcsXG4gICAgZHREaXBsb21hdGljRHJpdmluZ0xpY2Vuc2U6IDQ4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2U6IDQ5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0OiA1MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbnN0cnVjdGlvbmFsUGVybWl0VW5kZXIyMTogNTIsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0OiA1MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjE4OiA1NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjIxOiA1NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlOiA1NixcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogNTcsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDU4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWdpc3RlcmVkT2ZmZW5kZXI6IDU5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIxODogNjAsXG4gICAgZHREcml2aW5nTGljZW5zZVJlc3RyaWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogODYsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMjE6IDg3LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMTg6IDg4LFxuICAgIGR0R3JhZHVhdGVkTGljZW5zZVVuZGVyMjE6IDg5LFxuICAgIGR0SGFuZGd1bkNhcnJ5UGVybWl0OiA5MCxcbiAgICBkdElkZW50aXR5QW5kUHJpdmlsZWdlQ2FyZDogOTEsXG4gICAgZHRJZGVudGl0eUNhcmRNb2JpbGl0eUltcGFpcmVkOiA5MixcbiAgICBkdElkZW50aXR5Q2FyZFJlZ2lzdGVyZWRPZmZlbmRlcjogOTMsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yOiA5NCxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA5NSxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA5NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTg6IDk3LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIyMTogOTgsXG4gICAgZHRJZ25pdGlvbkludGVybG9ja1Blcm1pdDogMTAwLFxuICAgIGR0SW1taWdyYW50VmlzYTogMTAxLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIxODogMTAzLFxuICAgIGR0SW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiAxMDQsXG4gICAgZHRJbnRlcmltRHJpdmluZ0xpY2Vuc2U6IDEwNSxcbiAgICBkdEludGVyaW1JZGVudGl0eUNhcmQ6IDEwNixcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlOiAxMDcsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMTg6IDEwOCxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTA5LFxuICAgIGR0SnVuaW9yRHJpdmluZ0xpY2Vuc2U6IDExMCxcbiAgICBkdExlYXJuZXJJbnN0cnVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlc3RyaWN0ZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDE0OCxcbiAgICBkdFJlc3RyaWN0ZWREcml2aW5nTGljZW5zZTogMTQ5LFxuICAgIGR0UmVzdHJpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZDogMTYwLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjE4OiAxNjEsXG4gICAgZHRUZW1wb3JhcnlJbnN0cnVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lzdHJhdGlvbkNhcmQ6IDE4NSxcbiAgICBkdEFQRUhDYXJkOiAxODYsXG4gICAgZHRDb3Vwb25Ub0RyaXZpbmdMaWNlbnNlOiAxODcsXG4gICAgZHRDcmV3TWVtYmVyQ2VydGlmaWNhdGU6IDE4OCxcbiAgICBkdERvY3VtZW50Rm9yUmV0dXJuOiAxODksXG4gICAgZHRFQ2FyZDogMTkwLFxuICAgIGR0RW1wbG95bWVudENhcmQ6IDE5MSxcbiAgICBkdEhLU0FSSW1taWdyYXRpb25Gb3JtOiAxOTIsXG4gICAgZHRJbW1pZ3JhbnRDYXJkOiAxOTMsXG4gICAgZHRMYWJvdXJDYXJkOiAxOTQsXG4gICAgZHRMYWlzc2V6UGFzc2VyOiAxOTUsXG4gICAgZHRMYXd5ZXJJZGVudGl0eUNlcnRpZmljYXRlOiAxOTYsXG4gICAgZHRMaWNlbnNlQ2FyZDogMTk3LFxuICAgIGR0UGFzc3BvcnRTdGF0ZWxlc3M6IDE5OCxcbiAgICBkdFBhc3Nwb3J0Q2hpbGQ6IDE5OSxcbiAgICBkdFBhc3Nwb3J0Q29uc3VsYXI6IDIwMCxcbiAgICBkdFBhc3Nwb3J0RGlwbG9tYXRpY1NlcnZpY2U6IDIwMSxcbiAgICBkdFBhc3Nwb3J0T2ZmaWNpYWw6IDIwMixcbiAgICBkdFBhc3Nwb3J0UHJvdmlzaW9uYWw6IDIwMyxcbiAgICBkdFBhc3Nwb3J0U3BlY2lhbDogMjA0LFxuICAgIGR0UGVybWlzc2lvblRvVGhlTG9jYWxCb3JkZXJUcmFmZmljOiAyMDUsXG4gICAgZHRTRURFU09MQ2FyZDogMjA3LFxuICAgIGR0U29jaWFsQ2FyZDogMjA4LFxuICAgIGR0VEJDYXJkOiAyMDksXG4gICAgZHRWZWhpY2xlUGFzc3BvcnQ6IDIxMCxcbiAgICBkdFdEb2N1bWVudDogMjExLFxuICAgIGR0RGlwbG9tYXRpY0lkZW50aXR5Q2FyZDogMjEyLFxuICAgIGR0Q29uc3VsYXJJZGVudGl0eUNhcmQ6IDIxMyxcbiAgICBkdEluY29tZVRheENhcmQ6IDIxNCxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdDogMjE1LFxuICAgIGR0RG9jdW1lbnRPZklkZW50aXR5OiAyMTYsXG4gICAgZHRCb3JkZXJDcm9zc2luZ1Blcm1pdDogMjE3LFxuICAgIGR0UGFzc3BvcnRMaW1pdGVkVmFsaWRpdHk6IDIxOCxcbiAgICBkdFNJTUNhcmQ6IDIxOSxcbiAgICBkdFRheENhcmQ6IDIyMCxcbiAgICBkdENvbXBhbnlDYXJkOiAyMjEsXG4gICAgZHREb21lc3RpY1Bhc3Nwb3J0OiAyMjIsXG4gICAgZHRJZGVudGl0eUNlcnRpZmljYXRlOiAyMjMsXG4gICAgZHRSZXNpZGVudElkQ2FyZDogMjI0LFxuICAgIGR0QXJtZWRGb3JjZXNJZGVudGl0eUNhcmQ6IDIyNSxcbiAgICBkdFByb2Zlc3Npb25hbENhcmQ6IDIyNixcbiAgICBkdFJlZ2lzdHJhdGlvblN0YW1wOiAyMjcsXG4gICAgZHREcml2ZXJDYXJkOiAyMjgsXG4gICAgZHREcml2ZXJUcmFpbmluZ0NlcnRpZmljYXRlOiAyMjksXG4gICAgZHRRdWFsaWZpY2F0aW9uRHJpdmluZ0xpY2Vuc2U6IDIzMCxcbiAgICBkdE1lbWJlcnNoaXBDYXJkOiAyMzEsXG4gICAgZHRQdWJsaWNWZWhpY2xlRHJpdmVyQXV0aG9yaXR5Q2FyZDogMjMyLFxuICAgIGR0TWFyaW5lTGljZW5zZTogMjMzLFxuICAgIGR0VGVtcG9yYXJ5TGVhcm5lckRyaXZpbmdMaWNlbnNlOiAyMzQsXG4gICAgZHRUZW1wb3JhcnlDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDIzNSxcbiAgICBkdEludGVyaW1JbnN0cnVjdGlvbmFsUGVybWl0OiAyMzYsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ29tcGV0ZW5jeTogMjM3LFxuICAgIGR0Q2VydGlmaWNhdGVPZlByb2ZpY2llbmN5OiAyMzgsXG4gICAgZHRUcmFkZUxpY2Vuc2U6IDIzOSxcbiAgICBkdFBhc3Nwb3J0UGFnZTogMjQwLFxuICAgIGR0SW52b2ljZTogMjQxLFxuICAgIGR0UGFzc2VuZ2VyTG9jYXRvckZvcm06IDI0Mixcbn1cblxuZXhwb3J0IGNvbnN0IEhvbG9BbmltYXRpb25UeXBlID0ge1xuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblVua25vd246IDAsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZUhvcml6b250YWw6IDEsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVZlcnRpY2FsOiAyLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVMZWZ0Qm90dG9tUmlnaHRUb3A6IDQsXG4gICAgRG9jdW1lbnRIb2xvQW5pbWF0aW9uVHlwZVJpZ2h0Qm90dG9tTGVmdFRvcDogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSZXF1ZXN0Q29tbWFuZCA9IHtcbiAgICBlUmVxQ21kX1JGaWRfU2VuZERhdGE6IDEwMCxcbiAgICBlUmVxQ21kX1JGaWRfTm90aWZ5OiAxMDEsXG4gICAgZVJlcUNtZF9SRmlkX0dldERhdGFGb3JTY2VuYXJpbzogMTAyLFxuICAgIGVSZXFDbWRfVG9yY2hfR2V0VVZGb3RvOiAyMDAsXG4gICAgZVJlcUNtZF9JbnRlcm5ldFNlbmQ6IDMwMCxcbiAgICBlUmVxQ21kX0dldEd1aWQ6IDQwMCxcbiAgICBlUmVxQ21kX1dsdFRvSW1hZ2U6IDQwMSxcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlRm9ybWF0ID0ge1xuICAgIFBORzogMCxcbiAgICBKUEc6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBlR3JhcGhpY0ZpZWxkVHlwZSA9IHtcbiAgICBHRl9QT1JUUkFJVDogMjAxLFxuICAgIEdGX0ZJTkdFUlBSOiAyMDIsXG4gICAgR0ZfRVlFOiAyMDMsXG4gICAgR0ZfU0lHTkFUVVJFOiAyMDQsXG4gICAgR0ZfQkFSX0NPREU6IDIwNSxcbiAgICBHRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDogMjA2LFxuICAgIEdGX0RPQ1VNRU5UX0lNQUdFOiAyMDcsXG4gICAgR0ZfQ09MT1JfRFlOQU1JQzogMjA5LFxuICAgIEdGX0dIT1NUX1BPUlRSQUlUOiAyMTAsXG4gICAgR0ZfU1RBTVA6IDIxMSxcbiAgICBHRl9QT1JUUkFJVF9PRl9DSElMRDogMjEyLFxuICAgIEdGX09USEVSOiAyNTAsXG4gICAgR0ZfRklOR0VSX0xFRlRfVEhVTUI6IDMwMCxcbiAgICBHRl9GSU5HRVJfTEVGVF9JTkRFWDogMzAxLFxuICAgIEdGX0ZJTkdFUl9MRUZUX01JRERMRTogMzAyLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1JJTkc6IDMwMyxcbiAgICBHRl9GSU5HRVJfTEVGVF9MSVRUTEU6IDMwNCxcbiAgICBHRl9GSU5HRVJfUklHSFRfVEhVTUI6IDMwNSxcbiAgICBHRl9GSU5HRVJfUklHSFRfSU5ERVg6IDMwNixcbiAgICBHRl9GSU5HRVJfUklHSFRfTUlERExFOiAzMDcsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1JJTkc6IDMwOCxcbiAgICBHRl9GSU5HRVJfUklHSFRfTElUVExFOiAzMDksXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSUFI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluZ2VycHJpbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0VZRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJcmlzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TSUdOQVRVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9CQVJfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYXJjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9vZiBvZiBjaXRpemVuc2hpcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRE9DVU1FTlRfSU1BR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgaW1hZ2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0NPTE9SX0RZTkFNSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29sb3IgZHluYW1pY3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0dIT1NUX1BPUlRSQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdob3N0IHBvcnRyYWl0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TVEFNUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGFtcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgb2YgY2hpbGRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX09USEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9USFVNQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IGluZGV4IGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfUklORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBsaXR0bGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgdGh1bWJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9NSURETEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgcmluZyBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FNRVJBMTogMSxcbiAgICBDQU1FUkEyOiAyLFxufVxuXG5leHBvcnQgY29uc3QgQ2FwdHVyZU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQVBUVVJFX1ZJREVPOiAxLFxuICAgIENBUFRVUkVfRlJBTUU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tSZXN1bHQgPSB7XG4gICAgQ0hfQ0hFQ0tfRVJST1I6IDAsXG4gICAgQ0hfQ0hFQ0tfT0s6IDEsXG4gICAgQ0hfQ0hFQ0tfV0FTX05PVF9ET05FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfVGVybWluYWxUeXBlID0ge1xuICAgIFRFVF9VTkRFRklORUQ6IDAsXG4gICAgVEVUX0lOU1BFQ1RJT05fU1lTVEVNOiAxLFxuICAgIFRFVF9BVVRIRU5USUNBVElPTl9URVJNSU5BTDogMixcbiAgICBURVRfU0lHTkFUVVJFX1RFUk1JTkFMOiAzLFxuICAgIFRFVF9VTkFVVEhFTlRJQ0FURURfVEVSTUlOQUw6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9EYXRhRmlsZV9UeXBlID0ge1xuICAgIERGVF9VTlNQRUNJRklFRDogMCxcbiAgICBERlRfUEFTU1BPUlRfREcxOiAxLFxuICAgIERGVF9QQVNTUE9SVF9ERzI6IDIsXG4gICAgREZUX1BBU1NQT1JUX0RHMzogMyxcbiAgICBERlRfUEFTU1BPUlRfREc0OiA0LFxuICAgIERGVF9QQVNTUE9SVF9ERzU6IDUsXG4gICAgREZUX1BBU1NQT1JUX0RHNjogNixcbiAgICBERlRfUEFTU1BPUlRfREc3OiA3LFxuICAgIERGVF9QQVNTUE9SVF9ERzg6IDgsXG4gICAgREZUX1BBU1NQT1JUX0RHOTogOSxcbiAgICBERlRfUEFTU1BPUlRfREcxMDogMTAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTE6IDExLFxuICAgIERGVF9QQVNTUE9SVF9ERzEyOiAxMixcbiAgICBERlRfUEFTU1BPUlRfREcxMzogMTMsXG4gICAgREZUX1BBU1NQT1JUX0RHMTQ6IDE0LFxuICAgIERGVF9QQVNTUE9SVF9ERzE1OiAxNSxcbiAgICBERlRfUEFTU1BPUlRfREcxNjogMTYsXG4gICAgREZUX1BBU1NQT1JUX0RHMTc6IDE3LFxuICAgIERGVF9QQVNTUE9SVF9ERzE4OiAxOCxcbiAgICBERlRfUEFTU1BPUlRfREcxOTogMTksXG4gICAgREZUX1BBU1NQT1JUX0RHMjA6IDIwLFxuICAgIERGVF9QQVNTUE9SVF9TT0Q6IDIxLFxuICAgIERGVF9QQVNTUE9SVF9DVkNBOiAyMixcbiAgICBERlRfUEFTU1BPUlRfQ09NOiAyMyxcbiAgICBERlRfSURfREcxOiAxMDEsXG4gICAgREZUX0lEX0RHMjogMTAyLFxuICAgIERGVF9JRF9ERzM6IDEwMyxcbiAgICBERlRfSURfREc0OiAxMDQsXG4gICAgREZUX0lEX0RHNTogMTA1LFxuICAgIERGVF9JRF9ERzY6IDEwNixcbiAgICBERlRfSURfREc3OiAxMDcsXG4gICAgREZUX0lEX0RHODogMTA4LFxuICAgIERGVF9JRF9ERzk6IDEwOSxcbiAgICBERlRfSURfREcxMDogMTEwLFxuICAgIERGVF9JRF9ERzExOiAxMTEsXG4gICAgREZUX0lEX0RHMTI6IDExMixcbiAgICBERlRfSURfREcxMzogMTEzLFxuICAgIERGVF9JRF9ERzE0OiAxMTQsXG4gICAgREZUX0lEX0RHMTU6IDExNSxcbiAgICBERlRfSURfREcxNjogMTE2LFxuICAgIERGVF9JRF9ERzE3OiAxMTcsXG4gICAgREZUX0lEX0RHMTg6IDExOCxcbiAgICBERlRfSURfREcxOTogMTE5LFxuICAgIERGVF9JRF9ERzIwOiAxMjAsXG4gICAgREZUX0lEX0RHMjE6IDEyMSxcbiAgICBERlRfRExfQ09NOiAxNTAsXG4gICAgREZUX0RMX0RHMTogMTUxLFxuICAgIERGVF9ETF9ERzI6IDE1MixcbiAgICBERlRfRExfREczOiAxNTMsXG4gICAgREZUX0RMX0RHNDogMTU0LFxuICAgIERGVF9ETF9ERzU6IDE1NSxcbiAgICBERlRfRExfREc2OiAxNTYsXG4gICAgREZUX0RMX0RHNzogMTU3LFxuICAgIERGVF9ETF9ERzg6IDE1OCxcbiAgICBERlRfRExfREc5OiAxNTksXG4gICAgREZUX0RMX0RHMTA6IDE2MCxcbiAgICBERlRfRExfREcxMTogMTYxLFxuICAgIERGVF9ETF9ERzEyOiAxNjIsXG4gICAgREZUX0RMX0RHMTM6IDE2MyxcbiAgICBERlRfRExfREcxNDogMTY0LFxuICAgIERGVF9ETF9TT0Q6IDE2NSxcbiAgICBERlRfRExfQ0U6IDE2NixcbiAgICBERlRfRExfQ1ZDQTogMTY3LFxuICAgIERGVF9QQUNFX0NBUkRBQ0NFU1M6IDIwMCxcbiAgICBERlRfUEFDRV9DQVJEU0VDVVJJVFk6IDIwMSxcbiAgICBERlRfUEFDRV9DSElQU0VDVVJJVFk6IDIwMixcbiAgICBERlRfTUlGQVJFX0RBVEE6IDMwMCxcbiAgICBERlRfTUlGQVJFX1ZBTElESVRZOiAzMDEsXG4gICAgREZUX0FVVEhFTlRJQ0lUWVYyOiAzMDIsXG4gICAgREZUX0FUUjogNDAwLFxuICAgIERGVF9FU0lHTl9QSzogNTAwLFxuICAgIERGVF9FU0lHTl9TSUdORUREQVRBOiA1MDEsXG4gICAgREZUX0NFUlRJRklDQVRFOiA2MDAsXG4gICAgREZUX01BU1RFUkxJU1Q6IDYwMSxcbiAgICBERlRfREVGRUNUTElTVDogNjAyLFxuICAgIERGVF9ERVZJQVRJT05MSVNUOiA2MDMsXG4gICAgREZUX0FQUF9ESVJFQ1RPUlk6IDcwMCxcbiAgICBERlRfU0VTU0lPTjogNzAxLFxuICAgIERGVF9MT0dEQVRBOiA3MDIsXG4gICAgREZUX0NISVBfUFJPUEVSVElFUzogNzAzLFxuICAgIERGVF9TQU1fREFUQTogODAwLFxuICAgIERGVF9TQU1fREFUQV9NQVg6IDgwMCArIDMyLFxuICAgIERGVF9WRFM6IDkwMCxcbiAgICBERlRfVkRTTkM6IDkwMSxcbiAgICBERlRfVVNFUkRFRklORUQ6IDEwMDAsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTUlGQVJFX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTUlGQVJFIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9DT006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ09NXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hY2hpbmUgUmVhZGFibGUgWm9uZSAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCB0eXBlXCIgKyBcIiAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZXh0IGRhdGEgZWxlbWVudHMgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlXCIgKyBcIiAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaWNlbnNlIGhvbGRlciBpbmZvcm1hdGlvbiAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZXhwaXJ5XCIgKyBcIiAoREczKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSBkZXRhaWxzIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gSXJpcyBEYXRhIChERzQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWVcIiArIFwiIChERzQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0IGltYWdlIChERzQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0KHMpIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiICsgXCIgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlIC8gdXN1YWwgbWFyayBpbWFnZSAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9ueW1cIiArIFwiIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmFjaWFsIGRhdGEgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlIC8gdXN1YWwgbWFyayBpbWFnZSAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2FkZW1pYyB0aXRsZVwiICsgXCIgKERHNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGaW5nZXJwcmludChzKSAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoXCIgKyBcIiAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIElyaXMgRGF0YSAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREc5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aFwiICsgXCIgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBPdGhlciAoREc5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eVwiICsgXCIgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZGl0aW9uYWwgcGVyc29uYWwgZGV0YWlsKHMpIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2V4XCIgKyBcIiAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRvbWVzdGljIGRhdGEgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRpdGlvbmFsIGRvY3VtZW50IGRldGFpbHMgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWxzXCIgKyBcIiAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vbi1tYXRjaCBhbGVydCAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbChzKSAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY3RpdmUgQXV0aGVudGljYXRpb24gaW5mbyAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVBQyBpbmZvIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVBQyBpbmZvIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWN0aXZlIEF1dGhlbnRpY2F0aW9uIGluZm8gKERHMTUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uKHMpIHRvIG5vdGlmeSAoREcxNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE3XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIiArIFwiIChERzE3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxOFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCIgKyBcIiAoREcxOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMTlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMVwiICsgXCIgKERHMTkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzIwXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDJcIiArIFwiIChERzIwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsc1wiICsgXCIgKERHMjEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfU09EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLlNPRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ1ZDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NBUkRBQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZEFjY2Vzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNoaXBTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVBQX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHAgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVRSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9BVFJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9DSElQX1BST1BFUlRJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0NISVBfUFJPUEVSVElFU1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RFRkVDVExJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RFRkVDVExJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ERVZJQVRJT05MSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ERVZJQVRJT05MSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NFXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfQ1ZDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRExfQ1ZDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0VTSUdOX1BLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9QS1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0VTSUdOX1NJR05FRERBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0VTSUdOX1NJR05FRERBVEFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9MT0dEQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9MT0dEQVRBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTUFTVEVSTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTUFTVEVSTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1NFU1NJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1NFU1NJT05cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9VTlNQRUNJRklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfVU5TUEVDSUZJRURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9VU0VSREVGSU5FRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfVVNFUkRFRklORURcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVZpc3VhbEZpZWxkVHlwZSA9IHtcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19DT0RFOiAwLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERTogMSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVI6IDIsXG4gICAgRlRfREFURV9PRl9FWFBJUlk6IDMsXG4gICAgRlRfREFURV9PRl9JU1NVRTogNCxcbiAgICBGVF9EQVRFX09GX0JJUlRIOiA1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIOiA2LFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUjogNyxcbiAgICBGVF9TVVJOQU1FOiA4LFxuICAgIEZUX0dJVkVOX05BTUVTOiA5LFxuICAgIEZUX01PVEhFUlNfTkFNRTogMTAsXG4gICAgRlRfTkFUSU9OQUxJVFk6IDExLFxuICAgIEZUX1NFWDogMTIsXG4gICAgRlRfSEVJR0hUOiAxMyxcbiAgICBGVF9XRUlHSFQ6IDE0LFxuICAgIEZUX0VZRVNfQ09MT1I6IDE1LFxuICAgIEZUX0hBSVJfQ09MT1I6IDE2LFxuICAgIEZUX0FERFJFU1M6IDE3LFxuICAgIEZUX0RPTk9SOiAxOCxcbiAgICBGVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxOSxcbiAgICBGVF9ETF9DTEFTUzogMjAsXG4gICAgRlRfRExfRU5ET1JTRUQ6IDIxLFxuICAgIEZUX0RMX1JFU1RSSUNUSU9OX0NPREU6IDIyLFxuICAgIEZUX0RMX1VOREVSXzIxX0RBVEU6IDIzLFxuICAgIEZUX0FVVEhPUklUWTogMjQsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDI1LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREU6IDI2LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUjogMjcsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVI6IDI4LFxuICAgIEZUX1ZJU0FfSUQ6IDI5LFxuICAgIEZUX1ZJU0FfQ0xBU1M6IDMwLFxuICAgIEZUX1ZJU0FfU1VCX0NMQVNTOiAzMSxcbiAgICBGVF9NUlpfU1RSSU5HXzE6IDMyLFxuICAgIEZUX01SWl9TVFJJTkdfMjogMzMsXG4gICAgRlRfTVJaX1NUUklOR18zOiAzNCxcbiAgICBGVF9NUlpfVFlQRTogMzUsXG4gICAgRlRfT1BUSU9OQUxfREFUQTogMzYsXG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTogMzcsXG4gICAgRlRfSVNTVUlOR19TVEFURV9OQU1FOiAzOCxcbiAgICBGVF9QTEFDRV9PRl9JU1NVRTogMzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOiA0MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOiA0MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTogNDIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOiA0MyxcbiAgICBGVF9GSU5BTF9DSEVDS1NVTTogNDQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOiA0NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTogNDYsXG4gICAgRlRfVklTQV9JRF9DSEVDS1NVTTogNDcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06IDQ4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06IDQ5LFxuICAgIEZUX09USEVSOiA1MCxcbiAgICBGVF9NUlpfU1RSSU5HUzogNTEsXG4gICAgRlRfTkFNRV9TVUZGSVg6IDUyLFxuICAgIEZUX05BTUVfUFJFRklYOiA1MyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOiA1NCxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOiA1NSxcbiAgICBGVF9ET0NVTUVOVF9TRVJJRVM6IDU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVI6IDU3LFxuICAgIEZUX1JFR19DRVJUX0NBUl9NT0RFTDogNTgsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOiA1OSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjogNjAsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX1RZUEU6IDYxLFxuICAgIEZUX1JFR19DRVJUX01BWF9XRUlHSFQ6IDYyLFxuICAgIEZUX1JFR19DRVJUX1dFSUdIVDogNjMsXG4gICAgRlRfQUREUkVTU19BUkVBOiA2NCxcbiAgICBGVF9BRERSRVNTX1NUQVRFOiA2NSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HOiA2NixcbiAgICBGVF9BRERSRVNTX0hPVVNFOiA2NyxcbiAgICBGVF9BRERSRVNTX0ZMQVQ6IDY4LFxuICAgIEZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjogNjksXG4gICAgRlRfREFURV9PRl9SRUdJU1RSQVRJT046IDcwLFxuICAgIEZUX1JFU0lERU5UX0ZST006IDcxLFxuICAgIEZUX1JFU0lERU5UX1VOVElMOiA3MixcbiAgICBGVF9BVVRIT1JJVFlfQ09ERTogNzMsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTogNzQsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTogNzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVQ6IDc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWTogNzcsXG4gICAgRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogNzgsXG4gICAgRlRfQUREUkVTU19QT1NUQUxfQ09ERTogNzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOiA4MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDogODIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MyxcbiAgICBGVF9GSU5BTF9DSEVDS19ESUdJVDogODQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDogODYsXG4gICAgRlRfVklTQV9JRF9DSEVDS19ESUdJVDogODcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6IDg4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6IDg5LFxuICAgIEZUX1BFUk1JVF9ETF9DTEFTUzogOTAsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOiA5MSxcbiAgICBGVF9QRVJNSVRfSURFTlRJRklFUjogOTIsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6IDkzLFxuICAgIEZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOiA5NCxcbiAgICBGVF9QRVJNSVRfRU5ET1JTRUQ6IDk1LFxuICAgIEZUX0lTU1VFX1RJTUVTVEFNUDogOTYsXG4gICAgRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6IDk3LFxuICAgIEZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOiA5OCxcbiAgICBGVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOiA5OSxcbiAgICBGVF9WSVNBX1RZUEU6IDEwMCxcbiAgICBGVF9WSVNBX1ZBTElEX0ZST006IDEwMSxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMOiAxMDIsXG4gICAgRlRfRFVSQVRJT05fT0ZfU1RBWTogMTAzLFxuICAgIEZUX05VTUJFUl9PRl9FTlRSSUVTOiAxMDQsXG4gICAgRlRfREFZOiAxMDUsXG4gICAgRlRfTU9OVEg6IDEwNixcbiAgICBGVF9ZRUFSOiAxMDcsXG4gICAgRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6IDEwOCxcbiAgICBGVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6IDEwOSxcbiAgICBGVF9BS0FfREFURV9PRl9CSVJUSDogMTEwLFxuICAgIEZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxMTEsXG4gICAgRlRfQUtBX1NVUk5BTUU6IDExMixcbiAgICBGVF9BS0FfR0lWRU5fTkFNRVM6IDExMyxcbiAgICBGVF9BS0FfTkFNRV9TVUZGSVg6IDExNCxcbiAgICBGVF9BS0FfTkFNRV9QUkVGSVg6IDExNSxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOiAxMTYsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0NJVFk6IDExNyxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDExOCxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6IDExOSxcbiAgICBGVF9BVURJVF9JTkZPUk1BVElPTjogMTIwLFxuICAgIEZUX0lOVkVOVE9SWV9OVU1CRVI6IDEyMSxcbiAgICBGVF9SQUNFX0VUSE5JQ0lUWTogMTIyLFxuICAgIEZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOiAxMjMsXG4gICAgRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6IDEyNCxcbiAgICBGVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTogMTI1LFxuICAgIEZUX0ZBTUlMWV9OQU1FOiAxMjYsXG4gICAgRlRfR0lWRU5fTkFNRVNfUlVTOiAxMjcsXG4gICAgRlRfVklTQV9JRF9SVVM6IDEyOCxcbiAgICBGVF9GQVRIRVJTX05BTUU6IDEyOSxcbiAgICBGVF9GQVRIRVJTX05BTUVfUlVTOiAxMzAsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOiAxMzEsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfUlVTOiAxMzIsXG4gICAgRlRfQVVUSE9SSVRZX1JVUzogMTMzLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOiAxMzQsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOiAxMzUsXG4gICAgRlRfRU5HSU5FX1BPV0VSOiAxMzYsXG4gICAgRlRfRU5HSU5FX1ZPTFVNRTogMTM3LFxuICAgIEZUX0NIQVNTSVNfTlVNQkVSOiAxMzgsXG4gICAgRlRfRU5HSU5FX05VTUJFUjogMTM5LFxuICAgIEZUX0VOR0lORV9NT0RFTDogMTQwLFxuICAgIEZUX1ZFSElDTEVfQ0FURUdPUlk6IDE0MSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUjogMTQyLFxuICAgIEZUX0NPTlRST0xfTk86IDE0MyxcbiAgICBGVF9QQVJSRU5UU19HSVZFTl9OQU1FUzogMTQ0LFxuICAgIEZUX1NFQ09ORF9TVVJOQU1FOiAxNDUsXG4gICAgRlRfTUlERExFX05BTUU6IDE0NixcbiAgICBGVF9SRUdfQ0VSVF9WSU46IDE0NyxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6IDE0OCxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06IDE0OSxcbiAgICBGVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6IDE1MCxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6IDE1MSxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6IDE1MixcbiAgICBGVF9MSU5FXzFfQ0hFQ0tTVU06IDE1MyxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tTVU06IDE1NCxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tTVU06IDE1NSxcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOiAxNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTogMTU3LFxuICAgIEZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6IDE1OCxcbiAgICBGVF9DQVJEX0FDQ0VTU19OVU1CRVI6IDE1OSxcbiAgICBGVF9NQVJJVEFMX1NUQVRVUzogMTYwLFxuICAgIEZUX0NPTVBBTllfTkFNRTogMTYxLFxuICAgIEZUX1NQRUNJQUxfTk9URVM6IDE2MixcbiAgICBGVF9TVVJOQU1FX09GX1NQT1NFOiAxNjMsXG4gICAgRlRfVFJBQ0tJTkdfTlVNQkVSOiAxNjQsXG4gICAgRlRfQk9PS0xFVF9OVU1CRVI6IDE2NSxcbiAgICBGVF9DSElMRFJFTjogMTY2LFxuICAgIEZUX0NPUFk6IDE2NyxcbiAgICBGVF9TRVJJQUxfTlVNQkVSOiAxNjgsXG4gICAgRlRfRE9TU0lFUl9OVU1CRVI6IDE2OSxcbiAgICBGVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDE3MCxcbiAgICBGVF9URVJSSVRPUklBTF9WQUxJRElUWTogMTcxLFxuICAgIEZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOiAxNzIsXG4gICAgRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6IDE3MyxcbiAgICBGVF9ETF9VTkRFUl8xOF9EQVRFOiAxNzQsXG4gICAgRlRfRExfUkVDT1JEX0NSRUFURUQ6IDE3NSxcbiAgICBGVF9ETF9EVVBMSUNBVEVfREFURTogMTc2LFxuICAgIEZUX0RMX0lTU19UWVBFOiAxNzcsXG4gICAgRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6IDE3OCxcbiAgICBGVF9ERVNUSU5BVElPTjogMTc5LFxuICAgIEZUX0JMT09EX0dST1VQOiAxODAsXG4gICAgRlRfU0VRVUVOQ0VfTlVNQkVSOiAxODEsXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9UWVBFOiAxODIsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01BUks6IDE4MyxcbiAgICBGVF9UUkFOU0FDVElPTl9OVU1CRVI6IDE4NCxcbiAgICBGVF9BR0U6IDE4NSxcbiAgICBGVF9GT0xJT19OVU1CRVI6IDE4NixcbiAgICBGVF9WT1RFUl9LRVk6IDE4NyxcbiAgICBGVF9BRERSRVNTX01VTklDSVBBTElUWTogMTg4LFxuICAgIEZUX0FERFJFU1NfTE9DQVRJT046IDE4OSxcbiAgICBGVF9TRUNUSU9OOiAxOTAsXG4gICAgRlRfT0NSX05VTUJFUjogMTkxLFxuICAgIEZUX0ZFREVSQUxfRUxFQ1RJT05TOiAxOTIsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUjogMTkzLFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06IDE5NCxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOiAxOTUsXG4gICAgRlRfVklTQV9OVU1CRVI6IDE5NixcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS1NVTTogMTk3LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOiAxOTgsXG4gICAgRlRfVk9URVI6IDE5OSxcbiAgICBGVF9QUkVWSU9VU19UWVBFOiAyMDAsXG4gICAgRlRfRklFTERfRlJPTV9NUlo6IDIyMCxcbiAgICBGVF9DVVJSRU5UX0RBVEU6IDIyMSxcbiAgICBGVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6IDI1MSxcbiAgICBGVF9CQU5LTk9URV9OVU1CRVI6IDI1MixcbiAgICBGVF9DU0NfQ09ERTogMjUzLFxuICAgIEZUX0FSVElTVElDX05BTUU6IDI1NCxcbiAgICBGVF9BQ0FERU1JQ19USVRMRTogMjU1LFxuICAgIEZUX0FERFJFU1NfQ09VTlRSWTogMjU2LFxuICAgIEZUX0FERFJFU1NfWklQQ09ERTogMjU3LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOiAyNTgsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6IDI1OSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDogMjYwLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTogMjYxLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6IDI2MixcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6IDI2MyxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6IDI2NCxcbiAgICBGVF9DRExfQ0xBU1M6IDI2NSxcbiAgICBGVF9ETF9VTkRFUl8xOV9EQVRFOiAyNjYsXG4gICAgRlRfV0VJR0hUX1BPVU5EUzogMjY3LFxuICAgIEZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOiAyNjgsXG4gICAgRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOiAyNjksXG4gICAgRlRfUkVWSVNJT05fREFURTogMjcwLFxuICAgIEZUX0NPTVBMSUFOQ0VfVFlQRTogMjcxLFxuICAgIEZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046IDI3MixcbiAgICBGVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046IDI3MyxcbiAgICBGVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOiAyNzQsXG4gICAgRlRfRVhBTV9EQVRFOiAyNzUsXG4gICAgRlRfT1JHQU5JWkFUSU9OOiAyNzYsXG4gICAgRlRfREVQQVJUTUVOVDogMjc3LFxuICAgIEZUX1BBWV9HUkFERTogMjc4LFxuICAgIEZUX1JBTks6IDI3OSxcbiAgICBGVF9CRU5FRklUU19OVU1CRVI6IDI4MCxcbiAgICBGVF9TUE9OU09SX1NFUlZJQ0U6IDI4MSxcbiAgICBGVF9TUE9OU09SX1NUQVRVUzogMjgyLFxuICAgIEZUX1NQT05TT1I6IDI4MyxcbiAgICBGVF9SRUxBVElPTlNISVA6IDI4NCxcbiAgICBGVF9VU0NJUzogMjg1LFxuICAgIEZUX0NBVEVHT1JZOiAyODYsXG4gICAgRlRfQ09ORElUSU9OUzogMjg3LFxuICAgIEZUX0lERU5USUZJRVI6IDI4OCxcbiAgICBGVF9DT05GSUdVUkFUSU9OOiAyODksXG4gICAgRlRfRElTQ1JFVElPTkFSWV9EQVRBOiAyOTAsXG4gICAgRlRfTElORV8xX09QVElPTkFMX0RBVEE6IDI5MSxcbiAgICBGVF9MSU5FXzJfT1BUSU9OQUxfREFUQTogMjkyLFxuICAgIEZUX0xJTkVfM19PUFRJT05BTF9EQVRBOiAyOTMsXG4gICAgRlRfRVFWX0NPREU6IDI5NCxcbiAgICBGVF9BTFRfQ09ERTogMjk1LFxuICAgIEZUX0JJTkFSWV9DT0RFOiAyOTYsXG4gICAgRlRfUFNFVURPX0NPREU6IDI5NyxcbiAgICBGVF9GRUU6IDI5OCxcbiAgICBGVF9TVEFNUF9OVU1CRVI6IDI5OSxcbiAgICBGVF9TQkhfU0VDVVJJVFlPUFRJT05TOiAzMDAsXG4gICAgRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6IDMwMSxcbiAgICBGVF9EQVRFX09GX0NSRUFUSU9OOiAzMDIsXG4gICAgRlRfVkFMSURJVFlfUEVSSU9EOiAzMDMsXG4gICAgRlRfUEFUUk9OX0hFQURFUl9WRVJTSU9OOiAzMDQsXG4gICAgRlRfQkRCX1RZUEU6IDMwNSxcbiAgICBGVF9CSU9NRVRSSUNfVFlQRTogMzA2LFxuICAgIEZUX0JJT01FVFJJQ19TVUJUWVBFOiAzMDcsXG4gICAgRlRfQklPTUVUUklDX1BST0RVQ1RJRDogMzA4LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6IDMwOSxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX1RZUEU6IDMxMCxcbiAgICBGVF9QSE9ORTogMzExLFxuICAgIEZUX1BST0ZFU1NJT046IDMxMixcbiAgICBGVF9USVRMRTogMzEzLFxuICAgIEZUX1BFUlNPTkFMX1NVTU1BUlk6IDMxNCxcbiAgICBGVF9PVEhFUl9WQUxJRF9JRDogMzE1LFxuICAgIEZUX0NVU1RPRFlfSU5GTzogMzE2LFxuICAgIEZUX09USEVSX05BTUU6IDMxNyxcbiAgICBGVF9PQlNFUlZBVElPTlM6IDMxOCxcbiAgICBGVF9UQVg6IDMxOSxcbiAgICBGVF9EQVRFX09GX1BFUlNPTkFMSVpBVElPTjogMzIwLFxuICAgIEZUX1BFUlNPTkFMSVpBVElPTl9TTjogMzIxLFxuICAgIEZUX09USEVSUEVSU09OX05BTUU6IDMyMixcbiAgICBGVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDogMzIzLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX05BTUU6IDMyNCxcbiAgICBGVF9QRVJTT05UT05PVElGWV9QSE9ORTogMzI1LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0FERFJFU1M6IDMyNixcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6IDMyNyxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOiAzMjgsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOiAzMjksXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURUTzogMzMwLFxuICAgIEZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOiAzMzEsXG4gICAgRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6IDMzMixcbiAgICBGVF9BRE1JTklTVFJBVElWRV9OVU1CRVI6IDMzMyxcbiAgICBGVF9ET0NVTUVOVF9ESVNDUklNSU5BVE9SOiAzMzQsXG4gICAgRlRfREFUQV9ESVNDUklNSU5BVE9SOiAzMzUsXG4gICAgRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6IDMzNixcbiAgICBGVF9HTklCX05VTUJFUjogMzQwLFxuICAgIEZUX0RFUFRfTlVNQkVSOiAzNDEsXG4gICAgRlRfVEVMRVhfQ09ERTogMzQyLFxuICAgIEZUX0FMTEVSR0lFUzogMzQzLFxuICAgIEZUX1NQX0NPREU6IDM0NCxcbiAgICBGVF9DT1VSVF9DT0RFOiAzNDUsXG4gICAgRlRfQ1RZOiAzNDYsXG4gICAgRlRfU1BPTlNPUl9TU046IDM0NyxcbiAgICBGVF9ET19EX05VTUJFUjogMzQ4LFxuICAgIEZUX01DX05PVklDRV9EQVRFOiAzNDksXG4gICAgRlRfRFVGX05VTUJFUjogMzUwLFxuICAgIEZUX0FHWTogMzUxLFxuICAgIEZUX1BOUl9DT0RFOiAzNTIsXG4gICAgRlRfRlJPTV9BSVJQT1JUX0NPREU6IDM1MyxcbiAgICBGVF9UT19BSVJQT1JUX0NPREU6IDM1NCxcbiAgICBGVF9GTElHSFRfTlVNQkVSOiAzNTUsXG4gICAgRlRfREFURV9PRl9GTElHSFQ6IDM1NixcbiAgICBGVF9TRUFUX05VTUJFUjogMzU3LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzogMzU4LFxuICAgIEZUX0NDV19VTlRJTDogMzU5LFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06IDM2MCxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNjEsXG4gICAgRlRfUk9PTV9OVU1CRVI6IDM2MixcbiAgICBGVF9SRUxJR0lPTjogMzYzLFxuICAgIEZUX1JFTUFJTkRFUl9URVJNOiAzNjQsXG4gICAgRlRfRUxFQ1RST05JQ19USUNLRVRfSU5ESUNBVE9SOiAzNjUsXG4gICAgRlRfQ09NUEFSVE1FTlRfQ09ERTogMzY2LFxuICAgIEZUX0NIRUNLX0lOX1NFUVVFTkNFX05VTUJFUjogMzY3LFxuICAgIEZUX0FJUkxJTkVfREVTSUdOQVRPUl9PRl9CT0FSRElOR19QQVNTX0lTU1VFUjogMzY4LFxuICAgIEZUX0FJUkxJTkVfTlVNRVJJQ19DT0RFOiAzNjksXG4gICAgRlRfVElDS0VUX05VTUJFUjogMzcwLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX0FJUkxJTkVfREVTSUdOQVRPUjogMzcxLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX05VTUJFUjogMzcyLFxuICAgIEZUX0ZSRUVfQkFHR0FHRV9BTExPV0FOQ0U6IDM3MyxcbiAgICBGVF9QREZfNDE3X0NPREVDOiAzNzQsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06IDM3NSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDogMzc2LFxuICAgIEZUX1ZFVEVSQU46IDM3NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9GUk9NOiAzNzgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfVE86IDM3OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9OT1RFUzogMzgwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOiAzODEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX1RPOiAzODIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX05PVEVTOiAzODMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX0ZST006IDM4NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfVE86IDM4NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6IDM4NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9GUk9NOiAzODcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfVE86IDM4OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9OT1RFUzogMzg5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOiAzOTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX1RPOiAzOTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX05PVEVTOiAzOTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRlJPTTogMzkzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOiAzOTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfTk9URVM6IDM5NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfRlJPTTogMzk2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9UTzogMzk3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9OT1RFUzogMzk4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTogMzk5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfVE86IDQwMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOiA0MDEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9GUk9NOiA0MDIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9UTzogNDAzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfTk9URVM6IDQwNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX0ZST006IDQwNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX1RPOiA0MDYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9OT1RFUzogNDA3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTogNDA4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfVE86IDQwOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX05PVEVTOiA0MTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9GUk9NOiA0MTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzogNDEyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfTk9URVM6IDQxMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fRlJPTTogNDE0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9UTzogNDE1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9OT1RFUzogNDE2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOiA0MTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX1RPOiA0MTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX05PVEVTOiA0MTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX0ZST006IDQyMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfVE86IDQyMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6IDQyMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX0ZST006IDQyMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX1RPOiA0MjQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9OT1RFUzogNDI1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006IDQyNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9UTzogNDI3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOiA0MjgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfRlJPTTogNDI5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOiA0MzAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfTk9URVM6IDQzMSxcbiAgICBGVF9TVVJOQU1FX0FUX0JJUlRIOiA0MzIsXG4gICAgRlRfQ0lWSUxfU1RBVFVTOiA0MzMsXG4gICAgRlRfTlVNQkVSX09GX1NFQVRTOiA0MzQsXG4gICAgRlRfTlVNQkVSX09GX1NUQU5ESU5HX1BMQUNFUzogNDM1LFxuICAgIEZUX01BWF9TUEVFRDogNDM2LFxuICAgIEZUX0ZVRUxfVFlQRTogNDM3LFxuICAgIEZUX0VDX0VOVklST05NRU5UQUxfVFlQRTogNDM4LFxuICAgIEZUX1BPV0VSX1dFSUdIVF9SQVRJTzogNDM5LFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfQlJBS0VEOiA0NDAsXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDogNDQxLFxuICAgIEZUX1RSQU5TTUlTU0lPTl9UWVBFOiA0NDIsXG4gICAgRlRfVFJBSUxFUl9ISVRDSDogNDQzLFxuICAgIEZUX0FDQ09NUEFOSUVEX0JZOiA0NDQsXG4gICAgRlRfUE9MSUNFX0RJU1RSSUNUOiA0NDUsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURTogNDQ2LFxuICAgIEZUX1BBWUxPQURfQ0FQQUNJVFk6IDQ0NyxcbiAgICBGVF9OVU1CRVJfT0ZfQVhFTFM6IDQ0OCxcbiAgICBGVF9QRVJNSVNTSUJMRV9BWExFX0xPQUQ6IDQ0OSxcbiAgICBGVF9QUkVDSU5DVDogNDUwLFxuICAgIEZUX0lOVklURURfQlk6IDQ1MSxcbiAgICBGVF9QVVJQT1NFX09GX0VOVFJZOiA0NTIsXG4gICAgRlRfU0tJTl9DT0xPUjogNDUzLFxuICAgIEZUX0NPTVBMRVhJT046IDQ1NCxcbiAgICBGVF9BSVJQT1JUX0ZST006IDQ1NSxcbiAgICBGVF9BSVJQT1JUX1RPOiA0NTYsXG4gICAgRlRfQUlSTElORV9OQU1FOiA0NTcsXG4gICAgRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOiA0NTgsXG4gICAgRlRfTElDRU5TRV9OVU1CRVI6IDQ1OSxcbiAgICBGVF9JTl9UQU5LUzogNDYwLFxuICAgIEZUX0VYRVBUX0lOX1RBTktTOiA0NjEsXG4gICAgRlRfRkFTVF9UUkFDSzogNDYyLFxuICAgIEZUX09XTkVSOiA0NjMsXG4gICAgRlRfTVJaX1NUUklOR1NfSUNBT19SRklEOiA0NjQsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0U6IDQ2NSxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS1NVTTogNDY2LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLX0RJR0lUOiA0NjcsXG4gICAgRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOiA0NjgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX0ZST006IDQ2OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfVE86IDQ3MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfTk9URVM6IDQ3MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfRlJPTTogNDcyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9UTzogNDczLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzogNDc0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9GUk9NOiA0NzUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX1RPOiA0NzYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX05PVEVTOiA0NzcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX0ZST006IDQ3OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfVE86IDQ3OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfTk9URVM6IDQ4MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX0ZST006IDQ4MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX1RPOiA0ODIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9OT1RFUzogNDgzLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX0ZST006IDQ4NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19UTzogNDg1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOiA0ODYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfRlJPTTogNDg3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX1RPOiA0ODgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfTk9URVM6IDQ4OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfRlJPTTogNDkwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19UTzogNDkxLFxuICAgIEZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzogNDkyLFxuICAgIEZUX0JBTktDQVJETlVNQkVSOiA0OTMsXG4gICAgRlRfQkFOS0NBUkRWQUxJRFRIUlU6IDQ5NCxcbiAgICBGVF9UQVhfTlVNQkVSOiA0OTUsXG4gICAgRlRfSEVBTFRIX05VTUJFUjogNDk2LFxuICAgIEZUX0dSQU5ERkFUSEVSTkFNRTogNDk3LFxuICAgIEZUX1NFTEVDVEVFX0lORElDQVRPUjogNDk4LFxuICAgIEZUX01PVEhFUl9TVVJOQU1FOiA0OTksXG4gICAgRlRfTU9USEVSX0dJVkVOTkFNRTogNTAwLFxuICAgIEZUX0ZBVEhFUl9TVVJOQU1FOiA1MDEsXG4gICAgRlRfRkFUSEVSX0dJVkVOTkFNRTogNTAyLFxuICAgIEZUX01PVEhFUl9EQVRFT0ZCSVJUSDogNTAzLFxuICAgIEZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDogNTA0LFxuICAgIEZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjogNTA1LFxuICAgIEZUX0ZBVEhFUl9QRVJTT05BTE5VTUJFUjogNTA2LFxuICAgIEZUX01PVEhFUl9QTEFDRU9GQklSVEg6IDUwNyxcbiAgICBGVF9GQVRIRVJfUExBQ0VPRkJJUlRIOiA1MDgsXG4gICAgRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOiA1MDksXG4gICAgRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOiA1MTAsXG4gICAgRlRfREFURV9GSVJTVF9SRU5FV0FMOiA1MTEsXG4gICAgRlRfREFURV9TRUNPTkRfUkVORVdBTDogNTEyLFxuICAgIEZUX1BMQUNFX09GX0VYQU1JTkFUSU9OOiA1MTMsXG4gICAgRlRfQVBQTElDQVRJT05fTlVNQkVSOiA1MTQsXG4gICAgRlRfVk9VQ0hFUl9OVU1CRVI6IDUxNSxcbiAgICBGVF9BVVRIT1JJWkFUSU9OX05VTUJFUjogNTE2LFxuICAgIEZUX0ZBQ1VMVFk6IDUxNyxcbiAgICBGVF9GT1JNX09GX0VEVUNBVElPTjogNTE4LFxuICAgIEZUX0ROSV9OVU1CRVI6IDUxOSxcbiAgICBGVF9SRVRJUkVNRU5UX05VTUJFUjogNTIwLFxuICAgIEZUX1BST0ZFU1NJT05BTF9JRF9OVU1CRVI6IDUyMSxcbiAgICBGVF9BR0VfQVRfSVNTVUU6IDUyMixcbiAgICBGVF9ZRUFSU19TSU5DRV9JU1NVRTogNTIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9GUk9NOiA1MjQsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOiA1MjUsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX1RPOiA1MjYsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfRlJPTTogNTI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX05PVEVTOiA1MjgsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfVE86IDUyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX0ZST006IDUzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9FX05PVEVTOiA1MzEsXG4gICAgRlRfRExDTEFTU0NPREVfRV9UTzogNTMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfRlJPTTogNTMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfTk9URVM6IDUzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9GX1RPOiA1MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfRlJPTTogNTM2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX05PVEVTOiA1MzcsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfVE86IDUzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfRlJPTTogNTM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9OT1RFUzogNTQwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9UTzogNTQxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX0ZST006IDU0MixcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9OT1RFUzogNTQzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX1RPOiA1NDQsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfRlJPTTogNTQ1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX05PVEVTOiA1NDYsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfVE86IDU0NyxcbiAgICBGVF9ETENMQVNTQ09ERV9IX0ZST006IDU0OCxcbiAgICBGVF9ETENMQVNTQ09ERV9IX05PVEVTOiA1NDksXG4gICAgRlRfRExDTEFTU0NPREVfSF9UTzogNTUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfRlJPTTogNTUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfTk9URVM6IDU1MixcbiAgICBGVF9ETENMQVNTQ09ERV9JX1RPOiA1NTMsXG4gICAgRlRfRExDTEFTU0NPREVfS19GUk9NOiA1NTQsXG4gICAgRlRfRExDTEFTU0NPREVfS19OT1RFUzogNTU1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfVE86IDU1NixcbiAgICBGVF9ETENMQVNTQ09ERV9MS19GUk9NOiA1NTcsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfTk9URVM6IDU1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19UTzogNTU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fRlJPTTogNTYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fTk9URVM6IDU2MSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX1RPOiA1NjIsXG4gICAgRlRfRExDTEFTU0NPREVfU19GUk9NOiA1NjMsXG4gICAgRlRfRExDTEFTU0NPREVfU19OT1RFUzogNTY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfVE86IDU2NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9GUk9NOiA1NjYsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfTk9URVM6IDU2NyxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9UTzogNTY4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX0ZST006IDU2OSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9OT1RFUzogNTcwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX1RPOiA1NzEsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfRlJPTTogNTcyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX05PVEVTOiA1NzMsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfVE86IDU3NCxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9GUk9NOiA1NzUsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfTk9URVM6IDU3NixcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9UTzogNTc3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfRlJPTTogNTc4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfTk9URVM6IDU3OSxcbiAgICBGVF9ETENMQVNTQ09ERV9WX1RPOiA1ODAsXG4gICAgRlRfRExDTEFTU0NPREVfV19GUk9NOiA1ODEsXG4gICAgRlRfRExDTEFTU0NPREVfV19OT1RFUzogNTgyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfVE86IDU4MyxcbiAgICBGVF9VUkw6IDU4NCxcbiAgICBGVF9DQUxJQkVSOiA1ODUsXG4gICAgRlRfTU9ERUw6IDU4NixcbiAgICBGVF9NQUtFOiA1ODcsXG4gICAgRlRfTlVNQkVSX09GX0NZTElOREVSUzogNTg4LFxuICAgIEZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046IDU4OSxcbiAgICBGVF9TVVJOQU1FX09GX1dJRkVfQUZURVJfUkVHSVNUUkFUSU9OOiA1OTAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9XSUZFOiA1OTEsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9IVVNCQU5EOiA1OTIsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOiA1OTMsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfU0VDT05EX1BFUlNPTjogNTk0LFxuICAgIEZUX0NWVjogNTk1LFxuICAgIEZUX0RBVEVfT0ZfSU5TVVJBTkNFX0VYUElSWTogNTk2LFxuICAgIEZUX01PUlRHQUdFX0JZOiA1OTcsXG4gICAgRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjogNTk4LFxuICAgIEZUX09MRF9EQVRFX09GX0lTU1VFOiA1OTksXG4gICAgRlRfT0xEX1BMQUNFX09GX0lTU1VFOiA2MDAsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfRlJPTTogNjAxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX1RPOiA2MDIsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfTk9URVM6IDYwMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9GUk9NOiA2MDQsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfVE86IDYwNSxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9OT1RFUzogNjA2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX0ZST006IDYwNyxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9UTzogNjA4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX05PVEVTOiA2MDksXG4gICAgRlRfRExDTEFTU0NPREVfSENfRlJPTTogNjEwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX1RPOiA2MTEsXG4gICAgRlRfRExDTEFTU0NPREVfSENfTk9URVM6IDYxMixcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19GUk9NOiA2MTMsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfVE86IDYxNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19OT1RFUzogNjE1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX0ZST006IDYxNixcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9UTzogNjE3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX05PVEVTOiA2MTgsXG4gICAgRlRfRExDTEFTU0NPREVfUl9GUk9NOiA2MTksXG4gICAgRlRfRExDTEFTU0NPREVfUl9UTzogNjIwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfTk9URVM6IDYyMSxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9GUk9NOiA2MjIsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfVE86IDYyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9OT1RFUzogNjI0LFxuICAgIEZUX0NJVElaRU5TSElQX1NUQVRVUzogNjI1LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfRlJPTTogNjI2LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfVE86IDYyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9GUk9NOiA2MjgsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfVE86IDYyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9OT1RFUzogNjMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX0ZST006IDYzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9UTzogNjMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX05PVEVTOiA2MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfRlJPTTogNjM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX1RPOiA2MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfTk9URVM6IDYzNixcbiAgICBGVF9BTFRfREFURV9PRl9FWFBJUlk6IDYzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9GUk9NOiA2MzgsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfVE86IDYzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9OT1RFUzogNjQwLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX1RPOiA2NDMsXG4gICAgRlRfUEFZTUVOVF9QRVJJT0RfRlJPTTogNjQyLFxuICAgIEZUX0lTU1VFUl9JREVOVElGSUNBVElPTl9OVU1CRVI6IDY0MSxcbiAgICBGVF9WQUNDSU5BVElPTl9DRVJUSUZJQ0FURV9JREVOVElGSUVSOiA2NDQsXG4gICAgRlRfRklSU1RfTkFNRTogNjQ1LFxuICAgIEZUX0RBVEVfT0ZfQVJSSVZBTDogNjQ2LFxuICAgIEZUX1NFQ09ORF9OQU1FOiA2NDcsXG4gICAgRlRfVEhJUkRfTkFNRTogNjQ4LFxuICAgIEZUX0ZPVVJUSF9OQU1FOiA2NDksXG4gICAgRlRfTEFTVF9OQU1FOiA2NTAsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9DTEFTU19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VJTkdfU1RBVEVfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfRVhQSVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSU19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFUSU9OQUxJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0hFSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1dFSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VZRVNfQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXllIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9IQUlSX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhhaXIgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkcmVzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9OT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9ub3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU29jaWFsIGluc3VyYW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9FTkRPUlNFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIFJlc3RyaWN0aW9uIENvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1VOREVSXzIxX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAyMXN0IGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVVRIT1JJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQVRJT05BTElUWV9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBU1NQT1JUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklUQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX0lEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBDbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9TVUJfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBzdWJjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR18xOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdfMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HXzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUlOR19TVEFURV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9CSVJUSF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklOQUxfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluYWwgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgaW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSURfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBzdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1RIRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFNRV9TVUZGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BTUVfUFJFRklYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9TRVJJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgc2VyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9SRUdfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0NBUl9NT0RFTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIG1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9DQVJfQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQk9EWV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9keSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0NBUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfTUFYX1dFSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggcGVybWlzc2libGUgd2VpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9XRUlHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5sYWRlbiBtYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0FSRUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJlYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19TVEFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19CVUlMRElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbml0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0hPVVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ1aWxkaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0ZMQVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBhcnRtZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9SRUdJU1RSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVTSURFTlRfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVudCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRVNJREVOVF9VTlRJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVudCB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVUSE9SSVRZX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHJ5L3JlZ2lvbiBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaXJ0aCBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1NUUkVFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1BPU1RBTF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9CSVJUSF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklOQUxfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluYWwgY2hlY2sgZGlnaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSURfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBzdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0RMX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0lERU5USUZJRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGlkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9EQVRFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfUkVTVFJJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgcmVzdHJpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0VORE9SU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVRV9USU1FU1RBTVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWUgdGltZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGR1cGxpY2F0ZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1lZGljYWwgbm90ZXMvY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05PTl9SRVNJREVOVF9JTkRJQ0FUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9uLXJlc2lkZW50IGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9WQUxJRF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9WQUxJRF9VTlRJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHZhbGlkIHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EVVJBVElPTl9PRl9TVEFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1cmF0aW9uIG9mIHN0YXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9FTlRSSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT05USDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfWUVBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJZZWFyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9VTklRVUVfQ1VTVE9NRVJfSURFTlRJRklFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgY3VzdG9tZXIgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09NTUVSQ0lBTF9WRUhJQ0xFX0NPREVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbW1lcmNpYWwgdmVoaWNsZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfREFURV9PRl9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IERhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogU29jaWFsIEluc3VyYW5jZSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUtBX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogR2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUtBX05BTUVfU1VGRklYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1BSRUZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IE5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFJTElOR19BRERSRVNTX0NJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gY2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFJTElOR19BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIGp1cmlzZGljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gcG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVRElUX0lORk9STUFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBmb3IgdmFsaWRhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WRU5UT1JZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZlbnRvcnkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SQUNFX0VUSE5JQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSYWNlL2V0aG5pY2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSlVSSVNESUNUSU9OX1ZFSElDTEVfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIHZlaGljbGUgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0pVUklTRElDVElPTl9FTkRPUlNFTUVOVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gcmVzdHJpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFNSUxZX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9HSVZFTl9OQU1FU19SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX0lEX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIElEIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUlNfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUlNfTkFNRV9SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGFuZCBnaXZlbiBuYW1lcyAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9CSVJUSF9SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGggKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVUSE9SSVRZX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVSU5HX1NUQVRFX0NPREVfTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIGlzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWVyaWMgbmF0aW9uYWxpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5HSU5FX1BPV0VSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBwb3dlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5HSU5FX1ZPTFVNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgdm9sdW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSEFTU0lTX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGFzc2lzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5HSU5FX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfTU9ERUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIG1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WRUhJQ0xFX0NBVEVHT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lERU5USVRZX0NBUkRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT05UUk9MX05POlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbnRyb2wgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVJSRU5UU19HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXJlbnRzXFwnIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRUNPTkRfU1VSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWNvbmQgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUlERExFX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1ZJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGlkZW50aWZpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVklOX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1ZJTl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgVklOXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8yX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfM19DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzFfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8yX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfM19DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciByZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciByZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9WRUhJQ0xFX0lUU19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgSVRTIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NBUkRfQUNDRVNTX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXJkIGFjY2VzcyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BUklUQUxfU1RBVFVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hcml0YWwgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01QQU5ZX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGFueSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUEVDSUFMX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgbm90ZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfT0ZfU1BPU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvdXNlXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFDS0lOR19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhY2tpbmcgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CT09LTEVUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb29rbGV0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0hJTERSRU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbGRyZW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPUFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29weVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VSSUFMX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJpYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET1NTSUVSX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb3NzaWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUtBX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RFUlJJVE9SSUFMX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlcnJpdG9yaWFsIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HU19XSVRIX0NPUlJFQ1RfQ0hFQ0tfU1VNUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgd2l0aCBjb3JyZWN0IGNoZWNrc3Vtc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0RMIFJlc3RyaWN0aW9uIENvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1VOREVSXzE4X0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAxOHRoIGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9SRUNPUkRfQ1JFQVRFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNvcmQgY3JlYXRlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfRFVQTElDQVRFX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBkdXBsaWNhdGUgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0lTU19UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgSUQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ERVNUSU5BVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXN0aW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkxPT0RfR1JPVVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmxvb2QgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFUVVFTkNFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXF1ZW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0JPRFlfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0NBUl9NQVJLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgbWFrZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFJBTlNBQ1RJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zYWN0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRk9MSU9fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvbGlvIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVk9URVJfS0VZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyIEtleVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19NVU5JQ0lQQUxJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTXVuaWNpcGFsaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0xPQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxvY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRUNUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY3Rpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09DUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0NSIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkVERVJBTF9FTEVDVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmVkZXJhbCBlbGVjdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFRkVSRU5DRV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1BUSU9OQUxfREFUQV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3Igb3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1BUSU9OQUxfREFUQV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3Igb3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WT1RFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3RlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFJFVklPVVNfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlL251bWJlciBvZiB0aGUgcHJldmlvdXMgZG9jdW1lbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJRUxEX0ZST01fTVJaOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpZWxkIGZyb20gTVJaXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVVJSRU5UX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VycmVudCBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhdHVzIEV4cGlyeSBEYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CQU5LTk9URV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFua25vdGUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DU0NfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDU0MgQ29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVJUSVNUSUNfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9ueW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FDQURFTUlDX1RJVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0NPVU5UUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19aSVBDT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlpJUCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8yOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVFJFRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGg6IFN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBDaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DT1VOVFJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBDb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGg6IFBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DRExfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0RMIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9VTkRFUl8xOV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTl0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfV0VJR0hUX1BPVU5EUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXZWlnaHQgKHBvdW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElNSVRFRF9EVVJBVElPTl9ET0NVTUVOVF9JTkRJQ0FUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5kaWNhdG9yIG9mIGRvY3VtZW50IGxpbWl0ZWQgZHVyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VORE9SU0VNRU5UX0VYUElSQVRJT05fREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmRvcnNlbWVudCBleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFVklTSU9OX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmV2aXNpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09NUExJQU5DRV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBsaWFuY2UgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFNSUxZX05BTUVfVFJVTkNBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcnVuY2F0ZWQgc3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlyc3QgbmFtZSB0cnVuY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pZGRsZSBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VYQU1fREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeGFtIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09SR0FOSVpBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcmdhbml6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RFUEFSVE1FTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVwYXJ0bWVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFZX0dSQURFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheSBncmFkZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkFOSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSYW5rXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CRU5FRklUU19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVuZWZpdHMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SX1NFUlZJQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBzZXJ2aWNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SX1NUQVRVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BPTlNPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUxBVElPTlNISVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVsYXRpb25zaGlwXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9VU0NJUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVU0NJU1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0FURUdPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTkRJVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZGl0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJRklFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT05GSUdVUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RJU0NSRVRJT05BUllfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjcmV0aW9uYXJ5IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMV9PUFRJT05BTF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMl9PUFRJT05BTF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfM19PUFRJT05BTF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VRVl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVRViBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BTFRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBTFQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklOQVJZX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmluYXJ5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BTRVVET19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb2NvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZFRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NUQU1QX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGFtcCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dOSUJfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdOSUIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ERVBUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXBhcnRtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVEVMRVhfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZWxlZ3JhcGggY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUxMRVJHSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsbGVyZ2llc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGVjaWFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPVVJUX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291cnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ1RZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BPTlNPUl9TU046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBTU05cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPX0RfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01DX05PVklDRV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4cGlyeSBkYXRlIG9mIE1vdG9yY3ljbGUgTm92aWNlIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRFVGX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEVUYgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BR1k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUdZXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTlJfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQTlIgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJPTV9BSVJQT1JUX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29kZSBvZiB0aGUgYWlycG9ydCBvZiBkZXBhcnR1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RPX0FJUlBPUlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGFycml2YWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZMSUdIVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmxpZ2h0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9GTElHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBmbGlnaHRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQVRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlYXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBib2FyZGluZyBwYXNzIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DQ1dfVU5USUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0NXIHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXIgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUk9PTV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9vbSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFTElHSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlbGlnaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRU1BSU5ERVJfVEVSTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aHMgdG8gZXhwaXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTEVDVFJPTklDX1RJQ0tFVF9JTkRJQ0FUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRWxlY3Ryb25pYyB0aWNrZXQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01QQVJUTUVOVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBhcnRtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NIRUNLX0lOX1NFUVVFTkNFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjay1pbiBzZXF1ZW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUkxJTkVfREVTSUdOQVRPUl9PRl9CT0FSRElOR19QQVNTX0lTU1VFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIGRlc2lnbmF0b3Igb2YgYm9hcmRpbmcgcGFzcyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUkxJTkVfTlVNRVJJQ19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbnVtZXJpYyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9USUNLRVRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRpY2tldCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZSRVFVRU5UX0ZMWUVSX0FJUkxJTkVfREVTSUdOQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVxdWVudCBmbHllciBhaXJsaW5lIGRlc2lnbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZSRVFVRU5UX0ZMWUVSX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVxdWVudCBmbHllciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZSRUVfQkFHR0FHRV9BTExPV0FOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlZSBiYWdnYWdlIGFsbG93YW5jZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUERGXzQxN19DT0RFQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQREY0MTcgY29kZWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGlkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WRVRFUkFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZldGVyYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8xX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8xX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9FX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9FX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9ERV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfREVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfREVfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9NX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0xfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0xfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9UX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX1RfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQU1fRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FNX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FNX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8yX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfQVRfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0lWSUxfU1RBVFVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdmlsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX1NFQVRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBzZWF0c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX1NUQU5ESU5HX1BMQUNFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc3RhbmRpbmcgcGxhY2VzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQVhfU1BFRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IHNwZWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GVUVMX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnVlbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBlbnZpcm9ubWVudGFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BPV0VSX1dFSUdIVF9SQVRJTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3dlci10by13ZWlnaHQgcmF0aW9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BWF9NQVNTX09GX1RSQUlMRVJfQlJBS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBtYXNzIG9mIHRyYWlsZXIgKGJyYWtlZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IG1hc3Mgb2YgdHJhaWxlciAodW5icmFrZWQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFOU01JU1NJT05fVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFuc21pc3Npb24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFJBSUxFUl9ISVRDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFpbGVyIGhpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BQ0NPTVBBTklFRF9CWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2NvbXBhbmllZCBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUE9MSUNFX0RJU1RSSUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGljZSBkaXN0cmljdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklSU1RfSVNTVUVfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVlMT0FEX0NBUEFDSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheWxvYWQgY2FwYWNpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9BWEVMUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgYXhsZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JU1NJQkxFX0FYTEVfTE9BRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXNzaWJsZSBheGxlIGxvYWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BSRUNJTkNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByZWNpbmN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZJVEVEX0JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludml0ZWQgYnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BVUlBPU0VfT0ZfRU5UUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHVycG9zZSBvZiBlbnRyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0tJTl9DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTa2luIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01QTEVYSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXhpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUlBPUlRfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSUE9SVF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJwb3J0IG9mIGFycml2YWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUkxJTkVfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIGxveWFsdHkgcHJvZ3JhbSBmb3IgZnJlcXVlbnQgZmx5ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSUNFTlNFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaWNlbnNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5fVEFOS1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW4gdGFua3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VYRVBUX0lOX1RBTktTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIHRoYW4gdGFua3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBU1RfVFJBQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFzdCBUcmFjayBzZXJ2aWNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PV05FUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPd25lclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR1NfSUNBT19SRklEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyBmcm9tIElDQU8gUkZJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DRU5UVVJZX0RBVEVfT0ZfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2VudHVyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0EzX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0EzX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQTNfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9DMl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9DMl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0MyX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0QyX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0QyX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfRDJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMkVfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfR19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0dfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0dfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0pfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9KX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEogdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEogY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9MQ19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9MQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDX0xBU1NDT0RFX0xDX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CQU5LQ0FSRE5VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CQU5LQ0FSRFZBTElEVEhSVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIGNhcmQgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RBWF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF4IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0JIX1NFQ1VSSVRZT1BUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTQkggc2VjdXJpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIGludGVncml0eSBvcHRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0NSRUFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNyZWF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZBTElESVRZX1BFUklPRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWYWxpZGl0eSBwZXJpb2RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBVFJPTl9IRUFERVJfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXRyb24gaGVhZGVyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JEQl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJEQiB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklPTUVUUklDX1NVQlRZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHN1YnR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19QUk9EVUNUSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHByb2R1Y3QgSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIGZvcm1hdCBvd25lclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklPTUVUUklDX0ZPUk1BVF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEhPTkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGhvbmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BST0ZFU1NJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvZmVzc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVElUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9zaXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX1NVTU1BUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWwgZGF0YSBzdW1tYXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUl9WQUxJRF9JRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciB2YWxpZCBJRHNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NVU1RPRFlfSU5GTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXN0b2R5IGluZm9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09USEVSX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0JTRVJWQVRJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9ic2VydmF0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVEFYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9QRVJTT05BTElaQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWxpemF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMSVpBVElPTl9TTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJpYWwgbnVtYmVyIG9mIHBlcnNvbmFsaXphdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1RIRVJQRVJTT05fTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciBwZXJzb24sIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTlRPTk9USUZZX0RBVEVfT0ZfUkVDT1JEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IERhdGUgb2YgcmVjb3JkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IE5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTlRPTk9USUZZX1BIT05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IFBob25lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9BRERSRVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IEFkZHJlc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX0lTU1VFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX1NVQkpFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX1ZBTElEVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZGF0YSBmcm9tIHRoZSBERzEgZGF0YSBncm91cFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfR1JBTkRGQVRIRVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdyYW5kZmF0aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9IRUFMVEhfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlYWx0aCBpbnN1cmFuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UWVBFX0FQUFJPVkFMX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlIG9mIGFwcHJvdmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQURNSU5JU1RSQVRJVkVfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkbWluaXN0cmF0aXZlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfRElTQ1JJTUlOQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBkaXNjcmltaW5hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRBX0RJU0NSSU1JTkFUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0YSBkaXNjcmltaW5hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU09fSVNTVUVSX0lEX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRCBudW1iZXIgb2YgSVNPIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VMRUNURUVfSU5ESUNBVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlbGVjdGVlIGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX1NVUk5BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJfR0lWRU5OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZ2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX1NVUk5BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVRIRVJfR0lWRU5OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgZ2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0RBVEVPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0RBVEVPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX1BFUlNPTkFMTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9QTEFDRU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJfQ09VTlRSWU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBjb3VudHJ5IG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVRIRVJfQ09VTlRSWU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBjb3VudHJ5IG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX0ZJUlNUX1JFTkVXQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBmaXJzdCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX1NFQ09ORF9SRU5FV0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2Ygc2Vjb25kIHJlbmV3YWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0VYQU1JTkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGV4YW1pbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BUFBMSUNBVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwbGljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WT1VDSEVSX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3VjaGVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXV0aG9yaXphdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBQ1VMVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFjdWx0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRk9STV9PRl9FRFVDQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9ybSBvZiBlZHVjYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ROSV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRE5JIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVUSVJFTUVOVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmV0aXJlbWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BST0ZFU1NJT05BTF9JRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvZmVzc2lvbmFsIElEIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUdFX0FUX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFnZSBhdCBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfWUVBUlNfU0lOQ0VfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWWVhcnMgc2luY2UgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0JUUF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9CVFBfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9CVFBfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DM19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0MzX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DM19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9FX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkExX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQTEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQTEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZCX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZCX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9HMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0cxX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9HMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0lfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0lfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9LX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9LX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0tfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTEtfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MS19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTEtfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05fRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05fTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9TX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9TX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1NfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVEJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UQl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVEJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RNX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVE1fTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RNX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RSX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFZfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UVl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ZfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ZfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9XX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9XX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1dfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0FMSUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYWxpYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSVRJWkVOU0hJUF9PRl9GSVJTVF9QRVJTT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIGZpcnN0IHBlcnNvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0lUSVpFTlNISVBfT0ZfU0VDT05EX1BFUlNPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXRpemVuc2hpcCBvZiB0aGUgc2Vjb25kIHBlcnNvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ1ZWOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNWVi9DVkNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoIG9mIGh1c2JhbmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoIG9mIHdpZmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BS0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFrZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9ERUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9kZWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9DWUxJTkRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGN5bGluZGVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9IVVNCQU5EX0FGVEVSX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIGh1c2JhbmQgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX09GX1dJRkVfQUZURVJfUkVHSVNUUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgb2Ygd2lmZSBhZnRlciByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1VSTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVUkxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSU5TVVJBTkNFX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHBpcnkgZGF0ZSBvZiBpbnN1cmFuY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PUlRHQUdFX0JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vcnRnYWdlIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PTERfRE9DVU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09MRF9EQVRFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PTERfUExBQ0VfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2xkIHBsYWNlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xSX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTVJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9NUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTVJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hSX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSFJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hSX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IQ19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hDX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTUNfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9NQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTUNfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0FfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DQV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NJVElaRU5TSElQX1NUQVRVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXRpemVuc2hpcCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JTElUQVJZX1NFUlZJQ0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBzZXJ2aWNlIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JTElUQVJZX1NFUlZJQ0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgc2VydmljZSB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRDNfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9EM19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRDNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05UX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTlQgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTlRfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTlQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05UX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFROIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ROX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFROIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUxUX0RBVEVfT0ZfRVhQSVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsdGVybmF0aXZlIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DRF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENEIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NEX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENEIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DRF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklSU1RfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0FSUklWQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBhcnJpdmFsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVRVJfSURFTlRJRklDQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VlciBpZGVudGlmaWNhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBWU1FTlRfUEVSSU9EX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bWVudCBwZXJpb2QgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFZTUVOVF9QRVJJT0RfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bWVudCBwZXJpb2QgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZBQ0NJTkFUSU9OX0NFUlRJRklDQVRFX0lERU5USUZJRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIHZhY2NpbmF0aW9uIGNlcnRpZmljYXRlIGlkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQ09ORF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY29uZCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9USElSRF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRoaXJkIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZPVVJUSF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvdXJ0aCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MQVNUX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGFzdCBuYW1lXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlck9yaWVudGF0aW9uID0ge1xuICAgIEFMTDogMCxcbiAgICBQT1JUUkFJVDogMSxcbiAgICBMQU5EU0NBUEU6IDIsXG4gICAgTEFORFNDQVBFX0xFRlQ6IDMsXG4gICAgTEFORFNDQVBFX1JJR0hUOiA0LFxufVxuXG5leHBvcnQgY29uc3QgTENJRCA9IHtcbiAgICBMQVRJTjogMCxcbiAgICBBQktIQVpJQU5fQ1lSSUxMSUM6IDEwMDExLFxuICAgIEFGUklLQUFOUzogMTA3OCxcbiAgICBBTEJBTklBTjogMTA1MixcbiAgICBBTUhBUklDOiAxMTE4LFxuICAgIEFSQUJJQ19BTEdFUklBOiA1MTIxLFxuICAgIEFSQUJJQ19CQUhSQUlOOiAxNTM2MSxcbiAgICBBUkFCSUNfRUdZUFQ6IDMwNzMsXG4gICAgQVJBQklDX0lSQVE6IDIwNDksXG4gICAgQVJBQklDX0pPUkRBTjogMTEyNjUsXG4gICAgQVJBQklDX0tVV0FJVDogMTMzMTMsXG4gICAgQVJBQklDX0xFQkFOT046IDEyMjg5LFxuICAgIEFSQUJJQ19MSUJZQTogNDA5NyxcbiAgICBBUkFCSUNfTU9ST0NDTzogNjE0NSxcbiAgICBBUkFCSUNfT01BTjogODE5MyxcbiAgICBBUkFCSUNfUUFUQVI6IDE2Mzg1LFxuICAgIEFSQUJJQ19TQVVESV9BUkFCSUE6IDEwMjUsXG4gICAgQVJBQklDX1NZUklBOiAxMDI0MSxcbiAgICBBUkFCSUNfVFVOSVNJQTogNzE2OSxcbiAgICBBUkFCSUNfVUFFOiAxNDMzNyxcbiAgICBBUkFCSUNfWUVNRU46IDkyMTcsXG4gICAgQVJBQklDX0FSTUVOSUFOOiAxMDY3LFxuICAgIEFSQUJJQ19XT1JMRDogNDA5NixcbiAgICBBWkVSSV9DWVJJTElDOiAyMDkyLFxuICAgIEFaRVJJX0xBVElOOiAxMDY4LFxuICAgIEJBU1FVRTogMTA2OSxcbiAgICBCQU5LX0NBUkQ6IDEwMDAzLFxuICAgIEJBTktfQ0FSRF9DVlYyOiAxMDAwNCxcbiAgICBCQU5LX0NBUkRfTkFNRTogMTAwMDIsXG4gICAgQkFOS19DQVJEX05VTUJFUjogMTAwMDAsXG4gICAgQkFOS19DQVJEX1ZBTElEX1RIUlU6IDEwMDAxLFxuICAgIEJFTEFSVVNJQU46IDEwNTksXG4gICAgQkVOR0FMSTogMjExNyxcbiAgICBCVUxHQVJJQU46IDEwMjYsXG4gICAgQ0FUQUxBTjogMTAyNyxcbiAgICBDSElORVNFX0hPTkdLT05HX1NBUjogMzA3NixcbiAgICBDSElORVNFX01BQ0FPX1NBUjogNTEyNCxcbiAgICBDSElORVNFOiAyMDUyLFxuICAgIENISU5FU0VfU0lOR0FQT1JFOiA0MTAwLFxuICAgIENISU5FU0VfVEFJV0FOOiAxMDI4LFxuICAgIENST0FUSUFOOiAxMDUwLFxuICAgIENaRUNIOiAxMDI5LFxuICAgIERBTklTSDogMTAzMCxcbiAgICBESVZFSEk6IDExMjUsXG4gICAgRFVUQ0hfQkVMR0lVTTogMjA2NyxcbiAgICBEVVRDSF9ORVRIRVJMQU5EUzogMTA0MyxcbiAgICBFTkdMSVNIX0FVU1RSQUxJQTogMzA4MSxcbiAgICBFTkdMSVNIX0JFTElaRTogMTAyNDksXG4gICAgRU5HTElTSF9DQU5BREE6IDQxMDUsXG4gICAgRU5HTElTSF9DQVJSSUJFQU46IDkyMjUsXG4gICAgRU5HTElTSF9JUkVMQU5EOiA2MTUzLFxuICAgIEVOR0xJU0hfSkFNQUlDQTogODIwMSxcbiAgICBFTkdMSVNIX05FV19aRUFMQU5EOiA1MTI5LFxuICAgIEVOR0xJU0hfUEhJTElQUElORVM6IDEzMzIxLFxuICAgIEVOR0xJU0hfU09VVEhfQUZSSUNBOiA3MTc3LFxuICAgIEVOR0xJU0hfVFJJTklEQUQ6IDExMjczLFxuICAgIEVOR0xJU0hfVUs6IDIwNTcsXG4gICAgRU5HTElTSF9VUzogMTAzMyxcbiAgICBFTkdMSVNIX1pJTUJBQldFOiAxMjI5NyxcbiAgICBFU1RPTklBTjogMTA2MSxcbiAgICBGQUVST0VTRTogMTA4MCxcbiAgICBGQVJTSTogMTA2NSxcbiAgICBGSU5OSVNIOiAxMDM1LFxuICAgIEZSRU5DSF9CRUxHSVVNOiAyMDYwLFxuICAgIEZSRU5DSF9DQU5BREE6IDMwODQsXG4gICAgRlJFTkNIX0ZSQU5DRTogMTAzNixcbiAgICBGUkVOQ0hfTFVYRU1CT1VSRzogNTEzMixcbiAgICBGUkVOQ0hfTU9OQUNPOiA2MTU2LFxuICAgIEZSRU5DSF9TV0lUWkVSTEFORDogNDEwOCxcbiAgICBGWVJPX01BQ0VET05JQU46IDEwNzEsXG4gICAgR0FMSUNJQU46IDExMTAsXG4gICAgR0VPUkdJQU46IDEwNzksXG4gICAgR0VSTUFOX0FVU1RSSUE6IDMwNzksXG4gICAgR0VSTUFOX0dFUk1BTlk6IDEwMzEsXG4gICAgR0VSTUFOX0xJRUNIVEVOU1RFSU46IDUxMjcsXG4gICAgR0VSTUFOX0xVWEVNQk9VUkc6IDQxMDMsXG4gICAgR0VSTUFOX1NXSVRaRVJMQU5EOiAyMDU1LFxuICAgIEdSRUVLOiAxMDMyLFxuICAgIEdVSkFSQVRJOiAxMDk1LFxuICAgIEhFQlJFVzogMTAzNyxcbiAgICBISU5ESV9JTkRJQTogMTA4MSxcbiAgICBIVU5HQVJJQU46IDEwMzgsXG4gICAgSUNFTEFORElDOiAxMDM5LFxuICAgIElORE9ORVNJQU46IDEwNTcsXG4gICAgSVRBTElBTl9JVEFMWTogMTA0MCxcbiAgICBJVEFMSUFOX1NXSVRaRVJMQU5EOiAyMDY0LFxuICAgIEpBUEFORVNFOiAxMDQxLFxuICAgIEtBTk5BREE6IDEwOTksXG4gICAgS0FTSE1JUkk6IDExMjAsXG4gICAgS0FaQUtIOiAxMDg3LFxuICAgIEtPTktBTkk6IDExMTEsXG4gICAgS09SRUFOOiAxMDQyLFxuICAgIEtZUkdZWl9DWVJJTElDSzogMTA4OCxcbiAgICBMQU86IDExMDgsXG4gICAgTEFUVklBTjogMTA2MixcbiAgICBMSVRIVUFOSUFOOiAxMDYzLFxuICAgIE1BTEFZX01BTEFZU0lBOiAxMDg2LFxuICAgIE1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOiAyMTEwLFxuICAgIE1BUkFUSEk6IDExMDIsXG4gICAgTU9OR09MSUFOX0NZUklMSUM6IDExMDQsXG4gICAgTk9SV0VHSUFOX0JPS01BTDogMTA0NCxcbiAgICBOT1JXRUdJQU5fTllPUlNLOiAyMDY4LFxuICAgIFBBU0hUTzogMTEyMyxcbiAgICBQT0xJU0g6IDEwNDUsXG4gICAgUE9SVFVHVUVTRV9CUkFaSUw6IDEwNDYsXG4gICAgUE9SVFVHVUVTRV9QT1JUVUdBTDogMjA3MCxcbiAgICBQVU5KQUJJOiAxMDk0LFxuICAgIFJIQUVUT19ST01BTklDOiAxMDQ3LFxuICAgIFJPTUFOSUFOOiAxMDQ4LFxuICAgIFJVU1NJQU46IDEwNDksXG4gICAgU0FOU0tSSVQ6IDExMDMsXG4gICAgU0VSQklBTl9DWVJJTElDOiAzMDk4LFxuICAgIFNFUkJJQU5fTEFUSU46IDIwNzQsXG4gICAgU0lOREhJOiAyMTM3LFxuICAgIFNJTkRISV9JTkRJQTogMTExMyxcbiAgICBTSU5IQUxBOiAxMTE1LFxuICAgIFNMT1ZBSzogMTA1MSxcbiAgICBTTE9WRU5JQU46IDEwNjAsXG4gICAgU1BBTklTSF9BUkdFTlRJTkE6IDExMjc0LFxuICAgIFNQQU5JU0hfQk9MSVZJQTogMTYzOTQsXG4gICAgU1BBTklTSF9DSElMRTogMTMzMjIsXG4gICAgU1BBTklDSF9DT0xPTUJJQTogOTIyNixcbiAgICBTUEFOSVNIX0NPU1RBX1JJQ0E6IDUxMzAsXG4gICAgU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6IDcxNzgsXG4gICAgU1BBTklTSF9FQ1VBRE9SOiAxMjI5OCxcbiAgICBTUEFOSVNIX0VMX1NBTFZBRE9SOiAxNzQxOCxcbiAgICBTUEFOSVNIX0dVQVRFTUFMQTogNDEwNixcbiAgICBTUEFOSVNIX0hPTkRVUkFTOiAxODQ0MixcbiAgICBTUEFOSVNIX01FWElDTzogMjA1OCxcbiAgICBTUEFOSVNIX05JQ0FSQUdVQTogMTk0NjYsXG4gICAgU1BBTklTSF9QQU5BTUE6IDYxNTQsXG4gICAgU1BBTklTSF9QQVJBR1VBWTogMTUzNzAsXG4gICAgU1BBTklTSF9QRVJVOiAxMDI1MCxcbiAgICBTUEFOSVNIX1BVRVJUT19SSUNPOiAyMDQ5MCxcbiAgICBTUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6IDEwMzQsXG4gICAgU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6IDMwODIsXG4gICAgU1BBTklTSF9VUlVHVUFZOiAxNDM0NixcbiAgICBTUEFOSVNIX1ZFTkVaVUVMQTogODIwMixcbiAgICBTV0FISUxJOiAxMDg5LFxuICAgIFNXRURJU0g6IDEwNTMsXG4gICAgU1dFRElTSF9GSU5MQU5EOiAyMDc3LFxuICAgIFNZUklBQzogMTExNCxcbiAgICBUQU1JTDogMTA5NyxcbiAgICBUQVRBUjogMTA5MixcbiAgICBURUxVR1U6IDEwOTgsXG4gICAgVEhBSV9USEFJTEFORDogMTA1NCxcbiAgICBUVVJLSVNIOiAxMDU1LFxuICAgIFRBSklLX0NZUklMTElDOiAxMDY0LFxuICAgIFRVUktNRU46IDEwOTAsXG4gICAgVUtSQUlOSUFOOiAxMDU4LFxuICAgIFVSRFU6IDEwNTYsXG4gICAgVVpCRUtfQ1lSSUxJQzogMjExNSxcbiAgICBVWkJFS19MQVRJTjogMTA5MSxcbiAgICBWSUVUTkFNRVNFOiAxMDY2LFxuICAgIENUQ19TSU1QTElGSUVEOiA1MDAwMSxcbiAgICBDVENfVFJBRElUSU9OQUw6IDUwMDAyLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0aW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFGUklLQUFOUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZnJpa2FhbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFCS0hBWklBTl9DWVJJTExJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBYmtoYXppYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxCQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxiYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFNSEFSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQW1oYXJpY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FMR0VSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChBbGdlcmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0JBSFJBSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChCYWhyYWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0VHWVBUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoRWd5cHQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSVJBUTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKElyYXEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSk9SREFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoSm9yZGFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0tVV0FJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEt1d2FpdClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MRUJBTk9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTGViYW5vbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MSUJZQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExpYnlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX01PUk9DQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChNb3JvY2NvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX09NQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChPbWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1FBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoUWF0YXIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfU0FVRElfQVJBQklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU2F1ZGkgQXJhYmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NZUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU3lyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVFVOSVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFR1bmlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVUFFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoVS5BLkUuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1lFTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoWWVtZW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQVJNRU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJtZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19XT1JMRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFdvcmxkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BWkVSSV9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQVNRVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFzcXVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQU5LX0NBUkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBDYXJkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQU5LX0NBUkRfQ1ZWMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIENhcmQgQ1ZWMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFOS19DQVJEX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBDYXJkIE5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJBTktfQ0FSRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBDYXJkIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFOS19DQVJEX1ZBTElEX1RIUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBDYXJkIFZhbGlkIFRocnVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJFTEFSVVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVsYXJ1c2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkVOR0FMSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZW5nYWxpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CVUxHQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVsZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DQVRBTEFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhdGFsYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfSE9OR0tPTkdfU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKEhvbmdLb25nIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfTUFDQU9fU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKE1hY2FvIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9TSU5HQVBPUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoU2luZ2Fwb3JlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9UQUlXQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoVGFpd2FuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1JPQVRJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3JvYXRpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNaRUNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN6ZWNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EQU5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGFuaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ESVZFSEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGl2ZWhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EVVRDSF9CRUxHSVVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfTkVUSEVSTEFORFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHV0Y2ggKE5ldGhlcmxhbmRzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9BVVNUUkFMSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQXVzdHJhbGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9CRUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQmVsaXplKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQU5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQVJSSUJFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FyaWJiZWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9JUkVMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKElyZWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0pBTUFJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoSmFtYWljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfTkVXX1pFQUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoTmV3IFplYWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1BISUxJUFBJTkVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFBoaWxpcHBpbmVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9TT1VUSF9BRlJJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoU291dGggQWZyaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9UUklOSURBRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChUcmluaWRhZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVW5pdGVkIEtpbmdkb20pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1pJTUJBQldFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFppbWJhYndlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVNUT05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXN0b25pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZBRVJPRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhZXJvZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQVJTSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXJzaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRklOTklTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5uaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEJlbGdpdW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0ZSQU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEZyYW5jZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9NT05BQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChNb25hY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdBTElDSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdhbGljaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRU9SR0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZW9yZ2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0FVU1RSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChBdXN0cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0dFUk1BTlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChHZXJtYW55KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xJRUNIVEVOU1RFSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMaWVjaHRlbnN0ZWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xVWEVNQk9VUkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMdXhlbWJvdXJnKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HUkVFSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmVla1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1VKQVJBVEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3VqYXJhdGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhFQlJFVzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWJyZXdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhJTkRJX0lORElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhpbmRpIChJbmRpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhVTkdBUklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIdW5nYXJpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklDRUxBTkRJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJY2VsYW5kaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklORE9ORVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5kb25lc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSVRBTElBTl9JVEFMWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJdGFsaWFuIChJdGFseSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5KQVBBTkVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKYXBhbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FOTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYW5uYWRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LQVNITUlSSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYXNobWlyaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FaQUtIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkthemFraFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09OS0FOSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLb25rYW5pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LT1JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29yZWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LWVJHWVpfQ1lSSUxJQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS3lyZ3l6IChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxBTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYW9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVFZJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0dmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTElUSFVBTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaXRodWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GWVJPX01BQ0VET05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRllSTyBNYWNlZG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9NQUxBWVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoTWFsYXlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9CUlVORUlfREFSVVNTQUxBTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoQnJ1bmVpIERhcnVzc2FsYW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQVJBVEhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hcmF0aGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1PTkdPTElBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbmdvbGlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OT1JXRUdJQU5fQk9LTUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vcndlZ2lhbiAoQm9rbWFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX05ZT1JTSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKE55bm9yc2spXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QQVNIVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzaHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT0xJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX0JSQVpJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChCcmF6aWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX1BPUlRVR0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnR1Z3Vlc2UgKFBvcnR1Z2FsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUFVOSkFCSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdW5qYWJpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SSEFFVE9fUk9NQU5JQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaGFldG8tUm9tYW5pY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUk9NQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9tYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJVU1NJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVzc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0FOU0tSSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Fuc2tyaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNJTkRISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaW5kaGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNJTkRISV9JTkRJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaW5kaGkgKEluZGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0lOSEFMQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaW5oYWxhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyYmlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkFLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3Zha1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3ZlbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9BUkdFTlRJTkE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQXJnZW50aW5hKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9CT0xJVklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEJvbGl2aWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NISUxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENoaWxlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklDSF9DT0xPTUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb2xvbWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQ09TVEFfUklDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb3N0YSBSaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FQ1VBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVjdWFkb3IpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0VMX1NBTFZBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVsIFNhbHZhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9HVUFURU1BTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoR3VhdGVtYWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9IT05EVVJBUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChIb25kdXJhcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTUVYSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE1leGljbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTklDQVJBR1VBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE5pY2FyYWd1YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFOQU1BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhbmFtYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFSQUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGFyYWd1YXkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BFUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGVydSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUFVFUlRPX1JJQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUHVlcnRvIFJpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVHJhZGl0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEludGVybmF0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVVJVR1VBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChVcnVndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9WRU5FWlVFTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVmVuZXp1ZWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dBSElMSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2FoaWxpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3ZWRpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXRURJU0hfRklOTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoIChGaW5sYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1lSSUFDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN5cmlhY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFNSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFtaWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhdGFyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5URUxVR1U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsdWd1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5USEFJX1RIQUlMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRoYWkgKFRoYWlsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS0lTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJraXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQUpJS19DWVJJTExJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYWppayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UVVJLTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1cmttZW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVLUkFJTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVa3JhaW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVSRFU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXJkdVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VWkJFS19MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5WSUVUTkFNRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpZXRuYW1lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNUQ19TSU1QTElGSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBTaW1wbGlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfVFJBRElUSU9OQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1RDIFRyYWRpdGlvbmFsXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9MaWdodHMgPSB7XG4gICAgTk9ORTogMCxcbiAgICBSUFJNX0xJR0hUX1VWOiAxMjgsXG4gICAgUlBSTV9MSUdIVF9XSElURV9GVUxMOiA2LFxuICAgIFJQUk1fTElHSFRfSVI6IDE2Nzc3MjE2LFxuICAgIFJQUk1fTGlnaHRfSVJfVE9QOiA4LFxuICAgIFJQUk1fTGlnaHRfSVJfU0lERTogMTYsXG4gICAgUlBSTV9MaWdodF9JUl9GdWxsOiAoOCB8IDE2KSxcbiAgICBSUFJNX0xJR0hUX09WRDogNjcxMDg4NjQsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1VWOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVWXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xpZ2h0X0lSX0Z1bGw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSVJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJQUk1fTElHSFRfV0hJVEVfRlVMTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNpYmxlIGxpZ2h0XCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQnV0dDogMCxcbiAgICBSb3VuZDogMSxcbiAgICBTcXVhcmU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayA9IHtcbiAgICBQb3J0cmFpdDogMCxcbiAgICBMYW5kc2NhcGVMZWZ0OiAxLFxuICAgIExhbmRzY2FwZVJpZ2h0OiAyLFxuICAgIFBvcnRyYWl0VXBzaWRlRG93bjogMyxcbiAgICBMYW5kc2NhcGU6IDQsXG4gICAgQWxsOiA1LFxuICAgIEFsbEJ1dFVwc2lkZURvd246IDYsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIExvdzogMCxcbiAgICBNZWRpdW06IDEsXG4gICAgSGlnaDogMixcbiAgICBQaG90bzogMyxcbiAgICBJbnB1dFByaW9yaXR5OiA0LFxuICAgIFFIRDk2MHg1NDA6IDUsXG4gICAgSGQxMjgweDcyMDogNixcbiAgICBIZDE5MjB4MTA4MDogNyxcbiAgICBIZDRLMzg0MHgyMTYwOiA4LFxuICAgIElGcmFtZTk2MHg1NDA6IDksXG4gICAgSUZyYW1lMTI4MHg3MjA6IDEwLFxuICAgIFF2Z2EzMjB4MjQwOiAxMSxcbiAgICBWZ2E2NDB4NDgwOiAxMixcbiAgICBDaWYzNTJ4Mjg4OiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZURldmljZVBvc2l0aW9uID0ge1xuICAgIEZyb250OiAwLFxuICAgIEJhY2s6IDEsXG4gICAgVW5zcGVjaWZpZWQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSVZpZXdDb250ZW50TW9kZSA9IHtcbiAgICBTY2FsZVRvRmlsbDogMCxcbiAgICBTY2FsZUFzcGVjdEZpdDogMSxcbiAgICBTY2FsZUFzcGVjdEZpbGw6IDIsXG4gICAgUmVkcmF3OiAzLFxuICAgIENlbnRlcjogNCxcbiAgICBUb3A6IDUsXG4gICAgQm90dG9tOiA2LFxuICAgIExlZnQ6IDcsXG4gICAgUmlnaHQ6IDgsXG4gICAgVG9wTGVmdDogOSxcbiAgICBUb3BSaWdodDogMTAsXG4gICAgQm90dG9tTGVmdDogMTEsXG4gICAgQm90dG9tUmlnaHQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIGVSUFJNX0F1dGhlbnRpY2l0eSxcbiAgIGVSRklEX0Vycm9yQ29kZXMsXG4gICBlTERTX1BhcnNpbmdFcnJvckNvZGVzLFxuICAgZVJGSURfQ2VydGlmaWNhdGVUeXBlLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBDYW1lcmFUeXBlcyxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgZVJGSURfQmF1ZFJhdGUsXG4gICBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCxcbiAgIERvY1JlYWRlckFjdGlvbixcbiAgIGVQcm9jZXNzR0xDb21tYW5kcyxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSxcbiAgIFNjZW5hcmlvSWRlbnRpZmllcixcbiAgIGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSxcbiAgIGVSRklEX05vdGlmaWNhdGlvbkNvZGVzLFxuICAgZVJGSURfUGFzc3dvcmRfVHlwZSxcbiAgIEJhcmNvZGVSZXN1bHQsXG4gICBlU2lnbk1hbmFnZW1lbnRBY3Rpb24sXG4gICBlQ2hlY2tEaWFnbm9zZSxcbiAgIFJGSUREZWxlZ2F0ZSxcbiAgIFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyxcbiAgIERvY0Zvcm1hdCxcbiAgIGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzLFxuICAgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSxcbiAgIE1SWkZvcm1hdCxcbiAgIEJhcmNvZGVUeXBlLFxuICAgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSxcbiAgIE9ubGluZU1vZGUsXG4gICBlUkZJRF9TREtfUHJvZmlsZXJUeXBlLFxuICAgZGlEb2NUeXBlLFxuICAgSG9sb0FuaW1hdGlvblR5cGUsXG4gICBlUmVxdWVzdENvbW1hbmQsXG4gICBJbWFnZUZvcm1hdCxcbiAgIGVHcmFwaGljRmllbGRUeXBlLFxuICAgQ2FtZXJhTW9kZSxcbiAgIENhcHR1cmVNb2RlLFxuICAgZUNoZWNrUmVzdWx0LFxuICAgZVJGSURfVGVybWluYWxUeXBlLFxuICAgZVJGSURfRGF0YUZpbGVfVHlwZSxcbiAgIGVWaXN1YWxGaWVsZFR5cGUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIExDSUQsXG4gICBEb2NSZWFkZXJGcmFtZSxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIExpbmVDYXAsXG4gICBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayxcbiAgIEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQsXG4gICBBVkNhcHR1cmVEZXZpY2VQb3NpdGlvbixcbiAgIFVJVmlld0NvbnRlbnRNb2RlLFxufVxuXG4vKipcbiAqIEBuYW1lIERvY3VtZW50UmVhZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBEb2N1bWVudCBSZWFkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFJlYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtcmVhZGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBEb2N1bWVudFJlYWRlcjogRG9jdW1lbnRSZWFkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLkRvY3VtZW50UmVhZGVyLnByZXBhcmVEYXRhYmFzZShcIkZ1bGxcIikuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICogICAgICAgIGlmIChtZXNzYWdlID09IFwiZGF0YWJhc2UgcHJlcGFyZWRcIikge1xuICogICAgICAgICAgdGhpcy5Eb2N1bWVudFJlYWRlci5pbml0aWFsaXplUmVhZGVyKGxpY2Vuc2UpLnRoZW4obSA9PiBvbkluaXRpYWxpemVkKCkpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gKiAgICAgICAgfVxuICogICAgICB9KVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRSZWFkZXInLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICAgIHBsdWdpblJlZjogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9Eb2N1bWVudFJlYWRlci1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogIEluaXRpYWxseSBtYWRlIGZvciBjYXBhY2l0b3IgYXMgaXQgaGFzIG5vIGNvbnZlbmllbnQgd2F5IHRvIHJlYWQgYXNzZXRzXG4gICAgICogIEFsbG93cyB5b3UgdG8gaW5pdGlhbGl6ZSBkb2N1bWVudCByZWFkZXIgd2l0aG91dCByZWFkaW5nIGxpY2Vuc2UgeW91cnNlbGYuXG4gICAgICogIExpY2Vuc2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlYWQgZnJvbVxuICAgICAqICBBbmRyb2lkOiBcImFuZHJvaWQvYXBwL3NyYy9tYWluL2Fzc2V0cy9yZWd1bGEubGljZW5zZVwiXG4gICAgICogIGlPUzogXCJpb3MvQXBwL0FwcC9yZWd1bGEubGljZW5zZVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXJBdXRvbWF0aWNhbGx5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIEFQSSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEFQSVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBdmFpbGFibGVTY2VuYXJpb3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNSRklEQXZhaWxhYmxlRm9yVXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIENvcmUgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDb3JlTW9kZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBDb3JlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29yZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YWJhc2UgZXhwb3J0IGRhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIElEXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlSUQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YWJhc2UgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIHRoZSBTREsgaXMgcmVhZHkgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlcklzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlclN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBudW1iZXIgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGNvdW50cmllc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZUNvdW50cmllc051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBudW1iZXIgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGRvY3VtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZURvY3VtZW50c051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBzZWxlY3RlZCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZWxlY3RlZFNjZW5hcmlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIHBhdGggdG8gdGhlIGZvbGRlciBvZiB0aGUgY3VycmVudCBzZXNzaW9uLiBCZWZvcmUgdXNpbmcgdGhpcywgZW5hYmxlIGxvZyBzYXZpbmcuIEVhY2ggbmV3IHNlc3Npb24gcHJvdmlkZXMgYSBkaWZmZXJlbnQgcGF0aFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXNzaW9uTG9nRm9sZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGRvY3VtZW50cyB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEZXNjcmlwdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluZGljYXRlIHRoYW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhlIG5leHQgcGFnZSBpcyBzdGFydGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3U2Vzc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIG9wZW4gdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIHN0YXJ0IGl0cyBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc3RhcnRSRklEUmVhZGVyKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gY2xvc2UgdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIGVuZCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIHRvIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBhZnRlciBzdG9wIHJlYWRpbmcgUkZJRCBvbiBpT1NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BSRklEUmVhZGVyV2l0aEVycm9yTWVzc2FnZShtZXNzYWdlOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbG9zZSBjYW1lcmEgcHJldmlldyBhbmQgc3RvcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BTY2FubmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRlaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0aWFsaXplUmVhZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBhIG1vYmlsZSBhdXRoZW50aWNhdG9yIGlzIGF2YWlsYWJsZSBmb3IgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzQXV0aGVudGljYXRvckF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDb25maWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFJmaWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IGFuIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgbGljZW5zZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMaWNlbnNlRXhwaXJ5RGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IGEgbGlzdCBvZiBjb3VudHJ5IGlkZW50aWZpZXJzIHRoYXQgYXJlIGRlZmluZWQgZm9yIHByb2Nlc3NpbmcgaW4gdGhlIGxpY2Vuc2UuIElmIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgYXJlIG5vIHJlc3RyaWN0aW9ucyBmb3IgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMaWNlbnNlQ291bnRyeUZpbHRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBsaWNlbnNlSXNSZmlkQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgY2FtZXJhIHNlc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q2FtZXJhU2Vzc2lvbklzUGF1c2VkKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byByZW1vdmUgdGhlIGFkZGVkIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlbW92ZURhdGFiYXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjYW5jZWwgZGF0YWJhc2UgdXBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNhbmNlbERCVXBkYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlc2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIFBLRCBjZXJ0aWZpY2F0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2xlYXJQS0RDZXJ0aWZpY2F0ZXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgUkZJRCBjaGlwIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWFkUkZJRCgpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2Vzc2lvblN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgUkZJRCBkZWxlZ2F0ZSBvbiBpT1MgdG8gZWl0aGVyIG51bGwsXG4gICAgICogIGRlbGVnYXRlIHdpdGggb25SZXF1ZXN0UEFDZXJ0aWZpY2F0ZXMgY2FsbGJhY2sgb3Igd2l0aG91dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR9IGRlbGVnYXRlIHVzZSBlbnVtIFJGSUREZWxlZ2F0ZVxuICAgICAqICBOVUxMID0gMFxuICAgICAqICBOT19QQSA9IDFcbiAgICAgKiAgRlVMTCA9IDJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWREZWxlZ2F0ZShkZWxlZ2F0ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZW5hYmxlIENvcmUgbG9nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2dzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRFbmFibGVDb3JlTG9ncyhsb2dzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB0byBhZGQgYSBsaXN0IG9mIFBLRCBjZXJ0aWZpY2F0ZXMgZHVyaW5nIGluaXRpYWxpemF0aW9uIHByb2Nlc3Mgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gQ29yZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIElmIHNldCwgdGhlIGNhbWVyYSBzZXNzaW9uIHdpbGwgYmUgcGF1c2VkIGFzIHNvb24gYXMgdGhlIHJlc3VsdCBpcyByZWNlaXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENhbWVyYVNlc3Npb25Jc1BhdXNlZChwYXVzZWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW8gU2NlbmFyaW9gcyB1bmlxdWUgaWRlbnRpZmllclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlcyhpbWFnZXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSUQoY2FtZXJhSUQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENvbmZpZyhjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2NlbmFyaW8gSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7bmFtZT86IHZhbHVlMSxuYW1lPzogdmFsdWUyLCAuLi59XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTY2VuYXJpbyhzY2VuYXJpbzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAgICBcImxpY2Vuc2VcIjogXCJsaWNlbnNlIGJhc2U2NCBzdHJpbmcobmVjZXNzYXJ5KVwiXG4gICAgICogICAgICBcImN1c3RvbURiXCI6IFwiY3VzdG9tIGRhdGFiYXNlIGJhc2U2NCBzdHJpbmcoYW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcIlxuICAgICAqICAgICAgXCJkYXRhYmFzZVBhdGhcIjogXCJkYXRhYmFzZSBwYXRoKGlPUyBvbmx5LCBpZ25vcmVkIG9uIGFuZHJvaWQpXCJcbiAgICAgKiAgICAgIFwibGljZW5zZVVwZGF0ZVwiOiB0cnVlXG4gICAgICogICAgICBcImRlbGF5ZWROTkxvYWRcIjogZmFsc2VcbiAgICAgKiAgICAgIFwiYmxhY2tMaXN0XCI6IHt9IC8vIGFuZHJvaWQgb25seSwgaWdub3JlZCBvbiBpT1NcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkb3dubG9hZCBhIGRhdGFiYXNlIGZyb20gdGhlIFJlZ3VsYSdzIHNlcnZlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBwcmVwYXJlRGF0YWJhc2UoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZShpbWFnZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIHVzaW5nIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ynl0ZVtdfSBkYXRhIEltYWdlYHMgYnl0ZVtdIHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZURhdGEoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTZXNzaW9uU3RhdHVzKHN0YXR1czogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBQQUNlcnRpZmljYXRlcyB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlUEFDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAgICogIGJpbmFyeURhdGEgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogIHJlc291cmNlVHlwZSAtIG51bWJlclxuICAgICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVUQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFTaWduYXR1cmUgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ynl0ZVtdfSBzaWduYXR1cmUgYnl0ZSBhcnJheVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBU2lnbmF0dXJlKHNpZ25hdHVyZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcGFyc2UgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VydmVyIHdoZW4gdXNpbmcgYW4gZW5jcnlwdGVkIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBqc29uIHJlc3VsdHMgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHBhcnNlQ29yZVJlc3VsdHMoanNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBUaGUgbWV0aG9kIGNhbGwgc2V0cyB0aGUgZ2l2ZW4gVENDUGFyYW1zIHRvIHRoZSBSRklEIHNlc3Npb24uIFRoZSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCB0byBiZSBzZXQgYmVmb3JlIHN0YXJ0aW5nIFJGSUQgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAgICBcInNlcnZpY2VVcmxUQVwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiAgICAgIFwic2VydmljZVVybFBBXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqICAgICAgXCJwZnhDZXJ0VXJsXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqICAgICAgXCJwZnhDZXJ0XCI6IFwiYmFzZTY0IGVuY29kZWQgYmluYXJ5XCJcbiAgICAgKiAgICAgIFwicGZ4UGFzc1BocmFzZVwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRDQ1BhcmFtcyhwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhbiBpbWFnZSB3aXRoIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoT3B0cyhpbWFnZTogYW55LCBvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnl0ZVN0cmluZ1xuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZVZpZGVvRnJhbWUoYnl0ZVN0cmluZzogYW55LCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIGFuZCBvcHRpb25zIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyV2l0aENhbWVyYUlEQW5kT3B0cyhjYW1lcmFJRDogYW55LCBvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogYW55LCBtb2RlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzIHVzaW5nIEltYWdlSW5wdXREYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXREYXRhW119IGltYWdlcyBhcnJheSBvZiBJbWFnZUlucHV0RGF0YSBvYmplY3RzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZWNvZ25pemVJbWFnZXNXaXRoSW1hZ2VJbnB1dHMoaW1hZ2VzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxufSJdfQ==