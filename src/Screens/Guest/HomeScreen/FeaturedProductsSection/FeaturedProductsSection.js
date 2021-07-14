import { useState } from "react";
import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography, 
} from "../../../../App.Styles";
import {RowContainer} from "./FeaturedProductsSection.Styles"
import SwipeableViews from "react-swipeable-views";
import { BorderBottom, Dot, BorderText } from "../HomeScreen.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";
import Meta from "../../../../Components/Meta/Meta"

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};
function FeaturedProductsSection({ products }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  // Number pagenagen  in cards  according to screen size
  // size screen: (Desktop>1100) ( Tablet>800 & <1100) (Mobile <800)
  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;

  const handleChangeIndex = () => {};

  const getSlides = () => {
    // add chunks by push
    const chunks = [];
    products.map((Product, IndexProduct) => {
      if (IndexProduct % chunkSize === 0) {
        chunks.push([]);
      }
      // [firstArrayLength - 1] => last item in array
      // .length;  => add item by number or length
      // Not: (start index = 0) and (start length =1) reason used -1
      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;
      //  chunks[firstArrayLength - 1] => last array and last item in array
      chunks[firstArrayLength - 1][secondArrayLength] = Product;
      return Product;
    });
 
    return chunks.map((Product, IndexProduct) => (
      <FlexRow key={IndexProduct}>
        {/* every item has id any every product has id 
        example: every item has image any every product has image  */}
        {Product.map((item) => ( 
          <ProductCard // pass product card
            key={item._id} // key to map because it is considered list && every map has key Different
            id={item._id}  // every product has id 
            image={"https://proshop-ms.herokuapp.com/" + item.image}
            name={item.name}
            discount={0}
            price={item.price}
            rate={item.rating}
          />
        ))}
      </FlexRow>
    ));
  };

  return (
<>

    <FlexBox Background={"#F7F8FC"}>
      <InnerSection>
        <RowContainer PaddingTop>
          <Typography fontWeight={700} fontSize={32}>
            Featured Products
          </Typography>
        </RowContainer>
        <BorderText />
        <BorderBottom />
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          {getSlides()}
        </SwipeableViews>

        <RowContainer Padding>
          {getSlides().map((Product, IndexProduct) => (
            <Dot
              size={14}
              key={IndexProduct}
              isGray={sliderIndex !== IndexProduct}
              onClick={() => {
                setSliderIndex(IndexProduct);
              }}
            />
          ))}
        </RowContainer>
      </InnerSection>
    </FlexBox>
    </>
  );
}

export default FeaturedProductsSection;
