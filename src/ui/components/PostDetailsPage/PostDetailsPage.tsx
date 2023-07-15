import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getPostById} from "../../../api/Posts/getPostById";
import {Post} from "../../../api/Posts/types";
import {Typography} from "@mui/material";
import {User} from "../../../api/Users/types";
import {getUserById} from "../../../api/Users/getUserById";
import './PostDetailsPage.css'
import Comments from "./Comments";

const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    getPostById(id!)
      .then
      ((postData) => {
        setPost(postData);
        getUserById(postData?.userId).then(
          (userData) => {
            setUser(userData);
          });
      });
  }, []);

  return (
    <div className='post-wrapper'>
      <Typography variant='h1'>
        {post?.title}
      </Typography>
      <Typography variant='h6' sx={{
        display: 'flex'
      }}>
        {user?.username ? `@${user?.username}` : '@anonymous'}
        <div className='comment-email'>
          {user?.email}
        </div>
      </Typography>
      <Typography variant='h4'>
        {post?.body}
      </Typography>
      {post?.id && <Comments postId={post.id} />}
      <Typography variant='h6'>
        {user?.website && user?.name && `Also visit ${user?.website} by ${user?.name}`}
      </Typography>
    </div>
  );
};

export default PostDetailsPage;
