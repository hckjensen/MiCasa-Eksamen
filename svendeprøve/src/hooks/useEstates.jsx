import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed

const useEstates = (amount) => {
    const supabase = useSupabase();
    const [estates, setEstates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            let { data: estates, error } = await supabase
                .from('estates')
                .select('*')
                .limit(amount ? amount : '');

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setEstates(estates);
            setLoading(false);
        };
        fetchReviews();

    }, [supabase]);


    return { estates, loading, error };
};

export default useEstates;