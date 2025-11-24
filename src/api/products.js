// import axios from "axios";

// const API = "https://fakestoreapi.com";

// // fetch all products

// export function getAllProducts() {
//   return axios.get(`${API}/products`);
// }

// // fetch single product

// export function getSingleProduct(id) {
//   return axios.get(`${API}/products/${id}`);
// }

import axios from "axios";

const API = "https://fakestoreapi.com";

export function getAllProducts() {
  return axios.get(`${API}/products`);
}

export function getSingleProduct(id) {
  return axios.get(`${API}/products/${id}`);
}
