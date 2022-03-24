import React from "react";
import { Title } from "@mantine/core";

interface SecondaryTitleProps {
  title: string;
  sx: any;
}

const SecondaryTitle: React.FC<SecondaryTitleProps> = ({ title, sx }) => {
  return (
    <Title sx={sx} order={2} style={{ fontSize: "1.375rem" }}>
      {title}
    </Title>
  );
};

export default SecondaryTitle;
