import Layout from "../components/Layout/Layout";
import StaffSection from "../components/Staff/StaffSection";
import Reviews from "../components/Reviews/Reviews";
import EstatesSection from "../components/Estates/EstatesSection";
import FrontPageHero from "../components/Slideshow/frontPageHero";
import Slideshow from "../components/Slideshow/Slideshow";
import slide1 from "../assets/Images/Slideshow/slide-1.jpg";
import slide2 from "../assets/Images/Slideshow/slide-2.jpg";
import slide3 from "../assets/Images/Slideshow/slide-3.jpg";
import slide4 from "../assets/Images/Slideshow/slide-4.jpg";
import slide5 from "../assets/Images/Slideshow/slide-5.jpg";
import slide6 from "../assets/Images/Slideshow/slide-6.jpg";


const FrontPage = () => {
    document.title = "MiCasa | Autoriseret mæglerhus";

    const slideshowImages =
        [
            {
                images: {
                    image_url: slide1,


                }

            },
            {
                images: {
                    image_url: slide2,


                }

            },
            {
                images: {
                    image_url: slide3,


                }

            },
            {
                images: {
                    image_url: slide4,


                }

            },
            {
                images: {
                    image_url: slide5,


                }

            },
            {
                images: {
                    image_url: slide6,


                }

            },

        ]



    return (
        <Layout>
            <FrontPageHero>
                <Slideshow images={slideshowImages} page="frontpage" />
            </FrontPageHero>
            <EstatesSection />
            <Reviews />
            <StaffSection />
        </Layout>
    )

}



export default FrontPage;