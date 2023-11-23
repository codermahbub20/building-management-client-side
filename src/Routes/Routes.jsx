import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
  ]);