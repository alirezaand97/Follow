import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import constant from "@/constant/config";
import { pageNames } from "@/constant";

let store: any;
export const injectStore = (_store: any) => {
  store = _store;
};

const axiosInstance = axios.create({ baseURL: constant.baseUrl });

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = store.getState();
  if (accessToken)
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-type": "application/json",
    };

  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve({ ...res, data: res.data });
  },
  (error: AxiosError<{ errorMessage: string; errorCode: string }>) => {
    if (!error.response) return Promise.reject(error);

    if (error.response.status === 401) {
      localStorage.clear();
      location.href = pageNames.login;
    }

    if (error.response.status === 403) location.href = pageNames.login;

    return Promise.reject(error);
  }
);
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      onUploadProgress?: AxiosRequestConfig["onUploadProgress"];
      cancelToken?: AxiosRequestConfig["cancelToken"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, onUploadProgress, cancelToken }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        cancelToken,
        onUploadProgress,
      });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      console.log("here", err);

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export default axiosBaseQuery;
