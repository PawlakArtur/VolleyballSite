import React from 'react';

const MessageComments = React.createClass({
    renderComment(comment, i) {
        return (
            <div key={i}>
                <p>Autor: {comment.author}</p>
                <p>Komantarz: {comment.comment}</p>
                <button>&times;</button>
            </div>
        )
    },
    render() {
        return (
            <div className="col s8">
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