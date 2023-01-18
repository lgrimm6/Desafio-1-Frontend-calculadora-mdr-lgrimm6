import { InputHTMLAttributes } from "react";
import InputLabel from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label: string;
  span?: string;
}

const Input = ({ placeholder, label, span, ...rest }: IInputProps) => {
  return (
    <InputLabel>
      {label}
      <input placeholder={placeholder} {...rest} />
      {span && <span>{span}</span>}
    </InputLabel>
  );
};

export default Input;
