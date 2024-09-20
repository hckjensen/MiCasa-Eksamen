import { useState } from 'react';
import { useSupabase } from '../providers/supabaseProvider';



export const usePostMessage = () => {
    const supabase = useSupabase();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeError, setEmployeeError] = useState('');
    const [hasCommented, setHasCommented] = useState(false);
    const [shake, setShake] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const postMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (name === '') {
            setNameError(true);
            setShake(true);
            setTimeout(() => {
                setShake(false);
                setLoading(false);
            }, 1000);
            ;
        } else {
            setNameError(false);
        }

        if (email === '') {
            setEmailError(true);
            setShake(true);
            setTimeout(() => {
                setShake(false);
                setLoading(false);
            }, 1000);
        } else if (!validateEmail(email)) {
            setEmailErrorMessage('Ugyldig email');
            setEmailError(true);
            setLoading(false);
            setShake(true);
            setTimeout(() => {
                setShake(false);
                setLoading(false);
            }, 1000);
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (employeeId === '') {
            setEmployeeError('Vælg en medarbejder');
            setShake(true);
            setTimeout(() => {

                setShake(false);
                setLoading(false);
            }, 1000);
        } else {
            setEmployeeError(false);
        }


        if (message === '') {
            setMessageError('Skriv venligst en besked');
            setShake(true);
            setTimeout(() => {
                setShake(false);

                setLoading(false);
            }, 1000);
        } else {
            setMessageError(false);
        }


        if (name === '' || email === '' || message === '' || employeeId === '') {
            setError('Udfyld venligst alle felter');
            setLoading(false);
            return;
        }




        const { error } = await supabase
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

    return { postMessage, shake, loading, error, name, email, message, setName, setEmail, setMessage, hasCommented, setHasCommented, employeeId, setEmployeeId, success, setSuccess, nameError, emailError, messageError, employeeError, emailErrorMessage, setEmailErrorMessage };
}