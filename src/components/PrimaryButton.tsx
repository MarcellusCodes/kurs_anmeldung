import React from "react";
import { Button } from "@mantine/core";

interface PrimaryButtonProps {
  color: string;
  compact: boolean;
  disabled: boolean;
  fullWidth: boolean;
  leftIcon: undefined | React.ComponentType;
  loading: boolean;
  size: "xs" | "sm" | "md" | "lg";
  uppercase: boolean;
  type: "button" | "reset" | "submit";
  variant: any | "string";
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  color,
  compact,
  disabled,
  fullWidth,
  leftIcon,
  loading,
  size,
  uppercase,
  type,
  variant,
  onClick,
}) => {
  return (
    <Button
      radius="sm"
      color={color}
      compact={compact}
      disabled={disabled}
      fullWidth={fullWidth}
      leftIcon={leftIcon}
      loading={loading}
      size={size}
      uppercase={uppercase}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
