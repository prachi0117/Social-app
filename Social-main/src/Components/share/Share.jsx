import React from 'react'
import './share.css'
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">

            <div className="shareTop">
          <img src="https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80" alt="" className='shareProfileImg' />
          <input placeholder="what's in your mind Safak?" className='shareInput' />
           </div>
           <hr  className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <i class="fa-solid fa-photo-film shareIcon"></i>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                    <i class="fa-solid fa-tag shareIcon" ></i>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                    <i class="fa-solid fa-location-dot shareIcon"></i>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <i class="fa-solid fa-face-smile shareIcon"></i>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='sharebutton'>Share</button>
            </div>
        </div>

    </div>
  )
}
