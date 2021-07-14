import { useState } from "react";
import { FlexColumn, Typography, FlexRow } from "../../../../App.Styles";
import {
  MainContainer,
  innerContainer,
  InnerContainer,
  ContainerColumn,
  TypographyText,
  InputField,
  InnerRow,
  Images,
  BorderBottom,
  InnerContainerColumn,
} from "../ReviewOrder.Style";
import Button from "../../../../Components/Button/Button";
import ImagePhone from "../../../../Assets/sell-phone.png";

const BtnShippingStyles = {
  height: 40,
  cursor: "pointer",
};

const BtnOrderStyles = {
  ...BtnShippingStyles,
  opacity: 0.5,
};

const PlaceOrder = () => {
  const [BtnShipping, setBtnShipping] = useState({});
  const [BtnOrder, setBtnOrder] = useState();

  return (
    <MainContainer>
      <Typography fontSize={32} fontWhite={900}>
        Review Order
      </Typography>
      <FlexRow>
        <InnerContainer>
          <Button
            text="1"
            width={"40px"}
            borderRadius={"-1"}
            style={BtnShipping ? BtnShippingStyles : BtnOrderStyles}
            onClick={(event) => {
              setBtnShipping(false);
              setBtnOrder(true);
            }}
          />
          <TypographyText fontSize={22} fontWhite={700}>
            Shipping and Payment
          </TypographyText>
        </InnerContainer>
        <InnerContainer>
          <Button
            text="2"
            width={"40px"}
            borderRadius={"-1"}
            style={BtnOrder ? BtnShippingStyles : BtnOrderStyles}
            onClick={(event) => {
              setBtnShipping(true);
              setBtnOrder(false);
            }}
          />
          <TypographyText fontSize={22} fontWhite={700}>
            Place an Order
          </TypographyText>
        </InnerContainer>
      </FlexRow>

      <InnerRow>
        <ContainerColumn Width={950} Height={652} paddingTop={44}>
          <InnerContainerColumn></InnerContainerColumn>
          <InnerContainerColumn PaddingLeft={true}>
            <TypographyText fontSize={32} fontWhite={700} marginLeft={30}>
              Shipping Address
            </TypographyText>
          </InnerContainerColumn>

          <InnerRow>
            <InnerContainerColumn>
              <TypographyText>Country</TypographyText>
              <InputField type={"text"} name={"text"} />
              <TypographyText>Zip Code</TypographyText>
              <InputField type={"text"} name={"text"} />
            </InnerContainerColumn>

            <InnerContainerColumn>
              <TypographyText>City</TypographyText>
              <InputField type={"text"} name={"text"} />
              <TypographyText>Street Address</TypographyText>
              <InputField type={"text"} name={"text"} />
            </InnerContainerColumn>
          </InnerRow>

          <InnerContainerColumn PaddingLeft={true}>
            <TypographyText fontSize={32} fontWhite={700} marginLeft={30}>
              Payment Details
            </TypographyText>
          </InnerContainerColumn>
          <InnerRow>
            <InnerContainerColumn>
              <TypographyText>Country</TypographyText>
              <InputField type={"text"} name={"text"} />
              <TypographyText>Zip Code</TypographyText>
              <InputField type={"text"} name={"text"} />
            </InnerContainerColumn>
            <InnerContainerColumn>
              <TypographyText>City</TypographyText>
              <InputField type={"text"} name={"text"} />
              <TypographyText>Street Address</TypographyText>
              <InputField type={"text"} name={"text"} />
            </InnerContainerColumn>
          </InnerRow>
        </ContainerColumn>

        <ContainerColumn Width={536} Height={652} paddingTop={44}>
          <InnerRow>
            <TypographyText fontSize={32} fontWhite={700}>
              Order Details
            </TypographyText>
            <TypographyText>Change</TypographyText>
          </InnerRow>

          <InnerRow>
            <Images src={ImagePhone} />
            <TypographyText fontSize={22} isWidth={true}>
              iPhone 11 Pro 256GB Memory
            </TypographyText>
          </InnerRow>
          <InnerRow PaddingLeft>
            <TypographyText>$499.99</TypographyText>
            <TypographyText>$499.99</TypographyText>
          </InnerRow>
          <BorderBottom />

          <InnerRow>
            <Images src={ImagePhone} />
            <TypographyText fontSize={22} isWidth={true}>
              Apple Airpods Wireless Bluetooth Headset
            </TypographyText>
          </InnerRow>
          <InnerRow PaddingLeft>
            <TypographyText>$499.99</TypographyText>
            <TypographyText>$499.99</TypographyText>
          </InnerRow>
          <BorderBottom />

          <InnerRow Padding>
            <TypographyText>$499.99</TypographyText>
            <TypographyText>$499.99</TypographyText>
          </InnerRow>

          <InnerRow Padding>
            <TypographyText>$499.99</TypographyText>
            <TypographyText>$499.99</TypographyText>
          </InnerRow>
          <InnerRow Padding>
            <TypographyText>$499.99</TypographyText>
            <TypographyText>$499.99</TypographyText>
          </InnerRow>
        </ContainerColumn>
      </InnerRow>

      <Button
        text="Shop now"
        width={"324px"}
        borderRadius={10}
        style={{
          margin: "42px 0 0 1200px",
          height: 62,
          cursor: "pointer",
        }}
      />
    </MainContainer>
  );
};

export default PlaceOrder;
