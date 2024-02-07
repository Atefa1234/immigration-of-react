import React from 'react'
import '../views/header.css'

const Header = () => {
  return (
    <nav>
    <ul>
    
        <li><a href="./DESCRIPTION/indexdescription.html" target="_self">DESCRIPTION</a></li>
        <li><a href="#features" target="_self">FEATURES</a></li>
        <li><a href="./Screens/indexscreens.html" target="_self">SCREENS</a></li>
        <li class="extra">EXTRA <i class="fas fa-caret-down"></i>
            <div class="dropdown-manu">
        <ul>
            <li><a href="">ARTICLE DETAILS</a></li>
            <li><a href="">TERMS CONDITIONS</a></li>
            <li><a href="">PRIVACY AND POLICY</a></li>
        </ul>
            </div>
    </li>
        <li><a href="index.html" class="button">DOWNLOAD</a></li>
    </ul>
       
</nav>
  )
}

export default Header