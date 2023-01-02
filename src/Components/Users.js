import React from 'react';
import {useSelector} from 'react-redux';

function Users() {
    const users = useSelector((state)=> state.Test.users);
    console.log("user", users);
  return (
    <div>
        <h3>Users</h3>
        {users.map((item, index)=>(
            <div key={index}>
                <hr/>
                <h4>{item.name}</h4>
                <p>Phone : {item.phone}</p>
                <p>Web : {item.website}</p>
                </div>
        ))}
    </div>
  )
}

export default Users