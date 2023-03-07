import { PishkhanListModel } from "@/models/registration.model";
import { ResponseModel } from "@/models/general.model";
import endPoints from "@/constant/end_points";
import serviceApi from ".";

const pishkhanList = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getPishkhanList: build.query<ResponseModel<PishkhanListModel[]>, any>({
      query: (params) => ({
        method: "GET",
        url: endPoints.pishkhanList,
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetPishkhanListQuery } = pishkhanList;
