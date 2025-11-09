import "./App.css";
import Square from "./Components/Square.jsx";
import { useState } from "react";

export default function Board() {
  const [squares_array, updateSquareValue] = useState(Array(9).fill(null));
  const [is2ndUser, update2ndUser] = useState(false);

  function handleSquareClickFromBoard(i) {
    const new_squares = squares_array.slice();
    // if the value is already populate and not null, dont update it
    if (new_squares[i]) {
      return;
    }

    if (!is2ndUser) {
      new_squares[i] = "O";
      update2ndUser(true);
    } else {
      new_squares[i] = "X";
      update2ndUser(false);
    }

    // update2ndUser(!is2ndUser);
    updateSquareValue(new_squares);
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square
          identifier={1}
          value={squares_array[0]}
          onSquareClick={() => handleSquareClickFromBoard(0)}
        />
        <Square
          identifier={2}
          value={squares_array[1]}
          onSquareClick={() => handleSquareClickFromBoard(1)}
        />
        <Square
          identifier={3}
          value={squares_array[2]}
          onSquareClick={() => handleSquareClickFromBoard(2)}
        />
      </div>
      <div className="board-row">
        <Square
          identifier={4}
          value={squares_array[3]}
          onSquareClick={() => handleSquareClickFromBoard(3)}
        />
        <Square
          identifier={5}
          value={squares_array[4]}
          onSquareClick={() => handleSquareClickFromBoard(4)}
        />
        <Square
          identifier={6}
          value={squares_array[5]}
          onSquareClick={() => handleSquareClickFromBoard(5)}
        />
      </div>
      <div className="board-row">
        <Square
          identifier={7}
          value={squares_array[6]}
          onSquareClick={() => handleSquareClickFromBoard(6)}
        />
        <Square
          identifier={8}
          value={squares_array[7]}
          onSquareClick={() => handleSquareClickFromBoard(7)}
        />
        <Square
          identifier={9}
          value={squares_array[8]}
          onSquareClick={() => handleSquareClickFromBoard(8)}
        />
      </div>
    </div>
  );
}
