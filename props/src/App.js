import React, { memo, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.modules.css";

// memo : 변화가 없는 부분은 다시 그리지 않음
const MemoBtn = memo(Button);

// propTypes : 타입형태를 지정할 때 사용
// isRequired : 반드시 그 형태의 유형이 들어가지 않으면 안될 때 경고
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

function App() {
  const [value, setValue] = useState("aaa");
  const changeValue = () => setValue("ccc");

  // 여기서 만든 onClick은 EventListener가 아님.
  // 단지 내가 만든 Button Component에 prop을 onClick으로 준 것 뿐
  return (
    <div>
      <h1 className={styles.title}>asdfasdf</h1>
      <MemoBtn btnName={value} onClick={changeValue} />
      <MemoBtn btnName="bbb"/>
    </div>
  );
}

export default App;
