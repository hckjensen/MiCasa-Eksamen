import styles from './Layout.module.scss';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { useAuth } from '../../providers/AuthProvider';

const Layout = ({ children, title }) => {

    const { user } = useAuth();

    let navItems = [

    ]

    if (user) {
        navItems =
            [{ title: 'Forside', path: '/' },
            { title: 'Boliger', path: '/boliger' },
            { title: 'Kontakt', path: '/kontakt' },
            { title: 'Min Side', path: '/admin' }]


    } else {
        navItems = [
            { title: 'Forside', path: '/' },
            { title: 'Boliger', path: '/boliger' },
            { title: 'Kontakt', path: '/kontakt' },
            { title: 'Login', path: '/login' }
        ]
    }

    return (
        <div className={styles.layout}>
            <Header navItems={navItems} />
            <main>
                <ContentWrapper title={title}>
                    {children}
                </ContentWrapper>
            </main>
            <Footer navItems={navItems} />

        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default Layout;