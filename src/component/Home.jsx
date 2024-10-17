import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({products,search,menu}) => {

  return (
    <div className='grid grid-cols-4'>
      {products.filter((data)=> data.title.toLowerCase().includes(search? search.toLowerCase() : menu.toLowerCase())).map((item, index)=>{

        return <Link to="/details" state={{data:item}}>
            <div className='border border-spacing-1 p-2 ml-3 mt-3'>
                <img src={item.image} alt="" className='w-60 h-48'/>
                <h1 className='font-bold text-xl'>${item.price}</h1>
                <h1>{item.title}</h1>
                <h1>{item.category}</h1>
            </div></Link>
      })}
    </div>
  );
};

export default Home
