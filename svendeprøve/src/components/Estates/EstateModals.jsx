import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from "./Modals.module.scss"
import closeIcon from "../../assets/Images/Icons/closeWhite.png";
import Slideshow from '../Slideshow/Slideshow';
import { useImages } from '../../hooks/useImages';

export const FloorPlanModal = ({ estate, isOpen, onClose }) => {
    return (
        <Modal className={styles.modal} overlayClassName={styles.overlay} isOpen={isOpen} onRequestClose={onClose}>
            <img src={estate?.floorplan} alt="floorplan" />
            <button onClick={onClose}>
                <img src={closeIcon} alt="X" />
            </button>
        </Modal>
    );
};

FloorPlanModal.propTypes = {
    estate: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

export const GalleryModal = ({ estate, isOpen, onClose }) => {



    const { images, loading, error } = useImages();




    return (
        <Modal className={styles.modal} overlayClassName={styles.overlay} isOpen={isOpen} onRequestClose={onClose}>
            <Slideshow images={images} />
            <button onClick={onClose}>
                <img src={closeIcon} alt="X" />
            </button>
        </Modal>
    );
};

GalleryModal.propTypes = {
    estate: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

export const LocationModal = ({ estate, isOpen, onClose }) => {
    return (
        <Modal className={styles.modal} overlayClassName={styles.overlay} isOpen={isOpen} onRequestClose={onClose}>
            <h2>Location</h2>
            {/* Render location details here */}
            <button onClick={onClose}>
                <img src={closeIcon} alt="X" />
            </button>
        </Modal>
    );
};

LocationModal.propTypes = {
    estate: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};



