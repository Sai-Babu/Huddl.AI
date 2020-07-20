export const actions = {
    GET_POSTS_REQUEST: "posts/get_posts_request",
    GET_POSTS_SUCCESS: "posts/get_posts_success"
};

export const getPostsRequest = () => ({
    type: actions.GET_POSTS_REQUEST
});

export const getPostsSuccess = (posts) => ({
    type: actions.GET_POSTS_SUCCESS,
    payload: posts,
});
