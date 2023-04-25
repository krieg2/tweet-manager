import TweetsList from "./TweetsList";
import { requestMoreTweets } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ requestMoreTweets }, dispatch);
};

export default connect(null, mapDispatchToProps)(TweetsList);