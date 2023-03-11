import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import RequestImport from './pages/RequestImport/RequestImport'
import Contact from './pages/Contact/Contact'
import Registrer from './pages/Registrer/Registrer'
import FooterLinks from './pages/FooterLinks/FooterLinks'


import './global.css'

const Layout = () => {
  return (
    <div className ="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:catID",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/requestImport",
        element:<RequestImport />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/registrer",
        element:<Registrer />
      },
      {
        path:"/aboutus",
        element:<FooterLinks />
      }
      
    ],
  },


])


function App() {
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;