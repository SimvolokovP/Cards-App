import { useDispatch } from "react-redux";
import AppButton from "../../UI/AppButton/AppButton";
import "./HistoryList.css";
import { toggleStatusFromCard } from "../../store/messageSlice";
import AppModal from "../../UI/AppModal/AppModal";
import TransactionForm from "../TransactionForm/TransactionForm";
import { useState } from "react";

export default function HistoryList({ targetCard }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  function openTransDialog() {
    if (!targetCard.active) {
      dispatch(
        toggleStatusFromCard({
          text: `Card with number #${targetCard.number} is not active`,
          button: "Ok",
        })
      );
    } else {
      setModal(true);
    }
  }

  return targetCard ? (
    <div className="history-list">
      {targetCard.history ? (
        <div>
          <ul className="history list-reset">
            {targetCard.history.map((trans) => (
              <li className="history__item" key={trans.id}>
                <div
                  style={
                    trans.come === "true"
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "red" }
                  }
                  className="history__item--icon"
                >
                  {trans.come ? "+" : "-"}
                </div>
                <div className="history__item--descr">
                  <div
                    style={
                      trans.come === "true"
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {trans.come === "true" ? "+" : "-"}
                    {trans.summ}$
                  </div>
                  <div>{trans.come === "true" ? "from" : "to"} {trans.person}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="history-list">Not history</div>
      )}
      <AppButton style={{ width: "100%" }} onClick={openTransDialog}>
        Add new transaction
      </AppButton>
      <AppModal open={modal} setOpen={setModal}> 
        <TransactionForm targetNumber={targetCard.number} />
      </AppModal>
    </div>
  ) : (
    <div className="history-list">Select card</div>
  );
}
