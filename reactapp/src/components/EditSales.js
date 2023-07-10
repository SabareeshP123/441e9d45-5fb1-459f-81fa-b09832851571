import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditSales() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    const loadSales = async () => {
      const result = await axios.get(`http://localhost:8080/sales/${id}`);
      setSales(result.data);
    };
    loadSales();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updatesales/${id}`, sales);
    navigate("/");
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Sales Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Product_ID" className="form-label">
                Product_ID
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your productid"
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
                placeholder="Enter product price"
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
            <button type="submit" className="btn btn-outline-success">
              Update
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