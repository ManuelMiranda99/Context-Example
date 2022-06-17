import { createContext, FC, useContext, useState } from "react";

interface IUserContext {
  user: string;
  setUser: (user: string) => void;
}

const UserContext = createContext<IUserContext>(undefined!);

export const useUserContext = () => useContext(UserContext);

interface IUserProviderProps {
  children: React.ReactNode;
  initialUser?: string;
}

export const UserProvider: FC<IUserProviderProps> = ({
  children,
  initialUser = "",
}) => {
  const [user, setUser] = useState<string>(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
