import React from 'react'
import "./CSS/styletask1.css"

export default function Header() {
  return (
    <div>
        <nav className='navbar'>
            <div className='logo'>
                <p>Shivaa</p>
            </div>
            <div className='listname'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Page</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='icon'>
                <p><i class="fa-solid fa-magnifying-glass"></i><i class="fa-solid fa-magnifying-glass"></i></p>
            </div>
        </nav>
    </div>
  )
}
