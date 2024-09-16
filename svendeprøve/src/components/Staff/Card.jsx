import styles from "./Staff.module.scss";
import PropTypes from "prop-types";

const Card = ({ employee }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <img src={employee.image_url} alt={employee.name} />
                <div className={styles.infoBox}>

                    <div className={styles.nameContainer}>
                        <h2>{employee.firstname}</h2>
                        <h2>{employee.lastname}</h2>


                    </div>
                    <p>{employee.position}</p>
                    <p className={styles.hiddenText}>Email: {employee.email}</p>
                    <p className={styles.hiddenText}>Tlf: {employee.phone}</p>


                </div>


            </div>
        </div>
    )
}

Card.propTypes = {
    employee: PropTypes.object.isRequired
}

export default Card;