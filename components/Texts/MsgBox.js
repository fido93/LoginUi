import React from "react";
import styled from "styled-components/native";
import { color } from "../colors";
const { success, fail } = color;

const StyledText = styled.Text`
  font-size: 13px;
  color: ${(props) => (props.success ? success : fail)};
  text-align: center;
`;

const MsgBox = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default MsgBox;
