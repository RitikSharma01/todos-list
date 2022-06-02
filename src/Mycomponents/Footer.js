import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"relative",
    top:"67.5vh",
    width: "100%",
  }
  return (
    <footer className='bg-dark p-2 text-light' style={footerStyle}>
    <p className='text-center'>Copyright &copy; MyTodoList.com</p>
      
    </footer>
  )
}
