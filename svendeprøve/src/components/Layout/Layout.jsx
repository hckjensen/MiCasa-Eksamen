import styles from './Layout.module.scss';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import PropTypes from 'prop-types';

const Layout = ({ children, title }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <ContentWrapper title={title}>
                    {children}
                </ContentWrapper>
            </main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default Layout;