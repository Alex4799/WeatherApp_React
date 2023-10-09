import React from 'react'

const Form = ({setCity,getData}) => {
  return (
    <div className=' d-flex gap-1'>
        <input type="text" onChange={(e)=>setCity(e.target.value)} className=' form-control' placeholder='Enter Your City....'/>
        <button onClick={()=>getData()} className='btn btn-info'>Search</button>
    </div>
  )
}

export default Form