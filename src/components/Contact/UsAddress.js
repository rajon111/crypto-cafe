import React from 'react'

const UsAddress = () => {
  return (
    <div className='border p-8 bg-green-100 w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center order-1 md:order-2'>
        <div className='order-2 md:order-1  mt-3'>
          <h1>Street: 1203 SN Street</h1>
          <h1>City: New York</h1>
          <h1>Phone: +1(607)2333333</h1>
          <h1>Email: contact.usa@cc.com</h1>
        </div>
        <div className='order-1 md:order-2  mt-3'>
          <h1 className='text-2xl order-1 md:order-2'>USA OFFICE</h1>
        </div>
      </div>
    </div>
  )
}

export default UsAddress
