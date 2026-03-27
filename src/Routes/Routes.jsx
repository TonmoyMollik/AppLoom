import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import App from "../pages/App";
import Installation from "../pages/Installation";
import PageNotFound from "../pages/PageNotFound";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        Component: App,
      },
      {
        path: "/installation",
        loader: () => fetch("/allApp.json"),
        Component: Installation,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/allApp.json"),
        errorElement: <PageNotFound />,
        Component: AppDetails,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
