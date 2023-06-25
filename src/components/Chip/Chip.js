import styles from "./Chip.module.scss";

const Chip = ({ hashtag, toggleFilter, filterTag }) => {
    const handleClick = (event) => {
        event.preventDefault();

        toggleFilter(hashtag);
    };

    const style = `${styles.chip} ${hashtag === filterTag ? styles.selected : ''}`;

    return (<div className={style} onClick={handleClick}>#{hashtag}</div>);
};

export default Chip;