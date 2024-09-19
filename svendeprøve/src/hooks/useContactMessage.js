import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider';



export const usePostMessage = () => {
    const supabase = useSupabase();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [hasCommented, setHasCommented] = useState(false);
   


    const postMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('contact_messages')
            .insert([
                {
                    name: name,
                    email: email,
                    employee_id: employeeId,
                    message: message,
                    
                }
            ]);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }
        else {

            setTimeout(() => {
                setLoading(false);
                setName('');
                setEmail('');
                setMessage('');
                setEmployeeId('');
                setHasCommented(true);

            }, 1000);
        }


    };

    return {  postMessage, loading, error, name, email, message, setName, setEmail, setMessage, hasCommented, setHasCommented, employeeId, setEmployeeId };
}