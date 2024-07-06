import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../../store/cardsSlice";
import { toggleStatusFromCard } from "../../store/messageSlice";

import './AddForm.css';
import AppButton from "../../UI/AppButton/AppButton";

export default function AddForm() {
  const [newCard, setNewCard] = useState({ name: "", number: "", summ: 0 });

  const dispatch = useDispatch();

  function addCard() {
    dispatch(addNewCard(newCard));
    dispatch(toggleStatusFromCard({text: `Card with number ${newCard.number} added`, button: 'Ok'}));
    setNewCard({ name: "", number: "", summ: 0 });
  }

  return (
    <form className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        addCard();
      }}
    >
      <input
        value={newCard.name}
        required
        type="text"
        placeholder="Name"
        onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
      />
      <input
        value={newCard.number}
        required
        minLength={6}
        maxLength={6}
        type="text"
        placeholder="Card Number"
        onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
      />
      <input
        value={newCard.summ}
        type="number"
        placeholder="initial summ"
        onChange={(e) => setNewCard({ ...newCard, summ: e.target.value })}
      />
      <AppButton type="submit">Submit</AppButton>
    </form>
  );
}
