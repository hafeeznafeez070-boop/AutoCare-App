import axios from "axios";

const API = "https://fakestoreapi.com";

// export function getAllProducts() {
//   return axios.get(`${API}/products`);
// }

// export function getSingleProduct(id) {
//   return axios.get(`${API}/products/${id}`);
// }

export function getAllProducts() {
  return axios.get(`${API}/products`);
}

export function getSingleProduct(id) {
  return axios.get(`${API}/products/${id}`);
}
