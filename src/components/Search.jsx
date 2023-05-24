import React from 'react';

const Search = () => {
    return (
        <div className='text-center' >
            <h1 className=' font-semibold text-5xl'>I grow by helping people in need.</h1>
            <div className='mt-5 flex justify-center'>
                <input className='border p-3 font-bold rounded'  type="text" placeholder='Search' />
                <div className="btn">Search</div>
            </div>
            
        </div>
    );
};

export default Search;