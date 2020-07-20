import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import App from "./components/App";
import UsersList from "./components/UsersList";
import UserPost from "./components/UserPost";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App} />
                    <Route path="/users" component={UsersList} />
                    <Route path="/post" component={UserPost} />
                </Switch>
            </Router>
        )
    }
}