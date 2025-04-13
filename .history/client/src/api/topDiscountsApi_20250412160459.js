import axios from "axios";

export const getTopDiscounts = async () => {
  const res = await axios.get("http://localhost:8000/recommend/top-discounts");
  return res.data;
};
