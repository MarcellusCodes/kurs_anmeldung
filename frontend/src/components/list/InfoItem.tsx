import React from "react";
import { List } from "@mantine/core";

interface InfoItemProps {
  icon: any;
}

const InfoItem: React.FC<InfoItemProps> = ({ children, icon }) => {
  return <List.Item icon={icon}>{children}</List.Item>;
};

export default InfoItem;
