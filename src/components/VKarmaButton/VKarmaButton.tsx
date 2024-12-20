import React from "react";
import { Button } from "@mui/material";
import { IVKarmaButtonProps } from "./VKarmaButton.types";



const VKarmaButton: React.FC<IVKarmaButtonProps> = ({
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
