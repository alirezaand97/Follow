let notValidNationalCode = [
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
];
const checkNationalCode = (code: string) => {
  var codeLength = code.length;
  if (codeLength != 10) return false;
  if (notValidNationalCode.includes(code)) return false;
  if (+code.slice(3, 9) === 0) return false;
  var lastNumber = +code.slice(9, 10);
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += +code.slice(i, i + 1) * (10 - i);
  }
  sum = sum % 11;
  return (
    (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
  );
};

export default checkNationalCode;
