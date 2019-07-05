import React, { useReducer } from "react";

const userContext = React.createContext();

const initialState = { username: "", isLoggedIn: false, loginError: undefined };

const reducer = (state, action) => {
  const { isLoggedIn, username, loginError } = action.payload;
  switch (action.type) {
    case "loginSuccess":
      return {
        ...state,
        isLoggedIn,
        username,
        loginError: undefined
      };
    case "loginError":
      return { ...state, isLoggedIn, loginError };
    case "userLogout":
      return { ...state, isLoggedIn, loginError: undefined };
    default:
      throw new Error();
  }
};

export function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {props.children}
    </userContext.Provider>
  );
}

export { userContext };
