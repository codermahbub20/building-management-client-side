import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Apartment from "../Pages/ApartMent/Apartment";
import DashboardLayout from "../Layouts/DashboardLayout";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "apartment",
          element: <Apartment></Apartment>,
          loader: () => fetch(`http://localhost:5000/apartmentsCount`)
        }
      ]
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/login",
      element: <LogIn></LogIn>
    },
    {
      path:"/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          
        }
      ]
    }
  ]);