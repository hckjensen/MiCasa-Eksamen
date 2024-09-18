import { useState, useEffect } from 'react';
import { useSupabase } from '../providers/supabaseProvider'; // Adjust the import path as needed
import { useParams } from 'react-router-dom';



export const useImages = () => {
    const supabase = useSupabase();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            let { data: images, error } = await supabase
                .from('estate_image_rel')
                .select('images(*)')
                .eq('estate_id', id);


            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setImages(images);
            setLoading(false);
        }
        fetchImages();

    }, [supabase]);

    return { images, loading, error };

};

export const usePrimaryImage = (id) => {
    const supabase = useSupabase();
    const [primaryImage, setPrimaryImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchPrimaryImage = async () => {
            setLoading(true);
            setError(null);

            let { data: primaryImage, error } = await supabase
                .from('estate_image_rel')
                .select('images(*)')
                .eq('estate_id', id)
                .eq('is_primary', true)
                .single();

            if (error) {
                setError(error);
                setLoading(false);
                return;
            }

            setPrimaryImage(primaryImage);
            setLoading(false);
        }
        fetchPrimaryImage();

    }, [supabase]);

    return { primaryImage, loading, error };

}