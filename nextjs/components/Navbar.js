import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css';

function NavBar() {
    return (
        <div className={styles.bg}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/posts'>Posts</Link>
        </div>
    )
}

export default NavBar
