import React from "react";
import { Container } from "@mantine/core";
const LayoutContainer: React.FC = ({ children }) => {
  return (
    <Container
      sx={(theme) => ({
        backgroundColor: theme.colors.primary[0],
      })}
      px="2rem"
      py="1rem"
      fluid={true}
    >
      <Container size="lg" py="2rem">
        {children}
      </Container>
    </Container>
  );
};

export default LayoutContainer;
