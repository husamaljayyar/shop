import styled from "styled-components";
import { Typography, FlexColumn, InnerSection} from "../../../../App.Styles";

export const ImageCard = styled.img`
  width: 458px;
  height: 300px;
  margin-top: 100px;
`;

export const TypographyText = styled(Typography)`
  position: absolute;
  top: 15%;
  color: #242424;
  opacity: 1;
`;





export const TitleCard = styled(Typography)`
  width: auto;
  font: ${(props) => props.Font};
  border-bottom: ${(props) => props.borderBottom};
  align-items: ${(props) => props.alignItems};
`;

export const ContainerCard = styled(FlexColumn)`
  padding-top: 100px;
  background-color: ${(props) => props.backgroundColor};
`;
export const InnerSectionCard = styled(InnerSection)`
  align-items: ${(props) => props.alignItems};   
  padding-top: 63px;

`;