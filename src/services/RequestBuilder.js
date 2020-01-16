// import {BASE_URL} from "./store/env";
import axios from 'axios';
const BASE_URL = 'http://localhost:8889/api/'; // LOCAL

export default () => ({
  url: BASE_URL,
  payload: {},
  header: false,
  timeOut: false,

  /**
   * Add base url
   * @param base
   * @returns {*}
   */
  setUrl(base) {
    this.url = `${this.url}${base}/`;
    return this;
  },

  /**
   * Add url params
   * @param key
   * @param value
   * @returns {*}
   */
  addParam(key, value) {
    this.url = `${this.url}/?${key}=${value}`;
    return this;
  },

  /**
   * Add payload object
   * @param payload
   */
  addPayload(payload) {
    this.payload = payload;
    return this;
  },

  /**
   * Set timeout
   * @param timeout
   * @returns {*}
   */
  setTimeout(timeout) {
    this.timeOut = timeout;
    return this;
  },

  /**
   * Sets a header
   * @param header
   * @returns {setHeader}
   */
  setHeader(header) {
    this.header = header;
    return this;
  },

  /**
   * Use header
   * @returns {useHeader}
   */
  useHeader() {
    this.header = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('jwt')}`,
    };
    return this;
  },

  /**
   * Create axios object
   * @returns {*}
   */
  createAxios() {
    const { header, timeOut: timeout } = this;

    return axios.create({
      baseURL: this.baseURL,
      ...header && header,
      ...timeout && timeout,
    });
  },

  /**
   * Execute get
   * @returns {*}
   */
  async get() {
    return this.createAxios()
      .get(this.url);
  },

  /**
   * Execute post
   * @returns {*}
   */
  async post() {
    return this.createAxios()
      .post(
        this.url,
        this.payload
      )
  }
});
