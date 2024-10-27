import React, { useState } from 'react'
import Navbar from './Navbar'
import MainCont from './MainCont'
import Footer from './Footer'
import { CartCount } from './context/CartCount';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';

const App = () => {
  let [state, setState] = useState({
    count: 0,
    items: []
  });
  let router = createBrowserRouter([
    {
      path: "/",
      element: <CartCount.Provider value={{ state, setState }}>
                  <Navbar />
                  <MainCont />
                  <Footer />
                </CartCount.Provider>
    },
    {
      path: "/cart",
      element: <CartCount.Provider value={{state,setState}}>
                  <Cart />
              </CartCount.Provider>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
