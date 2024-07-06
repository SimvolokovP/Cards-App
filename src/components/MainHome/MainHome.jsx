
import AppButton from "../../UI/AppButton/AppButton";
import CardsSwiper from "../CardsSwiper/CardsSwiper";

import "./MainHome.css";

import { removeCard } from "../../store/cardsSlice";

export default function MainHome() {
  

  return (
    <div className="home">
      <CardsSwiper />
    </div>
  );
}
