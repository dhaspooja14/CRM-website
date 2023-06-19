import React from "react";
import "./Users.css"
import {Link} from 'react-router-dom';
import {deleteUser} from '../../service/api';
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableRow, TableHead, styled, Button } from "@mui/material";

export default function Users(){

    const StyledTable = styled(Table)`
        margin: 15px auto;
        width: none;
    `;
    const THead = styled(TableRow)`
        background: #000000;
        & > th{
            color: #fff;
            font: 20px;
        }
        
    `;

    const TBody = styled(Table)

    const [users, setUsers] = useState([]);
    const getUsers = async () => {
    const response = await fetch('http://localhost:8000/dashboard/formuser',{
        method:'GET',
    })
    const data = await response.json();
    setUsers(data);
    
}
    useEffect(() => {
        getUsers();
    },[]);

    const deleteUserDetails = async(email) => {
        await deleteUser(email);
        getUsers();
    }
    return (
        <div className='NewUser'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>Leads</h1>
                <Link to={"/dashboard/formuser"}>
                <button className="userAddButton">+ Add New Entry</button>
                </Link>
            </div>
        <div className="Table"> 
        <StyledTable >
            
            <TableHead>
                <THead >
                    <TableCell>Sr.no</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Important</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>----Action-----</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users &&
                    users.map((user, index) => {
                        return (
                        <TableRow key={index}>
                            <TableCell scope="row">{index+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.type}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.city}</TableCell>
                            <TableCell>{user.impo}</TableCell>
                            <TableCell>{user.comments}</TableCell>
                            <TableCell> 
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/dashboard/edit/${user.email}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user.email)}>Delete</Button>
                            </TableCell>
                            
                        </TableRow>
                    
                    )
                })}
            </TableBody>
        </StyledTable>
        </div>
        </div>
    )
} 

{/* <div className="users" style={{height: 700, width: '100%', marginTop:"10px"}}> */}
        {/* <ol>
        {users.map(user=><li>{user.name},{user.email},{user.type},{user.date},{user.phone},{user.city},{user.impo},{user.comments}</li>)}
        </ol> */}


//     const handleDelete = (id) =>{
//         setData(data.filter(item=>item.id !== id));
//     }
//     const columns = [
//         { field: 'id', headerName: 'ID', width: 50 },
//         { field: 'fullname', headerName: 'Full Name', width: 200, renderCell: (params)=>{
//             return (
//                 <div className="UsersList">
//                     <img className="UsersImage" src={params.row.avatar} alt=""/>
//                     {params.row.fullname}
//                 </div>
//             )
//         }},
//         { field: 'email', headerName: 'Email', width: 220 },
//         { field: 'date', headerName: 'Date', width: 170 },

//         {
//           field: 'hotorcold',
//           headerName: 'Hot or Cold',
//           width: 140,
//         },
//         { field: 'Whattype', headerName: 'Type', width: 150 },

//         { field: 'description', headerName: 'Description', width: 330 },

//         {
//             field:"action",
//             headerName: "Action",
//             width: 150,
//             renderCell: (params) => {
//                 return(
//                     <>
//                         <Link to={"/dashboard/NewUser"}>
//                             <button className="UserListEdit">Edit</button>
//                         </Link>
//                         <DeleteOutlineIcon className="UserListDelete" onClick={()=>handleDelete(params.row.id)}/>
//                     </>
//                 );
//             }
//         }
//       ];