import styles from "./Slideshow.module.scss";
import { useState } from "react";
import prevSlideIcon from "../../assets/Images/Slideshow/lastSlide.png";
import nextSlideIcon from "../../assets/Images/Slideshow/nextSlide.png";
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

//https://www.dhiwise.com/post/building-a-responsive-reactjs-slideshow-from-scratch

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
    };

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className={styles.slideshow}>
            <button className={styles.prev} onClick={prevSlide}>
                <img src={prevSlideIcon} alt="prev" />
            </button>
            <button className={styles.next} onClick={nextSlide}>
                <img src={nextSlideIcon} alt="next" />
            </button>
            {images.map((image, index) => (
                <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}>
                    <img className={styles.image} src={image.images.image_url} alt={`slide ${index + 1}`} />
                    <div className={styles.description}>
                        <h1>{image.images.description}</h1>
                    </div>
                </div>
            ))}


        </div>
    );
}

Slideshow.propTypes = {
    images: PropTypes.array
};

export default Slideshow;