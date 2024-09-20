import styles from './NewsLetterForm.module.scss';
import icon from '../../assets/Images/@icon.png';
import { useNewsLetterSignUp } from '../../hooks/useAuthenticationLogic';
import { RotatingLines } from "react-loader-spinner";



const NewsLetterForm = () => {

    const { email, setEmail, error, handleSignUp, isSigningUp, success } = useNewsLetterSignUp();

    return (
        <section className={styles.newsLetterForm}>
            <div className={styles.wrapper}>
                <h2>Få drømmehuset i din indbakke </h2>
                <p> Tildmeld dig til vores nyhedsbrev og få nye boliger sendt direkte til sin indbakke</p>
                <form onSubmit={handleSignUp}>
                    <div className={styles.container}>
                        <div className={styles.iconContainer}>
                            <img src={icon} alt="@" />
                        </div>
                        <input
                            type="email"
                            placeholder="Indtast din email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <button type="submit" disabled={isSigningUp}>
                            {isSigningUp ? <RotatingLines height={10} width={10} strokeColor='white' /> : 'Tilmeld'}
                        </button>


                    </div>
                    <div className={styles.validation}>
                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}
                    </div>

                </form>
            </div>

        </section>
    )


}

export default NewsLetterForm