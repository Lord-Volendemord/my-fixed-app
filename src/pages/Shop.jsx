import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="shop">
      <h1 className="shop-title">Shop page</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
