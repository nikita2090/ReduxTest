import React from 'react';

import { connect } from 'react-redux';
import { increaseCount } from '../common/action-creators';


import UsersView from "../Views/UsersView";


const UsersContainer = ({ users }) => {
    console.log('render UsersContainer');
    return (
        <UsersView users={users} />
    );
};


const mapStateToProps = ({ usersReducer: { users } }) => {
    console.log('mapStateToProps UsersContainer');
    return ({
        users,
    });
};

const mapDispatchToProps = {
    increaseCountAction: increaseCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
