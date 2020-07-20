import React, { useEffect } from "react";
import { Badge, Button, Alert } from 'reactstrap';

const UserPost = (props) => {
    const { history, getCommentsRequest, comments, users, posts } = props;
    
    //Saga API call
    useEffect(() => {
        getCommentsRequest();
    });

    // Get the postId from the Router & Extract post data, user details.
    const postId = (history.location.state) ? history.location.state.postId : 0;
    const postData = posts.filter(p => p.id === postId);
    const userId = postData.length>0 && postData[0].userId;
    const user = users.filter(u => u.id === userId);

    //comments data & filter on the data to show respective post details
    const commentsData = (comments.length > 0) ? comments : [];
    const filterComments = () => {
        if (postId > 0) {
            return commentsData.filter(u => u.postId === postId);
        }
        return commentsData;
    }

    return (
        <div>
            <Button onClick={() => props.history.push('/')}> Back to Posts</Button>
            <br/><br/><br/>

            
            <h2>{postData.length > 0 && postData[0].title}<Badge color="secondary">
                - {user.length > 0 && user[0].name}</Badge></h2>
            <hr />
            {
                filterComments().length > 0 &&
                <div>
                    <h5>{filterComments()[0].name}</h5>
                    <Alert color="info">
                        {filterComments()[0].body}
                    </Alert>
                    <Alert color="light">
                        commented by : {filterComments()[0].email}
                    </Alert>
                </div>
            }
        </div>
    )

};

export default UserPost;