import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Scenario = /** @class */ (function () {
    function Scenario() {
    }
    Scenario.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Scenario;
        result.frame = jsonObject["frame"];
        result.frameOrientation = jsonObject["frameOrientation"];
        result.uvTorch = jsonObject["uvTorch"];
        result.barcodeExt = jsonObject["barcodeExt"];
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
        return result;
    };
    return Scenario;
}());
export { Scenario };
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
        result.boundRects = [];
        if (jsonObject["boundRects"] != null) {
            for (var i in jsonObject["boundRects"]) {
                result.boundRects.push(Rect.fromJson(jsonObject["boundRects"][i]));
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
        result.value = jsonObject["value"];
        result.number = jsonObject["number"];
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
        result.code = jsonObject["code"];
        result.domain = jsonObject["domain"];
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
        result.documentPosition = ElementPosition.fromJson(jsonObject["documentPosition"]);
        result.barcodePosition = ElementPosition.fromJson(jsonObject["barcodePosition"]);
        result.mrzPosition = ElementPosition.fromJson(jsonObject["mrzPosition"]);
        result.imageQuality = ImageQualityGroup.fromJson(jsonObject["imageQuality"]);
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
    ROTATE: 0,
    PORTRAIT: 1,
    LANDSCAPE: 2,
};
export var DocumentReaderException = {
    NATIVE_JAVA_EXCEPTION: 0,
    DOCUMENT_READER_STATE_EXCEPTION: 1,
    DOCUMENT_READER_WRONG_INPUT: 2,
    DOCUMENT_READER_BLE_EXCEPTION: 201,
    DB_DOWNLOAD_ERROR: 301,
    LICENSE_ABSENT_OR_CORRUPTED: 101,
    LICENSE_INVALID_DATE: 102,
    LICENSE_INVALID_VERSION: 103,
    LICENSE_INVALID_DEVICE_ID: 104,
    LICENSE_INVALID_SYSTEM_OR_APP_ID: 105,
    LICENSE_NO_CAPABILITIES: 106,
    LICENSE_NO_AUTHENTICITY: 107,
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
    IQC_PERSPECTIVE: 3,
    IQC_BOUNDS: 4,
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
            case this.DFT_PASSPORT_COM:
                return "EF.COM";
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
            case this.DFT_PASSPORT_SOD:
                return "EF.SOD";
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
            case this.DFT_AUTHENTICITYV2:
                return "DFT_CHIP_PROPERTIES";
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
                return "Error - ICAO Signed data: Signer infos empty";
            case -2147483598:
                return "Error - ICAO Signer info: Unsupported digest algorithm";
            case -2147483597:
                return "Error - ICAO Signer info: Unsupported signature algorithm";
            case -2147483596:
                return "Error - ICAO Signer info: Message digest error";
            case -2147483594:
                return "Error - ICAO Signer info: Signed attributes missed";
            case -2147483595:
                return "Error - Auth: Signer info cant find certificate";
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
                return "Error - PACE: Non Matching Auth Tokens";
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
                return "Error - CA: Non Matching Auth Tokens";
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
                return "Notification - ASN certificate: Non matching signature algorithm";
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
                return "Notification - ICAO certificate: Issuer country non compliant";
            case -1879047675:
                return "Notification - ICAO certificate: Subject country missed";
            case -1879047674:
                return "Notification - ICAO certificate: Subject common name missed";
            case -1879047673:
                return "Notification - ICAO certificate: Subject country non compliant";
            case -1879047672:
                return "Notification - ICAO certificate: Using non compliant data";
            case -1879047671:
                return "Notification - ICAO certificate: Unsupported signature algorithm";
            case -1879047670:
                return "Notification - ICAO certificate: Unsupported public key algorithm";
            case -1879047669:
                return "Notification - ICAO certificate: Missed extensions";
            case -1879047668:
                return "Notification - ICAO certificate: Validity";
            case -1879047667:
                return "Notification - ICAO certificate extension: Using non compliant data";
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
                return "Notification - ICAO certificate extension: Subject alt name non compliant";
            case -1879047639:
                return "Notification - ICAO certificate extension: Subject alt name DN empty";
            case -1879047638:
                return "Notification - ICAO certificate extension: Subject alt name DN incorrect";
            case -1879047637:
                return "Notification - ICAO certificate extension: Subject alt name DN non compliant";
            case -1879047636:
                return "Notification - ICAO certificate extension: Issuer alt name missed";
            case -1879047635:
                return "Notification - ICAO certificate extension: Issuer alt name incorrect data";
            case -1879047634:
                return "Notification - ICAO certificate extension: Issuer alt name empty";
            case -1879047633:
                return "Notification - ICAO certificate extension: Issuer alt name non compliant";
            case -1879047630:
                return "Notification - ICAO certificate extension: Issuer alt name DN empty";
            case -1879047629:
                return "Notification - ICAO certificate extension: Issuer alt name DN incorrect";
            case -1879047628:
                return "Notification - ICAO certificate extension: Issuer alt name DN non compliant";
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
                return "Notification - Auth signer info: Certificate cant find CSCA";
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
                return "Notification - Auth ML signer info: Certificate cant find CSCA";
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
                return "LAYER6: PWD Deactivatted";
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
                return "Area of birthplace";
            case this.FT_PLACE_OF_BIRTH_STATE_CODE:
                return "State code of birthplace";
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
                return "AKA Date of birth";
            case this.FT_AKA_SOCIAL_SECURITY_NUMBER:
                return "AKA Social Insurance Number";
            case this.FT_AKA_SURNAME:
                return "AKA Surname";
            case this.FT_AKA_GIVEN_NAMES:
                return "AKA Given name";
            case this.FT_AKA_NAME_SUFFIX:
                return "AKA Name suffix";
            case this.FT_AKA_NAME_PREFIX:
                return "AKA Name prefix";
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
                return "AKA Full name";
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
                return "Place of Birth: Street";
            case this.FT_E_ID_PLACE_OF_BIRTH_CITY:
                return "Place of Birth: City";
            case this.FT_E_ID_PLACE_OF_BIRTH_STATE:
                return "Place of Birth: State";
            case this.FT_E_ID_PLACE_OF_BIRTH_COUNTRY:
                return "Place of Birth: Country";
            case this.FT_E_ID_PLACE_OF_BIRTH_ZIPCODE:
                return "Place of Birth: Postal code";
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
                return "Except in tanks";
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
    DocumentReaderException: DocumentReaderException,
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
    DocumentReader = __decorate([
        Injectable()
    ], DocumentReader);
    return DocumentReader;
}(IonicNativePlugin));
export { DocumentReader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXJlYWRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBa0J6QixpQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzlCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQTtRQUUzQixNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEQsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFVBQVUsQ0FBQyxr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QUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsdUJBQXVCLEVBQUUsR0FBRztJQUM1Qix3QkFBd0IsRUFBRSxHQUFHO0lBQzdCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7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YUFBQyxVQUFrQixFQUFFLE1BQVc7SUFlbkQsdURBQThCLGFBQUMsUUFBZ0IsRUFBRSxPQUFZO0lBYTdELDJEQUFrQyxhQUFDLEtBQWEsRUFBRSxNQUFXO0lBVTdELHFEQUE0QixhQUFDLEtBQWEsRUFBRSxJQUFhOzs7Ozs7SUE1ZTlDLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkE5NEszQjtFQTg0S29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBTY2VuYXJpbyB7XG4gIGZyYW1lPzogbnVtYmVyXG4gIGZyYW1lT3JpZW50YXRpb24/OiBudW1iZXJcbiAgdXZUb3JjaD86IGJvb2xlYW5cbiAgYmFyY29kZUV4dD86IGJvb2xlYW5cbiAgZmFjZUV4dD86IGJvb2xlYW5cbiAgbXVsdGlQYWdlT2ZmPzogYm9vbGVhblxuICBzZXJpZXNQcm9jZXNzTW9kZT86IGJvb2xlYW5cbiAgZnJhbWVLV0hMYW5kc2NhcGU/OiBudW1iZXJcbiAgZnJhbWVLV0hQb3J0cmFpdD86IG51bWJlclxuICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdD86IG51bWJlclxuICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRMYW5kc2NhcGU/OiBudW1iZXJcbiAgbmFtZT86IHN0cmluZ1xuICBjYXB0aW9uPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTY2VuYXJpbyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2NlbmFyaW9cblxuICAgIHJlc3VsdC5mcmFtZSA9IGpzb25PYmplY3RbXCJmcmFtZVwiXVxuICAgIHJlc3VsdC5mcmFtZU9yaWVudGF0aW9uID0ganNvbk9iamVjdFtcImZyYW1lT3JpZW50YXRpb25cIl1cbiAgICByZXN1bHQudXZUb3JjaCA9IGpzb25PYmplY3RbXCJ1dlRvcmNoXCJdXG4gICAgcmVzdWx0LmJhcmNvZGVFeHQgPSBqc29uT2JqZWN0W1wiYmFyY29kZUV4dFwiXVxuICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICByZXN1bHQubXVsdGlQYWdlT2ZmID0ganNvbk9iamVjdFtcIm11bHRpUGFnZU9mZlwiXVxuICAgIHJlc3VsdC5zZXJpZXNQcm9jZXNzTW9kZSA9IGpzb25PYmplY3RbXCJzZXJpZXNQcm9jZXNzTW9kZVwiXVxuICAgIHJlc3VsdC5mcmFtZUtXSExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSExhbmRzY2FwZVwiXVxuICAgIHJlc3VsdC5mcmFtZUtXSFBvcnRyYWl0ID0ganNvbk9iamVjdFtcImZyYW1lS1dIUG9ydHJhaXRcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXQgPSBqc29uT2JqZWN0W1wiZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkUG9ydHJhaXRcIl1cbiAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZVwiXVxuICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICBib3R0b20/OiBudW1iZXJcbiAgdG9wPzogbnVtYmVyXG4gIGxlZnQ/OiBudW1iZXJcbiAgcmlnaHQ/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3Qge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgc291cmNlVHlwZT86IG51bWJlclxuICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgbGlnaHRUeXBlPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgbGlnaHROYW1lPzogc3RyaW5nXG4gIHZhbHVlPzogc3RyaW5nXG4gIGZpZWxkUmVjdD86IFJlY3RcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFxuXG4gICAgcmVzdWx0LnNvdXJjZVR5cGUgPSBqc29uT2JqZWN0W1wic291cmNlVHlwZVwiXVxuICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgcmVzdWx0LmxpZ2h0VHlwZSA9IGpzb25PYmplY3RbXCJsaWdodFR5cGVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgcmVzdWx0LmxpZ2h0TmFtZSA9IGpzb25PYmplY3RbXCJsaWdodE5hbWVcIl1cbiAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICByZXN1bHQuZmllbGRSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRSZWN0XCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdFxuXG4gICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmZpZWxkcy5wdXNoKERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBzb3VyY2VUeXBlPzogbnVtYmVyXG4gIHZhbGlkaXR5PzogbnVtYmVyXG4gIHByb2JhYmlsaXR5PzogbnVtYmVyXG4gIHZhbHVlPzogc3RyaW5nXG4gIG9yaWdpbmFsVmFsdWU/OiBzdHJpbmdcbiAgYm91bmRSZWN0PzogUmVjdFxuICBjb21wYXJpc29uPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWx1ZVxuXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgcmVzdWx0LnZhbGlkaXR5ID0ganNvbk9iamVjdFtcInZhbGlkaXR5XCJdXG4gICAgcmVzdWx0LnByb2JhYmlsaXR5ID0ganNvbk9iamVjdFtcInByb2JhYmlsaXR5XCJdXG4gICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgcmVzdWx0Lm9yaWdpbmFsVmFsdWUgPSBqc29uT2JqZWN0W1wib3JpZ2luYWxWYWx1ZVwiXVxuICAgIHJlc3VsdC5ib3VuZFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJib3VuZFJlY3RcIl0pXG4gICAgcmVzdWx0LmNvbXBhcmlzb24gPSB7fVxuICAgIGlmIChqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0pIHtcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baSBhcyB1bmtub3duIGFzIG51bWJlcl0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQge1xuICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgbGNpZD86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgZmllbGROYW1lPzogc3RyaW5nXG4gIHZhbHVlPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVxuICB2YWx1ZXM/OiBEb2N1bWVudFJlYWRlclZhbHVlW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgcmVzdWx0LmZpZWxkVHlwZSA9IGpzb25PYmplY3RbXCJmaWVsZFR5cGVcIl1cbiAgICByZXN1bHQubGNpZCA9IGpzb25PYmplY3RbXCJsY2lkXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQubGNpZE5hbWUgPSBqc29uT2JqZWN0W1wibGNpZE5hbWVcIl1cbiAgICByZXN1bHQuZmllbGROYW1lID0ganNvbk9iamVjdFtcImZpZWxkTmFtZVwiXVxuICAgIHJlc3VsdC52YWx1ZSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlXCJdKVxuICAgIHJlc3VsdC52YWx1ZXMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWx1ZXNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGZpZWxkcz86IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG5cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChEb2N1bWVudFJlYWRlclRleHRGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGUge1xuICB4PzogbnVtYmVyXG4gIHk/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvb3JkaW5hdGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IENvb3JkaW5hdGVcblxuICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRQb3NpdGlvbiB7XG4gIGRvY0Zvcm1hdD86IG51bWJlclxuICB3aWR0aD86IG51bWJlclxuICBoZWlnaHQ/OiBudW1iZXJcbiAgZHBpPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBpbnZlcnNlPzogbnVtYmVyXG4gIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgb2JqQXJlYT86IG51bWJlclxuICBvYmpJbnRBbmdsZURldj86IG51bWJlclxuICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgYW5nbGU/OiBudW1iZXJcbiAgY2VudGVyPzogQ29vcmRpbmF0ZVxuICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICBsZWZ0Qm90dG9tPzogQ29vcmRpbmF0ZVxuICByaWdodFRvcD86IENvb3JkaW5hdGVcbiAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFbGVtZW50UG9zaXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgcmVzdWx0LmRvY0Zvcm1hdCA9IGpzb25PYmplY3RbXCJkb2NGb3JtYXRcIl1cbiAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgIHJlc3VsdC5kcGkgPSBqc29uT2JqZWN0W1wiZHBpXCJdXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgcmVzdWx0LnBlcnNwZWN0aXZlVHIgPSBqc29uT2JqZWN0W1wicGVyc3BlY3RpdmVUclwiXVxuICAgIHJlc3VsdC5vYmpBcmVhID0ganNvbk9iamVjdFtcIm9iakFyZWFcIl1cbiAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICByZXN1bHQucmVzdWx0U3RhdHVzID0ganNvbk9iamVjdFtcInJlc3VsdFN0YXR1c1wiXVxuICAgIHJlc3VsdC5hbmdsZSA9IGpzb25PYmplY3RbXCJhbmdsZVwiXVxuICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgcmVzdWx0LmxlZnRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0VG9wXCJdKVxuICAgIHJlc3VsdC5sZWZ0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdEJvdHRvbVwiXSlcbiAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICByZXN1bHQucmlnaHRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodEJvdHRvbVwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5IHtcbiAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgcmVzdWx0PzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgYm91bmRSZWN0cz86IFJlY3RbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlcblxuICAgIHJlc3VsdC5mZWF0dXJlVHlwZSA9IGpzb25PYmplY3RbXCJmZWF0dXJlVHlwZVwiXVxuICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5ib3VuZFJlY3RzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImJvdW5kUmVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJib3VuZFJlY3RzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ib3VuZFJlY3RzLnB1c2goUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRSZWN0c1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlHcm91cCB7XG4gIGNvdW50PzogbnVtYmVyXG4gIHJlc3VsdD86IG51bWJlclxuICBpbWFnZVF1YWxpdHlMaXN0PzogSW1hZ2VRdWFsaXR5W11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUdyb3VwIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlHcm91cFxuXG4gICAgcmVzdWx0LmNvdW50ID0ganNvbk9iamVjdFtcImNvdW50XCJdXG4gICAgcmVzdWx0LnJlc3VsdCA9IGpzb25PYmplY3RbXCJyZXN1bHRcIl1cbiAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdC5wdXNoKEltYWdlUXVhbGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB7XG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBkb2N1bWVudElEPzogbnVtYmVyXG4gIGRUeXBlPzogbnVtYmVyXG4gIGRGb3JtYXQ/OiBudW1iZXJcbiAgZE1SWj86IGJvb2xlYW5cbiAgbmFtZT86IHN0cmluZ1xuICBJQ0FPQ29kZT86IHN0cmluZ1xuICBkRGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgZFllYXI/OiBzdHJpbmdcbiAgZENvdW50cnlOYW1lPzogc3RyaW5nXG4gIEZEU0lEPzogbnVtYmVyW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVxuXG4gICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICByZXN1bHQuZG9jdW1lbnRJRCA9IGpzb25PYmplY3RbXCJkb2N1bWVudElEXCJdXG4gICAgcmVzdWx0LmRUeXBlID0ganNvbk9iamVjdFtcImRUeXBlXCJdXG4gICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgIHJlc3VsdC5kTVJaID0ganNvbk9iamVjdFtcImRNUlpcIl1cbiAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgcmVzdWx0LmREZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkRGVzY3JpcHRpb25cIl1cbiAgICByZXN1bHQuZFllYXIgPSBqc29uT2JqZWN0W1wiZFllYXJcIl1cbiAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgIHJlc3VsdC5GRFNJRCA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJGRFNJRFwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIkZEU0lEXCJdKSB7XG4gICAgICAgIHJlc3VsdC5GRFNJRC5wdXNoKGpzb25PYmplY3RbXCJGRFNJRFwiXVtpXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHtcbiAgY29kZT86IG51bWJlclxuICB2YWx1ZT86IG51bWJlclxuICBudW1iZXI/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgIHJlc3VsdC5udW1iZXIgPSBqc29uT2JqZWN0W1wibnVtYmVyXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlIHtcbiAgYWN0aXZlT3B0aW9uSWR4PzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlXG5cbiAgICByZXN1bHQuYWN0aXZlT3B0aW9uSWR4ID0ganNvbk9iamVjdFtcImFjdGl2ZU9wdGlvbklkeFwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG4gIGxlbmd0aD86IG51bWJlclxuICB0eXBlPzogbnVtYmVyXG4gIHN0YXR1cz86IG51bWJlclxuICBkYXRhPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlRGF0YSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZURhdGFcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZURhdGEge1xuICBsZW5ndGg/OiBudW1iZXJcbiAgZGF0YT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVEYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gIHNlY3VyaXR5T2JqZWN0PzogQ2VydGlmaWNhdGVEYXRhXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcblxuICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdCA9IENlcnRpZmljYXRlRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGUge1xuICByZWFkaW5nVGltZT86IG51bWJlclxuICB0eXBlPzogbnVtYmVyXG4gIHBBU3RhdHVzPzogbnVtYmVyXG4gIHJlYWRpbmdTdGF0dXM/OiBudW1iZXJcbiAgZmlsZUlEPzogc3RyaW5nXG4gIGZpbGVEYXRhPzogRmlsZURhdGFcbiAgY2VydGlmaWNhdGVzPzogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXNcbiAgZG9jRmllbGRzVGV4dD86IG51bWJlcltdXG4gIGRvY0ZpZWxkc0dyYXBoaWNzPzogbnVtYmVyW11cbiAgZG9jRmllbGRzT3JpZ2luYWxzPzogbnVtYmVyW11cbiAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlXG5cbiAgICByZXN1bHQucmVhZGluZ1RpbWUgPSBqc29uT2JqZWN0W1wicmVhZGluZ1RpbWVcIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnBBU3RhdHVzID0ganNvbk9iamVjdFtcInBBU3RhdHVzXCJdXG4gICAgcmVzdWx0LnJlYWRpbmdTdGF0dXMgPSBqc29uT2JqZWN0W1wicmVhZGluZ1N0YXR1c1wiXVxuICAgIHJlc3VsdC5maWxlSUQgPSBqc29uT2JqZWN0W1wiZmlsZUlEXCJdXG4gICAgcmVzdWx0LmZpbGVEYXRhID0gRmlsZURhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVEYXRhXCJdKVxuICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZXMgPSBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVzXCJdKVxuICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0ID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0LnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl1baV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNHcmFwaGljcy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc09yaWdpbmFscy5wdXNoKGpzb25PYmplY3RbXCJkb2NGaWVsZHNPcmlnaW5hbHNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGFwcGxpY2F0aW9uSUQ/OiBzdHJpbmdcbiAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgdW5pY29kZVZlcnNpb24/OiBzdHJpbmdcbiAgdmVyc2lvbj86IHN0cmluZ1xuICBmaWxlcz86IEZpbGVbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXBwbGljYXRpb24ge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgcmVzdWx0LmRhdGFIYXNoQWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRhdGFIYXNoQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnVuaWNvZGVWZXJzaW9uID0ganNvbk9iamVjdFtcInVuaWNvZGVWZXJzaW9uXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5maWxlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJmaWxlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZpbGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKEZpbGUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgbGVuZ3RoPzogbnVtYmVyXG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIGRhdGE/OiBzdHJpbmdcbiAgZm9ybWF0Pzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWx1ZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVmFsdWVcblxuICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gIHR5cGU/OiBzdHJpbmdcbiAgdmFsdWU/OiBWYWx1ZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBdHRyaWJ1dGVcblxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQudmFsdWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eSB7XG4gIGRhdGE/OiBzdHJpbmdcbiAgZnJpZW5kbHlOYW1lPzogVmFsdWVcbiAgYXR0cmlidXRlcz86IEF0dHJpYnV0ZVtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBdXRob3JpdHkge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhvcml0eVxuXG4gICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgIHJlc3VsdC5mcmllbmRseU5hbWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZnJpZW5kbHlOYW1lXCJdKVxuICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goQXR0cmlidXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbiB7XG4gIGRhdGE/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXh0ZW5zaW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFeHRlbnNpb25cblxuICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbGlkaXR5IHtcbiAgbm90QWZ0ZXI/OiBWYWx1ZVxuICBub3RCZWZvcmU/OiBWYWx1ZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVmFsaWRpdHkge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICByZXN1bHQubm90QWZ0ZXIgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibm90QWZ0ZXJcIl0pXG4gICAgcmVzdWx0Lm5vdEJlZm9yZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJub3RCZWZvcmVcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlQ2hhaW4ge1xuICBvcmlnaW4/OiBudW1iZXJcbiAgdHlwZT86IG51bWJlclxuICB2ZXJzaW9uPzogbnVtYmVyXG4gIHBhU3RhdHVzPzogbnVtYmVyXG4gIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICBzaWduYXR1cmVBbGdvcml0aG0/OiBzdHJpbmdcbiAgc3ViamVjdFBLQWxnb3JpdGhtPzogc3RyaW5nXG4gIGZpbGVOYW1lPzogVmFsdWVcbiAgdmFsaWRpdHk/OiBWYWxpZGl0eVxuICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgc3ViamVjdD86IEF1dGhvcml0eVxuICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgZXh0ZW5zaW9ucz86IEV4dGVuc2lvbltdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDZXJ0aWZpY2F0ZUNoYWluXG5cbiAgICByZXN1bHQub3JpZ2luID0ganNvbk9iamVjdFtcIm9yaWdpblwiXVxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgcmVzdWx0LnBhU3RhdHVzID0ganNvbk9iamVjdFtcInBhU3RhdHVzXCJdXG4gICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl1cbiAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgIHJlc3VsdC5zdWJqZWN0UEtBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic3ViamVjdFBLQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LmZpbGVOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVOYW1lXCJdKVxuICAgIHJlc3VsdC52YWxpZGl0eSA9IFZhbGlkaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXSlcbiAgICByZXN1bHQuaXNzdWVyID0gQXV0aG9yaXR5LmZyb21Kc29uKGpzb25PYmplY3RbXCJpc3N1ZXJcIl0pXG4gICAgcmVzdWx0LnN1YmplY3QgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RcIl0pXG4gICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LmV4dGVuc2lvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0pIHtcbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMucHVzaChFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmVySW5mbyB7XG4gIHZlcnNpb24/OiBudW1iZXJcbiAgcGFTdGF0dXM/OiBudW1iZXJcbiAgZGF0YVRvSGFzaD86IHN0cmluZ1xuICBkaWdlc3RBbGdvcml0aG0/OiBzdHJpbmdcbiAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gIHNlcmlhbE51bWJlcj86IFZhbHVlXG4gIHNpZ25hdHVyZT86IFZhbHVlXG4gIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgaXNzdWVyPzogQXV0aG9yaXR5XG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgY2VydGlmaWNhdGVDaGFpbj86IENlcnRpZmljYXRlQ2hhaW5bXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2lnbmVySW5mbyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2lnbmVySW5mb1xuXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5wYVN0YXR1cyA9IGpzb25PYmplY3RbXCJwYVN0YXR1c1wiXVxuICAgIHJlc3VsdC5kYXRhVG9IYXNoID0ganNvbk9iamVjdFtcImRhdGFUb0hhc2hcIl1cbiAgICByZXN1bHQuZGlnZXN0QWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRpZ2VzdEFsZ29yaXRobVwiXVxuICAgIHJlc3VsdC5zaWduYXR1cmVBbGdvcml0aG0gPSBqc29uT2JqZWN0W1wic2lnbmF0dXJlQWxnb3JpdGhtXCJdXG4gICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl0pXG4gICAgcmVzdWx0LnNpZ25hdHVyZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgcmVzdWx0LnN1YmplY3RLZXlJZGVudGlmaWVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RLZXlJZGVudGlmaWVyXCJdKVxuICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSkge1xuICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluLnB1c2goQ2VydGlmaWNhdGVDaGFpbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdCB7XG4gIGZpbGVSZWZlcmVuY2U/OiBudW1iZXJcbiAgdmVyc2lvbj86IG51bWJlclxuICBvYmplY3RUeXBlPzogc3RyaW5nXG4gIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICBzaWduZXJJbmZvcz86IFNpZ25lckluZm9bXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3Qge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlY3VyaXR5T2JqZWN0XG5cbiAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgIHJlc3VsdC5vYmplY3RUeXBlID0ganNvbk9iamVjdFtcIm9iamVjdFR5cGVcIl1cbiAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2lnbmVySW5mb3MgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICByZXN1bHQuc2lnbmVySW5mb3MucHVzaChTaWduZXJJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkUHJvcGVydGllcyB7XG4gIGFUUUE/OiBudW1iZXJcbiAgYml0UmF0ZVI/OiBudW1iZXJcbiAgYml0UmF0ZVM/OiBudW1iZXJcbiAgY2hpcFR5cGVBPzogbnVtYmVyXG4gIG1pZmFyZU1lbW9yeT86IG51bWJlclxuICByZmlkVHlwZT86IG51bWJlclxuICBzQUs/OiBudW1iZXJcbiAgc3VwcG9ydDQ/OiBib29sZWFuXG4gIHN1cHBvcnRNaWZhcmU/OiBib29sZWFuXG4gIGFUUUI/OiBzdHJpbmdcbiAgYVRSPzogc3RyaW5nXG4gIGJhdWRyYXRlMT86IHN0cmluZ1xuICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgdUlEPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDYXJkUHJvcGVydGllcyB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2FyZFByb3BlcnRpZXNcblxuICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICByZXN1bHQuYml0UmF0ZVIgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVJcIl1cbiAgICByZXN1bHQuYml0UmF0ZVMgPSBqc29uT2JqZWN0W1wiYml0UmF0ZVNcIl1cbiAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgIHJlc3VsdC5taWZhcmVNZW1vcnkgPSBqc29uT2JqZWN0W1wibWlmYXJlTWVtb3J5XCJdXG4gICAgcmVzdWx0LnJmaWRUeXBlID0ganNvbk9iamVjdFtcInJmaWRUeXBlXCJdXG4gICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICByZXN1bHQuc3VwcG9ydDQgPSBqc29uT2JqZWN0W1wic3VwcG9ydDRcIl1cbiAgICByZXN1bHQuc3VwcG9ydE1pZmFyZSA9IGpzb25PYmplY3RbXCJzdXBwb3J0TWlmYXJlXCJdXG4gICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgIHJlc3VsdC5hVFIgPSBqc29uT2JqZWN0W1wiYVRSXCJdXG4gICAgcmVzdWx0LmJhdWRyYXRlMSA9IGpzb25PYmplY3RbXCJiYXVkcmF0ZTFcIl1cbiAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgIHJlc3VsdC51SUQgPSBqc29uT2JqZWN0W1widUlEXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJGSURTZXNzaW9uRGF0YSB7XG4gIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICB0b3RhbEJ5dGVzU2VudD86IG51bWJlclxuICBzdGF0dXM/OiBudW1iZXJcbiAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gIHByb2Nlc3NUaW1lPzogbnVtYmVyXG4gIGNhcmRQcm9wZXJ0aWVzPzogQ2FyZFByb3BlcnRpZXNcbiAgc2Vzc2lvbkRhdGFTdGF0dXM/OiBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcbiAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gIGFwcGxpY2F0aW9ucz86IEFwcGxpY2F0aW9uW11cbiAgc2VjdXJpdHlPYmplY3RzPzogU2VjdXJpdHlPYmplY3RbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFcblxuICAgIHJlc3VsdC50b3RhbEJ5dGVzUmVjZWl2ZWQgPSBqc29uT2JqZWN0W1widG90YWxCeXRlc1JlY2VpdmVkXCJdXG4gICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZXh0TGVTdXBwb3J0ID0ganNvbk9iamVjdFtcImV4dExlU3VwcG9ydFwiXVxuICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgIHJlc3VsdC5jYXJkUHJvcGVydGllcyA9IENhcmRQcm9wZXJ0aWVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjYXJkUHJvcGVydGllc1wiXSlcbiAgICByZXN1bHQuc2Vzc2lvbkRhdGFTdGF0dXMgPSBSRklEU2Vzc2lvbkRhdGFTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInNlc3Npb25EYXRhU3RhdHVzXCJdKVxuICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFjY2Vzc0NvbnRyb2xzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scy5wdXNoKEFjY2Vzc0NvbnRyb2xQcm9jZWR1cmVUeXBlLmZyb21Kc29uKGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdKSB7XG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMucHVzaChBcHBsaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cy5wdXNoKFNlY3VyaXR5T2JqZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVjayB7XG4gIHR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIHR5cGVOYW1lPzogc3RyaW5nXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5lbGVtZW50cyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5lbGVtZW50cy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUERGNDE3SW5mbyB7XG4gIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgY29sdW1ucz86IG51bWJlclxuICByb3dzPzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQREY0MTdJbmZvXG5cbiAgICByZXN1bHQuZXJyb3JMZXZlbCA9IGpzb25PYmplY3RbXCJlcnJvckxldmVsXCJdXG4gICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgIHJlc3VsdC5yb3dzID0ganNvbk9iamVjdFtcInJvd3NcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgQUE/OiBudW1iZXJcbiAgQkFDPzogbnVtYmVyXG4gIENBPzogbnVtYmVyXG4gIFBBPzogbnVtYmVyXG4gIFBBQ0U/OiBudW1iZXJcbiAgVEE/OiBudW1iZXJcbiAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhU3RhdHVzIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSRklEU2Vzc2lvbkRhdGFTdGF0dXNcblxuICAgIHJlc3VsdC5BQSA9IGpzb25PYmplY3RbXCJBQVwiXVxuICAgIHJlc3VsdC5CQUMgPSBqc29uT2JqZWN0W1wiQkFDXCJdXG4gICAgcmVzdWx0LkNBID0ganNvbk9iamVjdFtcIkNBXCJdXG4gICAgcmVzdWx0LlBBID0ganNvbk9iamVjdFtcIlBBXCJdXG4gICAgcmVzdWx0LlBBQ0UgPSBqc29uT2JqZWN0W1wiUEFDRVwiXVxuICAgIHJlc3VsdC5UQSA9IGpzb25PYmplY3RbXCJUQVwiXVxuICAgIHJlc3VsdC5vdmVyYWxsU3RhdHVzID0ganNvbk9iamVjdFtcIm92ZXJhbGxTdGF0dXNcIl1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgIHJlc3VsdC5maWVsZHMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmllbGRzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgYmFyY29kZVR5cGU/OiBudW1iZXJcbiAgc3RhdHVzPzogbnVtYmVyXG4gIHBhZ2VJbmRleD86IG51bWJlclxuICBwZGY0MTdJbmZvPzogUERGNDE3SW5mb1xuICBkYXRhPzogYW55W11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVGaWVsZFxuXG4gICAgcmVzdWx0LmJhcmNvZGVUeXBlID0ganNvbk9iamVjdFtcImJhcmNvZGVUeXBlXCJdXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgIHJlc3VsdC5wZGY0MTdJbmZvID0gUERGNDE3SW5mby5mcm9tSnNvbihqc29uT2JqZWN0W1wicGRmNDE3SW5mb1wiXSlcbiAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgY2hlY2tzPzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlDaGVja1tdXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcblxuICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgcmVzdWx0LmNoZWNrcyA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJjaGVja3NcIl0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjaGVja3NcIl0pIHtcbiAgICAgICAgcmVzdWx0LmNoZWNrcy5wdXNoKERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2suZnJvbUpzb24oanNvbk9iamVjdFtcImNoZWNrc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICBzdGF0dXM/OiBudW1iZXJcbiAgZWxlbWVudFR5cGU/OiBudW1iZXJcbiAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gIGVsZW1lbnRUeXBlTmFtZT86IHN0cmluZ1xuICBlbGVtZW50RGlhZ25vc2VOYW1lPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFxuXG4gICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICByZXN1bHQuZWxlbWVudERpYWdub3NlID0ganNvbk9iamVjdFtcImVsZW1lbnREaWFnbm9zZVwiXVxuICAgIHJlc3VsdC5lbGVtZW50VHlwZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVOYW1lXCJdXG4gICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICBhY3Rpb24/OiBudW1iZXJcbiAgcmVzdWx0cz86IERvY3VtZW50UmVhZGVyUmVzdWx0c1xuICBlcnJvcj86IFRocm93YWJsZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJDb21wbGV0aW9uIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb25cblxuICAgIHJlc3VsdC5hY3Rpb24gPSBqc29uT2JqZWN0W1wiYWN0aW9uXCJdXG4gICAgcmVzdWx0LnJlc3VsdHMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHMuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl0pXG4gICAgcmVzdWx0LmVycm9yID0gVGhyb3dhYmxlLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGhyb3dhYmxlIHtcbiAgY29kZT86IG51bWJlclxuICBkb21haW4/OiBzdHJpbmdcbiAgbG9jYWxpemVkTWVzc2FnZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG4gIHN0cmluZz86IHN0cmluZ1xuICBzdGFja1RyYWNlPzogU3RhY2tUcmFjZUVsZW1lbnRbXVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVGhyb3dhYmxlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUaHJvd2FibGVcblxuICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICByZXN1bHQuZG9tYWluID0ganNvbk9iamVjdFtcImRvbWFpblwiXVxuICAgIHJlc3VsdC5sb2NhbGl6ZWRNZXNzYWdlID0ganNvbk9iamVjdFtcImxvY2FsaXplZE1lc3NhZ2VcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgcmVzdWx0LnN0cmluZyA9IGpzb25PYmplY3RbXCJzdHJpbmdcIl1cbiAgICByZXN1bHQuc3RhY2tUcmFjZSA9IFtdXG4gICAgaWYgKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic3RhY2tUcmFjZVwiXSkge1xuICAgICAgICByZXN1bHQuc3RhY2tUcmFjZS5wdXNoKFN0YWNrVHJhY2VFbGVtZW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJzdGFja1RyYWNlXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrVHJhY2VFbGVtZW50IHtcbiAgbGluZU51bWJlcj86IG51bWJlclxuICBpc05hdGl2ZU1ldGhvZD86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGZpbGVOYW1lPzogc3RyaW5nXG4gIG1ldGhvZE5hbWU/OiBzdHJpbmdcbiAgc3RyaW5nPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTdGFja1RyYWNlRWxlbWVudCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU3RhY2tUcmFjZUVsZW1lbnRcblxuICAgIHJlc3VsdC5saW5lTnVtYmVyID0ganNvbk9iamVjdFtcImxpbmVOdW1iZXJcIl1cbiAgICByZXN1bHQuaXNOYXRpdmVNZXRob2QgPSBqc29uT2JqZWN0W1wiaXNOYXRpdmVNZXRob2RcIl1cbiAgICByZXN1bHQuY2xhc3NOYW1lID0ganNvbk9iamVjdFtcImNsYXNzTmFtZVwiXVxuICAgIHJlc3VsdC5maWxlTmFtZSA9IGpzb25PYmplY3RbXCJmaWxlTmFtZVwiXVxuICAgIHJlc3VsdC5tZXRob2ROYW1lID0ganNvbk9iamVjdFtcIm1ldGhvZE5hbWVcIl1cbiAgICByZXN1bHQuc3RyaW5nID0ganNvbk9iamVjdFtcInN0cmluZ1wiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHMge1xuICBjaGlwUGFnZT86IG51bWJlclxuICBvdmVyYWxsUmVzdWx0PzogbnVtYmVyXG4gIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICBlbGFwc2VkVGltZT86IG51bWJlclxuICBlbGFwc2VkVGltZVJGSUQ/OiBudW1iZXJcbiAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gIHJmaWRSZXN1bHQ/OiBudW1iZXJcbiAgaGlnaFJlc29sdXRpb24/OiBib29sZWFuXG4gIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgdGV4dFJlc3VsdD86IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuICBkb2N1bWVudFBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uXG4gIGJhcmNvZGVQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvblxuICBtcnpQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvblxuICBpbWFnZVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlHcm91cFxuICByYXdSZXN1bHQ/OiBzdHJpbmdcbiAgZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24/OiBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgYXV0aGVudGljaXR5UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHRcbiAgYmFyY29kZVJlc3VsdD86IERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdFxuICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG5cbiAgZ2V0VGV4dEZpZWxkVmFsdWVCeVR5cGU/KHsgZmllbGRUeXBlLCBsY2lkID0gMCwgc291cmNlID0gLTEsIG9yaWdpbmFsID0gZmFsc2UgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgbGNpZD86IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBvcmlnaW5hbD86IGJvb2xlYW4gfSk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maW5kQnlUeXBlQW5kTGNpZChmaWVsZFR5cGUsIGxjaWQpXHJcbiAgICBpZiAoZmllbGQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgc291cmNlKVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiBvcmlnaW5hbCA/IHZhbHVlLm9yaWdpbmFsVmFsdWUgOiB2YWx1ZS52YWx1ZVxyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dEZpZWxkU3RhdHVzQnlUeXBlKGZpZWxkVHlwZTogbnVtYmVyLCBsY2lkPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnRleHRSZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbmRCeVR5cGVBbmRMY2lkKGZpZWxkVHlwZSwgbGNpZClcclxuICAgIHJldHVybiBmaWVsZCAhPSBudWxsID8gZmllbGQuc3RhdHVzIDogMFxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGU/KHsgZmllbGRUeXBlLCBzb3VyY2UgPSAtMSwgbGlnaHQgPSAtMSwgcGFnZUluZGV4ID0gLTEgfTogeyBmaWVsZFR5cGU6IG51bWJlciwgc291cmNlPzogbnVtYmVyLCBsaWdodD86IG51bWJlciwgcGFnZUluZGV4PzogbnVtYmVyIH0pOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZ3JhcGhpY1Jlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3VuZEZpZWxkcyA9IFtdXHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmdyYXBoaWNSZXN1bHQuZmllbGRzKSB7XHJcbiAgICAgIGlmIChmaWVsZC5maWVsZFR5cGUgPT09IGZpZWxkVHlwZSkge1xyXG4gICAgICAgIGZvdW5kRmllbGRzLnB1c2goZmllbGQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzb3VyY2UgIT09IC0xKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0uc291cmNlVHlwZSAhPT0gc291cmNlKSB7XHJcbiAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChsaWdodCAhPT0gLTEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5saWdodFR5cGUgIT09IGxpZ2h0KSB7XHJcbiAgICAgICAgICBmb3VuZEZpZWxkcy5zcGxpY2UoaSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm91bmRGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ucGFnZUluZGV4ICE9PSBwYWdlSW5kZXgpIHtcclxuICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3VuZEZpZWxkcy5sZW5ndGggPiAwID8gZm91bmRGaWVsZHNbMF0udmFsdWUgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXRRdWFsaXR5UmVzdWx0KHsgaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlLCBzZWN1cml0eUZlYXR1cmUgPSAtMSB9OiB7IGltYWdlUXVhbGl0eUNoZWNrVHlwZTogbnVtYmVyLCBzZWN1cml0eUZlYXR1cmU/OiBudW1iZXIgfSk6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzdWx0U3VtID0gMlxyXG4gICAgaWYgKHRoaXMuaW1hZ2VRdWFsaXR5ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFN1bVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5pbWFnZVF1YWxpdHkuaW1hZ2VRdWFsaXR5TGlzdCkge1xyXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlKSB7XHJcbiAgICAgICAgaWYgKHNlY3VyaXR5RmVhdHVyZSA9PT0gLTEpIHtcclxuICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0U3VtID0gMFxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGZpZWxkLnJlc3VsdCA9PT0gMSl7XHJcbiAgICAgICAgICAgIHJlc3VsdFN1bSA9IGZpZWxkLnJlc3VsdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuZmVhdHVyZVR5cGUgPT09IHNlY3VyaXR5RmVhdHVyZSkge1xyXG4gICAgICAgICAgcmVzdWx0U3VtID0gZmllbGQucmVzdWx0XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRTdW1cclxuICB9XHJcblxyXG4gIGZpbmRCeVR5cGVBbmRMY2lkPyh0eXBlOiBudW1iZXIsIGxjaWQ6IG51bWJlcik6IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcclxuICAgIGxldCBmaWVsZFxyXG4gICAgY29uc3QgZm91bmRGaWVsZHMgPSBbXVxyXG5cclxuICAgIGZvciAoZmllbGQgb2YgdGhpcy50ZXh0UmVzdWx0LmZpZWxkcykge1xyXG4gICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZvdW5kRmllbGRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvdW5kRmllbGQgPSBudWxsXHJcblxyXG4gICAgZm9yIChmaWVsZCBvZiBmb3VuZEZpZWxkcykge1xyXG4gICAgICBpZiAobGNpZCA9PT0gMCkge1xyXG4gICAgICAgIGZvdW5kRmllbGQgPSBmaWVsZFxyXG4gICAgICAgIGlmIChmaWVsZC5sY2lkID09PSBsY2lkKSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChmaWVsZC5sY2lkID09PSBsY2lkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRGaWVsZFxyXG4gIH1cclxuXHJcbiAgZmluZEJ5U291cmNlKGZpZWxkOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCwgc291cmNlVHlwZTogbnVtYmVyKTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB7XHJcbiAgICBsZXQgdmFsdWVcclxuICAgIGlmIChzb3VyY2VUeXBlID09PSAtMSkge1xyXG4gICAgICBjb25zdCBtcnpWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMylcclxuICAgICAgaWYgKG1yelZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG1yelZhbFxyXG4gICAgICB9XHJcbiAgICAgIHZhbHVlID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDE4KVxyXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpc3VhbFZhbCA9IHRoaXMuZmluZEJ5U291cmNlKGZpZWxkLCAxNylcclxuICAgICAgcmV0dXJuIHZpc3VhbFZhbCAhPSBudWxsID8gdmlzdWFsVmFsIDogbnVsbFxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZpZWxkLnZhbHVlcykge1xyXG4gICAgICBpZiAoaXRlbS5zb3VyY2VUeXBlID09PSBzb3VyY2VUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJlc3VsdHNcblxuICAgIHJlc3VsdC5jaGlwUGFnZSA9IGpzb25PYmplY3RbXCJjaGlwUGFnZVwiXVxuICAgIHJlc3VsdC5vdmVyYWxsUmVzdWx0ID0ganNvbk9iamVjdFtcIm92ZXJhbGxSZXN1bHRcIl1cbiAgICByZXN1bHQucHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1c1wiXVxuICAgIHJlc3VsdC5lbGFwc2VkVGltZSA9IGpzb25PYmplY3RbXCJlbGFwc2VkVGltZVwiXVxuICAgIHJlc3VsdC5lbGFwc2VkVGltZVJGSUQgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVSRklEXCJdXG4gICAgcmVzdWx0Lm1vcmVQYWdlc0F2YWlsYWJsZSA9IGpzb25PYmplY3RbXCJtb3JlUGFnZXNBdmFpbGFibGVcIl1cbiAgICByZXN1bHQucmZpZFJlc3VsdCA9IGpzb25PYmplY3RbXCJyZmlkUmVzdWx0XCJdXG4gICAgcmVzdWx0LmhpZ2hSZXNvbHV0aW9uID0ganNvbk9iamVjdFtcImhpZ2hSZXNvbHV0aW9uXCJdXG4gICAgcmVzdWx0LmdyYXBoaWNSZXN1bHQgPSBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImdyYXBoaWNSZXN1bHRcIl0pXG4gICAgcmVzdWx0LnRleHRSZXN1bHQgPSBEb2N1bWVudFJlYWRlclRleHRSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInRleHRSZXN1bHRcIl0pXG4gICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24gPSBFbGVtZW50UG9zaXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0pXG4gICAgcmVzdWx0LmJhcmNvZGVQb3NpdGlvbiA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYmFyY29kZVBvc2l0aW9uXCJdKVxuICAgIHJlc3VsdC5tcnpQb3NpdGlvbiA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0pXG4gICAgcmVzdWx0LmltYWdlUXVhbGl0eSA9IEltYWdlUXVhbGl0eUdyb3VwLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl0pXG4gICAgcmVzdWx0LnJhd1Jlc3VsdCA9IGpzb25PYmplY3RbXCJyYXdSZXN1bHRcIl1cbiAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgcmVzdWx0LnJmaWRTZXNzaW9uRGF0YSA9IFJGSURTZXNzaW9uRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmZpZFNlc3Npb25EYXRhXCJdKVxuICAgIHJlc3VsdC5hdXRoZW50aWNpdHlSZXN1bHQgPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXV0aGVudGljaXR5UmVzdWx0XCJdKVxuICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgIHJlc3VsdC5kb2N1bWVudFR5cGUgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdKSB7XG4gICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRUeXBlXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBDYXB0dXJlTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBUFRVUkVfVklERU86IDEsXG4gICAgQ0FQVFVSRV9GUkFNRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5zSWRlbnRpdHlEb2N1bWVudDogMTUsXG4gICAgZHRJZGVudGl0eUNhcmRmb3JSZXNpZGVuY2U6IDE2LFxuICAgIGR0VHJhdmVsZG9jdW1lbnQ6IDE3LFxuICAgIGR0T3RoZXI6IDk5LFxuICAgIGR0VmlzYUlEMjogMjksXG4gICAgZHRWaXNhSUQzOiAzMCxcbiAgICBkdFJlZ2lzdHJhdGlvbkNlcnRpZmljYXRlOiAzMSxcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5kdHVjdGlvbmFsUGVybWl0OiAzOSxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMTg6IDQwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNDEsXG4gICAgZHRDb21tZXJjaWFsSW5kdHVjdGlvblBlcm1pdDogNDIsXG4gICAgZHRDb21tZXJjaWFsTmV3UGVybWl0OiA0MyxcbiAgICBkdENvbmNlYWxlZENhcnJ5TGljZW5zZTogNDQsXG4gICAgZHRDb25jZWFsZWRGaXJlYXJtUGVybWl0OiA0NSxcbiAgICBkdENvbmRpdGlvbmFsRHJpdmluZ0xpY2Vuc2U6IDQ2LFxuICAgIGR0RGVwYXJ0bWVudE9mVmV0ZXJhbnNBZmZhaXJzSWRlbnRpdHlDYXJkOiA0NyxcbiAgICBkdERpcGxvbWF0aWNEcml2aW5nTGljZW5zZTogNDgsXG4gICAgZHREcml2aW5nTGljZW5zZTogNDksXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluZHR1Y3Rpb25hbFBlcm1pdFVuZGVyMTg6IDUxLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VJbmR0dWN0aW9uYWxQZXJtaXRVbmRlcjIxOiA1MixcbiAgICBkdERyaXZpbmdMaWNlbnNlTGVhcm5lcnNQZXJtaXQ6IDUzLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMTg6IDU0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdFVuZGVyMjE6IDU1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2U6IDU2LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiA1NyxcbiAgICBkdERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogNTgsXG4gICAgZHREcml2aW5nTGljZW5zZVJlZ2lzdGVyZWRPZmZlbmRlcjogNTksXG4gICAgZHREcml2aW5nTGljZW5zZVJlZHRpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZWR0aWN0ZWRVbmRlcjIxOiA2MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvcjogNjIsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjE4OiA2MyxcbiAgICBkdERyaXZpbmdMaWNlbnNlVGVtcG9yYXJ5VmlzaXRvclVuZGVyMjE6IDY0LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA2NSxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIyMTogNjYsXG4gICAgZHRFbXBsb3ltZW50RHJpdmluZ1Blcm1pdDogNjcsXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2U6IDY4LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogNjksXG4gICAgZHRFbmhhbmNlZENoYXVmZmV1ckxpY2Vuc2VVbmRlcjIxOiA3MCxcbiAgICBkdEVuaGFuY2VkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiA3MSxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2U6IDcyLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDczLFxuICAgIGR0RW5oYW5jZWREcml2aW5nTGljZW5zZVVuZGVyMjE6IDc0LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmQ6IDc1LFxuICAgIGR0RW5oYW5jZWRJZGVudGl0eUNhcmRVbmRlcjE4OiA3NixcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIyMTogNzcsXG4gICAgZHRFbmhhbmNlZE9wZXJhdG9yc0xpY2Vuc2U6IDc4LFxuICAgIGR0RmlyZWFybXNQZXJtaXQ6IDc5LFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZTogODAsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogODEsXG4gICAgZHRGdWxsUHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogODIsXG4gICAgZHRHZW5ldmFDb252ZW50aW9uc0lkZW50aXR5Q2FyZDogODMsXG4gICAgZHRHcmFkdWF0ZWREcml2aW5nTGljZW5zZVVuZGVyMTg6IDg0LFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA4NSxcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiA4NixcbiAgICBkdEdyYWR1YXRlZEluZHR1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXQ6IDEwMixcbiAgICBkdEluZHR1Y3Rpb25QZXJtaXRVbmRlcjE4OiAxMDMsXG4gICAgZHRJbmR0dWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5kdHVjdGlvbmFsUGVybWl0OiAxMTEsXG4gICAgZHRMZWFybmVyTGljZW5zZTogMTEyLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjE4OiAxMTMsXG4gICAgZHRMZWFybmVyTGljZW5zZVVuZGVyMjE6IDExNCxcbiAgICBkdExlYXJuZXJQZXJtaXQ6IDExNSxcbiAgICBkdExlYXJuZXJQZXJtaXRVbmRlcjE4OiAxMTYsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIyMTogMTE3LFxuICAgIGR0TGltaXRlZExpY2Vuc2U6IDExOCxcbiAgICBkdExpbWl0ZWRQZXJtaXQ6IDExOSxcbiAgICBkdExpbWl0ZWRUZXJtRHJpdmluZ0xpY2Vuc2U6IDEyMCxcbiAgICBkdExpbWl0ZWRUZXJtSWRlbnRpdHlDYXJkOiAxMjEsXG4gICAgZHRMaXF1b3JJZGVudGl0eUNhcmQ6IDEyMixcbiAgICBkdE5ld1Blcm1pdDogMTIzLFxuICAgIGR0TmV3UGVybWl0VW5kZXIxODogMTI0LFxuICAgIGR0TmV3UGVybWl0VW5kZXIyMTogMTI1LFxuICAgIGR0Tm9uVXNDaXRpemVuRHJpdmluZ0xpY2Vuc2U6IDEyNixcbiAgICBkdE9jY3VwYXRpb25hbERyaXZpbmdMaWNlbnNlOiAxMjcsXG4gICAgZHRPbmVpZGFUcmliZU9mSW5kaWFuc0lkZW50aXR5Q2FyZDogMTI4LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlOiAxMjksXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjE4OiAxMzAsXG4gICAgZHRPcGVyYXRvckxpY2Vuc2VVbmRlcjIxOiAxMzEsXG4gICAgZHRQZXJtYW5lbnREcml2aW5nTGljZW5zZTogMTMyLFxuICAgIGR0UGVybWl0VG9SZUVudGVyOiAxMzMsXG4gICAgZHRQcm9iYXRpb25hcnlBdXRvTGljZW5zZTogMTM0LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzUsXG4gICAgZHRQcm9iYXRpb25hcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEzNixcbiAgICBkdFByb2JhdGlvbmFyeVZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDEzNyxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2U6IDEzOCxcbiAgICBkdFByb3Zpc2lvbmFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMzksXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTQwLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlOiAxNDEsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjE4OiAxNDIsXG4gICAgZHRQcm92aXNpb25hbExpY2Vuc2VVbmRlcjIxOiAxNDMsXG4gICAgZHRQdWJsaWNQYXNzZW5nZXJDaGF1ZmZldXJMaWNlbnNlOiAxNDQsXG4gICAgZHRSYWNpbmdBbmRHYW1pbmdDb21pc3Npb25DYXJkOiAxNDUsXG4gICAgZHRSZWZ1Z2VlVHJhdmVsRG9jdW1lbnQ6IDE0NixcbiAgICBkdFJlbmV3YWxQZXJtaXQ6IDE0NyxcbiAgICBkdFJlZHRpY3RlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMTQ4LFxuICAgIGR0UmVkdGljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlZHRpY3RlZFBlcm1pdDogMTUwLFxuICAgIGR0U2Vhc29uYWxQZXJtaXQ6IDE1MSxcbiAgICBkdFNlYXNvbmFsUmVzaWRlbnRJZGVudGl0eUNhcmQ6IDE1MixcbiAgICBkdFNlbmlvckNpdGl6ZW5JZGVudGl0eUNhcmQ6IDE1MyxcbiAgICBkdFNleE9mZmVuZGVyOiAxNTQsXG4gICAgZHRTb2NpYWxTZWN1cml0eUNhcmQ6IDE1NSxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlOiAxNTYsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE1NyxcbiAgICBkdFRlbXBvcmFyeURyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTU4LFxuICAgIGR0VGVtcG9yYXJ5SWRlbnRpdHlDYXJkOiAxNTksXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkOiAxNjAsXG4gICAgZHRUZW1wb3JhcnlJbmR0dWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5kdHVjdGlvblBlcm1pdElkZW50aXR5Q2FyZFVuZGVyMjE6IDE2MixcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZTogMTYzLFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIxODogMTY0LFxuICAgIGR0VGVtcG9yYXJ5VmlzaXRvckRyaXZpbmdMaWNlbnNlVW5kZXIyMTogMTY1LFxuICAgIGR0VW5pZm9ybWVkU2VydmljZXNJZGVudGl0eUNhcmQ6IDE2NixcbiAgICBkdFZlaGljbGVTYWxlc3BlcnNvbkxpY2Vuc2U6IDE2NyxcbiAgICBkdFdvcmtlcklkZW50aWZpY2F0aW9uQ3JlZGVudGlhbDogMTY4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlOiAxNjksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjE4OiAxNzAsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiAxNzEsXG4gICAgZHRQYXNzcG9ydENhcmQ6IDE3MixcbiAgICBkdFBlcm1hbmVudFJlc2lkZW50Q2FyZDogMTczLFxuICAgIGR0UGVyc29uYWxJZGVudGlmaWNhdGlvblZlcmlmaWNhdGlvbjogMTc0LFxuICAgIGR0VGVtcG9yYXJ5T3BlcmF0b3JMaWNlbnNlOiAxNzUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMTk6IDE3NixcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMTk6IDE3NyxcbiAgICBkdFZpc2E6IDE3OCxcbiAgICBkdFRlbXBvcmFyeVBhc3Nwb3J0OiAxNzksXG4gICAgZHRWb3RpbmdDYXJkOiAxODAsXG4gICAgZHRIZWFsdGhDYXJkOiAxODEsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mQ2l0aXplbnNoaXA6IDE4MixcbiAgICBkdEFkZHJlc3NDYXJkOiAxODMsXG4gICAgZHRBaXJwb3J0SW1taWdyYXRpb25DYXJkOiAxODQsXG4gICAgZHRBbGllblJlZ2lkdGF0aW9uQ2FyZDogMTg1LFxuICAgIGR0QVBFSENhcmQ6IDE4NixcbiAgICBkdENvdXBvbnRvRHJpdmluZ0xpY2Vuc2U6IDE4NyxcbiAgICBkdENyZXdNZW1iZXJDZXJ0aWZpY2F0ZTogMTg4LFxuICAgIGR0RG9jdW1lbnRGb3JSZXR1cm46IDE4OSxcbiAgICBkdEVDYXJkOiAxOTAsXG4gICAgZHRFbXBsb3ltZW50Q2FyZDogMTkxLFxuICAgIGR0SEtTQVJJbW1pZ3JhdGlvbkZvcm06IDE5MixcbiAgICBkdEltbWlncmFudGNhcmQ6IDE5MyxcbiAgICBkdExhYm91ckNhcmQ6IDE5NCxcbiAgICBkdExhaXNzZXpQYXNzZXI6IDE5NSxcbiAgICBkdExhd3llcklkZW50aXR5Q2VydGlmaWNhdGU6IDE5NixcbiAgICBkdExpY2Vuc2VDYXJkOiAxOTcsXG4gICAgZHRQYXNzcG9ydFN0YXRlbGVzczogMTk4LFxuICAgIGR0UGFzc3BvcnRDaGlsZDogMTk5LFxuICAgIGR0UGFzc3BvcnRDb25zdWxhcjogMjAwLFxuICAgIGR0UGFzc3BvcnREaXBsb21hdGljU2VydmljZTogMjAxLFxuICAgIGR0UGFzc3BvcnRPZmZpY2lhbDogMjAyLFxuICAgIGR0UGFzc3BvcnRQcm92aXNpb25hbDogMjAzLFxuICAgIGR0UGFzc3BvcnRTcGVjaWFsOiAyMDQsXG4gICAgZHRQZXJtaXNzaW9udG90aGVMb2NhbEJvcmRlclRyYWZmaWM6IDIwNSxcbiAgICBkdFNFREVTT0xDYXJkOiAyMDcsXG4gICAgZHRTb2NpYWxDYXJkOiAyMDgsXG4gICAgZHRUQkNhcmQ6IDIwOSxcbiAgICBkdFZlaGljbGVQYXNzcG9ydDogMjEwLFxuICAgIGR0V0RvY3VtZW50OiAyMTEsXG4gICAgZHREaXBsb21hdGljSWRlbnRpdHlDYXJkOiAyMTIsXG4gICAgZHRDb25zdWxhcklkZW50aXR5Q2FyZDogMjEzLFxuICAgIGR0SW5jb21lVGF4Q2FyZDogMjE0LFxuICAgIGR0UmVzaWRlbmNlUGVybWl0OiAyMTUsXG4gICAgZHREb2N1bWVudE9mSWRlbnRpdHk6IDIxNixcbiAgICBkdEJvcmRlckNyb3NzaW5nUGVybWl0OiAyMTcsXG4gICAgZHRQYXNzcG9ydExpbWl0ZWRWYWxpZGl0eTogMjE4LFxuICAgIGR0U0lNQ2FyZDogMjE5LFxuICAgIGR0VGF4Q2FyZDogMjIwLFxuICAgIGR0Q29tcGFueUNhcmQ6IDIyMSxcbiAgICBkdERvbWVzdGljUGFzc3BvcnQ6IDIyMixcbiAgICBkdElkZW50aXR5Q2VydGlmaWNhdGU6IDIyMyxcbiAgICBkdFJlc2lkZW50SWRDYXJkOiAyMjQsXG4gICAgZHRBcm1lZEZvcmNlc0lkZW50aXR5Q2FyZDogMjI1LFxuICAgIGR0UHJvZmVzc2lvbmFsQ2FyZDogMjI2LFxuICAgIGR0UmVnaXN0cmF0aW9uU3RhbXA6IDIyNyxcbiAgICBkdERyaXZlckNhcmQ6IDIyOCxcbiAgICBkdERyaXZlclRyYWluaW5nQ2VydGlmaWNhdGU6IDIyOSxcbiAgICBkdFF1YWxpZmljYXRpb25Ecml2aW5nTGljZW5zZTogMjMwLFxuICAgIGR0TWVtYmVyc2hpcENhcmQ6IDIzMSxcbiAgICBkdFB1YmxpY1ZlaGljbGVEcml2ZXJBdXRob3JpdHlDYXJkOiAyMzIsXG4gICAgZHRNYXJpbmVMaWNlbnNlOiAyMzMsXG4gICAgZHRUZW1wb3JhcnlMZWFybmVyRHJpdmluZ0xpY2Vuc2U6IDIzNCxcbiAgICBkdFRlbXBvcmFyeUNvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogMjM1LFxuICAgIGR0SW50ZXJpbUluc3RydWN0aW9uYWxQZXJtaXQ6IDIzNixcbiAgICBkdENlcnRpZmljYXRlT2ZDb21wZXRlbmN5OiAyMzcsXG4gICAgZHRDZXJ0aWZpY2F0ZU9mUHJvZmljaWVuY3k6IDIzOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBJRDNfeDI6IDUsXG4gICAgQ1VTVE9NOiAxMDAwLFxuICAgIEZMRVhJQkxFOiAxMDAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jUmVhZGVyQWN0aW9uID0ge1xuICAgIENPTVBMRVRFOiAxLFxuICAgIFBST0NFU1M6IDAsXG4gICAgQ0FOQ0VMOiAyLFxuICAgIEVSUk9SOiAzLFxuICAgIE5PVElGSUNBVElPTjogNSxcbiAgICBQUk9DRVNTX1dISVRFX1VWX0lNQUdFUzogNixcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogOCxcbn1cblxuZXhwb3J0IGNvbnN0IERvY1JlYWRlckZyYW1lID0ge1xuICAgIE1BWDogXCJtYXhcIixcbiAgICBTQ0VOQVJJT19ERUZBVUxUOiBcImlkMVwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxuICAgIERPQ1VNRU5UOiBcImRvY3VtZW50XCIsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBST1RBVEU6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRSZWFkZXJFeGNlcHRpb24gPSB7XG4gICAgTkFUSVZFX0pBVkFfRVhDRVBUSU9OOiAwLFxuICAgIERPQ1VNRU5UX1JFQURFUl9TVEFURV9FWENFUFRJT046IDEsXG4gICAgRE9DVU1FTlRfUkVBREVSX1dST05HX0lOUFVUOiAyLFxuICAgIERPQ1VNRU5UX1JFQURFUl9CTEVfRVhDRVBUSU9OOiAyMDEsXG4gICAgREJfRE9XTkxPQURfRVJST1I6IDMwMSxcbiAgICBMSUNFTlNFX0FCU0VOVF9PUl9DT1JSVVBURUQ6IDEwMSxcbiAgICBMSUNFTlNFX0lOVkFMSURfREFURTogMTAyLFxuICAgIExJQ0VOU0VfSU5WQUxJRF9WRVJTSU9OOiAxMDMsXG4gICAgTElDRU5TRV9JTlZBTElEX0RFVklDRV9JRDogMTA0LFxuICAgIExJQ0VOU0VfSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiAxMDUsXG4gICAgTElDRU5TRV9OT19DQVBBQklMSVRJRVM6IDEwNixcbiAgICBMSUNFTlNFX05PX0FVVEhFTlRJQ0lUWTogMTA3LFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrRGlhZ25vc2UgPSB7XG4gICAgVU5LTk9XTjogMCxcbiAgICBQQVNTOiAxLFxuICAgIElOVkFMSURfSU5QVVRfREFUQTogMixcbiAgICBJTlRFUk5BTF9FUlJPUjogMyxcbiAgICBFWENFUFRJT05fSU5fTU9EVUxFOiA0LFxuICAgIFVOQ0VSVEFJTl9WRVJJRklDQVRJT046IDUsXG4gICAgTkVDRVNTQVJZX0lNQUdFX05PVF9GT1VORDogNyxcbiAgICBQSE9UT19TSURFU19OT1RfRk9VTkQ6IDgsXG4gICAgSU5WQUxJRF9DSEVDS1NVTTogMTAsXG4gICAgU1lOVEFYX0VSUk9SOiAxMSxcbiAgICBMT0dJQ19FUlJPUjogMTIsXG4gICAgU09VUkNFU19DT01QQVJJU09OX0VSUk9SOiAxMyxcbiAgICBGSUVMRFNfQ09NUEFSSVNPTl9MT0dJQ19FUlJPUjogMTQsXG4gICAgSU5WQUxJRF9GSUVMRF9GT1JNQVQ6IDE1LFxuICAgIFRSVUVfTFVNSU5JU0NFTkNFX0VSUk9SOiAyMCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIxLFxuICAgIEZJWEVEX1BBVFRFUk5fRVJST1I6IDIyLFxuICAgIExPV19DT05UUkFTVF9JTl9JUl9MSUdIVDogMjMsXG4gICAgSU5DT1JSRUNUX0JBQ0tHUk9VTkRfTElHSFQ6IDI0LFxuICAgIEJBQ0tHUk9VTkRfQ09NUEFSSVNPTl9FUlJPUjogMjUsXG4gICAgSU5DT1JSRUNUX1RFWFRfQ09MT1I6IDI2LFxuICAgIFBIT1RPX0ZBTFNFX0xVTUlOSVNDRU5DRTogMjcsXG4gICAgVE9PX01VQ0hfU0hJRlQ6IDI4LFxuICAgIEZJQkVSU19OT1RfRk9VTkQ6IDMwLFxuICAgIFRPT19NQU5ZX09CSkVDVFM6IDMxLFxuICAgIFNQRUNLU19JTl9VVjogMzMsXG4gICAgVE9PX0xPV19SRVNPTFVUSU9OOiAzNCxcbiAgICBJTlZJU0lCTEVfRUxFTUVOVF9QUkVTRU5UOiA0MCxcbiAgICBWSVNJQkxFX0VMRU1FTlRfQUJTRU5UOiA0MSxcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9DT0xPUkVEOiA0MixcbiAgICBFTEVNRU5UX1NIT1VMRF9CRV9HUkFZU0NBTEU6IDQzLFxuICAgIFBIT1RPX1dISVRFX0lSX0RPTlRfTUFUQ0g6IDQ0LFxuICAgIFVWX0RVTExfUEFQRVJfTVJaOiA1MCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fTVJaOiA1MSxcbiAgICBVVl9EVUxMX1BBUEVSX1BIT1RPOiA1MixcbiAgICBVVl9EVUxMX1BBUEVSX0JMQU5LOiA1MyxcbiAgICBVVl9EVUxMX1BBUEVSX0VSUk9SOiA1NCxcbiAgICBGQUxTRV9MVU1JTklTQ0VOQ0VfSU5fQkxBTks6IDU1LFxuICAgIEJBRF9BUkVBX0lOX0FYSUFMOiA2MCxcbiAgICBGQUxTRV9JUElfUEFSQU1FVEVSUzogNjUsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9ISUdITElHSFRfSVI6IDgwLFxuICAgIEZJRUxEX1BPU19DT1JSRUNUT1JfR0xBUkVTX0lOX1BIT1RPX0FSRUE6IDgxLFxuICAgIE9WSV9JUl9JTlZJU0lCTEU6IDkwLFxuICAgIE9WSV9JTlNVRkZJQ0lFTlRfQVJFQTogOTEsXG4gICAgT1ZJX0NPTE9SX0lOVkFSSUFCTEU6IDkyLFxuICAgIE9WSV9CQURfQ09MT1JfRlJPTlQ6IDkzLFxuICAgIE9WSV9CQURfQ09MT1JfU0lERTogOTQsXG4gICAgT1ZJX1dJREVfQ09MT1JfU1BSRUFEOiA5NSxcbiAgICBPVklfQkFEX0NPTE9SX1BFUkNFTlQ6IDk2LFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfQUJTRU5UOiAxMDAsXG4gICAgSE9MT0dSQU1fU0lERV9UT1BfSU1BR0VTX0FCU0VOVDogMTAxLFxuICAgIEhPTE9HUkFNX0VMRU1FTlRfUFJFU0VOVDogMTAyLFxuICAgIEhPTE9HUkFNX0ZSQU1FU19JU19BQlNFTlQ6IDEwMyxcbiAgICBIT0xPR1JBTV9IT0xPX0ZJRUxEX0lTX0FCU0VOVDogMTA0LFxuICAgIFBIT1RPX1BBVFRFUk5fSU5URVJSVVBURUQ6IDExMCxcbiAgICBQSE9UT19QQVRURVJOX1NISUZURUQ6IDExMSxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9DT0xPUlM6IDExMixcbiAgICBQSE9UT19QQVRURVJOX0lSX1ZJU0lCTEU6IDExMyxcbiAgICBQSE9UT19QQVRURVJOX05PVF9JTlRFUlNFQ1Q6IDExNCxcbiAgICBQSE9UT19TSVpFX0lTX1dST05HOiAxMTUsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlZBTElEX0NPTE9SOiAxMTYsXG4gICAgUEhPVE9fUEFUVEVSTl9TSElGVEVEX1ZFUlQ6IDExNyxcbiAgICBQSE9UT19QQVRURVJOX1BBVFRFUk5fTk9UX0ZPVU5EOiAxMTgsXG4gICAgUEhPVE9fUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxMTksXG4gICAgUEhPVE9fSVNfTk9UX1JFQ1RBTkdMRTogMTIwLFxuICAgIFBIT1RPX0NPUk5FUlNfSVNfV1JPTkc6IDEyMSxcbiAgICBET0NVTUVOVF9JU19DQU5DRUxMSU5HOiAxMjIsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfQkxVRTogMTMwLFxuICAgIFRFWFRfQ09MT1JfU0hPVUxEX0JFX0dSRUVOOiAxMzEsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfUkVEOiAxMzIsXG4gICAgVEVYVF9TSE9VTERfQkVfQkxBQ0s6IDEzMyxcbiAgICBCQVJDT0RFX1dBU19SRUFEX1dJVEhfRVJST1JTOiAxNDAsXG4gICAgQkFSQ09ERV9EQVRBX0ZPUk1BVF9FUlJPUjogMTQxLFxuICAgIEJBUkNPREVfU0laRV9QQVJBTVNfRVJST1I6IDE0MixcbiAgICBOT1RfQUxMX0JBUkNPREVTX1JFQUQ6IDE0MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1BPUlRSQUlUU19ESUZGRVI6IDE1MCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfUkVQTFk6IDE1MSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX1NFUlZJQ0VfRVJST1I6IDE1MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PVF9FTk9VR0hfSU1BR0VTOiAxNTMsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19MSVZFX1BIT1RPOiAxNTQsXG4gICAgUE9SVFJBSVRfQ09NUEFSSVNPTl9OT19TRVJWSUNFX0xJQ0VOU0U6IDE1NSxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1BPUlRSQUlUX0RFVEVDVEVEOiAxNTYsXG4gICAgTU9CSUxFX0lNQUdFU19VTlNVSVRBQkxFX0xJR0hUX0NPTkRJVElPTlM6IDE2MCxcbiAgICBNT0JJTEVfSU1BR0VTX1dISVRFX1VWX05PX0RJRkZFUkVOQ0U6IDE2MSxcbiAgICBGSU5HRVJQUklOVFNfQ09NUEFSSVNPTl9NSVNNQVRDSDogMTcwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9OT1RfREVURUNURUQ6IDE4MCxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfQ09NUEFSSVNPTl9GQUlMRUQ6IDE4MSxcbiAgICBIT0xPX1BIT1RPX0ZBQ0VfR0xBUkVfSU5fQ0VOVEVSX0FCU0VOVDogMTgyLFxuICAgIEhPTE9fRUxFTUVOVF9TSEFQRV9FUlJPUjogMTgzLFxuICAgIEFMR09SSVRITV9TVEVQU19FUlJPUjogMTg0LFxuICAgIEhPTE9fQVJFQVNfTk9UX0xPQURFRDogMTg1LFxuICAgIEZJTklTSEVEX0JZX1RJTUVPVVQ6IDE4NixcbiAgICBMQVNUX0RJQUdOT1NFX1ZBTFVFOiAxOTAsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tSZXN1bHQgPSB7XG4gICAgQ0hfQ0hFQ0tfRVJST1I6IDAsXG4gICAgQ0hfQ0hFQ0tfT0s6IDEsXG4gICAgQ0hfQ0hFQ0tfV0FTX05PVF9ET05FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZUdyYXBoaWNGaWVsZFR5cGUgPSB7XG4gICAgR0ZfUE9SVFJBSVQ6IDIwMSxcbiAgICBHRl9GSU5HRVJQUjogMjAyLFxuICAgIEdGX0VZRTogMjAzLFxuICAgIEdGX1NJR05BVFVSRTogMjA0LFxuICAgIEdGX0JBUl9DT0RFOiAyMDUsXG4gICAgR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6IDIwNixcbiAgICBHRl9ET0NVTUVOVF9JTUFHRTogMjA3LFxuICAgIEdGX0NPTE9SX0RZTkFNSUM6IDIwOSxcbiAgICBHRl9HSE9TVF9QT1JUUkFJVDogMjEwLFxuICAgIEdGX1NUQU1QOiAyMTEsXG4gICAgR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6IDIxMixcbiAgICBHRl9PVEhFUjogMjUwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1RIVU1COiAzMDAsXG4gICAgR0ZfRklOR0VSX0xFRlRfSU5ERVg6IDMwMSxcbiAgICBHRl9GSU5HRVJfTEVGVF9NSURETEU6IDMwMixcbiAgICBHRl9GSU5HRVJfTEVGVF9SSU5HOiAzMDMsXG4gICAgR0ZfRklOR0VSX0xFRlRfTElUVExFOiAzMDQsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1RIVU1COiAzMDUsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0lOREVYOiAzMDYsXG4gICAgR0ZfRklOR0VSX1JJR0hUX01JRERMRTogMzA3LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9SSU5HOiAzMDgsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTogMzA5LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUlBSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9FWUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXJpc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU0lHTkFUVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfQkFSX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFyY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvb2Ygb2YgY2l0aXplbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0RPQ1VNRU5UX0lNQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGltYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9DT0xPUl9EWU5BTUlDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbG9yIGR5bmFtaWNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9HSE9TVF9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaG9zdCBwb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU1RBTVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BPUlRSQUlUX09GX0NISUxEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0IG9mIGNoaWxkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9PVEhFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCB0aHVtYlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX01JRERMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCByaW5nIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1RIVU1COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgaW5kZXggZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9SSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IGxpdHRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZUltYWdlUXVhbGl0eUNoZWNrVHlwZSA9IHtcbiAgICBJUUNfSU1BR0VfR0xBUkVTOiAwLFxuICAgIElRQ19JTUFHRV9GT0NVUzogMSxcbiAgICBJUUNfSU1BR0VfUkVTT0xVVElPTjogMixcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDMsXG4gICAgSVFDX0JPVU5EUzogNCxcbn1cblxuZXhwb3J0IGNvbnN0IGVQcm9jZXNzR0xDb21tYW5kcyA9IHtcbiAgICBlUENfUHJvY01ncl9TZXRMaWNlbnNlOiAxMjEwMCxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzOiAxMjEwMSxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzQXN5bmM6IDEyMTAyLFxuICAgIGVQQ19Qcm9jTWdyX0luaXQ6IDEyMTAzLFxuICAgIGVQQ19Qcm9jTWdyX1Byb2Nlc3NJbWFnZTogMTIxMDQsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdEb2N1bWVudDogMTIxMDUsXG4gICAgZVBDX1Byb2NNZ3JfU3RhcnROZXdQYWdlOiAxMjEwNixcbiAgICBlUENfUHJvY01ncl9VbmxvYWQ6IDEyMTA3LFxuICAgIGVQQ19Qcm9jTWdyX0NoZWNrRGF0YWJhc2U6IDEyMTA5LFxuICAgIGVQQ19Qcm9jTWdyX0NvbXBhcmVQb3J0cmFpdHM6IDEyMTExLFxufVxuXG5leHBvcnQgY29uc3QgZVJlcXVlc3RDb21tYW5kID0ge1xuICAgIGVSZXFDbWRfUkZpZF9TZW5kRGF0YTogMTAwLFxuICAgIGVSZXFDbWRfUkZpZF9Ob3RpZnk6IDEwMSxcbiAgICBlUmVxQ21kX1JGaWRfR2V0RGF0YUZvclNjZW5hcmlvOiAxMDIsXG4gICAgZVJlcUNtZF9Ub3JjaF9HZXRVVkZvdG86IDIwMCxcbiAgICBlUmVxQ21kX0ludGVybmV0U2VuZDogMzAwLFxuICAgIGVSZXFDbWRfR2V0R3VpZDogNDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQWNjZXNzQ29udHJvbF9Qcm9jZWR1cmVUeXBlID0ge1xuICAgIEFDUFRfVU5ERUZJTkVEOiAwLFxuICAgIEFDUFRfQkFDOiAxLFxuICAgIEFDUFRfUEFDRTogMixcbiAgICBBQ1BUX0NBOiAzLFxuICAgIEFDUFRfVEE6IDQsXG4gICAgQUNQVF9BQTogNSxcbiAgICBBQ1BUX1JJOiA2LFxuICAgIEFDUFRfQ0FSRF9JTkZPOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0F1dGhlbnRpY2F0aW9uUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBhcHRVbmRlZmluZWQ6IDAsXG4gICAgYXB0U3RhbmRhcmQ6IDEsXG4gICAgYXB0QWR2YW5jZWQ6IDIsXG4gICAgYXB0R2VuZXJhbDogMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfQ2VydGlmaWNhdGVUeXBlID0ge1xuICAgIENUX1VOREVGSU5FRDogMCxcbiAgICBDVF9DU0NBOiAxLFxuICAgIENUX0NTQ0FfTElOSzogMixcbiAgICBDVF9EUzogMyxcbiAgICBDVF9NTFM6IDQsXG4gICAgQ1RfREVWX0xTOiA1LFxuICAgIENUX0RFRl9MUzogNixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0RhdGFGaWxlX1R5cGUgPSB7XG4gICAgREZUX1VOU1BFQ0lGSUVEOiAwLFxuICAgIERGVF9QQVNTUE9SVF9ERzE6IDEsXG4gICAgREZUX1BBU1NQT1JUX0RHMjogMixcbiAgICBERlRfUEFTU1BPUlRfREczOiAzLFxuICAgIERGVF9QQVNTUE9SVF9ERzQ6IDQsXG4gICAgREZUX1BBU1NQT1JUX0RHNTogNSxcbiAgICBERlRfUEFTU1BPUlRfREc2OiA2LFxuICAgIERGVF9QQVNTUE9SVF9ERzc6IDcsXG4gICAgREZUX1BBU1NQT1JUX0RHODogOCxcbiAgICBERlRfUEFTU1BPUlRfREc5OiA5LFxuICAgIERGVF9QQVNTUE9SVF9ERzEwOiAxMCxcbiAgICBERlRfUEFTU1BPUlRfREcxMTogMTEsXG4gICAgREZUX1BBU1NQT1JUX0RHMTI6IDEyLFxuICAgIERGVF9QQVNTUE9SVF9ERzEzOiAxMyxcbiAgICBERlRfUEFTU1BPUlRfREcxNDogMTQsXG4gICAgREZUX1BBU1NQT1JUX0RHMTU6IDE1LFxuICAgIERGVF9QQVNTUE9SVF9ERzE2OiAxNixcbiAgICBERlRfUEFTU1BPUlRfREcxNzogMTcsXG4gICAgREZUX1BBU1NQT1JUX0RHMTg6IDE4LFxuICAgIERGVF9QQVNTUE9SVF9ERzE5OiAxOSxcbiAgICBERlRfUEFTU1BPUlRfREcyMDogMjAsXG4gICAgREZUX1BBU1NQT1JUX1NPRDogMjEsXG4gICAgREZUX1BBU1NQT1JUX0NWQ0E6IDIyLFxuICAgIERGVF9QQVNTUE9SVF9DT006IDIzLFxuICAgIERGVF9JRF9ERzE6IDEwMSxcbiAgICBERlRfSURfREcyOiAxMDIsXG4gICAgREZUX0lEX0RHMzogMTAzLFxuICAgIERGVF9JRF9ERzQ6IDEwNCxcbiAgICBERlRfSURfREc1OiAxMDUsXG4gICAgREZUX0lEX0RHNjogMTA2LFxuICAgIERGVF9JRF9ERzc6IDEwNyxcbiAgICBERlRfSURfREc4OiAxMDgsXG4gICAgREZUX0lEX0RHOTogMTA5LFxuICAgIERGVF9JRF9ERzEwOiAxMTAsXG4gICAgREZUX0lEX0RHMTE6IDExMSxcbiAgICBERlRfSURfREcxMjogMTEyLFxuICAgIERGVF9JRF9ERzEzOiAxMTMsXG4gICAgREZUX0lEX0RHMTQ6IDExNCxcbiAgICBERlRfSURfREcxNTogMTE1LFxuICAgIERGVF9JRF9ERzE2OiAxMTYsXG4gICAgREZUX0lEX0RHMTc6IDExNyxcbiAgICBERlRfSURfREcxODogMTE4LFxuICAgIERGVF9JRF9ERzE5OiAxMTksXG4gICAgREZUX0lEX0RHMjA6IDEyMCxcbiAgICBERlRfSURfREcyMTogMTIxLFxuICAgIERGVF9ETF9DT006IDE1MCxcbiAgICBERlRfRExfREcxOiAxNTEsXG4gICAgREZUX0RMX0RHMjogMTUyLFxuICAgIERGVF9ETF9ERzM6IDE1MyxcbiAgICBERlRfRExfREc0OiAxNTQsXG4gICAgREZUX0RMX0RHNTogMTU1LFxuICAgIERGVF9ETF9ERzY6IDE1NixcbiAgICBERlRfRExfREc3OiAxNTcsXG4gICAgREZUX0RMX0RHODogMTU4LFxuICAgIERGVF9ETF9ERzk6IDE1OSxcbiAgICBERlRfRExfREcxMDogMTYwLFxuICAgIERGVF9ETF9ERzExOiAxNjEsXG4gICAgREZUX0RMX0RHMTI6IDE2MixcbiAgICBERlRfRExfREcxMzogMTYzLFxuICAgIERGVF9ETF9ERzE0OiAxNjQsXG4gICAgREZUX0RMX1NPRDogMTY1LFxuICAgIERGVF9ETF9DRTogMTY2LFxuICAgIERGVF9ETF9DVkNBOiAxNjcsXG4gICAgREZUX1BBQ0VfQ0FSREFDQ0VTUzogMjAwLFxuICAgIERGVF9QQUNFX0NBUkRTRUNVUklUWTogMjAxLFxuICAgIERGVF9QQUNFX0NISVBTRUNVUklUWTogMjAyLFxuICAgIERGVF9NSUZBUkVfREFUQTogMzAwLFxuICAgIERGVF9NSUZBUkVfVkFMSURJVFk6IDMwMSxcbiAgICBERlRfQVVUSEVOVElDSVRZVjI6IDMwMixcbiAgICBERlRfQVRSOiA0MDAsXG4gICAgREZUX0VTSUdOX1BLOiA1MDAsXG4gICAgREZUX0VTSUdOX1NJR05FRERBVEE6IDUwMSxcbiAgICBERlRfQ0VSVElGSUNBVEU6IDYwMCxcbiAgICBERlRfTUFTVEVSTElTVDogNjAxLFxuICAgIERGVF9ERUZFQ1RMSVNUOiA2MDIsXG4gICAgREZUX0RFVklBVElPTkxJU1Q6IDYwMyxcbiAgICBERlRfQVBQX0RJUkVDVE9SWTogNzAwLFxuICAgIERGVF9TRVNTSU9OOiA3MDEsXG4gICAgREZUX0xPR0RBVEE6IDcwMixcbiAgICBERlRfQ0hJUF9QUk9QRVJUSUVTOiA3MDMsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfQ09NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DT01cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFjaGluZSBSZWFkYWJsZSBab25lIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHR5cGVcIiArIFwiIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRleHQgZGF0YSBlbGVtZW50cyAoREcxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGVcIiArIFwiIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgaG9sZGVyIGluZm9ybWF0aW9uIChERzIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmluZ2VycHJpbnQocykgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIiArIFwiIChERzMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IGRldGFpbHMgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2l2ZW4gbmFtZVwiICsgXCIgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQgaW1hZ2UgKERHNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXQocykgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZS9naXZlbiBuYW1lIGF0IGJpcnRoXCIgKyBcIiAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiICsgXCIgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGYWNpYWwgZGF0YSAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaWduYXR1cmUgLyB1c3VhbCBtYXJrIGltYWdlIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjYWRlbWljIHRpdGxlXCIgKyBcIiAoREc3KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZpbmdlcnByaW50KHMpIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGhcIiArIFwiIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gSXJpcyBEYXRhIChERzgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoXCIgKyBcIiAoREc5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIE90aGVyIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub3QgZGVmaW5lZCAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCIgKyBcIiAoREcxMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBwZXJzb25hbCBkZXRhaWwocykgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXhcIiArIFwiIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZG9tZXN0aWMgZGF0YSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZGl0aW9uYWwgZG9jdW1lbnQgZGV0YWlscyAoREcxMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9uLW1hdGNoIGFsZXJ0IChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsKHMpIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUFDIGluZm8gKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY3RpdmUgQXV0aGVudGljYXRpb24gaW5mbyAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJzb24ocykgdG8gbm90aWZ5IChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMTdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIiArIFwiIChERzE4KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxOVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCIgKyBcIiAoREcxOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMjBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMlwiICsgXCIgKERHMjApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWxzXCIgKyBcIiAoREcyMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9TT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuU09EXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfU09EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLlNPRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ1ZDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNSUZBUkUgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NBUkRBQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRUYuQ2FyZEFjY2Vzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNoaXBTZWN1cml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVBQX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHAgZGlyZWN0b3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQVRSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9BVFJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9BVVRIRU5USUNJVFlWMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQ0hJUF9QUk9QRVJUSUVTXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQ0hJUF9QUk9QRVJUSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9DSElQX1BST1BFUlRJRVNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ERUZFQ1RMSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ERUZFQ1RMSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfREVWSUFUSU9OTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVWSUFUSU9OTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DRVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9QSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fUEtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9TSUdORUREQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9TSUdORUREQVRBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTE9HREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTE9HREFUQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01BU1RFUkxJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX01BU1RFUkxJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9TRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9TRVNTSU9OXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVU5TUEVDSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VOU1BFQ0lGSUVEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVVNFUkRFRklORUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VTRVJERUZJTkVEXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX05vdGlmaWNhdGlvbkFuZEVycm9yQ29kZXMgPSB7XG4gICAgUkZJRF9OT1RJRklDQVRJT05fRVJST1I6IDY1NTM2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0RPQ1VNRU5UX1JFQURZOiA2NTUzNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogNjU1MzksXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUkVBRF9QUk9UT0NPTDM6IDY1NTQ2LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BST0dSRVNTOiA2NTU0NyxcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiA2NTU1MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9SRVFVSVJFRDogNjU1NTEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fSVNPX0VSUk9SOiA2OTYzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiA3NzgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TTV9FU1RBQkxJU0hFRDogODE5MzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfRElTQ09OTkVDVEVEOiAxMzEwNzIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFERVJfTElTVF9DSEFOR0VEOiAxMzEwNzMsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMTMxMDc0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19USU1FOiAxMzEwNzUsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19EQVRBX1JFQ0VJVkVEOiAxMzEwNzYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAxMzEwNzcsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9SRUFESU5HX1NQRUVEOiAxMzEwNzgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19UT1RBTF9QUk9DRVNTX1RJTUU6IDEzMTA3OSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAxMzEwODAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FWFRfTEVOR1RIX1NVUFBPUlQ6IDEzMTA4OCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9DRVJUSUZJQ0FURV9DSEFJTjogMTMxMDg5LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDEzMTA5MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9TQ0VOQVJJTzogMTMxMTA0LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBRElOR19EQVRBR1JPVVA6IDE5NjYwOCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAyNjIxNDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19FTkRfT0ZfRklMRTogMzI3NjgwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRklMRV9BQ0NFU1NfREVOSUVEOiAzOTMyMTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogNDU4NzUyLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9TVEFSVDogNTI0Mjg4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0FDX1BST0NFRFVSRV9GSU5JU0g6IDU4OTgyNCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDY1NTM2MCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9GSUxFX0NIRUNLOiA3MjA4OTYsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19VUERBVElOR19EQVRBR1JPVVA6IDc4NjQzMixcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiA4NTE5NjgsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUklfU0VDVE9SX0lEOiA5MTc1MDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQklPTUVUUklDU19FTVBUWV9QTEFDRUhPTERFUjogOTgzMDQwLFxuICAgIFJGSURfRVJST1JfTk9fRVJST1I6IDEsXG4gICAgUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6IDIsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YxOiAtMjE0NzQ1ODQzMCxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6IC0yMTQ3NDU4NDI5LFxuICAgIFJGSURfTEFZRVI2X1BXRF9CTE9DS0VEOiAtMjE0NzQ1ODExMixcbiAgICBSRklEX0xBWUVSNl9QV0RfU1VTUEVOREVEOiAtMjE0NzQ1ODExMSxcbiAgICBSRklEX0xBWUVSNl9QV0RfQkxPQ0tFRF8yOiAtMjE0NzQ1NjYzNyxcbiAgICBSRklEX0xBWUVSNl9QV0RfREVBQ1RJVkFURURfMjogLTIxNDc0NTY2MzYsXG4gICAgUkZJRF9MQVlFUjZfUFdEX1NVU1BFTkRFRF8yOiAtMjE0NzQ1NjYzNSxcbiAgICBSRklEX0xBWUVSNl9NU0VfU0VUX0FUX0ZBSUxVUkU6IC0yMDQ2ODE5NTc4LFxuICAgIFJGSURfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IC0yMTQ3NDU2Mzg0LFxuICAgIFJGSURfTEFZRVI2X0ZJTEVfTk9UX0ZPVU5EOiAtMjE0NzQ1NjM4MixcbiAgICBSRklEX0xBWUVSNl9OT19SRUZFUkVOQ0VfREFUQTogLTIxNDc0NTYzNzYsXG4gICAgUkZJRF9MQVlFUjZfRklMRV9FT0YyOiAtMjE0NzQ1NjI1NixcbiAgICBSRklEX0Vycm9yX0dyYXBoTWFuYWdlcjogLTIxNDc0MTgxMTIsXG4gICAgUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOiAtMjE0NzQxODExMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IC0yMTQ3NDE4MTEwLFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6IC0yMTQ3NDE4MTA4LFxuICAgIFJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOiAtMjE0NzQxODEwNyxcbiAgICBSRklEX0Vycm9yX05vdEVub3VnaE1lbW9yeTogLTIxNDc0MTgxMDYsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTogLTIxNDc0MTgxMDQsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IC0yMTQ3NDE4MTAzLFxuICAgIFJGSURfRVJST1JfRklMRV9JT19FUlJPUjogLTIxNDc0MTgxMDIsXG4gICAgUkZJRF9FUlJPUl9CVVNZOiAtMjE0NzQxODEwMSxcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogLTIxNDc0MTgxMDAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDogLTIxNDczNTI1NzYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX1JFQURFUl9OT1RfQVZBSUxBQkxFOiAtMjE0NzM1MjU3NSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IC0yMTQ3MzUyNTc0LFxuICAgIFJGSURfRVJST1JfUENTQ19DQVJEX0lTX05PVF9DT05ORUNURUQ6IC0yMTQ3MzUyNTczLFxuICAgIFJGSURfRVJST1JfUENTQ19PUEVSQVRJT05fQ0FOQ0VMTEVEOiAtMjE0NzM1MjU3MixcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAtMjE0NzM1MjU3MSxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEX1NfQ0FSRDogLTIxNDczNTI1NzAsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IC0yMTQ3MzUyNTYwLFxuICAgIFJGSURfTEFZRVI2X1BXRF9GQUlMRUQ6IC0yMTQ2NDA5NTM2LFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogLTIwOTcxNTIwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lTX0NMT1NFRDogLTIwOTcxNTE5OTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1VOU1VQUE9SVEVEX09QRVJBVElPTjogLTIwOTcxNTE5OTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOiAtMjA5NzE1MTk4MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOiAtMjA5NzE1MTk4MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogLTIwOTcxNTE5ODEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOU1VQUE9SVEVEOiAtMjA5NzE1MTk4MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDogLTIwOTcxNTE5NzksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAtMjA5NzE1MTk3OCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTlNVUFBPUlRFRF9TTV9UWVBFOiAtMjA5NzE1MTk3NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTogLTIwOTcxNTE5NzYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogLTIwOTcxNTE5NzUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6IC0yMDk3MTUxOTc0LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX05PVF9TRVQ6IC0yMDk3MTUxOTczLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogLTIwOTcxNTE5NzIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTogLTIwOTcxNTE5NjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX1NNOiAtMjA5NzE1MTk2NyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogLTIwOTcxNTE5NjYsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBX0tFWVM6IC0yMDk3MTUxOTY1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTogLTIwOTcxNTE5NjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAtMjA5NzE1MTk2MyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTogLTIwOTcxNTE5NjIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0NBX0ZBSUxFRDogLTIwOTcxNTE5NjEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogLTIwOTcxNTE5NjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX0FBX0ZBSUxFRDogLTIwOTcxNTE5NTksXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JJX0ZBSUxFRDogLTIwOTcxNTE5NTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IC0yMDk3MTUxOTUyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QQV9IQVNIX0NIRUNLX0ZBSUxFRDogLTIwOTcxNTE5NTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfREFURV9PRl9FWFBJUlk6IC0yMDk3MTUxOTM2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IC0yMDk3MTUxOTM1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDogLTIwOTcxNTE5MzQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9SRVFVSVJFU19BUFBfU0VMRUNUSU9OOiAtMjA5NzE1MTkyMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAtMjA5NzE1MTkxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfVkVSSUZJRUQ6IC0yMDk3MTUxOTE4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTogLTIwOTcxNTE5MDQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAtMjA5NzA4NjQ2NCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9JTkNPUlJFQ1RfREFUQTogLTIwOTcwMjA5MjgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfVU5FWFBFQ1RFRF9EQVRBOiAtMjA5Njk1NTM5MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IC0yMDk2ODg5ODU2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1dST05HX1RBRzogLTIwOTY4MjQzMjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9VU0VfREFUQTogLTIwOTY3NTg3ODQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IC0yMDk2NjkzMjQ4LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0FDQ0VTU19ERU5JRUQ6IC0yMDk2NjI3NzEyLFxuICAgIFJGSURfTEFZRVI2X1NFQ1VSSVRZX01BTkFHRVI6IC0yMDQ2ODIwMzUyLFxuICAgIFJGSURfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTogLTIwNDY4MjAzNTEsXG4gICAgUkZJRF9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IC0yMDQ2ODIwMDk2LFxuICAgIFJGSURfTEFZRVI2X01VVFVBTF9BVVRIX0VOQ19GQUlMOiAtMjA0NjgyMDA5NSxcbiAgICBSRklEX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOiAtMjA0NjgyMDA5NCxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzhFX01JU1NJTkc6IC0yMDQ2ODE5ODQwLFxuICAgIFJGSURfTEFZRVI2X1NNX0RPODdfTUlTU0lORzogLTIwNDY4MTk4MzksXG4gICAgUkZJRF9MQVlFUjZfU01fRE85OV9NSVNTSU5HOiAtMjA0NjgxOTgzOCxcbiAgICBSRklEX0xBWUVSNl9TTV9NQUNfSU5DT1JSRUNUOiAtMjA0NjgxOTgzNyxcbiAgICBSRklEX0xBWUVSNl9TTV9ETzg3X0lOQ09SUkVDVDogLTIwNDY4MTk4MzYsXG4gICAgUkZJRF9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAtMjA0NjgxOTU4NCxcbiAgICBSRklEX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDogLTIwNDY4MTk1ODMsXG4gICAgUkZJRF9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1ODIsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogLTIwNDY4MTk1ODEsXG4gICAgUkZJRF9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTogLTIwNDY4MTk1ODAsXG4gICAgUkZJRF9MQVlFUjZfUFNPX0NFUlRJRklDQVRFX0ZBSUxVUkU6IC0yMDQ2ODE5NTc5LFxuICAgIFJGSURfTEFZRVI2X0dFVF9DSEFMTEVOR0VfRkFJTFVSRTogLTIwNDY4MTk1NzcsXG4gICAgUkZJRF9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogLTIwNDY4MTk1NzYsXG4gICAgUkZJRF9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6IC0yMDQ2ODE5NTc1LFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAtMSxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT0tcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzY0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogTm90IGVub3VnaCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBFbmNhcCBjb250ZW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gTERTIG9iamVjdDogRGlnZXN0IGFsZ29yaXRobSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IERHIGhhc2hlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5mbyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNOIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBJc3N1ZXIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogVmFsaWRpdHkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU3ViamVjdCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IFBLIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogVmVyc2lvbiBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogRGlnZXN0IGFsZ29yaXRobXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzYxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU2lnbiBhbGdvcml0aG1zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ25hdHVyZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNjA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBVbnNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM2MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBJQ0FPIExEUyBvYmplY3Q6IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgZGlnZXN0IGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFNpZ25lZCBhdHRyaWJ1dGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmVyIGluZm8gY2FudCBmaW5kIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1Njg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTY2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogVW5zdXBwb3J0ZWQgcHVibGljIGtleSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IE1lc3NlZCBhbGdvcml0aG1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBQdWJsaWMga2V5IGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDgzNTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogQWxnb3JpdGhtIHBhcmFtZXRlcnMgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgZGF0YSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgZGF0YSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ4MzU1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEFsZ29yaXRobSBwYXJhbWV0ZXJzIG5vdCBkZWZpbmVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0ODM1MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBERzogV3JvbmcgVGFnXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFN5bW1ldHJpYyBDeXBoZXIgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM5NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgQ2Fubm90IERlY29kZSBOb25jZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzk1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogU2hhcmVkIFNlY3JldCBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBEb21haW4gUGFyYW1zIFVuc3VwcG9ydGVkIEZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzOTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIEVwaGVtZXJhbCBLZXlzIEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgUGVyZm9ybVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzkwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTm9uIE1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgUHVibGljIEtleVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIEluZm9cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIERvbWFpbiBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogS2V5IEFncmVlbWVudCBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogRXBoZW1lcmFsIEtleXMgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2Mzc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IE5vbiBNYXRjaGluZyBBdXRoIFRva2Vuc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEluY29ycmVjdCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEJ1aWxkIENlcnRpZmljYXRlIENoYWluXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogQ2Fubm90IEZpbmQgSVMgUHJpdmF0ZSBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM2NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IFNpZ25hdHVyZSBCdWlsZGluZyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IEludmFsaWQgS2V5IEFsZ29yaXRobSBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzNTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5kZWZpbmVkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBTaWduYXR1cmUgSW5jb3JyZWN0IERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBVbnN1cHBvcnRlZCByZWNvdmVyeSBzY2hlbWVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjM0NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBJbmNvcnJlY3QgVHJhaWxlclwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzQ1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IENhbm5vdCBGaW5kXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUkk6IFNlY3RvciBLZXkgSW5jb21wbGV0ZSBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYzMzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogTWlzc2luZyBtYW5kYXRvcnkgZGF0YSBQS1wiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzM0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFB1YmxpYyBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIHVuc3VwcG9ydGVkIHRlcm1pbmFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjMzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MzMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGludmFsaWQgcGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDUEkgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDQVIgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQdWJsaWMga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIxMzA3MDYwNzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hBVCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDc0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIGZyb20gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBWYWxpZCB0byBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IEV4dGVuc2lvbnMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjEzMDcwNjA3MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQcml2YXRlIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTMwNzA2MDcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE5MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxOTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBOb24gbWF0Y2hpbmcgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IHRpbWUgY29kaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxODg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdXNlIG9mIGdlbmVyYWxpemVkIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEVtcHR5IGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgY3JpdGljYWwgZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgZGVmYXVsdCBDU0NBIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEZvcmNlZCBEZWZhdWx0IERTIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCBpc3N1ZXIgc3ViamVjdCBEU1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTY5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRHVwbGljYXRpbmcgZXh0ZW5zaW9uc1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjgwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFZlcnNpb24gbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY29tbW9uIG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGNvdW50cnkgbm9uIGNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3Njc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVXNpbmcgbm9uIGNvbXBsaWFudCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjcwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogTWlzc2VkIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBVc2luZyBub24gY29tcGxpYW50IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogS2V5IHVzYWdlIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2Ugbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY2MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAxXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAyXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogRXh0IGtleSB1c2FnZSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogS2V5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjUwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2NDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzY0MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG5vbiBjb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIG5vbiBjb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjM1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjI5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBub24gY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogTWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IERlcnQgcG9saWNpZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYyMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NjIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBDZXJ0IHBvbGljaWVzIHBvbGljeSBJRCBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzYxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc2MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBMRFMgdmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE1OTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBVbmljb2RlIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IFVuaWNvZGUgdmVyc2lvbiBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDgxNTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTU0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gQ09NOiBER1BNIHVuZXhwZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0ODE0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGFwcGxpY2F0aW9uOiBMRFMgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiB1bnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IExEUyB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ4MTQxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IFVuaWNvZGUgdmVyc2lvbiBpbmNvbnNpc3RlbnRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogU2lnbmVyIGluZm9zIG11bHRpcGxlIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0Nzc2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc3NTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ1JMcyBpbmNvcnJlY3QgdXNhZ2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkzMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIExEUyBvYmplY3Q6IEluY29ycmVjdCBjb250ZW50IE9JRFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgbnVtYmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBERyBoYXNoIGV4dHJhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3NzQ0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gbWFzdGVyIGxpc3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTI1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBjaG9pY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBkaWdlc3QgYWxnb3JpdGhtIG5vdCBsaXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkyMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IE1lc3NhZ2UgZGlnZXN0IGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTIyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzkwNDc5MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBDb250ZW50IHR5cGUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJvb3QgaXMgbm90IHRydXN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBjYW50IGZpbmQgQ1NDQVwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJldm9rZWRcIlxuICAgICAgICAgICAgY2FzZSAtMTg3OTA0NzkxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBzaWduYXR1cmUgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIC0xODc5MDQ3OTEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbjogVW5zdXBwb3J0ZWQgaW1hZ2UgZm9ybWF0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRG9jdW1lbnQgdHlwZSB1bmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjczOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSXNzdWluZyBzdGF0ZSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYW1lIGlzIHZvaWRcIlxuICAgICAgICAgICAgY2FzZSAxMzkyNzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOdW1iZXIgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogTmF0aW9uYWxpdHkgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgMTM5Mjc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9CIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPQiBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBTZXggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgMTM5MjgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRE9FIHN5bnRheCBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSAxMzkyODY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBPcHRpb25hbCBkYXRhIGluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIDEzOTI4ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4OTgyNjU2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg5MTcxMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4ODUxNTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCB0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODc4NjA0ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBGb3JtYXQgdHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODcyMDUxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBUeXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4NjU0OTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0xODc4NTg5NDQwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzg1MjM5MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGltYWdlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3ODQ1ODM2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZm9ybWF0IElEIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzkyODMyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIC0xODc4MzI3Mjk2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBkYXRhIGxlbmd0aCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzk5OTYxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBHZW5kZXJcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzkzNDA4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBFeWUgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSAtMTg3Nzg2ODU0NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBIYWlyIENvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc4MDMwMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBZYXdcIlxuICAgICAgICAgICAgY2FzZSAtMTg3NzczNzQ3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2NzE5MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc2MDY0MDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFlhd1wiXG4gICAgICAgICAgICBjYXNlIC0xODc3NTQwODY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIC0xODc3NDc1MzI4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBSb2xsXCJcbiAgICAgICAgICAgIGNhc2UgLTE4Nzc0MDk3OTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRmFjZSBJbWFnZSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NzczNDQyNTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgSW1hZ2UgRGF0YSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBVbnN1cHBvcnRlZCBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gRGVwcmVjYXRlZCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVc2luZyBTdGQgUmVmXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTcxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBQdWJsaWNLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5Njk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBGaWxlIElEIEZvciBWZXJzaW9uIDJcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogZUlEIFNlY3VyaXR5IFVuc3VwcG9ydGVkIERpZ2VzdCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDk2NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgaW5mbyBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBSSSBkb21haW4gcGFyYW1zIHVuc3VwcG9ydGVkIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwOTY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBBQSBpbmZvIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb25zaXN0ZW50IGFsZ29yaXRobSByZWZlcmVuY2VcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vIFN0ZCBQYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vIFJlcXVpcmVkIE9wdGlvblwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgQW5vbnltb3VzIEluZm9zXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5jb3JyZWN0IEluZm9zIFF1YW50aXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDYXJkIEluZm8gTG9jYXRvciBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBJbmZvIE11bHRpcGxlIEVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSAtMTg2MjI3MDcwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUHJpdmlsZWdlZCBUSSBNdWx0aXBsZSBFbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgSW5jb3JyZWN0IFVzYWdlXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA3MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGRvbWFpbiBwYXJhbXMgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNzA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBTdG9yYWdlIFBBQ0UgSW5mbyBOb24gQ29uc2lzdGFudFwiXG4gICAgICAgICAgICBjYXNlIC0xODYyMjcwNDYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBQcm9maWxlIGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IE5vbiBDVkNBIGRvbWFpbiBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzA0NjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NjIyNzAyMDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gVEE6IFBBQ0Ugc3RhdGljIGJpbmRpbmcgdXNlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbnQgZmluZCBDU0NBXCJcbiAgICAgICAgICAgIGNhc2UgLTE4NDU0OTM0ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIC0xODQ1NDkzNDc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0FMUkVBRFlfRE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1ZXN0ZWQgb3BlcmF0aW9uIGlzIGFscmVhZHkgZG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogRmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0Vycm9yX0dyYXBoTWFuYWdlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBDcmVhdGlvbiBvciBjb25uZWN0aW9uIHRvIEdyYXBoIE1hbmFnZXIgQ09NIHNlcnZlciBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBjaGlwIGlzIGRldGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfSU5WQUxJRF9QQVJBTUVURVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBwYXJhbWV0ZXIgaW4gRXhlY3V0ZUNvbW1hbmQoKSBjYWxsIGZvdW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBEZXZpY2UgaXMgdW5pbml0aWFsaXplZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FcnJvcl9Ob3RFbm91Z2hNZW1vcnk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogT3V0IG9mIG1lbW9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9JTlZBTElEX0RJUkVDVE9SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBjb21tYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0ZJTEVfSU9fRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJTyBFcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9CVVNZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJGSUQgaXMgQnVzeVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDE4MTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEZpcm13YXJlIG5lZWQgdG8gYmUgdXBkYXRlZCB3aXRoIG5ld2VyIHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBSZWFkZXIgaXMgdW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGNhbm5vdCBiZSBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBDYXJkIGlzIG5vdCBjb25uZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU3MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBPcGVyYXRpb24gaXMgY2FuY2VsbGVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogQ2FyZCBJcyBCdXN5XCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDczNTI1NzA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkIFNtYXJ0IENhcmRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzM1MjU2MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBFeHRMZSBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNlY3VyZSBNZXNzYWdpbmcgd2FzIG5vdCBhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDM1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQV8wMyBcXFwiQXBwbGljYXRpb24gc2VsZWN0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MjAwOTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDEgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBNQUMgZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMiBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGVuY3J5cHRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgyMDA5NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4NDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBNQUMgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5ODM5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogU00gZmFpbHVyZSDigJMgY3J5cHRvZ3JhbSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBzZWN1cmVkIHN0YXR1cyBieXRlcyBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4Mzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgTUFDXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk4MzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgY3J5cHRvZ3JhbVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm90IFRMViByZXNwb25zZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBXcm9uZyBkYXRhIGxlbmd0aCAoQVBEVV9JTlNfR0VUX0NIQUxMRU5HRSlcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0lOVEVSTkFMX0FVVEhFTlRJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IEtBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1ODA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBNU0U6U2V0IERTVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQU08gQ0VSVElGSUNBVEUgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDQ2ODE5NTc4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBBVCBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgLTIwNDY4MTk1Nzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBHRVQgQ0hBTExFTkdFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0VYVEVSTkFMX0FVVEhFTlRJQ0FURSAoRXh0ZXJuYWwgQXV0aGVudGljYXRpb24pIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjA0NjgxOTU3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEdlbmVyYWwgQXV0aGVudGljaXR5IEZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjM4MjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEZpbGUgc2VsZWN0aW9uIGZhaWx1cmUgLyBmaWxlIG5vdCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4NDMwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjI1NjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzODQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJbmNvcnJlY3QgUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTYzNzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBObyBSZWZlcmVuY2UgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIFN1c3BlbmRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMTQ3NDU4MTEyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIEJsb2NrZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1ODQyOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBEZWFjdGl2YXR0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBCbG9ja2VkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NzQ1NjYzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBEZWFjdGl2YXRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgLTIxNDc0NTY2MzU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgU3VzcGVuZGVkIDJcIlxuICAgICAgICAgICAgY2FzZSAtMjE0NjQwOTUzNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MjAwMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBOb3QgUGVyZm9ybWVkXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5OTk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU2Vzc2lvbiBJcyBDbG9zZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk5ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBVbnN1cHBvcnRlZCBPcGVyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBUeXBlIFVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUZXJtaW5hbCBUeXBlIEJhZCBDZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIFR5cGUgTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTgxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSBUeXBlIFVua25vd25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk4MDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQcm9jZWR1cmUgVHlwZSBVbnN1cHBvcnRlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFByb2NlZHVyZSBUeXBlIE5vdCBTZXRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IFVua25vd24gVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgVW5zdXBwb3J0ZWQgU00gVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTc2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBLZXkgSW5jb3JyZWN0IFNNIFR5cGVcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IFJlc3RyaWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk3NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIEtleSBOb3QgU2V0XCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUHdkIE1hbmFnZW1lbnQgTm90IEF1dGhvcml6ZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2ODpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgQ29udHJvbCBVbmtub3duVHlwZVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIFNNXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogUmVxdWlyZXMgUEFDRVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTY1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIENBIEtleXNcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk2NDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSZXF1aXJlcyBUQVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYzOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJlcXVpcmVzIENBXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcxNTE5NjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW5jb3JyZWN0IE9wdGlvbiBDQVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTYwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTU5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFBIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTU4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJJIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTUyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFNPIFNpZ25hdHVyZSBDaGVjayBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTk1MTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBIYXNoIENoZWNrIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTM2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEludmFsaWQgQXV4IERhdGEgRGF0ZSBPZiBFeHBpcnlcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIEF1eCBEYXRhIERhdGUgT2YgQmlydGhcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkzNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIEF1eCBEYXRhIENvbW11bml0eSBJRFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTIwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFJlcXVpcmVzIEFwcCBTZWxlY3Rpb25cIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gTm90IFNldFwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MTUxOTE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFBJTiBOb3QgVmVyaWZpZWRcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NzE1MTkwNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk3MDg2NDY0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogTm90IEVub3VnaCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTcwMjA5Mjg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIC0yMDk2OTU1MzkyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogVW5leHBlY3RlZCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY4ODk4NTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBDb250ZW50cyBVbmV4cGVjdGVkIERhdGFcIlxuICAgICAgICAgICAgY2FzZSAtMjA5NjgyNDMyMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIEZpbGU6IFdyb25nIFRhZ1wiXG4gICAgICAgICAgICBjYXNlIC0yMDk2NzU4Nzg0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQ2Fubm90IFVzZSBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgLTIwOTY2OTMyNDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBGaWxlOiBDYW5ub3QgUmVhZCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9BQ0NFU1NfREVOSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogQWNjZXNzIERlbmllZFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9QYXNzd29yZF9UeXBlID0ge1xuICAgIFBQVF9VTktOT1dOOiAwLFxuICAgIFBQVF9NUlo6IDEsXG4gICAgUFBUX0NBTjogMixcbiAgICBQUFRfUElOOiAzLFxuICAgIFBQVF9QVUs6IDQsXG4gICAgUFBUX1BJTl9FU0lHTjogNSxcbiAgICBQUFRfU0FJOiA2LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSA9IHtcbiAgICBTUFRfRE9DXzkzMDNfRURJVElPTl8yMDA2OiAweDAwMDAwMDAxLFxuICAgIFNQVF9ET0NfOTMwM19MRFNfUEtJX01BSU5URU5BTkNFOiAweDAwMDAwMDAyLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfVGVybWluYWxUeXBlID0ge1xuICAgIFRFVF9VTkRFRklORUQ6IDAsXG4gICAgVEVUX0lOU1BFQ1RJT05fU1lTVEVNOiAxLFxuICAgIFRFVF9BVVRIRU5USUNBVElPTl9URVJNSU5BTDogMixcbiAgICBURVRfU0lHTkFUVVJFX1RFUk1JTkFMOiAzLFxuICAgIFRFVF9VTkFVVEhFTlRJQ0FURURfVEVSTUlOQUw6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBlUlBSTV9BdXRoZW50aWNpdHkgPSB7XG4gICAgTk9ORTogMCxcbiAgICBVVl9MVU1JTkVTQ0VOQ0U6IDEsXG4gICAgSVJfQjkwMDogMixcbiAgICBJTUFHRV9QQVRURVJOOiA0LFxuICAgIEFYSUFMX1BST1RFQ1RJT046IDgsXG4gICAgVVZfRklCRVJTOiAxNixcbiAgICBJUl9WSVNJQklMSVRZOiAzMixcbiAgICBPQ1JfU0VDVVJJVFlfVEVYVDogNjQsXG4gICAgSVBJOiAxMjgsXG4gICAgUEhPVE9fRU1CRURfVFlQRTogNTEyLFxuICAgIEhPTE9HUkFNUzogNDA5NixcbiAgICBQSE9UT19BUkVBOiA4MTkyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT046IDMyNzY4LFxuICAgIEJBUkNPREVfRk9STUFUX0NIRUNLOiA2NTUzNixcbiAgICBLSU5FR1JBTTogMTMxMDcyLFxuICAgIEhPTE9HUkFNU19ERVRFQ1RJT046IDUyNDI4OCxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX0ZpZWxkVmVyaWZpY2F0aW9uUmVzdWx0ID0ge1xuICAgIFJDRl9ESVNBQkxFRDogMCxcbiAgICBSQ0ZfVkVSSUZJRUQ6IDEsXG4gICAgUkNGX05PVF9WRVJJRklFRDogMixcbiAgICBSQ0ZfQ09NUEFSRV9UUlVFOiAzLFxuICAgIFJDRl9DT01QQVJFX0ZBTFNFOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fTGlnaHRzID0ge1xuICAgIE5PTkU6IDAsXG4gICAgUlBSTV9MSUdIVF9VVjogMTI4LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTDogNixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLlJQUk1fTElHSFRfVVY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVZcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJQUk1fTElHSFRfV0hJVEVfRlVMTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNpYmxlIGxpZ2h0XCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1Jlc3VsdFR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FTVBUWTogMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19JTUFHRTogMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTEVfSU1BR0U6IDIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfT0NSX0VYVEVOREVEOiAzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERVM6IDUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9HUkFQSElDUzogNixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9URVNUX1FVQUxJVFk6IDcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9UWVBFU19DQU5ESURBVEVTOiA4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQ0hPU0VOX0RPQ1VNRU5UX1RZUEVfQ0FORElEQVRFOiA5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRE9DVU1FTlRTX0lORk9fTElTVDogMTAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9PQ1JfTEVYSUNBTF9BTkFMWVpFOiAxNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX1JBV19VTkNST1BQRURfSU1BR0U6IDE2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfVklTVUFMX09DUl9FWFRFTkRFRDogMTcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJfQ09ERVNfVEVYVF9EQVRBOiAxOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19JTUFHRV9EQVRBOiAxOSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0FVVEhFTlRJQ0lUWTogMjAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9FT1NfSU1BR0U6IDIzLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFZRVJfSU1BR0U6IDI0LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFOiAyNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01BR05FVElDX1NUUklQRV9URVhUX0RBVEE6IDI2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklFTERfRklMRV9JTUFHRTogMjcsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9EQVRBQkFTRV9DSEVDSzogMjgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSU5HRVJQUklOVF9URU1QTEFURV9JU086IDI5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU5QVVRfSU1BR0VfUVVBTElUWTogMzAsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVF9QT1NJVElPTjogODUsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DVVNUT006IDEwMCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfUkFXX0RBVEE6IDEwMSxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfVEVYVF9EQVRBOiAxMDIsXG4gICAgUkZJRF9SRVNVTFRfVFlQRV9SRklEX0lNQUdFX0RBVEE6IDEwMyxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfQklOQVJZX0RBVEE6IDEwNCxcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfT1JJR0lOQUxfR1JBUEhJQ1M6IDEwNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUkNPREVfUE9TSVRJT046IDYyLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1BPU0lUSU9OOiA2MSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0JMQU5LOiAwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GSUxMOiAxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UTzogMixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTVJaOiAzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9GQUxTRV9MVU1JTkVTQ0VOQ0U6IDQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fU0lNUExFOiA1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9TVEFUSUM6IDYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX01VTFRJX1NUQVRJQzogNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfRElOQU1JQzogOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfSU5URVJSVVBURUQ6IDksXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fTk9UX1NISUZURUQ6IDEwLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX1NBTUVfQ09MT1JTOiAxMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9JUl9JTlZJU0lCTEU6IDEyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSVpFX0NIRUNLOiAxMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19HSE9TVDogMTQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfUkZJRDogMTUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfVklTVUFMOiAxNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkFSQ09ERTogMTcsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fRElGRkVSRU5UX0xJTkVTX1RISUNLTkVTUzogMTgsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BPUlRSQUlUX0NPTVBBUklTT05fVlNfQ0FNRVJBOiAxOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9SRklEX1ZTX0NBTUVSQTogMjAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0dIT1NUX1BIT1RPOiAyMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQ0xFQVJfR0hPU1RfUEhPVE86IDIyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9JTlZJU0lCTEVfT0JKRUNUOiAyMyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfTE9XX0NPTlRSQVNUX09CSkVDVDogMjQsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPTE9SOiAyNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fU0hBUEU6IDI2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19DT1JORVJTOiAyNyxcbiAgICBET0NVTUVOVF9DQU5DRUxMSU5HX0RFVEVDVE9SOiAyOCxcbn1cblxuZXhwb3J0IGNvbnN0IGVTaWduTWFuYWdlbWVudEFjdGlvbiA9IHtcbiAgICBzbWFVbmRlZmluZWQ6IDAsXG4gICAgc21hQ3JlYXRlUElOOiAxLFxuICAgIHNtYUNoYW5nZVBJTjogMixcbiAgICBzbWFVbmJsb2NrUElOOiAzLFxuICAgIHNtYVRlcm1pbmF0ZVBJTjogNCxcbiAgICBzbWFHZW5lcmF0ZUtleXM6IDUsXG4gICAgc21hVGVybWluYXRlS2V5czogNixcbiAgICBzbWFTaWduRGF0YTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IGVWaXN1YWxGaWVsZFR5cGUgPSB7XG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfQ09ERTogMCxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREU6IDEsXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSOiAyLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZOiAzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUU6IDQsXG4gICAgRlRfREFURV9PRl9CSVJUSDogNSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSDogNixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVI6IDcsXG4gICAgRlRfU1VSTkFNRTogOCxcbiAgICBGVF9HSVZFTl9OQU1FUzogOSxcbiAgICBGVF9NT1RIRVJTX05BTUU6IDEwLFxuICAgIEZUX05BVElPTkFMSVRZOiAxMSxcbiAgICBGVF9TRVg6IDEyLFxuICAgIEZUX0hFSUdIVDogMTMsXG4gICAgRlRfV0VJR0hUOiAxNCxcbiAgICBGVF9FWUVTX0NPTE9SOiAxNSxcbiAgICBGVF9IQUlSX0NPTE9SOiAxNixcbiAgICBGVF9BRERSRVNTOiAxNyxcbiAgICBGVF9ET05PUjogMTgsXG4gICAgRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTksXG4gICAgRlRfRExfQ0xBU1M6IDIwLFxuICAgIEZUX0RMX0VORE9SU0VEOiAyMSxcbiAgICBGVF9ETF9SRVNUUklDVElPTl9DT0RFOiAyMixcbiAgICBGVF9ETF9VTkRFUl8yMV9EQVRFOiAyMyxcbiAgICBGVF9BVVRIT1JJVFk6IDI0LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAyNSxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFOiAyNixcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVI6IDI3LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSOiAyOCxcbiAgICBGVF9WSVNBX0lEOiAyOSxcbiAgICBGVF9WSVNBX0NMQVNTOiAzMCxcbiAgICBGVF9WSVNBX1NVQl9DTEFTUzogMzEsXG4gICAgRlRfTVJaX1NUUklOR18xOiAzMixcbiAgICBGVF9NUlpfU1RSSU5HXzI6IDMzLFxuICAgIEZUX01SWl9TVFJJTkdfMzogMzQsXG4gICAgRlRfTVJaX1RZUEU6IDM1LFxuICAgIEZUX09QVElPTkFMX0RBVEE6IDM2LFxuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX05BTUU6IDM3LFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfTkFNRTogMzgsXG4gICAgRlRfUExBQ0VfT0ZfSVNTVUU6IDM5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTogNDAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS1NVTTogNDEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tTVU06IDQyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTogNDMsXG4gICAgRlRfRklOQUxfQ0hFQ0tTVU06IDQ0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS1NVTTogNDUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tTVU06IDQ2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tTVU06IDQ3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLU1VNOiA0OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOiA0OSxcbiAgICBGVF9PVEhFUjogNTAsXG4gICAgRlRfTVJaX1NUUklOR1M6IDUxLFxuICAgIEZUX05BTUVfU1VGRklYOiA1MixcbiAgICBGVF9OQU1FX1BSRUZJWDogNTMsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS1NVTTogNTQsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS19ESUdJVDogNTUsXG4gICAgRlRfRE9DVU1FTlRfU0VSSUVTOiA1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSOiA1NyxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTU9ERUw6IDU4LFxuICAgIEZUX1JFR19DRVJUX0NBUl9DT0xPUjogNTksXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9OVU1CRVI6IDYwLFxuICAgIEZUX1JFR19DRVJUX0NBUl9UWVBFOiA2MSxcbiAgICBGVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOiA2MixcbiAgICBGVF9SRUdfQ0VSVF9XRUlHSFQ6IDYzLFxuICAgIEZUX0FERFJFU1NfQVJFQTogNjQsXG4gICAgRlRfQUREUkVTU19TVEFURTogNjUsXG4gICAgRlRfQUREUkVTU19CVUlMRElORzogNjYsXG4gICAgRlRfQUREUkVTU19IT1VTRTogNjcsXG4gICAgRlRfQUREUkVTU19GTEFUOiA2OCxcbiAgICBGVF9QTEFDRV9PRl9SRUdJU1RSQVRJT046IDY5LFxuICAgIEZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOiA3MCxcbiAgICBGVF9SRVNJREVOVF9GUk9NOiA3MSxcbiAgICBGVF9SRVNJREVOVF9VTlRJTDogNzIsXG4gICAgRlRfQVVUSE9SSVRZX0NPREU6IDczLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0FSRUE6IDc0LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1NUQVRFX0NPREU6IDc1LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUOiA3NixcbiAgICBGVF9BRERSRVNTX0NJVFk6IDc3LFxuICAgIEZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDc4LFxuICAgIEZUX0FERFJFU1NfUE9TVEFMX0NPREU6IDc5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDogODAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS19ESUdJVDogODEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tfRElHSVQ6IDgyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDogODMsXG4gICAgRlRfRklOQUxfQ0hFQ0tfRElHSVQ6IDg0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS19ESUdJVDogODUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tfRElHSVQ6IDg3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLX0RJR0lUOiA4OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOiA4OSxcbiAgICBGVF9QRVJNSVRfRExfQ0xBU1M6IDkwLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0VYUElSWTogOTEsXG4gICAgRlRfUEVSTUlUX0lERU5USUZJRVI6IDkyLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0lTU1VFOiA5MyxcbiAgICBGVF9QRVJNSVRfUkVTVFJJQ1RJT05fQ09ERTogOTQsXG4gICAgRlRfUEVSTUlUX0VORE9SU0VEOiA5NSxcbiAgICBGVF9JU1NVRV9USU1FU1RBTVA6IDk2LFxuICAgIEZUX05VTUJFUl9PRl9EVVBMSUNBVEVTOiA5NyxcbiAgICBGVF9NRURJQ0FMX0lORElDQVRPUl9DT0RFUzogOTgsXG4gICAgRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjogOTksXG4gICAgRlRfVklTQV9UWVBFOiAxMDAsXG4gICAgRlRfVklTQV9WQUxJRF9GUk9NOiAxMDEsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTDogMTAyLFxuICAgIEZUX0RVUkFUSU9OX09GX1NUQVk6IDEwMyxcbiAgICBGVF9OVU1CRVJfT0ZfRU5UUklFUzogMTA0LFxuICAgIEZUX0RBWTogMTA1LFxuICAgIEZUX01PTlRIOiAxMDYsXG4gICAgRlRfWUVBUjogMTA3LFxuICAgIEZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOiAxMDgsXG4gICAgRlRfQ09NTUVSQ0lBTF9WRUhJQ0xFX0NPREVTOiAxMDksXG4gICAgRlRfQUtBX0RBVEVfT0ZfQklSVEg6IDExMCxcbiAgICBGVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTExLFxuICAgIEZUX0FLQV9TVVJOQU1FOiAxMTIsXG4gICAgRlRfQUtBX0dJVkVOX05BTUVTOiAxMTMsXG4gICAgRlRfQUtBX05BTUVfU1VGRklYOiAxMTQsXG4gICAgRlRfQUtBX05BTUVfUFJFRklYOiAxMTUsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1NUUkVFVDogMTE2LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19DSVRZOiAxMTcsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiAxMTgsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1BPU1RBTF9DT0RFOiAxMTksXG4gICAgRlRfQVVESVRfSU5GT1JNQVRJT046IDEyMCxcbiAgICBGVF9JTlZFTlRPUllfTlVNQkVSOiAxMjEsXG4gICAgRlRfUkFDRV9FVEhOSUNJVFk6IDEyMixcbiAgICBGVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzogMTIzLFxuICAgIEZUX0pVUklTRElDVElPTl9FTkRPUlNFTUVOVF9DT0RFOiAxMjQsXG4gICAgRlRfSlVSSVNESUNUSU9OX1JFU1RSSUNUSU9OX0NPREU6IDEyNSxcbiAgICBGVF9GQU1JTFlfTkFNRTogMTI2LFxuICAgIEZUX0dJVkVOX05BTUVTX1JVUzogMTI3LFxuICAgIEZUX1ZJU0FfSURfUlVTOiAxMjgsXG4gICAgRlRfRkFUSEVSU19OQU1FOiAxMjksXG4gICAgRlRfRkFUSEVSU19OQU1FX1JVUzogMTMwLFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX1JVUzogMTMxLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1JVUzogMTMyLFxuICAgIEZUX0FVVEhPUklUWV9SVVM6IDEzMyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfTlVNRVJJQzogMTM0LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREVfTlVNRVJJQzogMTM1LFxuICAgIEZUX0VOR0lORV9QT1dFUjogMTM2LFxuICAgIEZUX0VOR0lORV9WT0xVTUU6IDEzNyxcbiAgICBGVF9DSEFTU0lTX05VTUJFUjogMTM4LFxuICAgIEZUX0VOR0lORV9OVU1CRVI6IDEzOSxcbiAgICBGVF9FTkdJTkVfTU9ERUw6IDE0MCxcbiAgICBGVF9WRUhJQ0xFX0NBVEVHT1JZOiAxNDEsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6IDE0MixcbiAgICBGVF9DT05UUk9MX05POiAxNDMsXG4gICAgRlRfUEFSUkVOVFNfR0lWRU5fTkFNRVM6IDE0NCxcbiAgICBGVF9TRUNPTkRfU1VSTkFNRTogMTQ1LFxuICAgIEZUX01JRERMRV9OQU1FOiAxNDYsXG4gICAgRlRfUkVHX0NFUlRfVklOOiAxNDcsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLX0RJR0lUOiAxNDgsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOiAxNDksXG4gICAgRlRfTElORV8xX0NIRUNLX0RJR0lUOiAxNTAsXG4gICAgRlRfTElORV8yX0NIRUNLX0RJR0lUOiAxNTEsXG4gICAgRlRfTElORV8zX0NIRUNLX0RJR0lUOiAxNTIsXG4gICAgRlRfTElORV8xX0NIRUNLU1VNOiAxNTMsXG4gICAgRlRfTElORV8yX0NIRUNLU1VNOiAxNTQsXG4gICAgRlRfTElORV8zX0NIRUNLU1VNOiAxNTUsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS19ESUdJVDogMTU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06IDE1NyxcbiAgICBGVF9SRUdfQ0VSVF9WRUhJQ0xFX0lUU19DT0RFOiAxNTgsXG4gICAgRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOiAxNTksXG4gICAgRlRfTUFSSVRBTF9TVEFUVVM6IDE2MCxcbiAgICBGVF9DT01QQU5ZX05BTUU6IDE2MSxcbiAgICBGVF9TUEVDSUFMX05PVEVTOiAxNjIsXG4gICAgRlRfU1VSTkFNRV9PRl9TUE9TRTogMTYzLFxuICAgIEZUX1RSQUNLSU5HX05VTUJFUjogMTY0LFxuICAgIEZUX0JPT0tMRVRfTlVNQkVSOiAxNjUsXG4gICAgRlRfQ0hJTERSRU46IDE2NixcbiAgICBGVF9DT1BZOiAxNjcsXG4gICAgRlRfU0VSSUFMX05VTUJFUjogMTY4LFxuICAgIEZUX0RPU1NJRVJfTlVNQkVSOiAxNjksXG4gICAgRlRfQUtBX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAxNzAsXG4gICAgRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6IDE3MSxcbiAgICBGVF9NUlpfU1RSSU5HU19XSVRIX0NPUlJFQ1RfQ0hFQ0tfU1VNUzogMTcyLFxuICAgIEZUX0RMX0NETF9SRVNUUklDVElPTl9DT0RFOiAxNzMsXG4gICAgRlRfRExfVU5ERVJfMThfREFURTogMTc0LFxuICAgIEZUX0RMX1JFQ09SRF9DUkVBVEVEOiAxNzUsXG4gICAgRlRfRExfRFVQTElDQVRFX0RBVEU6IDE3NixcbiAgICBGVF9ETF9JU1NfVFlQRTogMTc3LFxuICAgIEZUX01JTElUQVJZX0JPT0tfTlVNQkVSOiAxNzgsXG4gICAgRlRfREVTVElOQVRJT046IDE3OSxcbiAgICBGVF9CTE9PRF9HUk9VUDogMTgwLFxuICAgIEZUX1NFUVVFTkNFX05VTUJFUjogMTgxLFxuICAgIEZUX1JFR19DRVJUX0JPRFlfVFlQRTogMTgyLFxuICAgIEZUX1JFR19DRVJUX0NBUl9NQVJLOiAxODMsXG4gICAgRlRfVFJBTlNBQ1RJT05fTlVNQkVSOiAxODQsXG4gICAgRlRfQUdFOiAxODUsXG4gICAgRlRfRk9MSU9fTlVNQkVSOiAxODYsXG4gICAgRlRfVk9URVJfS0VZOiAxODcsXG4gICAgRlRfQUREUkVTU19NVU5JQ0lQQUxJVFk6IDE4OCxcbiAgICBGVF9BRERSRVNTX0xPQ0FUSU9OOiAxODksXG4gICAgRlRfU0VDVElPTjogMTkwLFxuICAgIEZUX09DUl9OVU1CRVI6IDE5MSxcbiAgICBGVF9GRURFUkFMX0VMRUNUSU9OUzogMTkyLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVI6IDE5MyxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOiAxOTQsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS19ESUdJVDogMTk1LFxuICAgIEZUX1ZJU0FfTlVNQkVSOiAxOTYsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06IDE5NyxcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDogMTk4LFxuICAgIEZUX1ZPVEVSOiAxOTksXG4gICAgRlRfUFJFVklPVVNfVFlQRTogMjAwLFxuICAgIEZUX0ZJRUxEX0ZST01fTVJaOiAyMjAsXG4gICAgRlRfQ1VSUkVOVF9EQVRFOiAyMjEsXG4gICAgRlRfU1RBVFVTX0RBVEVfT0ZfRVhQSVJZOiAyNTEsXG4gICAgRlRfQkFOS05PVEVfTlVNQkVSOiAyNTIsXG4gICAgRlRfQ1NDX0NPREU6IDI1MyxcbiAgICBGVF9BUlRJU1RJQ19OQU1FOiAyNTQsXG4gICAgRlRfQUNBREVNSUNfVElUTEU6IDI1NSxcbiAgICBGVF9BRERSRVNTX0NPVU5UUlk6IDI1NixcbiAgICBGVF9BRERSRVNTX1pJUENPREU6IDI1NyxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMTogMjU4LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8yOiAyNTksXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVFJFRVQ6IDI2MCxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6IDI2MSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUQVRFOiAyNjIsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DT1VOVFJZOiAyNjMsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9aSVBDT0RFOiAyNjQsXG4gICAgRlRfQ0RMX0NMQVNTOiAyNjUsXG4gICAgRlRfRExfVU5ERVJfMTlfREFURTogMjY2LFxuICAgIEZUX1dFSUdIVF9QT1VORFM6IDI2NyxcbiAgICBGVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjogMjY4LFxuICAgIEZUX0VORE9SU0VNRU5UX0VYUElSQVRJT05fREFURTogMjY5LFxuICAgIEZUX1JFVklTSU9OX0RBVEU6IDI3MCxcbiAgICBGVF9DT01QTElBTkNFX1RZUEU6IDI3MSxcbiAgICBGVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOiAyNzIsXG4gICAgRlRfRklSU1RfTkFNRV9UUlVOQ0FUSU9OOiAyNzMsXG4gICAgRlRfTUlERExFX05BTUVfVFJVTkNBVElPTjogMjc0LFxuICAgIEZUX0VYQU1fREFURTogMjc1LFxuICAgIEZUX09SR0FOSVpBVElPTjogMjc2LFxuICAgIEZUX0RFUEFSVE1FTlQ6IDI3NyxcbiAgICBGVF9QQVlfR1JBREU6IDI3OCxcbiAgICBGVF9SQU5LOiAyNzksXG4gICAgRlRfQkVORUZJVFNfTlVNQkVSOiAyODAsXG4gICAgRlRfU1BPTlNPUl9TRVJWSUNFOiAyODEsXG4gICAgRlRfU1BPTlNPUl9TVEFUVVM6IDI4MixcbiAgICBGVF9TUE9OU09SOiAyODMsXG4gICAgRlRfUkVMQVRJT05TSElQOiAyODQsXG4gICAgRlRfVVNDSVM6IDI4NSxcbiAgICBGVF9DQVRFR09SWTogMjg2LFxuICAgIEZUX0NPTkRJVElPTlM6IDI4NyxcbiAgICBGVF9JREVOVElGSUVSOiAyODgsXG4gICAgRlRfQ09ORklHVVJBVElPTjogMjg5LFxuICAgIEZUX0RJU0NSRVRJT05BUllfREFUQTogMjkwLFxuICAgIEZUX0xJTkVfMV9PUFRJT05BTF9EQVRBOiAyOTEsXG4gICAgRlRfTElORV8yX09QVElPTkFMX0RBVEE6IDI5MixcbiAgICBGVF9MSU5FXzNfT1BUSU9OQUxfREFUQTogMjkzLFxuICAgIEZUX0VRVl9DT0RFOiAyOTQsXG4gICAgRlRfQUxUX0NPREU6IDI5NSxcbiAgICBGVF9CSU5BUllfQ09ERTogMjk2LFxuICAgIEZUX1BTRVVET19DT0RFOiAyOTcsXG4gICAgRlRfRkVFOiAyOTgsXG4gICAgRlRfU1RBTVBfTlVNQkVSOiAyOTksXG4gICAgRlRfU0JIX1NFQ1VSSVRZT1BUSU9OUzogMzAwLFxuICAgIEZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOiAzMDEsXG4gICAgRlRfREFURV9PRl9DUkVBVElPTjogMzAyLFxuICAgIEZUX1ZBTElESVRZX1BFUklPRDogMzAzLFxuICAgIEZUX1BBVFJPTl9IRUFERVJfVkVSU0lPTjogMzA0LFxuICAgIEZUX0JEQl9UWVBFOiAzMDUsXG4gICAgRlRfQklPTUVUUklDX1RZUEU6IDMwNixcbiAgICBGVF9CSU9NRVRSSUNfU1VCVFlQRTogMzA3LFxuICAgIEZUX0JJT01FVFJJQ19QUk9EVUNUSUQ6IDMwOCxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOiAzMDksXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9UWVBFOiAzMTAsXG4gICAgRlRfUEhPTkU6IDMxMSxcbiAgICBGVF9QUk9GRVNTSU9OOiAzMTIsXG4gICAgRlRfVElUTEU6IDMxMyxcbiAgICBGVF9QRVJTT05BTF9TVU1NQVJZOiAzMTQsXG4gICAgRlRfT1RIRVJfVkFMSURfSUQ6IDMxNSxcbiAgICBGVF9DVVNUT0RZX0lORk86IDMxNixcbiAgICBGVF9PVEhFUl9OQU1FOiAzMTcsXG4gICAgRlRfT0JTRVJWQVRJT05TOiAzMTgsXG4gICAgRlRfVEFYOiAzMTksXG4gICAgRlRfREFURV9PRl9QRVJTT05BTElaQVRJT046IDMyMCxcbiAgICBGVF9QRVJTT05BTElaQVRJT05fU046IDMyMSxcbiAgICBGVF9PVEhFUlBFUlNPTl9OQU1FOiAzMjIsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfREFURV9PRl9SRUNPUkQ6IDMyMyxcbiAgICBGVF9QRVJTT05UT05PVElGWV9OQU1FOiAzMjQsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfUEhPTkU6IDMyNSxcbiAgICBGVF9QRVJTT05UT05PVElGWV9BRERSRVNTOiAzMjYsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfSVNTVUVSOiAzMjcsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfU1VCSkVDVDogMzI4LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTogMzI5LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElEVE86IDMzMCxcbiAgICBGVF9WUkNfREFUQU9CSkVDVF9FTlRSWTogMzMxLFxuICAgIEZUX1RZUEVfQVBQUk9WQUxfTlVNQkVSOiAzMzIsXG4gICAgRlRfQURNSU5JU1RSQVRJVkVfTlVNQkVSOiAzMzMsXG4gICAgRlRfRE9DVU1FTlRfRElTQ1JJTUlOQVRPUjogMzM0LFxuICAgIEZUX0RBVEFfRElTQ1JJTUlOQVRPUjogMzM1LFxuICAgIEZUX0lTT19JU1NVRVJfSURfTlVNQkVSOiAzMzYsXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0NMQVNTX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgY2xhc3MgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUlOR19TVEFURV9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3Vpbmcgc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OQUxfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJTX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW90aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQVRJT05BTElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNleFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEVJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhlaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfV0VJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVlFU19DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeWUgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0hBSVJfQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGFpciBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET05PUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb25vclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTb2NpYWwgaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0VORE9SU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1JFU1RSSUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfVU5ERVJfMjFfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDIxc3QgYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BVElPTkFMSVRZX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WSVRBVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIENsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1NVQl9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHN1YmNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HXzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR18yOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdfMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogVHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1BUSU9OQUxfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9DTEFTU19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVSU5HX1NUQVRFX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0VYUElSWV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSU5BTF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQU1FX1NVRkZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHN1ZmZpeFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFNRV9QUkVGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX1NFUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBzZXJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0NBUl9DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9CT0RZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCb2R5IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBwZXJtaXNzaWJsZSB3ZWlnaHRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1dFSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmxhZGVuIG1hc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQVJFQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmVhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1NUQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0JVSUxESU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfSE9VU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVpbGRpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfRkxBVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRVNJREVOVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFU0lERU5UX1VOVElMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW50IHVudGlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVVRIT1JJVFlfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIGF1dGhvcml0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9CSVJUSF9BUkVBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWEgb2YgYmlydGhwbGFjZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEhfU1RBVEVfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0ZSBjb2RlIG9mIGJpcnRocGxhY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfU1RSRUVUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0cmVldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19DSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfUE9TVEFMX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0VYUElSWV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSU5BTF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5hbCBjaGVjayBkaWdpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFTU1BPUlRfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBwYXNzcG9ydCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklUQVRJT05fTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRF9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBJRFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfRExfQ0xBU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfREFURV9PRl9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGV4cGlyeSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfSURFTlRJRklFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX0RBVEVfT0ZfSVNTVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfRU5ET1JTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VFX1RJTUVTVEFNUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1ZSB0aW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfRFVQTElDQVRFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZHVwbGljYXRlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUVESUNBTF9JTkRJQ0FUT1JfQ09ERVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWVkaWNhbCBub3Rlcy9jb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tcmVzaWRlbnQgaW5kaWNhdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX1ZBTElEX1VOVElMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgdmFsaWQgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RVUkFUSU9OX09GX1NUQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHVyYXRpb24gb2Ygc3RheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0VOVFJJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PTlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ZRUFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBjdXN0b21lciBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01NRVJDSUFMX1ZFSElDTEVfQ09ERVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tbWVyY2lhbCB2ZWhpY2xlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgU29jaWFsIEluc3VyYW5jZSBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFLQSBTdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIEdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1NVRkZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBzdWZmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1BSRUZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0EgTmFtZSBwcmVmaXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19TVFJFRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0gc3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUlMSU5HX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFpbGluZyBhZGRyZXNzIC0ganVyaXNkaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19QT1NUQUxfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBwb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVESVRfSU5GT1JNQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIGZvciB2YWxpZGF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZFTlRPUllfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkludmVudG9yeSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JBQ0VfRVRITklDSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhY2UvZXRobmljaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gdmVoaWNsZSBjbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSlVSSVNESUNUSU9OX0VORE9SU0VNRU5UX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIGVuZG9yc2VtZW50IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0pVUklTRElDVElPTl9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiByZXN0cmljdGlvbiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQU1JTFlfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dJVkVOX05BTUVTX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfSURfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgSUQgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSU19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSU19OQU1FX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVNfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0JJUlRIX1JVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVVRIT1JJVFlfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VJTkdfU1RBVEVfQ09ERV9OVU1FUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWVyaWMgaXNzdWluZyBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQVRJT05BTElUWV9DT0RFX05VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpYyBuYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfUE9XRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHBvd2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfVk9MVU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSB2b2x1bWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NIQVNTSVNfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoYXNzaXMgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkdJTkVfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VOR0lORV9NT0RFTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgbW9kZWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZFSElDTEVfQ0FURUdPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTlRST0xfTk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29udHJvbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBUlJFTlRTX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhcmVudHNcXCcgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQ09ORF9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlY29uZCBzdXJuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSURETEVfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWRkbGUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVklOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgaWRlbnRpZmljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBWSU5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHJlZ2lzdHJhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1ZFSElDTEVfSVRTX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBJVFMgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhcmQgYWNjZXNzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFSSVRBTF9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFyaXRhbCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBBTllfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYW55IG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQRUNJQUxfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBub3Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9TUE9TRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG91c2VcXCdzIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQUNLSU5HX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFja2luZyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JPT0tMRVRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvb2tsZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSElMRFJFTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGlsZHJlblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09QWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3B5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRVJJQUxfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmlhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPU1NJRVJfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvc3NpZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU1VSTkFNRV9BTkRfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBIEZ1bGwgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVycml0b3JpYWwgdmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTX1dJVEhfQ09SUkVDVF9DSEVDS19TVU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lcyB3aXRoIGNvcnJlY3QgY2hlY2tzdW1zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DRExfUkVTVFJJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgUmVzdHJpY3Rpb24gQ29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfVU5ERVJfMThfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDE4dGggYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1JFQ09SRF9DUkVBVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlY29yZCBjcmVhdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9EVVBMSUNBVEVfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGR1cGxpY2F0ZSBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfSVNTX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FyZCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSUxJVEFSWV9CT09LX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWxpdGFyeSBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RFU1RJTkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlc3RpbmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CTE9PRF9HUk9VUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCbG9vZCBncm91cFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VRVUVOQ0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQk9EWV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX01BUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtYWtlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFOU0FDVElPTl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNhY3Rpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GT0xJT19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRm9saW8gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WT1RFUl9LRVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm90ZXIgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX01VTklDSVBBTElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNdW5pY2lwYWxpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfTE9DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTG9jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFQ1RJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VjdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0NSX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPQ1IgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GRURFUkFMX0VMRUNUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGZWRlcmFsIGVsZWN0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVGRVJFTkNFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUFRJT05BTF9EQVRBX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBvcHRpb25hbCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIE51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgdmlzYSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZPVEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZvdGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUkVWSU9VU19UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlR5cGUvbnVtYmVyIG9mIHRoZSBwcmV2aW91cyBkb2N1bWVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklFTERfRlJPTV9NUlo6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmllbGQgZnJvbSBNUlpcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NVUlJFTlRfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXJyZW50IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NUQVRVU19EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdGF0dXMgRXhwaXJ5IERhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JBTktOT1RFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCYW5rbm90ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NTQ19DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNTQyBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BUlRJU1RJQ19OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBzZXVkb255bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUNBREVNSUNfVElUTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNhZGVtaWMgdGl0bGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX1pJUENPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWklQIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8xOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlc2lkZW5jZSBwZXJtaXQgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUUkVFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IENpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IFN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NPVU5UUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgQmlydGg6IENvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfWklQQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBCaXJ0aDogUG9zdGFsIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NETF9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDREwgQ2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX1VOREVSXzE5X0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiAxOXRoIGJpcnRoZGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9XRUlHSFRfUE9VTkRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIldlaWdodCAocG91bmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmRpY2F0b3Igb2YgZG9jdW1lbnQgbGltaXRlZCBkdXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5ET1JTRU1FTlRfRVhQSVJBVElPTl9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZG9yc2VtZW50IGV4cGlyYXRpb24gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVWSVNJT05fREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXZpc2lvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT01QTElBTkNFX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxpYW5jZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRydW5jYXRlZCBzdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJUlNUX05BTUVfVFJVTkNBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaXJzdCBuYW1lIHRydW5jYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JRERMRV9OQU1FX1RSVU5DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlkZGxlIG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVhBTV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV4YW0gZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1JHQU5JWkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9yZ2FuaXphdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREVQQVJUTUVOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEZXBhcnRtZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVlfR1JBREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5IGdyYWRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SQU5LOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJhbmtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JFTkVGSVRTX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZW5lZml0cyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1JfU0VSVklDRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIHNlcnZpY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1JfU1RBVFVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFTEFUSU9OU0hJUDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxhdGlvbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1VTQ0lTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVTQ0lTXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DQVRFR09SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09ORElUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25kaXRpb25zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTkZJR1VSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRElTQ1JFVElPTkFSWV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpc2NyZXRpb25hcnkgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8xX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8yX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8zX09QVElPTkFMX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGF0YSBmcm9tIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVFWX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRVFWIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FMVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFMVCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU5BUllfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW5hcnkgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFNFVURPX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1RBTVBfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YW1wIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfR05JQl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR05JQiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RFUFRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9URUxFWF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbGVncmFwaCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BTExFUkdJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWxsZXJnaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwZWNpYWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09VUlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VydCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TUE9OU09SX1NTTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG9uc29yIFNTTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9fRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9EIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUNfTk9WSUNFX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgTW90b3JjeWNsZSBOb3ZpY2Ugc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EVUZfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRVRiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBR1lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BOUl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBOUiBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GUk9NX0FJUlBPUlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb2RlIG9mIHRoZSBhaXJwb3J0IG9mIGRlcGFydHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVE9fQUlSUE9SVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvZGUgb2YgdGhlIGFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkxJR0hUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGbGlnaHQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0ZMSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGZsaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VBVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VhdCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfSVNTVUVfQk9BUkRJTkdfUEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NDV19VTlRJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDQ1cgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFRkVSRU5DRV9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIG51bWJlciBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ST09NX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb29tIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVMSUdJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVsaWdpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFTUFJTkRFUl9URVJNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vbnRocyB0byBleHBpcmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbGVjdHJvbmljIHRpY2tldCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBBUlRNRU5UX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGFydG1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0hFQ0tfSU5fU0VRVUVOQ0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrLWluIHNlcXVlbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9ERVNJR05BVE9SX09GX0JPQVJESU5HX1BBU1NfSVNTVUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgZGVzaWduYXRvciBvZiBib2FyZGluZyBwYXNzIGlzc3VlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OVU1FUklDX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBudW1lcmljIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RJQ0tFVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGlja2V0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFUVVFTlRfRkxZRVJfQUlSTElORV9ERVNJR05BVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIGFpcmxpbmUgZGVzaWduYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFUVVFTlRfRkxZRVJfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZXF1ZW50IGZseWVyIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlJFRV9CQUdHQUdFX0FMTE9XQU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVlIGJhZ2dhZ2UgYWxsb3dhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QREZfNDE3X0NPREVDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBERjQxNyBjb2RlY1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGlkZW50aXR5IGNhcmQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZFVEVSQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmV0ZXJhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQkVfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9FX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ0VfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDFFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgREUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9ERV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9ERV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX01fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9NX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9MX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX1RfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfVF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX1RfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEFNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQU1fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8yX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8yX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl8xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0JfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9BVF9CSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGF0IGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSVZJTF9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l2aWwgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfU0VBVFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHNlYXRzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfU1RBTkRJTkdfUExBQ0VTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBzdGFuZGluZyBwbGFjZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BWF9TUEVFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggc3BlZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZVRUxfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGdWVsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VDX0VOVklST05NRU5UQUxfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGVudmlyb25tZW50YWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUE9XRVJfV0VJR0hUX1JBVElPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvd2VyLXRvLXdlaWdodCByYXRpb1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9CUkFLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IG1hc3Mgb2YgdHJhaWxlciAoYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFYX01BU1NfT0ZfVFJBSUxFUl9VTkJSQUtFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyICh1bmJyYWtlZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQU5TTUlTU0lPTl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYW5zbWlzc2lvbiB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UUkFJTEVSX0hJVENIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYWlsZXIgaGl0Y2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FDQ09NUEFOSUVEX0JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjY29tcGFuaWVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QT0xJQ0VfRElTVFJJQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9saWNlIGRpc3RyaWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSVJTVF9JU1NVRV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IGlzc3VlIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBWUxPQURfQ0FQQUNJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF5bG9hZCBjYXBhY2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0FYRUxTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBheGxlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pc3NpYmxlIGF4bGUgbG9hZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFJFQ0lOQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJlY2luY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVklURURfQlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52aXRlZCBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUFVSUE9TRV9PRl9FTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQdXJwb3NlIG9mIGVudHJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TS0lOX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNraW4gY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBMRVhJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxleGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSUE9SVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJQT1JUX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcnBvcnQgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUlSTElORV9OQU1FX0ZSRVFVRU5UX0ZMWUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFpcmxpbmUgbG95YWx0eSBwcm9ncmFtIGZvciBmcmVxdWVudCBmbHllcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJQ0VOU0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpY2Vuc2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTl9UQU5LUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbiB0YW5rc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRVhFUFRfSU5fVEFOS1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhjZXB0IGluIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVNUX1RSQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhc3QgVHJhY2sgc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1dORVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgZnJvbSBJQ0FPIFJGSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlbnR1cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9KX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkROVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkRWQUxJRFRIUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UQVhfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9TRUNVUklUWU9QVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIHNlY3VyaXR5IG9wdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBpbnRlZ3JpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9DUkVBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcmVhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WQUxJRElUWV9QRVJJT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmFsaWRpdHkgcGVyaW9kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVRST05fSEVBREVSX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF0cm9uIGhlYWRlciB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CREJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCREIgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklPTUVUUklDX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19TVUJUWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBzdWJ0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfUFJPRFVDVElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBwcm9kdWN0IElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgb3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BIT05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBob25lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RJVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9TVU1NQVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIGRhdGEgc3VtbWFyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1RIRVJfVkFMSURfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdmFsaWQgSURzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVVNUT0RZX0lORk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VzdG9keSBpbmZvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09CU0VSVkFUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYnNlcnZhdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RBWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsaXphdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTElaQVRJT05fU046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlciBvZiBwZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09USEVSUEVSU09OX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgcGVyc29uLCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBEYXRlIG9mIHJlY29yZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBOYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9QSE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBQaG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WUkNfREFUQU9CSkVDVF9FTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGRhdGEgZnJvbSB0aGUgREcxIGRhdGEgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dSQU5ERkFUSEVSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFuZGZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEVBTFRIX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFsdGggaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZSBvZiBhcHByb3ZhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZG1pbmlzdHJhdGl2ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFUQV9ESVNDUklNSU5BVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGEgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUQgbnVtYmVyIG9mIElTTyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFTEVDVEVFX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWxlY3RlZSBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJfUExBQ0VPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9GSVJTVF9SRU5FV0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmlyc3QgcmVuZXdhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9TRUNPTkRfUkVORVdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHNlY29uZCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9FWEFNSU5BVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBleGFtaW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVBQTElDQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwcGxpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVk9VQ0hFUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm91Y2hlciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklaQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF1dGhvcml6YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQUNVTFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhY3VsdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZPUk1fT0ZfRURVQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvcm0gb2YgZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETklfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkROSSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFVElSRU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldGlyZW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25hbCBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHRV9BVF9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2UgYXQgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1lFQVJTX1NJTkNFX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJzIHNpbmNlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9CVFBfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DM19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9HMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0lfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9LX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTEtfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9TX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVEJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFZfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9XX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NBTElCRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FsaWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBmaXJzdCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIHNlY29uZCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NWVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVlYvQ1ZDXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiBodXNiYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiB3aWZlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUtFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1ha2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjeWxpbmRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiBodXNiYW5kIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIHdpZmUgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9VUkw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgaW5zdXJhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1JUR0FHRV9CWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3J0Z2FnZSBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PTERfREFURV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX1BMQUNFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBwbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTVJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hSX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTUNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0FfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIGNvZGVzXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IExDSUQgPSB7XG4gICAgTEFUSU46IDAsXG4gICAgQUZSSUtBQU5TOiAxMDc4LFxuICAgIEFMQkFOSUFOOiAxMDUyLFxuICAgIEFSQUJJQ19BTEdFUklBOiA1MTIxLFxuICAgIEFSQUJJQ19CQUhSQUlOOiAxNTM2MSxcbiAgICBBUkFCSUNfRUdZUFQ6IDMwNzMsXG4gICAgQVJBQklDX0lSQVE6IDIwNDksXG4gICAgQVJBQklDX0pPUkRBTjogMTEyNjUsXG4gICAgQVJBQklDX0tVV0FJVDogMTMzMTMsXG4gICAgQVJBQklDX0xFQkFOT046IDEyMjg5LFxuICAgIEFSQUJJQ19MSUJZQTogNDA5NyxcbiAgICBBUkFCSUNfTU9ST0NDTzogNjE0NSxcbiAgICBBUkFCSUNfT01BTjogODE5MyxcbiAgICBBUkFCSUNfUUFUQVI6IDE2Mzg1LFxuICAgIEFSQUJJQ19TQVVESV9BUkFCSUE6IDEwMjUsXG4gICAgQVJBQklDX1NZUklBOiAxMDI0MSxcbiAgICBBUkFCSUNfVFVOSVNJQTogNzE2OSxcbiAgICBBUkFCSUNfVUFFOiAxNDMzNyxcbiAgICBBUkFCSUNfWUVNRU46IDkyMTcsXG4gICAgQVJBQklDX0FSTUVOSUFOOiAxMDY3LFxuICAgIEFaRVJJX0NZUklMSUM6IDIwOTIsXG4gICAgQVpFUklfTEFUSU46IDEwNjgsXG4gICAgQkFTUVVFOiAxMDY5LFxuICAgIEJFTEFSVVNJQU46IDEwNTksXG4gICAgQlVMR0FSSUFOOiAxMDI2LFxuICAgIENBVEFMQU46IDEwMjcsXG4gICAgQ0hJTkVTRV9IT05HS09OR19TQVI6IDMwNzYsXG4gICAgQ0hJTkVTRV9NQUNBT19TQVI6IDUxMjQsXG4gICAgQ0hJTkVTRTogMjA1MixcbiAgICBDSElORVNFX1NJTkdBUE9SRTogNDEwMCxcbiAgICBDSElORVNFX1RBSVdBTjogMTAyOCxcbiAgICBDUk9BVElBTjogMTA1MCxcbiAgICBDWkVDSDogMTAyOSxcbiAgICBEQU5JU0g6IDEwMzAsXG4gICAgRElWRUhJOiAxMTI1LFxuICAgIERVVENIX0JFTEdJVU06IDIwNjcsXG4gICAgRFVUQ0hfTkVUSEVSTEFORFM6IDEwNDMsXG4gICAgRU5HTElTSF9BVVNUUkFMSUE6IDMwODEsXG4gICAgRU5HTElTSF9CRUxJWkU6IDEwMjQ5LFxuICAgIEVOR0xJU0hfQ0FOQURBOiA0MTA1LFxuICAgIEVOR0xJU0hfQ0FSUklCRUFOOiA5MjI1LFxuICAgIEVOR0xJU0hfSVJFTEFORDogNjE1MyxcbiAgICBFTkdMSVNIX0pBTUFJQ0E6IDgyMDEsXG4gICAgRU5HTElTSF9ORVdfWkVBTEFORDogNTEyOSxcbiAgICBFTkdMSVNIX1BISUxJUFBJTkVTOiAxMzMyMSxcbiAgICBFTkdMSVNIX1NPVVRIX0FGUklDQTogNzE3NyxcbiAgICBFTkdMSVNIX1RSSU5JREFEOiAxMTI3MyxcbiAgICBFTkdMSVNIX1VLOiAyMDU3LFxuICAgIEVOR0xJU0hfVVM6IDEwMzMsXG4gICAgRU5HTElTSF9aSU1CQUJXRTogMTIyOTcsXG4gICAgRVNUT05JQU46IDEwNjEsXG4gICAgRkFFUk9FU0U6IDEwODAsXG4gICAgRkFSU0k6IDEwNjUsXG4gICAgRklOTklTSDogMTAzNSxcbiAgICBGUkVOQ0hfQkVMR0lVTTogMjA2MCxcbiAgICBGUkVOQ0hfQ0FOQURBOiAzMDg0LFxuICAgIEZSRU5DSF9GUkFOQ0U6IDEwMzYsXG4gICAgRlJFTkNIX0xVWEVNQk9VUkc6IDUxMzIsXG4gICAgRlJFTkNIX01PTkFDTzogNjE1NixcbiAgICBGUkVOQ0hfU1dJVFpFUkxBTkQ6IDQxMDgsXG4gICAgRllST19NQUNFRE9OSUFOOiAxMDcxLFxuICAgIEdBTElDSUFOOiAxMTEwLFxuICAgIEdFT1JHSUFOOiAxMDc5LFxuICAgIEdFUk1BTl9BVVNUUklBOiAzMDc5LFxuICAgIEdFUk1BTl9HRVJNQU5ZOiAxMDMxLFxuICAgIEdFUk1BTl9MSUVDSFRFTlNURUlOOiA1MTI3LFxuICAgIEdFUk1BTl9MVVhFTUJPVVJHOiA0MTAzLFxuICAgIEdFUk1BTl9TV0lUWkVSTEFORDogMjA1NSxcbiAgICBHUkVFSzogMTAzMixcbiAgICBHVUpBUkFUSTogMTA5NSxcbiAgICBIRUJSRVc6IDEwMzcsXG4gICAgSElORElfSU5ESUE6IDEwODEsXG4gICAgSFVOR0FSSUFOOiAxMDM4LFxuICAgIElDRUxBTkRJQzogMTAzOSxcbiAgICBJTkRPTkVTSUFOOiAxMDU3LFxuICAgIElUQUxJQU5fSVRBTFk6IDEwNDAsXG4gICAgSVRBTElBTl9TV0lUWkVSTEFORDogMjA2NCxcbiAgICBKQVBBTkVTRTogMTA0MSxcbiAgICBLQU5OQURBOiAxMDk5LFxuICAgIEtBWkFLSDogMTA4NyxcbiAgICBLT05LQU5JOiAxMTExLFxuICAgIEtPUkVBTjogMTA0MixcbiAgICBLWVJHWVpfQ1lSSUxJQ0s6IDEwODgsXG4gICAgTEFUVklBTjogMTA2MixcbiAgICBMSVRIVUFOSUFOOiAxMDYzLFxuICAgIE1BTEFZX01BTEFZU0lBOiAxMDg2LFxuICAgIE1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOiAyMTEwLFxuICAgIE1BUkFUSEk6IDExMDIsXG4gICAgTU9OR09MSUFOX0NZUklMSUM6IDExMDQsXG4gICAgTk9SV0VHSUFOX0JPS01BTDogMTA0NCxcbiAgICBOT1JXRUdJQU5fTllPUlNLOiAyMDY4LFxuICAgIFBPTElTSDogMTA0NSxcbiAgICBQT1JUVUdVRVNFX0JSQVpJTDogMTA0NixcbiAgICBQT1JUVUdVRVNFX1BPUlRVR0FMOiAyMDcwLFxuICAgIFBVTkpBQkk6IDEwOTQsXG4gICAgUkhBRVRPX1JPTUFOSUM6IDEwNDcsXG4gICAgUk9NQU5JQU46IDEwNDgsXG4gICAgUlVTU0lBTjogMTA0OSxcbiAgICBTQU5TS1JJVDogMTEwMyxcbiAgICBTRVJCSUFOX0NZUklMSUM6IDMwOTgsXG4gICAgU0VSQklBTl9MQVRJTjogMjA3NCxcbiAgICBTTE9WQUs6IDEwNTEsXG4gICAgU0xPVkVOSUFOOiAxMDYwLFxuICAgIFNQQU5JU0hfQVJHRU5USU5BOiAxMTI3NCxcbiAgICBTUEFOSVNIX0JPTElWSUE6IDE2Mzk0LFxuICAgIFNQQU5JU0hfQ0hJTEU6IDEzMzIyLFxuICAgIFNQQU5JQ0hfQ09MT01CSUE6IDkyMjYsXG4gICAgU1BBTklTSF9DT1NUQV9SSUNBOiA1MTMwLFxuICAgIFNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOiA3MTc4LFxuICAgIFNQQU5JU0hfRUNVQURPUjogMTIyOTgsXG4gICAgU1BBTklTSF9FTF9TQUxWQURPUjogMTc0MTgsXG4gICAgU1BBTklTSF9HVUFURU1BTEE6IDQxMDYsXG4gICAgU1BBTklTSF9IT05EVVJBUzogMTg0NDIsXG4gICAgU1BBTklTSF9NRVhJQ086IDIwNTgsXG4gICAgU1BBTklTSF9OSUNBUkFHVUE6IDE5NDY2LFxuICAgIFNQQU5JU0hfUEFOQU1BOiA2MTU0LFxuICAgIFNQQU5JU0hfUEFSQUdVQVk6IDE1MzcwLFxuICAgIFNQQU5JU0hfUEVSVTogMTAyNTAsXG4gICAgU1BBTklTSF9QVUVSVE9fUklDTzogMjA0OTAsXG4gICAgU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOiAxMDM0LFxuICAgIFNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOiAzMDgyLFxuICAgIFNQQU5JU0hfVVJVR1VBWTogMTQzNDYsXG4gICAgU1BBTklTSF9WRU5FWlVFTEE6IDgyMDIsXG4gICAgU1dBSElMSTogMTA4OSxcbiAgICBTV0VESVNIOiAxMDUzLFxuICAgIFNXRURJU0hfRklOTEFORDogMjA3NyxcbiAgICBTWVJJQUM6IDExMTQsXG4gICAgVEFNSUw6IDEwOTcsXG4gICAgVEFUQVI6IDEwOTIsXG4gICAgVEVMVUdVOiAxMDk4LFxuICAgIFRIQUlfVEhBSUxBTkQ6IDEwNTQsXG4gICAgVFVSS0lTSDogMTA1NSxcbiAgICBUQUpJS19DWVJJTExJQzogMTA2NCxcbiAgICBUVVJLTUVOOiAxMDkwLFxuICAgIFVLUkFJTklBTjogMTA1OCxcbiAgICBVUkRVOiAxMDU2LFxuICAgIFVaQkVLX0NZUklMSUM6IDIxMTUsXG4gICAgVVpCRUtfTEFUSU46IDEwOTEsXG4gICAgVklFVE5BTUVTRTogMTA2NixcbiAgICBDVENfU0lNUExJRklFRDogNTAwMDEsXG4gICAgQ1RDX1RSQURJVElPTkFMOiA1MDAwMixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdGluXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BRlJJS0FBTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWZyaWthYW5zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTEJBTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGJhbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FMR0VSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChBbGdlcmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0JBSFJBSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChCYWhyYWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0VHWVBUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoRWd5cHQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSVJBUTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKElyYXEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfSk9SREFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoSm9yZGFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0tVV0FJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEt1d2FpdClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MRUJBTk9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTGViYW5vbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19MSUJZQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExpYnlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX01PUk9DQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChNb3JvY2NvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX09NQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChPbWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1FBVEFSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoUWF0YXIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfU0FVRElfQVJBQklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU2F1ZGkgQXJhYmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NZUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoU3lyaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVFVOSVNJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFR1bmlzaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfVUFFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoVS5BLkUuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1lFTUVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoWWVtZW4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfQVJNRU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJtZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFaRVJJX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFTUVVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhc3F1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkVMQVJVU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCZWxhcnVzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CVUxHQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQnVsZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DQVRBTEFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhdGFsYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfSE9OR0tPTkdfU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKEhvbmdLb25nIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfTUFDQU9fU0FSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKE1hY2FvIFMuQS5SLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9TSU5HQVBPUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoU2luZ2Fwb3JlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0hJTkVTRV9UQUlXQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hpbmVzZSAoVGFpd2FuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1JPQVRJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3JvYXRpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNaRUNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN6ZWNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EQU5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGFuaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ESVZFSEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGl2ZWhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5EVVRDSF9CRUxHSVVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfTkVUSEVSTEFORFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHV0Y2ggKE5ldGhlcmxhbmRzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9BVVNUUkFMSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQXVzdHJhbGlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9CRUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQmVsaXplKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQU5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9DQVJSSUJFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoQ2FyaWJiZWFuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9JUkVMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKElyZWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX0pBTUFJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoSmFtYWljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfTkVXX1pFQUxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoTmV3IFplYWxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1BISUxJUFBJTkVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFBoaWxpcHBpbmVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9TT1VUSF9BRlJJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoU291dGggQWZyaWNhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9UUklOSURBRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChUcmluaWRhZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVW5pdGVkIEtpbmdkb20pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1pJTUJBQldFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFppbWJhYndlKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVNUT05JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXN0b25pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZBRVJPRVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhZXJvZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQVJTSTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXJzaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRklOTklTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaW5uaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEJlbGdpdW0pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoQ2FuYWRhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0ZSQU5DRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEZyYW5jZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9NT05BQ086XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChNb25hY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChTd2l0emVybGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdBTElDSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdhbGljaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRU9SR0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZW9yZ2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0FVU1RSSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChBdXN0cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0dFUk1BTlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChHZXJtYW55KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xJRUNIVEVOU1RFSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMaWVjaHRlbnN0ZWluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX0xVWEVNQk9VUkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VybWFuIChMdXhlbWJvdXJnKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VSTUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HUkVFSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmVla1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1VKQVJBVEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3VqYXJhdGlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhFQlJFVzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWJyZXdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhJTkRJX0lORElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhpbmRpIChJbmRpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkhVTkdBUklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIdW5nYXJpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklDRUxBTkRJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJY2VsYW5kaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklORE9ORVNJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5kb25lc2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSVRBTElBTl9JVEFMWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJdGFsaWFuIChJdGFseSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fU1dJVFpFUkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5KQVBBTkVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKYXBhbmVzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FOTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYW5uYWRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LQVpBS0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2F6YWtoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5LT05LQU5JOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIktvbmthbmlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktPUkVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLb3JlYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktZUkdZWl9DWVJJTElDSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLeXJneXogKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTEFUVklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMYXR2aWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MSVRIVUFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpdGh1YW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZZUk9fTUFDRURPTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGWVJPIE1hY2Vkb25pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BTEFZX01BTEFZU0lBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hbGF5IChNYWxheXNpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BTEFZX0JSVU5FSV9EQVJVU1NBTEFNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1hbGF5IChCcnVuZWkgRGFydXNzYWxhbSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk1BUkFUSEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFyYXRoaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTU9OR09MSUFOX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9uZ29saWFuIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5PUldFR0lBTl9CT0tNQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9yd2VnaWFuIChCb2ttYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OT1JXRUdJQU5fTllPUlNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vcndlZ2lhbiAoTnlub3JzaylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPTElTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb2xpc2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPUlRVR1VFU0VfQlJBWklMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnR1Z3Vlc2UgKEJyYXppbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBPUlRVR1VFU0VfUE9SVFVHQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHVndWVzZSAoUG9ydHVnYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5QVU5KQUJJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlB1bmphYmlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJIQUVUT19ST01BTklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJoYWV0by1Sb21hbmljXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ST01BTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSb21hbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlVTU0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSdXNzaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TQU5TS1JJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTYW5za3JpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJiaWFuIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZBSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92YWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZFTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92ZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQVJHRU5USU5BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEFyZ2VudGluYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQk9MSVZJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChCb2xpdmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9DSElMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDaGlsZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JQ0hfQ09MT01CSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29sb21iaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NPU1RBX1JJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29zdGEgUmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKERvbWluaWNhbiBSZXB1YmxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRUNVQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFY3VhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FTF9TQUxWQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFbCBTYWx2YWRvcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfR1VBVEVNQUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEd1YXRlbWFsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSE9ORFVSQVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoSG9uZHVyYXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX01FWElDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChNZXhpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX05JQ0FSQUdVQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChOaWNhcmFndWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBTkFNQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQYW5hbWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBUkFHVUFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhcmFndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QRVJVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBlcnUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BVRVJUT19SSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFB1ZXJ0byBSaWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFRyYWRpdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChJbnRlcm5hdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1VSVUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVXJ1Z3VheSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVkVORVpVRUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFZlbmV6dWVsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXQUhJTEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dhaGlsaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dFRElTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIX0ZJTkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaCAoRmlubGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNZUklBQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTeXJpYWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBTUlMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhbWlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXRhclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEVMVUdVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbHVndVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEhBSV9USEFJTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGFpIChUaGFpbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRVUktJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHVya2lzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFKSUtfQ1lSSUxMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFqaWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS01FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJrbWVuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VS1JBSU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVWtyYWluaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VUkRVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVyZHVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVaQkVLX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVklFVE5BTUVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaWV0bmFtZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfU0lNUExJRklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVEMgU2ltcGxpZmllZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1RDX1RSQURJVElPTkFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBUcmFkaXRpb25hbFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQS0RSZXNvdXJjZVR5cGUgPSB7XG4gICAgQ0VSVElGSUNBVEVfUEE6IDAsXG4gICAgQ0VSVElGSUNBVEVfVEE6IDEsXG4gICAgTERJRjogMixcbiAgICBDUkw6IDMsXG4gICAgTUw6IDQsXG4gICAgREVGTDogNSxcbiAgICBERVZMOiA2LFxuICAgIEJMOiA3LFxuXHJcbiAgICBnZXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0VSVElGSUNBVEVfUEFcclxuICAgICAgICAgICAgY2FzZSBcInRhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9UQVxyXG4gICAgICAgICAgICBjYXNlIFwibGRpZlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTERJRlxyXG4gICAgICAgICAgICBjYXNlIFwiY3JsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DUkxcclxuICAgICAgICAgICAgY2FzZSBcIm1sXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NTFxyXG4gICAgICAgICAgICBjYXNlIFwiZGVmbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVGTFxyXG4gICAgICAgICAgICBjYXNlIFwiZGV2bFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuREVWTFxyXG4gICAgICAgICAgICBjYXNlIFwiYmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJMXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9QQVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ0ZpbmlzaGVkU3RhdHVzID0ge1xuICAgIE5PVF9SRUFEWTogMCxcbiAgICBSRUFEWTogMSxcbiAgICBUSU1FT1VUOiAyLFxufVxuXG5leHBvcnQgY29uc3QgUkdMTWVhc3VyZVN5c3RlbSA9IHtcbiAgICBNRVRSSUM6IDAsXG4gICAgSU1QRVJJQUw6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0lkZW50aWZpZXIgPSB7XG4gICAgU0NFTkFSSU9fTVJaOiBcIk1yelwiLFxuICAgIFNDRU5BUklPX0JBUkNPREU6IFwiQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX0xPQ0FURTogXCJMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19PQ1I6IFwiT2NyXCIsXG4gICAgU0NFTkFSSU9fRE9DVFlQRTogXCJEb2NUeXBlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREU6IFwiTXJ6T3JCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0xPQ0FURTogXCJNcnpPckxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9BTkRfTE9DQVRFOiBcIk1yekFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9PQ1I6IFwiTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERV9PUl9PQ1I6IFwiTXJ6T3JCYXJjb2RlT3JPY3JcIixcbiAgICBTQ0VOQVJJT19MT0NBVEVfVklTVUFMX0FORF9NUlpfT1JfT0NSOiBcIkxvY2F0ZVZpc3VhbF9BbmRfTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19GVUxMX1BST0NFU1M6IFwiRnVsbFByb2Nlc3NcIixcbiAgICBTQ0VOQVJJT19GVUxMX0FVVEg6IFwiRnVsbEF1dGhcIixcbiAgICBTQ0VOQVJJT19JRDNSVVM6IFwiSWQzUnVzXCIsXG4gICAgU0NFTkFSSU9fUlVTX1NUQU1QOiBcIlJ1c1N0YW1wXCIsXG4gICAgU0NFTkFSSU9fT0NSX0ZSRUU6IFwiT2NyRnJlZVwiLFxuICAgIFNDRU5BUklPX0NSRURJVF9DQVJEOiBcIkNyZWRpdENhcmRcIixcbiAgICBTQ0VOQVJJT19DQVBUVVJFOiBcIkNhcHR1cmVcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDYXAgPSB7XG4gICAgQnV0dDogMCxcbiAgICBSb3VuZDogMSxcbiAgICBTcXVhcmU6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSUludGVyZmFjZU9yaWVudGF0aW9uTWFzayA9IHtcbiAgICBQb3J0cmFpdDogMCxcbiAgICBMYW5kc2NhcGVMZWZ0OiAxLFxuICAgIExhbmRzY2FwZVJpZ2h0OiAyLFxuICAgIFBvcnRyYWl0VXBzaWRlRG93bjogMyxcbiAgICBMYW5kc2NhcGU6IDQsXG4gICAgQWxsOiA1LFxuICAgIEFsbEJ1dFVwc2lkZURvd246IDYsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0ID0ge1xuICAgIExvdzogMCxcbiAgICBNZWRpdW06IDEsXG4gICAgSGlnaDogMixcbiAgICBQaG90bzogMyxcbiAgICBJbnB1dFByaW9yaXR5OiA0LFxuICAgIFFIRDk2MHg1NDA6IDUsXG4gICAgSGQxMjgweDcyMDogNixcbiAgICBIZDE5MjB4MTA4MDogNyxcbiAgICBIZDRLMzg0MHgyMTYwOiA4LFxuICAgIElGcmFtZTk2MHg1NDA6IDksXG4gICAgSUZyYW1lMTI4MHg3MjA6IDEwLFxuICAgIFF2Z2EzMjB4MjQwOiAxMSxcbiAgICBWZ2E2NDB4NDgwOiAxMixcbiAgICBDaWYzNTJ4Mjg4OiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IEFWQ2FwdHVyZURldmljZVBvc2l0aW9uID0ge1xuICAgIEZyb250OiAwLFxuICAgIEJhY2s6IDEsXG4gICAgVW5zcGVjaWZpZWQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBVSVZpZXdDb250ZW50TW9kZSA9IHtcbiAgICBTY2FsZVRvRmlsbDogMCxcbiAgICBTY2FsZUFzcGVjdEZpdDogMSxcbiAgICBTY2FsZUFzcGVjdEZpbGw6IDIsXG4gICAgUmVkcmF3OiAzLFxuICAgIENlbnRlcjogNCxcbiAgICBUb3A6IDUsXG4gICAgQm90dG9tOiA2LFxuICAgIExlZnQ6IDcsXG4gICAgUmlnaHQ6IDgsXG4gICAgVG9wTGVmdDogOSxcbiAgICBUb3BSaWdodDogMTAsXG4gICAgQm90dG9tTGVmdDogMTEsXG4gICAgQm90dG9tUmlnaHQ6IDEyLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEJhcmNvZGVSZXN1bHQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIENhbWVyYU1vZGUsXG4gICBDYW1lcmFUeXBlcyxcbiAgIENhcHR1cmVNb2RlLFxuICAgZGlEb2NUeXBlLFxuICAgRG9jRm9ybWF0LFxuICAgRG9jUmVhZGVyQWN0aW9uLFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBEb2NSZWFkZXJPcmllbnRhdGlvbixcbiAgIERvY3VtZW50UmVhZGVyRXhjZXB0aW9uLFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBlQ2hlY2tSZXN1bHQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBlUHJvY2Vzc0dMQ29tbWFuZHMsXG4gICBlUmVxdWVzdENvbW1hbmQsXG4gICBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9CYXVkUmF0ZSxcbiAgIGVSRklEX0NlcnRpZmljYXRlVHlwZSxcbiAgIGVSRklEX0RhdGFGaWxlX1R5cGUsXG4gICBlUkZJRF9Ob3RpZmljYXRpb25BbmRFcnJvckNvZGVzLFxuICAgZVJGSURfUGFzc3dvcmRfVHlwZSxcbiAgIGVSRklEX1NES19Qcm9maWxlclR5cGUsXG4gICBlUkZJRF9UZXJtaW5hbFR5cGUsXG4gICBlUlBSTV9BdXRoZW50aWNpdHksXG4gICBlUlBSTV9GaWVsZFZlcmlmaWNhdGlvblJlc3VsdCxcbiAgIGVSUFJNX0xpZ2h0cyxcbiAgIGVSUFJNX1Jlc3VsdFR5cGUsXG4gICBlUlBSTV9TZWN1cml0eUZlYXR1cmVUeXBlLFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgZVZpc3VhbEZpZWxkVHlwZSxcbiAgIEZvbnRTdHlsZSxcbiAgIEZyYW1lU2hhcGVUeXBlLFxuICAgTENJRCxcbiAgIFBLRFJlc291cmNlVHlwZSxcbiAgIFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyxcbiAgIFJHTE1lYXN1cmVTeXN0ZW0sXG4gICBTY2VuYXJpb0lkZW50aWZpZXIsXG4gICBMaW5lQ2FwLFxuICAgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2ssXG4gICBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24sXG4gICBVSVZpZXdDb250ZW50TW9kZSxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEb2N1bWVudFJlYWRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXJlYWRlci1hcGknLFxuICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0RvY3VtZW50UmVhZGVyLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIEFQSSB2ZXJzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QVBJVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdmFpbGFibGVTY2VuYXJpb3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIENvcmUgbW9kZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldENvcmVNb2RlKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSB2ZXJzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29yZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBleHBvcnQgZGF0ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERhdGFiYXNlRGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIElEXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VJRCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIHZlcnNpb25cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZVZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgdGhlIFNESyBpcyByZWFkeSBmb3IgdXNlXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgRG9jdW1lbnQgUmVhZGVyIHN0YXR1c1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERvY3VtZW50UmVhZGVyU3RhdHVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBjb3VudHJpZXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREYXRhYmFzZUNvdW50cmllc051bWJlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIG51bWJlciBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGF0YWJhc2VEb2N1bWVudHNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBzZWxlY3RlZCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbGVjdGVkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBwYXRoIHRvIHRoZSBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQmVmb3JlIHVzaW5nIHRoaXMsIGVuYWJsZSBsb2cgc2F2aW5nLiBFYWNoIG5ldyBzZXNzaW9uIHByb3ZpZGVzIGEgZGlmZmVyZW50IHBhdGhcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTZXNzaW9uTG9nRm9sZGVyKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgZGF0YWJhc2UgZG9jdW1lbnRzIHVzZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldERhdGFiYXNlRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgc2hvd1NjYW5uZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0TmV3UGFnZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IGEgbmV3IHNlc3Npb25cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIG9wZW4gdGhlIFJGSUQgY2hpcCByZWFkaW5nIGNvbnRyb2xsZXIgYW5kIHN0YXJ0IGl0cyBwcm9jZXNzaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdGFydFJGSURSZWFkZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wUkZJRFJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGNsb3NlIGNhbWVyYSBwcmV2aWV3IGFuZCBzdG9wIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGRlaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWluaXRpYWxpemVSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXV0aGVudGljYXRvckF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBSRklEIHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UmZpZFNjZW5hcmlvKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMaWNlbnNlRXhwaXJ5RGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgYSBsaXN0IG9mIGNvdW50cnkgaWRlbnRpZmllcnMgdGhhdCBhcmUgZGVmaW5lZCBmb3IgcHJvY2Vzc2luZyBpbiB0aGUgbGljZW5zZS4gSWYgdGhlIGFycmF5IGlzIGVtcHR5LCB0aGVyZSBhcmUgbm8gcmVzdHJpY3Rpb25zIGZvciBwcm9jZXNzaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgTkZDIGNoaXAgcmVhZGluZyBjYXBhYmlsaXR5IGlzIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpY2Vuc2VJc1JmaWRBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q2FtZXJhU2Vzc2lvbklzUGF1c2VkKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgeW91IHRvIHJlbW92ZSB0aGUgYWRkZWQgZGF0YWJhc2VcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgQWxsb3dzIHlvdSB0byBjYW5jZWwgZGF0YWJhc2UgdXBkYXRlXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2FuY2VsREJVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXRDb25maWd1cmF0aW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xlYXIgUEtEIGNlcnRpZmljYXRlc1xuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgUkZJRCBjaGlwIHByb2Nlc3NpbmdcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlYWRSRklEKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRSZmlkU2Vzc2lvblN0YXR1cygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBDb3JlIGxvZ3NcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBsb2dzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW5hYmxlQ29yZUxvZ3MobG9nczogYm9vbGVhbik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhZGRQS0RDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgSWYgc2V0LCB0aGUgY2FtZXJhIHNlc3Npb24gd2lsbCBiZSBwYXVzZWQgYXMgc29vbiBhcyB0aGUgcmVzdWx0IGlzIHJlY2VpdmVkXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q2FtZXJhU2Vzc2lvbklzUGF1c2VkKHBhdXNlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGEgc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvIFNjZW5hcmlvYHMgdW5pcXVlIGlkZW50aWZpZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTY2VuYXJpbyhzY2VuYXJpbzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBpbWFnZXMgQXJyYXkgb2Ygc3RyaW5ncyB0aGF0IGFyZSBiYXNlNjQgcmVwcmVzZW50YXRpb25zIG9mIGltYWdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VzKGltYWdlczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBvcGVuIHRoZSBjYW1lcmEgcHJldmlldyB3aXRoIHRoZSBkZXNpcmVkIGNhbWVyYSBJRCB3aGljaCB3aWxsIHBhc3MgZnJhbWVzIGZvciByZWNvZ25pdGlvbiBhbmQgcmV0dXJuIHJlc3VsdHMgaW4gdGhlIGNvbXBsZXRpb24gYmxvY2sgd2hlbiB0aGV5IGFyZSByZWFkeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHNob3dTY2FubmVyV2l0aENhbWVyYUlEKGNhbWVyYUlEOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhYmFzZVR5cGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBjb25maWdcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNvbmZpZyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgKiAgdmFsdWUgLSBhbnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBzY2VuYXJpbyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlIHtuYW1lPzogdmFsdWUxLG5hbWU/OiB2YWx1ZTIsIC4uLn1cbiAgICogIG5hbWUgLSBzdHJpbmdcbiAgICogIHZhbHVlIC0gYW55XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmZpZFNjZW5hcmlvKHNjZW5hcmlvOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlIExpY2Vuc2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0aWFsaXplUmVhZGVyKGxpY2Vuc2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZG93bmxvYWQgYSBkYXRhYmFzZSBmcm9tIHRoZSBSZWd1bGEncyBzZXJ2ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcHJlcGFyZURhdGFiYXNlKGRhdGFiYXNlVHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZShpbWFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgYW4gUkZJRCBzZXNzaW9uIHN0YXR1c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmZpZFNlc3Npb25TdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyIHdpdGggdGhlIHBhdGggdG8gdGhlIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaWNlbnNlIExpY2Vuc2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCB0byB0aGUgZGF0YWJhc2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0aWFsaXplUmVhZGVyV2l0aERhdGFiYXNlUGF0aChsaWNlbnNlOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIGZyYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgKiBAcGFyYW0ge2FueX0gcGFyYW1zIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmUge3dpZHRoOiB2YWx1ZTEsIGhlaWdodDogdmFsdWUyLCB0eXBlOiB2YWx1ZTN9XG4gICAqICB2YWx1ZTEgLSBudW1iZXJcbiAgICogIHZhbHVlMiAtIG51bWJlclxuICAgKiAgdmFsdWUzIC0gbnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICByZWNvZ25pemVJbWFnZUZyYW1lKGltYWdlOiBzdHJpbmcsIHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2Ugd2l0aCBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgKiBAcGFyYW0ge2FueX0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAqICAgIHtmdW5jdGlvbmFsaXR5Pzoge25hbWU/OiB2YWx1ZTEsIG5hbWU/OiB2YWx1ZTIsIC4uLn0sXG4gICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgKiAgbmFtZSAtIHN0cmluZ1xuICAgKiAgdmFsdWUgLSBhbnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aE9wdHMoaW1hZ2U6IHN0cmluZywgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBieXRlU3RyaW5nXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7d2lkdGg6IHZhbHVlLCBoZWlnaHQ6IHZhbHVlLCB0eXBlOiB2YWx1ZX1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZVZpZGVvRnJhbWUoYnl0ZVN0cmluZzogc3RyaW5nLCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2l0aCB0aGUgZGVzaXJlZCBjYW1lcmEgSUQgYW5kIG9wdGlvbnMgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlEXG4gICAqIEBwYXJhbSB7YW55fSBvcHRpb25zIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICogICAgY3VzdG9taXphdGlvbj86IHtuYW1lPzogdmFsdWUzLCBuYW1lPzogdmFsdWU0LCAuLi59LFxuICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAqICBuYW1lIC0gc3RyaW5nXG4gICAqICB2YWx1ZSAtIGFueVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSURBbmRPcHRzKGNhbWVyYUlEOiBudW1iZXIsIG9wdGlvbnM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGltYWdlcyB3aXRoIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXMgSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7d2lkdGg6IHZhbHVlMSwgaGVpZ2h0OiB2YWx1ZTIsIHR5cGU6IHZhbHVlM31cbiAgICogIHZhbHVlMSAtIG51bWJlclxuICAgKiAgdmFsdWUyIC0gbnVtYmVyXG4gICAqICB2YWx1ZTMgLSBudW1iZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29nbml6ZUltYWdlV2l0aEltYWdlSW5wdXRQYXJhbXMoaW1hZ2U6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gIC8qKlxuICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhIHN0cmVhbSBvZiBmcmFtZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIEltYWdlYHMgYmFzZTY0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW9kZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogc3RyaW5nLCBtb2RlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cbn0iXX0=
