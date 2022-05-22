import {
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

const KeyboardAvoidContainer = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "transparent" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidContainer;
