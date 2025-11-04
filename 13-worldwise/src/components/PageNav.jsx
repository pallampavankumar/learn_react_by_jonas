import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
function PageNav() {
  return (
      <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to='/' label='Home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/product' label='Product'>Product</NavLink>
            </li>
            <li>
                <NavLink to='/pricing' label='Pricing'>Pricing</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default PageNav
