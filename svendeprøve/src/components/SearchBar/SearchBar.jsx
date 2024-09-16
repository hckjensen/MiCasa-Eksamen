import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    return (
        <section className={styles.searchBar}>
            <input type="text" placeholder="Indtast søgeord" />
        </section>
    )
}

export default SearchBar
