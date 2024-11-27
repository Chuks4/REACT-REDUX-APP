import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productCategory: "",
    productPrice: 0,
    productImageUrl: "",
  });

  const productTag = {
    title: product.productName,
    price: product.productPrice,
    description: product.productDescription,
    image: product.productImageUrl,
    category: product.productCategory,
  };
  const [loading, setLoading] = useState(null)

  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
        await axios
      .post("https://fakestoreapi.com/products", productTag)
      .then((res) => {
        console.log(res.data);
        setLoading(false)
      });
    } catch (error) {
        console.log(error.message);
    }
      
  };
  return (
    <div className="ui container" style={{ marginTop: 30 }}>
        {loading? <>Loading...</>: <>Item was added successfully</>}
      <h2 className="ui header">Add New Product</h2>
      <form className="ui form">
        <div className="field">
          <label>Product Name</label>
          <input
            type="text"
            value={product.productName}
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, productName: e.target.value }))
            }
            placeholder="Enter product name"
          />
        </div>

        <div className="field">
          <label>Price</label>
          <div className="ui labeled input">
            <div className="ui label">$</div>
            <input
              type="number"
              value={product.productPrice}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  productPrice: e.target.value,
                }))
              }
              placeholder="Enter price"
            />
          </div>
        </div>
        <div className="field">
          <label>Category</label>
          <select
            value={product.productCategory}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                productCategory: e.target.value,
              }))
            }
            className="ui dropdown"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </div>
        <div className="field">
          <label>Product Description</label>
          <textarea
            value={product.productDescription}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                productDescription: e.target.value,
              }))
            }
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="field">
          <label>Product Images</label>
          <input
            type="file"
            value={product.productImageUrl}
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                productImageUrl: e.target.value,
              }))
            }
          />
        </div>
          
        <button type="submit" onClick={addProduct} className="ui primary button">
          Add Product
        </button>
      </form>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
      <script>$('.ui.dropdown').dropdown();</script>
    </div>
  );
};

export default AddProduct;
