import qs from 'qs';
import _ from 'lodash';
import Axios from 'axios';
import {
  Toast
} from 'antd-mobile';

import {
  getTimeStamp
} from './time.js';

const reqConfig = {
  withCredentials: true
};

const Request = Axios.create(reqConfig);

function del(url, data) {
  return Request.delete(url, {
    params: data
  });
}

function get(url, data) {
  return Request.get(url, {
    params: data
  });
}

function post(url, data) {
  return Request.post(url, data);
}

function throwSrvError(resp) {
  if (resp.data) {
    Toast.fail(`[${resp.data.code}] Server error: ${resp.data.msg}`, 5);
  } else {
    Toast.fail(`Server error: ${JSON.stringify(resp)}`, 10);
  }
  return resp;
}

function procReqError(resp) {
  const error = new Error(resp.statusText);
  error.resp = resp;
  throw error;
}

function checkStatus(resp) {
  if ((resp.status >= 200) && (resp.status < 300)) {
    return resp;
  }
  return throwSrvError(resp);
}

// function checkPermission(resp) {
//   if (resp.data && (resp.data.code === 403)) {
//     return throwSrvError(resp);
//   }
//   return resp;
// }

// function checkRedirect(resp) {
//   if (resp.data && (resp.data.code === 302)) {
//     return throwSrvError(resp);
//   }
//   return resp;
// }

// function checkCode(resp) {
//   if (resp.data && (resp.data.code !== 0)) {
//     return throwSrvError(resp);
//   }
//   return resp;
// }

function procRequest(req) {
  return req
    .then(checkStatus)
    // .then(checkPermission)
    // .then(checkRedirect)
    // .then(checkCode)
    .then(resp => resp.data)
    .catch(procReqError);
}

export function DelJson(url, data) {
  const _data = data ? _.cloneDeep(data) : {};
  _data._t_ = getTimeStamp();
  return procRequest(del(url, _data));
}

export function GetJson(url, data) {
  const _data = data ? _.cloneDeep(data) : {};
  _data._t_ = getTimeStamp();
  return procRequest(get(url, _data));
}

export function PostJson(url, data) {
  return procRequest(post(url, data));
}

export function PostForm(url, data) {
  return procRequest(post(url, qs.stringify(data)));
}
