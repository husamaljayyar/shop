import { useEffect } from "react";
import {
  FlexColumn,
  InnerSection,
  Typography,
  BorderLine,
} from "../../../../App.Styles";
import {
  ImageCard,
  TypographyText,
  ContainerCard,
  TitleCard,
  InnerSectionCard,
} from "./EmptyCart.Styles";
import imageimage from "../../../../Assets/Group491.png";
import { getSliderImages } from "../../../../Redux/Guest/guestActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ProductCard from "../../../../Components/ProductCard/ProductCard";
import { BorderedBox } from "../../../Guest/HomeScreen/HomeScreen.Styles";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderImages());
  }, [dispatch]);

  return (
    <FlexColumn >
      <InnerSection>
        <TypographyText fontSize={32} fontWhite={700}>
          Your shopping cart is empty
        </TypographyText>
        <ImageCard src={imageimage} />
      </InnerSection>

      <InnerSection style={{marginTop: '-63'}}>
        <ContainerCard>
          <InnerSectionCard alignItems={"start"}>
            <TitleCard
              Font={"40px sans-serif"}
              borderBottom={"7px solid #FCDD06"}
            >
              Recently viewed
            </TitleCard>
          </InnerSectionCard>

          <BorderLine />
          <BorderedBox MarginTop={43}>
            {state.guestState.sliderImages.map((item) => (
              <ProductCard
                id={item._id}
                key={item._id}
                widthBorder={true}
                image={"https://proshop-ms.herokuapp.com/" + item.image}
                name={item.name}
                discount={0}
                price={item.price}
                rate={item.rating}
              />
            ))}
          </BorderedBox>

        </ContainerCard>
      </InnerSection>
    </FlexColumn>
  );
};

export default ShoppingCart;
