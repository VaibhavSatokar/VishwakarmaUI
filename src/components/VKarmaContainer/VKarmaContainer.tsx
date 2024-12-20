import React from "react";
import { Container } from "@mui/material";
import { IVKarmaContainerProps } from "./VKarmaContainer.types";



const VKarmaContainer: React.FC<IVKarmaContainerProps> = ({
  identity,
  style,
  children,
  ...props
}) => {
  return (
    <Container
      {...props}
      id={identity}
      style={style}
    >
      {children}
    </Container>
  );
};

export default VKarmaContainer;
