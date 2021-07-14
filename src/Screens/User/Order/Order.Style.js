import styled from "styled-components";
import {
  InnerSection,
  FlexColumn,
  FlexRow,
  Typography,
} from "../../../App.Styles";

export const TypographyText = styled(Typography)`
  justify-content: start;
`;

export const MainContainer = styled(InnerSection)((props) => ({
  margin: "44px 0 60px",
  alignItems: "flex-start",
}));
