import { useState, useEffect } from 'react';
import { useSupabase } from './supabaseProvider'; // Adjust the import path as needed

const useReviews = () => {
    const supabase = useSupabase();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*');

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setReviews(reviews);
            setLoading(false);
        };
        fetchReviews();

    }, [supabase]);


    return { reviews, loading, error };
};

export default useReviews;