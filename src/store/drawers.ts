import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { theme } from "@/constant/theme";

interface toggleRegisterRequestDetailModel {
  isOpen: boolean;
  customerId?: number;
}
interface DrawerStatusModel {
  isOpen: boolean;
  width?: number;
}

interface DrawersInterface {
  toggleRegisterRequestDetail: toggleRegisterRequestDetailModel;
  sideBar: { collapsed: boolean };
  drawerStatus: DrawerStatusModel;
}

const initialState: DrawersInterface = {
  toggleRegisterRequestDetail: { isOpen: false, customerId: undefined },
  sideBar: { collapsed: false },
  drawerStatus: {
    isOpen: false,
    width: theme.drawerWidth,
  },
};

const drawers = createSlice({
  initialState,
  name: "drawers",
  reducers: {
    toggleRegisterRequestDetailDrawer: (
      state,
      action: PayloadAction<toggleRegisterRequestDetailModel>
    ) => ({
      ...state,
      toggleRegisterRequestDetail: action.payload,
      sideBar: { collapsed: true },
      drawerStatus: { ...state.drawerStatus, isOpen: action.payload.isOpen },
    }),
    toggleCollapseSideBar: (state) => ({
      ...state,
      sideBar: { ...state.sideBar, collapsed: !state.sideBar.collapsed },
    }),
  },
});

export const { toggleRegisterRequestDetailDrawer, toggleCollapseSideBar } =
  drawers.actions;
export default drawers;
