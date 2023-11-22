import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FiberSmartRecordRoundedIcon from "@mui/icons-material/FiberSmartRecordRounded";
import "../styles/Post.css"

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <AccountCircleIcon />
          {user}
          <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src={postImage}
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="footer__icons">
          <div className="post__icon">
            <FavoriteBorderOutlinedIcon className="posticon" />
            <ModeCommentOutlinedIcon className="posticon" />
            <TelegramIcon className="posticon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderOutlinedIcon className="posticon" />
          </div>
        </div>
        <div></div>
        {/* <FiberSmartRecordRoundedIcon></FiberSmartRecordRoundedIcon> */}
        <span>{likes} likes</span>
      </div>
    </div>
  );
}

export default Post
