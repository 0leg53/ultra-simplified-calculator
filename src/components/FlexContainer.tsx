import React from "react";

import * as styled from "./styled";

type Props = React.PropsWithChildren<styled.FlexContainerProps>;

export const FlexContainer: React.FC<Props> = (props) => {
  return <styled.FlexContainer {...props} />;
};
