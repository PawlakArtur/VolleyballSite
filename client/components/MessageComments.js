import React from 'react';

const MessageComments = React.createClass({
    renderComment(comment, i) {
        return (
            <div>
                <p>
                    <p>Autor: {comment.author}</p>
                    <p>Komantarz: {comment.comment}</p>
                    <button>&times;</button>
                </p>
            </div>
        )
    },
    render() {
        return (
            <div>
                {this.props.messageComments.map(this.renderComment)}
                <form ref="commentForm">
                    <input type="text" ref="author"/>
                    <input type="text" ref="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default MessageComments;