import styles from "./InputForm.module.scss";
import { useState, useEffect } from "react";
import { ReactComponent as Icon } from "../../assets/search_black_24dp.svg";

const InputForm = ({ requestTweets }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        requestTweets(debouncedValue);
    }, [debouncedValue, requestTweets]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(searchTerm);
        }, 500);
    
        return () => {
          clearTimeout(timer);
        };
    }, [searchTerm]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.inputForm}>
            <form>
                <Icon className={styles.searchIcon}/>
                <input placeholder="Search by keyword" value={searchTerm} onChange={handleChange}></input>
            </form>
        </div>
    );
};

export default InputForm;