import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, updateProduct } from "../redux/actions/ProductActions";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.products);
  const [update, setUpdate] = useState()
  const [loading, setLoading] = useState()


  const [form, setForm] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productImageUrl: "",
  });

  const getProduct = async (id) => {
    try {
        setLoading(true)
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      const data = await response.data;
      setLoading(false)
    //   dispatch(selectedProduct(data));
    //   console.log(data);
      setForm({...data, productName: data.title, productPrice: data.price, productDescription: data.description, productCategory: data.category, productImageUrl: ""});
      
    } catch (error) {
      // Handle error
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  

  const productItems = {
    title: form.productName,
    description: form.productDescription,
    price: form.productPrice,
    category: form.productCategory,
    image: form.productImageUrl
  }

  const updateProductItem = async (e) => {
    e.preventDefault()
    try {
        await axios.put(`https://fakestoreapi.com/products/${id}`, productItems)
        .then(res => {
            alert("product updated successfully")
            dispatch(updateProduct(res.data))
            console.log(res.data)
        });
        
    } catch (error) {
        console.log(error.meesage);
        
    }
  }

  return (
    <div className="ui container" style={{ marginTop: 30 }}>
      {product.id === undefined?  <>Loading...</> :
      <>
      <h2 className="ui header">Add New Product</h2>
      <form className="ui form">
        <div className="field">
          <label>Product Name</label>
          <input
            type="text"
            value={form.productName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, productName: e.target.value }))
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
              value={form.productPrice}
              onChange={(e) =>
                setForm((prev) => ({
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
            value={form.productCategory}
            onChange={(e) =>
              setForm((prev) => ({
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
            value={form.productDescription}
            onChange={(e) =>
              setForm((prev) => ({
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
            value={form.productImageUrl}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                productImageUrl: e.target.value,
              }))
            }
          />
        </div>

        <button
          type="submit"
          onClick={(e) => updateProductItem(e)}
          className="ui primary button"
        >
          Update Product
        </button>
      </form>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
      <script>$('.ui.dropdown').dropdown();</script>
      </>
        }
    </div>
  );
};

export default UpdateProduct;
