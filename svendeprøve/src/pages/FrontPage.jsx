import Layout from "../components/Layout/Layout";
import StaffSection from "../components/Staff/StaffSection";
import Reviews from "../components/Reviews/Reviews";
import useEstates from "../hooks/useEstates";
import EstatesSection from "../components/Estates/EstatesSection";

const FrontPage = () => {
    document.title = "MiCasa | Autoriseret mæglerhus";



    return (
        <Layout>
            <EstatesSection />
            <Reviews />
            <StaffSection />
        </Layout>
    )

}



export default FrontPage;