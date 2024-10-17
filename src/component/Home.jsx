import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './Main'; // Import the context

const Home = () => {

    const { prod, search, menu } = useContext(AppContext); // Use prod, search, and menu from context

    return (
        <div className='grid grid-cols-4'>
            {prod
                .filter((data) =>
                    data.title.toLowerCase().includes(
                        search ? search.toLowerCase() : menu.toLowerCase()
                    )
                )
                .map((item, index) => (
                    <Link to="/details" state={{ data: item }} key={index}>
                        <div className='border border-spacing-1 p-2 ml-3 mt-3'>
                            <img src={item.image} alt="" className='w-60 h-48'/>
                            <h1 className='font-bold text-xl'>${item.price}</h1>
                            <h1>{item.title}</h1>
                            <h1>{item.category}</h1>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default Home;

