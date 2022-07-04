import axios from 'axios';
// const apiURL = 'https://ehospi-app.herokuapp.com/';
const apiURL = 'http://localhost:8000/';

export const uploadHospitalPhoto = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + 'hospitalAdmin/uploadPicture';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.post(URL, data, config);
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
export const getHospitalPhoto = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + 'hospitalAdmin/getPicture';
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

export const deleteHospitalPhoto = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + 'hospitalAdmin/deletePicture';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: data,
    };
    let res = await axios.delete(URL, config);
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
