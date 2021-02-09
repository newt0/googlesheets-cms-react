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
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  console.log("updated state >>>", data);

  return (
    <div className="app">
      <h1>Google Sheets as CMS with React</h1>
      <div id="trainer-details">
        {data.map((obj) => (
          <div key={obj.trainer}>
            <p>{obj.trainer}</p>
            <p>{obj.favDog}</p>
            <img src={obj.img} alt={obj.trainer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
