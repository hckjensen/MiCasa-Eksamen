import styles from "./Estates.module.scss";
import PropTypes from "prop-types";
import placeholder from "../../assets/Images/Slideshow/slide-3.jpg"




const DetailHero = ({ estate }) => {

    return (
        <section className={styles.detailHero}>
            <div className={styles.detailHeroImage}>
                <img src={placeholder} alt="hero-image" />
            </div>
        </section>
    )


}

DetailHero.propTypes = {
    estate: PropTypes.object.isRequired
}




export default DetailHero;