import Chip from "./Chip";
import { toggleFilter } from "../../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ toggleFilter }, dispatch);
};

const mapStateToProps = state => {
    return {
        filterTag: state.filterTag
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chip);