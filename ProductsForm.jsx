import React from "react";
import { Card } from "react-bootstrap";
import Section from "components/common/Section";
import { Formik, Form, Field, ErrorMessage } from "formik";
import debug from "sabio-debug";
import { productSchema } from "schemas/productSchema";
import productService from "services/productService";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const _logger = debug.extend("productform");

const ProductsForm = () => {
  const formData = {
    name: "",
    productTypeId: "",
    description: "",
    standId: "",
    identifier: "",
    statusType: "",
    hourlyPriceInCents: "",
    position: "",
  };

  const handleSubmit = (values) => {
    _logger("handle submit", values);
    productService.add(values).then(onAddSuccess).catch(onAddError);
  };

  const onAddSuccess = (response) => {
    _logger("ProductForm success", response);
    Toastify({
      text: "Product successfully added!",
      className: "Success",
      style: {
        background: "linear-gradient(to right, green)",
      },
    }).showToast();
  };

  const onAddError = (error) => {
    _logger("ProductFrom error", error);
    Toastify({
      text: "Product could not be added!",
      className: "Error",
      style: {
        background: "linear-gradient(to right, crimson)",
      },
    }).showToast();
  };

  return (
    <Section>
      <Card className="w-75">
        <div className="card h-100">
          <div className="card-header">
            <h5 className="mb-0">Add A Product</h5>
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={formData}
            onSubmit={handleSubmit}
            validationSchema={productSchema}
          >
            <Form>
              <div className="card-body bg-light pb-0">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Product
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Please enter the name of the product here."
                  ></Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="productTypeId">
                    Product Type
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="productTypeId"
                    id="productTypeId"
                  >
                    <option value="">Select your product type.</option>
                    <option value="1">Lock</option>
                    <option value="2">Paddle Board</option>
                    <option value="3">Kayak</option>
                  </Field>
                  <ErrorMessage
                    name="productTypeId"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    placeholder="Please enter a description of the product."
                  ></Field>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="standId">
                    Stands
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="standId"
                    id="standId"
                  >
                    <option value="">Select your stand.</option>
                    <option value="1">Stand 1</option>
                    <option value="2">Stand 2</option>
                    <option value="3">Stand 3</option>
                  </Field>
                  <ErrorMessage
                    name="standId"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="identifier">
                    Identifier
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="identifier"
                    id="identifier"
                    placeholder="Please enter the product's serial number/unique identifier."
                  ></Field>
                  <ErrorMessage
                    name="identifier"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="statusType">
                    Status Type
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="statusType"
                    id="statusType"
                  >
                    <option value="">Select the status of the product.</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                    <option value="3">Pending</option>
                    <option value="4">Flagged</option>
                    <option value="5">Removed</option>
                  </Field>
                  <ErrorMessage
                    name="statusType"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="hourlyPriceInCents">
                    Hourly Price In Cents
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="hourlyPriceInCents"
                    id="hourlyPriceInCents"
                    placeholder="Please enter the product's hourly rate in cents, ex: $10.99 = 1099."
                  ></Field>
                  <ErrorMessage
                    name="hourlyPriceInCents"
                    component="div"
                    className="has-error"
                  />
                  <label className="form-label" htmlFor="position">
                    Position
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="position"
                    id="position"
                    placeholder="Please enter the product's position in the stand."
                  ></Field>
                  <ErrorMessage
                    name="position"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="row d-flex justify-content-center align-content-center">
                  <button
                    className="btn btn-primary d-block w-25 mt-3 mb-3 justify-content-center"
                    type="submit"
                    name="submit"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </Card>
    </Section>
  );
};
export default ProductsForm;
