import React from "react";
import Product from "./Product";
import {Routes,Route} from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import SingleData from "./SingleData";
import Account from "./Account.jsx";
import Cart from "./Cart";
import Noproductfound from "./Noproductfound.jsx";
import HomePage from "./HomePage.jsx";
import LoginPage from "./LoginPage.jsx";
import SignupPage from  "./SignupPage.jsx";
import AboutUs from "./AboutUs.jsx";
import Passwordreset from "./Passwordreset.jsx";

function Products({productList,onAddtoCart,cartvalues}){
return (<div className="max-w-3xl mx-auto bg-white md:max-w-4xl ">
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Products" element={<Product productList={productList}/>}></Route>
    <Route path="/productdetail/:xyz" element={<SingleData onAddtoCart={onAddtoCart}/>}></Route>
    <Route path="/cart" element={<Cart />}/>
 <Route path="/account/*" element={<Account/>}/>
 <Route path="*" element={<Noproductfound/>}> </Route>
 <Route path="/account/Login" element={<LoginPage/>} />
 <Route path="/account/Signup" element={<SignupPage/>}/>
 <Route path="/AboutUs" element={<AboutUs/>}/>
 <Route path="/account/forgotpassword" element={<Passwordreset/>}/>
</Routes>
  
 
</div>)

}
export default Products;
//  <Route path="/ProductDetail/:sku" element={<ProductDetail data={alldata}/>}></Route>
// max-w-3xl px-3 py-2 mx-auto overflow-y-scroll bg-white md:max-w-4xl md:px-7 md:py-5"

// 