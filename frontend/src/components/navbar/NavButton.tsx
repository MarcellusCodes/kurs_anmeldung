import React from "react";
import { Button } from "@mantine/core";

interface PrimaryButtonProps {
  leftIcon: any;
  onClick: () => void;
}

const NavButton: React.FC<PrimaryButtonProps> = ({
  children,
  leftIcon,
  onClick,
}) => {
  return (
    <Button
      sx={(theme) => ({
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, .25)",
        },
      })}
      radius="sm"
      leftIcon={leftIcon}
      size={"sm"}
      uppercase={true}
      type={"button"}
      variant={"subtle"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default NavButton;
