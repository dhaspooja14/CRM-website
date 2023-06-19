import React, { useState } from 'react';
// import home from './pages/Home';
// import Home from './pages/Home';
import {
    FaCommentAlt,
    FaBars,
    FaAlignLeft,
    FaShoppingBag,
    FaTh,
    FaThList, 
    FaUserAlt,
    FaRegChartBar,
    FaPhone,
    FaHome
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"/dashboard/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"users",
            name:"Users",
            icon:<FaUserAlt />
        },
        {
            path:"about",
            name:"About",
            icon:<FaAlignLeft/>
        },
        
        // {
        //     path:"analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        // {
        //     path:"comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        
        {
            path:"contactus",
            name:"ContactUs",
            icon:<FaPhone/>
        }

    ]
    return (
        <div className='container'>
            <div style={{width: isOpen ? "170px" : "50px"}} className="sidebar" >
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo" >Media</h1>
                    <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars"></div>
                        {/* <FaBars onClick={toggle}/> */}
                        <h2><i class="fa fa-newspaper-o" aria-hidden="true"  onClick={toggle}/></h2>
                    
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;


// const Sidebar = ({children}) => {
//     const[isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem = [
//         {
//             path:"/dashboard",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productlist",
//             name:"ProductList",
//             icon:<FaThList/>
//         }

//     ]
//     return (
//         <div className='container'>
//             <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
//                 <div className="top_section">
//                     <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                     <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"></div>
//                         <FaBars onClick={toggle}/>
                    
//                 </div>
//                 {
//                     menuItem.map((item, index)=>(
//                         <NavLink to={item.path} key={index} className="link" activeClassName="active">
//                             <div className='icon'>{item.icon}</div>
//                             <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
//                         </NavLink>
//                     ))
//                 }
//             </div>
//             <main>{children}</main>
//         </div>
//     );
// };