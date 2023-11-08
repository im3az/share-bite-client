import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UseAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default UseAuth;
