import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  NavBar,
  PrimaryButton,
  NavButton,
  PrimaryTitle,
  Info,
  InfoItem,
  Course,
  CourseSection,
  SecondaryTitle,
} from "../../src/components/index";
import { ShieldLock, School, Users, CalendarEvent } from "tabler-icons-react";
import {
  Container,
  Title,
  Group,
  useMantineTheme,
  List,
  Divider,
  Space,
  TextInput,
  PasswordInput,
  Card,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Anmeldung: NextPage = () => {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      name: "",
      vorname: "",
      bereich: "",
      kostenstelle: "",
    },
  });
  return (
    <>
      <Head>
        <title>DRK Rostock Kurs Anmeldung</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <Link href="/" passHref>
          <NavButton
            onClick={() => {}}
            leftIcon={<School size={24} strokeWidth={2} color={"white"} />}
          >
            Kurse
          </NavButton>
        </Link>
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
                <ShieldLock
                  size={36}
                  strokeWidth={2}
                  color={theme.colors.red[6]}
                />
              }
              title={"Kurs Anmeldung"}
            />

            <Divider my="2rem" size="sm" />
          </header>

          <Info sx={() => ({})} spacing={0} type="unordered" size="xl">
            <Group position="center" align="center">
              <InfoItem
                icon={
                  <School
                    size={24}
                    strokeWidth={2}
                    color={theme.colors.red[6]}
                  />
                }
              >
                Excel Grundlagen
              </InfoItem>
              <InfoItem
                icon={
                  <CalendarEvent
                    size={24}
                    strokeWidth={2}
                    color={theme.colors.red[6]}
                  />
                }
              >
                Datum: 11.03.2022
              </InfoItem>
              <InfoItem
                icon={
                  <Users
                    size={24}
                    strokeWidth={2}
                    color={theme.colors.red[6]}
                  />
                }
              >
                Teilnehmer: 1/10
              </InfoItem>
            </Group>
          </Info>
          <Space h="2rem" />
          <Card
            sx={(theme) => ({
              maxWidth: 500,
              margin: "auto",
            })}
            shadow="sm"
            p="lg"
          >
            <SecondaryTitle
              sx={(theme) => ({
                textAlign: "center",
              })}
              title="Anmeldeformular"
            />
            <Space h="2rem" />
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                sx={(theme) => ({
                  "&:focus-within": {
                    outline: "none",
                    borderColor: "#ddd",
                  },
                })}
                required
                radius="sm"
                size="md"
                label="Name"
                placeholder="Krüger"
                {...form.getInputProps("name")}
              />
              <Space h="1rem" />
              <TextInput
                required
                radius="sm"
                size="md"
                label="Vorname"
                placeholder="John"
                {...form.getInputProps("vorname")}
              />
              <Space h="1rem" />
              <TextInput
                required
                radius="sm"
                size="md"
                label="Bereich"
                placeholder="RW1"
                {...form.getInputProps("bereich")}
              />
              <Space h="1rem" />
              <TextInput
                required
                radius="sm"
                size="md"
                label="Kostenstelle"
                placeholder="13462"
                {...form.getInputProps("kostenstelle")}
              />
              <Space h="2rem" />
              <PrimaryButton
                color={"red"}
                compact={false}
                disabled={false}
                fullWidth={true}
                leftIcon={undefined}
                loading={false}
                size={"md"}
                uppercase={false}
                type={"submit"}
                variant={"filled"}
                onClick={() => {
                  console.log(form.values);
                }}
              >
                Anmelden
              </PrimaryButton>
            </form>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Anmeldung;
