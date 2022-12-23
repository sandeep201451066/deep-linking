import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [type, setType] = React.useState("");
  React.useEffect(() => {
    console.log("navigator.userAgent", navigator.userAgent);
    setType(JSON.stringify(navigator.userAgent));
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      try {
        window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
        // window.open("master.d3nu62uf8aj07x.amplifyapp.com://");
      } catch (error) {
        setType(JSON.stringify(error));
        console.log("error--------------------", error);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type <code>{type}</code>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
