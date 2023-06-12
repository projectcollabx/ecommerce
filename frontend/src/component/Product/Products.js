import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

// Array of available categories
const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

// Array of available sub categories
const subcategories = [
  "Green",
  "blue",
  "red",
];
const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  // State variables
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [price, setPrice] = useState([0, 25000]); // Price range
  const [category, setCategory] = useState(""); // Selected category
  const [subcategory, setSubcategory] = useState("");

  const [ratings, setRatings] = useState(0); // Selected rating

  // Extracting data from the Redux store using useSelector
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword; // Extracting keyword from the URL

  // Function to handle page number change
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  // Function to handle price range change
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount; // Number of filtered products

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // Dispatching the getProduct action with the specified parameters
    // dispatch(getProduct(keyword, currentPage, price, category, ratings));
    dispatch(getProduct(keyword, currentPage, price, category, subcategory, ratings));

  }, [dispatch, keyword, currentPage, price, category, subcategory, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader /> // Displaying a Loader component while loading
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} /> // Displaying ProductCard component for each product
              ))}
          </div>

          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            {/* <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}

              
            </ul> */}

            {/* <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className={`category-link ${
                    category.name === category ? "active" : ""
                  }`}
                  key={category.name}
                  onClick={() => setCategory(category.name)}
                >
                  {category.name}
                  {category.name === category && (
                    <ul className="subcategoryBox">
                      {category.subcategories.map((subcategory) => (
                        <li
                          className={`subcategory-link ${
                            subcategory === subcategory ? "active" : ""
                          }`}
                          key={subcategory}
                          onClick={() => setSubcategory(subcategory)}
                        >
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul> */}
            
            <Typography>Categories</Typography>
<ul className="categoryBox">
  {categories.map((category) => (
    <li
      className={`category-link ${category.name === category ? "active" : ""}`}
      key={category.name}
      onClick={() => setCategory(category.name)}
    >
      {category.name}
    </li>
  ))}
</ul>

<Typography>Subcategories</Typography>
<ul className="subcategoryBox">
  {categories.map((category) => (
    category.name === category && (
      subcategories.map((subcategory) => (
        <li
          className={`subcategory-link ${
            subcategory === subcategory ? "active" : ""
          }`}
          key={subcategory}
          onClick={() => setSubcategory(subcategory)}
        >
          {subcategory}
        </li>
      ))
    )
  ))}
</ul>


            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
