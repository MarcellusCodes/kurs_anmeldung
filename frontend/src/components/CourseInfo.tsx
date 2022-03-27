import React from "react";
import { Group, useMantineTheme } from "@mantine/core";
import { Info, InfoItem } from "./index";
import { School, Users, CalendarEvent } from "tabler-icons-react";

interface CourseInfoProps {
  titel: string;
  datum: string;
  teilnehmer: {
    id: string;
    name: string;
    vorname: string;
    bereich: string;
    kostenstelle: number;
  }[];
  maximale_teilnehmer: number;
}

const CourseInfo: React.FC<CourseInfoProps> = ({
  titel,
  datum,
  teilnehmer,
  maximale_teilnehmer,
}) => {
  const theme = useMantineTheme();
  return (
    <Info sx={() => ({})} spacing={0} type="unordered" size="xl">
      <Group position="center" align="center">
        <InfoItem
          icon={
            <School size={24} strokeWidth={2} color={theme.colors.red[6]} />
          }
        >
          {titel}
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
          Datum: {datum}
        </InfoItem>
        <InfoItem
          icon={<Users size={24} strokeWidth={2} color={theme.colors.red[6]} />}
        >
          Teilnehmer: {teilnehmer && teilnehmer.length}/{maximale_teilnehmer}
        </InfoItem>
      </Group>
    </Info>
  );
};

export default CourseInfo;
