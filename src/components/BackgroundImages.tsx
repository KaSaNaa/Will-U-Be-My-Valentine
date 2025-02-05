import React from 'react';

const BackgroundImages: React.FC = () => {
  return (
    <>
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/bow.png`}
        alt="Bow"
        style={{
          position: "absolute",
          top: "-5px",
          left: "-10px",
          width: "150px",
          height: "150px",
          transform: "rotate(10deg)",
        }}
      />
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/bear.png`}
        alt="Teddy"
        style={{
          position: "absolute",
          top: "50%",
          right: "-90px",
          width: "200px",
          height: "200px",
        }}
      />
      <img
        src={`${import.meta.env.VITE_PUBLIC_URL}/heart.png`}
        alt="Heart"
        style={{
          position: "absolute",
          bottom: "18px",
          left: "-20px",
          width: "250px",
          height: "250px",
          transform: "rotate(10deg)",
        }}
      />
    </>
  );
};

export default BackgroundImages;