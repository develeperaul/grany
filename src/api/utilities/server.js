import ky from "ky";
import * as Tokens from "./tokens";

export default class ServiceApi {
  constructor(domain, opts) {
    this.lang = "ru";
    this.domain = domain;
    this.opts = opts;
    this.handleRejectionToken = () => {};
    this.mainKy = this.createMain();
    this.swot = this.createSWOT();
    this.map = new Map();
  }

  createMain() {
    return ky.create({
      prefixUrl: `${this.domain}/${this.opts.apiPath}`,
      timeout: this.opts.timeout,
      hooks: {
        beforeRequest: [
          (request) => {
            if (this.lang) request.headers.set("Accept-Language", this.lang);
          },
        ],
      },
    });
  }

  createSWOT() {
    return this.mainKy.extend({
      hooks: {
        beforeRequest: [
          (request, options) => {
            if(!options?.meta?.cache) return;
            if(this.map.has(request.url)) return this.map.get(request.url);
          },
          (request) => {
            const accessToken = Tokens.getAccessToken();
            if (accessToken !== null) {
              this.setTokenToReq(request, accessToken);
            }
          },
        ],
        afterResponse: [
          (request, options, response) => {
            if(!(response.status >= 200 && response.status < 300 && options?.meta?.cache)) return;
            if(!this.map.has(request.url)) this.map.set(request.url, response);
          },
          async (request, options, response) => {
            if (response.status === 401) return this.handleRejectionToken();
          },
        ],
      },
    });
  }

  setTokenToReq(request, accessToken) {
    request.headers.set("Authorization", "Bearer " + accessToken);
  }

  registrHandleRejectionToken(handler) {
    this.handleRejectionToken = handler;
  }

  setLang(langName) {
    this.lang = langName;
  }
}
