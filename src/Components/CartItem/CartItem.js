import propTypes from "prop-types";
import { CardBox, CardImage, ContentBox, RowContainer } from "./CartItem.Style";
import {
  FlexRow,
  Typography,
  ContainerCount,
  RIcon,
  TypographyCount,
} from "../../App.Styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { CrossSpan } from "../../Screens/User/CartScreen/CartScreen.Styles";

function CartItem({
  counter,
  increaseCounter,
  decreaseCounter,
  price,
  image,
  name,
  handleDelete,
}) {
  return (
    <CardBox>
      <CardImage src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
      <ContentBox>
        <RowContainer>
          <CrossSpan onClick={handleDelete}>x</CrossSpan>
        </RowContainer>
        <Typography fontSize={24} fontWeight={700} style={{ maxWidth: "50%" }}>
          {name}
        </Typography>
        <RowContainer>
          <ContainerCount>
            <RIcon onClick={decreaseCounter}>
              <RemoveIcon />
            </RIcon>
            <TypographyCount fontWeight={700} fontSize={24}>
              {counter}
            </TypographyCount>
            <RIcon onClick={increaseCounter}>
              <AddIcon />
            </RIcon>
          </ContainerCount>
          <Typography
            fontSize={30}
            fontWeight={700}
            style={{
              marginLeft: "10%",
              width: "auto",
            }}
          >
            ${price}
          </Typography>
        </RowContainer>
      </ContentBox>
    </CardBox>
  );
}

// initial values to function
CartItem.defaultProps = {
  handleDelete: () => {},
  increaseCounter: () => {},
  decreaseCounter: () => {},
  counter: 1,
};
// PropTypes => Specify Type Data
// the purpose from used (PropTypes) understand code from any person
CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  increaseCounter: propTypes.func.isRequired,
  decreaseCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};
export default CartItem;
