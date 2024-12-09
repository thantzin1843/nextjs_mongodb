import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DeleteBtn from './DeleteBtn'

function ProductList({products}) {
  return (
    <>
      <div>Nextjs CRUD with MongoDB</div>
          <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
      {
        products.map(p=>(
        
            <tbody key={p._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <Image src={p.image} width={100} height={100} alt={p.image}/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{p.name}</div>
                      <div className="text-sm opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td>
               
                  <br />
                  <span className="badge badge-ghost badge-md">{p.category}</span>
                </td>
                <td>{p.price}</td>
                <th>
                  <Link  href={`/products/${p._id}`} className="btn bg-black btn-xs">Details</Link>
                  <DeleteBtn id={p._id} />
                </th>
              </tr>
             
             
            </tbody>
          
        ))
      }
           
          </table>
        </div>
    </>

  )
}

export default ProductList