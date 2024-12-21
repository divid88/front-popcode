'use server'
import { cookies } from "next/headers";

const refreshAccessToken = async () => {
    const refreshToken = (await cookies()).get('refresh')
  
    if (!refreshToken) {
      console.error('No refresh token available.');
      return false;
    }
  
    try {
      const response = await fetch('http://127.0.0.1:8000/users/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken.value }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        return true;
      } else {
        console.error('Failed to refresh access token.');
        return false;
      }
    } catch (error) {
      console.error('Refresh token error:', error);
      return false;
    }
  };
  

const fetchWithToken = async (url: string ,
                              options: RequestInit = {}) => {
    const access = (await cookies()).get('access')
    
 
    if (!access?.value) {
      throw new Error('No access token available.');
    }
  
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${access.value}`,
    };
  
    const response = await fetch(url,{ ...options, headers });
  
    // اگر توکن منقضی شده بود، درخواست را با توکن جدید امتحان کن
    if (response.status === 401) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        return fetchWithToken(url, options); // درخواست مجدد با توکن جدید
      }
     
    }
  
    return response;
  };

  export default fetchWithToken;



export const getSubjects = async() => {

    const response = await fetch(`${process.env.DJANGO_URL}api/subjects`);

    let subjects = await response.json();
    return subjects
    
}



export const getProgramTest = async(pk:number) => {

  const response = await fetch(`${process.env.DJANGO_URL}api/get_test_program/${pk}/`);

  let subjects = await response.json();
  return subjects
  
}