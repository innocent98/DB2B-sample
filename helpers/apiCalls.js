// this file contains functions to make api calls. you will call each function as needed.   

import {userRequest} from './requestMethod';

export const makeGet = async (url, headers) => {
  try {
    const res = await userRequest.get(url, {headers: headers});
    return res.data;
  } catch (err) {
    return err;
  }
};

export const makePost = async (url, inputs, headers) => {
  try {
    const res = await userRequest.post(url, inputs, {headers: headers});
    return res.data;
  } catch (err) {
    return err;
  }
};

export const makeUpdate = async (url, inputs, headers) => {
  try {
    const res = await userRequest.put(url, inputs, {headers: headers});
    return res.data;
  } catch (err) {
    return err;
  }
};
