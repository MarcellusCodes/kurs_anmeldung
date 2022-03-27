import React from "react";
import { Space, Group, useMantineTheme } from "@mantine/core";
import { School } from "tabler-icons-react";
import { PrimaryTitle, Course, SecondaryTitle } from "./index";

interface CourseSectionProps {
  title: string;
  courses: {
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
    schwierigkeitsgrad: string;
    id: string;
  }[];
  difficulty: string;
}

const CourseSection: React.FC<CourseSectionProps> = ({
  title,
  courses,
  difficulty,
}) => {
  const theme = useMantineTheme();
  const checkCourses =
    courses &&
    courses.filter((course) => course.schwierigkeitsgrad === difficulty);
  return (
    <>
      <Space h="4rem" />
      <PrimaryTitle
        icon={<School size={36} strokeWidth={2} color={theme.colors.red[6]} />}
        title={`${title}`}
      />
      <Space h="2rem" />
      <Group>
        {checkCourses && checkCourses.length > 0 ? (
          checkCourses.map((filteredCourse) => (
            <div key={filteredCourse.id}>
              <Course course={filteredCourse} />
            </div>
          ))
        ) : (
          <SecondaryTitle
            sx={(theme) => ({
              color: theme.colors.red[6],
            })}
            title={"Keine Kurse vorhanden"}
          />
        )}
      </Group>
    </>
  );
};

export default CourseSection;
