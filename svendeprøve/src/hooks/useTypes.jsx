import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed


const useTypes = () => {
    const supabase = useSupabase();
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchTypes = async () => {
            setLoading(true);
            setError(null);

            let { data: types, error } = await supabase
                .from('estate_types')
                .select('*');


            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setTypes(types);
            setLoading(false);
        }
        fetchTypes();

    }, [supabase]);

    return { types, loading, error };

};

export default useTypes;


