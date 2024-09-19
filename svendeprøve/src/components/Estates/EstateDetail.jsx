import styles from "./Estates.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEstate } from "../../hooks/useEstates";
import useCities from "../../hooks/useGetCity";
import { useTypes } from "../../hooks/useTypes";
import { useEmployees } from "../../providers/ContextProvider";
import DetailHero from "./DetailHero";
import formatPrice from "../../utils/formatPrice";
import { calculateDaysAgo } from "../../utils/dateUtils";
import { ThreeCircles } from "react-loader-spinner";
import { LocationButton, GalleryButton, LikeButton, LikedButton, FloorplanButton } from "./EstateButtons";
import { FloorPlanModal, GalleryModal, LocationModal } from './EstateModals';


const EstateDetail = () => {

    const { id } = useParams();
    const { estate, loading } = useEstate(id);
    const { cities } = useCities();
    const { types } = useTypes();
    const employees = useEmployees();
    const [city, setCity] = useState(null);
    const [type, setType] = useState(null);
    const [employee, setEmployee] = useState(null);

    //Modal states
    const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const toggleFloorPlanModal = () => setIsFloorPlanOpen(!isFloorPlanOpen);
    const toggleGalleryModal = () => setIsGalleryOpen(!isGalleryOpen);
    const toggleLocationModal = () => setIsLocationOpen(!isLocationOpen);






    // useEffect to get the city and type of the estate and set the title of the page
    useEffect(() => {
        if (estate && estate.length > 0) {
            setCity(cities.find(city => city.id === estate[0].city_id));
            setType(types.find(type => type.id === estate[0].type_id));
            setEmployee(employees.find(employee => employee.id === estate[0].employee_id));
            document.title = `Til salg - ${estate[0].address}, ${city?.zipcode} ${city?.name}, ${type?.name}, ${estate[0].floor_space} m2`;
        }
    }, [estate, cities, types]);





    return (
        <>
            <FloorPlanModal estate={estate[0]} isOpen={isFloorPlanOpen} onClose={toggleFloorPlanModal} />
            <GalleryModal estate={estate[0]} isOpen={isGalleryOpen} onClose={toggleGalleryModal} />
            <LocationModal estate={estate[0]} isOpen={isLocationOpen} onClose={toggleLocationModal} />
            <DetailHero estate={estate[0]} />

            <section className={styles.detailWrapper}>
                {loading ? (
                    <div className={styles.spinner}> < ThreeCircles
                        size={100}
                        speed={1}
                        color="#59656F"

                    /></div>
                ) : (
                    <>
                        <section className={styles.topSection}>
                            <section className={styles.detailSection}>
                                <div className={styles.subSection}>
                                    <h1>{estate[0].address}</h1>
                                    <h3>{city?.zipcode} {city?.name}</h3>
                                    <div className={styles.info}>
                                        <h3>{type?.name}</h3>
                                        <div className={styles.bar}></div>
                                        <h3>{estate[0].floor_space} m2</h3>
                                        <div className={styles.bar}></div>
                                        <h3>{estate[0].num_rooms} vær</h3>
                                    </div>
                                    <h3> set {estate[0].num_clicks} gange</h3>
                                </div>
                                <div className={`${styles.subSection} ${styles.icons}`}>

                                    <GalleryButton onClick={toggleGalleryModal} />
                                    <FloorplanButton onClick={toggleFloorPlanModal} />
                                    <LocationButton onClick={toggleLocationModal} />
                                    <LikeButton />
                                </div>
                                <div className={styles.subSection}>
                                    <div className={styles.price}>
                                        <h3>Kontantpris:</h3>
                                        <h1>{formatPrice(estate[0].price)} DKK</h1>
                                    </div>
                                    <h3>Udbetaling: {formatPrice(estate[0].payout)}</h3>
                                    <h3>Ejerudgift per måned: {formatPrice(estate[0].cost)}</h3>
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
                                        <h4>{estate[0].floor_space} m2</h4>
                                    </div>
                                    <div>
                                        <h4> Grundareal</h4>
                                        <h4>{estate[0].ground_space} m2</h4>
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
                        <section className={styles.mainContent}>
                            <article className={styles.article}>
                                <h3>{estate[0].description}</h3>
                            </article>
                            <figure className={styles.contactCard}>
                                <h1>Kontakt</h1>
                                <picture>
                                    <img src={employee?.image_url} alt="" />
                                </picture>
                                <figcaption>
                                    <h2>{employee?.firstname} {employee?.lastname}</h2>
                                    <h3>{employee?.position}</h3>
                                    <h3>Mobil: {employee?.phone}</h3>
                                    <h3>Email: {employee?.email}</h3>
                                </figcaption>

                            </figure>

                        </section>
                    </>
                )}
            </section>


        </>
    )


}


export default EstateDetail;