import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare class DocumentReaderScenario {
    name?: string;
    caption?: string;
    description?: string;
    multiPageOff?: boolean;
    frameKWHLandscape?: number;
    frameKWHPortrait?: number;
    frameKWHDoublePageSpreadPortrait?: number;
    frameKWHDoublePageSpreadLandscape?: number;
    frameOrientation?: number;
    uvTorch?: boolean;
    faceExt?: boolean;
    seriesProcessMode?: boolean;
    manualCrop?: boolean;
    static fromJson(jsonObject?: any): DocumentReaderScenario | undefined;
}
export declare class Rect {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
    static fromJson(jsonObject?: any): Rect | undefined;
}
export declare class DocumentReaderGraphicField {
    sourceType?: number;
    fieldType?: number;
    light?: number;
    pageIndex?: number;
    originalPageIndex?: number;
    fieldName?: string;
    lightName?: string;
    value?: string;
    fieldRect?: Rect;
    static fromJson(jsonObject?: any): DocumentReaderGraphicField | undefined;
}
export declare class DocumentReaderGraphicResult {
    fields?: DocumentReaderGraphicField[];
    static fromJson(jsonObject?: any): DocumentReaderGraphicResult | undefined;
}
export declare class DocumentReaderValue {
    pageIndex?: number;
    sourceType?: number;
    probability?: number;
    value?: string;
    originalValue?: string;
    boundRect?: Rect;
    originalSymbols?: DocumentReaderSymbol[];
    rfidOrigin?: DocumentReaderRfidOrigin;
    static fromJson(jsonObject?: any): DocumentReaderValue | undefined;
}
export declare class DocumentReaderTextField {
    fieldType?: number;
    lcid?: number;
    status?: number;
    lcidName?: string;
    fieldName?: string;
    value?: string;
    getValue?: DocumentReaderValue;
    values?: DocumentReaderValue[];
    comparisonList?: DocumentReaderComparison[];
    validityList?: DocumentReaderValidity[];
    comparisonStatus?: number;
    validityStatus?: number;
    static fromJson(jsonObject?: any): DocumentReaderTextField | undefined;
}
export declare class DocumentReaderTextResult {
    status?: number;
    comparisonStatus?: number;
    validityStatus?: number;
    availableSourceList?: DocumentReaderTextSource[];
    fields?: DocumentReaderTextField[];
    static fromJson(jsonObject?: any): DocumentReaderTextResult | undefined;
}
export declare class Coordinate {
    x?: number;
    y?: number;
    static fromJson(jsonObject?: any): Coordinate | undefined;
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
    static fromJson(jsonObject?: any): ElementPosition | undefined;
}
export declare class ImageQuality {
    featureType?: number;
    result?: number;
    type?: number;
    boundRects?: Rect[];
    static fromJson(jsonObject?: any): ImageQuality | undefined;
}
export declare class ImageQualityGroup {
    count?: number;
    result?: number;
    imageQualityList?: ImageQuality[];
    pageIndex?: number;
    static fromJson(jsonObject?: any): ImageQualityGroup | undefined;
}
export declare class DocumentReaderDocumentType {
    pageIndex?: number;
    documentID?: number;
    dType?: number;
    dFormat?: number;
    dMRZ?: boolean;
    isDeprecated?: boolean;
    name?: string;
    ICAOCode?: string;
    dDescription?: string;
    dYear?: string;
    dCountryName?: string;
    FDSID?: number[];
    static fromJson(jsonObject?: any): DocumentReaderDocumentType | undefined;
}
export declare class DocumentReaderNotification {
    notificationCode?: number;
    dataFileType?: number;
    progress?: number;
    static fromJson(jsonObject?: any): DocumentReaderNotification | undefined;
}
export declare class AccessControlProcedureType {
    activeOptionIdx?: number;
    type?: number;
    status?: number;
    notifications?: number[];
    static fromJson(jsonObject?: any): AccessControlProcedureType | undefined;
}
export declare class FileData {
    length?: number;
    type?: number;
    status?: number;
    data?: string;
    static fromJson(jsonObject?: any): FileData | undefined;
}
export declare class CertificateData {
    length?: number;
    data?: string;
    static fromJson(jsonObject?: any): CertificateData | undefined;
}
export declare class SecurityObjectCertificates {
    securityObject?: CertificateData;
    static fromJson(jsonObject?: any): SecurityObjectCertificates | undefined;
}
export declare class File {
    readingTime?: number;
    type?: number;
    typeName?: string;
    pAStatus?: number;
    readingStatus?: number;
    fileID?: string;
    fileData?: FileData;
    certificates?: SecurityObjectCertificates;
    docFieldsText?: number[];
    docFieldsGraphics?: number[];
    docFieldsOriginals?: number[];
    notifications?: number[];
    static fromJson(jsonObject?: any): File | undefined;
}
export declare class Application {
    type?: number;
    status?: number;
    applicationID?: string;
    dataHashAlgorithm?: string;
    unicodeVersion?: string;
    version?: string;
    files?: File[];
    static fromJson(jsonObject?: any): Application | undefined;
}
export declare class Value {
    length?: number;
    type?: number;
    status?: number;
    data?: string;
    format?: string;
    static fromJson(jsonObject?: any): Value | undefined;
}
export declare class Attribute {
    type?: string;
    value?: Value;
    static fromJson(jsonObject?: any): Attribute | undefined;
}
export declare class Authority {
    data?: string;
    friendlyName?: Value;
    attributes?: Attribute[];
    static fromJson(jsonObject?: any): Authority | undefined;
}
export declare class Extension {
    data?: string;
    type?: string;
    static fromJson(jsonObject?: any): Extension | undefined;
}
export declare class Validity {
    notAfter?: Value;
    notBefore?: Value;
    static fromJson(jsonObject?: any): Validity | undefined;
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
    static fromJson(jsonObject?: any): CertificateChain | undefined;
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
    static fromJson(jsonObject?: any): SignerInfo | undefined;
}
export declare class SecurityObject {
    fileReference?: number;
    version?: number;
    objectType?: string;
    notifications?: number[];
    signerInfos?: SignerInfo[];
    static fromJson(jsonObject?: any): SecurityObject | undefined;
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
    static fromJson(jsonObject?: any): CardProperties | undefined;
}
export declare class RFIDSessionData {
    totalBytesReceived?: number;
    totalBytesSent?: number;
    status?: number;
    extLeSupport?: number;
    processTime?: number;
    cardProperties?: CardProperties;
    accessControls?: AccessControlProcedureType[];
    applications?: Application[];
    securityObjects?: SecurityObject[];
    dataGroups?: number[];
    dataFields?: DataField[];
    static fromJson(jsonObject?: any): RFIDSessionData | undefined;
}
export declare class DataField {
    data?: string;
    fieldType?: number;
    static fromJson(jsonObject?: any): DataField | undefined;
}
export declare class DocumentReaderAuthenticityCheck {
    type?: number;
    status?: number;
    typeName?: string;
    pageIndex?: number;
    elements?: DocumentReaderAuthenticityElement[];
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityCheck | undefined;
}
export declare class PDF417Info {
    errorLevel?: number;
    columns?: number;
    rows?: number;
    static fromJson(jsonObject?: any): PDF417Info | undefined;
}
export declare class DocumentReaderBarcodeResult {
    fields?: DocumentReaderBarcodeField[];
    static fromJson(jsonObject?: any): DocumentReaderBarcodeResult | undefined;
}
export declare class DocumentReaderBarcodeField {
    barcodeType?: number;
    status?: number;
    pageIndex?: number;
    pdf417Info?: PDF417Info;
    data?: string;
    static fromJson(jsonObject?: any): DocumentReaderBarcodeField | undefined;
}
export declare class DocumentReaderAuthenticityResult {
    status?: number;
    checks?: DocumentReaderAuthenticityCheck[];
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityResult | undefined;
}
export declare class DocumentReaderAuthenticityElement {
    status?: number;
    elementType?: number;
    elementDiagnose?: number;
    elementTypeName?: string;
    elementDiagnoseName?: string;
    static fromJson(jsonObject?: any): DocumentReaderAuthenticityElement | undefined;
}
export declare class DocumentReaderCompletion {
    action?: number;
    results?: DocumentReaderResults;
    error?: RegulaException;
    static fromJson(jsonObject?: any): DocumentReaderCompletion | undefined;
}
export declare class RfidNotificationCompletion {
    notification?: number;
    value?: number;
    static fromJson(jsonObject?: any): RfidNotificationCompletion | undefined;
}
export declare class RegulaException {
    code?: number;
    message?: string;
    static fromJson(jsonObject?: any): RegulaException | undefined;
}
export declare class PKDCertificate {
    binaryData?: string;
    resourceType?: number;
    privateKey?: string;
    static fromJson(jsonObject?: any): PKDCertificate | undefined;
}
export declare class TccParams {
    serviceUrlTA?: string;
    serviceUrlPA?: string;
    pfxCertUrl?: string;
    pfxPassPhrase?: string;
    pfxCert?: string;
    static fromJson(jsonObject?: any): TccParams | undefined;
}
export declare class ImageInputParam {
    width?: number;
    height?: number;
    type?: number;
    disableFrameShiftIR?: boolean;
    doFlipYAxis?: boolean;
    static fromJson(jsonObject?: any): ImageInputParam | undefined;
}
export declare class PAResourcesIssuer {
    data?: string;
    friendlyName?: string;
    attributes?: PAAttribute[];
    static fromJson(jsonObject?: any): PAResourcesIssuer | undefined;
}
export declare class PAAttribute {
    type?: string;
    value?: string;
    static fromJson(jsonObject?: any): PAAttribute | undefined;
}
export declare class TAChallenge {
    data?: string;
    auxPCD?: string;
    challengePICC?: string;
    hashPK?: string;
    idPICC?: string;
    static fromJson(jsonObject?: any): TAChallenge | undefined;
}
export declare class DocumentReaderResultsStatus {
    overallStatus?: number;
    optical?: number;
    detailsOptical?: DetailsOptical;
    rfid?: number;
    detailsRFID?: DetailsRFID;
    portrait?: number;
    stopList?: number;
    static fromJson(jsonObject?: any): DocumentReaderResultsStatus | undefined;
}
export declare class DetailsOptical {
    overallStatus?: number;
    mrz?: number;
    text?: number;
    docType?: number;
    security?: number;
    imageQA?: number;
    expiry?: number;
    vds?: number;
    pagesCount?: number;
    static fromJson(jsonObject?: any): DetailsOptical | undefined;
}
export declare class DetailsRFID {
    pa?: number;
    ca?: number;
    aa?: number;
    ta?: number;
    bac?: number;
    pace?: number;
    overallStatus?: number;
    static fromJson(jsonObject?: any): DetailsRFID | undefined;
}
export declare class VDSNCData {
    type?: string;
    version?: number;
    issuingCountry?: string;
    message?: Record<string, any>;
    signatureAlgorithm?: string;
    signature?: BytesData;
    certificate?: BytesData;
    certificateChain?: CertificateChain[];
    notifications?: number[];
    static fromJson(jsonObject?: any): VDSNCData | undefined;
}
export declare class BytesData {
    data?: string;
    length?: number;
    status?: number;
    type?: number;
    static fromJson(jsonObject?: any): BytesData | undefined;
}
export declare class ImageInputData {
    pageIndex?: number;
    light?: number;
    type?: number;
    width?: number;
    height?: number;
    bitmap?: string;
    imgBytes?: string;
    static fromJson(jsonObject?: any): ImageInputData | undefined;
}
export declare class DocReaderDocumentsDatabase {
    databaseID?: string;
    version?: string;
    date?: string;
    databaseDescription?: string;
    countriesNumber?: number;
    documentsNumber?: number;
    size?: number;
    static fromJson(jsonObject?: any): DocReaderDocumentsDatabase | undefined;
}
export declare class DocumentReaderComparison {
    sourceTypeLeft?: number;
    sourceTypeRight?: number;
    status?: number;
    static fromJson(jsonObject?: any): DocumentReaderComparison | undefined;
}
export declare class DocumentReaderRfidOrigin {
    dg?: number;
    dgTag?: number;
    entryView?: number;
    tagEntry?: number;
    static fromJson(jsonObject?: any): DocumentReaderRfidOrigin | undefined;
}
export declare class DocumentReaderTextSource {
    sourceType?: number;
    source?: string;
    validityStatus?: number;
    static fromJson(jsonObject?: any): DocumentReaderTextSource | undefined;
}
export declare class DocumentReaderSymbol {
    code?: number;
    rect?: Rect;
    probability?: number;
    static fromJson(jsonObject?: any): DocumentReaderSymbol | undefined;
}
export declare class DocumentReaderValidity {
    sourceType?: number;
    status?: number;
    static fromJson(jsonObject?: any): DocumentReaderValidity | undefined;
}
export declare class OnlineProcessingConfig {
    mode?: number;
    url?: string;
    processParams?: ProcessParams;
    imageFormat?: number;
    imageCompressionQuality?: number;
    requestHeaders?: Record<string, string>;
    static fromJson(jsonObject?: any): OnlineProcessingConfig | undefined;
}
export declare class DocReaderConfig {
    license?: string;
    customDb?: string;
    databasePath?: string;
    licenseUpdate?: boolean;
    delayedNNLoad?: boolean;
    blackList?: Record<string, string>;
    static fromJson(jsonObject?: any): DocReaderConfig | undefined;
}
export declare class ScannerConfig {
    scenario?: string;
    livePortrait?: string;
    extPortrait?: string;
    onlineProcessingConfig?: OnlineProcessingConfig;
    cameraId?: number;
    static fromJson(jsonObject?: any): ScannerConfig | undefined;
}
export declare class RecognizeConfig {
    scenario?: string;
    onlineProcessingConfig?: OnlineProcessingConfig;
    oneShotIdentification?: boolean;
    dtc?: string;
    livePortrait?: string;
    extPortrait?: string;
    image?: string;
    data?: string;
    images?: string[];
    imageInputData?: ImageInputData[];
    static fromJson(jsonObject?: any): RecognizeConfig | undefined;
}
export declare class License {
    expiryDate?: string;
    countryFilter?: string[];
    isRfidAvailable?: boolean;
    static fromJson(jsonObject?: any): License | undefined;
}
export declare class DocReaderVersion {
    api?: string;
    core?: string;
    coreMode?: string;
    database?: DocReaderDocumentsDatabase;
    static fromJson(jsonObject?: any): DocReaderVersion | undefined;
}
export declare class TransactionInfo {
    transactionId?: string;
    tag?: string;
    sessionLogFolder?: string;
    static fromJson(jsonObject?: any): TransactionInfo | undefined;
}
export declare class DocumentReaderResults {
    chipPage?: number;
    processingFinishedStatus?: number;
    elapsedTime?: number;
    elapsedTimeRFID?: number;
    morePagesAvailable?: number;
    graphicResult?: DocumentReaderGraphicResult;
    textResult?: DocumentReaderTextResult;
    documentPosition?: ElementPosition[];
    barcodePosition?: ElementPosition[];
    mrzPosition?: ElementPosition[];
    imageQuality?: ImageQualityGroup[];
    rawResult?: string;
    rfidSessionData?: RFIDSessionData;
    authenticityResult?: DocumentReaderAuthenticityResult;
    barcodeResult?: DocumentReaderBarcodeResult;
    documentType?: DocumentReaderDocumentType[];
    status?: DocumentReaderResultsStatus;
    vdsncData?: VDSNCData;
    dtcData?: string;
    transactionInfo?: TransactionInfo;
    static fromJson(jsonObject?: any): DocumentReaderResults | undefined;
}
export declare class CameraSize {
    width?: number;
    height?: number;
    static fromJson(jsonObject?: any): CameraSize | undefined;
}
export declare class Functionality {
    pictureOnBoundsReady?: boolean;
    showTorchButton?: boolean;
    showCloseButton?: boolean;
    videoCaptureMotionControl?: boolean;
    showCaptureButton?: boolean;
    showChangeFrameButton?: boolean;
    showSkipNextPageButton?: boolean;
    useAuthenticator?: boolean;
    skipFocusingFrames?: boolean;
    showCameraSwitchButton?: boolean;
    displayMetadata?: boolean;
    isZoomEnabled?: boolean;
    isCameraTorchCheckDisabled?: boolean;
    recordScanningProcess?: boolean;
    manualMultipageMode?: boolean;
    singleResult?: boolean;
    torchTurnedOn?: boolean;
    showCaptureButtonDelayFromDetect?: number;
    showCaptureButtonDelayFromStart?: number;
    rfidTimeout?: number;
    forcePagesCount?: number;
    orientation?: number;
    captureMode?: number;
    cameraMode?: number;
    cameraPositionIOS?: number;
    cameraFrame?: string;
    btDeviceName?: string;
    zoomFactor?: number;
    exposure?: number;
    excludedCamera2Models?: string[];
    cameraSize?: CameraSize;
    videoSessionPreset?: number;
    static fromJson(jsonObject?: any): Functionality | undefined;
}
export declare class GlaresCheckParams {
    imgMarginPart?: number;
    maxGlaringPart?: number;
    static fromJson(jsonObject?: any): GlaresCheckParams | undefined;
}
export declare class ImageQA {
    dpiThreshold?: number;
    angleThreshold?: number;
    focusCheck?: boolean;
    glaresCheck?: boolean;
    glaresCheckParams?: GlaresCheckParams;
    colornessCheck?: boolean;
    screenCapture?: boolean;
    expectedPass?: number[];
    documentPositionIndent?: number;
    brightnessThreshold?: number;
    occlusionCheck?: boolean;
    static fromJson(jsonObject?: any): ImageQA | undefined;
}
export declare class RFIDParams {
    paIgnoreNotificationCodes?: number[];
    static fromJson(jsonObject?: any): RFIDParams | undefined;
}
export declare class FaceApiSearchParams {
    limit?: number;
    threshold?: number;
    groupIds?: number[];
    static fromJson(jsonObject?: any): FaceApiSearchParams | undefined;
}
export declare class FaceApiParams {
    url?: string;
    mode?: string;
    threshold?: number;
    searchParams?: FaceApiSearchParams;
    serviceTimeout?: number;
    proxy?: string;
    proxyPassword?: string;
    proxyType?: number;
    static fromJson(jsonObject?: any): FaceApiParams | undefined;
}
export declare class BackendProcessingConfig {
    url?: string;
    httpHeaders?: Record<string, string>;
    rfidServerSideChipVerification?: boolean;
    timeoutConnection?: number;
    static fromJson(jsonObject?: any): BackendProcessingConfig | undefined;
}
export declare class LivenessParams {
    checkOVI?: boolean;
    checkMLI?: boolean;
    checkHolo?: boolean;
    checkED?: boolean;
    checkBlackAndWhiteCopy?: boolean;
    checkDynaprint?: boolean;
    checkGeometry?: boolean;
    static fromJson(jsonObject?: any): LivenessParams | undefined;
}
export declare class AuthenticityParams {
    useLivenessCheck?: boolean;
    livenessParams?: LivenessParams;
    checkUVLuminiscence?: boolean;
    checkIRB900?: boolean;
    checkImagePatterns?: boolean;
    checkFibers?: boolean;
    checkExtMRZ?: boolean;
    checkExtOCR?: boolean;
    checkAxial?: boolean;
    checkBarcodeFormat?: boolean;
    checkIRVisibility?: boolean;
    checkIPI?: boolean;
    checkPhotoEmbedding?: boolean;
    checkPhotoComparison?: boolean;
    checkLetterScreen?: boolean;
    checkSecurityText?: boolean;
    static fromJson(jsonObject?: any): AuthenticityParams | undefined;
}
export declare class ProcessParams {
    multipageProcessing?: boolean;
    logs?: boolean;
    debugSaveImages?: boolean;
    debugSaveLogs?: boolean;
    returnUncroppedImage?: boolean;
    uvTorchEnabled?: boolean;
    debugSaveCroppedImages?: boolean;
    disableFocusingCheck?: boolean;
    debugSaveRFIDSession?: boolean;
    doublePageSpread?: boolean;
    manualCrop?: boolean;
    integralImage?: boolean;
    returnCroppedBarcode?: boolean;
    checkRequiredTextFields?: boolean;
    depersonalizeLog?: boolean;
    generateDoublePageSpreadImage?: boolean;
    alreadyCropped?: boolean;
    matchTextFieldMask?: boolean;
    updateOCRValidityByGlare?: boolean;
    noGraphics?: boolean;
    multiDocOnImage?: boolean;
    forceReadMrzBeforeLocate?: boolean;
    parseBarcodes?: boolean;
    shouldReturnPackageForReprocess?: boolean;
    disablePerforationOCR?: boolean;
    respectImageQuality?: boolean;
    strictImageQuality?: boolean;
    splitNames?: boolean;
    useFaceApi?: boolean;
    useAuthenticityCheck?: boolean;
    checkHologram?: boolean;
    generateNumericCodes?: boolean;
    strictBarcodeDigitalSignatureCheck?: boolean;
    selectLongestNames?: boolean;
    generateDTCVC?: boolean;
    strictDLCategoryExpiry?: boolean;
    generateAlpha2Codes?: boolean;
    barcodeParserType?: number;
    perspectiveAngle?: number;
    minDPI?: number;
    imageDpiOutMax?: number;
    forceDocFormat?: number;
    shiftExpiryDate?: number;
    minimalHolderAge?: number;
    imageOutputMaxHeight?: number;
    imageOutputMaxWidth?: number;
    processAuth?: number;
    convertCase?: number;
    logLevel?: string;
    mrzDetectMode?: number;
    measureSystem?: number;
    forceDocID?: number;
    pdfPagesLimit?: number;
    dateFormat?: string;
    scenario?: string;
    captureButtonScenario?: string;
    timeout?: number;
    timeoutFromFirstDetect?: number;
    timeoutFromFirstDocType?: number;
    documentAreaMin?: number;
    timeoutLiveness?: number;
    documentIDList?: number[];
    barcodeTypes?: number[];
    fieldTypesFilter?: number[];
    resultTypeOutput?: number[];
    documentGroupFilter?: number[];
    lcidIgnoreFilter?: number[];
    lcidFilter?: number[];
    mrzFormatsFilter?: string[];
    imageQA?: ImageQA;
    rfidParams?: RFIDParams;
    faceApiParams?: FaceApiParams;
    backendProcessingConfig?: BackendProcessingConfig;
    authenticityParams?: AuthenticityParams;
    customParams?: Record<string, any>;
    static fromJson(jsonObject?: any): ProcessParams | undefined;
}
export declare class Font {
    name?: string;
    size?: number;
    style?: number;
    static fromJson(jsonObject?: any): Font | undefined;
}
export declare class CustomizationColors {
    rfidProcessingScreenBackground?: number;
    rfidProcessingScreenHintLabelText?: number;
    rfidProcessingScreenHintLabelBackground?: number;
    rfidProcessingScreenProgressLabelText?: number;
    rfidProcessingScreenProgressBar?: number;
    rfidProcessingScreenProgressBarBackground?: number;
    rfidProcessingScreenResultLabelText?: number;
    rfidProcessingScreenLoadingBar?: number;
    static fromJson(jsonObject?: any): CustomizationColors | undefined;
}
export declare class CustomizationFonts {
    rfidProcessingScreenHintLabel?: Font;
    rfidProcessingScreenProgressLabel?: Font;
    rfidProcessingScreenResultLabel?: Font;
    static fromJson(jsonObject?: any): CustomizationFonts | undefined;
}
export declare class CustomizationImages {
    rfidProcessingScreenFailureImage?: string;
    static fromJson(jsonObject?: any): CustomizationImages | undefined;
}
export declare class Customization {
    showStatusMessages?: boolean;
    showResultStatusMessages?: boolean;
    showHelpAnimation?: boolean;
    showNextPageAnimation?: boolean;
    showBackgroundMask?: boolean;
    cameraFrameBorderWidth?: number;
    cameraFrameLineLength?: number;
    cameraFrameOffsetWidth?: number;
    nextPageAnimationStartDelay?: number;
    nextPageAnimationEndDelay?: number;
    cameraFrameShapeType?: number;
    status?: string;
    resultStatus?: string;
    multipageButtonText?: string;
    cameraFrameDefaultColor?: number;
    cameraFrameActiveColor?: number;
    statusTextColor?: number;
    resultStatusTextColor?: number;
    resultStatusBackgroundColor?: number;
    multipageButtonBackgroundColor?: number;
    tintColor?: number;
    activityIndicatorColor?: number;
    statusBackgroundColor?: number;
    cameraPreviewBackgroundColor?: number;
    backgroundMaskColor?: number;
    multipageButtonTextColor?: number;
    statusPositionMultiplier?: number;
    resultStatusPositionMultiplier?: number;
    toolbarSize?: number;
    backgroundMaskAlpha?: number;
    customStatusPositionMultiplier?: number;
    livenessAnimationPositionMultiplier?: number;
    cameraFrameVerticalPositionMultiplier?: number;
    cameraFrameLandscapeAspectRatio?: number;
    cameraFramePortraitAspectRatio?: number;
    cameraFrameCornerRadius?: number;
    activityIndicatorPortraitPositionMultiplier?: number;
    activityIndicatorLandscapePositionMultiplier?: number;
    cameraPreviewVerticalPositionMultiplier?: number;
    multipageAnimationFrontImage?: string;
    multipageAnimationBackImage?: string;
    borderBackgroundImage?: string;
    helpAnimationImage?: string;
    closeButtonImage?: string;
    captureButtonImage?: string;
    cameraSwitchButtonImage?: string;
    torchButtonOnImage?: string;
    torchButtonOffImage?: string;
    changeFrameButtonExpandImage?: string;
    changeFrameButtonCollapseImage?: string;
    livenessAnimationImage?: string;
    statusTextFont?: Font;
    resultStatusTextFont?: Font;
    multipageButtonTextFont?: Font;
    customLabelStatus?: string;
    cameraFrameLineCap?: number;
    uiCustomizationLayer?: Record<string, any>;
    helpAnimationImageContentMode?: number;
    multipageAnimationFrontImageContentMode?: number;
    multipageAnimationBackImageContentMode?: number;
    livenessAnimationImageContentMode?: number;
    borderBackgroundImageContentMode?: number;
    helpAnimationImageMatrix?: number[];
    multipageAnimationFrontImageMatrix?: number[];
    multipageAnimationBackImageMatrix?: number[];
    livenessAnimationImageMatrix?: number[];
    borderBackgroundImageMatrix?: number[];
    colors?: CustomizationColors;
    fonts?: CustomizationFonts;
    images?: CustomizationImages;
    static fromJson(jsonObject?: any): Customization | undefined;
}
export declare class EDLDataGroups {
    DG1?: boolean;
    DG2?: boolean;
    DG3?: boolean;
    DG4?: boolean;
    DG5?: boolean;
    DG6?: boolean;
    DG7?: boolean;
    DG8?: boolean;
    DG9?: boolean;
    DG10?: boolean;
    DG11?: boolean;
    DG12?: boolean;
    DG13?: boolean;
    DG14?: boolean;
    static fromJson(jsonObject?: any): EDLDataGroups | undefined;
}
export declare class EPassportDataGroups {
    DG1?: boolean;
    DG2?: boolean;
    DG3?: boolean;
    DG4?: boolean;
    DG5?: boolean;
    DG6?: boolean;
    DG7?: boolean;
    DG8?: boolean;
    DG9?: boolean;
    DG10?: boolean;
    DG11?: boolean;
    DG12?: boolean;
    DG13?: boolean;
    DG14?: boolean;
    DG15?: boolean;
    DG16?: boolean;
    static fromJson(jsonObject?: any): EPassportDataGroups | undefined;
}
export declare class EIDDataGroups {
    DG1?: boolean;
    DG2?: boolean;
    DG3?: boolean;
    DG4?: boolean;
    DG5?: boolean;
    DG6?: boolean;
    DG7?: boolean;
    DG8?: boolean;
    DG9?: boolean;
    DG10?: boolean;
    DG11?: boolean;
    DG12?: boolean;
    DG13?: boolean;
    DG14?: boolean;
    DG15?: boolean;
    DG16?: boolean;
    DG17?: boolean;
    DG18?: boolean;
    DG19?: boolean;
    DG20?: boolean;
    DG21?: boolean;
    static fromJson(jsonObject?: any): EIDDataGroups | undefined;
}
export declare class DTCDataGroup {
    DG17?: boolean;
    DG18?: boolean;
    DG22?: boolean;
    DG23?: boolean;
    DG24?: boolean;
    static fromJson(jsonObject?: any): DTCDataGroup | undefined;
}
export declare class RFIDScenario {
    paceStaticBinding?: boolean;
    onlineTA?: boolean;
    writeEid?: boolean;
    universalAccessRights?: boolean;
    authorizedRestrictedIdentification?: boolean;
    auxVerificationCommunityID?: boolean;
    auxVerificationDateOfBirth?: boolean;
    skipAA?: boolean;
    strictProcessing?: boolean;
    pkdDSCertPriority?: boolean;
    pkdUseExternalCSCA?: boolean;
    trustedPKD?: boolean;
    passiveAuth?: boolean;
    useSFI?: boolean;
    readEPassport?: boolean;
    readEID?: boolean;
    readEDL?: boolean;
    authorizedSTSignature?: boolean;
    authorizedSTQSignature?: boolean;
    authorizedWriteDG17?: boolean;
    authorizedWriteDG18?: boolean;
    authorizedWriteDG19?: boolean;
    authorizedWriteDG20?: boolean;
    authorizedWriteDG21?: boolean;
    authorizedVerifyAge?: boolean;
    authorizedVerifyCommunityID?: boolean;
    authorizedPrivilegedTerminal?: boolean;
    authorizedCANAllowed?: boolean;
    authorizedPINManagement?: boolean;
    authorizedInstallCert?: boolean;
    authorizedInstallQCert?: boolean;
    applyAmendments?: boolean;
    autoSettings?: boolean;
    proceedReadingAlways?: boolean;
    readDTC?: boolean;
    mrzStrictCheck?: boolean;
    loadCRLFromRemote?: boolean;
    independentSODStatus?: boolean;
    readingBuffer?: number;
    onlineTAToSignDataType?: number;
    defaultReadingBufferSize?: number;
    signManagementAction?: number;
    profilerType?: number;
    authProcType?: number;
    baseSMProcedure?: number;
    pacePasswordType?: number;
    terminalType?: number;
    password?: string;
    pkdPA?: string;
    pkdEAC?: string;
    mrz?: string;
    eSignPINDefault?: string;
    eSignPINNewValue?: string;
    cardAccess?: string;
    mrzHash?: string;
    documentNumber?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
    eDLDataGroups?: EDLDataGroups;
    ePassportDataGroups?: EPassportDataGroups;
    eIDDataGroups?: EIDDataGroups;
    dtcDataGroups?: DTCDataGroup;
    static fromJson(jsonObject?: any): RFIDScenario | undefined;
}
export declare class PrepareProgress {
    downloadedBytes?: number;
    totalBytes?: number;
    progress?: number;
    static fromJson(jsonObject?: any): PrepareProgress | undefined;
}
export declare const FontStyle: {
    NORMAL: number;
    BOLD: number;
    ITALIC: number;
    BOLD_ITALIC: number;
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
    MRZ: number;
    STATUS_ONLY: number;
    OVI: number;
    LIVENESS: number;
    OCR: number;
};
export declare const CustomizationColor: {
    RFID_PROCESSING_SCREEN_BACKGROUND: string;
    RFID_PROCESSING_SCREEN_HINT_LABEL_TEXT: string;
    RFID_PROCESSING_SCREEN_HINT_LABEL_BACKGROUND: string;
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL_TEXT: string;
    RFID_PROCESSING_SCREEN_PROGRESS_BAR: string;
    RFID_PROCESSING_SCREEN_PROGRESS_BAR_BACKGROUND: string;
    RFID_PROCESSING_SCREEN_RESULT_LABEL_TEXT: string;
    RFID_PROCESSING_SCREEN_LOADING_BAR: string;
};
export declare const eRFID_ErrorCodes: {
    RFID_ERROR_NO_ERROR: number;
    RFID_ERROR_ALREADY_DONE: number;
    RFID_ERROR_FAILED: number;
    RFID_ERROR_NO_CHIP_DETECTED: number;
    RFID_ERROR_NOT_AVAILABLE: number;
    RFID_ERROR_INVALID_PARAMETER: number;
    RFID_ERROR_NOT_INITIALIZED: number;
    RFID_ERROR_NOT_ENOUGH_MEMORY: number;
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
    RFID_ERROR_PCSC_FAILED_SCARD: number;
    RFID_ERROR_PCSC_EXT_LE_FAILED: number;
    RFID_ERROR_LAYER6_SECURITY_MANAGER: number;
    RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: number;
    RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: number;
    RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: number;
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: number;
    RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: number;
    RFID_ERROR_LAYER6_SM_DO_8E_MISSING: number;
    RFID_ERROR_LAYER6_SM_DO_87_MISSING: number;
    RFID_ERROR_LAYER6_SM_DO_99_MISSING: number;
    RFID_ERROR_LAYER6_SM_MAC_INCORRECT: number;
    RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: number;
    RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: number;
    RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: number;
    RFID_ERROR_LAYER6_INT_AUTH_FAILURE: number;
    RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: number;
    RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: number;
    RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: number;
    RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: number;
    RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: number;
    RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: number;
    RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: number;
    RFID_ERROR_LAYER6_FILE_NOT_FOUND: number;
    RFID_ERROR_LAYER6_FILE_EOF1: number;
    RFID_ERROR_LAYER6_FILE_EOF2: number;
    RFID_ERROR_LAYER6_INCORRECT_PARAMS: number;
    RFID_ERROR_LAYER6_NO_REFERENCE_DATA: number;
    RFID_ERROR_LAYER6_PWD_SUSPEND: number;
    RFID_ERROR_LAYER6_PWD_BLOCKED: number;
    RFID_ERROR_LAYER6_PWD_DEACTIVATED: number;
    RFID_ERROR_LAYER6_PWD_BLOCKED2: number;
    RFID_ERROR_LAYER6_PWD_DEACTIVATED2: number;
    RFID_ERROR_LAYER6_PWD_SUSPEND2: number;
    RFID_ERROR_LAYER6_PWD_FAILED: number;
    RFID_ERROR_NOT_PERFORMED: number;
    RFID_ERROR_SESSION_IS_CLOSED: number;
    RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: number;
    RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: number;
    RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: number;
    RFID_ERROR_Session_Procedure_Type_Unsupported: number;
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
    RFID_ERROR_LAYER34_NO_ERROR: number;
    RFID_ERROR_LAYER34_TIME_OUT: number;
    RFID_ERROR_LAYER34_COLLISION: number;
    RFID_ERROR_LAYER34_CRC: number;
    RFID_ERROR_LAYER34_DATA_INTEGRITY: number;
    RFID_ERROR_LAYER34_DATA_LENGTH: number;
    RFID_ERROR_Layer34_RFU: number;
    RFID_ERROR_LAYER34_COLLISION_TOO_MANY: number;
    RFID_ERROR_LAYER34_PROTOCOL_B: number;
    RFID_ERROR_LAYER34_DATA_CONTENTS: number;
    RFID_ERROR_LAYER34_PROTOCOL: number;
    RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: number;
    RFID_ERROR_LAYER34_MIFARE_AUTH: number;
    RFID_ERROR_LAYER34_SAM_ERROR: number;
    RFID_ERROR_LAYER34_SAM_COLLISION: number;
    RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: number;
};
export declare const eLDS_ParsingErrorCodes: {
    ERR_LDS_OK: number;
    ERR_LDS_ASN_INCORRECT_DATA: number;
    RR_LDS_ASN_NOT_ENOUGH_DATA: number;
    ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: number;
    ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: number;
    ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: number;
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: number;
    ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: number;
    ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: number;
    ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: number;
    ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: number;
    ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: number;
    ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: number;
    ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: number;
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: number;
    ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
    ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: number;
    ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: number;
    ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: number;
    ERR_LDS_AUTH_ERROR: number;
    ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
    ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: number;
    ERR_LDS_AUTH_MESSED_ALGORITHMS: number;
    ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: number;
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: number;
    ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: number;
    ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: number;
    ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: number;
    ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: number;
    ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: number;
    ERR_LDS_DG_WRONG_TAH: number;
    ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: number;
    ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: number;
    ERR_LDS_PACE_INFO_NOT_AVAILABLE: number;
    ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: number;
    ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: number;
    ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: number;
    ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: number;
    ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: number;
    ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: number;
    ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: number;
    ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: number;
    ERR_LDS_PACE_MAPPING_CANT_PERFORM: number;
    ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: number;
    ERR_LDS_PACE_CAM_DATA_INCORRECT: number;
    ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: number;
    ERR_LDS_PACE_CAM_DATA_NON_MATCHING: number;
    ERR_LDS_PACE_IM_SCHEME_INCORRECT: number;
    ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: number;
    ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: number;
    ERR_LDS_CA_CANT_FIND_INFO: number;
    ERR_LDS_CA_INCORRECT_VERSION: number;
    ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: number;
    ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: number;
    ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
    ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: number;
    ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: number;
    ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: number;
    ERR_LDS_TA_INCORRECT_VERSION: number;
    ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: number;
    ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: number;
    ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
    ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: number;
    ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: number;
    ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: number;
    ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: number;
    ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: number;
    ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: number;
    ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: number;
    ERR_LDS_AA_INCORRECT_TRAILER: number;
    ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: number;
    ERR_LDS_RI_SECTOR_KEY_CANT_FIND: number;
    ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: number;
    ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: number;
    ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: number;
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: number;
    ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: number;
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: number;
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: number;
    ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: number;
    ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: number;
    ERR_LDS_VDS_UNSUPPORTED_VERSION: number;
    ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: number;
    ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: number;
    ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: number;
    ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: number;
    ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: number;
    ERR_LDS_VDS_NC_INCORRECT_DATA: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: number;
    ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: number;
};
export declare const eRFID_CertificateType: {
    CT_UNDEFINED: number;
    CT_CSCA: number;
    CT_CSCA_LINK: number;
    CT_DS: number;
    CT_MLS: number;
    CT_DEV_LS: number;
    CT_DEF_LS: number;
    CT_BLS: number;
    CT_LDS2: number;
    CT_BCS: number;
    CT_BCSNC: number;
};
export declare const RGLMeasureSystem: {
    METRIC: number;
    IMPERIAL: number;
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
    RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION: number;
    RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL: number;
    RPRM_RESULT_TYPE_INTERNAL_LICENSE: number;
    RPRM_RESULT_TYPE_TEXT: number;
    RPRM_RESULT_TYPE_IMAGES: number;
    RPRM_RESULT_TYPE_HOLO_PARAMS: number;
    RPRM_RESULT_TYPE_DOCUMENT_POSITION: number;
    RPRM_RESULT_TYPE_CUSTOM: number;
    RFID_RESULT_TYPE_RFID_RAW_DATA: number;
    RFID_RESULT_TYPE_RFID_TEXT_DATA: number;
    RFID_RESULT_TYPE_RFID_IMAGE_DATA: number;
    RFID_RESULT_TYPE_RFID_BINARY_DATA: number;
    RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: number;
    RPRM_RESULT_TYPE_BARCODE_POSITION: number;
    RPRM_RESULT_TYPE_MRZ_POSITION: number;
    RPRM_RESULT_TYPE_LIVE_PORTRAIT: number;
    RPRM_RESULT_TYPE_STATUS: number;
    RPRM_RESULT_TYPE_PORTRAIT_COMPARISON: number;
    RPRM_RESULT_TYPE_EXT_PORTRAIT: number;
    RFID_RESULT_TYPE_RFID_DTC_VC: number;
};
export declare const FrameShapeType: {
    LINE: number;
    CORNER: number;
};
export declare const eRFID_BaudRate: {
    rfbr_106: number;
    rfbr_212: number;
    rfbr_424: number;
    rfbr_848: number;
};
export declare const LineCap: {
    BUTT: number;
    ROUND: number;
    SQUARE: number;
};
export declare const eRPRM_FieldVerificationResult: {
    RCF_DISABLED: number;
    RCF_VERIFIED: number;
    RCF_NOT_VERIFIED: number;
    RCF_COMPARE_TRUE: number;
    RCF_COMPARE_FALSE: number;
};
export declare const DocReaderAction: {
    COMPLETE: number;
    PROCESS: number;
    MORE_PAGES_AVAILABLE: number;
    CANCEL: number;
    ERROR: number;
    PROCESS_WHITE_FLASHLIGHT: number;
    TIMEOUT: number;
    PROCESSING_ON_SERVICE: number;
    NOTIFICATION: number;
    PROCESS_WHITE_UV_IMAGES: number;
    PROCESS_IR_FRAME: number;
};
export declare const eProcessGLCommands: {
    ePC_ProcMgr_SetLicense: number;
    ePC_ProcMgr_Process: number;
    ePC_ProcMgr_ProcessAsync: number;
    ePC_ProcMgr_Init: number;
    ePC_ProcMgr_ProcessImage: number;
    ePC_ProcMgr_StartNewDocument: number;
    ePC_ProcMgr_StartNewPage: number;
    ePC_ProcMgr_AddDataToPackage: number;
    ePC_ProcMgr_FinalizePackage: number;
    ePC_ProcMgr_CreateBackendTransaction: number;
    ePC_ProcMgr_Unload: number;
    ePC_ProcMgr_CheckDatabase: number;
    ePC_ProcMgr_ComparePortraits: number;
    ePC_RFID_SetTCCParams: number;
};
export declare const eRFIDReadingBufferSize: {
    EXTENDED_LENGTH: number;
    SINGLE_LENGTH: number;
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
export declare const eRFID_AuthenticationProcedureType: {
    aptUndefined: number;
    aptStandard: number;
    aptAdvanced: number;
    aptGeneral: number;
};
export declare const DocumentReaderErrorCodes: {
    INITIALIZATION_CORE_ABSENT: number;
    INITIALIZATION_FAILED: number;
    INCORRECT_SCENARIO: number;
    NO_RESULT: number;
    REMOVE_DATABASE: number;
    FETCHING_DATABASE: number;
    DB_ID_NOT_FOUND: number;
    DB_DESCRIPTION_NOT_FOUND: number;
    SAVE_DB: number;
    DOWNLOAD_DB_INCORRECT_CHECKSUM: number;
    DB_DOWNLOAD: number;
    LICENSE_ABSENT_OR_CORRUPTED: number;
    LICENSE_INVALID_DATE: number;
    LICENSE_INVALID_VERSION: number;
    LICENSE_INVALID_DEVICE_ID: number;
    LICENSE_INVALID_SYSTEM_OR_APP_ID: number;
    LICENSE_NO_CAPABILITIES: number;
    LICENSE_NO_AUTHENTICITY: number;
    RECORD_PROCESS_INVALID_OUTPUT_URL: number;
    LICENSE_ONLINE_ERROR: number;
    LICENSE_NO_DATABASE: number;
    LICENSE_DATABASE_INCORRECT: number;
    INVALID_TCC_PARAMS: number;
    RFID_IN_PROGRESS: number;
    START_BACKEND_PROCESSING: number;
    ADD_DATA_TO_PACKAGE: number;
    FINALIZE_FAILED: number;
    CAMERA_NO_PERMISSION: number;
    CAMERA_NOT_AVAILABLE: number;
    CANNOT_USE_CAMERA_IN_SCENARIO: number;
    NATIVE_JAVA_EXCEPTION: number;
    BACKEND_ONLINE_PROCESSING: number;
    WRONG_INPUT: number;
    STATE_EXCEPTION: number;
    BLE_EXCEPTION: number;
    FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: number;
    APP_BACKGROUND: number;
    ONLINE_PROCESSING_WRONG_INPUT: number;
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
    SCENARIO_BARCODE_AND_LOCATE: string;
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
    SCENARIO_DTC: string;
    SCENARIO_RFID: string;
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
export declare const eRFID_NotificationCodes: {
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
};
export declare const CameraPosition: {
    UNSPECIFIED: number;
    BACK: number;
    FRONT: number;
};
export declare const eRFID_Password_Type: {
    PPT_UNKNOWN: number;
    PPT_MRZ: number;
    PPT_CAN: number;
    PPT_PIN: number;
    PPT_PUK: number;
    PPT_PIN_ESIGN: number;
    PPT_SAI: number;
    PPT_MRZ_HASH: number;
};
export declare const ViewContentMode: {
    UNKNOWN: number;
    SCALE_TO_FILL: number;
    SCALE_ASPECT_FIT: number;
    SCALE_ASPECT_FILL: number;
    REDRAW: number;
    CENTER: number;
    TOP: number;
    BOTTOM: number;
    LEFT: number;
    RIGHT: number;
    TOP_LEFT: number;
    TOP_RIGHT: number;
    BOTTOM_LEFT: number;
    BOTTOM_RIGHT: number;
};
export declare const BarcodeResult: {
    NO_ERR: number;
    INVALID_RESULT: number;
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
export declare const eRFID_Application_Type: {
    ePASSPORT: number;
    eID: number;
    eSIGN: number;
    eDL: number;
    LDS2_TRAVEL_RECORDS: number;
    LDS2_VISA_RECORDS: number;
    LDS2_ADD_BIOMETRICS: number;
    eDTC_PC: number;
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
    CONTACT_CHIP_TYPE_MISMATCH: number;
    FIBERS_NOT_FOUND: number;
    TOO_MANY_OBJECTS: number;
    SPECKS_IN_UV: number;
    TOO_LOW_RESOLUTION: number;
    INVISIBLE_ELEMENT_PRESENT: number;
    VISIBLE_ELEMENT_ABSENT: number;
    ELEMENT_SHOULD_BE_COLORED: number;
    ELEMENT_SHOULD_BE_GRAYSCALE: number;
    PHOTO_WHITE_IR_DONT_MATCH: number;
    UV_DULL_PAPER_MRZ: number;
    FALSE_LUMINISCENCE_IN_MRZ: number;
    UV_DULL_PAPER_PHOTO: number;
    UV_DULL_PAPER_BLANK: number;
    UV_DULL_PAPER_ERROR: number;
    FALSE_LUMINISCENCE_IN_BLANK: number;
    BAD_AREA_IN_AXIAL: number;
    FALSE_IPI_PARAMETERS: number;
    ENCRYPTED_IPI_NOT_FOUND: number;
    ENCRYPTED_IPI_DATA_DONT_MATCH: number;
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR: number;
    FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: number;
    FIELD_POS_CORRECTOR_PHOTO_REPLACED: number;
    FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: number;
    FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: number;
    FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: number;
    CHD_FIELD_POS_CORRECTOR_INCORRECT_HEAD_POSITION: number;
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
    HOLOGRAM_FRAMES_IS_ABSENT: number;
    HOLOGRAM_HOLO_FIELD_IS_ABSENT: number;
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
    GLARES_IN_BARCODE_AREA: number;
    CHD_NO_CERTIFICATE_FOR_DIGITAL_SIGNATURE_CHECK: number;
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER: number;
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY: number;
    PORTRAIT_COMPARISON_SERVICE_ERROR: number;
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: number;
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO: number;
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: number;
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: number;
    MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: number;
    MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: number;
    FINGERPRINTS_COMPARISON_MISMATCH: number;
    HOLO_PHOTO_FACE_NOT_DETECTED: number;
    HOLO_PHOTO_FACE_COMPARISON_FAILED: number;
    HOLO_PHOTO_FACE_GLARE_IN_CENTER_ABSENT: number;
    HOLO_ELEMENT_SHAPE_ERROR: number;
    ALGORITHM_STEPS_ERROR: number;
    HOLO_AREAS_NOT_LOADED: number;
    FINISHED_BY_TIMEOUT: number;
    HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME: number;
    LIVENESS_DEPTH_CHECK_FAILED: number;
    MRZ_QUALITY_WRONG_SYMBOL_POSITION: number;
    MRZ_QUALITY_WRONG_BACKGROUND: number;
    MRZ_QUALITY_WRONG_MRZ_WIDTH: number;
    MRZ_QUALITY_WRONG_MRZ_HEIGHT: number;
    MRZ_QUALITY_WRONG_LINE_POSITION: number;
    MRZ_QUALITY_WRONG_FONT_TYPE: number;
    OCR_QUALITY_TEXT_POSITION: number;
    OCR_QUALITY_INVALID_FONT: number;
    OCR_QUALITY_INVALID_BACKGROUND: number;
    LAS_INK_INVALID_LINES_FREQUENCY: number;
    DOC_LIVENESS_DOCUMENT_NOT_LIVE: number;
    CHD_DOC_LIVENESS_BLACK_AND_WHITE_COPY_DETECTED: number;
    DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: number;
    DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: number;
    ICAO_IDB_BASE_32_ERROR: number;
    ICAO_IDB_ZIPPED_ERROR: number;
    ICAO_IDB_MESSAGE_ZONE_EMPTY: number;
    ICAO_IDB_SIGNATURE_MUST_BE_PRESENT: number;
    ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT: number;
    ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT: number;
    INCORRECT_OBJECT_COLOR: number;
};
export declare const RFIDDelegate: {
    NULL: number;
    NO_PA: number;
    FULL: number;
};
export declare const TextProcessing: {
    ocNoChange: number;
    ocUppercase: number;
    ocLowercase: number;
    ocCapital: number;
};
export declare const LogLevel: {
    FatalError: string;
    Error: string;
    Warning: string;
    Info: string;
    Debug: string;
};
export declare const AnimationImage: {
    UNKNOWN: number;
    PASSPORT_SINGLE_PAGE: number;
    PASSPORT_TWO_PAGES: number;
    ID_FRONT: number;
    ID_FRONT_MRZ: number;
    ID_BACK: number;
    ID_BACK_MRZ: number;
    ID_BACK_BARCODE: number;
    ID_BACK_BARCODE_MRZ: number;
    BANK_CARD_FRONT: number;
    BANK_CARD_BACK: number;
};
export declare const ProcessingFinishedStatus: {
    NOT_READY: number;
    READY: number;
    TIMEOUT: number;
};
export declare const DocFormat: {
    ID1: number;
    ID2: number;
    ID3: number;
    NON: number;
    A4: number;
    ID3_x2: number;
    ID2_TURKEY: number;
    ID1_90: number;
    ID1_180: number;
    ID1_270: number;
    ID2_180: number;
    ID3_180: number;
    CUSTOM: number;
    PHOTO: number;
    FLEXIBLE: number;
    UNKNOWN: number;
};
export declare const eLDS_ParsingNotificationCodes: {
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: number;
    NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: number;
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: number;
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: number;
    NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: number;
    NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: number;
    NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: number;
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: number;
    NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: number;
    NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: number;
    NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: number;
    NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
    NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: number;
    NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: number;
    NTF_LDS_ICAO_CERTIFICATE_VALIDITY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: number;
    NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: number;
    NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: number;
    NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: number;
    NTF_LDS_ICAO_COM_DGPM_INCORRECT: number;
    NTF_LDS_ICAO_COM_DGPM_MISSING: number;
    NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: number;
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: number;
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: number;
    NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: number;
    NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: number;
    NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: number;
    NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: number;
    NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: number;
    NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: number;
    NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: number;
    NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: number;
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: number;
    NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: number;
    NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: number;
    NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: number;
    NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: number;
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: number;
    NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: number;
    NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: number;
    NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: number;
    NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: number;
    NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: number;
    NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: number;
    NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: number;
    NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: number;
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: number;
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: number;
    NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: number;
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: number;
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: number;
    NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: number;
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: number;
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: number;
    NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: number;
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: number;
    NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: number;
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: number;
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: number;
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: number;
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: number;
    NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: number;
    NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: number;
    NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: number;
    NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: number;
    NTF_LDS_MRZ_NAME_IS_VOID: number;
    NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: number;
    NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: number;
    NTF_LDS_MRZ_DOB_SYNTAX_ERROR: number;
    NTF_LDS_MRZ_DOB_ERROR: number;
    NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: number;
    NTF_LDS_MRZ_SEX_INCORRECT: number;
    NTF_LDS_MRZ_DOE_SYNTAX_ERROR: number;
    NTF_LDS_MRZ_DOE_ERROR: number;
    NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: number;
    NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: number;
    NTF_LDS_MRZ_INCORRECT_CHECKSUM: number;
    NTF_LDS_MRZ_INCORRECT: number;
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: number;
    NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: number;
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: number;
    NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: number;
    NTF_LDS_BIOMETRICS_TYPE_INCORRECT: number;
    NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: number;
    NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: number;
    NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: number;
    NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: number;
    NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: number;
    NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: number;
    NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: number;
    NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: number;
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: number;
    NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
    NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: number;
    NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
    NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
    NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: number;
    NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: number;
    NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: number;
    NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: number;
    NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
    NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: number;
    NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: number;
    NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: number;
    NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: number;
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: number;
    NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: number;
    NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: number;
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: number;
    NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: number;
    NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: number;
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: number;
    NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: number;
    NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: number;
    NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: number;
    NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: number;
    NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: number;
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: number;
    NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: number;
    NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: number;
    NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: number;
    NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: number;
    NTF_LDS_CV_CERTIFICATE_VALIDITY: number;
    NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: number;
    NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: number;
    NTF_LDS_TA_PACE_STATIC_BINDING_USED: number;
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: number;
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: number;
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: number;
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: number;
    NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: number;
    NTF_LDS_ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING: number;
    NTF_LDS_ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING: number;
    NTF_LDS_MRZ_COUNTRYCODE_VISUALMRZ_NON_MATCHING: number;
    NTF_LDS_ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING: number;
    NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_UPPER_CASE: number;
    NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_UPPER_CASE: number;
};
export declare const eImageQualityCheckType: {
    IQC_IMAGE_GLARES: number;
    IQC_IMAGE_FOCUS: number;
    IQC_IMAGE_RESOLUTION: number;
    IQC_IMAGE_COLORNESS: number;
    IQC_PERSPECTIVE: number;
    IQC_BOUNDS: number;
    IQC_SCREEN_CAPTURE: number;
    IQC_PORTRAIT: number;
    IQC_HANDWRITTEN: number;
    IQC_BRIGHTNESS: number;
    IQC_OCCLUSION: number;
};
export declare const MRZFormat: {
    FORMAT_1X30: string;
    FORMAT_3X30: string;
    FORMAT_2X36: string;
    FORMAT_2X44: string;
    FORMAT_1X6: string;
    FORMAT_2X30: string;
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
    JABCODE: number;
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
    SECURITY_FEATURE_TYPE_OCR: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_VISUAL: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_RFID: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_LIVE: number;
    SECURITY_FEATURE_TYPE_LIVENESS_DEPTH: number;
    SECURITY_FEATURE_TYPE_MICROTEXT: number;
    SECURITY_FEATURE_TYPE_FLUORESCENT_OBJECT: number;
    SECURITY_FEATURE_TYPE_LANDMARKS_CHECK: number;
    SECURITY_FEATURE_TYPE_FACE_PRESENCE: number;
    SECURITY_FEATURE_TYPE_FACE_ABSENCE: number;
    SECURITY_FEATURE_TYPE_LIVENESS_SCREEN_CAPTURE: number;
    SECURITY_FEATURE_TYPE_LIVENESS_ELECTRONIC_DEVICE: number;
    SECURITY_FEATURE_TYPE_LIVENESS_OVI: number;
    SECURITY_FEATURE_TYPE_BARCODE_SIZE_CHECK: number;
    SECURITY_FEATURE_TYPE_LAS_INK: number;
    SECURITY_FEATURE_TYPE_LIVENESS_MLI: number;
    SECURITY_FEATURE_TYPE_LIVENESS_BARCODE_BACKGROUND: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_BARCODE: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_BARCODE: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXT_VS_BARCODE: number;
    SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_BARCODE_VS_CAMERA: number;
    SECURITY_FEATURE_TYPE_CHECK_DIGITAL_SIGNATURE: number;
    SECURITY_FEATURE_TYPE_CONTACT_CHIP_CLASSIFICATION: number;
    SECURITY_FEATURE_TYPE_HEAD_POSITION_CHECK: number;
    SECURITY_FEATURE_TYPE_LIVENESS_BLACK_AND_WHITE_COPY_CHECK: number;
    SECURITY_FEATURE_TYPE_LIVENESS_DYNAPRINT_CHECK: number;
    SECURITY_FEATURE_TYPE_LIVENESS_GEOMETRY_CHECK: number;
};
export declare const OnlineMode: {
    MANUAL: number;
    AUTO: number;
};
export declare const eRFID_SDK_ProfilerType: {
    SPT_DOC_9303_EDITION_2006: number;
    SPT_DOC_9303_LDS_PKI_MAINTENANCE: number;
};
export declare const diDocType: {
    dtNotDefined: number;
    dtPassport: number;
    dtIdentityCard: number;
    dtDiplomaticPassport: number;
    dtServicePassport: number;
    dtSeamanIdentityDocument: number;
    dtIdentityCardForResidence: number;
    dtTravelDocument: number;
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
    dtCommercialDrivingLicenseInstructionalPermit: number;
    dtCommercialDrivingLicenseUnder18: number;
    dtCommercialDrivingLicenseUnder21: number;
    dtCommercialInstructionPermit: number;
    dtCommercialNewPermit: number;
    dtConcealedCarryLicense: number;
    dtConcealedFirearmPermit: number;
    dtConditionalDrivingLicense: number;
    dtDepartmentOfVeteransAffairsIdentityCard: number;
    dtDiplomaticDrivingLicense: number;
    dtDrivingLicense: number;
    dtDrivingLicenseInstructionalPermit: number;
    dtDrivingLicenseInstructionalPermitUnder18: number;
    dtDrivingLicenseInstructionalPermitUnder21: number;
    dtDrivingLicenseLearnersPermit: number;
    dtDrivingLicenseLearnersPermitUnder18: number;
    dtDrivingLicenseLearnersPermitUnder21: number;
    dtDrivingLicenseNovice: number;
    dtDrivingLicenseNoviceUnder18: number;
    dtDrivingLicenseNoviceUnder21: number;
    dtDrivingLicenseRegisteredOffender: number;
    dtDrivingLicenseRestrictedUnder18: number;
    dtDrivingLicenseRestrictedUnder21: number;
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
    dtGraduatedInstructionPermitUnder18: number;
    dtGraduatedInstructionPermitUnder21: number;
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
    dtInstructionPermit: number;
    dtInstructionPermitUnder18: number;
    dtInstructionPermitUnder21: number;
    dtInterimDrivingLicense: number;
    dtInterimIdentityCard: number;
    dtIntermediateDrivingLicense: number;
    dtIntermediateDrivingLicenseUnder18: number;
    dtIntermediateDrivingLicenseUnder21: number;
    dtJuniorDrivingLicense: number;
    dtLearnerInstructionalPermit: number;
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
    dtRestrictedCommercialDrivingLicense: number;
    dtRestrictedDrivingLicense: number;
    dtRestrictedPermit: number;
    dtSeasonalPermit: number;
    dtSeasonalResidentIdentityCard: number;
    dtSeniorCitizenIdentityCard: number;
    dtSexOffender: number;
    dtSocialSecurityCard: number;
    dtTemporaryDrivingLicense: number;
    dtTemporaryDrivingLicenseUnder18: number;
    dtTemporaryDrivingLicenseUnder21: number;
    dtTemporaryIdentityCard: number;
    dtTemporaryInstructionPermitIdentityCard: number;
    dtTemporaryInstructionPermitIdentityCardUnder18: number;
    dtTemporaryInstructionPermitIdentityCardUnder21: number;
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
    dtAlienRegistrationCard: number;
    dtAPEHCard: number;
    dtCouponToDrivingLicense: number;
    dtCrewMemberCertificate: number;
    dtDocumentForReturn: number;
    dtECard: number;
    dtEmploymentCard: number;
    dtHKSARImmigrationForm: number;
    dtImmigrantCard: number;
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
    dtPermissionToTheLocalBorderTraffic: number;
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
    dtTradeLicense: number;
    dtPassportPage: number;
    dtInvoice: number;
    dtPassengerLocatorForm: number;
};
export declare const ButtonTag: {
    CLOSE: number;
    TORCH: number;
    CAPTURE: number;
    CHANGE_FRAME: number;
    SKIP: number;
    CAMERA_SWITCH: number;
};
export declare const HoloAnimationType: {
    DocumentHoloAnimationUnknown: number;
    DocumentHoloAnimationTypeHorizontal: number;
    DocumentHoloAnimationTypeVertical: number;
    DocumentHoloAnimationTypeLeftBottomRightTop: number;
    DocumentHoloAnimationTypeRightBottomLeftTop: number;
};
export declare const eRequestCommand: {
    eReqCmd_RFid_SendData: number;
    eReqCmd_RFid_Notify: number;
    eReqCmd_RFid_GetDataForScenario: number;
    eReqCmd_Torch_GetUVFoto: number;
    eReqCmd_InternetSend: number;
    eReqCmd_GetGuid: number;
    eReqCmd_WltToImage: number;
};
export declare const CustomizationFont: {
    RFID_PROCESSING_SCREEN_HINT_LABEL: string;
    RFID_PROCESSING_SCREEN_PROGRESS_LABEL: string;
    RFID_PROCESSING_SCREEN_RESULT_LABEL: string;
};
export declare const ImageFormat: {
    PNG: number;
    JPG: number;
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
    GF_CONTACT_CHIP: number;
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
};
export declare const RegDeviceConfigType: {
    DEVICE_7310: string;
};
export declare const CaptureSessionPreset: {
    UNKNOWN: number;
    LOW: number;
    MEDIUM: number;
    HIGH: number;
    PHOTO: number;
    INPUT_PRIORITY: number;
    PRESET_1280x720: number;
    PRESET_1920x1080: number;
    PRESET_3840x2160: number;
    FRAME_960x540: number;
    FRAME_1280x720: number;
    PRESET_640x480: number;
    PRESET_352x288: number;
};
export declare const CameraMode: {
    AUTO: number;
    CAMERA1: number;
    CAMERA2: number;
};
export declare const CaptureMode: {
    AUTO: number;
    CAPTURE_VIDEO: number;
    CAPTURE_FRAME: number;
};
export declare const eCheckResult: {
    CH_CHECK_ERROR: number;
    CH_CHECK_OK: number;
    CH_CHECK_WAS_NOT_DONE: number;
};
export declare const eRFID_TerminalType: {
    TET_UNDEFINED: number;
    TET_INSPECTION_SYSTEM: number;
    TET_AUTHENTICATION_TERMINAL: number;
    TET_SIGNATURE_TERMINAL: number;
    TET_UNAUTHENTICATED_TERMINAL: number;
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
    DFT_DTC_DG17: number;
    DFT_DTC_DG18: number;
    DFT_DTC_DG22: number;
    DFT_DTC_DG23: number;
    DFT_DTC_DG24: number;
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
    DFT_SAM_DATA: number;
    DFT_SAM_DATA_MAX: number;
    DFT_VDS: number;
    DFT_VDSNC: number;
    DFT_USERDEFINED: number;
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
    FT_DTC_VERSION: number;
    FT_DTC_ID: number;
    FT_DTC_DATE_OF_EXPIRY: number;
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
    FT_DLCLASSCODE_NT_FROM: number;
    FT_DLCLASSCODE_NT_TO: number;
    FT_DLCLASSCODE_NT_NOTES: number;
    FT_DLCLASSCODE_TN_FROM: number;
    FT_DLCLASSCODE_TN_TO: number;
    FT_DLCLASSCODE_TN_NOTES: number;
    FT_DLCLASSCODE_D3_FROM: number;
    FT_DLCLASSCODE_D3_TO: number;
    FT_DLCLASSCODE_D3_NOTES: number;
    FT_ALT_DATE_OF_EXPIRY: number;
    FT_DLCLASSCODE_CD_FROM: number;
    FT_DLCLASSCODE_CD_TO: number;
    FT_DLCLASSCODE_CD_NOTES: number;
    FT_PAYMENT_PERIOD_TO: number;
    FT_PAYMENT_PERIOD_FROM: number;
    FT_ISSUER_IDENTIFICATION_NUMBER: number;
    FT_VACCINATION_CERTIFICATE_IDENTIFIER: number;
    FT_FIRST_NAME: number;
    FT_DATE_OF_ARRIVAL: number;
    FT_SECOND_NAME: number;
    FT_THIRD_NAME: number;
    FT_FOURTH_NAME: number;
    FT_LAST_NAME: number;
    FT_DLCLASSCODE_RM_FROM: number;
    FT_DLCLASSCODE_RM_NOTES: number;
    FT_DLCLASSCODE_RM_TO: number;
    FT_DLCLASSCODE_PW_FROM: number;
    FT_DLCLASSCODE_PW_NOTES: number;
    FT_DLCLASSCODE_PW_TO: number;
    FT_DLCLASSCODE_EB_FROM: number;
    FT_DLCLASSCODE_EB_NOTES: number;
    FT_DLCLASSCODE_EB_TO: number;
    FT_DLCLASSCODE_EC_FROM: number;
    FT_DLCLASSCODE_EC_NOTES: number;
    FT_DLCLASSCODE_EC_TO: number;
    FT_DLCLASSCODE_EC1_FROM: number;
    FT_DLCLASSCODE_EC1_NOTES: number;
    FT_DLCLASSCODE_EC1_TO: number;
    FT_PLACE_OF_BIRTH_CITY: number;
    FT_YEAR_OF_BIRTH: number;
    FT_YEAR_OF_EXPIRY: number;
    FT_GRANDFATHER_NAME_MATERNAL: number;
    FT_FIRST_SURNAME: number;
    FT_MONTH_OF_BIRTH: number;
    FT_ADDRESS_FLOOR_NUMBER: number;
    FT_ADDRESS_ENTRANCE: number;
    FT_ADDRESS_BLOCK_NUMBER: number;
    FT_ADDRESS_STREET_NUMBER: number;
    FT_ADDRESS_STREET_TYPE: number;
    FT_ADDRESS_CITY_SECTOR: number;
    FT_ADDRESS_COUNTY_TYPE: number;
    FT_ADDRESS_CITY_TYPE: number;
    FT_ADDRESS_BUILDING_TYPE: number;
    FT_DATE_OF_RETIREMENT: number;
    FT_DOCUMENT_STATUS: number;
    FT_SIGNATURE: number;
    FT_UNIQUE_CERTIFICATE_IDENTIFIER: number;
    FT_EMAIL: number;
    FT_DATE_OF_SPECIMEN_COLLECTION: number;
    FT_TYPE_OF_TESTING: number;
    FT_RESULT_OF_TESTING: number;
    FT_METHOD_OF_TESTING: number;
    FT_DIGITAL_TRAVEL_AUTHORIZATION_NUMBER: number;
    FT_DATE_OF_FIRST_POSITIVE_TEST_RESULT: number;
    FT_EF_CARD_ACCESS: number;
    FT_SHORT_FLIGHT_NUMBER: number;
    FT_AIRLINE_CODE: number;
    FT_MVC_AGENCY: number;
    FT_ISSUING_STATE_CODE_ALPHA2: number;
    FT_NATIONALITY_CODE_ALPHA2: number;
};
export declare const DocReaderOrientation: {
    ALL: number;
    PORTRAIT: number;
    LANDSCAPE: number;
    LANDSCAPE_LEFT: number;
    LANDSCAPE_RIGHT: number;
};
export declare const LCID: {
    LATIN: number;
    ABKHAZIAN_CYRILLIC: number;
    AFRIKAANS: number;
    ALBANIAN: number;
    AMHARIC: number;
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
    ARABIC_WORLD: number;
    AZERI_CYRILIC: number;
    AZERI_LATIN: number;
    BASQUE: number;
    BANK_CARD: number;
    BANK_CARD_CVV2: number;
    BANK_CARD_NAME: number;
    BANK_CARD_NUMBER: number;
    BANK_CARD_VALID_THRU: number;
    BELARUSIAN: number;
    BENGALI_BANGLADESH: number;
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
    KASHMIRI: number;
    KAZAKH: number;
    KONKANI: number;
    KOREAN: number;
    KYRGYZ_CYRILICK: number;
    LAO: number;
    LATVIAN: number;
    LITHUANIAN: number;
    MALAY_MALAYSIA: number;
    MALAY_BRUNEI_DARUSSALAM: number;
    ASSAMESE: number;
    MARATHI: number;
    MONGOLIAN_CYRILIC: number;
    NORWEGIAN_BOKMAL: number;
    NORWEGIAN_NYORSK: number;
    PASHTO: number;
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
    SINDHI: number;
    SINDHI_INDIA: number;
    SINHALA: number;
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
    BENGALI_INDIA: number;
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
    MALTESE: number;
    BURMESE: number;
    KHMER: number;
    KARAKALPAK_LATIN: number;
    MALAYALAM: number;
    NEPALI: number;
    ORIYA: number;
    URDU_DETECTION: number;
};
export declare const CustomizationImage: {
    RFID_PROCESSING_SCREEN_FAILURE_IMAGE: string;
};
export declare const DocReaderFrame: {
    MAX: string;
    SCENARIO_DEFAULT: string;
    NONE: string;
    DOCUMENT: string;
};
export declare const eRPRM_Lights: {
    NONE: number;
    RPRM_LIGHT_UV: number;
    RPRM_LIGHT_WHITE_FULL: number;
    RPRM_LIGHT_IR: number;
    RPRM_Light_IR_TOP: number;
    RPRM_Light_IR_SIDE: number;
    RPRM_Light_IR_Full: number;
    RPRM_LIGHT_OVD: number;
    RPRM_LIGHT_WHITE_FULL_OVD: number;
};
export declare const eMrzDetectionModes: {
    DEFAULT: number;
    RESIZE_BINARIZE_WINDOW: number;
    BLUR_BEFORE_BINARIZATION: number;
};
export declare const Enum: {
    FontStyle: {
        NORMAL: number;
        BOLD: number;
        ITALIC: number;
        BOLD_ITALIC: number;
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
        MRZ: number;
        STATUS_ONLY: number;
        OVI: number;
        LIVENESS: number;
        OCR: number;
    };
    CustomizationColor: {
        RFID_PROCESSING_SCREEN_BACKGROUND: string;
        RFID_PROCESSING_SCREEN_HINT_LABEL_TEXT: string;
        RFID_PROCESSING_SCREEN_HINT_LABEL_BACKGROUND: string;
        RFID_PROCESSING_SCREEN_PROGRESS_LABEL_TEXT: string;
        RFID_PROCESSING_SCREEN_PROGRESS_BAR: string;
        RFID_PROCESSING_SCREEN_PROGRESS_BAR_BACKGROUND: string;
        RFID_PROCESSING_SCREEN_RESULT_LABEL_TEXT: string;
        RFID_PROCESSING_SCREEN_LOADING_BAR: string;
    };
    eRFID_ErrorCodes: {
        RFID_ERROR_NO_ERROR: number;
        RFID_ERROR_ALREADY_DONE: number;
        RFID_ERROR_FAILED: number;
        RFID_ERROR_NO_CHIP_DETECTED: number;
        RFID_ERROR_NOT_AVAILABLE: number;
        RFID_ERROR_INVALID_PARAMETER: number;
        RFID_ERROR_NOT_INITIALIZED: number;
        RFID_ERROR_NOT_ENOUGH_MEMORY: number;
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
        RFID_ERROR_PCSC_FAILED_SCARD: number;
        RFID_ERROR_PCSC_EXT_LE_FAILED: number;
        RFID_ERROR_LAYER6_SECURITY_MANAGER: number;
        RFID_ERROR_LAYER6_APP_SELECTION_FAILURE: number;
        RFID_ERROR_LAYER6_MUTUAL_AUTH_MAC_FAIL: number;
        RFID_ERROR_LAYER6_MUTUAL_AUTH_ENC_FAIL: number;
        RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE: number;
        RFID_ERROR_LAYER6_MUTUAL_AUTH_FAILURE_DATA: number;
        RFID_ERROR_LAYER6_SM_DO_8E_MISSING: number;
        RFID_ERROR_LAYER6_SM_DO_87_MISSING: number;
        RFID_ERROR_LAYER6_SM_DO_99_MISSING: number;
        RFID_ERROR_LAYER6_SM_MAC_INCORRECT: number;
        RFID_ERROR_LAYER6_SM_DO_87_INCORRECT: number;
        RFID_ERROR_LAYER6_NON_TLV_RESPONSE_DATA: number;
        RFID_ERROR_LAYER6_WRONG_RND_ICC_LENGTH: number;
        RFID_ERROR_LAYER6_INT_AUTH_FAILURE: number;
        RFID_ERROR_LAYER6_MSE_SET_KAT_FAILURE: number;
        RFID_ERROR_LAYER6_MSE_SET_DST_FAILURE: number;
        RFID_ERROR_LAYER6_PSO_CERTIFICATE_FAILURE: number;
        RFID_ERROR_LAYER6_MSE_SET_AT_FAILURE: number;
        RFID_ERROR_LAYER6_GET_CHALLENGE_FAILURE: number;
        RFID_ERROR_LAYER6_EXT_AUTH_FAILURE: number;
        RFID_ERROR_LAYER6_GENERAL_AUTH_FAILURE: number;
        RFID_ERROR_LAYER6_FILE_NOT_FOUND: number;
        RFID_ERROR_LAYER6_FILE_EOF1: number;
        RFID_ERROR_LAYER6_FILE_EOF2: number;
        RFID_ERROR_LAYER6_INCORRECT_PARAMS: number;
        RFID_ERROR_LAYER6_NO_REFERENCE_DATA: number;
        RFID_ERROR_LAYER6_PWD_SUSPEND: number;
        RFID_ERROR_LAYER6_PWD_BLOCKED: number;
        RFID_ERROR_LAYER6_PWD_DEACTIVATED: number;
        RFID_ERROR_LAYER6_PWD_BLOCKED2: number;
        RFID_ERROR_LAYER6_PWD_DEACTIVATED2: number;
        RFID_ERROR_LAYER6_PWD_SUSPEND2: number;
        RFID_ERROR_LAYER6_PWD_FAILED: number;
        RFID_ERROR_NOT_PERFORMED: number;
        RFID_ERROR_SESSION_IS_CLOSED: number;
        RFID_ERROR_SESSION_TERMINAL_UNSUPPORTED_OPERATION: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_UNKNOWN: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_BAD_CERTIFICATE: number;
        RFID_ERROR_SESSION_TERMINAL_TYPE_NOT_SET: number;
        RFID_ERROR_SESSION_PROCEDURE_TYPE_UNKNOWN: number;
        RFID_ERROR_Session_Procedure_Type_Unsupported: number;
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
        RFID_ERROR_LAYER34_NO_ERROR: number;
        RFID_ERROR_LAYER34_TIME_OUT: number;
        RFID_ERROR_LAYER34_COLLISION: number;
        RFID_ERROR_LAYER34_CRC: number;
        RFID_ERROR_LAYER34_DATA_INTEGRITY: number;
        RFID_ERROR_LAYER34_DATA_LENGTH: number;
        RFID_ERROR_Layer34_RFU: number;
        RFID_ERROR_LAYER34_COLLISION_TOO_MANY: number;
        RFID_ERROR_LAYER34_PROTOCOL_B: number;
        RFID_ERROR_LAYER34_DATA_CONTENTS: number;
        RFID_ERROR_LAYER34_PROTOCOL: number;
        RFID_ERROR_LAYER34_GLOBAL_TIME_OUT: number;
        RFID_ERROR_LAYER34_MIFARE_AUTH: number;
        RFID_ERROR_LAYER34_SAM_ERROR: number;
        RFID_ERROR_LAYER34_SAM_COLLISION: number;
        RFID_ERROR_LAYER34_SAM_ACKNOWLEDGE: number;
    };
    eLDS_ParsingErrorCodes: {
        ERR_LDS_OK: number;
        ERR_LDS_ASN_INCORRECT_DATA: number;
        RR_LDS_ASN_NOT_ENOUGH_DATA: number;
        ERR_LDS_ASN_CONTENTS_UNEXPECTED_DATA: number;
        ERR_LDS_ASN_SIGNED_DATA_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNED_DATA_ENCAP_CONTENTS_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNED_DATA_DIGEST_ALGORITHMS_INCORRECT_DATA: number;
        ERR_LDS_ASN_LDS_OBJECT_INCORRECT_DATA: number;
        ERR_LDS_ASN_LDS_OBJECT_VERSION_INCORRECT_DATA: number;
        ERR_LDS_ASN_LDS_OBJECT_DIGEST_ALGORITHM_INCORRECT_DATA: number;
        ERR_LDS_ASN_LDS_OBJECT_DG_HASHES_INCORRECT_DATA: number;
        ERR_LDS_ASN_LDS_OBJECT_VERSION_INFO_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_VERSION_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_SN_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_SIGNATURE_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_ISSUER_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_VALIDITY_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_SUBJECT_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_SUBJECT_PK_INCORRECT_DATA: number;
        ERR_LDS_ASN_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_SID_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_DIGEST_ALG_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_SIGNED_ATTRS_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_SIGN_ALG_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_SIGNATURE_INCORRECT_DATA: number;
        ERR_LDS_ASN_SIGNER_INFO_UNSIGNED_ATTRS_INCORRECT_DATA: number;
        ERR_LDS_ICAO_LDS_OBJECT_UNSUPPORTED_DIGEST_ALGORITHM: number;
        ERR_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_EMPTY: number;
        ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_DIGEST_ALGORITHM: number;
        ERR_LDS_ICAO_SIGNER_INFO_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
        ERR_LDS_ICAO_SIGNER_INFO_MESSAGE_DIGEST_ERROR: number;
        ERR_LDS_ICAO_SIGNER_INFO_SIGNED_ATTRS_MISSED: number;
        ERR_LDS_AUTH_SIGNER_INFO_CANT_FIND_CERTIFICATE: number;
        ERR_LDS_AUTH_ERROR: number;
        ERR_LDS_AUTH_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
        ERR_LDS_AUTH_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: number;
        ERR_LDS_AUTH_MESSED_ALGORITHMS: number;
        ERR_LDS_AUTH_PUBLIC_KEY_DATA_INVALID: number;
        ERR_LDS_AUTH_ALGORITHM_PARAMETERS_DATA_INVALID: number;
        ERR_LDS_AUTH_SIGNATURE_DATA_INVALID: number;
        ERR_LDS_AUTH_UNSUPPORTED_DIGEST_ALGORITHM: number;
        ERR_LDS_AUTH_SIGNATURE_DATA_INCORRECT: number;
        ERR_LDS_AUTH_ALGORITHM_PARAMETERS_NOT_DEFINED: number;
        ERR_LDS_AUTH_SIGNATURE_CHECK_FAILED: number;
        ERR_LDS_DG_WRONG_TAH: number;
        ERR_LDS_DG_CONTENTS_UNEXPECTED_DATA: number;
        ERR_LDS_BAP_SYMMETRIC_CYPHER_CANT_INITIALIZE: number;
        ERR_LDS_PACE_INFO_NOT_AVAILABLE: number;
        ERR_LDS_PACE_SYMMETRIC_CYPHER_CANT_INITIALIZE: number;
        ERR_LDS_PACE_KEY_AGREEMENT_CANT_INITIALIZE: number;
        ERR_LDS_PACE_EPHEMERAL_KEYS_CANT_CREATE: number;
        ERR_LDS_PACE_MAPPING_CANT_DECODE_NONCE: number;
        ERR_LDS_PACE_SHARED_SECRET_CANT_CREATE: number;
        ERR_LDS_PACE_DOMAIN_PARAMS_UNSUPPORTED_FORMAT: number;
        ERR_LDS_PACE_EPHEMERAL_KEYS_INCORRECT: number;
        ERR_LDS_PACE_MAPPING_EPHEMERAL_KEYS_INCORRECT: number;
        ERR_LDS_PACE_MAPPING_CANT_PERFORM: number;
        ERR_LDS_PACE_NON_MATCHING_AUTH_TOKENS: number;
        ERR_LDS_PACE_CAM_DATA_INCORRECT: number;
        ERR_LDS_PACE_CAM_DATA_CANT_VERIFY: number;
        ERR_LDS_PACE_CAM_DATA_NON_MATCHING: number;
        ERR_LDS_PACE_IM_SCHEME_INCORRECT: number;
        ERR_LDS_PACE_IM_RANDOM_MAPPING_FAILED: number;
        ERR_LDS_CA_CANT_FIND_PUBLIC_KEY: number;
        ERR_LDS_CA_CANT_FIND_INFO: number;
        ERR_LDS_CA_INCORRECT_VERSION: number;
        ERR_LDS_CA_CANT_FIND_DOMAIN_PARAMETERS: number;
        ERR_LDS_CA_KEY_AGREEMENT_CANT_INITIALIZE: number;
        ERR_LDS_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
        ERR_LDS_CA_EPHEMERAL_KEYS_CANT_CREATE: number;
        ERR_LDS_CA_SHARED_SECRET_CANT_CREATE: number;
        ERR_LDS_CA_NON_MATCHING_AUTH_TOKENS: number;
        ERR_LDS_TA_INCORRECT_VERSION: number;
        ERR_LDS_TA_CANT_BUILD_CERTIFICATE_CHAIN: number;
        ERR_LDS_TA_CANT_FIND_IS_PRIVATE_KEY: number;
        ERR_LDS_TA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
        ERR_LDS_TA_SIGNATURE_BUILDING_ERROR: number;
        ERR_LDS_TA_INVALID_KEY_ALGORITHM_PARAMETERS: number;
        ERR_LDS_AA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
        ERR_LDS_AA_PUBLIC_KEY_INCORRECT_DATA: number;
        ERR_LDS_AA_PUBLIC_KEY_INCORRECT_PARAMETERS: number;
        ERR_LDS_AA_PUBLIC_KEY_UNDEFINED_PARAMETERS: number;
        ERR_LDS_AA_SIGNATURE_INCORRECT_DATA: number;
        ERR_LDS_AA_UNSUPPORTED_RECOVERY_SCHEME: number;
        ERR_LDS_AA_INCORRECT_TRAILER: number;
        ERR_LDS_AA_UNSUPPORTED_DIGEST_ALGORITHM: number;
        ERR_LDS_RI_SECTOR_KEY_CANT_FIND: number;
        ERR_LDS_RI_SECTOR_KEY_INCORRECT_DATA: number;
        ERR_LDS_RI_SECTOR_KEY_INCOMPLETE_DATA: number;
        ERR_LDS_CV_CERTIFICATE_MISSING_MANDATORY_DATA_PK: number;
        ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_UNSUPPORTED: number;
        ERR_LDS_CV_CERTIFICATE_CHAT_UNSUPPORTED_TERMINAL_TYPE: number;
        ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_UNSUPPORTED: number;
        ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INVALID_PARAMS: number;
        ERR_LDS_CV_CERTIFICATE_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_CPI_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_CAR_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_PUBLIC_KEY_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_CHR_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_CHAT_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_VALID_FROM_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_VALID_TO_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_EXTENSIONS_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_DATA: number;
        ERR_LDS_CV_CERTIFICATE_PRIVATE_KEY_MISSING: number;
        ERR_LDS_VDS_UNSUPPORTED_VERSION: number;
        ERR_LDS_VDS_ISSUING_COUNTRY_SIZE: number;
        ERR_LDS_VDS_ISSUING_COUNTRY_INCORRECT_DATA: number;
        ERR_LDS_VDS_SIGNER_CERTIFICATE_SIZE: number;
        ERR_LDS_VDS_SIGNER_CERTIFICATE_DATA: number;
        ERR_LDS_VDS_SIGNATURE_INCORRECT_DATA: number;
        ERR_LDS_VDS_NC_INCORRECT_DATA: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_DATA: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_HEADER: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_TYPE: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_VERSION: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_ISSUING_COUNTRY: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_MESSAGE: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIGNATURE: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_ALGORITHM: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_CERTIFICATE: number;
        ERR_LDS_VDS_NC_MISSING_OR_INCORRECT_SIG_VALUE: number;
    };
    eRFID_CertificateType: {
        CT_UNDEFINED: number;
        CT_CSCA: number;
        CT_CSCA_LINK: number;
        CT_DS: number;
        CT_MLS: number;
        CT_DEV_LS: number;
        CT_DEF_LS: number;
        CT_BLS: number;
        CT_LDS2: number;
        CT_BCS: number;
        CT_BCSNC: number;
    };
    RGLMeasureSystem: {
        METRIC: number;
        IMPERIAL: number;
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
        RPRM_RESULT_TYPE_INTERNAL_RFID_SESSION: number;
        RPRM_RESULT_TYPE_INTERNAL_ENCRYPTED_RCL: number;
        RPRM_RESULT_TYPE_INTERNAL_LICENSE: number;
        RPRM_RESULT_TYPE_TEXT: number;
        RPRM_RESULT_TYPE_IMAGES: number;
        RPRM_RESULT_TYPE_HOLO_PARAMS: number;
        RPRM_RESULT_TYPE_DOCUMENT_POSITION: number;
        RPRM_RESULT_TYPE_CUSTOM: number;
        RFID_RESULT_TYPE_RFID_RAW_DATA: number;
        RFID_RESULT_TYPE_RFID_TEXT_DATA: number;
        RFID_RESULT_TYPE_RFID_IMAGE_DATA: number;
        RFID_RESULT_TYPE_RFID_BINARY_DATA: number;
        RFID_RESULT_TYPE_RFID_ORIGINAL_GRAPHICS: number;
        RPRM_RESULT_TYPE_BARCODE_POSITION: number;
        RPRM_RESULT_TYPE_MRZ_POSITION: number;
        RPRM_RESULT_TYPE_LIVE_PORTRAIT: number;
        RPRM_RESULT_TYPE_STATUS: number;
        RPRM_RESULT_TYPE_PORTRAIT_COMPARISON: number;
        RPRM_RESULT_TYPE_EXT_PORTRAIT: number;
        RFID_RESULT_TYPE_RFID_DTC_VC: number;
    };
    FrameShapeType: {
        LINE: number;
        CORNER: number;
    };
    eRFID_BaudRate: {
        rfbr_106: number;
        rfbr_212: number;
        rfbr_424: number;
        rfbr_848: number;
    };
    LineCap: {
        BUTT: number;
        ROUND: number;
        SQUARE: number;
    };
    eRPRM_FieldVerificationResult: {
        RCF_DISABLED: number;
        RCF_VERIFIED: number;
        RCF_NOT_VERIFIED: number;
        RCF_COMPARE_TRUE: number;
        RCF_COMPARE_FALSE: number;
    };
    DocReaderAction: {
        COMPLETE: number;
        PROCESS: number;
        MORE_PAGES_AVAILABLE: number;
        CANCEL: number;
        ERROR: number;
        PROCESS_WHITE_FLASHLIGHT: number;
        TIMEOUT: number;
        PROCESSING_ON_SERVICE: number;
        NOTIFICATION: number;
        PROCESS_WHITE_UV_IMAGES: number;
        PROCESS_IR_FRAME: number;
    };
    eProcessGLCommands: {
        ePC_ProcMgr_SetLicense: number;
        ePC_ProcMgr_Process: number;
        ePC_ProcMgr_ProcessAsync: number;
        ePC_ProcMgr_Init: number;
        ePC_ProcMgr_ProcessImage: number;
        ePC_ProcMgr_StartNewDocument: number;
        ePC_ProcMgr_StartNewPage: number;
        ePC_ProcMgr_AddDataToPackage: number;
        ePC_ProcMgr_FinalizePackage: number;
        ePC_ProcMgr_CreateBackendTransaction: number;
        ePC_ProcMgr_Unload: number;
        ePC_ProcMgr_CheckDatabase: number;
        ePC_ProcMgr_ComparePortraits: number;
        ePC_RFID_SetTCCParams: number;
    };
    eRFIDReadingBufferSize: {
        EXTENDED_LENGTH: number;
        SINGLE_LENGTH: number;
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
    eRFID_AuthenticationProcedureType: {
        aptUndefined: number;
        aptStandard: number;
        aptAdvanced: number;
        aptGeneral: number;
    };
    DocumentReaderErrorCodes: {
        INITIALIZATION_CORE_ABSENT: number;
        INITIALIZATION_FAILED: number;
        INCORRECT_SCENARIO: number;
        NO_RESULT: number;
        REMOVE_DATABASE: number;
        FETCHING_DATABASE: number;
        DB_ID_NOT_FOUND: number;
        DB_DESCRIPTION_NOT_FOUND: number;
        SAVE_DB: number;
        DOWNLOAD_DB_INCORRECT_CHECKSUM: number;
        DB_DOWNLOAD: number;
        LICENSE_ABSENT_OR_CORRUPTED: number;
        LICENSE_INVALID_DATE: number;
        LICENSE_INVALID_VERSION: number;
        LICENSE_INVALID_DEVICE_ID: number;
        LICENSE_INVALID_SYSTEM_OR_APP_ID: number;
        LICENSE_NO_CAPABILITIES: number;
        LICENSE_NO_AUTHENTICITY: number;
        RECORD_PROCESS_INVALID_OUTPUT_URL: number;
        LICENSE_ONLINE_ERROR: number;
        LICENSE_NO_DATABASE: number;
        LICENSE_DATABASE_INCORRECT: number;
        INVALID_TCC_PARAMS: number;
        RFID_IN_PROGRESS: number;
        START_BACKEND_PROCESSING: number;
        ADD_DATA_TO_PACKAGE: number;
        FINALIZE_FAILED: number;
        CAMERA_NO_PERMISSION: number;
        CAMERA_NOT_AVAILABLE: number;
        CANNOT_USE_CAMERA_IN_SCENARIO: number;
        NATIVE_JAVA_EXCEPTION: number;
        BACKEND_ONLINE_PROCESSING: number;
        WRONG_INPUT: number;
        STATE_EXCEPTION: number;
        BLE_EXCEPTION: number;
        FEATURE_BLUETOOTH_LE_NOT_SUPPORTED: number;
        APP_BACKGROUND: number;
        ONLINE_PROCESSING_WRONG_INPUT: number;
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
        SCENARIO_BARCODE_AND_LOCATE: string;
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
        SCENARIO_DTC: string;
        SCENARIO_RFID: string;
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
    eRFID_NotificationCodes: {
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
    };
    CameraPosition: {
        UNSPECIFIED: number;
        BACK: number;
        FRONT: number;
    };
    eRFID_Password_Type: {
        PPT_UNKNOWN: number;
        PPT_MRZ: number;
        PPT_CAN: number;
        PPT_PIN: number;
        PPT_PUK: number;
        PPT_PIN_ESIGN: number;
        PPT_SAI: number;
        PPT_MRZ_HASH: number;
    };
    ViewContentMode: {
        UNKNOWN: number;
        SCALE_TO_FILL: number;
        SCALE_ASPECT_FIT: number;
        SCALE_ASPECT_FILL: number;
        REDRAW: number;
        CENTER: number;
        TOP: number;
        BOTTOM: number;
        LEFT: number;
        RIGHT: number;
        TOP_LEFT: number;
        TOP_RIGHT: number;
        BOTTOM_LEFT: number;
        BOTTOM_RIGHT: number;
    };
    BarcodeResult: {
        NO_ERR: number;
        INVALID_RESULT: number;
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
    eRFID_Application_Type: {
        ePASSPORT: number;
        eID: number;
        eSIGN: number;
        eDL: number;
        LDS2_TRAVEL_RECORDS: number;
        LDS2_VISA_RECORDS: number;
        LDS2_ADD_BIOMETRICS: number;
        eDTC_PC: number;
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
        CONTACT_CHIP_TYPE_MISMATCH: number;
        FIBERS_NOT_FOUND: number;
        TOO_MANY_OBJECTS: number;
        SPECKS_IN_UV: number;
        TOO_LOW_RESOLUTION: number;
        INVISIBLE_ELEMENT_PRESENT: number;
        VISIBLE_ELEMENT_ABSENT: number;
        ELEMENT_SHOULD_BE_COLORED: number;
        ELEMENT_SHOULD_BE_GRAYSCALE: number;
        PHOTO_WHITE_IR_DONT_MATCH: number;
        UV_DULL_PAPER_MRZ: number;
        FALSE_LUMINISCENCE_IN_MRZ: number;
        UV_DULL_PAPER_PHOTO: number;
        UV_DULL_PAPER_BLANK: number;
        UV_DULL_PAPER_ERROR: number;
        FALSE_LUMINISCENCE_IN_BLANK: number;
        BAD_AREA_IN_AXIAL: number;
        FALSE_IPI_PARAMETERS: number;
        ENCRYPTED_IPI_NOT_FOUND: number;
        ENCRYPTED_IPI_DATA_DONT_MATCH: number;
        FIELD_POS_CORRECTOR_HIGHLIGHT_IR: number;
        FIELD_POS_CORRECTOR_GLARES_IN_PHOTO_AREA: number;
        FIELD_POS_CORRECTOR_PHOTO_REPLACED: number;
        FIELD_POS_CORRECTOR_LANDMARKS_CHECK_ERROR: number;
        FIELD_POS_CORRECTOR_FACE_PRESENCE_CHECK_ERROR: number;
        FIELD_POS_CORRECTOR_FACE_ABSENCE_CHECK_ERROR: number;
        CHD_FIELD_POS_CORRECTOR_INCORRECT_HEAD_POSITION: number;
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
        HOLOGRAM_FRAMES_IS_ABSENT: number;
        HOLOGRAM_HOLO_FIELD_IS_ABSENT: number;
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
        GLARES_IN_BARCODE_AREA: number;
        CHD_NO_CERTIFICATE_FOR_DIGITAL_SIGNATURE_CHECK: number;
        PORTRAIT_COMPARISON_PORTRAITS_DIFFER: number;
        PORTRAIT_COMPARISON_NO_SERVICE_REPLY: number;
        PORTRAIT_COMPARISON_SERVICE_ERROR: number;
        PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES: number;
        PORTRAIT_COMPARISON_NO_LIVE_PHOTO: number;
        PORTRAIT_COMPARISON_NO_SERVICE_LICENSE: number;
        PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED: number;
        MOBILE_IMAGES_UNSUITABLE_LIGHT_CONDITIONS: number;
        MOBILE_IMAGES_WHITE_UV_NO_DIFFERENCE: number;
        FINGERPRINTS_COMPARISON_MISMATCH: number;
        HOLO_PHOTO_FACE_NOT_DETECTED: number;
        HOLO_PHOTO_FACE_COMPARISON_FAILED: number;
        HOLO_PHOTO_FACE_GLARE_IN_CENTER_ABSENT: number;
        HOLO_ELEMENT_SHAPE_ERROR: number;
        ALGORITHM_STEPS_ERROR: number;
        HOLO_AREAS_NOT_LOADED: number;
        FINISHED_BY_TIMEOUT: number;
        HOLO_PHOTO_DOCUMENT_OUTSIDE_FRAME: number;
        LIVENESS_DEPTH_CHECK_FAILED: number;
        MRZ_QUALITY_WRONG_SYMBOL_POSITION: number;
        MRZ_QUALITY_WRONG_BACKGROUND: number;
        MRZ_QUALITY_WRONG_MRZ_WIDTH: number;
        MRZ_QUALITY_WRONG_MRZ_HEIGHT: number;
        MRZ_QUALITY_WRONG_LINE_POSITION: number;
        MRZ_QUALITY_WRONG_FONT_TYPE: number;
        OCR_QUALITY_TEXT_POSITION: number;
        OCR_QUALITY_INVALID_FONT: number;
        OCR_QUALITY_INVALID_BACKGROUND: number;
        LAS_INK_INVALID_LINES_FREQUENCY: number;
        DOC_LIVENESS_DOCUMENT_NOT_LIVE: number;
        CHD_DOC_LIVENESS_BLACK_AND_WHITE_COPY_DETECTED: number;
        DOC_LIVENESS_ELECTRONIC_DEVICE_DETECTED: number;
        DOC_LIVENESS_INVALID_BARCODE_BACKGROUND: number;
        ICAO_IDB_BASE_32_ERROR: number;
        ICAO_IDB_ZIPPED_ERROR: number;
        ICAO_IDB_MESSAGE_ZONE_EMPTY: number;
        ICAO_IDB_SIGNATURE_MUST_BE_PRESENT: number;
        ICAO_IDB_SIGNATURE_MUST_NOT_BE_PRESENT: number;
        ICAO_IDB_CERTIFICATE_MUST_NOT_BE_PRESENT: number;
        INCORRECT_OBJECT_COLOR: number;
    };
    RFIDDelegate: {
        NULL: number;
        NO_PA: number;
        FULL: number;
    };
    TextProcessing: {
        ocNoChange: number;
        ocUppercase: number;
        ocLowercase: number;
        ocCapital: number;
    };
    LogLevel: {
        FatalError: string;
        Error: string;
        Warning: string;
        Info: string;
        Debug: string;
    };
    AnimationImage: {
        UNKNOWN: number;
        PASSPORT_SINGLE_PAGE: number;
        PASSPORT_TWO_PAGES: number;
        ID_FRONT: number;
        ID_FRONT_MRZ: number;
        ID_BACK: number;
        ID_BACK_MRZ: number;
        ID_BACK_BARCODE: number;
        ID_BACK_BARCODE_MRZ: number;
        BANK_CARD_FRONT: number;
        BANK_CARD_BACK: number;
    };
    ProcessingFinishedStatus: {
        NOT_READY: number;
        READY: number;
        TIMEOUT: number;
    };
    DocFormat: {
        ID1: number;
        ID2: number;
        ID3: number;
        NON: number;
        A4: number;
        ID3_x2: number;
        ID2_TURKEY: number;
        ID1_90: number;
        ID1_180: number;
        ID1_270: number;
        ID2_180: number;
        ID3_180: number;
        CUSTOM: number;
        PHOTO: number;
        FLEXIBLE: number;
        UNKNOWN: number;
    };
    eLDS_ParsingNotificationCodes: {
        NTF_LDS_ASN_CERTIFICATE_INCORRECT_VERSION: number;
        NTF_LDS_ASN_CERTIFICATE_NON_MATCHING_SIGNATURE_ALGORITHM: number;
        NTF_LDS_ASN_CERTIFICATE_INCORRECT_TIME_CODING: number;
        NTF_LDS_ASN_CERTIFICATE_INCORRECT_USE_OF_GENERALIZED_TIME: number;
        NTF_LDS_ASN_CERTIFICATE_EMPTY_ISSUER: number;
        NTF_LDS_ASN_CERTIFICATE_EMPTY_SUBJECT: number;
        NTF_LDS_ASN_CERTIFICATE_UNSUPPORTED_CRITICAL_EXTENSION: number;
        NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_CSCA_ROLE: number;
        NTF_LDS_ASN_CERTIFICATE_FORCED_DEFAULT_DS_ROLE: number;
        NTF_LDS_ASN_CERTIFICATE_INCORRECT_ISSUER_SUBJECT_DS: number;
        NTF_LDS_ASN_CERTIFICATE_DUPLICATING_EXTENSIONS: number;
        NTF_LDS_ICAO_CERTIFICATE_VERSION_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_COMMON_NAME_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_USING_NON_COMPLIANT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_SIGNATURE_ALGORITHM: number;
        NTF_LDS_ICAO_CERTIFICATE_UNSUPPORTED_PUBLIC_KEY_ALGORITHM: number;
        NTF_LDS_ICAO_CERTIFICATE_MISSED_EXTENSIONS: number;
        NTF_LDS_ICAO_CERTIFICATE_VALIDITY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_USING_NON_COMPLIANT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_NOT_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_KEY_USAGE_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE1: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_USAGE2: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_NOT_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_BASIC_C_PATH_LEN_C_INCORRECT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_NOT_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_USAGE: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_EXT_KEY_USAGE_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_AUTH_KEY_ID_KEY_ID_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_KEY_ID_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_PRIVATE_KEY_UP_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_INCORRECT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_SUBJECT_ALT_NAME_DN_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_INCORRECT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_ISSUER_ALT_NAME_DN_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_VERSION: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_DOC_TYPES_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CERT_POLICIES_POLICY_ID_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_EMPTY: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CRL_DIST_POINT_POINT_MISSED: number;
        NTF_LDS_ICAO_CERTIFICATE_SN_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_SN_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_SN_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_ATTRIBUTE_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_ATTRIBUTE_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_SUBJECT_COUNTRY_NON_MATCHING: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_CSCA_ALT_NAMES_NON_MATCHING: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_INCORRECT_DATA: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_NAME_CHANGE_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_DOC_TYPE_LIST_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_EXT_OPTIONAL_CRITICAL: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_NON_COMPLIANT: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COMMON_NAME_NON_COMPLIANT: number;
        NTF_LDS_ICAO_COM_LDS_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_COM_LDS_VERSION_MISSING: number;
        NTF_LDS_ICAO_COM_UNICODE_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_COM_UNICODE_VERSION_MISSING: number;
        NTF_LDS_ICAO_COM_DGPM_INCORRECT: number;
        NTF_LDS_ICAO_COM_DGPM_MISSING: number;
        NTF_LDS_ICAO_COM_DGPM_UNEXPECTED: number;
        NTF_LDS_ICAO_APPLICATION_LDS_VERSION_UNSUPPORTED: number;
        NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_UNSUPPORTED: number;
        NTF_LDS_ICAO_APPLICATION_LDS_VERSION_INCONSISTENT: number;
        NTF_LDS_ICAO_APPLICATION_UNICODE_VERSION_INCONSISTENT: number;
        NTF_LDS_ASN_SIGNED_DATA_OID_INCORRECT: number;
        NTF_LDS_ASN_SIGNED_DATA_VERSION_INCORRECT: number;
        NTF_LDS_ASN_SIGNED_DATA_CONTENT_OID_INCORRECT: number;
        NTF_LDS_ICAO_SIGNED_DATA_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_EMPTY: number;
        NTF_LDS_ICAO_SIGNED_DATA_DIGEST_ALGORITHMS_UNSUPPORTED: number;
        NTF_LDS_ICAO_SIGNED_DATA_SIGNER_INFOS_MULTIPLE_ENTRIES: number;
        NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_MISSED: number;
        NTF_LDS_ICAO_SIGNED_DATA_CERTIFICATES_EMPTY: number;
        NTF_LDS_ICAO_SIGNED_DATA_CRLS_INCORRECT_USAGE: number;
        NTF_LDS_ICAO_LDS_OBJECT_INCORRECT_CONTENT_OID: number;
        NTF_LDS_ICAO_LDS_OBJECT_DG_NUMBER_INCORRECT: number;
        NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_MISSING: number;
        NTF_LDS_ICAO_LDS_OBJECT_DG_HASH_EXTRA: number;
        NTF_LDS_ICAO_LDS_OBJECT_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_MASTER_LIST_VERSION_INCORRECT: number;
        NTF_LDS_ICAO_DEVIATION_LIST_VERSION_INCORRECT: number;
        NTF_LDS_BSI_DEFECT_LIST_VERSION_INCORRECT: number;
        NTF_LDS_BSI_BLACK_LIST_VERSION_INCORRECT: number;
        NTF_LDS_ASN_SIGNER_INFO_VERSION_INCORRECT: number;
        NTF_LDS_ASN_SIGNER_INFO_SID_INCORRECT_CHOICE: number;
        NTF_LDS_ASN_SIGNER_INFO_SID_DIGEST_ALGORITHM_NOT_LISTED: number;
        NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_MISSING: number;
        NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_DATA: number;
        NTF_LDS_ASN_SIGNER_INFO_MESSAGE_DIGEST_ATTR_Value: number;
        NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_MISSING: number;
        NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_DATA: number;
        NTF_LDS_ASN_SIGNER_INFO_CONTENT_TYPE_ATTR_VALUE: number;
        NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_MISSING: number;
        NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_DATA: number;
        NTF_LDS_ASN_SIGNER_INFO_SIGNING_TIME_ATTR_VALUE: number;
        NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_MISSING: number;
        NTF_LDS_ASN_SIGNER_INFO_LIST_CONTENT_DESCRIPTION_ATTR_DATA: number;
        NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_VALIDITY: number;
        NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: number;
        NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: number;
        NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_REVOKED: number;
        NTF_LDS_AUTH_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: number;
        NTF_LDS_UNSUPPORTED_IMAGE_FORMAT: number;
        NTF_LDS_MRZ_DOCUMENT_TYPE_UNKNOWN: number;
        NTF_LDS_MRZ_ISSUING_STATE_SYNTAX_ERROR: number;
        NTF_LDS_MRZ_NAME_IS_VOID: number;
        NTF_LDS_MRZ_NUMBER_INCORRECT_CHECKSUM: number;
        NTF_LDS_MRZ_NATIONALITY_SYNTAX_ERROR: number;
        NTF_LDS_MRZ_DOB_SYNTAX_ERROR: number;
        NTF_LDS_MRZ_DOB_ERROR: number;
        NTF_LDS_MRZ_DOB_INCORRECT_CHECKSUM: number;
        NTF_LDS_MRZ_SEX_INCORRECT: number;
        NTF_LDS_MRZ_DOE_SYNTAX_ERROR: number;
        NTF_LDS_MRZ_DOE_ERROR: number;
        NTF_LDS_MRZ_DOE_INCORRECT_CHECKSUM: number;
        NTF_LDS_MRZ_OPTIONAL_DATA_INCORRECT_CHECKSUM: number;
        NTF_LDS_MRZ_INCORRECT_CHECKSUM: number;
        NTF_LDS_MRZ_INCORRECT: number;
        NTF_LDS_BIOMETRICS_FORMAT_OWNER_MISSING: number;
        NTF_LDS_BIOMETRICS_FORMAT_OWNER_INCORRECT: number;
        NTF_LDS_BIOMETRICS_FORMAT_TYPE_MISSING: number;
        NTF_LDS_BIOMETRICS_FORMAT_TYPE_INCORRECT: number;
        NTF_LDS_BIOMETRICS_TYPE_INCORRECT: number;
        NTF_LDS_BIOMETRICS_SUB_TYPE_MISSING: number;
        NTF_LDS_BIOMETRICS_SUB_TYPE_INCORRECT: number;
        NTF_LDS_BIOMETRICS_BDB_IMAGE_MISSING: number;
        NTF_LDS_BIOMETRICS_BDB_FORMAT_ID_INCORRECT: number;
        NTF_LDS_BIOMETRICS_BDB_VERSION_INCORRECT: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_LENGTH_INCORRECT: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_GENDER: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_EYE_COLOR: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_HAIR_COLOR: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_YAW: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_PITCH: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_ROLL: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_YAW: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_PITCH: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_POSE_ANGLE_U_ROLL: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_FACE_IMAGE_TYPE: number;
        NTF_LDS_BIOMETRICS_BDB_DATA_IMAGE_DATA_TYPE: number;
        NTF_LDS_SI_PACE_INFO_UNSUPPORTED_STD_PARAMETERS: number;
        NTF_LDS_SI_PACE_INFO_DEPRECATED_VERSION: number;
        NTF_LDS_SI_PACE_DOMAIN_PARAMS_USING_STD_REF: number;
        NTF_LDS_SI_PACE_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
        NTF_LDS_SI_CA_INFO_INCORRECT_VERSION: number;
        NTF_LDS_SI_CA_PUBLIC_KEY_UNSUPPORTED_ALGORITHM: number;
        NTF_LDS_SI_CA_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
        NTF_LDS_SI_TA_INFO_INCORRECT_VERSION: number;
        NTF_LDS_SI_TA_INFO_FILE_ID_FOR_VERSION2: number;
        NTF_LDS_SI_EID_SECURITY_UNSUPPORTED_DIGEST_ALGORITHM: number;
        NTF_LDS_SI_RI_INFO_INCORRECT_VERSION: number;
        NTF_LDS_SI_RI_DOMAIN_PARAMS_UNSUPPORTED_ALGORITHM: number;
        NTF_LDS_SI_AA_INFO_INCORRECT_VERSION: number;
        NTF_LDS_SI_AA_INFO_UNSUPPORTED_ALGORITHM: number;
        NTF_LDS_SI_AA_INFO_INCONSISTENT_ALGORITHM_REFERENCE: number;
        NTF_LDS_SI_STORAGE_PACE_INFO_NOT_AVAILABLE: number;
        NTF_LDS_SI_STORAGE_PACE_INFO_NO_STD_PARAMETERS: number;
        NTF_LDS_SI_STORAGE_PACE_INFO_NO_MATCHING_DOMAIN_PARAMS: number;
        NTF_LDS_SI_STORAGE_CA_INFO_NOT_AVAILABLE: number;
        NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NO_REQUIRED_OPTION: number;
        NTF_LDS_SI_STORAGE_CA_DOMAIN_PARAMS_NOT_AVAILABLE: number;
        NTF_LDS_SI_STORAGE_CA_ANONYMOUS_INFOS: number;
        NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_DOMAIN_PARAMS: number;
        NTF_LDS_SI_STORAGE_CA_INFO_NO_MATCHING_PUBLIC_KEY: number;
        NTF_LDS_SI_STORAGE_CA_INCORRECT_INFOS_QUANTITY: number;
        NTF_LDS_SI_STORAGE_TA_INFO_NOT_AVAILABLE: number;
        NTF_LDS_SI_STORAGE_CARD_INFO_LOCATOR_MULTIPLE_ENTRIES: number;
        NTF_LDS_SI_STORAGE_EID_SECURITY_INFO_MULTIPLE_ENTRIES: number;
        NTF_LDS_SI_STORAGE_PRIVILEGED_TI_MULTIPLE_ENTRIES: number;
        NTF_LDS_SI_STORAGE_PRIVILEGED_TI_INCORRECT_USAGE: number;
        NTF_LDS_SI_STORAGE_RI_DOMAIN_PARAMS_MULTIPLE_ENTRIES: number;
        NTF_LDS_SI_STORAGE_PACE_INFOS_NON_CONSISTANT: number;
        NTF_LDS_CV_CERTIFICATE_PROFILE_INCORRECT_VERSION: number;
        NTF_LDS_CV_CERTIFICATE_VALIDITY: number;
        NTF_LDS_CV_CERTIFICATE_NON_CV_CA_DOMAIN_PARAMETERS: number;
        NTF_LDS_CV_CERTIFICATE_PRIVATE_KEY_INCORRECT_VERSION: number;
        NTF_LDS_TA_PACE_STATIC_BINDING_USED: number;
        NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_VALIDITY: number;
        NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_ROOT_IS_NOT_TRUSTED: number;
        NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_CANT_FIND_CSCA: number;
        NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_REVOKED: number;
        NTF_LDS_AUTH_ML_SIGNER_INFO_CERTIFICATE_SIGNATURE_INVALID: number;
        NTF_LDS_ICAO_CERTIFICATE_CHAIN_COUNTRY_NON_MATCHING: number;
        NTF_LDS_ICAO_CERTIFICATE_VISUAL_MRZ_COUNTRY_NON_MATCHING: number;
        NTF_LDS_MRZ_COUNTRYCODE_VISUALMRZ_NON_MATCHING: number;
        NTF_LDS_ICAO_CERTIFICATE_MRZ_COUNTRY_NON_MATCHING: number;
        NTF_LDS_ICAO_CERTIFICATE_ISSUER_COUNTRY_NON_UPPER_CASE: number;
        NTF_LDS_ICAO_CERTIFICATE_SUBJECT_COUNTRY_NON_UPPER_CASE: number;
    };
    eImageQualityCheckType: {
        IQC_IMAGE_GLARES: number;
        IQC_IMAGE_FOCUS: number;
        IQC_IMAGE_RESOLUTION: number;
        IQC_IMAGE_COLORNESS: number;
        IQC_PERSPECTIVE: number;
        IQC_BOUNDS: number;
        IQC_SCREEN_CAPTURE: number;
        IQC_PORTRAIT: number;
        IQC_HANDWRITTEN: number;
        IQC_BRIGHTNESS: number;
        IQC_OCCLUSION: number;
    };
    MRZFormat: {
        FORMAT_1X30: string;
        FORMAT_3X30: string;
        FORMAT_2X36: string;
        FORMAT_2X44: string;
        FORMAT_1X6: string;
        FORMAT_2X30: string;
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
        JABCODE: number;
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
        SECURITY_FEATURE_TYPE_OCR: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_VISUAL: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_RFID: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXTVS_LIVE: number;
        SECURITY_FEATURE_TYPE_LIVENESS_DEPTH: number;
        SECURITY_FEATURE_TYPE_MICROTEXT: number;
        SECURITY_FEATURE_TYPE_FLUORESCENT_OBJECT: number;
        SECURITY_FEATURE_TYPE_LANDMARKS_CHECK: number;
        SECURITY_FEATURE_TYPE_FACE_PRESENCE: number;
        SECURITY_FEATURE_TYPE_FACE_ABSENCE: number;
        SECURITY_FEATURE_TYPE_LIVENESS_SCREEN_CAPTURE: number;
        SECURITY_FEATURE_TYPE_LIVENESS_ELECTRONIC_DEVICE: number;
        SECURITY_FEATURE_TYPE_LIVENESS_OVI: number;
        SECURITY_FEATURE_TYPE_BARCODE_SIZE_CHECK: number;
        SECURITY_FEATURE_TYPE_LAS_INK: number;
        SECURITY_FEATURE_TYPE_LIVENESS_MLI: number;
        SECURITY_FEATURE_TYPE_LIVENESS_BARCODE_BACKGROUND: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_VS_BARCODE: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_RFID_VS_BARCODE: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_EXT_VS_BARCODE: number;
        SECURITY_FEATURE_TYPE_PORTRAIT_COMPARISON_BARCODE_VS_CAMERA: number;
        SECURITY_FEATURE_TYPE_CHECK_DIGITAL_SIGNATURE: number;
        SECURITY_FEATURE_TYPE_CONTACT_CHIP_CLASSIFICATION: number;
        SECURITY_FEATURE_TYPE_HEAD_POSITION_CHECK: number;
        SECURITY_FEATURE_TYPE_LIVENESS_BLACK_AND_WHITE_COPY_CHECK: number;
        SECURITY_FEATURE_TYPE_LIVENESS_DYNAPRINT_CHECK: number;
        SECURITY_FEATURE_TYPE_LIVENESS_GEOMETRY_CHECK: number;
    };
    OnlineMode: {
        MANUAL: number;
        AUTO: number;
    };
    eRFID_SDK_ProfilerType: {
        SPT_DOC_9303_EDITION_2006: number;
        SPT_DOC_9303_LDS_PKI_MAINTENANCE: number;
    };
    diDocType: {
        dtNotDefined: number;
        dtPassport: number;
        dtIdentityCard: number;
        dtDiplomaticPassport: number;
        dtServicePassport: number;
        dtSeamanIdentityDocument: number;
        dtIdentityCardForResidence: number;
        dtTravelDocument: number;
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
        dtCommercialDrivingLicenseInstructionalPermit: number;
        dtCommercialDrivingLicenseUnder18: number;
        dtCommercialDrivingLicenseUnder21: number;
        dtCommercialInstructionPermit: number;
        dtCommercialNewPermit: number;
        dtConcealedCarryLicense: number;
        dtConcealedFirearmPermit: number;
        dtConditionalDrivingLicense: number;
        dtDepartmentOfVeteransAffairsIdentityCard: number;
        dtDiplomaticDrivingLicense: number;
        dtDrivingLicense: number;
        dtDrivingLicenseInstructionalPermit: number;
        dtDrivingLicenseInstructionalPermitUnder18: number;
        dtDrivingLicenseInstructionalPermitUnder21: number;
        dtDrivingLicenseLearnersPermit: number;
        dtDrivingLicenseLearnersPermitUnder18: number;
        dtDrivingLicenseLearnersPermitUnder21: number;
        dtDrivingLicenseNovice: number;
        dtDrivingLicenseNoviceUnder18: number;
        dtDrivingLicenseNoviceUnder21: number;
        dtDrivingLicenseRegisteredOffender: number;
        dtDrivingLicenseRestrictedUnder18: number;
        dtDrivingLicenseRestrictedUnder21: number;
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
        dtGraduatedInstructionPermitUnder18: number;
        dtGraduatedInstructionPermitUnder21: number;
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
        dtInstructionPermit: number;
        dtInstructionPermitUnder18: number;
        dtInstructionPermitUnder21: number;
        dtInterimDrivingLicense: number;
        dtInterimIdentityCard: number;
        dtIntermediateDrivingLicense: number;
        dtIntermediateDrivingLicenseUnder18: number;
        dtIntermediateDrivingLicenseUnder21: number;
        dtJuniorDrivingLicense: number;
        dtLearnerInstructionalPermit: number;
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
        dtRestrictedCommercialDrivingLicense: number;
        dtRestrictedDrivingLicense: number;
        dtRestrictedPermit: number;
        dtSeasonalPermit: number;
        dtSeasonalResidentIdentityCard: number;
        dtSeniorCitizenIdentityCard: number;
        dtSexOffender: number;
        dtSocialSecurityCard: number;
        dtTemporaryDrivingLicense: number;
        dtTemporaryDrivingLicenseUnder18: number;
        dtTemporaryDrivingLicenseUnder21: number;
        dtTemporaryIdentityCard: number;
        dtTemporaryInstructionPermitIdentityCard: number;
        dtTemporaryInstructionPermitIdentityCardUnder18: number;
        dtTemporaryInstructionPermitIdentityCardUnder21: number;
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
        dtAlienRegistrationCard: number;
        dtAPEHCard: number;
        dtCouponToDrivingLicense: number;
        dtCrewMemberCertificate: number;
        dtDocumentForReturn: number;
        dtECard: number;
        dtEmploymentCard: number;
        dtHKSARImmigrationForm: number;
        dtImmigrantCard: number;
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
        dtPermissionToTheLocalBorderTraffic: number;
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
        dtTradeLicense: number;
        dtPassportPage: number;
        dtInvoice: number;
        dtPassengerLocatorForm: number;
    };
    ButtonTag: {
        CLOSE: number;
        TORCH: number;
        CAPTURE: number;
        CHANGE_FRAME: number;
        SKIP: number;
        CAMERA_SWITCH: number;
    };
    HoloAnimationType: {
        DocumentHoloAnimationUnknown: number;
        DocumentHoloAnimationTypeHorizontal: number;
        DocumentHoloAnimationTypeVertical: number;
        DocumentHoloAnimationTypeLeftBottomRightTop: number;
        DocumentHoloAnimationTypeRightBottomLeftTop: number;
    };
    eRequestCommand: {
        eReqCmd_RFid_SendData: number;
        eReqCmd_RFid_Notify: number;
        eReqCmd_RFid_GetDataForScenario: number;
        eReqCmd_Torch_GetUVFoto: number;
        eReqCmd_InternetSend: number;
        eReqCmd_GetGuid: number;
        eReqCmd_WltToImage: number;
    };
    CustomizationFont: {
        RFID_PROCESSING_SCREEN_HINT_LABEL: string;
        RFID_PROCESSING_SCREEN_PROGRESS_LABEL: string;
        RFID_PROCESSING_SCREEN_RESULT_LABEL: string;
    };
    ImageFormat: {
        PNG: number;
        JPG: number;
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
        GF_CONTACT_CHIP: number;
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
    };
    RegDeviceConfigType: {
        DEVICE_7310: string;
    };
    CaptureSessionPreset: {
        UNKNOWN: number;
        LOW: number;
        MEDIUM: number;
        HIGH: number;
        PHOTO: number;
        INPUT_PRIORITY: number;
        PRESET_1280x720: number;
        PRESET_1920x1080: number;
        PRESET_3840x2160: number;
        FRAME_960x540: number;
        FRAME_1280x720: number;
        PRESET_640x480: number;
        PRESET_352x288: number;
    };
    CameraMode: {
        AUTO: number;
        CAMERA1: number;
        CAMERA2: number;
    };
    CaptureMode: {
        AUTO: number;
        CAPTURE_VIDEO: number;
        CAPTURE_FRAME: number;
    };
    eCheckResult: {
        CH_CHECK_ERROR: number;
        CH_CHECK_OK: number;
        CH_CHECK_WAS_NOT_DONE: number;
    };
    eRFID_TerminalType: {
        TET_UNDEFINED: number;
        TET_INSPECTION_SYSTEM: number;
        TET_AUTHENTICATION_TERMINAL: number;
        TET_SIGNATURE_TERMINAL: number;
        TET_UNAUTHENTICATED_TERMINAL: number;
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
        DFT_DTC_DG17: number;
        DFT_DTC_DG18: number;
        DFT_DTC_DG22: number;
        DFT_DTC_DG23: number;
        DFT_DTC_DG24: number;
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
        DFT_SAM_DATA: number;
        DFT_SAM_DATA_MAX: number;
        DFT_VDS: number;
        DFT_VDSNC: number;
        DFT_USERDEFINED: number;
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
        FT_DTC_VERSION: number;
        FT_DTC_ID: number;
        FT_DTC_DATE_OF_EXPIRY: number;
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
        FT_DLCLASSCODE_NT_FROM: number;
        FT_DLCLASSCODE_NT_TO: number;
        FT_DLCLASSCODE_NT_NOTES: number;
        FT_DLCLASSCODE_TN_FROM: number;
        FT_DLCLASSCODE_TN_TO: number;
        FT_DLCLASSCODE_TN_NOTES: number;
        FT_DLCLASSCODE_D3_FROM: number;
        FT_DLCLASSCODE_D3_TO: number;
        FT_DLCLASSCODE_D3_NOTES: number;
        FT_ALT_DATE_OF_EXPIRY: number;
        FT_DLCLASSCODE_CD_FROM: number;
        FT_DLCLASSCODE_CD_TO: number;
        FT_DLCLASSCODE_CD_NOTES: number;
        FT_PAYMENT_PERIOD_TO: number;
        FT_PAYMENT_PERIOD_FROM: number;
        FT_ISSUER_IDENTIFICATION_NUMBER: number;
        FT_VACCINATION_CERTIFICATE_IDENTIFIER: number;
        FT_FIRST_NAME: number;
        FT_DATE_OF_ARRIVAL: number;
        FT_SECOND_NAME: number;
        FT_THIRD_NAME: number;
        FT_FOURTH_NAME: number;
        FT_LAST_NAME: number;
        FT_DLCLASSCODE_RM_FROM: number;
        FT_DLCLASSCODE_RM_NOTES: number;
        FT_DLCLASSCODE_RM_TO: number;
        FT_DLCLASSCODE_PW_FROM: number;
        FT_DLCLASSCODE_PW_NOTES: number;
        FT_DLCLASSCODE_PW_TO: number;
        FT_DLCLASSCODE_EB_FROM: number;
        FT_DLCLASSCODE_EB_NOTES: number;
        FT_DLCLASSCODE_EB_TO: number;
        FT_DLCLASSCODE_EC_FROM: number;
        FT_DLCLASSCODE_EC_NOTES: number;
        FT_DLCLASSCODE_EC_TO: number;
        FT_DLCLASSCODE_EC1_FROM: number;
        FT_DLCLASSCODE_EC1_NOTES: number;
        FT_DLCLASSCODE_EC1_TO: number;
        FT_PLACE_OF_BIRTH_CITY: number;
        FT_YEAR_OF_BIRTH: number;
        FT_YEAR_OF_EXPIRY: number;
        FT_GRANDFATHER_NAME_MATERNAL: number;
        FT_FIRST_SURNAME: number;
        FT_MONTH_OF_BIRTH: number;
        FT_ADDRESS_FLOOR_NUMBER: number;
        FT_ADDRESS_ENTRANCE: number;
        FT_ADDRESS_BLOCK_NUMBER: number;
        FT_ADDRESS_STREET_NUMBER: number;
        FT_ADDRESS_STREET_TYPE: number;
        FT_ADDRESS_CITY_SECTOR: number;
        FT_ADDRESS_COUNTY_TYPE: number;
        FT_ADDRESS_CITY_TYPE: number;
        FT_ADDRESS_BUILDING_TYPE: number;
        FT_DATE_OF_RETIREMENT: number;
        FT_DOCUMENT_STATUS: number;
        FT_SIGNATURE: number;
        FT_UNIQUE_CERTIFICATE_IDENTIFIER: number;
        FT_EMAIL: number;
        FT_DATE_OF_SPECIMEN_COLLECTION: number;
        FT_TYPE_OF_TESTING: number;
        FT_RESULT_OF_TESTING: number;
        FT_METHOD_OF_TESTING: number;
        FT_DIGITAL_TRAVEL_AUTHORIZATION_NUMBER: number;
        FT_DATE_OF_FIRST_POSITIVE_TEST_RESULT: number;
        FT_EF_CARD_ACCESS: number;
        FT_SHORT_FLIGHT_NUMBER: number;
        FT_AIRLINE_CODE: number;
        FT_MVC_AGENCY: number;
        FT_ISSUING_STATE_CODE_ALPHA2: number;
        FT_NATIONALITY_CODE_ALPHA2: number;
    };
    DocReaderOrientation: {
        ALL: number;
        PORTRAIT: number;
        LANDSCAPE: number;
        LANDSCAPE_LEFT: number;
        LANDSCAPE_RIGHT: number;
    };
    LCID: {
        LATIN: number;
        ABKHAZIAN_CYRILLIC: number;
        AFRIKAANS: number;
        ALBANIAN: number;
        AMHARIC: number;
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
        ARABIC_WORLD: number;
        AZERI_CYRILIC: number;
        AZERI_LATIN: number;
        BASQUE: number;
        BANK_CARD: number;
        BANK_CARD_CVV2: number;
        BANK_CARD_NAME: number;
        BANK_CARD_NUMBER: number;
        BANK_CARD_VALID_THRU: number;
        BELARUSIAN: number;
        BENGALI_BANGLADESH: number;
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
        KASHMIRI: number;
        KAZAKH: number;
        KONKANI: number;
        KOREAN: number;
        KYRGYZ_CYRILICK: number;
        LAO: number;
        LATVIAN: number;
        LITHUANIAN: number;
        MALAY_MALAYSIA: number;
        MALAY_BRUNEI_DARUSSALAM: number;
        ASSAMESE: number;
        MARATHI: number;
        MONGOLIAN_CYRILIC: number;
        NORWEGIAN_BOKMAL: number;
        NORWEGIAN_NYORSK: number;
        PASHTO: number;
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
        SINDHI: number;
        SINDHI_INDIA: number;
        SINHALA: number;
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
        BENGALI_INDIA: number;
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
        MALTESE: number;
        BURMESE: number;
        KHMER: number;
        KARAKALPAK_LATIN: number;
        MALAYALAM: number;
        NEPALI: number;
        ORIYA: number;
        URDU_DETECTION: number;
    };
    CustomizationImage: {
        RFID_PROCESSING_SCREEN_FAILURE_IMAGE: string;
    };
    DocReaderFrame: {
        MAX: string;
        SCENARIO_DEFAULT: string;
        NONE: string;
        DOCUMENT: string;
    };
    eRPRM_Lights: {
        NONE: number;
        RPRM_LIGHT_UV: number;
        RPRM_LIGHT_WHITE_FULL: number;
        RPRM_LIGHT_IR: number;
        RPRM_Light_IR_TOP: number;
        RPRM_Light_IR_SIDE: number;
        RPRM_Light_IR_Full: number;
        RPRM_LIGHT_OVD: number;
        RPRM_LIGHT_WHITE_FULL_OVD: number;
    };
    eMrzDetectionModes: {
        DEFAULT: number;
        RESIZE_BINARIZE_WINDOW: number;
        BLUR_BEFORE_BINARIZATION: number;
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
export declare class DocumentReaderOriginal extends AwesomeCordovaNativePlugin {
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
     *  Use this method to get an RFID session status
     *
     * @return {Promise<any>} Returns a promise
     */
    getRfidSessionStatus(): Promise<any>;
    /**
     *  Use this method to set an RFID session status
     *
     * @param {string} status
     * @return {Promise<any>} Returns a promise
     */
    setRfidSessionStatus(status: string): Promise<any>;
    /**
     *  returns tag property of DocumentReader class
     *
     * @return {Promise<any>} Returns a promise
     */
    getTag(): Promise<any>;
    /**
     *  sets DocumentReader.tag
     *
     * @param {string} tag
     * @return {Promise<any>} Returns a promise
     */
    setTag(tag: string | null): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getTenant(): Promise<any>;
    /**
     *
     *
     * @param {string} tenant
     * @return {Promise<any>} Returns a promise
     */
    setTenant(tenant: string | null): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getEnv(): Promise<any>;
    /**
     *
     *
     * @param {string} env
     * @return {Promise<any>} Returns a promise
     */
    setEnv(env: string | null): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getFunctionality(): Promise<any>;
    /**
     *
     *
     * @param {Functionality} functionality
     * @return {Promise<any>} Returns a promise
     */
    setFunctionality(functionality: Functionality): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getProcessParams(): Promise<any>;
    /**
     *
     *
     * @param {ProcessParams} processParams
     * @return {Promise<any>} Returns a promise
     */
    setProcessParams(processParams: ProcessParams): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getCustomization(): Promise<any>;
    /**
     *
     *
     * @param {Customization} customization
     * @return {Promise<any>} Returns a promise
     */
    setCustomization(customization: Customization): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getRfidScenario(): Promise<any>;
    /**
     *
     *
     * @param {RFIDScenario} rfidScenario
     * @return {Promise<any>} Returns a promise
     */
    setRfidScenario(rfidScenario: RFIDScenario): Promise<any>;
    /**
     *  Use this method to reset configuration
     *
     * @return {Promise<any>} Returns a promise
     */
    resetConfiguration(): Promise<any>;
    /**
     *  Use this method to initialize Document Reader
     *
     * @param {DocReaderConfig} config
     * @return {Promise<any>} Returns a promise
     */
    initializeReader(config: DocReaderConfig): Promise<any>;
    /**
     *  Initializes document reader with license from connected Device7310(Android only, ignored on iOS)
     *
     * @param {DocReaderConfig} config
     * @return {Promise<any>} Returns a promise
     */
    initializeReaderWithBleDeviceConfig(config: DocReaderConfig): Promise<any>;
    /**
     *  Use this method to deinitialize Document Reader
     *
     * @return {Promise<any>} Returns a promise
     */
    deinitializeReader(): Promise<any>;
    /**
     *  Use this method to download a database from the Regula's server
     *
     * @param {string} databaseType
     * @return {Promise<any>} Returns a promise
     */
    prepareDatabase(databaseType: string): Observable<any>;
    /**
     *  Allows you to remove the added database
     *
     * @return {Promise<any>} Returns a promise
     */
    removeDatabase(): Promise<any>;
    /**
     *  Use this method for getting always the latest version of the database
     *
     * @param {string} databaseId
     * @return {Promise<any>} Returns a promise
     */
    runAutoUpdate(databaseId: string): Observable<any>;
    /**
     *  Allows you to cancel database update
     *
     * @return {Promise<any>} Returns a promise
     */
    cancelDBUpdate(): Promise<any>;
    /**
     *  checks for database update
     *
     * @param {string} databaseId
     * @return {Promise<any>} Returns a promise
     */
    checkDatabaseUpdate(databaseId: string): Promise<any>;
    /**
     *  Use this method to open the camera preview which will pass frames for recognition and return results in the completion block when they are ready
     *
     * @param {ScannerConfig} config
     * @return {Promise<any>} Returns a promise
     */
    scan(config: ScannerConfig): Observable<any>;
    /**
     *  Use this method to open the camera preview which will pass frames for recognition and return results in the completion block when they are ready
     *
     * @param {ScannerConfig} config
     * @return {Promise<any>} Returns a promise
     */
    startScanner(config: ScannerConfig): Observable<any>;
    /**
     *  Use this method to recognize images
     *
     * @param {RecognizeConfig} config
     * @return {Promise<any>} Returns a promise
     */
    recognize(config: RecognizeConfig): Observable<any>;
    /**
     *  Use this method to indicate than the processing of the next page is started
     *
     * @return {Promise<any>} Returns a promise
     */
    startNewPage(): Promise<any>;
    /**
     *  Use this method to close camera preview and stop processing
     *
     * @return {Promise<any>} Returns a promise
     */
    stopScanner(): Promise<any>;
    /**
     *  Use the method below to open the RFID chip reading controller and start its processing
     *
     * @param {boolean} requestPACertificates
     * @param {boolean} requestTACertificates
     * @param {boolean} requestTASignature
     * @return {Promise<any>} Returns a promise
     */
    startRFIDReader(requestPACertificates: boolean, requestTACertificates: boolean, requestTASignature: boolean): Observable<any>;
    /**
     *  Use this method to start RFID chip processing
     *
     * @param {boolean} requestPACertificates
     * @param {boolean} requestTACertificates
     * @param {boolean} requestTASignature
     * @return {Promise<any>} Returns a promise
     */
    readRFID(requestPACertificates: boolean, requestTACertificates: boolean, requestTASignature: boolean): Observable<any>;
    /**
     *  Use the method below to close the RFID chip reading controller and end its processing
     *
     * @return {Promise<any>} Returns a promise
     */
    stopRFIDReader(): Promise<any>;
    /**
     *  Use this method to send PACertificates to the chip after you`ve got a request for them
     *
     * @param {PKDCertificate[]} certificates
     * @return {Promise<any>} Returns a promise
     */
    providePACertificates(certificates: PKDCertificate[] | null): Promise<any>;
    /**
     *  Use this method to send TACertificates to the chip after you`ve got a request for them
     *
     * @param {PKDCertificate[]} certificates
     * @return {Promise<any>} Returns a promise
     */
    provideTACertificates(certificates: PKDCertificate[] | null): Promise<any>;
    /**
     *  Use this method to send TASignature to the chip after you`ve got a request for them
     *
     * @param {string} signature
     * @return {Promise<any>} Returns a promise
     */
    provideTASignature(signature: string): Promise<any>;
    /**
     *  The method call sets the given TCCParams to the RFID session. The parameters are required to be set before starting RFID session.
     *
     * @param {TccParams} params
     * @return {Promise<any>} Returns a promise
     */
    setTCCParams(params: TccParams): Promise<any>;
    /**
     *  Allows to add a list of PKD certificates during initialization process which will be passed to Core
     *
     * @param {PKDCertificate[]} certificates
     * @return {Promise<any>} Returns a promise
     */
    addPKDCertificates(certificates: PKDCertificate[]): Promise<any>;
    /**
     *  Use this method to clear PKD certificates
     *
     * @return {Promise<any>} Returns a promise
     */
    clearPKDCertificates(): Promise<any>;
    /**
     *  Use this method to start a new session
     *
     * @return {Promise<any>} Returns a promise
     */
    startNewSession(): Promise<any>;
    /**
     *  Connects to ble device
     *
     * @param {string} btDeviceName
     * @return {Promise<any>} Returns a promise
     */
    connectBluetoothDevice(btDeviceName: string): Promise<any>;
    /**
     *
     *
     * @param {Record<string, string>} dictionary
     * @return {Promise<any>} Returns a promise
     */
    setLocalizationDictionary(dictionary: Record<string, string>): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getLicense(): Promise<any>;
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
    getIsRFIDAvailableForUse(): Promise<any>;
    /**
     *  Allows you to check if a mobile authenticator is available for use
     *
     * @return {Promise<any>} Returns a promise
     */
    isAuthenticatorRFIDAvailableForUse(): Promise<any>;
    /**
     *  Allows you to check if a mobile authenticator is available for use
     *
     * @return {Promise<any>} Returns a promise
     */
    isAuthenticatorAvailableForUse(): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getDocReaderVersion(): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getDocReaderDocumentsDatabase(): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    finalizePackage(): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    endBackendTransaction(): Promise<any>;
    /**
     *
     *
     * @param {string} className
     * @param {number} value
     * @return {Promise<any>} Returns a promise
     */
    getTranslation(className: string, value: number): Promise<any>;
    textFieldValueByType(results: DocumentReaderResults, fieldType: number): Promise<string | undefined>;
    textFieldValueByTypeLcid(results: DocumentReaderResults, fieldType: number, lcid: number): Promise<string | undefined>;
    textFieldValueByTypeSource(results: DocumentReaderResults, fieldType: number, source: number): Promise<string | undefined>;
    textFieldValueByTypeLcidSource(results: DocumentReaderResults, fieldType: number, lcid: number, source: number): Promise<string | undefined>;
    textFieldValueByTypeSourceOriginal(results: DocumentReaderResults, fieldType: number, source: number, original: boolean): Promise<string | undefined>;
    textFieldValueByTypeLcidSourceOriginal(results: DocumentReaderResults, fieldType: number, lcid: number, source: number, original: boolean): Promise<string | undefined>;
    textFieldByType(results: DocumentReaderResults, fieldType: number): Promise<string | undefined>;
    textFieldByTypeLcid(results: DocumentReaderResults, fieldType: number, lcid: number): Promise<string | undefined>;
    graphicFieldByTypeSource(results: DocumentReaderResults, fieldType: number, source: number): Promise<string | undefined>;
    graphicFieldByTypeSourcePageIndex(results: DocumentReaderResults, fieldType: number, source: number, pageIndex: number): Promise<string | undefined>;
    graphicFieldByTypeSourcePageIndexLight(results: DocumentReaderResults, fieldType: number, source: number, pageIndex: number, light: number): Promise<string | undefined>;
    graphicFieldImageByType(results: DocumentReaderResults, fieldType: number): Promise<string | undefined>;
    graphicFieldImageByTypeSource(results: DocumentReaderResults, fieldType: number, source: number): Promise<string | undefined>;
    graphicFieldImageByTypeSourcePageIndex(results: DocumentReaderResults, fieldType: number, source: number, pageIndex: number): Promise<string | undefined>;
    graphicFieldImageByTypeSourcePageIndexLight(results: DocumentReaderResults, fieldType: number, source: number, pageIndex: number, light: number): Promise<string | undefined>;
    containers(results: DocumentReaderResults, resultType: number[]): Promise<string | undefined>;
    encryptedContainers(results: DocumentReaderResults): Promise<string | undefined>;
}

export declare const DocumentReader: DocumentReaderOriginal;