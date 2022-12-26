import React from "react";
import Product from "./Product";
import {Routes,Route} from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import SingleData from "./SingleData";
function Products({productList,onAddtoCart}){
return (<div className="bg-white md:max-w-4xl max-w-3xl mx-auto px-3 py-2 md:px-7 md:py-5 h-screen overflow-y-scroll">
   
  <Routes>
    <Route path="/" element={<Product productList={productList}/>}></Route>
    <Route path="/productdetail/:xyz" element={<SingleData onAddtoCart={onAddtoCart}/>}></Route>
 
</Routes>
  
 
</div>)

}
export default Products;
//  <Route path="/ProductDetail/:sku" element={<ProductDetail data={alldata}/>}></Route>