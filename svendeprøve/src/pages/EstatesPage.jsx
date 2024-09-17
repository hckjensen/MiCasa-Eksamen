import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";

const EstatesPage = () => {

    document.title = "MiCasa | Boliger";


    return (
        <>
            <Layout title="Boliger til salg">
                <Outlet />
            </Layout>
        </>
    )
}



export default EstatesPage;