import React from "react";
import { Card, Group, ActionIcon, useMantineTheme } from "@mantine/core";
import { Users, ClipboardList, CalendarEvent } from "tabler-icons-react";
import { SecondaryTitle, Info, InfoItem, PrimaryButton } from "../index";

interface CourseProps {
  title: string;
  date: string;
  participants: number;
}

const Course: React.FC<CourseProps> = ({ title, date, participants }) => {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg">
      <Group position="apart">
        <SecondaryTitle
          sx={(theme) => ({
            color: theme.colors.secondary[0],
          })}
          title={title}
        />
        <ActionIcon variant="light" color="red">
          <ClipboardList />
        </ActionIcon>
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
            Datum: {date}{" "}
          </InfoItem>
          <InfoItem
            icon={
              <Users size={24} strokeWidth={2} color={theme.colors.red[6]} />
            }
          >
            Teilnehmer: {participants}/10
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
          onClick={() => {}}
        >
          Lehrmaterial
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
          variant={"filled"}
          onClick={() => {}}
        >
          Anmelden
        </PrimaryButton>
      </Group>
    </Card>
  );
};

export default Course;
