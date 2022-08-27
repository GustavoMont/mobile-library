import { createContext } from "react";

const MenuContext = createContext({
  activeScreen: "home",
  handleActiveScreen: (screenName) => {},
});

export default MenuContext;
