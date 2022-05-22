import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { color } from "../colors";
const { tertiary } = color;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${tertiary};
  text-align: left;
`;

const BigText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default BigText;
