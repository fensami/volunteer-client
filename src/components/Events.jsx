import React from 'react';
import img from '../assets/logos/Group 1329.png'
import { stringify } from 'postcss';


const Events = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const events  = form.events.value;
        const date = form.date.value;
        const description = form.description.value;

        const file = form.file.value
        const eventx = {
            eventsName: events,
            date,
            description,
            file
        }
        console.log(eventx);

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventx)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='flex gap-5 container mx-auto'>
            <div className='bg-grey'>
                <img className='w-48' src={img} alt="" />
            </div>
            <div className='bg-[#F4F7FC] w-full '>
                <h1 className='font-bold text-xl p-2'>Add event</h1>


                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <article className="flex gap-5">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Events</span>
                                    </label>
                                    <input type="text" name='events' placeholder="Events" className="input input-bordered" />
                                </div>

                                <div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Events Date</a>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" />
                                </div>

                            </article>
                            <article className="flex mt-6 gap-5">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="description" className="input input-bordered" />
                                    {/* <label className="label">
                                        <span className="label-text">Password</span>
                                    </label> */}
                                </div>


                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Banner</span>
                                            {/* <span className="label-text-alt">Alt label</span> */}
                                        </label>
                                        <input type="file" name='file' className="file-input file-input-bordered w-full max-w-xs" />
                                        {/* <label className="label">
                                            <span className="label-text-alt">Alt label</span>
                                            <span className="label-text-alt">Alt label</span>
                                        </label> */}
                                    </div>
                                </div>
                            </article>

                        </div>
                        <div className=" mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Events;