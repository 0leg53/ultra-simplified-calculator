import React from "react";

import * as styled from "./styled";

interface Props extends styled.ExpressionBlockProps {
  value?: string;
}
export const ExpressionBlock: React.FC<Props> = (props) => {
  return (
    <styled.ExpressionBlock>
      <styled.ExpressionInput readOnly value={props.value || "0"} />
    </styled.ExpressionBlock>
  );
};
