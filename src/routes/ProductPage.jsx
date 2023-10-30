import React from 'react';

function ProductPage({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Цена: {product.price}Р</p>
        <p>Размеры:</p>
        <ul>
          {product.sizes.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>
      <div className="product-description">
        <h3>Описание товара</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
