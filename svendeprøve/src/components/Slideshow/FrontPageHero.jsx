import styles from "./Slideshow.module.scss";
import PropTypes from 'prop-types';


const FrontPageHero = ({ children }) => {

    return (
        <section className={styles.frontPageHero}>

            {children}

        </section>
    )
}

FrontPageHero.propTypes = {
    children: PropTypes.node
}


export default FrontPageHero;