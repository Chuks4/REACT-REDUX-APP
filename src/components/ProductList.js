import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProduct } from "../redux/actions/ProductActions";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const url = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      await axios.get(url).then((res) => {

    
          dispatch(setProduct(res.data));

       
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="ui grid container">
        <ProductComponent />
    </div>
    </>
  );
};

export default ProductList;
