import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSales() {
  const [sales, setSales] = useState({
    productid: "",
    quantity: "",
    price: "",
    timestamp: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {
    const result = await axios.get(`http://localhost:8080/sales/${id}`);
    setSales(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Sales Details</h2>

          <div className="card">
            <div className="card-header">
              Sales Details: {sales.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Product_ID: </b>
                  {sales.productid}
                </li>
                <li className="list-group-item">
                  <b>Quantity: </b>
                  {sales.quantity}
                </li>
                <li className="list-group-item">
                  <b>Price: </b>
                  {sales.price}
                </li>
                <li className="list-group-item">
                  <b>Date: </b>
                  {sales.timestamp}
                </li>
              </ul>
            </div>
          </div>
          
          
          <Link className="btn btn-secondary mb-2 m-4" to={"/sales"}>
            Back to Sales
          </Link>
          </div>
          </div>
    </div>
  );
}