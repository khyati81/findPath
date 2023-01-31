import React from 'react'


const navbarStyles = {
    container:{
        display:"flex",
        alignItems:"center",
        padding:"10px 50px ",
        backgroundColor:"white",
    },
    para:{
        fontFamily: "'Rubik', sans-serif",
        fontSize:"30px",
        padding:"10px 0",
        color:"#1B31A8",
    }
}

const Navbar = () => {
  return (
    <div style={navbarStyles.container}>
        <p style={navbarStyles.para}>Find Path</p>
    </div>
  )
}

export default Navbar