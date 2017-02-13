export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export function addMessage(id, author, title, message, likes) {
    return {
        type: 'ADD_MESSAGE',
        id,
        author,
        title,
        message,
        likes
    }
}

export function removeMessage(id, i) {
    return {
        type: 'REMOVE_MESSAGE',
        id,
        i
    }
}

export function addComment(id, author, comment) {
    return {
        type: 'ADD_COMMENT',
        id,
        author,
        comment
    }
}

export function removeComment(id, i) {
    return {
        type: 'REMOVE_COMMENT',
        id,
        i
    }
}