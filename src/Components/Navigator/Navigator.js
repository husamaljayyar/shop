import { Title } from "../../Screens/Guest/ProductScreen/Product.Styles";
import { useHistory } from "react-router";
import styled from "styled-components";

const SpanTextBack = styled.span`
  color: #707070;
  margin-right: 5px;
  cursor: pointer;
`;
const Navigator = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Title>
      <SpanTextBack onClick={goBack}>Back</SpanTextBack>/{props.name}
    </Title>
  );
};
export default Navigator;
