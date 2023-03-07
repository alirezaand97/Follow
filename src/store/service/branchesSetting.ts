import {
  AuthCenterOperationalModel,
  BranchesSettingModel,
} from "@/models/registration.model";

import { ResponseModel } from "@/models/general.model";
import endPoints from "@/constant/end_points";
import serviceApi from ".";

const branchesList = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getBranchesSettingList: build.query<
      ResponseModel<BranchesSettingModel[]>,
      any
    >({
      query: (params) => ({
        method: "GET",
        url: endPoints.activeBranchList,
        params: { ...params },
      }),
    }),
  }),
});

export const { useGetBranchesSettingListQuery } = branchesList;
