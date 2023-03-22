import React, { useEffect, useState } from "react";
import debug from "sabio-debug";
import ProductsCard from "./ProductsCard";
import productService from "services/productService";
import { Formik, Form, Field } from "formik";
import Pagination from "rc-pagination";
import locale from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";

const Products = () => {
  const _logger = debug.extend("Products.jsx");

  const [pageData, setPageData] = useState({
    productsComponents: [],
    pageIndex: 0,
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    totalPages: 0,
  });

  const [formData] = useState({ search: "" });

  const [renderFaves, setRenderFaves] = useState({ show: true });

  useEffect(() => {
    _logger("useEffect firing for getProducts");
    productService
      .getAllPag(pageData.pageIndex, pageData.pageSize)
      .then(onGetAllSuccess)
      .catch(onGetAllError);
  }, [pageData.pageIndex, formData.search]);

  const mapProducts = (aProduct) => {
    return (
      <ProductsCard
        product={aProduct}
        key={aProduct.id + " " + aProduct.fileId + " " + aProduct.createdBy}
        onFaveClicked={onFaveRequested}
      />
    );
  };

  const handleSubmit = (values) => {
    _logger("submit clicked");
    if (!values.search || values.search === "") {
      _logger("===all");
      productService
        .getAllPag(pageData.pageIndex, pageData.pageSize)
        .then(onGetAllSuccess)
        .catch(onGetAllError);
    } else {
      _logger("===search");
      productService
        .search(pageData.pageIndex, pageData.pageSize, values.search)
        .then(onSearchSuccess)
        .catch(onSearchError);
    }
  };

  const onSelectChange = (event) => {
    _logger("select value changed", { syntheticEvent: event });
    if (event.target.value === "productType") {
      _logger("firing axios call to select by productType paginated");
      productService
        .getByProdType(pageData.pageIndex, pageData.pageSize)
        .then(onGetProdTypeSuccess)
        .catch(onGetProdTypeError);
    } else if (event.target.value === "price") {
      _logger("would fire an axios call to filter by price.");
    } else if (event.target.value === "standId") {
      _logger("firing axios call to select by stand id");
      productService
        .getByStandId(2)
        .then(onGetByStandSuccess)
        .catch(onGetByStandError);
    }
  };

  const onPageClicked = (current, pageSize) => {
    _logger("pagination clicked", current, pageSize);
    setPageData((prevState) => {
      const pagProducts = { ...prevState };
      pagProducts.pageIndex = current - 1;
      pagProducts.currentPage = current;
      return pagProducts;
    });
  };

  const onFaveRequested = (myProduct, myProductId, eObj) => {
    _logger({ myProduct, myProductId, eObj });
  };

  const onFaveClicked = () => {
    _logger("favorites toggle button clicked");
    setRenderFaves((prevState) => {
      const renderedCard = { ...prevState };
      if (renderedCard.show) {
        renderedCard.show = false;
      } else {
        renderedCard.show = true;
      }
      return renderedCard;
    });
  };

  //#region Event Handlers
  const onGetAllSuccess = (response) => {
    _logger(response);
    let productsArray = response.data.item.pagedItems;
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.productsComponents = productsArray.map(mapProducts);
      pd.totalCount = response.data.item.totalCount;
      return pd;
    });
  };

  const onGetAllError = (error) => {
    _logger({ error });
  };

  const onSearchSuccess = (response) => {
    _logger(response);
    let productsArray = response.data.item.pagedItems;
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.productsComponents = productsArray.map(mapProducts);
      pd.totalCount = response.data.item.totalCount;
      pd.totalPages = response.data.item.totalPages;
      return pd;
    });
  };

  const onSearchError = (error) => {
    _logger({ error });
  };

  const onGetProdTypeSuccess = (response) => {
    _logger(response);
    let productsArray = response.data.item.pagedItems;
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.productsComponents = productsArray.map(mapProducts);
      pd.totalCount = response.data.item.totalCount;
      pd.totalPages = response.data.item.totalPages;
      return pd;
    });
  };

  const onGetProdTypeError = (error) => {
    _logger({ error });
  };

  const onGetByStandSuccess = (response) => {
    _logger(response);
    let productsArray = response.data.item;
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.productsComponents = productsArray.map(mapProducts);
      return pd;
    });
  };

  const onGetByStandError = (error) => {
    _logger({ error });
  };
  //#endregion

  return (
    <div className="base-content-card d-flex justify-content-center">
      <div className="content w-75">
        <div className="mb-3 card">
          <div className="card-body">
            <div className="flex-between-center row">
              <div className="col-sm-auto">
                <div className="gx-2 align-items-center row">
                  <div className="col-auto">
                    <div className="gx-2 row">
                      <div className="col-auto">
                        <small>Sort by:</small>
                      </div>
                      <div className="col-auto">
                        <div className="input-group input-group-sm">
                          <select
                            className="pe-5 form-select"
                            onChange={onSelectChange}
                          >
                            <option value="price" defaultValue="">
                              Price
                            </option>
                            <option value="productType">Product Type</option>
                            <option value="standId">Stand</option>
                            {/* <option value="rating">Rating</option>
                          <option value="review">Review</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2 mb-sm-0 col-sm-auto">
                <Pagination
                  onChange={onPageClicked}
                  current={pageData.currentPage}
                  pageSize={pageData.pageSize}
                  total={pageData.totalCount}
                  className="d-flex justify-content-center my-3"
                  locale={locale}
                />
              </div>
              <div className="d-flex align-items-center mb-2 mb-sm-0 col-sm-auto">
                <button
                  type="button"
                  onClick={onFaveClicked}
                  className="btn btn-success rounded-pill"
                >
                  Favorites
                </button>
              </div>
              <div className="d-flex align-items-center mb-2 mb-sm-0 col-sm-auto">
                <Formik
                  enableReinitialize={true}
                  initialValues={formData}
                  onSubmit={handleSubmit}
                >
                  <Form className="position-relative input-group">
                    <Field
                      id="search"
                      name="search"
                      placeholder="Search..."
                      aria-label="Search"
                      type="search"
                      className="rounded-pill search-input form-control"
                    />
                    <button
                      className="rounded-pill btn btn-primary"
                      type="submit"
                    >
                      Search
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 card">
          <div className="pb-0 card-body">
            {renderFaves.show ? (
              <div className="row">{pageData.productsComponents}</div>
            ) : (
              <div className="row">
                <h1>TESTING</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
