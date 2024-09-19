import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";
import styles from '../components/Contact/Contact.module.scss';

const ContactPage = () => {

    document.title = "MiCasa | Kontakt";

    return (
        <>
            <Layout title="Kontakt">
                <div className={styles.contactWrapper}>
                    <ContactForm />
                    <Map />
                </div>
            </Layout>
        </>
    )

}

export default ContactPage;