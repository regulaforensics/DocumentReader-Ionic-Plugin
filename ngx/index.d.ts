import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare class DocumentReaderScenario {
    uvTorch?: boolean;
    seriesProcessMode?: boolean;
    name?: string;
    caption?: string;
    description?: string;
    static fromJson(jsonObject?: any): DocumentReaderScenario;
}
export declare class DocumentReaderScenarioFull {
    uvTorch?: boolean;
    frameOrientation?: number;
    faceExt?: boolean;
    multiPageOff?: number;
    seriesProcessMode?: boolean;
    frameKWHLandscape?: number;
    frameKWHPortrait?: number;
    frameKWHDoublePageSpreadPortrait?: number;
    frameKWHDoublePageSpreadLandscape?: number;
    name?: string;
    caption?: string;
    description?: string;
    manualCrop?: boolean;
    static fromJson(jsonObject?: any): DocumentReaderScenarioFull;
}
export declare class FaceMetaData {
    ID?: number;
    rollAngle?: number;
    bounds?: Bounds;
    static fromJson(jsonObject?: any): FaceMetaData;
}
export declare class Bounds {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    static fromJson(jsonObject?: any): Bounds;
}
export declare class Rect {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
    static fromJson(jsonObject?: any): Rect;
}
export declare class DocReaderFieldRect {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
    static fromJson(jsonObject?: any): DocReaderFieldRect;
}
export declare class DocumentReaderGraphicField {
    sourceType?: number;
    fieldType?: number;
    lightType?: number;
    pageIndex?: number;
    fieldName?: string;
    lightName?: string;
    value?: string;
    fieldRect?: DocReaderFieldRect;
    static fromJson(jsonObject?: any): DocumentReaderGraphicField;
}
export declare class DocumentReaderGraphicResult {
    fields?: DocumentReaderGraphicField[];
    static fromJson(jsonObject?: any): DocumentReaderGraphicResult;
}
export declare class DocumentReaderValue {
    pageIndex?: number;
    sourceType?: number;
    validity?: number;
    probability?: number;
    value?: string;
    originalValue?: string;
    boundRect?: Rect;
    comparison?: Record<number, number>;
    static fromJson(jsonObject?: any): DocumentReaderValue;
}
export declare class DocumentReaderTextField {
    fieldType?: number;
    lcid?: number;
    status?: number;
    lcidName?: string;
    fieldName?: string;
    value?: DocumentReaderValue;
    values?: DocumentReaderValue[];
    static fromJson(jsonObject?: any): DocumentReaderTextField;
}
export declare class DocumentReaderTextResult {
    status?: number;
    fields?: DocumentReaderTextField[];
    static fromJson(jsonObject?: any): DocumentReaderTextResult;
}
export declare class Coordinate {
    x?: number;
    y?: number;
    static fromJson(jsonObject?: any): Coordinate;
}
export declare class ElementPosition {
    docFormat?: number;
    width?: number;
    height?: number;
    dpi?: number;
    pageIndex?: number;
    inverse?: number;
    perspectiveTr?: number;
    objArea?: number;
    objIntAngleDev?: number;
    resultStatus?: number;
    angle?: number;
    center?: Coordinate;
    leftTop?: Coordinate;
    leftBottom?: Coordinate;
    rightTop?: Coordinate;
    rightBottom?: Coordinate;
    static fromJson(jsonObject?: any): ElementPosition;
}
export declare class ImageQuality {
    featureType?: number;
    result?: number;
    type?: number;
    static fromJson(jsonObject?: any): ImageQuality;
}
export declare class ImageQualityGroup {
    count?: number;
    result?: number;
    imageQualityList?: ImageQuality[];
    static fromJson(jsonObject?: any): ImageQualityGroup;
}
export declare class DocumentReaderDocumentType {
    pageIndex?: number;
    documentID?: number;
    dType?: number;
    dFormat?: number;
    dMRZ?: boolean;
    name?: string;
    ICAOCode?: string;
    dDescription?: string;
    dYear?: string;
    dCountryName?: string;
    FDSID?: number[];
    static fromJson(jsonObject?: any): DocumentReaderDocumentType;
}
export declare class DocumentReaderNotification {
    code?: number;
    number?: number;
    value?: number;
    static fromJson(jsonObject?: any): DocumentReaderNotification;
}
export declare class AccessControlProcedureType {
    activeOptionIdx?: number;
    type?: number;
    status?: number;
    notifications?: number[];
    static fromJson(jsonObject?: any): AccessControlProcedureType;
}
export declare class FileData {
    length?: number;
    type?: number;
    status?: number;
    data?: string;
    static fromJson(jsonObject?: any): FileData;
}
export declare class CertificateData {
    length?: number;
    data?: string;
    static fromJson(jsonObject?: any): CertificateData;
}
export declare class SecurityObjectCertificates {
    securityObject?: CertificateData;
    static fromJson(jsonObject?: any): SecurityObjectCertificates;
}
export declare class File {
    readingTime?: number;
    type?: number;
    pAStatus?: number;
    readingStatus?: number;
    fileID?: string;
    fileData?: FileData;
    certificates?: SecurityObjectCertificates;
    docFieldsText?: number[];
    docFieldsGraphics?: number[];
    docFieldsOriginals?: number[];
    notifications?: number[];
    static fromJson(jsonObject?: any): File;
}
export declare class Application {
    type?: number;
    status?: number;
    applicationID?: string;
    dataHashAlgorithm?: string;
    unicodeVersion?: string;
    version?: string;
    files?: File[];
    static fromJson(jsonObject?: any): Application;
}
export declare class Value {
    length?: number;
    type?: number;
    status?: number;
    data?: string;
    format?: string;
    static fromJson(jsonObject?: any): Value;
}
export declare class Attribute {
    type?: string;
    value?: Value;
    static fromJson(jsonObject?: any): Attribute;
}
export declare class Authority {
    data?: string;
    friendlyName?: Value;
    attributes?: Attribute[];
    static fromJson(jsonObject?: any): Authority;
}
export declare class Extension {
    data?: string;
    type?: string;
    static fromJson(jsonObject?: any): Extension;
}
export declare class Validity {
    notAfter?: Value;
    notBefore?: Value;
    static fromJson(jsonObject?: any): Validity;
}
export declare class CertificateChain {
    origin?: number;
    type?: number;
    version?: number;
    paStatus?: number;
    serialNumber?: string;
    signatureAlgorithm?: string;
    subjectPKAlgorithm?: string;
    fileName?: Value;
    validity?: Validity;
    issuer?: Authority;
    subject?: Authority;
    notifications?: number[];
    extensions?: Extension[];
    static fromJson(jsonObject?: any): CertificateChain;
}
export declare class SignerInfo {
    version?: number;
    paStatus?: number;
    dataToHash?: string;
    digestAlgorithm?: string;
    signatureAlgorithm?: string;
    serialNumber?: Value;
    signature?: Value;
    subjectKeyIdentifier?: Value;
    issuer?: Authority;
    notifications?: number[];
    signedAttributes?: Extension[];
    certificateChain?: CertificateChain[];
    static fromJson(jsonObject?: any): SignerInfo;
}
export declare class SecurityObject {
    fileReference?: number;
    version?: number;
    objectType?: string;
    notifications?: number[];
    signerInfos?: SignerInfo[];
    static fromJson(jsonObject?: any): SecurityObject;
}
export declare class CardProperties {
    aTQA?: number;
    bitRateR?: number;
    bitRateS?: number;
    chipTypeA?: number;
    mifareMemory?: number;
    rfidType?: number;
    sAK?: number;
    support4?: boolean;
    supportMifare?: boolean;
    aTQB?: string;
    aTR?: string;
    baudrate1?: string;
    baudrate2?: string;
    uID?: string;
    static fromJson(jsonObject?: any): CardProperties;
}
export declare class RFIDSessionData {
    totalBytesReceived?: number;
    totalBytesSent?: number;
    status?: number;
    extLeSupport?: number;
    processTime?: number;
    cardProperties?: CardProperties;
    sessionDataStatus?: RFIDSessionDataStatus;
    accessControls?: AccessControlProcedureType[];
    applications?: Application[];
    securityObjects?: SecurityObject[];
    static fromJson(jsonObject?: any): RFIDSessionData;
}
export declare class DocumentReaderAuthenticityCheck {
    type?: number;
    status?: number;
    typeName?: string;
    pageIndex?: number;
    elements?: DocumentReaderAuthenticityElement[];
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityCheck;
}
export declare class PDF417Info {
    errorLevel?: number;
    columns?: number;
    rows?: number;
    static fromJson(jsonObject?: any): PDF417Info;
}
export declare class RFIDSessionDataStatus {
    AA?: number;
    BAC?: number;
    CA?: number;
    PA?: number;
    PACE?: number;
    TA?: number;
    overallStatus?: number;
    static fromJson(jsonObject?: any): RFIDSessionDataStatus;
}
export declare class DocumentReaderBarcodeResult {
    fields?: DocumentReaderBarcodeField[];
    static fromJson(jsonObject?: any): DocumentReaderBarcodeResult;
}
export declare class DocumentReaderBarcodeField {
    barcodeType?: number;
    status?: number;
    pageIndex?: number;
    pdf417Info?: PDF417Info;
    data?: any[];
    static fromJson(jsonObject?: any): DocumentReaderBarcodeField;
}
export declare class DocumentReaderAuthenticityResult {
    status?: number;
    checks?: DocumentReaderAuthenticityCheck[];
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityResult;
}
export declare class DocumentReaderAuthenticityElement {
    status?: number;
    elementType?: number;
    elementDiagnose?: number;
    elementTypeName?: string;
    elementDiagnoseName?: string;
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityElement;
}
export declare class DocumentReaderCompletion {
    action?: number;
    results?: DocumentReaderResults;
    error?: Throwable;
    static fromJson(jsonObject?: any): DocumentReaderCompletion;
}
export declare class Throwable {
    localizedMessage?: string;
    message?: string;
    string?: string;
    stackTrace?: StackTraceElement[];
    static fromJson(jsonObject?: any): Throwable;
}
export declare class StackTraceElement {
    lineNumber?: number;
    isNativeMethod?: boolean;
    className?: string;
    fileName?: string;
    methodName?: string;
    string?: string;
    static fromJson(jsonObject?: any): StackTraceElement;
}
export declare class DocumentReaderResults {
    chipPage?: number;
    overallResult?: number;
    processingFinishedStatus?: number;
    elapsedTime?: number;
    elapsedTimeRFID?: number;
    morePagesAvailable?: number;
    rfidResult?: number;
    highResolution?: boolean;
    graphicResult?: DocumentReaderGraphicResult;
    textResult?: DocumentReaderTextResult;
    documentPosition?: ElementPosition[];
    barcodePosition?: ElementPosition[];
    mrzPosition?: ElementPosition[];
    imageQuality?: ImageQualityGroup[];
    rawResult?: string;
    documentReaderNotification?: DocumentReaderNotification;
    rfidSessionData?: RFIDSessionData;
    authenticityResult?: DocumentReaderAuthenticityResult;
    barcodeResult?: DocumentReaderBarcodeResult;
    documentType?: DocumentReaderDocumentType[];
    getTextFieldValueByType?({ fieldType, lcid, source, original }: {
        fieldType: number;
        lcid?: number;
        source?: number;
        original?: boolean;
    }): string;
    getTextFieldStatusByType(fieldType: number, lcid?: number): number;
    getGraphicFieldImageByType?({ fieldType, source, light, pageIndex }: {
        fieldType: number;
        source?: number;
        light?: number;
        pageIndex?: number;
    }): string;
    getQualityResult({ imageQualityCheckType, securityFeature }: {
        imageQualityCheckType: number;
        securityFeature?: number;
    }): number;
    findByTypeAndLcid?(type: number, lcid: number): DocumentReaderTextField;
    findBySource(field: DocumentReaderTextField, sourceType: number): DocumentReaderValue;
    static fromJson(jsonObject?: any): DocumentReaderResults;
}
export declare const BarcodeResult: {
    NO_ERR: number;
    NULL_PTR_ERR: number;
    BAD_ARG_ERR: number;
    SIZE_ERR: number;
    RANGE_ERR: number;
    INTERNAL_ERR: number;
    TRY_EXCEPT_ERR: number;
    BAR_CODE_NOT_FOUND: number;
    BAR_CODE_DECODE_ERR: number;
    NO_USER_DLL_FOUND: number;
    NO_IPP_DLL_FOUND: number;
    IPP_EXEC_ERR: number;
    IPP_TRY_EXCEPT_ERR: number;
    BARCODE_ERROR_INPUT_PARAM: number;
    BARCODE_ERROR_FINIT: number;
    BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: number;
    BARCODE_ERROR_INNER_PROBLEM: number;
    BARCODE_ERROR_DECODE_1D_BAD_DECODE: number;
    BARCODE_ERROR_FIND_ROW_OR_COLUMN: number;
    BARCODE_ERROR_FIND_3X8_2D_X: number;
    BARCODE_ERROR_FIND_3X8_2D_Y: number;
    BARCODE_ERROR_2D_UGOL_MAX: number;
    BARCODE_ERROR_INDEFINITELY_DECODED: number;
    BARCODE_ERROR_DLL_NOT_INIT: number;
    BARCODE_ERROR_IP_DECODE_DLL_Try_Except: number;
    IPDECODE_ERROR_LARGEERRORS: number;
    IPDECODE_ERROR_FAULTCOLUMNS: number;
    IPDECODE_ERROR_FAULTROWS: number;
    IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: number;
    IPDECODE_ERROR_LOADING_DEV_TABLE: number;
};
export declare const BarcodeType: {
    UNKNOWN: number;
    BCT_CODE128: number;
    CODE39: number;
    EAN8: number;
    ITF: number;
    PDF417: number;
    STF: number;
    MTF: number;
    IATA: number;
    CODABAR: number;
    UPCA: number;
    CODE93: number;
    UPCE: number;
    EAN13: number;
    QRCODE: number;
    AZTEC: number;
    DATAMATRIX: number;
    ALL_1D: number;
    CODE11: number;
};
export declare const CameraMode: {
    AUTO: number;
    CAMERA1: number;
    CAMERA2: number;
};
export declare const CameraTypes: {
    FRONT: string;
    BACK: string;
};
export declare const CaptureMode: {
    AUTO: number;
    CAPTURE_VIDEO: number;
    CAPTURE_FRAME: number;
};
export declare const diDocType: {
    dtNotDefined: number;
    dtPassport: number;
    dtIdentityCard: number;
    dtDiplomaticPassport: number;
    dtServicePassport: number;
    dtSeamansIdentityDocument: number;
    dtIdentityCardforResidence: number;
    dtTraveldocument: number;
    dtOther: number;
    dtVisaID2: number;
    dtVisaID3: number;
    dtRegistrationCertificate: number;
    dtNationalIdentityCard: number;
    dtSocialIdentityCard: number;
    dtAliensIdentityCard: number;
    dtPrivilegedIdentityCard: number;
    dtResidencePermitIdentityCard: number;
    dtOriginCard: number;
    dtEmergencyPassport: number;
    dtAliensPassport: number;
    dtAlternativeIdentityCard: number;
    dtAuthorizationCard: number;
    dtBeginnerPermit: number;
    dtBorderCrossingCard: number;
    dtChauffeurLicense: number;
    dtChauffeurLicenseUnder18: number;
    dtChauffeurLicenseUnder21: number;
    dtCommercialDrivingLicense: number;
    dtCommercialDrivingLicenseIndtuctionalPermit: number;
    dtCommercialDrivingLicenseUnder18: number;
    dtCommercialDrivingLicenseUnder21: number;
    dtCommercialIndtuctionPermit: number;
    dtCommercialNewPermit: number;
    dtConcealedCarryLicense: number;
    dtConcealedFirearmPermit: number;
    dtConditionalDrivingLicense: number;
    dtDepartmentOfVeteransAffairsIdentityCard: number;
    dtDiplomaticDrivingLicense: number;
    dtDrivingLicense: number;
    dtDrivingLicenseIndtuctionalPermit: number;
    dtDrivingLicenseIndtuctionalPermitUnder18: number;
    dtDrivingLicenseIndtuctionalPermitUnder21: number;
    dtDrivingLicenseLearnersPermit: number;
    dtDrivingLicenseLearnersPermitUnder18: number;
    dtDrivingLicenseLearnersPermitUnder21: number;
    dtDrivingLicenseNovice: number;
    dtDrivingLicenseNoviceUnder18: number;
    dtDrivingLicenseNoviceUnder21: number;
    dtDrivingLicenseRegisteredOffender: number;
    dtDrivingLicenseRedtictedUnder18: number;
    dtDrivingLicenseRedtictedUnder21: number;
    dtDrivingLicenseTemporaryVisitor: number;
    dtDrivingLicenseTemporaryVisitorUnder18: number;
    dtDrivingLicenseTemporaryVisitorUnder21: number;
    dtDrivingLicenseUnder18: number;
    dtDrivingLicenseUnder21: number;
    dtEmploymentDrivingPermit: number;
    dtEnhancedChauffeurLicense: number;
    dtEnhancedChauffeurLicenseUnder18: number;
    dtEnhancedChauffeurLicenseUnder21: number;
    dtEnhancedCommercialDrivingLicense: number;
    dtEnhancedDrivingLicense: number;
    dtEnhancedDrivingLicenseUnder18: number;
    dtEnhancedDrivingLicenseUnder21: number;
    dtEnhancedIdentityCard: number;
    dtEnhancedIdentityCardUnder18: number;
    dtEnhancedIdentityCardUnder21: number;
    dtEnhancedOperatorsLicense: number;
    dtFirearmsPermit: number;
    dtFullProvisionalLicense: number;
    dtFullProvisionalLicenseUnder18: number;
    dtFullProvisionalLicenseUnder21: number;
    dtGenevaConventionsIdentityCard: number;
    dtGraduatedDrivingLicenseUnder18: number;
    dtGraduatedDrivingLicenseUnder21: number;
    dtGraduatedIndtuctionPermitUnder18: number;
    dtGraduatedIndtuctionPermitUnder21: number;
    dtGraduatedLicenseUnder18: number;
    dtGraduatedLicenseUnder21: number;
    dtHandgunCarryPermit: number;
    dtIdentityAndPrivilegeCard: number;
    dtIdentityCardMobilityImpaired: number;
    dtIdentityCardRegisteredOffender: number;
    dtIdentityCardTemporaryVisitor: number;
    dtIdentityCardTemporaryVisitorUnder18: number;
    dtIdentityCardTemporaryVisitorUnder21: number;
    dtIdentityCardUnder18: number;
    dtIdentityCardUnder21: number;
    dtIgnitionInterlockPermit: number;
    dtImmigrantVisa: number;
    dtIndtuctionPermit: number;
    dtIndtuctionPermitUnder18: number;
    dtIndtuctionPermitUnder21: number;
    dtInterimDrivingLicense: number;
    dtInterimIdentityCard: number;
    dtIntermediateDrivingLicense: number;
    dtIntermediateDrivingLicenseUnder18: number;
    dtIntermediateDrivingLicenseUnder21: number;
    dtJuniorDrivingLicense: number;
    dtLearnerIndtuctionalPermit: number;
    dtLearnerLicense: number;
    dtLearnerLicenseUnder18: number;
    dtLearnerLicenseUnder21: number;
    dtLearnerPermit: number;
    dtLearnerPermitUnder18: number;
    dtLearnerPermitUnder21: number;
    dtLimitedLicense: number;
    dtLimitedPermit: number;
    dtLimitedTermDrivingLicense: number;
    dtLimitedTermIdentityCard: number;
    dtLiquorIdentityCard: number;
    dtNewPermit: number;
    dtNewPermitUnder18: number;
    dtNewPermitUnder21: number;
    dtNonUsCitizenDrivingLicense: number;
    dtOccupationalDrivingLicense: number;
    dtOneidaTribeOfIndiansIdentityCard: number;
    dtOperatorLicense: number;
    dtOperatorLicenseUnder18: number;
    dtOperatorLicenseUnder21: number;
    dtPermanentDrivingLicense: number;
    dtPermitToReEnter: number;
    dtProbationaryAutoLicense: number;
    dtProbationaryDrivingLicenseUnder18: number;
    dtProbationaryDrivingLicenseUnder21: number;
    dtProbationaryVehicleSalespersonLicense: number;
    dtProvisionalDrivingLicense: number;
    dtProvisionalDrivingLicenseUnder18: number;
    dtProvisionalDrivingLicenseUnder21: number;
    dtProvisionalLicense: number;
    dtProvisionalLicenseUnder18: number;
    dtProvisionalLicenseUnder21: number;
    dtPublicPassengerChauffeurLicense: number;
    dtRacingAndGamingComissionCard: number;
    dtRefugeeTravelDocument: number;
    dtRenewalPermit: number;
    dtRedtictedCommercialDrivingLicense: number;
    dtRedtictedDrivingLicense: number;
    dtRedtictedPermit: number;
    dtSeasonalPermit: number;
    dtSeasonalResidentIdentityCard: number;
    dtSeniorCitizenIdentityCard: number;
    dtSexOffender: number;
    dtSocialSecurityCard: number;
    dtTemporaryDrivingLicense: number;
    dtTemporaryDrivingLicenseUnder18: number;
    dtTemporaryDrivingLicenseUnder21: number;
    dtTemporaryIdentityCard: number;
    dtTemporaryIndtuctionPermitIdentityCard: number;
    dtTemporaryIndtuctionPermitIdentityCardUnder18: number;
    dtTemporaryIndtuctionPermitIdentityCardUnder21: number;
    dtTemporaryVisitorDrivingLicense: number;
    dtTemporaryVisitorDrivingLicenseUnder18: number;
    dtTemporaryVisitorDrivingLicenseUnder21: number;
    dtUniformedServicesIdentityCard: number;
    dtVehicleSalespersonLicense: number;
    dtWorkerIdentificationCredential: number;
    dtCommercialDrivingLicenseNovice: number;
    dtCommercialDrivingLicenseNoviceUnder18: number;
    dtCommercialDrivingLicenseNoviceUnder21: number;
    dtPassportCard: number;
    dtPermanentResidentCard: number;
    dtPersonalIdentificationVerification: number;
    dtTemporaryOperatorLicense: number;
    dtDrivingLicenseUnder19: number;
    dtIdentityCardUnder19: number;
    dtVisa: number;
    dtTemporaryPassport: number;
    dtVotingCard: number;
    dtHealthCard: number;
    dtCertificateOfCitizenship: number;
    dtAddressCard: number;
    dtAirportImmigrationCard: number;
    dtAlienRegidtationCard: number;
    dtAPEHCard: number;
    dtCoupontoDrivingLicense: number;
    dtCrewMemberCertificate: number;
    dtDocumentForReturn: number;
    dtECard: number;
    dtEmploymentCard: number;
    dtHKSARImmigrationForm: number;
    dtImmigrantcard: number;
    dtLabourCard: number;
    dtLaissezPasser: number;
    dtLawyerIdentityCertificate: number;
    dtLicenseCard: number;
    dtPassportStateless: number;
    dtPassportChild: number;
    dtPassportConsular: number;
    dtPassportDiplomaticService: number;
    dtPassportOfficial: number;
    dtPassportProvisional: number;
    dtPassportSpecial: number;
    dtPermissiontotheLocalBorderTraffic: number;
    dtSEDESOLCard: number;
    dtSocialCard: number;
    dtTBCard: number;
    dtVehiclePassport: number;
    dtWDocument: number;
    dtDiplomaticIdentityCard: number;
    dtConsularIdentityCard: number;
    dtIncomeTaxCard: number;
    dtResidencePermit: number;
    dtDocumentOfIdentity: number;
    dtBorderCrossingPermit: number;
    dtPassportLimitedValidity: number;
    dtSIMCard: number;
    dtTaxCard: number;
    dtCompanyCard: number;
    dtDomesticPassport: number;
    dtIdentityCertificate: number;
    dtResidentIdCard: number;
    dtArmedForcesIdentityCard: number;
    dtProfessionalCard: number;
    dtRegistrationStamp: number;
    dtDriverCard: number;
    dtDriverTrainingCertificate: number;
    dtQualificationDrivingLicense: number;
    dtMembershipCard: number;
    dtPublicVehicleDriverAuthorityCard: number;
    dtMarineLicense: number;
    dtTemporaryLearnerDrivingLicense: number;
    dtTemporaryCommercialDrivingLicense: number;
    dtInterimInstructionalPermit: number;
    dtCertificateOfCompetency: number;
    dtCertificateOfProficiency: number;
};
export declare const DocFormat: {
    ID1: number;
    ID2: number;
    ID3: number;
    ID3_x2: number;
    CUSTOM: number;
    FLEXIBLE: number;
};
export declare const DocReaderAction: {
    COMPLETE: number;
    PROCESS: number;
    CANCEL: number;
    ERROR: number;
    NOTIFICATION: number;
    PROCESS_WHITE_UV_IMAGES: number;
    MORE_PAGES_AVAILABLE: number;
};
export declare const DocReaderFrame: {
    MAX: string;
    SCENARIO_DEFAULT: string;
    NONE: string;
    DOCUMENT: string;
};
export declare const DocReaderOrientation: {
    ALL: number;
    PORTRAIT: number;
    LANDSCAPE: number;
    LANDSCAPE_LEFT: number;
    LANDSCAPE_RIGHT: number;
};
export declare const eCheckDiagnose: {
    UNKNOWN: number;
    PASS: number;
    INVALID_INPUT_DATA: number;
    INTERNAL_ERROR: number;
    EXCEPTION_IN_MODULE: number;
    UNCERTAIN_VERIFICATION: number;
    NECESSARY_IMAGE_NOT_FOUND: number;
    PHOTO_SIDES_NOT_FOUND: number;
    INVALID_CHECKSUM: number;
    SYNTAX_ERROR: number;
    LOGIC_ERROR: number;
    SOURCES_COMPARISON_ERROR: number;
    FIELDS_COMPARISON_LOGIC_ERROR: number;
    INVALID_FIELD_FORMAT: number;
    TRUE_LUMINISCENCE_ERROR: number;
    FALSE_LUMINISCENCE_ERROR: number;
    FIXED_PATTERN_ERROR: number;
    LOW_CONTRAST_IN_IR_LIGHT: number;
    INCORRECT_BACKGROUND_LIGHT: number;
    BACKGROUND_COMPARISON_ERROR: number;
    INCORRECT_TEXT_COLOR: number;
    PHOTO_FALSE_LUMINISCENCE: number;
    TOO_MUCH_SHIFT: number;
    FIBERS_NOT_FOUND: number;
    TOO_MANY_OBJECTS: number;
    SPECKS_IN_UV: number;
    TOO_LOW_RESOLUTION: number;
    INVISIBLE_ELEMENT_PRESENT: number;
    VISIBLE_ELEMENT_ABSENT: number;
    ELEMENT_SHOULD_BE_COLORED: number;
    ELEMENT_SHOULD_BE_GRAYSCALE: number;
    UV_DULL_PAPER_MRZ: number;
    FALSE_LUMINISCENCE_IN_MRZ: number;
    UV_DULL_PAPER_PHOTO: number;
    UV_DULL_PAPER_BLANK: number;
    UV_DULL_PAPER_ERROR: number;
    FALSE_LUMINISCENCE_IN_BLANK: number;
    BAD_AREA_IN_AXIAL: number;
    FALSE_IPI_PARAMETERS: number;
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: number;
    OVI_IR_INVISIBLE: number;
    OVI_INSUFFICIENT_AREA: number;
    OVI_COLOR_INVARIABLE: number;
    OVI_BAD_COLOR_FRONT: number;
    OVI_BAD_COLOR_SIDE: number;
    OVI_WIDE_COLOR_SPREAD: number;
    OVI_BAD_COLOR_PERCENT: number;
    HOLOGRAM_ELEMENT_ABSENT: number;
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: number;
    HOLOGRAM_ELEMENT_PRESENT: number;
    PHOTO_PATTERN_INTERRUPTED: number;
    PHOTO_PATTERN_SHIFTED: number;
    PHOTO_PATTERN_DIFFERENT_COLORS: number;
    PHOTO_PATTERN_IR_VISIBLE: number;
    PHOTO_PATTERN_NOT_INTERSECT: number;
    PHOTO_SIZE_IS_WRONG: number;
    PHOTO_PATTERN_INVALID_COLOR: number;
    PHOTO_PATTERN_SHIFTED_VERT: number;
    PHOTO_PATTERN_PATTERN_NOT_FOUND: number;
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: number;
    PHOTO_IS_NOT_RECTANGLE: number;
    PHOTO_CORNERS_IS_WRONG: number;
    DOCUMENT_IS_CANCELLING: number;
    TEXT_COLOR_SHOULD_BE_BLUE: number;
    TEXT_COLOR_SHOULD_BE_GREEN: number;
    TEXT_COLOR_SHOULD_BE_RED: number;
    TEXT_SHOULD_BE_BLACK: number;
    BARCODE_WAS_READ_WITH_ERRORS: number;
    BARCODE_DATA_FORMAT_ERROR: number;
    BARCODE_SIZE_PARAMS_ERROR: number;
    NOT_ALL_BARCODES_READ: number;
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: number;
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: number;
    PORTRAIT_COMPARISON_SERVICE_ERROR: number;
    PPORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: number;
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: number;
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: number;
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: number;
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: number;
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: number;
    LAST_DIAGNOSE_VALUE: number;
};
export declare const eCheckResult: {
    CH_CHECK_ERROR: number;
    CH_CHECK_OK: number;
    CH_CHECK_WAS_NOT_DONE: number;
};
export declare const eGraphicFieldType: {
    GF_PORTRAIT: number;
    GF_FINGERPR: number;
    GF_EYE: number;
    GF_SIGNATURE: number;
    GF_BAR_CODE: number;
    GF_PROOF_OF_CITIZENSHIP: number;
    GF_DOCUMENT_IMAGE: number;
    GF_COLOR_DYNAMIC: number;
    GF_GHOST_PORTRAIT: number;
    GF_STAMP: number;
    GF_PORTRAIT_OF_CHILD: number;
    GF_OTHER: number;
    GF_FINGER_LEFT_THUMB: number;
    GF_FINGER_LEFT_INDEX: number;
    GF_FINGER_LEFT_MIDDLE: number;
    GF_FINGER_LEFT_RING: number;
    GF_FINGER_LEFT_LITTLE: number;
    GF_FINGER_RIGHT_THUMB: number;
    GF_FINGER_RIGHT_INDEX: number;
    GF_FINGER_RIGHT_MIDDLE: number;
    GF_FINGER_RIGHT_RING: number;
    GF_FINGER_RIGHT_LITTLE: number;
    getTranslation(value: number): string;
};
export declare const eImageQualityCheckType: {
    IQC_IMAGE_GLARES: number;
    IQC_IMAGE_FOCUS: number;
    IQC_IMAGE_RESOLUTION: number;
    IQC_IMAGE_COLORNESS: number;
    IQC_PERSPECTIVE: number;
    IQC_BOUNDS: number;
};
export declare const eProcessGLCommands: {
    ePC_ProcMgr_SetLicense: number;
    ePC_ProcMgr_Process: number;
    ePC_ProcMgr_ProcessAsync: number;
    ePC_ProcMgr_Init: number;
    ePC_ProcMgr_ProcessImage: number;
    ePC_ProcMgr_StartNewDocument: number;
    ePC_ProcMgr_StartNewPage: number;
    ePC_ProcMgr_Unload: number;
    ePC_ProcMgr_CheckDatabase: number;
    ePC_ProcMgr_ComparePortraits: number;
};
export declare const eRequestCommand: {
    eReqCmd_RFid_SendData: number;
    eReqCmd_RFid_Notify: number;
    eReqCmd_RFid_GetDataForScenario: number;
    eReqCmd_Torch_GetUVFoto: number;
    eReqCmd_InternetSend: number;
    eReqCmd_GetGuid: number;
};
export declare const eRFID_AccessControl_ProcedureType: {
    ACPT_UNDEFINED: number;
    ACPT_BAC: number;
    ACPT_PACE: number;
    ACPT_CA: number;
    ACPT_TA: number;
    ACPT_AA: number;
    ACPT_RI: number;
    ACPT_CARD_INFO: number;
};
export declare const eRFID_AuthenticationProcedureType: {
    aptUndefined: number;
    aptStandard: number;
    aptAdvanced: number;
    aptGeneral: number;
};
export declare const eRFID_BaudRate: {
    rfbr_106: number;
    rfbr_212: number;
    rfbr_424: number;
    rfbr_848: number;
};
export declare const eRFID_CertificateType: {
    CT_UNDEFINED: number;
    CT_CSCA: number;
    CT_CSCA_LINK: number;
    CT_DS: number;
    CT_MLS: number;
    CT_DEV_LS: number;
    CT_DEF_LS: number;
};
export declare const eRFID_DataFile_Type: {
    DFT_UNSPECIFIED: number;
    DFT_PASSPORT_DG1: number;
    DFT_PASSPORT_DG2: number;
    DFT_PASSPORT_DG3: number;
    DFT_PASSPORT_DG4: number;
    DFT_PASSPORT_DG5: number;
    DFT_PASSPORT_DG6: number;
    DFT_PASSPORT_DG7: number;
    DFT_PASSPORT_DG8: number;
    DFT_PASSPORT_DG9: number;
    DFT_PASSPORT_DG10: number;
    DFT_PASSPORT_DG11: number;
    DFT_PASSPORT_DG12: number;
    DFT_PASSPORT_DG13: number;
    DFT_PASSPORT_DG14: number;
    DFT_PASSPORT_DG15: number;
    DFT_PASSPORT_DG16: number;
    DFT_PASSPORT_DG17: number;
    DFT_PASSPORT_DG18: number;
    DFT_PASSPORT_DG19: number;
    DFT_PASSPORT_DG20: number;
    DFT_PASSPORT_SOD: number;
    DFT_PASSPORT_CVCA: number;
    DFT_PASSPORT_COM: number;
    DFT_ID_DG1: number;
    DFT_ID_DG2: number;
    DFT_ID_DG3: number;
    DFT_ID_DG4: number;
    DFT_ID_DG5: number;
    DFT_ID_DG6: number;
    DFT_ID_DG7: number;
    DFT_ID_DG8: number;
    DFT_ID_DG9: number;
    DFT_ID_DG10: number;
    DFT_ID_DG11: number;
    DFT_ID_DG12: number;
    DFT_ID_DG13: number;
    DFT_ID_DG14: number;
    DFT_ID_DG15: number;
    DFT_ID_DG16: number;
    DFT_ID_DG17: number;
    DFT_ID_DG18: number;
    DFT_ID_DG19: number;
    DFT_ID_DG20: number;
    DFT_ID_DG21: number;
    DFT_DL_COM: number;
    DFT_DL_DG1: number;
    DFT_DL_DG2: number;
    DFT_DL_DG3: number;
    DFT_DL_DG4: number;
    DFT_DL_DG5: number;
    DFT_DL_DG6: number;
    DFT_DL_DG7: number;
    DFT_DL_DG8: number;
    DFT_DL_DG9: number;
    DFT_DL_DG10: number;
    DFT_DL_DG11: number;
    DFT_DL_DG12: number;
    DFT_DL_DG13: number;
    DFT_DL_DG14: number;
    DFT_DL_SOD: number;
    DFT_DL_CE: number;
    DFT_DL_CVCA: number;
    DFT_PACE_CARDACCESS: number;
    DFT_PACE_CARDSECURITY: number;
    DFT_PACE_CHIPSECURITY: number;
    DFT_MIFARE_DATA: number;
    DFT_MIFARE_VALIDITY: number;
    DFT_AUTHENTICITYV2: number;
    DFT_ATR: number;
    DFT_ESIGN_PK: number;
    DFT_ESIGN_SIGNEDDATA: number;
    DFT_CERTIFICATE: number;
    DFT_MASTERLIST: number;
    DFT_DEFECTLIST: number;
    DFT_DEVIATIONLIST: number;
    DFT_APP_DIRECTORY: number;
    DFT_SESSION: number;
    DFT_LOGDATA: number;
    DFT_CHIP_PROPERTIES: number;
    DFT_USERDEFINED: number;
    getTranslation(value: number): string;
};
export declare const eRFID_NotificationAndErrorCodes: {
    RFID_NOTIFICATION_ERROR: number;
    RFID_NOTIFICATION_DOCUMENT_READY: number;
    RFID_NOTIFICATION_READ_PROTOCOL4: number;
    RFID_NOTIFICATION_READ_PROTOCOL3: number;
    RFID_NOTIFICATION_PROGRESS: number;
    RFID_NOTIFICATION_TA_STEP: number;
    RFID_NOTIFICATION_SM_REQUIRED: number;
    RFID_NOTIFICATION_ISO_ERROR: number;
    RFID_NOTIFICATION_PA_REQUEST: number;
    RFID_NOTIFICATION_SM_ESTABLISHED: number;
    RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: number;
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: number;
    RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: number;
    RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: number;
    RFID_NOTIFICATION_PCSC_DATA_RECEIVED: number;
    RFID_NOTIFICATION_PCSC_BYTES_SENT: number;
    RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: number;
    RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: number;
    RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: number;
    RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: number;
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: number;
    RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: number;
    RFID_NOTIFICATION_SCENARIO: number;
    RFID_NOTIFICATION_PCSC_READING_DATAGROUP: number;
    RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: number;
    RFID_NOTIFICATION_PCSC_END_OF_FILE: number;
    RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: number;
    RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: number;
    RFID_NOTIFICATION_AC_PROCEDURE_START: number;
    RFID_NOTIFICATION_AC_PROCEDURE_FINISH: number;
    RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: number;
    RFID_NOTIFICATION_PA_FILE_CHECK: number;
    RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: number;
    RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: number;
    RFID_NOTIFICATION_RI_SECTOR_ID: number;
    RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: number;
    RFID_ERROR_NO_ERROR: number;
    RFID_ERROR_ALREADY_DONE: number;
    RFID_LAYER6_FILE_EOF1: number;
    RFID_LAYER6_PWD_DEACTIVATED: number;
    RFID_LAYER6_PWD_BLOCKED: number;
    RFID_LAYER6_PWD_SUSPENDED: number;
    RFID_LAYER6_PWD_BLOCKED_2: number;
    RFID_LAYER6_PWD_DEACTIVATED_2: number;
    RFID_LAYER6_PWD_SUSPENDED_2: number;
    RFID_LAYER6_MSE_SET_AT_FAILURE: number;
    RFID_LAYER6_INCORRECT_PARAMS: number;
    RFID_LAYER6_FILE_NOT_FOUND: number;
    RFID_LAYER6_NO_REFERENCE_DATA: number;
    RFID_LAYER6_FILE_EOF2: number;
    RFID_Error_GraphManager: number;
    RFID_ERROR_NO_CHIP_DETECTED: number;
    RFID_ERROR_NOT_AVAILABLE: number;
    RFID_ERROR_INVALID_PARAMETER: number;
    RFID_ERROR_NOT_INITIALIZED: number;
    RFID_Error_NotEnoughMemory: number;
    RFID_ERROR_INVALID_DIRECTORY: number;
    RFID_ERROR_UNKNOWN_COMMAND: number;
    RFID_ERROR_FILE_IO_ERROR: number;
    RFID_ERROR_BUSY: number;
    RFID_ERROR_OLD_FIRMWARE: number;
    RFID_ERROR_PCSC_FAILED: number;
    RFID_ERROR_PCSC_READER_NOT_AVAILABLE: number;
    RFID_ERROR_PCSC_CANT_CONNECT_CARD: number;
    RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: number;
    RFID_ERROR_PCSC_OPERATION_CANCELLED: number;
    RFID_ERROR_PCSC_CARD_IS_BUSY: number;
    RFID_ERROR_PCSC_FAILED_S_CARD: number;
    RFID_ERROR_PCSC_EXT_LE_FAILED: number;
    RFID_LAYER6_PWD_FAILED: number;
    RFID_ERROR_NOT_PERFORMED: number;
    RFID_ERROR_SESSION_IS_CLOSED: number;
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: number;
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: number;
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED: number;
    RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: number;
    RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: number;
    RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: number;
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: number;
    RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: number;
    RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: number;
    RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: number;
    RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: number;
    RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: number;
    RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: number;
    RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: number;
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: number;
    RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: number;
    RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: number;
    RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: number;
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: number;
    RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: number;
    RFID_ERROR_SESSION_INCORRECT_DATA: number;
    RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: number;
    RFID_ERROR_SESSION_FILE_INCORRECT_DATA: number;
    RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: number;
    RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: number;
    RFID_ERROR_SESSION_FILE_WRONG_TAG: number;
    RFID_ERROR_SESSION_FILE_CANT_USE_DATA: number;
    RFID_ERROR_SESSION_FILE_CANT_READ_DATA: number;
    RFID_ERROR_SESSION_FILE_ACCESS_DENIED: number;
    RFID_LAYER6_SECURITY_MANAGER: number;
    RFID_LAYER6_APP_SELECTION_FAILURE: number;
    RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL: number;
    RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL: number;
    RFID_LAYER6_MUTUAL_AUTH_FAILURE: number;
    RFID_LAYER6_SM_DO8E_MISSING: number;
    RFID_LAYER6_SM_DO87_MISSING: number;
    RFID_LAYER6_SM_DO99_MISSING: number;
    RFID_LAYER6_SM_MAC_INCORRECT: number;
    RFID_LAYER6_SM_DO87_INCORRECT: number;
    RFID_LAYER6_NON_TLV_RESPONSE_DATA: number;
    RFID_LAYER6_WRONG_RND_ICC_LENGTH: number;
    RFID_LAYER6_INT_AUTH_FAILURE: number;
    RFID_LAYER6_MSE_SET_KAT_FAILURE: number;
    RFID_LAYER6_MSE_SET_DST_FAILURE: number;
    RFID_LAYER6_PSO_CERTIFICATE_FAILURE: number;
    RFID_LAYER6_GET_CHALLENGE_FAILURE: number;
    RFID_LAYER6_EXT_AUTH_FAILURE: number;
    RFID_LAYER6_GENERAL_AUTH_FAILURE: number;
    RFID_ERROR_FAILED: number;
    getTranslation(value: number): string;
};
export declare const eRFID_Password_Type: {
    PPT_UNKNOWN: number;
    PPT_MRZ: number;
    PPT_CAN: number;
    PPT_PIN: number;
    PPT_PUK: number;
    PPT_PIN_ESIGN: number;
    PPT_SAI: number;
};
export declare const eRFID_SDK_ProfilerType: {
    SPT_DOC_9303_EDITION_2006: number;
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: number;
};
export declare const eRFID_TerminalType: {
    TET_UNDEFINED: number;
    TET_INSPECTION_SYSTEM: number;
    TET_AUTHENTICATION_TERMINAL: number;
    TET_SIGNATURE_TERMINAL: number;
    TET_UNAUTHENTICATED_TERMINAL: number;
};
export declare const eRPRM_Authenticity: {
    NONE: number;
    UV_LUMINESCENCE: number;
    IR_B900: number;
    IMAGE_PATTERN: number;
    AXIAL_PROTECTION: number;
    UV_FIBERS: number;
    IR_VISIBILITY: number;
    OCR_SECURITY_TEXT: number;
    IPI: number;
    PHOTO_EMBED_TYPE: number;
    HOLOGRAMS: number;
    PHOTO_AREA: number;
    PORTRAIT_COMPARISON: number;
    BARCODE_FORMAT_CHECK: number;
    KINEGRAM: number;
    HOLOGRAMS_DETECTION: number;
};
export declare const eRPRM_FieldVerificationResult: {
    RCF_DISABLED: number;
    RCF_VERIFIED: number;
    RCF_NOT_VERIFIED: number;
    RCF_COMPARE_TRUE: number;
    RCF_COMPARE_FALSE: number;
};
export declare const eRPRM_Lights: {
    NONE: number;
    RPRM_LIGHT_UV: number;
    RPRM_LIGHT_WHITE_FULL: number;
    getTranslation(value: number): string;
};
export declare const eRPRM_ResultType: {
    NONE: number;
    RPRM_RESULT_TYPE_EMPTY: number;
    RPRM_RESULT_TYPE_RAW_IMAGE: number;
    RPRM_RESULT_TYPE_FILE_IMAGE: number;
    RPRM_RESULT_TYPE_MRZ_OCR_EXTENDED: number;
    RPRM_RESULT_TYPE_BARCODES: number;
    RPRM_RESULT_TYPE_GRAPHICS: number;
    RPRM_RESULT_TYPE_MRZ_TEST_QUALITY: number;
    RPRM_RESULT_TYPE_DOCUMENT_TYPES_CANDIDATES: number;
    RPRM_RESULT_TYPE_CHOSEN_DOCUMENT_TYPE_CANDIDATE: number;
    RPRM_RESULT_TYPE_DOCUMENTS_INFO_LIST: number;
    RPRM_RESULT_TYPE_OCR_LEXICAL_ANALYZE: number;
    RPRM_RESULT_TYPE_RAW_UNCROPPED_IMAGE: number;
    RPRM_RESULT_TYPE_VISUAL_OCR_EXTENDED: number;
    RPRM_RESULT_TYPE_BAR_CODES_TEXT_DATA: number;
    RPRM_RESULT_TYPE_BAR_CODES_IMAGE_DATA: number;
    RPRM_RESULT_TYPE_AUTHENTICITY: number;
    RPRM_RESULT_TYPE_EOS_IMAGE: number;
    RPRM_RESULT_TYPE_BAYER_IMAGE: number;
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE: number;
    RPRM_RESULT_TYPE_MAGNETIC_STRIPE_TEXT_DATA: number;
    RPRM_RESULT_TYPE_FIELD_FILE_IMAGE: number;
    RPRM_RESULT_TYPE_DATABASE_CHECK: number;
    RPRM_RESULT_TYPE_FINGERPRINT_TEMPLATE_ISO: number;
    RPRM_RESULT_TYPE_INPUT_IMAGE_QUALITY: number;
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: number;
    RPRM_RESULT_TYPE_CUSTOM: number;
    RFID_RESULT_TYPE_RFID_RAW_DATA: number;
    RFID_RESULT_TYPE_RFID_TEXT_DATA: number;
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: number;
    RFID_RESULT_TYPE_RFID_BINARY_DATA: number;
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: number;
    RPRM_RESULT_TYPE_BARCODE_POSITION: number;
    RPRM_RESULT_TYPE_MRZ_POSITION: number;
};
export declare const eRPRM_SecurityFeatureType: {
    NONE: number;
    SECURITY_FEATURE_TYPE_BLANK: number;
    SECURITY_FEATURE_TYPE_FILL: number;
    SECURITY_FEATURE_TYPE_PHOTO: number;
    SECURITY_FEATURE_TYPE_MRZ: number;
    SECURITY_FEATURE_TYPE_FALSE_LUMINESCENCE: number;
    SECURITY_FEATURE_TYPE_HOLO_SIMPLE: number;
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_STATIC: number;
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_MULTI_STATIC: number;
    SECURITY_FEATURE_TYPE_HOLO_VERIFY_DINAMIC: number;
    SECURITY_FEATURE_TYPE_PATTERN_NOT_INTERRUPTED: number;
    SECURITY_FEATURE_TYPE_PATTERN_NOT_SHIFTED: number;
    SECURITY_FEATURE_TYPE_PATTERN_SAME_COLORS: number;
    SECURITY_FEATURE_TYPE_PATTERN_IR_INVISIBLE: number;
    SECURITY_FEATURE_TYPE_PHOTO_SIZE_CHECK: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_GHOST: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_RFID: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_VISUAL: number;
    SECURITY_FEATURE_TYPE_BARCODE: number;
    SECURITY_FEATURE_TYPE_PATTERN_DIFFERENT_LINES_THICKNESS: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_CAMERA: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_CAMERA: number;
    SECURITY_FEATURE_TYPE_GHOST_PHOTO: number;
    SECURITY_FEATURE_TYPE_CLEAR_GHOST_PHOTO: number;
    SECURITY_FEATURE_TYPE_INVISIBLE_OBJECT: number;
    SECURITY_FEATURE_TYPE_LOW_CONTRAST_OBJECT: number;
    SECURITY_FEATURE_TYPE_PHOTO_COLOR: number;
    SECURITY_FEATURE_TYPE_PHOTO_SHAPE: number;
    SECURITY_FEATURE_TYPE_PHOTO_CORNERS: number;
    DOCUMENT_CANCELLING_DETECTOR: number;
};
export declare const eSignManagementAction: {
    smaUndefined: number;
    smaCreatePIN: number;
    smaChangePIN: number;
    smaUnblockPIN: number;
    smaTerminatePIN: number;
    smaGenerateKeys: number;
    smaTerminateKeys: number;
    smaSignData: number;
};
export declare const eVisualFieldType: {
    FT_DOCUMENT_CLASS_CODE: number;
    FT_ISSUING_STATE_CODE: number;
    FT_DOCUMENT_NUMBER: number;
    FT_DATE_OF_EXPIRY: number;
    FT_DATE_OF_ISSUE: number;
    FT_DATE_OF_BIRTH: number;
    FT_PLACE_OF_BIRTH: number;
    FT_PERSONAL_NUMBER: number;
    FT_SURNAME: number;
    FT_GIVEN_NAMES: number;
    FT_MOTHERS_NAME: number;
    FT_NATIONALITY: number;
    FT_SEX: number;
    FT_HEIGHT: number;
    FT_WEIGHT: number;
    FT_EYES_COLOR: number;
    FT_HAIR_COLOR: number;
    FT_ADDRESS: number;
    FT_DONOR: number;
    FT_SOCIAL_SECURITY_NUMBER: number;
    FT_DL_CLASS: number;
    FT_DL_ENDORSED: number;
    FT_DL_RESTRICTION_CODE: number;
    FT_DL_UNDER_21_DATE: number;
    FT_AUTHORITY: number;
    FT_SURNAME_AND_GIVEN_NAMES: number;
    FT_NATIONALITY_CODE: number;
    FT_PASSPORT_NUMBER: number;
    FT_INVITATION_NUMBER: number;
    FT_VISA_ID: number;
    FT_VISA_CLASS: number;
    FT_VISA_SUB_CLASS: number;
    FT_MRZ_STRING_1: number;
    FT_MRZ_STRING_2: number;
    FT_MRZ_STRING_3: number;
    FT_MRZ_TYPE: number;
    FT_OPTIONAL_DATA: number;
    FT_DOCUMENT_CLASS_NAME: number;
    FT_ISSUING_STATE_NAME: number;
    FT_PLACE_OF_ISSUE: number;
    FT_DOCUMENT_NUMBER_CHECKSUM: number;
    FT_DATE_OF_BIRTH_CHECKSUM: number;
    FT_DATE_OF_EXPIRY_CHECKSUM: number;
    FT_PERSONAL_NUMBER_CHECKSUM: number;
    FT_FINAL_CHECKSUM: number;
    FT_PASSPORT_NUMBER_CHECKSUM: number;
    FT_INVITATION_NUMBER_CHECKSUM: number;
    FT_VISA_ID_CHECKSUM: number;
    FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM: number;
    FT_VISA_VALID_UNTIL_CHECKSUM: number;
    FT_OTHER: number;
    FT_MRZ_STRINGS: number;
    FT_NAME_SUFFIX: number;
    FT_NAME_PREFIX: number;
    FT_DATE_OF_ISSUE_CHECKSUM: number;
    FT_DATE_OF_ISSUE_CHECK_DIGIT: number;
    FT_DOCUMENT_SERIES: number;
    FT_REG_CERT_REG_NUMBER: number;
    FT_REG_CERT_CAR_MODEL: number;
    FT_REG_CERT_CAR_COLOR: number;
    FT_REG_CERT_BODY_NUMBER: number;
    FT_REG_CERT_CAR_TYPE: number;
    FT_REG_CERT_MAX_WEIGHT: number;
    FT_REG_CERT_WEIGHT: number;
    FT_ADDRESS_AREA: number;
    FT_ADDRESS_STATE: number;
    FT_ADDRESS_BUILDING: number;
    FT_ADDRESS_HOUSE: number;
    FT_ADDRESS_FLAT: number;
    FT_PLACE_OF_REGISTRATION: number;
    FT_DATE_OF_REGISTRATION: number;
    FT_RESIDENT_FROM: number;
    FT_RESIDENT_UNTIL: number;
    FT_AUTHORITY_CODE: number;
    FT_PLACE_OF_BIRTH_AREA: number;
    FT_PLACE_OF_BIRTH_STATE_CODE: number;
    FT_ADDRESS_STREET: number;
    FT_ADDRESS_CITY: number;
    FT_ADDRESS_JURISDICTION_CODE: number;
    FT_ADDRESS_POSTAL_CODE: number;
    FT_DOCUMENT_NUMBER_CHECK_DIGIT: number;
    FT_DATE_OF_BIRTH_CHECK_DIGIT: number;
    FT_DATE_OF_EXPIRY_CHECK_DIGIT: number;
    FT_PERSONAL_NUMBER_CHECK_DIGIT: number;
    FT_FINAL_CHECK_DIGIT: number;
    FT_PASSPORT_NUMBER_CHECK_DIGIT: number;
    FT_INVITATION_NUMBER_CHECK_DIGIT: number;
    FT_VISA_ID_CHECK_DIGIT: number;
    FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: number;
    FT_VISA_VALID_UNTIL_CHECK_DIGIT: number;
    FT_PERMIT_DL_CLASS: number;
    FT_PERMIT_DATE_OF_EXPIRY: number;
    FT_PERMIT_IDENTIFIER: number;
    FT_PERMIT_DATE_OF_ISSUE: number;
    FT_PERMIT_RESTRICTION_CODE: number;
    FT_PERMIT_ENDORSED: number;
    FT_ISSUE_TIMESTAMP: number;
    FT_NUMBER_OF_DUPLICATES: number;
    FT_MEDICAL_INDICATOR_CODES: number;
    FT_NON_RESIDENT_INDICATOR: number;
    FT_VISA_TYPE: number;
    FT_VISA_VALID_FROM: number;
    FT_VISA_VALID_UNTIL: number;
    FT_DURATION_OF_STAY: number;
    FT_NUMBER_OF_ENTRIES: number;
    FT_DAY: number;
    FT_MONTH: number;
    FT_YEAR: number;
    FT_UNIQUE_CUSTOMER_IDENTIFIER: number;
    FT_COMMERCIAL_VEHICLE_CODES: number;
    FT_AKA_DATE_OF_BIRTH: number;
    FT_AKA_SOCIAL_SECURITY_NUMBER: number;
    FT_AKA_SURNAME: number;
    FT_AKA_GIVEN_NAMES: number;
    FT_AKA_NAME_SUFFIX: number;
    FT_AKA_NAME_PREFIX: number;
    FT_MAILING_ADDRESS_STREET: number;
    FT_MAILING_ADDRESS_CITY: number;
    FT_MAILING_ADDRESS_JURISDICTION_CODE: number;
    FT_MAILING_ADDRESS_POSTAL_CODE: number;
    FT_AUDIT_INFORMATION: number;
    FT_INVENTORY_NUMBER: number;
    FT_RACE_ETHNICITY: number;
    FT_JURISDICTION_VEHICLE_CLASS: number;
    FT_JURISDICTION_ENDORSEMENT_CODE: number;
    FT_JURISDICTION_RESTRICTION_CODE: number;
    FT_FAMILY_NAME: number;
    FT_GIVEN_NAMES_RUS: number;
    FT_VISA_ID_RUS: number;
    FT_FATHERS_NAME: number;
    FT_FATHERS_NAME_RUS: number;
    FT_SURNAME_AND_GIVEN_NAMES_RUS: number;
    FT_PLACE_OF_BIRTH_RUS: number;
    FT_AUTHORITY_RUS: number;
    FT_ISSUING_STATE_CODE_NUMERIC: number;
    FT_NATIONALITY_CODE_NUMERIC: number;
    FT_ENGINE_POWER: number;
    FT_ENGINE_VOLUME: number;
    FT_CHASSIS_NUMBER: number;
    FT_ENGINE_NUMBER: number;
    FT_ENGINE_MODEL: number;
    FT_VEHICLE_CATEGORY: number;
    FT_IDENTITY_CARD_NUMBER: number;
    FT_CONTROL_NO: number;
    FT_PARRENTS_GIVEN_NAMES: number;
    FT_SECOND_SURNAME: number;
    FT_MIDDLE_NAME: number;
    FT_REG_CERT_VIN: number;
    FT_REG_CERT_VIN_CHECK_DIGIT: number;
    FT_REG_CERT_VIN_CHECKSUM: number;
    FT_LINE_1_CHECK_DIGIT: number;
    FT_LINE_2_CHECK_DIGIT: number;
    FT_LINE_3_CHECK_DIGIT: number;
    FT_LINE_1_CHECKSUM: number;
    FT_LINE_2_CHECKSUM: number;
    FT_LINE_3_CHECKSUM: number;
    FT_REG_CERT_REG_NUMBER_CHECK_DIGIT: number;
    FT_REG_CERT_REG_NUMBER_CHECKSUM: number;
    FT_REG_CERT_VEHICLE_ITS_CODE: number;
    FT_CARD_ACCESS_NUMBER: number;
    FT_MARITAL_STATUS: number;
    FT_COMPANY_NAME: number;
    FT_SPECIAL_NOTES: number;
    FT_SURNAME_OF_SPOSE: number;
    FT_TRACKING_NUMBER: number;
    FT_BOOKLET_NUMBER: number;
    FT_CHILDREN: number;
    FT_COPY: number;
    FT_SERIAL_NUMBER: number;
    FT_DOSSIER_NUMBER: number;
    FT_AKA_SURNAME_AND_GIVEN_NAMES: number;
    FT_TERRITORIAL_VALIDITY: number;
    FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: number;
    FT_DL_CDL_RESTRICTION_CODE: number;
    FT_DL_UNDER_18_DATE: number;
    FT_DL_RECORD_CREATED: number;
    FT_DL_DUPLICATE_DATE: number;
    FT_DL_ISS_TYPE: number;
    FT_MILITARY_BOOK_NUMBER: number;
    FT_DESTINATION: number;
    FT_BLOOD_GROUP: number;
    FT_SEQUENCE_NUMBER: number;
    FT_REG_CERT_BODY_TYPE: number;
    FT_REG_CERT_CAR_MARK: number;
    FT_TRANSACTION_NUMBER: number;
    FT_AGE: number;
    FT_FOLIO_NUMBER: number;
    FT_VOTER_KEY: number;
    FT_ADDRESS_MUNICIPALITY: number;
    FT_ADDRESS_LOCATION: number;
    FT_SECTION: number;
    FT_OCR_NUMBER: number;
    FT_FEDERAL_ELECTIONS: number;
    FT_REFERENCE_NUMBER: number;
    FT_OPTIONAL_DATA_CHECKSUM: number;
    FT_OPTIONAL_DATA_CHECK_DIGIT: number;
    FT_VISA_NUMBER: number;
    FT_VISA_NUMBER_CHECKSUM: number;
    FT_VISA_NUMBER_CHECK_DIGIT: number;
    FT_VOTER: number;
    FT_PREVIOUS_TYPE: number;
    FT_FIELD_FROM_MRZ: number;
    FT_CURRENT_DATE: number;
    FT_STATUS_DATE_OF_EXPIRY: number;
    FT_BANKNOTE_NUMBER: number;
    FT_CSC_CODE: number;
    FT_ARTISTIC_NAME: number;
    FT_ACADEMIC_TITLE: number;
    FT_ADDRESS_COUNTRY: number;
    FT_ADDRESS_ZIPCODE: number;
    FT_E_ID_RESIDENCE_PERMIT_1: number;
    FT_E_ID_RESIDENCE_PERMIT_2: number;
    FT_E_ID_PLACE_OF_BIRTH_STREET: number;
    FT_E_ID_PLACE_OF_BIRTH_CITY: number;
    FT_E_ID_PLACE_OF_BIRTH_STATE: number;
    FT_E_ID_PLACE_OF_BIRTH_COUNTRY: number;
    FT_E_ID_PLACE_OF_BIRTH_ZIPCODE: number;
    FT_CDL_CLASS: number;
    FT_DL_UNDER_19_DATE: number;
    FT_WEIGHT_POUNDS: number;
    FT_LIMITED_DURATION_DOCUMENT_INDICATOR: number;
    FT_ENDORSEMENT_EXPIRATION_DATE: number;
    FT_REVISION_DATE: number;
    FT_COMPLIANCE_TYPE: number;
    FT_FAMILY_NAME_TRUNCATION: number;
    FT_FIRST_NAME_TRUNCATION: number;
    FT_MIDDLE_NAME_TRUNCATION: number;
    FT_EXAM_DATE: number;
    FT_ORGANIZATION: number;
    FT_DEPARTMENT: number;
    FT_PAY_GRADE: number;
    FT_RANK: number;
    FT_BENEFITS_NUMBER: number;
    FT_SPONSOR_SERVICE: number;
    FT_SPONSOR_STATUS: number;
    FT_SPONSOR: number;
    FT_RELATIONSHIP: number;
    FT_USCIS: number;
    FT_CATEGORY: number;
    FT_CONDITIONS: number;
    FT_IDENTIFIER: number;
    FT_CONFIGURATION: number;
    FT_DISCRETIONARY_DATA: number;
    FT_LINE_1_OPTIONAL_DATA: number;
    FT_LINE_2_OPTIONAL_DATA: number;
    FT_LINE_3_OPTIONAL_DATA: number;
    FT_EQV_CODE: number;
    FT_ALT_CODE: number;
    FT_BINARY_CODE: number;
    FT_PSEUDO_CODE: number;
    FT_FEE: number;
    FT_STAMP_NUMBER: number;
    FT_SBH_SECURITYOPTIONS: number;
    FT_SBH_INTEGRITYOPTIONS: number;
    FT_DATE_OF_CREATION: number;
    FT_VALIDITY_PERIOD: number;
    FT_PATRON_HEADER_VERSION: number;
    FT_BDB_TYPE: number;
    FT_BIOMETRIC_TYPE: number;
    FT_BIOMETRIC_SUBTYPE: number;
    FT_BIOMETRIC_PRODUCTID: number;
    FT_BIOMETRIC_FORMAT_OWNER: number;
    FT_BIOMETRIC_FORMAT_TYPE: number;
    FT_PHONE: number;
    FT_PROFESSION: number;
    FT_TITLE: number;
    FT_PERSONAL_SUMMARY: number;
    FT_OTHER_VALID_ID: number;
    FT_CUSTODY_INFO: number;
    FT_OTHER_NAME: number;
    FT_OBSERVATIONS: number;
    FT_TAX: number;
    FT_DATE_OF_PERSONALIZATION: number;
    FT_PERSONALIZATION_SN: number;
    FT_OTHERPERSON_NAME: number;
    FT_PERSONTONOTIFY_DATE_OF_RECORD: number;
    FT_PERSONTONOTIFY_NAME: number;
    FT_PERSONTONOTIFY_PHONE: number;
    FT_PERSONTONOTIFY_ADDRESS: number;
    FT_DS_CERTIFICATE_ISSUER: number;
    FT_DS_CERTIFICATE_SUBJECT: number;
    FT_DS_CERTIFICATE_VALIDFROM: number;
    FT_DS_CERTIFICATE_VALIDTO: number;
    FT_VRC_DATAOBJECT_ENTRY: number;
    FT_TYPE_APPROVAL_NUMBER: number;
    FT_ADMINISTRATIVE_NUMBER: number;
    FT_DOCUMENT_DISCRIMINATOR: number;
    FT_DATA_DISCRIMINATOR: number;
    FT_ISO_ISSUER_ID_NUMBER: number;
    FT_GNIB_NUMBER: number;
    FT_DEPT_NUMBER: number;
    FT_TELEX_CODE: number;
    FT_ALLERGIES: number;
    FT_SP_CODE: number;
    FT_COURT_CODE: number;
    FT_CTY: number;
    FT_SPONSOR_SSN: number;
    FT_DO_D_NUMBER: number;
    FT_MC_NOVICE_DATE: number;
    FT_DUF_NUMBER: number;
    FT_AGY: number;
    FT_PNR_CODE: number;
    FT_FROM_AIRPORT_CODE: number;
    FT_TO_AIRPORT_CODE: number;
    FT_FLIGHT_NUMBER: number;
    FT_DATE_OF_FLIGHT: number;
    FT_SEAT_NUMBER: number;
    FT_DATE_OF_ISSUE_BOARDING_PASS: number;
    FT_CCW_UNTIL: number;
    FT_REFERENCE_NUMBER_CHECKSUM: number;
    FT_REFERENCE_NUMBER_CHECK_DIGIT: number;
    FT_ROOM_NUMBER: number;
    FT_RELIGION: number;
    FT_REMAINDER_TERM: number;
    FT_ELECTRONIC_TICKET_INDICATOR: number;
    FT_COMPARTMENT_CODE: number;
    FT_CHECK_IN_SEQUENCE_NUMBER: number;
    FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: number;
    FT_AIRLINE_NUMERIC_CODE: number;
    FT_TICKET_NUMBER: number;
    FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR: number;
    FT_FREQUENT_FLYER_NUMBER: number;
    FT_FREE_BAGGAGE_ALLOWANCE: number;
    FT_PDF_417_CODEC: number;
    FT_IDENTITY_CARD_NUMBER_CHECKSUM: number;
    FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT: number;
    FT_VETERAN: number;
    FT_DL_CLASS_CODE_A_1_FROM: number;
    FT_DL_CLASS_CODE_A_1_TO: number;
    FT_DL_CLASS_CODE_A_1_NOTES: number;
    FT_DL_CLASS_CODE_A_FROM: number;
    FT_DL_CLASS_CODE_A_TO: number;
    FT_DL_CLASS_CODE_A_NOTES: number;
    FT_DL_CLASS_CODE_B_FROM: number;
    FT_DL_CLASS_CODE_B_TO: number;
    FT_DL_CLASS_CODE_B_NOTES: number;
    FT_DL_CLASS_CODE_C_1_FROM: number;
    FT_DL_CLASS_CODE_C_1_TO: number;
    FT_DL_CLASS_CODE_C_1_NOTES: number;
    FT_DL_CLASS_CODE_C_FROM: number;
    FT_DL_CLASS_CODE_C_TO: number;
    FT_DL_CLASS_CODE_C_NOTES: number;
    FT_DL_CLASS_CODE_D_1_FROM: number;
    FT_DL_CLASS_CODE_D_1_TO: number;
    FT_DL_CLASS_CODE_D_1_NOTES: number;
    FT_DL_CLASS_CODE_D_FROM: number;
    FT_DL_CLASS_CODE_D_TO: number;
    FT_DL_CLASS_CODE_D_NOTES: number;
    FT_DL_CLASS_CODE_BE_FROM: number;
    FT_DL_CLASS_CODE_BE_TO: number;
    FT_DL_CLASS_CODE_BE_NOTES: number;
    FT_DL_CLASS_CODE_C_1_E_FROM: number;
    FT_DL_CLASS_CODE_C_1_E_TO: number;
    FT_DL_CLASS_CODE_C_1_E_NOTES: number;
    FT_DL_CLASS_CODE_CE_FROM: number;
    FT_DL_CLASS_CODE_CE_TO: number;
    FT_DL_CLASS_CODE_CE_NOTES: number;
    FT_DL_CLASS_CODE_D_1_E_FROM: number;
    FT_DL_CLASS_CODE_D_1_E_TO: number;
    FT_DL_CLASS_CODE_D_1_E_NOTES: number;
    FT_DL_CLASS_CODE_DE_FROM: number;
    FT_DL_CLASS_CODE_DE_TO: number;
    FT_DL_CLASS_CODE_DE_NOTES: number;
    FT_DL_CLASS_CODE_M_FROM: number;
    FT_DL_CLASS_CODE_M_TO: number;
    FT_DL_CLASS_CODE_M_NOTES: number;
    FT_DL_CLASS_CODE_L_FROM: number;
    FT_DL_CLASS_CODE_L_TO: number;
    FT_DL_CLASS_CODE_L_NOTES: number;
    FT_DL_CLASS_CODE_T_FROM: number;
    FT_DL_CLASS_CODE_T_TO: number;
    FT_DL_CLASS_CODE_T_NOTES: number;
    FT_DL_CLASS_CODE_AM_FROM: number;
    FT_DL_CLASS_CODE_AM_TO: number;
    FT_DL_CLASS_CODE_AM_NOTES: number;
    FT_DL_CLASS_CODE_A_2_FROM: number;
    FT_DL_CLASS_CODE_A_2_TO: number;
    FT_DL_CLASS_CODE_A_2_NOTES: number;
    FT_DL_CLASS_CODE_B_1_FROM: number;
    FT_DL_CLASS_CODE_B_1_TO: number;
    FT_DL_CLASS_CODE_B_1_NOTES: number;
    FT_SURNAME_AT_BIRTH: number;
    FT_CIVIL_STATUS: number;
    FT_NUMBER_OF_SEATS: number;
    FT_NUMBER_OF_STANDING_PLACES: number;
    FT_MAX_SPEED: number;
    FT_FUEL_TYPE: number;
    FT_EC_ENVIRONMENTAL_TYPE: number;
    FT_POWER_WEIGHT_RATIO: number;
    FT_MAX_MASS_OF_TRAILER_BRAKED: number;
    FT_MAX_MASS_OF_TRAILER_UNBRAKED: number;
    FT_TRANSMISSION_TYPE: number;
    FT_TRAILER_HITCH: number;
    FT_ACCOMPANIED_BY: number;
    FT_POLICE_DISTRICT: number;
    FT_FIRST_ISSUE_DATE: number;
    FT_PAYLOAD_CAPACITY: number;
    FT_NUMBER_OF_AXELS: number;
    FT_PERMISSIBLE_AXLE_LOAD: number;
    FT_PRECINCT: number;
    FT_INVITED_BY: number;
    FT_PURPOSE_OF_ENTRY: number;
    FT_SKIN_COLOR: number;
    FT_COMPLEXION: number;
    FT_AIRPORT_FROM: number;
    FT_AIRPORT_TO: number;
    FT_AIRLINE_NAME: number;
    FT_AIRLINE_NAME_FREQUENT_FLYER: number;
    FT_LICENSE_NUMBER: number;
    FT_IN_TANKS: number;
    FT_EXEPT_IN_TANKS: number;
    FT_FAST_TRACK: number;
    FT_OWNER: number;
    FT_MRZ_STRINGS_ICAO_RFID: number;
    FT_NUMBER_OF_CARD_ISSUANCE: number;
    FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM: number;
    FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: number;
    FT_CENTURY_DATE_OF_BIRTH: number;
    FT_DL_CLASSCODE_A3_FROM: number;
    FT_DL_CLASSCODE_A3_TO: number;
    FT_DL_CLASSCODE_A3_NOTES: number;
    FT_DL_CLASSCODE_C2_FROM: number;
    FT_DL_CLASSCODE_C2_TO: number;
    FT_DL_CLASSCODE_C2_NOTES: number;
    FT_DL_CLASSCODE_B2_FROM: number;
    FT_DL_CLASSCODE_B2_TO: number;
    FT_DL_CLASSCODE_B2_NOTES: number;
    FT_DL_CLASSCODE_D2_FROM: number;
    FT_DL_CLASSCODE_D2_TO: number;
    FT_DL_CLASSCODE_D2_NOTES: number;
    FT_DL_CLASSCODE_B2E_FROM: number;
    FT_DL_CLASSCODE_B2E_TO: number;
    FT_DL_CLASSCODE_B2E_NOTES: number;
    FT_DL_CLASSCODE_G_FROM: number;
    FT_DL_CLASSCODE_G_TO: number;
    FT_DL_CLASSCODE_G_NOTES: number;
    FT_DL_CLASSCODE_J_FROM: number;
    FT_DL_CLASSCODE_J_TO: number;
    FT_DL_CLASSCODE_J_NOTES: number;
    FT_DL_CLASSCODE_LC_FROM: number;
    FT_DL_CLASSCODE_LC_TO: number;
    FT_DLC_LASSCODE_LC_NOTES: number;
    FT_BANKCARDNUMBER: number;
    FT_BANKCARDVALIDTHRU: number;
    FT_TAX_NUMBER: number;
    FT_HEALTH_NUMBER: number;
    FT_GRANDFATHERNAME: number;
    FT_SELECTEE_INDICATOR: number;
    FT_MOTHER_SURNAME: number;
    FT_MOTHER_GIVENNAME: number;
    FT_FATHER_SURNAME: number;
    FT_FATHER_GIVENNAME: number;
    FT_MOTHER_DATEOFBIRTH: number;
    FT_FATHER_DATEOFBIRTH: number;
    FT_MOTHER_PERSONALNUMBER: number;
    FT_FATHER_PERSONALNUMBER: number;
    FT_MOTHER_PLACEOFBIRTH: number;
    FT_FATHER_PLACEOFBIRTH: number;
    FT_MOTHER_COUNTRYOFBIRTH: number;
    FT_FATHER_COUNTRYOFBIRTH: number;
    FT_DATE_FIRST_RENEWAL: number;
    FT_DATE_SECOND_RENEWAL: number;
    FT_PLACE_OF_EXAMINATION: number;
    FT_APPLICATION_NUMBER: number;
    FT_VOUCHER_NUMBER: number;
    FT_AUTHORIZATION_NUMBER: number;
    FT_FACULTY: number;
    FT_FORM_OF_EDUCATION: number;
    FT_DNI_NUMBER: number;
    FT_RETIREMENT_NUMBER: number;
    FT_PROFESSIONAL_ID_NUMBER: number;
    FT_AGE_AT_ISSUE: number;
    FT_YEARS_SINCE_ISSUE: number;
    FT_DLCLASSCODE_BTP_FROM: number;
    FT_DLCLASSCODE_BTP_NOTES: number;
    FT_DLCLASSCODE_BTP_TO: number;
    FT_DLCLASSCODE_C3_FROM: number;
    FT_DLCLASSCODE_C3_NOTES: number;
    FT_DLCLASSCODE_C3_TO: number;
    FT_DLCLASSCODE_E_FROM: number;
    FT_DLCLASSCODE_E_NOTES: number;
    FT_DLCLASSCODE_E_TO: number;
    FT_DLCLASSCODE_F_FROM: number;
    FT_DLCLASSCODE_F_NOTES: number;
    FT_DLCLASSCODE_F_TO: number;
    FT_DLCLASSCODE_FA_FROM: number;
    FT_DLCLASSCODE_FA_NOTES: number;
    FT_DLCLASSCODE_FA_TO: number;
    FT_DLCLASSCODE_FA1_FROM: number;
    FT_DLCLASSCODE_FA1_NOTES: number;
    FT_DLCLASSCODE_FA1_TO: number;
    FT_DLCLASSCODE_FB_FROM: number;
    FT_DLCLASSCODE_FB_NOTES: number;
    FT_DLCLASSCODE_FB_TO: number;
    FT_DLCLASSCODE_G1_FROM: number;
    FT_DLCLASSCODE_G1_NOTES: number;
    FT_DLCLASSCODE_G1_TO: number;
    FT_DLCLASSCODE_H_FROM: number;
    FT_DLCLASSCODE_H_NOTES: number;
    FT_DLCLASSCODE_H_TO: number;
    FT_DLCLASSCODE_I_FROM: number;
    FT_DLCLASSCODE_I_NOTES: number;
    FT_DLCLASSCODE_I_TO: number;
    FT_DLCLASSCODE_K_FROM: number;
    FT_DLCLASSCODE_K_NOTES: number;
    FT_DLCLASSCODE_K_TO: number;
    FT_DLCLASSCODE_LK_FROM: number;
    FT_DLCLASSCODE_LK_NOTES: number;
    FT_DLCLASSCODE_LK_TO: number;
    FT_DLCLASSCODE_N_FROM: number;
    FT_DLCLASSCODE_N_NOTES: number;
    FT_DLCLASSCODE_N_TO: number;
    FT_DLCLASSCODE_S_FROM: number;
    FT_DLCLASSCODE_S_NOTES: number;
    FT_DLCLASSCODE_S_TO: number;
    FT_DLCLASSCODE_TB_FROM: number;
    FT_DLCLASSCODE_TB_NOTES: number;
    FT_DLCLASSCODE_TB_TO: number;
    FT_DLCLASSCODE_TM_FROM: number;
    FT_DLCLASSCODE_TM_NOTES: number;
    FT_DLCLASSCODE_TM_TO: number;
    FT_DLCLASSCODE_TR_FROM: number;
    FT_DLCLASSCODE_TR_NOTES: number;
    FT_DLCLASSCODE_TR_TO: number;
    FT_DLCLASSCODE_TV_FROM: number;
    FT_DLCLASSCODE_TV_NOTES: number;
    FT_DLCLASSCODE_TV_TO: number;
    FT_DLCLASSCODE_V_FROM: number;
    FT_DLCLASSCODE_V_NOTES: number;
    FT_DLCLASSCODE_V_TO: number;
    FT_DLCLASSCODE_W_FROM: number;
    FT_DLCLASSCODE_W_NOTES: number;
    FT_DLCLASSCODE_W_TO: number;
    FT_URL: number;
    FT_CALIBER: number;
    FT_MODEL: number;
    FT_MAKE: number;
    FT_NUMBER_OF_CYLINDERS: number;
    FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION: number;
    FT_SURNAME_OF_WIFE_AFTER_REGISTRATION: number;
    FT_DATE_OF_BIRTH_OF_WIFE: number;
    FT_DATE_OF_BIRTH_OF_HUSBAND: number;
    FT_CITIZENSHIP_OF_FIRST_PERSON: number;
    FT_CITIZENSHIP_OF_SECOND_PERSON: number;
    FT_CVV: number;
    FT_DATE_OF_INSURANCE_EXPIRY: number;
    FT_MORTGAGE_BY: number;
    FT_OLD_DOCUMENT_NUMBER: number;
    FT_OLD_DATE_OF_ISSUE: number;
    FT_OLD_PLACE_OF_ISSUE: number;
    FT_DLCLASSCODE_LR_FROM: number;
    FT_DLCLASSCODE_LR_TO: number;
    FT_DLCLASSCODE_LR_NOTES: number;
    FT_DLCLASSCODE_MR_FROM: number;
    FT_DLCLASSCODE_MR_TO: number;
    FT_DLCLASSCODE_MR_NOTES: number;
    FT_DLCLASSCODE_HR_FROM: number;
    FT_DLCLASSCODE_HR_TO: number;
    FT_DLCLASSCODE_HR_NOTES: number;
    FT_DLCLASSCODE_HC_FROM: number;
    FT_DLCLASSCODE_HC_TO: number;
    FT_DLCLASSCODE_HC_NOTES: number;
    FT_DLCLASSCODE_MC_FROM: number;
    FT_DLCLASSCODE_MC_TO: number;
    FT_DLCLASSCODE_MC_NOTES: number;
    FT_DLCLASSCODE_RE_FROM: number;
    FT_DLCLASSCODE_RE_TO: number;
    FT_DLCLASSCODE_RE_NOTES: number;
    FT_DLCLASSCODE_R_FROM: number;
    FT_DLCLASSCODE_R_TO: number;
    FT_DLCLASSCODE_R_NOTES: number;
    FT_DLCLASSCODE_CA_FROM: number;
    FT_DLCLASSCODE_CA_TO: number;
    FT_DLCLASSCODE_CA_NOTES: number;
    FT_CITIZENSHIP_STATUS: number;
    FT_MILITARY_SERVICE_FROM: number;
    FT_MILITARY_SERVICE_TO: number;
    getTranslation(value: number): string;
};
export declare const FontStyle: {
    NORMAL: number;
    BOLD: number;
    ITALIC: number;
    BOLD_ITALIC: number;
};
export declare const FrameShapeType: {
    LINE: number;
    CORNER: number;
};
export declare const LCID: {
    LATIN: number;
    AFRIKAANS: number;
    ALBANIAN: number;
    ARABIC_ALGERIA: number;
    ARABIC_BAHRAIN: number;
    ARABIC_EGYPT: number;
    ARABIC_IRAQ: number;
    ARABIC_JORDAN: number;
    ARABIC_KUWAIT: number;
    ARABIC_LEBANON: number;
    ARABIC_LIBYA: number;
    ARABIC_MOROCCO: number;
    ARABIC_OMAN: number;
    ARABIC_QATAR: number;
    ARABIC_SAUDI_ARABIA: number;
    ARABIC_SYRIA: number;
    ARABIC_TUNISIA: number;
    ARABIC_UAE: number;
    ARABIC_YEMEN: number;
    ARABIC_ARMENIAN: number;
    AZERI_CYRILIC: number;
    AZERI_LATIN: number;
    BASQUE: number;
    BELARUSIAN: number;
    BULGARIAN: number;
    CATALAN: number;
    CHINESE_HONGKONG_SAR: number;
    CHINESE_MACAO_SAR: number;
    CHINESE: number;
    CHINESE_SINGAPORE: number;
    CHINESE_TAIWAN: number;
    CROATIAN: number;
    CZECH: number;
    DANISH: number;
    DIVEHI: number;
    DUTCH_BELGIUM: number;
    DUTCH_NETHERLANDS: number;
    ENGLISH_AUSTRALIA: number;
    ENGLISH_BELIZE: number;
    ENGLISH_CANADA: number;
    ENGLISH_CARRIBEAN: number;
    ENGLISH_IRELAND: number;
    ENGLISH_JAMAICA: number;
    ENGLISH_NEW_ZEALAND: number;
    ENGLISH_PHILIPPINES: number;
    ENGLISH_SOUTH_AFRICA: number;
    ENGLISH_TRINIDAD: number;
    ENGLISH_UK: number;
    ENGLISH_US: number;
    ENGLISH_ZIMBABWE: number;
    ESTONIAN: number;
    FAEROESE: number;
    FARSI: number;
    FINNISH: number;
    FRENCH_BELGIUM: number;
    FRENCH_CANADA: number;
    FRENCH_FRANCE: number;
    FRENCH_LUXEMBOURG: number;
    FRENCH_MONACO: number;
    FRENCH_SWITZERLAND: number;
    FYRO_MACEDONIAN: number;
    GALICIAN: number;
    GEORGIAN: number;
    GERMAN_AUSTRIA: number;
    GERMAN_GERMANY: number;
    GERMAN_LIECHTENSTEIN: number;
    GERMAN_LUXEMBOURG: number;
    GERMAN_SWITZERLAND: number;
    GREEK: number;
    GUJARATI: number;
    HEBREW: number;
    HINDI_INDIA: number;
    HUNGARIAN: number;
    ICELANDIC: number;
    INDONESIAN: number;
    ITALIAN_ITALY: number;
    ITALIAN_SWITZERLAND: number;
    JAPANESE: number;
    KANNADA: number;
    KAZAKH: number;
    KONKANI: number;
    KOREAN: number;
    KYRGYZ_CYRILICK: number;
    LATVIAN: number;
    LITHUANIAN: number;
    MALAY_MALAYSIA: number;
    MALAY_BRUNEI_DARUSSALAM: number;
    MARATHI: number;
    MONGOLIAN_CYRILIC: number;
    NORWEGIAN_BOKMAL: number;
    NORWEGIAN_NYORSK: number;
    POLISH: number;
    PORTUGUESE_BRAZIL: number;
    PORTUGUESE_PORTUGAL: number;
    PUNJABI: number;
    RHAETO_ROMANIC: number;
    ROMANIAN: number;
    RUSSIAN: number;
    SANSKRIT: number;
    SERBIAN_CYRILIC: number;
    SERBIAN_LATIN: number;
    SLOVAK: number;
    SLOVENIAN: number;
    SPANISH_ARGENTINA: number;
    SPANISH_BOLIVIA: number;
    SPANISH_CHILE: number;
    SPANICH_COLOMBIA: number;
    SPANISH_COSTA_RICA: number;
    SPANISH_DOMINICAN_REPUBLIC: number;
    SPANISH_ECUADOR: number;
    SPANISH_EL_SALVADOR: number;
    SPANISH_GUATEMALA: number;
    SPANISH_HONDURAS: number;
    SPANISH_MEXICO: number;
    SPANISH_NICARAGUA: number;
    SPANISH_PANAMA: number;
    SPANISH_PARAGUAY: number;
    SPANISH_PERU: number;
    SPANISH_PUERTO_RICO: number;
    SPANISH_TRADITIONAL_SORT: number;
    SPANISH_INTERNATIONAL_SORT: number;
    SPANISH_URUGUAY: number;
    SPANISH_VENEZUELA: number;
    SWAHILI: number;
    SWEDISH: number;
    SWEDISH_FINLAND: number;
    SYRIAC: number;
    TAMIL: number;
    TATAR: number;
    TELUGU: number;
    THAI_THAILAND: number;
    TURKISH: number;
    TAJIK_CYRILLIC: number;
    TURKMEN: number;
    UKRAINIAN: number;
    URDU: number;
    UZBEK_CYRILIC: number;
    UZBEK_LATIN: number;
    VIETNAMESE: number;
    CTC_SIMPLIFIED: number;
    CTC_TRADITIONAL: number;
    getTranslation(value: number): string;
};
export declare const PKDResourceType: {
    CERTIFICATE_PA: number;
    CERTIFICATE_TA: number;
    LDIF: number;
    CRL: number;
    ML: number;
    DEFL: number;
    DEVL: number;
    BL: number;
    getType(value: string): any;
};
export declare const ProcessingFinishedStatus: {
    NOT_READY: number;
    READY: number;
    TIMEOUT: number;
};
export declare const RGLMeasureSystem: {
    METRIC: number;
    IMPERIAL: number;
};
export declare const ScenarioIdentifier: {
    SCENARIO_MRZ: string;
    SCENARIO_BARCODE: string;
    SCENARIO_LOCATE: string;
    SCENARIO_OCR: string;
    SCENARIO_DOCTYPE: string;
    SCENARIO_MRZ_OR_BARCODE: string;
    SCENARIO_MRZ_OR_LOCATE: string;
    SCENARIO_MRZ_AND_LOCATE: string;
    SCENARIO_MRZ_OR_OCR: string;
    SCENARIO_MRZ_OR_BARCODE_OR_OCR: string;
    SCENARIO_LOCATE_VISUAL_AND_MRZ_OR_OCR: string;
    SCENARIO_FULL_PROCESS: string;
    SCENARIO_FULL_AUTH: string;
    SCENARIO_ID3RUS: string;
    SCENARIO_RUS_STAMP: string;
    SCENARIO_OCR_FREE: string;
    SCENARIO_CREDIT_CARD: string;
    SCENARIO_CAPTURE: string;
};
export declare const LineCap: {
    Butt: number;
    Round: number;
    Square: number;
};
export declare const UIInterfaceOrientationMask: {
    Portrait: number;
    LandscapeLeft: number;
    LandscapeRight: number;
    PortraitUpsideDown: number;
    Landscape: number;
    All: number;
    AllButUpsideDown: number;
};
export declare const AVCaptureSessionPreset: {
    Low: number;
    Medium: number;
    High: number;
    Photo: number;
    InputPriority: number;
    QHD960x540: number;
    Hd1280x720: number;
    Hd1920x1080: number;
    Hd4K3840x2160: number;
    IFrame960x540: number;
    IFrame1280x720: number;
    Qvga320x240: number;
    Vga640x480: number;
    Cif352x288: number;
};
export declare const AVCaptureDevicePosition: {
    Front: number;
    Back: number;
    Unspecified: number;
};
export declare const UIViewContentMode: {
    ScaleToFill: number;
    ScaleAspectFit: number;
    ScaleAspectFill: number;
    Redraw: number;
    Center: number;
    Top: number;
    Bottom: number;
    Left: number;
    Right: number;
    TopLeft: number;
    TopRight: number;
    BottomLeft: number;
    BottomRight: number;
};
export declare const Enum: {
    BarcodeResult: {
        NO_ERR: number;
        NULL_PTR_ERR: number;
        BAD_ARG_ERR: number;
        SIZE_ERR: number;
        RANGE_ERR: number;
        INTERNAL_ERR: number;
        TRY_EXCEPT_ERR: number;
        BAR_CODE_NOT_FOUND: number;
        BAR_CODE_DECODE_ERR: number;
        NO_USER_DLL_FOUND: number;
        NO_IPP_DLL_FOUND: number;
        IPP_EXEC_ERR: number;
        IPP_TRY_EXCEPT_ERR: number;
        BARCODE_ERROR_INPUT_PARAM: number;
        BARCODE_ERROR_FINIT: number;
        BARCODE_ERROR_NOT_LOAD_IP_DECODED_LL: number;
        BARCODE_ERROR_INNER_PROBLEM: number;
        BARCODE_ERROR_DECODE_1D_BAD_DECODE: number;
        BARCODE_ERROR_FIND_ROW_OR_COLUMN: number;
        BARCODE_ERROR_FIND_3X8_2D_X: number;
        BARCODE_ERROR_FIND_3X8_2D_Y: number;
        BARCODE_ERROR_2D_UGOL_MAX: number;
        BARCODE_ERROR_INDEFINITELY_DECODED: number;
        BARCODE_ERROR_DLL_NOT_INIT: number;
        BARCODE_ERROR_IP_DECODE_DLL_Try_Except: number;
        IPDECODE_ERROR_LARGEERRORS: number;
        IPDECODE_ERROR_FAULTCOLUMNS: number;
        IPDECODE_ERROR_FAULTROWS: number;
        IPDECODE_ERROR_INCORRECT_ERROR_LEVEL: number;
        IPDECODE_ERROR_LOADING_DEV_TABLE: number;
    };
    BarcodeType: {
        UNKNOWN: number;
        BCT_CODE128: number;
        CODE39: number;
        EAN8: number;
        ITF: number;
        PDF417: number;
        STF: number;
        MTF: number;
        IATA: number;
        CODABAR: number;
        UPCA: number;
        CODE93: number;
        UPCE: number;
        EAN13: number;
        QRCODE: number;
        AZTEC: number;
        DATAMATRIX: number;
        ALL_1D: number;
        CODE11: number;
    };
    CameraMode: {
        AUTO: number;
        CAMERA1: number;
        CAMERA2: number;
    };
    CameraTypes: {
        FRONT: string;
        BACK: string;
    };
    CaptureMode: {
        AUTO: number;
        CAPTURE_VIDEO: number;
        CAPTURE_FRAME: number;
    };
    diDocType: {
        dtNotDefined: number;
        dtPassport: number;
        dtIdentityCard: number;
        dtDiplomaticPassport: number;
        dtServicePassport: number;
        dtSeamansIdentityDocument: number;
        dtIdentityCardforResidence: number;
        dtTraveldocument: number;
        dtOther: number;
        dtVisaID2: number;
        dtVisaID3: number;
        dtRegistrationCertificate: number;
        dtNationalIdentityCard: number;
        dtSocialIdentityCard: number;
        dtAliensIdentityCard: number;
        dtPrivilegedIdentityCard: number;
        dtResidencePermitIdentityCard: number;
        dtOriginCard: number;
        dtEmergencyPassport: number;
        dtAliensPassport: number;
        dtAlternativeIdentityCard: number;
        dtAuthorizationCard: number;
        dtBeginnerPermit: number;
        dtBorderCrossingCard: number;
        dtChauffeurLicense: number;
        dtChauffeurLicenseUnder18: number;
        dtChauffeurLicenseUnder21: number;
        dtCommercialDrivingLicense: number;
        dtCommercialDrivingLicenseIndtuctionalPermit: number;
        dtCommercialDrivingLicenseUnder18: number;
        dtCommercialDrivingLicenseUnder21: number;
        dtCommercialIndtuctionPermit: number;
        dtCommercialNewPermit: number;
        dtConcealedCarryLicense: number;
        dtConcealedFirearmPermit: number;
        dtConditionalDrivingLicense: number;
        dtDepartmentOfVeteransAffairsIdentityCard: number;
        dtDiplomaticDrivingLicense: number;
        dtDrivingLicense: number;
        dtDrivingLicenseIndtuctionalPermit: number;
        dtDrivingLicenseIndtuctionalPermitUnder18: number;
        dtDrivingLicenseIndtuctionalPermitUnder21: number;
        dtDrivingLicenseLearnersPermit: number;
        dtDrivingLicenseLearnersPermitUnder18: number;
        dtDrivingLicenseLearnersPermitUnder21: number;
        dtDrivingLicenseNovice: number;
        dtDrivingLicenseNoviceUnder18: number;
        dtDrivingLicenseNoviceUnder21: number;
        dtDrivingLicenseRegisteredOffender: number;
        dtDrivingLicenseRedtictedUnder18: number;
        dtDrivingLicenseRedtictedUnder21: number;
        dtDrivingLicenseTemporaryVisitor: number;
        dtDrivingLicenseTemporaryVisitorUnder18: number;
        dtDrivingLicenseTemporaryVisitorUnder21: number;
        dtDrivingLicenseUnder18: number;
        dtDrivingLicenseUnder21: number;
        dtEmploymentDrivingPermit: number;
        dtEnhancedChauffeurLicense: number;
        dtEnhancedChauffeurLicenseUnder18: number;
        dtEnhancedChauffeurLicenseUnder21: number;
        dtEnhancedCommercialDrivingLicense: number;
        dtEnhancedDrivingLicense: number;
        dtEnhancedDrivingLicenseUnder18: number;
        dtEnhancedDrivingLicenseUnder21: number;
        dtEnhancedIdentityCard: number;
        dtEnhancedIdentityCardUnder18: number;
        dtEnhancedIdentityCardUnder21: number;
        dtEnhancedOperatorsLicense: number;
        dtFirearmsPermit: number;
        dtFullProvisionalLicense: number;
        dtFullProvisionalLicenseUnder18: number;
        dtFullProvisionalLicenseUnder21: number;
        dtGenevaConventionsIdentityCard: number;
        dtGraduatedDrivingLicenseUnder18: number;
        dtGraduatedDrivingLicenseUnder21: number;
        dtGraduatedIndtuctionPermitUnder18: number;
        dtGraduatedIndtuctionPermitUnder21: number;
        dtGraduatedLicenseUnder18: number;
        dtGraduatedLicenseUnder21: number;
        dtHandgunCarryPermit: number;
        dtIdentityAndPrivilegeCard: number;
        dtIdentityCardMobilityImpaired: number;
        dtIdentityCardRegisteredOffender: number;
        dtIdentityCardTemporaryVisitor: number;
        dtIdentityCardTemporaryVisitorUnder18: number;
        dtIdentityCardTemporaryVisitorUnder21: number;
        dtIdentityCardUnder18: number;
        dtIdentityCardUnder21: number;
        dtIgnitionInterlockPermit: number;
        dtImmigrantVisa: number;
        dtIndtuctionPermit: number;
        dtIndtuctionPermitUnder18: number;
        dtIndtuctionPermitUnder21: number;
        dtInterimDrivingLicense: number;
        dtInterimIdentityCard: number;
        dtIntermediateDrivingLicense: number;
        dtIntermediateDrivingLicenseUnder18: number;
        dtIntermediateDrivingLicenseUnder21: number;
        dtJuniorDrivingLicense: number;
        dtLearnerIndtuctionalPermit: number;
        dtLearnerLicense: number;
        dtLearnerLicenseUnder18: number;
        dtLearnerLicenseUnder21: number;
        dtLearnerPermit: number;
        dtLearnerPermitUnder18: number;
        dtLearnerPermitUnder21: number;
        dtLimitedLicense: number;
        dtLimitedPermit: number;
        dtLimitedTermDrivingLicense: number;
        dtLimitedTermIdentityCard: number;
        dtLiquorIdentityCard: number;
        dtNewPermit: number;
        dtNewPermitUnder18: number;
        dtNewPermitUnder21: number;
        dtNonUsCitizenDrivingLicense: number;
        dtOccupationalDrivingLicense: number;
        dtOneidaTribeOfIndiansIdentityCard: number;
        dtOperatorLicense: number;
        dtOperatorLicenseUnder18: number;
        dtOperatorLicenseUnder21: number;
        dtPermanentDrivingLicense: number;
        dtPermitToReEnter: number;
        dtProbationaryAutoLicense: number;
        dtProbationaryDrivingLicenseUnder18: number;
        dtProbationaryDrivingLicenseUnder21: number;
        dtProbationaryVehicleSalespersonLicense: number;
        dtProvisionalDrivingLicense: number;
        dtProvisionalDrivingLicenseUnder18: number;
        dtProvisionalDrivingLicenseUnder21: number;
        dtProvisionalLicense: number;
        dtProvisionalLicenseUnder18: number;
        dtProvisionalLicenseUnder21: number;
        dtPublicPassengerChauffeurLicense: number;
        dtRacingAndGamingComissionCard: number;
        dtRefugeeTravelDocument: number;
        dtRenewalPermit: number;
        dtRedtictedCommercialDrivingLicense: number;
        dtRedtictedDrivingLicense: number;
        dtRedtictedPermit: number;
        dtSeasonalPermit: number;
        dtSeasonalResidentIdentityCard: number;
        dtSeniorCitizenIdentityCard: number;
        dtSexOffender: number;
        dtSocialSecurityCard: number;
        dtTemporaryDrivingLicense: number;
        dtTemporaryDrivingLicenseUnder18: number;
        dtTemporaryDrivingLicenseUnder21: number;
        dtTemporaryIdentityCard: number;
        dtTemporaryIndtuctionPermitIdentityCard: number;
        dtTemporaryIndtuctionPermitIdentityCardUnder18: number;
        dtTemporaryIndtuctionPermitIdentityCardUnder21: number;
        dtTemporaryVisitorDrivingLicense: number;
        dtTemporaryVisitorDrivingLicenseUnder18: number;
        dtTemporaryVisitorDrivingLicenseUnder21: number;
        dtUniformedServicesIdentityCard: number;
        dtVehicleSalespersonLicense: number;
        dtWorkerIdentificationCredential: number;
        dtCommercialDrivingLicenseNovice: number;
        dtCommercialDrivingLicenseNoviceUnder18: number;
        dtCommercialDrivingLicenseNoviceUnder21: number;
        dtPassportCard: number;
        dtPermanentResidentCard: number;
        dtPersonalIdentificationVerification: number;
        dtTemporaryOperatorLicense: number;
        dtDrivingLicenseUnder19: number;
        dtIdentityCardUnder19: number;
        dtVisa: number;
        dtTemporaryPassport: number;
        dtVotingCard: number;
        dtHealthCard: number;
        dtCertificateOfCitizenship: number;
        dtAddressCard: number;
        dtAirportImmigrationCard: number;
        dtAlienRegidtationCard: number;
        dtAPEHCard: number;
        dtCoupontoDrivingLicense: number;
        dtCrewMemberCertificate: number;
        dtDocumentForReturn: number;
        dtECard: number;
        dtEmploymentCard: number;
        dtHKSARImmigrationForm: number;
        dtImmigrantcard: number;
        dtLabourCard: number;
        dtLaissezPasser: number;
        dtLawyerIdentityCertificate: number;
        dtLicenseCard: number;
        dtPassportStateless: number;
        dtPassportChild: number;
        dtPassportConsular: number;
        dtPassportDiplomaticService: number;
        dtPassportOfficial: number;
        dtPassportProvisional: number;
        dtPassportSpecial: number;
        dtPermissiontotheLocalBorderTraffic: number;
        dtSEDESOLCard: number;
        dtSocialCard: number;
        dtTBCard: number;
        dtVehiclePassport: number;
        dtWDocument: number;
        dtDiplomaticIdentityCard: number;
        dtConsularIdentityCard: number;
        dtIncomeTaxCard: number;
        dtResidencePermit: number;
        dtDocumentOfIdentity: number;
        dtBorderCrossingPermit: number;
        dtPassportLimitedValidity: number;
        dtSIMCard: number;
        dtTaxCard: number;
        dtCompanyCard: number;
        dtDomesticPassport: number;
        dtIdentityCertificate: number;
        dtResidentIdCard: number;
        dtArmedForcesIdentityCard: number;
        dtProfessionalCard: number;
        dtRegistrationStamp: number;
        dtDriverCard: number;
        dtDriverTrainingCertificate: number;
        dtQualificationDrivingLicense: number;
        dtMembershipCard: number;
        dtPublicVehicleDriverAuthorityCard: number;
        dtMarineLicense: number;
        dtTemporaryLearnerDrivingLicense: number;
        dtTemporaryCommercialDrivingLicense: number;
        dtInterimInstructionalPermit: number;
        dtCertificateOfCompetency: number;
        dtCertificateOfProficiency: number;
    };
    DocFormat: {
        ID1: number;
        ID2: number;
        ID3: number;
        ID3_x2: number;
        CUSTOM: number;
        FLEXIBLE: number;
    };
    DocReaderAction: {
        COMPLETE: number;
        PROCESS: number;
        CANCEL: number;
        ERROR: number;
        NOTIFICATION: number;
        PROCESS_WHITE_UV_IMAGES: number;
        MORE_PAGES_AVAILABLE: number;
    };
    DocReaderFrame: {
        MAX: string;
        SCENARIO_DEFAULT: string;
        NONE: string;
        DOCUMENT: string;
    };
    DocReaderOrientation: {
        ALL: number;
        PORTRAIT: number;
        LANDSCAPE: number;
        LANDSCAPE_LEFT: number;
        LANDSCAPE_RIGHT: number;
    };
    eCheckDiagnose: {
        UNKNOWN: number;
        PASS: number;
        INVALID_INPUT_DATA: number;
        INTERNAL_ERROR: number;
        EXCEPTION_IN_MODULE: number;
        UNCERTAIN_VERIFICATION: number;
        NECESSARY_IMAGE_NOT_FOUND: number;
        PHOTO_SIDES_NOT_FOUND: number;
        INVALID_CHECKSUM: number;
        SYNTAX_ERROR: number;
        LOGIC_ERROR: number;
        SOURCES_COMPARISON_ERROR: number;
        FIELDS_COMPARISON_LOGIC_ERROR: number;
        INVALID_FIELD_FORMAT: number;
        TRUE_LUMINISCENCE_ERROR: number;
        FALSE_LUMINISCENCE_ERROR: number;
        FIXED_PATTERN_ERROR: number;
        LOW_CONTRAST_IN_IR_LIGHT: number;
        INCORRECT_BACKGROUND_LIGHT: number;
        BACKGROUND_COMPARISON_ERROR: number;
        INCORRECT_TEXT_COLOR: number;
        PHOTO_FALSE_LUMINISCENCE: number;
        TOO_MUCH_SHIFT: number;
        FIBERS_NOT_FOUND: number;
        TOO_MANY_OBJECTS: number;
        SPECKS_IN_UV: number;
        TOO_LOW_RESOLUTION: number;
        INVISIBLE_ELEMENT_PRESENT: number;
        VISIBLE_ELEMENT_ABSENT: number;
        ELEMENT_SHOULD_BE_COLORED: number;
        ELEMENT_SHOULD_BE_GRAYSCALE: number;
        UV_DULL_PAPER_MRZ: number;
        FALSE_LUMINISCENCE_IN_MRZ: number;
        UV_DULL_PAPER_PHOTO: number;
        UV_DULL_PAPER_BLANK: number;
        UV_DULL_PAPER_ERROR: number;
        FALSE_LUMINISCENCE_IN_BLANK: number;
        BAD_AREA_IN_AXIAL: number;
        FALSE_IPI_PARAMETERS: number;
        FIELD_POS_CORRECTOR_HIGHLIGHT_IR: number;
        OVI_IR_INVISIBLE: number;
        OVI_INSUFFICIENT_AREA: number;
        OVI_COLOR_INVARIABLE: number;
        OVI_BAD_COLOR_FRONT: number;
        OVI_BAD_COLOR_SIDE: number;
        OVI_WIDE_COLOR_SPREAD: number;
        OVI_BAD_COLOR_PERCENT: number;
        HOLOGRAM_ELEMENT_ABSENT: number;
        HOLOGRAM_SIDE_TOP_IMAGES_ABSENT: number;
        HOLOGRAM_ELEMENT_PRESENT: number;
        PHOTO_PATTERN_INTERRUPTED: number;
        PHOTO_PATTERN_SHIFTED: number;
        PHOTO_PATTERN_DIFFERENT_COLORS: number;
        PHOTO_PATTERN_IR_VISIBLE: number;
        PHOTO_PATTERN_NOT_INTERSECT: number;
        PHOTO_SIZE_IS_WRONG: number;
        PHOTO_PATTERN_INVALID_COLOR: number;
        PHOTO_PATTERN_SHIFTED_VERT: number;
        PHOTO_PATTERN_PATTERN_NOT_FOUND: number;
        PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS: number;
        PHOTO_IS_NOT_RECTANGLE: number;
        PHOTO_CORNERS_IS_WRONG: number;
        DOCUMENT_IS_CANCELLING: number;
        TEXT_COLOR_SHOULD_BE_BLUE: number;
        TEXT_COLOR_SHOULD_BE_GREEN: number;
        TEXT_COLOR_SHOULD_BE_RED: number;
        TEXT_SHOULD_BE_BLACK: number;
        BARCODE_WAS_READ_WITH_ERRORS: number;
        BARCODE_DATA_FORMAT_ERROR: number;
        BARCODE_SIZE_PARAMS_ERROR: number;
        NOT_ALL_BARCODES_READ: number;
        PORTRAIT_COMPARISON_PORTRAITS_DIFFER: number;
        PORTRAIT_COMPARISON_NO_SERVICE_REPLY: number;
        PORTRAIT_COMPARISON_SERVICE_ERROR: number;
        PPORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: number;
        PORTRAIT_COMPARISON_NO_LIVE_PHOTO: number;
        PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: number;
        PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: number;
        MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: number;
        MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: number;
        LAST_DIAGNOSE_VALUE: number;
    };
    eCheckResult: {
        CH_CHECK_ERROR: number;
        CH_CHECK_OK: number;
        CH_CHECK_WAS_NOT_DONE: number;
    };
    eGraphicFieldType: {
        GF_PORTRAIT: number;
        GF_FINGERPR: number;
        GF_EYE: number;
        GF_SIGNATURE: number;
        GF_BAR_CODE: number;
        GF_PROOF_OF_CITIZENSHIP: number;
        GF_DOCUMENT_IMAGE: number;
        GF_COLOR_DYNAMIC: number;
        GF_GHOST_PORTRAIT: number;
        GF_STAMP: number;
        GF_PORTRAIT_OF_CHILD: number;
        GF_OTHER: number;
        GF_FINGER_LEFT_THUMB: number;
        GF_FINGER_LEFT_INDEX: number;
        GF_FINGER_LEFT_MIDDLE: number;
        GF_FINGER_LEFT_RING: number;
        GF_FINGER_LEFT_LITTLE: number;
        GF_FINGER_RIGHT_THUMB: number;
        GF_FINGER_RIGHT_INDEX: number;
        GF_FINGER_RIGHT_MIDDLE: number;
        GF_FINGER_RIGHT_RING: number;
        GF_FINGER_RIGHT_LITTLE: number;
        getTranslation(value: number): string;
    };
    eImageQualityCheckType: {
        IQC_IMAGE_GLARES: number;
        IQC_IMAGE_FOCUS: number;
        IQC_IMAGE_RESOLUTION: number;
        IQC_IMAGE_COLORNESS: number;
        IQC_PERSPECTIVE: number;
        IQC_BOUNDS: number;
    };
    eProcessGLCommands: {
        ePC_ProcMgr_SetLicense: number;
        ePC_ProcMgr_Process: number;
        ePC_ProcMgr_ProcessAsync: number;
        ePC_ProcMgr_Init: number;
        ePC_ProcMgr_ProcessImage: number;
        ePC_ProcMgr_StartNewDocument: number;
        ePC_ProcMgr_StartNewPage: number;
        ePC_ProcMgr_Unload: number;
        ePC_ProcMgr_CheckDatabase: number;
        ePC_ProcMgr_ComparePortraits: number;
    };
    eRequestCommand: {
        eReqCmd_RFid_SendData: number;
        eReqCmd_RFid_Notify: number;
        eReqCmd_RFid_GetDataForScenario: number;
        eReqCmd_Torch_GetUVFoto: number;
        eReqCmd_InternetSend: number;
        eReqCmd_GetGuid: number;
    };
    eRFID_AccessControl_ProcedureType: {
        ACPT_UNDEFINED: number;
        ACPT_BAC: number;
        ACPT_PACE: number;
        ACPT_CA: number;
        ACPT_TA: number;
        ACPT_AA: number;
        ACPT_RI: number;
        ACPT_CARD_INFO: number;
    };
    eRFID_AuthenticationProcedureType: {
        aptUndefined: number;
        aptStandard: number;
        aptAdvanced: number;
        aptGeneral: number;
    };
    eRFID_BaudRate: {
        rfbr_106: number;
        rfbr_212: number;
        rfbr_424: number;
        rfbr_848: number;
    };
    eRFID_CertificateType: {
        CT_UNDEFINED: number;
        CT_CSCA: number;
        CT_CSCA_LINK: number;
        CT_DS: number;
        CT_MLS: number;
        CT_DEV_LS: number;
        CT_DEF_LS: number;
    };
    eRFID_DataFile_Type: {
        DFT_UNSPECIFIED: number;
        DFT_PASSPORT_DG1: number;
        DFT_PASSPORT_DG2: number;
        DFT_PASSPORT_DG3: number;
        DFT_PASSPORT_DG4: number;
        DFT_PASSPORT_DG5: number;
        DFT_PASSPORT_DG6: number;
        DFT_PASSPORT_DG7: number;
        DFT_PASSPORT_DG8: number;
        DFT_PASSPORT_DG9: number;
        DFT_PASSPORT_DG10: number;
        DFT_PASSPORT_DG11: number;
        DFT_PASSPORT_DG12: number;
        DFT_PASSPORT_DG13: number;
        DFT_PASSPORT_DG14: number;
        DFT_PASSPORT_DG15: number;
        DFT_PASSPORT_DG16: number;
        DFT_PASSPORT_DG17: number;
        DFT_PASSPORT_DG18: number;
        DFT_PASSPORT_DG19: number;
        DFT_PASSPORT_DG20: number;
        DFT_PASSPORT_SOD: number;
        DFT_PASSPORT_CVCA: number;
        DFT_PASSPORT_COM: number;
        DFT_ID_DG1: number;
        DFT_ID_DG2: number;
        DFT_ID_DG3: number;
        DFT_ID_DG4: number;
        DFT_ID_DG5: number;
        DFT_ID_DG6: number;
        DFT_ID_DG7: number;
        DFT_ID_DG8: number;
        DFT_ID_DG9: number;
        DFT_ID_DG10: number;
        DFT_ID_DG11: number;
        DFT_ID_DG12: number;
        DFT_ID_DG13: number;
        DFT_ID_DG14: number;
        DFT_ID_DG15: number;
        DFT_ID_DG16: number;
        DFT_ID_DG17: number;
        DFT_ID_DG18: number;
        DFT_ID_DG19: number;
        DFT_ID_DG20: number;
        DFT_ID_DG21: number;
        DFT_DL_COM: number;
        DFT_DL_DG1: number;
        DFT_DL_DG2: number;
        DFT_DL_DG3: number;
        DFT_DL_DG4: number;
        DFT_DL_DG5: number;
        DFT_DL_DG6: number;
        DFT_DL_DG7: number;
        DFT_DL_DG8: number;
        DFT_DL_DG9: number;
        DFT_DL_DG10: number;
        DFT_DL_DG11: number;
        DFT_DL_DG12: number;
        DFT_DL_DG13: number;
        DFT_DL_DG14: number;
        DFT_DL_SOD: number;
        DFT_DL_CE: number;
        DFT_DL_CVCA: number;
        DFT_PACE_CARDACCESS: number;
        DFT_PACE_CARDSECURITY: number;
        DFT_PACE_CHIPSECURITY: number;
        DFT_MIFARE_DATA: number;
        DFT_MIFARE_VALIDITY: number;
        DFT_AUTHENTICITYV2: number;
        DFT_ATR: number;
        DFT_ESIGN_PK: number;
        DFT_ESIGN_SIGNEDDATA: number;
        DFT_CERTIFICATE: number;
        DFT_MASTERLIST: number;
        DFT_DEFECTLIST: number;
        DFT_DEVIATIONLIST: number;
        DFT_APP_DIRECTORY: number;
        DFT_SESSION: number;
        DFT_LOGDATA: number;
        DFT_CHIP_PROPERTIES: number;
        DFT_USERDEFINED: number;
        getTranslation(value: number): string;
    };
    eRFID_NotificationAndErrorCodes: {
        RFID_NOTIFICATION_ERROR: number;
        RFID_NOTIFICATION_DOCUMENT_READY: number;
        RFID_NOTIFICATION_READ_PROTOCOL4: number;
        RFID_NOTIFICATION_READ_PROTOCOL3: number;
        RFID_NOTIFICATION_PROGRESS: number;
        RFID_NOTIFICATION_TA_STEP: number;
        RFID_NOTIFICATION_SM_REQUIRED: number;
        RFID_NOTIFICATION_ISO_ERROR: number;
        RFID_NOTIFICATION_PA_REQUEST: number;
        RFID_NOTIFICATION_SM_ESTABLISHED: number;
        RFID_NOTIFICATION_PCSC_READER_DISCONNECTED: number;
        RFID_NOTIFICATION_PCSC_READER_LIST_CHANGED: number;
        RFID_NOTIFICATION_PCSC_BYTES_RECEIVED: number;
        RFID_NOTIFICATION_PCSC_TOTAL_READING_TIME: number;
        RFID_NOTIFICATION_PCSC_DATA_RECEIVED: number;
        RFID_NOTIFICATION_PCSC_BYTES_SENT: number;
        RFID_NOTIFICATION_PCSC_TOTAL_READING_SPEED: number;
        RFID_NOTIFICATION_PCSC_TOTAL_PROCESS_TIME: number;
        RFID_NOTIFICATION_PCSC_READER_LIST_CHANGING: number;
        RFID_NOTIFICATION_PCSC_EXT_LENGTH_SUPPORT: number;
        RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN: number;
        RFID_NOTIFICATION_PA_CERTIFICATE_CHAIN_ITEM: number;
        RFID_NOTIFICATION_SCENARIO: number;
        RFID_NOTIFICATION_PCSC_READING_DATAGROUP: number;
        RFID_NOTIFICATION_PCSC_FILE_NOT_FOUND: number;
        RFID_NOTIFICATION_PCSC_END_OF_FILE: number;
        RFID_NOTIFICATION_PCSC_FILE_ACCESS_DENIED: number;
        RFID_NOTIFICATION_PCSC_APPLICATION_SELECTED: number;
        RFID_NOTIFICATION_AC_PROCEDURE_START: number;
        RFID_NOTIFICATION_AC_PROCEDURE_FINISH: number;
        RFID_NOTIFICATION_PA_SECURITY_OBJECT_CHECK: number;
        RFID_NOTIFICATION_PA_FILE_CHECK: number;
        RFID_NOTIFICATION_PCSC_UPDATING_DATAGROUP: number;
        RFID_NOTIFICATION_AUXILIARY_DATA_VALIDATION: number;
        RFID_NOTIFICATION_RI_SECTOR_ID: number;
        RFID_NOTIFICATION_BIOMETRICS_EMPTY_PLACEHOLDER: number;
        RFID_ERROR_NO_ERROR: number;
        RFID_ERROR_ALREADY_DONE: number;
        RFID_LAYER6_FILE_EOF1: number;
        RFID_LAYER6_PWD_DEACTIVATED: number;
        RFID_LAYER6_PWD_BLOCKED: number;
        RFID_LAYER6_PWD_SUSPENDED: number;
        RFID_LAYER6_PWD_BLOCKED_2: number;
        RFID_LAYER6_PWD_DEACTIVATED_2: number;
        RFID_LAYER6_PWD_SUSPENDED_2: number;
        RFID_LAYER6_MSE_SET_AT_FAILURE: number;
        RFID_LAYER6_INCORRECT_PARAMS: number;
        RFID_LAYER6_FILE_NOT_FOUND: number;
        RFID_LAYER6_NO_REFERENCE_DATA: number;
        RFID_LAYER6_FILE_EOF2: number;
        RFID_Error_GraphManager: number;
        RFID_ERROR_NO_CHIP_DETECTED: number;
        RFID_ERROR_NOT_AVAILABLE: number;
        RFID_ERROR_INVALID_PARAMETER: number;
        RFID_ERROR_NOT_INITIALIZED: number;
        RFID_Error_NotEnoughMemory: number;
        RFID_ERROR_INVALID_DIRECTORY: number;
        RFID_ERROR_UNKNOWN_COMMAND: number;
        RFID_ERROR_FILE_IO_ERROR: number;
        RFID_ERROR_BUSY: number;
        RFID_ERROR_OLD_FIRMWARE: number;
        RFID_ERROR_PCSC_FAILED: number;
        RFID_ERROR_PCSC_READER_NOT_AVAILABLE: number;
        RFID_ERROR_PCSC_CANT_CONNECT_CARD: number;
        RFID_ERROR_PCSC_CARD_IS_NOT_CONNECTED: number;
        RFID_ERROR_PCSC_OPERATION_CANCELLED: number;
        RFID_ERROR_PCSC_CARD_IS_BUSY: number;
        RFID_ERROR_PCSC_FAILED_S_CARD: number;
        RFID_ERROR_PCSC_EXT_LE_FAILED: number;
        RFID_LAYER6_PWD_FAILED: number;
        RFID_ERROR_NOT_PERFORMED: number;
        RFID_ERROR_SESSION_IS_CLOSED: number;
        RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: number;
        RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: number;
        RFID_ERROR_SESSION_PROCEDURE_TYPE_UNSUPPORTED: number;
        RFID_ERROR_SESSION_PROCEDURE_TYPE_NOT_SET: number;
        RFID_ERROR_SESSION_ACCESS_KEY_UNKNOWN_TYPE: number;
        RFID_ERROR_SESSION_ACCESS_KEY_UNSUPPORTED_SM_TYPE: number;
        RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_SM_TYPE: number;
        RFID_ERROR_SESSION_ACCESS_KEY_RESTRICTED: number;
        RFID_ERROR_SESSION_ACCESS_KEY_INCORRECT_DATA: number;
        RFID_ERROR_SESSION_ACCESS_KEY_NOT_SET: number;
        RFID_ERROR_SESSION_PWD_MANAGEMENT_NOT_AUTHORIZED: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_UNKNOWN_TYPE: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_SM: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_PACE: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA_KEYS: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_TA: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_REQUIRES_CA: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_INCORRECT_OPTION_CA: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_CA_FAILED: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_TA_FAILED: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_AA_FAILED: number;
        RFID_ERROR_SESSION_ACCESS_CONTROL_RI_FAILED: number;
        RFID_ERROR_SESSION_PA_SIGNATURE_CHECK_FAILED: number;
        RFID_ERROR_SESSION_PA_HASH_CHECK_FAILED: number;
        RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_EXPIRY: number;
        RFID_ERROR_SESSION_INVALID_AUX_DATA_DATE_OF_BIRTH: number;
        RFID_ERROR_SESSION_INVALID_AUX_DATA_COMMUNITY_ID: number;
        RFID_ERROR_SESSION_E_SIGN_REQUIRES_APP_SELECTION: number;
        RFID_ERROR_SESSION_E_SIGN_PIN_NOT_SET: number;
        RFID_ERROR_SESSION_E_SIGN_PIN_NOT_VERIFIED: number;
        RFID_ERROR_SESSION_INCORRECT_DATA: number;
        RFID_ERROR_SESSION_FILE_NOT_ENOUGH_DATA: number;
        RFID_ERROR_SESSION_FILE_INCORRECT_DATA: number;
        RFID_ERROR_SESSION_FILE_UNEXPECTED_DATA: number;
        RFID_ERROR_SESSION_FILE_CONTENTS_UNEXPECTED_DATA: number;
        RFID_ERROR_SESSION_FILE_WRONG_TAG: number;
        RFID_ERROR_SESSION_FILE_CANT_USE_DATA: number;
        RFID_ERROR_SESSION_FILE_CANT_READ_DATA: number;
        RFID_ERROR_SESSION_FILE_ACCESS_DENIED: number;
        RFID_LAYER6_SECURITY_MANAGER: number;
        RFID_LAYER6_APP_SELECTION_FAILURE: number;
        RFID_LAYER6_MUTUAL_AUTH_MAC_FAIL: number;
        RFID_LAYER6_MUTUAL_AUTH_ENC_FAIL: number;
        RFID_LAYER6_MUTUAL_AUTH_FAILURE: number;
        RFID_LAYER6_SM_DO8E_MISSING: number;
        RFID_LAYER6_SM_DO87_MISSING: number;
        RFID_LAYER6_SM_DO99_MISSING: number;
        RFID_LAYER6_SM_MAC_INCORRECT: number;
        RFID_LAYER6_SM_DO87_INCORRECT: number;
        RFID_LAYER6_NON_TLV_RESPONSE_DATA: number;
        RFID_LAYER6_WRONG_RND_ICC_LENGTH: number;
        RFID_LAYER6_INT_AUTH_FAILURE: number;
        RFID_LAYER6_MSE_SET_KAT_FAILURE: number;
        RFID_LAYER6_MSE_SET_DST_FAILURE: number;
        RFID_LAYER6_PSO_CERTIFICATE_FAILURE: number;
        RFID_LAYER6_GET_CHALLENGE_FAILURE: number;
        RFID_LAYER6_EXT_AUTH_FAILURE: number;
        RFID_LAYER6_GENERAL_AUTH_FAILURE: number;
        RFID_ERROR_FAILED: number;
        getTranslation(value: number): string;
    };
    eRFID_Password_Type: {
        PPT_UNKNOWN: number;
        PPT_MRZ: number;
        PPT_CAN: number;
        PPT_PIN: number;
        PPT_PUK: number;
        PPT_PIN_ESIGN: number;
        PPT_SAI: number;
    };
    eRFID_SDK_ProfilerType: {
        SPT_DOC_9303_EDITION_2006: number;
        SPT_DOC_9303_LDS_PKI_MAINTENANCE: number;
    };
    eRFID_TerminalType: {
        TET_UNDEFINED: number;
        TET_INSPECTION_SYSTEM: number;
        TET_AUTHENTICATION_TERMINAL: number;
        TET_SIGNATURE_TERMINAL: number;
        TET_UNAUTHENTICATED_TERMINAL: number;
    };
    eRPRM_Authenticity: {
        NONE: number;
        UV_LUMINESCENCE: number;
        IR_B900: number;
        IMAGE_PATTERN: number;
        AXIAL_PROTECTION: number;
        UV_FIBERS: number;
        IR_VISIBILITY: number;
        OCR_SECURITY_TEXT: number;
        IPI: number;
        PHOTO_EMBED_TYPE: number;
        HOLOGRAMS: number;
        PHOTO_AREA: number;
        PORTRAIT_COMPARISON: number;
        BARCODE_FORMAT_CHECK: number;
        KINEGRAM: number;
        HOLOGRAMS_DETECTION: number;
    };
    eRPRM_FieldVerificationResult: {
        RCF_DISABLED: number;
        RCF_VERIFIED: number;
        RCF_NOT_VERIFIED: number;
        RCF_COMPARE_TRUE: number;
        RCF_COMPARE_FALSE: number;
    };
    eRPRM_Lights: {
        NONE: number;
        RPRM_LIGHT_UV: number;
        RPRM_LIGHT_WHITE_FULL: number;
        getTranslation(value: number): string;
    };
    eRPRM_ResultType: {
        NONE: number;
        RPRM_RESULT_TYPE_EMPTY: number;
        RPRM_RESULT_TYPE_RAW_IMAGE: number;
        RPRM_RESULT_TYPE_FILE_IMAGE: number;
        RPRM_RESULT_TYPE_MRZ_OCR_EXTENDED: number;
        RPRM_RESULT_TYPE_BARCODES: number;
        RPRM_RESULT_TYPE_GRAPHICS: number;
        RPRM_RESULT_TYPE_MRZ_TEST_QUALITY: number;
        RPRM_RESULT_TYPE_DOCUMENT_TYPES_CANDIDATES: number;
        RPRM_RESULT_TYPE_CHOSEN_DOCUMENT_TYPE_CANDIDATE: number;
        RPRM_RESULT_TYPE_DOCUMENTS_INFO_LIST: number;
        RPRM_RESULT_TYPE_OCR_LEXICAL_ANALYZE: number;
        RPRM_RESULT_TYPE_RAW_UNCROPPED_IMAGE: number;
        RPRM_RESULT_TYPE_VISUAL_OCR_EXTENDED: number;
        RPRM_RESULT_TYPE_BAR_CODES_TEXT_DATA: number;
        RPRM_RESULT_TYPE_BAR_CODES_IMAGE_DATA: number;
        RPRM_RESULT_TYPE_AUTHENTICITY: number;
        RPRM_RESULT_TYPE_EOS_IMAGE: number;
        RPRM_RESULT_TYPE_BAYER_IMAGE: number;
        RPRM_RESULT_TYPE_MAGNETIC_STRIPE: number;
        RPRM_RESULT_TYPE_MAGNETIC_STRIPE_TEXT_DATA: number;
        RPRM_RESULT_TYPE_FIELD_FILE_IMAGE: number;
        RPRM_RESULT_TYPE_DATABASE_CHECK: number;
        RPRM_RESULT_TYPE_FINGERPRINT_TEMPLATE_ISO: number;
        RPRM_RESULT_TYPE_INPUT_IMAGE_QUALITY: number;
        RPRM_RESULT_TYPE_DOCUMENT_POSITION: number;
        RPRM_RESULT_TYPE_CUSTOM: number;
        RFID_RESULT_TYPE_RFID_RAW_DATA: number;
        RFID_RESULT_TYPE_RFID_TEXT_DATA: number;
        RFID_RESULT_TYPE_RFID_IMAGE_DATA: number;
        RFID_RESULT_TYPE_RFID_BINARY_DATA: number;
        RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: number;
        RPRM_RESULT_TYPE_BARCODE_POSITION: number;
        RPRM_RESULT_TYPE_MRZ_POSITION: number;
    };
    eRPRM_SecurityFeatureType: {
        NONE: number;
        SECURITY_FEATURE_TYPE_BLANK: number;
        SECURITY_FEATURE_TYPE_FILL: number;
        SECURITY_FEATURE_TYPE_PHOTO: number;
        SECURITY_FEATURE_TYPE_MRZ: number;
        SECURITY_FEATURE_TYPE_FALSE_LUMINESCENCE: number;
        SECURITY_FEATURE_TYPE_HOLO_SIMPLE: number;
        SECURITY_FEATURE_TYPE_HOLO_VERIFY_STATIC: number;
        SECURITY_FEATURE_TYPE_HOLO_VERIFY_MULTI_STATIC: number;
        SECURITY_FEATURE_TYPE_HOLO_VERIFY_DINAMIC: number;
        SECURITY_FEATURE_TYPE_PATTERN_NOT_INTERRUPTED: number;
        SECURITY_FEATURE_TYPE_PATTERN_NOT_SHIFTED: number;
        SECURITY_FEATURE_TYPE_PATTERN_SAME_COLORS: number;
        SECURITY_FEATURE_TYPE_PATTERN_IR_INVISIBLE: number;
        SECURITY_FEATURE_TYPE_PHOTO_SIZE_CHECK: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_GHOST: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_RFID: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_VISUAL: number;
        SECURITY_FEATURE_TYPE_BARCODE: number;
        SECURITY_FEATURE_TYPE_PATTERN_DIFFERENT_LINES_THICKNESS: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_CAMERA: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_CAMERA: number;
        SECURITY_FEATURE_TYPE_GHOST_PHOTO: number;
        SECURITY_FEATURE_TYPE_CLEAR_GHOST_PHOTO: number;
        SECURITY_FEATURE_TYPE_INVISIBLE_OBJECT: number;
        SECURITY_FEATURE_TYPE_LOW_CONTRAST_OBJECT: number;
        SECURITY_FEATURE_TYPE_PHOTO_COLOR: number;
        SECURITY_FEATURE_TYPE_PHOTO_SHAPE: number;
        SECURITY_FEATURE_TYPE_PHOTO_CORNERS: number;
        DOCUMENT_CANCELLING_DETECTOR: number;
    };
    eSignManagementAction: {
        smaUndefined: number;
        smaCreatePIN: number;
        smaChangePIN: number;
        smaUnblockPIN: number;
        smaTerminatePIN: number;
        smaGenerateKeys: number;
        smaTerminateKeys: number;
        smaSignData: number;
    };
    eVisualFieldType: {
        FT_DOCUMENT_CLASS_CODE: number;
        FT_ISSUING_STATE_CODE: number;
        FT_DOCUMENT_NUMBER: number;
        FT_DATE_OF_EXPIRY: number;
        FT_DATE_OF_ISSUE: number;
        FT_DATE_OF_BIRTH: number;
        FT_PLACE_OF_BIRTH: number;
        FT_PERSONAL_NUMBER: number;
        FT_SURNAME: number;
        FT_GIVEN_NAMES: number;
        FT_MOTHERS_NAME: number;
        FT_NATIONALITY: number;
        FT_SEX: number;
        FT_HEIGHT: number;
        FT_WEIGHT: number;
        FT_EYES_COLOR: number;
        FT_HAIR_COLOR: number;
        FT_ADDRESS: number;
        FT_DONOR: number;
        FT_SOCIAL_SECURITY_NUMBER: number;
        FT_DL_CLASS: number;
        FT_DL_ENDORSED: number;
        FT_DL_RESTRICTION_CODE: number;
        FT_DL_UNDER_21_DATE: number;
        FT_AUTHORITY: number;
        FT_SURNAME_AND_GIVEN_NAMES: number;
        FT_NATIONALITY_CODE: number;
        FT_PASSPORT_NUMBER: number;
        FT_INVITATION_NUMBER: number;
        FT_VISA_ID: number;
        FT_VISA_CLASS: number;
        FT_VISA_SUB_CLASS: number;
        FT_MRZ_STRING_1: number;
        FT_MRZ_STRING_2: number;
        FT_MRZ_STRING_3: number;
        FT_MRZ_TYPE: number;
        FT_OPTIONAL_DATA: number;
        FT_DOCUMENT_CLASS_NAME: number;
        FT_ISSUING_STATE_NAME: number;
        FT_PLACE_OF_ISSUE: number;
        FT_DOCUMENT_NUMBER_CHECKSUM: number;
        FT_DATE_OF_BIRTH_CHECKSUM: number;
        FT_DATE_OF_EXPIRY_CHECKSUM: number;
        FT_PERSONAL_NUMBER_CHECKSUM: number;
        FT_FINAL_CHECKSUM: number;
        FT_PASSPORT_NUMBER_CHECKSUM: number;
        FT_INVITATION_NUMBER_CHECKSUM: number;
        FT_VISA_ID_CHECKSUM: number;
        FT_SURNAME_AND_GIVEN_NAMES_CHECKSUM: number;
        FT_VISA_VALID_UNTIL_CHECKSUM: number;
        FT_OTHER: number;
        FT_MRZ_STRINGS: number;
        FT_NAME_SUFFIX: number;
        FT_NAME_PREFIX: number;
        FT_DATE_OF_ISSUE_CHECKSUM: number;
        FT_DATE_OF_ISSUE_CHECK_DIGIT: number;
        FT_DOCUMENT_SERIES: number;
        FT_REG_CERT_REG_NUMBER: number;
        FT_REG_CERT_CAR_MODEL: number;
        FT_REG_CERT_CAR_COLOR: number;
        FT_REG_CERT_BODY_NUMBER: number;
        FT_REG_CERT_CAR_TYPE: number;
        FT_REG_CERT_MAX_WEIGHT: number;
        FT_REG_CERT_WEIGHT: number;
        FT_ADDRESS_AREA: number;
        FT_ADDRESS_STATE: number;
        FT_ADDRESS_BUILDING: number;
        FT_ADDRESS_HOUSE: number;
        FT_ADDRESS_FLAT: number;
        FT_PLACE_OF_REGISTRATION: number;
        FT_DATE_OF_REGISTRATION: number;
        FT_RESIDENT_FROM: number;
        FT_RESIDENT_UNTIL: number;
        FT_AUTHORITY_CODE: number;
        FT_PLACE_OF_BIRTH_AREA: number;
        FT_PLACE_OF_BIRTH_STATE_CODE: number;
        FT_ADDRESS_STREET: number;
        FT_ADDRESS_CITY: number;
        FT_ADDRESS_JURISDICTION_CODE: number;
        FT_ADDRESS_POSTAL_CODE: number;
        FT_DOCUMENT_NUMBER_CHECK_DIGIT: number;
        FT_DATE_OF_BIRTH_CHECK_DIGIT: number;
        FT_DATE_OF_EXPIRY_CHECK_DIGIT: number;
        FT_PERSONAL_NUMBER_CHECK_DIGIT: number;
        FT_FINAL_CHECK_DIGIT: number;
        FT_PASSPORT_NUMBER_CHECK_DIGIT: number;
        FT_INVITATION_NUMBER_CHECK_DIGIT: number;
        FT_VISA_ID_CHECK_DIGIT: number;
        FT_SURNAME_AND_GIVEN_NAMES_CHECK_DIGIT: number;
        FT_VISA_VALID_UNTIL_CHECK_DIGIT: number;
        FT_PERMIT_DL_CLASS: number;
        FT_PERMIT_DATE_OF_EXPIRY: number;
        FT_PERMIT_IDENTIFIER: number;
        FT_PERMIT_DATE_OF_ISSUE: number;
        FT_PERMIT_RESTRICTION_CODE: number;
        FT_PERMIT_ENDORSED: number;
        FT_ISSUE_TIMESTAMP: number;
        FT_NUMBER_OF_DUPLICATES: number;
        FT_MEDICAL_INDICATOR_CODES: number;
        FT_NON_RESIDENT_INDICATOR: number;
        FT_VISA_TYPE: number;
        FT_VISA_VALID_FROM: number;
        FT_VISA_VALID_UNTIL: number;
        FT_DURATION_OF_STAY: number;
        FT_NUMBER_OF_ENTRIES: number;
        FT_DAY: number;
        FT_MONTH: number;
        FT_YEAR: number;
        FT_UNIQUE_CUSTOMER_IDENTIFIER: number;
        FT_COMMERCIAL_VEHICLE_CODES: number;
        FT_AKA_DATE_OF_BIRTH: number;
        FT_AKA_SOCIAL_SECURITY_NUMBER: number;
        FT_AKA_SURNAME: number;
        FT_AKA_GIVEN_NAMES: number;
        FT_AKA_NAME_SUFFIX: number;
        FT_AKA_NAME_PREFIX: number;
        FT_MAILING_ADDRESS_STREET: number;
        FT_MAILING_ADDRESS_CITY: number;
        FT_MAILING_ADDRESS_JURISDICTION_CODE: number;
        FT_MAILING_ADDRESS_POSTAL_CODE: number;
        FT_AUDIT_INFORMATION: number;
        FT_INVENTORY_NUMBER: number;
        FT_RACE_ETHNICITY: number;
        FT_JURISDICTION_VEHICLE_CLASS: number;
        FT_JURISDICTION_ENDORSEMENT_CODE: number;
        FT_JURISDICTION_RESTRICTION_CODE: number;
        FT_FAMILY_NAME: number;
        FT_GIVEN_NAMES_RUS: number;
        FT_VISA_ID_RUS: number;
        FT_FATHERS_NAME: number;
        FT_FATHERS_NAME_RUS: number;
        FT_SURNAME_AND_GIVEN_NAMES_RUS: number;
        FT_PLACE_OF_BIRTH_RUS: number;
        FT_AUTHORITY_RUS: number;
        FT_ISSUING_STATE_CODE_NUMERIC: number;
        FT_NATIONALITY_CODE_NUMERIC: number;
        FT_ENGINE_POWER: number;
        FT_ENGINE_VOLUME: number;
        FT_CHASSIS_NUMBER: number;
        FT_ENGINE_NUMBER: number;
        FT_ENGINE_MODEL: number;
        FT_VEHICLE_CATEGORY: number;
        FT_IDENTITY_CARD_NUMBER: number;
        FT_CONTROL_NO: number;
        FT_PARRENTS_GIVEN_NAMES: number;
        FT_SECOND_SURNAME: number;
        FT_MIDDLE_NAME: number;
        FT_REG_CERT_VIN: number;
        FT_REG_CERT_VIN_CHECK_DIGIT: number;
        FT_REG_CERT_VIN_CHECKSUM: number;
        FT_LINE_1_CHECK_DIGIT: number;
        FT_LINE_2_CHECK_DIGIT: number;
        FT_LINE_3_CHECK_DIGIT: number;
        FT_LINE_1_CHECKSUM: number;
        FT_LINE_2_CHECKSUM: number;
        FT_LINE_3_CHECKSUM: number;
        FT_REG_CERT_REG_NUMBER_CHECK_DIGIT: number;
        FT_REG_CERT_REG_NUMBER_CHECKSUM: number;
        FT_REG_CERT_VEHICLE_ITS_CODE: number;
        FT_CARD_ACCESS_NUMBER: number;
        FT_MARITAL_STATUS: number;
        FT_COMPANY_NAME: number;
        FT_SPECIAL_NOTES: number;
        FT_SURNAME_OF_SPOSE: number;
        FT_TRACKING_NUMBER: number;
        FT_BOOKLET_NUMBER: number;
        FT_CHILDREN: number;
        FT_COPY: number;
        FT_SERIAL_NUMBER: number;
        FT_DOSSIER_NUMBER: number;
        FT_AKA_SURNAME_AND_GIVEN_NAMES: number;
        FT_TERRITORIAL_VALIDITY: number;
        FT_MRZ_STRINGS_WITH_CORRECT_CHECK_SUMS: number;
        FT_DL_CDL_RESTRICTION_CODE: number;
        FT_DL_UNDER_18_DATE: number;
        FT_DL_RECORD_CREATED: number;
        FT_DL_DUPLICATE_DATE: number;
        FT_DL_ISS_TYPE: number;
        FT_MILITARY_BOOK_NUMBER: number;
        FT_DESTINATION: number;
        FT_BLOOD_GROUP: number;
        FT_SEQUENCE_NUMBER: number;
        FT_REG_CERT_BODY_TYPE: number;
        FT_REG_CERT_CAR_MARK: number;
        FT_TRANSACTION_NUMBER: number;
        FT_AGE: number;
        FT_FOLIO_NUMBER: number;
        FT_VOTER_KEY: number;
        FT_ADDRESS_MUNICIPALITY: number;
        FT_ADDRESS_LOCATION: number;
        FT_SECTION: number;
        FT_OCR_NUMBER: number;
        FT_FEDERAL_ELECTIONS: number;
        FT_REFERENCE_NUMBER: number;
        FT_OPTIONAL_DATA_CHECKSUM: number;
        FT_OPTIONAL_DATA_CHECK_DIGIT: number;
        FT_VISA_NUMBER: number;
        FT_VISA_NUMBER_CHECKSUM: number;
        FT_VISA_NUMBER_CHECK_DIGIT: number;
        FT_VOTER: number;
        FT_PREVIOUS_TYPE: number;
        FT_FIELD_FROM_MRZ: number;
        FT_CURRENT_DATE: number;
        FT_STATUS_DATE_OF_EXPIRY: number;
        FT_BANKNOTE_NUMBER: number;
        FT_CSC_CODE: number;
        FT_ARTISTIC_NAME: number;
        FT_ACADEMIC_TITLE: number;
        FT_ADDRESS_COUNTRY: number;
        FT_ADDRESS_ZIPCODE: number;
        FT_E_ID_RESIDENCE_PERMIT_1: number;
        FT_E_ID_RESIDENCE_PERMIT_2: number;
        FT_E_ID_PLACE_OF_BIRTH_STREET: number;
        FT_E_ID_PLACE_OF_BIRTH_CITY: number;
        FT_E_ID_PLACE_OF_BIRTH_STATE: number;
        FT_E_ID_PLACE_OF_BIRTH_COUNTRY: number;
        FT_E_ID_PLACE_OF_BIRTH_ZIPCODE: number;
        FT_CDL_CLASS: number;
        FT_DL_UNDER_19_DATE: number;
        FT_WEIGHT_POUNDS: number;
        FT_LIMITED_DURATION_DOCUMENT_INDICATOR: number;
        FT_ENDORSEMENT_EXPIRATION_DATE: number;
        FT_REVISION_DATE: number;
        FT_COMPLIANCE_TYPE: number;
        FT_FAMILY_NAME_TRUNCATION: number;
        FT_FIRST_NAME_TRUNCATION: number;
        FT_MIDDLE_NAME_TRUNCATION: number;
        FT_EXAM_DATE: number;
        FT_ORGANIZATION: number;
        FT_DEPARTMENT: number;
        FT_PAY_GRADE: number;
        FT_RANK: number;
        FT_BENEFITS_NUMBER: number;
        FT_SPONSOR_SERVICE: number;
        FT_SPONSOR_STATUS: number;
        FT_SPONSOR: number;
        FT_RELATIONSHIP: number;
        FT_USCIS: number;
        FT_CATEGORY: number;
        FT_CONDITIONS: number;
        FT_IDENTIFIER: number;
        FT_CONFIGURATION: number;
        FT_DISCRETIONARY_DATA: number;
        FT_LINE_1_OPTIONAL_DATA: number;
        FT_LINE_2_OPTIONAL_DATA: number;
        FT_LINE_3_OPTIONAL_DATA: number;
        FT_EQV_CODE: number;
        FT_ALT_CODE: number;
        FT_BINARY_CODE: number;
        FT_PSEUDO_CODE: number;
        FT_FEE: number;
        FT_STAMP_NUMBER: number;
        FT_SBH_SECURITYOPTIONS: number;
        FT_SBH_INTEGRITYOPTIONS: number;
        FT_DATE_OF_CREATION: number;
        FT_VALIDITY_PERIOD: number;
        FT_PATRON_HEADER_VERSION: number;
        FT_BDB_TYPE: number;
        FT_BIOMETRIC_TYPE: number;
        FT_BIOMETRIC_SUBTYPE: number;
        FT_BIOMETRIC_PRODUCTID: number;
        FT_BIOMETRIC_FORMAT_OWNER: number;
        FT_BIOMETRIC_FORMAT_TYPE: number;
        FT_PHONE: number;
        FT_PROFESSION: number;
        FT_TITLE: number;
        FT_PERSONAL_SUMMARY: number;
        FT_OTHER_VALID_ID: number;
        FT_CUSTODY_INFO: number;
        FT_OTHER_NAME: number;
        FT_OBSERVATIONS: number;
        FT_TAX: number;
        FT_DATE_OF_PERSONALIZATION: number;
        FT_PERSONALIZATION_SN: number;
        FT_OTHERPERSON_NAME: number;
        FT_PERSONTONOTIFY_DATE_OF_RECORD: number;
        FT_PERSONTONOTIFY_NAME: number;
        FT_PERSONTONOTIFY_PHONE: number;
        FT_PERSONTONOTIFY_ADDRESS: number;
        FT_DS_CERTIFICATE_ISSUER: number;
        FT_DS_CERTIFICATE_SUBJECT: number;
        FT_DS_CERTIFICATE_VALIDFROM: number;
        FT_DS_CERTIFICATE_VALIDTO: number;
        FT_VRC_DATAOBJECT_ENTRY: number;
        FT_TYPE_APPROVAL_NUMBER: number;
        FT_ADMINISTRATIVE_NUMBER: number;
        FT_DOCUMENT_DISCRIMINATOR: number;
        FT_DATA_DISCRIMINATOR: number;
        FT_ISO_ISSUER_ID_NUMBER: number;
        FT_GNIB_NUMBER: number;
        FT_DEPT_NUMBER: number;
        FT_TELEX_CODE: number;
        FT_ALLERGIES: number;
        FT_SP_CODE: number;
        FT_COURT_CODE: number;
        FT_CTY: number;
        FT_SPONSOR_SSN: number;
        FT_DO_D_NUMBER: number;
        FT_MC_NOVICE_DATE: number;
        FT_DUF_NUMBER: number;
        FT_AGY: number;
        FT_PNR_CODE: number;
        FT_FROM_AIRPORT_CODE: number;
        FT_TO_AIRPORT_CODE: number;
        FT_FLIGHT_NUMBER: number;
        FT_DATE_OF_FLIGHT: number;
        FT_SEAT_NUMBER: number;
        FT_DATE_OF_ISSUE_BOARDING_PASS: number;
        FT_CCW_UNTIL: number;
        FT_REFERENCE_NUMBER_CHECKSUM: number;
        FT_REFERENCE_NUMBER_CHECK_DIGIT: number;
        FT_ROOM_NUMBER: number;
        FT_RELIGION: number;
        FT_REMAINDER_TERM: number;
        FT_ELECTRONIC_TICKET_INDICATOR: number;
        FT_COMPARTMENT_CODE: number;
        FT_CHECK_IN_SEQUENCE_NUMBER: number;
        FT_AIRLINE_DESIGNATOR_OF_BOARDING_PASS_ISSUER: number;
        FT_AIRLINE_NUMERIC_CODE: number;
        FT_TICKET_NUMBER: number;
        FT_FREQUENT_FLYER_AIRLINE_DESIGNATOR: number;
        FT_FREQUENT_FLYER_NUMBER: number;
        FT_FREE_BAGGAGE_ALLOWANCE: number;
        FT_PDF_417_CODEC: number;
        FT_IDENTITY_CARD_NUMBER_CHECKSUM: number;
        FT_IDENTITY_CARD_NUMBER_CHECK_DIGIT: number;
        FT_VETERAN: number;
        FT_DL_CLASS_CODE_A_1_FROM: number;
        FT_DL_CLASS_CODE_A_1_TO: number;
        FT_DL_CLASS_CODE_A_1_NOTES: number;
        FT_DL_CLASS_CODE_A_FROM: number;
        FT_DL_CLASS_CODE_A_TO: number;
        FT_DL_CLASS_CODE_A_NOTES: number;
        FT_DL_CLASS_CODE_B_FROM: number;
        FT_DL_CLASS_CODE_B_TO: number;
        FT_DL_CLASS_CODE_B_NOTES: number;
        FT_DL_CLASS_CODE_C_1_FROM: number;
        FT_DL_CLASS_CODE_C_1_TO: number;
        FT_DL_CLASS_CODE_C_1_NOTES: number;
        FT_DL_CLASS_CODE_C_FROM: number;
        FT_DL_CLASS_CODE_C_TO: number;
        FT_DL_CLASS_CODE_C_NOTES: number;
        FT_DL_CLASS_CODE_D_1_FROM: number;
        FT_DL_CLASS_CODE_D_1_TO: number;
        FT_DL_CLASS_CODE_D_1_NOTES: number;
        FT_DL_CLASS_CODE_D_FROM: number;
        FT_DL_CLASS_CODE_D_TO: number;
        FT_DL_CLASS_CODE_D_NOTES: number;
        FT_DL_CLASS_CODE_BE_FROM: number;
        FT_DL_CLASS_CODE_BE_TO: number;
        FT_DL_CLASS_CODE_BE_NOTES: number;
        FT_DL_CLASS_CODE_C_1_E_FROM: number;
        FT_DL_CLASS_CODE_C_1_E_TO: number;
        FT_DL_CLASS_CODE_C_1_E_NOTES: number;
        FT_DL_CLASS_CODE_CE_FROM: number;
        FT_DL_CLASS_CODE_CE_TO: number;
        FT_DL_CLASS_CODE_CE_NOTES: number;
        FT_DL_CLASS_CODE_D_1_E_FROM: number;
        FT_DL_CLASS_CODE_D_1_E_TO: number;
        FT_DL_CLASS_CODE_D_1_E_NOTES: number;
        FT_DL_CLASS_CODE_DE_FROM: number;
        FT_DL_CLASS_CODE_DE_TO: number;
        FT_DL_CLASS_CODE_DE_NOTES: number;
        FT_DL_CLASS_CODE_M_FROM: number;
        FT_DL_CLASS_CODE_M_TO: number;
        FT_DL_CLASS_CODE_M_NOTES: number;
        FT_DL_CLASS_CODE_L_FROM: number;
        FT_DL_CLASS_CODE_L_TO: number;
        FT_DL_CLASS_CODE_L_NOTES: number;
        FT_DL_CLASS_CODE_T_FROM: number;
        FT_DL_CLASS_CODE_T_TO: number;
        FT_DL_CLASS_CODE_T_NOTES: number;
        FT_DL_CLASS_CODE_AM_FROM: number;
        FT_DL_CLASS_CODE_AM_TO: number;
        FT_DL_CLASS_CODE_AM_NOTES: number;
        FT_DL_CLASS_CODE_A_2_FROM: number;
        FT_DL_CLASS_CODE_A_2_TO: number;
        FT_DL_CLASS_CODE_A_2_NOTES: number;
        FT_DL_CLASS_CODE_B_1_FROM: number;
        FT_DL_CLASS_CODE_B_1_TO: number;
        FT_DL_CLASS_CODE_B_1_NOTES: number;
        FT_SURNAME_AT_BIRTH: number;
        FT_CIVIL_STATUS: number;
        FT_NUMBER_OF_SEATS: number;
        FT_NUMBER_OF_STANDING_PLACES: number;
        FT_MAX_SPEED: number;
        FT_FUEL_TYPE: number;
        FT_EC_ENVIRONMENTAL_TYPE: number;
        FT_POWER_WEIGHT_RATIO: number;
        FT_MAX_MASS_OF_TRAILER_BRAKED: number;
        FT_MAX_MASS_OF_TRAILER_UNBRAKED: number;
        FT_TRANSMISSION_TYPE: number;
        FT_TRAILER_HITCH: number;
        FT_ACCOMPANIED_BY: number;
        FT_POLICE_DISTRICT: number;
        FT_FIRST_ISSUE_DATE: number;
        FT_PAYLOAD_CAPACITY: number;
        FT_NUMBER_OF_AXELS: number;
        FT_PERMISSIBLE_AXLE_LOAD: number;
        FT_PRECINCT: number;
        FT_INVITED_BY: number;
        FT_PURPOSE_OF_ENTRY: number;
        FT_SKIN_COLOR: number;
        FT_COMPLEXION: number;
        FT_AIRPORT_FROM: number;
        FT_AIRPORT_TO: number;
        FT_AIRLINE_NAME: number;
        FT_AIRLINE_NAME_FREQUENT_FLYER: number;
        FT_LICENSE_NUMBER: number;
        FT_IN_TANKS: number;
        FT_EXEPT_IN_TANKS: number;
        FT_FAST_TRACK: number;
        FT_OWNER: number;
        FT_MRZ_STRINGS_ICAO_RFID: number;
        FT_NUMBER_OF_CARD_ISSUANCE: number;
        FT_NUMBER_OF_CARD_ISSUANCE_CHECKSUM: number;
        FT_NUMBER_OF_CARD_ISSUANCE_CHECK_DIGIT: number;
        FT_CENTURY_DATE_OF_BIRTH: number;
        FT_DL_CLASSCODE_A3_FROM: number;
        FT_DL_CLASSCODE_A3_TO: number;
        FT_DL_CLASSCODE_A3_NOTES: number;
        FT_DL_CLASSCODE_C2_FROM: number;
        FT_DL_CLASSCODE_C2_TO: number;
        FT_DL_CLASSCODE_C2_NOTES: number;
        FT_DL_CLASSCODE_B2_FROM: number;
        FT_DL_CLASSCODE_B2_TO: number;
        FT_DL_CLASSCODE_B2_NOTES: number;
        FT_DL_CLASSCODE_D2_FROM: number;
        FT_DL_CLASSCODE_D2_TO: number;
        FT_DL_CLASSCODE_D2_NOTES: number;
        FT_DL_CLASSCODE_B2E_FROM: number;
        FT_DL_CLASSCODE_B2E_TO: number;
        FT_DL_CLASSCODE_B2E_NOTES: number;
        FT_DL_CLASSCODE_G_FROM: number;
        FT_DL_CLASSCODE_G_TO: number;
        FT_DL_CLASSCODE_G_NOTES: number;
        FT_DL_CLASSCODE_J_FROM: number;
        FT_DL_CLASSCODE_J_TO: number;
        FT_DL_CLASSCODE_J_NOTES: number;
        FT_DL_CLASSCODE_LC_FROM: number;
        FT_DL_CLASSCODE_LC_TO: number;
        FT_DLC_LASSCODE_LC_NOTES: number;
        FT_BANKCARDNUMBER: number;
        FT_BANKCARDVALIDTHRU: number;
        FT_TAX_NUMBER: number;
        FT_HEALTH_NUMBER: number;
        FT_GRANDFATHERNAME: number;
        FT_SELECTEE_INDICATOR: number;
        FT_MOTHER_SURNAME: number;
        FT_MOTHER_GIVENNAME: number;
        FT_FATHER_SURNAME: number;
        FT_FATHER_GIVENNAME: number;
        FT_MOTHER_DATEOFBIRTH: number;
        FT_FATHER_DATEOFBIRTH: number;
        FT_MOTHER_PERSONALNUMBER: number;
        FT_FATHER_PERSONALNUMBER: number;
        FT_MOTHER_PLACEOFBIRTH: number;
        FT_FATHER_PLACEOFBIRTH: number;
        FT_MOTHER_COUNTRYOFBIRTH: number;
        FT_FATHER_COUNTRYOFBIRTH: number;
        FT_DATE_FIRST_RENEWAL: number;
        FT_DATE_SECOND_RENEWAL: number;
        FT_PLACE_OF_EXAMINATION: number;
        FT_APPLICATION_NUMBER: number;
        FT_VOUCHER_NUMBER: number;
        FT_AUTHORIZATION_NUMBER: number;
        FT_FACULTY: number;
        FT_FORM_OF_EDUCATION: number;
        FT_DNI_NUMBER: number;
        FT_RETIREMENT_NUMBER: number;
        FT_PROFESSIONAL_ID_NUMBER: number;
        FT_AGE_AT_ISSUE: number;
        FT_YEARS_SINCE_ISSUE: number;
        FT_DLCLASSCODE_BTP_FROM: number;
        FT_DLCLASSCODE_BTP_NOTES: number;
        FT_DLCLASSCODE_BTP_TO: number;
        FT_DLCLASSCODE_C3_FROM: number;
        FT_DLCLASSCODE_C3_NOTES: number;
        FT_DLCLASSCODE_C3_TO: number;
        FT_DLCLASSCODE_E_FROM: number;
        FT_DLCLASSCODE_E_NOTES: number;
        FT_DLCLASSCODE_E_TO: number;
        FT_DLCLASSCODE_F_FROM: number;
        FT_DLCLASSCODE_F_NOTES: number;
        FT_DLCLASSCODE_F_TO: number;
        FT_DLCLASSCODE_FA_FROM: number;
        FT_DLCLASSCODE_FA_NOTES: number;
        FT_DLCLASSCODE_FA_TO: number;
        FT_DLCLASSCODE_FA1_FROM: number;
        FT_DLCLASSCODE_FA1_NOTES: number;
        FT_DLCLASSCODE_FA1_TO: number;
        FT_DLCLASSCODE_FB_FROM: number;
        FT_DLCLASSCODE_FB_NOTES: number;
        FT_DLCLASSCODE_FB_TO: number;
        FT_DLCLASSCODE_G1_FROM: number;
        FT_DLCLASSCODE_G1_NOTES: number;
        FT_DLCLASSCODE_G1_TO: number;
        FT_DLCLASSCODE_H_FROM: number;
        FT_DLCLASSCODE_H_NOTES: number;
        FT_DLCLASSCODE_H_TO: number;
        FT_DLCLASSCODE_I_FROM: number;
        FT_DLCLASSCODE_I_NOTES: number;
        FT_DLCLASSCODE_I_TO: number;
        FT_DLCLASSCODE_K_FROM: number;
        FT_DLCLASSCODE_K_NOTES: number;
        FT_DLCLASSCODE_K_TO: number;
        FT_DLCLASSCODE_LK_FROM: number;
        FT_DLCLASSCODE_LK_NOTES: number;
        FT_DLCLASSCODE_LK_TO: number;
        FT_DLCLASSCODE_N_FROM: number;
        FT_DLCLASSCODE_N_NOTES: number;
        FT_DLCLASSCODE_N_TO: number;
        FT_DLCLASSCODE_S_FROM: number;
        FT_DLCLASSCODE_S_NOTES: number;
        FT_DLCLASSCODE_S_TO: number;
        FT_DLCLASSCODE_TB_FROM: number;
        FT_DLCLASSCODE_TB_NOTES: number;
        FT_DLCLASSCODE_TB_TO: number;
        FT_DLCLASSCODE_TM_FROM: number;
        FT_DLCLASSCODE_TM_NOTES: number;
        FT_DLCLASSCODE_TM_TO: number;
        FT_DLCLASSCODE_TR_FROM: number;
        FT_DLCLASSCODE_TR_NOTES: number;
        FT_DLCLASSCODE_TR_TO: number;
        FT_DLCLASSCODE_TV_FROM: number;
        FT_DLCLASSCODE_TV_NOTES: number;
        FT_DLCLASSCODE_TV_TO: number;
        FT_DLCLASSCODE_V_FROM: number;
        FT_DLCLASSCODE_V_NOTES: number;
        FT_DLCLASSCODE_V_TO: number;
        FT_DLCLASSCODE_W_FROM: number;
        FT_DLCLASSCODE_W_NOTES: number;
        FT_DLCLASSCODE_W_TO: number;
        FT_URL: number;
        FT_CALIBER: number;
        FT_MODEL: number;
        FT_MAKE: number;
        FT_NUMBER_OF_CYLINDERS: number;
        FT_SURNAME_OF_HUSBAND_AFTER_REGISTRATION: number;
        FT_SURNAME_OF_WIFE_AFTER_REGISTRATION: number;
        FT_DATE_OF_BIRTH_OF_WIFE: number;
        FT_DATE_OF_BIRTH_OF_HUSBAND: number;
        FT_CITIZENSHIP_OF_FIRST_PERSON: number;
        FT_CITIZENSHIP_OF_SECOND_PERSON: number;
        FT_CVV: number;
        FT_DATE_OF_INSURANCE_EXPIRY: number;
        FT_MORTGAGE_BY: number;
        FT_OLD_DOCUMENT_NUMBER: number;
        FT_OLD_DATE_OF_ISSUE: number;
        FT_OLD_PLACE_OF_ISSUE: number;
        FT_DLCLASSCODE_LR_FROM: number;
        FT_DLCLASSCODE_LR_TO: number;
        FT_DLCLASSCODE_LR_NOTES: number;
        FT_DLCLASSCODE_MR_FROM: number;
        FT_DLCLASSCODE_MR_TO: number;
        FT_DLCLASSCODE_MR_NOTES: number;
        FT_DLCLASSCODE_HR_FROM: number;
        FT_DLCLASSCODE_HR_TO: number;
        FT_DLCLASSCODE_HR_NOTES: number;
        FT_DLCLASSCODE_HC_FROM: number;
        FT_DLCLASSCODE_HC_TO: number;
        FT_DLCLASSCODE_HC_NOTES: number;
        FT_DLCLASSCODE_MC_FROM: number;
        FT_DLCLASSCODE_MC_TO: number;
        FT_DLCLASSCODE_MC_NOTES: number;
        FT_DLCLASSCODE_RE_FROM: number;
        FT_DLCLASSCODE_RE_TO: number;
        FT_DLCLASSCODE_RE_NOTES: number;
        FT_DLCLASSCODE_R_FROM: number;
        FT_DLCLASSCODE_R_TO: number;
        FT_DLCLASSCODE_R_NOTES: number;
        FT_DLCLASSCODE_CA_FROM: number;
        FT_DLCLASSCODE_CA_TO: number;
        FT_DLCLASSCODE_CA_NOTES: number;
        FT_CITIZENSHIP_STATUS: number;
        FT_MILITARY_SERVICE_FROM: number;
        FT_MILITARY_SERVICE_TO: number;
        getTranslation(value: number): string;
    };
    FontStyle: {
        NORMAL: number;
        BOLD: number;
        ITALIC: number;
        BOLD_ITALIC: number;
    };
    FrameShapeType: {
        LINE: number;
        CORNER: number;
    };
    LCID: {
        LATIN: number;
        AFRIKAANS: number;
        ALBANIAN: number;
        ARABIC_ALGERIA: number;
        ARABIC_BAHRAIN: number;
        ARABIC_EGYPT: number;
        ARABIC_IRAQ: number;
        ARABIC_JORDAN: number;
        ARABIC_KUWAIT: number;
        ARABIC_LEBANON: number;
        ARABIC_LIBYA: number;
        ARABIC_MOROCCO: number;
        ARABIC_OMAN: number;
        ARABIC_QATAR: number;
        ARABIC_SAUDI_ARABIA: number;
        ARABIC_SYRIA: number;
        ARABIC_TUNISIA: number;
        ARABIC_UAE: number;
        ARABIC_YEMEN: number;
        ARABIC_ARMENIAN: number;
        AZERI_CYRILIC: number;
        AZERI_LATIN: number;
        BASQUE: number;
        BELARUSIAN: number;
        BULGARIAN: number;
        CATALAN: number;
        CHINESE_HONGKONG_SAR: number;
        CHINESE_MACAO_SAR: number;
        CHINESE: number;
        CHINESE_SINGAPORE: number;
        CHINESE_TAIWAN: number;
        CROATIAN: number;
        CZECH: number;
        DANISH: number;
        DIVEHI: number;
        DUTCH_BELGIUM: number;
        DUTCH_NETHERLANDS: number;
        ENGLISH_AUSTRALIA: number;
        ENGLISH_BELIZE: number;
        ENGLISH_CANADA: number;
        ENGLISH_CARRIBEAN: number;
        ENGLISH_IRELAND: number;
        ENGLISH_JAMAICA: number;
        ENGLISH_NEW_ZEALAND: number;
        ENGLISH_PHILIPPINES: number;
        ENGLISH_SOUTH_AFRICA: number;
        ENGLISH_TRINIDAD: number;
        ENGLISH_UK: number;
        ENGLISH_US: number;
        ENGLISH_ZIMBABWE: number;
        ESTONIAN: number;
        FAEROESE: number;
        FARSI: number;
        FINNISH: number;
        FRENCH_BELGIUM: number;
        FRENCH_CANADA: number;
        FRENCH_FRANCE: number;
        FRENCH_LUXEMBOURG: number;
        FRENCH_MONACO: number;
        FRENCH_SWITZERLAND: number;
        FYRO_MACEDONIAN: number;
        GALICIAN: number;
        GEORGIAN: number;
        GERMAN_AUSTRIA: number;
        GERMAN_GERMANY: number;
        GERMAN_LIECHTENSTEIN: number;
        GERMAN_LUXEMBOURG: number;
        GERMAN_SWITZERLAND: number;
        GREEK: number;
        GUJARATI: number;
        HEBREW: number;
        HINDI_INDIA: number;
        HUNGARIAN: number;
        ICELANDIC: number;
        INDONESIAN: number;
        ITALIAN_ITALY: number;
        ITALIAN_SWITZERLAND: number;
        JAPANESE: number;
        KANNADA: number;
        KAZAKH: number;
        KONKANI: number;
        KOREAN: number;
        KYRGYZ_CYRILICK: number;
        LATVIAN: number;
        LITHUANIAN: number;
        MALAY_MALAYSIA: number;
        MALAY_BRUNEI_DARUSSALAM: number;
        MARATHI: number;
        MONGOLIAN_CYRILIC: number;
        NORWEGIAN_BOKMAL: number;
        NORWEGIAN_NYORSK: number;
        POLISH: number;
        PORTUGUESE_BRAZIL: number;
        PORTUGUESE_PORTUGAL: number;
        PUNJABI: number;
        RHAETO_ROMANIC: number;
        ROMANIAN: number;
        RUSSIAN: number;
        SANSKRIT: number;
        SERBIAN_CYRILIC: number;
        SERBIAN_LATIN: number;
        SLOVAK: number;
        SLOVENIAN: number;
        SPANISH_ARGENTINA: number;
        SPANISH_BOLIVIA: number;
        SPANISH_CHILE: number;
        SPANICH_COLOMBIA: number;
        SPANISH_COSTA_RICA: number;
        SPANISH_DOMINICAN_REPUBLIC: number;
        SPANISH_ECUADOR: number;
        SPANISH_EL_SALVADOR: number;
        SPANISH_GUATEMALA: number;
        SPANISH_HONDURAS: number;
        SPANISH_MEXICO: number;
        SPANISH_NICARAGUA: number;
        SPANISH_PANAMA: number;
        SPANISH_PARAGUAY: number;
        SPANISH_PERU: number;
        SPANISH_PUERTO_RICO: number;
        SPANISH_TRADITIONAL_SORT: number;
        SPANISH_INTERNATIONAL_SORT: number;
        SPANISH_URUGUAY: number;
        SPANISH_VENEZUELA: number;
        SWAHILI: number;
        SWEDISH: number;
        SWEDISH_FINLAND: number;
        SYRIAC: number;
        TAMIL: number;
        TATAR: number;
        TELUGU: number;
        THAI_THAILAND: number;
        TURKISH: number;
        TAJIK_CYRILLIC: number;
        TURKMEN: number;
        UKRAINIAN: number;
        URDU: number;
        UZBEK_CYRILIC: number;
        UZBEK_LATIN: number;
        VIETNAMESE: number;
        CTC_SIMPLIFIED: number;
        CTC_TRADITIONAL: number;
        getTranslation(value: number): string;
    };
    PKDResourceType: {
        CERTIFICATE_PA: number;
        CERTIFICATE_TA: number;
        LDIF: number;
        CRL: number;
        ML: number;
        DEFL: number;
        DEVL: number;
        BL: number;
        getType(value: string): any;
    };
    ProcessingFinishedStatus: {
        NOT_READY: number;
        READY: number;
        TIMEOUT: number;
    };
    RGLMeasureSystem: {
        METRIC: number;
        IMPERIAL: number;
    };
    ScenarioIdentifier: {
        SCENARIO_MRZ: string;
        SCENARIO_BARCODE: string;
        SCENARIO_LOCATE: string;
        SCENARIO_OCR: string;
        SCENARIO_DOCTYPE: string;
        SCENARIO_MRZ_OR_BARCODE: string;
        SCENARIO_MRZ_OR_LOCATE: string;
        SCENARIO_MRZ_AND_LOCATE: string;
        SCENARIO_MRZ_OR_OCR: string;
        SCENARIO_MRZ_OR_BARCODE_OR_OCR: string;
        SCENARIO_LOCATE_VISUAL_AND_MRZ_OR_OCR: string;
        SCENARIO_FULL_PROCESS: string;
        SCENARIO_FULL_AUTH: string;
        SCENARIO_ID3RUS: string;
        SCENARIO_RUS_STAMP: string;
        SCENARIO_OCR_FREE: string;
        SCENARIO_CREDIT_CARD: string;
        SCENARIO_CAPTURE: string;
    };
    LineCap: {
        Butt: number;
        Round: number;
        Square: number;
    };
    UIInterfaceOrientationMask: {
        Portrait: number;
        LandscapeLeft: number;
        LandscapeRight: number;
        PortraitUpsideDown: number;
        Landscape: number;
        All: number;
        AllButUpsideDown: number;
    };
    AVCaptureSessionPreset: {
        Low: number;
        Medium: number;
        High: number;
        Photo: number;
        InputPriority: number;
        QHD960x540: number;
        Hd1280x720: number;
        Hd1920x1080: number;
        Hd4K3840x2160: number;
        IFrame960x540: number;
        IFrame1280x720: number;
        Qvga320x240: number;
        Vga640x480: number;
        Cif352x288: number;
    };
    AVCaptureDevicePosition: {
        Front: number;
        Back: number;
        Unspecified: number;
    };
    UIViewContentMode: {
        ScaleToFill: number;
        ScaleAspectFit: number;
        ScaleAspectFill: number;
        Redraw: number;
        Center: number;
        Top: number;
        Bottom: number;
        Left: number;
        Right: number;
        TopLeft: number;
        TopRight: number;
        BottomLeft: number;
        BottomRight: number;
    };
};
/**
 * @name DocumentReader
 * @description
 * This is a wrapper cordova plugin for Regula`s Document Reader.
 *
 * @usage
 * ```typescript
 * import { DocumentReader } from '@ionic-native/document-reader/ngx';
 *
 *
 * constructor(public DocumentReader: DocumentReader) { }
 *
 * ...
 *
 *
 * this.DocumentReader.prepareDatabase("Full").subscribe(message => {
 *        if (message == "database prepared") {
 *          this.DocumentReader.initializeReader(license).then(m => onInitialized()).catch(e => console.error(e));
 *        }
 *      })
 *
 * ```
 */
