import React from "react";
import "./ModalCard.css";

const ModalCard = ({ isOpen1, closeModal1 }) => {
  return (
    <div className={`modal ${isOpen1 ? "open" : ""}`
    }>
      <div className="modal-content">
        {/* Add your modal content here */}
        <h2>Contact Details</h2>
        {/* Add the content you want inside the modal */}
        <span className="business" id="business2">
          Business Name : <span className="modern">Modern Furniture</span>
        </span>
        <span className="business">
          Business Details : <span className="modern"> Furniture Business</span>
        </span>
        <span className="business">
          Business Address :{" "}
          <span className="modern">
            4th Floor Office No. 401, A Block, A - 82, Sector 63, Noida, Uttar
            Pradesh 201301
          </span>
        </span>
        <span className="business">
          Business Contact No :
          <span className="modern">
            +917037298678
          </span>
        </span>
        <button onClick={closeModal1} className="businessbtn">
          Close
        </button>
        
      </div>
    </div>
  );
};

export default ModalCard;
