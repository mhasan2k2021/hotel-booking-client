import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import RoomBook from "../components/RoomBook/RoomBook";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:bookId",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/book/${params.bookId}`);
        },
        element: (
          <PrivateRoute>
            <RoomBook></RoomBook>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
