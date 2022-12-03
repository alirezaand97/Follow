import "./assets/css/yekan.css";
import "animate.css/animate.css";
import "@/i18n";
import "@/assets/css/main.min.css";

<<<<<<< HEAD
import App from "./app";
=======
import App from "./app_app";
>>>>>>> 2a6c2c0 (initial commit)
import { ConfigProvider } from "antd";
import { ErrorBundary } from "./components/general";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import fa_IR from "antd/lib/locale/fa_IR";
import { injectStore } from "./utils/axios_base_query";
import { persistStore } from "redux-persist";
import store from "./store";

let persistor = persistStore(store);
injectStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBundary>
          <ConfigProvider
            locale={fa_IR}
            direction="rtl"
            theme={{
              token: {
                fontFamily: "YekanBakhMedium ",
                colorPrimary: "#0095e8",
                colorPrimaryBgHover: "#edf9ff",
                colorTextBase: "#5e6278",
                borderRadius: 5,
                colorBgLayout: "#f5f8fa",
                colorBorder: "#eff2f5",
              },
            }}
          >
            <App />
          </ConfigProvider>
        </ErrorBundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
