import React from "react";
import { List } from "@mantine/core";

const InfoItem: React.FC = ({ children }) => {
  return <List.Item>{children}</List.Item>;
};

export default InfoItem;
