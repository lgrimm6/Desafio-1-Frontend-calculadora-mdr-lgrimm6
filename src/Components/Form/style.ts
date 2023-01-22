import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 251px;
  height: auto;
  button {
    margin: 0 auto;
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
