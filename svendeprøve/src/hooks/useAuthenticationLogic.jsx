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

        const validateEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        };

        if (!email) {
            setError('Indtast venligst email');
            setIsLoggingIn(false);
            return;
        }

        if (!validateEmail(email)) {
            setError('Indtast venligst en gyldig email');
            setIsLoggingIn(false);
            return;
        }

        if (!password) {
            setError('Indtast venglist password');
            setIsLoggingIn(false);
            return;
        }



        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            if (error.status === 400) {
                setError('Forkert email eller password');
            } else {
                setError(error.message);
            }
            console.log(error.message);
            setIsLoggingIn(false);
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

export const useNewsLetterSignUp = () => {

    const supabase = useContext(SupabaseContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [hasSignedUp, setHasSignedUp] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsSigningUp(true);
        setError(null);


        if (email === '') {
            setError('Indtast venligst din email-adresse');

            setTimeout(() => {
                setError('');
                setIsSigningUp(false);
            }, 3000);
            return;
        }

        if (!validateEmail(email)) {
            setError('Indtast venligst en gyldig email-adresse');
            setIsSigningUp(false);
            setTimeout(() => {
                setError('');
            }, 3000);
            return;
        }


        const { data: existingEmails, error: fetchError } = await supabase
            .from('newsletter_emails')
            .select('email')
            .eq('email', email)


        if (fetchError) {

            setIsSigningUp(false);
            return;
        }

        if (existingEmails.length > 0) {
            setError('Emailen er allerede tilmeldt nyhedsbrevet');
            setEmail('');
            setIsSigningUp(false);
            return;
        }

        const { error } = await supabase
            .from('newsletter_emails')
            .insert([
                {
                    email: email
                }
            ]);

        if (error) {
            console.log(error);

            setIsSigningUp(false);
            return;
        }
        else {

            setTimeout(() => {
                setIsSigningUp(false);
                setEmail('');
                setSuccess('Du er nu tilmeldt nyhedsbrevet');
                setHasSignedUp(true);
                setTimeout(() => {
                    setSuccess('');
                }, 3000);
            }, 2000);
        }
    };

    return { email, setEmail, error, handleSignUp, isSigningUp, hasSignedUp, success, setSuccess };


}
