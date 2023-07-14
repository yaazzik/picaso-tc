import React, {useEffect, useState} from 'react';
import {PostComment} from "../../../api/Comments/types";
import {getCommentsByPostId} from "../../../api/Comments/getCommentsByPostId";
import {Card, Typography} from "@mui/material";

interface CommentsProps {
  postId: number;
}
const Comments = ({postId}: CommentsProps) => {

  const [comments, setComments] = useState<PostComment[] | undefined>(undefined)

  useEffect(
    () => {
      getCommentsByPostId(postId)
        .then(
          (res) => {
            setComments(res)
          }
        )
    }
  ,[])

  return (
    <div className='comments-wrapper'>
      <Typography variant='h1'>
        Comments
      </Typography>

      {comments?.map(
        (comment) => (
          <Card key={comment.id} variant="outlined" sx={{
            p: 4,
            backgroundColor: 'black',
            border: '1px solid deeppink',
            mb: 2
          }}>
            <Typography variant='h6' sx={{
              display: 'flex',
              backgroundColor: 'black',
              color: 'white',
              borderBottom: '1px solid deeppink'
            }}>
              {comment.name}
              <div className='comment-email'>
                {comment.email}
              </div>
            </Typography>
            <Typography variant='h6'>
              {comment.body}
            </Typography>
          </Card>
        )
      )}
    </div>
  );
};

export default Comments;
