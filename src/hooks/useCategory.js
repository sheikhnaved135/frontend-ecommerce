import axios from "axios";
import React, { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP}/api/v1/category/get-category`
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  return categories;
};

export default useCategory;
