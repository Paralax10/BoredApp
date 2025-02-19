import axios from 'axios';

const API_URL = 'https://catfact.ninja/fact';

export const fetchCatFact = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Example: { fact: "Cats sleep for 70% of their lives." }
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    return null;
  }
};
