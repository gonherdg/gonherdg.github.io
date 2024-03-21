import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Main from './pages/Main';
import ErrorPage from './pages/ErrorPage';
import Blog from './pages/Blog';
import SivProject from './pages/SivProject/SivProject';
import SivPrivacyPolicy from './pages/SivProject/SivPrivacyPolicy';
import reportWebVitals from './reportWebVitals';
import './i18n/config';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "siv",
    element: <SivProject/>
  },
  {
    path: "siv/privacy-policy",
    element: <SivPrivacyPolicy/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
