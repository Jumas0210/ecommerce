import { useContext } from "react";
import { UserContext } from "../context/user";

export const useUser = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("Esta siendo utilizado son el provider");
  }

  return user;
};
