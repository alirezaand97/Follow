export const registerationRequestConfig = [
  {
    title: "userInfo",
    list: [
      { field: "FullName", type: "text" },
      { field: "FatherName", type: "text" },
      { field: "BirthDate", type: "date" },
      { field: "IdentityIssueCityTitle", type: "text" },
      {
        field: "GenderCode",
        type: "radio",
        options: [
          { label: "male", value: 1 },
          { label: "female", value: 0 },
        ],
      },
      {
        field: "MaritalStatusCode",
        type: "radio",
        options: [
          { label: "married", value: 1 },
          { label: "not married", value: 0 },
        ],
      },
      { field: "NationalCode", type: "text" },
      { field: "IdentityNo", type: "text" },
      { field: "IdentitySerialNo", type: "text" },
      { field: "Job", type: "select" },
      { field: "OrganizationalRole", type: "text" },
      { field: "OrganizationPlace", type: "text" },
      { field: "AsaFamiliarityChannelCode", type: "text" },
      { field: "BourceKnowlegmantCode", type: "text" },
      {
        field: "ProvinceTitle",
        type: "select",
        options: [
          { label: "رشت", value: "rasht" },
          { label: "تهران", value: "tehran" },
        ],
      },
      { field: "CityTitle", type: "text" },
    ],
  },
  {
    title: "contactInfo",
    list: [
      { field: "CellPhone", type: "text" },
      { field: "EmailAddress", type: "text" },
      { field: "WorkEmail", type: "text" },
      { field: "PhoneNo", type: "text" },
      { field: "WorkPhoneNo", type: "text" },
      { field: "PostalCode", type: "text" },
      { field: "WorkAddress", type: "gender" },
      { field: "WorkPostalCode", type: "text" },
      { field: "UrgentCellPhoneNo", type: "marry" },
      { field: "UrgentPhoneNo", type: "text" },
      { field: "WorkFax", type: "text" },
      { field: "JobStartingDate", type: "date" },
      { field: "Address", type: "text" },
      { field: "Alley", type: "text" },
      { field: "Plaque", type: "text" },
    ],
  },
  {
    title: "bankInfo",
    list: [
      { field: "CellPhone", type: "text" },
      { field: "BankName", type: "select" },
      { field: "BankBranchName", type: "text" },
      { field: "BankBranchCode", type: "text" },
      { field: "BankBranchName", type: "text" },
      { field: "BranchProvinceTitle", type: "text" },
      { field: "BranchCityTitle", type: "text" },
      { field: "BankAccountNo", type: "text" },
      { field: "BankAccountShebaNo", type: "text" },
      { field: "Assets", type: "text" },
      { field: "IncommingSallary", type: "text" },
      { field: "BankAccountTypeCode", type: "select" },
    ],
  },
];
