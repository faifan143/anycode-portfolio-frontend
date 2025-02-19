import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WrapperState {
  isLoading: boolean;
  isHidingScrollProgress: boolean;
}

const initialState: WrapperState = {
  isLoading: false,
  isHidingScrollProgress: false,
};

const wrapperSlice = createSlice({
  name: "wrapper",
  initialState,
  reducers: {
    setLaoding(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
      state.isHidingScrollProgress = action.payload;
    },
    setScrollProgressStatus(state, action: PayloadAction<boolean>) {
      state.isHidingScrollProgress = action.payload;
    },
  },
});

export const { setLaoding, setScrollProgressStatus } = wrapperSlice.actions;

export default wrapperSlice.reducer;
