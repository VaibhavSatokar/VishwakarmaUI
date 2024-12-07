import React from "react";
import { Stack, StackProps } from "@mui/material";

// Define the types for the custom props
export interface VKarmaStackProps extends StackProps {
  identity: string; // Unique identifier for the stack
  direction?: 'row' | 'column'; // Stack direction (optional)
  spacing?: number; // Space between items (optional)
}

const VKarmaStack: React.FC<VKarmaStackProps> = ({
  identity,
  direction = "column", // Default to column direction
  spacing = 2, // Default spacing of 2
  style,
  children,
  ...props
}) => {
  return (
    <Stack
      {...props}
      id={identity}
      direction={direction}
      spacing={spacing}
      style={style}
    >
      {children}
    </Stack>
  );
};

export default VKarmaStack;
