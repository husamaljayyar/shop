import styled from "styled-components";
import { FlexColumn, InnerSection, Typography } from "../../../App.Styles";

export const MainContainer = styled(InnerSection)`
  margin-top: 44;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormBox = styled(FlexColumn)`
  width: 398px;
  justify-content: start;
  align-items: start;
  margin-bottom: auto;
`;

export const TypographyText = styled(Typography)`
 margin: 44px 0;
`

export const StyledImage = styled("img")`
  width: 849px;
  object-fit: cover;
  height: auto;
  margin-bottom: 40px;
`;

export const Container = styled(FlexColumn)`
  width: 398px;
  align-items: center;
`;

