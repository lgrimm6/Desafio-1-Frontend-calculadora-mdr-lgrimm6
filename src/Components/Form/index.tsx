import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import schemaForm from "validations";
import Select from "Components/Select";
import Input from "Components/Input";
import toast from "react-hot-toast";
import FormStyled from "./style";
import api from "services";

interface IData {
  amount?: number;
  installments?: number;
  days?: string | number[];
  mdr?: number;
}

const Form = ({ setResultDays }: any) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });
  const treatedFormData = (data: IData) => {
    if (data.days === "") {
      delete data.days;
    } else if (data.days) {
      data.days = (data.days as string)
        .split(",")
        .map((value: string) => Number(value));
    }
    return data;
  };

  async function requestForm(dataForm: IData): Promise<AxiosResponse> {
    const data = api
      .post("", treatedFormData(dataForm))
      .then((res) => {
        setResultDays(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 408) {
          toast.error("Tempo Esgotado, Tente novamente");
        } else if (error.response.status === 500) {
          toast.error("Erro no servidor, Tente novamente mais tarde");
        } else {
          toast.error(error.response.data);
        }
      });
    return data;
  }
  const mutation = useMutation({ mutationFn: requestForm });
  return (
    <>
      <FormStyled
        onSubmit={handleSubmit((dataForm) => mutation.mutate(dataForm))}
      >
        <Input
          label="Informe o valor da venda *"
          register={register}
          name="amount"
        ></Input>
        <Select
          label={"Em quantas parcelas *"}
          observation={"Máximo de 12 parcelas"}
          register={register}
          name={"installments"}
          arrayOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        ></Select>
        <Input
          label="Informe o percentual de MDR *"
          register={register}
          name="mdr"
        ></Input>
        <Input
          label="Informe em quantos dias deseja receber"
          placeholder="Ex: 5,20,30,50"
          register={register}
          name="days"
        ></Input>
        <button disabled={!isValid} id="simulationButton">
          {mutation.isLoading ? "Calculando" : "Simular"}
        </button>
      </FormStyled>
    </>
  );
};
export default Form;
