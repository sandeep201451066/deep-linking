import React from "react";
import "./App.css";

function App() {
  var change = false;
  React.useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      try {
        window.onblur = function () {
          change = true;
        };
        window.onfocus = function () {
          change = false;
        };
        setTimeout(function () {
          // app stores link
          window.location.href = "https://play.google.com/store/apps/details?id=com.horseplay";
        }, 1500);

        // URL schemes
        window.location.href = "horseplay://activity/new/6800B45DE031C450C48861BBFBF7C8CE?p1=one&p2=two&p3=three";
      } catch (error) {
        console.log("error--------------------", error);
      }
    }
  }, []);

  return (
    <div>
      <header>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Welcome !!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
