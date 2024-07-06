import { useState } from "react";
import AppButton from "../../UI/AppButton/AppButton";
import AppSelect from "../../UI/AppSelect/AppSelect";
import { addNewTrans } from "../../store/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

import './TransactionForm.css';

export default function TransactionForm({  }) {
  const [trans, setTrans] = useState({ person: "", summ: 0, come: "false", cardNumber: '654321' });

  const dispatch = useDispatch();
  const cardsList = useSelector(state => state.cards.cards);
  const numbersList = cardsList.map((card) => card.number);
  return (
    <form className="transaction-form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addNewTrans(trans));
      }}
    >
      <input required
        placeholder="summ"
        type="number"
        value={trans.summ}
        onChange={(e) => setTrans({ ...trans, summ: e.target.value })}
      />
      <input required
        placeholder="person"
        type="text"
        value={trans.person}
        onChange={(e) => setTrans({ ...trans, person: e.target.value })}
      />
      <select
        value={trans.come}
        onChange={(e) => setTrans({ ...trans, come: e.target.value })}
      >
        <option value={"true"}>+</option>
        <option value={"false"}>-</option>
      </select>
      <select value={trans.cardNumber} onChange={(e) => setTrans({...trans, cardNumber: e.target.value})}>  
        {numbersList.map(number => <option key={number} value={ number }>{number}</option>)}
      </select>
      <AppButton type={"submit"}>Submit</AppButton>
    </form>
  );
}
