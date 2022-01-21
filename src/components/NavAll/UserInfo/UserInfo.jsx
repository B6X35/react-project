import React from 'react';
// import { getUserName } from '../../redux/user/userOperations';
import s from './UserInfo.module.css';

export default function UserInfo() {
    // const userName = useSelector(getUserName);
    return (
        <>
        <div className={s.userInfoWrap}>
        <div className={s.userName}>
          {/* {`${userName}`} */}
          Nic
        </div>
        <button to='/home' className={s.logout} type='button'>ВЫХОД</button> 
        </div>
        </>
    );
}

