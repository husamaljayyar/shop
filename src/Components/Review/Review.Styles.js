import styled from "styled-components";
import { FlexRow, FlexColumn, Typography } from "../../App.Styles";

export const ContainerReview = styled(FlexColumn)((props) => ({
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

export const ReviewTitle = styled(Typography)`
  color: #707070;
  font-size: 24px;
  margin: 34px 0 16px 0;
  justify-content: start;
  align-items: start;
  font-weight: 700;
`;

export const RateBox = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TextReviewDate = styled(Typography)`
  color: #70707070;
  font-size: 16px;
  width: auto;
  justify-content: flex-end;
  font-weight: 700;
`;

export const TextReviewDescription = styled(Typography)`
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  height: 130px;
  width: 1483px;
  background: #f2f2f2;
  margin: 0 0 10px 0;
  padding: 22px 35px;
  justify-content: start;
  align-items: start;
`;
