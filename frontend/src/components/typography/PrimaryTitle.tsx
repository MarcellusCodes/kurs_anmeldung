import React from "react";
import { Group, Title } from "@mantine/core";

interface PrimaryTitleProps {
  icon: any;
  title: string;
}

const PrimaryTitle: React.FC<PrimaryTitleProps> = ({ icon, title }) => {
  return (
    <Group>
      {icon}
      <Title
        sx={(theme) => ({
          color: theme.colors.secondary[0],
          fontWeight: "normal",
        })}
        order={1}
      >
        {title}
      </Title>
    </Group>
  );
};

export default PrimaryTitle;
