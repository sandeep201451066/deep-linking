import React from "react";
import "./App.css";

function App () {
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
        // setTimeout(function () {
        //   // app stores link
        //   if (!change) {
        //     window.location.href = "https://play.google.com/store/apps/details?id=com.horseplay";
        //   }
        // }, 1500);

        // URL schemes
        window.location.href = "ext-deep-linking.netlify.app://DeleteAccountScreen";
      } catch (error) {
        console.log("error--------------------", error);
      }
    }
  }, []);

  return (
    <div>
      <header>
        <h1>EXT DEEP LINKING APP OPEN</h1>
      </header>
    </div>
  );
}

export default App;
