import React, {useState, useEffect} from 'react';
import './dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    getData()
  }, []);

//FETCHING DATA FROM API
  const getData = async() => {
    await axios.get('https://opensky-network.org/api/states/all')
    .then((res) => {
      //console.log(res.data);
      const myData = res.data;
      setDataValue(myData);
    }).catch((err) => {
        console.log(err)
    })
}

return (
  <div className='dashboard'>
    <h1>{ dataValue.title }</h1>
    <table>
      <tr>
        <th>Airport</th>
        <th>Time</th>
        <th>Arrival</th>
        <th>Departure</th>
      </tr>
      <tr>
        <td>{ dataValue.state }</td>
        <td>{ dataValue.time }</td>
        <td>{ dataValue.arrival }</td>
        <td>{ dataValue.departure }</td>
      </tr>
    </table>

  </div>
);
};

export default Dashboard;