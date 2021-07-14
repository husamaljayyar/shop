import styled from "styled-components";
import { Field, Form } from "formik";

export const Forms = styled(Form)`
  margin-top: 20px;
`;

export const Input = styled(Field)` 
  outline: none;
  height: 40px;
  width: ${props => props.Width ? 360 : 398}px;
  border-radius: 6px;
  opacity: 1;
  font-size: 14px;
  padding: 11px;
  color: #707070;
  margin-bottom: 22px;
  border: 1px solid #242424;
  ${(props) => props.MarginLeft && ` margin-left: 50px`};
  &::placeholder {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;
