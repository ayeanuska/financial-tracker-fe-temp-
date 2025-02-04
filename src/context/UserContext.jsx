import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const logout = () => {
    setUser({});
    localStorage.removeItem("accessJWT");
  };

  const ProviderObject = {
    user,
    setUser,
    logout,
  };

  return (
    <UserContext.Provider value={ProviderObject}>
      {props.children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
