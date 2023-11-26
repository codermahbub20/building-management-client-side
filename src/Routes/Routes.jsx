import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Apartment from "../Pages/ApartMent/Apartment";
import DashboardLayout from "../Layouts/DashboardLayout";
import AdminProfile from "../Pages/Dashboard/AdminRoute/AdminProfile";
import PrivateRoute from '../Routes/PrivateRoute'
import ManageMember from "../Pages/Dashboard/AdminRoute/ManageMember";
import AgreementRequest from "../Pages/Dashboard/AdminRoute/AgreementRequest";
import AdminAnnouncement from "../Pages/Dashboard/AdminRoute/AdminAnnouncement";
import UserHome from "../Pages/Dashboard/UserRoute/UserHome";
import Announcements from "../Shared/Announcements/Announcements";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <AdminProfile></AdminProfile>
      },
      {
        path: "manageMember",
        element: <ManageMember></ManageMember>
      },
      {
        path: "agreement",
        element: <AgreementRequest></AgreementRequest>
      },
      {
        path: "adminAnnouncement",
        element: <AdminAnnouncement></AdminAnnouncement>
      },
      // user route
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>
      }
    ]
  }
]);