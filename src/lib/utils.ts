export const fetchInitialData = async () => {
  try {
    const response = await fetch("src/data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
