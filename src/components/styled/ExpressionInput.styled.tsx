import styled from "styled-components";

export type ExpressionInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const ExpressionInput = styled.input<ExpressionInputProps>`
  width: 100%;
  border: 0;
  padding: 8px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 0 2px 3px rgb(192 192 192 / 35%);
  border-radius: 2px;
  text-align: right;
  font-family: inherit;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 2px 3px rgb(192 192 192 / 55%);
  }
`;
