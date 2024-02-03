import React from 'react'
import './error.scss'
import { errorImage } from '../../assets'

function Error404() {
  return (
    <div className='container error'>
        <div>
            <img src={errorImage} alt="Errorimg" />
        </div>
        <div>
            <h1>404 - Page not found</h1>
            <p>The page you are looking for might have been removed had it's name changed or is temporarily unavailable</p>
        </div>
        <div>
            <button className='button-57'>tap here <span>Go to home page</span></button>
        </div>
    </div>
  )
}

export default Error404