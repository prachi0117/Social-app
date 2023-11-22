import React from 'react'
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
   <div className="sidebarWrapper">
     <ul className="sidebarList">

        <li className="sidebarListItems">
        <i class="fa-solid fa-rss sidebaricon"></i>
        <span className="sidebarListItemText">Feed</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-message sidebaricon"></i>
        <span className="sidebarListItemText">Chats</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-video sidebaricon" ></i>
        <span className="sidebarListItemText">Videos</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-user-group sidebaricon"></i>
        <span className="sidebarListItemText">Groups</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-bookmark sidebaricon"></i>
        <span className="sidebarListItemText">Bookmarks</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-sharp fa-regular fa-circle-question sidebaricon"></i>
        <span className="sidebarListItemText">Questions</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-suitcase sidebaricon"></i>
        <span className="sidebarListItemText">Jobs</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-calendar-days sidebaricon"></i>
        <span className="sidebarListItemText">Events</span>
 
        </li>
        
        <li className="sidebarListItems">
        <i class="fa-solid fa-graduation-cap sidebaricon"></i>
        <span className="sidebarListItemText">Courses</span>
 
        </li>
     </ul>
     <button className="sidebarButton">Show More</button>
     <hr  className='sidebarhr'/>

     <ul className='sidebarFriendList'>

        <li className="sidebarFriend">
            <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">Jenifer </span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">saem soe</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">marry kam</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">anjelina samuel</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">peter park</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">jerry nam</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1441441247730-d09529166668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">travis jam</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">nancy camuel</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">cameo scott</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">lisa benzy</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">justin brace</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">benzy nano</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80'alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">lisa nim</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">rowdy brace</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">alisa camuel</span>
        </li>
        <li className="sidebarFriend">
            <img src='https://images.unsplash.com/photo-1610108703114-a48b1e7831c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt="" className='sidebarFriendImg' />
            <span className="sidebarFriendName">zayn benzy</span>
        </li>
     </ul>
   </div>

    </div>
  )
}
