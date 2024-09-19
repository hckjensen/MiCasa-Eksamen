import styles from "./Reviews.module.scss";
import { useState, useEffect } from "react";
import LoginForm from "../Login/LoginForm";
import { useAuth } from '../../providers/AuthProvider';
import { usePostReview, useFetchReviews } from "../../hooks/useReviews";
import { RotatingLines } from "react-loader-spinner";
import { formatDate } from "../../utils/dateUtils";


const Reviews = () => {


    const { user } = useAuth();
    const { postReview, loading, setReview, setName, setTitle, hasCommented, isActive, setIsActive, isExpanded, setIsExpanded } = usePostReview();
    const { reviews } = useFetchReviews();
    const [randomReview, setRandomReview] = useState(null);

    useEffect(() => {

        const randomReview = reviews[Math.floor(Math.random() * reviews?.length)];
        setRandomReview(randomReview);

    }, [reviews]);





    const handleClick = () => {

        setIsActive(!isActive);
        setIsExpanded(!isExpanded);

    }



    return (
        <>
            <section className={styles.reviewSection} >
                <h1>Det siger vores kunder</h1>
                <section className={styles.review}>
                    <h2>{randomReview?.title}</h2>
                    <p>{randomReview?.content}</p>
                    <p>{randomReview?.user_name}, {formatDate(randomReview?.created_at)}</p>
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
                                hasCommented ? (
                                    <div className={styles.thankYouMessage}>
                                        <h1>Tak for din anmeldelse!</h1>

                                    </div>
                                ) : (

                                    <form className={styles.formContent}>
                                        <div>
                                            <label htmlFor="name">Navn:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Indtast dit navn"
                                                onChange={(e) => setName(e.target.value)}
                                            />

                                        </div>
                                        <div>
                                            <label htmlFor="title">Overskrift:</label>
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Giv din anmeldelse en overskrift"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />

                                        </div>
                                        <div>
                                            <label htmlFor="review">Anmeldelse:</label>
                                            <textarea
                                                id="review"
                                                name="review"
                                                placeholder="Skriv en anmeldelse"
                                                onChange={(e) => setReview(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.buttonContainer}>
                                            <button onClick={postReview} type="submit" disabled={loading}>
                                                {loading ? <RotatingLines height={10} width={10} /> : 'Send'}
                                            </button>
                                        </div>
                                    </form>

                                )

                            ) : (<LoginForm title="Log ind for at skrive en anmeldelse" titleColor="white" />)}


                        </div>

                    </section>

                </section>
            </section>

        </>
    );
};

export default Reviews