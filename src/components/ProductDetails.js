import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/ProductActions";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.allProducts.products);
  const getProduct = async (id) => {
    try {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        dispatch(selectedProduct(res.data));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);

      // {Object.keys(product).length === 0? <div>Loading</div>:
  // console.log("single",product);
  

  return (

     <div className="ui container">
      {product.id === undefined ? <div>Loading...</div>:
      (
        <div className="ui grid">
        <div className="ui row">
          {/* Product Image */}
          <div className="six wide column">
            <img
              src={product.image}
              alt={product.title}
              className="ui fluid image"
              style={{ borderRadius: "5px" }}
            />
          </div>

          {/* Product Details */}
          <div className="ten wide column">
            <h1 className="ui header">{product.title}</h1>
            <h2>
              <span className="ui teal tag label">${product.price}</span>
            </h2>
            <h3 className="ui header">Category: {product.category}</h3>
            <p>{product.description}</p>

            <div className="ui buttons">
              <button className="ui large teal button">Add to Cart</button>
              <div className="or"></div>
              <Link to={`/product/update/${product.id}`}><button className="ui large yellow button">Update Product</button></Link>
            </div>
          </div>
        </div>
      </div>
        

      )}



    </div>
 )
};

export default ProductDetails;
