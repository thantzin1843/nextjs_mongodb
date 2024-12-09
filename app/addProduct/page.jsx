'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function addProduct() {
  const [name,setName]= useState('');
  const [image,setImage]= useState('');
  const [price,setPrice]= useState('');
  const [category,setCategory]= useState('');
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const validateForm = ()=>{
    const errors = {};
    if(!name){
      errors.name = 'Name is required';
    }
    if(!image){
      errors.image = 'Image is required';
    }
    if(!price){
      errors.price = 'price is required';
    }
    if(!category){
      errors.category = 'category is required';
    }
    setErrors(errors);
    return Object.keys(errors).length==0;
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(validateForm()){
      try{
        const res = await fetch("http://localhost:3000/api/products",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, image, price, category}),
        })
        if(res.ok){
          router.push('/products');
        }else{
          console.log("fail to create a new product")
        }
      }catch(e){
        console.log(e)
      }
    }
  }
  
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-primary'>Add New Product</h1>
            <form onSubmit={handleSubmit} method="post" className='flex flex-col w-1/3 mt-[30px]'>
            <div className='text-red-500'>{errors.name}</div>
            <input
                type="text"
                value={name}
                placeholder="Type here"
                className="input input-bordered input-info w-full mb-5" onChange={(e)=>setName(e.target.value)}/>
            
             <div className='text-red-500'>{errors.image}</div>
            <input
            type="text"
            value={image}
            placeholder="Type here"
            className="input input-bordered input-info w-full mb-5" onChange={(e)=>setImage(e.target.value)}/>
 <div className='text-red-500'>{errors.price}</div>
            <input
            type="number"
            value={price}
            placeholder="Type here"
            className="input input-bordered input-info w-full mb-5" onChange={(e)=>setPrice(e.target.value)}/>
 <div className='text-red-500'>{errors.category}</div>
            <input
            type="text"
            value={category}
            placeholder="Type here"
            className="input input-bordered input-info w-full mb-5" onChange={(e)=>setCategory(e.target.value)}/>

            <button className="btn btn-primary btn-md">Add New Product</button>
            </form>
        
    </div>
  )
}

export default addProduct