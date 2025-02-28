import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PromoSection from "./Promosection";
import contact from '../asserts/contact.png'

const ContactUs = () => {
    return (
        <div>
            <div className="img" style={{
                width: '100%',
                height: '30vh'
            }}>
                <img src={contact} alt="" />
            </div>
            <Container className="py-5 " style={{marginTop:'10px'}}>

                <Row className="align-items-start" style={{marginTop:'60px'}}>

                    {/* Contact Details */}
                    <Col md={6}>
                        <h2 className="mb-4">
                            We’d love to hear from you! Give us a call or find us on social media
                        </h2>

                        <Card className="p-3 mb-3">
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>123 Main Street, Anytown, CA 12345 – USA</Card.Text>
                            </Card.Body>
                        </Card>



                        <Card className="p-3">
                            <Card.Body>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    contact@domain.com

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Google Map */}
                    <Col md={6}>
                        <iframe
                            className="w-100 rounded shadow"
                            height="300"
                            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </Col>
                    <PromoSection />
                </Row>

            </Container>
        </div>
    );
};

export default ContactUs;
