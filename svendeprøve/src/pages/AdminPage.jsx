import LoginForm from "../components/Login/LoginForm";
import Admin from "../components/Admin/Admin";
import Layout from "../components/Layout/Layout";
import styles from '../components/Admin/Admin.module.scss';


const AdminPage = () => {

    document.title = "MiCasa | Admin";

    return (
        <Layout title="Min Side">
            <div className={styles.adminWrapper}>
                <Admin />
                <LoginForm />
            </div>
        </Layout>
    );

}

export default AdminPage;