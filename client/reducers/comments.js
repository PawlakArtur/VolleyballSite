function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    author: action.author,
                    comment: action.comment
                }
            ];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    if(typeof action.id !== 'undefined') {
        return {
            ...state,
            [action.id]: postComments(state[action.id], action)
        }
    }
    return state;
}

export default comments;