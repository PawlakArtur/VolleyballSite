import React from 'react';

const MessageComments = React.createClass({
    renderComment(comment, i) {
        return (
            <div key={i}>
                <p>Autor: {comment.author}</p>
                <p>Komantarz: {comment.comment}</p>
                <button onClick={this.props.removeComment.bind(null, this.props.params.messageId, i)}>&times;</button>
            </div>
        )
    },
    handleSubmit(e) {
        e.preventDefault();
        const { messageId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(messageId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        return (
            <div className="col s8">
                {this.props.messageComments.map(this.renderComment)}
                <form ref="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author"/>
                    <input type="text" ref="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default MessageComments;