import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StatusBarHeight } from "../shared";
import { color } from "../colors";
const { primary } = color;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
`;

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;
