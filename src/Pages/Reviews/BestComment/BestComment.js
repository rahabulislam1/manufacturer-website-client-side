import React from 'react';
import doctor from '../../../Assets/Images/cmnt/reviews.png';
const BestComment = () => {
    return (
        <div className='mt-6'>

            <div class="hero w-full bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={doctor} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Best Review</h1>
                        <p class="py-6">I am Ibrahim.I am a Robotics Engineer. For My project purpose, i need to build some robotics project. I am searching for a trusted supplier.My Friend suggested me their server.I ordered many hardware parts from their site.All the products i received was authentic. I am really very happy for their service.Very much Recommended.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestComment;