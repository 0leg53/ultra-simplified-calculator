import React from "react";

import * as styled from "./styled";

type Props = React.PropsWithChildren<styled.GridProps>;

export const Grid: React.FC<Props> = (props) => {
  return <styled.Grid {...props} />;
};
