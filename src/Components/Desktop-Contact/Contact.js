import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from './Contact.module.scss';
import contactImage from "../SVG/contactImage.svg";
import Vector3 from "../SVG/Vector3.svg";
import Input from "../Input/Input";

const Contact = () => {
    return (
        <div >
            <Navbar />
            <div className={styles.contactPage}>
                  <div className={styles.contactInput}>
                        <div className={styles.contactHeader}>
                            <h1 className={styles.contactH1}>Contact</h1>
                        </div>
                        <div>
                            <Input label="Name" type="string"></Input>
                            <Input label="Email" type="email"></Input>
                            <div className={styles.text}>
                                <p className={styles.inputP}>Text</p>
                                <input className={styles.inputField2} type="string" name="User-name"></input>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.sendButton}>Send</button>
                        </div>
                  </div>
                  <div className={styles.contactImage}>
                        <img src={contactImage} alt="" />
                  </div>
            </div>
            <div className={styles.vector3Image}>
                    <img src={Vector3} alt="" />
            </div>
        </div>
    )
}

export default Contact