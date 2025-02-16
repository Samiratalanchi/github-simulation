import { useState, useEffect } from "react";

const useReposData = (userName:string) => {

    const [repoData, setRepoData] = useState<any>(null);
    const [repoDataLoading, setRepoDataLoading] = useState(true);

    const fetchRepoData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/repos`);
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
            setRepoDataLoading(true)
            try {
                const result = await fetchRepoData();
                setRepoData(result);
            } catch (error) {
                console.error('Error loading user data:', error);
            } finally {
                setRepoDataLoading(false);
            }
        };
        if (userName) {
            loadData();
        }
    }, [userName]);

    return { repoData, repoDataLoading };
};

export default useReposData;