import { AuthCenterOperationalModel } from "@/models/registration.model";
import serviceApi from ".";

const registrationRequest = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthCenterOperationalReport: build.query<
      AuthCenterOperationalModel[],
      any
    >({
      query: (params) => ({
        method: "GET",
        url: "/authCenterOperationalReportList",
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetAuthCenterOperationalReportQuery } = registrationRequest;
