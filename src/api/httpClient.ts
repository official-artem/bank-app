import { getParamsType } from "@/data/types/request.types";
import { Request } from "./Request.class";

export class Get extends Request {
  private _params: string | undefined;

  constructor(_url: string, _params?: getParamsType | string) {
    super(_url);
    if (!_url.length) {
      throw new Error("Invalid url");
    }

    switch (true) {
      case typeof _params === "string":
        this._params = _params;
        break;
      case typeof _params === "object":
        this._params = Object.entries(_params)
          .map((entry) => entry.join("="))
          .join("&");
        break;
    }
  }

  getData() {
    return fetch(this._url)
      .then((data) => data.json())
      .catch((err) => err);
  }

  get params(): getParamsType | undefined {
    if (!this._params) return;

    const queryParams = new URLSearchParams(this._params);
    const paramsObject: getParamsType = {};

    queryParams.forEach((value, key) => {
      paramsObject[key] = value;
    });

    return paramsObject;
  }

  set params(value: getParamsType) {
    if (value) {
      this._params = Object.entries(value)
        .map((entry) => entry.join("="))
        .join("&");
    }
  }

  get url() {
    return this._url;
  }

  set url(value: string) {
    if (!value) {
      return;
    }
  }
}
