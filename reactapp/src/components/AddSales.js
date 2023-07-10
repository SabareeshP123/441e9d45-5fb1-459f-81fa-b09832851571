import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddSales() {
  let navigate = useNavigate();

  
  const [sales, setSales] = useState({
    productid: "",
    quantity: "",
    price: "",
    timestamp: "",
    
  });

  const { productid, quantity, price, timestamp } = sales;

  const onInputChange = (e) => {
    setSales({ ...sales, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/postsales", sales);
    navigate("/salestracker");
  };

  return (
    <div className='container w-50 justify-content-center'>
    <div className='row'>
      <div className='container justify-content-center bg-dark col-md-8 border rounded p-4 mt-2 text-white'>
          <h2 className="text-center m-4">Sales Details Entry</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Product_ID" className="form-label">
                Product_ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your product-id"
                name="productid"
                value={productid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Product Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Timestamp" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your date"
                name="timestamp"
                value={timestamp}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Place Sale
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/sales">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}