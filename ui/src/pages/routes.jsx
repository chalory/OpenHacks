import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "./Landing/Landing.page";
import Feed from "./Feed/Feed.page";
import Volunteer from "./Volunteer/Volunteer.page";
import Verification from "./Verification/Verification.page";
import Login from "./Login/Login.page";
import Signup from "./Signup/Signup.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "feed",
                element: <Feed />,
            },
            {
                path: "volunteer",
                element: <Volunteer />,
            },
            {
                path: "verification",
                element: <Verification />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
