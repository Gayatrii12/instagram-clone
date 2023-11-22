import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/Suggestions.css"

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggested for you</div>
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
