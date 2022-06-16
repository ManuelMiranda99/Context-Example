import { createContext, FC, useContext, useState } from "react";
import {
  UserContextInterface,
  UserProviderProps,
} from "../interfaces/Contexts.interface";

const UserContext = createContext<UserContextInterface>(undefined!);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider: FC<UserProviderProps> = ({
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
