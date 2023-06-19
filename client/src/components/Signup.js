import React, {useEffect,useState} from 'react';
import axios from'axios';
import { useNavigate,Link } from 'react-router-dom';

function Login () {
    const history=useNavigate();
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    async function submit(e) {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/signup",{
                email,password    
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }

  return (
    <div className='Login'>
    <h1>Signup</h1>
        <form action='POST'>
            <div class="txt_field"><input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email.." /></div>
            <div class="txt_field"><input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password.." /></div>
            <input type="submit" onClick={submit}/>
        </form>
        <div class="signup_link"> 
        <a href="/">Back to Login?</a>
        </div>
        </div>
  )
}

export default Login