import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyout from "./layout/MainLoyout"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Shop from "./pages/Shop/Shop"
import {Toaster} from 'react-hot-toast'
import Checkout from "./pages/Checkout/Checkout"
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes"
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLoyout></MainLoyout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/cart',
          element:<PrivateRoutes><Cart></Cart></PrivateRoutes>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
