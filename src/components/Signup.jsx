import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
    const [values, setValues] = useState(
       {
            name:"",
            phone:"",
            email: "",
            password: ""
        }
    );
    const navigate = useNavigate();
    function HandleSubmit(e){
        e.preventDefault();
        axios.post(`https://xdweb-be.onrender.com/signup`,values)
        .then(res => {
            alert("Đăng ký thành công")
            navigate("/");
        })
    }
  return (
    <>
    <div className="login-container">
        <form className='login-form' onSubmit={HandleSubmit}>
            <p style={{textAlign:"center", fontSize:"20px",margin:"0 0 0 0"}}>ĐĂNG KÝ</p>
            <label>Họ và Tên: </label>
            <input type="text" placeholder='Nguyễn Minh Triều' name='name' onChange={e => setValues({...values, name: e.target.value})}/>
            <label>Số điện thoại: </label>
            <input type="text" placeholder='0899459421' name='phone' onChange={e => setValues({...values, phone: e.target.value})}/>
            <label>Email: </label>
            <input type="email" placeholder='trieunm2002@gmail.com' name='email' onChange={e => setValues({...values, email: e.target.value})}/>
            <label>Mật khẩu: </label>
            <input type="password" placeholder='*********' name='password' onChange={e => setValues({...values, password: e.target.value})}/>
            <button>Đăng ký</button>
            <p style={{fontSize:"12px", textAlign:"center"}}>Bạn đã có tài khoản? <Link to={"/login"}>Đăng nhập ngay</Link></p>
        </form>
    </div>
    </>
  )
}

export default Login
