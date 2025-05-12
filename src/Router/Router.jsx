import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import History from "../Pages/History/History";
import Help from "../Pages/Help/Help";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import MyWorks from "../Pages/MyWorks/MyWorks";
import DashBors from "../Dashbord/DashBords";
import MyProfile from "../Dashbord/MyProfile";
import AdminAnnouncements from "../Dashbord/AdminAnnouncements";
import Announcements from "../Dashbord/Announcements";
import AllUsers from "../Dashbord/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/myworks",
        element: <MyWorks></MyWorks>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/Announcements",
        element: <Announcements></Announcements>,
      },
      {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    },
    ],
  },
  {
    path:'/dashbord',
    element:<DashBors></DashBors>,
    children:[
        
        {
            path: "myprofile",
            element: <MyProfile></MyProfile>,
          },
        {
            path: "adminAnnouncements",
            element: <AdminAnnouncements></AdminAnnouncements>,
          },
        {
            path: "allusers",
            element: < AllUsers></ AllUsers>,
          },
    ]
}
]);
