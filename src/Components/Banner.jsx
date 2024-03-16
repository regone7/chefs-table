import React from 'react';
import Image from '../images/bgimage1.png'


const Banner = () => {
    
    return (
        <div>
            <div class="hero min-h-screen hero-overlay bg-opacity-60 rounded-2xl container mx-auto" style={{ backgroundImage: `url(${Image})` }} >
                
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">How to Cook Spaghetti Squash</h1>
                        <p class="mb-5">Spaghetti squash is such a fun, underrated vegetable! Here is my favorite way to cook it, along with a few tips and recipes.</p>
                        <div className='flex gap-3 justify-center'>
                        <button class="btn btn-primary rounded-full">Explore Now</button>
                        <button class="btn btn-outline btn-info rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;