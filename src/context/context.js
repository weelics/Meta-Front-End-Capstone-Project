import { createContext } from "react";

export const Context = createContext();

export const MyContext = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
