import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    budget: 0,
    address: "",
    type: false,
    total : 0,
  });

  const addToUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addToUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
