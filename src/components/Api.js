import React from 'react'
import { useEffect , useState } from 'react';
import './Api.css'

const Api=()=> {
    const [data, setData] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
       fetchData()
    }, [])
    const fetchData =()=>{
        fetch(URL).then((res)=>res.json()).then((response)=>{
            console.log(response)
            setData(response)
        })
    }
  return (
    <div className='Api'>
        <h1>Table Data</h1>
        <div className = "container">
            <table>
                <thead className = "thead">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Phone</td>
                        <td>Website</td>
                    </tr>
                </thead>
                <tbody className = "tbody">
                    {
                        data.map((e)=>(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.username}</td>
                                <td>{e.phone}</td>
                                <td>{e.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    
  </div>
  )
}

export default Api