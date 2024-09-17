import styles from "./Estates.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEstate } from "../../hooks/useEstates";
import useCities from "../../hooks/useGetCity";
import useTypes from "../../hooks/useTypes";
import DetailHero from "./DetailHero";
import formatPrice from "../../utils/formatPrice";
import calculateDaysAgo from "../../utils/dateUtils";


const EstateDetail = () => {


    const { id } = useParams();
    const { estate, loading } = useEstate(id);
    const { cities } = useCities();
    const { types } = useTypes();
    const [city, setCity] = useState(null);
    const [type, setType] = useState(null);

    // 
    useEffect(() => {
        if (estate && estate.length > 0) {
            setCity(cities.find(city => city.id === estate[0].city_id));
            setType(types.find(type => type.id === estate[0].type_id));
            document.title = `Til salg - ${estate[0].address}, ${city?.zipcode} ${city?.name}, ${type?.name}, ${estate[0].floor_space} m2`;
        }
    }, [estate, cities, types]);





    return (
        <>
            <DetailHero estate={estate[0]} />
            {loading ? <p>Loading...</p> :
                <section className={styles.detailWrapper}>
                    <section className={`${styles.detailSection} ${styles.topSection}`}>
                        <div className={styles.subSection} >
                            <h1>{estate[0].address}</h1>
                            <h3>{city?.zipcode} {city?.name}`</h3>
                            <div className={styles.info}>

                                <h3>{type?.name}</h3>
                                <div className={styles.bar}></div>


                                <h3>{estate[0].floor_space} m2</h3>
                                <div className={styles.bar}></div>

                                <h3>{estate[0].num_rooms}</h3>

                            </div>
                            <h3> set {estate[0].num_clicks} gange</h3>
                        </div>
                        <div className={`${styles.subSection} ${styles.icons}`}>
                            <p> ICONS </p>
                            <p> ICONS </p>
                            <p> ICONS </p>
                            <p> ICONS </p>
                        </div>
                        <div className={styles.subSection}>

                            <div className={styles.price}>
                                <h3>Kontantpris:</h3>
                                <h1>{formatPrice(estate[0].price)} DKK</h1>
                            </div>
                            <h3>Udbetaling: {formatPrice(estate[0].payout)} </h3>
                            <h3>Ejerudgift per måned: {formatPrice(estate[0].cost)} </h3>
                        </div>

                    </section>
                    <section className={styles.detailSection}>
                        <div className={styles.subSection}>
                            <div>
                                <h4> Sagsnr. </h4>
                                <h4>{estate[0].id}</h4>
                            </div>
                            <div>
                                <h4> Boligareal</h4>
                                <h4>{estate[0].floor_space}</h4>
                            </div>
                            <div>
                                <h4> Grundareal</h4>
                                <h4>{estate[0].ground_space}</h4>
                            </div>
                            <div>
                                <h4> Antal rum</h4>
                                <h4>{estate[0].num_rooms}</h4>
                            </div>
                            <div>
                                <h4> Antal plan</h4>
                                <h4>{estate[0].num_floors}</h4>
                            </div>
                        </div>
                        <div className={styles.subSection}>
                            <div>
                                <h4> Kælder</h4>
                                <h4>{estate[0].basement_space}</h4>
                            </div>
                            <div>
                                <h4> Byggeår</h4>
                                <h4>{estate[0].year_construction}</h4>
                            </div>
                            <div>
                                <h4> Ombygget</h4>
                                <h4>{estate[0].year_rebuilt === '0' ? 'Ikke ombygget' : estate[0].year_rebuilt}</h4>
                            </div>
                            <div>
                                <h4> Energimærke</h4>
                                <h4>{estate[0].energy_label_id}</h4>
                            </div>
                            <div>
                                <h4> Liggetid</h4>
                                <h4>{calculateDaysAgo(estate[0].created_at)} dage</h4>
                            </div>
                        </div>
                        <div className={styles.subSection}>
                            <div>
                                <h4> Kontantpris</h4>
                                <h4>{formatPrice(estate[0].price)}</h4>
                            </div>
                            <div>
                                <h4> Udbetaling</h4>
                                <h4>{formatPrice(estate[0].payout)}</h4>
                            </div>
                            <div>
                                <h4> Brutto ex. ejerudgift</h4>
                                <h4>{formatPrice(estate[0].gross)}</h4>
                            </div>
                            <div>
                                <h4> Netto ex. ejerudgift</h4>
                                <h4>{formatPrice(estate[0].net)}</h4>
                            </div>
                            <div>
                                <h4> Ejerudgift</h4>
                                <h4>{formatPrice(estate[0].cost)}</h4>
                            </div>
                        </div>

                    </section>
                </section>
            }

        </>
    )


}


export default EstateDetail;