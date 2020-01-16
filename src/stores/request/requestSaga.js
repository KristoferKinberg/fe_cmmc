import {call, put, select} from 'redux-saga/effects';
import RequestBuilder from "../../services/RequestBuilder";
import {toastr} from "react-redux-toastr";
import {actionSetInvited} from "../admin/adminActions";

export const requestBody = (saga, errorMsg) => function *(...args) {
  try {
    yield call(saga, ...args)
  } catch (error) {
    if (errorMsg) toastr.error(...errorMsg);
    console.log(error);
  }
};

export const makeGetRequest = function* (url) {
  return yield call(makeRequest('get'), { url });
};

/**
 *  * Make post request
 * @param url
 * @param body
 * @param settings
 * @returns {IterableIterator<*>}
 */
export const makePostRequest = function* (url, body, settings = { useToken: true }) {
  try {
    const { useToken } = settings;

    const requestBuilder = RequestBuilder();
    requestBuilder
      .setUrl(url)
      .addPayload(body);

    if (useToken) requestBuilder.useHeader();

    return yield call([
      requestBuilder,
      requestBuilder.post
    ]);
  } catch (error) {
    console.log(error);;
  }
};

/**
 * Useless request template.. Redo plxxx
 * @param method
 * @returns {Function}
 */
const makeRequest = method => function* ({ url }) {
  try {
    const requestBuilder = RequestBuilder();
    return yield call([requestBuilder, requestBuilder.setUrl(url)[method]]);
  } catch (error) {
    console.log(error);;
  }
};
