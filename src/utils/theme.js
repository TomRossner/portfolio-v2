export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
}

export const ANIMATE = {
    IN: 'animate-in',
    OUT: 'animate-out',
}

export const getTheme = () => {
    return localStorage.getItem('theme') || THEME.LIGHT;
}