import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/H&F/Root.jsx";
import Error from "./Components/H&F/Error.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/H&F/Pages/Dashboard.jsx";
import Statistics from "./Components/H&F/Pages/Statistics.jsx";

import Gadgets from "./Components/H&F/Pages/Gadgets.jsx";
// import GadgetDetails from "./Components/H&F/Pages/GadgetDetails.jsx";
import GadgetsDetails from "./Components/H&F/Pages/GadgetsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: '/gadgets/:category',
      //   element: <Gadgets></Gadgets>,
      //   loader: () => fetch('./../public/GadgetsData.json')
      // },
      {
        path: "/gadgets/:product_id",
        element: <GadgetsDetails></GadgetsDetails>,
        loader: () => fetch('/public/GadgetsData.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
