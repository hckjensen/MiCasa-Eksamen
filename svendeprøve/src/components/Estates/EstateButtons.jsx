
import PropTypes from 'prop-types';


export const LocationButton = ({ onClick }) => {

    return (
        <button onClick={onClick}>
            <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" />
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#AC9FBB" />
                <path d="M42 41C44.7614 41 47 38.7614 47 36C47 33.2386 44.7614 31 42 31C39.2386 31 37 33.2386 37 36C37 38.7614 39.2386 41 42 41Z" fill="#59656F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M53 37C53 44.5744 46.4261 53.7923 42.6146 59.1368L42.6136 59.1382C42.3998 59.438 42.1947 59.7256 42 60C38.3333 55.1667 31 43.8 31 37C31 28.5 36 25 42 25C48 25 53 29.5 53 37ZM49 36C49 39.866 45.866 43 42 43C38.134 43 35 39.866 35 36C35 32.134 38.134 29 42 29C45.866 29 49 32.134 49 36Z" fill="#59656F" />
            </svg>
        </button>
    )



}

LocationButton.propTypes = {
    onClick: PropTypes.func.isRequired
}



export const GalleryButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" />
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#AC9FBB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M35.9286 28C33.9167 28 32.2857 29.6351 32.2857 31.6522H28.6429C26.631 31.6522 25 33.2873 25 35.3043V52.3478C25 54.3649 26.631 56 28.6429 56H55.3571C57.369 56 59 54.3649 59 52.3478V35.3043C59 33.2873 57.369 31.6522 55.3571 31.6522H51.7143C51.7143 29.6351 50.0833 28 48.0714 28H35.9286ZM42 52.3478C46.6944 52.3478 50.5 48.805 50.5 44.4348C50.5 40.0645 46.6944 36.5217 42 36.5217C37.3056 36.5217 33.5 40.0645 33.5 44.4348C33.5 48.805 37.3056 52.3478 42 52.3478Z" fill="#59656F" />
                <path d="M48.0714 44.4348C48.0714 47.4603 45.3532 49.913 42 49.913C38.6468 49.913 35.9286 47.4603 35.9286 44.4348C35.9286 41.4092 38.6468 38.9565 42 38.9565C45.3532 38.9565 48.0714 41.4092 48.0714 44.4348Z" fill="#59656F" />
            </svg>
        </button>
    )

}

GalleryButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export const FavoriteButton = ({ onClick, isFavorited, loading }) => {
    return (
        <>
            {isFavorited ? (
                <button onClick={onClick} disabled={loading}>
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" fill='#AC9FBB' />
                        <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="gray" />
                        <path d="M48.7586 30C45.2828 30 42.8046 33.2051 42 34.8077C41.1954 33.2051 38.7172 30 35.2414 30C30.8966 30 28 33.3654 28 36.7308C28 44.4231 37.3333 49.5513 42 55C46.6667 49.5513 56 44.4231 56 36.7308C56 33.3654 53.1034 30 48.7586 30Z" fill="#DDBDD5" stroke="#1D1E2C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            ) : (
                <button onClick={onClick} disabled={loading}>
                    <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" />
                        <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#AC9FBB" />
                        <path d="M48.7586 30C45.2828 30 42.8046 33.2051 42 34.8077C41.1954 33.2051 38.7172 30 35.2414 30C30.8966 30 28 33.3654 28 36.7308C28 44.4231 37.3333 49.5513 42 55C46.6667 49.5513 56 44.4231 56 36.7308C56 33.3654 53.1034 30 48.7586 30Z" stroke="#59656F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            )}
        </>


    )

}




FavoriteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isFavorited: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
}


export const LikedButton = () => {
    return (
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" fill="white" />
            <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#AC9FBB" />
            <path d="M48.7586 30C45.2828 30 42.8046 33.2051 42 34.8077C41.1954 33.2051 38.7172 30 35.2414 30C30.8966 30 28 33.3654 28 36.7308C28 44.4231 37.3333 49.5513 42 55C46.6667 49.5513 56 44.4231 56 36.7308C56 33.3654 53.1034 30 48.7586 30Z" fill="#DDBDD5" stroke="#1D1E2C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const FloorplanButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" />
                <rect x="0.5" y="0.5" width="83" height="83" rx="41.5" stroke="#AC9FBB" />
                <path d="M35.5 38V41.5M35.5 53.5V50M43 38H45M53 38H55M28 38H43.0577V31H55V54H28V38Z" stroke="#59656F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>


    )
}

FloorplanButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
