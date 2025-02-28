import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (user && user._id) {
            axios.get(`http://localhost:3685/api/cart/${user._id}`)
                .then(response => setCart(response.data))
                .catch(error => console.error("Error fetching cart data:", error));
        }
    }, [user,cart]);

    const removeItem = (itemId) => {
        axios.delete(`http://localhost:3685/api/cart/${itemId}`)
            .then(() => {
                setCart(cart.filter(item => item._id !== itemId));
            })
            .catch(error => console.error("Error removing item:", error));
    };

    const placeOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items before placing an order.");
            return;
        }
        let shippingadd=prompt('enter address')
        const orderData = {
            userid: user._id,
            products: cart.map(item => ({ productid: item.productid, quantity: 1 })),
            shippingadd: shippingadd, 
            totalamount: cart.reduce((total, item) => total + item.price, 0),
            status: "pending",
            payment: "cash" 
        };

        axios.post(`http://localhost:3685/api/orders/${user._id}`, orderData)
            .then(() => {
                alert("Order placed successfully!");
                setCart([]);
            })
            .catch(error => console.error("Error placing order:", error));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Shopping Cart</h2>
            {cart.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {cart.map((item) => (
                        <li key={item._id} style={{ 
                            border: "1px solid #ddd", 
                            padding: "15px", 
                            marginBottom: "10px", 
                            borderRadius: "8px", 
                            display: "flex", 
                            justifyContent: "space-between", 
                            alignItems: "center",
                            background: "#f9f9f9"
                        }}>
                            <div>
                                <h3 style={{ margin: 0 }}>{item.title}</h3>
                                <p style={{ margin: "5px 0" }}>Price: ₹{item.price}</p>
                                <p style={{ fontSize: "14px", color: "#555" }}>{item.description}</p>
                            </div>
                            <button 
                                onClick={() => removeItem(item._id)} 
                                style={{ 
                                    background: "#ff4d4d", 
                                    color: "white", 
                                    border: "none", 
                                    padding: "8px 12px", 
                                    borderRadius: "5px", 
                                    cursor: "pointer", 
                                    fontSize: "14px"
                                }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: "center", fontSize: "18px", color: "#777" }}>Your cart is empty.</p>
            )}
            {cart.length > 0 && (
                <button 
                    onClick={placeOrder} 
                    style={{ 
                        display: "block", 
                        margin: "20px auto", 
                        background: "#28a745", 
                        color: "white", 
                        border: "none", 
                        padding: "10px 15px", 
                        borderRadius: "5px", 
                        cursor: "pointer", 
                        fontSize: "16px"
                    }}
                >
                    Order Now
                </button>
            )}
        </div>
    );
};

export default Cart;
