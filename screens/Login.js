import React, { useState } from "react";
import MainContainer from "../components/containers/MainContainer";
import KeyboardAvoidContainer from "../components/containers/KeyboardAvoidContainer";
import RegularText from "../components/Texts/RegularText";
import StyledTextInput from "../components/Inputs/StyledTextInput";
import MsgBox from "../components/Texts/MsgBox";
import RegularButton from "../components/Buttons/RegularButton";
import { Formik } from "formik";
import { ActivityIndicator } from "react-native";
import { color } from "../components/colors";
import PressableText from "../components/Texts/PressableText";
import RowContainer from "../components/containers/RowContainer";
const { primary } = color;

const Login = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleLogin = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      //call backend
      // move to next page
      setSubmitting(false);
    } catch (error) {
      setMessage("Login Failed: " + error.message);
      setSubmitting(false);
    }
  };

  return (
    <>
      <MainContainer>
        <KeyboardAvoidContainer>
          <RegularText style={{ marginBottom: 25 }}>
            Enter your account credentials
          </RegularText>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                setMessage("Please fill in all fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <>
                <StyledTextInput
                  label="Email Address"
                  icon="email-variant"
                  placeholder="walt14@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  style={{ marginBottom: 25 }}
                />
                <StyledTextInput
                  label="Password"
                  icon="lock-open"
                  placeholder="* * * * * * * *"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  values={values.password}
                  isPassword={true}
                  style={{ marginBottom: 25 }}
                />
                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                  {message || ""}
                </MsgBox>
                {!isSubmitting && (
                  <RegularButton onPress={handleSubmit}>Login</RegularButton>
                )}
                {isSubmitting && (
                  <RegularButton disabled={true}>
                    <ActivityIndicator size="small" color={primary} />
                  </RegularButton>
                )}
                <RowContainer>
                  <PressableText onPress={() => {}}>
                    New account sign up
                  </PressableText>
                  <PressableText onPress={() => {}}>
                    Forgot Password
                  </PressableText>
                </RowContainer>
              </>
            )}
          </Formik>
        </KeyboardAvoidContainer>
      </MainContainer>
    </>
  );
};

export default Login;
