import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Homes/Home/Home";
import Recipes from "../Pages/recipes/Recipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Private from "../Pages/Private/Private";
import Blog from "../Pages/Blog";



const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://chef-master-server-jubairjnu.vercel.app/chefs')
      },
      {
        path:'/chefs/:id',
        element:<Private><Recipes></Recipes></Private>,
        loader:({params})=>fetch(`https://chef-master-server-jubairjnu.vercel.app/chefs${params.id}`)
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<Register></Register>
      },
      {
        path:'blog',
        element:<Blog></Blog>,
        loader:()=>fetch('https://chef-master-server-jubairjnu.vercel.app/blog')
      }
    ]
  }
])

export default router;