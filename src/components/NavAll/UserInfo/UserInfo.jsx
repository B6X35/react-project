import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserNameSelector } from '../../../redux/auth/authSelectors';
import s from './UserInfo.module.css';

export default function UserInfo() {
  const userName = useSelector((state) => state.auth.user.username)
    return (
        <>
        <div className={s.userInfoWrap}>
        <div className={s.userName}>
          {`${userName}`}
        </div>
        <NavLink to='/main' className={s.logout} type='button'>ВЫХОД</NavLink> 
        </div>
        </>
    );
}

const mapStateToProps = state => ({
  userName: getUserNameSelector(state)
});