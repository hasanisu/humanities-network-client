import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../adminPage/AdminLogin/AdminLogin";
import Users from "../adminPage/Users/Users";
import Dashboard from "../layout/Dashbord";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Register/Login/Login";
import Signup from "../pages/Register/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Signup></Signup>
            }
        ]
    },


    {
        path:'/admin',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/admin/login',
                element:<AdminLogin></AdminLogin>  
            },
            {
                path:'/admin/users',
                element:<Users></Users>
            }
        ]
    }
])