import styles from "./Admin.module.scss"
import { useFetchUserReviews, useDeleteReview } from "../../hooks/useReviews";
import { formatDate } from "../../utils/dateUtils";

const Admin = () => {

    const { reviews, loading, setReviews } = useFetchUserReviews();
    const { deleteReview } = useDeleteReview();

    const handleDelete = async (id) => {
        await deleteReview(id);
        const updatedReviews = reviews.filter(review => review.id !== id);
        setReviews(updatedReviews);
    }


    return (

        <section className={styles.adminSection}>
            <h2>Admininstration af andmeldelser</h2>
            <section className={styles.reviews}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.title}>Titel</th>
                            <th className={styles.date}>Dato</th>
                            <th>Handling</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td >Henter anmeldelser...</td>
                            </tr>) : (
                            reviews.map(review => (
                                <tr key={review.id} className={styles.row}>
                                    <td>{review.title}</td>
                                    <td>{formatDate(review.created_at)}</td>
                                    <td className={styles.buttons}>
                                        <button className={styles.edit}>Rediger</button>
                                        <button onClick={() => handleDelete(review.id)} className={styles.delete}>Slet</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </section>


        </section>
    )

}

export default Admin;