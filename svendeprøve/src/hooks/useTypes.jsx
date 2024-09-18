import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed


export const useTypes = () => {
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

export const useType = (id) => {


    const supabase = useSupabase();
    const [type, setType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchType = async () => {
            setLoading(true);
            setError(null);

            let { data: type, error } = await supabase
                .from('estate_types')
                .select('*')
                .eq('id', id);

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setType(type);
            setLoading(false);

        }
        fetchType();
    }, [supabase, id]);



    return { type, loading, error };
}


