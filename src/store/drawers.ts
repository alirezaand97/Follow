import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CreateContactInterface {
  isOpen: boolean;
}

interface DrawersInterface {
  drawerState: CreateContactInterface;
}

const initialState: DrawersInterface = { drawerState: { isOpen: false } };

const drawers = createSlice({
  initialState,
  name: "drawers",
  reducers: {
    openDrawer: (state, action: PayloadAction<CreateContactInterface>) => ({
      ...state,
      drawerState: { ...state.drawerState, ...action.payload },
    }),
  },
});

export const { openDrawer } = drawers.actions;
export default drawers;
