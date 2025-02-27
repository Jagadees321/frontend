import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PromoSection.css"; // Custom CSS for styling

const PromoSection = () => {
  return (
    <Container fluid className="promo-container">
      {/* Top Icons Section */}
      <Row className="text-center promo-icons">
        <Col>
          <i className="fas fa-shipping-fast"></i>
          <h6>Free Delivery</h6>
          <p>Free shipping worldwide</p>
        </Col>
        <Col>
          <i className="fas fa-user-check"></i>
          <h6>Member Discount</h6>
          <p>Free deals every week</p>
        </Col>
        <Col>
          <i className="fas fa-hand-holding-usd"></i>
          <h6>Money Back</h6>
          <p>Refund in 30 days</p>
        </Col>
        <Col>
          <i className="fas fa-credit-card"></i>
          <h6>Secure Payment</h6>
          <p>No transaction fees</p>
        </Col>
        <Col>
          <i className="fas fa-undo"></i>
          <h6>Free Return</h6>
          <p>Refund in 365 days</p>
        </Col>
      </Row>

      {/* Promo Cards Section */}
      <Row className="promo-cards">
        <Col md={4}>
          <Card className="promo-card promo-bg1">
            <Card.Body>
             
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="promo-card promo-bg2">
            <Card.Body>
             
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="promo-card promo-bg3">
            <Card.Body>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoSection;
