import { FlexRow, InnerSection, SpinnerContainer } from "../../../App.Styles";
import { MainContainer, TypographyText } from "./Order.Style";
import {
  ErrorMessage,
  OrderDetail,
  OrderDetails,
  Shipping,
  ShippingAddress,
  Order as StyledOrder,
} from "../Payment/Payment.Styles";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById, payOrder } from "../../../Redux/Orders/ordersAction";
import { PayPalButton } from "react-paypal-button-v2";

function Order(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  console.log(state);

  return state.orders.userOrder.isLoading ? (
    <SpinnerContainer />
  ) : (
    <MainContainer>
      <TypographyText fontSize={32} color="#242424" fontWeight={700}>
        Review Order
      </TypographyText>

      <FlexRow
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: "60px",
        }}
      >
        {/* Shipping and payment - Left Side */}
        <Shipping>
          <ShippingAddress>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <TypographyText fontSize={24} fontWeight={700} color="#242424">
                Shipping Address
              </TypographyText>
            </FlexRow>
            <TypographyText fontSize={22} color={"#242424"}>
              {state.userDetails.user.name}
            </TypographyText>
            <TypographyText
              fontSize={16}
              color={"#242424"}
              style={{
                maxWidth: "290px",
                lineHeight: "2",
              }}
            >
              {state.orders.userOrder.order?.shippingAddress?.country}-
              {state.orders.userOrder.order?.shippingAddress?.city}
            </TypographyText>
          </ShippingAddress>
          <OrderDetail>
            <FlexRow
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <TypographyText fontSize={24} fontWeight={700} color="#242424">
                Order Details
              </TypographyText>
            </FlexRow>
            {/* Order Items */}
            {state.orders?.userOrder?.order?.orderItems?.map((i) => (
              <OrderCard
                key={i._id}
                src={"https://proshop-ms.herokuapp.com/" + i.image}
                orderName={i.name}
                orderNumber={i.qty}
                subTotal={i.price * i.qty}
                price={i.price}
              />
            ))}
          </OrderDetail>
        </Shipping>

        {/* Right Side */}
        <StyledOrder>
          <OrderDetails>
            <TypographyText
              fontSize={32}
              color={"#242424"}
              fontWeight={700}
              style={{ marginBottom: "30px" }}
            >
              Order Details
            </TypographyText>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <TypographyText color={"#707070"}>Subtotal</TypographyText>
              <TypographyText color={"#707070"}>
                $
                {state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </TypographyText>
            </FlexRow>
            <FlexRow s>
              <TypographyText color={"#707070"}>Tax</TypographyText>
              <TypographyText color={"#707070"}>$0</TypographyText>
            </FlexRow>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <TypographyText color={"#242424"} fontWeight={700}>
                Shipping
              </TypographyText>
              <TypographyText color={"#242424"} fontWeight={700}>
                $
                {state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </TypographyText>
            </FlexRow>
          </OrderDetails>
          {!state.orders.userOrder.order.isPaid && (
            <FlexRow style={{ width: "100%", margin: "40px auto" }}>
              <PayPalButton
                amount={state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  dispatch(
                    payOrder(props.match.params.id, {
                      email_address: details.payer.email_address,
                      status: details.status,
                      create_time: details.create_time,
                      update_time: details.update_time,
                      id: details.id,
                    })
                  );
                }}
                onError={(error) => {
                  console.log(error);
                }}
                // client: connect between frontend and backend
                options={{
                  clientId:
                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                }}
              />
            </FlexRow>
          )}
        </StyledOrder>
      </FlexRow>
    </MainContainer>
  );
}

export default Order;
