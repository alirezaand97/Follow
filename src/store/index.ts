import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import drawers from "./drawers";
import { persistReducer } from "redux-persist";
import serviceApi from "./service";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [serviceApi.reducerPath]: serviceApi.reducer,
  [drawers.name]: drawers.reducer,
});

const reducer = persistReducer(
  {
    key: "follow_up",
    version: 1,
    storage,
    blacklist: [serviceApi.reducerPath, drawers.name],
  },
  rootReducer
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
