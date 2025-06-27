import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
      </div>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);