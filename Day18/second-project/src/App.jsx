
import './App.css'
import {createBrowserRouter, RouterProvider} from "../node_modules/react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import Cats from './components/Cats/Cats'
import Dogs from './components/Dogs/Dogs'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Products from './components/Products/Products'
import AllProduct from './components/AllProduct/AllProduct'
function App() {
  const router= createBrowserRouter([
    {path:`/`,element:<Layout />,children:[
      {index:true,element:<Home />},
      {path:`/gallery`,element:<Gallery />,children:[
        {path:`cats`,element:<Cats />},
        {path:`dogs`,element:<Dogs />}
      ]},
      {path:`/about`,element:<About />},
      {path:`/product`,element:<Products />,children:[
        {path:`allProduct`,element:<AllProduct />}]},
      {path:`/contact`,element:<Contact />},
      {path:`*`,element:<Notfound />},
    ]}
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
