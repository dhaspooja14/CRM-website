import React, {useState,useEffect} from 'react';
import './Dashboard.css';
import { NotificationsNone, Settings } from "@mui/icons-material";
import DropDownProfile from './DropDownProfile';
import 'boxicons';
import { Link } from 'react-router-dom';



const DashboardHome = () => {
  const[openProfile,setOpenProfile] = useState(false);

  const [users, setUsers] = useState([]);
    const getUsers = async () => {
    const response = await fetch('http://localhost:8000/dashboard/users',{
        method:'GET',
    })
    const data = await response.json();
    setUsers(data);
}
    useEffect(() => {
        getUsers();
    },[]);

    

  return (
    <div className='Body'>
    <div className='topbar'>
      {/* <h1>Dashboard Page</h1> */}
      <div className='topbarWrapper'>
      <h1 className='headingsdash'>Dashboard</h1>
        <div className='topLeft'></div>
        <div className='topRight'>
          {/* <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <AccountCircle />
          </div> */}
          
          <div className='topbarIconContainer'>
          {
			      openProfile && <DropDownProfile />
		      }
          <img src={require('./profile.jpg')}  onClick={() => setOpenProfile((prev) => !prev)}
  			  style={{width: 70, height: 70, borderRadius: 400/ 2,position:'right',border:'1px solid black', top:10, cursor:'pointer'}} />
          </div>
        </div>
      </div>
      <div className='division'>
      <ul className='box-info'>
        
        <li>
          <Link to="/dashboard/users">
          <i className='bx bxs-group'></i>
          </Link>
          <span className='text'>
            <h3>{users}</h3>
            <p>No. of Leads</p>
          </span>
        </li>
        
        <li>
          <i className='bx bxs-calendar-check'></i>
          <span className='text'>
            {/* <h3>{users}</h3> */}
            <p>ABCD</p>
          </span>
        </li>
        <li>
          <i className='bx bxs-dollar-circle'></i>
          <span className='text'>
            {/* <h3>{users}</h3> */}
            <p>ABCD</p>
          </span>
        </li>
        <li>
          <i className='bx bxs-dollar-circle'></i>
          <span className='text'>
            {/* <h3>{users}</h3> */}
            <p>ABCD</p>
          </span>
        </li>
      </ul>
      </div>
    </div>
    </div>
  )
}
export default DashboardHome;
