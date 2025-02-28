import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; // Add custom styles if needed
import b1 from '../asserts/b1.jpg';
import PromoSection from "./Promosection";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-md-6">
          <h2>
            <strong>Welcome to</strong> Aden Shop
          </h2>
          <p>
            Aden Shop is simply dummy text of the printing and typesetting industry. We have
            used industry’s standard dummy text and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </p>
          <p>
            We have a long-established fact that a reader will be distracted by the readable
            page when looking at its layout. There are many variations of passages available.
          </p>

          <h4><strong>Our Mission</strong></h4>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </p>

          <h4><strong>Our Vision</strong></h4>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="col-md-6">
          <img
            src={b1} // Replace with actual image path
            alt="About Aden Shop"
            className="img-fluid rounded"
          />
        </div>
        <PromoSection/>
      </div>
      
    </div>
  );
};

export default About;
