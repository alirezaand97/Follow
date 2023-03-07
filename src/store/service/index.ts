import axiosBaseQuery from "@/utils/axios_base_query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

const serviceApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: "serviceApi",
  endpoints: () => ({}),
  tagTypes: ["registrationRequest","requestNote"],
});

export default serviceApi;
