import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function App () {
  const location = useLocation()
  console.log(`ext-deep-linking.netlify.app:/${location?.pathname}`)
  React.useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      try {
        // URL schemes
        console.log(`ext-deep-linking.netlify.app:/${location?.pathname}`)
        window.location.href = `ext-deep-linking.netlify.app:/${location?.pathname}`
        console.log(`ext-deep-linking.netlify.app:/${location?.pathname}`)
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
