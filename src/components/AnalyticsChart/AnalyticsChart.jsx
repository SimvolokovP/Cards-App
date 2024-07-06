import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AnalyticsChart() {
  const cardsList = useSelector((state) => state.cards.cards);
  let income = +0;
  let outcome = +0;

  cardsList.forEach((card) => {
    card.history.forEach((trans) => {
      if (trans.come === "true") {
        income += +trans.summ;
      } else {
        outcome += +trans.summ;
      }
    });
  });

  const data = {
    labels: ["income", 'expenses'],
    datasets: [
      {
        label: "Amount of asset: ",
        data: [income, outcome],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        height: 400,
      }}
    >
      <Pie data={data}></Pie>
    </div>
  );
}
