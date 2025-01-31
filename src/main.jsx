
import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='w-10/12 mx-auto'>
<RouterProvider router={router} />
</div>
  </React.StrictMode>
)
