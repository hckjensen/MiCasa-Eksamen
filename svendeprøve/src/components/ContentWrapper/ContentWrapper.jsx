import styles from './ContentWrapper.module.scss';
import PropTypes from 'prop-types';


const ContentWrapper = ({ children, title }) => {

    return (
        <div className={styles.contentWrapper}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default ContentWrapper;