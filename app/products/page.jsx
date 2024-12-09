import React from 'react'
import ProductList from '../../components/ProductList'
import Link from 'next/link'

const fetchProducts = async () => {
  try{
    const response = await fetch('http://localhost:3000/api/products',{cache:'no-store'})
    if(!response.ok){
      console.log("fail to fetch products");
    }
    return await response.json()
  }catch(e){
    console.log(e)
  }
}
async function Products() {

  const {products} =await fetchProducts();
  return (
    <div className='mt-5'>
        <Link href="/addProduct" className='flex justify-end'><button className="btn btn-primary btn-md">Add New Product</button></Link>
        <ProductList products={products}/>

    </div>
  )
}

export default Products