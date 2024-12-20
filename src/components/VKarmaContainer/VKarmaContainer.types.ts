import { ContainerProps } from "@mui/material";

// Define the types for the custom props
export interface IVKarmaContainerProps extends ContainerProps {
  identity: string; // Unique identifier for the container
  style?: React.CSSProperties; // Optional custom style
}