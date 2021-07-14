import { FlexColumn, SpinnerContainer } from "../../../App.Styles";
import HeroSection from "./HeroSection";
import FeaturedProductsSection from "./FeaturedProductsSection/FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection/TopRatedSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";
import PaymentActivity from "../../User/Payment/PaymentActivity/PaymentActivity"


const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 
  useEffect(() => { 
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);
 
  return state.guestState.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn> {/*  Pass data */}  
      <HeroSection sliderProducts={state.guestState.sliderImages} /> 
      <FeaturedProductsSection products={state.guestState.products} />
      <TopRatedSection topRatedProducts={state.guestState.sliderImages} />
    </FlexColumn>
  );
};

export default HomeScreen;
