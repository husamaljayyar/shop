import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";

export const RowContainer = styled(FlexRow)`
  justify-content: flex-start;
`;

export const ColumnContainer = styled(FlexColumn)((props) => ({
  justifyContent: "space-between",
  alignItems: "flex-start",
  minHeight: "96px",
  width: "316px",
}));

export const OrderItem = styled(FlexColumn)`
  min-height: 96px;
  margin-bottom: 38px;
`;
export const OrderDetailImg = styled("img")`
  width: 135px;
  height: 90px;
  object-fit: contain;
`;

export const Divider = styled("div")`
  width: 100%;
  height: 2px;
  background-color: #ddd;
`;
