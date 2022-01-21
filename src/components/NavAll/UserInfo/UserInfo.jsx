import React from 'react';
import { getUserName } from '../../redux/user/userOperations';
import './UserMenu.module.css';

export default function UserMenu() {
    const userName = useSelector(getUserName);
    return (
        <>
        <div className={styles.userName}>
          {`${userName}`}
        </div>
        <button onClick={} type='button'>ВЫХОД</button>
        </>
    );
}
