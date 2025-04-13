import axios from "axios";

const BASE = "http://localhost:8000/recommend";

export const getTopDiscounts = async () => {
  const res = await axios.get(`${BASE}/top-discounts`);
  return res.data;
};

export const getTopRated = async () => {
  const res = await axios.get(`${BASE}/top-reviewed`);
  return res.data;
};

export const getHiddenGems = async () => {
  const res = await axios.get(`${BASE}/hidden_gems`);
  return res.data;
};

export const getTopPopular = async () => {
  const res = await axios.get(`${BASE}/top-popular`);
  return res.data;
};
