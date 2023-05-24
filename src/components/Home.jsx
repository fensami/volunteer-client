import React from 'react';
import Search from './Search';
import VolunteerData from './VolunteerData';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const volunteers = useLoaderData();
    return (
        <div>
            <Search></Search>
            <div className='grid grid-cols-4 gap-5'>
                {
                    volunteers.map((volunteer, index) => <VolunteerData
                    key={index}
                    volunteer={volunteer}
                    ></VolunteerData>)

                }
            </div>
        </div>
    );
};

export default Home;