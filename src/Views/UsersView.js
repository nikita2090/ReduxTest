import React from 'react';


const UsersView = ({ users }) => {
    console.log('render UsersView');
    console.log('-----------------------------');
    return (
        <ul>
            <h3>UsersView</h3>
            {users.map(({ name, age }, i) => (
                <li key={i}>{`${name} : ${age}`}</li>
            ))}
        </ul>
    );
};


export default UsersView;