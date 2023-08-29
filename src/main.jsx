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
import FullNews from './components/FullNews/FullNews';
import { NewsProvider } from './components/NewsContext/NewsContext';
import FullBnews from './components/FullBnews/FullBnews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/politics",
    element: <PoliNews />,
  },
  {
    path: "/sports",
    element: <SportsNews />,
  },
  {
    path: "/entertainment",
    element: <EntertainmentNews />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/fullnews/:id",
    element: <FullNews />,
  },
  {
    path: "/fullbnews/:id",
    element: <FullBnews />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <RouterProvider router={router} />
    </NewsProvider>

  </React.StrictMode>,
)
