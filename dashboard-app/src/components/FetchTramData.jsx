import React, {useEffect} from 'react'
import axios from 'axios'

// a function that fetches data and returns a table containing it
function FetchTramData() {
    useEffect(() => {
        axios.get('http://transport.opendata.ch/v1/stationboard?station=Siemens&limit=2')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {console.log(err)})
    }, [])
    return <div>FetchTramData</div>
}
export default FetchTramData