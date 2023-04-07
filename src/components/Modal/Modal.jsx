import React from 'react'
import './Modal.css'

const Modal = ({visible,onClose,handleStep}) => {



  return (
    <div class={`popup modal ${visible ? "visible" : ""}`} >
    <div class="popup-header">
      <h2 class="popup-title">Confirm Form Submission</h2>
      <button class="popup-close-button" aria-label="Close popup" onClick={()=>onClose()}></button>
    </div>
    <div class="popup-content">
      <p class="popup-message">Are you sure you want to submit this form?</p>
    </div>
    <div class="popup-footer">
      <button class="popup-cancel-button" onClick={()=>onClose()}>Cancel</button>
      <button class="popup-confirm-button" onClick={()=>{onClose(); handleStep(prev=>prev-3)} } >Submit</button>
    </div>
  </div>
  
  )
}

export default Modal