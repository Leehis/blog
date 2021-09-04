import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
    </div>
  )
}

export default Post
