import "../App.css";

function handleSquareClick(props) {
  console.log("Square " + props.value + " is clicked");
}

// value needs to be destructured {}, so that it can be used
// this destructuring should happen at both the function argument level & at the display level in jsx
// to escape from jsx into javascript we use {} around value
export default function Square(props) {
  // function handleSquareClick() {
  //   console.log("Square is clicked");
  // }

  return (
    <button className="square" onClick={() => handleSquareClick(props)}>
      {props.value} {props.model}
    </button>
  );
}
