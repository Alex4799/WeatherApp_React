/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Form from './components/Form'
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { api,api_key } from './api/api'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [data,setData]=useState({});
  const [city_name,setCity]=useState('Yangon');
  
  const getData=async ()=>{
    try {
      const resp=await api.get(`/weather?q=${city_name}&appid=${api_key}`)
      setData(resp.data);
    } catch (error) {
      console.log('error');
    }

  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className=' w-100 min-vh-100 d-flex  justify-content-center align-items-center'>
      <div className='shadow bg-light p-5'>
        <div>
          <h1 className=' text-center'>Weather App</h1>
        </div>
        <div className='py-2'>
          <Form setCity={setCity} getData={getData}/>
        </div>
        <div className='py-2'>
          <Card data={data}/>
        </div>

      </div>
    </div>
  )
}

export default App