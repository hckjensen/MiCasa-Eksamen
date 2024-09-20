import styles from "./Nav.module.scss"
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";


const Nav = ({ items }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <div onClick={toggleNav} className={styles.hamburger}>
                <Hamburger />
            </div>


            <ul className={styles.list}>
                {items.map(item => (
                    <li className={styles.listItem} key={item.id}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? styles.active : ''}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

Nav.propTypes = {
    items: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default Nav