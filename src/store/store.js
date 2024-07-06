import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import messageReducer from "./messageSlice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    message: messageReducer,
  },
});
