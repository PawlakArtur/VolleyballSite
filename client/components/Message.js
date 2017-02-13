import React from 'react';
import { Link } from 'react-router';

const Message = React.createClass({
    render() {
        const { message, comments, i} = this.props;
        return (
            <div className="col s4">
                <Link to={`/view-message/${message.id}`}>
                    <h5>{message.title}</h5>
                </Link>
                <p>{message.message}</p>
                <button className="btn" onClick={this.props.increment.bind(null, i)}>
                    <i className="material-icons">call_made</i>
                    {message.likes}
                </button>
                <Link to={`/view-message/${message.id}`} className="btn">
                    <i className="material-icons">mode_edit</i>
                    {comments[message.id] ? comments[message.id].length : 0}
                </Link>
            </div>
        )
    }
});

export default Message;