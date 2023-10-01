import React from 'react';

function ProductList({ products, deleteProduct }) {
  const getCategoryLabel = (category) => {
    switch (category) {
      case 'electronics':
        return 'Electronics';
      case 'food':
        return 'Food items';
      case 'skincare':
        return 'Skincare items';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="product-list">
      <div className="category">
        <h2>Electronics</h2>
        {products.map((product) => (
          product.category === 'electronics' && (
            <div key={product.id}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )
        ))}
      </div>

      <div className="category">
        <h2>Food items</h2>
        {products.map((product) => (
          product.category === 'food' && (
            <div key={product.id}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )
        ))}
      </div>

      <div className="category">
        <h2>Skincare items</h2>
        {products.map((product) => (
          product.category === 'skincare' && (
            <div key={product.id}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default ProductList;
