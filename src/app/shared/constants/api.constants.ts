import {environment} from '../../../environments/environment';

const AUTH = {
  login: environment.apiHost + '/auth/login',
  register: environment.apiHost + '/auth/register',
};

const PRODUCTS = {
  getAll: environment.apiHost + '/products',
  getProduct: environment.apiHost + '/products/{id}'
};

export const ENDPOINTS = {
  auth: AUTH,
  products: PRODUCTS
};
