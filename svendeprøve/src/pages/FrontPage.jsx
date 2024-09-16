import Layout from "../components/Layout/Layout";
import StaffSection from "../components/Staff/StaffSection";
import Reviews from "../components/Reviews/Reviews";

const FrontPage = () => {
    document.title = "MiCasa | Autoriseret mæglerhus";

    return (
        <Layout>
            <Reviews />
            <StaffSection />
        </Layout>
    )

}

export default FrontPage;