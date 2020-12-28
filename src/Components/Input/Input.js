import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, type }) => {
    return (
        <div className={styles.input}>
            <p className={styles.inputP}>{label}</p>
            <input className={styles.inputField} type={type} name="User-name"></input>
        </div>
    )
}

export default Input