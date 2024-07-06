import { useDispatch, useSelector } from "react-redux";
import "./Message.css";
import { closeMessage } from "../../store/messageSlice";
import AppButton from "../../UI/AppButton/AppButton";

export default function Message() {
  const messageState = useSelector((state) => state.message);

  const dispatch = useDispatch();

  return (
    <div className={messageState.isActive ? "message active" : "message"}>
      <p>{messageState.text}</p>
      <AppButton onClick={() => dispatch(closeMessage())}>{messageState.button}</AppButton>
    </div>
  );
}
