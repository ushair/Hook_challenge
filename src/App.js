import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isStyle, setStyle] = useState();

  function changestyle() {
    setStyle(!isStyle);
  }
  const styleheading = {
    textDecoration: "line-through",
    backgroundColor: "blue"
  };
  return (
    <div className="App">
      <h1 style={isStyle ? styleheading : null}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={changestyle}>Change Style</button>
    </div>
  );
}
