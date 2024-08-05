import axios from "axios";

class EndpointError extends Error {
  constructor(obj, msg) {
    super();
    this.name = "EndpointError";
    this.message = obj;
    console.error("EndpointError detail", obj, msg);
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(obj).stack;
    }
  }
}

class Fetcher {
  constructor(apis, endpoints) {
    this.apis = apis;
    this.endpoints = endpoints;
  }

  apis = {};
  defaultApi = undefined;
  endpoints = {};
  method = "GET";
  body = null;

  customOptions = {};

  get proxy() {
    const that = this;

    return new Proxy(that.endpoints, {
      get(target, prop) {
        that.defaultApi = apis[prop] || apis["ip"];
        if (!target[prop])
          throw new EndpointError("There isn't such endpoint", target[prop]);
        return new Proxy(target[prop], {
          get(subTarget, subProp) {
            if (!subTarget[subProp])
              throw new EndpointError(
                "There isn't such endpoint",
                target[prop]
              );
            return (...params) => {
              const all = [...params];
              return that.call(that.endpoints[prop][subProp](...all));
            };
          },
        });
      },
    });
  }

  get from() {
    return this.proxy;
  }
  get to() {
    return this.proxy;
  }

  call = async (endpoint) => {
    try {
      if (!this.defaultApi) return false;

      const url = `${this.defaultApi}/${endpoint}`.replace(
        /([^:]\/)\/+/g,
        "$1"
      );
      const body = this.body ? { data: this.body } : {};
      const options = {
        method: this.method,
        ...body,

        ...this.customOptions,
      };

      return await this.requestCall(url, options);
    } catch (e) {
      console.log("e", e);
      return e;
    }
  };

  requestCall = async (url, options) => {
    try {
      const res = await axios({
        url: url,

        ...options,
      });
      return res;
    } catch (error) {
      console.log("error", error);
      console.log("error-response", error.response);
      return error.response;
    }
  };

  setOptions = (customOptions) => {
    this.customOptions = customOptions;
    return this;
  };

  get get() {
    this.method = "GET";
    this.body = null;
    return this;
  }

  post = (body) => {
    this.method = "POST";
    this.body = body || {};
    return this;
  };

  put = (body) => {
    this.method = "PUT";
    this.body = body || {};
    return this;
  };

  get delete() {
    this.method = "DELETE";
    return this;
  }
}

const API_BASE_URL = process.env.REACT_APP_API;

const apis = {
  ip: `${API_BASE_URL}/`,
};

const endpoints = {
  translate: {
    get_TRFORMCLMNS: () => `translate/get_TRFORMCLMNS`,
    add_TRFORMCLMNS: () => `translate/add_TRFORMCLMNS`,
    update_TRFORMCLMNS: () => `translate/update_TRFORMCLMNS`,
    get_TRREPCLMNS: () => `translate/get_TRREPCLMNS`,
    add_TRREPCLMNS: () => `translate/add_TRREPCLMNS`,
    update_TRREPCLMNS: () => `translate/update_TRREPCLMNS`,
    get_TREXEC: () => `translate/get_TREXEC`,
    add_TREXEC: () => `translate/add_TREXEC`,
    update_TREXEC: () => `translate/update_TREXEC`,
    get_TRREPTITLE: () => `translate/get_TRREPTITLE`,
    add_TRREPTITLE: () => `translate/add_TRREPTITLE`,
    update_TRREPTITLE: () => `translate/update_TRREPTITLE`,
    get_TRPROGPARAM: () => `translate/get_TRPROGPARAM`,
    add_TRPROGPARAM: () => `translate/add_TRPROGPARAM`,
    update_TRPROGPARAM: () => `translate/update_TRPROGPARAM`,
    get_TRCOLUMNS: () => `translate/get_TRCOLUMNS`,
    add_TRCOLUMNS: () => `translate/add_TRCOLUMNS`,
    update_TRCOLUMNS: () => `translate/update_TRCOLUMNS`,
    get_TRCATALOG: () => `translate/get_TRCATALOG`,
    add_TRCATALOG: () => `translate/add_TRCATALOG`,
    update_TRCATALOG: () => `translate/update_TRCATALOG`,
    get_TREXTMSG: () => `translate/get_TREXTMSG`,
    add_TREXTMSG: () => `translate/add_TREXTMSG`,
    update_TREXTMSG: () => `translate/update_TREXTMSG`,
    get_TRTRIGMSG: () => `translate/get_TRTRIGMSG`,
    add_TRTRIGMSG: () => `translate/add_TRTRIGMSG`,
    update_TRTRIGMSG: () => `translate/update_TRTRIGMSG`,
    get_TRHELPEXEC: () => `translate/get_TRHELPEXEC`,
    add_TRHELPEXEC: () => `translate/add_TRHELPEXEC`,
    update_TRHELPEXEC: () => `translate/update_TRHELPEXEC`,
    get_TRHELPFORM: () => `translate/get_TRHELPFORM`,
    add_TRHELPFORM: () => `translate/add_TRHELPFORM`,
    update_TRHELPFORM: () => `translate/update_TRHELPFORM`,
    get_TRHELPPROGRAM: () => `translate/get_TRHELPPROGRAM`,
    add_TRHELPPROGRAM: () => `translate/add_TRHELPPROGRAM`,
    update_TRHELPPROGRAM: () => `translate/update_TRHELPPROGRAM`
  }
};

const fetcher = () => {
  return new Fetcher(apis, endpoints).setOptions({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

export default fetcher;
