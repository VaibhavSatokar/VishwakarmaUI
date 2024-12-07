import React from "react";
import { Container, ContainerProps } from "@mui/material";

// Define the types for the custom props
export interface VKarmaContainerProps extends ContainerProps {
  identity: string; // Unique identifier for the container
  style?: React.CSSProperties; // Optional custom style
}

const VKarmaContainer: React.FC<VKarmaContainerProps> = ({
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
