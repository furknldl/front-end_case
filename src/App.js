import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";
import ConfirmDialog from "./components/ConfirmDialog";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 30000 },
    { id: 2, name: "Telefon", price: 25000 },
    { id: 3, name: "Klavye", price: 1500 },
    { id: 4, name: "Mouse", price: 500 },
    { id: 5, name: "Monitör", price: 3000 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login işlemi başarılı olduğunda giriş yapılır
  const handleLogin = () => {
    setIsLoggedIn(true); // Giriş başarılı
  };

  // Ürün düzenleme işlemi
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Ürün silme işlemi
  const handleDelete = (id) => {
    setProductToDelete(id);
    setIsConfirmOpen(true);
  };

  // Yeni ürün ekleme işlemi
  const handleAddNewProduct = () => {
    setSelectedProduct(null); // Yeni ürün için hiçbir veriyi setlemiyoruz
    setIsModalOpen(true); // Modal'ı açıyoruz
  };

  // Ürün kaydetme işlemi
  const handleSave = (updatedProduct) => {
    if (updatedProduct.id) {
      // Düzenleme işlemi (id varsa)
      setProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    } else {
      // Yeni ürün ekleme işlemi (id yoksa)
      setProducts([...products, { ...updatedProduct, id: Date.now() }]);
    }
    setIsModalOpen(false); // Modal'ı kapatıyoruz
    setSelectedProduct(null); // Seçilen ürünü sıfırlıyoruz
  };

  // Silme işlemi onayı
  const handleConfirmDelete = () => {
    setProducts(products.filter((product) => product.id !== productToDelete));
    setIsConfirmOpen(false);
    setProductToDelete(null);
  };

  // Modal'ı kapatma işlemi
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Onay penceresini kapatma işlemi
  const handleCloseConfirmDialog = () => {
    setIsConfirmOpen(false);
    setProductToDelete(null);
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Kullanıcı giriş yapmadıysa Login bileşenini göster
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Ürün Yönetimi</h1>
          <button onClick={handleAddNewProduct}>Yeni Ürün Ekle</button> {/* Yeni ürün ekleme butonu */}
          <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
          <ProductModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSave}
            productToEdit={selectedProduct}
          />
          <ConfirmDialog
            isOpen={isConfirmOpen}
            onClose={handleCloseConfirmDialog}
            onConfirm={handleConfirmDelete}
            message="Bu ürünü silmek istediğinizden emin misiniz?"
          />
        </>
      )}
    </div>
  );
};

export default App;
