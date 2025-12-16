import axios, { AxiosInstance } from 'axios';

// Optional: Configure base URL from environment variables
const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || '';

// Create axios instance with default configuration
const httpClient: AxiosInstance = axios.create({
    baseURL,
    timeout: 30000, // 30 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Response interceptor - useful for error handling, response transformation, etc.
httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common error cases
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            console.error('HTTP Error:', status, data);
        } else if (error.request) {
            // Request was made but no response received
            console.error('Network Error:', error.message);
        } else {
            // Something else happened
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    },
);

export default httpClient;

