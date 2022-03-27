import React from "react";
import { TextInput } from "@mantine/core";

interface FormTextInputProps {
  label: string;
  placeholder: string;
  input_recognizer: any;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  label,
  placeholder,
  input_recognizer,
}) => {
  return (
    <TextInput
      required
      radius="sm"
      size="md"
      label={label}
      placeholder={placeholder}
      {...input_recognizer}
    />
  );
};

export default FormTextInput;
