import React from 'react';
import { Button as MuiButton, SxProps } from '@mui/material';

interface ButtonProps {
  text: 'Yes' | 'No';
  onClick: () => void;
  sx?: SxProps;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, sx }) => {
  const buttonClass = text === 'Yes' ? 'MuiButton-yes' : 'MuiButton-no';

  return (
    <MuiButton className={buttonClass} onClick={onClick} sx={sx}>
      {text}
    </MuiButton>
  );
};

export default Button;