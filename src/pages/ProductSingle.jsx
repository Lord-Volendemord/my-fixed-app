import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="single-product">
      <div className="single-product-card">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="single-product-image"
        />
        <div className="single-product-details">
          <h1>{product.title}</h1>
          <p className="single-description">{product.description}</p>
          <p className="single-price">Price: ${product.price}</p>
          <p className="single-brand">Brand: {product.brand}</p>
          <p className="single-category">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSingle;




