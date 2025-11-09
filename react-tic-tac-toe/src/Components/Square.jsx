import "../App.css";
import { useState } from "react";

// value needs to be destructured {}, so that it can be used
// this destructuring should happen at both the function argument level & at the display level in jsx
// to escape from jsx into javascript we use {} around value
export default function Square(props) {
  // function handleSquareClick() {
  //   console.log("Square is clicked");
  // }
  const [initialValue, updateStateFunction] = useState("O");

  function handleSquareClick(props) {
    console.log("Square " + props.value + " is clicked");
    updateStateFunction("X");
  }

  return (
    <button className="square" onClick={() => handleSquareClick(props)}>
      {props.value} : {initialValue}
    </button>
  );
}
