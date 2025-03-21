import React from "react";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-dialog">
      <p>{message}</p>
      <button onClick={onConfirm}>Evet</button>
      <button onClick={onClose}>Hayır</button>
    </div>
  );
};

export default ConfirmDialog;
