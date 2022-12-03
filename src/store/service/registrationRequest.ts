import serviceApi from ".";

const registrationRequest = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getRegistrationRequestList: build.query<[], void>({
      query: () => ({ method: "GET", url: "/registerationRequest" }),
    }),
  }),
});

export const { useGetRegistrationRequestListQuery } = registrationRequest;
