import React, { useEffect, useState } from "react";
import "./HeartRain.css";

const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const heartArray = [];
      for (let i = 0; i < 50; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 5 + Math.random() * 5;
        heartArray.push(
          <div
            key={i}
            className="heart"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            ❤️
          </div>
        );
      }
      setHearts(heartArray);
    };

    createHearts();
  }, []);

  return <div className="heart-rain">{hearts}</div>;
};

export default HeartRain;