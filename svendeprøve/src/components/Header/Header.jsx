import styles from "./Header.module.scss"
import Logo from "../../assets/Images/Logo.png"
import BG from "../../assets/Images/headerBG.png"
import Nav from "../Nav/Nav"

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.background} src={BG} alt="Header-BG" />
            <img className={styles.logo} src={Logo} alt="MiCasa-Logo" />


        </header>
    )
}

export default Header