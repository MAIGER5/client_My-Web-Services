import React from 'react';
import styles from './navBar_Desktop.module.css'

export const NavBar_Desktop = () => {
  return (
    <div className={styles.container}>
      <p>Logo</p>
      <ul>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
      </ul>
      <p>WhatsApp</p>
    </div>
  )
}
