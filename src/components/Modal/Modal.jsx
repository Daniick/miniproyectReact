import React from "react";

const Modal = ({ isOpen, closeModal, content }) => {
  return (
    <div
      className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}
      onClick={closeModal}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full">
          <div className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
            <h2 className="text-xl font-semibold">Modal Title</h2>
            <button className="text-white" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="p-6">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
