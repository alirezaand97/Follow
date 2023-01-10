export interface AuthCenterOperationalModel {
  OfficeCode: number;
  CustomerTitle: string;
  CellPhone: string;
  NationalCode: string;
  ResultStateTitle: string;
  CategoryTitle: string;
  ReturnFromBrokerSubmitDate: string;
  SendToBrokerSubmitDate: string;
  StateSubmitDate: string;
  SubmitDate: string;
  ApprovePishkhanSubmitDate: string;
  AuthenticatedSubmitDate: string;
  IsClosed: boolean;
  CityTitle: string;
  PostalBarcode: string;
  ReasonDescription: string;
  CategoryId: string;
  EmailAddress: string;
  FatherName: string;
  FollowUpTaskId: number;
  ResultState: number;
}

export interface RegistrationRequestModel {
  CustomerId: string;
  FirstName: string;
  LastName: string;
  CellPhone: string;
  EmailAddress: string;
  RegisterType: string;
  FatherName: string;
  NationalCode: string;
  CreationDate: string;
  lastUpdateDate: string;
  FollowUpType: string;
  RecieveCustomerInfo: string;
}
