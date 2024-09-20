import styles from "./Footer.module.scss"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NewsLetterForm from "../NewsLetter/NewsLetterForm";

const Footer = ({ navItems }) => {



    return (
        <footer className={styles.footer}>
            <h1>Mi Casa</h1>
            <div className={styles.content}>
                <section className={styles.contact}>
                    <ul>
                        <li>Øster Uttrupvej 5</li>
                        <li>9000 Aalborg</li>
                        <br />
                        <li>Email: info@homelands.dk</li>
                        <li>Telefon: +45 1122 3344</li>
                    </ul>
                </section>
                <section>
                    <nav>
                        <ul className={styles.list}>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className={styles.listItem}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </section>
                <NewsLetterForm />
            </div>

        </footer>
    )
}

Footer.propTypes = {
    navItems: PropTypes.array.isRequired
}

export default Footer