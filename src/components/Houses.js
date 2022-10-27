import React, { useState, useEffect } from "react";

export const Houses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://wizard-world-api.herokuapp.com/Houses";
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const houses = await response.json();
        setData(houses);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return <div>These are the fucking houses </div>;
};
