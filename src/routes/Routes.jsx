import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Regester from "../pages/Login/Regester/Regester";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"Category/0"}></Navigate>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Regester></Regester>
            },
            {

                path: "terms",
                element: <Terms></Terms>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "career",
                element: <Career></Career>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router;