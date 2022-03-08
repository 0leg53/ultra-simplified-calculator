import React from "react";

import * as styled from "./styled";

type Props = React.PropsWithChildren<styled.CalcButtonProps>;

export const CalcButton: React.FC<Props> = ({
  children,
  onClick,
  color = "primary",
}) => {
  return (
    <styled.CalcButton color={color} onClick={onClick}>
      {children}
    </styled.CalcButton>
  );
};
