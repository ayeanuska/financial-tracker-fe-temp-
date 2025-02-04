import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const ProviderObject = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={ProviderObject}>
      {props.children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
