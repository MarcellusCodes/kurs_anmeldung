import React from "react";
import { Card, Group, ActionIcon, useMantineTheme, Table } from "@mantine/core";
import { Users, ClipboardList, CalendarEvent } from "tabler-icons-react";
import { SecondaryTitle, Info, InfoItem, PrimaryButton } from "../index";
import Link from "next/link";
import { useModals } from "@mantine/modals";

interface CourseProps {
  course: {
    titel: string;
    datum: string;
    teilnehmer: {
      id: string;
      name: string;
      vorname: string;
      bereich: string;
      kostenstelle: number;
    }[];
    lehrplan: {
      id: string;
      modul: string;
      dauer: number;
    }[];
    maximale_teilnehmer: number;
    schwierigkeitsgrad: string;
    id: string;
  };
}

const Course: React.FC<CourseProps> = ({ course }) => {
  const modals = useModals();
  const openCurriculaModal = () => {
    const id = modals.openModal({
      title: "Kurs Inhalte",
      children: (
        <>
          <Table>
            <thead>
              <tr>
                <th>Module</th>
                <th>Unterrichtseinheit</th>
              </tr>
            </thead>
            <tbody>
              {course.lehrplan.map((curriculum) => (
                <tr key={curriculum.id}>
                  <td>{curriculum.modul}</td>
                  <td>{curriculum.dauer}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ),
    });
  };

  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg">
      <Group position="apart">
        <SecondaryTitle
          sx={(theme) => ({
            color: theme.colors.secondary[0],
          })}
          title={course.titel}
        />
        <Link href={`/teilnehmer/${course.id}`} passHref>
          <ActionIcon variant="light" color="red">
            <ClipboardList />
          </ActionIcon>
        </Link>
      </Group>
      <Group direction="column">
        <Info
          sx={() => ({
            marginTop: "1rem",
            marginBottom: "1rem",
          })}
          spacing={"xs"}
          type="unordered"
          size="xl"
        >
          <InfoItem
            icon={
              <CalendarEvent
                size={24}
                strokeWidth={2}
                color={theme.colors.red[6]}
              />
            }
          >
            Datum: {course.datum}{" "}
          </InfoItem>
          <InfoItem
            icon={
              <Users size={24} strokeWidth={2} color={theme.colors.red[6]} />
            }
          >
            Teilnehmer: {course.teilnehmer.length}/{course.maximale_teilnehmer}
          </InfoItem>
        </Info>
      </Group>
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
          variant={"outline"}
          onClick={openCurriculaModal}
        >
          Lehrmaterial
        </PrimaryButton>

        <Link href={`/anmeldung/${course.id}`} passHref>
          <PrimaryButton
            color={"red"}
            compact={false}
            disabled={
              course.teilnehmer.length === course.maximale_teilnehmer
                ? true
                : false
            }
            fullWidth={false}
            leftIcon={undefined}
            loading={false}
            size={"md"}
            uppercase={false}
            type={"button"}
            variant={"filled"}
            onClick={() => {}}
          >
            {course.teilnehmer.length === course.maximale_teilnehmer
              ? "Kurs Voll"
              : "Anmelden"}
          </PrimaryButton>
        </Link>
      </Group>
    </Card>
  );
};

export default Course;
