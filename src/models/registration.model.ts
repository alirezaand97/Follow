export interface AuthCenterOperationalModel {
  id: number;
  createDate: string;
  identificationCode: number;
  fullName: string;
  nationalCode: string;
  customerCcmsCode: number;
  cellPhone: string;
  status: string;
  categoryType: string;
  city: string;
  province: string;
  customerAuthenticated: string;
  returnFromBroker: string;
  sendToBroker: string;
  approveByOfficer: string;
}

export interface RegistrationRequestModel {
  id: number;
  fullName: string;
  customerCcmsCode: number;
  cellPhone: string;
  nationalCode: string;
  status: string;
  createdDate: string;
  modifiedDate: string;
  dataWasTakenFromSejam: boolean;
  agenda: any;
}
export interface AddRequestNoteModel {
  note: string;
  requestNoteReason: string;
  customerId: number;
}

export interface RegistrationRequestHistoryModel {
  lastStatus: string;
  newStatus: string;
  time: string;
}

export interface BranchesSettingModel {
  brokerBranchTitle: string;
  provinceTitle: string;
  priority: number;
  registerInSandoghGardeshgari: boolean;
  registerCustomerAsIme: boolean;
  registerCustomerAsTse: boolean;
  registerNewCustomerInIme: boolean;
  registerNewCustomerInTse: boolean;
}
export interface PishkhanListModel {
  id: number;
  cityId: number;
  categoryId: number;
  categoryTitle: string;
  code: number;
  phoneNumber: string;
  officeAddress: string;
  postalCode: string;
  faxNumber: string;
  isActive: boolean;
  provinceId: number;
  cityTitle: string;
  provinceTitle: string;
  registerCustomerAsIme: false;
  registerCustomerAsTse: true;
  registerNewCustomerInIme: false;
  registerNewCustomerInTse: true;
  pishkhanCityTitle: null;
  credit: null;
  reception: null;
  receptionNationalCode: null;
  receptionCellPhoneNumber: null;
  emailAddress: null;
  officeTitle: null;
}

export interface RequestStatus {
  code: number;
  name: string;
  displayName: string;
}

export interface SejamIdentityInfoModel<T = string> {
  gender: string;
  fatherName: string;
  identityCode: string;
  identitySerialNo: {
    character: string;
    number: string;
    serialNo: string;
  };
  birthDate: T;
  placeOfBirth: string;
  placeOfIssue: string;
}

export interface BirthDate {
  year: string;
  month: string;
  day: string;
}

export interface SejamContactInfoModel<T = OptionModel> {
  country: T;
  province: T;
  city: T;
  street: string;
  alley: string;
  plaque: string;
  postalCode: string;
  phone: string;
  email: string;
  areaCode?: string;
}

export interface OptionModel {
  code: number;
  name: string;
}

export interface SejamJobInfoReqModel<T = OptionModel> {
  job: T;
  jobDescription: string;
  workplacePostalCode: string;
  areaCode?: string;
  workplacePhone: string;
  workplaceEmail: string;
  workplaceAddress: string;
}

export interface SejamJobInfoResModel extends SejamJobInfoReqModel {
  contactInfo: Omit<
    SejamContactInfoModel,
    "country" | "province" | "city" | "areaCode"
  >;
}

export interface SejamFinancialKnowledgeModel<T = OptionModel> {
  tradingLevelPrediction: T;
  bourceKnowlegmant: T;
}

export interface SejamBankAccountModel {
  bankId?: number;
  isDefault?: boolean;
  bankName: string;
  bankAccountNumber: string;
  bankAccountSheba: string;
  bankAccountType: { name: string; code: number };
  branchCity: {
    code: number;
    name: string;
  };
  branchProvince: {
    code: number;
    name: string;
  };
  branch: {
    code: number | string;
    name: string;
  };
}

export interface UpdateOpportunityModel {
  firstName: string;
  lastName: string;
  nationalCode: string;
  mobile: string;
}

export interface UserInfoModel {
  oppurtiunityInfo: UpdateOpportunityModel;
  identityInfo: SejamIdentityInfoModel;
  contactInfo: SejamContactInfoModel;
  jobInfo: SejamJobInfoReqModel;
  bankAccounts: SejamBankAccountModel[];
  financialInfo: SejamFinancialKnowledgeModel;
}

export interface GetDocumentModel {
  file: string;
  type: string;
  name: string;
}

export interface GetActiveBrokerBranchesModel {
  title: string;
  phone: string;
  address: string;
  priority: number;
}
export interface GetIdentificationOfficesModel {
  id: number;
  cityId: number;
  cityTitle: string;
  provinceId: number;
  provinceTitle: string;
  officeCategoryId: number;
  officeCategoryTitle: string;
  code: string;
  phoneNumber: string;
  officeAddress: string;
  postalCode: string;
}
