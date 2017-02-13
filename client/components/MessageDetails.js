import React from 'react';
import Message from './Message';
import MessageComments from './MessageComments';

const MessageDetails = React.createClass({
    render() {
        const id = this.props.messages.findIndex(message => message.id.toString() === this.props.params.teamId);
        const message = this.props.messages.filter(message => message.id === id)[0];
        return (
            <div className="row">
                <Message i={id} message={message} {...this.props}/>
                <MessageComments />
            </div>
        )
    }
});

export default MessageDetails;