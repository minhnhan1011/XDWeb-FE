import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.jpg'
import Usericon from '../assets/iconuser.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
function Homepage() {
    const [loaive, setloaive] = useState("");
    const [diemdi, setdiemdi] = useState("");
    const [diemden, setdiemden] = useState("");
    const [ngaydi, setngaydi] = useState("");
    const [ngayden, setngayden] = useState("");
    const [nguoilon, setnguoilon] = useState("");
    const [treem, settreem] = useState("");
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [chonve, setchonve] = useState({});
    

    // const fetchData = async () => {
    //     try {
    //         const token = 'i5aINCc4jBXADI9pD2BUeUEOa0Zl'; // Thêm access token vào đây
    //         const response = await axios.post(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${diemdi}&destinationLocationCode=${diemden}&departureDate=${ngaydi}&adults=${nguoilon}&nonStop=true&max=250`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         setFlights(response.data.data); // Cập nhật danh sách các chuyến bay từ dữ liệu phản hồi
    //         console.log(response.data.data);
    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const fetchData = async () => {
        try {
            const response = await axios.post(`http://localhost:8081/vekhuhoi`, { diemdi,  diemden, ngaydi, ngayden }
            );
            setFlights(response.data.data); // Cập nhật danh sách các chuyến bay từ dữ liệu phản hồi
            console.log(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    function handleSubmit(e) {
        e.preventDefault();
        fetchData();
    }
    // console.log(chonve);
    return (
        <>
            <Header />
            <hr />
            <div className="middle">
                <form className="middle-form" onSubmit={handleSubmit}>
                    <div className="middle-Timve">
                        <p>Vé máy bay giá rẻ</p>
                        <hr />
                        <div className="Timve-loaive">
                            <div>
                                <input type="radio" id='khuhoi' name='loaive' value="khuhoi" onChange={e => { setloaive(e.target.value) }} />
                                <label htmlFor="loai_ve">Khứ hồi</label>
                            </div>
                            <div>
                                <input type="radio" id='motchieu' name='loaive' value="motchieu" onChange={e => { setloaive(e.target.value) }} />
                                <label htmlFor="loai_ve">Một chiều</label>
                            </div>
                        </div>
                        {loaive == "" ? <><p>Vui lòng chọn loại vé</p></> :
                            <>
                                <div className="Timve-vitri">
                                    <div>
                                        <p>Điểm đi</p>
                                        <input type="text" name="diemdi" onChange={e => { setdiemdi(e.target.value) }} />
                                    </div>
                                    <div>
                                        <p>Điểm đến</p>
                                        <input type="text" name="diemden" onChange={e => { setdiemden(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="Timve-thoigian">
                                    {loaive == "khuhoi" ?
                                        <>
                                            <div style={{ flexBasis: "50%" }}>
                                                <p>Ngày đi</p>
                                                <input type="date" onChange={e => { setngaydi(e.target.value) }} />
                                            </div>
                                            <div style={{ flexBasis: "50%" }}>
                                                <p>Ngày đến</p>
                                                <input type="date" onChange={e => { setngayden(e.target.value) }} />
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div style={{ flexBasis: "100%" }}>
                                                <p>Ngày đi</p>
                                                <input type="date" style={{ width: "97%" }} onChange={e => { setngaydi(e.target.value) }} />
                                            </div>
                                        </>
                                    }
                                </div>
                                <button style={{ marginTop: "10px", width: "100%", borderRadius: "5px", border: '1px solid white', backgroundColor: "#008DDA", color: "white", padding: "8px",cursor:"pointer" }}> Tìm vé </button>
                            </>
                        }

                    </div>
                </form>
                <div className="overplay"></div>
            </div>
            <div className="middle-resultSearch">
                {flights.map(data => {
                    return (
                        <>
                            <div className="info-chuyenbay">
                                {data.itineraries.map(data1 => {
                                    return (
                                        <>
                                            {data1.segments.map(data2 => {
                                                return (
                                                    <>
                                                        <div className="info-chuyenbay-box">
                                                            <p>Điểm đi: {data2.departure.iataCode}</p>
                                                            <p>Thời gian đi:{data2.departure.at}</p>
                                                            <p>Điểm đến: {data2.arrival.iataCode}</p>
                                                            <p>Thời gian đến: {data2.arrival.at}</p>
                                                            <p>Hãng hàng không: {data2.carrierCode}</p>
                                                            <Link to="/booking" target='_blank'>
                                                                <button style={{marginTop: "10px", width: "100%", borderRadius: "5px", border: '1px solid white', backgroundColor: "#008DDA", color: "white", padding: "8px" }}
                                                                    onClick={() => {
                                                                        localStorage.setItem('chonve', JSON.stringify(data))
                                                                        setchonve(data);
                                                                    }}
                                                                >Chọn vé
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                })}
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Homepage