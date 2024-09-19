import Layout from "../components/Layout/Layout";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {

    document.title = "MiCasa | Login";

    return (
        <>
            <Layout title="Login">
                <LoginForm title="Indtast email og password for at logge ind" titleColor="black" page="login" />
            </Layout>
        </>
    )

}

export default LoginPage;