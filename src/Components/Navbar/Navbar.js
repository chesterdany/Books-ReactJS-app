import React from 'react';
import logo from "../SVG/logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/"><img src={logo} alt=""/></a>
            </div>
            <div className={styles.buttons}>
                <button className={styles.about}> About</button>
                <button className={styles.contact}>Contact</button>
            </div>
        </div>
    )
}

export default Navbar
