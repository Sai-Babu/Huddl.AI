import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getPostsRequest } from "../actions/posts";
import { getUsersRequest } from "../actions/users";
import { getCommentsRequest } from "../actions/comments";
import { bindActionCreators } from 'redux';
import PostsList from "./PostsList";
import UsersList from './UsersList';
import UserPost from './UserPost';

class App extends Component {

  // Page Load Saga Calls
  componentDidMount() {
    this.props.getPostsRequest();
    this.props.getUsersRequest();
  }
  render() {
    const { posts, users, history, comments, getCommentsRequest } = this.props;
    return (
      <div className="content container">
        {
          (history.location.pathname === "/") &&
          <PostsList
            posts={posts.posts}
            users={users.users}
            history={history} />
        }
        {
          (history.location.pathname === "/users") &&
          <UsersList
            users={users.users}
            history={history} />
        }
        {
          (history.location.pathname === "/post") &&
          <UserPost
            getCommentsRequest={getCommentsRequest}
            comments={comments.comments}
            posts={posts.posts}
            users={users.users}
            history={history} />
        }
      </div>
    );
  }
}

//Map the latest state to props
const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPostsRequest,
    getUsersRequest,
    getCommentsRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
