import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "../appwrite/db_config";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const deletePost = () => {
    dbService.deletePost(post.$id).then((status) => {
      if (status) {
        dbService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-2">
        {isAuthor && (
          <div className="w-full flex justify-end gap-5">
              <Link to={`/edit/${post.$id}`}>
                <Button text={"Edit"} className={'px-2 py-1 rounded-md'} />
              </Link>
              <Button text={"Delete"} className={'px-2 py-1 rounded-md'} onClick={deletePost} />
          </div>
        )}
        <div className="py-2 flex flex-row items-center gap-1">
            <img src="/user-circle.svg" alt="Post By" className="w-6"/>
            <h3 className="text-xs sm:text-sm font-bold dark:text-white">{post.userName}</h3>
        </div>
        <div className="w-full mb-6">
            <h1 className="text-2xl font-bold dark:text-white">{post.title}</h1>
        </div>
        <div className="browser-css dark:text-white">{parse(post.content)}</div>
    </div>
  ) : 
  (
    <div className='w-full py-8 dark:text-white text-center'>
      <h1 className='text-3xl font-bold py-5'>be patient! post is loading...</h1>
    </div>
  );
}
