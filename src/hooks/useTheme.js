import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { THEME } from '../utils/theme';

const useTheme = () => {
    const {theme, setTheme} = useContext(AppContext);

    const saveThemeInLS = () => {
        return localStorage.setItem('theme', theme);
    }

    useEffect(() => {
      // Save theme to LocalStorage
      saveThemeInLS();
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === THEME.LIGHT
          ? THEME.DARK
          : THEME.LIGHT);
    }

  return {
    toggleTheme, theme
  };
}

export default useTheme;