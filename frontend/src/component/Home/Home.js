import React, { Fragment, useEffect, useState } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import CountUp from 'react-countup';
import ScrollTriger from 'react-scroll-trigger';
import './Counter.css';
import SectionParent from '../HomeContent/SectionParent';
// Import your logo image
import logo from "../../images/a&s_logo.png";
import ClientReview from "../HomeContent/clientReview";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* Add your logo */}
          {/* <img src={logo} alt="Logo" className="logo" /> */}

          <div className="banner">
            <h1>Discover Endless</h1>
            <h1>Possibilities</h1>
            <a href="#container">
              <button>
                Discover <CgMouse />
              </button>
            </a>
          </div>

          <ScrollTriger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="counter-container">
    <div className="counter counter-animation">
          {counterOn && <CountUp start={0} end={1000} duration={5} delay={0} useEasing={true}
        useGrouping={true}/>}
          +
          </div>
          <div className="counter counter-animation">
          {counterOn && <CountUp start={0} end={4} duration={15} delay={0} useEasing={true}
        useGrouping={true}/>}
          +
          </div>
          <div className="counter counter-animation">
          {counterOn && <CountUp start={0} end={300} duration={5} delay={0} useEasing={true}
        useGrouping={true}/>}
          +
          </div>
          <div className="counter counter-animation">
          {counterOn && <CountUp start={0} end={700} duration={5} delay={0} useEasing={true}
        useGrouping={true}/>}
          +
          </div>
  </div>
        </ScrollTriger>

          <h2 className="homeHeading">Featured Products</h2>
        {/* <CountUp end = {100} duration = {5}/> */}
        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>


       <SectionParent/>
       <ClientReview/>
     




        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;


