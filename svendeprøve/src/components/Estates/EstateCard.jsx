import styles from "./Estates.module.scss"
import PropTypes from "prop-types";
import placeholder from "../../assets/Images/Slideshow/slide-3.jpg"
import formatPrice from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { useCity } from "../../hooks/useGetCity";
import { useType } from "../../hooks/useTypes";
import { usePrimaryImage } from "../../hooks/useImages";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";




const EstateCard = ({ estate }) => {

    const { type, loading: typeLoading } = useType(estate.type_id);
    const { city, loading: cityLoading } = useCity(estate.city_id);
    const { primaryImage, loading: imageLoading } = usePrimaryImage(estate.id);


    return (
        <Link to={`/boliger/${estate.id}`} className={styles.linkWrapper}>
            <figure className={styles.card}>
                {cityLoading && typeLoading && imageLoading ? (<div className={styles.spinner}> < ThreeCircles
                    size={100}
                    speed={1}
                    color="#59656F"

                /></div>) : (
                    <>
                        {primaryImage?.images === undefined ? (<img src={placeholder} alt={estate.address} />) : (
                            <img src={primaryImage?.images.image_url} alt={estate.address} />
                        )
                        }
                        <figcaption className={styles.estateInfoBox}>
                            <div>
                                <h1>{estate.address}</h1>
                                {cityLoading ?
                                    <ThreeDots
                                        color="#000"
                                        height={25}
                                        width={25}
                                        timeout={3000}
                                    /> : <p>{city[0]?.zipcode} {city[0]?.name}</p>}

                                {typeLoading ?
                                    <ThreeDots
                                        color="#000"
                                        height={25}
                                        width={25}
                                        timeout={3000}
                                    /> : <p>{type[0]?.name}</p>}
                                <p>{estate.num_rooms} værelser, {estate.floor_space} m2 </p>
                            </div>
                            <div>
                                <h2>{formatPrice(estate.price)} DKK</h2>
                            </div>


                        </figcaption>
                    </>
                )}

            </figure>
        </Link>
    )
}

EstateCard.propTypes = {
    estate: PropTypes.object.isRequired
}

export default EstateCard;