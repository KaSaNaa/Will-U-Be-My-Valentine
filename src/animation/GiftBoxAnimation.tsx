import React, { useReducer } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import tickets from "../assets/tickets.png";
import Confetti from "./confetti/Confetti";

interface State {
  move: string;
  jump: string;
  rotated: string;
  rotating: string;
}

const init_state: State = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};

const reducer = (state: State, new_state: Partial<State>): State => ({
  ...state,
  ...new_state
});

const GiftBoxAnimation: React.FC = () => {
  const [state, setState] = useReducer(reducer, init_state);

  const { move, rotating, rotated, jump } = state;

  const animate = () => {
    const isDone = rotated === "rotated";

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    const moving = move === "move" ? "" : "move";
    setState({ move: moving });
  };

  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <img className={`tickets ${jump}`} src={tickets} alt="tickets" />
        <button className="box" onClick={animate}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
};

export default GiftBoxAnimation;