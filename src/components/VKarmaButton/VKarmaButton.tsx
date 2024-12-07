import React from "react";
import { Button, ButtonProps } from "@mui/material";

// Define the types for the custom props
export interface VKarmaButtonProps extends ButtonProps {
  identity: string; // Unique identifier for the component
  type?: "reset" | "submit" | "button"; // Standard button types
  onClickHandler?: () => void; // Custom onClick handler (optional for form-related buttons)
}

const VKarmaButton: React.FC<VKarmaButtonProps> = ({
  identity,
  onClickHandler,
  children,
  type = "button", // Default type is 'button'
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handle form submission or reset based on type
    if (type === "submit" || type === "reset") {
      const form = event.currentTarget.form;
      if (form) {
        type === "submit" ? form.requestSubmit() : form.reset();
      }
    }
    // Execute the custom onClick handler if provided
    if (onClickHandler) {
      onClickHandler();
    }
  };

  return (
    <Button
      {...props}
      id={identity}
      type={type}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default VKarmaButton;
