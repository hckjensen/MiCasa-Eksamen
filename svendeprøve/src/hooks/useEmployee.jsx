import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed



export const useEmployee = (id) => {

    const supabase = useSupabase();
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            setLoading(true);
            setError(null);

            let { data: employee, error } = await supabase
                .from('employees')
                .select('*')
                .eq('id', id)


            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setEmployee(employee);
            setLoading(false);
        };
        fetchEmployee();

    }, [supabase]);


    return { employee, loading, error };


}