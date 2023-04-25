import styles from "./SearchContainer.module.scss";
import { useState, useEffect } from 'react';
import TweetsList from "../TweetsList";
import InputForm from '../InputForm';
import FilterBox from '../FilterBox';

const SearchContainer = ({ tweets, hashtags, filterTag }) => {
    const [filteredTweets, setFilteredTweets] = useState(tweets);

    useEffect(() => {
        if (filterTag) {
            const tweetsFiltered = tweets.filter(tweet => (
                tweet.entities.hashtags.find(item => item.text === filterTag)
            ));
            setFilteredTweets(tweetsFiltered);
        } else {
            setFilteredTweets(tweets);
        }
    }, [tweets, filterTag]);

    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputBoxContainer}>
                <div className={styles.inputBox}>
                    <h1>Tweet Feed</h1>
                    <InputForm />
                </div>
                <div className={styles.filterBox}>
                    <FilterBox hashtags={hashtags} />
                </div>
            </div>

            <div className={styles.tweetsList}>
                {filteredTweets && filteredTweets.length > 0 && <TweetsList tweets={filteredTweets} />}
            </div>
        </div>
    );
};

export default SearchContainer;