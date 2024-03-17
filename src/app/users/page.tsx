import React from 'react'

interface User {
    id: number;
    name: string;
}
const UsersPage = async () => {
    //when you need to use cach
    // const res = await fetch ('https://jsonplaceholder.typicode.com/users');

    //For not using the cache
    const res = await fetch ('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});

    //Revalidate in every 10 second
    // const res = await fetch ('https://jsonplaceholder.typicode.com/users',
    //     {next: {revalidate: 10}});

    const users: User[] = await res.json();
    return (
        <div>
            <p>{new Date().toLocaleTimeString()}</p>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default  UsersPage