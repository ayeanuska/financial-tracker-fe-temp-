import { createContext, useContext } from "react";

const UserContext = createContext();
export const userProvider = (props) => {
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
export const UseUser = () => useContext(UserContext);
