import React from "react";
import Navbar from "../Navbar/Navbar";
import homeImage from "../SVG/undraw_reading_time_gvg1.svg";
import vector1 from "../SVG/Vector1.svg";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div >
            <Navbar />
            <div className={styles.homePage}>
                  <div className={styles.homeHeaders}>
                    <div>
                        <h1 className={styles.homeH1}>Hi reader!</h1>
                        <h3 className={styles.homeH3}>If you are a books consumer,
                        here is a good place to start.</h3>
                    </div>
                    <div>
                        <a href='/'>
                        <button className={styles.homeStart}>Start Journey</button>
                        </a>
                    </div>
                  </div>
                <div className={styles.homeImage}>
                    <img src={homeImage} alt="" />
                </div>
            </div>
            <div className={styles.vectorImage}>
                    <img src={vector1} alt="" />
            </div>
        </div>
    )
}

export default Home

