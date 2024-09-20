import { useState } from 'react';
import { useSupabase } from '../providers/supabaseProvider';




const useFavorites = (user_id, estate_id) => {

    const supabase = useSupabase();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFavorite, setFavorite] = useState(false);



    const addFavorite = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase
            .from('favorites')
            .insert([
                {
                    user_id: user_id,
                    estate_id: estate_id,

                }
            ]);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }
        else {

            setFavorite(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);


        }


    }
    const removeFavorite = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase
            .from('favorites')
            .delete()
            .eq('estate_id', estate_id)
            .eq('user_id', user_id);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }
        else {

            setFavorite(false);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }

    const checkIfFavorite = async () => {
        setLoading(true);
        setError(null);

        const { data: favorites, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('estate_id', estate_id)
            .eq('user_id', user_id);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        if (favorites.length > 0) {


            setFavorite(true);


        } else {

            setFavorite(false);



        }
        setLoading(false);
    }



    return { addFavorite, loading, error, removeFavorite, checkIfFavorite, isFavorite };


}

export default useFavorites;


