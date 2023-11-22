import React, { useState, userState } from "react";
import Post from "./Post";
import Suggestions from "./Suggestions";
import "../styles/Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "whoknows_",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUWaUYBaL3PJ-rnAD8fT_gGGpoNzFsBCcdA&usqp=CAU",
      likes: 122,
      timestamp: "1d",
    },
    {
      user: "abrakadabra",
      postImage:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=sph",
      likes: 211,
      timestamp: "2d",
    },
    {
      user: "alibaba",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQe5o2EWYXini5N9qD3ouO4RvF6IFWA-Rlw&usqp=CAU",
      likes: 98,
      timestamp: "2h",
    },
    {
      user: "sunshinegirl",
      postImage:
        "https://i.pinimg.com/736x/ed/78/11/ed78116c19573356cd2519cf1f4e73d7.jpg",
      likes: 106,
      timestamp: "14h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post)=>(
            <Post user={post.user}
             postImage={post.postImage}
             likes={post.likes}
             timestamp={post.timestamp}
            />
          ))
          }
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
