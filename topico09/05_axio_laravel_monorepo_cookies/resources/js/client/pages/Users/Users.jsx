import React, { useEffect, useState } from 'react'
import { axiosClient } from '../../utils/axios-client'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axiosClient.get('/api/users')
            .then(response => {
                const { data } = response.data;
                console.log(data)
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0
                        ? users.map((user, k) =>
                            <tr key={k}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
