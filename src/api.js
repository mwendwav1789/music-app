// src/api.js

// Helper function for fetching data
export const fetchData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

// Helper function for posting new data
export const postData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error posting data:", error);
      throw error;
    });
};
