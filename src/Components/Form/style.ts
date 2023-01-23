import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 251px;
  height: auto;
  .yupError {
    margin-left: 5px;
    height: 12px;
    font-size: 11px;
    color: red;
  }
  button {
    margin: 10px auto;
    width: 100px;
    padding: 5px;
    border: 1px solid #dde6e9;

    &:hover {
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export default FormStyled;
