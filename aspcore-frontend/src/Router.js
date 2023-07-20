import { createBrowserRouter, } from "react-router-dom";
import Home from "./Pages/Home";
import EventCreate from "./Pages/Home/Create";
import EventEdit from "./Pages/Home/Edit";
import HomeCategory from "./Pages/Categories";
import CategoryCreate from "./Pages/Categories/Create";
import CategoryEdit from "./Pages/Categories/Edit";
import User from "./Pages/Users";
import UserCreate from "./Pages/Users/Create";
import UserEdit from "./Pages/Users/Edit";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/event/create',
        element: <EventCreate />,
    },
    {
        path: '/event/edit/:event_id',
        element: <EventEdit />,
    },
    {
        path: '/categories',
        element: <HomeCategory />,
    },
    {
        path: '/categories/create',
        element: <CategoryCreate />,
    },
    {
        path: '/categories/edit/:category_id',
        element: <CategoryEdit />,
    },
    {
        path: '/users',
        element: <User />,
    },
    {
        path: '/users/create',
        element: <UserCreate />,
    },
    {
        path: '/users/edit/:user_id',
        element: <UserEdit />,
    },
]);
