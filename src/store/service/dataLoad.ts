import { PishkhanListModel, RequestStatus } from "@/models/registration.model";

import serviceApi from ".";

const pishkhanList = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getRequestStatusOptions: build.query<RequestStatus[], void>({
      query: () => ({
        method: "GET",
        url: "/DataLoad/GetRequestsStatus",
      }),
    }),
  }),
});

export const { useGetRequestStatusOptionsQuery } = pishkhanList;
