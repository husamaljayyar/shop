import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  Typography,
  InnerSection,
} from "../../../App.Styles";
import { Link } from "react-router-dom";

export const ContainerSection = styled(InnerSection)`
  margin-top: 129px;
  flex-direction: row;
  justify-content: start;
`;

export const InnerContainerSection = styled(FlexColumn)`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  width: ${(props) => (props.isBig ? "950px" : "398px")};
  height: 380px;
  padding: 1% 2%;
  margin-right: 32px;
  justify-content: start;
  align-items: start;
`;

export const ProfileText = styled(Link)`
  font-size: 24px;
  margin-bottom: 30px;
  color: ${(props) => (props.isGray ? "#707070" : "#242424")};
  width: auto;
  padding-right: 20px;
`;

export const InnerContainerContent = styled(FlexRow)`
  max-width: 40%;
  justify-content: start;
`;

export const TypographyText = styled(Typography)`
  margin-bottom: 60px;
`;
