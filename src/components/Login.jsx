import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const [values, setValues] = useState(
       { 
            email: "",
            password: ""
        }
    );
    const [error, seterror] = useState("")
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    function HandleSubmit(e){
        e.preventDefault();
        axios.post(`http://localhost:8081/login`,values)
        .then(res => {
            if(res.data.Status === "Đăng nhập thành công"){
                navigate("/");
            }else{
                seterror(res.data.Message)
                setTimeout(() => window.location.reload(),3000)
            }
        })
        .catch(err => console.log(err));
    }
  return (
    <>
    <div className="login-container">
        <form className='login-form' onSubmit={HandleSubmit}>
            <p style={{textAlign:"center", fontSize:"20px"}}>ĐĂNG NHẬP</p>
            <label>Email: </label>
            <input type="email" placeholder='email' name='email' onChange={e => setValues({...values, email: e.target.value})}/>
            <label>Mật khẩu: </label>
            <input type="password" placeholder='password' name='password' onChange={e => setValues({...values, password: e.target.value})}/>
            <button>Đăng nhập</button>
            <p style={{fontSize:"12px", textAlign:"center"}}>{error} </p>
            <p style={{fontSize:"12px", textAlign:"center"}}>Bạn chưa có tài khoản? <Link to={"/signup"}>Đăng ký ngay</Link></p>
        </form>
    </div>
    </>
  )
}

export default Login