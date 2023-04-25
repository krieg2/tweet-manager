import styles from "./TweetsList.module.scss";
import Tweet from "../Tweet";

const TweetsList = ({ tweets, requestMoreTweets }) => {
    const handleClick = (event) => {
        event.preventDefault();
        if (tweets.length > 0) {
            requestMoreTweets();
        }
    };

    return (
        <div className={styles.tweetListBox}>
            <ul className={styles.tweetList}>
                {tweets && tweets.length > 0 && tweets.map(tweet => (
                    <Tweet tweet={tweet} key={tweet.id_str} />
                ))}
                <li className={styles.loadMore}><a href="" onClick={handleClick}>Load More</a></li>
            </ul>
        </div>
    );
};

export default TweetsList;