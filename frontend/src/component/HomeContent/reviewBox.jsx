import React from 'react';
import imgLink from './../../images/sample1.jpg';
import './reviewBox.css';
const ReviewBox = () => {
  return (
    <div className='reviewBox'>
      <div className='reviewParent'>
        <div className='reviewBoxContent'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, labore!</p>
        </div>
        
        <div className='reviewBoxContent'>
            <p>Lorem ipsum</p>
        </div>
        </div>
        <div className="reviewBoxContent">
            <img src={imgLink} />
          </div>
    </div>
  );
};

export default ReviewBox;



