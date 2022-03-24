import React from "react";
import { Space, Group } from "@mantine/core";
import { School } from "tabler-icons-react";
import { PrimaryTitle, Course } from "./index";

const CourseSection = () => {
  return (
    <>
      <Space h="4rem" />
      <PrimaryTitle
        icon={<School size={36} strokeWidth={2} color={theme.colors.red[6]} />}
        title={"Excel Grundlagen"}
      />
      <Space h="2rem" />
      <Group>
        <Course
          title={"Excel Grundlagen"}
          date={"11.03.2022"}
          participants={9}
        />
      </Group>
    </>
  );
};

export default CourseSection;
