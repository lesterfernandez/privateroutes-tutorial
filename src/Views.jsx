import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Views;
