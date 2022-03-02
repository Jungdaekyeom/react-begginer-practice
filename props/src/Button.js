import React from "react";

function Button({ btnName, onClick }) {
  console.log("re-rendering");
  return <button onClick={onClick}>{btnName}</button>;
}

export default Button;
