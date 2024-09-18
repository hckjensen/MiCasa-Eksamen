import styles from "./Estates.module.scss";
import PropTypes from "prop-types";
import { usePrimaryImage } from "../../hooks/useImages";
import { ThreeCircles } from "react-loader-spinner";
import { useParams } from "react-router-dom";




const DetailHero = ({ estate }) => {

    const { id } = useParams();

    const { primaryImage, loading: imageLoading } = usePrimaryImage(id);
    return (
        <section className={styles.detailHero}>
            <div className={styles.detailHeroImage}>
                {imageLoading ?
                    < ThreeCircles size={100} speed={1} color="#59656F" />
                    : <img src={primaryImage?.images.image_url} alt={estate?.address} />}
            </div>
        </section>
    )


}

DetailHero.propTypes = {
    estate: PropTypes.object.isRequired
}




export default DetailHero;