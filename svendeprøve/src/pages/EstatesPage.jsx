import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";

const EstatesPage = () => {

    document.title = "Boliger | MiCasa Online";


    return (
        <>
            <Layout title="Boliger til salg">
                <Outlet />
            </Layout>
        </>
    )
}



export default EstatesPage;