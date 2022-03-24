import React from "react";
import { List } from "@mantine/core";

interface InfoProps {
  sx: any;
  spacing: number | "xs" | "sm" | "md" | "lg" | "xl";
  type: "ordered" | "unordered";
  size: number | "xs" | "sm" | "md" | "lg" | "xl";
}

const Info: React.FC<InfoProps> = ({ children, sx, spacing, type, size }) => {
  return (
    <List sx={sx} spacing={spacing} type={type} size={size}>
      {children}
    </List>
  );
};

export default Info;
