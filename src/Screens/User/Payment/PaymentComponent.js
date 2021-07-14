import { Typography } from "../../../App.Styles";
import {
  ChangeBtn,
  OrderDetails,
  OrderReview,
  ShippingAddressForm,
  ShippingForm,
  RowContainer,
  Forms,
  RowContent,
  RowInnerContainer,
  ColumnContainer,
  TypographyText,
  RowOrderReview,
} from "./Payment.Styles";
import { Formik } from "formik";
import { ShippingSchema } from "../../../Valedation";
import {
  ErrorMsg,
  Input,
} from "../../../Components/FormInput/FormInput.Styles";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../../../Redux/Cart/cartAction";
import { useHistory } from "react-router";

const styles = {
  height: "62px",
  alignSelf: "flex-end",
  marginTop: "30px",
};

function PaymentComponent(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const handleSaveShipping = (value) => {
    dispatch(addShippingAddress(value));
    history.push("/proceed-checkout/place-order");
  };

  return (
    <RowContainer>
      {/* fields in Form  */}
      <Formik
        initialValues={{
          country: state.cart.shippingAddress.country || "",
          city: state.cart.shippingAddress.city || "",
          address: state.cart.shippingAddress.address || "",
          postalCode: state.cart.shippingAddress.postalCode || "",
        }}
        validationSchema={ShippingSchema()}
        onSubmit={handleSaveShipping}
      >
        {({ errors, touched }) => {
          return (
            <Forms>
              {/* Shipping and payment content - Left Side */}
              <ShippingForm>
                <ShippingAddressForm>
                  <RowContent>
                    <TypographyText
                      marginBottom={"16px"}
                      fontSize={32}
                      fontWeight={700}
                    >
                      Shipping Address
                    </TypographyText>
                  </RowContent>
                  <RowInnerContainer>
                    <ColumnContainer>
                      <TypographyText
                        marginBottom={"16px"}
                        fontSize={22}
                        color={"#707070"}
                      >
                        Country
                      </TypographyText>
                      <Input
                        Width
                        name={"country"}
                        type={"text"}
                        placeholder={"Enter your country"}
                      />
                      {errors.country && touched.country ? (
                        <ErrorMsg>{errors.country}</ErrorMsg>
                      ) : null}
                    </ColumnContainer>
                    <ColumnContainer>
                      <TypographyText
                        marginBottom={"10px"}
                        fontSize="22"
                        color={"#707070"}
                      >
                        City
                      </TypographyText>
                      <Input
                        Width
                        name={"city"}
                        type={"text"}
                        placeholder={"Enter your city"}
                      />
                      {errors.city && touched.city ? (
                        <ErrorMsg>{errors.city}</ErrorMsg>
                      ) : null}
                    </ColumnContainer>
                    <ColumnContainer>
                      <TypographyText
                        marginBottom={"10px"}
                        fontSize="22"
                        color={"#707070"}
                      >
                        postal Code
                      </TypographyText>
                      <Input
                        Width
                        name={"postalCode"}
                        type={"number"}
                        placeholder={"postalCode"}
                      />
                      {errors.postalCode && touched.postalCode ? (
                        <ErrorMsg>{errors.postalCode}</ErrorMsg>
                      ) : null}
                    </ColumnContainer>
                    <ColumnContainer>
                      <TypographyText
                        marginBottom={"10px"}
                        fontSize="22"
                        color={"#707070"}
                      >
                        Street Address
                      </TypographyText>
                      <Input
                        Width
                        name={"address"}
                        type={"text"}
                        placeholder={"Your Address"}
                      />
                      {errors.address && touched.address ? (
                        <ErrorMsg>{errors.address}</ErrorMsg>
                      ) : null}
                    </ColumnContainer>
                  </RowInnerContainer>
                </ShippingAddressForm>
              </ShippingForm>

              {/* OrderReview - Right Side */}
              <OrderReview>
                <OrderDetails>
                  <RowOrderReview MarginBottom>
                    <Typography fontSize={24} fontWeight={700} color="#242424">
                      Order Details
                    </Typography>
                    <ChangeBtn>Change</ChangeBtn>
                  </RowOrderReview>
                  <RowOrderReview>
                    <Typography color={"#707070"}>Subtotal</Typography>
                    <Typography color={"#707070"}>$589.98</Typography>
                  </RowOrderReview>
                  <RowOrderReview>
                    <Typography color={"#707070"}>Tax</Typography>
                    <Typography color={"#707070"}>$0</Typography>
                  </RowOrderReview>
                  <RowOrderReview>
                    <Typography color={"#707070"}>Shipping</Typography>
                    <Typography color={"#707070"}>$0.00</Typography>
                  </RowOrderReview>
                  <RowOrderReview>
                    <Typography color={"#242424"} fontWeight={700}>
                      Total
                    </Typography>
                    <Typography color={"#242424"} fontWeight={700}>
                      $592.51
                    </Typography>
                  </RowOrderReview>
                </OrderDetails>
                <Button
                  link={""}
                  text={"Review Order"}
                  width={"324px"}
                  style={styles}
                />
              </OrderReview>
            </Forms>
          );
        }}
      </Formik>
    </RowContainer>
  );
}

export default PaymentComponent;
