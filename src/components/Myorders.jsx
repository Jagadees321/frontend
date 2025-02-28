import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Form, Image } from "react-bootstrap";
import "./Myorders.css";

const API_URL = "http://localhost:3685/api/orders";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get user details from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      // Filter only logged-in user's orders
      const userOrders = response.data.orders.filter((order) => order.userid._id === user._id);
      setOrders(userOrders);
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

  // Handle Status Change (Only Allow Cancel)
  const handleStatusChange = (e) => {
    if (e.target.value === "cancelled") {
      setSelectedOrder({ ...selectedOrder, status: e.target.value });
    }
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

  return (
    <div className="my-orders-container">
      <h2>My Orders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : orders.length > 0 ? (
        <Table striped bordered hover className="my-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
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
                  {order.status !== "cancelled" && (
                    <Button variant="warning" onClick={() => handleEdit(order)}>Cancel Order</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="no-orders">You have no orders yet.</p>
      )}

      {/* Edit Order Status Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <Form>
              <Form.Group>
                <Form.Label>Order Status</Form.Label>
                <Form.Select value={selectedOrder.status} onChange={handleStatusChange}>
                  <option value="pending" disabled>Pending</option>
                  <option value="shipped" disabled>Shipped</option>
                  <option value="delivered" disabled>Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Confirm Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyOrders;
