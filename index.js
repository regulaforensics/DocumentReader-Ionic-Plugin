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
        result.message = jsonObject["message"];
        return result;
    };
    return DocumentReaderException;
}());
export { DocumentReaderException };
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
    MRZ: 8388608,
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
    MRZ_QUALITY_WRONG_MRZ_DPI: 200,
    MRZ_QUALITY_WRONG_BACKGROUND: 201,
    LAST_DIAGNOSE_VALUE: 210,
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
    DocumentReaderOriginal.prototype.isBlePermissionsGranted = function () { return cordova(this, "isBlePermissionsGranted", {}, arguments); };
    DocumentReaderOriginal.prototype.startBluetoothService = function () { return cordova(this, "startBluetoothService", {}, arguments); };
    DocumentReaderOriginal.prototype.initializeReaderBleDeviceConfig = function () { return cordova(this, "initializeReaderBleDeviceConfig", {}, arguments); };
    DocumentReaderOriginal.prototype.getTag = function () { return cordova(this, "getTag", {}, arguments); };
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
    DocumentReaderOriginal.prototype.setTag = function (tag) { return cordova(this, "setTag", {}, arguments); };
    DocumentReaderOriginal.prototype.checkDatabaseUpdate = function (databaseId) { return cordova(this, "checkDatabaseUpdate", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcmVhZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7SUFPdkIsK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRTlDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7aUNBbEJMOzs7Ozs7SUFvQ1csNkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsWUFBWSxHQUFHLFVBQVUs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QUFpQjtJQVNqQyx1Q0FBYyxhQUFDLEtBQVU7SUFTekIsc0NBQWEsYUFBQyxJQUFTO0lBU3ZCLDZDQUFvQixhQUFDLE1BQVc7SUFZaEMsOENBQXFCLGFBQUMsWUFBaUI7SUFZdkMsOENBQXFCLGFBQUMsWUFBaUI7SUFTdkMsMkNBQWtCLGFBQUMsU0FBYztJQVNqQyx5Q0FBZ0IsYUFBQyxJQUFTO0lBYzFCLHFDQUFZLGFBQUMsTUFBVztJQWV4QiwrQ0FBc0IsYUFBQyxLQUFVLEVBQUUsT0FBWTtJQVUvQyw0Q0FBbUIsYUFBQyxVQUFlLEVBQUUsTUFBVztJQWVoRCx1REFBOEIsYUFBQyxRQUFhLEVBQUUsT0FBWTtJQVUxRCxxREFBNEIsYUFBQyxLQUFVLEVBQUUsSUFBUztJQVNsRCx1REFBOEIsYUFBQyxNQUFXOzs7Ozs7eUJBcHNPOUM7RUF3bE5vQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclNjZW5hcmlvIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2FwdGlvbj86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyU2NlbmFyaW8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuY2FwdGlvbiA9IGpzb25PYmplY3RbXCJjYXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kZXNjcmlwdGlvbiA9IGpzb25PYmplY3RbXCJkZXNjcmlwdGlvblwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlRGV0YWlsZWRTY2VuYXJpbyB7XG4gICAgdXZUb3JjaD86IGJvb2xlYW5cbiAgICBmcmFtZU9yaWVudGF0aW9uPzogbnVtYmVyXG4gICAgZmFjZUV4dD86IGJvb2xlYW5cbiAgICBtdWx0aVBhZ2VPZmY/OiBudW1iZXJcbiAgICBzZXJpZXNQcm9jZXNzTW9kZT86IGJvb2xlYW5cbiAgICBmcmFtZUtXSExhbmRzY2FwZT86IG51bWJlclxuICAgIGZyYW1lS1dIUG9ydHJhaXQ/OiBudW1iZXJcbiAgICBmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdD86IG51bWJlclxuICAgIGZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZT86IG51bWJlclxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjYXB0aW9uPzogc3RyaW5nXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgICBtYW51YWxDcm9wPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb3JlRGV0YWlsZWRTY2VuYXJpbyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvcmVEZXRhaWxlZFNjZW5hcmlvXG5cbiAgICAgICAgcmVzdWx0LnV2VG9yY2ggPSBqc29uT2JqZWN0W1widXZUb3JjaFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVPcmllbnRhdGlvbiA9IGpzb25PYmplY3RbXCJmcmFtZU9yaWVudGF0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlRXh0ID0ganNvbk9iamVjdFtcImZhY2VFeHRcIl1cbiAgICAgICAgcmVzdWx0Lm11bHRpUGFnZU9mZiA9IGpzb25PYmplY3RbXCJtdWx0aVBhZ2VPZmZcIl1cbiAgICAgICAgcmVzdWx0LnNlcmllc1Byb2Nlc3NNb2RlID0ganNvbk9iamVjdFtcInNlcmllc1Byb2Nlc3NNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSExhbmRzY2FwZSA9IGpzb25PYmplY3RbXCJmcmFtZUtXSExhbmRzY2FwZVwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJmcmFtZUtXSFBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5mcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdCA9IGpzb25PYmplY3RbXCJmcmFtZUtXSERvdWJsZVBhZ2VTcHJlYWRQb3J0cmFpdFwiXVxuICAgICAgICByZXN1bHQuZnJhbWVLV0hEb3VibGVQYWdlU3ByZWFkTGFuZHNjYXBlID0ganNvbk9iamVjdFtcImZyYW1lS1dIRG91YmxlUGFnZVNwcmVhZExhbmRzY2FwZVwiXVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jYXB0aW9uID0ganNvbk9iamVjdFtcImNhcHRpb25cIl1cbiAgICAgICAgcmVzdWx0LmRlc2NyaXB0aW9uID0ganNvbk9iamVjdFtcImRlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5tYW51YWxDcm9wID0ganNvbk9iamVjdFtcIm1hbnVhbENyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZU1ldGFEYXRhIHtcbiAgICBJRD86IG51bWJlclxuICAgIHJvbGxBbmdsZT86IG51bWJlclxuICAgIGJvdW5kcz86IEJvdW5kc1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlTWV0YURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlTWV0YURhdGFcblxuICAgICAgICByZXN1bHQuSUQgPSBqc29uT2JqZWN0W1wiSURcIl1cbiAgICAgICAgcmVzdWx0LnJvbGxBbmdsZSA9IGpzb25PYmplY3RbXCJyb2xsQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kcyA9IEJvdW5kcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiYm91bmRzXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQm91bmRzIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQm91bmRzXG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgICBib3R0b20/OiBudW1iZXJcbiAgICB0b3A/OiBudW1iZXJcbiAgICBsZWZ0PzogbnVtYmVyXG4gICAgcmlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJGaWVsZFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2NSZWFkZXJGaWVsZFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2NSZWFkZXJGaWVsZFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZCB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIGZpZWxkVHlwZT86IG51bWJlclxuICAgIGxpZ2h0VHlwZT86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGZpZWxkTmFtZT86IHN0cmluZ1xuICAgIGxpZ2h0TmFtZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgZmllbGRSZWN0PzogRG9jUmVhZGVyRmllbGRSZWN0XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyR3JhcGhpY0ZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5saWdodFR5cGUgPSBqc29uT2JqZWN0W1wibGlnaHRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wYWdlSW5kZXggPSBqc29uT2JqZWN0W1wicGFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5saWdodE5hbWUgPSBqc29uT2JqZWN0W1wibGlnaHROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZmllbGRSZWN0ID0gRG9jUmVhZGVyRmllbGRSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZFJlY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyR3JhcGhpY1Jlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVmFsdWUge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICB2YWxpZGl0eT86IG51bWJlclxuICAgIHByb2JhYmlsaXR5PzogbnVtYmVyXG4gICAgdmFsdWU/OiBzdHJpbmdcbiAgICBvcmlnaW5hbFZhbHVlPzogc3RyaW5nXG4gICAgYm91bmRSZWN0PzogUmVjdFxuICAgIGNvbXBhcmlzb24/OiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+XG4gICAgb3JpZ2luYWxTeW1ib2xzPzogRG9jdW1lbnRSZWFkZXJTeW1ib2xbXVxuICAgIHJmaWRPcmlnaW4/OiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVmFsdWVcblxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eSA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVwiXVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFZhbHVlID0ganNvbk9iamVjdFtcIm9yaWdpbmFsVmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LmJvdW5kUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImJvdW5kUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNvbXBhcmlzb24gPSB7fVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNvbXBhcmlzb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25baSBhcyB1bmtub3duIGFzIG51bWJlcl0gPSBqc29uT2JqZWN0W1wiY29tcGFyaXNvblwiXVtpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFN5bWJvbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm9yaWdpbmFsU3ltYm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclN5bWJvbC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxTeW1ib2xzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9yaWdpbmFsU3ltYm9scy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJmaWRPcmlnaW4gPSBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4uZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRPcmlnaW5cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyVGV4dEZpZWxkIHtcbiAgICBmaWVsZFR5cGU/OiBudW1iZXJcbiAgICBsY2lkPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgbGNpZE5hbWU/OiBzdHJpbmdcbiAgICBmaWVsZE5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIGdldFZhbHVlPzogRG9jdW1lbnRSZWFkZXJWYWx1ZVxuICAgIHZhbHVlcz86IERvY3VtZW50UmVhZGVyVmFsdWVbXVxuICAgIGNvbXBhcmlzb25MaXN0PzogRG9jdW1lbnRSZWFkZXJDb21wYXJpc29uW11cbiAgICB2YWxpZGl0eUxpc3Q/OiBEb2N1bWVudFJlYWRlclZhbGlkaXR5W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRGaWVsZFxuXG4gICAgICAgIHJlc3VsdC5maWVsZFR5cGUgPSBqc29uT2JqZWN0W1wiZmllbGRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5sY2lkID0ganNvbk9iamVjdFtcImxjaWRcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmxjaWROYW1lID0ganNvbk9iamVjdFtcImxjaWROYW1lXCJdXG4gICAgICAgIHJlc3VsdC5maWVsZE5hbWUgPSBqc29uT2JqZWN0W1wiZmllbGROYW1lXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQuZ2V0VmFsdWUgPSBEb2N1bWVudFJlYWRlclZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJnZXRWYWx1ZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widmFsdWVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widmFsdWVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInZhbHVlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uTGlzdCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY29tcGFyaXNvbkxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjb21wYXJpc29uTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbXBhcmlzb25MaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhcmlzb25MaXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudmFsaWRpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ2YWxpZGl0eUxpc3RcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlMaXN0XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbGlkaXR5TGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjb21wYXJpc29uU3RhdHVzPzogbnVtYmVyXG4gICAgdmFsaWRpdHlTdGF0dXM/OiBudW1iZXJcbiAgICBhdmFpbGFibGVTb3VyY2VMaXN0PzogRG9jdW1lbnRSZWFkZXJUZXh0U291cmNlW11cbiAgICBmaWVsZHM/OiBEb2N1bWVudFJlYWRlclRleHRGaWVsZFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jb21wYXJpc29uU3RhdHVzID0ganNvbk9iamVjdFtcImNvbXBhcmlzb25TdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnZhbGlkaXR5U3RhdHVzID0ganNvbk9iamVjdFtcInZhbGlkaXR5U3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5hdmFpbGFibGVTb3VyY2VMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdmFpbGFibGVTb3VyY2VMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXZhaWxhYmxlU291cmNlTGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImF2YWlsYWJsZVNvdXJjZUxpc3RcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXZhaWxhYmxlU291cmNlTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmllbGRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmllbGRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyVGV4dEZpZWxkLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWVsZHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmllbGRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlIHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb29yZGluYXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29vcmRpbmF0ZVxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50UG9zaXRpb24ge1xuICAgIGRvY0Zvcm1hdD86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgZHBpPzogbnVtYmVyXG4gICAgcGFnZUluZGV4PzogbnVtYmVyXG4gICAgaW52ZXJzZT86IG51bWJlclxuICAgIHBlcnNwZWN0aXZlVHI/OiBudW1iZXJcbiAgICBvYmpBcmVhPzogbnVtYmVyXG4gICAgb2JqSW50QW5nbGVEZXY/OiBudW1iZXJcbiAgICByZXN1bHRTdGF0dXM/OiBudW1iZXJcbiAgICBhbmdsZT86IG51bWJlclxuICAgIGNlbnRlcj86IENvb3JkaW5hdGVcbiAgICBsZWZ0VG9wPzogQ29vcmRpbmF0ZVxuICAgIGxlZnRCb3R0b20/OiBDb29yZGluYXRlXG4gICAgcmlnaHRUb3A/OiBDb29yZGluYXRlXG4gICAgcmlnaHRCb3R0b20/OiBDb29yZGluYXRlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVsZW1lbnRQb3NpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVsZW1lbnRQb3NpdGlvblxuXG4gICAgICAgIHJlc3VsdC5kb2NGb3JtYXQgPSBqc29uT2JqZWN0W1wiZG9jRm9ybWF0XCJdXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQuZHBpID0ganNvbk9iamVjdFtcImRwaVwiXVxuICAgICAgICByZXN1bHQucGFnZUluZGV4ID0ganNvbk9iamVjdFtcInBhZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW52ZXJzZSA9IGpzb25PYmplY3RbXCJpbnZlcnNlXCJdXG4gICAgICAgIHJlc3VsdC5wZXJzcGVjdGl2ZVRyID0ganNvbk9iamVjdFtcInBlcnNwZWN0aXZlVHJcIl1cbiAgICAgICAgcmVzdWx0Lm9iakFyZWEgPSBqc29uT2JqZWN0W1wib2JqQXJlYVwiXVxuICAgICAgICByZXN1bHQub2JqSW50QW5nbGVEZXYgPSBqc29uT2JqZWN0W1wib2JqSW50QW5nbGVEZXZcIl1cbiAgICAgICAgcmVzdWx0LnJlc3VsdFN0YXR1cyA9IGpzb25PYmplY3RbXCJyZXN1bHRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmFuZ2xlID0ganNvbk9iamVjdFtcImFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5jZW50ZXIgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZW50ZXJcIl0pXG4gICAgICAgIHJlc3VsdC5sZWZ0VG9wID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wibGVmdFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LmxlZnRCb3R0b20gPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJsZWZ0Qm90dG9tXCJdKVxuICAgICAgICByZXN1bHQucmlnaHRUb3AgPSBDb29yZGluYXRlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyaWdodFRvcFwiXSlcbiAgICAgICAgcmVzdWx0LnJpZ2h0Qm90dG9tID0gQ29vcmRpbmF0ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmlnaHRCb3R0b21cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eSB7XG4gICAgZmVhdHVyZVR5cGU/OiBudW1iZXJcbiAgICByZXN1bHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eVxuXG4gICAgICAgIHJlc3VsdC5mZWF0dXJlVHlwZSA9IGpzb25PYmplY3RbXCJmZWF0dXJlVHlwZVwiXVxuICAgICAgICByZXN1bHQucmVzdWx0ID0ganNvbk9iamVjdFtcInJlc3VsdFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eUdyb3VwIHtcbiAgICBjb3VudD86IG51bWJlclxuICAgIHJlc3VsdD86IG51bWJlclxuICAgIGltYWdlUXVhbGl0eUxpc3Q/OiBJbWFnZVF1YWxpdHlbXVxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHlHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eUdyb3VwXG5cbiAgICAgICAgcmVzdWx0LmNvdW50ID0ganNvbk9iamVjdFtcImNvdW50XCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHQgPSBqc29uT2JqZWN0W1wicmVzdWx0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHlMaXN0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlMaXN0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5TGlzdFwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlUXVhbGl0eUxpc3RcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5TGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGRvY3VtZW50SUQ/OiBudW1iZXJcbiAgICBkVHlwZT86IG51bWJlclxuICAgIGRGb3JtYXQ/OiBudW1iZXJcbiAgICBkTVJaPzogYm9vbGVhblxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBJQ0FPQ29kZT86IHN0cmluZ1xuICAgIGREZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGRZZWFyPzogc3RyaW5nXG4gICAgZENvdW50cnlOYW1lPzogc3RyaW5nXG4gICAgRkRTSUQ/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyRG9jdW1lbnRUeXBlXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmRvY3VtZW50SUQgPSBqc29uT2JqZWN0W1wiZG9jdW1lbnRJRFwiXVxuICAgICAgICByZXN1bHQuZFR5cGUgPSBqc29uT2JqZWN0W1wiZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRGb3JtYXQgPSBqc29uT2JqZWN0W1wiZEZvcm1hdFwiXVxuICAgICAgICByZXN1bHQuZE1SWiA9IGpzb25PYmplY3RbXCJkTVJaXCJdXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LklDQU9Db2RlID0ganNvbk9iamVjdFtcIklDQU9Db2RlXCJdXG4gICAgICAgIHJlc3VsdC5kRGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZERlc2NyaXB0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5kWWVhciA9IGpzb25PYmplY3RbXCJkWWVhclwiXVxuICAgICAgICByZXN1bHQuZENvdW50cnlOYW1lID0ganNvbk9iamVjdFtcImRDb3VudHJ5TmFtZVwiXVxuICAgICAgICByZXN1bHQuRkRTSUQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIkZEU0lEXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiRkRTSURcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuRkRTSUQucHVzaChqc29uT2JqZWN0W1wiRkRTSURcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBhdHRhY2htZW50PzogbnVtYmVyXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LmF0dGFjaG1lbnQgPSBqc29uT2JqZWN0W1wiYXR0YWNobWVudFwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUge1xuICAgIGFjdGl2ZU9wdGlvbklkeD86IG51bWJlclxuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWNjZXNzQ29udHJvbFByb2NlZHVyZVR5cGUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVxuXG4gICAgICAgIHJlc3VsdC5hY3RpdmVPcHRpb25JZHggPSBqc29uT2JqZWN0W1wiYWN0aXZlT3B0aW9uSWR4XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbnMucHVzaChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGF0YSB7XG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmlsZURhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGaWxlRGF0YVxuXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZXJ0aWZpY2F0ZURhdGEge1xuICAgIGxlbmd0aD86IG51bWJlclxuICAgIGRhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2VydGlmaWNhdGVEYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVEYXRhXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlcyB7XG4gICAgc2VjdXJpdHlPYmplY3Q/OiBDZXJ0aWZpY2F0ZURhdGFcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VjdXJpdHlPYmplY3RDZXJ0aWZpY2F0ZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlc1xuXG4gICAgICAgIHJlc3VsdC5zZWN1cml0eU9iamVjdCA9IENlcnRpZmljYXRlRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGUge1xuICAgIHJlYWRpbmdUaW1lPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHBBU3RhdHVzPzogbnVtYmVyXG4gICAgcmVhZGluZ1N0YXR1cz86IG51bWJlclxuICAgIGZpbGVJRD86IHN0cmluZ1xuICAgIGZpbGVEYXRhPzogRmlsZURhdGFcbiAgICBjZXJ0aWZpY2F0ZXM/OiBTZWN1cml0eU9iamVjdENlcnRpZmljYXRlc1xuICAgIGRvY0ZpZWxkc1RleHQ/OiBudW1iZXJbXVxuICAgIGRvY0ZpZWxkc0dyYXBoaWNzPzogbnVtYmVyW11cbiAgICBkb2NGaWVsZHNPcmlnaW5hbHM/OiBudW1iZXJbXVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGaWxlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmlsZVxuXG4gICAgICAgIHJlc3VsdC5yZWFkaW5nVGltZSA9IGpzb25PYmplY3RbXCJyZWFkaW5nVGltZVwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5wQVN0YXR1cyA9IGpzb25PYmplY3RbXCJwQVN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVhZGluZ1N0YXR1cyA9IGpzb25PYmplY3RbXCJyZWFkaW5nU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5maWxlSUQgPSBqc29uT2JqZWN0W1wiZmlsZUlEXCJdXG4gICAgICAgIHJlc3VsdC5maWxlRGF0YSA9IEZpbGVEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaWxlRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlcyA9IFNlY3VyaXR5T2JqZWN0Q2VydGlmaWNhdGVzLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZXNcIl0pXG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNUZXh0XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZG9jRmllbGRzVGV4dFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNUZXh0LnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc1RleHRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2NGaWVsZHNHcmFwaGljc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRvY0ZpZWxkc0dyYXBoaWNzLnB1c2goanNvbk9iamVjdFtcImRvY0ZpZWxkc0dyYXBoaWNzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRvY0ZpZWxkc09yaWdpbmFsc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kb2NGaWVsZHNPcmlnaW5hbHMucHVzaChqc29uT2JqZWN0W1wiZG9jRmllbGRzT3JpZ2luYWxzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBhcHBsaWNhdGlvbklEPzogc3RyaW5nXG4gICAgZGF0YUhhc2hBbGdvcml0aG0/OiBzdHJpbmdcbiAgICB1bmljb2RlVmVyc2lvbj86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBmaWxlcz86IEZpbGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBBcHBsaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFwcGxpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuYXBwbGljYXRpb25JRCA9IGpzb25PYmplY3RbXCJhcHBsaWNhdGlvbklEXCJdXG4gICAgICAgIHJlc3VsdC5kYXRhSGFzaEFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJkYXRhSGFzaEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQudW5pY29kZVZlcnNpb24gPSBqc29uT2JqZWN0W1widW5pY29kZVZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuZmlsZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZpbGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmlsZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRmlsZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlsZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmlsZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGZvcm1hdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWx1ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbHVlXG5cbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IGpzb25PYmplY3RbXCJsZW5ndGhcIl1cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5mb3JtYXQgPSBqc29uT2JqZWN0W1wiZm9ybWF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZSB7XG4gICAgdHlwZT86IHN0cmluZ1xuICAgIHZhbHVlPzogVmFsdWVcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQXR0cmlidXRlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBWYWx1ZS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsdWVcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eSB7XG4gICAgZGF0YT86IHN0cmluZ1xuICAgIGZyaWVuZGx5TmFtZT86IFZhbHVlXG4gICAgYXR0cmlidXRlcz86IEF0dHJpYnV0ZVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEF1dGhvcml0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEF1dGhvcml0eVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmZyaWVuZGx5TmFtZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmcmllbmRseU5hbWVcIl0pXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgdHlwZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFeHRlbnNpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFeHRlbnNpb25cblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmFsaWRpdHkge1xuICAgIG5vdEFmdGVyPzogVmFsdWVcbiAgICBub3RCZWZvcmU/OiBWYWx1ZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWYWxpZGl0eSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZhbGlkaXR5XG5cbiAgICAgICAgcmVzdWx0Lm5vdEFmdGVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEFmdGVyXCJdKVxuICAgICAgICByZXN1bHQubm90QmVmb3JlID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcIm5vdEJlZm9yZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGVDaGFpbiB7XG4gICAgb3JpZ2luPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHZlcnNpb24/OiBudW1iZXJcbiAgICBwYVN0YXR1cz86IG51bWJlclxuICAgIHNlcmlhbE51bWJlcj86IHN0cmluZ1xuICAgIHNpZ25hdHVyZUFsZ29yaXRobT86IHN0cmluZ1xuICAgIHN1YmplY3RQS0FsZ29yaXRobT86IHN0cmluZ1xuICAgIGZpbGVOYW1lPzogVmFsdWVcbiAgICB2YWxpZGl0eT86IFZhbGlkaXR5XG4gICAgaXNzdWVyPzogQXV0aG9yaXR5XG4gICAgc3ViamVjdD86IEF1dGhvcml0eVxuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIGV4dGVuc2lvbnM/OiBFeHRlbnNpb25bXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDZXJ0aWZpY2F0ZUNoYWluIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ2VydGlmaWNhdGVDaGFpblxuXG4gICAgICAgIHJlc3VsdC5vcmlnaW4gPSBqc29uT2JqZWN0W1wib3JpZ2luXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQucGFTdGF0dXMgPSBqc29uT2JqZWN0W1wicGFTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnNlcmlhbE51bWJlciA9IGpzb25PYmplY3RbXCJzZXJpYWxOdW1iZXJcIl1cbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZUFsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzaWduYXR1cmVBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LnN1YmplY3RQS0FsZ29yaXRobSA9IGpzb25PYmplY3RbXCJzdWJqZWN0UEtBbGdvcml0aG1cIl1cbiAgICAgICAgcmVzdWx0LmZpbGVOYW1lID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcImZpbGVOYW1lXCJdKVxuICAgICAgICByZXN1bHQudmFsaWRpdHkgPSBWYWxpZGl0eS5mcm9tSnNvbihqc29uT2JqZWN0W1widmFsaWRpdHlcIl0pXG4gICAgICAgIHJlc3VsdC5pc3N1ZXIgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcImlzc3VlclwiXSlcbiAgICAgICAgcmVzdWx0LnN1YmplY3QgPSBBdXRob3JpdHkuZnJvbUpzb24oanNvbk9iamVjdFtcInN1YmplY3RcIl0pXG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmV4dGVuc2lvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImV4dGVuc2lvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJleHRlbnNpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEV4dGVuc2lvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXh0ZW5zaW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5leHRlbnNpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduZXJJbmZvIHtcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgcGFTdGF0dXM/OiBudW1iZXJcbiAgICBkYXRhVG9IYXNoPzogc3RyaW5nXG4gICAgZGlnZXN0QWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2VyaWFsTnVtYmVyPzogVmFsdWVcbiAgICBzaWduYXR1cmU/OiBWYWx1ZVxuICAgIHN1YmplY3RLZXlJZGVudGlmaWVyPzogVmFsdWVcbiAgICBpc3N1ZXI/OiBBdXRob3JpdHlcbiAgICBub3RpZmljYXRpb25zPzogbnVtYmVyW11cbiAgICBzaWduZWRBdHRyaWJ1dGVzPzogRXh0ZW5zaW9uW11cbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpZ25lckluZm8gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaWduZXJJbmZvXG5cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQucGFTdGF0dXMgPSBqc29uT2JqZWN0W1wicGFTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFUb0hhc2ggPSBqc29uT2JqZWN0W1wiZGF0YVRvSGFzaFwiXVxuICAgICAgICByZXN1bHQuZGlnZXN0QWxnb3JpdGhtID0ganNvbk9iamVjdFtcImRpZ2VzdEFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2VyaWFsTnVtYmVyID0gVmFsdWUuZnJvbUpzb24oanNvbk9iamVjdFtcInNlcmlhbE51bWJlclwiXSlcbiAgICAgICAgcmVzdWx0LnNpZ25hdHVyZSA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5zdWJqZWN0S2V5SWRlbnRpZmllciA9IFZhbHVlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzdWJqZWN0S2V5SWRlbnRpZmllclwiXSlcbiAgICAgICAgcmVzdWx0Lmlzc3VlciA9IEF1dGhvcml0eS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaXNzdWVyXCJdKVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZWRBdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzaWduZWRBdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2lnbmVkQXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBFeHRlbnNpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInNpZ25lZEF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2lnbmVkQXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENlcnRpZmljYXRlQ2hhaW4uZnJvbUpzb24oanNvbk9iamVjdFtcImNlcnRpZmljYXRlQ2hhaW5cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2VydGlmaWNhdGVDaGFpbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlPYmplY3Qge1xuICAgIGZpbGVSZWZlcmVuY2U/OiBudW1iZXJcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgb2JqZWN0VHlwZT86IHN0cmluZ1xuICAgIG5vdGlmaWNhdGlvbnM/OiBudW1iZXJbXVxuICAgIHNpZ25lckluZm9zPzogU2lnbmVySW5mb1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlY3VyaXR5T2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VjdXJpdHlPYmplY3RcblxuICAgICAgICByZXN1bHQuZmlsZVJlZmVyZW5jZSA9IGpzb25PYmplY3RbXCJmaWxlUmVmZXJlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0ganNvbk9iamVjdFtcInZlcnNpb25cIl1cbiAgICAgICAgcmVzdWx0Lm9iamVjdFR5cGUgPSBqc29uT2JqZWN0W1wib2JqZWN0VHlwZVwiXVxuICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm90aWZpY2F0aW9ucy5wdXNoKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2lnbmVySW5mb3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTaWduZXJJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduZXJJbmZvc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zaWduZXJJbmZvcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFByb3BlcnRpZXMge1xuICAgIGFUUUE/OiBudW1iZXJcbiAgICBiaXRSYXRlUj86IG51bWJlclxuICAgIGJpdFJhdGVTPzogbnVtYmVyXG4gICAgY2hpcFR5cGVBPzogbnVtYmVyXG4gICAgbWlmYXJlTWVtb3J5PzogbnVtYmVyXG4gICAgcmZpZFR5cGU/OiBudW1iZXJcbiAgICBzQUs/OiBudW1iZXJcbiAgICBzdXBwb3J0ND86IGJvb2xlYW5cbiAgICBzdXBwb3J0TWlmYXJlPzogYm9vbGVhblxuICAgIGFUUUI/OiBzdHJpbmdcbiAgICBhVFI/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTE/OiBzdHJpbmdcbiAgICBiYXVkcmF0ZTI/OiBzdHJpbmdcbiAgICB1SUQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ2FyZFByb3BlcnRpZXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDYXJkUHJvcGVydGllc1xuXG4gICAgICAgIHJlc3VsdC5hVFFBID0ganNvbk9iamVjdFtcImFUUUFcIl1cbiAgICAgICAgcmVzdWx0LmJpdFJhdGVSID0ganNvbk9iamVjdFtcImJpdFJhdGVSXCJdXG4gICAgICAgIHJlc3VsdC5iaXRSYXRlUyA9IGpzb25PYmplY3RbXCJiaXRSYXRlU1wiXVxuICAgICAgICByZXN1bHQuY2hpcFR5cGVBID0ganNvbk9iamVjdFtcImNoaXBUeXBlQVwiXVxuICAgICAgICByZXN1bHQubWlmYXJlTWVtb3J5ID0ganNvbk9iamVjdFtcIm1pZmFyZU1lbW9yeVwiXVxuICAgICAgICByZXN1bHQucmZpZFR5cGUgPSBqc29uT2JqZWN0W1wicmZpZFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNBSyA9IGpzb25PYmplY3RbXCJzQUtcIl1cbiAgICAgICAgcmVzdWx0LnN1cHBvcnQ0ID0ganNvbk9iamVjdFtcInN1cHBvcnQ0XCJdXG4gICAgICAgIHJlc3VsdC5zdXBwb3J0TWlmYXJlID0ganNvbk9iamVjdFtcInN1cHBvcnRNaWZhcmVcIl1cbiAgICAgICAgcmVzdWx0LmFUUUIgPSBqc29uT2JqZWN0W1wiYVRRQlwiXVxuICAgICAgICByZXN1bHQuYVRSID0ganNvbk9iamVjdFtcImFUUlwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUxID0ganNvbk9iamVjdFtcImJhdWRyYXRlMVwiXVxuICAgICAgICByZXN1bHQuYmF1ZHJhdGUyID0ganNvbk9iamVjdFtcImJhdWRyYXRlMlwiXVxuICAgICAgICByZXN1bHQudUlEID0ganNvbk9iamVjdFtcInVJRFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSRklEU2Vzc2lvbkRhdGEge1xuICAgIHRvdGFsQnl0ZXNSZWNlaXZlZD86IG51bWJlclxuICAgIHRvdGFsQnl0ZXNTZW50PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgZXh0TGVTdXBwb3J0PzogbnVtYmVyXG4gICAgcHJvY2Vzc1RpbWU/OiBudW1iZXJcbiAgICBjYXJkUHJvcGVydGllcz86IENhcmRQcm9wZXJ0aWVzXG4gICAgYWNjZXNzQ29udHJvbHM/OiBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZVtdXG4gICAgYXBwbGljYXRpb25zPzogQXBwbGljYXRpb25bXVxuICAgIHNlY3VyaXR5T2JqZWN0cz86IFNlY3VyaXR5T2JqZWN0W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUkZJRFNlc3Npb25EYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUkZJRFNlc3Npb25EYXRhXG5cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNSZWNlaXZlZCA9IGpzb25PYmplY3RbXCJ0b3RhbEJ5dGVzUmVjZWl2ZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsQnl0ZXNTZW50ID0ganNvbk9iamVjdFtcInRvdGFsQnl0ZXNTZW50XCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5leHRMZVN1cHBvcnQgPSBqc29uT2JqZWN0W1wiZXh0TGVTdXBwb3J0XCJdXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzVGltZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzVGltZVwiXVxuICAgICAgICByZXN1bHQuY2FyZFByb3BlcnRpZXMgPSBDYXJkUHJvcGVydGllcy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2FyZFByb3BlcnRpZXNcIl0pXG4gICAgICAgIHJlc3VsdC5hY2Nlc3NDb250cm9scyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhY2Nlc3NDb250cm9sc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBY2Nlc3NDb250cm9sUHJvY2VkdXJlVHlwZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiYWNjZXNzQ29udHJvbHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWNjZXNzQ29udHJvbHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hcHBsaWNhdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFwcGxpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBBcHBsaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXBwbGljYXRpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFwcGxpY2F0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5T2JqZWN0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2VjdXJpdHlPYmplY3RzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNlY3VyaXR5T2JqZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWN1cml0eU9iamVjdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc2VjdXJpdHlPYmplY3RzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZU5hbWU/OiBzdHJpbmdcbiAgICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgICBlbGVtZW50cz86IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5Q2hlY2sgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQudHlwZU5hbWUgPSBqc29uT2JqZWN0W1widHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJlbGVtZW50c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImVsZW1lbnRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5RWxlbWVudC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZWxlbWVudHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZWxlbWVudHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBERjQxN0luZm8ge1xuICAgIGVycm9yTGV2ZWw/OiBudW1iZXJcbiAgICBjb2x1bW5zPzogbnVtYmVyXG4gICAgcm93cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQREY0MTdJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUERGNDE3SW5mb1xuXG4gICAgICAgIHJlc3VsdC5lcnJvckxldmVsID0ganNvbk9iamVjdFtcImVycm9yTGV2ZWxcIl1cbiAgICAgICAgcmVzdWx0LmNvbHVtbnMgPSBqc29uT2JqZWN0W1wiY29sdW1uc1wiXVxuICAgICAgICByZXN1bHQucm93cyA9IGpzb25PYmplY3RbXCJyb3dzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZVJlc3VsdCB7XG4gICAgZmllbGRzPzogRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuZmllbGRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmaWVsZHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmaWVsZHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGQuZnJvbUpzb24oanNvbk9iamVjdFtcImZpZWxkc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5maWVsZHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHtcbiAgICBiYXJjb2RlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIHBkZjQxN0luZm8/OiBQREY0MTdJbmZvXG4gICAgZGF0YT86IGFueVtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQmFyY29kZUZpZWxkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJCYXJjb2RlRmllbGRcblxuICAgICAgICByZXN1bHQuYmFyY29kZVR5cGUgPSBqc29uT2JqZWN0W1wiYmFyY29kZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LnBkZjQxN0luZm8gPSBQREY0MTdJbmZvLmZyb21Kc29uKGpzb25PYmplY3RbXCJwZGY0MTdJbmZvXCJdKVxuICAgICAgICByZXN1bHQuZGF0YSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5wdXNoKGpzb25PYmplY3RbXCJkYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0IHtcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICBjaGVja3M/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJBdXRoZW50aWNpdHlSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5jaGVja3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImNoZWNrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImNoZWNrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUNoZWNrLmZyb21Kc29uKGpzb25PYmplY3RbXCJjaGVja3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2hlY2tzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIGVsZW1lbnRUeXBlPzogbnVtYmVyXG4gICAgZWxlbWVudERpYWdub3NlPzogbnVtYmVyXG4gICAgZWxlbWVudFR5cGVOYW1lPzogc3RyaW5nXG4gICAgZWxlbWVudERpYWdub3NlTmFtZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eUVsZW1lbnRcblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQuZWxlbWVudFR5cGUgPSBqc29uT2JqZWN0W1wiZWxlbWVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZSA9IGpzb25PYmplY3RbXCJlbGVtZW50RGlhZ25vc2VcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnRUeXBlTmFtZSA9IGpzb25PYmplY3RbXCJlbGVtZW50VHlwZU5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmVsZW1lbnREaWFnbm9zZU5hbWUgPSBqc29uT2JqZWN0W1wiZWxlbWVudERpYWdub3NlTmFtZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBsZXRpb24ge1xuICAgIGFjdGlvbj86IG51bWJlclxuICAgIHJlc3VsdHM/OiBEb2N1bWVudFJlYWRlclJlc3VsdHNcbiAgICBlcnJvcj86IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5hY3Rpb24gPSBqc29uT2JqZWN0W1wiYWN0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gRG9jdW1lbnRSZWFkZXJSZXN1bHRzLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdKVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBEb2N1bWVudFJlYWRlckV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uIHtcbiAgICBub3RpZmljYXRpb24/OiBudW1iZXJcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZmlkTm90aWZpY2F0aW9uQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJmaWROb3RpZmljYXRpb25Db21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0Lm5vdGlmaWNhdGlvbiA9IGpzb25PYmplY3RbXCJub3RpZmljYXRpb25cIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBLRENlcnRpZmljYXRlIHtcbiAgICBiaW5hcnlEYXRhPzogc3RyaW5nXG4gICAgcmVzb3VyY2VUeXBlPzogbnVtYmVyXG4gICAgcHJpdmF0ZUtleT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQS0RDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBLRENlcnRpZmljYXRlXG5cbiAgICAgICAgcmVzdWx0LmJpbmFyeURhdGEgPSBqc29uT2JqZWN0W1wiYmluYXJ5RGF0YVwiXVxuICAgICAgICByZXN1bHQucmVzb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInJlc291cmNlVHlwZVwiXVxuICAgICAgICByZXN1bHQucHJpdmF0ZUtleSA9IGpzb25PYmplY3RbXCJwcml2YXRlS2V5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlSW5wdXRQYXJhbSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICB0eXBlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlSW5wdXRQYXJhbSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXRQYXJhbVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBBUmVzb3VyY2VzSXNzdWVyIHtcbiAgICBkYXRhPzogYW55W11cbiAgICBmcmllbmRseU5hbWU/OiBzdHJpbmdcbiAgICBhdHRyaWJ1dGVzPzogUEFBdHRyaWJ1dGVbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQVJlc291cmNlc0lzc3VlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBUmVzb3VyY2VzSXNzdWVyXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkYXRhXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGEucHVzaChqc29uT2JqZWN0W1wiZGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZnJpZW5kbHlOYW1lID0ganNvbk9iamVjdFtcImZyaWVuZGx5TmFtZVwiXVxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUEFBdHRyaWJ1dGUuZnJvbUpzb24oanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUEFBdHRyaWJ1dGUge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQQUF0dHJpYnV0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBBQXR0cmlidXRlXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVEFDaGFsbGVuZ2Uge1xuICAgIGRhdGE/OiBhbnlbXVxuICAgIGF1eFBDRD86IHN0cmluZ1xuICAgIGNoYWxsZW5nZVBJQ0M/OiBzdHJpbmdcbiAgICBoYXNoUEs/OiBzdHJpbmdcbiAgICBpZFBJQ0M/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVEFDaGFsbGVuZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBUQUNoYWxsZW5nZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkYXRhXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLnB1c2goanNvbk9iamVjdFtcImRhdGFcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF1eFBDRCA9IGpzb25PYmplY3RbXCJhdXhQQ0RcIl1cbiAgICAgICAgcmVzdWx0LmNoYWxsZW5nZVBJQ0MgPSBqc29uT2JqZWN0W1wiY2hhbGxlbmdlUElDQ1wiXVxuICAgICAgICByZXN1bHQuaGFzaFBLID0ganNvbk9iamVjdFtcImhhc2hQS1wiXVxuICAgICAgICByZXN1bHQuaWRQSUNDID0ganNvbk9iamVjdFtcImlkUElDQ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMge1xuICAgIG92ZXJhbGxTdGF0dXM/OiBudW1iZXJcbiAgICBvcHRpY2FsPzogbnVtYmVyXG4gICAgZGV0YWlsc09wdGljYWw/OiBEZXRhaWxzT3B0aWNhbFxuICAgIHJmaWQ/OiBudW1iZXJcbiAgICBkZXRhaWxzUkZJRD86IERldGFpbHNSRklEXG4gICAgcG9ydHJhaXQ/OiBudW1iZXJcbiAgICBzdG9wTGlzdD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXNcblxuICAgICAgICByZXN1bHQub3ZlcmFsbFN0YXR1cyA9IGpzb25PYmplY3RbXCJvdmVyYWxsU3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5vcHRpY2FsID0ganNvbk9iamVjdFtcIm9wdGljYWxcIl1cbiAgICAgICAgcmVzdWx0LmRldGFpbHNPcHRpY2FsID0gRGV0YWlsc09wdGljYWwuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGFpbHNPcHRpY2FsXCJdKVxuICAgICAgICByZXN1bHQucmZpZCA9IGpzb25PYmplY3RbXCJyZmlkXCJdXG4gICAgICAgIHJlc3VsdC5kZXRhaWxzUkZJRCA9IERldGFpbHNSRklELmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRhaWxzUkZJRFwiXSlcbiAgICAgICAgcmVzdWx0LnBvcnRyYWl0ID0ganNvbk9iamVjdFtcInBvcnRyYWl0XCJdXG4gICAgICAgIHJlc3VsdC5zdG9wTGlzdCA9IGpzb25PYmplY3RbXCJzdG9wTGlzdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxzT3B0aWNhbCB7XG4gICAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuICAgIG1yej86IG51bWJlclxuICAgIHRleHQ/OiBudW1iZXJcbiAgICBkb2NUeXBlPzogbnVtYmVyXG4gICAgc2VjdXJpdHk/OiBudW1iZXJcbiAgICBpbWFnZVFBPzogbnVtYmVyXG4gICAgZXhwaXJ5PzogbnVtYmVyXG4gICAgdmRzPzogbnVtYmVyXG4gICAgcGFnZXNDb3VudD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRhaWxzT3B0aWNhbCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGFpbHNPcHRpY2FsXG5cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuICAgICAgICByZXN1bHQubXJ6ID0ganNvbk9iamVjdFtcIm1yelwiXVxuICAgICAgICByZXN1bHQudGV4dCA9IGpzb25PYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgIHJlc3VsdC5kb2NUeXBlID0ganNvbk9iamVjdFtcImRvY1R5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNlY3VyaXR5ID0ganNvbk9iamVjdFtcInNlY3VyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVFBID0ganNvbk9iamVjdFtcImltYWdlUUFcIl1cbiAgICAgICAgcmVzdWx0LmV4cGlyeSA9IGpzb25PYmplY3RbXCJleHBpcnlcIl1cbiAgICAgICAgcmVzdWx0LnZkcyA9IGpzb25PYmplY3RbXCJ2ZHNcIl1cbiAgICAgICAgcmVzdWx0LnBhZ2VzQ291bnQgPSBqc29uT2JqZWN0W1wicGFnZXNDb3VudFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxzUkZJRCB7XG4gICAgcGE/OiBudW1iZXJcbiAgICBjYT86IG51bWJlclxuICAgIGFhPzogbnVtYmVyXG4gICAgdGE/OiBudW1iZXJcbiAgICBiYWM/OiBudW1iZXJcbiAgICBwYWNlPzogbnVtYmVyXG4gICAgb3ZlcmFsbFN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRhaWxzUkZJRCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGFpbHNSRklEXG5cbiAgICAgICAgcmVzdWx0LnBhID0ganNvbk9iamVjdFtcInBhXCJdXG4gICAgICAgIHJlc3VsdC5jYSA9IGpzb25PYmplY3RbXCJjYVwiXVxuICAgICAgICByZXN1bHQuYWEgPSBqc29uT2JqZWN0W1wiYWFcIl1cbiAgICAgICAgcmVzdWx0LnRhID0ganNvbk9iamVjdFtcInRhXCJdXG4gICAgICAgIHJlc3VsdC5iYWMgPSBqc29uT2JqZWN0W1wiYmFjXCJdXG4gICAgICAgIHJlc3VsdC5wYWNlID0ganNvbk9iamVjdFtcInBhY2VcIl1cbiAgICAgICAgcmVzdWx0Lm92ZXJhbGxTdGF0dXMgPSBqc29uT2JqZWN0W1wib3ZlcmFsbFN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWRFNOQ0RhdGEge1xuICAgIHR5cGU/OiBzdHJpbmdcbiAgICB2ZXJzaW9uPzogbnVtYmVyXG4gICAgaXNzdWluZ0NvdW50cnk/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogYW55XG4gICAgc2lnbmF0dXJlQWxnb3JpdGhtPzogc3RyaW5nXG4gICAgc2lnbmF0dXJlPzogQnl0ZXNEYXRhXG4gICAgY2VydGlmaWNhdGU/OiBCeXRlc0RhdGFcbiAgICBjZXJ0aWZpY2F0ZUNoYWluPzogQ2VydGlmaWNhdGVDaGFpbltdXG4gICAgbm90aWZpY2F0aW9ucz86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZEU05DRGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZEU05DRGF0YVxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBqc29uT2JqZWN0W1widmVyc2lvblwiXVxuICAgICAgICByZXN1bHQuaXNzdWluZ0NvdW50cnkgPSBqc29uT2JqZWN0W1wiaXNzdWluZ0NvdW50cnlcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlQWxnb3JpdGhtID0ganNvbk9iamVjdFtcInNpZ25hdHVyZUFsZ29yaXRobVwiXVxuICAgICAgICByZXN1bHQuc2lnbmF0dXJlID0gQnl0ZXNEYXRhLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaWduYXR1cmVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZSA9IEJ5dGVzRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVcIl0pXG4gICAgICAgIHJlc3VsdC5jZXJ0aWZpY2F0ZUNoYWluID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY2VydGlmaWNhdGVDaGFpblwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDZXJ0aWZpY2F0ZUNoYWluLmZyb21Kc29uKGpzb25PYmplY3RbXCJjZXJ0aWZpY2F0ZUNoYWluXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNlcnRpZmljYXRlQ2hhaW4ucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3RpZmljYXRpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm90aWZpY2F0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RpZmljYXRpb25zLnB1c2goanNvbk9iamVjdFtcIm5vdGlmaWNhdGlvbnNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnl0ZXNEYXRhIHtcbiAgICBkYXRhPzogc3RyaW5nXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBCeXRlc0RhdGEgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCeXRlc0RhdGFcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBqc29uT2JqZWN0W1wibGVuZ3RoXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbnB1dERhdGEge1xuICAgIHBhZ2VJbmRleD86IG51bWJlclxuICAgIGxpZ2h0PzogbnVtYmVyXG4gICAgdHlwZT86IG51bWJlclxuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgaW1nQnl0ZXM/OiBhbnlbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZUlucHV0RGF0YSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlSW5wdXREYXRhXG5cbiAgICAgICAgcmVzdWx0LnBhZ2VJbmRleCA9IGpzb25PYmplY3RbXCJwYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxpZ2h0ID0ganNvbk9iamVjdFtcImxpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5pbWdCeXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1nQnl0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pbWdCeXRlcy5wdXNoKGpzb25PYmplY3RbXCJpbWdCeXRlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSB7XG4gICAgZGF0YWJhc2VJRD86IHN0cmluZ1xuICAgIHZlcnNpb24/OiBzdHJpbmdcbiAgICBkYXRlPzogc3RyaW5nXG4gICAgZGF0YWJhc2VEZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGNvdW50cmllc051bWJlcj86IG51bWJlclxuICAgIGRvY3VtZW50c051bWJlcj86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2NSZWFkZXJEb2N1bWVudHNEYXRhYmFzZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY1JlYWRlckRvY3VtZW50c0RhdGFiYXNlXG5cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlSUQgPSBqc29uT2JqZWN0W1wiZGF0YWJhc2VJRFwiXVxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGpzb25PYmplY3RbXCJ2ZXJzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5kYXRlID0ganNvbk9iamVjdFtcImRhdGVcIl1cbiAgICAgICAgcmVzdWx0LmRhdGFiYXNlRGVzY3JpcHRpb24gPSBqc29uT2JqZWN0W1wiZGF0YWJhc2VEZXNjcmlwdGlvblwiXVxuICAgICAgICByZXN1bHQuY291bnRyaWVzTnVtYmVyID0ganNvbk9iamVjdFtcImNvdW50cmllc051bWJlclwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRzTnVtYmVyID0ganNvbk9iamVjdFtcImRvY3VtZW50c051bWJlclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlckNvbXBhcmlzb24ge1xuICAgIHNvdXJjZVR5cGVMZWZ0PzogbnVtYmVyXG4gICAgc291cmNlVHlwZVJpZ2h0PzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERvY3VtZW50UmVhZGVyQ29tcGFyaXNvblxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlTGVmdCA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlTGVmdFwiXVxuICAgICAgICByZXN1bHQuc291cmNlVHlwZVJpZ2h0ID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVSaWdodFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4ge1xuICAgIGRnPzogbnVtYmVyXG4gICAgZGdUYWc/OiBudW1iZXJcbiAgICBlbnRyeVZpZXc/OiBudW1iZXJcbiAgICB0YWdFbnRyeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW4gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJmaWRPcmlnaW5cblxuICAgICAgICByZXN1bHQuZGcgPSBqc29uT2JqZWN0W1wiZGdcIl1cbiAgICAgICAgcmVzdWx0LmRnVGFnID0ganNvbk9iamVjdFtcImRnVGFnXCJdXG4gICAgICAgIHJlc3VsdC5lbnRyeVZpZXcgPSBqc29uT2JqZWN0W1wiZW50cnlWaWV3XCJdXG4gICAgICAgIHJlc3VsdC50YWdFbnRyeSA9IGpzb25PYmplY3RbXCJ0YWdFbnRyeVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2Uge1xuICAgIHNvdXJjZVR5cGU/OiBudW1iZXJcbiAgICBzb3VyY2U/OiBzdHJpbmdcbiAgICB2YWxpZGl0eVN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclRleHRTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclRleHRTb3VyY2VcblxuICAgICAgICByZXN1bHQuc291cmNlVHlwZSA9IGpzb25PYmplY3RbXCJzb3VyY2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5zb3VyY2UgPSBqc29uT2JqZWN0W1wic291cmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWxpZGl0eVN0YXR1cyA9IGpzb25PYmplY3RbXCJ2YWxpZGl0eVN0YXR1c1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWRlclN5bWJvbCB7XG4gICAgY29kZT86IG51bWJlclxuICAgIHJlY3Q/OiBSZWN0XG4gICAgcHJvYmFiaWxpdHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRG9jdW1lbnRSZWFkZXJTeW1ib2wgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclN5bWJvbFxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0LnJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWN0XCJdKVxuICAgICAgICByZXN1bHQucHJvYmFiaWxpdHkgPSBqc29uT2JqZWN0W1wicHJvYmFiaWxpdHlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eSB7XG4gICAgc291cmNlVHlwZT86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclZhbGlkaXR5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRG9jdW1lbnRSZWFkZXJWYWxpZGl0eVxuXG4gICAgICAgIHJlc3VsdC5zb3VyY2VUeXBlID0ganNvbk9iamVjdFtcInNvdXJjZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkZXJSZXN1bHRzIHtcbiAgICBjaGlwUGFnZT86IG51bWJlclxuICAgIHByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cz86IG51bWJlclxuICAgIGVsYXBzZWRUaW1lPzogbnVtYmVyXG4gICAgZWxhcHNlZFRpbWVSRklEPzogbnVtYmVyXG4gICAgbW9yZVBhZ2VzQXZhaWxhYmxlPzogbnVtYmVyXG4gICAgcmZpZFJlc3VsdD86IG51bWJlclxuICAgIGhpZ2hSZXNvbHV0aW9uPzogYm9vbGVhblxuICAgIGdyYXBoaWNSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckdyYXBoaWNSZXN1bHRcbiAgICB0ZXh0UmVzdWx0PzogRG9jdW1lbnRSZWFkZXJUZXh0UmVzdWx0XG4gICAgZG9jdW1lbnRQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgYmFyY29kZVBvc2l0aW9uPzogRWxlbWVudFBvc2l0aW9uW11cbiAgICBtcnpQb3NpdGlvbj86IEVsZW1lbnRQb3NpdGlvbltdXG4gICAgaW1hZ2VRdWFsaXR5PzogSW1hZ2VRdWFsaXR5R3JvdXBbXVxuICAgIHJhd1Jlc3VsdD86IHN0cmluZ1xuICAgIGRvY3VtZW50UmVhZGVyTm90aWZpY2F0aW9uPzogRG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cbiAgICByZmlkU2Vzc2lvbkRhdGE/OiBSRklEU2Vzc2lvbkRhdGFcbiAgICBhdXRoZW50aWNpdHlSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckF1dGhlbnRpY2l0eVJlc3VsdFxuICAgIGJhcmNvZGVSZXN1bHQ/OiBEb2N1bWVudFJlYWRlckJhcmNvZGVSZXN1bHRcbiAgICBkb2N1bWVudFR5cGU/OiBEb2N1bWVudFJlYWRlckRvY3VtZW50VHlwZVtdXG4gICAgc3RhdHVzPzogRG9jdW1lbnRSZWFkZXJSZXN1bHRzU3RhdHVzXG4gICAgdmRzbmNEYXRhPzogVkRTTkNEYXRhXG5cbiAgICBnZXRUZXh0RmllbGRWYWx1ZUJ5VHlwZSh7IGZpZWxkVHlwZSwgbGNpZCA9IDAsIHNvdXJjZSA9IC0xLCBvcmlnaW5hbCA9IGZhbHNlIH06IHsgZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ/OiBudW1iZXIsIHNvdXJjZT86IG51bWJlciwgb3JpZ2luYWw/OiBib29sZWFuIH0pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmluZEJ5VHlwZUFuZExjaWQoZmllbGRUeXBlLCBsY2lkKVxuICAgICAgICBpZiAoZmllbGQgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIHNvdXJjZSlcbiAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gb3JpZ2luYWwgPyB2YWx1ZS5vcmlnaW5hbFZhbHVlIDogdmFsdWUudmFsdWVcbiAgICB9XG5cbiAgICBnZXRUZXh0RmllbGRTdGF0dXNCeVR5cGUoZmllbGRUeXBlOiBudW1iZXIsIGxjaWQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy50ZXh0UmVzdWx0ID09IHVuZGVmaW5lZCkgcmV0dXJuIDBcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbmRCeVR5cGVBbmRMY2lkKGZpZWxkVHlwZSwgbGNpZClcbiAgICAgICAgaWYoZmllbGQgIT0gdW5kZWZpbmVkICYmIGZpZWxkLnN0YXR1cyAhPSBudWxsICYmIGZpZWxkLnN0YXR1cyAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gZmllbGQuc3RhdHVzXG4gICAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgZ2V0R3JhcGhpY0ZpZWxkSW1hZ2VCeVR5cGUoeyBmaWVsZFR5cGUsIHNvdXJjZSA9IC0xLCBsaWdodCA9IC0xLCBwYWdlSW5kZXggPSAtMSB9OiB7IGZpZWxkVHlwZTogbnVtYmVyLCBzb3VyY2U/OiBudW1iZXIsIGxpZ2h0PzogbnVtYmVyLCBwYWdlSW5kZXg/OiBudW1iZXIgfSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoaWNSZXN1bHQgPT0gdW5kZWZpbmVkIHx8IHRoaXMuZ3JhcGhpY1Jlc3VsdC5maWVsZHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IGZvdW5kRmllbGRzOiBEb2N1bWVudFJlYWRlckdyYXBoaWNGaWVsZFtdID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZ3JhcGhpY1Jlc3VsdC5maWVsZHMpXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRUeXBlID09PSBmaWVsZFR5cGUpXG4gICAgICAgICAgICAgICAgZm91bmRGaWVsZHMucHVzaChmaWVsZClcbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gLTEpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kRmllbGRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEZpZWxkc1tpXS5zb3VyY2VUeXBlICE9PSBzb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxuICAgICAgICBpZiAobGlnaHQgIT09IC0xKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ubGlnaHRUeXBlICE9PSBsaWdodClcbiAgICAgICAgICAgICAgICAgICAgZm91bmRGaWVsZHMuc3BsaWNlKGksIDEpXG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IC0xKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3VuZEZpZWxkcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRGaWVsZHNbaV0ucGFnZUluZGV4ICE9PSBwYWdlSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRmllbGRzLnNwbGljZShpLCAxKVxuXG4gICAgICAgIHJldHVybiBmb3VuZEZpZWxkcy5sZW5ndGggPiAwID8gZm91bmRGaWVsZHNbMF0udmFsdWUgOiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBnZXRRdWFsaXR5UmVzdWx0KHsgaW1hZ2VRdWFsaXR5Q2hlY2tUeXBlLCBzZWN1cml0eUZlYXR1cmUgPSAtMSwgcGFnZUluZGV4ID0gMCB9OiB7IGltYWdlUXVhbGl0eUNoZWNrVHlwZTogbnVtYmVyLCBzZWN1cml0eUZlYXR1cmU/OiBudW1iZXIsIHBhZ2VJbmRleD86IG51bWJlciB9KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdFN1bSA9IDJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VRdWFsaXR5ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRTdW1cblxuICAgICAgICBsZXQgaW1hZ2VRdWFsaXR5R3JvdXBcblxuICAgICAgICBmb3IgKGNvbnN0IGlxIG9mIHRoaXMuaW1hZ2VRdWFsaXR5KVxuICAgICAgICAgICAgaWYgKGlxICE9IG51bGwgJiYgaXEgIT0gdW5kZWZpbmVkICYmIGlxLnBhZ2VJbmRleCA9PSBwYWdlSW5kZXgpXG4gICAgICAgICAgICAgICAgaW1hZ2VRdWFsaXR5R3JvdXAgPSBpcVxuICAgICAgICBpZiAoaW1hZ2VRdWFsaXR5R3JvdXAgPT0gbnVsbCB8fCBpbWFnZVF1YWxpdHlHcm91cCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0U3VtXG5cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBpbWFnZVF1YWxpdHlHcm91cC5pbWFnZVF1YWxpdHlMaXN0KVxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IGltYWdlUXVhbGl0eUNoZWNrVHlwZSlcbiAgICAgICAgICAgICAgICBpZiAoc2VjdXJpdHlGZWF0dXJlID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzdWx0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXN1bHQgPT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTdW0gPSBmaWVsZC5yZXN1bHRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmZlYXR1cmVUeXBlID09PSBzZWN1cml0eUZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3VtID0gZmllbGQucmVzdWx0XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRTdW1cbiAgICB9XG5cbiAgICBmaW5kQnlUeXBlQW5kTGNpZCh0eXBlOiBudW1iZXIsIGxjaWQ/OiBudW1iZXIpOiBEb2N1bWVudFJlYWRlclRleHRGaWVsZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnRleHRSZXN1bHQgPT0gdW5kZWZpbmVkIHx8IHRoaXMudGV4dFJlc3VsdC5maWVsZHMgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGxldCBmaWVsZFxuICAgICAgICBjb25zdCBmb3VuZEZpZWxkczogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGRbXSA9IFtdXG5cbiAgICAgICAgZm9yIChmaWVsZCBvZiB0aGlzLnRleHRSZXN1bHQuZmllbGRzKVxuICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkVHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkcy5wdXNoKGZpZWxkKVxuICAgICAgICBpZiAoZm91bmRGaWVsZHMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG5cbiAgICAgICAgbGV0IGZvdW5kRmllbGQgPSB1bmRlZmluZWRcblxuICAgICAgICBmb3IgKGZpZWxkIG9mIGZvdW5kRmllbGRzKVxuICAgICAgICAgICAgaWYgKGxjaWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3VuZEZpZWxkID0gZmllbGRcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubGNpZCA9PT0gbGNpZClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQubGNpZCA9PT0gbGNpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmllbGRcblxuICAgICAgICByZXR1cm4gZm91bmRGaWVsZFxuICAgIH1cblxuICAgIGZpbmRCeVNvdXJjZShmaWVsZDogRG9jdW1lbnRSZWFkZXJUZXh0RmllbGQsIHNvdXJjZVR5cGU6IG51bWJlcik6IERvY3VtZW50UmVhZGVyVmFsdWUgfCB1bmRlZmluZWQge1xuICAgICAgICBsZXQgdmFsdWVcbiAgICAgICAgaWYgKHNvdXJjZVR5cGUgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBtcnpWYWwgPSB0aGlzLmZpbmRCeVNvdXJjZShmaWVsZCwgMylcbiAgICAgICAgICAgIGlmIChtcnpWYWwgIT0gbnVsbCAmJiBtcnpWYWwgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBtcnpWYWxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDE4KVxuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgY29uc3QgdmlzdWFsVmFsID0gdGhpcy5maW5kQnlTb3VyY2UoZmllbGQsIDE3KVxuICAgICAgICAgICAgcmV0dXJuIHZpc3VhbFZhbFxuICAgICAgICB9XG4gICAgICAgIGlmKGZpZWxkLnZhbHVlcyA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGZpZWxkLnZhbHVlcylcbiAgICAgICAgICAgIGlmIChpdGVtLnNvdXJjZVR5cGUgPT09IHNvdXJjZVR5cGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVycyhyZXN1bHRUeXBlczogbnVtYmVyW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYodGhpcy5yYXdSZXN1bHQgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0aGlzLnJhd1Jlc3VsdClcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckxpc3QgPSBqc29uLkxpc3RcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFycmF5OiBhbnlbXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBjb250YWluZXJMaXN0KXtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyID09IG51bGwgfHwgY29udGFpbmVyLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVzdWx0VHlwZSBvZiByZXN1bHRUeXBlcylcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0VHlwZSA9PSBjb250YWluZXIucmVzdWx0X3R5cGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXJyYXkucHVzaChjb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0QXJyYXkubGVuZ3RoID09IDApIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckxpc3QgPSB7fVxuICAgICAgICAgICAgbmV3Q29udGFpbmVyTGlzdFtcIkxpc3RcIl0gPSByZXN1bHRBcnJheVxuICAgICAgICAgICAgY29uc3QgbmV3SnNvbiA9IHt9XG4gICAgICAgICAgICBuZXdKc29uW1wiQ29udGFpbmVyTGlzdFwiXSA9IG5ld0NvbnRhaW5lckxpc3RcbiAgICAgICAgICAgIG5ld0pzb25bXCJUcmFuc2FjdGlvbkluZm9cIl0gPSBqc29uLlRyYW5zYWN0aW9uSW5mb1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RW5jcnlwdGVkQ29udGFpbmVycygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250YWluZXJzKFtcbiAgICAgICAgICAgIGVSUFJNX1Jlc3VsdFR5cGUuUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9SRklEX1NFU1NJT04sXG4gICAgICAgICAgICBlUlBSTV9SZXN1bHRUeXBlLlJQUk1fUkVTVUxUX1RZUEVfSU5URVJOQUxfRU5DUllQVEVEX1JDTCxcbiAgICAgICAgICAgIGVSUFJNX1Jlc3VsdFR5cGUuUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9MSUNFTlNFXG4gICAgICAgIF0pXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEb2N1bWVudFJlYWRlclJlc3VsdHMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEb2N1bWVudFJlYWRlclJlc3VsdHNcblxuICAgICAgICByZXN1bHQuY2hpcFBhZ2UgPSBqc29uT2JqZWN0W1wiY2hpcFBhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nRmluaXNoZWRTdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LmVsYXBzZWRUaW1lID0ganNvbk9iamVjdFtcImVsYXBzZWRUaW1lXCJdXG4gICAgICAgIHJlc3VsdC5lbGFwc2VkVGltZVJGSUQgPSBqc29uT2JqZWN0W1wiZWxhcHNlZFRpbWVSRklEXCJdXG4gICAgICAgIHJlc3VsdC5tb3JlUGFnZXNBdmFpbGFibGUgPSBqc29uT2JqZWN0W1wibW9yZVBhZ2VzQXZhaWxhYmxlXCJdXG4gICAgICAgIHJlc3VsdC5yZmlkUmVzdWx0ID0ganNvbk9iamVjdFtcInJmaWRSZXN1bHRcIl1cbiAgICAgICAgcmVzdWx0LmhpZ2hSZXNvbHV0aW9uID0ganNvbk9iamVjdFtcImhpZ2hSZXNvbHV0aW9uXCJdXG4gICAgICAgIHJlc3VsdC5ncmFwaGljUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJHcmFwaGljUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJncmFwaGljUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQudGV4dFJlc3VsdCA9IERvY3VtZW50UmVhZGVyVGV4dFJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1widGV4dFJlc3VsdFwiXSlcbiAgICAgICAgcmVzdWx0LmRvY3VtZW50UG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRvY3VtZW50UG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFBvc2l0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEVsZW1lbnRQb3NpdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUG9zaXRpb25cIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYmFyY29kZVBvc2l0aW9uLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubXJ6UG9zaXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1yelBvc2l0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibXJ6UG9zaXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRWxlbWVudFBvc2l0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJtcnpQb3NpdGlvblwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tcnpQb3NpdGlvbi5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlUXVhbGl0eUdyb3VwLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3UmVzdWx0ID0ganNvbk9iamVjdFtcInJhd1Jlc3VsdFwiXVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb24gPSBEb2N1bWVudFJlYWRlck5vdGlmaWNhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZG9jdW1lbnRSZWFkZXJOb3RpZmljYXRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5yZmlkU2Vzc2lvbkRhdGEgPSBSRklEU2Vzc2lvbkRhdGEuZnJvbUpzb24oanNvbk9iamVjdFtcInJmaWRTZXNzaW9uRGF0YVwiXSlcbiAgICAgICAgcmVzdWx0LmF1dGhlbnRpY2l0eVJlc3VsdCA9IERvY3VtZW50UmVhZGVyQXV0aGVudGljaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdXRoZW50aWNpdHlSZXN1bHRcIl0pXG4gICAgICAgIHJlc3VsdC5iYXJjb2RlUmVzdWx0ID0gRG9jdW1lbnRSZWFkZXJCYXJjb2RlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJiYXJjb2RlUmVzdWx0XCJdKVxuICAgICAgICByZXN1bHQuZG9jdW1lbnRUeXBlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkb2N1bWVudFR5cGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRG9jdW1lbnRSZWFkZXJEb2N1bWVudFR5cGUuZnJvbUpzb24oanNvbk9iamVjdFtcImRvY3VtZW50VHlwZVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudFR5cGUucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBEb2N1bWVudFJlYWRlclJlc3VsdHNTdGF0dXMuZnJvbUpzb24oanNvbk9iamVjdFtcInN0YXR1c1wiXSlcbiAgICAgICAgcmVzdWx0LnZkc25jRGF0YSA9IFZEU05DRGF0YS5mcm9tSnNvbihqc29uT2JqZWN0W1widmRzbmNEYXRhXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb250U3R5bGUgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJPTEQ6IDEsXG4gICAgSVRBTElDOiAyLFxuICAgIEJPTERfSVRBTElDOiAzLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fQXV0aGVudGljaXR5ID0ge1xuICAgIE5PTkU6IDAsXG4gICAgVVZfTFVNSU5FU0NFTkNFOiAxLFxuICAgIElSX0I5MDA6IDIsXG4gICAgSU1BR0VfUEFUVEVSTjogNCxcbiAgICBBWElBTF9QUk9URUNUSU9OOiA4LFxuICAgIFVWX0ZJQkVSUzogMTYsXG4gICAgSVJfVklTSUJJTElUWTogMzIsXG4gICAgT0NSX1NFQ1VSSVRZX1RFWFQ6IDY0LFxuICAgIElQSTogMTI4LFxuICAgIFBIT1RPX0VNQkVEX1RZUEU6IDUxMixcbiAgICBIT0xPR1JBTVM6IDQwOTYsXG4gICAgUEhPVE9fQVJFQTogODE5MixcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OOiAzMjc2OCxcbiAgICBCQVJDT0RFX0ZPUk1BVF9DSEVDSzogNjU1MzYsXG4gICAgS0lORUdSQU06IDEzMTA3MixcbiAgICBIT0xPR1JBTVNfREVURUNUSU9OOiA1MjQyODgsXG4gICAgTVJaOiA4Mzg4NjA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRXJyb3JDb2RlcyA9IHtcbiAgICBSRklEX0VSUk9SX05PX0VSUk9SOiAweDAwMDAwMDAxLFxuICAgIFJGSURfRVJST1JfQUxSRUFEWV9ET05FOiAweDAwMDAwMDAyLFxuICAgIFJGSURfRVJST1JfRkFJTEVEOiAweGZmZmZmZmZmLFxuICAgIFJGSURfRVJST1JfTk9fQ0hJUF9ERVRFQ1RFRDogMHg4MDAxMDAwMSxcbiAgICBSRklEX0VSUk9SX05PVF9BVkFJTEFCTEU6IDB4ODAwMTAwMDIsXG4gICAgUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjogMHg4MDAxMDAwNCxcbiAgICBSRklEX0VSUk9SX05PVF9JTklUSUFMSVpFRDogMHg4MDAxMDAwNSxcbiAgICBSRklEX0VSUk9SX05PVF9FTk9VR0hfTUVNT1JZOiAweDgwMDEwMDA2LFxuICAgIFJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6IDB4ODAwMTAwMDgsXG4gICAgUkZJRF9FUlJPUl9VTktOT1dOX0NPTU1BTkQ6IDB4ODAwMTAwMDksXG4gICAgUkZJRF9FUlJPUl9GSUxFX0lPX0VSUk9SOiAweDgwMDEwMDBBLFxuICAgIFJGSURfRVJST1JfQlVTWTogMHg4MDAxMDAwQixcbiAgICBSRklEX0VSUk9SX09MRF9GSVJNV0FSRTogMHg4MDAxMDAwQyxcbiAgICBSRklEX0VSUk9SX1BDU0NfRkFJTEVEOiAweDgwMDIwMDAwLFxuICAgIFJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTogMHg4MDAyMDAwMSxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6IDB4ODAwMjAwMDIsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfTk9UX0NPTk5FQ1RFRDogMHg4MDAyMDAwMyxcbiAgICBSRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDogMHg4MDAyMDAwNCxcbiAgICBSRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOiAweDgwMDIwMDA1LFxuICAgIFJGSURfRVJST1JfUENTQ19GQUlMRURfU0NBUkQ6IDB4ODAwMjAwMDYsXG4gICAgUkZJRF9FUlJPUl9QQ1NDX0VYVF9MRV9GQUlMRUQ6IDB4ODAwMjAwMTAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU0VDVVJJVFlfTUFOQUdFUjogMHg4NjAwMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9BUFBfU0VMRUNUSU9OX0ZBSUxVUkU6IDB4ODYwMDAwMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfTUFDX0ZBSUw6IDB4ODYwMDAxMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRU5DX0ZBSUw6IDB4ODYwMDAxMDEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDEwMixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFX0RBVEE6IDB4ODYwMDAxMDMsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOEVfTUlTU0lORzogMHg4NjAwMDIwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19NSVNTSU5HOiAweDg2MDAwMjAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzk5X01JU1NJTkc6IDB4ODYwMDAyMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfU01fTUFDX0lOQ09SUkVDVDogMHg4NjAwMDIwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19JTkNPUlJFQ1Q6IDB4ODYwMDAyMDQsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOiAweDg2MDAwMzAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1dST05HX1JORF9JQ0NfTEVOR1RIOiAweDg2MDAwMzAxLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOVF9BVVRIX0ZBSUxVUkU6IDB4ODYwMDAzMDIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9LQVRfRkFJTFVSRTogMHg4NjAwMDMwMyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0RTVF9GQUlMVVJFOiAweDg2MDAwMzA0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BTT19DRVJUSUZJQ0FURV9GQUlMVVJFOiAweDg2MDAwMzA1LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfQVRfRkFJTFVSRTogMHg4NjAwMDMwNixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRVRfQ0hBTExFTkdFX0ZBSUxVUkU6IDB4ODYwMDAzMDcsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRVhUX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOCxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9HRU5FUkFMX0FVVEhfRkFJTFVSRTogMHg4NjAwMDMwOSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX05PVF9GT1VORDogMHg4MDAwNkE4MixcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9GSUxFX0VPRjE6IDB4ODAwMDYyODIsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YyOiAweDgwMDA2QjAwLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X0lOQ09SUkVDVF9QQVJBTVM6IDB4ODAwMDZBODAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfTk9fUkVGRVJFTkNFX0RBVEE6IDB4ODAwMDZBODgsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQ6IDB4ODAwMDYzQzEsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0JMT0NLRUQ6IDB4ODAwMDYzQzAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjZfUFdEX0RFQUNUSVZBVEVEOiAweDgwMDA2MjgzLFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEMjogMHg4MDAwNjk4MyxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQyOiAweDgwMDA2OTg0LFxuICAgIFJGSURfRVJST1JfTEFZRVI2X1BXRF9TVVNQRU5EMjogMHg4MDAwNjk4NSxcbiAgICBSRklEX0VSUk9SX0xBWUVSNl9QV0RfRkFJTEVEOiAweDgwMTA2M0MwLFxuICAgIFJGSURfRVJST1JfTk9UX1BFUkZPUk1FRDogMHg4MzAwMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSVNfQ0xPU0VEOiAweDgzMDAwMDAxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046IDB4ODMwMDAwMDIsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9CQURfQ0VSVElGSUNBVEU6IDB4ODMwMDAwMTEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfTk9UX1NFVDogMHg4MzAwMDAxMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfVU5LTk9XTjogMHg4MzAwMDAxMyxcbiAgICBSRklEX0VSUk9SX1Nlc3Npb25fUHJvY2VkdXJlX1R5cGVfVW5zdXBwb3J0ZWQ6IDB4ODMwMDAwMTQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX05PVF9TRVQ6IDB4ODMwMDAwMTUsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDE2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOU1VQUE9SVEVEX1NNX1RZUEU6IDB4ODMwMDAwMTcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX1NNX1RZUEU6IDB4ODMwMDAwMTgsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfUkVTVFJJQ1RFRDogMHg4MzAwMDAxOSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MzAwMDAxQSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9OT1RfU0VUOiAweDgzMDAwMDFCLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDogMHg4MzAwMDAxQyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfVU5LTk9XTl9UWVBFOiAweDgzMDAwMDIwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTogMHg4MzAwMDAyMSxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfUEFDRTogMHg4MzAwMDAyMixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfQ0FfS0VZUzogMHg4MzAwMDAyMyxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUkVRVUlSRVNfVEE6IDB4ODMwMDAwMjQsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOiAweDgzMDAwMDI1LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9JTkNPUlJFQ1RfT1BUSU9OX0NBOiAweDgzMDAwMDI2LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9DQV9GQUlMRUQ6IDB4ODMwMDAwMjcsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDogMHg4MzAwMDAyOCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQUFfRkFJTEVEOiAweDgzMDAwMDI5LFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SSV9GQUlMRUQ6IDB4ODMwMDAwMkEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6IDB4ODMwMDAwMzAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX1BBX0hBU0hfQ0hFQ0tfRkFJTEVEOiAweDgzMDAwMDMxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfRVhQSVJZOiAweDgzMDAwMDQwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6IDB4ODMwMDAwNDEsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0lOVkFMSURfQVVYX0RBVEFfQ09NTVVOSVRZX0lEOiAweDgzMDAwMDQyLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUkVRVUlSRVNfQVBQX1NFTEVDVElPTjogMHg4MzAwMDA1MCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1BJTl9OT1RfU0VUOiAweDgzMDAwMDUxLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9FX1NJR05fUElOX05PVF9WRVJJRklFRDogMHg4MzAwMDA1MixcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fSU5DT1JSRUNUX0RBVEE6IDB4ODMwMDAwNjAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOiAweDgzMDEwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0lOQ09SUkVDVF9EQVRBOiAweDgzMDIwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTogMHg4MzAzMDAwMCxcbiAgICBSRklEX0VSUk9SX1NFU1NJT05fRklMRV9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6IDB4ODMwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfV1JPTkdfVEFHOiAweDgzMDUwMDAwLFxuICAgIFJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6IDB4ODMwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ0FOVF9SRUFEX0RBVEE6IDB4ODMwNzAwMDAsXG4gICAgUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQUNDRVNTX0RFTklFRDogMHg4MzA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTk9fRVJST1I6IDB4ODQwMDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1RJTUVfT1VUOiAweDg0MDEwMDAwLFxuICAgIFJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT046IDB4ODQwMjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NSQzogMHg4NDAzMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9JTlRFR1JJVFk6IDB4ODQwNDAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfTEVOR1RIOiAweDg0MDUwMDAwLFxuICAgIFJGSURfRVJST1JfTGF5ZXIzNF9SRlU6IDB4ODQwNjAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0NPTExJU0lPTl9UT09fTUFOWTogMHg4NDA3MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0xfQjogMHg4NDA4MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfREFUQV9DT05URU5UUzogMHg4NDA5MDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0w6IDB4ODQwQTAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X0dMT0JBTF9USU1FX09VVDogMHg4NDBCMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfTUlGQVJFX0FVVEg6IDB4ODQwQzAwMDAsXG4gICAgUkZJRF9FUlJPUl9MQVlFUjM0X1NBTV9FUlJPUjogMHg4NDBEMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0NPTExJU0lPTjogMHg4NDBFMDAwMCxcbiAgICBSRklEX0VSUk9SX0xBWUVSMzRfU0FNX0FDS05PV0xFREdFOiAweDg0MEYwMDAwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9OT19FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBObyBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9BTFJFQURZX0RPTkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVGhlIHJlcXVlc3RlZCBvcGVyYXRpb24gaXMgYWxyZWFkeSBwZXJmb3JtZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9OT19DSElQX0RFVEVDVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vIGNoaXAgaXMgZGV0ZWN0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBVbmF2YWlsYWJsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9JTlZBTElEX1BBUkFNRVRFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIHBhcmFtZXRlciBpbiBFeGVjdXRlQ29tbWFuZCgpIGNhbGwgZm91bmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTk9UX0lOSVRJQUxJWkVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IERldmljZSBpcyB1bmluaXRpYWxpemVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX05PVF9FTk9VR0hfTUVNT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE91dCBvZiBtZW1vcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfSU5WQUxJRF9ESVJFQ1RPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBkaXJlY3RvcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfVU5LTk9XTl9DT01NQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVua25vd24gY29tbWFuZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9GSUxFX0lPX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgRmlsZTogSU8gRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfQlVTWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBSRklEIGlzIGJ1c3lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfT0xEX0ZJUk1XQVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRoZSBmaXJtd2FyZSBuZWVkcyB0byBiZSB1cGRhdGVkIHRvIGEgbmV3ZXIgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9QQ1NDX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBGYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfUENTQ19SRUFERVJfTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgcmVhZGVyIGlzIHVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfQ0FOVF9DT05ORUNUX0NBUkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogVGhlIGNhcmQgY2Fubm90IGJlIGNvbm5lY3RlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9QQ1NDX0NBUkRfSVNfTk9UX0NPTk5FQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBUaGUgY2FyZCBpcyBub3QgY29ubmVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfT1BFUkFUSU9OX0NBTkNFTExFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQQ1NDOiBPcGVyYXRpb24gaXMgY2FuY2VsbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1BDU0NfQ0FSRF9JU19CVVNZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IFRoZSBjYXJkIGlzIGJ1c3lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfUENTQ19GQUlMRURfU0NBUkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUENTQzogRmFpbGVkIFNtYXJ0IENhcmRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfUENTQ19FWFRfTEVfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBDU0M6IEV4dExlIEZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfU0VDVVJJVFlfTUFOQUdFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNlY3VyZSBNZXNzYWdpbmcgd2FzIG5vdCBhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0FQUF9TRUxFQ1RJT05fRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQV8wMyBcXFwiQXBwbGljYXRpb24gc2VsZWN0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9NQUNfRkFJTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMSBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIE1BQyBmYWlsdXJlXFxcIlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTVVUVUFMX0FVVEhfRU5DX0ZBSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBJU083ODE2X0JfMDIgXFxcIk11dHVhbCBhdXRoZW50aWNhdGlvbiBlbmNyeXB0aW9uIGZhaWx1cmVcXFwiXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9NVVRVQUxfQVVUSF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSVNPNzgxNl9CXzAzIFxcXCJNdXR1YWwgYXV0aGVudGljYXRpb24gZmFpbHVyZVxcXCJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X01VVFVBTF9BVVRIX0ZBSUxVUkVfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IElTTzc4MTZfQl8wMyBcXFwiTXV0dWFsIGF1dGhlbnRpY2F0aW9uIGZhaWx1cmUgZGF0YVxcXCJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1NNX0RPXzhFX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBNQUMgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fODdfTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIGNyeXB0b2dyYW0gbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfU01fRE9fOTlfTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFNNIGZhaWx1cmUg4oCTIHNlY3VyZWQgc3RhdHVzIGJ5dGVzIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1NNX01BQ19JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgTUFDXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9TTV9ET184N19JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBTTSBmYWlsdXJlIOKAkyBpbmNvcnJlY3QgY3J5cHRvZ3JhbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTk9OX1RMVl9SRVNQT05TRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTm90IFRMViByZXNwb25zZSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9XUk9OR19STkRfSUNDX0xFTkdUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFdyb25nIGRhdGEgbGVuZ3RoIChBUERVX0lOU19HRVRfQ0hBTExFTkdFKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfSU5UX0FVVEhfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEFQRFVfSU5TX0lOVEVSTkFMX0FVVEhFTlRJQ0FURSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9NU0VfU0VUX0tBVF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogTVNFOlNldCBLQVQgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTVNFX1NFVF9EU1RfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgRFNUIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1BTT19DRVJUSUZJQ0FURV9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFNPIENFUlRJRklDQVRFIGZhaWx1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X01TRV9TRVRfQVRfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IE1TRTpTZXQgQVQgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfR0VUX0NIQUxMRU5HRV9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogR0VUIENIQUxMRU5HRSBmYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9FWFRfQVVUSF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogQVBEVV9JTlNfRVhURVJOQUxfQVVUSEVOVElDQVRFIChleHRlcm5hbCBhdXRoZW50aWNhdGlvbikgZmFpbHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfR0VORVJBTF9BVVRIX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBHZW5lcmFsIEF1dGhlbnRpY2l0eSBGYWlsdXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9GSUxFX05PVF9GT1VORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IEZpbGUgc2VsZWN0aW9uIGZhaWx1cmUgLyBmaWxlIG5vdCBmb3VuZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfRklMRV9FT0YxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUmVhZGluZyBiZXlvbmQgRU9GIC8gVW5leHBlY3RlZCBFT0ZcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X0ZJTEVfRU9GMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFJlYWRpbmcgYmV5b25kIEVPRiAvIFVuZXhwZWN0ZWQgRU9GXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9JTkNPUlJFQ1RfUEFSQU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogSW5jb3JyZWN0IHBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfTk9fUkVGRVJFTkNFX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBObyByZWZlcmVuY2UgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0Qgc3VzcGVuZGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QV0RfQkxPQ0tFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBibG9ja2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QV0RfREVBQ1RJVkFURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgZGVhY3RpdmF0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1BXRF9CTE9DS0VEMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMQVlFUjY6IFBXRCBibG9ja2VkIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVI2X1BXRF9ERUFDVElWQVRFRDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTEFZRVI2OiBQV0QgZGVhY3RpdmF0ZWQgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjZfUFdEX1NVU1BFTkQyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIHN1c3BlbmRlZCAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSNl9QV0RfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxBWUVSNjogUFdEIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9OT1RfUEVSRk9STUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IE5vdCBwZXJmb3JtZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9JU19DTE9TRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU2Vzc2lvbiBpcyBjbG9zZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9URVJNSU5BTF9VTlNVUFBPUlRFRF9PUEVSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5zdXBwb3J0ZWQgdGVybWluYWwgb3BlcmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9VTktOT1dOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgdW5rbm93blwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1RFUk1JTkFMX1RZUEVfQkFEX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgYmFkIGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fVEVSTUlOQUxfVFlQRV9OT1RfU0VUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFRlcm1pbmFsIHR5cGUgbm90IHNldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1BST0NFRFVSRV9UWVBFX1VOS05PV046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogVW5rbm93biBwcm9jZWR1cmUgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TZXNzaW9uX1Byb2NlZHVyZV9UeXBlX1Vuc3VwcG9ydGVkOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFVuc3VwcG9ydGVkIHByb2NlZHVyZSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fUFJPQ0VEVVJFX1RZUEVfTk9UX1NFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQcm9jZWR1cmUgdHlwZSBub3Qgc2V0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9VTktOT1dOX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSB1bmtub3duIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfS0VZX1VOU1VQUE9SVEVEX1NNX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSB1bnN1cHBvcnRlZCBTTSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9JTkNPUlJFQ1RfU01fVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IGluY29ycmVjdCBTTSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0tFWV9SRVNUUklDVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEFjY2VzcyBrZXkgcmVzdHJpY3RlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQWNjZXNzIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19LRVlfTk9UX1NFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3Mga2V5IG5vdCBzZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9QV0RfTUFOQUdFTUVOVF9OT1RfQVVUSE9SSVpFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBQV0QgbWFuYWdlbWVudCBub3QgYXV0aG9yaXplZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1VOS05PV05fVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgY29udHJvbCB1bmtub3duIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19TTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBBY2Nlc3MgY29udHJvbCB1bmtub3duIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19QQUNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFBBQ0UgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19DQV9LRVlTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENBIGtleXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9SRVFVSVJFU19UQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUQSByZXF1aXJlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1JFUVVJUkVTX0NBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENBIHJlcXVpcmVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfSU5DT1JSRUNUX09QVElPTl9DQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3Qgb3B0aW9uIENBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfQ0FfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IENBIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0FDQ0VTU19DT05UUk9MX1RBX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBUQSBmYWlsZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9BQ0NFU1NfQ09OVFJPTF9BQV9GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogQUEgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fQUNDRVNTX0NPTlRST0xfUklfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IFJJIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1BBX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogU08gc2lnbmF0dXJlIGNoZWNrIGZhaWxlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX1BBX0hBU0hfQ0hFQ0tfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IEhhc2ggY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fSU5WQUxJRF9BVVhfREFUQV9EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGF1eCBkYXRhIC0gZGF0ZSBvZiBleHBpcnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0RBVEVfT0ZfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogSW52YWxpZCBhdXggZGF0YSAtIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9JTlZBTElEX0FVWF9EQVRBX0NPTU1VTklUWV9JRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbnZhbGlkIGF1eCBkYXRhIC0gY29tbXVuaXR5IElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRV9TSUdOX1JFUVVJUkVTX0FQUF9TRUxFQ1RJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogZVNpZ24gcmVxdWlyZXMgYXBwIHNlbGVjdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1NFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBlU2lnbiBQSU4gbm90IHNldFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0VfU0lHTl9QSU5fTk9UX1ZFUklGSUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IGVTaWduIFBJTiBub3QgdmVyaWZpZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfTk9UX0VOT1VHSF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogSW5zdWZmaWNpZW50IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX1VORVhQRUNURURfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IFVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ29udGFpbnMgdW5leHBlY3RlZCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX1NFU1NJT05fRklMRV9XUk9OR19UQUc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBXcm9uZyB0YWdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfVVNFX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRCBmaWxlOiBDYW5ub3QgdXNlIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfU0VTU0lPTl9GSUxFX0NBTlRfUkVBRF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQgZmlsZTogQ2Fubm90IHJlYWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9TRVNTSU9OX0ZJTEVfQUNDRVNTX0RFTklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEIGZpbGU6IEFjY2VzcyBkZW5pZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9OT19FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIE5vIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfVElNRV9PVVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBUaW1lb3V0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfQ09MTElTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gQ29sbGlzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfQ1JDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gQ1JDXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfREFUQV9JTlRFR1JJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBEYXRhIGludGVncml0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfTEVOR1RIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gRGF0YSBsZW5ndGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTGF5ZXIzNF9SRlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBSRlVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9DT0xMSVNJT05fVE9PX01BTlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBUb28gbWFueSBjb2xsaXNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9QUk9UT0NPTF9COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gUHJvdG9jb2wgQlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0RBVEFfQ09OVEVOVFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBEYXRhIGNvbnRlbnRzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfUFJPVE9DT0w6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBQcm90b2NvbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkZJRF9FUlJPUl9MQVlFUjM0X0dMT0JBTF9USU1FX09VVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIEdsb2JhIHRpbWVvdXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9NSUZBUkVfQVVUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIE1JRkFSRSBhdXRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfU0FNX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJGSUQ6IExheWVyIDM0IC0gU0FNIGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SRklEX0VSUk9SX0xBWUVSMzRfU0FNX0NPTExJU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSRklEOiBMYXllciAzNCAtIFNBTSBjb2xsaXNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJGSURfRVJST1JfTEFZRVIzNF9TQU1fQUNLTk9XTEVER0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUkZJRDogTGF5ZXIgMzQgLSBTQU0gYWNrbm93bGVkZ2VcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyA9IHtcbiAgICBFUlJfTERTX09LOiAweDAwMDAwMDAxLFxuICAgIEVSUl9MRFNfQVNOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDAxLFxuICAgIFJSX0xEU19BU05fTk9UX0VOT1VHSF9EQVRBOiAweDgwMDAwMDAyLFxuICAgIEVSUl9MRFNfQVNOX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDAwMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOCxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9FTkNBUF9DT05URU5UU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAwOSxcbiAgICBFUlJfTERTX0FTTl9TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDBBLFxuICAgIEVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDExLFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMTMsXG4gICAgRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE0LFxuICAgIEVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNSxcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RHX0hBU0hFU19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNixcbiAgICBFUlJfTERTX0FTTl9MRFNfT0JKRUNUX1ZFUlNJT05fSU5GT19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxMixcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxNyxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE4LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NOX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDE5LFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxQSxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JU1NVRVJfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUIsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUMsXG4gICAgRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfU1VCSkVDVF9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAxRCxcbiAgICBFUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX1BLX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDFFLFxuICAgIEVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX0VYVEVOU0lPTlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMUYsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjAsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fVkVSU0lPTl9JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMSxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjIsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fRElHRVNUX0FMR19JTkNPUlJFQ1RfREFUQTogMHg4MDAwMDAyMyxcbiAgICBFUlJfTERTX0FTTl9TSUdORVJfSU5GT19TSUdORURfQVRUUlNfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjQsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6IDB4ODAwMDAwMjUsXG4gICAgRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI2LFxuICAgIEVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1VOU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOiAweDgwMDAwMDI3LFxuICAgIEVSUl9MRFNfSUNBT19MRFNfT0JKRUNUX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4ODAwMDAwMzAsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTogMHg4MDAwMDAzMSxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDAzMixcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTogMHg4MDAwMDAzMyxcbiAgICBFUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfRVJST1I6IDB4ODAwMDAwMzQsXG4gICAgRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX1NJR05FRF9BVFRSU19NSVNTRUQ6IDB4ODAwMDAwMzYsXG4gICAgRVJSX0xEU19BVVRIX1NJR05FUl9JTkZPX0NBTlRfRklORF9DRVJUSUZJQ0FURTogMHg4MDAwMDAzNSxcbiAgICBFUlJfTERTX0FVVEhfRVJST1I6IDB4ODAwMDAwNTAsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06IDB4ODAwMDAwNTEsXG4gICAgRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOiAweDgwMDAwMDUyLFxuICAgIEVSUl9MRFNfQVVUSF9NRVNTRURfQUxHT1JJVEhNUzogMHg4MDAwMDA1MyxcbiAgICBFUlJfTERTX0FVVEhfUFVCTElDX0tFWV9EQVRBX0lOVkFMSUQ6IDB4ODAwMDAwNTQsXG4gICAgRVJSX0xEU19BVVRIX0FMR09SSVRITV9QQVJBTUVURVJTX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5WQUxJRDogMHg4MDAwMDA1NixcbiAgICBFUlJfTERTX0FVVEhfVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTogMHg4MDAwMDA1NyxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOiAweDgwMDAwMDU4LFxuICAgIEVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19OT1RfREVGSU5FRDogMHg4MDAwMDA1OSxcbiAgICBFUlJfTERTX0FVVEhfU0lHTkFUVVJFX0NIRUNLX0ZBSUxFRDogMHg4MDAwMDA1QSxcbiAgICBFUlJfTERTX0RHX1dST05HX1RBSDogMHg4MDAwMDA3MCxcbiAgICBFUlJfTERTX0RHX0NPTlRFTlRTX1VORVhQRUNURURfREFUQTogMHg4MDAwMDA3MSxcbiAgICBFUlJfTERTX0JBUF9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAxMSxcbiAgICBFUlJfTERTX1BBQ0VfSU5GT19OT1RfQVZBSUxBQkxFOiAweDgxMDAwMDIwLFxuICAgIEVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAyMSxcbiAgICBFUlJfTERTX1BBQ0VfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6IDB4ODEwMDAwMjIsXG4gICAgRVJSX0xEU19QQUNFX0VQSEVNRVJBTF9LRVlTX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDIzLFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOiAweDgxMDAwMDI0LFxuICAgIEVSUl9MRFNfUEFDRV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDI1LFxuICAgIEVSUl9MRFNfUEFDRV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0ZPUk1BVDogMHg4MTAwMDAyNixcbiAgICBFUlJfTERTX1BBQ0VfRVBIRU1FUkFMX0tFWVNfSU5DT1JSRUNUOiAweDgxMDAwMDI3LFxuICAgIEVSUl9MRFNfUEFDRV9NQVBQSU5HX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDogMHg4MTAwMDAyOCxcbiAgICBFUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06IDB4ODEwMDAwMjksXG4gICAgRVJSX0xEU19QQUNFX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzogMHg4MTAwMDAyQSxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfSU5DT1JSRUNUOiAweDgxMDAwMDJCLFxuICAgIEVSUl9MRFNfUEFDRV9DQU1fREFUQV9DQU5UX1ZFUklGWTogMHg4MTAwMDAyQyxcbiAgICBFUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOiAweDgxMDAwMDJELFxuICAgIEVSUl9MRFNfUEFDRV9JTV9TQ0hFTUVfSU5DT1JSRUNUOiAweDgxMDAwMDJFLFxuICAgIEVSUl9MRFNfUEFDRV9JTV9SQU5ET01fTUFQUElOR19GQUlMRUQ6IDB4ODEwMDAwMkYsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfUFVCTElDX0tFWTogMHg4MTAwMDAzMCxcbiAgICBFUlJfTERTX0NBX0NBTlRfRklORF9JTkZPOiAweDgxMDAwMDMxLFxuICAgIEVSUl9MRFNfQ0FfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwMzIsXG4gICAgRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6IDB4ODEwMDAwMzMsXG4gICAgRVJSX0xEU19DQV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTogMHg4MTAwMDAzNCxcbiAgICBFUlJfTERTX0NBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDM1LFxuICAgIEVSUl9MRFNfQ0FfRVBIRU1FUkFMX0tFWVNfQ0FOVF9DUkVBVEU6IDB4ODEwMDAwMzYsXG4gICAgRVJSX0xEU19DQV9TSEFSRURfU0VDUkVUX0NBTlRfQ1JFQVRFOiAweDgxMDAwMDM3LFxuICAgIEVSUl9MRFNfQ0FfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOiAweDgxMDAwMDM4LFxuICAgIEVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAwNDAsXG4gICAgRVJSX0xEU19UQV9DQU5UX0JVSUxEX0NFUlRJRklDQVRFX0NIQUlOOiAweDgxMDAwMDQxLFxuICAgIEVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOiAweDgxMDAwMDQyLFxuICAgIEVSUl9MRFNfVEFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4ODEwMDAwNDMsXG4gICAgRVJSX0xEU19UQV9TSUdOQVRVUkVfQlVJTERJTkdfRVJST1I6IDB4ODEwMDAwNDQsXG4gICAgRVJSX0xEU19UQV9JTlZBTElEX0tFWV9BTEdPUklUSE1fUEFSQU1FVEVSUzogMHg4MTAwMDA0NSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOiAweDgxMDAwMDUwLFxuICAgIEVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDA1MSxcbiAgICBFUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6IDB4ODEwMDAwNTIsXG4gICAgRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOiAweDgxMDAwMDUzLFxuICAgIEVSUl9MRFNfQUFfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDU0LFxuICAgIEVSUl9MRFNfQUFfVU5TVVBQT1JURURfUkVDT1ZFUllfU0NIRU1FOiAweDgxMDAwMDU1LFxuICAgIEVSUl9MRFNfQUFfSU5DT1JSRUNUX1RSQUlMRVI6IDB4ODEwMDAwNTYsXG4gICAgRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOiAweDgxMDAwMDU3LFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9DQU5UX0ZJTkQ6IDB4ODEwMDAwNzAsXG4gICAgRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMDcxLFxuICAgIEVSUl9MRFNfUklfU0VDVE9SX0tFWV9JTkNPTVBMRVRFX0RBVEE6IDB4ODEwMDAwNzIsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOiAweDgxMDAwMDYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDogMHg4MTAwMDA2MixcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfVU5TVVBQT1JURURfVEVSTUlOQUxfVFlQRTogMHg4MTAwMDA2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX1VOU1VQUE9SVEVEOiAweDgxMDAwMDYsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTlZBTElEX1BBUkFNUzogMHg4MTAwMDA2NSxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYwLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ1BJX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYxLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ0FSX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTYyLFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2MyxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIUl9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDE2NCxcbiAgICBFUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjUsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY2LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfVE9fSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjcsXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMTY4LFxuICAgIEVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX0RBVEE6IDB4ODEwMDAxNjksXG4gICAgRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9NSVNTSU5HOiAweDgxMDAwMTZBLFxuICAgIEVSUl9MRFNfVkRTX1VOU1VQUE9SVEVEX1ZFUlNJT046IDB4ODEwMDAyMDAsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX1NJWkU6IDB4ODEwMDAyMDEsXG4gICAgRVJSX0xEU19WRFNfSVNTVUlOR19DT1VOVFJZX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMjAyLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9TSVpFOiAweDgxMDAwMjAzLFxuICAgIEVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOiAweDgxMDAwMjA0LFxuICAgIEVSUl9MRFNfVkRTX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDIwNSxcbiAgICBFUlJfTERTX1ZEU19OQ19JTkNPUlJFQ1RfREFUQTogMHg4MTAwMDMwMCxcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOiAweDgxMDAwMzAxLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX0hFQURFUjogMHg4MTAwMDMwMixcbiAgICBFUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9UWVBFOiAweDgxMDAwMzAzLFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1ZFUlNJT046IDB4ODEwMDAzMDQsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSVNTVUlOR19DT1VOVFJZOiAweDgxMDAwMzA1LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6IDB4ODEwMDAzMDYsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHTkFUVVJFOiAweDgxMDAwMzA3LFxuICAgIEVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR19BTEdPUklUSE06IDB4ODEwMDAzMDgsXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6IDB4ODEwMDAzMDksXG4gICAgRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfU0lHX1ZBTFVFOiAweDgxMDAwMzBBLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19PSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPS1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUl9MRFNfQVNOX05PVF9FTk9VR0hfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTjogTm90IGVub3VnaCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DT05URU5UU19VTkVYUEVDVEVEX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU046IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVEX0RBVEFfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORURfREFUQV9FTkNBUF9DT05URU5UU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZWQgZGF0YTogRW5jYXAgY29udGVudHMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVkIGRhdGE6IFZlcnNpb24gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lZCBkYXRhOiBEaWdlc3QgYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fTERTX09CSkVDVF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fTERTX09CSkVDVF9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfRElHRVNUX0FMR09SSVRITV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBEaWdlc3QgYWxnb3JpdGhtIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9MRFNfT0JKRUNUX0RHX0hBU0hFU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBMRFMgb2JqZWN0OiBERyBoYXNoZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkZPX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIExEUyBvYmplY3Q6IFZlcnNpb24gaW5mbyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IEluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TTl9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU04gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBDZXJ0aWZpY2F0ZTogU2lnbmF0dXJlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9JU1NVRVJfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IElzc3VlciBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fQ0VSVElGSUNBVEVfVkFMSURJVFlfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gQ2VydGlmaWNhdGU6IFZhbGlkaXR5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9TVUJKRUNUX1BLX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBTdWJqZWN0IFBLIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9DRVJUSUZJQ0FURV9FWFRFTlNJT05TX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORVJfSU5GT19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFZlcnNpb24gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFTTiBTaWduZXIgaW5mbzogU0lEIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FTTl9TSUdORVJfSU5GT19ESUdFU1RfQUxHX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBEaWdlc3QgYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTaWduZWQgYXR0cmlidXRlcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTl9BTEdfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBU04gU2lnbmVyIGluZm86IFNpZ24gYWxnb3JpdGhtcyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVNOX1NJR05FUl9JTkZPX1VOU0lHTkVEX0FUVFJTX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQVNOIFNpZ25lciBpbmZvOiBVbnNpZ25lZCBhdHRyaWJ1dGVzIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0lDQU9fTERTX09CSkVDVF9VTlNVUFBPUlRFRF9ESUdFU1RfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBMRFMgb2JqZWN0OiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgLXRoaXMuRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0lDQU9fU0lHTkVSX0lORk9fVU5TVVBQT1JURURfRElHRVNUX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVyIGluZm86IFVuc3VwcG9ydGVkIGRpZ2VzdCBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19JQ0FPX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfSUNBT19TSUdORVJfSU5GT19TSUdORURfQVRUUlNfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gSUNBTyBTaWduZXIgaW5mbzogU2lnbmVkIGF0dHJpYnV0ZXMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0FOVF9GSU5EX0NFUlRJRklDQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmVyIGluZm8gY2Fubm90IGZpbmQgY2VydGlmaWNhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IEVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfVU5TVVBQT1JURURfU0lHTkFUVVJFX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHNpZ25hdHVyZSBhbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEF1dGg6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfTUVTU0VEX0FMR09SSVRITVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBNZXNzZWQgYWxnb3JpdGhtc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1BVQkxJQ19LRVlfREFUQV9JTlZBTElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogUHVibGljIGtleSBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9BTEdPUklUSE1fUEFSQU1FVEVSU19EQVRBX0lOVkFMSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBkYXRhIGludmFsaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQVVUSF9TSUdOQVRVUkVfREFUQV9JTlZBTElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBVbnN1cHBvcnRlZCBkaWdlc3QgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfU0lHTkFUVVJFX0RBVEFfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQXV0aDogU2lnbmF0dXJlIGRhdGEgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FVVEhfQUxHT1JJVEhNX1BBUkFNRVRFUlNfTk9UX0RFRklORUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBBbGdvcml0aG0gcGFyYW1ldGVycyBub3QgZGVmaW5lZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BVVRIX1NJR05BVFVSRV9DSEVDS19GQUlMRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBdXRoOiBTaWduYXR1cmUgY2hlY2sgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0RHX1dST05HX1RBSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIERHOiBXcm9uZyBUYWdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9JTkZPX05PVF9BVkFJTEFCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9TWU1NRVRSSUNfQ1lQSEVSX0NBTlRfSU5JVElBTElaRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFN5bW1ldHJpYyBDeXBoZXIgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9LRVlfQUdSRUVNRU5UX0NBTlRfSU5JVElBTElaRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEtleSBBZ3JlZW1lbnQgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9FUEhFTUVSQUxfS0VZU19DQU5UX0NSRUFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IEVwaGVtZXJhbCBLZXlzIENhbm5vdCBDcmVhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9NQVBQSU5HX0NBTlRfREVDT0RFX05PTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTWFwcGluZyBDYW5ub3QgRGVjb2RlIE5vbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfU0hBUkVEX1NFQ1JFVF9DQU5UX0NSRUFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IFNoYXJlZCBTZWNyZXQgQ2Fubm90IENyZWF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19QQUNFX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfRk9STUFUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogRG9tYWluIFBhcmFtcyBVbnN1cHBvcnRlZCBGb3JtYXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9FUEhFTUVSQUxfS0VZU19JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBFcGhlbWVyYWwgS2V5cyBJbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfUEFDRV9NQVBQSU5HX0VQSEVNRVJBTF9LRVlTX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IE1hcHBpbmcgRXBoZW1lcmFsIEtleXMgSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfTUFQUElOR19DQU5UX1BFUkZPUk06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBNYXBwaW5nIENhbm5vdCBQZXJmb3JtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfTk9OX01BVENISU5HX0FVVEhfVE9LRU5TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogTm9uLU1hdGNoaW5nIEF1dGggVG9rZW5zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NBX0NBTlRfRklORF9QVUJMSUNfS0VZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ0E6IENhbm5vdCBGaW5kIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfQ0FOVF9GSU5EX0lORk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgSW5mb1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBJbmNvcnJlY3QgVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9DQU5UX0ZJTkRfRE9NQUlOX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogQ2Fubm90IEZpbmQgRG9tYWluIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ0FfS0VZX0FHUkVFTUVOVF9DQU5UX0lOSVRJQUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogS2V5IEFncmVlbWVudCBDYW5ub3QgSW5pdGlhbGl6ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9QVUJMSUNfS0VZX1VOU1VQUE9SVEVEX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBQdWJsaWMgS2V5IFVuc3VwcG9ydGVkIEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DQV9FUEhFTUVSQUxfS0VZU19DQU5UX0NSRUFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBFcGhlbWVyYWwgS2V5cyBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NBX1NIQVJFRF9TRUNSRVRfQ0FOVF9DUkVBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDQTogU2hhcmVkIFNlY3JldCBDYW5ub3QgQ3JlYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NBX05PTl9NQVRDSElOR19BVVRIX1RPS0VOUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENBOiBOb24tTWF0Y2hpbmcgQXV0aCBUb2tlbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVEFfSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVEFfQ0FOVF9CVUlMRF9DRVJUSUZJQ0FURV9DSEFJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBDYW5ub3QgQnVpbGQgQ2VydGlmaWNhdGUgQ2hhaW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVEFfQ0FOVF9GSU5EX0lTX1BSSVZBVEVfS0VZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IENhbm5vdCBGaW5kIElTIFByaXZhdGUgS2V5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX1BVQkxJQ19LRVlfVU5TVVBQT1JURURfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVEE6IFB1YmxpYyBLZXkgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1RBX1NJR05BVFVSRV9CVUlMRElOR19FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFRBOiBTaWduYXR1cmUgQnVpbGRpbmcgRXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVEFfSU5WQUxJRF9LRVlfQUxHT1JJVEhNX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBUQTogSW52YWxpZCBLZXkgQWxnb3JpdGhtIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQUFfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQUFfUFVCTElDX0tFWV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIEFBOiBQdWJsaWMgS2V5IEluY29ycmVjdCBEYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX1BVQkxJQ19LRVlfSU5DT1JSRUNUX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogUHVibGljIEtleSBJbmNvcnJlY3QgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BQV9QVUJMSUNfS0VZX1VOREVGSU5FRF9QQVJBTUVURVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFB1YmxpYyBLZXkgVW5kZWZpbmVkIFBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQUFfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IFNpZ25hdHVyZSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19BQV9VTlNVUFBPUlRFRF9SRUNPVkVSWV9TQ0hFTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogVW5zdXBwb3J0ZWQgcmVjb3Zlcnkgc2NoZW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX0lOQ09SUkVDVF9UUkFJTEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQUE6IEluY29ycmVjdCBUcmFpbGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0FBX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBBQTogVW5zdXBwb3J0ZWQgRGlnZXN0IEFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19SSV9TRUNUT1JfS0VZX0NBTlRfRklORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IENhbm5vdCBGaW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1JJX1NFQ1RPUl9LRVlfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBSSTogU2VjdG9yIEtleSBJbmNvcnJlY3QgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19SSV9TRUNUT1JfS0VZX0lOQ09NUExFVEVfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFJJOiBTZWN0b3IgS2V5IEluY29tcGxldGUgRGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9NSVNTSU5HX01BTkRBVE9SWV9EQVRBX1BLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IE1pc3NpbmcgbWFuZGF0b3J5IGRhdGEgUEtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFVCTElDX0tFWV9VTlNVUFBPUlRFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBQdWJsaWMga2V5IHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfVU5TVVBQT1JURURfVEVSTUlOQUxfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBDSEFUIHVuc3VwcG9ydGVkIHRlcm1pbmFsIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfVU5TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5WQUxJRF9QQVJBTVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgaW52YWxpZCBwYXJhbXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogSW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfQ1BJX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IENQSSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DQVJfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0FSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BVQkxJQ19LRVlfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHVibGljIGtleSBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9DSFJfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hSIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX0NIQVRfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogQ0hBVCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRF9GUk9NX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFZhbGlkIGZyb20gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfVkFMSURfVE9fSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWQgdG8gaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfQ1ZfQ0VSVElGSUNBVEVfRVhURU5TSU9OU19JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIENWIENlcnRpZmljYXRlOiBFeHRlbnNpb25zIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gQ1YgQ2VydGlmaWNhdGU6IFByaXZhdGUga2V5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX0NWX0NFUlRJRklDQVRFX1BSSVZBVEVfS0VZX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19CQVBfU1lNTUVUUklDX0NZUEhFUl9DQU5UX0lOSVRJQUxJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBCQVA6IFN5bW1ldHJpYyBDeXBoZXIgQ2Fubm90IEluaXRpYWxpemVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfREdfQ09OVEVOVFNfVU5FWFBFQ1RFRF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gREc6IENvbnRlbnRzIHVuZXhwZWN0ZWQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19JQ0FPX1NJR05FRF9EQVRBX1NJR05FUl9JTkZPU19FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIElDQU8gU2lnbmVkIGRhdGE6IFNpZ25lciBpbmZvIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfQ0FNX0RBVEFfQ0FOVF9WRVJJRlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBQQUNFOiBDQU0gZGF0YSBjYW5ub3QgdmVyaWZ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfQ0FNX0RBVEFfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogQ0FNIGRhdGEgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfQ0FNX0RBVEFfTk9OX01BVENISU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogQ0FNIGRhdGEgbm9uLW1hdGNoaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfSU1fUkFORE9NX01BUFBJTkdfRkFJTEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gUEFDRTogUmFuZG9tIG1hcHBpbmcgZmFpbGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1BBQ0VfSU1fU0NIRU1FX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFBBQ0U6IElNIHNjaGVtZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX0lTU1VJTkdfQ09VTlRSWV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSXNzdWluZyBjb3VudHJ5IGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19JU1NVSU5HX0NPVU5UUllfU0laRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogSXNzdWluZyBjb3VudHJ5IHNpemVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfQ0VSVElGSUNBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IGNlcnRpZmljYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9IRUFERVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IGhlYWRlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfSVNTVUlOR19DT1VOVFJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBpc3N1aW5nIGNvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX01FU1NBR0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IG1lc3NhZ2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX05DX01JU1NJTkdfT1JfSU5DT1JSRUNUX1NJR05BVFVSRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3Qgc2lnbmF0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBNaXNzaW5nIG9yIGluY29ycmVjdCBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19OQ19NSVNTSU5HX09SX0lOQ09SUkVDVF9TSUdfVkFMVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IE1pc3Npbmcgb3IgaW5jb3JyZWN0IHNpZ25hdHVyZSB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfTkNfTUlTU0lOR19PUl9JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFcnJvciAtIFZEUzogTWlzc2luZyBvciBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfU0lHTkFUVVJFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVSUl9MRFNfVkRTX1NJR05FUl9DRVJUSUZJQ0FURV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBTaWduYXR1cmUgY2VydGlmaWNhdGUgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRVJSX0xEU19WRFNfU0lHTkVSX0NFUlRJRklDQVRFX1NJWkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXJyb3IgLSBWRFM6IFNpZ25hdHVyZSBjZXJ0aWZpY2F0ZSBzaXplXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FUlJfTERTX1ZEU19VTlNVUFBPUlRFRF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVycm9yIC0gVkRTOiBVbnN1cHBvcnRlZCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0NlcnRpZmljYXRlVHlwZSA9IHtcbiAgICBDVF9VTkRFRklORUQ6IDAsXG4gICAgQ1RfQ1NDQTogMSxcbiAgICBDVF9DU0NBX0xJTks6IDIsXG4gICAgQ1RfRFM6IDMsXG4gICAgQ1RfTUxTOiA0LFxuICAgIENUX0RFVl9MUzogNSxcbiAgICBDVF9ERUZfTFM6IDYsXG4gICAgQ1RfQkxTOiA3LFxuICAgIENUX0xEUzI6IDgsXG4gICAgQ1RfQkNTOiA5LFxuICAgIENUX0JDU05DOiAxMCxcbn1cblxuZXhwb3J0IGNvbnN0IFJHTE1lYXN1cmVTeXN0ZW0gPSB7XG4gICAgTUVUUklDOiAwLFxuICAgIElNUEVSSUFMOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fUmVzdWx0VHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VNUFRZOiAwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX0lNQUdFOiAxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfRklMRV9JTUFHRTogMixcbiAgICBSUFJNX1JFU1VMVF9UWVBFX01SWl9PQ1JfRVhURU5ERUQ6IDMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVJDT0RFUzogNSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0dSQVBISUNTOiA2LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTVJaX1RFU1RfUVVBTElUWTogNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1RZUEVTX0NBTkRJREFURVM6IDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9DSE9TRU5fRE9DVU1FTlRfVFlQRV9DQU5ESURBVEU6IDksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9ET0NVTUVOVFNfSU5GT19MSVNUOiAxMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX09DUl9MRVhJQ0FMX0FOQUxZWkU6IDE1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfUkFXX1VOQ1JPUFBFRF9JTUFHRTogMTYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9WSVNVQUxfT0NSX0VYVEVOREVEOiAxNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0JBUl9DT0RFU19URVhUX0RBVEE6IDE4LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSX0NPREVTX0lNQUdFX0RBVEE6IDE5LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQVVUSEVOVElDSVRZOiAyMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0VPU19JTUFHRTogMjMsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9CQVlFUl9JTUFHRTogMjQsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NQUdORVRJQ19TVFJJUEU6IDI1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfTUFHTkVUSUNfU1RSSVBFX1RFWFRfREFUQTogMjYsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9GSUVMRF9GSUxFX0lNQUdFOiAyNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RBVEFCQVNFX0NIRUNLOiAyOCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0ZJTkdFUlBSSU5UX1RFTVBMQVRFX0lTTzogMjksXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlBVVF9JTUFHRV9RVUFMSVRZOiAzMCxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX1JGSURfU0VTU0lPTjogNDgsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9JTlRFUk5BTF9FTkNSWVBURURfUkNMOiA0OSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0lOVEVSTkFMX0xJQ0VOU0U6IDUwLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfSU1BR0VTOiAzNyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0hPTE9fUEFSQU1TOiA0NyxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0RPQ1VNRU5UX1BPU0lUSU9OOiA4NSxcbiAgICBSUFJNX1JFU1VMVF9UWVBFX0NVU1RPTTogMTAwLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9SQVdfREFUQTogMTAxLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9URVhUX0RBVEE6IDEwMixcbiAgICBSRklEX1JFU1VMVF9UWVBFX1JGSURfSU1BR0VfREFUQTogMTAzLFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9CSU5BUllfREFUQTogMTA0LFxuICAgIFJGSURfUkVTVUxUX1RZUEVfUkZJRF9PUklHSU5BTF9HUkFQSElDUzogMTA1LFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfQkFSQ09ERV9QT1NJVElPTjogNjIsXG4gICAgUlBSTV9SRVNVTFRfVFlQRV9NUlpfUE9TSVRJT046IDYxLFxuICAgIFJQUk1fUkVTVUxUX1RZUEVfU1RBVFVTOiAzMyxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVR5cGVzID0ge1xuICAgIEZST05UOiBcImZyb250XCIsXG4gICAgQkFDSzogXCJiYWNrXCIsXG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZVNoYXBlVHlwZSA9IHtcbiAgICBMSU5FOiAwLFxuICAgIENPUk5FUjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0JhdWRSYXRlID0ge1xuICAgIHJmYnJfMTA2OiAxLFxuICAgIHJmYnJfMjEyOiAyLFxuICAgIHJmYnJfNDI0OiA0LFxuICAgIHJmYnJfODQ4OiA4LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQgPSB7XG4gICAgUkNGX0RJU0FCTEVEOiAwLFxuICAgIFJDRl9WRVJJRklFRDogMSxcbiAgICBSQ0ZfTk9UX1ZFUklGSUVEOiAyLFxuICAgIFJDRl9DT01QQVJFX1RSVUU6IDMsXG4gICAgUkNGX0NPTVBBUkVfRkFMU0U6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJBY3Rpb24gPSB7XG4gICAgQ09NUExFVEU6IDEsXG4gICAgUFJPQ0VTUzogMCxcbiAgICBDQU5DRUw6IDIsXG4gICAgRVJST1I6IDMsXG4gICAgTk9USUZJQ0FUSU9OOiA1LFxuICAgIFBST0NFU1NfV0hJVEVfVVZfSU1BR0VTOiA2LFxuICAgIFBST0NFU1NfV0hJVEVfRkxBU0hMSUdIVDogNyxcbiAgICBNT1JFX1BBR0VTX0FWQUlMQUJMRTogOCxcbiAgICBQUk9DRVNTX0lSX0ZSQU1FOiA5LFxuICAgIFRJTUVPVVQ6IDEwLFxuICAgIFBST0NFU1NJTkdfT05fU0VSVklDRTogMTEsXG59XG5cbmV4cG9ydCBjb25zdCBlUHJvY2Vzc0dMQ29tbWFuZHMgPSB7XG4gICAgZVBDX1Byb2NNZ3JfU2V0TGljZW5zZTogMTIxMDAsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2VzczogMTIxMDEsXG4gICAgZVBDX1Byb2NNZ3JfUHJvY2Vzc0FzeW5jOiAxMjEwMixcbiAgICBlUENfUHJvY01ncl9Jbml0OiAxMjEwMyxcbiAgICBlUENfUHJvY01ncl9Qcm9jZXNzSW1hZ2U6IDEyMTA0LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3RG9jdW1lbnQ6IDEyMTA1LFxuICAgIGVQQ19Qcm9jTWdyX1N0YXJ0TmV3UGFnZTogMTIxMDYsXG4gICAgZVBDX1Byb2NNZ3JfVW5sb2FkOiAxMjEwNyxcbiAgICBlUENfUHJvY01ncl9DaGVja0RhdGFiYXNlOiAxMjEwOSxcbiAgICBlUENfUHJvY01ncl9Db21wYXJlUG9ydHJhaXRzOiAxMjExMSxcbiAgICBlUENfUkZJRF9TZXRUQ0NQYXJhbXM6IDEyNTIyLFxuICAgIGVQQ19SRklEX1NldFJlcHJvY2Vzc2luZ1BhcmFtczogMTI1MjMsXG59XG5cbmV4cG9ydCBjb25zdCBQS0RSZXNvdXJjZVR5cGUgPSB7XG4gICAgQ0VSVElGSUNBVEVfUEE6IDAsXG4gICAgQ0VSVElGSUNBVEVfVEE6IDEsXG4gICAgTERJRjogMixcbiAgICBDUkw6IDMsXG4gICAgTUw6IDQsXG4gICAgREVGTDogNSxcbiAgICBERVZMOiA2LFxuICAgIEJMOiA3LFxuXG4gICAgZ2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwYVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXG4gICAgICAgICAgICBjYXNlIFwidGFcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DRVJUSUZJQ0FURV9UQVxuICAgICAgICAgICAgY2FzZSBcImxkaWZcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5MRElGXG4gICAgICAgICAgICBjYXNlIFwiY3JsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ1JMXG4gICAgICAgICAgICBjYXNlIFwibWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NTFxuICAgICAgICAgICAgY2FzZSBcImRlZmxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERUZMXG4gICAgICAgICAgICBjYXNlIFwiZGV2bFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkRFVkxcbiAgICAgICAgICAgIGNhc2UgXCJibFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJMXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNFUlRJRklDQVRFX1BBXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUgPSB7XG4gICAgYXB0VW5kZWZpbmVkOiAwLFxuICAgIGFwdFN0YW5kYXJkOiAxLFxuICAgIGFwdEFkdmFuY2VkOiAyLFxuICAgIGFwdEdlbmVyYWw6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0lkZW50aWZpZXIgPSB7XG4gICAgU0NFTkFSSU9fTVJaOiBcIk1yelwiLFxuICAgIFNDRU5BUklPX0JBUkNPREU6IFwiQmFyY29kZVwiLFxuICAgIFNDRU5BUklPX0xPQ0FURTogXCJMb2NhdGVcIixcbiAgICBTQ0VOQVJJT19PQ1I6IFwiT2NyXCIsXG4gICAgU0NFTkFSSU9fRE9DVFlQRTogXCJEb2NUeXBlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0JBUkNPREU6IFwiTXJ6T3JCYXJjb2RlXCIsXG4gICAgU0NFTkFSSU9fTVJaX09SX0xPQ0FURTogXCJNcnpPckxvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9BTkRfTE9DQVRFOiBcIk1yekFuZExvY2F0ZVwiLFxuICAgIFNDRU5BUklPX01SWl9PUl9PQ1I6IFwiTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19NUlpfT1JfQkFSQ09ERV9PUl9PQ1I6IFwiTXJ6T3JCYXJjb2RlT3JPY3JcIixcbiAgICBTQ0VOQVJJT19MT0NBVEVfVklTVUFMX0FORF9NUlpfT1JfT0NSOiBcIkxvY2F0ZVZpc3VhbF9BbmRfTXJ6T3JPY3JcIixcbiAgICBTQ0VOQVJJT19GVUxMX1BST0NFU1M6IFwiRnVsbFByb2Nlc3NcIixcbiAgICBTQ0VOQVJJT19GVUxMX0FVVEg6IFwiRnVsbEF1dGhcIixcbiAgICBTQ0VOQVJJT19JRDNSVVM6IFwiSWQzUnVzXCIsXG4gICAgU0NFTkFSSU9fUlVTX1NUQU1QOiBcIlJ1c1N0YW1wXCIsXG4gICAgU0NFTkFSSU9fT0NSX0ZSRUU6IFwiT2NyRnJlZVwiLFxuICAgIFNDRU5BUklPX0NSRURJVF9DQVJEOiBcIkNyZWRpdENhcmRcIixcbiAgICBTQ0VOQVJJT19DQVBUVVJFOiBcIkNhcHR1cmVcIixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX0FjY2Vzc0NvbnRyb2xfUHJvY2VkdXJlVHlwZSA9IHtcbiAgICBBQ1BUX1VOREVGSU5FRDogMCxcbiAgICBBQ1BUX0JBQzogMSxcbiAgICBBQ1BUX1BBQ0U6IDIsXG4gICAgQUNQVF9DQTogMyxcbiAgICBBQ1BUX1RBOiA0LFxuICAgIEFDUFRfQUE6IDUsXG4gICAgQUNQVF9SSTogNixcbiAgICBBQ1BUX0NBUkRfSU5GTzogMTAsXG59XG5cbmV4cG9ydCBjb25zdCBlUkZJRF9Ob3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBSRklEX05PVElGSUNBVElPTl9FUlJPUjogMHgwMDAxMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9ET0NVTUVOVF9SRUFEWTogMHgwMDAxMDAwMSxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MNDogMHgwMDAxMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9SRUFEX1BST1RPQ09MMzogMHgwMDAxMDAwQSxcbiAgICBSRklEX05PVElGSUNBVElPTl9QUk9HUkVTUzogMHgwMDAxMDAwQixcbiAgICBSRklEX05PVElGSUNBVElPTl9UQV9TVEVQOiAweDAwMDEwMDBFLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX1JFUVVJUkVEOiAweDAwMDEwMDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX0lTT19FUlJPUjogMHgwMDAxMTAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9SRVFVRVNUOiAweDAwMDEzMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1NNX0VTVEFCTElTSEVEOiAweDAwMDE0MDBGLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfUkVBREVSX0RJU0NPTk5FQ1RFRDogMHgwMDAyMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HRUQ6IDB4MDAwMjAwMDEsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19SRUNFSVZFRDogMHgwMDAyMDAwMixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1JFQURJTkdfVElNRTogMHgwMDAyMDAwMyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0RBVEFfUkVDRUlWRUQ6IDB4MDAwMjAwMDQsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19CWVRFU19TRU5UOiAweDAwMDIwMDA1LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfVE9UQUxfUkVBRElOR19TUEVFRDogMHgwMDAyMDAwNixcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1RPVEFMX1BST0NFU1NfVElNRTogMHgwMDAyMDAwNyxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1JFQURFUl9MSVNUX0NIQU5HSU5HOiAweDAwMDIwMDA4LFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRVhUX0xFTkdUSF9TVVBQT1JUOiAweDAwMDIwMDEwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOOiAweDAwMDIwMDExLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BBX0NFUlRJRklDQVRFX0NIQUlOX0lURU06IDB4MDAwMjAwMTIsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fU0NFTkFSSU86IDB4MDAwMjAwMjAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19SRUFESU5HX0RBVEFHUk9VUDogMHgwMDAzMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX0ZJTEVfTk9UX0ZPVU5EOiAweDAwMDQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1BDU0NfRU5EX09GX0ZJTEU6IDB4MDAwNTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19GSUxFX0FDQ0VTU19ERU5JRUQ6IDB4MDAwNjAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUENTQ19BUFBMSUNBVElPTl9TRUxFQ1RFRDogMHgwMDA3MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BQ19QUk9DRURVUkVfU1RBUlQ6IDB4MDAwODAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fQUNfUFJPQ0VEVVJFX0ZJTklTSDogMHgwMDA5MDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQV9TRUNVUklUWV9PQkpFQ1RfQ0hFQ0s6IDB4MDAwQTAwMDAsXG4gICAgUkZJRF9OT1RJRklDQVRJT05fUEFfRklMRV9DSEVDSzogMHgwMDBCMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9QQ1NDX1VQREFUSU5HX0RBVEFHUk9VUDogMHgwMDBDMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9BVVhJTElBUllfREFUQV9WQUxJREFUSU9OOiAweDAwMEQwMDAwLFxuICAgIFJGSURfTk9USUZJQ0FUSU9OX1JJX1NFQ1RPUl9JRDogMHgwMDBFMDAwMCxcbiAgICBSRklEX05PVElGSUNBVElPTl9CSU9NRVRSSUNTX0VNUFRZX1BMQUNFSE9MREVSOiAweDAwMEYwMDAwLFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfUGFzc3dvcmRfVHlwZSA9IHtcbiAgICBQUFRfVU5LTk9XTjogMCxcbiAgICBQUFRfTVJaOiAxLFxuICAgIFBQVF9DQU46IDIsXG4gICAgUFBUX1BJTjogMyxcbiAgICBQUFRfUFVLOiA0LFxuICAgIFBQVF9QSU5fRVNJR046IDUsXG4gICAgUFBUX1NBSTogNixcbn1cblxuZXhwb3J0IGNvbnN0IEJhcmNvZGVSZXN1bHQgPSB7XG4gICAgTk9fRVJSOiAwLFxuICAgIE5VTExfUFRSX0VSUjogLTYwMDEsXG4gICAgQkFEX0FSR19FUlI6IC02MDAyLFxuICAgIFNJWkVfRVJSOiAtNjAwMyxcbiAgICBSQU5HRV9FUlI6IC02MDA0LFxuICAgIElOVEVSTkFMX0VSUjogLTYwMDUsXG4gICAgVFJZX0VYQ0VQVF9FUlI6IC02MDA2LFxuICAgIEJBUl9DT0RFX05PVF9GT1VORDogLTYwMDgsXG4gICAgQkFSX0NPREVfREVDT0RFX0VSUjogLTYwMTAsXG4gICAgTk9fVVNFUl9ETExfRk9VTkQ6IC02MDE5LFxuICAgIE5PX0lQUF9ETExfRk9VTkQ6IC02MDIwLFxuICAgIElQUF9FWEVDX0VSUjogLTYwMjQsXG4gICAgSVBQX1RSWV9FWENFUFRfRVJSOiAtNjAyNSxcbiAgICBCQVJDT0RFX0VSUk9SX0lOUFVUX1BBUkFNOiAtMTEwMDEsXG4gICAgQkFSQ09ERV9FUlJPUl9GSU5JVDogLTExMDA2LFxuICAgIEJBUkNPREVfRVJST1JfTk9UX0xPQURfSVBfREVDT0RFRF9MTDogLTExMDEyLFxuICAgIEJBUkNPREVfRVJST1JfSU5ORVJfUFJPQkxFTTogLTExMTAwLFxuICAgIEJBUkNPREVfRVJST1JfREVDT0RFXzFEX0JBRF9ERUNPREU6IC0xMTIwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0ZJTkRfUk9XX09SX0NPTFVNTjogLTExMjAxLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWDogLTExMjAyLFxuICAgIEJBUkNPREVfRVJST1JfRklORF8zWDhfMkRfWTogLTExMjAzLFxuICAgIEJBUkNPREVfRVJST1JfMkRfVUdPTF9NQVg6IC0xMTIwNCxcbiAgICBCQVJDT0RFX0VSUk9SX0lOREVGSU5JVEVMWV9ERUNPREVEOiAtMTEyMTAsXG4gICAgQkFSQ09ERV9FUlJPUl9ETExfTk9UX0lOSVQ6IC0xMTMwMCxcbiAgICBCQVJDT0RFX0VSUk9SX0lQX0RFQ09ERV9ETExfVHJ5X0V4Y2VwdDogLTExNDAwLFxuICAgIElQREVDT0RFX0VSUk9SX0xBUkdFRVJST1JTOiAtNDUwMyxcbiAgICBJUERFQ09ERV9FUlJPUl9GQVVMVENPTFVNTlM6IC00NTA0LFxuICAgIElQREVDT0RFX0VSUk9SX0ZBVUxUUk9XUzogLTQ1MDUsXG4gICAgSVBERUNPREVfRVJST1JfSU5DT1JSRUNUX0VSUk9SX0xFVkVMOiAtNDUxMSxcbiAgICBJUERFQ09ERV9FUlJPUl9MT0FESU5HX0RFVl9UQUJMRTogLTQ1MTIsXG59XG5cbmV4cG9ydCBjb25zdCBlU2lnbk1hbmFnZW1lbnRBY3Rpb24gPSB7XG4gICAgc21hVW5kZWZpbmVkOiAwLFxuICAgIHNtYUNyZWF0ZVBJTjogMSxcbiAgICBzbWFDaGFuZ2VQSU46IDIsXG4gICAgc21hVW5ibG9ja1BJTjogMyxcbiAgICBzbWFUZXJtaW5hdGVQSU46IDQsXG4gICAgc21hR2VuZXJhdGVLZXlzOiA1LFxuICAgIHNtYVRlcm1pbmF0ZUtleXM6IDYsXG4gICAgc21hU2lnbkRhdGE6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBlQ2hlY2tEaWFnbm9zZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIFBBU1M6IDEsXG4gICAgSU5WQUxJRF9JTlBVVF9EQVRBOiAyLFxuICAgIElOVEVSTkFMX0VSUk9SOiAzLFxuICAgIEVYQ0VQVElPTl9JTl9NT0RVTEU6IDQsXG4gICAgVU5DRVJUQUlOX1ZFUklGSUNBVElPTjogNSxcbiAgICBORUNFU1NBUllfSU1BR0VfTk9UX0ZPVU5EOiA3LFxuICAgIFBIT1RPX1NJREVTX05PVF9GT1VORDogOCxcbiAgICBJTlZBTElEX0NIRUNLU1VNOiAxMCxcbiAgICBTWU5UQVhfRVJST1I6IDExLFxuICAgIExPR0lDX0VSUk9SOiAxMixcbiAgICBTT1VSQ0VTX0NPTVBBUklTT05fRVJST1I6IDEzLFxuICAgIEZJRUxEU19DT01QQVJJU09OX0xPR0lDX0VSUk9SOiAxNCxcbiAgICBJTlZBTElEX0ZJRUxEX0ZPUk1BVDogMTUsXG4gICAgVFJVRV9MVU1JTklTQ0VOQ0VfRVJST1I6IDIwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9FUlJPUjogMjEsXG4gICAgRklYRURfUEFUVEVSTl9FUlJPUjogMjIsXG4gICAgTE9XX0NPTlRSQVNUX0lOX0lSX0xJR0hUOiAyMyxcbiAgICBJTkNPUlJFQ1RfQkFDS0dST1VORF9MSUdIVDogMjQsXG4gICAgQkFDS0dST1VORF9DT01QQVJJU09OX0VSUk9SOiAyNSxcbiAgICBJTkNPUlJFQ1RfVEVYVF9DT0xPUjogMjYsXG4gICAgUEhPVE9fRkFMU0VfTFVNSU5JU0NFTkNFOiAyNyxcbiAgICBUT09fTVVDSF9TSElGVDogMjgsXG4gICAgRklCRVJTX05PVF9GT1VORDogMzAsXG4gICAgVE9PX01BTllfT0JKRUNUUzogMzEsXG4gICAgU1BFQ0tTX0lOX1VWOiAzMyxcbiAgICBUT09fTE9XX1JFU09MVVRJT046IDM0LFxuICAgIElOVklTSUJMRV9FTEVNRU5UX1BSRVNFTlQ6IDQwLFxuICAgIFZJU0lCTEVfRUxFTUVOVF9BQlNFTlQ6IDQxLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0NPTE9SRUQ6IDQyLFxuICAgIEVMRU1FTlRfU0hPVUxEX0JFX0dSQVlTQ0FMRTogNDMsXG4gICAgUEhPVE9fV0hJVEVfSVJfRE9OVF9NQVRDSDogNDQsXG4gICAgVVZfRFVMTF9QQVBFUl9NUlo6IDUwLFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9NUlo6IDUxLFxuICAgIFVWX0RVTExfUEFQRVJfUEhPVE86IDUyLFxuICAgIFVWX0RVTExfUEFQRVJfQkxBTks6IDUzLFxuICAgIFVWX0RVTExfUEFQRVJfRVJST1I6IDU0LFxuICAgIEZBTFNFX0xVTUlOSVNDRU5DRV9JTl9CTEFOSzogNTUsXG4gICAgQkFEX0FSRUFfSU5fQVhJQUw6IDYwLFxuICAgIEZBTFNFX0lQSV9QQVJBTUVURVJTOiA2NSxcbiAgICBGSUVMRF9QT1NfQ09SUkVDVE9SX0hJR0hMSUdIVF9JUjogODAsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9HTEFSRVNfSU5fUEhPVE9fQVJFQTogODEsXG4gICAgRklFTERfUE9TX0NPUlJFQ1RPUl9QSE9UT19SRVBMQUNFRDogODIsXG4gICAgT1ZJX0lSX0lOVklTSUJMRTogOTAsXG4gICAgT1ZJX0lOU1VGRklDSUVOVF9BUkVBOiA5MSxcbiAgICBPVklfQ09MT1JfSU5WQVJJQUJMRTogOTIsXG4gICAgT1ZJX0JBRF9DT0xPUl9GUk9OVDogOTMsXG4gICAgT1ZJX0JBRF9DT0xPUl9TSURFOiA5NCxcbiAgICBPVklfV0lERV9DT0xPUl9TUFJFQUQ6IDk1LFxuICAgIE9WSV9CQURfQ09MT1JfUEVSQ0VOVDogOTYsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9BQlNFTlQ6IDEwMCxcbiAgICBIT0xPR1JBTV9TSURFX1RPUF9JTUFHRVNfQUJTRU5UOiAxMDEsXG4gICAgSE9MT0dSQU1fRUxFTUVOVF9QUkVTRU5UOiAxMDIsXG4gICAgSE9MT0dSQU1fRlJBTUVTX0lTX0FCU0VOVDogMTAzLFxuICAgIEhPTE9HUkFNX0hPTE9fRklFTERfSVNfQUJTRU5UOiAxMDQsXG4gICAgUEhPVE9fUEFUVEVSTl9JTlRFUlJVUFRFRDogMTEwLFxuICAgIFBIT1RPX1BBVFRFUk5fU0hJRlRFRDogMTExLFxuICAgIFBIT1RPX1BBVFRFUk5fRElGRkVSRU5UX0NPTE9SUzogMTEyLFxuICAgIFBIT1RPX1BBVFRFUk5fSVJfVklTSUJMRTogMTEzLFxuICAgIFBIT1RPX1BBVFRFUk5fTk9UX0lOVEVSU0VDVDogMTE0LFxuICAgIFBIT1RPX1NJWkVfSVNfV1JPTkc6IDExNSxcbiAgICBQSE9UT19QQVRURVJOX0lOVkFMSURfQ09MT1I6IDExNixcbiAgICBQSE9UT19QQVRURVJOX1NISUZURURfVkVSVDogMTE3LFxuICAgIFBIT1RPX1BBVFRFUk5fUEFUVEVSTl9OT1RfRk9VTkQ6IDExOCxcbiAgICBQSE9UT19QQVRURVJOX0RJRkZFUkVOVF9MSU5FU19USElDS05FU1M6IDExOSxcbiAgICBQSE9UT19JU19OT1RfUkVDVEFOR0xFOiAxMjAsXG4gICAgUEhPVE9fQ09STkVSU19JU19XUk9ORzogMTIxLFxuICAgIERPQ1VNRU5UX0lTX0NBTkNFTExJTkc6IDEyMixcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9CTFVFOiAxMzAsXG4gICAgVEVYVF9DT0xPUl9TSE9VTERfQkVfR1JFRU46IDEzMSxcbiAgICBURVhUX0NPTE9SX1NIT1VMRF9CRV9SRUQ6IDEzMixcbiAgICBURVhUX1NIT1VMRF9CRV9CTEFDSzogMTMzLFxuICAgIEJBUkNPREVfV0FTX1JFQURfV0lUSF9FUlJPUlM6IDE0MCxcbiAgICBCQVJDT0RFX0RBVEFfRk9STUFUX0VSUk9SOiAxNDEsXG4gICAgQkFSQ09ERV9TSVpFX1BBUkFNU19FUlJPUjogMTQyLFxuICAgIE5PVF9BTExfQkFSQ09ERVNfUkVBRDogMTQzLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fUE9SVFJBSVRTX0RJRkZFUjogMTUwLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fU0VSVklDRV9SRVBMWTogMTUxLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fU0VSVklDRV9FUlJPUjogMTUyLFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9UX0VOT1VHSF9JTUFHRVM6IDE1MyxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX0xJVkVfUEhPVE86IDE1NCxcbiAgICBQT1JUUkFJVF9DT01QQVJJU09OX05PX1NFUlZJQ0VfTElDRU5TRTogMTU1LFxuICAgIFBPUlRSQUlUX0NPTVBBUklTT05fTk9fUE9SVFJBSVRfREVURUNURUQ6IDE1NixcbiAgICBNT0JJTEVfSU1BR0VTX1VOU1VJVEFCTEVfTElHSFRfQ09ORElUSU9OUzogMTYwLFxuICAgIE1PQklMRV9JTUFHRVNfV0hJVEVfVVZfTk9fRElGRkVSRU5DRTogMTYxLFxuICAgIEZJTkdFUlBSSU5UU19DT01QQVJJU09OX01JU01BVENIOiAxNzAsXG4gICAgSE9MT19QSE9UT19GQUNFX05PVF9ERVRFQ1RFRDogMTgwLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9DT01QQVJJU09OX0ZBSUxFRDogMTgxLFxuICAgIEhPTE9fUEhPVE9fRkFDRV9HTEFSRV9JTl9DRU5URVJfQUJTRU5UOiAxODIsXG4gICAgSE9MT19FTEVNRU5UX1NIQVBFX0VSUk9SOiAxODMsXG4gICAgQUxHT1JJVEhNX1NURVBTX0VSUk9SOiAxODQsXG4gICAgSE9MT19BUkVBU19OT1RfTE9BREVEOiAxODUsXG4gICAgRklOSVNIRURfQllfVElNRU9VVDogMTg2LFxuICAgIEhPTE9fUEhPVE9fRE9DVU1FTlRfT1VUU0lERV9GUkFNRTogMTg3LFxuICAgIExJVkVORVNTX0RFUFRIX0NIRUNLX0ZBSUxFRDogMTkwLFxuICAgIE1SWl9RVUFMSVRZX1dST05HX01SWl9EUEk6IDIwMCxcbiAgICBNUlpfUVVBTElUWV9XUk9OR19CQUNLR1JPVU5EOiAyMDEsXG4gICAgTEFTVF9ESUFHTk9TRV9WQUxVRTogMjEwLFxufVxuXG5leHBvcnQgY29uc3QgUkZJRERlbGVnYXRlID0ge1xuICAgIE5VTEw6IDAsXG4gICAgTk9fUEE6IDEsXG4gICAgRlVMTDogMixcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdGaW5pc2hlZFN0YXR1cyA9IHtcbiAgICBOT1RfUkVBRFk6IDAsXG4gICAgUkVBRFk6IDEsXG4gICAgVElNRU9VVDogMixcbn1cblxuZXhwb3J0IGNvbnN0IERvY0Zvcm1hdCA9IHtcbiAgICBJRDE6IDAsXG4gICAgSUQyOiAxLFxuICAgIElEMzogMixcbiAgICBOT046IDMsXG4gICAgQTQ6IDQsXG4gICAgSUQzX3gyOiA1LFxuICAgIElEMl9UVVJLRVk6IDYsXG4gICAgSUQxXzkwOiAxMCxcbiAgICBJRDFfMTgwOiAxMSxcbiAgICBJRDFfMjcwOiAxMixcbiAgICBJRDJfMTgwOiAxMyxcbiAgICBJRDNfMTgwOiAxNCxcbiAgICBDVVNUT006IDEwMDAsXG4gICAgUEhPVE86IDEwMDEsXG4gICAgRkxFWElCTEU6IDEwMDIsXG4gICAgVU5LTk9XTjogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyA9IHtcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MDAwMDAwMSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9OT05fTUFUQ0hJTkdfU0lHTkFUVVJFX0FMR09SSVRITTogMHg5MDAwMDAwMixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVElNRV9DT0RJTkc6IDB4OTAwMDAwMDMsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfSU5DT1JSRUNUX1VTRV9PRl9HRU5FUkFMSVpFRF9USU1FOiAweDkwMDAwMDA0LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0VNUFRZX0lTU1VFUjogMHg5MDAwMDAwNSxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9TVUJKRUNUOiAweDkwMDAwMDA2LFxuICAgIE5URl9MRFNfQVNOX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX0NSSVRJQ0FMX0VYVEVOU0lPTjogMHg5MDAwMDAwOCxcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9DU0NBX1JPTEU6IDB4OTAwMDAwMEUsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRk9SQ0VEX0RFRkFVTFRfRFNfUk9MRTogMHg5MDAwMDAwRixcbiAgICBOVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfSVNTVUVSX1NVQkpFQ1RfRFM6IDB4OTAwMDAwMTAsXG4gICAgTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRFVQTElDQVRJTkdfRVhURU5TSU9OUzogMHg5MDAwMDAxNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9NSVNTRUQ6IDB4OTAwMDAyMDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMjAxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT01NT05fTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyMDQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9NSVNTRUQ6IDB4OTAwMDAyMDUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTUlTU0VEOiAweDkwMDAwMjA2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIwNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjA4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9TSUdOQVRVUkVfQUxHT1JJVEhNOiAweDkwMDAwMjA5LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9VTlNVUFBPUlRFRF9QVUJMSUNfS0VZX0FMR09SSVRITTogMHg5MDAwMDIwQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTUlTU0VEX0VYVEVOU0lPTlM6IDB4OTAwMDAyMEIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkwMDAwMjBDLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOiAweDkwMDAwMjBELFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX01JU1NFRDogMHg5MDAwMDIwRSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMEYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMTAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX01JU1NFRDogMHg5MDAwMDIxMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMTogMHg5MDAwMDIxMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMjogMHg5MDAwMDIxMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfTk9UX0NSSVRJQ0FMOiAweDkwMDAwMjE0LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxNSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19NSVNTRUQ6IDB4OTAwMDAyMTYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfSU5DT1JSRUNUOiAweDkwMDAwMjE3LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6IDB4OTAwMDAyMTgsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9VU0FHRTogMHg5MDAwMDIxOSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMUEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9NSVNTRUQ6IDB4OTAwMDAyMUUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0tFWV9JRF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIxRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX01JU1NFRDogMHg5MDAwMDIyMCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1BSSVZBVEVfS0VZX1VQX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjIxLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfRU1QVFk6IDB4OTAwMDAyMjIsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX01JU1NFRDogMHg5MDAwMDIyMyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0VNUFRZOiAweDkwMDAwMjI1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9OT05fQ09NUExJQU5UOiAweDkwMDAwMjI2LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIyOCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fRU1QVFk6IDB4OTAwMDAyMjksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0lOQ09SUkVDVDogMHg5MDAwMDIyQSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9NSVNTRUQ6IDB4OTAwMDAyMkMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfSU5DT1JSRUNUX0RBVEE6IDB4OTAwMDAyMkQsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRU1QVFk6IDB4OTAwMDAyMkUsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIyRixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9DUklUSUNBTDogMHg5MDAwMDIzMSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9FTVBUWTogMHg5MDAwMDIzMixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9JTkNPUlJFQ1Q6IDB4OTAwMDAyMzMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fTk9OX0NPTVBMSUFOVDogMHg5MDAwMDIzNCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTUlTU0VEOiAweDkwMDAwMjM1LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDIzNixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfVkVSU0lPTjogMHg5MDAwMDIzNyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfRE9DX1RZUEVTOiAweDkwMDAwMjM4LFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVNfRU1QVFk6IDB4OTAwMDAyMzksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNBLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19FTVBUWTogMHg5MDAwMDIzQixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfUE9MSUNZX0lEX01JU1NFRDogMHg5MDAwMDIzQyxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX01JU1NFRDogMHg5MDAwMDIzRCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX0lOQ09SUkVDVF9EQVRBOiAweDkwMDAwMjNFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfRU1QVFk6IDB4OTAwMDAyM0YsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9QT0lOVF9NSVNTRUQ6IDB4OTAwMDAyNDAsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDEsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9TTl9OT05fQ09NUExJQU5UOiAweDkwMDAwMjQyLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX1NOX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9BVFRSSUJVVEVfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0NSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NVQkpFQ1RfQ09VTlRSWV9OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDYsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DU0NBX0FMVF9OQU1FU19OT05fTUFUQ0hJTkc6IDB4OTAwMDAyNDcsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9JTkNPUlJFQ1RfREFUQTogMHg5MDAwMDI0OCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNDksXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9DUklUSUNBTDogMHg5MDAwMDI0QSxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTk9OX0NPTVBMSUFOVDogMHg5MDAwMDI0QixcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfQ1JJVElDQUw6IDB4OTAwMDAyNEMsXG4gICAgTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9PUFRJT05BTF9DUklUSUNBTDogMHg5MDAwMDI0RCxcbiAgICBOVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9OT05fQ09NUExJQU5UOiAweDkwMDAwMjRFLFxuICAgIE5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPTU1PTl9OQU1FX05PTl9DT01QTElBTlQ6IDB4OTAwMDAyNEYsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjAsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9MRFNfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIxLFxuICAgIE5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDAyMixcbiAgICBOVEZfTERTX0lDQU9fQ09NX1VOSUNPREVfVkVSU0lPTl9NSVNTSU5HOiAweDkwMDAwMDIzLFxuICAgIE5URl9MRFNfSUNBT19DT01fREdQTV9JTkNPUlJFQ1Q6IDB4OTAwMDAwMjQsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX01JU1NJTkc6IDB4OTAwMDAwMjUsXG4gICAgTlRGX0xEU19JQ0FPX0NPTV9ER1BNX1VORVhQRUNURUQ6IDB4OTAwMDAwMjYsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX1VOU1VQUE9SVEVEOiAweDkwMDAwMDMwLFxuICAgIE5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fVU5TVVBQT1JURUQ6IDB4OTAwMDAwMzEsXG4gICAgTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX0xEU19WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMixcbiAgICBOVEZfTERTX0lDQU9fQVBQTElDQVRJT05fVU5JQ09ERV9WRVJTSU9OX0lOQ09OU0lTVEVOVDogMHg5MDAwMDAzMyxcbiAgICBOVEZfTERTX0FTTl9TSUdORURfREFUQV9PSURfSU5DT1JSRUNUOiAweDkwMDAwMTAwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUEwLFxuICAgIE5URl9MRFNfQVNOX1NJR05FRF9EQVRBX0NPTlRFTlRfT0lEX0lOQ09SUkVDVDogMHg5MDAwMDFBMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDEsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0VNUFRZOiAweDkwMDAwMTAyLFxuICAgIE5URl9MRFNfSUNBT19TSUdORURfREFUQV9ESUdFU1RfQUxHT1JJVEhNU19VTlNVUFBPUlRFRDogMHg5MDAwMDEwMyxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfU0lHTkVSX0lORk9TX01VTFRJUExFX0VOVFJJRVM6IDB4OTAwMDAxMDksXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19NSVNTRUQ6IDB4OTAwMDAxQjAsXG4gICAgTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19FTVBUWTogMHg5MDAwMDFCMSxcbiAgICBOVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfQ1JMU19JTkNPUlJFQ1RfVVNBR0U6IDB4OTAwMDAxQjIsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0NPTlRFTlRfT0lEOiAweDkwMDAwMTA0LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX05VTUJFUl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDUsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9NSVNTSU5HOiAweDkwMDAwMTA2LFxuICAgIE5URl9MRFNfSUNBT19MRFNfT0JKRUNUX0RHX0hBU0hfRVhUUkE6IDB4OTAwMDAxMDcsXG4gICAgTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwMDAxMDgsXG4gICAgTlRGX0xEU19JQ0FPX01BU1RFUl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUMwLFxuICAgIE5URl9MRFNfSUNBT19ERVZJQVRJT05fTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFDOCxcbiAgICBOVEZfTERTX0JTSV9ERUZFQ1RfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDogMHg5MDAwMDFEMCxcbiAgICBOVEZfTERTX0JTSV9CTEFDS19MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMUQ4LFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1ZFUlNJT05fSU5DT1JSRUNUOiAweDkwMDAwMTBBLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9JTkNPUlJFQ1RfQ0hPSUNFOiAweDkwMDAwMTBCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJRF9ESUdFU1RfQUxHT1JJVEhNX05PVF9MSVNURUQ6IDB4OTAwMDAxMEMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTBELFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfREFUQTogMHg5MDAwMDEwRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX1ZhbHVlOiAweDkwMDAwMTBGLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX01JU1NJTkc6IDB4OTAwMDAxMTAsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfREFUQTogMHg5MDAwMDExMSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9WQUxVRTogMHg5MDAwMDExMixcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9NSVNTSU5HOiAweDkwMDAwMTFCLFxuICAgIE5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX0RBVEE6IDB4OTAwMDAxMUMsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfVkFMVUU6IDB4OTAwMDAxMUQsXG4gICAgTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfTUlTU0lORzogMHg5MDAwMDExRSxcbiAgICBOVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9EQVRBOiAweDkwMDAwMTFGLFxuICAgIE5URl9MRFNfQVVUSF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTogMHg5MDAwMDExNSxcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDogMHg5MDAwMDExNixcbiAgICBOVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6IDB4OTAwMDAxMTcsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6IDB4OTAwMDAxMTgsXG4gICAgTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOiAweDkwMDAwMTE5LFxuICAgIE5URl9MRFNfVU5TVVBQT1JURURfSU1BR0VfRk9STUFUOiAweDkwMDAwMTFBLFxuICAgIE5URl9MRFNfTVJaX0RPQ1VNRU5UX1RZUEVfVU5LTk9XTjogMHgwMDAyMjAwOCxcbiAgICBOVEZfTERTX01SWl9JU1NVSU5HX1NUQVRFX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwOSxcbiAgICBOVEZfTERTX01SWl9OQU1FX0lTX1ZPSUQ6IDB4MDAwMjIwMEEsXG4gICAgTlRGX0xEU19NUlpfTlVNQkVSX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAwRCxcbiAgICBOVEZfTERTX01SWl9OQVRJT05BTElUWV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMEUsXG4gICAgTlRGX0xEU19NUlpfRE9CX1NZTlRBWF9FUlJPUjogMHgwMDAyMjAwRixcbiAgICBOVEZfTERTX01SWl9ET0JfRVJST1I6IDB4MDAwMjIwMTAsXG4gICAgTlRGX0xEU19NUlpfRE9CX0lOQ09SUkVDVF9DSEVDS1NVTTogMHgwMDAyMjAxMSxcbiAgICBOVEZfTERTX01SWl9TRVhfSU5DT1JSRUNUOiAweDAwMDIyMDEyLFxuICAgIE5URl9MRFNfTVJaX0RPRV9TWU5UQVhfRVJST1I6IDB4MDAwMjIwMTMsXG4gICAgTlRGX0xEU19NUlpfRE9FX0VSUk9SOiAweDAwMDIyMDE0LFxuICAgIE5URl9MRFNfTVJaX0RPRV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTUsXG4gICAgTlRGX0xEU19NUlpfT1BUSU9OQUxfREFUQV9JTkNPUlJFQ1RfQ0hFQ0tTVU06IDB4MDAwMjIwMTYsXG4gICAgTlRGX0xEU19NUlpfSU5DT1JSRUNUX0NIRUNLU1VNOiAweDAwMDIyMDE3LFxuICAgIE5URl9MRFNfTVJaX0lOQ09SUkVDVDogMHgwMDAyMjAxOCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX01JU1NJTkc6IDB4OTAwMTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9PV05FUl9JTkNPUlJFQ1Q6IDB4OTAwMjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX01JU1NJTkc6IDB4OTAwMzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0ZPUk1BVF9UWVBFX0lOQ09SUkVDVDogMHg5MDA0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfVFlQRV9JTkNPUlJFQ1Q6IDB4OTAwNTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX01JU1NJTkc6IDB4OTAwNjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX0lOQ09SUkVDVDogMHg5MDA3MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0lNQUdFX01JU1NJTkc6IDB4OTAwODAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9GT1JNQVRfSURfSU5DT1JSRUNUOiAweDkwMDkwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfVkVSU0lPTl9JTkNPUlJFQ1Q6IDB4OTAwQTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0xFTkdUSF9JTkNPUlJFQ1Q6IDB4OTAwQjAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0dFTkRFUjogMHg5MDEwMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfRVlFX0NPTE9SOiAweDkwMTEwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9IQUlSX0NPTE9SOiAweDkwMTIwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1lBVzogMHg5MDEzMDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9QSVRDSDogMHg5MDE0MDAwMCxcbiAgICBOVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9ST0xMOiAweDkwMTUwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfWUFXOiAweDkwMTYwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUElUQ0g6IDB4OTAxNzAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfVV9ST0xMOiAweDkwMTgwMDAwLFxuICAgIE5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9GQUNFX0lNQUdFX1RZUEU6IDB4OTAxOTAwMDAsXG4gICAgTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0lNQUdFX0RBVEFfVFlQRTogMHg5MDFBMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19VTlNVUFBPUlRFRF9TVERfUEFSQU1FVEVSUzogMHg5MTAwMDAwMCxcbiAgICBOVEZfTERTX1NJX1BBQ0VfSU5GT19ERVBSRUNBVEVEX1ZFUlNJT046IDB4OTEwMDAwMDEsXG4gICAgTlRGX0xEU19TSV9QQUNFX0RPTUFJTl9QQVJBTVNfVVNJTkdfU1REX1JFRjogMHg5MTAwMDAwMixcbiAgICBOVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDMsXG4gICAgTlRGX0xEU19TSV9DQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDA0LFxuICAgIE5URl9MRFNfU0lfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMDUsXG4gICAgTlRGX0xEU19TSV9DQV9ET01BSU5fUEFSQU1TX1VOU1VQUE9SVEVEX0FMR09SSVRITTogMHg5MTAwMDAwNixcbiAgICBOVEZfTERTX1NJX1RBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAwMDcsXG4gICAgTlRGX0xEU19TSV9UQV9JTkZPX0ZJTEVfSURfRk9SX1ZFUlNJT04yOiAweDkxMDAwMDA4LFxuICAgIE5URl9MRFNfU0lfRUlEX1NFQ1VSSVRZX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06IDB4OTEwMDAwMDksXG4gICAgTlRGX0xEU19TSV9SSV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBBLFxuICAgIE5URl9MRFNfU0lfUklfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEIsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09SUkVDVF9WRVJTSU9OOiAweDkxMDAwMDBDLFxuICAgIE5URl9MRFNfU0lfQUFfSU5GT19VTlNVUFBPUlRFRF9BTEdPUklUSE06IDB4OTEwMDAwMEQsXG4gICAgTlRGX0xEU19TSV9BQV9JTkZPX0lOQ09OU0lTVEVOVF9BTEdPUklUSE1fUkVGRVJFTkNFOiAweDkxMDAwMDBFLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwMCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPX05PX1NURF9QQVJBTUVURVJTOiAweDkxMDAwMTAxLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwMixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTAzLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9ET01BSU5fUEFSQU1TX05PX1JFUVVJUkVEX09QVElPTjogMHg5MTAwMDEwNCxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT1RfQVZBSUxBQkxFOiAweDkxMDAwMTA1LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9BTk9OWU1PVVNfSU5GT1M6IDB4OTEwMDAxMDYsXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzogMHg5MTAwMDEwNyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19QVUJMSUNfS0VZOiAweDkxMDAwMTA4LFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkNPUlJFQ1RfSU5GT1NfUVVBTlRJVFk6IDB4OTEwMDAxMDksXG4gICAgTlRGX0xEU19TSV9TVE9SQUdFX1RBX0lORk9fTk9UX0FWQUlMQUJMRTogMHg5MTAwMDEwQSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfQ0FSRF9JTkZPX0xPQ0FUT1JfTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQixcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfRUlEX1NFQ1VSSVRZX0lORk9fTVVMVElQTEVfRU5UUklFUzogMHg5MTAwMDEwQyxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUFJJVklMRUdFRF9USV9NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBELFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX0lOQ09SUkVDVF9VU0FHRTogMHg5MTAwMDEwRSxcbiAgICBOVEZfTERTX1NJX1NUT1JBR0VfUklfRE9NQUlOX1BBUkFNU19NVUxUSVBMRV9FTlRSSUVTOiAweDkxMDAwMTBGLFxuICAgIE5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9TX05PTl9DT05TSVNUQU5UOiAweDkxMDAwMTEwLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJPRklMRV9JTkNPUlJFQ1RfVkVSU0lPTjogMHg5MTAwMDIwMSxcbiAgICBOVEZfTERTX0NWX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkxMDAwMjAyLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTk9OX0NWX0NBX0RPTUFJTl9QQVJBTUVURVJTOiAweDkxMDAwMjAzLFxuICAgIE5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJJVkFURV9LRVlfSU5DT1JSRUNUX1ZFUlNJT046IDB4OTEwMDAyMDQsXG4gICAgTlRGX0xEU19UQV9QQUNFX1NUQVRJQ19CSU5ESU5HX1VTRUQ6IDB4OTEwMDAzMDAsXG4gICAgTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOiAweDkyMDAwMTE1LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9ST09UX0lTX05PVF9UUlVTVEVEOiAweDkyMDAwMTE2LFxuICAgIE5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9DQU5UX0ZJTkRfQ1NDQTogMHg5MjAwMDExNyxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUkVWT0tFRDogMHg5MjAwMDExOCxcbiAgICBOVEZfTERTX0FVVEhfTUxfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfU0lHTkFUVVJFX0lOVkFMSUQ6IDB4OTIwMDAxMTksXG5cbiAgICBnZXRUcmFuc2xhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9OT05fTUFUQ0hJTkdfU0lHTkFUVVJFX0FMR09SSVRITTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IE5vbi1tYXRjaGluZyBzaWduYXR1cmUgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfVElNRV9DT0RJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgdGltZSBjb2RpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0lOQ09SUkVDVF9VU0VfT0ZfR0VORVJBTElaRURfVElNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gY2VydGlmaWNhdGU6IEluY29ycmVjdCB1c2Ugb2YgZ2VuZXJhbGl6ZWQgdGltZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfRU1QVFlfSVNTVUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9FTVBUWV9TVUJKRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogRW1wdHkgc3ViamVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fQ0VSVElGSUNBVEVfVU5TVVBQT1JURURfQ1JJVElDQUxfRVhURU5TSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgY3JpdGljYWwgZXh0ZW5zaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9GT1JDRURfREVGQVVMVF9DU0NBX1JPTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgZGVmYXVsdCBDU0NBIHJvbGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0ZPUkNFRF9ERUZBVUxUX0RTX1JPTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBGb3JjZWQgRGVmYXVsdCBEUyByb2xlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9DRVJUSUZJQ0FURV9JTkNPUlJFQ1RfSVNTVUVSX1NVQkpFQ1RfRFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBJbmNvcnJlY3QgaXNzdWVyIHN1YmplY3QgRFNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX0NFUlRJRklDQVRFX0RVUExJQ0FUSU5HX0VYVEVOU0lPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIGNlcnRpZmljYXRlOiBEdXBsaWNhdGluZyBleHRlbnNpb25zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVkVSU0lPTl9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVmVyc2lvbiBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0lTU1VFUl9DT1VOVFJZX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09NTU9OX05BTUVfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb21tb24gbmFtZSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQ09VTlRSWV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IElzc3VlciBjb3VudHJ5IG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPVU5UUllfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBtaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX0NPTU1PTl9OQU1FX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvbW1vbiBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09VTlRSWV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgY291bnRyeSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfVVNJTkdfTk9OX0NPTVBMSUFOVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1NJR05BVFVSRV9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogVW5zdXBwb3J0ZWQgc2lnbmF0dXJlIGFsZ29yaXRobVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1VOU1VQUE9SVEVEX1BVQkxJQ19LRVlfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFVuc3VwcG9ydGVkIHB1YmxpYyBrZXkgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfTUlTU0VEX0VYVEVOU0lPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogTWlzc2VkIGV4dGVuc2lvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBWYWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9VU0lOR19OT05fQ09NUExJQU5UX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFVzaW5nIG5vbi1jb21wbGlhbnQgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9LRVlfVVNBR0VfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2UgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEtleSB1c2FnZSBub3QgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBLZXkgdXNhZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9VU0FHRTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIGluY29ycmVjdCB1c2FnZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfSU5DT1JSRUNUX1VTQUdFMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQmFzaWMgY29uc3RyYWludHMgaW5jb3JyZWN0IHVzYWdlIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQkFTSUNfQ19OT1RfQ1JJVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIG5vdCBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9CQVNJQ19DX1BBVEhfTEVOX0NfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBCYXNpYyBjb25zdHJhaW50cyBwYXRoIExlbkMgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0JBU0lDX0NfUEFUSF9MRU5fQ19JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEJhc2ljIGNvbnN0cmFpbnRzIHBhdGggTGVuQyBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRVhUX0tFWV9VU0FHRV9OT1RfQ1JJVElDQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IEV4dCBrZXkgdXNhZ2Ugbm90IGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0VYVF9LRVlfVVNBR0VfSU5DT1JSRUNUX1VTQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIGluY29ycmVjdCB1c2FnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9FWFRfS0VZX1VTQUdFX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBFeHQga2V5IHVzYWdlIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBBdXRoIGtleTogSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0FVVEhfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9BVVRIX0tFWV9JRF9LRVlfSURfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIEF1dGgga2V5OiBLZXkgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBrZXkgSUQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfS0VZX0lEX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGtleSBJRCBpbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9QUklWQVRFX0tFWV9VUF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogUHJpdmF0ZSBrZXkgVVAgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfUFJJVkFURV9LRVlfVVBfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFByaXZhdGUga2V5IFVQIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0lOQ09SUkVDVF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfU1VCSkVDVF9BTFRfTkFNRV9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogU3ViamVjdCBhbHQgbmFtZSBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX0VNUFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX1NVQkpFQ1RfQUxUX05BTUVfRE5fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBTdWJqZWN0IGFsdCBuYW1lIEROIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9TVUJKRUNUX0FMVF9OQU1FX0ROX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IFN1YmplY3QgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfTUlTU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGluY29ycmVjdCBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IElzc3VlciBhbHQgbmFtZSBETiBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9JU1NVRVJfQUxUX05BTUVfRE5fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9ETl9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBJc3N1ZXIgYWx0IG5hbWUgRE4gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBNaXNzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBJbmNvcnJlY3QgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogVmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0RPQ19UWVBFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBEb2MgdHlwZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfRE9DX1RZUEVfTElTVF9ET0NfVFlQRVNfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb24gRG9jIHR5cGUgbGlzdDogRG9jIHR5cGVzIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NFUlRfUE9MSUNJRVNfSU5DT1JSRUNUX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IERlcnQgcG9saWNpZXMgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ0VSVF9QT0xJQ0lFU19FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ2VydCBwb2xpY2llcyBlbXB0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DRVJUX1BPTElDSUVTX1BPTElDWV9JRF9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENlcnQgcG9saWNpZXMgcG9saWN5IElEIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DUkxfRElTVF9QT0lOVF9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfQ1JMX0RJU1RfUE9JTlRfRU1QVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENSTCBkaXN0IHBvaW50IGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0NSTF9ESVNUX1BPSU5UX1BPSU5UX01JU1NFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogQ1JMIGRpc3QgcG9pbnQgcG9pbnQgbWlzc2VkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogTERTIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ09NX0xEU19WRVJTSU9OX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IExEUyB2ZXJzaW9uIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fVU5JQ09ERV9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogVW5pY29kZSB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NPTV9VTklDT0RFX1ZFUlNJT05fTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogVW5pY29kZSB2ZXJzaW9uIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DT01fREdQTV9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBDT006IERHUE0gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ09NX0RHUE1fTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ09NX0RHUE1fVU5FWFBFQ1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIENPTTogREdQTSB1bmV4cGVjdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fVU5TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogTERTIHZlcnNpb24gdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19BUFBMSUNBVElPTl9VTklDT0RFX1ZFUlNJT05fVU5TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogVW5pY29kZSB2ZXJzaW9uIHVuc3VwcG9ydGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQVBQTElDQVRJT05fTERTX1ZFUlNJT05fSU5DT05TSVNURU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gYXBwbGljYXRpb246IExEUyB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0FQUExJQ0FUSU9OX1VOSUNPREVfVkVSU0lPTl9JTkNPTlNJU1RFTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBhcHBsaWNhdGlvbjogVW5pY29kZSB2ZXJzaW9uIGluY29uc2lzdGVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfT0lEX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVkIGRhdGE6IE9JRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FRF9EQVRBX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogVmVyc2lvbiBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19TSUdORURfREFUQV9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0RJR0VTVF9BTEdPUklUSE1TX0VNUFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gc2lnbmVkIGRhdGE6IERpZ2VzdCBhbGdvcml0aG1zIGVtcHR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fU0lHTkVEX0RBVEFfRElHRVNUX0FMR09SSVRITVNfVU5TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogRGlnZXN0IGFsZ29yaXRobXMgdW5zdXBwb3J0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19TSUdORURfREFUQV9TSUdORVJfSU5GT1NfTVVMVElQTEVfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBTaWduZXIgaW5mb3MgbXVsdGlwbGUgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19NSVNTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBzaWduZWQgZGF0YTogQ2VydGlmaWNhdGVzIG1pc3NlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX1NJR05FRF9EQVRBX0NFUlRJRklDQVRFU19FTVBUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDZXJ0aWZpY2F0ZXMgZW1wdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19TSUdORURfREFUQV9DUkxTX0lOQ09SUkVDVF9VU0FHRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIHNpZ25lZCBkYXRhOiBDUkxzIGluY29ycmVjdCB1c2FnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfSU5DT1JSRUNUX0NPTlRFTlRfT0lEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogSW5jb3JyZWN0IGNvbnRlbnQgT0lEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19OVU1CRVJfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgbnVtYmVyIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfREdfSEFTSF9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fTERTX09CSkVDVF9ER19IQVNIX0VYVFJBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gTERTIG9iamVjdDogREcgaGFzaCBleHRyYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0xEU19PQkpFQ1RfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBMRFMgb2JqZWN0OiBWZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX01BU1RFUl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gbWFzdGVyIGxpc3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfSU5DT1JSRUNUX0NIT0lDRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IFNJRCBpbmNvcnJlY3QgY2hvaWNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSURfRElHRVNUX0FMR09SSVRITV9OT1RfTElTVEVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU0lEIGRpZ2VzdCBhbGdvcml0aG0gbm90IGxpc3RlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTUVTU0FHRV9ESUdFU1RfQVRUUl9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTWVzc2FnZSBkaWdlc3QgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19NRVNTQUdFX0RJR0VTVF9BVFRSX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX01FU1NBR0VfRElHRVNUX0FUVFJfVmFsdWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBNZXNzYWdlIGRpZ2VzdCBhdHRyIHZhbHVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19DT05URU5UX1RZUEVfQVRUUl9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fQ09OVEVOVF9UWVBFX0FUVFJfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IENvbnRlbnQgdHlwZSBhdHRyIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX0NPTlRFTlRfVFlQRV9BVFRSX1ZBTFVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogQ29udGVudCB0eXBlIGF0dHIgdmFsdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVNOX1NJR05FUl9JTkZPX1NJR05JTkdfVElNRV9BVFRSX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19TSUdOSU5HX1RJTUVfQVRUUl9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogU2lnbmluZyB0aW1lIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fU0lHTklOR19USU1FX0FUVFJfVkFMVUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQVNOIHNpZ25lciBpbmZvOiBTaWduaW5nIHRpbWUgYXR0ciB2YWx1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1ZBTElESVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfUk9PVF9JU19OT1RfVFJVU1RFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSByb290IGlzIG5vdCB0cnVzdGVkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FVVEhfU0lHTkVSX0lORk9fQ0VSVElGSUNBVEVfQ0FOVF9GSU5EX0NTQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgY2Fubm90IGZpbmQgQ1NDQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JFVk9LRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcmV2b2tlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1NJR05BVFVSRV9JTlZBTElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHNpZ25hdHVyZSBpbnZhbGlkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1VOU1VQUE9SVEVEX0lNQUdFX0ZPUk1BVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb246IFVuc3VwcG9ydGVkIGltYWdlIGZvcm1hdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9DVU1FTlRfVFlQRV9VTktOT1dOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogRG9jdW1lbnQgdHlwZSB1bmtub3duXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9JU1NVSU5HX1NUQVRFX1NZTlRBWF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IElzc3Vpbmcgc3RhdGUgc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9OQU1FX0lTX1ZPSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYW1lIGlzIHZvaWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX05VTUJFUl9JTkNPUlJFQ1RfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOdW1iZXIgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9OQVRJT05BTElUWV9TWU5UQVhfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBOYXRpb25hbGl0eSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0RPQl9TWU5UQVhfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0Igc3ludGF4IGVycm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9ET0JfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0IgZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0RPQl9JTkNPUlJFQ1RfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gTVJaOiBET0IgaW5jb3JyZWN0IGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX01SWl9TRVhfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogU2V4IGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9FX1NZTlRBWF9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBzeW50YXggZXJyb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0RPRV9FUlJPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBlcnJvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfRE9FX0lOQ09SUkVDVF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IERPRSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX09QVElPTkFMX0RBVEFfSU5DT1JSRUNUX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogT3B0aW9uYWwgZGF0YSBpbmNvcnJlY3QgY2hlY2tzdW1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfTVJaX0lOQ09SUkVDVF9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBNUlo6IEluY29ycmVjdCBjaGVja3N1bVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19NUlpfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIE1SWjogSW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfRk9STUFUX09XTkVSX01JU1NJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IG93bmVyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfT1dORVJfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCBvd25lciBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEZvcm1hdCB0eXBlIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19GT1JNQVRfVFlQRV9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogRm9ybWF0IHR5cGUgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfVFlQRV9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogVHlwZSBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19TVUJfVFlQRV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IFN1YnR5cGUgbWlzc2luZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX1NVQl9UWVBFX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBTdWJ0eXBlIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9JTUFHRV9NSVNTSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBpbWFnZSBtaXNzaW5nXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0ZPUk1BVF9JRF9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIGZvcm1hdCBJRCBpbmNvcnJlY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfTEVOR1RIX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgZGF0YSBsZW5ndGggaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfR0VOREVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEdlbmRlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX0VZRV9DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBFeWUgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9IQUlSX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEhhaXIgQ29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1lBVzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFlhd1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfUElUQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBQaXRjaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19CSU9NRVRSSUNTX0JEQl9EQVRBX1BPU0VfQU5HTEVfUk9MTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCaW9tZXRyaWNzOiBCREIgRGF0YSBQb3NlIEFuZ2xlIFJvbGxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfWUFXOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIFBvc2UgQW5nbGUgVSBZYXdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9QT1NFX0FOR0xFX1VfUElUQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFBpdGNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfUE9TRV9BTkdMRV9VX1JPTEw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgUG9zZSBBbmdsZSBVIFJvbGxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQklPTUVUUklDU19CREJfREFUQV9GQUNFX0lNQUdFX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQmlvbWV0cmljczogQkRCIERhdGEgRmFjZSBJbWFnZSBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JJT01FVFJJQ1NfQkRCX0RBVEFfSU1BR0VfREFUQV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEJpb21ldHJpY3M6IEJEQiBEYXRhIEltYWdlIERhdGEgVHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9QQUNFX0lORk9fVU5TVVBQT1JURURfU1REX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBVbnN1cHBvcnRlZCBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9QQUNFX0lORk9fREVQUkVDQVRFRF9WRVJTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gRGVwcmVjYXRlZCBWZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1BBQ0VfRE9NQUlOX1BBUkFNU19VU0lOR19TVERfUkVGOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVXNpbmcgU3RkIFJlZlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9QQUNFX0RPTUFJTl9QQVJBTVNfVU5TVVBQT1JURURfQUxHT1JJVEhNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX0NBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQ0FfUFVCTElDX0tFWV9VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIFB1YmxpY0tleSBVbnN1cHBvcnRlZCBBbGdvcml0aG1cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQ0FfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgVW5zdXBwb3J0ZWQgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1RBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFRBIEluZm8gSW5jb3JyZWN0IFZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfVEFfSU5GT19GSUxFX0lEX0ZPUl9WRVJTSU9OMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBGaWxlIElEIEZvciBWZXJzaW9uIDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfRUlEX1NFQ1VSSVRZX1VOU1VQUE9SVEVEX0RJR0VTVF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBVbnN1cHBvcnRlZCBEaWdlc3QgQWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1JJX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGluZm8gaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfUklfRE9NQUlOX1BBUkFNU19VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFJJIGRvbWFpbiBwYXJhbXMgdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX0FBX0lORk9fSU5DT1JSRUNUX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfQUFfSU5GT19VTlNVUFBPUlRFRF9BTEdPUklUSE06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gdW5zdXBwb3J0ZWQgYWxnb3JpdGhtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX0FBX0lORk9fSU5DT05TSVNURU5UX0FMR09SSVRITV9SRUZFUkVOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IEFBIGluZm8gaW5jb25zaXN0ZW50IGFsZ29yaXRobSByZWZlcmVuY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUEFDRSBJbmZvIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9QQUNFX0lORk9fTk9fU1REX1BBUkFNRVRFUlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFBBQ0UgSW5mbyBObyBTdGQgUGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1BBQ0VfSU5GT19OT19NQVRDSElOR19ET01BSU5fUEFSQU1TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQQUNFIEluZm8gTm8gTWF0Y2hpbmcgRG9tYWluIFBhcmFtc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT19SRVFVSVJFRF9PUFRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIERvbWFpbiBQYXJhbXMgTm8gUmVxdWlyZWQgT3B0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FfRE9NQUlOX1BBUkFNU19OT1RfQVZBSUxBQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBEb21haW4gUGFyYW1zIE5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQV9BTk9OWU1PVVNfSU5GT1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEFub255bW91cyBJbmZvc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX0NBX0lORk9fTk9fTUFUQ0hJTkdfRE9NQUlOX1BBUkFNUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ0EgSW5mbyBObyBNYXRjaGluZyBEb21haW4gUGFyYW1zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FfSU5GT19OT19NQVRDSElOR19QVUJMSUNfS0VZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBDQSBJbmZvIE5vIE1hdGNoaW5nIFB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9DQV9JTkNPUlJFQ1RfSU5GT1NfUVVBTlRJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IENBIEluY29ycmVjdCBJbmZvcyBRdWFudGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1RBX0lORk9fTk9UX0FWQUlMQUJMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogVEEgSW5mbyBOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfQ0FSRF9JTkZPX0xPQ0FUT1JfTVVMVElQTEVfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogQ2FyZCBJbmZvIExvY2F0b3IgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX0VJRF9TRUNVUklUWV9JTkZPX01VTFRJUExFX0VOVFJJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IGVJRCBTZWN1cml0eSBJbmZvIE11bHRpcGxlIEVudHJpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfU0lfU1RPUkFHRV9QUklWSUxFR0VEX1RJX01VTFRJUExFX0VOVFJJRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gU0k6IFByaXZpbGVnZWQgVEkgTXVsdGlwbGUgRW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1BSSVZJTEVHRURfVElfSU5DT1JSRUNUX1VTQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFNJOiBQcml2aWxlZ2VkIFRJIEluY29ycmVjdCBVc2FnZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19TSV9TVE9SQUdFX1JJX0RPTUFJTl9QQVJBTVNfTVVMVElQTEVfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogUkkgZG9tYWluIHBhcmFtcyBtdWx0aXBsZSBlbnRyaWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX1NJX1NUT1JBR0VfUEFDRV9JTkZPU19OT05fQ09OU0lTVEFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBTSTogU3RvcmFnZSBQQUNFIEluZm8gTm9uIENvbnNpc3RhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfUFJPRklMRV9JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBDViBDZXJ0aWZpY2F0ZTogUHJvZmlsZSBpbmNvcnJlY3QgdmVyc2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBDViBDZXJ0aWZpY2F0ZTogVmFsaWRpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQ1ZfQ0VSVElGSUNBVEVfTk9OX0NWX0NBX0RPTUFJTl9QQVJBTUVURVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIENWIENlcnRpZmljYXRlOiBOb24gQ1ZDQSBkb21haW4gcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19DVl9DRVJUSUZJQ0FURV9QUklWQVRFX0tFWV9JTkNPUlJFQ1RfVkVSU0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBDViBDZXJ0aWZpY2F0ZTogUHJpdmF0ZSBrZXkgaW5jb3JyZWN0IHZlcnNpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfVEFfUEFDRV9TVEFUSUNfQklORElOR19VU0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIFRBOiBQQUNFIHN0YXRpYyBiaW5kaW5nIHVzZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX1JPT1RfSVNfTk9UX1RSVVNURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQXV0aCBNTCBzaWduZXIgaW5mbzogQ2VydGlmaWNhdGUgcm9vdCBpcyBub3QgdHJ1c3RlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BVVRIX01MX1NJR05FUl9JTkZPX0NFUlRJRklDQVRFX0NBTlRfRklORF9DU0NBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIGNhbm5vdCBmaW5kIENTQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9SRVZPS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEF1dGggTUwgc2lnbmVyIGluZm86IENlcnRpZmljYXRlIHJldm9rZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQVVUSF9NTF9TSUdORVJfSU5GT19DRVJUSUZJQ0FURV9TSUdOQVRVUkVfSU5WQUxJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBdXRoIE1MIHNpZ25lciBpbmZvOiBDZXJ0aWZpY2F0ZSBzaWduYXR1cmUgaW52YWxpZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVEX0RBVEFfQ09OVEVOVF9PSURfSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZWQgZGF0YTogQ29udGVudCBPSUQgaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0FTTl9TSUdORVJfSU5GT19MSVNUX0NPTlRFTlRfREVTQ1JJUFRJT05fQVRUUl9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIEFTTiBzaWduZXIgaW5mbzogTGlzdCBjb250ZW50IGRlc2NyaXB0aW9uIGF0dHIgZGF0YVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19BU05fU0lHTkVSX0lORk9fTElTVF9DT05URU5UX0RFU0NSSVBUSU9OX0FUVFJfTUlTU0lORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBBU04gc2lnbmVyIGluZm86IExpc3QgY29udGVudCBkZXNjcmlwdGlvbiBhdHRyIG1pc3NpbmdcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfQlNJX0JMQUNLX0xJU1RfVkVSU0lPTl9JTkNPUlJFQ1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gQlNJOiBCbGFjayBsaXN0IHZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0JTSV9ERUZFQ1RfTElTVF9WRVJTSU9OX0lOQ09SUkVDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBCU0k6IERlZmVjdCAgbGlzdCB2ZXJzaW9uIGluY29ycmVjdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9DU0NBX0FMVF9OQU1FU19OT05fTUFUQ0hJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZSBleHRlbnNpb246IENTQ0EgYWx0IG5hbWVzIG5vbi1tYXRjaGluZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9ET0NfVFlQRV9MSVNUX0NSSVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uIERvYyB0eXBlIGxpc3Q6IENyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0RPQ19UWVBFX0xJU1RfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbiBEb2MgdHlwZSBsaXN0OiBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX0lTU1VFUl9BTFRfTkFNRV9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogSXNzdWVyIGFsdCBuYW1lIGNyaXRpY2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfRVhUX05BTUVfQ0hBTkdFX0NSSVRJQ0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGUgZXh0ZW5zaW9uOiBOYW1lIGNoYW5nZSBjcml0aWNhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9OQU1FX0NIQU5HRV9JTkNPUlJFQ1RfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogTmFtZSBjaGFuZ2UgaW5jb3JyZWN0IGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9FWFRfTkFNRV9DSEFOR0VfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogTmFtZSBjaGFuZ2Ugbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX0VYVF9PUFRJT05BTF9DUklUSUNBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlIGV4dGVuc2lvbjogT3B0aW9uYWwgY3JpdGljYWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfQVRUUklCVVRFX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIGF0dHJpYnV0ZSBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfSVNTVUVSX1NOX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogSXNzdWVyIFNOIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9JU1NVRVJfU1VCSkVDVF9DT1VOVFJZX05PTl9NQVRDSElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBJc3N1ZXIgc3ViamVjdCBjb3VudHJ5IG5vbi1tYXRjaGluZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NOX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU04gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQVRUUklCVVRFX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBhdHRyaWJ1dGUgbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0NFUlRJRklDQVRFX1NVQkpFQ1RfQ09NTU9OX05BTUVfTk9OX0NPTVBMSUFOVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZmljYXRpb24gLSBJQ0FPIGNlcnRpZmljYXRlOiBTdWJqZWN0IGNvbW1vbiBuYW1lIG5vbi1jb21wbGlhbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5URl9MRFNfSUNBT19DRVJUSUZJQ0FURV9TVUJKRUNUX05PTl9DT01QTElBTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90aWZpY2F0aW9uIC0gSUNBTyBjZXJ0aWZpY2F0ZTogU3ViamVjdCBub24tY29tcGxpYW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5OVEZfTERTX0lDQU9fQ0VSVElGSUNBVEVfU1VCSkVDVF9TTl9OT05fQ09NUExJQU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gY2VydGlmaWNhdGU6IFN1YmplY3QgU04gbm9uLWNvbXBsaWFudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTlRGX0xEU19JQ0FPX0RFVklBVElPTl9MSVNUX1ZFUlNJT05fSU5DT1JSRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdGlmaWNhdGlvbiAtIElDQU8gRGV2aWF0aW9uIGxpc3Q6IFZlcnNpb24gaW5jb3JyZWN0XCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVJbWFnZVF1YWxpdHlDaGVja1R5cGUgPSB7XG4gICAgSVFDX0lNQUdFX0dMQVJFUzogMCxcbiAgICBJUUNfSU1BR0VfRk9DVVM6IDEsXG4gICAgSVFDX0lNQUdFX1JFU09MVVRJT046IDIsXG4gICAgSVFDX0lNQUdFX0NPTE9STkVTUzogMyxcbiAgICBJUUNfUEVSU1BFQ1RJVkU6IDQsXG4gICAgSVFDX0JPVU5EUzogNSxcbiAgICBJUUNfU0NSRUVOX0NBUFRVUkU6IDYsXG4gICAgSVFDX1BPUlRSQUlUOiA3LFxuICAgIElRQ19IQU5EV1JJVFRFTjogOCxcbn1cblxuZXhwb3J0IGNvbnN0IE1SWkZvcm1hdCA9IHtcbiAgICBGT1JNQVRfMVgzMDogXCIxeDMwXCIsXG4gICAgRk9STUFUXzNYMzA6IFwiM3gzMFwiLFxuICAgIEZPUk1BVF8yWDM2OiBcIjJ4MzZcIixcbiAgICBGT1JNQVRfMlg0NDogXCIyeDQ0XCIsXG4gICAgRk9STUFUXzFYNjogXCIxeDZcIixcbiAgICBGT1JNQVRfMlgzMDogXCIyeDMwXCIsXG59XG5cbmV4cG9ydCBjb25zdCBCYXJjb2RlVHlwZSA9IHtcbiAgICBVTktOT1dOOiAwLFxuICAgIEJDVF9DT0RFMTI4OiAxLFxuICAgIENPREUzOTogMixcbiAgICBFQU44OiAzLFxuICAgIElURjogNCxcbiAgICBQREY0MTc6IDUsXG4gICAgU1RGOiA2LFxuICAgIE1URjogNyxcbiAgICBJQVRBOiA4LFxuICAgIENPREFCQVI6IDksXG4gICAgVVBDQTogMTAsXG4gICAgQ09ERTkzOiAxMSxcbiAgICBVUENFOiAxMixcbiAgICBFQU4xMzogMTMsXG4gICAgUVJDT0RFOiAxNCxcbiAgICBBWlRFQzogMTUsXG4gICAgREFUQU1BVFJJWDogMTYsXG4gICAgQUxMXzFEOiAxNyxcbiAgICBDT0RFMTE6IDE4LFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fU2VjdXJpdHlGZWF0dXJlVHlwZSA9IHtcbiAgICBOT05FOiAtMSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfQkxBTks6IDAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZJTEw6IDEsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPOiAyLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9NUlo6IDMsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0ZBTFNFX0xVTUlORVNDRU5DRTogNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19TSU1QTEU6IDUsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0hPTE9fVkVSSUZZX1NUQVRJQzogNixcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfSE9MT19WRVJJRllfTVVMVElfU1RBVElDOiA3LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9IT0xPX1ZFUklGWV9ESU5BTUlDOiA4LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX05PVF9JTlRFUlJVUFRFRDogOSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9OT1RfU0hJRlRFRDogMTAsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BBVFRFUk5fU0FNRV9DT0xPUlM6IDExLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QQVRURVJOX0lSX0lOVklTSUJMRTogMTIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX1NJWkVfQ0hFQ0s6IDEzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1ZTX0dIT1NUOiAxNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19SRklEOiAxNSxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19WSVNVQUw6IDE2LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9CQVJDT0RFOiAxNyxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEFUVEVSTl9ESUZGRVJFTlRfTElORVNfVEhJQ0tORVNTOiAxOCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUE9SVFJBSVRfQ09NUEFSSVNPTl9WU19DQU1FUkE6IDE5LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QT1JUUkFJVF9DT01QQVJJU09OX1JGSURfVlNfQ0FNRVJBOiAyMCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfR0hPU1RfUEhPVE86IDIxLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9DTEVBUl9HSE9TVF9QSE9UTzogMjIsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX0lOVklTSUJMRV9PQkpFQ1Q6IDIzLFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9MT1dfQ09OVFJBU1RfT0JKRUNUOiAyNCxcbiAgICBTRUNVUklUWV9GRUFUVVJFX1RZUEVfUEhPVE9fQ09MT1I6IDI1LFxuICAgIFNFQ1VSSVRZX0ZFQVRVUkVfVFlQRV9QSE9UT19TSEFQRTogMjYsXG4gICAgU0VDVVJJVFlfRkVBVFVSRV9UWVBFX1BIT1RPX0NPUk5FUlM6IDI3LFxuICAgIERPQ1VNRU5UX0NBTkNFTExJTkdfREVURUNUT1I6IDI4LFxufVxuXG5leHBvcnQgY29uc3QgT25saW5lTW9kZSA9IHtcbiAgICBNQU5VQUw6IDAsXG4gICAgQVVUTzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1NES19Qcm9maWxlclR5cGUgPSB7XG4gICAgU1BUX0RPQ185MzAzX0VESVRJT05fMjAwNjogMHgwMDAwMDAwMSxcbiAgICBTUFRfRE9DXzkzMDNfTERTX1BLSV9NQUlOVEVOQU5DRTogMHgwMDAwMDAwMixcbn1cblxuZXhwb3J0IGNvbnN0IGRpRG9jVHlwZSA9IHtcbiAgICBkdE5vdERlZmluZWQ6IDAsXG4gICAgZHRQYXNzcG9ydDogMTEsXG4gICAgZHRJZGVudGl0eUNhcmQ6IDEyLFxuICAgIGR0RGlwbG9tYXRpY1Bhc3Nwb3J0OiAxMyxcbiAgICBkdFNlcnZpY2VQYXNzcG9ydDogMTQsXG4gICAgZHRTZWFtYW5JZGVudGl0eURvY3VtZW50OiAxNSxcbiAgICBkdElkZW50aXR5Q2FyZEZvclJlc2lkZW5jZTogMTYsXG4gICAgZHRUcmF2ZWxEb2N1bWVudDogMTcsXG4gICAgZHRPdGhlcjogOTksXG4gICAgZHRWaXNhSUQyOiAyOSxcbiAgICBkdFZpc2FJRDM6IDMwLFxuICAgIGR0UmVnaXN0cmF0aW9uQ2VydGlmaWNhdGU6IDIwNixcbiAgICBkdE5hdGlvbmFsSWRlbnRpdHlDYXJkOiAyMCxcbiAgICBkdFNvY2lhbElkZW50aXR5Q2FyZDogMjEsXG4gICAgZHRBbGllbnNJZGVudGl0eUNhcmQ6IDIyLFxuICAgIGR0UHJpdmlsZWdlZElkZW50aXR5Q2FyZDogMjMsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXRJZGVudGl0eUNhcmQ6IDI0LFxuICAgIGR0T3JpZ2luQ2FyZDogMjUsXG4gICAgZHRFbWVyZ2VuY3lQYXNzcG9ydDogMjYsXG4gICAgZHRBbGllbnNQYXNzcG9ydDogMjcsXG4gICAgZHRBbHRlcm5hdGl2ZUlkZW50aXR5Q2FyZDogMjgsXG4gICAgZHRBdXRob3JpemF0aW9uQ2FyZDogMzIsXG4gICAgZHRCZWdpbm5lclBlcm1pdDogMzMsXG4gICAgZHRCb3JkZXJDcm9zc2luZ0NhcmQ6IDM0LFxuICAgIGR0Q2hhdWZmZXVyTGljZW5zZTogMzUsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIxODogMzYsXG4gICAgZHRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogMzcsXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2U6IDM4LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdDogMzksXG4gICAgZHRDb21tZXJjaWFsRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA0MCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDQxLFxuICAgIGR0Q29tbWVyY2lhbEluc3RydWN0aW9uUGVybWl0OiA0MixcbiAgICBkdENvbW1lcmNpYWxOZXdQZXJtaXQ6IDQzLFxuICAgIGR0Q29uY2VhbGVkQ2FycnlMaWNlbnNlOiA0NCxcbiAgICBkdENvbmNlYWxlZEZpcmVhcm1QZXJtaXQ6IDQ1LFxuICAgIGR0Q29uZGl0aW9uYWxEcml2aW5nTGljZW5zZTogNDYsXG4gICAgZHREZXBhcnRtZW50T2ZWZXRlcmFuc0FmZmFpcnNJZGVudGl0eUNhcmQ6IDQ3LFxuICAgIGR0RGlwbG9tYXRpY0RyaXZpbmdMaWNlbnNlOiA0OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlOiA0OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdDogNTAsXG4gICAgZHREcml2aW5nTGljZW5zZUluc3RydWN0aW9uYWxQZXJtaXRVbmRlcjE4OiA1MSxcbiAgICBkdERyaXZpbmdMaWNlbnNlSW5zdHJ1Y3Rpb25hbFBlcm1pdFVuZGVyMjE6IDUyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VMZWFybmVyc1Blcm1pdDogNTMsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIxODogNTQsXG4gICAgZHREcml2aW5nTGljZW5zZUxlYXJuZXJzUGVybWl0VW5kZXIyMTogNTUsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZTogNTYsXG4gICAgZHREcml2aW5nTGljZW5zZU5vdmljZVVuZGVyMTg6IDU3LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VOb3ZpY2VVbmRlcjIxOiA1OCxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVnaXN0ZXJlZE9mZmVuZGVyOiA1OSxcbiAgICBkdERyaXZpbmdMaWNlbnNlUmVzdHJpY3RlZFVuZGVyMTg6IDYwLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VSZXN0cmljdGVkVW5kZXIyMTogNjEsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3I6IDYyLFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogNjMsXG4gICAgZHREcml2aW5nTGljZW5zZVRlbXBvcmFyeVZpc2l0b3JVbmRlcjIxOiA2NCxcbiAgICBkdERyaXZpbmdMaWNlbnNlVW5kZXIxODogNjUsXG4gICAgZHREcml2aW5nTGljZW5zZVVuZGVyMjE6IDY2LFxuICAgIGR0RW1wbG95bWVudERyaXZpbmdQZXJtaXQ6IDY3LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlOiA2OCxcbiAgICBkdEVuaGFuY2VkQ2hhdWZmZXVyTGljZW5zZVVuZGVyMTg6IDY5LFxuICAgIGR0RW5oYW5jZWRDaGF1ZmZldXJMaWNlbnNlVW5kZXIyMTogNzAsXG4gICAgZHRFbmhhbmNlZENvbW1lcmNpYWxEcml2aW5nTGljZW5zZTogNzEsXG4gICAgZHRFbmhhbmNlZERyaXZpbmdMaWNlbnNlOiA3MixcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA3MyxcbiAgICBkdEVuaGFuY2VkRHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiA3NCxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkOiA3NSxcbiAgICBkdEVuaGFuY2VkSWRlbnRpdHlDYXJkVW5kZXIxODogNzYsXG4gICAgZHRFbmhhbmNlZElkZW50aXR5Q2FyZFVuZGVyMjE6IDc3LFxuICAgIGR0RW5oYW5jZWRPcGVyYXRvcnNMaWNlbnNlOiA3OCxcbiAgICBkdEZpcmVhcm1zUGVybWl0OiA3OSxcbiAgICBkdEZ1bGxQcm92aXNpb25hbExpY2Vuc2U6IDgwLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMTg6IDgxLFxuICAgIGR0RnVsbFByb3Zpc2lvbmFsTGljZW5zZVVuZGVyMjE6IDgyLFxuICAgIGR0R2VuZXZhQ29udmVudGlvbnNJZGVudGl0eUNhcmQ6IDgzLFxuICAgIGR0R3JhZHVhdGVkRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiA4NCxcbiAgICBkdEdyYWR1YXRlZERyaXZpbmdMaWNlbnNlVW5kZXIyMTogODUsXG4gICAgZHRHcmFkdWF0ZWRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMTg6IDg2LFxuICAgIGR0R3JhZHVhdGVkSW5zdHJ1Y3Rpb25QZXJtaXRVbmRlcjIxOiA4NyxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjE4OiA4OCxcbiAgICBkdEdyYWR1YXRlZExpY2Vuc2VVbmRlcjIxOiA4OSxcbiAgICBkdEhhbmRndW5DYXJyeVBlcm1pdDogOTAsXG4gICAgZHRJZGVudGl0eUFuZFByaXZpbGVnZUNhcmQ6IDkxLFxuICAgIGR0SWRlbnRpdHlDYXJkTW9iaWxpdHlJbXBhaXJlZDogOTIsXG4gICAgZHRJZGVudGl0eUNhcmRSZWdpc3RlcmVkT2ZmZW5kZXI6IDkzLFxuICAgIGR0SWRlbnRpdHlDYXJkVGVtcG9yYXJ5VmlzaXRvcjogOTQsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIxODogOTUsXG4gICAgZHRJZGVudGl0eUNhcmRUZW1wb3JhcnlWaXNpdG9yVW5kZXIyMTogOTYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE4OiA5NyxcbiAgICBkdElkZW50aXR5Q2FyZFVuZGVyMjE6IDk4LFxuICAgIGR0SWduaXRpb25JbnRlcmxvY2tQZXJtaXQ6IDEwMCxcbiAgICBkdEltbWlncmFudFZpc2E6IDEwMSxcbiAgICBkdEluc3RydWN0aW9uUGVybWl0OiAxMDIsXG4gICAgZHRJbnN0cnVjdGlvblBlcm1pdFVuZGVyMTg6IDEwMyxcbiAgICBkdEluc3RydWN0aW9uUGVybWl0VW5kZXIyMTogMTA0LFxuICAgIGR0SW50ZXJpbURyaXZpbmdMaWNlbnNlOiAxMDUsXG4gICAgZHRJbnRlcmltSWRlbnRpdHlDYXJkOiAxMDYsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZTogMTA3LFxuICAgIGR0SW50ZXJtZWRpYXRlRHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxMDgsXG4gICAgZHRJbnRlcm1lZGlhdGVEcml2aW5nTGljZW5zZVVuZGVyMjE6IDEwOSxcbiAgICBkdEp1bmlvckRyaXZpbmdMaWNlbnNlOiAxMTAsXG4gICAgZHRMZWFybmVySW5zdHJ1Y3Rpb25hbFBlcm1pdDogMTExLFxuICAgIGR0TGVhcm5lckxpY2Vuc2U6IDExMixcbiAgICBkdExlYXJuZXJMaWNlbnNlVW5kZXIxODogMTEzLFxuICAgIGR0TGVhcm5lckxpY2Vuc2VVbmRlcjIxOiAxMTQsXG4gICAgZHRMZWFybmVyUGVybWl0OiAxMTUsXG4gICAgZHRMZWFybmVyUGVybWl0VW5kZXIxODogMTE2LFxuICAgIGR0TGVhcm5lclBlcm1pdFVuZGVyMjE6IDExNyxcbiAgICBkdExpbWl0ZWRMaWNlbnNlOiAxMTgsXG4gICAgZHRMaW1pdGVkUGVybWl0OiAxMTksXG4gICAgZHRMaW1pdGVkVGVybURyaXZpbmdMaWNlbnNlOiAxMjAsXG4gICAgZHRMaW1pdGVkVGVybUlkZW50aXR5Q2FyZDogMTIxLFxuICAgIGR0TGlxdW9ySWRlbnRpdHlDYXJkOiAxMjIsXG4gICAgZHROZXdQZXJtaXQ6IDEyMyxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMTg6IDEyNCxcbiAgICBkdE5ld1Blcm1pdFVuZGVyMjE6IDEyNSxcbiAgICBkdE5vblVzQ2l0aXplbkRyaXZpbmdMaWNlbnNlOiAxMjYsXG4gICAgZHRPY2N1cGF0aW9uYWxEcml2aW5nTGljZW5zZTogMTI3LFxuICAgIGR0T25laWRhVHJpYmVPZkluZGlhbnNJZGVudGl0eUNhcmQ6IDEyOCxcbiAgICBkdE9wZXJhdG9yTGljZW5zZTogMTI5LFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIxODogMTMwLFxuICAgIGR0T3BlcmF0b3JMaWNlbnNlVW5kZXIyMTogMTMxLFxuICAgIGR0UGVybWFuZW50RHJpdmluZ0xpY2Vuc2U6IDEzMixcbiAgICBkdFBlcm1pdFRvUmVFbnRlcjogMTMzLFxuICAgIGR0UHJvYmF0aW9uYXJ5QXV0b0xpY2Vuc2U6IDEzNCxcbiAgICBkdFByb2JhdGlvbmFyeURyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM1LFxuICAgIGR0UHJvYmF0aW9uYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjIxOiAxMzYsXG4gICAgZHRQcm9iYXRpb25hcnlWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxMzcsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlOiAxMzgsXG4gICAgZHRQcm92aXNpb25hbERyaXZpbmdMaWNlbnNlVW5kZXIxODogMTM5LFxuICAgIGR0UHJvdmlzaW9uYWxEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE0MCxcbiAgICBkdFByb3Zpc2lvbmFsTGljZW5zZTogMTQxLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIxODogMTQyLFxuICAgIGR0UHJvdmlzaW9uYWxMaWNlbnNlVW5kZXIyMTogMTQzLFxuICAgIGR0UHVibGljUGFzc2VuZ2VyQ2hhdWZmZXVyTGljZW5zZTogMTQ0LFxuICAgIGR0UmFjaW5nQW5kR2FtaW5nQ29taXNzaW9uQ2FyZDogMTQ1LFxuICAgIGR0UmVmdWdlZVRyYXZlbERvY3VtZW50OiAxNDYsXG4gICAgZHRSZW5ld2FsUGVybWl0OiAxNDcsXG4gICAgZHRSZXN0cmljdGVkQ29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAxNDgsXG4gICAgZHRSZXN0cmljdGVkRHJpdmluZ0xpY2Vuc2U6IDE0OSxcbiAgICBkdFJlc3RyaWN0ZWRQZXJtaXQ6IDE1MCxcbiAgICBkdFNlYXNvbmFsUGVybWl0OiAxNTEsXG4gICAgZHRTZWFzb25hbFJlc2lkZW50SWRlbnRpdHlDYXJkOiAxNTIsXG4gICAgZHRTZW5pb3JDaXRpemVuSWRlbnRpdHlDYXJkOiAxNTMsXG4gICAgZHRTZXhPZmZlbmRlcjogMTU0LFxuICAgIGR0U29jaWFsU2VjdXJpdHlDYXJkOiAxNTUsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZTogMTU2LFxuICAgIGR0VGVtcG9yYXJ5RHJpdmluZ0xpY2Vuc2VVbmRlcjE4OiAxNTcsXG4gICAgZHRUZW1wb3JhcnlEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE1OCxcbiAgICBkdFRlbXBvcmFyeUlkZW50aXR5Q2FyZDogMTU5LFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmQ6IDE2MCxcbiAgICBkdFRlbXBvcmFyeUluc3RydWN0aW9uUGVybWl0SWRlbnRpdHlDYXJkVW5kZXIxODogMTYxLFxuICAgIGR0VGVtcG9yYXJ5SW5zdHJ1Y3Rpb25QZXJtaXRJZGVudGl0eUNhcmRVbmRlcjIxOiAxNjIsXG4gICAgZHRUZW1wb3JhcnlWaXNpdG9yRHJpdmluZ0xpY2Vuc2U6IDE2MyxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMTg6IDE2NCxcbiAgICBkdFRlbXBvcmFyeVZpc2l0b3JEcml2aW5nTGljZW5zZVVuZGVyMjE6IDE2NSxcbiAgICBkdFVuaWZvcm1lZFNlcnZpY2VzSWRlbnRpdHlDYXJkOiAxNjYsXG4gICAgZHRWZWhpY2xlU2FsZXNwZXJzb25MaWNlbnNlOiAxNjcsXG4gICAgZHRXb3JrZXJJZGVudGlmaWNhdGlvbkNyZWRlbnRpYWw6IDE2OCxcbiAgICBkdENvbW1lcmNpYWxEcml2aW5nTGljZW5zZU5vdmljZTogMTY5LFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIxODogMTcwLFxuICAgIGR0Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlTm92aWNlVW5kZXIyMTogMTcxLFxuICAgIGR0UGFzc3BvcnRDYXJkOiAxNzIsXG4gICAgZHRQZXJtYW5lbnRSZXNpZGVudENhcmQ6IDE3MyxcbiAgICBkdFBlcnNvbmFsSWRlbnRpZmljYXRpb25WZXJpZmljYXRpb246IDE3NCxcbiAgICBkdFRlbXBvcmFyeU9wZXJhdG9yTGljZW5zZTogMTc1LFxuICAgIGR0RHJpdmluZ0xpY2Vuc2VVbmRlcjE5OiAxNzYsXG4gICAgZHRJZGVudGl0eUNhcmRVbmRlcjE5OiAxNzcsXG4gICAgZHRWaXNhOiAxNzgsXG4gICAgZHRUZW1wb3JhcnlQYXNzcG9ydDogMTc5LFxuICAgIGR0Vm90aW5nQ2FyZDogMTgwLFxuICAgIGR0SGVhbHRoQ2FyZDogMTgxLFxuICAgIGR0Q2VydGlmaWNhdGVPZkNpdGl6ZW5zaGlwOiAxODIsXG4gICAgZHRBZGRyZXNzQ2FyZDogMTgzLFxuICAgIGR0QWlycG9ydEltbWlncmF0aW9uQ2FyZDogMTg0LFxuICAgIGR0QWxpZW5SZWdpc3RyYXRpb25DYXJkOiAxODUsXG4gICAgZHRBUEVIQ2FyZDogMTg2LFxuICAgIGR0Q291cG9uVG9Ecml2aW5nTGljZW5zZTogMTg3LFxuICAgIGR0Q3Jld01lbWJlckNlcnRpZmljYXRlOiAxODgsXG4gICAgZHREb2N1bWVudEZvclJldHVybjogMTg5LFxuICAgIGR0RUNhcmQ6IDE5MCxcbiAgICBkdEVtcGxveW1lbnRDYXJkOiAxOTEsXG4gICAgZHRIS1NBUkltbWlncmF0aW9uRm9ybTogMTkyLFxuICAgIGR0SW1taWdyYW50Q2FyZDogMTkzLFxuICAgIGR0TGFib3VyQ2FyZDogMTk0LFxuICAgIGR0TGFpc3NlelBhc3NlcjogMTk1LFxuICAgIGR0TGF3eWVySWRlbnRpdHlDZXJ0aWZpY2F0ZTogMTk2LFxuICAgIGR0TGljZW5zZUNhcmQ6IDE5NyxcbiAgICBkdFBhc3Nwb3J0U3RhdGVsZXNzOiAxOTgsXG4gICAgZHRQYXNzcG9ydENoaWxkOiAxOTksXG4gICAgZHRQYXNzcG9ydENvbnN1bGFyOiAyMDAsXG4gICAgZHRQYXNzcG9ydERpcGxvbWF0aWNTZXJ2aWNlOiAyMDEsXG4gICAgZHRQYXNzcG9ydE9mZmljaWFsOiAyMDIsXG4gICAgZHRQYXNzcG9ydFByb3Zpc2lvbmFsOiAyMDMsXG4gICAgZHRQYXNzcG9ydFNwZWNpYWw6IDIwNCxcbiAgICBkdFBlcm1pc3Npb25Ub1RoZUxvY2FsQm9yZGVyVHJhZmZpYzogMjA1LFxuICAgIGR0U0VERVNPTENhcmQ6IDIwNyxcbiAgICBkdFNvY2lhbENhcmQ6IDIwOCxcbiAgICBkdFRCQ2FyZDogMjA5LFxuICAgIGR0VmVoaWNsZVBhc3Nwb3J0OiAyMTAsXG4gICAgZHRXRG9jdW1lbnQ6IDIxMSxcbiAgICBkdERpcGxvbWF0aWNJZGVudGl0eUNhcmQ6IDIxMixcbiAgICBkdENvbnN1bGFySWRlbnRpdHlDYXJkOiAyMTMsXG4gICAgZHRJbmNvbWVUYXhDYXJkOiAyMTQsXG4gICAgZHRSZXNpZGVuY2VQZXJtaXQ6IDIxNSxcbiAgICBkdERvY3VtZW50T2ZJZGVudGl0eTogMjE2LFxuICAgIGR0Qm9yZGVyQ3Jvc3NpbmdQZXJtaXQ6IDIxNyxcbiAgICBkdFBhc3Nwb3J0TGltaXRlZFZhbGlkaXR5OiAyMTgsXG4gICAgZHRTSU1DYXJkOiAyMTksXG4gICAgZHRUYXhDYXJkOiAyMjAsXG4gICAgZHRDb21wYW55Q2FyZDogMjIxLFxuICAgIGR0RG9tZXN0aWNQYXNzcG9ydDogMjIyLFxuICAgIGR0SWRlbnRpdHlDZXJ0aWZpY2F0ZTogMjIzLFxuICAgIGR0UmVzaWRlbnRJZENhcmQ6IDIyNCxcbiAgICBkdEFybWVkRm9yY2VzSWRlbnRpdHlDYXJkOiAyMjUsXG4gICAgZHRQcm9mZXNzaW9uYWxDYXJkOiAyMjYsXG4gICAgZHRSZWdpc3RyYXRpb25TdGFtcDogMjI3LFxuICAgIGR0RHJpdmVyQ2FyZDogMjI4LFxuICAgIGR0RHJpdmVyVHJhaW5pbmdDZXJ0aWZpY2F0ZTogMjI5LFxuICAgIGR0UXVhbGlmaWNhdGlvbkRyaXZpbmdMaWNlbnNlOiAyMzAsXG4gICAgZHRNZW1iZXJzaGlwQ2FyZDogMjMxLFxuICAgIGR0UHVibGljVmVoaWNsZURyaXZlckF1dGhvcml0eUNhcmQ6IDIzMixcbiAgICBkdE1hcmluZUxpY2Vuc2U6IDIzMyxcbiAgICBkdFRlbXBvcmFyeUxlYXJuZXJEcml2aW5nTGljZW5zZTogMjM0LFxuICAgIGR0VGVtcG9yYXJ5Q29tbWVyY2lhbERyaXZpbmdMaWNlbnNlOiAyMzUsXG4gICAgZHRJbnRlcmltSW5zdHJ1Y3Rpb25hbFBlcm1pdDogMjM2LFxuICAgIGR0Q2VydGlmaWNhdGVPZkNvbXBldGVuY3k6IDIzNyxcbiAgICBkdENlcnRpZmljYXRlT2ZQcm9maWNpZW5jeTogMjM4LFxuICAgIGR0VHJhZGVMaWNlbnNlOiAyMzksXG4gICAgZHRQYXNzcG9ydFBhZ2U6IDI0MCxcbiAgICBkdEludm9pY2U6IDI0MSxcbiAgICBkdFBhc3NlbmdlckxvY2F0b3JGb3JtOiAyNDIsXG59XG5cbmV4cG9ydCBjb25zdCBIb2xvQW5pbWF0aW9uVHlwZSA9IHtcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25Vbmtub3duOiAwLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVIb3Jpem9udGFsOiAxLFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVWZXJ0aWNhbDogMixcbiAgICBEb2N1bWVudEhvbG9BbmltYXRpb25UeXBlTGVmdEJvdHRvbVJpZ2h0VG9wOiA0LFxuICAgIERvY3VtZW50SG9sb0FuaW1hdGlvblR5cGVSaWdodEJvdHRvbUxlZnRUb3A6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBlUmVxdWVzdENvbW1hbmQgPSB7XG4gICAgZVJlcUNtZF9SRmlkX1NlbmREYXRhOiAxMDAsXG4gICAgZVJlcUNtZF9SRmlkX05vdGlmeTogMTAxLFxuICAgIGVSZXFDbWRfUkZpZF9HZXREYXRhRm9yU2NlbmFyaW86IDEwMixcbiAgICBlUmVxQ21kX1RvcmNoX0dldFVWRm90bzogMjAwLFxuICAgIGVSZXFDbWRfSW50ZXJuZXRTZW5kOiAzMDAsXG4gICAgZVJlcUNtZF9HZXRHdWlkOiA0MDAsXG4gICAgZVJlcUNtZF9XbHRUb0ltYWdlOiA0MDEsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZUZvcm1hdCA9IHtcbiAgICBQTkc6IDAsXG4gICAgSlBHOiAxLFxufVxuXG5leHBvcnQgY29uc3QgZUdyYXBoaWNGaWVsZFR5cGUgPSB7XG4gICAgR0ZfUE9SVFJBSVQ6IDIwMSxcbiAgICBHRl9GSU5HRVJQUjogMjAyLFxuICAgIEdGX0VZRTogMjAzLFxuICAgIEdGX1NJR05BVFVSRTogMjA0LFxuICAgIEdGX0JBUl9DT0RFOiAyMDUsXG4gICAgR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6IDIwNixcbiAgICBHRl9ET0NVTUVOVF9JTUFHRTogMjA3LFxuICAgIEdGX0NPTE9SX0RZTkFNSUM6IDIwOSxcbiAgICBHRl9HSE9TVF9QT1JUUkFJVDogMjEwLFxuICAgIEdGX1NUQU1QOiAyMTEsXG4gICAgR0ZfUE9SVFJBSVRfT0ZfQ0hJTEQ6IDIxMixcbiAgICBHRl9PVEhFUjogMjUwLFxuICAgIEdGX0ZJTkdFUl9MRUZUX1RIVU1COiAzMDAsXG4gICAgR0ZfRklOR0VSX0xFRlRfSU5ERVg6IDMwMSxcbiAgICBHRl9GSU5HRVJfTEVGVF9NSURETEU6IDMwMixcbiAgICBHRl9GSU5HRVJfTEVGVF9SSU5HOiAzMDMsXG4gICAgR0ZfRklOR0VSX0xFRlRfTElUVExFOiAzMDQsXG4gICAgR0ZfRklOR0VSX1JJR0hUX1RIVU1COiAzMDUsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0lOREVYOiAzMDYsXG4gICAgR0ZfRklOR0VSX1JJR0hUX01JRERMRTogMzA3LFxuICAgIEdGX0ZJTkdFUl9SSUdIVF9SSU5HOiAzMDgsXG4gICAgR0ZfRklOR0VSX1JJR0hUX0xJVFRMRTogMzA5LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUE9SVFJBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHJhaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUlBSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmdlcnByaW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9FWUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXJpc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU0lHTkFUVVJFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfQkFSX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFyY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfUFJPT0ZfT0ZfQ0lUSVpFTlNISVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJvb2Ygb2YgY2l0aXplbnNoaXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0RPQ1VNRU5UX0lNQUdFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IGltYWdlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9DT0xPUl9EWU5BTUlDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbG9yIGR5bmFtaWNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9HSE9TVF9QT1JUUkFJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaG9zdCBwb3J0cmFpdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfU1RBTVA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX1BPUlRSQUlUX09GX0NISUxEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvcnRyYWl0IG9mIGNoaWxkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9PVEhFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfVEhVTUI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCB0aHVtYlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCBpbmRleCBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX01JRERMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMZWZ0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9MRUZUX1JJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGVmdCByaW5nIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX0xFRlRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxlZnQgbGl0dGxlIGZpbmdlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0ZfRklOR0VSX1JJR0hUX1RIVU1COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHRodW1iXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfSU5ERVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmlnaHQgaW5kZXggZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTUlERExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IG1pZGRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdGX0ZJTkdFUl9SSUdIVF9SSU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IHJpbmcgZmluZ2VyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HRl9GSU5HRVJfUklHSFRfTElUVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJpZ2h0IGxpdHRsZSBmaW5nZXJcIlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhTW9kZSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENBTUVSQTE6IDEsXG4gICAgQ0FNRVJBMjogMixcbn1cblxuZXhwb3J0IGNvbnN0IENhcHR1cmVNb2RlID0ge1xuICAgIEFVVE86IDAsXG4gICAgQ0FQVFVSRV9WSURFTzogMSxcbiAgICBDQVBUVVJFX0ZSQU1FOiAyLFxufVxuXG5leHBvcnQgY29uc3QgZUNoZWNrUmVzdWx0ID0ge1xuICAgIENIX0NIRUNLX0VSUk9SOiAwLFxuICAgIENIX0NIRUNLX09LOiAxLFxuICAgIENIX0NIRUNLX1dBU19OT1RfRE9ORTogMixcbn1cblxuZXhwb3J0IGNvbnN0IGVSRklEX1Rlcm1pbmFsVHlwZSA9IHtcbiAgICBURVRfVU5ERUZJTkVEOiAwLFxuICAgIFRFVF9JTlNQRUNUSU9OX1NZU1RFTTogMSxcbiAgICBURVRfQVVUSEVOVElDQVRJT05fVEVSTUlOQUw6IDIsXG4gICAgVEVUX1NJR05BVFVSRV9URVJNSU5BTDogMyxcbiAgICBURVRfVU5BVVRIRU5USUNBVEVEX1RFUk1JTkFMOiA0LFxufVxuXG5leHBvcnQgY29uc3QgZVJGSURfRGF0YUZpbGVfVHlwZSA9IHtcbiAgICBERlRfVU5TUEVDSUZJRUQ6IDAsXG4gICAgREZUX1BBU1NQT1JUX0RHMTogMSxcbiAgICBERlRfUEFTU1BPUlRfREcyOiAyLFxuICAgIERGVF9QQVNTUE9SVF9ERzM6IDMsXG4gICAgREZUX1BBU1NQT1JUX0RHNDogNCxcbiAgICBERlRfUEFTU1BPUlRfREc1OiA1LFxuICAgIERGVF9QQVNTUE9SVF9ERzY6IDYsXG4gICAgREZUX1BBU1NQT1JUX0RHNzogNyxcbiAgICBERlRfUEFTU1BPUlRfREc4OiA4LFxuICAgIERGVF9QQVNTUE9SVF9ERzk6IDksXG4gICAgREZUX1BBU1NQT1JUX0RHMTA6IDEwLFxuICAgIERGVF9QQVNTUE9SVF9ERzExOiAxMSxcbiAgICBERlRfUEFTU1BPUlRfREcxMjogMTIsXG4gICAgREZUX1BBU1NQT1JUX0RHMTM6IDEzLFxuICAgIERGVF9QQVNTUE9SVF9ERzE0OiAxNCxcbiAgICBERlRfUEFTU1BPUlRfREcxNTogMTUsXG4gICAgREZUX1BBU1NQT1JUX0RHMTY6IDE2LFxuICAgIERGVF9QQVNTUE9SVF9ERzE3OiAxNyxcbiAgICBERlRfUEFTU1BPUlRfREcxODogMTgsXG4gICAgREZUX1BBU1NQT1JUX0RHMTk6IDE5LFxuICAgIERGVF9QQVNTUE9SVF9ERzIwOiAyMCxcbiAgICBERlRfUEFTU1BPUlRfU09EOiAyMSxcbiAgICBERlRfUEFTU1BPUlRfQ1ZDQTogMjIsXG4gICAgREZUX1BBU1NQT1JUX0NPTTogMjMsXG4gICAgREZUX0lEX0RHMTogMTAxLFxuICAgIERGVF9JRF9ERzI6IDEwMixcbiAgICBERlRfSURfREczOiAxMDMsXG4gICAgREZUX0lEX0RHNDogMTA0LFxuICAgIERGVF9JRF9ERzU6IDEwNSxcbiAgICBERlRfSURfREc2OiAxMDYsXG4gICAgREZUX0lEX0RHNzogMTA3LFxuICAgIERGVF9JRF9ERzg6IDEwOCxcbiAgICBERlRfSURfREc5OiAxMDksXG4gICAgREZUX0lEX0RHMTA6IDExMCxcbiAgICBERlRfSURfREcxMTogMTExLFxuICAgIERGVF9JRF9ERzEyOiAxMTIsXG4gICAgREZUX0lEX0RHMTM6IDExMyxcbiAgICBERlRfSURfREcxNDogMTE0LFxuICAgIERGVF9JRF9ERzE1OiAxMTUsXG4gICAgREZUX0lEX0RHMTY6IDExNixcbiAgICBERlRfSURfREcxNzogMTE3LFxuICAgIERGVF9JRF9ERzE4OiAxMTgsXG4gICAgREZUX0lEX0RHMTk6IDExOSxcbiAgICBERlRfSURfREcyMDogMTIwLFxuICAgIERGVF9JRF9ERzIxOiAxMjEsXG4gICAgREZUX0RMX0NPTTogMTUwLFxuICAgIERGVF9ETF9ERzE6IDE1MSxcbiAgICBERlRfRExfREcyOiAxNTIsXG4gICAgREZUX0RMX0RHMzogMTUzLFxuICAgIERGVF9ETF9ERzQ6IDE1NCxcbiAgICBERlRfRExfREc1OiAxNTUsXG4gICAgREZUX0RMX0RHNjogMTU2LFxuICAgIERGVF9ETF9ERzc6IDE1NyxcbiAgICBERlRfRExfREc4OiAxNTgsXG4gICAgREZUX0RMX0RHOTogMTU5LFxuICAgIERGVF9ETF9ERzEwOiAxNjAsXG4gICAgREZUX0RMX0RHMTE6IDE2MSxcbiAgICBERlRfRExfREcxMjogMTYyLFxuICAgIERGVF9ETF9ERzEzOiAxNjMsXG4gICAgREZUX0RMX0RHMTQ6IDE2NCxcbiAgICBERlRfRExfU09EOiAxNjUsXG4gICAgREZUX0RMX0NFOiAxNjYsXG4gICAgREZUX0RMX0NWQ0E6IDE2NyxcbiAgICBERlRfUEFDRV9DQVJEQUNDRVNTOiAyMDAsXG4gICAgREZUX1BBQ0VfQ0FSRFNFQ1VSSVRZOiAyMDEsXG4gICAgREZUX1BBQ0VfQ0hJUFNFQ1VSSVRZOiAyMDIsXG4gICAgREZUX01JRkFSRV9EQVRBOiAzMDAsXG4gICAgREZUX01JRkFSRV9WQUxJRElUWTogMzAxLFxuICAgIERGVF9BVVRIRU5USUNJVFlWMjogMzAyLFxuICAgIERGVF9BVFI6IDQwMCxcbiAgICBERlRfRVNJR05fUEs6IDUwMCxcbiAgICBERlRfRVNJR05fU0lHTkVEREFUQTogNTAxLFxuICAgIERGVF9DRVJUSUZJQ0FURTogNjAwLFxuICAgIERGVF9NQVNURVJMSVNUOiA2MDEsXG4gICAgREZUX0RFRkVDVExJU1Q6IDYwMixcbiAgICBERlRfREVWSUFUSU9OTElTVDogNjAzLFxuICAgIERGVF9BUFBfRElSRUNUT1JZOiA3MDAsXG4gICAgREZUX1NFU1NJT046IDcwMSxcbiAgICBERlRfTE9HREFUQTogNzAyLFxuICAgIERGVF9DSElQX1BST1BFUlRJRVM6IDcwMyxcbiAgICBERlRfU0FNX0RBVEE6IDgwMCxcbiAgICBERlRfU0FNX0RBVEFfTUFYOiA4MDAgKyAzMixcbiAgICBERlRfVkRTOiA5MDAsXG4gICAgREZUX1ZEU05DOiA5MDEsXG4gICAgREZUX1VTRVJERUZJTkVEOiAxMDAwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01JRkFSRV9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1JRkFSRSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfQ09NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNPTVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWNoaW5lIFJlYWRhYmxlIFpvbmUgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgdHlwZVwiICsgXCIgKERHMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGV4dCBkYXRhIGVsZW1lbnRzIChERzEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmFjaWFsIGRhdGEgKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZVwiICsgXCIgKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGljZW5zZSBob2xkZXIgaW5mb3JtYXRpb24gKERHMilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBGaW5nZXJwcmludChzKSAoREczKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiICsgXCIgKERHMylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgZGV0YWlscyAoREczKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIElyaXMgRGF0YSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHaXZlbiBuYW1lXCIgKyBcIiAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdCBpbWFnZSAoREc0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0cmFpdChzKSAoREc1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lL2dpdmVuIG5hbWUgYXQgYmlydGhcIiArIFwiIChERzUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZSAvIHVzdWFsIG1hcmsgaW1hZ2UgKERHNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHNilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCIgKyBcIiAoREc2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyeSAtIEZhY2lhbCBkYXRhIChERzYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNpZ25hdHVyZSAvIHVzdWFsIG1hcmsgaW1hZ2UgKERHNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNhZGVtaWMgdGl0bGVcIiArIFwiIChERzcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc3OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gRmluZ2VycHJpbnQocykgKERHNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aFwiICsgXCIgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ETF9ERzg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cnkgLSBJcmlzIERhdGEgKERHOClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgYmlydGhcIiArIFwiIChERzkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREc5OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJ5IC0gT3RoZXIgKERHOSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzEwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vdCBkZWZpbmVkIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTmF0aW9uYWxpdHlcIiArIFwiIChERzEwKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm90IGRlZmluZWQgKERHMTApXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZGRpdGlvbmFsIHBlcnNvbmFsIGRldGFpbChzKSAoREcxMSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzExOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNleFwiICsgXCIgKERHMTEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkb21lc3RpYyBkYXRhIChERzExKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWRkaXRpb25hbCBkb2N1bWVudCBkZXRhaWxzIChERzEyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3B0aW9uYWwgZGV0YWlsc1wiICsgXCIgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb24tbWF0Y2ggYWxlcnQgKERHMTIpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkZXRhaWwocykgKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzEzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0RHMTM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWN0aXZlIEF1dGhlbnRpY2F0aW9uIGluZm8gKERHMTMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuZGVmaW5lZFwiICsgXCIgKERHMTQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfRExfREcxNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFQUMgaW5mbyAoREcxNClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE1OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFjdGl2ZSBBdXRoZW50aWNhdGlvbiBpbmZvIChERzE1KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5kZWZpbmVkXCIgKyBcIiAoREcxNSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbihzKSB0byBub3RpZnkgKERHMTYpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmRlZmluZWRcIiArIFwiIChERzE2KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcxN1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGxhY2Ugb2YgcmVnaXN0cmF0aW9uXCIgKyBcIiAoREcxNylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9ERzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRHMThcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzE4OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiICsgXCIgKERHMTgpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFTU1BPUlRfREcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERzE5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfSURfREcxOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDFcIiArIFwiIChERzE5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX1BBU1NQT1JUX0RHMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREcyMFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0lEX0RHMjA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAyXCIgKyBcIiAoREcyMClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9JRF9ERzIxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRldGFpbHNcIiArIFwiIChERzIxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX1NPRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5TT0RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQVNTUE9SVF9DVkNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9NSUZBUkVfVkFMSURJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTUlGQVJFIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfUEFDRV9DQVJEQUNDRVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVGLkNhcmRBY2Nlc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NBUkRTRUNVUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DYXJkU2VjdXJpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9QQUNFX0NISVBTRUNVUklUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFRi5DaGlwU2VjdXJpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9DRVJUSUZJQ0FURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDZXJ0aWZpY2F0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0FQUF9ESVJFQ1RPUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwIGRpcmVjdG9yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0FUUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfQVRSXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfQ0hJUF9QUk9QRVJUSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9DSElQX1BST1BFUlRJRVNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9ERUZFQ1RMSVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ERUZFQ1RMSVNUXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfREVWSUFUSU9OTElTVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfREVWSUFUSU9OTElTVFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9ETF9DRVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX0RMX0NWQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX0RMX0NWQ0FcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9QSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfRVNJR05fUEtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9FU0lHTl9TSUdORUREQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9FU0lHTl9TSUdORUREQVRBXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfTE9HREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJERlRfTE9HREFUQVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREZUX01BU1RFUkxJU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX01BU1RFUkxJU1RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRGVF9TRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRGVF9TRVNTSU9OXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVU5TUEVDSUZJRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VOU1BFQ0lGSUVEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ERlRfVVNFUkRFRklORUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREZUX1VTRVJERUZJTkVEXCJcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVWaXN1YWxGaWVsZFR5cGUgPSB7XG4gICAgRlRfRE9DVU1FTlRfQ0xBU1NfQ09ERTogMCxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREU6IDEsXG4gICAgRlRfRE9DVU1FTlRfTlVNQkVSOiAyLFxuICAgIEZUX0RBVEVfT0ZfRVhQSVJZOiAzLFxuICAgIEZUX0RBVEVfT0ZfSVNTVUU6IDQsXG4gICAgRlRfREFURV9PRl9CSVJUSDogNSxcbiAgICBGVF9QTEFDRV9PRl9CSVJUSDogNixcbiAgICBGVF9QRVJTT05BTF9OVU1CRVI6IDcsXG4gICAgRlRfU1VSTkFNRTogOCxcbiAgICBGVF9HSVZFTl9OQU1FUzogOSxcbiAgICBGVF9NT1RIRVJTX05BTUU6IDEwLFxuICAgIEZUX05BVElPTkFMSVRZOiAxMSxcbiAgICBGVF9TRVg6IDEyLFxuICAgIEZUX0hFSUdIVDogMTMsXG4gICAgRlRfV0VJR0hUOiAxNCxcbiAgICBGVF9FWUVTX0NPTE9SOiAxNSxcbiAgICBGVF9IQUlSX0NPTE9SOiAxNixcbiAgICBGVF9BRERSRVNTOiAxNyxcbiAgICBGVF9ET05PUjogMTgsXG4gICAgRlRfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTksXG4gICAgRlRfRExfQ0xBU1M6IDIwLFxuICAgIEZUX0RMX0VORE9SU0VEOiAyMSxcbiAgICBGVF9ETF9SRVNUUklDVElPTl9DT0RFOiAyMixcbiAgICBGVF9ETF9VTkRFUl8yMV9EQVRFOiAyMyxcbiAgICBGVF9BVVRIT1JJVFk6IDI0LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAyNSxcbiAgICBGVF9OQVRJT05BTElUWV9DT0RFOiAyNixcbiAgICBGVF9QQVNTUE9SVF9OVU1CRVI6IDI3LFxuICAgIEZUX0lOVklUQVRJT05fTlVNQkVSOiAyOCxcbiAgICBGVF9WSVNBX0lEOiAyOSxcbiAgICBGVF9WSVNBX0NMQVNTOiAzMCxcbiAgICBGVF9WSVNBX1NVQl9DTEFTUzogMzEsXG4gICAgRlRfTVJaX1NUUklOR18xOiAzMixcbiAgICBGVF9NUlpfU1RSSU5HXzI6IDMzLFxuICAgIEZUX01SWl9TVFJJTkdfMzogMzQsXG4gICAgRlRfTVJaX1RZUEU6IDM1LFxuICAgIEZUX09QVElPTkFMX0RBVEE6IDM2LFxuICAgIEZUX0RPQ1VNRU5UX0NMQVNTX05BTUU6IDM3LFxuICAgIEZUX0lTU1VJTkdfU1RBVEVfTkFNRTogMzgsXG4gICAgRlRfUExBQ0VfT0ZfSVNTVUU6IDM5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS1NVTTogNDAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS1NVTTogNDEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tTVU06IDQyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS1NVTTogNDMsXG4gICAgRlRfRklOQUxfQ0hFQ0tTVU06IDQ0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS1NVTTogNDUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tTVU06IDQ2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tTVU06IDQ3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLU1VNOiA0OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLU1VNOiA0OSxcbiAgICBGVF9PVEhFUjogNTAsXG4gICAgRlRfTVJaX1NUUklOR1M6IDUxLFxuICAgIEZUX05BTUVfU1VGRklYOiA1MixcbiAgICBGVF9OQU1FX1BSRUZJWDogNTMsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS1NVTTogNTQsXG4gICAgRlRfREFURV9PRl9JU1NVRV9DSEVDS19ESUdJVDogNTUsXG4gICAgRlRfRE9DVU1FTlRfU0VSSUVTOiA1NixcbiAgICBGVF9SRUdfQ0VSVF9SRUdfTlVNQkVSOiA1NyxcbiAgICBGVF9SRUdfQ0VSVF9DQVJfTU9ERUw6IDU4LFxuICAgIEZUX1JFR19DRVJUX0NBUl9DT0xPUjogNTksXG4gICAgRlRfUkVHX0NFUlRfQk9EWV9OVU1CRVI6IDYwLFxuICAgIEZUX1JFR19DRVJUX0NBUl9UWVBFOiA2MSxcbiAgICBGVF9SRUdfQ0VSVF9NQVhfV0VJR0hUOiA2MixcbiAgICBGVF9SRUdfQ0VSVF9XRUlHSFQ6IDYzLFxuICAgIEZUX0FERFJFU1NfQVJFQTogNjQsXG4gICAgRlRfQUREUkVTU19TVEFURTogNjUsXG4gICAgRlRfQUREUkVTU19CVUlMRElORzogNjYsXG4gICAgRlRfQUREUkVTU19IT1VTRTogNjcsXG4gICAgRlRfQUREUkVTU19GTEFUOiA2OCxcbiAgICBGVF9QTEFDRV9PRl9SRUdJU1RSQVRJT046IDY5LFxuICAgIEZUX0RBVEVfT0ZfUkVHSVNUUkFUSU9OOiA3MCxcbiAgICBGVF9SRVNJREVOVF9GUk9NOiA3MSxcbiAgICBGVF9SRVNJREVOVF9VTlRJTDogNzIsXG4gICAgRlRfQVVUSE9SSVRZX0NPREU6IDczLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX0FSRUE6IDc0LFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1NUQVRFX0NPREU6IDc1LFxuICAgIEZUX0FERFJFU1NfU1RSRUVUOiA3NixcbiAgICBGVF9BRERSRVNTX0NJVFk6IDc3LFxuICAgIEZUX0FERFJFU1NfSlVSSVNESUNUSU9OX0NPREU6IDc4LFxuICAgIEZUX0FERFJFU1NfUE9TVEFMX0NPREU6IDc5LFxuICAgIEZUX0RPQ1VNRU5UX05VTUJFUl9DSEVDS19ESUdJVDogODAsXG4gICAgRlRfREFURV9PRl9CSVJUSF9DSEVDS19ESUdJVDogODEsXG4gICAgRlRfREFURV9PRl9FWFBJUllfQ0hFQ0tfRElHSVQ6IDgyLFxuICAgIEZUX1BFUlNPTkFMX05VTUJFUl9DSEVDS19ESUdJVDogODMsXG4gICAgRlRfRklOQUxfQ0hFQ0tfRElHSVQ6IDg0LFxuICAgIEZUX1BBU1NQT1JUX05VTUJFUl9DSEVDS19ESUdJVDogODUsXG4gICAgRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDg2LFxuICAgIEZUX1ZJU0FfSURfQ0hFQ0tfRElHSVQ6IDg3LFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX0NIRUNLX0RJR0lUOiA4OCxcbiAgICBGVF9WSVNBX1ZBTElEX1VOVElMX0NIRUNLX0RJR0lUOiA4OSxcbiAgICBGVF9QRVJNSVRfRExfQ0xBU1M6IDkwLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0VYUElSWTogOTEsXG4gICAgRlRfUEVSTUlUX0lERU5USUZJRVI6IDkyLFxuICAgIEZUX1BFUk1JVF9EQVRFX09GX0lTU1VFOiA5MyxcbiAgICBGVF9QRVJNSVRfUkVTVFJJQ1RJT05fQ09ERTogOTQsXG4gICAgRlRfUEVSTUlUX0VORE9SU0VEOiA5NSxcbiAgICBGVF9JU1NVRV9USU1FU1RBTVA6IDk2LFxuICAgIEZUX05VTUJFUl9PRl9EVVBMSUNBVEVTOiA5NyxcbiAgICBGVF9NRURJQ0FMX0lORElDQVRPUl9DT0RFUzogOTgsXG4gICAgRlRfTk9OX1JFU0lERU5UX0lORElDQVRPUjogOTksXG4gICAgRlRfVklTQV9UWVBFOiAxMDAsXG4gICAgRlRfVklTQV9WQUxJRF9GUk9NOiAxMDEsXG4gICAgRlRfVklTQV9WQUxJRF9VTlRJTDogMTAyLFxuICAgIEZUX0RVUkFUSU9OX09GX1NUQVk6IDEwMyxcbiAgICBGVF9OVU1CRVJfT0ZfRU5UUklFUzogMTA0LFxuICAgIEZUX0RBWTogMTA1LFxuICAgIEZUX01PTlRIOiAxMDYsXG4gICAgRlRfWUVBUjogMTA3LFxuICAgIEZUX1VOSVFVRV9DVVNUT01FUl9JREVOVElGSUVSOiAxMDgsXG4gICAgRlRfQ09NTUVSQ0lBTF9WRUhJQ0xFX0NPREVTOiAxMDksXG4gICAgRlRfQUtBX0RBVEVfT0ZfQklSVEg6IDExMCxcbiAgICBGVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjogMTExLFxuICAgIEZUX0FLQV9TVVJOQU1FOiAxMTIsXG4gICAgRlRfQUtBX0dJVkVOX05BTUVTOiAxMTMsXG4gICAgRlRfQUtBX05BTUVfU1VGRklYOiAxMTQsXG4gICAgRlRfQUtBX05BTUVfUFJFRklYOiAxMTUsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1NUUkVFVDogMTE2LFxuICAgIEZUX01BSUxJTkdfQUREUkVTU19DSVRZOiAxMTcsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX0pVUklTRElDVElPTl9DT0RFOiAxMTgsXG4gICAgRlRfTUFJTElOR19BRERSRVNTX1BPU1RBTF9DT0RFOiAxMTksXG4gICAgRlRfQVVESVRfSU5GT1JNQVRJT046IDEyMCxcbiAgICBGVF9JTlZFTlRPUllfTlVNQkVSOiAxMjEsXG4gICAgRlRfUkFDRV9FVEhOSUNJVFk6IDEyMixcbiAgICBGVF9KVVJJU0RJQ1RJT05fVkVISUNMRV9DTEFTUzogMTIzLFxuICAgIEZUX0pVUklTRElDVElPTl9FTkRPUlNFTUVOVF9DT0RFOiAxMjQsXG4gICAgRlRfSlVSSVNESUNUSU9OX1JFU1RSSUNUSU9OX0NPREU6IDEyNSxcbiAgICBGVF9GQU1JTFlfTkFNRTogMTI2LFxuICAgIEZUX0dJVkVOX05BTUVTX1JVUzogMTI3LFxuICAgIEZUX1ZJU0FfSURfUlVTOiAxMjgsXG4gICAgRlRfRkFUSEVSU19OQU1FOiAxMjksXG4gICAgRlRfRkFUSEVSU19OQU1FX1JVUzogMTMwLFxuICAgIEZUX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTX1JVUzogMTMxLFxuICAgIEZUX1BMQUNFX09GX0JJUlRIX1JVUzogMTMyLFxuICAgIEZUX0FVVEhPUklUWV9SVVM6IDEzMyxcbiAgICBGVF9JU1NVSU5HX1NUQVRFX0NPREVfTlVNRVJJQzogMTM0LFxuICAgIEZUX05BVElPTkFMSVRZX0NPREVfTlVNRVJJQzogMTM1LFxuICAgIEZUX0VOR0lORV9QT1dFUjogMTM2LFxuICAgIEZUX0VOR0lORV9WT0xVTUU6IDEzNyxcbiAgICBGVF9DSEFTU0lTX05VTUJFUjogMTM4LFxuICAgIEZUX0VOR0lORV9OVU1CRVI6IDEzOSxcbiAgICBGVF9FTkdJTkVfTU9ERUw6IDE0MCxcbiAgICBGVF9WRUhJQ0xFX0NBVEVHT1JZOiAxNDEsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVI6IDE0MixcbiAgICBGVF9DT05UUk9MX05POiAxNDMsXG4gICAgRlRfUEFSUkVOVFNfR0lWRU5fTkFNRVM6IDE0NCxcbiAgICBGVF9TRUNPTkRfU1VSTkFNRTogMTQ1LFxuICAgIEZUX01JRERMRV9OQU1FOiAxNDYsXG4gICAgRlRfUkVHX0NFUlRfVklOOiAxNDcsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLX0RJR0lUOiAxNDgsXG4gICAgRlRfUkVHX0NFUlRfVklOX0NIRUNLU1VNOiAxNDksXG4gICAgRlRfTElORV8xX0NIRUNLX0RJR0lUOiAxNTAsXG4gICAgRlRfTElORV8yX0NIRUNLX0RJR0lUOiAxNTEsXG4gICAgRlRfTElORV8zX0NIRUNLX0RJR0lUOiAxNTIsXG4gICAgRlRfTElORV8xX0NIRUNLU1VNOiAxNTMsXG4gICAgRlRfTElORV8yX0NIRUNLU1VNOiAxNTQsXG4gICAgRlRfTElORV8zX0NIRUNLU1VNOiAxNTUsXG4gICAgRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS19ESUdJVDogMTU2LFxuICAgIEZUX1JFR19DRVJUX1JFR19OVU1CRVJfQ0hFQ0tTVU06IDE1NyxcbiAgICBGVF9SRUdfQ0VSVF9WRUhJQ0xFX0lUU19DT0RFOiAxNTgsXG4gICAgRlRfQ0FSRF9BQ0NFU1NfTlVNQkVSOiAxNTksXG4gICAgRlRfTUFSSVRBTF9TVEFUVVM6IDE2MCxcbiAgICBGVF9DT01QQU5ZX05BTUU6IDE2MSxcbiAgICBGVF9TUEVDSUFMX05PVEVTOiAxNjIsXG4gICAgRlRfU1VSTkFNRV9PRl9TUE9TRTogMTYzLFxuICAgIEZUX1RSQUNLSU5HX05VTUJFUjogMTY0LFxuICAgIEZUX0JPT0tMRVRfTlVNQkVSOiAxNjUsXG4gICAgRlRfQ0hJTERSRU46IDE2NixcbiAgICBGVF9DT1BZOiAxNjcsXG4gICAgRlRfU0VSSUFMX05VTUJFUjogMTY4LFxuICAgIEZUX0RPU1NJRVJfTlVNQkVSOiAxNjksXG4gICAgRlRfQUtBX1NVUk5BTUVfQU5EX0dJVkVOX05BTUVTOiAxNzAsXG4gICAgRlRfVEVSUklUT1JJQUxfVkFMSURJVFk6IDE3MSxcbiAgICBGVF9NUlpfU1RSSU5HU19XSVRIX0NPUlJFQ1RfQ0hFQ0tfU1VNUzogMTcyLFxuICAgIEZUX0RMX0NETF9SRVNUUklDVElPTl9DT0RFOiAxNzMsXG4gICAgRlRfRExfVU5ERVJfMThfREFURTogMTc0LFxuICAgIEZUX0RMX1JFQ09SRF9DUkVBVEVEOiAxNzUsXG4gICAgRlRfRExfRFVQTElDQVRFX0RBVEU6IDE3NixcbiAgICBGVF9ETF9JU1NfVFlQRTogMTc3LFxuICAgIEZUX01JTElUQVJZX0JPT0tfTlVNQkVSOiAxNzgsXG4gICAgRlRfREVTVElOQVRJT046IDE3OSxcbiAgICBGVF9CTE9PRF9HUk9VUDogMTgwLFxuICAgIEZUX1NFUVVFTkNFX05VTUJFUjogMTgxLFxuICAgIEZUX1JFR19DRVJUX0JPRFlfVFlQRTogMTgyLFxuICAgIEZUX1JFR19DRVJUX0NBUl9NQVJLOiAxODMsXG4gICAgRlRfVFJBTlNBQ1RJT05fTlVNQkVSOiAxODQsXG4gICAgRlRfQUdFOiAxODUsXG4gICAgRlRfRk9MSU9fTlVNQkVSOiAxODYsXG4gICAgRlRfVk9URVJfS0VZOiAxODcsXG4gICAgRlRfQUREUkVTU19NVU5JQ0lQQUxJVFk6IDE4OCxcbiAgICBGVF9BRERSRVNTX0xPQ0FUSU9OOiAxODksXG4gICAgRlRfU0VDVElPTjogMTkwLFxuICAgIEZUX09DUl9OVU1CRVI6IDE5MSxcbiAgICBGVF9GRURFUkFMX0VMRUNUSU9OUzogMTkyLFxuICAgIEZUX1JFRkVSRU5DRV9OVU1CRVI6IDE5MyxcbiAgICBGVF9PUFRJT05BTF9EQVRBX0NIRUNLU1VNOiAxOTQsXG4gICAgRlRfT1BUSU9OQUxfREFUQV9DSEVDS19ESUdJVDogMTk1LFxuICAgIEZUX1ZJU0FfTlVNQkVSOiAxOTYsXG4gICAgRlRfVklTQV9OVU1CRVJfQ0hFQ0tTVU06IDE5NyxcbiAgICBGVF9WSVNBX05VTUJFUl9DSEVDS19ESUdJVDogMTk4LFxuICAgIEZUX1ZPVEVSOiAxOTksXG4gICAgRlRfUFJFVklPVVNfVFlQRTogMjAwLFxuICAgIEZUX0ZJRUxEX0ZST01fTVJaOiAyMjAsXG4gICAgRlRfQ1VSUkVOVF9EQVRFOiAyMjEsXG4gICAgRlRfU1RBVFVTX0RBVEVfT0ZfRVhQSVJZOiAyNTEsXG4gICAgRlRfQkFOS05PVEVfTlVNQkVSOiAyNTIsXG4gICAgRlRfQ1NDX0NPREU6IDI1MyxcbiAgICBGVF9BUlRJU1RJQ19OQU1FOiAyNTQsXG4gICAgRlRfQUNBREVNSUNfVElUTEU6IDI1NSxcbiAgICBGVF9BRERSRVNTX0NPVU5UUlk6IDI1NixcbiAgICBGVF9BRERSRVNTX1pJUENPREU6IDI1NyxcbiAgICBGVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMTogMjU4LFxuICAgIEZUX0VfSURfUkVTSURFTkNFX1BFUk1JVF8yOiAyNTksXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVFJFRVQ6IDI2MCxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX0NJVFk6IDI2MSxcbiAgICBGVF9FX0lEX1BMQUNFX09GX0JJUlRIX1NUQVRFOiAyNjIsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9DT1VOVFJZOiAyNjMsXG4gICAgRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9aSVBDT0RFOiAyNjQsXG4gICAgRlRfQ0RMX0NMQVNTOiAyNjUsXG4gICAgRlRfRExfVU5ERVJfMTlfREFURTogMjY2LFxuICAgIEZUX1dFSUdIVF9QT1VORFM6IDI2NyxcbiAgICBGVF9MSU1JVEVEX0RVUkFUSU9OX0RPQ1VNRU5UX0lORElDQVRPUjogMjY4LFxuICAgIEZUX0VORE9SU0VNRU5UX0VYUElSQVRJT05fREFURTogMjY5LFxuICAgIEZUX1JFVklTSU9OX0RBVEU6IDI3MCxcbiAgICBGVF9DT01QTElBTkNFX1RZUEU6IDI3MSxcbiAgICBGVF9GQU1JTFlfTkFNRV9UUlVOQ0FUSU9OOiAyNzIsXG4gICAgRlRfRklSU1RfTkFNRV9UUlVOQ0FUSU9OOiAyNzMsXG4gICAgRlRfTUlERExFX05BTUVfVFJVTkNBVElPTjogMjc0LFxuICAgIEZUX0VYQU1fREFURTogMjc1LFxuICAgIEZUX09SR0FOSVpBVElPTjogMjc2LFxuICAgIEZUX0RFUEFSVE1FTlQ6IDI3NyxcbiAgICBGVF9QQVlfR1JBREU6IDI3OCxcbiAgICBGVF9SQU5LOiAyNzksXG4gICAgRlRfQkVORUZJVFNfTlVNQkVSOiAyODAsXG4gICAgRlRfU1BPTlNPUl9TRVJWSUNFOiAyODEsXG4gICAgRlRfU1BPTlNPUl9TVEFUVVM6IDI4MixcbiAgICBGVF9TUE9OU09SOiAyODMsXG4gICAgRlRfUkVMQVRJT05TSElQOiAyODQsXG4gICAgRlRfVVNDSVM6IDI4NSxcbiAgICBGVF9DQVRFR09SWTogMjg2LFxuICAgIEZUX0NPTkRJVElPTlM6IDI4NyxcbiAgICBGVF9JREVOVElGSUVSOiAyODgsXG4gICAgRlRfQ09ORklHVVJBVElPTjogMjg5LFxuICAgIEZUX0RJU0NSRVRJT05BUllfREFUQTogMjkwLFxuICAgIEZUX0xJTkVfMV9PUFRJT05BTF9EQVRBOiAyOTEsXG4gICAgRlRfTElORV8yX09QVElPTkFMX0RBVEE6IDI5MixcbiAgICBGVF9MSU5FXzNfT1BUSU9OQUxfREFUQTogMjkzLFxuICAgIEZUX0VRVl9DT0RFOiAyOTQsXG4gICAgRlRfQUxUX0NPREU6IDI5NSxcbiAgICBGVF9CSU5BUllfQ09ERTogMjk2LFxuICAgIEZUX1BTRVVET19DT0RFOiAyOTcsXG4gICAgRlRfRkVFOiAyOTgsXG4gICAgRlRfU1RBTVBfTlVNQkVSOiAyOTksXG4gICAgRlRfU0JIX1NFQ1VSSVRZT1BUSU9OUzogMzAwLFxuICAgIEZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOiAzMDEsXG4gICAgRlRfREFURV9PRl9DUkVBVElPTjogMzAyLFxuICAgIEZUX1ZBTElESVRZX1BFUklPRDogMzAzLFxuICAgIEZUX1BBVFJPTl9IRUFERVJfVkVSU0lPTjogMzA0LFxuICAgIEZUX0JEQl9UWVBFOiAzMDUsXG4gICAgRlRfQklPTUVUUklDX1RZUEU6IDMwNixcbiAgICBGVF9CSU9NRVRSSUNfU1VCVFlQRTogMzA3LFxuICAgIEZUX0JJT01FVFJJQ19QUk9EVUNUSUQ6IDMwOCxcbiAgICBGVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOiAzMDksXG4gICAgRlRfQklPTUVUUklDX0ZPUk1BVF9UWVBFOiAzMTAsXG4gICAgRlRfUEhPTkU6IDMxMSxcbiAgICBGVF9QUk9GRVNTSU9OOiAzMTIsXG4gICAgRlRfVElUTEU6IDMxMyxcbiAgICBGVF9QRVJTT05BTF9TVU1NQVJZOiAzMTQsXG4gICAgRlRfT1RIRVJfVkFMSURfSUQ6IDMxNSxcbiAgICBGVF9DVVNUT0RZX0lORk86IDMxNixcbiAgICBGVF9PVEhFUl9OQU1FOiAzMTcsXG4gICAgRlRfT0JTRVJWQVRJT05TOiAzMTgsXG4gICAgRlRfVEFYOiAzMTksXG4gICAgRlRfREFURV9PRl9QRVJTT05BTElaQVRJT046IDMyMCxcbiAgICBGVF9QRVJTT05BTElaQVRJT05fU046IDMyMSxcbiAgICBGVF9PVEhFUlBFUlNPTl9OQU1FOiAzMjIsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfREFURV9PRl9SRUNPUkQ6IDMyMyxcbiAgICBGVF9QRVJTT05UT05PVElGWV9OQU1FOiAzMjQsXG4gICAgRlRfUEVSU09OVE9OT1RJRllfUEhPTkU6IDMyNSxcbiAgICBGVF9QRVJTT05UT05PVElGWV9BRERSRVNTOiAzMjYsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfSVNTVUVSOiAzMjcsXG4gICAgRlRfRFNfQ0VSVElGSUNBVEVfU1VCSkVDVDogMzI4LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTogMzI5LFxuICAgIEZUX0RTX0NFUlRJRklDQVRFX1ZBTElEVE86IDMzMCxcbiAgICBGVF9WUkNfREFUQU9CSkVDVF9FTlRSWTogMzMxLFxuICAgIEZUX1RZUEVfQVBQUk9WQUxfTlVNQkVSOiAzMzIsXG4gICAgRlRfQURNSU5JU1RSQVRJVkVfTlVNQkVSOiAzMzMsXG4gICAgRlRfRE9DVU1FTlRfRElTQ1JJTUlOQVRPUjogMzM0LFxuICAgIEZUX0RBVEFfRElTQ1JJTUlOQVRPUjogMzM1LFxuICAgIEZUX0lTT19JU1NVRVJfSURfTlVNQkVSOiAzMzYsXG4gICAgRlRfR05JQl9OVU1CRVI6IDM0MCxcbiAgICBGVF9ERVBUX05VTUJFUjogMzQxLFxuICAgIEZUX1RFTEVYX0NPREU6IDM0MixcbiAgICBGVF9BTExFUkdJRVM6IDM0MyxcbiAgICBGVF9TUF9DT0RFOiAzNDQsXG4gICAgRlRfQ09VUlRfQ09ERTogMzQ1LFxuICAgIEZUX0NUWTogMzQ2LFxuICAgIEZUX1NQT05TT1JfU1NOOiAzNDcsXG4gICAgRlRfRE9fRF9OVU1CRVI6IDM0OCxcbiAgICBGVF9NQ19OT1ZJQ0VfREFURTogMzQ5LFxuICAgIEZUX0RVRl9OVU1CRVI6IDM1MCxcbiAgICBGVF9BR1k6IDM1MSxcbiAgICBGVF9QTlJfQ09ERTogMzUyLFxuICAgIEZUX0ZST01fQUlSUE9SVF9DT0RFOiAzNTMsXG4gICAgRlRfVE9fQUlSUE9SVF9DT0RFOiAzNTQsXG4gICAgRlRfRkxJR0hUX05VTUJFUjogMzU1LFxuICAgIEZUX0RBVEVfT0ZfRkxJR0hUOiAzNTYsXG4gICAgRlRfU0VBVF9OVU1CRVI6IDM1NyxcbiAgICBGVF9EQVRFX09GX0lTU1VFX0JPQVJESU5HX1BBU1M6IDM1OCxcbiAgICBGVF9DQ1dfVU5USUw6IDM1OSxcbiAgICBGVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLU1VNOiAzNjAsXG4gICAgRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS19ESUdJVDogMzYxLFxuICAgIEZUX1JPT01fTlVNQkVSOiAzNjIsXG4gICAgRlRfUkVMSUdJT046IDM2MyxcbiAgICBGVF9SRU1BSU5ERVJfVEVSTTogMzY0LFxuICAgIEZUX0VMRUNUUk9OSUNfVElDS0VUX0lORElDQVRPUjogMzY1LFxuICAgIEZUX0NPTVBBUlRNRU5UX0NPREU6IDM2NixcbiAgICBGVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6IDM2NyxcbiAgICBGVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6IDM2OCxcbiAgICBGVF9BSVJMSU5FX05VTUVSSUNfQ09ERTogMzY5LFxuICAgIEZUX1RJQ0tFVF9OVU1CRVI6IDM3MCxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6IDM3MSxcbiAgICBGVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6IDM3MixcbiAgICBGVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOiAzNzMsXG4gICAgRlRfUERGXzQxN19DT0RFQzogMzc0LFxuICAgIEZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLU1VNOiAzNzUsXG4gICAgRlRfSURFTlRJVFlfQ0FSRF9OVU1CRVJfQ0hFQ0tfRElHSVQ6IDM3NixcbiAgICBGVF9WRVRFUkFOOiAzNzcsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfRlJPTTogMzc4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOiAzNzksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzFfTk9URVM6IDM4MCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfRlJPTTogMzgxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9UTzogMzgyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQV9OT1RFUzogMzgzLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOiAzODQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX1RPOiAzODUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CX05PVEVTOiAzODYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfRlJPTTogMzg3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOiAzODgsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DXzFfTk9URVM6IDM4OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfRlJPTTogMzkwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19UTzogMzkxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ19OT1RFUzogMzkyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006IDM5MyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9UTzogMzk0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOiAzOTUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EX0ZST006IDM5NixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfVE86IDM5NyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6IDM5OCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX0ZST006IDM5OSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JFX1RPOiA0MDAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9CRV9OT1RFUzogNDAxLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTogNDAyLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ18xX0VfVE86IDQwMyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0NfMV9FX05PVEVTOiA0MDQsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9GUk9NOiA0MDUsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzogNDA2LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQ0VfTk9URVM6IDQwNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX0ZST006IDQwOCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOiA0MDksXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzogNDEwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTogNDExLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfREVfVE86IDQxMixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOiA0MTMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9NX0ZST006IDQxNCxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fVE86IDQxNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX01fTk9URVM6IDQxNixcbiAgICBGVF9ETF9DTEFTU19DT0RFX0xfRlJPTTogNDE3LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9UTzogNDE4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfTF9OT1RFUzogNDE5LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOiA0MjAsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX1RPOiA0MjEsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9UX05PVEVTOiA0MjIsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9GUk9NOiA0MjMsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzogNDI0LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQU1fTk9URVM6IDQyNSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9GUk9NOiA0MjYsXG4gICAgRlRfRExfQ0xBU1NfQ09ERV9BXzJfVE86IDQyNyxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0FfMl9OT1RFUzogNDI4LFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006IDQyOSxcbiAgICBGVF9ETF9DTEFTU19DT0RFX0JfMV9UTzogNDMwLFxuICAgIEZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOiA0MzEsXG4gICAgRlRfU1VSTkFNRV9BVF9CSVJUSDogNDMyLFxuICAgIEZUX0NJVklMX1NUQVRVUzogNDMzLFxuICAgIEZUX05VTUJFUl9PRl9TRUFUUzogNDM0LFxuICAgIEZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6IDQzNSxcbiAgICBGVF9NQVhfU1BFRUQ6IDQzNixcbiAgICBGVF9GVUVMX1RZUEU6IDQzNyxcbiAgICBGVF9FQ19FTlZJUk9OTUVOVEFMX1RZUEU6IDQzOCxcbiAgICBGVF9QT1dFUl9XRUlHSFRfUkFUSU86IDQzOSxcbiAgICBGVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDogNDQwLFxuICAgIEZUX01BWF9NQVNTX09GX1RSQUlMRVJfVU5CUkFLRUQ6IDQ0MSxcbiAgICBGVF9UUkFOU01JU1NJT05fVFlQRTogNDQyLFxuICAgIEZUX1RSQUlMRVJfSElUQ0g6IDQ0MyxcbiAgICBGVF9BQ0NPTVBBTklFRF9CWTogNDQ0LFxuICAgIEZUX1BPTElDRV9ESVNUUklDVDogNDQ1LFxuICAgIEZUX0ZJUlNUX0lTU1VFX0RBVEU6IDQ0NixcbiAgICBGVF9QQVlMT0FEX0NBUEFDSVRZOiA0NDcsXG4gICAgRlRfTlVNQkVSX09GX0FYRUxTOiA0NDgsXG4gICAgRlRfUEVSTUlTU0lCTEVfQVhMRV9MT0FEOiA0NDksXG4gICAgRlRfUFJFQ0lOQ1Q6IDQ1MCxcbiAgICBGVF9JTlZJVEVEX0JZOiA0NTEsXG4gICAgRlRfUFVSUE9TRV9PRl9FTlRSWTogNDUyLFxuICAgIEZUX1NLSU5fQ09MT1I6IDQ1MyxcbiAgICBGVF9DT01QTEVYSU9OOiA0NTQsXG4gICAgRlRfQUlSUE9SVF9GUk9NOiA0NTUsXG4gICAgRlRfQUlSUE9SVF9UTzogNDU2LFxuICAgIEZUX0FJUkxJTkVfTkFNRTogNDU3LFxuICAgIEZUX0FJUkxJTkVfTkFNRV9GUkVRVUVOVF9GTFlFUjogNDU4LFxuICAgIEZUX0xJQ0VOU0VfTlVNQkVSOiA0NTksXG4gICAgRlRfSU5fVEFOS1M6IDQ2MCxcbiAgICBGVF9FWEVQVF9JTl9UQU5LUzogNDYxLFxuICAgIEZUX0ZBU1RfVFJBQ0s6IDQ2MixcbiAgICBGVF9PV05FUjogNDYzLFxuICAgIEZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDogNDY0LFxuICAgIEZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOiA0NjUsXG4gICAgRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06IDQ2NixcbiAgICBGVF9OVU1CRVJfT0ZfQ0FSRF9JU1NVQU5DRV9DSEVDS19ESUdJVDogNDY3LFxuICAgIEZUX0NFTlRVUllfREFURV9PRl9CSVJUSDogNDY4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOiA0NjksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX1RPOiA0NzAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOiA0NzEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0MyX0ZST006IDQ3MixcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfVE86IDQ3MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfQzJfTk9URVM6IDQ3NCxcbiAgICBGVF9ETF9DTEFTU0NPREVfQjJfRlJPTTogNDc1LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9UTzogNDc2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMl9OT1RFUzogNDc3LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOiA0NzgsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX1RPOiA0NzksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOiA0ODAsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9GUk9NOiA0ODEsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0IyRV9UTzogNDgyLFxuICAgIEZUX0RMX0NMQVNTQ09ERV9CMkVfTk9URVM6IDQ4MyxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19GUk9NOiA0ODQsXG4gICAgRlRfRExfQ0xBU1NDT0RFX0dfVE86IDQ4NSxcbiAgICBGVF9ETF9DTEFTU0NPREVfR19OT1RFUzogNDg2LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX0ZST006IDQ4NyxcbiAgICBGVF9ETF9DTEFTU0NPREVfSl9UTzogNDg4LFxuICAgIEZUX0RMX0NMQVNTQ09ERV9KX05PVEVTOiA0ODksXG4gICAgRlRfRExfQ0xBU1NDT0RFX0xDX0ZST006IDQ5MCxcbiAgICBGVF9ETF9DTEFTU0NPREVfTENfVE86IDQ5MSxcbiAgICBGVF9ETENfTEFTU0NPREVfTENfTk9URVM6IDQ5MixcbiAgICBGVF9CQU5LQ0FSRE5VTUJFUjogNDkzLFxuICAgIEZUX0JBTktDQVJEVkFMSURUSFJVOiA0OTQsXG4gICAgRlRfVEFYX05VTUJFUjogNDk1LFxuICAgIEZUX0hFQUxUSF9OVU1CRVI6IDQ5NixcbiAgICBGVF9HUkFOREZBVEhFUk5BTUU6IDQ5NyxcbiAgICBGVF9TRUxFQ1RFRV9JTkRJQ0FUT1I6IDQ5OCxcbiAgICBGVF9NT1RIRVJfU1VSTkFNRTogNDk5LFxuICAgIEZUX01PVEhFUl9HSVZFTk5BTUU6IDUwMCxcbiAgICBGVF9GQVRIRVJfU1VSTkFNRTogNTAxLFxuICAgIEZUX0ZBVEhFUl9HSVZFTk5BTUU6IDUwMixcbiAgICBGVF9NT1RIRVJfREFURU9GQklSVEg6IDUwMyxcbiAgICBGVF9GQVRIRVJfREFURU9GQklSVEg6IDUwNCxcbiAgICBGVF9NT1RIRVJfUEVSU09OQUxOVU1CRVI6IDUwNSxcbiAgICBGVF9GQVRIRVJfUEVSU09OQUxOVU1CRVI6IDUwNixcbiAgICBGVF9NT1RIRVJfUExBQ0VPRkJJUlRIOiA1MDcsXG4gICAgRlRfRkFUSEVSX1BMQUNFT0ZCSVJUSDogNTA4LFxuICAgIEZUX01PVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTA5LFxuICAgIEZUX0ZBVEhFUl9DT1VOVFJZT0ZCSVJUSDogNTEwLFxuICAgIEZUX0RBVEVfRklSU1RfUkVORVdBTDogNTExLFxuICAgIEZUX0RBVEVfU0VDT05EX1JFTkVXQUw6IDUxMixcbiAgICBGVF9QTEFDRV9PRl9FWEFNSU5BVElPTjogNTEzLFxuICAgIEZUX0FQUExJQ0FUSU9OX05VTUJFUjogNTE0LFxuICAgIEZUX1ZPVUNIRVJfTlVNQkVSOiA1MTUsXG4gICAgRlRfQVVUSE9SSVpBVElPTl9OVU1CRVI6IDUxNixcbiAgICBGVF9GQUNVTFRZOiA1MTcsXG4gICAgRlRfRk9STV9PRl9FRFVDQVRJT046IDUxOCxcbiAgICBGVF9ETklfTlVNQkVSOiA1MTksXG4gICAgRlRfUkVUSVJFTUVOVF9OVU1CRVI6IDUyMCxcbiAgICBGVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOiA1MjEsXG4gICAgRlRfQUdFX0FUX0lTU1VFOiA1MjIsXG4gICAgRlRfWUVBUlNfU0lOQ0VfSVNTVUU6IDUyMyxcbiAgICBGVF9ETENMQVNTQ09ERV9CVFBfRlJPTTogNTI0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9OT1RFUzogNTI1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0JUUF9UTzogNTI2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX0ZST006IDUyNyxcbiAgICBGVF9ETENMQVNTQ09ERV9DM19OT1RFUzogNTI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0MzX1RPOiA1MjksXG4gICAgRlRfRExDTEFTU0NPREVfRV9GUk9NOiA1MzAsXG4gICAgRlRfRExDTEFTU0NPREVfRV9OT1RFUzogNTMxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0VfVE86IDUzMixcbiAgICBGVF9ETENMQVNTQ09ERV9GX0ZST006IDUzMyxcbiAgICBGVF9ETENMQVNTQ09ERV9GX05PVEVTOiA1MzQsXG4gICAgRlRfRExDTEFTU0NPREVfRl9UTzogNTM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX0ZST006IDUzNixcbiAgICBGVF9ETENMQVNTQ09ERV9GQV9OT1RFUzogNTM3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0ZBX1RPOiA1MzgsXG4gICAgRlRfRExDTEFTU0NPREVfRkExX0ZST006IDUzOSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6IDU0MCxcbiAgICBGVF9ETENMQVNTQ09ERV9GQTFfVE86IDU0MSxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9GUk9NOiA1NDIsXG4gICAgRlRfRExDTEFTU0NPREVfRkJfTk9URVM6IDU0MyxcbiAgICBGVF9ETENMQVNTQ09ERV9GQl9UTzogNTQ0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX0ZST006IDU0NSxcbiAgICBGVF9ETENMQVNTQ09ERV9HMV9OT1RFUzogNTQ2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0cxX1RPOiA1NDcsXG4gICAgRlRfRExDTEFTU0NPREVfSF9GUk9NOiA1NDgsXG4gICAgRlRfRExDTEFTU0NPREVfSF9OT1RFUzogNTQ5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hfVE86IDU1MCxcbiAgICBGVF9ETENMQVNTQ09ERV9JX0ZST006IDU1MSxcbiAgICBGVF9ETENMQVNTQ09ERV9JX05PVEVTOiA1NTIsXG4gICAgRlRfRExDTEFTU0NPREVfSV9UTzogNTUzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfRlJPTTogNTU0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0tfTk9URVM6IDU1NSxcbiAgICBGVF9ETENMQVNTQ09ERV9LX1RPOiA1NTYsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfRlJPTTogNTU3LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xLX05PVEVTOiA1NTgsXG4gICAgRlRfRExDTEFTU0NPREVfTEtfVE86IDU1OSxcbiAgICBGVF9ETENMQVNTQ09ERV9OX0ZST006IDU2MCxcbiAgICBGVF9ETENMQVNTQ09ERV9OX05PVEVTOiA1NjEsXG4gICAgRlRfRExDTEFTU0NPREVfTl9UTzogNTYyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfRlJPTTogNTYzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1NfTk9URVM6IDU2NCxcbiAgICBGVF9ETENMQVNTQ09ERV9TX1RPOiA1NjUsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfRlJPTTogNTY2LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RCX05PVEVTOiA1NjcsXG4gICAgRlRfRExDTEFTU0NPREVfVEJfVE86IDU2OCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9GUk9NOiA1NjksXG4gICAgRlRfRExDTEFTU0NPREVfVE1fTk9URVM6IDU3MCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTV9UTzogNTcxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX0ZST006IDU3MixcbiAgICBGVF9ETENMQVNTQ09ERV9UUl9OT1RFUzogNTczLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RSX1RPOiA1NzQsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfRlJPTTogNTc1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1RWX05PVEVTOiA1NzYsXG4gICAgRlRfRExDTEFTU0NPREVfVFZfVE86IDU3NyxcbiAgICBGVF9ETENMQVNTQ09ERV9WX0ZST006IDU3OCxcbiAgICBGVF9ETENMQVNTQ09ERV9WX05PVEVTOiA1NzksXG4gICAgRlRfRExDTEFTU0NPREVfVl9UTzogNTgwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfRlJPTTogNTgxLFxuICAgIEZUX0RMQ0xBU1NDT0RFX1dfTk9URVM6IDU4MixcbiAgICBGVF9ETENMQVNTQ09ERV9XX1RPOiA1ODMsXG4gICAgRlRfVVJMOiA1ODQsXG4gICAgRlRfQ0FMSUJFUjogNTg1LFxuICAgIEZUX01PREVMOiA1ODYsXG4gICAgRlRfTUFLRTogNTg3LFxuICAgIEZUX05VTUJFUl9PRl9DWUxJTkRFUlM6IDU4OCxcbiAgICBGVF9TVVJOQU1FX09GX0hVU0JBTkRfQUZURVJfUkVHSVNUUkFUSU9OOiA1ODksXG4gICAgRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjogNTkwLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfV0lGRTogNTkxLFxuICAgIEZUX0RBVEVfT0ZfQklSVEhfT0ZfSFVTQkFORDogNTkyLFxuICAgIEZUX0NJVElaRU5TSElQX09GX0ZJUlNUX1BFUlNPTjogNTkzLFxuICAgIEZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046IDU5NCxcbiAgICBGVF9DVlY6IDU5NSxcbiAgICBGVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6IDU5NixcbiAgICBGVF9NT1JUR0FHRV9CWTogNTk3LFxuICAgIEZUX09MRF9ET0NVTUVOVF9OVU1CRVI6IDU5OCxcbiAgICBGVF9PTERfREFURV9PRl9JU1NVRTogNTk5LFxuICAgIEZUX09MRF9QTEFDRV9PRl9JU1NVRTogNjAwLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX0ZST006IDYwMSxcbiAgICBGVF9ETENMQVNTQ09ERV9MUl9UTzogNjAyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0xSX05PVEVTOiA2MDMsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfRlJPTTogNjA0LFxuICAgIEZUX0RMQ0xBU1NDT0RFX01SX1RPOiA2MDUsXG4gICAgRlRfRExDTEFTU0NPREVfTVJfTk9URVM6IDYwNixcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9GUk9NOiA2MDcsXG4gICAgRlRfRExDTEFTU0NPREVfSFJfVE86IDYwOCxcbiAgICBGVF9ETENMQVNTQ09ERV9IUl9OT1RFUzogNjA5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX0ZST006IDYxMCxcbiAgICBGVF9ETENMQVNTQ09ERV9IQ19UTzogNjExLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0hDX05PVEVTOiA2MTIsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfRlJPTTogNjEzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX01DX1RPOiA2MTQsXG4gICAgRlRfRExDTEFTU0NPREVfTUNfTk9URVM6IDYxNSxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9GUk9NOiA2MTYsXG4gICAgRlRfRExDTEFTU0NPREVfUkVfVE86IDYxNyxcbiAgICBGVF9ETENMQVNTQ09ERV9SRV9OT1RFUzogNjE4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfRlJPTTogNjE5LFxuICAgIEZUX0RMQ0xBU1NDT0RFX1JfVE86IDYyMCxcbiAgICBGVF9ETENMQVNTQ09ERV9SX05PVEVTOiA2MjEsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfRlJPTTogNjIyLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NBX1RPOiA2MjMsXG4gICAgRlRfRExDTEFTU0NPREVfQ0FfTk9URVM6IDYyNCxcbiAgICBGVF9DSVRJWkVOU0hJUF9TVEFUVVM6IDYyNSxcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX0ZST006IDYyNixcbiAgICBGVF9NSUxJVEFSWV9TRVJWSUNFX1RPOiA2MjcsXG4gICAgRlRfRExDTEFTU0NPREVfTlRfRlJPTTogNjI4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX05UX1RPOiA2MjksXG4gICAgRlRfRExDTEFTU0NPREVfTlRfTk9URVM6IDYzMCxcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9GUk9NOiA2MzEsXG4gICAgRlRfRExDTEFTU0NPREVfVE5fVE86IDYzMixcbiAgICBGVF9ETENMQVNTQ09ERV9UTl9OT1RFUzogNjMzLFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX0ZST006IDYzNCxcbiAgICBGVF9ETENMQVNTQ09ERV9EM19UTzogNjM1LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0QzX05PVEVTOiA2MzYsXG4gICAgRlRfQUxUX0RBVEVfT0ZfRVhQSVJZOiA2MzcsXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfRlJPTTogNjM4LFxuICAgIEZUX0RMQ0xBU1NDT0RFX0NEX1RPOiA2MzksXG4gICAgRlRfRExDTEFTU0NPREVfQ0RfTk9URVM6IDY0MCxcbiAgICBGVF9QQVlNRU5UX1BFUklPRF9UTzogNjQzLFxuICAgIEZUX1BBWU1FTlRfUEVSSU9EX0ZST006IDY0MixcbiAgICBGVF9JU1NVRVJfSURFTlRJRklDQVRJT05fTlVNQkVSOiA2NDEsXG4gICAgRlRfVkFDQ0lOQVRJT05fQ0VSVElGSUNBVEVfSURFTlRJRklFUjogNjQ0LFxuICAgIEZUX0ZJUlNUX05BTUU6IDY0NSxcbiAgICBGVF9EQVRFX09GX0FSUklWQUw6IDY0NixcbiAgICBGVF9TRUNPTkRfTkFNRTogNjQ3LFxuICAgIEZUX1RISVJEX05BTUU6IDY0OCxcbiAgICBGVF9GT1VSVEhfTkFNRTogNjQ5LFxuICAgIEZUX0xBU1RfTkFNRTogNjUwLFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfQ0xBU1NfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb2N1bWVudCBjbGFzcyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JU1NVSU5HX1NUQVRFX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBzdGF0ZSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET0NVTUVOVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dJVkVOX05BTUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUlNfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BVElPTkFMSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hdGlvbmFsaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2V4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9IRUlHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9XRUlHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FWUVTX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkV5ZSBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEFJUl9DT0xPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIYWlyIGNvbG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFkZHJlc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPTk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvbm9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TT0NJQUxfU0VDVVJJVFlfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNvY2lhbCBpbnN1cmFuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfRU5ET1JTRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfUkVTVFJJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBSZXN0cmljdGlvbiBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9VTkRFUl8yMV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMjFzdCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVVUSE9SSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIGFuZCBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTkFUSU9OQUxJVFlfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYXRpb25hbGl0eSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVNTUE9SVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFzc3BvcnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JTlZJVEFUSU9OX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZpdGF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgQ2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfU1VCX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2Egc3ViY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdfMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HXzI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmUgMlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR18zOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBsaW5lIDNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1SWiBUeXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUFRJT05BTF9EQVRBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0NMQVNTX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lTU1VJTkdfU1RBVEVfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1aW5nIHN0YXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJTkFMX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmFsIGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX0lEX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciB2aXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3Igc3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIHZpc2EgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09USEVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NUlpfU1RSSU5HUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BTUVfU1VGRklYOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5hbWUgc3VmZml4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OQU1FX1BSRUZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOYW1lIHByZWZpeFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9JU1NVRV9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9JU1NVRV9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfU0VSSUVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRvY3VtZW50IHNlcmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfUkVHX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWdpc3RyYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9DQVJfTU9ERUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBtb2RlbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfQ0FSX0NPTE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgY29sb3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX0JPRFlfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJvZHkgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9DQVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX01BWF9XRUlHSFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWF4IHBlcm1pc3NpYmxlIHdlaWdodFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfV0VJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVubGFkZW4gbWFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19BUkVBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyZWFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfU1RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfQlVJTERJTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19IT1VTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCdWlsZGluZ1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19GTEFUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwYXJ0bWVudFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfUkVHSVNUUkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9SRUdJU1RSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiByZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFU0lERU5UX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbnQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVTSURFTlRfVU5USUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbnQgdW50aWxcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklUWV9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VpbmcgYXV0aG9yaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0JJUlRIX0FSRUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ291bnRyeS9yZWdpb24gb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BMQUNFX09GX0JJUlRIX1NUQVRFX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlydGggc3RhdGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19TVFJFRVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RyZWV0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BRERSRVNTX0NJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19QT1NUQUxfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9DVU1FTlRfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkb2N1bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfQklSVEhfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfRVhQSVJZX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OQUxfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBwZXJzb25hbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJTkFMX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpbmFsIGNoZWNrIGRpZ2l0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVNTUE9SVF9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHBhc3Nwb3J0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WSVRBVElPTl9OVU1CRVJfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGludml0YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX0lEX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3Igc3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfVkFMSURfVU5USUxfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIHZpc2EgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9ETF9DTEFTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgY2xhc3NcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZXhwaXJ5IGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcm1pdCBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVRfREFURV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgaXNzdWUgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSTUlUX1JFU1RSSUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWl0IHJlc3RyaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BFUk1JVF9FTkRPUlNFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQZXJtaXQgZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUVfVElNRVNUQU1QOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklzc3VlIHRpbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9EVVBMSUNBVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBkdXBsaWNhdGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NRURJQ0FMX0lORElDQVRPUl9DT0RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNZWRpY2FsIG5vdGVzL2NvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OT05fUkVTSURFTlRfSU5ESUNBVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk5vbi1yZXNpZGVudCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfVkFMSURfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNhIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfVkFMSURfVU5USUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSB2YWxpZCB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRFVSQVRJT05fT0ZfU1RBWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXJhdGlvbiBvZiBzdGF5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfRU5UUklFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2YgZW50cmllc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9OVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9udGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1lFQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiWWVhclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVU5JUVVFX0NVU1RPTUVSX0lERU5USUZJRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pcXVlIGN1c3RvbWVyIGlkZW50aWZpZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTU1FUkNJQUxfVkVISUNMRV9DT0RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21tZXJjaWFsIHZlaGljbGUgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUtBX0RBVEVfT0ZfQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBEYXRlIG9mIGJpcnRoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU09DSUFMX1NFQ1VSSVRZX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFNvY2lhbCBJbnN1cmFuY2UgTnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfU1VSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IEdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9OQU1FX1NVRkZJWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IE5hbWUgc3VmZml4XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BS0FfTkFNRV9QUkVGSVg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUtBOiBOYW1lIHByZWZpeFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFJTElOR19BRERSRVNTX1NUUkVFVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBzdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19DSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIGNpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01BSUxJTkdfQUREUkVTU19KVVJJU0RJQ1RJT05fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYWlsaW5nIGFkZHJlc3MgLSBqdXJpc2RpY3Rpb24gY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFJTElOR19BRERSRVNTX1BPU1RBTF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1haWxpbmcgYWRkcmVzcyAtIHBvc3RhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BVURJVF9JTkZPUk1BVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgZm9yIHZhbGlkYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOVkVOVE9SWV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52ZW50b3J5IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkFDRV9FVEhOSUNJVFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmFjZS9ldGhuaWNpdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0pVUklTRElDVElPTl9WRUhJQ0xFX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkp1cmlzZGljdGlvbiB2ZWhpY2xlIGNsYXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9KVVJJU0RJQ1RJT05fRU5ET1JTRU1FTlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJKdXJpc2RpY3Rpb24gZW5kb3JzZW1lbnQgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSlVSSVNESUNUSU9OX1JFU1RSSUNUSU9OX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSnVyaXNkaWN0aW9uIHJlc3RyaWN0aW9uIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBTUlMWV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfR0lWRU5fTkFNRVNfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdpdmVuIG5hbWUgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVklTQV9JRF9SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzYSBJRCAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVRIRVJTX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVRIRVJTX05BTUVfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgbmFtZSAoTmF0aW9uYWwpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX0FORF9HSVZFTl9OQU1FU19SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBhbmQgZ2l2ZW4gbmFtZXMgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUExBQ0VfT0ZfQklSVEhfUlVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoIChOYXRpb25hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklUWV9SVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXNzdWluZyBhdXRob3JpdHkgKE5hdGlvbmFsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUlOR19TVEFURV9DT0RFX05VTUVSSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpYyBpc3N1aW5nIHN0YXRlIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05BVElPTkFMSVRZX0NPREVfTlVNRVJJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljIG5hdGlvbmFsaXR5IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VOR0lORV9QT1dFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdpbmUgcG93ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VOR0lORV9WT0xVTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIHZvbHVtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0hBU1NJU19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hhc3NpcyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VOR0lORV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5naW5lIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRU5HSU5FX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2luZSBtb2RlbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVkVISUNMRV9DQVRFR09SWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElUWV9DQVJEX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09OVFJPTF9OTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb250cm9sIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFSUkVOVFNfR0lWRU5fTkFNRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGFyZW50c1xcJyBnaXZlbiBuYW1lc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VDT05EX1NVUk5BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2Vjb25kIHN1cm5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JRERMRV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pZGRsZSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9WSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmVoaWNsZSBpZGVudGlmaWNhdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFR19DRVJUX1ZJTl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgVklOXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9WSU5fQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIFZJTlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8xX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzNfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElORV8xX0NIRUNLU1VNOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrc3VtIGZvciBsaW5lIDFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTkVfMl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzNfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIGxpbmUgM1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS19ESUdJVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVjayBkaWdpdCBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfUkVHX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgcmVnaXN0cmF0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVHX0NFUlRfVkVISUNMRV9JVFNfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIElUUyBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DQVJEX0FDQ0VTU19OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FyZCBhY2Nlc3MgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQVJJVEFMX1NUQVRVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJpdGFsIHN0YXR1c1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09NUEFOWV9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbXBhbnkgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BFQ0lBTF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGVjaWFsIG5vdGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX09GX1NQT1NFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb3VzZVxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFJBQ0tJTkdfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRyYWNraW5nIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQk9PS0xFVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9va2xldCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NISUxEUkVOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaWxkcmVuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT1BZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvcHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFUklBTF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRE9TU0lFUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9zc2llciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FLQV9TVVJOQU1FX0FORF9HSVZFTl9OQU1FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBS0E6IFN1cm5hbWUgYW5kIGdpdmVuIG5hbWVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9URVJSSVRPUklBTF9WQUxJRElUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUZXJyaXRvcmlhbCB2YWxpZGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTVJaX1NUUklOR1NfV0lUSF9DT1JSRUNUX0NIRUNLX1NVTVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTVJaIGxpbmVzIHdpdGggY29ycmVjdCBjaGVja3N1bXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NETF9SRVNUUklDVElPTl9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNETCBSZXN0cmljdGlvbiBDb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9VTkRFUl8xOF9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgMTh0aCBiaXJ0aGRheVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfUkVDT1JEX0NSRUFURUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVjb3JkIGNyZWF0ZWRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0RVUExJQ0FURV9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZHVwbGljYXRlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9JU1NfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXJkIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01JTElUQVJZX0JPT0tfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pbGl0YXJ5IElEIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREVTVElOQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVzdGluYXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JMT09EX0dST1VQOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJsb29kIGdyb3VwXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRVFVRU5DRV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VxdWVuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9CT0RZX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQm9keSB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUdfQ0VSVF9DQVJfTUFSSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIG1ha2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQU5TQUNUSU9OX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUcmFuc2FjdGlvbiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZPTElPX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGb2xpbyBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZPVEVSX0tFWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWb3RlciBLZXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfTVVOSUNJUEFMSVRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk11bmljaXBhbGl0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19MT0NBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJMb2NhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU0VDVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWN0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PQ1JfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9DUiBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZFREVSQUxfRUxFQ1RJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZlZGVyYWwgZWxlY3Rpb25zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUZFUkVOQ0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09QVElPTkFMX0RBVEFfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09QVElPTkFMX0RBVEFfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG9wdGlvbmFsIGRhdGFcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2EgTnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WSVNBX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgdmlzYSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1ZJU0FfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciB2aXNhIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVk9URVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm90ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BSRVZJT1VTX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZS9udW1iZXIgb2YgdGhlIHByZXZpb3VzIGRvY3VtZW50XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GSUVMRF9GUk9NX01SWjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGaWVsZCBmcm9tIE1SWlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ1VSUkVOVF9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN1cnJlbnQgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1RBVFVTX0RBVEVfT0ZfRVhQSVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN0YXR1cyBFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS05PVEVfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmtub3RlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ1NDX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ1NDIENvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FSVElTVElDX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHNldWRvbnltXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BQ0FERU1JQ19USVRMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBY2FkZW1pYyB0aXRsZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUREUkVTU19DT1VOVFJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdW50cnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FERFJFU1NfWklQQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJaSVAgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9SRVNJREVOQ0VfUEVSTUlUXzE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmVzaWRlbmNlIHBlcm1pdCAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FX0lEX1JFU0lERU5DRV9QRVJNSVRfMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZXNpZGVuY2UgcGVybWl0IDJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfU1RSRUVUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBTdHJlZXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogQ2l0eVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9TVEFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogU3RhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0VfSURfUExBQ0VfT0ZfQklSVEhfQ09VTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBiaXJ0aDogQ291bnRyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRV9JRF9QTEFDRV9PRl9CSVJUSF9aSVBDT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBsYWNlIG9mIGJpcnRoOiBQb3N0YWwgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0RMX0NMQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNETCBDbGFzc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfVU5ERVJfMTlfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIDE5dGggYmlydGhkYXlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1dFSUdIVF9QT1VORFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VpZ2h0IChwb3VuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0xJTUlURURfRFVSQVRJT05fRE9DVU1FTlRfSU5ESUNBVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluZGljYXRvciBvZiBkb2N1bWVudCBsaW1pdGVkIGR1cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FTkRPUlNFTUVOVF9FWFBJUkFUSU9OX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5kb3JzZW1lbnQgZXhwaXJhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRVZJU0lPTl9EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldmlzaW9uIGRhdGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NPTVBMSUFOQ0VfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGlhbmNlIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBTUlMWV9OQU1FX1RSVU5DQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJ1bmNhdGVkIHN1cm5hbWUvZ2l2ZW4gbmFtZSBhdCBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRklSU1RfTkFNRV9UUlVOQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZpcnN0IG5hbWUgdHJ1bmNhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUlERExFX05BTUVfVFJVTkNBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNaWRkbGUgbmFtZSB0cnVuY2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FWEFNX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhhbSBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PUkdBTklaQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3JnYW5pemF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ERVBBUlRNRU5UOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRlcGFydG1lbnRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBWV9HUkFERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXkgZ3JhZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JBTks6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmFua1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkVORUZJVFNfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbmVmaXRzIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BPTlNPUl9TRVJWSUNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3Igc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1BPTlNPUl9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvciBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BvbnNvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVMQVRJT05TSElQOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJlbGF0aW9uc2hpcFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVVNDSVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVNDSVNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NBVEVHT1JZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNhdGVnb3J5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT05ESVRJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvbmRpdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lERU5USUZJRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWRlbnRpZmllclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09ORklHVVJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb25maWd1cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ESVNDUkVUSU9OQVJZX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGlzY3JldGlvbmFyeSBkYXRhXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzFfT1BUSU9OQUxfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAxXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzJfT1BUSU9OQUxfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9MSU5FXzNfT1BUSU9OQUxfREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPcHRpb25hbCBkYXRhIGZyb20gbGluZSAzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FUVZfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFUVYgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUxUX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQUxUIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJTkFSWV9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpbmFyeSBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QU0VVRE9fQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQc2V1ZG9jb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GRUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmVlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVEFNUF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhbXAgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9HTklCX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHTklCIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREVQVF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGVwYXJ0bWVudCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RFTEVYX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsZWdyYXBoIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FMTEVSR0lFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbGxlcmdpZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BlY2lhbCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DT1VSVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvdXJ0IGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb3VudHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NQT05TT1JfU1NOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwb25zb3IgU1NOXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ET19EX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEb0QgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQ19OT1ZJQ0VfREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFeHBpcnkgZGF0ZSBvZiBNb3RvcmN5Y2xlIE5vdmljZSBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RVRl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFVGIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUdZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFHWVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUE5SX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUE5SIGNvZGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZST01fQUlSUE9SVF9DT0RFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNvZGUgb2YgdGhlIGFpcnBvcnQgb2YgZGVwYXJ0dXJlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UT19BSVJQT1JUX0NPREU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ29kZSBvZiB0aGUgYWlycG9ydCBvZiBhcnJpdmFsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GTElHSFRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZsaWdodCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfRkxJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmxpZ2h0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRUFUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWF0IG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9JU1NVRV9CT0FSRElOR19QQVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYm9hcmRpbmcgcGFzcyBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0NXX1VOVElMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNDVyB1bnRpbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVGRVJFTkNFX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbmlxdWUgbnVtYmVyIGNoZWNrc3VtXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUZFUkVOQ0VfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSBudW1iZXIgY2hlY2sgZGlnaXRcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JPT01fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJvb20gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9SRUxJR0lPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJSZWxpZ2lvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUkVNQUlOREVSX1RFUk06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9udGhzIHRvIGV4cGlyZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRUxFQ1RST05JQ19USUNLRVRfSU5ESUNBVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVsZWN0cm9uaWMgdGlja2V0IGluZGljYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09NUEFSVE1FTlRfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wYXJ0bWVudCBjb2RlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSEVDS19JTl9TRVFVRU5DRV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2staW4gc2VxdWVuY2UgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJMSU5FX0RFU0lHTkFUT1JfT0ZfQk9BUkRJTkdfUEFTU19JU1NVRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBkZXNpZ25hdG9yIG9mIGJvYXJkaW5nIHBhc3MgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJMSU5FX05VTUVSSUNfQ09ERTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBaXJsaW5lIG51bWVyaWMgY29kZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVElDS0VUX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaWNrZXQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GUkVRVUVOVF9GTFlFUl9BSVJMSU5FX0RFU0lHTkFUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlcXVlbnQgZmx5ZXIgYWlybGluZSBkZXNpZ25hdG9yXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GUkVRVUVOVF9GTFlFUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlcXVlbnQgZmx5ZXIgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GUkVFX0JBR0dBR0VfQUxMT1dBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZWUgYmFnZ2FnZSBhbGxvd2FuY2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BERl80MTdfQ09ERUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUERGNDE3IGNvZGVjXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9JREVOVElUWV9DQVJEX05VTUJFUl9DSEVDS1NVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGVja3N1bSBmb3IgaWRlbnRpdHkgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lERU5USVRZX0NBUkRfTlVNQkVSX0NIRUNLX0RJR0lUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoZWNrIGRpZ2l0IGZvciBpZGVudGl0eSBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVkVURVJBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZXRlcmFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQV8xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMxIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF8xX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfRF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQkVfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQkUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DXzFfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMUUgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQ18xX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzFFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0NFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0UgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9DRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RfMV9FX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQxRSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9EXzFfRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMUUgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfREVfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBERSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0RFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IERFIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX01fRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfTV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBNIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX01fTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9MX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0xfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9MX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEwgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9UX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFQgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfVF9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FNX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQU0gdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BTV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BTV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBTSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU19DT0RFX0FfMl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9BXzJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQTIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl8xX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NfQ09ERV9CXzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTX0NPREVfQl8xX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIxIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TVVJOQU1FX0FUX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1cm5hbWUgYXQgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NJVklMX1NUQVRVUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaXZpbCBzdGF0dXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9TRUFUUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc2VhdHNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9TVEFORElOR19QTEFDRVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIHN0YW5kaW5nIHBsYWNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTUFYX1NQRUVEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBzcGVlZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRlVFTF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZ1ZWwgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRUNfRU5WSVJPTk1FTlRBTF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlZlaGljbGUgZW52aXJvbm1lbnRhbCB0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QT1dFUl9XRUlHSFRfUkFUSU86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG93ZXItdG8td2VpZ2h0IHJhdGlvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQVhfTUFTU19PRl9UUkFJTEVSX0JSQUtFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXggbWFzcyBvZiB0cmFpbGVyIChicmFrZWQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQVhfTUFTU19PRl9UUkFJTEVSX1VOQlJBS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1heCBtYXNzIG9mIHRyYWlsZXIgKHVuYnJha2VkKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFJBTlNNSVNTSU9OX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhbnNtaXNzaW9uIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RSQUlMRVJfSElUQ0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHJhaWxlciBoaXRjaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQUNDT01QQU5JRURfQlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWNjb21wYW5pZWQgYnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BPTElDRV9ESVNUUklDVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb2xpY2UgZGlzdHJpY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJUlNUX0lTU1VFX0RBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlyc3QgaXNzdWUgZGF0ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEFZTE9BRF9DQVBBQ0lUWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXlsb2FkIGNhcGFjaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQVhFTFM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtYmVyIG9mIGF4bGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJNSVNTSUJMRV9BWExFX0xPQUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGVybWlzc2libGUgYXhsZSBsb2FkXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUkVDSU5DVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcmVjaW5jdFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSU5WSVRFRF9CWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZpdGVkIGJ5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QVVJQT1NFX09GX0VOVFJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlB1cnBvc2Ugb2YgZW50cnlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NLSU5fQ09MT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2tpbiBjb2xvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ09NUExFWElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDb21wbGV4aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJQT1JUX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlycG9ydCBvZiBkZXBhcnR1cmVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FJUlBPUlRfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlycG9ydCBvZiBhcnJpdmFsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJMSU5FX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9BSVJMSU5FX05BTUVfRlJFUVVFTlRfRkxZRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWlybGluZSBsb3lhbHR5IHByb2dyYW0gZm9yIGZyZXF1ZW50IGZseWVyc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTElDRU5TRV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGljZW5zZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0lOX1RBTktTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9FWEVQVF9JTl9UQU5LUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPdGhlciB0aGFuIHRhbmtzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQVNUX1RSQUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhc3QgVHJhY2sgc2VydmljZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1dORVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01SWl9TVFJJTkdTX0lDQU9fUkZJRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNUlogbGluZXMgZnJvbSBJQ0FPIFJGSURcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX05VTUJFUl9PRl9DQVJEX0lTU1VBTkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tTVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2tzdW0gZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTlVNQkVSX09GX0NBUkRfSVNTVUFOQ0VfQ0hFQ0tfRElHSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2hlY2sgZGlnaXQgZm9yIG51bWJlciBvZiBjYXJkIGlzc3VhbmNlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0VOVFVSWV9EQVRFX09GX0JJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNlbnR1cnkgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9BM19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBBMyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0EzX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEEzIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQzJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9DMl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0IyX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9EMl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBEMiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0QyX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQyIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9CMkVfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQjJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfQjJFX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEIyRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExfQ0xBU1NDT0RFX0dfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9HX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEcgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMX0NMQVNTQ09ERV9KX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfSl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBKIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETF9DTEFTU0NPREVfTENfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ19MQVNTQ09ERV9MQ19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMQyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkROVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQkFOS0NBUkRWQUxJRFRIUlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBjYXJkIHZhbGlkaXR5XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9UQVhfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRheCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9TRUNVUklUWU9QVElPTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU0JIIHNlY3VyaXR5IG9wdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NCSF9JTlRFR1JJVFlPUFRJT05TOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNCSCBpbnRlZ3JpdHkgb3B0aW9uc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9DUkVBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDcmVhdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WQUxJRElUWV9QRVJJT0Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmFsaWRpdHkgcGVyaW9kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVRST05fSEVBREVSX1ZFUlNJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUGF0cm9uIGhlYWRlciB2ZXJzaW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CREJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCREIgdHlwZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQklPTUVUUklDX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmlvbWV0cmljIHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19TVUJUWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBzdWJ0eXBlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfUFJPRFVDVElEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBwcm9kdWN0IElEXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9CSU9NRVRSSUNfRk9STUFUX09XTkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJpb21ldHJpYyBmb3JtYXQgb3duZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0JJT01FVFJJQ19GT1JNQVRfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJCaW9tZXRyaWMgZm9ybWF0IHR5cGVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BIT05FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBob25lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RJVExFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvc2l0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTF9TVU1NQVJZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsIGRhdGEgc3VtbWFyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT1RIRVJfVkFMSURfSUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgdmFsaWQgSURzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DVVNUT0RZX0lORk86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VzdG9keSBpbmZvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PVEhFUl9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk90aGVyIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09CU0VSVkFUSU9OUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYnNlcnZhdGlvbnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1RBWDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RBVEVfT0ZfUEVSU09OQUxJWkFUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBlcnNvbmFsaXphdGlvbiBkYXRlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05BTElaQVRJT05fU046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2VyaWFsIG51bWJlciBvZiBwZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX09USEVSUEVSU09OX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT3RoZXIgcGVyc29uLCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9EQVRFX09GX1JFQ09SRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBEYXRlIG9mIHJlY29yZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBOYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QRVJTT05UT05PVElGWV9QSE9ORTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBQaG9uZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfUEVSU09OVE9OT1RJRllfQUREUkVTUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3RpZnkgcGVyc29uOiBBZGRyZXNzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9JU1NVRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRFMgY2VydGlmaWNhdGUgaXNzdWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9TVUJKRUNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHN1YmplY3RcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RTX0NFUlRJRklDQVRFX1ZBTElERlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEUyBjZXJ0aWZpY2F0ZSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EU19DRVJUSUZJQ0FURV9WQUxJRFRPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRTIGNlcnRpZmljYXRlIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WUkNfREFUQU9CSkVDVF9FTlRSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWZWhpY2xlIGRhdGEgZnJvbSB0aGUgREcxIGRhdGEgZ3JvdXBcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0dSQU5ERkFUSEVSTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFuZGZhdGhlclxcJ3MgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSEVBTFRIX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIZWFsdGggaW5zdXJhbmNlIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVFlQRV9BUFBST1ZBTF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHlwZSBvZiBhcHByb3ZhbCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FETUlOSVNUUkFUSVZFX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZG1pbmlzdHJhdGl2ZSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RPQ1VNRU5UX0RJU0NSSU1JTkFUT1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRG9jdW1lbnQgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFUQV9ESVNDUklNSU5BVE9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGEgZGlzY3JpbWluYXRvclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNPX0lTU1VFUl9JRF9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSUQgbnVtYmVyIG9mIElTTyBpc3N1ZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NFTEVDVEVFX0lORElDQVRPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWxlY3RlZSBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9TVVJOQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3Mgc3VybmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0dJVkVOTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGdpdmVuIG5hbWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9EQVRFT0ZCSVJUSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYXRoZXJcXCdzIGRhdGUgb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PVEhFUl9QRVJTT05BTE5VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3RoZXJcXCdzIHBlcnNvbmFsIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX1BFUlNPTkFMTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgcGVyc29uYWwgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1RIRVJfUExBQ0VPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgcGxhY2Ugb2YgYmlydGhcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZBVEhFUl9QTEFDRU9GQklSVEg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmF0aGVyXFwncyBwbGFjZSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTU9USEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRkFUSEVSX0NPVU5UUllPRkJJUlRIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhdGhlclxcJ3MgY291bnRyeSBvZiBiaXJ0aFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9GSVJTVF9SRU5FV0FMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgZmlyc3QgcmVuZXdhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9TRUNPTkRfUkVORVdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEYXRlIG9mIHNlY29uZCByZW5ld2FsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QTEFDRV9PRl9FWEFNSU5BVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQbGFjZSBvZiBleGFtaW5hdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQVBQTElDQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFwcGxpY2F0aW9uIG51bWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVk9VQ0hFUl9OVU1CRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVm91Y2hlciBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FVVEhPUklaQVRJT05fTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkF1dGhvcml6YXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GQUNVTFRZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZhY3VsdHlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZPUk1fT0ZfRURVQ0FUSU9OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZvcm0gb2YgZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETklfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkROSSBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1JFVElSRU1FTlRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJldGlyZW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QUk9GRVNTSU9OQUxfSURfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlByb2Zlc3Npb25hbCBJRCBudW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FHRV9BVF9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBZ2UgYXQgaXNzdWVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1lFQVJTX1NJTkNFX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlllYXJzIHNpbmNlIGlzc3VlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9CVFBfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBCVFAgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQlRQX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEJUUCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DM19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDMyBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQzNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQzMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0VfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRkFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZBMV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZBMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQTFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRkExIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0ZCX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEZCIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9GQl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBGQiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9HMV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBHMSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRzFfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRzEgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSCBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9JX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEkgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0lfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfS19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBLIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9LX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEsgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTEtfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTEsgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0xLX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IExLIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE4gY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfU19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBTIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9TX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVEJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVEIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RCX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRCIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RNX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRNIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTV9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTSB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVFZfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1RWX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFRWIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9WX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFYgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1ZfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgViB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfV19OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBXIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9XX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFcgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NBTElCRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2FsaWJlclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfQ0lUSVpFTlNISVBfT0ZfRklSU1RfUEVSU09OOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNpdGl6ZW5zaGlwIG9mIHRoZSBmaXJzdCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NJVElaRU5TSElQX09GX1NFQ09ORF9QRVJTT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgb2YgdGhlIHNlY29uZCBwZXJzb25cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0NWVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVlYvQ1ZDXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX0hVU0JBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiBodXNiYW5kXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0JJUlRIX09GX1dJRkU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRGF0ZSBvZiBiaXJ0aCBvZiB3aWZlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NQUtFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1ha2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX01PREVMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1vZGVsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9OVU1CRVJfT0ZfQ1lMSU5ERVJTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk51bWJlciBvZiBjeWxpbmRlcnNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1NVUk5BTUVfT0ZfSFVTQkFORF9BRlRFUl9SRUdJU1RSQVRJT046XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3VybmFtZSBvZiBodXNiYW5kIGFmdGVyIHJlZ2lzdHJhdGlvblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfU1VSTkFNRV9PRl9XSUZFX0FGVEVSX1JFR0lTVFJBVElPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTdXJuYW1lIG9mIHdpZmUgYWZ0ZXIgcmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9VUkw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVJMXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9EQVRFX09GX0lOU1VSQU5DRV9FWFBJUlk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJ5IGRhdGUgb2YgaW5zdXJhbmNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NT1JUR0FHRV9CWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb3J0Z2FnZSBieVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX0RPQ1VNRU5UX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZG9jdW1lbnQgbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9PTERfREFURV9PRl9JU1NVRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPbGQgZGF0ZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfT0xEX1BMQUNFX09GX0lTU1VFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk9sZCBwbGFjZSBvZiBpc3N1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9MUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBMUiB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTFJfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTVJfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTVIgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1SIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0hSX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEhSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IUl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIUiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9IQ19UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBIQyB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfSENfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgSEMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfTUNfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgTUMgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX01DX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE1DIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX1JFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFJFIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SRV9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSRSBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfUl9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBSIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9SX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IFIgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0FfVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0EgdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0NBX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IENBIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9DSVRJWkVOU0hJUF9TVEFUVVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ2l0aXplbnNoaXAgc3RhdHVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSUxJVEFSWV9TRVJWSUNFX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWlsaXRhcnkgc2VydmljZSBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9NSUxJVEFSWV9TRVJWSUNFX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIk1pbGl0YXJ5IHNlcnZpY2UgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0QzX0ZST006XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDMgdmFsaWQgZnJvbVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfRDNfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgRDMgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX0QzX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IEQzIHZhbGlkIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OVF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIHZhbGlkIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0RMQ0xBU1NDT0RFX05UX05PVEVTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRMIGNhdGVnb3J5IE5UIGNvZGVzXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9OVF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBOVCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVE5fRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTiB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9UTl9OT1RFUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBUTiBjb2Rlc1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfVE5fVE86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgVE4gdmFsaWQgdG9cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0FMVF9EQVRFX09GX0VYUElSWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBbHRlcm5hdGl2ZSBkYXRlIG9mIGV4cGlyeVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0RfRlJPTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRCB2YWxpZCBmcm9tXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9ETENMQVNTQ09ERV9DRF9UTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJETCBjYXRlZ29yeSBDRCB2YWxpZCB0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfRExDTEFTU0NPREVfQ0RfTk9URVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiREwgY2F0ZWdvcnkgQ0QgY29kZXNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX0ZJUlNUX05BTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfREFURV9PRl9BUlJJVkFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhdGUgb2YgYXJyaXZhbFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfSVNTVUVSX0lERU5USUZJQ0FUSU9OX05VTUJFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJc3N1ZXIgaWRlbnRpZmljYXRpb24gbnVtYmVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9QQVlNRU5UX1BFUklPRF9GUk9NOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheW1lbnQgcGVyaW9kIGZyb21cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZUX1BBWU1FTlRfUEVSSU9EX1RPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBheW1lbnQgcGVyaW9kIHRvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9WQUNDSU5BVElPTl9DRVJUSUZJQ0FURV9JREVOVElGSUVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXF1ZSB2YWNjaW5hdGlvbiBjZXJ0aWZpY2F0ZSBpZGVudGlmaWVyXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9TRUNPTkRfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZWNvbmQgbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfVEhJUkRfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGlyZCBuYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GVF9GT1VSVEhfTkFNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGb3VydGggbmFtZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlRfTEFTVF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhc3QgbmFtZVwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJPcmllbnRhdGlvbiA9IHtcbiAgICBBTEw6IDAsXG4gICAgUE9SVFJBSVQ6IDEsXG4gICAgTEFORFNDQVBFOiAyLFxuICAgIExBTkRTQ0FQRV9MRUZUOiAzLFxuICAgIExBTkRTQ0FQRV9SSUdIVDogNCxcbn1cblxuZXhwb3J0IGNvbnN0IExDSUQgPSB7XG4gICAgTEFUSU46IDAsXG4gICAgQUJLSEFaSUFOX0NZUklMTElDOiAxMDAxMSxcbiAgICBBRlJJS0FBTlM6IDEwNzgsXG4gICAgQUxCQU5JQU46IDEwNTIsXG4gICAgQU1IQVJJQzogMTExOCxcbiAgICBBUkFCSUNfQUxHRVJJQTogNTEyMSxcbiAgICBBUkFCSUNfQkFIUkFJTjogMTUzNjEsXG4gICAgQVJBQklDX0VHWVBUOiAzMDczLFxuICAgIEFSQUJJQ19JUkFROiAyMDQ5LFxuICAgIEFSQUJJQ19KT1JEQU46IDExMjY1LFxuICAgIEFSQUJJQ19LVVdBSVQ6IDEzMzEzLFxuICAgIEFSQUJJQ19MRUJBTk9OOiAxMjI4OSxcbiAgICBBUkFCSUNfTElCWUE6IDQwOTcsXG4gICAgQVJBQklDX01PUk9DQ086IDYxNDUsXG4gICAgQVJBQklDX09NQU46IDgxOTMsXG4gICAgQVJBQklDX1FBVEFSOiAxNjM4NSxcbiAgICBBUkFCSUNfU0FVRElfQVJBQklBOiAxMDI1LFxuICAgIEFSQUJJQ19TWVJJQTogMTAyNDEsXG4gICAgQVJBQklDX1RVTklTSUE6IDcxNjksXG4gICAgQVJBQklDX1VBRTogMTQzMzcsXG4gICAgQVJBQklDX1lFTUVOOiA5MjE3LFxuICAgIEFSQUJJQ19BUk1FTklBTjogMTA2NyxcbiAgICBBUkFCSUNfV09STEQ6IDQwOTYsXG4gICAgQVpFUklfQ1lSSUxJQzogMjA5MixcbiAgICBBWkVSSV9MQVRJTjogMTA2OCxcbiAgICBCQVNRVUU6IDEwNjksXG4gICAgQkFOS19DQVJEOiAxMDAwMyxcbiAgICBCQU5LX0NBUkRfQ1ZWMjogMTAwMDQsXG4gICAgQkFOS19DQVJEX05BTUU6IDEwMDAyLFxuICAgIEJBTktfQ0FSRF9OVU1CRVI6IDEwMDAwLFxuICAgIEJBTktfQ0FSRF9WQUxJRF9USFJVOiAxMDAwMSxcbiAgICBCRUxBUlVTSUFOOiAxMDU5LFxuICAgIEJFTkdBTEk6IDIxMTcsXG4gICAgQlVMR0FSSUFOOiAxMDI2LFxuICAgIENBVEFMQU46IDEwMjcsXG4gICAgQ0hJTkVTRV9IT05HS09OR19TQVI6IDMwNzYsXG4gICAgQ0hJTkVTRV9NQUNBT19TQVI6IDUxMjQsXG4gICAgQ0hJTkVTRTogMjA1MixcbiAgICBDSElORVNFX1NJTkdBUE9SRTogNDEwMCxcbiAgICBDSElORVNFX1RBSVdBTjogMTAyOCxcbiAgICBDUk9BVElBTjogMTA1MCxcbiAgICBDWkVDSDogMTAyOSxcbiAgICBEQU5JU0g6IDEwMzAsXG4gICAgRElWRUhJOiAxMTI1LFxuICAgIERVVENIX0JFTEdJVU06IDIwNjcsXG4gICAgRFVUQ0hfTkVUSEVSTEFORFM6IDEwNDMsXG4gICAgRU5HTElTSF9BVVNUUkFMSUE6IDMwODEsXG4gICAgRU5HTElTSF9CRUxJWkU6IDEwMjQ5LFxuICAgIEVOR0xJU0hfQ0FOQURBOiA0MTA1LFxuICAgIEVOR0xJU0hfQ0FSUklCRUFOOiA5MjI1LFxuICAgIEVOR0xJU0hfSVJFTEFORDogNjE1MyxcbiAgICBFTkdMSVNIX0pBTUFJQ0E6IDgyMDEsXG4gICAgRU5HTElTSF9ORVdfWkVBTEFORDogNTEyOSxcbiAgICBFTkdMSVNIX1BISUxJUFBJTkVTOiAxMzMyMSxcbiAgICBFTkdMSVNIX1NPVVRIX0FGUklDQTogNzE3NyxcbiAgICBFTkdMSVNIX1RSSU5JREFEOiAxMTI3MyxcbiAgICBFTkdMSVNIX1VLOiAyMDU3LFxuICAgIEVOR0xJU0hfVVM6IDEwMzMsXG4gICAgRU5HTElTSF9aSU1CQUJXRTogMTIyOTcsXG4gICAgRVNUT05JQU46IDEwNjEsXG4gICAgRkFFUk9FU0U6IDEwODAsXG4gICAgRkFSU0k6IDEwNjUsXG4gICAgRklOTklTSDogMTAzNSxcbiAgICBGUkVOQ0hfQkVMR0lVTTogMjA2MCxcbiAgICBGUkVOQ0hfQ0FOQURBOiAzMDg0LFxuICAgIEZSRU5DSF9GUkFOQ0U6IDEwMzYsXG4gICAgRlJFTkNIX0xVWEVNQk9VUkc6IDUxMzIsXG4gICAgRlJFTkNIX01PTkFDTzogNjE1NixcbiAgICBGUkVOQ0hfU1dJVFpFUkxBTkQ6IDQxMDgsXG4gICAgRllST19NQUNFRE9OSUFOOiAxMDcxLFxuICAgIEdBTElDSUFOOiAxMTEwLFxuICAgIEdFT1JHSUFOOiAxMDc5LFxuICAgIEdFUk1BTl9BVVNUUklBOiAzMDc5LFxuICAgIEdFUk1BTl9HRVJNQU5ZOiAxMDMxLFxuICAgIEdFUk1BTl9MSUVDSFRFTlNURUlOOiA1MTI3LFxuICAgIEdFUk1BTl9MVVhFTUJPVVJHOiA0MTAzLFxuICAgIEdFUk1BTl9TV0lUWkVSTEFORDogMjA1NSxcbiAgICBHUkVFSzogMTAzMixcbiAgICBHVUpBUkFUSTogMTA5NSxcbiAgICBIRUJSRVc6IDEwMzcsXG4gICAgSElORElfSU5ESUE6IDEwODEsXG4gICAgSFVOR0FSSUFOOiAxMDM4LFxuICAgIElDRUxBTkRJQzogMTAzOSxcbiAgICBJTkRPTkVTSUFOOiAxMDU3LFxuICAgIElUQUxJQU5fSVRBTFk6IDEwNDAsXG4gICAgSVRBTElBTl9TV0lUWkVSTEFORDogMjA2NCxcbiAgICBKQVBBTkVTRTogMTA0MSxcbiAgICBLQU5OQURBOiAxMDk5LFxuICAgIEtBU0hNSVJJOiAxMTIwLFxuICAgIEtBWkFLSDogMTA4NyxcbiAgICBLT05LQU5JOiAxMTExLFxuICAgIEtPUkVBTjogMTA0MixcbiAgICBLWVJHWVpfQ1lSSUxJQ0s6IDEwODgsXG4gICAgTEFPOiAxMTA4LFxuICAgIExBVFZJQU46IDEwNjIsXG4gICAgTElUSFVBTklBTjogMTA2MyxcbiAgICBNQUxBWV9NQUxBWVNJQTogMTA4NixcbiAgICBNQUxBWV9CUlVORUlfREFSVVNTQUxBTTogMjExMCxcbiAgICBNQVJBVEhJOiAxMTAyLFxuICAgIE1PTkdPTElBTl9DWVJJTElDOiAxMTA0LFxuICAgIE5PUldFR0lBTl9CT0tNQUw6IDEwNDQsXG4gICAgTk9SV0VHSUFOX05ZT1JTSzogMjA2OCxcbiAgICBQQVNIVE86IDExMjMsXG4gICAgUE9MSVNIOiAxMDQ1LFxuICAgIFBPUlRVR1VFU0VfQlJBWklMOiAxMDQ2LFxuICAgIFBPUlRVR1VFU0VfUE9SVFVHQUw6IDIwNzAsXG4gICAgUFVOSkFCSTogMTA5NCxcbiAgICBSSEFFVE9fUk9NQU5JQzogMTA0NyxcbiAgICBST01BTklBTjogMTA0OCxcbiAgICBSVVNTSUFOOiAxMDQ5LFxuICAgIFNBTlNLUklUOiAxMTAzLFxuICAgIFNFUkJJQU5fQ1lSSUxJQzogMzA5OCxcbiAgICBTRVJCSUFOX0xBVElOOiAyMDc0LFxuICAgIFNJTkRISTogMjEzNyxcbiAgICBTSU5ESElfSU5ESUE6IDExMTMsXG4gICAgU0lOSEFMQTogMTExNSxcbiAgICBTTE9WQUs6IDEwNTEsXG4gICAgU0xPVkVOSUFOOiAxMDYwLFxuICAgIFNQQU5JU0hfQVJHRU5USU5BOiAxMTI3NCxcbiAgICBTUEFOSVNIX0JPTElWSUE6IDE2Mzk0LFxuICAgIFNQQU5JU0hfQ0hJTEU6IDEzMzIyLFxuICAgIFNQQU5JQ0hfQ09MT01CSUE6IDkyMjYsXG4gICAgU1BBTklTSF9DT1NUQV9SSUNBOiA1MTMwLFxuICAgIFNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOiA3MTc4LFxuICAgIFNQQU5JU0hfRUNVQURPUjogMTIyOTgsXG4gICAgU1BBTklTSF9FTF9TQUxWQURPUjogMTc0MTgsXG4gICAgU1BBTklTSF9HVUFURU1BTEE6IDQxMDYsXG4gICAgU1BBTklTSF9IT05EVVJBUzogMTg0NDIsXG4gICAgU1BBTklTSF9NRVhJQ086IDIwNTgsXG4gICAgU1BBTklTSF9OSUNBUkFHVUE6IDE5NDY2LFxuICAgIFNQQU5JU0hfUEFOQU1BOiA2MTU0LFxuICAgIFNQQU5JU0hfUEFSQUdVQVk6IDE1MzcwLFxuICAgIFNQQU5JU0hfUEVSVTogMTAyNTAsXG4gICAgU1BBTklTSF9QVUVSVE9fUklDTzogMjA0OTAsXG4gICAgU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOiAxMDM0LFxuICAgIFNQQU5JU0hfSU5URVJOQVRJT05BTF9TT1JUOiAzMDgyLFxuICAgIFNQQU5JU0hfVVJVR1VBWTogMTQzNDYsXG4gICAgU1BBTklTSF9WRU5FWlVFTEE6IDgyMDIsXG4gICAgU1dBSElMSTogMTA4OSxcbiAgICBTV0VESVNIOiAxMDUzLFxuICAgIFNXRURJU0hfRklOTEFORDogMjA3NyxcbiAgICBTWVJJQUM6IDExMTQsXG4gICAgVEFNSUw6IDEwOTcsXG4gICAgVEFUQVI6IDEwOTIsXG4gICAgVEVMVUdVOiAxMDk4LFxuICAgIFRIQUlfVEhBSUxBTkQ6IDEwNTQsXG4gICAgVFVSS0lTSDogMTA1NSxcbiAgICBUQUpJS19DWVJJTExJQzogMTA2NCxcbiAgICBUVVJLTUVOOiAxMDkwLFxuICAgIFVLUkFJTklBTjogMTA1OCxcbiAgICBVUkRVOiAxMDU2LFxuICAgIFVaQkVLX0NZUklMSUM6IDIxMTUsXG4gICAgVVpCRUtfTEFUSU46IDEwOTEsXG4gICAgVklFVE5BTUVTRTogMTA2NixcbiAgICBDVENfU0lNUExJRklFRDogNTAwMDEsXG4gICAgQ1RDX1RSQURJVElPTkFMOiA1MDAwMixcblxuICAgIGdldFRyYW5zbGF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLkxBVElOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdGluXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BRlJJS0FBTlM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWZyaWthYW5zXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BQktIQVpJQU5fQ1lSSUxMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQWJraGF6aWFuIChDeXJpbGxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFMQkFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFsYmFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BTUhBUklDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFtaGFyaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19BTEdFUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQWxnZXJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19CQUhSQUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoQmFocmFpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19FR1lQVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEVneXB0KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0lSQVE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChJcmFxKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0pPUkRBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKEpvcmRhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19LVVdBSVQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChLdXdhaXQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTEVCQU5PTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKExlYmFub24pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfTElCWUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChMaWJ5YSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19NT1JPQ0NPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoTW9yb2NjbylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19PTUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFyYWJpYyAoT21hbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19RQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFFhdGFyKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1NBVURJX0FSQUJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFNhdWRpIEFyYWJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19TWVJJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFN5cmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1RVTklTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChUdW5pc2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX1VBRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFUuQS5FLilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFSQUJJQ19ZRU1FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcmFiaWMgKFllbWVuKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVJBQklDX0FSTUVOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkFybWVuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5BUkFCSUNfV09STEQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXJhYmljIChXb3JsZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkFaRVJJX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQVpFUklfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXplcmkgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFTUVVFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhc3F1ZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFOS19DQVJEOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgQ2FyZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQkFOS19DQVJEX0NWVjI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmFuayBDYXJkIENWVjJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJBTktfQ0FSRF9OQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgQ2FyZCBOYW1lXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CQU5LX0NBUkRfTlVNQkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgQ2FyZCBOdW1iZXJcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJBTktfQ0FSRF9WQUxJRF9USFJVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhbmsgQ2FyZCBWYWxpZCBUaHJ1XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5CRUxBUlVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJlbGFydXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkJFTkdBTEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQmVuZ2FsaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQlVMR0FSSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJ1bGdhcmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ0FUQUxBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDYXRhbGFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX0hPTkdLT05HX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChIb25nS29uZyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFX01BQ0FPX1NBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDaGluZXNlIChNYWNhbyBTLkEuUi4pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DSElORVNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfU0lOR0FQT1JFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFNpbmdhcG9yZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNISU5FU0VfVEFJV0FOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNoaW5lc2UgKFRhaXdhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkNST0FUSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNyb2F0aWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DWkVDSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDemVjaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuREFOSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRhbmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRElWRUhJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpdmVoaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRFVUQ0hfQkVMR0lVTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdXRjaCAoQmVsZ2l1bSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkRVVENIX05FVEhFUkxBTkRTOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1dGNoIChOZXRoZXJsYW5kcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQVVTVFJBTElBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEF1c3RyYWxpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQkVMSVpFOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEJlbGl6ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FOQURBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfQ0FSUklCRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKENhcmliYmVhbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfSVJFTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChJcmVsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9KQU1BSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKEphbWFpY2EpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX05FV19aRUFMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKE5ldyBaZWFsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9QSElMSVBQSU5FUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChQaGlsaXBwaW5lcylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfU09VVEhfQUZSSUNBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFNvdXRoIEFmcmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVOR0xJU0hfVFJJTklEQUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5nbGlzaCAoVHJpbmlkYWQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5FTkdMSVNIX1VLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9VUzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRU5HTElTSF9aSU1CQUJXRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmdsaXNoIChaaW1iYWJ3ZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkVTVE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkVzdG9uaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GQUVST0VTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGYWVyb2VzZVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRkFSU0k6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmFyc2lcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZJTk5JU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRmlubmlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0JFTEdJVU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChCZWxnaXVtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX0NBTkFEQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKENhbmFkYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkZSRU5DSF9GUkFOQ0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJlbmNoIChGcmFuY2UpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTFVYRU1CT1VSRzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGcmVuY2ggKEx1eGVtYm91cmcpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5GUkVOQ0hfTU9OQUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoTW9uYWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRlJFTkNIX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZyZW5jaCAoU3dpdHplcmxhbmQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5HQUxJQ0lBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHYWxpY2lhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR0VPUkdJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR2VvcmdpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9BVVNUUklBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoQXVzdHJpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9HRVJNQU5ZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoR2VybWFueSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MSUVDSFRFTlNURUlOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTGllY2h0ZW5zdGVpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9MVVhFTUJPVVJHOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkdlcm1hbiAoTHV4ZW1ib3VyZylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdFUk1BTl9TV0lUWkVSTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJHZXJtYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuR1JFRUs6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiR3JlZWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkdVSkFSQVRJOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkd1amFyYXRpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IRUJSRVc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSGVicmV3XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5ISU5ESV9JTkRJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIaW5kaSAoSW5kaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5IVU5HQVJJQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSHVuZ2FyaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JQ0VMQU5ESUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSWNlbGFuZGljXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JTkRPTkVTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkluZG9uZXNpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLklUQUxJQU5fSVRBTFk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSXRhbGlhbiAoSXRhbHkpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5JVEFMSUFOX1NXSVRaRVJMQU5EOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkl0YWxpYW4gKFN3aXR6ZXJsYW5kKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuSkFQQU5FU0U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSmFwYW5lc2VcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBTk5BREE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2FubmFkYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS0FTSE1JUkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS2FzaG1pcmlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktBWkFLSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJLYXpha2hcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLktPTktBTkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS29ua2FuaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS09SRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIktvcmVhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuS1lSR1laX0NZUklMSUNLOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkt5cmd5eiAoQ3lyaWxsaWMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQU86XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGFvXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5MQVRWSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxhdHZpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLkxJVEhVQU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl0aHVhbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuRllST19NQUNFRE9OSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkZZUk8gTWFjZWRvbmlhblwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfTUFMQVlTSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKE1hbGF5c2lhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFMQVlfQlJVTkVJX0RBUlVTU0FMQU06XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTWFsYXkgKEJydW5laSBEYXJ1c3NhbGFtKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTUFSQVRISTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNYXJhdGhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5NT05HT0xJQU5fQ1lSSUxJQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJNb25nb2xpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuTk9SV0VHSUFOX0JPS01BTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3J3ZWdpYW4gKEJva21hbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLk5PUldFR0lBTl9OWU9SU0s6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTm9yd2VnaWFuIChOeW5vcnNrKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUEFTSFRPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc2h0b1wiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9MSVNIOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlBvbGlzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9CUkFaSUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUG9ydHVndWVzZSAoQnJhemlsKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUE9SVFVHVUVTRV9QT1JUVUdBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQb3J0dWd1ZXNlIChQb3J0dWdhbClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlBVTkpBQkk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHVuamFiaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUkhBRVRPX1JPTUFOSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUmhhZXRvLVJvbWFuaWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlJPTUFOSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJvbWFuaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SVVNTSUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlJ1c3NpYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNBTlNLUklUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNhbnNrcml0XCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TSU5ESEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2luZGhpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TSU5ESElfSU5ESUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2luZGhpIChJbmRpYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNJTkhBTEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2luaGFsYVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9DWVJJTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNlcmJpYW4gKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU0VSQklBTl9MQVRJTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTZXJiaWFuIChMYXRpbilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZBSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92YWtcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNMT1ZFTklBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTbG92ZW5pYW5cIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQVJHRU5USU5BOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEFyZ2VudGluYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfQk9MSVZJQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChCb2xpdmlhKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9DSElMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChDaGlsZSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JQ0hfQ09MT01CSUE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29sb21iaWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0NPU1RBX1JJQ0E6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoQ29zdGEgUmljYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRE9NSU5JQ0FOX1JFUFVCTElDOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKERvbWluaWNhbiBSZXB1YmxpYylcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfRUNVQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFY3VhZG9yKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9FTF9TQUxWQURPUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChFbCBTYWx2YWRvcilcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfR1VBVEVNQUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKEd1YXRlbWFsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfSE9ORFVSQVM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoSG9uZHVyYXMpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX01FWElDTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChNZXhpY28pXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX05JQ0FSQUdVQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChOaWNhcmFndWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBTkFNQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChQYW5hbWEpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BBUkFHVUFZOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBhcmFndWF5KVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9QRVJVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFBlcnUpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1BVRVJUT19SSUNPOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFB1ZXJ0byBSaWNvKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1BBTklTSF9UUkFESVRJT05BTF9TT1JUOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFRyYWRpdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX0lOVEVSTkFUSU9OQUxfU09SVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTcGFuaXNoIChJbnRlcm5hdGlvbmFsIFNvcnQpXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TUEFOSVNIX1VSVUdVQVk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3BhbmlzaCAoVXJ1Z3VheSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNQQU5JU0hfVkVORVpVRUxBOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlNwYW5pc2ggKFZlbmV6dWVsYSlcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNXQUhJTEk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dhaGlsaVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuU1dFRElTSDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTd2VkaXNoXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5TV0VESVNIX0ZJTkxBTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU3dlZGlzaCAoRmlubGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlNZUklBQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTeXJpYWNcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRBTUlMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRhbWlsXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5UQVRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXRhclwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEVMVUdVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbHVndVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEhBSV9USEFJTEFORDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGFpIChUaGFpbGFuZClcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlRVUktJU0g6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVHVya2lzaFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVEFKSUtfQ1lSSUxMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFqaWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVFVSS01FTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdXJrbWVuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VS1JBSU5JQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVWtyYWluaWFuXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5VUkRVOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlVyZHVcIlxuICAgICAgICAgICAgY2FzZSB0aGlzLlVaQkVLX0NZUklMSUM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKEN5cmlsbGljKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVVpCRUtfTEFUSU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVXpiZWsgKExhdGluKVwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuVklFVE5BTUVTRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJWaWV0bmFtZXNlXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5DVENfU0lNUExJRklFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDVEMgU2ltcGxpZmllZFwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuQ1RDX1RSQURJVElPTkFMOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkNUQyBUcmFkaXRpb25hbFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBEb2NSZWFkZXJGcmFtZSA9IHtcbiAgICBNQVg6IFwibWF4XCIsXG4gICAgU0NFTkFSSU9fREVGQVVMVDogXCJpZDFcIixcbiAgICBOT05FOiBcIm5vbmVcIixcbiAgICBET0NVTUVOVDogXCJkb2N1bWVudFwiLFxufVxuXG5leHBvcnQgY29uc3QgZVJQUk1fTGlnaHRzID0ge1xuICAgIE5PTkU6IDAsXG4gICAgUlBSTV9MSUdIVF9VVjogMTI4LFxuICAgIFJQUk1fTElHSFRfV0hJVEVfRlVMTDogNixcbiAgICBSUFJNX0xJR0hUX0lSOiAxNjc3NzIxNixcbiAgICBSUFJNX0xpZ2h0X0lSX1RPUDogOCxcbiAgICBSUFJNX0xpZ2h0X0lSX1NJREU6IDE2LFxuICAgIFJQUk1fTGlnaHRfSVJfRnVsbDogKDggfCAxNiksXG4gICAgUlBSTV9MSUdIVF9PVkQ6IDY3MTA4ODY0LFxuXG4gICAgZ2V0VHJhbnNsYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MSUdIVF9VVjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVVlwiXG4gICAgICAgICAgICBjYXNlIHRoaXMuUlBSTV9MaWdodF9JUl9GdWxsOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIklSXCJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5SUFJNX0xJR0hUX1dISVRFX0ZVTEw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVmlzaWJsZSBsaWdodFwiXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBMaW5lQ2FwID0ge1xuICAgIEJ1dHQ6IDAsXG4gICAgUm91bmQ6IDEsXG4gICAgU3F1YXJlOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2sgPSB7XG4gICAgUG9ydHJhaXQ6IDAsXG4gICAgTGFuZHNjYXBlTGVmdDogMSxcbiAgICBMYW5kc2NhcGVSaWdodDogMixcbiAgICBQb3J0cmFpdFVwc2lkZURvd246IDMsXG4gICAgTGFuZHNjYXBlOiA0LFxuICAgIEFsbDogNSxcbiAgICBBbGxCdXRVcHNpZGVEb3duOiA2LFxufVxuXG5leHBvcnQgY29uc3QgQVZDYXB0dXJlU2Vzc2lvblByZXNldCA9IHtcbiAgICBMb3c6IDAsXG4gICAgTWVkaXVtOiAxLFxuICAgIEhpZ2g6IDIsXG4gICAgUGhvdG86IDMsXG4gICAgSW5wdXRQcmlvcml0eTogNCxcbiAgICBRSEQ5NjB4NTQwOiA1LFxuICAgIEhkMTI4MHg3MjA6IDYsXG4gICAgSGQxOTIweDEwODA6IDcsXG4gICAgSGQ0SzM4NDB4MjE2MDogOCxcbiAgICBJRnJhbWU5NjB4NTQwOiA5LFxuICAgIElGcmFtZTEyODB4NzIwOiAxMCxcbiAgICBRdmdhMzIweDI0MDogMTEsXG4gICAgVmdhNjQweDQ4MDogMTIsXG4gICAgQ2lmMzUyeDI4ODogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBBVkNhcHR1cmVEZXZpY2VQb3NpdGlvbiA9IHtcbiAgICBGcm9udDogMCxcbiAgICBCYWNrOiAxLFxuICAgIFVuc3BlY2lmaWVkOiAyLFxufVxuXG5leHBvcnQgY29uc3QgVUlWaWV3Q29udGVudE1vZGUgPSB7XG4gICAgU2NhbGVUb0ZpbGw6IDAsXG4gICAgU2NhbGVBc3BlY3RGaXQ6IDEsXG4gICAgU2NhbGVBc3BlY3RGaWxsOiAyLFxuICAgIFJlZHJhdzogMyxcbiAgICBDZW50ZXI6IDQsXG4gICAgVG9wOiA1LFxuICAgIEJvdHRvbTogNixcbiAgICBMZWZ0OiA3LFxuICAgIFJpZ2h0OiA4LFxuICAgIFRvcExlZnQ6IDksXG4gICAgVG9wUmlnaHQ6IDEwLFxuICAgIEJvdHRvbUxlZnQ6IDExLFxuICAgIEJvdHRvbVJpZ2h0OiAxMixcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBGb250U3R5bGUsXG4gICBlUlBSTV9BdXRoZW50aWNpdHksXG4gICBlUkZJRF9FcnJvckNvZGVzLFxuICAgZUxEU19QYXJzaW5nRXJyb3JDb2RlcyxcbiAgIGVSRklEX0NlcnRpZmljYXRlVHlwZSxcbiAgIFJHTE1lYXN1cmVTeXN0ZW0sXG4gICBlUlBSTV9SZXN1bHRUeXBlLFxuICAgQ2FtZXJhVHlwZXMsXG4gICBGcmFtZVNoYXBlVHlwZSxcbiAgIGVSRklEX0JhdWRSYXRlLFxuICAgZVJQUk1fRmllbGRWZXJpZmljYXRpb25SZXN1bHQsXG4gICBEb2NSZWFkZXJBY3Rpb24sXG4gICBlUHJvY2Vzc0dMQ29tbWFuZHMsXG4gICBQS0RSZXNvdXJjZVR5cGUsXG4gICBlUkZJRF9BdXRoZW50aWNhdGlvblByb2NlZHVyZVR5cGUsXG4gICBTY2VuYXJpb0lkZW50aWZpZXIsXG4gICBlUkZJRF9BY2Nlc3NDb250cm9sX1Byb2NlZHVyZVR5cGUsXG4gICBlUkZJRF9Ob3RpZmljYXRpb25Db2RlcyxcbiAgIGVSRklEX1Bhc3N3b3JkX1R5cGUsXG4gICBCYXJjb2RlUmVzdWx0LFxuICAgZVNpZ25NYW5hZ2VtZW50QWN0aW9uLFxuICAgZUNoZWNrRGlhZ25vc2UsXG4gICBSRklERGVsZWdhdGUsXG4gICBQcm9jZXNzaW5nRmluaXNoZWRTdGF0dXMsXG4gICBEb2NGb3JtYXQsXG4gICBlTERTX1BhcnNpbmdOb3RpZmljYXRpb25Db2RlcyxcbiAgIGVJbWFnZVF1YWxpdHlDaGVja1R5cGUsXG4gICBNUlpGb3JtYXQsXG4gICBCYXJjb2RlVHlwZSxcbiAgIGVSUFJNX1NlY3VyaXR5RmVhdHVyZVR5cGUsXG4gICBPbmxpbmVNb2RlLFxuICAgZVJGSURfU0RLX1Byb2ZpbGVyVHlwZSxcbiAgIGRpRG9jVHlwZSxcbiAgIEhvbG9BbmltYXRpb25UeXBlLFxuICAgZVJlcXVlc3RDb21tYW5kLFxuICAgSW1hZ2VGb3JtYXQsXG4gICBlR3JhcGhpY0ZpZWxkVHlwZSxcbiAgIENhbWVyYU1vZGUsXG4gICBDYXB0dXJlTW9kZSxcbiAgIGVDaGVja1Jlc3VsdCxcbiAgIGVSRklEX1Rlcm1pbmFsVHlwZSxcbiAgIGVSRklEX0RhdGFGaWxlX1R5cGUsXG4gICBlVmlzdWFsRmllbGRUeXBlLFxuICAgRG9jUmVhZGVyT3JpZW50YXRpb24sXG4gICBMQ0lELFxuICAgRG9jUmVhZGVyRnJhbWUsXG4gICBlUlBSTV9MaWdodHMsXG4gICBMaW5lQ2FwLFxuICAgVUlJbnRlcmZhY2VPcmllbnRhdGlvbk1hc2ssXG4gICBBVkNhcHR1cmVTZXNzaW9uUHJlc2V0LFxuICAgQVZDYXB0dXJlRGV2aWNlUG9zaXRpb24sXG4gICBVSVZpZXdDb250ZW50TW9kZSxcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudFJlYWRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRG9jdW1lbnQgUmVhZGVyLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG9jdW1lbnRSZWFkZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RvY3VtZW50LXJlYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRG9jdW1lbnRSZWFkZXI6IERvY3VtZW50UmVhZGVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5Eb2N1bWVudFJlYWRlci5wcmVwYXJlRGF0YWJhc2UoXCJGdWxsXCIpLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAqICAgICAgICBpZiAobWVzc2FnZSA9PSBcImRhdGFiYXNlIHByZXBhcmVkXCIpIHtcbiAqICAgICAgICAgIHRoaXMuRG9jdW1lbnRSZWFkZXIuaW5pdGlhbGl6ZVJlYWRlcihsaWNlbnNlKS50aGVuKG0gPT4gb25Jbml0aWFsaXplZCgpKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICogICAgICAgIH1cbiAqICAgICAgfSlcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0RvY3VtZW50UmVhZGVyJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1yZWFkZXItYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdEb2N1bWVudFJlYWRlcicsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRG9jdW1lbnRSZWFkZXItQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UmVhZGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBJbml0aWFsbHkgbWFkZSBmb3IgY2FwYWNpdG9yIGFzIGl0IGhhcyBubyBjb252ZW5pZW50IHdheSB0byByZWFkIGFzc2V0c1xuICAgICAqICBBbGxvd3MgeW91IHRvIGluaXRpYWxpemUgZG9jdW1lbnQgcmVhZGVyIHdpdGhvdXQgcmVhZGluZyBsaWNlbnNlIHlvdXJzZWxmLlxuICAgICAqICBMaWNlbnNlIHdpbGwgYmUgYXV0b21hdGljYWxseSByZWFkIGZyb21cbiAgICAgKiAgQW5kcm9pZDogXCJhbmRyb2lkL2FwcC9zcmMvbWFpbi9hc3NldHMvcmVndWxhLmxpY2Vuc2VcIlxuICAgICAqICBpT1M6IFwiaW9zL0FwcC9BcHAvcmVndWxhLmxpY2Vuc2VcIlxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplUmVhZGVyQXV0b21hdGljYWxseSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIENoZWNrcyBpZiBhbGwgcmVxdWlyZWQgYmx1ZXRvb3RoIHBlcm1pc3Npb25zIGFyZSBncmFudGVkIGFuZCByZXF1ZXN0cyB0aGVtIGlmIG5lZWRlZChBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TKVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0JsZVBlcm1pc3Npb25zR3JhbnRlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFNlYXJjaGVzIGZvciBibGUgZGV2aWNlcyhBbmRyb2lkIG9ubHksIGlnbm9yZWQgb24gaU9TKVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydEJsdWV0b290aFNlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBJbml0aWFsaXplcyBkb2N1bWVudCByZWFkZXIgd2l0aCBsaWNlbnNlIGZyb20gY29ubmVjdGVkIERldmljZTczMTAoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZVJlYWRlckJsZURldmljZUNvbmZpZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHJldHVybnMgdGFnIHByb3BlcnR5IG9mIERvY3VtZW50UmVhZGVyIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFRhZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBBUEkgdmVyc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRBUElWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0QXZhaWxhYmxlU2NlbmFyaW9zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiBORkMgY2hpcCByZWFkaW5nIGNhcGFiaWxpdHkgaXMgYXZhaWxhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzUkZJREF2YWlsYWJsZUZvclVzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBDb3JlIG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29yZU1vZGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgQ29yZSB2ZXJzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENvcmVWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIGV4cG9ydCBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBkYXRhYmFzZSBJRFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXREYXRhYmFzZUlEKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIGRhdGFiYXNlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBjaGVjayBpZiB0aGUgU0RLIGlzIHJlYWR5IGZvciB1c2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJJc1JlYWR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgQWxsb3dzIHlvdSB0byBnZXQgdGhlIERvY3VtZW50IFJlYWRlciBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RG9jdW1lbnRSZWFkZXJTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBjb3VudHJpZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VDb3VudHJpZXNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgbnVtYmVyIG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RGF0YWJhc2VEb2N1bWVudHNOdW1iZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCB0aGUgc2VsZWN0ZWQgc2NlbmFyaW9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VsZWN0ZWRTY2VuYXJpbygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBwYXRoIHRvIHRoZSBmb2xkZXIgb2YgdGhlIGN1cnJlbnQgc2Vzc2lvbi4gQmVmb3JlIHVzaW5nIHRoaXMsIGVuYWJsZSBsb2cgc2F2aW5nLiBFYWNoIG5ldyBzZXNzaW9uIHByb3ZpZGVzIGEgZGlmZmVyZW50IHBhdGhcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2Vzc2lvbkxvZ0ZvbGRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gZ2V0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBkYXRhYmFzZSBkb2N1bWVudHMgdXNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldERhdGFiYXNlRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gb3BlbiB0aGUgY2FtZXJhIHByZXZpZXcgd2hpY2ggd2lsbCBwYXNzIGZyYW1lcyBmb3IgcmVjb2duaXRpb24gYW5kIHJldHVybiByZXN1bHRzIGluIHRoZSBjb21wbGV0aW9uIGJsb2NrIHdoZW4gdGhleSBhcmUgcmVhZHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzaG93U2Nhbm5lcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBpbmRpY2F0ZSB0aGFuIHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBuZXh0IHBhZ2UgaXMgc3RhcnRlZFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1BhZ2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc3RhcnQgYSBuZXcgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydE5ld1Nlc3Npb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCBiZWxvdyB0byBvcGVuIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBzdGFydCBpdHMgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0UkZJRFJlYWRlcigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGUgbWV0aG9kIGJlbG93IHRvIGNsb3NlIHRoZSBSRklEIGNoaXAgcmVhZGluZyBjb250cm9sbGVyIGFuZCBlbmQgaXRzIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcFJGSURSZWFkZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhlIG1ldGhvZCB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgYWZ0ZXIgc3RvcCByZWFkaW5nIFJGSUQgb24gaU9TXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wUkZJRFJlYWRlcldpdGhFcnJvck1lc3NhZ2UobWVzc2FnZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gY2xvc2UgY2FtZXJhIHByZXZpZXcgYW5kIHN0b3AgcHJvY2Vzc2luZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wU2Nhbm5lcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkZWluaXRpYWxpemUgRG9jdW1lbnQgUmVhZGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZVJlYWRlcigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgYSBtb2JpbGUgYXV0aGVudGljYXRvciBpcyBhdmFpbGFibGUgZm9yIHVzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0F1dGhlbnRpY2F0b3JBdmFpbGFibGVGb3JVc2UoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IHRoZSBjb25maWdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0Q29uZmlnKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCB0aGUgUkZJRCBzY2VuYXJpb1xuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRSZmlkU2NlbmFyaW8oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhbiBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUV4cGlyeURhdGUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGdldCBhIGxpc3Qgb2YgY291bnRyeSBpZGVudGlmaWVycyB0aGF0IGFyZSBkZWZpbmVkIGZvciBwcm9jZXNzaW5nIGluIHRoZSBsaWNlbnNlLiBJZiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGFyZSBubyByZXN0cmljdGlvbnMgZm9yIHByb2Nlc3NpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0TGljZW5zZUNvdW50cnlGaWx0ZXIoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgeW91IHRvIGNoZWNrIGlmIE5GQyBjaGlwIHJlYWRpbmcgY2FwYWJpbGl0eSBpcyBhdmFpbGFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbGljZW5zZUlzUmZpZEF2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBnZXQgdGhlIGNhbWVyYSBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldENhbWVyYVNlc3Npb25Jc1BhdXNlZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gcmVtb3ZlIHRoZSBhZGRlZCBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZW1vdmVEYXRhYmFzZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIEFsbG93cyB5b3UgdG8gY2FuY2VsIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjYW5jZWxEQlVwZGF0ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZXNldCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHJlc2V0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBjbGVhciBQS0QgY2VydGlmaWNhdGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNsZWFyUEtEQ2VydGlmaWNhdGVzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHN0YXJ0IFJGSUQgY2hpcCBwcm9jZXNzaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVhZFJGSUQoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gZ2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UmZpZFNlc3Npb25TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFJGSUQgZGVsZWdhdGUgb24gaU9TIHRvIGVpdGhlciBudWxsLFxuICAgICAqICBkZWxlZ2F0ZSB3aXRoIG9uUmVxdWVzdFBBQ2VydGlmaWNhdGVzIGNhbGxiYWNrIG9yIHdpdGhvdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBkZWxlZ2F0ZSB1c2UgZW51bSBSRklERGVsZWdhdGVcbiAgICAgKiAgTlVMTCA9IDBcbiAgICAgKiAgTk9fUEEgPSAxXG4gICAgICogIEZVTEwgPSAyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZmlkRGVsZWdhdGUoZGVsZWdhdGU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGVuYWJsZSBDb3JlIGxvZ3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9nc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0RW5hYmxlQ29yZUxvZ3MobG9nczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBBbGxvd3MgdG8gYWRkIGEgbGlzdCBvZiBQS0QgY2VydGlmaWNhdGVzIGR1cmluZyBpbml0aWFsaXphdGlvbiBwcm9jZXNzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIENvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UEtEQ2VydGlmaWNhdGVbXX0gY2VydGlmaWNhdGVzIEFycmF5IG9mIGpzb25PYmplY3RzIHdpdGggc3RydWN0dXJlIHtiaW5hcnlEYXRhOiBiaW5hcnlEYXRhLCByZXNvdXJjZVR5cGU6IHJlc291cmNlVHlwZSwgcHJpdmF0ZUtleTogcHJpdmF0ZUtleX1cbiAgICAgKiAgYmluYXJ5RGF0YSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiAgcmVzb3VyY2VUeXBlIC0gbnVtYmVyXG4gICAgICogIHByaXZhdGVLZXkob3B0aW9uYWwpIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUEtEQ2VydGlmaWNhdGVzKGNlcnRpZmljYXRlczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBJZiBzZXQsIHRoZSBjYW1lcmEgc2Vzc2lvbiB3aWxsIGJlIHBhdXNlZCBhcyBzb29uIGFzIHRoZSByZXN1bHQgaXMgcmVjZWl2ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDYW1lcmFTZXNzaW9uSXNQYXVzZWQocGF1c2VkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgRG9jdW1lbnRSZWFkZXIudGFnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIHRhZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VGFnKHRhZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBjaGVja3MgZm9yIGRhdGFiYXNlIHVwZGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlSWQgaWQgb2YgdGhlIGRhdGFiYXNlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjaGVja0RhdGFiYXNlVXBkYXRlKGRhdGFiYXNlSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIGdldCBhIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW8gU2NlbmFyaW9gcyB1bmlxdWUgaWRlbnRpZmllclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2NlbmFyaW8oc2NlbmFyaW86IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBpbWFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGltYWdlcyBBcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIGJhc2U2NCByZXByZXNlbnRhdGlvbnMgb2YgaW1hZ2VzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZUltYWdlcyhpbWFnZXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc2hvd1NjYW5uZXJXaXRoQ2FtZXJhSUQoY2FtZXJhSUQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIGZvciBnZXR0aW5nIGFsd2F5cyB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YWJhc2VUeXBlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJ1bkF1dG9VcGRhdGUoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgY29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldENvbmZpZyhjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhbiBSRklEIHNjZW5hcmlvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2NlbmFyaW8gSnNvbk9iamVjdCB3aXRoIHN0cnVjdHVyZSB7bmFtZT86IHZhbHVlMSxuYW1lPzogdmFsdWUyLCAuLi59XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTY2VuYXJpbyhzY2VuYXJpbzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gaW5pdGlhbGl6ZSBEb2N1bWVudCBSZWFkZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAgICBcImxpY2Vuc2VcIjogXCJsaWNlbnNlIGJhc2U2NCBzdHJpbmcobmVjZXNzYXJ5KVwiXG4gICAgICogICAgICBcImN1c3RvbURiXCI6IFwiY3VzdG9tIGRhdGFiYXNlIGJhc2U2NCBzdHJpbmcoQW5kcm9pZCBvbmx5LCBpZ25vcmVkIG9uIGlPUylcIlxuICAgICAqICAgICAgXCJkYXRhYmFzZVBhdGhcIjogXCJkYXRhYmFzZSBwYXRoKGlPUyBvbmx5LCBpZ25vcmVkIG9uIGFuZHJvaWQpXCJcbiAgICAgKiAgICAgIFwibGljZW5zZVVwZGF0ZVwiOiB0cnVlXG4gICAgICogICAgICBcImRlbGF5ZWROTkxvYWRcIjogZmFsc2VcbiAgICAgKiAgICAgIFwiYmxhY2tMaXN0XCI6IHt9IC8vIEFuZHJvaWQgb25seSwgaWdub3JlZCBvbiBpT1NcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVSZWFkZXIoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBkb3dubG9hZCBhIGRhdGFiYXNlIGZyb20gdGhlIFJlZ3VsYSdzIHNlcnZlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFiYXNlVHlwZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBwcmVwYXJlRGF0YWJhc2UoZGF0YWJhc2VUeXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYW4gaW1hZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICByZWNvZ25pemVJbWFnZShpbWFnZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcmVjb2duaXplIGFuIGltYWdlIHVzaW5nIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ynl0ZVtdfSBkYXRhIEltYWdlYHMgYnl0ZVtdIHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZURhdGEoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IGFuIFJGSUQgc2Vzc2lvbiBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJmaWRTZXNzaW9uU3RhdHVzKHN0YXR1czogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2VuZCBQQUNlcnRpZmljYXRlcyB0byB0aGUgY2hpcCBhZnRlciB5b3VgdmUgZ290IGEgcmVxdWVzdCBmb3IgdGhlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtQS0RDZXJ0aWZpY2F0ZVtdfSBjZXJ0aWZpY2F0ZXMgQXJyYXkgb2YganNvbk9iamVjdHMgd2l0aCBzdHJ1Y3R1cmUge2JpbmFyeURhdGE6IGJpbmFyeURhdGEsIHJlc291cmNlVHlwZTogcmVzb3VyY2VUeXBlLCBwcml2YXRlS2V5OiBwcml2YXRlS2V5fVxuICAgICAqICBiaW5hcnlEYXRhIC0gYmFzZTY0IHN0cmluZ1xuICAgICAqICByZXNvdXJjZVR5cGUgLSBudW1iZXJcbiAgICAgKiAgcHJpdmF0ZUtleShvcHRpb25hbCkgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcm92aWRlUEFDZXJ0aWZpY2F0ZXMoY2VydGlmaWNhdGVzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZW5kIFRBQ2VydGlmaWNhdGVzIHRvIHRoZSBjaGlwIGFmdGVyIHlvdWB2ZSBnb3QgYSByZXF1ZXN0IGZvciB0aGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BLRENlcnRpZmljYXRlW119IGNlcnRpZmljYXRlcyBBcnJheSBvZiBqc29uT2JqZWN0cyB3aXRoIHN0cnVjdHVyZSB7YmluYXJ5RGF0YTogYmluYXJ5RGF0YSwgcmVzb3VyY2VUeXBlOiByZXNvdXJjZVR5cGUsIHByaXZhdGVLZXk6IHByaXZhdGVLZXl9XG4gICAgICogIGJpbmFyeURhdGEgLSBiYXNlNjQgc3RyaW5nXG4gICAgICogIHJlc291cmNlVHlwZSAtIG51bWJlclxuICAgICAqICBwcml2YXRlS2V5KG9wdGlvbmFsKSAtIGJhc2U2NCBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByb3ZpZGVUQUNlcnRpZmljYXRlcyhjZXJ0aWZpY2F0ZXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgVEFTaWduYXR1cmUgdG8gdGhlIGNoaXAgYWZ0ZXIgeW91YHZlIGdvdCBhIHJlcXVlc3QgZm9yIHRoZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ynl0ZVtdfSBzaWduYXR1cmUgYnl0ZSBhcnJheVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJvdmlkZVRBU2lnbmF0dXJlKHNpZ25hdHVyZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gcGFyc2UgcmVzdWx0cyByZXR1cm5lZCBieSB0aGUgc2VydmVyIHdoZW4gdXNpbmcgYW4gZW5jcnlwdGVkIGxpY2Vuc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBqc29uIHJlc3VsdHMgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHBhcnNlQ29yZVJlc3VsdHMoanNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBUaGUgbWV0aG9kIGNhbGwgc2V0cyB0aGUgZ2l2ZW4gVENDUGFyYW1zIHRvIHRoZSBSRklEIHNlc3Npb24uIFRoZSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCB0byBiZSBzZXQgYmVmb3JlIHN0YXJ0aW5nIFJGSUQgc2Vzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAgICBcInNlcnZpY2VVcmxUQVwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiAgICAgIFwic2VydmljZVVybFBBXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqICAgICAgXCJwZnhDZXJ0VXJsXCI6IFwic29tZSBzdHJpbmdcIlxuICAgICAqICAgICAgXCJwZnhDZXJ0XCI6IFwiYmFzZTY0IGVuY29kZWQgYmluYXJ5XCJcbiAgICAgKiAgICAgIFwicGZ4UGFzc1BocmFzZVwiOiBcInNvbWUgc3RyaW5nXCJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFRDQ1BhcmFtcyhwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHJlY29nbml6ZSBhbiBpbWFnZSB3aXRoIG9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSBJbWFnZWBzIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEpzb25PYmplY3Qgd2l0aCBzdHJ1Y3R1cmVcbiAgICAgKiAgICB7ZnVuY3Rpb25hbGl0eT86IHtuYW1lPzogdmFsdWUxLCBuYW1lPzogdmFsdWUyLCAuLi59LFxuICAgICAqICAgIGN1c3RvbWl6YXRpb24/OiB7bmFtZT86IHZhbHVlMywgbmFtZT86IHZhbHVlNCwgLi4ufSxcbiAgICAgKiAgICBwcm9jZXNzUGFyYW1zPzoge25hbWU/OiB2YWx1ZTUsIG5hbWU/OiB2YWx1ZTYsIC4uLn19XG4gICAgICogIG5hbWUgLSBzdHJpbmdcbiAgICAgKiAgdmFsdWUgLSBhbnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoT3B0cyhpbWFnZTogYW55LCBvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnl0ZVN0cmluZ1xuICAgICAqIEBwYXJhbSB7SW1hZ2VJbnB1dFBhcmFtfSBwYXJhbXMgSW1hZ2UgaW5wdXQgcGFyYW1zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHJlY29nbml6ZVZpZGVvRnJhbWUoYnl0ZVN0cmluZzogYW55LCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIG9wZW4gdGhlIGNhbWVyYSBwcmV2aWV3IHdpdGggdGhlIGRlc2lyZWQgY2FtZXJhIElEIGFuZCBvcHRpb25zIHdoaWNoIHdpbGwgcGFzcyBmcmFtZXMgZm9yIHJlY29nbml0aW9uIGFuZCByZXR1cm4gcmVzdWx0cyBpbiB0aGUgY29tcGxldGlvbiBibG9jayB3aGVuIHRoZXkgYXJlIHJlYWR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSURcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBKc29uT2JqZWN0IHdpdGggc3RydWN0dXJlXG4gICAgICogICAge2Z1bmN0aW9uYWxpdHk/OiB7bmFtZT86IHZhbHVlMSwgbmFtZT86IHZhbHVlMiwgLi4ufSxcbiAgICAgKiAgICBjdXN0b21pemF0aW9uPzoge25hbWU/OiB2YWx1ZTMsIG5hbWU/OiB2YWx1ZTQsIC4uLn0sXG4gICAgICogICAgcHJvY2Vzc1BhcmFtcz86IHtuYW1lPzogdmFsdWU1LCBuYW1lPzogdmFsdWU2LCAuLi59fVxuICAgICAqICBuYW1lIC0gc3RyaW5nXG4gICAgICogIHZhbHVlIC0gYW55XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNob3dTY2FubmVyV2l0aENhbWVyYUlEQW5kT3B0cyhjYW1lcmFJRDogYW55LCBvcHRpb25zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgYSBzdHJlYW0gb2YgZnJhbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgSW1hZ2VgcyBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgcmVjb2duaXplSW1hZ2VXaXRoQ2FtZXJhTW9kZShpbWFnZTogYW55LCBtb2RlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byByZWNvZ25pemUgaW1hZ2VzIHVzaW5nIEltYWdlSW5wdXREYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlSW5wdXREYXRhW119IGltYWdlcyBhcnJheSBvZiBJbWFnZUlucHV0RGF0YSBvYmplY3RzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICByZWNvZ25pemVJbWFnZXNXaXRoSW1hZ2VJbnB1dHMoaW1hZ2VzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxufSJdfQ==