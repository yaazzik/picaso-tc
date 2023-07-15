import React, {Suspense, useCallback, useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {getUsers} from "../../../api/Users/getUsers";
import {User} from "../../../api/Users/types";
import PostsList from "./PostsList";
import {Post} from "../../../api/Posts/types";
import './PostsPage.css'
import {getPostsByUserId} from "../../../api/Posts/getPostsByUserId";

const PostsPage = () => {

  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    !users?.length && getUsers().then(
      res => setUsers(res)
    );
    getPostsByUserId(selectedUserId).then(
      res => setPosts(res)
    );
  },[selectedUserId])

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setSelectedUserId(e.target.value)
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='user-select'>
        <FormControl variant='standard' fullWidth>
          <InputLabel id="user-select-label">Users</InputLabel>
          <Select
            placeholder='User name'
            sx={{
              fontFamily: 'Mexcellent, serif',
              color: 'white',
              fontSize: '30px',
              border: '2px solid white',
              ":hover": {
                border: '2px solid pink',
              }
            }}
            labelId="user-select-label"
            id="demo-simple-select"
            value={selectedUserId}
            label="User"
            onChange={handleChange}
          >
            {users?.map((user) =>
              (<MenuItem
                key={user.id}
                value={user.id}
              >
                {user.username}
              </MenuItem>)
            )
            }
          </Select>
        </FormControl>
      </div>
      <PostsList posts={posts} />
    </Suspense>
  );
};

export default PostsPage;
