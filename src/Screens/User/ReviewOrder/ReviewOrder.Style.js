import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";

export const MainContainer = styled(InnerSection)`
  align-items: start;
  padding-top: 44px;
`;
export const InnerContainer = styled(FlexRow)`
  align-items: start;
  margin-top: 20px;
  justify-content: start;
`;

export const ContainerColumn = styled(FlexColumn)`
  justify-content: start;
  align-items: flex-start;
  padding-top: ${(props) => props.paddingTop}px;
  background: #f2f2f2;
  align-items: start;
  width: ${(props) => props.Width}px;
  height: ${(props) => props.Height}px;
  margin: 20px 0 0 0px;
`;

export const InnerContainerColumn = styled(FlexColumn)`
  justify-content: center;
  align-items: start;
  padding-left: ${(props) => (props.PaddingLeft ? 20 : 50)}px;
  margin-top: 15px;
`;

export const InnerRow = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.Padding &&
    `
   padding: 20px 0 0 100px;
  `}

  ${(props) => props.PaddingLeft && `padding-left: 100px`}
`;

export const TypographyText = styled(Typography)`
  padding: 0 20px 0 9px;
  opacity: ${(props) => props.opacity};
  margin-top: 5px;
  margin-left: ${(props) => props.marginLeft}px;
  width: ${(props) => (props.isWidth ? 348 : "auto")}px;
`;

export const InputField = styled.input`
  width: 360px;
  height: 40px;
  opacity: 1;
  border: 1px solid #242424;
  border-radius: 6px;
  font-size: 14px;
  padding: 10px;
  outline: none;
  color: #707070;
  font-weight: 700;
  margin-top: 20px;
  &::placeholder {
    outline: none;
    font-size: 20px;
  }
`;

export const BorderBottom = styled.hr`
  width: 100%;
  margin: 20px 0 20px 0;
  opacity: 0.5;
`;

export const Images = styled.img`
  width: 135px;
  height: 90px;
`;
