import Chip from "./Chip";
import { toggleFilter } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ toggleFilter }, dispatch);
};

export default connect(null, mapDispatchToProps)(Chip);