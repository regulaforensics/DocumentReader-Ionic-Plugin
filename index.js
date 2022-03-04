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
    DocumentReaderOriginal.prototype.initializeReaderWithDatabasePath = function (license, path) { return cordova(this, "initializeReaderWithDatabasePath", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBT3ZCLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFOUMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztpQ0FsQkw7Ozs7OztJQW9DVyw2QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFB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QUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsdUJBQXVCLEVBQUUsR0FBRztJQUM1Qix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMz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LEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUss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RztnQkFDSixPQUFPLG1CQUFtQixDQUFBO1lBQzlCLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFD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O1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLG9CQUFvQixDQUFBO1lBQy9CLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lB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QXM0TW9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJTY2VuYXJpb1xuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29yZURldGFpbGVkU2NlbmFyaW8ge1xuICAgIHV2VG9yY2g/OiBib29sZWFuXG4gICAgZnJhbWVPcmllbnRhdGlvbj86IG51bWJlclxuICAgIGZhY2VFeHQ/OiBib29sZWFuXG4gICAgbXVsdGlQYWdlT2ZmPzogbnVtYmVyXG4gICAgc2VyaWVzUHJvY2Vzc01vZGU/OiBib29sZWFuXG4gICAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBmcmFtZUtXSFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbWFudWFsQ3JvcD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29yZURldGFpbGVkU2NlbmFyaW8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29yZURldGFpbGVkU2NlbmFyaW9cblxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICAgICAgcmVzdWx0LmZhY2VFeHQgPSBqc29uT2JqZWN0W1wiZmFjZUV4dFwiXVxuICAgICAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgICAgICByZXN1bHQuc2VyaWVzUHJvY2Vzc01vZGUgPSBqc29uT2JqZWN0W1wic2VyaWVzUHJvY2Vzc01vZGVcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dITGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dITGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICAgICAgcmVzdWx0LmZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGUgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcHRpb24gPSBqc29uT2JqZWN0W1wiY2FwdGlvblwiXVxuICAgICAgICByZXN1bHQuZGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0Lm1hbnVhbENyb3AgPSBqc29uT2JqZWN0W1wibWFudWFsQ3JvcFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlTWV0YURhdGEge1xuICAgIElEPzogbnVtYmVyXG4gICAgcm9sbEFuZ2xlPzogbnVtYmVyXG4gICAgYm91bmRzPzogQm91bmRzXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VNZXRhRGF0YSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlTWV0YURhdGFcblxuICAgICAgICByZXN1bHQuSUQgPSBqc29uT2JqZWN0W1wiSURcIl1cbiAgICAgICAgcmVzdWx0LnJvbGxBbmdsZSA9IGpzb25PYmplY3RbXCJyb2xsQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kcyA9IEJvdW5kcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRzXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQm91bmRzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEJvdW5kc1xuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY1JlYWRlckZpZWxkUmVjdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIGZpZWxkVHlwZT86IG51bWJlclxuICAgIGxpZ2h0VHlwZT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGZpZWxkTmFtZT86IHN0cmluZ1xuICAgIGxpZ2h0TmFtZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgZmllbGRSZWN0PzogRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkXG5cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGlnaHRUeXBlID0ganNvbk9iamVjdFtcImxpZ2h0VHlwZVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQubGlnaHROYW1lID0ganNvbk9iamVjdFtcImxpZ2h0TmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkUmVjdCA9IERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGZpZWxkcz86IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpZWxkc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpZWxkc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgdmFsaWRpdHk/OiBudW1iZXJcbiAgICBwcm9iYWJpbGl0eT86IG51bWJlclxuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgb3JpZ2luYWxWYWx1ZT86IHN0cmluZ1xuICAgIGJvdW5kUmVjdD86IFJlY3RcbiAgICBjb21wYXJpc29uPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsdWVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFZhbHVlID0ganNvbk9iamVjdFtcIm9yaWdpbmFsVmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb24gPSB7fVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baSBhcyB1bmtub3duIGFzIG51bWJlcl0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IERvY3VtZW50UmVhZGVyVmFsdWVcbiAgICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRcblxuICAgICAgICByZXN1bHQuZmllbGRUeXBlID0ganNvbk9iamVjdFtcImZpZWxkVHlwZVwiXVxuICAgICAgICByZXN1bHQubGNpZCA9IGpzb25PYmplY3RbXCJsY2lkXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkTmFtZSA9IGpzb25PYmplY3RbXCJsY2lkTmFtZVwiXVxuICAgICAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlcy5wdXNoKERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29vcmRpbmF0ZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb29yZGluYXRlXG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRQb3NpdGlvbiB7XG4gICAgZG9jRm9ybWF0PzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICBkcGk/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBpbnZlcnNlPzogbnVtYmVyXG4gICAgcGVyc3BlY3RpdmVUcj86IG51bWJlclxuICAgIG9iakFyZWE/OiBudW1iZXJcbiAgICBvYmpJbnRBbmdsZURldj86IG51bWJlclxuICAgIHJlc3VsdFN0YXR1cz86IG51bWJlclxuICAgIGFuZ2xlPzogbnVtYmVyXG4gICAgY2VudGVyPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRUb3A/OiBDb29yZGluYXRlXG4gICAgbGVmdEJvdHRvbT86IENvb3JkaW5hdGVcbiAgICByaWdodFRvcD86IENvb3JkaW5hdGVcbiAgICByaWdodEJvdHRvbT86IENvb3JkaW5hdGVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRWxlbWVudFBvc2l0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgICAgICByZXN1bHQuZmVhdHVyZVR5cGUgPSBqc29uT2JqZWN0W1wiZmVhdHVyZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gICAgY291bnQ/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5R3JvdXAge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5R3JvdXBcblxuICAgICAgICByZXN1bHQuY291bnQgPSBqc29uT2JqZWN0W1wiY291bnRcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUxpc3QucHVzaChJbWFnZVF1YWxpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBkb2N1bWVudElEPzogbnVtYmVyXG4gICAgZFR5cGU/OiBudW1iZXJcbiAgICBkRm9ybWF0PzogbnVtYmVyXG4gICAgZE1SWj86IGJvb2xlYW5cbiAgICBuYW1lPzogc3RyaW5nXG4gICAgSUNBT0NvZGU/OiBzdHJpbmdcbiAgICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBkWWVhcj86IHN0cmluZ1xuICAgIGRDb3VudHJ5TmFtZT86IHN0cmluZ1xuICAgIEZEU0lEPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgICAgIHJlc3VsdC5kVHlwZSA9IGpzb25PYmplY3RbXCJkVHlwZVwiXVxuICAgICAgICByZXN1bHQuZEZvcm1hdCA9IGpzb25PYmplY3RbXCJkRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuSUNBT0NvZGUgPSBqc29uT2JqZWN0W1wiSUNBT0NvZGVcIl1cbiAgICAgICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRZZWFyID0ganNvbk9iamVjdFtcImRZZWFyXCJdXG4gICAgICAgIHJlc3VsdC5kQ291bnRyeU5hbWUgPSBqc29uT2JqZWN0W1wiZENvdW50cnlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiRkRTSURcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJGRFNJRFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIGF0dGFjaG1lbnQ/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmF0dGFjaG1lbnQgPSBqc29uT2JqZWN0W1wiYXR0YWNobWVudFwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGFjdGl2ZU9wdGlvbklkeD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGVcblxuICAgICAgICByZXN1bHQuYWN0aXZlT3B0aW9uSWR4ID0ganNvbk9iamVjdFtcImFjdGl2ZU9wdGlvbklkeFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGVEYXRhIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZpbGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZURhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgc2VjdXJpdHlPYmplY3Q/OiBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcblxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3QgPSBDZXJ0aWZpY2F0ZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0XCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgICByZWFkaW5nVGltZT86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBwQVN0YXR1cz86IG51bWJlclxuICAgIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgICBmaWxlSUQ/OiBzdHJpbmdcbiAgICBmaWxlRGF0YT86IEZpbGVEYXRhXG4gICAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgICBkb2NGaWVsZHNUZXh0PzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNHcmFwaGljcz86IG51bWJlcltdXG4gICAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICAgICAgcmVzdWx0LnJlYWRpbmdUaW1lID0ganNvbk9iamVjdFtcInJlYWRpbmdUaW1lXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nU3RhdHVzID0ganNvbk9iamVjdFtcInJlYWRpbmdTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVJRCA9IGpzb25PYmplY3RbXCJmaWxlSURcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVzID0gU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlc1wiXSlcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc1RleHQucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jRmllbGRzR3JhcGhpY3MucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzR3JhcGhpY3NcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgICBkYXRhSGFzaEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHVuaWNvZGVWZXJzaW9uPzogc3RyaW5nXG4gICAgdmVyc2lvbj86IHN0cmluZ1xuICAgIGZpbGVzPzogRmlsZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFwcGxpY2F0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhSGFzaEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkYXRhSGFzaEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQudW5pY29kZVZlcnNpb24gPSBqc29uT2JqZWN0W1widW5pY29kZVZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZmlsZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpbGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmlsZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmlsZXMucHVzaChGaWxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbHVlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbHVlXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZhbHVlPzogVmFsdWVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF0dHJpYnV0ZVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICBmcmllbmRseU5hbWU/OiBWYWx1ZVxuICAgIGF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRob3JpdHkge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXV0aG9yaXR5XG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbiB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIHR5cGU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXh0ZW5zaW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV4dGVuc2lvblxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGl0eSB7XG4gICAgbm90QWZ0ZXI/OiBWYWx1ZVxuICAgIG5vdEJlZm9yZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZhbGlkaXR5IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICAgICAgcmVzdWx0Lm5vdEFmdGVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEFmdGVyXCJdKVxuICAgICAgICByZXN1bHQubm90QmVmb3JlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEJlZm9yZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgb3JpZ2luPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHN1YmplY3RQS0FsZ29yaXRobT86IHN0cmluZ1xuICAgIGZpbGVOYW1lPzogVmFsdWVcbiAgICB2YWxpZGl0eT86IFZhbGlkaXR5XG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgc3ViamVjdD86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENlcnRpZmljYXRlQ2hhaW5cblxuICAgICAgICByZXN1bHQub3JpZ2luID0ganNvbk9iamVjdFtcIm9yaWdpblwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0UEtBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic3ViamVjdFBLQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5maWxlTmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5ID0gVmFsaWRpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbGlkaXR5XCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0ID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0XCJdKVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5leHRlbnNpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHRlbnNpb25zLnB1c2goRXh0ZW5zaW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduZXJJbmZvIHtcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhVG9IYXNoPzogc3RyaW5nXG4gICAgZGlnZXN0QWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2VyaWFsTnVtYmVyPzogVmFsdWVcbiAgICBzaWduYXR1cmU/OiBWYWx1ZVxuICAgIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpZ25lckluZm8ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2lnbmVySW5mb1xuXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhVG9IYXNoID0ganNvbk9iamVjdFtcImRhdGFUb0hhc2hcIl1cbiAgICAgICAgcmVzdWx0LmRpZ2VzdEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkaWdlc3RBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl0pXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdEtleUlkZW50aWZpZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdEtleUlkZW50aWZpZXJcIl0pXG4gICAgICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gICAgZmlsZVJlZmVyZW5jZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBvYmplY3RUeXBlPzogc3RyaW5nXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVySW5mb3M/OiBTaWduZXJJbmZvW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RcblxuICAgICAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lm9iamVjdFR5cGUgPSBqc29uT2JqZWN0W1wib2JqZWN0VHlwZVwiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcy5wdXNoKFNpZ25lckluZm8uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gICAgYVRRQT86IG51bWJlclxuICAgIGJpdFJhdGVSPzogbnVtYmVyXG4gICAgYml0UmF0ZVM/OiBudW1iZXJcbiAgICBjaGlwVHlwZUE/OiBudW1iZXJcbiAgICBtaWZhcmVNZW1vcnk/OiBudW1iZXJcbiAgICByZmlkVHlwZT86IG51bWJlclxuICAgIHNBSz86IG51bWJlclxuICAgIHN1cHBvcnQ0PzogYm9vbGVhblxuICAgIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gICAgYVRRQj86IHN0cmluZ1xuICAgIGFUUj86IHN0cmluZ1xuICAgIGJhdWRyYXRlMT86IHN0cmluZ1xuICAgIGJhdWRyYXRlMj86IHN0cmluZ1xuICAgIHVJRD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDYXJkUHJvcGVydGllc1xuXG4gICAgICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVSID0ganNvbk9iamVjdFtcImJpdFJhdGVSXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUyA9IGpzb25PYmplY3RbXCJiaXRSYXRlU1wiXVxuICAgICAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgICAgICByZXN1bHQubWlmYXJlTWVtb3J5ID0ganNvbk9iamVjdFtcIm1pZmFyZU1lbW9yeVwiXVxuICAgICAgICByZXN1bHQucmZpZFR5cGUgPSBqc29uT2JqZWN0W1wicmZpZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnQ0ID0ganNvbk9iamVjdFtcInN1cHBvcnQ0XCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0TWlmYXJlID0ganNvbk9iamVjdFtcInN1cHBvcnRNaWZhcmVcIl1cbiAgICAgICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgICAgICByZXN1bHQuYVRSID0ganNvbk9iamVjdFtcImFUUlwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUxID0ganNvbk9iamVjdFtcImJhdWRyYXRlMVwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgICAgICByZXN1bHQudUlEID0ganNvbk9iamVjdFtcInVJRFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGEge1xuICAgIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICAgIHRvdGFsQnl0ZXNTZW50PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gICAgcHJvY2Vzc1RpbWU/OiBudW1iZXJcbiAgICBjYXJkUHJvcGVydGllcz86IENhcmRQcm9wZXJ0aWVzXG4gICAgc2Vzc2lvbkRhdGFTdGF0dXM/OiBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcbiAgICBhY2Nlc3NDb250cm9scz86IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlW11cbiAgICBhcHBsaWNhdGlvbnM/OiBBcHBsaWNhdGlvbltdXG4gICAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSRklEU2Vzc2lvbkRhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNlc3Npb25EYXRhXG5cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNSZWNlaXZlZCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzUmVjZWl2ZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5leHRMZVN1cHBvcnQgPSBqc29uT2JqZWN0W1wiZXh0TGVTdXBwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgICAgICByZXN1bHQuY2FyZFByb3BlcnRpZXMgPSBDYXJkUHJvcGVydGllcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2FyZFByb3BlcnRpZXNcIl0pXG4gICAgICAgIHJlc3VsdC5zZXNzaW9uRGF0YVN0YXR1cyA9IFJGSURTZXNzaW9uRGF0YVN0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic2Vzc2lvbkRhdGFTdGF0dXNcIl0pXG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucy5wdXNoKEFwcGxpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbnNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdHMucHVzaChTZWN1cml0eU9iamVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1xuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnR5cGVOYW1lID0ganNvbk9iamVjdFtcInR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZWxlbWVudHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbGVtZW50cy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBERjQxN0luZm9cblxuICAgICAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgICAgIHJlc3VsdC5jb2x1bW5zID0ganNvbk9iamVjdFtcImNvbHVtbnNcIl1cbiAgICAgICAgcmVzdWx0LnJvd3MgPSBqc29uT2JqZWN0W1wicm93c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGFTdGF0dXMge1xuICAgIEFBPzogbnVtYmVyXG4gICAgQkFDPzogbnVtYmVyXG4gICAgQ0E/OiBudW1iZXJcbiAgICBQQT86IG51bWJlclxuICAgIFBBQ0U/OiBudW1iZXJcbiAgICBUQT86IG51bWJlclxuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTZXNzaW9uRGF0YVN0YXR1c1xuXG4gICAgICAgIHJlc3VsdC5BQSA9IGpzb25PYmplY3RbXCJBQVwiXVxuICAgICAgICByZXN1bHQuQkFDID0ganNvbk9iamVjdFtcIkJBQ1wiXVxuICAgICAgICByZXN1bHQuQ0EgPSBqc29uT2JqZWN0W1wiQ0FcIl1cbiAgICAgICAgcmVzdWx0LlBBID0ganNvbk9iamVjdFtcIlBBXCJdXG4gICAgICAgIHJlc3VsdC5QQUNFID0ganNvbk9iamVjdFtcIlBBQ0VcIl1cbiAgICAgICAgcmVzdWx0LlRBID0ganNvbk9iamVjdFtcIlRBXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQge1xuICAgIGJhcmNvZGVUeXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgcGRmNDE3SW5mbz86IFBERjQxN0luZm9cbiAgICBkYXRhPzogYW55W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRcblxuICAgICAgICByZXN1bHQuYmFyY29kZVR5cGUgPSBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnBkZjQxN0luZm8gPSBQREY0MTdJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJwZGY0MTdJbmZvXCJdKVxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjaGVja3M/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuY2hlY2tzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hlY2tzLnB1c2goRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjay5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2hlY2tzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlPzogbnVtYmVyXG4gICAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGVOYW1lPzogc3RyaW5nXG4gICAgZWxlbWVudERpYWdub3NlTmFtZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2UgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50RGlhZ25vc2VOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZU5hbWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBhY3Rpb24/OiBudW1iZXJcbiAgICByZXN1bHRzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG4gICAgZXJyb3I/OiBEb2N1bWVudFJlYWRlckV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LmFjdGlvbiA9IGpzb25PYmplY3RbXCJhY3Rpb25cIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24ge1xuICAgIG5vdGlmaWNhdGlvbj86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBsb2NhbGl6ZWRNZXNzYWdlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHN0cmluZz86IHN0cmluZ1xuICAgIHN0YWNrVHJhY2U/OiBTdGFja1RyYWNlRWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goU3RhY2tUcmFjZUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRocm93YWJsZSB7XG4gICAgbG9jYWxpemVkTWVzc2FnZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICBzdHJpbmc/OiBzdHJpbmdcbiAgICBzdGFja1RyYWNlPzogU3RhY2tUcmFjZUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUaHJvd2FibGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVGhyb3dhYmxlXG5cbiAgICAgICAgcmVzdWx0LmxvY2FsaXplZE1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibG9jYWxpemVkTWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5zdHJpbmcgPSBqc29uT2JqZWN0W1wic3RyaW5nXCJdXG4gICAgICAgIHJlc3VsdC5zdGFja1RyYWNlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFja1RyYWNlLnB1c2goU3RhY2tUcmFjZUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgICBsaW5lTnVtYmVyPzogbnVtYmVyXG4gICAgaXNOYXRpdmVNZXRob2Q/OiBib29sZWFuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgZmlsZU5hbWU/OiBzdHJpbmdcbiAgICBtZXRob2ROYW1lPzogc3RyaW5nXG4gICAgc3RyaW5nPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFN0YWNrVHJhY2VFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LmxpbmVOdW1iZXIgPSBqc29uT2JqZWN0W1wibGluZU51bWJlclwiXVxuICAgICAgICByZXN1bHQuaXNOYXRpdmVNZXRob2QgPSBqc29uT2JqZWN0W1wiaXNOYXRpdmVNZXRob2RcIl1cbiAgICAgICAgcmVzdWx0LmNsYXNzTmFtZSA9IGpzb25PYmplY3RbXCJjbGFzc05hbWVcIl1cbiAgICAgICAgcmVzdWx0LmZpbGVOYW1lID0ganNvbk9iamVjdFtcImZpbGVOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5tZXRob2ROYW1lID0ganNvbk9iamVjdFtcIm1ldGhvZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEtEQ2VydGlmaWNhdGUge1xuICAgIGJpbmFyeURhdGE/OiBzdHJpbmdcbiAgICByZXNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBwcml2YXRlS2V5Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBLRENlcnRpZmljYXRlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlSW5wdXRQYXJhbSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZUlucHV0UGFyYW1cblxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQQVJlc291cmNlc0lzc3VlciB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgZnJpZW5kbHlOYW1lPzogc3RyaW5nXG4gICAgYXR0cmlidXRlcz86IFBBQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFSZXNvdXJjZXNJc3N1ZXIge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFSZXNvdXJjZXNJc3N1ZXJcblxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBQXR0cmlidXRlIHtcbiAgICB0eXBlPzogc3RyaW5nXG4gICAgdmFsdWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEFBdHRyaWJ1dGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEFBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUQUNoYWxsZW5nZSB7XG4gICAgZGF0YT86IGFueVtdXG4gICAgYXV4UENEPzogc3RyaW5nXG4gICAgY2hhbGxlbmdlUElDQz86IHN0cmluZ1xuICAgIGhhc2hQSz86IHN0cmluZ1xuICAgIGlkUElDQz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBUQUNoYWxsZW5nZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUQUNoYWxsZW5nZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnB1c2goanNvbk9iamVjdFtcImRhdGFcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF1eFBDRCA9IGpzb25PYmplY3RbXCJhdXhQQ0RcIl1cbiAgICAgICAgcmVzdWx0LmNoYWxsZW5nZVBJQ0MgPSBqc29uT2JqZWN0W1wiY2hhbGxlbmdlUElDQ1wiXVxuICAgICAgICByZXN1bHQuaGFzaFBLID0ganNvbk9iamVjdFtcImhhc2hQS1wiXVxuICAgICAgICByZXN1bHQuaWRQSUNDID0ganNvbk9iamVjdFtcImlkUElDQ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBvcHRpY2FsPzogbnVtYmVyXG4gICAgZGV0YWlsc09wdGljYWw/OiBEZXRhaWxzT3B0aWNhbFxuICAgIHJmaWQ/OiBudW1iZXJcbiAgICBkZXRhaWxzUkZJRD86IERldGFpbHNSRklEXG4gICAgcG9ydHJhaXQ/OiBudW1iZXJcbiAgICBzdG9wTGlzdD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQub3B0aWNhbCA9IGpzb25PYmplY3RbXCJvcHRpY2FsXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzT3B0aWNhbCA9IERldGFpbHNPcHRpY2FsLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzT3B0aWNhbFwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWQgPSBqc29uT2JqZWN0W1wicmZpZFwiXVxuICAgICAgICByZXN1bHQuZGV0YWlsc1JGSUQgPSBEZXRhaWxzUkZJRC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0YWlsc1JGSURcIl0pXG4gICAgICAgIHJlc3VsdC5wb3J0cmFpdCA9IGpzb25PYmplY3RbXCJwb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuc3RvcExpc3QgPSBqc29uT2JqZWN0W1wic3RvcExpc3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0YWlsc09wdGljYWwge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBtcno/OiBudW1iZXJcbiAgICB0ZXh0PzogbnVtYmVyXG4gICAgZG9jVHlwZT86IG51bWJlclxuICAgIHNlY3VyaXR5PzogbnVtYmVyXG4gICAgaW1hZ2VRQT86IG51bWJlclxuICAgIGV4cGlyeT86IG51bWJlclxuICAgIHZkcz86IG51bWJlclxuICAgIHBhZ2VzQ291bnQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0YWlsc09wdGljYWwge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0YWlsc09wdGljYWxcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5tcnogPSBqc29uT2JqZWN0W1wibXJ6XCJdXG4gICAgICAgIHJlc3VsdC50ZXh0ID0ganNvbk9iamVjdFtcInRleHRcIl1cbiAgICAgICAgcmVzdWx0LmRvY1R5cGUgPSBqc29uT2JqZWN0W1wiZG9jVHlwZVwiXVxuICAgICAgICByZXN1bHQuc2VjdXJpdHkgPSBqc29uT2JqZWN0W1wic2VjdXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUUEgPSBqc29uT2JqZWN0W1wiaW1hZ2VRQVwiXVxuICAgICAgICByZXN1bHQuZXhwaXJ5ID0ganNvbk9iamVjdFtcImV4cGlyeVwiXVxuICAgICAgICByZXN1bHQudmRzID0ganNvbk9iamVjdFtcInZkc1wiXVxuICAgICAgICByZXN1bHQucGFnZXNDb3VudCA9IGpzb25PYmplY3RbXCJwYWdlc0NvdW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGFpbHNSRklEIHtcbiAgICBwYT86IG51bWJlclxuICAgIGNhPzogbnVtYmVyXG4gICAgYWE/OiBudW1iZXJcbiAgICB0YT86IG51bWJlclxuICAgIGJhYz86IG51bWJlclxuICAgIHBhY2U/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGFpbHNSRklEIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGFpbHNSRklEXG5cbiAgICAgICAgcmVzdWx0LnBhID0ganNvbk9iamVjdFtcInBhXCJdXG4gICAgICAgIHJlc3VsdC5jYSA9IGpzb25PYmplY3RbXCJjYVwiXVxuICAgICAgICByZXN1bHQuYWEgPSBqc29uT2JqZWN0W1wiYWFcIl1cbiAgICAgICAgcmVzdWx0LnRhID0ganNvbk9iamVjdFtcInRhXCJdXG4gICAgICAgIHJlc3VsdC5iYWMgPSBqc29uT2JqZWN0W1wiYmFjXCJdXG4gICAgICAgIHJlc3VsdC5wYWNlID0ganNvbk9iamVjdFtcInBhY2VcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWRFNOQ0RhdGEge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgaXNzdWluZ0NvdW50cnk/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogYW55XG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZEU05DRGF0YSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWRFNOQ0RhdGFcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lmlzc3VpbmdDb3VudHJ5ID0ganNvbk9iamVjdFtcImlzc3VpbmdDb3VudHJ5XCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmF0dXJlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGUgPSBCeXRlc0RhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlXCJdKVxuICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZXNEYXRhIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCeXRlc0RhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQnl0ZXNEYXRhXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQubGVuZ3RoID0ganNvbk9iamVjdFtcImxlbmd0aFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVXZGaWJlckVsZW1lbnQge1xuICAgIHJlY3RBcnJheT86IERvY1JlYWRlckZpZWxkUmVjdFtdXG4gICAgcmVjdENvdW50PzogbnVtYmVyXG4gICAgZXhwZWN0ZWRDb3VudD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyW11cbiAgICBsZW5ndGg/OiBudW1iZXJbXVxuICAgIGFyZWE/OiBudW1iZXJbXVxuICAgIGNvbG9yVmFsdWVzPzogbnVtYmVyW11cbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJVdkZpYmVyRWxlbWVudCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclV2RmliZXJFbGVtZW50XG5cbiAgICAgICAgcmVzdWx0LnJlY3RBcnJheSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJlY3RBcnJheS5wdXNoKERvY1JlYWRlckZpZWxkUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdEFycmF5XCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVjdENvdW50ID0ganNvbk9iamVjdFtcInJlY3RDb3VudFwiXVxuICAgICAgICByZXN1bHQuZXhwZWN0ZWRDb3VudCA9IGpzb25PYmplY3RbXCJleHBlY3RlZENvdW50XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wid2lkdGhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ3aWR0aFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC53aWR0aC5wdXNoKGpzb25PYmplY3RbXCJ3aWR0aFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGVuZ3RoID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsZW5ndGhcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsZW5ndGhcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGVuZ3RoLnB1c2goanNvbk9iamVjdFtcImxlbmd0aFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXJlYSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXJlYVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFyZWFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXJlYS5wdXNoKGpzb25PYmplY3RbXCJhcmVhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb2xvclZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29sb3JWYWx1ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb2xvclZhbHVlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb2xvclZhbHVlcy5wdXNoKGpzb25PYmplY3RbXCJjb2xvclZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICAgIGNoaXBQYWdlPzogbnVtYmVyXG4gICAgb3ZlcmFsbFJlc3VsdD86IG51bWJlclxuICAgIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gICAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gICAgcmZpZFJlc3VsdD86IG51bWJlclxuICAgIGhpZ2hSZXNvbHV0aW9uPzogYm9vbGVhblxuICAgIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgICB0ZXh0UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG4gICAgZG9jdW1lbnRQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgYmFyY29kZVBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBtcnpQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgaW1hZ2VRdWFsaXR5PzogSW1hZ2VRdWFsaXR5R3JvdXBbXVxuICAgIHJhd1Jlc3VsdD86IHN0cmluZ1xuICAgIGRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uPzogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cbiAgICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICAgIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG4gICAgZ2V0VGV4dEZpZWxkVmFsdWVCeVR5cGU/KHsgZmllbGRUeXBlLCBsY2lkID0gMCwgc291cmNlID0gLTEsIG9yaWdpbmFsID0gZmFsc2UgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBvcmlnaW5hbD86IGJvb2xlYW4gfSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICAgICAgaWYgKGZpZWxkID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgc291cmNlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbCA/IHZhbHVlLm9yaWdpbmFsVmFsdWUgOiB2YWx1ZS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHRGaWVsZFN0YXR1c0J5VHlwZShmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dFJlc3VsdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICAgICAgcmV0dXJuIGZpZWxkICE9IG51bGwgPyBmaWVsZC5zdGF0dXMgOiAwXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGU/KHsgZmllbGRUeXBlLCBzb3VyY2UgPSAtMSwgbGlnaHQgPSAtMSwgcGFnZUluZGV4ID0gLTEgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBsaWdodD86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmdyYXBoaWNSZXN1bHQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBjb25zdCBmb3VuZEZpZWxkcyA9IFtdXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5ncmFwaGljUmVzdWx0LmZpZWxkcylcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkVHlwZSA9PT0gZmllbGRUeXBlKVxyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcclxuICAgICAgICBpZiAoc291cmNlICE9PSAtMSlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5zb3VyY2VUeXBlICE9PSBzb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgaWYgKGxpZ2h0ICE9PSAtMSlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5saWdodFR5cGUgIT09IGxpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxyXG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IC0xKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnBhZ2VJbmRleCAhPT0gcGFnZUluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxyXG5cclxuICAgICAgICByZXR1cm4gZm91bmRGaWVsZHMubGVuZ3RoID4gMCA/IGZvdW5kRmllbGRzWzBdLnZhbHVlIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YWxpdHlSZXN1bHQoeyBpbWFnZVF1YWxpdHlDaGVja1R5cGUsIHNlY3VyaXR5RmVhdHVyZSA9IC0xLCBwYWdlSW5kZXggPSAwIH06IHsgaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlOiBudW1iZXIsIHNlY3VyaXR5RmVhdHVyZT86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHRTdW0gPSAyXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VRdWFsaXR5ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cclxuXHJcbiAgICAgICAgbGV0IGltYWdlUXVhbGl0eUdyb3VwXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXEgb2YgdGhpcy5pbWFnZVF1YWxpdHkpXHJcbiAgICAgICAgICAgIGlmIChpcSAhPSBudWxsICYmIGlxLnBhZ2VJbmRleCA9PSBwYWdlSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBpbWFnZVF1YWxpdHlHcm91cCA9IGlxXHJcbiAgICAgICAgaWYgKGltYWdlUXVhbGl0eUdyb3VwID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBpbWFnZVF1YWxpdHlHcm91cC5pbWFnZVF1YWxpdHlMaXN0KVxyXG4gICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3VyaXR5RmVhdHVyZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFN1bSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3VsdCA9PT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3VtID0gZmllbGQucmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmZlYXR1cmVUeXBlID09PSBzZWN1cml0eUZlYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0U3VtXHJcbiAgICB9XHJcblxyXG4gICAgZmluZEJ5VHlwZUFuZExjaWQ/KHR5cGU6IG51bWJlciwgbGNpZDogbnVtYmVyKTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xyXG4gICAgICAgIGxldCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IGZvdW5kRmllbGRzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChmaWVsZCBvZiB0aGlzLnRleHRSZXN1bHQuZmllbGRzKVxyXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSB0eXBlKVxyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHMubGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIGxldCBmb3VuZEZpZWxkID0gbnVsbFxyXG5cclxuICAgICAgICBmb3IgKGZpZWxkIG9mIGZvdW5kRmllbGRzKVxyXG4gICAgICAgICAgICBpZiAobGNpZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZCA9IGZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubGNpZCA9PT0gbGNpZClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmxjaWQgPT09IGxjaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvdW5kRmllbGRcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlTb3VyY2UoZmllbGQ6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLCBzb3VyY2VUeXBlOiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclZhbHVlIHtcclxuICAgICAgICBsZXQgdmFsdWVcclxuICAgICAgICBpZiAoc291cmNlVHlwZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbXJ6VmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDMpXHJcbiAgICAgICAgICAgIGlmIChtcnpWYWwgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBtcnpWYWxcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMTgpXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IHZpc3VhbFZhbCA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxNylcclxuICAgICAgICAgICAgcmV0dXJuIHZpc3VhbFZhbCAhPSBudWxsID8gdmlzdWFsVmFsIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZmllbGQudmFsdWVzKVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5zb3VyY2VUeXBlID09PSBzb3VyY2VUeXBlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuXG4gICAgICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFJlc3VsdCA9IGpzb25PYmplY3RbXCJvdmVyYWxsUmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMgPSBqc29uT2JqZWN0W1wicHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZSA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVwiXVxuICAgICAgICByZXN1bHQuZWxhcHNlZFRpbWVSRklEID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lUkZJRFwiXVxuICAgICAgICByZXN1bHQubW9yZVBhZ2VzQXZhaWxhYmxlID0ganNvbk9iamVjdFtcIm1vcmVQYWdlc0F2YWlsYWJsZVwiXVxuICAgICAgICByZXN1bHQucmZpZFJlc3VsdCA9IGpzb25PYmplY3RbXCJyZmlkUmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5oaWdoUmVzb2x1dGlvbiA9IGpzb25PYmplY3RbXCJoaWdoUmVzb2x1dGlvblwiXVxuICAgICAgICByZXN1bHQuZ3JhcGhpY1Jlc3VsdCA9IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZ3JhcGhpY1Jlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LnRleHRSZXN1bHQgPSBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInRleHRSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbi5wdXNoKEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHkucHVzaChJbWFnZVF1YWxpdHlHcm91cC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3UmVzdWx0ID0ganNvbk9iamVjdFtcInJhd1Jlc3VsdFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlLnB1c2goRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0c1N0YXR1cy5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhdHVzXCJdKVxuICAgICAgICByZXN1bHQudmRzbmNEYXRhID0gVkRTTkNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2ZHNuY0RhdGFcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBUFRVUkVfVklERU86IDEsXG4gICAgQ0FQVFVSRV9GUkFNRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5zSWRlbnRpdHlEb2N1bWVudDogMTUsXG4gICAgZHRJZGVudGl0eUNhcmRmb3JSZXNpZGVuY2U6IDE2LFxuICAgIGR0VHJhdmVsZG9jdW1lbnQ6IDE3LFxuICAgIGR0T3RoZXI6IDk5LFxuICAgIGR0VmlzYUlEMjogMjksXG4gICAgZHRWaXNhSUQzOiAzMCxcbiAgICBkdFJlZ2lzdHJhdGlvbkNlcnRpZmljYXRlOiAzMSxcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5kdHVjdGlvblBlcm1pdDogNDIsXG4gICAgZHRDb21tZXJjaWFsTmV3UGVybWl0OiA0MyxcbiAgICBkdENvbmNlYWxlZENhcnJ5TGljZW5zZTogNDQsXG4gICAgZHRDb25jZWFsZWRGaXJlYXJtUGVybWl0OiA0NSxcbiAgICBkdENvbmRpdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDQ2LFxuICAgIGR0RGVwYXJ0bWVudE9mVmV0ZXJhbnNBZmZhaXJzSWRlbnRpdHlDYXJkOiA0NyxcbiAgICBkdERpcGxvbWF0aWNEcml2aW5nTGljZW5zZTogNDgsXG4gICAgZHREcml2aW5nTGljZW5zZTogNDksXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXRVbmRlcjIxOiA1MixcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXQ6IDUzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMTg6IDU0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMjE6IDU1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDU2LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiA1NyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogNTgsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZ2lzdGVyZWRPZmZlbmRlcjogNTksXG4gICAgZHREcml2aW5nTGljZW5zZVJlZHRpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWR0aWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiA4NixcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiAxMDMsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5kdHVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlZHRpY3RlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMTQ4LFxuICAgIGR0UmVkdGljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlZHRpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkOiAxNjAsXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lkdGF0aW9uQ2FyZDogMTg1LFxuICAgIGR0QVBFSENhcmQ6IDE4NixcbiAgICBkdENvdXBvbnRvRHJpdmluZ0xpY2Vuc2U6IDE4NyxcbiAgICBkdENyZXdNZW1iZXJDZXJ0aWZpY2F0ZTogMTg4LFxuICAgIGR0RG9jdW1lbnRGb3JSZXR1cm46IDE4OSxcbiAgICBkdEVDYXJkOiAxOTAsXG4gICAgZHRFbXBsb3ltZW50Q2FyZDogMTkxLFxuICAgIGR0SEtTQVJJbW1pZ3JhdGlvbkZvcm06IDE5MixcbiAgICBkdEltbWlncmFudGNhcmQ6IDE5MyxcbiAgICBkdExhYm91ckNhcmQ6IDE5NCxcbiAgICBkdExhaXNzZXpQYXNzZXI6IDE5NSxcbiAgICBkdExhd3llcklkZW50aXR5Q2VydGlmaWNhdGU6IDE5NixcbiAgICBkdExpY2Vuc2VDYXJkOiAxOTcsXG4gICAgZHRQYXNzcG9ydFN0YXRlbGVzczogMTk4LFxuICAgIGR0UGFzc3BvcnRDaGlsZDogMTk5LFxuICAgIGR0UGFzc3BvcnRDb25zdWxhcjogMjAwLFxuICAgIGR0UGFzc3BvcnREaXBsb21hdGljU2VydmljZTogMjAxLFxuICAgIGR0UGFzc3BvcnRPZmZpY2lhbDogMjAyLFxuICAgIGR0UGFzc3BvcnRQcm92aXNpb25hbDogMjAzLFxuICAgIGR0UGFzc3BvcnRTcGVjaWFsOiAyMDQsXG4gICAgZHRQZXJtaXNzaW9udG90aGVMb2NhbEJvcmRlclRyYWZmaWM6IDIwNSxcbiAgICBkdFNFREVTT0xDYXJkOiAyMDcsXG4gICAgZHRTb2NpYWxDYXJkOiAyMDgsXG4gICAgZHRUQkNhcmQ6IDIwOSxcbiAgICBkdFZlaGljbGVQYXNzcG9ydDogMjEwLFxuICAgIGR0V0RvY3VtZW50OiAyMTEsXG4gICAgZHREaXBsb21hdGljSWRlbnRpdHlDYXJkOiAyMTIsXG4gICAgZHRDb25zdWxhcklkZW50aXR5Q2FyZDogMjEzLFxuICAgIGR0SW5jb21lVGF4Q2FyZDogMjE0LFxuICAgIGR0UmVzaWRlbmNlUGVybWl0OiAyMTUsXG4gICAgZHREb2N1bWVudE9mSWRlbnRpdHk6IDIxNixcbiAgICBkdEJvcmRlckNyb3NzaW5nUGVybWl0OiAyMTcsXG4gICAgZHRQYXNzcG9ydExpbWl0ZWRWYWxpZGl0eTogMjE4LFxuICAgIGR0U0lNQ2FyZDogMjE5LFxuICAgIGR0VGF4Q2FyZDogMjIwLFxuICAgIGR0Q29tcGFueUNhcmQ6IDIyMSxcbiAgICBkdERvbWVzdGljUGFzc3BvcnQ6IDIyMixcbiAgICBkdElkZW50aXR5Q2VydGlmaWNhdGU6IDIyMyxcbiAgICBkdFJlc2lkZW50SWRDYXJkOiAyMjQsXG4gICAgZHRBcm1lZEZvcmNlc0lkZW50aXR5Q2FyZDogMjI1LFxuICAgIGR0UHJvZmVzc2lvbmFsQ2FyZDogMjI2LFxuICAgIGR0UmVnaXN0cmF0aW9uU3RhbXA6IDIyNyxcbiAgICBkdERyaXZlckNhcmQ6IDIyOCxcbiAgICBkdERyaXZlclRyYWluaW5nQ2VydGlmaWNhdGU6IDIyOSxcbiAgICBkdFF1YWxpZmljYXRpb25Ecml2aW5nTGljZW5zZTogMjMwLFxuICAgIGR0TWVtYmVyc2hpcENhcmQ6IDIzMSxcbiAgICBkdFB1YmxpY1ZlaGljbGVEcml2ZXJBdXRob3JpdHlDYXJkOiAyMzIsXG4gICAgZHRNYXJpbmVMaWNlbnNlOiAyMzMsXG4gICAgZHRUZW1wb3JhcnlMZWFybmVyRHJpdmluZ0xpY2Vuc2U6IDIzNCxcbiAgICBkdFRlbXBvcmFyeUNvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMjM1LFxuICAgIGR0SW50ZXJpbUluc3RydWN0aW9uYWxQZXJtaXQ6IDIzNixcbiAgICBkdENlcnRpZmljYXRlT2ZDb21wZXRlbmN5OiAyMzcsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mUHJvZmljaWVuY3k6IDIzOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBJRDNfeDI6IDUsXG4gICAgQ1VTVE9NOiAxMDAwLFxuICAgIEZMRVhJQkxFOiAxMDAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyQWN0aW9uID0ge1xuICAgIENPTVBMRVRFOiAxLFxuICAgIFBST0NFU1M6IDAsXG4gICAgQ0FOQ0VMOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIE5PVElGSUNBVElPTjogNSxcbiAgICBQUk9DRVNTX1dISVRFX1VWX0lNQUdFUzogNixcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uRW51bSA9IHtcbiAgICBOQVRJVkVfSkFWQV9FWENFUFRJT046IDAsXG4gICAgRE9DVU1FTlRfUkVBREVSX1NUQVRFX0VYQ0VQVElPTjogMSxcbiAgICBET0NVTUVOVF9SRUFERVJfV1JPTkdfSU5QVVQ6IDIsXG4gICAgSU5JVElBTElaQVRJT05fRkFJTEVEOiAzLFxuICAgIERPQ1VNRU5UX1JFQURFUl9CTEVfRVhDRVBUSU9OOiAyMDEsXG4gICAgREJfRE9XTkxPQURfRVJST1I6IDMwMSxcbiAgICBMSUNFTlNFX0FCU0VOVF9PUl9DT1JSVVBURUQ6IDEwMSxcbiAgICBMSUNFTlNFX0lOVkFMSURfREFURTogMTAyLFxuICAgIExJQ0VOU0VfSU5WQUxJRF9WRVJTSU9OOiAxMDMsXG4gICAgTElDRU5TRV9JTlZBTElEX0RFVklDRV9JRDogMTA0LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiAxMDUsXG4gICAgTElDRU5TRV9OT19DQVBBQklMSVRJRVM6IDEwNixcbiAgICBMSUNFTlNFX05PX0FVVEhFTlRJQ0lUWTogMTA3LFxuICAgIExJQ0VOU0VfTk9fREFUQUJBU0U6IDExMCxcbiAgICBMSUNFTlNFX0RBVEFCQVNFX0lOQ09SUkVDVDogMTExLFxuICAgIEZFQVRVUkVfQkxVRVRPT1RIX0xFX05PVF9TVVBQT1JURUQ6IDcwMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja0RpYWdub3NlID0ge1xuICAgIFVOS05PV046IDAsXG4gICAgUEFTUzogMSxcbiAgICBJTlZBTElEX0lOUFVUX0RBVEE6IDIsXG4gICAgSU5URVJOQUxfRVJST1I6IDMsXG4gICAgRVhDRVBUSU9OX0lOX01PRFVMRTogNCxcbiAgICBVTkNFUlRBSU5fVkVSSUZJQ0FUSU9OOiA1LFxuICAgIE5FQ0VTU0FSWV9JTUFHRV9OT1RfRk9VTkQ6IDcsXG4gICAgUEhPVE9fU0lERVNfTk9UX0ZPVU5EOiA4LFxuICAgIElOVkFMSURfQ0hFQ0tTVU06IDEwLFxuICAgIFNZTlRBWF9FUlJPUjogMTEsXG4gICAgTE9HSUNfRVJST1I6IDEyLFxuICAgIFNPVVJDRVNfQ09NUEFSSVNPTl9FUlJPUjogMTMsXG4gICAgRklFTERTX0NPTVBBUklTT05fTE9HSUNfRVJST1I6IDE0LFxuICAgIElOVkFMSURfRklFTERfRk9STUFUOiAxNSxcbiAgICBUUlVFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMSxcbiAgICBGSVhFRF9QQVRURVJOX0VSUk9SOiAyMixcbiAgICBMT1dfQ09OVFJBU1RfSU5fSVJfTElHSFQ6IDIzLFxuICAgIElOQ09SUkVDVF9CQUNLR1JPVU5EX0xJR0hUOiAyNCxcbiAgICBCQUNLR1JPVU5EX0NPTVBBUklTT05fRVJST1I6IDI1LFxuICAgIElOQ09SUkVDVF9URVhUX0NPTE9SOiAyNixcbiAgICBQSE9UT19GQUxTRV9MVU1JTklTQ0VOQ0U6IDI3LFxuICAgIFRPT19NVUNIX1NISUZUOiAyOCxcbiAgICBGSUJFUlNfTk9UX0ZPVU5EOiAzMCxcbiAgICBUT09fTUFOWV9PQkpFQ1RTOiAzMSxcbiAgICBTUEVDS1NfSU5fVVY6IDMzLFxuICAgIFRPT19MT1dfUkVTT0xVVElPTjogMzQsXG4gICAgSU5WSVNJQkxFX0VMRU1FTlRfUFJFU0VOVDogNDAsXG4gICAgVklTSUJMRV9FTEVNRU5UX0FCU0VOVDogNDEsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfQ09MT1JFRDogNDIsXG4gICAgRUxFTUVOVF9TSE9VTERfQkVfR1JBWVNDQUxFOiA0MyxcbiAgICBQSE9UT19XSElURV9JUl9ET05UX01BVENIOiA0NCxcbiAgICBVVl9EVUxMX1BBUEVSX01SWjogNTAsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX01SWjogNTEsXG4gICAgVVZfRFVMTF9QQVBFUl9QSE9UTzogNTIsXG4gICAgVVZfRFVMTF9QQVBFUl9CTEFOSzogNTMsXG4gICAgVVZfRFVMTF9QQVBFUl9FUlJPUjogNTQsXG4gICAgRkFMU0VfTFVNSU5JU0NFTkNFX0lOX0JMQU5LOiA1NSxcbiAgICBCQURfQVJFQV9JTl9BWElBTDogNjAsXG4gICAgRkFMU0VfSVBJX1BBUkFNRVRFUlM6IDY1LFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfSElHSExJR0hUX0lSOiA4MCxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0dMQVJFU19JTl9QSE9UT19BUkVBOiA4MSxcbiAgICBPVklfSVJfSU5WSVNJQkxFOiA5MCxcbiAgICBPVklfSU5TVUZGSUNJRU5UX0FSRUE6IDkxLFxuICAgIE9WSV9DT0xPUl9JTlZBUklBQkxFOiA5MixcbiAgICBPVklfQkFEX0NPTE9SX0ZST05UOiA5MyxcbiAgICBPVklfQkFEX0NPTE9SX1NJREU6IDk0LFxuICAgIE9WSV9XSURFX0NPTE9SX1NQUkVBRDogOTUsXG4gICAgT1ZJX0JBRF9DT0xPUl9QRVJDRU5UOiA5NixcbiAgICBIT0xPR1JBTV9FTEVNRU5UX0FCU0VOVDogMTAwLFxuICAgIEhPTE9HUkFNX1NJREVfVE9QX0lNQUdFU19BQlNFTlQ6IDEwMSxcbiAgICBIT0xPR1JBTV9FTEVNRU5UX1BSRVNFTlQ6IDEwMixcbiAgICBIT0xPR1JBTV9GUkFNRVNfSVNfQUJTRU5UOiAxMDMsXG4gICAgSE9MT0dSQU1fSE9MT19GSUVMRF9JU19BQlNFTlQ6IDEwNCxcbiAgICBQSE9UT19QQVRURVJOX0lOVEVSUlVQVEVEOiAxMTAsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEOiAxMTEsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfQ09MT1JTOiAxMTIsXG4gICAgUEhPVE9fUEFUVEVSTl9JUl9WSVNJQkxFOiAxMTMsXG4gICAgUEhPVE9fUEFUVEVSTl9OT1RfSU5URVJTRUNUOiAxMTQsXG4gICAgUEhPVE9fU0laRV9JU19XUk9ORzogMTE1LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5WQUxJRF9DT0xPUjogMTE2LFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRF9WRVJUOiAxMTcsXG4gICAgUEhPVE9fUEFUVEVSTl9QQVRURVJOX05PVF9GT1VORDogMTE4LFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTE5LFxuICAgIFBIT1RPX0lTX05PVF9SRUNUQU5HTEU6IDEyMCxcbiAgICBQSE9UT19DT1JORVJTX0lTX1dST05HOiAxMjEsXG4gICAgRE9DVU1FTlRfSVNfQ0FOQ0VMTElORzogMTIyLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0JMVUU6IDEzMCxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9HUkVFTjogMTMxLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX1JFRDogMTMyLFxuICAgIFRFWFRfU0hPVUxEX0JFX0JMQUNLOiAxMzMsXG4gICAgQkFSQ09ERV9XQVNfUkVBRF9XSVRIX0VSUk9SUzogMTQwLFxuICAgIEJBUkNPREVfREFUQV9GT1JNQVRfRVJST1I6IDE0MSxcbiAgICBCQVJDT0RFX1NJWkVfUEFSQU1TX0VSUk9SOiAxNDIsXG4gICAgTk9UX0FMTF9CQVJDT0RFU19SRUFEOiAxNDMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9QT1JUUkFJVFNfRElGRkVSOiAxNTAsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX1JFUExZOiAxNTEsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9TRVJWSUNFX0VSUk9SOiAxNTIsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT1RfRU5PVUdIX0lNQUdFUzogMTUzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fTElWRV9QSE9UTzogMTU0LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9MSUNFTlNFOiAxNTUsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19QT1JUUkFJVF9ERVRFQ1RFRDogMTU2LFxuICAgIE1PQklMRV9JTUFHRVNfVU5TVUlUQUJMRV9MSUdIVF9DT05ESVRJT05TOiAxNjAsXG4gICAgTU9CSUxFX0lNQUdFU19XSElURV9VVl9OT19ESUZGRVJFTkNFOiAxNjEsXG4gICAgRklOR0VSUFJJTlRTX0NPTVBBUklTT05fTUlTTUFUQ0g6IDE3MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfTk9UX0RFVEVDVEVEOiAxODAsXG4gICAgSE9MT19QSE9UT19GQUNFX0NPTVBBUklTT05fRkFJTEVEOiAxODEsXG4gICAgSE9MT19QSE9UT19GQUNFX0dMQVJFX0lOX0NFTlRFUl9BQlNFTlQ6IDE4MixcbiAgICBIT0xPX0VMRU1FTlRfU0hBUEVfRVJST1I6IDE4MyxcbiAgICBBTEdPUklUSE1fU1RFUFNfRVJST1I6IDE4NCxcbiAgICBIT0xPX0FSRUFTX05PVF9MT0FERUQ6IDE4NSxcbiAgICBGSU5JU0hFRF9CWV9USU1FT1VUOiAxODYsXG4gICAgTEFTVF9ESUFHTk9TRV9WQUxVRTogMTkwLFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrUmVzdWx0ID0ge1xuICAgIENIX0NIRUNLX0VSUk9SOiAwLFxuICAgIENIX0NIRUNLX09LOiAxLFxuICAgIENIX0NIRUNLX1dBU19OT1RfRE9ORTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVHcmFwaGljRmllbGRUeXBlID0ge1xuICAgIEdGX1BPUlRSQUlUOiAyMDEsXG4gICAgR0ZfRklOR0VSUFI6IDIwMixcbiAgICBHRl9FWUU6IDIwMyxcbiAgICBHRl9TSUdOQVRVUkU6IDIwNCxcbiAgICBHRl9CQVJfQ09ERTogMjA1LFxuICAgIEdGX1BST09GX09GX0NJVElaRU5TSElQOiAyMDYsXG4gICAgR0ZfRE9DVU1FTlRfSU1BR0U6IDIwNyxcbiAgICBHRl9DT0xPUl9EWU5BTUlDOiAyMDksXG4gICAgR0ZfR0hPU1RfUE9SVFJBSVQ6IDIxMCxcbiAgICBHRl9TVEFNUDogMjExLFxuICAgIEdGX1BPUlRSQUlUX09GX0NISUxEOiAyMTIsXG4gICAgR0ZfT1RIRVI6IDI1MCxcbiAgICBHRl9GSU5HRVJfTEVGVF9USFVNQjogMzAwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0lOREVYOiAzMDEsXG4gICAgR0ZfRklOR0VSX0xFRlRfTUlERExFOiAzMDIsXG4gICAgR0ZfRklOR0VSX0xFRlRfUklORzogMzAzLFxuICAgIEdGX0ZJTkdFUl9MRUZUX0xJVFRMRTogMzA0LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9USFVNQjogMzA1LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9JTkRFWDogMzA2LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9NSURETEU6IDMwNyxcbiAgICBHRl9GSU5HRVJfUklHSFRfUklORzogMzA4LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6IDMwOSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BPUlRSQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJQUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5nZXJwcmludFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRVlFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklyaXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1NJR05BVFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0JBUl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhcmNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BST09GX09GX0NJVElaRU5TSElQOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb29mIG9mIGNpdGl6ZW5zaGlwXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9ET0NVTUVOVF9JTUFHRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBpbWFnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfQ09MT1JfRFlOQU1JQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2xvciBkeW5hbWljc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfR0hPU1RfUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2hvc3QgcG9ydHJhaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1NUQU1QOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YW1wXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QT1JUUkFJVF9PRl9DSElMRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdCBvZiBjaGlsZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfT1RIRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX1RIVU1COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgdGh1bWJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX0lOREVYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgaW5kZXggZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9NSURETEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBtaWRkbGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9SSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgcmluZyBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX0xJVFRMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IGxpdHRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9USFVNQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCB0aHVtYlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX0lOREVYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IGluZGV4IGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX01JRERMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBtaWRkbGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfUklORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCByaW5nIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBsaXR0bGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVJbWFnZVF1YWxpdHlDaGVja1R5cGUgPSB7XG4gICAgSVFDX0lNQUdFX0dMQVJFUzogMCxcbiAgICBJUUNfSU1BR0VfRk9DVVM6IDEsXG4gICAgSVFDX0lNQUdFX1JFU09MVVRJT046IDIsXG4gICAgSVFDX0lNQUdFX0NPTE9STkVTUzogMyxcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDQsXG4gICAgSVFDX0JPVU5EUzogNSxcbiAgICBJUUNfU0NSRUVOX0NBUFRVUkU6IDYsXG4gICAgSVFDX1BPUlRSQUlUOiA3LFxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyA9IHtcbiAgICBFUlJfTERTX09LOiAxLFxuICAgIEVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzY0NyxcbiAgICBSUl9MRFNfQVNOX05PVF9FTk9VR0hfREFUQTogLTIxNDc0ODM2NDYsXG4gICAgRVJSX0xEU19BU05fQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOiAtMjE0NzQ4MzY0NSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2NDAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfRU5DQVBfQ09OVEVOVFNfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjM5LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjM4LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYzMSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYyOSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjI4LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjcsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9ER19IQVNIRVNfSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjI2LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkZPX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYzMCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjUsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjQsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU05fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjIzLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSVNTVUVSX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYyMSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WQUxJRElUWV9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MjAsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTksXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9QS19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTgsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTcsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE2LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6IC0yMTQ3NDgzNjE1LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTQsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTMsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYxMixcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOX0FMR19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MTEsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAtMjE0NzQ4MzYxMCxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19VTlNJR05FRF9BVFRSU19JTkNPUlJFQ1RfREFUQTogLTIxNDc0ODM2MDksXG4gICAgRVJSX0xEU19JQ0FPX0xEU19PQkpFQ1RfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogLTIxNDc0ODM2MDAsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTogLTIxNDc0ODM1OTksXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IC0yMTQ3NDgzNTk4LFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAtMjE0NzQ4MzU5NyxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfRVJST1I6IC0yMTQ3NDgzNTk2LFxuICAgIEVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19TSUdORURfQVRUUlNfTUlTU0VEOiAtMjE0NzQ4MzU5NCxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0FOVF9GSU5EX0NFUlRJRklDQVRFOiAtMjE0NzQ4MzU5NSxcbiAgICBFUlJfTERTX0FVVEhfRVJST1I6IC0yMTQ3NDgzNTY4LFxuICAgIEVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAtMjE0NzQ4MzU2NyxcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfUFVCTElDX0tFWV9BTEdPUklUSE06IC0yMTQ3NDgzNTY2LFxuICAgIEVSUl9MRFNfQVVUSF9NRVNTRURfQUxHT1JJVEhNUzogLTIxNDc0ODM1NjUsXG4gICAgRVJSX0xEU19BVVRIX1BVQkxJQ19LRVlfREFUQV9JTlZBTElEOiAtMjE0NzQ4MzU2NCxcbiAgICBFUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfREFUQV9JTlZBTElEOiAtMjE0NzQ4MzU2MyxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDogLTIxNDc0ODM1NjIsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IC0yMTQ3NDgzNTYxLFxuICAgIEVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfREFUQV9JTkNPUlJFQ1Q6IC0yMTQ3NDgzNTYwLFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19OT1RfREVGSU5FRDogLTIxNDc0ODM1NTksXG4gICAgRVJSX0xEU19BVVRIX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IC0yMTQ3NDgzNTU4LFxuICAgIEVSUl9MRFNfREdfV1JPTkdfVEFIOiAtMjE0NzQ4MzUzNixcbiAgICBFUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogLTIxNDc0ODM1MzUsXG4gICAgRVJSX0xEU19CQVBfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6IC0yMTMwNzA2NDE1LFxuICAgIEVSUl9MRFNfUEFDRV9JTkZPX05PVF9BVkFJTEFCTEU6IC0yMTMwNzA2NDAwLFxuICAgIEVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogLTIxMzA3MDYzOTksXG4gICAgRVJSX0xEU19QQUNFX0tFWV9BR1JFRU1FTlRfQ0FOVF9JTklUSUFMSVpFOiAtMjEzMDcwNjM5OCxcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IC0yMTMwNzA2Mzk3LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOiAtMjEzMDcwNjM5NixcbiAgICBFUlJfTERTX1BBQ0VfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogLTIxMzA3MDYzOTUsXG4gICAgRVJSX0xEU19QQUNFX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfRk9STUFUOiAtMjEzMDcwNjM5NCxcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAtMjEzMDcwNjM5MyxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6IC0yMTMwNzA2MzkyLFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfUEVSRk9STTogLTIxMzA3MDYzOTEsXG4gICAgRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogLTIxMzA3MDYzOTAsXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX0lOQ09SUkVDVDogLTIxMzA3MDYzODksXG4gICAgRVJSX0xEU19QQUNFX0NBTV9EQVRBX0NBTlRfVkVSSUZZOiAtMjEzMDcwNjM4OCxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOiAtMjEzMDcwNjM4NyxcbiAgICBFUlJfTERTX1BBQ0VfSU1fU0NIRU1FX0lOQ09SUkVDVDogLTIxMzA3MDYzODYsXG4gICAgRVJSX0xEU19QQUNFX0lNX1JBTkRPTV9NQVBQSU5HX0ZBSUxFRDogLTIxMzA3MDYzODUsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTogLTIxMzA3MDYzODQsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfSU5GTzogLTIxMzA3MDYzODMsXG4gICAgRVJSX0xEU19DQV9JTkNPUlJFQ1RfVkVSU0lPTjogLTIxMzA3MDYzODIsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6IC0yMTMwNzA2MzgxLFxuICAgIEVSUl9MRFNfQ0FfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IC0yMTMwNzA2MzgwLFxuICAgIEVSUl9MRFNfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IC0yMTMwNzA2Mzc5LFxuICAgIEVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IC0yMTMwNzA2Mzc4LFxuICAgIEVSUl9MRFNfQ0FfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTogLTIxMzA3MDYzNzcsXG4gICAgRVJSX0xEU19DQV9OT05fTUFUQ0hJTkdfQVVUSF9UT0tFTlM6IC0yMTMwNzA2Mzc2LFxuICAgIEVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046IC0yMTMwNzA2MzY4LFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9CVUlMRF9DRVJUSUZJQ0FURV9DSEFJTjogLTIxMzA3MDYzNjcsXG4gICAgRVJSX0xEU19UQV9DQU5UX0ZJTkRfSVNfUFJJVkFURV9LRVk6IC0yMTMwNzA2MzY2LFxuICAgIEVSUl9MRFNfVEFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IC0yMTMwNzA2MzY1LFxuICAgIEVSUl9MRFNfVEFfU0lHTkFUVVJFX0JVSUxESU5HX0VSUk9SOiAtMjEzMDcwNjM2NCxcbiAgICBFUlJfTERTX1RBX0lOVkFMSURfS0VZX0FMR09SSVRITV9QQVJBTUVURVJTOiAtMjEzMDcwNjM2MyxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMjEzMDcwNjM1MixcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MzUxLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfUEFSQU1FVEVSUzogLTIxMzA3MDYzNTAsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOiAtMjEzMDcwNjM0OSxcbiAgICBFUlJfTERTX0FBX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYzNDgsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9SRUNPVkVSWV9TQ0hFTUU6IC0yMTMwNzA2MzQ3LFxuICAgIEVSUl9MRFNfQUFfSU5DT1JSRUNUX1RSQUlMRVI6IC0yMTMwNzA2MzQ2LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogLTIxMzA3MDYzNDUsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0NBTlRfRklORDogLTIxMzA3MDYzMjAsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjMxOSxcbiAgICBFUlJfTERTX1JJX1NFQ1RPUl9LRVlfSU5DT01QTEVURV9EQVRBOiAtMjEzMDcwNjMxOCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX01JU1NJTkdfTUFOREFUT1JZX0RBVEFfUEs6IC0yMTMwNzA2MzM2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDogLTIxMzA3MDYzMzQsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSEFUX1VOU1VQUE9SVEVEX1RFUk1JTkFMX1RZUEU6IC0yMTMwNzA2MzMzLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfVU5TVVBQT1JURUQ6IDEzNTI2NjMxMCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOVkFMSURfUEFSQU1TOiAtMjEzMDcwNjMzMSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA4MCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NQSV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwNzksXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DQVJfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDc4LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwNzcsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSFJfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDc2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0hBVF9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDYwNzUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3NCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElEX1RPX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNjA3MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDcyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA2MDcxLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfTUlTU0lORzogLTIxMzA3MDYwNzAsXG4gICAgRVJSX0xEU19WRFNfVU5TVVBQT1JURURfVkVSU0lPTjogLTIxMzA3MDU5MjAsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6IC0yMTMwNzA1OTE5LFxuICAgIEVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9JTkNPUlJFQ1RfREFUQTogLTIxMzA3MDU5MTgsXG4gICAgRVJSX0xEU19WRFNfU0lHTkVSX0NFUlRJRklDQVRFX1NJWkU6IC0yMTMwNzA1OTE3LFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOiAtMjEzMDcwNTkxNixcbiAgICBFUlJfTERTX1ZEU19TSUdOQVRVUkVfSU5DT1JSRUNUX0RBVEE6IC0yMTMwNzA1OTE1LFxuICAgIEVSUl9MRFNfVkRTX05DX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNTY2NCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOiAtMjEzMDcwNTY2MyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9IRUFERVI6IC0yMTMwNzA1NjYyLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1RZUEU6IC0yMTMwNzA1NjYxLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046IC0yMTMwNzA1NjYwLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0lTU1VJTkdfQ09VTlRSWTogLTIxMzA3MDU2NTksXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfTUVTU0FHRTogLTIxMzA3MDU2NTgsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHTkFUVVJFOiAtMjEzMDcwNTY1NyxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfQUxHT1JJVEhNOiAtMjEzMDcwNTY1NixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9DRVJUSUZJQ0FURTogLTIxMzA3MDU2NTUsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOiAtMjEzMDcwNTY1NCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogTm90IGVub3VnaCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBFbmNhcCBjb250ZW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogVmVyc2lvbiBpbmZvIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogRGlnZXN0IGFsZ29yaXRobSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERHIGhhc2hlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNOIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJc3N1ZXIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmFsaWRpdHkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IFBLIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbiBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBVbnNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIExEUyBvYmplY3Q6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmVyIGluZm8gY2Fubm90IGZpbmQgY2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBNZXNzZWQgYWxnb3JpdGhtc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogUHVibGljIGtleSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEFsZ29yaXRobSBwYXJhbWV0ZXJzIGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBub3QgZGVmaW5lZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gREc6IFdyb25nIFRhZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gREc6IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2NDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQkFQOiBTeW1tZXRyaWMgQ3lwaGVyIENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFN5bW1ldHJpYyBDeXBoZXIgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IERlY29kZSBOb25jZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogU2hhcmVkIFNlY3JldCBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBEb21haW4gUGFyYW1zIFVuc3VwcG9ydGVkIEZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgUGVyZm9ybVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTm9uLU1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBDQU0gZGF0YSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IENBTSBkYXRhIGNhbm5vdCB2ZXJpZnlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IENBTSBkYXRhIG5vbi1tYXRjaGluZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogSU0gc2NoZW1lIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogUmFuZG9tIG1hcHBpbmcgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgUHVibGljIEtleVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIEluZm9cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIERvbWFpbiBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogS2V5IEFncmVlbWVudCBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogRXBoZW1lcmFsIEtleXMgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IE5vbi1NYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEJ1aWxkIENlcnRpZmljYXRlIENoYWluXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEZpbmQgSVMgUHJpdmF0ZSBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IFNpZ25hdHVyZSBCdWlsZGluZyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEludmFsaWQgS2V5IEFsZ29yaXRobSBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5kZWZpbmVkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBTaWduYXR1cmUgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBVbnN1cHBvcnRlZCByZWNvdmVyeSBzY2hlbWVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBJbmNvcnJlY3QgVHJhaWxlclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBNaXNzaW5nIG1hbmRhdG9yeSBkYXRhIFBLXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIQVQgdW5zdXBwb3J0ZWQgdGVybWluYWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGludmFsaWQgcGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBDYW5ub3QgRmluZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IEluY29tcGxldGUgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ1BJIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0FSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIQVQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBWYWxpZCBmcm9tIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWQgdG8gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IFVuc3VwcG9ydGVkIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTkxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSXNzdWluZyBjb3VudHJ5IHNpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTkxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSXNzdWluZyBjb3VudHJ5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IFNpZ25hdHVyZSBjZXJ0aWZpY2F0ZSBzaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IFNpZ25hdHVyZSBjZXJ0aWZpY2F0ZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU5MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IGhlYWRlclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA1NjYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgaXNzdWluZyBjb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IG1lc3NhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3Qgc2lnbmF0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDU2NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgY2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNTY1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3Qgc2lnbmF0dXJlIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPS1wiXG4gICAgICAgICAgICBjYXNlIDEzNTI2NjMxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIDIxNDc0ODM1OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lZCBkYXRhOiBTaWduZXIgaW5mbyBlbXB0eVwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVkVSU0lPTjogLTE4NzkwNDgxOTEsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfTk9OX01BVENISU5HX1NJR05BVFVSRV9BTEdPUklUSE06IC0xODc5MDQ4MTkwLFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9USU1FX0NPRElORzogLTE4NzkwNDgxODksXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1VTRV9PRl9HRU5FUkFMSVpFRF9USU1FOiAtMTg3OTA0ODE4OCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9JU1NVRVI6IC0xODc5MDQ4MTg3LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX1NVQkpFQ1Q6IC0xODc5MDQ4MTg2LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX0NSSVRJQ0FMX0VYVEVOU0lPTjogLTE4NzkwNDgxODQsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfQ1NDQV9ST0xFOiAtMTg3OTA0ODE3OCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9EU19ST0xFOiAtMTg3OTA0ODE3NyxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfSVNTVUVSX1NVQkpFQ1RfRFM6IC0xODc5MDQ4MTc2LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0RVUExJQ0FUSU5HX0VYVEVOU0lPTlM6IC0xODc5MDQ4MTY5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX01JU1NFRDogLTE4NzkwNDc2ODAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0NzY3OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPVU5UUllfTUlTU0VEOiAtMTg3OTA0NzY3OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0NPTU1PTl9OQU1FX01JU1NFRDogLTE4NzkwNDc2NzcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3Njc2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTUlTU0VEOiAtMTg3OTA0NzY3NSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9NSVNTRUQ6IC0xODc5MDQ3Njc0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2NzMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VTSU5HX05PTl9DT01QTElBTlRfREFUQTogLTE4NzkwNDc2NzIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IC0xODc5MDQ3NjcxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogLTE4NzkwNDc2NzAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX01JU1NFRF9FWFRFTlNJT05TOiAtMTg3OTA0NzY2OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IC0xODc5MDQ3NjY4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAtMTg3OTA0NzY2NyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9NSVNTRUQ6IC0xODc5MDQ3NjY2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogLTE4NzkwNDc2NjUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjY0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19NSVNTRUQ6IC0xODc5MDQ3NjYzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfVVNBR0UxOiAtMTg3OTA0NzY2MixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMjogLTE4NzkwNDc2NjEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX05PVF9DUklUSUNBTDogLTE4NzkwNDc2NjAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzY1OSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19NSVNTRUQ6IC0xODc5MDQ3NjU4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19QQVRIX0xFTl9DX0lOQ09SUkVDVDogLTE4NzkwNDc2NTcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX05PVF9DUklUSUNBTDogLTE4NzkwNDc2NTYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9VU0FHRTogLTE4NzkwNDc2NTUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzY1NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX01JU1NFRDogLTE4NzkwNDc2NTMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2NTIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9LRVlfSURfTUlTU0VEOiAtMTg3OTA0NzY1MSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX01JU1NFRDogLTE4NzkwNDc2NTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2NDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9NSVNTRUQ6IC0xODc5MDQ3NjQ4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjQ3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfRU1QVFk6IC0xODc5MDQ3NjQ2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9NSVNTRUQ6IC0xODc5MDQ3NjQ1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2NDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0VNUFRZOiAtMTg3OTA0NzY0MyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2NDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0NSSVRJQ0FMOiAtMTg3OTA0NzY0MCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fRU1QVFk6IC0xODc5MDQ3NjM5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IC0xODc5MDQ3NjM4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYzNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9NSVNTRUQ6IC0xODc5MDQ3NjM2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0lOQ09SUkVDVF9EQVRBOiAtMTg3OTA0NzYzNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9FTVBUWTogLTE4NzkwNDc2MzQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MzMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfQ1JJVElDQUw6IC0xODc5MDQ3NjMxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX0VNUFRZOiAtMTg3OTA0NzYzMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IC0xODc5MDQ3NjI5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfSVNTVUVSX0FMVF9OQU1FX0ROX05PTl9DT01QTElBTlQ6IC0xODc5MDQ3NjI4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9NSVNTRUQ6IC0xODc5MDQ3NjI3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2MjYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX1ZFUlNJT046IC0xODc5MDQ3NjI1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVM6IC0xODc5MDQ3NjI0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVNfRU1QVFk6IC0xODc5MDQ3NjIzLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2MjIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0VNUFRZOiAtMTg3OTA0NzYyMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfUE9MSUNZX0lEX01JU1NFRDogLTE4NzkwNDc2MjAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9NSVNTRUQ6IC0xODc5MDQ3NjE5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfSU5DT1JSRUNUX0RBVEE6IC0xODc5MDQ3NjE4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfRU1QVFk6IC0xODc5MDQ3NjE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfUE9JTlRfTUlTU0VEOiAtMTg3OTA0NzYxNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU05fTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MTUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TTl9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYxNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9TTl9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYxMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX0FUVFJJQlVURV9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYxMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MTEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TVUJKRUNUX0NPVU5UUllfTk9OX01BVENISU5HOiAtMTg3OTA0NzYxMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NTQ0FfQUxUX05BTUVTX05PTl9NQVRDSElORzogLTE4NzkwNDc2MDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9JTkNPUlJFQ1RfREFUQTogLTE4NzkwNDc2MDgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYwNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0NSSVRJQ0FMOiAtMTg3OTA0NzYwNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTk9OX0NPTVBMSUFOVDogLTE4NzkwNDc2MDUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0NSSVRJQ0FMOiAtMTg3OTA0NzYwNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX09QVElPTkFMX0NSSVRJQ0FMOiAtMTg3OTA0NzYwMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYwMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9DT01NT05fTkFNRV9OT05fQ09NUExJQU5UOiAtMTg3OTA0NzYwMSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDgxNjAsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9NSVNTSU5HOiAtMTg3OTA0ODE1OSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ4MTU4LFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX01JU1NJTkc6IC0xODc5MDQ4MTU3LFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9JTkNPUlJFQ1Q6IC0xODc5MDQ4MTU2LFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9NSVNTSU5HOiAtMTg3OTA0ODE1NSxcbiAgICBOVEZfTERTX0lDQU9fQ09NX0RHUE1fVU5FWFBFQ1RFRDogLTE4NzkwNDgxNTQsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX1VOU1VQUE9SVEVEOiAtMTg3OTA0ODE0NCxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX1VOU1VQUE9SVEVEOiAtMTg3OTA0ODE0MyxcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fSU5DT05TSVNURU5UOiAtMTg3OTA0ODE0MixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX0lOQ09OU0lTVEVOVDogLTE4NzkwNDgxNDEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfT0lEX0lOQ09SUkVDVDogLTE4NzkwNDc5MzYsXG4gICAgTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3Nzc2LFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX0NPTlRFTlRfT0lEX0lOQ09SUkVDVDogLTE4NzkwNDc3NzUsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0NzkzNSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfRU1QVFk6IC0xODc5MDQ3OTM0LFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19VTlNVUFBPUlRFRDogLTE4NzkwNDc5MzMsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19NVUxUSVBMRV9FTlRSSUVTOiAtMTg3OTA0NzkyNyxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ0VSVElGSUNBVEVTX01JU1NFRDogLTE4NzkwNDc3NjAsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19FTVBUWTogLTE4NzkwNDc3NTksXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NSTFNfSU5DT1JSRUNUX1VTQUdFOiAtMTg3OTA0Nzc1OCxcbiAgICBOVEZfTERTX0lDQU9fTERTX09CSkVDVF9JTkNPUlJFQ1RfQ09OVEVOVF9PSUQ6IC0xODc5MDQ3OTMyLFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX05VTUJFUl9JTkNPUlJFQ1Q6IC0xODc5MDQ3OTMxLFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfTUlTU0lORzogLTE4NzkwNDc5MzAsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9FWFRSQTogLTE4NzkwNDc5MjksXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3OTI4LFxuICAgIE5URl9MRFNfSUNBT19NQVNURVJfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc3NDQsXG4gICAgTlRGX0xEU19JQ0FPX0RFVklBVElPTl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3OTA0NzczNixcbiAgICBOVEZfTERTX0JTSV9ERUZFQ1RfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc3MjgsXG4gICAgTlRGX0xEU19CU0lfQkxBQ0tfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogLTE4NzkwNDc3MjAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1Q6IC0xODc5MDQ3OTI2LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfQ0hPSUNFOiAtMTg3OTA0NzkyNSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfRElHRVNUX0FMR09SSVRITV9OT1RfTElTVEVEOiAtMTg3OTA0NzkyNCxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX01JU1NJTkc6IC0xODc5MDQ3OTIzLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfREFUQTogLTE4NzkwNDc5MjIsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9WYWx1ZTogLTE4NzkwNDc5MjEsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfTUlTU0lORzogLTE4NzkwNDc5MjAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfREFUQTogLTE4NzkwNDc5MTksXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfVkFMVUU6IC0xODc5MDQ3OTE4LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX01JU1NJTkc6IC0xODc5MDQ3OTA5LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX0RBVEE6IC0xODc5MDQ3OTA4LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX1ZBTFVFOiAtMTg3OTA0NzkwNyxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9NSVNTSU5HOiAtMTg3OTA0NzkwNixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9EQVRBOiAtMTg3OTA0NzkwNSxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfVkFMSURJVFk6IC0xODc5MDQ3OTE1LFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAtMTg3OTA0NzkxNCxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6IC0xODc5MDQ3OTEzLFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOiAtMTg3OTA0NzkxMixcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IC0xODc5MDQ3OTExLFxuICAgIE5URl9MRFNfVU5TVVBQT1JURURfSU1BR0VfRk9STUFUOiAtMTg3OTA0NzkxMCxcbiAgICBOVEZfTERTX01SWl9ET0NVTUVOVF9UWVBFX1VOS05PV046IDEzOTI3MixcbiAgICBOVEZfTERTX01SWl9JU1NVSU5HX1NUQVRFX1NZTlRBWF9FUlJPUjogMTM5MjczLFxuICAgIE5URl9MRFNfTVJaX05BTUVfSVNfVk9JRDogMTM5Mjc0LFxuICAgIE5URl9MRFNfTVJaX05VTUJFUl9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDEzOTI3NyxcbiAgICBOVEZfTERTX01SWl9OQVRJT05BTElUWV9TWU5UQVhfRVJST1I6IDEzOTI3OCxcbiAgICBOVEZfTERTX01SWl9ET0JfU1lOVEFYX0VSUk9SOiAxMzkyNzksXG4gICAgTlRGX0xEU19NUlpfRE9CX0VSUk9SOiAxMzkyODAsXG4gICAgTlRGX0xEU19NUlpfRE9CX0lOQ09SUkVDVF9DSEVDS1NVTTogMTM5MjgxLFxuICAgIE5URl9MRFNfTVJaX1NFWF9JTkNPUlJFQ1Q6IDEzOTI4MixcbiAgICBOVEZfTERTX01SWl9ET0VfU1lOVEFYX0VSUk9SOiAxMzkyODMsXG4gICAgTlRGX0xEU19NUlpfRE9FX0VSUk9SOiAxMzkyODQsXG4gICAgTlRGX0xEU19NUlpfRE9FX0lOQ09SUkVDVF9DSEVDS1NVTTogMTM5Mjg1LFxuICAgIE5URl9MRFNfTVJaX09QVElPTkFMX0RBVEFfSU5DT1JSRUNUX0NIRUNLU1VNOiAxMzkyODYsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUX0NIRUNLU1VNOiAxMzkyODcsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUOiAxMzkyODgsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9NSVNTSU5HOiAtMTg3ODk4MjY1NixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX0lOQ09SUkVDVDogLTE4Nzg5MTcxMjAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX01JU1NJTkc6IC0xODc4ODUxNTg0LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9JTkNPUlJFQ1Q6IC0xODc4Nzg2MDQ4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19UWVBFX0lOQ09SUkVDVDogLTE4Nzg3MjA1MTIsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX01JU1NJTkc6IC0xODc4NjU0OTc2LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19TVUJfVFlQRV9JTkNPUlJFQ1Q6IC0xODc4NTg5NDQwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfSU1BR0VfTUlTU0lORzogLTE4Nzg1MjM5MDQsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9GT1JNQVRfSURfSU5DT1JSRUNUOiAtMTg3ODQ1ODM2OCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX1ZFUlNJT05fSU5DT1JSRUNUOiAtMTg3ODM5MjgzMixcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfTEVOR1RIX0lOQ09SUkVDVDogLTE4NzgzMjcyOTYsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0dFTkRFUjogLTE4Nzc5OTk2MTYsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0VZRV9DT0xPUjogLTE4Nzc5MzQwODAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0hBSVJfQ09MT1I6IC0xODc3ODY4NTQ0LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1lBVzogLTE4Nzc4MDMwMDgsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfUElUQ0g6IC0xODc3NzM3NDcyLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1JPTEw6IC0xODc3NjcxOTM2LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfWUFXOiAtMTg3NzYwNjQwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1BJVENIOiAtMTg3NzU0MDg2NCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1JPTEw6IC0xODc3NDc1MzI4LFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9GQUNFX0lNQUdFX1RZUEU6IC0xODc3NDA5NzkyLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9JTUFHRV9EQVRBX1RZUEU6IC0xODc3MzQ0MjU2LFxuICAgIE5URl9MRFNfU0lfUEFDRV9JTkZPX1VOU1VQUE9SVEVEX1NURF9QQVJBTUVURVJTOiAtMTg2MjI3MDk3NixcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19ERVBSRUNBVEVEX1ZFUlNJT046IC0xODYyMjcwOTc1LFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VTSU5HX1NURF9SRUY6IC0xODYyMjcwOTc0LFxuICAgIE5URl9MRFNfU0lfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogLTE4NjIyNzA5NzMsXG4gICAgTlRGX0xEU19TSV9DQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDk3MixcbiAgICBOVEZfTERTX1NJX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMTg2MjI3MDk3MSxcbiAgICBOVEZfTERTX1NJX0NBX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMTg2MjI3MDk3MCxcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IC0xODYyMjcwOTY5LFxuICAgIE5URl9MRFNfU0lfVEFfSU5GT19GSUxFX0lEX0ZPUl9WRVJTSU9OMjogLTE4NjIyNzA5NjgsXG4gICAgTlRGX0xEU19TSV9FSURfU0VDVVJJVFlfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogLTE4NjIyNzA5NjcsXG4gICAgTlRGX0xEU19TSV9SSV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDk2NixcbiAgICBOVEZfTERTX1NJX1JJX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAtMTg2MjI3MDk2NSxcbiAgICBOVEZfTERTX1NJX0FBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IC0xODYyMjcwOTY0LFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19VTlNVUFBPUlRFRF9BTEdPUklUSE06IC0xODYyMjcwOTYzLFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19JTkNPTlNJU1RFTlRfQUxHT1JJVEhNX1JFRkVSRU5DRTogLTE4NjIyNzA5NjIsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAtMTg2MjI3MDcyMCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX1NURF9QQVJBTUVURVJTOiAtMTg2MjI3MDcxOSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX01BVENISU5HX0RPTUFJTl9QQVJBTVM6IC0xODYyMjcwNzE4LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkZPX05PVF9BVkFJTEFCTEU6IC0xODYyMjcwNzE3LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PX1JFUVVJUkVEX09QVElPTjogLTE4NjIyNzA3MTYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0RPTUFJTl9QQVJBTVNfTk9UX0FWQUlMQUJMRTogLTE4NjIyNzA3MTUsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0FOT05ZTU9VU19JTkZPUzogLTE4NjIyNzA3MTQsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogLTE4NjIyNzA3MTMsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfUFVCTElDX0tFWTogLTE4NjIyNzA3MTIsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lOQ09SUkVDVF9JTkZPU19RVUFOVElUWTogLTE4NjIyNzA3MTEsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1RBX0lORk9fTk9UX0FWQUlMQUJMRTogLTE4NjIyNzA3MTAsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBUkRfSU5GT19MT0NBVE9SX01VTFRJUExFX0VOVFJJRVM6IC0xODYyMjcwNzA5LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9FSURfU0VDVVJJVFlfSU5GT19NVUxUSVBMRV9FTlRSSUVTOiAtMTg2MjI3MDcwOCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9NVUxUSVBMRV9FTlRSSUVTOiAtMTg2MjI3MDcwNyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9JTkNPUlJFQ1RfVVNBR0U6IC0xODYyMjcwNzA2LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9SSV9ET01BSU5fUEFSQU1TX01VTFRJUExFX0VOVFJJRVM6IC0xODYyMjcwNzA1LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9TX05PTl9DT05TSVNUQU5UOiAtMTg2MjI3MDcwNCxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1BST0ZJTEVfSU5DT1JSRUNUX1ZFUlNJT046IC0xODYyMjcwNDYzLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURJVFk6IC0xODYyMjcwNDYyLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTk9OX0NWX0NBX0RPTUFJTl9QQVJBTUVURVJTOiAtMTg2MjI3MDQ2MSxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9WRVJTSU9OOiAtMTg2MjI3MDQ2MCxcbiAgICBOVEZfTERTX1RBX1BBQ0VfU1RBVElDX0JJTkRJTkdfVVNFRDogLTE4NjIyNzAyMDgsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAtMTg0NTQ5MzQ4MyxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogLTE4NDU0OTM0ODIsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOiAtMTg0NTQ5MzQ4MSxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogLTE4NDU0OTM0ODAsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAtMTg0NTQ5MzQ3OSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBOb24tbWF0Y2hpbmcgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHRpbWUgY29kaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdXNlIG9mIGdlbmVyYWxpemVkIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEVtcHR5IGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgY3JpdGljYWwgZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgZGVmYXVsdCBDU0NBIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBEZWZhdWx0IERTIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCBpc3N1ZXIgc3ViamVjdCBEU1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRHVwbGljYXRpbmcgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBMRFMgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IFVuaWNvZGUgdmVyc2lvbiBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIHVuZXhwZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IExEUyB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiBpbmNvbnNpc3RlbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IEluY29ycmVjdCBjb250ZW50IE9JRFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgbnVtYmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIGV4dHJhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvcyBtdWx0aXBsZSBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBjaG9pY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBkaWdlc3QgYWxnb3JpdGhtIG5vdCBsaXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbm5vdCBmaW5kIENTQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByZXZva2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgc2lnbmF0dXJlIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb246IFVuc3VwcG9ydGVkIGltYWdlIGZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IExpc3QgY29udGVudCBkZXNjcmlwdGlvbiBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IExpc3QgY29udGVudCBkZXNjcmlwdGlvbiBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBDb250ZW50IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ1JMcyBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIG1hc3RlciBsaXN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gRGV2aWF0aW9uIGxpc3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQlNJOiBEZWZlY3QgIGxpc3QgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCU0k6IEJsYWNrIGxpc3QgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvdW50cnkgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvdW50cnkgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb21tb24gbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvdW50cnkgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBwdWJsaWMga2V5IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IE1pc3NlZCBleHRlbnNpb25zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogVXNpbmcgbm9uLWNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAxXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogS2V5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogTWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IERlcnQgcG9saWNpZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDZXJ0IHBvbGljaWVzIHBvbGljeSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFNOIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgU04gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgU04gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBhdHRyaWJ1dGUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgYXR0cmlidXRlIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgc3ViamVjdCBjb3VudHJ5IG5vbi1tYXRjaGluZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDU0NBIGFsdCBuYW1lcyBub24tbWF0Y2hpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogTmFtZSBjaGFuZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogTmFtZSBjaGFuZ2Ugbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBOYW1lIGNoYW5nZSBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBDcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBPcHRpb25hbCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3Qgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY29tbW9uIG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTgyNjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg5MTcxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4ODUxNTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCB0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODc4NjA0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODcyMDUxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBUeXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NjU0OTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTg5NDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg1MjM5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGltYWdlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODQ1ODM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZm9ybWF0IElEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzkyODMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzI3Mjk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBkYXRhIGxlbmd0aCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzk5OTYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBHZW5kZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzkzNDA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBFeWUgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzg2ODU0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBIYWlyIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4MDMwMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzczNzQ3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2NzE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFlhd1wiXG4gICAgICAgICAgICBjYXNlIC0xODc3NTQwODY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDc1MzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc0MDk3OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRmFjZSBJbWFnZSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzczNDQyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSW1hZ2UgRGF0YSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBVbnN1cHBvcnRlZCBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gRGVwcmVjYXRlZCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVc2luZyBTdGQgUmVmXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBQdWJsaWNLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBGaWxlIElEIEZvciBWZXJzaW9uIDJcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb25zaXN0ZW50IGFsZ29yaXRobSByZWZlcmVuY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vIFJlcXVpcmVkIE9wdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgQW5vbnltb3VzIEluZm9zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5jb3JyZWN0IEluZm9zIFF1YW50aXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDYXJkIEluZm8gTG9jYXRvciBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBJbmZvIE11bHRpcGxlIEVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUHJpdmlsZWdlZCBUSSBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgSW5jb3JyZWN0IFVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGRvbWFpbiBwYXJhbXMgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBTdG9yYWdlIFBBQ0UgSW5mbyBOb24gQ29uc2lzdGFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcm9maWxlIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IE5vbiBDVkNBIGRvbWFpbiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzAyMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gVEE6IFBBQ0Ugc3RhdGljIGJpbmRpbmcgdXNlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbm5vdCBmaW5kIENTQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByZXZva2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgc2lnbmF0dXJlIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBEb2N1bWVudCB0eXBlIHVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBJc3N1aW5nIHN0YXRlIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE5hbWUgaXMgdm9pZFwiXG4gICAgICAgICAgICBjYXNlIDEzOTI3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE51bWJlciBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYXRpb25hbGl0eSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0Igc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IFNleCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAxMzkyODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0Ugc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IE9wdGlvbmFsIGRhdGEgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVQcm9jZXNzR0xDb21tYW5kcyA9IHtcbiAgICBlUENfUHJvY01ncl9TZXRMaWNlbnNlOiAxMjEwMCxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzOiAxMjEwMSxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzQXN5bmM6IDEyMTAyLFxuICAgIGVQQ19Qcm9jTWdyX0luaXQ6IDEyMTAzLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NJbWFnZTogMTIxMDQsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdEb2N1bWVudDogMTIxMDUsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdQYWdlOiAxMjEwNixcbiAgICBlUENfUHJvY01ncl9VbmxvYWQ6IDEyMTA3LFxuICAgIGVQQ19Qcm9jTWdyX0NoZWNrRGF0YWJhc2U6IDEyMTA5LFxuICAgIGVQQ19Qcm9jTWdyX0NvbXBhcmVQb3J0cmFpdHM6IDEyMTExLFxufVxuXG5leHBvcnQgY29uc3QgZVJlcXVlc3RDb21tYW5kID0ge1xuICAgIGVSZXFDbWRfUkZpZF9TZW5kRGF0YTogMTAwLFxuICAgIGVSZXFDbWRfUkZpZF9Ob3RpZnk6IDEwMSxcbiAgICBlUmVxQ21kX1JGaWRfR2V0RGF0YUZvclNjZW5hcmlvOiAxMDIsXG4gICAgZVJlcUNtZF9Ub3JjaF9HZXRVVkZvdG86IDIwMCxcbiAgICBlUmVxQ21kX0ludGVybmV0U2VuZDogMzAwLFxuICAgIGVSZXFDbWRfR2V0R3VpZDogNDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlID0ge1xuICAgIEFDUFRfVU5ERUZJTkVEOiAwLFxuICAgIEFDUFRfQkFDOiAxLFxuICAgIEFDUFRfUEFDRTogMixcbiAgICBBQ1BUX0NBOiAzLFxuICAgIEFDUFRfVEE6IDQsXG4gICAgQUNQVF9BQTogNSxcbiAgICBBQ1BUX1JJOiA2LFxuICAgIEFDUFRfQ0FSRF9JTkZPOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbiAgICBDVF9CTFM6IDcsXG4gICAgQ1RfTERTMjogOCxcbiAgICBDVF9CQ1M6IDksXG4gICAgQ1RfQkNTTkM6IDEwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRGF0YUZpbGVfVHlwZSA9IHtcbiAgICBERlRfVU5TUEVDSUZJRUQ6IDAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTogMSxcbiAgICBERlRfUEFTU1BPUlRfREcyOiAyLFxuICAgIERGVF9QQVNTUE9SVF9ERzM6IDMsXG4gICAgREZUX1BBU1NQT1JUX0RHNDogNCxcbiAgICBERlRfUEFTU1BPUlRfREc1OiA1LFxuICAgIERGVF9QQVNTUE9SVF9ERzY6IDYsXG4gICAgREZUX1BBU1NQT1JUX0RHNzogNyxcbiAgICBERlRfUEFTU1BPUlRfREc4OiA4LFxuICAgIERGVF9QQVNTUE9SVF9ERzk6IDksXG4gICAgREZUX1BBU1NQT1JUX0RHMTA6IDEwLFxuICAgIERGVF9QQVNTUE9SVF9ERzExOiAxMSxcbiAgICBERlRfUEFTU1BPUlRfREcxMjogMTIsXG4gICAgREZUX1BBU1NQT1JUX0RHMTM6IDEzLFxuICAgIERGVF9QQVNTUE9SVF9ERzE0OiAxNCxcbiAgICBERlRfUEFTU1BPUlRfREcxNTogMTUsXG4gICAgREZUX1BBU1NQT1JUX0RHMTY6IDE2LFxuICAgIERGVF9QQVNTUE9SVF9ERzE3OiAxNyxcbiAgICBERlRfUEFTU1BPUlRfREcxODogMTgsXG4gICAgREZUX1BBU1NQT1JUX0RHMTk6IDE5LFxuICAgIERGVF9QQVNTUE9SVF9ERzIwOiAyMCxcbiAgICBERlRfUEFTU1BPUlRfU09EOiAyMSxcbiAgICBERlRfUEFTU1BPUlRfQ1ZDQTogMjIsXG4gICAgREZUX1BBU1NQT1JUX0NPTTogMjMsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MzIsXG4gICAgREZUX1ZEUzogOTAwLFxuICAgIERGVF9WRFNOQzogOTAxLFxuICAgIERGVF9VU0VSREVGSU5FRDogMTAwMCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9VTlNQRUNJRklFRFwiXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFjaGluZSBSZWFkYWJsZSBab25lIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIElyaXMgRGF0YSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQocykgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRpdGlvbmFsIHBlcnNvbmFsIGRldGFpbChzKSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRpdGlvbmFsIGRvY3VtZW50IGRldGFpbHMgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsKHMpIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVBQyBpbmZvIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzE1KVwiXG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbihzKSB0byBub3RpZnkgKERHMTYpXCJcbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxN1wiXG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMThcIlxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE5XCJcbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcyMFwiXG4gICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLlNPRFwiXG4gICAgICAgICAgICBjYXNlIDE2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5TT0RcIlxuICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DVkNBXCJcbiAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ09NXCJcbiAgICAgICAgICAgIGNhc2UgMTUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCB0eXBlXCIgKyBcIiAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlXCIgKyBcIiAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiICsgXCIgKERHMylcIlxuICAgICAgICAgICAgY2FzZSAxMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiICsgXCIgKERHNClcIlxuICAgICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCIgKyBcIiAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIDEwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9ueW1cIiArIFwiIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCIgKyBcIiAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoXCIgKyBcIiAoREc4KVwiXG4gICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aFwiICsgXCIgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSAxMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHlcIiArIFwiIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIiArIFwiIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWxzXCIgKyBcIiAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSAxMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSAxMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNilcIlxuICAgICAgICAgICAgY2FzZSAxMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCIgKyBcIiAoREcxNylcIlxuICAgICAgICAgICAgY2FzZSAxMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCIgKyBcIiAoREcxOClcIlxuICAgICAgICAgICAgY2FzZSAxMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCIgKyBcIiAoREcxOSlcIlxuICAgICAgICAgICAgY2FzZSAxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCIgKyBcIiAoREcyMClcIlxuICAgICAgICAgICAgY2FzZSAxMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsc1wiICsgXCIgKERHMjEpXCJcbiAgICAgICAgICAgIGNhc2UgMTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRleHQgZGF0YSBlbGVtZW50cyAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIDE1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaWNlbnNlIGhvbGRlciBpbmZvcm1hdGlvbiAoREcyKVwiXG4gICAgICAgICAgICBjYXNlIDE1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSBkZXRhaWxzIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgMTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0IGltYWdlIChERzQpXCJcbiAgICAgICAgICAgIGNhc2UgMTU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZSAvIHVzdWFsIG1hcmsgaW1hZ2UgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSAxNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIDE1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgMTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gSXJpcyBEYXRhIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgMTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gT3RoZXIgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSAxNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgMTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRvbWVzdGljIGRhdGEgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgMTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vbi1tYXRjaCBhbGVydCAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSAxNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWN0aXZlIEF1dGhlbnRpY2F0aW9uIGluZm8gKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgMTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVBQyBpbmZvIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIDE2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRExfQ0VcIlxuICAgICAgICAgICAgY2FzZSAxNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NWQ0FcIlxuICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZEFjY2Vzc1wiXG4gICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DYXJkU2VjdXJpdHlcIlxuICAgICAgICAgICAgY2FzZSAyMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2hpcFNlY3VyaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQVRSXCJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9QS1wiXG4gICAgICAgICAgICBjYXNlIDUwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fU0lHTkVEREFUQVwiXG4gICAgICAgICAgICBjYXNlIDYwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIDYwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTUFTVEVSTElTVFwiXG4gICAgICAgICAgICBjYXNlIDYwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVGRUNUTElTVFwiXG4gICAgICAgICAgICBjYXNlIDYwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVWSUFUSU9OTElTVFwiXG4gICAgICAgICAgICBjYXNlIDcwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHAgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgNzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9TRVNTSU9OXCJcbiAgICAgICAgICAgIGNhc2UgNzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9MT0dEQVRBXCJcbiAgICAgICAgICAgIGNhc2UgNzAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9DSElQX1BST1BFUlRJRVNcIlxuICAgICAgICAgICAgY2FzZSAxMDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9VU0VSREVGSU5FRFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9FcnJvckNvZGVzID0ge1xuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDIsXG4gICAgUkZJRF9FUlJPUl9GQUlMRUQ6IC0xLFxuICAgIFJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDogLTIxNDc0MTgxMTEsXG4gICAgUkZJRF9FUlJPUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzQxODExMCxcbiAgICBSRklEX0VSUk9SX0lOVkFMSURfUEFSQU1FVEVSOiAtMjE0NzQxODEwOCxcbiAgICBSRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDogLTIxNDc0MTgxMDcsXG4gICAgUkZJRF9FUlJPUl9OT1RfRU5PVUdIX01FTU9SWTogLTIxNDc0MTgxMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogLTIxNDc0MTgxMDQsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IC0yMTQ3NDE4MTAzLFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogLTIxNDc0MTgxMDIsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAtMjE0NzQxODEwMSxcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogLTIxNDc0MTgxMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogLTIxNDczNTI1NzYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzM1MjU3NSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IC0yMTQ3MzUyNTc0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IC0yMTQ3MzUyNTczLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAtMjE0NzM1MjU3MixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAtMjE0NzM1MjU3MSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NDQVJEOiAtMjE0NzM1MjU3MCxcbiAgICBSRklEX0VSUk9SX1BDU0NfRVhUX0xFX0ZBSUxFRDogLTIxNDczNTI1NjAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU0VDVVJJVFlfTUFOQUdFUjogLTIwNDY4MjAzNTIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfQVBQX1NFTEVDVElPTl9GQUlMVVJFOiAtMjA0NjgyMDM1MSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9NQUNfRkFJTDogLTIwNDY4MjAwOTYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRU5DX0ZBSUw6IC0yMDQ2ODIwMDk1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODIwMDk0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkVfREFUQTogLTIwNDY4MjAwOTMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOEVfTUlTU0lORzogLTIwNDY4MTk4NDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfTUlTU0lORzogLTIwNDY4MTk4MzksXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOTlfTUlTU0lORzogLTIwNDY4MTk4MzgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fTUFDX0lOQ09SUkVDVDogLTIwNDY4MTk4MzcsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfSU5DT1JSRUNUOiAtMjA0NjgxOTgzNixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9OT05fVExWX1JFU1BPTlNFX0RBVEE6IC0yMDQ2ODE5NTg0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1dST05HX1JORF9JQ0NfTEVOR1RIOiAtMjA0NjgxOTU4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9JTlRfQVVUSF9GQUlMVVJFOiAtMjA0NjgxOTU4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0tBVF9GQUlMVVJFOiAtMjA0NjgxOTU4MSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0RTVF9GQUlMVVJFOiAtMjA0NjgxOTU4MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QU09fQ0VSVElGSUNBVEVfRkFJTFVSRTogLTIwNDY4MTk1NzksXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9BVF9GQUlMVVJFOiAtMjA0NjgxOTU3OCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRVRfQ0hBTExFTkdFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc3LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0VYVF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTc2LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0dFTkVSQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgxOTU3NSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX05PVF9GT1VORDogLTIxNDc0NTYzODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YxOiAtMjE0NzQ1ODQzMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjI6IC0yMTQ3NDU2MjU2LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IC0yMTQ3NDU2Mzg0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X05PX1JFRkVSRU5DRV9EQVRBOiAtMjE0NzQ1NjM3NixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDogLTIxNDc0NTgxMTEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQ6IC0yMTQ3NDU4MTEyLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDogLTIxNDc0NTg0MjksXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQyOiAtMjE0NzQ1NjYzNyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQyOiAtMjE0NzQ1NjYzNixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfU1VTUEVORDI6IC0yMTQ3NDU2NjM1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9GQUlMRUQ6IC0yMTQ2NDA5NTM2LFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogLTIwOTcxNTIwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogLTIwOTcxNTE5OTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogLTIwOTcxNTE5OTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAtMjA5NzE1MTk4MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAtMjA5NzE1MTk4MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODEsXG4gICAgUkZJRF9FUlJPUl9TZXNzaW9uX1Byb2NlZHVyZV9UeXBlX1Vuc3VwcG9ydGVkOiAtMjA5NzE1MTk4MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5NzksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAtMjA5NzE1MTk3OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAtMjA5NzE1MTk3NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogLTIwOTcxNTE5NzYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogLTIwOTcxNTE5NzUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTc0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IC0yMDk3MTUxOTczLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogLTIwOTcxNTE5NzIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAtMjA5NzE1MTk2NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogLTIwOTcxNTE5NjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IC0yMDk3MTUxOTY1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogLTIwOTcxNTE5NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAtMjA5NzE1MTk2MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogLTIwOTcxNTE5NjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogLTIwOTcxNTE5NjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogLTIwOTcxNTE5NjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogLTIwOTcxNTE5NTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogLTIwOTcxNTE5NTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogLTIwOTcxNTE5NTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IC0yMDk3MTUxOTM2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IC0yMDk3MTUxOTM1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogLTIwOTcxNTE5MzQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAtMjA5NzE1MTkyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAtMjA5NzE1MTkxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IC0yMDk3MTUxOTE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogLTIwOTcxNTE5MDQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAtMjA5NzA4NjQ2NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogLTIwOTcwMjA5MjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njk1NTM5MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IC0yMDk2ODg5ODU2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogLTIwOTY4MjQzMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogLTIwOTY3NTg3ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IC0yMDk2NjkzMjQ4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IC0yMDk2NjI3NzEyLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9OT19FUlJPUjogLTIwODAzNzQ3ODQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1RJTUVfT1VUOiAtMjA4MDMwOTI0OCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OOiAtMjA4MDI0MzcxMixcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfQ1JDOiAtMjA4MDE3ODE3NixcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9JTlRFR1JJVFk6IC0yMDgwMTEyNjQwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0xFTkdUSDogLTIwODAwNDcxMDQsXG4gICAgUkZJRF9FUlJPUl9MYXllcjM0X1JGVTogLTIwNzk5ODE1NjgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTl9UT09fTUFOWTogLTIwNzk5MTYwMzIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1BST1RPQ09MX0I6IC0yMDc5ODUwNDk2LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9EQVRBX0NPTlRFTlRTOiAtMjA3OTc4NDk2MCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0w6IC0yMDc5NzE5NDI0LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9HTE9CQUxfVElNRV9PVVQ6IC0yMDc5NjUzODg4LFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9NSUZBUkVfQVVUSDogLTIwNzk1ODgzNTIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9FUlJPUjogLTIwNzk1MjI4MTYsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9DT0xMSVNJT046IC0yMDc5NDU3MjgwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9TQU1fQUNLTk9XTEVER0U6IC0yMDc5MzkxNzQ0LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4NDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODQyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBkZWFjdGl2YXRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIGJsb2NrZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODExMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBzdXNwZW5kZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBibG9ja2VkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBkZWFjdGl2YXRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0Qgc3VzcGVuZGVkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEluY29ycmVjdCBwYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEZpbGUgc2VsZWN0aW9uIGZhaWx1cmUgLyBmaWxlIG5vdCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2Mzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm8gcmVmZXJlbmNlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjI1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTm8gY2hpcCBpcyBkZXRlY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBwYXJhbWV0ZXIgaW4gRXhlY3V0ZUNvbW1hbmQoKSBjYWxsIGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRGV2aWNlIGlzIHVuaW5pdGlhbGl6ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQxODEwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBPdXQgb2YgbWVtb3J5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBkaXJlY3RvcnlcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQxODEwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmtub3duIGNvbW1hbmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQxODEwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IElPIEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUkZJRCBpcyBidXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGhlIGZpcm13YXJlIG5lZWRzIHRvIGJlIHVwZGF0ZWQgdG8gYSBuZXdlciB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogVGhlIHJlYWRlciBpcyB1bmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFRoZSBjYXJkIGNhbm5vdCBiZSBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgY2FyZCBpcyBub3QgY29ubmVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogT3BlcmF0aW9uIGlzIGNhbmNlbGxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFRoZSBjYXJkIGlzIGJ1c3lcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWQgU21hcnQgQ2FyZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEV4dExlIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ2NDA5NTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUyMDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vdCBwZXJmb3JtZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBTZXNzaW9uIGlzIGNsb3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVuc3VwcG9ydGVkIHRlcm1pbmFsIG9wZXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgdW5rbm93blwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgYmFkIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGVybWluYWwgdHlwZSBub3Qgc2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBwcm9jZWR1cmUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVuc3VwcG9ydGVkIHByb2NlZHVyZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHJvY2VkdXJlIHR5cGUgbm90IHNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgdW5rbm93biB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSB1bnN1cHBvcnRlZCBTTSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSBpbmNvcnJlY3QgU00gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgcmVzdHJpY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQV0QgbWFuYWdlbWVudCBub3QgYXV0aG9yaXplZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBjb250cm9sIHVua25vd24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBjb250cm9sIHVua25vd24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFBBQ0UgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSBrZXlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVEEgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSByZXF1aXJlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEluY29ycmVjdCBvcHRpb24gQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUQSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBQSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSSSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBTTyBzaWduYXR1cmUgY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSGFzaCBjaGVjayBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGF1eCBkYXRhIC0gZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGF1eCBkYXRhIC0gZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgYXV4IGRhdGEgLSBjb21tdW5pdHkgSURcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiByZXF1aXJlcyBhcHAgc2VsZWN0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUElOIG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gbm90IHZlcmlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzA4NjQ2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IEluc3VmZmljaWVudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcwMjA5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2OTU1MzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogVW5leHBlY3RlZCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY4ODk4NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBDb250YWlucyB1bmV4cGVjdGVkIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NjgyNDMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IFdyb25nIHRhZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NzU4Nzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ2Fubm90IHVzZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY2OTMyNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBDYW5ub3QgcmVhZCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY2Mjc3MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBBY2Nlc3MgZGVuaWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwODAzNzQ3ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBObyBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMDgwMzA5MjQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gVGltZW91dFwiXG4gICAgICAgICAgICBjYXNlIC0yMDgwMjQzNzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gQ29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwODAxNzgxNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBDUkNcIlxuICAgICAgICAgICAgY2FzZSAtMjA4MDExMjY0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIERhdGEgaW50ZWdyaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTIwODAwNDcxMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBEYXRhIGxlbmd0aFwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5OTgxNTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gUkZVXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk5MTYwMzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBUb28gbWFueSBjb2xsaXNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA3OTg1MDQ5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFByb3RvY29sIEJcIlxuICAgICAgICAgICAgY2FzZSAtMjA3OTc4NDk2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIERhdGEgY29udGVudHNcIlxuICAgICAgICAgICAgY2FzZSAtMjA3OTcxOTQyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFByb3RvY29sXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk2NTM4ODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBHbG9iYSB0aW1lb3V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk1ODgzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBNSUZBUkUgYXV0aFwiXG4gICAgICAgICAgICBjYXNlIC0yMDc5NTIyODE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gU0FNIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzk0NTcyODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBTQU0gY29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNzkzOTE3NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBTQU0gYWNrbm93bGVkZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNlY3VyZSBNZXNzYWdpbmcgd2FzIG5vdCBhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQV8wMyBcXFwiQXBwbGljYXRpb24gc2VsZWN0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDEgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBNQUMgZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMiBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGVuY3J5cHRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgTUFDIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGNyeXB0b2dyYW0gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgc2VjdXJlZCBzdGF0dXMgYnl0ZXMgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgaW5jb3JyZWN0IE1BQ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgaW5jb3JyZWN0IGNyeXB0b2dyYW1cIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE5vdCBUTFYgcmVzcG9uc2UgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogV3JvbmcgZGF0YSBsZW5ndGggKEFQRFVfSU5TX0dFVF9DSEFMTEVOR0UpXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBBUERVX0lOU19JTlRFUk5BTF9BVVRIRU5USUNBVEUgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBLQVQgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBEU1QgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFNPIENFUlRJRklDQVRFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgQVQgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogR0VUIENIQUxMRU5HRSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBBUERVX0lOU19FWFRFUk5BTF9BVVRIRU5USUNBVEUgKGV4dGVybmFsIGF1dGhlbnRpY2F0aW9uKSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBHZW5lcmFsIEF1dGhlbnRpY2l0eSBGYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGhlIHJlcXVlc3RlZCBvcGVyYXRpb24gaXMgYWxyZWFkeSBwZXJmb3JtZWRcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDY1NTM2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0RPQ1VNRU5UX1JFQURZOiA2NTUzNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogNjU1MzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDY1NTQ2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BST0dSRVNTOiA2NTU0NyxcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiA2NTU1MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogNjU1NTEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fSVNPX0VSUk9SOiA2OTYzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiA3NzgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogODE5MzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfRElTQ09OTkVDVEVEOiAxMzEwNzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAxMzEwNzMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMTMxMDc0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19USU1FOiAxMzEwNzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAxMzEwNzYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAxMzEwNzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1NQRUVEOiAxMzEwNzgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDEzMTA3OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAxMzEwODAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FWFRfTEVOR1RIX1NVUFBPUlQ6IDEzMTA4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMTMxMDg5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDEzMTA5MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TQ0VOQVJJTzogMTMxMTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDE5NjYwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAyNjIxNDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FTkRfT0ZfRklMRTogMzI3NjgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAzOTMyMTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogNDU4NzUyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9TVEFSVDogNTI0Mjg4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDU4OTgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDY1NTM2MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9GSUxFX0NIRUNLOiA3MjA4OTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDc4NjQzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiA4NTE5NjgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUklfU0VDVE9SX0lEOiA5MTc1MDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogOTgzMDQwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfUGFzc3dvcmRfVHlwZSA9IHtcbiAgICBQUFRfVU5LTk9XTjogMCxcbiAgICBQUFRfTVJaOiAxLFxuICAgIFBQVF9DQU46IDIsXG4gICAgUFBUX1BJTjogMyxcbiAgICBQUFRfUFVLOiA0LFxuICAgIFBQVF9QSU5fRVNJR046IDUsXG4gICAgUFBUX1NBSTogNixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1NES19Qcm9maWxlclR5cGUgPSB7XG4gICAgU1BUX0RPQ185MzAzX0VESVRJT05fMjAwNjogMHgwMDAwMDAwMSxcbiAgICBTUFRfRE9DXzkzMDNfTERTX1BLSV9NQUlOVEVOQU5DRTogMHgwMDAwMDAwMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Rlcm1pbmFsVHlwZSA9IHtcbiAgICBURVRfVU5ERUZJTkVEOiAwLFxuICAgIFRFVF9JTlNQRUNUSU9OX1NZU1RFTTogMSxcbiAgICBURVRfQVVUSEVOVElDQVRJT05fVEVSTUlOQUw6IDIsXG4gICAgVEVUX1NJR05BVFVSRV9URVJNSU5BTDogMyxcbiAgICBURVRfVU5BVVRIRU5USUNBVEVEX1RFUk1JTkFMOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fQXV0aGVudGljaXR5ID0ge1xuICAgIE5PTkU6IDAsXG4gICAgVVZfTFVNSU5FU0NFTkNFOiAxLFxuICAgIElSX0I5MDA6IDIsXG4gICAgSU1BR0VfUEFUVEVSTjogNCxcbiAgICBBWElBTF9QUk9URUNUSU9OOiA4LFxuICAgIFVWX0ZJQkVSUzogMTYsXG4gICAgSVJfVklTSUJJTElUWTogMzIsXG4gICAgT0NSX1NFQ1VSSVRZX1RFWFQ6IDY0LFxuICAgIElQSTogMTI4LFxuICAgIFBIT1RPX0VNQkVEX1RZUEU6IDUxMixcbiAgICBIT0xPR1JBTVM6IDQwOTYsXG4gICAgUEhPVE9fQVJFQTogODE5MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OOiAzMjc2OCxcbiAgICBCQVJDT0RFX0ZPUk1BVF9DSEVDSzogNjU1MzYsXG4gICAgS0lORUdSQU06IDEzMTA3MixcbiAgICBIT0xPR1JBTVNfREVURUNUSU9OOiA1MjQyODgsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCA9IHtcbiAgICBSQ0ZfRElTQUJMRUQ6IDAsXG4gICAgUkNGX1ZFUklGSUVEOiAxLFxuICAgIFJDRl9OT1RfVkVSSUZJRUQ6IDIsXG4gICAgUkNGX0NPTVBBUkVfVFJVRTogMyxcbiAgICBSQ0ZfQ09NUEFSRV9GQUxTRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0xpZ2h0cyA9IHtcbiAgICBOT05FOiAwLFxuICAgIFJQUk1fTElHSFRfVVY6IDEyOCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTEw6IDYsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1VWOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVWXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1dISVRFX0ZVTEw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzaWJsZSBsaWdodFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9SZXN1bHRUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU1QVFk6IDAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfSU1BR0U6IDEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUxFX0lNQUdFOiAyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX09DUl9FWFRFTkRFRDogMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVTOiA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfR1JBUEhJQ1M6IDYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfVEVTVF9RVUFMSVRZOiA3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfVFlQRVNfQ0FORElEQVRFUzogOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NIT1NFTl9ET0NVTUVOVF9UWVBFX0NBTkRJREFURTogOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UU19JTkZPX0xJU1Q6IDEwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfT0NSX0xFWElDQUxfQU5BTFlaRTogMTUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfVU5DUk9QUEVEX0lNQUdFOiAxNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1ZJU1VBTF9PQ1JfRVhURU5ERUQ6IDE3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX1RFWFRfREFUQTogMTgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfSU1BR0VfREFUQTogMTksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9BVVRIRU5USUNJVFk6IDIwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU9TX0lNQUdFOiAyMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBWUVSX0lNQUdFOiAyNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRTogMjUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEVfVEVYVF9EQVRBOiAyNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJRUxEX0ZJTEVfSU1BR0U6IDI3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfREFUQUJBU0VfQ0hFQ0s6IDI4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklOR0VSUFJJTlRfVEVNUExBVEVfSVNPOiAyOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOUFVUX0lNQUdFX1FVQUxJVFk6IDMwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU1BR0VTOiAzNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0hPTE9fUEFSQU1TOiA0NyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1BPU0lUSU9OOiA4NSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NVU1RPTTogMTAwLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9SQVdfREFUQTogMTAxLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9URVhUX0RBVEE6IDEwMixcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfSU1BR0VfREFUQTogMTAzLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9CSU5BUllfREFUQTogMTA0LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9PUklHSU5BTF9HUkFQSElDUzogMTA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERV9QT1NJVElPTjogNjIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfUE9TSVRJT046IDYxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfU1RBVFVTOiAzMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JMQU5LOiAwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GSUxMOiAxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UTzogMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTVJaOiAzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUxTRV9MVU1JTkVTQ0VOQ0U6IDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fU0lNUExFOiA1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9TVEFUSUM6IDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX01VTFRJX1NUQVRJQzogNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfRElOQU1JQzogOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfSU5URVJSVVBURUQ6IDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX1NISUZURUQ6IDEwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX1NBTUVfQ09MT1JTOiAxMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9JUl9JTlZJU0lCTEU6IDEyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSVpFX0NIRUNLOiAxMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19HSE9TVDogMTQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfUkZJRDogMTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfVklTVUFMOiAxNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERTogMTcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQ0FNRVJBOiAxOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0NBTUVSQTogMjAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0dIT1NUX1BIT1RPOiAyMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0xFQVJfR0hPU1RfUEhPVE86IDIyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9JTlZJU0lCTEVfT0JKRUNUOiAyMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTE9XX0NPTlRSQVNUX09CSkVDVDogMjQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPTE9SOiAyNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0hBUEU6IDI2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT1JORVJTOiAyNyxcbiAgICBET0NVTUVOVF9DQU5DRUxMSU5HX0RFVEVDVE9SOiAyOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVWaXN1YWxGaWVsZFR5cGUgPSB7XG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfQ09ERTogMCxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREU6IDEsXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSOiAyLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZOiAzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUU6IDQsXG4gICAgRlRfREFURV9PRl9CSVJUSDogNSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSDogNixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVI6IDcsXG4gICAgRlRfU1VSTkFNRTogOCxcbiAgICBGVF9HSVZFTl9OQU1FUzogOSxcbiAgICBGVF9NT1RIRVJTX05BTUU6IDEwLFxuICAgIEZUX05BVElPTkFMSVRZOiAxMSxcbiAgICBGVF9TRVg6IDEyLFxuICAgIEZUX0hFSUdIVDogMTMsXG4gICAgRlRfV0VJR0hUOiAxNCxcbiAgICBGVF9FWUVTX0NPTE9SOiAxNSxcbiAgICBGVF9IQUlSX0NPTE9SOiAxNixcbiAgICBGVF9BRERSRVNTOiAxNyxcbiAgICBGVF9ET05PUjogMTgsXG4gICAgRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTksXG4gICAgRlRfRExfQ0xBU1M6IDIwLFxuICAgIEZUX0RMX0VORE9SU0VEOiAyMSxcbiAgICBGVF9ETF9SRVNUUklDVElPTl9DT0RFOiAyMixcbiAgICBGVF9ETF9VTkRFUl8yMV9EQVRFOiAyMyxcbiAgICBGVF9BVVRIT1JJVFk6IDI0LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAyNSxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFOiAyNixcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVI6IDI3LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSOiAyOCxcbiAgICBGVF9WSVNBX0lEOiAyOSxcbiAgICBGVF9WSVNBX0NMQVNTOiAzMCxcbiAgICBGVF9WSVNBX1NVQl9DTEFTUzogMzEsXG4gICAgRlRfTVJaX1NUUklOR18xOiAzMixcbiAgICBGVF9NUlpfU1RSSU5HXzI6IDMzLFxuICAgIEZUX01SWl9TVFJJTkdfMzogMzQsXG4gICAgRlRfTVJaX1RZUEU6IDM1LFxuICAgIEZUX09QVElPTkFMX0RBVEE6IDM2LFxuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX05BTUU6IDM3LFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfTkFNRTogMzgsXG4gICAgRlRfUExBQ0VfT0ZfSVNTVUU6IDM5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTogNDAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS1NVTTogNDEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tTVU06IDQyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTogNDMsXG4gICAgRlRfRklOQUxfQ0hFQ0tTVU06IDQ0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS1NVTTogNDUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tTVU06IDQ2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tTVU06IDQ3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLU1VNOiA0OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOiA0OSxcbiAgICBGVF9PVEhFUjogNTAsXG4gICAgRlRfTVJaX1NUUklOR1M6IDUxLFxuICAgIEZUX05BTUVfU1VGRklYOiA1MixcbiAgICBGVF9OQU1FX1BSRUZJWDogNTMsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS1NVTTogNTQsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS19ESUdJVDogNTUsXG4gICAgRlRfRE9DVU1FTlRfU0VSSUVTOiA1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSOiA1NyxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTU9ERUw6IDU4LFxuICAgIEZUX1JFR19DRVJUX0NBUl9DT0xPUjogNTksXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9OVU1CRVI6IDYwLFxuICAgIEZUX1JFR19DRVJUX0NBUl9UWVBFOiA2MSxcbiAgICBGVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOiA2MixcbiAgICBGVF9SRUdfQ0VSVF9XRUlHSFQ6IDYzLFxuICAgIEZUX0FERFJFU1NfQVJFQTogNjQsXG4gICAgRlRfQUREUkVTU19TVEFURTogNjUsXG4gICAgRlRfQUREUkVTU19CVUlMRElORzogNjYsXG4gICAgRlRfQUREUkVTU19IT1VTRTogNjcsXG4gICAgRlRfQUREUkVTU19GTEFUOiA2OCxcbiAgICBGVF9QTEFDRV9PRl9SRUdJU1RSQVRJT046IDY5LFxuICAgIEZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOiA3MCxcbiAgICBGVF9SRVNJREVOVF9GUk9NOiA3MSxcbiAgICBGVF9SRVNJREVOVF9VTlRJTDogNzIsXG4gICAgRlRfQVVUSE9SSVRZX0NPREU6IDczLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0FSRUE6IDc0LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1NUQVRFX0NPREU6IDc1LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUOiA3NixcbiAgICBGVF9BRERSRVNTX0NJVFk6IDc3LFxuICAgIEZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDc4LFxuICAgIEZUX0FERFJFU1NfUE9TVEFMX0NPREU6IDc5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDogODAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS19ESUdJVDogODEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tfRElHSVQ6IDgyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDogODMsXG4gICAgRlRfRklOQUxfQ0hFQ0tfRElHSVQ6IDg0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS19ESUdJVDogODUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tfRElHSVQ6IDg3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLX0RJR0lUOiA4OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOiA4OSxcbiAgICBGVF9QRVJNSVRfRExfQ0xBU1M6IDkwLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0VYUElSWTogOTEsXG4gICAgRlRfUEVSTUlUX0lERU5USUZJRVI6IDkyLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0lTU1VFOiA5MyxcbiAgICBGVF9QRVJNSVRfUkVTVFJJQ1RJT05fQ09ERTogOTQsXG4gICAgRlRfUEVSTUlUX0VORE9SU0VEOiA5NSxcbiAgICBGVF9JU1NVRV9USU1FU1RBTVA6IDk2LFxuICAgIEZUX05VTUJFUl9PRl9EVVBMSUNBVEVTOiA5NyxcbiAgICBGVF9NRURJQ0FMX0lORElDQVRPUl9DT0RFUzogOTgsXG4gICAgRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjogOTksXG4gICAgRlRfVklTQV9UWVBFOiAxMDAsXG4gICAgRlRfVklTQV9WQUxJRF9GUk9NOiAxMDEsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTDogMTAyLFxuICAgIEZUX0RVUkFUSU9OX09GX1NUQVk6IDEwMyxcbiAgICBGVF9OVU1CRVJfT0ZfRU5UUklFUzogMTA0LFxuICAgIEZUX0RBWTogMTA1LFxuICAgIEZUX01PTlRIOiAxMDYsXG4gICAgRlRfWUVBUjogMTA3LFxuICAgIEZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOiAxMDgsXG4gICAgRlRfQ09NTUVSQ0lBTF9WRUhJQ0xFX0NPREVTOiAxMDksXG4gICAgRlRfQUtBX0RBVEVfT0ZfQklSVEg6IDExMCxcbiAgICBGVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTExLFxuICAgIEZUX0FLQV9TVVJOQU1FOiAxMTIsXG4gICAgRlRfQUtBX0dJVkVOX05BTUVTOiAxMTMsXG4gICAgRlRfQUtBX05BTUVfU1VGRklYOiAxMTQsXG4gICAgRlRfQUtBX05BTUVfUFJFRklYOiAxMTUsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1NUUkVFVDogMTE2LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19DSVRZOiAxMTcsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiAxMTgsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1BPU1RBTF9DT0RFOiAxMTksXG4gICAgRlRfQVVESVRfSU5GT1JNQVRJT046IDEyMCxcbiAgICBGVF9JTlZFTlRPUllfTlVNQkVSOiAxMjEsXG4gICAgRlRfUkFDRV9FVEhOSUNJVFk6IDEyMixcbiAgICBGVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzogMTIzLFxuICAgIEZUX0pVUklTRElDVElPTl9FTkRPUlNFTUVOVF9DT0RFOiAxMjQsXG4gICAgRlRfSlVSSVNESUNUSU9OX1JFU1RSSUNUSU9OX0NPREU6IDEyNSxcbiAgICBGVF9GQU1JTFlfTkFNRTogMTI2LFxuICAgIEZUX0dJVkVOX05BTUVTX1JVUzogMTI3LFxuICAgIEZUX1ZJU0FfSURfUlVTOiAxMjgsXG4gICAgRlRfRkFUSEVSU19OQU1FOiAxMjksXG4gICAgRlRfRkFUSEVSU19OQU1FX1JVUzogMTMwLFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX1JVUzogMTMxLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1JVUzogMTMyLFxuICAgIEZUX0FVVEhPUklUWV9SVVM6IDEzMyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfTlVNRVJJQzogMTM0LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREVfTlVNRVJJQzogMTM1LFxuICAgIEZUX0VOR0lORV9QT1dFUjogMTM2LFxuICAgIEZUX0VOR0lORV9WT0xVTUU6IDEzNyxcbiAgICBGVF9DSEFTU0lTX05VTUJFUjogMTM4LFxuICAgIEZUX0VOR0lORV9OVU1CRVI6IDEzOSxcbiAgICBGVF9FTkdJTkVfTU9ERUw6IDE0MCxcbiAgICBGVF9WRUhJQ0xFX0NBVEVHT1JZOiAxNDEsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6IDE0MixcbiAgICBGVF9DT05UUk9MX05POiAxNDMsXG4gICAgRlRfUEFSUkVOVFNfR0lWRU5fTkFNRVM6IDE0NCxcbiAgICBGVF9TRUNPTkRfU1VSTkFNRTogMTQ1LFxuICAgIEZUX01JRERMRV9OQU1FOiAxNDYsXG4gICAgRlRfUkVHX0NFUlRfVklOOiAxNDcsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLX0RJR0lUOiAxNDgsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOiAxNDksXG4gICAgRlRfTElORV8xX0NIRUNLX0RJR0lUOiAxNTAsXG4gICAgRlRfTElORV8yX0NIRUNLX0RJR0lUOiAxNTEsXG4gICAgRlRfTElORV8zX0NIRUNLX0RJR0lUOiAxNTIsXG4gICAgRlRfTElORV8xX0NIRUNLU1VNOiAxNTMsXG4gICAgRlRfTElORV8yX0NIRUNLU1VNOiAxNTQsXG4gICAgRlRfTElORV8zX0NIRUNLU1VNOiAxNTUsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS19ESUdJVDogMTU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06IDE1NyxcbiAgICBGVF9SRUdfQ0VSVF9WRUhJQ0xFX0lUU19DT0RFOiAxNTgsXG4gICAgRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOiAxNTksXG4gICAgRlRfTUFSSVRBTF9TVEFUVVM6IDE2MCxcbiAgICBGVF9DT01QQU5ZX05BTUU6IDE2MSxcbiAgICBGVF9TUEVDSUFMX05PVEVTOiAxNjIsXG4gICAgRlRfU1VSTkFNRV9PRl9TUE9TRTogMTYzLFxuICAgIEZUX1RSQUNLSU5HX05VTUJFUjogMTY0LFxuICAgIEZUX0JPT0tMRVRfTlVNQkVSOiAxNjUsXG4gICAgRlRfQ0hJTERSRU46IDE2NixcbiAgICBGVF9DT1BZOiAxNjcsXG4gICAgRlRfU0VSSUFMX05VTUJFUjogMTY4LFxuICAgIEZUX0RPU1NJRVJfTlVNQkVSOiAxNjksXG4gICAgRlRfQUtBX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAxNzAsXG4gICAgRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6IDE3MSxcbiAgICBGVF9NUlpfU1RSSU5HU19XSVRIX0NPUlJFQ1RfQ0hFQ0tfU1VNUzogMTcyLFxuICAgIEZUX0RMX0NETF9SRVNUUklDVElPTl9DT0RFOiAxNzMsXG4gICAgRlRfRExfVU5ERVJfMThfREFURTogMTc0LFxuICAgIEZUX0RMX1JFQ09SRF9DUkVBVEVEOiAxNzUsXG4gICAgRlRfRExfRFVQTElDQVRFX0RBVEU6IDE3NixcbiAgICBGVF9ETF9JU1NfVFlQRTogMTc3LFxuICAgIEZUX01JTElUQVJZX0JPT0tfTlVNQkVSOiAxNzgsXG4gICAgRlRfREVTVElOQVRJT046IDE3OSxcbiAgICBGVF9CTE9PRF9HUk9VUDogMTgwLFxuICAgIEZUX1NFUVVFTkNFX05VTUJFUjogMTgxLFxuICAgIEZUX1JFR19DRVJUX0JPRFlfVFlQRTogMTgyLFxuICAgIEZUX1JFR19DRVJUX0NBUl9NQVJLOiAxODMsXG4gICAgRlRfVFJBTlNBQ1RJT05fTlVNQkVSOiAxODQsXG4gICAgRlRfQUdFOiAxODUsXG4gICAgRlRfRk9MSU9fTlVNQkVSOiAxODYsXG4gICAgRlRfVk9URVJfS0VZOiAxODcsXG4gICAgRlRfQUREUkVTU19NVU5JQ0lQQUxJVFk6IDE4OCxcbiAgICBGVF9BRERSRVNTX0xPQ0FUSU9OOiAxODksXG4gICAgRlRfU0VDVElPTjogMTkwLFxuICAgIEZUX09DUl9OVU1CRVI6IDE5MSxcbiAgICBGVF9GRURFUkFMX0VMRUNUSU9OUzogMTkyLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVI6IDE5MyxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOiAxOTQsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS19ESUdJVDogMTk1LFxuICAgIEZUX1ZJU0FfTlVNQkVSOiAxOTYsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06IDE5NyxcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDogMTk4LFxuICAgIEZUX1ZPVEVSOiAxOTksXG4gICAgRlRfUFJFVklPVVNfVFlQRTogMjAwLFxuICAgIEZUX0ZJRUxEX0ZST01fTVJaOiAyMjAsXG4gICAgRlRfQ1VSUkVOVF9EQVRFOiAyMjEsXG4gICAgRlRfU1RBVFVTX0RBVEVfT0ZfRVhQSVJZOiAyNTEsXG4gICAgRlRfQkFOS05PVEVfTlVNQkVSOiAyNTIsXG4gICAgRlRfQ1NDX0NPREU6IDI1MyxcbiAgICBGVF9BUlRJU1RJQ19OQU1FOiAyNTQsXG4gICAgRlRfQUNBREVNSUNfVElUTEU6IDI1NSxcbiAgICBGVF9BRERSRVNTX0NPVU5UUlk6IDI1NixcbiAgICBGVF9BRERSRVNTX1pJUENPREU6IDI1NyxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMTogMjU4LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8yOiAyNTksXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVFJFRVQ6IDI2MCxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6IDI2MSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUQVRFOiAyNjIsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DT1VOVFJZOiAyNjMsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9aSVBDT0RFOiAyNjQsXG4gICAgRlRfQ0RMX0NMQVNTOiAyNjUsXG4gICAgRlRfRExfVU5ERVJfMTlfREFURTogMjY2LFxuICAgIEZUX1dFSUdIVF9QT1VORFM6IDI2NyxcbiAgICBGVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjogMjY4LFxuICAgIEZUX0VORE9SU0VNRU5UX0VYUElSQVRJT05fREFURTogMjY5LFxuICAgIEZUX1JFVklTSU9OX0RBVEU6IDI3MCxcbiAgICBGVF9DT01QTElBTkNFX1RZUEU6IDI3MSxcbiAgICBGVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOiAyNzIsXG4gICAgRlRfRklSU1RfTkFNRV9UUlVOQ0FUSU9OOiAyNzMsXG4gICAgRlRfTUlERExFX05BTUVfVFJVTkNBVElPTjogMjc0LFxuICAgIEZUX0VYQU1fREFURTogMjc1LFxuICAgIEZUX09SR0FOSVpBVElPTjogMjc2LFxuICAgIEZUX0RFUEFSVE1FTlQ6IDI3NyxcbiAgICBGVF9QQVlfR1JBREU6IDI3OCxcbiAgICBGVF9SQU5LOiAyNzksXG4gICAgRlRfQkVORUZJVFNfTlVNQkVSOiAyODAsXG4gICAgRlRfU1BPTlNPUl9TRVJWSUNFOiAyODEsXG4gICAgRlRfU1BPTlNPUl9TVEFUVVM6IDI4MixcbiAgICBGVF9TUE9OU09SOiAyODMsXG4gICAgRlRfUkVMQVRJT05TSElQOiAyODQsXG4gICAgRlRfVVNDSVM6IDI4NSxcbiAgICBGVF9DQVRFR09SWTogMjg2LFxuICAgIEZUX0NPTkRJVElPTlM6IDI4NyxcbiAgICBGVF9JREVOVElGSUVSOiAyODgsXG4gICAgRlRfQ09ORklHVVJBVElPTjogMjg5LFxuICAgIEZUX0RJU0NSRVRJT05BUllfREFUQTogMjkwLFxuICAgIEZUX0xJTkVfMV9PUFRJT05BTF9EQVRBOiAyOTEsXG4gICAgRlRfTElORV8yX09QVElPTkFMX0RBVEE6IDI5MixcbiAgICBGVF9MSU5FXzNfT1BUSU9OQUxfREFUQTogMjkzLFxuICAgIEZUX0VRVl9DT0RFOiAyOTQsXG4gICAgRlRfQUxUX0NPREU6IDI5NSxcbiAgICBGVF9CSU5BUllfQ09ERTogMjk2LFxuICAgIEZUX1BTRVVET19DT0RFOiAyOTcsXG4gICAgRlRfRkVFOiAyOTgsXG4gICAgRlRfU1RBTVBfTlVNQkVSOiAyOTksXG4gICAgRlRfU0JIX1NFQ1VSSVRZT1BUSU9OUzogMzAwLFxuICAgIEZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOiAzMDEsXG4gICAgRlRfREFURV9PRl9DUkVBVElPTjogMzAyLFxuICAgIEZUX1ZBTElESVRZX1BFUklPRDogMzAzLFxuICAgIEZUX1BBVFJPTl9IRUFERVJfVkVSU0lPTjogMzA0LFxuICAgIEZUX0JEQl9UWVBFOiAzMDUsXG4gICAgRlRfQklPTUVUUklDX1RZUEU6IDMwNixcbiAgICBGVF9CSU9NRVRSSUNfU1VCVFlQRTogMzA3LFxuICAgIEZUX0JJT01FVFJJQ19QUk9EVUNUSUQ6IDMwOCxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOiAzMDksXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9UWVBFOiAzMTAsXG4gICAgRlRfUEhPTkU6IDMxMSxcbiAgICBGVF9QUk9GRVNTSU9OOiAzMTIsXG4gICAgRlRfVElUTEU6IDMxMyxcbiAgICBGVF9QRVJTT05BTF9TVU1NQVJZOiAzMTQsXG4gICAgRlRfT1RIRVJfVkFMSURfSUQ6IDMxNSxcbiAgICBGVF9DVVNUT0RZX0lORk86IDMxNixcbiAgICBGVF9PVEhFUl9OQU1FOiAzMTcsXG4gICAgRlRfT0JTRVJWQVRJT05TOiAzMTgsXG4gICAgRlRfVEFYOiAzMTksXG4gICAgRlRfREFURV9PRl9QRVJTT05BTElaQVRJT046IDMyMCxcbiAgICBGVF9QRVJTT05BTElaQVRJT05fU046IDMyMSxcbiAgICBGVF9PVEhFUlBFUlNPTl9OQU1FOiAzMjIsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfREFURV9PRl9SRUNPUkQ6IDMyMyxcbiAgICBGVF9QRVJTT05UT05PVElGWV9OQU1FOiAzMjQsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfUEhPTkU6IDMyNSxcbiAgICBGVF9QRVJTT05UT05PVElGWV9BRERSRVNTOiAzMjYsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfSVNTVUVSOiAzMjcsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfU1VCSkVDVDogMzI4LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTogMzI5LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElEVE86IDMzMCxcbiAgICBGVF9WUkNfREFUQU9CSkVDVF9FTlRSWTogMzMxLFxuICAgIEZUX1RZUEVfQVBQUk9WQUxfTlVNQkVSOiAzMzIsXG4gICAgRlRfQURNSU5JU1RSQVRJVkVfTlVNQkVSOiAzMzMsXG4gICAgRlRfRE9DVU1FTlRfRElTQ1JJTUlOQVRPUjogMzM0LFxuICAgIEZUX0RBVEFfRElTQ1JJTUlOQVRPUjogMzM1LFxuICAgIEZUX0lTT19JU1NVRVJfSURfTlVNQkVSOiAzMzYsXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcbiAgICBGVF9DSVRJWkVOU0hJUF9TVEFUVVM6IDYyNSxcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX0ZST006IDYyNixcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX1RPOiA2MjcsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfRlJPTTogNjI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX1RPOiA2MjksXG4gICAgRlRfRExDTEFTU0NPREVfTlRfTk9URVM6IDYzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9GUk9NOiA2MzEsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fVE86IDYzMixcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9OT1RFUzogNjMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX0ZST006IDYzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19UTzogNjM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX05PVEVTOiA2MzYsXG4gICAgRlRfQUxUX0RBVEVfT0ZfRVhQSVJZOiA2MzcsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfRlJPTTogNjM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX1RPOiA2MzksXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfTk9URVM6IDY0MCxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9UTzogNjQzLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX0ZST006IDY0MixcbiAgICBGVF9JU1NVRVJfSURFTlRJRklDQVRJT05fTlVNQkVSOiA2NDEsXG4gICAgRlRfVkFDQ0lOQVRJT05fQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjQ0LFxuICAgIEZUX0ZJUlNUX05BTUU6IDY0NSxcbiAgICBGVF9EQVRFX09GX0FSUklWQUw6IDY0NixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2V4XCJcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXllIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGFpciBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZHJlc3NcIlxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb25vclwiXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNvY2lhbCBpbnN1cmFuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMjFzdCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBDbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2Egc3ViY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogVHlwZVwiXG4gICAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIDQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgaW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIDQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBzdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXJcIlxuICAgICAgICAgICAgY2FzZSA1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXNcIlxuICAgICAgICAgICAgY2FzZSA1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIDUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHNlcmllc1wiXG4gICAgICAgICAgICBjYXNlIDU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIG1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IHBlcm1pc3NpYmxlIHdlaWdodFwiXG4gICAgICAgICAgICBjYXNlIDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVubGFkZW4gbWFzc1wiXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWFcIlxuICAgICAgICAgICAgY2FzZSA2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXRcIlxuICAgICAgICAgICAgY2FzZSA2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCdWlsZGluZ1wiXG4gICAgICAgICAgICBjYXNlIDY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwYXJ0bWVudFwiXG4gICAgICAgICAgICBjYXNlIDY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbnQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50cnkvcmVnaW9uIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlydGggc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdHlcIlxuICAgICAgICAgICAgY2FzZSA3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmFsIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IHJlc3RyaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VlIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSA5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZHVwbGljYXRlc1wiXG4gICAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1lZGljYWwgbm90ZXMvY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tcmVzaWRlbnQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXJhdGlvbiBvZiBzdGF5XCJcbiAgICAgICAgICAgIGNhc2UgMTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRheVwiXG4gICAgICAgICAgICBjYXNlIDEwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aFwiXG4gICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJZZWFyXCJcbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBjdXN0b21lciBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbW1lcmNpYWwgdmVoaWNsZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogRGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFNvY2lhbCBJbnN1cmFuY2UgTnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQTogU3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDExMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IEdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IE5hbWUgcHJlZml4XCJcbiAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIGp1cmlzZGljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBmb3IgdmFsaWRhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDEyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZlbnRvcnkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhY2UvZXRobmljaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiB2ZWhpY2xlIGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMTI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDEyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDEzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGFuZCBnaXZlbiBuYW1lcyAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIGlzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIG5hdGlvbmFsaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHBvd2VyXCJcbiAgICAgICAgICAgIGNhc2UgMTM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSB2b2x1bWVcIlxuICAgICAgICAgICAgY2FzZSAxMzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hhc3NpcyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxMzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSAxNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIDE0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb250cm9sIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXJlbnRzXFwnIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgMTQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY29uZCBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pZGRsZSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgaWRlbnRpZmljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSAxNDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIDE1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAxNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDE1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAxNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDE1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIElUUyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgYWNjZXNzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJpdGFsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDE2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYW55IG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBub3Rlc1wiXG4gICAgICAgICAgICBjYXNlIDE2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG91c2VcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhY2tpbmcgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvb2tsZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaWxkcmVuXCJcbiAgICAgICAgICAgIGNhc2UgMTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvcHlcIlxuICAgICAgICAgICAgY2FzZSAxNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb3NzaWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgMTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlcnJpdG9yaWFsIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyB3aXRoIGNvcnJlY3QgY2hlY2tzdW1zXCJcbiAgICAgICAgICAgIGNhc2UgMTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNETCBSZXN0cmljdGlvbiBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTh0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDE3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWNvcmQgY3JlYXRlZFwiXG4gICAgICAgICAgICBjYXNlIDE3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGR1cGxpY2F0ZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDE3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXJkIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAxNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgSUQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlc3RpbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJsb29kIGdyb3VwXCJcbiAgICAgICAgICAgIGNhc2UgMTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAxODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtYWtlXCJcbiAgICAgICAgICAgIGNhc2UgMTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zYWN0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2VcIlxuICAgICAgICAgICAgY2FzZSAxODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9saW8gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyIEtleVwiXG4gICAgICAgICAgICBjYXNlIDE4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNdW5pY2lwYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSAxODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTG9jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAxOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VjdGlvblwiXG4gICAgICAgICAgICBjYXNlIDE5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPQ1IgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZGVyYWwgZWxlY3Rpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMTkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAxOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAxOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3RlclwiXG4gICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlL251bWJlciBvZiB0aGUgcHJldmlvdXMgZG9jdW1lbnRcIlxuICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmllbGQgZnJvbSBNUlpcIlxuICAgICAgICAgICAgY2FzZSAyMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VycmVudCBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXR1cyBFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rbm90ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1NDIENvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCJcbiAgICAgICAgICAgIGNhc2UgMjU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCJcbiAgICAgICAgICAgIGNhc2UgMjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSAyNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWklQIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCJcbiAgICAgICAgICAgIGNhc2UgMjU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiXG4gICAgICAgICAgICBjYXNlIDI2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgMjYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBDaXR5XCJcbiAgICAgICAgICAgIGNhc2UgMjYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBTdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogQ291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIDI2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0RMIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMjY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTl0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIDI2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXZWlnaHQgKHBvdW5kKVwiXG4gICAgICAgICAgICBjYXNlIDI2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRpY2F0b3Igb2YgZG9jdW1lbnQgbGltaXRlZCBkdXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmRvcnNlbWVudCBleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmV2aXNpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGlhbmNlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAyNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJ1bmNhdGVkIHN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDI3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeGFtIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3JnYW5pemF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSAyNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5IGdyYWRlXCJcbiAgICAgICAgICAgIGNhc2UgMjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhbmtcIlxuICAgICAgICAgICAgY2FzZSAyODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVuZWZpdHMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMjgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIDI4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDI4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yXCJcbiAgICAgICAgICAgIGNhc2UgMjg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlbGF0aW9uc2hpcFwiXG4gICAgICAgICAgICBjYXNlIDI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVU0NJU1wiXG4gICAgICAgICAgICBjYXNlIDI4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIDI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25kaXRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMjg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSAyODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEaXNjcmV0aW9uYXJ5IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAyOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIDI5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgMjkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSAyOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRVFWIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUxUIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmluYXJ5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWVcIlxuICAgICAgICAgICAgY2FzZSAyOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXAgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBzZWN1cml0eSBvcHRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBpbnRlZ3JpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDMwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcmVhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMzAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZhbGlkaXR5IHBlcmlvZFwiXG4gICAgICAgICAgICBjYXNlIDMwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXRyb24gaGVhZGVyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAzMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQkRCIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHN1YnR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHByb2R1Y3QgSURcIlxuICAgICAgICAgICAgY2FzZSAzMDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIGZvcm1hdCBvd25lclwiXG4gICAgICAgICAgICBjYXNlIDMxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAzMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGhvbmVcIlxuICAgICAgICAgICAgY2FzZSAzMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvZmVzc2lvblwiXG4gICAgICAgICAgICBjYXNlIDMxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3NpdGlvblwiXG4gICAgICAgICAgICBjYXNlIDMxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb25hbCBkYXRhIHN1bW1hcnlcIlxuICAgICAgICAgICAgY2FzZSAzMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdmFsaWQgSURzXCJcbiAgICAgICAgICAgIGNhc2UgMzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN1c3RvZHkgaW5mb1wiXG4gICAgICAgICAgICBjYXNlIDMxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9ic2VydmF0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIDMxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXhcIlxuICAgICAgICAgICAgY2FzZSAzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWxpemF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAzMjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlciBvZiBwZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSAzMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgcGVyc29uLCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMzIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IERhdGUgb2YgcmVjb3JkXCJcbiAgICAgICAgICAgIGNhc2UgMzI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmeSBwZXJzb246IE5hbWVcIlxuICAgICAgICAgICAgY2FzZSAzMjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogUGhvbmVcIlxuICAgICAgICAgICAgY2FzZSAzMjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogQWRkcmVzc1wiXG4gICAgICAgICAgICBjYXNlIDMyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzMjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIDMyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZGF0YSBmcm9tIHRoZSBERzEgZGF0YSBncm91cFwiXG4gICAgICAgICAgICBjYXNlIDMzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUeXBlIG9mIGFwcHJvdmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDMzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZG1pbmlzdHJhdGl2ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIDMzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRhIGRpc2NyaW1pbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSAzMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUQgbnVtYmVyIG9mIElTTyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR05JQiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVwYXJ0bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsZWdyYXBoIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxsZXJnaWVzXCJcbiAgICAgICAgICAgIGNhc2UgMzQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VydCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50eVwiXG4gICAgICAgICAgICBjYXNlIDM0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIFNTTlwiXG4gICAgICAgICAgICBjYXNlIDM0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb0QgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4cGlyeSBkYXRlIG9mIE1vdG9yY3ljbGUgTm92aWNlIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDM1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEVUYgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFHWVwiXG4gICAgICAgICAgICBjYXNlIDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQTlIgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIDM1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGFycml2YWxcIlxuICAgICAgICAgICAgY2FzZSAzNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmxpZ2h0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGZsaWdodFwiXG4gICAgICAgICAgICBjYXNlIDM1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWF0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSAzNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0NXIHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgMzYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXIgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAzNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIDM2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb29tIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxpZ2lvblwiXG4gICAgICAgICAgICBjYXNlIDM2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb250aHMgdG8gZXhwaXJlXCJcbiAgICAgICAgICAgIGNhc2UgMzY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVsZWN0cm9uaWMgdGlja2V0IGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIDM2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYXJ0bWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrLWluIHNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIGRlc2lnbmF0b3Igb2YgYm9hcmRpbmcgcGFzcyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAzNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBudW1lcmljIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGlja2V0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVxdWVudCBmbHllciBhaXJsaW5lIGRlc2lnbmF0b3JcIlxuICAgICAgICAgICAgY2FzZSAzNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlcXVlbnQgZmx5ZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZWUgYmFnZ2FnZSBhbGxvd2FuY2VcIlxuICAgICAgICAgICAgY2FzZSAzNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUERGNDE3IGNvZGVjXCJcbiAgICAgICAgICAgIGNhc2UgMzc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmV0ZXJhblwiXG4gICAgICAgICAgICBjYXNlIDM3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNDMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdmlsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDQzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc2VhdHNcIlxuICAgICAgICAgICAgY2FzZSA0MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHN0YW5kaW5nIHBsYWNlc1wiXG4gICAgICAgICAgICBjYXNlIDQzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggc3BlZWRcIlxuICAgICAgICAgICAgY2FzZSA0Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnVlbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNDM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZW52aXJvbm1lbnRhbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNDM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvd2VyLXRvLXdlaWdodCByYXRpb1wiXG4gICAgICAgICAgICBjYXNlIDQ0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyIChicmFrZWQpXCJcbiAgICAgICAgICAgIGNhc2UgNDQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBtYXNzIG9mIHRyYWlsZXIgKHVuYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIDQ0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFuc21pc3Npb24gdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDQ0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFpbGVyIGhpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgNDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjY29tcGFuaWVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGljZSBkaXN0cmljdFwiXG4gICAgICAgICAgICBjYXNlIDQ0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBpc3N1ZSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgNDQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheWxvYWQgY2FwYWNpdHlcIlxuICAgICAgICAgICAgY2FzZSA0NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGF4bGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pc3NpYmxlIGF4bGUgbG9hZFwiXG4gICAgICAgICAgICBjYXNlIDQ1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcmVjaW5jdFwiXG4gICAgICAgICAgICBjYXNlIDQ1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZpdGVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlB1cnBvc2Ugb2YgZW50cnlcIlxuICAgICAgICAgICAgY2FzZSA0NTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2tpbiBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIDQ1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV4aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNDU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgNDU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIDQ1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA0NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBsb3lhbHR5IHByb2dyYW0gZm9yIGZyZXF1ZW50IGZseWVyc1wiXG4gICAgICAgICAgICBjYXNlIDQ1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaWNlbnNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIDQ2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciB0aGFuIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgNDYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhc3QgVHJhY2sgc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIDQ2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPd25lclwiXG4gICAgICAgICAgICBjYXNlIDQ2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgZnJvbSBJQ0FPIFJGSURcIlxuICAgICAgICAgICAgY2FzZSA0NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgNDY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBudW1iZXIgb2YgY2FyZCBpc3N1YW5jZXNcIlxuICAgICAgICAgICAgY2FzZSA0Njc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIDQ2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDZW50dXJ5IG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNDY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0ODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEogdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEogY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0OTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgY2FyZCB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIDQ5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXggbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlYWx0aCBpbnN1cmFuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdyYW5kZmF0aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNDk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlbGVjdGVlIGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIDQ5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBnaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDUwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA1MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgcGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBjb3VudHJ5IG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGZpcnN0IHJlbmV3YWxcIlxuICAgICAgICAgICAgY2FzZSA1MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBzZWNvbmQgcmVuZXdhbFwiXG4gICAgICAgICAgICBjYXNlIDUxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBleGFtaW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIDUxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHBsaWNhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm91Y2hlciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXV0aG9yaXphdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFjdWx0eVwiXG4gICAgICAgICAgICBjYXNlIDUxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGb3JtIG9mIGVkdWNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDUxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETkkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldGlyZW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25hbCBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWdlIGF0IGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNTIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJzIHNpbmNlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNTI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQTEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQTEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVUkxcIlxuICAgICAgICAgICAgY2FzZSA1ODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FsaWJlclwiXG4gICAgICAgICAgICBjYXNlIDU4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb2RlbFwiXG4gICAgICAgICAgICBjYXNlIDU4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWtlXCJcbiAgICAgICAgICAgIGNhc2UgNTg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjeWxpbmRlcnNcIlxuICAgICAgICAgICAgY2FzZSA1ODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiBodXNiYW5kIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDU5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIHdpZmUgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNTkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGggb2Ygd2lmZVwiXG4gICAgICAgICAgICBjYXNlIDU5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoIG9mIGh1c2JhbmRcIlxuICAgICAgICAgICAgY2FzZSA1OTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIGZpcnN0IHBlcnNvblwiXG4gICAgICAgICAgICBjYXNlIDU5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXRpemVuc2hpcCBvZiB0aGUgc2Vjb25kIHBlcnNvblwiXG4gICAgICAgICAgICBjYXNlIDU5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVlYvQ1ZDXCJcbiAgICAgICAgICAgIGNhc2UgNTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4cGlyeSBkYXRlIG9mIGluc3VyYW5jZVwiXG4gICAgICAgICAgICBjYXNlIDU5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3J0Z2FnZSBieVwiXG4gICAgICAgICAgICBjYXNlIDU5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNjAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBwbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDYwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhDIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYxNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgNjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pbGl0YXJ5IHNlcnZpY2UgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBzZXJ2aWNlIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTlQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTlQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsdGVybmF0aXZlIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgNjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENEIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0QgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0QgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2NDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWVyIGlkZW50aWZpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDY0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXltZW50IHBlcmlvZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheW1lbnQgcGVyaW9kIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSB2YWNjaW5hdGlvbiBjZXJ0aWZpY2F0ZSBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgNjQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgY2FzZSA2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb250U3R5bGUgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJPTEQ6IDEsXG4gICAgSVRBTElDOiAyLFxuICAgIEJPTERfSVRBTElDOiAzLFxufVxuXG5leHBvcnQgY29uc3QgRnJhbWVTaGFwZVR5cGUgPSB7XG4gICAgTElORTogMCxcbiAgICBDT1JORVI6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBJUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24gPSB7XG4gICAgUkZJRF9FVkVOVF9DSElQX0RFVEVDVEVEOiAxLFxuICAgIFJGSURfRVZFTlRfUkVBRElOR19FUlJPUjogMixcbiAgICBSRklEX0VYVFJBX0VSUk9SX0NPREU6IFwicmZpZC5lcnJvci5jb2RlXCIsXG59XG5cbmV4cG9ydCBjb25zdCBMQ0lEID0ge1xuICAgIExBVElOOiAwLFxuICAgIEFGUklLQUFOUzogMTA3OCxcbiAgICBBTEJBTklBTjogMTA1MixcbiAgICBBUkFCSUNfQUxHRVJJQTogNTEyMSxcbiAgICBBUkFCSUNfQkFIUkFJTjogMTUzNjEsXG4gICAgQVJBQklDX0VHWVBUOiAzMDczLFxuICAgIEFSQUJJQ19JUkFROiAyMDQ5LFxuICAgIEFSQUJJQ19KT1JEQU46IDExMjY1LFxuICAgIEFSQUJJQ19LVVdBSVQ6IDEzMzEzLFxuICAgIEFSQUJJQ19MRUJBTk9OOiAxMjI4OSxcbiAgICBBUkFCSUNfTElCWUE6IDQwOTcsXG4gICAgQVJBQklDX01PUk9DQ086IDYxNDUsXG4gICAgQVJBQklDX09NQU46IDgxOTMsXG4gICAgQVJBQklDX1FBVEFSOiAxNjM4NSxcbiAgICBBUkFCSUNfU0FVRElfQVJBQklBOiAxMDI1LFxuICAgIEFSQUJJQ19TWVJJQTogMTAyNDEsXG4gICAgQVJBQklDX1RVTklTSUE6IDcxNjksXG4gICAgQVJBQklDX1VBRTogMTQzMzcsXG4gICAgQVJBQklDX1lFTUVOOiA5MjE3LFxuICAgIEFSQUJJQ19BUk1FTklBTjogMTA2NyxcbiAgICBBWkVSSV9DWVJJTElDOiAyMDkyLFxuICAgIEFaRVJJX0xBVElOOiAxMDY4LFxuICAgIEJBU1FVRTogMTA2OSxcbiAgICBCRUxBUlVTSUFOOiAxMDU5LFxuICAgIEJVTEdBUklBTjogMTAyNixcbiAgICBDQVRBTEFOOiAxMDI3LFxuICAgIENISU5FU0VfSE9OR0tPTkdfU0FSOiAzMDc2LFxuICAgIENISU5FU0VfTUFDQU9fU0FSOiA1MTI0LFxuICAgIENISU5FU0U6IDIwNTIsXG4gICAgQ0hJTkVTRV9TSU5HQVBPUkU6IDQxMDAsXG4gICAgQ0hJTkVTRV9UQUlXQU46IDEwMjgsXG4gICAgQ1JPQVRJQU46IDEwNTAsXG4gICAgQ1pFQ0g6IDEwMjksXG4gICAgREFOSVNIOiAxMDMwLFxuICAgIERJVkVISTogMTEyNSxcbiAgICBEVVRDSF9CRUxHSVVNOiAyMDY3LFxuICAgIERVVENIX05FVEhFUkxBTkRTOiAxMDQzLFxuICAgIEVOR0xJU0hfQVVTVFJBTElBOiAzMDgxLFxuICAgIEVOR0xJU0hfQkVMSVpFOiAxMDI0OSxcbiAgICBFTkdMSVNIX0NBTkFEQTogNDEwNSxcbiAgICBFTkdMSVNIX0NBUlJJQkVBTjogOTIyNSxcbiAgICBFTkdMSVNIX0lSRUxBTkQ6IDYxNTMsXG4gICAgRU5HTElTSF9KQU1BSUNBOiA4MjAxLFxuICAgIEVOR0xJU0hfTkVXX1pFQUxBTkQ6IDUxMjksXG4gICAgRU5HTElTSF9QSElMSVBQSU5FUzogMTMzMjEsXG4gICAgRU5HTElTSF9TT1VUSF9BRlJJQ0E6IDcxNzcsXG4gICAgRU5HTElTSF9UUklOSURBRDogMTEyNzMsXG4gICAgRU5HTElTSF9VSzogMjA1NyxcbiAgICBFTkdMSVNIX1VTOiAxMDMzLFxuICAgIEVOR0xJU0hfWklNQkFCV0U6IDEyMjk3LFxuICAgIEVTVE9OSUFOOiAxMDYxLFxuICAgIEZBRVJPRVNFOiAxMDgwLFxuICAgIEZBUlNJOiAxMDY1LFxuICAgIEZJTk5JU0g6IDEwMzUsXG4gICAgRlJFTkNIX0JFTEdJVU06IDIwNjAsXG4gICAgRlJFTkNIX0NBTkFEQTogMzA4NCxcbiAgICBGUkVOQ0hfRlJBTkNFOiAxMDM2LFxuICAgIEZSRU5DSF9MVVhFTUJPVVJHOiA1MTMyLFxuICAgIEZSRU5DSF9NT05BQ086IDYxNTYsXG4gICAgRlJFTkNIX1NXSVRaRVJMQU5EOiA0MTA4LFxuICAgIEZZUk9fTUFDRURPTklBTjogMTA3MSxcbiAgICBHQUxJQ0lBTjogMTExMCxcbiAgICBHRU9SR0lBTjogMTA3OSxcbiAgICBHRVJNQU5fQVVTVFJJQTogMzA3OSxcbiAgICBHRVJNQU5fR0VSTUFOWTogMTAzMSxcbiAgICBHRVJNQU5fTElFQ0hURU5TVEVJTjogNTEyNyxcbiAgICBHRVJNQU5fTFVYRU1CT1VSRzogNDEwMyxcbiAgICBHRVJNQU5fU1dJVFpFUkxBTkQ6IDIwNTUsXG4gICAgR1JFRUs6IDEwMzIsXG4gICAgR1VKQVJBVEk6IDEwOTUsXG4gICAgSEVCUkVXOiAxMDM3LFxuICAgIEhJTkRJX0lORElBOiAxMDgxLFxuICAgIEhVTkdBUklBTjogMTAzOCxcbiAgICBJQ0VMQU5ESUM6IDEwMzksXG4gICAgSU5ET05FU0lBTjogMTA1NyxcbiAgICBJVEFMSUFOX0lUQUxZOiAxMDQwLFxuICAgIElUQUxJQU5fU1dJVFpFUkxBTkQ6IDIwNjQsXG4gICAgSkFQQU5FU0U6IDEwNDEsXG4gICAgS0FOTkFEQTogMTA5OSxcbiAgICBLQVpBS0g6IDEwODcsXG4gICAgS09OS0FOSTogMTExMSxcbiAgICBLT1JFQU46IDEwNDIsXG4gICAgS1lSR1laX0NZUklMSUNLOiAxMDg4LFxuICAgIExBVFZJQU46IDEwNjIsXG4gICAgTElUSFVBTklBTjogMTA2MyxcbiAgICBNQUxBWV9NQUxBWVNJQTogMTA4NixcbiAgICBNQUxBWV9CUlVORUlfREFSVVNTQUxBTTogMjExMCxcbiAgICBNQVJBVEhJOiAxMTAyLFxuICAgIE1PTkdPTElBTl9DWVJJTElDOiAxMTA0LFxuICAgIE5PUldFR0lBTl9CT0tNQUw6IDEwNDQsXG4gICAgTk9SV0VHSUFOX05ZT1JTSzogMjA2OCxcbiAgICBQT0xJU0g6IDEwNDUsXG4gICAgUE9SVFVHVUVTRV9CUkFaSUw6IDEwNDYsXG4gICAgUE9SVFVHVUVTRV9QT1JUVUdBTDogMjA3MCxcbiAgICBQVU5KQUJJOiAxMDk0LFxuICAgIFJIQUVUT19ST01BTklDOiAxMDQ3LFxuICAgIFJPTUFOSUFOOiAxMDQ4LFxuICAgIFJVU1NJQU46IDEwNDksXG4gICAgU0FOU0tSSVQ6IDExMDMsXG4gICAgU0VSQklBTl9DWVJJTElDOiAzMDk4LFxuICAgIFNFUkJJQU5fTEFUSU46IDIwNzQsXG4gICAgU0xPVkFLOiAxMDUxLFxuICAgIFNMT1ZFTklBTjogMTA2MCxcbiAgICBTUEFOSVNIX0FSR0VOVElOQTogMTEyNzQsXG4gICAgU1BBTklTSF9CT0xJVklBOiAxNjM5NCxcbiAgICBTUEFOSVNIX0NISUxFOiAxMzMyMixcbiAgICBTUEFOSUNIX0NPTE9NQklBOiA5MjI2LFxuICAgIFNQQU5JU0hfQ09TVEFfUklDQTogNTEzMCxcbiAgICBTUEFOSVNIX0RPTUlOSUNBTl9SRVBVQkxJQzogNzE3OCxcbiAgICBTUEFOSVNIX0VDVUFET1I6IDEyMjk4LFxuICAgIFNQQU5JU0hfRUxfU0FMVkFET1I6IDE3NDE4LFxuICAgIFNQQU5JU0hfR1VBVEVNQUxBOiA0MTA2LFxuICAgIFNQQU5JU0hfSE9ORFVSQVM6IDE4NDQyLFxuICAgIFNQQU5JU0hfTUVYSUNPOiAyMDU4LFxuICAgIFNQQU5JU0hfTklDQVJBR1VBOiAxOTQ2NixcbiAgICBTUEFOSVNIX1BBTkFNQTogNjE1NCxcbiAgICBTUEFOSVNIX1BBUkFHVUFZOiAxNTM3MCxcbiAgICBTUEFOSVNIX1BFUlU6IDEwMjUwLFxuICAgIFNQQU5JU0hfUFVFUlRPX1JJQ086IDIwNDkwLFxuICAgIFNQQU5JU0hfVFJBRElUSU9OQUxfU09SVDogMTAzNCxcbiAgICBTUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDogMzA4MixcbiAgICBTUEFOSVNIX1VSVUdVQVk6IDE0MzQ2LFxuICAgIFNQQU5JU0hfVkVORVpVRUxBOiA4MjAyLFxuICAgIFNXQUhJTEk6IDEwODksXG4gICAgU1dFRElTSDogMTA1MyxcbiAgICBTV0VESVNIX0ZJTkxBTkQ6IDIwNzcsXG4gICAgU1lSSUFDOiAxMTE0LFxuICAgIFRBTUlMOiAxMDk3LFxuICAgIFRBVEFSOiAxMDkyLFxuICAgIFRFTFVHVTogMTA5OCxcbiAgICBUSEFJX1RIQUlMQU5EOiAxMDU0LFxuICAgIFRVUktJU0g6IDEwNTUsXG4gICAgVEFKSUtfQ1lSSUxMSUM6IDEwNjQsXG4gICAgVFVSS01FTjogMTA5MCxcbiAgICBVS1JBSU5JQU46IDEwNTgsXG4gICAgVVJEVTogMTA1NixcbiAgICBVWkJFS19DWVJJTElDOiAyMTE1LFxuICAgIFVaQkVLX0xBVElOOiAxMDkxLFxuICAgIFZJRVROQU1FU0U6IDEwNjYsXG4gICAgQ1RDX1NJTVBMSUZJRUQ6IDUwMDAxLFxuICAgIENUQ19UUkFESVRJT05BTDogNTAwMDIsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYXRpblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUZSSUtBQU5TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFmcmlrYWFuc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxCQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxiYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19BTEdFUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQWxnZXJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19CQUhSQUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQmFocmFpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19FR1lQVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEVneXB0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0lSQVE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChJcmFxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0pPUkRBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEpvcmRhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19LVVdBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChLdXdhaXQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTEVCQU5PTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExlYmFub24pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTElCWUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChMaWJ5YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19NT1JPQ0NPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTW9yb2NjbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19PTUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoT21hbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19RQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFFhdGFyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NBVURJX0FSQUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFNhdWRpIEFyYWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19TWVJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFN5cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1RVTklTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChUdW5pc2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1VBRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFUuQS5FLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19ZRU1FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFllbWVuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FSTUVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFybWVuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BWkVSSV9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF6ZXJpIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFaRVJJX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF6ZXJpIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJBU1FVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYXNxdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJFTEFSVVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVsYXJ1c2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQlVMR0FSSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ1bGdhcmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0FUQUxBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRhbGFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX0hPTkdLT05HX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChIb25nS29uZyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX01BQ0FPX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChNYWNhbyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfU0lOR0FQT1JFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFNpbmdhcG9yZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfVEFJV0FOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFRhaXdhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNST0FUSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNyb2F0aWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DWkVDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDemVjaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREFOSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhbmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRElWRUhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpdmVoaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXRjaCAoQmVsZ2l1bSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRVVENIX05FVEhFUkxBTkRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChOZXRoZXJsYW5kcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQVVTVFJBTElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEF1c3RyYWxpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQkVMSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEJlbGl6ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FSUklCRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhcmliYmVhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfSVJFTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChJcmVsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9KQU1BSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEphbWFpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX05FV19aRUFMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKE5ldyBaZWFsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9QSElMSVBQSU5FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChQaGlsaXBwaW5lcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfU09VVEhfQUZSSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFNvdXRoIEFmcmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVFJJTklEQUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVHJpbmlkYWQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9VUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9aSU1CQUJXRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChaaW1iYWJ3ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVTVE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVzdG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQUVST0VTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYWVyb2VzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRkFSU0k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFyc2lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZJTk5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlubmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0JFTEdJVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0NBTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9GUkFOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChGcmFuY2UpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTFVYRU1CT1VSRzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEx1eGVtYm91cmcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTU9OQUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTW9uYWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HQUxJQ0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHYWxpY2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VPUkdJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VvcmdpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9BVVNUUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoQXVzdHJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9HRVJNQU5ZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoR2VybWFueSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MSUVDSFRFTlNURUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTGllY2h0ZW5zdGVpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1JFRUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3JlZWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdVSkFSQVRJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkd1amFyYXRpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IRUJSRVc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVicmV3XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ISU5ESV9JTkRJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIaW5kaSAoSW5kaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IVU5HQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSHVuZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JQ0VMQU5ESUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWNlbGFuZGljXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JTkRPTkVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluZG9uZXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fSVRBTFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoSXRhbHkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JVEFMSUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkl0YWxpYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSkFQQU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSmFwYW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBTk5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2FubmFkYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FaQUtIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkthemFraFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09OS0FOSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLb25rYW5pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LT1JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29yZWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LWVJHWVpfQ1lSSUxJQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS3lyZ3l6IChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVFZJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0dmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTElUSFVBTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaXRodWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GWVJPX01BQ0VET05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRllSTyBNYWNlZG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9NQUxBWVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoTWFsYXlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9CUlVORUlfREFSVVNTQUxBTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoQnJ1bmVpIERhcnVzc2FsYW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQVJBVEhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hcmF0aGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1PTkdPTElBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbmdvbGlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OT1JXRUdJQU5fQk9LTUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vcndlZ2lhbiAoQm9rbWFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX05ZT1JTSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKE55bm9yc2spXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT0xJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX0JSQVpJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChCcmF6aWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX1BPUlRVR0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnR1Z3Vlc2UgKFBvcnR1Z2FsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUFVOSkFCSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdW5qYWJpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SSEFFVE9fUk9NQU5JQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaGFldG8tUm9tYW5pY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUk9NQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9tYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJVU1NJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVzc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0FOU0tSSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Fuc2tyaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNFUkJJQU5fQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJiaWFuIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNFUkJJQU5fTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyYmlhbiAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TTE9WQUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2xvdmFrXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TTE9WRU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2xvdmVuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0FSR0VOVElOQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChBcmdlbnRpbmEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0JPTElWSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQm9saXZpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQ0hJTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ2hpbGUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSUNIX0NPTE9NQklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENvbG9tYmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9DT1NUQV9SSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENvc3RhIFJpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0RPTUlOSUNBTl9SRVBVQkxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChEb21pbmljYW4gUmVwdWJsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0VDVUFET1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRWN1YWRvcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRUxfU0FMVkFET1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRWwgU2FsdmFkb3IpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0dVQVRFTUFMQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChHdWF0ZW1hbGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0hPTkRVUkFTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEhvbmR1cmFzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9NRVhJQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoTWV4aWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9OSUNBUkFHVUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoTmljYXJhZ3VhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QQU5BTUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGFuYW1hKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QQVJBR1VBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQYXJhZ3VheSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEVSVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQZXJ1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QVUVSVE9fUklDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQdWVydG8gUmljbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVFJBRElUSU9OQUxfU09SVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChUcmFkaXRpb25hbCBTb3J0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoSW50ZXJuYXRpb25hbCBTb3J0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9VUlVHVUFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFVydWd1YXkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1ZFTkVaVUVMQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChWZW5lenVlbGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0FISUxJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3YWhpbGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXRURJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dFRElTSF9GSU5MQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3ZWRpc2ggKEZpbmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TWVJJQUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3lyaWFjXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQU1JTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYW1pbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFUQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF0YXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRFTFVHVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZWx1Z3VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRIQUlfVEhBSUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhhaSAoVGhhaWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UVVJLSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1cmtpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBSklLX0NZUklMTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhamlrIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRVUktNRU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHVya21lblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVUtSQUlOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVrcmFpbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVJEVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVcmR1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VWkJFS19DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlV6YmVrIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVaQkVLX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlV6YmVrIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlZJRVROQU1FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlldG5hbWVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1RDX1NJTVBMSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1RDIFNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNUQ19UUkFESVRJT05BTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVEMgVHJhZGl0aW9uYWxcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUEtEUmVzb3VyY2VUeXBlID0ge1xuICAgIENFUlRJRklDQVRFX1BBOiAwLFxuICAgIENFUlRJRklDQVRFX1RBOiAxLFxuICAgIExESUY6IDIsXG4gICAgQ1JMOiAzLFxuICAgIE1MOiA0LFxuICAgIERFRkw6IDUsXG4gICAgREVWTDogNixcbiAgICBCTDogNyxcblxyXG4gICAgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwicGFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfVEFcclxuICAgICAgICAgICAgY2FzZSBcImxkaWZcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxESUZcclxuICAgICAgICAgICAgY2FzZSBcImNybFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1JMXHJcbiAgICAgICAgICAgIGNhc2UgXCJtbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTUxcclxuICAgICAgICAgICAgY2FzZSBcImRlZmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFRkxcclxuICAgICAgICAgICAgY2FzZSBcImRldmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFVkxcclxuICAgICAgICAgICAgY2FzZSBcImJsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CTFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IHtcbiAgICBOT1RfUkVBRFk6IDAsXG4gICAgUkVBRFk6IDEsXG4gICAgVElNRU9VVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFJGSUREZWxlZ2F0ZSA9IHtcbiAgICBOVUxMOiAwLFxuICAgIE5PX1BBOiAxLFxuICAgIEZVTEw6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBSR0xNZWFzdXJlU3lzdGVtID0ge1xuICAgIE1FVFJJQzogMCxcbiAgICBJTVBFUklBTDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvSWRlbnRpZmllciA9IHtcbiAgICBTQ0VOQVJJT19NUlo6IFwiTXJ6XCIsXG4gICAgU0NFTkFSSU9fQkFSQ09ERTogXCJCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFOiBcIkxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX09DUjogXCJPY3JcIixcbiAgICBTQ0VOQVJJT19ET0NUWVBFOiBcIkRvY1R5cGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERTogXCJNcnpPckJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfTE9DQVRFOiBcIk1yek9yTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX0FORF9MT0NBVEU6IFwiTXJ6QW5kTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX09DUjogXCJNcnpPck9jclwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFX09SX09DUjogXCJNcnpPckJhcmNvZGVPck9jclwiLFxuICAgIFNDRU5BUklPX0xPQ0FURV9WSVNVQUxfQU5EX01SWl9PUl9PQ1I6IFwiTG9jYXRlVmlzdWFsX0FuZF9NcnpPck9jclwiLFxuICAgIFNDRU5BUklPX0ZVTExfUFJPQ0VTUzogXCJGdWxsUHJvY2Vzc1wiLFxuICAgIFNDRU5BUklPX0ZVTExfQVVUSDogXCJGdWxsQXV0aFwiLFxuICAgIFNDRU5BUklPX0lEM1JVUzogXCJJZDNSdXNcIixcbiAgICBTQ0VOQVJJT19SVVNfU1RBTVA6IFwiUnVzU3RhbXBcIixcbiAgICBTQ0VOQVJJT19PQ1JfRlJFRTogXCJPY3JGcmVlXCIsXG4gICAgU0NFTkFSSU9fQ1JFRElUX0NBUkQ6IFwiQ3JlZGl0Q2FyZFwiLFxuICAgIFNDRU5BUklPX0NBUFRVUkU6IFwiQ2FwdHVyZVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGluZUNhcCA9IHtcbiAgICBCdXR0OiAwLFxuICAgIFJvdW5kOiAxLFxuICAgIFNxdWFyZTogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJSW50ZXJmYWNlT3JpZW50YXRpb25NYXNrID0ge1xuICAgIFBvcnRyYWl0OiAwLFxuICAgIExhbmRzY2FwZUxlZnQ6IDEsXG4gICAgTGFuZHNjYXBlUmlnaHQ6IDIsXG4gICAgUG9ydHJhaXRVcHNpZGVEb3duOiAzLFxuICAgIExhbmRzY2FwZTogNCxcbiAgICBBbGw6IDUsXG4gICAgQWxsQnV0VXBzaWRlRG93bjogNixcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQgPSB7XG4gICAgTG93OiAwLFxuICAgIE1lZGl1bTogMSxcbiAgICBIaWdoOiAyLFxuICAgIFBob3RvOiAzLFxuICAgIElucHV0UHJpb3JpdHk6IDQsXG4gICAgUUhEOTYweDU0MDogNSxcbiAgICBIZDEyODB4NzIwOiA2LFxuICAgIEhkMTkyMHgxMDgwOiA3LFxuICAgIEhkNEszODQweDIxNjA6IDgsXG4gICAgSUZyYW1lOTYweDU0MDogOSxcbiAgICBJRnJhbWUxMjgweDcyMDogMTAsXG4gICAgUXZnYTMyMHgyNDA6IDExLFxuICAgIFZnYTY0MHg0ODA6IDEyLFxuICAgIENpZjM1MngyODg6IDEzLFxufVxuXG5leHBvcnQgY29uc3QgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24gPSB7XG4gICAgRnJvbnQ6IDAsXG4gICAgQmFjazogMSxcbiAgICBVbnNwZWNpZmllZDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFVJVmlld0NvbnRlbnRNb2RlID0ge1xuICAgIFNjYWxlVG9GaWxsOiAwLFxuICAgIFNjYWxlQXNwZWN0Rml0OiAxLFxuICAgIFNjYWxlQXNwZWN0RmlsbDogMixcbiAgICBSZWRyYXc6IDMsXG4gICAgQ2VudGVyOiA0LFxuICAgIFRvcDogNSxcbiAgICBCb3R0b206IDYsXG4gICAgTGVmdDogNyxcbiAgICBSaWdodDogOCxcbiAgICBUb3BMZWZ0OiA5LFxuICAgIFRvcFJpZ2h0OiAxMCxcbiAgICBCb3R0b21MZWZ0OiAxMSxcbiAgICBCb3R0b21SaWdodDogMTIsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgQmFyY29kZVJlc3VsdCxcbiAgIEJhcmNvZGVUeXBlLFxuICAgQ2FtZXJhTW9kZSxcbiAgIENhbWVyYVR5cGVzLFxuICAgQ2FwdHVyZU1vZGUsXG4gICBkaURvY1R5cGUsXG4gICBEb2NGb3JtYXQsXG4gICBEb2NSZWFkZXJBY3Rpb24sXG4gICBEb2NSZWFkZXJGcmFtZSxcbiAgIERvY1JlYWRlck9yaWVudGF0aW9uLFxuICAgRG9jdW1lbnRSZWFkZXJFeGNlcHRpb25FbnVtLFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBlQ2hlY2tSZXN1bHQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBlTERTX1BhcnNpbmdFcnJvckNvZGVzLFxuICAgZUxEU19QYXJzaW5nTm90aWZpY2F0aW9uQ29kZXMsXG4gICBlUHJvY2Vzc0dMQ29tbWFuZHMsXG4gICBlUmVxdWVzdENvbW1hbmQsXG4gICBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9CYXVkUmF0ZSxcbiAgIGVSRklEX0NlcnRpZmljYXRlVHlwZSxcbiAgIGVSRklEX0RhdGFGaWxlX1R5cGUsXG4gICBlUkZJRF9FcnJvckNvZGVzLFxuICAgZVJGSURfTm90aWZpY2F0aW9uQ29kZXMsXG4gICBlUkZJRF9QYXNzd29yZF9UeXBlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGVSRklEX1Rlcm1pbmFsVHlwZSxcbiAgIGVSUFJNX0F1dGhlbnRpY2l0eSxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgZVJQUk1fTGlnaHRzLFxuICAgZVJQUk1fUmVzdWx0VHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBlU2lnbk1hbmFnZW1lbnRBY3Rpb24sXG4gICBlVmlzdWFsRmllbGRUeXBlLFxuICAgRm9udFN0eWxlLFxuICAgRnJhbWVTaGFwZVR5cGUsXG4gICBJUmZpZE5vdGlmaWNhdGlvbkNvbXBsZXRpb24sXG4gICBMQ0lELFxuICAgUEtEUmVzb3VyY2VUeXBlLFxuICAgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzLFxuICAgUkZJRERlbGVnYXRlLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIFNjZW5hcmlvSWRlbnRpZmllcixcbiAgIExpbmVDYXAsXG4gICBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayxcbiAgIEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQsXG4gICBBVkNhcHR1cmVEZXZpY2VQb3NpdGlvbixcbiAgIFVJVmlld0NvbnRlbnRNb2RlLFxufVxuXG4vKipcbiAqIEBuYW1lIERvY3VtZW50UmVhZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBEb2N1bWVudCBSZWFkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFJlYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtcmVhZGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBEb2N1bWVudFJlYWRlcjogRG9jdW1lbnRSZWFkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLkRvY3VtZW50UmVhZGVyLnByZXBhcmVEYXRhYmFzZShcIkZ1bGxcIikuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICogICAgICAgIGlmIChtZXNzYWdlID09IFwiZGF0YWJhc2UgcHJlcGFyZWRcIikge1xuICogICAgICAgICAgdGhpcy5Eb2N1bWVudFJlYWRlci5pbml0aWFsaXplUmVhZGVyKGxpY2Vuc2UpLnRoZW4obSA9PiBvbkluaXRpYWxpemVkKCkpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gKiAgICAgICAgfVxuICogICAgICB9KVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRSZWFkZXInLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICAgIHBsdWdpblJlZjogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9Eb2N1bWVudFJlYWRlci1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogIEluaXRpYWxseSBtYWRlIGZvciBjYXBhY2l0b3IgYXMgaXQgaGFzIG5vIGNvbnZlbmllbnQgd2F5IHRvIHJlYWQgYXNzZXRzXG4gICAgICogIEFsbG93cyB5b3UgdG8gaW5pdGlhbGl6ZSBkb2N1bWVudCByZWFkZXIgd2l0aG91dCByZWFkaW5nIGxpY2Vuc2UgeW91cnNlbGYuXG4gICAgICogIExpY2Vuc2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlYWQgZnJvbVxuICAgICAqICBBbmRyb2lkOiBcImFuZHJvaWQvYXBwL3NyYy9tYWluL2Fzc2V0cy9yZWd1bGEubGljZW5zZVwiXG4gICAgICogIGlPUzogXCJpb3MvQXBwL0FwcC9yZWd1bGEubGljZW5zZVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXJBdXRvbWF0aWNhbGx5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIEFQSSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEFQSVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBdmFpbGFibGVTY2VuYXJpb3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNSRklEQXZhaWxhYmxlRm9yVXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIENvcmUgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDb3JlTW9kZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBDb3JlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29yZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YWJhc2UgZXhwb3J0IGRhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIElEXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlSUQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgZGF0YWJhc2UgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIHRoZSBTREsgaXMgcmVhZHkgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlcklzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREb2N1bWVudFJlYWRlclN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBudW1iZXIgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGNvdW50cmllc1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZUNvdW50cmllc051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBudW1iZXIgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGRvY3VtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZURvY3VtZW50c051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBzZWxlY3RlZCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZWxlY3RlZFNjZW5hcmlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIHBhdGggdG8gdGhlIGZvbGRlciBvZiB0aGUgY3VycmVudCBzZXNzaW9uLiBCZWZvcmUgdXNpbmcgdGhpcywgZW5hYmxlIGxvZyBzYXZpbmcuIEVhY2ggbmV3IHNlc3Npb24gcHJvdmlkZXMgYSBkaWZmZXJlbnQgcGF0aFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXNzaW9uTG9nRm9sZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkIGRhdGFiYXNlIGRvY3VtZW50cyB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEZXNjcmlwdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluZGljYXRlIHRoYW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhlIG5leHQgcGFnZSBpcyBzdGFydGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzdGFydCBhIG5ldyBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TmV3U2Vzc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIG9wZW4gdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIHN0YXJ0IGl0cyBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc3RhcnRSRklEUmVhZGVyKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoZSBtZXRob2QgYmVsb3cgdG8gY2xvc2UgdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIGVuZCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbG9zZSBjYW1lcmEgcHJldmlldyBhbmQgc3RvcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BTY2FubmVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRlaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0aWFsaXplUmVhZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBhIG1vYmlsZSBhdXRoZW50aWNhdG9yIGlzIGF2YWlsYWJsZSBmb3IgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzQXV0aGVudGljYXRvckF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRDb25maWcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFJmaWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IGFuIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgbGljZW5zZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMaWNlbnNlRXhwaXJ5RGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IGEgbGlzdCBvZiBjb3VudHJ5IGlkZW50aWZpZXJzIHRoYXQgYXJlIGRlZmluZWQgZm9yIHByb2Nlc3NpbmcgaW4gdGhlIGxpY2Vuc2UuIElmIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgYXJlIG5vIHJlc3RyaWN0aW9ucyBmb3IgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRMaWNlbnNlQ291bnRyeUZpbHRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBsaWNlbnNlSXNSZmlkQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgY2FtZXJhIHNlc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q2FtZXJhU2Vzc2lvbklzUGF1c2VkKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byByZW1vdmUgdGhlIGFkZGVkIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlbW92ZURhdGFiYXNlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjYW5jZWwgZGF0YWJhc2UgdXBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNhbmNlbERCVXBkYXRlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlc2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIFBLRCBjZXJ0aWZpY2F0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY2xlYXJQS0RDZXJ0aWZpY2F0ZXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgUkZJRCBjaGlwIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWFkUkZJRCgpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2Vzc2lvblN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgUkZJRCBkZWxlZ2F0ZSBvbiBpT1MgdG8gZWl0aGVyIG51bGwsXG4gICAgICogIGRlbGVnYXRlIHdpdGggb25SZXF1ZXN0UEFDZXJ0aWZpY2F0ZXMgY2FsbGJhY2sgb3Igd2l0aG91dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR9IGRlbGVnYXRlIHVzZSBlbnVtIFJGSUREZWxlZ2F0ZVxuICAgICAqICBOVUxMID0gMFxuICAgICAqICBOT19QQSA9IDFcbiAgICAgKiAgRlVMTCA9IDJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWREZWxlZ2F0ZShkZWxlZ2F0ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZW5hYmxlIENvcmUgbG9nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2dzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRFbmFibGVDb3JlTG9ncyhsb2dzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB0byBhZGQgYSBsaXN0IG9mIFBLRCBjZXJ0aWZpY2F0ZXMgZHVyaW5nIGluaXRpYWxpemF0aW9uIHByb2Nlc3Mgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gQ29yZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIElmIHNldCwgdGhlIGNhbWVyYSBzZXNzaW9uIHdpbGwgYmUgcGF1c2VkIGFzIHNvb24gYXMgdGhlIHJlc3VsdCBpcyByZWNlaXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENhbWVyYVNlc3Npb25Jc1BhdXNlZChwYXVzZWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW8gU2NlbmFyaW9gcyB1bmlxdWUgaWRlbnRpZmllclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlcyhpbWFnZXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSUQoY2FtZXJhSUQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENvbmZpZyhjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2NlbmFyaW8gSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7bmFtZT86IHZhbHVlMSxuYW1lPzogdmFsdWUyLCAuLi59XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTY2VuYXJpbyhzY2VuYXJpbzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlIExpY2Vuc2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIobGljZW5zZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZG93bmxvYWQgYSBkYXRhYmFzZSBmcm9tIHRoZSBSZWd1bGEncyBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZVR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcHJlcGFyZURhdGFiYXNlKGRhdGFiYXNlVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2UoaW1hZ2U6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNlc3Npb24gc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2Vzc2lvblN0YXR1cyhzdGF0dXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgUEFDZXJ0aWZpY2F0ZXMgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVBBQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBUQUNlcnRpZmljYXRlcyB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlVEFDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBU2lnbmF0dXJlIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2J5dGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBU2lnbmF0dXJlKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcGFyc2UgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VydmVyIHdoZW4gdXNpbmcgYW4gZW5jcnlwdGVkIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBqc29uIHJlc3VsdHMgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHBhcnNlQ29yZVJlc3VsdHMoanNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXIgd2l0aCB0aGUgcGF0aCB0byB0aGUgZGF0YWJhc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlIExpY2Vuc2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIHRvIHRoZSBkYXRhYmFzZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcldpdGhEYXRhYmFzZVBhdGgobGljZW5zZTogYW55LCBwYXRoOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIERvY3VtZW50IFJlYWRlciB3aXRoIGRhdGFiYXNlIGJpbmFyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxpY2Vuc2UgTGljZW5zZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYiBEYXRhYmFzZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlcldpdGhEYXRhYmFzZShsaWNlbnNlOiBhbnksIGRiOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2UgZnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlRnJhbWUoaW1hZ2U6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2Ugd2l0aCBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoaW1hZ2U6IGFueSwgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGEgc3RyZWFtIG9mIGZyYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ5dGVTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXRQYXJhbX0gcGFyYW1zIEltYWdlIGlucHV0IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVWaWRlb0ZyYW1lKGJ5dGVTdHJpbmc6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCBhbmQgb3B0aW9ucyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlEXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgICAqICAgIHByb2Nlc3NQYXJhbXM/OiB7bmFtZT86IHZhbHVlNSwgbmFtZT86IHZhbHVlNiwgLi4ufX1cbiAgICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgICAqICB2YWx1ZSAtIGFueVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcldpdGhDYW1lcmFJREFuZE9wdHMoY2FtZXJhSUQ6IGFueSwgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGltYWdlcyB3aXRoIHBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aEltYWdlSW5wdXRQYXJhbXMoaW1hZ2U6IGFueSwgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogYW55LCBtb2RlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxufSJdfQ==