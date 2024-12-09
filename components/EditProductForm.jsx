'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function EditProductForm({id,name, image , price, category}) {
    const [newname,setnewName]= useState(name);
  const [newimage,setnewImage]= useState(image);
  const [newprice,setnewPrice]= useState(price);
  const [newcategory,setnewCategory]= useState(category);
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
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({newname, newimage, newprice, newcategory}),
        })
        if(res.ok){
          router.push('/products');
        }else{
          console.log("fail to update a new product")
        }
      }catch(e){
        console.log(e)
      }
    }
  }

  
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <form onSubmit={handleSubmit} method="post" className='flex flex-col w-1/3 mt-[30px]'>
    <div className='text-red-500'>{errors.name}</div>
    <input
        type="text"
        value={newname}
        placeholder="Type here"
        className="input input-bordered input-info w-full mb-5" onChange={(e)=>setnewName(e.target.value)}/>
    
     <div className='text-red-500'>{errors.image}</div>
    <input
    type="text"
    value={newimage}
    placeholder="Type here"
    className="input input-bordered input-info w-full mb-5" onChange={(e)=>setnewImage(e.target.value)}/>
<div className='text-red-500'>{errors.price}</div>
    <input
    type="number"
    value={newprice}
    placeholder="Type here"
    className="input input-bordered input-info w-full mb-5" onChange={(e)=>setnewPrice(e.target.value)}/>
<div className='text-red-500'>{errors.category}</div>
    <input
    type="text"
    value={newcategory}
    placeholder="Type here"
    className="input input-bordered input-info w-full mb-5" onChange={(e)=>setnewCategory(e.target.value)}/>

    <button className="btn btn-primary btn-md">Update New Product</button>
    </form>
    </div>
  )
}

export default EditProductForm