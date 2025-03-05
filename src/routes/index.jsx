import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout";
import HomePage from "../pages/home";
import Product from "../pages/productDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/phone/:id", element: <Product /> },
    ],
  },
]);
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
