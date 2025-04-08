import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.jpg'
import Usericon from '../assets/iconuser.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Header() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const checktoken = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/auth`)
        if (res.data.Status === "Success") {
          console.log(res);
          setAuth(true)
          setName(res.data.name)
        }
        else {
          setAuth(false)
          setMessage(res.data.Message)
        }
      } catch (error) {
        console.log(error);
      }
    }
    checktoken();
  }, [])
  function handleLogout() {
    axios.get(`http://localhost:8081/logout`)
      .then(res => {
        window.location.reload();
      }).catch(err => console.log(err))
  }
    return (
        <div className="header">
            <div className="header-top">
                <img src={Logo} alt="logo" /> Flight Báo
            </div>
            <div className="header-mid">
                <Link to="/" style={{textDecoration:'none',color:'black'}}><p>Trang chủ</p></Link>
                <p>Liên hệ</p>
            </div>
            <div className="header-bot">
            {
                auth ?
                    <div style={{ display: 'flex', gap: "3px", flexDirection: "column", marginRight: "20px" }}>
                        <p style={{ color: "white", fontSize: "13px", margin: "0 0 0 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100px" }}>{name}</p>
                        <button style={{ backgroundColor: "white", borderRadius: "5px", border: "none", padding: "5px", }} onClick={handleLogout}>Đăng xuất</button>
                    </div>
                    :
                    <div>
                        <Link to={"/login"}><button style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "10px", border: '1px solid #008DDA' }}> <img style={{ width: "15px", height: "15px" }} src={Usericon} alt="icon-user" />Đăng nhập</button></Link>
                    </div>
            }
            </div>
        </div>
    )
}

export default Header