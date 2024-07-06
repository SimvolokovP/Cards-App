import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./CardsSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function CardsSwiper({}) {
  const cardsList = useSelector((state) => state.cards.cards);

  return (
    <Swiper
      className="card-swiper"
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
    >
      {cardsList.length ? (
        cardsList.map((card) => (
          <SwiperSlide key={card.id} className="card-slide">
            <Card tempCard={card} />
          </SwiperSlide>
        ))
      ) : (
        <div className="empty-card">You don't have any card</div>
      )}
    </Swiper>
  );
}
