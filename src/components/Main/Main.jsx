import { useState } from "react";
import { appTabs } from "../../data/data";
import AppTabs from "../../UI/AppTabs/AppTabs";

import "./Main.css";
import MainHome from "../MainHome/MainHome";
import MainHistory from "../MainHistory/MainHistory";

import cardIcon from "../../assets/icons/card.svg";
import AppModal from "../../UI/AppModal/AppModal";
import AddForm from "../AddForm/AddForm";
import MainAnalytics from "../MainAnalytics/MainAnalytics";

export default function Main() {
  const [selectTab, setSelectTab] = useState("home");
  const [modal, setModal] = useState(false);

  return (
    <main className="main">
      <div className="main__header main__block">
        <div>
          <img src={cardIcon} alt="card" />
          <div>My Cards</div>
        </div>
        <button onClick={() => setModal(true)} className="main__header--add">
          + Add new card
        </button>
      </div>
      <div className="main__body main__block">
        {selectTab === "home" && <MainHome />}
        {selectTab === "history" && <MainHistory />}
        {selectTab === "analytics" && <MainAnalytics />}
      </div>
      <div className="main__footer main__block">
        <AppTabs
          buttons={appTabs}
          state={selectTab}
          changeState={setSelectTab}
        />
      </div>
      <AppModal open={modal} setOpen={setModal}>
        <AddForm />
      </AppModal>
    </main>
  );
}
