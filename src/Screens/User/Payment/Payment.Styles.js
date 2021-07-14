import styled from "styled-components";
import {
  InnerSection,
  Typography,
  FlexColumn,
  FlexRow,
} from "../../../App.Styles";
import { Form } from "formik";

// file Payment //
export const MainContainer = styled(InnerSection)((props) => ({
  margin: "44px 0 60px",
  alignItems: "flex-start",
}));

// file PaymentComponent //
export const RowContainer = styled(FlexRow)((props) => ({
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "60px",
}));

export const MultiStepContainer = styled(FlexRow)((props) => ({
  width: "950px",
  justifyContent: "start",
}));

export const Forms = styled(Form)((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: "row",
}));

// Shipping and payment
export const ShippingForm = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 45px 88px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;
export const ShippingAddressForm = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 253px;
`;

export const RowContent = styled(RowContainer)((props) => ({
  justifyContent: "space-between",
}));

export const RowInnerContainer = styled(RowContent)((props) => ({
  marginTop: "60px",
  flexWrap: "wrap",
}));

export const ColumnContainer = styled(FlexColumn)((props) => ({
  width: "360px",
  alignItems: "flex-start",
  marginBottom: "40px",
}));

export const TypographyText = styled(Typography)((props) => ({
  marginBottom: props.marginBottom,
}));

// OrderReview
export const RowOrderReview = styled(FlexRow)((props) => ({
  justifyContent: "space-between",
  marginBottom: props.MarginBottom && "16px",
}));

// Place an order

export const Shipping = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 40px 70px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const ShippingAddress = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 154px;
`;

export const OrderDetail = styled(FlexColumn)`
  align-items: flex-start;
  min-height: 229px;
`;

export const ChangeBtn = styled(Typography)`
  font-size: 22px;
  color: #707070;
  text-decoration: underline;
`;

// Right side - Order
export const Order = styled(FlexColumn)`
  width: 400px;
  margin-left: 30px;
`;
export const OrderDetails = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 280px;
  padding: 40px 25px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

//Shipping and payment

export const OrderReview = styled(FlexColumn)`
  width: 536px;
  margin-left: 30px;
`;

export const InnerContainer = styled(FlexRow)`
  align-items: start;
  margin-top: 20px;
  justify-content: start;
`;

export const Text = styled(Typography)`
  padding: 0 20px 0 9px;
  opacity: ${(props) => props.opacity};
  margin-top: 5px;
  margin-left: ${(props) => props.marginLeft}px;
  width: ${(props) => (props.isWidth ? 348 : "auto")}px;
`;
export const Line = styled.hr`
  width: 100px;
`;



export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  min-height: 60px;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 16px;
`;

export const SuccessMessage = styled(ErrorMessage)`
  color: green;
  background: lightgreen;
`;