import InputForm from "./InputForm";
import { requestTweets } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ requestTweets }, dispatch);
};

export default connect(null, mapDispatchToProps)(InputForm);