import styles from "./Header.module.scss"
import Logo from "../../assets/Images/Logo.png"
import BG from "../../assets/Images/headerBG.png"
import Nav from "../Nav/Nav"
import SearchBar from "../SearchBar/SearchBar"
import PropTypes from 'prop-types';

const Header = ({ navItems }) => {
    return (
        <header className={styles.header}>
            <img className={styles.background} src={BG} alt="Header-BG" />
            <section className={styles.headerContent}>
                <section className={styles.left}>
                    <img className={styles.logo} src={Logo} alt="MiCasa-Logo" />
                </section>
                <section className={styles.right}>
                    <Nav items={navItems} />
                    <SearchBar />
                </section>


            </section>



        </header>
    )
}

Header.propTypes = {
    navItems: PropTypes.array.isRequired
}

export default Header