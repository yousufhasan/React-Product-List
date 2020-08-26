import axios from "axios";

const api = axios.create({
  baseURL:
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com",
  //hard code it for exercise purposes.
});

export const makeGetAPICall = (path: string) => {
  return api.get(path);
};