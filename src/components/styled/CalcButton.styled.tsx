import React from "react";
import styled from "styled-components";

export type CalcButtonProps = {
  color?: "primary" | "secodary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CalcButton = styled.button<CalcButtonProps>`
  font-family: inherit;
  height: 36px;
  width: 36px;
  padding: 0;
  box-sizing: content-box;
  border: 0;
  background: ${(props) => (props.color === "primary" ? "#ccc" : "tomato")};
  color: #333;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgb(204, 204, 204);
  cursor: pointer;
  transition: ease 0.2s background;
  &:hover,
  &:focus {
    background: ${(props) => (props.color === "primary" ? "#ddd" : "#ff4422")};
  }
`;
