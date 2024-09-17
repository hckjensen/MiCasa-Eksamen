import Layout from "../components/Layout/Layout";
import StaffSection from "../components/Staff/StaffSection";
import Reviews from "../components/Reviews/Reviews";
import useEstates from "../hooks/useEstates";

const FrontPage = () => {
    document.title = "MiCasa | Autoriseret mæglerhus";

    const { estates } = useEstates(3);
    console.log(estates);


    return (
        <Layout>
            <Reviews />
            <StaffSection />
        </Layout>
    )

}



export default FrontPage;