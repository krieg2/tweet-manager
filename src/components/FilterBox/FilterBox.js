import styles from "./FilterBox.module.scss";
import Chip from "../Chip";

const FilterBox = ({ hashtags }) => {
    return (
        <div className={styles.filterBox}>
            <h2>Filter by hashtag</h2>
            <div className={styles.chipsBox}>
                {hashtags && hashtags.length > 0 && hashtags.map(tag => (
                    <Chip hashtag={tag} key={tag} />
                ))}
            </div>
        </div>
    );
};

export default FilterBox;