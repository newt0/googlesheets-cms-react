import React, { useState, useEffect } from "react";
import "./App.css";
import Tabletop from "tabletop";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1h3lSahG8BHHv7nhYFvctyv32Sf9MQBcCRCBk3gZdNOk",
      callback: (googleData) => {
        console.log("googleData>>>", googleData);
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <div className="app">
      <h1>Google Sheets as CMS with React</h1>
    </div>
  );
};

export default App;
