import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { browserDeeplink } from "@macpaw/browser-deeplink";

function App() {
  const [type, setType] = React.useState("");
  React.useEffect(() => {
    console.log("navigator.userAgent", navigator.userAgent);
    setType(JSON.stringify(navigator.userAgent));
    browserDeeplink("master.d3nu62uf8aj07x.amplifyapp.com://")
      .then(() => {
        console.log("application is requested to open");
        setType("application is requested to open");
        window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
      })
      .catch(() => {
        console.log("application is not installed");
        setType("application is not installed");
        window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
      });
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //   try {
    //     // window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
    //     // window.open("master.d3nu62uf8aj07x.amplifyapp.com://");
    //     var now = new Date().valueOf();
    //     setTimeout(function () {
    //       if (new Date().valueOf() - now > 100) return;
    //       window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
    //     }, 500);
    //     window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
    //   } catch (error) {
    //     setType(JSON.stringify(error));
    //     console.log("error--------------------", error);
    //   }
    // }
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
