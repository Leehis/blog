import React from 'react'
import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://images.pexels.com/photos/947785/pexels-photo-947785.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          alt=''
        />
        <h1 className='singlePostTitle'>
          lorem ipsum jesuti .
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Ehi</b>
          </span>
          <span className='singlePostDate'>Date: 3 hours ago</span>
        </div>
        <p className='singlePostDescription'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          reprehenderit beatae optio modi, incidunt eius similique a itaque.
          Assumenda deleniti dolores at sed quas tempore cum error qui culpa
          quos. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Deleniti exercitationem dolorum sint minus, ratione a, quae inventore
          iusto vel minima sed doloremque mollitia maxime! Quos aspernatur
          dignissimos quis quam est?
        </p>
      </div>
    </div>
  )
}

export default SinglePost
