import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const logout = () => {
    setUser({});
    //remove jwt token
    localStorage.removeItem("accessJWT");
  };

  const autologin = async () => {
    //get the access token from local sTORAGE

    const Token = localStorage.getItem("accessToken");
    console.log("accessToken");

    if (Token) {
      //call user detail api
      const response = await axios.get("", {
        headers: {
          Authorization: token,
        },
      });

      if (response.data && response.data.status == "success") {
        setUser(response.data.user);
        return true;
      } else {
        setUser({});
        return false;
      }
    }
  };

  const ProviderObject = {
    user,
    setUser,
    logout,
    autologin,
  };

  return (
    <UserContext.Provider value={ProviderObject}>
      {props.children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
