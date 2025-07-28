import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";

export const Root = () => {
      const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}