import styles from "./Admin.module.scss"


const Admin = () => {

    return (

        <section className={styles.adminSection}>
            <h2>Admininstration af andmeldelser</h2>
            <section className={styles.reviews}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.title}>Titel</th>
                            <th className={styles.date}>Dato</th>
                            <th>Handling</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.row}>

                            <td>Review 1</td>
                            <td>01-01-2021</td>
                            <td className={styles.buttons}>
                                <button className={styles.edit}>Rediger</button>
                                <button className={styles.delete}>Slet</button>
                            </td>
                        </tr>
                        <tr className={styles.row}>

                            <td>Review 1</td>
                            <td>01-01-2021</td>
                            <td className={styles.buttons}>
                                <button className={styles.edit}>Rediger</button>
                                <button className={styles.delete}>Slet</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </section>


        </section>
    )

}

export default Admin;