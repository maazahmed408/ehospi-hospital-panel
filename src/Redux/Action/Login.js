import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  LOGIN_GET_REQUEST,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_FAIL,
  SIGNUP_GET_REQUEST,
  SIGNUP_GET_SUCCESS,
  SIGNUP_GET_FAIL,
  OTP_GET_REQUEST,
  OTP_GET_SUCCESS,
  OTP_GET_FAIL,
} from '../constants/Login';
export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: LOGIN_GET_REQUEST });
      const { data } = await axios.post(
        '',

        { email, password },
        config,
      );

      dispatch({
        type: LOGIN_GET_SUCCESS,
        payload: data,
      });
      localStorage.setItem('user', JSON.stringify(data));
      if (data) {
        const payload = {
          email: email,
          password: password,
          app_key: 'mkwebsite',
        };

        const secretKey = Buffer.from('website-secret', 'base64');
        const token = jwt.sign(payload, secretKey, { expiresIn: '2d' });
        localStorage.setItem('userInfo', JSON.stringify(token));
      }
    } catch (error) {
      dispatch({
        type: LOGIN_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };

export const signUp =
  ({ username, mobile_no, email, password }) =>
  async (dispatch) => {
    try {
      const config = {
        header: {
          'Content-type': 'multipart/form-data',
        },
      };

      dispatch({ type: SIGNUP_GET_REQUEST });
      const { data } = await axios.post(
        '',
        {
          username,
          mobile_no,
          email,
          password,
        },
        config,
      );

      dispatch({
        type: SIGNUP_GET_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
export const otpsection =
  ({
    otp,
    country_code,
    country_name,
    token,
    email,
    password,
    mobile_number,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      dispatch({ type: OTP_GET_REQUEST });
      const { data } = await axios.post(
        `${process.env.REACT_APP_WEBSITE_URL}/api/verify-otp`,
        { otp, country_code, country_name },
        config,
      );
      dispatch({
        type: OTP_GET_SUCCESS,
        payload: data,
      });
      if (data) {
        localStorage.setItem('userInfo', JSON.stringify(token));
      }
    } catch (error) {
      dispatch({
        type: OTP_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
