import {call} from 'redux-saga/effects';
import RequestBuilder from "../../services/RequestBuilder";
import {toastr} from "react-redux-toastr";

export const requestBody = (saga, errorMsg) => function *(...args) {
  try {
    return yield call(saga, ...args)
  } catch (error) {
    if (errorMsg) toastr.error(...errorMsg);
    console.log(error);
  }
};

/**
 * Make get request
 * @param args
 * @returns {IterableIterator<<"CALL", CallEffectDescriptor<RT>>>}
 */
export const makeGetRequest = requestBody(function* (url, settings = { useToken: false }) {
  const { useToken } = settings;

  const requestBuilder = RequestBuilder();
  requestBuilder.setUrl(url);

  if (useToken) requestBuilder.useHeader();

  return yield call([
    requestBuilder,
    requestBuilder.get
  ]);
});

/**
 * Make post request
 * @param url
 * @param body
 * @param settings
 * @returns {IterableIterator<*>}
 */
export const makePostRequest = requestBody(function* (url, body, settings = { useToken: true }) {
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
});
