import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryCard from "../Pages/Home/CategoryCard";
import CategoryDetails from "../Pages/Home/CategoryDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allCategories/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/allCategories/${params.id}`)
            },
        ]
    }
])