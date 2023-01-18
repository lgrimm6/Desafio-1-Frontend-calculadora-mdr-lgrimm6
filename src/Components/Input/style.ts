import styled from "styled-components";

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #656565;
  gap: 6px;
  input {
    width: 251px;
    height: 37px;
    border: 1px solid #dde6e9;
    border-radius: 4px;

    &:hover {
      border-color: #5d9cec;
    }
  }
  span {
    font-size: 11px;
    color: #cecece;
  }
`;

export default InputLabel;
