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
    getRegistrationRequestItem: build.query<any, { CustomerId: number }>({
      query: ({ CustomerId }) => {
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
  useGetRegistrationRequestItemQuery,
} = registrationRequest;
