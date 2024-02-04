import { ConfigProvider } from "antd";
import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { themeConfig } from "./configs/themeConfig.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
