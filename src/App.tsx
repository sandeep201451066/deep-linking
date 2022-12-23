import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { browserDeeplink } from "@macpaw/browser-deeplink";

function App() {
  const [type, setType] = React.useState(0);
  const [one, setOne] = React.useState(0);
  const [two, settwo] = React.useState(0);
  const [three, setThree] = React.useState(0);

  React.useEffect(() => {
    // console.log("navigator.userAgent", navigator.userAgent);
    // setType(JSON.stringify(navigator.userAgent));
    // browserDeeplink("master.d3nu62uf8aj07x.amplifyapp.com://")
    //   .then(() => {
    //     console.log("application is requested to open");
    //     setType("application is requested to open");
    //     window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
    //   })
    //   .catch(() => {
    //     console.log("application is not installed");
    //     setType("application is not installed");
    //     window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
    //   });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var now = new Date().valueOf();
      setOne(now);
      try {
        // window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
        // setType(JSON.stringify(navigator.userAgent));
        setTimeout(function () {
          setThree(new Date().valueOf() - now);
          if (new Date().valueOf() - now > 100) {
            setType(999999991);
          } else {
            setType(10000000000);
            window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
          }
        }, 50);
        settwo(22222);
        window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
        setType(new Date().valueOf() - now);
      } catch (error) {
        setType(-1);
        console.log("error--------------------", error);
      }
    }
  }, []);

  return (
    <div>
      <header>
        <p>
          Type <code>{type}</code>
        </p>
        <p>
          One <code>{one}</code>
        </p>
        <p>
          Two <code>{two}</code>
        </p>
        <p>
          Three <code>{three}</code>
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
