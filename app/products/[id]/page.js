
import EditProductForm from '@/components/EditProductForm';
import React from 'react'

const fetchProductById = async(id) =>{
    try{
      const res = await fetch(`http://localhost:3000/api/products/${id}`,{cache:'no-store'});
      if(res.ok){
        return await res.json();
      }else{
        throw new Error('Failed to fetch product');
      }
    }catch(error){
      console.error(error);
    }
  
}
async function EditProductPage({params}) {
    const {id} = params;
    const {product} = await fetchProductById(id);
    const{name, image, price, category} =product;

  return (
    <>
        <div>Edit product {id}</div>
       <EditProductForm id={id} name={name} image={image} price={price} category={category}/>
    </>
  )
}

export default EditProductPage