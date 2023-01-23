import * as yup from "yup";

const schemaForm = yup.object().shape({
  amount: yup
    .number()
    .min(1000)
    .max(100000000)
    .typeError("No minimo 1000")
    .required("Informe o valor em cantavos"),
  installments: yup.number(),
  mdr: yup
    .number()
    .min(1)
    .max(99)
    .typeError("informe a % de MDR de 0 a 99")
    .required("informe a % de MDR"),
  days: yup
    .string()
    .max(28)
    .matches(/^\d+(,\d+)*$/, {
      message: "valor invalido",
      excludeEmptyString: true,
    })
    .nullable(),
});

export default schemaForm;
