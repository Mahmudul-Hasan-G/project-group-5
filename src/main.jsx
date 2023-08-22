import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import PoliNews from './components/PoliNews/PoliNews';
import SportsNews from './components/SportsNews/SportsNews';
import EntertainmentNews from './components/EntertainmentNews/EntertainmentNews';
import AboutUs from './components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/politics",
    element:<PoliNews />,
  },
  {
    path:"/sports",
    element:<SportsNews />,
  },
  {
    path: "/entertainment",
    element:<EntertainmentNews />,
  },
  {
    path: "/aboutus",
    element:<AboutUs />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
