import {
  SpinnerContainer,
  Typography,
} from "../../../App.Styles";
import {MainContainer} from "./SearchScreen.Styles"
import { ErrorMessage } from "../../User/Payment/Payment.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { search } from "../../../Redux/Guest/guestActions";
import { CardsBox, LoadMore } from "../ProductScreen/Product.Styles";
import { useEffect, useState } from "react";
import { useLocationWithQuery } from "react-router-query-hooks";
import { useDispatch, useSelector } from "react-redux";


const SearchScreen = () => {
  const {
    guestState: {
      searchResults: { isLoading, error, products, pages },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;

  useEffect(() => {
    dispatch(search(keyword, page));
  }, [dispatch, keyword, page]);

// Because execute isLoadin one only it's First search
  return isLoading  ? (
    <SpinnerContainer />
  ) : (
    <MainContainer>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize={32}
        fontWeight={700}
        color="#242424"
      >
        Search Results...
      </Typography>
      <CardsBox>
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard
             roduct={item} p
              key={item._id}
              id={item._id}
              image={"https://proshop-ms.herokuapp.com/" + item.image}
              name={item.name}
              discount={0}
              price={item.price}
              rate={item.rating}
            />
          ))
        ) : (
          <Typography
            style={{ justifyContent: "start", marginTop: 60 }}
            fontSize={20}
            color="#242424"
            fontWeight={500}
          >
            No Results...
          </Typography>
        )}
      </CardsBox>
      {/* pages > 1 OR page < pages && ...*/}
      {pages > 1 && page < pages && (
        <LoadMore
          isLoading={isLoading}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load More
        </LoadMore>
      )}
    </MainContainer>
  );
}

export default SearchScreen;