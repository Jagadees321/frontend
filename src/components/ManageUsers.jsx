import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './ManageUsers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch all users
  useEffect(() => {
    axios.get('http://localhost:3685/api/getall')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Open modal to edit user
  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Handle update user details
  const handleSave = () => {
    axios.put(`http://localhost:3685/api/updateuser/${selectedUser.email}`, selectedUser)
      .then(() => {
        setUsers(prev => prev.map(u => (u.email === selectedUser.email ? selectedUser : u)));
        setShowModal(false);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  // Handle delete user (optional: need delete API if implemented)
  const handleDelete = (email) => {
    // If delete API is implemented, replace this with actual API call
    setUsers(prev => prev.filter(u => u.email !== email));
  };

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <Table striped bordered hover className="manage-users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phnno}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(user)} className="me-2">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(user.email)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={selectedUser.username} 
                  onChange={(e) => setSelectedUser({...selectedUser, username: e.target.value})} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={selectedUser.phnno} 
                  onChange={(e) => setSelectedUser({...selectedUser, phnno: e.target.value})} />
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

export default ManageUsers;
