import React, { Component } from 'react'
import UserPerson from './UserPerson'
import Spinners from '../headercomponents/spinner';
import PropTypes from 'prop-types';

 const Users =  ({users, loading}) => {
     if(loading){
        return <Spinners/>
     }else{
        return (
            <div>
                {users.map(user => (
                 <UserPerson key={user.id} user={user}></UserPerson>
                ))}
            </div>
        )

     }
   
     
    
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


export default Users;