import React from 'react';

const VolunteerData = ({ volunteer }) => {
    const { title, img } = volunteer

    return (
        
            <div className='relative bg-slate-500'>
            <img className=''  src={img} />
           
           <p className="w-full bg-orange-400">{title}</p>
           
        </div>
        
    );
};

export default VolunteerData;