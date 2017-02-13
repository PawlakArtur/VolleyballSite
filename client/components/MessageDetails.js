import React from 'react';
import Message from './Message';
import MessageComments from './MessageComments';

const MessageDetails = React.createClass({
    render() {
        const { teamId } = this.props.params
        const id = this.props.messages.findIndex(message => message.id.toString() === teamId);
        const message = this.props.messages.filter(message => message.id === id)[0];
        const messageComments = this.props.comments[teamId] || [];
        return (
            <div className="row">
                <Message i={id} message={message} {...this.props}/>
                <MessageComments messageComments={messageComments} {...this.props}/>
            </div>
        )
    }
});

export default MessageDetails;