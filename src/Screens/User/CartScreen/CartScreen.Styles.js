import styled from "styled-components";
import {
  FlexColumn,
  InnerSection,
  FlexRow,
  Typography,
} from "../../../App.Styles";

export const MainContainer = styled(InnerSection)`
  margin-top: 32px;
  align-items: start;
`;
export const InnerContainer = styled(FlexRow)`
  align-items: start;
  justify-content: start;
`;

export const CartList = styled(FlexColumn)`
  margin-right: 30px;
  width: 65%;
`;

export const TypographyText = styled(Typography)`
  margin-bottom: ${(props) => (props.MarginBottom ? 30 : 80)}px;
  text-align: center;
`;

export const ProceedBox = styled(FlexColumn)`
  width: 25%;
  padding: 26px 30px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
`;

export const CrossSpan = styled("span")((props) => ({
  fontSize: 18,
  padding: 5,
  fontWeight: 700,
  cursor: "pointer",
}));
