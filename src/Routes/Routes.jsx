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
import Coupon from "../Pages/Dashboard/AdminRoute/Coupon";
import MemberHome from "../Pages/Dashboard/MemberRoute/MemberHome";
import MakePayment from "../Pages/Dashboard/MemberRoute/MakePayment";
import PaymentCard from "../Pages/Dashboard/MemberRoute/PaymentCard";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import MemberRoute from "./MemberRoute";


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
      },
      
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
        element: <PrivateRoute><AdminRoute><AdminProfile></AdminProfile></AdminRoute></PrivateRoute>
      },
      {
        path: "manageMember",
        element: <PrivateRoute><AdminRoute><ManageMember></ManageMember></AdminRoute></PrivateRoute>
      },
      {
        path: "agreement",
        element: <PrivateRoute><AdminRoute><AgreementRequest></AgreementRequest></AdminRoute></PrivateRoute>
      },
      {
        path: "adminAnnouncement",
        element: <PrivateRoute><AdminRoute><AdminAnnouncement></AdminAnnouncement></AdminRoute></PrivateRoute>
      },
      {
        path: "coupon",
        element : <PrivateRoute><AdminRoute><Coupon></Coupon></AdminRoute></PrivateRoute>
      },
      // user route
      {
        path: "userHome",
        element: <PrivateRoute><UserRoute><UserHome></UserHome></UserRoute></PrivateRoute>
      },
      {
        path: "announcements",
        element: <PrivateRoute><UserRoute><Announcements></Announcements></UserRoute></PrivateRoute>
      },

      // Member route
      {
        path: "memberHome",
        element: <PrivateRoute><MemberRoute><MemberHome></MemberHome></MemberRoute></PrivateRoute>
      },
      {
        path : "payment",
        element: <PrivateRoute><MemberRoute><MakePayment></MakePayment></MemberRoute></PrivateRoute>  
      },
      {
        path: "payment/paymentCard/:id",
        element: <PrivateRoute><MemberRoute><PaymentCard></PaymentCard></MemberRoute></PrivateRoute>
      }
     

    ]
  }
]);

// payment/paymentCard/:id