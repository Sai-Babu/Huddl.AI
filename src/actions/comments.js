export const actions = {
    GET_COMMENTS_REQUEST: "comments/get_comments_request",
    GET_COMMENTS_SUCCESS: "comments/get_comments_success"
};

export const getCommentsRequest = () => ({
    type: actions.GET_COMMENTS_REQUEST
});

export const getCommentsSuccess = (comments) => ({
    type: actions.GET_COMMENTS_SUCCESS,
    payload: comments,
});
