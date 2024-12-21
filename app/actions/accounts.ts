'use server'

import axios from "axios";
import { cookies } from "next/headers";


export const setToken = async(refresh:string, access: string) => {
   (await cookies()).set("refresh", refresh,{  httpOnly:true, 
                                        secure:true, 
                                        sameSite:"strict",
                                        maxAge: 60 * 60 * 24 
                                        });

    (await cookies()).set("access", access,{    httpOnly:true, 
                                        secure:true, 
                                        sameSite:"strict",
                                        maxAge: 60 * 60 * 10
                                        })
}

export const clearToken = async() =>{
    (await cookies()).delete("refresh");
    (await cookies()).delete("access");
}

export const getRefreshTokenFromCookie = async() => {
    const cookieStore = await cookies()
    const refresh = cookieStore.get("refresh")
    return refresh ? refresh : null;
}

export const getAccessTokenFromCookie = async() => {
    const cookieStore = await cookies()
    const access = cookieStore.get("access")
    return access ? access : null;
}

export async function clearRefreshToken(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    cookies().delete("refresh")
  }


// Create Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your Django backend URL
});

// Add interceptor for refreshing tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is due to access token expiration
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Request a new access token using the refresh token
        const refreshResponse = await axios.post(
          "http://127.0.0.1:8000/users/token/refresh/",
          {
            refresh: getRefreshTokenFromCookie(), // Function to retrieve refresh token from cookie
          }
        );

        // Update Axios headers with the new access token
        api.defaults.headers.common["Authorization"] =
          "Bearer " + refreshResponse.data.access;

        // Retry the original request with the new token
        return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., redirect to login)
        console.error("Refresh token invalid. Redirecting to login...");
        // logoutUser(); // Clear tokens and redirect to login page
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export async function login(email: string, password: string) {
  
    try {
      const response = await api.post("/users/token/", { email, password });
      const { access, refresh } = response.data;
  
      // Set refresh token in cookies
      setToken(refresh, access);
  
      // Set access token in Axios headers
      api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
  
      return true; // Login success
    } catch (error) {
      console.error("Login failed:", error);
      return false; // Login failed
    }
  }
  
  export async function upload_file(file:FormData) {

    const access =  getAccessTokenFromCookie()
    console.log(access)
    api.defaults.headers.common["Authorization"] =
    "Bearer " + access
  
    try {
      const response = await api.post("/api/save_program/", file);
  
      return true; // Login success
    } catch (error) {
      console.error("Login failed:", error);
      return false; // Login failed
    }
  }




export default api;
