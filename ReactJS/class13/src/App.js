import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// import CustomDatePicker from './customDatePicker';
// import DatePickerComponent from './reactDatePicker';

export default function App() {
  
  const networkCalls =async(data,id)=>{
    try {
    const baseURL =  process.env.REACT_APP_BASEURL 
   const response =  await axios.get(`${baseURL}/products/getProducts`)
   console.log('response',response.data);
     
  //  const response =  await axios.post(`${baseURL}/products/createProduct`,data)
  //  console.log('response',response.data);

  //   const response =  await axios.put(`${baseURL}/products/updateProduct/${id}`,data)
  //  console.log('response',response.data);

  //     const response =  await axios.delete(`${baseURL}/products/deleteProduct?id=${id}`)
  //  console.log('response',response.data);

    } catch (error) {
      console.log('error in response',error );
    }
  }

  useEffect(()=>{
    // axios.put
    // axios.post
    // axios.delete
    let newProduct = {
      title: 'something 5',
      price: 200,
      description:'some description 5' 
    }
    networkCalls(newProduct,'62d418041a3aed5f725f7bf4')
  
  },[])
  return (
    <>
    <h1>React App 2</h1>
    {/* <CustomDatePicker/>
    <hr />
    <DatePickerComponent/> */}
    </>
  )
}
