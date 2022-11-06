import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyout from "./layout/MainLoyout"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Shop from "./pages/Shop/Shop"

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
          element:<Cart></Cart>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
