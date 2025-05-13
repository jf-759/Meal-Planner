import React, { useEffect } from "react";

const TestSpoonacular = () => {
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const query = "chicken";

      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log("Fetched Spoonacular Data:", data);
      } catch (error) {
        console.error("Error fetching Spoonacular data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "1rem", background: "#f0f0f0", marginBottom: "1rem" }}>
      <h2>🔍 Testing Spoonacular API…</h2>
      <p>Check your browser console for results.</p>
    </div>
  );
};

export default TestSpoonacular;
