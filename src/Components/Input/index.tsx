import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Label from "Components/Label";
import InputStyle from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  label: string;
  span?: string;
}

const Input = ({
  placeholder,
  label,
  span,
  register,
  name,
  ...rest
}: IInputProps) => {
  return (
    <Label>
      {label}
      <InputStyle placeholder={placeholder} {...register(name)} {...rest} />
      {span && <span>{span}</span>}
    </Label>
  );
};

export default Input;
