export const mobileRegex = /^09\d{9}$/;
export const lowerCaseRegex = /(?=.*[a-z])/;
export const upperCaseRegex = /(?=.*[A-Z])/;
export const numberRegex = /(?=.*?[0-9])/;
export const justNumberRegex = /^[0-9]+$/;
export const zeroLimitation = (limitation: number) =>
  new RegExp(/^((?!00000000000000).)*$/);

export const specialCharRegex = /(?=.*[!_^#*@~$&=%?\\])/;
// export const passwordRegex =
//   /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,}$/g;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[!_^#*@~$&=%?\\])(?=.*[0-9])(?=.*[a-z]).{8,}$/g;
export const englishRegex = /^[\u0041-\u007A\s]+$/;
export const englishChar = /^[a-zA-Z0-9]*$/;
export const digit = /(\d){9}/;
export const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const codeAreaRegex = /^(0)[1-9]{2}$/;
export const addressRegex =
  /^[\u0621-\u0624\u0626-\u0628\u062A-\u063A\u0641\u0642\u0644-\u0648\u067E\u0686\u0698\u06A9\u06AF\u06CC\u06F0-\u06F9\s1-9-،]+$/;
export const persianRegex =
  /^[\u0621-\u0624\u0626-\u0628\u062A-\u063A\u0641\u0642\u0644-\u0648\u067E\u0686\u0698\u06A9\u06AF\u06CC\s]+$/;
export const persianNumericRegex =
  /^[\u0621-\u0624\u0626-\u0628\u062A-\u063A\u0641\u0642\u0644-\u0648\u067E\u0686\u0698\u06A9\u06AF\u06CC\u06F0-\u06F9\s1-9]+$/;
