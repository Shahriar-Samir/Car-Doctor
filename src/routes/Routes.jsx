import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"


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
    ]
}])

export default router