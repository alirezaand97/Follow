import { RegistrationRequestModel } from "@/models/registration_request.model";
import serviceApi from ".";

const registrationRequest = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getRegistrationRequestList: build.query<RegistrationRequestModel[], any>({
      query: (params) => ({
        method: "GET",
        url: "/registerationRequest",
        params: { ...params },
      }),
    }),
    getRegistrationRequest: build.query<
      RegistrationRequestModel,
      { CustomerId: number }
    >({
      query: ({ CustomerId }) => {
        console.log("CustomerId", `/registerationRequest/${CustomerId}`);

        return {
          method: "GET",
          url: `/registerationRequest/${CustomerId}`,
        };
      },
    }),
  }),
});

export const {
  useGetRegistrationRequestListQuery,
  useGetRegistrationRequestQuery,
} = registrationRequest;
