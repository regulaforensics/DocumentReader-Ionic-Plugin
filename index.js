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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var DocumentReaderScenario = /** @class */ (function () {
    function DocumentReaderScenario() {
    }
    DocumentReaderScenario.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderScenario;
        result.uvTorch = jsonObject["uvTorch"];
        result.seriesProcessMode = jsonObject["seriesProcessMode"];
        result.name = jsonObject["name"];
        result.caption = jsonObject["caption"];
        result.description = jsonObject["description"];
        return result;
    };
    return DocumentReaderScenario;
}());
export { DocumentReaderScenario };
var DocumentReaderScenarioFull = /** @class */ (function () {
    function DocumentReaderScenarioFull() {
    }
    DocumentReaderScenarioFull.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderScenarioFull;
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
    return DocumentReaderScenarioFull;
}());
export { DocumentReaderScenarioFull };
var FaceMetaData = /** @class */ (function () {
    function FaceMetaData() {
    }
    FaceMetaData.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderGraphicResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderGraphicField.fromJson(jsonObject["fields"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
                result.values.push(DocumentReaderValue.fromJson(jsonObject["values"][i]));
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderTextResult;
        result.status = jsonObject["status"];
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderTextField.fromJson(jsonObject["fields"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new ImageQualityGroup;
        result.count = jsonObject["count"];
        result.result = jsonObject["result"];
        result.imageQualityList = [];
        if (jsonObject["imageQualityList"] != null) {
            for (var i in jsonObject["imageQualityList"]) {
                result.imageQualityList.push(ImageQuality.fromJson(jsonObject["imageQualityList"][i]));
            }
        }
        return result;
    };
    return ImageQualityGroup;
}());
export { ImageQualityGroup };
var DocumentReaderDocumentType = /** @class */ (function () {
    function DocumentReaderDocumentType() {
    }
    DocumentReaderDocumentType.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderNotification;
        result.code = jsonObject["code"];
        result.number = jsonObject["number"];
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
                result.files.push(File.fromJson(jsonObject["files"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new Authority;
        result.data = jsonObject["data"];
        result.friendlyName = Value.fromJson(jsonObject["friendlyName"]);
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                result.attributes.push(Attribute.fromJson(jsonObject["attributes"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
                result.extensions.push(Extension.fromJson(jsonObject["extensions"][i]));
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
        if (jsonObject == null)
            return null;
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
                result.signedAttributes.push(Extension.fromJson(jsonObject["signedAttributes"][i]));
            }
        }
        result.certificateChain = [];
        if (jsonObject["certificateChain"] != null) {
            for (var i in jsonObject["certificateChain"]) {
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]));
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
        if (jsonObject == null)
            return null;
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
                result.signerInfos.push(SignerInfo.fromJson(jsonObject["signerInfos"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new RFIDSessionData;
        result.totalBytesReceived = jsonObject["totalBytesReceived"];
        result.totalBytesSent = jsonObject["totalBytesSent"];
        result.status = jsonObject["status"];
        result.extLeSupport = jsonObject["extLeSupport"];
        result.processTime = jsonObject["processTime"];
        result.cardProperties = CardProperties.fromJson(jsonObject["cardProperties"]);
        result.sessionDataStatus = RFIDSessionDataStatus.fromJson(jsonObject["sessionDataStatus"]);
        result.accessControls = [];
        if (jsonObject["accessControls"] != null) {
            for (var i in jsonObject["accessControls"]) {
                result.accessControls.push(AccessControlProcedureType.fromJson(jsonObject["accessControls"][i]));
            }
        }
        result.applications = [];
        if (jsonObject["applications"] != null) {
            for (var i in jsonObject["applications"]) {
                result.applications.push(Application.fromJson(jsonObject["applications"][i]));
            }
        }
        result.securityObjects = [];
        if (jsonObject["securityObjects"] != null) {
            for (var i in jsonObject["securityObjects"]) {
                result.securityObjects.push(SecurityObject.fromJson(jsonObject["securityObjects"][i]));
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderAuthenticityCheck;
        result.type = jsonObject["type"];
        result.status = jsonObject["status"];
        result.typeName = jsonObject["typeName"];
        result.pageIndex = jsonObject["pageIndex"];
        result.elements = [];
        if (jsonObject["elements"] != null) {
            for (var i in jsonObject["elements"]) {
                result.elements.push(DocumentReaderAuthenticityElement.fromJson(jsonObject["elements"][i]));
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
        if (jsonObject == null)
            return null;
        var result = new PDF417Info;
        result.errorLevel = jsonObject["errorLevel"];
        result.columns = jsonObject["columns"];
        result.rows = jsonObject["rows"];
        return result;
    };
    return PDF417Info;
}());
export { PDF417Info };
var RFIDSessionDataStatus = /** @class */ (function () {
    function RFIDSessionDataStatus() {
    }
    RFIDSessionDataStatus.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new RFIDSessionDataStatus;
        result.AA = jsonObject["AA"];
        result.BAC = jsonObject["BAC"];
        result.CA = jsonObject["CA"];
        result.PA = jsonObject["PA"];
        result.PACE = jsonObject["PACE"];
        result.TA = jsonObject["TA"];
        result.overallStatus = jsonObject["overallStatus"];
        return result;
    };
    return RFIDSessionDataStatus;
}());
export { RFIDSessionDataStatus };
var DocumentReaderBarcodeResult = /** @class */ (function () {
    function DocumentReaderBarcodeResult() {
    }
    DocumentReaderBarcodeResult.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderBarcodeResult;
        result.fields = [];
        if (jsonObject["fields"] != null) {
            for (var i in jsonObject["fields"]) {
                result.fields.push(DocumentReaderBarcodeField.fromJson(jsonObject["fields"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderAuthenticityResult;
        result.status = jsonObject["status"];
        result.checks = [];
        if (jsonObject["checks"] != null) {
            for (var i in jsonObject["checks"]) {
                result.checks.push(DocumentReaderAuthenticityCheck.fromJson(jsonObject["checks"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderCompletion;
        result.action = jsonObject["action"];
        result.results = DocumentReaderResults.fromJson(jsonObject["results"]);
        result.error = Throwable.fromJson(jsonObject["error"]);
        return result;
    };
    return DocumentReaderCompletion;
}());
export { DocumentReaderCompletion };
var Throwable = /** @class */ (function () {
    function Throwable() {
    }
    Throwable.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Throwable;
        result.localizedMessage = jsonObject["localizedMessage"];
        result.message = jsonObject["message"];
        result.string = jsonObject["string"];
        result.stackTrace = [];
        if (jsonObject["stackTrace"] != null) {
            for (var i in jsonObject["stackTrace"]) {
                result.stackTrace.push(StackTraceElement.fromJson(jsonObject["stackTrace"][i]));
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
        if (jsonObject == null)
            return null;
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
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.prototype.getTextFieldValueByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.lcid, lcid = _b === void 0 ? 0 : _b, _c = _a.source, source = _c === void 0 ? -1 : _c, _d = _a.original, original = _d === void 0 ? false : _d;
        if (this.textResult == null) {
            return null;
        }
        var field = this.findByTypeAndLcid(fieldType, lcid);
        if (field == null) {
            return null;
        }
        var value = this.findBySource(field, source);
        if (value == null) {
            return null;
        }
        return original ? value.originalValue : value.value;
    };
    DocumentReaderResults.prototype.getTextFieldStatusByType = function (fieldType, lcid) {
        if (this.textResult == null) {
            return 0;
        }
        var field = this.findByTypeAndLcid(fieldType, lcid);
        return field != null ? field.status : 0;
    };
    DocumentReaderResults.prototype.getGraphicFieldImageByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.source, source = _b === void 0 ? -1 : _b, _c = _a.light, light = _c === void 0 ? -1 : _c, _d = _a.pageIndex, pageIndex = _d === void 0 ? -1 : _d;
        if (this.graphicResult == null) {
            return null;
        }
        var foundFields = [];
        for (var _i = 0, _e = this.graphicResult.fields; _i < _e.length; _i++) {
            var field = _e[_i];
            if (field.fieldType === fieldType) {
                foundFields.push(field);
            }
        }
        if (source !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].sourceType !== source) {
                    foundFields.splice(i, 1);
                }
            }
        }
        if (light !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].lightType !== light) {
                    foundFields.splice(i, 1);
                }
            }
        }
        if (pageIndex !== -1) {
            for (var i = 0; i < foundFields.length; i++) {
                if (foundFields[i].pageIndex !== pageIndex) {
                    foundFields.splice(i, 1);
                }
            }
        }
        return foundFields.length > 0 ? foundFields[0].value : null;
    };
    DocumentReaderResults.prototype.getQualityResult = function (_a) {
        var imageQualityCheckType = _a.imageQualityCheckType, _b = _a.securityFeature, securityFeature = _b === void 0 ? -1 : _b;
        var resultSum = 2;
        if (this.imageQuality == null) {
            return resultSum;
        }
        for (var _i = 0, _c = this.imageQuality.imageQualityList; _i < _c.length; _i++) {
            var field = _c[_i];
            if (field.type === imageQualityCheckType) {
                if (securityFeature === -1) {
                    if (field.result === 0) {
                        resultSum = 0;
                        break;
                    }
                    if (field.result === 1) {
                        resultSum = field.result;
                    }
                }
                else if (field.featureType === securityFeature) {
                    resultSum = field.result;
                    break;
                }
            }
        }
        return resultSum;
    };
    DocumentReaderResults.prototype.findByTypeAndLcid = function (type, lcid) {
        var field;
        var foundFields = [];
        for (var _i = 0, _a = this.textResult.fields; _i < _a.length; _i++) {
            field = _a[_i];
            if (field.fieldType === type) {
                foundFields.push(field);
            }
        }
        if (foundFields.length <= 0) {
            return null;
        }
        var foundField = null;
        for (var _b = 0, foundFields_1 = foundFields; _b < foundFields_1.length; _b++) {
            field = foundFields_1[_b];
            if (lcid === 0) {
                foundField = field;
                if (field.lcid === lcid) {
                    break;
                }
            }
            else if (field.lcid === lcid) {
                return field;
            }
        }
        return foundField;
    };
    DocumentReaderResults.prototype.findBySource = function (field, sourceType) {
        var value;
        if (sourceType === -1) {
            var mrzVal = this.findBySource(field, 3);
            if (mrzVal != null) {
                return mrzVal;
            }
            value = this.findBySource(field, 18);
            if (value != null) {
                return value;
            }
            var visualVal = this.findBySource(field, 17);
            return visualVal != null ? visualVal : null;
        }
        for (var _i = 0, _a = field.values; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.sourceType === sourceType) {
                return item;
            }
        }
        return null;
    };
    DocumentReaderResults.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderResults;
        result.chipPage = jsonObject["chipPage"];
        result.overallResult = jsonObject["overallResult"];
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
                result.documentPosition.push(ElementPosition.fromJson(jsonObject["documentPosition"][i]));
            }
        }
        result.barcodePosition = [];
        if (jsonObject["barcodePosition"] != null) {
            for (var i in jsonObject["barcodePosition"]) {
                result.barcodePosition.push(ElementPosition.fromJson(jsonObject["barcodePosition"][i]));
            }
        }
        result.mrzPosition = [];
        if (jsonObject["mrzPosition"] != null) {
            for (var i in jsonObject["mrzPosition"]) {
                result.mrzPosition.push(ElementPosition.fromJson(jsonObject["mrzPosition"][i]));
            }
        }
        result.imageQuality = [];
        if (jsonObject["imageQuality"] != null) {
            for (var i in jsonObject["imageQuality"]) {
                result.imageQuality.push(ImageQualityGroup.fromJson(jsonObject["imageQuality"][i]));
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
                result.documentType.push(DocumentReaderDocumentType.fromJson(jsonObject["documentType"][i]));
            }
        }
        return result;
    };
    return DocumentReaderResults;
}());
export { DocumentReaderResults };
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
export var CameraMode = {
    AUTO: 0,
    CAMERA1: 1,
    CAMERA2: 2,
};
export var CameraTypes = {
    FRONT: "front",
    BACK: "back",
};
export var CaptureMode = {
    AUTO: 0,
    CAPTURE_VIDEO: 1,
    CAPTURE_FRAME: 2,
};
export var diDocType = {
    dtNotDefined: 0,
    dtPassport: 11,
    dtIdentityCard: 12,
    dtDiplomaticPassport: 13,
    dtServicePassport: 14,
    dtSeamansIdentityDocument: 15,
    dtIdentityCardforResidence: 16,
    dtTraveldocument: 17,
    dtOther: 99,
    dtVisaID2: 29,
    dtVisaID3: 30,
    dtRegistrationCertificate: 31,
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
    dtCommercialDrivingLicenseIndtuctionalPermit: 39,
    dtCommercialDrivingLicenseUnder18: 40,
    dtCommercialDrivingLicenseUnder21: 41,
    dtCommercialIndtuctionPermit: 42,
    dtCommercialNewPermit: 43,
    dtConcealedCarryLicense: 44,
    dtConcealedFirearmPermit: 45,
    dtConditionalDrivingLicense: 46,
    dtDepartmentOfVeteransAffairsIdentityCard: 47,
    dtDiplomaticDrivingLicense: 48,
    dtDrivingLicense: 49,
    dtDrivingLicenseIndtuctionalPermit: 50,
    dtDrivingLicenseIndtuctionalPermitUnder18: 51,
    dtDrivingLicenseIndtuctionalPermitUnder21: 52,
    dtDrivingLicenseLearnersPermit: 53,
    dtDrivingLicenseLearnersPermitUnder18: 54,
    dtDrivingLicenseLearnersPermitUnder21: 55,
    dtDrivingLicenseNovice: 56,
    dtDrivingLicenseNoviceUnder18: 57,
    dtDrivingLicenseNoviceUnder21: 58,
    dtDrivingLicenseRegisteredOffender: 59,
    dtDrivingLicenseRedtictedUnder18: 60,
    dtDrivingLicenseRedtictedUnder21: 61,
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
    dtGraduatedIndtuctionPermitUnder18: 86,
    dtGraduatedIndtuctionPermitUnder21: 87,
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
    dtIndtuctionPermit: 102,
    dtIndtuctionPermitUnder18: 103,
    dtIndtuctionPermitUnder21: 104,
    dtInterimDrivingLicense: 105,
    dtInterimIdentityCard: 106,
    dtIntermediateDrivingLicense: 107,
    dtIntermediateDrivingLicenseUnder18: 108,
    dtIntermediateDrivingLicenseUnder21: 109,
    dtJuniorDrivingLicense: 110,
    dtLearnerIndtuctionalPermit: 111,
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
    dtRedtictedCommercialDrivingLicense: 148,
    dtRedtictedDrivingLicense: 149,
    dtRedtictedPermit: 150,
    dtSeasonalPermit: 151,
    dtSeasonalResidentIdentityCard: 152,
    dtSeniorCitizenIdentityCard: 153,
    dtSexOffender: 154,
    dtSocialSecurityCard: 155,
    dtTemporaryDrivingLicense: 156,
    dtTemporaryDrivingLicenseUnder18: 157,
    dtTemporaryDrivingLicenseUnder21: 158,
    dtTemporaryIdentityCard: 159,
    dtTemporaryIndtuctionPermitIdentityCard: 160,
    dtTemporaryIndtuctionPermitIdentityCardUnder18: 161,
    dtTemporaryIndtuctionPermitIdentityCardUnder21: 162,
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
    dtAlienRegidtationCard: 185,
    dtAPEHCard: 186,
    dtCoupontoDrivingLicense: 187,
    dtCrewMemberCertificate: 188,
    dtDocumentForReturn: 189,
    dtECard: 190,
    dtEmploymentCard: 191,
    dtHKSARImmigrationForm: 192,
    dtImmigrantcard: 193,
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
    dtPermissiontotheLocalBorderTraffic: 205,
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
};
export var DocFormat = {
    ID1: 0,
    ID2: 1,
    ID3: 2,
    ID3_x2: 5,
    CUSTOM: 1000,
    FLEXIBLE: 1002,
};
export var DocReaderAction = {
    COMPLETE: 1,
    PROCESS: 0,
    CANCEL: 2,
    ERROR: 3,
    NOTIFICATION: 5,
    PROCESS_WHITE_UV_IMAGES: 6,
    MORE_PAGES_AVAILABLE: 8,
};
export var DocReaderFrame = {
    MAX: "max",
    SCENARIO_DEFAULT: "id1",
    NONE: "none",
    DOCUMENT: "document",
};
export var DocReaderOrientation = {
    ALL: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
    LANDSCAPE_LEFT: 3,
    LANDSCAPE_RIGHT: 4,
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
    UV_DULL_PAPER_MRZ: 50,
    FALSE_LUMINISCENCE_IN_MRZ: 51,
    UV_DULL_PAPER_PHOTO: 52,
    UV_DULL_PAPER_BLANK: 53,
    UV_DULL_PAPER_ERROR: 54,
    FALSE_LUMINISCENCE_IN_BLANK: 55,
    BAD_AREA_IN_AXIAL: 60,
    FALSE_IPI_PARAMETERS: 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: 80,
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
    PPORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: 156,
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: 160,
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: 161,
    LAST_DIAGNOSE_VALUE: 162,
};
export var eCheckResult = {
    CH_CHECK_ERROR: 0,
    CH_CHECK_OK: 1,
    CH_CHECK_WAS_NOT_DONE: 2,
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
export var eImageQualityCheckType = {
    IQC_IMAGE_GLARES: 0,
    IQC_IMAGE_FOCUS: 1,
    IQC_IMAGE_RESOLUTION: 2,
    IQC_IMAGE_COLORNESS: 3,
    IQC_PERSPECTIVE: 4,
    IQC_BOUNDS: 5,
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
};
export var eRequestCommand = {
    eReqCmd_RFid_SendData: 100,
    eReqCmd_RFid_Notify: 101,
    eReqCmd_RFid_GetDataForScenario: 102,
    eReqCmd_Torch_GetUVFoto: 200,
    eReqCmd_InternetSend: 300,
    eReqCmd_GetGuid: 400,
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
export var eRFID_AuthenticationProcedureType = {
    aptUndefined: 0,
    aptStandard: 1,
    aptAdvanced: 2,
    aptGeneral: 3,
};
export var eRFID_BaudRate = {
    rfbr_106: 1,
    rfbr_212: 2,
    rfbr_424: 4,
    rfbr_848: 8,
};
export var eRFID_CertificateType = {
    CT_UNDEFINED: 0,
    CT_CSCA: 1,
    CT_CSCA_LINK: 2,
    CT_DS: 3,
    CT_MLS: 4,
    CT_DEV_LS: 5,
    CT_DEF_LS: 6,
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
export var eRFID_NotificationAndErrorCodes = {
    RFID_NOTIFICATION_ERROR: 65536,
    RFID_NOTIFICATION_DOCUMENT_READY: 65537,
    RFID_NOTIFICATION_READ_PROTOCOL4: 65539,
    RFID_NOTIFICATION_READ_PROTOCOL3: 65546,
    RFID_NOTIFICATION_PROGRESS: 65547,
    RFID_NOTIFICATION_TA_STEP: 65550,
    RFID_NOTIFICATION_SM_REQUIRED: 65551,
    RFID_NOTIFICATION_ISO_ERROR: 69632,
    RFID_NOTIFICATION_PA_REQUEST: 77824,
    RFID_NOTIFICATION_SM_ESTABLISHED: 81935,
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: 131072,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: 131073,
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: 131074,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: 131075,
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: 131076,
    RFID_NOTIFICATION_PCSC_BYTES_SENT: 131077,
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: 131078,
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: 131079,
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: 131080,
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: 131088,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: 131089,
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: 131090,
    RFID_NOTIFICATION_SCENARIO: 131104,
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: 196608,
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: 262144,
    RFID_NOTIFICATION_PCSC_END_OF_FILE: 327680,
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: 393216,
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: 458752,
    RFID_NOTIFICATION_AC_PROCEDURE_START: 524288,
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: 589824,
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: 655360,
    RFID_NOTIFICATION_PA_FILE_CHECK: 720896,
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: 786432,
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: 851968,
    RFID_NOTIFICATION_RI_SECTOR_ID: 917504,
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: 983040,
    RFID_ERROR_NO_ERROR: 1,
    RFID_ERROR_ALREADY_DONE: 2,
    RFID_LAYER6_FILE_EOF1: -2147458430,
    RFID_LAYER6_PWD_DEACTIVATED: -2147458429,
    RFID_LAYER6_PWD_BLOCKED: -2147458112,
    RFID_LAYER6_PWD_SUSPENDED: -2147458111,
    RFID_LAYER6_PWD_BLOCKED_2: -2147456637,
    RFID_LAYER6_PWD_DEACTIVATED_2: -2147456636,
    RFID_LAYER6_PWD_SUSPENDED_2: -2147456635,
    RFID_LAYER6_MSE_SET_AT_FAILURE: -2046819578,
    RFID_LAYER6_INCORRECT_PARAMS: -2147456384,
    RFID_LAYER6_FILE_NOT_FOUND: -2147456382,
    RFID_LAYER6_NO_REFERENCE_DATA: -2147456376,
    RFID_LAYER6_FILE_EOF2: -2147456256,
    RFID_Error_GraphManager: -2147418112,
    RFID_ERROR_NO_CHIP_DETECTED: -2147418111,
    RFID_ERROR_NOT_AVAILABLE: -2147418110,
    RFID_ERROR_INVALID_PARAMETER: -2147418108,
    RFID_ERROR_NOT_INITIALIZED: -2147418107,
    RFID_Error_NotEnoughMemory: -2147418106,
    RFID_ERROR_INVALID_DIRECTORY: -2147418104,
    RFID_ERROR_UNKNOWN_COMMAND: -2147418103,
    RFID_ERROR_FILE_IO_ERROR: -2147418102,
    RFID_ERROR_BUSY: -2147418101,
    RFID_ERROR_OLD_FIRMWARE: -2147418100,
    RFID_ERROR_PCSC_FAILED: -2147352576,
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: -2147352575,
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: -2147352574,
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: -2147352573,
    RFID_ERROR_PCSC_OPERATION_CANCELLED: -2147352572,
    RFID_ERROR_PCSC_CARD_IS_BUSY: -2147352571,
    RFID_ERROR_PCSC_FAILED_S_CARD: -2147352570,
    RFID_ERROR_PCSC_EXT_LE_FAILED: -2147352560,
    RFID_LAYER6_PWD_FAILED: -2146409536,
    RFID_ERROR_NOT_PERFORMED: -2097152000,
    RFID_ERROR_SESSION_IS_CLOSED: -2097151999,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2097151998,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: -2097151984,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2097151983,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: -2097151982,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: -2097151981,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED: -2097151980,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: -2097151979,
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: -2097151978,
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: -2097151977,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: -2097151976,
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: -2097151975,
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: -2097151974,
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: -2097151973,
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: -2097151972,
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: -2097151968,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: -2097151967,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: -2097151966,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: -2097151965,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: -2097151964,
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: -2097151963,
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: -2097151962,
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: -2097151961,
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: -2097151960,
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: -2097151959,
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: -2097151958,
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: -2097151952,
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: -2097151951,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: -2097151936,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: -2097151935,
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: -2097151934,
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: -2097151920,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: -2097151919,
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: -2097151918,
    RFID_ERROR_SESSION_INCORRECT_DATA: -2097151904,
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: -2097086464,
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: -2097020928,
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: -2096955392,
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: -2096889856,
    RFID_ERROR_SESSION_FILE_WRONG_TAG: -2096824320,
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: -2096758784,
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: -2096693248,
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: -2096627712,
    RFID_LAYER6_SECURITY_MANAGER: -2046820352,
    RFID_LAYER6_APP_SELECTION_FAILURE: -2046820351,
    RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046820096,
    RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046820095,
    RFID_LAYER6_MUTUAL_AUTH_FAILURE: -2046820094,
    RFID_LAYER6_SM_DO8E_MISSING: -2046819840,
    RFID_LAYER6_SM_DO87_MISSING: -2046819839,
    RFID_LAYER6_SM_DO99_MISSING: -2046819838,
    RFID_LAYER6_SM_MAC_INCORRECT: -2046819837,
    RFID_LAYER6_SM_DO87_INCORRECT: -2046819836,
    RFID_LAYER6_NON_TLV_RESPONSE_DATA: -2046819584,
    RFID_LAYER6_WRONG_RND_ICC_LENGTH: -2046819583,
    RFID_LAYER6_INT_AUTH_FAILURE: -2046819582,
    RFID_LAYER6_MSE_SET_KAT_FAILURE: -2046819581,
    RFID_LAYER6_MSE_SET_DST_FAILURE: -2046819580,
    RFID_LAYER6_PSO_CERTIFICATE_FAILURE: -2046819579,
    RFID_LAYER6_GET_CHALLENGE_FAILURE: -2046819577,
    RFID_LAYER6_EXT_AUTH_FAILURE: -2046819576,
    RFID_LAYER6_GENERAL_AUTH_FAILURE: -2046819575,
    RFID_ERROR_FAILED: -1,
    getTranslation: function (value) {
        switch (value) {
            case this.RFID_ERROR_NO_ERROR:
                return "OK";
            case -2147483647:
                return "Error - ASN: Incorrect data";
            case -2147483646:
                return "Error - ASN: Not enough data";
            case -2147483645:
                return "Error - ASN: Contents unexpected data";
            case -2147483640:
                return "Error - ASN Signed data: Incorrect data";
            case -2147483639:
                return "Error - ASN Signed data: Encap contents incorrect data";
            case -2147483638:
                return "Error - ASN Signed data: Version incorrect data";
            case -2147483631:
                return "Error - ASN Signed data: Digest algorithms incorrect data";
            case -2147483629:
                return "Error - ASN LDS object: Incorrect data";
            case -2147483628:
                return "Error - ASN LDS object: Version incorrect data";
            case -2147483627:
                return "Error - ASN LDS object: Digest algorithm incorrect data";
            case -2147483626:
                return "Error - ASN LDS object: DG hashes incorrect data";
            case -2147483630:
                return "Error - ASN LDS object: Version info incorrect data";
            case -2147483625:
                return "Error - ASN Certificate: Incorrect data";
            case -2147483624:
                return "Error - ASN Certificate: Version incorrect data";
            case -2147483623:
                return "Error - ASN Certificate: SN incorrect data";
            case -2147483622:
                return "Error - ASN Certificate: Signature incorrect data";
            case -2147483621:
                return "Error - ASN Certificate: Issuer incorrect data";
            case -2147483620:
                return "Error - ASN Certificate: Validity incorrect data";
            case -2147483619:
                return "Error - ASN Certificate: Subject incorrect data";
            case -2147483618:
                return "Error - ASN Certificate: Subject PK incorrect data";
            case -2147483617:
                return "Error - ASN Certificate: Extensions incorrect data";
            case -2147483616:
                return "Error - ASN Signer info: Incorrect data";
            case -2147483615:
                return "Error - ASN Signer info: Version incorrect data";
            case -2147483614:
                return "Error - ASN Signer info: SID incorrect data";
            case -2147483613:
                return "Error - ASN Signer info: Digest algorithms incorrect data";
            case -2147483612:
                return "Error - ASN Signer info: Signed attributes incorrect data";
            case -2147483611:
                return "Error - ASN Signer info: Sign algorithms incorrect data";
            case -2147483610:
                return "Error - ASN Signer info: Signature incorrect data";
            case -2147483609:
                return "Error - ASN Signer info: Unsigned attributes incorrect data";
            case -2147483600:
                return "Error - ICAO LDS object: Unsupported digest algorithm";
            case -2147483599:
                return "Error - ICAO Signed data: Signer info empty";
            case -2147483598:
                return "Error - ICAO Signer info: Unsupported digest algorithm";
            case -2147483597:
                return "Error - ICAO Signer info: Unsupported signature algorithm";
            case -2147483596:
                return "Error - ICAO Signer info: Message digest error";
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed";
            case -2147483595:
                return "Error - Auth: Signer info cannot find certificate";
            case -2147483568:
                return "Error - Auth: Error";
            case -2147483567:
                return "Error - Auth: Unsupported signature algorithm";
            case -2147483566:
                return "Error - Auth: Unsupported public key algorithm";
            case -2147483565:
                return "Error - Auth: Messed algorithms";
            case -2147483564:
                return "Error - Auth: Public key data invalid";
            case -2147483563:
                return "Error - Auth: Algorithm parameters data invalid";
            case -2147483562:
                return "Error - Auth: Signature data invalid";
            case -2147483561:
                return "Error - Auth: Unsupported digest algorithm";
            case -2147483560:
                return "Error - Auth: Signature data incorrect";
            case -2147483559:
                return "Error - Auth: Algorithm parameters not defined";
            case -2147483558:
                return "Error - Auth: Signature check failed";
            case -2147483536:
                return "Error - DG: Wrong Tag";
            case -2130706400:
                return "Error - PACE: Info Not Available";
            case -2130706399:
                return "Error - PACE: Symmetric Cypher Cannot Initialize";
            case -2130706398:
                return "Error - PACE: Key Agreement Cannot Initialize";
            case -2130706397:
                return "Error - PACE: Ephemeral Keys Cannot Create";
            case -2130706396:
                return "Error - PACE: Mapping Cannot Decode Nonce";
            case -2130706395:
                return "Error - PACE: Shared Secret Cannot Create";
            case -2130706394:
                return "Error - PACE: Domain Params Unsupported Format";
            case -2130706393:
                return "Error - PACE: Ephemeral Keys Incorrect";
            case -2130706392:
                return "Error - PACE: Mapping Ephemeral Keys Incorrect";
            case -2130706391:
                return "Error - PACE: Mapping Cannot Perform";
            case -2130706390:
                return "Error - PACE: Non-Matching Auth Tokens";
            case -2130706384:
                return "Error - CA: Cannot Find Public Key";
            case -2130706383:
                return "Error - CA: Cannot Find Info";
            case -2130706382:
                return "Error - CA: Incorrect Version";
            case -2130706381:
                return "Error - CA: Cannot Find Domain Parameters";
            case -2130706380:
                return "Error - CA: Key Agreement Cannot Initialize";
            case -2130706379:
                return "Error - CA: Public Key Unsupported Algorithm";
            case -2130706378:
                return "Error - CA: Ephemeral Keys Cannot Create";
            case -2130706377:
                return "Error - CA: Shared Secret Cannot Create";
            case -2130706376:
                return "Error - CA: Non-Matching Auth Tokens";
            case -2130706368:
                return "Error - TA: Incorrect Version";
            case -2130706367:
                return "Error - TA: Cannot Build Certificate Chain";
            case -2130706366:
                return "Error - TA: Cannot Find IS Private Key";
            case -2130706365:
                return "Error - TA: Public Key Unsupported Algorithm";
            case -2130706364:
                return "Error - TA: Signature Building Error";
            case -2130706363:
                return "Error - TA: Invalid Key Algorithm Parameters";
            case -2130706352:
                return "Error - AA: Public Key Unsupported Algorithm";
            case -2130706351:
                return "Error - AA: Public Key Incorrect Data";
            case -2130706350:
                return "Error - AA: Public Key Incorrect Parameters";
            case -2130706349:
                return "Error - AA: Public Key Undefined Parameters";
            case -2130706348:
                return "Error - AA: Signature Incorrect Data";
            case -2130706347:
                return "Error - AA: Unsupported recovery scheme";
            case -2130706346:
                return "Error - AA: Incorrect Trailer";
            case -2130706345:
                return "Error - AA: Unsupported Digest Algorithm";
            case -2130706320:
                return "Error - RI: Sector Key Cannot Find";
            case -2130706319:
                return "Error - RI: Sector Key Incorrect Data";
            case -2130706318:
                return "Error - RI: Sector Key Incomplete Data";
            case -2130706336:
                return "Error - CV Certificate: Missing mandatory data PK";
            case -2130706334:
                return "Error - CV Certificate: Public key unsupported";
            case -2130706333:
                return "Error - CV Certificate: CHAT unsupported terminal type";
            case -2130706332:
                return "Error - CV Certificate: Private key unsupported";
            case -2130706331:
                return "Error - CV Certificate: Private key invalid params";
            case -2130706080:
                return "Error - CV Certificate: Incorrect data";
            case -2130706079:
                return "Error - CV Certificate: CPI incorrect data";
            case -2130706078:
                return "Error - CV Certificate: CAR incorrect data";
            case -2130706077:
                return "Error - CV Certificate: Public key incorrect data";
            case -2130706076:
                return "Error - CV Certificate: CHR incorrect data";
            case -2130706075:
                return "Error - CV Certificate: CHAT incorrect data";
            case -2130706074:
                return "Error - CV Certificate: Valid from incorrect data";
            case -2130706073:
                return "Error - CV Certificate: Valid to incorrect data";
            case -2130706072:
                return "Error - CV Certificate: Extensions incorrect data";
            case -2130706071:
                return "Error - CV Certificate: Private key incorrect data";
            case -2130706070:
                return "Error - CV Certificate: Private key missing";
            case -1879048191:
                return "Notification - ASN certificate: Incorrect version";
            case -1879048190:
                return "Notification - ASN certificate: Non-matching signature algorithm";
            case -1879048189:
                return "Notification - ASN certificate: Incorrect time coding";
            case -1879048188:
                return "Notification - ASN certificate: Incorrect use of generalized time";
            case -1879048187:
                return "Notification - ASN certificate: Empty issuer";
            case -1879048186:
                return "Notification - ASN certificate: Empty subject";
            case -1879048184:
                return "Notification - ASN certificate: Unsupported critical extension";
            case -1879048178:
                return "Notification - ASN certificate: Forced default CSCA role";
            case -1879048177:
                return "Notification - ASN certificate: Forced Default DS role";
            case -1879048176:
                return "Notification - ASN certificate: Incorrect issuer subject DS";
            case -1879048169:
                return "Notification - ASN certificate: Duplicating extensions";
            case -1879047680:
                return "Notification - ICAO certificate: Version missed";
            case -1879047679:
                return "Notification - ICAO certificate: Version incorrect";
            case -1879047678:
                return "Notification - ICAO certificate: Issuer country missed";
            case -1879047677:
                return "Notification - ICAO certificate: Issuer common name missed";
            case -1879047676:
                return "Notification - ICAO certificate: Issuer country non-compliant";
            case -1879047675:
                return "Notification - ICAO certificate: Subject country missed";
            case -1879047674:
                return "Notification - ICAO certificate: Subject common name missed";
            case -1879047673:
                return "Notification - ICAO certificate: Subject country non-compliant";
            case -1879047672:
                return "Notification - ICAO certificate: Using non-compliant data";
            case -1879047671:
                return "Notification - ICAO certificate: Unsupported signature algorithm";
            case -1879047670:
                return "Notification - ICAO certificate: Unsupported public key algorithm";
            case -1879047669:
                return "Notification - ICAO certificate: Missed extensions";
            case -1879047668:
                return "Notification - ICAO certificate: Validity";
            case -1879047667:
                return "Notification - ICAO certificate extension: Using non-compliant data";
            case -1879047666:
                return "Notification - ICAO certificate extension: Key usage missed";
            case -1879047665:
                return "Notification - ICAO certificate extension: Key usage not critical";
            case -1879047664:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data";
            case -1879047663:
                return "Notification - ICAO certificate extension: Basic constraints missed";
            case -1879047662:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 1";
            case -1879047661:
                return "Notification - ICAO certificate extension: Basic constraints incorrect usage 2";
            case -1879047660:
                return "Notification - ICAO certificate extension: Basic constraints not critical";
            case -1879047659:
                return "Notification - ICAO certificate extension: Basic constraints incorrect data";
            case -1879047658:
                return "Notification - ICAO certificate extension: Basic constraints path LenC missed";
            case -1879047657:
                return "Notification - ICAO certificate extension: Basic constraints path LenC incorrect";
            case -1879047656:
                return "Notification - ICAO certificate extension: Ext key usage not critical";
            case -1879047655:
                return "Notification - ICAO certificate extension: Ext key usage incorrect usage";
            case -1879047654:
                return "Notification - ICAO certificate extension: Ext key usage incorrect data";
            case -1879047653:
                return "Notification - ICAO certificate extension Auth key: ID missed";
            case -1879047652:
                return "Notification - ICAO certificate extension Auth key: Incorrect data";
            case -1879047651:
                return "Notification - ICAO certificate extension Auth key: Key ID missed";
            case -1879047650:
                return "Notification - ICAO certificate extension: Subject key ID missed";
            case -1879047649:
                return "Notification - ICAO certificate extension: Subject key ID incorrect data";
            case -1879047648:
                return "Notification - ICAO certificate extension: Private key UP missed";
            case -1879047647:
                return "Notification - ICAO certificate extension: Private key UP incorrect data";
            case -1879047646:
                return "Notification - ICAO certificate extension: Private key UP empty";
            case -1879047645:
                return "Notification - ICAO certificate extension: Subject alt name missed";
            case -1879047644:
                return "Notification - ICAO certificate extension: Subject alt name incorrect data";
            case -1879047643:
                return "Notification - ICAO certificate extension: Subject alt name empty";
            case -1879047642:
                return "Notification - ICAO certificate extension: Subject alt name non-compliant";
            case -1879047639:
                return "Notification - ICAO certificate extension: Subject alt name DN empty";
            case -1879047638:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect";
            case -1879047637:
                return "Notification - ICAO certificate extension: Subject alt name DN non-compliant";
            case -1879047636:
                return "Notification - ICAO certificate extension: Issuer alt name missed";
            case -1879047635:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data";
            case -1879047634:
                return "Notification - ICAO certificate extension: Issuer alt name empty";
            case -1879047633:
                return "Notification - ICAO certificate extension: Issuer alt name non-compliant";
            case -1879047630:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty";
            case -1879047629:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect";
            case -1879047628:
                return "Notification - ICAO certificate extension: Issuer alt name DN non-compliant";
            case -1879047627:
                return "Notification - ICAO certificate extension Doc type list: Missed";
            case -1879047626:
                return "Notification - ICAO certificate extension Doc type list: Incorrect data";
            case -1879047625:
                return "Notification - ICAO certificate extension Doc type list: Version";
            case -1879047624:
                return "Notification - ICAO certificate extension Doc type list: Doc types";
            case -1879047623:
                return "Notification - ICAO certificate extension Doc type list: Doc types empty";
            case -1879047622:
                return "Notification - ICAO certificate extension: Dert policies incorrect data";
            case -1879047621:
                return "Notification - ICAO certificate extension: Cert policies empty";
            case -1879047620:
                return "Notification - ICAO certificate extension: Cert policies policy ID missed";
            case -1879047619:
                return "Notification - ICAO certificate extension: CRL dist point missed";
            case -1879047618:
                return "Notification - ICAO certificate extension: CRL dist point incorrect data";
            case -1879047617:
                return "Notification - ICAO certificate extension: CRL dist point empty";
            case -1879047616:
                return "Notification - ICAO certificate extension: CRL dist point point missed";
            case -1879048160:
                return "Notification - ICAO COM: LDS version incorrect";
            case -1879048159:
                return "Notification - ICAO COM: LDS version missing";
            case -1879048158:
                return "Notification - ICAO COM: Unicode version incorrect";
            case -1879048157:
                return "Notification - ICAO COM: Unicode version missing";
            case -1879048156:
                return "Notification - ICAO COM: DGPM incorrect";
            case -1879048155:
                return "Notification - ICAO COM: DGPM missing";
            case -1879048154:
                return "Notification - ICAO COM: DGPM unexpected";
            case -1879048144:
                return "Notification - ICAO application: LDS version unsupported";
            case -1879048143:
                return "Notification - ICAO application: Unicode version unsupported";
            case -1879048142:
                return "Notification - ICAO application: LDS version inconsistent";
            case -1879048141:
                return "Notification - ICAO application: Unicode version inconsistent";
            case -1879047936:
                return "Notification - ASN signed data: OID incorrect";
            case -1879047776:
                return "Notification - ASN signed data: Version incorrect";
            case -1879047935:
                return "Notification - ICAO signed data: Version incorrect";
            case -1879047934:
                return "Notification - ICAO signed data: Digest algorithms empty";
            case -1879047933:
                return "Notification - ICAO signed data: Digest algorithms unsupported";
            case -1879047927:
                return "Notification - ICAO signed data: Signer infos multiple entries";
            case -1879047760:
                return "Notification - ICAO signed data: Certificates missed";
            case -1879047759:
                return "Notification - ICAO signed data: Certificates empty";
            case -1879047758:
                return "Notification - ICAO signed data: CRLs incorrect usage";
            case -1879047932:
                return "Notification - ICAO LDS object: Incorrect content OID";
            case -1879047931:
                return "Notification - ICAO LDS object: DG number incorrect";
            case -1879047930:
                return "Notification - ICAO LDS object: DG hash missing";
            case -1879047929:
                return "Notification - ICAO LDS object: DG hash extra";
            case -1879047928:
                return "Notification - ICAO LDS object: Version incorrect";
            case -1879047744:
                return "Notification - ICAO master list: Version incorrect";
            case -1879047926:
                return "Notification - ASN signer info: Version incorrect";
            case -1879047925:
                return "Notification - ASN signer info: SID incorrect choice";
            case -1879047924:
                return "Notification - ASN signer info: SID digest algorithm not listed";
            case -1879047923:
                return "Notification - ASN signer info: Message digest attr missing";
            case -1879047922:
                return "Notification - ASN signer info: Message digest attr data";
            case -1879047921:
                return "Notification - ASN signer info: Message digest attr value";
            case -1879047920:
                return "Notification - ASN signer info: Content type attr missing";
            case -1879047919:
                return "Notification - ASN signer info: Content type attr data";
            case -1879047918:
                return "Notification - ASN signer info: Content type attr value";
            case -1879047909:
                return "Notification - ASN signer info: Signing time attr missing";
            case -1879047908:
                return "Notification - ASN signer info: Signing time attr data";
            case -1879047907:
                return "Notification - ASN signer info: Signing time attr value";
            case -1879047915:
                return "Notification - Auth signer info: Certificate validity";
            case -1879047914:
                return "Notification - Auth signer info: Certificate root is not trusted";
            case -1879047913:
                return "Notification - Auth signer info: Certificate cannot find CSCA";
            case -1879047912:
                return "Notification - Auth signer info: Certificate revoked";
            case -1879047911:
                return "Notification - Auth signer info: Certificate signature invalid";
            case -1879047910:
                return "Notification: Unsupported image format";
            case 139272:
                return "Notification - MRZ: Document type unknown";
            case 139273:
                return "Notification - MRZ: Issuing state syntax error";
            case 139274:
                return "Notification - MRZ: Name is void";
            case 139277:
                return "Notification - MRZ: Number incorrect checksum";
            case 139278:
                return "Notification - MRZ: Nationality syntax error";
            case 139279:
                return "Notification - MRZ: DOB syntax error";
            case 139280:
                return "Notification - MRZ: DOB error";
            case 139281:
                return "Notification - MRZ: DOB incorrect checksum";
            case 139282:
                return "Notification - MRZ: Sex incorrect";
            case 139283:
                return "Notification - MRZ: DOE syntax error";
            case 139284:
                return "Notification - MRZ: DOE error";
            case 139285:
                return "Notification - MRZ: DOE incorrect checksum";
            case 139286:
                return "Notification - MRZ: Optional data incorrect checksum";
            case 139287:
                return "Notification - MRZ: Incorrect checksum";
            case 139288:
                return "Notification - MRZ: Incorrect";
            case -1878982656:
                return "Notification - Biometrics: Format owner missing";
            case -1878917120:
                return "Notification - Biometrics: Format owner incorrect";
            case -1878851584:
                return "Notification - Biometrics: Format type missing";
            case -1878786048:
                return "Notification - Biometrics: Format type incorrect";
            case -1878720512:
                return "Notification - Biometrics: Type incorrect";
            case -1878654976:
                return "Notification - Biometrics: Subtype missing";
            case -1878589440:
                return "Notification - Biometrics: Subtype incorrect";
            case -1878523904:
                return "Notification - Biometrics: BDB image missing";
            case -1878458368:
                return "Notification - Biometrics: BDB format ID incorrect";
            case -1878392832:
                return "Notification - Biometrics: BDB version incorrect";
            case -1878327296:
                return "Notification - Biometrics: BDB data length incorrect";
            case -1877999616:
                return "Notification - Biometrics: BDB Data Gender";
            case -1877934080:
                return "Notification - Biometrics: BDB Data Eye Color";
            case -1877868544:
                return "Notification - Biometrics: BDB Data Hair Color";
            case -1877803008:
                return "Notification - Biometrics: BDB Data Pose Angle Yaw";
            case -1877737472:
                return "Notification - Biometrics: BDB Data Pose Angle Pitch";
            case -1877671936:
                return "Notification - Biometrics: BDB Data Pose Angle Roll";
            case -1877606400:
                return "Notification - Biometrics: BDB Data Pose Angle U Yaw";
            case -1877540864:
                return "Notification - Biometrics: BDB Data Pose Angle U Pitch";
            case -1877475328:
                return "Notification - Biometrics: BDB Data Pose Angle U Roll";
            case -1877409792:
                return "Notification - Biometrics: BDB Data Face Image Type";
            case -1877344256:
                return "Notification - Biometrics: BDB Data Image Data Type";
            case -1862270976:
                return "Notification - SI: PACE Info Unsupported Std Parameters";
            case -1862270975:
                return "Notification - SI: PACE Info Deprecated Version";
            case -1862270974:
                return "Notification - SI: PACE Domain Params Using Std Ref";
            case -1862270973:
                return "Notification - SI: PACE Domain Params Unsupported Algorithm";
            case -1862270972:
                return "Notification - SI: CA Info Incorrect Version";
            case -1862270971:
                return "Notification - SI: CA PublicKey Unsupported Algorithm";
            case -1862270970:
                return "Notification - SI: CA Domain Params Unsupported Algorithm";
            case -1862270969:
                return "Notification - SI: TA Info Incorrect Version";
            case -1862270968:
                return "Notification - SI: TA Info File ID For Version 2";
            case -1862270967:
                return "Notification - SI: eID Security Unsupported Digest Algorithm";
            case -1862270966:
                return "Notification - SI: RI info incorrect version";
            case -1862270965:
                return "Notification - SI: RI domain params unsupported algorithm";
            case -1862270964:
                return "Notification - SI: AA info incorrect version";
            case -1862270963:
                return "Notification - SI: AA info unsupported algorithm";
            case -1862270962:
                return "Notification - SI: AA info inconsistent algorithm reference";
            case -1862270720:
                return "Notification - SI: PACE Info Not Available";
            case -1862270719:
                return "Notification - SI: PACE Info No Std Parameters";
            case -1862270718:
                return "Notification - SI: PACE Info No Matching Domain Params";
            case -1862270717:
                return "Notification - SI: CA Info Not Available";
            case -1862270716:
                return "Notification - SI: CA Domain Params No Required Option";
            case -1862270715:
                return "Notification - SI: CA Domain Params Not Available";
            case -1862270714:
                return "Notification - SI: CA Anonymous Infos";
            case -1862270713:
                return "Notification - SI: CA Info No Matching Domain Params";
            case -1862270712:
                return "Notification - SI: CA Info No Matching Public Key";
            case -1862270711:
                return "Notification - SI: CA Incorrect Infos Quantity";
            case -1862270710:
                return "Notification - SI: TA Info Not Available";
            case -1862270709:
                return "Notification - SI: Card Info Locator Multiple Entries";
            case -1862270708:
                return "Notification - SI: eID Security Info Multiple Entries";
            case -1862270707:
                return "Notification - SI: Privileged TI Multiple Entries";
            case -1862270706:
                return "Notification - SI: Privileged TI Incorrect Usage";
            case -1862270705:
                return "Notification - SI: RI domain params multiple entries";
            case -1862270704:
                return "Notification - SI: Storage PACE Info Non Consistant";
            case -1862270463:
                return "Notification - CV Certificate: Profile incorrect version";
            case -1862270462:
                return "Notification - CV Certificate: Validity";
            case -1862270461:
                return "Notification - CV Certificate: Non CVCA domain parameters";
            case -1862270460:
                return "Notification - CV Certificate: Private key incorrect version";
            case -1862270208:
                return "Notification - TA: PACE static binding used";
            case -1845493483:
                return "Notification - Auth ML signer info: Certificate validity";
            case -1845493482:
                return "Notification - Auth ML signer info: Certificate root is not trusted";
            case -1845493481:
                return "Notification - Auth ML signer info: Certificate cannot find CSCA";
            case -1845493480:
                return "Notification - Auth ML signer info: Certificate revoked";
            case -1845493479:
                return "Notification - Auth ML signer info: Certificate signature invalid";
            case this.RFID_ERROR_ALREADY_DONE:
                return "RFID: Requested operation is already done";
            case this.RFID_ERROR_FAILED:
                return "RFID: Failed";
            case this.RFID_Error_GraphManager:
                return "RFID: Creation or connection to Graph Manager COM server failed";
            case this.RFID_ERROR_NO_CHIP_DETECTED:
                return "RFID: No chip is detected";
            case this.RFID_ERROR_NOT_AVAILABLE:
                return "RFID: Unavailable";
            case this.RFID_ERROR_INVALID_PARAMETER:
                return "RFID: Invalid parameter in ExecuteCommand() call found";
            case this.RFID_ERROR_NOT_INITIALIZED:
                return "RFID: Device is uninitialized";
            case this.RFID_Error_NotEnoughMemory:
                return "RFID: Out of memory";
            case this.RFID_ERROR_INVALID_DIRECTORY:
                return "RFID: Invalid directory";
            case this.RFID_ERROR_UNKNOWN_COMMAND:
                return "RFID: Unknown command";
            case this.RFID_ERROR_FILE_IO_ERROR:
                return "RFID File: IO Error";
            case this.RFID_ERROR_BUSY:
                return "RFID: RFID is Busy";
            case -2147418100:
                return "RFID: Firmware need to be updated with newer version";
            case -2147352576:
                return "PCSC: Failed";
            case -2147352575:
                return "PCSC: Reader is unavailable";
            case -2147352574:
                return "PCSC: Card cannot be connected";
            case -2147352573:
                return "PCSC: Card is not connected";
            case -2147352572:
                return "PCSC: Operation is cancelled";
            case -2147352571:
                return "PCSC: Card Is Busy";
            case -2147352570:
                return "PCSC: Failed Smart Card";
            case -2147352560:
                return "PCSC: ExtLe Failed";
            case -2046820352:
                return "LAYER6: Secure Messaging was not activated";
            case -2046820351:
                return "LAYER6: ISO7816_A_03 \"Application selection failure\"";
            case -2046820096:
                return "LAYER6: ISO7816_B_01 \"Mutual authentication MAC failure\"";
            case -2046820095:
                return "LAYER6: ISO7816_B_02 \"Mutual authentication encryption failure\"";
            case -2046820094:
                return "LAYER6: ISO7816_B_03 \"Mutual authentication failure\"";
            case -2046819840:
                return "LAYER6: SM failure – MAC missing";
            case -2046819839:
                return "LAYER6: SM failure – cryptogram missing";
            case -2046819838:
                return "LAYER6: SM failure – secured status bytes missing";
            case -2046819837:
                return "LAYER6: SM failure – incorrect MAC";
            case -2046819836:
                return "LAYER6: SM failure – incorrect cryptogram";
            case -2046819584:
                return "LAYER6: Not TLV response data";
            case -2046819583:
                return "LAYER6: Wrong data length (APDU_INS_GET_CHALLENGE)";
            case -2046819582:
                return "LAYER6: APDU_INS_INTERNAL_AUTHENTICATE failure";
            case -2046819581:
                return "LAYER6: MSE:Set KAT failure";
            case -2046819580:
                return "LAYER6: MSE:Set DST failure";
            case -2046819579:
                return "LAYER6: PSO CERTIFICATE failure";
            case -2046819578:
                return "LAYER6: MSE:Set AT failure";
            case -2046819577:
                return "LAYER6: GET CHALLENGE failure";
            case -2046819576:
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (External Authentication) failure";
            case -2046819575:
                return "LAYER6: General Authenticity Failure";
            case -2147456382:
                return "LAYER6: File selection failure / file not found";
            case -2147458430:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147456256:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147456384:
                return "LAYER6: Incorrect Params";
            case -2147456376:
                return "LAYER6: No Reference Data";
            case -2147458111:
                return "LAYER6: PWD Suspended";
            case -2147458112:
                return "LAYER6: PWD Blocked";
            case -2147458429:
                return "LAYER6: PWD Deactivated";
            case -2147456637:
                return "LAYER6: PWD Blocked 2";
            case -2147456636:
                return "LAYER6: PWD Deactivated 2";
            case -2147456635:
                return "LAYER6: PWD Suspended 2";
            case -2146409536:
                return "LAYER6: PWD Failed";
            case -2097152000:
                return "RFID: Not Performed";
            case -2097151999:
                return "RFID: Session Is Closed";
            case -2097151998:
                return "RFID: Terminal Unsupported Operation";
            case -2097151984:
                return "RFID: Terminal Type Unknown";
            case -2097151983:
                return "RFID: Terminal Type Bad Certificate";
            case -2097151982:
                return "RFID: Terminal Type Not Set";
            case -2097151981:
                return "RFID: Procedure Type Unknown";
            case -2097151980:
                return "RFID: Procedure Type Unsupported";
            case -2097151979:
                return "RFID: Procedure Type Not Set";
            case -2097151978:
                return "RFID: Access Key Unknown Type";
            case -2097151977:
                return "RFID: Access Key Unsupported SM Type";
            case -2097151976:
                return "RFID: Access Key Incorrect SM Type";
            case -2097151975:
                return "RFID: Access Key Restricted";
            case -2097151974:
                return "RFID: Access Key Incorrect Data";
            case -2097151973:
                return "RFID: Access Key Not Set";
            case -2097151972:
                return "RFID: Pwd Management Not Authorized";
            case -2097151968:
                return "RFID: Access Control UnknownType";
            case -2097151967:
                return "RFID: Requires SM";
            case -2097151966:
                return "RFID: Requires PACE";
            case -2097151965:
                return "RFID: Requires CA Keys";
            case -2097151964:
                return "RFID: Requires TA";
            case -2097151963:
                return "RFID: Requires CA";
            case -2097151962:
                return "RFID: Incorrect Option CA";
            case -2097151961:
                return "RFID: CA Failed";
            case -2097151960:
                return "RFID: TA Failed";
            case -2097151959:
                return "RFID: AA Failed";
            case -2097151958:
                return "RFID: RI Failed";
            case -2097151952:
                return "RFID: SO Signature Check Failed";
            case -2097151951:
                return "RFID: Hash Check Failed";
            case -2097151936:
                return "RFID: Invalid Aux Data Date Of Expiry";
            case -2097151935:
                return "RFID: Invalid Aux Data Date Of Birth";
            case -2097151934:
                return "RFID: Invalid Aux Data Community ID";
            case -2097151920:
                return "RFID: eSign Requires App Selection";
            case -2097151919:
                return "RFID: eSign PIN Not Set";
            case -2097151918:
                return "RFID: eSign PIN Not Verified";
            case -2097151904:
                return "RFID: Incorrect data";
            case -2097086464:
                return "RFID File: Not Enough Data";
            case -2097020928:
                return "RFID File: Incorrect Data";
            case -2096955392:
                return "RFID File: Unexpected Data";
            case -2096889856:
                return "RFID File: Contents Unexpected Data";
            case -2096824320:
                return "RFID File: Wrong Tag";
            case -2096758784:
                return "RFID File: Cannot Use Data";
            case -2096693248:
                return "RFID File: Cannot Read Data";
            case this.RFID_ERROR_SESSION_FILE_ACCESS_DENIED:
                return "RFID File: Access Denied";
            default:
                return value.toString();
        }
    }
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
export var eRFID_SDK_ProfilerType = {
    SPT_DOC_9303_EDITION_2006: 0x00000001,
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: 0x00000002,
};
export var eRFID_TerminalType = {
    TET_UNDEFINED: 0,
    TET_INSPECTION_SYSTEM: 1,
    TET_AUTHENTICATION_TERMINAL: 2,
    TET_SIGNATURE_TERMINAL: 3,
    TET_UNAUTHENTICATED_TERMINAL: 4,
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
export var eRPRM_FieldVerificationResult = {
    RCF_DISABLED: 0,
    RCF_VERIFIED: 1,
    RCF_NOT_VERIFIED: 2,
    RCF_COMPARE_TRUE: 3,
    RCF_COMPARE_FALSE: 4,
};
export var eRPRM_Lights = {
    NONE: 0,
    RPRM_LIGHT_UV: 128,
    RPRM_LIGHT_WHITE_FULL: 6,
    getTranslation: function (value) {
        switch (value) {
            case this.RPRM_LIGHT_UV:
                return "UV";
            case this.RPRM_LIGHT_WHITE_FULL:
                return "Visible light";
            default:
                return value.toString();
        }
    }
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
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: 85,
    RPRM_RESULT_TYPE_CUSTOM: 100,
    RFID_RESULT_TYPE_RFID_RAW_DATA: 101,
    RFID_RESULT_TYPE_RFID_TEXT_DATA: 102,
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: 103,
    RFID_RESULT_TYPE_RFID_BINARY_DATA: 104,
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: 105,
    RPRM_RESULT_TYPE_BARCODE_POSITION: 62,
    RPRM_RESULT_TYPE_MRZ_POSITION: 61,
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
    getTranslation: function (value) {
        switch (value) {
            case 0:
                return "Document class code";
            case 1:
                return "Issuing state code";
            case 2:
                return "Document number";
            case 3:
                return "Date of expiry";
            case 4:
                return "Date of issue";
            case 5:
                return "Date of birth";
            case 6:
                return "Place of birth";
            case 7:
                return "Personal number";
            case 8:
                return "Surname";
            case 9:
                return "Given name";
            case 10:
                return "Mother\'s name";
            case 11:
                return "Nationality";
            case 12:
                return "Sex";
            case 13:
                return "Height";
            case 14:
                return "Weight";
            case 15:
                return "Eye color";
            case 16:
                return "Hair color";
            case 17:
                return "Address";
            case 18:
                return "Donor";
            case 19:
                return "Social insurance number";
            case 20:
                return "DL category";
            case 21:
                return "DL endorsement code";
            case 22:
                return "DL Restriction Code";
            case 23:
                return "Date of 21st birthday";
            case 24:
                return "Issuing authority";
            case 25:
                return "Surname and given names";
            case 26:
                return "Nationality code";
            case 27:
                return "Passport number";
            case 28:
                return "Invitation number";
            case 29:
                return "Visa ID";
            case 30:
                return "Visa Class";
            case 31:
                return "Visa subclass";
            case 32:
                return "MRZ line 1";
            case 33:
                return "MRZ line 2";
            case 34:
                return "MRZ line 3";
            case 35:
                return "MRZ Type";
            case 36:
                return "Optional data";
            case 37:
                return "Document class";
            case 38:
                return "Issuing state";
            case 39:
                return "Place of issue";
            case 40:
                return "Checksum for document number";
            case 41:
                return "Checksum for date of birth";
            case 42:
                return "Checksum for date of expiry";
            case 43:
                return "Checksum for personal number";
            case 44:
                return "Final checksum";
            case 45:
                return "Checksum for passport number";
            case 46:
                return "Checksum for invitation number";
            case 47:
                return "Checksum for visa ID";
            case 48:
                return "Checksum for surname and given names";
            case 49:
                return "Checksum for visa expiry date";
            case 50:
                return "Other";
            case 51:
                return "MRZ lines";
            case 52:
                return "Name suffix";
            case 53:
                return "Name prefix";
            case 54:
                return "Checksum for date of issue";
            case 55:
                return "Check digit for date of issue";
            case 56:
                return "Document series";
            case 57:
                return "Registration number";
            case 58:
                return "Vehicle model";
            case 59:
                return "Vehicle color";
            case 60:
                return "Body number";
            case 61:
                return "Vehicle type";
            case 62:
                return "Max permissible weight";
            case 63:
                return "Unladen mass";
            case 64:
                return "Area";
            case 65:
                return "State";
            case 66:
                return "Unit";
            case 67:
                return "Building";
            case 68:
                return "Apartment";
            case 69:
                return "Place of registration";
            case 70:
                return "Date of registration";
            case 71:
                return "Resident from";
            case 72:
                return "Resident until";
            case 73:
                return "Issuing authority code";
            case 74:
                return "Area of birthplace";
            case 75:
                return "State code of birthplace";
            case 76:
                return "Street";
            case 77:
                return "City";
            case 78:
                return "Jurisdiction code";
            case 79:
                return "Postal code";
            case 80:
                return "Check digit for document number";
            case 81:
                return "Check digit for date of birth";
            case 82:
                return "Check digit for date of expiry";
            case 83:
                return "Check digit for personal number";
            case 84:
                return "Final check digit";
            case 85:
                return "Check digit for passport number";
            case 86:
                return "Check digit for invitation number";
            case 87:
                return "Check digit for visa ID";
            case 88:
                return "Check digit for surname and given names";
            case 89:
                return "Check digit for visa expiry date";
            case 90:
                return "Permit class";
            case 91:
                return "Permit expiry date";
            case 92:
                return "Permit identifier";
            case 93:
                return "Permit issue date";
            case 94:
                return "Permit restriction code";
            case 95:
                return "Permit endorsement code";
            case 96:
                return "Issue time";
            case 97:
                return "Number of duplicates";
            case 98:
                return "Medical notes/codes";
            case 99:
                return "Non-resident indicator";
            case 100:
                return "Visa type";
            case 101:
                return "Visa valid from";
            case 102:
                return "Visa valid until";
            case 103:
                return "Duration of stay";
            case 104:
                return "Number of entries";
            case 105:
                return "Day";
            case 106:
                return "Month";
            case 107:
                return "Year";
            case 108:
                return "Unique customer identifier";
            case 109:
                return "Commercial vehicle code";
            case 110:
                return "AKA Date of birth";
            case 111:
                return "AKA Social Insurance Number";
            case 112:
                return "AKA Surname";
            case 113:
                return "AKA Given name";
            case 114:
                return "AKA Name suffix";
            case 115:
                return "AKA Name prefix";
            case 116:
                return "Mailing address - street";
            case 117:
                return "Mailing address - city";
            case 118:
                return "Mailing address - jurisdiction code";
            case 119:
                return "Mailing address - postal code";
            case 120:
                return "Number for validation";
            case 121:
                return "Inventory number";
            case 122:
                return "Race/ethnicity";
            case 123:
                return "Jurisdiction vehicle class";
            case 124:
                return "Jurisdiction endorsement code";
            case 125:
                return "Jurisdiction restriction code";
            case 126:
                return "Surname/given name at birth";
            case 127:
                return "Given name (National)";
            case 128:
                return "Visa ID (National)";
            case 129:
                return "Father\'s name";
            case 130:
                return "Father\'s name (National)";
            case 131:
                return "Surname and given names (National)";
            case 132:
                return "Place of birth (National)";
            case 133:
                return "Issuing authority (National)";
            case 134:
                return "Numeric issuing state code";
            case 135:
                return "Numeric nationality code";
            case 136:
                return "Engine power";
            case 137:
                return "Engine volume";
            case 138:
                return "Chassis number";
            case 139:
                return "Engine number";
            case 140:
                return "Engine model";
            case 141:
                return "Vehicle category";
            case 142:
                return "Identity card number";
            case 143:
                return "Control number";
            case 144:
                return "Parents\' given names";
            case 145:
                return "Second surname";
            case 146:
                return "Middle name";
            case 147:
                return "Vehicle identification number";
            case 148:
                return "Check digit for VIN";
            case 149:
                return "Checksum for VIN";
            case 150:
                return "Check digit for line 1";
            case 151:
                return "Check digit for line 2";
            case 152:
                return "Check digit for line 3";
            case 153:
                return "Checksum for line 1";
            case 154:
                return "Checksum for line 2";
            case 155:
                return "Checksum for line 3";
            case 156:
                return "Check digit for registration number";
            case 157:
                return "Checksum for registration number";
            case 158:
                return "Vehicle ITS code";
            case 159:
                return "Card access number";
            case 160:
                return "Marital status";
            case 161:
                return "Company name";
            case 162:
                return "Special notes";
            case 163:
                return "Spouse\'s surname";
            case 164:
                return "Tracking number";
            case 165:
                return "Booklet number";
            case 166:
                return "Children";
            case 167:
                return "Copy";
            case 168:
                return "Serial number";
            case 169:
                return "Dossier number";
            case 170:
                return "AKA Full name";
            case 171:
                return "Territorial validity";
            case 172:
                return "MRZ lines with correct checksums";
            case 173:
                return "CDL Restriction Code";
            case 174:
                return "Date of 18th birthday";
            case 175:
                return "Record created";
            case 176:
                return "Date of duplicate issue";
            case 177:
                return "Card type";
            case 178:
                return "Military ID number";
            case 179:
                return "Destination";
            case 180:
                return "Blood group";
            case 181:
                return "Sequence number";
            case 182:
                return "Body type";
            case 183:
                return "Vehicle make";
            case 184:
                return "Transaction number";
            case 185:
                return "Age";
            case 186:
                return "Folio number";
            case 187:
                return "Voter Key";
            case 188:
                return "Municipality";
            case 189:
                return "Location";
            case 190:
                return "Section";
            case 191:
                return "OCR number";
            case 192:
                return "Federal elections";
            case 193:
                return "Unique number";
            case 194:
                return "Checksum for optional data";
            case 195:
                return "Check digit for optional data";
            case 196:
                return "Visa Number";
            case 197:
                return "Checksum for visa number";
            case 198:
                return "Check digit for visa number";
            case 199:
                return "Voter";
            case 200:
                return "Type/number of the previous document";
            case 220:
                return "Field from MRZ";
            case 221:
                return "Current date";
            case 251:
                return "Status Expiry Date";
            case 252:
                return "Banknote number";
            case 253:
                return "CSC Code";
            case 254:
                return "Pseudonym";
            case 255:
                return "Academic title";
            case 256:
                return "Country";
            case 257:
                return "ZIP code";
            case 258:
                return "Residence permit 1";
            case 259:
                return "Residence permit 2";
            case 260:
                return "Place of Birth: Street";
            case 261:
                return "Place of Birth: City";
            case 262:
                return "Place of Birth: State";
            case 263:
                return "Place of Birth: Country";
            case 264:
                return "Place of Birth: Postal code";
            case 265:
                return "CDL Class";
            case 266:
                return "Date of 19th birthday";
            case 267:
                return "Weight (pound)";
            case 268:
                return "Indicator of document limited duration";
            case 269:
                return "Endorsement expiration date";
            case 270:
                return "Revision date";
            case 271:
                return "Compliance type";
            case 272:
                return "Truncated surname/given name at birth";
            case 273:
                return "First name truncation";
            case 274:
                return "Middle name truncation";
            case 275:
                return "Exam date";
            case 276:
                return "Organization";
            case 277:
                return "Department";
            case 278:
                return "Pay grade";
            case 279:
                return "Rank";
            case 280:
                return "Benefits number";
            case 281:
                return "Sponsor service";
            case 282:
                return "Sponsor status";
            case 283:
                return "Sponsor";
            case 284:
                return "Relationship";
            case 285:
                return "USCIS";
            case 286:
                return "Category";
            case 287:
                return "Conditions";
            case 288:
                return "Identifier";
            case 289:
                return "Configuration";
            case 290:
                return "Discretionary data";
            case 291:
                return "Optional data from line 1";
            case 292:
                return "Optional data from line 2";
            case 293:
                return "Optional data from line 3";
            case 294:
                return "EQV code";
            case 295:
                return "ALT code";
            case 296:
                return "Binary code";
            case 297:
                return "Pseudocode";
            case 298:
                return "Fee";
            case 299:
                return "Stamp number";
            case 300:
                return "SBH security options";
            case 301:
                return "SBH integrity options";
            case 302:
                return "Creation date";
            case 303:
                return "Validity period";
            case 304:
                return "Patron header version";
            case 305:
                return "BDB type";
            case 306:
                return "Biometric type";
            case 307:
                return "Biometric subtype";
            case 308:
                return "Biometric product ID";
            case 309:
                return "Biometric format owner";
            case 310:
                return "Biometric format type";
            case 311:
                return "Phone";
            case 312:
                return "Profession";
            case 313:
                return "Position";
            case 314:
                return "Personal data summary";
            case 315:
                return "Other valid IDs";
            case 316:
                return "Custody info";
            case 317:
                return "Other name";
            case 318:
                return "Observations";
            case 319:
                return "Tax";
            case 320:
                return "Personalization date";
            case 321:
                return "Serial number of personalization";
            case 322:
                return "Other person, name";
            case 323:
                return "Notify person: Date of record";
            case 324:
                return "Notify person: Name";
            case 325:
                return "Notify person: Phone";
            case 326:
                return "Notify person: Address";
            case 327:
                return "DS certificate issuer";
            case 328:
                return "DS certificate subject";
            case 329:
                return "DS certificate valid from";
            case 330:
                return "DS certificate valid to";
            case 331:
                return "Vehicle data from the DG1 data group";
            case 332:
                return "Type of approval number";
            case 333:
                return "Administrative number";
            case 334:
                return "Document discriminator";
            case 335:
                return "Data discriminator";
            case 336:
                return "ID number of ISO issuer";
            case 340:
                return "GNIB number";
            case 341:
                return "Department number";
            case 342:
                return "Telegraph code";
            case 343:
                return "Allergies";
            case 344:
                return "Special code";
            case 345:
                return "Court code";
            case 346:
                return "County";
            case 347:
                return "Sponsor SSN";
            case 348:
                return "DoD number";
            case 349:
                return "Expiry date of Motorcycle Novice status";
            case 350:
                return "DUF number";
            case 351:
                return "AGY";
            case 352:
                return "PNR code";
            case 353:
                return "Code of the airport of departure";
            case 354:
                return "Code of the airport of arrival";
            case 355:
                return "Flight number";
            case 356:
                return "Date of flight";
            case 357:
                return "Seat number";
            case 358:
                return "Date of boarding pass issue";
            case 359:
                return "CCW until";
            case 360:
                return "Unique number checksum";
            case 361:
                return "Unique number check digit";
            case 362:
                return "Room number";
            case 363:
                return "Religion";
            case 364:
                return "Months to expire";
            case 365:
                return "Electronic ticket indicator";
            case 366:
                return "Compartment code";
            case 367:
                return "Check-in sequence number";
            case 368:
                return "Airline designator of boarding pass issuer";
            case 369:
                return "Airline numeric code";
            case 370:
                return "Ticket number";
            case 371:
                return "Frequent flyer airline designator";
            case 372:
                return "Frequent flyer number";
            case 373:
                return "Free baggage allowance";
            case 374:
                return "PDF417 codec";
            case 375:
                return "Checksum for identity card number";
            case 376:
                return "Check digit for identity card number";
            case 377:
                return "Veteran";
            case 378:
                return "DL category A1 valid from";
            case 379:
                return "DL category A1 valid to";
            case 380:
                return "DL category A1 codes";
            case 381:
                return "DL category A valid from";
            case 382:
                return "DL category A valid to";
            case 383:
                return "DL category A codes";
            case 384:
                return "DL category B valid from";
            case 385:
                return "DL category B valid to";
            case 386:
                return "DL category B codes";
            case 387:
                return "DL category C1 valid from";
            case 388:
                return "DL category C1 valid to";
            case 389:
                return "DL category C1 codes";
            case 390:
                return "DL category C valid from";
            case 391:
                return "DL category C valid to";
            case 392:
                return "DL category C codes";
            case 393:
                return "DL category D1 valid from";
            case 394:
                return "DL category D1 valid to";
            case 395:
                return "DL category D1 codes";
            case 396:
                return "DL category D valid from";
            case 397:
                return "DL category D valid to";
            case 398:
                return "DL category D codes";
            case 399:
                return "DL category BE valid from";
            case 400:
                return "DL category BE valid to";
            case 401:
                return "DL category BE codes";
            case 402:
                return "DL category C1E valid from";
            case 403:
                return "DL category C1E valid to";
            case 404:
                return "DL category C1E codes";
            case 405:
                return "DL category CE valid from";
            case 406:
                return "DL category CE valid to";
            case 407:
                return "DL category CE codes";
            case 408:
                return "DL category D1E valid from";
            case 409:
                return "DL category D1E valid to";
            case 410:
                return "DL category D1E codes";
            case 411:
                return "DL category DE valid from";
            case 412:
                return "DL category DE valid to";
            case 413:
                return "DL category DE codes";
            case 414:
                return "DL category M valid from";
            case 415:
                return "DL category M valid to";
            case 416:
                return "DL category M codes";
            case 417:
                return "DL category L valid from";
            case 418:
                return "DL category L valid to";
            case 419:
                return "DL category L codes";
            case 420:
                return "DL category T valid from";
            case 421:
                return "DL category T valid to";
            case 422:
                return "DL category T codes";
            case 423:
                return "DL category AM valid from";
            case 424:
                return "DL category AM valid to";
            case 425:
                return "DL category AM codes";
            case 426:
                return "DL category A2 valid from";
            case 427:
                return "DL category A2 valid to";
            case 428:
                return "DL category A2 codes";
            case 429:
                return "DL category B1 valid from";
            case 430:
                return "DL category B1 valid to";
            case 431:
                return "DL category B1 codes";
            case 432:
                return "Surname at birth";
            case 433:
                return "Civil status";
            case 434:
                return "Number of seats";
            case 435:
                return "Number of standing places";
            case 436:
                return "Max speed";
            case 437:
                return "Fuel type";
            case 438:
                return "Vehicle environmental type";
            case 439:
                return "Power-to-weight ratio";
            case 440:
                return "Max mass of trailer (braked)";
            case 441:
                return "Max mass of trailer (unbraked)";
            case 442:
                return "Transmission type";
            case 443:
                return "Trailer hitch";
            case 444:
                return "Accompanied by";
            case 445:
                return "Police district";
            case 446:
                return "First issue date";
            case 447:
                return "Payload capacity";
            case 448:
                return "Number of axles";
            case 449:
                return "Permissible axle load";
            case 450:
                return "Precinct";
            case 451:
                return "Invited by";
            case 452:
                return "Purpose of entry";
            case 453:
                return "Skin color";
            case 454:
                return "Complexion";
            case 455:
                return "Airport of departure";
            case 456:
                return "Airport of arrival";
            case 457:
                return "Airline name";
            case 458:
                return "Airline loyalty program for frequent flyers";
            case 459:
                return "License number";
            case 460:
                return "In tanks";
            case 461:
                return "Except in tanks";
            case 462:
                return "Fast Track service";
            case 463:
                return "Owner";
            case 464:
                return "MRZ lines from ICAO RFID";
            case 465:
                return "Number of card issuances";
            case 466:
                return "Checksum for number of card issuances";
            case 467:
                return "Check digit for number of card issuances";
            case 468:
                return "Century of birth";
            case 469:
                return "DL category A3 valid from";
            case 470:
                return "DL category A3 valid to";
            case 471:
                return "DL category A3 codes";
            case 472:
                return "DL category C2 valid from";
            case 473:
                return "DL category C2 valid to";
            case 474:
                return "DL category C2 codes";
            case 475:
                return "DL category B2 valid from";
            case 476:
                return "DL category B2 valid to";
            case 477:
                return "DL category B2 codes";
            case 478:
                return "DL category D2 valid from";
            case 479:
                return "DL category D2 valid to";
            case 480:
                return "DL category D2 codes";
            case 481:
                return "DL category B2E valid from";
            case 482:
                return "DL category B2E valid to";
            case 483:
                return "DL category B2E codes";
            case 484:
                return "DL category G valid from";
            case 485:
                return "DL category G valid to";
            case 486:
                return "DL category G codes";
            case 487:
                return "DL category J valid from";
            case 488:
                return "DL category J valid to";
            case 489:
                return "DL category J codes";
            case 490:
                return "DL category LC valid from";
            case 491:
                return "DL category LC valid to";
            case 492:
                return "DL category LC codes";
            case 493:
                return "Bank card number";
            case 494:
                return "Bank card validity";
            case 495:
                return "Tax number";
            case 496:
                return "Health insurance number";
            case 497:
                return "Grandfather\'s name";
            case 498:
                return "Selectee indicator";
            case 499:
                return "Mother\'s surname";
            case 500:
                return "Mother\'s given name";
            case 501:
                return "Father\'s surname";
            case 502:
                return "Father\'s given name";
            case 503:
                return "Mother\'s date of birth";
            case 504:
                return "Father\'s date of birth";
            case 505:
                return "Mother\'s personal number";
            case 506:
                return "Father\'s personal number";
            case 507:
                return "Mother\'s place of birth";
            case 508:
                return "Father\'s place of birth";
            case 509:
                return "Mother\'s country of birth";
            case 510:
                return "Father\'s country of birth";
            case 511:
                return "Date of first renewal";
            case 512:
                return "Date of second renewal";
            case 513:
                return "Place of examination";
            case 514:
                return "Application number";
            case 515:
                return "Voucher number";
            case 516:
                return "Authorization number";
            case 517:
                return "Faculty";
            case 518:
                return "Form of education";
            case 519:
                return "DNI number";
            case 520:
                return "Retirement number";
            case 521:
                return "Professional ID number";
            case 522:
                return "Age at issue";
            case 523:
                return "Years since issue";
            case 524:
                return "DL category BTP valid from";
            case 525:
                return "DL category BTP codes";
            case 526:
                return "DL category BTP valid to";
            case 527:
                return "DL category C3 valid from";
            case 528:
                return "DL category C3 codes";
            case 529:
                return "DL category C3 valid to";
            case 530:
                return "DL category E valid from";
            case 531:
                return "DL category E codes";
            case 532:
                return "DL category E valid to";
            case 533:
                return "DL category F valid from";
            case 534:
                return "DL category F codes";
            case 535:
                return "DL category F valid to";
            case 536:
                return "DL category FA valid from";
            case 537:
                return "DL category FA codes";
            case 538:
                return "DL category FA valid to";
            case 539:
                return "DL category FA1 valid from";
            case 540:
                return "DL category FA1 codes";
            case 541:
                return "DL category FA1 valid to";
            case 542:
                return "DL category FB valid from";
            case 543:
                return "DL category FB codes";
            case 544:
                return "DL category FB valid to";
            case 545:
                return "DL category G1 valid from";
            case 546:
                return "DL category G1 codes";
            case 547:
                return "DL category G1 valid to";
            case 548:
                return "DL category H valid from";
            case 549:
                return "DL category H codes";
            case 550:
                return "DL category H valid to";
            case 551:
                return "DL category I valid from";
            case 552:
                return "DL category I codes";
            case 553:
                return "DL category I valid to";
            case 554:
                return "DL category K valid from";
            case 555:
                return "DL category K codes";
            case 556:
                return "DL category K valid to";
            case 557:
                return "DL category LK valid from";
            case 558:
                return "DL category LK codes";
            case 559:
                return "DL category LK valid to";
            case 560:
                return "DL category N valid from";
            case 561:
                return "DL category N codes";
            case 562:
                return "DL category N valid to";
            case 563:
                return "DL category S valid from";
            case 564:
                return "DL category S codes";
            case 565:
                return "DL category S valid to";
            case 566:
                return "DL category TB valid from";
            case 567:
                return "DL category TB codes";
            case 568:
                return "DL category TB valid to";
            case 569:
                return "DL category TM valid from";
            case 570:
                return "DL category TM codes";
            case 571:
                return "DL category TM valid to";
            case 572:
                return "DL category TR valid from";
            case 573:
                return "DL category TR codes";
            case 574:
                return "DL category TR valid to";
            case 575:
                return "DL category TV valid from";
            case 576:
                return "DL category TV codes";
            case 577:
                return "DL category TV valid to";
            case 578:
                return "DL category V valid from";
            case 579:
                return "DL category V codes";
            case 580:
                return "DL category V valid to";
            case 581:
                return "DL category W valid from";
            case 582:
                return "DL category W codes";
            case 583:
                return "DL category W valid to";
            case 584:
                return "URL";
            case 585:
                return "Caliber";
            case 586:
                return "Model";
            case 587:
                return "Make";
            case 588:
                return "Number of cylinders";
            case 589:
                return "Surname of husband after registration";
            case 590:
                return "Surname of wife after registration";
            case 591:
                return "Date of birth of wife";
            case 592:
                return "Date of birth of husband";
            case 593:
                return "Citizenship of the first person";
            case 594:
                return "Citizenship of the second person";
            case 595:
                return "CVV/CVC";
            case 596:
                return "Expiry date of insurance";
            case 597:
                return "Mortgage by";
            case 598:
                return "Old document number";
            case 599:
                return "Old date of issue";
            case 600:
                return "Old place of issue";
            case 601:
                return "DL category LR valid from";
            case 602:
                return "DL category LR valid to";
            case 603:
                return "DL category LR codes";
            case 604:
                return "DL category MR valid from";
            case 605:
                return "DL category MR valid to";
            case 606:
                return "DL category MR codes";
            case 607:
                return "DL category HR valid from";
            case 608:
                return "DL category HR valid to";
            case 609:
                return "DL category HR codes";
            case 610:
                return "DL category HC valid from";
            case 611:
                return "DL category HC valid to";
            case 612:
                return "DL category HC codes";
            case 613:
                return "DL category MC valid from";
            case 614:
                return "DL category MC valid to";
            case 615:
                return "DL category MC codes";
            case 616:
                return "DL category RE valid from";
            case 617:
                return "DL category RE valid to";
            case 618:
                return "DL category RE codes";
            case 619:
                return "DL category R valid from";
            case 620:
                return "DL category R valid to";
            case 621:
                return "DL category R codes";
            case 622:
                return "DL category CA valid from";
            case 623:
                return "DL category CA valid to";
            case 624:
                return "DL category CA codes";
            case 625:
                return "Citizenship status";
            case 626:
                return "Military service from";
            case 627:
                return "Military service to";
            default:
                return value.toString();
        }
    }
};
export var FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
};
export var FrameShapeType = {
    LINE: 0,
    CORNER: 1,
};
export var LCID = {
    LATIN: 0,
    AFRIKAANS: 1078,
    ALBANIAN: 1052,
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
    AZERI_CYRILIC: 2092,
    AZERI_LATIN: 1068,
    BASQUE: 1069,
    BELARUSIAN: 1059,
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
    KAZAKH: 1087,
    KONKANI: 1111,
    KOREAN: 1042,
    KYRGYZ_CYRILICK: 1088,
    LATVIAN: 1062,
    LITHUANIAN: 1063,
    MALAY_MALAYSIA: 1086,
    MALAY_BRUNEI_DARUSSALAM: 2110,
    MARATHI: 1102,
    MONGOLIAN_CYRILIC: 1104,
    NORWEGIAN_BOKMAL: 1044,
    NORWEGIAN_NYORSK: 2068,
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
            case this.ALBANIAN:
                return "Albanian";
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
            case this.AZERI_CYRILIC:
                return "Azeri (Cyrillic)";
            case this.AZERI_LATIN:
                return "Azeri (Latin)";
            case this.BASQUE:
                return "Basque";
            case this.BELARUSIAN:
                return "Belarusian";
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
            case this.KAZAKH:
                return "Kazakh";
            case this.KONKANI:
                return "Konkani";
            case this.KOREAN:
                return "Korean";
            case this.KYRGYZ_CYRILICK:
                return "Kyrgyz (Cyrillic)";
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
export var ProcessingFinishedStatus = {
    NOT_READY: 0,
    READY: 1,
    TIMEOUT: 2,
};
export var RGLMeasureSystem = {
    METRIC: 0,
    IMPERIAL: 1,
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
    BarcodeResult: BarcodeResult,
    BarcodeType: BarcodeType,
    CameraMode: CameraMode,
    CameraTypes: CameraTypes,
    CaptureMode: CaptureMode,
    diDocType: diDocType,
    DocFormat: DocFormat,
    DocReaderAction: DocReaderAction,
    DocReaderFrame: DocReaderFrame,
    DocReaderOrientation: DocReaderOrientation,
    eCheckDiagnose: eCheckDiagnose,
    eCheckResult: eCheckResult,
    eGraphicFieldType: eGraphicFieldType,
    eImageQualityCheckType: eImageQualityCheckType,
    eProcessGLCommands: eProcessGLCommands,
    eRequestCommand: eRequestCommand,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    eRFID_BaudRate: eRFID_BaudRate,
    eRFID_CertificateType: eRFID_CertificateType,
    eRFID_DataFile_Type: eRFID_DataFile_Type,
    eRFID_NotificationAndErrorCodes: eRFID_NotificationAndErrorCodes,
    eRFID_Password_Type: eRFID_Password_Type,
    eRFID_SDK_ProfilerType: eRFID_SDK_ProfilerType,
    eRFID_TerminalType: eRFID_TerminalType,
    eRPRM_Authenticity: eRPRM_Authenticity,
    eRPRM_FieldVerificationResult: eRPRM_FieldVerificationResult,
    eRPRM_Lights: eRPRM_Lights,
    eRPRM_ResultType: eRPRM_ResultType,
    eRPRM_SecurityFeatureType: eRPRM_SecurityFeatureType,
    eSignManagementAction: eSignManagementAction,
    eVisualFieldType: eVisualFieldType,
    FontStyle: FontStyle,
    FrameShapeType: FrameShapeType,
    LCID: LCID,
    PKDResourceType: PKDResourceType,
    ProcessingFinishedStatus: ProcessingFinishedStatus,
    RGLMeasureSystem: RGLMeasureSystem,
    ScenarioIdentifier: ScenarioIdentifier,
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
    DocumentReaderOriginal.prototype.setEnableCoreLogs = function (logs) { return cordova(this, "setEnableCoreLogs", {}, arguments); };
    DocumentReaderOriginal.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.setCameraSessionIsPaused = function (paused) { return cordova(this, "setCameraSessionIsPaused", {}, arguments); };
    DocumentReaderOriginal.prototype.getScenario = function (scenario) { return cordova(this, "getScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.recognizeImages = function (images) { return cordova(this, "recognizeImages", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.showScannerWithCameraID = function (cameraID) { return cordova(this, "showScannerWithCameraID", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.runAutoUpdate = function (databaseType) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.setRfidScenario = function (scenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReader = function (license) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImage = function (image) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReaderWithDatabasePath = function (license, path) { return cordova(this, "initializeReaderWithDatabasePath", {}, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageFrame = function (image, params) { return cordova(this, "recognizeImageFrame", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageWithOpts = function (image, options) { return cordova(this, "recognizeImageWithOpts", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeVideoFrame = function (byteString, params) { return cordova(this, "recognizeVideoFrame", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.showScannerWithCameraIDAndOpts = function (cameraID, options) { return cordova(this, "showScannerWithCameraIDAndOpts", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageWithImageInputParams = function (image, params) { return cordova(this, "recognizeImageWithImageInputParams", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImageWithCameraMode = function (image, mode) { return cordova(this, "recognizeImageWithCameraMode", { "observable": true }, arguments); };
    DocumentReaderOriginal.pluginName = "DocumentReader";
    DocumentReaderOriginal.plugin = "cordova-plugin-document-reader-api";
    DocumentReaderOriginal.pluginRef = "DocumentReader";
    DocumentReaderOriginal.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReaderOriginal.platforms = ["Android", "iOS"];
    return DocumentReaderOriginal;
}(IonicNativePlugin));
var DocumentReader = new DocumentReaderOriginal();
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBU3pCLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDOUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRTlDLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztpQ0F0Qkg7Ozs7OztJQXdDUyxtQ0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzlCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLDBCQUEwQixDQUFBO1FBRTdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVB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QUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9B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TyxjQUFjLENBQUE7WUFDekIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sbUJBQW1CLENBQUE7WUFDOUIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlC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SUFRZCx1Q0FBYztJQVFkLDJDQUFrQjtJQVFsQiw2Q0FBb0I7SUFRcEIsaUNBQVE7SUFRUiw2Q0FBb0I7SUFTcEIsMENBQWlCLGFBQUMsSUFBSTtJQVl0QiwyQ0FBa0IsYUFBQyxZQUFZO0lBUy9CLGlEQUF3QixhQUFDLE1BQU07SUFTL0Isb0NBQVcsYUFBQyxRQUFRO0lBU3BCLHdDQUFlLGFBQUMsTUFBTTtJQVN0QixnREFBdUIsYUFBQyxRQUFRO0lBU2hDLHNDQUFhLGFBQUMsWUFBWTtJQWMxQixrQ0FBUyxhQUFDLE1BQU07SUFXaEIsd0NBQWUsYUFBQyxRQUFRO0lBU3hCLHlDQUFnQixhQUFDLE9BQU87SUFTeEIsd0NBQWUsYUFBQyxZQUFZO0lBUzVCLHVDQUFjLGFBQUMsS0FBSztJQVNwQiw2Q0FBb0IsYUFBQyxNQUFNO0lBVTNCLHlEQUFnQyxhQUFDLE9BQU8sRUFBRSxJQUFJO0lBYTlDLDRDQUFtQixhQUFDLEtBQUssRUFBRSxNQUFNO0lBZWpDLCtDQUFzQixhQUFDLEtBQUssRUFBRSxPQUFPO0lBVXJDLDRDQUFtQixhQUFDLFVBQVUsRUFBRSxNQUFNO0lBZXRDLHVEQUE4QixhQUFDLFFBQVEsRUFBRSxPQUFPO0lBYWhELDJEQUFrQyxhQUFDLEtBQUssRUFBRSxNQUFNO0lBVWhELHFEQUE0QixhQUFDLEtBQUssRUFBRSxJQUFJOzs7Ozs7eUJBdjdMMUM7RUEyOEtvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJTY2VuYXJpbyB7XG4gIHV2VG9yY2g/OiBib29sZWFuXG4gIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICBuYW1lPzogc3RyaW5nXG4gIGNhcHRpb24/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyU2NlbmFyaW9cblxuICAgIHJlc3VsdC51dlRvcmNoID0ganNvbk9iamVjdFtcInV2VG9yY2hcIl1cbiAgICByZXN1bHQuc2VyaWVzUHJvY2Vzc01vZGUgPSBqc29uT2JqZWN0W1wic2VyaWVzUHJvY2Vzc01vZGVcIl1cbiAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclNjZW5hcmlvRnVsbCB7XG4gIHV2VG9yY2g/OiBib29sZWFuXG4gIGZyYW1lT3JpZW50YXRpb24/OiBudW1iZXJcbiAgZmFjZUV4dD86IGJvb2xlYW5cbiAgbXVsdGlQYWdlT2ZmPzogbnVtYmVyXG4gIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICBmcmFtZUtXSExhbmRzY2FwZT86IG51bWJlclxuICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0PzogbnVtYmVyXG4gIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZT86IG51bWJlclxuICBuYW1lPzogc3RyaW5nXG4gIGNhcHRpb24/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgbWFudWFsQ3JvcD86IGJvb2xlYW5cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW9GdWxsIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvRnVsbFxuXG4gICAgcmVzdWx0LnV2VG9yY2ggPSBqc29uT2JqZWN0W1widXZUb3JjaFwiXVxuICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICByZXN1bHQuZmFjZUV4dCA9IGpzb25PYmplY3RbXCJmYWNlRXh0XCJdXG4gICAgcmVzdWx0Lm11bHRpUGFnZU9mZiA9IGpzb25PYmplY3RbXCJtdWx0aVBhZ2VPZmZcIl1cbiAgICByZXN1bHQuc2VyaWVzUHJvY2Vzc01vZGUgPSBqc29uT2JqZWN0W1wic2VyaWVzUHJvY2Vzc01vZGVcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hMYW5kc2NhcGVcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJmcmFtZUtXSFBvcnRyYWl0XCJdXG4gICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0XCJdXG4gICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGVcIl1cbiAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZU1ldGFEYXRhIHtcbiAgSUQ/OiBudW1iZXJcbiAgcm9sbEFuZ2xlPzogbnVtYmVyXG4gIGJvdW5kcz86IEJvdW5kc1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZU1ldGFEYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlTWV0YURhdGFcblxuICAgIHJlc3VsdC5JRCA9IGpzb25PYmplY3RbXCJJRFwiXVxuICAgIHJlc3VsdC5yb2xsQW5nbGUgPSBqc29uT2JqZWN0W1wicm9sbEFuZ2xlXCJdXG4gICAgcmVzdWx0LmJvdW5kcyA9IEJvdW5kcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRzXCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xuICB4PzogbnVtYmVyXG4gIHk/OiBudW1iZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCb3VuZHMge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEJvdW5kc1xuXG4gICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cbiAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgYm90dG9tPzogbnVtYmVyXG4gIHRvcD86IG51bWJlclxuICBsZWZ0PzogbnVtYmVyXG4gIHJpZ2h0PzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJGaWVsZFJlY3Qge1xuICBib3R0b20/OiBudW1iZXJcbiAgdG9wPzogbnVtYmVyXG4gIGxlZnQ/OiBudW1iZXJcbiAgcmlnaHQ/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB7XG4gIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgZmllbGRUeXBlPzogbnVtYmVyXG4gIGxpZ2h0VHlwZT86IG51bWJlclxuICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgZmllbGROYW1lPzogc3RyaW5nXG4gIGxpZ2h0TmFtZT86IHN0cmluZ1xuICB2YWx1ZT86IHN0cmluZ1xuICBmaWVsZFJlY3Q/OiBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgcmVzdWx0LmxpZ2h0VHlwZSA9IGpzb25PYmplY3RbXCJsaWdodFR5cGVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICByZXN1bHQuZmllbGRSZWN0ID0gRG9jUmVhZGVyRmllbGRSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZFJlY3RcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gIGZpZWxkcz86IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0XG5cbiAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgcGFnZUluZGV4PzogbnVtYmVyXG4gIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgdmFsaWRpdHk/OiBudW1iZXJcbiAgcHJvYmFiaWxpdHk/OiBudW1iZXJcbiAgdmFsdWU/OiBzdHJpbmdcbiAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICBib3VuZFJlY3Q/OiBSZWN0XG4gIGNvbXBhcmlzb24/OiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclZhbHVlXG5cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICByZXN1bHQudmFsaWRpdHkgPSBqc29uT2JqZWN0W1widmFsaWRpdHlcIl1cbiAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICByZXN1bHQuY29tcGFyaXNvbiA9IHt9XG4gICAgaWYgKGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXSkge1xuICAgICAgICByZXN1bHQuY29tcGFyaXNvbltpIGFzIHVua25vd24gYXMgbnVtYmVyXSA9IGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdW2ldXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XG4gIGZpZWxkVHlwZT86IG51bWJlclxuICBsY2lkPzogbnVtYmVyXG4gIHN0YXR1cz86IG51bWJlclxuICBsY2lkTmFtZT86IHN0cmluZ1xuICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgdmFsdWU/OiBEb2N1bWVudFJlYWRlclZhbHVlXG4gIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkXG5cbiAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgcmVzdWx0LnZhbHVlID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG4gICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWx1ZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoKERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcblxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gIHg/OiBudW1iZXJcbiAgeT86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudFBvc2l0aW9uIHtcbiAgZG9jRm9ybWF0PzogbnVtYmVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIGhlaWdodD86IG51bWJlclxuICBkcGk/OiBudW1iZXJcbiAgcGFnZUluZGV4PzogbnVtYmVyXG4gIGludmVyc2U/OiBudW1iZXJcbiAgcGVyc3BlY3RpdmVUcj86IG51bWJlclxuICBvYmpBcmVhPzogbnVtYmVyXG4gIG9iakludEFuZ2xlRGV2PzogbnVtYmVyXG4gIHJlc3VsdFN0YXR1cz86IG51bWJlclxuICBhbmdsZT86IG51bWJlclxuICBjZW50ZXI/OiBDb29yZGluYXRlXG4gIGxlZnRUb3A/OiBDb29yZGluYXRlXG4gIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gIHJpZ2h0VG9wPzogQ29vcmRpbmF0ZVxuICByaWdodEJvdHRvbT86IENvb3JkaW5hdGVcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRWxlbWVudFBvc2l0aW9uXG5cbiAgICByZXN1bHQuZG9jRm9ybWF0ID0ganNvbk9iamVjdFtcImRvY0Zvcm1hdFwiXVxuICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgcmVzdWx0LmRwaSA9IGpzb25PYmplY3RbXCJkcGlcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5pbnZlcnNlID0ganNvbk9iamVjdFtcImludmVyc2VcIl1cbiAgICByZXN1bHQucGVyc3BlY3RpdmVUciA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZVRyXCJdXG4gICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgIHJlc3VsdC5vYmpJbnRBbmdsZURldiA9IGpzb25PYmplY3RbXCJvYmpJbnRBbmdsZURldlwiXVxuICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgcmVzdWx0LmNlbnRlciA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImNlbnRlclwiXSlcbiAgICByZXN1bHQubGVmdFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImxlZnRUb3BcIl0pXG4gICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgIHJlc3VsdC5yaWdodFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0VG9wXCJdKVxuICAgIHJlc3VsdC5yaWdodEJvdHRvbSA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0Qm90dG9tXCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHkge1xuICBmZWF0dXJlVHlwZT86IG51bWJlclxuICByZXN1bHQ/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgIHJlc3VsdC5mZWF0dXJlVHlwZSA9IGpzb25PYmplY3RbXCJmZWF0dXJlVHlwZVwiXVxuICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gIGNvdW50PzogbnVtYmVyXG4gIHJlc3VsdD86IG51bWJlclxuICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUdyb3VwIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgcmVzdWx0LmNvdW50ID0ganNvbk9iamVjdFtcImNvdW50XCJdXG4gICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdC5wdXNoKEltYWdlUXVhbGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB7XG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBkb2N1bWVudElEPzogbnVtYmVyXG4gIGRUeXBlPzogbnVtYmVyXG4gIGRGb3JtYXQ/OiBudW1iZXJcbiAgZE1SWj86IGJvb2xlYW5cbiAgbmFtZT86IHN0cmluZ1xuICBJQ0FPQ29kZT86IHN0cmluZ1xuICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZFllYXI/OiBzdHJpbmdcbiAgZENvdW50cnlOYW1lPzogc3RyaW5nXG4gIEZEU0lEPzogbnVtYmVyW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVxuXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgcmVzdWx0LmRUeXBlID0ganNvbk9iamVjdFtcImRUeXBlXCJdXG4gICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICByZXN1bHQuZFllYXIgPSBqc29uT2JqZWN0W1wiZFllYXJcIl1cbiAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJGRFNJRFwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIkZEU0lEXCJdKSB7XG4gICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHtcbiAgY29kZT86IG51bWJlclxuICBudW1iZXI/OiBudW1iZXJcbiAgdmFsdWU/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgIHJlc3VsdC5udW1iZXIgPSBqc29uT2JqZWN0W1wibnVtYmVyXCJdXG4gICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHtcbiAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICByZXN1bHQuYWN0aXZlT3B0aW9uSWR4ID0ganNvbk9iamVjdFtcImFjdGl2ZU9wdGlvbklkeFwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG4gIGxlbmd0aD86IG51bWJlclxuICB0eXBlPzogbnVtYmVyXG4gIHN0YXR1cz86IG51bWJlclxuICBkYXRhPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZURhdGFcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZURhdGEge1xuICBsZW5ndGg/OiBudW1iZXJcbiAgZGF0YT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVEYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gIHNlY3VyaXR5T2JqZWN0PzogQ2VydGlmaWNhdGVEYXRhXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcblxuICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdCA9IENlcnRpZmljYXRlRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGUge1xuICByZWFkaW5nVGltZT86IG51bWJlclxuICB0eXBlPzogbnVtYmVyXG4gIHBBU3RhdHVzPzogbnVtYmVyXG4gIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgZmlsZUlEPzogc3RyaW5nXG4gIGZpbGVEYXRhPzogRmlsZURhdGFcbiAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgZG9jRmllbGRzVGV4dD86IG51bWJlcltdXG4gIGRvY0ZpZWxkc0dyYXBoaWNzPzogbnVtYmVyW11cbiAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgcmVzdWx0LnJlYWRpbmdTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVhZGluZ1N0YXR1c1wiXVxuICAgIHJlc3VsdC5maWxlSUQgPSBqc29uT2JqZWN0W1wiZmlsZUlEXCJdXG4gICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZXMgPSBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVzXCJdKVxuICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0ID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0LnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl1baV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgdW5pY29kZVZlcnNpb24/OiBzdHJpbmdcbiAgdmVyc2lvbj86IHN0cmluZ1xuICBmaWxlcz86IEZpbGVbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXBwbGljYXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnVuaWNvZGVWZXJzaW9uID0ganNvbk9iamVjdFtcInVuaWNvZGVWZXJzaW9uXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWxlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpbGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKEZpbGUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgbGVuZ3RoPzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGRhdGE/OiBzdHJpbmdcbiAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWx1ZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gIHR5cGU/OiBzdHJpbmdcbiAgdmFsdWU/OiBWYWx1ZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQudmFsdWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eSB7XG4gIGRhdGE/OiBzdHJpbmdcbiAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgYXR0cmlidXRlcz86IEF0dHJpYnV0ZVtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRob3JpdHkge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhvcml0eVxuXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdKVxuICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbiB7XG4gIGRhdGE/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXh0ZW5zaW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFeHRlbnNpb25cblxuICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbGlkaXR5IHtcbiAgbm90QWZ0ZXI/OiBWYWx1ZVxuICBub3RCZWZvcmU/OiBWYWx1ZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVmFsaWRpdHkge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgcmVzdWx0Lm5vdEJlZm9yZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RCZWZvcmVcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlQ2hhaW4ge1xuICBvcmlnaW4/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICB2ZXJzaW9uPzogbnVtYmVyXG4gIHBhU3RhdHVzPzogbnVtYmVyXG4gIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gIGZpbGVOYW1lPzogVmFsdWVcbiAgdmFsaWRpdHk/OiBWYWxpZGl0eVxuICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgc3ViamVjdD86IEF1dGhvcml0eVxuICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICByZXN1bHQub3JpZ2luID0ganNvbk9iamVjdFtcIm9yaWdpblwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl1cbiAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgIHJlc3VsdC5zdWJqZWN0UEtBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic3ViamVjdFBLQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LmZpbGVOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVOYW1lXCJdKVxuICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgcmVzdWx0LnN1YmplY3QgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RcIl0pXG4gICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LmV4dGVuc2lvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmVySW5mbyB7XG4gIHZlcnNpb24/OiBudW1iZXJcbiAgcGFTdGF0dXM/OiBudW1iZXJcbiAgZGF0YVRvSGFzaD86IHN0cmluZ1xuICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gIHNlcmlhbE51bWJlcj86IFZhbHVlXG4gIHNpZ25hdHVyZT86IFZhbHVlXG4gIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgaXNzdWVyPzogQXV0aG9yaXR5XG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgY2VydGlmaWNhdGVDaGFpbj86IENlcnRpZmljYXRlQ2hhaW5bXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2lnbmVySW5mb1xuXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgIHJlc3VsdC5kYXRhVG9IYXNoID0ganNvbk9iamVjdFtcImRhdGFUb0hhc2hcIl1cbiAgICByZXN1bHQuZGlnZXN0QWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRpZ2VzdEFsZ29yaXRobVwiXVxuICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl0pXG4gICAgcmVzdWx0LnNpZ25hdHVyZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSkge1xuICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gIGZpbGVSZWZlcmVuY2U/OiBudW1iZXJcbiAgdmVyc2lvbj86IG51bWJlclxuICBvYmplY3RUeXBlPzogc3RyaW5nXG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICBzaWduZXJJbmZvcz86IFNpZ25lckluZm9bXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3Qge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0XG5cbiAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5vYmplY3RUeXBlID0ganNvbk9iamVjdFtcIm9iamVjdFR5cGVcIl1cbiAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2lnbmVySW5mb3MgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MucHVzaChTaWduZXJJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gIGFUUUE/OiBudW1iZXJcbiAgYml0UmF0ZVI/OiBudW1iZXJcbiAgYml0UmF0ZVM/OiBudW1iZXJcbiAgY2hpcFR5cGVBPzogbnVtYmVyXG4gIG1pZmFyZU1lbW9yeT86IG51bWJlclxuICByZmlkVHlwZT86IG51bWJlclxuICBzQUs/OiBudW1iZXJcbiAgc3VwcG9ydDQ/OiBib29sZWFuXG4gIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gIGFUUUI/OiBzdHJpbmdcbiAgYVRSPzogc3RyaW5nXG4gIGJhdWRyYXRlMT86IHN0cmluZ1xuICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgdUlEPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FyZFByb3BlcnRpZXNcblxuICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICByZXN1bHQuYml0UmF0ZVMgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVNcIl1cbiAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgcmVzdWx0LnJmaWRUeXBlID0ganNvbk9iamVjdFtcInJmaWRUeXBlXCJdXG4gICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICByZXN1bHQuc3VwcG9ydE1pZmFyZSA9IGpzb25PYmplY3RbXCJzdXBwb3J0TWlmYXJlXCJdXG4gICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgcmVzdWx0LmJhdWRyYXRlMSA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTFcIl1cbiAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICB0b3RhbEJ5dGVzU2VudD86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gIHByb2Nlc3NUaW1lPzogbnVtYmVyXG4gIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgc2Vzc2lvbkRhdGFTdGF0dXM/OiBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcbiAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gIGFwcGxpY2F0aW9ucz86IEFwcGxpY2F0aW9uW11cbiAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgIHJlc3VsdC50b3RhbEJ5dGVzUmVjZWl2ZWQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1JlY2VpdmVkXCJdXG4gICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZXh0TGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImV4dExlU3VwcG9ydFwiXVxuICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICByZXN1bHQuc2Vzc2lvbkRhdGFTdGF0dXMgPSBSRklEU2Vzc2lvbkRhdGFTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlc3Npb25EYXRhU3RhdHVzXCJdKVxuICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMucHVzaChBcHBsaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cy5wdXNoKFNlY3VyaXR5T2JqZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIHR5cGVOYW1lPzogc3RyaW5nXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5lbGVtZW50cy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUERGNDE3SW5mbyB7XG4gIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgY29sdW1ucz86IG51bWJlclxuICByb3dzPzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQREY0MTdJbmZvXG5cbiAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgIHJlc3VsdC5yb3dzID0ganNvbk9iamVjdFtcInJvd3NcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgQUE/OiBudW1iZXJcbiAgQkFDPzogbnVtYmVyXG4gIENBPzogbnVtYmVyXG4gIFBBPzogbnVtYmVyXG4gIFBBQ0U/OiBudW1iZXJcbiAgVEE/OiBudW1iZXJcbiAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcblxuICAgIHJlc3VsdC5BQSA9IGpzb25PYmplY3RbXCJBQVwiXVxuICAgIHJlc3VsdC5CQUMgPSBqc29uT2JqZWN0W1wiQkFDXCJdXG4gICAgcmVzdWx0LkNBID0ganNvbk9iamVjdFtcIkNBXCJdXG4gICAgcmVzdWx0LlBBID0ganNvbk9iamVjdFtcIlBBXCJdXG4gICAgcmVzdWx0LlBBQ0UgPSBqc29uT2JqZWN0W1wiUEFDRVwiXVxuICAgIHJlc3VsdC5UQSA9IGpzb25PYmplY3RbXCJUQVwiXVxuICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgYmFyY29kZVR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBwZGY0MTdJbmZvPzogUERGNDE3SW5mb1xuICBkYXRhPzogYW55W11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFxuXG4gICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmNoZWNrcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2suZnJvbUpzb24oanNvbk9iamVjdFtcImNoZWNrc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgZWxlbWVudFR5cGU/OiBudW1iZXJcbiAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICBlbGVtZW50RGlhZ25vc2VOYW1lPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFxuXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICByZXN1bHQuZWxlbWVudERpYWdub3NlID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZVwiXVxuICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICBhY3Rpb24/OiBudW1iZXJcbiAgcmVzdWx0cz86IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuICBlcnJvcj86IFRocm93YWJsZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb25cblxuICAgIHJlc3VsdC5hY3Rpb24gPSBqc29uT2JqZWN0W1wiYWN0aW9uXCJdXG4gICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgcmVzdWx0LmVycm9yID0gVGhyb3dhYmxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhyb3dhYmxlIHtcbiAgbG9jYWxpemVkTWVzc2FnZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG4gIHN0cmluZz86IHN0cmluZ1xuICBzdGFja1RyYWNlPzogU3RhY2tUcmFjZUVsZW1lbnRbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVGhyb3dhYmxlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUaHJvd2FibGVcblxuICAgIHJlc3VsdC5sb2NhbGl6ZWRNZXNzYWdlID0ganNvbk9iamVjdFtcImxvY2FsaXplZE1lc3NhZ2VcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cbiAgICByZXN1bHQuc3RhY2tUcmFjZSA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICByZXN1bHQuc3RhY2tUcmFjZS5wdXNoKFN0YWNrVHJhY2VFbGVtZW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgbGluZU51bWJlcj86IG51bWJlclxuICBpc05hdGl2ZU1ldGhvZD86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGZpbGVOYW1lPzogc3RyaW5nXG4gIG1ldGhvZE5hbWU/OiBzdHJpbmdcbiAgc3RyaW5nPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTdGFja1RyYWNlRWxlbWVudCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU3RhY2tUcmFjZUVsZW1lbnRcblxuICAgIHJlc3VsdC5saW5lTnVtYmVyID0ganNvbk9iamVjdFtcImxpbmVOdW1iZXJcIl1cbiAgICByZXN1bHQuaXNOYXRpdmVNZXRob2QgPSBqc29uT2JqZWN0W1wiaXNOYXRpdmVNZXRob2RcIl1cbiAgICByZXN1bHQuY2xhc3NOYW1lID0ganNvbk9iamVjdFtcImNsYXNzTmFtZVwiXVxuICAgIHJlc3VsdC5maWxlTmFtZSA9IGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXVxuICAgIHJlc3VsdC5tZXRob2ROYW1lID0ganNvbk9iamVjdFtcIm1ldGhvZE5hbWVcIl1cbiAgICByZXN1bHQuc3RyaW5nID0ganNvbk9iamVjdFtcInN0cmluZ1wiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICBjaGlwUGFnZT86IG51bWJlclxuICBvdmVyYWxsUmVzdWx0PzogbnVtYmVyXG4gIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICBlbGFwc2VkVGltZT86IG51bWJlclxuICBlbGFwc2VkVGltZVJGSUQ/OiBudW1iZXJcbiAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gIHJmaWRSZXN1bHQ/OiBudW1iZXJcbiAgaGlnaFJlc29sdXRpb24/OiBib29sZWFuXG4gIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgdGV4dFJlc3VsdD86IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgYmFyY29kZVBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgbXJ6UG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFtdXG4gIHJhd1Jlc3VsdD86IHN0cmluZ1xuICBkb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbj86IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uXG4gIHJmaWRTZXNzaW9uRGF0YT86IFJGSURTZXNzaW9uRGF0YVxuICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICBiYXJjb2RlUmVzdWx0PzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG4gIGRvY3VtZW50VHlwZT86IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlW11cblxyXG4gIGdldFRleHRGaWVsZFZhbHVlQnlUeXBlPyh7IGZpZWxkVHlwZSwgbGNpZCA9IDAsIHNvdXJjZSA9IC0xLCBvcmlnaW5hbCA9IGZhbHNlIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ/OiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgb3JpZ2luYWw/OiBib29sZWFuIH0pOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmluZEJ5VHlwZUFuZExjaWQoZmllbGRUeXBlLCBsY2lkKVxyXG4gICAgaWYgKGZpZWxkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIHNvdXJjZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3JpZ2luYWwgPyB2YWx1ZS5vcmlnaW5hbFZhbHVlIDogdmFsdWUudmFsdWVcclxuICB9XHJcblxyXG4gIGdldFRleHRGaWVsZFN0YXR1c0J5VHlwZShmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICByZXR1cm4gZmllbGQgIT0gbnVsbCA/IGZpZWxkLnN0YXR1cyA6IDBcclxuICB9XHJcblxyXG4gIGdldEdyYXBoaWNGaWVsZEltYWdlQnlUeXBlPyh7IGZpZWxkVHlwZSwgc291cmNlID0gLTEsIGxpZ2h0ID0gLTEsIHBhZ2VJbmRleCA9IC0xIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgbGlnaHQ/OiBudW1iZXIsIHBhZ2VJbmRleD86IG51bWJlciB9KTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmdyYXBoaWNSZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgZm91bmRGaWVsZHMgPSBbXVxyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcykge1xyXG4gICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBmaWVsZFR5cGUpIHtcclxuICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlICE9PSAtMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnNvdXJjZVR5cGUgIT09IHNvdXJjZSkge1xyXG4gICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGlnaHQgIT09IC0xKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ubGlnaHRUeXBlICE9PSBsaWdodCkge1xyXG4gICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnBhZ2VJbmRleCAhPT0gcGFnZUluZGV4KSB7XHJcbiAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRGaWVsZHMubGVuZ3RoID4gMCA/IGZvdW5kRmllbGRzWzBdLnZhbHVlIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgZ2V0UXVhbGl0eVJlc3VsdCh7IGltYWdlUXVhbGl0eUNoZWNrVHlwZSwgc2VjdXJpdHlGZWF0dXJlID0gLTEgfTogeyBpbWFnZVF1YWxpdHlDaGVja1R5cGU6IG51bWJlciwgc2VjdXJpdHlGZWF0dXJlPzogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdFN1bSA9IDJcclxuICAgIGlmICh0aGlzLmltYWdlUXVhbGl0eSA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRTdW1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuaW1hZ2VRdWFsaXR5LmltYWdlUXVhbGl0eUxpc3QpIHtcclxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IGltYWdlUXVhbGl0eUNoZWNrVHlwZSkge1xyXG4gICAgICAgIGlmIChzZWN1cml0eUZlYXR1cmUgPT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFN1bSA9IDBcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDEpe1xyXG4gICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmZlYXR1cmVUeXBlID09PSBzZWN1cml0eUZlYXR1cmUpIHtcclxuICAgICAgICAgIHJlc3VsdFN1bSA9IGZpZWxkLnJlc3VsdFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0U3VtXHJcbiAgfVxyXG5cclxuICBmaW5kQnlUeXBlQW5kTGNpZD8odHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XHJcbiAgICBsZXQgZmllbGRcclxuICAgIGNvbnN0IGZvdW5kRmllbGRzID0gW11cclxuXHJcbiAgICBmb3IgKGZpZWxkIG9mIHRoaXMudGV4dFJlc3VsdC5maWVsZHMpIHtcclxuICAgICAgaWYgKGZpZWxkLmZpZWxkVHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgIGZvdW5kRmllbGRzLnB1c2goZmllbGQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmb3VuZEZpZWxkcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmb3VuZEZpZWxkID0gbnVsbFxyXG5cclxuICAgIGZvciAoZmllbGQgb2YgZm91bmRGaWVsZHMpIHtcclxuICAgICAgaWYgKGxjaWQgPT09IDApIHtcclxuICAgICAgICBmb3VuZEZpZWxkID0gZmllbGRcclxuICAgICAgICBpZiAoZmllbGQubGNpZCA9PT0gbGNpZCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGQubGNpZCA9PT0gbGNpZCkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvdW5kRmllbGRcclxuICB9XHJcblxyXG4gIGZpbmRCeVNvdXJjZShmaWVsZDogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQsIHNvdXJjZVR5cGU6IG51bWJlcik6IERvY3VtZW50UmVhZGVyVmFsdWUge1xyXG4gICAgbGV0IHZhbHVlXHJcbiAgICBpZiAoc291cmNlVHlwZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbXJ6VmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDMpXHJcbiAgICAgIGlmIChtcnpWYWwgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBtcnpWYWxcclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxOClcclxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2aXN1YWxWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTcpXHJcbiAgICAgIHJldHVybiB2aXN1YWxWYWwgIT0gbnVsbCA/IHZpc3VhbFZhbCA6IG51bGxcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBmaWVsZC52YWx1ZXMpIHtcclxuICAgICAgaWYgKGl0ZW0uc291cmNlVHlwZSA9PT0gc291cmNlVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyUmVzdWx0cyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICByZXN1bHQuY2hpcFBhZ2UgPSBqc29uT2JqZWN0W1wiY2hpcFBhZ2VcIl1cbiAgICByZXN1bHQub3ZlcmFsbFJlc3VsdCA9IGpzb25PYmplY3RbXCJvdmVyYWxsUmVzdWx0XCJdXG4gICAgcmVzdWx0LnByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXNcIl1cbiAgICByZXN1bHQuZWxhcHNlZFRpbWUgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVcIl1cbiAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgIHJlc3VsdC5tb3JlUGFnZXNBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wibW9yZVBhZ2VzQXZhaWxhYmxlXCJdXG4gICAgcmVzdWx0LnJmaWRSZXN1bHQgPSBqc29uT2JqZWN0W1wicmZpZFJlc3VsdFwiXVxuICAgIHJlc3VsdC5oaWdoUmVzb2x1dGlvbiA9IGpzb25PYmplY3RbXCJoaWdoUmVzb2x1dGlvblwiXVxuICAgIHJlc3VsdC5ncmFwaGljUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJncmFwaGljUmVzdWx0XCJdKVxuICAgIHJlc3VsdC50ZXh0UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJ0ZXh0UmVzdWx0XCJdKVxuICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbiA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0pIHtcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbi5wdXNoKEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lm1yelBvc2l0aW9uID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0pIHtcbiAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJhd1Jlc3VsdCA9IGpzb25PYmplY3RbXCJyYXdSZXN1bHRcIl1cbiAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgcmVzdWx0LnJmaWRTZXNzaW9uRGF0YSA9IFJGSURTZXNzaW9uRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFNlc3Npb25EYXRhXCJdKVxuICAgIHJlc3VsdC5hdXRoZW50aWNpdHlSZXN1bHQgPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXV0aGVudGljaXR5UmVzdWx0XCJdKVxuICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgIHJlc3VsdC5kb2N1bWVudFR5cGUgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBUFRVUkVfVklERU86IDEsXG4gICAgQ0FQVFVSRV9GUkFNRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5zSWRlbnRpdHlEb2N1bWVudDogMTUsXG4gICAgZHRJZGVudGl0eUNhcmRmb3JSZXNpZGVuY2U6IDE2LFxuICAgIGR0VHJhdmVsZG9jdW1lbnQ6IDE3LFxuICAgIGR0T3RoZXI6IDk5LFxuICAgIGR0VmlzYUlEMjogMjksXG4gICAgZHRWaXNhSUQzOiAzMCxcbiAgICBkdFJlZ2lzdHJhdGlvbkNlcnRpZmljYXRlOiAzMSxcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5kdHVjdGlvblBlcm1pdDogNDIsXG4gICAgZHRDb21tZXJjaWFsTmV3UGVybWl0OiA0MyxcbiAgICBkdENvbmNlYWxlZENhcnJ5TGljZW5zZTogNDQsXG4gICAgZHRDb25jZWFsZWRGaXJlYXJtUGVybWl0OiA0NSxcbiAgICBkdENvbmRpdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDQ2LFxuICAgIGR0RGVwYXJ0bWVudE9mVmV0ZXJhbnNBZmZhaXJzSWRlbnRpdHlDYXJkOiA0NyxcbiAgICBkdERpcGxvbWF0aWNEcml2aW5nTGljZW5zZTogNDgsXG4gICAgZHREcml2aW5nTGljZW5zZTogNDksXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXRVbmRlcjIxOiA1MixcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXQ6IDUzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMTg6IDU0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMjE6IDU1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDU2LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiA1NyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogNTgsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZ2lzdGVyZWRPZmZlbmRlcjogNTksXG4gICAgZHREcml2aW5nTGljZW5zZVJlZHRpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWR0aWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiA4NixcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiAxMDMsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5kdHVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlZHRpY3RlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMTQ4LFxuICAgIGR0UmVkdGljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlZHRpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkOiAxNjAsXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lkdGF0aW9uQ2FyZDogMTg1LFxuICAgIGR0QVBFSENhcmQ6IDE4NixcbiAgICBkdENvdXBvbnRvRHJpdmluZ0xpY2Vuc2U6IDE4NyxcbiAgICBkdENyZXdNZW1iZXJDZXJ0aWZpY2F0ZTogMTg4LFxuICAgIGR0RG9jdW1lbnRGb3JSZXR1cm46IDE4OSxcbiAgICBkdEVDYXJkOiAxOTAsXG4gICAgZHRFbXBsb3ltZW50Q2FyZDogMTkxLFxuICAgIGR0SEtTQVJJbW1pZ3JhdGlvbkZvcm06IDE5MixcbiAgICBkdEltbWlncmFudGNhcmQ6IDE5MyxcbiAgICBkdExhYm91ckNhcmQ6IDE5NCxcbiAgICBkdExhaXNzZXpQYXNzZXI6IDE5NSxcbiAgICBkdExhd3llcklkZW50aXR5Q2VydGlmaWNhdGU6IDE5NixcbiAgICBkdExpY2Vuc2VDYXJkOiAxOTcsXG4gICAgZHRQYXNzcG9ydFN0YXRlbGVzczogMTk4LFxuICAgIGR0UGFzc3BvcnRDaGlsZDogMTk5LFxuICAgIGR0UGFzc3BvcnRDb25zdWxhcjogMjAwLFxuICAgIGR0UGFzc3BvcnREaXBsb21hdGljU2VydmljZTogMjAxLFxuICAgIGR0UGFzc3BvcnRPZmZpY2lhbDogMjAyLFxuICAgIGR0UGFzc3BvcnRQcm92aXNpb25hbDogMjAzLFxuICAgIGR0UGFzc3BvcnRTcGVjaWFsOiAyMDQsXG4gICAgZHRQZXJtaXNzaW9udG90aGVMb2NhbEJvcmRlclRyYWZmaWM6IDIwNSxcbiAgICBkdFNFREVTT0xDYXJkOiAyMDcsXG4gICAgZHRTb2NpYWxDYXJkOiAyMDgsXG4gICAgZHRUQkNhcmQ6IDIwOSxcbiAgICBkdFZlaGljbGVQYXNzcG9ydDogMjEwLFxuICAgIGR0V0RvY3VtZW50OiAyMTEsXG4gICAgZHREaXBsb21hdGljSWRlbnRpdHlDYXJkOiAyMTIsXG4gICAgZHRDb25zdWxhcklkZW50aXR5Q2FyZDogMjEzLFxuICAgIGR0SW5jb21lVGF4Q2FyZDogMjE0LFxuICAgIGR0UmVzaWRlbmNlUGVybWl0OiAyMTUsXG4gICAgZHREb2N1bWVudE9mSWRlbnRpdHk6IDIxNixcbiAgICBkdEJvcmRlckNyb3NzaW5nUGVybWl0OiAyMTcsXG4gICAgZHRQYXNzcG9ydExpbWl0ZWRWYWxpZGl0eTogMjE4LFxuICAgIGR0U0lNQ2FyZDogMjE5LFxuICAgIGR0VGF4Q2FyZDogMjIwLFxuICAgIGR0Q29tcGFueUNhcmQ6IDIyMSxcbiAgICBkdERvbWVzdGljUGFzc3BvcnQ6IDIyMixcbiAgICBkdElkZW50aXR5Q2VydGlmaWNhdGU6IDIyMyxcbiAgICBkdFJlc2lkZW50SWRDYXJkOiAyMjQsXG4gICAgZHRBcm1lZEZvcmNlc0lkZW50aXR5Q2FyZDogMjI1LFxuICAgIGR0UHJvZmVzc2lvbmFsQ2FyZDogMjI2LFxuICAgIGR0UmVnaXN0cmF0aW9uU3RhbXA6IDIyNyxcbiAgICBkdERyaXZlckNhcmQ6IDIyOCxcbiAgICBkdERyaXZlclRyYWluaW5nQ2VydGlmaWNhdGU6IDIyOSxcbiAgICBkdFF1YWxpZmljYXRpb25Ecml2aW5nTGljZW5zZTogMjMwLFxuICAgIGR0TWVtYmVyc2hpcENhcmQ6IDIzMSxcbiAgICBkdFB1YmxpY1ZlaGljbGVEcml2ZXJBdXRob3JpdHlDYXJkOiAyMzIsXG4gICAgZHRNYXJpbmVMaWNlbnNlOiAyMzMsXG4gICAgZHRUZW1wb3JhcnlMZWFybmVyRHJpdmluZ0xpY2Vuc2U6IDIzNCxcbiAgICBkdFRlbXBvcmFyeUNvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMjM1LFxuICAgIGR0SW50ZXJpbUluc3RydWN0aW9uYWxQZXJtaXQ6IDIzNixcbiAgICBkdENlcnRpZmljYXRlT2ZDb21wZXRlbmN5OiAyMzcsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mUHJvZmljaWVuY3k6IDIzOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBJRDNfeDI6IDUsXG4gICAgQ1VTVE9NOiAxMDAwLFxuICAgIEZMRVhJQkxFOiAxMDAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyQWN0aW9uID0ge1xuICAgIENPTVBMRVRFOiAxLFxuICAgIFBST0NFU1M6IDAsXG4gICAgQ0FOQ0VMOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIE5PVElGSUNBVElPTjogNSxcbiAgICBQUk9DRVNTX1dISVRFX1VWX0lNQUdFUzogNixcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja0RpYWdub3NlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTUzogMSxcbiAgICBJTlZBTElEX0lOUFVUX0RBVEE6IDIsXG4gICAgSU5URVJOQUxfRVJST1I6IDMsXG4gICAgRVhDRVBUSU9OX0lOX01PRFVMRTogNCxcbiAgICBVTkNFUlRBSU5fVkVSSUZJQ0FUSU9OOiA1LFxuICAgIE5FQ0VTU0FSWV9JTUFHRV9OT1RfRk9VTkQ6IDcsXG4gICAgUEhPVE9fU0lERVNfTk9UX0ZPVU5EOiA4LFxuICAgIElOVkFMSURfQ0hFQ0tTVU06IDEwLFxuICAgIFNZTlRBWF9FUlJPUjogMTEsXG4gICAgTE9HSUNfRVJST1I6IDEyLFxuICAgIFNPVVJDRVNfQ09NUEFSSVNPTl9FUlJPUjogMTMsXG4gICAgRklFTERTX0NPTVBBUklTT05fTE9HSUNfRVJST1I6IDE0LFxuICAgIElOVkFMSURfRklFTERfRk9STUFUOiAxNSxcbiAgICBUUlVFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMSxcbiAgICBGSVhFRF9QQVRURVJOX0VSUk9SOiAyMixcbiAgICBMT1dfQ09OVFJBU1RfSU5fSVJfTElHSFQ6IDIzLFxuICAgIElOQ09SUkVDVF9CQUNLR1JPVU5EX0xJR0hUOiAyNCxcbiAgICBCQUNLR1JPVU5EX0NPTVBBUklTT05fRVJST1I6IDI1LFxuICAgIElOQ09SUkVDVF9URVhUX0NPTE9SOiAyNixcbiAgICBQSE9UT19GQUxTRV9MVU1JTklTQ0VOQ0U6IDI3LFxuICAgIFRPT19NVUNIX1NISUZUOiAyOCxcbiAgICBGSUJFUlNfTk9UX0ZPVU5EOiAzMCxcbiAgICBUT09fTUFOWV9PQkpFQ1RTOiAzMSxcbiAgICBTUEVDS1NfSU5fVVY6IDMzLFxuICAgIFRPT19MT1dfUkVTT0xVVElPTjogMzQsXG4gICAgSU5WSVNJQkxFX0VMRU1FTlRfUFJFU0VOVDogNDAsXG4gICAgVklTSUJMRV9FTEVNRU5UX0FCU0VOVDogNDEsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfQ09MT1JFRDogNDIsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfR1JBWVNDQUxFOiA0MyxcbiAgICBVVl9EVUxMX1BBUEVSX01SWjogNTAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX01SWjogNTEsXG4gICAgVVZfRFVMTF9QQVBFUl9QSE9UTzogNTIsXG4gICAgVVZfRFVMTF9QQVBFUl9CTEFOSzogNTMsXG4gICAgVVZfRFVMTF9QQVBFUl9FUlJPUjogNTQsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX0JMQU5LOiA1NSxcbiAgICBCQURfQVJFQV9JTl9BWElBTDogNjAsXG4gICAgRkFMU0VfSVBJX1BBUkFNRVRFUlM6IDY1LFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfSElHSExJR0hUX0lSOiA4MCxcbiAgICBPVklfSVJfSU5WSVNJQkxFOiA5MCxcbiAgICBPVklfSU5TVUZGSUNJRU5UX0FSRUE6IDkxLFxuICAgIE9WSV9DT0xPUl9JTlZBUklBQkxFOiA5MixcbiAgICBPVklfQkFEX0NPTE9SX0ZST05UOiA5MyxcbiAgICBPVklfQkFEX0NPTE9SX1NJREU6IDk0LFxuICAgIE9WSV9XSURFX0NPTE9SX1NQUkVBRDogOTUsXG4gICAgT1ZJX0JBRF9DT0xPUl9QRVJDRU5UOiA5NixcbiAgICBIT0xPR1JBTV9FTEVNRU5UX0FCU0VOVDogMTAwLFxuICAgIEhPTE9HUkFNX1NJREVfVE9QX0lNQUdFU19BQlNFTlQ6IDEwMSxcbiAgICBIT0xPR1JBTV9FTEVNRU5UX1BSRVNFTlQ6IDEwMixcbiAgICBQSE9UT19QQVRURVJOX0lOVEVSUlVQVEVEOiAxMTAsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEOiAxMTEsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfQ09MT1JTOiAxMTIsXG4gICAgUEhPVE9fUEFUVEVSTl9JUl9WSVNJQkxFOiAxMTMsXG4gICAgUEhPVE9fUEFUVEVSTl9OT1RfSU5URVJTRUNUOiAxMTQsXG4gICAgUEhPVE9fU0laRV9JU19XUk9ORzogMTE1LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5WQUxJRF9DT0xPUjogMTE2LFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRF9WRVJUOiAxMTcsXG4gICAgUEhPVE9fUEFUVEVSTl9QQVRURVJOX05PVF9GT1VORDogMTE4LFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTE5LFxuICAgIFBIT1RPX0lTX05PVF9SRUNUQU5HTEU6IDEyMCxcbiAgICBQSE9UT19DT1JORVJTX0lTX1dST05HOiAxMjEsXG4gICAgRE9DVU1FTlRfSVNfQ0FOQ0VMTElORzogMTIyLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0JMVUU6IDEzMCxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9HUkVFTjogMTMxLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX1JFRDogMTMyLFxuICAgIFRFWFRfU0hPVUxEX0JFX0JMQUNLOiAxMzMsXG4gICAgQkFSQ09ERV9XQVNfUkVBRF9XSVRIX0VSUk9SUzogMTQwLFxuICAgIEJBUkNPREVfREFUQV9GT1JNQVRfRVJST1I6IDE0MSxcbiAgICBCQVJDT0RFX1NJWkVfUEFSQU1TX0VSUk9SOiAxNDIsXG4gICAgTk9UX0FMTF9CQVJDT0RFU19SRUFEOiAxNDMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9QT1JUUkFJVFNfRElGRkVSOiAxNTAsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX1JFUExZOiAxNTEsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9TRVJWSUNFX0VSUk9SOiAxNTIsXG4gICAgUFBPUlRSQUlUX0NPTVBBUklTT05fTk9UX0VOT1VHSF9JTUFHRVM6IDE1MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX0xJVkVfUEhPVE86IDE1NCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfTElDRU5TRTogMTU1LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fUE9SVFJBSVRfREVURUNURUQ6IDE1NixcbiAgICBNT0JJTEVfSU1BR0VTX1VOU1VJVEFCTEVfTElHSFRfQ09ORElUSU9OUzogMTYwLFxuICAgIE1PQklMRV9JTUFHRVNfV0hJVEVfVVZfTk9fRElGRkVSRU5DRTogMTYxLFxuICAgIExBU1RfRElBR05PU0VfVkFMVUU6IDE2Mixcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja1Jlc3VsdCA9IHtcbiAgICBDSF9DSEVDS19FUlJPUjogMCxcbiAgICBDSF9DSEVDS19PSzogMSxcbiAgICBDSF9DSEVDS19XQVNfTk9UX0RPTkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlR3JhcGhpY0ZpZWxkVHlwZSA9IHtcbiAgICBHRl9QT1JUUkFJVDogMjAxLFxuICAgIEdGX0ZJTkdFUlBSOiAyMDIsXG4gICAgR0ZfRVlFOiAyMDMsXG4gICAgR0ZfU0lHTkFUVVJFOiAyMDQsXG4gICAgR0ZfQkFSX0NPREU6IDIwNSxcbiAgICBHRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDogMjA2LFxuICAgIEdGX0RPQ1VNRU5UX0lNQUdFOiAyMDcsXG4gICAgR0ZfQ09MT1JfRFlOQU1JQzogMjA5LFxuICAgIEdGX0dIT1NUX1BPUlRSQUlUOiAyMTAsXG4gICAgR0ZfU1RBTVA6IDIxMSxcbiAgICBHRl9QT1JUUkFJVF9PRl9DSElMRDogMjEyLFxuICAgIEdGX09USEVSOiAyNTAsXG4gICAgR0ZfRklOR0VSX0xFRlRfVEhVTUI6IDMwMCxcbiAgICBHRl9GSU5HRVJfTEVGVF9JTkRFWDogMzAxLFxuICAgIEdGX0ZJTkdFUl9MRUZUX01JRERMRTogMzAyLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1JJTkc6IDMwMyxcbiAgICBHRl9GSU5HRVJfTEVGVF9MSVRUTEU6IDMwNCxcbiAgICBHRl9GSU5HRVJfUklHSFRfVEhVTUI6IDMwNSxcbiAgICBHRl9GSU5HRVJfUklHSFRfSU5ERVg6IDMwNixcbiAgICBHRl9GSU5HRVJfUklHSFRfTUlERExFOiAzMDcsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1JJTkc6IDMwOCxcbiAgICBHRl9GSU5HRVJfUklHSFRfTElUVExFOiAzMDksXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSUFI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluZ2VycHJpbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0VZRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJcmlzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TSUdOQVRVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9CQVJfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYXJjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9vZiBvZiBjaXRpemVuc2hpcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRE9DVU1FTlRfSU1BR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgaW1hZ2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0NPTE9SX0RZTkFNSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29sb3IgZHluYW1pY3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0dIT1NUX1BPUlRSQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdob3N0IHBvcnRyYWl0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TVEFNUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGFtcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgb2YgY2hpbGRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX09USEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9USFVNQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IGluZGV4IGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfUklORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBsaXR0bGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgdGh1bWJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9NSURETEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgcmluZyBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlID0ge1xuICAgIElRQ19JTUFHRV9HTEFSRVM6IDAsXG4gICAgSVFDX0lNQUdFX0ZPQ1VTOiAxLFxuICAgIElRQ19JTUFHRV9SRVNPTFVUSU9OOiAyLFxuICAgIElRQ19JTUFHRV9DT0xPUk5FU1M6IDMsXG4gICAgSVFDX1BFUlNQRUNUSVZFOiA0LFxuICAgIElRQ19CT1VORFM6IDUsXG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfVW5sb2FkOiAxMjEwNyxcbiAgICBlUENfUHJvY01ncl9DaGVja0RhdGFiYXNlOiAxMjEwOSxcbiAgICBlUENfUHJvY01ncl9Db21wYXJlUG9ydHJhaXRzOiAxMjExMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSZXF1ZXN0Q29tbWFuZCA9IHtcbiAgICBlUmVxQ21kX1JGaWRfU2VuZERhdGE6IDEwMCxcbiAgICBlUmVxQ21kX1JGaWRfTm90aWZ5OiAxMDEsXG4gICAgZVJlcUNtZF9SRmlkX0dldERhdGFGb3JTY2VuYXJpbzogMTAyLFxuICAgIGVSZXFDbWRfVG9yY2hfR2V0VVZGb3RvOiAyMDAsXG4gICAgZVJlcUNtZF9JbnRlcm5ldFNlbmQ6IDMwMCxcbiAgICBlUmVxQ21kX0dldEd1aWQ6IDQwMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBBQ1BUX1VOREVGSU5FRDogMCxcbiAgICBBQ1BUX0JBQzogMSxcbiAgICBBQ1BUX1BBQ0U6IDIsXG4gICAgQUNQVF9DQTogMyxcbiAgICBBQ1BUX1RBOiA0LFxuICAgIEFDUFRfQUE6IDUsXG4gICAgQUNQVF9SSTogNixcbiAgICBBQ1BUX0NBUkRfSU5GTzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUgPSB7XG4gICAgYXB0VW5kZWZpbmVkOiAwLFxuICAgIGFwdFN0YW5kYXJkOiAxLFxuICAgIGFwdEFkdmFuY2VkOiAyLFxuICAgIGFwdEdlbmVyYWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0NlcnRpZmljYXRlVHlwZSA9IHtcbiAgICBDVF9VTkRFRklORUQ6IDAsXG4gICAgQ1RfQ1NDQTogMSxcbiAgICBDVF9DU0NBX0xJTks6IDIsXG4gICAgQ1RfRFM6IDMsXG4gICAgQ1RfTUxTOiA0LFxuICAgIENUX0RFVl9MUzogNSxcbiAgICBDVF9ERUZfTFM6IDYsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9EYXRhRmlsZV9UeXBlID0ge1xuICAgIERGVF9VTlNQRUNJRklFRDogMCxcbiAgICBERlRfUEFTU1BPUlRfREcxOiAxLFxuICAgIERGVF9QQVNTUE9SVF9ERzI6IDIsXG4gICAgREZUX1BBU1NQT1JUX0RHMzogMyxcbiAgICBERlRfUEFTU1BPUlRfREc0OiA0LFxuICAgIERGVF9QQVNTUE9SVF9ERzU6IDUsXG4gICAgREZUX1BBU1NQT1JUX0RHNjogNixcbiAgICBERlRfUEFTU1BPUlRfREc3OiA3LFxuICAgIERGVF9QQVNTUE9SVF9ERzg6IDgsXG4gICAgREZUX1BBU1NQT1JUX0RHOTogOSxcbiAgICBERlRfUEFTU1BPUlRfREcxMDogMTAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTE6IDExLFxuICAgIERGVF9QQVNTUE9SVF9ERzEyOiAxMixcbiAgICBERlRfUEFTU1BPUlRfREcxMzogMTMsXG4gICAgREZUX1BBU1NQT1JUX0RHMTQ6IDE0LFxuICAgIERGVF9QQVNTUE9SVF9ERzE1OiAxNSxcbiAgICBERlRfUEFTU1BPUlRfREcxNjogMTYsXG4gICAgREZUX1BBU1NQT1JUX0RHMTc6IDE3LFxuICAgIERGVF9QQVNTUE9SVF9ERzE4OiAxOCxcbiAgICBERlRfUEFTU1BPUlRfREcxOTogMTksXG4gICAgREZUX1BBU1NQT1JUX0RHMjA6IDIwLFxuICAgIERGVF9QQVNTUE9SVF9TT0Q6IDIxLFxuICAgIERGVF9QQVNTUE9SVF9DVkNBOiAyMixcbiAgICBERlRfUEFTU1BPUlRfQ09NOiAyMyxcbiAgICBERlRfSURfREcxOiAxMDEsXG4gICAgREZUX0lEX0RHMjogMTAyLFxuICAgIERGVF9JRF9ERzM6IDEwMyxcbiAgICBERlRfSURfREc0OiAxMDQsXG4gICAgREZUX0lEX0RHNTogMTA1LFxuICAgIERGVF9JRF9ERzY6IDEwNixcbiAgICBERlRfSURfREc3OiAxMDcsXG4gICAgREZUX0lEX0RHODogMTA4LFxuICAgIERGVF9JRF9ERzk6IDEwOSxcbiAgICBERlRfSURfREcxMDogMTEwLFxuICAgIERGVF9JRF9ERzExOiAxMTEsXG4gICAgREZUX0lEX0RHMTI6IDExMixcbiAgICBERlRfSURfREcxMzogMTEzLFxuICAgIERGVF9JRF9ERzE0OiAxMTQsXG4gICAgREZUX0lEX0RHMTU6IDExNSxcbiAgICBERlRfSURfREcxNjogMTE2LFxuICAgIERGVF9JRF9ERzE3OiAxMTcsXG4gICAgREZUX0lEX0RHMTg6IDExOCxcbiAgICBERlRfSURfREcxOTogMTE5LFxuICAgIERGVF9JRF9ERzIwOiAxMjAsXG4gICAgREZUX0lEX0RHMjE6IDEyMSxcbiAgICBERlRfRExfQ09NOiAxNTAsXG4gICAgREZUX0RMX0RHMTogMTUxLFxuICAgIERGVF9ETF9ERzI6IDE1MixcbiAgICBERlRfRExfREczOiAxNTMsXG4gICAgREZUX0RMX0RHNDogMTU0LFxuICAgIERGVF9ETF9ERzU6IDE1NSxcbiAgICBERlRfRExfREc2OiAxNTYsXG4gICAgREZUX0RMX0RHNzogMTU3LFxuICAgIERGVF9ETF9ERzg6IDE1OCxcbiAgICBERlRfRExfREc5OiAxNTksXG4gICAgREZUX0RMX0RHMTA6IDE2MCxcbiAgICBERlRfRExfREcxMTogMTYxLFxuICAgIERGVF9ETF9ERzEyOiAxNjIsXG4gICAgREZUX0RMX0RHMTM6IDE2MyxcbiAgICBERlRfRExfREcxNDogMTY0LFxuICAgIERGVF9ETF9TT0Q6IDE2NSxcbiAgICBERlRfRExfQ0U6IDE2NixcbiAgICBERlRfRExfQ1ZDQTogMTY3LFxuICAgIERGVF9QQUNFX0NBUkRBQ0NFU1M6IDIwMCxcbiAgICBERlRfUEFDRV9DQVJEU0VDVVJJVFk6IDIwMSxcbiAgICBERlRfUEFDRV9DSElQU0VDVVJJVFk6IDIwMixcbiAgICBERlRfTUlGQVJFX0RBVEE6IDMwMCxcbiAgICBERlRfTUlGQVJFX1ZBTElESVRZOiAzMDEsXG4gICAgREZUX0FVVEhFTlRJQ0lUWVYyOiAzMDIsXG4gICAgREZUX0FUUjogNDAwLFxuICAgIERGVF9FU0lHTl9QSzogNTAwLFxuICAgIERGVF9FU0lHTl9TSUdORUREQVRBOiA1MDEsXG4gICAgREZUX0NFUlRJRklDQVRFOiA2MDAsXG4gICAgREZUX01BU1RFUkxJU1Q6IDYwMSxcbiAgICBERlRfREVGRUNUTElTVDogNjAyLFxuICAgIERGVF9ERVZJQVRJT05MSVNUOiA2MDMsXG4gICAgREZUX0FQUF9ESVJFQ1RPUlk6IDcwMCxcbiAgICBERlRfU0VTU0lPTjogNzAxLFxuICAgIERGVF9MT0dEQVRBOiA3MDIsXG4gICAgREZUX0NISVBfUFJPUEVSVElFUzogNzAzLFxuICAgIERGVF9VU0VSREVGSU5FRDogMTAwMCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9NSUZBUkVfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DT01cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFjaGluZSBSZWFkYWJsZSBab25lIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHR5cGVcIiArIFwiIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRleHQgZGF0YSBlbGVtZW50cyAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIiArIFwiIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgaG9sZGVyIGluZm9ybWF0aW9uIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmluZ2VycHJpbnQocykgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIiArIFwiIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IGRldGFpbHMgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiICsgXCIgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgaW1hZ2UgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQocykgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCIgKyBcIiAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiICsgXCIgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCIgKyBcIiAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGhcIiArIFwiIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gSXJpcyBEYXRhIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoXCIgKyBcIiAoREc5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIE90aGVyIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCIgKyBcIiAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBwZXJzb25hbCBkZXRhaWwocykgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIiArIFwiIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZG9tZXN0aWMgZGF0YSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZGl0aW9uYWwgZG9jdW1lbnQgZGV0YWlscyAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9uLW1hdGNoIGFsZXJ0IChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsKHMpIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY3RpdmUgQXV0aGVudGljYXRpb24gaW5mbyAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb24ocykgdG8gbm90aWZ5IChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMTdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIiArIFwiIChERzE4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxOVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCIgKyBcIiAoREcxOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMjBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiICsgXCIgKERHMjApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWxzXCIgKyBcIiAoREcyMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9TT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuU09EXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfQ1ZDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DVkNBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTUlGQVJFX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0FSREFDQ0VTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DYXJkQWNjZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFDRV9DQVJEU0VDVVJJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZFNlY3VyaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFDRV9DSElQU0VDVVJJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2hpcFNlY3VyaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQ0VSVElGSUNBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9BUFBfRElSRUNUT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwcCBkaXJlY3RvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9BVFI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0FUUlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0NISVBfUFJPUEVSVElFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQ0hJUF9QUk9QRVJUSUVTXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfREVGRUNUTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVGRUNUTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RFVklBVElPTkxJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RFVklBVElPTkxJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRExfQ0VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9DVkNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DVkNBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRVNJR05fUEs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0VTSUdOX1BLXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRVNJR05fU0lHTkVEREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fU0lHTkVEREFUQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0xPR0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0xPR0RBVEFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9NQVNURVJMSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9NQVNURVJMSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfU0VTU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfU0VTU0lPTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1VOU1BFQ0lGSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9VTlNQRUNJRklFRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1VTRVJERUZJTkVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9VU0VSREVGSU5FRFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9Ob3RpZmljYXRpb25BbmRFcnJvckNvZGVzID0ge1xuICAgIFJGSURfTk9USUZJQ0FUSU9OX0VSUk9SOiA2NTUzNixcbiAgICBSRklEX05PVElGSUNBVElPTl9ET0NVTUVOVF9SRUFEWTogNjU1MzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDQ6IDY1NTM5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JFQURfUFJPVE9DT0wzOiA2NTU0NixcbiAgICBSRklEX05PVElGSUNBVElPTl9QUk9HUkVTUzogNjU1NDcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVEFfU1RFUDogNjU1NTAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fUkVRVUlSRUQ6IDY1NTUxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0lTT19FUlJPUjogNjk2MzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfUkVRVUVTVDogNzc4MjQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fRVNUQUJMSVNIRUQ6IDgxOTM1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0RJU0NPTk5FQ1RFRDogMTMxMDcyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0xJU1RfQ0hBTkdFRDogMTMxMDczLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfUkVDRUlWRUQ6IDEzMTA3NCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfVElNRTogMTMxMDc1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfREFUQV9SRUNFSVZFRDogMTMxMDc2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfU0VOVDogMTMxMDc3LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19TUEVFRDogMTMxMDc4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUFJPQ0VTU19USU1FOiAxMzEwNzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0lORzogMTMxMDgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRVhUX0xFTkdUSF9TVVBQT1JUOiAxMzEwODgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfQ0VSVElGSUNBVEVfQ0hBSU46IDEzMTA4OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTl9JVEVNOiAxMzEwOTAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU0NFTkFSSU86IDEzMTEwNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURJTkdfREFUQUdST1VQOiAxOTY2MDgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX05PVF9GT1VORDogMjYyMTQ0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRU5EX09GX0ZJTEU6IDMyNzY4MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfQUNDRVNTX0RFTklFRDogMzkzMjE2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQVBQTElDQVRJT05fU0VMRUNURUQ6IDQ1ODc1MixcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfU1RBUlQ6IDUyNDI4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfRklOSVNIOiA1ODk4MjQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfU0VDVVJJVFlfT0JKRUNUX0NIRUNLOiA2NTUzNjAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfRklMRV9DSEVDSzogNzIwODk2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVVBEQVRJTkdfREFUQUdST1VQOiA3ODY0MzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQVVYSUxJQVJZX0RBVEFfVkFMSURBVElPTjogODUxOTY4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JJX1NFQ1RPUl9JRDogOTE3NTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0JJT01FVFJJQ1NfRU1QVFlfUExBQ0VIT0xERVI6IDk4MzA0MCxcbiAgICBSRklEX0VSUk9SX05PX0VSUk9SOiAxLFxuICAgIFJGSURfRVJST1JfQUxSRUFEWV9ET05FOiAyLFxuICAgIFJGSURfTEFZRVI2X0ZJTEVfRU9GMTogLTIxNDc0NTg0MzAsXG4gICAgUkZJRF9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEOiAtMjE0NzQ1ODQyOSxcbiAgICBSRklEX0xBWUVSNl9QV0RfQkxPQ0tFRDogLTIxNDc0NTgxMTIsXG4gICAgUkZJRF9MQVlFUjZfUFdEX1NVU1BFTkRFRDogLTIxNDc0NTgxMTEsXG4gICAgUkZJRF9MQVlFUjZfUFdEX0JMT0NLRURfMjogLTIxNDc0NTY2MzcsXG4gICAgUkZJRF9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEXzI6IC0yMTQ3NDU2NjM2LFxuICAgIFJGSURfTEFZRVI2X1BXRF9TVVNQRU5ERURfMjogLTIxNDc0NTY2MzUsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9BVF9GQUlMVVJFOiAtMjA0NjgxOTU3OCxcbiAgICBSRklEX0xBWUVSNl9JTkNPUlJFQ1RfUEFSQU1TOiAtMjE0NzQ1NjM4NCxcbiAgICBSRklEX0xBWUVSNl9GSUxFX05PVF9GT1VORDogLTIxNDc0NTYzODIsXG4gICAgUkZJRF9MQVlFUjZfTk9fUkVGRVJFTkNFX0RBVEE6IC0yMTQ3NDU2Mzc2LFxuICAgIFJGSURfTEFZRVI2X0ZJTEVfRU9GMjogLTIxNDc0NTYyNTYsXG4gICAgUkZJRF9FcnJvcl9HcmFwaE1hbmFnZXI6IC0yMTQ3NDE4MTEyLFxuICAgIFJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDogLTIxNDc0MTgxMTEsXG4gICAgUkZJRF9FUlJPUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzQxODExMCxcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfUEFSQU1FVEVSOiAtMjE0NzQxODEwOCxcbiAgICBSRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDogLTIxNDc0MTgxMDcsXG4gICAgUkZJRF9FcnJvcl9Ob3RFbm91Z2hNZW1vcnk6IC0yMTQ3NDE4MTA2LFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6IC0yMTQ3NDE4MTA0LFxuICAgIFJGSURfRVJST1JfVU5LTk9XTl9DT01NQU5EOiAtMjE0NzQxODEwMyxcbiAgICBSRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6IC0yMTQ3NDE4MTAyLFxuICAgIFJGSURfRVJST1JfQlVTWTogLTIxNDc0MTgxMDEsXG4gICAgUkZJRF9FUlJPUl9PTERfRklSTVdBUkU6IC0yMTQ3NDE4MTAwLFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRUQ6IC0yMTQ3MzUyNTc2LFxuICAgIFJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTogLTIxNDczNTI1NzUsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBTlRfQ09OTkVDVF9DQVJEOiAtMjE0NzM1MjU3NCxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19OT1RfQ09OTkVDVEVEOiAtMjE0NzM1MjU3MyxcbiAgICBSRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDogLTIxNDczNTI1NzIsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfQlVTWTogLTIxNDczNTI1NzEsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRF9TX0NBUkQ6IC0yMTQ3MzUyNTcwLFxuICAgIFJGSURfRVJST1JfUENTQ19FWFRfTEVfRkFJTEVEOiAtMjE0NzM1MjU2MCxcbiAgICBSRklEX0xBWUVSNl9QV0RfRkFJTEVEOiAtMjE0NjQwOTUzNixcbiAgICBSRklEX0VSUk9SX05PVF9QRVJGT1JNRUQ6IC0yMDk3MTUyMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JU19DTE9TRUQ6IC0yMDk3MTUxOTk5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046IC0yMDk3MTUxOTk4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX1VOS05PV046IC0yMDk3MTUxOTg0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX0JBRF9DRVJUSUZJQ0FURTogLTIwOTcxNTE5ODMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5ODIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOS05PV046IC0yMDk3MTUxOTgxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QUk9DRURVUkVfVFlQRV9VTlNVUFBPUlRFRDogLTIwOTcxNTE5ODAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6IC0yMDk3MTUxOTc5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NzgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5TVVBQT1JURURfU01fVFlQRTogLTIwOTcxNTE5NzcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6IC0yMDk3MTUxOTc2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1JFU1RSSUNURUQ6IC0yMDk3MTUxOTc1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9EQVRBOiAtMjA5NzE1MTk3NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9OT1RfU0VUOiAtMjA5NzE1MTk3MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFdEX01BTkFHRU1FTlRfTk9UX0FVVEhPUklaRUQ6IC0yMDk3MTUxOTcyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9VTktOT1dOX1RZUEU6IC0yMDk3MTUxOTY4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTogLTIwOTcxNTE5NjcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1BBQ0U6IC0yMDk3MTUxOTY2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQV9LRVlTOiAtMjA5NzE1MTk2NSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6IC0yMDk3MTUxOTY0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQTogLTIwOTcxNTE5NjMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0lOQ09SUkVDVF9PUFRJT05fQ0E6IC0yMDk3MTUxOTYyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9DQV9GQUlMRUQ6IC0yMDk3MTUxOTYxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9UQV9GQUlMRUQ6IC0yMDk3MTUxOTYwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9BQV9GQUlMRUQ6IC0yMDk3MTUxOTU5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SSV9GQUlMRUQ6IC0yMDk3MTUxOTU4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAtMjA5NzE1MTk1MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfSEFTSF9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfRVhQSVJZOiAtMjA5NzE1MTkzNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0JJUlRIOiAtMjA5NzE1MTkzNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9DT01NVU5JVFlfSUQ6IC0yMDk3MTUxOTM0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUkVRVUlSRVNfQVBQX1NFTEVDVElPTjogLTIwOTcxNTE5MjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1NFVDogLTIwOTcxNTE5MTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1ZFUklGSUVEOiAtMjA5NzE1MTkxOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTA0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX05PVF9FTk9VR0hfREFUQTogLTIwOTcwODY0NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MDIwOTI4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTogLTIwOTY5NTUzOTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njg4OTg1NixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9XUk9OR19UQUc6IC0yMDk2ODI0MzIwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6IC0yMDk2NzU4Nzg0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfUkVBRF9EQVRBOiAtMjA5NjY5MzI0OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOiAtMjA5NjYyNzcxMixcbiAgICBSRklEX0xBWUVSNl9TRUNVUklUWV9NQU5BR0VSOiAtMjA0NjgyMDM1MixcbiAgICBSRklEX0xBWUVSNl9BUFBfU0VMRUNUSU9OX0ZBSUxVUkU6IC0yMDQ2ODIwMzUxLFxuICAgIFJGSURfTEFZRVI2X01VVFVBTF9BVVRIX01BQ19GQUlMOiAtMjA0NjgyMDA5NixcbiAgICBSRklEX0xBWUVSNl9NVVRVQUxfQVVUSF9FTkNfRkFJTDogLTIwNDY4MjAwOTUsXG4gICAgUkZJRF9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRTogLTIwNDY4MjAwOTQsXG4gICAgUkZJRF9MQVlFUjZfU01fRE84RV9NSVNTSU5HOiAtMjA0NjgxOTg0MCxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzg3X01JU1NJTkc6IC0yMDQ2ODE5ODM5LFxuICAgIFJGSURfTEFZRVI2X1NNX0RPOTlfTUlTU0lORzogLTIwNDY4MTk4MzgsXG4gICAgUkZJRF9MQVlFUjZfU01fTUFDX0lOQ09SUkVDVDogLTIwNDY4MTk4MzcsXG4gICAgUkZJRF9MQVlFUjZfU01fRE84N19JTkNPUlJFQ1Q6IC0yMDQ2ODE5ODM2LFxuICAgIFJGSURfTEFZRVI2X05PTl9UTFZfUkVTUE9OU0VfREFUQTogLTIwNDY4MTk1ODQsXG4gICAgUkZJRF9MQVlFUjZfV1JPTkdfUk5EX0lDQ19MRU5HVEg6IC0yMDQ2ODE5NTgzLFxuICAgIFJGSURfTEFZRVI2X0lOVF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTgyLFxuICAgIFJGSURfTEFZRVI2X01TRV9TRVRfS0FUX0ZBSUxVUkU6IC0yMDQ2ODE5NTgxLFxuICAgIFJGSURfTEFZRVI2X01TRV9TRVRfRFNUX0ZBSUxVUkU6IC0yMDQ2ODE5NTgwLFxuICAgIFJGSURfTEFZRVI2X1BTT19DRVJUSUZJQ0FURV9GQUlMVVJFOiAtMjA0NjgxOTU3OSxcbiAgICBSRklEX0xBWUVSNl9HRVRfQ0hBTExFTkdFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc3LFxuICAgIFJGSURfTEFZRVI2X0VYVF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTc2LFxuICAgIFJGSURfTEFZRVI2X0dFTkVSQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgxOTU3NSxcbiAgICBSRklEX0VSUk9SX0ZBSUxFRDogLTEsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9LXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IE5vdCBlbm91Z2ggZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOOiBDb250ZW50cyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogRW5jYXAgY29udGVudHMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERpZ2VzdCBhbGdvcml0aG0gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBERyBoYXNoZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluZm8gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTTiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogSXNzdWVyIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFZhbGlkaXR5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFN1YmplY3QgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBQSyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFZlcnNpb24gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ24gYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVW5zaWduZWQgYXR0cmlidXRlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBMRFMgb2JqZWN0OiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lZCBkYXRhOiBTaWduZXIgaW5mbyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmVyIGluZm8gY2Fubm90IGZpbmQgY2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBwdWJsaWMga2V5IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogTWVzc2VkIGFsZ29yaXRobXNcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFB1YmxpYyBrZXkgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgbm90IGRlZmluZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBjaGVjayBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIERHOiBXcm9uZyBUYWdcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogU3ltbWV0cmljIEN5cGhlciBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogS2V5IEFncmVlbWVudCBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRXBoZW1lcmFsIEtleXMgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgRGVjb2RlIE5vbmNlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBTaGFyZWQgU2VjcmV0IENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgRm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBFcGhlbWVyYWwgS2V5cyBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIENhbm5vdCBQZXJmb3JtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBOb24tTWF0Y2hpbmcgQXV0aCBUb2tlbnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgSW5mb1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgRG9tYWluIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBLZXkgQWdyZWVtZW50IENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBFcGhlbWVyYWwgS2V5cyBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogU2hhcmVkIFNlY3JldCBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogTm9uLU1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBDYW5ub3QgQnVpbGQgQ2VydGlmaWNhdGUgQ2hhaW5cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBDYW5ub3QgRmluZCBJUyBQcml2YXRlIEtleVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogU2lnbmF0dXJlIEJ1aWxkaW5nIEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogSW52YWxpZCBLZXkgQWxnb3JpdGhtIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IEluY29ycmVjdCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBVbmRlZmluZWQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFNpZ25hdHVyZSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIHJlY292ZXJ5IHNjaGVtZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IEluY29ycmVjdCBUcmFpbGVyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogVW5zdXBwb3J0ZWQgRGlnZXN0IEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgQ2Fubm90IEZpbmRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvbXBsZXRlIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBNaXNzaW5nIG1hbmRhdG9yeSBkYXRhIFBLXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIQVQgdW5zdXBwb3J0ZWQgdGVybWluYWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgaW52YWxpZCBwYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENQSSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENBUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSFIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWQgZnJvbSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIHRvIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogRXh0ZW5zaW9ucyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IE5vbi1tYXRjaGluZyBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdGltZSBjb2RpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB1c2Ugb2YgZ2VuZXJhbGl6ZWQgdGltZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBFbXB0eSBzdWJqZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBjcml0aWNhbCBleHRlbnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBkZWZhdWx0IENTQ0Egcm9sZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRm9yY2VkIERlZmF1bHQgRFMgcm9sZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGlzc3VlciBzdWJqZWN0IERTXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBEdXBsaWNhdGluZyBleHRlbnNpb25zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmVyc2lvbiBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb21tb24gbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY291bnRyeSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY29tbW9uIG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVc2luZyBub24tY29tcGxpYW50IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgcHVibGljIGtleSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBNaXNzZWQgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2UgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IHVzYWdlIDFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IHVzYWdlIDJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgcGF0aCBMZW5DIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIGluY29ycmVjdCB1c2FnZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBLZXkgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3Qga2V5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIEROIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIEROIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBNaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBEb2MgdHlwZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBEb2MgdHlwZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRGVydCBwb2xpY2llcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDZXJ0IHBvbGljaWVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENlcnQgcG9saWNpZXMgcG9saWN5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IExEUyB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBMRFMgdmVyc2lvbiBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IFVuaWNvZGUgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogVW5pY29kZSB2ZXJzaW9uIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gdW5leHBlY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IExEUyB2ZXJzaW9uIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogVW5pY29kZSB2ZXJzaW9uIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogTERTIHZlcnNpb24gaW5jb25zaXN0ZW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogVW5pY29kZSB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogT0lEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Nzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBTaWduZXIgaW5mb3MgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENlcnRpZmljYXRlcyBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDUkxzIGluY29ycmVjdCB1c2FnZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogSW5jb3JyZWN0IGNvbnRlbnQgT0lEXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBudW1iZXIgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IERHIGhhc2ggZXh0cmFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBtYXN0ZXIgbGlzdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTSUQgaW5jb3JyZWN0IGNob2ljZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGRpZ2VzdCBhbGdvcml0aG0gbm90IGxpc3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IENvbnRlbnQgdHlwZSBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IENvbnRlbnQgdHlwZSBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IENvbnRlbnQgdHlwZSBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbm5vdCBmaW5kIENTQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByZXZva2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgc2lnbmF0dXJlIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb246IFVuc3VwcG9ydGVkIGltYWdlIGZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERvY3VtZW50IHR5cGUgdW5rbm93blwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IElzc3Vpbmcgc3RhdGUgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTmFtZSBpcyB2b2lkXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTnVtYmVyIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE5hdGlvbmFsaXR5IHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0IgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0IgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogU2V4IGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0UgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0UgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogT3B0aW9uYWwgZGF0YSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBJbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODk4MjY1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgb3duZXIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTE3MTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODg1MTU4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg3ODYwNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IHR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg3MjA1MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogVHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODY1NDk3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBTdWJ0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODU4OTQ0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBTdWJ0eXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTIzOTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBpbWFnZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg0NTgzNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGZvcm1hdCBJRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODM5MjgzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODMyNzI5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZGF0YSBsZW5ndGggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc5OTk2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgR2VuZGVyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc5MzQwODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRXllIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4Njg1NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSGFpciBDb2xvclwiXG4gICAgICAgICAgICBjYXNlIC0xODc3ODAzMDA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgWWF3XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc3Mzc0NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NjcxOTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NjA2NDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzU0MDg2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzQ3NTMyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDA5NzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEZhY2UgSW1hZ2UgVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc3MzQ0MjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEltYWdlIERhdGEgVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gVW5zdXBwb3J0ZWQgU3RkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIERlcHJlY2F0ZWQgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVXNpbmcgU3RkIFJlZlwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgUHVibGljS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gRmlsZSBJRCBGb3IgVmVyc2lvbiAyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBVbnN1cHBvcnRlZCBEaWdlc3QgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGluZm8gaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgZG9tYWluIHBhcmFtcyB1bnN1cHBvcnRlZCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQUEgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29uc2lzdGVudCBhbGdvcml0aG0gcmVmZXJlbmNlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBObyBSZXF1aXJlZCBPcHRpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEFub255bW91cyBJbmZvc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIERvbWFpbiBQYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBObyBNYXRjaGluZyBQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluY29ycmVjdCBJbmZvcyBRdWFudGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ2FyZCBJbmZvIExvY2F0b3IgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBlSUQgU2VjdXJpdHkgSW5mbyBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQcml2aWxlZ2VkIFRJIEluY29ycmVjdCBVc2FnZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIG11bHRpcGxlIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogU3RvcmFnZSBQQUNFIEluZm8gTm9uIENvbnNpc3RhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDQ2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBDViBDZXJ0aWZpY2F0ZTogUHJvZmlsZSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBOb24gQ1ZDQSBkb21haW4gcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwMjA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFRBOiBQQUNFIHN0YXRpYyBiaW5kaW5nIHVzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW5ub3QgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0FMUkVBRFlfRE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1ZXN0ZWQgb3BlcmF0aW9uIGlzIGFscmVhZHkgZG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0Vycm9yX0dyYXBoTWFuYWdlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDcmVhdGlvbiBvciBjb25uZWN0aW9uIHRvIEdyYXBoIE1hbmFnZXIgQ09NIHNlcnZlciBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBjaGlwIGlzIGRldGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBwYXJhbWV0ZXIgaW4gRXhlY3V0ZUNvbW1hbmQoKSBjYWxsIGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBEZXZpY2UgaXMgdW5pbml0aWFsaXplZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FcnJvcl9Ob3RFbm91Z2hNZW1vcnk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogT3V0IG9mIG1lbW9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBjb21tYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJTyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9CVVNZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJGSUQgaXMgQnVzeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEZpcm13YXJlIG5lZWQgdG8gYmUgdXBkYXRlZCB3aXRoIG5ld2VyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBSZWFkZXIgaXMgdW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGNhbm5vdCBiZSBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGlzIG5vdCBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBPcGVyYXRpb24gaXMgY2FuY2VsbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogQ2FyZCBJcyBCdXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkIFNtYXJ0IENhcmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBFeHRMZSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNlY3VyZSBNZXNzYWdpbmcgd2FzIG5vdCBhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQV8wMyBcXFwiQXBwbGljYXRpb24gc2VsZWN0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDEgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBNQUMgZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMiBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGVuY3J5cHRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBNQUMgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgY3J5cHRvZ3JhbSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBzZWN1cmVkIHN0YXR1cyBieXRlcyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgTUFDXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgY3J5cHRvZ3JhbVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm90IFRMViByZXNwb25zZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBXcm9uZyBkYXRhIGxlbmd0aCAoQVBEVV9JTlNfR0VUX0NIQUxMRU5HRSlcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0lOVEVSTkFMX0FVVEhFTlRJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEtBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IERTVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQU08gQ0VSVElGSUNBVEUgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBHRVQgQ0hBTExFTkdFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0VYVEVSTkFMX0FVVEhFTlRJQ0FURSAoRXh0ZXJuYWwgQXV0aGVudGljYXRpb24pIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdlbmVyYWwgQXV0aGVudGljaXR5IEZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEZpbGUgc2VsZWN0aW9uIGZhaWx1cmUgLyBmaWxlIG5vdCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4NDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjI1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJbmNvcnJlY3QgUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBObyBSZWZlcmVuY2UgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIFN1c3BlbmRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIEJsb2NrZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODQyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBEZWFjdGl2YXRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2NjM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIEJsb2NrZWQgMlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2NjM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIERlYWN0aXZhdGVkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBTdXNwZW5kZWQgMlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ2NDA5NTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUyMDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vdCBQZXJmb3JtZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBTZXNzaW9uIElzIENsb3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIFVuc3VwcG9ydGVkIE9wZXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIFR5cGUgVW5rbm93blwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIFR5cGUgQmFkIENlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGVybWluYWwgVHlwZSBOb3QgU2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHJvY2VkdXJlIFR5cGUgVW5rbm93blwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSBUeXBlIFVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHJvY2VkdXJlIFR5cGUgTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgVW5rbm93biBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBVbnN1cHBvcnRlZCBTTSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBJbmNvcnJlY3QgU00gVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgUmVzdHJpY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IE5vdCBTZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQd2QgTWFuYWdlbWVudCBOb3QgQXV0aG9yaXplZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBDb250cm9sIFVua25vd25UeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgU01cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBQQUNFXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgQ0EgS2V5c1wiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIFRBXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3QgT3B0aW9uIENBXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQ0EgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVEEgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQUEgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUkkgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU08gU2lnbmF0dXJlIENoZWNrIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEhhc2ggQ2hlY2sgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBBdXggRGF0YSBEYXRlIE9mIEV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgQXV4IERhdGEgRGF0ZSBPZiBCaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgQXV4IERhdGEgQ29tbXVuaXR5IElEXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUmVxdWlyZXMgQXBwIFNlbGVjdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFBJTiBOb3QgU2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUElOIE5vdCBWZXJpZmllZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcwODY0NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBOb3QgRW5vdWdoIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzAyMDkyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY5NTUzOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBVbmV4cGVjdGVkIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5Njg4OTg1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IENvbnRlbnRzIFVuZXhwZWN0ZWQgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2ODI0MzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogV3JvbmcgVGFnXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY3NTg3ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBDYW5ub3QgVXNlIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NjY5MzI0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IENhbm5vdCBSZWFkIERhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBBY2Nlc3MgRGVuaWVkXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Bhc3N3b3JkX1R5cGUgPSB7XG4gICAgUFBUX1VOS05PV046IDAsXG4gICAgUFBUX01SWjogMSxcbiAgICBQUFRfQ0FOOiAyLFxuICAgIFBQVF9QSU46IDMsXG4gICAgUFBUX1BVSzogNCxcbiAgICBQUFRfUElOX0VTSUdOOiA1LFxuICAgIFBQVF9TQUk6IDYsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9TREtfUHJvZmlsZXJUeXBlID0ge1xuICAgIFNQVF9ET0NfOTMwM19FRElUSU9OXzIwMDY6IDB4MDAwMDAwMDEsXG4gICAgU1BUX0RPQ185MzAzX0xEU19QS0lfTUFJTlRFTkFOQ0U6IDB4MDAwMDAwMDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9UZXJtaW5hbFR5cGUgPSB7XG4gICAgVEVUX1VOREVGSU5FRDogMCxcbiAgICBURVRfSU5TUEVDVElPTl9TWVNURU06IDEsXG4gICAgVEVUX0FVVEhFTlRJQ0FUSU9OX1RFUk1JTkFMOiAyLFxuICAgIFRFVF9TSUdOQVRVUkVfVEVSTUlOQUw6IDMsXG4gICAgVEVUX1VOQVVUSEVOVElDQVRFRF9URVJNSU5BTDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0F1dGhlbnRpY2l0eSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFVWX0xVTUlORVNDRU5DRTogMSxcbiAgICBJUl9COTAwOiAyLFxuICAgIElNQUdFX1BBVFRFUk46IDQsXG4gICAgQVhJQUxfUFJPVEVDVElPTjogOCxcbiAgICBVVl9GSUJFUlM6IDE2LFxuICAgIElSX1ZJU0lCSUxJVFk6IDMyLFxuICAgIE9DUl9TRUNVUklUWV9URVhUOiA2NCxcbiAgICBJUEk6IDEyOCxcbiAgICBQSE9UT19FTUJFRF9UWVBFOiA1MTIsXG4gICAgSE9MT0dSQU1TOiA0MDk2LFxuICAgIFBIT1RPX0FSRUE6IDgxOTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTjogMzI3NjgsXG4gICAgQkFSQ09ERV9GT1JNQVRfQ0hFQ0s6IDY1NTM2LFxuICAgIEtJTkVHUkFNOiAxMzEwNzIsXG4gICAgSE9MT0dSQU1TX0RFVEVDVElPTjogNTI0Mjg4LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQgPSB7XG4gICAgUkNGX0RJU0FCTEVEOiAwLFxuICAgIFJDRl9WRVJJRklFRDogMSxcbiAgICBSQ0ZfTk9UX1ZFUklGSUVEOiAyLFxuICAgIFJDRl9DT01QQVJFX1RSVUU6IDMsXG4gICAgUkNGX0NPTVBBUkVfRkFMU0U6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9MaWdodHMgPSB7XG4gICAgTk9ORTogMCxcbiAgICBSUFJNX0xJR0hUX1VWOiAxMjgsXG4gICAgUlBSTV9MSUdIVF9XSElURV9GVUxMOiA2LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MSUdIVF9VVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVVlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MSUdIVF9XSElURV9GVUxMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2libGUgbGlnaHRcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fUmVzdWx0VHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VNUFRZOiAwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX0lNQUdFOiAxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklMRV9JTUFHRTogMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9PQ1JfRVhURU5ERUQ6IDMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFUzogNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0dSQVBISUNTOiA2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1RFU1RfUVVBTElUWTogNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1RZUEVTX0NBTkRJREFURVM6IDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DSE9TRU5fRE9DVU1FTlRfVFlQRV9DQU5ESURBVEU6IDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVFNfSU5GT19MSVNUOiAxMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX09DUl9MRVhJQ0FMX0FOQUxZWkU6IDE1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX1VOQ1JPUFBFRF9JTUFHRTogMTYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9WSVNVQUxfT0NSX0VYVEVOREVEOiAxNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19URVhUX0RBVEE6IDE4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX0lNQUdFX0RBVEE6IDE5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQVVUSEVOVElDSVRZOiAyMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VPU19JTUFHRTogMjMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVlFUl9JTUFHRTogMjQsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEU6IDI1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFX1RFWFRfREFUQTogMjYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUVMRF9GSUxFX0lNQUdFOiAyNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RBVEFCQVNFX0NIRUNLOiAyOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTkdFUlBSSU5UX1RFTVBMQVRFX0lTTzogMjksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlBVVF9JTUFHRV9RVUFMSVRZOiAzMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1BPU0lUSU9OOiA4NSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NVU1RPTTogMTAwLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9SQVdfREFUQTogMTAxLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9URVhUX0RBVEE6IDEwMixcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfSU1BR0VfREFUQTogMTAzLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9CSU5BUllfREFUQTogMTA0LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9PUklHSU5BTF9HUkFQSElDUzogMTA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERV9QT1NJVElPTjogNjIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfUE9TSVRJT046IDYxLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkxBTks6IDAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZJTEw6IDEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPOiAyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9NUlo6IDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBTFNFX0xVTUlORVNDRU5DRTogNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19TSU1QTEU6IDUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX1NUQVRJQzogNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfTVVMVElfU1RBVElDOiA3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9ESU5BTUlDOiA4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9JTlRFUlJVUFRFRDogOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfU0hJRlRFRDogMTAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fU0FNRV9DT0xPUlM6IDExLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0lSX0lOVklTSUJMRTogMTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NJWkVfQ0hFQ0s6IDEzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0dIT1NUOiAxNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19SRklEOiAxNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19WSVNVQUw6IDE2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFOiAxNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19DQU1FUkE6IDE5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURfVlNfQ0FNRVJBOiAyMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfR0hPU1RfUEhPVE86IDIxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DTEVBUl9HSE9TVF9QSE9UTzogMjIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0lOVklTSUJMRV9PQkpFQ1Q6IDIzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MT1dfQ09OVFJBU1RfT0JKRUNUOiAyNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09MT1I6IDI1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSEFQRTogMjYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPUk5FUlM6IDI3LFxuICAgIERPQ1VNRU5UX0NBTkNFTExJTkdfREVURUNUT1I6IDI4LFxufVxuXG5leHBvcnQgY29uc3QgZVNpZ25NYW5hZ2VtZW50QWN0aW9uID0ge1xuICAgIHNtYVVuZGVmaW5lZDogMCxcbiAgICBzbWFDcmVhdGVQSU46IDEsXG4gICAgc21hQ2hhbmdlUElOOiAyLFxuICAgIHNtYVVuYmxvY2tQSU46IDMsXG4gICAgc21hVGVybWluYXRlUElOOiA0LFxuICAgIHNtYUdlbmVyYXRlS2V5czogNSxcbiAgICBzbWFUZXJtaW5hdGVLZXlzOiA2LFxuICAgIHNtYVNpZ25EYXRhOiA3LFxufVxuXG5leHBvcnQgY29uc3QgZVZpc3VhbEZpZWxkVHlwZSA9IHtcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19DT0RFOiAwLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERTogMSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVI6IDIsXG4gICAgRlRfREFURV9PRl9FWFBJUlk6IDMsXG4gICAgRlRfREFURV9PRl9JU1NVRTogNCxcbiAgICBGVF9EQVRFX09GX0JJUlRIOiA1LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIOiA2LFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUjogNyxcbiAgICBGVF9TVVJOQU1FOiA4LFxuICAgIEZUX0dJVkVOX05BTUVTOiA5LFxuICAgIEZUX01PVEhFUlNfTkFNRTogMTAsXG4gICAgRlRfTkFUSU9OQUxJVFk6IDExLFxuICAgIEZUX1NFWDogMTIsXG4gICAgRlRfSEVJR0hUOiAxMyxcbiAgICBGVF9XRUlHSFQ6IDE0LFxuICAgIEZUX0VZRVNfQ09MT1I6IDE1LFxuICAgIEZUX0hBSVJfQ09MT1I6IDE2LFxuICAgIEZUX0FERFJFU1M6IDE3LFxuICAgIEZUX0RPTk9SOiAxOCxcbiAgICBGVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxOSxcbiAgICBGVF9ETF9DTEFTUzogMjAsXG4gICAgRlRfRExfRU5ET1JTRUQ6IDIxLFxuICAgIEZUX0RMX1JFU1RSSUNUSU9OX0NPREU6IDIyLFxuICAgIEZUX0RMX1VOREVSXzIxX0RBVEU6IDIzLFxuICAgIEZUX0FVVEhPUklUWTogMjQsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDI1LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREU6IDI2LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUjogMjcsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVI6IDI4LFxuICAgIEZUX1ZJU0FfSUQ6IDI5LFxuICAgIEZUX1ZJU0FfQ0xBU1M6IDMwLFxuICAgIEZUX1ZJU0FfU1VCX0NMQVNTOiAzMSxcbiAgICBGVF9NUlpfU1RSSU5HXzE6IDMyLFxuICAgIEZUX01SWl9TVFJJTkdfMjogMzMsXG4gICAgRlRfTVJaX1NUUklOR18zOiAzNCxcbiAgICBGVF9NUlpfVFlQRTogMzUsXG4gICAgRlRfT1BUSU9OQUxfREFUQTogMzYsXG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfTkFNRTogMzcsXG4gICAgRlRfSVNTVUlOR19TVEFURV9OQU1FOiAzOCxcbiAgICBGVF9QTEFDRV9PRl9JU1NVRTogMzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOiA0MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOiA0MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTogNDIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOiA0MyxcbiAgICBGVF9GSU5BTF9DSEVDS1NVTTogNDQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOiA0NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS1NVTTogNDYsXG4gICAgRlRfVklTQV9JRF9DSEVDS1NVTTogNDcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06IDQ4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06IDQ5LFxuICAgIEZUX09USEVSOiA1MCxcbiAgICBGVF9NUlpfU1RSSU5HUzogNTEsXG4gICAgRlRfTkFNRV9TVUZGSVg6IDUyLFxuICAgIEZUX05BTUVfUFJFRklYOiA1MyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLU1VNOiA1NCxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0NIRUNLX0RJR0lUOiA1NSxcbiAgICBGVF9ET0NVTUVOVF9TRVJJRVM6IDU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVI6IDU3LFxuICAgIEZUX1JFR19DRVJUX0NBUl9NT0RFTDogNTgsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOiA1OSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjogNjAsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX1RZUEU6IDYxLFxuICAgIEZUX1JFR19DRVJUX01BWF9XRUlHSFQ6IDYyLFxuICAgIEZUX1JFR19DRVJUX1dFSUdIVDogNjMsXG4gICAgRlRfQUREUkVTU19BUkVBOiA2NCxcbiAgICBGVF9BRERSRVNTX1NUQVRFOiA2NSxcbiAgICBGVF9BRERSRVNTX0JVSUxESU5HOiA2NixcbiAgICBGVF9BRERSRVNTX0hPVVNFOiA2NyxcbiAgICBGVF9BRERSRVNTX0ZMQVQ6IDY4LFxuICAgIEZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjogNjksXG4gICAgRlRfREFURV9PRl9SRUdJU1RSQVRJT046IDcwLFxuICAgIEZUX1JFU0lERU5UX0ZST006IDcxLFxuICAgIEZUX1JFU0lERU5UX1VOVElMOiA3MixcbiAgICBGVF9BVVRIT1JJVFlfQ09ERTogNzMsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfQVJFQTogNzQsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTogNzUsXG4gICAgRlRfQUREUkVTU19TVFJFRVQ6IDc2LFxuICAgIEZUX0FERFJFU1NfQ0lUWTogNzcsXG4gICAgRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogNzgsXG4gICAgRlRfQUREUkVTU19QT1NUQUxfQ09ERTogNzksXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOiA4MSxcbiAgICBGVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDogODIsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOiA4MyxcbiAgICBGVF9GSU5BTF9DSEVDS19ESUdJVDogODQsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOiA4NSxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUl9DSEVDS19ESUdJVDogODYsXG4gICAgRlRfVklTQV9JRF9DSEVDS19ESUdJVDogODcsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6IDg4LFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6IDg5LFxuICAgIEZUX1BFUk1JVF9ETF9DTEFTUzogOTAsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfRVhQSVJZOiA5MSxcbiAgICBGVF9QRVJNSVRfSURFTlRJRklFUjogOTIsXG4gICAgRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6IDkzLFxuICAgIEZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOiA5NCxcbiAgICBGVF9QRVJNSVRfRU5ET1JTRUQ6IDk1LFxuICAgIEZUX0lTU1VFX1RJTUVTVEFNUDogOTYsXG4gICAgRlRfTlVNQkVSX09GX0RVUExJQ0FURVM6IDk3LFxuICAgIEZUX01FRElDQUxfSU5ESUNBVE9SX0NPREVTOiA5OCxcbiAgICBGVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOiA5OSxcbiAgICBGVF9WSVNBX1RZUEU6IDEwMCxcbiAgICBGVF9WSVNBX1ZBTElEX0ZST006IDEwMSxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMOiAxMDIsXG4gICAgRlRfRFVSQVRJT05fT0ZfU1RBWTogMTAzLFxuICAgIEZUX05VTUJFUl9PRl9FTlRSSUVTOiAxMDQsXG4gICAgRlRfREFZOiAxMDUsXG4gICAgRlRfTU9OVEg6IDEwNixcbiAgICBGVF9ZRUFSOiAxMDcsXG4gICAgRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6IDEwOCxcbiAgICBGVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6IDEwOSxcbiAgICBGVF9BS0FfREFURV9PRl9CSVJUSDogMTEwLFxuICAgIEZUX0FLQV9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOiAxMTEsXG4gICAgRlRfQUtBX1NVUk5BTUU6IDExMixcbiAgICBGVF9BS0FfR0lWRU5fTkFNRVM6IDExMyxcbiAgICBGVF9BS0FfTkFNRV9TVUZGSVg6IDExNCxcbiAgICBGVF9BS0FfTkFNRV9QUkVGSVg6IDExNSxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfU1RSRUVUOiAxMTYsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0NJVFk6IDExNyxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDExOCxcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfUE9TVEFMX0NPREU6IDExOSxcbiAgICBGVF9BVURJVF9JTkZPUk1BVElPTjogMTIwLFxuICAgIEZUX0lOVkVOVE9SWV9OVU1CRVI6IDEyMSxcbiAgICBGVF9SQUNFX0VUSE5JQ0lUWTogMTIyLFxuICAgIEZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOiAxMjMsXG4gICAgRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6IDEyNCxcbiAgICBGVF9KVVJJU0RJQ1RJT05fUkVTVFJJQ1RJT05fQ09ERTogMTI1LFxuICAgIEZUX0ZBTUlMWV9OQU1FOiAxMjYsXG4gICAgRlRfR0lWRU5fTkFNRVNfUlVTOiAxMjcsXG4gICAgRlRfVklTQV9JRF9SVVM6IDEyOCxcbiAgICBGVF9GQVRIRVJTX05BTUU6IDEyOSxcbiAgICBGVF9GQVRIRVJTX05BTUVfUlVTOiAxMzAsXG4gICAgRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOiAxMzEsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEhfUlVTOiAxMzIsXG4gICAgRlRfQVVUSE9SSVRZX1JVUzogMTMzLFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOiAxMzQsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERV9OVU1FUklDOiAxMzUsXG4gICAgRlRfRU5HSU5FX1BPV0VSOiAxMzYsXG4gICAgRlRfRU5HSU5FX1ZPTFVNRTogMTM3LFxuICAgIEZUX0NIQVNTSVNfTlVNQkVSOiAxMzgsXG4gICAgRlRfRU5HSU5FX05VTUJFUjogMTM5LFxuICAgIEZUX0VOR0lORV9NT0RFTDogMTQwLFxuICAgIEZUX1ZFSElDTEVfQ0FURUdPUlk6IDE0MSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUjogMTQyLFxuICAgIEZUX0NPTlRST0xfTk86IDE0MyxcbiAgICBGVF9QQVJSRU5UU19HSVZFTl9OQU1FUzogMTQ0LFxuICAgIEZUX1NFQ09ORF9TVVJOQU1FOiAxNDUsXG4gICAgRlRfTUlERExFX05BTUU6IDE0NixcbiAgICBGVF9SRUdfQ0VSVF9WSU46IDE0NyxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6IDE0OCxcbiAgICBGVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06IDE0OSxcbiAgICBGVF9MSU5FXzFfQ0hFQ0tfRElHSVQ6IDE1MCxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6IDE1MSxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6IDE1MixcbiAgICBGVF9MSU5FXzFfQ0hFQ0tTVU06IDE1MyxcbiAgICBGVF9MSU5FXzJfQ0hFQ0tTVU06IDE1NCxcbiAgICBGVF9MSU5FXzNfQ0hFQ0tTVU06IDE1NSxcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLX0RJR0lUOiAxNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTogMTU3LFxuICAgIEZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6IDE1OCxcbiAgICBGVF9DQVJEX0FDQ0VTU19OVU1CRVI6IDE1OSxcbiAgICBGVF9NQVJJVEFMX1NUQVRVUzogMTYwLFxuICAgIEZUX0NPTVBBTllfTkFNRTogMTYxLFxuICAgIEZUX1NQRUNJQUxfTk9URVM6IDE2MixcbiAgICBGVF9TVVJOQU1FX09GX1NQT1NFOiAxNjMsXG4gICAgRlRfVFJBQ0tJTkdfTlVNQkVSOiAxNjQsXG4gICAgRlRfQk9PS0xFVF9OVU1CRVI6IDE2NSxcbiAgICBGVF9DSElMRFJFTjogMTY2LFxuICAgIEZUX0NPUFk6IDE2NyxcbiAgICBGVF9TRVJJQUxfTlVNQkVSOiAxNjgsXG4gICAgRlRfRE9TU0lFUl9OVU1CRVI6IDE2OSxcbiAgICBGVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6IDE3MCxcbiAgICBGVF9URVJSSVRPUklBTF9WQUxJRElUWTogMTcxLFxuICAgIEZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOiAxNzIsXG4gICAgRlRfRExfQ0RMX1JFU1RSSUNUSU9OX0NPREU6IDE3MyxcbiAgICBGVF9ETF9VTkRFUl8xOF9EQVRFOiAxNzQsXG4gICAgRlRfRExfUkVDT1JEX0NSRUFURUQ6IDE3NSxcbiAgICBGVF9ETF9EVVBMSUNBVEVfREFURTogMTc2LFxuICAgIEZUX0RMX0lTU19UWVBFOiAxNzcsXG4gICAgRlRfTUlMSVRBUllfQk9PS19OVU1CRVI6IDE3OCxcbiAgICBGVF9ERVNUSU5BVElPTjogMTc5LFxuICAgIEZUX0JMT09EX0dST1VQOiAxODAsXG4gICAgRlRfU0VRVUVOQ0VfTlVNQkVSOiAxODEsXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9UWVBFOiAxODIsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01BUks6IDE4MyxcbiAgICBGVF9UUkFOU0FDVElPTl9OVU1CRVI6IDE4NCxcbiAgICBGVF9BR0U6IDE4NSxcbiAgICBGVF9GT0xJT19OVU1CRVI6IDE4NixcbiAgICBGVF9WT1RFUl9LRVk6IDE4NyxcbiAgICBGVF9BRERSRVNTX01VTklDSVBBTElUWTogMTg4LFxuICAgIEZUX0FERFJFU1NfTE9DQVRJT046IDE4OSxcbiAgICBGVF9TRUNUSU9OOiAxOTAsXG4gICAgRlRfT0NSX05VTUJFUjogMTkxLFxuICAgIEZUX0ZFREVSQUxfRUxFQ1RJT05TOiAxOTIsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUjogMTkzLFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06IDE5NCxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOiAxOTUsXG4gICAgRlRfVklTQV9OVU1CRVI6IDE5NixcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS1NVTTogMTk3LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOiAxOTgsXG4gICAgRlRfVk9URVI6IDE5OSxcbiAgICBGVF9QUkVWSU9VU19UWVBFOiAyMDAsXG4gICAgRlRfRklFTERfRlJPTV9NUlo6IDIyMCxcbiAgICBGVF9DVVJSRU5UX0RBVEU6IDIyMSxcbiAgICBGVF9TVEFUVVNfREFURV9PRl9FWFBJUlk6IDI1MSxcbiAgICBGVF9CQU5LTk9URV9OVU1CRVI6IDI1MixcbiAgICBGVF9DU0NfQ09ERTogMjUzLFxuICAgIEZUX0FSVElTVElDX05BTUU6IDI1NCxcbiAgICBGVF9BQ0FERU1JQ19USVRMRTogMjU1LFxuICAgIEZUX0FERFJFU1NfQ09VTlRSWTogMjU2LFxuICAgIEZUX0FERFJFU1NfWklQQ09ERTogMjU3LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOiAyNTgsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6IDI1OSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDogMjYwLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTogMjYxLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6IDI2MixcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6IDI2MyxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1pJUENPREU6IDI2NCxcbiAgICBGVF9DRExfQ0xBU1M6IDI2NSxcbiAgICBGVF9ETF9VTkRFUl8xOV9EQVRFOiAyNjYsXG4gICAgRlRfV0VJR0hUX1BPVU5EUzogMjY3LFxuICAgIEZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOiAyNjgsXG4gICAgRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOiAyNjksXG4gICAgRlRfUkVWSVNJT05fREFURTogMjcwLFxuICAgIEZUX0NPTVBMSUFOQ0VfVFlQRTogMjcxLFxuICAgIEZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046IDI3MixcbiAgICBGVF9GSVJTVF9OQU1FX1RSVU5DQVRJT046IDI3MyxcbiAgICBGVF9NSURETEVfTkFNRV9UUlVOQ0FUSU9OOiAyNzQsXG4gICAgRlRfRVhBTV9EQVRFOiAyNzUsXG4gICAgRlRfT1JHQU5JWkFUSU9OOiAyNzYsXG4gICAgRlRfREVQQVJUTUVOVDogMjc3LFxuICAgIEZUX1BBWV9HUkFERTogMjc4LFxuICAgIEZUX1JBTks6IDI3OSxcbiAgICBGVF9CRU5FRklUU19OVU1CRVI6IDI4MCxcbiAgICBGVF9TUE9OU09SX1NFUlZJQ0U6IDI4MSxcbiAgICBGVF9TUE9OU09SX1NUQVRVUzogMjgyLFxuICAgIEZUX1NQT05TT1I6IDI4MyxcbiAgICBGVF9SRUxBVElPTlNISVA6IDI4NCxcbiAgICBGVF9VU0NJUzogMjg1LFxuICAgIEZUX0NBVEVHT1JZOiAyODYsXG4gICAgRlRfQ09ORElUSU9OUzogMjg3LFxuICAgIEZUX0lERU5USUZJRVI6IDI4OCxcbiAgICBGVF9DT05GSUdVUkFUSU9OOiAyODksXG4gICAgRlRfRElTQ1JFVElPTkFSWV9EQVRBOiAyOTAsXG4gICAgRlRfTElORV8xX09QVElPTkFMX0RBVEE6IDI5MSxcbiAgICBGVF9MSU5FXzJfT1BUSU9OQUxfREFUQTogMjkyLFxuICAgIEZUX0xJTkVfM19PUFRJT05BTF9EQVRBOiAyOTMsXG4gICAgRlRfRVFWX0NPREU6IDI5NCxcbiAgICBGVF9BTFRfQ09ERTogMjk1LFxuICAgIEZUX0JJTkFSWV9DT0RFOiAyOTYsXG4gICAgRlRfUFNFVURPX0NPREU6IDI5NyxcbiAgICBGVF9GRUU6IDI5OCxcbiAgICBGVF9TVEFNUF9OVU1CRVI6IDI5OSxcbiAgICBGVF9TQkhfU0VDVVJJVFlPUFRJT05TOiAzMDAsXG4gICAgRlRfU0JIX0lOVEVHUklUWU9QVElPTlM6IDMwMSxcbiAgICBGVF9EQVRFX09GX0NSRUFUSU9OOiAzMDIsXG4gICAgRlRfVkFMSURJVFlfUEVSSU9EOiAzMDMsXG4gICAgRlRfUEFUUk9OX0hFQURFUl9WRVJTSU9OOiAzMDQsXG4gICAgRlRfQkRCX1RZUEU6IDMwNSxcbiAgICBGVF9CSU9NRVRSSUNfVFlQRTogMzA2LFxuICAgIEZUX0JJT01FVFJJQ19TVUJUWVBFOiAzMDcsXG4gICAgRlRfQklPTUVUUklDX1BST0RVQ1RJRDogMzA4LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfT1dORVI6IDMwOSxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX1RZUEU6IDMxMCxcbiAgICBGVF9QSE9ORTogMzExLFxuICAgIEZUX1BST0ZFU1NJT046IDMxMixcbiAgICBGVF9USVRMRTogMzEzLFxuICAgIEZUX1BFUlNPTkFMX1NVTU1BUlk6IDMxNCxcbiAgICBGVF9PVEhFUl9WQUxJRF9JRDogMzE1LFxuICAgIEZUX0NVU1RPRFlfSU5GTzogMzE2LFxuICAgIEZUX09USEVSX05BTUU6IDMxNyxcbiAgICBGVF9PQlNFUlZBVElPTlM6IDMxOCxcbiAgICBGVF9UQVg6IDMxOSxcbiAgICBGVF9EQVRFX09GX1BFUlNPTkFMSVpBVElPTjogMzIwLFxuICAgIEZUX1BFUlNPTkFMSVpBVElPTl9TTjogMzIxLFxuICAgIEZUX09USEVSUEVSU09OX05BTUU6IDMyMixcbiAgICBGVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDogMzIzLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX05BTUU6IDMyNCxcbiAgICBGVF9QRVJTT05UT05PVElGWV9QSE9ORTogMzI1LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0FERFJFU1M6IDMyNixcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6IDMyNyxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOiAzMjgsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURGUk9NOiAzMjksXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfVkFMSURUTzogMzMwLFxuICAgIEZUX1ZSQ19EQVRBT0JKRUNUX0VOVFJZOiAzMzEsXG4gICAgRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6IDMzMixcbiAgICBGVF9BRE1JTklTVFJBVElWRV9OVU1CRVI6IDMzMyxcbiAgICBGVF9ET0NVTUVOVF9ESVNDUklNSU5BVE9SOiAzMzQsXG4gICAgRlRfREFUQV9ESVNDUklNSU5BVE9SOiAzMzUsXG4gICAgRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6IDMzNixcbiAgICBGVF9HTklCX05VTUJFUjogMzQwLFxuICAgIEZUX0RFUFRfTlVNQkVSOiAzNDEsXG4gICAgRlRfVEVMRVhfQ09ERTogMzQyLFxuICAgIEZUX0FMTEVSR0lFUzogMzQzLFxuICAgIEZUX1NQX0NPREU6IDM0NCxcbiAgICBGVF9DT1VSVF9DT0RFOiAzNDUsXG4gICAgRlRfQ1RZOiAzNDYsXG4gICAgRlRfU1BPTlNPUl9TU046IDM0NyxcbiAgICBGVF9ET19EX05VTUJFUjogMzQ4LFxuICAgIEZUX01DX05PVklDRV9EQVRFOiAzNDksXG4gICAgRlRfRFVGX05VTUJFUjogMzUwLFxuICAgIEZUX0FHWTogMzUxLFxuICAgIEZUX1BOUl9DT0RFOiAzNTIsXG4gICAgRlRfRlJPTV9BSVJQT1JUX0NPREU6IDM1MyxcbiAgICBGVF9UT19BSVJQT1JUX0NPREU6IDM1NCxcbiAgICBGVF9GTElHSFRfTlVNQkVSOiAzNTUsXG4gICAgRlRfREFURV9PRl9GTElHSFQ6IDM1NixcbiAgICBGVF9TRUFUX05VTUJFUjogMzU3LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzogMzU4LFxuICAgIEZUX0NDV19VTlRJTDogMzU5LFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06IDM2MCxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNjEsXG4gICAgRlRfUk9PTV9OVU1CRVI6IDM2MixcbiAgICBGVF9SRUxJR0lPTjogMzYzLFxuICAgIEZUX1JFTUFJTkRFUl9URVJNOiAzNjQsXG4gICAgRlRfRUxFQ1RST05JQ19USUNLRVRfSU5ESUNBVE9SOiAzNjUsXG4gICAgRlRfQ09NUEFSVE1FTlRfQ09ERTogMzY2LFxuICAgIEZUX0NIRUNLX0lOX1NFUVVFTkNFX05VTUJFUjogMzY3LFxuICAgIEZUX0FJUkxJTkVfREVTSUdOQVRPUl9PRl9CT0FSRElOR19QQVNTX0lTU1VFUjogMzY4LFxuICAgIEZUX0FJUkxJTkVfTlVNRVJJQ19DT0RFOiAzNjksXG4gICAgRlRfVElDS0VUX05VTUJFUjogMzcwLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX0FJUkxJTkVfREVTSUdOQVRPUjogMzcxLFxuICAgIEZUX0ZSRVFVRU5UX0ZMWUVSX05VTUJFUjogMzcyLFxuICAgIEZUX0ZSRUVfQkFHR0FHRV9BTExPV0FOQ0U6IDM3MyxcbiAgICBGVF9QREZfNDE3X0NPREVDOiAzNzQsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06IDM3NSxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDogMzc2LFxuICAgIEZUX1ZFVEVSQU46IDM3NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9GUk9NOiAzNzgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfVE86IDM3OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9OT1RFUzogMzgwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOiAzODEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX1RPOiAzODIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX05PVEVTOiAzODMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX0ZST006IDM4NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfVE86IDM4NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6IDM4NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9GUk9NOiAzODcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfVE86IDM4OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9OT1RFUzogMzg5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOiAzOTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX1RPOiAzOTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX05PVEVTOiAzOTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRlJPTTogMzkzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOiAzOTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfTk9URVM6IDM5NSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfRlJPTTogMzk2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9UTzogMzk3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9OT1RFUzogMzk4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTogMzk5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfVE86IDQwMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOiA0MDEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9GUk9NOiA0MDIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9UTzogNDAzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfTk9URVM6IDQwNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX0ZST006IDQwNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX1RPOiA0MDYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9OT1RFUzogNDA3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTogNDA4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfVE86IDQwOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX05PVEVTOiA0MTAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9GUk9NOiA0MTEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzogNDEyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfTk9URVM6IDQxMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fRlJPTTogNDE0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9UTzogNDE1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9OT1RFUzogNDE2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOiA0MTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX1RPOiA0MTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX05PVEVTOiA0MTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX0ZST006IDQyMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfVE86IDQyMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6IDQyMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX0ZST006IDQyMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX1RPOiA0MjQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9OT1RFUzogNDI1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006IDQyNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9UTzogNDI3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOiA0MjgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfRlJPTTogNDI5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOiA0MzAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfTk9URVM6IDQzMSxcbiAgICBGVF9TVVJOQU1FX0FUX0JJUlRIOiA0MzIsXG4gICAgRlRfQ0lWSUxfU1RBVFVTOiA0MzMsXG4gICAgRlRfTlVNQkVSX09GX1NFQVRTOiA0MzQsXG4gICAgRlRfTlVNQkVSX09GX1NUQU5ESU5HX1BMQUNFUzogNDM1LFxuICAgIEZUX01BWF9TUEVFRDogNDM2LFxuICAgIEZUX0ZVRUxfVFlQRTogNDM3LFxuICAgIEZUX0VDX0VOVklST05NRU5UQUxfVFlQRTogNDM4LFxuICAgIEZUX1BPV0VSX1dFSUdIVF9SQVRJTzogNDM5LFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfQlJBS0VEOiA0NDAsXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDogNDQxLFxuICAgIEZUX1RSQU5TTUlTU0lPTl9UWVBFOiA0NDIsXG4gICAgRlRfVFJBSUxFUl9ISVRDSDogNDQzLFxuICAgIEZUX0FDQ09NUEFOSUVEX0JZOiA0NDQsXG4gICAgRlRfUE9MSUNFX0RJU1RSSUNUOiA0NDUsXG4gICAgRlRfRklSU1RfSVNTVUVfREFURTogNDQ2LFxuICAgIEZUX1BBWUxPQURfQ0FQQUNJVFk6IDQ0NyxcbiAgICBGVF9OVU1CRVJfT0ZfQVhFTFM6IDQ0OCxcbiAgICBGVF9QRVJNSVNTSUJMRV9BWExFX0xPQUQ6IDQ0OSxcbiAgICBGVF9QUkVDSU5DVDogNDUwLFxuICAgIEZUX0lOVklURURfQlk6IDQ1MSxcbiAgICBGVF9QVVJQT1NFX09GX0VOVFJZOiA0NTIsXG4gICAgRlRfU0tJTl9DT0xPUjogNDUzLFxuICAgIEZUX0NPTVBMRVhJT046IDQ1NCxcbiAgICBGVF9BSVJQT1JUX0ZST006IDQ1NSxcbiAgICBGVF9BSVJQT1JUX1RPOiA0NTYsXG4gICAgRlRfQUlSTElORV9OQU1FOiA0NTcsXG4gICAgRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOiA0NTgsXG4gICAgRlRfTElDRU5TRV9OVU1CRVI6IDQ1OSxcbiAgICBGVF9JTl9UQU5LUzogNDYwLFxuICAgIEZUX0VYRVBUX0lOX1RBTktTOiA0NjEsXG4gICAgRlRfRkFTVF9UUkFDSzogNDYyLFxuICAgIEZUX09XTkVSOiA0NjMsXG4gICAgRlRfTVJaX1NUUklOR1NfSUNBT19SRklEOiA0NjQsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0U6IDQ2NSxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS1NVTTogNDY2LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLX0RJR0lUOiA0NjcsXG4gICAgRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOiA0NjgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX0ZST006IDQ2OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfVE86IDQ3MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfTk9URVM6IDQ3MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfRlJPTTogNDcyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9UTzogNDczLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzogNDc0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9GUk9NOiA0NzUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX1RPOiA0NzYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX05PVEVTOiA0NzcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX0ZST006IDQ3OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfVE86IDQ3OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfTk9URVM6IDQ4MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX0ZST006IDQ4MSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX1RPOiA0ODIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9OT1RFUzogNDgzLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX0ZST006IDQ4NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19UTzogNDg1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOiA0ODYsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfRlJPTTogNDg3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX1RPOiA0ODgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfTk9URVM6IDQ4OSxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfRlJPTTogNDkwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19UTzogNDkxLFxuICAgIEZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzogNDkyLFxuICAgIEZUX0JBTktDQVJETlVNQkVSOiA0OTMsXG4gICAgRlRfQkFOS0NBUkRWQUxJRFRIUlU6IDQ5NCxcbiAgICBGVF9UQVhfTlVNQkVSOiA0OTUsXG4gICAgRlRfSEVBTFRIX05VTUJFUjogNDk2LFxuICAgIEZUX0dSQU5ERkFUSEVSTkFNRTogNDk3LFxuICAgIEZUX1NFTEVDVEVFX0lORElDQVRPUjogNDk4LFxuICAgIEZUX01PVEhFUl9TVVJOQU1FOiA0OTksXG4gICAgRlRfTU9USEVSX0dJVkVOTkFNRTogNTAwLFxuICAgIEZUX0ZBVEhFUl9TVVJOQU1FOiA1MDEsXG4gICAgRlRfRkFUSEVSX0dJVkVOTkFNRTogNTAyLFxuICAgIEZUX01PVEhFUl9EQVRFT0ZCSVJUSDogNTAzLFxuICAgIEZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDogNTA0LFxuICAgIEZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjogNTA1LFxuICAgIEZUX0ZBVEhFUl9QRVJTT05BTE5VTUJFUjogNTA2LFxuICAgIEZUX01PVEhFUl9QTEFDRU9GQklSVEg6IDUwNyxcbiAgICBGVF9GQVRIRVJfUExBQ0VPRkJJUlRIOiA1MDgsXG4gICAgRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOiA1MDksXG4gICAgRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOiA1MTAsXG4gICAgRlRfREFURV9GSVJTVF9SRU5FV0FMOiA1MTEsXG4gICAgRlRfREFURV9TRUNPTkRfUkVORVdBTDogNTEyLFxuICAgIEZUX1BMQUNFX09GX0VYQU1JTkFUSU9OOiA1MTMsXG4gICAgRlRfQVBQTElDQVRJT05fTlVNQkVSOiA1MTQsXG4gICAgRlRfVk9VQ0hFUl9OVU1CRVI6IDUxNSxcbiAgICBGVF9BVVRIT1JJWkFUSU9OX05VTUJFUjogNTE2LFxuICAgIEZUX0ZBQ1VMVFk6IDUxNyxcbiAgICBGVF9GT1JNX09GX0VEVUNBVElPTjogNTE4LFxuICAgIEZUX0ROSV9OVU1CRVI6IDUxOSxcbiAgICBGVF9SRVRJUkVNRU5UX05VTUJFUjogNTIwLFxuICAgIEZUX1BST0ZFU1NJT05BTF9JRF9OVU1CRVI6IDUyMSxcbiAgICBGVF9BR0VfQVRfSVNTVUU6IDUyMixcbiAgICBGVF9ZRUFSU19TSU5DRV9JU1NVRTogNTIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9GUk9NOiA1MjQsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOiA1MjUsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX1RPOiA1MjYsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfRlJPTTogNTI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX05PVEVTOiA1MjgsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfVE86IDUyOSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX0ZST006IDUzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9FX05PVEVTOiA1MzEsXG4gICAgRlRfRExDTEFTU0NPREVfRV9UTzogNTMyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfRlJPTTogNTMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfTk9URVM6IDUzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9GX1RPOiA1MzUsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfRlJPTTogNTM2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX05PVEVTOiA1MzcsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfVE86IDUzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfRlJPTTogNTM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9OT1RFUzogNTQwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9UTzogNTQxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX0ZST006IDU0MixcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9OT1RFUzogNTQzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX1RPOiA1NDQsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfRlJPTTogNTQ1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX05PVEVTOiA1NDYsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfVE86IDU0NyxcbiAgICBGVF9ETENMQVNTQ09ERV9IX0ZST006IDU0OCxcbiAgICBGVF9ETENMQVNTQ09ERV9IX05PVEVTOiA1NDksXG4gICAgRlRfRExDTEFTU0NPREVfSF9UTzogNTUwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfRlJPTTogNTUxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfTk9URVM6IDU1MixcbiAgICBGVF9ETENMQVNTQ09ERV9JX1RPOiA1NTMsXG4gICAgRlRfRExDTEFTU0NPREVfS19GUk9NOiA1NTQsXG4gICAgRlRfRExDTEFTU0NPREVfS19OT1RFUzogNTU1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfVE86IDU1NixcbiAgICBGVF9ETENMQVNTQ09ERV9MS19GUk9NOiA1NTcsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfTk9URVM6IDU1OCxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19UTzogNTU5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fRlJPTTogNTYwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fTk9URVM6IDU2MSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX1RPOiA1NjIsXG4gICAgRlRfRExDTEFTU0NPREVfU19GUk9NOiA1NjMsXG4gICAgRlRfRExDTEFTU0NPREVfU19OT1RFUzogNTY0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfVE86IDU2NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9GUk9NOiA1NjYsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfTk9URVM6IDU2NyxcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9UTzogNTY4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX0ZST006IDU2OSxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9OT1RFUzogNTcwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX1RPOiA1NzEsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfRlJPTTogNTcyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX05PVEVTOiA1NzMsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfVE86IDU3NCxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9GUk9NOiA1NzUsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfTk9URVM6IDU3NixcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9UTzogNTc3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfRlJPTTogNTc4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfTk9URVM6IDU3OSxcbiAgICBGVF9ETENMQVNTQ09ERV9WX1RPOiA1ODAsXG4gICAgRlRfRExDTEFTU0NPREVfV19GUk9NOiA1ODEsXG4gICAgRlRfRExDTEFTU0NPREVfV19OT1RFUzogNTgyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfVE86IDU4MyxcbiAgICBGVF9VUkw6IDU4NCxcbiAgICBGVF9DQUxJQkVSOiA1ODUsXG4gICAgRlRfTU9ERUw6IDU4NixcbiAgICBGVF9NQUtFOiA1ODcsXG4gICAgRlRfTlVNQkVSX09GX0NZTElOREVSUzogNTg4LFxuICAgIEZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046IDU4OSxcbiAgICBGVF9TVVJOQU1FX09GX1dJRkVfQUZURVJfUkVHSVNUUkFUSU9OOiA1OTAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9XSUZFOiA1OTEsXG4gICAgRlRfREFURV9PRl9CSVJUSF9PRl9IVVNCQU5EOiA1OTIsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOiA1OTMsXG4gICAgRlRfQ0lUSVpFTlNISVBfT0ZfU0VDT05EX1BFUlNPTjogNTk0LFxuICAgIEZUX0NWVjogNTk1LFxuICAgIEZUX0RBVEVfT0ZfSU5TVVJBTkNFX0VYUElSWTogNTk2LFxuICAgIEZUX01PUlRHQUdFX0JZOiA1OTcsXG4gICAgRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjogNTk4LFxuICAgIEZUX09MRF9EQVRFX09GX0lTU1VFOiA1OTksXG4gICAgRlRfT0xEX1BMQUNFX09GX0lTU1VFOiA2MDAsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfRlJPTTogNjAxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX1RPOiA2MDIsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfTk9URVM6IDYwMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9GUk9NOiA2MDQsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfVE86IDYwNSxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9OT1RFUzogNjA2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX0ZST006IDYwNyxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9UTzogNjA4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX05PVEVTOiA2MDksXG4gICAgRlRfRExDTEFTU0NPREVfSENfRlJPTTogNjEwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX1RPOiA2MTEsXG4gICAgRlRfRExDTEFTU0NPREVfSENfTk9URVM6IDYxMixcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19GUk9NOiA2MTMsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfVE86IDYxNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19OT1RFUzogNjE1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX0ZST006IDYxNixcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9UTzogNjE3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX05PVEVTOiA2MTgsXG4gICAgRlRfRExDTEFTU0NPREVfUl9GUk9NOiA2MTksXG4gICAgRlRfRExDTEFTU0NPREVfUl9UTzogNjIwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfTk9URVM6IDYyMSxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9GUk9NOiA2MjIsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfVE86IDYyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9OT1RFUzogNjI0LFxuICAgIEZUX0NJVElaRU5TSElQX1NUQVRVUzogNjI1LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfRlJPTTogNjI2LFxuICAgIEZUX01JTElUQVJZX1NFUlZJQ0VfVE86IDYyNyxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2V4XCJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXllIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGFpciBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZHJlc3NcIlxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb25vclwiXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNvY2lhbCBpbnN1cmFuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMjFzdCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBDbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2Egc3ViY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogVHlwZVwiXG4gICAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgaW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBzdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXJcIlxuICAgICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXNcIlxuICAgICAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIDUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHNlcmllc1wiXG4gICAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIG1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IHBlcm1pc3NpYmxlIHdlaWdodFwiXG4gICAgICAgICAgICBjYXNlIDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVubGFkZW4gbWFzc1wiXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWFcIlxuICAgICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXRcIlxuICAgICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCdWlsZGluZ1wiXG4gICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwYXJ0bWVudFwiXG4gICAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbnQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWEgb2YgYmlydGhwbGFjZVwiXG4gICAgICAgICAgICBjYXNlIDc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXRlIGNvZGUgb2YgYmlydGhwbGFjZVwiXG4gICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdHlcIlxuICAgICAgICAgICAgY2FzZSA3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmFsIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IHJlc3RyaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VlIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSA5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZHVwbGljYXRlc1wiXG4gICAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1lZGljYWwgbm90ZXMvY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tcmVzaWRlbnQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXJhdGlvbiBvZiBzdGF5XCJcbiAgICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRheVwiXG4gICAgICAgICAgICBjYXNlIDEwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aFwiXG4gICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJZZWFyXCJcbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBjdXN0b21lciBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbW1lcmNpYWwgdmVoaWNsZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBTb2NpYWwgSW5zdXJhbmNlIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDExMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgR2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIE5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIGp1cmlzZGljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBmb3IgdmFsaWRhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDEyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZlbnRvcnkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhY2UvZXRobmljaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiB2ZWhpY2xlIGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMTI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDEyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDEzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGFuZCBnaXZlbiBuYW1lcyAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIGlzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIG5hdGlvbmFsaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHBvd2VyXCJcbiAgICAgICAgICAgIGNhc2UgMTM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSB2b2x1bWVcIlxuICAgICAgICAgICAgY2FzZSAxMzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hhc3NpcyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxMzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSAxNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIDE0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb250cm9sIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXJlbnRzXFwnIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgMTQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY29uZCBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pZGRsZSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgaWRlbnRpZmljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSAxNDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIDE1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAxNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDE1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAxNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDE1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIElUUyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgYWNjZXNzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJpdGFsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDE2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYW55IG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBub3Rlc1wiXG4gICAgICAgICAgICBjYXNlIDE2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG91c2VcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhY2tpbmcgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvb2tsZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaWxkcmVuXCJcbiAgICAgICAgICAgIGNhc2UgMTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvcHlcIlxuICAgICAgICAgICAgY2FzZSAxNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb3NzaWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgRnVsbCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlcnJpdG9yaWFsIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyB3aXRoIGNvcnJlY3QgY2hlY2tzdW1zXCJcbiAgICAgICAgICAgIGNhc2UgMTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNETCBSZXN0cmljdGlvbiBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTh0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDE3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNvcmQgY3JlYXRlZFwiXG4gICAgICAgICAgICBjYXNlIDE3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGR1cGxpY2F0ZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDE3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXJkIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAxNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgSUQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlc3RpbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJsb29kIGdyb3VwXCJcbiAgICAgICAgICAgIGNhc2UgMTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAxODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtYWtlXCJcbiAgICAgICAgICAgIGNhc2UgMTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zYWN0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2VcIlxuICAgICAgICAgICAgY2FzZSAxODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9saW8gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyIEtleVwiXG4gICAgICAgICAgICBjYXNlIDE4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNdW5pY2lwYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSAxODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTG9jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAxOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VjdGlvblwiXG4gICAgICAgICAgICBjYXNlIDE5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPQ1IgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZGVyYWwgZWxlY3Rpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMTkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAxOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAxOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3RlclwiXG4gICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlL251bWJlciBvZiB0aGUgcHJldmlvdXMgZG9jdW1lbnRcIlxuICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmllbGQgZnJvbSBNUlpcIlxuICAgICAgICAgICAgY2FzZSAyMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VycmVudCBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXR1cyBFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rbm90ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1NDIENvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCJcbiAgICAgICAgICAgIGNhc2UgMjU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCJcbiAgICAgICAgICAgIGNhc2UgMjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSAyNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWklQIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCJcbiAgICAgICAgICAgIGNhc2UgMjU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiXG4gICAgICAgICAgICBjYXNlIDI2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgMjYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIEJpcnRoOiBDaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMjYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIEJpcnRoOiBTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogQ291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIDI2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0RMIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMjY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTl0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDI2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXZWlnaHQgKHBvdW5kKVwiXG4gICAgICAgICAgICBjYXNlIDI2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRpY2F0b3Igb2YgZG9jdW1lbnQgbGltaXRlZCBkdXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmRvcnNlbWVudCBleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmV2aXNpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGlhbmNlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAyNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJ1bmNhdGVkIHN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDI3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeGFtIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3JnYW5pemF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSAyNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5IGdyYWRlXCJcbiAgICAgICAgICAgIGNhc2UgMjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhbmtcIlxuICAgICAgICAgICAgY2FzZSAyODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVuZWZpdHMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIDI4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDI4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yXCJcbiAgICAgICAgICAgIGNhc2UgMjg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlbGF0aW9uc2hpcFwiXG4gICAgICAgICAgICBjYXNlIDI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVU0NJU1wiXG4gICAgICAgICAgICBjYXNlIDI4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIDI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25kaXRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMjg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSAyODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjcmV0aW9uYXJ5IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAyOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIDI5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgMjkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAyOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRVFWIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUxUIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmluYXJ5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWVcIlxuICAgICAgICAgICAgY2FzZSAyOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXAgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBzZWN1cml0eSBvcHRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBpbnRlZ3JpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDMwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcmVhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMzAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZhbGlkaXR5IHBlcmlvZFwiXG4gICAgICAgICAgICBjYXNlIDMwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXRyb24gaGVhZGVyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAzMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQkRCIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHN1YnR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHByb2R1Y3QgSURcIlxuICAgICAgICAgICAgY2FzZSAzMDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIGZvcm1hdCBvd25lclwiXG4gICAgICAgICAgICBjYXNlIDMxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGhvbmVcIlxuICAgICAgICAgICAgY2FzZSAzMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvZmVzc2lvblwiXG4gICAgICAgICAgICBjYXNlIDMxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3NpdGlvblwiXG4gICAgICAgICAgICBjYXNlIDMxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb25hbCBkYXRhIHN1bW1hcnlcIlxuICAgICAgICAgICAgY2FzZSAzMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdmFsaWQgSURzXCJcbiAgICAgICAgICAgIGNhc2UgMzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN1c3RvZHkgaW5mb1wiXG4gICAgICAgICAgICBjYXNlIDMxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9ic2VydmF0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDMxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXhcIlxuICAgICAgICAgICAgY2FzZSAzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWxpemF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAzMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlciBvZiBwZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSAzMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgcGVyc29uLCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMzIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IERhdGUgb2YgcmVjb3JkXCJcbiAgICAgICAgICAgIGNhc2UgMzI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IE5hbWVcIlxuICAgICAgICAgICAgY2FzZSAzMjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogUGhvbmVcIlxuICAgICAgICAgICAgY2FzZSAzMjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogQWRkcmVzc1wiXG4gICAgICAgICAgICBjYXNlIDMyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIDMyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZGF0YSBmcm9tIHRoZSBERzEgZGF0YSBncm91cFwiXG4gICAgICAgICAgICBjYXNlIDMzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlIG9mIGFwcHJvdmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDMzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZG1pbmlzdHJhdGl2ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIDMzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRhIGRpc2NyaW1pbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSAzMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUQgbnVtYmVyIG9mIElTTyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR05JQiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVwYXJ0bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsZWdyYXBoIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxsZXJnaWVzXCJcbiAgICAgICAgICAgIGNhc2UgMzQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VydCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50eVwiXG4gICAgICAgICAgICBjYXNlIDM0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIFNTTlwiXG4gICAgICAgICAgICBjYXNlIDM0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb0QgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4cGlyeSBkYXRlIG9mIE1vdG9yY3ljbGUgTm92aWNlIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDM1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEVUYgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFHWVwiXG4gICAgICAgICAgICBjYXNlIDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQTlIgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIDM1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGFycml2YWxcIlxuICAgICAgICAgICAgY2FzZSAzNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmxpZ2h0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGZsaWdodFwiXG4gICAgICAgICAgICBjYXNlIDM1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWF0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSAzNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0NXIHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgMzYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXIgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAzNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIDM2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb29tIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxpZ2lvblwiXG4gICAgICAgICAgICBjYXNlIDM2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aHMgdG8gZXhwaXJlXCJcbiAgICAgICAgICAgIGNhc2UgMzY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVsZWN0cm9uaWMgdGlja2V0IGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIDM2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYXJ0bWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrLWluIHNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIGRlc2lnbmF0b3Igb2YgYm9hcmRpbmcgcGFzcyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBudW1lcmljIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGlja2V0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVxdWVudCBmbHllciBhaXJsaW5lIGRlc2lnbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSAzNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlcXVlbnQgZmx5ZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZWUgYmFnZ2FnZSBhbGxvd2FuY2VcIlxuICAgICAgICAgICAgY2FzZSAzNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUERGNDE3IGNvZGVjXCJcbiAgICAgICAgICAgIGNhc2UgMzc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmV0ZXJhblwiXG4gICAgICAgICAgICBjYXNlIDM3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNDMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdmlsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDQzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc2VhdHNcIlxuICAgICAgICAgICAgY2FzZSA0MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHN0YW5kaW5nIHBsYWNlc1wiXG4gICAgICAgICAgICBjYXNlIDQzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggc3BlZWRcIlxuICAgICAgICAgICAgY2FzZSA0Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnVlbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNDM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZW52aXJvbm1lbnRhbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNDM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvd2VyLXRvLXdlaWdodCByYXRpb1wiXG4gICAgICAgICAgICBjYXNlIDQ0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyIChicmFrZWQpXCJcbiAgICAgICAgICAgIGNhc2UgNDQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBtYXNzIG9mIHRyYWlsZXIgKHVuYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIDQ0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFuc21pc3Npb24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDQ0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFpbGVyIGhpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgNDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjY29tcGFuaWVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGljZSBkaXN0cmljdFwiXG4gICAgICAgICAgICBjYXNlIDQ0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgNDQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheWxvYWQgY2FwYWNpdHlcIlxuICAgICAgICAgICAgY2FzZSA0NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGF4bGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pc3NpYmxlIGF4bGUgbG9hZFwiXG4gICAgICAgICAgICBjYXNlIDQ1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcmVjaW5jdFwiXG4gICAgICAgICAgICBjYXNlIDQ1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZpdGVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlB1cnBvc2Ugb2YgZW50cnlcIlxuICAgICAgICAgICAgY2FzZSA0NTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2tpbiBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDQ1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV4aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNDU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgNDU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIDQ1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA0NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBsb3lhbHR5IHByb2dyYW0gZm9yIGZyZXF1ZW50IGZseWVyc1wiXG4gICAgICAgICAgICBjYXNlIDQ1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaWNlbnNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIDQ2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeGNlcHQgaW4gdGFua3NcIlxuICAgICAgICAgICAgY2FzZSA0NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFzdCBUcmFjayBzZXJ2aWNlXCJcbiAgICAgICAgICAgIGNhc2UgNDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk93bmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyBmcm9tIElDQU8gUkZJRFwiXG4gICAgICAgICAgICBjYXNlIDQ2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgY2FyZCBpc3N1YW5jZXNcIlxuICAgICAgICAgICAgY2FzZSA0NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIDQ2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgNDY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlbnR1cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA0Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0ODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEogdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0ODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0OTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgNDk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0OTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVhbHRoIGluc3VyYW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0OTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3JhbmRmYXRoZXJcXCdzIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA0OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VsZWN0ZWUgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgNDk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA1MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgZ2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDUwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGNvdW50cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBjb3VudHJ5IG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmlyc3QgcmVuZXdhbFwiXG4gICAgICAgICAgICBjYXNlIDUxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHNlY29uZCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgNTEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGV4YW1pbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwcGxpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3VjaGVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBdXRob3JpemF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYWN1bHR5XCJcbiAgICAgICAgICAgIGNhc2UgNTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvcm0gb2YgZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkROSSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmV0aXJlbWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvZmVzc2lvbmFsIElEIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2UgYXQgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWWVhcnMgc2luY2UgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQTEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVSTFwiXG4gICAgICAgICAgICBjYXNlIDU4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYWxpYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgNTg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1ha2VcIlxuICAgICAgICAgICAgY2FzZSA1ODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGN5bGluZGVyc1wiXG4gICAgICAgICAgICBjYXNlIDU4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIGh1c2JhbmQgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNTkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgb2Ygd2lmZSBhZnRlciByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1OTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiB3aWZlXCJcbiAgICAgICAgICAgIGNhc2UgNTkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGggb2YgaHVzYmFuZFwiXG4gICAgICAgICAgICBjYXNlIDU5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXRpemVuc2hpcCBvZiB0aGUgZmlyc3QgcGVyc29uXCJcbiAgICAgICAgICAgIGNhc2UgNTk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBzZWNvbmQgcGVyc29uXCJcbiAgICAgICAgICAgIGNhc2UgNTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNWVi9DVkNcIlxuICAgICAgICAgICAgY2FzZSA1OTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgaW5zdXJhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgNTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vcnRnYWdlIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgNTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2xkIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2xkIHBsYWNlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXRpemVuc2hpcCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSA2MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgc2VydmljZSBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pbGl0YXJ5IHNlcnZpY2UgdG9cIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IEZyYW1lU2hhcGVUeXBlID0ge1xuICAgIExJTkU6IDAsXG4gICAgQ09STkVSOiAxLFxufVxuXG5leHBvcnQgY29uc3QgTENJRCA9IHtcbiAgICBMQVRJTjogMCxcbiAgICBBRlJJS0FBTlM6IDEwNzgsXG4gICAgQUxCQU5JQU46IDEwNTIsXG4gICAgQVJBQklDX0FMR0VSSUE6IDUxMjEsXG4gICAgQVJBQklDX0JBSFJBSU46IDE1MzYxLFxuICAgIEFSQUJJQ19FR1lQVDogMzA3MyxcbiAgICBBUkFCSUNfSVJBUTogMjA0OSxcbiAgICBBUkFCSUNfSk9SREFOOiAxMTI2NSxcbiAgICBBUkFCSUNfS1VXQUlUOiAxMzMxMyxcbiAgICBBUkFCSUNfTEVCQU5PTjogMTIyODksXG4gICAgQVJBQklDX0xJQllBOiA0MDk3LFxuICAgIEFSQUJJQ19NT1JPQ0NPOiA2MTQ1LFxuICAgIEFSQUJJQ19PTUFOOiA4MTkzLFxuICAgIEFSQUJJQ19RQVRBUjogMTYzODUsXG4gICAgQVJBQklDX1NBVURJX0FSQUJJQTogMTAyNSxcbiAgICBBUkFCSUNfU1lSSUE6IDEwMjQxLFxuICAgIEFSQUJJQ19UVU5JU0lBOiA3MTY5LFxuICAgIEFSQUJJQ19VQUU6IDE0MzM3LFxuICAgIEFSQUJJQ19ZRU1FTjogOTIxNyxcbiAgICBBUkFCSUNfQVJNRU5JQU46IDEwNjcsXG4gICAgQVpFUklfQ1lSSUxJQzogMjA5MixcbiAgICBBWkVSSV9MQVRJTjogMTA2OCxcbiAgICBCQVNRVUU6IDEwNjksXG4gICAgQkVMQVJVU0lBTjogMTA1OSxcbiAgICBCVUxHQVJJQU46IDEwMjYsXG4gICAgQ0FUQUxBTjogMTAyNyxcbiAgICBDSElORVNFX0hPTkdLT05HX1NBUjogMzA3NixcbiAgICBDSElORVNFX01BQ0FPX1NBUjogNTEyNCxcbiAgICBDSElORVNFOiAyMDUyLFxuICAgIENISU5FU0VfU0lOR0FQT1JFOiA0MTAwLFxuICAgIENISU5FU0VfVEFJV0FOOiAxMDI4LFxuICAgIENST0FUSUFOOiAxMDUwLFxuICAgIENaRUNIOiAxMDI5LFxuICAgIERBTklTSDogMTAzMCxcbiAgICBESVZFSEk6IDExMjUsXG4gICAgRFVUQ0hfQkVMR0lVTTogMjA2NyxcbiAgICBEVVRDSF9ORVRIRVJMQU5EUzogMTA0MyxcbiAgICBFTkdMSVNIX0FVU1RSQUxJQTogMzA4MSxcbiAgICBFTkdMSVNIX0JFTElaRTogMTAyNDksXG4gICAgRU5HTElTSF9DQU5BREE6IDQxMDUsXG4gICAgRU5HTElTSF9DQVJSSUJFQU46IDkyMjUsXG4gICAgRU5HTElTSF9JUkVMQU5EOiA2MTUzLFxuICAgIEVOR0xJU0hfSkFNQUlDQTogODIwMSxcbiAgICBFTkdMSVNIX05FV19aRUFMQU5EOiA1MTI5LFxuICAgIEVOR0xJU0hfUEhJTElQUElORVM6IDEzMzIxLFxuICAgIEVOR0xJU0hfU09VVEhfQUZSSUNBOiA3MTc3LFxuICAgIEVOR0xJU0hfVFJJTklEQUQ6IDExMjczLFxuICAgIEVOR0xJU0hfVUs6IDIwNTcsXG4gICAgRU5HTElTSF9VUzogMTAzMyxcbiAgICBFTkdMSVNIX1pJTUJBQldFOiAxMjI5NyxcbiAgICBFU1RPTklBTjogMTA2MSxcbiAgICBGQUVST0VTRTogMTA4MCxcbiAgICBGQVJTSTogMTA2NSxcbiAgICBGSU5OSVNIOiAxMDM1LFxuICAgIEZSRU5DSF9CRUxHSVVNOiAyMDYwLFxuICAgIEZSRU5DSF9DQU5BREE6IDMwODQsXG4gICAgRlJFTkNIX0ZSQU5DRTogMTAzNixcbiAgICBGUkVOQ0hfTFVYRU1CT1VSRzogNTEzMixcbiAgICBGUkVOQ0hfTU9OQUNPOiA2MTU2LFxuICAgIEZSRU5DSF9TV0lUWkVSTEFORDogNDEwOCxcbiAgICBGWVJPX01BQ0VET05JQU46IDEwNzEsXG4gICAgR0FMSUNJQU46IDExMTAsXG4gICAgR0VPUkdJQU46IDEwNzksXG4gICAgR0VSTUFOX0FVU1RSSUE6IDMwNzksXG4gICAgR0VSTUFOX0dFUk1BTlk6IDEwMzEsXG4gICAgR0VSTUFOX0xJRUNIVEVOU1RFSU46IDUxMjcsXG4gICAgR0VSTUFOX0xVWEVNQk9VUkc6IDQxMDMsXG4gICAgR0VSTUFOX1NXSVRaRVJMQU5EOiAyMDU1LFxuICAgIEdSRUVLOiAxMDMyLFxuICAgIEdVSkFSQVRJOiAxMDk1LFxuICAgIEhFQlJFVzogMTAzNyxcbiAgICBISU5ESV9JTkRJQTogMTA4MSxcbiAgICBIVU5HQVJJQU46IDEwMzgsXG4gICAgSUNFTEFORElDOiAxMDM5LFxuICAgIElORE9ORVNJQU46IDEwNTcsXG4gICAgSVRBTElBTl9JVEFMWTogMTA0MCxcbiAgICBJVEFMSUFOX1NXSVRaRVJMQU5EOiAyMDY0LFxuICAgIEpBUEFORVNFOiAxMDQxLFxuICAgIEtBTk5BREE6IDEwOTksXG4gICAgS0FaQUtIOiAxMDg3LFxuICAgIEtPTktBTkk6IDExMTEsXG4gICAgS09SRUFOOiAxMDQyLFxuICAgIEtZUkdZWl9DWVJJTElDSzogMTA4OCxcbiAgICBMQVRWSUFOOiAxMDYyLFxuICAgIExJVEhVQU5JQU46IDEwNjMsXG4gICAgTUFMQVlfTUFMQVlTSUE6IDEwODYsXG4gICAgTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06IDIxMTAsXG4gICAgTUFSQVRISTogMTEwMixcbiAgICBNT05HT0xJQU5fQ1lSSUxJQzogMTEwNCxcbiAgICBOT1JXRUdJQU5fQk9LTUFMOiAxMDQ0LFxuICAgIE5PUldFR0lBTl9OWU9SU0s6IDIwNjgsXG4gICAgUE9MSVNIOiAxMDQ1LFxuICAgIFBPUlRVR1VFU0VfQlJBWklMOiAxMDQ2LFxuICAgIFBPUlRVR1VFU0VfUE9SVFVHQUw6IDIwNzAsXG4gICAgUFVOSkFCSTogMTA5NCxcbiAgICBSSEFFVE9fUk9NQU5JQzogMTA0NyxcbiAgICBST01BTklBTjogMTA0OCxcbiAgICBSVVNTSUFOOiAxMDQ5LFxuICAgIFNBTlNLUklUOiAxMTAzLFxuICAgIFNFUkJJQU5fQ1lSSUxJQzogMzA5OCxcbiAgICBTRVJCSUFOX0xBVElOOiAyMDc0LFxuICAgIFNMT1ZBSzogMTA1MSxcbiAgICBTTE9WRU5JQU46IDEwNjAsXG4gICAgU1BBTklTSF9BUkdFTlRJTkE6IDExMjc0LFxuICAgIFNQQU5JU0hfQk9MSVZJQTogMTYzOTQsXG4gICAgU1BBTklTSF9DSElMRTogMTMzMjIsXG4gICAgU1BBTklDSF9DT0xPTUJJQTogOTIyNixcbiAgICBTUEFOSVNIX0NPU1RBX1JJQ0E6IDUxMzAsXG4gICAgU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6IDcxNzgsXG4gICAgU1BBTklTSF9FQ1VBRE9SOiAxMjI5OCxcbiAgICBTUEFOSVNIX0VMX1NBTFZBRE9SOiAxNzQxOCxcbiAgICBTUEFOSVNIX0dVQVRFTUFMQTogNDEwNixcbiAgICBTUEFOSVNIX0hPTkRVUkFTOiAxODQ0MixcbiAgICBTUEFOSVNIX01FWElDTzogMjA1OCxcbiAgICBTUEFOSVNIX05JQ0FSQUdVQTogMTk0NjYsXG4gICAgU1BBTklTSF9QQU5BTUE6IDYxNTQsXG4gICAgU1BBTklTSF9QQVJBR1VBWTogMTUzNzAsXG4gICAgU1BBTklTSF9QRVJVOiAxMDI1MCxcbiAgICBTUEFOSVNIX1BVRVJUT19SSUNPOiAyMDQ5MCxcbiAgICBTUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6IDEwMzQsXG4gICAgU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6IDMwODIsXG4gICAgU1BBTklTSF9VUlVHVUFZOiAxNDM0NixcbiAgICBTUEFOSVNIX1ZFTkVaVUVMQTogODIwMixcbiAgICBTV0FISUxJOiAxMDg5LFxuICAgIFNXRURJU0g6IDEwNTMsXG4gICAgU1dFRElTSF9GSU5MQU5EOiAyMDc3LFxuICAgIFNZUklBQzogMTExNCxcbiAgICBUQU1JTDogMTA5NyxcbiAgICBUQVRBUjogMTA5MixcbiAgICBURUxVR1U6IDEwOTgsXG4gICAgVEhBSV9USEFJTEFORDogMTA1NCxcbiAgICBUVVJLSVNIOiAxMDU1LFxuICAgIFRBSklLX0NZUklMTElDOiAxMDY0LFxuICAgIFRVUktNRU46IDEwOTAsXG4gICAgVUtSQUlOSUFOOiAxMDU4LFxuICAgIFVSRFU6IDEwNTYsXG4gICAgVVpCRUtfQ1lSSUxJQzogMjExNSxcbiAgICBVWkJFS19MQVRJTjogMTA5MSxcbiAgICBWSUVUTkFNRVNFOiAxMDY2LFxuICAgIENUQ19TSU1QTElGSUVEOiA1MDAwMSxcbiAgICBDVENfVFJBRElUSU9OQUw6IDUwMDAyLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0aW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFGUklLQUFOUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZnJpa2FhbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFMQkFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsYmFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQUxHRVJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEFsZ2VyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQkFIUkFJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEJhaHJhaW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfRUdZUFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChFZ3lwdClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19JUkFROlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoSXJhcSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19KT1JEQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChKb3JkYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfS1VXQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoS3V3YWl0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0xFQkFOT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChMZWJhbm9uKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0xJQllBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTGlieWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTU9ST0NDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKE1vcm9jY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfT01BTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKE9tYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfUUFUQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChRYXRhcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19TQVVESV9BUkFCSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChTYXVkaSBBcmFiaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfU1lSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChTeXJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19UVU5JU0lBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoVHVuaXNpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19VQUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChVLkEuRS4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfWUVNRU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChZZW1lbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19BUk1FTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcm1lbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BWkVSSV9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQVNRVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFzcXVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CRUxBUlVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbGFydXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJVTEdBUklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCdWxnYXJpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNBVEFMQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2F0YWxhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9IT05HS09OR19TQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoSG9uZ0tvbmcgUy5BLlIuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9NQUNBT19TQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoTWFjYW8gUy5BLlIuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX1NJTkdBUE9SRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChTaW5nYXBvcmUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX1RBSVdBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChUYWl3YW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DUk9BVElBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcm9hdGlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1pFQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3plY2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRBTklTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYW5pc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRJVkVISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXZlaGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRVVENIX0JFTEdJVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHV0Y2ggKEJlbGdpdW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EVVRDSF9ORVRIRVJMQU5EUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXRjaCAoTmV0aGVybGFuZHMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0FVU1RSQUxJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChBdXN0cmFsaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0JFTElaRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChCZWxpemUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0NBTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChDYW5hZGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0NBUlJJQkVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChDYXJpYmJlYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0lSRUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoSXJlbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfSkFNQUlDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChKYW1haWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9ORVdfWkVBTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChOZXcgWmVhbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfUEhJTElQUElORVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoUGhpbGlwcGluZXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1NPVVRIX0FGUklDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChTb3V0aCBBZnJpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1RSSU5JREFEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFRyaW5pZGFkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9VSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfWklNQkFCV0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoWmltYmFid2UpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FU1RPTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFc3RvbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRkFFUk9FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFlcm9lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZBUlNJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhcnNpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GSU5OSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbm5pc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9CRUxHSVVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoQmVsZ2l1bSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9DQU5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChDYW5hZGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfRlJBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoRnJhbmNlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0xVWEVNQk9VUkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChMdXhlbWJvdXJnKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX01PTkFDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKE1vbmFjbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0FMSUNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2FsaWNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFT1JHSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlb3JnaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fQVVTVFJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEF1c3RyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fR0VSTUFOWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEdlcm1hbnkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fTElFQ0hURU5TVEVJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKExpZWNodGVuc3RlaW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fTFVYRU1CT1VSRzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEx1eGVtYm91cmcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdSRUVLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdyZWVrXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HVUpBUkFUSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHdWphcmF0aVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSEVCUkVXOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlYnJld1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSElORElfSU5ESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGluZGkgKEluZGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSFVOR0FSSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkh1bmdhcmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSUNFTEFORElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkljZWxhbmRpY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSU5ET05FU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRvbmVzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JVEFMSUFOX0lUQUxZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkl0YWxpYW4gKEl0YWx5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSVRBTElBTl9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJdGFsaWFuIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkpBUEFORVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkphcGFuZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LQU5OQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkthbm5hZGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBWkFLSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYXpha2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktPTktBTkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29ua2FuaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09SRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIktvcmVhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS1lSR1laX0NZUklMSUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkt5cmd5eiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQVRWSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdHZpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxJVEhVQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl0aHVhbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRllST19NQUNFRE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZZUk8gTWFjZWRvbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfTUFMQVlTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKE1hbGF5c2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKEJydW5laSBEYXJ1c3NhbGFtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFSQVRISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJhdGhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NT05HT0xJQU5fQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb25nb2xpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX0JPS01BTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKEJva21hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5PUldFR0lBTl9OWU9SU0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9yd2VnaWFuIChOeW5vcnNrKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9MSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9CUkFaSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHVndWVzZSAoQnJhemlsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9QT1JUVUdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChQb3J0dWdhbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBVTkpBQkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHVuamFiaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkhBRVRPX1JPTUFOSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmhhZXRvLVJvbWFuaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJPTUFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJvbWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SVVNTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1c3NpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNBTlNLUklUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNhbnNrcml0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyYmlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkFLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3Zha1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3ZlbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9BUkdFTlRJTkE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQXJnZW50aW5hKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9CT0xJVklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEJvbGl2aWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NISUxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENoaWxlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklDSF9DT0xPTUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb2xvbWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQ09TVEFfUklDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb3N0YSBSaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FQ1VBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVjdWFkb3IpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0VMX1NBTFZBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVsIFNhbHZhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9HVUFURU1BTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoR3VhdGVtYWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9IT05EVVJBUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChIb25kdXJhcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTUVYSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE1leGljbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTklDQVJBR1VBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE5pY2FyYWd1YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFOQU1BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhbmFtYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFSQUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGFyYWd1YXkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BFUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGVydSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUFVFUlRPX1JJQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUHVlcnRvIFJpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVHJhZGl0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEludGVybmF0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVVJVR1VBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChVcnVndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9WRU5FWlVFTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVmVuZXp1ZWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dBSElMSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2FoaWxpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3ZWRpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXRURJU0hfRklOTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoIChGaW5sYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1lSSUFDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN5cmlhY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFNSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFtaWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhdGFyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5URUxVR1U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsdWd1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5USEFJX1RIQUlMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRoYWkgKFRoYWlsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS0lTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJraXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQUpJS19DWVJJTExJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYWppayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UVVJLTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1cmttZW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVLUkFJTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVa3JhaW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVSRFU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXJkdVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VWkJFS19MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5WSUVUTkFNRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpZXRuYW1lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNUQ19TSU1QTElGSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBTaW1wbGlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfVFJBRElUSU9OQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1RDIFRyYWRpdGlvbmFsXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBLRFJlc291cmNlVHlwZSA9IHtcbiAgICBDRVJUSUZJQ0FURV9QQTogMCxcbiAgICBDRVJUSUZJQ0FURV9UQTogMSxcbiAgICBMRElGOiAyLFxuICAgIENSTDogMyxcbiAgICBNTDogNCxcbiAgICBERUZMOiA1LFxuICAgIERFVkw6IDYsXG4gICAgQkw6IDcsXG5cclxuICAgIGdldFR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInBhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxyXG4gICAgICAgICAgICBjYXNlIFwidGFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1RBXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZGlmXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5MRElGXHJcbiAgICAgICAgICAgIGNhc2UgXCJjcmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNSTFxyXG4gICAgICAgICAgICBjYXNlIFwibWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1MXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWZsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERUZMXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXZsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERVZMXHJcbiAgICAgICAgICAgIGNhc2UgXCJibFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQkxcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSB7XG4gICAgTk9UX1JFQURZOiAwLFxuICAgIFJFQURZOiAxLFxuICAgIFRJTUVPVVQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBSR0xNZWFzdXJlU3lzdGVtID0ge1xuICAgIE1FVFJJQzogMCxcbiAgICBJTVBFUklBTDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvSWRlbnRpZmllciA9IHtcbiAgICBTQ0VOQVJJT19NUlo6IFwiTXJ6XCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERTogXCJCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFOiBcIkxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX09DUjogXCJPY3JcIixcbiAgICBTQ0VOQVJJT19ET0NUWVBFOiBcIkRvY1R5cGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERTogXCJNcnpPckJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfTE9DQVRFOiBcIk1yek9yTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX0FORF9MT0NBVEU6IFwiTXJ6QW5kTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX09DUjogXCJNcnpPck9jclwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFX09SX09DUjogXCJNcnpPckJhcmNvZGVPck9jclwiLFxuICAgIFNDRU5BUklPX0xPQ0FURV9WSVNVQUxfQU5EX01SWl9PUl9PQ1I6IFwiTG9jYXRlVmlzdWFsX0FuZF9NcnpPck9jclwiLFxuICAgIFNDRU5BUklPX0ZVTExfUFJPQ0VTUzogXCJGdWxsUHJvY2Vzc1wiLFxuICAgIFNDRU5BUklPX0ZVTExfQVVUSDogXCJGdWxsQXV0aFwiLFxuICAgIFNDRU5BUklPX0lEM1JVUzogXCJJZDNSdXNcIixcbiAgICBTQ0VOQVJJT19SVVNfU1RBTVA6IFwiUnVzU3RhbXBcIixcbiAgICBTQ0VOQVJJT19PQ1JfRlJFRTogXCJPY3JGcmVlXCIsXG4gICAgU0NFTkFSSU9fQ1JFRElUX0NBUkQ6IFwiQ3JlZGl0Q2FyZFwiLFxuICAgIFNDRU5BUklPX0NBUFRVUkU6IFwiQ2FwdHVyZVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGluZUNhcCA9IHtcbiAgICBCdXR0OiAwLFxuICAgIFJvdW5kOiAxLFxuICAgIFNxdWFyZTogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrID0ge1xuICAgIFBvcnRyYWl0OiAwLFxuICAgIExhbmRzY2FwZUxlZnQ6IDEsXG4gICAgTGFuZHNjYXBlUmlnaHQ6IDIsXG4gICAgUG9ydHJhaXRVcHNpZGVEb3duOiAzLFxuICAgIExhbmRzY2FwZTogNCxcbiAgICBBbGw6IDUsXG4gICAgQWxsQnV0VXBzaWRlRG93bjogNixcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQgPSB7XG4gICAgTG93OiAwLFxuICAgIE1lZGl1bTogMSxcbiAgICBIaWdoOiAyLFxuICAgIFBob3RvOiAzLFxuICAgIElucHV0UHJpb3JpdHk6IDQsXG4gICAgUUhEOTYweDU0MDogNSxcbiAgICBIZDEyODB4NzIwOiA2LFxuICAgIEhkMTkyMHgxMDgwOiA3LFxuICAgIEhkNEszODQweDIxNjA6IDgsXG4gICAgSUZyYW1lOTYweDU0MDogOSxcbiAgICBJRnJhbWUxMjgweDcyMDogMTAsXG4gICAgUXZnYTMyMHgyNDA6IDExLFxuICAgIFZnYTY0MHg0ODA6IDEyLFxuICAgIENpZjM1MngyODg6IDEzLFxufVxuXG5leHBvcnQgY29uc3QgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24gPSB7XG4gICAgRnJvbnQ6IDAsXG4gICAgQmFjazogMSxcbiAgICBVbnNwZWNpZmllZDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFNjYWxlVG9GaWxsOiAwLFxuICAgIFNjYWxlQXNwZWN0Rml0OiAxLFxuICAgIFNjYWxlQXNwZWN0RmlsbDogMixcbiAgICBSZWRyYXc6IDMsXG4gICAgQ2VudGVyOiA0LFxuICAgIFRvcDogNSxcbiAgICBCb3R0b206IDYsXG4gICAgTGVmdDogNyxcbiAgICBSaWdodDogOCxcbiAgICBUb3BMZWZ0OiA5LFxuICAgIFRvcFJpZ2h0OiAxMCxcbiAgICBCb3R0b21MZWZ0OiAxMSxcbiAgICBCb3R0b21SaWdodDogMTIsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgQmFyY29kZVJlc3VsdCxcbiAgIEJhcmNvZGVUeXBlLFxuICAgQ2FtZXJhTW9kZSxcbiAgIENhbWVyYVR5cGVzLFxuICAgQ2FwdHVyZU1vZGUsXG4gICBkaURvY1R5cGUsXG4gICBEb2NGb3JtYXQsXG4gICBEb2NSZWFkZXJBY3Rpb24sXG4gICBEb2NSZWFkZXJGcmFtZSxcbiAgIERvY1JlYWRlck9yaWVudGF0aW9uLFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBlQ2hlY2tSZXN1bHQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBlUHJvY2Vzc0dMQ29tbWFuZHMsXG4gICBlUmVxdWVzdENvbW1hbmQsXG4gICBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9CYXVkUmF0ZSxcbiAgIGVSRklEX0NlcnRpZmljYXRlVHlwZSxcbiAgIGVSRklEX0RhdGFGaWxlX1R5cGUsXG4gICBlUkZJRF9Ob3RpZmljYXRpb25BbmRFcnJvckNvZGVzLFxuICAgZVJGSURfUGFzc3dvcmRfVHlwZSxcbiAgIGVSRklEX1NES19Qcm9maWxlclR5cGUsXG4gICBlUkZJRF9UZXJtaW5hbFR5cGUsXG4gICBlUlBSTV9BdXRoZW50aWNpdHksXG4gICBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlLFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgZVZpc3VhbEZpZWxkVHlwZSxcbiAgIEZvbnRTdHlsZSxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgTENJRCxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyxcbiAgIFJHTE1lYXN1cmVTeXN0ZW0sXG4gICBTY2VuYXJpb0lkZW50aWZpZXIsXG4gICBMaW5lQ2FwLFxuICAgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2ssXG4gICBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24sXG4gICBVSVZpZXdDb250ZW50TW9kZSxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEb2N1bWVudFJlYWRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0RvY3VtZW50UmVhZGVyLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIEFQSSB2ZXJzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QVBJVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdmFpbGFibGVTY2VuYXJpb3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIENvcmUgbW9kZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENvcmVNb2RlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSB2ZXJzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29yZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBleHBvcnQgZGF0ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERhdGFiYXNlRGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIElEXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VJRCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIHZlcnNpb25cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgdGhlIFNESyBpcyByZWFkeSBmb3IgdXNlXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERvY3VtZW50UmVhZGVyU3RhdHVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBjb3VudHJpZXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZUNvdW50cmllc051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIG51bWJlciBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VEb2N1bWVudHNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBzZWxlY3RlZCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGVjdGVkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBwYXRoIHRvIHRoZSBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQmVmb3JlIHVzaW5nIHRoaXMsIGVuYWJsZSBsb2cgc2F2aW5nLiBFYWNoIG5ldyBzZXNzaW9uIHByb3ZpZGVzIGEgZGlmZmVyZW50IHBhdGhcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZXNzaW9uTG9nRm9sZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzIHVzZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERhdGFiYXNlRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgc2hvd1NjYW5uZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIG9wZW4gdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIHN0YXJ0IGl0cyBwcm9jZXNzaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdGFydFJGSURSZWFkZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsb3NlIGNhbWVyYSBwcmV2aWV3IGFuZCBzdG9wIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRlaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWluaXRpYWxpemVSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXV0aGVudGljYXRvckF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBSRklEIHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmZpZFNjZW5hcmlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMaWNlbnNlRXhwaXJ5RGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgYSBsaXN0IG9mIGNvdW50cnkgaWRlbnRpZmllcnMgdGhhdCBhcmUgZGVmaW5lZCBmb3IgcHJvY2Vzc2luZyBpbiB0aGUgbGljZW5zZS4gSWYgdGhlIGFycmF5IGlzIGVtcHR5LCB0aGVyZSBhcmUgbm8gcmVzdHJpY3Rpb25zIGZvciBwcm9jZXNzaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpY2Vuc2VJc1JmaWRBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q2FtZXJhU2Vzc2lvbklzUGF1c2VkKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIHJlbW92ZSB0aGUgYWRkZWQgZGF0YWJhc2VcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBjYW5jZWwgZGF0YWJhc2UgdXBkYXRlXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuY2VsREJVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xlYXIgUEtEIGNlcnRpZmljYXRlc1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgUkZJRCBjaGlwIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlYWRSRklEKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRSZmlkU2Vzc2lvblN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBDb3JlIGxvZ3NcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBsb2dzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlQ29yZUxvZ3MobG9ncyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIElmIHNldCwgdGhlIGNhbWVyYSBzZXNzaW9uIHdpbGwgYmUgcGF1c2VkIGFzIHNvb24gYXMgdGhlIHJlc3VsdCBpcyByZWNlaXZlZFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENhbWVyYVNlc3Npb25Jc1BhdXNlZChwYXVzZWQpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpbyBTY2VuYXJpb2BzIHVuaXF1ZSBpZGVudGlmaWVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U2NlbmFyaW8oc2NlbmFyaW8pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZXMoaW1hZ2VzKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHNob3dTY2FubmVyV2l0aENhbWVyYUlEKGNhbWVyYUlEKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCBmb3IgZ2V0dGluZyBhbHdheXMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBydW5BdXRvVXBkYXRlKGRhdGFiYXNlVHlwZSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY29uZmlnIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAqICBuYW1lIC0gc3RyaW5nXG4gICAqICB2YWx1ZSAtIGFueVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldENvbmZpZyhjb25maWcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBzY2VuYXJpbyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlIHtuYW1lPzogdmFsdWUxLG5hbWU/OiB2YWx1ZTIsIC4uLn1cbiAgICogIG5hbWUgLSBzdHJpbmdcbiAgICogIHZhbHVlIC0gYW55XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmZpZFNjZW5hcmlvKHNjZW5hcmlvKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIERvY3VtZW50IFJlYWRlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGljZW5zZSBMaWNlbnNlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkb3dubG9hZCBhIGRhdGFiYXNlIGZyb20gdGhlIFJlZ3VsYSdzIHNlcnZlclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBwcmVwYXJlRGF0YWJhc2UoZGF0YWJhc2VUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZShpbWFnZSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFJmaWRTZXNzaW9uU3RhdHVzKHN0YXR1cyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXIgd2l0aCB0aGUgcGF0aCB0byB0aGUgZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpY2Vuc2UgTGljZW5zZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIHRvIHRoZSBkYXRhYmFzZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemVSZWFkZXJXaXRoRGF0YWJhc2VQYXRoKGxpY2Vuc2UsIHBhdGgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhbiBpbWFnZSBmcmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICogQHBhcmFtIHthbnl9IHBhcmFtcyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlIHt3aWR0aDogdmFsdWUxLCBoZWlnaHQ6IHZhbHVlMiwgdHlwZTogdmFsdWUzfVxuICAgKiAgdmFsdWUxIC0gbnVtYmVyXG4gICAqICB2YWx1ZTIgLSBudW1iZXJcbiAgICogIHZhbHVlMyAtIG51bWJlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VGcmFtZShpbWFnZSwgcGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2Ugd2l0aCBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgKiBAcGFyYW0ge2FueX0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgKiAgdmFsdWUgLSBhbnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoaW1hZ2UsIG9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhIHN0cmVhbSBvZiBmcmFtZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJ5dGVTdHJpbmdcbiAgICogQHBhcmFtIHthbnl9IHBhcmFtcyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlIHt3aWR0aDogdmFsdWUsIGhlaWdodDogdmFsdWUsIHR5cGU6IHZhbHVlfVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplVmlkZW9GcmFtZShieXRlU3RyaW5nLCBwYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIGFuZCBvcHRpb25zIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJRFxuICAgKiBAcGFyYW0ge2FueX0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgKiAgdmFsdWUgLSBhbnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHNob3dTY2FubmVyV2l0aENhbWVyYUlEQW5kT3B0cyhjYW1lcmFJRCwgb3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGltYWdlcyB3aXRoIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7d2lkdGg6IHZhbHVlMSwgaGVpZ2h0OiB2YWx1ZTIsIHR5cGU6IHZhbHVlM31cbiAgICogIHZhbHVlMSAtIG51bWJlclxuICAgKiAgdmFsdWUyIC0gbnVtYmVyXG4gICAqICB2YWx1ZTMgLSBudW1iZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aEltYWdlSW5wdXRQYXJhbXMoaW1hZ2UsIHBhcmFtcyk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGEgc3RyZWFtIG9mIGZyYW1lc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZVdpdGhDYW1lcmFNb2RlKGltYWdlLCBtb2RlKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cbn0iXX0=