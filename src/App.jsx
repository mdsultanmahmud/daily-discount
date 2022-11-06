import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLoyout from "./layout/MainLoyout"
import Home from "./pages/home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLoyout></MainLoyout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
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
