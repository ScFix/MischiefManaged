import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions/actionCreators';
import App from '../App';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
        trips: state.trips
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
//this will be entirely site wide, this may become a problem why I don't see sharing every single action with the entire application. This is a quick fix but will need to be reapproached later if this project grows
const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;