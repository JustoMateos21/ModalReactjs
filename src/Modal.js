import React from "react";
import bakcground from "./assets/background.jpg";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <AiOutlineClose
        size={30}
        color="#000"
        onClick={closeModal}
        cursor={"pointer"}
      />
      <div className="container">
        <img src={bakcground} />
      </div>
    </div>
  );
};

export default Modal;
