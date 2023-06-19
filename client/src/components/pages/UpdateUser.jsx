import React, {useEffect, useState} from 'react'
import "./FormOfUsers.css"
import {useNavigate, useParams, Link } from 'react-router-dom';
import {editUser, getUserByEmail} from '../../service/api';


export default function UpdateUser() {

  const [form, setForm] = useState({});
  const [user, setUser] = useState([]);
  const {email} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  },[])

  const loadUserDetails = async () => {
    const response = await getUserByEmail(email);
    const userData = response.data;
    setUser(userData);
    setForm(userData);
  }


  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]  : e.target.value
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:8000/dashboard/formuser',{
  //       // mode: 'no-cors',
  //       method:'POST',
  //       body: JSON.stringify(form),
  //       headers: {
  //           'Content-Type':'application/json'
  //       }
  //   })
  //   const data = await response.json();
  //   console.log(data);
  //   navigate('/dashboard/users');
  // }

  const EditUserDetails = async () => {
      await editUser(form, email);
      // navigate('/dashboard/users');
  }
    return (
        <div className="newUser">
        <h1 className="newUserTitle">Update User</h1>
        <form className="newUserForm">
            <div className="newUserItem" id="name">
            <label>Full Name</label>
            <input type="text" 
            placeholder="xyz.."
            name='name'
            onChange={handleForm}
            value={form.name}
            />
            </div>
            <div className="newUserItem" id="email">
            <label>Email</label>
            <input type="email" 
            placeholder="john@gmail.com"
            name='email'
            onChange={handleForm}
            value={form.email}
            />
            </div>
            <div className="newUserItem" id="type">
            <label>Lead Type</label>
            <input type="text" 
            placeholder="Political/Regional/Social??"
            name='type'
            onChange={handleForm}
            value={form.type}
            />
            </div>
          
            <div className='newUserItem' id="date">
            <label>Date of Deal</label>
            <input type="date" 
            name='date'
            onChange={handleForm}
            value={form.date}
            // isInvalid={!!errors.date}
            />
            </div>
            <div className="newUserItem" id="phone">
            <label>Phone</label>
            <input type="text" 
            placeholder="+91 93254 22211"
            name='phone'
            onChange={handleForm}
            value={form.phone}
            />
            </div>
            <div className="newUserItem" id="address">
            <label>Address</label>
            <input type="text" 
            placeholder="City, State"
            name='city'
            onChange={handleForm}
            value={form.city}
            />
            </div>
            <div className="newUserItem" id="impo">
            <label>Important?</label>
            <input type="text" 
            placeholder="Hot? Cold? Moderate?"
            name='impo'
            onChange={handleForm}
            value={form.impo}
            />
            </div>
            <div className="newUserItem" id="desc">
            <label>Description (in 5-6 words..)</label>
            <textarea name="comments" 
            id="comments" 
            placeholder='Say Something...'
            onChange={handleForm}
            value={form.comments}
            />
            </div>
            <Link to='/dashboard/users'>
            <button className="newUserButton" type='submit' onClick={EditUserDetails}>Update</button>
            </Link>
        </form>
        </div>
  )
}
