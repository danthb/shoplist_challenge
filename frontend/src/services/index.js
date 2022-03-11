import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';
const service = axios.create({
    baseURL: baseURL,
  })

const accountAPI = {

    all: () => service.get('/products'),
    getProduct: (_id) => service.get(`/products/product?_id=${_id}`),
    updateProduct: (product) => service.put('/products/update', product),
};
export { accountAPI };