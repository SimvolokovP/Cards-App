import Main from "./components/Main/Main";
import Message from "./components/Message/Message";
import "./index.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Main />
        </div>
        <Message />
        
      </div>
    </>
  );
}

export default App;
