import React, { useState } from 'react'
// import '../scss/components/_modal'

function Modal({ active, setActive, children }) {
  return (
    <div
      className={active === true ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active === true ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
export default Modal
