import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import axios from "axios";
import { setProducts } from "../Redux/actions/products";

export const ProductListing = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => console.log(err.message));
    dispatch(setProducts(response.data));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch();
  }, []);

  return (
    <>  
    {loading ?(<div><br /><br /><h1 style={{margin:'0 auto', marginTop:'20%'}}>Please Wait While Loading</h1></div>):(<div>
      <h1 style={{marginTop:'100px'}}>All Products</h1>
      <ProductCard />
    </div>)}
    </>
    
    
  );
};
