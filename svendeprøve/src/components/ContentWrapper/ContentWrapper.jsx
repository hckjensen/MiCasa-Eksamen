import styles from './ContentWrapper.module.scss';
import PropTypes from 'prop-types';


const ContentWrapper = ({ children, title, headerContent }) => {

    return (
        <div className={styles.contentWrapper}>
            <section className={styles.contentHeader}>
                <h1>{title}</h1>
                {headerContent}
            </section>


            {children}
        </div>
    );
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    headerContent: PropTypes.node
}

export default ContentWrapper;