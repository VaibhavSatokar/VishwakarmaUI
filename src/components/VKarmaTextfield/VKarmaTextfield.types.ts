import { TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface IVKarmaTextFieldProps extends Omit<TextFieldProps, "onChange"> {
  identity: string; // Unique identifier for the component
  label: string;
  value: any; // The data passed into the component
  validation: (data: any) => string | null; // Validation function that returns an error message or null
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // Custom onChange handler
}
