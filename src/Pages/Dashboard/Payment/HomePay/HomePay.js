import React from 'react';
import img1 from '../../../../Assets/Images/Payment/cash.jpg';
import img2 from '../../../../Assets/Images/Payment/creditCard2.jpg';
import img3 from '../../../../Assets/Images/Payment/creditCard.jpg';

const HomePay = () => {
    return (
        <div>
            <h2 className='text-secondary text-center text-2xl'>Payment Methods</h2>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="max-w-sm rounded-lg shadow-2xl px-2" alt='' />
                    <img src={img2} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={img3} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default HomePay;