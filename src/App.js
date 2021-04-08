import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isStyle, setStyle] = useState();
  const [number, setNumber] = useState(0);
  function changestyle() {
    setStyle(!isStyle);
  }
  function change() {
    return setNumber(number + 1);
  }
  const styleheading = {
    textDecoration: "line-through",
    backgroundColor: "blue"
  };
  useEffect(() => {
    if (number === 5) alert("hello world");
  });

  return (
    <div className="App">
      <h1 style={isStyle ? styleheading : null}>Hello {number} CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={changestyle}>Change Style</button>
      <button onClick={change}>Change</button>
    </div>
  );
}
