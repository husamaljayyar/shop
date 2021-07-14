import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";

export const MainContainer = styled(FlexColumn)`
  margin-bottom: 100px;
`;
export const InnerContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;

export const Title = styled(Typography)`
  margin: 0 0 56px 0;
  font-size: 24px;
  justify-content: start;
`;

export const BackTitle = styled.span`
  cursor: pointer;
  margin-right: 5;
  color: #707070;
`;
export const RowContainer = styled(FlexRow)`
  align-items: flex-start;
  justify-content: ${(props) => props.FlexEnd && "flex-end"};
  margin-top: ${(props) => props.MarginTop}px;
`;

export const ContainerImage = styled(FlexColumn)`
  width: 501px;
  height: 600px;
  justify-content: start;
  margin-top: 30px;
`;

export const HeroSection = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  margin: 32px 0;
`;

export const Image = styled("img")`
  object-fit: contain;
  width: 100%;
  border-radius: 16px;
`;

export const ColumnContent = styled(FlexColumn)`
  width: 1134px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;
`;

export const InnerColumnContent = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
`; 

export const Row = styled(InnerColumnContent)`
  flex-direction: row;
`;

export const TypographyText = styled(Typography)`
  line-height: 1.8;
  margin: ${(props) => props.margin};
`;

export const ContentReviews = styled(FlexColumn)`
  align-items: flex-start;
  border: 1px solid #bcbcbc;
  padding: 0 51px 15px 51px;
`;
export const FlexColWhite = styled(FlexColumn)`
  align-items: flex-start;
  border: 1px solid #bcbcbc;
  padding: 0 51px 15px 51px;
`;

export const CardsBox = styled(FlexRow)`
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1800px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#fcdd06")};
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 0 auto;
`;


export const StyledFlexColumn = styled(FlexColumn)`
  width: 1134px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 16px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 20px;
  resize: vertical;
`;