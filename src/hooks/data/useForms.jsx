import { useState, useEffect } from "react";
import axios from "axios"; // npm install axios
import ApiClient from "../../utility/api/ApiClient";

const useForms = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);
        const response = await ApiClient.get("/u/forms/all"); // replace with your API
        console.log(forms);
        setForms(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch forms");
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  return { forms, loading, error };
};

export default useForms;
