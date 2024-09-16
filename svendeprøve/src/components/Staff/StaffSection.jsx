import styles from "./Staff.module.scss";
import { useEmployees } from "../../providers/ContextProvider";
import Card from "./Card";

const StaffSection = () => {

    const employees = useEmployees();

    return (
        <section className={styles.staff}>
            <h1>Mød vores ansatte</h1>
            <div className={styles.grid}>
                {employees.map((employee) => (
                    <div key={employee.id} className={styles.card}>
                        <Card employee={employee}
                        />
                    </div>
                ))}
            </div>
        </section>
    )



}

export default StaffSection