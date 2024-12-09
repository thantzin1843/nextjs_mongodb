'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function DeleteBtn({id}) {
    const router = useRouter();
    const handleDelete = async()=>{
        const confirmed = confirm("Are you sure you want to delete?");

        if(confirmed) {
            try{
                const res = await fetch(`http://localhost:3000/api/products?id=${id}`,{method:"DELETE"})
                if(res.ok){
                    router.refresh();
                }
            }catch(e){
                console.log(e)
            }
        }
    }
  return (
    <button onClick={handleDelete} className="btn bg-red-600 ms-3 btn-xs">Delete</button>
  )
}

export default DeleteBtn