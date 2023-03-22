import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./productscard.css";

function ProductsCard(props) {
  const price = props.product.hourlyPriceInCents;
  const dollars = (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [favorite, setFavorite] = useState(false);

  const onLocalFaveClicked = (e) => {
    e.preventDefault();
    props.onFaveClicked(props.product, props.product.id, e);
    setFavorite(!favorite);
  };

  return (
    <div className={`mb-4 col-lg-4 col-md-6 ${favorite ? "favorite" : ""}`}>
      <div className="d-flex flex-column justify-content-between border rounded-1 h-100 pb-3">
        <div className="overflow-hidden">
          <div className="position-relative rounded-top overflow-hidden">
            <a className="d-flex justify-content-center">
              <img
                src={props.product.url}
                alt="product of choice"
                className="rounded-top card-image-for-products-card"
              />
            </a>
          </div>
          <div className="p-3">
            <h5 className="fs-0">
              <a className="text-dark">{props.product.name}</a>
            </h5>
            <p className="fs--1 mb-3">
              <a className="text-500" href="/e-commerce/product/product-grid#!">
                {props.product.productType.name}
              </a>
            </p>
            <h5 className="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">
              Price per hour: {dollars}
            </h5>
          </div>
        </div>
        <div className="d-flex align-items-center px-3">
          <div className="flex-1">
            <span style={{ display: "inline-block", direction: "ltr" }}>
              <span
                style={{
                  cursor: "inherit",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <span style={{ visibility: "visible" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-warning"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  cursor: "inherit",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <span style={{ visibility: "hidden" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-warning"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  cursor: "inherit",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <span style={{ visibility: "hidden" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-warning"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  cursor: "inherit",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "50%",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-warning"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
              <span
                style={{
                  cursor: "inherit",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-300"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    width: "0%",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18 text-warning"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                </span>
              </span>
            </span>
            <span className="ms-1">
              (6)
              {/* see if you can pull the total amount of reviews for product and insert here. */}
            </span>
          </div>
          <button
            type="button"
            className="me-2 btn btn-falcon-default btn-sm favorites"
            onClick={onLocalFaveClicked}
          >
            <FiHeart />
          </button>
          <button
            type="button"
            className="btn btn-falcon-default btn-sm shopping-cart"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    productType: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    hourlyPriceInCents: PropTypes.number.isRequired,
    statusType: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
  }),
  onFaveClicked: PropTypes.func.isRequired,
};

export default ProductsCard;
