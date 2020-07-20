import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, Button, CardHeader
} from 'reactstrap';
import history from "../history";
import './App.css'

const PostsList = (props) => {
    //Click on the user name to see the user view.
    const onUserClick = (e, id) => {
        e.stopPropagation();
        history.push('/users', { userId: id });
    }

    //click on card to see the post details.
    const onCardClick = (e, postId) => {
        history.push('/post', { postId: postId });
    }
    
    return (
        <div>
            {
                props.posts.length > 0 && props.posts.map((post) => {
                    const user = props.users.find(u => u.id === post.userId);
                    return (
                        <div>
                            <br/>
                            <Card key={post.id} className="card_cursor">
                                <CardHeader>{post.title}</CardHeader>
                                <CardBody onClick={(e) => onCardClick(e, post.id)}>
                                    <CardTitle></CardTitle>
                                    <CardText>{post.body}</CardText>
                                    <Button onClick={(e) => onUserClick(e, post.userId)} id={post.userId}>{user && user.username}</Button>
                                </CardBody>
                            </Card>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostsList;