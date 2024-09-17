import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import useEstates from "../hooks/useEstates";

const EstatesPage = () => {


    const { estates } = useEstates();
    console.log(estates);


    document.title = "MiCasa | Boliger";


    return (
        <>
            <Layout title="Boliger til salg">
                <Outlet />
            </Layout>
        </>
    )
}

EstatesPage.propTypes = {
    estates: PropTypes.array.isRequired
}

export default EstatesPage;