import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./About.module.scss";
import AboutImage from "../SVG/AboutImage.svg";
import Vector2 from "../SVG/Vector2.svg";


const About = () => {
    return (
        <div >
            <Navbar />
            <div className={styles.aboutPage}>
                  <div className={styles.aboutHeaders}>
                        <h1 className={styles.aboutH1}>About community</h1>
                        <h3 className={styles.aboutH3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                  </div>
                  <div className={styles.aboutImage}>
                        <img src={AboutImage} alt="" />
                  </div>
            </div>
            <div className={styles.vector2Image}>
                    <img src={Vector2} alt="" />
            </div>
        </div>
    )
}

export default About