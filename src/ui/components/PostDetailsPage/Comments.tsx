import React, {FormEvent, MouseEventHandler, useCallback, useEffect, useState} from 'react';
import {PostComment} from "../../../api/Comments/types";
import {getCommentsByPostId} from "../../../api/Comments/getCommentsByPostId";
import {Button, Card, Input, Typography} from "@mui/material";
import {postComment} from "../../../api/Comments/postComment";

interface CommentsProps {
  postId: number;
}
const Comments = ({postId}: CommentsProps) => {

  const [comments, setComments] = useState<PostComment[] | undefined>(undefined)
  const [email, setEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [noData, setNoData] = useState(false);

  const changeEmail = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [])

  const changeNewComment = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNewComment(e.target.value);
  }, [])

  const changeName = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUsername(e.target.value);
  }, [])

  const sendComment = useCallback((e: FormEvent<HTMLButtonElement>) => {
    email && newComment && username
      ? postComment({
      postId: postId,
      body: newComment,
      name: username,
      email: email,
    })
      .then(
      (res => setComments(
        prevState => {
          // @ts-ignore
          return [res, ...prevState]
        })
      ))
      : setNoData(true);
  }, [email, newComment, postId, username])

  useEffect(
    () => {
      getCommentsByPostId(postId)
        .then(
          (res) => {
            setComments(res)
          }
        )
    }
  ,[postId])

  return (
    <div className='comments-wrapper'>
      <Typography variant='h1'>
        Comments
      </Typography>

        <form className='add-comment-form'>
          <div className='add-comment'>
            <Input
              sx={{
                margin: '10px 5px 10px 0',
                border: '1px solid deeppink',
                color: 'white',
                padding: 2,
                width: '50%',
                fontSize: '25px'
              }}
              placeholder={'Type text...'}
              onChange={changeNewComment}
            />
            <Input
              sx={{
                margin: '10px 5px',
                border: '1px solid deeppink',
                color: 'white',
                padding: 2,
                width: '25%',
                fontSize: '25px'
              }}
              placeholder={'Your email...'}
              onChange={changeEmail}
            />
            <Input
              sx={{
                margin: '10px 0 10px 5px',
                border: '1px solid deeppink',
                color: 'white',
                padding: 2,
                width: '25%',
                fontSize: '25px'
              }}
              placeholder={'Your name...'}
              onChange={changeName}
            />
          </div>
          {noData &&(
            <Typography
              sx={{
                color: 'red',
              }}
              variant='h6'
            >
              No data
            </Typography>
          )}
          <Button
            variant='outlined'
            onClick={sendComment}
            sx={{
              margin: '10px 5px 10px 0',
              border: '1px solid deeppink',
              color: 'white',
              padding: 1,
              width: '80px',
              fontSize: '16px'
            }}
          >
            ADD
          </Button>
        </form>

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
