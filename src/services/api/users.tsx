import { useState, useEffect } from "react";

const useUserProfileData = (userName:string) => {
    const [userProfileData, setUserProfileData] = useState(null);
    const [userProfileDataLoading, setUserProfileDataLoading] = useState(true);
    const [status,setStatus] = useState(false)
    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
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
            setUserProfileDataLoading(true);
            try {
                const result = await fetchUserData();
                setUserProfileData(result);
                setStatus(true)
            } catch (error) {
                console.error('Error loading user data:', error);
                setStatus(false)
            } finally {
                setUserProfileDataLoading(false);
            }
        };
        if (userName) {
            loadData();
        }
    }, [userName]);

    return { userProfileData, userProfileDataLoading, status };
};

export default useUserProfileData;