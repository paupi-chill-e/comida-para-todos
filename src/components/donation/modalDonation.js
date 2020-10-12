import React from "react";
import "../donation/styles/modalDonation.css";


const ModalDonation = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-text">Esta siendo redirigido a Yodono para efectuar su donacion en dinero</p>
        <a href="https://yodono.cl/donar/207">
         <button onClick={props.close} className="btn-modal"  target="_blank" >
          {" "}
          OK{" "}
        </button>
        </a>
      </div>
      
    </div>
  );
};

export default ModalDonation;
