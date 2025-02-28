import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Form, Image } from "react-bootstrap";
import "./ManageOrders.css";

const API_URL = "http://localhost:3685/api/orders";

const Allorders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      setOrders(response.data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Open Edit Modal
  const handleEdit = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Handle Status Change
  const handleStatusChange = (e) => {
    setSelectedOrder({ ...selectedOrder, status: e.target.value });
  };

  // Save Order Status Update
  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}/${selectedOrder._id}`, { status: selectedOrder.status });
      setOrders((prev) => prev.map((o) => (o._id === selectedOrder._id ? selectedOrder : o)));
      setShowModal(false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  // Delete Order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setOrders(orders.filter((o) => o._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="manage-orders-container">
      <h2>Manage Orders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : orders.length > 0 ? (
        <Table striped bordered hover className="manage-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Products</th>
              <th>Total Amount</th>
              <th>Shipping Address</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  <strong>{order.userid?.username || "Unknown"}</strong>
                  <br />
                  <small>{order.userid?.email || "No email"}</small>
                </td>
                <td>
                  {order.products.map((p) => (
                    <div key={p.productid?._id} className="product-item">
                      <Image src={p.productid?.img} alt={p.productid?.title} className="product-img" />
                      <span>{p.productid?.title || "Product"} (x{p.quantity})</span>
                      <br />
                      <small>₹{p.productid?.price}</small>
                    </div>
                  ))}
                </td>
                <td>₹{order.totalamount}</td>
                <td>{order.shippingadd}</td>
                <td>{order.status}</td>
                <td>{order.payment}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(order)} className="me-2">Edit</Button>
                  <Button variant="danger" onClick={() => handleDelete(order._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="no-orders">No orders available</p>
      )}

      {/* Edit Order Status Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <Form>
              <Form.Group>
                <Form.Label>Order Status</Form.Label>
                <Form.Select value={selectedOrder.status} onChange={handleStatusChange}>
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Allorders;
