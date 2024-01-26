import { createContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function ThemeProvider(props: any) {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");
    setDark(!lastTheme || lastTheme === 'true')
  }, [dark]);

  const toggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }else{
      document.documentElement.classList.add("dark");
    }
    setDark(!dark);
    window.localStorage.setItem("darkTheme", (!dark).toString());  
  }

  return (
    <ThemeContext.Provider value={{
      dark,
      toggle
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;