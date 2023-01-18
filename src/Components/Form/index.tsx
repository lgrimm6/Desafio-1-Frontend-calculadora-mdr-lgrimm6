import Input from "../Input";
import FormStyled from "./style";

const Form = () => {
  return (
    <FormStyled>
      <Input
        label="Informe o valor da venda *"
        /* placeholder="R$ 1.000,00" */
      ></Input>
      <Input
        label="Em quantas parcelas *"
        /* placeholder="Exemplo: 6x" */
        span="Máximo de 12 parcelas"
      ></Input>
      <Input
        label="Informe o percentual de MDR *"
        /* placeholder="Exemplo: 8%" */
      ></Input>
    </FormStyled>
  );
};

export default Form;
