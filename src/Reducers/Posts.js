export default function Posts(state = {}, action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            var post = {... state };
            post[action.code][action.index].likes = post[action.code][action.index].likes + 1;
            return post;
        default:
            return state;
    }
}
