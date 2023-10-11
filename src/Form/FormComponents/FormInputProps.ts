import { Control, ValidationRule } from "react-hook-form";

export interface FormInputProps {
  name: string;
  label: string;
  control: Control<any>;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
}