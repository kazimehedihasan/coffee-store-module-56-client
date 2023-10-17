import { createBrowserRouter } from "react-router-dom";
import Layot from "./Layot";
import Home from "../components/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SingUp from "../components/UpdateCoffee/SingUp";
import Signin from "../components/Signin";
import Users from "../components/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layot />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },

      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SingUp/>
      },
      {
        path: '/Signin',
        element: <Signin/>
      },
      {
        path: '/users',
        element: <Users/>,
        loader: () => fetch('http://localhost:5000/user')
      }
    ],
  },
]);

export default Router;
