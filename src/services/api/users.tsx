import { useState, useEffect } from "react";

const useUserProfileData = () => {
  const [userProfileData, setUserProfileData] = useState(null);
  const [userProfileDataLoading, setUserProfileDataLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/samiratalanchi');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchUserData();
        setUserProfileData(result);
      } catch (error) {
        console.error('Error loading user data:', error);
      } finally {
        setUserProfileDataLoading(false);
      }
    };
    loadData();
  }, []);

  return { userProfileData, userProfileDataLoading };
};

export default useUserProfileData;