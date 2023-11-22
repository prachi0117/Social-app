import './Topbar.css'

export default function Topbar() {
  return (
  <div className="topbarContainer">
     <div className="topbarLeft">
      <span className='logo'>Social</span>
     </div>
     <div className="topbarCenter">
     <div className="searchbar">
     <i class="fa-solid fa-magnifying-glass"></i>
     <input type="text" className="searchInput" placeholder='Search for friend , post or video ' />
     </div>
     </div>
     
     <div className="topbarRight">
     <div className="topbarLinks">
      <span className='topbarLink'>Homepage</span>
      <span className='topbarLink'>Timeline</span>

      </div>
       <div className="topbarIcons">
        <div className="topbarIconItems">
        <i class="fa-solid fa-user"></i>
        <span className="topbarIconbadge">1</span>
        </div>
        <div className="topbarIconItems">
        <i class="fa-solid fa-message"></i>
        <span className="topbarIconbadge">2</span>
        </div>
        <div className="topbarIconItems">
        <i class="fa-sharp fa-solid fa-bell"></i>
        <span className="topbarIconbadge">1</span>
        </div>
       </div>
       <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="topbarImg" />
     </div>

  </div>
  )
}
