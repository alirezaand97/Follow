import {
  AddRequestNoteModel,
  RegistrationRequestHistoryModel,
  RegistrationRequestModel,
  UserInfoModel,
} from "@/models/registration.model";

import { OptionModel } from "@/models/menu.model";
import { ResponseModel } from "@/models/general.model";
import endPoints from "@/constant/end_points";
import serviceApi from ".";

const registrationRequest = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getRegistrationRequestList: build.query<
      ResponseModel<RegistrationRequestModel[]>,
      any
    >({
      query: (params) => ({
        method: "GET",
        url: endPoints.registerationRequest,
        params: { ...params },
      }),
    }),
    getRegistrationRequestItem: build.query<
      UserInfoModel,
      { CustomerId: number }
    >({
      query: ({ CustomerId }) => {
        return {
          method: "GET",
          url: endPoints.registrationRequestDetail,
          params: {
            CustomerId,
          },
        };
      },
    }),
    getRequestHistory: build.query<
      RegistrationRequestHistoryModel[],
      { CustomerId: number }
    >({
      query: ({ CustomerId }) => {
        return {
          method: "GET",
          url: endPoints.registrationRequestStateHistory,
          params: {
            CustomerId,
          },
        };
      },
    }),
    getRequestNoteList: build.query<any, number>({
      query: (OpportunityId) => {
        return {
          method: "GET",
          url: endPoints.getRequestNotes,
          params: {
            OpportunityId,
          },
        };
      },
      providesTags: ["requestNote"],
    }),
    addRequestNote: build.mutation<any, AddRequestNoteModel>({
      query: (data) => {
        return {
          method: "POST",
          url: endPoints.addRequestNote,
          data,
        };
      },
      invalidatesTags: ["requestNote"],
    }),
    getNoteReasonList: build.query<OptionModel[], void>({
      query: () => {
        return {
          method: "GET",
          url: `/noteReasonList`,
        };
      },
    }),
    registrationRequestUserName: build.query<
      { userName: string },
      { CcmsCode: number }
    >({
      query: ({ CcmsCode }) => {
        return {
          method: "GET",
          url: endPoints.registrationRequestUserName,
          params: { CcmsCode },
        };
      },
    }),
  }),
});

export const {
  useGetRegistrationRequestListQuery,
  useGetRegistrationRequestItemQuery,
  useGetNoteReasonListQuery,
  useGetRequestNoteListQuery,
  useGetRequestHistoryQuery,
  useLazyRegistrationRequestUserNameQuery
} = registrationRequest;
