import React, { useState, createContext } from "react";
export const MyContext = createContext();
export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [allUserDetails, setAllUserDetails] = useState([]);

  const signIn = (user, allUserDetails, callback) => {
    setUser(user);
    setAllUserDetails(allUserDetails);
    return callback();
  };
  const signOut = (callback) => {
    setUser({});
    setAllUserDetails([]);
    return callback();
  };
  const changeAccount = (user, callback) => {
    setUser(user);
    setAllUserDetails(allUserDetails);
    return callback();
  };
  let value = { user, signIn, signOut, changeAccount, allUserDetails };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
