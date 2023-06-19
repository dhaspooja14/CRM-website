import React, {useEffect, useState} from 'react'
import "./FormOfUsers.css"
import { Navigate, useNavigate } from 'react-router-dom'
// import {useDispatch} from 'react-redux';
import axios from 'axios';
// import USER_REGISTER_SUCCESS from 'axios';
// import USER_REGISTER_REQUEST from 'axios';
// import USER_REGISTER_FAIL from 'axios';
// import { combineReducers } from 'redux';


export default function FormOfUsers() {

  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handleForm = (e) => {
    // console.log(e.target.value,e.target.name);
    setForm({
      ...form,
      [e.target.name]  : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/dashboard/formuser',{
        // mode: 'no-cors',
        method:'POST',
        body: JSON.stringify(form),
        headers: {
            'Content-Type':'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    navigate('/dashboard/users');
  }

  // const getUsers = async () => {
  //   const response = await fetch('http://localhost:8000/dashboard/formuser',{
  //       method:'GET',
  //   })
  //   const data = await response.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   getUsers();
  // },[]);

    
    // // const history=useNavigate();

    // const [form, setForm] = useState({});
    // const [errors, setErrors] = useState({});
    // const [message, setMessage] = useState('')
    // const setField = (field, value) => {
    //     setForm({
    //         ...form,
    //         [field]:value
    //     })

    //     if(!!errors[field])
    //     setErrors({
    //         ...errors,
    //         [field]:null
    //     })
    // }

    // // const dispatch = useDispatch()

    // const validateForm = () => {
    //     const { name, email, type, date, phone, address, impo, desc } = form
    //     const newErrors = {}
 
    //     if(!name || name === 'Select Name')
    //         newErrors.name = "Please Enter your name"
    //     if(!email || email === 'Select Name')
    //         newErrors.email = "Please Enter your name"
    //     if(!type || type === 'Select Name')
    //         newErrors.type = "Please Enter your name"
    //     if(!date || date === 'Select Name')
    //         newErrors.date = "Please Enter your name"
    //     if(!phone || phone === 'Select Name')
    //         newErrors.phone = "Please Enter your name"
    //     else if (phone.length < 10) newErrors.phone= 'Invalid Number'
    //     if(!address || address === 'Select Name')
    //         newErrors.address = "Please Enter your name"
    //     if(!impo || impo === 'Select Name')
    //         newErrors.impo = "Please Enter your name"
    //     if(!desc || desc === 'Select Name')
    //         newErrors.desc = "Please Enter your name"

    //     return newErrors
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()

    //     axios.post("http://localhost:8000", {
    //         Leadlist: form
    //     })

    //     const formErrors = validateForm()
    //     if(Object.keys(formErrors).length > 0){
    //         setErrors(formErrors)
    //         setMessage("Whoops, please check for errors below lighlighted in red! ")
    //     }else{
    //         console.log('form submitted');
    //         console.log(form)

    //         // dispatch(registerUser(form))
    //     }
    // }

    // const registerUser = (form) => async (dispatch) => {
    //     try{
    //         dispatch({type: USER_REGISTER_REQUEST})

    //         const config = {
    //             headers:{
    //                 'Content-Type' : 'application/json'
    //             }
    //         }
    //         const {data} = await axios.post('/api/users/formuser', form, config)
    //         dispatch({
    //             type: USER_REGISTER_SUCCESS,
    //             payload: data,
    //         })
    //     }   catch (error) {
    //         dispatch({  
    //             type: USER_REGISTER_FAIL,
    //             payload:
    //                 error.response && error.response.data.message
    //                     ? error.response.data.message
    //                     : error.message,
    //         })
    //     }
    // }

    // const userRegisterReducer = (state = {}, action) => {
    //     switch (action.type) {
    //         case USER_REGISTER_REQUEST:
    //             return {loading : true}
    //         case USER_REGISTER_SUCCESS:
    //             return {loading: false, success: true, userInfo : action.payload}
    //         case USER_REGISTER_FAIL:
    //             return {loading: false, error: action.payload}
    //         default: 
    //             return state
    //     }
    // }


    return (
        <div className="newUser">
        <h1 className="newUserTitle">Add New Lead</h1>
        <form className="newUserForm">
            <div className="newUserItem" id="name">
            <label>Full Name</label>
            <input type="text" 
            placeholder="xyz.."
            name='name'
            onChange={handleForm}
            />
            </div>
            <div className="newUserItem" id="email">
            <label>Email</label>
            <input type="email" 
            placeholder="john@gmail.com"
            name='email'
            onChange={handleForm}
            />
            </div>
            <div className="newUserItem" id="type">
            <label>Lead Type</label>
            <input type="text" 
            placeholder="Political/Regional/Social??"
            name='type'
            onChange={handleForm}
            />
            </div>
            <div className='newUserItem' id="date">
            <label>Date of Deal</label>
            <input type="date" 
            name='date'
            onChange={handleForm}
            // isInvalid={!!errors.date}
            />
            </div>
            <div className="newUserItem" id="phone">
            <label>Phone</label>
            <input type="text" 
            placeholder="+91 93254 22211"
            name='phone'
            onChange={handleForm}
            />
            </div>
            <div className="newUserItem" id="address">
            <label>Address</label>
            <input type="text" 
            placeholder="City, State"
            name='city'
            onChange={handleForm}
            />
            </div>
            <div className="newUserItem" id="impo">
            <label>Important?</label>
            <input type="text" 
            placeholder="Hot? Cold? Moderate?"
            name='impo'
            onChange={handleForm}
            />
            </div>
            <div className="newUserItem" id="desc">
            <label>Description (in 5-6 words..)</label>
            <textarea name="comments" 
            id="comments" 
            placeholder='Say Something...'
            onChange={handleForm}
            />
            </div>
            <button className="newUserButton" type='submit' onClick={handleSubmit}>Create</button>
        </form>
        </div>
  )
}
