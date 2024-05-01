import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
// import  { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import CheckoutPage from "./CheckoutPage";
// import delImgUrl from "../assets/images/shop/del.png";
import '../style/Settings.css'


export default function Setting() {
  
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   // Fetch cart items from local storage
  //   const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCartItems);
  // }, []);

  // // Calculate the total price for each item in the cart
  // const calculateTotalPrice = (item) => {
  //   return item.price * item.quantity;
  // };

  // // Handle quantity increase
  // const handleIncrease = (item) => {
  //   item.quantity += 1;
  //   setCartItems([...cartItems]);
  //   // Update local storage with the new cart items
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // };

  // // Handle quantity decrease
  // const handleDecrease = (item) => {
  //   if (item.quantity > 1) {
  //     item.quantity -= 1;
  //     setCartItems([...cartItems]);

  //     // Update local storage with the new cart items
  //     localStorage.setItem("cart", JSON.stringify(cartItems));
  //   }
  // };

  // // Handle item removal
  // const handleRemoveItem = (item) => {
  //   // Filter out the item to be removed
  //   const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
  //   // Update the state with the new cart
  //   setCartItems(updatedCart);
  //   // Update local storage with the updated cart
  //   updateLocalStorage(updatedCart);
  // };

  // // Update local storage with the cart items
  // const updateLocalStorage = (cart) => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };

  // // Calculate the cart subtotal
  // const cartSubtotal = cartItems.reduce((total, item) => {
  //   return total + calculateTotalPrice(item);
  // }, 0);

  // // Calculate the order total
  // const orderTotal = cartSubtotal;




  return (



    <>
    <Navbar/>
    <Box height={30} />
    <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {cartItems.map((item, indx) => ( */}
                    <tr>
                      {/* there is key with index  */}
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          {/* <Link to="/shop-single">
                            <img src={`${item.img}`} alt="" />
                          </Link> */}
                          image
                        </div>
                        <div className="p-content">
                          {/* <Link to="/shop-single">{item.name}</Link> */}
                           name
                        </div>
                      </td>
                      <td className="cat-price">{/* ${item.price} */}price </td>
                      
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            // mm 
                          >
                            
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            // mm 
                          />
                          <div
                            className="inc qtybutton"
                            // mm 
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        {/* mm  */}
                      </td>
                      <td className="cat-edit">
                        <a href="#" >
                          <img src="mm" alt="" />
                        </a>
                      </td>
                    </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div> 
            </div>
          </div>
        </div>
        </Box>
    </Box>  
    </>
  )
}


