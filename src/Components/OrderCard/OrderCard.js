import { FlexColumn, FlexRow, Typography } from "../../App.Styles";
import {
  OrderDetailImg,
  OrderItem,
  RowContainer,
  ColumnContainer,
} from "./OrderCard.Styles";

export default function OrderCard(props) {
  return (
    <OrderItem>
      <RowContainer>
        <OrderDetailImg src={props.src} />
        <ColumnContainer>
          <Typography fontSize={"16px"} color={"#707070"}>
            {props.orderName}
          </Typography>
          <RowContainer>
            <RowContainer>
              <Typography color="#707070" style={{ marginRight: "18px" }}>
                ${props.price}
              </Typography>
              <Typography fontSize={15} color={"#707070"}>
                x{props.orderNumber}
              </Typography>
            </RowContainer>
            <Typography fontSize={15} color={"#242424"}>
              ${props.subTotal}
            </Typography>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </OrderItem>
  );
}
