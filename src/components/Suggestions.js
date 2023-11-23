import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/Suggestions.css"
import { useDispatch, useSelector } from 'react-redux';
import {auth} from "../firebase"
import { loginUser, logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';


function Suggestions() {
    const user = useSelector(state => state.data.user.user)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(loginUser())
        signOut(auth)
    }

  return (
    <div className="suggestions">
      <div className="profile">
        <div className="username__left">
          <AccountCircleIcon className="avatar" />
          <div className="user__info">
            <span className="username">{user.username}</span>
          </div>
        </div>
        <button className="follow__button">Log Out</button>
      </div>
      <div className="suggestions__title">
        Suggested for you<span className="seeall">See All</span>
      </div>
      <div className="suggestions__usernames">
        <div className="sugg_username">
          <div className="username__left">
            <AccountCircleIcon className="avatar" />
            <div className="user__info">
              <span className="username">realperson</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="sugg_username">
          <div className="username__left">
            <AccountCircleIcon className="avatar" />
            <div className="user__info">
              <span className="username">realperson</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="sugg_username">
          <div className="username__left">
            <AccountCircleIcon className="avatar" />
            <div className="user__info">
              <span className="username">realperson</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="sugg_username">
          <div className="username__left">
            <AccountCircleIcon className="avatar" />
            <div className="user__info">
              <span className="username">realperson</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="sugg_username">
          <div className="username__left">
            <AccountCircleIcon className="avatar" />
            <div className="user__info">
              <span className="username">realperson</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions
