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
import AllUsers from "../Pages/Dashboard/AllUserrs/AllUsers";

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
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'mycart',
          
          element: <MyCard></MyCard>
        },
        {
          path:'allusers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

  export default router;