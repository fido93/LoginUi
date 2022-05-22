import { StatusBar } from "expo-status-bar";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SignUp />
    </>
  );
}
