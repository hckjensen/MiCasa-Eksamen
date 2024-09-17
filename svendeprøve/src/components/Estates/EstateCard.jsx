import styles from "./Estates.module.scss"
import PropTypes from "prop-types";
import placeholder from "../../assets/Images/Slideshow/slide-3.jpg"
import formatPrice from "../../utils/formatPrice";


const EstateCard = ({ estate }) => {
    return (
        <figure className={styles.card}>
            <img src={placeholder} alt={estate.address} />
            <figcaption className={styles.estateInfoBox}>
                <div>
                    <h3>{estate.address}</h3>
                    <p>9000 Aalborg(placeholder)</p>
                    <p>Type placeholder</p>
                    <p>{estate.num_rooms} værelser, {estate.floor_space} m2 </p>
                </div>
                <div>
                    <h2>{formatPrice(estate.price)}</h2>
                </div>


            </figcaption>
        </figure>
    )
}

EstateCard.propTypes = {
    estate: PropTypes.object.isRequired
}

export default EstateCard;