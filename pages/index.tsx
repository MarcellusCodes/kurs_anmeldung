import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  NavBar,
  PrimaryButton,
  NavButton,
  PrimaryTitle,
  Info,
  InfoItem,
  Course,
} from "../src/components/index";
import { ShieldLock, Help, Bell, School } from "tabler-icons-react";
import {
  Container,
  Title,
  Group,
  useMantineTheme,
  List,
  Divider,
  Space,
} from "@mantine/core";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>DRK Rostock Kurs Anmeldung</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <NavButton
          onClick={() => {}}
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
      </NavBar>

      <Container
        sx={(theme) => ({
          backgroundColor: theme.colors.primary[0],
        })}
        px="2rem"
        py="1rem"
        fluid={true}
      >
        <Container size="lg" py="2rem">
          <header>
            <PrimaryTitle
              icon={
                <Bell size={36} strokeWidth={2} color={theme.colors.red[6]} />
              }
              title={"Hinweise"}
            />
            <Info
              sx={(theme) => ({
                marginTop: "2rem",
              })}
              spacing="sm"
              type="ordered"
              size="xl"
            >
              <InfoItem>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </InfoItem>
              <InfoItem>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </InfoItem>
              <InfoItem>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </InfoItem>
              <InfoItem>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </InfoItem>
              <InfoItem>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </InfoItem>
            </Info>
            <Divider my="2rem" size="sm" />
          </header>
          <PrimaryTitle
            icon={
              <School size={36} strokeWidth={2} color={theme.colors.red[6]} />
            }
            title={"Kurse"}
          />
          <Space h="2rem" />
          <Group>
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
              onClick={() => {}}
            >
              Alle
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Grundlagen
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Aufbau I
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Aufbau II
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Aufbau III
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Datum
            </PrimaryButton>
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
              variant={"outline"}
              onClick={() => {}}
            >
              Freie
            </PrimaryButton>
          </Group>
          <Space h="4rem" />
          <PrimaryTitle
            icon={
              <School size={36} strokeWidth={2} color={theme.colors.red[6]} />
            }
            title={"Excel Grundlagen"}
          />
          <Space h="2rem" />
          <Group>
            <Course
              title={"Excel Grundlagen"}
              date={'11.03.2022'}
              participants={9}
            />
          </Group>
        </Container>
      </Container>
    </>
  );
};

export default Home;
