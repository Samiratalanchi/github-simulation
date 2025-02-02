import '../App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "../pages/Login/login.tsx"

function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ])
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
}

export default App;
