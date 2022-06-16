import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  BackgroundContextInterface,
  BackgroundProviderProps,
} from "../../../../shared/interfaces/Contexts.interface";

export enum BackgroundThemes {
  Light = "light",
  Dark = "dark",
}

const BackgroundContext = createContext<BackgroundContextInterface>(undefined!);

export const useBackgroundContext = () => {
  return useContext(BackgroundContext);
};

export const BackgroundProvider: FC<BackgroundProviderProps> = ({
  children,
  initialBackgroundTheme = BackgroundThemes.Light,
}) => {
  const [theme, setTheme] = useState<BackgroundThemes>(initialBackgroundTheme);

  const rawSetTheme = (theme: BackgroundThemes) => {
    const root = window.document.documentElement;
    const isDark = theme === BackgroundThemes.Dark;

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <BackgroundContext.Provider value={{ theme, setTheme }}>
      {children}
    </BackgroundContext.Provider>
  );
};
