import React, { createContext, useState } from 'react';

export const AppContext = createContext({
    menuOpen: false,
    setMenuOpen: () => {},
    toggleMenu: () => {},
    closeMenu: () => {}
})

const AppProvider = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);

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
        closeMenu
    }
    
  return (
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  )
}

export default AppProvider;
