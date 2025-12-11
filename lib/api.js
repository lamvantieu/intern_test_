import axios from 'axios';

const BASE_URL = 'https://6938e7e24618a71d77d19513.mockapi.io/api/v1/course';

export const courseApi = {
  list: (page = 1, limit = 10, search = '') => {
    const q = `?page=${page}&limit=${limit}${search ? '&search=' + encodeURIComponent(search) : ''}`;
    return axios.get(`${BASE_URL}${q}`);
  },
  get: (id) => axios.get(`${BASE_URL}/${id}`),
  create: (data) => axios.post(BASE_URL, data),
  update: (id, data) => axios.patch(`${BASE_URL}/${id}`, data),
  remove: (id) => axios.delete(`${BASE_URL}/${id}`),
};
