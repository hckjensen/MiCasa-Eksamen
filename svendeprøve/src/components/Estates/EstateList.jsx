import styles from "./Estates.module.scss";
import EstateCard from "./EstateCard";
import { useEstates } from "../../hooks/useEstates";




const EstateList = () => {

    const { estates } = useEstates();

    return (
        <div className={styles.wrapper}>
            <div className={styles.estatesList}>
                {estates.map(estate => (
                    <EstateCard key={estate.id} estate={estate} />
                ))}

            </div>
        </div>
    )
}



export default EstateList;