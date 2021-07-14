import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow } from "../../../App.Styles";

export const HeroBox = styled(FlexRow)`
  justify-content: space-between;
  height: 590px;
`;

export const SideBox = styled(FlexColumn)`
  width: 40%;
  align-items: start;
  height: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  letter-spacing: 2.4px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
`;

export const Image = styled.img`
  object-fit: contain;
  border-radius: 16px;
  width: 610px;
  height: auto;
`;

export const Dot = styled("div")`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => (props.isGray ? "#70707030" : "#FCDD06")} 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
`;

export const Arrow = styled(FlexBox)`
  font-size: 35px;
  margin: 0 23px;
  color: #000;
  width: 30px;
  font-weight: 700;
  cursor: pointer;
  ${(props) => (props.isLeft ? "transform: rotate(-180deg);" : "")}
`;

export const BorderText = styled.hr`
  width: 200px;
  height: 7px;
  border: none;
  margin-top: 22px;
  background: #fcdd06 0% 0% no-repeat padding-box;
`;
export const BorderBottom = styled.hr`
  width: 100%;
  background: #000000;
  height: 1px;
  margin-bottom: 43px;
  border: none;
  opacity: 0.3;
`;
export const BorderedBox = styled(FlexRow)`
  border: 1px solid #fcdd06;
  border-radius: 16px;
  margin-bottom: 197px;
  padding: 40px;
  margin-top: ${props => props.MarginTop}px;
`;
export const ContainerPagination = styled(FlexRow)`
  margin-bottom: 30px;
`;
