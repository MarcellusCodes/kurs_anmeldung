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
  CourseInfo,
  SecondaryTitle,
  LayoutContainer,
} from "../../src/components/index";
import {
  ShieldLock,
  School,
  Users,
  CalendarEvent,
  Trash,
  WritingSign,
} from "tabler-icons-react";
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
  Table,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Teilnehmer: NextPage = () => {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      name: "",
      vorname: "",
      bereich: "",
      kostenstelle: "",
    },
  });
  const course = {
    title: "Excel Grundlagen",
    date: "11.03.2022",
    participants: [
      {
        id: "439432dssadsakje3",
        name: "Doe",
        vorname: "John",
        bereich: "RW1",
        kostenstelle: 4343,
      },
    ],
    curricula: [
      {
        id: "4328hdsat32",
        module: "Schnelles Formatieren",
        lesson: 1,
      },
    ],
    max_participants: 10,
    difficulty: "Grundlagen",
    id: "436dsdsjhdsau217",
  };
  return (
    <>
      <Head>
        <title>DRK Rostock Kurs Teilnehmer</title>
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
      <LayoutContainer>
        <header>
          <PrimaryTitle
            icon={
              <Users size={36} strokeWidth={2} color={theme.colors.red[6]} />
            }
            title={"Kurs Teilnehmer"}
          />

          <Divider my="2rem" size="sm" />
        </header>

        <CourseInfo
          title={course.title}
          date={course.date}
          participants={course.participants}
          max_participants={course.max_participants}
        />
        <Space h="2rem" />
        <Card shadow="sm" p="lg">
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Vorname</th>
                <th>Bereich</th>
                <th>Kostenstelle</th>
                <th>Optionen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Klingbeil</td>
                <td>Jan</td>
                <td>KiJu</td>
                <td>533232</td>
                <td>
                  <PrimaryButton
                    color={"red"}
                    compact={false}
                    disabled={false}
                    fullWidth={false}
                    leftIcon={<Trash />}
                    loading={false}
                    size={"sm"}
                    uppercase={false}
                    type={"button"}
                    variant={"outline"}
                    onClick={() => {}}
                  >
                    Löschen
                  </PrimaryButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </LayoutContainer>
    </>
  );
};

export default Teilnehmer;