import React, { useReducer } from "react";
import "./styles.css";
import Confetti from "./confetti/Confetti";

const box = import.meta.env.VITE_PUBLIC_URL + "/box.png";
const boxLid = import.meta.env.VITE_PUBLIC_URL + "/lid.png";
const tickets = import.meta.env.VITE_PUBLIC_URL + "/tickets.png";

interface State {
  move: string;
  jump: string;
  rotated: string;
  rotating: string;
  animated: string;
}

const init_state: State = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
  animated: ""
};

const reducer = (state: State, new_state: Partial<State>): State => ({
  ...state,
  ...new_state
});

const GiftBoxAnimation: React.FC = () => {
  const [state, setState] = useReducer(reducer, init_state);

  const { move, rotating, rotated, jump, animated } = state;

  const animate = () => {
    const isDone = rotated === "rotated";

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated", animated: "animated" });
        console.log("Tickets animation triggered");
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
        <img className={`tickets ${animated}`} src={tickets} alt="tickets" />
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