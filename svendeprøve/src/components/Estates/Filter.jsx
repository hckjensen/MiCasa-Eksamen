import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import { useState } from 'react';



const Filter = ({ sortTitle, filterTitle, sortOptions, filterOptions }) => {
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');






    const clearFilter = () => {
        setSelectedSort('');
        setSelectedFilter('');

    };

    return (
        <div className={styles.wrapper}>
            <div>
                <select
                    name="sort"
                    id="sort"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <option value="" disabled hidden>{sortTitle}</option>
                    {sortOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <select
                    name="filter"
                    id="filter"
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                >
                    <option value="" disabled hidden>{filterTitle}</option>
                    {filterOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <button onClick={clearFilter}>Ryd Filter</button>
            </div>

        </div>
    );
};

Filter.propTypes = {
    sortTitle: PropTypes.string,
    filterTitle: PropTypes.string,
    sortOptions: PropTypes.array,
    filterOptions: PropTypes.array,
    estates: PropTypes.array,
    setEstates: PropTypes.func
}

export default Filter;