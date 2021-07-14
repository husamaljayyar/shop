import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow } from "../../../../App.Styles";

export const RowContainer = styled(FlexRow)`
  ${(props) =>
    props.PaddingTop
      ? `
    padding-top: 32px;`
      : props.Padding &&
        `
    padding: 40px 0;
    `}
`;
