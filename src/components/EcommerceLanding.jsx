import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import b1 from '../asserts/b1.jpg';
import b2 from '../asserts/b2.jpg';
import b3 from '../asserts/b3.jpg';

const EcommerceLanding = () => {
  return (
    <div className="container-fluid " >
      <div className="row" style={{margin:'10px 0px'}}>
        {/* Sidebar */}
        <div className="col-md-3 bg-light p-3" style={{height:'77vh'}}>
          <h5 className="text-danger fw-bold">&#9776; Shop By Categories</h5>
          <ul className="list-group list-group-flush" style={{height:'50%'}}>
            {[
              "Women",
              "Men",
              "Children",
              "Tops",
              "Bottoms",
              "Shoes",
              "Bags",
              "Accessories",
              "phones",
              "laptops",
              
            ].map((category) => (
              <li key={category} className="list-group-item">
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Banner Carousel */}
        <div className="col-md-9 p-0">
          <Carousel>
            {[b1,b2,b3].map((image, index) => (
              <Carousel.Item key={index}>
                <div
                  className="d-flex align-items-center justify-content-center text-white text-center"
                  style={{
                    height: "80vh",
                    background: `url(${image}) center/cover no-repeat`,
                  }}
                >
                  <div className="p-5 bg-dark bg-opacity-50 rounded">
                    <p className="text-danger">NEW ARRIVAL</p>
                    <h1>Fall - Winter 2021</h1>
                    <button className="btn btn-outline-light mt-3">Shop Now</button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default EcommerceLanding;
