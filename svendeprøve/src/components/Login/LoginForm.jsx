import styles from "./Login.module.scss";
import { useAuth } from '../../providers/AuthProvider';
import { useLogout, useLogin } from '../../hooks/useAuthenticationLogic.jsx';
import { RotatingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';

const LoginForm = ({ title, titleColor, page }) => {
    const { user } = useAuth();
    const handleLogout = useLogout();
    const { email, setEmail, password, setPassword, error, handleLogin, isLoggingIn } = useLogin(page);




    return (
        <div className={styles.loginForm}>
            {user && !isLoggingIn ? (
                <div className={styles.logout}>
                    <p>Du er logget ind.</p>
                    <button className={styles.button} onClick={handleLogout}>Log ud</button>
                </div>
            ) : (
                <div className={styles.loginForm}>
                    <h3 style={{ color: titleColor }} >{title}</h3>

                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Indtast din email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Indtast dit password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className={styles.button} type="submit" disabled={isLoggingIn}>
                            {isLoggingIn ? <RotatingLines height={10} width={10} /> : 'Log ind'}
                        </button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            )}
        </div>
    );
};

LoginForm.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
    page: PropTypes.string
}

export default LoginForm;