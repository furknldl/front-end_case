import React, { useState, useEffect } from "react";

const ProductModal = ({ isOpen, onClose, onSave, productToEdit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
    } else {
      setName(""); // Yeni ürün ekleniyorsa inputları temizle
      setPrice("");
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { id: productToEdit ? productToEdit.id : null, name, price: parseFloat(price) };
    onSave(updatedProduct);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{productToEdit ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ürün Adı:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fiyat:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kaydet</button>
        <button type="button" onClick={onClose}>
          Kapat
        </button>
      </form>
    </div>
  );
};

export default ProductModal;
