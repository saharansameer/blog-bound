import React from "react";
import { Link } from "react-router-dom";

function PostCard({ $id, title, userName, status }) {
  return (
    <>
      <Link to={`/posts/${$id}`}>
        <div className={ `${status ? "" : "opacity-[0.5]"} px-5 py-2 rounded-lg bg-[#bdbdbd] dark:bg-[#2b2b2b] min-h-32 flex flex-col justify-between`}>
          <h2 className="text-md sm:text-lg md:text-xl font-mono dark:text-white">{title}</h2>
          <div className="flex flex-row items-center justify-end gap-1">
            <img src="/user-circle.svg" alt="Post By" className="w-6"/>
            <h3 className="text-xs sm:text-sm font-bold dark:text-white">{userName}</h3>
          </div>
          
        </div>
      </Link>
    </>
  );
}

export default PostCard;
