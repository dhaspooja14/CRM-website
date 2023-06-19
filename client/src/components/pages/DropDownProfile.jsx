import React from 'react'
import {
    BsFillPersonFill,
}from "react-icons/bs";
import {
	RiLogoutBoxFill,
}from "react-icons/ri"
const DropDownProfile = () => {
  return (
    <div className='flex flex-col dropDownProfile'>
			<ul className='dropping'>
				<li><BsFillPersonFill/><a className='drop' href="/dashboard/profile">  Profile</a></li>
				<li> </li>
				<li><RiLogoutBoxFill/><a className='drop' href="/">  Logout</a></li>
			</ul>
		</div>
  )
}

export default DropDownProfile;

