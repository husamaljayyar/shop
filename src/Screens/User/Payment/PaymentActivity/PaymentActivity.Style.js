import styled from "styled-components";
import { FlexColumn, FlexRow, Typography, InnerSection } from "../../../../App.Styles";

export const Container = styled(FlexColumn)`
  margin-top: 75px; 
  width: 1640px;
`;

export const ContainerSection = styled(FlexColumn)`
  align-items: flex-end;
`;
export const ContainerCard = styled(FlexColumn)`
  align-items: flex-start;
`;

export const innerSection = styled(FlexColumn)``;

export const HeroSection = styled(FlexRow)`
  width: 1640px;
  height: 372px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  justify-content: space-between;
`;

export const TypographyText = styled(Typography)`
 padding: 20px ;
`

export const TitleCard = styled(Typography)`
  width: auto;
  font: ${(props) => props.Font};
  border-bottom: ${(props) => props.borderBottom};
  align-items: ${(props) => props.alignItems};
`;

export const IneerContainerCard = styled(FlexRow)`
  height: 824px;
  width: 1640px;
  justify-content: space-between;
`;

export const InnerSectionCard = styled(InnerSection)`
  align-items: ${(props) => props.alignItems};   
  padding-top: 63px;

`;