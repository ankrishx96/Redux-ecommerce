import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top ">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">ShopICart</Link>
    </div>
  </nav>
  )
}
