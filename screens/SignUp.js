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

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleSIgnUp = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      //call backend
      // move to next page
      setSubmitting(false);
    } catch (error) {
      setMessage("SignUp failed: " + error.message);
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
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.fullName == "" ||
                values.email == "" ||
                values.password == "" ||
                values.confirmPassword == ""
              ) {
                setMessage("Please fill in all fields");
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                setMessage("Passwords do not match");
                setSubmitting(false);
              } else {
                handleSIgnUp(values, setSubmitting);
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
                  label="Full Name"
                  icon="account"
                  placeholder="Jerry Walt"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  values={values.fullName}
                  style={{ marginBottom: 15 }}
                />

                <StyledTextInput
                  label="Email Address"
                  icon="email-variant"
                  placeholder="walt14@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  style={{ marginBottom: 15 }}
                />

                <StyledTextInput
                  label="Password"
                  icon="lock-open"
                  placeholder="* * * * * * * *"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  values={values.password}
                  isPassword={true}
                  style={{ marginBottom: 15 }}
                />
                <StyledTextInput
                  label="Confirm Password"
                  icon="lock-open"
                  placeholder="* * * * * * * *"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  values={values.confirmPassword}
                  isPassword={true}
                  style={{ marginBottom: 15 }}
                />
                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                  {message || ""}
                </MsgBox>
                {!isSubmitting && (
                  <RegularButton onPress={handleSubmit}>SignUp</RegularButton>
                )}
                {isSubmitting && (
                  <RegularButton disabled={true}>
                    <ActivityIndicator size="small" color={primary} />
                  </RegularButton>
                )}
                <PressableText
                  style={{ paddingVertical: 15 }}
                  onPress={() => {}}
                >
                  Sign in to an existing account
                </PressableText>
              </>
            )}
          </Formik>
        </KeyboardAvoidContainer>
      </MainContainer>
    </>
  );
};

export default SignUp;
