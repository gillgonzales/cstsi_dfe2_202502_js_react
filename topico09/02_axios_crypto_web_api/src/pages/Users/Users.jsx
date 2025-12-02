import React, { useEffect } from 'react'
import axiosClient from '../../utils/axios-client'

const Users = () => {
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axiosClient.get('/users')
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadUsers();
  })
  return (
    <div>Users</div>
  )
}

export default Users