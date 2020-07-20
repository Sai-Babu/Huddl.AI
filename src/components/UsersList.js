import React from "react";
import { Table, Button } from 'reactstrap';
import history from "../history";

const UsersList = (props) => {
    const userId = (props.history.location.state) ? props.history.location.state.userId : 0;
    let users = (props.users.length > 0) ? props.users : [];
    const filterUsers = () => {
        if (userId > 0) {
            return users.filter(u => u.id === userId);
        }
        return users;
    }
    return (
        <div>
            {
                <div>
                    <Button onClick={() => history.push('/')}>Back to Posts</Button>
                    <hr />
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterUsers().map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street},{user.address.city}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            }
        </div>
    )

};

export default UsersList;