import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";
import SignupForm from "./components/SignupForm";
import Account from "./components/Account";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/auth/signUp" element={<SignupForm />} />
        <Route path="/auth/signIn" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
