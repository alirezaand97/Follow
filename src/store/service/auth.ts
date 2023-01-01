import { LoginReqModel, ResetPasswordReqModel } from "@/models/auth";

import serviceApi from ".";

const registrationRequest = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<void, LoginReqModel>({
      query: () => ({ method: "POST", url: "/Login" }),
    }),
    resetPassword: build.mutation<void, ResetPasswordReqModel>({
      query: () => ({ method: "POST", url: "/ResetPassword" }),
    }),
  }),
});

export const { useLoginUserMutation, useResetPasswordMutation } =
  registrationRequest;
