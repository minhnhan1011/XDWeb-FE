import React, { useEffect, useState } from 'react'
import Header from './Header';
import axios from 'axios';

function Booking() {
    const [selectedFlight, setselectedFlight] = useState(JSON.parse(localStorage.getItem('chonve')) || [])
    const [ho, setho] = useState("")
    const [ten, setten] = useState("")
    const [email, setmail] = useState("")
    const [sdt, setsdt] = useState("")
    const [dc, setdc] = useState("")
    const [mamaybay, setmamaybay] = useState(selectedFlight.itineraries[0].segments[0].aircraft.code)
    const [diemdi, setdiemdi] = useState(selectedFlight.itineraries[0].segments[0].departure.iataCode)
    const [diemden, setdiemden] = useState(selectedFlight.itineraries[0].segments[0].arrival.iataCode)
    const [ngaydi, setngaydi] = useState(selectedFlight.itineraries[0].segments[0].departure.at)
    const [ngayden, setngayden] = useState(selectedFlight.itineraries[0].segments[0].arrival.at)
    const [hanghangkhong, sethanghangkhong] = useState(selectedFlight.itineraries[0].segments[0].carrierCode)
    const [gia, setgia] = useState(selectedFlight.price.total*26000)
    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://xdweb-be.onrender.com/datve",{mamaybay,diemdi,diemden,ngaydi,ngayden,hanghangkhong,gia,ho,ten,email,sdt,dc})
    }
    return (
        <>
            <Header />
            <hr />
            <div className="booking-background">
                <div className="booking">
                    <h1 style={{textAlign:"center"}}>Booking Flight</h1>
                    <div className="booking-box">
                        <div className="booking-box-info">

                            {selectedFlight.itineraries.map(data => {
                                return (
                                    <>

                                        {data.segments.map(data1 => {
                                            return (
                                                <>
                                                    <div className="booking-infoFlight">
                                                        <h3>Chuyến bay</h3>
                                                        <p>Mã máy bay: {data1.aircraft.code}</p>
                                                        <p>Điểm đi: {data1.departure.iataCode}</p>
                                                        <p>Ngày đi: {data1.departure.at}</p>
                                                        <p>Điểm đến: {data1.arrival.iataCode}</p>
                                                        <p>Ngày đến: {data1.arrival.at}</p>
                                                        <p>Hãng hàng không: {data1.carrierCode}</p>
                                                        <p>Giá vé: {selectedFlight.price.total*26000} VND</p>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            })}

                        </div>
                        <div className="booking-box-traveler">
                            <form className='booking-box-traveler-form' onSubmit={handleSubmit}>
                                <h2 style={{ textAlign: "center" }}>Thông tin hành khách</h2>
                                <div className="booking-box-traveler-form-input">
                                    <div className="booking-box-traveler-form-input-name">
                                        <div style={{ flexBasis: "50%" }}>
                                            <p>Họ</p>
                                            <input type="text" style={{ width: "97%" }} onChange={(e)=>{ setho(e.target.value)}} />
                                        </div>
                                        <div style={{ flexBasis: "50%" }}>
                                            <p>Tên</p>
                                            <input type="text" style={{ width: "97%" }} onChange={(e)=>{ setten(e.target.value)}} />
                                        </div>
                                    </div>
                                    <p>Email</p>
                                    <input type="text" onChange={(e)=>{ setmail(e.target.value)}} />
                                    <p>Số điện thoại</p>
                                    <input type="text" onChange={(e)=>{ setsdt(e.target.value)}} />
                                    <p>Địa chỉ</p>
                                    <input type="text" onChange={(e)=>{ setdc(e.target.value)}} />
                                    <button style={{cursor:"pointer",marginTop: "10px", width: "100%", borderRadius: "5px", border: '1px solid white', backgroundColor: "#008DDA", color: "white", padding: "15px" }}>Đặt vé</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking
