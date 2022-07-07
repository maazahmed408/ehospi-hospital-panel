import axios from 'axios';
import { baseUrl } from '../views/config.js/baseUrl';
const apiURL = baseUrl;

export const getIncome = async (data) => {
  try {
    console.log('Inside login service data = ', data);

    let URL = apiURL + '/hospitalAdmin/getIncome';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getAllBeds = async (data) => {
  try {
    console.log('Inside login service data = ', data);

    let URL = apiURL + '/hospitalAdmin/getAllBeds';
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    console.log('API URL endpoint = ', URL);
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getAllPatients = async (data) => {
  try {
    console.log('Inside login service data = ', data);

    let URL = apiURL + '/hospitalAdmin/getAllPatients';
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    console.log('API URL endpoint = ', URL);
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
