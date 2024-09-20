import styles from './Hamburger.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };


    return (
        <div className={`${styles.menuBtn5} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
        </div>
    );
};

Hamburger.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
};

export default Hamburger;