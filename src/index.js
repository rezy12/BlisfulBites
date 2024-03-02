import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from "./Pages/Menu/menu";
import Location from "./Pages/Locations/location";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/location",
      element: <Location />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
  ],
  {basename: "/Blissfullbites"}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);