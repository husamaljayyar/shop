import { FlexColumn } from "../../App.Styles";
import {
  RateBox,
  ReviewTitle,
  TextReviewDate,
  TextReviewDescription,
  ContainerReview,
} from "./Review.Styles";
import Rating from "@material-ui/lab/Rating";

const Review = ({ title, text, rate, icon, date }) => {
  return (
    <ContainerReview>
      <ReviewTitle>{title}</ReviewTitle>
      <RateBox>
        <Rating name="simple-controlled" value={rate} />
        <TextReviewDate>{date}</TextReviewDate>
      </RateBox>
      <TextReviewDescription>{text}</TextReviewDescription>
    </ContainerReview>
  );
};

export default Review;
