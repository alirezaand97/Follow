export interface LoginReqModel {
  username: string;
  password: string;
  userCaptchaCode: string;
}

export interface ResetPasswordReqModel {
  oldPassword: string;
  newPassword: string;
}
