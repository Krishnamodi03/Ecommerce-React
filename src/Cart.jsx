import React, { useContext } from 'react'
import { CartCount } from './context/CartCount';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  let { state, setState } = useContext(CartCount);
  let { items, count } = state;
  let bagTotal = 0;
  let savings = 0;
  return (
    <div className="flex flex-col w-full min-h-screen p-4 md:flex-row md:gap-8 md:p-10">
      <div className="w-full md:w-2/3">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <NavLink className="ml-2 text-sm text-zinc-600" to="/">
            Homepage
          </NavLink>
        </div>
        <h1 className="text-2xl font-bold mb-4">MY SHOPPING BAG ({count})</h1>
        <div className="border-t-2 border-primary mb-4">
          <h2 className="bg-black text-white py-2 px-4">STANDARD DELIVERY</h2>
        </div>
        {items ? (
          items.map((item) => {
            bagTotal += item.price;
            savings += item.price*40/100;
            return (
              <div className="flex items-start p-4 mb-4 border rounded-lg" key={item.id}>
                <img src={item.image} alt="Product" className="w-28 h-28 mr-4" width="100" height="100" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <div className="mr-4">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="size">SIZE</label>
                      <button type="button" role="combobox" aria-controls="radix-:r4:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="size">
                        <span style={{ pointerEvents: "none" }}>M</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true" >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="mr-4">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="quantity">
                        QUANTITY
                      </label>
                      <button type="button" role="combobox" aria-controls="radix-:re:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="quantity">
                        <span style={{ pointerEvents: "none" }}>1</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-red-500">{Math.floor(Math.random() * 10)} left</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-lg font-bold text-primary mr-2">$ {item.price*40/100}</p>
                    <p className="text-sm text-muted-foreground line-through">$ {item.price}</p>
                    <p className="text-sm text-green-500 ml-2">40% Off</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-muted-foreground mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      MOVE TO WISHLIST
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No items in cart</h2>
        )}

      </div>
      {/* Order Summery Card */}
      <div className="w-full md:w-1/3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">ORDER SUMMARY</h3>
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <p>Bag Total ({count})</p>
              <p>$ {bagTotal}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Product Savings:</p>
              <p>- ${savings}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Payable Amount (Includes Tax)</p>
              <p className="font-bold">$ {bagTotal-savings}</p>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/80 h-10 px-4 py-2 w-full mb-4">
              CHECKOUT ({count})
            </button>
            <NavLink className="block mb-2 text-center text-black" to="/" rel="ugc">
              <p className='text-black hover:border-b-2'>MORE COUPONS</p>
            </NavLink>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-2 space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm">AEOGETAEXTRA15</p>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    REMOVE
                  </button>
                </div>
                <p className="text-sm text-green-600">AMERICAN EAGLE Applied ₹3,060 Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    // <div>
    //   <h1>Cart Data</h1>
    //   {items ? (
    //     items.map((item) => {
    //       return (
    //         <div key={item.id}>
    //           <h2>{item.title}</h2>
    //           <p>Price: {item.price}</p>
    //           <img src={item.image} alt="" height='100px' />
    //         </div>
    //       );
    //     })
    //   ) : (
    //     <h2>No items in cart</h2>
    //   )}
    // </div>
  );
}

export default Cart;