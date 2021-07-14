import styled from "styled-components";
import { Typography, FlexColumn, FlexRow } from "../../../App.Styles";

export const MainContainer = styled(FlexRow)`
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 100px;
`;

export const Container = styled(FlexColumn)`
  width: 498px;
  height: 600px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  justify-content: center;
`;

export const TypographyText = styled(Typography)`
  padding-bottom: 20px;
`;
