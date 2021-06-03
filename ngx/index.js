import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
    FT_DLCLASSCODE_NT_FROM: 628,
    FT_DLCLASSCODE_NT_TO: 629,
    FT_DLCLASSCODE_NT_NOTES: 630,
    FT_DLCLASSCODE_TN_FROM: 631,
    FT_DLCLASSCODE_TN_TO: 632,
    FT_DLCLASSCODE_TN_NOTES: 633,
    FT_DLCLASSCODE_D3_FROM: 634,
    FT_DLCLASSCODE_D3_TO: 635,
    FT_DLCLASSCODE_D3_NOTES: 636,
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
var DocumentReader = /** @class */ (function (_super) {
    __extends(DocumentReader, _super);
    function DocumentReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    DocumentReader.prototype.setEnableCoreLogs = function (logs) { return cordova(this, "setEnableCoreLogs", {}, arguments); };
    DocumentReader.prototype.addPKDCertificates = function (certificates) { return cordova(this, "addPKDCertificates", {}, arguments); };
    DocumentReader.prototype.setCameraSessionIsPaused = function (paused) { return cordova(this, "setCameraSessionIsPaused", {}, arguments); };
    DocumentReader.prototype.getScenario = function (scenario) { return cordova(this, "getScenario", {}, arguments); };
    DocumentReader.prototype.recognizeImages = function (images) { return cordova(this, "recognizeImages", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraID = function (cameraID) { return cordova(this, "showScannerWithCameraID", { "observable": true }, arguments); };
    DocumentReader.prototype.runAutoUpdate = function (databaseType) { return cordova(this, "runAutoUpdate", { "observable": true }, arguments); };
    DocumentReader.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    DocumentReader.prototype.setRfidScenario = function (scenario) { return cordova(this, "setRfidScenario", {}, arguments); };
    DocumentReader.prototype.initializeReader = function (license) { return cordova(this, "initializeReader", {}, arguments); };
    DocumentReader.prototype.prepareDatabase = function (databaseType) { return cordova(this, "prepareDatabase", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImage = function (image) { return cordova(this, "recognizeImage", { "observable": true }, arguments); };
    DocumentReader.prototype.setRfidSessionStatus = function (status) { return cordova(this, "setRfidSessionStatus", {}, arguments); };
    DocumentReader.prototype.initializeReaderWithDatabasePath = function (license, path) { return cordova(this, "initializeReaderWithDatabasePath", {}, arguments); };
    DocumentReader.prototype.recognizeImageFrame = function (image, params) { return cordova(this, "recognizeImageFrame", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithOpts = function (image, options) { return cordova(this, "recognizeImageWithOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeVideoFrame = function (byteString, params) { return cordova(this, "recognizeVideoFrame", { "observable": true }, arguments); };
    DocumentReader.prototype.showScannerWithCameraIDAndOpts = function (cameraID, options) { return cordova(this, "showScannerWithCameraIDAndOpts", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithImageInputParams = function (image, params) { return cordova(this, "recognizeImageWithImageInputParams", { "observable": true }, arguments); };
    DocumentReader.prototype.recognizeImageWithCameraMode = function (image, mode) { return cordova(this, "recognizeImageWithCameraMode", { "observable": true }, arguments); };
    DocumentReader.pluginName = "DocumentReader";
    DocumentReader.plugin = "cordova-plugin-document-reader-api";
    DocumentReader.pluginRef = "DocumentReader";
    DocumentReader.repo = "https://github.com/regulaforensics/DocumentReader-Cordova-Plugin";
    DocumentReader.platforms = ["Android", "iOS"];
    DocumentReader.decorators = [
        { type: Injectable }
    ];
    return DocumentReader;
}(IonicNativePlugin));
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBU3ZCLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRTlDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7aUNBdEJMOzs7Ozs7SUF3Q1csbUNBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSwwQkFBMEIsQ0FBQTtRQUU3QyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixD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R0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsTUFBTSxFQUFFLEdBQUc7SUFDWCxVQUFVLEVBQUUsR0FBRztJQUNmLFFBQVEsRUFBRSxHQUFHO0lBQ2IsT0FBTyxFQUFFLEdBQUc7SUFDWixzQkFB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QTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyw0QkFBNEIsQ0FBQTtZQUN2QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx1QkFBdUIsQ0FBQTtZQUNsQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyw0QkFBNEIsQ0FBQTtZQUN2QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx1QkFBdUIsQ0FBQTtZQUNsQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZ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QUF1QyxDQUFBO1lBQ2xELEtBQUssR0FBRztnQkFDSixPQUFPLDBDQUEwQyxDQUFBO1lBQ3JELEtBQUssR0FBRztnQkFDSixPQUFPLGtCQUFrQixDQUFBO1lBQzdCLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDJCQUEyQixDQUFBO1lBQ3RDLEtBQUssR0FBRztnQkFDSixPQUFPLHlCQUF5QixDQUFBO1lBQ3BDLEtBQUssR0FBRztnQkFDSixPQUFPLHNCQUFzQixDQUFBO1lBQ2pDLEtBQUssR0FBRztnQkFDSixPQUFPLDRCQUE0QixDQUFBO1lBQ3ZDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHVCQUF1QixDQUFBO1lBQ2xDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFxQixDQUFBO1lBQ2hDLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLHdCQUF3QixDQUFBO1lBQ25DLEtBQUssR0FBRztnQkFDSixPQUFPLHFCQUFx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QUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyw0QkFBNEIsQ0FBQTtZQUN2QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx1QkFBdUIsQ0FBQTtZQUNsQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxLQUFLLENBQUE7WUFDaEIsS0FBSyxHQUFHO2dCQUNKLE9BQU8sU0FBUyxDQUFBO1lBQ3BCLEtBQUssR0FBRztnQkFDSixPQUFPLE9BQU8sQ0FBQTtZQUNsQixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxNQUFNLENBQUE7WUFDakIsS0FBSyxHQUFHO2dCQUNKLE9BQU8scUJBQXFCLENBQUE7WUFDaEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUNBQXVDLENBQUE7WUFDbEQsS0FBSyxHQUFHO2dCQUNKLE9BQU8sb0NBQW9DLENBQUE7WUFDL0MsS0FBSyxHQUFHO2dCQUNKLE9BQU8sdUJBQXVCLENBQUE7WUFDbEMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sMEJBQTBCLENBQUE7WUFDckMsS0FBSyxHQUFHO2dCQUNKLE9BQU8saUNBQWlDLENBQUE7WUFDNUMsS0FBSyxHQUFHO2dCQUNKLE9BQU8sa0NBQWtDLENBQUE7WUFDN0MsS0FBSyxHQUFHO2dCQUNKLE9BQU8sU0FBUyxDQUFBO1lBQ3BCLEtBQUssR0FBRztnQkFDSixPQUFPLDBCQUEwQixDQUFBO1lBQ3JDLEtBQUssR0FBRztnQkFDSixPQUFPLGFBQWEsQ0FBQTtZQUN4QixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxtQkFBbUIsQ0FBQTtZQUM5QixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQTtZQUMvQixLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywwQkFBMEIsQ0FBQTtZQUNyQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx3QkFBd0IsQ0FBQTtZQUNuQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFBMkIsQ0FBQTtZQUN0QyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyx5QkFBeUIsQ0FBQTtZQUNwQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxzQkFBc0IsQ0FBQTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxvQkFBb0IsQ0FBQTtZQUMvQixLQUFLLEdBQUc7Z0JBQ0osT0FBTyx1QkFBdUIsQ0FBQTtZQUNsQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTyxxQkFBcUIsQ0FBQTtZQUNoQyxLQUFLLEdBQUc7Z0JBQ0osT0FBTywyQkFB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QVMzQixnREFBdUIsYUFBQyxRQUFhO0lBU3JDLHNDQUFhLGFBQUMsWUFBaUI7SUFjL0Isa0NBQVMsYUFBQyxNQUFXO0lBV3JCLHdDQUFlLGFBQUMsUUFBYTtJQVM3Qix5Q0FBZ0IsYUFBQyxPQUFZO0lBUzdCLHdDQUFlLGFBQUMsWUFBaUI7SUFTakMsdUNBQWMsYUFBQyxLQUFVO0lBU3pCLDZDQUFvQixhQUFDLE1BQVc7SUFVaEMseURBQWdDLGFBQUMsT0FBWSxFQUFFLElBQVM7SUFVeEQsNENBQW1CLGFBQUMsS0FBVSxFQUFFLE1BQVc7SUFlM0MsK0NBQXNCLGFBQUMsS0FBVSxFQUFFLE9BQVk7SUFVL0MsNENBQW1CLGFBQUMsVUFBZSxFQUFFLE1BQVc7SUFlaEQsdURBQThCLGFBQUMsUUFBYSxFQUFFLE9BQVk7SUFVMUQsMkRBQWtDLGFBQUMsS0FBVSxFQUFFLE1BQVc7SUFVMUQscURBQTRCLGFBQUMsS0FBVSxFQUFFLElBQVM7Ozs7Ozs7Z0JBdmVyRCxVQUFVOzt5QkFoZ0xYO0VBaWdMb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW8ge1xuICAgIHV2VG9yY2g/OiBib29sZWFuXG4gICAgc2VyaWVzUHJvY2Vzc01vZGU/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGNhcHRpb24/OiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyU2NlbmFyaW9cblxuICAgICAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpZXNQcm9jZXNzTW9kZSA9IGpzb25PYmplY3RbXCJzZXJpZXNQcm9jZXNzTW9kZVwiXVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0aW9uID0ganNvbk9iamVjdFtcImNhcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyU2NlbmFyaW9GdWxsIHtcbiAgICB1dlRvcmNoPzogYm9vbGVhblxuICAgIGZyYW1lT3JpZW50YXRpb24/OiBudW1iZXJcbiAgICBmYWNlRXh0PzogYm9vbGVhblxuICAgIG11bHRpUGFnZU9mZj86IG51bWJlclxuICAgIHNlcmllc1Byb2Nlc3NNb2RlPzogYm9vbGVhblxuICAgIGZyYW1lS1dITGFuZHNjYXBlPzogbnVtYmVyXG4gICAgZnJhbWVLV0hQb3J0cmFpdD86IG51bWJlclxuICAgIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZFBvcnRyYWl0PzogbnVtYmVyXG4gICAgZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlPzogbnVtYmVyXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGNhcHRpb24/OiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIG1hbnVhbENyb3A/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW9GdWxsIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyU2NlbmFyaW9GdWxsXG5cbiAgICAgICAgcmVzdWx0LnV2VG9yY2ggPSBqc29uT2JqZWN0W1widXZUb3JjaFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVPcmllbnRhdGlvbiA9IGpzb25PYmplY3RbXCJmcmFtZU9yaWVudGF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpUGFnZU9mZiA9IGpzb25PYmplY3RbXCJtdWx0aVBhZ2VPZmZcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSExhbmRzY2FwZVwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJmcmFtZUtXSFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZVwiXVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0aW9uID0ganNvbk9iamVjdFtcImNhcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZU1ldGFEYXRhIHtcbiAgICBJRD86IG51bWJlclxuICAgIHJvbGxBbmdsZT86IG51bWJlclxuICAgIGJvdW5kcz86IEJvdW5kc1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlTWV0YURhdGEge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZU1ldGFEYXRhXG5cbiAgICAgICAgcmVzdWx0LklEID0ganNvbk9iamVjdFtcIklEXCJdXG4gICAgICAgIHJlc3VsdC5yb2xsQW5nbGUgPSBqc29uT2JqZWN0W1wicm9sbEFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZHMgPSBCb3VuZHMuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRzIHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEJvdW5kcyB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCb3VuZHNcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJGaWVsZFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2NSZWFkZXJGaWVsZFJlY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsaWdodFR5cGU/OiBudW1iZXJcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICBsaWdodE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIGZpZWxkUmVjdD86IERvY1JlYWRlckZpZWxkUmVjdFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0VHlwZSA9IGpzb25PYmplY3RbXCJsaWdodFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFJlY3QgPSBEb2NSZWFkZXJGaWVsZFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkUmVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0IHtcbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHZhbGlkaXR5PzogbnVtYmVyXG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIG9yaWdpbmFsVmFsdWU/OiBzdHJpbmdcbiAgICBib3VuZFJlY3Q/OiBSZWN0XG4gICAgY29tcGFyaXNvbj86IFJlY29yZDxudW1iZXIsIG51bWJlcj5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclZhbHVlXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsaWRpdHkgPSBqc29uT2JqZWN0W1widmFsaWRpdHlcIl1cbiAgICAgICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxWYWx1ZSA9IGpzb25PYmplY3RbXCJvcmlnaW5hbFZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uID0ge31cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jb21wYXJpc29uW2kgYXMgdW5rbm93biBhcyBudW1iZXJdID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25cIl1baV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XG4gICAgZmllbGRUeXBlPzogbnVtYmVyXG4gICAgbGNpZD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGxjaWROYW1lPzogc3RyaW5nXG4gICAgZmllbGROYW1lPzogc3RyaW5nXG4gICAgdmFsdWU/OiBEb2N1bWVudFJlYWRlclZhbHVlXG4gICAgdmFsdWVzPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmxjaWQgPSBqc29uT2JqZWN0W1wibGNpZFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubGNpZE5hbWUgPSBqc29uT2JqZWN0W1wibGNpZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkTmFtZSA9IGpzb25PYmplY3RbXCJmaWVsZE5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0gRG9jdW1lbnRSZWFkZXJWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWx1ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInZhbHVlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInZhbHVlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGUge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvb3JkaW5hdGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50UG9zaXRpb24ge1xuICAgIGRvY0Zvcm1hdD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgZHBpPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgaW52ZXJzZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgICBvYmpBcmVhPzogbnVtYmVyXG4gICAgb2JqSW50QW5nbGVEZXY/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgICBhbmdsZT86IG51bWJlclxuICAgIGNlbnRlcj86IENvb3JkaW5hdGVcbiAgICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gICAgcmlnaHRUb3A/OiBDb29yZGluYXRlXG4gICAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFbGVtZW50UG9zaXRpb25cblxuICAgICAgICByZXN1bHQuZG9jRm9ybWF0ID0ganNvbk9iamVjdFtcImRvY0Zvcm1hdFwiXVxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmRwaSA9IGpzb25PYmplY3RbXCJkcGlcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmludmVyc2UgPSBqc29uT2JqZWN0W1wiaW52ZXJzZVwiXVxuICAgICAgICByZXN1bHQucGVyc3BlY3RpdmVUciA9IGpzb25PYmplY3RbXCJwZXJzcGVjdGl2ZVRyXCJdXG4gICAgICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICAgICAgcmVzdWx0Lm9iakludEFuZ2xlRGV2ID0ganNvbk9iamVjdFtcIm9iakludEFuZ2xlRGV2XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVzdWx0U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgICAgICByZXN1bHQuY2VudGVyID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VudGVyXCJdKVxuICAgICAgICByZXN1bHQubGVmdFRvcCA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcImxlZnRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRUb3BcIl0pXG4gICAgICAgIHJlc3VsdC5yaWdodEJvdHRvbSA9IENvb3JkaW5hdGUuZnJvbUpzb24oanNvbk9iamVjdFtcInJpZ2h0Qm90dG9tXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHkge1xuICAgIGZlYXR1cmVUeXBlPzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHkge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5XG5cbiAgICAgICAgcmVzdWx0LmZlYXR1cmVUeXBlID0ganNvbk9iamVjdFtcImZlYXR1cmVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5R3JvdXAge1xuICAgIGNvdW50PzogbnVtYmVyXG4gICAgcmVzdWx0PzogbnVtYmVyXG4gICAgaW1hZ2VRdWFsaXR5TGlzdD86IEltYWdlUXVhbGl0eVtdXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUdyb3VwIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eUdyb3VwXG5cbiAgICAgICAgcmVzdWx0LmNvdW50ID0ganNvbk9iamVjdFtcImNvdW50XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHlMaXN0LnB1c2goSW1hZ2VRdWFsaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB7XG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZG9jdW1lbnRJRD86IG51bWJlclxuICAgIGRUeXBlPzogbnVtYmVyXG4gICAgZEZvcm1hdD86IG51bWJlclxuICAgIGRNUlo/OiBib29sZWFuXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIElDQU9Db2RlPzogc3RyaW5nXG4gICAgZERlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgZFllYXI/OiBzdHJpbmdcbiAgICBkQ291bnRyeU5hbWU/OiBzdHJpbmdcbiAgICBGRFNJRD86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50SUQgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRFwiXVxuICAgICAgICByZXN1bHQuZFR5cGUgPSBqc29uT2JqZWN0W1wiZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuZE1SWiA9IGpzb25PYmplY3RbXCJkTVJaXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kRGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZERlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kWWVhciA9IGpzb25PYmplY3RbXCJkWWVhclwiXVxuICAgICAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgICAgICByZXN1bHQuRkRTSUQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIkZEU0lEXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiRkRTSURcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuRkRTSUQucHVzaChqc29uT2JqZWN0W1wiRkRTSURcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBudW1iZXI/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm51bWJlciA9IGpzb25PYmplY3RbXCJudW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHtcbiAgICBhY3RpdmVPcHRpb25JZHg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICAgICAgcmVzdWx0LmFjdGl2ZU9wdGlvbklkeCA9IGpzb25PYmplY3RbXCJhY3RpdmVPcHRpb25JZHhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEYXRhIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlRGF0YVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVEYXRhIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENlcnRpZmljYXRlRGF0YVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMge1xuICAgIHNlY3VyaXR5T2JqZWN0PzogQ2VydGlmaWNhdGVEYXRhXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG5cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0ID0gQ2VydGlmaWNhdGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgcmVhZGluZ1RpbWU/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgcEFTdGF0dXM/OiBudW1iZXJcbiAgICByZWFkaW5nU3RhdHVzPzogbnVtYmVyXG4gICAgZmlsZUlEPzogc3RyaW5nXG4gICAgZmlsZURhdGE/OiBGaWxlRGF0YVxuICAgIGNlcnRpZmljYXRlcz86IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzXG4gICAgZG9jRmllbGRzVGV4dD86IG51bWJlcltdXG4gICAgZG9jRmllbGRzR3JhcGhpY3M/OiBudW1iZXJbXVxuICAgIGRvY0ZpZWxkc09yaWdpbmFscz86IG51bWJlcltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZpbGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZVxuXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nVGltZSA9IGpzb25PYmplY3RbXCJyZWFkaW5nVGltZVwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5wQVN0YXR1cyA9IGpzb25PYmplY3RbXCJwQVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVhZGluZ1N0YXR1cyA9IGpzb25PYmplY3RbXCJyZWFkaW5nU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5maWxlSUQgPSBqc29uT2JqZWN0W1wiZmlsZUlEXCJdXG4gICAgICAgIHJlc3VsdC5maWxlRGF0YSA9IEZpbGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlcyA9IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZXNcIl0pXG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0LnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzLnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBhcHBsaWNhdGlvbklEPzogc3RyaW5nXG4gICAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgICB1bmljb2RlVmVyc2lvbj86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBmaWxlcz86IEZpbGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBcHBsaWNhdGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcHBsaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9uSUQgPSBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25JRFwiXVxuICAgICAgICByZXN1bHQuZGF0YUhhc2hBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGF0YUhhc2hBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnVuaWNvZGVWZXJzaW9uID0ganNvbk9iamVjdFtcInVuaWNvZGVWZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LmZpbGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWxlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpbGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpbGVzLnB1c2goRmlsZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGZvcm1hdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWx1ZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWx1ZVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZm9ybWF0ID0ganNvbk9iamVjdFtcImZvcm1hdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IFZhbHVlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF0dHJpYnV0ZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5IHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgICBhdHRyaWJ1dGVzPzogQXR0cmlidXRlW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXV0aG9yaXR5IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhvcml0eVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb24ge1xuICAgIGRhdGE/OiBzdHJpbmdcbiAgICB0eXBlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV4dGVuc2lvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFeHRlbnNpb25cblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsaWRpdHkge1xuICAgIG5vdEFmdGVyPzogVmFsdWVcbiAgICBub3RCZWZvcmU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWxpZGl0eSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5ub3RBZnRlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RBZnRlclwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdEJlZm9yZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RCZWZvcmVcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlQ2hhaW4ge1xuICAgIG9yaWdpbj86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBzZXJpYWxOdW1iZXI/OiBzdHJpbmdcbiAgICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBzdWJqZWN0UEtBbGdvcml0aG0/OiBzdHJpbmdcbiAgICBmaWxlTmFtZT86IFZhbHVlXG4gICAgdmFsaWRpdHk/OiBWYWxpZGl0eVxuICAgIGlzc3Vlcj86IEF1dGhvcml0eVxuICAgIHN1YmplY3Q/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBleHRlbnNpb25zPzogRXh0ZW5zaW9uW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICAgICAgcmVzdWx0Lm9yaWdpbiA9IGpzb25PYmplY3RbXCJvcmlnaW5cIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0ganNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc3ViamVjdFBLQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInN1YmplY3RQS0FsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQuc3ViamVjdCA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wic3ViamVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZXh0ZW5zaW9ucy5wdXNoKEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmVySW5mbyB7XG4gICAgdmVyc2lvbj86IG51bWJlclxuICAgIHBhU3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YVRvSGFzaD86IHN0cmluZ1xuICAgIGRpZ2VzdEFsZ29yaXRobT86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHNlcmlhbE51bWJlcj86IFZhbHVlXG4gICAgc2lnbmF0dXJlPzogVmFsdWVcbiAgICBzdWJqZWN0S2V5SWRlbnRpZmllcj86IFZhbHVlXG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG4gICAgc2lnbmVkQXR0cmlidXRlcz86IEV4dGVuc2lvbltdXG4gICAgY2VydGlmaWNhdGVDaGFpbj86IENlcnRpZmljYXRlQ2hhaW5bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaWduZXJJbmZvIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpZ25lckluZm9cblxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YVRvSGFzaCA9IGpzb25PYmplY3RbXCJkYXRhVG9IYXNoXCJdXG4gICAgICAgIHJlc3VsdC5kaWdlc3RBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wiZGlnZXN0QWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgICAgIHJlc3VsdC5zZXJpYWxOdW1iZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VyaWFsTnVtYmVyXCJdKVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25hdHVyZVwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgICAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNpZ25lZEF0dHJpYnV0ZXMucHVzaChFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3Qge1xuICAgIGZpbGVSZWZlcmVuY2U/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgb2JqZWN0VHlwZT86IHN0cmluZ1xuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lckluZm9zPzogU2lnbmVySW5mb1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlY3VyaXR5T2JqZWN0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0XG5cbiAgICAgICAgcmVzdWx0LmZpbGVSZWZlcmVuY2UgPSBqc29uT2JqZWN0W1wiZmlsZVJlZmVyZW5jZVwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5vYmplY3RUeXBlID0ganNvbk9iamVjdFtcIm9iamVjdFR5cGVcIl1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNpZ25lckluZm9zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MucHVzaChTaWduZXJJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFByb3BlcnRpZXMge1xuICAgIGFUUUE/OiBudW1iZXJcbiAgICBiaXRSYXRlUj86IG51bWJlclxuICAgIGJpdFJhdGVTPzogbnVtYmVyXG4gICAgY2hpcFR5cGVBPzogbnVtYmVyXG4gICAgbWlmYXJlTWVtb3J5PzogbnVtYmVyXG4gICAgcmZpZFR5cGU/OiBudW1iZXJcbiAgICBzQUs/OiBudW1iZXJcbiAgICBzdXBwb3J0ND86IGJvb2xlYW5cbiAgICBzdXBwb3J0TWlmYXJlPzogYm9vbGVhblxuICAgIGFUUUI/OiBzdHJpbmdcbiAgICBhVFI/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTE/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgICB1SUQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2FyZFByb3BlcnRpZXMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FyZFByb3BlcnRpZXNcblxuICAgICAgICByZXN1bHQuYVRRQSA9IGpzb25PYmplY3RbXCJhVFFBXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUiA9IGpzb25PYmplY3RbXCJiaXRSYXRlUlwiXVxuICAgICAgICByZXN1bHQuYml0UmF0ZVMgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVNcIl1cbiAgICAgICAgcmVzdWx0LmNoaXBUeXBlQSA9IGpzb25PYmplY3RbXCJjaGlwVHlwZUFcIl1cbiAgICAgICAgcmVzdWx0Lm1pZmFyZU1lbW9yeSA9IGpzb25PYmplY3RbXCJtaWZhcmVNZW1vcnlcIl1cbiAgICAgICAgcmVzdWx0LnJmaWRUeXBlID0ganNvbk9iamVjdFtcInJmaWRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zQUsgPSBqc29uT2JqZWN0W1wic0FLXCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0NCA9IGpzb25PYmplY3RbXCJzdXBwb3J0NFwiXVxuICAgICAgICByZXN1bHQuc3VwcG9ydE1pZmFyZSA9IGpzb25PYmplY3RbXCJzdXBwb3J0TWlmYXJlXCJdXG4gICAgICAgIHJlc3VsdC5hVFFCID0ganNvbk9iamVjdFtcImFUUUJcIl1cbiAgICAgICAgcmVzdWx0LmFUUiA9IGpzb25PYmplY3RbXCJhVFJcIl1cbiAgICAgICAgcmVzdWx0LmJhdWRyYXRlMSA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTFcIl1cbiAgICAgICAgcmVzdWx0LmJhdWRyYXRlMiA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTJcIl1cbiAgICAgICAgcmVzdWx0LnVJRCA9IGpzb25PYmplY3RbXCJ1SURcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFNlc3Npb25EYXRhIHtcbiAgICB0b3RhbEJ5dGVzUmVjZWl2ZWQ/OiBudW1iZXJcbiAgICB0b3RhbEJ5dGVzU2VudD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGV4dExlU3VwcG9ydD86IG51bWJlclxuICAgIHByb2Nlc3NUaW1lPzogbnVtYmVyXG4gICAgY2FyZFByb3BlcnRpZXM/OiBDYXJkUHJvcGVydGllc1xuICAgIHNlc3Npb25EYXRhU3RhdHVzPzogUkZJRFNlc3Npb25EYXRhU3RhdHVzXG4gICAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gICAgYXBwbGljYXRpb25zPzogQXBwbGljYXRpb25bXVxuICAgIHNlY3VyaXR5T2JqZWN0cz86IFNlY3VyaXR5T2JqZWN0W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJGSURTZXNzaW9uRGF0YVxuXG4gICAgICAgIHJlc3VsdC50b3RhbEJ5dGVzUmVjZWl2ZWQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1JlY2VpdmVkXCJdXG4gICAgICAgIHJlc3VsdC50b3RhbEJ5dGVzU2VudCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzU2VudFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZXh0TGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImV4dExlU3VwcG9ydFwiXVxuICAgICAgICByZXN1bHQucHJvY2Vzc1RpbWUgPSBqc29uT2JqZWN0W1wicHJvY2Vzc1RpbWVcIl1cbiAgICAgICAgcmVzdWx0LmNhcmRQcm9wZXJ0aWVzID0gQ2FyZFByb3BlcnRpZXMuZnJvbUpzb24oanNvbk9iamVjdFtcImNhcmRQcm9wZXJ0aWVzXCJdKVxuICAgICAgICByZXN1bHQuc2Vzc2lvbkRhdGFTdGF0dXMgPSBSRklEU2Vzc2lvbkRhdGFTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlc3Npb25EYXRhU3RhdHVzXCJdKVxuICAgICAgICByZXN1bHQuYWNjZXNzQ29udHJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYWNjZXNzQ29udHJvbHMucHVzaChBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMucHVzaChBcHBsaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzLnB1c2goU2VjdXJpdHlPYmplY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY3VyaXR5T2JqZWN0c1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHR5cGVOYW1lPzogc3RyaW5nXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgZWxlbWVudHM/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2tcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC50eXBlTmFtZSA9IGpzb25PYmplY3RbXCJ0eXBlTmFtZVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImVsZW1lbnRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZWxlbWVudHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImVsZW1lbnRzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQREY0MTdJbmZvIHtcbiAgICBlcnJvckxldmVsPzogbnVtYmVyXG4gICAgY29sdW1ucz86IG51bWJlclxuICAgIHJvd3M/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUERGNDE3SW5mbyB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQREY0MTdJbmZvXG5cbiAgICAgICAgcmVzdWx0LmVycm9yTGV2ZWwgPSBqc29uT2JqZWN0W1wiZXJyb3JMZXZlbFwiXVxuICAgICAgICByZXN1bHQuY29sdW1ucyA9IGpzb25PYmplY3RbXCJjb2x1bW5zXCJdXG4gICAgICAgIHJlc3VsdC5yb3dzID0ganNvbk9iamVjdFtcInJvd3NcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgICBBQT86IG51bWJlclxuICAgIEJBQz86IG51bWJlclxuICAgIENBPzogbnVtYmVyXG4gICAgUEE/OiBudW1iZXJcbiAgICBQQUNFPzogbnVtYmVyXG4gICAgVEE/OiBudW1iZXJcbiAgICBvdmVyYWxsU3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJGSURTZXNzaW9uRGF0YVN0YXR1cyB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcblxuICAgICAgICByZXN1bHQuQUEgPSBqc29uT2JqZWN0W1wiQUFcIl1cbiAgICAgICAgcmVzdWx0LkJBQyA9IGpzb25PYmplY3RbXCJCQUNcIl1cbiAgICAgICAgcmVzdWx0LkNBID0ganNvbk9iamVjdFtcIkNBXCJdXG4gICAgICAgIHJlc3VsdC5QQSA9IGpzb25PYmplY3RbXCJQQVwiXVxuICAgICAgICByZXN1bHQuUEFDRSA9IGpzb25PYmplY3RbXCJQQUNFXCJdXG4gICAgICAgIHJlc3VsdC5UQSA9IGpzb25PYmplY3RbXCJUQVwiXVxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IGFueVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkXG5cbiAgICAgICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICAgICAgcmVzdWx0LmRhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChqc29uT2JqZWN0W1wiZGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmNoZWNrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY2hlY2tzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2hlY2tzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2suZnJvbUpzb24oanNvbk9iamVjdFtcImNoZWNrc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBlbGVtZW50VHlwZT86IG51bWJlclxuICAgIGVsZW1lbnREaWFnbm9zZT86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICAgIGVsZW1lbnREaWFnbm9zZU5hbWU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlFbGVtZW50IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5lbGVtZW50VHlwZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudERpYWdub3NlID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGVOYW1lID0ganNvbk9iamVjdFtcImVsZW1lbnRUeXBlTmFtZVwiXVxuICAgICAgICByZXN1bHQuZWxlbWVudERpYWdub3NlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VOYW1lXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB7XG4gICAgYWN0aW9uPzogbnVtYmVyXG4gICAgcmVzdWx0cz86IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuICAgIGVycm9yPzogVGhyb3dhYmxlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb25cblxuICAgICAgICByZXN1bHQuYWN0aW9uID0ganNvbk9iamVjdFtcImFjdGlvblwiXVxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IERvY3VtZW50UmVhZGVyUmVzdWx0cy5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXSlcbiAgICAgICAgcmVzdWx0LmVycm9yID0gVGhyb3dhYmxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhyb3dhYmxlIHtcbiAgICBsb2NhbGl6ZWRNZXNzYWdlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHN0cmluZz86IHN0cmluZ1xuICAgIHN0YWNrVHJhY2U/OiBTdGFja1RyYWNlRWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFRocm93YWJsZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUaHJvd2FibGVcblxuICAgICAgICByZXN1bHQubG9jYWxpemVkTWVzc2FnZSA9IGpzb25PYmplY3RbXCJsb2NhbGl6ZWRNZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cbiAgICAgICAgcmVzdWx0LnN0YWNrVHJhY2UgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInN0YWNrVHJhY2VcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YWNrVHJhY2UucHVzaChTdGFja1RyYWNlRWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhY2tUcmFjZUVsZW1lbnQge1xuICAgIGxpbmVOdW1iZXI/OiBudW1iZXJcbiAgICBpc05hdGl2ZU1ldGhvZD86IGJvb2xlYW5cbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICBmaWxlTmFtZT86IHN0cmluZ1xuICAgIG1ldGhvZE5hbWU/OiBzdHJpbmdcbiAgICBzdHJpbmc/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU3RhY2tUcmFjZUVsZW1lbnQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU3RhY2tUcmFjZUVsZW1lbnRcblxuICAgICAgICByZXN1bHQubGluZU51bWJlciA9IGpzb25PYmplY3RbXCJsaW5lTnVtYmVyXCJdXG4gICAgICAgIHJlc3VsdC5pc05hdGl2ZU1ldGhvZCA9IGpzb25PYmplY3RbXCJpc05hdGl2ZU1ldGhvZFwiXVxuICAgICAgICByZXN1bHQuY2xhc3NOYW1lID0ganNvbk9iamVjdFtcImNsYXNzTmFtZVwiXVxuICAgICAgICByZXN1bHQuZmlsZU5hbWUgPSBqc29uT2JqZWN0W1wiZmlsZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGhvZE5hbWUgPSBqc29uT2JqZWN0W1wibWV0aG9kTmFtZVwiXVxuICAgICAgICByZXN1bHQuc3RyaW5nID0ganNvbk9iamVjdFtcInN0cmluZ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQS0RDZXJ0aWZpY2F0ZSB7XG4gICAgYmluYXJ5RGF0YT86IHN0cmluZ1xuICAgIHJlc291cmNlVHlwZT86IG51bWJlclxuICAgIHByaXZhdGVLZXk/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUEtEQ2VydGlmaWNhdGUge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUEtEQ2VydGlmaWNhdGVcblxuICAgICAgICByZXN1bHQuYmluYXJ5RGF0YSA9IGpzb25PYmplY3RbXCJiaW5hcnlEYXRhXCJdXG4gICAgICAgIHJlc3VsdC5yZXNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wicmVzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wcml2YXRlS2V5ID0ganNvbk9iamVjdFtcInByaXZhdGVLZXlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dFBhcmFtIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VJbnB1dFBhcmFtIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXRQYXJhbVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyUmVzdWx0cyB7XG4gICAgY2hpcFBhZ2U/OiBudW1iZXJcbiAgICBvdmVyYWxsUmVzdWx0PzogbnVtYmVyXG4gICAgcHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWU/OiBudW1iZXJcbiAgICBlbGFwc2VkVGltZVJGSUQ/OiBudW1iZXJcbiAgICBtb3JlUGFnZXNBdmFpbGFibGU/OiBudW1iZXJcbiAgICByZmlkUmVzdWx0PzogbnVtYmVyXG4gICAgaGlnaFJlc29sdXRpb24/OiBib29sZWFuXG4gICAgZ3JhcGhpY1Jlc3VsdD86IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuICAgIHRleHRSZXN1bHQ/OiBEb2N1bWVudFJlYWRlclRleHRSZXN1bHRcbiAgICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBiYXJjb2RlUG9zaXRpb24/OiBFbGVtZW50UG9zaXRpb25bXVxuICAgIG1yelBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFtdXG4gICAgcmF3UmVzdWx0Pzogc3RyaW5nXG4gICAgZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24/OiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuICAgIHJmaWRTZXNzaW9uRGF0YT86IFJGSURTZXNzaW9uRGF0YVxuICAgIGF1dGhlbnRpY2l0eVJlc3VsdD86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0XG4gICAgYmFyY29kZVJlc3VsdD86IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdFxuICAgIGRvY3VtZW50VHlwZT86IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlW11cbiAgICBnZXRUZXh0RmllbGRWYWx1ZUJ5VHlwZT8oeyBmaWVsZFR5cGUsIGxjaWQgPSAwLCBzb3VyY2UgPSAtMSwgb3JpZ2luYWwgPSBmYWxzZSB9OiB7IGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkPzogbnVtYmVyLCBzb3VyY2U/OiBudW1iZXIsIG9yaWdpbmFsPzogYm9vbGVhbiB9KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbmRCeVR5cGVBbmRMY2lkKGZpZWxkVHlwZSwgbGNpZClcclxuICAgICAgICBpZiAoZmllbGQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCBzb3VyY2UpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsID8gdmFsdWUub3JpZ2luYWxWYWx1ZSA6IHZhbHVlLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dEZpZWxkU3RhdHVzQnlUeXBlKGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbmRCeVR5cGVBbmRMY2lkKGZpZWxkVHlwZSwgbGNpZClcclxuICAgICAgICByZXR1cm4gZmllbGQgIT0gbnVsbCA/IGZpZWxkLnN0YXR1cyA6IDBcclxuICAgIH1cclxuXHJcbiAgICBnZXRHcmFwaGljRmllbGRJbWFnZUJ5VHlwZT8oeyBmaWVsZFR5cGUsIHNvdXJjZSA9IC0xLCBsaWdodCA9IC0xLCBwYWdlSW5kZXggPSAtMSB9OiB7IGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U/OiBudW1iZXIsIGxpZ2h0PzogbnVtYmVyLCBwYWdlSW5kZXg/OiBudW1iZXIgfSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY1Jlc3VsdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIGNvbnN0IGZvdW5kRmllbGRzID0gW11cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmdyYXBoaWNSZXN1bHQuZmllbGRzKVxyXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBmaWVsZFR5cGUpXHJcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxyXG4gICAgICAgIGlmIChzb3VyY2UgIT09IC0xKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLnNvdXJjZVR5cGUgIT09IHNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICBpZiAobGlnaHQgIT09IC0xKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kRmllbGRzW2ldLmxpZ2h0VHlwZSAhPT0gbGlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gLTEpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ucGFnZUluZGV4ICE9PSBwYWdlSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXHJcblxyXG4gICAgICAgIHJldHVybiBmb3VuZEZpZWxkcy5sZW5ndGggPiAwID8gZm91bmRGaWVsZHNbMF0udmFsdWUgOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UXVhbGl0eVJlc3VsdCh7IGltYWdlUXVhbGl0eUNoZWNrVHlwZSwgc2VjdXJpdHlGZWF0dXJlID0gLTEsIHBhZ2VJbmRleCA9IDAgfTogeyBpbWFnZVF1YWxpdHlDaGVja1R5cGU6IG51bWJlciwgc2VjdXJpdHlGZWF0dXJlPzogbnVtYmVyLCBwYWdlSW5kZXg/OiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHJlc3VsdFN1bSA9IDJcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVF1YWxpdHkgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFN1bVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2VRdWFsaXR5R3JvdXBcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpcSBvZiB0aGlzLmltYWdlUXVhbGl0eSlcclxuICAgICAgICAgICAgaWYgKGlxICE9IG51bGwgJiYgaXEucGFnZUluZGV4ID09IHBhZ2VJbmRleClcclxuICAgICAgICAgICAgICAgIGltYWdlUXVhbGl0eUdyb3VwID0gaXFcclxuICAgICAgICBpZiAoaW1hZ2VRdWFsaXR5R3JvdXAgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFN1bVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGltYWdlUXVhbGl0eUdyb3VwLmltYWdlUXVhbGl0eUxpc3QpXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSBpbWFnZVF1YWxpdHlDaGVja1R5cGUpXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjdXJpdHlGZWF0dXJlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3VtID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuZmVhdHVyZVR5cGUgPT09IHNlY3VyaXR5RmVhdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN1bSA9IGZpZWxkLnJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRTdW1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kQnlUeXBlQW5kTGNpZD8odHlwZTogbnVtYmVyLCBsY2lkOiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB7XHJcbiAgICAgICAgbGV0IGZpZWxkXHJcbiAgICAgICAgY29uc3QgZm91bmRGaWVsZHMgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGZpZWxkIG9mIHRoaXMudGV4dFJlc3VsdC5maWVsZHMpXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZFR5cGUgPT09IHR5cGUpXHJcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxyXG4gICAgICAgIGlmIChmb3VuZEZpZWxkcy5sZW5ndGggPD0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgbGV0IGZvdW5kRmllbGQgPSBudWxsXHJcblxyXG4gICAgICAgIGZvciAoZmllbGQgb2YgZm91bmRGaWVsZHMpXHJcbiAgICAgICAgICAgIGlmIChsY2lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkID0gZmllbGRcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5sY2lkID09PSBsY2lkKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQubGNpZCA9PT0gbGNpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZFxyXG5cclxuICAgICAgICByZXR1cm4gZm91bmRGaWVsZFxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRCeVNvdXJjZShmaWVsZDogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQsIHNvdXJjZVR5cGU6IG51bWJlcik6IERvY3VtZW50UmVhZGVyVmFsdWUge1xyXG4gICAgICAgIGxldCB2YWx1ZVxyXG4gICAgICAgIGlmIChzb3VyY2VUeXBlID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBtcnpWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMylcclxuICAgICAgICAgICAgaWYgKG1yelZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1yelZhbFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxOClcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgdmlzdWFsVmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDE3KVxyXG4gICAgICAgICAgICByZXR1cm4gdmlzdWFsVmFsICE9IG51bGwgPyB2aXN1YWxWYWwgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBmaWVsZC52YWx1ZXMpXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnNvdXJjZVR5cGUgPT09IHNvdXJjZVR5cGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJSZXN1bHRzXG5cbiAgICAgICAgcmVzdWx0LmNoaXBQYWdlID0ganNvbk9iamVjdFtcImNoaXBQYWdlXCJdXG4gICAgICAgIHJlc3VsdC5vdmVyYWxsUmVzdWx0ID0ganNvbk9iamVjdFtcIm92ZXJhbGxSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZVJGSUQgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVSRklEXCJdXG4gICAgICAgIHJlc3VsdC5tb3JlUGFnZXNBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wibW9yZVBhZ2VzQXZhaWxhYmxlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUmVzdWx0ID0ganNvbk9iamVjdFtcInJmaWRSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmhpZ2hSZXNvbHV0aW9uID0ganNvbk9iamVjdFtcImhpZ2hSZXNvbHV0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5ncmFwaGljUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJncmFwaGljUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQudGV4dFJlc3VsdCA9IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1widGV4dFJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24ucHVzaChFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5iYXJjb2RlUG9zaXRpb24ucHVzaChFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVQb3NpdGlvblwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1yelBvc2l0aW9uLnB1c2goRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eS5wdXNoKEltYWdlUXVhbGl0eUdyb3VwLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yYXdSZXN1bHQgPSBqc29uT2JqZWN0W1wicmF3UmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbiA9IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LnJmaWRTZXNzaW9uRGF0YSA9IFJGSURTZXNzaW9uRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFNlc3Npb25EYXRhXCJdKVxuICAgICAgICByZXN1bHQuYXV0aGVudGljaXR5UmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImF1dGhlbnRpY2l0eVJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmJhcmNvZGVSZXN1bHQgPSBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImJhcmNvZGVSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlUmVzdWx0ID0ge1xuICAgIE5PX0VSUjogMCxcbiAgICBOVUxMX1BUUl9FUlI6IC02MDAxLFxuICAgIEJBRF9BUkdfRVJSOiAtNjAwMixcbiAgICBTSVpFX0VSUjogLTYwMDMsXG4gICAgUkFOR0VfRVJSOiAtNjAwNCxcbiAgICBJTlRFUk5BTF9FUlI6IC02MDA1LFxuICAgIFRSWV9FWENFUFRfRVJSOiAtNjAwNixcbiAgICBCQVJfQ09ERV9OT1RfRk9VTkQ6IC02MDA4LFxuICAgIEJBUl9DT0RFX0RFQ09ERV9FUlI6IC02MDEwLFxuICAgIE5PX1VTRVJfRExMX0ZPVU5EOiAtNjAxOSxcbiAgICBOT19JUFBfRExMX0ZPVU5EOiAtNjAyMCxcbiAgICBJUFBfRVhFQ19FUlI6IC02MDI0LFxuICAgIElQUF9UUllfRVhDRVBUX0VSUjogLTYwMjUsXG4gICAgQkFSQ09ERV9FUlJPUl9JTlBVVF9QQVJBTTogLTExMDAxLFxuICAgIEJBUkNPREVfRVJST1JfRklOSVQ6IC0xMTAwNixcbiAgICBCQVJDT0RFX0VSUk9SX05PVF9MT0FEX0lQX0RFQ09ERURfTEw6IC0xMTAxMixcbiAgICBCQVJDT0RFX0VSUk9SX0lOTkVSX1BST0JMRU06IC0xMTEwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0RFQ09ERV8xRF9CQURfREVDT0RFOiAtMTEyMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5EX1JPV19PUl9DT0xVTU46IC0xMTIwMSxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1g6IC0xMTIwMixcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfM1g4XzJEX1k6IC0xMTIwMyxcbiAgICBCQVJDT0RFX0VSUk9SXzJEX1VHT0xfTUFYOiAtMTEyMDQsXG4gICAgQkFSQ09ERV9FUlJPUl9JTkRFRklOSVRFTFlfREVDT0RFRDogLTExMjEwLFxuICAgIEJBUkNPREVfRVJST1JfRExMX05PVF9JTklUOiAtMTEzMDAsXG4gICAgQkFSQ09ERV9FUlJPUl9JUF9ERUNPREVfRExMX1RyeV9FeGNlcHQ6IC0xMTQwMCxcbiAgICBJUERFQ09ERV9FUlJPUl9MQVJHRUVSUk9SUzogLTQ1MDMsXG4gICAgSVBERUNPREVfRVJST1JfRkFVTFRDT0xVTU5TOiAtNDUwNCxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVFJPV1M6IC00NTA1LFxuICAgIElQREVDT0RFX0VSUk9SX0lOQ09SUkVDVF9FUlJPUl9MRVZFTDogLTQ1MTEsXG4gICAgSVBERUNPREVfRVJST1JfTE9BRElOR19ERVZfVEFCTEU6IC00NTEyLFxufVxuXG5leHBvcnQgY29uc3QgQmFyY29kZVR5cGUgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBCQ1RfQ09ERTEyODogMSxcbiAgICBDT0RFMzk6IDIsXG4gICAgRUFOODogMyxcbiAgICBJVEY6IDQsXG4gICAgUERGNDE3OiA1LFxuICAgIFNURjogNixcbiAgICBNVEY6IDcsXG4gICAgSUFUQTogOCxcbiAgICBDT0RBQkFSOiA5LFxuICAgIFVQQ0E6IDEwLFxuICAgIENPREU5MzogMTEsXG4gICAgVVBDRTogMTIsXG4gICAgRUFOMTM6IDEzLFxuICAgIFFSQ09ERTogMTQsXG4gICAgQVpURUM6IDE1LFxuICAgIERBVEFNQVRSSVg6IDE2LFxuICAgIEFMTF8xRDogMTcsXG4gICAgQ09ERTExOiAxOCxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQU1FUkExOiAxLFxuICAgIENBTUVSQTI6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFUeXBlcyA9IHtcbiAgICBGUk9OVDogXCJmcm9udFwiLFxuICAgIEJBQ0s6IFwiYmFja1wiLFxufVxuXG5leHBvcnQgY29uc3QgQ2FwdHVyZU1vZGUgPSB7XG4gICAgQVVUTzogMCxcbiAgICBDQVBUVVJFX1ZJREVPOiAxLFxuICAgIENBUFRVUkVfRlJBTUU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBkaURvY1R5cGUgPSB7XG4gICAgZHROb3REZWZpbmVkOiAwLFxuICAgIGR0UGFzc3BvcnQ6IDExLFxuICAgIGR0SWRlbnRpdHlDYXJkOiAxMixcbiAgICBkdERpcGxvbWF0aWNQYXNzcG9ydDogMTMsXG4gICAgZHRTZXJ2aWNlUGFzc3BvcnQ6IDE0LFxuICAgIGR0U2VhbWFuc0lkZW50aXR5RG9jdW1lbnQ6IDE1LFxuICAgIGR0SWRlbnRpdHlDYXJkZm9yUmVzaWRlbmNlOiAxNixcbiAgICBkdFRyYXZlbGRvY3VtZW50OiAxNyxcbiAgICBkdE90aGVyOiA5OSxcbiAgICBkdFZpc2FJRDI6IDI5LFxuICAgIGR0VmlzYUlEMzogMzAsXG4gICAgZHRSZWdpc3RyYXRpb25DZXJ0aWZpY2F0ZTogMzEsXG4gICAgZHROYXRpb25hbElkZW50aXR5Q2FyZDogMjAsXG4gICAgZHRTb2NpYWxJZGVudGl0eUNhcmQ6IDIxLFxuICAgIGR0QWxpZW5zSWRlbnRpdHlDYXJkOiAyMixcbiAgICBkdFByaXZpbGVnZWRJZGVudGl0eUNhcmQ6IDIzLFxuICAgIGR0UmVzaWRlbmNlUGVybWl0SWRlbnRpdHlDYXJkOiAyNCxcbiAgICBkdE9yaWdpbkNhcmQ6IDI1LFxuICAgIGR0RW1lcmdlbmN5UGFzc3BvcnQ6IDI2LFxuICAgIGR0QWxpZW5zUGFzc3BvcnQ6IDI3LFxuICAgIGR0QWx0ZXJuYXRpdmVJZGVudGl0eUNhcmQ6IDI4LFxuICAgIGR0QXV0aG9yaXphdGlvbkNhcmQ6IDMyLFxuICAgIGR0QmVnaW5uZXJQZXJtaXQ6IDMzLFxuICAgIGR0Qm9yZGVyQ3Jvc3NpbmdDYXJkOiAzNCxcbiAgICBkdENoYXVmZmV1ckxpY2Vuc2U6IDM1LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZVVuZGVyMTg6IDM2LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZVVuZGVyMjE6IDM3LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAzOCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdDogMzksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA0MCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDQxLFxuICAgIGR0Q29tbWVyY2lhbEluZHR1Y3Rpb25QZXJtaXQ6IDQyLFxuICAgIGR0Q29tbWVyY2lhbE5ld1Blcm1pdDogNDMsXG4gICAgZHRDb25jZWFsZWRDYXJyeUxpY2Vuc2U6IDQ0LFxuICAgIGR0Q29uY2VhbGVkRmlyZWFybVBlcm1pdDogNDUsXG4gICAgZHRDb25kaXRpb25hbERyaXZpbmdMaWNlbnNlOiA0NixcbiAgICBkdERlcGFydG1lbnRPZlZldGVyYW5zQWZmYWlyc0lkZW50aXR5Q2FyZDogNDcsXG4gICAgZHREaXBsb21hdGljRHJpdmluZ0xpY2Vuc2U6IDQ4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2U6IDQ5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXQ6IDUwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXRVbmRlcjE4OiA1MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0VW5kZXIyMTogNTIsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0OiA1MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjE4OiA1NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXRVbmRlcjIxOiA1NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlOiA1NixcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogNTcsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMjE6IDU4LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWdpc3RlcmVkT2ZmZW5kZXI6IDU5LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWR0aWN0ZWRVbmRlcjE4OiA2MCxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVkdGljdGVkVW5kZXIyMTogNjEsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3I6IDYyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogNjMsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA2NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIxODogNjUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMjE6IDY2LFxuICAgIGR0RW1wbG95bWVudERyaXZpbmdQZXJtaXQ6IDY3LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlOiA2OCxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZVVuZGVyMTg6IDY5LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogNzAsXG4gICAgZHRFbmhhbmNlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogNzEsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlOiA3MixcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA3MyxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA3NCxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkOiA3NSxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIxODogNzYsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZFVuZGVyMjE6IDc3LFxuICAgIGR0RW5oYW5jZWRPcGVyYXRvcnNMaWNlbnNlOiA3OCxcbiAgICBkdEZpcmVhcm1zUGVybWl0OiA3OSxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2U6IDgwLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMTg6IDgxLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMjE6IDgyLFxuICAgIGR0R2VuZXZhQ29udmVudGlvbnNJZGVudGl0eUNhcmQ6IDgzLFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA4NCxcbiAgICBkdEdyYWR1YXRlZERyaXZpbmdMaWNlbnNlVW5kZXIyMTogODUsXG4gICAgZHRHcmFkdWF0ZWRJbmR0dWN0aW9uUGVybWl0VW5kZXIxODogODYsXG4gICAgZHRHcmFkdWF0ZWRJbmR0dWN0aW9uUGVybWl0VW5kZXIyMTogODcsXG4gICAgZHRHcmFkdWF0ZWRMaWNlbnNlVW5kZXIxODogODgsXG4gICAgZHRHcmFkdWF0ZWRMaWNlbnNlVW5kZXIyMTogODksXG4gICAgZHRIYW5kZ3VuQ2FycnlQZXJtaXQ6IDkwLFxuICAgIGR0SWRlbnRpdHlBbmRQcml2aWxlZ2VDYXJkOiA5MSxcbiAgICBkdElkZW50aXR5Q2FyZE1vYmlsaXR5SW1wYWlyZWQ6IDkyLFxuICAgIGR0SWRlbnRpdHlDYXJkUmVnaXN0ZXJlZE9mZmVuZGVyOiA5MyxcbiAgICBkdElkZW50aXR5Q2FyZFRlbXBvcmFyeVZpc2l0b3I6IDk0LFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvclVuZGVyMTg6IDk1LFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDk2LFxuICAgIGR0SWRlbnRpdHlDYXJkVW5kZXIxODogOTcsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjIxOiA5OCxcbiAgICBkdElnbml0aW9uSW50ZXJsb2NrUGVybWl0OiAxMDAsXG4gICAgZHRJbW1pZ3JhbnRWaXNhOiAxMDEsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0OiAxMDIsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0VW5kZXIxODogMTAzLFxuICAgIGR0SW5kdHVjdGlvblBlcm1pdFVuZGVyMjE6IDEwNCxcbiAgICBkdEludGVyaW1Ecml2aW5nTGljZW5zZTogMTA1LFxuICAgIGR0SW50ZXJpbUlkZW50aXR5Q2FyZDogMTA2LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2U6IDEwNyxcbiAgICBkdEludGVybWVkaWF0ZURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTA4LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxMDksXG4gICAgZHRKdW5pb3JEcml2aW5nTGljZW5zZTogMTEwLFxuICAgIGR0TGVhcm5lckluZHR1Y3Rpb25hbFBlcm1pdDogMTExLFxuICAgIGR0TGVhcm5lckxpY2Vuc2U6IDExMixcbiAgICBkdExlYXJuZXJMaWNlbnNlVW5kZXIxODogMTEzLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjIxOiAxMTQsXG4gICAgZHRMZWFybmVyUGVybWl0OiAxMTUsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIxODogMTE2LFxuICAgIGR0TGVhcm5lclBlcm1pdFVuZGVyMjE6IDExNyxcbiAgICBkdExpbWl0ZWRMaWNlbnNlOiAxMTgsXG4gICAgZHRMaW1pdGVkUGVybWl0OiAxMTksXG4gICAgZHRMaW1pdGVkVGVybURyaXZpbmdMaWNlbnNlOiAxMjAsXG4gICAgZHRMaW1pdGVkVGVybUlkZW50aXR5Q2FyZDogMTIxLFxuICAgIGR0TGlxdW9ySWRlbnRpdHlDYXJkOiAxMjIsXG4gICAgZHROZXdQZXJtaXQ6IDEyMyxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMTg6IDEyNCxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMjE6IDEyNSxcbiAgICBkdE5vblVzQ2l0aXplbkRyaXZpbmdMaWNlbnNlOiAxMjYsXG4gICAgZHRPY2N1cGF0aW9uYWxEcml2aW5nTGljZW5zZTogMTI3LFxuICAgIGR0T25laWRhVHJpYmVPZkluZGlhbnNJZGVudGl0eUNhcmQ6IDEyOCxcbiAgICBkdE9wZXJhdG9yTGljZW5zZTogMTI5LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIxODogMTMwLFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIyMTogMTMxLFxuICAgIGR0UGVybWFuZW50RHJpdmluZ0xpY2Vuc2U6IDEzMixcbiAgICBkdFBlcm1pdFRvUmVFbnRlcjogMTMzLFxuICAgIGR0UHJvYmF0aW9uYXJ5QXV0b0xpY2Vuc2U6IDEzNCxcbiAgICBkdFByb2JhdGlvbmFyeURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM1LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxMzYsXG4gICAgZHRQcm9iYXRpb25hcnlWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxMzcsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlOiAxMzgsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM5LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE0MCxcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZTogMTQxLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogMTQyLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogMTQzLFxuICAgIGR0UHVibGljUGFzc2VuZ2VyQ2hhdWZmZXVyTGljZW5zZTogMTQ0LFxuICAgIGR0UmFjaW5nQW5kR2FtaW5nQ29taXNzaW9uQ2FyZDogMTQ1LFxuICAgIGR0UmVmdWdlZVRyYXZlbERvY3VtZW50OiAxNDYsXG4gICAgZHRSZW5ld2FsUGVybWl0OiAxNDcsXG4gICAgZHRSZWR0aWN0ZWRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDE0OCxcbiAgICBkdFJlZHRpY3RlZERyaXZpbmdMaWNlbnNlOiAxNDksXG4gICAgZHRSZWR0aWN0ZWRQZXJtaXQ6IDE1MCxcbiAgICBkdFNlYXNvbmFsUGVybWl0OiAxNTEsXG4gICAgZHRTZWFzb25hbFJlc2lkZW50SWRlbnRpdHlDYXJkOiAxNTIsXG4gICAgZHRTZW5pb3JDaXRpemVuSWRlbnRpdHlDYXJkOiAxNTMsXG4gICAgZHRTZXhPZmZlbmRlcjogMTU0LFxuICAgIGR0U29jaWFsU2VjdXJpdHlDYXJkOiAxNTUsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZTogMTU2LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxNTcsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE1OCxcbiAgICBkdFRlbXBvcmFyeUlkZW50aXR5Q2FyZDogMTU5LFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZDogMTYwLFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMTg6IDE2MSxcbiAgICBkdFRlbXBvcmFyeUluZHR1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjIxOiAxNjIsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2U6IDE2MyxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE2NCxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE2NSxcbiAgICBkdFVuaWZvcm1lZFNlcnZpY2VzSWRlbnRpdHlDYXJkOiAxNjYsXG4gICAgZHRWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxNjcsXG4gICAgZHRXb3JrZXJJZGVudGlmaWNhdGlvbkNyZWRlbnRpYWw6IDE2OCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZTogMTY5LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogMTcwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogMTcxLFxuICAgIGR0UGFzc3BvcnRDYXJkOiAxNzIsXG4gICAgZHRQZXJtYW5lbnRSZXNpZGVudENhcmQ6IDE3MyxcbiAgICBkdFBlcnNvbmFsSWRlbnRpZmljYXRpb25WZXJpZmljYXRpb246IDE3NCxcbiAgICBkdFRlbXBvcmFyeU9wZXJhdG9yTGljZW5zZTogMTc1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE5OiAxNzYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE5OiAxNzcsXG4gICAgZHRWaXNhOiAxNzgsXG4gICAgZHRUZW1wb3JhcnlQYXNzcG9ydDogMTc5LFxuICAgIGR0Vm90aW5nQ2FyZDogMTgwLFxuICAgIGR0SGVhbHRoQ2FyZDogMTgxLFxuICAgIGR0Q2VydGlmaWNhdGVPZkNpdGl6ZW5zaGlwOiAxODIsXG4gICAgZHRBZGRyZXNzQ2FyZDogMTgzLFxuICAgIGR0QWlycG9ydEltbWlncmF0aW9uQ2FyZDogMTg0LFxuICAgIGR0QWxpZW5SZWdpZHRhdGlvbkNhcmQ6IDE4NSxcbiAgICBkdEFQRUhDYXJkOiAxODYsXG4gICAgZHRDb3Vwb250b0RyaXZpbmdMaWNlbnNlOiAxODcsXG4gICAgZHRDcmV3TWVtYmVyQ2VydGlmaWNhdGU6IDE4OCxcbiAgICBkdERvY3VtZW50Rm9yUmV0dXJuOiAxODksXG4gICAgZHRFQ2FyZDogMTkwLFxuICAgIGR0RW1wbG95bWVudENhcmQ6IDE5MSxcbiAgICBkdEhLU0FSSW1taWdyYXRpb25Gb3JtOiAxOTIsXG4gICAgZHRJbW1pZ3JhbnRjYXJkOiAxOTMsXG4gICAgZHRMYWJvdXJDYXJkOiAxOTQsXG4gICAgZHRMYWlzc2V6UGFzc2VyOiAxOTUsXG4gICAgZHRMYXd5ZXJJZGVudGl0eUNlcnRpZmljYXRlOiAxOTYsXG4gICAgZHRMaWNlbnNlQ2FyZDogMTk3LFxuICAgIGR0UGFzc3BvcnRTdGF0ZWxlc3M6IDE5OCxcbiAgICBkdFBhc3Nwb3J0Q2hpbGQ6IDE5OSxcbiAgICBkdFBhc3Nwb3J0Q29uc3VsYXI6IDIwMCxcbiAgICBkdFBhc3Nwb3J0RGlwbG9tYXRpY1NlcnZpY2U6IDIwMSxcbiAgICBkdFBhc3Nwb3J0T2ZmaWNpYWw6IDIwMixcbiAgICBkdFBhc3Nwb3J0UHJvdmlzaW9uYWw6IDIwMyxcbiAgICBkdFBhc3Nwb3J0U3BlY2lhbDogMjA0LFxuICAgIGR0UGVybWlzc2lvbnRvdGhlTG9jYWxCb3JkZXJUcmFmZmljOiAyMDUsXG4gICAgZHRTRURFU09MQ2FyZDogMjA3LFxuICAgIGR0U29jaWFsQ2FyZDogMjA4LFxuICAgIGR0VEJDYXJkOiAyMDksXG4gICAgZHRWZWhpY2xlUGFzc3BvcnQ6IDIxMCxcbiAgICBkdFdEb2N1bWVudDogMjExLFxuICAgIGR0RGlwbG9tYXRpY0lkZW50aXR5Q2FyZDogMjEyLFxuICAgIGR0Q29uc3VsYXJJZGVudGl0eUNhcmQ6IDIxMyxcbiAgICBkdEluY29tZVRheENhcmQ6IDIxNCxcbiAgICBkdFJlc2lkZW5jZVBlcm1pdDogMjE1LFxuICAgIGR0RG9jdW1lbnRPZklkZW50aXR5OiAyMTYsXG4gICAgZHRCb3JkZXJDcm9zc2luZ1Blcm1pdDogMjE3LFxuICAgIGR0UGFzc3BvcnRMaW1pdGVkVmFsaWRpdHk6IDIxOCxcbiAgICBkdFNJTUNhcmQ6IDIxOSxcbiAgICBkdFRheENhcmQ6IDIyMCxcbiAgICBkdENvbXBhbnlDYXJkOiAyMjEsXG4gICAgZHREb21lc3RpY1Bhc3Nwb3J0OiAyMjIsXG4gICAgZHRJZGVudGl0eUNlcnRpZmljYXRlOiAyMjMsXG4gICAgZHRSZXNpZGVudElkQ2FyZDogMjI0LFxuICAgIGR0QXJtZWRGb3JjZXNJZGVudGl0eUNhcmQ6IDIyNSxcbiAgICBkdFByb2Zlc3Npb25hbENhcmQ6IDIyNixcbiAgICBkdFJlZ2lzdHJhdGlvblN0YW1wOiAyMjcsXG4gICAgZHREcml2ZXJDYXJkOiAyMjgsXG4gICAgZHREcml2ZXJUcmFpbmluZ0NlcnRpZmljYXRlOiAyMjksXG4gICAgZHRRdWFsaWZpY2F0aW9uRHJpdmluZ0xpY2Vuc2U6IDIzMCxcbiAgICBkdE1lbWJlcnNoaXBDYXJkOiAyMzEsXG4gICAgZHRQdWJsaWNWZWhpY2xlRHJpdmVyQXV0aG9yaXR5Q2FyZDogMjMyLFxuICAgIGR0TWFyaW5lTGljZW5zZTogMjMzLFxuICAgIGR0VGVtcG9yYXJ5TGVhcm5lckRyaXZpbmdMaWNlbnNlOiAyMzQsXG4gICAgZHRUZW1wb3JhcnlDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDIzNSxcbiAgICBkdEludGVyaW1JbnN0cnVjdGlvbmFsUGVybWl0OiAyMzYsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ29tcGV0ZW5jeTogMjM3LFxuICAgIGR0Q2VydGlmaWNhdGVPZlByb2ZpY2llbmN5OiAyMzgsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NGb3JtYXQgPSB7XG4gICAgSUQxOiAwLFxuICAgIElEMjogMSxcbiAgICBJRDM6IDIsXG4gICAgSUQzX3gyOiA1LFxuICAgIENVU1RPTTogMTAwMCxcbiAgICBGTEVYSUJMRTogMTAwMixcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckFjdGlvbiA9IHtcbiAgICBDT01QTEVURTogMSxcbiAgICBQUk9DRVNTOiAwLFxuICAgIENBTkNFTDogMixcbiAgICBFUlJPUjogMyxcbiAgICBOT1RJRklDQVRJT046IDUsXG4gICAgUFJPQ0VTU19XSElURV9VVl9JTUFHRVM6IDYsXG4gICAgTU9SRV9QQUdFU19BVkFJTEFCTEU6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJGcmFtZSA9IHtcbiAgICBNQVg6IFwibWF4XCIsXG4gICAgU0NFTkFSSU9fREVGQVVMVDogXCJpZDFcIixcbiAgICBOT05FOiBcIm5vbmVcIixcbiAgICBET0NVTUVOVDogXCJkb2N1bWVudFwiLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyT3JpZW50YXRpb24gPSB7XG4gICAgQUxMOiAwLFxuICAgIFBPUlRSQUlUOiAxLFxuICAgIExBTkRTQ0FQRTogMixcbiAgICBMQU5EU0NBUEVfTEVGVDogMyxcbiAgICBMQU5EU0NBUEVfUklHSFQ6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tEaWFnbm9zZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1M6IDEsXG4gICAgSU5WQUxJRF9JTlBVVF9EQVRBOiAyLFxuICAgIElOVEVSTkFMX0VSUk9SOiAzLFxuICAgIEVYQ0VQVElPTl9JTl9NT0RVTEU6IDQsXG4gICAgVU5DRVJUQUlOX1ZFUklGSUNBVElPTjogNSxcbiAgICBORUNFU1NBUllfSU1BR0VfTk9UX0ZPVU5EOiA3LFxuICAgIFBIT1RPX1NJREVTX05PVF9GT1VORDogOCxcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAxMCxcbiAgICBTWU5UQVhfRVJST1I6IDExLFxuICAgIExPR0lDX0VSUk9SOiAxMixcbiAgICBTT1VSQ0VTX0NPTVBBUklTT05fRVJST1I6IDEzLFxuICAgIEZJRUxEU19DT01QQVJJU09OX0xPR0lDX0VSUk9SOiAxNCxcbiAgICBJTlZBTElEX0ZJRUxEX0ZPUk1BVDogMTUsXG4gICAgVFJVRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjEsXG4gICAgRklYRURfUEFUVEVSTl9FUlJPUjogMjIsXG4gICAgTE9XX0NPTlRSQVNUX0lOX0lSX0xJR0hUOiAyMyxcbiAgICBJTkNPUlJFQ1RfQkFDS0dST1VORF9MSUdIVDogMjQsXG4gICAgQkFDS0dST1VORF9DT01QQVJJU09OX0VSUk9SOiAyNSxcbiAgICBJTkNPUlJFQ1RfVEVYVF9DT0xPUjogMjYsXG4gICAgUEhPVE9fRkFMU0VfTFVNSU5JU0NFTkNFOiAyNyxcbiAgICBUT09fTVVDSF9TSElGVDogMjgsXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgUEhPVE9fV0hJVEVfSVJfRE9OVF9NQVRDSDogNDQsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9HTEFSRVNfSU5fUEhPVE9fQVJFQTogODEsXG4gICAgT1ZJX0lSX0lOVklTSUJMRTogOTAsXG4gICAgT1ZJX0lOU1VGRklDSUVOVF9BUkVBOiA5MSxcbiAgICBPVklfQ09MT1JfSU5WQVJJQUJMRTogOTIsXG4gICAgT1ZJX0JBRF9DT0xPUl9GUk9OVDogOTMsXG4gICAgT1ZJX0JBRF9DT0xPUl9TSURFOiA5NCxcbiAgICBPVklfV0lERV9DT0xPUl9TUFJFQUQ6IDk1LFxuICAgIE9WSV9CQURfQ09MT1JfUEVSQ0VOVDogOTYsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9BQlNFTlQ6IDEwMCxcbiAgICBIT0xPR1JBTV9TSURFX1RPUF9JTUFHRVNfQUJTRU5UOiAxMDEsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9QUkVTRU5UOiAxMDIsXG4gICAgSE9MT0dSQU1fRlJBTUVTX0lTX0FCU0VOVDogMTAzLFxuICAgIEhPTE9HUkFNX0hPTE9fRklFTERfSVNfQUJTRU5UOiAxMDQsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlRFUlJVUFRFRDogMTEwLFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRDogMTExLFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0NPTE9SUzogMTEyLFxuICAgIFBIT1RPX1BBVFRFUk5fSVJfVklTSUJMRTogMTEzLFxuICAgIFBIT1RPX1BBVFRFUk5fTk9UX0lOVEVSU0VDVDogMTE0LFxuICAgIFBIT1RPX1NJWkVfSVNfV1JPTkc6IDExNSxcbiAgICBQSE9UT19QQVRURVJOX0lOVkFMSURfQ09MT1I6IDExNixcbiAgICBQSE9UT19QQVRURVJOX1NISUZURURfVkVSVDogMTE3LFxuICAgIFBIT1RPX1BBVFRFUk5fUEFUVEVSTl9OT1RfRk9VTkQ6IDExOCxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDExOSxcbiAgICBQSE9UT19JU19OT1RfUkVDVEFOR0xFOiAxMjAsXG4gICAgUEhPVE9fQ09STkVSU19JU19XUk9ORzogMTIxLFxuICAgIERPQ1VNRU5UX0lTX0NBTkNFTExJTkc6IDEyMixcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9CTFVFOiAxMzAsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfR1JFRU46IDEzMSxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9SRUQ6IDEzMixcbiAgICBURVhUX1NIT1VMRF9CRV9CTEFDSzogMTMzLFxuICAgIEJBUkNPREVfV0FTX1JFQURfV0lUSF9FUlJPUlM6IDE0MCxcbiAgICBCQVJDT0RFX0RBVEFfRk9STUFUX0VSUk9SOiAxNDEsXG4gICAgQkFSQ09ERV9TSVpFX1BBUkFNU19FUlJPUjogMTQyLFxuICAgIE5PVF9BTExfQkFSQ09ERVNfUkVBRDogMTQzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fUE9SVFJBSVRTX0RJRkZFUjogMTUwLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9SRVBMWTogMTUxLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fU0VSVklDRV9FUlJPUjogMTUyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9UX0VOT1VHSF9JTUFHRVM6IDE1MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX0xJVkVfUEhPVE86IDE1NCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfTElDRU5TRTogMTU1LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fUE9SVFJBSVRfREVURUNURUQ6IDE1NixcbiAgICBNT0JJTEVfSU1BR0VTX1VOU1VJVEFCTEVfTElHSFRfQ09ORElUSU9OUzogMTYwLFxuICAgIE1PQklMRV9JTUFHRVNfV0hJVEVfVVZfTk9fRElGRkVSRU5DRTogMTYxLFxuICAgIEZJTkdFUlBSSU5UU19DT01QQVJJU09OX01JU01BVENIOiAxNzAsXG4gICAgSE9MT19QSE9UT19GQUNFX05PVF9ERVRFQ1RFRDogMTgwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9DT01QQVJJU09OX0ZBSUxFRDogMTgxLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9HTEFSRV9JTl9DRU5URVJfQUJTRU5UOiAxODIsXG4gICAgSE9MT19FTEVNRU5UX1NIQVBFX0VSUk9SOiAxODMsXG4gICAgQUxHT1JJVEhNX1NURVBTX0VSUk9SOiAxODQsXG4gICAgSE9MT19BUkVBU19OT1RfTE9BREVEOiAxODUsXG4gICAgRklOSVNIRURfQllfVElNRU9VVDogMTg2LFxuICAgIExBU1RfRElBR05PU0VfVkFMVUU6IDE5MCxcbn1cblxuZXhwb3J0IGNvbnN0IGVDaGVja1Jlc3VsdCA9IHtcbiAgICBDSF9DSEVDS19FUlJPUjogMCxcbiAgICBDSF9DSEVDS19PSzogMSxcbiAgICBDSF9DSEVDS19XQVNfTk9UX0RPTkU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBlR3JhcGhpY0ZpZWxkVHlwZSA9IHtcbiAgICBHRl9QT1JUUkFJVDogMjAxLFxuICAgIEdGX0ZJTkdFUlBSOiAyMDIsXG4gICAgR0ZfRVlFOiAyMDMsXG4gICAgR0ZfU0lHTkFUVVJFOiAyMDQsXG4gICAgR0ZfQkFSX0NPREU6IDIwNSxcbiAgICBHRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDogMjA2LFxuICAgIEdGX0RPQ1VNRU5UX0lNQUdFOiAyMDcsXG4gICAgR0ZfQ09MT1JfRFlOQU1JQzogMjA5LFxuICAgIEdGX0dIT1NUX1BPUlRSQUlUOiAyMTAsXG4gICAgR0ZfU1RBTVA6IDIxMSxcbiAgICBHRl9QT1JUUkFJVF9PRl9DSElMRDogMjEyLFxuICAgIEdGX09USEVSOiAyNTAsXG4gICAgR0ZfRklOR0VSX0xFRlRfVEhVTUI6IDMwMCxcbiAgICBHRl9GSU5HRVJfTEVGVF9JTkRFWDogMzAxLFxuICAgIEdGX0ZJTkdFUl9MRUZUX01JRERMRTogMzAyLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1JJTkc6IDMwMyxcbiAgICBHRl9GSU5HRVJfTEVGVF9MSVRUTEU6IDMwNCxcbiAgICBHRl9GSU5HRVJfUklHSFRfVEhVTUI6IDMwNSxcbiAgICBHRl9GSU5HRVJfUklHSFRfSU5ERVg6IDMwNixcbiAgICBHRl9GSU5HRVJfUklHSFRfTUlERExFOiAzMDcsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1JJTkc6IDMwOCxcbiAgICBHRl9GSU5HRVJfUklHSFRfTElUVExFOiAzMDksXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSUFI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluZ2VycHJpbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0VZRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJcmlzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TSUdOQVRVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2lnbmF0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9CQVJfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYXJjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9QUk9PRl9PRl9DSVRJWkVOU0hJUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9vZiBvZiBjaXRpemVuc2hpcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRE9DVU1FTlRfSU1BR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgaW1hZ2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0NPTE9SX0RZTkFNSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29sb3IgZHluYW1pY3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0dIT1NUX1BPUlRSQUlUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdob3N0IHBvcnRyYWl0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9TVEFNUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGFtcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgb2YgY2hpbGRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX09USEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9USFVNQjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IGluZGV4IGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfUklORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfTEVGVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBsaXR0bGUgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgdGh1bWJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9JTkRFWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaWdodCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9NSURETEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbWlkZGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgcmluZyBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9MSVRUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlSW1hZ2VRdWFsaXR5Q2hlY2tUeXBlID0ge1xuICAgIElRQ19JTUFHRV9HTEFSRVM6IDAsXG4gICAgSVFDX0lNQUdFX0ZPQ1VTOiAxLFxuICAgIElRQ19JTUFHRV9SRVNPTFVUSU9OOiAyLFxuICAgIElRQ19JTUFHRV9DT0xPUk5FU1M6IDMsXG4gICAgSVFDX1BFUlNQRUNUSVZFOiA0LFxuICAgIElRQ19CT1VORFM6IDUsXG4gICAgSVFDX1NDUkVFTl9DQVBUVVJFOiA2LFxuICAgIElRQ19QT1JUUkFJVDogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVQcm9jZXNzR0xDb21tYW5kcyA9IHtcbiAgICBlUENfUHJvY01ncl9TZXRMaWNlbnNlOiAxMjEwMCxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzOiAxMjEwMSxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzQXN5bmM6IDEyMTAyLFxuICAgIGVQQ19Qcm9jTWdyX0luaXQ6IDEyMTAzLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NJbWFnZTogMTIxMDQsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdEb2N1bWVudDogMTIxMDUsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdQYWdlOiAxMjEwNixcbiAgICBlUENfUHJvY01ncl9VbmxvYWQ6IDEyMTA3LFxuICAgIGVQQ19Qcm9jTWdyX0NoZWNrRGF0YWJhc2U6IDEyMTA5LFxuICAgIGVQQ19Qcm9jTWdyX0NvbXBhcmVQb3J0cmFpdHM6IDEyMTExLFxufVxuXG5leHBvcnQgY29uc3QgZVJlcXVlc3RDb21tYW5kID0ge1xuICAgIGVSZXFDbWRfUkZpZF9TZW5kRGF0YTogMTAwLFxuICAgIGVSZXFDbWRfUkZpZF9Ob3RpZnk6IDEwMSxcbiAgICBlUmVxQ21kX1JGaWRfR2V0RGF0YUZvclNjZW5hcmlvOiAxMDIsXG4gICAgZVJlcUNtZF9Ub3JjaF9HZXRVVkZvdG86IDIwMCxcbiAgICBlUmVxQ21kX0ludGVybmV0U2VuZDogMzAwLFxuICAgIGVSZXFDbWRfR2V0R3VpZDogNDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlID0ge1xuICAgIEFDUFRfVU5ERUZJTkVEOiAwLFxuICAgIEFDUFRfQkFDOiAxLFxuICAgIEFDUFRfUEFDRTogMixcbiAgICBBQ1BUX0NBOiAzLFxuICAgIEFDUFRfVEE6IDQsXG4gICAgQUNQVF9BQTogNSxcbiAgICBBQ1BUX1JJOiA2LFxuICAgIEFDUFRfQ0FSRF9JTkZPOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0RhdGFGaWxlX1R5cGUgPSB7XG4gICAgREZUX1VOU1BFQ0lGSUVEOiAwLFxuICAgIERGVF9QQVNTUE9SVF9ERzE6IDEsXG4gICAgREZUX1BBU1NQT1JUX0RHMjogMixcbiAgICBERlRfUEFTU1BPUlRfREczOiAzLFxuICAgIERGVF9QQVNTUE9SVF9ERzQ6IDQsXG4gICAgREZUX1BBU1NQT1JUX0RHNTogNSxcbiAgICBERlRfUEFTU1BPUlRfREc2OiA2LFxuICAgIERGVF9QQVNTUE9SVF9ERzc6IDcsXG4gICAgREZUX1BBU1NQT1JUX0RHODogOCxcbiAgICBERlRfUEFTU1BPUlRfREc5OiA5LFxuICAgIERGVF9QQVNTUE9SVF9ERzEwOiAxMCxcbiAgICBERlRfUEFTU1BPUlRfREcxMTogMTEsXG4gICAgREZUX1BBU1NQT1JUX0RHMTI6IDEyLFxuICAgIERGVF9QQVNTUE9SVF9ERzEzOiAxMyxcbiAgICBERlRfUEFTU1BPUlRfREcxNDogMTQsXG4gICAgREZUX1BBU1NQT1JUX0RHMTU6IDE1LFxuICAgIERGVF9QQVNTUE9SVF9ERzE2OiAxNixcbiAgICBERlRfUEFTU1BPUlRfREcxNzogMTcsXG4gICAgREZUX1BBU1NQT1JUX0RHMTg6IDE4LFxuICAgIERGVF9QQVNTUE9SVF9ERzE5OiAxOSxcbiAgICBERlRfUEFTU1BPUlRfREcyMDogMjAsXG4gICAgREZUX1BBU1NQT1JUX1NPRDogMjEsXG4gICAgREZUX1BBU1NQT1JUX0NWQ0E6IDIyLFxuICAgIERGVF9QQVNTUE9SVF9DT006IDIzLFxuICAgIERGVF9JRF9ERzE6IDEwMSxcbiAgICBERlRfSURfREcyOiAxMDIsXG4gICAgREZUX0lEX0RHMzogMTAzLFxuICAgIERGVF9JRF9ERzQ6IDEwNCxcbiAgICBERlRfSURfREc1OiAxMDUsXG4gICAgREZUX0lEX0RHNjogMTA2LFxuICAgIERGVF9JRF9ERzc6IDEwNyxcbiAgICBERlRfSURfREc4OiAxMDgsXG4gICAgREZUX0lEX0RHOTogMTA5LFxuICAgIERGVF9JRF9ERzEwOiAxMTAsXG4gICAgREZUX0lEX0RHMTE6IDExMSxcbiAgICBERlRfSURfREcxMjogMTEyLFxuICAgIERGVF9JRF9ERzEzOiAxMTMsXG4gICAgREZUX0lEX0RHMTQ6IDExNCxcbiAgICBERlRfSURfREcxNTogMTE1LFxuICAgIERGVF9JRF9ERzE2OiAxMTYsXG4gICAgREZUX0lEX0RHMTc6IDExNyxcbiAgICBERlRfSURfREcxODogMTE4LFxuICAgIERGVF9JRF9ERzE5OiAxMTksXG4gICAgREZUX0lEX0RHMjA6IDEyMCxcbiAgICBERlRfSURfREcyMTogMTIxLFxuICAgIERGVF9ETF9DT006IDE1MCxcbiAgICBERlRfRExfREcxOiAxNTEsXG4gICAgREZUX0RMX0RHMjogMTUyLFxuICAgIERGVF9ETF9ERzM6IDE1MyxcbiAgICBERlRfRExfREc0OiAxNTQsXG4gICAgREZUX0RMX0RHNTogMTU1LFxuICAgIERGVF9ETF9ERzY6IDE1NixcbiAgICBERlRfRExfREc3OiAxNTcsXG4gICAgREZUX0RMX0RHODogMTU4LFxuICAgIERGVF9ETF9ERzk6IDE1OSxcbiAgICBERlRfRExfREcxMDogMTYwLFxuICAgIERGVF9ETF9ERzExOiAxNjEsXG4gICAgREZUX0RMX0RHMTI6IDE2MixcbiAgICBERlRfRExfREcxMzogMTYzLFxuICAgIERGVF9ETF9ERzE0OiAxNjQsXG4gICAgREZUX0RMX1NPRDogMTY1LFxuICAgIERGVF9ETF9DRTogMTY2LFxuICAgIERGVF9ETF9DVkNBOiAxNjcsXG4gICAgREZUX1BBQ0VfQ0FSREFDQ0VTUzogMjAwLFxuICAgIERGVF9QQUNFX0NBUkRTRUNVUklUWTogMjAxLFxuICAgIERGVF9QQUNFX0NISVBTRUNVUklUWTogMjAyLFxuICAgIERGVF9NSUZBUkVfREFUQTogMzAwLFxuICAgIERGVF9NSUZBUkVfVkFMSURJVFk6IDMwMSxcbiAgICBERlRfQVVUSEVOVElDSVRZVjI6IDMwMixcbiAgICBERlRfQVRSOiA0MDAsXG4gICAgREZUX0VTSUdOX1BLOiA1MDAsXG4gICAgREZUX0VTSUdOX1NJR05FRERBVEE6IDUwMSxcbiAgICBERlRfQ0VSVElGSUNBVEU6IDYwMCxcbiAgICBERlRfTUFTVEVSTElTVDogNjAxLFxuICAgIERGVF9ERUZFQ1RMSVNUOiA2MDIsXG4gICAgREZUX0RFVklBVElPTkxJU1Q6IDYwMyxcbiAgICBERlRfQVBQX0RJUkVDVE9SWTogNzAwLFxuICAgIERGVF9TRVNTSU9OOiA3MDEsXG4gICAgREZUX0xPR0RBVEE6IDcwMixcbiAgICBERlRfQ0hJUF9QUk9QRVJUSUVTOiA3MDMsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfQ09NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWNoaW5lIFJlYWRhYmxlIFpvbmUgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgdHlwZVwiICsgXCIgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGV4dCBkYXRhIGVsZW1lbnRzIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmFjaWFsIGRhdGEgKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiICsgXCIgKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGljZW5zZSBob2xkZXIgaW5mb3JtYXRpb24gKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGaW5nZXJwcmludChzKSAoREczKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiICsgXCIgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgZGV0YWlscyAoREczKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIElyaXMgRGF0YSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lXCIgKyBcIiAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdCBpbWFnZSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdChzKSAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIiArIFwiIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZSAvIHVzdWFsIG1hcmsgaW1hZ2UgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCIgKyBcIiAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZSAvIHVzdWFsIG1hcmsgaW1hZ2UgKERHNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNhZGVtaWMgdGl0bGVcIiArIFwiIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmluZ2VycHJpbnQocykgKERHNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiICsgXCIgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIiArIFwiIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gT3RoZXIgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHlcIiArIFwiIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRpdGlvbmFsIHBlcnNvbmFsIGRldGFpbChzKSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNleFwiICsgXCIgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkb21lc3RpYyBkYXRhIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBkb2N1bWVudCBkZXRhaWxzIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsc1wiICsgXCIgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tbWF0Y2ggYWxlcnQgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWwocykgKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWN0aXZlIEF1dGhlbnRpY2F0aW9uIGluZm8gKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzE1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbihzKSB0byBub3RpZnkgKERHMTYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxN1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCIgKyBcIiAoREcxNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMThcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDFcIiArIFwiIChERzE5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcyMFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCIgKyBcIiAoREcyMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzIxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX1NPRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5TT0RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9DVkNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9NSUZBUkVfVkFMSURJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTUlGQVJFIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFDRV9DQVJEQUNDRVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRBY2Nlc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NBUkRTRUNVUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DYXJkU2VjdXJpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NISVBTRUNVUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DaGlwU2VjdXJpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9DRVJUSUZJQ0FURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0FQUF9ESVJFQ1RPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0FUUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQVRSXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQ0hJUF9QUk9QRVJUSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9DSElQX1BST1BFUlRJRVNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ERUZFQ1RMSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ERUZFQ1RMSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfREVWSUFUSU9OTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVWSUFUSU9OTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DRVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9QSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fUEtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9TSUdORUREQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9TSUdORUREQVRBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTE9HREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTE9HREFUQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01BU1RFUkxJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX01BU1RFUkxJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9TRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9TRVNTSU9OXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVU5TUEVDSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VOU1BFQ0lGSUVEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVVNFUkRFRklORUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VTRVJERUZJTkVEXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX05vdGlmaWNhdGlvbkFuZEVycm9yQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDY1NTM2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0RPQ1VNRU5UX1JFQURZOiA2NTUzNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogNjU1MzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDY1NTQ2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BST0dSRVNTOiA2NTU0NyxcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiA2NTU1MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogNjU1NTEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fSVNPX0VSUk9SOiA2OTYzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiA3NzgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogODE5MzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfRElTQ09OTkVDVEVEOiAxMzEwNzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAxMzEwNzMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMTMxMDc0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19USU1FOiAxMzEwNzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAxMzEwNzYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAxMzEwNzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1NQRUVEOiAxMzEwNzgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDEzMTA3OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAxMzEwODAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FWFRfTEVOR1RIX1NVUFBPUlQ6IDEzMTA4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMTMxMDg5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDEzMTA5MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TQ0VOQVJJTzogMTMxMTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDE5NjYwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAyNjIxNDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FTkRfT0ZfRklMRTogMzI3NjgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAzOTMyMTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogNDU4NzUyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9TVEFSVDogNTI0Mjg4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDU4OTgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDY1NTM2MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9GSUxFX0NIRUNLOiA3MjA4OTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDc4NjQzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiA4NTE5NjgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUklfU0VDVE9SX0lEOiA5MTc1MDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogOTgzMDQwLFxuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDIsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YxOiAtMjE0NzQ1ODQzMCxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IC0yMTQ3NDU4NDI5LFxuICAgIFJGSURfTEFZRVI2X1BXRF9CTE9DS0VEOiAtMjE0NzQ1ODExMixcbiAgICBSRklEX0xBWUVSNl9QV0RfU1VTUEVOREVEOiAtMjE0NzQ1ODExMSxcbiAgICBSRklEX0xBWUVSNl9QV0RfQkxPQ0tFRF8yOiAtMjE0NzQ1NjYzNyxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURURfMjogLTIxNDc0NTY2MzYsXG4gICAgUkZJRF9MQVlFUjZfUFdEX1NVU1BFTkRFRF8yOiAtMjE0NzQ1NjYzNSxcbiAgICBSRklEX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6IC0yMDQ2ODE5NTc4LFxuICAgIFJGSURfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IC0yMTQ3NDU2Mzg0LFxuICAgIFJGSURfTEFZRVI2X0ZJTEVfTk9UX0ZPVU5EOiAtMjE0NzQ1NjM4MixcbiAgICBSRklEX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogLTIxNDc0NTYzNzYsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YyOiAtMjE0NzQ1NjI1NixcbiAgICBSRklEX0Vycm9yX0dyYXBoTWFuYWdlcjogLTIxNDc0MTgxMTIsXG4gICAgUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOiAtMjE0NzQxODExMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IC0yMTQ3NDE4MTEwLFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6IC0yMTQ3NDE4MTA4LFxuICAgIFJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOiAtMjE0NzQxODEwNyxcbiAgICBSRklEX0Vycm9yX05vdEVub3VnaE1lbW9yeTogLTIxNDc0MTgxMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogLTIxNDc0MTgxMDQsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IC0yMTQ3NDE4MTAzLFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogLTIxNDc0MTgxMDIsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAtMjE0NzQxODEwMSxcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogLTIxNDc0MTgxMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogLTIxNDczNTI1NzYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzM1MjU3NSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IC0yMTQ3MzUyNTc0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IC0yMTQ3MzUyNTczLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAtMjE0NzM1MjU3MixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAtMjE0NzM1MjU3MSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NfQ0FSRDogLTIxNDczNTI1NzAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IC0yMTQ3MzUyNTYwLFxuICAgIFJGSURfTEFZRVI2X1BXRF9GQUlMRUQ6IC0yMTQ2NDA5NTM2LFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogLTIwOTcxNTIwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogLTIwOTcxNTE5OTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogLTIwOTcxNTE5OTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAtMjA5NzE1MTk4MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAtMjA5NzE1MTk4MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOU1VQUE9SVEVEOiAtMjA5NzE1MTk4MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5NzksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAtMjA5NzE1MTk3OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAtMjA5NzE1MTk3NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogLTIwOTcxNTE5NzYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogLTIwOTcxNTE5NzUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTc0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IC0yMDk3MTUxOTczLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogLTIwOTcxNTE5NzIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAtMjA5NzE1MTk2NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogLTIwOTcxNTE5NjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IC0yMDk3MTUxOTY1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogLTIwOTcxNTE5NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAtMjA5NzE1MTk2MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogLTIwOTcxNTE5NjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogLTIwOTcxNTE5NjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogLTIwOTcxNTE5NjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogLTIwOTcxNTE5NTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogLTIwOTcxNTE5NTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogLTIwOTcxNTE5NTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IC0yMDk3MTUxOTM2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IC0yMDk3MTUxOTM1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogLTIwOTcxNTE5MzQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAtMjA5NzE1MTkyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAtMjA5NzE1MTkxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IC0yMDk3MTUxOTE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogLTIwOTcxNTE5MDQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAtMjA5NzA4NjQ2NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogLTIwOTcwMjA5MjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njk1NTM5MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IC0yMDk2ODg5ODU2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogLTIwOTY4MjQzMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogLTIwOTY3NTg3ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IC0yMDk2NjkzMjQ4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IC0yMDk2NjI3NzEyLFxuICAgIFJGSURfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IC0yMDQ2ODIwMzUyLFxuICAgIFJGSURfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogLTIwNDY4MjAzNTEsXG4gICAgUkZJRF9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IC0yMDQ2ODIwMDk2LFxuICAgIFJGSURfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAtMjA0NjgyMDA5NSxcbiAgICBSRklEX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgyMDA5NCxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzhFX01JU1NJTkc6IC0yMDQ2ODE5ODQwLFxuICAgIFJGSURfTEFZRVI2X1NNX0RPODdfTUlTU0lORzogLTIwNDY4MTk4MzksXG4gICAgUkZJRF9MQVlFUjZfU01fRE85OV9NSVNTSU5HOiAtMjA0NjgxOTgzOCxcbiAgICBSRklEX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOiAtMjA0NjgxOTgzNyxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzg3X0lOQ09SUkVDVDogLTIwNDY4MTk4MzYsXG4gICAgUkZJRF9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAtMjA0NjgxOTU4NCxcbiAgICBSRklEX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogLTIwNDY4MTk1ODMsXG4gICAgUkZJRF9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1ODIsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogLTIwNDY4MTk1ODEsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogLTIwNDY4MTk1ODAsXG4gICAgUkZJRF9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc5LFxuICAgIFJGSURfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTogLTIwNDY4MTk1NzcsXG4gICAgUkZJRF9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1NzYsXG4gICAgUkZJRF9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTc1LFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAtMSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0tcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogTm90IGVub3VnaCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBFbmNhcCBjb250ZW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogRGlnZXN0IGFsZ29yaXRobSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERHIGhhc2hlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5mbyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNOIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJc3N1ZXIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmFsaWRpdHkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IFBLIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbiBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBVbnNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIExEUyBvYmplY3Q6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBVbnN1cHBvcnRlZCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIFNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1OTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduZXIgaW5mbyBjYW5ub3QgZmluZCBjZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBNZXNzZWQgYWxnb3JpdGhtc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogUHVibGljIGtleSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEFsZ29yaXRobSBwYXJhbWV0ZXJzIGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBub3QgZGVmaW5lZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gREc6IFdyb25nIFRhZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2NDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBTeW1tZXRyaWMgQ3lwaGVyIENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBLZXkgQWdyZWVtZW50IENhbm5vdCBJbml0aWFsaXplXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBFcGhlbWVyYWwgS2V5cyBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIENhbm5vdCBEZWNvZGUgTm9uY2VcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBGb3JtYXRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBFcGhlbWVyYWwgS2V5cyBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IFBlcmZvcm1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE5vbi1NYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBJbmZvXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBDYW5ub3QgRmluZCBEb21haW4gUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBTaGFyZWQgU2VjcmV0IENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBOb24tTWF0Y2hpbmcgQXV0aCBUb2tlbnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IENhbm5vdCBCdWlsZCBDZXJ0aWZpY2F0ZSBDaGFpblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IENhbm5vdCBGaW5kIElTIFByaXZhdGUgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBTaWduYXR1cmUgQnVpbGRpbmcgRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBJbnZhbGlkIEtleSBBbGdvcml0aG0gUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgSW5jb3JyZWN0IFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IFVuZGVmaW5lZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogU2lnbmF0dXJlIEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogVW5zdXBwb3J0ZWQgcmVjb3Zlcnkgc2NoZW1lXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogSW5jb3JyZWN0IFRyYWlsZXJcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBVbnN1cHBvcnRlZCBEaWdlc3QgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBDYW5ub3QgRmluZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IEluY29tcGxldGUgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IE1pc3NpbmcgbWFuZGF0b3J5IGRhdGEgUEtcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQdWJsaWMga2V5IHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hBVCB1bnN1cHBvcnRlZCB0ZXJtaW5hbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbnZhbGlkIHBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ1BJIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0FSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIUiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENIQVQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBWYWxpZCBmcm9tIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWQgdG8gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxOTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogTm9uLW1hdGNoaW5nIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB0aW1lIGNvZGluZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHVzZSBvZiBnZW5lcmFsaXplZCB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBFbXB0eSBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEVtcHR5IHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIGNyaXRpY2FsIGV4dGVuc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRm9yY2VkIGRlZmF1bHQgQ1NDQSByb2xlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgRGVmYXVsdCBEUyByb2xlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgaXNzdWVyIHN1YmplY3QgRFNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IER1cGxpY2F0aW5nIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvdW50cnkgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvdW50cnkgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBjb21tb24gbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvdW50cnkgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBVbnN1cHBvcnRlZCBwdWJsaWMga2V5IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IE1pc3NlZCBleHRlbnNpb25zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogVXNpbmcgbm9uLWNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgdXNhZ2UgMVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgdXNhZ2UgMlwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgcGF0aCBMZW5DIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2Ugbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gQXV0aCBrZXk6IEtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3Qga2V5IElEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBQcml2YXRlIGtleSBVUCBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IE1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IERvYyB0eXBlc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IERvYyB0eXBlcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBEZXJ0IHBvbGljaWVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENlcnQgcG9saWNpZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBwb2xpY3kgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDUkwgZGlzdCBwb2ludCBwb2ludCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IExEUyB2ZXJzaW9uIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogVW5pY29kZSB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSB1bmV4cGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogTERTIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiBpbmNvbnNpc3RlbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBVbmljb2RlIHZlcnNpb24gaW5jb25zaXN0ZW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBPSUQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvcyBtdWx0aXBsZSBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENlcnRpZmljYXRlcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IENSTHMgaW5jb3JyZWN0IHVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBJbmNvcnJlY3QgY29udGVudCBPSURcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IERHIG51bWJlciBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IERHIGhhc2ggbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBleHRyYVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIG1hc3RlciBsaXN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBpbmNvcnJlY3QgY2hvaWNlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTSUQgZGlnZXN0IGFsZ29yaXRobSBub3QgbGlzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNpZ25pbmcgdGltZSBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByb290IGlzIG5vdCB0cnVzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgY2Fubm90IGZpbmQgQ1NDQVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJldm9rZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBzaWduYXR1cmUgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbjogVW5zdXBwb3J0ZWQgaW1hZ2UgZm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRG9jdW1lbnQgdHlwZSB1bmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSXNzdWluZyBzdGF0ZSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYW1lIGlzIHZvaWRcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOdW1iZXIgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTmF0aW9uYWxpdHkgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBTZXggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBPcHRpb25hbCBkYXRhIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTgyNjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg5MTcxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4ODUxNTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCB0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODc4NjA0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODcyMDUxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBUeXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NjU0OTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTg5NDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg1MjM5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGltYWdlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODQ1ODM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZm9ybWF0IElEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzkyODMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzI3Mjk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBkYXRhIGxlbmd0aCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzk5OTYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBHZW5kZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzkzNDA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBFeWUgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzg2ODU0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBIYWlyIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4MDMwMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzczNzQ3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2NzE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFlhd1wiXG4gICAgICAgICAgICBjYXNlIC0xODc3NTQwODY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDc1MzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc0MDk3OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRmFjZSBJbWFnZSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzczNDQyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSW1hZ2UgRGF0YSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBVbnN1cHBvcnRlZCBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gRGVwcmVjYXRlZCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVc2luZyBTdGQgUmVmXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBQdWJsaWNLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBGaWxlIElEIEZvciBWZXJzaW9uIDJcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb25zaXN0ZW50IGFsZ29yaXRobSByZWZlcmVuY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vIFJlcXVpcmVkIE9wdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgQW5vbnltb3VzIEluZm9zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5jb3JyZWN0IEluZm9zIFF1YW50aXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDYXJkIEluZm8gTG9jYXRvciBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBJbmZvIE11bHRpcGxlIEVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUHJpdmlsZWdlZCBUSSBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgSW5jb3JyZWN0IFVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGRvbWFpbiBwYXJhbXMgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBTdG9yYWdlIFBBQ0UgSW5mbyBOb24gQ29uc2lzdGFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcm9maWxlIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IE5vbiBDVkNBIGRvbWFpbiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzAyMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gVEE6IFBBQ0Ugc3RhdGljIGJpbmRpbmcgdXNlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbm5vdCBmaW5kIENTQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMTg0NTQ5MzQ4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByZXZva2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgc2lnbmF0dXJlIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfQUxSRUFEWV9ET05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVlc3RlZCBvcGVyYXRpb24gaXMgYWxyZWFkeSBkb25lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRXJyb3JfR3JhcGhNYW5hZ2VyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENyZWF0aW9uIG9yIGNvbm5lY3Rpb24gdG8gR3JhcGggTWFuYWdlciBDT00gc2VydmVyIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vIGNoaXAgaXMgZGV0ZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIHBhcmFtZXRlciBpbiBFeGVjdXRlQ29tbWFuZCgpIGNhbGwgZm91bmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IERldmljZSBpcyB1bmluaXRpYWxpemVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0Vycm9yX05vdEVub3VnaE1lbW9yeTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBPdXQgb2YgbWVtb3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0lOVkFMSURfRElSRUNUT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1VOS05PV05fQ09NTUFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmtub3duIGNvbW1hbmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfRklMRV9JT19FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IElPIEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0JVU1k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUkZJRCBpcyBCdXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0MTgxMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRmlybXdhcmUgbmVlZCB0byBiZSB1cGRhdGVkIHdpdGggbmV3ZXIgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFJlYWRlciBpcyB1bmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IENhcmQgY2Fubm90IGJlIGNvbm5lY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IENhcmQgaXMgbm90IGNvbm5lY3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IE9wZXJhdGlvbiBpcyBjYW5jZWxsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIElzIEJ1c3lcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWQgU21hcnQgQ2FyZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3MzUyNTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEV4dExlIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMzUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU2VjdXJlIE1lc3NhZ2luZyB3YXMgbm90IGFjdGl2YXRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMzUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9BXzAzIFxcXCJBcHBsaWNhdGlvbiBzZWxlY3Rpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMSBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIE1BQyBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMDk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9CXzAyIFxcXCJNdXR1YWwgYXV0aGVudGljYXRpb24gZW5jcnlwdGlvbiBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODIwMDk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9CXzAzIFxcXCJNdXR1YWwgYXV0aGVudGljYXRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTg0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIE1BQyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBjcnlwdG9ncmFtIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIHNlY3VyZWQgc3RhdHVzIGJ5dGVzIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGluY29ycmVjdCBNQUNcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTgzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGluY29ycmVjdCBjcnlwdG9ncmFtXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBOb3QgVExWIHJlc3BvbnNlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFdyb25nIGRhdGEgbGVuZ3RoIChBUERVX0lOU19HRVRfQ0hBTExFTkdFKVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogQVBEVV9JTlNfSU5URVJOQUxfQVVUSEVOVElDQVRFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgS0FUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgRFNUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBTTyBDRVJUSUZJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEFUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdFVCBDSEFMTEVOR0UgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogQVBEVV9JTlNfRVhURVJOQUxfQVVUSEVOVElDQVRFIChFeHRlcm5hbCBBdXRoZW50aWNhdGlvbikgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogR2VuZXJhbCBBdXRoZW50aWNpdHkgRmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2MzgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogRmlsZSBzZWxlY3Rpb24gZmFpbHVyZSAvIGZpbGUgbm90IGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTg0MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBSZWFkaW5nIGJleW9uZCBFT0YgLyBVbmV4cGVjdGVkIEVPRlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2MjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEluY29ycmVjdCBQYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE5vIFJlZmVyZW5jZSBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTgxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgU3VzcGVuZGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTgxMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgQmxvY2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4NDI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIERlYWN0aXZhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgQmxvY2tlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgRGVhY3RpdmF0ZWQgMlwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU2NjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIFN1c3BlbmRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDY0MDk1MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTIwMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTm90IFBlcmZvcm1lZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFNlc3Npb24gSXMgQ2xvc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGVybWluYWwgVW5zdXBwb3J0ZWQgT3BlcmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGVybWluYWwgVHlwZSBVbmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGVybWluYWwgVHlwZSBCYWQgQ2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBUeXBlIE5vdCBTZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQcm9jZWR1cmUgVHlwZSBVbmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHJvY2VkdXJlIFR5cGUgVW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQcm9jZWR1cmUgVHlwZSBOb3QgU2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Nzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBVbmtub3duIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IFVuc3VwcG9ydGVkIFNNIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IEluY29ycmVjdCBTTSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBSZXN0cmljdGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFB3ZCBNYW5hZ2VtZW50IE5vdCBBdXRob3JpemVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIENvbnRyb2wgVW5rbm93blR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBTTVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIFBBQ0VcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBDQSBLZXlzXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgVEFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBDQVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEluY29ycmVjdCBPcHRpb24gQ0FcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDQSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUQSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBQSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSSSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBTTyBTaWduYXR1cmUgQ2hlY2sgRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSGFzaCBDaGVjayBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIEF1eCBEYXRhIERhdGUgT2YgRXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBBdXggRGF0YSBEYXRlIE9mIEJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBBdXggRGF0YSBDb21tdW5pdHkgSURcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBSZXF1aXJlcyBBcHAgU2VsZWN0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gUElOIE5vdCBTZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gTm90IFZlcmlmaWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzA4NjQ2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IE5vdCBFbm91Z2ggRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MDIwOTI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5Njk1NTM5MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IFVuZXhwZWN0ZWQgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2ODg5ODU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQ29udGVudHMgVW5leHBlY3RlZCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY4MjQzMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBXcm9uZyBUYWdcIlxuICAgICAgICAgICAgY2FzZSAtMjA5Njc1ODc4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IENhbm5vdCBVc2UgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NjkzMjQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQ2Fubm90IFJlYWQgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQUNDRVNTX0RFTklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IEFjY2VzcyBEZW5pZWRcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfUGFzc3dvcmRfVHlwZSA9IHtcbiAgICBQUFRfVU5LTk9XTjogMCxcbiAgICBQUFRfTVJaOiAxLFxuICAgIFBQVF9DQU46IDIsXG4gICAgUFBUX1BJTjogMyxcbiAgICBQUFRfUFVLOiA0LFxuICAgIFBQVF9QSU5fRVNJR046IDUsXG4gICAgUFBUX1NBSTogNixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1NES19Qcm9maWxlclR5cGUgPSB7XG4gICAgU1BUX0RPQ185MzAzX0VESVRJT05fMjAwNjogMHgwMDAwMDAwMSxcbiAgICBTUFRfRE9DXzkzMDNfTERTX1BLSV9NQUlOVEVOQU5DRTogMHgwMDAwMDAwMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Rlcm1pbmFsVHlwZSA9IHtcbiAgICBURVRfVU5ERUZJTkVEOiAwLFxuICAgIFRFVF9JTlNQRUNUSU9OX1NZU1RFTTogMSxcbiAgICBURVRfQVVUSEVOVElDQVRJT05fVEVSTUlOQUw6IDIsXG4gICAgVEVUX1NJR05BVFVSRV9URVJNSU5BTDogMyxcbiAgICBURVRfVU5BVVRIRU5USUNBVEVEX1RFUk1JTkFMOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fQXV0aGVudGljaXR5ID0ge1xuICAgIE5PTkU6IDAsXG4gICAgVVZfTFVNSU5FU0NFTkNFOiAxLFxuICAgIElSX0I5MDA6IDIsXG4gICAgSU1BR0VfUEFUVEVSTjogNCxcbiAgICBBWElBTF9QUk9URUNUSU9OOiA4LFxuICAgIFVWX0ZJQkVSUzogMTYsXG4gICAgSVJfVklTSUJJTElUWTogMzIsXG4gICAgT0NSX1NFQ1VSSVRZX1RFWFQ6IDY0LFxuICAgIElQSTogMTI4LFxuICAgIFBIT1RPX0VNQkVEX1RZUEU6IDUxMixcbiAgICBIT0xPR1JBTVM6IDQwOTYsXG4gICAgUEhPVE9fQVJFQTogODE5MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OOiAzMjc2OCxcbiAgICBCQVJDT0RFX0ZPUk1BVF9DSEVDSzogNjU1MzYsXG4gICAgS0lORUdSQU06IDEzMTA3MixcbiAgICBIT0xPR1JBTVNfREVURUNUSU9OOiA1MjQyODgsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCA9IHtcbiAgICBSQ0ZfRElTQUJMRUQ6IDAsXG4gICAgUkNGX1ZFUklGSUVEOiAxLFxuICAgIFJDRl9OT1RfVkVSSUZJRUQ6IDIsXG4gICAgUkNGX0NPTVBBUkVfVFJVRTogMyxcbiAgICBSQ0ZfQ09NUEFSRV9GQUxTRTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0xpZ2h0cyA9IHtcbiAgICBOT05FOiAwLFxuICAgIFJQUk1fTElHSFRfVVY6IDEyOCxcbiAgICBSUFJNX0xJR0hUX1dISVRFX0ZVTEw6IDYsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1VWOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVWXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1dISVRFX0ZVTEw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzaWJsZSBsaWdodFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9SZXN1bHRUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU1QVFk6IDAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfSU1BR0U6IDEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUxFX0lNQUdFOiAyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX09DUl9FWFRFTkRFRDogMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVTOiA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfR1JBUEhJQ1M6IDYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfVEVTVF9RVUFMSVRZOiA3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfVFlQRVNfQ0FORElEQVRFUzogOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NIT1NFTl9ET0NVTUVOVF9UWVBFX0NBTkRJREFURTogOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UU19JTkZPX0xJU1Q6IDEwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfT0NSX0xFWElDQUxfQU5BTFlaRTogMTUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9SQVdfVU5DUk9QUEVEX0lNQUdFOiAxNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1ZJU1VBTF9PQ1JfRVhURU5ERUQ6IDE3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX1RFWFRfREFUQTogMTgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfSU1BR0VfREFUQTogMTksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9BVVRIRU5USUNJVFk6IDIwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRU9TX0lNQUdFOiAyMyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBWUVSX0lNQUdFOiAyNCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRTogMjUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEVfVEVYVF9EQVRBOiAyNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJRUxEX0ZJTEVfSU1BR0U6IDI3LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfREFUQUJBU0VfQ0hFQ0s6IDI4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklOR0VSUFJJTlRfVEVNUExBVEVfSVNPOiAyOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOUFVUX0lNQUdFX1FVQUxJVFk6IDMwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRfUE9TSVRJT046IDg1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ1VTVE9NOiAxMDAsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX1JBV19EQVRBOiAxMDEsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX1RFWFRfREFUQTogMTAyLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9JTUFHRV9EQVRBOiAxMDMsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0JJTkFSWV9EQVRBOiAxMDQsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX09SSUdJTkFMX0dSQVBISUNTOiAxMDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFX1BPU0lUSU9OOiA2MixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9QT1NJVElPTjogNjEsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlID0ge1xuICAgIE5PTkU6IC0xLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CTEFOSzogMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRklMTDogMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE86IDIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX01SWjogMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfRkFMU0VfTFVNSU5FU0NFTkNFOiA0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1NJTVBMRTogNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfU1RBVElDOiA2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9NVUxUSV9TVEFUSUM6IDcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX0RJTkFNSUM6IDgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX0lOVEVSUlVQVEVEOiA5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9TSElGVEVEOiAxMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9TQU1FX0NPTE9SUzogMTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fSVJfSU5WSVNJQkxFOiAxMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0laRV9DSEVDSzogMTMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfR0hPU1Q6IDE0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1JGSUQ6IDE1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX1ZJU1VBTDogMTYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JBUkNPREU6IDE3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDE4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0NBTUVSQTogMTksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fUkZJRF9WU19DQU1FUkE6IDIwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9HSE9TVF9QSE9UTzogMjEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0NMRUFSX0dIT1NUX1BIT1RPOiAyMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSU5WSVNJQkxFX09CSkVDVDogMjMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0xPV19DT05UUkFTVF9PQkpFQ1Q6IDI0LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT0xPUjogMjUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NIQVBFOiAyNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09STkVSUzogMjcsXG4gICAgRE9DVU1FTlRfQ0FOQ0VMTElOR19ERVRFQ1RPUjogMjgsXG59XG5cbmV4cG9ydCBjb25zdCBlU2lnbk1hbmFnZW1lbnRBY3Rpb24gPSB7XG4gICAgc21hVW5kZWZpbmVkOiAwLFxuICAgIHNtYUNyZWF0ZVBJTjogMSxcbiAgICBzbWFDaGFuZ2VQSU46IDIsXG4gICAgc21hVW5ibG9ja1BJTjogMyxcbiAgICBzbWFUZXJtaW5hdGVQSU46IDQsXG4gICAgc21hR2VuZXJhdGVLZXlzOiA1LFxuICAgIHNtYVRlcm1pbmF0ZUtleXM6IDYsXG4gICAgc21hU2lnbkRhdGE6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBlVmlzdWFsRmllbGRUeXBlID0ge1xuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6IDAsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFOiAxLFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUjogMixcbiAgICBGVF9EQVRFX09GX0VYUElSWTogMyxcbiAgICBGVF9EQVRFX09GX0lTU1VFOiA0LFxuICAgIEZUX0RBVEVfT0ZfQklSVEg6IDUsXG4gICAgRlRfUExBQ0VfT0ZfQklSVEg6IDYsXG4gICAgRlRfUEVSU09OQUxfTlVNQkVSOiA3LFxuICAgIEZUX1NVUk5BTUU6IDgsXG4gICAgRlRfR0lWRU5fTkFNRVM6IDksXG4gICAgRlRfTU9USEVSU19OQU1FOiAxMCxcbiAgICBGVF9OQVRJT05BTElUWTogMTEsXG4gICAgRlRfU0VYOiAxMixcbiAgICBGVF9IRUlHSFQ6IDEzLFxuICAgIEZUX1dFSUdIVDogMTQsXG4gICAgRlRfRVlFU19DT0xPUjogMTUsXG4gICAgRlRfSEFJUl9DT0xPUjogMTYsXG4gICAgRlRfQUREUkVTUzogMTcsXG4gICAgRlRfRE9OT1I6IDE4LFxuICAgIEZUX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDE5LFxuICAgIEZUX0RMX0NMQVNTOiAyMCxcbiAgICBGVF9ETF9FTkRPUlNFRDogMjEsXG4gICAgRlRfRExfUkVTVFJJQ1RJT05fQ09ERTogMjIsXG4gICAgRlRfRExfVU5ERVJfMjFfREFURTogMjMsXG4gICAgRlRfQVVUSE9SSVRZOiAyNCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMjUsXG4gICAgRlRfTkFUSU9OQUxJVFlfQ09ERTogMjYsXG4gICAgRlRfUEFTU1BPUlRfTlVNQkVSOiAyNyxcbiAgICBGVF9JTlZJVEFUSU9OX05VTUJFUjogMjgsXG4gICAgRlRfVklTQV9JRDogMjksXG4gICAgRlRfVklTQV9DTEFTUzogMzAsXG4gICAgRlRfVklTQV9TVUJfQ0xBU1M6IDMxLFxuICAgIEZUX01SWl9TVFJJTkdfMTogMzIsXG4gICAgRlRfTVJaX1NUUklOR18yOiAzMyxcbiAgICBGVF9NUlpfU1RSSU5HXzM6IDM0LFxuICAgIEZUX01SWl9UWVBFOiAzNSxcbiAgICBGVF9PUFRJT05BTF9EQVRBOiAzNixcbiAgICBGVF9ET0NVTUVOVF9DTEFTU19OQU1FOiAzNyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX05BTUU6IDM4LFxuICAgIEZUX1BMQUNFX09GX0lTU1VFOiAzOSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tTVU06IDQwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tTVU06IDQxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLU1VNOiA0MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tTVU06IDQzLFxuICAgIEZUX0ZJTkFMX0NIRUNLU1VNOiA0NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tTVU06IDQ1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOiA0NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLU1VNOiA0NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS1NVTTogNDgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS1NVTTogNDksXG4gICAgRlRfT1RIRVI6IDUwLFxuICAgIEZUX01SWl9TVFJJTkdTOiA1MSxcbiAgICBGVF9OQU1FX1NVRkZJWDogNTIsXG4gICAgRlRfTkFNRV9QUkVGSVg6IDUzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06IDU0LFxuICAgIEZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6IDU1LFxuICAgIEZUX0RPQ1VNRU5UX1NFUklFUzogNTYsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUjogNTcsXG4gICAgRlRfUkVHX0NFUlRfQ0FSX01PREVMOiA1OCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfQ09MT1I6IDU5LFxuICAgIEZUX1JFR19DRVJUX0JPRFlfTlVNQkVSOiA2MCxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfVFlQRTogNjEsXG4gICAgRlRfUkVHX0NFUlRfTUFYX1dFSUdIVDogNjIsXG4gICAgRlRfUkVHX0NFUlRfV0VJR0hUOiA2MyxcbiAgICBGVF9BRERSRVNTX0FSRUE6IDY0LFxuICAgIEZUX0FERFJFU1NfU1RBVEU6IDY1LFxuICAgIEZUX0FERFJFU1NfQlVJTERJTkc6IDY2LFxuICAgIEZUX0FERFJFU1NfSE9VU0U6IDY3LFxuICAgIEZUX0FERFJFU1NfRkxBVDogNjgsXG4gICAgRlRfUExBQ0VfT0ZfUkVHSVNUUkFUSU9OOiA2OSxcbiAgICBGVF9EQVRFX09GX1JFR0lTVFJBVElPTjogNzAsXG4gICAgRlRfUkVTSURFTlRfRlJPTTogNzEsXG4gICAgRlRfUkVTSURFTlRfVU5USUw6IDcyLFxuICAgIEZUX0FVVEhPUklUWV9DT0RFOiA3MyxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9BUkVBOiA3NCxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9TVEFURV9DT0RFOiA3NSxcbiAgICBGVF9BRERSRVNTX1NUUkVFVDogNzYsXG4gICAgRlRfQUREUkVTU19DSVRZOiA3NyxcbiAgICBGVF9BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiA3OCxcbiAgICBGVF9BRERSRVNTX1BPU1RBTF9DT0RFOiA3OSxcbiAgICBGVF9ET0NVTUVOVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tfRElHSVQ6IDgxLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLX0RJR0lUOiA4MixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDgzLFxuICAgIEZUX0ZJTkFMX0NIRUNLX0RJR0lUOiA4NCxcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg1LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOiA4NixcbiAgICBGVF9WSVNBX0lEX0NIRUNLX0RJR0lUOiA4NyxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS19ESUdJVDogODgsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTF9DSEVDS19ESUdJVDogODksXG4gICAgRlRfUEVSTUlUX0RMX0NMQVNTOiA5MCxcbiAgICBGVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6IDkxLFxuICAgIEZUX1BFUk1JVF9JREVOVElGSUVSOiA5MixcbiAgICBGVF9QRVJNSVRfREFURV9PRl9JU1NVRTogOTMsXG4gICAgRlRfUEVSTUlUX1JFU1RSSUNUSU9OX0NPREU6IDk0LFxuICAgIEZUX1BFUk1JVF9FTkRPUlNFRDogOTUsXG4gICAgRlRfSVNTVUVfVElNRVNUQU1QOiA5NixcbiAgICBGVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzogOTcsXG4gICAgRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6IDk4LFxuICAgIEZUX05PTl9SRVNJREVOVF9JTkRJQ0FUT1I6IDk5LFxuICAgIEZUX1ZJU0FfVFlQRTogMTAwLFxuICAgIEZUX1ZJU0FfVkFMSURfRlJPTTogMTAxLFxuICAgIEZUX1ZJU0FfVkFMSURfVU5USUw6IDEwMixcbiAgICBGVF9EVVJBVElPTl9PRl9TVEFZOiAxMDMsXG4gICAgRlRfTlVNQkVSX09GX0VOVFJJRVM6IDEwNCxcbiAgICBGVF9EQVk6IDEwNSxcbiAgICBGVF9NT05USDogMTA2LFxuICAgIEZUX1lFQVI6IDEwNyxcbiAgICBGVF9VTklRVUVfQ1VTVE9NRVJfSURFTlRJRklFUjogMTA4LFxuICAgIEZUX0NPTU1FUkNJQUxfVkVISUNMRV9DT0RFUzogMTA5LFxuICAgIEZUX0FLQV9EQVRFX09GX0JJUlRIOiAxMTAsXG4gICAgRlRfQUtBX1NPQ0lBTF9TRUNVUklUWV9OVU1CRVI6IDExMSxcbiAgICBGVF9BS0FfU1VSTkFNRTogMTEyLFxuICAgIEZUX0FLQV9HSVZFTl9OQU1FUzogMTEzLFxuICAgIEZUX0FLQV9OQU1FX1NVRkZJWDogMTE0LFxuICAgIEZUX0FLQV9OQU1FX1BSRUZJWDogMTE1LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6IDExNixcbiAgICBGVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTogMTE3LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTogMTE4LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTogMTE5LFxuICAgIEZUX0FVRElUX0lORk9STUFUSU9OOiAxMjAsXG4gICAgRlRfSU5WRU5UT1JZX05VTUJFUjogMTIxLFxuICAgIEZUX1JBQ0VfRVRITklDSVRZOiAxMjIsXG4gICAgRlRfSlVSSVNESUNUSU9OX1ZFSElDTEVfQ0xBU1M6IDEyMyxcbiAgICBGVF9KVVJJU0RJQ1RJT05fRU5ET1JTRU1FTlRfQ09ERTogMTI0LFxuICAgIEZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOiAxMjUsXG4gICAgRlRfRkFNSUxZX05BTUU6IDEyNixcbiAgICBGVF9HSVZFTl9OQU1FU19SVVM6IDEyNyxcbiAgICBGVF9WSVNBX0lEX1JVUzogMTI4LFxuICAgIEZUX0ZBVEhFUlNfTkFNRTogMTI5LFxuICAgIEZUX0ZBVEhFUlNfTkFNRV9SVVM6IDEzMCxcbiAgICBGVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19SVVM6IDEzMSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSF9SVVM6IDEzMixcbiAgICBGVF9BVVRIT1JJVFlfUlVTOiAxMzMsXG4gICAgRlRfSVNTVUlOR19TVEFURV9DT0RFX05VTUVSSUM6IDEzNCxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6IDEzNSxcbiAgICBGVF9FTkdJTkVfUE9XRVI6IDEzNixcbiAgICBGVF9FTkdJTkVfVk9MVU1FOiAxMzcsXG4gICAgRlRfQ0hBU1NJU19OVU1CRVI6IDEzOCxcbiAgICBGVF9FTkdJTkVfTlVNQkVSOiAxMzksXG4gICAgRlRfRU5HSU5FX01PREVMOiAxNDAsXG4gICAgRlRfVkVISUNMRV9DQVRFR09SWTogMTQxLFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSOiAxNDIsXG4gICAgRlRfQ09OVFJPTF9OTzogMTQzLFxuICAgIEZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOiAxNDQsXG4gICAgRlRfU0VDT05EX1NVUk5BTUU6IDE0NSxcbiAgICBGVF9NSURETEVfTkFNRTogMTQ2LFxuICAgIEZUX1JFR19DRVJUX1ZJTjogMTQ3LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS19ESUdJVDogMTQ4LFxuICAgIEZUX1JFR19DRVJUX1ZJTl9DSEVDS1NVTTogMTQ5LFxuICAgIEZUX0xJTkVfMV9DSEVDS19ESUdJVDogMTUwLFxuICAgIEZUX0xJTkVfMl9DSEVDS19ESUdJVDogMTUxLFxuICAgIEZUX0xJTkVfM19DSEVDS19ESUdJVDogMTUyLFxuICAgIEZUX0xJTkVfMV9DSEVDS1NVTTogMTUzLFxuICAgIEZUX0xJTkVfMl9DSEVDS1NVTTogMTU0LFxuICAgIEZUX0xJTkVfM19DSEVDS1NVTTogMTU1LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSX0NIRUNLU1VNOiAxNTcsXG4gICAgRlRfUkVHX0NFUlRfVkVISUNMRV9JVFNfQ09ERTogMTU4LFxuICAgIEZUX0NBUkRfQUNDRVNTX05VTUJFUjogMTU5LFxuICAgIEZUX01BUklUQUxfU1RBVFVTOiAxNjAsXG4gICAgRlRfQ09NUEFOWV9OQU1FOiAxNjEsXG4gICAgRlRfU1BFQ0lBTF9OT1RFUzogMTYyLFxuICAgIEZUX1NVUk5BTUVfT0ZfU1BPU0U6IDE2MyxcbiAgICBGVF9UUkFDS0lOR19OVU1CRVI6IDE2NCxcbiAgICBGVF9CT09LTEVUX05VTUJFUjogMTY1LFxuICAgIEZUX0NISUxEUkVOOiAxNjYsXG4gICAgRlRfQ09QWTogMTY3LFxuICAgIEZUX1NFUklBTF9OVU1CRVI6IDE2OCxcbiAgICBGVF9ET1NTSUVSX05VTUJFUjogMTY5LFxuICAgIEZUX0FLQV9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzogMTcwLFxuICAgIEZUX1RFUlJJVE9SSUFMX1ZBTElESVRZOiAxNzEsXG4gICAgRlRfTVJaX1NUUklOR1NfV0lUSF9DT1JSRUNUX0NIRUNLX1NVTVM6IDE3MixcbiAgICBGVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTogMTczLFxuICAgIEZUX0RMX1VOREVSXzE4X0RBVEU6IDE3NCxcbiAgICBGVF9ETF9SRUNPUkRfQ1JFQVRFRDogMTc1LFxuICAgIEZUX0RMX0RVUExJQ0FURV9EQVRFOiAxNzYsXG4gICAgRlRfRExfSVNTX1RZUEU6IDE3NyxcbiAgICBGVF9NSUxJVEFSWV9CT09LX05VTUJFUjogMTc4LFxuICAgIEZUX0RFU1RJTkFUSU9OOiAxNzksXG4gICAgRlRfQkxPT0RfR1JPVVA6IDE4MCxcbiAgICBGVF9TRVFVRU5DRV9OVU1CRVI6IDE4MSxcbiAgICBGVF9SRUdfQ0VSVF9CT0RZX1RZUEU6IDE4MixcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTUFSSzogMTgzLFxuICAgIEZUX1RSQU5TQUNUSU9OX05VTUJFUjogMTg0LFxuICAgIEZUX0FHRTogMTg1LFxuICAgIEZUX0ZPTElPX05VTUJFUjogMTg2LFxuICAgIEZUX1ZPVEVSX0tFWTogMTg3LFxuICAgIEZUX0FERFJFU1NfTVVOSUNJUEFMSVRZOiAxODgsXG4gICAgRlRfQUREUkVTU19MT0NBVElPTjogMTg5LFxuICAgIEZUX1NFQ1RJT046IDE5MCxcbiAgICBGVF9PQ1JfTlVNQkVSOiAxOTEsXG4gICAgRlRfRkVERVJBTF9FTEVDVElPTlM6IDE5MixcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSOiAxOTMsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS1NVTTogMTk0LFxuICAgIEZUX09QVElPTkFMX0RBVEFfQ0hFQ0tfRElHSVQ6IDE5NSxcbiAgICBGVF9WSVNBX05VTUJFUjogMTk2LFxuICAgIEZUX1ZJU0FfTlVNQkVSX0NIRUNLU1VNOiAxOTcsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDE5OCxcbiAgICBGVF9WT1RFUjogMTk5LFxuICAgIEZUX1BSRVZJT1VTX1RZUEU6IDIwMCxcbiAgICBGVF9GSUVMRF9GUk9NX01SWjogMjIwLFxuICAgIEZUX0NVUlJFTlRfREFURTogMjIxLFxuICAgIEZUX1NUQVRVU19EQVRFX09GX0VYUElSWTogMjUxLFxuICAgIEZUX0JBTktOT1RFX05VTUJFUjogMjUyLFxuICAgIEZUX0NTQ19DT0RFOiAyNTMsXG4gICAgRlRfQVJUSVNUSUNfTkFNRTogMjU0LFxuICAgIEZUX0FDQURFTUlDX1RJVExFOiAyNTUsXG4gICAgRlRfQUREUkVTU19DT1VOVFJZOiAyNTYsXG4gICAgRlRfQUREUkVTU19aSVBDT0RFOiAyNTcsXG4gICAgRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzE6IDI1OCxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMjogMjU5LFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RSRUVUOiAyNjAsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DSVRZOiAyNjEsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVEFURTogMjYyLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ09VTlRSWTogMjYzLFxuICAgIEZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTogMjY0LFxuICAgIEZUX0NETF9DTEFTUzogMjY1LFxuICAgIEZUX0RMX1VOREVSXzE5X0RBVEU6IDI2NixcbiAgICBGVF9XRUlHSFRfUE9VTkRTOiAyNjcsXG4gICAgRlRfTElNSVRFRF9EVVJBVElPTl9ET0NVTUVOVF9JTkRJQ0FUT1I6IDI2OCxcbiAgICBGVF9FTkRPUlNFTUVOVF9FWFBJUkFUSU9OX0RBVEU6IDI2OSxcbiAgICBGVF9SRVZJU0lPTl9EQVRFOiAyNzAsXG4gICAgRlRfQ09NUExJQU5DRV9UWVBFOiAyNzEsXG4gICAgRlRfRkFNSUxZX05BTUVfVFJVTkNBVElPTjogMjcyLFxuICAgIEZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjogMjczLFxuICAgIEZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046IDI3NCxcbiAgICBGVF9FWEFNX0RBVEU6IDI3NSxcbiAgICBGVF9PUkdBTklaQVRJT046IDI3NixcbiAgICBGVF9ERVBBUlRNRU5UOiAyNzcsXG4gICAgRlRfUEFZX0dSQURFOiAyNzgsXG4gICAgRlRfUkFOSzogMjc5LFxuICAgIEZUX0JFTkVGSVRTX05VTUJFUjogMjgwLFxuICAgIEZUX1NQT05TT1JfU0VSVklDRTogMjgxLFxuICAgIEZUX1NQT05TT1JfU1RBVFVTOiAyODIsXG4gICAgRlRfU1BPTlNPUjogMjgzLFxuICAgIEZUX1JFTEFUSU9OU0hJUDogMjg0LFxuICAgIEZUX1VTQ0lTOiAyODUsXG4gICAgRlRfQ0FURUdPUlk6IDI4NixcbiAgICBGVF9DT05ESVRJT05TOiAyODcsXG4gICAgRlRfSURFTlRJRklFUjogMjg4LFxuICAgIEZUX0NPTkZJR1VSQVRJT046IDI4OSxcbiAgICBGVF9ESVNDUkVUSU9OQVJZX0RBVEE6IDI5MCxcbiAgICBGVF9MSU5FXzFfT1BUSU9OQUxfREFUQTogMjkxLFxuICAgIEZUX0xJTkVfMl9PUFRJT05BTF9EQVRBOiAyOTIsXG4gICAgRlRfTElORV8zX09QVElPTkFMX0RBVEE6IDI5MyxcbiAgICBGVF9FUVZfQ09ERTogMjk0LFxuICAgIEZUX0FMVF9DT0RFOiAyOTUsXG4gICAgRlRfQklOQVJZX0NPREU6IDI5NixcbiAgICBGVF9QU0VVRE9fQ09ERTogMjk3LFxuICAgIEZUX0ZFRTogMjk4LFxuICAgIEZUX1NUQU1QX05VTUJFUjogMjk5LFxuICAgIEZUX1NCSF9TRUNVUklUWU9QVElPTlM6IDMwMCxcbiAgICBGVF9TQkhfSU5URUdSSVRZT1BUSU9OUzogMzAxLFxuICAgIEZUX0RBVEVfT0ZfQ1JFQVRJT046IDMwMixcbiAgICBGVF9WQUxJRElUWV9QRVJJT0Q6IDMwMyxcbiAgICBGVF9QQVRST05fSEVBREVSX1ZFUlNJT046IDMwNCxcbiAgICBGVF9CREJfVFlQRTogMzA1LFxuICAgIEZUX0JJT01FVFJJQ19UWVBFOiAzMDYsXG4gICAgRlRfQklPTUVUUklDX1NVQlRZUEU6IDMwNyxcbiAgICBGVF9CSU9NRVRSSUNfUFJPRFVDVElEOiAzMDgsXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9PV05FUjogMzA5LFxuICAgIEZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTogMzEwLFxuICAgIEZUX1BIT05FOiAzMTEsXG4gICAgRlRfUFJPRkVTU0lPTjogMzEyLFxuICAgIEZUX1RJVExFOiAzMTMsXG4gICAgRlRfUEVSU09OQUxfU1VNTUFSWTogMzE0LFxuICAgIEZUX09USEVSX1ZBTElEX0lEOiAzMTUsXG4gICAgRlRfQ1VTVE9EWV9JTkZPOiAzMTYsXG4gICAgRlRfT1RIRVJfTkFNRTogMzE3LFxuICAgIEZUX09CU0VSVkFUSU9OUzogMzE4LFxuICAgIEZUX1RBWDogMzE5LFxuICAgIEZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOiAzMjAsXG4gICAgRlRfUEVSU09OQUxJWkFUSU9OX1NOOiAzMjEsXG4gICAgRlRfT1RIRVJQRVJTT05fTkFNRTogMzIyLFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX0RBVEVfT0ZfUkVDT1JEOiAzMjMsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfTkFNRTogMzI0LFxuICAgIEZUX1BFUlNPTlRPTk9USUZZX1BIT05FOiAzMjUsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzogMzI2LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX0lTU1VFUjogMzI3LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1NVQkpFQ1Q6IDMyOCxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJREZST006IDMyOSxcbiAgICBGVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOiAzMzAsXG4gICAgRlRfVlJDX0RBVEFPQkpFQ1RfRU5UUlk6IDMzMSxcbiAgICBGVF9UWVBFX0FQUFJPVkFMX05VTUJFUjogMzMyLFxuICAgIEZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjogMzMzLFxuICAgIEZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6IDMzNCxcbiAgICBGVF9EQVRBX0RJU0NSSU1JTkFUT1I6IDMzNSxcbiAgICBGVF9JU09fSVNTVUVSX0lEX05VTUJFUjogMzM2LFxuICAgIEZUX0dOSUJfTlVNQkVSOiAzNDAsXG4gICAgRlRfREVQVF9OVU1CRVI6IDM0MSxcbiAgICBGVF9URUxFWF9DT0RFOiAzNDIsXG4gICAgRlRfQUxMRVJHSUVTOiAzNDMsXG4gICAgRlRfU1BfQ09ERTogMzQ0LFxuICAgIEZUX0NPVVJUX0NPREU6IDM0NSxcbiAgICBGVF9DVFk6IDM0NixcbiAgICBGVF9TUE9OU09SX1NTTjogMzQ3LFxuICAgIEZUX0RPX0RfTlVNQkVSOiAzNDgsXG4gICAgRlRfTUNfTk9WSUNFX0RBVEU6IDM0OSxcbiAgICBGVF9EVUZfTlVNQkVSOiAzNTAsXG4gICAgRlRfQUdZOiAzNTEsXG4gICAgRlRfUE5SX0NPREU6IDM1MixcbiAgICBGVF9GUk9NX0FJUlBPUlRfQ09ERTogMzUzLFxuICAgIEZUX1RPX0FJUlBPUlRfQ09ERTogMzU0LFxuICAgIEZUX0ZMSUdIVF9OVU1CRVI6IDM1NSxcbiAgICBGVF9EQVRFX09GX0ZMSUdIVDogMzU2LFxuICAgIEZUX1NFQVRfTlVNQkVSOiAzNTcsXG4gICAgRlRfREFURV9PRl9JU1NVRV9CT0FSRElOR19QQVNTOiAzNTgsXG4gICAgRlRfQ0NXX1VOVElMOiAzNTksXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS1NVTTogMzYwLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM2MSxcbiAgICBGVF9ST09NX05VTUJFUjogMzYyLFxuICAgIEZUX1JFTElHSU9OOiAzNjMsXG4gICAgRlRfUkVNQUlOREVSX1RFUk06IDM2NCxcbiAgICBGVF9FTEVDVFJPTklDX1RJQ0tFVF9JTkRJQ0FUT1I6IDM2NSxcbiAgICBGVF9DT01QQVJUTUVOVF9DT0RFOiAzNjYsXG4gICAgRlRfQ0hFQ0tfSU5fU0VRVUVOQ0VfTlVNQkVSOiAzNjcsXG4gICAgRlRfQUlSTElORV9ERVNJR05BVE9SX09GX0JPQVJESU5HX1BBU1NfSVNTVUVSOiAzNjgsXG4gICAgRlRfQUlSTElORV9OVU1FUklDX0NPREU6IDM2OSxcbiAgICBGVF9USUNLRVRfTlVNQkVSOiAzNzAsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfQUlSTElORV9ERVNJR05BVE9SOiAzNzEsXG4gICAgRlRfRlJFUVVFTlRfRkxZRVJfTlVNQkVSOiAzNzIsXG4gICAgRlRfRlJFRV9CQUdHQUdFX0FMTE9XQU5DRTogMzczLFxuICAgIEZUX1BERl80MTdfQ09ERUM6IDM3NCxcbiAgICBGVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS1NVTTogMzc1LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLX0RJR0lUOiAzNzYsXG4gICAgRlRfVkVURVJBTjogMzc3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX0ZST006IDM3OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMV9UTzogMzc5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX05PVEVTOiAzODAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BX0ZST006IDM4MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfVE86IDM4MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfTk9URVM6IDM4MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfRlJPTTogMzg0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9UTzogMzg1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9OT1RFUzogMzg2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0ZST006IDM4NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9UTzogMzg4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX05PVEVTOiAzODksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DX0ZST006IDM5MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfVE86IDM5MSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfTk9URVM6IDM5MixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9GUk9NOiAzOTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfVE86IDM5NCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9OT1RFUzogMzk1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF9GUk9NOiAzOTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX1RPOiAzOTcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX05PVEVTOiAzOTgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9GUk9NOiAzOTksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9UTzogNDAwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQkVfTk9URVM6IDQwMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX0ZST006IDQwMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX1RPOiA0MDMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9OT1RFUzogNDA0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfRlJPTTogNDA1LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfVE86IDQwNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NFX05PVEVTOiA0MDcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9GUk9NOiA0MDgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9UTzogNDA5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0VfTk9URVM6IDQxMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX0ZST006IDQxMSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX1RPOiA0MTIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9ERV9OT1RFUzogNDEzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTV9GUk9NOiA0MTQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX1RPOiA0MTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX05PVEVTOiA0MTYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9MX0ZST006IDQxNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfVE86IDQxOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfTk9URVM6IDQxOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX1RfRlJPTTogNDIwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9UTzogNDIxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9OT1RFUzogNDIyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fRlJPTTogNDIzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fVE86IDQyNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FNX05PVEVTOiA0MjUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfRlJPTTogNDI2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8yX1RPOiA0MjcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfTk9URVM6IDQyOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9GUk9NOiA0MjksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CXzFfVE86IDQzMCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9OT1RFUzogNDMxLFxuICAgIEZUX1NVUk5BTUVfQVRfQklSVEg6IDQzMixcbiAgICBGVF9DSVZJTF9TVEFUVVM6IDQzMyxcbiAgICBGVF9OVU1CRVJfT0ZfU0VBVFM6IDQzNCxcbiAgICBGVF9OVU1CRVJfT0ZfU1RBTkRJTkdfUExBQ0VTOiA0MzUsXG4gICAgRlRfTUFYX1NQRUVEOiA0MzYsXG4gICAgRlRfRlVFTF9UWVBFOiA0MzcsXG4gICAgRlRfRUNfRU5WSVJPTk1FTlRBTF9UWVBFOiA0MzgsXG4gICAgRlRfUE9XRVJfV0VJR0hUX1JBVElPOiA0MzksXG4gICAgRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9CUkFLRUQ6IDQ0MCxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX1VOQlJBS0VEOiA0NDEsXG4gICAgRlRfVFJBTlNNSVNTSU9OX1RZUEU6IDQ0MixcbiAgICBGVF9UUkFJTEVSX0hJVENIOiA0NDMsXG4gICAgRlRfQUNDT01QQU5JRURfQlk6IDQ0NCxcbiAgICBGVF9QT0xJQ0VfRElTVFJJQ1Q6IDQ0NSxcbiAgICBGVF9GSVJTVF9JU1NVRV9EQVRFOiA0NDYsXG4gICAgRlRfUEFZTE9BRF9DQVBBQ0lUWTogNDQ3LFxuICAgIEZUX05VTUJFUl9PRl9BWEVMUzogNDQ4LFxuICAgIEZUX1BFUk1JU1NJQkxFX0FYTEVfTE9BRDogNDQ5LFxuICAgIEZUX1BSRUNJTkNUOiA0NTAsXG4gICAgRlRfSU5WSVRFRF9CWTogNDUxLFxuICAgIEZUX1BVUlBPU0VfT0ZfRU5UUlk6IDQ1MixcbiAgICBGVF9TS0lOX0NPTE9SOiA0NTMsXG4gICAgRlRfQ09NUExFWElPTjogNDU0LFxuICAgIEZUX0FJUlBPUlRfRlJPTTogNDU1LFxuICAgIEZUX0FJUlBPUlRfVE86IDQ1NixcbiAgICBGVF9BSVJMSU5FX05BTUU6IDQ1NyxcbiAgICBGVF9BSVJMSU5FX05BTUVfRlJFUVVFTlRfRkxZRVI6IDQ1OCxcbiAgICBGVF9MSUNFTlNFX05VTUJFUjogNDU5LFxuICAgIEZUX0lOX1RBTktTOiA0NjAsXG4gICAgRlRfRVhFUFRfSU5fVEFOS1M6IDQ2MSxcbiAgICBGVF9GQVNUX1RSQUNLOiA0NjIsXG4gICAgRlRfT1dORVI6IDQ2MyxcbiAgICBGVF9NUlpfU1RSSU5HU19JQ0FPX1JGSUQ6IDQ2NCxcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRTogNDY1LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFX0NIRUNLU1VNOiA0NjYsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6IDQ2NyxcbiAgICBGVF9DRU5UVVJZX0RBVEVfT0ZfQklSVEg6IDQ2OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQTNfRlJPTTogNDY5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19UTzogNDcwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19OT1RFUzogNDcxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9DMl9GUk9NOiA0NzIsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX1RPOiA0NzMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX05PVEVTOiA0NzQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006IDQ3NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfVE86IDQ3NixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6IDQ3NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfRDJfRlJPTTogNDc4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9UTzogNDc5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9OT1RFUzogNDgwLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfRlJPTTogNDgxLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfVE86IDQ4MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOiA0ODMsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTogNDg0LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9HX1RPOiA0ODUsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfTk9URVM6IDQ4NixcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9GUk9NOiA0ODcsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0pfVE86IDQ4OCxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9OT1RFUzogNDg5LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9MQ19GUk9NOiA0OTAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX1RPOiA0OTEsXG4gICAgRlRfRExDX0xBU1NDT0RFX0xDX05PVEVTOiA0OTIsXG4gICAgRlRfQkFOS0NBUkROVU1CRVI6IDQ5MyxcbiAgICBGVF9CQU5LQ0FSRFZBTElEVEhSVTogNDk0LFxuICAgIEZUX1RBWF9OVU1CRVI6IDQ5NSxcbiAgICBGVF9IRUFMVEhfTlVNQkVSOiA0OTYsXG4gICAgRlRfR1JBTkRGQVRIRVJOQU1FOiA0OTcsXG4gICAgRlRfU0VMRUNURUVfSU5ESUNBVE9SOiA0OTgsXG4gICAgRlRfTU9USEVSX1NVUk5BTUU6IDQ5OSxcbiAgICBGVF9NT1RIRVJfR0lWRU5OQU1FOiA1MDAsXG4gICAgRlRfRkFUSEVSX1NVUk5BTUU6IDUwMSxcbiAgICBGVF9GQVRIRVJfR0lWRU5OQU1FOiA1MDIsXG4gICAgRlRfTU9USEVSX0RBVEVPRkJJUlRIOiA1MDMsXG4gICAgRlRfRkFUSEVSX0RBVEVPRkJJUlRIOiA1MDQsXG4gICAgRlRfTU9USEVSX1BFUlNPTkFMTlVNQkVSOiA1MDUsXG4gICAgRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOiA1MDYsXG4gICAgRlRfTU9USEVSX1BMQUNFT0ZCSVJUSDogNTA3LFxuICAgIEZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6IDUwOCxcbiAgICBGVF9NT1RIRVJfQ09VTlRSWU9GQklSVEg6IDUwOSxcbiAgICBGVF9GQVRIRVJfQ09VTlRSWU9GQklSVEg6IDUxMCxcbiAgICBGVF9EQVRFX0ZJUlNUX1JFTkVXQUw6IDUxMSxcbiAgICBGVF9EQVRFX1NFQ09ORF9SRU5FV0FMOiA1MTIsXG4gICAgRlRfUExBQ0VfT0ZfRVhBTUlOQVRJT046IDUxMyxcbiAgICBGVF9BUFBMSUNBVElPTl9OVU1CRVI6IDUxNCxcbiAgICBGVF9WT1VDSEVSX05VTUJFUjogNTE1LFxuICAgIEZUX0FVVEhPUklaQVRJT05fTlVNQkVSOiA1MTYsXG4gICAgRlRfRkFDVUxUWTogNTE3LFxuICAgIEZUX0ZPUk1fT0ZfRURVQ0FUSU9OOiA1MTgsXG4gICAgRlRfRE5JX05VTUJFUjogNTE5LFxuICAgIEZUX1JFVElSRU1FTlRfTlVNQkVSOiA1MjAsXG4gICAgRlRfUFJPRkVTU0lPTkFMX0lEX05VTUJFUjogNTIxLFxuICAgIEZUX0FHRV9BVF9JU1NVRTogNTIyLFxuICAgIEZUX1lFQVJTX1NJTkNFX0lTU1VFOiA1MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQlRQX0ZST006IDUyNCxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfTk9URVM6IDUyNSxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfVE86IDUyNixcbiAgICBGVF9ETENMQVNTQ09ERV9DM19GUk9NOiA1MjcsXG4gICAgRlRfRExDTEFTU0NPREVfQzNfTk9URVM6IDUyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19UTzogNTI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfRlJPTTogNTMwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6IDUzMSxcbiAgICBGVF9ETENMQVNTQ09ERV9FX1RPOiA1MzIsXG4gICAgRlRfRExDTEFTU0NPREVfRl9GUk9NOiA1MzMsXG4gICAgRlRfRExDTEFTU0NPREVfRl9OT1RFUzogNTM0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZfVE86IDUzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9GUk9NOiA1MzYsXG4gICAgRlRfRExDTEFTU0NPREVfRkFfTk9URVM6IDUzNyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9UTzogNTM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOiA1MzksXG4gICAgRlRfRExDTEFTU0NPREVfRkExX05PVEVTOiA1NDAsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX1RPOiA1NDEsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfRlJPTTogNTQyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOiA1NDMsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfVE86IDU0NCxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9GUk9NOiA1NDUsXG4gICAgRlRfRExDTEFTU0NPREVfRzFfTk9URVM6IDU0NixcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9UTzogNTQ3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfRlJPTTogNTQ4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6IDU0OSxcbiAgICBGVF9ETENMQVNTQ09ERV9IX1RPOiA1NTAsXG4gICAgRlRfRExDTEFTU0NPREVfSV9GUk9NOiA1NTEsXG4gICAgRlRfRExDTEFTU0NPREVfSV9OT1RFUzogNTUyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0lfVE86IDU1MyxcbiAgICBGVF9ETENMQVNTQ09ERV9LX0ZST006IDU1NCxcbiAgICBGVF9ETENMQVNTQ09ERV9LX05PVEVTOiA1NTUsXG4gICAgRlRfRExDTEFTU0NPREVfS19UTzogNTU2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX0ZST006IDU1NyxcbiAgICBGVF9ETENMQVNTQ09ERV9MS19OT1RFUzogNTU4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX1RPOiA1NTksXG4gICAgRlRfRExDTEFTU0NPREVfTl9GUk9NOiA1NjAsXG4gICAgRlRfRExDTEFTU0NPREVfTl9OT1RFUzogNTYxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX05fVE86IDU2MixcbiAgICBGVF9ETENMQVNTQ09ERV9TX0ZST006IDU2MyxcbiAgICBGVF9ETENMQVNTQ09ERV9TX05PVEVTOiA1NjQsXG4gICAgRlRfRExDTEFTU0NPREVfU19UTzogNTY1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX0ZST006IDU2NixcbiAgICBGVF9ETENMQVNTQ09ERV9UQl9OT1RFUzogNTY3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX1RPOiA1NjgsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fRlJPTTogNTY5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOiA1NzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE1fVE86IDU3MSxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9GUk9NOiA1NzIsXG4gICAgRlRfRExDTEFTU0NPREVfVFJfTk9URVM6IDU3MyxcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9UTzogNTc0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX0ZST006IDU3NSxcbiAgICBGVF9ETENMQVNTQ09ERV9UVl9OT1RFUzogNTc2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX1RPOiA1NzcsXG4gICAgRlRfRExDTEFTU0NPREVfVl9GUk9NOiA1NzgsXG4gICAgRlRfRExDTEFTU0NPREVfVl9OT1RFUzogNTc5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ZfVE86IDU4MCxcbiAgICBGVF9ETENMQVNTQ09ERV9XX0ZST006IDU4MSxcbiAgICBGVF9ETENMQVNTQ09ERV9XX05PVEVTOiA1ODIsXG4gICAgRlRfRExDTEFTU0NPREVfV19UTzogNTgzLFxuICAgIEZUX1VSTDogNTg0LFxuICAgIEZUX0NBTElCRVI6IDU4NSxcbiAgICBGVF9NT0RFTDogNTg2LFxuICAgIEZUX01BS0U6IDU4NyxcbiAgICBGVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOiA1ODgsXG4gICAgRlRfU1VSTkFNRV9PRl9IVVNCQU5EX0FGVEVSX1JFR0lTVFJBVElPTjogNTg5LFxuICAgIEZUX1NVUk5BTUVfT0ZfV0lGRV9BRlRFUl9SRUdJU1RSQVRJT046IDU5MCxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6IDU5MSxcbiAgICBGVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6IDU5MixcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9GSVJTVF9QRVJTT046IDU5MyxcbiAgICBGVF9DSVRJWkVOU0hJUF9PRl9TRUNPTkRfUEVSU09OOiA1OTQsXG4gICAgRlRfQ1ZWOiA1OTUsXG4gICAgRlRfREFURV9PRl9JTlNVUkFOQ0VfRVhQSVJZOiA1OTYsXG4gICAgRlRfTU9SVEdBR0VfQlk6IDU5NyxcbiAgICBGVF9PTERfRE9DVU1FTlRfTlVNQkVSOiA1OTgsXG4gICAgRlRfT0xEX0RBVEVfT0ZfSVNTVUU6IDU5OSxcbiAgICBGVF9PTERfUExBQ0VfT0ZfSVNTVUU6IDYwMCxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9GUk9NOiA2MDEsXG4gICAgRlRfRExDTEFTU0NPREVfTFJfVE86IDYwMixcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9OT1RFUzogNjAzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX0ZST006IDYwNCxcbiAgICBGVF9ETENMQVNTQ09ERV9NUl9UTzogNjA1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOiA2MDYsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfRlJPTTogNjA3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hSX1RPOiA2MDgsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfTk9URVM6IDYwOSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19GUk9NOiA2MTAsXG4gICAgRlRfRExDTEFTU0NPREVfSENfVE86IDYxMSxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19OT1RFUzogNjEyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX0ZST006IDYxMyxcbiAgICBGVF9ETENMQVNTQ09ERV9NQ19UTzogNjE0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOiA2MTUsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfRlJPTTogNjE2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JFX1RPOiA2MTcsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfTk9URVM6IDYxOCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX0ZST006IDYxOSxcbiAgICBGVF9ETENMQVNTQ09ERV9SX1RPOiA2MjAsXG4gICAgRlRfRExDTEFTU0NPREVfUl9OT1RFUzogNjIxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX0ZST006IDYyMixcbiAgICBGVF9ETENMQVNTQ09ERV9DQV9UTzogNjIzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOiA2MjQsXG4gICAgRlRfQ0lUSVpFTlNISVBfU1RBVFVTOiA2MjUsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9GUk9NOiA2MjYsXG4gICAgRlRfTUlMSVRBUllfU0VSVklDRV9UTzogNjI3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX0ZST006IDYyOCxcbiAgICBGVF9ETENMQVNTQ09ERV9OVF9UTzogNjI5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX05PVEVTOiA2MzAsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fRlJPTTogNjMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1ROX1RPOiA2MzIsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fTk9URVM6IDYzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19GUk9NOiA2MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRDNfVE86IDYzNSxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19OT1RFUzogNjM2LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgY2xhc3MgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeWUgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIYWlyIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkcmVzc1wiXG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvbm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU29jaWFsIGluc3VyYW5jZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBSZXN0cmljdGlvbiBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAyMXN0IGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHlcIlxuICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBzdWJjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgZXhwaXJ5XCJcbiAgICAgICAgICAgIGNhc2UgNDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmFsIGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgNDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA1MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIDUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lc1wiXG4gICAgICAgICAgICBjYXNlIDUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWUgc3VmZml4XCJcbiAgICAgICAgICAgIGNhc2UgNTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSA1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDU1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgc2VyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9keSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggcGVybWlzc2libGUgd2VpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgNjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5sYWRlbiBtYXNzXCJcbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJlYVwiXG4gICAgICAgICAgICBjYXNlIDY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pdFwiXG4gICAgICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ1aWxkaW5nXCJcbiAgICAgICAgICAgIGNhc2UgNjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBhcnRtZW50XCJcbiAgICAgICAgICAgIGNhc2UgNjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgNzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVudCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbnQgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSA3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJlYSBvZiBiaXJ0aHBsYWNlXCJcbiAgICAgICAgICAgIGNhc2UgNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhdGUgY29kZSBvZiBiaXJ0aHBsYWNlXCJcbiAgICAgICAgICAgIGNhc2UgNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0eVwiXG4gICAgICAgICAgICBjYXNlIDc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSA4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmluYWwgY2hlY2sgZGlnaXRcIlxuICAgICAgICAgICAgY2FzZSA4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgSURcIlxuICAgICAgICAgICAgY2FzZSA4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3Igc3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSA4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBleHBpcnkgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgcmVzdHJpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIDk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBlbmRvcnNlbWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWUgdGltZVwiXG4gICAgICAgICAgICBjYXNlIDk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBkdXBsaWNhdGVzXCJcbiAgICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWVkaWNhbCBub3Rlcy9jb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vbi1yZXNpZGVudCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHZhbGlkIHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1cmF0aW9uIG9mIHN0YXlcIlxuICAgICAgICAgICAgY2FzZSAxMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF5XCJcbiAgICAgICAgICAgIGNhc2UgMTA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRoXCJcbiAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJcIlxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIGN1c3RvbWVyIGlkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tbWVyY2lhbCB2ZWhpY2xlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIERhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIFNvY2lhbCBJbnN1cmFuY2UgTnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBHaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSAxMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gc3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgMTE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIGNpdHlcIlxuICAgICAgICAgICAgY2FzZSAxMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0ganVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gcG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIGZvciB2YWxpZGF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMTIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludmVudG9yeSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxMjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmFjZS9ldGhuaWNpdHlcIlxuICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIHZlaGljbGUgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAxMjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIHJlc3RyaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxMjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgMTI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIElEIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgMTMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSAxMzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGggKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIDEzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgMTM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWVyaWMgaXNzdWluZyBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMTM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWVyaWMgbmF0aW9uYWxpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDEzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgcG93ZXJcIlxuICAgICAgICAgICAgY2FzZSAxMzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHZvbHVtZVwiXG4gICAgICAgICAgICBjYXNlIDEzODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGFzc2lzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDEzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBtb2RlbFwiXG4gICAgICAgICAgICBjYXNlIDE0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgMTQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbnRyb2wgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhcmVudHNcXCcgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSAxNDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Vjb25kIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBpZGVudGlmaWNhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIDE0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgVklOXCJcbiAgICAgICAgICAgIGNhc2UgMTUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSAxNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIDE1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgMTUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSAxNTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIDE1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgMTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciByZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciByZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgSVRTIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAxNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FyZCBhY2Nlc3MgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hcml0YWwgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgMTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBhbnkgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDE2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGVjaWFsIG5vdGVzXCJcbiAgICAgICAgICAgIGNhc2UgMTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb3VzZVxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIDE2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFja2luZyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9va2xldCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbGRyZW5cIlxuICAgICAgICAgICAgY2FzZSAxNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29weVwiXG4gICAgICAgICAgICBjYXNlIDE2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJpYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvc3NpZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBGdWxsIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAxNzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVycml0b3JpYWwgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSAxNzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzIHdpdGggY29ycmVjdCBjaGVja3N1bXNcIlxuICAgICAgICAgICAgY2FzZSAxNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ0RMIFJlc3RyaWN0aW9uIENvZGVcIlxuICAgICAgICAgICAgY2FzZSAxNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAxOHRoIGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgMTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlY29yZCBjcmVhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgMTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZHVwbGljYXRlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgMTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDE3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVzdGluYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAxODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmxvb2QgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSAxODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VxdWVuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDE4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIG1ha2VcIlxuICAgICAgICAgICAgY2FzZSAxODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNhY3Rpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFnZVwiXG4gICAgICAgICAgICBjYXNlIDE4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGb2xpbyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm90ZXIgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgMTg4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk11bmljaXBhbGl0eVwiXG4gICAgICAgICAgICBjYXNlIDE4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMb2NhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDE5MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWN0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMTkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9DUiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmVkZXJhbCBlbGVjdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSAxOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3Igb3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIDE5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3Igb3B0aW9uYWwgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIDE5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDE5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAxOTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMTk5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyXCJcbiAgICAgICAgICAgIGNhc2UgMjAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR5cGUvbnVtYmVyIG9mIHRoZSBwcmV2aW91cyBkb2N1bWVudFwiXG4gICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaWVsZCBmcm9tIE1SWlwiXG4gICAgICAgICAgICBjYXNlIDIyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXJyZW50IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAyNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhdHVzIEV4cGlyeSBEYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmtub3RlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDI1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDU0MgQ29kZVwiXG4gICAgICAgICAgICBjYXNlIDI1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9ueW1cIlxuICAgICAgICAgICAgY2FzZSAyNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNhZGVtaWMgdGl0bGVcIlxuICAgICAgICAgICAgY2FzZSAyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIDI1NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJaSVAgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDFcIlxuICAgICAgICAgICAgY2FzZSAyNTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCJcbiAgICAgICAgICAgIGNhc2UgMjYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIEJpcnRoOiBTdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSAyNjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IENpdHlcIlxuICAgICAgICAgICAgY2FzZSAyNjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IFN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIEJpcnRoOiBDb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgMjY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIEJpcnRoOiBQb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgQ2xhc3NcIlxuICAgICAgICAgICAgY2FzZSAyNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAxOXRoIGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgMjY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodCAocG91bmQpXCJcbiAgICAgICAgICAgIGNhc2UgMjY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluZGljYXRvciBvZiBkb2N1bWVudCBsaW1pdGVkIGR1cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZG9yc2VtZW50IGV4cGlyYXRpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXZpc2lvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgMjcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBsaWFuY2UgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDI3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcnVuY2F0ZWQgc3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgMjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDI3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWRkbGUgbmFtZSB0cnVuY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4YW0gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDI3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcmdhbml6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSAyNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVwYXJ0bWVudFwiXG4gICAgICAgICAgICBjYXNlIDI3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXkgZ3JhZGVcIlxuICAgICAgICAgICAgY2FzZSAyNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmFua1wiXG4gICAgICAgICAgICBjYXNlIDI4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZW5lZml0cyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAyODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBzZXJ2aWNlXCJcbiAgICAgICAgICAgIGNhc2UgMjgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgMjgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3JcIlxuICAgICAgICAgICAgY2FzZSAyODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVsYXRpb25zaGlwXCJcbiAgICAgICAgICAgIGNhc2UgMjg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVTQ0lTXCJcbiAgICAgICAgICAgIGNhc2UgMjg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgMjg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbmRpdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSAyODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIDI4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25maWd1cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMjkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpc2NyZXRpb25hcnkgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIDI5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgMjkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGEgZnJvbSBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSAyOTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIDI5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFUVYgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBTFQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW5hcnkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDI5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9jb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMjk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZVwiXG4gICAgICAgICAgICBjYXNlIDI5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGFtcCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIHNlY3VyaXR5IG9wdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSAzMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIGludGVncml0eSBvcHRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMzAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNyZWF0aW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSAzMDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmFsaWRpdHkgcGVyaW9kXCJcbiAgICAgICAgICAgIGNhc2UgMzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhdHJvbiBoZWFkZXIgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIDMwNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCREIgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDMwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDMwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgc3VidHlwZVwiXG4gICAgICAgICAgICBjYXNlIDMwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgcHJvZHVjdCBJRFwiXG4gICAgICAgICAgICBjYXNlIDMwOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IG93bmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIDMxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQaG9uZVwiXG4gICAgICAgICAgICBjYXNlIDMxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9mZXNzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgMzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgMzE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIGRhdGEgc3VtbWFyeVwiXG4gICAgICAgICAgICBjYXNlIDMxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciB2YWxpZCBJRHNcIlxuICAgICAgICAgICAgY2FzZSAzMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VzdG9keSBpbmZvXCJcbiAgICAgICAgICAgIGNhc2UgMzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAzMTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JzZXJ2YXRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgMzE5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheFwiXG4gICAgICAgICAgICBjYXNlIDMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb25hbGl6YXRpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIDMyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJpYWwgbnVtYmVyIG9mIHBlcnNvbmFsaXphdGlvblwiXG4gICAgICAgICAgICBjYXNlIDMyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciBwZXJzb24sIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSAzMjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogRGF0ZSBvZiByZWNvcmRcIlxuICAgICAgICAgICAgY2FzZSAzMjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZ5IHBlcnNvbjogTmFtZVwiXG4gICAgICAgICAgICBjYXNlIDMyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBQaG9uZVwiXG4gICAgICAgICAgICBjYXNlIDMyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgMzI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIDMyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSBzdWJqZWN0XCJcbiAgICAgICAgICAgIGNhc2UgMzI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzMzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzMzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBkYXRhIGZyb20gdGhlIERHMSBkYXRhIGdyb3VwXCJcbiAgICAgICAgICAgIGNhc2UgMzMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR5cGUgb2YgYXBwcm92YWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkbWluaXN0cmF0aXZlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDMzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBkaXNjcmltaW5hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMzM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGEgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIDMzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJRCBudW1iZXIgb2YgSVNPIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIDM0MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHTklCIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM0MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXBhcnRtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZWxlZ3JhcGggY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGxlcmdpZXNcIlxuICAgICAgICAgICAgY2FzZSAzNDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdXJ0IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnR5XCJcbiAgICAgICAgICAgIGNhc2UgMzQ3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3IgU1NOXCJcbiAgICAgICAgICAgIGNhc2UgMzQ4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgTW90b3JjeWNsZSBOb3ZpY2Ugc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgMzUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRVRiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUdZXCJcbiAgICAgICAgICAgIGNhc2UgMzUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBOUiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgMzUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvZGUgb2YgdGhlIGFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgMzU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvZGUgb2YgdGhlIGFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIDM1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGbGlnaHQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmxpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgMzU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlYXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYm9hcmRpbmcgcGFzcyBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDM1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDQ1cgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSAzNjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDM2MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgMzYyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJvb20gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlbGlnaW9uXCJcbiAgICAgICAgICAgIGNhc2UgMzY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRocyB0byBleHBpcmVcIlxuICAgICAgICAgICAgY2FzZSAzNjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRWxlY3Ryb25pYyB0aWNrZXQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgMzY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBhcnRtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSAzNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2staW4gc2VxdWVuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgZGVzaWduYXRvciBvZiBib2FyZGluZyBwYXNzIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIDM2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIG51bWVyaWMgY29kZVwiXG4gICAgICAgICAgICBjYXNlIDM3MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaWNrZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIGFpcmxpbmUgZGVzaWduYXRvclwiXG4gICAgICAgICAgICBjYXNlIDM3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVxdWVudCBmbHllciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSAzNzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlZSBiYWdnYWdlIGFsbG93YW5jZVwiXG4gICAgICAgICAgICBjYXNlIDM3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQREY0MTcgY29kZWNcIlxuICAgICAgICAgICAgY2FzZSAzNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGlkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgMzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDM3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZXRlcmFuXCJcbiAgICAgICAgICAgIGNhc2UgMzc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzNzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzODU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDM4NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzg3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSAzODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzODk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSAzOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDM5MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgMzk0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgMzk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDM5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgMzk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSAzOTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0MjU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA0MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l2aWwgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgNDM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBzZWF0c1wiXG4gICAgICAgICAgICBjYXNlIDQzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc3RhbmRpbmcgcGxhY2VzXCJcbiAgICAgICAgICAgIGNhc2UgNDM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBzcGVlZFwiXG4gICAgICAgICAgICBjYXNlIDQzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGdWVsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSA0Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBlbnZpcm9ubWVudGFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSA0Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG93ZXItdG8td2VpZ2h0IHJhdGlvXCJcbiAgICAgICAgICAgIGNhc2UgNDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBtYXNzIG9mIHRyYWlsZXIgKGJyYWtlZClcIlxuICAgICAgICAgICAgY2FzZSA0NDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IG1hc3Mgb2YgdHJhaWxlciAodW5icmFrZWQpXCJcbiAgICAgICAgICAgIGNhc2UgNDQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zbWlzc2lvbiB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgNDQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYWlsZXIgaGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSA0NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNjb21wYW5pZWQgYnlcIlxuICAgICAgICAgICAgY2FzZSA0NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saWNlIGRpc3RyaWN0XCJcbiAgICAgICAgICAgIGNhc2UgNDQ2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSA0NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bG9hZCBjYXBhY2l0eVwiXG4gICAgICAgICAgICBjYXNlIDQ0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgYXhsZXNcIlxuICAgICAgICAgICAgY2FzZSA0NDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWlzc2libGUgYXhsZSBsb2FkXCJcbiAgICAgICAgICAgIGNhc2UgNDUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByZWNpbmN0XCJcbiAgICAgICAgICAgIGNhc2UgNDUxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludml0ZWQgYnlcIlxuICAgICAgICAgICAgY2FzZSA0NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHVycG9zZSBvZiBlbnRyeVwiXG4gICAgICAgICAgICBjYXNlIDQ1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTa2luIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgNDU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXhpb25cIlxuICAgICAgICAgICAgY2FzZSA0NTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlycG9ydCBvZiBkZXBhcnR1cmVcIlxuICAgICAgICAgICAgY2FzZSA0NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlycG9ydCBvZiBhcnJpdmFsXCJcbiAgICAgICAgICAgIGNhc2UgNDU3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDQ1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIGxveWFsdHkgcHJvZ3JhbSBmb3IgZnJlcXVlbnQgZmx5ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgNDU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNDYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgNDYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4Y2VwdCBpbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIDQ2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXN0IFRyYWNrIHNlcnZpY2VcIlxuICAgICAgICAgICAgY2FzZSA0NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3duZXJcIlxuICAgICAgICAgICAgY2FzZSA0NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzIGZyb20gSUNBTyBSRklEXCJcbiAgICAgICAgICAgIGNhc2UgNDY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIDQ2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbnVtYmVyIG9mIGNhcmQgaXNzdWFuY2VzXCJcbiAgICAgICAgICAgIGNhc2UgNDY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBudW1iZXIgb2YgY2FyZCBpc3N1YW5jZXNcIlxuICAgICAgICAgICAgY2FzZSA0Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2VudHVyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDQ2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDQ3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNDgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNDg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0ODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDQ4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0ODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDQ4OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNDkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExDIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA0OTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA0OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA0OTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rIGNhcmQgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSA0OTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF4IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFsdGggaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDQ5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFuZGZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDQ5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWxlY3RlZSBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSA0OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZ2l2ZW4gbmFtZVwiXG4gICAgICAgICAgICBjYXNlIDUwMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSA1MDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBnaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgNTAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgZGF0ZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSA1MDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIHBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgNTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIDUxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGNvdW50cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSA1MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBmaXJzdCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgNTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2Ygc2Vjb25kIHJlbmV3YWxcIlxuICAgICAgICAgICAgY2FzZSA1MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgZXhhbWluYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwbGljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdWNoZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF1dGhvcml6YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhY3VsdHlcIlxuICAgICAgICAgICAgY2FzZSA1MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9ybSBvZiBlZHVjYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRE5JIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXRpcmVtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDUyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcm9mZXNzaW9uYWwgSUQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgNTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFnZSBhdCBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDUyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJZZWFycyBzaW5jZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDUyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDUyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQlRQIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTI3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDUzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1Mzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU0MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEggY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBJIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU1ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMSyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU2MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU2OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNTcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA1NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1NzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDU3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA1Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDU4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDU4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNTgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA1ODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMXCJcbiAgICAgICAgICAgIGNhc2UgNTg1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhbGliZXJcIlxuICAgICAgICAgICAgY2FzZSA1ODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9kZWxcIlxuICAgICAgICAgICAgY2FzZSA1ODc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFrZVwiXG4gICAgICAgICAgICBjYXNlIDU4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgY3lsaW5kZXJzXCJcbiAgICAgICAgICAgIGNhc2UgNTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgb2YgaHVzYmFuZCBhZnRlciByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSA1OTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiB3aWZlIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIDU5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoIG9mIHdpZmVcIlxuICAgICAgICAgICAgY2FzZSA1OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiBodXNiYW5kXCJcbiAgICAgICAgICAgIGNhc2UgNTkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBmaXJzdCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSA1OTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIHNlY29uZCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSA1OTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1ZWL0NWQ1wiXG4gICAgICAgICAgICBjYXNlIDU5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHBpcnkgZGF0ZSBvZiBpbnN1cmFuY2VcIlxuICAgICAgICAgICAgY2FzZSA1OTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9ydGdhZ2UgYnlcIlxuICAgICAgICAgICAgY2FzZSA1OTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2xkIGRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIDU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIDYwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgcGxhY2Ugb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSA2MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYwMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjA2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIDYyMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjIzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIDYyNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBzZXJ2aWNlIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgc2VydmljZSB0b1wiXG4gICAgICAgICAgICBjYXNlIDYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOVCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgNjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgNjMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFROIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSA2MzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSA2MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSA2MzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIDYzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIDYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMyBjb2Rlc1wiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb250U3R5bGUgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJPTEQ6IDEsXG4gICAgSVRBTElDOiAyLFxuICAgIEJPTERfSVRBTElDOiAzLFxufVxuXG5leHBvcnQgY29uc3QgRnJhbWVTaGFwZVR5cGUgPSB7XG4gICAgTElORTogMCxcbiAgICBDT1JORVI6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBMQ0lEID0ge1xuICAgIExBVElOOiAwLFxuICAgIEFGUklLQUFOUzogMTA3OCxcbiAgICBBTEJBTklBTjogMTA1MixcbiAgICBBUkFCSUNfQUxHRVJJQTogNTEyMSxcbiAgICBBUkFCSUNfQkFIUkFJTjogMTUzNjEsXG4gICAgQVJBQklDX0VHWVBUOiAzMDczLFxuICAgIEFSQUJJQ19JUkFROiAyMDQ5LFxuICAgIEFSQUJJQ19KT1JEQU46IDExMjY1LFxuICAgIEFSQUJJQ19LVVdBSVQ6IDEzMzEzLFxuICAgIEFSQUJJQ19MRUJBTk9OOiAxMjI4OSxcbiAgICBBUkFCSUNfTElCWUE6IDQwOTcsXG4gICAgQVJBQklDX01PUk9DQ086IDYxNDUsXG4gICAgQVJBQklDX09NQU46IDgxOTMsXG4gICAgQVJBQklDX1FBVEFSOiAxNjM4NSxcbiAgICBBUkFCSUNfU0FVRElfQVJBQklBOiAxMDI1LFxuICAgIEFSQUJJQ19TWVJJQTogMTAyNDEsXG4gICAgQVJBQklDX1RVTklTSUE6IDcxNjksXG4gICAgQVJBQklDX1VBRTogMTQzMzcsXG4gICAgQVJBQklDX1lFTUVOOiA5MjE3LFxuICAgIEFSQUJJQ19BUk1FTklBTjogMTA2NyxcbiAgICBBWkVSSV9DWVJJTElDOiAyMDkyLFxuICAgIEFaRVJJX0xBVElOOiAxMDY4LFxuICAgIEJBU1FVRTogMTA2OSxcbiAgICBCRUxBUlVTSUFOOiAxMDU5LFxuICAgIEJVTEdBUklBTjogMTAyNixcbiAgICBDQVRBTEFOOiAxMDI3LFxuICAgIENISU5FU0VfSE9OR0tPTkdfU0FSOiAzMDc2LFxuICAgIENISU5FU0VfTUFDQU9fU0FSOiA1MTI0LFxuICAgIENISU5FU0U6IDIwNTIsXG4gICAgQ0hJTkVTRV9TSU5HQVBPUkU6IDQxMDAsXG4gICAgQ0hJTkVTRV9UQUlXQU46IDEwMjgsXG4gICAgQ1JPQVRJQU46IDEwNTAsXG4gICAgQ1pFQ0g6IDEwMjksXG4gICAgREFOSVNIOiAxMDMwLFxuICAgIERJVkVISTogMTEyNSxcbiAgICBEVVRDSF9CRUxHSVVNOiAyMDY3LFxuICAgIERVVENIX05FVEhFUkxBTkRTOiAxMDQzLFxuICAgIEVOR0xJU0hfQVVTVFJBTElBOiAzMDgxLFxuICAgIEVOR0xJU0hfQkVMSVpFOiAxMDI0OSxcbiAgICBFTkdMSVNIX0NBTkFEQTogNDEwNSxcbiAgICBFTkdMSVNIX0NBUlJJQkVBTjogOTIyNSxcbiAgICBFTkdMSVNIX0lSRUxBTkQ6IDYxNTMsXG4gICAgRU5HTElTSF9KQU1BSUNBOiA4MjAxLFxuICAgIEVOR0xJU0hfTkVXX1pFQUxBTkQ6IDUxMjksXG4gICAgRU5HTElTSF9QSElMSVBQSU5FUzogMTMzMjEsXG4gICAgRU5HTElTSF9TT1VUSF9BRlJJQ0E6IDcxNzcsXG4gICAgRU5HTElTSF9UUklOSURBRDogMTEyNzMsXG4gICAgRU5HTElTSF9VSzogMjA1NyxcbiAgICBFTkdMSVNIX1VTOiAxMDMzLFxuICAgIEVOR0xJU0hfWklNQkFCV0U6IDEyMjk3LFxuICAgIEVTVE9OSUFOOiAxMDYxLFxuICAgIEZBRVJPRVNFOiAxMDgwLFxuICAgIEZBUlNJOiAxMDY1LFxuICAgIEZJTk5JU0g6IDEwMzUsXG4gICAgRlJFTkNIX0JFTEdJVU06IDIwNjAsXG4gICAgRlJFTkNIX0NBTkFEQTogMzA4NCxcbiAgICBGUkVOQ0hfRlJBTkNFOiAxMDM2LFxuICAgIEZSRU5DSF9MVVhFTUJPVVJHOiA1MTMyLFxuICAgIEZSRU5DSF9NT05BQ086IDYxNTYsXG4gICAgRlJFTkNIX1NXSVRaRVJMQU5EOiA0MTA4LFxuICAgIEZZUk9fTUFDRURPTklBTjogMTA3MSxcbiAgICBHQUxJQ0lBTjogMTExMCxcbiAgICBHRU9SR0lBTjogMTA3OSxcbiAgICBHRVJNQU5fQVVTVFJJQTogMzA3OSxcbiAgICBHRVJNQU5fR0VSTUFOWTogMTAzMSxcbiAgICBHRVJNQU5fTElFQ0hURU5TVEVJTjogNTEyNyxcbiAgICBHRVJNQU5fTFVYRU1CT1VSRzogNDEwMyxcbiAgICBHRVJNQU5fU1dJVFpFUkxBTkQ6IDIwNTUsXG4gICAgR1JFRUs6IDEwMzIsXG4gICAgR1VKQVJBVEk6IDEwOTUsXG4gICAgSEVCUkVXOiAxMDM3LFxuICAgIEhJTkRJX0lORElBOiAxMDgxLFxuICAgIEhVTkdBUklBTjogMTAzOCxcbiAgICBJQ0VMQU5ESUM6IDEwMzksXG4gICAgSU5ET05FU0lBTjogMTA1NyxcbiAgICBJVEFMSUFOX0lUQUxZOiAxMDQwLFxuICAgIElUQUxJQU5fU1dJVFpFUkxBTkQ6IDIwNjQsXG4gICAgSkFQQU5FU0U6IDEwNDEsXG4gICAgS0FOTkFEQTogMTA5OSxcbiAgICBLQVpBS0g6IDEwODcsXG4gICAgS09OS0FOSTogMTExMSxcbiAgICBLT1JFQU46IDEwNDIsXG4gICAgS1lSR1laX0NZUklMSUNLOiAxMDg4LFxuICAgIExBVFZJQU46IDEwNjIsXG4gICAgTElUSFVBTklBTjogMTA2MyxcbiAgICBNQUxBWV9NQUxBWVNJQTogMTA4NixcbiAgICBNQUxBWV9CUlVORUlfREFSVVNTQUxBTTogMjExMCxcbiAgICBNQVJBVEhJOiAxMTAyLFxuICAgIE1PTkdPTElBTl9DWVJJTElDOiAxMTA0LFxuICAgIE5PUldFR0lBTl9CT0tNQUw6IDEwNDQsXG4gICAgTk9SV0VHSUFOX05ZT1JTSzogMjA2OCxcbiAgICBQT0xJU0g6IDEwNDUsXG4gICAgUE9SVFVHVUVTRV9CUkFaSUw6IDEwNDYsXG4gICAgUE9SVFVHVUVTRV9QT1JUVUdBTDogMjA3MCxcbiAgICBQVU5KQUJJOiAxMDk0LFxuICAgIFJIQUVUT19ST01BTklDOiAxMDQ3LFxuICAgIFJPTUFOSUFOOiAxMDQ4LFxuICAgIFJVU1NJQU46IDEwNDksXG4gICAgU0FOU0tSSVQ6IDExMDMsXG4gICAgU0VSQklBTl9DWVJJTElDOiAzMDk4LFxuICAgIFNFUkJJQU5fTEFUSU46IDIwNzQsXG4gICAgU0xPVkFLOiAxMDUxLFxuICAgIFNMT1ZFTklBTjogMTA2MCxcbiAgICBTUEFOSVNIX0FSR0VOVElOQTogMTEyNzQsXG4gICAgU1BBTklTSF9CT0xJVklBOiAxNjM5NCxcbiAgICBTUEFOSVNIX0NISUxFOiAxMzMyMixcbiAgICBTUEFOSUNIX0NPTE9NQklBOiA5MjI2LFxuICAgIFNQQU5JU0hfQ09TVEFfUklDQTogNTEzMCxcbiAgICBTUEFOSVNIX0RPTUlOSUNBTl9SRVBVQkxJQzogNzE3OCxcbiAgICBTUEFOSVNIX0VDVUFET1I6IDEyMjk4LFxuICAgIFNQQU5JU0hfRUxfU0FMVkFET1I6IDE3NDE4LFxuICAgIFNQQU5JU0hfR1VBVEVNQUxBOiA0MTA2LFxuICAgIFNQQU5JU0hfSE9ORFVSQVM6IDE4NDQyLFxuICAgIFNQQU5JU0hfTUVYSUNPOiAyMDU4LFxuICAgIFNQQU5JU0hfTklDQVJBR1VBOiAxOTQ2NixcbiAgICBTUEFOSVNIX1BBTkFNQTogNjE1NCxcbiAgICBTUEFOSVNIX1BBUkFHVUFZOiAxNTM3MCxcbiAgICBTUEFOSVNIX1BFUlU6IDEwMjUwLFxuICAgIFNQQU5JU0hfUFVFUlRPX1JJQ086IDIwNDkwLFxuICAgIFNQQU5JU0hfVFJBRElUSU9OQUxfU09SVDogMTAzNCxcbiAgICBTUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDogMzA4MixcbiAgICBTUEFOSVNIX1VSVUdVQVk6IDE0MzQ2LFxuICAgIFNQQU5JU0hfVkVORVpVRUxBOiA4MjAyLFxuICAgIFNXQUhJTEk6IDEwODksXG4gICAgU1dFRElTSDogMTA1MyxcbiAgICBTV0VESVNIX0ZJTkxBTkQ6IDIwNzcsXG4gICAgU1lSSUFDOiAxMTE0LFxuICAgIFRBTUlMOiAxMDk3LFxuICAgIFRBVEFSOiAxMDkyLFxuICAgIFRFTFVHVTogMTA5OCxcbiAgICBUSEFJX1RIQUlMQU5EOiAxMDU0LFxuICAgIFRVUktJU0g6IDEwNTUsXG4gICAgVEFKSUtfQ1lSSUxMSUM6IDEwNjQsXG4gICAgVFVSS01FTjogMTA5MCxcbiAgICBVS1JBSU5JQU46IDEwNTgsXG4gICAgVVJEVTogMTA1NixcbiAgICBVWkJFS19DWVJJTElDOiAyMTE1LFxuICAgIFVaQkVLX0xBVElOOiAxMDkxLFxuICAgIFZJRVROQU1FU0U6IDEwNjYsXG4gICAgQ1RDX1NJTVBMSUZJRUQ6IDUwMDAxLFxuICAgIENUQ19UUkFESVRJT05BTDogNTAwMDIsXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYXRpblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUZSSUtBQU5TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFmcmlrYWFuc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQUxCQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxiYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19BTEdFUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQWxnZXJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19CQUhSQUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQmFocmFpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19FR1lQVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEVneXB0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0lSQVE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChJcmFxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0pPUkRBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEpvcmRhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19LVVdBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChLdXdhaXQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTEVCQU5PTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExlYmFub24pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTElCWUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChMaWJ5YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19NT1JPQ0NPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTW9yb2NjbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19PTUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoT21hbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19RQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFFhdGFyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NBVURJX0FSQUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFNhdWRpIEFyYWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19TWVJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFN5cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1RVTklTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChUdW5pc2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1VBRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFUuQS5FLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19ZRU1FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFllbWVuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FSTUVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFybWVuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BWkVSSV9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF6ZXJpIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFaRVJJX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF6ZXJpIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJBU1FVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYXNxdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJFTEFSVVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVsYXJ1c2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQlVMR0FSSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ1bGdhcmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0FUQUxBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRhbGFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX0hPTkdLT05HX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChIb25nS29uZyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX01BQ0FPX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChNYWNhbyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfU0lOR0FQT1JFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFNpbmdhcG9yZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfVEFJV0FOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFRhaXdhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNST0FUSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNyb2F0aWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DWkVDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDemVjaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREFOSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhbmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRElWRUhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpdmVoaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXRjaCAoQmVsZ2l1bSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRVVENIX05FVEhFUkxBTkRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChOZXRoZXJsYW5kcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQVVTVFJBTElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEF1c3RyYWxpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQkVMSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEJlbGl6ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FSUklCRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhcmliYmVhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfSVJFTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChJcmVsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9KQU1BSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEphbWFpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX05FV19aRUFMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKE5ldyBaZWFsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9QSElMSVBQSU5FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChQaGlsaXBwaW5lcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfU09VVEhfQUZSSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFNvdXRoIEFmcmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVFJJTklEQUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVHJpbmlkYWQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9VUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9aSU1CQUJXRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChaaW1iYWJ3ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVTVE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVzdG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQUVST0VTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYWVyb2VzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRkFSU0k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFyc2lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZJTk5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlubmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0JFTEdJVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0NBTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9GUkFOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChGcmFuY2UpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTFVYRU1CT1VSRzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEx1eGVtYm91cmcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTU9OQUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTW9uYWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HQUxJQ0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHYWxpY2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VPUkdJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VvcmdpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9BVVNUUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoQXVzdHJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9HRVJNQU5ZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoR2VybWFueSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MSUVDSFRFTlNURUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTGllY2h0ZW5zdGVpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1JFRUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3JlZWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdVSkFSQVRJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkd1amFyYXRpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IRUJSRVc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVicmV3XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ISU5ESV9JTkRJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIaW5kaSAoSW5kaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IVU5HQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSHVuZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JQ0VMQU5ESUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWNlbGFuZGljXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JTkRPTkVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluZG9uZXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fSVRBTFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoSXRhbHkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JVEFMSUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkl0YWxpYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSkFQQU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSmFwYW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBTk5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2FubmFkYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FaQUtIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkthemFraFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09OS0FOSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLb25rYW5pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LT1JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29yZWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LWVJHWVpfQ1lSSUxJQ0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS3lyZ3l6IChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVFZJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGF0dmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTElUSFVBTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMaXRodWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GWVJPX01BQ0VET05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRllSTyBNYWNlZG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9NQUxBWVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoTWFsYXlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQUxBWV9CUlVORUlfREFSVVNTQUxBTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWxheSAoQnJ1bmVpIERhcnVzc2FsYW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NQVJBVEhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hcmF0aGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1PTkdPTElBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbmdvbGlhbiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OT1JXRUdJQU5fQk9LTUFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vcndlZ2lhbiAoQm9rbWFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX05ZT1JTSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKE55bm9yc2spXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT0xJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX0JSQVpJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChCcmF6aWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QT1JUVUdVRVNFX1BPUlRVR0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnR1Z3Vlc2UgKFBvcnR1Z2FsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUFVOSkFCSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdW5qYWJpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SSEFFVE9fUk9NQU5JQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSaGFldG8tUm9tYW5pY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUk9NQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUm9tYW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJVU1NJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUnVzc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0FOU0tSSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Fuc2tyaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNFUkJJQU5fQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJiaWFuIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNFUkJJQU5fTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyYmlhbiAoTGF0aW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TTE9WQUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2xvdmFrXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TTE9WRU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2xvdmVuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0FSR0VOVElOQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChBcmdlbnRpbmEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0JPTElWSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQm9saXZpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQ0hJTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ2hpbGUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSUNIX0NPTE9NQklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENvbG9tYmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9DT1NUQV9SSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKENvc3RhIFJpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0RPTUlOSUNBTl9SRVBVQkxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChEb21pbmljYW4gUmVwdWJsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0VDVUFET1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRWN1YWRvcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRUxfU0FMVkFET1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoRWwgU2FsdmFkb3IpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0dVQVRFTUFMQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChHdWF0ZW1hbGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0hPTkRVUkFTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEhvbmR1cmFzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9NRVhJQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoTWV4aWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9OSUNBUkFHVUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoTmljYXJhZ3VhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QQU5BTUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoUGFuYW1hKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QQVJBR1VBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQYXJhZ3VheSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfUEVSVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQZXJ1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QVUVSVE9fUklDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQdWVydG8gUmljbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVFJBRElUSU9OQUxfU09SVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChUcmFkaXRpb25hbCBTb3J0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9JTlRFUk5BVElPTkFMX1NPUlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoSW50ZXJuYXRpb25hbCBTb3J0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9VUlVHVUFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFVydWd1YXkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1ZFTkVaVUVMQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChWZW5lenVlbGEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0FISUxJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3YWhpbGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXRURJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dFRElTSF9GSU5MQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN3ZWRpc2ggKEZpbmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TWVJJQUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3lyaWFjXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQU1JTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYW1pbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFUQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGF0YXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRFTFVHVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZWx1Z3VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRIQUlfVEhBSUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhhaSAoVGhhaWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UVVJLSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR1cmtpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBSklLX0NZUklMTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhamlrIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRVUktNRU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHVya21lblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVUtSQUlOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVrcmFpbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVJEVTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVcmR1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VWkJFS19DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlV6YmVrIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVaQkVLX0xBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlV6YmVrIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlZJRVROQU1FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlldG5hbWVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1RDX1NJTVBMSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1RDIFNpbXBsaWZpZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNUQ19UUkFESVRJT05BTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVEMgVHJhZGl0aW9uYWxcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUEtEUmVzb3VyY2VUeXBlID0ge1xuICAgIENFUlRJRklDQVRFX1BBOiAwLFxuICAgIENFUlRJRklDQVRFX1RBOiAxLFxuICAgIExESUY6IDIsXG4gICAgQ1JMOiAzLFxuICAgIE1MOiA0LFxuICAgIERFRkw6IDUsXG4gICAgREVWTDogNixcbiAgICBCTDogNyxcblxyXG4gICAgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwicGFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfVEFcclxuICAgICAgICAgICAgY2FzZSBcImxkaWZcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxESUZcclxuICAgICAgICAgICAgY2FzZSBcImNybFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1JMXHJcbiAgICAgICAgICAgIGNhc2UgXCJtbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTUxcclxuICAgICAgICAgICAgY2FzZSBcImRlZmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFRkxcclxuICAgICAgICAgICAgY2FzZSBcImRldmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFVkxcclxuICAgICAgICAgICAgY2FzZSBcImJsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CTFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IHtcbiAgICBOT1RfUkVBRFk6IDAsXG4gICAgUkVBRFk6IDEsXG4gICAgVElNRU9VVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFJHTE1lYXN1cmVTeXN0ZW0gPSB7XG4gICAgTUVUUklDOiAwLFxuICAgIElNUEVSSUFMOiAxLFxufVxuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9JZGVudGlmaWVyID0ge1xuICAgIFNDRU5BUklPX01SWjogXCJNcnpcIixcbiAgICBTQ0VOQVJJT19CQVJDT0RFOiBcIkJhcmNvZGVcIixcbiAgICBTQ0VOQVJJT19MT0NBVEU6IFwiTG9jYXRlXCIsXG4gICAgU0NFTkFSSU9fT0NSOiBcIk9jclwiLFxuICAgIFNDRU5BUklPX0RPQ1RZUEU6IFwiRG9jVHlwZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9CQVJDT0RFOiBcIk1yek9yQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9MT0NBVEU6IFwiTXJ6T3JMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfQU5EX0xPQ0FURTogXCJNcnpBbmRMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfT0NSOiBcIk1yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREVfT1JfT0NSOiBcIk1yek9yQmFyY29kZU9yT2NyXCIsXG4gICAgU0NFTkFSSU9fTE9DQVRFX1ZJU1VBTF9BTkRfTVJaX09SX09DUjogXCJMb2NhdGVWaXN1YWxfQW5kX01yek9yT2NyXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9QUk9DRVNTOiBcIkZ1bGxQcm9jZXNzXCIsXG4gICAgU0NFTkFSSU9fRlVMTF9BVVRIOiBcIkZ1bGxBdXRoXCIsXG4gICAgU0NFTkFSSU9fSUQzUlVTOiBcIklkM1J1c1wiLFxuICAgIFNDRU5BUklPX1JVU19TVEFNUDogXCJSdXNTdGFtcFwiLFxuICAgIFNDRU5BUklPX09DUl9GUkVFOiBcIk9jckZyZWVcIixcbiAgICBTQ0VOQVJJT19DUkVESVRfQ0FSRDogXCJDcmVkaXRDYXJkXCIsXG4gICAgU0NFTkFSSU9fQ0FQVFVSRTogXCJDYXB0dXJlXCIsXG59XG5cbmV4cG9ydCBjb25zdCBMaW5lQ2FwID0ge1xuICAgIEJ1dHQ6IDAsXG4gICAgUm91bmQ6IDEsXG4gICAgU3F1YXJlOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2sgPSB7XG4gICAgUG9ydHJhaXQ6IDAsXG4gICAgTGFuZHNjYXBlTGVmdDogMSxcbiAgICBMYW5kc2NhcGVSaWdodDogMixcbiAgICBQb3J0cmFpdFVwc2lkZURvd246IDMsXG4gICAgTGFuZHNjYXBlOiA0LFxuICAgIEFsbDogNSxcbiAgICBBbGxCdXRVcHNpZGVEb3duOiA2LFxufVxuXG5leHBvcnQgY29uc3QgQVZDYXB0dXJlU2Vzc2lvblByZXNldCA9IHtcbiAgICBMb3c6IDAsXG4gICAgTWVkaXVtOiAxLFxuICAgIEhpZ2g6IDIsXG4gICAgUGhvdG86IDMsXG4gICAgSW5wdXRQcmlvcml0eTogNCxcbiAgICBRSEQ5NjB4NTQwOiA1LFxuICAgIEhkMTI4MHg3MjA6IDYsXG4gICAgSGQxOTIweDEwODA6IDcsXG4gICAgSGQ0SzM4NDB4MjE2MDogOCxcbiAgICBJRnJhbWU5NjB4NTQwOiA5LFxuICAgIElGcmFtZTEyODB4NzIwOiAxMCxcbiAgICBRdmdhMzIweDI0MDogMTEsXG4gICAgVmdhNjQweDQ4MDogMTIsXG4gICAgQ2lmMzUyeDI4ODogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVEZXZpY2VQb3NpdGlvbiA9IHtcbiAgICBGcm9udDogMCxcbiAgICBCYWNrOiAxLFxuICAgIFVuc3BlY2lmaWVkOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVUlWaWV3Q29udGVudE1vZGUgPSB7XG4gICAgU2NhbGVUb0ZpbGw6IDAsXG4gICAgU2NhbGVBc3BlY3RGaXQ6IDEsXG4gICAgU2NhbGVBc3BlY3RGaWxsOiAyLFxuICAgIFJlZHJhdzogMyxcbiAgICBDZW50ZXI6IDQsXG4gICAgVG9wOiA1LFxuICAgIEJvdHRvbTogNixcbiAgICBMZWZ0OiA3LFxuICAgIFJpZ2h0OiA4LFxuICAgIFRvcExlZnQ6IDksXG4gICAgVG9wUmlnaHQ6IDEwLFxuICAgIEJvdHRvbUxlZnQ6IDExLFxuICAgIEJvdHRvbVJpZ2h0OiAxMixcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBCYXJjb2RlUmVzdWx0LFxuICAgQmFyY29kZVR5cGUsXG4gICBDYW1lcmFNb2RlLFxuICAgQ2FtZXJhVHlwZXMsXG4gICBDYXB0dXJlTW9kZSxcbiAgIGRpRG9jVHlwZSxcbiAgIERvY0Zvcm1hdCxcbiAgIERvY1JlYWRlckFjdGlvbixcbiAgIERvY1JlYWRlckZyYW1lLFxuICAgRG9jUmVhZGVyT3JpZW50YXRpb24sXG4gICBlQ2hlY2tEaWFnbm9zZSxcbiAgIGVDaGVja1Jlc3VsdCxcbiAgIGVHcmFwaGljRmllbGRUeXBlLFxuICAgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSxcbiAgIGVQcm9jZXNzR0xDb21tYW5kcyxcbiAgIGVSZXF1ZXN0Q29tbWFuZCxcbiAgIGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSxcbiAgIGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSxcbiAgIGVSRklEX0JhdWRSYXRlLFxuICAgZVJGSURfQ2VydGlmaWNhdGVUeXBlLFxuICAgZVJGSURfRGF0YUZpbGVfVHlwZSxcbiAgIGVSRklEX05vdGlmaWNhdGlvbkFuZEVycm9yQ29kZXMsXG4gICBlUkZJRF9QYXNzd29yZF9UeXBlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGVSRklEX1Rlcm1pbmFsVHlwZSxcbiAgIGVSUFJNX0F1dGhlbnRpY2l0eSxcbiAgIGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0LFxuICAgZVJQUk1fTGlnaHRzLFxuICAgZVJQUk1fUmVzdWx0VHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBlU2lnbk1hbmFnZW1lbnRBY3Rpb24sXG4gICBlVmlzdWFsRmllbGRUeXBlLFxuICAgRm9udFN0eWxlLFxuICAgRnJhbWVTaGFwZVR5cGUsXG4gICBMQ0lELFxuICAgUEtEUmVzb3VyY2VUeXBlLFxuICAgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzLFxuICAgUkdMTWVhc3VyZVN5c3RlbSxcbiAgIFNjZW5hcmlvSWRlbnRpZmllcixcbiAgIExpbmVDYXAsXG4gICBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayxcbiAgIEFWQ2FwdHVyZVNlc3Npb25QcmVzZXQsXG4gICBBVkNhcHR1cmVEZXZpY2VQb3NpdGlvbixcbiAgIFVJVmlld0NvbnRlbnRNb2RlLFxufVxuXG4vKipcbiAqIEBuYW1lIERvY3VtZW50UmVhZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBEb2N1bWVudCBSZWFkZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFJlYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtcmVhZGVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBEb2N1bWVudFJlYWRlcjogRG9jdW1lbnRSZWFkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLkRvY3VtZW50UmVhZGVyLnByZXBhcmVEYXRhYmFzZShcIkZ1bGxcIikuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICogICAgICAgIGlmIChtZXNzYWdlID09IFwiZGF0YWJhc2UgcHJlcGFyZWRcIikge1xuICogICAgICAgICAgdGhpcy5Eb2N1bWVudFJlYWRlci5pbml0aWFsaXplUmVhZGVyKGxpY2Vuc2UpLnRoZW4obSA9PiBvbkluaXRpYWxpemVkKCkpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gKiAgICAgICAgfVxuICogICAgICB9KVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRSZWFkZXInLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICAgIHBsdWdpblJlZjogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9Eb2N1bWVudFJlYWRlci1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBBUEkgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBUElWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0QXZhaWxhYmxlU2NlbmFyaW9zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBORkMgY2hpcCByZWFkaW5nIGNhcGFiaWxpdHkgaXMgYXZhaWxhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBDb3JlIG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29yZU1vZGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENvcmVWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIGV4cG9ydCBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBJRFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZUlEKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiB0aGUgU0RLIGlzIHJlYWR5IGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIERvY3VtZW50IFJlYWRlciBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBjb3VudHJpZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VDb3VudHJpZXNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEb2N1bWVudHNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgc2VsZWN0ZWQgc2NlbmFyaW9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VsZWN0ZWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBwYXRoIHRvIHRoZSBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQmVmb3JlIHVzaW5nIHRoaXMsIGVuYWJsZSBsb2cgc2F2aW5nLiBFYWNoIG5ldyBzZXNzaW9uIHByb3ZpZGVzIGEgZGlmZmVyZW50IHBhdGhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2Vzc2lvbkxvZ0ZvbGRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHMgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1BhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBvcGVuIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBzdGFydCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0UkZJRFJlYWRlcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFJGSURSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xvc2UgY2FtZXJhIHByZXZpZXcgYW5kIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUV4cGlyeURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhIGxpc3Qgb2YgY291bnRyeSBpZGVudGlmaWVycyB0aGF0IGFyZSBkZWZpbmVkIGZvciBwcm9jZXNzaW5nIGluIHRoZSBsaWNlbnNlLiBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGFyZSBubyByZXN0cmljdGlvbnMgZm9yIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbGljZW5zZUlzUmZpZEF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENhbWVyYVNlc3Npb25Jc1BhdXNlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlc2V0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbGVhciBQS0QgY2VydGlmaWNhdGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZW5hYmxlIENvcmUgbG9nc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2dzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRFbmFibGVDb3JlTG9ncyhsb2dzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB0byBhZGQgYSBsaXN0IG9mIFBLRCBjZXJ0aWZpY2F0ZXMgZHVyaW5nIGluaXRpYWxpemF0aW9uIHByb2Nlc3Mgd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gQ29yZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIElmIHNldCwgdGhlIGNhbWVyYSBzZXNzaW9uIHdpbGwgYmUgcGF1c2VkIGFzIHNvb24gYXMgdGhlIHJlc3VsdCBpcyByZWNlaXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENhbWVyYVNlc3Npb25Jc1BhdXNlZChwYXVzZWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW8gU2NlbmFyaW9gcyB1bmlxdWUgaWRlbnRpZmllclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlcyhpbWFnZXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSUQoY2FtZXJhSUQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENvbmZpZyhjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2NlbmFyaW8gSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7bmFtZT86IHZhbHVlMSxuYW1lPzogdmFsdWUyLCAuLi59XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTY2VuYXJpbyhzY2VuYXJpbzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlIExpY2Vuc2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIobGljZW5zZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZG93bmxvYWQgYSBkYXRhYmFzZSBmcm9tIHRoZSBSZWd1bGEncyBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZVR5cGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcHJlcGFyZURhdGFiYXNlKGRhdGFiYXNlVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2UoaW1hZ2U6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNlc3Npb24gc3RhdHVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkU2Vzc2lvblN0YXR1cyhzdGF0dXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyIHdpdGggdGhlIHBhdGggdG8gdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGljZW5zZSBMaWNlbnNlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCB0byB0aGUgZGF0YWJhc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXJXaXRoRGF0YWJhc2VQYXRoKGxpY2Vuc2U6IGFueSwgcGF0aDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIGZyYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXRQYXJhbX0gcGFyYW1zIEltYWdlIGlucHV0IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZUZyYW1lKGltYWdlOiBhbnksIHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIHdpdGggb3B0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZVxuICAgICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgICAqICAgIHByb2Nlc3NQYXJhbXM/OiB7bmFtZT86IHZhbHVlNSwgbmFtZT86IHZhbHVlNiwgLi4ufX1cbiAgICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgICAqICB2YWx1ZSAtIGFueVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZVdpdGhPcHRzKGltYWdlOiBhbnksIG9wdGlvbnM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhIHN0cmVhbSBvZiBmcmFtZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBieXRlU3RyaW5nXG4gICAgICogQHBhcmFtIHtJbWFnZUlucHV0UGFyYW19IHBhcmFtcyBJbWFnZSBpbnB1dCBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplVmlkZW9GcmFtZShieXRlU3RyaW5nOiBhbnksIHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2l0aCB0aGUgZGVzaXJlZCBjYW1lcmEgSUQgYW5kIG9wdGlvbnMgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJRFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSURBbmRPcHRzKGNhbWVyYUlEOiBhbnksIG9wdGlvbnM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXMgd2l0aCBwYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXRQYXJhbX0gcGFyYW1zIEltYWdlIGlucHV0IHBhcmFtc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZVdpdGhJbWFnZUlucHV0UGFyYW1zKGltYWdlOiBhbnksIHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGEgc3RyZWFtIG9mIGZyYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtb2RlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlV2l0aENhbWVyYU1vZGUoaW1hZ2U6IGFueSwgbW9kZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cbn0iXX0=