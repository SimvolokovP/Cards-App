import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 1,
        summ: 0,
        active: false,
        number: "654321",
        history: [
          { id: 0, summ: 100, come: "true", person: "Joe" },
          { id: 1, summ: 50, come: "false", person: "Joe" },
          { id: 2, summ: 250, come: "true", person: "Nate" },
          { id: 3, summ: 300, come: "false", person: "Kate" },
        ],
      },
    ],
  },
  reducers: {
    toggleActive(state, actions) {
      const targetCard = state.cards.find(
        (card) => card.id === actions.payload
      );

      targetCard.active = !targetCard.active;
    },
    removeCard(state, actions) {
      state.cards = state.cards.filter((card) => card.id !== actions.payload);
    },
    addNewCard(state, actions) {
      const newCard = {
        id: state.cards.length + 1,
        name: actions.payload.name,
        summ: actions.payload.summ,
        number: actions.payload.number,
        active: false,
      };
      state.cards.push(newCard);
    },
    addNewTrans(state, actions) {
      const cardNumber = actions.payload.cardNumber;
      const targetCard = state.cards.find((card) => card.number === cardNumber);
      console.log(actions.payload);
      if (targetCard.history === undefined) {
        targetCard.history = [];
      }

      const trans = {
        id: targetCard.history.length + 1,
        summ: actions.payload.summ,
        person: actions.payload.person,
        come: actions.payload.come,
      };

      if (actions.payload.come === "false") {
        console.log(actions.payload.summ);
        console.log(targetCard.summ);
        if (+actions.payload.summ <= +targetCard.summ) {
          targetCard.history.push(trans);
          targetCard.summ -= +actions.payload.summ;
        }
      }

      if (actions.payload.come === "true") {
        targetCard.history.push(trans);
        targetCard.summ += +actions.payload.summ;
      }
    },
  },
});

export const { toggleActive, removeCard, addNewCard, addNewTrans } =
  cardsSlice.actions;

export default cardsSlice.reducer;
