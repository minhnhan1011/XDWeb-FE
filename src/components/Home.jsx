import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'wG277zKzuH42lMgVt9O8fzMTdREe'; // Thêm access token vào đây
        const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BKK&destinationLocationCode=SYD&departureDate=2024-03-21&adults=1&nonStop=false&max=250', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFlights(response.data.data); // Cập nhật danh sách các chuyến bay từ dữ liệu phản hồi
        console.log(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {flights.map(data => {
        return (
          <>
            <div className="info-chuyenbay">
              <p>{data.id}</p>
              {data.itineraries.map(data1=>{
                return(
                  <>
                  {data1.segments.map(data2=>{
                    return(
                      <>
                        <p>{data2.arrival.iataCode}</p>
                        <p>{data2.arrival.at}</p>

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
  );
};

export default YourComponent;
