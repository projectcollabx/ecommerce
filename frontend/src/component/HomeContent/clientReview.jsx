import React from 'react';
import ReviewBox from './reviewBox';
import './clientReview.css';
const ClientReview = () => {
  return (
    <div className="reviewOuter">
        <div className='reviewTitle'>

        </div>
        <div className='reviewContent'>
            <div className='clientReviewContent'>
            <h1>What Our Client Says</h1>
            <div class="titleUnderline">
						</div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos debitis minus iure accusamus incidunt!</p>
            </div>
            <ReviewBox/>
            <ReviewBox/>
            <ReviewBox/>
            <ReviewBox/>
            <ReviewBox/>

        </div>
    </div>
  );
};

export default ClientReview;
