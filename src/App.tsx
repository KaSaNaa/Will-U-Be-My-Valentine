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
      yesGif={`${import.meta.env.PUBLIC_URL}/happy.gif`}
      noGif={`${import.meta.env.PUBLIC_URL}/crying.gif`}
      onYesClick={handleYesClick}
      onNoClick={handleNoClick}
    />
  );
};

export default App;