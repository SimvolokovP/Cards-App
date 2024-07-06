import { useDispatch } from "react-redux";
import { removeCard, toggleActive } from "../../store/cardsSlice";
import { toggleStatusFromCard } from "../../store/messageSlice";
import AppButton from "../../UI/AppButton/AppButton";

export default function Card({ tempCard }) {
  const dispatch = useDispatch();

  function formatCurrency(amount) {
    return `${amount}`;
  }

  return (
    <>
      <div className="card">
        <div className="card__header">
          <div className="card__descr">
            <div
              className="card__status"
              onClick={() => {
                dispatch(toggleActive(tempCard.id));
                dispatch(
                  toggleStatusFromCard({
                    text: `You change card number #${tempCard.number} status active to ${!tempCard.active}`,
                    button: "Ok",
                  })
                );
              }}
            >
              <div
                style={
                  tempCard.active
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {tempCard.active ? "A" : "N"}
              </div>
              {tempCard.active ? "Active" : "Not Active"}
            </div>
            <div className="card__logo">#{tempCard.number}</div>
          </div>
        </div>
        <div className="card__body">
          <span>Savings card: </span>
          <div className="card__sum">${formatCurrency(tempCard.summ)}</div>
        </div>
      </div>
      <div className="card__actions">
        <AppButton
          onClick={() => {
            dispatch(removeCard(tempCard.id));
            dispatch(toggleStatusFromCard({ text: `You remove card number #${tempCard.number}`, button: "Ok" }));
          }}
        >
          Remove this card
        </AppButton>
      </div>
    </>
  );
}
