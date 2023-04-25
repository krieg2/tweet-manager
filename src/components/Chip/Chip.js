import styles from "./Chip.module.scss";

const Chip = ({ hashtag, toggleFilter }) => {
    const handleClick = (event) => {
        event.preventDefault();

        toggleFilter(hashtag);
    };

    return (<div className={styles.chip} onClick={handleClick}>#{hashtag}</div>);
};

export default Chip;