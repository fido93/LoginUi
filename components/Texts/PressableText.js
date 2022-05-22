import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { StatusBarHeight } from "../shared";
import { color } from "../colors";
const { accent } = color;
import SmallText from "./SmallText";

const StyledPressable = styled.Pressable`
  padding-vertical: 5px;
  align-self: center;
`;

const PressableText = (props) => {
  return (
    <StyledPressable onPress={props.onPress} {...props}>
      <SmallText style={{ color: accent }}>{props.children}</SmallText>
    </StyledPressable>
  );
};

export default PressableText;
