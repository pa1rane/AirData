import React from "react";
import styles from "./Users.module.css";

const Users = ({ usersList }) => {
  return (
    <>
      <div className={styles.list}>
        {usersList.map((user) => {
          return (
            <div className={styles.user} key={user.id}>
              <img
                className={styles.avatar}
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
              />
              <p className={styles.name}>
                {user.first_name + " " + user.last_name}
              </p>
              <p className={styles.email}>{user.email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
