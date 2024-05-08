import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Bookservice from "../pages/Bookservice/Bookservice";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://58-car-doctor-server.vercel.app/services'),
            },

            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><Bookservice></Bookservice></PrivateRoute>,
                loader: ({ params }) => fetch(`https://58-car-doctor-server.vercel.app/services/${params.id}`),
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
            },




        ]
    },
]);

export default router;