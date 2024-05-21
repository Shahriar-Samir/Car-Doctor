import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Register from "../pages/Register"
import axios from "axios"
import CheckOut from "../pages/CheckOut"
import MyOrders from "../pages/MyOrders"
import PrivateRoute from "../Providers/PrivateRoute"


const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Register/>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut/></PrivateRoute>,
        loader: ({params})=>{
          return axios.get(`http://localhost:5000/services/${params.id}`)
        }
      },
      {
        path: '/myOrders',
        element: <PrivateRoute><MyOrders/></PrivateRoute>
      }
    ]
}])

export default router