export declare class DocumentReader extends IonicNativePlugin {
    /**
     *  Allows you to get the API version
     *
     * @return {Promise<any>} Returns a promise
     */
    getAPIVersion(): Promise<any>;
    /**
     *  Allows you to get the available scenarios
     *
     * @return {Promise<any>} Returns a promise
     */
    getAvailableScenarios(): Promise<any>;
    /**
     *  Allows you to check if NFC chip reading capability is available
     *
     * @return {Promise<any>} Returns a promise
     */
    isRFIDAvailableForUse(): Promise<any>;
    /**
     *  Allows you to get the Core mode
     *
     * @return {Promise<any>} Returns a promise
     */
    getCoreMode(): Promise<any>;
    /**
     *  Allows you to get the Core version
     *
     * @return {Promise<any>} Returns a promise
     */
    getCoreVersion(): Promise<any>;
    /**
     *  Allows you to get the database export date
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseDate(): Promise<any>;
    /**
     *  Allows you to get the database ID
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseID(): Promise<any>;
    /**
     *  Allows you to get the database version
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseVersion(): Promise<any>;
    /**
     *  Allows you to check if the SDK is ready for use
     *
     * @return {Promise<any>} Returns a promise
     */
    getDocumentReaderIsReady(): Promise<any>;
    /**
     *  Allows you to get the Document Reader status
     *
     * @return {Promise<any>} Returns a promise
     */
    getDocumentReaderStatus(): Promise<any>;
    /**
     *  Allows you to get the number of supported database countries
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseCountriesNumber(): Promise<any>;
    /**
     *  Allows you to get the number of supported database documents
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseDocumentsNumber(): Promise<any>;
    /**
     *  Allows you to get the selected scenario
     *
     * @return {Promise<any>} Returns a promise
     */
    selectedScenario(): Promise<any>;
    /**
     *  Allows you to get the path to the folder of the current session. Before using this, enable log saving. Each new session provides a different path
     *
     * @return {Promise<any>} Returns a promise
     */
    getSessionLogFolder(): Promise<any>;
    /**
     *  Allows you to get the list of supported database documents use
     *
     * @return {Promise<any>} Returns a promise
     */
    getDatabaseDescription(): Promise<any>;
    /**
     *  Use this method to open the camera preview which will pass frames for recognition and return results in the completion block when they are ready
     *
     * @return {Promise<any>} Returns a promise
     */
    showScanner(): Observable<any>;
    /**
     *  Use this method to indicate than the processing of the next page is started
     *
     * @return {Promise<any>} Returns a promise
     */
    startNewPage(): Promise<any>;
    /**
     *  Use this method to start a new session
     *
     * @return {Promise<any>} Returns a promise
     */
    startNewSession(): Promise<any>;
    /**
     *  Use the method below to open the RFID chip reading controller and start its processing
     *
     * @return {Promise<any>} Returns a promise
     */
    startRFIDReader(): Observable<any>;
    /**
     *  Use the method below to close the RFID chip reading controller and end its processing
     *
     * @return {Promise<any>} Returns a promise
     */
    stopRFIDReader(): Promise<any>;
    /**
     *  Use this method to close camera preview and stop processing
     *
     * @return {Promise<any>} Returns a promise
     */
    stopScanner(): Promise<any>;
    /**
     *  Use this method to deinitialize Document Reader
     *
     * @return {Promise<any>} Returns a promise
     */
    deinitializeReader(): Promise<any>;
    /**
     *  Allows you to check if a mobile authenticator is available for use
     *
     * @return {Promise<any>} Returns a promise
     */
    isAuthenticatorAvailableForUse(): Promise<any>;
    /**
     *  Use this method to get the config
     *
     * @return {Promise<any>} Returns a promise
     */
    getConfig(): Promise<any>;
    /**
     *  Use this method to get the RFID scenario
     *
     * @return {Promise<any>} Returns a promise
     */
    getRfidScenario(): Promise<any>;
    /**
     *  Allows you to get an expiration date of the license
     *
     * @return {Promise<any>} Returns a promise
     */
    getLicenseExpiryDate(): Promise<any>;
    /**
     *  Allows you to get a list of country identifiers that are defined for processing in the license. If the array is empty, there are no restrictions for processing
     *
     * @return {Promise<any>} Returns a promise
     */
    getLicenseCountryFilter(): Promise<any>;
    /**
     *  Allows you to check if NFC chip reading capability is available
     *
     * @return {Promise<any>} Returns a promise
     */
    licenseIsRfidAvailable(): Promise<any>;
    /**
     *  Use this method to get the camera session
     *
     * @return {Promise<any>} Returns a promise
     */
    getCameraSessionIsPaused(): Promise<any>;
    /**
     *  Allows you to remove the added database
     *
     * @return {Promise<any>} Returns a promise
     */
    removeDatabase(): Promise<any>;
    /**
     *  Allows you to cancel database update
     *
     * @return {Promise<any>} Returns a promise
     */
    cancelDBUpdate(): Promise<any>;
    /**
     *  Use this method to reset configuration
     *
     * @return {Promise<any>} Returns a promise
     */
    resetConfiguration(): Promise<any>;
    /**
     *  Use this method to clear PKD certificates
     *
     * @return {Promise<any>} Returns a promise
     */
    clearPKDCertificates(): Promise<any>;
    /**
     *  Use this method to start RFID chip processing
     *
     * @return {Promise<any>} Returns a promise
     */
    readRFID(): Observable<any>;
    /**
     *  Use this method to get an RFID session status
     *
     * @return {Promise<any>} Returns a promise
     */
    getRfidSessionStatus(): Promise<any>;
    /**
     *  Use this method to enable Core logs
     *
     * @param {boolean} logs
     * @return {Promise<any>} Returns a promise
     */
    setEnableCoreLogs(logs: any): Promise<any>;
    /**
     *  Allows to add a list of PKD certificates during initialization process which will be passed to Core
     *
     * @param {any} certificates Array of jsonObjects with structure {binaryData: binaryData, resourceType: resourceType, privateKey: privateKey}
     *  binaryData - base64 string
     *  resourceType - number
     *  privateKey(optional) - base64 string
     * @return {Promise<any>} Returns a promise
     */
    addPKDCertificates(certificates: any): Promise<any>;
    /**
     *  If set, the camera session will be paused as soon as the result is received
     *
     * @param {boolean} paused
     * @return {Promise<any>} Returns a promise
     */
    setCameraSessionIsPaused(paused: any): Promise<any>;
    /**
     *  Use this method to get a scenario
     *
     * @param {string} scenario Scenario`s unique identifier
     * @return {Promise<any>} Returns a promise
     */
    getScenario(scenario: any): Promise<any>;
    /**
     *  Use this method to recognize images
     *
     * @param {any} images Array of strings that are base64 representations of images
     * @return {Promise<any>} Returns a promise
     */
    recognizeImages(images: any): Observable<any>;
    /**
     *  Use this method to open the camera preview with the desired camera ID which will pass frames for recognition and return results in the completion block when they are ready
     *
     * @param {number} cameraID
     * @return {Promise<any>} Returns a promise
     */
    showScannerWithCameraID(cameraID: any): Observable<any>;
    /**
     *  Use this method for getting always the latest version of the database
     *
     * @param {string} databaseType
     * @return {Promise<any>} Returns a promise
     */
    runAutoUpdate(databaseType: any): Observable<any>;
    /**
     *  Use this method to set config
     *
     * @param {any} config JsonObject with structure
     *    {functionality?: {name?: value1, name?: value2, ...},
     *    customization?: {name?: value3, name?: value4, ...},
     *    processParams?: {name?: value5, name?: value6, ...}}
     *  name - string
     *  value - any
     * @return {Promise<any>} Returns a promise
     */
    setConfig(config: any): Promise<any>;
    /**
     *  Use this method to set an RFID scenario
     *
     * @param {any} scenario JsonObject with structure {name?: value1,name?: value2, ...}
     *  name - string
     *  value - any
     * @return {Promise<any>} Returns a promise
     */
    setRfidScenario(scenario: any): Promise<any>;
    /**
     *  Use this method to initialize Document Reader
     *
     * @param {string} license License`s base64 representation
     * @return {Promise<any>} Returns a promise
     */
    initializeReader(license: any): Promise<any>;
    /**
     *  Use this method to download a database from the Regula's server
     *
     * @param {string} databaseType
     * @return {Promise<any>} Returns a promise
     */
    prepareDatabase(databaseType: any): Observable<any>;
    /**
     *  Use this method to recognize an image
     *
     * @param {string} image Image`s base64 representation
     * @return {Promise<any>} Returns a promise
     */
    recognizeImage(image: any): Observable<any>;
    /**
     *  Use this method to set an RFID session status
     *
     * @param {string} status
     * @return {Promise<any>} Returns a promise
     */
    setRfidSessionStatus(status: any): Promise<any>;
    /**
     *  Use this method to initialize Document Reader with the path to the database
     *
     * @param {string} license License`s base64 representation
     * @param {string} path Path to the database
     * @return {Promise<any>} Returns a promise
     */
    initializeReaderWithDatabasePath(license: any, path: any): Promise<any>;
    /**
     *  Use this method to recognize an image frame
     *
     * @param {string} image Image`s base64 representation
     * @param {any} params JsonObject with structure {width: value1, height: value2, type: value3}
     *  value1 - number
     *  value2 - number
     *  value3 - number
     * @return {Promise<any>} Returns a promise
     */
    recognizeImageFrame(image: any, params: any): Observable<any>;
    /**
     *  Use this method to recognize an image with options
     *
     * @param {string} image Image`s base64 representation
     * @param {any} options JsonObject with structure
     *    {functionality?: {name?: value1, name?: value2, ...},
     *    customization?: {name?: value3, name?: value4, ...},
     *    processParams?: {name?: value5, name?: value6, ...}}
     *  name - string
     *  value - any
     * @return {Promise<any>} Returns a promise
     */
    recognizeImageWithOpts(image: any, options: any): Observable<any>;
    /**
     *  Use this method to recognize a stream of frames
     *
     * @param {string} byteString
     * @param {any} params JsonObject with structure {width: value, height: value, type: value}
     * @return {Promise<any>} Returns a promise
     */
    recognizeVideoFrame(byteString: any, params: any): Observable<any>;
    /**
     *  Use this method to open the camera preview with the desired camera ID and options which will pass frames for recognition and return results in the completion block when they are ready
     *
     * @param {number} cameraID
     * @param {any} options JsonObject with structure
     *    {functionality?: {name?: value1, name?: value2, ...},
     *    customization?: {name?: value3, name?: value4, ...},
     *    processParams?: {name?: value5, name?: value6, ...}}
     *  name - string
     *  value - any
     * @return {Promise<any>} Returns a promise
     */
    showScannerWithCameraIDAndOpts(cameraID: any, options: any): Observable<any>;
    /**
     *  Use this method to recognize images with parameters
     *
     * @param {string} image Image`s base64 representation
     * @param {any} params JsonObject with structure {width: value1, height: value2, type: value3}
     *  value1 - number
     *  value2 - number
     *  value3 - number
     * @return {Promise<any>} Returns a promise
     */
    recognizeImageWithImageInputParams(image: any, params: any): Observable<any>;
    /**
     *  Use this method to recognize a stream of frames
     *
     * @param {string} image Image`s base64 representation
     * @param {boolean} mode
     * @return {Promise<any>} Returns a promise
     */
    recognizeImageWithCameraMode(image: any, mode: any): Observable<any>;
}
