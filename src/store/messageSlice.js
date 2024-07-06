import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    isActive: false,
    text: "",
    button: "",
  },
  reducers: {
    toggleStatusFromCard(state, actions) {
      if (state.isActive) {
        state.isActive = false;
      } else {
        state.isActive = true;
        state.text = actions.payload.text;
        state.button = actions.payload.button;
      }
    },
    closeMessage(state) {
      state.isActive = false;
    },
  },
});

export const { toggleStatusFromCard, closeMessage } = messageSlice.actions;

export default messageSlice.reducer;
