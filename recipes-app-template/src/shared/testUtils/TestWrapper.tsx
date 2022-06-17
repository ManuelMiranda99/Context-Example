import { FC } from "react";
import {
  BackgroundProvider,
  BackgroundThemes,
} from "../../components/organisms/CardList/Background/BackgroundContext/BackgroundContext";
import { UserProvider } from "../context/UserContext/UserContext";

interface TestWrapperProps {
  children: React.ReactNode;
  bgInitial?: BackgroundThemes;
  initialUser?: string;
}

export const TestWrapper: FC<TestWrapperProps> = ({
  children,
  bgInitial,
  initialUser,
}) => {
  return (
    <BackgroundProvider initialTheme={bgInitial}>
      <UserProvider initialUser={initialUser}>{children}</UserProvider>
    </BackgroundProvider>
  );
};
