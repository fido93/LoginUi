import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { color } from "../colors";
const { tertiary } = color;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${tertiary};
  text-align: left;
`;

const RegularText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default RegularText;
