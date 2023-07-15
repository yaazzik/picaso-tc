import React from 'react';
import {Post} from "../../../api/Posts/types";
import {Card, Typography} from "@mui/material";
import './PostsPage.css'
import {Link} from "react-router-dom";

interface PostsListProps {
  posts?: Post[]
}
const PostsList = (props: PostsListProps) => {

  const {posts} = props;

  return (

      <div className='post-card-wrapper'>
        {posts?.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
          >
            <div className='post-card'>
              <Card
                variant='outlined'
                sx={{
                  fontFamily: 'Oxygen, sans-serif',
                  minWidth: '250px',
                  minHeight: '250px',
                  backgroundColor: 'black',
                  border: '1px solid white',
                  padding: '20px',
                  ":hover":{
                    border: '1px solid deeppink',
                  }
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Mexcellent, serif',
                    backgroundColor: 'black',
                    color: 'deeppink',
                    fontSize: 25
                  }}>
                  {post.title}
                </Typography>
              </Card>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default PostsList;
