import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed

export const useEstates = (amount) => {
    const supabase = useSupabase();
    const [estates, setEstates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEstates = async () => {
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
        fetchEstates();

    }, [supabase]);


    return { estates, loading, error };
};

export const useEstate = (id) => {

    const supabase = useSupabase();
    const [estate, setEstate] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEstate = async () => {
            setLoading(true);
            setError(null);

            let { data: estate, error } = await supabase
                .from('estates')
                .select('*')
                .eq('id', id)


            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setEstate(estate);
            setLoading(false);
        };
        fetchEstate();

    }, [supabase]);


    return { estate, loading, error };


}