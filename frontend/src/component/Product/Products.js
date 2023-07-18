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
import Search from '../Product/Search.js';


const categories = [
  {
    name: "Laptop",
    subcategories: ["Green", "Blue", "Red"],
  },
  {
    name: "Footwear",
    subcategories: ["nike", "puma", "addidas"],
  },
  {
    name: "Bottom",
    subcategories: ["Green", "Blue", "Red"],
  },
  {
    name: "Tops",
    subcategories: ["Green", "Blue", "Red"],
  },
  {
    name: "Attire",
    subcategories: ["Green", "Blue", "Red"],
  },
  {
    name: "Camera",
    subcategories: ["Green", "Blue", "Red"],
  },
  {
    name: "SmartPhones",
    subcategories: ["samsung", "apple", "redmi"],
  },
];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const priceHandler = (event, newPrice) => {
  //   setPrice(newPrice);
  // };

  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, subcategory, ratings));

  }, [dispatch, keyword, currentPage, price, category, subcategory, ratings, alert, error]);

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setSubcategory(""); // Resetting the selected subcategory
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h1 className="aboutImage"><Search/></h1>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
            {/* <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            /> */}

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((categoryObj) => (
                <li
                  className={`category-link ${
                    categoryObj.name === category ? "active" : ""
                  }`}
                  key={categoryObj.name}
                  onClick={() => handleCategoryClick(categoryObj.name)}
                >
                  {categoryObj.name}
                </li>
              ))}
            </ul>

            {category && (
              <Fragment>
                <Typography>Subcategories</Typography>
                <ul className="subcategoryBox">
                  {categories
                    .find((categoryObj) => categoryObj.name === category)
                    .subcategories.map((subcategoryName) => (
                      <li
                        className={`subcategory-link ${
                          subcategoryName === subcategory ? "active" : ""
                        }`}
                        key={subcategoryName}
                        onClick={() => setSubcategory(subcategoryName)}
                      >
                        {subcategoryName}
                      </li>
                    ))}
                </ul>
              </Fragment>
            )}
         

            {/* <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(event, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset> */}
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