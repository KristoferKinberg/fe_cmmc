import { call } from 'redux-saga/effects';
import RequestBuilder from "../../services/RequestBuilder";

export const makeGetRequest = function* (url) {
  return yield call(makeRequest('get'), { url });
};

const makeRequest = method => function* ({ url }) {
  try {
    const requestBuilder = RequestBuilder();
    return yield call([requestBuilder, requestBuilder.setUrl(url)[method]]);
  } catch (error) {
    console.log(error);;
  }
};
