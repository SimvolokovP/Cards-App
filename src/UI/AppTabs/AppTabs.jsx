import './AppTabs.css';

export default function AppTabs({ buttons, state, changeState }) {
    console.log(state)
  return (
    <ul className="tabs list-reset">
      {buttons.map((button) => (
        <li key={button.value} className="tabs__item">
          <button onClick={() => changeState(button.value)}
            className={
                state === button.value
                ? "btn-reset tabs__btn active"
                : "btn-reset tabs__btn"
            }
          >
            {button.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
