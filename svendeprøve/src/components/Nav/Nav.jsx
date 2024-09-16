import styles from "./Nav.module.scss"
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = ({ items }) => {

    return (
        <nav className={styles.nav}>
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
    items: PropTypes.array.isRequired
}

export default Nav