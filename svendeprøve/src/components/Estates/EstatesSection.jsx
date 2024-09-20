import EstateCard from "./EstateCard";
import { useEstates } from "../../hooks/useEstates";
import styles from "./Estates.module.scss";
import { useNavigate } from "react-router-dom";

import useScreenWidth from "../../hooks/useScreenWidth";

const EstatesSection = () => {

    const navigate = useNavigate();
    const screenWidth = useScreenWidth();
    const numberOfEstates = screenWidth <= 500 ? 1 : 3;
    const { estates } = useEstates(3);

    return (
        <div className={styles.frontpageWrapper}>
            <div className={styles.content}>
                {estates.map((estate, index) => (
                    <EstateCard key={estate.id} estate={estate} className={`${index === 1 ? styles.middleCard : ''}`} />
                ))}
            </div>
            <div className={styles.navButton}>
                <button onClick={() => navigate('/boliger')}>Se alle boliger</button>
            </div>

        </div>
    );
};


export default EstatesSection