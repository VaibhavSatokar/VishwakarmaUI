import { ButtonProps } from "@mui/material";

// Define the types for the custom props
export interface IVKarmaButtonProps extends ButtonProps {
  identity: string; // Unique identifier for the component
  type?: "reset" | "submit" | "button"; // Standard button types
  onClickHandler?: () => void; // Custom onClick handler (optional for form-related buttons)
}