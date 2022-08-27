import React, { useState } from "react";
import MenuContext from "../Contexts/MenuContext";

export default function MenuProvider({ children }) {
  const [activeScreen, setActiveScreen] = useState("home");

  function handleActiveScreen(screenName) {
    setActiveScreen(screenName);
  }

  return (
    <MenuContext.Provider value={{ activeScreen, handleActiveScreen }}>
      {children}
    </MenuContext.Provider>
  );
}
