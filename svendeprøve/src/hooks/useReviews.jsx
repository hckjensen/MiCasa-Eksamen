import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed
import { useAuth } from '../providers/AuthProvider';


export const useFetchReviews = () => {
    const supabase = useSupabase();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*');

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setReviews(reviews);
            setLoading(false);
        };
        fetchReviews();

    }, [supabase]);


    return { reviews, loading, error };
};




export const useFetchUserReviews = () => {
    const supabase = useSupabase();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            let { data: reviews, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('user_id', user.id);

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setReviews(reviews);
            setLoading(false);
        };
        fetchReviews();

    }, [supabase, user]);


    return { reviews, loading, error, setReviews };
};



export const usePostReview = () => {
    const supabase = useSupabase();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [hasCommented, setHasCommented] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { user } = useAuth();


    const postReview = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('reviews')
            .insert([
                {
                    user_id: user.id,
                    content: review,
                    user_name: name,
                    title: title
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
                setReview('');
                setTitle('');
                setHasCommented(true);
                setTimeout(() => {
                    setIsExpanded(false);
                    setIsActive(false);
                    setHasCommented(false);
                }, 2000);

            }, 1000);
        }


    };

    return { postReview, loading, error, review, name, title, setReview, setName, setTitle, hasCommented, setHasCommented, isActive, setIsActive, isExpanded, setIsExpanded };
}

export const useDeleteReview = () => {
    const supabase = useSupabase();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteReview = async (id) => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
            .from('reviews')
            .delete()
            .eq('id', id);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        setLoading(false);
    };

    return { deleteReview, loading, error };
}