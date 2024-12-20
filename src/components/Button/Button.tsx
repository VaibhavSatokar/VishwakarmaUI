import React from 'react';
import { ButtonProps } from './Button.types';

const VKButton: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button onClick={onClick} className={variant} disabled={disabled}>
      {label}
    </button>
  );
};

export default VKButton;
