// api.js - Handles fetching and posting data
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null if an error occurs
  }
};

export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    return null; // Return null if an error occurs
  }
};
