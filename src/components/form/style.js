import styled from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    width: 550px;
  }
  p {
    color: red;
    align-items: center;
    margin: auto;
    padding: 10px 0;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit"
})`
  border-radius: 4px;
  padding: 10px 15px;
  border: 0;
  width: 320px;
  margin: auto;
  margin-top: 7px;
  color: #fff;
  background: #ec7063;
  display: flex;
  justify-content: center;
  align-items: center;
`;
