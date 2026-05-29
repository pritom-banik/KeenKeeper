import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx';
import Details from './components/details/Details.jsx';
import Timeline from './components/timeline/Timeline.jsx';
import Stats from './components/stats/Stats.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      {index:true,Component:Home},
      {path:'details/:id',Component:Details},
      {path:'timeline',Component:Timeline},
      {path:'stats',Component:Stats}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
