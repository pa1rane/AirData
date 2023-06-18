import React from 'react'
import styles from './Users.module.css';

const Users = ({usersList}) => {
  return (
    <>
      <div className={styles.list}>
        <ul>
        {usersList.map((user) => {
           return <li key={user.id}>{user.name}</li>
        })}
        </ul>
      </div>
    </>
  )
}

export default Users
