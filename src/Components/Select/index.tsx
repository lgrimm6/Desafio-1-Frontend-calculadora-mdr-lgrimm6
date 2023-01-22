import { v4 as uuidv4 } from "uuid";
import { ReactNode, SelectHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import SelectStyle from "./style";
import Label from "Components/Label";
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  observation?: string;
  children?: ReactNode;
  arrayOptions?: number[];
}

const Select = ({
  children,
  arrayOptions,
  label,
  observation,
  name,
  register,
  ...rest
}: ISelectProps) => {
  return (
    <Label>
      {label}
      <SelectStyle {...register(name)} {...rest}>
        {children
          ? children
          : arrayOptions?.map((element) => (
              <option value={element} key={uuidv4()}>
                Parcelado em {element} x
              </option>
            ))}
      </SelectStyle>
      <span>{observation}</span>
    </Label>
  );
};

export default Select;
