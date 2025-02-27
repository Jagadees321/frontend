import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3685/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart (API not ready)`);
  };

  const truncateText = (text) => {
    if (!text || text.length < 20) {
      console.error("Text is too short or missing");
      return "Not available";
    }
    return text.length > 20 ? text.substring(0, 20) + "..." : text;
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card shadow-sm h-100 d-flex flex-column align-items-center">
              <img src={product.img} className="card-img-top" alt={product.title} style={{
                height: "300px",
                width: "90%",
                objectFit: "fill",
                display: "block",
                margin: "2% auto"
              }} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{truncateText(product.title)}</h5>
                <p className="card-text">{truncateText(product.description)}</p>
                <h6 className="text-primary">${product.price}</h6>
                <button className="btn btn-dark mt-auto" onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
