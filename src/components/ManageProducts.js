import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import "./ManageProducts.css";

const API_URL = "http://localhost:3685/api/products";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);

      setProducts(response.data || []); // Ensure an array is always set
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Open Modal for Add/Edit
  const handleShowModal = (product = null) => {
    setSelectedProduct(product || { title: "", price: "", description: "", img: "", stock: "", category: "" });
    setEditMode(!!product);
    setShowModal(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  // Save or Update Product
  const handleSave = async () => {
    try {
      if (editMode) {
        await axios.put(`${API_URL}/${selectedProduct._id}`, selectedProduct);
        setProducts((prev) => prev.map((p) => (p._id === selectedProduct._id ? selectedProduct : p)));
      } else {
        const response = await axios.post(API_URL, selectedProduct);
        setProducts([...products, response.data]);
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="manage-products-container">
      <h2>Manage Products</h2>
      <Button className="add-product-btn" onClick={() => handleShowModal()}>
        + Add New Product
      </Button>

      {loading ? (
        <p>Loading...</p>
      ) : products?.length > 0 ? (
        
        <div className="products-list">
            {console.log(products)
            }
          {products.map((product) => (
            
            <div key={product._id} className="product-card">
                {console.log(product)
            }
              <img src={product.img} alt={product.title} className="product-img" />
              <div className="product-info">
                <h4 className="product-title">
                  {product.title}
                </h4>
                <p className="product-desc">
                  { product.description}
                </p>
                <p className="product-price">₹{product.price}</p>
                <p className="product-stock">Stock: {product.stock}</p>
                <p className="product-category">Category: {product.category}</p>
              </div>
              <div className="product-actions">
                <Button variant="warning" className="edit-btn" onClick={() => handleShowModal(product)}>
                  Edit
                </Button>
                <Button variant="danger" className="delete-btn" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products available</p>
      )}

      {/* Modal for Adding & Editing Product */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Edit Product" : "Add New Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={selectedProduct?.title || ""} onChange={handleChange} maxLength={30} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={selectedProduct?.description || ""} onChange={handleChange} maxLength={100} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={selectedProduct?.price || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="img" value={selectedProduct?.img || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" value={selectedProduct?.stock || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" value={selectedProduct?.category || ""} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProducts;
