import { StackProps } from "@mui/material";

// Define the types for the custom props
export interface IVKarmaStackProps extends StackProps {
  identity: string; // Unique identifier for the stack
  direction?: 'row' | 'column'; // Stack direction (optional)
  spacing?: number; // Space between items (optional)
}