import '../App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "../pages/Login/login.tsx"
import Profile from "../pages/Profile/Profile.tsx"

function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile/:userName",
        element: <Profile />,
      },

    ])
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
}

export default App;
