import { useNavigate } from "react-router-dom";
import './Category.css';

const categories = [
  { name: "Women", products: 13, image: "women.png" },
  { name: "Tops", products: 2, image: "tops.png" },
  { name: "Shoes", products: 7, image: "shoes.png" },
  { name: "Men", products: 12, image: "men.png" },
  { name: "Kid", products: 14, image: "kid.png" },
  { name: "Fashion & Clothing", products: 11, image: "fashion.png" },
  { name: "Bottoms", products: 7, image: "bottoms.png" },
  { name: "Accessories", products: 13, image: "accessories.png" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Top Categories Of The Month</h2>
      <div className="categoryparent">
      <div className="category">
          <div className="catebox cb1">
            <div className="contentcb">
                <h6>Buds</h6>
                <span>10(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse2.mm.bing.net/th?id=OIP.YLqW4AbXQPVxOr-ZkFHuWAHaHa&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb2">
          <div className="contentcb">
                <h6>phone</h6>
                <span>7(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse2.mm.bing.net/th?id=OIP.Gcho6CdiGqoRg3F6ECUU3wHaJP&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb3">
          <div className="contentcb">
                <h6>Women</h6>
                <span>5(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://demo-51.woovinapro.com/wp-content/uploads/2018/09/product-01.jpg" alt="" />
            </div>
          </div>
          <div className="catebox cb4">
          <div className="contentcb">
                <h6>smartwatch</h6>
                <span>3(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse4.mm.bing.net/th?id=OIP.Jnf7NqDnwly50SGkQfokswHaIV&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb5">
          <div className="contentcb">
                <h6>Laptopbags</h6>
                <span>7(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse2.mm.bing.net/th?id=OIP.E8d2M0nq09LnBTm4sCgsWwHaIx&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb6">
          <div className="contentcb">
                <h6>laptops</h6>
                <span>3(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse4.mm.bing.net/th?id=OIP.hRT74lCuTvTqJbIM4JrAlgHaE1&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb7">
          <div className="contentcb">
                <h6>tv</h6>
                <span>8(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse1.mm.bing.net/th?id=OIP.7Vuz-hWldOMuC4sATsGZWQHaHa&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
          <div className="catebox cb8">
          <div className="contentcb">
                <h6>others</h6>
                <span>12(products)</span>
            </div>
            <div className="imgcb">
                <img src="https://tse1.mm.bing.net/th?id=OIP.0fxmsoNh_touNaybjr1EjAHaEK&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
