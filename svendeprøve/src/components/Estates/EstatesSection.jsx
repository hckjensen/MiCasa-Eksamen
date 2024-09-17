import EstateCard from "./EstateCard";
import { useEstates } from "../../hooks/useEstates";
import styles from "./Estates.module.scss";

const EstatesSection = () => {

    const { estates } = useEstates(3);


    return (
        <div className={styles.frontpageWrapper}  >
            <div className={styles.content}>
                {estates.map((estate, index) => (
                    <EstateCard key={estate.id} estate={estate} className={`${index === 1 ? styles.middleCard : ''}`} />
                ))}

            </div>
        </div>
    )
}


export default EstatesSection