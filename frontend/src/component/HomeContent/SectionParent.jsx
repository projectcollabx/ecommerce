import React from 'react';
// import s1 from "../../images/";
import ElementorSection  from '../HomeContent/ElementorSection';
import company_img1 from '../../images/sample1.jpg';
import company_img2 from '../../images/sample2.jpg';
import company_img3 from '../../images/sample3.jpg';
import company_img4 from '../../images/sample4.jpg';

const heading1="Lorem ipsum dolor sit amet consectetur adipisicing elit";
const heading2="orem ipsum dolor sit amet consectetur adipisicing elit";
const heading3="orem ipsum dolor sit amet consectetur adipisicing elit";
const heading4="orem ipsum dolor sit amet consectetur adipisicing elit";

const content1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est eum neque reiciendis magnam asperiores laborum iste odio provident, ipsam inventore sed eaque minus dolores, maxime assumenda culpa, veniam tempora quisquam ipsa deserunt. Expedita.";
const content2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est eum neque reiciendis magnam asperiores laborum iste odio provident, ipsam inventore sed eaque minus dolores, maxime assumenda culpa, veniam tempora quisquam ipsa deserunt. Expedita.";
const content3="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est eum neque reiciendis magnam asperiores laborum iste odio provident, ipsam inventore sed eaque minus dolores, maxime assumenda culpa, veniam tempora quisquam ipsa deserunt. Expedita.";
const content4="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est eum neque reiciendis magnam asperiores laborum iste odio provident, ipsam inventore sed eaque minus dolores, maxime assumenda culpa, veniam tempora quisquam ipsa deserunt. Expedita.";
const SectionParent = () => {


  return (
    <>

     <ElementorSection imgLink = {company_img1} flag={1} heading={heading1} content={content1}/>
     <ElementorSection imgLink = {company_img2} flag={0} heading={heading2} content={content2}/>
     <ElementorSection imgLink = {company_img3} flag={1} heading={heading3} content={content3}/>
     <ElementorSection imgLink = {company_img4} flag={0} heading={heading4} content={content4}/>

    
    </>
  );
};

export default SectionParent;
