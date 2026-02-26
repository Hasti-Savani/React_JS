import React from 'react'
import Navbar from './Navbar'
import Post from './Post';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
    };
{
    path: "/post"
    element: <Post />,
    };

]);

const Layout = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Layout;

