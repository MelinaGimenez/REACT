import React from 'react'

const Message = ({ children, tipe }) => {
  return (
    <div className={`alert ${tipe}`}>{children}</div>
  )
}

export default Message