import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BackgroundProvider } from "./components/organisms/Background/BackgroundContext/BackgroundContext";
import Background from "./components/organisms/Background/Background";
import { UserProvider } from "./shared/contexts/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BackgroundProvider>
        <Background>
          <App />
        </Background>
      </BackgroundProvider>
    </UserProvider>
  </React.StrictMode>
);
