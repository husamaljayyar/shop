import {
  FlexColumn,
  FlexRow,
  SpinnerContainer,
  Typography,
  ContainerCount,
  RIcon,
  TypographyCount,
} from "../../../App.Styles";
import {
  ContentReviews,
  HeroSection,
  Image,
  InnerContainer,
  ColumnContent,
  Title,
  BackTitle,
  MainContainer,
  RowContainer,
  ContainerImage,
  InnerColumnContent,
  Row,
  TypographyText,
  FlexColWhite,
  StyledTextArea,
} from "./Product.Styles";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../User/Payment/Payment.Styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FeaturedProductsSection from "../HomeScreen/FeaturedProductsSection/FeaturedProductsSection";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "../../../Components/Button/Button";
import Review from "../../../Components/Review/Review";
import Rating from "@material-ui/lab/Rating";
import {
  getFeaturedProducts,
  getProduct, // get Product by id
} from "../../../Redux/Guest/guestActions";
import { addCartItem } from "../../../Redux/Cart/cartAction";
import { addReviewAction } from "../../../Redux/User/userActions";
import {
  ADD_REVIEW_RESET,
  ADD_REVIEW_TO_PRODUCT,
} from "../../../Redux/User/userTypesConstants";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocationWithQuery } from "react-router-query-hooks";
import Meta from "../../../Components/Meta/Meta";

const styleBookmark = {
  fontSize: "40px",
  color: "#B3B3B3",
};
const styleButton = {
  height: 62,
  marginRight: 13,
  background: "#fff",
  border: "1px solid #FCDD06",
};

const ProductScreen = (props) => {
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;

  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // useHistory : move between pages
  const params = useParams();
  const history = useHistory();
  const product = state.guestState.product;

  // page back
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    dispatch({
      type: ADD_REVIEW_RESET,
    });
    dispatch(getFeaturedProducts());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (state?.userDetails?.addingReview?.success) {
      dispatch({
        type: ADD_REVIEW_TO_PRODUCT,
        payload: {
          comment: review,
          rating,
          createdAt: new Date().toString(),
          name: state?.userDetails.user.name,
        },
      });
      setError("");
      setReview("");
      setRating(0);
    }
  }, [
    dispatch,
    rating,
    review,
    state?.userDetails?.addingReview?.success,
    state?.userDetails.user.name,
  ]);
  return state.guestState.isLoading || product.isLoading ? (
    <SpinnerContainer />
  ) : (
    <>
      <Meta
        title={product.product.name}
        description={product.product.description}
      />
      <MainContainer>
        <InnerContainer>
          <HeroSection>
            <Title>
              <BackTitle onClick={goBack}>Back</BackTitle>/
              {product.product.name}
            </Title>
            <RowContainer>
              <ContainerImage>
                <Image
                  src={
                    "https://proshop-ms.herokuapp.com/" + product.product.image
                  }
                />
              </ContainerImage>
              <ColumnContent>
                <RowContainer>
                  <InnerColumnContent>
                    <Row>
                      <Typography fontSize={32} fontWeight={700}>
                        {product.product.name}
                      </Typography>
                      <Typography fontWeight={900} fontSize={32}>
                        ${product.product.price}
                      </Typography>
                    </Row>
                    <ContainerCount>
                      <RIcon
                        onClick={() => {
                          if (count > 1) setCount(count - 1);
                        }}
                      >
                        <RemoveIcon />
                      </RIcon>
                      <TypographyCount fontWeight={700} fontSize={24}>
                        {count}
                      </TypographyCount>

                      <RIcon
                        onClick={() => {
                          if (count < product.product.countInStock)
                            setCount(count + 1);
                        }}
                      >
                        <AddIcon />
                      </RIcon>
                    </ContainerCount>
                  </InnerColumnContent>
                </RowContainer>

                <InnerColumnContent>
                  <FlexRow>
                    <RowContainer FlexEnd MarginTop={90}>
                      <Button
                        text={<BookmarkBorderIcon style={styleBookmark} />}
                        width={"54px"}
                        borderRadius={10}
                        style={styleButton}
                      />
                      <Button
                        text="Add to cart"
                        width={"324px"}
                        borderRadius={10}
                        style={{ height: 62 }}
                        disabled={product.product.countInStock}
                        link={"/cart"}
                        onClick={() => {
                          if (product.product.countInStock)
                            dispatch(addCartItem(product.product, count));
                        }}
                      />
                    </RowContainer>
                  </FlexRow>
                </InnerColumnContent>

                <TypographyText
                  fontSize={16}
                  fontWeight={500}
                  color={"#707070"}
                  margin={"100px 0"}
                >
                  {product.product.description}
                </TypographyText>
              </ColumnContent>
            </RowContainer>
            <FlexColumn>
              {/* existing reviews in case */}
              {product.product?.reviews?.length > 0 && (
                <FlexColumn style={{ alignItems: "flex-start" }}>
                  <TypographyText
                    fontSize={32}
                    fontWeight={700}
                    margin={"30px 0"}
                  >
                    Reviews
                  </TypographyText>
                  <FlexColWhite>
                    <Typography
                      fontSize="22"
                      fontWeight="500"
                      style={{ margin: "30px 0 30px", justifyContent: "start" }}
                    >
                      {" "}
                      Add Review
                    </Typography>
                    <StyledTextArea
                      type="text"
                      placeholder={"Comment..."}
                      required={true}
                      onChange={(e) => setReview(e.target.value)}
                      value={review}
                    />
                    <Rating
                      style={{ margin: "0 20px 20px" }}
                      onChange={(e, value) => {
                        setRating(value);
                      }}
                      value={rating}
                      defaultValue={props.rate}
                      name="simple-controlled"
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {state?.userDetails?.addingReview?.error && (
                      <ErrorMessage>
                        {state?.userDetails?.addingReview?.error}
                      </ErrorMessage>
                    )}
                    {state?.userDetails?.addingReview?.success && (
                      <SuccessMessage>
                        {state?.userDetails?.addingReview?.success}
                      </SuccessMessage>
                    )}
                    <FlexRow style={{ justifyContent: "start" }}>
                      <Button
                        text={"Submit"}
                        link={
                          state?.userDetails.user.name
                            ? ""
                            : `/login?pathname=${props.location.pathname}&rating=${rating}&review=${review}`
                        }
                        onClick={
                          state?.userDetails.user.name
                            ? () => {
                                dispatch(
                                  addReviewAction(
                                    {
                                      comment: review,
                                      rating,
                                    },
                                    product.product._id
                                  )
                                );

                                if (review && rating) {
                                } else
                                  setError(
                                    "Please write a comment and add rating"
                                  );
                              }
                            : () => {}
                        }
                        isLoading={state?.userDetails?.addingReview?.isLoading}
                        borderRadius={10}
                      />
                    </FlexRow>
                  </FlexColWhite>
                  <ContentReviews>
                    {product.product?.reviews?.map((item) => (
                      <Review
                        title={item.name}
                        text={item.comment}
                        date={item.createdAt}
                        rate={item.rating}
                      />
                    ))}
                  </ContentReviews>
                </FlexColumn>
              )}
            </FlexColumn>
          </HeroSection>
        </InnerContainer>
        <FeaturedProductsSection products={state.guestState.products} />
      </MainContainer>
    </>
  );
};

export default ProductScreen;
