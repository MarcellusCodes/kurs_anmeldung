import React, { useState } from "react";
import {
  Container,
  Title,
  Group,
  PasswordInput,
  TextInput,
  Space,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { SecondaryTitle, NavButton, PrimaryButton } from "../index";
import { ShieldLock, Help } from "tabler-icons-react";
import { useModals } from "@mantine/modals";
import { useForm } from "@mantine/form";

const NavBar: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const modals = useModals();

  const openAdminModal = () => {
    const id = modals.openModal({
      title: "Admin",
      children: (
        <>
          {authenticated ? (
            <>
              <SecondaryTitle
                sx={() => ({
                  marginBottom: "2rem",
                })}
                title="Sie sind bereits eingeloggt"
              />
              <PrimaryButton
                color={"red"}
                compact={false}
                disabled={false}
                fullWidth={false}
                leftIcon={undefined}
                loading={false}
                size={"md"}
                uppercase={false}
                type={"button"}
                variant={"filled"}
                onClick={() => {
                  modals.closeModal(id);
                }}
              >
                Abmelden
              </PrimaryButton>
            </>
          ) : (
            <Link href="/admin" passHref>
              <PrimaryButton
                color={"red"}
                compact={false}
                disabled={false}
                fullWidth={false}
                leftIcon={undefined}
                loading={false}
                size={"md"}
                uppercase={false}
                type={"button"}
                variant={"filled"}
                onClick={() => {
                  modals.closeModal(id);
                }}
              >
                Anmelden
              </PrimaryButton>
            </Link>
          )}
        </>
      ),
    });
  };
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
          <NavButton
            onClick={openAdminModal}
            leftIcon={<ShieldLock size={24} strokeWidth={2} color={"white"} />}
          >
            Admin
          </NavButton>
          <NavButton
            onClick={() => {}}
            leftIcon={<Help size={24} strokeWidth={2} color={"white"} />}
          >
            Hilfe
          </NavButton>
        </Group>
      </Container>
    </nav>
  );
};

export default NavBar;
