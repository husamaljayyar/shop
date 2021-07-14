import { useState } from "react";
import Rating from "@material-ui/lab/Rating";

const Ratings = () => {
  const [value, setValue] = useState();

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default Ratings;
