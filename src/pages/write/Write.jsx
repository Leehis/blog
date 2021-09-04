import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        alt=''
      />
      <form action='' className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput write'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
