import { useEffect, useState } from "react";
import Data from "./data";
import Cart from "./cart";
import './style.css';
const ShopPage=()=>{
  const [myproducts,setMyproducts]=useState([]);
  useEffect(()=>{
    const existingProducts = JSON.parse(localStorage.getItem('cart')) ||[];
    setMyproducts(existingProducts)
  },[])
    const addProduct = (product)=>{
       const newProducts ={
        ...product,                     
        count:1
       }
       setMyproducts((preProduct)=>[...preProduct,newProducts]);
       localStorage.setItem('cart',JSON.stringify([...myproducts,newProducts]));
        alert('');
    }

    return(
        <>
        <section className="shop">
            <div className="container">
                <h1>This is My Shop</h1>
                <div className="shop">
                    {
                        Data.map((item,key)=>(
                          
                            <div className="item" key={{key}}>
                                    <h2>{item.title}</h2>
                                    {/* <img src={item.title}/> */}
                                    <p>{item.desc}</p>
                                    <span>Price :$ {item.price}</span>
                                    <button onClick={()=>addProduct(item)}>Add to Cart</button>
                             </div>
                        ))
                    }
                </div>
            </div>
        </section>
        {myproducts.length > 0 && <Cart cartData={myproducts}/>}
        </>
    )
}
export default ShopPage