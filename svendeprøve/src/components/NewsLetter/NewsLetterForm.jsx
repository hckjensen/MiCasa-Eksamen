import styles from './NewsLetterForm.module.scss';
import icon from '../../assets/Images/@icon.png';

import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';



const NewsLetterForm = () => {

    const supabase = useContext(SupabaseContext);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);


    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const { data, error } = await supabase
            .from('newsletter_emails')
            .insert([{ email }]);

        if (error) {
            setErrorMessage('Kunne ikke sende til databasen - prøv igen senere' + error.message);
        } else {
            setSuccessMessage('Tak for din tilmelding!');
            setEmail('');

            const id = setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
            setTimeoutId(id);
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);


    return (
        <section className={styles.newsLetterForm}>
            <div className={styles.wrapper}>
                <h2>Få drømmehuset i din indbakke </h2>
                <p> Tildmeld dig til vores nyhedsbrev og få nye boliger sendt direkte til sin indbakke</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <div className={styles.iconContainer}>
                            <img src={icon} alt="@" />
                        </div>
                        <input
                            type="email"
                            placeholder="Indtast din email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Tilmeld</button>
                    </div>

                </form>
            </div>

        </section>
    )


}

export default NewsLetterForm