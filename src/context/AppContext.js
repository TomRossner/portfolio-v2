import React, { createContext, useState } from 'react';
import {THEME, getTheme} from "../utils/theme";

export const AppContext = createContext({
    menuOpen: false,
    setMenuOpen: () => {},
    toggleMenu: () => {},
    closeMenu: () => {},
    theme: THEME.LIGHT,
    setTheme: () => {}
})

const AppProvider = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(getTheme());

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
      setMenuOpen(false);
    }

    const values = {
        menuOpen,
        setMenuOpen,
        toggleMenu,
        closeMenu,
        setTheme,
        theme
    }
    
  return (
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  )
}

export default AppProvider;
