import React from "react";
import "./FlashDeals.css"; // Import CSS file

const FlashDeals = () => {
  const products = [
    {
      name: "BigCtiboi Sweater",
      category: "Accessories, Bottoms",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-04.jpg", // Replace with actual image URL
      originalPrice: 29.99,
      discountedPrice: 26.00,
    },
    {
      name: "Lion Dance Hoodie",
      category: "Women, Men, Kid",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-10.jpg",
      originalPrice: 79.00,
      discountedPrice: 65.00,
    },
    {
      name: "Teeworld 'TW' Tee",
      category: "Kid, Men, Women",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-11.jpg",
      originalPrice: 40.00,
      discountedPrice: null, // No discount
    },
    {
      name: "Natus Error Glasses",
      category: "Accessories, Kid, Men",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-08.jpg",
      originalPrice: 75.00,
      discountedPrice: 60.00,
    },
    {
      name: "One World Jacket",
      category: "Accessories, Bottoms",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-11.jpg",
      originalPrice: 49.00,
      discountedPrice: 39.00,
    },
    {
      name: "Teeworld Backpack",
      category: "Accessories, Bottoms",
      image: "https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-14.jpg",
      originalPrice: 28.00,
      discountedPrice: 25.00,
    },
  ];

  return (
    <div className="flash-deals-container">
  <h2 className="title">Top <span className="highlight">Flash</span> Deals</h2>

  <div className="deals-wrapper">
    {/* Left Banner */}
    <div className="banner">
      <img src="https://demo-51.woovinapro.com/wp-content/uploads/2020/11/banner-01.jpg" alt="Flash Deal Banner" />
    </div>

    {/* Right Section - Product Grid */}
    <div className="products-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          {product.discountedPrice && <span className="sale-badge">Sale!</span>}

          <div className="product-content">
            {/* Left: Product Image */}
            <img src={product.image} alt={product.name} className="product-image" />

            {/* Right: Product Details */}
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>

              <div className="product-price">
                {product.discountedPrice ? (
                  <>
                    <span className="original-price">${product.originalPrice}</span>
                    <span className="discounted-price">${product.discountedPrice}</span>
                  </>
                ) : (
                  <span>${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default FlashDeals;
