import React from 'react';
import Message from './Message'

const MessagesGrid = React.createClass({
    render() {
        return (
            <div>
                {this.props.messages.map((message, i) => <Message {...this.props} key={i} i={i} message={message} />)}
            </div>
        )
    }
});

export default MessagesGrid;