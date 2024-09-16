import styles from "./Reviews.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Reviews = () => {

    const [isActive, setIsActive] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);


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
                        <div className={styles.formContainer}>
                            <p onClick={handleClick}>X</p>
                            <form className={styles.formContent}>
                                <div>
                                    <label htmlFor="name">Navn</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                                <div>
                                    <label htmlFor="review">Kommentar</label>
                                    <textarea id="review" name="review" />
                                </div>


                                <button type="submit">Send</button>
                            </form>

                        </div>

                    </section>

                </section>
            </section>

        </>
    );
};

export default Reviews