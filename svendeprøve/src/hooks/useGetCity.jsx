import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed


const useCities = () => {
    const supabase = useSupabase();
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCities = async () => {
            setLoading(true);
            setError(null);

            let { data: cities, error } = await supabase
                .from('cities')
                .select('*');


            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setCities(cities);
            setLoading(false);
        }
        fetchCities();

    }, [supabase]);

    return { cities, loading, error };

};

export default useCities;



export const useCity = (id) => {


    const supabase = useSupabase();
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCity = async () => {
            setLoading(true);
            setError(null);

            let { data: city, error } = await supabase
                .from('cities')
                .select('*')
                .eq('id', id);

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setCity(city);
            setLoading(false);

        }
        fetchCity();
    }, [supabase, id]);



    return { city, loading, error };
}



