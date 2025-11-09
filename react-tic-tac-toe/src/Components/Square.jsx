import "../App.css";
import { useState } from "react";

// value needs to be destructured {}, so that it can be used
// this destructuring should happen at both the function argument level & at the display level in jsx
// to escape from jsx into javascript we use {} around value
export default function Square(props) {

  // const [initialValue, updateStateFunction] = useState("O");

  // function handleSquareClick(squareProps) {
  //   console.log("Square " + squareProps.identifier + " is clicked");
  //   // updateStateFunction("X");
  // }

  function handleSquareClick(squareProps){
    console.log("Square " + squareProps.identifier + " has been clicked !!");
    squareProps.onSquareClick();
  }
  
  return (
    <button className="square" onClick={() => handleSquareClick(props)}>
      {props.identifier} : {props.value}
    </button>
  );
}
