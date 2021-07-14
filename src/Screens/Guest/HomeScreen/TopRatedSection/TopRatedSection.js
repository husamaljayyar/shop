import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography, 
} from "../../../../App.Styles";
import { ColumnContainer } from "./TopRatedSection.Syules";

import { BorderedBox, BorderBottom, BorderText } from "../HomeScreen.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";

function TopRatedSection({ topRatedProducts }) {
  console.log('topRatedProducts', ...topRatedProducts);
  
  return (
    <FlexBox Background={"#ffffff"}>
      {console.log(topRatedProducts.desc, "11111111111111111111111111")}
      <InnerSection>
        <ColumnContainer>
          <Typography fontWeight={700} fontSize={32}>
            TOP RATE PRODUCTS
          </Typography>
          <BorderText />
          <BorderBottom />
        </ColumnContainer>
        <BorderedBox>
 
          {topRatedProducts.map((item) => (
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
      </InnerSection>
    </FlexBox>
  );
}

export default TopRatedSection;
