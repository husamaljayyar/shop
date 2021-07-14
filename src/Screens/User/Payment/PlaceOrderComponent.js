import {
  Order,
  OrderDetail,
  OrderDetails,
  Shipping,
  ShippingAddress,
  RowContainer,
  RowContent,
  RowOrderReview,
  ErrorMessage,
} from "./Payment.Styles";
import { Typography } from "../../../App.Styles";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import Button from "../../../Components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { placeOrder } from "../../../Redux/Orders/ordersAction";

const styles = { height: "62px", alignSelf: "flex-end", marginTop: "30px" };

function PlaceOrderComponent(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <RowContainer>
      {/* Shipping and payment - Left Side*/}
      <Shipping>
        <ShippingAddress>
          <RowContent>
            <Typography fontSize={24} fontWeight={700} color="#242424">
              Shipping Address
            </Typography>
          </RowContent>
          <Typography fontSize={22} color={"#242424"}>
            {state.userDetails.user.name}
          </Typography>
          <Typography
            fontSize={16}
            color={"#242424"}
            style={{
              maxWidth: "290px",
              lineHeight: "2",
            }}
          >
            {state.cart.shippingAddress.country}-
            {state.cart.shippingAddress.city}
          </Typography>
        </ShippingAddress>
        <OrderDetail>
          <RowOrderReview MarginBottom>
            <Typography fontSize={24} fontWeight={700} color="#242424">
              Order Details
            </Typography>
          </RowOrderReview>
          {/* Order Items */}
          {state.cart.cart.map((i) => (
            <OrderCard //  order details in OrderCard.js component
              src={"https://proshop-ms.herokuapp.com/" + i.image}
              orderName={i.name}
              orderNumber={i.quantity} // qunttiy
              subTotal={i.price * i.quantity} // Total without Not Add Tax
              price={i.price}
            />
          ))}
        </OrderDetail>
      </Shipping>
      {/* Right Side */}
      <Order>
        <OrderDetails>
          <Typography
            fontSize={32}
            fontWeight={700}
            color={"#242424"}
            style={{ marginBottom: "30px" }}
          >
            Order Details
          </Typography>
          <RowOrderReview>
            <Typography color={"#707070"}>Subtotal</Typography>
            <Typography color={"#707070"}>
              {/* can pass tax by acc in reduce  */}$
              {state.cart.cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </RowOrderReview>
          <RowOrderReview>
            <Typography color={"#707070"}>Tax</Typography>
            <Typography color={"#707070"}>$0</Typography>
          </RowOrderReview>
          <RowOrderReview>
            <Typography color={"#242424"} fontWeight={700}>
              Shipping
            </Typography>
            <Typography color={"#242424"} fontWeight={700}>
              $
              {state.cart.cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </RowOrderReview>
        </OrderDetails>

        {state.orders.placeOrder.error && (
          <ErrorMessage>{state.orders.placeOrder.error}</ErrorMessage>
        )}

        <Button
          text={"Place Order"}
          width={"100%"}
          style={styles}
          isLoading={state.orders.placeOrder.error}
          onClick={() => dispatch(placeOrder(history))}
        />
      </Order>
    </RowContainer>
  );
}

export default PlaceOrderComponent;
