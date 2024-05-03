import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookservice from "../pages/Bookservice/Bookservice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path: 'book/:id',
                element: <Bookservice></Bookservice>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },



        ]
    },
]);

export default router;