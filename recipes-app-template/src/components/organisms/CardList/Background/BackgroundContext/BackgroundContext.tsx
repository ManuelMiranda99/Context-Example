import { createContext, FC, useContext, useEffect, useState } from "react";

export enum BackgroundThemes {
  Light = "light",
  Dark = "dark",
}

interface IBackgroundContext {
  theme: BackgroundThemes;
  setTheme: (theme: BackgroundThemes) => void;
}

export const BackgroundContext = createContext<IBackgroundContext>(undefined!);

interface IBackgroundProviderProps {
  children: React.ReactNode;
  initialTheme?: BackgroundThemes;
}

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider: FC<IBackgroundProviderProps> = ({
  children,
  initialTheme = BackgroundThemes.Light,
}) => {
  const [theme, setTheme] = useState<BackgroundThemes>(initialTheme);

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
