import styles from "./Header.module.scss"
import Logo from "../../assets/Images/Logo.png"
import Nav from "../Nav/Nav"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";



const Header = ({ navItems }) => {
    const navigate = useNavigate()


    return (
        <header className={styles.header}>
            {/* <img className={styles.background} alt="Header-BG" /> */}
            <section className={styles.headerContent}>
                <section className={styles.left}>
                    <img onClick={() => navigate('/')} className={styles.logo} src={Logo} alt="MiCasa-Logo" />
                </section>
                <section className={styles.right}>
                    <Nav className={styles.nav} items={navItems} />
                </section>


            </section>



        </header>
    )
}

Header.propTypes = {
    navItems: PropTypes.array.isRequired
}

export default Header