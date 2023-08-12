import React, { createContext, useState } from 'react';
import {THEME} from "../utils/theme";

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
    const [theme, setTheme] = useState(THEME.LIGHT);

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
