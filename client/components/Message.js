import React from 'react';
import { Link } from 'react-router';

const Message = React.createClass({
    render() {
        const { message, comments, i} = this.props;
        return (
            <div>
                <Link to={`/view-message/${message.id}`}>
                    {message.title}
                </Link>
                <div>
                    {message.likes}
                </div>
                <div>
                    {comments[message.id] ? comments[message.id].length : 0}
                </div>
            </div>
        )
    }
});

export default Message;