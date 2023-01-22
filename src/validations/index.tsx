import * as yup from "yup";

const schemaForm = yup.object().shape({
  amount: yup
    .number()
    .min(1000)
    .max(100000000)
    .required("Informe o valor em cantavos"),
  installments: yup.number(),
  mdr: yup.number().required("informe a % de MDR"),
  days: yup
    .string()
    .matches(/^\d+(,\d+)*$/, {
      message: "valor invalido",
      excludeEmptyString: true,
    })
    .nullable(),
});

export default schemaForm;
