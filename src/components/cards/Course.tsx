import React from "react";
import { Card, Group, ActionIcon } from "@mantine/core";
import { Users, ClipboardList } from "tabler-icons-react";
import { SecondaryTitle } from "../index";

const Course = () => {
  return (
    <Card shadow="sm" p="lg">
      <Group position="apart">
        <SecondaryTitle
          sx={(theme) => ({
            color: theme.colors.secondary[0],
          })}
          title={"Excel Grundlagen"}
        />
        <ActionIcon color="red">
          <ClipboardList />
        </ActionIcon>
      </Group>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Book classic tour now
      </Button>
    </Card>
  );
};

export default Course;
