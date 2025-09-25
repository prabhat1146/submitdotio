import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  data,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./styles/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./AllPages.jsx";
import Error from "./error/Error.jsx";
import Home from "./layout/Home.jsx";
import { ThemeContextProvider, SideBarContextProvider } from "./AllPages.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

const routesEle = (
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route path="" element={<Home />}></Route>
  </Route>
);
const routesFromElement = createRoutesFromElements(routesEle);

const browserRouter = createBrowserRouter(routesFromElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideBarContextProvider>
      <ThemeContextProvider>
        {/* <RouterProvider router={browserRouter}>
          <App />
        </RouterProvider> */}
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeContextProvider>
    </SideBarContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
