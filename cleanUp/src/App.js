import React, { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(()=>{
    console.log("created!!!!! happy!!!");
    return () => console.log('destroyed....ㅠㅠ')
  }, [])

  const Hello = () => {
    return <h1>Hello</h1>;
  };

  const Bye = () => {
    return <h1>Bye</h1>;
  };

  const onClick = () => {
    setCount(count + 1);
    console.log(count);
    setToggle((prev) => !prev);
  };

  return (
    <div>
      {toggle ? <Hello /> : <Bye />}
      <button onClick={onClick}>{toggle ? "앞" : "뒤"}</button>
    </div>
  );
}

export default App;
