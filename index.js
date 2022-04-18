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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderException;
        result.errorCode = jsonObject["errorCode"];
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
    return DocumentReaderException;
}());
export { DocumentReaderException };
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
var PKDCertificate = /** @class */ (function () {
    function PKDCertificate() {
    }
    PKDCertificate.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
                result.attributes.push(PAAttribute.fromJson(jsonObject["attributes"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
                result.certificateChain.push(CertificateChain.fromJson(jsonObject["certificateChain"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new DocumentReaderUvFiberElement;
        result.rectArray = [];
        if (jsonObject["rectArray"] != null) {
            for (var i in jsonObject["rectArray"]) {
                result.rectArray.push(DocReaderFieldRect.fromJson(jsonObject["rectArray"][i]));
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
var DocumentReaderResults = /** @class */ (function () {
    function DocumentReaderResults() {
    }
    DocumentReaderResults.prototype.getTextFieldValueByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.lcid, lcid = _b === void 0 ? 0 : _b, _c = _a.source, source = _c === void 0 ? -1 : _c, _d = _a.original, original = _d === void 0 ? false : _d;
        if (this.textResult == null)
            return null;
        var field = this.findByTypeAndLcid(fieldType, lcid);
        if (field == null)
            return null;
        var value = this.findBySource(field, source);
        if (value == null)
            return null;
        return original ? value.originalValue : value.value;
    };
    DocumentReaderResults.prototype.getTextFieldStatusByType = function (fieldType, lcid) {
        if (this.textResult == null)
            return 0;
        var field = this.findByTypeAndLcid(fieldType, lcid);
        return field != null ? field.status : 0;
    };
    DocumentReaderResults.prototype.getGraphicFieldImageByType = function (_a) {
        var fieldType = _a.fieldType, _b = _a.source, source = _b === void 0 ? -1 : _b, _c = _a.light, light = _c === void 0 ? -1 : _c, _d = _a.pageIndex, pageIndex = _d === void 0 ? -1 : _d;
        if (this.graphicResult == null)
            return null;
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
        return foundFields.length > 0 ? foundFields[0].value : null;
    };
    DocumentReaderResults.prototype.getQualityResult = function (_a) {
        var imageQualityCheckType = _a.imageQualityCheckType, _b = _a.securityFeature, securityFeature = _b === void 0 ? -1 : _b, _c = _a.pageIndex, pageIndex = _c === void 0 ? 0 : _c;
        var resultSum = 2;
        if (this.imageQuality == null)
            return resultSum;
        var imageQualityGroup;
        for (var _i = 0, _d = this.imageQuality; _i < _d.length; _i++) {
            var iq = _d[_i];
            if (iq != null && iq.pageIndex == pageIndex)
                imageQualityGroup = iq;
        }
        if (imageQualityGroup == null)
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
        var field;
        var foundFields = [];
        for (var _i = 0, _a = this.textResult.fields; _i < _a.length; _i++) {
            field = _a[_i];
            if (field.fieldType === type)
                foundFields.push(field);
        }
        if (foundFields.length <= 0)
            return null;
        var foundField = null;
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
            if (mrzVal != null)
                return mrzVal;
            value = this.findBySource(field, 18);
            if (value != null)
                return value;
            var visualVal = this.findBySource(field, 17);
            return visualVal != null ? visualVal : null;
        }
        for (var _i = 0, _a = field.values; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.sourceType === sourceType)
                return item;
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
        result.status = DocumentReaderResultsStatus.fromJson(jsonObject["status"]);
        result.vdsncData = VDSNCData.fromJson(jsonObject["vdsncData"]);
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
export var DocumentReaderExceptionEnum = {
    NATIVE_JAVA_EXCEPTION: 0,
    DOCUMENT_READER_STATE_EXCEPTION: 1,
    DOCUMENT_READER_WRONG_INPUT: 2,
    INITIALIZATION_FAILED: 3,
    DOCUMENT_READER_BLE_EXCEPTION: 201,
    DB_DOWNLOAD_ERROR: 301,
    LICENSE_ABSENT_OR_CORRUPTED: 101,
    LICENSE_INVALID_DATE: 102,
    LICENSE_INVALID_VERSION: 103,
    LICENSE_INVALID_DEVICE_ID: 104,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 105,
    LICENSE_NO_CAPABILITIES: 106,
    LICENSE_NO_AUTHENTICITY: 107,
    LICENSE_NO_DATABASE: 110,
    LICENSE_DATABASE_INCORRECT: 111,
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: 701,
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
    LAST_DIAGNOSE_VALUE: 190,
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
    IQC_SCREEN_CAPTURE: 6,
    IQC_PORTRAIT: 7,
    IQC_HANDWRITTEN: 8,
};
export var eLDS_ParsingErrorCodes = {
    ERR_LDS_OK: 1,
    ERR_LDS_ASN_INCORRECT_DATA: -2147483647,
    RR_LDS_ASN_NOT_ENOUGH_DATA: -2147483646,
    ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: -2147483645,
    ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: -2147483640,
    ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: -2147483639,
    ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: -2147483638,
    ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: -2147483631,
    ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: -2147483629,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: -2147483628,
    ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: -2147483627,
    ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: -2147483626,
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: -2147483630,
    ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: -2147483625,
    ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: -2147483624,
    ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: -2147483623,
    ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: -2147483622,
    ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: -2147483621,
    ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: -2147483620,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: -2147483619,
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: -2147483618,
    ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: -2147483617,
    ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: -2147483616,
    ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: -2147483615,
    ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: -2147483614,
    ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: -2147483613,
    ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: -2147483612,
    ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: -2147483611,
    ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: -2147483610,
    ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: -2147483609,
    ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: -2147483600,
    ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: -2147483599,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: -2147483598,
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: -2147483597,
    ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: -2147483596,
    ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: -2147483594,
    ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: -2147483595,
    ERR_LDS_AUTH_ERROR: -2147483568,
    ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: -2147483567,
    ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: -2147483566,
    ERR_LDS_AUTH_MESSED_ALGORITHMS: -2147483565,
    ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: -2147483564,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: -2147483563,
    ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: -2147483562,
    ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: -2147483561,
    ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: -2147483560,
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: -2147483559,
    ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: -2147483558,
    ERR_LDS_DG_WRONG_TAH: -2147483536,
    ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: -2147483535,
    ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: -2130706415,
    ERR_LDS_PACE_INFO_NOT_AVAILABLE: -2130706400,
    ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: -2130706399,
    ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: -2130706398,
    ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: -2130706397,
    ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: -2130706396,
    ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: -2130706395,
    ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: -2130706394,
    ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: -2130706393,
    ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: -2130706392,
    ERR_LDS_PACE_MAPPING_CANT_PERFORM: -2130706391,
    ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: -2130706390,
    ERR_LDS_PACE_CAM_DATA_INCORRECT: -2130706389,
    ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: -2130706388,
    ERR_LDS_PACE_CAM_DATA_NON_MATCHING: -2130706387,
    ERR_LDS_PACE_IM_SCHEME_INCORRECT: -2130706386,
    ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: -2130706385,
    ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: -2130706384,
    ERR_LDS_CA_CANT_FIND_INFO: -2130706383,
    ERR_LDS_CA_INCORRECT_VERSION: -2130706382,
    ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: -2130706381,
    ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: -2130706380,
    ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706379,
    ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: -2130706378,
    ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: -2130706377,
    ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: -2130706376,
    ERR_LDS_TA_INCORRECT_VERSION: -2130706368,
    ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: -2130706367,
    ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: -2130706366,
    ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706365,
    ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: -2130706364,
    ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: -2130706363,
    ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -2130706352,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: -2130706351,
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: -2130706350,
    ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: -2130706349,
    ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: -2130706348,
    ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: -2130706347,
    ERR_LDS_AA_INCORRECT_TRAILER: -2130706346,
    ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: -2130706345,
    ERR_LDS_RI_SECTOR_KEY_CANT_FIND: -2130706320,
    ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: -2130706319,
    ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: -2130706318,
    ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: -2130706336,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: -2130706334,
    ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: -2130706333,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: 135266310,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: -2130706331,
    ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: -2130706080,
    ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: -2130706079,
    ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: -2130706078,
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: -2130706077,
    ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: -2130706076,
    ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: -2130706075,
    ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: -2130706074,
    ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: -2130706073,
    ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: -2130706072,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: -2130706071,
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: -2130706070,
    ERR_LDS_VDS_UNSUPPORTED_VERSION: -2130705920,
    ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: -2130705919,
    ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: -2130705918,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: -2130705917,
    ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: -2130705916,
    ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: -2130705915,
    ERR_LDS_VDS_NC_INCORRECT_DATA: -2130705664,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: -2130705663,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: -2130705662,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: -2130705661,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: -2130705660,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: -2130705659,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: -2130705658,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: -2130705657,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: -2130705656,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: -2130705655,
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: -2130705654,
    getTranslation: function (value) {
        switch (value) {
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
            case -2147483630:
                return "Error - ASN LDS object: Version info incorrect data";
            case -2147483629:
                return "Error - ASN LDS object: Incorrect data";
            case -2147483628:
                return "Error - ASN LDS object: Version incorrect data";
            case -2147483627:
                return "Error - ASN LDS object: Digest algorithm incorrect data";
            case -2147483626:
                return "Error - ASN LDS object: DG hashes incorrect data";
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
            case -2147483595:
                return "Error - Auth: Signer info cannot find certificate";
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed";
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
            case -2147483535:
                return "Error - DG: Contents unexpected data";
            case -2130706415:
                return "Error - BAP: Symmetric Cypher Cannot Initialize";
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
            case -2130706389:
                return "Error - PACE: CAM data incorrect";
            case -2130706388:
                return "Error - PACE: CAM data cannot verify";
            case -2130706387:
                return "Error - PACE: CAM data non-matching";
            case -2130706386:
                return "Error - PACE: IM scheme incorrect";
            case -2130706385:
                return "Error - PACE: Random mapping failed";
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
            case -2130706336:
                return "Error - CV Certificate: Missing mandatory data PK";
            case -2130706334:
                return "Error - CV Certificate: Public key unsupported";
            case -2130706333:
                return "Error - CV Certificate: CHAT unsupported terminal type";
            case -2130706331:
                return "Error - CV Certificate: Private key invalid params";
            case -2130706320:
                return "Error - RI: Sector Key Cannot Find";
            case -2130706319:
                return "Error - RI: Sector Key Incorrect Data";
            case -2130706318:
                return "Error - RI: Sector Key Incomplete Data";
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
            case -2130705920:
                return "Error - VDS: Unsupported version";
            case -2130705919:
                return "Error - VDS: Issuing country size";
            case -2130705918:
                return "Error - VDS: Issuing country incorrect data";
            case -2130705917:
                return "Error - VDS: Signature certificate size";
            case -2130705916:
                return "Error - VDS: Signature certificate data";
            case -2130705915:
                return "Error - VDS: Signature incorrect data";
            case -2130705664:
                return "Error - VDS: Incorrect data";
            case -2130705663:
                return "Error - VDS: Missing or incorrect data";
            case -2130705662:
                return "Error - VDS: Missing or incorrect header";
            case -2130705661:
                return "Error - VDS: Missing or incorrect type";
            case -2130705660:
                return "Error - VDS: Missing or incorrect version";
            case -2130705659:
                return "Error - VDS: Missing or incorrect issuing country";
            case -2130705658:
                return "Error - VDS: Missing or incorrect message";
            case -2130705657:
                return "Error - VDS: Missing or incorrect signature";
            case -2130705656:
                return "Error - VDS: Missing or incorrect signature algorithm";
            case -2130705655:
                return "Error - VDS: Missing or incorrect certificate";
            case -2130705654:
                return "Error - VDS: Missing or incorrect signature value";
            case 1:
                return "OK";
            case 135266310:
                return "Error - CV Certificate: Private key unsupported";
            case 2147483599:
                return "Error - ICAO Signed data: Signer info empty";
            default:
                return value.toString();
        }
    }
};
export var eLDS_ParsingNotificationCodes = {
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: -1879048191,
    NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: -1879048190,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: -1879048189,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: -1879048188,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: -1879048187,
    NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: -1879048186,
    NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: -1879048184,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: -1879048178,
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: -1879048177,
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: -1879048176,
    NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: -1879048169,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: -1879047680,
    NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: -1879047679,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: -1879047678,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: -1879047677,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: -1879047676,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: -1879047675,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: -1879047674,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: -1879047673,
    NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: -1879047672,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: -1879047671,
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: -1879047670,
    NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: -1879047669,
    NTF_LDS_ICAO_CERTIFICATE_VALIDITY: -1879047668,
    NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: -1879047667,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: -1879047666,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: -1879047665,
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: -1879047664,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: -1879047663,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: -1879047662,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: -1879047661,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: -1879047660,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: -1879047659,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: -1879047658,
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: -1879047657,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: -1879047656,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: -1879047655,
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: -1879047654,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: -1879047653,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: -1879047652,
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: -1879047651,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: -1879047650,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: -1879047649,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: -1879047648,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: -1879047647,
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: -1879047646,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: -1879047645,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: -1879047644,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: -1879047643,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: -1879047642,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: -1879047640,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: -1879047639,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: -1879047638,
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: -1879047637,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: -1879047636,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: -1879047635,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: -1879047634,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: -1879047633,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: -1879047631,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: -1879047630,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: -1879047629,
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: -1879047628,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: -1879047627,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: -1879047626,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: -1879047625,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: -1879047624,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: -1879047623,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: -1879047622,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: -1879047621,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: -1879047620,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: -1879047619,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: -1879047618,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: -1879047617,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: -1879047616,
    NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: -1879047615,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: -1879047614,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: -1879047613,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: -1879047612,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: -1879047611,
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: -1879047610,
    NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: -1879047609,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: -1879047608,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: -1879047607,
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: -1879047606,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: -1879047605,
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: -1879047604,
    NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: -1879047603,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: -1879047602,
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: -1879047601,
    NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: -1879048160,
    NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: -1879048159,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: -1879048158,
    NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: -1879048157,
    NTF_LDS_ICAO_COM_DGPM_INCORRECT: -1879048156,
    NTF_LDS_ICAO_COM_DGPM_MISSING: -1879048155,
    NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: -1879048154,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: -1879048144,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: -1879048143,
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: -1879048142,
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: -1879048141,
    NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: -1879047936,
    NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: -1879047776,
    NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: -1879047775,
    NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: -1879047935,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: -1879047934,
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: -1879047933,
    NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: -1879047927,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: -1879047760,
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: -1879047759,
    NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: -1879047758,
    NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: -1879047932,
    NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: -1879047931,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: -1879047930,
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: -1879047929,
    NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: -1879047928,
    NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: -1879047744,
    NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: -1879047736,
    NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: -1879047728,
    NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: -1879047720,
    NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: -1879047926,
    NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: -1879047925,
    NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: -1879047924,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: -1879047923,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: -1879047922,
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: -1879047921,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: -1879047920,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: -1879047919,
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: -1879047918,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: -1879047909,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: -1879047908,
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: -1879047907,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: -1879047906,
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: -1879047905,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: -1879047915,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: -1879047914,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: -1879047913,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: -1879047912,
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: -1879047911,
    NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: -1879047910,
    NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: 139272,
    NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: 139273,
    NTF_LDS_MRZ_NAME_IS_VOID: 139274,
    NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: 139277,
    NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: 139278,
    NTF_LDS_MRZ_DOB_SYNTAX_ERROR: 139279,
    NTF_LDS_MRZ_DOB_ERROR: 139280,
    NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: 139281,
    NTF_LDS_MRZ_SEX_INCORRECT: 139282,
    NTF_LDS_MRZ_DOE_SYNTAX_ERROR: 139283,
    NTF_LDS_MRZ_DOE_ERROR: 139284,
    NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: 139285,
    NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: 139286,
    NTF_LDS_MRZ_INCORRECT_CHECKSUM: 139287,
    NTF_LDS_MRZ_INCORRECT: 139288,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: -1878982656,
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: -1878917120,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: -1878851584,
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: -1878786048,
    NTF_LDS_BIOMETRICS_TYPE_INCORRECT: -1878720512,
    NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: -1878654976,
    NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: -1878589440,
    NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: -1878523904,
    NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: -1878458368,
    NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: -1878392832,
    NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: -1878327296,
    NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: -1877999616,
    NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: -1877934080,
    NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: -1877868544,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: -1877803008,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: -1877737472,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: -1877671936,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: -1877606400,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: -1877540864,
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: -1877475328,
    NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: -1877409792,
    NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: -1877344256,
    NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: -1862270976,
    NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: -1862270975,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: -1862270974,
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270973,
    NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: -1862270972,
    NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: -1862270971,
    NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270970,
    NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: -1862270969,
    NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: -1862270968,
    NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: -1862270967,
    NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: -1862270966,
    NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: -1862270965,
    NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: -1862270964,
    NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: -1862270963,
    NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: -1862270962,
    NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: -1862270720,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: -1862270719,
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: -1862270718,
    NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: -1862270717,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: -1862270716,
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: -1862270715,
    NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: -1862270714,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: -1862270713,
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: -1862270712,
    NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: -1862270711,
    NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: -1862270710,
    NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: -1862270709,
    NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: -1862270708,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: -1862270707,
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: -1862270706,
    NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: -1862270705,
    NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: -1862270704,
    NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: -1862270463,
    NTF_LDS_CV_CERTIFICATE_VALIDITY: -1862270462,
    NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: -1862270461,
    NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: -1862270460,
    NTF_LDS_TA_PACE_STATIC_BINDING_USED: -1862270208,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: -1845493483,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: -1845493482,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: -1845493481,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: -1845493480,
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: -1845493479,
    getTranslation: function (value) {
        switch (value) {
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
            case -1879047935:
                return "Notification - ICAO signed data: Version incorrect";
            case -1879047934:
                return "Notification - ICAO signed data: Digest algorithms empty";
            case -1879047933:
                return "Notification - ICAO signed data: Digest algorithms unsupported";
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
            case -1879047927:
                return "Notification - ICAO signed data: Signer infos multiple entries";
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
            case -1879047909:
                return "Notification - ASN signer info: Signing time attr missing";
            case -1879047908:
                return "Notification - ASN signer info: Signing time attr data";
            case -1879047907:
                return "Notification - ASN signer info: Signing time attr value";
            case -1879047906:
                return "Notification - ASN signer info: List content description attr missing";
            case -1879047905:
                return "Notification - ASN signer info: List content description attr data";
            case -1879047776:
                return "Notification - ASN signed data: Version incorrect";
            case -1879047775:
                return "Notification - ASN signed data: Content OID incorrect";
            case -1879047760:
                return "Notification - ICAO signed data: Certificates missed";
            case -1879047759:
                return "Notification - ICAO signed data: Certificates empty";
            case -1879047758:
                return "Notification - ICAO signed data: CRLs incorrect usage";
            case -1879047744:
                return "Notification - ICAO master list: Version incorrect";
            case -1879047736:
                return "Notification - ICAO Deviation list: Version incorrect";
            case -1879047728:
                return "Notification - BSI: Defect  list version incorrect";
            case -1879047720:
                return "Notification - BSI: Black list version incorrect";
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
                return "Notification - ICAO certificate extension: Key usage incorrect data";
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
            case -1879047640:
                return "Notification - ICAO certificate extension: Subject alt name critical";
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
            case -1879047631:
                return "Notification - ICAO certificate extension: Issuer alt name critical";
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
            case -1879047615:
                return "Notification - ICAO certificate: SN non-compliant";
            case -1879047614:
                return "Notification - ICAO certificate: Issuer SN non-compliant";
            case -1879047613:
                return "Notification - ICAO certificate: Subject SN non-compliant";
            case -1879047612:
                return "Notification - ICAO certificate: Issuer attribute non-compliant";
            case -1879047611:
                return "Notification - ICAO certificate: Subject attribute non-compliant";
            case -1879047610:
                return "Notification - ICAO certificate: Issuer subject country non-matching";
            case -1879047609:
                return "Notification - ICAO certificate extension: CSCA alt names non-matching";
            case -1879047608:
                return "Notification - ICAO certificate extension: Name change incorrect data";
            case -1879047607:
                return "Notification - ICAO certificate extension: Name change non-compliant";
            case -1879047606:
                return "Notification - ICAO certificate extension: Name change critical";
            case -1879047605:
                return "Notification - ICAO certificate extension Doc type list: non-compliant";
            case -1879047604:
                return "Notification - ICAO certificate extension Doc type list: Critical";
            case -1879047603:
                return "Notification - ICAO certificate extension: Optional critical";
            case -1879047602:
                return "Notification - ICAO certificate: Subject non-compliant";
            case -1879047601:
                return "Notification - ICAO certificate: Subject common name non-compliant";
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
            default:
                return value.toString();
        }
    }
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
    CT_BLS: 7,
    CT_LDS2: 8,
    CT_BCS: 9,
    CT_BCSNC: 10,
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
    DFT_SAM_DATA_MAX: 832,
    DFT_VDS: 900,
    DFT_VDSNC: 901,
    DFT_USERDEFINED: 1000,
    getTranslation: function (value) {
        switch (value) {
            case 0:
                return "DFT_UNSPECIFIED";
            case 1:
                return "Machine Readable Zone (DG1)";
            case 2:
                return "Biometry - Facial data (DG2)";
            case 3:
                return "Biometry - Fingerprint(s) (DG3)";
            case 4:
                return "Biometry - Iris Data (DG4)";
            case 5:
                return "Portrait(s) (DG5)";
            case 6:
                return "not defined (DG6)";
            case 7:
                return "Signature / usual mark image (DG7)";
            case 8:
                return "not defined (DG8)";
            case 9:
                return "not defined (DG9)";
            case 10:
                return "not defined (DG10)";
            case 11:
                return "Additional personal detail(s) (DG11)";
            case 12:
                return "Additional document details (DG12)";
            case 13:
                return "Optional detail(s) (DG13)";
            case 14:
                return "EAC info (DG14)";
            case 15:
                return "Active Authentication info (DG15)";
            case 16:
                return "Person(s) to notify (DG16)";
            case 17:
                return "DG17";
            case 18:
                return "DG18";
            case 19:
                return "DG19";
            case 20:
                return "DG20";
            case 21:
                return "EF.SOD";
            case 165:
                return "EF.SOD";
            case 22:
                return "EF.CVCA";
            case 23:
                return "EF.COM";
            case 150:
                return "EF.COM";
            case 101:
                return "Document type" + " (DG1)";
            case 102:
                return "Issuing state" + " (DG2)";
            case 103:
                return "Date of expiry" + " (DG3)";
            case 104:
                return "Given name" + " (DG4)";
            case 105:
                return "Surname/given name at birth" + " (DG5)";
            case 106:
                return "Pseudonym" + " (DG6)";
            case 107:
                return "Academic title" + " (DG7)";
            case 108:
                return "Date of birth" + " (DG8)";
            case 109:
                return "Place of birth" + " (DG9)";
            case 110:
                return "Nationality" + " (DG10)";
            case 111:
                return "Sex" + " (DG11)";
            case 112:
                return "Optional details" + " (DG12)";
            case 113:
                return "Undefined" + " (DG13)";
            case 114:
                return "Undefined" + " (DG14)";
            case 115:
                return "Undefined" + " (DG15)";
            case 116:
                return "Undefined" + " (DG16)";
            case 117:
                return "Place of registration" + " (DG17)";
            case 118:
                return "Place of registration" + " (DG18)";
            case 119:
                return "Residence permit 1" + " (DG19)";
            case 120:
                return "Residence permit 2" + " (DG20)";
            case 121:
                return "Optional details" + " (DG21)";
            case 151:
                return "Text data elements (DG1)";
            case 152:
                return "License holder information (DG2)";
            case 153:
                return "Issuing authority details (DG3)";
            case 154:
                return "Portrait image (DG4)";
            case 155:
                return "Signature / usual mark image (DG5)";
            case 156:
                return "Biometry - Facial data (DG6)";
            case 157:
                return "Biometry - Fingerprint(s) (DG7)";
            case 158:
                return "Biometry - Iris Data (DG8)";
            case 159:
                return "Biometry - Other (DG9)";
            case 160:
                return "not defined (DG10)";
            case 161:
                return "Optional domestic data (DG11)";
            case 162:
                return "Non-match alert (DG12)";
            case 163:
                return "Active Authentication info (DG13)";
            case 164:
                return "EAC info (DG14)";
            case 166:
                return "DFT_DL_CE";
            case 167:
                return "DFT_DL_CVCA";
            case 200:
                return "EF.CardAccess";
            case 201:
                return "EF.CardSecurity";
            case 202:
                return "EF.ChipSecurity";
            case 300:
                return "MIFARE data";
            case 301:
                return "MIFARE validity";
            case 400:
                return "DFT_ATR";
            case 500:
                return "DFT_ESIGN_PK";
            case 501:
                return "DFT_ESIGN_SIGNEDDATA";
            case 600:
                return "Certificate";
            case 601:
                return "DFT_MASTERLIST";
            case 602:
                return "DFT_DEFECTLIST";
            case 603:
                return "DFT_DEVIATIONLIST";
            case 700:
                return "App directory";
            case 701:
                return "DFT_SESSION";
            case 702:
                return "DFT_LOGDATA";
            case 703:
                return "DFT_CHIP_PROPERTIES";
            case 1000:
                return "DFT_USERDEFINED";
            default:
                return value.toString();
        }
    }
};
export var eRFID_ErrorCodes = {
    RFID_ERROR_NO_ERROR: 1,
    RFID_ERROR_ALREADY_DONE: 2,
    RFID_ERROR_FAILED: -1,
    RFID_ERROR_NO_CHIP_DETECTED: -2147418111,
    RFID_ERROR_NOT_AVAILABLE: -2147418110,
    RFID_ERROR_INVALID_PARAMETER: -2147418108,
    RFID_ERROR_NOT_INITIALIZED: -2147418107,
    RFID_ERROR_NOT_ENOUGH_MEMORY: -2147418106,
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
    RFID_ERROR_PCSC_FAILED_SCARD: -2147352570,
    RFID_ERROR_PCSC_EXT_LE_FAILED: -2147352560,
    RFID_ERROR_LAYER6_SECURITY_MANAGER: -2046820352,
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: -2046820351,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: -2046820096,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: -2046820095,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: -2046820094,
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: -2046820093,
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING: -2046819840,
    RFID_ERROR_LAYER6_SM_DO_87_MISSING: -2046819839,
    RFID_ERROR_LAYER6_SM_DO_99_MISSING: -2046819838,
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT: -2046819837,
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: -2046819836,
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: -2046819584,
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: -2046819583,
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE: -2046819582,
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: -2046819581,
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: -2046819580,
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: -2046819579,
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: -2046819578,
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: -2046819577,
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: -2046819576,
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: -2046819575,
    RFID_ERROR_LAYER6_FILE_NOT_FOUND: -2147456382,
    RFID_ERROR_LAYER6_FILE_EOF1: -2147458430,
    RFID_ERROR_LAYER6_FILE_EOF2: -2147456256,
    RFID_ERROR_LAYER6_INCORRECT_PARAMS: -2147456384,
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA: -2147456376,
    RFID_ERROR_LAYER6_PWD_SUSPEND: -2147458111,
    RFID_ERROR_LAYER6_PWD_BLOCKED: -2147458112,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED: -2147458429,
    RFID_ERROR_LAYER6_PWD_BLOCKED2: -2147456637,
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2: -2147456636,
    RFID_ERROR_LAYER6_PWD_SUSPEND2: -2147456635,
    RFID_ERROR_LAYER6_PWD_FAILED: -2146409536,
    RFID_ERROR_NOT_PERFORMED: -2097152000,
    RFID_ERROR_SESSION_IS_CLOSED: -2097151999,
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: -2097151998,
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: -2097151984,
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: -2097151983,
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: -2097151982,
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: -2097151981,
    RFID_ERROR_Session_Procedure_Type_Unsupported: -2097151980,
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
    RFID_ERROR_LAYER34_NO_ERROR: -2080374784,
    RFID_ERROR_LAYER34_TIME_OUT: -2080309248,
    RFID_ERROR_LAYER34_COLLISION: -2080243712,
    RFID_ERROR_LAYER34_CRC: -2080178176,
    RFID_ERROR_LAYER34_DATA_INTEGRITY: -2080112640,
    RFID_ERROR_LAYER34_DATA_LENGTH: -2080047104,
    RFID_ERROR_Layer34_RFU: -2079981568,
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY: -2079916032,
    RFID_ERROR_LAYER34_PROTOCOL_B: -2079850496,
    RFID_ERROR_LAYER34_DATA_CONTENTS: -2079784960,
    RFID_ERROR_LAYER34_PROTOCOL: -2079719424,
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: -2079653888,
    RFID_ERROR_LAYER34_MIFARE_AUTH: -2079588352,
    RFID_ERROR_LAYER34_SAM_ERROR: -2079522816,
    RFID_ERROR_LAYER34_SAM_COLLISION: -2079457280,
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: -2079391744,
    getTranslation: function (value) {
        switch (value) {
            case -2147458430:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147458429:
                return "LAYER6: PWD deactivated";
            case -2147458112:
                return "LAYER6: PWD blocked";
            case -2147458111:
                return "LAYER6: PWD suspended";
            case -2147456637:
                return "LAYER6: PWD blocked 2";
            case -2147456636:
                return "LAYER6: PWD deactivated 2";
            case -2147456635:
                return "LAYER6: PWD suspended 2";
            case -2147456384:
                return "LAYER6: Incorrect params";
            case -2147456382:
                return "LAYER6: File selection failure / file not found";
            case -2147456376:
                return "LAYER6: No reference data";
            case -2147456256:
                return "LAYER6: Reading beyond EOF / Unexpected EOF";
            case -2147418111:
                return "RFID: No chip is detected";
            case -2147418110:
                return "RFID: Unavailable";
            case -2147418108:
                return "RFID: Invalid parameter in ExecuteCommand() call found";
            case -2147418107:
                return "RFID: Device is uninitialized";
            case -2147418106:
                return "RFID: Out of memory";
            case -2147418104:
                return "RFID: Invalid directory";
            case -2147418103:
                return "RFID: Unknown command";
            case -2147418102:
                return "RFID File: IO Error";
            case -2147418101:
                return "RFID: RFID is busy";
            case -2147418100:
                return "RFID: The firmware needs to be updated to a newer version";
            case -2147352576:
                return "PCSC: Failed";
            case -2147352575:
                return "PCSC: The reader is unavailable";
            case -2147352574:
                return "PCSC: The card cannot be connected";
            case -2147352573:
                return "PCSC: The card is not connected";
            case -2147352572:
                return "PCSC: Operation is cancelled";
            case -2147352571:
                return "PCSC: The card is busy";
            case -2147352570:
                return "PCSC: Failed Smart Card";
            case -2147352560:
                return "PCSC: ExtLe Failed";
            case -2146409536:
                return "LAYER6: PWD failed";
            case -2097152000:
                return "RFID: Not performed";
            case -2097151999:
                return "RFID: Session is closed";
            case -2097151998:
                return "RFID: Unsupported terminal operation";
            case -2097151984:
                return "RFID: Terminal type unknown";
            case -2097151983:
                return "RFID: Terminal type bad certificate";
            case -2097151982:
                return "RFID: Terminal type not set";
            case -2097151981:
                return "RFID: Unknown procedure type";
            case -2097151980:
                return "RFID: Unsupported procedure type";
            case -2097151979:
                return "RFID: Procedure type not set";
            case -2097151978:
                return "RFID: Access key unknown type";
            case -2097151977:
                return "RFID: Access key unsupported SM type";
            case -2097151976:
                return "RFID: Access key incorrect SM type";
            case -2097151975:
                return "RFID: Access key restricted";
            case -2097151974:
                return "RFID: Access key incorrect data";
            case -2097151973:
                return "RFID: Access key not set";
            case -2097151972:
                return "RFID: PWD management not authorized";
            case -2097151968:
                return "RFID: Access control unknown type";
            case -2097151967:
                return "RFID: Access control unknown type";
            case -2097151966:
                return "RFID: PACE required";
            case -2097151965:
                return "RFID: CA keys required";
            case -2097151964:
                return "RFID: TA required";
            case -2097151963:
                return "RFID: CA required";
            case -2097151962:
                return "RFID: Incorrect option CA";
            case -2097151961:
                return "RFID: CA failed";
            case -2097151960:
                return "RFID: TA failed";
            case -2097151959:
                return "RFID: AA failed";
            case -2097151958:
                return "RFID: RI failed";
            case -2097151952:
                return "RFID: SO signature check failed";
            case -2097151951:
                return "RFID: Hash check failed";
            case -2097151936:
                return "RFID: Invalid aux data - date of expiry";
            case -2097151935:
                return "RFID: Invalid aux data - date of birth";
            case -2097151934:
                return "RFID: Invalid aux data - community ID";
            case -2097151920:
                return "RFID: eSign requires app selection";
            case -2097151919:
                return "RFID: eSign PIN not set";
            case -2097151918:
                return "RFID: eSign PIN not verified";
            case -2097151904:
                return "RFID: Incorrect data";
            case -2097086464:
                return "RFID file: Insufficient data";
            case -2097020928:
                return "RFID file: Incorrect data";
            case -2096955392:
                return "RFID file: Unexpected data";
            case -2096889856:
                return "RFID file: Contains unexpected data";
            case -2096824320:
                return "RFID file: Wrong tag";
            case -2096758784:
                return "RFID file: Cannot use data";
            case -2096693248:
                return "RFID file: Cannot read data";
            case -2096627712:
                return "RFID file: Access denied";
            case -2080374784:
                return "RFID: Layer 34 - No error";
            case -2080309248:
                return "RFID: Layer 34 - Timeout";
            case -2080243712:
                return "RFID: Layer 34 - Collision";
            case -2080178176:
                return "RFID: Layer 34 - CRC";
            case -2080112640:
                return "RFID: Layer 34 - Data integrity";
            case -2080047104:
                return "RFID: Layer 34 - Data length";
            case -2079981568:
                return "RFID: Layer 34 - RFU";
            case -2079916032:
                return "RFID: Layer 34 - Too many collision";
            case -2079850496:
                return "RFID: Layer 34 - Protocol B";
            case -2079784960:
                return "RFID: Layer 34 - Data contents";
            case -2079719424:
                return "RFID: Layer 34 - Protocol";
            case -2079653888:
                return "RFID: Layer 34 - Globa timeout";
            case -2079588352:
                return "RFID: Layer 34 - MIFARE auth";
            case -2079522816:
                return "RFID: Layer 34 - SAM error";
            case -2079457280:
                return "RFID: Layer 34 - SAM collision";
            case -2079391744:
                return "RFID: Layer 34 - SAM acknowledge";
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
            case -2046820093:
                return "null";
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
                return "LAYER6: APDU_INS_EXTERNAL_AUTHENTICATE (external authentication) failure";
            case -2046819575:
                return "LAYER6: General Authenticity Failure";
            case -1:
                return "RFID: Failed";
            case 1:
                return "RFID: No error";
            case 2:
                return "RFID: The requested operation is already performed";
            default:
                return value.toString();
        }
    }
};
export var eRFID_NotificationCodes = {
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
                return "Country/region of birth";
            case 75:
                return "Birth state code";
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
                return "AKA: Date of birth";
            case 111:
                return "AKA: Social Insurance Number";
            case 112:
                return "AKA: Surname";
            case 113:
                return "AKA: Given name";
            case 114:
                return "AKA: Name suffix";
            case 115:
                return "AKA: Name prefix";
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
                return "AKA: Surname and given names";
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
                return "Place of birth: Street";
            case 261:
                return "Place of birth: City";
            case 262:
                return "Place of birth: State";
            case 263:
                return "Place of birth: Country";
            case 264:
                return "Place of birth: Postal code";
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
                return "Other than tanks";
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
            case 628:
                return "DL category NT valid from";
            case 629:
                return "DL category NT valid to";
            case 630:
                return "DL category NT codes";
            case 631:
                return "DL category TN valid from";
            case 632:
                return "DL category TN valid to";
            case 633:
                return "DL category TN codes";
            case 634:
                return "DL category D3 valid from";
            case 635:
                return "DL category D3 valid to";
            case 636:
                return "DL category D3 codes";
            case 637:
                return "Alternative date of expiry";
            case 638:
                return "DL category CD valid from";
            case 639:
                return "DL category CD valid to";
            case 640:
                return "DL category CD codes";
            case 641:
                return "Issuer identification number";
            case 642:
                return "Payment period from";
            case 643:
                return "Payment period to";
            case 644:
                return "Unique vaccination certificate identifier";
            case 645:
                return "First name";
            case 646:
                return "null";
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
export var IRfidNotificationCompletion = {
    RFID_EVENT_CHIP_DETECTED: 1,
    RFID_EVENT_READING_ERROR: 2,
    RFID_EXTRA_ERROR_CODE: "rfid.error.code",
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
export var RFIDDelegate = {
    NULL: 0,
    NO_PA: 1,
    FULL: 2,
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
    DocumentReaderExceptionEnum: DocumentReaderExceptionEnum,
    eCheckDiagnose: eCheckDiagnose,
    eCheckResult: eCheckResult,
    eGraphicFieldType: eGraphicFieldType,
    eImageQualityCheckType: eImageQualityCheckType,
    eLDS_ParsingErrorCodes: eLDS_ParsingErrorCodes,
    eLDS_ParsingNotificationCodes: eLDS_ParsingNotificationCodes,
    eProcessGLCommands: eProcessGLCommands,
    eRequestCommand: eRequestCommand,
    eRFID_AccessControl_ProcedureType: eRFID_AccessControl_ProcedureType,
    eRFID_AuthenticationProcedureType: eRFID_AuthenticationProcedureType,
    eRFID_BaudRate: eRFID_BaudRate,
    eRFID_CertificateType: eRFID_CertificateType,
    eRFID_DataFile_Type: eRFID_DataFile_Type,
    eRFID_ErrorCodes: eRFID_ErrorCodes,
    eRFID_NotificationCodes: eRFID_NotificationCodes,
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
    IRfidNotificationCompletion: IRfidNotificationCompletion,
    LCID: LCID,
    PKDResourceType: PKDResourceType,
    ProcessingFinishedStatus: ProcessingFinishedStatus,
    RFIDDelegate: RFIDDelegate,
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
    DocumentReaderOriginal.prototype.initializeReader = function (license) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReaderOriginal.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.recognizeImage = function (image) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReaderOriginal.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReaderOriginal.prototype.providePACertificates = function (certificates) { return cordova(this, "providePACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTACertificates = function (certificates) { return cordova(this, "provideTACertificates", {}, arguments); };
    DocumentReaderOriginal.prototype.provideTASignature = function (certificates) { return cordova(this, "provideTASignature", {}, arguments); };
    DocumentReaderOriginal.prototype.parseCoreResults = function (json) { return cordova(this, "parseCoreResults", {}, arguments); };
    DocumentReaderOriginal.prototype.setTCCParams = function (params) { return cordova(this, "setTCCParams", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReaderWithDatabase = function (license, db) { return cordova(this, "initializeReaderWithDatabase", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBT3ZCLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFOUMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztpQ0FsQkw7Ozs7OztJQW9DVyw2QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFB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QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6Qix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLHdCQUF3QixFQUFFLEdBQUc7SUFDN0IscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6Qixz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QU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJB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LENBQUE7WUFDekIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sbUJBQW1CLENBQUE7WUFDOUIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7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QUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sd0JBQXdCLENBQUE7WUFDbkMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sb0JBQW9CLENBQUE7WUFDL0IsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMkJBQTJCLENBQUE7WUFDdEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8seUJBQXlCLENBQUE7WUFDcEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sc0JBQXNCLENBQUE7WUFDakMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sNEJBQTRCLENBQUE7WUFDdkMsS0FBSyxHQUFHO2dCQUNK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QkFqOE50RDtFQXU0TW9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJTY2VuYXJpb1xuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29yZURldGFpbGVkU2NlbmFyaW8ge1xuICAgIHV2VG9yY2g/OiBib29sZWFuXG4gICAgZnJhbWVPcmllbnRhdGlvbj86IG51bWJlclxuICAgIGZhY2VFeHQ/OiBib29sZWFuXG4gICAgbXVsdGlQYWdlT2ZmPzogbnVtYmVyXG4gICAgc2VyaWVzUHJvY2Vzc01vZGU/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbWFudWFsQ3JvcD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29yZURldGFpbGVkU2NlbmFyaW8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29yZURldGFpbGVkU2NlbmFyaW9cblxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmZhY2VFeHQgPSBqc29uT2JqZWN0W1wiZmFjZUV4dFwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuc2VyaWVzUHJvY2Vzc01vZGUgPSBqc29uT2JqZWN0W1wic2VyaWVzUHJvY2Vzc01vZGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dITGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dITGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbENyb3AgPSBqc29uT2JqZWN0W1wibWFudWFsQ3JvcFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlTWV0YURhdGEge1xuICAgIElEPzogbnVtYmVyXG4gICAgcm9sbEFuZ2xlPzogbnVtYmVyXG4gICAgYm91bmRzPzogQm91bmRzXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VNZXRhRGF0YSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlTWV0YURhdGFcblxuICAgICAgICByZXN1bHQuSUQgPSBqc29uT2JqZWN0W1wiSURcIl1cbiAgICAgICAgcmVzdWx0LnJvbGxBbmdsZSA9IGpzb25PYmplY3RbXCJyb2xsQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kcyA9IEJvdW5kcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRzXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQm91bmRzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJvdW5kc1xuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIGZpZWxkVHlwZT86IG51bWJlclxuICAgIGxpZ2h0VHlwZT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGZpZWxkTmFtZT86IHN0cmluZ1xuICAgIGxpZ2h0TmFtZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgZmllbGRSZWN0PzogRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkXG5cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGlnaHRUeXBlID0ganNvbk9iamVjdFtcImxpZ2h0VHlwZVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQubGlnaHROYW1lID0ganNvbk9iamVjdFtcImxpZ2h0TmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkUmVjdCA9IERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgdmFsaWRpdHk/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBjb21wYXJpc29uPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsdWVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFZhbHVlID0ganNvbk9iamVjdFtcIm9yaWdpbmFsVmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb24gPSB7fVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baSBhcyB1bmtub3duIGFzIG51bWJlcl0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IERvY3VtZW50UmVhZGVyVmFsdWVcbiAgICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRcblxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGNpZCA9IGpzb25PYmplY3RbXCJsY2lkXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoKERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb29yZGluYXRlXG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRQb3NpdGlvbiB7XG4gICAgZG9jRm9ybWF0PzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICBkcGk/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBpbnZlcnNlPzogbnVtYmVyXG4gICAgcGVyc3BlY3RpdmVUcj86IG51bWJlclxuICAgIG9iakFyZWE/OiBudW1iZXJcbiAgICBvYmpJbnRBbmdsZURldj86IG51bWJlclxuICAgIHJlc3VsdFN0YXR1cz86IG51bWJlclxuICAgIGFuZ2xlPzogbnVtYmVyXG4gICAgY2VudGVyPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRUb3A/OiBDb29yZGluYXRlXG4gICAgbGVmdEJvdHRvbT86IENvb3JkaW5hdGVcbiAgICByaWdodFRvcD86IENvb3JkaW5hdGVcbiAgICByaWdodEJvdHRvbT86IENvb3JkaW5hdGVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRWxlbWVudFBvc2l0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5R3JvdXBcblxuICAgICAgICByZXN1bHQuY291bnQgPSBqc29uT2JqZWN0W1wiY291bnRcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChJbWFnZVF1YWxpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBuYW1lPzogc3RyaW5nXG4gICAgSUNBT0NvZGU/OiBzdHJpbmdcbiAgICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBkWWVhcj86IHN0cmluZ1xuICAgIGRDb3VudHJ5TmFtZT86IHN0cmluZ1xuICAgIEZEU0lEPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIGF0dGFjaG1lbnQ/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmF0dGFjaG1lbnQgPSBqc29uT2JqZWN0W1wiYXR0YWNobWVudFwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGFjdGl2ZU9wdGlvbklkeD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGVcblxuICAgICAgICByZXN1bHQuYWN0aXZlT3B0aW9uSWR4ID0ganNvbk9iamVjdFtcImFjdGl2ZU9wdGlvbklkeFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGVEYXRhIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgc2VjdXJpdHlPYmplY3Q/OiBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcblxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3QgPSBDZXJ0aWZpY2F0ZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgICByZWFkaW5nVGltZT86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdUaW1lID0ganNvbk9iamVjdFtcInJlYWRpbmdUaW1lXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhSGFzaEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkYXRhSGFzaEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQudW5pY29kZVZlcnNpb24gPSBqc29uT2JqZWN0W1widW5pY29kZVZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZmlsZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpbGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmlsZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmlsZXMucHVzaChGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbHVlXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZhbHVlPzogVmFsdWVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF0dHJpYnV0ZVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBWYWx1ZVxuICAgIGF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRob3JpdHkge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbiB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIHR5cGU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXh0ZW5zaW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICAgICAgcmVzdWx0Lm5vdEFmdGVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEFmdGVyXCJdKVxuICAgICAgICByZXN1bHQubm90QmVmb3JlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEJlZm9yZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgb3JpZ2luPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHN1YmplY3RQS0FsZ29yaXRobT86IHN0cmluZ1xuICAgIGZpbGVOYW1lPzogVmFsdWVcbiAgICB2YWxpZGl0eT86IFZhbGlkaXR5XG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgc3ViamVjdD86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENlcnRpZmljYXRlQ2hhaW5cblxuICAgICAgICByZXN1bHQub3JpZ2luID0ganNvbk9iamVjdFtcIm9yaWdpblwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0UEtBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic3ViamVjdFBLQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5maWxlTmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5ID0gVmFsaWRpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbGlkaXR5XCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0ID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0XCJdKVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHRlbnNpb25zLnB1c2goRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduZXJJbmZvIHtcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhVG9IYXNoPzogc3RyaW5nXG4gICAgZGlnZXN0QWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2VyaWFsTnVtYmVyPzogVmFsdWVcbiAgICBzaWduYXR1cmU/OiBWYWx1ZVxuICAgIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpZ25lckluZm8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2lnbmVySW5mb1xuXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhVG9IYXNoID0ganNvbk9iamVjdFtcImRhdGFUb0hhc2hcIl1cbiAgICAgICAgcmVzdWx0LmRpZ2VzdEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkaWdlc3RBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdEtleUlkZW50aWZpZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdEtleUlkZW50aWZpZXJcIl0pXG4gICAgICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RcblxuICAgICAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lm9iamVjdFR5cGUgPSBqc29uT2JqZWN0W1wib2JqZWN0VHlwZVwiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcy5wdXNoKFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDYXJkUHJvcGVydGllc1xuXG4gICAgICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVSID0ganNvbk9iamVjdFtcImJpdFJhdGVSXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUyA9IGpzb25PYmplY3RbXCJiaXRSYXRlU1wiXVxuICAgICAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgICAgICByZXN1bHQubWlmYXJlTWVtb3J5ID0ganNvbk9iamVjdFtcIm1pZmFyZU1lbW9yeVwiXVxuICAgICAgICByZXN1bHQucmZpZFR5cGUgPSBqc29uT2JqZWN0W1wicmZpZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnQ0ID0ganNvbk9iamVjdFtcInN1cHBvcnQ0XCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0TWlmYXJlID0ganNvbk9iamVjdFtcInN1cHBvcnRNaWZhcmVcIl1cbiAgICAgICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgICAgICByZXN1bHQuYVRSID0ganNvbk9iamVjdFtcImFUUlwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUxID0ganNvbk9iamVjdFtcImJhdWRyYXRlMVwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgICAgICByZXN1bHQudUlEID0ganNvbk9iamVjdFtcInVJRFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGEge1xuICAgIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICAgIHRvdGFsQnl0ZXNTZW50PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gICAgcHJvY2Vzc1RpbWU/OiBudW1iZXJcbiAgICBjYXJkUHJvcGVydGllcz86IENhcmRQcm9wZXJ0aWVzXG4gICAgc2Vzc2lvbkRhdGFTdGF0dXM/OiBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNlc3Npb25EYXRhXG5cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNSZWNlaXZlZCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzUmVjZWl2ZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5leHRMZVN1cHBvcnQgPSBqc29uT2JqZWN0W1wiZXh0TGVTdXBwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgICAgICByZXN1bHQuY2FyZFByb3BlcnRpZXMgPSBDYXJkUHJvcGVydGllcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2FyZFByb3BlcnRpZXNcIl0pXG4gICAgICAgIHJlc3VsdC5zZXNzaW9uRGF0YVN0YXR1cyA9IFJGSURTZXNzaW9uRGF0YVN0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic2Vzc2lvbkRhdGFTdGF0dXNcIl0pXG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucy5wdXNoKEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChTZWN1cml0eU9iamVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1xuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGVOYW1lID0ganNvbk9iamVjdFtcInR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZWxlbWVudHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbGVtZW50cy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBERjQxN0luZm9cblxuICAgICAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgICAgIHJlc3VsdC5jb2x1bW5zID0ganNvbk9iamVjdFtcImNvbHVtbnNcIl1cbiAgICAgICAgcmVzdWx0LnJvd3MgPSBqc29uT2JqZWN0W1wicm93c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGFTdGF0dXMge1xuICAgIEFBPzogbnVtYmVyXG4gICAgQkFDPzogbnVtYmVyXG4gICAgQ0E/OiBudW1iZXJcbiAgICBQQT86IG51bWJlclxuICAgIFBBQ0U/OiBudW1iZXJcbiAgICBUQT86IG51bWJlclxuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTZXNzaW9uRGF0YVN0YXR1c1xuXG4gICAgICAgIHJlc3VsdC5BQSA9IGpzb25PYmplY3RbXCJBQVwiXVxuICAgICAgICByZXN1bHQuQkFDID0ganNvbk9iamVjdFtcIkJBQ1wiXVxuICAgICAgICByZXN1bHQuQ0EgPSBqc29uT2JqZWN0W1wiQ0FcIl1cbiAgICAgICAgcmVzdWx0LlBBID0ganNvbk9iamVjdFtcIlBBXCJdXG4gICAgICAgIHJlc3VsdC5QQUNFID0ganNvbk9iamVjdFtcIlBBQ0VcIl1cbiAgICAgICAgcmVzdWx0LlRBID0ganNvbk9iamVjdFtcIlRBXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQge1xuICAgIGJhcmNvZGVUeXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgcGRmNDE3SW5mbz86IFBERjQxN0luZm9cbiAgICBkYXRhPzogYW55W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRcblxuICAgICAgICByZXN1bHQuYmFyY29kZVR5cGUgPSBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnBkZjQxN0luZm8gPSBQREY0MTdJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJwZGY0MTdJbmZvXCJdKVxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjaGVja3M/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hlY2tzLnB1c2goRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlPzogbnVtYmVyXG4gICAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGVOYW1lPzogc3RyaW5nXG4gICAgZWxlbWVudERpYWdub3NlTmFtZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBEb2N1bWVudFJlYWRlckV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbj86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBsb2NhbGl6ZWRNZXNzYWdlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHN0cmluZz86IHN0cmluZ1xuICAgIHN0YWNrVHJhY2U/OiBTdGFja1RyYWNlRWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goU3RhY2tUcmFjZUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRocm93YWJsZSB7XG4gICAgbG9jYWxpemVkTWVzc2FnZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICBzdHJpbmc/OiBzdHJpbmdcbiAgICBzdGFja1RyYWNlPzogU3RhY2tUcmFjZUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUaHJvd2FibGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVGhyb3dhYmxlXG5cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goU3RhY2tUcmFjZUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgICBsaW5lTnVtYmVyPzogbnVtYmVyXG4gICAgaXNOYXRpdmVNZXRob2Q/OiBib29sZWFuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBzdHJpbmdcbiAgICBtZXRob2ROYW1lPzogc3RyaW5nXG4gICAgc3RyaW5nPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFN0YWNrVHJhY2VFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LmxpbmVOdW1iZXIgPSBqc29uT2JqZWN0W1wibGluZU51bWJlclwiXVxuICAgICAgICByZXN1bHQuaXNOYXRpdmVNZXRob2QgPSBqc29uT2JqZWN0W1wiaXNOYXRpdmVNZXRob2RcIl1cbiAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9IGpzb25PYmplY3RbXCJjbGFzc05hbWVcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVOYW1lID0ganNvbk9iamVjdFtcImZpbGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5tZXRob2ROYW1lID0ganNvbk9iamVjdFtcIm1ldGhvZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEtEQ2VydGlmaWNhdGUge1xuICAgIGJpbmFyeURhdGE/OiBzdHJpbmdcbiAgICByZXNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcml2YXRlS2V5Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBLRENlcnRpZmljYXRlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlSW5wdXRQYXJhbSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZUlucHV0UGFyYW1cblxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQQVJlc291cmNlc0lzc3VlciB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgZnJpZW5kbHlOYW1lPzogc3RyaW5nXG4gICAgYXR0cmlidXRlcz86IFBBQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFSZXNvdXJjZXNJc3N1ZXJcblxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFBdHRyaWJ1dGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUQUNoYWxsZW5nZSB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgYXV4UENEPzogc3RyaW5nXG4gICAgY2hhbGxlbmdlUElDQz86IHN0cmluZ1xuICAgIGhhc2hQSz86IHN0cmluZ1xuICAgIGlkUElDQz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUQUNoYWxsZW5nZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUQUNoYWxsZW5nZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnB1c2goanNvbk9iamVjdFtcImRhdGFcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF1eFBDRCA9IGpzb25PYmplY3RbXCJhdXhQQ0RcIl1cbiAgICAgICAgcmVzdWx0LmNoYWxsZW5nZVBJQ0MgPSBqc29uT2JqZWN0W1wiY2hhbGxlbmdlUElDQ1wiXVxuICAgICAgICByZXN1bHQuaGFzaFBLID0ganNvbk9iamVjdFtcImhhc2hQS1wiXVxuICAgICAgICByZXN1bHQuaWRQSUNDID0ganNvbk9iamVjdFtcImlkUElDQ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBvcHRpY2FsPzogbnVtYmVyXG4gICAgZGV0YWlsc09wdGljYWw/OiBEZXRhaWxzT3B0aWNhbFxuICAgIHJmaWQ/OiBudW1iZXJcbiAgICBkZXRhaWxzUkZJRD86IERldGFpbHNSRklEXG4gICAgcG9ydHJhaXQ/OiBudW1iZXJcbiAgICBzdG9wTGlzdD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQub3B0aWNhbCA9IGpzb25PYmplY3RbXCJvcHRpY2FsXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzT3B0aWNhbCA9IERldGFpbHNPcHRpY2FsLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzT3B0aWNhbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWQgPSBqc29uT2JqZWN0W1wicmZpZFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc1JGSUQgPSBEZXRhaWxzUkZJRC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc1JGSURcIl0pXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuc3RvcExpc3QgPSBqc29uT2JqZWN0W1wic3RvcExpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc09wdGljYWwge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBtcno/OiBudW1iZXJcbiAgICB0ZXh0PzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIHNlY3VyaXR5PzogbnVtYmVyXG4gICAgaW1hZ2VRQT86IG51bWJlclxuICAgIGV4cGlyeT86IG51bWJlclxuICAgIHZkcz86IG51bWJlclxuICAgIHBhZ2VzQ291bnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc09wdGljYWwge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc09wdGljYWxcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC50ZXh0ID0ganNvbk9iamVjdFtcInRleHRcIl1cbiAgICAgICAgcmVzdWx0LmRvY1R5cGUgPSBqc29uT2JqZWN0W1wiZG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuc2VjdXJpdHkgPSBqc29uT2JqZWN0W1wic2VjdXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBqc29uT2JqZWN0W1wiaW1hZ2VRQVwiXVxuICAgICAgICByZXN1bHQuZXhwaXJ5ID0ganNvbk9iamVjdFtcImV4cGlyeVwiXVxuICAgICAgICByZXN1bHQudmRzID0ganNvbk9iamVjdFtcInZkc1wiXVxuICAgICAgICByZXN1bHQucGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJwYWdlc0NvdW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNSRklEIHtcbiAgICBwYT86IG51bWJlclxuICAgIGNhPzogbnVtYmVyXG4gICAgYWE/OiBudW1iZXJcbiAgICB0YT86IG51bWJlclxuICAgIGJhYz86IG51bWJlclxuICAgIHBhY2U/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNSRklEIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGFpbHNSRklEXG5cbiAgICAgICAgcmVzdWx0LnBhID0ganNvbk9iamVjdFtcInBhXCJdXG4gICAgICAgIHJlc3VsdC5jYSA9IGpzb25PYmplY3RbXCJjYVwiXVxuICAgICAgICByZXN1bHQuYWEgPSBqc29uT2JqZWN0W1wiYWFcIl1cbiAgICAgICAgcmVzdWx0LnRhID0ganNvbk9iamVjdFtcInRhXCJdXG4gICAgICAgIHJlc3VsdC5iYWMgPSBqc29uT2JqZWN0W1wiYmFjXCJdXG4gICAgICAgIHJlc3VsdC5wYWNlID0ganNvbk9iamVjdFtcInBhY2VcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWRFNOQ0RhdGEge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgaXNzdWluZ0NvdW50cnk/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogYW55XG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZEU05DRGF0YSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWRFNOQ0RhdGFcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lmlzc3VpbmdDb3VudHJ5ID0ganNvbk9iamVjdFtcImlzc3VpbmdDb3VudHJ5XCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZXNEYXRhIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCeXRlc0RhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQnl0ZXNEYXRhXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVXZGaWJlckVsZW1lbnQge1xuICAgIHJlY3RBcnJheT86IERvY1JlYWRlckZpZWxkUmVjdFtdXG4gICAgcmVjdENvdW50PzogbnVtYmVyXG4gICAgZXhwZWN0ZWRDb3VudD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyW11cbiAgICBsZW5ndGg/OiBudW1iZXJbXVxuICAgIGFyZWE/OiBudW1iZXJbXVxuICAgIGNvbG9yVmFsdWVzPzogbnVtYmVyW11cbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJVdkZpYmVyRWxlbWVudCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclV2RmliZXJFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnJlY3RBcnJheSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlY3RBcnJheS5wdXNoKERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVjdENvdW50ID0ganNvbk9iamVjdFtcInJlY3RDb3VudFwiXVxuICAgICAgICByZXN1bHQuZXhwZWN0ZWRDb3VudCA9IGpzb25PYmplY3RbXCJleHBlY3RlZENvdW50XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wid2lkdGhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ3aWR0aFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC53aWR0aC5wdXNoKGpzb25PYmplY3RbXCJ3aWR0aFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGVuZ3RoID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsZW5ndGhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsZW5ndGhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGVuZ3RoLnB1c2goanNvbk9iamVjdFtcImxlbmd0aFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXJlYSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXJlYVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFyZWFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXJlYS5wdXNoKGpzb25PYmplY3RbXCJhcmVhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb2xvclZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29sb3JWYWx1ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb2xvclZhbHVlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2xvclZhbHVlcy5wdXNoKGpzb25PYmplY3RbXCJjb2xvclZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICAgIGNoaXBQYWdlPzogbnVtYmVyXG4gICAgb3ZlcmFsbFJlc3VsdD86IG51bWJlclxuICAgIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gICAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gICAgcmZpZFJlc3VsdD86IG51bWJlclxuICAgIGhpZ2hSZXNvbHV0aW9uPzogYm9vbGVhblxuICAgIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgICB0ZXh0UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG4gICAgZG9jdW1lbnRQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgYmFyY29kZVBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBtcnpQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgaW1hZ2VRdWFsaXR5PzogSW1hZ2VRdWFsaXR5R3JvdXBbXVxuICAgIHJhd1Jlc3VsdD86IHN0cmluZ1xuICAgIGRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uPzogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cbiAgICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICAgIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG4gICAgZ2V0VGV4dEZpZWxkVmFsdWVCeVR5cGU/KHsgZmllbGRUeXBlLCBsY2lkID0gMCwgc291cmNlID0gLTEsIG9yaWdpbmFsID0gZmFsc2UgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBvcmlnaW5hbD86IGJvb2xlYW4gfSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICAgICAgaWYgKGZpZWxkID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgc291cmNlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbCA/IHZhbHVlLm9yaWdpbmFsVmFsdWUgOiB2YWx1ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHRGaWVsZFN0YXR1c0J5VHlwZShmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICE9IG51bGwgPyBmaWVsZC5zdGF0dXMgOiAwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGU/KHsgZmllbGRUeXBlLCBzb3VyY2UgPSAtMSwgbGlnaHQgPSAtMSwgcGFnZUluZGV4ID0gLTEgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBsaWdodD86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmdyYXBoaWNSZXN1bHQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBjb25zdCBmb3VuZEZpZWxkcyA9IFtdXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcylcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkVHlwZSA9PT0gZmllbGRUeXBlKVxyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcclxuICAgICAgICBpZiAoc291cmNlICE9PSAtMSlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5zb3VyY2VUeXBlICE9PSBzb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgaWYgKGxpZ2h0ICE9PSAtMSlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5saWdodFR5cGUgIT09IGxpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxyXG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IC0xKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnBhZ2VJbmRleCAhPT0gcGFnZUluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxyXG5cclxuICAgICAgICByZXR1cm4gZm91bmRGaWVsZHMubGVuZ3RoID4gMCA/IGZvdW5kRmllbGRzWzBdLnZhbHVlIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YWxpdHlSZXN1bHQoeyBpbWFnZVF1YWxpdHlDaGVja1R5cGUsIHNlY3VyaXR5RmVhdHVyZSA9IC0xLCBwYWdlSW5kZXggPSAwIH06IHsgaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlOiBudW1iZXIsIHNlY3VyaXR5RmVhdHVyZT86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHRTdW0gPSAyXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VRdWFsaXR5ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cclxuXHJcbiAgICAgICAgbGV0IGltYWdlUXVhbGl0eUdyb3VwXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXEgb2YgdGhpcy5pbWFnZVF1YWxpdHkpXHJcbiAgICAgICAgICAgIGlmIChpcSAhPSBudWxsICYmIGlxLnBhZ2VJbmRleCA9PSBwYWdlSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBpbWFnZVF1YWxpdHlHcm91cCA9IGlxXHJcbiAgICAgICAgaWYgKGltYWdlUXVhbGl0eUdyb3VwID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBpbWFnZVF1YWxpdHlHcm91cC5pbWFnZVF1YWxpdHlMaXN0KVxyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3VyaXR5RmVhdHVyZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN1bSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3VsdCA9PT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3VtID0gZmllbGQucmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmZlYXR1cmVUeXBlID09PSBzZWN1cml0eUZlYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0U3VtXHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5VHlwZUFuZExjaWQ/KHR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xyXG4gICAgICAgIGxldCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IGZvdW5kRmllbGRzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChmaWVsZCBvZiB0aGlzLnRleHRSZXN1bHQuZmllbGRzKVxyXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSB0eXBlKVxyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHMubGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGxldCBmb3VuZEZpZWxkID0gbnVsbFxyXG5cclxuICAgICAgICBmb3IgKGZpZWxkIG9mIGZvdW5kRmllbGRzKVxyXG4gICAgICAgICAgICBpZiAobGNpZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZCA9IGZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubGNpZCA9PT0gbGNpZClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmxjaWQgPT09IGxjaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvdW5kRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlTb3VyY2UoZmllbGQ6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLCBzb3VyY2VUeXBlOiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcclxuICAgICAgICBsZXQgdmFsdWVcclxuICAgICAgICBpZiAoc291cmNlVHlwZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbXJ6VmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDMpXHJcbiAgICAgICAgICAgIGlmIChtcnpWYWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBtcnpWYWxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTgpXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbFZhbCA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxNylcclxuICAgICAgICAgICAgcmV0dXJuIHZpc3VhbFZhbCAhPSBudWxsID8gdmlzdWFsVmFsIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZmllbGQudmFsdWVzKVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5zb3VyY2VUeXBlID09PSBzb3VyY2VUeXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuXG4gICAgICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFJlc3VsdCA9IGpzb25PYmplY3RbXCJvdmVyYWxsUmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSBqc29uT2JqZWN0W1wicHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZSA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVwiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgICAgICByZXN1bHQubW9yZVBhZ2VzQXZhaWxhYmxlID0ganNvbk9iamVjdFtcIm1vcmVQYWdlc0F2YWlsYWJsZVwiXVxuICAgICAgICByZXN1bHQucmZpZFJlc3VsdCA9IGpzb25PYmplY3RbXCJyZmlkUmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5oaWdoUmVzb2x1dGlvbiA9IGpzb25PYmplY3RbXCJoaWdoUmVzb2x1dGlvblwiXVxuICAgICAgICByZXN1bHQuZ3JhcGhpY1Jlc3VsdCA9IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ3JhcGhpY1Jlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LnRleHRSZXN1bHQgPSBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInRleHRSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbi5wdXNoKEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3UmVzdWx0ID0ganNvbk9iamVjdFtcInJhd1Jlc3VsdFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlLnB1c2goRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzXCJdKVxuICAgICAgICByZXN1bHQudmRzbmNEYXRhID0gVkRTTkNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2ZHNuY0RhdGFcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBUFRVUkVfVklERU86IDEsXG4gICAgQ0FQVFVSRV9GUkFNRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5zSWRlbnRpdHlEb2N1bWVudDogMTUsXG4gICAgZHRJZGVudGl0eUNhcmRmb3JSZXNpZGVuY2U6IDE2LFxuICAgIGR0VHJhdmVsZG9jdW1lbnQ6IDE3LFxuICAgIGR0T3RoZXI6IDk5LFxuICAgIGR0VmlzYUlEMjogMjksXG4gICAgZHRWaXNhSUQzOiAzMCxcbiAgICBkdFJlZ2lzdHJhdGlvbkNlcnRpZmljYXRlOiAzMSxcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5kdHVjdGlvblBlcm1pdDogNDIsXG4gICAgZHRDb21tZXJjaWFsTmV3UGVybWl0OiA0MyxcbiAgICBkdENvbmNlYWxlZENhcnJ5TGljZW5zZTogNDQsXG4gICAgZHRDb25jZWFsZWRGaXJlYXJtUGVybWl0OiA0NSxcbiAgICBkdENvbmRpdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDQ2LFxuICAgIGR0RGVwYXJ0bWVudE9mVmV0ZXJhbnNBZmZhaXJzSWRlbnRpdHlDYXJkOiA0NyxcbiAgICBkdERpcGxvbWF0aWNEcml2aW5nTGljZW5zZTogNDgsXG4gICAgZHREcml2aW5nTGljZW5zZTogNDksXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXRVbmRlcjIxOiA1MixcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXQ6IDUzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMTg6IDU0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMjE6IDU1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDU2LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiA1NyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogNTgsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZ2lzdGVyZWRPZmZlbmRlcjogNTksXG4gICAgZHREcml2aW5nTGljZW5zZVJlZHRpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWR0aWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiA4NixcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiAxMDMsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5kdHVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlZHRpY3RlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMTQ4LFxuICAgIGR0UmVkdGljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlZHRpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkOiAxNjAsXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lkdGF0aW9uQ2FyZDogMTg1LFxuICAgIGR0QVBFSENhcmQ6IDE4NixcbiAgICBkdENvdXBvbnRvRHJpdmluZ0xpY2Vuc2U6IDE4NyxcbiAgICBkdENyZXdNZW1iZXJDZXJ0aWZpY2F0ZTogMTg4LFxuICAgIGR0RG9jdW1lbnRGb3JSZXR1cm46IDE4OSxcbiAgICBkdEVDYXJkOiAxOTAsXG4gICAgZHRFbXBsb3ltZW50Q2FyZDogMTkxLFxuICAgIGR0SEtTQVJJbW1pZ3JhdGlvbkZvcm06IDE5MixcbiAgICBkdEltbWlncmFudGNhcmQ6IDE5MyxcbiAgICBkdExhYm91ckNhcmQ6IDE5NCxcbiAgICBkdExhaXNzZXpQYXNzZXI6IDE5NSxcbiAgICBkdExhd3llcklkZW50aXR5Q2VydGlmaWNhdGU6IDE5NixcbiAgICBkdExpY2Vuc2VDYXJkOiAxOTcsXG4gICAgZHRQYXNzcG9ydFN0YXRlbGVzczogMTk4LFxuICAgIGR0UGFzc3BvcnRDaGlsZDogMTk5LFxuICAgIGR0UGFzc3BvcnRDb25zdWxhcjogMjAwLFxuICAgIGR0UGFzc3BvcnREaXBsb21hdGljU2VydmljZTogMjAxLFxuICAgIGR0UGFzc3BvcnRPZmZpY2lhbDogMjAyLFxuICAgIGR0UGFzc3BvcnRQcm92aXNpb25hbDogMjAzLFxuICAgIGR0UGFzc3BvcnRTcGVjaWFsOiAyMDQsXG4gICAgZHRQZXJtaXNzaW9udG90aGVMb2NhbEJvcmRlclRyYWZmaWM6IDIwNSxcbiAgICBkdFNFREVTT0xDYXJkOiAyMDcsXG4gICAgZHRTb2NpYWxDYXJkOiAyMDgsXG4gICAgZHRUQkNhcmQ6IDIwOSxcbiAgICBkdFZlaGljbGVQYXNzcG9ydDogMjEwLFxuICAgIGR0V0RvY3VtZW50OiAyMTEsXG4gICAgZHREaXBsb21hdGljSWRlbnRpdHlDYXJkOiAyMTIsXG4gICAgZHRDb25zdWxhcklkZW50aXR5Q2FyZDogMjEzLFxuICAgIGR0SW5jb21lVGF4Q2FyZDogMjE0LFxuICAgIGR0UmVzaWRlbmNlUGVybWl0OiAyMTUsXG4gICAgZHREb2N1bWVudE9mSWRlbnRpdHk6IDIxNixcbiAgICBkdEJvcmRlckNyb3NzaW5nUGVybWl0OiAyMTcsXG4gICAgZHRQYXNzcG9ydExpbWl0ZWRWYWxpZGl0eTogMjE4LFxuICAgIGR0U0lNQ2FyZDogMjE5LFxuICAgIGR0VGF4Q2FyZDogMjIwLFxuICAgIGR0Q29tcGFueUNhcmQ6IDIyMSxcbiAgICBkdERvbWVzdGljUGFzc3BvcnQ6IDIyMixcbiAgICBkdElkZW50aXR5Q2VydGlmaWNhdGU6IDIyMyxcbiAgICBkdFJlc2lkZW50SWRDYXJkOiAyMjQsXG4gICAgZHRBcm1lZEZvcmNlc0lkZW50aXR5Q2FyZDogMjI1LFxuICAgIGR0UHJvZmVzc2lvbmFsQ2FyZDogMjI2LFxuICAgIGR0UmVnaXN0cmF0aW9uU3RhbXA6IDIyNyxcbiAgICBkdERyaXZlckNhcmQ6IDIyOCxcbiAgICBkdERyaXZlclRyYWluaW5nQ2VydGlmaWNhdGU6IDIyOSxcbiAgICBkdFF1YWxpZmljYXRpb25Ecml2aW5nTGljZW5zZTogMjMwLFxuICAgIGR0TWVtYmVyc2hpcENhcmQ6IDIzMSxcbiAgICBkdFB1YmxpY1ZlaGljbGVEcml2ZXJBdXRob3JpdHlDYXJkOiAyMzIsXG4gICAgZHRNYXJpbmVMaWNlbnNlOiAyMzMsXG4gICAgZHRUZW1wb3JhcnlMZWFybmVyRHJpdmluZ0xpY2Vuc2U6IDIzNCxcbiAgICBkdFRlbXBvcmFyeUNvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMjM1LFxuICAgIGR0SW50ZXJpbUluc3RydWN0aW9uYWxQZXJtaXQ6IDIzNixcbiAgICBkdENlcnRpZmljYXRlT2ZDb21wZXRlbmN5OiAyMzcsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mUHJvZmljaWVuY3k6IDIzOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBJRDNfeDI6IDUsXG4gICAgQ1VTVE9NOiAxMDAwLFxuICAgIEZMRVhJQkxFOiAxMDAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyQWN0aW9uID0ge1xuICAgIENPTVBMRVRFOiAxLFxuICAgIFBST0NFU1M6IDAsXG4gICAgQ0FOQ0VMOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIE5PVElGSUNBVElPTjogNSxcbiAgICBQUk9DRVNTX1dISVRFX1VWX0lNQUdFUzogNixcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uRW51bSA9IHtcbiAgICBOQVRJVkVfSkFWQV9FWENFUFRJT046IDAsXG4gICAgRE9DVU1FTlRfUkVBREVSX1NUQVRFX0VYQ0VQVElPTjogMSxcbiAgICBET0NVTUVOVF9SRUFERVJfV1JPTkdfSU5QVVQ6IDIsXG4gICAgSU5JVElBTElaQVRJT05fRkFJTEVEOiAzLFxuICAgIERPQ1VNRU5UX1JFQURFUl9CTEVfRVhDRVBUSU9OOiAyMDEsXG4gICAgREJfRE9XTkxPQURfRVJST1I6IDMwMSxcbiAgICBMSUNFTlNFX0FCU0VOVF9PUl9DT1JSVVBURUQ6IDEwMSxcbiAgICBMSUNFTlNFX0lOVkFMSURfREFURTogMTAyLFxuICAgIExJQ0VOU0VfSU5WQUxJRF9WRVJTSU9OOiAxMDMsXG4gICAgTElDRU5TRV9JTlZBTElEX0RFVklDRV9JRDogMTA0LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiAxMDUsXG4gICAgTElDRU5TRV9OT19DQVBBQklMSVRJRVM6IDEwNixcbiAgICBMSUNFTlNFX05PX0FVVEhFTlRJQ0lUWTogMTA3LFxuICAgIExJQ0VOU0VfTk9fREFUQUJBU0U6IDExMCxcbiAgICBMSUNFTlNFX0RBVEFCQVNFX0lOQ09SUkVDVDogMTExLFxuICAgIEZFQVRVUkVfQkxVRVRPT1RIX0xFX05PVF9TVVBQT1JURUQ6IDcwMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja0RpYWdub3NlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTUzogMSxcbiAgICBJTlZBTElEX0lOUFVUX0RBVEE6IDIsXG4gICAgSU5URVJOQUxfRVJST1I6IDMsXG4gICAgRVhDRVBUSU9OX0lOX01PRFVMRTogNCxcbiAgICBVTkNFUlRBSU5fVkVSSUZJQ0FUSU9OOiA1LFxuICAgIE5FQ0VTU0FSWV9JTUFHRV9OT1RfRk9VTkQ6IDcsXG4gICAgUEhPVE9fU0lERVNfTk9UX0ZPVU5EOiA4LFxuICAgIElOVkFMSURfQ0hFQ0tTVU06IDEwLFxuICAgIFNZTlRBWF9FUlJPUjogMTEsXG4gICAgTE9HSUNfRVJST1I6IDEyLFxuICAgIFNPVVJDRVNfQ09NUEFSSVNPTl9FUlJPUjogMTMsXG4gICAgRklFTERTX0NPTVBBUklTT05fTE9HSUNfRVJST1I6IDE0LFxuICAgIElOVkFMSURfRklFTERfRk9STUFUOiAxNSxcbiAgICBUUlVFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMSxcbiAgICBGSVhFRF9QQVRURVJOX0VSUk9SOiAyMixcbiAgICBMT1dfQ09OVFJBU1RfSU5fSVJfTElHSFQ6IDIzLFxuICAgIElOQ09SUkVDVF9CQUNLR1JPVU5EX0xJR0hUOiAyNCxcbiAgICBCQUNLR1JPVU5EX0NPTVBBUklTT05fRVJST1I6IDI1LFxuICAgIElOQ09SUkVDVF9URVhUX0NPTE9SOiAyNixcbiAgICBQSE9UT19GQUxTRV9MVU1JTklTQ0VOQ0U6IDI3LFxuICAgIFRPT19NVUNIX1NISUZUOiAyOCxcbiAgICBGSUJFUlNfTk9UX0ZPVU5EOiAzMCxcbiAgICBUT09fTUFOWV9PQkpFQ1RTOiAzMSxcbiAgICBTUEVDS1NfSU5fVVY6IDMzLFxuICAgIFRPT19MT1dfUkVTT0xVVElPTjogMzQsXG4gICAgSU5WSVNJQkxFX0VMRU1FTlRfUFJFU0VOVDogNDAsXG4gICAgVklTSUJMRV9FTEVNRU5UX0FCU0VOVDogNDEsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfQ09MT1JFRDogNDIsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfR1JBWVNDQUxFOiA0MyxcbiAgICBQSE9UT19XSElURV9JUl9ET05UX01BVENIOiA0NCxcbiAgICBVVl9EVUxMX1BBUEVSX01SWjogNTAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX01SWjogNTEsXG4gICAgVVZfRFVMTF9QQVBFUl9QSE9UTzogNTIsXG4gICAgVVZfRFVMTF9QQVBFUl9CTEFOSzogNTMsXG4gICAgVVZfRFVMTF9QQVBFUl9FUlJPUjogNTQsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX0JMQU5LOiA1NSxcbiAgICBCQURfQVJFQV9JTl9BWElBTDogNjAsXG4gICAgRkFMU0VfSVBJX1BBUkFNRVRFUlM6IDY1LFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfSElHSExJR0hUX0lSOiA4MCxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0dMQVJFU19JTl9QSE9UT19BUkVBOiA4MSxcbiAgICBPVklfSVJfSU5WSVNJQkxFOiA5MCxcbiAgICBPVklfSU5TVUZGSUNJRU5UX0FSRUE6IDkxLFxuICAgIE9WSV9DT0xPUl9JTlZBUklBQkxFOiA5MixcbiAgICBPVklfQkFEX0NPTE9SX0ZST05UOiA5MyxcbiAgICBPVklfQkFEX0NPTE9SX1NJREU6IDk0LFxuICAgIE9WSV9XSURFX0NPTE9SX1NQUkVBRDogOTUsXG4gICAgT1ZJX0JBRF9DT0xPUl9QRVJDRU5UOiA5NixcbiAgICBIT0xPR1JBTV9FTEVNRU5UX0FCU0VOVDogMTAwLFxuICAgIEhPTE9HUkFNX1NJREVfVE9QX0lNQUdFU19BQlNFTlQ6IDEwMSxcbiAgICBIT0xPR1JBTV9FTEVNRU5UX1BSRVNFTlQ6IDEwMixcbiAgICBIT0xPR1JBTV9GUkFNRVNfSVNfQUJTRU5UOiAxMDMsXG4gICAgSE9MT0dSQU1fSE9MT19GSUVMRF9JU19BQlNFTlQ6IDEwNCxcbiAgICBQSE9UT19QQVRURVJOX0lOVEVSUlVQVEVEOiAxMTAsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEOiAxMTEsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfQ09MT1JTOiAxMTIsXG4gICAgUEhPVE9fUEFUVEVSTl9JUl9WSVNJQkxFOiAxMTMsXG4gICAgUEhPVE9fUEFUVEVSTl9OT1RfSU5URVJTRUNUOiAxMTQsXG4gICAgUEhPVE9fU0laRV9JU19XUk9ORzogMTE1LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5WQUxJRF9DT0xPUjogMTE2LFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRF9WRVJUOiAxMTcsXG4gICAgUEhPVE9fUEFUVEVSTl9QQVRURVJOX05PVF9GT1VORDogMTE4LFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTE5LFxuICAgIFBIT1RPX0lTX05PVF9SRUNUQU5HTEU6IDEyMCxcbiAgICBQSE9UT19DT1JORVJTX0lTX1dST05HOiAxMjEsXG4gICAgRE9DVU1FTlRfSVNfQ0FOQ0VMTElORzogMTIyLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0JMVUU6IDEzMCxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9HUkVFTjogMTMxLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX1JFRDogMTMyLFxuICAgIFRFWFRfU0hPVUxEX0JFX0JMQUNLOiAxMzMsXG4gICAgQkFSQ09ERV9XQVNfUkVBRF9XSVRIX0VSUk9SUzogMTQwLFxuICAgIEJBUkNPREVfREFUQV9GT1JNQVRfRVJST1I6IDE0MSxcbiAgICBCQVJDT0RFX1NJWkVfUEFSQU1TX0VSUk9SOiAxNDIsXG4gICAgTk9UX0FMTF9CQVJDT0RFU19SRUFEOiAxNDMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9QT1JUUkFJVFNfRElGRkVSOiAxNTAsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX1JFUExZOiAxNTEsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9TRVJWSUNFX0VSUk9SOiAxNTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT1RfRU5PVUdIX0lNQUdFUzogMTUzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fTElWRV9QSE9UTzogMTU0LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9MSUNFTlNFOiAxNTUsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19QT1JUUkFJVF9ERVRFQ1RFRDogMTU2LFxuICAgIE1PQklMRV9JTUFHRVNfVU5TVUlUQUJMRV9MSUdIVF9DT05ESVRJT05TOiAxNjAsXG4gICAgTU9CSUxFX0lNQUdFU19XSElURV9VVl9OT19ESUZGRVJFTkNFOiAxNjEsXG4gICAgRklOR0VSUFJJTlRTX0NPTVBBUklTT05fTUlTTUFUQ0g6IDE3MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfTk9UX0RFVEVDVEVEOiAxODAsXG4gICAgSE9MT19QSE9UT19GQUNFX0NPTVBBUklTT05fRkFJTEVEOiAxODEsXG4gICAgSE9MT19QSE9UT19GQUNFX0dMQVJFX0lOX0NFTlRFUl9BQlNFTlQ6IDE4MixcbiAgICBIT0xPX0VMRU1FTlRfU0hBUEVfRVJST1I6IDE4MyxcbiAgICBBTEdPUklUSE1fU1RFUFNfRVJST1I6IDE4NCxcbiAgICBIT0xPX0FSRUFTX05PVF9MT0FERUQ6IDE4NSxcbiAgICBGSU5JU0hFRF9CWV9USU1FT1VUOiAxODYsXG4gICAgTEFTVF9ESUFHTk9TRV9WQUxVRTogMTkwLFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrUmVzdWx0ID0ge1xuICAgIENIX0NIRUNLX0VSUk9SOiAwLFxuICAgIENIX0NIRUNLX09LOiAxLFxuICAgIENIX0NIRUNLX1dBU19OT1RfRE9ORTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVHcmFwaGljRmllbGRUeXBlID0ge1xuICAgIEdGX1BPUlRSQUlUOiAyMDEsXG4gICAgR0ZfRklOR0VSUFI6IDIwMixcbiAgICBHRl9FWUU6IDIwMyxcbiAgICBHRl9TSUdOQVRVUkU6IDIwNCxcbiAgICBHRl9CQVJfQ09ERTogMjA1LFxuICAgIEdGX1BST09GX09GX0NJVElaRU5TSElQOiAyMDYsXG4gICAgR0ZfRE9DVU1FTlRfSU1BR0U6IDIwNyxcbiAgICBHRl9DT0xPUl9EWU5BTUlDOiAyMDksXG4gICAgR0ZfR0hPU1RfUE9SVFJBSVQ6IDIxMCxcbiAgICBHRl9TVEFNUDogMjExLFxuICAgIEdGX1BPUlRSQUlUX09GX0NISUxEOiAyMTIsXG4gICAgR0ZfT1RIRVI6IDI1MCxcbiAgICBHRl9GSU5HRVJfTEVGVF9USFVNQjogMzAwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0lOREVYOiAzMDEsXG4gICAgR0ZfRklOR0VSX0xFRlRfTUlERExFOiAzMDIsXG4gICAgR0ZfRklOR0VSX0xFRlRfUklORzogMzAzLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0xJVFRMRTogMzA0LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9USFVNQjogMzA1LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9JTkRFWDogMzA2LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9NSURETEU6IDMwNyxcbiAgICBHRl9GSU5HRVJfUklHSFRfUklORzogMzA4LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6IDMwOSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BPUlRSQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJQUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5nZXJwcmludFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRVlFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklyaXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1NJR05BVFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0JBUl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhcmNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BST09GX09GX0NJVElaRU5TSElQOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb29mIG9mIGNpdGl6ZW5zaGlwXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9ET0NVTUVOVF9JTUFHRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBpbWFnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfQ09MT1JfRFlOQU1JQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2xvciBkeW5hbWljc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfR0hPU1RfUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2hvc3QgcG9ydHJhaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1NUQU1QOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YW1wXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QT1JUUkFJVF9PRl9DSElMRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdCBvZiBjaGlsZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfT1RIRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX1RIVU1COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgdGh1bWJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX0lOREVYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgaW5kZXggZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9NSURETEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBtaWRkbGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9SSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgcmluZyBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX0xJVFRMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IGxpdHRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9USFVNQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCB0aHVtYlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX0lOREVYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IGluZGV4IGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX01JRERMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBtaWRkbGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfUklORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCByaW5nIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBsaXR0bGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVJbWFnZVF1YWxpdHlDaGVja1R5cGUgPSB7XG4gICAgSVFDX0lNQUdFX0dMQVJFUzogMCxcbiAgICBJUUNfSU1BR0VfRk9DVVM6IDEsXG4gICAgSVFDX0lNQUdFX1JFU09MVVRJT046IDIsXG4gICAgSVFDX0lNQUdFX0NPTE9STkVTUzogMyxcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDQsXG4gICAgSVFDX0JPVU5EUzogNSxcbiAgICBJUUNfU0NSRUVOX0NBUFRVUkU6IDYsXG4gICAgSVFDX1BPUlRSQUlUOiA3LFxuICAgIElRQ19IQU5EV1JJVFRFTjogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVMRFNfUGFyc2luZ0Vycm9yQ29kZXMgPSB7XG4gICAgRVJSX0xEU19PSzogMSxcbiAgICBFUlJfTERTX0FTTl9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2NDcsXG4gICAgUlJfTERTX0FTTl9OT1RfRU5PVUdIX0RBVEE6IC0yMTQ3NDgzNjQ2LFxuICAgIEVSUl9MRFNfQVNOX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogLTIxNDc0ODM2NDUsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjQwLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0VOQ0FQX0NPTlRFTlRTX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYzOSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYzOCxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MzEsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjksXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYyOCxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RJR0VTVF9BTEdPUklUSE1fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjI3LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfREdfSEFTSEVTX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYyNixcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MzAsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjI1LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjI0LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NOX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYyMyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjIyLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0lTU1VFUl9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjEsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjIwLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NVQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE5LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NVQkpFQ1RfUEtfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE4LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE3LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYxNixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYxNSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE0LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX0RJR0VTVF9BTEdfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjEzLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTIsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjExLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVU5TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjA5LFxuICAgIEVSUl9MRFNfSUNBT19MRFNfT0JKRUNUX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IC0yMTQ3NDgzNjAwLFxuICAgIEVSUl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfRU1QVFk6IC0yMTQ3NDgzNTk5LFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAtMjE0NzQ4MzU5OCxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogLTIxNDc0ODM1OTcsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0VSUk9SOiAtMjE0NzQ4MzU5NixcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX01JU1NFRDogLTIxNDc0ODM1OTQsXG4gICAgRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTogLTIxNDc0ODM1OTUsXG4gICAgRVJSX0xEU19BVVRIX0VSUk9SOiAtMjE0NzQ4MzU2OCxcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogLTIxNDc0ODM1NjcsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAtMjE0NzQ4MzU2NixcbiAgICBFUlJfTERTX0FVVEhfTUVTU0VEX0FMR09SSVRITVM6IC0yMTQ3NDgzNTY1LFxuICAgIEVSUl9MRFNfQVVUSF9QVUJMSUNfS0VZX0RBVEFfSU5WQUxJRDogLTIxNDc0ODM1NjQsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX0RBVEFfSU5WQUxJRDogLTIxNDc0ODM1NjMsXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9EQVRBX0lOVkFMSUQ6IC0yMTQ3NDgzNTYyLFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAtMjE0NzQ4MzU2MSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOiAtMjE0NzQ4MzU2MCxcbiAgICBFUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfTk9UX0RFRklORUQ6IC0yMTQ3NDgzNTU5LFxuICAgIEVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAtMjE0NzQ4MzU1OCxcbiAgICBFUlJfTERTX0RHX1dST05HX1RBSDogLTIxNDc0ODM1MzYsXG4gICAgRVJSX0xEU19ER19DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IC0yMTQ3NDgzNTM1LFxuICAgIEVSUl9MRFNfQkFQX1NZTU1FVFJJQ19DWVBIRVJfQ0FOVF9JTklUSUFMSVpFOiAtMjEzMDcwNjQxNSxcbiAgICBFUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAtMjEzMDcwNjQwMCxcbiAgICBFUlJfTERTX1BBQ0VfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IC0yMTMwNzA2Mzk5LFxuICAgIEVSUl9MRFNfUEFDRV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogLTIxMzA3MDYzOTgsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAtMjEzMDcwNjM5NyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX0RFQ09ERV9OT05DRTogLTIxMzA3MDYzOTYsXG4gICAgRVJSX0xEU19QQUNFX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6IC0yMTMwNzA2Mzk1LFxuICAgIEVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDogLTIxMzA3MDYzOTQsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogLTIxMzA3MDYzOTMsXG4gICAgRVJSX0xEU19QQUNFX01BUFBJTkdfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAtMjEzMDcwNjM5MixcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06IC0yMTMwNzA2MzkxLFxuICAgIEVSUl9MRFNfUEFDRV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6IC0yMTMwNzA2MzkwLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9JTkNPUlJFQ1Q6IC0yMTMwNzA2Mzg5LFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9DQU5UX1ZFUklGWTogLTIxMzA3MDYzODgsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX05PTl9NQVRDSElORzogLTIxMzA3MDYzODcsXG4gICAgRVJSX0xEU19QQUNFX0lNX1NDSEVNRV9JTkNPUlJFQ1Q6IC0yMTMwNzA2Mzg2LFxuICAgIEVSUl9MRFNfUEFDRV9JTV9SQU5ET01fTUFQUElOR19GQUlMRUQ6IC0yMTMwNzA2Mzg1LFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX1BVQkxJQ19LRVk6IC0yMTMwNzA2Mzg0LFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0lORk86IC0yMTMwNzA2MzgzLFxuICAgIEVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046IC0yMTMwNzA2MzgyLFxuICAgIEVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0RPTUFJTl9QQVJBTUVURVJTOiAtMjEzMDcwNjM4MSxcbiAgICBFUlJfTERTX0NBX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOiAtMjEzMDcwNjM4MCxcbiAgICBFUlJfTERTX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMjEzMDcwNjM3OSxcbiAgICBFUlJfTERTX0NBX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAtMjEzMDcwNjM3OCxcbiAgICBFUlJfTERTX0NBX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6IC0yMTMwNzA2Mzc3LFxuICAgIEVSUl9MRFNfQ0FfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAtMjEzMDcwNjM3NixcbiAgICBFUlJfTERTX1RBX0lOQ09SUkVDVF9WRVJTSU9OOiAtMjEzMDcwNjM2OCxcbiAgICBFUlJfTERTX1RBX0NBTlRfQlVJTERfQ0VSVElGSUNBVEVfQ0hBSU46IC0yMTMwNzA2MzY3LFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOiAtMjEzMDcwNjM2NixcbiAgICBFUlJfTERTX1RBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMjEzMDcwNjM2NSxcbiAgICBFUlJfTERTX1RBX1NJR05BVFVSRV9CVUlMRElOR19FUlJPUjogLTIxMzA3MDYzNjQsXG4gICAgRVJSX0xEU19UQV9JTlZBTElEX0tFWV9BTEdPUklUSE1fUEFSQU1FVEVSUzogLTIxMzA3MDYzNjMsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogLTIxMzA3MDYzNTIsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjM1MSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6IC0yMTMwNzA2MzUwLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTkRFRklORURfUEFSQU1FVEVSUzogLTIxMzA3MDYzNDksXG4gICAgRVJSX0xEU19BQV9TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MzQ4LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOiAtMjEzMDcwNjM0NyxcbiAgICBFUlJfTERTX0FBX0lOQ09SUkVDVF9UUkFJTEVSOiAtMjEzMDcwNjM0NixcbiAgICBFUlJfTERTX0FBX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IC0yMTMwNzA2MzQ1LFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6IC0yMTMwNzA2MzIwLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYzMTksXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09NUExFVEVfREFUQTogLTIxMzA3MDYzMTgsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOiAtMjEzMDcwNjMzNixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfVU5TVVBQT1JURUQ6IC0yMTMwNzA2MzM0LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hBVF9VTlNVUFBPUlRFRF9URVJNSU5BTF9UWVBFOiAtMjEzMDcwNjMzMyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOiAxMzUyNjYzMTAsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTlZBTElEX1BBUkFNUzogLTIxMzA3MDYzMzEsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwODAsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DUElfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDc5LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3OCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDc3LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hSX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3NixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDc1LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfRlJPTV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwNzQsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9UT19JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwNzMsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3MSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX01JU1NJTkc6IC0yMTMwNzA2MDcwLFxuICAgIEVSUl9MRFNfVkRTX1VOU1VQUE9SVEVEX1ZFUlNJT046IC0yMTMwNzA1OTIwLFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9TSVpFOiAtMjEzMDcwNTkxOSxcbiAgICBFUlJfTERTX1ZEU19JU1NVSU5HX0NPVU5UUllfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA1OTE4LFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOiAtMjEzMDcwNTkxNyxcbiAgICBFUlJfTERTX1ZEU19TSUdORVJfQ0VSVElGSUNBVEVfREFUQTogLTIxMzA3MDU5MTYsXG4gICAgRVJSX0xEU19WRFNfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNTkxNSxcbiAgICBFUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDU2NjQsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDU2NjMsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSEVBREVSOiAtMjEzMDcwNTY2MixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9UWVBFOiAtMjEzMDcwNTY2MSxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9WRVJTSU9OOiAtMjEzMDcwNTY2MCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9JU1NVSU5HX0NPVU5UUlk6IC0yMTMwNzA1NjU5LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6IC0yMTMwNzA1NjU4LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR05BVFVSRTogLTIxMzA3MDU2NTcsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX0FMR09SSVRITTogLTIxMzA3MDU2NTYsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6IC0yMTMwNzA1NjU1LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19WQUxVRTogLTIxMzA3MDU2NTQsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IE5vdCBlbm91Z2ggZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOOiBDb250ZW50cyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogRW5jYXAgY29udGVudHMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5mbyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERpZ2VzdCBhbGdvcml0aG0gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBERyBoYXNoZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTTiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogSXNzdWVyIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFZhbGlkaXR5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFN1YmplY3QgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBQSyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFZlcnNpb24gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ24gYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVW5zaWduZWQgYXR0cmlidXRlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBMRFMgb2JqZWN0OiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lZCBkYXRhOiBTaWduZXIgaW5mbyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25lciBpbmZvIGNhbm5vdCBmaW5kIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBTaWduZWQgYXR0cmlidXRlcyBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBwdWJsaWMga2V5IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogTWVzc2VkIGFsZ29yaXRobXNcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFB1YmxpYyBrZXkgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBkYXRhIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgbm90IGRlZmluZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFNpZ25hdHVyZSBjaGVjayBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIERHOiBXcm9uZyBUYWdcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzUzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIERHOiBDb250ZW50cyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjQxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEJBUDogU3ltbWV0cmljIEN5cGhlciBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2NDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBTeW1tZXRyaWMgQ3lwaGVyIENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBLZXkgQWdyZWVtZW50IENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBFcGhlbWVyYWwgS2V5cyBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIENhbm5vdCBEZWNvZGUgTm9uY2VcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBGb3JtYXRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBFcGhlbWVyYWwgS2V5cyBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IFBlcmZvcm1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE5vbi1NYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogQ0FNIGRhdGEgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBDQU0gZGF0YSBjYW5ub3QgdmVyaWZ5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBDQU0gZGF0YSBub24tbWF0Y2hpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IElNIHNjaGVtZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFJhbmRvbSBtYXBwaW5nIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBJbmZvXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBEb21haW4gUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBTaGFyZWQgU2VjcmV0IENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBOb24tTWF0Y2hpbmcgQXV0aCBUb2tlbnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IENhbm5vdCBCdWlsZCBDZXJ0aWZpY2F0ZSBDaGFpblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IENhbm5vdCBGaW5kIElTIFByaXZhdGUgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBTaWduYXR1cmUgQnVpbGRpbmcgRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBJbnZhbGlkIEtleSBBbGdvcml0aG0gUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgSW5jb3JyZWN0IFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IFVuZGVmaW5lZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogU2lnbmF0dXJlIEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogVW5zdXBwb3J0ZWQgcmVjb3Zlcnkgc2NoZW1lXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogSW5jb3JyZWN0IFRyYWlsZXJcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBVbnN1cHBvcnRlZCBEaWdlc3QgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogTWlzc2luZyBtYW5kYXRvcnkgZGF0YSBQS1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIHVuc3VwcG9ydGVkIHRlcm1pbmFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbnZhbGlkIHBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgQ2Fubm90IEZpbmRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvbXBsZXRlIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENQSSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENBUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSFIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWQgZnJvbSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIHRvIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogRXh0ZW5zaW9ucyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1OTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBVbnN1cHBvcnRlZCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IElzc3VpbmcgY291bnRyeSBzaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IElzc3VpbmcgY291bnRyeSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1OTE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgY2VydGlmaWNhdGUgc2l6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1OTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgY2VydGlmaWNhdGUgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1OTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBoZWFkZXJcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IGlzc3VpbmcgY291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBtZXNzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHNpZ25hdHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHNpZ25hdHVyZSB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0tcIlxuICAgICAgICAgICAgY2FzZSAxMzUyNjYzMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAyMTQ3NDgzNTk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZWQgZGF0YTogU2lnbmVyIGluZm8gZW1wdHlcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1ZFUlNJT046IC0xODc5MDQ4MTkxLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX05PTl9NQVRDSElOR19TSUdOQVRVUkVfQUxHT1JJVEhNOiAtMTg3OTA0ODE5MCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVElNRV9DT0RJTkc6IC0xODc5MDQ4MTg5LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9VU0VfT0ZfR0VORVJBTElaRURfVElNRTogLTE4NzkwNDgxODgsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfSVNTVUVSOiAtMTg3OTA0ODE4NyxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9TVUJKRUNUOiAtMTg3OTA0ODE4NixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9DUklUSUNBTF9FWFRFTlNJT046IC0xODc5MDQ4MTg0LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0NTQ0FfUk9MRTogLTE4NzkwNDgxNzgsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfRFNfUk9MRTogLTE4NzkwNDgxNzcsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0lTU1VFUl9TVUJKRUNUX0RTOiAtMTg3OTA0ODE3NixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9EVVBMSUNBVElOR19FWFRFTlNJT05TOiAtMTg3OTA0ODE2OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9NSVNTRUQ6IC0xODc5MDQ3NjgwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc2NzksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX01JU1NFRDogLTE4NzkwNDc2NzgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT01NT05fTkFNRV9NSVNTRUQ6IC0xODc5MDQ3Njc3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzY3NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX01JU1NFRDogLTE4NzkwNDc2NzUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTUlTU0VEOiAtMTg3OTA0NzY3NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT1VOVFJZX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjczLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6IC0xODc5MDQ3NjcyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAtMTg3OTA0NzY3MSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06IC0xODc5MDQ3NjcwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9NSVNTRURfRVhURU5TSU9OUzogLTE4NzkwNDc2NjksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAtMTg3OTA0NzY2OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1VTSU5HX05PTl9DT01QTElBTlRfREFUQTogLTE4NzkwNDc2NjcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTUlTU0VEOiAtMTg3OTA0NzY2NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IC0xODc5MDQ3NjY1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzY2NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTUlTU0VEOiAtMTg3OTA0NzY2MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMTogLTE4NzkwNDc2NjIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9VU0FHRTI6IC0xODc5MDQ3NjYxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19OT1RfQ1JJVElDQUw6IC0xODc5MDQ3NjYwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2NTksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfTUlTU0VEOiAtMTg3OTA0NzY1OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19JTkNPUlJFQ1Q6IC0xODc5MDQ3NjU3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IC0xODc5MDQ3NjU2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfVVNBR0U6IC0xODc5MDQ3NjU1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2NTQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9NSVNTRUQ6IC0xODc5MDQ3NjUzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjUyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQVVUSF9LRVlfSURfS0VZX0lEX01JU1NFRDogLTE4NzkwNDc2NTEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9NSVNTRUQ6IC0xODc5MDQ3NjUwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9LRVlfSURfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjQ5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfTUlTU0VEOiAtMTg3OTA0NzY0OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzY0NyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0VNUFRZOiAtMTg3OTA0NzY0NixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTUlTU0VEOiAtMTg3OTA0NzY0NSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjQ0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9FTVBUWTogLTE4NzkwNDc2NDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjQyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9DUklUSUNBTDogLTE4NzkwNDc2NDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0VNUFRZOiAtMTg3OTA0NzYzOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAtMTg3OTA0NzYzOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MzcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTUlTU0VEOiAtMTg3OTA0NzYzNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2MzUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRU1QVFk6IC0xODc5MDQ3NjM0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjMzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0NSSVRJQ0FMOiAtMTg3OTA0NzYzMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9FTVBUWTogLTE4NzkwNDc2MzAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fSU5DT1JSRUNUOiAtMTg3OTA0NzYyOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYyOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTUlTU0VEOiAtMTg3OTA0NzYyNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjI2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9WRVJTSU9OOiAtMTg3OTA0NzYyNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTOiAtMTg3OTA0NzYyNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTX0VNUFRZOiAtMTg3OTA0NzYyMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjIyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19FTVBUWTogLTE4NzkwNDc2MjEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX1BPTElDWV9JRF9NSVNTRUQ6IC0xODc5MDQ3NjIwLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfTUlTU0VEOiAtMTg3OTA0NzYxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzYxOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0VNUFRZOiAtMTg3OTA0NzYxNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX1BPSU5UX01JU1NFRDogLTE4NzkwNDc2MTYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NOX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjE1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU05fTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MTQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfU05fTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MTMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MTIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQVRUUklCVVRFX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjExLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU1VCSkVDVF9DT1VOVFJZX05PTl9NQVRDSElORzogLTE4NzkwNDc2MTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DU0NBX0FMVF9OQU1FU19OT05fTUFUQ0hJTkc6IC0xODc5MDQ3NjA5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjA4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MDcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9DUklUSUNBTDogLTE4NzkwNDc2MDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjA1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9DUklUSUNBTDogLTE4NzkwNDc2MDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9PUFRJT05BTF9DUklUSUNBTDogLTE4NzkwNDc2MDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MDEsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ4MTYwLFxuICAgIE5URl9MRFNfSUNBT19DT01fTERTX1ZFUlNJT05fTUlTU0lORzogLTE4NzkwNDgxNTksXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0ODE1OCxcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9NSVNTSU5HOiAtMTg3OTA0ODE1NyxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fSU5DT1JSRUNUOiAtMTg3OTA0ODE1NixcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fTUlTU0lORzogLTE4NzkwNDgxNTUsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX1VORVhQRUNURUQ6IC0xODc5MDQ4MTU0LFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9MRFNfVkVSU0lPTl9VTlNVUFBPUlRFRDogLTE4NzkwNDgxNDQsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9VTlNVUFBPUlRFRDogLTE4NzkwNDgxNDMsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX0lOQ09OU0lTVEVOVDogLTE4NzkwNDgxNDIsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9JTkNPTlNJU1RFTlQ6IC0xODc5MDQ4MTQxLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX09JRF9JTkNPUlJFQ1Q6IC0xODc5MDQ3OTM2LFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0Nzc3NixcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9DT05URU5UX09JRF9JTkNPUlJFQ1Q6IC0xODc5MDQ3Nzc1LFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc5MzUsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0VNUFRZOiAtMTg3OTA0NzkzNCxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfVU5TVVBQT1JURUQ6IC0xODc5MDQ3OTMzLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfTVVMVElQTEVfRU5UUklFUzogLTE4NzkwNDc5MjcsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19NSVNTRUQ6IC0xODc5MDQ3NzYwLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DRVJUSUZJQ0FURVNfRU1QVFk6IC0xODc5MDQ3NzU5LFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9DUkxTX0lOQ09SUkVDVF9VU0FHRTogLTE4NzkwNDc3NTgsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0NPTlRFTlRfT0lEOiAtMTg3OTA0NzkzMixcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19OVU1CRVJfSU5DT1JSRUNUOiAtMTg3OTA0NzkzMSxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX01JU1NJTkc6IC0xODc5MDQ3OTMwLFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfRVhUUkE6IC0xODc5MDQ3OTI5LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0NzkyOCxcbiAgICBOVEZfTERTX0lDQU9fTUFTVEVSX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3NzQ0LFxuICAgIE5URl9MRFNfSUNBT19ERVZJQVRJT05fTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc3MzYsXG4gICAgTlRGX0xEU19CU0lfREVGRUNUX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3NzI4LFxuICAgIE5URl9MRFNfQlNJX0JMQUNLX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3NzIwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0NzkyNixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0NIT0lDRTogLTE4NzkwNDc5MjUsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lEX0RJR0VTVF9BTEdPUklUSE1fTk9UX0xJU1RFRDogLTE4NzkwNDc5MjQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9NSVNTSU5HOiAtMTg3OTA0NzkyMyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX0RBVEE6IC0xODc5MDQ3OTIyLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfVmFsdWU6IC0xODc5MDQ3OTIxLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX01JU1NJTkc6IC0xODc5MDQ3OTIwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX0RBVEE6IC0xODc5MDQ3OTE5LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX1ZBTFVFOiAtMTg3OTA0NzkxOCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9NSVNTSU5HOiAtMTg3OTA0NzkwOSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9EQVRBOiAtMTg3OTA0NzkwOCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9WQUxVRTogLTE4NzkwNDc5MDcsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfTUlTU0lORzogLTE4NzkwNDc5MDYsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfREFUQTogLTE4NzkwNDc5MDUsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAtMTg3OTA0NzkxNSxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogLTE4NzkwNDc5MTQsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAtMTg3OTA0NzkxMyxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogLTE4NzkwNDc5MTIsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAtMTg3OTA0NzkxMSxcbiAgICBOVEZfTERTX1VOU1VQUE9SVEVEX0lNQUdFX0ZPUk1BVDogLTE4NzkwNDc5MTAsXG4gICAgTlRGX0xEU19NUlpfRE9DVU1FTlRfVFlQRV9VTktOT1dOOiAxMzkyNzIsXG4gICAgTlRGX0xEU19NUlpfSVNTVUlOR19TVEFURV9TWU5UQVhfRVJST1I6IDEzOTI3MyxcbiAgICBOVEZfTERTX01SWl9OQU1FX0lTX1ZPSUQ6IDEzOTI3NCxcbiAgICBOVEZfTERTX01SWl9OVU1CRVJfSU5DT1JSRUNUX0NIRUNLU1VNOiAxMzkyNzcsXG4gICAgTlRGX0xEU19NUlpfTkFUSU9OQUxJVFlfU1lOVEFYX0VSUk9SOiAxMzkyNzgsXG4gICAgTlRGX0xEU19NUlpfRE9CX1NZTlRBWF9FUlJPUjogMTM5Mjc5LFxuICAgIE5URl9MRFNfTVJaX0RPQl9FUlJPUjogMTM5MjgwLFxuICAgIE5URl9MRFNfTVJaX0RPQl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDEzOTI4MSxcbiAgICBOVEZfTERTX01SWl9TRVhfSU5DT1JSRUNUOiAxMzkyODIsXG4gICAgTlRGX0xEU19NUlpfRE9FX1NZTlRBWF9FUlJPUjogMTM5MjgzLFxuICAgIE5URl9MRFNfTVJaX0RPRV9FUlJPUjogMTM5Mjg0LFxuICAgIE5URl9MRFNfTVJaX0RPRV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDEzOTI4NSxcbiAgICBOVEZfTERTX01SWl9PUFRJT05BTF9EQVRBX0lOQ09SUkVDVF9DSEVDS1NVTTogMTM5Mjg2LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVF9DSEVDS1NVTTogMTM5Mjg3LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVDogMTM5Mjg4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfTUlTU0lORzogLTE4Nzg5ODI2NTYsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9JTkNPUlJFQ1Q6IC0xODc4OTE3MTIwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9NSVNTSU5HOiAtMTg3ODg1MTU4NCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX1RZUEVfSU5DT1JSRUNUOiAtMTg3ODc4NjA0OCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfVFlQRV9JTkNPUlJFQ1Q6IC0xODc4NzIwNTEyLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19TVUJfVFlQRV9NSVNTSU5HOiAtMTg3ODY1NDk3NixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfU1VCX1RZUEVfSU5DT1JSRUNUOiAtMTg3ODU4OTQ0MCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0lNQUdFX01JU1NJTkc6IC0xODc4NTIzOTA0LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfRk9STUFUX0lEX0lOQ09SUkVDVDogLTE4Nzg0NTgzNjgsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzgzOTI4MzIsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0xFTkdUSF9JTkNPUlJFQ1Q6IC0xODc4MzI3Mjk2LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9HRU5ERVI6IC0xODc3OTk5NjE2LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9FWUVfQ09MT1I6IC0xODc3OTM0MDgwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9IQUlSX0NPTE9SOiAtMTg3Nzg2ODU0NCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ZQVc6IC0xODc3ODAzMDA4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1BJVENIOiAtMTg3NzczNzQ3MixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ST0xMOiAtMTg3NzY3MTkzNixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1lBVzogLTE4Nzc2MDY0MDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9QSVRDSDogLTE4Nzc1NDA4NjQsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ST0xMOiAtMTg3NzQ3NTMyOCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRkFDRV9JTUFHRV9UWVBFOiAtMTg3NzQwOTc5MixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSU1BR0VfREFUQV9UWVBFOiAtMTg3NzM0NDI1NixcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19VTlNVUFBPUlRFRF9TVERfUEFSQU1FVEVSUzogLTE4NjIyNzA5NzYsXG4gICAgTlRGX0xEU19TSV9QQUNFX0lORk9fREVQUkVDQVRFRF9WRVJTSU9OOiAtMTg2MjI3MDk3NSxcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VU0lOR19TVERfUkVGOiAtMTg2MjI3MDk3NCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IC0xODYyMjcwOTczLFxuICAgIE5URl9MRFNfU0lfQ0FfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogLTE4NjIyNzA5NzIsXG4gICAgTlRGX0xEU19TSV9DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTogLTE4NjIyNzA5NzEsXG4gICAgTlRGX0xEU19TSV9DQV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogLTE4NjIyNzA5NzAsXG4gICAgTlRGX0xEU19TSV9UQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDk2OSxcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fRklMRV9JRF9GT1JfVkVSU0lPTjI6IC0xODYyMjcwOTY4LFxuICAgIE5URl9MRFNfU0lfRUlEX1NFQ1VSSVRZX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IC0xODYyMjcwOTY3LFxuICAgIE5URl9MRFNfU0lfUklfSU5GT19JTkNPUlJFQ1RfVkVSU0lPTjogLTE4NjIyNzA5NjYsXG4gICAgTlRGX0xEU19TSV9SSV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogLTE4NjIyNzA5NjUsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDk2NCxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMTg2MjI3MDk2MyxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT05TSVNURU5UX0FMR09SSVRITV9SRUZFUkVOQ0U6IC0xODYyMjcwOTYyLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogLTE4NjIyNzA3MjAsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19TVERfUEFSQU1FVEVSUzogLTE4NjIyNzA3MTksXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOiAtMTg2MjI3MDcxOCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT1RfQVZBSUxBQkxFOiAtMTg2MjI3MDcxNyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT19SRVFVSVJFRF9PUFRJT046IC0xODYyMjcwNzE2LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PVF9BVkFJTEFCTEU6IC0xODYyMjcwNzE1LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9BTk9OWU1PVVNfSU5GT1M6IC0xODYyMjcwNzE0LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX0RPTUFJTl9QQVJBTVM6IC0xODYyMjcwNzEzLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PX01BVENISU5HX1BVQkxJQ19LRVk6IC0xODYyMjcwNzEyLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkNPUlJFQ1RfSU5GT1NfUVVBTlRJVFk6IC0xODYyMjcwNzExLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9UQV9JTkZPX05PVF9BVkFJTEFCTEU6IC0xODYyMjcwNzEwLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQVJEX0lORk9fTE9DQVRPUl9NVUxUSVBMRV9FTlRSSUVTOiAtMTg2MjI3MDcwOSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfRUlEX1NFQ1VSSVRZX0lORk9fTVVMVElQTEVfRU5UUklFUzogLTE4NjIyNzA3MDgsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfTVVMVElQTEVfRU5UUklFUzogLTE4NjIyNzA3MDcsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfSU5DT1JSRUNUX1VTQUdFOiAtMTg2MjI3MDcwNixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUklfRE9NQUlOX1BBUkFNU19NVUxUSVBMRV9FTlRSSUVTOiAtMTg2MjI3MDcwNSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPU19OT05fQ09OU0lTVEFOVDogLTE4NjIyNzA3MDQsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUk9GSUxFX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDQ2MyxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElESVRZOiAtMTg2MjI3MDQ2MixcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX05PTl9DVl9DQV9ET01BSU5fUEFSQU1FVEVSUzogLTE4NjIyNzA0NjEsXG4gICAgTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfVkVSU0lPTjogLTE4NjIyNzA0NjAsXG4gICAgTlRGX0xEU19UQV9QQUNFX1NUQVRJQ19CSU5ESU5HX1VTRUQ6IC0xODYyMjcwMjA4LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTogLTE4NDU0OTM0ODMsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6IC0xODQ1NDkzNDgyLFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogLTE4NDU0OTM0ODEsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6IC0xODQ1NDkzNDgwLFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDogLTE4NDU0OTM0NzksXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogTm9uLW1hdGNoaW5nIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB0aW1lIGNvZGluZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHVzZSBvZiBnZW5lcmFsaXplZCB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBFbXB0eSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEVtcHR5IHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIGNyaXRpY2FsIGV4dGVuc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRm9yY2VkIGRlZmF1bHQgQ1NDQSByb2xlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgRGVmYXVsdCBEUyByb2xlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgaXNzdWVyIHN1YmplY3QgRFNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IER1cGxpY2F0aW5nIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IExEUyB2ZXJzaW9uIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogVW5pY29kZSB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSB1bmV4cGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogTERTIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiBpbmNvbnNpc3RlbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gaW5jb25zaXN0ZW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBPSUQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBJbmNvcnJlY3QgY29udGVudCBPSURcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IERHIG51bWJlciBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IERHIGhhc2ggbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBleHRyYVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBTaWduZXIgaW5mb3MgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBpbmNvcnJlY3QgY2hvaWNlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTSUQgZGlnZXN0IGFsZ29yaXRobSBub3QgbGlzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW5ub3QgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uOiBVbnN1cHBvcnRlZCBpbWFnZSBmb3JtYXRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBMaXN0IGNvbnRlbnQgZGVzY3JpcHRpb24gYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBMaXN0IGNvbnRlbnQgZGVzY3JpcHRpb24gYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Nzc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogQ29udGVudCBPSUQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENlcnRpZmljYXRlcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENSTHMgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBtYXN0ZXIgbGlzdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzczNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIERldmlhdGlvbiBsaXN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJTSTogRGVmZWN0ICBsaXN0IHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQlNJOiBCbGFjayBsaXN0IHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmVyc2lvbiBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb21tb24gbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY291bnRyeSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY29tbW9uIG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVc2luZyBub24tY29tcGxpYW50IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgcHVibGljIGtleSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBNaXNzZWQgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2UgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgdXNhZ2UgMVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgdXNhZ2UgMlwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgcGF0aCBMZW5DIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2Ugbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3Qga2V5IElEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IE1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IERvYyB0eXBlc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IERvYyB0eXBlcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBEZXJ0IHBvbGljaWVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENlcnQgcG9saWNpZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBwb2xpY3kgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBwb2ludCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTTiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIFNOIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IFNOIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgYXR0cmlidXRlIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGF0dHJpYnV0ZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIHN1YmplY3QgY291bnRyeSBub24tbWF0Y2hpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1NDQSBhbHQgbmFtZXMgbm9uLW1hdGNoaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IE5hbWUgY2hhbmdlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IE5hbWUgY2hhbmdlIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogTmFtZSBjaGFuZ2UgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogQ3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogT3B0aW9uYWwgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvbW1vbiBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODk4MjY1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgb3duZXIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTE3MTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODg1MTU4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg3ODYwNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IHR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg3MjA1MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogVHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODY1NDk3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBTdWJ0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODU4OTQ0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBTdWJ0eXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTIzOTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBpbWFnZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg0NTgzNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGZvcm1hdCBJRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODM5MjgzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODMyNzI5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZGF0YSBsZW5ndGggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc5OTk2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgR2VuZGVyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc5MzQwODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRXllIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4Njg1NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSGFpciBDb2xvclwiXG4gICAgICAgICAgICBjYXNlIC0xODc3ODAzMDA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgWWF3XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc3Mzc0NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NjcxOTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NjA2NDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzU0MDg2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzQ3NTMyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFUgUm9sbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDA5NzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEZhY2UgSW1hZ2UgVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc3MzQ0MjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEltYWdlIERhdGEgVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gVW5zdXBwb3J0ZWQgU3RkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIERlcHJlY2F0ZWQgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVXNpbmcgU3RkIFJlZlwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgUHVibGljS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gRmlsZSBJRCBGb3IgVmVyc2lvbiAyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBVbnN1cHBvcnRlZCBEaWdlc3QgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGluZm8gaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgZG9tYWluIHBhcmFtcyB1bnN1cHBvcnRlZCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQUEgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29uc2lzdGVudCBhbGdvcml0aG0gcmVmZXJlbmNlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBObyBSZXF1aXJlZCBPcHRpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgRG9tYWluIFBhcmFtcyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEFub255bW91cyBJbmZvc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIERvbWFpbiBQYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBObyBNYXRjaGluZyBQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluY29ycmVjdCBJbmZvcyBRdWFudGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBUQSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ2FyZCBJbmZvIExvY2F0b3IgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBlSUQgU2VjdXJpdHkgSW5mbyBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQcml2aWxlZ2VkIFRJIEluY29ycmVjdCBVc2FnZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIG11bHRpcGxlIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogU3RvcmFnZSBQQUNFIEluZm8gTm9uIENvbnNpc3RhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDQ2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBDViBDZXJ0aWZpY2F0ZTogUHJvZmlsZSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBOb24gQ1ZDQSBkb21haW4gcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwMjA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFRBOiBQQUNFIHN0YXRpYyBiaW5kaW5nIHVzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW5ub3QgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRG9jdW1lbnQgdHlwZSB1bmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSXNzdWluZyBzdGF0ZSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYW1lIGlzIHZvaWRcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOdW1iZXIgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTmF0aW9uYWxpdHkgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBTZXggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBPcHRpb25hbCBkYXRhIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfVW5sb2FkOiAxMjEwNyxcbiAgICBlUENfUHJvY01ncl9DaGVja0RhdGFiYXNlOiAxMjEwOSxcbiAgICBlUENfUHJvY01ncl9Db21wYXJlUG9ydHJhaXRzOiAxMjExMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSZXF1ZXN0Q29tbWFuZCA9IHtcbiAgICBlUmVxQ21kX1JGaWRfU2VuZERhdGE6IDEwMCxcbiAgICBlUmVxQ21kX1JGaWRfTm90aWZ5OiAxMDEsXG4gICAgZVJlcUNtZF9SRmlkX0dldERhdGFGb3JTY2VuYXJpbzogMTAyLFxuICAgIGVSZXFDbWRfVG9yY2hfR2V0VVZGb3RvOiAyMDAsXG4gICAgZVJlcUNtZF9JbnRlcm5ldFNlbmQ6IDMwMCxcbiAgICBlUmVxQ21kX0dldEd1aWQ6IDQwMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBBQ1BUX1VOREVGSU5FRDogMCxcbiAgICBBQ1BUX0JBQzogMSxcbiAgICBBQ1BUX1BBQ0U6IDIsXG4gICAgQUNQVF9DQTogMyxcbiAgICBBQ1BUX1RBOiA0LFxuICAgIEFDUFRfQUE6IDUsXG4gICAgQUNQVF9SSTogNixcbiAgICBBQ1BUX0NBUkRfSU5GTzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUgPSB7XG4gICAgYXB0VW5kZWZpbmVkOiAwLFxuICAgIGFwdFN0YW5kYXJkOiAxLFxuICAgIGFwdEFkdmFuY2VkOiAyLFxuICAgIGFwdEdlbmVyYWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9CYXVkUmF0ZSA9IHtcbiAgICByZmJyXzEwNjogMSxcbiAgICByZmJyXzIxMjogMixcbiAgICByZmJyXzQyNDogNCxcbiAgICByZmJyXzg0ODogOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0NlcnRpZmljYXRlVHlwZSA9IHtcbiAgICBDVF9VTkRFRklORUQ6IDAsXG4gICAgQ1RfQ1NDQTogMSxcbiAgICBDVF9DU0NBX0xJTks6IDIsXG4gICAgQ1RfRFM6IDMsXG4gICAgQ1RfTUxTOiA0LFxuICAgIENUX0RFVl9MUzogNSxcbiAgICBDVF9ERUZfTFM6IDYsXG4gICAgQ1RfQkxTOiA3LFxuICAgIENUX0xEUzI6IDgsXG4gICAgQ1RfQkNTOiA5LFxuICAgIENUX0JDU05DOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0RhdGFGaWxlX1R5cGUgPSB7XG4gICAgREZUX1VOU1BFQ0lGSUVEOiAwLFxuICAgIERGVF9QQVNTUE9SVF9ERzE6IDEsXG4gICAgREZUX1BBU1NQT1JUX0RHMjogMixcbiAgICBERlRfUEFTU1BPUlRfREczOiAzLFxuICAgIERGVF9QQVNTUE9SVF9ERzQ6IDQsXG4gICAgREZUX1BBU1NQT1JUX0RHNTogNSxcbiAgICBERlRfUEFTU1BPUlRfREc2OiA2LFxuICAgIERGVF9QQVNTUE9SVF9ERzc6IDcsXG4gICAgREZUX1BBU1NQT1JUX0RHODogOCxcbiAgICBERlRfUEFTU1BPUlRfREc5OiA5LFxuICAgIERGVF9QQVNTUE9SVF9ERzEwOiAxMCxcbiAgICBERlRfUEFTU1BPUlRfREcxMTogMTEsXG4gICAgREZUX1BBU1NQT1JUX0RHMTI6IDEyLFxuICAgIERGVF9QQVNTUE9SVF9ERzEzOiAxMyxcbiAgICBERlRfUEFTU1BPUlRfREcxNDogMTQsXG4gICAgREZUX1BBU1NQT1JUX0RHMTU6IDE1LFxuICAgIERGVF9QQVNTUE9SVF9ERzE2OiAxNixcbiAgICBERlRfUEFTU1BPUlRfREcxNzogMTcsXG4gICAgREZUX1BBU1NQT1JUX0RHMTg6IDE4LFxuICAgIERGVF9QQVNTUE9SVF9ERzE5OiAxOSxcbiAgICBERlRfUEFTU1BPUlRfREcyMDogMjAsXG4gICAgREZUX1BBU1NQT1JUX1NPRDogMjEsXG4gICAgREZUX1BBU1NQT1JUX0NWQ0E6IDIyLFxuICAgIERGVF9QQVNTUE9SVF9DT006IDIzLFxuICAgIERGVF9JRF9ERzE6IDEwMSxcbiAgICBERlRfSURfREcyOiAxMDIsXG4gICAgREZUX0lEX0RHMzogMTAzLFxuICAgIERGVF9JRF9ERzQ6IDEwNCxcbiAgICBERlRfSURfREc1OiAxMDUsXG4gICAgREZUX0lEX0RHNjogMTA2LFxuICAgIERGVF9JRF9ERzc6IDEwNyxcbiAgICBERlRfSURfREc4OiAxMDgsXG4gICAgREZUX0lEX0RHOTogMTA5LFxuICAgIERGVF9JRF9ERzEwOiAxMTAsXG4gICAgREZUX0lEX0RHMTE6IDExMSxcbiAgICBERlRfSURfREcxMjogMTEyLFxuICAgIERGVF9JRF9ERzEzOiAxMTMsXG4gICAgREZUX0lEX0RHMTQ6IDExNCxcbiAgICBERlRfSURfREcxNTogMTE1LFxuICAgIERGVF9JRF9ERzE2OiAxMTYsXG4gICAgREZUX0lEX0RHMTc6IDExNyxcbiAgICBERlRfSURfREcxODogMTE4LFxuICAgIERGVF9JRF9ERzE5OiAxMTksXG4gICAgREZUX0lEX0RHMjA6IDEyMCxcbiAgICBERlRfSURfREcyMTogMTIxLFxuICAgIERGVF9ETF9DT006IDE1MCxcbiAgICBERlRfRExfREcxOiAxNTEsXG4gICAgREZUX0RMX0RHMjogMTUyLFxuICAgIERGVF9ETF9ERzM6IDE1MyxcbiAgICBERlRfRExfREc0OiAxNTQsXG4gICAgREZUX0RMX0RHNTogMTU1LFxuICAgIERGVF9ETF9ERzY6IDE1NixcbiAgICBERlRfRExfREc3OiAxNTcsXG4gICAgREZUX0RMX0RHODogMTU4LFxuICAgIERGVF9ETF9ERzk6IDE1OSxcbiAgICBERlRfRExfREcxMDogMTYwLFxuICAgIERGVF9ETF9ERzExOiAxNjEsXG4gICAgREZUX0RMX0RHMTI6IDE2MixcbiAgICBERlRfRExfREcxMzogMTYzLFxuICAgIERGVF9ETF9ERzE0OiAxNjQsXG4gICAgREZUX0RMX1NPRDogMTY1LFxuICAgIERGVF9ETF9DRTogMTY2LFxuICAgIERGVF9ETF9DVkNBOiAxNjcsXG4gICAgREZUX1BBQ0VfQ0FSREFDQ0VTUzogMjAwLFxuICAgIERGVF9QQUNFX0NBUkRTRUNVUklUWTogMjAxLFxuICAgIERGVF9QQUNFX0NISVBTRUNVUklUWTogMjAyLFxuICAgIERGVF9NSUZBUkVfREFUQTogMzAwLFxuICAgIERGVF9NSUZBUkVfVkFMSURJVFk6IDMwMSxcbiAgICBERlRfQVVUSEVOVElDSVRZVjI6IDMwMixcbiAgICBERlRfQVRSOiA0MDAsXG4gICAgREZUX0VTSUdOX1BLOiA1MDAsXG4gICAgREZUX0VTSUdOX1NJR05FRERBVEE6IDUwMSxcbiAgICBERlRfQ0VSVElGSUNBVEU6IDYwMCxcbiAgICBERlRfTUFTVEVSTElTVDogNjAxLFxuICAgIERGVF9ERUZFQ1RMSVNUOiA2MDIsXG4gICAgREZUX0RFVklBVElPTkxJU1Q6IDYwMyxcbiAgICBERlRfQVBQX0RJUkVDVE9SWTogNzAwLFxuICAgIERGVF9TRVNTSU9OOiA3MDEsXG4gICAgREZUX0xPR0RBVEE6IDcwMixcbiAgICBERlRfQ0hJUF9QUk9QRVJUSUVTOiA3MDMsXG4gICAgREZUX1NBTV9EQVRBOiA4MDAsXG4gICAgREZUX1NBTV9EQVRBX01BWDogODMyLFxuICAgIERGVF9WRFM6IDkwMCxcbiAgICBERlRfVkRTTkM6IDkwMSxcbiAgICBERlRfVVNFUkRFRklORUQ6IDEwMDAsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfVU5TUEVDSUZJRURcIlxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hY2hpbmUgUmVhZGFibGUgWm9uZSAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGaW5nZXJwcmludChzKSAoREczKVwiXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHNClcIlxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0KHMpIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlIC8gdXN1YWwgbWFyayBpbWFnZSAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOClcIlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBwZXJzb25hbCBkZXRhaWwocykgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBkb2N1bWVudCBkZXRhaWxzIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbChzKSAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY3RpdmUgQXV0aGVudGljYXRpb24gaW5mbyAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb24ocykgdG8gbm90aWZ5IChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMTdcIlxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE4XCJcbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxOVwiXG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMjBcIlxuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5TT0RcIlxuICAgICAgICAgICAgY2FzZSAxNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuU09EXCJcbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ1ZDQVwiXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIDE1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DT01cIlxuICAgICAgICAgICAgY2FzZSAxMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgdHlwZVwiICsgXCIgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiICsgXCIgKERHMilcIlxuICAgICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIiArIFwiIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWVcIiArIFwiIChERzQpXCJcbiAgICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiICsgXCIgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCIgKyBcIiAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2FkZW1pYyB0aXRsZVwiICsgXCIgKERHNylcIlxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiICsgXCIgKERHOClcIlxuICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIiArIFwiIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCIgKyBcIiAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2V4XCIgKyBcIiAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsc1wiICsgXCIgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgMTEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTUpXCJcbiAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTYpXCJcbiAgICAgICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTcpXCJcbiAgICAgICAgICAgIGNhc2UgMTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTgpXCJcbiAgICAgICAgICAgIGNhc2UgMTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMVwiICsgXCIgKERHMTkpXCJcbiAgICAgICAgICAgIGNhc2UgMTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiICsgXCIgKERHMjApXCJcbiAgICAgICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzIxKVwiXG4gICAgICAgICAgICBjYXNlIDE1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZXh0IGRhdGEgZWxlbWVudHMgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSAxNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGljZW5zZSBob2xkZXIgaW5mb3JtYXRpb24gKERHMilcIlxuICAgICAgICAgICAgY2FzZSAxNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgZGV0YWlscyAoREczKVwiXG4gICAgICAgICAgICBjYXNlIDE1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdCBpbWFnZSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIDE1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgMTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmFjaWFsIGRhdGEgKERHNilcIlxuICAgICAgICAgICAgY2FzZSAxNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGaW5nZXJwcmludChzKSAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIDE1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIElyaXMgRGF0YSAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIDE1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIE90aGVyIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgMTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIDE2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkb21lc3RpYyBkYXRhIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIDE2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tbWF0Y2ggYWxlcnQgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgMTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIDE2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSAxNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NFXCJcbiAgICAgICAgICAgIGNhc2UgMTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DVkNBXCJcbiAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRBY2Nlc3NcIlxuICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZFNlY3VyaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNoaXBTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIDMwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0FUUlwiXG4gICAgICAgICAgICBjYXNlIDUwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fUEtcIlxuICAgICAgICAgICAgY2FzZSA1MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0VTSUdOX1NJR05FRERBVEFcIlxuICAgICAgICAgICAgY2FzZSA2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSA2MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX01BU1RFUkxJU1RcIlxuICAgICAgICAgICAgY2FzZSA2MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RFRkVDVExJU1RcIlxuICAgICAgICAgICAgY2FzZSA2MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RFVklBVElPTkxJU1RcIlxuICAgICAgICAgICAgY2FzZSA3MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIDcwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfU0VTU0lPTlwiXG4gICAgICAgICAgICBjYXNlIDcwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTE9HREFUQVwiXG4gICAgICAgICAgICBjYXNlIDcwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQ0hJUF9QUk9QRVJUSUVTXCJcbiAgICAgICAgICAgIGNhc2UgMTAwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfVVNFUkRFRklORURcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRXJyb3JDb2RlcyA9IHtcbiAgICBSRklEX0VSUk9SX05PX0VSUk9SOiAxLFxuICAgIFJGSURfRVJST1JfQUxSRUFEWV9ET05FOiAyLFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAtMSxcbiAgICBSRklEX0VSUk9SX05PX0NISVBfREVURUNURUQ6IC0yMTQ3NDE4MTExLFxuICAgIFJGSURfRVJST1JfTk9UX0FWQUlMQUJMRTogLTIxNDc0MTgxMTAsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjogLTIxNDc0MTgxMDgsXG4gICAgUkZJRF9FUlJPUl9OT1RfSU5JVElBTElaRUQ6IC0yMTQ3NDE4MTA3LFxuICAgIFJGSURfRVJST1JfTk9UX0VOT1VHSF9NRU1PUlk6IC0yMTQ3NDE4MTA2LFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6IC0yMTQ3NDE4MTA0LFxuICAgIFJGSURfRVJST1JfVU5LTk9XTl9DT01NQU5EOiAtMjE0NzQxODEwMyxcbiAgICBSRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6IC0yMTQ3NDE4MTAyLFxuICAgIFJGSURfRVJST1JfQlVTWTogLTIxNDc0MTgxMDEsXG4gICAgUkZJRF9FUlJPUl9PTERfRklSTVdBUkU6IC0yMTQ3NDE4MTAwLFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRUQ6IC0yMTQ3MzUyNTc2LFxuICAgIFJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTogLTIxNDczNTI1NzUsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBTlRfQ09OTkVDVF9DQVJEOiAtMjE0NzM1MjU3NCxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19OT1RfQ09OTkVDVEVEOiAtMjE0NzM1MjU3MyxcbiAgICBSRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDogLTIxNDczNTI1NzIsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfQlVTWTogLTIxNDczNTI1NzEsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRF9TQ0FSRDogLTIxNDczNTI1NzAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IC0yMTQ3MzUyNTYwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IC0yMDQ2ODIwMzUyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogLTIwNDY4MjAzNTEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IC0yMDQ2ODIwMDk2LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAtMjA0NjgyMDA5NSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgyMDA5NCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFX0RBVEE6IC0yMDQ2ODIwMDkzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzhFX01JU1NJTkc6IC0yMDQ2ODE5ODQwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X01JU1NJTkc6IC0yMDQ2ODE5ODM5LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzk5X01JU1NJTkc6IC0yMDQ2ODE5ODM4LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX01BQ19JTkNPUlJFQ1Q6IC0yMDQ2ODE5ODM3LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzg3X0lOQ09SUkVDVDogLTIwNDY4MTk4MzYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAtMjA0NjgxOTU4NCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogLTIwNDY4MTk1ODMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1ODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogLTIwNDY4MTk1ODEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogLTIwNDY4MTk1ODAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc5LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfQVRfRkFJTFVSRTogLTIwNDY4MTk1NzgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfR0VUX0NIQUxMRU5HRV9GQUlMVVJFOiAtMjA0NjgxOTU3NyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9FWFRfQVVUSF9GQUlMVVJFOiAtMjA0NjgxOTU3NixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRU5FUkFMX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1NzUsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9OT1RfRk9VTkQ6IC0yMTQ3NDU2MzgyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMTogLTIxNDc0NTg0MzAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YyOiAtMjE0NzQ1NjI1NixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTkNPUlJFQ1RfUEFSQU1TOiAtMjE0NzQ1NjM4NCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogLTIxNDc0NTYzNzYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQ6IC0yMTQ3NDU4MTExLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEOiAtMjE0NzQ1ODExMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IC0yMTQ3NDU4NDI5LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEMjogLTIxNDc0NTY2MzcsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEMjogLTIxNDc0NTY2MzYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQyOiAtMjE0NzQ1NjYzNSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfRkFJTEVEOiAtMjE0NjQwOTUzNixcbiAgICBSRklEX0VSUk9SX05PVF9QRVJGT1JNRUQ6IC0yMDk3MTUyMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JU19DTE9TRUQ6IC0yMDk3MTUxOTk5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046IC0yMDk3MTUxOTk4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX1VOS05PV046IC0yMDk3MTUxOTg0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9UWVBFX0JBRF9DRVJUSUZJQ0FURTogLTIwOTcxNTE5ODMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5ODIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOS05PV046IC0yMDk3MTUxOTgxLFxuICAgIFJGSURfRVJST1JfU2Vzc2lvbl9Qcm9jZWR1cmVfVHlwZV9VbnN1cHBvcnRlZDogLTIwOTcxNTE5ODAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6IC0yMDk3MTUxOTc5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NzgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5TVVBQT1JURURfU01fVFlQRTogLTIwOTcxNTE5NzcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6IC0yMDk3MTUxOTc2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1JFU1RSSUNURUQ6IC0yMDk3MTUxOTc1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX0lOQ09SUkVDVF9EQVRBOiAtMjA5NzE1MTk3NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9OT1RfU0VUOiAtMjA5NzE1MTk3MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFdEX01BTkFHRU1FTlRfTk9UX0FVVEhPUklaRUQ6IC0yMDk3MTUxOTcyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9VTktOT1dOX1RZUEU6IC0yMDk3MTUxOTY4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTogLTIwOTcxNTE5NjcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1BBQ0U6IC0yMDk3MTUxOTY2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQV9LRVlTOiAtMjA5NzE1MTk2NSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6IC0yMDk3MTUxOTY0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQTogLTIwOTcxNTE5NjMsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0lOQ09SUkVDVF9PUFRJT05fQ0E6IC0yMDk3MTUxOTYyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9DQV9GQUlMRUQ6IC0yMDk3MTUxOTYxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9UQV9GQUlMRUQ6IC0yMDk3MTUxOTYwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9BQV9GQUlMRUQ6IC0yMDk3MTUxOTU5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SSV9GQUlMRUQ6IC0yMDk3MTUxOTU4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9TSUdOQVRVUkVfQ0hFQ0tfRkFJTEVEOiAtMjA5NzE1MTk1MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUEFfSEFTSF9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfRVhQSVJZOiAtMjA5NzE1MTkzNixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0JJUlRIOiAtMjA5NzE1MTkzNSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9DT01NVU5JVFlfSUQ6IC0yMDk3MTUxOTM0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUkVRVUlSRVNfQVBQX1NFTEVDVElPTjogLTIwOTcxNTE5MjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1NFVDogLTIwOTcxNTE5MTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1ZFUklGSUVEOiAtMjA5NzE1MTkxOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTA0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX05PVF9FTk9VR0hfREFUQTogLTIwOTcwODY0NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MDIwOTI4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTogLTIwOTY5NTUzOTIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njg4OTg1NixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9XUk9OR19UQUc6IC0yMDk2ODI0MzIwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6IC0yMDk2NzU4Nzg0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfUkVBRF9EQVRBOiAtMjA5NjY5MzI0OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOiAtMjA5NjYyNzcxMixcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTk9fRVJST1I6IC0yMDgwMzc0Nzg0LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9USU1FX09VVDogLTIwODAzMDkyNDgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTjogLTIwODAyNDM3MTIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NSQzogLTIwODAxNzgxNzYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfSU5URUdSSVRZOiAtMjA4MDExMjY0MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9MRU5HVEg6IC0yMDgwMDQ3MTA0LFxuICAgIFJGSURfRVJST1JfTGF5ZXIzNF9SRlU6IC0yMDc5OTgxNTY4LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT05fVE9PX01BTlk6IC0yMDc5OTE2MDMyLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTF9COiAtMjA3OTg1MDQ5NixcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9DT05URU5UUzogLTIwNzk3ODQ5NjAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MOiAtMjA3OTcxOTQyNCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfR0xPQkFMX1RJTUVfT1VUOiAtMjA3OTY1Mzg4OCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTUlGQVJFX0FVVEg6IC0yMDc5NTg4MzUyLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fRVJST1I6IC0yMDc5NTIyODE2LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQ09MTElTSU9OOiAtMjA3OTQ1NzI4MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0FDS05PV0xFREdFOiAtMjA3OTM5MTc0NCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODQzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTg0Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgZGVhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODExMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBibG9ja2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTgxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0Qgc3VzcGVuZGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgYmxvY2tlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgZGVhY3RpdmF0ZWQgMlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2NjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIHN1c3BlbmRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJbmNvcnJlY3QgcGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBGaWxlIHNlbGVjdGlvbiBmYWlsdXJlIC8gZmlsZSBub3QgZm91bmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE5vIHJlZmVyZW5jZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBSZWFkaW5nIGJleW9uZCBFT0YgLyBVbmV4cGVjdGVkIEVPRlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vIGNoaXAgaXMgZGV0ZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQxODExMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgcGFyYW1ldGVyIGluIEV4ZWN1dGVDb21tYW5kKCkgY2FsbCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IERldmljZSBpcyB1bmluaXRpYWxpemVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogT3V0IG9mIG1lbW9yeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBjb21tYW5kXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJTyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJGSUQgaXMgYnVzeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRoZSBmaXJtd2FyZSBuZWVkcyB0byBiZSB1cGRhdGVkIHRvIGEgbmV3ZXIgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFRoZSByZWFkZXIgaXMgdW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgY2FyZCBjYW5ub3QgYmUgY29ubmVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogVGhlIGNhcmQgaXMgbm90IGNvbm5lY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IE9wZXJhdGlvbiBpcyBjYW5jZWxsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgY2FyZCBpcyBidXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkIFNtYXJ0IENhcmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBFeHRMZSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NjQwOTUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MjAwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBOb3QgcGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU2Vzc2lvbiBpcyBjbG9zZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbnN1cHBvcnRlZCB0ZXJtaW5hbCBvcGVyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCB0eXBlIHVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCB0eXBlIGJhZCBjZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgbm90IHNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVua25vd24gcHJvY2VkdXJlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbnN1cHBvcnRlZCBwcm9jZWR1cmUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSB0eXBlIG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IHVua25vd24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgdW5zdXBwb3J0ZWQgU00gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgaW5jb3JyZWN0IFNNIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IHJlc3RyaWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSBub3Qgc2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUFdEIG1hbmFnZW1lbnQgbm90IGF1dGhvcml6ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgY29udHJvbCB1bmtub3duIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgY29udHJvbCB1bmtub3duIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQQUNFIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQ0Ega2V5cyByZXF1aXJlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRBIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQ0EgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3Qgb3B0aW9uIENBXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQ0EgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVEEgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQUEgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUkkgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU08gc2lnbmF0dXJlIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEhhc2ggY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBhdXggZGF0YSAtIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBhdXggZGF0YSAtIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGF1eCBkYXRhIC0gY29tbXVuaXR5IElEXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gcmVxdWlyZXMgYXBwIHNlbGVjdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFBJTiBub3Qgc2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUElOIG5vdCB2ZXJpZmllZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcwODY0NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBJbnN1ZmZpY2llbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MDIwOTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5Njk1NTM5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IFVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2ODg5ODU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ29udGFpbnMgdW5leHBlY3RlZCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY4MjQzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBXcm9uZyB0YWdcIlxuICAgICAgICAgICAgY2FzZSAtMjA5Njc1ODc4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IENhbm5vdCB1c2UgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NjkzMjQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ2Fubm90IHJlYWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NjI3NzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQWNjZXNzIGRlbmllZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDgwMzc0Nzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gTm8gZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjA4MDMwOTI0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFRpbWVvdXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA4MDI0MzcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIENvbGxpc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDgwMTc4MTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gQ1JDXCJcbiAgICAgICAgICAgIGNhc2UgLTIwODAxMTI2NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBEYXRhIGludGVncml0eVwiXG4gICAgICAgICAgICBjYXNlIC0yMDgwMDQ3MTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gRGF0YSBsZW5ndGhcIlxuICAgICAgICAgICAgY2FzZSAtMjA3OTk4MTU2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFJGVVwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5OTE2MDMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gVG9vIG1hbnkgY29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk4NTA0OTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBQcm90b2NvbCBCXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk3ODQ5NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBEYXRhIGNvbnRlbnRzXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk3MTk0MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBQcm90b2NvbFwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5NjUzODg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gR2xvYmEgdGltZW91dFwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5NTg4MzUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gTUlGQVJFIGF1dGhcIlxuICAgICAgICAgICAgY2FzZSAtMjA3OTUyMjgxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFNBTSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5NDU3MjgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gU0FNIGNvbGxpc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5MzkxNzQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gU0FNIGFja25vd2xlZGdlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTZWN1cmUgTWVzc2FnaW5nIHdhcyBub3QgYWN0aXZhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAzNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0FfMDMgXFxcIkFwcGxpY2F0aW9uIHNlbGVjdGlvbiBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMDk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9CXzAxIFxcXCJNdXR1YWwgYXV0aGVudGljYXRpb24gTUFDIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDIgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBlbmNyeXB0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDMgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMDkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTg0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIE1BQyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBjcnlwdG9ncmFtIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIHNlY3VyZWQgc3RhdHVzIGJ5dGVzIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGluY29ycmVjdCBNQUNcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGluY29ycmVjdCBjcnlwdG9ncmFtXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBOb3QgVExWIHJlc3BvbnNlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFdyb25nIGRhdGEgbGVuZ3RoIChBUERVX0lOU19HRVRfQ0hBTExFTkdFKVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogQVBEVV9JTlNfSU5URVJOQUxfQVVUSEVOVElDQVRFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgS0FUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgRFNUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBTTyBDRVJUSUZJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEFUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdFVCBDSEFMTEVOR0UgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogQVBEVV9JTlNfRVhURVJOQUxfQVVUSEVOVElDQVRFIChleHRlcm5hbCBhdXRoZW50aWNhdGlvbikgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogR2VuZXJhbCBBdXRoZW50aWNpdHkgRmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTm8gZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRoZSByZXF1ZXN0ZWQgb3BlcmF0aW9uIGlzIGFscmVhZHkgcGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX05vdGlmaWNhdGlvbkNvZGVzID0ge1xuICAgIFJGSURfTk9USUZJQ0FUSU9OX0VSUk9SOiA2NTUzNixcbiAgICBSRklEX05PVElGSUNBVElPTl9ET0NVTUVOVF9SRUFEWTogNjU1MzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDQ6IDY1NTM5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JFQURfUFJPVE9DT0wzOiA2NTU0NixcbiAgICBSRklEX05PVElGSUNBVElPTl9QUk9HUkVTUzogNjU1NDcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fVEFfU1RFUDogNjU1NTAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fUkVRVUlSRUQ6IDY1NTUxLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0lTT19FUlJPUjogNjk2MzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfUkVRVUVTVDogNzc4MjQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU01fRVNUQUJMSVNIRUQ6IDgxOTM1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0RJU0NPTk5FQ1RFRDogMTMxMDcyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0xJU1RfQ0hBTkdFRDogMTMxMDczLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfUkVDRUlWRUQ6IDEzMTA3NCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfVElNRTogMTMxMDc1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfREFUQV9SRUNFSVZFRDogMTMxMDc2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQllURVNfU0VOVDogMTMxMDc3LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19TUEVFRDogMTMxMDc4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUFJPQ0VTU19USU1FOiAxMzEwNzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0lORzogMTMxMDgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRVhUX0xFTkdUSF9TVVBQT1JUOiAxMzEwODgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfQ0VSVElGSUNBVEVfQ0hBSU46IDEzMTA4OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTl9JVEVNOiAxMzEwOTAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU0NFTkFSSU86IDEzMTEwNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURJTkdfREFUQUdST1VQOiAxOTY2MDgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX05PVF9GT1VORDogMjYyMTQ0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRU5EX09GX0ZJTEU6IDMyNzY4MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfQUNDRVNTX0RFTklFRDogMzkzMjE2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfQVBQTElDQVRJT05fU0VMRUNURUQ6IDQ1ODc1MixcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfU1RBUlQ6IDUyNDI4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfRklOSVNIOiA1ODk4MjQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfU0VDVVJJVFlfT0JKRUNUX0NIRUNLOiA2NTUzNjAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfRklMRV9DSEVDSzogNzIwODk2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVVBEQVRJTkdfREFUQUdST1VQOiA3ODY0MzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQVVYSUxJQVJZX0RBVEFfVkFMSURBVElPTjogODUxOTY4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JJX1NFQ1RPUl9JRDogOTE3NTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0JJT01FVFJJQ1NfRU1QVFlfUExBQ0VIT0xERVI6IDk4MzA0MCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Bhc3N3b3JkX1R5cGUgPSB7XG4gICAgUFBUX1VOS05PV046IDAsXG4gICAgUFBUX01SWjogMSxcbiAgICBQUFRfQ0FOOiAyLFxuICAgIFBQVF9QSU46IDMsXG4gICAgUFBUX1BVSzogNCxcbiAgICBQUFRfUElOX0VTSUdOOiA1LFxuICAgIFBQVF9TQUk6IDYsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9TREtfUHJvZmlsZXJUeXBlID0ge1xuICAgIFNQVF9ET0NfOTMwM19FRElUSU9OXzIwMDY6IDB4MDAwMDAwMDEsXG4gICAgU1BUX0RPQ185MzAzX0xEU19QS0lfTUFJTlRFTkFOQ0U6IDB4MDAwMDAwMDIsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9UZXJtaW5hbFR5cGUgPSB7XG4gICAgVEVUX1VOREVGSU5FRDogMCxcbiAgICBURVRfSU5TUEVDVElPTl9TWVNURU06IDEsXG4gICAgVEVUX0FVVEhFTlRJQ0FUSU9OX1RFUk1JTkFMOiAyLFxuICAgIFRFVF9TSUdOQVRVUkVfVEVSTUlOQUw6IDMsXG4gICAgVEVUX1VOQVVUSEVOVElDQVRFRF9URVJNSU5BTDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0F1dGhlbnRpY2l0eSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFVWX0xVTUlORVNDRU5DRTogMSxcbiAgICBJUl9COTAwOiAyLFxuICAgIElNQUdFX1BBVFRFUk46IDQsXG4gICAgQVhJQUxfUFJPVEVDVElPTjogOCxcbiAgICBVVl9GSUJFUlM6IDE2LFxuICAgIElSX1ZJU0lCSUxJVFk6IDMyLFxuICAgIE9DUl9TRUNVUklUWV9URVhUOiA2NCxcbiAgICBJUEk6IDEyOCxcbiAgICBQSE9UT19FTUJFRF9UWVBFOiA1MTIsXG4gICAgSE9MT0dSQU1TOiA0MDk2LFxuICAgIFBIT1RPX0FSRUE6IDgxOTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTjogMzI3NjgsXG4gICAgQkFSQ09ERV9GT1JNQVRfQ0hFQ0s6IDY1NTM2LFxuICAgIEtJTkVHUkFNOiAxMzEwNzIsXG4gICAgSE9MT0dSQU1TX0RFVEVDVElPTjogNTI0Mjg4LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQgPSB7XG4gICAgUkNGX0RJU0FCTEVEOiAwLFxuICAgIFJDRl9WRVJJRklFRDogMSxcbiAgICBSQ0ZfTk9UX1ZFUklGSUVEOiAyLFxuICAgIFJDRl9DT01QQVJFX1RSVUU6IDMsXG4gICAgUkNGX0NPTVBBUkVfRkFMU0U6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9MaWdodHMgPSB7XG4gICAgTk9ORTogMCxcbiAgICBSUFJNX0xJR0hUX1VWOiAxMjgsXG4gICAgUlBSTV9MSUdIVF9XSElURV9GVUxMOiA2LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MSUdIVF9VVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVVlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MSUdIVF9XSElURV9GVUxMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2libGUgbGlnaHRcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fUmVzdWx0VHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VNUFRZOiAwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX0lNQUdFOiAxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklMRV9JTUFHRTogMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9PQ1JfRVhURU5ERUQ6IDMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFUzogNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0dSQVBISUNTOiA2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1RFU1RfUVVBTElUWTogNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1RZUEVTX0NBTkRJREFURVM6IDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DSE9TRU5fRE9DVU1FTlRfVFlQRV9DQU5ESURBVEU6IDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVFNfSU5GT19MSVNUOiAxMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX09DUl9MRVhJQ0FMX0FOQUxZWkU6IDE1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX1VOQ1JPUFBFRF9JTUFHRTogMTYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9WSVNVQUxfT0NSX0VYVEVOREVEOiAxNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19URVhUX0RBVEE6IDE4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX0lNQUdFX0RBVEE6IDE5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQVVUSEVOVElDSVRZOiAyMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VPU19JTUFHRTogMjMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVlFUl9JTUFHRTogMjQsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEU6IDI1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFX1RFWFRfREFUQTogMjYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUVMRF9GSUxFX0lNQUdFOiAyNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RBVEFCQVNFX0NIRUNLOiAyOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTkdFUlBSSU5UX1RFTVBMQVRFX0lTTzogMjksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlBVVF9JTUFHRV9RVUFMSVRZOiAzMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lNQUdFUzogMzcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9IT0xPX1BBUkFNUzogNDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1NUQVRVUzogMzMsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CTEFOSzogMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRklMTDogMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE86IDIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01SWjogMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFMU0VfTFVNSU5FU0NFTkNFOiA0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1NJTVBMRTogNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfU1RBVElDOiA2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9NVUxUSV9TVEFUSUM6IDcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX0RJTkFNSUM6IDgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX0lOVEVSUlVQVEVEOiA5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9TSElGVEVEOiAxMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9TQU1FX0NPTE9SUzogMTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fSVJfSU5WSVNJQkxFOiAxMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0laRV9DSEVDSzogMTMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfR0hPU1Q6IDE0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1JGSUQ6IDE1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1ZJU1VBTDogMTYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JBUkNPREU6IDE3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDE4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0NBTUVSQTogMTksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fUkZJRF9WU19DQU1FUkE6IDIwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9HSE9TVF9QSE9UTzogMjEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NMRUFSX0dIT1NUX1BIT1RPOiAyMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSU5WSVNJQkxFX09CSkVDVDogMjMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xPV19DT05UUkFTVF9PQkpFQ1Q6IDI0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT0xPUjogMjUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NIQVBFOiAyNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09STkVSUzogMjcsXG4gICAgRE9DVU1FTlRfQ0FOQ0VMTElOR19ERVRFQ1RPUjogMjgsXG59XG5cbmV4cG9ydCBjb25zdCBlU2lnbk1hbmFnZW1lbnRBY3Rpb24gPSB7XG4gICAgc21hVW5kZWZpbmVkOiAwLFxuICAgIHNtYUNyZWF0ZVBJTjogMSxcbiAgICBzbWFDaGFuZ2VQSU46IDIsXG4gICAgc21hVW5ibG9ja1BJTjogMyxcbiAgICBzbWFUZXJtaW5hdGVQSU46IDQsXG4gICAgc21hR2VuZXJhdGVLZXlzOiA1LFxuICAgIHNtYVRlcm1pbmF0ZUtleXM6IDYsXG4gICAgc21hU2lnbkRhdGE6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBlVmlzdWFsRmllbGRUeXBlID0ge1xuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6IDAsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFOiAxLFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUjogMixcbiAgICBGVF9EQVRFX09GX0VYUElSWTogMyxcbiAgICBGVF9EQVRFX09GX0lTU1VFOiA0LFxuICAgIEZUX0RBVEVfT0ZfQklSVEg6IDUsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEg6IDYsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSOiA3LFxuICAgIEZUX1NVUk5BTUU6IDgsXG4gICAgRlRfR0lWRU5fTkFNRVM6IDksXG4gICAgRlRfTU9USEVSU19OQU1FOiAxMCxcbiAgICBGVF9OQVRJT05BTElUWTogMTEsXG4gICAgRlRfU0VYOiAxMixcbiAgICBGVF9IRUlHSFQ6IDEzLFxuICAgIEZUX1dFSUdIVDogMTQsXG4gICAgRlRfRVlFU19DT0xPUjogMTUsXG4gICAgRlRfSEFJUl9DT0xPUjogMTYsXG4gICAgRlRfQUREUkVTUzogMTcsXG4gICAgRlRfRE9OT1I6IDE4LFxuICAgIEZUX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDE5LFxuICAgIEZUX0RMX0NMQVNTOiAyMCxcbiAgICBGVF9ETF9FTkRPUlNFRDogMjEsXG4gICAgRlRfRExfUkVTVFJJQ1RJT05fQ09ERTogMjIsXG4gICAgRlRfRExfVU5ERVJfMjFfREFURTogMjMsXG4gICAgRlRfQVVUSE9SSVRZOiAyNCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMjUsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERTogMjYsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSOiAyNyxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUjogMjgsXG4gICAgRlRfVklTQV9JRDogMjksXG4gICAgRlRfVklTQV9DTEFTUzogMzAsXG4gICAgRlRfVklTQV9TVUJfQ0xBU1M6IDMxLFxuICAgIEZUX01SWl9TVFJJTkdfMTogMzIsXG4gICAgRlRfTVJaX1NUUklOR18yOiAzMyxcbiAgICBGVF9NUlpfU1RSSU5HXzM6IDM0LFxuICAgIEZUX01SWl9UWVBFOiAzNSxcbiAgICBGVF9PUFRJT05BTF9EQVRBOiAzNixcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19OQU1FOiAzNyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX05BTUU6IDM4LFxuICAgIEZUX1BMQUNFX09GX0lTU1VFOiAzOSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tTVU06IDQwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tTVU06IDQxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLU1VNOiA0MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tTVU06IDQzLFxuICAgIEZUX0ZJTkFMX0NIRUNLU1VNOiA0NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tTVU06IDQ1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOiA0NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLU1VNOiA0NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS1NVTTogNDgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS1NVTTogNDksXG4gICAgRlRfT1RIRVI6IDUwLFxuICAgIEZUX01SWl9TVFJJTkdTOiA1MSxcbiAgICBGVF9OQU1FX1NVRkZJWDogNTIsXG4gICAgRlRfTkFNRV9QUkVGSVg6IDUzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06IDU0LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6IDU1LFxuICAgIEZUX0RPQ1VNRU5UX1NFUklFUzogNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUjogNTcsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01PREVMOiA1OCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfQ09MT1I6IDU5LFxuICAgIEZUX1JFR19DRVJUX0JPRFlfTlVNQkVSOiA2MCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfVFlQRTogNjEsXG4gICAgRlRfUkVHX0NFUlRfTUFYX1dFSUdIVDogNjIsXG4gICAgRlRfUkVHX0NFUlRfV0VJR0hUOiA2MyxcbiAgICBGVF9BRERSRVNTX0FSRUE6IDY0LFxuICAgIEZUX0FERFJFU1NfU1RBVEU6IDY1LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkc6IDY2LFxuICAgIEZUX0FERFJFU1NfSE9VU0U6IDY3LFxuICAgIEZUX0FERFJFU1NfRkxBVDogNjgsXG4gICAgRlRfUExBQ0VfT0ZfUkVHSVNUUkFUSU9OOiA2OSxcbiAgICBGVF9EQVRFX09GX1JFR0lTVFJBVElPTjogNzAsXG4gICAgRlRfUkVTSURFTlRfRlJPTTogNzEsXG4gICAgRlRfUkVTSURFTlRfVU5USUw6IDcyLFxuICAgIEZUX0FVVEhPUklUWV9DT0RFOiA3MyxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9BUkVBOiA3NCxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9TVEFURV9DT0RFOiA3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVDogNzYsXG4gICAgRlRfQUREUkVTU19DSVRZOiA3NyxcbiAgICBGVF9BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiA3OCxcbiAgICBGVF9BRERSRVNTX1BPU1RBTF9DT0RFOiA3OSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tfRElHSVQ6IDgxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLX0RJR0lUOiA4MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgzLFxuICAgIEZUX0ZJTkFMX0NIRUNLX0RJR0lUOiA4NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOiA4NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLX0RJR0lUOiA4NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS19ESUdJVDogODgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS19ESUdJVDogODksXG4gICAgRlRfUEVSTUlUX0RMX0NMQVNTOiA5MCxcbiAgICBGVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6IDkxLFxuICAgIEZUX1BFUk1JVF9JREVOVElGSUVSOiA5MixcbiAgICBGVF9QRVJNSVRfREFURV9PRl9JU1NVRTogOTMsXG4gICAgRlRfUEVSTUlUX1JFU1RSSUNUSU9OX0NPREU6IDk0LFxuICAgIEZUX1BFUk1JVF9FTkRPUlNFRDogOTUsXG4gICAgRlRfSVNTVUVfVElNRVNUQU1QOiA5NixcbiAgICBGVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzogOTcsXG4gICAgRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6IDk4LFxuICAgIEZUX05PTl9SRVNJREVOVF9JTkRJQ0FUT1I6IDk5LFxuICAgIEZUX1ZJU0FfVFlQRTogMTAwLFxuICAgIEZUX1ZJU0FfVkFMSURfRlJPTTogMTAxLFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUw6IDEwMixcbiAgICBGVF9EVVJBVElPTl9PRl9TVEFZOiAxMDMsXG4gICAgRlRfTlVNQkVSX09GX0VOVFJJRVM6IDEwNCxcbiAgICBGVF9EQVk6IDEwNSxcbiAgICBGVF9NT05USDogMTA2LFxuICAgIEZUX1lFQVI6IDEwNyxcbiAgICBGVF9VTklRVUVfQ1VTVE9NRVJfSURFTlRJRklFUjogMTA4LFxuICAgIEZUX0NPTU1FUkNJQUxfVkVISUNMRV9DT0RFUzogMTA5LFxuICAgIEZUX0FLQV9EQVRFX09GX0JJUlRIOiAxMTAsXG4gICAgRlRfQUtBX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDExMSxcbiAgICBGVF9BS0FfU1VSTkFNRTogMTEyLFxuICAgIEZUX0FLQV9HSVZFTl9OQU1FUzogMTEzLFxuICAgIEZUX0FLQV9OQU1FX1NVRkZJWDogMTE0LFxuICAgIEZUX0FLQV9OQU1FX1BSRUZJWDogMTE1LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6IDExNixcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTogMTE3LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogMTE4LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTogMTE5LFxuICAgIEZUX0FVRElUX0lORk9STUFUSU9OOiAxMjAsXG4gICAgRlRfSU5WRU5UT1JZX05VTUJFUjogMTIxLFxuICAgIEZUX1JBQ0VfRVRITklDSVRZOiAxMjIsXG4gICAgRlRfSlVSSVNESUNUSU9OX1ZFSElDTEVfQ0xBU1M6IDEyMyxcbiAgICBGVF9KVVJJU0RJQ1RJT05fRU5ET1JTRU1FTlRfQ09ERTogMTI0LFxuICAgIEZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOiAxMjUsXG4gICAgRlRfRkFNSUxZX05BTUU6IDEyNixcbiAgICBGVF9HSVZFTl9OQU1FU19SVVM6IDEyNyxcbiAgICBGVF9WSVNBX0lEX1JVUzogMTI4LFxuICAgIEZUX0ZBVEhFUlNfTkFNRTogMTI5LFxuICAgIEZUX0ZBVEhFUlNfTkFNRV9SVVM6IDEzMCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19SVVM6IDEzMSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9SVVM6IDEzMixcbiAgICBGVF9BVVRIT1JJVFlfUlVTOiAxMzMsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFX05VTUVSSUM6IDEzNCxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6IDEzNSxcbiAgICBGVF9FTkdJTkVfUE9XRVI6IDEzNixcbiAgICBGVF9FTkdJTkVfVk9MVU1FOiAxMzcsXG4gICAgRlRfQ0hBU1NJU19OVU1CRVI6IDEzOCxcbiAgICBGVF9FTkdJTkVfTlVNQkVSOiAxMzksXG4gICAgRlRfRU5HSU5FX01PREVMOiAxNDAsXG4gICAgRlRfVkVISUNMRV9DQVRFR09SWTogMTQxLFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSOiAxNDIsXG4gICAgRlRfQ09OVFJPTF9OTzogMTQzLFxuICAgIEZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOiAxNDQsXG4gICAgRlRfU0VDT05EX1NVUk5BTUU6IDE0NSxcbiAgICBGVF9NSURETEVfTkFNRTogMTQ2LFxuICAgIEZUX1JFR19DRVJUX1ZJTjogMTQ3LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS19ESUdJVDogMTQ4LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS1NVTTogMTQ5LFxuICAgIEZUX0xJTkVfMV9DSEVDS19ESUdJVDogMTUwLFxuICAgIEZUX0xJTkVfMl9DSEVDS19ESUdJVDogMTUxLFxuICAgIEZUX0xJTkVfM19DSEVDS19ESUdJVDogMTUyLFxuICAgIEZUX0xJTkVfMV9DSEVDS1NVTTogMTUzLFxuICAgIEZUX0xJTkVfMl9DSEVDS1NVTTogMTU0LFxuICAgIEZUX0xJTkVfM19DSEVDS1NVTTogMTU1LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLU1VNOiAxNTcsXG4gICAgRlRfUkVHX0NFUlRfVkVISUNMRV9JVFNfQ09ERTogMTU4LFxuICAgIEZUX0NBUkRfQUNDRVNTX05VTUJFUjogMTU5LFxuICAgIEZUX01BUklUQUxfU1RBVFVTOiAxNjAsXG4gICAgRlRfQ09NUEFOWV9OQU1FOiAxNjEsXG4gICAgRlRfU1BFQ0lBTF9OT1RFUzogMTYyLFxuICAgIEZUX1NVUk5BTUVfT0ZfU1BPU0U6IDE2MyxcbiAgICBGVF9UUkFDS0lOR19OVU1CRVI6IDE2NCxcbiAgICBGVF9CT09LTEVUX05VTUJFUjogMTY1LFxuICAgIEZUX0NISUxEUkVOOiAxNjYsXG4gICAgRlRfQ09QWTogMTY3LFxuICAgIEZUX1NFUklBTF9OVU1CRVI6IDE2OCxcbiAgICBGVF9ET1NTSUVSX05VTUJFUjogMTY5LFxuICAgIEZUX0FLQV9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMTcwLFxuICAgIEZUX1RFUlJJVE9SSUFMX1ZBTElESVRZOiAxNzEsXG4gICAgRlRfTVJaX1NUUklOR1NfV0lUSF9DT1JSRUNUX0NIRUNLX1NVTVM6IDE3MixcbiAgICBGVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTogMTczLFxuICAgIEZUX0RMX1VOREVSXzE4X0RBVEU6IDE3NCxcbiAgICBGVF9ETF9SRUNPUkRfQ1JFQVRFRDogMTc1LFxuICAgIEZUX0RMX0RVUExJQ0FURV9EQVRFOiAxNzYsXG4gICAgRlRfRExfSVNTX1RZUEU6IDE3NyxcbiAgICBGVF9NSUxJVEFSWV9CT09LX05VTUJFUjogMTc4LFxuICAgIEZUX0RFU1RJTkFUSU9OOiAxNzksXG4gICAgRlRfQkxPT0RfR1JPVVA6IDE4MCxcbiAgICBGVF9TRVFVRU5DRV9OVU1CRVI6IDE4MSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX1RZUEU6IDE4MixcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTUFSSzogMTgzLFxuICAgIEZUX1RSQU5TQUNUSU9OX05VTUJFUjogMTg0LFxuICAgIEZUX0FHRTogMTg1LFxuICAgIEZUX0ZPTElPX05VTUJFUjogMTg2LFxuICAgIEZUX1ZPVEVSX0tFWTogMTg3LFxuICAgIEZUX0FERFJFU1NfTVVOSUNJUEFMSVRZOiAxODgsXG4gICAgRlRfQUREUkVTU19MT0NBVElPTjogMTg5LFxuICAgIEZUX1NFQ1RJT046IDE5MCxcbiAgICBGVF9PQ1JfTlVNQkVSOiAxOTEsXG4gICAgRlRfRkVERVJBTF9FTEVDVElPTlM6IDE5MixcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSOiAxOTMsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS1NVTTogMTk0LFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tfRElHSVQ6IDE5NSxcbiAgICBGVF9WSVNBX05VTUJFUjogMTk2LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLU1VNOiAxOTcsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE5OCxcbiAgICBGVF9WT1RFUjogMTk5LFxuICAgIEZUX1BSRVZJT1VTX1RZUEU6IDIwMCxcbiAgICBGVF9GSUVMRF9GUk9NX01SWjogMjIwLFxuICAgIEZUX0NVUlJFTlRfREFURTogMjIxLFxuICAgIEZUX1NUQVRVU19EQVRFX09GX0VYUElSWTogMjUxLFxuICAgIEZUX0JBTktOT1RFX05VTUJFUjogMjUyLFxuICAgIEZUX0NTQ19DT0RFOiAyNTMsXG4gICAgRlRfQVJUSVNUSUNfTkFNRTogMjU0LFxuICAgIEZUX0FDQURFTUlDX1RJVExFOiAyNTUsXG4gICAgRlRfQUREUkVTU19DT1VOVFJZOiAyNTYsXG4gICAgRlRfQUREUkVTU19aSVBDT0RFOiAyNTcsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzE6IDI1OCxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMjogMjU5LFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RSRUVUOiAyNjAsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DSVRZOiAyNjEsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVEFURTogMjYyLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ09VTlRSWTogMjYzLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTogMjY0LFxuICAgIEZUX0NETF9DTEFTUzogMjY1LFxuICAgIEZUX0RMX1VOREVSXzE5X0RBVEU6IDI2NixcbiAgICBGVF9XRUlHSFRfUE9VTkRTOiAyNjcsXG4gICAgRlRfTElNSVRFRF9EVVJBVElPTl9ET0NVTUVOVF9JTkRJQ0FUT1I6IDI2OCxcbiAgICBGVF9FTkRPUlNFTUVOVF9FWFBJUkFUSU9OX0RBVEU6IDI2OSxcbiAgICBGVF9SRVZJU0lPTl9EQVRFOiAyNzAsXG4gICAgRlRfQ09NUExJQU5DRV9UWVBFOiAyNzEsXG4gICAgRlRfRkFNSUxZX05BTUVfVFJVTkNBVElPTjogMjcyLFxuICAgIEZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjogMjczLFxuICAgIEZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046IDI3NCxcbiAgICBGVF9FWEFNX0RBVEU6IDI3NSxcbiAgICBGVF9PUkdBTklaQVRJT046IDI3NixcbiAgICBGVF9ERVBBUlRNRU5UOiAyNzcsXG4gICAgRlRfUEFZX0dSQURFOiAyNzgsXG4gICAgRlRfUkFOSzogMjc5LFxuICAgIEZUX0JFTkVGSVRTX05VTUJFUjogMjgwLFxuICAgIEZUX1NQT05TT1JfU0VSVklDRTogMjgxLFxuICAgIEZUX1NQT05TT1JfU1RBVFVTOiAyODIsXG4gICAgRlRfU1BPTlNPUjogMjgzLFxuICAgIEZUX1JFTEFUSU9OU0hJUDogMjg0LFxuICAgIEZUX1VTQ0lTOiAyODUsXG4gICAgRlRfQ0FURUdPUlk6IDI4NixcbiAgICBGVF9DT05ESVRJT05TOiAyODcsXG4gICAgRlRfSURFTlRJRklFUjogMjg4LFxuICAgIEZUX0NPTkZJR1VSQVRJT046IDI4OSxcbiAgICBGVF9ESVNDUkVUSU9OQVJZX0RBVEE6IDI5MCxcbiAgICBGVF9MSU5FXzFfT1BUSU9OQUxfREFUQTogMjkxLFxuICAgIEZUX0xJTkVfMl9PUFRJT05BTF9EQVRBOiAyOTIsXG4gICAgRlRfTElORV8zX09QVElPTkFMX0RBVEE6IDI5MyxcbiAgICBGVF9FUVZfQ09ERTogMjk0LFxuICAgIEZUX0FMVF9DT0RFOiAyOTUsXG4gICAgRlRfQklOQVJZX0NPREU6IDI5NixcbiAgICBGVF9QU0VVRE9fQ09ERTogMjk3LFxuICAgIEZUX0ZFRTogMjk4LFxuICAgIEZUX1NUQU1QX05VTUJFUjogMjk5LFxuICAgIEZUX1NCSF9TRUNVUklUWU9QVElPTlM6IDMwMCxcbiAgICBGVF9TQkhfSU5URUdSSVRZT1BUSU9OUzogMzAxLFxuICAgIEZUX0RBVEVfT0ZfQ1JFQVRJT046IDMwMixcbiAgICBGVF9WQUxJRElUWV9QRVJJT0Q6IDMwMyxcbiAgICBGVF9QQVRST05fSEVBREVSX1ZFUlNJT046IDMwNCxcbiAgICBGVF9CREJfVFlQRTogMzA1LFxuICAgIEZUX0JJT01FVFJJQ19UWVBFOiAzMDYsXG4gICAgRlRfQklPTUVUUklDX1NVQlRZUEU6IDMwNyxcbiAgICBGVF9CSU9NRVRSSUNfUFJPRFVDVElEOiAzMDgsXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9PV05FUjogMzA5LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTogMzEwLFxuICAgIEZUX1BIT05FOiAzMTEsXG4gICAgRlRfUFJPRkVTU0lPTjogMzEyLFxuICAgIEZUX1RJVExFOiAzMTMsXG4gICAgRlRfUEVSU09OQUxfU1VNTUFSWTogMzE0LFxuICAgIEZUX09USEVSX1ZBTElEX0lEOiAzMTUsXG4gICAgRlRfQ1VTVE9EWV9JTkZPOiAzMTYsXG4gICAgRlRfT1RIRVJfTkFNRTogMzE3LFxuICAgIEZUX09CU0VSVkFUSU9OUzogMzE4LFxuICAgIEZUX1RBWDogMzE5LFxuICAgIEZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOiAzMjAsXG4gICAgRlRfUEVSU09OQUxJWkFUSU9OX1NOOiAzMjEsXG4gICAgRlRfT1RIRVJQRVJTT05fTkFNRTogMzIyLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0RBVEVfT0ZfUkVDT1JEOiAzMjMsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfTkFNRTogMzI0LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX1BIT05FOiAzMjUsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzogMzI2LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX0lTU1VFUjogMzI3LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1NVQkpFQ1Q6IDMyOCxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJREZST006IDMyOSxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOiAzMzAsXG4gICAgRlRfVlJDX0RBVEFPQkpFQ1RfRU5UUlk6IDMzMSxcbiAgICBGVF9UWVBFX0FQUFJPVkFMX05VTUJFUjogMzMyLFxuICAgIEZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjogMzMzLFxuICAgIEZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6IDMzNCxcbiAgICBGVF9EQVRBX0RJU0NSSU1JTkFUT1I6IDMzNSxcbiAgICBGVF9JU09fSVNTVUVSX0lEX05VTUJFUjogMzM2LFxuICAgIEZUX0dOSUJfTlVNQkVSOiAzNDAsXG4gICAgRlRfREVQVF9OVU1CRVI6IDM0MSxcbiAgICBGVF9URUxFWF9DT0RFOiAzNDIsXG4gICAgRlRfQUxMRVJHSUVTOiAzNDMsXG4gICAgRlRfU1BfQ09ERTogMzQ0LFxuICAgIEZUX0NPVVJUX0NPREU6IDM0NSxcbiAgICBGVF9DVFk6IDM0NixcbiAgICBGVF9TUE9OU09SX1NTTjogMzQ3LFxuICAgIEZUX0RPX0RfTlVNQkVSOiAzNDgsXG4gICAgRlRfTUNfTk9WSUNFX0RBVEU6IDM0OSxcbiAgICBGVF9EVUZfTlVNQkVSOiAzNTAsXG4gICAgRlRfQUdZOiAzNTEsXG4gICAgRlRfUE5SX0NPREU6IDM1MixcbiAgICBGVF9GUk9NX0FJUlBPUlRfQ09ERTogMzUzLFxuICAgIEZUX1RPX0FJUlBPUlRfQ09ERTogMzU0LFxuICAgIEZUX0ZMSUdIVF9OVU1CRVI6IDM1NSxcbiAgICBGVF9EQVRFX09GX0ZMSUdIVDogMzU2LFxuICAgIEZUX1NFQVRfTlVNQkVSOiAzNTcsXG4gICAgRlRfREFURV9PRl9JU1NVRV9CT0FSRElOR19QQVNTOiAzNTgsXG4gICAgRlRfQ0NXX1VOVElMOiAzNTksXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS1NVTTogMzYwLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM2MSxcbiAgICBGVF9ST09NX05VTUJFUjogMzYyLFxuICAgIEZUX1JFTElHSU9OOiAzNjMsXG4gICAgRlRfUkVNQUlOREVSX1RFUk06IDM2NCxcbiAgICBGVF9FTEVDVFJPTklDX1RJQ0tFVF9JTkRJQ0FUT1I6IDM2NSxcbiAgICBGVF9DT01QQVJUTUVOVF9DT0RFOiAzNjYsXG4gICAgRlRfQ0hFQ0tfSU5fU0VRVUVOQ0VfTlVNQkVSOiAzNjcsXG4gICAgRlRfQUlSTElORV9ERVNJR05BVE9SX09GX0JPQVJESU5HX1BBU1NfSVNTVUVSOiAzNjgsXG4gICAgRlRfQUlSTElORV9OVU1FUklDX0NPREU6IDM2OSxcbiAgICBGVF9USUNLRVRfTlVNQkVSOiAzNzAsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfQUlSTElORV9ERVNJR05BVE9SOiAzNzEsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfTlVNQkVSOiAzNzIsXG4gICAgRlRfRlJFRV9CQUdHQUdFX0FMTE9XQU5DRTogMzczLFxuICAgIEZUX1BERl80MTdfQ09ERUM6IDM3NCxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS1NVTTogMzc1LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNzYsXG4gICAgRlRfVkVURVJBTjogMzc3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX0ZST006IDM3OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9UTzogMzc5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX05PVEVTOiAzODAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX0ZST006IDM4MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfVE86IDM4MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfTk9URVM6IDM4MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfRlJPTTogMzg0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9UTzogMzg1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9OT1RFUzogMzg2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0ZST006IDM4NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9UTzogMzg4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX05PVEVTOiAzODksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX0ZST006IDM5MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfVE86IDM5MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfTk9URVM6IDM5MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9GUk9NOiAzOTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfVE86IDM5NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9OT1RFUzogMzk1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9GUk9NOiAzOTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX1RPOiAzOTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX05PVEVTOiAzOTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9GUk9NOiAzOTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9UTzogNDAwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfTk9URVM6IDQwMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX0ZST006IDQwMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX1RPOiA0MDMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9OT1RFUzogNDA0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfRlJPTTogNDA1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfVE86IDQwNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX05PVEVTOiA0MDcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9GUk9NOiA0MDgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9UTzogNDA5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfTk9URVM6IDQxMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX0ZST006IDQxMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX1RPOiA0MTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9OT1RFUzogNDEzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9GUk9NOiA0MTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX1RPOiA0MTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX05PVEVTOiA0MTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX0ZST006IDQxNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfVE86IDQxOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfTk9URVM6IDQxOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfRlJPTTogNDIwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9UTzogNDIxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9OT1RFUzogNDIyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fRlJPTTogNDIzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fVE86IDQyNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX05PVEVTOiA0MjUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfRlJPTTogNDI2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX1RPOiA0MjcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfTk9URVM6IDQyOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9GUk9NOiA0MjksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfVE86IDQzMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9OT1RFUzogNDMxLFxuICAgIEZUX1NVUk5BTUVfQVRfQklSVEg6IDQzMixcbiAgICBGVF9DSVZJTF9TVEFUVVM6IDQzMyxcbiAgICBGVF9OVU1CRVJfT0ZfU0VBVFM6IDQzNCxcbiAgICBGVF9OVU1CRVJfT0ZfU1RBTkRJTkdfUExBQ0VTOiA0MzUsXG4gICAgRlRfTUFYX1NQRUVEOiA0MzYsXG4gICAgRlRfRlVFTF9UWVBFOiA0MzcsXG4gICAgRlRfRUNfRU5WSVJPTk1FTlRBTF9UWVBFOiA0MzgsXG4gICAgRlRfUE9XRVJfV0VJR0hUX1JBVElPOiA0MzksXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9CUkFLRUQ6IDQ0MCxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX1VOQlJBS0VEOiA0NDEsXG4gICAgRlRfVFJBTlNNSVNTSU9OX1RZUEU6IDQ0MixcbiAgICBGVF9UUkFJTEVSX0hJVENIOiA0NDMsXG4gICAgRlRfQUNDT01QQU5JRURfQlk6IDQ0NCxcbiAgICBGVF9QT0xJQ0VfRElTVFJJQ1Q6IDQ0NSxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFOiA0NDYsXG4gICAgRlRfUEFZTE9BRF9DQVBBQ0lUWTogNDQ3LFxuICAgIEZUX05VTUJFUl9PRl9BWEVMUzogNDQ4LFxuICAgIEZUX1BFUk1JU1NJQkxFX0FYTEVfTE9BRDogNDQ5LFxuICAgIEZUX1BSRUNJTkNUOiA0NTAsXG4gICAgRlRfSU5WSVRFRF9CWTogNDUxLFxuICAgIEZUX1BVUlBPU0VfT0ZfRU5UUlk6IDQ1MixcbiAgICBGVF9TS0lOX0NPTE9SOiA0NTMsXG4gICAgRlRfQ09NUExFWElPTjogNDU0LFxuICAgIEZUX0FJUlBPUlRfRlJPTTogNDU1LFxuICAgIEZUX0FJUlBPUlRfVE86IDQ1NixcbiAgICBGVF9BSVJMSU5FX05BTUU6IDQ1NyxcbiAgICBGVF9BSVJMSU5FX05BTUVfRlJFUVVFTlRfRkxZRVI6IDQ1OCxcbiAgICBGVF9MSUNFTlNFX05VTUJFUjogNDU5LFxuICAgIEZUX0lOX1RBTktTOiA0NjAsXG4gICAgRlRfRVhFUFRfSU5fVEFOS1M6IDQ2MSxcbiAgICBGVF9GQVNUX1RSQUNLOiA0NjIsXG4gICAgRlRfT1dORVI6IDQ2MyxcbiAgICBGVF9NUlpfU1RSSU5HU19JQ0FPX1JGSUQ6IDQ2NCxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRTogNDY1LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLU1VNOiA0NjYsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6IDQ2NyxcbiAgICBGVF9DRU5UVVJZX0RBVEVfT0ZfQklSVEg6IDQ2OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfRlJPTTogNDY5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19UTzogNDcwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19OT1RFUzogNDcxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9GUk9NOiA0NzIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX1RPOiA0NzMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX05PVEVTOiA0NzQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006IDQ3NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfVE86IDQ3NixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6IDQ3NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfRlJPTTogNDc4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9UTzogNDc5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9OT1RFUzogNDgwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfRlJPTTogNDgxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfVE86IDQ4MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOiA0ODMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTogNDg0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX1RPOiA0ODUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfTk9URVM6IDQ4NixcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9GUk9NOiA0ODcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfVE86IDQ4OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9OT1RFUzogNDg5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19GUk9NOiA0OTAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX1RPOiA0OTEsXG4gICAgRlRfRExDX0xBU1NDT0RFX0xDX05PVEVTOiA0OTIsXG4gICAgRlRfQkFOS0NBUkROVU1CRVI6IDQ5MyxcbiAgICBGVF9CQU5LQ0FSRFZBTElEVEhSVTogNDk0LFxuICAgIEZUX1RBWF9OVU1CRVI6IDQ5NSxcbiAgICBGVF9IRUFMVEhfTlVNQkVSOiA0OTYsXG4gICAgRlRfR1JBTkRGQVRIRVJOQU1FOiA0OTcsXG4gICAgRlRfU0VMRUNURUVfSU5ESUNBVE9SOiA0OTgsXG4gICAgRlRfTU9USEVSX1NVUk5BTUU6IDQ5OSxcbiAgICBGVF9NT1RIRVJfR0lWRU5OQU1FOiA1MDAsXG4gICAgRlRfRkFUSEVSX1NVUk5BTUU6IDUwMSxcbiAgICBGVF9GQVRIRVJfR0lWRU5OQU1FOiA1MDIsXG4gICAgRlRfTU9USEVSX0RBVEVPRkJJUlRIOiA1MDMsXG4gICAgRlRfRkFUSEVSX0RBVEVPRkJJUlRIOiA1MDQsXG4gICAgRlRfTU9USEVSX1BFUlNPTkFMTlVNQkVSOiA1MDUsXG4gICAgRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOiA1MDYsXG4gICAgRlRfTU9USEVSX1BMQUNFT0ZCSVJUSDogNTA3LFxuICAgIEZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6IDUwOCxcbiAgICBGVF9NT1RIRVJfQ09VTlRSWU9GQklSVEg6IDUwOSxcbiAgICBGVF9GQVRIRVJfQ09VTlRSWU9GQklSVEg6IDUxMCxcbiAgICBGVF9EQVRFX0ZJUlNUX1JFTkVXQUw6IDUxMSxcbiAgICBGVF9EQVRFX1NFQ09ORF9SRU5FV0FMOiA1MTIsXG4gICAgRlRfUExBQ0VfT0ZfRVhBTUlOQVRJT046IDUxMyxcbiAgICBGVF9BUFBMSUNBVElPTl9OVU1CRVI6IDUxNCxcbiAgICBGVF9WT1VDSEVSX05VTUJFUjogNTE1LFxuICAgIEZUX0FVVEhPUklaQVRJT05fTlVNQkVSOiA1MTYsXG4gICAgRlRfRkFDVUxUWTogNTE3LFxuICAgIEZUX0ZPUk1fT0ZfRURVQ0FUSU9OOiA1MTgsXG4gICAgRlRfRE5JX05VTUJFUjogNTE5LFxuICAgIEZUX1JFVElSRU1FTlRfTlVNQkVSOiA1MjAsXG4gICAgRlRfUFJPRkVTU0lPTkFMX0lEX05VTUJFUjogNTIxLFxuICAgIEZUX0FHRV9BVF9JU1NVRTogNTIyLFxuICAgIEZUX1lFQVJTX1NJTkNFX0lTU1VFOiA1MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX0ZST006IDUyNCxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfTk9URVM6IDUyNSxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfVE86IDUyNixcbiAgICBGVF9ETENMQVNTQ09ERV9DM19GUk9NOiA1MjcsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfTk9URVM6IDUyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19UTzogNTI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfRlJPTTogNTMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6IDUzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX1RPOiA1MzIsXG4gICAgRlRfRExDTEFTU0NPREVfRl9GUk9NOiA1MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRl9OT1RFUzogNTM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfVE86IDUzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9GUk9NOiA1MzYsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfTk9URVM6IDUzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9UTzogNTM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOiA1MzksXG4gICAgRlRfRExDTEFTU0NPREVfRkExX05PVEVTOiA1NDAsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX1RPOiA1NDEsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfRlJPTTogNTQyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOiA1NDMsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfVE86IDU0NCxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9GUk9NOiA1NDUsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfTk9URVM6IDU0NixcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9UTzogNTQ3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfRlJPTTogNTQ4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6IDU0OSxcbiAgICBGVF9ETENMQVNTQ09ERV9IX1RPOiA1NTAsXG4gICAgRlRfRExDTEFTU0NPREVfSV9GUk9NOiA1NTEsXG4gICAgRlRfRExDTEFTU0NPREVfSV9OT1RFUzogNTUyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfVE86IDU1MyxcbiAgICBGVF9ETENMQVNTQ09ERV9LX0ZST006IDU1NCxcbiAgICBGVF9ETENMQVNTQ09ERV9LX05PVEVTOiA1NTUsXG4gICAgRlRfRExDTEFTU0NPREVfS19UTzogNTU2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX0ZST006IDU1NyxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19OT1RFUzogNTU4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX1RPOiA1NTksXG4gICAgRlRfRExDTEFTU0NPREVfTl9GUk9NOiA1NjAsXG4gICAgRlRfRExDTEFTU0NPREVfTl9OT1RFUzogNTYxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fVE86IDU2MixcbiAgICBGVF9ETENMQVNTQ09ERV9TX0ZST006IDU2MyxcbiAgICBGVF9ETENMQVNTQ09ERV9TX05PVEVTOiA1NjQsXG4gICAgRlRfRExDTEFTU0NPREVfU19UTzogNTY1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX0ZST006IDU2NixcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9OT1RFUzogNTY3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX1RPOiA1NjgsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fRlJPTTogNTY5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOiA1NzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fVE86IDU3MSxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9GUk9NOiA1NzIsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfTk9URVM6IDU3MyxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9UTzogNTc0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX0ZST006IDU3NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9OT1RFUzogNTc2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX1RPOiA1NzcsXG4gICAgRlRfRExDTEFTU0NPREVfVl9GUk9NOiA1NzgsXG4gICAgRlRfRExDTEFTU0NPREVfVl9OT1RFUzogNTc5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfVE86IDU4MCxcbiAgICBGVF9ETENMQVNTQ09ERV9XX0ZST006IDU4MSxcbiAgICBGVF9ETENMQVNTQ09ERV9XX05PVEVTOiA1ODIsXG4gICAgRlRfRExDTEFTU0NPREVfV19UTzogNTgzLFxuICAgIEZUX1VSTDogNTg0LFxuICAgIEZUX0NBTElCRVI6IDU4NSxcbiAgICBGVF9NT0RFTDogNTg2LFxuICAgIEZUX01BS0U6IDU4NyxcbiAgICBGVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOiA1ODgsXG4gICAgRlRfU1VSTkFNRV9PRl9IVVNCQU5EX0FGVEVSX1JFR0lTVFJBVElPTjogNTg5LFxuICAgIEZUX1NVUk5BTUVfT0ZfV0lGRV9BRlRFUl9SRUdJU1RSQVRJT046IDU5MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6IDU5MSxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6IDU5MixcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9GSVJTVF9QRVJTT046IDU5MyxcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9TRUNPTkRfUEVSU09OOiA1OTQsXG4gICAgRlRfQ1ZWOiA1OTUsXG4gICAgRlRfREFURV9PRl9JTlNVUkFOQ0VfRVhQSVJZOiA1OTYsXG4gICAgRlRfTU9SVEdBR0VfQlk6IDU5NyxcbiAgICBGVF9PTERfRE9DVU1FTlRfTlVNQkVSOiA1OTgsXG4gICAgRlRfT0xEX0RBVEVfT0ZfSVNTVUU6IDU5OSxcbiAgICBGVF9PTERfUExBQ0VfT0ZfSVNTVUU6IDYwMCxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9GUk9NOiA2MDEsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfVE86IDYwMixcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9OT1RFUzogNjAzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX0ZST006IDYwNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9UTzogNjA1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOiA2MDYsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfRlJPTTogNjA3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX1RPOiA2MDgsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfTk9URVM6IDYwOSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19GUk9NOiA2MTAsXG4gICAgRlRfRExDTEFTU0NPREVfSENfVE86IDYxMSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19OT1RFUzogNjEyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX0ZST006IDYxMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19UTzogNjE0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOiA2MTUsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfRlJPTTogNjE2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX1RPOiA2MTcsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfTk9URVM6IDYxOCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX0ZST006IDYxOSxcbiAgICBGVF9ETENMQVNTQ09ERV9SX1RPOiA2MjAsXG4gICAgRlRfRExDTEFTU0NPREVfUl9OT1RFUzogNjIxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX0ZST006IDYyMixcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9UTzogNjIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOiA2MjQsXG4gICAgRlRfQ0lUSVpFTlNISVBfU1RBVFVTOiA2MjUsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9GUk9NOiA2MjYsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9UTzogNjI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX0ZST006IDYyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9UTzogNjI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX05PVEVTOiA2MzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fRlJPTTogNjMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX1RPOiA2MzIsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fTk9URVM6IDYzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19GUk9NOiA2MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfVE86IDYzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19OT1RFUzogNjM2LFxuICAgIEZUX0FMVF9EQVRFX09GX0VYUElSWTogNjM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX0ZST006IDYzOCxcbiAgICBGVF9ETENMQVNTQ09ERV9DRF9UTzogNjM5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX05PVEVTOiA2NDAsXG4gICAgRlRfUEFZTUVOVF9QRVJJT0RfVE86IDY0MyxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9GUk9NOiA2NDIsXG4gICAgRlRfSVNTVUVSX0lERU5USUZJQ0FUSU9OX05VTUJFUjogNjQxLFxuICAgIEZUX1ZBQ0NJTkFUSU9OX0NFUlRJRklDQVRFX0lERU5USUZJRVI6IDY0NCxcbiAgICBGVF9GSVJTVF9OQU1FOiA2NDUsXG4gICAgRlRfREFURV9PRl9BUlJJVkFMOiA2NDYsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBjbGFzcyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eVwiXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNleFwiXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlaWdodFwiXG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodFwiXG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV5ZSBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhhaXIgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9ub3JcIlxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTb2NpYWwgaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIFJlc3RyaWN0aW9uIENvZGVcIlxuICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDIxc3QgYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eVwiXG4gICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgQ2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHN1YmNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgMzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluYWwgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSA0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3Igc3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSA0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzXCJcbiAgICAgICAgICAgIGNhc2UgNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSA1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHByZWZpeFwiXG4gICAgICAgICAgICBjYXNlIDU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBzZXJpZXNcIlxuICAgICAgICAgICAgY2FzZSA1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtb2RlbFwiXG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBwZXJtaXNzaWJsZSB3ZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSA2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmxhZGVuIG1hc3NcIlxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmVhXCJcbiAgICAgICAgICAgIGNhc2UgNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhdGVcIlxuICAgICAgICAgICAgY2FzZSA2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbml0XCJcbiAgICAgICAgICAgIGNhc2UgNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVpbGRpbmdcIlxuICAgICAgICAgICAgY2FzZSA2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSA2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IGZyb21cIlxuICAgICAgICAgICAgY2FzZSA3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVudCB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIDczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHJ5L3JlZ2lvbiBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpcnRoIHN0YXRlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXR5XCJcbiAgICAgICAgICAgIGNhc2UgNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIDg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIDg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBzdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGlkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaXNzdWUgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1ZSB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGR1cGxpY2F0ZXNcIlxuICAgICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNZWRpY2FsIG5vdGVzL2NvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9uLXJlc2lkZW50IGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAxMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdmFsaWQgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHVyYXRpb24gb2Ygc3RheVwiXG4gICAgICAgICAgICBjYXNlIDEwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXlcIlxuICAgICAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9udGhcIlxuICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWWVhclwiXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgY3VzdG9tZXIgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21tZXJjaWFsIHZlaGljbGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IERhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBTb2NpYWwgSW5zdXJhbmNlIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBHaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBOYW1lIHByZWZpeFwiXG4gICAgICAgICAgICBjYXNlIDExNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBzdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSAxMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gY2l0eVwiXG4gICAgICAgICAgICBjYXNlIDExODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBqdXJpc2RpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIDExOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBwb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgZm9yIHZhbGlkYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAxMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52ZW50b3J5IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDEyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSYWNlL2V0aG5pY2l0eVwiXG4gICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gdmVoaWNsZSBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDEyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gcmVzdHJpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSAxMjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgSUQgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxMzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXMgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpYyBpc3N1aW5nIHN0YXRlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpYyBuYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBwb3dlclwiXG4gICAgICAgICAgICBjYXNlIDEzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgdm9sdW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoYXNzaXMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIG1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgMTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSAxNDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29udHJvbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFyZW50c1xcJyBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDE0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWNvbmQgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDE0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWRkbGUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDE0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGlkZW50aWZpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgVklOXCJcbiAgICAgICAgICAgIGNhc2UgMTQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSAxNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIDE1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgMTUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAxNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIDE1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgMTU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAxNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBJVFMgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDE1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXJkIGFjY2VzcyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFyaXRhbCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSAxNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGFueSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgbm90ZXNcIlxuICAgICAgICAgICAgY2FzZSAxNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvdXNlXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYWNraW5nIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb29rbGV0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGlsZHJlblwiXG4gICAgICAgICAgICBjYXNlIDE2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3B5XCJcbiAgICAgICAgICAgIGNhc2UgMTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmlhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9zc2llciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBTdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDE3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZXJyaXRvcmlhbCB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIDE3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgd2l0aCBjb3JyZWN0IGNoZWNrc3Vtc1wiXG4gICAgICAgICAgICBjYXNlIDE3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIDE3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDE4dGggYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSAxNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVjb3JkIGNyZWF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAxNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBkdXBsaWNhdGUgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSAxNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FyZCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pbGl0YXJ5IElEIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXN0aW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIDE4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCbG9vZCBncm91cFwiXG4gICAgICAgICAgICBjYXNlIDE4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXF1ZW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9keSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgbWFrZVwiXG4gICAgICAgICAgICBjYXNlIDE4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFuc2FjdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWdlXCJcbiAgICAgICAgICAgIGNhc2UgMTg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvbGlvIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3RlciBLZXlcIlxuICAgICAgICAgICAgY2FzZSAxODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTXVuaWNpcGFsaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxvY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMTkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY3Rpb25cIlxuICAgICAgICAgICAgY2FzZSAxOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0NSIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWRlcmFsIGVsZWN0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDE5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgMTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgMTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgTnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm90ZXJcIlxuICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZS9udW1iZXIgb2YgdGhlIHByZXZpb3VzIGRvY3VtZW50XCJcbiAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpZWxkIGZyb20gTVJaXCJcbiAgICAgICAgICAgIGNhc2UgMjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN1cnJlbnQgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0dXMgRXhwaXJ5IERhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFua25vdGUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNTQyBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiXG4gICAgICAgICAgICBjYXNlIDI1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2FkZW1pYyB0aXRsZVwiXG4gICAgICAgICAgICBjYXNlIDI1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgMjU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlpJUCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMVwiXG4gICAgICAgICAgICBjYXNlIDI1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDJcIlxuICAgICAgICAgICAgY2FzZSAyNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGg6IFN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIDI2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogQ2l0eVwiXG4gICAgICAgICAgICBjYXNlIDI2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogU3RhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGg6IENvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSAyNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGg6IFBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNETCBDbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDI2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDE5dGggYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSAyNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VpZ2h0IChwb3VuZClcIlxuICAgICAgICAgICAgY2FzZSAyNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5kaWNhdG9yIG9mIGRvY3VtZW50IGxpbWl0ZWQgZHVyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5kb3JzZW1lbnQgZXhwaXJhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldmlzaW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxpYW5jZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRydW5jYXRlZCBzdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSAyNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlyc3QgbmFtZSB0cnVuY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pZGRsZSBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhhbSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9yZ2FuaXphdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXBhcnRtZW50XCJcbiAgICAgICAgICAgIGNhc2UgMjc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheSBncmFkZVwiXG4gICAgICAgICAgICBjYXNlIDI3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSYW5rXCJcbiAgICAgICAgICAgIGNhc2UgMjgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbmVmaXRzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDI4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHNlcnZpY2VcIlxuICAgICAgICAgICAgY2FzZSAyODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSAyODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvclwiXG4gICAgICAgICAgICBjYXNlIDI4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxhdGlvbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSAyODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVNDSVNcIlxuICAgICAgICAgICAgY2FzZSAyODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSAyODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZGl0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDI4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgMjg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGlzY3JldGlvbmFyeSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgMjkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSAyOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIDI5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgMjk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVRViBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFMVCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpbmFyeSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb2NvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmVlXCJcbiAgICAgICAgICAgIGNhc2UgMjk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YW1wIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDMwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTQkggc2VjdXJpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDMwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTQkggaW50ZWdyaXR5IG9wdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSAzMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3JlYXRpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDMwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWYWxpZGl0eSBwZXJpb2RcIlxuICAgICAgICAgICAgY2FzZSAzMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF0cm9uIGhlYWRlciB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgMzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJEQiB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMzA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMzA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBzdWJ0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMzA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBwcm9kdWN0IElEXCJcbiAgICAgICAgICAgIGNhc2UgMzA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgb3duZXJcIlxuICAgICAgICAgICAgY2FzZSAzMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIGZvcm1hdCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMzExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBob25lXCJcbiAgICAgICAgICAgIGNhc2UgMzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25cIlxuICAgICAgICAgICAgY2FzZSAzMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9zaXRpb25cIlxuICAgICAgICAgICAgY2FzZSAzMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWwgZGF0YSBzdW1tYXJ5XCJcbiAgICAgICAgICAgIGNhc2UgMzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIHZhbGlkIElEc1wiXG4gICAgICAgICAgICBjYXNlIDMxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXN0b2R5IGluZm9cIlxuICAgICAgICAgICAgY2FzZSAzMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDMxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYnNlcnZhdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSAzMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF4XCJcbiAgICAgICAgICAgIGNhc2UgMzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsaXphdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMzIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmlhbCBudW1iZXIgb2YgcGVyc29uYWxpemF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMzIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIHBlcnNvbiwgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDMyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBEYXRlIG9mIHJlY29yZFwiXG4gICAgICAgICAgICBjYXNlIDMyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBOYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMzI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IFBob25lXCJcbiAgICAgICAgICAgIGNhc2UgMzI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IEFkZHJlc3NcIlxuICAgICAgICAgICAgY2FzZSAzMjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgMzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSAzMjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDMzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDMzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGRhdGEgZnJvbSB0aGUgREcxIGRhdGEgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSAzMzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZSBvZiBhcHByb3ZhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRtaW5pc3RyYXRpdmUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGRpc2NyaW1pbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSAzMzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0YSBkaXNjcmltaW5hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMzM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklEIG51bWJlciBvZiBJU08gaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgMzQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdOSUIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbGVncmFwaCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsbGVyZ2llc1wiXG4gICAgICAgICAgICBjYXNlIDM0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGVjaWFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291cnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHlcIlxuICAgICAgICAgICAgY2FzZSAzNDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBTU05cIlxuICAgICAgICAgICAgY2FzZSAzNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9EIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHBpcnkgZGF0ZSBvZiBNb3RvcmN5Y2xlIE5vdmljZSBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSAzNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFVGIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBR1lcIlxuICAgICAgICAgICAgY2FzZSAzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUE5SIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29kZSBvZiB0aGUgYWlycG9ydCBvZiBkZXBhcnR1cmVcIlxuICAgICAgICAgICAgY2FzZSAzNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29kZSBvZiB0aGUgYWlycG9ydCBvZiBhcnJpdmFsXCJcbiAgICAgICAgICAgIGNhc2UgMzU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZsaWdodCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBmbGlnaHRcIlxuICAgICAgICAgICAgY2FzZSAzNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VhdCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBib2FyZGluZyBwYXNzIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgMzU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNDVyB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIDM2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyIGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMzYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXIgY2hlY2sgZGlnaXRcIlxuICAgICAgICAgICAgY2FzZSAzNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9vbSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVsaWdpb25cIlxuICAgICAgICAgICAgY2FzZSAzNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9udGhzIHRvIGV4cGlyZVwiXG4gICAgICAgICAgICBjYXNlIDM2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbGVjdHJvbmljIHRpY2tldCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSAzNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGFydG1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjay1pbiBzZXF1ZW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBkZXNpZ25hdG9yIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgMzY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbnVtZXJpYyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRpY2tldCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlcXVlbnQgZmx5ZXIgYWlybGluZSBkZXNpZ25hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMzcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVlIGJhZ2dhZ2UgYWxsb3dhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgMzc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBERjQxNyBjb2RlY1wiXG4gICAgICAgICAgICBjYXNlIDM3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGlkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZldGVyYW5cIlxuICAgICAgICAgICAgY2FzZSAzNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDQzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXZpbCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSA0MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHNlYXRzXCJcbiAgICAgICAgICAgIGNhc2UgNDM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBzdGFuZGluZyBwbGFjZXNcIlxuICAgICAgICAgICAgY2FzZSA0MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IHNwZWVkXCJcbiAgICAgICAgICAgIGNhc2UgNDM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZ1ZWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDQzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGVudmlyb25tZW50YWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDQzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3dlci10by13ZWlnaHQgcmF0aW9cIlxuICAgICAgICAgICAgY2FzZSA0NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IG1hc3Mgb2YgdHJhaWxlciAoYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIDQ0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyICh1bmJyYWtlZClcIlxuICAgICAgICAgICAgY2FzZSA0NDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNtaXNzaW9uIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSA0NDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhaWxlciBoaXRjaFwiXG4gICAgICAgICAgICBjYXNlIDQ0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2NvbXBhbmllZCBieVwiXG4gICAgICAgICAgICBjYXNlIDQ0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb2xpY2UgZGlzdHJpY3RcIlxuICAgICAgICAgICAgY2FzZSA0NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlyc3QgaXNzdWUgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDQ0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXlsb2FkIGNhcGFjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgNDQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBheGxlc1wiXG4gICAgICAgICAgICBjYXNlIDQ0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXNzaWJsZSBheGxlIGxvYWRcIlxuICAgICAgICAgICAgY2FzZSA0NTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJlY2luY3RcIlxuICAgICAgICAgICAgY2FzZSA0NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRlZCBieVwiXG4gICAgICAgICAgICBjYXNlIDQ1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdXJwb3NlIG9mIGVudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNraW4gY29sb3JcIlxuICAgICAgICAgICAgY2FzZSA0NTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxleGlvblwiXG4gICAgICAgICAgICBjYXNlIDQ1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIDQ1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJwb3J0IG9mIGFycml2YWxcIlxuICAgICAgICAgICAgY2FzZSA0NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNDU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbG95YWx0eSBwcm9ncmFtIGZvciBmcmVxdWVudCBmbHllcnNcIlxuICAgICAgICAgICAgY2FzZSA0NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGljZW5zZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW4gdGFua3NcIlxuICAgICAgICAgICAgY2FzZSA0NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdGhhbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIDQ2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXN0IFRyYWNrIHNlcnZpY2VcIlxuICAgICAgICAgICAgY2FzZSA0NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3duZXJcIlxuICAgICAgICAgICAgY2FzZSA0NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzIGZyb20gSUNBTyBSRklEXCJcbiAgICAgICAgICAgIGNhc2UgNDY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIDQ2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgNDY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBudW1iZXIgb2YgY2FyZCBpc3N1YW5jZXNcIlxuICAgICAgICAgICAgY2FzZSA0Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2VudHVyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDQ2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0ODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0ODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0OTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0OTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIGNhcmQgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSA0OTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF4IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFsdGggaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFuZGZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDQ5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWxlY3RlZSBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSA0OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZ2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDUwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSA1MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBnaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGNvdW50cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBmaXJzdCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgNTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2Ygc2Vjb25kIHJlbmV3YWxcIlxuICAgICAgICAgICAgY2FzZSA1MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgZXhhbWluYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwbGljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdWNoZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF1dGhvcml6YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhY3VsdHlcIlxuICAgICAgICAgICAgY2FzZSA1MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9ybSBvZiBlZHVjYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRE5JIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXRpcmVtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9mZXNzaW9uYWwgSUQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFnZSBhdCBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDUyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJZZWFycyBzaW5jZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDUyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMXCJcbiAgICAgICAgICAgIGNhc2UgNTg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhbGliZXJcIlxuICAgICAgICAgICAgY2FzZSA1ODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9kZWxcIlxuICAgICAgICAgICAgY2FzZSA1ODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFrZVwiXG4gICAgICAgICAgICBjYXNlIDU4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgY3lsaW5kZXJzXCJcbiAgICAgICAgICAgIGNhc2UgNTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgb2YgaHVzYmFuZCBhZnRlciByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1OTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiB3aWZlIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDU5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoIG9mIHdpZmVcIlxuICAgICAgICAgICAgY2FzZSA1OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiBodXNiYW5kXCJcbiAgICAgICAgICAgIGNhc2UgNTkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBmaXJzdCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSA1OTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIHNlY29uZCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSA1OTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1ZWL0NWQ1wiXG4gICAgICAgICAgICBjYXNlIDU5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHBpcnkgZGF0ZSBvZiBpbnN1cmFuY2VcIlxuICAgICAgICAgICAgY2FzZSA1OTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9ydGdhZ2UgYnlcIlxuICAgICAgICAgICAgY2FzZSA1OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2xkIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDYwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgcGxhY2Ugb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA2MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDYyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBzZXJ2aWNlIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgc2VydmljZSB0b1wiXG4gICAgICAgICAgICBjYXNlIDYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOVCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFROIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbHRlcm5hdGl2ZSBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDYzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENEIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENEIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VlciBpZGVudGlmaWNhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA2NDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bWVudCBwZXJpb2QgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDY0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXltZW50IHBlcmlvZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDY0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgdmFjY2luYXRpb24gY2VydGlmaWNhdGUgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIDY0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNjQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IEZyYW1lU2hhcGVUeXBlID0ge1xuICAgIExJTkU6IDAsXG4gICAgQ09STkVSOiAxLFxufVxuXG5leHBvcnQgY29uc3QgSVJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uID0ge1xuICAgIFJGSURfRVZFTlRfQ0hJUF9ERVRFQ1RFRDogMSxcbiAgICBSRklEX0VWRU5UX1JFQURJTkdfRVJST1I6IDIsXG4gICAgUkZJRF9FWFRSQV9FUlJPUl9DT0RFOiBcInJmaWQuZXJyb3IuY29kZVwiLFxufVxuXG5leHBvcnQgY29uc3QgTENJRCA9IHtcbiAgICBMQVRJTjogMCxcbiAgICBBRlJJS0FBTlM6IDEwNzgsXG4gICAgQUxCQU5JQU46IDEwNTIsXG4gICAgQVJBQklDX0FMR0VSSUE6IDUxMjEsXG4gICAgQVJBQklDX0JBSFJBSU46IDE1MzYxLFxuICAgIEFSQUJJQ19FR1lQVDogMzA3MyxcbiAgICBBUkFCSUNfSVJBUTogMjA0OSxcbiAgICBBUkFCSUNfSk9SREFOOiAxMTI2NSxcbiAgICBBUkFCSUNfS1VXQUlUOiAxMzMxMyxcbiAgICBBUkFCSUNfTEVCQU5PTjogMTIyODksXG4gICAgQVJBQklDX0xJQllBOiA0MDk3LFxuICAgIEFSQUJJQ19NT1JPQ0NPOiA2MTQ1LFxuICAgIEFSQUJJQ19PTUFOOiA4MTkzLFxuICAgIEFSQUJJQ19RQVRBUjogMTYzODUsXG4gICAgQVJBQklDX1NBVURJX0FSQUJJQTogMTAyNSxcbiAgICBBUkFCSUNfU1lSSUE6IDEwMjQxLFxuICAgIEFSQUJJQ19UVU5JU0lBOiA3MTY5LFxuICAgIEFSQUJJQ19VQUU6IDE0MzM3LFxuICAgIEFSQUJJQ19ZRU1FTjogOTIxNyxcbiAgICBBUkFCSUNfQVJNRU5JQU46IDEwNjcsXG4gICAgQVpFUklfQ1lSSUxJQzogMjA5MixcbiAgICBBWkVSSV9MQVRJTjogMTA2OCxcbiAgICBCQVNRVUU6IDEwNjksXG4gICAgQkVMQVJVU0lBTjogMTA1OSxcbiAgICBCVUxHQVJJQU46IDEwMjYsXG4gICAgQ0FUQUxBTjogMTAyNyxcbiAgICBDSElORVNFX0hPTkdLT05HX1NBUjogMzA3NixcbiAgICBDSElORVNFX01BQ0FPX1NBUjogNTEyNCxcbiAgICBDSElORVNFOiAyMDUyLFxuICAgIENISU5FU0VfU0lOR0FQT1JFOiA0MTAwLFxuICAgIENISU5FU0VfVEFJV0FOOiAxMDI4LFxuICAgIENST0FUSUFOOiAxMDUwLFxuICAgIENaRUNIOiAxMDI5LFxuICAgIERBTklTSDogMTAzMCxcbiAgICBESVZFSEk6IDExMjUsXG4gICAgRFVUQ0hfQkVMR0lVTTogMjA2NyxcbiAgICBEVVRDSF9ORVRIRVJMQU5EUzogMTA0MyxcbiAgICBFTkdMSVNIX0FVU1RSQUxJQTogMzA4MSxcbiAgICBFTkdMSVNIX0JFTElaRTogMTAyNDksXG4gICAgRU5HTElTSF9DQU5BREE6IDQxMDUsXG4gICAgRU5HTElTSF9DQVJSSUJFQU46IDkyMjUsXG4gICAgRU5HTElTSF9JUkVMQU5EOiA2MTUzLFxuICAgIEVOR0xJU0hfSkFNQUlDQTogODIwMSxcbiAgICBFTkdMSVNIX05FV19aRUFMQU5EOiA1MTI5LFxuICAgIEVOR0xJU0hfUEhJTElQUElORVM6IDEzMzIxLFxuICAgIEVOR0xJU0hfU09VVEhfQUZSSUNBOiA3MTc3LFxuICAgIEVOR0xJU0hfVFJJTklEQUQ6IDExMjczLFxuICAgIEVOR0xJU0hfVUs6IDIwNTcsXG4gICAgRU5HTElTSF9VUzogMTAzMyxcbiAgICBFTkdMSVNIX1pJTUJBQldFOiAxMjI5NyxcbiAgICBFU1RPTklBTjogMTA2MSxcbiAgICBGQUVST0VTRTogMTA4MCxcbiAgICBGQVJTSTogMTA2NSxcbiAgICBGSU5OSVNIOiAxMDM1LFxuICAgIEZSRU5DSF9CRUxHSVVNOiAyMDYwLFxuICAgIEZSRU5DSF9DQU5BREE6IDMwODQsXG4gICAgRlJFTkNIX0ZSQU5DRTogMTAzNixcbiAgICBGUkVOQ0hfTFVYRU1CT1VSRzogNTEzMixcbiAgICBGUkVOQ0hfTU9OQUNPOiA2MTU2LFxuICAgIEZSRU5DSF9TV0lUWkVSTEFORDogNDEwOCxcbiAgICBGWVJPX01BQ0VET05JQU46IDEwNzEsXG4gICAgR0FMSUNJQU46IDExMTAsXG4gICAgR0VPUkdJQU46IDEwNzksXG4gICAgR0VSTUFOX0FVU1RSSUE6IDMwNzksXG4gICAgR0VSTUFOX0dFUk1BTlk6IDEwMzEsXG4gICAgR0VSTUFOX0xJRUNIVEVOU1RFSU46IDUxMjcsXG4gICAgR0VSTUFOX0xVWEVNQk9VUkc6IDQxMDMsXG4gICAgR0VSTUFOX1NXSVRaRVJMQU5EOiAyMDU1LFxuICAgIEdSRUVLOiAxMDMyLFxuICAgIEdVSkFSQVRJOiAxMDk1LFxuICAgIEhFQlJFVzogMTAzNyxcbiAgICBISU5ESV9JTkRJQTogMTA4MSxcbiAgICBIVU5HQVJJQU46IDEwMzgsXG4gICAgSUNFTEFORElDOiAxMDM5LFxuICAgIElORE9ORVNJQU46IDEwNTcsXG4gICAgSVRBTElBTl9JVEFMWTogMTA0MCxcbiAgICBJVEFMSUFOX1NXSVRaRVJMQU5EOiAyMDY0LFxuICAgIEpBUEFORVNFOiAxMDQxLFxuICAgIEtBTk5BREE6IDEwOTksXG4gICAgS0FaQUtIOiAxMDg3LFxuICAgIEtPTktBTkk6IDExMTEsXG4gICAgS09SRUFOOiAxMDQyLFxuICAgIEtZUkdZWl9DWVJJTElDSzogMTA4OCxcbiAgICBMQVRWSUFOOiAxMDYyLFxuICAgIExJVEhVQU5JQU46IDEwNjMsXG4gICAgTUFMQVlfTUFMQVlTSUE6IDEwODYsXG4gICAgTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06IDIxMTAsXG4gICAgTUFSQVRISTogMTEwMixcbiAgICBNT05HT0xJQU5fQ1lSSUxJQzogMTEwNCxcbiAgICBOT1JXRUdJQU5fQk9LTUFMOiAxMDQ0LFxuICAgIE5PUldFR0lBTl9OWU9SU0s6IDIwNjgsXG4gICAgUE9MSVNIOiAxMDQ1LFxuICAgIFBPUlRVR1VFU0VfQlJBWklMOiAxMDQ2LFxuICAgIFBPUlRVR1VFU0VfUE9SVFVHQUw6IDIwNzAsXG4gICAgUFVOSkFCSTogMTA5NCxcbiAgICBSSEFFVE9fUk9NQU5JQzogMTA0NyxcbiAgICBST01BTklBTjogMTA0OCxcbiAgICBSVVNTSUFOOiAxMDQ5LFxuICAgIFNBTlNLUklUOiAxMTAzLFxuICAgIFNFUkJJQU5fQ1lSSUxJQzogMzA5OCxcbiAgICBTRVJCSUFOX0xBVElOOiAyMDc0LFxuICAgIFNMT1ZBSzogMTA1MSxcbiAgICBTTE9WRU5JQU46IDEwNjAsXG4gICAgU1BBTklTSF9BUkdFTlRJTkE6IDExMjc0LFxuICAgIFNQQU5JU0hfQk9MSVZJQTogMTYzOTQsXG4gICAgU1BBTklTSF9DSElMRTogMTMzMjIsXG4gICAgU1BBTklDSF9DT0xPTUJJQTogOTIyNixcbiAgICBTUEFOSVNIX0NPU1RBX1JJQ0E6IDUxMzAsXG4gICAgU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6IDcxNzgsXG4gICAgU1BBTklTSF9FQ1VBRE9SOiAxMjI5OCxcbiAgICBTUEFOSVNIX0VMX1NBTFZBRE9SOiAxNzQxOCxcbiAgICBTUEFOSVNIX0dVQVRFTUFMQTogNDEwNixcbiAgICBTUEFOSVNIX0hPTkRVUkFTOiAxODQ0MixcbiAgICBTUEFOSVNIX01FWElDTzogMjA1OCxcbiAgICBTUEFOSVNIX05JQ0FSQUdVQTogMTk0NjYsXG4gICAgU1BBTklTSF9QQU5BTUE6IDYxNTQsXG4gICAgU1BBTklTSF9QQVJBR1VBWTogMTUzNzAsXG4gICAgU1BBTklTSF9QRVJVOiAxMDI1MCxcbiAgICBTUEFOSVNIX1BVRVJUT19SSUNPOiAyMDQ5MCxcbiAgICBTUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6IDEwMzQsXG4gICAgU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6IDMwODIsXG4gICAgU1BBTklTSF9VUlVHVUFZOiAxNDM0NixcbiAgICBTUEFOSVNIX1ZFTkVaVUVMQTogODIwMixcbiAgICBTV0FISUxJOiAxMDg5LFxuICAgIFNXRURJU0g6IDEwNTMsXG4gICAgU1dFRElTSF9GSU5MQU5EOiAyMDc3LFxuICAgIFNZUklBQzogMTExNCxcbiAgICBUQU1JTDogMTA5NyxcbiAgICBUQVRBUjogMTA5MixcbiAgICBURUxVR1U6IDEwOTgsXG4gICAgVEhBSV9USEFJTEFORDogMTA1NCxcbiAgICBUVVJLSVNIOiAxMDU1LFxuICAgIFRBSklLX0NZUklMTElDOiAxMDY0LFxuICAgIFRVUktNRU46IDEwOTAsXG4gICAgVUtSQUlOSUFOOiAxMDU4LFxuICAgIFVSRFU6IDEwNTYsXG4gICAgVVpCRUtfQ1lSSUxJQzogMjExNSxcbiAgICBVWkJFS19MQVRJTjogMTA5MSxcbiAgICBWSUVUTkFNRVNFOiAxMDY2LFxuICAgIENUQ19TSU1QTElGSUVEOiA1MDAwMSxcbiAgICBDVENfVFJBRElUSU9OQUw6IDUwMDAyLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0aW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFGUklLQUFOUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZnJpa2FhbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFMQkFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsYmFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQUxHRVJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEFsZ2VyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQkFIUkFJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEJhaHJhaW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfRUdZUFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChFZ3lwdClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19JUkFROlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoSXJhcSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19KT1JEQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChKb3JkYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfS1VXQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoS3V3YWl0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0xFQkFOT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChMZWJhbm9uKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0xJQllBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTGlieWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTU9ST0NDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKE1vcm9jY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfT01BTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKE9tYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfUUFUQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChRYXRhcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19TQVVESV9BUkFCSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChTYXVkaSBBcmFiaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfU1lSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChTeXJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19UVU5JU0lBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoVHVuaXNpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19VQUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChVLkEuRS4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfWUVNRU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChZZW1lbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19BUk1FTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcm1lbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BWkVSSV9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBemVyaSAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQVNRVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFzcXVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CRUxBUlVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbGFydXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJVTEdBUklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCdWxnYXJpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNBVEFMQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2F0YWxhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9IT05HS09OR19TQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoSG9uZ0tvbmcgUy5BLlIuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9NQUNBT19TQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoTWFjYW8gUy5BLlIuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX1NJTkdBUE9SRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChTaW5nYXBvcmUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX1RBSVdBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChUYWl3YW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DUk9BVElBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcm9hdGlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1pFQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3plY2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRBTklTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYW5pc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRJVkVISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXZlaGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRVVENIX0JFTEdJVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHV0Y2ggKEJlbGdpdW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EVVRDSF9ORVRIRVJMQU5EUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXRjaCAoTmV0aGVybGFuZHMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0FVU1RSQUxJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChBdXN0cmFsaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0JFTElaRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChCZWxpemUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0NBTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChDYW5hZGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0NBUlJJQkVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChDYXJpYmJlYW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0lSRUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoSXJlbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfSkFNQUlDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChKYW1haWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9ORVdfWkVBTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChOZXcgWmVhbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfUEhJTElQUElORVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoUGhpbGlwcGluZXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1NPVVRIX0FGUklDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChTb3V0aCBBZnJpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1RSSU5JREFEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFRyaW5pZGFkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9VSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfWklNQkFCV0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoWmltYmFid2UpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FU1RPTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFc3RvbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRkFFUk9FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFlcm9lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZBUlNJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhcnNpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GSU5OSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbm5pc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9CRUxHSVVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoQmVsZ2l1bSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9DQU5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChDYW5hZGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfRlJBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoRnJhbmNlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0xVWEVNQk9VUkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChMdXhlbWJvdXJnKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX01PTkFDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKE1vbmFjbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0FMSUNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2FsaWNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFT1JHSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlb3JnaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fQVVTVFJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEF1c3RyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fR0VSTUFOWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEdlcm1hbnkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fTElFQ0hURU5TVEVJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKExpZWNodGVuc3RlaW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fTFVYRU1CT1VSRzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKEx1eGVtYm91cmcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRVJNQU5fU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdSRUVLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdyZWVrXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HVUpBUkFUSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHdWphcmF0aVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSEVCUkVXOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlYnJld1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSElORElfSU5ESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGluZGkgKEluZGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSFVOR0FSSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkh1bmdhcmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSUNFTEFORElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkljZWxhbmRpY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSU5ET05FU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRvbmVzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JVEFMSUFOX0lUQUxZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkl0YWxpYW4gKEl0YWx5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSVRBTElBTl9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJdGFsaWFuIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkpBUEFORVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkphcGFuZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LQU5OQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkthbm5hZGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBWkFLSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYXpha2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktPTktBTkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29ua2FuaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09SRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIktvcmVhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS1lSR1laX0NZUklMSUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkt5cmd5eiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQVRWSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdHZpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxJVEhVQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl0aHVhbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRllST19NQUNFRE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZZUk8gTWFjZWRvbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfTUFMQVlTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKE1hbGF5c2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKEJydW5laSBEYXJ1c3NhbGFtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFSQVRISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJhdGhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NT05HT0xJQU5fQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb25nb2xpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX0JPS01BTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKEJva21hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5PUldFR0lBTl9OWU9SU0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9yd2VnaWFuIChOeW5vcnNrKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9MSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9CUkFaSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHVndWVzZSAoQnJhemlsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9QT1JUVUdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChQb3J0dWdhbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBVTkpBQkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHVuamFiaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkhBRVRPX1JPTUFOSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmhhZXRvLVJvbWFuaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJPTUFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJvbWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SVVNTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1c3NpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNBTlNLUklUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNhbnNrcml0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyYmlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TRVJCSUFOX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkFLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3Zha1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0xPVkVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNsb3ZlbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9BUkdFTlRJTkE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQXJnZW50aW5hKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9CT0xJVklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEJvbGl2aWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NISUxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENoaWxlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklDSF9DT0xPTUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb2xvbWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQ09TVEFfUklDQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDb3N0YSBSaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9ET01JTklDQU5fUkVQVUJMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FQ1VBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVjdWFkb3IpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0VMX1NBTFZBRE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEVsIFNhbHZhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9HVUFURU1BTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoR3VhdGVtYWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9IT05EVVJBUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChIb25kdXJhcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTUVYSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE1leGljbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfTklDQVJBR1VBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKE5pY2FyYWd1YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFOQU1BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhbmFtYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEFSQUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGFyYWd1YXkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BFUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGVydSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUFVFUlRPX1JJQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUHVlcnRvIFJpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1RSQURJVElPTkFMX1NPUlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVHJhZGl0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEludGVybmF0aW9uYWwgU29ydClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVVJVR1VBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChVcnVndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9WRU5FWlVFTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVmVuZXp1ZWxhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dBSElMSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2FoaWxpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3ZWRpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXRURJU0hfRklOTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoIChGaW5sYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1lSSUFDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN5cmlhY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFNSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFtaWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhdGFyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5URUxVR1U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsdWd1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5USEFJX1RIQUlMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRoYWkgKFRoYWlsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS0lTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJraXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQUpJS19DWVJJTExJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYWppayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UVVJLTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1cmttZW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVLUkFJTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVa3JhaW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVSRFU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXJkdVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VWkJFS19MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVemJlayAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5WSUVUTkFNRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpZXRuYW1lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNUQ19TSU1QTElGSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBTaW1wbGlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfVFJBRElUSU9OQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1RDIFRyYWRpdGlvbmFsXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFBLRFJlc291cmNlVHlwZSA9IHtcbiAgICBDRVJUSUZJQ0FURV9QQTogMCxcbiAgICBDRVJUSUZJQ0FURV9UQTogMSxcbiAgICBMRElGOiAyLFxuICAgIENSTDogMyxcbiAgICBNTDogNCxcbiAgICBERUZMOiA1LFxuICAgIERFVkw6IDYsXG4gICAgQkw6IDcsXG5cclxuICAgIGdldFR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInBhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxyXG4gICAgICAgICAgICBjYXNlIFwidGFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1RBXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZGlmXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5MRElGXHJcbiAgICAgICAgICAgIGNhc2UgXCJjcmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNSTFxyXG4gICAgICAgICAgICBjYXNlIFwibWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLk1MXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWZsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERUZMXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXZsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERVZMXHJcbiAgICAgICAgICAgIGNhc2UgXCJibFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQkxcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSB7XG4gICAgTk9UX1JFQURZOiAwLFxuICAgIFJFQURZOiAxLFxuICAgIFRJTUVPVVQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBSRklERGVsZWdhdGUgPSB7XG4gICAgTlVMTDogMCxcbiAgICBOT19QQTogMSxcbiAgICBGVUxMOiAyLFxufVxuXG5leHBvcnQgY29uc3QgUkdMTWVhc3VyZVN5c3RlbSA9IHtcbiAgICBNRVRSSUM6IDAsXG4gICAgSU1QRVJJQUw6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0lkZW50aWZpZXIgPSB7XG4gICAgU0NFTkFSSU9fTVJaOiBcIk1yelwiLFxuICAgIFNDRU5BUklPX0JBUkNPREU6IFwiQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX0xPQ0FURTogXCJMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19PQ1I6IFwiT2NyXCIsXG4gICAgU0NFTkFSSU9fRE9DVFlQRTogXCJEb2NUeXBlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREU6IFwiTXJ6T3JCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0xPQ0FURTogXCJNcnpPckxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9BTkRfTE9DQVRFOiBcIk1yekFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9PQ1I6IFwiTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERV9PUl9PQ1I6IFwiTXJ6T3JCYXJjb2RlT3JPY3JcIixcbiAgICBTQ0VOQVJJT19MT0NBVEVfVklTVUFMX0FORF9NUlpfT1JfT0NSOiBcIkxvY2F0ZVZpc3VhbF9BbmRfTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19GVUxMX1BST0NFU1M6IFwiRnVsbFByb2Nlc3NcIixcbiAgICBTQ0VOQVJJT19GVUxMX0FVVEg6IFwiRnVsbEF1dGhcIixcbiAgICBTQ0VOQVJJT19JRDNSVVM6IFwiSWQzUnVzXCIsXG4gICAgU0NFTkFSSU9fUlVTX1NUQU1QOiBcIlJ1c1N0YW1wXCIsXG4gICAgU0NFTkFSSU9fT0NSX0ZSRUU6IFwiT2NyRnJlZVwiLFxuICAgIFNDRU5BUklPX0NSRURJVF9DQVJEOiBcIkNyZWRpdENhcmRcIixcbiAgICBTQ0VOQVJJT19DQVBUVVJFOiBcIkNhcHR1cmVcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQnV0dDogMCxcbiAgICBSb3VuZDogMSxcbiAgICBTcXVhcmU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayA9IHtcbiAgICBQb3J0cmFpdDogMCxcbiAgICBMYW5kc2NhcGVMZWZ0OiAxLFxuICAgIExhbmRzY2FwZVJpZ2h0OiAyLFxuICAgIFBvcnRyYWl0VXBzaWRlRG93bjogMyxcbiAgICBMYW5kc2NhcGU6IDQsXG4gICAgQWxsOiA1LFxuICAgIEFsbEJ1dFVwc2lkZURvd246IDYsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIExvdzogMCxcbiAgICBNZWRpdW06IDEsXG4gICAgSGlnaDogMixcbiAgICBQaG90bzogMyxcbiAgICBJbnB1dFByaW9yaXR5OiA0LFxuICAgIFFIRDk2MHg1NDA6IDUsXG4gICAgSGQxMjgweDcyMDogNixcbiAgICBIZDE5MjB4MTA4MDogNyxcbiAgICBIZDRLMzg0MHgyMTYwOiA4LFxuICAgIElGcmFtZTk2MHg1NDA6IDksXG4gICAgSUZyYW1lMTI4MHg3MjA6IDEwLFxuICAgIFF2Z2EzMjB4MjQwOiAxMSxcbiAgICBWZ2E2NDB4NDgwOiAxMixcbiAgICBDaWYzNTJ4Mjg4OiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZURldmljZVBvc2l0aW9uID0ge1xuICAgIEZyb250OiAwLFxuICAgIEJhY2s6IDEsXG4gICAgVW5zcGVjaWZpZWQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSVZpZXdDb250ZW50TW9kZSA9IHtcbiAgICBTY2FsZVRvRmlsbDogMCxcbiAgICBTY2FsZUFzcGVjdEZpdDogMSxcbiAgICBTY2FsZUFzcGVjdEZpbGw6IDIsXG4gICAgUmVkcmF3OiAzLFxuICAgIENlbnRlcjogNCxcbiAgICBUb3A6IDUsXG4gICAgQm90dG9tOiA2LFxuICAgIExlZnQ6IDcsXG4gICAgUmlnaHQ6IDgsXG4gICAgVG9wTGVmdDogOSxcbiAgICBUb3BSaWdodDogMTAsXG4gICAgQm90dG9tTGVmdDogMTEsXG4gICAgQm90dG9tUmlnaHQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEJhcmNvZGVSZXN1bHQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIENhbWVyYU1vZGUsXG4gICBDYW1lcmFUeXBlcyxcbiAgIENhcHR1cmVNb2RlLFxuICAgZGlEb2NUeXBlLFxuICAgRG9jRm9ybWF0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIERvY3VtZW50UmVhZGVyRXhjZXB0aW9uRW51bSxcbiAgIGVDaGVja0RpYWdub3NlLFxuICAgZUNoZWNrUmVzdWx0LFxuICAgZUdyYXBoaWNGaWVsZFR5cGUsXG4gICBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlLFxuICAgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyxcbiAgIGVMRFNfUGFyc2luZ05vdGlmaWNhdGlvbkNvZGVzLFxuICAgZVByb2Nlc3NHTENvbW1hbmRzLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfQXV0aGVudGljYXRpb25Qcm9jZWR1cmVUeXBlLFxuICAgZVJGSURfQmF1ZFJhdGUsXG4gICBlUkZJRF9DZXJ0aWZpY2F0ZVR5cGUsXG4gICBlUkZJRF9EYXRhRmlsZV9UeXBlLFxuICAgZVJGSURfRXJyb3JDb2RlcyxcbiAgIGVSRklEX05vdGlmaWNhdGlvbkNvZGVzLFxuICAgZVJGSURfUGFzc3dvcmRfVHlwZSxcbiAgIGVSRklEX1NES19Qcm9maWxlclR5cGUsXG4gICBlUkZJRF9UZXJtaW5hbFR5cGUsXG4gICBlUlBSTV9BdXRoZW50aWNpdHksXG4gICBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlLFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgZVZpc3VhbEZpZWxkVHlwZSxcbiAgIEZvbnRTdHlsZSxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgSVJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uLFxuICAgTENJRCxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyxcbiAgIFJGSUREZWxlZ2F0ZSxcbiAgIFJHTE1lYXN1cmVTeXN0ZW0sXG4gICBTY2VuYXJpb0lkZW50aWZpZXIsXG4gICBMaW5lQ2FwLFxuICAgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2ssXG4gICBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24sXG4gICBVSVZpZXdDb250ZW50TW9kZSxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1yZWFkZXItYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRG9jdW1lbnRSZWFkZXItQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBJbml0aWFsbHkgbWFkZSBmb3IgY2FwYWNpdG9yIGFzIGl0IGhhcyBubyBjb252ZW5pZW50IHdheSB0byByZWFkIGFzc2V0c1xuICAgICAqICBBbGxvd3MgeW91IHRvIGluaXRpYWxpemUgZG9jdW1lbnQgcmVhZGVyIHdpdGhvdXQgcmVhZGluZyBsaWNlbnNlIHlvdXJzZWxmLlxuICAgICAqICBMaWNlbnNlIHdpbGwgYmUgYXV0b21hdGljYWxseSByZWFkIGZyb21cbiAgICAgKiAgQW5kcm9pZDogXCJhbmRyb2lkL2FwcC9zcmMvbWFpbi9hc3NldHMvcmVndWxhLmxpY2Vuc2VcIlxuICAgICAqICBpT1M6IFwiaW9zL0FwcC9BcHAvcmVndWxhLmxpY2Vuc2VcIlxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyQXV0b21hdGljYWxseSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBBUEkgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBUElWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0QXZhaWxhYmxlU2NlbmFyaW9zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBORkMgY2hpcCByZWFkaW5nIGNhcGFiaWxpdHkgaXMgYXZhaWxhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBDb3JlIG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29yZU1vZGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENvcmVWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIGV4cG9ydCBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBJRFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZUlEKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiB0aGUgU0RLIGlzIHJlYWR5IGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIERvY3VtZW50IFJlYWRlciBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBjb3VudHJpZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VDb3VudHJpZXNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEb2N1bWVudHNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgc2VsZWN0ZWQgc2NlbmFyaW9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VsZWN0ZWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBwYXRoIHRvIHRoZSBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQmVmb3JlIHVzaW5nIHRoaXMsIGVuYWJsZSBsb2cgc2F2aW5nLiBFYWNoIG5ldyBzZXNzaW9uIHByb3ZpZGVzIGEgZGlmZmVyZW50IHBhdGhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2Vzc2lvbkxvZ0ZvbGRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHMgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1BhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBvcGVuIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBzdGFydCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0UkZJRFJlYWRlcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFJGSURSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xvc2UgY2FtZXJhIHByZXZpZXcgYW5kIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUV4cGlyeURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhIGxpc3Qgb2YgY291bnRyeSBpZGVudGlmaWVycyB0aGF0IGFyZSBkZWZpbmVkIGZvciBwcm9jZXNzaW5nIGluIHRoZSBsaWNlbnNlLiBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGFyZSBubyByZXN0cmljdGlvbnMgZm9yIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbGljZW5zZUlzUmZpZEF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENhbWVyYVNlc3Npb25Jc1BhdXNlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlc2V0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbGVhciBQS0QgY2VydGlmaWNhdGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFJGSUQgZGVsZWdhdGUgb24gaU9TIHRvIGVpdGhlciBudWxsLFxuICAgICAqICBkZWxlZ2F0ZSB3aXRoIG9uUmVxdWVzdFBBQ2VydGlmaWNhdGVzIGNhbGxiYWNrIG9yIHdpdGhvdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBkZWxlZ2F0ZSB1c2UgZW51bSBSRklERGVsZWdhdGVcbiAgICAgKiAgTlVMTCA9IDBcbiAgICAgKiAgTk9fUEEgPSAxXG4gICAgICogIEZVTEwgPSAyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkRGVsZWdhdGUoZGVsZWdhdGU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBDb3JlIGxvZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9nc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RW5hYmxlQ29yZUxvZ3MobG9nczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUEtEQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBJZiBzZXQsIHRoZSBjYW1lcmEgc2Vzc2lvbiB3aWxsIGJlIHBhdXNlZCBhcyBzb29uIGFzIHRoZSByZXN1bHQgaXMgcmVjZWl2ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDYW1lcmFTZXNzaW9uSXNQYXVzZWQocGF1c2VkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgYSBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvIFNjZW5hcmlvYHMgdW5pcXVlIGlkZW50aWZpZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFNjZW5hcmlvKHNjZW5hcmlvOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpbWFnZXMgQXJyYXkgb2Ygc3RyaW5ncyB0aGF0IGFyZSBiYXNlNjQgcmVwcmVzZW50YXRpb25zIG9mIGltYWdlc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZXMoaW1hZ2VzOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlEXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyV2l0aENhbWVyYUlEKGNhbWVyYUlEOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCBmb3IgZ2V0dGluZyBhbHdheXMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBydW5BdXRvVXBkYXRlKGRhdGFiYXNlVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNjZW5hcmlvIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmUge25hbWU/OiB2YWx1ZTEsbmFtZT86IHZhbHVlMiwgLi4ufVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGljZW5zZSBMaWNlbnNlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyKGxpY2Vuc2U6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRvd25sb2FkIGEgZGF0YWJhc2UgZnJvbSB0aGUgUmVndWxhJ3Mgc2VydmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHByZXBhcmVEYXRhYmFzZShkYXRhYmFzZVR5cGU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhbiBpbWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlKGltYWdlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmZpZFNlc3Npb25TdGF0dXMoc3RhdHVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFBBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAgICogIGJpbmFyeURhdGEgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogIHJlc291cmNlVHlwZSAtIG51bWJlclxuICAgICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVQQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFDZXJ0aWZpY2F0ZXMgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBUQVNpZ25hdHVyZSB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtieXRlW119IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAgICogIGJpbmFyeURhdGEgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogIHJlc291cmNlVHlwZSAtIG51bWJlclxuICAgICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVUQVNpZ25hdHVyZShjZXJ0aWZpY2F0ZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHBhcnNlIHJlc3VsdHMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlciB3aGVuIHVzaW5nIGFuIGVuY3J5cHRlZCBsaWNlbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ganNvbiByZXN1bHRzIHRvIHBhcnNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwYXJzZUNvcmVSZXN1bHRzKGpzb246IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVGhlIG1ldGhvZCBjYWxsIHNldHMgdGhlIGdpdmVuIFRDQ1BhcmFtcyB0byB0aGUgUkZJRCBzZXNzaW9uLiBUaGUgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgdG8gYmUgc2V0IGJlZm9yZSBzdGFydGluZyBSRklEIHNlc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIE9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgICAgXCJzZXJ2aWNlVXJsVEFcIjogXCJzb21lIHN0cmluZ1wiXG4gICAgICogICAgICBcInNlcnZpY2VVcmxQQVwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiAgICAgIFwicGZ4Q2VydFVybFwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiAgICAgIFwicGZ4Q2VydFwiOiBcImJhc2U2NCBlbmNvZGVkIGJpbmFyeVwiXG4gICAgICogICAgICBcInBmeFBhc3NQaHJhc2VcIjogXCJzb21lIHN0cmluZ1wiXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRUQ0NQYXJhbXMocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIERvY3VtZW50IFJlYWRlciB3aXRoIGRhdGFiYXNlIGJpbmFyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxpY2Vuc2UgTGljZW5zZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYiBEYXRhYmFzZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcldpdGhEYXRhYmFzZShsaWNlbnNlOiBhbnksIGRiOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2UgZnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlRnJhbWUoaW1hZ2U6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2Ugd2l0aCBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoaW1hZ2U6IGFueSwgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGEgc3RyZWFtIG9mIGZyYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ5dGVTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXRQYXJhbX0gcGFyYW1zIEltYWdlIGlucHV0IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVWaWRlb0ZyYW1lKGJ5dGVTdHJpbmc6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCBhbmQgb3B0aW9ucyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlEXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgICAqICAgIHByb2Nlc3NQYXJhbXM/OiB7bmFtZT86IHZhbHVlNSwgbmFtZT86IHZhbHVlNiwgLi4ufX1cbiAgICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgICAqICB2YWx1ZSAtIGFueVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcldpdGhDYW1lcmFJREFuZE9wdHMoY2FtZXJhSUQ6IGFueSwgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGltYWdlcyB3aXRoIHBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aEltYWdlSW5wdXRQYXJhbXMoaW1hZ2U6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogYW55LCBtb2RlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxufSJdfQ==