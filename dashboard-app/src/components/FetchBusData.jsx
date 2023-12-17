import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

// a function that transforms a timestamp 2023-12-13T21:05:00+0100 into 21:05:00
function transformTimestamp(timestamp) {
    if (timestamp === null || timestamp === 0) {
        return ''
    }
    timestamp = new Date(timestamp); 
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes(); 
    const seconds = timestamp.getSeconds();

    // Pad minutes and seconds with leading zeros
    const paddedMinutes = (`0${minutes}`).slice(-2);
    const paddedSeconds = (`0${seconds}`).slice(-2);

    // Format hours as 24-hour time  
    const formattedTime = `${hours}:${paddedMinutes}:${paddedSeconds}`;

    return formattedTime // 21:05:00

}
// a function that fetches data and returns a table containing it
function FetchBusData() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://transport.opendata.ch/v1/stationboard?station=Albisrank&limit=5')
            .then(res => setData(Array.from(res.data.stationboard)))
            // .then(res => console.log(res.data.stationboard))
            .catch(err => {console.log(err)})
    }, [])
    // return <div>React</div>
    return (
        <div className = 'container'>
            <div className = 'mt - 3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Transport</th>
                        <th>Destination</th>
                        <th>Departure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => { 
                            return <tr key = {index}>
                                <td>{item.category + item.number}</td>
                                <td>{item.to.replace('Zürich','').replace(',','')}</td>
                                <td>{transformTimestamp(item.stop.departure) + transformTimestamp(item.stop.delay)}</td>
                            </tr>
                        })
                    }
                </tbody>
                </Table>
            </div>
            </div>
    )
}
export default FetchBusData