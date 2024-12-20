import React, { CSSProperties, useState, ChangeEvent } from "react";
import { SxProps, TextField, TextFieldProps } from "@mui/material";
import { IVKarmaTextFieldProps } from "./VKarmaTextfield.types";


const VKarmaTextField: React.FC<IVKarmaTextFieldProps> = ({
  identity,
  value,
  validation,
  label,
  style,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [error, setError] = useState<string | null>(null);

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event); // Call the parent-provided onChange handler
    }
  };

  // Validate the input value
  const handleValidation = () => {
    const validationError = validation(inputValue);
    if (validationError) {
      setError(validationError);
    } else {
      setError(null);
    }
  };

  return (
    <TextField
      {...props}
      id={identity}
      label={label}
      value={inputValue}
      onChange={handleChange}
      error={Boolean(error)}
      helperText={error}
      onBlur={handleValidation} // Trigger validation on blur
      style={style} // Apply custom styles
      fullWidth
    />
  );
};

export default VKarmaTextField;
