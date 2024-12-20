import React from "react";
import { Stack, StackProps } from "@mui/material";
import { IVKarmaStackProps } from "./VKarmaStack.types";



const VKarmaStack: React.FC<IVKarmaStackProps> = ({
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
