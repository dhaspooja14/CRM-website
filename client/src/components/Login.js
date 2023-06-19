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
            await axios.post("http://localhost:8000/",{
                email,password    
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("dashboard/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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
    <h1>Login</h1>
        <form action='POST'>
            <div className="txt_field"><input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email.." /></div>
            <div className="txt_field"><input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password.." /></div>
            <input type="submit" onClick={submit}/>
        </form>
        
        <div className="signup_link"> 
        New User??  <a href="/signup">Signup Here!!</a>
        </div>
        {/* <div class="signup_link"><Link to="/signup">Signup here!!</Link></div> */}
        </div>
  )
}

export default Login