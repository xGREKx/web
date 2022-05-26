import {useState} from 'react';
import {connect} from 'react-redux';

function Like(props) {
    const [active, setActive] = useState(false);

    const onLike = () => {
        props.store.dispatch({type: 'liked'});
        setActive(true);
    }

    const onDislike = () => {
        props.store.dispatch({type: 'disliked'});
        setActive(false);
    }

    return (
        active ?
            <button onClick={onDislike}>
                ❤️ {props.likes}
            </button> :
            <button onClick={onLike}>
                🤍 {props.likes}
            </button>
    );
}

function mapStateToProps(state) {
    return {likes: state.likes};
}

export default connect(mapStateToProps)(Like);