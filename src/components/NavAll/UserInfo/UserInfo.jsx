import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
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
        <NavLink to='/main' className={s.logout} type='button'>ВЫХОД</NavLink> 
        </div>
        </>
    );
}

