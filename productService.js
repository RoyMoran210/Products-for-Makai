import axios from "axios";
import { API_HOST_PREFIX } from "./serviceHelpers";

const endpoint = { productUrl: `${API_HOST_PREFIX}/api/products` };

const getAll = () => {
  const config = {
    method: "GET",
    url: `${endpoint.productUrl}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getAllPag = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endpoint.productUrl}/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getByProdType = (pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url: `${endpoint.productUrl}/type?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
}

const getByStandId = (standId) => {
  const config = {
    method: "GET",
    url: `${endpoint.productUrl}/stand/${standId}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
}

const search = (pageIndex, pageSize, query) => {
  const config = {
    method: "GET",
    url: `${endpoint.productUrl}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config);
};

const add = (payload) => {
  const config = {
    method: "POST",
    url: `${endpoint.productUrl}`,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};


const productService = { getAll, getAllPag, getByProdType, getByStandId, search, add };
export default productService;