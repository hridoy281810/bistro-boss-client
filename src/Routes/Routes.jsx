import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Sheared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import MyCard from "../Pages/Dashboard/MyCard/MyCard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivetRoute><Secret></Secret></PrivetRoute>
      }

      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          
          element: <MyCard></MyCard>
        }
      ]
    }
  ]);

  export default router;