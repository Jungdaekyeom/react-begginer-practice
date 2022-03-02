import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => console.log("call the api..."), []);

  useEffect(() => console.log("rendering..." + text), [text]);

  const onChange = (e) => {
    let text = e.target.value;
    setText(text);
  };

  const onClick = () => {
    console.log("render");
    return setValue((prev) => prev + 1);
  };

  return (
    <div className="App">
      <input
        value={text}
        onChange={onChange}
        type="text"
        placeholder="글 삽입"
      ></input>
      <button onClick={onClick}>{value}</button>
    </div>
  );
}

export default App;
