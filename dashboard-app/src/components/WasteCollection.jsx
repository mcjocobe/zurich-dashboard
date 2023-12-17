import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';



export function WasteCollection() {
    var todayDate = new Date().toISOString().slice(0, 10)
    var zipCode = 8047
    // let config = {
    //     headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     }
    //   }
    const instance = axios.create({
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*' 
        }
      });
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://openerz.metaodi.ch/api/calendar.json?zip=${zipCode}&types=cardboard&types=paper&start=${todayDate}&sort=date&offset=0&limit=20`, 
        {headers: {'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Origin': '*'}})
        // {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json'
        //     }
        //   })
            .then(res => setData(res))
            .catch(err => {console.log(err)})
    }, [])
    console.log(data)
    console.log(typeof data)
    // return <div>React</div>
    return (
        <div className = 'container'>
            <div className = 'mt - 3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Waste</th>
                        <th>Date</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => { 
                            return <tr key = {index}>
                                <td>{item.type}</td>
                                <td>{item.date}</td>
                                <td>{item.area}</td>
                            </tr>
                        })
                    }
                </tbody>
                </Table>
            </div>
            </div>
    )
}

export default WasteCollection