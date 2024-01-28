import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function ThemeProvider(props: any) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");
    if (lastTheme === 'true') {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
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