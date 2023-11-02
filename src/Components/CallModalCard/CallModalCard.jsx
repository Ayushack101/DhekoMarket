import React from 'react'
import "./CallModalCard.css"
const CallModalCard = ({closeCallModal,openCallInterface}) => {
  return (
    <div className="modal1">
    <div className="modal-content1">
      <h2>Call Confirmation</h2>
      <p>Are you sure you want to make a call?</p>
      <div className="modal-buttons">
      <button onClick={()=>openCallInterface()}>Call</button>
        <button onClick={closeCallModal}>Cancel</button>
      </div>
    </div>
  </div>
  )
}

export default CallModalCard