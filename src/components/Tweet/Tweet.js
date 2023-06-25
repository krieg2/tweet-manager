import styles from "./Tweet.module.scss";
import Chip from "../Chip";

const Tweet = ({ tweet }) => {
    const tweetTextAndURL = tweet.text.split("… https://");
    const tweetText = tweetTextAndURL[0];
    const link = tweet.entities.urls[0] ? tweet.entities.urls[0].url : "";
    const hashtags = tweet.entities.hashtags;
    const profileImage = tweet.user.profile_image_url;
    const screenName = tweet.user.screen_name;
    const imageStyle = {
        backgroundImage: `url(${profileImage})`,
        width: "50px",
        height: "50px",
        borderRadius: "25px"
    };

    return (
        <li>
            <div className={styles.tweetImage}>
                <div style={imageStyle}></div>
            </div>
            <div className={styles.tweetContent}>
                <h3>@{screenName}</h3>
                <p>{tweetText} {link ? <span><a href={link} rel="noopener noreferrer" target="_blank">{link}</a></span> : null}</p>
                <div>
                    {hashtags && hashtags.length > 0 && hashtags.map(tag => (<Chip hashtag={tag.text} key={tag.text} />))}
                </div>
            </div>
        </li>
    );
};

export default Tweet;