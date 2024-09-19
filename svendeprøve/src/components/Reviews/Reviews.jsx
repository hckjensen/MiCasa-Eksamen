import styles from "./Reviews.module.scss";
import { useState } from "react";
import LoginForm from "../Login/LoginForm";
import { useAuth } from '../../providers/AuthProvider';


const Reviews = () => {

    const [isActive, setIsActive] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { user } = useAuth();


    const handleClick = () => {

        setIsActive(!isActive);
        setIsExpanded(!isExpanded);

    }



    return (
        <>
            <section className={styles.reviewSection} >
                <h1>Det siger vores kunder</h1>
                <section className={styles.review}>
                    <h2>Blah Blah</h2>
                    <p>“Jeg har haft en rigtig god oplevelse med MiCasa. De var hurtige til at finde en køber til min lejlighed og jeg følte mig i trygge hænder hele vejen igennem.”</p>
                    <p>– Mette, tidligere kunde</p>
                </section>
                <section className={styles.writeReview}>
                    <div className={styles.band}>
                        <div
                            onClick={handleClick}
                            className={`${styles.expandButton} ${isActive ? styles.active : ''}`}
                        >
                            <p>Skriv en anmeldelse</p>
                        </div>
                    </div>
                    <section className={`${styles.reviewForm} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={`${styles.formWrapper} ${isExpanded ? styles.visible : ''}`}>
                            <div className={styles.buttonContainer}>
                                <button className={styles.x} onClick={handleClick}>X</button>
                            </div>

                            {user ? (
                                <form className={styles.formContent}>
                                    <div>
                                        <label htmlFor="name">Navn:</label>
                                        <input type="text" id="name" name="name" placeholder="Indtast dit navn" />
                                    </div>
                                    <div>
                                        <label htmlFor="review">Anmeldelse:</label>
                                        <textarea id="review" name="review" placeholder="Skriv en anmeldelse" />
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <button type="submit">Send</button>
                                    </div>
                                </form>
                            ) : (<LoginForm title="Log ind for at skrive en anmeldelse" titleColor="white" />)}


                        </div>

                    </section>

                </section>
            </section>

        </>
    );
};

export default Reviews