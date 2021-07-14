import {
  HeroSection,
  Container,
  ContainerSection,
  TitleCards,
  innerSection,
  TypographyText,
  TitleCard,
  ContainerCard,
  InnerSectionCard,
} from "../PaymentActivity/PaymentActivity.Style";
import Button from "../../../../Components/Button/Button";
import { BorderLine } from "../../../../App.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";
import { getSliderImages } from "../../../../Redux/Guest/guestActions";
import { BorderedBox } from "../../../Guest/HomeScreen/HomeScreen.Styles";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const PaymentActivity = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSliderImages());
  }, [dispatch]);

  return (
    <Container>
      <ContainerSection>
        <HeroSection>
          <innerSection>
            <TypographyText fontSize={32} fontWhite={700}>
              Payment Success !
            </TypographyText>
            <TypographyText fontSize={24} fontWhite={700}>
              Order number
            </TypographyText>
            <TypographyText fontSize={24} fontWhite={700}>
              Shipping Address
            </TypographyText>
            <TypographyText fontSize={24} fontWhite={700}>
              Order Items
            </TypographyText>
            <TypographyText fontSize={16} fontWhite={300}>
              An email will be sent to your email address contains order
              confirmation and tacking code.
            </TypographyText>
          </innerSection>

          <innerSection>
            <TypographyText fontSize={16} fontWhite={700}>
              65AS1D56ASD156DSOrder Items
            </TypographyText>
            <TypographyText fontSize={16} fontWhite={700}>
              56051 Jones Falls, Philippines, Turkey - 62502
            </TypographyText>
            <TypographyText fontSize={16} fontWhite={700}>
              1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth
              Headset
            </TypographyText>
          </innerSection>
        </HeroSection>
        <Button
          text="Keep Shopping"
          width={"324px"}
          borderRadius={10}
          style={{ margin: 42, height: 62 }}
        />{" "}
      </ContainerSection>

      <ContainerCard>
        <InnerSectionCard alignItems={"start"}>
          <TitleCard
            fontSize={50}
            fontWhite={700}
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
        {/* TopRateProducts from file 
           <TopRatedSection topRatedProducts={[]} />
        */}
      </ContainerCard>
    </Container>
  );
};

export default PaymentActivity;
