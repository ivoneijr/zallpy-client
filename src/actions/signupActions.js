import axios from 'axios';
import { API_URL } from '../constants';


export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/users`, userData);
  }
}