import axios from "axios";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  const logout = () => {
    //empty user
    setUser({});

    //remove jwt token
    localStorage.removeItem("accessJWT");
  };

  const autologin = async () => {
    //get the access token from local sTORAGE

    const token = localStorage.getItem("accessToken");
    console.log("accessToken");

    if (token) {
      //call user detail api
      const response = await axios.get("http://localhost:9001/api/v1/users", {
        headers: {
          Authorization: token,
        },
      });

      if (response.data && response.data.status == "success") {
        //token is valid
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
    showModal,
    setShowModal,
  };

  return (
    <UserContext.Provider value={ProviderObject}>
      {props.children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
