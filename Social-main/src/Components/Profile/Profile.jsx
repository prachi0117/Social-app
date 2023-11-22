import './Profile.css'
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

export default function Profile() {
  return (
    <>
    <Topbar/>

    <div className="profile">

    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
  <div className="profileCover">
  <img src="https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"alt=""  className='profileCoverImg' />
            <img src='https://images.unsplash.com/photo-1611590027211-b954fd027b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80' alt=""  className='profileUserImg' />
  </div>
  <div className="profileInfo">
    <h4 className='profileInfoName'>Safak Kocaoglu</h4>
    <span className='profileInfoDesc'>Hello my Freinds</span>
  </div>

        </div>
        <div className="profileRightBottom">
        <Feed/>
    <Rightbar profile />
        </div>
    </div>
    
    </div>
   
    </>
  )
}
