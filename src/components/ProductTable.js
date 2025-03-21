// src/components/ProductTable.js
import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Fiyat</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price} ₺</td>
            <td>
              <button onClick={() => onEdit(product)}>Düzenle</button>
              <button onClick={() => onDelete(product.id)}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
