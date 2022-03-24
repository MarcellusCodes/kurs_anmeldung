import React from "react";
import { Container, Title, Group } from "@mantine/core";
import Image from "next/image";
import { SecondaryTitle } from "../index";

const NavBar: React.FC = ({ children }) => {
  return (
    <nav>
      <Container
        sx={(theme) => ({
          backgroundColor: theme.colors.red[6],
        })}
        px="2rem"
        py="1rem"
        style={{
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        }}
        fluid={true}
      >
        <Group>
          <SecondaryTitle
            sx={(theme) => ({
              color: "white",
              marginRight: "auto",
            })}
            title={"DRK Rostock - Anmeldung Excel Kurse"}
          />
          {children}
        </Group>
      </Container>
    </nav>
  );
};

export default NavBar;
