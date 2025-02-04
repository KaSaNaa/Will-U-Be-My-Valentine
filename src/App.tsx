import React from "react";
import { useNavigate } from "react-router-dom";
import ValentinePage from "./components/ValentinePage";

interface AppProps {
  setAccessGranted: (access: boolean) => void;
}

const App: React.FC<AppProps> = ({ setAccessGranted }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    setAccessGranted(true);
    navigate("/gift");
  };

  const handleNoClick = () => {
    alert("You broke my heart 💔");
  };

  return (
    <ValentinePage
      questionText="Will you be my valentine?"
      yesGif="/src/assets/happy.gif"
      noGif="/src/assets/crying.gif"
      onYesClick={handleYesClick}
      onNoClick={handleNoClick}
    />
  );
};

export default App;