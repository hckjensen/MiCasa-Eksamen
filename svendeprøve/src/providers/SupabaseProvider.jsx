import { createContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropTypes from 'prop-types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }) => {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
};

SupabaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};