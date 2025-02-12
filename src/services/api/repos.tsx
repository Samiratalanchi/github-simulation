import { useState, useEffect } from "react";

const useReposData = () => {

    const [repoData, setRepoData] = useState<any>(null);
    const [repoDataLoading, setRepoDataLoading] = useState(true);

    const fetchRepoData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/samiratalanchi/repos');
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
            const result = await fetchRepoData();
            setRepoData(result);
        } catch (error) {
            console.error('Error loading user data:', error);
        } finally {
            setRepoDataLoading(false);
        }
        };
        loadData();
    }, []);

    return { repoData, repoDataLoading };
};

export default useReposData;