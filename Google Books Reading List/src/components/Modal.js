import React from 'react'
import '../stylesheets/modal.css';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Your Reading List</h4>
        </div>

        <ul className="modal-body">
          {props.readingList.map((book, idx) => (
            <li key={idx}>{book.title}, By {book.authors}</li>
          ))}
        </ul>

        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;