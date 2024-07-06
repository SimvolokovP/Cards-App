import { useSelector } from "react-redux";
import AppSelect from "../../UI/AppSelect/AppSelect";
import HistoryList from "../HistoryList/HistoryList";
import { useState } from "react";
import AppButton from '../../UI/AppButton/AppButton';

import './MainHistory.css';

export default function MainHistory() {
  const [selectValue, setSelectValue] = useState("");

  const cardsList = useSelector((state) => state.cards.cards);
  const numbersList = cardsList.map((card) => card.number);

  const targetCard = cardsList.find((card) => card.number === selectValue);

  return (
    <div className="history-page">
      <AppSelect
        value={selectValue}
        initValue={"Input card number"}
        setValue={setSelectValue}
        options={numbersList}
      />
      <HistoryList targetCard={targetCard} />
    </div>
  );
}
