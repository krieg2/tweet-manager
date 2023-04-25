import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        tweets: state.tweets,
        hashtags: state.hashtags,
        filterTag: state.filterTag
    };
};

export default connect(mapStateToProps, null)(SearchContainer);