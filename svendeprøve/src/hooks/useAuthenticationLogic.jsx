import { useContext, useState, useEffect } from 'react';
import { SupabaseContext } from '../providers/supabaseProvider';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const supabase = useContext(SupabaseContext);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout error:', error.message);

        } else {
            logout(false);


        }
        navigate('/login');
    };

    return handleLogout;
};

export const useLogin = (page) => {
    const supabase = useContext(SupabaseContext);
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {

                login(session.user);
            }
        };
        checkSession();
    }, [supabase]);



    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoggingIn(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            setError(error.message);
        } else {

            setTimeout(() => {
                setIsLoggingIn(false);
                if (page === 'login') { navigate('/admin'); }
                setEmail('');
                setPassword('');
                login(data.user);
            }, 1000);
        }


    };

    return { email, setEmail, password, setPassword, error, handleLogin, isLoggingIn };
};