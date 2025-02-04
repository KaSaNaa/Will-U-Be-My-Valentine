import React, { Fragment } from "react";
import "./confetti.scss";

interface ConfettiProps {
  open: boolean;
}

const count = 200;

const Confetti: React.FC<ConfettiProps> = ({ open }) => {
  const generatePoints = () => {
    const points = [];
    for (let i = 0; i < count; i++) {
      points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
    }
    return points;
  };

  const confetti = generatePoints();

  return (
    <Fragment>
      <div className={`confetti ${open ? "animated" : ""}`}>
        {confetti.map((c) => c)}
      </div>
    </Fragment>
  );
};

export default Confetti;