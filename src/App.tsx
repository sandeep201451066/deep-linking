import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { browserDeeplink } from "@macpaw/browser-deeplink";

function ejectIframe(iframe: any) {
  document.body.removeChild(iframe);
}

function injectIframe(src: any) {
  const iframe = document.createElement("iframe");
  iframe.src = src;
  document.body.appendChild(iframe);
  iframe.style.width = "1px";
  iframe.style.height = "1px";
  iframe.style.position = "fixed";
  iframe.style.left = "-1px";

  return iframe;
}

function browserDeeplink(appLink: any, options: any = {}) {
  const defaults = { waitTimeout: 200 };
  options = { ...defaults, options, waitTimeout: 200 };

  return new Promise((resolve, reject) => {
    const iframe = injectIframe(appLink);
    const timeout = setTimeout(() => {
      window.removeEventListener("blur", windowBlurListener);
      ejectIframe(iframe);
      reject(Error(`Can't open ${appLink}`));
    }, options.waitTimeout);

    function windowBlurListener() {
      window.removeEventListener("blur", windowBlurListener);
      clearTimeout(timeout);
      ejectIframe(iframe);
      resolve(1);
    }

    window.addEventListener("blur", windowBlurListener);
  });
}

function App() {
  const [type, setType] = React.useState("");

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
      try {
        // window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
        setType(JSON.stringify(navigator.userAgent));

        setTimeout(function () {
          if (new Date().valueOf() - now > 100) return;
          window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
        }, 50);
        window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
      } catch (error) {
        setType(JSON.stringify(error));
        console.log("error--------------------", error);
      }
    }
    // getLinks();
  }, []);

  const getLinks = async () => {
    try {
      const res = await browserDeeplink("master.d3nu62uf8aj07x.amplifyapp.com://");
      console.log("res", res);
      console.log("application is requested to open");
      setType("application is requested to open");
      window.location.href = "master.d3nu62uf8aj07x.amplifyapp.com://";
    } catch (error) {
      console.log("error", error);
      console.log("application is not installed");
      setType("application is not installed");
      window.location.href = "https://play.google.com/store/apps/details?id=com.mycompany.myapp";
    }
  };

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
