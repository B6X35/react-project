import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/auth/authOperation';
import s from './UserInfo.module.css';

export default function UserInfo() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.username);
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <div className={s.userInfoWrap}>
        <div className={s.userName}>{`${userName}`}</div>
        <button className={s.logout} type="button" onClick={() => dispatch(logoutUser(token))}>
          ВЫХОД
        </button>
      </div>
    </>
  );
}
