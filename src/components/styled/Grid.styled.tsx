import styled from "styled-components";

export type GridProps = {
  columns: number;
  rows: number;
};

export const Grid = styled.div<GridProps>`
  display: inline-grid;
  gap: 8px;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;
