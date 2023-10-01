// ProductForm.js
import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({ id: '', name: '', price: '', category: 'electronics' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ id: '', name: '', price: '', category: 'electronics' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="Product ID" value={product.id} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Selling Price" value={product.price} onChange={handleChange} required />
      <select name="category" value={product.category} onChange={handleChange}>
        <option value="electronics">Electronics</option>
        <option value="food">Food items</option>
        <option value="skincare">Skincare items</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
