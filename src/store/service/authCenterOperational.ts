import { AuthCenterOperationalModel } from "@/models/registration.model";
import { ResponseModel } from "@/models/general.model";
import endPoints from "@/constant/end_points";
import serviceApi from ".";

const AuthCenterOperational = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getAuthCenterOperationalReport: build.query<
      ResponseModel<AuthCenterOperationalModel[]>,
      any
    >({
      query: (params) => ({
        method: "GET",
        url: endPoints.getIdentificationOfficeReport,
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetAuthCenterOperationalReportQuery } = AuthCenterOperational;
