import React from 'react';
import logo from "../SVG/logo.svg";
import styles from "./Navbar.module.scss";

import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink to="/" exact className={styles.logo} activeClassName={styles.active} >
                <a href="/"><img src={logo} alt=""/></a>
            </NavLink>
            <div className={styles.buttons}>
                <NavLink to="/about" className={styles.button} activeClassName={styles.active}>About</NavLink>
                <NavLink to="/contact" className={styles.button} activeClassName={styles.active}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar
